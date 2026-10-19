import { motion } from "framer-motion";
import { Star, ArrowUpRight, MessageSquareQuote, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <section id="reviews" aria-labelledby="reviews-title" className="py-[4.8rem] relative">
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="reviews-title" className="section-title">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            {t.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {UPWORK_REVIEWS.map((review, i) => (
            <motion.figure
              key={review.date}
              className="glass rounded-[28px] p-8 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
            >
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
                <span className="font-semibold text-foreground">{rating(review.rating)}</span>
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
            </motion.figure>
          ))}
        </div>

        <p className="max-w-4xl mx-auto mt-4 mb-10 text-sm text-muted-foreground text-center">
          {t.quoted}{" "}
          <a
            href={UPWORK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline"
          >
            {t.verify}
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
          </a>
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            className="glass glass-hover rounded-[28px] p-8 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex items-center gap-1 mb-5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <h3 className="text-xl font-bold font-display mb-2 flex items-center gap-2">
              <BadgeCheck className="w-5 h-5 text-primary" aria-hidden />
              {t.readTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              {t.readText}
            </p>
            <Button variant="hero" size="lg" className="rounded-full self-start" asChild>
              <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                {t.readCta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="glass glass-hover rounded-[28px] p-8 flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-2xl glass-chip flex items-center justify-center mb-5">
              <MessageSquareQuote className="w-6 h-6 text-primary" aria-hidden />
            </div>
            <h3 className="text-xl font-bold font-display mb-2">{t.leaveTitle}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              {t.leaveText}
            </p>
            <Button variant="glass" size="lg" className="rounded-full self-start" asChild>
              <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                {t.leaveCta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
