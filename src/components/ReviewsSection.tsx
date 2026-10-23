import { Star, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { UPWORK_REVIEWS } from "@/content/reviews";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";

const ReviewsSection = () => {
  const t = useDict().reviews;
  const { dateLocale } = localeInfo(useLocale());
  const rating = (n: number) => n.toLocaleString(dateLocale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const date = (iso: string) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString(dateLocale, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
  return (
    <Section id="reviews" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {UPWORK_REVIEWS.map((review, i) => (
          <Reveal key={review.date} className="h-full" delay={i * 0.1}>
            <figure className="glass h-full rounded-[28px] p-7 md:p-8 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label={format(t.stars, { rating: rating(review.rating) })}
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${s < Math.round(review.rating) ? "fill-primary text-primary" : "text-muted-foreground/40"}`}
                      aria-hidden
                    />
                  ))}
                </div>
                <span className="font-semibold text-foreground tabular-nums">{rating(review.rating)}</span>
                <time dateTime={review.date} className="text-sm text-muted-foreground">
                  {date(review.date)}
                </time>
              </div>
              <blockquote lang="en" className="text-foreground/90 text-lg leading-relaxed italic flex-1">
                “{review.text}”
              </blockquote>
              <figcaption lang="en" className="mt-5 text-sm text-muted-foreground">
                {review.project} · Upwork
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <p className="max-w-4xl mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span>{t.quoted}</span>
        <a
          href={UPWORK_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
        >
          {t.verify}
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
        </a>
      </p>
    </Section>
  );
};

export default ReviewsSection;
