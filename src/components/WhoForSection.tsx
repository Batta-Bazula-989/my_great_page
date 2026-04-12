import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const goodFit = [
  "Your support team handles repetitive, predictable work that shows up every single day",
  "You're on Zendesk, Freshdesk, Jira, or similar — and want automation on top, not a replacement",
  "You want clear reporting without someone manually pulling data every week",
  "Your tools don't talk to each other and tickets fall through the cracks because of it",
  "You want to know exactly what you're getting before you pay for anything",
];

const notFit = [
  "You need a full-time support manager to run day-to-day ops",
  "You want one tool to handle everything — intake, resolution, escalation, reporting, all of it",
  "You're planning to replace your entire support stack and start from scratch",
  `You believe AI can fully replace your support team — it can't, and anyone who says otherwise is selling something`,
];

const WhoForSection = () => {
  return (
    <section id="fit" className="py-[4.8rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="text-primary font-bold uppercase tracking-wider" style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}>
            Is This a Fit?
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="relative p-8 rounded-[20px] overflow-hidden bg-secondary border border-primary/20 hover:-translate-y-1 card-hover-glow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-6 text-gradient">Good Fit</h3>
              <div className="space-y-4">
                {goodFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative p-8 rounded-[20px] overflow-hidden bg-secondary border border-red-500/25 hover:-translate-y-1 card-hover-glow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-6 text-muted-foreground">Not the Right Fit</h3>
              <div className="space-y-4">
                {notFit.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoForSection;
