# Translating TascaLab landing pages

Source of truth: the English files in `src/content/pages/<category>.ts` (type `SeoPageContent`).
Target: `src/content/pages/<locale>/<category>.ts`, exporting the SAME variable name as the English file
(`servicesPages`, `helpdeskPages`, `channelPages`, `basicsPages`, `guidePages`) typed `TranslatedPage[]`
(see `src/content/types.ts`). Keep the pages in the same order as English.

## Fields
| Field | Rule |
|---|---|
| `key` | The English page's `slug`, unchanged. Links translations together. |
| `slug` | NEW localized URL slug: lowercase ASCII kebab-case, keyword-first in the target language, ≤ 60 chars, unique in the locale. Transliterate (German ä→ae, ö→oe, ü→ue, ß→ss; Swedish å→a, ä→a, ö→o; Polish ą→a, ć→c, ę→e, ł→l, ń→n, ó→o, ś→s, ź→z, ż→z; é→e, ñ→n, ç→c…). Keep product names (zendesk, n8n, whatsapp). |
| `category`, `updated`, `related` | Copy unchanged (`related` keeps the English slugs). |
| `sources` | Copy unchanged — same labels, same URLs, same order (they name English documents). |
| `primaryKeyword` | The natural search phrase a person in that country would type. |
| `title` | ≤ 60 characters, keyword first. Rewrite concisely; do not add claims. |
| `description` | 120–160 characters. |
| `navLabel` | ≤ 34 characters. |
| everything else | Translate: `h1`, `intro`, `keyFacts`, section `heading`s, every block's text/items/table head+cells/caption, `faqs`. |

Structure must mirror English exactly: same number of keyFacts, sections, blocks per section (same block
types in the same order), list items, table columns/rows, FAQs. The build fails otherwise.

## Facts — non-negotiable
- Translate faithfully. Do NOT add, remove, soften or strengthen any claim — not even true facts you know
  (e.g. national laws, extra limits, examples). Do NOT drop caveats like "as of October 2026" or "not legal advice".
- Keep every number, limit, date, article number, error code, product name and API/field name exactly.
  Write dates in the target language's format (e.g. de "2. August 2026", fr "2 août 2026",
  es "2 de agosto de 2026", it "2 agosto 2026", nl "2 augustus 2026", pl "2 sierpnia 2026", sv "2 augusti 2026").
- Product UI labels, menu names, settings and button names (e.g. 'Notify webhook', 'Hours since',
  'HUMAN_AGENT', 'Get Started') stay in English, in quotes, as in the source.
- Prices stay in USD, using the target language's number format, e.g. de/es/it/nl "1.100–1.600 USD",
  fr/pl/sv "1 100–1 600 USD".
- Official EU names in the target language: GDPR → de DSGVO, fr RGPD, es RGPD, it GDPR, nl AVG, pl RODO,
  sv GDPR (dataskyddsförordningen);
  "Regulation (EU) 2024/1689" → de "Verordnung (EU) 2024/1689", fr "règlement (UE) 2024/1689",
  es "Reglamento (UE) 2024/1689", it "regolamento (UE) 2024/1689", nl "Verordening (EU) 2024/1689",
  pl "rozporządzenie (UE) 2024/1689", sv "förordning (EU) 2024/1689";
  "Directive (EU) 2019/882" likewise (Richtlinie / directive / Directiva / direttiva / Richtlijn /
  dyrektywa (UE) / direktiv (EU)).

## Voice
Plain, direct, natural — written for a support/operations lead in that country, not a literal word-for-word
rendering. Address: de "Sie", fr "vous", es "tú", it "tu", nl "je", pl "Ty" (informal, as in Polish SaaS
copy; imperatives like "Zarezerwuj"), sv "du". Use the terms local support teams use
(e.g. de "Ticket", "Helpdesk", "Weiterleitung/Routing"; keep "Chatbot", "SLA", "Webhook", "API").

## Strings
Plain text, no Markdown/HTML. Valid TypeScript strings with straight double quotes; escape inner `"` as `\"`
(or use typographic quotes „…“ / « … » / “…” where natural for the language).

## Check your work
`node scripts/check-content.mjs <locale>` — fix every problem reported for YOUR pages. Lines saying
"missing translation of <key>" for pages that another translator owns can be ignored.
`npx tsc --noEmit -p tsconfig.app.json 2>&1 | grep content/pages` must print nothing for your files.
