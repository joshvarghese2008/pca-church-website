import { promises as fs } from "fs";
import path, { relative } from "path";

import { createClient } from "@/lib/supabase/server";
import { notFound } from "next/navigation";

import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { MotionImage } from "../../components/MotionImage";
import CopyLink from "../../components/CopyLink";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blogs")
    .select("title, excerpt, image, publish_date, author, slug, tags")
    .eq("slug", params.slug)
    .maybeSingle();

  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pcachurchsydney.com";
  const url = `${base}/blog/${params.slug}`;

  if (!post) {
    return {
      title: "Blog post",
      alternates: { canonical: url },
    };
  }

  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      url,
      images: post.image ? [{ url: post.image }] : undefined,
      type: "article",
      publishedTime: post.publish_date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt ?? undefined,
      images: post.image ? [post.image] : undefined,
    },
    alternates: { canonical: url },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const metaData = await params;
  const slug = metaData.slug;

  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from("blogs")
    .select("id, title, image, author, publish_date, slug, content, excerpt, tags")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Supabase error:", error);
  }

  if (!post) {
    // Not found in DB — return 404
    notFound();
  }

  // Prefer the DB content if provided, otherwise read the local MDX file.
  const source = post.content ?? await fs.readFile(
    path.join(process.cwd(), "content", `${slug}.mdx`),
    "utf-8"
  );

  const data = await compileMDX<{ title: string; date: string }>({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  const title = post.title ?? data.frontmatter?.title ?? "Untitled";

  const tags = post.tags
    ? Array.isArray(post.tags)
      ? post.tags
      : post.tags.split(",").map((t: string) => t.trim())
    : [];

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pcachurchsydney.com";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": articleUrl },
    "headline": title,
    "image": post.image ? [post.image] : undefined,
    "datePublished": post.publish_date,
    "author": post.author ? { "@type": "Person", "name": post.author } : undefined,
    "description": post.excerpt ?? undefined,
    "keywords": tags.length ? tags.join(", ") : undefined,
  };

  return (
    <div className="min-h-screen bg-white">
      <div style={{ minHeight: "110px", backgroundColor: "black" }} />
      <div className="w-full md:max-w-[1140px] md:mx-auto px-0 md:px-6 lg:px-8">
        <div
          className="w-full bg-gray-300 flex items-center justify-center"
          style={{ aspectRatio: "24/9" }}
        >
          {post?.image ? (
            <Image src={post.image} alt={title} className="object-cover" width={1200} height={500} />
          ) : (
            <div />
          )}
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-church-blue mb-7">
          {title}
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          {post?.publish_date} {post?.author ? `• ${post.author}` : ""}
        </p>

        <div className="mb-4">
          <CopyLink url={articleUrl} />
        </div>

        <div className="mb-6">
          {tags.map((tag: string) => (
            <span key={tag} className="inline-block bg-gray-100 text-sm text-gray-700 mr-2 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <article className="prose prose-lg max-w-none prose-headings:text-church-blue prose-a:text-church-blue hover:prose-a:text-blue-700">
          {data.content}
        </article>
      </div>
    </div>
  );
}
