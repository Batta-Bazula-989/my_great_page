import type { SeoPageContent } from "../types";

export const crmPages: SeoPageContent[] = [
  {
    slug: "attio-workflows-automation",
    category: "crm",
    navLabel: "Attio workflows",
    primaryKeyword: "Attio workflows automation",
    title: "Attio Workflows: Triggers, Blocks, Credits and the API",
    description:
      "Attio workflows explained: trigger and action blocks, how workflow credits are used, REST API rate limits, webhook signatures and ways to link Attio to support.",
    h1: "Attio workflows: how CRM automation works in Attio",
    intro:
      "Attio automates CRM work with workflows. A workflow starts from a trigger block and runs a chain of action blocks, such as updating a record, creating a task, sending a Slack message or making an HTTP request. Workflow runs use workspace credits, and everything else connects through Attio's REST API and webhooks.",
    keyFacts: [
      "An Attio workflow is built from a trigger block, which starts it, and action blocks, which do the work.",
      "Workflows use workspace credits. Most blocks use one credit, and a block that fails, plus every block after it, uses none.",
      "Attio's REST API allows 100 read requests and 25 write requests per second. Over the limit it returns HTTP 429 with a Retry-After header.",
      "Attio signs webhooks with an HMAC-SHA256 of the request body, sent in the Attio-Signature header.",
    ],
    sections: [
      {
        heading: "How Attio workflows are built",
        blocks: [
          {
            type: "p",
            text: "You build a workflow on a canvas. The trigger block decides when it runs, and the action blocks after it decide what happens. Attio's block library groups triggers into four kinds:",
          },
          {
            type: "ul",
            items: [
              "Record triggers, such as 'Record created'.",
              "List triggers, such as 'Record added to list'.",
              "Task triggers, such as 'Task created'.",
              "Utility triggers, such as 'Manual run', a schedule or an incoming webhook.",
            ],
          },
          {
            type: "p",
            text: "Attio's help center gives updating a record, creating a task, sending a Slack message, enrolling someone in a sequence and making an HTTP request as examples of action blocks. You can also describe a workflow in plain language and let Ask Attio build it. Apps built with the Attio SDK can add their own blocks, which then appear in the block picker next to the built-in ones.",
          },
          {
            type: "note",
            text: "By default, a workflow can't write to an object. An admin, or a member with full access to that object, has to grant the workflow access first. Check this before you test a workflow that updates records.",
          },
        ],
      },
      {
        heading: "How workflows use credits",
        blocks: [
          {
            type: "p",
            text: "Workflow runs and AI features draw on the workspace's shared credits. Attio's billing docs describe how they are counted:",
          },
          {
            type: "ul",
            items: [
              "Most workflow blocks use one credit each time they run.",
              "Credits are only charged for blocks that actually run. If a run fails partway, the failed block and every block after it use no credits.",
              "Recalculating AI attributes also uses credits.",
              "Admins can see credit usage per workflow in Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "The number of credits included differs by plan, and Attio has changed its plans before. Check the current allowance on Attio's pricing page and estimate usage from the number of blocks per run times your expected runs per month.",
          },
        ],
      },
      {
        heading: "The Attio API and webhooks",
        blocks: [
          {
            type: "p",
            text: "For anything a workflow can't do on its own, Attio has a REST API and outbound webhooks. Here is what the developer docs say about each.",
          },
          {
            type: "table",
            caption: "Attio REST API and webhooks (Attio developer docs, checked November 2026)",
            head: ["Topic", "What Attio documents"],
            rows: [
              ["Rate limits", "100 requests per second for reads and 25 per second for writes. Over the limit, HTTP 429 with a Retry-After header."],
              ["Listing endpoints", "List records and List entries also have score-based limits, counted over a 10-second window across all apps and tokens."],
              ["Authentication", "An API key for a single workspace, or OAuth 2.0 for apps used across several workspaces. Tokens are sent as Bearer tokens, and scopes are set per token."],
              ["Webhook events", "Events include record.created, list-entry.created, note.created and task.created."],
              ["Webhook signature", "An HMAC-SHA256 of the raw request body, made with the webhook's secret and hex-encoded, in the Attio-Signature header."],
              ["Retries", "Each message carries an Idempotency-Key header that stays the same when Attio retries it."],
            ],
          },
          {
            type: "p",
            text: "To check that a webhook came from Attio, recompute the HMAC-SHA256 of the raw body with the webhook secret and compare it with the Attio-Signature header. Attio also sends the same value as X-Attio-Signature for older middleware. Use the Idempotency-Key header to skip messages you have already processed, so a retry doesn't create a second task or Slack message.",
          },
        ],
      },
      {
        heading: "Connecting Attio to your support tools",
        blocks: [
          {
            type: "p",
            text: "Attio has a Slack app for notifications and an official Zapier app. Zapier lists ready-made connections between Attio and helpdesks such as Zendesk and Intercom. For more control, connect a helpdesk to Attio's API and webhooks through n8n or Make. Here is a common pattern, described as steps. It shows how the pieces fit together. It isn't a TascaLab case study.",
          },
          {
            type: "ol",
            items: [
              "Trigger: your helpdesk sends a webhook to n8n or Make when a ticket is created or escalated.",
              "Look up: the workflow finds the customer's company record in Attio through the API, staying within the 100 reads per second limit.",
              "Update: it writes the ticket's status or category to an attribute on the record, or creates a task for the account owner.",
              "React in Attio: an Attio workflow triggered by that record update sends a Slack message to the account owner.",
              "Handle errors: wait and retry on HTTP 429, and use the Idempotency-Key header to drop duplicate webhook deliveries.",
            ],
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab connects tools like Attio to the helpdesk and chat tools you already use, through APIs, webhooks, n8n and Make, with no platform switch. Custom Automation projects cost {{price:custom}}. Most setups take 1 to 3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute Health Check call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What are Attio workflows?",
        a: "Attio's automation tool. A workflow starts from a trigger block, such as a record being created or a manual run, and then runs action blocks, such as updating a record, creating a task, sending a Slack message or making an HTTP request.",
      },
      {
        q: "Do Attio workflows cost credits?",
        a: "Yes. Workflow runs use the workspace's shared credits. Most blocks use one credit per run, and blocks that fail or never run use none. The number of credits included depends on your plan.",
      },
      {
        q: "What are the Attio API rate limits?",
        a: "100 requests per second for reads and 25 per second for writes. Over the limit, Attio returns HTTP 429 with a Retry-After header. The List records and List entries endpoints also have score-based limits.",
      },
      {
        q: "How do I verify an Attio webhook?",
        a: "Compute an HMAC-SHA256 of the raw request body with the webhook's secret, hex-encode it and compare it with the Attio-Signature header.",
      },
    ],
    sources: [
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-02",
  },
  {
    slug: "attio-vs-hubspot-automation",
    category: "crm",
    navLabel: "Attio vs HubSpot automation",
    primaryKeyword: "Attio vs HubSpot automation",
    title: "Attio vs HubSpot Automation: Workflows, API, Webhooks",
    description:
      "Attio vs HubSpot automation compared: who gets workflows, limits and credits, triggers, code and webhook steps, API rate limits and webhook signature checks.",
    h1: "Attio vs HubSpot automation: workflows, limits, API and webhooks",
    intro:
      "Attio and HubSpot both automate CRM work with visual workflows, but they limit them differently. HubSpot includes workflows only in Professional and Enterprise editions and caps how many you can create, while Attio meters workflow runs with workspace credits. Their APIs and webhooks also differ in rate limits and in how you verify a request.",
    keyFacts: [
      "HubSpot workflows need a Professional or Enterprise subscription. Marketing, Sales or Service Hub Professional allows up to 300 workflows, and Enterprise up to 1,000.",
      "Attio meters workflows with workspace credits. Most blocks use one credit per run.",
      "HubSpot custom code actions must finish within 20 seconds and can use up to 128 MB of memory.",
      "Attio's API allows 100 reads and 25 writes per second. HubSpot private apps on Professional or Enterprise get 190 requests per 10 seconds.",
      "HubSpot signs webhooks with X-HubSpot-Signature-v3. Attio uses the Attio-Signature header.",
    ],
    sections: [
      {
        heading: "Side-by-side comparison",
        blocks: [
          {
            type: "table",
            caption: "Attio vs HubSpot automation (vendor docs, checked November 2026)",
            head: ["Question", "Attio", "HubSpot"],
            rows: [
              ["How usage is limited", "Workflow runs use workspace credits. Most blocks use one credit.", "Professional or Enterprise required. A cap on the number of workflows per edition."],
              ["Triggers", "Record, list, task and utility triggers, including a schedule, a webhook and a manual run", "Filter-, event-, schedule- and webhook-based enrollment triggers"],
              ["Calling another system", "HTTP request block. Apps can add custom blocks.", "'Send a webhook' and 'Custom code' actions, in Data Hub Professional and Enterprise"],
              ["Slack", "Slack message block, with Attio's Slack app", "Slack notification action, with the Slack integration installed"],
              ["API rate limit", "100 reads and 25 writes per second", "Private apps: 100 per 10 seconds on Free and Starter, 190 on Professional and Enterprise, plus a daily limit"],
              ["Webhook signature", "HMAC-SHA256 of the body, hex-encoded, in Attio-Signature", "HMAC-SHA256 of method, URI, body and timestamp, base64-encoded, in X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "HubSpot workflows: editions and limits",
        blocks: [
          {
            type: "p",
            text: "HubSpot's workflows FAQ says a Professional or Enterprise subscription is required to use workflows. How many you can create depends on the edition:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales or Service Hub Professional: up to 300 workflows.",
              "Marketing, Sales or Service Hub Enterprise: up to 1,000 workflows.",
              "With the Brands add-on: 100 more workflows.",
              "With several hubs, the subscription with the highest limit sets your limit.",
            ],
          },
          {
            type: "p",
            text: "Only custom workflows built in the workflows tool count toward the limit. Simple automations in tools such as forms don't. By default, a record enrolls in a workflow only the first time it meets the enrollment triggers. You can turn on re-enrollment, but it can't use AND criteria and it doesn't enroll records retroactively.",
          },
          {
            type: "p",
            text: "Two actions matter most for integrations: 'Send a webhook' and 'Custom code'. HubSpot lists both for Data Hub Professional and Enterprise, the hub previously called Operations Hub. Custom code actions run Node.js or Python, must finish within 20 seconds and can use up to 128 MB of memory, so long jobs belong in an external tool such as n8n.",
          },
        ],
      },
      {
        heading: "Attio workflows: metered with credits",
        blocks: [
          {
            type: "p",
            text: "Attio meters workflows by usage. Runs draw on the workspace's shared credits, most blocks use one credit, and blocks that fail or never run use none. Admins can see credit usage per workflow in Workspace settings. The credits included differ by plan, so check Attio's pricing page and estimate blocks per run times runs per month.",
          },
          {
            type: "p",
            text: "To reach another system from an Attio workflow, use the HTTP request block, or build an app with the Attio SDK that adds its own workflow blocks.",
          },
        ],
      },
      {
        heading: "APIs and webhooks for integrations",
        blocks: [
          {
            type: "p",
            text: "HubSpot limits private apps per 10 seconds and per day. Free and Starter accounts get 100 requests per 10 seconds and 250,000 per day. Professional gets 190 per 10 seconds and 625,000 per day, and Enterprise gets 190 per 10 seconds and 1,000,000 per day. The 10-second limit applies to each app, and the daily limit is shared by all apps in the account. Over the limit, HubSpot returns HTTP 429, and its guidelines ask that error responses stay under 5% of your daily requests.",
          },
          {
            type: "p",
            text: "Attio counts per second: 100 reads and 25 writes, with HTTP 429 and a Retry-After header when you go over. Its List records and List entries endpoints also have score-based limits, counted over a 10-second window.",
          },
          {
            type: "p",
            text: "Both sign their webhooks, but differently. HubSpot's v3 signature arrives in X-HubSpot-Signature-v3 with X-HubSpot-Request-Timestamp. It is an HMAC-SHA256, base64-encoded and made with the app's client secret, over the method, URI, body and timestamp, and HubSpot says to reject requests whose timestamp is more than 5 minutes old. Attio's Attio-Signature header is a hex-encoded HMAC-SHA256 of the raw body, made with the webhook's secret. Attio also sends an Idempotency-Key header that stays the same across retries.",
          },
        ],
      },
      {
        heading: "Which fits a support team",
        blocks: [
          {
            type: "ul",
            items: [
              "If your support team already works in HubSpot's help desk, tickets, SLAs and ticket workflows live in the same account as the CRM, and workflows are included from Professional.",
              "If you use Attio as the CRM and a separate helpdesk, connect the two through the APIs and webhooks with n8n, Make or Zapier, which has an official Attio app.",
              "If your automations call other systems, budget for Data Hub Professional in HubSpot, or plan around the HTTP request block in Attio.",
              "If volumes are high, check the API limits above against your peak ticket volume before you choose where the logic runs.",
            ],
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds automations on top of the CRM and helpdesk you already use, with APIs, webhooks, n8n and Make, so you don't have to switch platforms. Custom Automation projects cost {{price:custom}}. Most setups take 1 to 3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute Health Check call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does HubSpot include workflows on every plan?",
        a: "No. HubSpot's workflows FAQ says a Professional or Enterprise subscription is required. Marketing, Sales or Service Hub Professional allows up to 300 workflows, and Enterprise up to 1,000.",
      },
      {
        q: "How does Attio limit workflows?",
        a: "With workspace credits. Workflow runs draw on the workspace's shared credits, most blocks use one credit per run, and the credits included depend on your plan.",
      },
      {
        q: "Can I run custom code in HubSpot or Attio workflows?",
        a: "HubSpot has a 'Custom code' action in Data Hub Professional and Enterprise that runs Node.js or Python, within 20 seconds and 128 MB of memory. Attio offers an HTTP request block, and apps built with its SDK can add custom blocks.",
      },
      {
        q: "How do I verify webhooks from HubSpot and Attio?",
        a: "For HubSpot, recompute the HMAC-SHA256 of method, URI, body and timestamp with your client secret and compare it with X-HubSpot-Signature-v3. For Attio, compare an HMAC-SHA256 of the raw body, made with the webhook secret, with the Attio-Signature header.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Workflows FAQ", url: "https://knowledge.hubspot.com/workflows/workflows-faq" },
      { label: "HubSpot Knowledge Base — Set your workflow enrollment triggers", url: "https://knowledge.hubspot.com/workflows/set-your-workflow-enrollment-triggers" },
      { label: "HubSpot Knowledge Base — Add re-enrollment triggers to a workflow", url: "https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "HubSpot Developers — Custom code actions", url: "https://developers.hubspot.com/docs/api-reference/latest/automation/workflow-actions/custom-code-actions" },
      { label: "HubSpot Developers — API usage guidelines and limits", url: "https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines" },
      { label: "HubSpot Developers — Validating requests", url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation" },
      { label: "HubSpot — Fall 2025 Spotlight", url: "https://www.hubspot.com/company-news/fall-2025-spotlight" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
