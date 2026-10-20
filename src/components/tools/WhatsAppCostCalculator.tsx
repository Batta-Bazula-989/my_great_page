import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Field, NumberInput, Panel } from "./fields";
import { useDict, useLocale } from "@/i18n";
import { localeInfo } from "@/i18n/config";
import { CURRENCY } from "@/lib/pricing";
import { META_PRICING_URL, whatsappCost } from "@/tools/whatsapp";

const LINES = ["service", "utility", "marketing", "authentication"] as const;

const WhatsAppCostCalculator = () => {
  const t = useDict().tools.whatsapp;
  const locale = useLocale();
  const { dateLocale } = localeInfo(locale);
  const currency = CURRENCY[locale];

  const [numbers, setNumbers] = useState(1);
  const [service, setService] = useState(3000);
  const [utility, setUtility] = useState(500);
  const [marketing, setMarketing] = useState(0);
  const [authentication, setAuthentication] = useState(0);
  const [utilityRate, setUtilityRate] = useState(0);
  const [marketingRate, setMarketingRate] = useState(0);
  const [authenticationRate, setAuthenticationRate] = useState(0);

  const r = useMemo(
    () => whatsappCost({ numbers, service, utility, marketing, authentication, utilityRate, marketingRate, authenticationRate }),
    [numbers, service, utility, marketing, authentication, utilityRate, marketingRate, authenticationRate],
  );
  const hasRates = utilityRate > 0 || marketingRate > 0 || authenticationRate > 0;
  const money = (n: number) => new Intl.NumberFormat(dateLocale, { style: "currency", currency, maximumFractionDigits: 2 }).format(n);
  const count = (n: number) => n.toLocaleString(dateLocale);
  const symbol = new Intl.NumberFormat(dateLocale, { style: "currency", currency }).formatToParts(0).find((p) => p.type === "currency")?.value;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div className="space-y-5">
        <Panel title={t.inputs.volumeTitle}>
          <div className="space-y-4">
            <Field label={t.inputs.numbers} htmlFor="wa-numbers">
              <NumberInput id="wa-numbers" value={numbers} onChange={setNumbers} min={1} max={1000} />
            </Field>
            <Field label={t.inputs.service} htmlFor="wa-service">
              <NumberInput id="wa-service" value={service} onChange={setService} step={100} />
            </Field>
            <div className="grid sm:grid-cols-3 gap-3">
              <Field label={t.inputs.utility} htmlFor="wa-utility">
                <NumberInput id="wa-utility" value={utility} onChange={setUtility} step={100} />
              </Field>
              <Field label={t.inputs.marketing} htmlFor="wa-marketing">
                <NumberInput id="wa-marketing" value={marketing} onChange={setMarketing} step={100} />
              </Field>
              <Field label={t.inputs.authentication} htmlFor="wa-auth">
                <NumberInput id="wa-auth" value={authentication} onChange={setAuthentication} step={100} />
              </Field>
            </div>
          </div>
        </Panel>

        <Panel title={t.inputs.ratesTitle}>
          <p className="text-sm text-muted-foreground mb-4">
            {t.inputs.ratesHint}{" "}
            <a href={META_PRICING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">
              {t.inputs.rateCard}
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
            </a>
          </p>
          <div className="space-y-4">
            <Field label={t.inputs.utilityRate} htmlFor="wa-utility-rate">
              <NumberInput id="wa-utility-rate" value={utilityRate} onChange={setUtilityRate} step={0.0001} suffix={symbol} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label={t.inputs.marketingRate} htmlFor="wa-marketing-rate">
                <NumberInput id="wa-marketing-rate" value={marketingRate} onChange={setMarketingRate} step={0.0001} suffix={symbol} />
              </Field>
              <Field label={t.inputs.authenticationRate} htmlFor="wa-auth-rate">
                <NumberInput id="wa-auth-rate" value={authenticationRate} onChange={setAuthenticationRate} step={0.0001} suffix={symbol} />
              </Field>
            </div>
          </div>
        </Panel>
      </div>

      <Panel className="lg:sticky lg:top-24 self-start">
        <h2 className="font-display text-lg font-bold mb-4">{t.results.title}</h2>
        <dl className="grid grid-cols-2 gap-3 mb-5">
          <div className="glass-chip rounded-xl p-3">
            <dt className="text-xs text-muted-foreground">{t.results.freeService}</dt>
            <dd className="font-display text-xl font-bold tabular-nums">{count(r.freeService)}</dd>
          </div>
          <div className="glass-chip rounded-xl p-3">
            <dt className="text-xs text-muted-foreground">{t.results.billableService}</dt>
            <dd className="font-display text-xl font-bold tabular-nums">{count(r.billableService)}</dd>
          </div>
        </dl>
        <div aria-live="polite">
          {hasRates ? (
            <>
              <ul className="space-y-3">
                {LINES.map((line) => (
                  <li key={line}>
                    <div className="flex justify-between gap-3 text-sm">
                      <span className="text-foreground/85">{t.results[line]}</span>
                      <span className="tabular-nums font-medium">{money(r.lines[line])}</span>
                    </div>
                    <span className="mt-1.5 block h-1.5 rounded-full bg-white/5 overflow-hidden" aria-hidden>
                      <span
                        className="block h-full rounded-full bg-primary/70 transition-[width] duration-500 ease-out"
                        style={{ width: `${r.total > 0 ? (r.lines[line] / r.total) * 100 : 0}%` }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-baseline justify-between border-t border-white/10 pt-4">
                <span className="font-display font-semibold">{t.results.total}</span>
                <span className="font-display text-3xl font-bold text-primary tabular-nums">{money(r.total)}</span>
              </div>
            </>
          ) : (
            <p className="rounded-xl border border-dashed border-white/15 p-4 text-sm text-muted-foreground">{t.results.enterRates}</p>
          )}
        </div>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">{t.notIncluded}</p>
      </Panel>
    </div>
  );
};

export default WhatsAppCostCalculator;
