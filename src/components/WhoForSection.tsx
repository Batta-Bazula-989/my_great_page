import { Check, X } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

const WhoForSection = () => {
  const t = useDict().fit;
  return (
    <Section id="fit" eyebrow={t.eyebrow} title={t.title}>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        <Reveal className="h-full">
          <div className="glass glass-hover h-full p-7 md:p-8 rounded-[28px] hover:-translate-y-1">
            <h3 className="text-xl font-bold font-display mb-6 text-gradient">{t.goodTitle}</h3>
            <ul className="space-y-4">
              {t.good.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="h-full" delay={0.1}>
          <div className="glass glass-hover h-full p-7 md:p-8 rounded-[28px] hover:-translate-y-1">
            <h3 className="text-xl font-bold font-display mb-6 text-muted-foreground">{t.notTitle}</h3>
            <ul className="space-y-4">
              {t.not.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive/60 mt-0.5 shrink-0" aria-hidden />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default WhoForSection;
