import { Briefcase, Shield, BookOpen, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const icons = [Briefcase, Shield, BookOpen, MessageCircle];

// The person behind the work: name and role above the four promises. The portrait
// is intentionally left out for now; the layout works without an image.
const WhyMeSection = () => {
  const t = useDict().whyMe;
  return (
    <Section id="why-me" eyebrow={t.eyebrow} title={t.title}>
      <Reveal className="glass-panel max-w-5xl mx-auto rounded-[32px] p-5 sm:p-8 md:p-10">
        <div className="flex items-center gap-4 border-b border-border pb-6">
          <span
            className="glass-chip flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-base font-bold text-primary"
            aria-hidden
          >
            RZ
          </span>
          <div>
            <span className="block font-display text-xl font-bold">Roman Zakharenko</span>
            <span className="mt-0.5 block text-muted-foreground">{t.role}</span>
          </div>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <li key={item.title} className="flex gap-4 pt-6">
                <span className="glass-chip flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5 text-primary" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
};

export default WhyMeSection;
