import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Clock, FileText } from "lucide-react";
import BookingModal from "@/components/BookingModal";

import { useDict } from "@/i18n";
import en from "@/i18n/en";

const trustIcons = [ShieldCheck, Clock, FileText];

const PricingSection = () => {
  const t = useDict().pricing;
  const plans = t.plans.map((plan) => ({ ...plan, popular: false, cta: t.cta }));
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  // The lead notification always carries the English plan name.
  const handleCTA = (index: number) => {
    setSelectedPlan(en.pricing.plans[index].name);
    setModalOpen(true);
  };

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="py-20 relative overflow-visible">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="pricing-title" className="section-title">{t.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            {t.intro}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto lg:grid-rows-2 lg:[grid-auto-rows:1fr] pb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: plan.popular ? -16 : 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.07 }}
              whileHover={{
                y: plan.popular ? -22 : -6,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className={`
                glass glass-hover relative rounded-[28px] flex flex-col overflow-hidden
                ${plan.popular ? "border-2 border-primary" : ""}
              `}
            >
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`relative z-10 flex flex-col flex-1 ${plan.popular ? "p-8 pt-10" : "p-7"}`}>
                {/* Plan name */}
                <h3
                  className="font-bold font-display text-foreground mb-2"
                  style={{ fontSize: plan.popular ? "1.5rem" : "1.26rem" }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed min-h-[7rem]" style={{ fontSize: "1.05rem" }}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div
                    className="font-bold font-display text-primary leading-none"
                    style={{ fontSize: plan.popular ? "2.88rem" : "2.4rem" }}
                  >
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground/60 mt-2" style={{ fontSize: "0.9rem" }}>{t.oneTimeFee}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 mb-6" />

                {/* Features */}
                <div className="flex-1 mb-7">
                  {plan.features.length > 0 && (
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed" style={{ fontSize: "1.05rem" }}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* CTA button */}
                <button
                  onClick={() => handleCTA(i)}
                  style={{ fontSize: "1.05rem" }}
                  className={`
                    w-full py-3 rounded-full font-semibold transition-all duration-200 cursor-pointer
                    ${plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/30"
                      : "glass-chip text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
                    }
                  `}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust elements */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div
            className="glass relative rounded-[28px] overflow-hidden px-5 py-4"
          >
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {t.trust.map((text, i) => ({ icon: trustIcons[i], text })).map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="glass-chip w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium leading-snug pt-1" style={{ fontSize: "1.137rem" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <BookingModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default PricingSection;
