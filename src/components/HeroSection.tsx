import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Star, ArrowUpRight, ShieldCheck, Clock, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import { UPWORK_PROFILE_URL } from "@/lib/links";

const tools = ["Zendesk", "Freshdesk", "Jira", "Slack", "WhatsApp", "Telegram"];

const highlights = [
  { icon: Plug, text: "Works with your current helpdesk" },
  { icon: Clock, text: "Live in 1–3 weeks" },
  { icon: ShieldCheck, text: "30 days of support included" },
];

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
            Support automation that actually holds up
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] tracking-tight"
          >
            AI chatbots, voice bots &amp;{" "}
            <span className="text-gradient">ticket automation</span> for support teams
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-muted-foreground text-base md:text-lg max-w-2xl mt-5 mx-auto leading-relaxed"
          >
            I connect AI to the helpdesk you already use — answering repetitive questions,
            routing every ticket to the right queue, and delivering the reports your team
            builds by hand. Fewer manual tasks, faster first replies, no platform switch.
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
              Book a Free Audit
            </Button>
            <Button variant="glass" size="xl" className="rounded-full" asChild>
              <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                <Star className="w-5 h-5 text-primary" />
                Reviews on Upwork
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
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-primary" aria-hidden />
                {text}
              </li>
            ))}
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
            Integrates with
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
