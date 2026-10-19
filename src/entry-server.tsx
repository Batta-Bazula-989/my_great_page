// Server entry used only at build time (scripts/prerender.mjs) to turn the SEO pages into static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import SeoPage from "./pages/SeoPage";
import Resources, { RESOURCES_DESCRIPTION, RESOURCES_TITLE } from "./pages/Resources";
import { SITE_URL, categoryLabel, seoPages } from "./content";

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  jsonLd: object[];
  lastmod: string;
}

const business = { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, name: "TascaLab", url: `${SITE_URL}/` };
const author = { "@type": "Person", "@id": `${SITE_URL}/#founder`, name: "Roman Zakharenko" };

export const routes: PrerenderRoute[] = [
  {
    path: "/resources",
    title: RESOURCES_TITLE,
    description: RESOURCES_DESCRIPTION,
    lastmod: seoPages.map((p) => p.updated).sort().at(-1) ?? "",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Customer support automation resources",
        url: `${SITE_URL}/resources`,
        publisher: business,
        hasPart: seoPages.map((p) => ({ "@type": "Article", headline: p.h1, url: `${SITE_URL}/${p.slug}` })),
      },
    ],
  },
  ...seoPages.map((page) => ({
    path: `/${page.slug}`,
    title: page.title,
    description: page.description,
    lastmod: page.updated,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        url: `${SITE_URL}/${page.slug}`,
        mainEntityOfPage: `${SITE_URL}/${page.slug}`,
        dateModified: page.updated,
        author,
        publisher: business,
        image: `${SITE_URL}/og-image.png`,
        about: page.primaryKeyword,
        citation: page.sources.map((s) => s.url),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: categoryLabel(page.category), item: `${SITE_URL}/resources#${page.category}` },
          { "@type": "ListItem", position: 3, name: page.navLabel, item: `${SITE_URL}/${page.slug}` },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  })),
];

// Build fails on these, so broken links or oversized meta tags never ship.
export const contentProblems = (): string[] => {
  const problems: string[] = [];
  const slugs = new Set<string>();
  for (const p of seoPages) {
    const where = `[${p.slug}]`;
    if (slugs.has(p.slug)) problems.push(`${where} duplicate slug`);
    slugs.add(p.slug);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) problems.push(`${where} slug is not kebab-case`);
    if (p.title.length > 60) problems.push(`${where} title is ${p.title.length} chars (max 60)`);
    if (p.description.length < 120 || p.description.length > 160)
      problems.push(`${where} description is ${p.description.length} chars (want 120–160)`);
    if (p.sources.length === 0) problems.push(`${where} has no sources`);
    for (const s of p.sources) if (!/^https:\/\//.test(s.url)) problems.push(`${where} source is not https: ${s.url}`);
    if (p.faqs.length === 0) problems.push(`${where} has no FAQs`);
  }
  for (const p of seoPages)
    for (const r of p.related) if (!slugs.has(r) || r === p.slug) problems.push(`[${p.slug}] bad related slug: ${r}`);
  return problems;
};

export const render = (url: string) =>
  renderToString(
    <StaticRouter location={url}>
      <Routes>
        <Route path="/resources" element={<Resources />} />
        <Route path="/:slug" element={<SeoPage />} />
      </Routes>
    </StaticRouter>,
  );
