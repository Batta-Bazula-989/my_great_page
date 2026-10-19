import { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import SeoPage from "./pages/SeoPage";
import Resources from "./pages/Resources";
import { LocaleContext } from "@/i18n";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/config";
import type { Locale } from "@/content/types";

const LocaleLayout = ({ locale }: { locale: Locale }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>
      <Outlet />
    </LocaleContext.Provider>
  );
};

// Shared by the browser app (App.tsx) and the build-time pre-renderer (entry-server.tsx).
// English lives at the root, other languages under /<code>/. Privacy and Terms are English only.
export const AppRoutes = () => (
  <Routes>
    {LOCALES.map(({ code }) => (
      <Route key={code} path={code === DEFAULT_LOCALE ? "/" : `/${code}`} element={<LocaleLayout locale={code} />}>
        <Route index element={<Index />} />
        <Route path="resources" element={<Resources />} />
        <Route path=":slug" element={<SeoPage />} />
      </Route>
    ))}
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
