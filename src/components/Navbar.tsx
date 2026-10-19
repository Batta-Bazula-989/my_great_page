import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageList, LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

const Navbar = () => {
  const t = useDict();
  const locale = useLocale();
  const home = localePath(locale);
  const navLinks = [
    { href: `${home}#services`, label: t.nav.services },
    { href: `${home}#fit`, label: t.nav.fit },
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

  return (
    <nav
      aria-label="Main"
      className="fixed top-3 left-0 right-0 z-50 px-3"
    >
      <div
        className={`container max-w-5xl px-4 rounded-[22px] border transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "glass-nav"
            : "border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Link to={home} className="flex items-center gap-2 font-display font-semibold">
            <img src="/favicon.svg" alt={t.nav.logoAlt} width={32} height={32} className="h-8 w-8" />
            <span>TascaLab</span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
            <Button variant="hero" size="sm" className="rounded-full px-4" asChild>
              <a href={`${home}#contact`}>{t.nav.cta}</a>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              className="p-2"
              aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden border-t border-white/10 overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.05 }}
                >
                  <Button variant="hero" size="sm" className="rounded-full px-4" asChild>
                    <a href={`${home}#contact`} onClick={() => setIsMobileMenuOpen(false)}>{t.nav.cta}</a>
                  </Button>
                </motion.div>
                <LanguageList onPick={() => setIsMobileMenuOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
