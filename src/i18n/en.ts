// Every user-facing UI string on the site. Other languages (de.ts, fr.ts, …) mirror this shape exactly.
// "{name}"-style placeholders are filled in by format().

import tools from "./tools/en";

const en = {
  meta: {
    homeTitle: "AI Chatbots, Voice Bots & Ticket Automation | TascaLab",
    homeDescription:
      "Customer support automation: AI chatbots, voice bots, ticket routing and automated reports for Zendesk, Freshdesk and Jira. Fixed prices, free Health Check.",
  },
  nav: {
    services: "What I Do",
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
    skipToContent: "Skip to content",
  },
  hero: {
    eyebrow: "CRM and sales automation that holds up",
    titleBefore: "Every reply, call and meeting logged on the ",
    titleHighlight: "right deal",
    titleAfter: "",
    intro:
      "I'm Roman. I connect your CRM to lemlist, Aircall, Gmail, LinkedIn and your meeting notes, so nobody has to copy them in by hand. Fixed price, paid once.",
    callNote: "Free Health Check: a 30 minute call with me, then a written report.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    highlights: ["Works with your current CRM", "Live in 1 to 3 weeks", "30 days of support included"],
    integratesWith: "Integrates with",
  },
  services: {
    eyebrow: "What I Do",
    title: "CRM and sales automation services",
    // Same order as the cards' links in src/components/SolutionSection.tsx.
    items: [
      {
        title: "Replies into your CRM",
        description:
          "Every lemlist email and LinkedIn reply creates or updates the company, person and deal. AI marks how warm the reply is. Alerts in Slack or WhatsApp if you want them.",
      },
      {
        title: "Calls and meetings into your CRM",
        description:
          "Aircall calls and transcripts, plus Fireflies and Granola notes, logged on the deal. Internal meetings are skipped.",
      },
      {
        title: "Inbox and LinkedIn into your CRM",
        description: "Customer emails from Gmail and LinkedIn messages matched to the right person and deal.",
      },
      {
        title: "Lead capture",
        description:
          "Website visitors identified with RB2B, scored against your ICP and added to HubSpot, with a weekly recap. HubSpot tasks sent straight to lemlist campaigns.",
      },
      {
        title: "CRM cleanup and migrations",
        description:
          "People linked to the right deals, with missing emails, phones and LinkedIn profiles filled in from Apollo. Workflows moved off tools that shut down, like Relay.app, and data moved between CRMs.",
      },
      {
        title: "Custom solution",
        description:
          "Something specific? I scope it and build it. Past examples: order emails into Notion, LinkedIn profiles into slide decks, a fulfilment center dashboard.",
      },
    ],
  },
  process: {
    eyebrow: "How It Works",
    title: "From first call to a working automation",
    steps: [
      {
        title: "Free Health Check",
        description: "A 30 minute call about your CRM, your sales tools and where automation would help.",
      },
      {
        title: "Written report",
        description: "2 to 3 recommendations, the package that fits and its fixed price.",
      },
      {
        title: "Fixed price agreed",
        description: "Agreed before any work starts. Paid once, no retainer.",
      },
      {
        title: "Built in 1 to 3 weeks",
        description: "Inside your CRM and tools, running in your own accounts.",
      },
      {
        title: "30 days of support",
        description: "If something breaks after launch, I fix it.",
      },
    ],
  },
  fit: {
    eyebrow: "Is This a Fit?",
    title: "Who this is for",
    goodTitle: "Good Fit",
    notTitle: "Not the Right Fit",
    good: [
      "Reps copy replies, calls or meeting notes into the CRM by hand",
      "You use Attio or HubSpot with lemlist, Aircall, Fireflies, Granola or similar",
      "People and companies are missing from deals",
      "Your sales tools don't talk to each other",
    ],
    not: [
      "You need a full time RevOps hire",
      "You want to replace your whole sales stack",
      "You expect AI to replace your sales team",
    ],
  },
  whyMe: {
    eyebrow: "Why Work With Me",
    title: "Built by an engineer who has done support",
    role: "CRM and Sales Automation",
    linkedin: "My background on LinkedIn",
    items: [
      {
        title: "Engineer first",
        description: "I started in Java test automation and Scala development, so I build workflows like software.",
      },
      {
        title: "Built to hold up",
        description: "Deduplication, retries, error handling and alerts in every build.",
      },
      {
        title: "You own everything",
        description: "It runs in your accounts, with documentation and handover. No lock in.",
      },
      {
        title: "Straight answers",
        description: "If something isn't worth automating, I'll tell you.",
      },
    ],
  },
  recentWork: {
    eyebrow: "Recent Work",
    title: "What I've built lately",
    seeAll: "See all work",
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Fixed price CRM automation packages",
    intro: "One price, paid once. No retainer.",
    oneTimeFee: "paid once",
    // Shown in the price slot until a package has a confirmed price.
    noPrice: "Fixed price after your Health Check",
    cta: "Ask about this in a Health Check",
    from: "from {price}",
    included: "What's included",
    groups: {
      log: "Log sales activity",
      capture: "Capture and clean",
      move: "Move and custom",
    },
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Reply Logging",
        description: "lemlist email and LinkedIn replies logged on the right deal in your CRM.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Finds or creates the company, person and deal",
          "AI tags each reply as interested, basic reply or not interested",
          "Existing deals get a note, nothing is overwritten",
          "Optional alert in Slack or WhatsApp",
        ],
      },
      {
        name: "Call Logging",
        description: "Aircall calls and transcripts on the right deal.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "A call note on the deal when each call ends",
          "The full transcript added when Aircall finishes it (needs Aircall's AI Assist)",
          "For Attio or HubSpot",
        ],
      },
      {
        name: "Meeting Notes Logging",
        description: "Fireflies or Granola notes on the right deal or company.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Matched to the company, people and deal by email domain",
          "Internal meetings skipped",
          "Notes already logged are never added twice",
        ],
      },
      {
        name: "Inbox and LinkedIn Logging",
        description: "Customer emails from Gmail and LinkedIn messages in your CRM.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Emails sorted by AI and matched to the person and deal",
          "LinkedIn messages filtered to prospects only",
          "Slack alert for new conversations",
        ],
      },
      {
        name: "Website Visitor Capture",
        description: "RB2B website visitors scored and added to HubSpot.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Each visitor scored against your ICP",
          "Known leads logged in HubSpot and a Google Sheet",
          "New contact and company created above your score threshold",
          "Weekly recap email ranked by ICP score",
        ],
      },
      {
        name: "CRM Cleanup Sweep",
        description: "A daily job that keeps people, companies and deals connected.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Links the right company people to each open deal",
          "Fills missing email, phone and LinkedIn from Apollo",
          "Runs within your CRM's rate limits",
        ],
      },
      {
        name: "Migration",
        description: "Off Relay.app, or from one CRM to another.",
        delivery: "Scoped in your Health Check",
        included: [
          "Inventory of every workflow, ranked by priority",
          "The workflows that matter rebuilt in n8n",
          "Stage and field mapping between CRMs",
        ],
      },
      {
        name: "Custom Automation",
        description: "Built around your workflows, tools and requirements.",
        delivery: "Delivery 1 to 3 weeks",
        included: [
          "Scoped in your free Health Check",
          "Fixed price agreed before work starts",
          "Any tool with an API or webhooks",
        ],
      },
    ],
    allPackages: "Every package: 30 days of support after delivery and basic documentation.",
    healthCheck: {
      title: "Free Health Check",
      text: "A 30 minute call, then a written report: what to automate first, which package fits and what it costs.",
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
          "Runs in your own CRM, automation and AI accounts",
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
        q: "Do I need to switch CRM?",
        a: "No. I build inside the CRM you already use, like Attio or HubSpot. If a tool has an API or webhooks, I can usually connect it.",
      },
      {
        q: "Will this create duplicate people or deals?",
        a: "No. Before writing anything, the automation looks for the existing company, person and deal and updates those. It also keeps track of what it has already logged, so the same reply, call or note isn't added twice.",
      },
      {
        q: "What if something breaks after launch?",
        a: "You get 30 days of support after delivery. Builds also send an alert when an API call fails, so problems don't go unnoticed.",
      },
      {
        q: "Can my team maintain this after you're done?",
        a: "Yes. It runs in your own n8n or Make account, with documentation and a handover call.",
      },
      {
        q: "Is logging LinkedIn messages safe for my account?",
        a: "LinkedIn doesn't offer an inbox API for this, so tools like Unipile work through your logged in session, and that carries a risk of account restrictions. I'll explain the options and the risk in the Health Check, and you decide.",
      },
      {
        q: "What actually happens in the free Health Check?",
        a: "A 30 minute call about your CRM and sales tools. Then you get a written report with 2 to 3 recommendations, the package that fits and its fixed price. No commitment.",
      },
      {
        q: "How long does a typical project take?",
        a: "1 to 3 weeks from the agreed scope to a working automation.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's Talk",
    title: "Get a free CRM Health Check",
    intro: "A 30 minute call, then a written report.",
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
    text: "I use cookies for analytics and ad measurement to understand how visitors find and use this site.",
    privacy: "Privacy Policy",
    decline: "Decline",
    accept: "Accept",
  },
  booking: {
    title: "Book a Free Health Check",
    description: "A 30 minute call with me, Roman, then a written report. No commitment, no pitch.",
    about: "About: {topic}",
    close: "Close",
    fullName: "Full Name",
    fullNamePlaceholder: "Jane Smith",
    email: "Work Email",
    emailPlaceholder: "jane@company.com",
    company: "Company Name",
    companyPlaceholder: "Acme Inc.",
    crm: "Which CRM do you use?",
    crmPlaceholder: "Choose one",
    crmOther: "Other",
    crmNone: "None yet",
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
      phoneDigits: "Phone number must be 6 to 15 digits",
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
      "Book a free Health Check: a 30 minute call, then a written report with 2 to 3 recommendations, the package that fits and its fixed price. No pitch.",
    ctaBook: "Book a Free Health Check",
    ctaUpwork: "Reviews on Upwork",
    sources: "Sources",
    onThisPage: "On this page",
    related: "Related",
  },
  work: {
    metaTitle: "Recent Work: CRM and Sales Automation Builds | TascaLab",
    metaDescription:
      "Real CRM and sales automation builds: lemlist replies, Aircall calls and meeting notes logged in Attio and HubSpot, plus migrations and ops tools.",
    label: "Work",
    title: "Recent work",
    intro:
      "Real builds for real clients. Each page shows what the client needed, what I built and which tools it runs on. Client names are left out unless the client agreed to be named.",
    smallerTitle: "Smaller builds",
    smaller: [
      "lemlist reply alerts posted in a Slack channel for a team that doesn't use a CRM.",
      "lemlist reply alerts sent to WhatsApp, with email and LinkedIn replies told apart.",
      "Diagnosed why enriched leads took 1 to 2 minutes to reach Attio from Apollo's Chrome extension: the delay was on Apollo's side, not the Attio write.",
    ],
    client: "Client",
    needed: "What they needed",
    built: "What I built",
    tools: "Tools",
    status: "Status",
    fromBuilds: "From my builds",
    fromBuildsIntro: "What I found on this build:",
    readCase: "Read the case study",
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
  tools,
};

export type Dictionary = typeof en;
export default en;
