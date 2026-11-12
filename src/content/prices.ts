import type { Locale } from "./types";
import { fillPrices } from "@/lib/pricing";

// Replaces every {{price:<id>}} token, anywhere in a page, with the price in the language's currency.
export const withPrices = <T,>(value: T, locale: Locale): T => {
  if (typeof value === "string") return fillPrices(value, locale) as T;
  if (Array.isArray(value)) return value.map((v) => withPrices(v, locale)) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, withPrices(v, locale)])) as T;
  return value;
};
