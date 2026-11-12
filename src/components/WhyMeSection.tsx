import { Briefcase, Shield, BookOpen, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { useDict } from "@/i18n";
import portrait from "@/assets/roman-portrait.jpg";
import portrait280 from "@/assets/roman-portrait-280.webp";
import portrait560 from "@/assets/roman-portrait-560.webp";

const icons = [Briefcase, Shield, BookOpen, MessageCircle];

// The person behind the work: portrait, name and role beside the four promises.
const WhyMeSection = () => {
  const t = useDict().whyMe;
  return (
    <Section id="why-me" eyebrow={t.eyebrow} title={t.title}>
      <Reveal className="glass-panel max-w-5xl mx-auto rounded-[32px] p-5 sm:p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-12 items-center">
          <figure className="mx-auto w-full max-w-[17rem]">
            {/* WebP at 1x and 2x of the 17rem frame (about 10 KB and 34 KB); the JPEG is the fallback */}
            <picture className="block">
              <source type="image/webp" srcSet={`${portrait280} 280w, ${portrait560} 560w`} sizes="17rem" />
              <img
                src={portrait}
                alt="Roman Zakharenko"
                width={560}
                height={700}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-[24px] border border-border object-cover"
              />
            </picture>
            <figcaption className="mt-4 text-center md:text-left">
              <span className="block font-display text-xl font-bold">Roman Zakharenko</span>
              <span className="mt-0.5 block text-muted-foreground">{t.role}</span>
            </figcaption>
          </figure>

          <ul className="divide-y divide-border">
            {t.items.map((item, i) => {
              const Icon = icons[i];
              return (
                <li key={item.title} className="flex gap-4 py-5 first:pt-0 last:pb-0">
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
        </div>
      </Reveal>
    </Section>
  );
};

export default WhyMeSection;
