import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calculator, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useDict, useLocale } from "@/i18n";
import { TOOL_ICONS, TOOL_IDS, toolPath, toolsPath } from "@/tools/registry";

const ToolLinks = ({ onPick }: { onPick: () => void }) => {
  const locale = useLocale();
  const t = useDict().tools;
  return (
    <ul className="space-y-1">
      {TOOL_IDS.map((id) => {
        const Icon = TOOL_ICONS[id];
        return (
          <li key={id}>
            <Link to={toolPath(locale, id)} onClick={onPick} className="flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/5">
              <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
              <span>
                <span className="block font-medium text-foreground">{t[id].navLabel}</span>
                <span className="block text-xs text-muted-foreground leading-snug mt-0.5">{t[id].short}</span>
              </span>
            </Link>
          </li>
        );
      })}
      <li>
        <Link to={toolsPath(locale)} onClick={onPick} className="flex items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-semibold text-primary hover:bg-white/5">
          {t.allTools}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </li>
    </ul>
  );
};

export const ToolsMenu = () => {
  const [open, setOpen] = useState(false);
  const t = useDict().tools;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors">
        <Calculator className="h-4 w-4 text-primary" aria-hidden />
        {t.menu}
        <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")} aria-hidden />
      </PopoverTrigger>
      <PopoverContent align="center" sideOffset={14} className="glass-nav w-80 rounded-2xl p-2">
        <ToolLinks onPick={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};

// Inline version for the mobile menu.
export const ToolsList = ({ onPick }: { onPick: () => void }) => {
  const t = useDict().tools;
  return (
    <div className="border-t border-white/10 pt-4">
      <p className="mb-2 flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
        <Calculator className="h-4 w-4 text-primary" aria-hidden />
        {t.menu}
      </p>
      <ToolLinks onPick={onPick} />
    </div>
  );
};
