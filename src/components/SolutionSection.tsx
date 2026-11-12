import { BarChart3, Bot, Filter, GitBranch, Wrench, Cable } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { useDict } from "@/i18n";

const supportIcons = [Bot, GitBranch, BarChart3, Wrench];

// Three groups, each written from the buyer's problem: lead automation and CRM integration
// as wide feature cards, then the four support-automation items underneath.
const SolutionSection = () => {
  const t = useDict().services;
  const featured = [
    { icon: Filter, ...t.groups.lead },
    { icon: Cable, ...t.groups.crm },
  ];
  return (
    <Section id="services" eyebrow={t.eyebrow} title={t.title}>
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="h-full">
              <article className="glass glass-hover h-full rounded-[24px] p-7 hover:-translate-y-1">
                <div className="glass-chip mb-4 flex h-11 w-11 items-center justify-center rounded-xl">
                  <group.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold">{group.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">{group.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="mb-5 flex items-center gap-4">
            <h3 className="font-display text-xl font-bold">{t.groups.support.title}</h3>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>
          <p className="mb-5 max-w-2xl text-muted-foreground leading-relaxed">{t.groups.support.description}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <ServiceCard {...item} icon={supportIcons[i]} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
