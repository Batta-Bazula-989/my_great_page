// What the browser knows about the site's articles: a small generated index per language (titles, slugs,
// categories), loaded once per language. Full article text is loaded one page at a time (./load.ts).
// The full content of every language is in ./all.ts, for build-time code only.
import type { CategoryId, Locale, PageSummary } from "./types";
import slugMap from "./generated/slugs.json";
import { suspend } from "@/lib/suspend";

export const SITE_URL = "https://www.tascalab.com";

export const CATEGORY_IDS: CategoryId[] = ["services", "helpdesks", "channels", "basics", "guides", "crm"];

type IndexModule = { default: unknown };
const indexLoaders: Record<Locale, () => Promise<IndexModule>> = {
  en: () => import("./generated/pages-en.json"),
  de: () => import("./generated/pages-de.json"),
  fr: () => import("./generated/pages-fr.json"),
  es: () => import("./generated/pages-es.json"),
  it: () => import("./generated/pages-it.json"),
  nl: () => import("./generated/pages-nl.json"),
  pl: () => import("./generated/pages-pl.json"),
  sv: () => import("./generated/pages-sv.json"),
};

const indexes: Partial<Record<Locale, PageSummary[]>> = {};
const pendingIndexes: Partial<Record<Locale, Promise<void>>> = {};

export const loadPageIndex = (locale: Locale): Promise<void> =>
  (pendingIndexes[locale] ??= indexLoaders[locale]().then((m) => {
    indexes[locale] = m.default as PageSummary[];
  }));

// Every article in a language, in content order. Suspends until that language's index has loaded.
export const pageIndex = (locale: Locale): PageSummary[] => indexes[locale] ?? suspend(loadPageIndex(locale));

export const getPageSummary = (locale: Locale, slug: string | undefined) =>
  pageIndex(locale).find((p) => p.slug === slug);

export const pageByKey = (locale: Locale, key: string) => pageIndex(locale).find((p) => p.key === key);

export const pagesInCategory = (locale: Locale, id: CategoryId) => pageIndex(locale).filter((p) => p.category === id);

// The slug of a page in another language, without loading that language: key → locale → slug.
export const translatedSlug = (key: string, locale: Locale): string | undefined =>
  (slugMap.pages as Record<string, Partial<Record<Locale, string>>>)[key]?.[locale];

export const headingId = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
