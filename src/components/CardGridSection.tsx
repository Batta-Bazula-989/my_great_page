import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface CardGridSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  items: { title: string; description: string; icon: LucideIcon }[];
}

// A section heading over a grid of short cards, all visible at once.
const CardGridSection = ({ id, eyebrow, title, items }: CardGridSectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className="py-16 md:py-20 relative">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container px-4 relative z-10">
      <div className="text-center mb-10">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.06 }}
          >
            <ServiceCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CardGridSection;
