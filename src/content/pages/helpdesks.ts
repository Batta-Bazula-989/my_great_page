import type { SeoPageContent } from "../types";

export const helpdeskPages: SeoPageContent[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    slug: "zendesk-automation",
    category: "helpdesks",
    navLabel: "Zendesk automation",
    primaryKeyword: "Zendesk automation",
    title: "Zendesk Automation: Triggers, Automations and Macros",
    description:
      "How Zendesk automation works: triggers vs automations vs macros, hourly runs, trigger order, omnichannel and skills routing, webhooks and the Zendesk API.",
    h1: "Zendesk automation: triggers, automations, macros and routing",
    intro:
      "Zendesk automation is built from three business-rule tools: triggers that fire immediately when a ticket is created or updated, automations that run on an hourly schedule, and macros that agents apply by hand. Routing (omnichannel or skills-based), webhooks and the Zendesk API cover what those rules can't do on their own. Below is how each piece behaves and what is worth automating first.",
    keyFacts: [
      "Ticket triggers run immediately after a ticket is created or updated, in the order they are listed.",
      "Automations run once every hour on non-closed tickets, and each one can act on up to 1,000 tickets per hour.",
      "Every automation needs a condition that is true only once, or an action that nullifies a condition, or it keeps firing.",
      "Macros contain only actions, no conditions, and can only do what the agent applying them is allowed to do.",
      "A webhook connects either to Zendesk events or to triggers and automations, not both.",
    ],
    sections: [
      {
        heading: "Triggers vs automations vs macros",
        blocks: [
          {
            type: "p",
            text: "All three tools change tickets, but they start differently. Zendesk's own framing: the difference between triggers and automations is not which actions they can perform, but which conditions set them off. Macros have no conditions at all, because nothing evaluates the ticket automatically. An agent decides when to apply one.",
          },
          {
            type: "table",
            caption: "The three Zendesk business-rule tools",
            head: ["Tool", "What starts it", "Conditions", "Typical use"],
            rows: [
              [
                "Trigger",
                "A ticket is created or updated (runs immediately)",
                "Yes",
                "Routing new tickets, setting fields, sending notifications",
              ],
              [
                "Automation",
                "Hourly schedule, based on time elapsed",
                "Yes, usually 'Hours since' conditions",
                "Reminders, escalating stale tickets, closing solved tickets",
              ],
              [
                "Macro",
                "An agent applies it manually",
                "No, actions only",
                "Canned replies and repeatable multi-field updates",
              ],
            ],
          },
          {
            type: "p",
            text: "The three combine well. A common pattern is a macro that adds a tag, which then immediately sets off a trigger that looks for that tag. Note that a macro can only do what the current user is permitted to do, so an agent with limited permissions may not be able to apply every change a macro contains.",
          },
        ],
      },
      {
        heading: "How trigger order works",
        blocks: [
          {
            type: "p",
            text: "Every time a ticket is created or updated, all ticket triggers run against it in a cycle, in the order they are listed. If a trigger updates the ticket, the cycle starts over and every trigger runs again, except the ones that have already fired and updated the ticket. So one trigger's change can make another trigger's conditions true, even if they weren't true a moment earlier.",
          },
          {
            type: "p",
            text: "Zendesk's recommended order for ticket triggers:",
          },
          {
            type: "ol",
            items: [
              "Triggers that change ticket values such as status, priority or other fields.",
              "Triggers that assign the ticket.",
              "Notification triggers, last, so emails and messages reflect the ticket's final state.",
            ],
          },
          {
            type: "p",
            text: "If you use trigger categories, the order of the categories must match the order you want triggers to run in; you change it with Edit order on the triggers list. Use the condition Ticket | Is | Created for rules that should act only on new tickets (routing is the classic case), and Ticket | Is | Updated for things like update notifications. Ticket triggers don't run on closed tickets.",
          },
        ],
      },
      {
        heading: "How often Zendesk automations run, and how to stop loops",
        blocks: [
          {
            type: "p",
            text: "Automations run once every hour on all non-closed tickets. The timing is approximate: an automation starts at some point during the hour, not at a fixed minute. Each automation can act on up to 1,000 tickets per hour, and any overflow waits for later runs.",
          },
          {
            type: "p",
            text: "Because automations re-check the same tickets every hour, Zendesk requires each one to include a condition that is true only once or an action that nullifies at least one condition. Without it, the conditions keep matching and the automation fires in an endless loop. The standard 'close ticket after solved' automation does this naturally: closing the ticket removes it from the 'Status is Solved' condition. For custom automations, the usual fix is to add a tag and exclude that tag in the conditions.",
          },
          {
            type: "note",
            text: "For time conditions, Zendesk recommends 'Hours since ... greater than' over 'Hours since ... is'. An 'is' condition can be missed entirely if the automation doesn't run during that exact hour. A greater-than condition still needs a nullifying action or tag.",
          },
        ],
      },
      {
        heading: "Routing options for incoming tickets",
        blocks: [
          {
            type: "p",
            text: "Triggers can route tickets by setting a group, an assignee or skills, but Zendesk also has dedicated routing features:",
          },
          {
            type: "ul",
            items: [
              "Omnichannel routing pushes tickets from email, calls and messaging to agents based on their availability and capacity, and can also consider priority and skills.",
              "Skills can be added to tickets by triggers and marked required or optional. Required skills limit which agents are eligible; optional skills can time out so the ticket falls back to the normal routing model.",
              "Standalone skills-based routing is a pull model: tickets are sorted by skill and agents pick work from skill-based views. It can't be used with voice or messaging tickets.",
            ],
          },
          {
            type: "p",
            text: "For calls, omnichannel routing is the only way triggers can influence routing, because a ticket is created as soon as a call enters the queue. Routing features differ by plan, so confirm what your plan includes before you design around skills.",
          },
        ],
      },
      {
        heading: "Webhooks and the Zendesk API",
        blocks: [
          {
            type: "p",
            text: "When a rule needs to tell another system something, use a webhook. You create it in Admin Center and pick its connection type: Zendesk events, or trigger or automation. A webhook can use one of those, not both, and you can't change the connection method later. In a trigger or automation, add the 'Notify webhook' action, select the webhook and enter the payload. Request bodies can be JSON, XML or form-encoded, and the payload can't exceed 16,000 characters. Each webhook has a Test webhook option for checking the request before it goes live.",
          },
          {
            type: "p",
            text: "When the logic needs to read data, make decisions in code or write back to tickets, use the Ticketing API. Tickets are created with a POST to the tickets endpoint and updated with a PUT to the ticket's own URL, with bulk variants for many tickets at once. Requests can authenticate with an OAuth access token sent in a Bearer header.",
          },
          {
            type: "p",
            text: "Good first candidates for Zendesk automation:",
          },
          {
            type: "ul",
            items: [
              "Routing new tickets to the right group by channel, form, language or keywords.",
              "Reminders and escalations for tickets that have waited too long for a reply.",
              "Posting high-priority or VIP tickets to a Slack channel through a webhook.",
              "Pulling order or account data into a ticket through the API before an agent opens it.",
            ],
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab works on top of your existing Zendesk account, with no platform switch, using the Zendesk API, webhooks and Make or n8n where they fit. Ticket Routing & Categorization is a one-time project in the $600–$950 range; Custom Automation for flows that span several systems is $1,200–$2,000. Every project includes 30 days of post-launch support, basic documentation and no hidden fees, and most setups take 1–3 weeks. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How often do Zendesk automations run?",
        a: "Once every hour, on all non-closed tickets. The exact minute within the hour varies, and each automation can act on up to 1,000 tickets per hour.",
      },
      {
        q: "What is the difference between a Zendesk trigger and an automation?",
        a: "Triggers are event-based and run immediately when a ticket is created or updated. Automations are time-based and run hourly. Both can perform the same kinds of actions.",
      },
      {
        q: "Why does my Zendesk automation keep firing on the same ticket?",
        a: "It is probably missing a nullifying condition or action. Add an action that makes one of its conditions false, for example a tag that the conditions exclude.",
      },
      {
        q: "Can a Zendesk trigger call an external system?",
        a: "Yes. Create a webhook connected to triggers and automations, then add the 'Notify webhook' action to the trigger with the payload you want to send.",
      },
      {
        q: "Do trigger categories change the order triggers run in?",
        a: "Yes. Triggers run in list order, and the order of categories must match the order you want them to run in. You change it with Edit order on the ticket triggers list.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    slug: "freshdesk-automation",
    category: "helpdesks",
    navLabel: "Freshdesk automation",
    primaryKeyword: "Freshdesk automation",
    title: "Freshdesk Automation: Rules, Assignment and Webhooks",
    description:
      "How Freshdesk automation works: Ticket Creation, Ticket Updates and Hourly Triggers rules, round-robin and skill-based assignment, webhooks and the API.",
    h1: "Freshdesk automation: rule types, assignment and webhooks",
    intro:
      "Freshdesk automation runs on three rule types: Ticket Creation rules for new tickets, Ticket Updates rules for events on existing tickets, and Hourly Triggers for time-based checks. Assignment (round-robin, load-balanced or skill-based) decides who gets the ticket, and webhook actions plus the Freshdesk API connect it all to other systems.",
    keyFacts: [
      "Freshdesk has three automation rule types: Ticket Creation, Ticket Updates and Hourly Triggers.",
      "Hourly Triggers (formerly Time Triggers) run every hour, on calendar hours, and only on tickets updated in the last 30 days.",
      "Ticket Creation rules can execute either the first matching rule or all matching rules.",
      "Freshdesk executes up to 1,000 webhook calls per hour from automation rules; extra calls are buffered.",
      "Load-based assignment only counts tickets with an active SLA timer toward an agent's load.",
    ],
    sections: [
      {
        heading: "The three Freshdesk automation rule types",
        blocks: [
          {
            type: "p",
            text: "If you have used Freshdesk for a while, you may know these by their old names. Freshdesk used to call them Dispatch'r, Observer and Supervisor, and later brought all three into a single Automations module, with a separate tab for each rule type.",
          },
          {
            type: "table",
            caption: "Freshdesk automation rule types",
            head: ["Rule type", "Former name", "When it runs", "Good for"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Once, when a new ticket is created",
                "Categorizing, prioritizing and routing incoming tickets",
              ],
              [
                "Ticket Updates",
                "Observer",
                "When a defined event happens on an existing ticket",
                "Reacting to replies, notes, status or field changes",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Every hour, on a schedule",
                "Reminders, escalations, auto-closing idle tickets",
              ],
            ],
          },
          {
            type: "p",
            text: "Ticket Creation rules check each new ticket against your conditions and run the actions on a match. You choose whether Freshdesk executes only the first matching rule or all matching rules. With first-match, the order of the list decides which rule wins, so specific rules belong above generic ones.",
          },
        ],
      },
      {
        heading: "Ticket Updates rules: events, conditions, actions",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates is the only rule type where you configure events. A rule needs at least one event and fires when any one of them matches. You also set who performed the action: an agent, the requester, either of them, a collaborator, or the System itself.",
          },
          {
            type: "ul",
            items: [
              "Events: a ticket property changes, an agent or group is updated, a note is added, a reply is sent, customer feedback arrives; system events include failed email delivery and a ticket becoming overdue.",
              "Conditions: ticket properties (including tags and custom fields), requester contact details and company fields.",
              "Actions: set fields, reassign agent or group, add tags or watchers, add a note, email an agent, group or requester, mark as spam or delete, or trigger a webhook.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates is also the only rule type that can create a new ticket or add a thread message. The exact list of events depends on your plan and the features you have turned on.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: time-based rules",
        blocks: [
          {
            type: "p",
            text: "Hourly Triggers don't wait for an event. They scan tickets every hour and act on those that match. That schedule shapes how you write them:",
          },
          {
            type: "ul",
            items: [
              "The time limit you set should be at least one hour, since the rule only runs hourly.",
              "They count calendar hours, not business hours.",
              "They only process tickets updated within the last 30 days.",
              "They work on ticket properties only, not contact or company properties.",
            ],
          },
          {
            type: "note",
            text: "A time-based rule that isn't defined carefully will execute every consecutive hour on the same ticket. A common fix is to pair a 'greater than' time condition with a 'less than' condition so the ticket only matches once.",
          },
        ],
      },
      {
        heading: "Automatic ticket assignment",
        blocks: [
          {
            type: "p",
            text: "Automation rules usually set the group; assignment decides which agent in that group gets the ticket. Freshdesk's automatic assignment runs on its Omniroute engine and offers three methods per group:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: rotates tickets among available agents in the group, skipping agents who are at full capacity and giving the ticket to the eligible agent who was assigned one longest ago.",
              "Load-balanced: sends each new ticket to the least-loaded agent until every agent reaches the configured maximum. Only tickets with an active SLA timer count toward load, so resolving a ticket or moving it to an SLA-off status frees capacity.",
              "Skill-based: agents have skills ranked by priority, and a new ticket goes to an agent with the first matching skill. Freshdesk recommends a fallback skill, using the group as the condition, mapped last for all agents so no ticket stays unassigned.",
            ],
          },
          {
            type: "p",
            text: "Which methods you can use depends on your plan, so check your group settings before choosing one. Manually assigned tickets still count toward load and can push an agent over the limit, which pauses automatic assignment to them until their count drops.",
          },
        ],
      },
      {
        heading: "Webhooks and the Freshdesk API",
        blocks: [
          {
            type: "p",
            text: "A webhook in Freshdesk is an automation action that makes an API call to another system. You pick the request type and callback URL, and both the URL and the payload can include placeholders such as {{ticket.id}}. If you make a GET call through a webhook, the rule can't use the response; Freshdesk points to its Trigger API action for that.",
          },
          {
            type: "p",
            text: "Freshdesk executes up to 1,000 webhook calls per hour from automation rules. Calls beyond that are buffered until new capacity is available in the next hour, so high-volume flows should not depend on instant delivery.",
          },
          {
            type: "p",
            text: "For integrations that run outside Freshdesk, use the REST API at your-domain.freshdesk.com/api/v2/. Requests authenticate with your API key as the username and any dummy value as the password. Rate limits are applied per account per minute and depend on your plan; a 429 response means the limit is used up, and the Retry-After header tells you how many seconds to wait. Listing tickets returns only the last 30 days by default, so use the updated_since filter for older tickets.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds on your existing Freshdesk account, with no platform switch, using automation rules, webhooks, the Freshdesk API and Make or n8n where they help. Ticket Routing & Categorization is a one-time project in the $600–$950 range; Custom Automation is $1,200–$2,000. Each project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. A free 30-minute audit call is the first step.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What are the types of automation rules in Freshdesk?",
        a: "Ticket Creation rules run on new tickets, Ticket Updates rules run when an event happens on an existing ticket, and Hourly Triggers run on a schedule every hour.",
      },
      {
        q: "What happened to Dispatch'r, Observer and Supervisor?",
        a: "They are the older names for the same rule types: Dispatch'r for ticket creation, Observer for ticket updates and Supervisor for time-based rules. Freshdesk combined them into one Automations module.",
      },
      {
        q: "Do Freshdesk Hourly Triggers use business hours?",
        a: "No. They run on calendar hours, and only on tickets updated within the last 30 days.",
      },
      {
        q: "How many webhooks can Freshdesk automations send?",
        a: "Freshdesk executes up to 1,000 webhook calls per hour from automation rules. Calls over the limit are buffered until capacity frees up.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    slug: "jira-service-management-automation",
    category: "helpdesks",
    navLabel: "Jira Service Mgmt automation",
    primaryKeyword: "Jira Service Management automation",
    title: "Jira Service Management Automation: Flows, SLAs, Webhooks",
    description:
      "How Jira Service Management automation works: triggers, conditions and actions, SLA and approval triggers, smart values, webhooks, queues and request types.",
    h1: "Jira Service Management automation: how flows, SLAs and webhooks work",
    intro:
      "Jira Service Management automation is built from flows (previously called rules) with three parts: a trigger that starts them, optional conditions that filter which work items they touch, and actions that do the work. Service-specific triggers such as SLA breaches and approvals, plus smart values and web requests, let you automate most of the triage, escalation and notification work around your queues.",
    keyFacts: [
      "Every automation flow is a trigger, optional conditions, and one or more actions, run top to bottom.",
      "Jira Service Management adds triggers such as 'SLA threshold breached' and 'Approval required'.",
      "The 'Send web request' action calls external systems; an incoming webhook trigger lets external systems start a flow.",
      "Smart values such as {{issue.key}} insert work item data into fields, comments and messages.",
      "Each SLA has its own start, pause and stop conditions; pausing is optional.",
    ],
    sections: [
      {
        heading: "Triggers, conditions and actions",
        blocks: [
          {
            type: "p",
            text: "Atlassian's documentation now calls automation rules 'flows'; you will see both terms, and they mean the same thing. You can create a flow from scratch, from a template or with Rovo, and once it is enabled its steps run in order from top to bottom.",
          },
          {
            type: "table",
            caption: "The three parts of a Jira Service Management automation flow",
            head: ["Part", "What it does", "Examples"],
            rows: [
              [
                "Trigger",
                "Starts the flow when something happens",
                "Work item created, work item transitioned, comment added, SLA threshold breached, approval required, scheduled, incoming webhook",
              ],
              [
                "Condition (optional)",
                "Limits which work items the flow acts on",
                "Work item matches a JQL filter, comment is internal or public, user type",
              ],
              [
                "Action",
                "Does the work",
                "Transition, edit field, add comment, send email, send web request, send Slack or Microsoft Teams message",
              ],
            ],
          },
          {
            type: "p",
            text: "Two triggers are specific to service work. 'SLA threshold breached' lets you pick an SLA and fire either when it has breached or when it is about to. 'Approval required' fires when a work item that needs approval is created or updated, or when new approvers are added. A scheduled trigger runs a flow on a timer, which is useful for periodic checks such as listing work items close to breaching.",
          },
        ],
      },
      {
        heading: "Queues, request types and SLAs: what you automate around",
        blocks: [
          {
            type: "p",
            text: "Automation in Jira Service Management mostly exists to keep three structures accurate:",
          },
          {
            type: "ul",
            items: [
              "Queues are filtered sets of work items that give agents a focused view of their work. They filter on fields like status, work type, assignee and priority, or on JQL. Agents can't create or edit queues; space admins do.",
              "Request types are the forms customers use to raise requests on the portal. Each request type links to exactly one work type: the request type handles naming and portal settings, while the work type holds the workflow and fields. One work type can back many request types.",
              "SLAs measure time against goals. Each SLA has its own start, pause and stop conditions; pause is optional and is typically used while waiting for the customer to respond, and measurement stops as soon as any stop condition is met.",
            ],
          },
          {
            type: "p",
            text: "In practice, flows set the fields that queues and SLA goals filter on. If a flow sets priority or a custom field based on the request type or message content, the right queue and the right SLA goal pick the work item up automatically.",
          },
        ],
      },
      {
        heading: "Smart values",
        blocks: [
          {
            type: "p",
            text: "Smart values let a flow insert data from the work item into fields, comments, emails and web request bodies. {{issue.key}} returns the key, for example PROJ-123. Other fields follow the same pattern using the field's name, including custom fields; if two fields share a name, use the custom field ID instead.",
          },
          {
            type: "p",
            text: "Atlassian's interface now says 'work item' where it used to say 'issue', but the smart value syntax in its documentation still uses the issue prefix. Multi-value fields can be looped over with the # syntax, closed with {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks and external systems",
        blocks: [
          {
            type: "p",
            text: "Webhooks work in both directions:",
          },
          {
            type: "ul",
            items: [
              "Outbound: the 'Send web request' action calls another system's API when a flow runs, and can return response data for later steps. Your receiving system must accept requests from Atlassian's network.",
              "Inbound: the incoming webhook trigger gives a flow its own URL, so an external system (a chatbot, a billing tool, a monitoring tool) can start the flow with an HTTP request.",
              "Chat tools: the 'Send Slack message' and 'Send Microsoft Teams message' actions post to channels, with smart values in the message text.",
            ],
          },
        ],
      },
      {
        heading: "Usage limits and what to automate first",
        blocks: [
          {
            type: "p",
            text: "As of October 2026, Jira Cloud meters automation usage per product per month, with limits that depend on your plan. Atlassian publishes how usage is counted on its 'How is your automation usage calculated' page; check it, and your current usage, before adding high-frequency scheduled flows.",
          },
          {
            type: "p",
            text: "Common first flows for a service desk:",
          },
          {
            type: "ul",
            items: [
              "Set priority, component or assignee on creation based on the request type and the content of the request.",
              "Post to an escalation channel when an SLA is about to breach.",
              "Remind the customer when a request has been waiting on them, then resolve it after a set time with a comment.",
              "Send new high-priority requests to an external system through 'Send web request'.",
            ],
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab works on top of your existing Jira Service Management site, with no platform switch, combining native automation with APIs, webhooks and Make or n8n where a flow needs to reach other tools. Ticket Routing & Categorization is $600–$950 one-time; Custom Automation is $1,200–$2,000. Every project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. Start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are Jira automation rules and flows the same thing?",
        a: "Yes. Atlassian's newer documentation and interface use 'flow' for what was called an automation rule. The structure is the same: trigger, conditions and actions.",
      },
      {
        q: "Can Jira Service Management automation react to SLA breaches?",
        a: "Yes. The 'SLA threshold breached' trigger lets you choose an SLA and fire either when it has breached or when it is about to breach.",
      },
      {
        q: "How do I send data from Jira Service Management to another system?",
        a: "Use the 'Send web request' action in a flow. It calls the other system's API when the flow runs and can return response data to later steps.",
      },
      {
        q: "What is the difference between a request type and a work type?",
        a: "A request type is the customer-facing form on the portal; the work type behind it holds the workflow and fields. Each request type uses one work type, and one work type can serve many request types.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    slug: "slack-support-automation",
    category: "helpdesks",
    navLabel: "Slack support automation",
    primaryKeyword: "Slack customer support automation",
    title: "Slack Customer Support Automation: Alerts and Escalations",
    description:
      "Slack customer support automation: escalation alerts, Workflow Builder, incoming webhooks, Bolt apps, Zendesk, Freshdesk and Jira integrations, Slack Connect.",
    h1: "Slack customer support automation: alerts, escalations and customer channels",
    intro:
      "For most support teams, Slack is not where customers write in. It is where the team escalates, gets alerted and coordinates. Slack customer support automation means getting the right ticket events into the right channel, turning Slack messages into tickets when needed, and, for B2B teams, serving customers directly in Slack Connect channels.",
    keyFacts: [
      "Workflow Builder workflows can start from a link, a webhook, a schedule, a posted message, an emoji reaction or a channel join.",
      "An incoming webhook is a unique URL tied to one channel; you POST a JSON payload to it to post a message.",
      "Slack generally allows apps to post no more than one message per second per channel.",
      "Zendesk, Freshdesk and Jira Service Management each offer a Slack integration for creating tickets and sending notifications.",
      "Slack Connect lets people from other organizations work with you in a shared channel.",
    ],
    sections: [
      {
        heading: "Ways to automate support work in Slack",
        blocks: [
          {
            type: "p",
            text: "There are four main building blocks, from no-code to custom code. Pick the simplest one that does the job.",
          },
          {
            type: "table",
            caption: "Slack automation options for support teams",
            head: ["Option", "What it is", "Best for"],
            rows: [
              [
                "Helpdesk integration",
                "The Slack app from Zendesk, Freshdesk or Jira Service Management",
                "Ticket notifications in channels and creating tickets from messages",
              ],
              [
                "Workflow Builder",
                "Slack's built-in no-code workflow tool",
                "Intake forms, escalation checklists, scheduled reminders",
              ],
              [
                "Incoming webhook",
                "A URL that posts a JSON message into one channel",
                "One-way alerts from your helpdesk, scripts or Make/n8n",
              ],
              [
                "Custom Slack app (Bolt)",
                "Your own app listening to events and commands",
                "Two-way actions: buttons, slash commands, lookups in other systems",
              ],
            ],
          },
        ],
      },
      {
        heading: "Helpdesk to Slack integrations",
        blocks: [
          {
            type: "p",
            text: "Start with what your helpdesk already provides:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: agents can create tickets with the /zendesk shortcut, a message action that converts a Slack message into a ticket, the Zendesk app in the sidebar, or an @zendesk mention in a Slack Connect channel. Tickets created this way get the created_from_slack tag. Admins use triggers to decide which events post to which channels, and the Zendesk app must be invited to each channel that receives notifications.",
              "Freshdesk: the Slack app can turn a channel message into a ticket, with the message as the description, and tickets can also be created from scratch inside Slack. Slack members who are not Freshdesk agents can create tickets too.",
              "Jira Service Management: chat in Slack connects request channels, where people ask for help, to an agent channel. Agents can create a work item by reacting to a message with the :ticket: emoji, and request types must be connected to a request channel to be available there.",
            ],
          },
          {
            type: "p",
            text: "If the built-in integration doesn't cover an event you care about, fall back to an incoming webhook or Workflow Builder, described below.",
          },
        ],
      },
      {
        heading: "Workflow Builder for internal escalation",
        blocks: [
          {
            type: "p",
            text: "Workflow Builder lets anyone build multi-step workflows without code. A workflow starts from a trigger: a shareable link, a webhook, a schedule, a list item update, a message posted in a channel, someone joining a channel, or an emoji reaction. Steps run in the order you set and can be Slack actions such as sending a message, connector steps for third-party services, or custom steps built by developers. Variables pass data from earlier steps to later ones, buttons pause a workflow until someone clicks, and branches route people through different paths based on conditions.",
          },
          {
            type: "p",
            text: "Typical support uses: a link-started escalation form that collects the ticket URL and severity and posts a structured message to an escalation channel; an emoji-reaction workflow that tags in the on-call lead; or a scheduled weekly reminder to review stale tickets.",
          },
        ],
      },
      {
        heading: "Incoming webhooks and Bolt apps",
        blocks: [
          {
            type: "p",
            text: "An incoming webhook is the simplest way to push alerts from any system into Slack. Each webhook URL is tied to one channel; you send an HTTP POST with a JSON body containing a text field, and optionally Block Kit blocks for richer layouts. Anyone who has the URL can post to your workspace, so treat it like a password and keep it out of public code.",
          },
          {
            type: "p",
            text: "Mind volume. Slack's rate limits say apps should generally post no more than one message per second per channel, whether through chat.postMessage or an incoming webhook. Short bursts are tolerated, but sustained overruns get HTTP 429 responses with a Retry-After header. For busy queues, batch alerts or send a digest instead of one message per ticket.",
          },
          {
            type: "p",
            text: "When you need two-way interaction, such as a button that assigns a ticket or a slash command that looks up an order, build a Slack app with Bolt, Slack's framework for JavaScript, Python and Java. A Bolt app listens for events and slash commands in your workspace and responds to them, for example by calling your helpdesk's API.",
          },
        ],
      },
      {
        heading: "Slack Connect for customer channels",
        blocks: [
          {
            type: "p",
            text: "Slack Connect lets you share a channel with people from other organizations, each working from their own Slack. B2B support teams use it as a dedicated channel per key customer. You invite an external organization from the channel settings and choose a permission level: post only, or post, invite and more. Admins can restrict who may invite external people. A Slack Connect channel can include up to 250 organizations, including yours.",
          },
          {
            type: "p",
            text: "Customer channels still need ticket tracking. Zendesk's integration supports @zendesk mentions in Slack Connect channels, with fewer options for external users; for other helpdesks, a small Bolt app or a Make/n8n flow can turn tagged messages into tickets.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab connects Slack to the helpdesk you already use (Zendesk, Freshdesk, Jira or internal tools) through APIs, webhooks and Make or n8n, with no platform switch. Automated Reports delivered to Slack or email are $500–$900 one-time; Custom Automation for two-way Slack flows is $1,200–$2,000. Every project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. Start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I create helpdesk tickets from Slack messages?",
        a: "Yes. Zendesk and Freshdesk both offer Slack apps that convert a message into a ticket, and Jira Service Management agents can create a work item from a request channel message by reacting with the :ticket: emoji.",
      },
      {
        q: "What is the easiest way to send support alerts to Slack?",
        a: "Use your helpdesk's Slack integration if it covers the event you need. Otherwise, post a JSON payload to a Slack incoming webhook from your helpdesk's webhook action or from Make or n8n.",
      },
      {
        q: "Can a Slack workflow be started by an external system?",
        a: "Yes. Workflow Builder supports a webhook trigger, so an external system can start a workflow by sending it an HTTP request.",
      },
      {
        q: "Is there a limit on how many messages I can post to a channel?",
        a: "Slack generally allows apps to post no more than one message per second per channel. Short bursts are tolerated, but sustained overruns return HTTP 429 errors.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    slug: "intercom-automation",
    category: "helpdesks",
    navLabel: "Intercom automation",
    primaryKeyword: "Intercom automation",
    title: "Intercom Automation: Workflows, Fin, Routing and API",
    description:
      "How Intercom automation works: Workflows triggers, branches and actions, team inbox assignment, Fin AI Agent, Slack and Jira, webhooks and the REST API.",
    h1: "Intercom automation: Workflows, assignment, Fin and the API",
    intro:
      "Intercom automation is built mainly in Workflows: a visual builder where a trigger starts the flow, branches pick a path and actions do the work, such as tagging, assigning or letting Fin answer. Each team inbox's assignment method then decides which teammate gets the conversation, and webhooks plus the REST API cover anything that has to happen outside Intercom. Below is how each piece behaves and where to start.",
    keyFacts: [
      "Workflows are built in a visual builder and can be customer-facing or run silently in the background for teammates.",
      "With branches, a conversation follows only the first matching path; Apply rules runs every matched path.",
      "Only one SLA can be applied to a conversation; later SLA actions from other workflows are ignored.",
      "Balanced assignment gives a conversation to the eligible teammate with the fewest open conversations.",
      "Webhook subscriptions are created in the Developer Hub, not through the API, and the endpoint must use HTTPS.",
    ],
    sections: [
      {
        heading: "How Intercom Workflows are built",
        blocks: [
          {
            type: "p",
            text: "Workflows are Intercom's single place to automate customer conversations and teammate processes. You build them in a visual builder from reusable steps. A workflow can be customer-facing, like a bot that greets and triages, or run silently in the background for your team. Every workflow combines the same few kinds of steps.",
          },
          {
            type: "table",
            caption: "The building blocks of an Intercom workflow",
            head: ["Building block", "What it does", "Examples"],
            rows: [
              [
                "Trigger",
                "Sets when the workflow starts and for whom",
                "When a conversation starts, during a conversation, on a ticket event, or when another workflow calls it as a reusable workflow",
              ],
              [
                "Branches",
                "Check conditions and send the conversation down the first path whose condition matches",
                "Separate paths for different audiences, channels or topics",
              ],
              [
                "Apply rules",
                "Checks every path and runs the actions of each one that matches",
                "Several independent tags or attributes set in one step",
              ],
              [
                "Actions",
                "Do the work",
                "Tag, assign, snooze, set priority, apply an SLA, let Fin answer, notify Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "The difference between branches and Apply rules matters when conditions overlap. With branches, a conversation that meets several conditions only follows the first matching path, read from top to bottom, so put the most specific conditions first. Apply rules runs the actions of every matched path, which suits steps that should stack rather than compete.",
          },
        ],
      },
      {
        heading: "Inbox automation: assignment, priority and SLAs",
        blocks: [
          {
            type: "p",
            text: "Most inbox automation is a background workflow made of actions. Assign sends a conversation to a chosen teammate or team inbox. Tag adds a tag, and tags are created and managed in your workspace settings. Snooze temporarily removes the conversation from the teammate inbox; if the customer or a teammate replies during the snooze, the workflow ends. Set priority marks how urgent the conversation is.",
          },
          {
            type: "p",
            text: "SLAs are applied with an action too, but only one SLA can be added to a conversation. If a later workflow tries to apply another SLA, that action is ignored, so decide which workflow owns SLAs before you build several of them.",
          },
          {
            type: "p",
            text: "Once a conversation lands in a team inbox, that inbox's assignment method decides who gets it: manual, round robin or balanced. Balanced assignment gives each new conversation to the eligible teammate with the fewest open conversations, and breaks ties in favour of the teammate who has waited longest for one. To be eligible, a teammate must be active and under their assignment limit. Intercom recommends balanced assignment for support teams.",
          },
          {
            type: "note",
            text: "A simple starting pattern: one background workflow on new conversations tags them by topic, sets priority, applies a single SLA and assigns them to the right team inbox. The inbox's assignment method then picks the teammate.",
          },
        ],
      },
      {
        heading: "Fin AI Agent in your workflows",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent is Intercom's AI agent for answering customer questions. It answers from the content you give it: public articles, documents, snippets and public URLs, which you manage under Knowledge > Sources. It respects audience targeting on Intercom articles, so it won't answer from private or restricted articles that the customer on Messenger isn't allowed to see.",
          },
          {
            type: "p",
            text: "Fin is supported on Intercom Messenger on web, iOS and Android, and on email, WhatsApp, SMS, Facebook and Instagram. Inside Workflows, a 'Let Fin answer' step lets Fin respond at any point in the flow and keep going until the issue is resolved or escalated to a teammate.",
          },
          {
            type: "p",
            text: "Plan the handoff as carefully as the answers. Decide which team inbox an escalated conversation should go to, and build that path in the workflow so it never sits unassigned.",
          },
        ],
      },
      {
        heading: "Webhooks and the Intercom REST API",
        blocks: [
          {
            type: "p",
            text: "When something in Intercom needs to reach another system, use webhooks. You set them up in the Developer Hub: open your app, go to Configure, then Webhooks, and enter your endpoint URL. The endpoint must use HTTPS and must accept a HEAD request, which Intercom uses to validate the URL. Subscriptions can only be created in the Developer Hub, not through the API.",
          },
          {
            type: "p",
            text: "Next you pick topics. A topic is an event inside Intercom that triggers the webhook, and each topic is tied to one or more permissions your app must have. Intercom sends an HTTP POST to your endpoint for every topic you subscribe to, and each payload includes the topic and a delivery attempt count. The 'Send a test request' button in the webhooks section lets you check the endpoint.",
          },
          {
            type: "p",
            text: "To act on conversations from your own code, use the REST API. Requests go to api.intercom.io with an access token sent as a Bearer token in the Authorization header, plus an Intercom-Version header that defaults to the version set in your app. Replying, for example, is a POST to /conversations/{id}/reply with a JSON body that sets the message type, the author type and the message body.",
          },
          {
            type: "p",
            text: "Good first candidates for Intercom automation:",
          },
          {
            type: "ul",
            items: [
              "Tagging new conversations and assigning them to the right team inbox.",
              "Applying one SLA per conversation and raising priority for key accounts.",
              "Sending conversation events to a webhook so Make or n8n can update other systems.",
              "Posting new or escalated conversations to a Slack channel.",
            ],
          },
        ],
      },
      {
        heading: "Slack and Jira integrations",
        blocks: [
          {
            type: "p",
            text: "For Slack alerts, set a Slack channel's purpose to notification-only, then add a 'Notify Slack' step to a workflow. The Intercom app posts the notification, and later notifications for the same conversation appear as thread replies under the original message. Replies typed in that thread are not sent back to the Intercom conversation, so teammates still answer customers in Intercom.",
          },
          {
            type: "p",
            text: "For engineering escalations, Intercom's Jira for Tickets app can automatically create Jira issues from the ticket types you specify, mirror Jira issue statuses back to the Intercom tickets and sync notes. Its basic automation maps only the title and description; for more fields, use its custom automation built on Workflows templates. It doesn't create issues straight from conversations, so a conversation has to be converted into a ticket first.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds on top of the tools you already use, with no platform switch, using APIs, webhooks and Make or n8n. Intercom has both a REST API and webhooks, so it can almost certainly be connected; the specific setup is confirmed on a free 30-minute audit call. Ticket Routing & Categorization is a one-time project in the $600–$950 range, and Custom Automation for flows across several systems is $1,200–$2,000. Every project includes 30 days of post-launch support, basic documentation and no hidden fees, and most setups take 1–3 weeks.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between branches and Apply rules in Intercom Workflows?",
        a: "Branches send the conversation down only the first path whose condition matches, checked from top to bottom. Apply rules checks every path and runs the actions of each one that matches.",
      },
      {
        q: "Which assignment method does Intercom recommend for support teams?",
        a: "Balanced assignment. It gives each conversation to the active teammate under their assignment limit who has the fewest open conversations, with ties going to whoever has waited longest.",
      },
      {
        q: "What content does Fin AI Agent use to answer customers?",
        a: "Public articles, documents, snippets and public URLs that you add under Knowledge > Sources. It respects article audience targeting, so it won't answer from articles the customer can't see.",
      },
      {
        q: "Can I create Intercom webhook subscriptions through the API?",
        a: "No. Webhook subscriptions are set up in the Developer Hub. The endpoint must use HTTPS and accept a HEAD request, which Intercom uses to validate it.",
      },
      {
        q: "Can teammates reply to customers from Intercom's Slack notifications?",
        a: "No. In a notification-only Slack channel, replies in a notification's thread are not sent back to the Intercom conversation.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    slug: "hubspot-service-hub-automation",
    category: "helpdesks",
    navLabel: "HubSpot Service Hub automation",
    primaryKeyword: "HubSpot Service Hub automation",
    title: "HubSpot Service Hub Automation: Tickets, Workflows, SLAs",
    description:
      "HubSpot Service Hub automation: help desk channels and routing, ticket pipelines and statuses, SLA goals, ticket workflows, chatbots, webhooks and the API.",
    h1: "HubSpot Service Hub automation: help desk, tickets, workflows and the API",
    intro:
      "HubSpot Service Hub automation centres on the ticket: help desk channels create tickets, routing assigns them, pipelines and statuses track them, and ticket-based workflows act on them. Rule-based chatbots collect details before a ticket exists, and the workflow webhook action and the CRM API connect HubSpot to everything else. Below is what each piece does and where to start.",
    keyFacts: [
      "By default, help desk creates tickets automatically from every channel you connect to it.",
      "The default Support Pipeline has four ticket statuses: New, Waiting on contact, Waiting on us and Closed.",
      "Help desk SLA goals can track time to first reply, time to next reply and time to close.",
      "The workflow webhook action only accepts URLs that begin with HTTPS.",
      "Tickets are created through the API with a POST to /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "What you can automate in HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "Service Hub automation is spread across several tools that all act on the ticket record. Decide where a rule belongs before you build it; most problems come from the same logic living in two places.",
          },
          {
            type: "table",
            caption: "Where each kind of Service Hub automation lives",
            head: ["Tool", "What it automates", "Typical use"],
            rows: [
              [
                "Help desk channels and routing",
                "Creating tickets from connected channels and assigning them",
                "Every support email or chat becomes a ticket and reaches the right team",
              ],
              [
                "Ticket pipelines and statuses",
                "The stages a ticket moves through, and whether each counts as open or closed",
                "Separate pipelines for different kinds of support work",
              ],
              [
                "SLA goals",
                "Targets for first reply, next reply and close times",
                "A faster response goal for chat than for email",
              ],
              [
                "Ticket-based workflows",
                "Actions on tickets that meet enrollment triggers",
                "Rotating owners, updating properties, delayed follow-ups",
              ],
              [
                "Rule-based chatbots",
                "Questions, ticket creation and handoff in chat",
                "Collecting order details before an agent joins",
              ],
              [
                "Webhooks and the API",
                "Sending ticket data out, and creating or updating tickets from other systems",
                "Syncing tickets with Jira or internal tools",
              ],
            ],
          },
        ],
      },
      {
        heading: "Help desk channels and routing",
        blocks: [
          {
            type: "p",
            text: "Help desk is HubSpot's workspace for ticket-based support. You can connect chat, email, form, calling and Facebook Messenger channels to it. By default, tickets are created automatically from every channel you connect, and HubSpot recommends connecting all of your support channels, because tickets from unconnected channels may be missing their subject and thread in help desk.",
          },
          {
            type: "p",
            text: "Routing is set per channel. When you connect a team email, for example, you choose the default pipeline, status and priority for new tickets, then pick a routing option:",
          },
          {
            type: "ul",
            items: [
              "Specific users or teams.",
              "The contact owner.",
              "Skill-based routing, which matches tickets to agents' skills.",
              "An assignment workflow, when you need logic beyond the built-in options.",
              "No one, which leaves tickets in the Unassigned view for agents to pick up.",
            ],
          },
          {
            type: "note",
            text: "Automatic and skill-based routing depend on your seats and subscription. Check what your account includes before you design around a specific routing option.",
          },
        ],
      },
      {
        heading: "Ticket pipelines, statuses and SLA goals",
        blocks: [
          {
            type: "p",
            text: "Tickets move through a pipeline, and for tickets the pipeline stages are called statuses. The default Support Pipeline has four: New, Waiting on contact, Waiting on us and Closed. You manage pipelines under Settings > Objects > Tickets > Pipelines, and every status you add must be marked as Open or Closed.",
          },
          {
            type: "p",
            text: "That choice drives automation. When a ticket moves to a closed status, its Close date is set to today; if it moves back to an open status, the Close date is cleared. You can adjust this behaviour per pipeline. Because workflows and reports filter on status, keep statuses few and unambiguous.",
          },
          {
            type: "p",
            text: "SLA goals in help desk set targets for time to first reply, time to next reply and time to close. A goal can apply to all tickets, to tickets with a specific property value, or to a combination of properties, and each rule can be limited to set hours and a time zone. HubSpot's own examples include a shorter reply goal for enterprise customers and a faster response goal for chat than for email. Snoozing a ticket does not affect its SLA.",
          },
        ],
      },
      {
        heading: "Ticket-based workflows",
        blocks: [
          {
            type: "p",
            text: "A ticket-based workflow enrolls tickets that meet its enrollment triggers, then runs a sequence of actions. The actions most useful for support work:",
          },
          {
            type: "ul",
            items: [
              "Delays: wait a set number of days, hours and minutes, or until a calendar date, a date property or an event.",
              "If/then branches: send tickets down different paths based on filter criteria combined with AND and OR.",
              "Edit record: set, copy or clear property values on the ticket or on an associated record.",
              "Create record: create a new record, which is associated with the enrolled ticket by default.",
              "Rotate record to owner: assign tickets in turn among the users you choose. Rotation counts are tracked per action and reset if you add or remove owners after the workflow is turned on.",
              "Send a webhook: call an external URL with ticket data, covered in the next section.",
            ],
          },
          {
            type: "p",
            text: "Good first candidates for HubSpot ticket workflows:",
          },
          {
            type: "ul",
            items: [
              "Rotating new tickets in a pipeline among a group of agents.",
              "Copying a property from an associated record onto the ticket so routing and reports can use it.",
              "Sending a ticket to Jira or an internal tool through a webhook when its status changes.",
              "Waiting a set time after a ticket closes, then branching on a property to decide on a follow-up.",
            ],
          },
        ],
      },
      {
        heading: "Chatbots, webhooks and the HubSpot API",
        blocks: [
          {
            type: "p",
            text: "Rule-based chatbots handle the first minutes of a chat. Three actions do most of the support work. Ask question stores the visitor's answer in a contact property and can offer quick replies. Submit a ticket creates a ticket with the name, pipeline and status you set, but is skipped if the visitor has no associated contact record. Send to team member hands the chat to a specific user or team after checking that they are available, and shows the away message if they aren't. If the bot has operating hours, chats are only routed to a team member during those hours.",
          },
          {
            type: "p",
            text: "The workflow webhook action sends data out. Choose POST or GET and enter a URL that begins with HTTPS. A POST body can include all of the record's properties or a customised set of keys, each mapped to a HubSpot property. You can authenticate with a request signature, which HubSpot adds as a header for your endpoint to verify, or with an API key stored as a secret and sent in a header or query parameter. You can test the action from its panel without affecting existing records. Whether this action is available depends on your subscription.",
          },
          {
            type: "p",
            text: "For the other direction, use the CRM API. A POST to /crm/v3/objects/tickets creates a ticket; include subject, hs_pipeline_stage (the status) and hs_pipeline, using internal IDs rather than labels. If no pipeline is given, the default pipeline is used. A GET to /crm/v3/properties/tickets lists your account's ticket properties. Apps can also subscribe to ticket events through the Webhooks API, including ticket.creation and ticket.propertyChange, which fires when a property you name changes on any ticket. These subscriptions are configured at the app level and need the tickets scope.",
          },
        ],
      },
      {
        heading: "Getting this built",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds on top of the tools you already use, with no platform switch, using APIs, webhooks and Make or n8n. HubSpot has a documented API and webhook support, so it can almost certainly be connected; the specific setup is confirmed on a free 30-minute audit call. Ticket Routing & Categorization is a one-time project in the $600–$950 range, Automated Reports by email or Slack are $500–$900, and Custom Automation across several systems is $1,200–$2,000. Every project includes 30 days of post-launch support, basic documentation and no hidden fees, and most setups take 1–3 weeks.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What are the default ticket statuses in HubSpot?",
        a: "The default Support Pipeline has four statuses: New, Waiting on contact, Waiting on us and Closed. You can add your own and mark each one as Open or Closed.",
      },
      {
        q: "Can HubSpot help desk track SLAs?",
        a: "Yes. SLA goals in help desk track time to first reply, time to next reply and time to close, for all tickets or by ticket properties, and can be limited to set hours. Snoozing a ticket doesn't affect its SLA.",
      },
      {
        q: "Can a HubSpot chatbot create tickets?",
        a: "Yes. The Submit a ticket action creates a ticket with the name, pipeline and status you set. It is skipped if the visitor has no associated contact record.",
      },
      {
        q: "How do I send HubSpot ticket data to another system?",
        a: "Add a webhook action to a ticket-based workflow, which sends a POST or GET request to an HTTPS URL. Apps can also subscribe to ticket events such as ticket.creation and ticket.propertyChange through the Webhooks API.",
      },
      {
        q: "What do I need to create a ticket through the HubSpot API?",
        a: "Send a POST to /crm/v3/objects/tickets with subject, hs_pipeline_stage and hs_pipeline, using internal IDs. If you leave out the pipeline, the default one is used.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
