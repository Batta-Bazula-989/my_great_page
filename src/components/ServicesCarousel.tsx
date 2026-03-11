import { useState, useEffect, useCallback } from "react";
import { BarChart3, Bot, GitBranch, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Turn manual reporting into automated delivery. Your team's current reports — metrics, summaries, tracking — get generated and sent to the right people automatically. No more pulling data and formatting updates.",
  },
  {
    icon: Bot,
    title: "Support chat & voice bots",
    description:
      "Bots that triage and route incoming requests in chat and on the phone. They handle the first layer and hand off cleanly — not replace your team.",
  },
  {
    icon: GitBranch,
    title: "Ticket routing & categorization",
    description:
      "Auto-assign tickets, apply tags, and set priority based on content — so every ticket lands in the right queue with the right owner from the start.",
  },
  {
    icon: Wrench,
    title: "Custom solution",
    description:
      "Have a specific automation need or idea that doesn't exist anywhere? I build custom solutions tailored to your exact situation — whether it's a unique way to handle tickets, connect tools, or automate something completely specific to your team.",
  },
];

const ServicesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = services.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Calculate position for each card relative to current
  const getPosition = (index: number) => {
    let diff = index - current;
    // Wrap around for circular effect
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 leading-tight text-center">
          Practical support automation<br />built on your existing tools.
        </h2>

        <div className="relative flex items-center justify-center h-[380px] md:h-[420px] overflow-hidden">
          {services.map((service, i) => {
            const pos = getPosition(i);
            const isActive = pos === 0;
            const isVisible = Math.abs(pos) <= 2;

            if (!isVisible) return null;

            const translateX = pos * 55;
            const scale = isActive ? 1 : 0.85 - Math.abs(pos) * 0.05;
            const opacity = 1; // Keep all cards fully opaque
            const zIndex = 20 - Math.abs(pos) * 10;
            const blur = isActive ? 0 : Math.abs(pos) * 2;

            return (
              <div
                key={i}
                className="absolute w-[340px] md:w-[480px]"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  transition: "all 0.7s cubic-bezier(0.32, 0.72, 0, 1)",
                  willChange: "transform, opacity, filter",
                }}
              >
                <ServiceCard {...service} />
              </div>
            );
          })}

          <button
            onClick={prev}
            className="absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{
                width: i === current ? "2rem" : "0.625rem",
                backgroundColor: i === current ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;