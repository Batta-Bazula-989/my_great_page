import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

// The path from first call to live automation: five steps under large violet-to-cyan numerals.
const ProcessSection = () => {
  const t = useDict().process;
  return (
    <Section id="how-it-works" eyebrow={t.eyebrow} title={t.title} intro={t.intro}>
      <Reveal className="max-w-6xl mx-auto">
        <ol className="grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-5">
          {t.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] content-start items-start gap-4 lg:grid-cols-1 lg:gap-2 lg:text-center lg:justify-items-center"
            >
              <span
                className="text-gradient font-display text-5xl font-bold leading-none tabular-nums lg:text-6xl"
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="pt-1 lg:pt-2">
                <h3 className="font-display text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-muted-foreground leading-relaxed text-pretty lg:max-w-[15rem]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
};

export default ProcessSection;
