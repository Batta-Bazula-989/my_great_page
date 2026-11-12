import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Calendar, Star } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { headingId } from "@/content";
import type { Block } from "@/content/types";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import portrait from "@/assets/roman-portrait.jpg";
import portrait280 from "@/assets/roman-portrait-280.webp";
import portrait560 from "@/assets/roman-portrait-560.webp";
import ContentBlock from "./ContentBlock";
import { MEASURE } from "./measure";

interface HandoffPanelProps {
  heading?: string; // the article's own help-section heading; without one, seo.ctaTitle heads the panel
  blocks: Block[];
}

// The article's "how TascaLab can help" section, turned into the one place to act: the section's own
// text, then Roman's portrait beside the invitation to book the free Health Check.
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

      <div
        className={`grid grid-cols-[4.5rem_minmax(0,1fr)] gap-x-4 gap-y-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-x-7 ${
          blocks.length > 0 ? "mt-8 border-t border-border pt-8" : "mt-6"
        }`}
      >
        {/* Same files as the homepage founder panel; the 280w WebP covers both sizes here at 2x */}
        <picture className="block self-start sm:row-span-2">
          <source type="image/webp" srcSet={`${portrait280} 280w, ${portrait560} 560w`} sizes="(min-width: 640px) 7rem, 4.5rem" />
          <img
            src={portrait}
            alt="Roman Zakharenko"
            width={560}
            height={700}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-xl border border-border object-cover sm:rounded-2xl"
          />
        </picture>

        <div className="self-center sm:self-start">
          {heading && (
            <h3 className="font-display text-xl md:text-2xl font-bold leading-snug tracking-tight">{t.seo.ctaTitle}</h3>
          )}
          {/* Name and role on two lines on phones, one line beside the larger portrait */}
          <p className={`text-sm text-muted-foreground ${heading ? "mt-1.5" : ""}`}>
            <span className="block font-semibold text-foreground sm:inline">Roman Zakharenko</span>
            <span className="hidden sm:inline" aria-hidden>
              {" · "}
            </span>
            <span className="block sm:inline">{t.whyMe.role}</span>
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1 sm:col-start-2">
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
