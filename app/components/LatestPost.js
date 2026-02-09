import styles from "./components.module.css";
import { MotionImage } from "./MotionImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

export default async function LatestPost() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blogs")
    .select("*")
    .order("id", { ascending: false })
    .limit(4);

  // const posts = getAllPosts();
  const latest = posts[0];

  return (
    <>
      <div className={styles.latestBlogContainer}>
        <section className={styles.latestBlogCenter}>
          <h2 className={styles.sectionHeading}>Latest Blog Post</h2>

          {latest ? (
            <div className={styles.latestCard}>
              <div className={styles.latestCardImage}>
                {latest.image && (
                  <MotionImage
                    src={latest.image}
                    alt={latest.title}
                    fill={true}
                    className={styles.latestImageFill}
                  />
                )}
              </div>
              <div className={styles.latestCardContent}>
                <p className={styles.latestMeta}>{latest.date}</p>
                <h3 className={styles.latestTitle}>{latest.title}</h3>
                <p className={styles.latestExcerpt}>{latest.excerpt}</p>

                <div className={styles.ctaContainer}>
                  <Link href={`/blog/${latest.slug}`}>
                    <Button asChild>
                      <p>Read more</p>
                    </Button>
                  </Link>

                  <Link href="/blog/all">
                    <Button
                      asChild
                      variant="outline"
                      className={styles.viewAllButton}
                    >
                      <p>View all posts</p>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <p>No posts yet.</p>
          )}
        </section>
      </div>
    </>
  );
}
