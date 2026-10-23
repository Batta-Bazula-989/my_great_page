import type { CSSProperties } from "react";
import { Calendar, Star, ArrowUpRight, ShieldCheck, Clock, Plug } from "lucide-react";
import BookingButton from "@/components/BookingButton";
import { UPWORK_PROFILE_URL } from "@/lib/links";
import { CURRENCY, PACKAGES, formatMoney } from "@/lib/pricing";
import { keepShortWords } from "@/lib/typography";
import { format, useDict, useLocale } from "@/i18n";
import avatar from "@/assets/roman-avatar.jpg";

const tools = ["Zendesk", "Freshdesk", "Jira", "Slack", "WhatsApp", "Telegram"];

const highlightIcons = [Plug, Clock, ShieldCheck];

// Staggered CSS entrance (see .animate-rise): the pre-rendered hero is visible before any JavaScript runs.
const rise = (step: number) => ({ "--rise-delay": `${step * 80}ms` }) as CSSProperties;

const HeroSection = () => {
  const t = useDict().hero;
  const locale = useLocale();
  const tidy = (text: string) => keepShortWords(text, locale);
  const lowestPrice = formatMoney(locale, Math.min(...PACKAGES.map((p) => p.prices[CURRENCY[locale]])));

  return (
    <header id="hero" className="relative min-h-[92svh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="container relative z-10 px-4">
        <div className="glass-panel mx-auto max-w-4xl rounded-[32px] px-5 py-10 sm:px-8 md:px-14 md:py-14 text-center">
          <p
            className="animate-rise glass-chip mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full px-4 py-1.5 text-xs sm:text-sm text-foreground/80 text-balance"
            style={rise(0)}
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
            {t.eyebrow}
          </p>

          <h1
            className="animate-rise text-[2.1rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.08] tracking-tight"
            style={rise(1)}
          >
            {tidy(t.titleBefore)}
            <span className="text-gradient">{tidy(t.titleHighlight)}</span>
            {tidy(t.titleAfter)}
          </h1>

          <p
            className="animate-rise text-foreground/80 text-base md:text-lg max-w-2xl mt-5 mx-auto leading-relaxed text-pretty"
            style={rise(2)}
          >
            {tidy(format(t.intro, { price: lowestPrice }))}
          </p>

          <div className="animate-rise mt-8 flex flex-col items-center gap-5" style={rise(3)}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-7 gap-y-4">
              <BookingButton
                variant="hero"
                size="xl"
                className="h-auto min-h-14 max-w-full rounded-full px-6 py-3 text-base whitespace-normal text-center sm:px-10 sm:text-lg"
              >
                <Calendar className="w-5 h-5" aria-hidden />
                {t.ctaBook}
              </BookingButton>
              <a
                href={UPWORK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 font-semibold text-foreground/85 underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                <Star className="w-4 h-4 fill-primary text-primary" aria-hidden />
                {t.ctaUpwork}
                <ArrowUpRight className="w-4 h-4" aria-hidden />
              </a>
            </div>
            <p className="flex items-center gap-3 text-left text-sm text-foreground/80 max-w-lg">
              <img
                src={avatar}
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-full border border-white/15 object-cover"
              />
              <span className="text-pretty">{tidy(t.callNote)}</span>
            </p>
          </div>

          <ul
            className="animate-rise mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm text-foreground/80"
            style={rise(4)}
          >
            {t.highlights.map((text, i) => {
              const Icon = highlightIcons[i];
              return (
                <li key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-primary" aria-hidden />
                  {text}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="animate-rise mt-8 text-center" style={rise(5)}>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t.integratesWith}</p>
          {/* Plain text, not chips: these are tools the work plugs into, not buttons */}
          <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-x-1 gap-y-1 text-sm font-medium text-foreground/75">
            {tools.map((tool, i) => (
              <li key={tool} className="flex items-center gap-1">
                {i > 0 && <span className="px-1.5 text-primary/60" aria-hidden>·</span>}
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
