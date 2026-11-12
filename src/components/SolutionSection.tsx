import { Bot, Cable, Filter } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const icons = [Filter, Cable, Bot];

// Three cards, each written from the buyer's problem: lead automation,
// CRM integration & automation, and support automation as one card.
const SolutionSection = () => {
  const t = useDict().services;
  return (
    <Section id="services" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid gap-5 md:grid-cols-3 max-w-6xl mx-auto">
        {t.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <article className="glass glass-hover h-full rounded-[24px] p-7 hover:-translate-y-1">
                <div className="glass-chip mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default SolutionSection;
