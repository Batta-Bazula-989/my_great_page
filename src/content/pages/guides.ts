import type { SeoPageContent } from "../types";

export const guidePages: SeoPageContent[] = [
  {
    slug: "n8n-vs-make-vs-zapier",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier for support automation",
    title: "n8n vs Make vs Zapier for Support Automation (2026)",
    description:
      "n8n vs Make vs Zapier for support automation: licensing and hosting, how each counts usage, Zendesk, Freshdesk, Jira and Slack connectors, webhooks, code.",
    h1: "n8n vs Make vs Zapier for support automation",
    intro:
      "The biggest differences between n8n, Make and Zapier for support work are where they run and how they count usage. n8n can be self-hosted under its Sustainable Use License or used as n8n Cloud, while Make and Zapier run as hosted services. All three connect to Zendesk, Freshdesk, Jira and Slack, accept webhooks and have a code step, so the choice usually comes down to data location, volume and how much custom logic you need.",
    keyFacts: [
      "n8n's self-hosted software uses the Sustainable Use License, a fair-code license n8n created in 2022. n8n does not call itself open source.",
      "As of October 2026, n8n counts executions (one workflow run), Make counts credits (operations converted 1:1) and Zapier counts tasks (successful action steps).",
      "Zapier triggers, Filter steps and Paths steps don't use tasks. Make trigger modules use 1 credit per run even when they find no new data.",
      "Make lets you choose a US or EU data center when you create an organization. You can't change it later.",
      "All three have a webhook trigger and a code step that runs JavaScript or Python.",
    ],
    sections: [
      {
        heading: "Side-by-side comparison",
        blocks: [
          {
            type: "p",
            text: "The table summarises what each vendor's own documentation says, checked in October 2026. Prices are left out on purpose. Plans change often, so check the current pricing page before you decide.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier for support automation (as of October 2026)",
            head: ["Feature", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Where it runs",
                "n8n Cloud (managed by n8n) or self-hosted on your own machine or infrastructure",
                "Make's own data centers. You pick US or EU per organization",
                "Zapier's managed cloud. No self-hosted or on-premises version",
              ],
              [
                "License",
                "Sustainable Use License (fair-code) for the self-hosted software",
                "Hosted service under Make's terms",
                "Hosted service under Zapier's terms",
              ],
              [
                "Usage unit",
                "Executions: one execution is one run of a workflow",
                "Credits: most modules use 1 credit per operation",
                "Tasks: one task per successful action step",
              ],
              [
                "Helpdesk connectors",
                "Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software and Slack nodes",
                "Zendesk, Freshdesk, Jira Cloud Platform and Slack apps",
                "Zendesk, Freshdesk, Jira Service Management and Slack apps",
              ],
              [
                "Webhook trigger",
                "Webhook node with separate test and production URLs",
                "Custom webhook module in the Webhooks app",
                "Webhooks by Zapier: Catch Hook and Catch Raw Hook",
              ],
              [
                "Code step",
                "Code node: JavaScript or Python",
                "Make Code app: JavaScript or Python",
                "Code by Zapier: JavaScript (Node.js 22) or Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting and licensing",
        blocks: [
          {
            type: "p",
            text: "n8n gives you two options. n8n Cloud is a managed instance that n8n runs for you. Self-hosting means running n8n on your own machine or infrastructure. For most self-hosted setups the docs recommend Docker. If you aren't experienced at managing servers, they recommend n8n Cloud instead.",
          },
          {
            type: "p",
            text: "The self-hosted software is covered by the Sustainable Use License, a fair-code license n8n created in 2022. You can use, modify, make derivative works of and redistribute the software, but with limits. Use is limited to internal business purposes or non-commercial or personal use, and you can only distribute it free of charge for non-commercial purposes. The Open Source Initiative's definition doesn't allow limits on use, so n8n does not call itself open source. Files with \".ee.\" in their names are covered by a separate n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make runs your scenarios in its own data centers. When you create an organization, you choose the United States or the European Union. That setting decides where your data is stored and processed, and it can't be changed afterwards.",
          },
          {
            type: "p",
            text: "Zapier runs on its own managed cloud. Zapier's comparison with n8n says Zapier can't fully replace n8n for automations that must run inside a self-hosted, air-gapped or on-premises environment for compliance reasons.",
          },
          {
            type: "note",
            text: "This is a summary of the n8n license, not an interpretation. If you plan to build n8n into a product you sell, read the full license text and the restrictions on use first.",
          },
        ],
      },
      {
        heading: "How each tool counts usage (as of October 2026)",
        blocks: [
          {
            type: "p",
            text: "The three products use different billing units, so you can't compare their plan limits directly. Here is how each vendor defines its unit.",
          },
          {
            type: "ul",
            items: [
              "n8n executions: n8n defines an execution as one run of a workflow. Paid plans, cloud or self-hosted, have an execution quota, and only production executions count toward it. Manual runs from the editor don't count. A Schedule Trigger counts each time it fires. Each inbound webhook request that starts the workflow counts once.",
              "Make credits: since 27 August 2025, Make bills in credits, and existing operations were converted 1:1. An operation is one module run that processes or checks data. Most apps use 1 credit per operation. Trigger modules use 1 credit per run, even when they find no new data. With Make's own AI provider, AI features use credits based on operations and tokens. If you connect your own AI provider, credits cover the operations and you pay that provider for tokens.",
              "Zapier tasks: Zapier counts a task each time an action step runs successfully. Triggers never use tasks, and neither do Filter or Paths steps. Steps that error or halt don't count. Some products, such as AI by Zapier steps, count at a higher rate.",
            ],
          },
          {
            type: "p",
            text: "These units matter for a support bot that runs on every new ticket or chat message. In n8n, a long workflow still counts as one execution per run. In Make, every module that runs uses credits. In Zapier, every successful action step is a task. On Make, a scenario that polls your helpdesk on a schedule uses credits even when nothing has changed. Webhook-based instant triggers avoid paying for those empty checks.",
          },
        ],
      },
      {
        heading: "Zendesk, Freshdesk, Jira and Slack connectors",
        blocks: [
          {
            type: "p",
            text: "All three tools have ready-made connectors for these four, but the names and the depth differ. Before you commit, check that the exact trigger and action you need exists.",
          },
          {
            type: "ul",
            items: [
              "n8n: there's a Zendesk node with a separate Zendesk Trigger node. The Freshdesk node covers tickets and contacts. The Jira Software node covers issues, comments and attachments. The Slack node covers messages, channels, files and reactions, and its \"Send and Wait for Response\" operation supports approval flows. If a node doesn't support an operation, the docs suggest calling the API with the HTTP Request node, reusing the same credential.",
              "Make: the Zendesk app includes modules that watch tickets and ticket activity. They work as instant triggers through a webhook that you create in Zendesk. The Freshdesk app covers tickets, conversations, contacts and companies, and also offers webhook-based instant triggers. Make also lists a Jira Cloud Platform app and a Slack app.",
              "Zapier: the Jira Service Management app has triggers for new and updated requests and an action that creates requests. Zapier lists ready-made Zaps that link it to Zendesk and Slack. The Freshdesk app links to Slack and Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks and code steps",
        blocks: [
          {
            type: "p",
            text: "Webhooks let a helpdesk or chat channel start an automation the moment something happens. Code steps cover the logic that built-in steps can't, such as reshaping a payload or calling an API without a connector.",
          },
          {
            type: "ul",
            items: [
              "n8n Webhook node: each Webhook node gets two URLs, a Test URL and a Production URL. It can reply immediately, when the last node finishes, or through a separate Respond to Webhook node.",
              "Make Webhooks app: the Custom webhook module creates a unique URL for one scenario, and you can't share the same webhook between scenarios. A Webhook response module controls what the caller gets back. Without one, the default reply is the text \"Accepted\".",
              "Webhooks by Zapier: Catch Hook gives you a unique URL that the other app sends requests to, and it parses the request body. Catch Raw Hook returns the body unparsed, along with the headers. Retrieve Poll works the other way and fetches data with a GET request.",
              "n8n Code node: runs JavaScript or Python, either once for all incoming items (the default) or once for each item. On n8n Cloud, the Python option can't import libraries.",
              "Make Code app: the Run code module runs JavaScript or Python and comes with some built-in libraries. Make's docs say importing your own libraries needs an Enterprise plan.",
              "Code by Zapier: code steps can be triggers or actions and support JavaScript (Node.js 22) and Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Which one fits your support team",
        blocks: [
          {
            type: "ul",
            items: [
              "Ticket data has to stay on infrastructure you control: n8n is the only one of the three that documents a self-hosted option.",
              "You want a hosted tool with EU data storage set per organization: Make's EU data center option covers this.",
              "Your team already uses Zapier and your flows are short: triggers and filters don't use tasks, so simple notifications stay cheap.",
              "Your workflows have many steps and run on every ticket: compare n8n's per-run executions with per-step credits or tasks at your real volume.",
            ],
          },
          {
            type: "p",
            text: "TascaLab builds support automations on top of the tools you already use (Zendesk, Freshdesk, Jira, Slack and internal tools) with APIs, webhooks, Make and n8n. Most setups take 1 to 3 weeks. Every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is n8n open source?",
        a: "n8n distributes its software under the Sustainable Use License, which it calls fair-code. Because the license limits how the software can be used, n8n says it does not call itself open source.",
      },
      {
        q: "Can I self-host Make or Zapier?",
        a: "Make runs scenarios in its own US or EU data center, which you choose when you create an organization. Zapier runs on its managed cloud and says it can't fully replace n8n where automations must run in a self-hosted or on-premises environment.",
      },
      {
        q: "Do Zapier triggers use tasks?",
        a: "No. Zapier counts a task each time an action step runs successfully. Triggers, Filter steps and Paths steps don't use tasks.",
      },
      {
        q: "Does a Make trigger use credits when nothing is new?",
        a: "Yes. Make's help center says trigger modules use 1 credit per run, even when they find no new data. Webhook-based instant triggers avoid these empty runs.",
      },
      {
        q: "What counts as an n8n execution?",
        a: "One run of a workflow. On paid plans, only production executions count toward the quota. Manual runs from the editor don't.",
      },
    ],
    sources: [
      { label: "n8n Docs — Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Executions", url: "https://docs.n8n.io/workflows/executions/" },
      { label: "n8n Docs — Integrations (Zendesk, Freshdesk, Jira Software, Slack and Webhook nodes)", url: "https://docs.n8n.io/integrations" },
      { label: "n8n Docs — Code node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code" },
      { label: "Make Help Center — Credits & operations", url: "https://help.make.com/credits-and-operations" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "Make Apps Documentation — Webhooks", url: "https://apps.make.com/gateway" },
      { label: "Make Apps Documentation — Make Code", url: "https://apps.make.com/code" },
      { label: "Make Apps Documentation — Zendesk", url: "https://apps.make.com/zendesk" },
      { label: "Make Apps Documentation — Freshdesk", url: "https://apps.make.com/freshdesk" },
      { label: "Make — Jira Cloud Platform and Slack integration", url: "https://www.make.com/en/integrations/jira/slack" },
      { label: "Zapier Help Center — How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "Zapier Help Center — Trigger Zap workflows from webhooks", url: "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks" },
      { label: "Zapier Help Center — Using Code by Zapier", url: "https://help.zapier.com/hc/en-us/articles/45405528551181-Using-Code-by-Zapier" },
      { label: "Zapier — Jira Service Management integrations", url: "https://zapier.com/apps/jira-service-management/integrations" },
      { label: "Zapier — Freshdesk integrations", url: "https://zapier.com/apps/freshdesk/integrations" },
      { label: "Zapier — Zapier vs. n8n comparison", url: "https://zapier.com/blog/n8n-vs-zapier/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "what-is-customer-support-automation"],
    updated: "2026-10-19",
  },
  {
    slug: "eu-ai-act-chatbot-rules",
    category: "guides",
    navLabel: "EU AI Act chatbot rules",
    primaryKeyword: "EU AI Act chatbot rules",
    title: "EU AI Act Chatbot Rules: Article 50 and Key Dates",
    description:
      "EU AI Act chatbot rules explained: what Article 50 requires, who counts as provider or deployer, key dates, and what the 2026 Digital Omnibus on AI changed.",
    h1: "EU AI Act chatbot rules: what Article 50 requires and when",
    intro:
      "Under the EU AI Act (Regulation (EU) 2024/1689), providers must design AI systems that interact directly with people, such as chatbots, so those people are told they're interacting with an AI system, unless that is obvious from the context. This duty is in Article 50 and applies from 2 August 2026. The 2026 Digital Omnibus on AI moved the high-risk deadlines, but the Commission still gives 2 August 2026 as the date Article 50 applies.",
    keyFacts: [
      "Article 50(1): providers must make sure people are informed that they're interacting with an AI system, unless this is obvious from the context.",
      "Article 50(5): the information must be given in a clear and distinguishable way, at the latest at the first interaction.",
      "The AI Act entered into force on 1 August 2024. Article 50 applies from 2 August 2026.",
      "The Digital Omnibus on AI (Regulation (EU) 2026/1744) entered into force on 27 July 2026. It moved the high-risk deadlines to 2 December 2027 and 2 August 2028.",
      "Breaching Article 50 can lead to fines of up to EUR 15 million or 3% of worldwide annual turnover, whichever is higher.",
    ],
    sections: [
      {
        heading: "What Article 50 requires for chatbots",
        blocks: [
          {
            type: "p",
            text: "Article 50(1) says providers must make sure that AI systems intended to interact directly with natural persons are designed and developed so that the people concerned are informed that they are interacting with an AI system. The exception is when this is obvious to a reasonably well-informed, observant and circumspect person, given the circumstances and the context of use. The duty doesn't apply to AI systems authorised by law to detect, prevent, investigate or prosecute criminal offences, subject to appropriate safeguards.",
          },
          {
            type: "p",
            text: "Article 50(5) covers how and when people must be told. The information must be given in a clear and distinguishable manner at the latest at the time of the first interaction or exposure, and it must meet the applicable accessibility requirements.",
          },
          {
            type: "p",
            text: "Article 50 has other transparency duties too. Only the first one in this list is specific to chatbots:",
          },
          {
            type: "ul",
            items: [
              "Article 50(1): providers of systems that interact directly with people must design them so people know they're dealing with AI.",
              "Article 50(2): providers of systems that generate synthetic audio, image, video or text must mark the outputs in a machine-readable format so they can be detected as AI-generated.",
              "Article 50(3): deployers of emotion recognition or biometric categorisation systems must inform the people exposed to them.",
              "Article 50(4): deployers must disclose deepfakes and AI-generated text published to inform the public on matters of public interest. For that text, the duty doesn't apply when it has gone through human review and someone holds editorial responsibility.",
            ],
          },
        ],
      },
      {
        heading: "Provider or deployer: who the duty falls on",
        blocks: [
          {
            type: "p",
            text: "Article 3(3) defines a provider as a person or body that develops an AI system, or has one developed, and places it on the market or puts it into service under its own name or trademark, whether for payment or free of charge. Article 3(4) defines a deployer as anyone using an AI system under its authority, except for personal, non-professional use.",
          },
          {
            type: "p",
            text: "The chatbot disclosure in Article 50(1) is a provider duty. The labelling duties in Article 50(3) and 50(4) are deployer duties. If your company builds a support assistant and runs it under its own brand, read both definitions carefully against how the system was built and who puts it in front of customers.",
          },
        ],
      },
      {
        heading: "How the disclosure duty maps to support automation",
        blocks: [
          {
            type: "p",
            text: "The Commission's FAQ on Article 50 says its guidelines set four cumulative criteria for the interaction duty: the system is an AI system, it is built for a genuine two-way exchange, it communicates directly rather than through a human intermediary, and it interacts with natural persons. The FAQ says systems that work only in the background, through machine-to-machine communication or without direct contact with people, fall outside this duty. It also says the \"obvious\" exception should be read restrictively.",
          },
          {
            type: "table",
            caption: "Questions to ask about common support setups, based on the Commission's criteria",
            head: ["Setup", "What to check against the criteria"],
            rows: [
              [
                "AI chatbot on your website, WhatsApp or Messenger",
                "Does it exchange messages directly with customers? If so, plan a disclosure at or before the first message.",
              ],
              [
                "AI voice bot answering calls",
                "Same question for spoken conversations. Article 50(5) also refers to accessibility requirements.",
              ],
              [
                "AI that classifies and routes tickets",
                "Does it only work in the background without direct contact with customers? The FAQ places such systems outside the interaction duty.",
              ],
              [
                "AI that drafts replies an agent reviews and sends",
                "Does it communicate with the customer directly, or through a human intermediary? Check this against the guidelines.",
              ],
            ],
          },
          {
            type: "p",
            text: "In practice, many teams start each AI conversation with a short line such as \"You're chatting with an AI assistant. Type 'agent' to reach a person.\" Doing this is a design choice. Whether it's enough for your system is a question for the guidelines and your adviser.",
          },
        ],
      },
      {
        heading: "Key dates, including the 2026 Digital Omnibus",
        blocks: [
          {
            type: "p",
            text: "Article 113 sets the AI Act's timeline. In November 2025, the Commission proposed changing parts of it in a Digital Omnibus on AI (COM(2025) 836, dated 19 November 2025). That proposal has since been adopted: after a political agreement on 7 May 2026 and formal adoption, it was published as Regulation (EU) 2026/1744. The Commission says it entered into force on 27 July 2026. The table shows the adopted dates.",
          },
          {
            type: "table",
            caption: "EU AI Act application dates (official texts as checked on 19 October 2026)",
            head: ["Date", "What applies", "Legal basis"],
            rows: [
              ["1 August 2024", "The AI Act enters into force", "Article 113, Regulation (EU) 2024/1689"],
              ["2 February 2025", "Chapters I and II apply, including AI literacy and the prohibited practices", "Article 113(a)"],
              ["2 August 2025", "Rules on notified bodies, general-purpose AI models, governance and penalties apply (except Article 101)", "Article 113(b)"],
              ["2 August 2026", "General application, including the Article 50 transparency duties", "Article 113; Commission Article 50 FAQ"],
              ["2 December 2026", "Deadline for Article 50(2) marking by generative AI systems placed on the market before 2 August 2026; new prohibition on AI generating non-consensual intimate content or child sexual abuse material", "Regulation (EU) 2026/1744 (adopted)"],
              ["2 December 2027", "High-risk rules for systems classified under Article 6(2) and Annex III", "Regulation (EU) 2026/1744 (adopted)"],
              ["2 August 2028", "High-risk rules for systems classified under Article 6(1) and Annex I (products)", "Regulation (EU) 2026/1744 (adopted); replaces the original 2 August 2027 date"],
            ],
          },
          {
            type: "p",
            text: "One difference between the proposal and the adopted text affects generative AI. The Commission's proposal would have given providers of generative systems already on the market a six-month grace period for Article 50(2) marking. The adopted regulation sets the deadline at 2 December 2026. According to the Commission's FAQ, the chatbot disclosure in Article 50(1) still applies from 2 August 2026.",
          },
        ],
      },
      {
        heading: "Penalties and official guidance",
        blocks: [
          {
            type: "p",
            text: "Under Article 99(4), breaching the Article 50 obligations can lead to administrative fines of up to EUR 15,000,000 or, for an undertaking, up to 3% of its total worldwide annual turnover for the preceding financial year, whichever is higher. For SMEs, including start-ups, Article 99 applies whichever of the two amounts is lower.",
          },
          {
            type: "p",
            text: "On 20 July 2026, the Commission published guidelines on the Article 50 transparency obligations. A separate, voluntary Code of Practice on Transparency of AI-generated Content covers Article 50(2), (4) and (5). The Commission says not signing it doesn't mean non-compliance. For the chatbot duty in Article 50(1), the FAQ says providers and deployers can decide on suitable measures themselves, taking the guidelines into account.",
          },
          {
            type: "note",
            text: "This is not legal advice. This page describes what the AI Act, the Digital Omnibus and the Commission's guidance say as of 19 October 2026. For decisions about your own systems, read the official texts on EUR-Lex and talk to a qualified lawyer.",
          },
        ],
      },
      {
        heading: "Building disclosure into a support bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Put the AI disclosure in the first message or the voice greeting, not only in your terms of service.",
              "Make the disclosure readable by screen readers and clear in voice, since Article 50(5) mentions accessibility.",
              "Give customers a visible way to reach a person, and pass the conversation history along so they don't have to repeat themselves.",
              "Keep a record of the disclosure text and when you changed it, so you can show what customers saw.",
            ],
          },
          {
            type: "p",
            text: "TascaLab builds chat and voice bots on top of the tools you already use (Zendesk, Freshdesk, Jira, Slack and internal tools). Standard Chat Bot projects cost $500 to $650 and Voice Bot projects $1,100 to $1,600. Both include basic documentation and 30 days of post-launch support.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to tell customers they're talking to a chatbot?",
        a: "Article 50(1) of the AI Act requires providers to design AI systems that interact directly with people so those people are informed they're interacting with an AI system, unless that is obvious from the context. The Commission says the \"obvious\" exception should be read restrictively.",
      },
      {
        q: "When do the EU AI Act chatbot rules apply?",
        a: "Article 50 applies from 2 August 2026. The Commission's FAQ gives a grace period to 2 December 2026 only for Article 50(2) marking by generative systems already on the market.",
      },
      {
        q: "Did the Digital Omnibus delay the AI Act?",
        a: "Partly. Regulation (EU) 2026/1744, in force since 27 July 2026 according to the Commission, moved the high-risk obligations to 2 December 2027 (Annex III) and 2 August 2028 (Annex I products). It did not move the 2 August 2026 date for Article 50.",
      },
      {
        q: "Does an AI ticket router need an AI disclosure?",
        a: "The Commission's FAQ says systems that work only in the background, through machine-to-machine communication or without direct contact with people, fall outside the Article 50(1) interaction duty. Check your own setup against the Commission's guidelines.",
      },
      {
        q: "What are the fines for breaching Article 50?",
        a: "Under Article 99(4), up to EUR 15 million or 3% of total worldwide annual turnover, whichever is higher. For SMEs, including start-ups, the lower of the two amounts applies.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2024/1689 (Artificial Intelligence Act)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      { label: "AI Act Service Desk — Article 50: Transparency obligations", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
      { label: "AI Act Service Desk — Article 99: Penalties", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99" },
      { label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "European Commission — Guidelines on transparency obligations published (20 July 2026)", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems" },
      { label: "EUR-Lex — Proposal COM(2025) 836, Digital Omnibus on AI", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0836" },
      { label: "EUR-Lex — Regulation (EU) 2026/1744 (Digital Omnibus on AI)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
      { label: "European Commission — AI Omnibus enters into force", url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force" },
    ],
    related: ["ai-chatbot-for-customer-support", "gdpr-customer-support-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    slug: "gdpr-customer-support-automation",
    category: "guides",
    navLabel: "GDPR and support automation",
    primaryKeyword: "GDPR and customer support automation",
    title: "GDPR and Customer Support Automation: A Practical Guide",
    description:
      "GDPR and customer support automation: lawful bases, data minimisation, retention and processor agreements, applied to chatbots and helpdesk workflows.",
    h1: "GDPR and customer support automation: a practical guide",
    intro:
      "GDPR applies to support automation like any other processing of personal data. You need a lawful basis under Article 6, you process only what you need (Article 5(1)(c)) and keep it only as long as you need it (Article 5(1)(e)), and vendors that process data for you need an Article 28 contract. For chatbots and helpdesk workflows, most of this comes down to design choices: which fields you send, where they go and how long the logs are kept.",
    keyFacts: [
      "Article 5(1)(c): personal data must be adequate, relevant and limited to what is necessary for the purposes.",
      "Article 6(1) lists six lawful bases. The EU Court of Justice treats the list as exhaustive.",
      "Article 28(3) requires a binding contract with each processor, including that it acts only on your documented instructions.",
      "The EDPB says checking that a processor offers sufficient guarantees is an ongoing obligation, not a one-off.",
      "Make lets you choose a US or EU data center when you create an organization. You can't change it later.",
    ],
    sections: [
      {
        heading: "Where personal data shows up in support automation",
        blocks: [
          {
            type: "p",
            text: "A support automation touches personal data at several points, often more than the team realises. Mapping them is the first practical step, because each one is a place where data minimisation, retention and vendor contracts come into play.",
          },
          {
            type: "ul",
            items: [
              "Chat and email transcripts: names, emails, phone numbers, order numbers and anything else customers type.",
              "Helpdesk ticket fields and attachments that an automation reads or copies to another tool.",
              "Prompts and responses sent to an AI model, if your bot uses one.",
              "Execution logs in your automation platform, which can store the data each step received.",
              "Notifications posted to Slack or other internal tools.",
            ],
          },
        ],
      },
      {
        heading: "The GDPR articles that matter most for a support bot",
        blocks: [
          {
            type: "table",
            caption: "GDPR articles and their practical impact on support automation",
            head: ["Article", "What the text says", "What it means for a support bot"],
            rows: [
              [
                "Art. 5(1)(c): data minimisation",
                "Personal data shall be adequate, relevant and limited to what is necessary in relation to the purposes.",
                "Send each step only the fields it needs. Redacting identifiers before text goes to an AI model is one way to do this.",
              ],
              [
                "Art. 5(1)(e): storage limitation",
                "Data is kept in a form that identifies people for no longer than necessary for the purposes, with exceptions for archiving, research and statistics under Article 89(1) safeguards.",
                "Set retention periods for chat logs, ticket exports and automation execution logs.",
              ],
              [
                "Art. 6(1): lawfulness",
                "Processing is lawful only if at least one of six bases applies: consent, contract, legal obligation, vital interests, public task or legitimate interests.",
                "Record which basis covers each purpose, such as answering a request versus analysing transcripts.",
              ],
              [
                "Art. 28: processors",
                "Use only processors with sufficient guarantees, under a binding contract that sets out the processing and requires them to act on your documented instructions.",
                "Have a contract with each vendor in the chain: helpdesk, automation platform, AI provider and hosting.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Lawful basis: decide per purpose",
        blocks: [
          {
            type: "p",
            text: "Article 6(1) lists six lawful bases: consent, contract, legal obligation, vital interests, public task and legitimate interests. The EU Court of Justice has described this list as exhaustive and restrictive, so processing has to fit at least one of them.",
          },
          {
            type: "p",
            text: "Two bases come up most often in support work. The contract basis covers processing necessary to perform a contract with the person, or to take steps they asked for before entering into one. In Case C-621/22, the Court of Justice said legitimate interests needs three cumulative conditions: the controller or a third party pursues a legitimate interest, the processing is necessary for that interest, and the person's interests or fundamental rights don't override it. Public authorities can't rely on legitimate interests for processing in the performance of their tasks.",
          },
          {
            type: "p",
            text: "In practice, list each purpose separately. Answering the customer's question, training staff on past transcripts and building reports are different purposes, and each needs its own basis.",
          },
        ],
      },
      {
        heading: "Processors and Article 28 agreements",
        blocks: [
          {
            type: "p",
            text: "Under Article 28(1), you may only use processors that give sufficient guarantees to put appropriate technical and organisational measures in place. Article 28(3) requires a contract or other legal act that sets out the subject matter, duration, nature and purpose of the processing, the type of personal data and the categories of data subjects. It must also say that the processor acts only on your documented instructions, including on transfers of personal data to a third country. Under Article 28(4), a processor that brings in a sub-processor must pass the same data protection obligations on by contract, and the original processor stays fully liable to you.",
          },
          {
            type: "ul",
            items: [
              "EDPB Guidelines 07/2020: verifying a processor's guarantees is an ongoing obligation, with audits and inspections where appropriate. Instructions can be set out in an annex to the contract or in other written form, such as email, as long as you keep records. A general list of sub-processors that may be updated from time to time isn't enough. The processor should actively tell you about changes.",
              "EDPB Opinion 22/2024: the duty to check that processors and sub-processors give sufficient guarantees applies whatever the level of risk, although how deep the checks go can vary. The final decision on, and responsibility for, using a specific sub-processor stays with the controller.",
            ],
          },
          {
            type: "p",
            text: "A typical support chain can include a helpdesk, an automation platform, an AI model provider and a chat tool. Write down which vendors process personal data on your behalf, check each one's data processing terms and sub-processor list, and keep them on file.",
          },
        ],
      },
      {
        heading: "Hosting, data location and retention settings",
        blocks: [
          {
            type: "p",
            text: "Where your automation runs decides where its data is stored. Make offers two data center locations, the United States and the European Union. You choose one when you create an organization, it can't be changed later, and it decides where your data is stored and processed. If you self-host n8n, its execution settings control how much execution data is kept. The documented default is a maximum of 10,000 stored executions, and 0 means no limit.",
          },
          {
            type: "p",
            text: "Because Article 28(3) covers instructions on third-country transfers, check in each vendor's terms where data is processed. Set retention in every tool that keeps a copy of the data, not just your helpdesk.",
          },
        ],
      },
      {
        heading: "Practical design choices for GDPR-aware automation",
        blocks: [
          {
            type: "ul",
            items: [
              "Pass ticket IDs and the fields a step needs instead of whole customer records.",
              "Mask emails, phone numbers and payment details before text goes to an AI model. Redacted text can still contain personal data, so treat it with the same care.",
              "Prune automation execution logs and turn off full payload logging where you don't need it.",
              "Design a way to find, export or delete one customer's data across the bot, the helpdesk and the logs, so individual requests don't need a manual search.",
              "Send sensitive or high-impact cases to a human agent instead of letting the bot decide.",
              "Remember that chatbots also fall under the EU AI Act's separate transparency rules.",
            ],
          },
          {
            type: "note",
            text: "This is not legal advice. This page describes what the GDPR text and EDPB guidance say, plus common engineering practice. For decisions about your own processing, talk to your data protection officer or a qualified lawyer.",
          },
          {
            type: "p",
            text: "TascaLab builds automations on top of Zendesk, Freshdesk, Jira, Slack and internal tools, using APIs, webhooks, Make and n8n. Every project includes basic documentation of what was built, which helps when you map data flows, plus 30 days of post-launch support. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Which GDPR lawful basis covers a support chatbot?",
        a: "GDPR doesn't assign one. Article 6(1) lists six bases, including contract and legitimate interests, and you choose and record the one that fits each purpose. The EU Court of Justice treats the list as exhaustive.",
      },
      {
        q: "Do I need a data processing agreement with my automation platform?",
        a: "Article 28(3) requires processing by a processor to be governed by a contract or other legal act that covers, among other things, the subject matter, duration, nature and purpose of the processing. If a vendor processes personal data on your behalf, check that such terms are in place.",
      },
      {
        q: "Can I send customer messages to an AI model?",
        a: "The same GDPR principles apply as for any other processing: a lawful basis, data minimisation and a processor contract where the provider processes data for you. Redacting identifiers before you send the text is one practical way to reduce what you share.",
      },
      {
        q: "How long can I keep chat transcripts?",
        a: "Article 5(1)(e) says personal data should be kept in a form that identifies people for no longer than necessary for the purposes. The text doesn't set a fixed number of days, so you set a retention period for each purpose.",
      },
      {
        q: "Where does Make store my data?",
        a: "Make has US and EU data centers. You choose one when you create an organization, and it can't be changed afterwards.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2016/679 (General Data Protection Regulation)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679" },
      { label: "GDPR-Info — Art. 6 GDPR: Lawfulness of processing", url: "https://gdpr-info.eu/art-6-gdpr/" },
      { label: "GDPR-Info — Art. 28 GDPR: Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { label: "EUR-Lex — Court of Justice judgment in Case C-621/22 (legitimate interests)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A62022CJ0621" },
      { label: "EDPB — Guidelines 07/2020 on the concepts of controller and processor", url: "https://edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf" },
      { label: "EDPB — Opinion 22/2024 on reliance on processors and sub-processors", url: "https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "n8n Docs — Executions environment variables", url: "https://docs.n8n.io/hosting/configuration/environment-variables/executions/" },
    ],
    related: ["eu-ai-act-chatbot-rules", "ai-chatbot-for-customer-support", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
