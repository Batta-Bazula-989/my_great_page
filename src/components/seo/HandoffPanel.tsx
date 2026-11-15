import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, Star } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { headingId } from "@/content";
import type { Block } from "@/content/types";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import ContentBlock from "./ContentBlock";
import { MEASURE } from "./measure";

interface HandoffPanelProps {
  heading?: string; // the article's own help-section heading; without one, seo.ctaTitle heads the panel
  blocks: Block[];
}

// The article's "how TascaLab can help" section, turned into the one place to act: the section's own
// text, then who does the work and the invitation to book the free Health Check.
const HandoffPanel = ({ heading, blocks }: HandoffPanelProps) => {
  const t = useDict();
  const locale = useLocale();
  const title = heading ?? t.seo.ctaTitle;
  const id = headingId(title);

  return (
    <section aria-labelledby={id} className="glass-panel rounded-[32px] p-6 md:p-10">
      <h2 id={id} className="scroll-mt-6 font-display text-2xl md:text-3xl font-bold tracking-tight">
        {title}
      </h2>

      {blocks.length > 0 && (
        <div className="mt-5 space-y-4">
          {blocks.map((block, i) => (
            <ContentBlock key={i} block={block} nested />
          ))}
        </div>
      )}

      <div className={blocks.length > 0 ? "mt-8 border-t border-border pt-8" : "mt-6"}>
        <div className="flex items-center gap-3.5">
          <span
            className="glass-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold text-primary"
            aria-hidden
          >
            RZ
          </span>
          <div>
            {heading && (
              <h3 className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight">{t.seo.ctaTitle}</h3>
            )}
            <p className={`text-sm text-muted-foreground ${heading ? "mt-1" : ""}`}>
              <span className="font-semibold text-foreground">Roman Zakharenko</span>
              <span aria-hidden>{" · "}</span>
              <span>{t.whyMe.role}</span>
            </p>
          </div>
        </div>

        <div className="mt-5">
          <p className={`${MEASURE} text-foreground/80 leading-relaxed text-pretty`}>{t.seo.ctaText}</p>
          <div className="mt-5 flex flex-col items-start gap-x-6 gap-y-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookingButton
              variant="hero"
              size="lg"
              className="h-auto min-h-12 w-full max-w-full rounded-full px-6 py-3 whitespace-normal text-center sm:w-auto"
            >
              <Calendar className="w-5 h-5" aria-hidden />
              {t.seo.ctaBook}
            </BookingButton>
            <a
              href={UPWORK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 font-semibold text-foreground/85 underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              <Star className="w-4 h-4 fill-primary text-primary" aria-hidden />
              {t.seo.ctaUpwork}
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
          <Link
            to={`${localePath(locale)}#pricing`}
            className="group mt-2 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            {t.seo.ctaPackages}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HandoffPanel;
