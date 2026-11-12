// Every page in every language, about 4 MB of text. Build time only: the pre-renderer (entry-server.tsx),
// the content checks (validate.ts, scripts/check-*.mjs) and the page index generator (build-index.ts).
// Browser code must not import this file; it uses the generated page index and loads one article at a
// time (src/content/index.ts, src/content/load.ts).
import type { Locale, SeoPageContent, TranslatedPage } from "./types";
import { servicesPages } from "./pages/services";
import { helpdeskPages } from "./pages/helpdesks";
import { channelPages } from "./pages/channels";
import { basicsPages } from "./pages/basics";
import { guidePages } from "./pages/guides";
import { crmPages } from "./pages/crm";
import * as de from "./pages/de";
import * as fr from "./pages/fr";
import * as es from "./pages/es";
import * as it from "./pages/it";
import * as nl from "./pages/nl";
import * as pl from "./pages/pl";
import * as sv from "./pages/sv";
import { withPrices } from "./prices";

const english: TranslatedPage[] = [
  ...servicesPages,
  ...helpdeskPages,
  ...channelPages,
  ...basicsPages,
  ...guidePages,
  ...crmPages,
].map((p: SeoPageContent) => ({ ...p, key: p.slug }));

type LocaleModule = typeof de;
const all = (m: LocaleModule): TranslatedPage[] => [
  ...m.servicesPages,
  ...m.helpdeskPages,
  ...m.channelPages,
  ...m.basicsPages,
  ...m.guidePages,
  ...m.crmPages,
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

export const pageByKey = (locale: Locale, key: string) => pagesByLocale[locale].find((p) => p.key === key);
