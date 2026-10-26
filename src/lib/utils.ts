import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// "26 October 2026" style, in the page's language. ISO dates are read as UTC so the day never shifts.
export const formatDate = (iso: string, dateLocale: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
