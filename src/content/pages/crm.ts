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
      "Triggers, logic and data lookups are free. Blocks that write data, call outside systems or use AI use workspace credits, most of them one credit per run.",
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
            text: "Attio's help center gives updating a record, creating a task, sending a Slack message, enrolling someone in a sequence and making an HTTP request as examples of action blocks. An 'Execute code' block runs your own JavaScript as a step, with a 100-second timeout. You can also describe a workflow in plain language and let Ask Attio build it. Apps built with the Attio SDK can add their own blocks, which then appear in the block picker next to the built-in ones.",
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
            text: "Workflow runs draw on the workspace's shared credits, not on seat credits. Attio's help center describes how they are counted in the new workflows:",
          },
          {
            type: "ul",
            items: [
              "Triggers, logic and data lookups are free. Credits are only used when a block writes data, sends or receives something externally, or uses AI.",
              "Record writes, tasks, sequence enrollment, HTTP requests and integration blocks cost 1 credit per run. AI blocks and 'Execute code' have variable costs.",
              "Only the path a run takes is charged. If a run fails partway, the failed block and every block after it use no credits, but blocks that ran before the failure are charged.",
              "Building a workflow with Ask Attio uses seat credits, not the shared workspace credits.",
            ],
          },
          {
            type: "p",
            text: "As of November 2026, Attio includes 250 workspace credits a month on Free, 1,500 on Plus and 10,000 on Pro. Plans change, so check Attio's pricing page, then estimate usage from the credit-using blocks per run times your expected runs per month.",
          },
        ],
      },
      {
        heading: "The Attio API and webhooks",
        links: ["attio-vs-hubspot-automation"],
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
        links: ["n8n-vs-make-vs-zapier", "slack-support-automation"],
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
        a: "Yes, for blocks that write data, call outside systems or use AI. Most of those cost one credit per run, while triggers, logic and data lookups are free. As of November 2026, Free includes 250 workspace credits a month, Plus 1,500 and Pro 10,000.",
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
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/getting-started-with-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-03",
    published: "2026-11-02",
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
      "Attio meters workflows with workspace credits. Triggers, logic and lookups are free, and most blocks that write data or call out use one credit per run.",
      "HubSpot custom code actions must finish within 20 seconds and can use up to 128 MB of memory. Attio's 'Execute code' block times out after 100 seconds.",
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
              ["How usage is limited", "Workspace credits. Triggers, logic and lookups are free, and most blocks that write or call out use one credit.", "Professional or Enterprise required. A cap on the number of workflows per edition."],
              ["Triggers", "Record, list, task and utility triggers, including a schedule, a webhook and a manual run", "Filter-, event-, schedule- and webhook-based enrollment triggers"],
              ["Calling another system and code", "HTTP request block, and an 'Execute code' block for JavaScript. Apps can add custom blocks.", "'Send a webhook' and 'Custom code' actions, in Data Hub Professional and Enterprise"],
              ["Slack", "Slack message block, with Attio's Slack app", "Slack notification action, with the Slack integration installed"],
              ["API rate limit", "100 reads and 25 writes per second", "Private apps: 100 per 10 seconds on Free and Starter, 190 on Professional and Enterprise, plus a daily limit"],
              ["Webhook signature", "HMAC-SHA256 of the body, hex-encoded, in Attio-Signature", "HMAC-SHA256 of method, URI, body and timestamp, base64-encoded, in X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "HubSpot workflows: editions and limits",
        links: ["hubspot-service-hub-automation"],
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
            text: "Two actions matter most for integrations: 'Send a webhook' and 'Custom code'. HubSpot lists both for Data Hub Professional and Enterprise, the hub previously called Operations Hub. Custom code actions run Node.js by default, or Python as a beta, must finish within 20 seconds and can use up to 128 MB of memory, so long jobs belong in an external tool such as n8n.",
          },
        ],
      },
      {
        heading: "Attio workflows: metered with credits",
        links: ["attio-workflows-automation"],
        blocks: [
          {
            type: "p",
            text: "Attio meters workflows by usage. Runs draw on the workspace's shared credits. Triggers, logic and data lookups are free, and blocks that write data, call outside systems or use AI use credits, most of them one per run. As of November 2026, Free includes 250 workspace credits a month, Plus 1,500 and Pro 10,000.",
          },
          {
            type: "p",
            text: "To reach another system from an Attio workflow, use the HTTP request block. The 'Execute code' block runs your own JavaScript with a 100-second timeout and a variable credit cost, and apps built with the Attio SDK can add their own workflow blocks.",
          },
        ],
      },
      {
        heading: "APIs and webhooks for integrations",
        links: ["hubspot-zendesk-integration"],
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
              "If your automations call other systems, budget for Data Hub Professional in HubSpot, or plan around the HTTP request and 'Execute code' blocks in Attio.",
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
        a: "With workspace credits. Triggers, logic and lookups are free, and most blocks that write data or call outside systems use one credit per run. AI and code blocks vary. The credits included depend on your plan.",
      },
      {
        q: "Can I run custom code in HubSpot or Attio workflows?",
        a: "HubSpot has a 'Custom code' action in Data Hub Professional and Enterprise that runs Node.js, or Python as a beta, within 20 seconds and 128 MB of memory. Attio has an 'Execute code' block that runs JavaScript with a 100-second timeout, and apps built with its SDK can add custom blocks.",
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
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-03",
    published: "2026-11-02",
  },
  {
    slug: "hubspot-zendesk-integration",
    category: "crm",
    navLabel: "HubSpot Zendesk integration",
    primaryKeyword: "HubSpot Zendesk integration",
    title: "HubSpot Zendesk Integration: What Syncs and Your Options",
    description:
      "HubSpot Zendesk integration guide: what the free Zendesk for HubSpot app syncs and doesn't, action flows, two-way sync apps and custom builds with both APIs.",
    h1: "HubSpot Zendesk integration: what syncs, what doesn't and your options",
    intro:
      "Zendesk's own HubSpot integration is free and quick to connect, but it only sends ticket events one way, from Zendesk to a contact's timeline in HubSpot. If you need more, Zendesk action flows can create and update HubSpot records, Marketplace apps offer two-way sync, and a custom build with webhooks and both APIs can move exactly the data you choose.",
    keyFacts: [
      "The Zendesk Support for HubSpot integration is one-way: ticket information flows from Zendesk to HubSpot.",
      "It creates three Zendesk triggers, for new tickets, solved tickets and CSAT ratings, plus a webhook called HubSpot Integration.",
      "Tickets appear only on the HubSpot contact timeline, not on companies or deals, and only the user's email address is synced.",
      "Zendesk action flows have HubSpot actions that create, update and look up contacts, companies, deals and tickets.",
      "Zendesk stopped issuing new API tokens on October 27, 2026, so custom builds should use OAuth.",
    ],
    sections: [
      {
        heading: "Four ways to connect HubSpot and Zendesk",
        links: ["hubspot-service-hub-automation", "zendesk-automation"],
        blocks: [
          {
            type: "table",
            caption: "HubSpot and Zendesk integration options (vendor docs and listings, checked November 2026)",
            head: ["Option", "Direction", "What it moves"],
            rows: [
              ["Zendesk Support for HubSpot", "Zendesk to HubSpot only", "Events for new tickets, solved tickets and CSAT ratings, sent to the contact timeline"],
              ["Zendesk action flows with HubSpot actions", "Zendesk to HubSpot, step by step", "Creates, updates and looks up contacts, companies, deals and tickets"],
              ["Marketplace apps", "Depends on the app; some are two-way", "Whatever the app supports, such as contacts or deals"],
              ["Custom build with webhooks and both APIs", "Either direction", "Exactly the fields and events you choose"],
            ],
          },
          {
            type: "p",
            text: "Start with the question your team is trying to answer. If sales and account managers only need to see a contact's support history in HubSpot, the free integration may be enough. If tickets need to change HubSpot data, such as a company property or a deal stage, you need action flows, an app or a custom build.",
          },
        ],
      },
      {
        heading: "Setting up the free Zendesk Support for HubSpot integration",
        blocks: [
          {
            type: "ol",
            items: [
              "Open the integration's install page and enter your Zendesk subdomain.",
              "Authorize the connection in both Zendesk and HubSpot.",
              "Zendesk creates three triggers, for new tickets, solved tickets and CSAT ratings, and a webhook called HubSpot Integration.",
              "Edit the conditions of those triggers if you only want some tickets to reach HubSpot.",
            ],
          },
          {
            type: "p",
            text: "Zendesk documents a few limits. The integration is one-way, from Zendesk to HubSpot. Only the user's email address is synced, not the first or last name. Tickets are shown only on the contact timeline, not on company or deal records. You can change which tickets are sent by editing the trigger conditions, but you can't change the JSON payload. To turn the integration off, disable the three triggers.",
          },
          {
            type: "note",
            text: "Don't test the HubSpot Integration webhook from Admin Center. Zendesk warns that doing so can send invalid JSON and disconnect the integration. Test by creating or solving a real test ticket instead.",
          },
        ],
      },
      {
        heading: "Zendesk action flows with HubSpot actions",
        blocks: [
          {
            type: "p",
            text: "Action flows are Zendesk's builder for multi-step automations that reach external systems. The HubSpot connector adds these actions:",
          },
          {
            type: "ul",
            items: [
              "Create and update contacts, companies, deals and tickets in HubSpot.",
              "Look up contacts, companies, deals and tickets, and look up users.",
              "Look up a contact by Contact ID or email. If you give both, Contact ID takes precedence.",
              "Connect with OAuth 2.0 from 'External actions' in the step sidebar. Zendesk recommends a dedicated service account and refreshes tokens automatically.",
            ],
          },
          {
            type: "p",
            text: "Action flows use action credits. Zendesk lists 100,000 actions a month for Suite Professional and 225,000 for Suite Enterprise, sends an email at 80% and 100% of the allowance, and sells more in units of 100,000. Admins can see usage in Admin Center under Account, then Usage, then Summary. Allowances and plan availability change, so check them in your own account before you build on action flows.",
          },
        ],
      },
      {
        heading: "Two-way sync apps",
        blocks: [
          {
            type: "p",
            text: "The Zendesk Marketplace lists a Data sync by HubSpot app that it describes as a bi-directional, real-time sync between HubSpot and Zendesk. Installing it needs a HubSpot Super Admin or a user with App Marketplace permissions, who enters the Zendesk subdomain, authorizes the connection and chooses what to sync. Third-party apps such as HubSpot CRM Connect add their own features. Marketplace listings are marketing pages, so check which records and fields an app really syncs on its setup screen before you rely on it.",
          },
          {
            type: "p",
            text: "HubSpot's data sync documentation explains how two-way syncs match records: by default, contacts are matched by email and companies by name or domain, and only contacts with a valid email address are synced. Clean up duplicate contacts and missing emails before you turn on a two-way sync, or the sync will copy the mess into both tools.",
          },
        ],
      },
      {
        heading: "Custom builds with webhooks and both APIs",
        links: ["n8n-zendesk-integration", "n8n-vs-make-vs-zapier"],
        blocks: [
          {
            type: "p",
            text: "A custom build gives you full control, for example showing open tickets on HubSpot company records, which the free integration can't do. Here is a common pattern, described as steps. It isn't a TascaLab case study.",
          },
          {
            type: "ol",
            items: [
              "Trigger: a Zendesk trigger with the Notify by > Active webhook action sends the ticket ID and requester email to n8n or Make when a ticket is created or its status changes.",
              "Verify: the workflow checks the X-Zendesk-Webhook-Signature header, so only real Zendesk requests are processed.",
              "Look up: it finds the HubSpot contact by email through the CRM API, then the company the contact is associated with.",
              "Update: it writes the ticket count or latest status to a company property, which HubSpot lists, reports and workflows can use.",
              "Handle errors: it waits and retries on HTTP 429, since both Zendesk and HubSpot limit API requests.",
            ],
          },
          {
            type: "p",
            text: "For the other direction, a HubSpot workflow can call your endpoint with the 'Send a webhook' action, which HubSpot lists for Data Hub Professional and Enterprise and which only accepts HTTPS URLs. On the Zendesk side, use OAuth rather than API tokens. Zendesk stopped letting existing accounts create new API tokens on October 27, 2026, and all API tokens stop working on April 30, 2027. OAuth clients created on or after April 30, 2026 get access tokens that expire after 30 minutes by default, so the integration needs refresh-token handling.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab connects Zendesk and HubSpot through APIs, webhooks, n8n and Make, on top of the tools you already use. Custom Automation projects cost {{price:custom}}. Most setups take 1 to 3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute Health Check call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is the HubSpot Zendesk integration two-way?",
        a: "Not the free Zendesk Support for HubSpot integration. It is one-way, sending ticket information from Zendesk to the HubSpot contact timeline. For two-way sync, use a Marketplace app such as Data sync by HubSpot, or a custom build.",
      },
      {
        q: "Can I see Zendesk tickets on HubSpot companies or deals?",
        a: "Not with the free integration, which only shows tickets on the contact timeline. You can do it with a custom build that writes ticket data to company or deal properties through the HubSpot API.",
      },
      {
        q: "Why did my HubSpot integration disconnect after I tested its webhook?",
        a: "Zendesk warns that testing the HubSpot Integration webhook from Admin Center can send invalid JSON and disconnect the integration. Test with a real ticket instead.",
      },
      {
        q: "Can I still use a Zendesk API token for a HubSpot integration?",
        a: "Only one you already have. Zendesk stopped issuing new API tokens on October 27, 2026, deactivates tokens that go unused for 30 days, and turns all API tokens off on April 30, 2027. Use OAuth for new integrations.",
      },
    ],
    sources: [
      { label: "Zendesk Help — Setting up the Zendesk Support for HubSpot integration", url: "https://support.zendesk.com/hc/en-us/articles/4408884090650-Setting-up-the-Zendesk-Support-for-HubSpot-integration" },
      { label: "Zendesk Help — Using HubSpot actions in action flows", url: "https://support.zendesk.com/hc/en-us/articles/10917655354138-Using-HubSpot-actions-in-action-flows" },
      { label: "Zendesk Help — Monitoring the usage of action credits and action flow activity", url: "https://support.zendesk.com/hc/en-us/articles/10149993578522-Monitoring-the-usage-of-action-credits-and-action-flow-activity" },
      { label: "Zendesk Marketplace — Data sync by HubSpot", url: "https://www.zendesk.com/marketplace/apps/support/431348/data-sync-by-hubspot/" },
      { label: "Zendesk Marketplace — HubSpot CRM Connect", url: "https://www.zendesk.com/marketplace/apps/support/959977/hubspot-crm-connect/" },
      { label: "HubSpot Knowledge Base — Connect and use HubSpot data sync", url: "https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows", url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "Zendesk Help — Announcing the removal of API tokens as an authentication method for API requests", url: "https://support.zendesk.com/hc/en-us/articles/10851263566234-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests" },
      { label: "Zendesk Developer Docs — Working with OAuth refresh tokens", url: "https://developer.zendesk.com/documentation/api-basics/authentication/refresh-token/" },
    ],
    related: ["hubspot-service-hub-automation", "zendesk-automation", "n8n-zendesk-integration"],
    updated: "2026-11-03",
    published: "2026-11-03",
  },
  {
    slug: "ai-lead-scoring",
    category: "crm",
    navLabel: "AI lead scoring",
    primaryKeyword: "AI lead scoring",
    title: "AI Lead Scoring: ICP Fit, HubSpot and Attio Setup",
    description:
      "AI lead scoring explained: scoring leads against your ideal customer profile, HubSpot's lead scoring tool and limits, and writing scores to Attio via API.",
    h1: "AI lead scoring: how scoring against your ICP works",
    intro:
      "Lead scoring turns raw leads into a ranked list by giving each one points for how well it fits your ideal customer profile (ICP) and how it behaves. AI enters in two ways: platform-native scoring, such as HubSpot's AI-built lead scores, and external classification, where a model reads a reply or an enrichment record, computes a fit score and writes it back to your CRM through the API.",
    keyFacts: [
      "HubSpot's lead scoring tool needs Marketing Hub or Sales Hub Professional or Enterprise; AI-built contact scores need Marketing Hub Enterprise.",
      "HubSpot's AI lead scores need a minimum sample of 50 contacts — 25 converted and 25 non-converted — before a score can be generated.",
      "Attio has no dedicated scoring tool: on Pro, Enterprise and Ultra a formula attribute can add up points automatically; on other plans a workflow or the API fills a number attribute.",
      "Attio number attributes store floating-point numbers with up to four decimal places — enough for a 0–100 fit score.",
      "An external score is written to HubSpot with a PATCH to /crm/v3/objects/contacts/{contactId}, and to Attio with a PATCH to /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "What AI lead scoring means",
        blocks: [
          {
            type: "p",
            text: "Scoring models usually combine two kinds of signal. Engagement signals measure what a lead does: opens, clicks, replies, page visits, meetings booked. Fit signals measure who the lead is, compared with your ideal customer profile: industry, company size, country, role, tools in use. A fit score answers \"should we want this lead?\", an engagement score answers \"does this lead want us?\".",
          },
          {
            type: "p",
            text: "AI shows up in two places. CRMs ship native machine-learning scores that learn from your historical conversions, like HubSpot's AI-built lead scores. And teams run their own classification outside the CRM: a language model reads an outreach reply or an enrichment record, labels it (interested, not now, wrong person) or rates ICP fit, and the result is written into a CRM field through the API. The second pattern works with any CRM that has an API, and it is the one this page focuses on.",
          },
        ],
      },
      {
        heading: "Lead scoring inside HubSpot",
        links: ["tool:leadScore", "hubspot-zendesk-integration"],
        blocks: [
          {
            type: "p",
            text: "HubSpot's current scoring lives in the lead scoring tool. It is available with Marketing Hub or Sales Hub Professional or Enterprise. Marketing Hub scores contacts, both hubs score companies, and Sales Hub scores deals. You can build engagement scores, fit scores based on property values, and combined scores, each from groups of weighted criteria with positive and negative points.",
          },
          {
            type: "ul",
            items: [
              "The default maximum for a score is 100 points; the score limit can be set to ±100, ±200, ±300, ±400, ±500, ±1,000 or ±10,000.",
              "Score decay can reduce engagement points over time, with intervals of every 1, 3, 6 or 12 months, each month counted as 30 days.",
              "Thresholds split a score into High, Medium and Low bands; combined scores use an A1–C3 matrix of fit and engagement.",
              "AI-built contact scores (Marketing Hub Enterprise) learn from contacts that moved between two lifecycle stages and need at least 50 contacts — 25 converted and 25 non-converted.",
            ],
          },
          {
            type: "note",
            text: "The tool creates its own score properties, and they are tied to the score: delete the score and the properties go with it, and they cannot be edited from outside. An externally computed AI score therefore belongs in a custom number property you create yourself, not in a tool-managed score property.",
          },
        ],
      },
      {
        heading: "Scoring in Attio",
        links: ["attio-workflows-automation"],
        blocks: [
          {
            type: "p",
            text: "Attio takes a different approach: there is no dedicated scoring tool and no score field type. On the Pro, Enterprise and Ultra plans, a formula attribute can calculate a points-based score from a record's own fields with if() conditions; a formula that returns a number becomes a number attribute, recalculates automatically when the fields it uses change, and uses no workspace credits. Otherwise a score is just an attribute you fill: Attio's own MQL Scoring workflow template scores leads with workflow blocks, and its automations page lists a \"Scoring Agent\" among the AI agents that run inside workflows — an agent step with instructions, not a separate scoring product. Three attribute types fit a score you fill yourself:",
          },
          {
            type: "ul",
            items: [
              "A number attribute stores floating-point numbers with up to four decimal places and can be filtered with comparisons such as greater-than-or-equal — a natural home for a 0–100 fit score.",
              "A select attribute holds predefined options, good for bands such as A, B and C. Writing a value whose option doesn't exist returns an error instead of creating the option.",
              "A rating attribute is a numeric value from 0 to 5, shown as stars.",
            ],
          },
          {
            type: "p",
            text: "Workflows are available on all Attio plans. A workflow can start from a record change, a schedule or a \"Webhook received\" trigger, so an external scorer can start one directly; a \"Custom agent\" block can run an AI step with structured output, followed by an update-record block to save it. Outbound webhooks are signed with an HMAC-SHA256 of the body in the Attio-Signature header, so your scorer can also react to Attio events safely.",
          },
        ],
      },
      {
        heading: "Writing an external AI score to your CRM",
        links: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier"],
        blocks: [
          {
            type: "table",
            caption: "Writing a score via the API (vendor docs, checked November 2026)",
            head: ["Step", "HubSpot", "Attio"],
            rows: [
              [
                "Create the field",
                "POST /crm/v3/properties/{objectType} with groupName, name, label, type \"number\", fieldType \"number\"",
                "Create a number or select attribute on the object in workspace settings or via the attributes API",
              ],
              [
                "Write one record",
                "PATCH /crm/v3/objects/contacts/{contactId} with {\"properties\": {...}}; an email can be used with idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} with the attribute slug in the body",
              ],
              [
                "Write in bulk",
                "POST /crm/v3/objects/contacts/batch/update, or batch/upsert to create-or-update",
                "One request per record, within the API's rate limits",
              ],
              [
                "Auth",
                "Private app access token as a Bearer token",
                "Workspace API key or OAuth 2.0, as a Bearer token; updating records needs the record_permission:read-write and object_configuration:read scopes",
              ],
            ],
          },
          {
            type: "p",
            text: "A typical pipeline, described as steps — it shows how the pieces fit together, not a TascaLab case study:",
          },
          {
            type: "ol",
            items: [
              "Collect: a new lead arrives from a form, an outreach reply or a visitor-identification tool.",
              "Classify: an AI model labels the reply or the lead (interested, not interested, wrong person, out of market).",
              "Score: the lead's firmographics are compared against your ICP and a fit score is computed.",
              "Write: the score lands in a custom number property in HubSpot or a number attribute in Attio, through the endpoints above.",
              "Alert: a CRM workflow or a Slack message tells the owner when a lead crosses the threshold.",
            ],
          },
        ],
      },
      {
        heading: "Where the replies come from: lemlist",
        blocks: [
          {
            type: "p",
            text: "Outreach replies are one of the strongest scoring signals, and lemlist exposes them in two ways. Webhooks send real-time POST callbacks for events such as emailsReplied, linkedinReplied and whatsappReplied, plus lead states such as interested and notInterested; a workspace can hold up to 200 webhooks, and each target URL must be unique — register a URL without an event type to receive every event and filter on your side. The activities API (GET /activities) retrieves the same history filtered by type, campaign and date, for polling instead of pushing. Authentication is HTTP Basic with an empty username and the API key as the password — not a Bearer token.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds exactly this pipeline: leads from one source classified and scored by AI against your ICP and logged to your CRM, as the Lead Capture & Scoring package ({{price:leadScoring}} one-time). Connecting outreach, calling or enrichment tools to HubSpot or Attio is the CRM Integration package ({{price:crmIntegration}} one-time). Most setups take 1–3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute Health Check call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is AI lead scoring?",
        a: "Ranking leads by combining engagement signals (what a lead does) with fit signals (how well it matches your ideal customer profile), with AI either built into the CRM — like HubSpot's AI lead scores — or run outside it, classifying replies and computing a fit score that is written back through the API.",
      },
      {
        q: "What does HubSpot's lead scoring tool require?",
        a: "Marketing Hub or Sales Hub Professional or Enterprise. AI-built contact scores need Marketing Hub Enterprise and at least 50 contacts — 25 converted and 25 non-converted — to generate a score.",
      },
      {
        q: "Does Attio have built-in lead scoring?",
        a: "No dedicated scoring tool and no score field type. On Pro, Enterprise and Ultra, a formula attribute can calculate a points-based score automatically; otherwise scores live in number or select attributes, filled by workflows — including AI agent steps, which Attio markets as a Scoring Agent — or by an external tool through the API.",
      },
      {
        q: "How do I write a score into HubSpot or Attio from outside?",
        a: "HubSpot: create a custom number property, then PATCH /crm/v3/objects/contacts/{contactId}, or use the batch update and upsert endpoints. Attio: PATCH /v2/objects/{object}/records/{record_id} with a Bearer token holding the record_permission:read-write and object_configuration:read scopes.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Help — Formula attributes", url: "https://attio.com/help/reference/managing-your-data/attributes/formula-attributes" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-13",
    published: "2026-11-12",
  },
  {
    slug: "website-visitor-identification",
    category: "crm",
    navLabel: "Visitor identification",
    primaryKeyword: "website visitor identification",
    title: "Website Visitor Identification: How It Works, Limits",
    description:
      "How website visitor identification works: reverse IP lookup and trackers, what it can and can't see, GDPR and cookie consent rules, and HubSpot buyer intent.",
    h1: "Website visitor identification: how it works and its limits",
    intro:
      "Visitor identification tools match the anonymous traffic on your website to companies, using a tracking script, reverse IP lookup and company databases. They identify companies, not people, their coverage depends on the networks your visitors browse from, and in the EU they sit squarely inside GDPR and cookie consent rules.",
    keyFacts: [
      "Identification combines a tracking script, tracking cookies, reverse IP lookup, private databases and machine learning — matching visits to companies, not to individual people.",
      "Dealfront's Leadfeeder explicitly refuses to publish a typical identification rate: coverage varies by audience, and visits from consumer ISPs are filtered out and not shown.",
      "Remote workers are mainly identifiable when they browse through a company VPN.",
      "The CJEU held in Breyer (C-582/14) that a dynamic IP address can be personal data for a website operator, and GDPR Recital 30 names IP addresses among online identifiers.",
      "HubSpot's buyer intent matches visits to known companies' IP addresses; viewing more than 20 companies per view needs HubSpot Credits and a paid subscription.",
    ],
    sections: [
      {
        heading: "How companies are identified",
        blocks: [
          {
            type: "p",
            text: "The mechanism, as Dealfront's Leadfeeder help centre describes it for its own tracker: a script on your site captures each visit, and identification combines tracking cookies, reverse IP address lookup, private databases, analytics data and machine learning. A company usually owns its domain and its office IP range, so a visit from that network can be matched to the company. IP-based geolocation adds the visitor's region.",
          },
          {
            type: "p",
            text: "Traffic that can't be matched to a company is left out: Leadfeeder says it doesn't charge for — or even show — visits from consumer internet service providers. What you see is the identified slice of your traffic, not all of it.",
          },
        ],
      },
      {
        heading: "What it can't see",
        blocks: [
          {
            type: "ul",
            items: [
              "Individual people. Leadfeeder states it isn't possible to know exactly who visited without the visitor self-identifying through a form or sign-up, and that identifying individual visitors is deemed illegal in many countries.",
              "Most home traffic. Remote workers are identifiable mainly when they browse through a company VPN; on a consumer connection they appear as ISP traffic and are filtered out.",
              "A guaranteed percentage. Leadfeeder's own help centre says there is no honest way to promise an identification rate, because it varies with each site's audience — and warns that services promising a fixed percentage are likely extrapolating from a few accounts.",
            ],
          },
        ],
      },
      {
        heading: "GDPR and cookie consent",
        links: ["gdpr-customer-support-automation"],
        blocks: [
          {
            type: "p",
            text: "Two separate rules apply in the EU. First, IP addresses can be personal data: GDPR Article 4(1) defines personal data to include online identifiers, Recital 30 names internet protocol addresses and cookie identifiers among them, and the Court of Justice held in Breyer (C-582/14, decided under the GDPR's predecessor directive) that a dynamic IP address constitutes personal data for a website operator that has legal means to link it to the visitor via the access provider.",
          },
          {
            type: "p",
            text: "Second, the ePrivacy Directive's Article 5(3) requires consent for storing information on, or reading information from, a visitor's device — with narrow exceptions for what is strictly necessary to provide the service the visitor asked for. A visitor-identification tracker that sets or reads cookies falls under that rule regardless of whether the data counts as personal, which is why these tools belong behind a cookie consent banner in the EU.",
          },
          {
            type: "note",
            text: "This describes the rules at a high level. It is not legal advice; how they apply to your setup depends on your tools and your legal basis.",
          },
        ],
      },
      {
        heading: "Visitor identification in HubSpot",
        links: ["hubspot-zendesk-integration"],
        blocks: [
          {
            type: "p",
            text: "HubSpot's current feature for this is buyer intent. The HubSpot tracking code on your site collects visitor data, such as website activity and IP addresses, and buyer intent connects anonymous web visitors to known companies' IP addresses. What HubSpot documents, as of October 2026:",
          },
          {
            type: "ul",
            items: [
              "It is listed for Starter, Professional and Enterprise subscriptions, with HubSpot Credits required for certain features.",
              "Viewing more than 20 companies per view requires HubSpot Credits and a paid subscription; adding companies and tracking their intent signals both use credits, while filters and exclusions do not.",
              "Visit-timeframe filters cover at most the last 90 days, and companies added from buyer intent get the record source \"Buyer-Intent\".",
              "HubSpot's own article notes that complying with data protection laws may require a cookie consent banner on your site.",
            ],
          },
        ],
      },
      {
        heading: "From identified company to scored lead",
        links: ["ai-lead-scoring", "attio-workflows-automation"],
        blocks: [
          {
            type: "p",
            text: "Identification on its own just produces a list. The value comes from what happens next — a common pattern, described as steps; it shows how the pieces fit together, not a TascaLab case study:",
          },
          {
            type: "ol",
            items: [
              "Identify: the tracker reports which companies visited and what they looked at.",
              "Enrich: each company is looked up for size, industry and country.",
              "Score: the company is compared against your ideal customer profile and given a fit score.",
              "Log: the company and its score land in your CRM — a HubSpot company record or an Attio record.",
              "Recap: a scheduled summary, ranked by score, goes to email or Slack so sales sees the best accounts first.",
            ],
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds this as the Lead Capture & Scoring package ({{price:leadScoring}} one-time): leads from one source — website visitors, a form or outreach replies — classified and scored by AI and logged to your CRM, with alerts to email or Slack. Connecting the surrounding tools to HubSpot or Attio is the CRM Integration package ({{price:crmIntegration}} one-time). Most setups take 1–3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute Health Check call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can visitor identification tell me who visited my website?",
        a: "It identifies companies, through their networks — not people. Vendors state that knowing exactly who visited requires the visitor to self-identify through a form or sign-up, and that identifying individuals is deemed illegal in many countries.",
      },
      {
        q: "What share of visitors can be identified?",
        a: "There is no honest fixed percentage. Leadfeeder's help centre refuses to publish one, because coverage depends on each site's audience; consumer ISP traffic is filtered out entirely, and remote workers are mainly identifiable when on a company VPN.",
      },
      {
        q: "Is IP-based visitor identification legal under the GDPR?",
        a: "IP addresses can be personal data (Breyer, C-582/14; GDPR Recital 30), and trackers that set or read cookies need consent under ePrivacy Article 5(3), which is why these tools belong behind a consent banner in the EU. This is not legal advice.",
      },
      {
        q: "What does HubSpot buyer intent require?",
        a: "The HubSpot tracking code on your site, and a Starter, Professional or Enterprise subscription. Viewing more than 20 companies per view needs HubSpot Credits, adding companies and tracking intent signals use credits, and visit filters cover at most the last 90 days.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
    published: "2026-11-12",
  },
];
