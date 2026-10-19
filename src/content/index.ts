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

export const SITE_URL = "https://tascalab.com";

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

export const pagesByLocale: Record<Locale, TranslatedPage[]> = {
  en: english,
  de: all(de),
  fr: all(fr),
  es: all(es),
  it: all(it),
  nl: all(nl),
  pl: all(pl),
  sv: all(sv),
};

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
