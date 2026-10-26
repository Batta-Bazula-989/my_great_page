// Case studies for /work and /work/<slug>. English only for now; rendered by src/pages/Work.tsx and
// src/pages/CaseStudy.tsx with the guide page layout. Facts come from Roman's own notes: no client names,
// results or numbers that aren't written here. Items still waiting for his confirmation are left out.

import type { Locale } from "./types";
import { localePath } from "@/i18n/config";

export interface BuiltItem {
  title?: string; // bold lead-in, e.g. "lemlist replies."
  text?: string;
  items?: string[];
}

export interface CaseStudy {
  slug: string; // URL path under /work/
  title: string; // <title>
  description: string; // meta description
  h1: string;
  summary: string; // one line, on the cards
  client: string;
  needed?: string;
  built: BuiltItem[];
  tools: string[];
  status: string;
  fromBuilds?: string[]; // first-hand findings from this build
  updated: string; // ISO date the page was last checked
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "sales-activity-into-crm",
    title: "Sales Replies, Calls and Meetings Logged in Attio | TascaLab",
    description:
      "How I logged lemlist replies, Aircall calls and meeting notes on the right deal in Attio for a B2B sales team, plus a daily CRM cleanup.",
    h1: "One sales team: replies, calls and meetings logged on the deal",
    summary: "lemlist replies, Aircall calls and meeting notes logged on the right deal in Attio.",
    client: "A B2B startup selling to US contractors.",
    needed:
      "Replies, calls, meeting notes, emails and LinkedIn messages logged on the right person and deal in Attio, without the sales team doing it by hand.",
    built: [
      {
        title: "lemlist replies.",
        text: "Each reply finds or creates the company, person and deal. AI tags the reply as interested, basic reply or not interested. A relevance field is set to \"AI suggested\" so a person confirms it. If the deal already exists, it only gets a note.",
      },
      {
        title: "Aircall calls.",
        text: "When a call ends, a call note goes on the deal. When Aircall finishes the transcript, a second note with the full transcript is added. Running on live calls since August 2026.",
      },
      {
        title: "Meeting notes.",
        text: "Fireflies and Granola notes logged on the deal or company. Only calls with external people are logged, internal ones are skipped, and nothing is logged twice.",
      },
      {
        title: "Daily cleanup sweep.",
        text: "Every morning, open deals get the right company people linked, and people missing an email, phone or LinkedIn profile are enriched from Apollo. Running on live data since August 2026.",
      },
      {
        title: "HubSpot to lemlist.",
        text: "LinkedIn connection tasks created in HubSpot are sent to a lemlist campaign.",
      },
    ],
    tools: ["n8n", "Attio", "HubSpot", "lemlist", "Aircall", "Fireflies", "Granola", "Apollo", "Claude API"],
    status: "Live. The client is now moving from Attio to HubSpot, and the flows are being rebuilt against HubSpot.",
    fromBuilds: [
      "Attio notes need the markdown format, or they show raw text.",
      "Aircall can return an empty transcript on very short calls, so the build skips writing an empty note.",
      "The Fireflies webhook never arrived on this account, so the build checks for new transcripts every 15 minutes instead.",
    ],
    updated: "2026-10-26",
  },
  {
    slug: "relay-app-to-n8n-migration",
    title: "Relay.app Shutdown: Migrating Workflows to n8n | TascaLab",
    description:
      "When Relay.app announced its shutdown, I inventoried more than 20 workflows, ranked them and rebuilt the important ones in n8n before the deadline.",
    h1: "Relay.app shutdown: every workflow inventoried, the key ones rebuilt in n8n",
    summary: "Every Relay.app workflow inventoried, ranked and the key ones rebuilt in n8n.",
    client: "A B2B startup's sales and operations team.",
    needed:
      "Relay.app was shutting down. Every workflow had to be checked, and the ones that mattered rebuilt somewhere else before the account closed.",
    built: [
      {
        title: "Inventory.",
        text: "More than 20 workflows listed, including a workflow, tables and folders the automatic inventory missed, in a spreadsheet ranked by priority.",
      },
      {
        title: "Rebuilt in n8n:",
        items: [
          "Fireflies call notes into Attio",
          "Granola call notes into Attio, external calls only",
          "The daily sweep that links people to deals and enriches them from Apollo",
          "Procurement order emails into Notion. AI sorts each email into order confirmation, shipment or amendment, updates the order and vendor records, and posts to Slack.",
        ],
      },
    ],
    tools: ["Relay.app", "n8n", "Attio", "Notion", "Gmail", "Slack", "Fireflies", "Granola", "Apollo", "Claude API"],
    status: "Delivered before Relay.app's account deadline.",
    fromBuilds: [
      "An AI generated inventory of the old account missed workflows, tables and folders. Check every folder by hand before you call the list complete.",
      "Granola's API has no filter for attendees, so internal calls are filtered out inside the workflow by email domain.",
    ],
    updated: "2026-10-26",
  },
  {
    slug: "fulfilment-center-dashboard",
    title: "Fulfilment Center Dashboard and SEO Pipeline | TascaLab",
    description:
      "A seller performance dashboard on the ChannelDock API and an automated SEO content pipeline for a Dutch fulfilment company.",
    h1: "Seller dashboard and SEO content pipeline for a Dutch fulfilment company",
    summary: "Seller performance dashboard on ChannelDock data, plus an automated SEO content pipeline.",
    client: "A Dutch fulfilment company (3PL).",
    built: [
      {
        title: "SEO content pipeline.",
        text: "Built and delivered with n8n, the Claude API, Supabase and a React and Tailwind front end.",
      },
      {
        title: "Performance dashboard.",
        text: "Data from the ChannelDock API through n8n into a Lovable app. It shows each seller's performance and each warehouse employee's package handling.",
      },
    ],
    tools: ["n8n", "ChannelDock API", "Lovable", "Claude API", "Supabase", "React", "Tailwind"],
    status: "SEO pipeline delivered. Performance dashboard built.",
    updated: "2026-10-26",
  },
  {
    slug: "linkedin-to-slides",
    title: "LinkedIn Profiles to Executive Bio Slides with Make | TascaLab",
    description:
      "Make.com automations that turn a LinkedIn URL in a Google Sheet into executive bio slides in Google Slides for an executive search firm.",
    h1: "Executive bio slides from a LinkedIn URL",
    summary: "Paste a LinkedIn URL in a sheet, get an executive bio slide in Google Slides.",
    client: "An executive search firm.",
    built: [
      {
        text: "Four Make.com scenarios, each with its own Google Sheet and slide deck. Adding a LinkedIn URL to the sheet generates the executive bio slides in Google Slides.",
      },
      {
        text: "Moved all four to a new Make account, with the webhook URLs updated in all four sheets and the old scenarios switched off.",
      },
    ],
    tools: ["Make", "Google Sheets", "Google Slides", "Apps Script webhooks"],
    status: "Live.",
    updated: "2026-10-26",
  },
];

// The three shown on the homepage.
export const featuredCaseStudies = caseStudies.slice(0, 3);

export const getCaseStudy = (slug: string | undefined) => caseStudies.find((c) => c.slug === slug);

// /work/ is a folder page (its case studies sit under it), so it ends with a slash like /tools/.
export const workPath = (locale: Locale, slug?: string) => localePath(locale, slug ? `work/${slug}` : "work/");

// Languages that have the /work pages so far (translations come later).
export const WORK_LOCALES: Locale[] = ["en"];
