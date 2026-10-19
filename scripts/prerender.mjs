// Writes a static HTML file per SEO route (dist/<slug>.html) with the page content and its own
// <title>, meta description, canonical, social tags and JSON-LD, then regenerates the sitemap.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://tascalab.com";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routes, contentProblems } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const problems = contentProblems();
if (problems.length) {
  console.error(`prerender: ${problems.length} content problem(s):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeText = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// JSON inside <script> must not be able to close the tag
const safeJson = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

const replaceOnce = (html, pattern, replacement, label) => {
  const found = typeof pattern === "string" ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`prerender: could not find ${label} in dist/index.html`);
  return html.replace(pattern, replacement);
};

for (const route of routes) {
  const url = `${SITE_URL}${route.path}`;
  const title = escapeAttr(route.title);
  const description = escapeAttr(route.description);
  let html = template;

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(route.title)}</title>`, "<title>");
  html = replaceOnce(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`, "meta description");
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`, "canonical");
  html = replaceOnce(html, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="article" />`, "og:type");
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`, "og:url");
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`, "og:title");
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`, "og:description");
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`, "twitter:title");
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`, "twitter:description");
  // The homepage's business/FAQ structured data doesn't describe this page; swap in the page's own.
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    route.jsonLd.map((o) => `<script type="application/ld+json">${safeJson(o)}</script>`).join("\n    "),
    "JSON-LD",
  );
  // The homepage <noscript> summary is replaced by the real pre-rendered content.
  html = replaceOnce(html, /<noscript>\s*<h1>[\s\S]*?<\/noscript>\n?/, "", "noscript summary");
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${render(route.path)}</div>`, "#root");

  fs.writeFileSync(path.join(dist, `${route.path.slice(1)}.html`), html);
}

const staticUrls = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/privacy`, changefreq: "monthly", priority: "0.3" },
  { loc: `${SITE_URL}/terms`, changefreq: "monthly", priority: "0.3" },
];
const pageUrls = routes.map((r) => ({
  loc: `${SITE_URL}${r.path}`,
  lastmod: r.lastmod,
  changefreq: "monthly",
  priority: r.path === "/resources" ? "0.8" : "0.7",
}));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...pageUrls]
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n${u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>\n` : ""}    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
if (process.argv.includes("--write-public")) fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);

console.log(`prerender: wrote ${routes.length} pages and sitemap.xml (${staticUrls.length + pageUrls.length} URLs)`);
