import type { SeoPageContent } from "../types";

export const servicesPages: SeoPageContent[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-chatbot-for-customer-support",
    category: "services",
    navLabel: "AI chatbot for support",
    primaryKeyword: "AI chatbot for customer support",
    title: "AI Chatbot for Customer Support: How It Works | TascaLab",
    description:
      "How an AI chatbot for customer support answers FAQs, collects details and hands off to agents — and how it connects to Zendesk or Freshdesk via API.",
    h1: "AI chatbot for customer support: what it does and how it connects to your helpdesk",
    intro:
      "An AI chatbot for customer support answers routine questions from your help content, collects the details an agent will need, and hands the conversation to a person when it can't help or the customer asks. It works best as a layer on top of your existing helpdesk: the bot handles the first exchange, and anything it can't resolve becomes a ticket with the full context attached.",
    keyFacts: [
      "Zendesk AI agents generate replies from connected knowledge sources and fall back to a default reply when nothing relevant is found.",
      "Freshdesk AI Agents can transfer a conversation to a human automatically when the customer uses phrases the admin has listed.",
      "A third-party bot in Zendesk messaging hands over by passing control to the Agent Workspace, which makes the conversation eligible for assignment.",
      "Under Article 50 of the EU AI Act, from 2 August 2026 chatbots must tell people they are interacting with AI, unless that is obvious.",
    ],
    sections: [
      {
        heading: "What a support chatbot actually does",
        blocks: [
          {
            type: "p",
            text: "Most support chatbots do three jobs, and a fourth is optional. It helps to scope them separately, because each one depends on different inputs to work well.",
          },
          {
            type: "table",
            caption: "The core jobs of a customer support chatbot",
            head: ["Job", "Example", "What it depends on"],
            rows: [
              [
                "Answer common questions",
                "Opening hours, return policy, delivery times, how-to steps",
                "Accurate, current help articles or an approved Q&A list",
              ],
              [
                "Collect information",
                "Order number, account email, device, a photo of the problem",
                "A defined list of fields that map to ticket fields in your helpdesk",
              ],
              [
                "Hand off to a person",
                "Live transfer to an agent, or a ticket created with the transcript",
                "A handoff path into your helpdesk and clear rules for when to use it",
              ],
              [
                "Run simple actions (optional)",
                "Look up an order status or a booking",
                "API access to the system that holds the data",
              ],
            ],
          },
          {
            type: "p",
            text: "LLM-based bots generate answers from your knowledge content instead of following hand-written scripts. Zendesk, for example, describes its AI agents' Knowledge reply as searching the connected knowledge sources to generate an answer, and falling back to a default reply when nothing relevant turns up. The practical consequence is simple: the bot is only as good as the content it answers from. Gaps and outdated articles show up as wrong or vague answers.",
          },
          {
            type: "p",
            text: "Information collection is often underrated. Even when the bot can't solve the problem, asking for the order number, account email and a short description up front removes the first round of back-and-forth an agent would otherwise have.",
          },
        ],
      },
      {
        heading: "Handoff: the part customers judge the bot on",
        blocks: [
          {
            type: "p",
            text: "A bot that won't let people reach a human damages trust quickly. Decide in advance which situations end the automated part of the conversation:",
          },
          {
            type: "ul",
            items: [
              "The customer asks for a person. Freshdesk's AI Agent handover settings, for instance, let admins list phrases that transfer the conversation automatically, show a message before the transfer, and optionally collect customer details first.",
              "The bot keeps failing. Zendesk lets you set up an AI agent to escalate to a human when it can't generate an answer from the connected knowledge sources after multiple tries.",
              "The topic is sensitive or out of scope. Freshdesk lists requests such as billing or refunds, and questions outside the agent's configured scope, among typical handover triggers.",
              "Nobody is online. Outside business hours, the bot should say so plainly and create a ticket rather than promise a live agent.",
            ],
          },
          {
            type: "p",
            text: "Whatever the trigger, the agent should receive the transcript and the collected fields so the customer doesn't have to repeat anything. When a third-party bot passes control to Zendesk's Agent Workspace through the Sunshine Conversations switchboard, the conversation becomes eligible for assignment to an agent, and the bot can include metadata that fills in fields on the resulting ticket.",
          },
        ],
      },
      {
        heading: "Native helpdesk bots vs. a custom bot",
        blocks: [
          {
            type: "p",
            text: "Zendesk and Freshdesk both offer their own AI agents. If your conversations already run through that helpdesk's messaging widget and your help center answers most questions, the native option is the quickest start. A custom bot connected through the API is the alternative when you need something the native bot doesn't cover.",
          },
          {
            type: "table",
            caption: "Native vs. custom support chatbot",
            head: ["", "Native helpdesk AI agent", "Custom bot connected via API"],
            rows: [
              [
                "Setup",
                "Configured in the helpdesk admin, using its help center as the knowledge source",
                "Built on a separate stack and connected to the helpdesk through its API and webhooks",
              ],
              [
                "Channels",
                "Whatever the helpdesk's messaging product supports on your plan",
                "Any channel with an API you can connect, such as WhatsApp, Telegram or Messenger",
              ],
              [
                "Logic",
                "Limited to the vendor's flow builder and AI settings",
                "Your own rules, lookups in internal systems, multi-step forms",
              ],
              [
                "Licensing",
                "Part of your helpdesk subscription or an add-on; check your plan",
                "Separate costs for the bot platform and any AI model usage",
              ],
              [
                "Maintenance",
                "The vendor maintains the platform",
                "Someone has to maintain the integration when APIs change",
              ],
            ],
          },
          {
            type: "p",
            text: "Neither is better by default. A sensible order is to check what the native agent covers first, and build custom only for the specific gap: a channel, a lookup, or a handoff rule the native tool can't express.",
          },
        ],
      },
      {
        heading: "How a custom bot plugs into your helpdesk",
        blocks: [
          {
            type: "p",
            text: "There are two common integration patterns, and many setups use both.",
          },
          {
            type: "ol",
            items: [
              "Create a ticket at handoff. The bot runs on its own channel connection and, when a person is needed, creates a ticket through the helpdesk's REST API with the transcript and collected details. In Zendesk's Tickets API, a comment is the only required field when creating a ticket, and you can send an idempotency key so a retried request doesn't create a duplicate. Freshdesk's POST /api/v2/tickets endpoint accepts custom fields as key–value pairs and creates a new contact when the requester's email isn't already known.",
              "Share the conversation inside the helpdesk's messaging. In Zendesk, a third-party bot can be installed as a messaging responder; only one bot can hold the default responder role at a time. The bot answers first and uses the switchboard's pass control action to hand the conversation to the Agent Workspace when a human is needed.",
            ],
          },
          {
            type: "p",
            text: "Webhooks handle the return trip. A Zendesk trigger can call an external endpoint through a Notify webhook action — for example, to tell the bot that an agent has solved the ticket so it can close the loop on the original channel.",
          },
          {
            type: "note",
            text: "Keep one source of truth for answers. If the bot answers from a separate document that drifts away from your help center, customers get contradictory answers depending on where they ask.",
          },
        ],
      },
      {
        heading: "Telling customers they're talking to a bot",
        blocks: [
          {
            type: "p",
            text: "If you serve customers in the EU, Article 50 of the AI Act applies from 2 August 2026. According to the European Commission's FAQ, providers must design systems such as chatbots so that people are informed they're interacting with AI from the start of the first interaction, in a clear and distinguishable way. The exception, where this is obvious to a reasonably well-informed person, should be interpreted restrictively, the Commission says.",
          },
          {
            type: "p",
            text: "The straightforward way to handle this is a plain sentence in the bot's greeting, plus a visible way to reach a person. Transcripts also tend to contain personal data, so decide how long the bot platform keeps them and who can access them.",
          },
        ],
      },
      {
        heading: "How TascaLab builds support chatbots",
        blocks: [
          {
            type: "p",
            text: "TascaLab builds chatbots on top of the tools you already use — Zendesk, Freshdesk, Jira, Slack or internal systems — through their APIs, webhooks and Make or n8n, so there's no platform switch. The bot is designed as a filter in front of your team, not a replacement for it: it answers what it can, collects the details, and hands the rest over with context.",
          },
          {
            type: "table",
            caption: "TascaLab chatbot packages (one-time price)",
            head: ["Package", "Scope", "Price (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 channels, FAQs, basic info collection", "$350–$450"],
              [
                "Standard Chat Bot",
                "3–5 channels, more complex conversations, smoother handoffs",
                "$500–$650",
              ],
            ],
          },
          {
            type: "p",
            text: "Available channels: website, WhatsApp, Telegram, Facebook Messenger and Instagram, plus phone through the voice bot. Most setups take 1–3 weeks, and every project includes 30 days of post-launch support and basic documentation, with no hidden fees. A free 30-minute audit call is the starting point.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Will an AI chatbot replace my support agents?",
        a: "It shouldn't be designed to. A support bot is most useful handling repetitive questions and collecting details, then handing everything else to people with the conversation attached.",
      },
      {
        q: "Does the chatbot need its own knowledge base?",
        a: "Usually not. AI support bots typically answer from your existing help center or an approved Q&A list — Zendesk's AI agents, for example, generate replies from connected knowledge sources. Keeping one source avoids contradictory answers.",
      },
      {
        q: "Can a custom chatbot create tickets in Zendesk or Freshdesk?",
        a: "Yes. Both helpdesks expose a REST endpoint for creating tickets (POST /api/v2/tickets), so a bot can open a ticket with the transcript and collected fields when it hands off.",
      },
      {
        q: "Do I have to tell customers they're talking to a bot?",
        a: "In the EU, Article 50 of the AI Act requires chatbots to inform people they're interacting with AI from 2 August 2026, unless that is obvious. Saying so in the bot's first message is the simplest approach.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Customizing the Knowledge reply in an AI agent with agentic AI",
        url: "https://support.zendesk.com/hc/en-us/articles/10448933203994-Customizing-the-Knowledge-reply-in-an-AI-agent-with-agentic-AI",
      },
      {
        label: "Zendesk Help Center — Managing third-party bots in Admin Center",
        url: "https://support.zendesk.com/hc/en-us/articles/5064149334426-Managing-third-party-bots-in-Admin-Center",
      },
      {
        label: "Zendesk Developer Docs — Switchboard",
        url: "https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/",
      },
      {
        label: "Zendesk Developer Docs — Tickets API",
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Developers — API reference (Create a ticket)",
        url: "https://developers.freshdesk.com/api/",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["chatbot-to-human-handoff", "website-chatbot-for-support", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. AI voice bot for customer service
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "ai-voice-bot-for-customer-service",
    category: "services",
    navLabel: "AI voice bot for phone support",
    primaryKeyword: "AI voice bot for customer service",
    title: "AI Voice Bot for Customer Service: How It Works | TascaLab",
    description:
      "How an AI voice bot for customer service works: telephony, speech-to-text, AI logic and text-to-speech, plus call transfer, IVR vs. bot and FCC rules.",
    h1: "AI voice bot for customer service: how inbound voice automation works",
    intro:
      "An AI voice bot for customer service answers inbound calls, works out what the caller needs, handles simple requests or collects details, and transfers the call to a person when it should. Technically it chains four parts — telephony, speech-to-text, a language model or dialog logic, and text-to-speech — and the handoff to your team matters as much as how natural the voice sounds.",
    keyFacts: [
      "A traditional IVR works with keypresses (DTMF); Twilio's Gather verb defaults to DTMF and must be set to accept speech to transcribe callers.",
      "Twilio's bidirectional Media Streams carry call audio as 8 kHz, single-channel mu-law, base64-encoded over a WebSocket.",
      "Zendesk lets an external voice AI agent answer calls first and escalate to a live agent over a SIP-IN line.",
      "The FCC's February 2024 ruling treats AI-generated voices as “artificial” under the TCPA, so calls made with them generally need prior express consent.",
    ],
    sections: [
      {
        heading: "How an inbound voice bot works",
        blocks: [
          {
            type: "p",
            text: "Every inbound voice bot runs the same loop, whichever vendors you use:",
          },
          {
            type: "ol",
            items: [
              "Telephony. The call reaches a phone number or SIP trunk, and the telephony provider hands it to your application — either by requesting call instructions from your server or by streaming the audio to it.",
              "Speech-to-text. The caller's words are transcribed. With Twilio's Gather verb set to accept speech, Twilio posts the transcription (SpeechResult) together with a Confidence score to your action URL.",
              "Understanding and logic. A language model or rule-based dialog decides what the caller wants and what to do next: answer, ask a follow-up question, look something up through an API, or transfer.",
              "Text-to-speech. The reply is synthesized into audio and played to the caller.",
              "Repeat or hand off. The loop continues until the request is handled or the call is transferred, and the outcome is logged to your helpdesk.",
            ],
          },
          {
            type: "p",
            text: "There are two main ways to wire this up. In a turn-based setup, the platform collects one utterance at a time and your server answers with new instructions; Twilio, for example, continues the call using the TwiML your action URL returns. In a streaming setup, audio flows continuously over a WebSocket: Twilio's bidirectional Media Streams, started with TwiML's Connect and Stream instructions, deliver base64-encoded mu-law audio at 8,000 Hz in a single channel, and your server sends audio back in the same format.",
          },
          {
            type: "p",
            text: "Managed layers sit in between. Twilio's ConversationRelay, for instance, handles speech-to-text and text-to-speech itself and exchanges text with your server over a secure WebSocket, so your code deals with words rather than raw audio. It also has settings for interruptions, because callers talk over bots; in a raw Media Streams setup, your server sends a clear message to drop buffered audio that hasn't played yet.",
          },
        ],
      },
      {
        heading: "IVR vs. conversational voice bot",
        blocks: [
          {
            type: "table",
            caption: "An IVR menu compared with a conversational voice bot",
            head: ["", "Traditional IVR", "Conversational voice bot"],
            rows: [
              ["Caller input", "Keypresses (DTMF) on a fixed menu", "Natural speech, transcribed and interpreted"],
              [
                "Structure",
                "Menu tree: “press 1 for billing, 2 for orders”",
                "Open prompt such as “How can I help?”, followed by intent detection",
              ],
              [
                "Works well for",
                "A small number of predictable routing options",
                "Many different requests, and collecting details in the caller's own words",
              ],
              [
                "Weak spots",
                "Long menus, and callers whose issue fits no option",
                "Mishearing on noisy lines; needs confirmation steps and fallbacks",
              ],
              [
                "What you learn",
                "Which menu path the caller chose",
                "A transcript, the detected intent and any collected fields",
              ],
            ],
          },
          {
            type: "p",
            text: "You don't have to choose one. One option is a short keypress menu for language selection, followed by a conversational step. With Twilio's Gather verb, the input can be set to accept both keypresses and speech in the same prompt.",
          },
        ],
      },
      {
        heading: "Handing the call to a person",
        blocks: [
          {
            type: "p",
            text: "Telephony platforms distinguish two kinds of transfer. In Twilio's terms, a cold transfer adds the new participant to the call, but the initiator drops off before the new participant answers; a warm transfer lets all three talk before the initiator leaves. Twilio recommends connecting calls between customers and agents through a conference, which is what makes both patterns possible.",
          },
          {
            type: "p",
            text: "For a bot, the useful version of a warm transfer is passing context rather than talking: create or update a ticket with the transcript, the detected intent and the collected details before the agent picks up, so they don't start from zero. Good moments to transfer:",
          },
          {
            type: "ul",
            items: [
              "The caller asks for a person — honor it immediately, not after two more questions.",
              "The bot has misunderstood the caller twice in a row.",
              "The request involves payments, complaints or anything the bot isn't allowed to decide.",
              "The caller is a known high-priority customer, if your routing distinguishes them.",
            ],
          },
          {
            type: "p",
            text: "In Zendesk, an external voice AI agent can answer a call first and escalate to a Zendesk agent over a SIP-IN line. The bot can create a ticket and link it to the call by passing the ticket number in the X-Zendesk-Ticket-Id SIP header; Zendesk authenticates SIP-IN calls with IP access control lists. Zendesk also offers its own voice AI agents, which add the transcript, an AI-generated summary and the detected intent to the ticket when they escalate.",
          },
        ],
      },
      {
        heading: "Regulation: what applies to voice bots",
        blocks: [
          {
            type: "p",
            text: "United States. In February 2024 the FCC issued a Declaratory Ruling (FCC 24-17) confirming that the TCPA's restrictions on calls using an “artificial or prerecorded voice” cover current AI technologies that generate human voices. Calls made with them therefore generally require the called party's prior express consent, unless an emergency purpose or an exemption applies. The ruling concerns calls placed to consumers, such as robocalls. A bot answering calls your customers place to you is a different situation, but any outbound calls the bot makes — callbacks, reminders, surveys — fall under these rules.",
          },
          {
            type: "p",
            text: "European Union. Article 50 of the AI Act applies from 2 August 2026 and requires AI systems that interact directly with people to be designed so that those people know they're dealing with AI, unless it's obvious. The Commission's FAQ says people must be informed from the start of the first interaction. For a voice bot, the practical answer is a short disclosure in the greeting.",
          },
          {
            type: "note",
            text: "This is general information, not legal advice. If your bot places outbound calls or you operate in a regulated sector, check the rules that apply to you.",
          },
        ],
      },
      {
        heading: "Design choices that make or break a voice bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Disclose and set expectations in one sentence: it's an automated assistant, and here is what it can help with.",
              "Keep prompts short and ask one thing at a time; callers can't scroll back.",
              "Read back numbers, email addresses and order IDs before acting on them.",
              "Tell callers how to reach a person, and make that path work at every step.",
              "Log every call to your helpdesk with the transcript and outcome, so you can see what people actually call about.",
              "Plan for after-hours: take the details and create a ticket, and only promise a callback someone will actually make.",
            ],
          },
        ],
      },
      {
        heading: "How TascaLab builds voice bots",
        blocks: [
          {
            type: "p",
            text: "TascaLab's Voice Bot package covers inbound calls, triage and handover to your team, for a one-time price of $1,100–$1,600. The bot connects to the tools you already use — Zendesk, Freshdesk, Jira, Slack or internal systems — through APIs and webhooks, so call outcomes arrive as tickets or messages your team already watches. It's built as a filter in front of your team, not a replacement for it.",
          },
          {
            type: "p",
            text: "Most setups take 1–3 weeks. Every project includes 30 days of post-launch support and basic documentation, with no hidden fees, and you can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between an IVR and an AI voice bot?",
        a: "An IVR routes callers through a fixed menu, usually with keypresses (DTMF). A conversational voice bot transcribes what the caller says, works out the intent, and can answer, collect details or transfer the call.",
      },
      {
        q: "Can a voice bot transfer calls to a live agent?",
        a: "Yes. Telephony platforms support cold transfers, where the bot drops off before the agent answers, and warm transfers, where the participants overlap. In Zendesk, an external voice AI agent can escalate to a live agent over a SIP-IN line.",
      },
      {
        q: "Does the FCC ban AI voice bots?",
        a: "No. Its February 2024 ruling says AI-generated voices count as “artificial” under the TCPA, so calls made with them generally need the called party's prior express consent. It concerns calls placed to consumers, so it matters most if your bot makes outbound calls.",
      },
      {
        q: "Do I need to tell callers they're speaking to a bot?",
        a: "In the EU, Article 50 of the AI Act requires people to be informed when they interact directly with an AI system, from 2 August 2026, unless it's obvious. A one-sentence disclosure in the greeting is the simple way to handle it.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — TwiML Voice: Gather",
        url: "https://www.twilio.com/docs/voice/twiml/gather",
      },
      {
        label: "Twilio Docs — Media Streams Overview",
        url: "https://www.twilio.com/docs/voice/media-streams",
      },
      {
        label: "Twilio Docs — TwiML Voice: ConversationRelay",
        url: "https://www.twilio.com/docs/voice/twiml/connect/conversationrelay",
      },
      {
        label: "Twilio Docs — Call Control Concepts (warm and cold transfer)",
        url: "https://www.twilio.com/docs/taskrouter/contact-center-blueprint/call-control-concepts",
      },
      {
        label: "Zendesk Help Center — Connecting an external AI agent using a SIP-IN line",
        url: "https://support.zendesk.com/hc/en-us/articles/8397061704474-Connecting-an-external-AI-agent-using-a-SIP-IN-line",
      },
      {
        label: "Zendesk Help Center — Announcing the general availability of voice AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11183058023450-Announcing-the-general-availability-of-voice-AI-agents",
      },
      {
        label: "FCC — Declaratory Ruling FCC 24-17 (AI-generated voices under the TCPA)",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Ticket routing automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "ticket-routing-automation",
    category: "services",
    navLabel: "Ticket routing automation",
    primaryKeyword: "ticket routing automation",
    title: "Ticket Routing Automation: Methods & Setup | TascaLab",
    description:
      "Ticket routing automation explained: rule-based, round-robin, load-based and skills-based routing, AI triage, and how Zendesk, Freshdesk and Jira do it.",
    h1: "Ticket routing automation: methods, tools and setup",
    intro:
      "Ticket routing automation assigns each incoming ticket to the right group or agent without someone triaging the queue by hand. It involves two decisions — what the ticket is about (topic, language, priority, customer) and who should handle it — made with methods such as rules, round-robin, load-based or skills-based routing. Zendesk, Freshdesk and Jira Service Management all support this natively.",
    keyFacts: [
      "Zendesk omnichannel routing assigns by default to the agent with the most spare capacity; round robin is the alternative method.",
      "Freshdesk's Omniroute engine powers its round-robin, load-based and skill-based ticket assignment.",
      "Jira automation's assign action can distribute work by balanced workload, round-robin or random selection.",
      "Zendesk intelligent triage classifies new tickets by intent, sentiment, language and entities, and triggers can route on the results.",
    ],
    sections: [
      {
        heading: "Two steps: categorize, then assign",
        blocks: [
          {
            type: "p",
            text: "Routing usually fails at the first step. If tickets arrive without a reliable category, even a good assignment method sends them to the wrong people. So treat routing as two separate decisions: what is this ticket, and who should handle it — the group first, then the agent. Signals you can use to categorize a ticket:",
          },
          {
            type: "ul",
            items: [
              "Entry point: which email address, web form, phone line or chat widget the ticket came through.",
              "Form fields: a request type or dropdown the customer selected.",
              "Requester data: the organization, plan or a VIP tag on the user.",
              "Content: keywords in the subject or description, or an AI classification of intent, language and sentiment.",
            ],
          },
          {
            type: "p",
            text: "AI classification is now built into the major helpdesks. Zendesk's intelligent triage classifies new tickets by intent, sentiment, language and entities based on the subject and first public comment, and adds the results as ticket fields that triggers, views and routing can use. Treat it like any other signal: check a sample of its classifications before you route on them.",
          },
        ],
      },
      {
        heading: "Routing methods compared",
        blocks: [
          {
            type: "table",
            caption: "Common ticket routing methods",
            head: ["Method", "How the assignee is chosen", "Good fit", "Watch out for"],
            rows: [
              [
                "Rule-based",
                "If/then conditions on channel, form, keywords or requester set the group, agent or priority",
                "Stable categories, VIP handling, language queues",
                "Overlapping rules and rule order; rules go stale as products change",
              ],
              [
                "Round-robin",
                "The next available agent in turn",
                "Similar tickets handled by similarly skilled agents",
                "Ignores ticket complexity unless combined with capacity limits",
              ],
              [
                "Load-based",
                "The agent with the most spare capacity or the fewest open tickets",
                "Uneven ticket lengths; avoiding overload",
                "Depends on accurate agent status and sensible limits",
              ],
              [
                "Skills-based",
                "An agent whose skills match the ticket's attributes, such as language or product",
                "Specialist and multilingual teams",
                "Tickets that match no skill can wait; you need a fallback",
              ],
              [
                "AI-assisted triage",
                "A model predicts category, priority or group, then one of the methods above assigns",
                "High volumes of free-text tickets",
                "Misclassifications; review samples regularly",
              ],
            ],
          },
          {
            type: "p",
            text: "In practice these methods are layered: rules or AI decide the group, and round-robin, load-based or skills-based assignment picks the agent inside it.",
          },
        ],
      },
      {
        heading: "How Zendesk, Freshdesk and Jira Service Management do it",
        blocks: [
          {
            type: "table",
            caption: "Native routing options by helpdesk",
            head: ["Helpdesk", "Rule-based layer", "Automatic agent assignment"],
            rows: [
              [
                "Zendesk",
                "Triggers match conditions such as channel, organization or tags and set the Group or Assignee",
                "Omnichannel routing uses agent status, capacity and skills; the default favors the most spare capacity, with round robin as the alternative",
              ],
              [
                "Freshdesk",
                "Ticket creation automation rules match requester, subject, description, tags, source or form and assign a group or agent",
                "Omniroute supports round-robin, load-based and skill-based assignment",
              ],
              [
                "Jira Service Management",
                "Automation rules built from triggers, conditions and actions",
                "The assign action distributes work by balanced workload, round-robin or random selection",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. Omnichannel routing only sends work to agents whose status makes them eligible for that channel, and capacity rules cap how many tickets per channel an agent holds at once. Skills can be marked required or optional: optional skills are dropped after a skills timeout so the ticket can reach a wider pool, while required skills never time out. Queue order depends on ticket age, priority or the nearest SLA breach, depending on your plan and configuration.",
          },
          {
            type: "p",
            text: "Freshdesk. By default, ticket creation rules stop at the first enabled rule whose conditions match, so put specific rules above generic ones; you can switch to running all matching rules. Freshdesk advises assigning a group before an agent, because assigning an agent without a group can leave the ticket unassigned. In skill-based assignment, a ticket that matches no skill stays unassigned until someone assigns it, so create a fallback skill with the group as its condition. In round-robin, Omniroute skips agents at their limit and gives the next ticket to the agent whose last assignment is oldest.",
          },
          {
            type: "p",
            text: "Jira Service Management. Routing is built with automation rules: a trigger such as a new work item, conditions on the request type or fields, and actions such as assign. With the balanced workload method, each person gets an equal share of work items within a scope you set with JQL; without a JQL restriction, the rule counts assigned items across the whole project. Round-robin cycles through the listed people in order.",
          },
        ],
      },
      {
        heading: "Setting up routing that holds up",
        blocks: [
          {
            type: "ol",
            items: [
              "Review a few weeks of recent tickets: list the main categories and note who actually resolved each one.",
              "Define groups before agents. Route to the right team first; picking the agent is a second step.",
              "Use your most dependable signals first — entry points and form fields — and add keyword or AI classification for the rest.",
              "Choose an assignment method per group: round-robin for uniform work, load-based where ticket effort varies, skills where expertise matters.",
              "Add a fallback so nothing sits unassigned: a catch-all rule, a fallback skill or a triage queue someone owns.",
              "Tag routing decisions so you can report on them, and review misrouted tickets every month.",
            ],
          },
          {
            type: "note",
            text: "Routing changes who sees a ticket first, so it affects your response times. Check your SLA reports for a couple of weeks after any routing change.",
          },
        ],
      },
      {
        heading: "How TascaLab sets up ticket routing",
        blocks: [
          {
            type: "p",
            text: "TascaLab's Ticket Routing & Categorization service ($600–$950 one-time) works on top of the helpdesk you already have — Zendesk, Freshdesk or Jira — using its native rules where they're enough, and APIs, webhooks or Make/n8n where they aren't, for example to categorize tickets before your native routing assigns them. There's no platform switch.",
          },
          {
            type: "p",
            text: "Most setups take 1–3 weeks. Every project includes 30 days of post-launch support and basic documentation, with no hidden fees, and a free 30-minute audit call is a good place to map your current queue.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What's the difference between round-robin and load-based routing?",
        a: "Round-robin gives the next ticket to the next agent in turn. Load-based routing gives it to the agent with the most spare capacity or the fewest open tickets, which suits teams where tickets vary a lot in effort.",
      },
      {
        q: "What happens to tickets that match no routing rule or skill?",
        a: "It depends on the tool. In Freshdesk skill-based assignment, an unmatched ticket stays unassigned until someone assigns it, so Freshdesk suggests a fallback skill. In Zendesk, optional skills are dropped after a timeout, while required skills never time out.",
      },
      {
        q: "Can AI categorize tickets before routing?",
        a: "Yes. Zendesk's intelligent triage, for example, classifies tickets by intent, sentiment and language, and triggers can route on those fields. You can also classify tickets with an external model and write the result to a ticket field through the API.",
      },
      {
        q: "Do I need to switch helpdesks to automate routing?",
        a: "No. Zendesk, Freshdesk and Jira Service Management all include native routing and assignment features, and custom logic can be added through their APIs and webhooks.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Zendesk Help Center — About using skills to route tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/5833468891674-About-using-skills-to-route-tickets",
      },
      {
        label: "Zendesk Help Center — Workflow: Auto-assigning tickets to a specific agent or group",
        url: "https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group",
      },
      {
        label: "Zendesk Help Center — About intelligent triage",
        url: "https://support.zendesk.com/hc/en-us/articles/4964463770650-About-intelligent-triage",
      },
      {
        label: "Freshdesk Support — Configure Freshdesk Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/238979-ticket-assignments-with-freshdesk-omniroute-",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Support — Automation rules that run on ticket creation",
        url: "https://support.freshdesk.com/support/solutions/articles/37614-setting-up-automation-rules-to-run-on-ticket-creation",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["zendesk-automation", "freshdesk-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Automated customer support reporting
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: "automated-support-reporting",
    category: "services",
    navLabel: "Automated support reporting",
    primaryKeyword: "automated customer support reporting",
    title: "Automated Customer Support Reporting Guide | TascaLab",
    description:
      "Automated customer support reporting: which metrics to track and how to schedule reports from Zendesk, Freshdesk or Jira to email, Slack or Google Sheets.",
    h1: "Automated customer support reporting: metrics, schedules and delivery",
    intro:
      "Automated customer support reporting gets your key numbers — ticket volume, reply and resolution times, SLA performance, backlog — to the right people on a schedule, without anyone exporting data by hand. Start with your helpdesk's built-in scheduled reports; when they don't fit, pull data through the API into Google Sheets, Slack or email.",
    keyFacts: [
      "Zendesk Explore can email a shared dashboard on a recurring schedule set up to 12 months ahead.",
      "In Freshdesk Analytics, custom reports can be scheduled; curated reports must be cloned first.",
      "Jira filter subscriptions email saved search results on a schedule, including cron-based timing; only the first 200 results are sent.",
      "A Slack incoming webhook posts a message to a channel from a simple JSON payload.",
    ],
    sections: [
      {
        heading: "What support teams usually report",
        blocks: [
          {
            type: "p",
            text: "A useful support report answers three questions: are we keeping up, are we fast enough, and are customers satisfied? These metrics cover most of it:",
          },
          {
            type: "table",
            caption: "Common customer support reporting metrics",
            head: ["Metric", "What it measures", "Useful for"],
            rows: [
              [
                "Tickets created, solved and open",
                "Volume, and whether the backlog is growing",
                "Daily check-ins, staffing decisions",
              ],
              [
                "First reply time",
                "Time from ticket creation to the first public agent response (Zendesk's definition)",
                "Responsiveness, SLA tracking",
              ],
              [
                "First and full resolution time",
                "Time to the first solve vs. the latest solve, which differ when tickets are reopened",
                "Process quality, spotting reopen problems",
              ],
              [
                "SLA achievement",
                "Share of tickets that met first-response or resolution targets",
                "Alerts and weekly summaries",
              ],
              [
                "One-touch resolution",
                "Tickets solved with a single agent reply",
                "Finding what could be automated or documented",
              ],
              [
                "Customer satisfaction (CSAT)",
                "Survey responses after a ticket is solved",
                "Weekly or monthly trends",
              ],
              [
                "Bot handoff rate",
                "Share of bot conversations passed to a person, if you run a bot",
                "Tuning the bot and its knowledge",
              ],
            ],
          },
          {
            type: "p",
            text: "Definitions matter more than the dashboard. Decide whether you report medians or averages, business hours or calendar hours, and which tickets count (merged, spam, bot-only). Write the definitions down and keep them stable, or week-over-week comparisons stop meaning anything.",
          },
        ],
      },
      {
        heading: "Scheduled reports your helpdesk already offers",
        blocks: [
          {
            type: "table",
            caption: "Native scheduled reporting options",
            head: ["Tool", "How scheduling works", "What recipients get", "Limits to know"],
            rows: [
              [
                "Zendesk Explore",
                "On a shared dashboard, Share > Schedule delivery; set the time, recurrence and an end date up to 12 months ahead",
                "An email with the dashboard export; formats include Excel (one file per tab) and PNG",
                "Exports over 25 MB arrive split across several emails; delivery can lag the scheduled time",
              ],
              [
                "Freshdesk Analytics",
                "Schedule a custom report; clone a curated report first if you want to schedule it",
                "The report as a PDF, or individual widgets as PDF or CSV",
                "Widgets from curated reports can't be scheduled",
              ],
              [
                "Jira filter subscriptions",
                "Subscribe a user or group to a saved filter, with a preset schedule or a cron expression",
                "An email listing the work items that match the filter",
                "Only the first 200 results are sent; results are evaluated per recipient",
              ],
              [
                "Jira automation",
                "A scheduled rule looks up work items with JQL and sends the list",
                "An email or a Slack message",
                "Slack delivery needs a Slack incoming webhook",
              ],
            ],
          },
          {
            type: "p",
            text: "Two Zendesk details trip people up: recipients are grouped by language and time zone, with one email sent to each group, and if a dashboard should cover the whole previous day, Zendesk advises scheduling it for 2 AM or later.",
          },
          {
            type: "p",
            text: "Native scheduling is the right first step. It runs out when you need data from several tools in one place, a short summary instead of a full dashboard, custom calculations, or Slack delivery from a tool that doesn't offer it.",
          },
        ],
      },
      {
        heading: "Pulling data through APIs into Sheets, Slack or email",
        blocks: [
          {
            type: "p",
            text: "When built-in reports don't fit, a small pipeline does the job. The steps are the same whether you use a script or an automation tool such as Make or n8n:",
          },
          {
            type: "ol",
            items: [
              "Schedule. A timed trigger runs the workflow daily, weekly or at whatever interval you need.",
              "Extract. The workflow calls the helpdesk API for tickets changed since the last run. Zendesk's Incremental Exports API is built for this: it returns tickets updated since a given start time, and Zendesk recommends its cursor-based version for more consistent performance.",
              "Calculate. Compute the metrics using your written definitions and compare them with the previous period or your targets.",
              "Store. Append a row per day or week to Google Sheets. The Sheets API's spreadsheets.values.append method finds the table in the range you pass and adds the new rows after its last row, which gives you a running history to chart.",
              "Deliver. Post a short summary to Slack through an incoming webhook — a unique URL that accepts a JSON payload with the message text and optional Block Kit blocks — or send it by email with a link to the full sheet or dashboard.",
            ],
          },
          {
            type: "note",
            text: "Treat API tokens and webhook URLs as secrets. Keep them in your automation tool's credential store, not in the sheet or the message template.",
          },
        ],
      },
      {
        heading: "Reports people actually read",
        blocks: [
          {
            type: "ul",
            items: [
              "Lead with a handful of numbers and the change from the last period; link to the detail instead of attaching it.",
              "Separate alerts from reports. A weekly summary is for trends; an SLA risk deserves its own message when it happens. Atlassian's documentation, for example, shows a scheduled Jira automation rule that posts work items about to breach their SLA to Slack.",
              "Send each audience what it acts on: agents need today's queue, managers need weekly trends.",
              "Give every metric an owner who can explain unusual movements.",
              "Review the report after a month and drop anything nobody used.",
            ],
          },
          {
            type: "p",
            text: "A weekly summary for a team channel can be as short as five lines, each comparing this week with last week:",
          },
          {
            type: "ol",
            items: [
              "Tickets created, solved and still open, with the change in backlog.",
              "Median first reply time against your target.",
              "Median full resolution time, plus the number of reopened tickets.",
              "SLA achievement, with links to the tickets that breached.",
              "CSAT for the week and one notable comment, if your surveys collect them.",
            ],
          },
        ],
      },
      {
        heading: "How TascaLab sets up automated reports",
        blocks: [
          {
            type: "p",
            text: "TascaLab's Automated Reports service ($500–$900 one-time) delivers your support metrics to email or Slack on a schedule. It works on top of Zendesk, Freshdesk, Jira and your internal tools through their APIs and Make or n8n, so nothing changes in how your team works day to day.",
          },
          {
            type: "p",
            text: "Most setups take 1–3 weeks. Every project includes 30 days of post-launch support and basic documentation, with no hidden fees, and you can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Can Zendesk send reports by email automatically?",
        a: "Yes. In Zendesk Explore you can schedule deliveries of a shared dashboard, choose the recurrence and recipients, and set the schedule to run for up to 12 months.",
      },
      {
        q: "Can I schedule reports in Freshdesk?",
        a: "Yes, for custom reports in Freshdesk Analytics; curated reports need to be cloned before you can schedule them. Reports are sent as PDF, and widgets can be sent as PDF or CSV.",
      },
      {
        q: "How do I send Jira Service Management data to Slack on a schedule?",
        a: "Use a Jira automation rule with a scheduled trigger, a lookup of work items by JQL, and a Send Slack message action that posts through a Slack incoming webhook.",
      },
      {
        q: "Which metrics belong in a weekly support report?",
        a: "Typically ticket volume and backlog, first reply time, resolution time, SLA achievement and customer satisfaction. Keep the definitions fixed so the week-over-week trend means something.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Scheduling dashboard deliveries",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843602714-Scheduling-dashboard-deliveries",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Developer Docs — Incremental Exports",
        url: "https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/",
      },
      {
        label: "Freshdesk Support — Scheduling reports in Analytics",
        url: "https://support.freshdesk.com/support/solutions/articles/240703-scheduling-reports-in-analytics",
      },
      {
        label: "Atlassian Support — Manage filters (filter subscriptions)",
        url: "https://support.atlassian.com/jira-software-cloud/docs/manage-filters/",
      },
      {
        label: "Atlassian Support — Automation rule that sends a list of issues about to breach via Slack",
        url: "https://support.atlassian.com/automation/kb/automation-rule-to-send-list-of-issues-that-are-about-to-breach-via-slack/",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Google for Developers — Sheets API: spreadsheets.values.append",
        url: "https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append",
      },
    ],
    related: ["customer-support-metrics", "slack-support-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
