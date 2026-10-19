import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

import { useDict } from "@/i18n";

const WhoForSection = () => {
  const t = useDict().fit;
  return (
    <section id="fit" aria-labelledby="fit-title" className="py-[4.8rem] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="fit-title" className="section-title">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            className="glass glass-hover relative p-8 rounded-[28px] overflow-hidden hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-6 text-gradient">{t.goodTitle}</h3>
              <div className="space-y-4">
                {t.good.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass glass-hover relative p-8 rounded-[28px] overflow-hidden hover:-translate-y-1"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-6 text-muted-foreground">{t.notTitle}</h3>
              <div className="space-y-4">
                {t.not.map((item, i) => (
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
