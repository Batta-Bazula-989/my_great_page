import { ChevronDown } from "lucide-react";
import type { MouseEvent } from "react";

export interface TocEntry {
  id: string; // id of the section's <h2>
  label: string;
}

interface TocListProps {
  entries: TocEntry[];
  activeId: string | null;
  onNavigate?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const TocList = ({ entries, activeId, onNavigate }: TocListProps) => (
  <ul className="space-y-0.5">
    {entries.map(({ id, label }) => {
      const active = id === activeId;
      return (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={active ? "true" : undefined}
            onClick={onNavigate}
            className={`-mx-2.5 block rounded-lg px-2.5 py-1.5 leading-snug transition-colors ${
              active ? "bg-secondary text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {label}
          </a>
        </li>
      );
    })}
  </ul>
);

interface TableOfContentsProps {
  title: string;
  entries: TocEntry[];
  activeId: string | null;
}

// Desktop: a sticky card beside the article. It stays clear of the floating nav (fixed, about 70px tall)
// and scrolls inside itself if a long table of contents would run past the bottom of the window.
export const TableOfContents = ({ title, entries, activeId }: TableOfContentsProps) => (
  <nav
    aria-label={title}
    className="glass sticky top-28 max-h-[calc(100dvh-8.5rem)] overflow-y-auto overscroll-contain rounded-2xl p-5 text-sm"
  >
    <p className="font-display font-semibold mb-3">{title}</p>
    <TocList entries={entries} activeId={activeId} />
  </nav>
);

// Phones and tablets: the same list, folded under the article header. Choosing a section folds it again.
export const TableOfContentsDisclosure = ({ title, entries, activeId }: TableOfContentsProps) => (
  <details className="group glass rounded-2xl lg:hidden">
    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 px-5 py-3 font-display font-semibold [&::-webkit-details-marker]:hidden">
      {title}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden />
    </summary>
    <nav aria-label={title} className="px-5 pb-4 text-[0.9375rem]">
      <TocList
        entries={entries}
        activeId={activeId}
        onNavigate={(e) => e.currentTarget.closest("details")?.removeAttribute("open")}
      />
    </nav>
  </details>
);
