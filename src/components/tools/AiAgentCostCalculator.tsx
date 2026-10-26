import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { Field, NumberInput, Panel, RangeInput, Select } from "./fields";
import { format, useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";
import { CURRENCY, convert, formatMoney, supportPackageById, type SupportPackageId } from "@/lib/pricing";
import { PLATFORMS, TOKEN_EXAMPLE, VENDORS, buildMonthly, paybackMonth, type PlatformId } from "@/tools/aiAgentCost";

const BUILD_PACKAGES: SupportPackageId[] = ["starter", "standard"];

const AiAgentCostCalculator = () => {
  const d = useDict();
  const t = d.tools.aiAgent;
  const locale = useLocale();
  const currency = CURRENCY[locale];
  const { dateLocale } = localeInfo(locale);

  const [conversations, setConversations] = useState(2000);
  const [resolution, setResolution] = useState(50);
  const [actions, setActions] = useState(3);
  const [pkg, setPkg] = useState<SupportPackageId>("standard");
  const [platform, setPlatform] = useState<PlatformId>("n8nCloud");
  const [inputTokens, setInputTokens] = useState(TOKEN_EXAMPLE.input);
  const [outputTokens, setOutputTokens] = useState(TOKEN_EXAMPLE.output);

  const money = (n: number) => formatMoney(locale, n);
  const number = (n: number) => n.toLocaleString(dateLocale);

  const result = useMemo(() => {
    const volume = { conversations, resolutionRate: resolution / 100, actionsPerConversation: actions };
    const oneTime = supportPackageById(pkg).prices[currency];
    const buildPerMonth = buildMonthly(volume, { inputTokens, outputTokens, platform }, currency);
    const vendors = VENDORS.map((v) => {
      const monthly = convert(v.monthlyUsd(volume), "USD", currency);
      return { ...v, monthly, year: monthly * 12, payback: paybackMonth(oneTime, buildPerMonth, monthly) };
    }).sort((a, b) => a.monthly - b.monthly);
    const buildYear = oneTime + buildPerMonth * 12;
    const max = Math.max(buildYear, ...vendors.map((v) => v.year), 1);
    const fastest = vendors.filter((v) => v.payback !== null && v.payback <= 12).sort((a, b) => a.payback! - b.payback!);
    return { oneTime, buildPerMonth, buildYear, vendors, max, fastest };
  }, [conversations, resolution, actions, pkg, platform, inputTokens, outputTokens, currency]);

  const planName = supportPackageById(pkg).name;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
      <div className="space-y-5">
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
            <Field label={t.inputs.package} htmlFor="ai-package">
              <Select<SupportPackageId>
                id="ai-package"
                value={pkg}
                onChange={setPkg}
                options={BUILD_PACKAGES.map((id) => ({
                  value: id,
                  label: `${supportPackageById(id).name} · ${money(supportPackageById(id).prices[currency])}`,
                }))}
              />
            </Field>
            <Field label={t.inputs.platform} htmlFor="ai-platform">
              <Select<PlatformId>
                id="ai-platform"
                value={platform}
                onChange={setPlatform}
                options={PLATFORMS.map((p) => ({ value: p.id, label: t.inputs.platforms[p.id] }))}
              />
            </Field>
            <fieldset>
              <legend className="block text-sm font-medium text-foreground/85 mb-1.5">{t.inputs.tokens}</legend>
              <div className="grid grid-cols-2 gap-3">
                <Field label={t.inputs.inputTokens} htmlFor="ai-in">
                  <NumberInput id="ai-in" value={inputTokens} onChange={setInputTokens} step={100} />
                </Field>
                <Field label={t.inputs.outputTokens} htmlFor="ai-out">
                  <NumberInput id="ai-out" value={outputTokens} onChange={setOutputTokens} step={50} />
                </Field>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                <a href={TOKEN_EXAMPLE.source} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-4 hover:underline">
                  {t.inputs.tokensHint}
                </a>
              </p>
            </fieldset>
          </div>
        </Panel>
      </div>

      <Panel className="lg:sticky lg:top-24 self-start">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5">
          <h2 className="font-display text-lg font-bold">{t.results.title}</h2>
          <span className="text-xs text-muted-foreground">
            {number(conversations)} · {resolution}%
          </span>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/[0.07] p-4 mb-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-display font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" aria-hidden />
              {t.results.yourBuild} · {planName}
            </p>
            <p className="font-display text-xl font-bold text-primary tabular-nums">{money(result.buildYear)}</p>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {format(t.results.buildLine, { price: money(result.oneTime), monthly: money(result.buildPerMonth) })}
          </p>
          <div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden" aria-hidden>
            <div className="h-full rounded-full bg-primary transition-[width] duration-500 ease-out" style={{ width: `${(result.buildYear / result.max) * 100}%` }} />
          </div>
          <p className="mt-3 text-sm font-medium text-foreground/90">
            {result.fastest.length
              ? format(t.results.payback, { vendor: result.fastest[0].name, months: String(result.fastest[0].payback) })
              : t.results.neverCheaper}
          </p>
        </div>

        <table className="w-full text-sm">
          <caption className="sr-only">{t.results.title}</caption>
          <thead>
            <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th scope="col" className="pb-2 font-medium">{t.results.vendor}</th>
              <th scope="col" className="pb-2 font-medium text-right">{t.results.monthly}</th>
              <th scope="col" className="pb-2 font-medium text-right">{t.results.year}</th>
            </tr>
          </thead>
          <tbody>
            {result.vendors.map((v, i) => (
              <tr key={v.id} className="border-t border-white/5 align-top">
                <td className="py-3 pr-3">
                  <a href={v.source} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary">
                    {v.name}
                  </a>
                  {i === 0 && (
                    <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-foreground/80">{t.results.cheapest}</span>
                  )}
                  <span className="block text-xs text-muted-foreground mt-0.5">{t.units[v.id]}</span>
                  <span className="mt-2 block h-1.5 rounded-full bg-white/5 overflow-hidden" aria-hidden>
                    <span
                      className="block h-full rounded-full bg-foreground/35 transition-[width] duration-500 ease-out"
                      style={{ width: `${(v.year / result.max) * 100}%` }}
                    />
                  </span>
                </td>
                <td className="py-3 text-right tabular-nums whitespace-nowrap">{money(v.monthly)}</td>
                <td className="py-3 pl-3 text-right font-semibold tabular-nums whitespace-nowrap">{money(v.year)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{t.notIncluded}</p>
        {currency !== "USD" && <p className="mt-2 text-xs text-muted-foreground">{t.results.currencyNote}</p>}
      </Panel>
    </div>
  );
};

export default AiAgentCostCalculator;
