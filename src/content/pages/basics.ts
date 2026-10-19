import type { SeoPageContent } from "../types";

export const basicsPages: SeoPageContent[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    slug: "what-is-customer-support-automation",
    category: "basics",
    navLabel: "What is support automation",
    primaryKeyword: "what is customer support automation",
    title: "What Is Customer Support Automation? A Plain Guide",
    description:
      "What customer support automation is: bots, routing, macros, auto-replies, SLA timers and reports, what should stay human, and how it plugs into your helpdesk.",
    h1: "What is customer support automation?",
    intro:
      "Customer support automation is the use of rules, bots and integrations to handle repetitive support work, such as answering common questions, sorting tickets, sending acknowledgments and tracking deadlines, without an agent doing every step by hand. Most of it runs inside the helpdesk you already use, extended with APIs and webhooks. The point is to give your agents more time for the conversations that need judgment.",
    keyFacts: [
      "Zendesk triggers run immediately after a ticket is created or updated; Zendesk automations are time-based and run once every hour.",
      "Zendesk macros have no conditions: an agent decides when to apply one.",
      "Zendesk, Freshdesk and Jira automation can all send HTTP requests to other systems from their rules.",
      "Zendesk's guidance is that complex, urgent or sensitive inquiries may need a transfer to a human agent.",
    ],
    sections: [
      {
        heading: "Customer support automation, defined",
        blocks: [
          {
            type: "p",
            text: "Every support automation has the same three parts: something that starts it (an event such as a new ticket, or elapsed time), conditions that decide whether it applies, and actions it performs. Helpdesks expose this model directly. Zendesk calls these business rules: triggers run immediately after a ticket is created or updated, while automations are time-based and run once every hour on tickets that aren't closed. Zendesk points out that the difference between the two isn't which actions they can perform, but which conditions set them off.",
          },
          {
            type: "p",
            text: "Automation sits on a spectrum. At one end it works before a human sees the ticket: a bot answers the question, or a rule sets the priority and assigns a group. At the other end it assists the agent: a saved reply fills in a common answer, or a sidebar pulls the customer's order from another system. Both count, and most teams need both.",
          },
        ],
      },
      {
        heading: "The main types of support automation",
        blocks: [
          {
            type: "table",
            caption: "Common types of customer support automation",
            head: ["Type", "What it does", "Example in a helpdesk"],
            rows: [
              [
                "Self-service and bots",
                "Answers common questions in chat, messaging or email without an agent",
                "Zendesk AI agents answer questions using content from your knowledge sources and can escalate to a human",
              ],
              [
                "Routing and triage",
                "Classifies new tickets and sends them to the right group or agent",
                "Zendesk triggers can add skills to tickets when they're created or updated; omnichannel routing assigns work by agent availability and capacity",
              ],
              [
                "Macros and canned responses",
                "Applies a saved reply and ticket updates in one action",
                "A Zendesk macro can add comment text, update fields, add or remove tags and change the assignee",
              ],
              [
                "Auto-replies",
                "Confirms receipt and sets expectations right away",
                "An event-based trigger that emails the requester an acknowledgment when a ticket is created",
              ],
              [
                "SLA timers and escalations",
                "Tracks response and resolution deadlines and warns before a breach",
                "An SLA policy plus a time-based rule that alerts a team lead before a target is missed",
              ],
              [
                "Reporting",
                "Collects support metrics and delivers them on a schedule",
                "A weekly summary of ticket volume, first reply time and CSAT sent to email or Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Macros are a useful boundary case. Zendesk notes that macros have no conditions: nothing evaluates a ticket to decide whether a macro applies, so an agent chooses it. That makes saved replies the lowest-risk place to start, because a person still decides each time.",
          },
          {
            type: "p",
            text: "Routing is often where automation pays off first, because it touches every ticket. Zendesk's intelligent triage, for example, classifies new tickets by topic, sentiment and language, and can route them through omnichannel routing, skills-based routing or triggers. Simpler setups use keyword or form-field rules to set the group and priority.",
          },
        ],
      },
      {
        heading: "What should stay human",
        blocks: [
          {
            type: "p",
            text: "Automation is good at repeatable, well-defined work. It's poor at judgment, empathy and exceptions. Zendesk's guidance for AI agents is that a query sometimes needs to transfer to a human agent when it is complex, urgent or sensitive, and it recommends defining those escalation paths before launch. In practice, keep these with people:",
          },
          {
            type: "ul",
            items: [
              "Complaints, cancellations and emotionally charged conversations",
              "Billing disputes, refunds outside policy and other exceptions that need someone with authority",
              "Account security and identity checks where a mistake is costly",
              "Questions the bot can't classify, or has already failed to answer",
              "High-value or at-risk accounts you've decided to handle personally",
            ],
          },
          {
            type: "p",
            text: "Whatever you automate, keep a visible way to reach a person and pass the conversation history along, so the customer doesn't have to repeat themselves. Our guide to chatbot-to-human handoff covers how to do that.",
          },
        ],
      },
      {
        heading: "How automation plugs into your helpdesk",
        blocks: [
          {
            type: "p",
            text: "You rarely need to replace your helpdesk to automate it. Modern helpdesks can call other systems from their rules, and other systems can update tickets through the helpdesk API. That's how custom automations get built:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: you create a webhook in Admin Center, then attach it to a trigger or automation with the Notify webhook action. The request body can be JSON, XML or form-encoded, and placeholders insert ticket data.",
              "Freshdesk: automation rules that run on ticket creation or ticket updates can use the Trigger webhook action with GET, POST, PUT, PATCH or DELETE and placeholders such as {{ticket.id}}. Failed webhooks are retried every 30 minutes, up to 48 calls.",
              "Jira: the Send web request automation action calls another system when a rule runs, and can wait for the response so later steps can use the returned data.",
            ],
          },
          {
            type: "p",
            text: "A typical custom flow looks like this:",
          },
          {
            type: "ol",
            items: [
              "A helpdesk rule fires on a new or updated ticket and sends a webhook.",
              "A workflow tool such as Make or n8n, or a small service, receives it and looks up data elsewhere: an order system, a CRM or a language model.",
              "The workflow writes the result back through the helpdesk API as a tag, a field value, a private note or an assignment.",
              "Agents see the result inside the ticket, and the helpdesk's own rules take it from there.",
            ],
          },
        ],
      },
      {
        heading: "Where to start",
        blocks: [
          {
            type: "ol",
            items: [
              "List your most frequent request types from the last month and mark the ones that follow the same steps every time.",
              "Fix routing and auto-replies first. They touch every ticket and are easy to verify.",
              "Turn repeated answers into macros or canned responses before you put them in a bot.",
              "Add a bot for the most common, low-risk questions, with a clear handoff to a person.",
              "Measure first response time, resolution time and CSAT before and after each change, so you know what actually helped.",
            ],
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab is a one-person practice run by Roman Zakharenko that builds support automation on top of the tools you already use, including Zendesk, Freshdesk, Jira and Slack, with APIs, webhooks and Make or n8n. One-time prices include Ticket Routing & Categorization ($600–$950), a Starter Chat Bot ($350–$450) and Automated Reports ($500–$900). Most setups take 1–3 weeks and come with basic documentation, 30 days of post-launch support and no hidden fees. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is customer support automation the same as a chatbot?",
        a: "No. A chatbot is one type. Routing rules, macros, auto-replies, SLA timers and scheduled reports are also support automation, and many teams start with those because they apply to every ticket.",
      },
      {
        q: "What is the difference between a trigger and an automation in Zendesk?",
        a: "Triggers are event-based and run immediately after a ticket is created or updated. Automations are time-based and run once every hour, so they suit actions like a reminder after a set number of hours.",
      },
      {
        q: "Do I need to switch helpdesks to automate support?",
        a: "Usually not. Zendesk, Freshdesk and Jira automation can all send outgoing HTTP requests from their rules, so you can connect other systems to the helpdesk you already use.",
      },
      {
        q: "What should not be automated in customer support?",
        a: "Complex, urgent or sensitive conversations, which Zendesk's guidance says may need a human agent, plus disputes and policy exceptions that need someone with authority to decide.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    slug: "chatbot-to-human-handoff",
    category: "basics",
    navLabel: "Chatbot-to-human handoff",
    primaryKeyword: "chatbot to human handoff",
    title: "Chatbot to Human Handoff: Triggers, Context, Setup",
    description:
      "How chatbot to human handoff works: when to escalate, what context to pass to agents, after-hours fallbacks, and how Zendesk, Freshdesk and Messenger do it.",
    h1: "Chatbot to human handoff: how to escalate without losing the customer",
    intro:
      "A chatbot to human handoff is the point where a bot stops handling a conversation and transfers it, with its history and any details it collected, to a human agent or queue. A good handoff fires at the right moment, carries the context so the customer doesn't repeat themselves, and still works when nobody is online. This guide covers the triggers, the context to pass, and how Zendesk, Freshdesk and Messenger implement it.",
    keyFacts: [
      "Zendesk says an AI agent may need to transfer a query to a human when it is complex, urgent or sensitive.",
      "Freshdesk AI Agents can transfer automatically when a customer uses trigger phrases you define, such as asking for an agent.",
      "In Dialogflow CX, if no intent meets the classification threshold, a no-match event fires instead of a match.",
      "On Messenger, the handover protocol decides which app owns a conversation thread; Meta has moved Instagram to Conversation Routing.",
    ],
    sections: [
      {
        heading: "What a chatbot-to-human handoff is",
        blocks: [
          {
            type: "p",
            text: "A handoff, also called an escalation or transfer, moves ownership of a conversation from automation to a person. Depending on the channel, the result is a live chat assigned to an agent, a conversation waiting in a queue, or a ticket an agent picks up later. In Zendesk's AI agents, you build this with escalation blocks in the dialogue builder, which define how a query moves to a human when the AI agent can't resolve it.",
          },
          {
            type: "p",
            text: "Handoffs come in two shapes. In a synchronous handoff, the customer stays in the same live conversation and an agent joins. In an asynchronous handoff, a ticket is created so an agent can reply later, which is the usual fallback when nobody is available. Zendesk documents both, including a workflow for asynchronous ticket escalations that lets customers leave a message when your team is unavailable.",
          },
        ],
      },
      {
        heading: "When the bot should hand off",
        blocks: [
          {
            type: "table",
            caption: "Common chatbot handoff triggers",
            head: ["Trigger", "What it looks like", "How it's detected"],
            rows: [
              [
                "Customer asks for a human",
                "Agent, talk to a person, this isn't helping",
                "Freshdesk AI Agents transfer automatically on trigger phrases you list, such as a request to talk to an agent",
              ],
              [
                "Low confidence or no match",
                "The bot can't tell what the customer wants",
                "Dialogflow CX fires a no-match event when no intent meets the classification threshold; use that fallback to offer a person",
              ],
              [
                "Sensitive or urgent topic",
                "Complaints, failed payments, security, legal or safety issues",
                "Zendesk lists complex, urgent or sensitive inquiries as reasons to transfer; Freshdesk's example trigger phrases include a report of a failed payment",
              ],
              [
                "Repeated failure",
                "The customer rephrases the same question or the bot loops",
                "Count fallback replies in the session and escalate after a set number",
              ],
              [
                "Business rule",
                "VIP account, high order value, open incident",
                "Look up customer data through an API before the bot answers and route those customers straight to a person",
              ],
            ],
          },
          {
            type: "p",
            text: "Confidence is the trigger teams most often leave implicit. In Dialogflow CX, the highest-scoring intent is returned as a match only if its confidence score is greater than or equal to the classification threshold; otherwise a no-match event is invoked. Treat that event as a signal: ask one clarifying question, and hand off if it happens again.",
          },
          {
            type: "p",
            text: "Zendesk also advises offering escalation only when the AI agent can't guide the customer to self-service resources. That keeps agents for real problems, but don't hide the option. A customer who explicitly asks for a person should get one, or a clear answer about when they will.",
          },
        ],
      },
      {
        heading: "Pass the context, not just the customer",
        blocks: [
          {
            type: "p",
            text: "A handoff that drops the conversation forces the customer to start over. Zendesk's legacy Transfer to agent step, for example, creates a ticket that includes the customer's conversation history, which the customer doesn't see, and can add tags to that ticket for routing. Freshdesk AI Agents can collect details such as a customer ID, reference number or order number before the transfer, when property collection is enabled in both the conversation behaviour and handover settings.",
          },
          {
            type: "p",
            text: "At a minimum, the agent should receive:",
          },
          {
            type: "ul",
            items: [
              "The full transcript, including what the bot already suggested",
              "The reason for the handoff: customer request, no match, sensitive topic or business rule",
              "Identity details such as name, email or account ID, and whether they were verified",
              "Structured fields the bot collected, such as order number or product",
              "Tags or a category, so routing rules send the conversation to the right group",
            ],
          },
          {
            type: "p",
            text: "Set the customer's expectations in the same message: tell them a person is taking over and roughly when they'll hear back.",
          },
        ],
      },
      {
        heading: "How Zendesk, Freshdesk and Messenger implement handoff",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: escalation blocks in the AI agent dialogue builder decide where a conversation goes when the AI agent can't resolve it, for example forwarding it to an agent. An availability block can check business hours or agent availability before the escalation runs.",
              "Freshdesk: in the AI Agent's handover settings, you turn on Transfer conversation, list the trigger phrases that should cause an automatic transfer, and can have the AI Agent collect customer details first.",
              "Messenger: when more than one app handles a Facebook Page's messages, such as your bot and a live-chat inbox, Meta's handover protocol decides which app owns the thread. The messaging_handovers webhook reports pass thread control, take thread control, request thread control and app role events. A pass_thread_control event includes the previous and new owner app IDs plus a metadata string set in the API request, which is a handy place to put the handoff reason.",
              "Instagram: Meta's changelog says it no longer supports the handover protocol for Instagram and has migrated all businesses to Conversation Routing, which lets you define which partners control customer conversations at a particular time. Meta describes Conversation Routing as backwards compatible with most handover protocol APIs.",
            ],
          },
        ],
      },
      {
        heading: "After-hours handling",
        blocks: [
          {
            type: "p",
            text: "A bot that promises a human when nobody is online is worse than no handoff at all. Check availability first, then choose a fallback:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: an availability block checks business hours or agent availability. In a synchronous channel such as messaging, Zendesk suggests escalating by email instead when it's outside agent working hours, and its asynchronous ticket escalation workflow lets customers leave a message for a human to follow up later.",
              "Freshdesk: the Transfer outside business hours option lets you pick a business-hours schedule, transfer the conversation to an agent or to a group, and write the message the customer sees.",
              "Any platform: create a ticket with the transcript, say when the team is back, and let the bot keep answering self-service questions in the meantime.",
            ],
          },
          {
            type: "note",
            text: "Test the out-of-hours path separately. It's the branch most likely to break unnoticed, because nobody on the team is online when it runs.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds chat bots with handoff into your existing helpdesk or Slack: a Starter Chat Bot ($350–$450) or a Standard Chat Bot ($500–$650), connected through APIs, webhooks and Make or n8n. Every project includes basic documentation and 30 days of post-launch support with no hidden fees, and most setups take 1–3 weeks. A free 30-minute audit call is a good place to map your handoff triggers.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "When should a chatbot hand off to a human?",
        a: "When the customer asks for a person, when the bot can't confidently match the request, and when the topic is complex, urgent or sensitive, which is how Zendesk describes queries that need a human agent.",
      },
      {
        q: "How do I stop customers repeating themselves after a handoff?",
        a: "Pass the transcript, the reason for the handoff and any details the bot collected into the ticket or chat. Zendesk's legacy transfer step adds the conversation history to the ticket, and Freshdesk AI Agents can collect details such as an order number before the transfer.",
      },
      {
        q: "What is the Messenger handover protocol?",
        a: "It's Meta's mechanism for deciding which app owns a Messenger conversation thread when several apps serve the same Page. Apps pass, take and request thread control, and the messaging_handovers webhook reports those events.",
      },
      {
        q: "What happens if a customer asks for a human after hours?",
        a: "Check availability before escalating. Zendesk and Freshdesk both let you handle out-of-hours handoffs differently, for example by creating a ticket for later follow-up and showing a message about when the team is available.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
      },
      {
        label: "Meta for Developers — messaging_handovers webhook event reference",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_handovers",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    slug: "customer-support-metrics",
    category: "basics",
    navLabel: "Customer support metrics",
    primaryKeyword: "customer support metrics",
    title: "Customer Support Metrics: Definitions and Formulas",
    description:
      "Customer support metrics explained: first response time, resolution time, FCR, reopens, CSAT, CES, NPS and backlog, with how each one is actually calculated.",
    h1: "Customer support metrics: what to track and how each is calculated",
    intro:
      "Customer support metrics are the measurements that show how quickly, how well and under how much workload your team resolves customer requests. The core set covers speed (first response time and resolution time), quality (first contact resolution and reopens), customer feedback (CSAT, CES and NPS) and workload (backlog). Below, each one is defined the way helpdesk vendors and the original authors define it.",
    keyFacts: [
      "Zendesk's full resolution time runs from ticket creation to the ticket's most recent solve, so reopened tickets keep counting.",
      "Freshdesk counts a ticket toward FCR only if the customer sent no further messages after first contacting you.",
      "NPS is the percentage of promoters (scores 9–10) minus the percentage of detractors (scores 0–6).",
      "NPS was introduced by Fred Reichheld in Harvard Business Review in December 2003.",
      "The case for measuring customer effort was made in the July 2010 HBR article Stop Trying to Delight Your Customers.",
    ],
    sections: [
      {
        heading: "The core customer support metrics at a glance",
        blocks: [
          {
            type: "table",
            caption: "Customer support metrics and how they're calculated",
            head: ["Metric", "What it measures", "How it's calculated"],
            rows: [
              [
                "First response time (FRT)",
                "How long customers wait for the first reply",
                "Time from ticket creation to the first agent reply, reported as an average or median across tickets",
              ],
              [
                "Full resolution time",
                "How long it takes to finally solve a ticket",
                "Time from ticket creation to its most recent solve (Zendesk definition)",
              ],
              [
                "Average resolution time",
                "Typical time to resolve across many tickets",
                "Sum of resolution times divided by the number of tickets resolved in the period",
              ],
              [
                "First contact resolution (FCR)",
                "Share of issues solved without the customer coming back",
                "Tickets resolved with no further customer messages after the first contact, divided by all tickets resolved in the period (Freshdesk definition)",
              ],
              [
                "Reopens",
                "Tickets that weren't really solved",
                "Count of tickets moved from Solved back to Open (Zendesk), often shown as a share of solved tickets",
              ],
              [
                "CSAT",
                "Satisfaction with a specific interaction",
                "Tickets rated good divided by all tickets with a rating, as a percentage (Zendesk Explore)",
              ],
              [
                "CES",
                "How much effort the customer had to spend",
                "A post-interaction survey on ease or effort, tracked as an average score or a share of low-effort answers",
              ],
              [
                "NPS",
                "Willingness to recommend the company",
                "Percentage of promoters (9–10) minus percentage of detractors (0–6) on a 0–10 scale",
              ],
              [
                "Backlog",
                "Unsolved work waiting on the team",
                "Number of tickets in New, Open, Pending or On-hold status at a point in time (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Speed: first response time and resolution time",
        blocks: [
          {
            type: "p",
            text: "First response time is the gap between a ticket being created and the first reply from an agent, which is how Zendesk's first reply time metric measures it. It's the first wait a customer experiences, and it's usually the first target teams put into an SLA policy.",
          },
          {
            type: "p",
            text: "Resolution time measures how long it takes to solve the issue. Zendesk's full resolution time runs from creation to the ticket's latest solve, so a ticket that is reopened and solved again keeps accumulating time. Average resolution time is simply the mean of those durations across tickets resolved in a period. A handful of very old tickets can pull an average up sharply, so it's worth looking at the median alongside it.",
          },
          {
            type: "p",
            text: "Two settings change these numbers a lot: whether you count business hours or calendar hours, and whether automatic replies count as a response. Decide once, write it down and keep it stable, so trends stay comparable from month to month.",
          },
        ],
      },
      {
        heading: "Quality: first contact resolution and reopens",
        blocks: [
          {
            type: "p",
            text: "First contact resolution (FCR) is the share of issues solved without the customer having to come back. Freshdesk calculates FCR% as the number of tickets resolved or closed after the customer's first contact, divided by all tickets resolved or closed in the selected period. A ticket passes only if the customer sent no further messages after the first one; the initial ticket description doesn't count as a customer reply, and the number of agent replies doesn't matter. Reopened tickets are left out, and so are outbound tickets that an agent started.",
          },
          {
            type: "p",
            text: "Reopens catch the opposite case: a ticket marked solved that comes back. Zendesk records a reopen when a ticket's status moves from Solved back to Open. Watch FCR and reopens together. If your team closes tickets early to hit a resolution target, reopens will rise.",
          },
          {
            type: "note",
            text: "Vendors define FCR differently: some count agent replies, some count customer replies, and some exclude certain channels. Check your helpdesk's definition before comparing your number with anyone else's.",
          },
        ],
      },
      {
        heading: "Customer feedback: CSAT, CES and NPS",
        blocks: [
          {
            type: "p",
            text: "CSAT (customer satisfaction score) asks customers to rate a specific interaction. In Zendesk Explore, the satisfaction score is the number of tickets rated good divided by all tickets with a satisfaction response, shown as a percentage. Because it's tied to one ticket, CSAT is the most direct feedback on your support team's work.",
          },
          {
            type: "p",
            text: "CES (customer effort score) asks how easy it was to get an issue handled. The idea comes from Stop Trying to Delight Your Customers, published in Harvard Business Review in July 2010. It drew on a study of more than 75,000 people who dealt with contact-center representatives or self-service channels, and argued that going above and beyond makes little difference to loyalty, while reducing customer effort does. Survey wording and scales vary between tools, so pick one version and keep it.",
          },
          {
            type: "p",
            text: "NPS (Net Promoter Score) measures willingness to recommend the company, not just one interaction. Fred Reichheld of Bain & Company introduced it in The One Number You Need to Grow, published in Harvard Business Review in December 2003. Customers say how likely they are to recommend the company to a friend or colleague on a 0–10 scale. Scores of 9–10 are promoters, 7–8 are passives and 0–6 are detractors. NPS is the percentage of promoters minus the percentage of detractors, so it ranges from -100 to +100.",
          },
        ],
      },
      {
        heading: "Workload: backlog, and keeping metrics honest",
        blocks: [
          {
            type: "p",
            text: "Backlog is the unsolved work in front of your team. Zendesk defines the ticket backlog as all tickets currently in New, Open, Pending or On-hold status, both assigned and unassigned. Track it as a daily snapshot so you can see the trend. A backlog that grows week over week means incoming volume is outpacing capacity, even if response times still look fine.",
          },
          {
            type: "p",
            text: "A few habits keep metrics useful:",
          },
          {
            type: "ul",
            items: [
              "Pair a speed metric with a quality metric, such as resolution time with reopens, so one can't improve at the expense of the other.",
              "Segment by channel and priority. A chat first response and an email first response aren't comparable.",
              "Keep the same definitions and hours setting over time, and note any change in your reports.",
              "Turn your most important targets into SLA policies, so the helpdesk tracks them on every ticket.",
            ],
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab's Automated Reports service ($500–$900, one-time) pulls these metrics from your helpdesk, such as Zendesk, Freshdesk or Jira, and delivers a scheduled summary to email or Slack. Each project includes basic documentation, 30 days of post-launch support and no hidden fees, and most setups take 1–3 weeks. A free 30-minute audit call helps decide which metrics are worth automating first.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between first response time and resolution time?",
        a: "First response time ends at the first agent reply. Resolution time ends when the ticket is solved; Zendesk's full resolution time runs to the most recent solve, so reopened tickets keep counting.",
      },
      {
        q: "How is NPS calculated?",
        a: "Ask customers how likely they are to recommend you on a 0–10 scale, then subtract the percentage of detractors (0–6) from the percentage of promoters (9–10). Passives (7–8) count toward total responses but not the subtraction.",
      },
      {
        q: "What is the difference between CSAT, CES and NPS?",
        a: "CSAT rates satisfaction with a specific interaction, CES measures how much effort it took to get an issue handled, and NPS measures how likely a customer is to recommend the company overall.",
      },
      {
        q: "How does Freshdesk calculate first contact resolution?",
        a: "FCR% is the number of tickets resolved with no further customer messages after the first contact, divided by all tickets resolved in the period. Reopened and outbound tickets are excluded.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    slug: "sla-policies-explained",
    category: "basics",
    navLabel: "SLA policies explained",
    primaryKeyword: "SLA policies in customer support",
    title: "SLA Policies in Customer Support, Explained",
    description:
      "SLA policies in customer support: first reply, next reply and resolution targets, business vs calendar hours, pausing, breach alerts, and helpdesk setup.",
    h1: "SLA policies in customer support, explained",
    intro:
      "An SLA policy is a set of rules in your helpdesk that gives tickets response and resolution time targets, based on conditions such as priority, and tracks each ticket against them. It decides which tickets get which targets, whether the clock counts business or calendar hours, when the clock pauses, and what happens before a breach. Here's how SLA policies work, and how Zendesk, Freshdesk and Jira Service Management set them up.",
    keyFacts: [
      "Zendesk applies the first SLA policy, from the top of the list down, whose conditions a ticket matches.",
      "In Zendesk, requester wait time pauses in Pending, and agent work time pauses in Pending and On-hold.",
      "Freshdesk lets you calculate each SLA in business hours or calendar hours (24x7).",
      "Freshdesk reminders can be set from 5 minutes to 4 hours before an SLA target is due.",
      "In Jira Service Management, each SLA has start, pause and stop conditions plus goals that select requests with JQL.",
    ],
    sections: [
      {
        heading: "What an SLA policy is",
        blocks: [
          {
            type: "p",
            text: "A service level agreement (SLA) is a promise about how fast you'll respond to and resolve requests. An SLA policy is how your helpdesk enforces that promise on each ticket. Most policies have the same parts:",
          },
          {
            type: "ul",
            items: [
              "Conditions: which tickets the policy applies to, for example by customer, channel or request type",
              "Targets: time limits for the first reply, later replies and resolution, usually set per priority",
              "Hours: whether the clock counts business hours or calendar hours",
              "Pause rules: which statuses stop the clock",
              "Breach actions: reminders before a target is missed and escalations after",
            ],
          },
          {
            type: "p",
            text: "Order matters when you have several policies. Zendesk runs triggers first, then compares the ticket against its SLA policies from the top of the list down and applies the first one whose conditions are met. Put specific policies, such as one for enterprise customers, above general ones. Zendesk also requires the ticket's priority to be set in the default system priority field; a custom priority field won't match a policy.",
          },
        ],
      },
      {
        heading: "First reply, next reply and resolution targets",
        blocks: [
          {
            type: "table",
            caption: "SLA targets and what each tool calls them",
            head: ["Target", "What it measures", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "First reply",
                "Time from ticket creation to the first agent reply",
                "First reply time",
                "First response",
                "A custom SLA that starts when the request is created and stops at the first reply to the customer",
              ],
              [
                "Next reply",
                "Time from an unanswered customer message to the next agent reply",
                "Next reply time",
                "Every response",
                "A custom SLA with its own start and stop conditions",
              ],
              [
                "Resolution",
                "Time from creation until the ticket is resolved",
                "Requester wait time, agent work time or total resolution time",
                "Resolution",
                "A custom SLA that stops when the request is resolved",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk defines next reply time as the time between the oldest unanswered customer comment and the next public agent comment. It also offers a periodic update metric, which measures the time between public agent comments. For resolution, Zendesk has three metrics and recommends picking only one per policy: requester wait time (time in New, Open and On-hold), agent work time (time in New and Open) and total resolution time (the whole lifecycle from creation until the ticket is solved).",
          },
          {
            type: "p",
            text: "Freshdesk sets first response, every response and resolution targets per priority inside each SLA policy. In Jira Service Management, each SLA is a named timer: you define when it starts, pauses and stops, then add goals that use JQL to choose which requests they apply to, with time targets written like 4h 30m.",
          },
        ],
      },
      {
        heading: "When the clock runs: business hours, calendar hours and pausing",
        blocks: [
          {
            type: "p",
            text: "Business hours count only time inside your working schedule; calendar hours count every hour of every day. Zendesk lets you choose business or calendar hours for each priority within a policy. Freshdesk asks whether each SLA should use the business hours you've set or calendar hours (24x7). Jira Service Management attaches a calendar to each goal, with a time zone, working days and hours, and holidays.",
          },
          {
            type: "p",
            text: "A 4-hour business-hours target on a ticket created late on Friday may not come due until Monday. That's fair to your team, but it isn't what the customer experiences, so use calendar hours for any priority where you promise round-the-clock coverage.",
          },
          {
            type: "p",
            text: "Pausing is the other half. Time spent waiting on the customer usually shouldn't count against you, and each tool handles it differently:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: requester wait time pauses in Pending; agent work time pauses in Pending and On-hold; total resolution time doesn't pause on any status change until the ticket is solved.",
              "Freshdesk: the Pending status pauses SLA timers, and you can turn the SLA timer off for any status, including custom ones such as Waiting on Third Party. Tickets with the timer off show as On Hold, and when the customer replies the ticket moves back to Open and the clock resumes.",
              "Jira Service Management: an SLA can have pause conditions, for example while you're waiting for the customer to respond, alongside its start and stop conditions.",
            ],
          },
        ],
      },
      {
        heading: "Breach warnings and escalations",
        blocks: [
          {
            type: "p",
            text: "An SLA is only useful if someone acts before it's missed. Set a warning before the deadline and an escalation after it:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: build an automation with the condition Hours until next SLA breach to notify a team or person when a ticket is close to breaching. Automations run once an hour, so the alert can arrive up to an hour before or after the threshold, never at the exact moment. Zendesk's example adds a tag in the same automation so it fires only once per ticket.",
              "Freshdesk: each SLA policy can remind agents from 5 minutes to 4 hours before a first response or resolution target is due, and escalate when a target is violated to the assigned agent or other people you choose, such as a team lead. Both are set in Admin > Workflows > SLA Policies.",
              "Any tool: send breach alerts where your team actually looks, such as a Slack channel, and not only to email.",
            ],
          },
        ],
      },
      {
        heading: "How Zendesk, Freshdesk and Jira Service Management configure SLAs",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: create SLA policies with conditions and per-priority targets, choose business or calendar hours for each priority, and order the list so specific policies come first. Add an automation for near-breach alerts.",
              "Freshdesk: in Admin > Workflows > SLA Policies, set first response, every response and resolution targets per priority, choose business or calendar hours, then add reminders and escalations. Decide in your ticket status settings which statuses turn the SLA timer off.",
              "Jira Service Management: create each SLA with start, pause and stop conditions. Multiple start conditions work as OR, and the SLA stops as soon as any stop condition is met. Then add goals that select requests with JQL, set a time target and pick a calendar.",
            ],
          },
          {
            type: "p",
            text: "Whatever the tool, start with one policy and a few priorities, run it for a few weeks, then compare actual first reply and resolution times with the targets before tightening them.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab sets up SLA-related automation on top of Zendesk, Freshdesk and Jira: routing that sets priority so the right policy applies, breach alerts to Slack, and scheduled SLA reports. Relevant one-time prices are Ticket Routing & Categorization ($600–$950), Automated Reports ($500–$900) and Custom Automation ($1,200–$2,000). Projects include basic documentation, 30 days of post-launch support and no hidden fees, and most take 1–3 weeks. Start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between first reply time and next reply time?",
        a: "First reply time measures the wait for the first agent reply after a ticket is created. Zendesk's next reply time measures from the oldest unanswered customer comment to the next public agent comment, so it applies throughout the conversation.",
      },
      {
        q: "Should SLAs use business hours or calendar hours?",
        a: "Use business hours if your team works set hours and customers know it, and calendar hours for priorities where you promise round-the-clock coverage. Zendesk and Freshdesk let you choose per policy, and Jira Service Management uses a calendar you assign to each goal.",
      },
      {
        q: "Does the SLA clock stop when a ticket is pending?",
        a: "It depends on the tool and the metric. Freshdesk pauses SLA timers in Pending. In Zendesk, requester wait time and agent work time pause in Pending, while total resolution time keeps running until the ticket is solved.",
      },
      {
        q: "Can Zendesk alert me at the exact moment an SLA is breached?",
        a: "No. Zendesk's near-breach alerts use automations, which run once an hour, so a notification can arrive up to an hour before or after the breach.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },
];
