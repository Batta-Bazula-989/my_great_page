import { useMemo, useState } from "react";
import { Plus, X } from "lucide-react";
import { Field, NumberInput, Panel, TextInput } from "./fields";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";
import { addBusinessMinutes, businessMinutesBetween, parseLocal, type Schedule } from "@/tools/sla";

type Mode = "due" | "elapsed";

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Monday-first order for the day toggles.
const DAY_ORDER = [1, 2, 3, 4, 5, 6, 0];

const SlaCalculator = () => {
  const t = useDict().tools.sla;
  const { dateLocale } = localeInfo(useLocale());

  const [mode, setMode] = useState<Mode>("due");
  // A Friday-afternoon example, so the weekend skip is visible straight away.
  const [received, setReceived] = useState("2026-10-16T16:00");
  const [replied, setReplied] = useState("2026-10-19T11:30");
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(0);
  const [opens, setOpens] = useState("09:00");
  const [closes, setCloses] = useState("17:00");
  const [days, setDays] = useState<number[]>([1, 2, 3, 4, 5]);
  const [holidays, setHolidays] = useState<string[]>([]);
  const [holidayInput, setHolidayInput] = useState("");

  const schedule: Schedule = { start: toMinutes(opens), end: toMinutes(closes), days, holidays };
  const target = hours * 60 + minutes;

  const duration = (mins: number) => {
    const total = Math.round(mins);
    const d = Math.floor(total / 1440);
    const h = Math.floor((total % 1440) / 60);
    const m = total % 60;
    return d > 0 ? format(t.results.days, { d: String(d), h: String(h), m: String(m) }) : format(t.results.duration, { h: String(h), m: String(m) });
  };
  const when = (ts: number) =>
    new Date(ts).toLocaleString(dateLocale, {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    });

  const result = useMemo(() => {
    const from = parseLocal(received);
    if (mode === "due") {
      const due = addBusinessMinutes(from, target, schedule);
      return due === null ? null : { kind: "due" as const, due, calendar: (due - from) / 60000 };
    }
    const to = parseLocal(replied);
    const business = businessMinutesBetween(from, to, schedule);
    return business === null || to < from ? null : { kind: "elapsed" as const, business, calendar: (to - from) / 60000 };
    // schedule is rebuilt from the values below on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, received, replied, target, opens, closes, days, holidays]);

  const toggleDay = (day: number) => setDays((ds) => (ds.includes(day) ? ds.filter((x) => x !== day) : [...ds, day]));
  const addHoliday = () => {
    if (holidayInput && !holidays.includes(holidayInput)) setHolidays((hs) => [...hs, holidayInput].sort());
    setHolidayInput("");
  };
  const targetLabel = duration(target);

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="space-y-5">
        <div role="tablist" className="glass-chip inline-flex rounded-full p-1">
          {(["due", "elapsed"] as Mode[]).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => setMode(m)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${mode === m ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t.modes[m]}
            </button>
          ))}
        </div>

        <Panel>
          <div className="space-y-5">
            <Field label={t.inputs.received} htmlFor="sla-received">
              <TextInput id="sla-received" type="datetime-local" value={received} onChange={setReceived} />
            </Field>
            {mode === "elapsed" && (
              <Field label={t.inputs.replied} htmlFor="sla-replied">
                <TextInput id="sla-replied" type="datetime-local" value={replied} onChange={setReplied} />
              </Field>
            )}
            <fieldset>
              <legend className="block text-sm font-medium text-foreground/85 mb-1.5">{t.inputs.target}</legend>
              <div className="grid grid-cols-2 gap-3">
                <NumberInput id="sla-hours" value={hours} onChange={setHours} max={10000} suffix={t.inputs.hours} />
                <NumberInput id="sla-minutes" value={minutes} onChange={setMinutes} max={59} suffix={t.inputs.minutes} />
              </div>
            </fieldset>
          </div>
        </Panel>

        <Panel title={t.inputs.scheduleTitle}>
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <Field label={t.inputs.opens} htmlFor="sla-opens">
                <TextInput id="sla-opens" type="time" value={opens} onChange={setOpens} />
              </Field>
              <Field label={t.inputs.closes} htmlFor="sla-closes">
                <TextInput id="sla-closes" type="time" value={closes} onChange={setCloses} />
              </Field>
            </div>
            <fieldset>
              <legend className="block text-sm font-medium text-foreground/85 mb-2">{t.inputs.days}</legend>
              <div className="flex flex-wrap gap-2">
                {DAY_ORDER.map((day) => (
                  <button
                    key={day}
                    type="button"
                    aria-pressed={days.includes(day)}
                    onClick={() => toggleDay(day)}
                    className={`min-w-12 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${days.includes(day) ? "bg-primary/20 text-primary border border-primary/40" : "border border-white/10 text-muted-foreground hover:text-foreground"}`}
                  >
                    {t.inputs.dayNames[day]}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="block text-sm font-medium text-foreground/85 mb-2">{t.inputs.holidays}</legend>
              <div className="flex gap-2">
                <TextInput id="sla-holiday" type="date" value={holidayInput} onChange={setHolidayInput} />
                <button
                  type="button"
                  onClick={addHoliday}
                  className="glass-chip shrink-0 rounded-xl px-4 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors inline-flex items-center gap-1"
                >
                  <Plus className="w-4 h-4" aria-hidden />
                  {t.inputs.addHoliday}
                </button>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {holidays.length === 0 && <p className="text-xs text-muted-foreground">{t.inputs.noHolidays}</p>}
                {holidays.map((h) => (
                  <span key={h} className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 text-sm">
                    {new Date(`${h}T00:00:00Z`).toLocaleDateString(dateLocale, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}
                    <button
                      type="button"
                      onClick={() => setHolidays((hs) => hs.filter((x) => x !== h))}
                      aria-label={format(t.inputs.removeHoliday, { date: h })}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-3.5 h-3.5" aria-hidden />
                    </button>
                  </span>
                ))}
              </div>
            </fieldset>
          </div>
        </Panel>
      </div>

      <Panel className="lg:sticky lg:top-24 self-start">
        <div aria-live="polite">
          {!result && <p className="text-muted-foreground">{t.results.invalid}</p>}
          {result?.kind === "due" && (
            <>
              <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold">{t.results.dueAt}</p>
              <p className="mt-2 font-display text-2xl md:text-3xl font-bold leading-tight">{when(result.due)}</p>
              <p className="mt-4 text-muted-foreground">
                {t.results.calendarTime}: <span className="text-foreground font-semibold">{duration(result.calendar)}</span>
              </p>
            </>
          )}
          {result?.kind === "elapsed" && (
            <>
              <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold">{t.results.businessTime}</p>
              <p className="mt-2 font-display text-3xl md:text-4xl font-bold">{duration(result.business)}</p>
              <p className="mt-4 text-muted-foreground">
                {t.results.elapsedCalendar}: <span className="text-foreground font-semibold">{duration(result.calendar)}</span>
              </p>
              {target > 0 && (
                <p className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${result.business <= target ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}>
                  {format(result.business <= target ? t.results.withinTarget : t.results.overTarget, { target: targetLabel })}
                </p>
              )}
            </>
          )}
        </div>
      </Panel>
    </div>
  );
};

export default SlaCalculator;
