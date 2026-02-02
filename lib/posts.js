import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content");

function parseFrontMatter(raw) {
  if (!raw.startsWith("---")) return { data: {}, content: raw };
  const end = raw.indexOf("---", 3);
  const fm = raw.slice(3, end).trim();
  const body = raw.slice(end + 3).trim();
  const lines = fm.split(/\r?\n/);
  const data = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("\"") && val.endsWith("\"")) val = val.slice(1, -1);
    data[key] = val;
  }
  return { data, content: body };
}

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  const posts = files.map((fn) => {
    const raw = fs.readFileSync(path.join(postsDir, fn), "utf-8");
    const { data } = parseFrontMatter(raw);
    const slug = data.slug || fn.replace(/\d{4}-\d{2}-\d{2}-/, "").replace(/\.mdx?$/, "");
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      image: data.image || "",
      _filename: fn,
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}
