import { useState, useEffect, useCallback } from "react";
import { BarChart3, Bot, GitBranch, Wrench, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { format, useDict } from "@/i18n";

const icons = [Bot, GitBranch, BarChart3, Wrench];

const ServicesCarousel = () => {
  const t = useDict().services;
  const services = t.items.map((item, i) => ({ ...item, icon: icons[i] }));
  const [current, setCurrent] = useState(0);
  const total = services.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  // Removed auto-play - cards only move when user clicks arrows or dots

  // Calculate position for each card relative to current
  const getPosition = (index: number) => {
    let diff = index - current;
    // Wrap around for circular effect
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div className="w-full py-[3.2rem] md:py-[4.8rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 id="services-title" className="section-title">{t.title}</h2>
        </div>

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
            aria-label={t.previous}
            className="glass absolute left-2 md:left-8 z-30 w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:bg-white/10 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label={t.next}
            className="glass absolute right-2 md:right-8 z-30 w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:bg-white/10 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={format(t.show, { title: services[i].title })}
              className="h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{
                width: i === current ? "2rem" : "0.625rem",
                backgroundColor: i === current ? "hsl(var(--primary))" : "hsl(var(--muted-foreground) / 0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;