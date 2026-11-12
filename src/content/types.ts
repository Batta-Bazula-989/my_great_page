// Shape of the SEO landing/guide pages. Content lives in src/content/pages/*.ts,
// is rendered by src/pages/SeoPage.tsx and pre-rendered to static HTML at build time.

export type CategoryId = "services" | "helpdesks" | "channels" | "basics" | "guides" | "crm";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export interface Section {
  heading: string; // rendered as <h2>
  blocks: Block[];
  // English pages only: other pages on this site to link from the end of this section. Each entry is an
  // English page slug, or "tool:<id>" for a calculator (tool:aiAgent, tool:whatsapp, tool:sla). Translations
  // get the same links in the same section automatically, with the link text in their language.
  links?: string[];
}

export interface Source {
  label: string; // e.g. "Zendesk Help Center — About triggers"
  url: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface SeoPageContent {
  slug: string; // URL path without leading slash, kebab-case, keyword-led
  category: CategoryId;
  navLabel: string; // short label used in footer menus (≤ 32 chars)
  primaryKeyword: string;
  title: string; // <title>, ≤ 60 chars, keyword first
  description: string; // meta description, 140–158 chars
  h1: string;
  intro: string; // 2–3 sentence answer-first summary
  keyFacts: string[]; // 3–5 short, sourced facts shown in an "At a glance" box
  sections: Section[];
  faqs: Faq[]; // 3–5, factual
  sources: Source[]; // every external fact must be traceable to one of these
  related: string[]; // 3 slugs of other pages
  updated: string; // ISO date the facts were checked
  // English pages only: ISO date the page first went live. Translations use the English page's date.
  published?: string;
}

export type Locale = "en" | "de" | "fr" | "es" | "it" | "nl" | "pl" | "sv";

// A page in a non-English locale. `key` is the English page's slug and links all translations together;
// `slug` is the localized URL slug. `related` keeps English keys.
export interface TranslatedPage extends SeoPageContent {
  key: string;
}

// What the footer, blog list, related cards and language switcher need about a page, without its body.
// Generated at build time into src/content/generated/pages-<locale>.json (see scripts/content-index.mjs),
// so the browser doesn't download every article to draw a menu.
export interface PageSummary {
  key: string;
  slug: string;
  category: CategoryId;
  navLabel: string;
  h1: string;
  description: string;
  updated: string;
  minutes: number; // reading time
  keyFacts: string[]; // the first three, for the featured card on the blog
  sectionLinks: Record<number, string[]>; // section index → links (see Section.links)
}
