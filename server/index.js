import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.post("/api/booking", async (req, res) => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
    return res.status(500).json({ ok: false, error: "Server not configured" });
  }

  const { fullName, email, companyName, meetingMethod, phone, telegram } = req.body || {};
  const lines = [
    "📅 New Book a Free Support Review",
    "",
    `Name: ${fullName || "—"}`,
    `Email: ${email || "—"}`,
    `Company: ${companyName || "—"}`,
    `Meeting method: ${meetingMethod || "—"}`,
  ];
  if (phone) lines.push(`Phone: ${phone}`);
  if (telegram) lines.push(`Telegram: ${telegram}`);

  const text = lines.join("\n");

  try {
    const r = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
        }),
      }
    );
    const data = await r.json();
    if (!data.ok) {
      console.error("Telegram API error:", data);
      return res.status(502).json({ ok: false, error: data.description || "Telegram error" });
    }
    return res.json({ ok: true });
  } catch (err) {
    console.error("Booking notify error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
});

// Serve static files from dist directory
const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

// Serve index.html for all other routes (SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
