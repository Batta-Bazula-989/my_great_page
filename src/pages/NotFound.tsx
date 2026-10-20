import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, Calculator, CalendarCheck, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LocaleContext, dictionaries } from "@/i18n";
import { localeFromPath, localePath } from "@/i18n/config";
import { toolsPath } from "@/tools/registry";

// Shown for any unknown address. The server returns it with a 404 status (dist/404.html, dist/<lang>/404.html).
const NotFound = () => {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const t = dictionaries[locale];

  useEffect(() => {
    document.title = `${t.notFound.title} | TascaLab`;
  }, [t]);

  const links = [
    { to: localePath(locale), label: t.notFound.back, icon: Home },
    { to: toolsPath(locale), label: t.tools.hub.title, icon: Calculator },
    { to: localePath(locale, "resources"), label: t.resources.title, icon: BookOpen },
    { to: `${localePath(locale)}#contact`, label: t.nav.cta, icon: CalendarCheck },
  ];

  return (
    <LocaleContext.Provider value={locale}>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container px-4 max-w-3xl text-center">
          <p className="font-display text-7xl md:text-8xl font-bold text-primary">404</p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold font-display">{t.notFound.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{t.notFound.text}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 text-left">
            {links.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link to={to} className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group h-full">
                  <span className="glass-chip w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" aria-hidden />
                  </span>
                  <span className="flex-1 font-display font-semibold">{label}</span>
                  <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </LocaleContext.Provider>
  );
};

export default NotFound;
