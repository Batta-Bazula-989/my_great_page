// Pieces of the guide page layout (src/pages/SeoPage.tsx), shared with /work and the case studies.
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, ChevronRight, Star } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { Button } from "@/components/ui/button";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { useDict } from "@/i18n";

// Home > … > current page. The last item is the current page and has no link.
export const GuideBreadcrumb = ({ items }: { items: { label: string; to?: string }[] }) => (
  <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto mb-6 text-sm text-muted-foreground">
    <ol className="flex flex-wrap items-center gap-1.5">
      {items.map((item, i) => (
        <Fragment key={item.label}>
          {i > 0 && <ChevronRight className="w-3.5 h-3.5" aria-hidden />}
          {item.to ? (
            <li>
              <Link to={item.to} className="hover:text-primary transition-colors">{item.label}</Link>
            </li>
          ) : (
            <li aria-current="page" className="text-foreground/80">{item.label}</li>
          )}
        </Fragment>
      ))}
    </ol>
  </nav>
);

// The "Book a Free Health Check" block near the end of every guide page.
export const GuideCta = () => {
  const t = useDict().seo;
  return (
    <section aria-labelledby="get-it-built" className="glass-panel rounded-[32px] p-6 md:p-10 text-center">
      <h2 id="get-it-built" className="font-display text-2xl md:text-3xl font-bold tracking-tight">
        {t.ctaTitle}
      </h2>
      <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
        {t.ctaText}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <BookingButton variant="hero" size="lg" className="rounded-full">
          <Calendar className="w-5 h-5" aria-hidden />
          {t.ctaBook}
        </BookingButton>
        <Button variant="glass" size="lg" className="rounded-full" asChild>
          <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
            <Star className="w-5 h-5 text-primary" />
            {t.ctaUpwork}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </section>
  );
};

// "On this page" sidebar, shown from 1024px.
export const OnThisPage = ({ links }: { links: { id: string; label: string }[] }) => {
  const t = useDict().seo;
  return (
    <aside className="hidden lg:block">
      <nav aria-label={t.onThisPage} className="glass sticky top-28 rounded-2xl p-5 text-sm">
        <p className="font-display font-semibold mb-3">{t.onThisPage}</p>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export const RelatedCards = ({ items }: { items: { key: string; to: string; label: string; title: string }[] }) => {
  const t = useDict().seo;
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related" className="max-w-5xl mx-auto mt-16">
      <h2 id="related" className="font-display text-2xl font-bold mb-5">{t.related}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((r) => (
          <Link key={r.key} to={r.to} className="glass glass-hover rounded-2xl p-5 block">
            <span className="text-xs uppercase tracking-[0.18em] text-primary">{r.label}</span>
            <span className="mt-2 block font-display font-semibold">{r.title}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
