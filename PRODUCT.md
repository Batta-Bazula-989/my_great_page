# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: heads of support or operations at small and mid-sized companies, mostly in the EU and US, whose teams already run on Zendesk, Freshdesk, Jira Service Management, Slack or similar tools. They are dealing with repetitive tickets, reports pulled by hand, and tools that don't talk to each other. They are deciding whether to buy a fixed-scope automation build from an outside specialist. They read the site in English or one of seven EU languages.

Explicitly not the audience (the site says so): teams that need a full-time support manager, want to replace their whole support stack, or expect AI to replace their team.

## Product Purpose

TascaLab is a one-person business run by Roman Zakharenko. It sells fixed-price customer-support automation:

- AI chat bots and voice bots that answer common messages and calls and hand the rest to the team
- AI ticket routing and categorization
- Automated reporting
- Custom integrations

Every call to action on the site leads to the free **Health Check**: a 30-minute call, then a written report with 2–3 concrete recommendations, the package and fixed price that fit, and the estimated monthly running costs. The site succeeds when a qualified support lead books a Health Check. The Upwork profile is the secondary route, for verified reviews and for hiring through Upwork.

Two supporting surfaces bring in search traffic and lead back to the Health Check:

- Fact-checked resource guides covering services, helpdesks, channels, basics, and guides and compliance
- Free calculators for AI support agent cost, WhatsApp Business cost and SLAs

## Positioning

- **Works inside the existing helpdesk.** The client doesn't switch platforms or replace their stack.
- **Fixed price, paid once, no retainer.** Prices are published openly.
- **Built by someone who has worked in support,** who has handled tickets and built reports by hand.
- **Honest scoping.** Roman says when something isn't worth automating. Automation handles the repetitive part and hands the rest to people. It is never framed as replacing the team.
- **The client owns everything.** By default the automation runs in the client's own accounts, with full documentation and handover, and no lock-in.
- **Running costs are shown openly.** Vendor fees are listed per package, with sources and dates.

## Operating Context

- **Buyer path:** visitors arrive from search (resource pages and calculators), paid ads (GTM, UTM capture in `src/utils/utm.ts`), Upwork and LinkedIn. They land on the homepage or a resource page and open the booking modal, which asks for name, work email, company, and preferred meeting method (Zoom by default, or Google Meet, phone, WhatsApp, Telegram). People who choose Zoom or Google Meet then go on to Calendly to pick a time. The lead goes to Roman's Telegram via `server/index.js`. After that come the call, the written report, a fixed-price package, delivery in 1–3 weeks, and 30 days of support.
- **Tools in the client's world:** Zendesk, Freshdesk, Jira Service Management, Slack, n8n (self-hosted or cloud), Make, AI providers (Anthropic Claude is quoted), Retell AI for voice, WhatsApp, Telegram, Messenger and Instagram.
- **EU buyers check GDPR before buying.** There are two setups:
  - Runs in the client's own accounts (the default)
  - Hosted by Roman under an Art. 28 data processing agreement

## Capabilities and Constraints

- **Packages and prices:** the single source of truth is `src/lib/pricing.ts`.

  | Package | Price |
  |---|---|
  | Starter Chat Bot | $400 |
  | Voice Bot | $1,350 |
  | Standard Chat Bot | $575 |
  | Ticket Routing & Categorization | $775 |
  | Automated Reports | $700 |
  | Custom Automation | from $1,200 |

  - Prices are shown in USD (en), EUR (de, fr, es, it, nl), PLN (pl) and SEK (sv), converted at the ECB rates of 16 October 2026.
  - Every package includes 30 days of support after delivery and basic documentation. Delivery takes 1–3 weeks.
  - Running costs are charged by the vendors and are not included in the package price.
- **Eight locales:**
  - English sits at the root; de, fr, es, it, nl, pl and sv live under `/<code>/`.
  - UI strings are in `src/i18n/<locale>.ts`, mirroring `en.ts`. SEO pages are in `src/content/pages/`.
  - Layouts must hold up with longer German, Dutch and Polish strings.
  - Package names and "Health Check" stay in English in every language.
- **Translation and fact rules:** these are in `src/content/TRANSLATING.md`.
  - Never add, soften or strengthen a claim.
  - Keep every number and date.
  - The build fails when a translation's structure differs from the English page (`scripts/check-content.mjs`, `scripts/check-numbers.mjs`).
- **Facts carry dates and sources,** for example "as of October 2026" and the vendor price footnotes.
- **Rendering:** pages are prerendered (`src/entry-server.tsx`, `scripts/prerender.mjs`) for SEO, and structured data lives in `index.html`. A Node server on Railway serves the build and `/api/booking`. Analytics run through GTM behind cookie consent.
- **Terminology:**
  - **Health Check:** the free 30-minute call plus written report
  - **Package:** a fixed-price build
  - **Running costs:** monthly vendor fees
  - **Hand the rest to your team:** the human handoff

## Brand Commitments

- **Name and people:** the name is TascaLab. The founder and only builder is Roman Zakharenko.
- **Assets:** logo at `public/favicon.svg`, portrait at `src/assets/profile.jpeg`, OG image at `public/og-image.png`.
- **Solo identity (confirmed binding):** TascaLab presents itself as one expert speaking in the first person ("I"). It is not a studio and does not use "we".
- **Voice:** plain, direct and free of hype, with straight answers ("No sales deck. No pressure.").
- **Address per language** is set in `TRANSLATING.md`: de Sie, fr vous, es tú, it tu, nl je, pl Ty, sv du.

## Evidence on Hand

- **Two 5-star Upwork reviews,** quoted word for word in their original language (`src/content/reviews.ts`) and linked to the Upwork profile so visitors can check them. They are never edited or translated.
- **Published vendor prices with sources:** the pricing footnote and the calculator source lists.
- **Founder portrait and profiles:** the portrait, plus Upwork, LinkedIn and Instagram profiles (`src/lib/links.ts`).
- **Confirmed absent (as of 2026-10-23):** case studies, publishable before/after results, client names or logos, and recordings of real builds. Do not invent any of these:
  - testimonials
  - client logos or "trusted by" rows
  - metrics such as ticket-deflection percentages
  - case studies

  The demo components in the repo (`FlowDemo`, `SupportChatDemo`, `AutomationFlowDemo`) are not rendered on any page today. If they are brought back, they must read as illustrations, not as client work.

## Product Principles

1. **Truth before polish.** Every claim, number and price must be checkable. If a claim can't be backed, cut it.
2. **Fit before pitch.** Say plainly who this is for and who it isn't for. The Health Check is offered as advice, not as a sales call.
3. **Support the team, never replace it.** Automation takes the repetitive part and hands the rest to people.
4. **Nothing to switch, nothing locked in.** The work happens in the client's own tools and accounts, and everything is handed over.
5. **One accountable person.** The site reads as Roman speaking. The proof is his own record, not borrowed authority.
