import { useCallback, useMemo, useRef, useState, type ReactNode } from "react";
import BookingModal from "@/components/BookingModal";
import { BookingContext, type BookingTopic } from "@/hooks/use-booking";

// One booking dialog per page. Every "book" button opens it, so whatever the visitor already typed
// is still there when they open it again from another section.
const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState<BookingTopic | undefined>();
  const triggerRef = useRef<HTMLElement | null>(null);

  const openBooking = useCallback((next?: BookingTopic, trigger?: HTMLElement | null) => {
    // Safari doesn't focus buttons on click, so prefer the element that was clicked.
    triggerRef.current = trigger ?? (document.activeElement as HTMLElement | null);
    setTopic(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal open={open} onOpenChange={setOpen} topic={topic} returnFocusTo={triggerRef} />
    </BookingContext.Provider>
  );
};

export default BookingProvider;
