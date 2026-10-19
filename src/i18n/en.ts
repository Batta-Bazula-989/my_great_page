// Every user-facing UI string on the site. Other languages (de.ts, fr.ts, …) mirror this shape exactly.
// "{name}"-style placeholders are filled in by format().

const en = {
  meta: {
    homeTitle: "AI Customer Support Automation — Chatbots, Voice Bots & Ticket Routing | TascaLab",
    homeDescription:
      "Customer support automation: AI chatbots, voice bots, ticket routing and automated reports for Zendesk, Freshdesk and Jira. Fixed prices, free Health Check.",
    noscriptHeading: "AI customer support automation — chatbots, voice bots & ticket routing",
    noscriptText:
      "TascaLab builds AI chatbots, voice bots, ticket routing and automated reporting on top of Zendesk, Freshdesk, Jira and Slack. Email romanzakharenko.r@gmail.com to book a free Health Check.",
  },
  nav: {
    services: "What I Do",
    fit: "A Fit?",
    whyMe: "Why Me?",
    pricing: "Prices",
    reviews: "Reviews",
    faq: "FAQ",
    resources: "Resources",
    cta: "Free Health Check",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    logoAlt: "TascaLab logo",
  },
  hero: {
    eyebrow: "Support automation that actually holds up",
    titleBefore: "AI chatbots, voice bots & ",
    titleHighlight: "ticket automation",
    titleAfter: " for support teams",
    intro:
      "I connect AI to the helpdesk you already use — answering repetitive questions, routing every ticket to the right queue, and delivering the reports your team builds by hand. Fewer manual tasks, faster first replies, no platform switch.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    highlights: ["Works with your current helpdesk", "Live in 1–3 weeks", "30 days of support included"],
    integratesWith: "Integrates with",
  },
  services: {
    eyebrow: "What I Do",
    title: "Customer support automation services",
    items: [
      {
        title: "Support chat & voice bots",
        description:
          "Handles first-contact messages and inbound calls. Qualifies the request, answers what it can, hands off what it can't — cleanly. A filter in front of your team, not a replacement for it.",
      },
      {
        title: "Ticket routing & categorization",
        description:
          "Every ticket gets tagged, prioritized, and assigned the moment it comes in — based on what it actually says. No manual sorting, no tickets sitting in the wrong queue.",
      },
      {
        title: "Reporting",
        description:
          "The reports your team pulls manually every week get generated and delivered automatically. Right format, right people, right time. No more pulling data.",
      },
      {
        title: "Custom solution",
        description:
          "Something specific that doesn't fit a template? I scope and build it. If it can be automated, we'll figure out how.",
      },
    ],
    previous: "Previous service",
    next: "Next service",
    show: "Show {title}",
  },
  fit: {
    eyebrow: "Is This a Fit?",
    title: "Who this support automation is for",
    goodTitle: "Good Fit",
    notTitle: "Not the Right Fit",
    good: [
      "Your support team handles repetitive, predictable work that shows up every single day",
      "You're on Zendesk, Freshdesk, Jira, or similar — and want automation on top, not a replacement",
      "You want clear reporting without someone manually pulling data every week",
      "Your tools don't talk to each other and tickets fall through the cracks because of it",
      "You want to know exactly what you're getting before you pay for anything",
    ],
    not: [
      "You need a full-time support manager to run day-to-day ops",
      "You want one tool to handle everything — intake, resolution, escalation, reporting, all of it",
      "You're planning to replace your entire support stack and start from scratch",
      "You believe AI can fully replace your support team",
    ],
  },
  whyMe: {
    eyebrow: "Why Work With Me",
    title: "Built by someone who's worked in support",
    items: [
      {
        title: "I've worked in support — not just around it",
        description:
          "I've handled tickets, built reports manually, and dealt with workflows held together with copy-paste and wishful thinking. I know what actually slows teams down because I've been on that side of it.",
      },
      {
        title: "Built to hold up, not to demo well",
        description:
          "Every automation includes error handling, edge case testing, and monitoring. If something unexpected happens, it fails gracefully and alerts the right person — it doesn't just silently break.",
      },
      {
        title: "You own everything when we're done",
        description:
          "Full documentation. Clear handover. No proprietary tooling that only I can access. Your team can maintain and extend what I build without needing to call me.",
      },
      {
        title: "Straight communication, always",
        description:
          "I'll tell you if something isn't worth automating. I'll tell you if your budget doesn't fit the scope. I won't nod and invoice you for something that won't move the needle.",
      },
    ],
    previous: "Previous reason",
    next: "Next reason",
    show: "Show {title}",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Fixed-price support automation packages",
    intro: "One price per package, paid once. No retainer. Not sure which fits? Start with the free Health Check.",
    oneTimeFee: "one-time",
    cta: "Get Started",
    from: "from {price}",
    delivery: "Delivery",
    deliveryTime: "1–3 weeks",
    support: "Support",
    supportTime: "30 days",
    included: "What's included",
    running: "Monthly running costs",
    runningNote: "Charged by the tool providers. Not included in the package price.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Answers common questions on 1–2 channels and hands the rest to your team.",
        included: [
          "Chatbot on 1–2 channels: website, WhatsApp, Telegram, Messenger or Instagram",
          "Answers your FAQs and handles common requests",
          "Collects basic customer info",
          "Hands the rest to your team with context",
          "Basic documentation",
        ],
        running: [
          "AI usage, billed per token by your AI provider, e.g. Claude Haiku 5.5 from $0.10 / $0.50 per million input / output tokens*",
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
          "WhatsApp only: from 1 October 2026, 1,000 free service messages a month per business number, then Meta's per-message rate",
        ],
      },
      {
        name: "Voice Bot",
        description: "Answers inbound calls, triages them and hands over to your team.",
        included: [
          "Voice agent for inbound calls with natural conversation",
          "Triage of every call",
          "Clean handover to your team",
          "Connected to your helpdesk",
          "Basic documentation",
        ],
        running: [
          "Voice platform per-minute fees, e.g. Retell AI from $0.07 per minute, plus the AI model and phone line",
          "A phone number from your telephony provider",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Handles more complex conversations across 3–5 channels.",
        included: [
          "Chatbot on 3–5 channels",
          "Multi-step conversations with smarter logic",
          "Smoother handoffs to your team",
          "Connected to your helpdesk",
          "Basic documentation",
        ],
        running: [
          "AI usage, billed per token by your AI provider, e.g. Claude Haiku 5.5 from $0.10 / $0.50 per million input / output tokens*",
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
          "WhatsApp only: from 1 October 2026, 1,000 free service messages a month per business number, then Meta's per-message rate",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Every ticket tagged, prioritized and assigned the moment it arrives.",
        included: [
          "AI classification of each new ticket by topic and urgency",
          "Tags, priority and assignment to the right group",
          "Works in Zendesk, Freshdesk or Jira Service Management",
          "Basic documentation",
        ],
        running: [
          "AI classification, billed per token by your AI provider, e.g. Claude Haiku 5.5 from $0.10 / $0.50 per million input / output tokens*",
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
        ],
      },
      {
        name: "Automated Reports",
        description: "The reports your team builds by hand, sent automatically.",
        included: [
          "Your key support metrics pulled from your helpdesk",
          "Scheduled delivery to email or Slack",
          "Basic documentation",
        ],
        running: [
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
          "No AI fees unless you want AI-written summaries",
        ],
      },
      {
        name: "Custom Automation",
        description: "Built around your workflows, tools and requirements.",
        included: [
          "Scoped together in your free Health Check",
          "Fixed price and timeline agreed before work starts",
          "Any tool with an API or webhooks",
          "Basic documentation",
        ],
        running: ["Depends on the tools involved; estimated in your Health Check report"],
      },
    ],
    footnote:
      "* Anthropic's list prices (October 2026) for prompts up to 100,000 tokens; longer prompts cost $0.50 / $2.50. Other providers and models are priced differently, and providers can change their prices.",
    trust: ["One-time price, no retainer", "30 days of support after delivery", "Basic documentation included"],
    healthCheck: {
      title: "Free Health Check",
      text: "A 30-minute call about your support setup, followed by a written report: what to automate first, which package fits, the fixed price and timeline, and the estimated monthly running costs.",
      cta: "Book your Health Check",
      price: "Free",
    },
  },
  data: {
    eyebrow: "Your Data",
    title: "Your data and GDPR",
    intro: "You choose where your automation runs. We agree on it in your Health Check, before anything is built.",
    options: [
      {
        title: "In your own accounts (default)",
        points: [
          "Built inside your helpdesk, your automation workspace and your AI provider account",
          "Customer data stays in systems you control, under your own contracts with those providers",
          "You decide what access I get, and you can remove it after handover",
          "You own every workflow, prompt and API key",
        ],
      },
      {
        title: "Hosted by me, under a DPA",
        points: [
          "I run the automation on accounts I manage",
          "We sign a data processing agreement (Art. 28 GDPR) before any personal data is processed",
          "No sub-processor, such as the automation platform, AI provider or hosting, is used without your written authorisation (Art. 28(2))",
          "When the contract ends, the data is deleted or returned, at your choice (Art. 28(3)(g))",
        ],
      },
    ],
    note: "This describes how projects are set up. It is not legal advice.",
  },
  reviews: {
    eyebrow: "Client Feedback",
    title: "Verified reviews on Upwork",
    intro:
      "Every review on my Upwork profile comes from a real, paid contract, so you can check how my past projects went before you book a call.",
    readTitle: "Read client reviews",
    readText:
      "See all ratings and written feedback from my clients on my Upwork profile.",
    readCta: "View my Upwork profile",
    leaveTitle: "Worked with me? Leave a review",
    leaveText:
      "If we've finished a project together, a short review on Upwork helps other support teams decide with confidence. It takes two minutes — thank you.",
    leaveCta: "Leave feedback on Upwork",
    quoted: "Reviews quoted word for word from my Upwork profile.",
    verify: "Verify on Upwork",
    stars: "{rating} out of 5 stars",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need to switch my support tools?",
        a: "No. I work with whatever you're already using — Zendesk, Freshdesk, Jira, Slack, internal tools. The goal is to connect and improve what you have, not replace it.",
      },
      {
        q: "What if something breaks after launch?",
        a: "Every project includes 30 days of post-launch support. If something breaks in that window, I fix it. I build on standard integrations — APIs, webhooks, Make/n8n — not fragile custom hacks that only work in one environment.",
      },
      {
        q: "Can my team maintain this after you're done?",
        a: "Yes. I document everything clearly — the logic, the flow, the edge cases. You're not locked in. Ongoing support is available but optional.",
      },
      {
        q: "Can you integrate a specific tool?",
        a: "If it has an API or webhook support, almost certainly. Bring it up in your Health Check and I'll confirm.",
      },
      {
        q: "What actually happens in the free Health Check?",
        a: "A 30-minute call about your current setup, where the friction is, and where automation would actually make a difference. Afterwards you get a written report with 2–3 concrete recommendations, the package and fixed price that fit, and the estimated monthly running costs. No sales deck. No pressure.",
      },
      {
        q: "How long does a typical project take?",
        a: "Most setups take 1–3 weeks depending on complexity and how quickly we can align on requirements. I'll give you a realistic timeline upfront — not an optimistic one.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's Talk",
    title: "Get a free support Health Check",
    intro: "A 30-minute call, then a written report. We'll look at what's slowing your team down and figure out where to start.",
    cta: "Book a Free Health Check",
    linkedin: "Connect on LinkedIn",
    email: "Email",
    upwork: "Upwork Reviews",
  },
  footer: {
    resourcesNav: "Resources",
    allResources: "All Resources",
    upworkReviews: "Upwork Reviews",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  categories: {
    services: { label: "Services", blurb: "What gets built: bots, routing and reporting." },
    helpdesks: { label: "By Helpdesk", blurb: "Automation inside the tools your team already uses." },
    channels: { label: "By Channel", blurb: "Support bots for the places your customers write from." },
    basics: { label: "Learn the Basics", blurb: "Definitions, metrics and how handoffs work." },
    guides: { label: "Guides & Compliance", blurb: "Tool comparisons and EU rules for support bots." },
  },
  cookie: {
    text: "We use cookies for analytics and ad measurement to understand how visitors find and use this site.",
    privacy: "Privacy Policy",
    decline: "Decline",
    accept: "Accept",
  },
  booking: {
    title: "Book a Free Health Check",
    description: "Leave your details and I'll reach out to schedule a 30-minute call. You get a written report afterwards. No commitment, no pitch.",
    fullName: "Full Name",
    fullNamePlaceholder: "Jane Smith",
    email: "Work Email",
    emailPlaceholder: "jane@company.com",
    company: "Company Name",
    companyPlaceholder: "Acme Inc.",
    meetingMethod: "Preferred Meeting Method",
    methodPhone: "Phone",
    phone: "Phone Number",
    phonePlaceholder: "123 456 7890",
    searchCountry: "Search country or code...",
    noCountry: "No country found.",
    telegram: "Telegram Link or Username",
    telegramPlaceholder: "https://t.me/username or @username",
    submitCalendar: "Continue to Calendar",
    submitting: "Sending...",
    submit: "Book Free Health Check",
    sendFailed: "Could not send request",
    networkError: "Network error or server not reachable.",
    sent: "Request sent! I'll be in touch within 24 hours.",
    errors: {
      nameRequired: "Full Name is required",
      nameShort: "Full Name must be at least 2 characters",
      nameLong: "Full Name must be less than 50 characters",
      nameChars: "Full Name can only contain letters, spaces, hyphens, and apostrophes",
      emailRequired: "Work Email is required",
      emailInvalid: "Please enter a valid email address",
      companyLength: "Company Name must be between 2 and 50 characters",
      phoneRequired: "Phone number is required",
      phoneChars: "Use only digits, spaces, dots, dashes, parentheses",
      phoneDigits: "Phone number must be 6–15 digits",
      telegramRequired: "Telegram link or username is required",
      telegramInvalid:
        "Please enter a valid Telegram link (e.g., https://t.me/username) or username (e.g., @username)",
    },
  },
  seo: {
    home: "Home",
    byline: "By Roman Zakharenko",
    factsChecked: "Facts checked",
    atAGlance: "At a glance",
    faqTitle: "Frequently asked questions",
    faqShort: "FAQ",
    ctaTitle: "Want this set up for your team?",
    ctaText:
      "Book a free Health Check: a 30-minute call and a written report with 2–3 concrete recommendations, a fixed price and estimated running costs. No pitch.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    sources: "Sources",
    onThisPage: "On this page",
    related: "Related",
  },
  resources: {
    metaTitle: "Customer Support Automation Resources | TascaLab",
    metaDescription:
      "Guides to AI support chatbots, ticket routing, Zendesk, Freshdesk and Jira automation, WhatsApp and Telegram bots, support metrics, SLAs and EU rules.",
    eyebrow: "Resources",
    title: "Customer support automation resources",
    intro:
      "Fact-checked guides on support bots, ticket routing, helpdesk automation, support metrics and the EU rules that apply to them. Every page lists the official sources it is based on.",
    readGuide: "Read guide",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist or has moved.",
    back: "Return to Home",
  },
};

export type Dictionary = typeof en;
export default en;
