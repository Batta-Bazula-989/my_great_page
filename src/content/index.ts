import type { CategoryId, SeoPageContent } from "./types";
import { servicesPages } from "./pages/services";
import { helpdeskPages } from "./pages/helpdesks";
import { channelPages } from "./pages/channels";
import { basicsPages } from "./pages/basics";
import { guidePages } from "./pages/guides";

export const SITE_URL = "https://tascalab.com";

export const categories: { id: CategoryId; label: string; blurb: string }[] = [
  { id: "services", label: "Services", blurb: "What gets built: bots, routing and reporting." },
  { id: "helpdesks", label: "By Helpdesk", blurb: "Automation inside the tools your team already uses." },
  { id: "channels", label: "By Channel", blurb: "Support bots for the places your customers write from." },
  { id: "basics", label: "Learn the Basics", blurb: "Definitions, metrics and how handoffs work." },
  { id: "guides", label: "Guides & Compliance", blurb: "Tool comparisons and EU rules for support bots." },
];

export const seoPages: SeoPageContent[] = [
  ...servicesPages,
  ...helpdeskPages,
  ...channelPages,
  ...basicsPages,
  ...guidePages,
];

export const getSeoPage = (slug: string | undefined) => seoPages.find((p) => p.slug === slug);

export const pagesInCategory = (id: CategoryId) => seoPages.filter((p) => p.category === id);

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

export const headingId = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
