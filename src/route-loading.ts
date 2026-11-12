// What each URL needs before it can render: its page component (each page type is its own download, so an
// article doesn't carry the homepage or the calculators), its language's strings and page index, and for an
// article its text. Used by main.tsx before hydrating, and by entry-server.tsx at build time.
import { loadDictionary } from "@/i18n";
import { BLOG_PATH, DEFAULT_LOCALE, localeFromPath } from "@/i18n/config";
import { loadPageIndex } from "@/content";
import { loadSeoPage } from "@/content/load";
import type { Locale } from "@/content/types";
import { TOOL_SLUGS } from "@/tools/registry";
import { lazyPage } from "@/lib/lazy-page";

export const pages = {
  Index: lazyPage(() => import("./pages/Index")),
  Blog: lazyPage(() => import("./pages/Blog")),
  SeoPage: lazyPage(() => import("./pages/SeoPage")),
  ToolsHub: lazyPage(() => import("./pages/ToolsHub")),
  ToolPage: lazyPage(() => import("./pages/ToolPage")),
  Privacy: lazyPage(() => import("./pages/Privacy")),
  Terms: lazyPage(() => import("./pages/Terms")),
};
export type PageName = keyof typeof pages;

// Source files of the page components, for the pre-renderer's <link rel="modulepreload"> tags.
export const PAGE_FILES: Record<PageName, string> = {
  Index: "src/pages/Index.tsx",
  Blog: "src/pages/Blog.tsx",
  SeoPage: "src/pages/SeoPage.tsx",
  ToolsHub: "src/pages/ToolsHub.tsx",
  ToolPage: "src/pages/ToolPage.tsx",
  Privacy: "src/pages/Privacy.tsx",
  Terms: "src/pages/Terms.tsx",
};

// Which page component a URL shows, mirroring AppRoutes (routes.tsx). A single unknown segment counts as an
// article; SeoPage itself shows the 404 page when no article has that slug.
export const routeFor = (pathname: string): { page?: PageName; locale: Locale; article?: string } => {
  const locale = localeFromPath(pathname);
  if (pathname === "/privacy") return { page: "Privacy", locale };
  if (pathname === "/terms") return { page: "Terms", locale };
  const segments = pathname.split("/").filter(Boolean);
  const [first, second, third] = locale === DEFAULT_LOCALE ? segments : segments.slice(1);
  if (first === undefined) return { page: "Index", locale };
  if (third !== undefined) return { locale };
  if (first === BLOG_PATH && second === undefined) return { page: "Blog", locale };
  if (first === TOOL_SLUGS[locale].hub) return { page: second === undefined ? "ToolsHub" : "ToolPage", locale };
  if (second !== undefined) return { locale };
  return { page: "SeoPage", locale, article: first };
};

// Loads everything the page at <pathname> needs, so it renders and hydrates without waiting.
export const preloadRoute = (pathname: string) => {
  const route = routeFor(pathname);
  return Promise.all([
    loadDictionary(route.locale),
    loadPageIndex(route.locale),
    route.page && pages[route.page].preload(),
    route.article && loadSeoPage(route.locale, route.article),
  ]);
};
