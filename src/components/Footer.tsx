import type { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { CATEGORY_IDS, pagesInCategory } from "@/content";
import { useDict, useLocale } from "@/i18n";
import { localePath } from "@/i18n/config";

// Only one menu open at a time. `name` gives this natively in current browsers;
// the toggle handler covers browsers that don't support grouped <details> yet.
const closeOtherMenus = (e: SyntheticEvent<HTMLDetailsElement>) => {
  const opened = e.currentTarget;
  if (!opened.open) return;
  opened
    .closest("nav")
    ?.querySelectorAll<HTMLDetailsElement>("details[open]")
    .forEach((d) => d !== opened && (d.open = false));
};

const Footer = () => {
  const locale = useLocale();
  const t = useDict();

  return (
    <footer className="w-full border-t border-white/10">
      <nav aria-label={t.footer.resourcesNav} className="container px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-2">
          {CATEGORY_IDS.map((id) => (
            <details key={id} name="footer-resources" onToggle={closeOtherMenus} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 py-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-primary [&::-webkit-details-marker]:hidden">
                {t.categories[id].label}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden />
              </summary>
              <ul className="mt-2 space-y-2 pb-2">
                {pagesInCategory(locale, id).map((page) => (
                  <li key={page.key}>
                    <Link to={localePath(locale, page.slug)} className="text-sm text-foreground/70 hover:text-primary transition-colors">
                      {page.navLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </nav>

      <div className="border-t border-white/10 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-foreground/50">
          <span>© {new Date().getFullYear()} TascaLab</span>
          <span aria-hidden>·</span>
          <Link to={localePath(locale, "resources")} className="hover:text-primary transition-colors">{t.footer.allResources}</Link>
          <span aria-hidden>·</span>
          <a href={UPWORK_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t.footer.upworkReviews}</a>
          <span aria-hidden>·</span>
          <Link to="/privacy" className="hover:text-primary transition-colors">{t.footer.privacy}</Link>
          <span aria-hidden>·</span>
          <Link to="/terms" className="hover:text-primary transition-colors">{t.footer.terms}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
