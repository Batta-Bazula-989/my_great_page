import { Check, Building2, ServerCog } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const optionIcons = [Building2, ServerCog];

const DataSection = () => {
  const t = useDict().data;
  return (
    <Section id="data" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {t.options.map((option, i) => {
          const Icon = optionIcons[i];
          return (
            <Reveal key={option.title} className="h-full" delay={i * 0.1}>
              <div className="glass glass-hover h-full p-7 md:p-8 rounded-[28px] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="glass-chip w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold font-display">{option.title}</h3>
                </div>
                <ul className="space-y-4">
                  {option.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                      <span className="text-foreground/90 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>

      <p className="max-w-4xl mx-auto mt-6 text-center text-sm text-muted-foreground">{t.note}</p>
    </Section>
  );
};

export default DataSection;
