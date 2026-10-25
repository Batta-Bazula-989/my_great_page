import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
// A booking is a few hundred bytes; the 100 KB default only helps someone flooding us.
app.use(express.json({ limit: "10kb" }));

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Log at startup so Railway logs show config status immediately
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn(
    "⚠️ Telegram not configured: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Railway Variables. " +
    "Health Check booking leads will not be sent until then."
  );
} else {
  console.log("✓ Telegram bot configured; booking leads will be sent.");
}

app.get("/api/health", (_req, res) => {
  res.json({
    ok: true,
    telegram: !!(TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID),
  });
});

// A script could otherwise flood the Telegram chat with fake leads, and once Telegram rate-limits
// the bot, real visitors' bookings fail. Counted per visitor IP, in memory (one server instance).
const BOOKING_LIMIT = 5;
const BOOKING_WINDOW_MS = 10 * 60 * 1000;
const bookingsByIp = new Map();

function bookingAllowed(ip) {
  const now = Date.now();
  const entry = bookingsByIp.get(ip);
  if (!entry || now - entry.start >= BOOKING_WINDOW_MS) {
    bookingsByIp.set(ip, { start: now, count: 1 });
    return true;
  }
  entry.count += 1;
  return entry.count <= BOOKING_LIMIT;
}

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of bookingsByIp) {
    if (now - entry.start >= BOOKING_WINDOW_MS) bookingsByIp.delete(ip);
  }
}, BOOKING_WINDOW_MS).unref();

// Behind Cloudflare, cf-connecting-ip is the visitor; req.ip would be the proxy in front of us.
const clientIp = (req) => req.headers["cf-connecting-ip"] || req.ip;

// Visitor-typed text: every whitespace run, newlines included, becomes one space (a newline could fake
// extra lines in the message), and the length is capped.
const oneLine = (value) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 200);

app.post("/api/booking", async (req, res) => {
  if (!bookingAllowed(clientIp(req))) {
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  const {
    fullName, email, companyName, meetingMethod, phone, telegram, selectedPlan, language,
    utm_source, utm_medium, utm_campaign,
  } = Object.fromEntries(Object.entries(req.body || {}).map(([key, value]) => [key, oneLine(value)]));

  console.log("Booking request received:", email || "(no email)");
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  const lines = [
    "📅 New Free Health Check booking",
    "",
    `Name: ${fullName || "—"}`,
    `Email: ${email || "—"}`,
    `Company: ${companyName || "—"}`,
    `Meeting method: ${meetingMethod || "—"}`,
  ];
  if (selectedPlan) lines.push(`Selected plan: ${selectedPlan}`);
  if (language && language !== "en") lines.push(`Site language: ${language}`);
  if (phone) lines.push(`Phone: ${phone}`);
  if (telegram) lines.push(`Telegram: ${telegram}`);
  const utmParts = [utm_source, utm_medium, utm_campaign].filter(Boolean);
  if (utmParts.length) lines.push(`Source: ${utmParts.join(" / ")}`);

  const text = lines.join("\n");

  try {
    const r = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: String(TELEGRAM_CHAT_ID).trim(),
          text,
        }),
      }
    );
    const data = await r.json();
    if (!data.ok) {
      console.error("Telegram API error:", JSON.stringify(data));
      return res.status(502).json({ ok: false, error: data.description || "Telegram error" });
    }
    console.log("Telegram message sent successfully for:", email);
    return res.json({ ok: true });
  } catch (err) {
    console.error("Booking notify error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

const distPath = path.join(__dirname, "..", "dist");

// One address per page: https://www.tascalab.com, no ".html", no "index.html", and a trailing slash
// only on folder pages (/de/, /tools/). Every other variant gets a permanent redirect.
const CANONICAL_HOST = "www.tascalab.com";
const PRODUCTION_HOSTS = new Set([CANONICAL_HOST, "tascalab.com"]);
const LOCALE_PREFIX = /^\/(de|fr|es|it|nl|pl|sv)(?=\/|$)/;

const exists = (relative) => !relative.includes("..") && fs.existsSync(path.join(distPath, relative));

const canonicalPath = (p) => {
  if (p.endsWith("/index.html")) return p.slice(0, -"index.html".length);
  if (p.endsWith(".html")) return p.slice(0, -".html".length);
  if (!p.endsWith("/") && exists(`${p}/index.html`)) return `${p}/`;
  if (p.length > 1 && p.endsWith("/") && !exists(`${p}index.html`) && exists(`${p.slice(0, -1)}.html`)) return p.slice(0, -1);
  return p;
};

app.use((req, res, next) => {
  if (req.path.startsWith("/api/") || (req.method !== "GET" && req.method !== "HEAD")) return next();
  const host = (req.headers.host || "").split(":")[0].toLowerCase();
  // Behind Cloudflare, cf-visitor carries the scheme the visitor used; x-forwarded-proto may be the proxy's.
  let scheme = req.headers["x-forwarded-proto"]?.split(",")[0];
  try {
    scheme = JSON.parse(req.headers["cf-visitor"] || "{}").scheme || scheme;
  } catch {
    // keep x-forwarded-proto
  }
  const production = PRODUCTION_HOSTS.has(host) || host.endsWith(".up.railway.app");
  // One leading slash only: a Location of "//evil.example/x" would send the visitor to evil.example.
  const target = canonicalPath(req.path).replace(/^[\/\\]+/, "/");
  const query = req.originalUrl.slice(req.path.length);
  if (production && (host !== CANONICAL_HOST || scheme === "http")) {
    return res.redirect(301, `https://${CANONICAL_HOST}${target}${query}`);
  }
  if (target !== req.path) return res.redirect(301, `${target}${query}`);
  next();
});

// /404 and /<lang>/404 are the error pages themselves, not pages to serve with a 200 status.
app.use((req, res, next) => (/^(\/[a-z]{2})?\/404$/.test(req.path) ? notFound(req, res) : next()));

// Pre-rendered pages: dist/<slug>.html is served at /<slug>, dist/de/index.html at /de/.
app.use(express.static(distPath, { extensions: ["html"] }));

// Everything else is a real 404, with the "page not found" page in the visitor's language.
function notFound(req, res) {
  const locale = req.path.match(LOCALE_PREFIX)?.[1];
  const page = path.join(distPath, locale ? `${locale}/404.html` : "404.html");
  if (req.path.startsWith("/api/") || !fs.existsSync(page)) return res.status(404).json({ error: "Not found" });
  res.status(404).sendFile(page);
}
app.use(notFound);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
