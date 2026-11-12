import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORY_IDS, pageIndex } from "@/content";
import type { CategoryId, PageSummary } from "@/content/types";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useDict, useLocale } from "@/i18n";
import { BLOG_PATH, localeInfo, localePath } from "@/i18n/config";
import { formatDate, isCategory, newestFirst } from "@/lib/blog";
import { cn } from "@/lib/utils";

type Filter = CategoryId | "all";

const Meta = ({ page, className }: { page: PageSummary; className?: string }) => {
  const locale = useLocale();
  const t = useDict();
  return (
    <div className={cn("flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.12em]", className)}>
      <span className="rounded-md bg-primary/10 px-2.5 py-1 font-semibold text-primary">{t.categories[page.category].label}</span>
      <span className="text-muted-foreground">
        <time dateTime={page.updated}>{formatDate(page.updated, localeInfo(locale).dateLocale)}</time>
        {" · "}
        {t.blog.minRead.replace("{n}", String(page.minutes))}
      </span>
    </div>
  );
};

const ReadMore = ({ label }: { label: string }) => (
  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
    {label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
  </span>
);

const Blog = () => {
  const locale = useLocale();
  const t = useDict();
  const { hash } = useLocation();
  usePageMeta(t.blog.metaTitle, t.blog.metaDescription, localePath(locale, BLOG_PATH));

  // /blog#crm opens with that topic selected (breadcrumbs on articles link here).
  const [filter, setFilter] = useState<Filter>("all");
  useEffect(() => {
    const id = hash.slice(1);
    setFilter(isCategory(id, CATEGORY_IDS) ? id : "all");
  }, [hash]);

  const choose = (next: Filter) => {
    setFilter(next);
    const url = next === "all" ? window.location.pathname : `${window.location.pathname}#${next}`;
    window.history.replaceState(window.history.state, "", url);
  };

  const pages = newestFirst(pageIndex(locale).filter((p) => filter === "all" || p.category === filter));
  const [featured, ...rest] = pages;
  const filters: Filter[] = ["all", ...CATEGORY_IDS];

  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none pt-28 pb-16">
        <div className="container px-4 max-w-6xl">
          <h1 className="sr-only">{t.blog.title}</h1>

          <div role="group" aria-label={t.blog.filterLabel} className="-mx-4 mb-10 flex gap-2.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {filters.map((id) => (
              <button
                key={id}
                type="button"
                aria-pressed={filter === id}
                onClick={() => choose(id)}
                className={cn(
                  "min-h-11 shrink-0 whitespace-nowrap rounded-lg border px-4 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  filter === id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/80 hover:border-primary/60 hover:text-foreground",
                )}
              >
                {id === "all" ? t.blog.all : t.categories[id].label}
              </button>
            ))}
          </div>

          {featured && (
            <Link
              to={localePath(locale, featured.slug)}
              className="group glass glass-hover mb-8 grid gap-8 rounded-[28px] p-6 md:p-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
            >
              <div className="flex flex-col">
                <Meta page={featured} />
                <h2 className="mt-5 font-display text-2xl md:text-4xl font-bold leading-tight tracking-tight">{featured.h1}</h2>
                <p className="mt-4 text-base md:text-lg text-foreground/80 leading-relaxed">{featured.description}</p>
                <div className="mt-6">
                  <ReadMore label={t.blog.readArticle} />
                </div>
              </div>
              <div className="hidden rounded-2xl border border-border bg-secondary/50 p-6 lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t.seo.atAGlance}</p>
                <ul className="mt-4 space-y-3">
                  {featured.keyFacts.slice(0, 3).map((fact) => (
                    <li key={fact} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((page) => (
              <Link key={page.key} to={localePath(locale, page.slug)} className="group glass glass-hover flex flex-col rounded-2xl p-6">
                <Meta page={page} />
                <h2 className="mt-5 font-display text-lg md:text-xl font-semibold leading-snug">{page.h1}</h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed line-clamp-3">{page.description}</p>
                <div className="mt-5">
                  <ReadMore label={t.blog.readArticle} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
