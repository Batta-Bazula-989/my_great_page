import { useEffect, useState, type ReactNode } from "react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-foreground outline-none transition focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

export const Field = ({ label, htmlFor, children, hint }: { label: string; htmlFor: string; children: ReactNode; hint?: ReactNode }) => (
  <div>
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
  // Keep what the visitor typed ("0.", "") while passing on every valid number.
  const [text, setText] = useState(String(value));
  useEffect(() => {
    setText((current) => (Number(current) === value ? current : String(value)));
  }, [value]);
  const clamp = (n: number) => Math.max(min, max !== undefined ? Math.min(max, n) : n);

  return (
    <div className="relative">
      <input
        id={id}
        type="number"
        inputMode="decimal"
        value={text}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          setText(e.target.value);
          const n = parseFloat(e.target.value);
          onChange(Number.isFinite(n) ? clamp(n) : min);
        }}
        onBlur={() => setText(String(clamp(Number(text) || min)))}
        className={`${inputClass} ${suffix ? "pr-14" : ""}`}
      />
      {suffix && <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{suffix}</span>}
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
      className="flex-1 accent-[hsl(var(--primary))]"
    />
    <output htmlFor={id} className="w-16 text-right font-display font-semibold tabular-nums">
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
  <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputClass} [color-scheme:dark]`} />
);

export const Panel = ({ title, children, className = "" }: { title?: string; children: ReactNode; className?: string }) => (
  <div className={`glass rounded-[24px] p-5 md:p-6 ${className}`}>
    {title && <h2 className="font-display text-lg font-bold mb-4">{title}</h2>}
    {children}
  </div>
);
