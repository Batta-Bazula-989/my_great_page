// Server entry used only at build time (scripts/prerender.mjs) to turn every language's pages into static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./routes";
import { SITE_URL, pageByKey, pagesByLocale } from "./content";
import type { Locale, TranslatedPage } from "./content/types";
import { dictionaries, format } from "./i18n";
import { CURRENCY, PACKAGES, formatMoney } from "./lib/pricing";
import { WORK_LOCALES, caseStudies, workPath } from "./content/work";
import { TOOL_IDS, TOOL_UPDATED, toolPath, toolsPath, type ToolId } from "./tools/registry";
import { DEFAULT_LOCALE, LOCALES, localeInfo, localePath } from "./i18n/config";

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
}

const url = (path: string) => `${SITE_URL}${path}`;
const fileFor = (locale: Locale, name: string) => (locale === DEFAULT_LOCALE ? name : `${locale}/${name}`);

const withXDefault = (alternates: { hreflang: string; href: string }[]) => {
  const en = alternates.find((a) => a.hreflang === DEFAULT_LOCALE);
  return en ? [...alternates, { hreflang: "x-default", href: en.href }] : alternates;
};

const business = { "@type": "ProfessionalService", "@id": `${SITE_URL}/#business`, name: "TascaLab", url: `${SITE_URL}/` };
const author = { "@type": "Person", "@id": `${SITE_URL}/#founder`, name: "Roman Zakharenko" };

const homeJsonLd = (locale: Locale): object[] => {
  const t = dictionaries[locale];
  const priceCurrency = CURRENCY[locale];
  // Packages without a confirmed price are listed without one.
  const prices = PACKAGES.flatMap((p) => (p.prices ? [p.prices[priceCurrency]] : []));
  return [
    {
      "@context": "https://schema.org",
      ...business,
      logo: `${SITE_URL}/favicon.svg`,
      image: `${SITE_URL}/og-image.png`,
      description: t.meta.homeDescription,
      email: "romanzakharenko.r@gmail.com",
      ...(prices.length && { priceRange: format(t.pricing.from, { price: formatMoney(locale, Math.min(...prices)) }) }),
      areaServed: "Worldwide",
      founder: author,
      sameAs: [
        "https://www.upwork.com/freelancers/~01966ceb979589cb68",
        "https://www.linkedin.com/in/roman-zakharenko-159a27403/",
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
            const amount = pkg.prices?.[priceCurrency];
            return {
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: t.pricing.plans[i].name, description: t.pricing.plans[i].description },
              ...(amount === undefined
                ? {}
                : pkg.isMinimum
                  ? { priceSpecification: { "@type": "PriceSpecification", priceCurrency, minPrice: amount } }
                  : { price: amount, priceCurrency }),
            };
          }),
        ],
      },
    },
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
          item: `${url(localePath(locale, "resources"))}#${page.category}`,
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
  };

  const resources: PrerenderRoute = {
    ...base,
    path: localePath(locale, "resources"),
    file: fileFor(locale, "resources.html"),
    title: t.resources.metaTitle,
    description: t.resources.metaDescription,
    lastmod: latest(locale),
    ogType: "website",
    changefreq: "weekly",
    priority: "0.8",
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(localePath(l.code, "resources")) }))),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t.resources.title,
        inLanguage: locale,
        url: url(localePath(locale, "resources")),
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
    jsonLd: toolJsonLd(locale, id),
    alternates: withXDefault(LOCALES.map((l) => ({ hreflang: l.code, href: url(toolPath(l.code, id)) }))),
  }));

  const workPages: PrerenderRoute[] = WORK_LOCALES.includes(locale)
    ? [
        {
          ...base,
          path: workPath(locale),
          file: fileFor(locale, "work/index.html"),
          title: t.work.metaTitle,
          description: t.work.metaDescription,
          lastmod: caseStudies.map((c) => c.updated).sort().at(-1),
          ogType: "website",
          changefreq: "monthly",
          priority: "0.8",
          alternates: [],
          jsonLd: [
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: t.work.title,
              inLanguage: locale,
              url: url(workPath(locale)),
              publisher: business,
              hasPart: caseStudies.map((c) => ({ "@type": "Article", headline: c.h1, url: url(workPath(locale, c.slug)) })),
            },
          ],
        },
        ...caseStudies.map(
          (c): PrerenderRoute => ({
            ...base,
            path: workPath(locale, c.slug),
            file: fileFor(locale, `work/${c.slug}.html`),
            title: c.title,
            description: c.description,
            lastmod: c.updated,
            ogType: "article",
            changefreq: "monthly",
            priority: "0.7",
            alternates: [],
            jsonLd: [
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: c.h1,
                description: c.description,
                inLanguage: locale,
                url: url(workPath(locale, c.slug)),
                mainEntityOfPage: url(workPath(locale, c.slug)),
                dateModified: c.updated,
                author,
                publisher: business,
                image: `${SITE_URL}/og-image.png`,
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: t.seo.home, item: url(localePath(locale)) },
                  { "@type": "ListItem", position: 2, name: t.work.label, item: url(workPath(locale)) },
                  { "@type": "ListItem", position: 3, name: c.h1, item: url(workPath(locale, c.slug)) },
                ],
              },
            ],
          }),
        ),
      ]
    : [];

  return [home, resources, toolsHub, ...tools, ...workPages, ...pages];
});

// Privacy and Terms are English only; pre-rendering them gives each its own canonical URL and title.
for (const [path, title, description] of [
  [
    "/privacy",
    "Privacy Policy | TascaLab",
    "TascaLab privacy policy: what personal information the website and booking form collect, how it is used and disclosed, and how to contact us.",
  ],
  [
    "/terms",
    "Terms of Service | TascaLab",
    "TascaLab terms of service: the terms that apply when you use the tascalab.com website and book or buy customer support automation services.",
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
  });
}

// One "page not found" page per language. The server sends it with a 404 status; it is not in the sitemap.
export const notFoundPages = LOCALES.map(({ code: locale }) => ({
  path: localePath(locale, "404"),
  file: fileFor(locale, "404.html"),
  htmlLang: locale,
  ogLocale: localeInfo(locale).ogLocale,
  title: `${dictionaries[locale].notFound.title} | TascaLab`,
  description: dictionaries[locale].notFound.text,
}));

export const render = (path: string) =>
  renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  );
