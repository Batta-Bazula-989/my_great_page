import type { CategoryId, TranslatedPage } from "@/content/types";

export const formatDate = (iso: string, dateLocale: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

const WORDS_PER_MINUTE = 200;

// Reading time from everything printed in the article body.
export const readingMinutes = (page: TranslatedPage) => {
  const text = [
    page.intro,
    ...page.keyFacts,
    ...page.sections.flatMap((s) => [
      s.heading,
      ...s.blocks.flatMap((b) => {
        switch (b.type) {
          case "ul":
          case "ol":
            return b.items;
          case "table":
            return [b.caption ?? "", ...b.head, ...b.rows.flat()];
          default:
            return [b.text];
        }
      }),
    ]),
    ...page.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE));
};

// Newest first. On the same date, the article added to the content files last comes first.
export const newestFirst = <T extends { updated: string }>(pages: T[]) =>
  pages
    .map((page, i) => ({ page, i }))
    .sort((a, b) => b.page.updated.localeCompare(a.page.updated) || b.i - a.i)
    .map(({ page }) => page);

export const isCategory = (value: string, ids: CategoryId[]): value is CategoryId => (ids as string[]).includes(value);
