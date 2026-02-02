import styles from "./page.module.css";
import { MotionImage } from "../components/MotionImage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/posts";

import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

// async function BlogPosts() {
//     const supabase = await createClient();
//     const { data: posts } = await supabase
//         .from("blogs")
//         .select("*")
//         .order("id", { ascending: false })
//         .limit(4);

//     console.log("Posts:", posts);
// }

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blogs")
    .select("*")
    .order("id", { ascending: false })
    .limit(4);

  // const posts = getAllPosts();
  const latest = posts[0];
  const more = posts.slice(1, 4);

  const transition = {
    duration: 0.5,
    delay: 1,
  };

  return (
    <>
      <div className={styles.hero}>
        <MotionImage
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: transition.delay - 0.5,
          }}
          src="/images/bloghero.png"
          fill={true}
          alt="Image of PCA Church Worship"
          className={styles.heroimagebg}
        />
        <div className={styles.herocentre}>
          <div />
          <div className={styles.herotitle}>
            <p className={styles.herotitletext}>Blog</p>
          </div>
          <div />
        </div>
      </div>

      <div className={styles.content}>
        <section className={styles.latestSection}>
          <h2 className={styles.sectionHeading}>Latest Post</h2>

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
        <section className={styles.moreSection}>
          <h2 className={styles.sectionHeading}>More posts</h2>

          <div className={styles.moreGrid}>
            {more.map((p) => (
              <article key={p.id} className={styles.postCard}>
                <Link href={`/blog/${p.slug}`} className={styles.postLink}>
                  <div className={styles.postImage}>
                    {p.image && (
                      <MotionImage
                        src={p.image}
                        alt={p.title}
                        fill={true}
                        className={styles.latestImageFill}
                      />
                    )}
                  </div>
                  <div className={styles.postBody}>
                    <p className={styles.postMeta}>{p.publish_date}</p>
                    <h4 className={styles.postTitle}>{p.title}</h4>
                    <p className={styles.postExcerpt}>{p.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.moreCta}>
            <Link href="/blog/all">
              <Button asChild variant="outline">
                <p>View all posts</p>
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
