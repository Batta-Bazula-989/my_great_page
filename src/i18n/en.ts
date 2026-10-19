// Every user-facing UI string on the site. Other languages (de.ts, fr.ts, …) mirror this shape exactly.
// "{name}"-style placeholders are filled in by format().

const en = {
  meta: {
    homeTitle: "AI Customer Support Automation — Chatbots, Voice Bots & Ticket Routing | TascaLab",
    homeDescription:
      "Freelance customer support automation: AI chatbots, voice bots, Zendesk/Freshdesk/Jira ticket routing and automated reporting — built into the tools you already use. Fixed prices, free 30-min audit.",
    noscriptHeading: "AI customer support automation — chatbots, voice bots & ticket routing",
    noscriptText:
      "TascaLab builds AI chatbots, voice bots, ticket routing and automated reporting on top of Zendesk, Freshdesk, Jira and Slack. Email romanzakharenko.r@gmail.com to book a free 30-minute audit.",
  },
  nav: {
    services: "What I Do",
    fit: "A Fit?",
    whyMe: "Why Me?",
    pricing: "Prices",
    reviews: "Reviews",
    faq: "FAQ",
    resources: "Resources",
    cta: "Book a Free Audit",
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
    ctaBook: "Book a Free Audit",
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
    intro: "One-time project fees. You know the price range before we start — final quote after a free audit.",
    oneTimeFee: "one-time fee",
    cta: "Get Started",
    // Same order as the plans in PricingSection; prices stay in USD.
    plans: [
      {
        name: "Starter Chat Bot",
        price: "$350 – $450",
        description:
          "Handles basic customer queries and FAQs across 1–2 channels. Perfect for small businesses getting started with automation.",
        features: ["1–2 channels", "Answers FAQs, collects basic info, and handles common requests automatically"],
      },
      {
        name: "Voice Bot",
        price: "$1,100 – $1,600",
        description: "For inbound phone calls.",
        features: [
          "Full voice agent for handling inbound calls with natural conversation, triage, and clean handover to your team",
        ],
      },
      {
        name: "Standard Chat Bot",
        price: "$500 – $650",
        description:
          "Advanced chatbot with multi-channel support, smarter responses, and better handling of customer interactions at scale.",
        features: ["3–5 channels", "Handles more complex conversations with smarter logic and smoother handoffs to your team"],
      },
      {
        name: "Ticket Routing & Categorization",
        price: "$600 – $950",
        description: "Automatic sorting and assigning of tickets.",
        features: [
          "Automatically tags, categorizes, and routes tickets to the right team, so nothing gets missed and response times stay fast.",
        ],
      },
      {
        name: "Automated Reports",
        price: "$500 – $900",
        description: "Scheduled reports sent automatically.",
        features: [
          "Automated reports with your key business metrics delivered to email or Slack, so you stay informed without manual work.",
        ],
      },
      {
        name: "Custom Automation",
        price: "$1,200 – $2,000",
        description:
          "Fully customized automation built around your workflows, tools, and unique business requirements.",
        features: ["Fully customized automation built around your workflows, tools, and unique business requirements"],
      },
    ],
    trust: ["No hidden fees", "30 days of support after delivery", "Basic documentation included"],
  },
  reviews: {
    eyebrow: "Client Feedback",
    title: "Verified reviews on Upwork",
    intro:
      "Every review on my Upwork profile comes from a real, paid contract — so you can see exactly how past support-automation projects went before you book a call.",
    readTitle: "Read client reviews",
    readText:
      "See ratings, job success score, and written feedback from teams I've built chatbots, ticket routing, and reporting automations for.",
    readCta: "View my Upwork profile",
    leaveTitle: "Worked with me? Leave a review",
    leaveText:
      "If we've finished a project together, a short review on Upwork helps other support teams decide with confidence. It takes two minutes — thank you.",
    leaveCta: "Leave feedback on Upwork",
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
        a: "If it has an API or webhook support, almost certainly. Bring it up on the audit call and I'll confirm.",
      },
      {
        q: "What actually happens in the free audit?",
        a: "30 minutes. We look at your current setup, where the friction is, and where automation would actually make a difference. You leave with 2–3 concrete recommendations, a rough scope, and a price range. No sales deck. No pressure.",
      },
      {
        q: "How long does a typical project take?",
        a: "Most setups take 1–3 weeks depending on complexity and how quickly we can align on requirements. I'll give you a realistic timeline upfront — not an optimistic one.",
      },
    ],
  },
  contact: {
    eyebrow: "Let's Talk",
    title: "Book a free 30-minute support audit",
    intro: "Book a 30-minute call. We'll look at what's slowing your team down and figure out where to start.",
    cta: "Book a Free Audit",
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
    title: "Book a Free Support Review",
    description: "Leave your details and I'll reach out to schedule a 30-minute call. No commitment, no pitch.",
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
    submit: "Book Free Support Review",
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
      "Book a free 30-minute audit. You get 2–3 concrete recommendations, a rough scope and a price range — no pitch.",
    ctaBook: "Book a Free Audit",
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
