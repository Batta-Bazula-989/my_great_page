---
name: TascaLab
description: Fixed-price customer-support automation from one specialist, on dark liquid glass with one aqua signal.
colors:
  handoff-aqua: "hsl(175 80% 50%)"
  handoff-aqua-deep: "hsl(175 70% 40%)"
  relay-cyan: "hsl(195 80% 45%)"
  night-ink: "hsl(220 20% 6%)"
  console-slate: "hsl(220 18% 10%)"
  panel-graphite: "hsl(220 15% 15%)"
  muted-steel: "hsl(220 15% 18%)"
  hairline: "hsl(220 15% 20%)"
  frost-white: "hsl(210 20% 95%)"
  fog-grey: "hsl(210 15% 55%)"
  alert-red: "hsl(0 84.2% 60.2%)"
  glass-edge: "hsl(210 40% 98% / 0.12)"
  nav-glass: "hsl(220 20% 8% / 0.72)"
  bloom-violet: "hsl(260 80% 65%)"
  bloom-cyan: "hsl(195 85% 55%)"
  bloom-magenta: "hsl(320 70% 60%)"
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
  lead:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.2em"
  button:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.75
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
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
components:
  button-primary:
    backgroundColor: "{colors.handoff-aqua}"
    textColor: "{colors.night-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 40px"
    height: "56px"
  button-primary-sm:
    backgroundColor: "{colors.handoff-aqua}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.full}"
    padding: "0 16px"
    height: "36px"
  button-glass:
    textColor: "{colors.frost-white}"
    typography: "{typography.button}"
    rounded: "{rounded.full}"
    padding: "0 40px"
    height: "56px"
  button-package:
    textColor: "{colors.handoff-aqua}"
    rounded: "{rounded.full}"
    padding: "12px 0"
    width: "100%"
  button-package-hover:
    backgroundColor: "{colors.handoff-aqua}"
    textColor: "{colors.night-ink}"
  chip:
    textColor: "{colors.frost-white}"
    rounded: "{rounded.full}"
    padding: "6px 16px"
  card-service:
    rounded: "{rounded.card}"
    padding: "24px"
  card-glass:
    rounded: "{rounded.panel}"
    padding: "32px"
  panel-hero:
    rounded: "{rounded.hero}"
    padding: "56px"
  input-field:
    textColor: "{colors.frost-white}"
    rounded: "{rounded.lg}"
    padding: "10px 12px"
  input-booking:
    textColor: "{colors.frost-white}"
    rounded: "{rounded.lg}"
    padding: "0 12px"
    height: "44px"
  dialog-booking:
    rounded: "{rounded.panel}"
    padding: "28px"
    width: "448px"
  nav-capsule:
    backgroundColor: "{colors.nav-glass}"
    rounded: "{rounded.nav}"
    height: "56px"
---

# Design System: TascaLab

## Overview

**Creative North Star: "The Glass Switchboard"**

The board is dark and the panels are clear. A single aqua signal shows where things go. The site behaves the way good support routing should: every message lands in the right place, nothing gets lost, and nothing calls attention to itself. Content sits on translucent glass panels over a near-black blue canvas. Four soft color fields drift behind the glass so it has something to refract. Against that quiet backdrop, one color (Handoff Aqua) marks what matters: the price, the icon, the section label, the button that books the Health Check.

The mood is **calm, precise and trustworthy**. The glass and glow create atmosphere and are never a spectacle. Surfaces are generous and soft (pill buttons, 24–32px corners, gentle lift on hover), but the typography is exact: Space Grotesk headings in tight tracking, Outfit body text at a relaxed 1.625 line height, and uppercase aqua labels spaced at 0.2em. Density is low. Sections are centered, headers stack label, title, then lead paragraph, and grids are capped at 1152px so nothing sprawls.

The system speaks for one person, and shows him. Roman's face and name appear in the hero, the founder panel, the contact panel and the booking dialog. The system never needs logo walls, stock imagery or invented proof to feel credible. Its credibility comes from legibility: clear prices, clear packages, clear running costs, all on panels that look as calm as a well-run queue. The one place the switchboard is literally drawn is the process line: a single aqua line running through five stops, from the free Health Check to 30 days of support.

**Key Characteristics:**
- Dark night-ink canvas with fixed ambient color fields behind it
- Liquid-glass panels: tinted translucent fill, 1px frosted edge, inner top highlight, deep soft shadow
- One accent color (Handoff Aqua), used for signals and actions, never for paragraphs
- Space Grotesk for headings and numbers, Outfit for reading
- Pill-shaped actions and large-radius containers that grow rounder as they grow larger
- Motion is a soft fade-up on reveal and a small lift on hover; glow appears only as a response

## Colors

A near-monochrome night palette with a single luminous aqua signal and background-only color fields.

### Primary
- **Handoff Aqua** (`hsl(175 80% 50%)`, ≈ #19e6d4): the signal color. It is used for section labels, icons, prices, star ratings, list check marks, link text, focus rings and the solid booking button. On Night Ink it reaches 12.2:1 contrast, so it can carry small text. Text on an aqua fill is Night Ink, never white.
- **Handoff Aqua Deep** (`hsl(175 70% 40%)`, ≈ #1fada1): the stock component accent, used for highlighted rows in menus and selects. It is not a second brand color.
- **Relay Cyan** (`hsl(195 80% 45%)`, ≈ #17a1cf): exists only as the far end of the aqua-to-cyan gradient (135°) used for gradient text.

### Neutral
- **Night Ink** (`hsl(220 20% 6%)`, ≈ #0c0e12): the page canvas, also the text color on aqua buttons. A blue-black, never pure #000.
- **Console Slate** (`hsl(220 18% 10%)`, ≈ #15181e): solid card and popover surfaces where glass isn't used (dialogs, dropdowns).
- **Panel Graphite** (`hsl(220 15% 15%)`): secondary fills and ghost-button hover backgrounds.
- **Muted Steel** (`hsl(220 15% 18%)`): muted fills and the scrollbar thumb.
- **Hairline** (`hsl(220 15% 20%)`): default borders and input strokes on solid surfaces.
- **Frost White** (`hsl(210 20% 95%)`, ≈ #f0f2f5): primary text at 17:1 on Night Ink. Long reading text often steps down to 80–90% opacity for a softer page.
- **Fog Grey** (`hsl(210 15% 55%)`, ≈ #7b8c9d): secondary text, descriptions, meta, captions. Contrast is 5.6:1 on Night Ink and 5.2:1 on Console Slate. Don't take it below 70% opacity for anything that needs to be read.
- **Glass Edge** (`hsl(210 40% 98% / 0.12)`): the 1px frosted border on every glass surface. Inside panels, dividers use the same idea at white 10% and white 5%.
- **Nav Glass** (`hsl(220 20% 8% / 0.72)`): the fill of the floating navigation once the page scrolls.
- **Alert Red** (`hsl(0 84.2% 60.2%)`): form errors and required-field marks. It also appears at 60% opacity on the "Not the Right Fit" crosses. It is never decorative.

### Ambient Fields (background only)
- **Bloom Violet** (`hsl(260 80% 65%)`), **Bloom Cyan** (`hsl(195 85% 55%)`), **Bloom Magenta** (`hsl(320 70% 60%)`), plus Handoff Aqua: four radial color fields fixed behind the page at 10–22% opacity (aqua top-left, violet top-right, cyan bottom-right, magenta bottom-left). They give the glass something to refract.

### Named Rules
**The Handoff Rule.** Handoff Aqua marks what to act on or read first: a price, an icon, a label, the booking button. Paragraph text is never aqua.

**The Backdrop-Only Rule.** Violet, magenta and the cyan bloom live only in the fixed backdrop. They never touch text, borders, icons or controls.

**The One Gradient Rule.** Aqua-to-cyan gradient text marks at most one phrase per section (today: the hero's highlighted words and the "Good Fit" heading). It is never used for body copy, buttons or whole headings.

## Typography

**Display Font:** Space Grotesk (with sans-serif fallback), weights 400–700
**Body Font:** Outfit (with sans-serif fallback), weights 300–700

**Character:** Space Grotesk brings an engineered, slightly technical edge to headings and numbers. Outfit's round geometry keeps reading text friendly and open. Together they read as "precise, but a person wrote this." Both load from Google Fonts without blocking the first paint, so text appears in the fallback font first.

### Hierarchy
- **Display** (700, 2.1rem → 2.25rem at 640px → 3rem at 768px → 3.75rem at 1024px, line-height 1.08, tracking −0.025em): the hero H1 only. One phrase may take the gradient. The 2.1rem phone step exists for the long German and Polish headlines.
- **Headline** (700, 1.875rem → 2.6rem at 768px, line-height 1.25, tight tracking): every section title (`.section-title`). Page H1s on resource and tool pages use 1.875rem → 3rem.
- **Title** (700, 1.125–1.25rem, line-height ~1.4): card, package and panel headings. FAQ questions drop to 1rem in Space Grotesk at medium weight.
- **Price** (700, 2.25rem, line-height 1, Space Grotesk, Handoff Aqua): package prices. The Health Check's "Free" uses 1.875rem.
- **Lead** (400, 1.125rem, line-height 1.625, Fog Grey): one intro paragraph under a section title, capped at 672px (`max-w-2xl`).
- **Body** (400, 1rem, line-height 1.625): descriptions, list items, answers. Mostly Fog Grey, with Frost White at 80–90% for primary reading text.
- **Label** (600, 0.875rem, letter-spacing 0.2em, UPPERCASE, Handoff Aqua): the section label above every title (`.section-eyebrow`). Footer column headings use the same shape in Space Grotesk at 0.18em.
- **Meta** (400, 0.75–0.875rem, Fog Grey): dates, notes, footnotes, "one-time · Delivery 1–3 weeks" lines.

### Named Rules
**The Two Voices Rule.** Space Grotesk is for headings, prices and numbers (calculator outputs use tabular figures). Outfit is for everything people read. Never set a paragraph in Space Grotesk or a heading in Outfit.

**The Eyebrow Rule.** Every homepage and index section opens with the same three-step header, centered: an aqua uppercase label, then the headline, then an optional lead. The `Section` component (`src/components/Section.tsx`) renders it. Do not invent new header shapes per section.

Headings use `text-wrap: balance` and longer paragraphs use `text-pretty`. In Polish, one-letter words stay with the following word (`keepShortWords` in `src/lib/typography.ts`).

## Layout

The page is a single centered column of sections on Tailwind's 4px spacing scale.

- **Gutters and widths:** the container has a 16px side gutter (`px-4`). Content widths step down by purpose:
  - 1152px (`max-w-6xl`) for card grids, pricing and the navigation
  - 896px (`max-w-4xl`) for two-up comparisons (Fit, Reviews) and the hero panel
  - 768px for the contact panel
  - 672px for the FAQ and lead paragraphs
- **Section rhythm:** every section sits 64px apart on mobile and 80px from 768px (`py-16 md:py-20`). A section header sits 40px (48px from 768px) above its content. The `Section` component enforces this; don't hand-roll section padding.
- **Section dividers:** every section starts with a 1px hairline across the top that fades in from transparent to Handoff Aqua 30% and back out. This replaces boxed section backgrounds.
- **Homepage order:** hero, services, how it works, fit, the founder (Why Me), pricing, data, reviews, FAQ, contact.
- **Grids:**
  - Services: 1 column, 2 from 640px, 4 from 1024px, 20px gap
  - Pricing: grouped by job (Chat & voice bots / Tickets & reports / Custom work), cheapest first within each group. From 1024px the chat group fills a row of three, and tickets (two cards) share the next row with custom (one card). Each group has a small Space Grotesk heading followed by a hairline. 24px gap.
  - Process: one row of five stops from 1024px; a vertical list with the line on the left below that.
  - Fit and Reviews: 1 column, 2 from 768px, 24–32px gap
  - Cards in a row match height (`h-full`)
- **Hero:** at least 92% of the small-viewport height, vertically centered, with one large glass panel and an "Integrates with" chip row underneath.
- **Reading pages** (resources, guides): an article column plus a 240px sticky sidebar from 1024px, inside a 1024px frame. Each one opens with a glass header panel.
- **Fixed navigation:** the nav floats 12px from the top. Scroll padding is 5rem so anchor targets clear it. All six links appear only from 1280px. Below that they collapse into a menu, and a "Health Check" booking pill stays visible next to the menu button.
- **Phone booking bar:** below 768px on the homepage, a floating booking pill appears at the bottom once the hero has scrolled away, and hides again at the contact section. It waits for the cookie choice, so the two bars never stack.
- **Breakpoints** (Tailwind defaults): 640, 768, 1024, 1280, and 1400px (container maximum).

## Elevation & Depth

Depth comes from **glass layering**, not stacked drop shadows. Every surface at rest is a translucent white tint over the night canvas, made up of:
- a 145° fill from white 10% down to white 3.5%
- a 1px Glass Edge border
- an inner highlight along the top edge
- one long, soft, dark shadow underneath

The hero, page-header, founder and contact panels use a slightly stronger tint (14% to 5.5%). The booking dialog uses the densest glass (`.glass-solid`, a 94–92% opaque slate gradient) because it sits over the dimmed page and has to stay readable. The only live backdrop blur is on the floating chrome (the navigation and the phone booking bar), because only those sit over changing content. Cards sit on a smooth gradient where blur would look identical and cost a re-blur on every scroll frame.

### Shadow Vocabulary
- **Glass highlight** (`box-shadow: inset 0 1px 0 hsl(0 0% 100% / 0.18), inset 0 -1px 0 hsl(0 0% 100% / 0.04)`): the light catching the top edge of every glass surface and chip.
- **Glass shadow** (`box-shadow: 0 10px 40px -10px hsl(220 40% 2% / 0.6)`): the single resting shadow under glass panels and cards.
- **Hover glow** (`box-shadow: 0 0 28px hsl(175 80% 50% / 0.15)`, with the border shifting to aqua 35%): the response on a hovered glass card or FAQ item.
- **Action glow** (`box-shadow: 0 0 60px hsl(175 80% 50% / 0.2)`): the halo on a hovered aqua button.
- **Nav frost** (`backdrop-filter: blur(20px) saturate(170%)`): navigation only.

### Named Rules
**The Glow-Is-a-Response Rule.** Surfaces are calm at rest, and aqua glow appears only on hover or focus. The single exception is the small glowing status dot in the hero label.

**The One Live Blur Rule.** Only floating chrome (the navigation and the phone booking bar) uses `backdrop-filter`. Every other surface imitates frosted glass with a tinted gradient.

## Shapes

The form language is soft and tactile: actions are pills, and containers are smooth stones whose corners grow with their size.

- **Pills** (fully rounded): every button, chip, tool tag, segmented control and progress bar.
- **Icon tiles:** 12px corners for a 44px tile, 16px for the 56px Health Check tile.
- **Inline containers:** 16px corners for FAQ items, the running-costs disclosure, tables and callouts.
- **Cards:** 24px for service cards and calculator panels, 28px for pricing, fit and review cards and the Health Check banner.
- **Hero panels:** 32px for the hero, the contact panel and page headers. The floating nav capsule uses 22px.
- **Small UI** in the stock dialogs, selects and inputs uses the base scale: 12px, 10px, 8px.
- **Borders** are always 1px, and on glass they are frosted white, never solid grey. The only 2px stroke is the unused `heroOutline` button variant.

**The Pebble Rule.** A larger container gets a larger radius: 12px for a tile, 16px for an inline block, 24–28px for a card, 32px for a panel. Never put a sharp-cornered box on the glass.

## Components

### Buttons
Soft, tactile and confident: pills that lift slightly when pointed at.
- **Shape:** fully rounded pill.
- **Primary (book the Health Check):**
  - Handoff Aqua fill, Night Ink text, Outfit semibold.
  - Hero and contact size is at least 56px tall: 24px side padding and 16px text on phones, 40px and 18px from 640px. Long translations wrap inside the pill. Nav size is 36px tall with 16px padding; the smaller-screen nav pill is 40px.
  - Usually leads with a calendar icon.
  - Every booking button is a `BookingButton` that opens the one shared dialog (see Booking Dialog).
- **Hover / active / focus:**
  - Hover adds the Action glow and scales to 1.05 over 300ms. Pressed scales to 0.95. Inside the dialog, the nav pill, the phone booking bar and the cookie bar, primary buttons don't scale.
  - Focus shows a 2px aqua ring offset by 2px from the canvas. Elements without their own ring get the global `:focus-visible` outline (2px aqua, 2px offset).
- **Glass (secondary):** a glass fill with Frost White text. Hover adds a white 10% wash plus the same scale. Used for "Connect on LinkedIn" and the dialog's Close action.
- **Outline (stock):** a transparent fill with a 1px Hairline border. Hover fills it with Panel Graphite. Used as a pill for "Decline" in the cookie bar.
- **Package button** (`variant="package"`):
  - At rest: a full-width outlined chip pill with aqua text, at least 48px tall. The label ("Ask about this in a Health Check") wraps if a language needs it.
  - On hover it fills with aqua and the text turns Night Ink (200ms).
- **Text links:** aqua with an underline on hover, at least 44px tall where they stand alone. Outbound links end with a small up-right arrow. The hero's "Reviews on Upwork" is a text link (Frost White 85%, filled aqua star), deliberately lighter than the booking button.

### Chips
- **Style:** a glass tint with only the top highlight (no drop shadow), Frost White text at 80%, 6px × 16px padding, 14px text.
- **Use:** the hero status label (with a glowing aqua dot), the "About: <package>" topic in the booking dialog, the running-costs switch, and icon tiles. Chips are never interactive filters. The "Integrates with" tool names are plain text separated by aqua dots, not chips, so they don't look like buttons.

### Cards / Containers
- **Corner style:** 24–28px for cards and 32px for hero-level panels (see Shapes).
- **Background:** glass fill. Hero-level panels use the stronger tint.
- **Shadow strategy:** Glass highlight plus Glass shadow at rest, Hover glow on hover (see Elevation & Depth).
- **Border:** 1px Glass Edge, which shifts to aqua 35% on hover.
- **Internal padding:** 20–24px for service cards, 28–32px for pricing, review and fit cards, 40–56px for hero panels.
- **Hover motion:** pricing cards rise 6px, fit and data cards rise 4px. Service cards change only their glow.
- **Never nest a bordered box inside a card.** Sub-sections inside a card are separated by a white 10% hairline.

### Pricing Card (signature)
This card is the heart of the page:
- **Content, top to bottom:** the package name, a one-line description, the price in Space Grotesk aqua with tabular figures, then the "one-time · Delivery 1–3 weeks" meta line with a calendar icon.
- **What's included:** a check-mark list in Frost White 85%.
- **Running costs:** hidden by default. One switch above the grid ("Show monthly running costs") opens them on every card at once, so they can be compared side by side and rows stay even. Inside the card they sit below a hairline divider, under a receipt-icon label. The provider note and the price footnote appear once, above and below the grid, not on every card. Next to the switch, links point to the AI support agent cost and WhatsApp Business cost calculators.
- **Action:** the package button at the bottom. It opens the booking dialog with the package and its price shown.
- **Health Check banner:** sits above the grid as a wide stronger-glass panel, with a stethoscope icon tile, the "Free" price in aqua, and a solid primary button.

### Booking Dialog (signature)
Every booking button on a page opens the same dialog, so what the visitor typed survives if they close it and open it again from another section.
- **Surface:** the densest glass (`.glass-solid`) with 28px corners, 448px wide, over a Night Ink 80% overlay. It is anchored near the top (12px on phones, 8vh above 640px) rather than centered, so it doesn't jump while validation messages come and go. It scrolls inside if it's taller than the screen. The close button is a 40px round target.
- **Header:** Roman's 48px round portrait, then the title in Space Grotesk 20px bold, then "A 30-minute call with me, Roman, then a written report." in Frost White 75%.
- **Topic:** when opened from a package, a chip under the header reads "About: Voice Bot · $1,350".
- **Fields:** see Inputs. The submit button is full-width; under it a Fog Grey line says what happens next (pick a time in the calendar, or "I'll contact you within 24 hours").
- **Sending:** the button reads "Sending…" and is disabled.
- **Failure:** an inline Alert Red panel (red 10% fill, red 40% border) explains in plain words and offers the email address and Telegram as fallbacks. Typed data is kept. There is no pop-up toast.
- **Success:** the dialog itself changes to "Request sent" with an aqua-tinted confirmation. Zoom and Google Meet bookings get a real "Open my calendar" link (no `window.open`, which Safari blocks after a network request). Focus moves to that link, or to Close.
- **Closing** returns focus to the button that opened the dialog.

### Founder Panel (signature)
- One stronger-glass panel, at most 1024px wide. On the left: a 4:5 portrait with 24px corners (at most 272px wide), then the name in Space Grotesk, the role in Fog Grey, and a LinkedIn text link. On the right: the four promises as a list of icon tiles with title and description, separated by hairlines. No cards.
- It stacks on phones with the portrait centered.

### Process Line (signature)
- Five numbered stops on one aqua line: a horizontal row from 1024px (the line runs from the center of the first stop to the center of the last), and a vertical list with the line on the left below that. The line fades from aqua 60% to 10%.
- Stops are 40px circles: the first (the free Health Check) is solid aqua, and the rest are Night Ink with an aqua 40% ring and aqua numbers in tabular figures.
- Each stop has a Space Grotesk title and a short Fog Grey description.

### Inputs / Fields
- **Glass field** (calculators and the booking form):
  - Rounded 12px, white 4% fill, white 10% border, Frost White text. Booking fields are 44px tall, with 16px text on phones (no iOS zoom) and 14px from 768px.
  - Focus moves the border to aqua 60% and adds a 2px aqua ring.
  - Units sit inside the right edge in Fog Grey.
  - Sliders use the aqua accent color, and their values show in Space Grotesk tabular figures.
- **Error:** the border turns Alert Red, with a 14px Alert Red message below, wired up with `aria-invalid` and `aria-describedby`. Errors appear when a filled field is left, or after a submit attempt. Tabbing through empty fields never paints the form red. On submit, focus goes to the first invalid field.
- **Autofill** is on (name, email, organization, national phone number).
- **Labels:** 14px medium Frost White at 85%, sitting 6px above the field. Required fields show a red asterisk. Hints are 12px Fog Grey below.

### Navigation
- **Style:** a floating capsule 12px below the top edge, 1152px wide, 56px tall, with 22px corners.
- **Transparent at the top:** it starts with no fill or border. After 50px of scrolling it becomes Nav Glass with frost blur, the glass edge and the glass shadow (300ms transition).
- **Links:** Outfit medium in Fog Grey, turning Frost White on hover. They are followed by the Tools menu, the language switcher and a small primary pill for "Free Health Check".
- **Smaller screens (below 1280px):** the booking pill reads "Health Check" with a calendar icon, next to a 44px menu button. The menu expands the capsule downward and scrolls inside when it's taller than the screen. Links (44px rows) fade in from the left with a 50ms stagger, then the tools list and the language list. Below 380px the "TascaLab" wordmark gives way to the pill; the logo stays.
- **Skip link:** the first focusable element, "Skip to content", jumps to `#main`.

### Phone Booking Bar
- Below 768px on the homepage only: a full-width primary pill (48px) inside a Nav Glass capsule, floating 12px above the bottom edge (or the safe area). It slides up once the hero has scrolled away and hides again at the contact section and footer. It never shows while the cookie bar is still waiting for a choice.

### FAQ Item
- **Style:** a glass card with 16px corners and 24px side padding. The question is in Space Grotesk and the answer is 16px Fog Grey at line height 1.625.
- **Behavior:** opens with a 200ms accordion transition and takes the Hover glow on hover. Reading pages use the same look on native `<details>`.

### Section Header (signature)
- An aqua uppercase label, then the headline in Space Grotesk, then an optional Fog Grey lead. Rendered by `Section`.
- Centered, with a fading aqua hairline across the top of the section.
- It is the most repeated pattern on the site and should stay identical everywhere.

## Do's and Don'ts

### Do:
- **Do** put content on glass: the white 10% to 3.5% fill, the 1px Glass Edge, the top highlight, and the glass shadow. Use the stronger tint only for the one hero-level panel in view.
- **Do** keep Handoff Aqua for signals: labels, icons, prices, ratings, links, focus rings and the booking pill.
- **Do** keep solid aqua pills for booking the Health Check, plus the submit and accept actions that complete a step. Package buttons stay outlined until hover, and secondary actions are glass.
- **Do** open every section with the Section Header (aqua label, then Space Grotesk title, then optional lead) and the fading aqua hairline.
- **Do** scale corner radius with container size: 12, 16, 24–28 and 32px. Every action is a pill.
- **Do** reveal below-the-fold content with `Reveal` (a soft fade-up: 24px of travel, 0.45s ease-out, 60–100ms stagger, played once). It renders everything visible on first paint and only hides elements that start below the viewport after hydration. The hero uses the CSS `.animate-rise` stagger (20px, 0.5s, 80ms steps) so the pre-rendered page shows before JavaScript loads. The glass hover easing is `cubic-bezier(0.32, 0.72, 0, 1)` over 300ms.
- **Do** honor `prefers-reduced-motion`. The CSS animation utilities switch off, `Reveal` skips its animation, and `MotionConfig reducedMotion="user"` covers the remaining framer-motion movement.
- **Do** keep Roman visible wherever the visitor decides: the hero call note, the founder panel, the contact panel and the booking dialog all carry his face. Use `roman-avatar.jpg` (112px square) for avatars and `roman-portrait.jpg` (560×700) for the panel, never the 343 KB, 1066×1600 original.
- **Do** make every booking action a `BookingButton`, so they all open the one shared dialog.
- **Do** keep touch targets at least 44px: menu rows, standalone links, the menu button and form fields.
- **Do** design for the longest locale. German, Dutch and Polish strings run long, so buttons must wrap or shrink gracefully, and the six-link nav needs the full 1280px before it can show inline.

### Don't:
- **Don't** put violet, magenta or bloom cyan on text, borders, icons or controls. They belong only to the backdrop.
- **Don't** make anything glow at rest. Glow is a hover or focus response (the hero status dot is the one exception).
- **Don't** add `backdrop-filter` to cards or panels. Only floating chrome (the navigation and the phone booking bar) blurs.
- **Don't** hide server-rendered content with framer-motion `initial={{ opacity: 0 }}`. The pages are pre-rendered, and that ships invisible HTML until JavaScript loads. Use `Reveal` or the CSS entrance instead.
- **Don't** report booking outcomes in toasts. Sending, failure and success all live inside the dialog, next to the form.
- **Don't** nest bordered boxes inside cards. Separate sub-sections with a hairline.
- **Don't** fade small text: fine print stays at full Fog Grey (12–14px), and leads on glass panels use Frost White 75–80%, because Fog Grey drops to about 3.9:1 on the lighter glass.
- **Don't** use gradient text on more than one phrase per section, and never on a full headline, button or paragraph.
- **Don't** use pure black, pure white or flat grey borders on glass. The canvas is Night Ink, text is Frost White, and glass edges are frosted white at 12%.
- **Don't** put sharp or small-radius boxes on the glass canvas, and don't make an action rectangular.
- **Don't** revive the unused legacy utilities: `.card-hover-glow`, which hard-codes `rgb(47, 52, 63) !important`, plus `.bg-gradient-hero`, `.animate-float` and the Vite boilerplate in `src/App.css`.
- **Don't** add a second accent hue for emphasis. If something needs more weight, use size, weight or the stronger glass, not a new color.
