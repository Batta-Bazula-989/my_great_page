---
target: homepage
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\Index.tsx"
target_fingerprint: "sha256:54cc9d0ade98b826e4cfd31d8d230fba0825372754ab4f7bb07d6218cd3e34cb"
target_path: "C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\Index.tsx"
timestamp: 2026-11-12T18-30-59Z
slug: src-pages-index-tsx
---
Method: dual-agent (A: homepage design review in browser · B: impeccable detect CLI + live overlay + technical audit). Reviewed en at 1536px and 390px (iframe), spot checks /de/ /pl/, light and dark schemes.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | Success says "Request sent" before a time is picked (BookingModal.tsx:362,374); no current-section state in nav |
| 2 | Match System / Real World | 3 | "Works with your current helpdesk" under a Lead/CRM headline; tokens/DPA/n8n unexplained |
| 3 | User Control and Freedom | 3 | Calendly link lost after the dialog closes (BookingModal.tsx:238) |
| 4 | Consistency and Standards | 2 | Dark mode breaks every .glass-chip; 7 labels for one booking action; Services and Recent work identical grids |
| 5 | Error Prevention | 3 | Phone code defaults to +1 in every locale |
| 6 | Recognition Rather Than Recall | 3 | Package context chip renders blank in dark mode |
| 7 | Flexibility and Efficiency | n/a | Single-visit Persuade page |
| 8 | Aesthetic and Minimalist Design | 3 | "30-minute call, then a written report" x5; "Free Health Check ... Free" |
| 9 | Error Recovery | 4 | Inline plain errors, focus to first invalid field, email/Telegram fallback |
| 10 | Help and Documentation | n/a | Persuade page; FAQ is objection handling |
| **Total** | | **24/32** | **Good (75%)** |

## Design Specificity Verdict
Content is authored (dated prices, Verify-on-Upwork, not-the-right-fit, two GDPR setups). Composition is the generic AI-SaaS template: 11 identical section headers (Section.tsx:20-32), Services and Recent work as identical 3-up icon-card grids, services H2 repeats the H1. "The Bright Ledger" never looks like a ledger; running costs hidden behind a toggle as bullets; the written report the CTA sells is never shown.
Detector: 27 advisories (13 color, 13 font-size, 1 radius); 14 in dead files, 9 intentional token literals, 4 real; .impeccable/design.json is stale (old dark palette). Overlay on homepage: 19 (2 real low-contrast in dark mode, gradient-text x11 and kicker x10 intentional, icon-tile-stack x6).

## Priority Issues
- [P1] Dark-mode .glass-chip override loses the cascade (index.css:261-275): hero eyebrow 1.1:1, running-costs toggle blank, package CTAs 2.3:1, dialog topic chip blank, article notes invisible, calculator tiles/tabs. -> /impeccable harden
- [P1] Cookie Decline is a no-op: GTM loads before any consent default (index.html:4-10), window.gtag never defined so CookieConsent.tsx:15-24 does nothing; GA4 hits observed after Decline. -> /impeccable harden
- [P1] "Support Automation from $400" lists chat+voice bots, routing, reports; separately $400-$1,350 in pricing.ts. Owner decision. -> /impeccable clarify
- [P1] Two buyers: H1/sector line/recent work/featured package = lead & CRM; fit/why-me/process step 4/hero highlight/FAQ #1/calculators = support. PRODUCT.md still names head of support primary. Owner decision. -> /impeccable clarify
- [P2] A11y: footer focus ring 1.77:1 (index.css:158); required not exposed (BookingModal.tsx:337); input borders 1.43:1; pricing names not headings (PricingSection.tsx:47,94,109,172); mobile menu no Escape (Navbar.tsx:94-141); language switcher aria-label mismatch (LanguageSwitcher.tsx:70); 320px overflow /de/ DataSection.tsx:22. -> /impeccable harden, /impeccable adapt

## Persona Red Flags
Jordan: H1 is a list of categories, jargon (tokens, DPA, n8n). Casey: ~16 screens long, pricing ~9 screens down, 3 CTAs at once in pricing, +1 phone default, ~18-target mobile menu. Head of support: third audience in H1, 0 of 3 recent-work cases are support, bundled "from $400", FAQ lacks unavailability/access/VAT, personal gmail contact. Riley: running-cost blocks uneven after expanding (PricingSection.tsx:32), process step titles misaligned (ProcessSection.tsx:15), mobile menu 8px sideways overflow (LanguageSwitcher.tsx:93).

## Minor Observations
"Free Health Check ... Free" banner; two plan descriptions repeat their first bullet; gradient "Good Fit" heading breaks the Gradient Rule (WhoForSection.tsx:13); no privacy line in the booking form; DESIGN.md still describes the removed integrations strip and old section order; dead template code and 12 unused deps.

## Questions to Consider
Who is the one buyer? What if the written report's skeleton were the centrepiece? What would pricing look like as an actual ledger, shown by default?
