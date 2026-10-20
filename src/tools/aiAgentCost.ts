// AI support agent cost calculator: what per-resolution SaaS agents would cost at a given volume,
// next to a one-time TascaLab build plus the usage costs the client pays directly.
// Vendor prices are list prices as published on each vendor's pricing page in October 2026 (USD).
import { convert, type Currency } from "@/lib/pricing";

export const PRICES_AS_OF = "2026-10";

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

export const VENDORS: Vendor[] = [
  {
    id: "fin",
    name: "Fin (formerly Intercom)",
    source: "https://fin.ai/pricing",
    // $0.99 per outcome, 50-outcome monthly minimum when used with another helpdesk.
    monthlyUsd: (v) => Math.max(50, resolved(v)) * 0.99,
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
    source: "https://www.tidio.com/ai-agent/",
    // $0.50 per conversation Lyro replies to.
    monthlyUsd: (v) => v.conversations * 0.5,
  },
  {
    id: "agentforce",
    name: "Salesforce Agentforce",
    source: "https://www.salesforce.com/news/press-releases/2025/05/15/agentforce-flexible-pricing-news/",
    // Flex Credits: $500 per 100,000 credits, 20 credits per standard action = $0.10 per action.
    monthlyUsd: (v) => v.conversations * v.actionsPerConversation * 0.1,
  },
];

// Claude Haiku 5.5 list prices for prompts up to 100,000 tokens (USD per million tokens).
export const AI_MODEL = {
  name: "Claude Haiku 5.5",
  inputPerMillion: 0.1,
  outputPerMillion: 0.5,
  source: "https://www.anthropic.com/claude-haiku-5-5",
};

// Example token use per support conversation (5 messages), from a published worked example.
export const TOKEN_EXAMPLE = {
  input: 11900,
  output: 1250,
  source: "https://wildandfreetools.com/blog/customer-support-chatbot-llm-cost-breakdown/",
};

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
