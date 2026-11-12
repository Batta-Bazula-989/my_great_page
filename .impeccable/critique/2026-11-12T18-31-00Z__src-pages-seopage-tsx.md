---
target: blog article
total_score: 23
max_score: 32
na_heuristics: 5,9
p0_count: 0
p1_count: 1
target_identity: "file:C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\SeoPage.tsx"
target_fingerprint: "sha256:4b83d92c12c47716ec638030580e6e1bc91d6263953a587066c09d6159bbbb2b"
target_path: "C:\\Users\\ZakharenkoRoman\\IdeaProjects\\my_great_page\\src\\pages\\SeoPage.tsx"
timestamp: 2026-11-12T18-31-00Z
slug: src-pages-seopage-tsx
---
Method: dual-agent (A: article design review in browser · B: impeccable detect CLI + live overlay + technical audit). /what-is-customer-support-automation, /ai-lead-scoring, /blog, /de/ spot check; 1536px and 390px.

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | TOC has no active state; no orientation below lg (SeoPage.tsx:238) |
| 2 | Match System / Real World | 3 | "At a glance" on a what-is query delivers Zendesk trivia (basics.ts:18-23) |
| 3 | User Control and Freedom | 3 | Anchors, breadcrumbs, FAQ fine |
| 4 | Consistency and Standards | 3 | "Our guide..." breaks solo-I rule (basics.ts:109 + de); help section in third person |
| 5 | Error Prevention | n/a | No inputs on this surface |
| 6 | Recognition Rather Than Recall | 2 | Sources uncited inline; no mobile TOC on an 8,790px page |
| 7 | Flexibility and Efficiency | 3 | At-a-glance, TOC, FAQ for skimmers |
| 8 | Aesthetic and Minimalist Design | 3 | ~96-107 cpl; five mid-flow "Read next" rows plus duplicate Related cards |
| 9 | Error Recovery | n/a | No error states |
| 10 | Help and Documentation | 3 | FAQ, sources, related reading |
| **Total** | | **23/32** | **Good (72%)** |

## Design Specificity Verdict
Content authored (fact-check dates, vendor sources, "not a TascaLab case study"); shell is a generic docs/blog template; Roman never appears; blog index has an sr-only H1, 7 chips, 35 identical cards. Detector overlay: line-length x10 (real), gradient eyebrow (intentional), straggler x1. Dark-mode note callouts (SeoPage.tsx:64) ~1.02:1 via the .glass-chip cascade bug.

## Priority Issues
- [P1] Health Check handoff is late, generic and faceless: "How TascaLab can help" is plain third-person with no CTA; FAQ precedes CTA; CTA at ~76% depth on mobile; heading "Want this set up for your team?" assumes buying intent. -> /impeccable layout, /impeccable clarify
- [P2] ~11 exits around one reading path: 5 mid-flow Read-next rows (SeoPage.tsx:157-171) + Related duplicates (:257-269). -> /impeccable distill
- [P2] Measure and orientation: 744px prose (~96-107 cpl), no TOC active state, no TOC below lg. -> /impeccable typeset, /impeccable adapt
- [P2] Voice: "Our guide" (basics.ts:109, de "unser Leitfaden"). -> /impeccable clarify

## Persona Red Flags
Jordan: first box is Zendesk timing trivia; APIs/webhooks unexplained. Casey: no TOC, CTA at 76% depth, types table clips its most useful column with no scroll cue (SeoPage.tsx:37). Sam: no aria-current on TOC, new-tab links unannounced. Head of support from Google: answer is there, but verifying needs scanning 8 uncited sources.

## Minor Observations
31 of 35 blog cards share one date; blurbs repeat titles; API paths not monospace; sticky TOC slides under nav at article end; CTA icons without aria-hidden (SeoPage.tsx:208-210).
