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
  {
    slug: "european-accessibility-act-customer-service",
    category: "guides",
    navLabel: "European Accessibility Act",
    primaryKeyword: "European Accessibility Act customer service",
    title: "European Accessibility Act Customer Service Rules",
    description:
      "European Accessibility Act customer service guide: which services are in scope, key dates, the microenterprise exemption and what Annex I asks of support.",
    h1: "European Accessibility Act and customer service: what support teams need to know",
    intro:
      "The European Accessibility Act (Directive (EU) 2019/882) has applied since 28 June 2025 to a list of consumer services that includes e-commerce, consumer banking, e-books and electronic communications. For services in scope, Annex I asks that websites and mobile apps be accessible and that support services such as help desks and call centres, where you have them, give information on the service's accessibility in accessible modes of communication. Microenterprises that provide services are exempt.",
    keyFacts: [
      "Article 31: Member States had to adopt their national laws by 28 June 2022 and apply them from 28 June 2025.",
      "Article 2(2) covers services to consumers such as electronic communications, consumer banking, e-books and e-commerce.",
      "Article 4(5) exempts microenterprises providing services; Article 3(23) defines them as fewer than 10 persons with turnover or balance sheet total of EUR 2 million or less.",
      "Annex I, Section III: where available, support services must give information on the service's accessibility in accessible modes of communication.",
      "EN 301 549 V4.1.1 was adopted in August 2026, but AccessibleEU says it is not yet the legal reference for EAA compliance.",
    ],
    sections: [
      {
        heading: "Which services the European Accessibility Act covers",
        blocks: [
          {
            type: "p",
            text: "Directive (EU) 2019/882, known as the European Accessibility Act or EAA, sets accessibility requirements for a list of products in Article 2(1) and a list of services in Article 2(2). This page focuses on services, because that's where customer support sits. Article 2(2) applies to the following services provided to consumers after 28 June 2025.",
          },
          {
            type: "table",
            caption: "Services listed in Article 2(2) of Directive (EU) 2019/882",
            head: ["Article 2(2)", "Service", "Support touchpoints worth reviewing"],
            rows: [
              ["(a)", "Electronic communications services, except transmission services used for machine-to-machine services", "Help pages, live chat and contact options for subscribers"],
              ["(b)", "Services providing access to audiovisual media services", "In-app help and support chat"],
              ["(c)", "Certain elements of air, bus, rail and waterborne passenger transport services", "Booking help, travel information and chat on the website or app"],
              ["(d)", "Consumer banking services", "Chat and voice bots that answer account or card questions"],
              ["(e)", "E-books and dedicated software", "Help desk for reading apps and purchases"],
              ["(f)", "E-commerce services", "Chat widget on the shop, order-status bot, returns flow"],
            ],
          },
          {
            type: "p",
            text: "The directive defines e-commerce services as services provided at a distance, through websites and mobile device-based services, by electronic means and at the individual request of a consumer with a view to concluding a consumer contract. The directive's recitals add that the e-commerce obligations cover the online sale of any product or service. The third column in the table is a checklist suggestion, not a statement of what the law requires of your business.",
          },
        ],
      },
      {
        heading: "Key dates and transitional periods",
        blocks: [
          {
            type: "p",
            text: "The EAA is a directive, so it reaches businesses through national laws. Article 31 required Member States to adopt and publish those laws by 28 June 2022 and to apply them from 28 June 2025. Article 32 adds some transitional periods.",
          },
          {
            type: "table",
            caption: "EAA dates for services (Directive (EU) 2019/882)",
            head: ["Date", "What it means", "Article"],
            rows: [
              ["28 June 2022", "Deadline for Member States to adopt and publish the national laws that transpose the directive", "Article 31"],
              ["28 June 2025", "National measures apply. Article 2(2) covers services provided to consumers after this date", "Articles 2(2) and 31"],
              ["Up to 5 years from 28 June 2025", "Service contracts agreed before 28 June 2025 may continue without alteration until they expire", "Article 32"],
              ["28 June 2030", "End of the period in which service providers may keep providing services with products they were already lawfully using for similar services", "Article 32"],
              ["Up to 20 years in service", "Member States may let self-service terminals used before 28 June 2025 keep operating until the end of their useful life, but no longer than 20 years after they entered service", "Article 32"],
            ],
          },
          {
            type: "p",
            text: "Because each Member State writes its own law, the national texts and the authorities that enforce them differ between countries. The Commission says it monitors the complete and correct transposition of the Act. If you serve customers in several EU countries, check the national law in each one.",
          },
        ],
      },
      {
        heading: "The microenterprise exemption and other limits",
        blocks: [
          {
            type: "p",
            text: "Article 3(23) defines a microenterprise as an enterprise that employs fewer than 10 persons and has an annual turnover not exceeding EUR 2 million or an annual balance sheet total not exceeding EUR 2 million. Under Article 4(5), microenterprises providing services are exempt from the accessibility requirements in Article 4(3) and from the obligations relating to compliance with them. The recitals explain that asking these businesses to carry out an assessment would itself be a disproportionate burden. The directive still encourages microenterprises to provide services that meet the requirements.",
          },
          {
            type: "p",
            text: "The exemption covers services only. Microenterprises that deal in products are treated differently and are not fully exempt.",
          },
          {
            type: "p",
            text: "For everyone else, Article 14 says the accessibility requirements apply only to the extent that compliance doesn't require a significant change that fundamentally alters the basic nature of the service, and doesn't impose a disproportionate burden. A business that relies on this has to make an assessment using the criteria in Annex VI. Service providers must renew it when the service is altered, when an authority asks, and at least every five years. The recitals add that lack of priority, time or knowledge should not be considered legitimate reasons.",
          },
        ],
      },
      {
        heading: "What Annex I says about customer support",
        blocks: [
          {
            type: "p",
            text: "Article 4(3) says all services, except urban and suburban transport services and regional transport services, must comply with Section III of Annex I, which sets general accessibility requirements for services. Section IV adds requirements for specific services, such as consumer banking and e-commerce. Three points in Section III matter most for support teams:",
          },
          {
            type: "ul",
            items: [
              "Point (a): the products used to provide the service must be accessible.",
              "Point (c): websites, including related online applications, and mobile device-based services, including mobile apps, must be made accessible in a consistent and adequate way by making them perceivable, operable, understandable and robust.",
              "Point (d): where available, support services (help desks, call centres, technical support, relay services and training services) must provide information on the accessibility of the service and its compatibility with assistive technologies, in accessible modes of communication.",
            ],
          },
          {
            type: "p",
            text: "Article 13 adds a transparency duty. Service providers prepare information, following Annex V, that explains how the service meets the accessibility requirements, and make it available to the public in written and oral format, including in a way that is accessible to persons with disabilities. AccessibleEU's guidance adds that this information must be kept for as long as the service is in operation.",
          },
          {
            type: "p",
            text: "A chat widget or support bot that runs on your website or app is part of the interface customers use, so it makes sense to hold it to the same perceivable, operable, understandable and robust test. Your help desk, staffed by people or bots, should also be ready to answer questions about the accessibility of your service.",
          },
        ],
      },
      {
        heading: "Practical guidance for chat widgets and support bots",
        blocks: [
          {
            type: "p",
            text: "The directive doesn't list technical checks for a chat widget. The points below are common engineering practice that maps to the Annex I principles. Test them with real assistive technology, such as screen readers and keyboard-only use.",
          },
          {
            type: "ul",
            items: [
              "Make the chat launcher, message field, buttons and quick replies usable with a keyboard alone, with a visible focus indicator.",
              "Give every control a text label that screen readers announce, and announce new messages without moving the user's focus.",
              "Don't rely on colour, icons or images alone to carry meaning. Give images and cards text alternatives.",
              "Avoid short inactivity timeouts that close the chat, or warn before closing and let the customer continue.",
              "Keep bot replies short and plain, and give customers an easy way to reach a person, with the conversation history passed along.",
              "Teach the bot and your agents to answer questions about your service's accessibility and to point to your Article 13 information.",
              "Offer more than one contact channel, such as chat and email, and give voice bot callers a text-based alternative.",
            ],
          },
          {
            type: "p",
            text: "For technical detail, look at EN 301 549, the European standard on accessibility requirements for ICT products and services. Commission Implementing Decision (EU) 2021/1339 references EN 301 549 V3.2.1 as a harmonised standard under the Web Accessibility Directive, which covers public sector websites and apps. ETSI adopted EN 301 549 V4.1.1 on 24 August 2026. It moves to WCAG 2.2 and adds an annex that maps its requirements to the EAA. AccessibleEU says V4.1.1 is not yet the legal reference for showing compliance with the EAA or the Web Accessibility Directive, and that the reference remains V3.2.1, based on WCAG 2.1 level AA, until the Commission cites V4.1.1 in the Official Journal.",
          },
          {
            type: "note",
            text: "This is not legal advice. This page summarises Directive (EU) 2019/882 and official EU guidance as checked on 19 October 2026. Whether your service is in scope, and what you must do, depends on the national law that applies to you. For decisions about your own service, read the official texts and talk to a qualified lawyer.",
          },
          {
            type: "p",
            text: "TascaLab builds chat and voice bots on top of the tools you already use, such as Zendesk, Freshdesk, Jira and Slack. Standard Chat Bot projects cost $500 to $650 and Voice Bot projects $1,100 to $1,600. Both include basic documentation and 30 days of post-launch support. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "When did the European Accessibility Act start to apply?",
        a: "Article 31 required Member States to adopt their national laws by 28 June 2022 and to apply them from 28 June 2025. Article 2(2) covers services provided to consumers after 28 June 2025.",
      },
      {
        q: "Are small businesses exempt from the European Accessibility Act?",
        a: "Microenterprises that provide services are exempt under Article 4(5). Article 3(23) defines a microenterprise as having fewer than 10 persons and an annual turnover or balance sheet total of no more than EUR 2 million. The exemption doesn't fully cover microenterprises that deal in products.",
      },
      {
        q: "Does the European Accessibility Act cover customer support?",
        a: "Annex I, Section III, point (d) says that, where available, support services such as help desks, call centres, technical support, relay services and training services must provide information on the accessibility of the service and its compatibility with assistive technologies, in accessible modes of communication.",
      },
      {
        q: "Is EN 301 549 the harmonised standard for the EAA?",
        a: "EN 301 549 V4.1.1, adopted on 24 August 2026, adds an annex mapping its requirements to the EAA. AccessibleEU says it is not yet the legal reference for EAA compliance until the Commission cites it in the Official Journal, and that the reference remains V3.2.1 until then.",
      },
      {
        q: "Do service contracts signed before June 2025 have to change?",
        a: "Article 32 lets service contracts agreed before 28 June 2025 continue without alteration until they expire, but for no longer than five years from that date.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Directive (EU) 2019/882 (European Accessibility Act)", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" },
      { label: "EUR-Lex — Summary: Accessibility of products and services", url: "https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html" },
      { label: "European Commission — European Accessibility Act (EAA)", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" },
      { label: "AccessibleEU — Guidance on legislation", url: "https://accessible-eu-centre.ec.europa.eu/document/download/7bf9cb97-8ccf-421f-9d2d-6d1283e602ef_en?filename=AccEU_Guidance+on+legislation_English_acc.pdf" },
      { label: "AccessibleEU — The European accessibility standard EN 301 549 has been updated", url: "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en" },
      { label: "ETSI — EN 301 549 V4.1.1 (2026-09)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf" },
      { label: "EUR-Lex — Commission Implementing Decision (EU) 2021/1339", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1339" },
    ],
    related: ["website-chatbot-for-support", "eu-ai-act-chatbot-rules", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    slug: "n8n-zendesk-integration",
    category: "guides",
    navLabel: "n8n Zendesk integration",
    primaryKeyword: "n8n Zendesk integration",
    title: "n8n Zendesk Integration: Nodes, Triggers and Webhooks",
    description:
      "n8n Zendesk integration guide: Zendesk node operations, the Zendesk Trigger, API token or OAuth2 credentials, webhooks, rate limits and an example workflow.",
    h1: "n8n Zendesk integration: nodes, credentials and example workflows",
    intro:
      "n8n connects to Zendesk through two built-in nodes. The Zendesk node works with tickets, ticket fields, users and organizations, and the Zendesk Trigger node starts a workflow when something happens in Zendesk. Both use the same credential, an API token or OAuth2. If you'd rather keep the rules in Zendesk, you can instead point a Zendesk webhook at an n8n Webhook node and fire it from a Zendesk trigger.",
    keyFacts: [
      "The n8n Zendesk node has four resources: Ticket, Ticket Field, User and Organization.",
      "Setting tags with the node's Update Ticket operation replaces the whole tag list. Tags you leave out are removed.",
      "n8n's Zendesk credential supports an API token (subdomain, login email and token) or OAuth2.",
      "Zendesk signs webhook requests with the X-Zendesk-Webhook-Signature and X-Zendesk-Webhook-Signature-Timestamp headers.",
      "Zendesk Suite API limits run from 200 requests per minute on Team to 2,500 on Enterprise Plus.",
    ],
    sections: [
      {
        heading: "What the n8n Zendesk node can do",
        blocks: [
          {
            type: "p",
            text: "The Zendesk node reads or changes data in Zendesk as a step in a workflow. n8n's docs group its operations by resource.",
          },
          {
            type: "table",
            caption: "Zendesk node resources and operations (n8n docs, checked October 2026)",
            head: ["Resource", "Operations"],
            rows: [
              ["Ticket", "Create, delete, get one or many, update, and recover a suspended ticket"],
              ["Ticket Field", "Get one ticket field, or get all system and custom ticket fields"],
              ["User", "Create, delete, get one or many, update, search, get a user's organizations and get related data"],
              ["Organization", "Create, delete, count, get one or many, update and get related data"],
            ],
          },
          {
            type: "p",
            text: "One behaviour catches people out. When you use Update Ticket and fill in the Tag Names or IDs field, n8n's docs say the entire list of tags on the ticket is replaced, so any tag you don't include is removed. This follows how the Zendesk API handles tag updates by default. The docs list three workarounds: fetch the current tags and merge them with the new ones before you update, use the HTTP Request node with Zendesk's additional_tags property, or call the ticket's tags endpoint. The last two add tags without removing existing ones.",
          },
          {
            type: "p",
            text: "If the node doesn't support an operation you need, use the HTTP Request node, set Authentication to Predefined Credential Type and pick your Zendesk credential. The request then reuses the same connection as the Zendesk node.",
          },
        ],
      },
      {
        heading: "Setting up Zendesk credentials in n8n",
        blocks: [
          {
            type: "p",
            text: "The Zendesk and Zendesk Trigger nodes use the same credential, and n8n supports two ways to authenticate. Both need your subdomain, which is the part of your Zendesk URL between https:// and .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "API token: in Zendesk Admin Center, open Apps and integrations, then APIs, and enable token access for the Zendesk API. Add a token with a description and copy it. In n8n, enter the subdomain, the email address you use to log in to Zendesk and the token.",
              "OAuth2: in Zendesk Admin Center, create an OAuth client under Apps and integrations, then APIs. Paste n8n's OAuth callback URL into the client's redirect URL field. Copy the client's unique identifier into Client ID in n8n and its secret into Client Secret, add the subdomain, save, and connect your Zendesk account.",
            ],
          },
        ],
      },
      {
        heading: "Zendesk Trigger node or a Zendesk webhook",
        blocks: [
          {
            type: "p",
            text: "There are two ways to start an n8n workflow from Zendesk. The Zendesk Trigger node starts a workflow when Zendesk events match the conditions you set in the node. In n8n's docs example, it filters for tickets whose status is Open, and the workflow runs once you turn it on.",
          },
          {
            type: "p",
            text: "The alternative is to build the connection yourself. In Zendesk Admin Center, go to Apps and integrations, then Webhooks, create a webhook, choose Trigger or Automation as the connection method, and point it at the Production URL of an n8n Webhook node. Then add the Notify webhook action to a Zendesk trigger or automation and write the payload, which can't exceed 16,000 characters. This keeps the conditions in Zendesk business rules and lets you choose exactly which fields to send.",
          },
          {
            type: "table",
            caption: "Two ways to start an n8n workflow from Zendesk",
            head: ["Question", "Zendesk Trigger node", "Zendesk webhook + n8n Webhook node"],
            rows: [
              ["Where the conditions live", "In the node, in n8n", "In a Zendesk trigger or automation with the Notify webhook action"],
              ["What n8n receives", "The event data the node provides", "The payload you write in the trigger action, up to 16,000 characters"],
              ["Zendesk credential", "Needed for the trigger itself", "Only needed for later steps that call Zendesk"],
              ["Testing", "Execute the node in the editor, as in n8n's docs example", "Use the Webhook node's Test URL, which listens for 120 seconds, then switch to the Production URL"],
            ],
          },
          {
            type: "p",
            text: "If you use a webhook, check that requests really come from Zendesk. Zendesk sends two headers, X-Zendesk-Webhook-Signature and X-Zendesk-Webhook-Signature-Timestamp. The signature is base64(HMACSHA256(timestamp + body)) made with the webhook's signing secret, which you can reveal on the webhook's details page or get through the API. Recompute it in your workflow and reject requests that don't match. Zendesk also says the same action can call a webhook more than once, so make the workflow safe to run twice for the same ticket.",
          },
          {
            type: "p",
            text: "The Webhook node can reply immediately, when the last node finishes, or through a separate Respond to Webhook node. For longer workflows, replying immediately gives Zendesk a quick answer while the rest of the work continues.",
          },
        ],
      },
      {
        heading: "Example workflow: classify new tickets and notify Slack",
        blocks: [
          {
            type: "p",
            text: "Here is a common pattern, described as steps. It shows how the nodes fit together. It isn't a TascaLab case study.",
          },
          {
            type: "ol",
            items: [
              "Trigger: a Zendesk Trigger node, or a Webhook node fed by a Zendesk trigger that fires when a ticket is created. Send at least the ticket ID.",
              "Fetch: a Zendesk node with the Ticket resource gets the full ticket, including the subject, description and current tags.",
              "Classify: a Text Classifier node sorts the text into categories you define, such as billing, technical issue or refund. Each category has a name and a description that helps the model. By default, items that match no category are dropped, so turn on the Other branch to catch them.",
              "Update: a Zendesk node sets the group and tags. Merge the existing tags first, or add tags through the HTTP Request node with additional_tags, so you don't wipe tags that agents set.",
              "Notify: a Slack node posts the category and a link to the ticket in the team's channel.",
              "Handle errors: send failed runs to an alert, and wait and retry when Zendesk returns a 429 response.",
            ],
          },
          {
            type: "p",
            text: "You can extend the same pattern. Send urgent tickets to a separate Slack channel, or look up the customer's organization with the Organization resource before you choose a group.",
          },
        ],
      },
      {
        heading: "Rate limits and where n8n runs",
        blocks: [
          {
            type: "p",
            text: "Zendesk limits API requests per minute by plan. Its developer docs list these default limits for the Support and Help Center APIs:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 requests per minute.",
              "Suite Growth and Suite Professional: 400 requests per minute.",
              "Suite Enterprise: 700 requests per minute.",
              "Suite Enterprise Plus: 2,500 requests per minute.",
            ],
          },
          {
            type: "p",
            text: "The High Volume API add-on raises a qualifying plan to 2,500 requests per minute. It replaces the plan limit rather than adding to it, and needs Suite Growth or above (or Support Professional or above) with at least 10 agent seats. Over the limit, Zendesk returns HTTP 429 with a Retry-After header that says how many seconds to wait. Some endpoints have their own, stricter limits. Count the API calls each run makes and multiply by your peak ticket volume. Bulk jobs, such as backfilling tags on old tickets, are more likely to hit the limit, so batch them and add waits.",
          },
          {
            type: "p",
            text: "n8n runs as n8n Cloud, a managed instance that n8n runs for you, or self-hosted on your own machine or infrastructure. For most self-hosted setups the docs recommend Docker, and they recommend n8n Cloud if you aren't experienced at managing servers. With either trigger method, Zendesk has to be able to reach your n8n instance. If a self-hosted instance sits behind a reverse proxy, set N8N_WEBHOOK_URL to its public base URL so n8n shows the right webhook URLs and external services register them correctly. N8N_WEBHOOK_URL replaces WEBHOOK_URL, which still works but is deprecated from n8n 2.35.0.",
          },
          {
            type: "p",
            text: "TascaLab builds Zendesk automations like this with n8n, Make, APIs and webhooks, on top of the tools you already use. Ticket Routing & Categorization projects cost $600 to $950, and Custom Automation projects $1,200 to $2,000. Most setups take 1 to 3 weeks, and every project includes basic documentation and 30 days of post-launch support. You can start with a free 30-minute audit call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Does n8n have a built-in Zendesk integration?",
        a: "Yes. n8n has a Zendesk node for tickets, ticket fields, users and organizations, and a Zendesk Trigger node that starts workflows from Zendesk events. Both use the same Zendesk credential.",
      },
      {
        q: "Why does the n8n Zendesk node remove my ticket tags?",
        a: "When you fill in Tag Names or IDs in the Update Ticket operation, the whole tag list is replaced. n8n's docs suggest merging the existing tags first, or adding tags through the HTTP Request node with Zendesk's additional_tags property or the tags endpoint.",
      },
      {
        q: "Which authentication methods does the n8n Zendesk credential support?",
        a: "An API token, entered with your subdomain and the email you log in with, or OAuth2, using the client ID and secret from an OAuth client you create in Zendesk.",
      },
      {
        q: "How do I check that a webhook request came from Zendesk?",
        a: "Recompute base64(HMACSHA256(timestamp + body)) with the webhook's signing secret and compare it with the X-Zendesk-Webhook-Signature header. The timestamp is in the X-Zendesk-Webhook-Signature-Timestamp header.",
      },
      {
        q: "What happens when a workflow hits the Zendesk API rate limit?",
        a: "Zendesk rejects the request with HTTP 429 and a Retry-After header that says how many seconds to wait. Default limits run from 200 requests per minute on Suite Team to 2,500 on Suite Enterprise Plus.",
      },
    ],
    sources: [
      { label: "n8n Docs — Zendesk node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk" },
      { label: "n8n Docs — Zendesk Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger" },
      { label: "n8n Docs — Zendesk credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/zendesk" },
      { label: "n8n Docs — Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook" },
      { label: "n8n Docs — Text Classifier node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Configure webhook URLs with reverse proxy", url: "https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "Zendesk Developer Docs — Rate limits", url: "https://developer.zendesk.com/api-reference/introduction/rate-limits/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
