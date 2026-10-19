// Quick content check without a full build: `node scripts/check-content.mjs [locale]`.
// Bundles src/content/validate.ts with esbuild into a temp file (safe to run in parallel) and prints problems.
import { build } from "esbuild";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const [locale] = process.argv.slice(2);
const outfile = path.join(os.tmpdir(), `check-content-${process.pid}-${Date.now()}.mjs`);

await build({
  entryPoints: [path.join(root, "src/content/validate.ts")],
  bundle: true,
  platform: "node",
  format: "esm",
  outfile,
  logLevel: "error",
});
const { contentProblems } = await import(pathToFileURL(outfile).href);
fs.rmSync(outfile, { force: true });

const problems = contentProblems(locale);
console.log(problems.length ? problems.join("\n") : `OK — no content problems${locale ? ` for ${locale}` : ""}`);
process.exit(problems.length ? 1 : 0);
