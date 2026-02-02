import styles from "../page.module.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionImage } from "../../components/MotionImage";
import Image from "next/image";

import { getAllPosts } from "@/lib/posts";
import { createClient } from "@/lib/supabase/server";

export default async function AllPostsPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blogs")
    .select("*")
    .order("id", { ascending: false });

  return (
    <>
      <div style={{ backgroundColor: "black", height: "110px" }} />
      <div className={styles.content}>
        <h1 className={styles.sectionHeading}>All posts</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className={styles.postLink}
            >
              <article
                style={{
                  padding: 0,
                  background: "var(--card)",
                  borderRadius: 8,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer",
                  height: "100%",
                }}
              >
                {p.image && (
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "200px",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      color: "var(--secondaryBrand1)",
                      fontSize: 13,
                    }}
                  >
                    {p.publish_date}
                  </p>
                  <h3
                    style={{
                      margin: "8px 0 8px 0",
                      color: "var(--primaryBrand1)",
                      fontSize: 20,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: "#666",
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    {p.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 20 }}>
          <Link href="/blog">
            <Button asChild variant="outline">
              <p>Back to blog</p>
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
