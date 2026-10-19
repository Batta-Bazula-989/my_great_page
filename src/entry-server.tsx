// Server entry used only at build time (scripts/prerender.mjs) to turn every language's pages into static HTML.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./routes";
import { SITE_URL, pageByKey, pagesByLocale } from "./content";
import type { Locale, TranslatedPage } from "./content/types";
import { dictionaries, format } from "./i18n";
import { CURRENCY, PACKAGES, formatMoney } from "./lib/pricing";
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
  render: boolean; // false: head only (the homepage animates in on the client)
  noscript?: { heading: string; text: string };
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
    render: false,
    noscript: { heading: t.meta.noscriptHeading, text: t.meta.noscriptText },
  };

  const resources: PrerenderRoute = {
    ...base,
    path: localePath(locale, "resources"),
    file: fileFor(locale, "resources.html"),
    title: t.resources.metaTitle,
    description: t.resources.metaDescription,
    lastmod: latest(locale),
    render: true,
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
    render: true,
    jsonLd: pageJsonLd(locale, page),
    alternates: withXDefault(
      LOCALES.flatMap((l) => {
        const translated = pageByKey(l.code, page.key);
        return translated ? [{ hreflang: l.code, href: url(localePath(l.code, translated.slug)) }] : [];
      }),
    ),
  }));

  return [home, resources, ...pages];
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
    render: true,
  });
}

export const render = (path: string) =>
  renderToString(
    <StaticRouter location={path}>
      <AppRoutes />
    </StaticRouter>,
  );
