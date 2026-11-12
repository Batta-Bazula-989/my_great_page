// Every user-facing UI string on the site. Other languages (de.ts, fr.ts, …) mirror this shape exactly.
// "{name}"-style placeholders are filled in by format().

import tools from "./tools/en";

const en = {
  meta: {
    homeTitle: "Lead, CRM & Support Automation for B2B Teams | TascaLab",
    homeDescription:
      "Lead automation and CRM integration for small B2B teams: AI lead scoring, HubSpot and Attio, plus support automation. Fixed prices, free Health Check.",
  },
  nav: {
    services: "What I Do",
    whyMe: "Why Me?",
    pricing: "Prices",
    reviews: "Reviews",
    faq: "FAQ",
    blog: "Blog",
    cta: "Free Health Check",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    logoAlt: "TascaLab logo",
    skipToContent: "Skip to content",
  },
  hero: {
    eyebrow: "Automation that actually holds up",
    titleBefore: "Lead, CRM and support automation ",
    titleHighlight: "for small B2B teams",
    titleAfter: "",
    sectors: "Most of my work is with B2B sales teams, ecommerce and fulfilment operations.",
    // {price} is the lowest package price in the visitor's currency, e.g. "$400".
    intro: "I'm Roman. I build them myself, at a fixed price from {price}, paid once.",
    callNote: "Free Health Check: a 30-minute call with me, then a written report.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    highlights: ["Works with your current CRM or helpdesk", "Live in 1–3 weeks", "30 days of support included"],
    integratesWith: "Integrates with",
  },
  recentWork: {
    eyebrow: "In practice",
    title: "Recent work",
    situationLabel: "Situation",
    changeLabel: "What changed",
    resultLabel: "Result",
    cases: [
      {
        title: "Outreach reply handling",
        situation: "A B2B sales team logged outreach replies to their CRM by hand.",
        change:
          "AI now classifies every Lemlist reply and logs it to the right deal in HubSpot and Attio, with Slack alerts.",
        result: "Nothing gets missed.",
      },
      {
        title: "Website visitor scoring",
        situation: "A company couldn't see which website visitors mattered.",
        change:
          "Each identified company is now scored against their ideal customer profile and logged to HubSpot.",
        result: "A weekly recap, ranked by score.",
      },
      {
        title: "Automation platform migration",
        situation: "A team's automation platform announced it was shutting down.",
        change: "20+ production workflows were migrated to n8n.",
        result: "Everything live before the deadline.",
      },
    ],
  },
  services: {
    eyebrow: "What I Do",
    title: "Lead, CRM and support automation services",
    items: [
      {
        title: "Lead automation",
        description:
          "Leads from website visitors, forms and outreach replies classified by AI, scored against your ideal customer profile, and logged to your CRM with team alerts.",
      },
      {
        title: "CRM integration & automation",
        description:
          "Your CRM (HubSpot, Attio) connected to outreach, calling and enrichment tools. Replies, calls and transcripts logged to the right deal automatically, and workflow migrations between platforms.",
      },
      {
        title: "Support automation",
        description:
          "Chat and voice bots, ticket routing and categorization, automated reporting — all connected to your helpdesk (Zendesk, Freshdesk, Jira).",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From first call to a working automation",
    intro:
      "After you book the Health Check: a 30-minute call, then a written report with recommendations and a fixed price — no obligation.",
    steps: [
      {
        title: "Free Health Check",
        description: "A 30-minute call about your setup and where automation would help.",
      },
      {
        title: "Written report",
        description: "2–3 recommendations, the package that fits and its fixed price.",
      },
      {
        title: "Fixed price agreed",
        description: "Agreed before any work starts. Paid once, no retainer.",
      },
      {
        title: "Built in 1–3 weeks",
        description: "Inside your CRM or helpdesk, running in your own accounts.",
      },
      {
        title: "30 days of support",
        description: "If something breaks after launch, I fix it.",
      },
    ],
  },
  fit: {
    eyebrow: "Is This a Fit?",
    title: "Who this automation is for",
    intro: "Usually small B2B teams with repetitive work in their day-to-day tools.",
    goodTitle: "Good Fit",
    notTitle: "Not the Right Fit",
    good: [
      "Repetitive sales or support work every day",
      "You use HubSpot, Attio, Zendesk, Freshdesk or similar",
      "Leads, replies or reports still handled by hand",
      "Tools that don't talk to each other",
    ],
    not: [
      "You need a full-time support manager",
      "You want to replace your whole tool stack",
      "You expect AI to replace your team",
    ],
  },
  whyMe: {
    eyebrow: "Why Work With Me",
    title: "Built by someone who's worked in support",
    role: "AI Automation Specialist",
    items: [
      {
        title: "I've worked in support",
        description: "I've handled tickets and built reports by hand, so I know what slows teams down.",
      },
      {
        title: "Built to hold up",
        description: "Error handling, edge-case testing and monitoring in every build.",
      },
      {
        title: "You own everything",
        description: "Full documentation and handover. No lock-in.",
      },
      {
        title: "Straight answers",
        description: "If something isn't worth automating, I'll tell you.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Fixed-price automation packages",
    intro: "One price, paid once. No retainer.",
    oneTimeFee: "one-time",
    cta: "Ask about this in a Health Check",
    from: "from {price}",
    delivery: "Delivery",
    deliveryTime: "1–3 weeks",
    included: "What's included",
    groups: {
      leads: "Lead & CRM automation",
      support: "Support automation",
      custom: "Custom work",
    },
    running: "Monthly running costs",
    showRunning: "Show monthly running costs",
    hideRunning: "Hide monthly running costs",
    runningNote: "Charged by the tool providers. Not included in the package price.",
    estimate: "Estimate yours with my free calculators:",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Answers common questions on 1–2 channels and hands the rest to your team.",
        included: [
          "1–2 channels: website, WhatsApp, Telegram, Messenger or Instagram",
          "Answers FAQs and collects customer info",
          "Hands the rest to your team",
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
          "Answers inbound calls",
          "Triage and clean handover to your team",
          "Connected to your helpdesk",
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
          "3–5 channels",
          "Multi-step conversations",
          "Handoff to your team, connected to your helpdesk",
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
          "AI sorts each new ticket by topic and urgency",
          "Sets tags and priority, assigns the right group",
          "Zendesk, Freshdesk or Jira Service Management",
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
          "Key support metrics from your helpdesk",
          "Sent to email or Slack on a schedule",
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
          "Scoped in your free Health Check",
          "Fixed price agreed before work starts",
          "Any tool with an API or webhooks",
        ],
        running: ["Depends on the tools involved; estimated in your Health Check report"],
      },
      {
        name: "Lead Capture & Scoring",
        description: "Leads from one source classified and scored by AI, logged to your CRM.",
        included: [
          "Leads from one source classified and scored by AI",
          "Logged to your CRM",
          "Alerts to email or Slack",
        ],
        running: [
          "AI usage, billed per token by your AI provider, e.g. Claude Haiku 5.5 from $0.10 / $0.50 per million input / output tokens*",
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
        ],
      },
      {
        name: "CRM Integration",
        description: "Two tools connected to your CRM, activity logged to the right records.",
        included: [
          "Two tools connected to your CRM",
          "Replies and activity logged to the right records",
          "Error handling and alerts",
        ],
        running: [
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
        ],
      },
      {
        name: "Support Automation",
        description: "The repetitive part of your support automated, connected to your helpdesk.",
        included: [
          "Chat and voice bots that answer common questions and calls",
          "Tickets routed, tagged and prioritized automatically",
          "Reports sent to email or Slack on a schedule",
          "Connected to Zendesk, Freshdesk or Jira",
        ],
        running: [
          "AI usage, billed per token by your AI provider, e.g. Claude Haiku 5.5 from $0.10 / $0.50 per million input / output tokens*",
          "Automation platform: self-hosted n8n (free software; you pay for the server), n8n Cloud from €20/month or Make from $9/month (both billed annually)",
          "Voice bots only: voice platform per-minute fees, e.g. Retell AI from $0.07 per minute, plus the AI model and phone line",
        ],
      },
    ],
    footnote:
      "* Anthropic's list prices (October 2026) for prompts up to 100,000 tokens; longer prompts cost $0.50 / $2.50. Other providers and models are priced differently, and providers can change their prices.",
    allPackages: "Every package: 30 days of support after delivery and basic documentation.",
    healthCheck: {
      title: "Free Health Check",
      text: "A 30-minute call, then a written report: what to automate first, which package fits and what it costs.",
      cta: "Book your Health Check",
      price: "Free",
    },
  },
  data: {
    eyebrow: "Your Data",
    title: "Your data and GDPR",
    intro: "You choose where your automation runs.",
    options: [
      {
        title: "In your own accounts (default)",
        points: [
          "Runs in your own helpdesk, automation and AI accounts",
          "Customer data stays in systems you control",
          "You own everything and control my access",
        ],
      },
      {
        title: "Hosted by me, under a DPA",
        points: [
          "Data processing agreement (Art. 28 GDPR) signed before any personal data is processed",
          "Sub-processors only with your written authorisation",
          "At the end, data deleted or returned, your choice",
        ],
      },
    ],
    note: "This describes how projects are set up. It is not legal advice.",
  },
  reviews: {
    eyebrow: "Client Feedback",
    title: "Verified reviews on Upwork",
    intro: "From paid contracts on Upwork.",
    quoted: "Reviews quoted word for word from my Upwork profile.",
    verify: "Verify on Upwork",
    stars: "{rating} out of 5 stars",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        q: "Do I need to switch my CRM or support tools?",
        a: "No. I work with whatever you're already using — HubSpot, Attio, Zendesk, Freshdesk, Jira, Slack, internal tools. The goal is to connect and improve what you have, not replace it.",
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
    title: "Get a free Health Check",
    intro: "A 30-minute call, then a written report.",
    cta: "Book a Free Health Check",
    email: "Email",
    upwork: "Upwork Reviews",
  },
  footer: {
    blogNav: "Blog",
    allPosts: "All Articles",
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
    crm: { label: "Lead & CRM Automation", blurb: "Workflows, webhooks and APIs in Attio and HubSpot." },
  },
  cookie: {
    text: "I use cookies for analytics and ad measurement to understand how visitors find and use this site.",
    privacy: "Privacy Policy",
    label: "Cookie consent",
    decline: "Decline",
    accept: "Accept",
  },
  booking: {
    title: "Book a Free Health Check",
    description: "A 30-minute call with me, Roman, then a written report. No commitment, no pitch.",
    about: "About: {topic}",
    close: "Close",
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
    submitting: "Sending…",
    submit: "Book Free Health Check",
    nextCalendar: "Next, you pick a time in my calendar.",
    nextContact: "I'll contact you within 24 hours to agree on a time.",
    sendFailed: "Your request didn't go through",
    networkError: "Please try again in a moment, or contact me directly:",
    sentTitle: "Request sent",
    sentCalendarTitle: "Almost done: pick a time",
    sentCalendar: "Now pick a time that suits you in my calendar.",
    openCalendar: "Open my calendar",
    sent: "I'll be in touch within 24 hours to agree on a time.",
    errors: {
      nameRequired: "Full Name is required",
      nameShort: "Full Name must be at least 2 characters",
      nameLong: "Full Name must be less than 50 characters",
      nameChars: "Full Name can only contain letters, spaces, periods, hyphens and apostrophes",
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
    ctaTitle: "Not sure what to automate first?",
    ctaText:
      "Book a free Health Check: a 30-minute call and a written report with 2–3 concrete recommendations, a fixed price and estimated running costs. No pitch.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    sources: "Sources",
    onThisPage: "On this page",
    related: "Related",
    readNext: "Read next",
    ctaPackages: "See packages and prices",
  },
  blog: {
    metaTitle: "Support & CRM Automation Blog | TascaLab",
    metaDescription:
      "Guides to AI support chatbots, ticket routing, Zendesk, Freshdesk, Jira, HubSpot and Attio automation, WhatsApp and Telegram bots, SLAs and EU rules.",
    title: "Support and CRM automation blog",
    readArticle: "Read article",
    all: "All",
    minRead: "{n} min read",
    filterLabel: "Filter articles by topic",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist or has moved.",
    back: "Return to Home",
  },
  tools,
};

export type Dictionary = typeof en;
export default en;
