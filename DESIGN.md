---
name: TascaLab
description: Fixed-price lead, CRM and support automation from one specialist, on warm off-white with deep indigo and one violet-to-cyan signal gradient.
colors:
  indigo-ink: "hsl(248 56% 36%)"
  page-cream: "hsl(40 33% 97%)"
  text-ink: "hsl(248 28% 12%)"
  text-slate: "hsl(248 14% 36%)"
  card-white: "hsl(0 0% 100%)"
  tint-indigo: "hsl(248 38% 96%)"
  chip-indigo: "hsl(248 38% 95%)"
  hairline: "hsl(248 22% 88%)"
  footer-indigo: "hsl(248 44% 13%)"
  footer-text: "hsl(248 30% 96%)"
  gradient-violet: "hsl(258 70% 44%)"
  gradient-blue: "hsl(230 64% 46%)"
  gradient-cyan: "hsl(197 90% 32%)"
  alert-red: "hsl(0 72% 44%)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  price:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.2em"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  2xl: "16px"
  nav: "22px"
  card: "24px"
  panel: "28px"
  hero: "32px"
  full: "9999px"
---

# Design System: TascaLab

## Overview

**Creative North Star: "The Bright Ledger"**

A warm off-white page, near-black indigo ink, and one luminous violet-to-cyan gradient
that marks what matters: the eyebrow labels, the booking button, the process numerals,
the highlighted phrase in the hero. Content sits on white cards with soft, cool shadows.
Sections alternate between the warm cream canvas and a faint indigo tint, so the page
reads in calm bands. The footer closes the page as the one deep-indigo surface.

The mood is **bright, precise and trustworthy**. Credibility still comes from legibility:
clear prices, clear packages, real reviews, named recent work. Roman stays visible in the
hero note, the founder panel, the contact panel and the booking dialog.

**Key characteristics:**
- Warm off-white canvas (`page-cream`), near-black indigo body text (`text-ink`)
- Deep indigo (`indigo-ink`) as the primary action/signal color
- A violet → blue → deep-cyan gradient reserved for CTAs, eyebrows, gradient numerals,
  the featured-card border and one highlighted phrase per section
- White cards with 24–28px corners, one soft resting shadow, gentle hover lift
- Alternating section tints (`tint-indigo`) instead of hairline dividers
- One or two blurred gradient blooms behind the hero and pricing, at low opacity,
  at the outer corners only — never behind paragraphs, hidden below `lg`
- Space Grotesk headings, Outfit body (unchanged); uppercase gradient eyebrows

## Dark mode

Dark mode follows the visitor's system preference (`prefers-color-scheme: dark`) —
no toggle. Only the CSS tokens change, in `src/index.css`: the canvas becomes deep
indigo-black (`hsl(248 30% 8%)`), cards `hsl(248 26% 12%)`, primary brightens to a
light indigo (`hsl(248 90% 77%)`) so icons, prices and links keep ≥ 4.5:1, and the
text gradient brightens its stops for the same reason. The CTA gradient keeps its
deep stops, since white text passes AA on them regardless of canvas. The few
light-theme literals (section tint, chips, nav glass, scrollbar, the integration
strip's brand hover colors) carry their own dark overrides next to their light
definitions.

## Color rules

- **The Gradient Rule.** The violet-to-cyan gradient appears only on: CTA fills
  (`--gradient-accent`, every stop ≥ 4.5:1 with white text), gradient text
  (`--gradient-text`, every stop ≥ 4.5:1 on the cream canvas — eyebrows, process
  numerals, one highlighted phrase), the featured pricing card's border, and the
  decorative blooms. Never on paragraphs, never as a background under body text.
- **Indigo is the working accent:** icons, links, check marks, prices, focus rings,
  the package-button text.
- **The footer is the one dark surface.** `footer-indigo` background,
  `footer-text` at 70–100% for its links and headings.
- **Contrast floor is WCAG AA.** `text-ink` ≈ 15:1 on cream; `text-slate` ≥ 7:1 on
  cream, the tint and white; gradient text stops ≥ 4.5:1 on cream.

## Surfaces

The old dark-glass class names survive with light definitions, so every page restyles at once:
- `.glass` — white card, 1px `hairline` border, soft shadow (`--shadow-card`)
- `.glass-panel` — feature panel: white-to-indigo-tint gradient, larger shadow
- `.glass-chip` — `chip-indigo` pill for icon tiles and status chips
- `.glass-nav` — floating chrome: cream at 85% with backdrop blur (nav, phone booking bar)
- `.glass-solid` — the booking dialog: solid white, the largest shadow
- `.glass-hover` — hover: border shifts to indigo 35%, shadow deepens; cards lift 4–6px
- `.gradient-border` — the featured pricing card: 1.5px violet-to-cyan border via two
  background layers

## Layout & motion

- Section rhythm `py-16 md:py-24`; the `Section` component renders the shared header
  (gradient uppercase eyebrow, Space Grotesk headline, optional slate lead) — unchanged shape.
- Homepage order: hero, recent work, reviews, services (three buyer-problem groups),
  how it works (large gradient numerals), fit, founder, pricing (Lead & CRM group first,
  featured card with gradient border), data, FAQ, contact.
- The hero is open on the canvas (no panel): eyebrow chip, headline with one gradient
  phrase, sector line, intro, CTAs, highlights row, then the integrations strip —
  text wordmarks, muted at rest, brand color on hover.
- Motion is unchanged in spirit: `Reveal` fade-up on scroll (never hides prerendered
  content), CSS `.animate-rise` in the hero (on everything except the headline, which is the
  page's Largest Contentful Paint and must show on the first paint), 300ms hover transitions, and everything
  honors `prefers-reduced-motion`. No popups, no countdowns.

## Don'ts

- Don't put the gradient under or behind paragraphs, and don't set body copy in gradient text.
- Don't add a second accent hue; weight comes from size, the tint, or the featured border.
- Don't use pure black; text is `text-ink`, borders are `hairline`.
- Don't make anything glow at rest; shadows deepen only on hover/focus.
- Don't hide server-rendered content with framer-motion `initial={{ opacity: 0 }}`.
- Don't report booking outcomes in toasts; they live inside the dialog.
