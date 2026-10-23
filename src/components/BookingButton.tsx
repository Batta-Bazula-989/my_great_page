import { forwardRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useBooking, type BookingTopic } from "@/hooks/use-booking";

type BookingButtonProps = Omit<ButtonProps, "asChild"> & { topic?: BookingTopic };

// A button that opens the shared booking dialog (see BookingProvider).
const BookingButton = forwardRef<HTMLButtonElement, BookingButtonProps>(({ topic, onClick, ...props }, ref) => {
  const booking = useBooking();
  return (
    <Button
      ref={ref}
      type="button"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        booking?.openBooking(topic, e.currentTarget);
      }}
    />
  );
});
BookingButton.displayName = "BookingButton";

export default BookingButton;
