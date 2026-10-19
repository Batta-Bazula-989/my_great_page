import type { Locale } from "@/content/types";

export interface LocaleInfo {
  code: Locale;
  name: string; // native name, shown in the language switcher
  dateLocale: string; // BCP 47 tag for dates and <html lang>
  ogLocale: string;
}

// English stays at the root; other languages live under /<code>/.
export const LOCALES: LocaleInfo[] = [
  { code: "en", name: "English", dateLocale: "en-US", ogLocale: "en_US" },
  { code: "de", name: "Deutsch", dateLocale: "de-DE", ogLocale: "de_DE" },
  { code: "fr", name: "Français", dateLocale: "fr-FR", ogLocale: "fr_FR" },
  { code: "es", name: "Español", dateLocale: "es-ES", ogLocale: "es_ES" },
  { code: "it", name: "Italiano", dateLocale: "it-IT", ogLocale: "it_IT" },
  { code: "nl", name: "Nederlands", dateLocale: "nl-NL", ogLocale: "nl_NL" },
];

export const DEFAULT_LOCALE: Locale = "en";

export const localeInfo = (code: Locale) => LOCALES.find((l) => l.code === code)!;

// "/" + optional locale prefix + path. Locale homes end with a slash (/de/) so static hosting
// serves dist/de/index.html without a redirect.
export const localePath = (locale: Locale, path = "") => {
  const clean = path.replace(/^\/+/, "");
  if (locale === DEFAULT_LOCALE) return `/${clean}`;
  return clean ? `/${locale}/${clean}` : `/${locale}/`;
};

// Locale from a URL path ("/de/..." → "de"); anything without a known prefix is English.
export const localeFromPath = (pathname: string): Locale => {
  const first = pathname.split("/")[1];
  return LOCALES.find((l) => l.code === first && l.code !== DEFAULT_LOCALE)?.code ?? DEFAULT_LOCALE;
};
