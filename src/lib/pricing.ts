// Single source of truth for package prices, in every currency the site shows.
// Non-USD prices were converted from USD at the ECB reference rates of 16 October 2026
// (1 EUR = 1.1253 USD = 4.37 PLN = 11.145 SEK) and rounded (EUR to 10, PLN to 50, SEK to 100).
import type { Locale } from "@/content/types";
import { dictionaries, format } from "@/i18n";
import { localeInfo } from "@/i18n/config";

export type Currency = "USD" | "EUR" | "PLN" | "SEK";

// The CRM and sales automation packages on the homepage.
export type PackageId =
  | "replyLogging"
  | "callLogging"
  | "meetingNotes"
  | "inboxLinkedin"
  | "visitors"
  | "cleanup"
  | "migration"
  | "custom";

export interface Package {
  id: PackageId;
  // Left out until Roman confirms a price; the card then says "Fixed price after your Health Check".
  prices?: Record<Currency, number>;
  // Scoped work, so its price is a minimum.
  isMinimum?: boolean;
}

// Same order as `pricing.plans` in the dictionaries.
export const PACKAGES: Package[] = [
  { id: "replyLogging" },
  { id: "callLogging" },
  { id: "meetingNotes" },
  { id: "inboxLinkedin" },
  { id: "visitors" },
  { id: "cleanup" },
  { id: "migration", isMinimum: true },
  { id: "custom", isMinimum: true },
];

// The old support packages. Only the guide pages ({{price:<id>}} tokens) and the AI support agent
// calculator still quote them; they go when those pages drop their prices (prompt 06).
export type SupportPackageId = "starter" | "standard" | "voice" | "routing" | "reports" | "custom";

export const SUPPORT_PACKAGES: {
  id: SupportPackageId;
  name: string; // stays in English in every language
  prices: Record<Currency, number>;
  isMinimum?: boolean;
}[] = [
  { id: "starter", name: "Starter Chat Bot", prices: { USD: 400, EUR: 360, PLN: 1550, SEK: 4000 } },
  { id: "voice", name: "Voice Bot", prices: { USD: 1350, EUR: 1200, PLN: 5250, SEK: 13400 } },
  { id: "standard", name: "Standard Chat Bot", prices: { USD: 575, EUR: 510, PLN: 2250, SEK: 5700 } },
  { id: "routing", name: "Ticket Routing & Categorization", prices: { USD: 775, EUR: 690, PLN: 3000, SEK: 7700 } },
  { id: "reports", name: "Automated Reports", prices: { USD: 700, EUR: 620, PLN: 2700, SEK: 6900 } },
  { id: "custom", name: "Custom Automation", prices: { USD: 1200, EUR: 1070, PLN: 4650, SEK: 11900 }, isMinimum: true },
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
export const supportPackageById = (id: SupportPackageId) => SUPPORT_PACKAGES.find((p) => p.id === id)!;

// ECB reference rates of 16 October 2026: units of each currency per 1 EUR.
export const ECB_RATES: Record<Currency, number> = { EUR: 1, USD: 1.1253, PLN: 4.37, SEK: 11.145 };
export const ECB_RATES_DATE = "2026-10-16";

export const convert = (amount: number, from: Currency, to: Currency) => (amount / ECB_RATES[from]) * ECB_RATES[to];

export const formatMoney = (locale: Locale, amount: number) =>
  new Intl.NumberFormat(localeInfo(locale).dateLocale, {
    style: "currency",
    currency: CURRENCY[locale],
    maximumFractionDigits: 0,
  }).format(amount);

const priceLabel = (locale: Locale, pkg: { prices: Record<Currency, number>; isMinimum?: boolean }) => {
  const amount = formatMoney(locale, pkg.prices[CURRENCY[locale]]);
  return pkg.isMinimum ? format(dictionaries[locale].pricing.from, { price: amount }) : amount;
};

// "$700", "from $1,200", or undefined while the package has no confirmed price.
export const packagePrice = (locale: Locale, id: PackageId) => {
  const pkg = packageById(id);
  return pkg.prices ? priceLabel(locale, { prices: pkg.prices, isMinimum: pkg.isMinimum }) : undefined;
};

// Landing-page copy refers to prices as {{price:<id>}} so every language always shows the current price.
export const fillPrices = (text: string, locale: Locale) =>
  text.replace(/\{\{price:(\w+)\}\}/g, (token, id: string) => {
    const pkg = SUPPORT_PACKAGES.find((p) => p.id === id);
    return pkg ? priceLabel(locale, pkg) : token;
  });
