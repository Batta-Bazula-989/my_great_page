import type { SeoPageContent } from "../types";

export const channelPages: SeoPageContent[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    slug: "whatsapp-customer-support-bot",
    category: "channels",
    navLabel: "WhatsApp support bot",
    primaryKeyword: "WhatsApp customer support bot",
    title: "WhatsApp Customer Support Bot: Rules, Setup and Handoff",
    description:
      "How a WhatsApp customer support bot works: Business Platform vs app, the 24-hour window, templates, opt-in, pricing basics and connecting to your helpdesk.",
    h1: "WhatsApp customer support bot: how it works and what Meta allows",
    intro:
      "A WhatsApp customer support bot runs on the WhatsApp Business Platform (Cloud API), not on the free WhatsApp Business app. It can reply freely for 24 hours after each customer message; after that, you can only reach the customer with a pre-approved template. Build the bot around that window, your opt-in process and a clean handoff to your helpdesk.",
    keyFacts: [
      "When a customer messages or calls you, a 24-hour customer service window opens and resets with each new message.",
      "Inside the window you can send free-form service messages without pre-approval.",
      "Outside the window, templates are the only message type you can send.",
      "Before messaging people, you need opt-in that clearly names your business.",
      "Meta bills per delivered message, based on message category and the recipient's country.",
    ],
    sections: [
      {
        heading: "WhatsApp Business app vs WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp offers two products for businesses, and only one is built for bots. The WhatsApp Business app is a free app for small businesses that answer customers by hand and use basic automated replies. The WhatsApp Business Platform is a set of APIs for medium and larger businesses. Cloud API is its main messaging product, and it is what chatbots, helpdesks and CRMs connect to.",
          },
          {
            type: "table",
            caption: "App vs Platform at a glance",
            head: ["", "WhatsApp Business app", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Built for", "Small businesses replying by hand", "Medium and enterprise businesses connecting bots and support tools"],
              ["Cost", "Free to download and use", "Per-message charges set by Meta"],
              ["Setup", "Install from an app store", "Developer resources or a Business Messaging Partner"],
              ["Automation", "Basic automated responses", "Chatbots, message flows, CRM and helpdesk integrations"],
            ],
          },
          {
            type: "p",
            text: "If you already use the app, Meta supports onboarding an existing WhatsApp Business app number to Cloud API so both can run on the same number. After onboarding, messages sent from the app are not subject to the customer service window, while messages sent through Cloud API are, and some app features, such as group chats, are not supported on the API side. Check that your helpdesk supports this setup before you rely on it.",
          },
        ],
      },
      {
        heading: "The 24-hour customer service window",
        blocks: [
          {
            type: "p",
            text: "Every WhatsApp support flow depends on one timer. When a customer messages or calls your business, a 24-hour customer service window starts, and each new message or call from them resets it to 24 hours. While it is open, your bot or agents can send free-form service messages through the API with no pre-approval.",
          },
          {
            type: "p",
            text: "Once the window closes, templates are the only messages you can send. Templates are pre-written formats that need approval before use, and each belongs to a category: marketing (promotions), utility (follow-ups on something the customer did or asked for) or authentication (verifying identity).",
          },
          {
            type: "table",
            caption: "What you can send, and when",
            head: ["Situation", "What you can send"],
            rows: [
              ["Customer wrote within the last 24 hours", "Free-form service messages from your bot or agents"],
              ["Window closed, you need to update a ticket or order", "An approved utility template"],
              ["You need to verify the customer's identity", "An approved authentication template"],
              ["You want to promote something", "An approved marketing template, sent only to opted-in users"],
              ["Customer replies to your template", "Their reply opens a new 24-hour window, so free-form replies work again"],
            ],
          },
          {
            type: "p",
            text: "For a support bot this means two practical rules: answer inside the window whenever you can, and prepare utility templates in advance for late follow-ups such as \"your ticket was updated\" or \"we need one more detail\".",
          },
        ],
      },
      {
        heading: "Opt-in rules your bot must respect",
        blocks: [
          {
            type: "p",
            text: "Meta requires businesses to get opt-in permission before messaging people on WhatsApp. The opt-in does not have to be WhatsApp-specific, but it must clearly say the person is agreeing to receive messages from your business and must state your business name. You are responsible for choosing an opt-in method that meets the laws that apply to you. Meta lists these methods:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Your website",
              "A phone call using an interactive voice response (IVR) flow",
              "In person or on paper",
            ],
          },
          {
            type: "p",
            text: "Meta also recommends opt-in that covers each kind of message you plan to send, plus clear opt-out instructions. In practice, collect and record opt-in wherever customers first give you their number, such as checkout, sign-up or your contact form, so templates for ticket updates are never a guess.",
          },
        ],
      },
      {
        heading: "How WhatsApp pricing works, without the rate card",
        blocks: [
          {
            type: "p",
            text: "Meta charges per delivered message and only for messages a business sends to users. The price depends on the message category and the recipient's country code. Rate cards are published per market and change from time to time, so check Meta's current pricing page instead of a number from a blog post.",
          },
          {
            type: "p",
            text: "Two points matter for support teams. Conversations that start from a Click to WhatsApp ad or a Facebook Page call-to-action open a free entry point window of 72 hours. And helpdesk vendors can add their own fees: Freshworks' documentation, for example, states that it adds a markup on top of Meta's WhatsApp charges.",
          },
          {
            type: "note",
            text: "Meta's pricing documentation describes 2026 changes to how service and utility messages are billed. Confirm the current rules on Meta's pricing page before estimating monthly costs.",
          },
        ],
      },
      {
        heading: "Connecting the bot to your helpdesk",
        blocks: [
          {
            type: "p",
            text: "A WhatsApp bot should never be a dead end. When it can't resolve something, the conversation should reach an agent with the context already attached. Zendesk and Freshdesk both offer native WhatsApp channels:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp is added as a messaging channel in Admin Center (Channels > Messaging and social > Messaging). You need a Meta Business Manager that belongs to your business, and the person connecting the number must be an admin in it. Zendesk notes that agents can't respond more than 24 hours after the customer's last message, and that WhatsApp group messages are not supported.",
              "Freshdesk: WhatsApp is a Freshdesk Omni channel with support for approved message templates. Per-number settings include linking an AI agent, routing to agent groups, template management, automations and SLA policies. Freshdesk's guide notes a limit of 250 business-initiated conversations per 24 hours until Meta's business verification is complete.",
            ],
          },
          {
            type: "p",
            text: "Whichever helpdesk you use, map the details the bot collects (name, order number, issue type) into ticket fields so agents don't ask again, and tag bot-handled conversations so you can see what the bot actually resolves.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds WhatsApp bots on top of the tools you already use, such as Zendesk, Freshdesk, Jira, Slack or internal systems, using APIs, webhooks, and Make or n8n. A Starter Chat Bot ($350–$450) covers one or two channels with FAQs and basic info collection; a Standard Chat Bot ($500–$650) covers three to five channels with more complex conversations and smoother handoffs. Every project includes 30 days of post-launch support and basic documentation, with no hidden fees, and most setups take 1–3 weeks. A free 30-minute audit call is a simple way to check whether WhatsApp fits your support volume.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I build a support bot on the regular WhatsApp Business app?",
        a: "Not in a meaningful way. The app offers basic automated responses, but chatbots and helpdesk integrations run on the WhatsApp Business Platform, usually through Cloud API.",
      },
      {
        q: "What happens if a customer replies after 24 hours?",
        a: "Their new message opens a fresh 24-hour customer service window, so your bot or agents can reply freely again. The window only limits messages you start after it has closed.",
      },
      {
        q: "Do WhatsApp templates need approval?",
        a: "Yes. Templates must be approved before you can send them, and they are the only messages allowed outside the customer service window.",
      },
      {
        q: "Can I keep my existing WhatsApp Business app number?",
        a: "Meta supports onboarding an existing WhatsApp Business app number to Cloud API so both can be used on the same number, with some features unavailable on the API side. Check that your helpdesk supports this before switching.",
      },
      {
        q: "How much does a WhatsApp support bot cost to run?",
        a: "Meta charges per delivered message, based on message category and recipient country, and rates change over time. Check Meta's current rate cards and any fees your helpdesk adds.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — About the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform",
      },
      {
        label: "Meta for Developers — Onboard WhatsApp Business app users",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/",
      },
      {
        label: "Meta for Developers — Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Pricing on the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      {
        label: "Meta for Developers — Get opt-in for WhatsApp",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in",
      },
      {
        label: "Zendesk Help Center — Adding WhatsApp channels to the Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408842821786-Adding-WhatsApp-channels-to-the-Agent-Workspace",
      },
      {
        label: "Freshdesk Support — WhatsApp Business integration for Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/238137-whatsapp-for-freshdesk-business-integration",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Telegram
  // ---------------------------------------------------------------------------
  {
    slug: "telegram-support-bot",
    category: "channels",
    navLabel: "Telegram support bot",
    primaryKeyword: "Telegram support bot",
    title: "Telegram Support Bot: Bot API, Webhooks and Handoff",
    description:
      "How to run a Telegram support bot: BotFather setup, webhooks vs long polling, inline keyboards, privacy mode in groups, sending limits and helpdesk handoff.",
    h1: "Telegram support bot: how it works and how to set it up",
    intro:
      "A Telegram support bot is a program connected to the Telegram Bot API. You register it with @BotFather, receive a token, and your code gets customer messages through a webhook or long polling. Telegram bots can't start conversations, so every support flow begins when a customer opens your bot and taps Start.",
    keyFacts: [
      "You create a bot and get its authentication token by messaging @BotFather.",
      "Updates arrive through getUpdates or a webhook; the two methods are mutually exclusive.",
      "Telegram keeps undelivered updates for no longer than 24 hours.",
      "Bots can't message users first; the user must message the bot or add it to a group.",
      "Webhooks only work on ports 443, 80, 88 and 8443.",
    ],
    sections: [
      {
        heading: "How a Telegram support bot works",
        blocks: [
          {
            type: "p",
            text: "You create a bot by messaging @BotFather in Telegram, which registers it and gives you an authentication token. Your code uses that token to call the Bot API over HTTPS. The token only authenticates your code; it doesn't give the bot permission to message anyone.",
          },
          {
            type: "p",
            text: "Bots can't start conversations. A user has to message the bot first or add it to a group. Every bot has a link in the form t.me/ followed by the bot's username that opens a chat with it, and the first time someone opens that chat they see a Start button that sends the /start command. Save the user's chat ID at that moment: you need it to send any later message, such as a ticket update.",
          },
          {
            type: "ol",
            items: [
              "The customer taps your t.me link on your website or in an email and presses Start.",
              "The bot greets them and shows a short menu of common topics.",
              "Simple questions get an answer straight away; anything else is collected (order number, description, screenshots).",
              "The bot creates a ticket in your helpdesk and tells the customer what happens next.",
              "When an agent replies in the helpdesk, the reply is sent back to the same Telegram chat.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks vs long polling",
        blocks: [
          {
            type: "p",
            text: "The Bot API offers two mutually exclusive ways to receive updates: the getUpdates method (long polling) and webhooks. While a webhook is set, getUpdates won't work. Either way, Telegram keeps updates you haven't received for no longer than 24 hours, so a bot that is offline for a day loses messages.",
          },
          {
            type: "table",
            caption: "Choosing how your bot receives messages",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["How it works", "Your server asks Telegram for new updates", "Telegram sends each update to your HTTPS URL"],
              ["Hosting", "Any server that can make outbound requests", "A public HTTPS endpoint on port 443, 80, 88 or 8443"],
              ["Checking the sender", "Not needed, your server makes the requests", "Set a secret_token; Telegram returns it in the X-Telegram-Bot-Api-Secret-Token header"],
            ],
          },
          {
            type: "p",
            text: "To switch from a webhook back to polling, remove the webhook with deleteWebhook or by calling setWebhook with an empty URL. Both methods accept drop_pending_updates if you want to discard the queued backlog when you change your setup.",
          },
        ],
      },
      {
        heading: "Buttons and menus for support flows",
        blocks: [
          {
            type: "p",
            text: "Support bots work better with buttons than with free text. Custom reply keyboards replace the user's keyboard with preset answers, and pressing one sends that text into the chat. Inline keyboards attach buttons to a specific message and don't post anything to the chat when pressed. An inline button can open a URL or send callback data of 1–64 bytes to your bot.",
          },
          {
            type: "p",
            text: "Two details catch new bots out. After a user presses a callback button, Telegram clients show a progress indicator until your bot calls answerCallbackQuery, so answer every callback, even with no text. And for multi-step menus, edit the existing message with new buttons instead of sending a new message each time; editing works for messages that have inline keyboards.",
          },
        ],
      },
      {
        heading: "Groups, privacy mode and sending limits",
        blocks: [
          {
            type: "p",
            text: "Bots added to groups run in privacy mode by default. In that mode a bot receives commands addressed to it, replies to its own messages, messages sent via the bot and service messages, but not ordinary group chatter. Bots that are group admins receive all messages, and you can turn privacy mode off with /setprivacy in @BotFather, though Telegram recommends that only when absolutely necessary. Messages in private chats with the bot always reach it.",
          },
          {
            type: "table",
            caption: "Approximate limits from Telegram's Bots FAQ",
            head: ["Where", "Guidance"],
            rows: [
              ["A single chat", "Avoid more than one message per second; short bursts may pass before 429 errors start"],
              ["A group", "No more than 20 messages per minute"],
              ["Bulk notifications", "About 30 messages per second across users, unless you enable paid broadcasts"],
            ],
          },
          {
            type: "p",
            text: "Telegram's FAQ gives these as approximate figures, so build in retries for 429 errors rather than relying on exact numbers. For a support bot they mostly matter when you notify many customers at once, for example about an outage. With long polling, also pass the offset parameter to getUpdates: updates up to that ID are marked as confirmed and won't be returned again.",
          },
        ],
      },
      {
        heading: "Helpdesk handoff and Telegram Business",
        blocks: [
          {
            type: "p",
            text: "For bot-to-human handoff, the usual pattern is for the bot to open a ticket and relay agent replies back to the chat. Zendesk supports Telegram as a Sunshine Conversations channel in the Agent Workspace, which requires Suite Professional or above. Messages become tickets, and an agent's reply in Zendesk appears in the customer's messaging app.",
          },
          {
            type: "p",
            text: "Telegram Business is a separate option for small teams that answer customers from their own Telegram account. The account owner can connect one business bot at a time, choose which chats it can access, and let it process incoming messages and, where permitted, reply on the owner's behalf.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds Telegram support bots that connect to the tools you already use, such as Zendesk, Freshdesk, Jira, Slack or internal systems, through APIs, webhooks, and Make or n8n. A Starter Chat Bot ($350–$450) covers one or two channels with FAQs and basic info collection, which suits Telegram plus a website widget. Every project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can a Telegram bot message customers first?",
        a: "No. A user has to message the bot or add it to a group before the bot can write to them. Save the chat ID on first contact so you can send updates later.",
      },
      {
        q: "Should I use webhooks or getUpdates?",
        a: "Either works, but not at the same time. Webhooks push each update to your HTTPS endpoint, while long polling only needs outbound requests and is simpler during development.",
      },
      {
        q: "Why doesn't my bot see messages in a group?",
        a: "Bots run in privacy mode by default and only see messages meant for them. Make the bot a group admin, or disable privacy mode with /setprivacy in @BotFather and re-add the bot to the group.",
      },
      {
        q: "Does Zendesk support Telegram?",
        a: "Yes, as a Sunshine Conversations channel in the Agent Workspace, which Zendesk lists as requiring Suite Professional or above. Messages arrive as tickets and agent replies go back to Telegram.",
      },
    ],
    sources: [
      {
        label: "Telegram — Bots: An introduction for developers",
        url: "https://core.telegram.org/bots",
      },
      {
        label: "Telegram — Telegram Bot API",
        url: "https://core.telegram.org/bots/api",
      },
      {
        label: "Telegram — From BotFather to 'Hello World'",
        url: "https://core.telegram.org/bots/tutorial",
      },
      {
        label: "Telegram — Marvin's Marvellous Guide to All Things Webhook",
        url: "https://core.telegram.org/bots/webhooks",
      },
      {
        label: "Telegram — Telegram Bot Features",
        url: "https://core.telegram.org/bots/features",
      },
      {
        label: "Telegram — Bots FAQ",
        url: "https://core.telegram.org/bots/faq",
      },
      {
        label: "Telegram — Connected business bots",
        url: "https://core.telegram.org/api/bots/connected-business-bots",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "slack-support-automation",
      "n8n-vs-make-vs-zapier",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Facebook Messenger
  // ---------------------------------------------------------------------------
  {
    slug: "facebook-messenger-bot-customer-service",
    category: "channels",
    navLabel: "Messenger customer service bot",
    primaryKeyword: "Facebook Messenger bot for customer service",
    title: "Facebook Messenger Bot for Customer Service: Rules & Setup",
    description:
      "How a Facebook Messenger bot for customer service works: webhooks, the 24-hour window, the HUMAN_AGENT tag, handover to live agents and Meta's bot policy.",
    h1: "Facebook Messenger bot for customer service: windows, tags and handoff",
    intro:
      "A Facebook Messenger bot for customer service connects to your Facebook Page through Meta's Messenger Platform: incoming messages reach your server through webhooks, and the bot answers through the Send API. You can reply for 24 hours after each customer message, and a human agent can reply for up to 7 days with the HUMAN_AGENT tag once your app is approved for it.",
    keyFacts: [
      "Standard messaging lets you respond within 24 hours of a person's message.",
      "The HUMAN_AGENT tag allows human replies within 7 days, after app approval.",
      "Since April 27, 2026, the CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE and POST_PURCHASE_UPDATE tags return an error.",
      "Where the law requires it, a bot must disclose that people are talking to an automated service.",
      "Meta's policy expects automated experiences to respond to user input within 30 seconds.",
    ],
    sections: [
      {
        heading: "How the Messenger Platform fits together",
        blocks: [
          {
            type: "p",
            text: "A Messenger bot is a Meta app connected to one or more Facebook Pages. The app subscribes to each Page through the Page's subscribed_apps edge, which requires the pages_messaging and pages_manage_metadata permissions. Meta then sends events such as new messages and button taps to your webhook, and your bot replies through the Send API.",
          },
          {
            type: "table",
            caption: "Webhook events a support bot typically uses",
            head: ["Event", "What it tells your bot"],
            rows: [
              ["messages", "A customer sent a message to your Page"],
              ["messaging_postbacks", "A customer tapped a postback button, the Get Started button or a persistent menu item"],
              ["messaging_handovers", "Control of the conversation was passed, taken or changed between apps"],
              ["standby", "A message arrived while another app was in control of the conversation"],
            ],
          },
          {
            type: "p",
            text: "Meta also gives you fixed entry points. Tapping the Get Started button sends a postback, which is a good moment for a welcome message. A persistent menu, with up to 20 items, can include a \"Talk to a person\" option; it only appears once a Get Started button is set.",
          },
        ],
      },
      {
        heading: "The 24-hour window and message tags",
        blocks: [
          {
            type: "p",
            text: "Messenger's standard messaging window gives you 24 hours to respond after a person messages your Page, and messages inside it may include promotional content. If you send a regular message after the window closes, the Send API returns error 1545041.",
          },
          {
            type: "table",
            caption: "What Meta allows after a customer writes",
            head: ["Timing or use case", "What you can send", "Notes"],
            rows: [
              ["Within 24 hours of the customer's message", "Standard messages from the bot or an agent", "Promotional content is allowed in this window"],
              ["Up to 7 days after the customer's message", "A human reply using the HUMAN_AGENT tag", "Needs app approval; not for automated or promotional messages"],
              ["Event, purchase or account updates", "Not the old tags: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE and POST_PURCHASE_UPDATE return an error since April 27, 2026", "Meta points to utility templates or the Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta limits HUMAN_AGENT to issues that can't be resolved within the standard window, such as a request that arrives while your business is closed for the weekend or a case that takes more than a day. Automated messages are a disallowed use of the tag, so the bot can't use it to send late follow-ups on its own.",
          },
        ],
      },
      {
        heading: "Handing conversations from the bot to a person",
        blocks: [
          {
            type: "p",
            text: "Several apps can work on the same Page, for example your bot and a helpdesk. The handover protocol lets you pass a conversation from one app or inbox to another, and the messaging_handovers webhook reports when control is passed, taken or changed. Apps that don't control the thread receive standby events instead of regular message events.",
          },
          {
            type: "p",
            text: "Meta has been moving this toward Conversation Routing. A 2021 update removed the need to assign primary and secondary roles and added Exclusive and Idle modes. Routing rules can now be managed in your Page settings, and when Conversation Routing is enabled, the Conversations API returns an is_owner field so your app answers only threads it controls.",
          },
          {
            type: "ul",
            items: [
              "Offer a clear way out: Meta's docs mention escalating via a fallback intent, a keyword or quick replies.",
              "Before passing control, post a short summary (topic, order number, what the bot already tried) where the agent will see it.",
              "Tell the customer what happens next, including your hours if nobody is online.",
              "When the agent is done, return control to the bot so the next question is answered automatically.",
            ],
          },
        ],
      },
      {
        heading: "Policy rules that shape the bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Disclosure: when applicable law requires it, automated chat experiences must disclose that the person is talking to an automated service, for example at the start of a conversation or when a human hands back to automation. Meta suggests disclosing even where it isn't required and calls out California and Germany.",
              "Responsiveness: fully automated experiences must respond to all user input within 30 seconds. Hybrid setups that mix bots and people should update the response setting in Page Settings under Advanced Messaging.",
              "No promotion in tagged messages: message tags can't be used for advertising, marketing or solicitation.",
              "App approval: your app must be approved before it can use the HUMAN_AGENT tag.",
            ],
          },
        ],
      },
      {
        heading: "Connecting Messenger to your helpdesk",
        blocks: [
          {
            type: "p",
            text: "Most helpdesks can receive Messenger conversations as tickets. In Zendesk, Messenger is a messaging channel in the Agent Workspace, and Zendesk documents a few practical limits:",
          },
          {
            type: "ul",
            items: [
              "Agents have seven days to respond before the messaging window closes, after which the reply box is blocked.",
              "Replies an agent sends directly in Messenger don't sync back to Zendesk, so agents should answer from Zendesk.",
              "Messages longer than 2,000 characters are not delivered.",
            ],
          },
          {
            type: "p",
            text: "If your bot runs as a separate app, decide which app controls the thread by default and when control moves; otherwise the bot and the helpdesk may both answer the same customer.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds Messenger bots that work on top of Zendesk, Freshdesk, Jira, Slack or your internal tools, using APIs, webhooks, and Make or n8n. A Starter Chat Bot ($350–$450) covers one or two channels; a Standard Chat Bot ($500–$650) covers three to five channels, such as Messenger, Instagram and WhatsApp, with more complex conversations and smoother handoffs. Each project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. Book a free 30-minute audit call to map your current Messenger flow.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "How long do I have to reply on Messenger?",
        a: "You can send standard messages within 24 hours of a person's message. A human agent can reply up to 7 days later using the HUMAN_AGENT tag, once your app is approved for it.",
      },
      {
        q: "Can my bot use the HUMAN_AGENT tag?",
        a: "No. Meta lists automated messages as a disallowed use of the tag. It is meant for replies from people when an issue can't be resolved within 24 hours.",
      },
      {
        q: "What replaced the ACCOUNT_UPDATE and POST_PURCHASE_UPDATE tags?",
        a: "Those tags, along with CONFIRMED_EVENT_UPDATE, return an error since April 27, 2026. Meta recommends utility templates or the Marketing Messages API for those use cases.",
      },
      {
        q: "Do I have to tell users they're talking to a bot?",
        a: "Meta's policy requires disclosure where applicable law requires it and recommends it elsewhere. Saying so at the start of the conversation is the simplest approach.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Send a message (Messenger Platform)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Message tags (Send API)",
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/",
      },
      {
        label: "Meta for Developers — Messenger Platform and IG Messaging API policy",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy",
      },
      {
        label: "Meta for Developers — Webhooks for Messenger Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks",
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
        label: "Meta for Developers — Persistent menu",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu",
      },
      {
        label: "Zendesk Help Center — Adding Facebook Messenger channels",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835753370-Adding-Facebook-Messenger-channels",
      },
    ],
    related: [
      "instagram-dm-automation",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Instagram
  // ---------------------------------------------------------------------------
  {
    slug: "instagram-dm-automation",
    category: "channels",
    navLabel: "Instagram DM automation",
    primaryKeyword: "Instagram DM automation",
    title: "Instagram DM Automation for Customer Support: The Rules",
    description:
      "Instagram DM automation explained: professional account rules, the 24-hour window, the human agent tag, comment-to-DM private replies and ice breakers.",
    h1: "Instagram DM automation for customer support",
    intro:
      "Instagram DM automation means connecting a bot to the direct messages of an Instagram professional account through Meta's APIs, so routine questions get instant answers and the rest reach a person. The bot can only reply after someone messages you and has 24 hours to do so; human agents can reply for up to 7 days with the human agent tag.",
    keyFacts: [
      "Instagram's messaging APIs work with professional accounts (business or creator).",
      "Your app can message a user only after they message you, then has 24 hours to respond.",
      "The human agent tag allows replies within 7 days, after app review.",
      "Private replies to comments can be sent within 7 days of the comment.",
      "On Instagram, Meta has replaced the handover protocol with Conversation Routing.",
    ],
    sections: [
      {
        heading: "What you need before automating Instagram DMs",
        blocks: [
          {
            type: "p",
            text: "Instagram's messaging APIs work with professional accounts. There are two types: business accounts, for retailers, local businesses, brands, organizations and service providers, and creator accounts, for public figures, content producers, artists and influencers. Note that switching a private personal account to professional makes it public.",
          },
          {
            type: "table",
            caption: "Two ways to connect Instagram messaging",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Facebook Page", "Not required", "Instagram account must be linked to a Facebook Page"],
              ["Sending messages", "Instagram User access token with the instagram_business_manage_messages permission", "Same /PAGE_ID/messages endpoint as Messenger, using the customer's Instagram-scoped ID"],
              ["Incoming messages", "Messaging webhooks", "The messages webhook field, alongside Messenger messages"],
              ["Good fit", "Instagram-only businesses and creators", "Teams already running a Messenger bot or a Meta-connected helpdesk"],
            ],
          },
          {
            type: "p",
            text: "Either way, the account owner must allow access to messages under Connected tools in Instagram's message settings, or the API can't manage the conversations. Zendesk notes this toggle has to be switched on in the Instagram mobile app, not on the web. If your app serves professional accounts you don't own or manage, it also needs Advanced Access through Meta's app review.",
          },
        ],
      },
      {
        heading: "Messaging windows and the human agent tag",
        blocks: [
          {
            type: "p",
            text: "Your app can only message someone after they message your account, and it has 24 hours to respond to each message. For issues that take longer, such as a request that arrives while your business is closed for the weekend, the human agent tag lets a person reply within 7 days. The tag is only available to apps that have completed app review.",
          },
          {
            type: "table",
            caption: "Instagram DM limits worth knowing",
            head: ["Rule", "What it means for your bot"],
            rows: [
              ["24-hour response window", "Automated replies must go out within 24 hours of the customer's message"],
              ["Human agent tag (7 days)", "Late replies come from a person, after app review"],
              ["No group messaging", "Group conversations are not supported by the API"],
              ["Requests folder", "Conversations in Requests inactive for 30 days are not returned by the API"],
            ],
          },
        ],
      },
      {
        heading: "Comment-to-DM: private replies",
        blocks: [
          {
            type: "p",
            text: "Many support questions start in comments, such as \"Is this in stock?\" or \"How do I return it?\". Private replies let your account answer a comment with a direct message to the commenter. They work for comments on posts, reels and ads, and for Instagram Live comments. A private reply is a single message, sent within 7 days of the comment, and it automatically includes a link to the post or comment.",
          },
          {
            type: "p",
            text: "Private replies no longer need the human agent tag. If the person answers your private reply, that message starts a normal conversation and the usual 24-hour window applies. A practical setup: watch comments for support keywords, send a private reply with an answer or a question, and let the DM bot take it from there, keeping order numbers and personal details out of public comments.",
          },
        ],
      },
      {
        heading: "Ice breakers and entry points",
        blocks: [
          {
            type: "p",
            text: "Ice breakers are preset questions people can tap when they start a new conversation with your account, such as \"Where is my order?\" or \"Talk to support\". When someone taps one, your app receives a messaging_postback webhook event, so each ice breaker can start its own bot flow. Ice breakers can be set up in several languages, with the right version shown based on the user's locale. Use them for your most common support questions, route each one to a specific flow, and review which ones people actually tap so you can replace the ones nobody uses.",
          },
          {
            type: "p",
            text: "ig.me links can pass a referral parameter into a conversation, for example to tell the bot which product page the customer came from. For new conversations, Meta requires ice breakers to be set up for that referral parameter to arrive.",
          },
        ],
      },
      {
        heading: "Handing DMs to a human",
        blocks: [
          {
            type: "p",
            text: "On Instagram, Meta no longer supports the handover protocol and has moved all businesses to Conversation Routing. It lets you pass thread control to the Instagram inbox or to a third-party inbox such as a helpdesk. During app review, Meta expects you to show that when escalation happens, thread ownership moves to the inbox and the agent can reply from there.",
          },
          {
            type: "p",
            text: "Two quirks are worth knowing. Replies sent through a third-party app move the thread to the General folder, and messages delivered through the platform don't include the folder information shown in the Instagram app. In Zendesk's Instagram Direct channel, replies made directly in Instagram aren't added to the ticket, so agents should answer from Zendesk.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab sets up Instagram DM bots that answer common questions, collect details and hand conversations to your team in Zendesk, Freshdesk, Jira, Slack or an internal tool, built on APIs, webhooks, and Make or n8n. A Starter Chat Bot ($350–$450) covers one or two channels; a Standard Chat Bot ($500–$650) covers three to five, such as Instagram, Messenger and your website. Every project includes 30 days of post-launch support and basic documentation, and most setups take 1–3 weeks. The free 30-minute audit call is the place to start.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can I automate DMs on a personal Instagram account?",
        a: "No. Meta's messaging APIs work with professional accounts, which can be business or creator accounts.",
      },
      {
        q: "Do I need a Facebook Page to automate Instagram DMs?",
        a: "Not with the Instagram API with Instagram Login, which doesn't require a linked Page. The Instagram Messaging API through the Messenger Platform does require one.",
      },
      {
        q: "How long can I wait before replying to a DM?",
        a: "Automated replies must go out within 24 hours of the customer's message. A human agent can reply up to 7 days later with the human agent tag, after your app passes review.",
      },
      {
        q: "Can I send a DM to someone who commented on my post?",
        a: "Yes, with a private reply: a single message sent within 7 days of the comment, which automatically includes a link to the post or comment.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Instagram API with Instagram Login: Send Messages",
        url: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/",
      },
      {
        label: "Meta for Developers — Instagram Platform overview",
        url: "https://developers.facebook.com/docs/instagram-platform/overview/",
      },
      {
        label: "Meta for Developers — Instagram Messaging: Human Agent Escalation",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation",
      },
      {
        label: "Meta for Developers — Send a message (Messenger Platform, private replies)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Using ig.me Links",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Instagram Help Center — Set up a professional Instagram account",
        url: "https://help.instagram.com/502981923235522",
      },
      {
        label: "Zendesk Help Center — Adding and configuring the Instagram Direct channel",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835013018-Adding-and-configuring-Instagram-Direct",
      },
    ],
    related: [
      "facebook-messenger-bot-customer-service",
      "chatbot-to-human-handoff",
      "ai-chatbot-for-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Website chatbot
  // ---------------------------------------------------------------------------
  {
    slug: "website-chatbot-for-support",
    category: "channels",
    navLabel: "Website support chatbot",
    primaryKeyword: "website chatbot for customer support",
    title: "Website Chatbot for Customer Support: Setup and Handoff",
    description:
      "Plan a website chatbot for customer support: helpdesk widgets like Zendesk and Freshchat, bot-to-agent handoff, after-hours coverage and WCAG accessibility.",
    h1: "Website chatbot for customer support: widgets, handoff and accessibility",
    intro:
      "A website chatbot for customer support is a chat widget on your site or help center where a bot answers common questions, collects details and hands the conversation to a live agent when it can't help. Most helpdesks ship their own widget, so the real work is configuring the bot flows, the handoff, after-hours behavior and accessibility.",
    keyFacts: [
      "Zendesk's messaging Web Widget is installed by adding a code snippet to each page where it should appear.",
      "Zendesk messaging can show different responses during and outside business hours.",
      "Freshdesk AI agents can be set to collect customer details before transferring to a human.",
      "WCAG 2.2 requires all functionality to be operable through a keyboard (2.1.1, Level A).",
      "W3C's role=\"log\" technique lets screen readers announce new chat messages as they arrive.",
    ],
    sections: [
      {
        heading: "Native helpdesk widget or a custom one?",
        blocks: [
          {
            type: "p",
            text: "If you already use a helpdesk, start with its widget. Chats land in the same queue as email and social messages, agents reply from one workspace, and the vendor maintains the widget code.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (messaging): in Admin Center, go to Channels > Messaging and social > Messaging, open the widget and copy the code from the Installation section. Add it to the source of every page where the widget should appear, and make sure your firewall allows the widget.",
              "Freshchat web widget (Freshdesk): copy the embed code from the web chat channel settings and add it to every page where the widget should appear. Freshworks also documents installing it on WordPress, Shopify, Squarespace, and in iOS and Android apps.",
            ],
          },
          {
            type: "table",
            caption: "Choosing a widget",
            head: ["Option", "Good fit when", "Watch out for"],
            rows: [
              ["Helpdesk's native widget", "You want chats, tickets and reporting in one place", "Styling and bot logic are limited to what the vendor supports"],
              ["Native widget with a custom bot", "You need logic or integrations the built-in bot lacks", "Handoff and context passing must be wired up and tested"],
              ["Fully custom widget", "Chat is part of your product's interface", "You own accessibility, uptime and the agent-side integration"],
            ],
          },
        ],
      },
      {
        heading: "Designing the bot-to-human handoff",
        blocks: [
          {
            type: "p",
            text: "The handoff is where most website bots fail. A good one moves the customer to a person without making them repeat themselves. Both major helpdesks support this pattern:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: adding an AI agent to a messaging channel replaces the default messaging response with the AI agent's own responses. Zendesk's workflow recipe has the AI agent greet the customer, show a form to collect what agents need, tell the customer the request is going to the team, and then forward the conversation to an agent, who is notified and sees the details on accepting it. The recipe uses a shorter form for logged-in customers, without name and email.",
              "Freshchat and Freshdesk: bot flows hand over with actions such as Assign to group or Make available for assignment, and Freshdesk's AI agent handover settings include an option to collect customer details before transfer.",
            ],
          },
          {
            type: "p",
            text: "Decide what to collect from what your agents ask first. Typical fields are name and email for visitors who aren't logged in, an order or account number, the issue type chosen from buttons, a short description in the customer's own words, and the page they were on.",
          },
        ],
      },
      {
        heading: "After-hours coverage",
        blocks: [
          {
            type: "p",
            text: "A widget that promises \"an agent will be with you shortly\" at 2 a.m. does more harm than no chat at all. Plan what happens when nobody is online:",
          },
          {
            type: "ul",
            items: [
              "Set business hours: Zendesk messaging channels can use a business hours schedule and show different responses during and outside those hours.",
              "Turn chats into tickets: in Zendesk's recipe, the AI agent escalates to a live agent during business hours, and outside them it collects the customer's details and escalates the request as an email ticket for follow-up.",
              "Let the bot answer what it can: FAQ answers, order status lookups and help center links work at any hour.",
              "Say when you'll reply: tell the customer your hours and where the answer will arrive, such as by email.",
            ],
          },
        ],
      },
      {
        heading: "Accessibility basics for chat widgets",
        blocks: [
          {
            type: "p",
            text: "A chat widget is interactive content layered over your site, so it needs to meet the same accessibility bar as the rest of the page. WCAG 2.2 is the current W3C version, and these success criteria are especially relevant to chat:",
          },
          {
            type: "table",
            caption: "WCAG 2.2 criteria to check in a chat widget",
            head: ["Criterion", "Level", "What it means for a chat widget"],
            rows: [
              ["2.1.1 Keyboard", "A", "Opening the widget, typing, choosing buttons and closing it all work without a mouse"],
              ["2.4.7 Focus Visible", "AA", "Users can see which button or field has keyboard focus"],
              ["2.4.11 Focus Not Obscured (Minimum)", "AA", "The launcher or open chat panel doesn't completely hide the focused element on the page"],
              ["4.1.2 Name, Role, Value", "A", "Custom buttons, menus and the launcher expose their names and states to assistive technology"],
              ["4.1.3 Status Messages", "AA", "Updates such as \"Message sent\" are announced without moving focus"],
            ],
          },
          {
            type: "p",
            text: "For the conversation itself, W3C technique ARIA23 marks the chat history with role=\"log\": new messages are added to the end of the region and screen readers announce them as they appear. With a vendor widget, test your own configuration with a keyboard and a screen reader, since custom colors and bot content can still introduce problems.",
          },
        ],
      },
      {
        heading: "How TascaLab can help",
        blocks: [
          {
            type: "p",
            text: "TascaLab sets up website chatbots on top of the helpdesk you already use, such as Zendesk or Freshdesk, or connects a custom bot to Jira, Slack or internal tools through APIs, webhooks, and Make or n8n. A Starter Chat Bot ($350–$450) covers one or two channels with FAQs and basic info collection; a Standard Chat Bot ($500–$650) covers three to five channels with more complex conversations and smoother handoffs. Every project includes 30 days of post-launch support and basic documentation, with no hidden fees, and most setups take 1–3 weeks. Start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a separate chatbot tool if my helpdesk has a widget?",
        a: "Not necessarily. Zendesk and Freshdesk both let you attach a bot or AI agent to their web widget. A separate tool makes sense when you need logic or integrations the built-in bot doesn't offer.",
      },
      {
        q: "What should the bot collect before handing off to an agent?",
        a: "Whatever your agents ask first: usually contact details for anonymous visitors, an order or account number, the issue type and a short description. Zendesk and Freshdesk both support collecting details before transfer.",
      },
      {
        q: "What should a website chatbot do outside business hours?",
        a: "Answer what it can, explain your hours and turn the rest into a ticket. Zendesk's documented recipe collects the customer's details after hours and escalates the request as an email ticket.",
      },
      {
        q: "Which accessibility standard applies to a chat widget?",
        a: "WCAG 2.2 is the current W3C version. Keyboard operation (2.1.1), visible focus (2.4.7), names and roles for controls (4.1.2) and status messages (4.1.3) are especially relevant to chat.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Installing the Web Widget for messaging",
        url: "https://support.zendesk.com/hc/en-us/articles/4500748175258-Installing-the-Web-Widget-for-messaging",
      },
      {
        label: "Zendesk Help Center — Configuring messaging responses and business hours",
        url: "https://support.zendesk.com/hc/en-us/articles/4500737327258-Configuring-messaging-responses-and-business-hours",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Using an AI agent to collect customer info and immediately escalate to a human agent",
        url: "https://support.zendesk.com/hc/en-us/articles/10412442245914-Workflow-recipe-Using-an-AI-agent-to-collect-customer-info-and-immediately-escalate-to-a-human-agent",
      },
      {
        label: "Freshworks Support — Install Freshchat on your web/apps",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004353-embed-the-freshchat-widget-on-your-website",
      },
      {
        label: "Freshworks Support — Gracefully handover conversations from bots to your Freshchat agents",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004659-assigning-bot-conversations-to-your-agents",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
      },
      {
        label: "W3C — ARIA23: Using role=log to identify sequential information updates",
        url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "freshdesk-automation",
    ],
    updated: "2026-10-19",
  },
];
