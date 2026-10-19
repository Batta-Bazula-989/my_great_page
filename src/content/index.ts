import type { CategoryId, Locale, SeoPageContent, TranslatedPage } from "./types";
import { servicesPages } from "./pages/services";
import { helpdeskPages } from "./pages/helpdesks";
import { channelPages } from "./pages/channels";
import { basicsPages } from "./pages/basics";
import { guidePages } from "./pages/guides";
import * as de from "./pages/de";
import * as fr from "./pages/fr";
import * as es from "./pages/es";
import * as it from "./pages/it";
import * as nl from "./pages/nl";
import * as pl from "./pages/pl";
import * as sv from "./pages/sv";
import { fillPrices } from "@/lib/pricing";

export const SITE_URL = "https://www.tascalab.com";

export const CATEGORY_IDS: CategoryId[] = ["services", "helpdesks", "channels", "basics", "guides"];

const english: TranslatedPage[] = [
  ...servicesPages,
  ...helpdeskPages,
  ...channelPages,
  ...basicsPages,
  ...guidePages,
].map((p: SeoPageContent) => ({ ...p, key: p.slug }));

type LocaleModule = typeof de;
const all = (m: LocaleModule): TranslatedPage[] => [
  ...m.servicesPages,
  ...m.helpdeskPages,
  ...m.channelPages,
  ...m.basicsPages,
  ...m.guidePages,
];

// Pages as written, with {{price:<id>}} tokens. The content checks compare these across languages.
export const rawPagesByLocale: Record<Locale, TranslatedPage[]> = {
  en: english,
  de: all(de),
  fr: all(fr),
  es: all(es),
  it: all(it),
  nl: all(nl),
  pl: all(pl),
  sv: all(sv),
};

const withPrices = <T,>(value: T, locale: Locale): T => {
  if (typeof value === "string") return fillPrices(value, locale) as T;
  if (Array.isArray(value)) return value.map((v) => withPrices(v, locale)) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withPrices(v, locale)])) as T;
  return value;
};

// Pages as shown, with each price in the language's currency. Filled in on first use of each language.
const filled: Partial<Record<Locale, TranslatedPage[]>> = {};
export const pagesByLocale = {} as Record<Locale, TranslatedPage[]>;
for (const locale of Object.keys(rawPagesByLocale) as Locale[])
  Object.defineProperty(pagesByLocale, locale, {
    enumerable: true,
    get: () => (filled[locale] ??= withPrices(rawPagesByLocale[locale], locale)),
  });

// A page's English slug is its key; every translation of it shares that key.
export const englishPage = (key: string) => english.find((p) => p.key === key);

export const getSeoPage = (locale: Locale, slug: string | undefined) =>
  pagesByLocale[locale].find((p) => p.slug === slug);

export const pageByKey = (locale: Locale, key: string) => pagesByLocale[locale].find((p) => p.key === key);

export const pagesInCategory = (locale: Locale, id: CategoryId) =>
  pagesByLocale[locale].filter((p) => p.category === id);

export const headingId = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
