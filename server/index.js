import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Log at startup so Railway logs show config status immediately
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.warn(
    "⚠️ Telegram not configured: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in Railway Variables. " +
    "Book a Free Support Review leads will not be sent until then."
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

app.post("/api/booking", async (req, res) => {
  console.log("Booking request received:", req.body?.email || "(no email)");
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

app.post("/api/generate-plan", async (req, res) => {
  const { service, tool, main_issue, additional_notes } = req.body || {};

  if (!service || !tool || !main_issue) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY not set");
    return res.status(500).json({ error: "AI service not configured" });
  }

  const client = new Anthropic({ apiKey });

  const systemPrompt = `You are a support operations automation specialist with deep expertise in helpdesk tools, workflow automation, and operational efficiency.

Your role: Given structured input about a company's support setup, produce a concise, practical automation plan.

Rules:
- Stay strictly within the domain of support operations automation (routing, reporting, bots, monitoring, integrations).
- Do not give generic AI or software development advice.
- Be direct and specific — no marketing language, no padding, no bullet points, no headers.
- Write plain prose only, 6–8 sentences maximum.
- Cover: brief acknowledgment of the issue, specific automation steps, tools or integrations involved, and the expected operational impact.`;

  const userMessage = `Service needed: ${service}
Tool / system: ${tool}
Main issue: ${main_issue}${additional_notes ? `\nAdditional context: ${additional_notes}` : ""}`;

  try {
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 400,
      system: systemPrompt,
      messages: [{ role: "user", content: userMessage }],
    });

    const summary = message.content[0]?.type === "text" ? message.content[0].text : "";
    return res.json({ summary });
  } catch (err) {
    console.error("Anthropic API error:", err);
    return res.status(502).json({ error: "AI request failed" });
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
