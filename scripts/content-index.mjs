// Writes the page index the browser loads instead of the full content (see src/content/index.ts):
//   src/content/generated/pages-<locale>.json  titles, slugs, categories and reading times of every article
//   src/content/generated/slugs.json           every page's and tool's slug in every language
// Runs automatically at the start of `vite` and `vite build` (plugin in vite.config.ts) and again when content
// or UI strings change in dev. Run by hand with `node scripts/content-index.mjs`. The files are committed,
// like public/sitemap.xml, so a content change shows up as a change to them too.
import { build } from "esbuild";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "src/content/generated");

const writeIfChanged = (file, data) => {
  const text = `${JSON.stringify(data, null, 1)}\n`;
  const existing = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
  if (existing === text) return false;
  fs.writeFileSync(file, text);
  return true;
};

export async function writeContentIndex() {
  const outfile = path.join(os.tmpdir(), `content-index-${process.pid}-${Date.now()}.mjs`);
  await build({
    entryPoints: [path.join(root, "src/content/build-index.ts")],
    bundle: true,
    platform: "node",
    format: "esm",
    outfile,
    logLevel: "error",
    absWorkingDir: root,
  });
  try {
    const { buildContentIndex } = await import(pathToFileURL(outfile).href);
    const { pages, slugs } = buildContentIndex();
    fs.mkdirSync(outDir, { recursive: true });
    const changed = [];
    for (const [locale, list] of Object.entries(pages))
      if (writeIfChanged(path.join(outDir, `pages-${locale}.json`), list)) changed.push(`pages-${locale}.json`);
    if (writeIfChanged(path.join(outDir, "slugs.json"), slugs)) changed.push("slugs.json");
    return changed;
  } finally {
    fs.rmSync(outfile, { force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const changed = await writeContentIndex();
  console.log(changed.length ? `content-index: updated ${changed.join(", ")}` : "content-index: up to date");
}
