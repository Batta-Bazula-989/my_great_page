import { Bot, CalendarClock, MessageCircle, type LucideIcon } from "lucide-react";
import type { Locale } from "@/content/types";
import { dictionaries } from "@/i18n";
import { localePath } from "@/i18n/config";
import { AI_MODEL, PLATFORMS, TOKEN_EXAMPLE, VENDORS } from "./aiAgentCost";
import { META_PRICING_URL, META_SERVICE_URL } from "./whatsapp";

export type ToolId = "aiAgent" | "whatsapp" | "sla";

export const TOOL_IDS: ToolId[] = ["aiAgent", "whatsapp", "sla"];

export const TOOL_ICONS: Record<ToolId, LucideIcon> = { aiAgent: Bot, whatsapp: MessageCircle, sla: CalendarClock };

// Last time the published prices and rules each tool uses were checked.
export const TOOL_UPDATED: Record<ToolId, string> = { aiAgent: "2026-10-20", whatsapp: "2026-10-20", sla: "2026-10-20" };

const ECB_SOURCE = {
  label: "European Central Bank: euro foreign exchange reference rates",
  url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
};

export const TOOL_SOURCES: Record<ToolId, { label: string; url: string }[]> = {
  aiAgent: [
    ...VENDORS.map((v) => ({ label: `${v.name}: pricing`, url: v.source })),
    { label: "Fin outcome types (third-party summary)", url: "https://www.dragapp.com/blog/intercom-pricing/" },
    { label: `Anthropic: ${AI_MODEL.name}`, url: AI_MODEL.source },
    { label: "Example token use for a 5-message support conversation", url: TOKEN_EXAMPLE.source },
    ...PLATFORMS.filter((p) => p.source).map((p) => ({ label: `${p.id === "make" ? "Make" : "n8n"}: pricing`, url: p.source! })),
    ECB_SOURCE,
  ],
  whatsapp: [
    { label: "Meta: Pricing on the WhatsApp Business Platform", url: META_PRICING_URL },
    { label: "Meta: Non-template (service) messages", url: META_SERVICE_URL },
  ],
  sla: [],
};

export const toolsPath = (locale: Locale) => localePath(locale, `${dictionaries[locale].tools.hub.slug}/`);

export const toolPath = (locale: Locale, id: ToolId) =>
  localePath(locale, `${dictionaries[locale].tools.hub.slug}/${dictionaries[locale].tools[id].slug}`);

export const toolBySlug = (locale: Locale, slug: string | undefined) =>
  TOOL_IDS.find((id) => dictionaries[locale].tools[id].slug === slug);
