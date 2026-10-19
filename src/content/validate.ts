// Content checks run at build time (scripts/prerender.mjs) and by scripts/check-content.mjs.
// Translations must mirror the English page exactly in structure and sources, so a translation
// can't silently drop or add a fact.
import { englishPage, pagesByLocale } from "./index";
import type { Block, Locale, TranslatedPage } from "./types";

const blockShape = (b: Block) => {
  switch (b.type) {
    case "ul":
    case "ol":
      return `${b.type}:${b.items.length}`;
    case "table":
      return `table:${b.head.length}x${b.rows.length}:${b.rows.map((r) => r.length).join(",")}:${b.caption ? "c" : ""}`;
    default:
      return b.type;
  }
};

const pageProblems = (locale: Locale, p: TranslatedPage, slugs: Set<string>, keys: Set<string>): string[] => {
  const problems: string[] = [];
  const where = `[${locale}/${p.slug}]`;
  if (slugs.has(p.slug)) problems.push(`${where} duplicate slug`);
  slugs.add(p.slug);
  if (keys.has(p.key)) problems.push(`${where} duplicate key ${p.key}`);
  keys.add(p.key);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) problems.push(`${where} slug must be lowercase ASCII kebab-case`);
  if (p.title.length > 60) problems.push(`${where} title is ${p.title.length} chars (max 60)`);
  if (p.description.length < 120 || p.description.length > 160)
    problems.push(`${where} description is ${p.description.length} chars (want 120–160)`);
  if (p.navLabel.length > 34) problems.push(`${where} navLabel is ${p.navLabel.length} chars (max 34)`);
  if (p.sources.length === 0) problems.push(`${where} has no sources`);
  for (const s of p.sources) if (!/^https:\/\//.test(s.url)) problems.push(`${where} source is not https: ${s.url}`);
  if (p.faqs.length === 0) problems.push(`${where} has no FAQs`);
  for (const r of p.related)
    if (!englishPage(r) || r === p.key) problems.push(`${where} bad related key: ${r} (use English slugs)`);

  if (locale === "en") return problems;

  const en = englishPage(p.key);
  if (!en) return [...problems, `${where} key "${p.key}" is not an English slug`];
  const must = (ok: boolean, msg: string) => ok || problems.push(`${where} ${msg}`);
  must(p.category === en.category, `category must be "${en.category}"`);
  must(p.updated === en.updated, `updated must be "${en.updated}"`);
  must(p.related.join() === en.related.join(), `related must be unchanged: ${en.related.join(", ")}`);
  must(p.keyFacts.length === en.keyFacts.length, `keyFacts: ${p.keyFacts.length}, English has ${en.keyFacts.length}`);
  must(p.faqs.length === en.faqs.length, `faqs: ${p.faqs.length}, English has ${en.faqs.length}`);
  must(
    p.sources.map((s) => s.url).join() === en.sources.map((s) => s.url).join(),
    "sources must have the same URLs in the same order as English",
  );
  must(p.sections.length === en.sections.length, `sections: ${p.sections.length}, English has ${en.sections.length}`);
  p.sections.forEach((s, i) => {
    const e = en.sections[i];
    if (!e) return;
    const got = s.blocks.map(blockShape).join(" ");
    const want = e.blocks.map(blockShape).join(" ");
    must(got === want, `section ${i + 1} blocks differ from English.\n      got:  ${got}\n      want: ${want}`);
  });
  return problems;
};

export const contentProblems = (only?: Locale): string[] => {
  const problems: string[] = [];
  for (const locale of Object.keys(pagesByLocale) as Locale[]) {
    if (only && locale !== only) continue;
    const slugs = new Set<string>();
    const keys = new Set<string>();
    for (const p of pagesByLocale[locale]) problems.push(...pageProblems(locale, p, slugs, keys));
    if (locale !== "en")
      for (const en of pagesByLocale.en)
        if (!keys.has(en.key)) problems.push(`[${locale}] missing translation of ${en.key}`);
  }
  return problems;
};
