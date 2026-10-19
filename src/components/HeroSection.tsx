import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, ArrowUpRight, ShieldCheck, Clock, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { useDict } from "@/i18n";

const tools = ["Zendesk", "Freshdesk", "Jira", "Slack", "WhatsApp", "Telegram"];

const highlightIcons = [Plug, Clock, ShieldCheck];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const HeroSection = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const t = useDict().hero;

  return (
    <header className="relative min-h-[92svh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="container relative z-10 px-4">
        <div className="glass-panel mx-auto max-w-4xl rounded-[32px] px-6 py-10 md:px-14 md:py-14 text-center">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="glass-chip mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-foreground/80"
          >
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            {t.eyebrow}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] tracking-tight"
          >
            {t.titleBefore}
            <span className="text-gradient">{t.titleHighlight}</span>
            {t.titleAfter}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground text-base md:text-lg max-w-2xl mt-5 mx-auto leading-relaxed"
          >
            {t.intro}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="hero" size="xl" className="rounded-full" onClick={() => setBookingOpen(true)}>
              <Calendar className="w-5 h-5" />
              {t.ctaBook}
            </Button>
            <Button variant="glass" size="xl" className="rounded-full" asChild>
              <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                <Star className="w-5 h-5 text-primary" />
                {t.ctaUpwork}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          <motion.ul
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-foreground/75"
          >
            {t.highlights.map((text, i) => {
              const Icon = highlightIcons[i];
              return (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" aria-hidden />
                  {text}
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70 mb-3">
            {t.integratesWith}
          </p>
          <ul className="flex flex-wrap justify-center gap-2.5">
            {tools.map((tool) => (
              <li key={tool} className="glass-chip rounded-full px-4 py-1.5 text-sm text-foreground/80">
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
    </header>
  );
};

export default HeroSection;
