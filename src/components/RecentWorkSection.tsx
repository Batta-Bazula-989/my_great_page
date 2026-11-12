import { MailCheck, Radar, Workflow, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const icons = [MailCheck, Radar, Workflow];

// Three recent builds in situation → change → result form. No client names, no invented numbers:
// the copy describes the work itself (see i18n recentWork).
const RecentWorkSection = () => {
  const t = useDict().recentWork;
  return (
    <Section id="recent-work" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {t.cases.map((c, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={c.title} className="h-full" delay={i * 0.08}>
              <article className="glass glass-hover h-full rounded-[24px] p-7 flex flex-col hover:-translate-y-1">
                <div className="glass-chip mb-5 flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold leading-snug">{c.title}</h3>
                <dl className="mt-4 flex flex-1 flex-col gap-4">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.situationLabel}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/80">{c.situation}</dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden />
                      {t.changeLabel}
                    </dt>
                    <dd className="mt-1 leading-relaxed text-foreground/80">{c.change}</dd>
                  </div>
                  <div className="mt-auto border-t border-border pt-4">
                    <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" aria-hidden />
                      {t.resultLabel}
                    </dt>
                    <dd className="mt-1 font-semibold leading-relaxed text-foreground">{c.result}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default RecentWorkSection;
