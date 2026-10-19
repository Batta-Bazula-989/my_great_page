import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Globe } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { getSeoPage, pageByKey } from "@/content";
import type { Locale } from "@/content/types";
import { DEFAULT_LOCALE, LOCALES, localeFromPath, localeInfo, localePath } from "@/i18n/config";
import { useDict } from "@/i18n";

// Path of the page being viewed, in another language: same page if it has a translation,
// otherwise that language's homepage (e.g. Privacy and Terms are English only).
const useAlternatePath = () => {
  const { pathname } = useLocation();
  const current = localeFromPath(pathname);
  const segments = pathname.split("/").filter(Boolean);
  const rest = (current === DEFAULT_LOCALE ? segments : segments.slice(1)).join("/");

  return (target: Locale) => {
    if (rest === "") return localePath(target);
    if (rest === "resources") return localePath(target, "resources");
    const page = getSeoPage(current, rest);
    const translated = page && pageByKey(target, page.key);
    return translated ? localePath(target, translated.slug) : localePath(target);
  };
};

const LanguageLinks = ({ onPick, className }: { onPick: () => void; className?: string }) => {
  const { pathname } = useLocation();
  const current = localeFromPath(pathname);
  const alternatePath = useAlternatePath();

  return (
    <ul className={cn("grid grid-cols-2 gap-x-6 gap-y-1", className)}>
      {LOCALES.map(({ code, name }) => (
        <li key={code}>
          <Link
            to={alternatePath(code)}
            hrefLang={code}
            lang={code}
            onClick={onPick}
            aria-current={code === current ? "true" : undefined}
            className={cn(
              "block rounded-lg px-2 py-1.5 font-medium transition-colors hover:text-foreground",
              code === current ? "text-primary" : "text-muted-foreground",
            )}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const t = useDict();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        aria-label={t.nav.language}
        className="flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <Globe className="h-4 w-4" aria-hidden />
        {localeInfo(localeFromPath(pathname)).name}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={14} className="glass-nav w-72 rounded-2xl p-3">
        <LanguageLinks onPick={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

// Inline version for the mobile menu.
export const LanguageList = ({ onPick }: { onPick: () => void }) => {
  const t = useDict();
  return (
    <div>
      <p className="mb-2 flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
        <Globe className="h-3.5 w-3.5" aria-hidden />
        {t.nav.language}
      </p>
      <LanguageLinks onPick={onPick} className="-mx-2" />
    </div>
  );
};
