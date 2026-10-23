import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";

// The path from first call to live automation, drawn as one aqua line through five stops
// (vertical on phones, horizontal from 1024px). The first stop, the free Health Check, is lit.
const ProcessSection = () => {
  const t = useDict().process;
  return (
    <Section id="how-it-works" eyebrow={t.eyebrow} title={t.title}>
      <Reveal className="max-w-6xl mx-auto">
        <ol
          className="relative grid gap-7 lg:grid-cols-5 lg:gap-6 before:absolute before:left-5 before:top-5 before:bottom-5 before:w-px before:bg-gradient-to-b before:from-primary/60 before:to-primary/10 lg:before:left-[10%] lg:before:right-[10%] lg:before:bottom-auto lg:before:h-px lg:before:w-auto lg:before:bg-gradient-to-r"
        >
          {t.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] content-start items-start gap-4 lg:grid-cols-1 lg:justify-items-center lg:gap-4 lg:text-center"
            >
              <span
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-display font-bold tabular-nums ${
                  i === 0
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/40 bg-background text-primary"
                }`}
                aria-hidden
              >
                {i + 1}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <h3 className="font-display text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-muted-foreground leading-relaxed text-pretty lg:max-w-[15rem]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
};

export default ProcessSection;
