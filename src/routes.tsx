import { useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookingProvider from "@/components/BookingProvider";
import { LocaleContext } from "@/i18n";
import { BLOG_PATH, DEFAULT_LOCALE, LOCALES } from "@/i18n/config";
import type { Locale } from "@/content/types";
import { TOOL_SLUGS } from "@/tools/registry";
import { pages } from "./route-loading";

const { Index, Blog, SeoPage, ToolsHub, ToolPage, Privacy, Terms } = pages;

const LocaleLayout = ({ locale }: { locale: Locale }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>
      <BookingProvider>
        <Outlet />
      </BookingProvider>
    </LocaleContext.Provider>
  );
};

// Shared by the browser app (App.tsx) and the build-time pre-renderer (entry-server.tsx).
// English lives at the root, other languages under /<code>/. Privacy and Terms are English only.
// Page components load on demand; route-loading.ts preloads the right one before the first render.
export const AppRoutes = () => (
  <Routes>
    {LOCALES.map(({ code }) => (
      <Route key={code} path={code === DEFAULT_LOCALE ? "/" : `/${code}`} element={<LocaleLayout locale={code} />}>
        <Route index element={<Index />} />
        <Route path={BLOG_PATH} element={<Blog />} />
        <Route path={TOOL_SLUGS[code].hub} element={<ToolsHub />} />
        <Route path={`${TOOL_SLUGS[code].hub}/:toolSlug`} element={<ToolPage />} />
        <Route path=":slug" element={<SeoPage />} />
      </Route>
    ))}
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
