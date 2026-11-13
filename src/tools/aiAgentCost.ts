// AI support agent cost calculator: what per-resolution SaaS agents would cost at a given volume,
// next to a one-time TascaLab build plus the usage costs the client pays directly.
// Vendor prices are list prices as published on each vendor's official pricing pages, checked 13 November 2026 (USD).
import { convert, type Currency } from "@/lib/pricing";

export const PRICES_AS_OF = "2026-11";

export type VendorId = "fin" | "zendesk" | "freddy" | "hubspot" | "tidio" | "agentforce";

export interface Vendor {
  id: VendorId;
  name: string;
  source: string;
  // Monthly cost in USD for the given volume.
  monthlyUsd: (v: Volume) => number;
}

export interface Volume {
  conversations: number; // conversations the AI agent handles per month
  resolutionRate: number; // 0–1, share it resolves without a human
  actionsPerConversation: number; // Agentforce bills per action
}

const resolved = (v: Volume) => Math.round(v.conversations * v.resolutionRate);

// Tidio Lyro self-serve packs on monthly billing (tidio.com/pricing, November 2026).
export const TIDIO_PACKS = [
  { conversations: 50, usd: 39 },
  { conversations: 100, usd: 75 },
  { conversations: 150, usd: 110 },
  { conversations: 200, usd: 140 },
  { conversations: 300, usd: 210 },
  { conversations: 500, usd: 350 },
  { conversations: 750, usd: 525 },
  { conversations: 1000, usd: 700 },
];

export const VENDORS: Vendor[] = [
  {
    id: "fin",
    name: "Fin (formerly Intercom)",
    source: "https://fin.ai/pricing",
    // With another helpdesk: a $49 monthly base that includes 50 outcomes, then $0.99 per outcome.
    monthlyUsd: (v) => 49 + Math.max(0, resolved(v) - 50) * 0.99,
  },
  {
    id: "zendesk",
    name: "Zendesk AI agents",
    source: "https://www.zendesk.com/pricing/",
    // $2.00 per automated resolution, pay-as-you-go.
    monthlyUsd: (v) => resolved(v) * 2,
  },
  {
    id: "freddy",
    name: "Freshdesk Freddy AI Agent",
    source: "https://support.freshdesk.com/support/solutions/articles/50000011515-manage-freddy-ai-add-ons",
    // $49 per pack of 100 sessions.
    monthlyUsd: (v) => Math.ceil(v.conversations / 100) * 49,
  },
  {
    id: "hubspot",
    name: "HubSpot Customer Agent",
    source: "https://www.hubspot.com/products/artificial-intelligence/ai-customer-service-agent",
    // $0.50 per resolved conversation.
    monthlyUsd: (v) => resolved(v) * 0.5,
  },
  {
    id: "tidio",
    name: "Tidio Lyro",
    source: "https://www.tidio.com/pricing/",
    // Self-serve monthly packs up to 1,000 conversations Lyro replies to; above that, Lyro Connect
    // on Plus or Premium starts from $0.50 per conversation (a "from" price).
    monthlyUsd: (v) => {
      if (v.conversations <= 0) return 0;
      const pack = TIDIO_PACKS.find((p) => v.conversations <= p.conversations);
      return pack ? pack.usd : v.conversations * 0.5;
    },
  },
  {
    id: "agentforce",
    name: "Salesforce Agentforce",
    source: "https://www.salesforce.com/agentforce/pricing/",
    // Flex Credits: $500 per 100,000 credits, 20 credits per standard action = $0.10 per action.
    monthlyUsd: (v) => v.conversations * v.actionsPerConversation * 0.1,
  },
];

// Claude Haiku 5.5 list prices for prompts up to 100,000 tokens (USD per million tokens).
export const AI_MODEL = {
  name: "Claude Haiku 5.5",
  inputPerMillion: 0.1,
  outputPerMillion: 0.5,
  source: "https://platform.claude.com/docs/en/about-claude/pricing",
};

// Illustrative token use per support conversation. No official source publishes a typical figure,
// so these are labelled defaults for the visitor to replace with their own bot's numbers.
export const TOKEN_DEFAULTS = { input: 12000, output: 1200 };

export type PlatformId = "n8nCloud" | "make" | "selfHosted";

// Automation platform list prices (both billed annually).
export const PLATFORMS: { id: PlatformId; amount: number; currency: Currency; source?: string }[] = [
  { id: "n8nCloud", amount: 20, currency: "EUR", source: "https://n8n.io/pricing" },
  { id: "make", amount: 9, currency: "USD", source: "https://www.make.com/en/pricing" },
  { id: "selfHosted", amount: 0, currency: "USD" },
];

export interface BuildInputs {
  inputTokens: number;
  outputTokens: number;
  platform: PlatformId;
}

export const buildMonthly = (v: Volume, b: BuildInputs, currency: Currency) => {
  const aiUsd = (v.conversations * (b.inputTokens * AI_MODEL.inputPerMillion + b.outputTokens * AI_MODEL.outputPerMillion)) / 1e6;
  const platform = PLATFORMS.find((p) => p.id === b.platform)!;
  return convert(aiUsd, "USD", currency) + convert(platform.amount, platform.currency, currency);
};

// First month in which the one-time build plus running costs is cheaper than paying the vendor.
export const paybackMonth = (oneTime: number, buildPerMonth: number, vendorPerMonth: number) => {
  const saving = vendorPerMonth - buildPerMonth;
  if (saving <= 0) return null;
  return Math.max(1, Math.ceil(oneTime / saving));
};
