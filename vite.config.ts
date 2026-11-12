import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { writeContentIndex } from "./scripts/content-index.mjs";

// Keeps src/content/generated/ (the page index the browser loads) in step with the content and UI strings:
// written at the start of every build and dev server, and again whenever those files change in dev.
const contentIndex = (): Plugin => ({
  name: "content-index",
  async buildStart() {
    await writeContentIndex();
  },
  async handleHotUpdate({ file }) {
    if (/[\\/]src[\\/](content[\\/]pages|i18n)[\\/]/.test(file)) await writeContentIndex();
  },
});

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
  plugins: [contentIndex(), react()],
  build: {
    // dist/.vite/manifest.json: lets the pre-renderer add <link rel="modulepreload"> for each page's files.
    manifest: true,
    // Images stay separate, cacheable files instead of base64 copies inside every page's HTML and JS.
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
