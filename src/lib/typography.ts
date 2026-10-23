import type { Locale } from "@/content/types";

// Polish typesetting keeps one-letter words (i, w, z, o, a, u) on the same line as the word after them.
export const keepShortWords = (text: string, locale: Locale) =>
  locale === "pl" ? text.replace(/(?<=^|\s)([aiouwz])\s+/gi, "$1 ") : text;
