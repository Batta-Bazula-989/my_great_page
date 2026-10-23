import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookingButton from "@/components/BookingButton";
import { LanguageList, LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ToolsList, ToolsMenu } from "@/components/ToolsMenu";
import { useBooking } from "@/hooks/use-booking";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

const Navbar = () => {
  const t = useDict();
  const locale = useLocale();
  const booking = useBooking();
  const home = localePath(locale);
  const navLinks = [
    { href: `${home}#services`, label: t.nav.services },
    { href: `${home}#why-me`, label: t.nav.whyMe },
    { href: `${home}#pricing`, label: t.nav.pricing },
    { href: `${home}#reviews`, label: t.nav.reviews },
    { href: `${home}#faq`, label: t.nav.faq },
    { href: localePath(locale, "resources"), label: t.nav.resources },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Opens the booking dialog where there is one (every language layout); elsewhere links to the contact section.
  const cta = (className: string, label: string) =>
    booking ? (
      <BookingButton variant="hero" size="sm" className={className}>
        {label}
      </BookingButton>
    ) : (
      <Button variant="hero" size="sm" className={className} asChild>
        <a href={`${home}#contact`}>{label}</a>
      </Button>
    );

  return (
    <nav aria-label="Main" className="fixed top-3 left-0 right-0 z-50 px-3">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-0 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2.5 focus:font-semibold focus:text-primary-foreground"
      >
        {t.nav.skipToContent}
      </a>
      <div
        className={`container max-w-6xl px-3 sm:px-4 rounded-[22px] border transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "glass-nav"
            : "border-transparent"
        }`}
      >
        <div className="flex items-center justify-between gap-3 h-14">
          <Link to={home} className="flex min-h-11 items-center gap-2 font-display font-semibold">
            <img src="/favicon.svg" alt={t.nav.logoAlt} width={32} height={32} className="h-8 w-8" />
            {/* The wordmark gives way to the booking pill on the narrowest phones; the logo stays */}
            <span className="hidden min-[380px]:inline">TascaLab</span>
          </Link>

          <div className="hidden xl:flex items-center gap-5 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ToolsMenu />
            <LanguageSwitcher />
            {cta("rounded-full px-4", t.nav.cta)}
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            {/* Always-visible booking on smaller screens; "Health Check" stays English in every language */}
            {booking ? (
              <BookingButton variant="hero" size="sm" className="h-10 rounded-full px-4 hover:scale-100">
                <Calendar className="h-4 w-4" aria-hidden />
                Health Check
              </BookingButton>
            ) : null}
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden /> : <Menu className="w-6 h-6" aria-hidden />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="xl:hidden border-t border-white/10 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {/* The menu can be taller than a phone screen, so it scrolls inside the fixed bar */}
              <div className="flex max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto overscroll-contain py-3">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="flex min-h-11 items-center text-muted-foreground hover:text-foreground transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                {!booking && (
                  <div className="py-2">{cta("rounded-full px-4", t.nav.cta)}</div>
                )}
                <div className="mt-2 space-y-4 border-t border-white/10 pt-4">
                  <ToolsList onPick={() => setIsMobileMenuOpen(false)} />
                  <LanguageList onPick={() => setIsMobileMenuOpen(false)} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
