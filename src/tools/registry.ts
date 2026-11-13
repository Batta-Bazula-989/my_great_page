import { Bot, CalendarClock, MessageCircle, Target, type LucideIcon } from "lucide-react";
import type { Locale } from "@/content/types";
import slugMap from "@/content/generated/slugs.json";
import { localePath } from "@/i18n/config";
import { TOOL_IDS, type ToolId } from "./ids";
import { AI_MODEL, PLATFORMS, VENDORS } from "./aiAgentCost";
import { META_PRICING_URL, META_SERVICE_URL } from "./whatsapp";

export { TOOL_IDS, type ToolId };

export const TOOL_ICONS: Record<ToolId, LucideIcon> = { leadScore: Target, aiAgent: Bot, whatsapp: MessageCircle, sla: CalendarClock };

// Last time the published prices and rules each tool uses were checked.
export const TOOL_UPDATED: Record<ToolId, string> = { leadScore: "2026-11-13", aiAgent: "2026-11-13", whatsapp: "2026-11-13", sla: "2026-10-20" };

const ECB_SOURCE = {
  label: "European Central Bank: euro foreign exchange reference rates",
  url: "https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html",
};

export const TOOL_SOURCES: Record<ToolId, { label: string; url: string }[]> = {
  leadScore: [
    { label: "HubSpot: Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
    { label: "HubSpot: Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
    { label: "HubSpot: Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
    { label: "Attio: Formula attributes", url: "https://attio.com/help/reference/managing-your-data/attributes/formula-attributes" },
    { label: "Attio: Number attributes (API)", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
  ],
  aiAgent: [
    ...VENDORS.map((v) => ({ label: `${v.name}: pricing`, url: v.source })),
    { label: "Fin: pricing and outcomes", url: "https://fin.ai/help/en/articles/13975800-fin-pricing-outcomes" },
    { label: "Tidio: Lyro AI Agent and Lyro Connect", url: "https://www.tidio.com/ai-agent/" },
    { label: `Anthropic: ${AI_MODEL.name}`, url: AI_MODEL.source },
    ...PLATFORMS.filter((p) => p.source).map((p) => ({ label: `${p.id === "make" ? "Make" : "n8n"}: pricing`, url: p.source! })),
    ECB_SOURCE,
  ],
  whatsapp: [
    { label: "Meta: Pricing on the WhatsApp Business Platform", url: META_PRICING_URL },
    { label: "Meta: Non-template (service) messages", url: META_SERVICE_URL },
  ],
  sla: [],
};

// Tool URLs in every language, taken from the UI strings at build time (scripts/content-index.mjs),
// so linking to another language doesn't need that language's strings.
export const TOOL_SLUGS = slugMap.tools as Record<Locale, Record<ToolId | "hub", string>>;

export const toolsPath = (locale: Locale) => localePath(locale, `${TOOL_SLUGS[locale].hub}/`);

export const toolPath = (locale: Locale, id: ToolId) => localePath(locale, `${TOOL_SLUGS[locale].hub}/${TOOL_SLUGS[locale][id]}`);

export const toolBySlug = (locale: Locale, slug: string | undefined) => TOOL_IDS.find((id) => TOOL_SLUGS[locale][id] === slug);
