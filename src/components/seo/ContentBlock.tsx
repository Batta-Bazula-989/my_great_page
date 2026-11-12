import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Info } from "lucide-react";
import type { Block } from "@/content/types";
import { MEASURE } from "./measure";

type TableBlock = Extract<Block, { type: "table" }>;

// Edge fades for a table wider than its box (phones): the text fades out at whichever side has more
// columns, so the cut-off column reads as "scroll for more". Measured after hydration only, so the
// pre-rendered HTML and the first client render match; a table that fits gets no fade.
const FADE = "2.5rem";
type Fade = "start" | "end" | "both";
const fades: Record<Fade, string> = {
  end: `linear-gradient(to right, #000 calc(100% - ${FADE}), transparent)`,
  start: `linear-gradient(to left, #000 calc(100% - ${FADE}), transparent)`,
  both: `linear-gradient(to right, transparent, #000 ${FADE}, #000 calc(100% - ${FADE}), transparent)`,
};

const ScrollTable = ({ block, nested }: { block: TableBlock; nested: boolean }) => {
  const scroller = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState<Fade | null>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      const start = el.scrollLeft > 1;
      const end = el.scrollLeft < max - 1;
      setFade(start && end ? "both" : end ? "end" : start ? "start" : null);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const resize = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(update);
    resize?.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      resize?.disconnect();
    };
  }, []);

  const mask: CSSProperties | undefined = fade ? { maskImage: fades[fade], WebkitMaskImage: fades[fade] } : undefined;

  return (
    // The card stays whole; only the scrolling content inside it fades. Tables run wider than the text measure.
    <div className={`${nested ? "border border-border" : "glass"} rounded-2xl overflow-hidden`}>
      <div
        ref={scroller}
        className="overflow-x-auto focus-visible:[outline-offset:-2px]"
        style={mask}
        // Focusable so keyboard users can scroll it
        tabIndex={0}
        role="region"
        aria-label={block.caption ?? block.head.join(", ")}
      >
        <table className="w-full min-w-[520px] text-sm text-left">
          {block.caption && <caption className="px-4 pt-4 text-left text-muted-foreground">{block.caption}</caption>}
          <thead>
            <tr className="border-b border-border">
              {block.head.map((cell) => (
                <th key={cell} scope="col" className="px-4 py-3 font-semibold text-foreground">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className="border-b border-border/60 last:border-0 align-top">
                {row.map((cell, j) => (
                  <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : "text-foreground/75"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// One block of article text. `nested` drops the card shadow from tables inside a panel (no card in a card).
const ContentBlock = ({ block, nested = false }: { block: Block; nested?: boolean }) => {
  switch (block.type) {
    case "p":
      return <p className={`${MEASURE} text-foreground/80 leading-relaxed text-pretty`}>{block.text}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List
          className={`${MEASURE} space-y-2 pl-5 text-foreground/80 leading-relaxed ${block.type === "ul" ? "list-disc" : "list-decimal"} marker:text-primary`}
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </List>
      );
    }
    case "table":
      return <ScrollTable block={block} nested={nested} />;
    case "note":
      // The box is as wide as the text measure plus its icon and padding, so its text lines up with the prose.
      return (
        <div className="glass-chip max-w-[37em] rounded-2xl p-4 flex gap-3 text-foreground/85">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
          <p className="leading-relaxed text-pretty">{block.text}</p>
        </div>
      );
  }
};

export default ContentBlock;
