// Shape of the SEO landing/guide pages. Content lives in src/content/pages/*.ts,
// is rendered by src/pages/SeoPage.tsx and pre-rendered to static HTML at build time.

export type CategoryId = "services" | "helpdesks" | "channels" | "basics" | "guides";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export interface Section {
  heading: string; // rendered as <h2>
  blocks: Block[];
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
}
