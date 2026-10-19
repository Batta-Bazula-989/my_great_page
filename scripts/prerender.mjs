// Writes a static HTML file for every route in every language (dist/<slug>.html, dist/de/<slug>.html,
// dist/de/index.html, …) with its own <html lang>, title, description, canonical, hreflang alternates,
// social tags and JSON-LD, then regenerates the sitemap.
// Runs after `vite build` and `vite build --ssr src/entry-server.tsx --outDir dist-ssr`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const SITE_URL = "https://www.tascalab.com";
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
// dist/index.html is rewritten below, so a second run would start from an already processed page.
if (template.includes('hreflang="x-default"')) {
  console.error("prerender: dist/index.html is already pre-rendered — run `npm run build` instead of re-running this script.");
  process.exit(1);
}
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

const meta = (html, attr, name, value) =>
  replaceOnce(
    html,
    new RegExp(`<meta ${attr}="${name}" content="[^"]*" />`),
    `<meta ${attr}="${name}" content="${escapeAttr(value)}" />`,
    `${attr}=${name}`,
  );

for (const route of routes) {
  const url = `${SITE_URL}${route.path}`;
  let html = template;

  html = replaceOnce(html, /<html lang="[^"]*">/, `<html lang="${route.htmlLang}">`, "<html lang>");
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(route.title)}</title>`, "<title>");
  html = meta(html, "name", "description", route.description);
  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    [
      `<link rel="canonical" href="${url}" />`,
      ...route.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`),
    ].join("\n    "),
    "canonical",
  );
  html = meta(html, "property", "og:type", route.render ? "article" : "website");
  html = meta(html, "property", "og:locale", route.ogLocale);
  html = meta(html, "property", "og:url", url);
  html = meta(html, "property", "og:title", route.title);
  html = meta(html, "property", "og:description", route.description);
  html = meta(html, "name", "twitter:title", route.title);
  html = meta(html, "name", "twitter:description", route.description);
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    route.jsonLd.map((o) => `<script type="application/ld+json">${safeJson(o)}</script>`).join("\n    "),
    "JSON-LD",
  );

  if (route.render) {
    // The real content replaces the homepage's <noscript> summary.
    html = replaceOnce(html, /<noscript>\s*<h1>[\s\S]*?<\/noscript>\n?/, "", "noscript summary");
    html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${render(route.path)}</div>`, "#root");
  } else if (route.noscript) {
    html = replaceOnce(
      html,
      /<noscript>\s*<h1>[\s\S]*?<\/noscript>/,
      `<noscript>\n  <h1>${escapeText(route.noscript.heading)}</h1>\n  <p>${escapeText(route.noscript.text)}</p>\n</noscript>`,
      "noscript summary",
    );
  }

  const out = path.join(dist, route.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

// Sitemap: every URL, each with its language alternates.
const urlEntry = ({ loc, lastmod, changefreq, priority, alternates = [] }) =>
  [
    "  <url>",
    `    <loc>${loc}</loc>`,
    ...alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`),
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");

const LEGAL = ["/privacy", "/terms"];
const entries = routes.map((r) => ({
  loc: `${SITE_URL}${r.path}`,
  lastmod: r.lastmod,
  changefreq: r.render ? "monthly" : "weekly",
  priority: !r.render ? "1.0" : LEGAL.includes(r.path) ? "0.3" : r.path.endsWith("/resources") ? "0.8" : "0.7",
  alternates: r.alternates,
}));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(urlEntry).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
// Keep the committed copy in public/ in sync with the generated one.
fs.writeFileSync(path.join(root, "public", "sitemap.xml"), sitemap);

console.log(`prerender: wrote ${routes.length} pages and sitemap.xml (${entries.length} URLs)`);
