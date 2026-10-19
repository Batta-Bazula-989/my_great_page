import { motion } from "framer-motion";
import { Star, ArrowUpRight, MessageSquareQuote, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { useDict } from "@/i18n";

const ReviewsSection = () => {
  const t = useDict().reviews;
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
