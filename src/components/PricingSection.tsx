import { Check, CalendarClock, Stethoscope } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict, useLocale } from "@/i18n";
import en from "@/i18n/en";
import { PACKAGES, packagePrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const t = useDict().pricing;
  const locale = useLocale();

  return (
    <Section id="pricing" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <Reveal className="glass-panel max-w-6xl mx-auto mb-10 rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
        <div className="glass-chip w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">
          <Stethoscope className="w-7 h-7 text-primary" aria-hidden />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl font-bold">{t.healthCheck.title}</h3>
          <p className="text-foreground/80 mt-2 leading-relaxed max-w-[60ch] text-pretty">{t.healthCheck.text}</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
          <span className="font-display text-3xl font-bold text-primary">{t.healthCheck.price}</span>
          {/* The lead notification always carries the English name. */}
          <BookingButton
            variant="hero"
            size="lg"
            className="rounded-full whitespace-normal text-center"
            topic={{ lead: en.pricing.healthCheck.title }}
          >
            {t.healthCheck.cta}
          </BookingButton>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        {PACKAGES.map(({ id }, index) => {
          const plan = t.plans[index];
          const price = packagePrice(locale, id);
          return (
            <Reveal key={id} delay={index * 0.06} className="h-full">
              <article className="glass glass-hover h-full rounded-[28px] p-7 flex flex-col hover:-translate-y-1.5">
                <h3 className="font-bold font-display text-foreground text-xl">{plan.name}</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>

                <div className="mt-5">
                  <div
                    className={cn(
                      "font-bold font-display text-primary",
                      price ? "leading-none text-4xl tabular-nums" : "leading-snug text-xl text-balance",
                    )}
                  >
                    {price ?? t.noPrice}
                  </div>
                  <p className="mt-2 flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground">
                    <span>{t.oneTimeFee}</span>
                    <span aria-hidden>·</span>
                    <CalendarClock className="w-3.5 h-3.5 text-primary" aria-hidden />
                    <span>{plan.delivery}</span>
                  </p>
                </div>

                <ul aria-label={t.included} className="mt-5 space-y-2.5 flex-1">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-foreground/85 leading-relaxed">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <BookingButton
                  variant="package"
                  className="mt-6 h-auto min-h-12 w-full rounded-full px-5 py-3 whitespace-normal text-center"
                  topic={{ lead: en.pricing.plans[index].name, label: price ? `${plan.name} · ${price}` : plan.name }}
                >
                  {t.cta}
                </BookingButton>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="max-w-6xl mx-auto mt-8 text-center text-foreground/80">{t.allPackages}</p>
    </Section>
  );
};

export default PricingSection;
