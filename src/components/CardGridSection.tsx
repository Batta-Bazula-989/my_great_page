import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceCard from "./ServiceCard";

interface CardGridSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  items: { title: string; description: string; icon: LucideIcon }[];
}

// A section heading over a grid of short cards, all visible at once.
const CardGridSection = ({ id, eyebrow, title, items }: CardGridSectionProps) => (
  <Section id={id} eyebrow={eyebrow} title={title}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.06}>
          <ServiceCard {...item} />
        </Reveal>
      ))}
    </div>
  </Section>
);

export default CardGridSection;
