import { createContext, useContext } from "react";
import type { Locale } from "@/content/types";
import type { Dictionary } from "./en";
import en from "./en";
import de from "./de";
import fr from "./fr";
import es from "./es";
import it from "./it";
import nl from "./nl";
import { DEFAULT_LOCALE } from "./config";

export const dictionaries: Record<Locale, Dictionary> = { en, de, fr, es, it, nl };

// Set per language by the route layout in routes.tsx.
export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export const useLocale = () => useContext(LocaleContext);

export const useDict = () => dictionaries[useLocale()];

// format("Show {title}", { title: "Reporting" }) → "Show Reporting"
export const format = (template: string, values: Record<string, string>) =>
  template.replace(/\{(\w+)\}/g, (_, k: string) => values[k] ?? `{${k}}`);
