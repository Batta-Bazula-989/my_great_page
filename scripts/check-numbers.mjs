// Fact-preservation check for translations: every number in an English page must appear in its translation
// and vice versa (thousands separators ignored). `node scripts/check-numbers.mjs <locale>`
import { build } from "esbuild";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const locale = process.argv[2];
const outfile = path.join(os.tmpdir(), `check-numbers-${process.pid}-${Date.now()}.mjs`);
await build({ entryPoints: [path.join(root, "src/content/index.ts")], bundle: true, platform: "node", format: "esm", outfile, logLevel: "error" });
const { rawPagesByLocale: pagesByLocale, englishPage } = await import(pathToFileURL(outfile).href);
fs.rmSync(outfile, { force: true });

// Text a reader sees, minus slugs/keys/URLs; numbers normalised ("1,000" / "1.000" / "1 000" → "1000").
const numbers = (p) => {
  const text = [p.title, p.description, p.h1, p.intro, ...p.keyFacts,
    ...p.sections.flatMap((s) => [s.heading, ...s.blocks.flatMap((b) =>
      b.type === "table" ? [b.caption ?? "", ...b.head, ...b.rows.flat()] : "items" in b ? b.items : [b.text])]),
    ...p.faqs.flatMap((f) => [f.q, f.a])].join(" \n ");
  const found = text.replace(/(\d)[.,   ](?=\d{3}\b)/g, "$1").match(/\d+/g) ?? [];
  const counts = {};
  for (const n of found) counts[n] = (counts[n] ?? 0) + 1;
  return counts;
};

let issues = 0;
for (const p of pagesByLocale[locale]) {
  const en = numbers(englishPage(p.key));
  const tr = numbers(p);
  const missing = Object.keys(en).filter((n) => !tr[n]);
  const added = Object.keys(tr).filter((n) => !en[n]);
  if (missing.length || added.length) {
    issues++;
    console.log(`[${locale}/${p.slug}] missing: ${missing.join(", ") || "-"} | added: ${added.join(", ") || "-"}`);
  }
}
console.log(issues ? `${issues} page(s) with number differences` : `OK — numbers match English on all ${pagesByLocale[locale].length} ${locale} pages`);
