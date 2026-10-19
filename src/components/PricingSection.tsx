import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CalendarClock, ChevronDown, Receipt, Stethoscope } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import { useDict, useLocale } from "@/i18n";
import en from "@/i18n/en";
import { PACKAGES, packagePrice } from "@/lib/pricing";

const PricingSection = () => {
  const t = useDict().pricing;
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  // The lead notification always carries the English name.
  const book = (planName?: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 relative overflow-visible">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="pricing-title" className="section-title">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">{t.intro}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="glass-panel max-w-6xl mx-auto mb-8 rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="glass-chip w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
            <Stethoscope className="w-7 h-7 text-primary" aria-hidden />
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl md:text-2xl font-bold">{t.healthCheck.title}</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">{t.healthCheck.text}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
            <span className="font-display text-3xl font-bold text-primary">{t.healthCheck.price}</span>
            <button
              onClick={() => book(en.pricing.healthCheck.title)}
              className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:shadow-glow transition-shadow"
            >
              {t.healthCheck.cta}
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, i) => {
            const plan = t.plans[i];
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
                className="glass glass-hover relative rounded-[28px] flex flex-col overflow-hidden"
              >
                <div className="relative z-10 flex flex-col flex-1 p-7">
                  <h3 className="font-bold font-display text-foreground text-xl">{plan.name}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>

                  <div className="mt-5">
                    <div className="font-bold font-display text-primary leading-none text-4xl">
                      {packagePrice(locale, pkg.id)}
                    </div>
                    <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground">
                      <span>{t.oneTimeFee}</span>
                      <span aria-hidden>·</span>
                      <CalendarClock className="w-3.5 h-3.5 text-primary" aria-hidden />
                      <span>
                        {t.delivery} {t.deliveryTime}
                      </span>
                    </p>
                  </div>

                  <ul aria-label={t.included} className="mt-5 space-y-2.5 flex-1">
                    {plan.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <details className="group mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-foreground/90 [&::-webkit-details-marker]:hidden">
                      <Receipt className="w-4 h-4 text-primary" aria-hidden />
                      {t.running}
                      <ChevronDown className="ml-auto w-4 h-4 transition-transform group-open:rotate-180" aria-hidden />
                    </summary>
                    <p className="text-xs text-muted-foreground/80 mt-2">{t.runningNote}</p>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4 marker:text-primary/70">
                      {plan.running.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {plan.running.some((item) => item.endsWith("*")) && (
                      <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed">{t.footnote}</p>
                    )}
                  </details>

                  <button
                    onClick={() => book(en.pricing.plans[i].name)}
                    className="mt-6 w-full py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer glass-chip text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                  >
                    {t.cta}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="max-w-6xl mx-auto mt-8 text-center text-muted-foreground">{t.allPackages}</p>
      </div>

      <BookingModal open={modalOpen} onOpenChange={setModalOpen} selectedPlan={selectedPlan} />
    </section>
  );
};

export default PricingSection;
