import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, CalendarClock, ChevronDown, Receipt, Stethoscope } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict, useLocale } from "@/i18n";
import en from "@/i18n/en";
import { PACKAGES, packagePrice, type PackageId } from "@/lib/pricing";
import { toolPath } from "@/tools/registry";
import { cn } from "@/lib/utils";

// Packages grouped by the job they do, cheapest first within each group.
const GROUPS: { key: "chat" | "tickets" | "custom"; ids: PackageId[]; span: string; cols: string }[] = [
  { key: "chat", ids: ["starter", "standard", "voice"], span: "lg:col-span-3", cols: "md:grid-cols-2 lg:grid-cols-3" },
  { key: "tickets", ids: ["reports", "routing"], span: "md:col-span-2", cols: "md:grid-cols-2" },
  { key: "custom", ids: ["custom"], span: "md:col-span-2 lg:col-span-1", cols: "md:grid-cols-2 lg:grid-cols-1" },
];

const PricingSection = () => {
  const dict = useDict();
  const t = dict.pricing;
  const locale = useLocale();
  // One switch for every card, so running costs can be compared side by side and rows stay even.
  const [showRunning, setShowRunning] = useState(false);

  const planIndex = (id: PackageId) => PACKAGES.findIndex((p) => p.id === id);

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

      <div className="max-w-6xl mx-auto mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <button
          type="button"
          onClick={() => setShowRunning((v) => !v)}
          aria-expanded={showRunning}
          className="glass-chip inline-flex min-h-11 items-center gap-2 self-start rounded-full px-5 py-2 text-sm font-semibold text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
        >
          <Receipt className="w-4 h-4 text-primary" aria-hidden />
          {showRunning ? t.hideRunning : t.showRunning}
          <ChevronDown className={cn("w-4 h-4 transition-transform", showRunning && "rotate-180")} aria-hidden />
        </button>
        <p className="text-sm text-muted-foreground">
          {t.estimate}{" "}
          <Link to={toolPath(locale, "aiAgent")} className="font-medium text-primary underline-offset-4 hover:underline">
            {dict.tools.aiAgent.navLabel}
          </Link>
          <span aria-hidden> · </span>
          <Link to={toolPath(locale, "whatsapp")} className="font-medium text-primary underline-offset-4 hover:underline">
            {dict.tools.whatsapp.navLabel}
          </Link>
        </p>
      </div>
      {showRunning && <p className="max-w-6xl mx-auto -mt-4 mb-8 text-sm text-muted-foreground">{t.runningNote}</p>}

      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {GROUPS.map((group) => (
          <div key={group.key} className={group.span}>
            <h3 className="mb-4 flex items-center gap-4 font-display text-lg font-semibold text-foreground/90">
              {t.groups[group.key]}
              <span className="h-px flex-1 bg-white/10" aria-hidden />
            </h3>
            <div className={cn("grid grid-cols-1 gap-6", group.cols)}>
              {group.ids.map((id, i) => {
                const index = planIndex(id);
                const plan = t.plans[index];
                return (
                  <Reveal key={id} delay={i * 0.06} className="h-full">
                    <article className="glass glass-hover h-full rounded-[28px] p-7 flex flex-col hover:-translate-y-1.5">
                      <h4 className="font-bold font-display text-foreground text-xl">{plan.name}</h4>
                      <p className="text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>

                      <div className="mt-5">
                        <div className="font-bold font-display text-primary leading-none text-4xl tabular-nums">
                          {packagePrice(locale, id)}
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
                          <li key={item} className="flex items-start gap-2.5 text-foreground/85 leading-relaxed">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-1" aria-hidden />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {showRunning && (
                        <div className="mt-5 border-t border-white/10 pt-4 animate-in fade-in">
                          <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground/90">
                            <Receipt className="w-4 h-4 text-primary" aria-hidden />
                            {t.running}
                          </p>
                          <ul className="mt-2 space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-4 marker:text-primary/70">
                            {plan.running.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <BookingButton
                        variant="package"
                        className="mt-6 h-auto min-h-12 w-full rounded-full px-5 py-3 whitespace-normal text-center"
                        topic={{ lead: en.pricing.plans[index].name, label: `${plan.name} · ${packagePrice(locale, id)}` }}
                      >
                        {t.cta}
                      </BookingButton>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {showRunning && <p className="max-w-6xl mx-auto mt-8 text-sm text-muted-foreground leading-relaxed">{t.footnote}</p>}
      <p className="max-w-6xl mx-auto mt-8 text-center text-foreground/80">{t.allPackages}</p>
    </Section>
  );
};

export default PricingSection;
