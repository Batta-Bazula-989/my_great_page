import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadRoute } from "./route-loading";
import "./index.css";

// After a deploy, a tab opened before it asks for page files that no longer exist. Reload once to get the
// new version instead of leaving a broken page (Vite fires this event when a lazy import fails).
// The timestamp stops a reload loop if the file is missing for some other reason.
const RELOADED_AT = "tascalab:reloaded-after-deploy";
window.addEventListener("vite:preloadError", (event) => {
  try {
    if (Date.now() - Number(sessionStorage.getItem(RELOADED_AT) ?? 0) < 30_000) return;
    sessionStorage.setItem(RELOADED_AT, String(Date.now()));
  } catch {
    // storage blocked: reload anyway
  }
  event.preventDefault();
  window.location.reload();
});

const root = document.getElementById("root")!;

// Load what this page needs first, so React takes over the pre-rendered HTML in one pass instead of
// rebuilding it. The dev server has no pre-rendered HTML, so there React renders from scratch.
preloadRoute(window.location.pathname)
  .catch(() => undefined)
  .then(() => {
    if (root.hasChildNodes()) hydrateRoot(root, <App />);
    else createRoot(root).render(<App />);
  });
