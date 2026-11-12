import { createContext, useContext } from "react";
import type { Locale } from "@/content/types";
import type { Dictionary } from "./en";
import { DEFAULT_LOCALE } from "./config";
import { suspend } from "@/lib/suspend";

// Each language's UI strings are a separate download, loaded when a page in that language is first shown
// (see preloadRoute in routes.tsx). Build-time code gets every language at once from ./all.ts.
const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  en: () => import("./en"),
  de: () => import("./de"),
  fr: () => import("./fr"),
  es: () => import("./es"),
  it: () => import("./it"),
  nl: () => import("./nl"),
  pl: () => import("./pl"),
  sv: () => import("./sv"),
};

const loaded: Partial<Record<Locale, Dictionary>> = {};
const pending: Partial<Record<Locale, Promise<void>>> = {};

export const loadDictionary = (locale: Locale): Promise<void> =>
  (pending[locale] ??= loaders[locale]().then((m) => {
    loaded[locale] = m.default;
  }));

// Used by ./all.ts, so build-time code never waits.
export const registerDictionaries = (all: Record<Locale, Dictionary>) => {
  Object.assign(loaded, all);
  for (const locale of Object.keys(all) as Locale[]) pending[locale] ??= Promise.resolve();
};

// A language's strings. Suspends until they have loaded.
export const dictionary = (locale: Locale): Dictionary => loaded[locale] ?? suspend(loadDictionary(locale));

// Set per language by the route layout in routes.tsx.
export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const useLocale = () => useContext(LocaleContext);

export const useDict = () => dictionary(useLocale());

// format("Show {title}", { title: "Reporting" }) → "Show Reporting"
export const format = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? `{${k}}`);
