// Server entry used only at build time (scripts/prerender.mjs) to turn every language's pages into static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
import { PAGE_FILES, pages as lazyPages, routeFor } from "./route-loading";
import { SITE_URL, loadPageIndex } from "./content";
import { englishPage, pageByKey, pagesByLocale, rawPagesByLocale } from "./content/all";
import { contentModuleFile, seedPages } from "./content/load";
import type { Locale, TranslatedPage } from "./content/types";
import { format } from "./i18n";
import { dictionaries } from "./i18n/all";
import { CURRENCY, PACKAGES, formatMoney } from "./lib/pricing";
import { TOOL_IDS, TOOL_UPDATED, toolPath, toolsPath, type ToolId } from "./tools/registry";
import { BLOG_PATH, DEFAULT_LOCALE, LOCALES, localeInfo, localePath } from "./i18n/config";
import portrait from "./assets/roman-portrait.jpg";

export { contentProblems } from "./content/validate";

export interface PrerenderRoute {
  path: string; // URL path, e.g. "/de/zendesk-automatisierung"
  file: string; // output file relative to dist/
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  title: string;
  description: string;
  jsonLd: object[];
  alternates: { hreflang: string; href: string }[];
  lastmod?: string;
  ogType: "website" | "article";
  changefreq: "weekly" | "monthly"; // sitemap hints
  priority: string;
  modules: string[]; // source files the page loads on top of the main script, for <link rel="modulepreload">
}

const url = (path: string) => `${SITE_URL}${path}`;
const fileFor = (locale: Locale, name: string) => (locale === DEFAULT_LOCALE ? name : `${locale}/${name}`);

const withXDefault = (alternates: { hreflang: string; href: string }[]) => {
  const en = alternates.find((a) => a.hreflang === DEFAULT_LOCALE);
  return en ? [...alternates, { hreflang: "x-default", href: en.href }] : alternates;
};

const business = { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, name: "TascaLab", url: `${SITE_URL}/` };
const author = { "@type": "Person", "@id": `${SITE_URL}/#founder`, name: "Roman Zakharenko", url: `${SITE_URL}/#why-me` };

// The founder in full, on every homepage: who writes the articles and builds the work.
const founder = (locale: Locale) => ({
  "@context": "https://schema.org",
  ...author,
  jobTitle: dictionaries[locale].whyMe.role,
  image: `${SITE_URL}${portrait}`,
  worksFor: { "@id": business["@id"] },
  knowsAbout: [
    "Lead automation",
    "CRM automation",
    "Customer support automation",
    "HubSpot",
    "Attio",
    "Zendesk",
    "Freshdesk",
    "Jira Service Management",
    "Intercom",
    "Slack",
    "n8n",
    "Make",
    "AI chatbots",
    "Voice bots",
  ],
  sameAs: ["https://www.upwork.com/freelancers/~01966ceb979589cb68"],
});

// Files each kind of page loads, so the pre-rendered HTML can ask for them right away.
const languageModules = (locale: Locale) => [`src/i18n/${locale}.ts`, `src/content/generated/pages-${locale}.json`];
const modulesFor = (path: string, page?: TranslatedPage) => {
  const route = routeFor(path);
  return [
    ...languageModules(route.locale),
    ...(route.page ? [PAGE_FILES[route.page]] : []),
    ...(page ? [contentModuleFile(route.locale, page.category)] : []),
  ];
};

const homeJsonLd = (locale: Locale): object[] => {
  const t = dictionaries[locale];
  const priceCurrency = CURRENCY[locale];
  const lowest = Math.min(...PACKAGES.map((p) => p.prices[priceCurrency]));
  return [
    {
      "@context": "https://schema.org",
      ...business,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/og-image.png`,
      description: t.meta.homeDescription,
      email: "romanzakharenko.r@gmail.com",
      priceRange: format(t.pricing.from, { price: formatMoney(locale, lowest) }),
      areaServed: "Worldwide",
      founder: author,
      sameAs: [
        "https://www.upwork.com/freelancers/~01966ceb979589cb68",
        "https://www.instagram.com/tasca_lab/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t.services.title,
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: t.pricing.healthCheck.title, description: t.pricing.healthCheck.text },
            price: 0,
            priceCurrency,
          },
          ...PACKAGES.map((pkg, i) => {
            const amount = pkg.prices[priceCurrency];
            return {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: t.pricing.plans[i].name, description: t.pricing.plans[i].description },
              ...(pkg.isMinimum
                ? { priceSpecification: { "@type": "PriceSpecification", priceCurrency, minPrice: amount } }
                : { price: amount, priceCurrency }),
            };
          }),
        ],
      },
    },
    founder(locale),
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "TascaLab",
      publisher: { "@id": business["@id"] },
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: t.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
};

const pageJsonLd = (locale: Locale, page: TranslatedPage): object[] => {
  const t = dictionaries[locale];
  const path = localePath(locale, page.slug);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: page.h1,
      description: page.description,
      inLanguage: locale,
      url: url(path),
      mainEntityOfPage: url(path),
      datePublished: englishPage(page.key)?.published ?? page.updated,
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
        { "@type": "ListItem", position: 1, name: t.seo.home, item: url(localePath(locale)) },
        {
          "@type": "ListItem",
          position: 2,
          name: t.categories[page.category].label,
          item: `${url(localePath(locale, BLOG_PATH))}#${page.category}`,
        },
        { "@type": "ListItem", position: 3, name: page.navLabel, item: url(path) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
};

const toolJsonLd = (locale: Locale, id: ToolId): object[] => {
  const t = dictionaries[locale];
  const tool = t.tools[id];
  const path = toolPath(locale, id);
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: tool.h1,
      description: tool.metaDescription,
      url: url(path),
      inLanguage: locale,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: 0, priceCurrency: CURRENCY[locale] },
      dateModified: TOOL_UPDATED[id],
      publisher: business,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.seo.home, item: url(localePath(locale)) },
        { "@type": "ListItem", position: 2, name: t.tools.menu, item: url(toolsPath(locale)) },
        { "@type": "ListItem", position: 3, name: tool.navLabel, item: url(path) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: tool.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
};

const latest = (locale: Locale) => pagesByLocale[locale].map((p) => p.updated).sort().at(-1);

export const routes: PrerenderRoute[] = LOCALES.flatMap(({ code: locale }) => {
  const t = dictionaries[locale];
  const info = localeInfo(locale);
  const base = { locale, htmlLang: locale, ogLocale: info.ogLocale };

  const home: PrerenderRoute = {
    ...base,
    path: localePath(locale),
    file: fileFor(locale, "index.html"),
    title: t.meta.homeTitle,
    description: t.meta.homeDescription,
    jsonLd: homeJsonLd(locale),
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(localePath(l.code)) }))),
    ogType: "website",
    changefreq: "weekly",
    priority: "1.0",
    modules: modulesFor(localePath(locale)),
  };

  const blog: PrerenderRoute = {
    ...base,
    path: localePath(locale, BLOG_PATH),
    file: fileFor(locale, `${BLOG_PATH}.html`),
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
    lastmod: latest(locale),
    ogType: "website",
    changefreq: "weekly",
    priority: "0.8",
    modules: modulesFor(localePath(locale, BLOG_PATH)),
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(localePath(l.code, BLOG_PATH)) }))),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t.blog.title,
        inLanguage: locale,
        url: url(localePath(locale, BLOG_PATH)),
        publisher: business,
        hasPart: pagesByLocale[locale].map((p) => ({
          "@type": "Article",
          headline: p.h1,
          url: url(localePath(locale, p.slug)),
        })),
      },
    ],
  };

  const pages: PrerenderRoute[] = pagesByLocale[locale].map((page) => ({
    ...base,
    path: localePath(locale, page.slug),
    file: fileFor(locale, `${page.slug}.html`),
    title: page.title,
    description: page.description,
    lastmod: page.updated,
    ogType: "article",
    changefreq: "monthly",
    priority: "0.7",
    modules: modulesFor(localePath(locale, page.slug), page),
    jsonLd: pageJsonLd(locale, page),
    alternates: withXDefault(
      LOCALES.flatMap((l) => {
        const translated = pageByKey(l.code, page.key);
        return translated ? [{ hreflang: l.code, href: url(localePath(l.code, translated.slug)) }] : [];
      }),
    ),
  }));

  const toolsHub: PrerenderRoute = {
    ...base,
    path: toolsPath(locale),
    file: fileFor(locale, `${t.tools.hub.slug}/index.html`),
    title: t.tools.hub.metaTitle,
    description: t.tools.hub.metaDescription,
    lastmod: Object.values(TOOL_UPDATED).sort().at(-1),
    ogType: "website",
    changefreq: "weekly",
    priority: "0.8",
    modules: modulesFor(toolsPath(locale)),
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(toolsPath(l.code)) }))),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t.tools.hub.title,
        inLanguage: locale,
        url: url(toolsPath(locale)),
        publisher: business,
        hasPart: TOOL_IDS.map((id) => ({ "@type": "WebApplication", name: t.tools[id].h1, url: url(toolPath(locale, id)) })),
      },
    ],
  };

  const tools: PrerenderRoute[] = TOOL_IDS.map((id) => ({
    ...base,
    path: toolPath(locale, id),
    file: fileFor(locale, `${t.tools.hub.slug}/${t.tools[id].slug}.html`),
    title: t.tools[id].metaTitle,
    description: t.tools[id].metaDescription,
    lastmod: TOOL_UPDATED[id],
    ogType: "website",
    changefreq: "monthly",
    priority: "0.8",
    modules: modulesFor(toolPath(locale, id)),
    jsonLd: toolJsonLd(locale, id),
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(toolPath(l.code, id)) }))),
  }));

  return [home, blog, toolsHub, ...tools, ...pages];
});

// Privacy and Terms are English only; pre-rendering them gives each its own canonical URL and title.
for (const [path, title, description] of [
  [
    "/privacy",
    "Privacy Policy | TascaLab",
    "TascaLab privacy policy: what personal information the website and booking form collect, how it is used and disclosed, and who to contact about it.",
  ],
  [
    "/terms",
    "Terms & Conditions | TascaLab",
    "TascaLab terms and conditions: the terms that apply when you use the tascalab.com website and book or buy lead, CRM or support automation services.",
  ],
] as const) {
  routes.push({
    path,
    file: `${path.slice(1)}.html`,
    locale: DEFAULT_LOCALE,
    htmlLang: DEFAULT_LOCALE,
    ogLocale: localeInfo(DEFAULT_LOCALE).ogLocale,
    title,
    description,
    jsonLd: [],
    alternates: [],
    ogType: "website",
    changefreq: "monthly",
    priority: "0.3",
    modules: modulesFor(path),
  });
}

// One "page not found" page per language. The server sends it with a 404 status; it is not in the sitemap.
export const notFoundPages = LOCALES.map(({ code: locale }) => ({
  modules: languageModules(locale),
  path: localePath(locale, "404"),
  file: fileFor(locale, "404.html"),
  htmlLang: locale,
  ogLocale: localeInfo(locale).ogLocale,
  title: `${dictionaries[locale].notFound.title} | TascaLab`,
  description: dictionaries[locale].notFound.text,
}));

// Call once before render(): loads every page component and language index, and hands the article text
// (already in memory here) to the loader, so rendering never waits on anything.
export const prepare = async () => {
  for (const { code } of LOCALES) seedPages(code, rawPagesByLocale[code]);
  await Promise.all([
    ...LOCALES.map(({ code }) => loadPageIndex(code)),
    ...Object.values(lazyPages).map((page) => page.preload()),
  ]);
};

// The same tree the browser renders (App.tsx), so it can hydrate this HTML without rebuilding it.
export const render = (path: string) =>
  renderToString(
    <StaticRouter location={path}>
      <AppContent />
    </StaticRouter>,
  );
