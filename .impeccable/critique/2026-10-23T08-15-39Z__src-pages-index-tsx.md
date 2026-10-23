---
target: homepage
total_score: 23
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 4
target_identity: "file:C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\Index.tsx"
target_fingerprint: "sha256:d1fd9601487caa9ba64fa4d28d3eab625b536adf406a06e1f6c6c9e949684b2e"
target_path: "C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\Index.tsx"
timestamp: 2026-10-23T08-15-39Z
slug: src-pages-index-tsx
---
Method: dual-agent (A: design review in the browser · B: Impeccable's automated design checker, code scan plus in-browser scan)
Target: homepage, src/pages/Index.tsx. Reviewed in English at 1536px and 390px widths, with spot checks of /de/ and /pl/.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | On the default Zoom path, the submit button never shows "Sending…", and after success the dialog just closes with no confirmation (BookingModal.tsx:350-357) |
| 2 | Match System / Real World | 3 | "Get Started" on a $1,350 package opens a free-call form; running costs are quoted per million AI tokens |
| 3 | User Control and Freedom | 2 | Keyboard focus is lost when the dialog closes; the open mobile menu can't be scrolled, so the language list can't be reached |
| 4 | Consistency and Standards | 2 | The nav "Free Health Check" scrolls to #contact while every other booking button opens the dialog; the dialog is a stock solid box, not part of the glass design |
| 5 | Error Prevention | 2 | Autofill switched off (:406); names containing a period rejected (:46); company field accepts 100 characters but validates at 50 |
| 6 | Recognition Rather Than Recall | 3 | The chosen package isn't shown in the dialog; running costs sit in six separate fold-outs and can't be compared |
| 7 | Flexibility and Efficiency | 2 | No autofill; the nav button takes two steps; three separate dialog copies don't share typed data |
| 8 | Aesthetic and Minimalist Design | 3 | Calm, but Services and Why Me are the same grid; the phone page is about 18 screens long |
| 9 | Error Recovery | 1 | A failed send shows the raw text "Failed to fetch" with no email or Telegram fallback |
| 10 | Help and Documentation | 3 | FAQ is solid; no payment terms, VAT, support after the included 30 days, or unavailability answer |
| **Total** | | **23/40** | **Acceptable** |

## Design Specificity Verdict
Design review: the content is clearly this business (prices with dated, sourced running costs; the Not-the-Right-Fit column; the two GDPR setups; checkable reviews). The visual language is the standard AI-SaaS kit: dark glass, background glows, one neon accent, status-dot label, centered label/title/lead stacks, a 4-up icon grid, a 3-column pricing grid, an FAQ accordion, a "Let's Talk" panel. The "Glass Switchboard" idea doesn't appear anywhere. The founder's portrait (src/assets/profile.jpeg) isn't used anywhere.
Automated checker: the code scan found 0 findings. That means it can't read the styling, which lives in Tailwind classes and CSS variables; it does not mean the page is clean. The in-browser scan found 84 findings on 74 elements. Patterns that agree with the design review: cyan neon text on dark [ai-color-palette] ×53 (about 25 real elements, because icons are counted once per drawn shape), the uppercase label above every heading [kicker-above-heading] ×8, gradient text ×2, the glowing dot [dark-glow] ×1. These are the same patterns DESIGN.md recorded as rules. Caught by the checker only: hero and contact intro text on glass at 3.9:1 at worst (18px regular weight needs 4.5:1); lines of 95–99 characters in the Health Check banner and the cookie bar. False positives: "cramped padding" ×8; the height-animation warning (from sidebar and toast CSS that isn't on this page); the hero chip read as a nested card. The pricing fold-outs really are nested containers.

## Priority Issues
- [P1] The booking dialog is the weakest step and every button leads to it: stock dialog, the chosen package isn't shown, no sending or success state, Calendly opens only after the request finishes (likely blocked as a pop-up on Safari), raw "Failed to fetch" error, no fallback, autofill off, names with periods rejected, focus lost on close. → /impeccable harden
- [P1] No person on a one-person business's page: the portrait is unused, the name is absent, and Why Me is the same 4-card grid as Services. Fix: a founder panel, a face next to the main button or in the dialog, an optional process strip. → /impeccable layout
- [P1] Phones: no reachable booking button for about 3,300px after the hero; the open menu (about 1,016px) can't scroll in a 660px screen; the cookie bar covers 22% of the screen; tap targets of 36px, 15px and 40px; the hero may stay at opacity 0 until the JavaScript loads (inferred from code, not checked in a production build). → /impeccable adapt
- [P1] Pricing: 7 equal choices that all open the same form; the order breaks the chat-bot ladder (Starter $400 → Voice $1,350 → Standard $575); "Get Started" implies buying; monthly cost exists only as per-token prices across six fold-outs; an open fold-out stretches its row; the AI cost calculator isn't linked. → /impeccable distill
- [P2] The hero is a keyword-list H1 in a template frame: it never says who is speaking, what a Health Check is, or "from $400"; the "Integrates with" chips look like buttons. → /impeccable clarify

## Persona Red Flags
- Jordan (first-time visitor): Health Check unexplained until about 2,400px down; "Get Started" suggests buying; per-token prices; an equally weighted Upwork button sends them off-site at the first decision.
- Riley (stress tester): "Test User Jr." rejected; company field 100 vs 50 characters; phone limit counts spaces and dashes; valid telegram.me and www.t.me links rejected; the dialog jumps as errors appear; the first Escape closes only the error pop-up; typed data doesn't carry between dialogs.
- Casey (one-handed, slow connection): the hero may be blank before loading finishes; no reachable booking button for about 5 screens; cookie bar covers 22%; tap targets of 15–40px; flag-and-code country picker; no feedback if the Calendly tab is blocked.
- Head of support at a 50-person company: no accountable person; the reviews are for developer contracts; nothing on the solo-vendor risk; no payment terms, VAT or price for support after 30 days; nothing on what the client must provide; no monthly cost to compare.

## Minor Observations
- Hard-to-read 12px fine print: "Integrates with" at 3.3:1 (HeroSection.tsx:109); running-cost note and footnote at 3.9:1 (PricingSection.tsx:103,110); data note similar (DataSection.tsx:60).
- Package and Health Check buttons have no visible focus ring (PricingSection.tsx:48-53,114-119); no skip link.
- Cookie text says "We use cookies…", breaking the first-person voice; the bar covers the footer's legal links.
- Spacing drift: py-[4.8rem] in four sections; header gaps vary; Reviews and Contact have no top divider line; Fit lists use 14px text.
- Footer headings use aqua as decoration, which breaks the Handoff Rule; the footer has no name and no way to book.
- Reviews: two links to the same URL; "Leave a review" speaks to past clients on a prospect page.
- Contact: Instagram is off-tone for a B2B buyer; the email address is hidden behind its label.
- Line breaks: Polish H1 leaves a one-letter "i" at a line end; German chip wraps "hält" alone; German H1 breaks with hyphens over 6 lines.

## Questions to Consider
- If Roman is the product, why is he the one thing the homepage doesn't show?
- Should pricing ask visitors to choose between 7 options now, or present packages as what a Health Check report might recommend?
- Where does anything visibly get routed, tagged or handed to a person?
- Do two short developer-contract reviews earn a full headline section?
