// Build-time only: computes the small page index the browser uses instead of the full content.
// Run through scripts/content-index.mjs, which writes the result to src/content/generated/.
import type { Locale, PageSummary, TranslatedPage } from "./types";
import { englishPage, pageByKey, pagesByLocale, rawPagesByLocale } from "./all";
import { dictionaries } from "@/i18n/all";
import { LOCALES } from "@/i18n/config";
import { readingMinutes } from "@/lib/blog";
import { TOOL_IDS } from "@/tools/ids";

const summary = (page: TranslatedPage): PageSummary => {
  // Section links are set on the English page and apply to the same section in every translation.
  const english = englishPage(page.key);
  const sectionLinks: Record<number, string[]> = {};
  english?.sections.forEach((s, i) => {
    if (s.links?.length) sectionLinks[i] = s.links;
  });
  return {
    key: page.key,
    slug: page.slug,
    category: page.category,
    navLabel: page.navLabel,
    h1: page.h1,
    description: page.description,
    updated: page.updated,
    minutes: readingMinutes(page),
    keyFacts: page.keyFacts.slice(0, 3),
    sectionLinks,
  };
};

export const buildContentIndex = () => {
  const locales = LOCALES.map((l) => l.code);
  const pages = Object.fromEntries(locales.map((l) => [l, pagesByLocale[l].map(summary)])) as Record<Locale, PageSummary[]>;
  const slugs = {
    // English key → language → slug, for the language switcher
    pages: Object.fromEntries(
      rawPagesByLocale.en.map((p) => [
        p.key,
        Object.fromEntries(locales.flatMap((l) => (pageByKey(l, p.key) ? [[l, pageByKey(l, p.key)!.slug]] : []))),
      ]),
    ),
    // Tool URLs per language, for routes and links into other languages
    tools: Object.fromEntries(
      locales.map((l) => {
        const t = dictionaries[l].tools;
        return [l, { hub: t.hub.slug, ...Object.fromEntries(TOOL_IDS.map((id) => [id, t[id].slug])) }];
      }),
    ),
  };
  return { pages, slugs };
};
