import type { ComponentProps, ReactNode } from "react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceCard from "./ServiceCard";

interface CardGridSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  items: ComponentProps<typeof ServiceCard>[];
  children?: ReactNode; // shown under the grid
}

// A section heading over a grid of short cards, all visible at once.
const CardGridSection = ({ id, eyebrow, title, items, children }: CardGridSectionProps) => (
  <Section id={id} eyebrow={eyebrow} title={title}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <ServiceCard {...item} />
        </Reveal>
      ))}
    </div>
    {children}
  </Section>
);

export default CardGridSection;
