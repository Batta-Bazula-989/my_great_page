import { useEffect, useState, type ReactNode } from "react";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";

// Solid ring-colored focus indicator (≥ 3:1 against the panel in both themes).
const inputClass =
  "w-full min-w-0 rounded-xl border border-input bg-background px-3 py-2.5 text-foreground outline-none transition focus:border-ring focus:ring-1 focus:ring-ring";

// Links in the calculators: indigo with a visible underline at rest, full-strength underline on hover.
export const linkClass = "text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary";

export const Field = ({ label, htmlFor, children, hint }: { label: string; htmlFor: string; children: ReactNode; hint?: ReactNode }) => (
  <div className="min-w-0">
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground/85 mb-1.5">
      {label}
    </label>
    {children}
    {hint && <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{hint}</p>}
  </div>
);

export const NumberInput = ({
  id,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  suffix,
}: {
  id: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
}) => {
  const common = useDict().tools.common;
  const { dateLocale } = localeInfo(useLocale());
  const clamp = (n: number) => Math.max(min, max !== undefined ? Math.min(max, n) : n);
  const parse = (s: string) => {
    const n = parseFloat(s);
    return Number.isFinite(n) ? clamp(n) : min;
  };

  // Keep what the visitor typed ("0.", "") while passing on every valid number.
  const [text, setText] = useState(String(value));
  useEffect(() => {
    setText((current) => (parse(current) === value ? current : String(value)));
    // parse only depends on min/max, which never change for a mounted field
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // Say so when the typed number is outside the range; the field snaps to the limit on blur.
  const typed = parseFloat(text);
  const limit = !Number.isFinite(typed) ? null : max !== undefined && typed > max ? "max" : typed < min ? "min" : null;
  const limitId = `${id}-limit`;

  return (
    <div className="min-w-0">
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={text}
          min={min}
          max={max}
          step={step}
          aria-describedby={limit ? limitId : undefined}
          onChange={(e) => {
            setText(e.target.value);
            onChange(parse(e.target.value));
          }}
          onBlur={() => setText(String(parse(text)))}
          className={`${inputClass} ${suffix ? "pr-14" : ""}`}
        />
        {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{suffix}</span>}
      </div>
      <p id={limitId} aria-live="polite" className="text-xs text-muted-foreground">
        {limit && (
          <span className="mt-1.5 block">{format(common[limit], { value: (limit === "max" ? max! : min).toLocaleString(dateLocale) })}</span>
        )}
      </p>
    </div>
  );
};

export const RangeInput = ({
  id,
  value,
  onChange,
  min,
  max,
  step = 1,
  display,
}: {
  id: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  display: string;
}) => (
  <div className="flex items-center gap-4">
    <input
      id={id}
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(e.target.valueAsNumber)}
      className="min-w-0 flex-1 rounded-full accent-[hsl(var(--primary))] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    />
    <output htmlFor={id} className="w-16 shrink-0 text-right font-display font-semibold tabular-nums">
      {display}
    </output>
  </div>
);

export const Select = <T extends string>({
  id,
  value,
  onChange,
  options,
}: {
  id: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
}) => (
  <select id={id} value={value} onChange={(e) => onChange(e.target.value as T)} className={`${inputClass} appearance-auto`}>
    {options.map((o) => (
      <option key={o.value} value={o.value} className="bg-background">
        {o.label}
      </option>
    ))}
  </select>
);

export const TextInput = ({ id, type, value, onChange }: { id: string; type: string; value: string; onChange: (v: string) => void }) => (
  <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
);

export const Panel = ({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) => (
  <div className={`glass min-w-0 rounded-[24px] p-5 md:p-6 ${className}`}>
    {title && <h2 className="font-display text-lg font-bold mb-4">{title}</h2>}
    {children}
  </div>
);
