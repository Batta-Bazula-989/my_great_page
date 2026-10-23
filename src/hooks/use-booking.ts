import { createContext, useContext } from "react";

// What the visitor clicked "book" from.
export interface BookingTopic {
  lead: string; // English name sent with the lead notification, e.g. "Voice Bot"
  label?: string; // shown in the dialog in the visitor's language, e.g. "Voice Bot · 1.200 €"
}

export interface BookingContextValue {
  openBooking: (topic?: BookingTopic, trigger?: HTMLElement | null) => void;
}

export const BookingContext = createContext<BookingContextValue | null>(null);

// Null outside a BookingProvider (pages rendered outside the language layout), so callers can fall back to a link.
export const useBooking = () => useContext(BookingContext);
