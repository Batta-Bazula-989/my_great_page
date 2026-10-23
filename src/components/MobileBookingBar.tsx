import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { CONSENT_EVENT, consentDecided } from "@/lib/consent";
import { useDict } from "@/i18n";

// Phones only: a booking button in thumb reach between the hero and the contact section.
// Waits for the cookie choice so the two bars never stack.
const MobileBookingBar = () => {
  const t = useDict().hero;
  const [inRange, setInRange] = useState(false);
  const [consentDone, setConsentDone] = useState(false);

  useEffect(() => {
    setConsentDone(consentDecided());
    const onConsent = () => setConsentDone(true);
    window.addEventListener(CONSENT_EVENT, onConsent);

    const update = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > window.innerHeight;
      const beforeContact = contact ? contact.getBoundingClientRect().top > window.innerHeight * 0.85 : true;
      setInRange(pastHero && beforeContact);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <AnimatePresence>
      {inRange && consentDone && (
        <motion.div
          className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          exit={{ y: "120%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-nav rounded-full p-1.5">
            <BookingButton variant="hero" className="h-12 w-full rounded-full text-base hover:scale-100">
              <Calendar className="h-5 w-5" aria-hidden />
              {t.ctaBook}
            </BookingButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileBookingBar;
