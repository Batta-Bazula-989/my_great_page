// Full article text, loaded on demand: opening an article downloads only its own content file
// (one category in one language, e.g. pages/de/helpdesks.ts), not the whole site.
// Uses Vite's import.meta.glob, so only Vite-built code (the app and entry-server.tsx) may import this file.
import type { CategoryId, Locale, TranslatedPage } from "./types";
import { getPageSummary, loadPageIndex } from "./index";
import { withPrices } from "./prices";
import { DEFAULT_LOCALE } from "@/i18n/config";
import { suspend } from "@/lib/suspend";

type ContentModule = Record<string, unknown>;
const contentModules = import.meta.glob<ContentModule>(["./pages/*.ts", "./pages/*/*.ts", "!./pages/*/index.ts"]);

const modulePath = (locale: Locale, category: CategoryId) =>
  locale === DEFAULT_LOCALE ? `./pages/${category}.ts` : `./pages/${locale}/${category}.ts`;

// Source file of a language's category, relative to the project root (the pre-renderer preloads it).
export const contentModuleFile = (locale: Locale, category: CategoryId) =>
  `src/content/${modulePath(locale, category).slice(2)}`;

const pages = new Map<string, TranslatedPage>(); // "<locale>/<slug>" → page with prices filled in
const pending = new Map<string, Promise<void>>(); // "<locale>/<category>" → loading

const cacheKey = (locale: Locale, slug: string) => `${locale}/${slug}`;

const remember = (locale: Locale, list: TranslatedPage[]) => {
  for (const page of list) pages.set(cacheKey(locale, page.slug), withPrices({ ...page, key: page.key ?? page.slug }, locale));
};

const loadCategory = (locale: Locale, category: CategoryId) => {
  const id = `${locale}/${category}`;
  let promise = pending.get(id);
  if (!promise) {
    const load = contentModules[modulePath(locale, category)];
    if (!load) return Promise.reject(new Error(`No content file for ${id}`));
    promise = load().then((m) => {
      const list = Object.values(m).find(Array.isArray) as TranslatedPage[] | undefined;
      remember(locale, list ?? []);
    });
    pending.set(id, promise);
  }
  return promise;
};

// Loads the article at <slug> in <locale>, if there is one.
export const loadSeoPage = async (locale: Locale, slug: string) => {
  await loadPageIndex(locale);
  const summary = getPageSummary(locale, slug);
  if (summary) await loadCategory(locale, summary.category);
};

// The full article, or undefined for an unknown slug. Suspends while the article loads.
export const useSeoPage = (locale: Locale, slug: string | undefined): TranslatedPage | undefined => {
  const summary = getPageSummary(locale, slug);
  if (!summary) return undefined;
  return pages.get(cacheKey(locale, summary.slug)) ?? suspend(loadCategory(locale, summary.category));
};

// The pre-renderer has every page in memory already; it hands them over so nothing has to load.
export const seedPages = (locale: Locale, list: TranslatedPage[]) => remember(locale, list);
