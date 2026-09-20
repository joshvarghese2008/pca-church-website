import styles from "./components.module.css";
import { MotionImage } from "./MotionImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

function getYoutubeThumbnail(url: string) {
  try {
    const parsedUrl = new URL(url);
    const videoId =
      parsedUrl.searchParams.get("v") ||
      parsedUrl.pathname.split("/").filter(Boolean).pop();

    if (!videoId || !["youtube.com", "www.youtube.com", "youtu.be"].includes(parsedUrl.hostname)) {
      return null;
    }

    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  } catch {
    return null;
  }
}

async function isYoutubeVideoPublic(url: string) {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname.toLowerCase();
    const supportedHostnames = [
      "youtube.com",
      "www.youtube.com",
      "m.youtube.com",
      "youtu.be",
      "www.youtu.be",
      "youtube-nocookie.com",
      "www.youtube-nocookie.com",
    ];

    if (!supportedHostnames.includes(hostname)) {
      return false;
    }

    const response = await fetch(
      `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return Boolean(data?.title && data?.author_name);
  } catch {
    return false;
  }
}

function formatSermonDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Sydney",
  }).format(date);
}

export default async function LatestPost() {
  const supabase = await createClient();
  const [{ data: posts, error: postsError }, { data: sermons, error: sermonsError }] = await Promise.all([
    supabase
      .from("blogs")
      .select("*")
      .order("id", { ascending: false })
      .limit(1),
    supabase
      .from("youtube_sermons")
      .select("*")
      .order("id", { ascending: false })
      .limit(10),
  ]);

  if (postsError) {
    console.error("Failed to fetch latest blog post", postsError);
  }

  if (sermonsError) {
    console.error("Failed to fetch latest sermon", sermonsError);
  }

  const latestPost = posts?.[0] ?? null;
  let latestPublicSermon = null;

  for (const sermon of sermons ?? []) {
    if (!sermon.youtube_link) {
      continue;
    }

    if (await isYoutubeVideoPublic(sermon.youtube_link)) {
      latestPublicSermon = sermon;
      break;
    }
  }

  const sermonUrl =
    latestPublicSermon?.youtube_link || "https://www.youtube.com/@pcasydney";
  const sermonThumbnail = latestPublicSermon?.youtube_link
    ? getYoutubeThumbnail(latestPublicSermon.youtube_link)
    : null;

  return (
    <div className={styles.latestBlogContainer}>
      <section className={styles.latestBlogCenter}>
        <h2 className={styles.sectionHeading}>Our Latest Content</h2>

        <div className={styles.latestContentGrid}>
          <article className={styles.latestCard}>
            <div className={styles.latestCardImage}>
              {sermonThumbnail ? (
                <MotionImage
                  src={sermonThumbnail}
                  alt={latestPublicSermon?.title || "Latest sermon"}
                  fill={true}
                  unoptimized={true}
                  className={`${styles.latestImageFill} ${styles.latestSermonImage}`}
                />
              ) : (
                <div className={styles.latestMediaPlaceholder}>Sermon</div>
              )}
            </div>
            <div className={styles.latestCardContent}>
              <p className={styles.latestType}>Sermon</p>
              {latestPublicSermon ? (
                <p className={styles.latestMeta}>
                  {latestPublicSermon.author} · {formatSermonDate(latestPublicSermon.created_at)}
                </p>
              ) : (
                <p className={styles.latestMeta}>PCA Church YouTube channel</p>
              )}
              <h3 className={styles.latestTitle}>
                {latestPublicSermon?.title || "Watch our latest sermons"}
              </h3>

              <div className={styles.ctaContainer}>
                <Link href={sermonUrl} target="_blank" rel="noreferrer">
                  <Button asChild>
                    <span>{latestPublicSermon ? "Watch sermon" : "Watch sermons"}</span>
                  </Button>
                </Link>
              </div>
            </div>
          </article>

          {latestPost ? (
            <article className={styles.latestCard}>
              <div className={styles.latestCardImage}>
                {latestPost.image && (
                  <MotionImage
                    src={latestPost.image}
                    alt={latestPost.title}
                    fill={true}
                    unoptimized={true}
                    className={`${styles.latestImageFill} ${styles.latestBlogImage}`}
                  />
                )}
              </div>
              <div className={styles.latestCardContent}>
                <p className={styles.latestType}>Blog post</p>
                <p className={styles.latestMeta}>{latestPost.date}</p>
                <h3 className={styles.latestTitle}>{latestPost.title}</h3>
                <p className={styles.latestExcerpt}>{latestPost.excerpt}</p>

                <div className={styles.ctaContainer}>
                  <Link href={`/blog/${latestPost.slug}`}>
                    <Button asChild>
                      <span>Read more</span>
                    </Button>
                  </Link>
                  <Link href="/blog/all">
                    <Button
                      asChild
                      variant="outline"
                      className={styles.viewAllButton}
                    >
                      <span>View all posts</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </article>
          ) : null}
        </div>

      </section>
    </div>
  );
}
