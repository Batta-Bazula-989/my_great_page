// Single source of truth for package prices and delivery times, in every currency the site shows.
// Non-USD prices were converted from USD at the ECB reference rates of 16 October 2026
// (1 EUR = 1.1253 USD = 4.37 PLN = 11.145 SEK) and rounded (EUR to 10, PLN to 50, SEK to 100).
import type { Locale } from "@/content/types";
import { dictionaries, format } from "@/i18n";
import { localeInfo } from "@/i18n/config";

export type Currency = "USD" | "EUR" | "PLN" | "SEK";
export type PackageId = "starter" | "standard" | "voice" | "routing" | "reports" | "custom";

export interface Package {
  id: PackageId;
  prices: Record<Currency, number>;
  deliveryDays: number;
  // Custom work is scoped in the Health Check, so its price and delivery are minimums.
  isMinimum?: boolean;
}

// Same order as `pricing.plans` in the dictionaries.
export const PACKAGES: Package[] = [
  { id: "starter", prices: { USD: 400, EUR: 360, PLN: 1550, SEK: 4000 }, deliveryDays: 7 },
  { id: "voice", prices: { USD: 1350, EUR: 1200, PLN: 5250, SEK: 13400 }, deliveryDays: 14 },
  { id: "standard", prices: { USD: 575, EUR: 510, PLN: 2250, SEK: 5700 }, deliveryDays: 10 },
  { id: "routing", prices: { USD: 775, EUR: 690, PLN: 3000, SEK: 7700 }, deliveryDays: 10 },
  { id: "reports", prices: { USD: 700, EUR: 620, PLN: 2700, SEK: 6900 }, deliveryDays: 7 },
  { id: "custom", prices: { USD: 1200, EUR: 1070, PLN: 4650, SEK: 11900 }, deliveryDays: 14, isMinimum: true },
];

export const CURRENCY: Record<Locale, Currency> = {
  en: "USD",
  de: "EUR",
  fr: "EUR",
  es: "EUR",
  it: "EUR",
  nl: "EUR",
  pl: "PLN",
  sv: "SEK",
};

export const packageById = (id: PackageId) => PACKAGES.find((p) => p.id === id)!;

export const formatMoney = (locale: Locale, amount: number) =>
  new Intl.NumberFormat(localeInfo(locale).dateLocale, {
    style: "currency",
    currency: CURRENCY[locale],
    maximumFractionDigits: 0,
  }).format(amount);

// "$400", or "from $1,200" for packages priced as a minimum.
export const packagePrice = (locale: Locale, id: PackageId) => {
  const pkg = packageById(id);
  const amount = formatMoney(locale, pkg.prices[CURRENCY[locale]]);
  return pkg.isMinimum ? format(dictionaries[locale].pricing.from, { price: amount }) : amount;
};

// Landing-page copy refers to prices as {{price:<id>}} so every language always shows the current price.
export const fillPrices = (text: string, locale: Locale) =>
  text.replace(/\{\{price:(\w+)\}\}/g, (token, id: string) =>
    PACKAGES.some((p) => p.id === id) ? packagePrice(locale, id as PackageId) : token,
  );
