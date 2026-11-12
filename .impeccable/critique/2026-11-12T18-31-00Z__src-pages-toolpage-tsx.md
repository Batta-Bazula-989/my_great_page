---
target: calculator
total_score: 24
max_score: 40
na_heuristics: 
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\ToolPage.tsx"
target_fingerprint: "sha256:6c5ce2cc13a0c504a95c533b0d414f1f8452783ba7eda393a74290e792659b13"
target_path: "C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\ToolPage.tsx"
timestamp: 2026-11-12T18-31-00Z
slug: src-pages-toolpage-tsx
---
Method: dual-agent (A: calculator design review in browser · B: impeccable detect CLI + live overlay + technical audit). /tools/ai-support-agent-cost-calculator, /tools/sla-calculator, /de/ spot check; 1536px and 390px.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 2 | Silent clamp to 1,000,000; result off-screen while editing on mobile |
| 2 | Match System / Real World | 2 | "Estimated monthly cost" (i18n/tools/en.ts:58) over a 12-month total; token jargon |
| 3 | User Control and Freedom | 3 | No reset, no URL state |
| 4 | Consistency and Standards | 2 | Package select names (Starter/Standard Chat Bot) absent from homepage pricing; no aria-live here (SLA has one) |
| 5 | Error Prevention | 2 | Silent clamps, no plausibility guard |
| 6 | Recognition Rather Than Recall | 3 | Units per vendor; source links look like plain text |
| 7 | Flexibility and Efficiency | 2 | No presets, share, or URL state |
| 8 | Aesthetic and Minimalist Design | 3 | Clean; build card loudest element |
| 9 | Error Recovery | 2 | Empty input becomes $0; SLA error doesn't name the field |
| 10 | Help and Documentation | 3 | PRICES_AS_OF (aiAgentCost.ts:6) never rendered |
| **Total** | | **24/40** | **Acceptable (60%)** |

## Design Specificity Verdict
Tool itself is authored (named vendors, billing units, sources, honest never-cheaper state); shell is generic. Detector overlay: line-length x4 (real), nested-cards (deliberate callout), eyebrow (intentional). text-[11px] badge below the type ramp (AiAgentCostCalculator.tsx:151).

## Priority Issues
- [P1] Payback headline names the vendor with the fastest payback, usually the most expensive (AiAgentCostCalculator.tsx:41,127-131). Claim change, owner approval. -> /impeccable clarify
- [P1] Wrong period label on the hero figure (12-month total under "Estimated monthly cost"). -> /impeccable clarify
- [P2] Build and vendor bars on different tracks (AiAgentCostCalculator.tsx:124-126 vs 154-158). -> /impeccable layout
- [P2] Expert inputs always shown; result ~700px below inputs on mobile. -> /impeccable adapt, /impeccable distill
- [P2] Edge states and a11y: silent clamps, $0 empty state, no aria-live, focus ring primary/20 (fields.tsx:4), forced [color-scheme:dark] on SLA date/time inputs (fields.tsx:118), price date hidden. -> /impeccable harden

## Persona Red Flags
Jordan: token fields unexplained, wrong period label. Casey: result far from inputs, no persistent summary, CTA at ~3,600px. Sam: no live announcement, weak focus ring, unannounced new tabs. Head of support: payback line cherry-picks; price date hidden in a collapsed FAQ; "Standard Chat Bot" absent from the linked pricing.

## Minor Observations
Platform option truncated at 380px column; USD units beside EUR totals; SLA shows "Estimates only, not a quote."; no timezone; default date in the past unlabelled; /pl/ calculator overflows 22px at 320px.
