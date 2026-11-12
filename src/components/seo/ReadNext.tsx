import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface ReadNextLink {
  to: string;
  title: string;
  meta: string; // category of an article, or "free tool" for a calculator
}

// Every internal link the article recommends (its related articles and the per-section "read next" links),
// gathered once after the article instead of interrupting it.
const ReadNext = ({ title, links }: { title: string; links: ReadNextLink[] }) => {
  if (links.length === 0) return null;
  return (
    <section aria-labelledby="read-next">
      <h2 id="read-next" className="font-display text-xl md:text-2xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <ul className="glass rounded-[24px] divide-y divide-border overflow-hidden">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-secondary/60 focus-visible:[outline-offset:-2px] md:px-6"
            >
              <span className="min-w-0">
                <span className="block font-display font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {link.title}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{link.meta}</span>
              </span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadNext;
