import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { keepShortWords } from "@/lib/typography";
import { useLocale } from "@/i18n";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

// A homepage section: fading aqua hairline on top, then the shared header (label, title, optional lead).
// Same rhythm everywhere: 64px apart on mobile, 80px from 768px, 40–48px between header and content.
const Section = ({ id, eyebrow, title, intro, children, className }: SectionProps) => {
  const locale = useLocale();
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("relative py-16 md:py-20", className)}>
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden
      />
      <div className="container px-4 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`} className="section-title">
            {keepShortWords(title, locale)}
          </h2>
          {intro && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4 text-pretty">
              {keepShortWords(intro, locale)}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
