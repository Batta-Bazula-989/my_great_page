# Translating the UI dictionary

Source: `src/i18n/en.ts`. Target: `src/i18n/<locale>.ts`, shaped exactly like this:

```ts
import type { Dictionary } from "./en";

const de: Dictionary = {
  // same keys, same nesting, same array lengths as en.ts — only the string values are translated
};

export default de;
```

Rules
- Translate every string value. Keep every key, the nesting and every array's length and order.
- Keep `{placeholders}` such as `{title}` exactly.
- Same claims as English — no added or removed facts, promises or numbers (1–3 weeks, 30 days, 30 minutes,
  2–3 recommendations, 24 hours, 1–2 / 3–5 channels…).
- Keep unchanged: TascaLab, Roman Zakharenko, the email address, product names (Zendesk, Freshdesk, Jira,
  Slack, Make, n8n, Upwork, LinkedIn, Telegram, WhatsApp, Zoom, Google Meet), "FAQ" may be localized.
- Package prices are not in the dictionaries: `src/lib/pricing.ts` holds them per currency and formats them.
  Third-party prices in `pricing.plans[].running` and `pricing.footnote` (n8n, Make, Retell AI, Anthropic, Meta)
  keep their published currency and amount; only the number style may follow the language.
- "Health Check" stays in English, like the plan names.
- Pricing plan names stay in English ("Starter Chat Bot", "Voice Bot", …) as in every other language.
- `meta.homeTitle` ≤ 60 characters, ends with " | TascaLab" and matches the hero H1; `meta.homeDescription` 140–160 characters;
  `resources.metaTitle` ≤ 60 characters; `resources.metaDescription` 120–160 characters.
- `hero.titleBefore` + `hero.titleHighlight` + `hero.titleAfter` are rendered back to back (the middle part is
  highlighted). Reorder words as the language needs; keep the spaces at the joins; any part may be "".
- Placeholders in the booking form (name, email, company) should look natural for the country.
- Voice: plain and direct. Address: de "Sie", fr "vous", es "tú", it "tu", nl "je", pl "Ty", sv "du".
- Category labels should match the menu names used in that language's landing pages
  (see `src/content/pages/<locale>/` if present).
- Valid TypeScript: straight double quotes for strings, escape inner `"` as `\"`.

Check: `npx tsc --noEmit -p tsconfig.app.json 2>&1 | grep "src/i18n"` must print nothing.
