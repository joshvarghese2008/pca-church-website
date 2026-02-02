import { createClient } from '@/lib/supabase/server';

export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.pcachurchsydney.com';

  const supabase = await createClient();
  const { data: posts } = await supabase
    .from('blogs')
    .select('slug, publish_date')
    .order('publish_date', { ascending: false })
    .limit(1000);

  const staticPages = [
    {
      url: `${base}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${base}/believe`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${base}/give`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${base}/visit`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  const blogUrls = (posts || []).map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publish_date ? new Date(p.publish_date) : new Date(),
    priority: 0.7,
  }));

  return [...staticPages, ...blogUrls];
}