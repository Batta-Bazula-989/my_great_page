import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { BookingContext, type BookingTopic } from "@/hooks/use-booking";

// The dialog (form, validation, country picker) is a separate download: it's fetched once the page is idle,
// so it doesn't slow the first load but is ready by the time someone clicks "book".
const loadBookingModal = () => import("@/components/BookingModal");
const BookingModal = lazy(loadBookingModal);

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

// One booking dialog per page. Every "book" button opens it, so whatever the visitor already typed
// is still there when they open it again from another section.
const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [topic, setTopic] = useState<BookingTopic | undefined>();
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const w = window as IdleWindow;
    const fetchDialog = () => void loadBookingModal();
    if (w.requestIdleCallback) {
      const handle = w.requestIdleCallback(fetchDialog, { timeout: 4000 });
      return () => w.cancelIdleCallback?.(handle);
    }
    const timer = window.setTimeout(fetchDialog, 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const openBooking = useCallback((next?: BookingTopic, trigger?: HTMLElement | null) => {
    // Safari doesn't focus buttons on click, so prefer the element that was clicked.
    triggerRef.current = trigger ?? (document.activeElement as HTMLElement | null);
    setTopic(next);
    setMounted(true);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {mounted && (
        <Suspense fallback={null}>
          <BookingModal open={open} onOpenChange={setOpen} topic={topic} returnFocusTo={triggerRef} />
        </Suspense>
      )}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
