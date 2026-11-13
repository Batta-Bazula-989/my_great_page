import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { Field, NumberInput, Panel, RangeInput, Select, linkClass } from "./fields";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";
import { CURRENCY, PACKAGES, convert, formatMoney, packageById } from "@/lib/pricing";
import { PLATFORMS, PRICES_AS_OF, TOKEN_DEFAULTS, VENDORS, buildMonthly, paybackMonth, type PlatformId } from "@/tools/aiAgentCost";

// The one-time build compared here is the Support Automation package. Its price is a minimum
// ("from …"), so the visitor can replace it with the fixed price from their Health Check report.
const BUILD_PACKAGE = "supportAutomation" as const;
const PLAN_INDEX = PACKAGES.findIndex((p) => p.id === BUILD_PACKAGE);

// One bar track for every row, so the build and the vendors share a single 12-month scale.
const Bar = ({ value, max, className }: { value: number; max: number; className: string }) => (
  <span className="mt-2 block h-1.5 rounded-full bg-secondary overflow-hidden" aria-hidden>
    <span className={`block h-full rounded-full transition-[width] duration-500 ease-out ${className}`} style={{ width: `${(value / max) * 100}%` }} />
  </span>
);

const AiAgentCostCalculator = () => {
  const d = useDict();
  const t = d.tools.aiAgent;
  const locale = useLocale();
  const currency = CURRENCY[locale];
  const { dateLocale } = localeInfo(locale);

  const [conversations, setConversations] = useState(2000);
  const [resolution, setResolution] = useState(50);
  const [actions, setActions] = useState(3);
  const [oneTimePrice, setOneTimePrice] = useState(() => packageById(BUILD_PACKAGE).prices[currency]);
  const [platform, setPlatform] = useState<PlatformId>("n8nCloud");
  const [inputTokens, setInputTokens] = useState(TOKEN_DEFAULTS.input);
  const [outputTokens, setOutputTokens] = useState(TOKEN_DEFAULTS.output);

  const money = (n: number) => formatMoney(locale, n);
  const number = (n: number) => n.toLocaleString(dateLocale);
  // Below `sm` the "Per month" column folds under the 12-month figure, so phones keep one wide bar track.
  const perMonth = (value: string) => (
    <span className="block text-xs font-normal text-muted-foreground sm:hidden">
      {value}
      {d.tools.common.perMonth}
    </span>
  );

  const result = useMemo(() => {
    const volume = { conversations, resolutionRate: resolution / 100, actionsPerConversation: actions };
    const oneTime = Math.max(0, oneTimePrice);
    const buildPerMonth = buildMonthly(volume, { inputTokens, outputTokens, platform }, currency);
    const vendors = VENDORS.map((v) => {
      const monthly = convert(v.monthlyUsd(volume), "USD", currency);
      return { ...v, monthly, year: monthly * 12, payback: paybackMonth(oneTime, buildPerMonth, monthly) };
    }).sort((a, b) => a.monthly - b.monthly);
    const buildYear = oneTime + buildPerMonth * 12;
    const max = Math.max(buildYear, ...vendors.map((v) => v.year), 1);
    const fastest = vendors.filter((v) => v.payback !== null && v.payback <= 12).sort((a, b) => a.payback! - b.payback!);
    return { oneTime, buildPerMonth, buildYear, vendors, max, fastest };
  }, [conversations, resolution, actions, oneTimePrice, platform, inputTokens, outputTokens, currency]);

  const planName = d.pricing.plans[PLAN_INDEX].name;
  const minPrice = money(packageById(BUILD_PACKAGE).prices[currency]);
  const empty = conversations <= 0;
  // "Lowest" marks every vendor at the minimum, but never a $0 that only means "nothing billed at these inputs".
  const lowest = result.vendors[0].monthly;
  const pricesDate = new Date(`${PRICES_AS_OF}-01T00:00:00Z`).toLocaleDateString(dateLocale, { month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      <div className="min-w-0 space-y-5">
        <Panel title={t.inputs.title}>
          <div className="space-y-5">
            <Field label={t.inputs.conversations} htmlFor="ai-conversations">
              <NumberInput id="ai-conversations" value={conversations} onChange={setConversations} min={0} max={1_000_000} step={100} />
            </Field>
            <Field label={t.inputs.resolutionRate} htmlFor="ai-resolution">
              <RangeInput id="ai-resolution" value={resolution} onChange={setResolution} min={0} max={100} display={`${resolution}%`} />
            </Field>
            <Field label={t.inputs.actions} htmlFor="ai-actions">
              <NumberInput id="ai-actions" value={actions} onChange={setActions} min={0} max={50} />
            </Field>
          </div>
        </Panel>

        <Panel title={t.inputs.buildTitle}>
          <div className="space-y-5">
            <Field label={format(t.inputs.package, { plan: planName })} htmlFor="ai-package">
              <NumberInput id="ai-package" value={oneTimePrice} onChange={setOneTimePrice} min={0} max={100_000} step={50} />
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{format(t.inputs.priceHint, { plan: planName, price: minPrice })}</p>
            </Field>
            <Field label={t.inputs.platform} htmlFor="ai-platform">
              <Select<PlatformId>
                id="ai-platform"
                value={platform}
                onChange={setPlatform}
                options={PLATFORMS.map((p) => ({ value: p.id, label: t.inputs.platforms[p.id] }))}
              />
            </Field>
            <fieldset className="min-w-0">
              <legend className="block text-sm font-medium text-foreground/85 mb-1.5">{t.inputs.tokens}</legend>
              <div className="grid grid-cols-2 gap-3">
                <Field label={t.inputs.inputTokens} htmlFor="ai-in">
                  <NumberInput id="ai-in" value={inputTokens} onChange={setInputTokens} step={100} />
                </Field>
                <Field label={t.inputs.outputTokens} htmlFor="ai-out">
                  <NumberInput id="ai-out" value={outputTokens} onChange={setOutputTokens} step={50} />
                </Field>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{t.inputs.tokensHint}</p>
            </fieldset>
          </div>
        </Panel>
      </div>

      <Panel className="lg:sticky lg:top-24 self-start">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
          <h2 className="font-display text-lg font-bold">{t.results.title}</h2>
          {!empty && (
            <span className="text-xs text-muted-foreground tabular-nums">
              {number(conversations)} · {resolution}%
            </span>
          )}
        </div>

        <div aria-live="polite" aria-atomic="true">
          {empty ? (
            <p className="rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">{t.results.empty}</p>
          ) : (
            <>
              <p className="font-display font-semibold leading-snug">
                {result.fastest.length
                  ? format(t.results.payback, { vendor: result.fastest[0].name, months: String(result.fastest[0].payback) })
                  : t.results.neverCheaper}
              </p>
              <p className="sr-only">{`${t.results.yourBuild} · ${planName}, ${t.results.year}: ${money(result.buildYear)}`}</p>
            </>
          )}
        </div>

        {!empty && (
          <>
            {/* Bleeds into the panel padding so the highlighted build row has room for its own inset. */}
            <div className="-mx-3 mt-4 overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 text-sm">
                <caption className="sr-only">{t.results.title}</caption>
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th scope="col" className="pb-2 pl-3 pr-2 font-medium">{t.results.vendor}</th>
                    <th scope="col" className="hidden sm:table-cell pb-2 px-2 font-medium text-right">{t.results.monthly}</th>
                    <th scope="col" className="pb-2 pl-2 pr-3 font-medium text-right">{t.results.year}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="align-top bg-primary/[0.07]">
                    <td className="rounded-l-xl py-3 pl-3 pr-2">
                      <span className="flex items-start gap-1.5 font-display font-semibold">
                        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                        <span>
                          {t.results.yourBuild} · {planName}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {format(t.results.buildLine, { price: money(result.oneTime), monthly: money(result.buildPerMonth) })}
                      </span>
                      <Bar value={result.buildYear} max={result.max} className="bg-primary" />
                    </td>
                    <td className="hidden sm:table-cell py-3 px-2 text-right tabular-nums whitespace-nowrap">{money(result.buildPerMonth)}</td>
                    <td className="rounded-r-xl py-3 pl-2 pr-3 text-right font-semibold text-primary tabular-nums whitespace-nowrap">
                      {money(result.buildYear)}
                      {perMonth(money(result.buildPerMonth))}
                    </td>
                  </tr>
                  {result.vendors.map((v, i) => {
                    const rule = i > 0 ? "border-t border-border/60" : "";
                    return (
                      <tr key={v.id} className="align-top">
                        <td className={`py-3 pl-3 pr-2 ${rule}`}>
                          <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                            <a href={v.source} target="_blank" rel="noopener noreferrer" className={`font-medium ${linkClass}`}>
                              {v.name}
                            </a>
                            {lowest > 0 && v.monthly === lowest && (
                              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-foreground/80 whitespace-nowrap">{t.results.cheapest}</span>
                            )}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-0.5">{t.units[v.id]}</span>
                          <Bar value={v.year} max={result.max} className="bg-foreground/35" />
                        </td>
                        <td className={`hidden sm:table-cell py-3 px-2 text-right tabular-nums whitespace-nowrap ${rule}`}>{money(v.monthly)}</td>
                        <td className={`py-3 pl-2 pr-3 text-right font-semibold tabular-nums whitespace-nowrap ${rule}`}>
                          {money(v.year)}
                          {perMonth(money(v.monthly))}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
              {format(t.results.pricesAsOf, { date: pricesDate })}
              {currency !== "USD" && ` ${t.results.currencyNote}`}
            </p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t.notIncluded}</p>
          </>
        )}
      </Panel>
    </div>
  );
};

export default AiAgentCostCalculator;
