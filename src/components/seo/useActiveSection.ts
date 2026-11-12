import { useEffect, useState } from "react";

// Where the reading line sits: just below the floating nav, matching the sticky table of contents (top-28).
const READING_LINE = 112;

// Scroll-spy for the table of contents: the id of the first listed section that crosses the band between
// the reading line and 45% of the window. Runs only in the browser (effect), so the pre-rendered HTML
// and the first client render agree: nothing is marked until the reader scrolls into the article.
export const useActiveSection = (ids: string[]) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const key = ids.join("\n");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = key
      .split("\n")
      .map((id) => ({ id, el: document.getElementById(id)?.closest("section") }))
      .filter((s): s is { id: string; el: HTMLElement } => Boolean(s.el));
    if (sections.length === 0) return;

    const inBand = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target);
          else inBand.delete(entry.target);
        }
        // Between sections, after a jump, or past the last one (sources, read next): the last section
        // whose start the reader has scrolled past. Above the first section nothing is current yet.
        const passed = sections.filter((s) => s.el.getBoundingClientRect().top <= READING_LINE);
        const current = sections.find((s) => inBand.has(s.el)) ?? passed[passed.length - 1];
        setActiveId(current?.id ?? null);
      },
      { rootMargin: `-${READING_LINE}px 0px -55% 0px` },
    );
    for (const s of sections) observer.observe(s.el);
    return () => observer.disconnect();
  }, [key]);

  return activeId;
};
