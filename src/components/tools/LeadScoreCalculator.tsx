import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Copy, Plus, X } from "lucide-react";
import { Panel, Select } from "./fields";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";
import {
  DEFAULT_LIMIT,
  DEFAULT_THRESHOLDS,
  MAX_CRITERIA,
  SCORE_LIMITS,
  band,
  checks,
  combinedLabel,
  modelTsv,
  scoreRange,
  scoreValue,
  type Band,
  type Criterion,
  type ScoreId,
  type ScoreSettings,
} from "@/tools/leadScore";

const SCORES: ScoreId[] = ["fit", "engagement"];

const inputClass =
  "w-full min-w-0 rounded-xl border border-input bg-background px-3 py-2 text-foreground outline-none transition focus:border-ring focus:ring-1 focus:ring-ring";

const bandClass: Record<Band, string> = {
  high: "bg-primary text-primary-foreground",
  medium: "bg-secondary text-secondary-foreground",
  low: "bg-muted text-muted-foreground",
};

// Points can be negative, and "-" alone is a normal step while typing, so it counts as 0 until a number follows.
const PointsInput = ({ id, value, onChange, label }: { id: string; value: number; onChange: (v: number) => void; label: string }) => {
  const [text, setText] = useState(String(value));
  return (
    <input
      id={id}
      type="number"
      inputMode="numeric"
      aria-label={label}
      value={text}
      min={-10000}
      max={10000}
      step={1}
      onChange={(e) => {
        setText(e.target.value);
        const n = parseFloat(e.target.value);
        onChange(Number.isFinite(n) ? Math.max(-10000, Math.min(10000, n)) : 0);
      }}
      onBlur={() => setText(String(Number.isFinite(parseFloat(text)) ? Math.max(-10000, Math.min(10000, parseFloat(text))) : 0))}
      className={`${inputClass} text-right tabular-nums`}
    />
  );
};

const ThresholdInput = ({ id, value, onChange, label }: { id: string; value: number; onChange: (v: number) => void; label: string }) => (
  <label htmlFor={id} className="block min-w-0">
    <span className="block text-sm font-medium text-foreground/85 mb-1.5">{label}</span>
    <PointsInput id={id} value={value} onChange={onChange} label={label} />
  </label>
);

const LeadScoreCalculator = () => {
  const t = useDict().tools.leadScore;
  const { dateLocale } = localeInfo(useLocale());
  const num = (n: number) => n.toLocaleString(dateLocale);

  const [criteria, setCriteria] = useState<Criterion[]>(() =>
    t.examples.map((e, i) => ({ id: i + 1, label: e.label, score: e.score as ScoreId, points: e.points, applies: e.applies })),
  );
  const [nextId, setNextId] = useState(t.examples.length + 1);
  const [settings, setSettings] = useState<Record<ScoreId, ScoreSettings>>({
    fit: { limit: DEFAULT_LIMIT, ...DEFAULT_THRESHOLDS },
    engagement: { limit: DEFAULT_LIMIT, ...DEFAULT_THRESHOLDS },
  });
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const update = (id: number, patch: Partial<Criterion>) => {
    setCriteria((list) => list.map((c) => (c.id === id ? { ...c, ...patch } : c)));
    setCopyState("idle");
  };
  const setScore = (score: ScoreId, patch: Partial<ScoreSettings>) => {
    setSettings((s) => ({ ...s, [score]: { ...s[score], ...patch } }));
    setCopyState("idle");
  };

  const result = useMemo(() => {
    const value = (s: ScoreId) => scoreValue(criteria, s, settings[s].limit);
    const fit = value("fit");
    const engagement = value("engagement");
    const fitBand = band(fit, settings.fit);
    const engBand = band(engagement, settings.engagement);
    return {
      values: { fit, engagement },
      bands: { fit: fitBand, engagement: engBand } as Record<ScoreId, Band>,
      ranges: { fit: scoreRange(criteria, "fit", settings.fit.limit), engagement: scoreRange(criteria, "engagement", settings.engagement.limit) },
      label: combinedLabel(fitBand, engBand),
      problems: checks(criteria, settings),
    };
  }, [criteria, settings]);

  const copy = async () => {
    const tsv = modelTsv(criteria, settings, { ...t.results.tableHeads, names: t.scores });
    try {
      await navigator.clipboard.writeText(tsv);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
  };

  const problemText = (p: (typeof result.problems)[number]) => {
    const score = t.scores[p.score];
    switch (p.kind) {
      case "noCriteria":
        return format(t.results.noCriteria, { score });
      case "order":
        return format(t.results.order, { score });
      case "unreachable":
        return format(t.results.unreachable, { score, max: num(p.max) });
      case "capped":
        return format(t.results.capped, { score, total: num(p.total), limit: num(p.limit) });
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)]">
      <div className="min-w-0 space-y-5">
        <Panel title={t.inputs.criteriaTitle}>
          <p className="-mt-1 mb-4 text-sm text-muted-foreground leading-relaxed">{t.inputs.criteriaHint}</p>
          <div className="hidden sm:grid grid-cols-[1.75rem_minmax(0,1fr)_8.5rem_5.5rem_2.25rem] gap-2 px-1 pb-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            <span aria-hidden>✓</span>
            <span>{t.inputs.label}</span>
            <span>{t.inputs.score}</span>
            <span className="text-right">{t.inputs.points}</span>
            <span />
          </div>
          <ul className="space-y-2">
            {criteria.map((c) => (
              <li
                key={c.id}
                className="grid grid-cols-[1.75rem_minmax(0,1fr)_2.25rem] sm:grid-cols-[1.75rem_minmax(0,1fr)_8.5rem_5.5rem_2.25rem] items-center gap-2 rounded-xl p-1"
              >
                <input
                  type="checkbox"
                  checked={c.applies}
                  onChange={(e) => update(c.id, { applies: e.target.checked })}
                  aria-label={`${t.inputs.applies}: ${c.label || t.inputs.label}`}
                  className="h-5 w-5 justify-self-center accent-[hsl(var(--primary))]"
                />
                <input
                  type="text"
                  value={c.label}
                  maxLength={80}
                  onChange={(e) => update(c.id, { label: e.target.value })}
                  aria-label={t.inputs.label}
                  className={inputClass}
                />
                <button
                  type="button"
                  onClick={() => {
                    setCriteria((list) => list.filter((x) => x.id !== c.id));
                    setCopyState("idle");
                  }}
                  aria-label={format(t.inputs.remove, { label: c.label || t.inputs.label })}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:order-last"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
                <div className="col-span-3 grid grid-cols-[minmax(0,1fr)_5.5rem] gap-2 pl-[2.25rem] sm:col-span-2 sm:pl-0 sm:contents">
                  <Select<ScoreId>
                    id={`ls-score-${c.id}`}
                    value={c.score}
                    onChange={(score) => update(c.id, { score })}
                    options={SCORES.map((s) => ({ value: s, label: t.scores[s] }))}
                    ariaLabel={t.inputs.score}
                  />
                  <PointsInput id={`ls-points-${c.id}`} value={c.points} onChange={(points) => update(c.id, { points })} label={t.inputs.points} />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              disabled={criteria.length >= MAX_CRITERIA}
              onClick={() => {
                setCriteria((list) => [...list, { id: nextId, label: "", score: "fit", points: 10, applies: false }]);
                setNextId((n) => n + 1);
                setCopyState("idle");
              }}
              className="glass-chip inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold text-foreground/90 transition-colors hover:border-primary/40 disabled:opacity-50"
            >
              <Plus className="h-4 w-4 text-primary" aria-hidden />
              {t.inputs.add}
            </button>
            {criteria.length >= MAX_CRITERIA && (
              <span className="text-xs text-muted-foreground">{format(t.inputs.maxReached, { n: String(MAX_CRITERIA) })}</span>
            )}
          </div>
        </Panel>

        <Panel title={t.inputs.settingsTitle}>
          <div className="grid gap-5 sm:grid-cols-2">
            {SCORES.map((s) => (
              <fieldset key={s} className="min-w-0 space-y-3">
                <legend className="mb-2 font-display font-semibold">{t.scores[s]}</legend>
                <label htmlFor={`ls-limit-${s}`} className="block min-w-0">
                  <span className="block text-sm font-medium text-foreground/85 mb-1.5">{t.inputs.limit}</span>
                  <Select<string>
                    id={`ls-limit-${s}`}
                    value={String(settings[s].limit)}
                    onChange={(v) => setScore(s, { limit: Number(v) })}
                    options={SCORE_LIMITS.map((l) => ({ value: String(l), label: format(t.inputs.limitOption, { min: num(-l), max: num(l) }) }))}
                  />
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <ThresholdInput id={`ls-high-${s}`} value={settings[s].high} onChange={(high) => setScore(s, { high })} label={t.inputs.high} />
                  <ThresholdInput id={`ls-medium-${s}`} value={settings[s].medium} onChange={(medium) => setScore(s, { medium })} label={t.inputs.medium} />
                </div>
              </fieldset>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{t.inputs.thresholdsHint}</p>
        </Panel>
      </div>

      <Panel className="lg:sticky lg:top-24 self-start">
        <h2 className="font-display text-lg font-bold">{t.results.title}</h2>
        <div aria-live="polite" aria-atomic="true" className="mt-4">
          <div className="flex items-center gap-4">
            <span className="text-gradient font-display text-5xl font-bold leading-none tabular-nums">{result.label}</span>
            <span className="text-sm text-muted-foreground leading-snug">
              <span className="block font-medium text-foreground/85">{t.results.combined}</span>
              {format(t.results.combinedDesc, { fit: t.bands[result.bands.fit], engagement: t.bands[result.bands.engagement] })}
            </span>
          </div>
        </div>

        <dl className="mt-5 space-y-4">
          {SCORES.map((s) => {
            const v = result.values[s];
            const limit = settings[s].limit;
            return (
              <div key={s}>
                <dt className="flex items-center justify-between gap-3">
                  <span className="font-medium">{t.scores[s]}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${bandClass[result.bands[s]]}`}>{t.bands[result.bands[s]]}</span>
                </dt>
                <dd>
                  <span className="mt-1 block font-display text-2xl font-bold tabular-nums">
                    {num(v)} <span className="text-sm font-normal text-muted-foreground">/ {num(limit)}</span>
                  </span>
                  <span className="mt-1.5 block h-1.5 rounded-full bg-secondary overflow-hidden" aria-hidden>
                    <span
                      className="block h-full rounded-full bg-primary transition-[width] duration-500 ease-out"
                      style={{ width: `${Math.max(0, v / limit) * 100}%` }}
                    />
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {format(t.results.range, { min: num(result.ranges[s].min), max: num(result.ranges[s].max) })}
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-sm font-semibold">{t.results.checksTitle}</p>
          {result.problems.length === 0 ? (
            <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              {t.results.allGood}
            </p>
          ) : (
            <ul className="mt-2 space-y-2">
              {result.problems.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/85">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden />
                  {problemText(p)}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          onClick={copy}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-input px-4 text-sm font-semibold transition-colors hover:bg-secondary"
        >
          <Copy className="h-4 w-4 text-primary" aria-hidden />
          {copyState === "copied" ? t.results.copied : t.results.copy}
        </button>
        <p aria-live="polite" className="mt-2 text-xs text-muted-foreground">
          {copyState === "failed" ? t.results.copyFailed : ""}
        </p>
      </Panel>
    </div>
  );
};

export default LeadScoreCalculator;
