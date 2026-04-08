import { useCallback, useState } from "react";
import { Briefcase, Shield, BookOpen, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "./ServiceCard";

const items = [
  {
    icon: Briefcase,
    title: "I've worked in support — not just around it",
    description:
      "I've handled tickets, built reports manually, and dealt with workflows held together with copy-paste and wishful thinking. I know what actually slows teams down because I've been on that side of it.",
  },
  {
    icon: Shield,
    title: "Built to hold up, not to demo well",
    description:
      "Every automation includes error handling, edge case testing, and monitoring. If something unexpected happens, it fails gracefully and alerts the right person — it doesn't just silently break.",
  },
  {
    icon: BookOpen,
    title: "You own everything when we're done",
    description:
      "Full documentation. Clear handover. No proprietary tooling that only I can access. Your team can maintain and extend what I build without needing to call me.",
  },
  {
    icon: MessageCircle,
    title: "Straight communication, always",
    description:
      "I'll tell you if something isn't worth automating. I'll tell you if your budget doesn't fit the scope. I won't nod and invoice you for something that won't move the needle.",
  },
];

const WhyMeSection = () => {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  const getPosition = (index: number) => {
    let diff = index - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section id="why-me" className="w-full py-[3.2rem] md:py-[4.8rem] bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-6">
          <span className="text-primary font-bold uppercase tracking-wider" style={{ fontSize: "2.6rem", letterSpacing: "0.2em" }}>
            Why Work With Me
          </span>
        </div>

        <div className="relative flex items-center justify-center h-[380px] md:h-[420px] overflow-hidden">
          {items.map((item, i) => {
            const pos = getPosition(i);
            const isActive = pos === 0;
            const isVisible = Math.abs(pos) <= 2;

            if (!isVisible) return null;

            const translateX = pos * 55;
            const scale = isActive ? 1 : 0.85 - Math.abs(pos) * 0.05;
            const zIndex = 20 - Math.abs(pos) * 10;
            const blur = isActive ? 0 : Math.abs(pos) * 2;

            return (
              <div
                key={i}
                className="absolute w-[340px] md:w-[480px]"
                style={{
                  transform: `translateX(${translateX}%) scale(${scale})`,
                  zIndex,
                  filter: `blur(${blur}px)`,
                  transition: "all 0.7s cubic-bezier(0.32, 0.72, 0, 1)",
                  willChange: "transform, filter",
                }}
              >
                <ServiceCard {...item} />
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
          {items.map((_, i) => (
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

export default WhyMeSection;
