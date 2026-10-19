import { motion } from "framer-motion";
import { Check, Building2, ServerCog } from "lucide-react";

import { useDict } from "@/i18n";

const optionIcons = [Building2, ServerCog];

const DataSection = () => {
  const t = useDict().data;
  return (
    <section id="data" aria-labelledby="data-title" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="data-title" className="section-title">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">{t.intro}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.options.map((option, i) => {
            const Icon = optionIcons[i];
            return (
              <motion.div
                key={option.title}
                className="glass glass-hover relative p-8 rounded-[28px] overflow-hidden hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="glass-chip w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold font-display">{option.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                        <span className="text-foreground/90 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="max-w-4xl mx-auto mt-6 text-center text-xs text-muted-foreground/80">{t.note}</p>
      </div>
    </section>
  );
};

export default DataSection;
