// UI and page text for the free tools under /tools. Other languages mirror this shape exactly.
// Vendor names, plan names and product names stay in English.

const tools = {
  menu: "Tools",
  allTools: "All tools",
  hub: {
    slug: "tools",
    metaTitle: "Free Customer Support Tools & Calculators | TascaLab",
    metaDescription:
      "Free calculators for support teams: compare AI support agent costs, estimate WhatsApp Business API bills and work out SLA due times in business hours.",
    eyebrow: "Free tools",
    title: "Free tools for support teams",
    intro: "Quick calculators built on published prices and plain maths. Free, no sign-up.",
    open: "Open tool",
  },
  common: {
    freeTool: "Free tool · no sign-up",
    howItWorks: "How it works",
    faqTitle: "Frequently asked questions",
    sources: "Sources",
    estimate: "Estimates only, not a quote.",
    perMonth: "/month",
    ctaTitle: "Want an exact number for your team?",
    ctaText: "Book a free Health Check: a 30-minute call, then a written report with the package and fixed price that fit.",
    ctaBook: "Book a Free Health Check",
    otherTools: "Other free tools",
  },
  aiAgent: {
    slug: "ai-support-agent-cost-calculator",
    navLabel: "AI support agent cost",
    short: "Compare per-resolution AI agents with a one-time build at your volume.",
    metaTitle: "AI Support Agent Cost Calculator 2026 | TascaLab",
    metaDescription:
      "Compare the monthly cost of Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro and Agentforce at your volume with a one-time custom AI support agent.",
    h1: "AI support agent cost calculator",
    intro:
      "Most AI support agents bill per resolution, conversation or action, so the bill grows with your volume. Enter your numbers to compare six vendors' list prices with a one-time build.",
    inputs: {
      title: "Your volume",
      conversations: "AI conversations per month",
      resolutionRate: "Resolved without a human",
      actions: "Agentforce actions per conversation",
      buildTitle: "One-time build",
      package: "Package",
      platform: "Automation platform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (€20/month, billed annually)",
        make: "Make Core ($9/month, billed annually)",
        selfHosted: "Self-hosted n8n (server cost not included)",
      },
      tokens: "AI tokens per conversation",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Example values from a published 5-message support conversation. Change them to match your bot.",
    },
    results: {
      title: "Estimated monthly cost",
      vendor: "Vendor",
      monthly: "Per month",
      year: "12 months",
      yourBuild: "One-time build",
      buildLine: "{price} once + {monthly}/month running costs",
      payback: "Cheaper than {vendor} from month {months}",
      neverCheaper: "At this volume, the build is not cheaper than any vendor in 12 months.",
      cheapest: "Lowest",
      currencyNote: "Vendor prices are USD list prices, converted at the ECB rate of 16 October 2026.",
    },
    units: {
      fin: "$0.99 per outcome; at least 50 a month with another helpdesk",
      zendesk: "$2.00 per automated resolution, pay-as-you-go",
      freddy: "$49 per 100 sessions",
      hubspot: "$0.50 per resolved conversation; needs a Professional or Enterprise plan",
      tidio: "$0.50 per conversation Lyro replies to",
      agentforce: "$0.10 per action (20 Flex Credits)",
    },
    notIncluded:
      "Not included: your helpdesk subscription, plan allowances, volume discounts and taxes. Fin also bills some handoffs and routings as outcomes, so its real cost can be higher.",
    sections: [
      {
        heading: "How the calculation works",
        text: "Resolved conversations are your monthly conversations times the share resolved without a human. Fin, Zendesk and HubSpot bill per resolution or outcome, Freddy per pack of 100 sessions, Tidio Lyro per conversation it replies to, and Agentforce per action. Each vendor's list price links to its pricing page below.",
      },
      {
        heading: "Why per-resolution bills grow",
        text: "When a vendor bills per resolution, every extra conversation the agent resolves adds to the bill. A one-time build has no per-resolution fee: you pay the AI provider for tokens and the automation platform for its plan, directly.",
      },
      {
        heading: "What a one-time build costs to run",
        text: "AI usage is billed per token by your AI provider. This calculator uses Claude Haiku 5.5 list prices for prompts up to 100,000 tokens: $0.10 per million input tokens and $0.50 per million output tokens. Add the automation platform: self-hosted n8n (free software, you pay for the server), n8n Cloud from €20/month or Make from $9/month, both billed annually.",
      },
    ],
    faqs: [
      {
        q: "Are these prices current?",
        a: "They are list prices as published on each vendor's pricing page in October 2026. Vendors change prices often, so check the linked pages before you buy.",
      },
      {
        q: "What counts as a resolution?",
        a: "Each vendor defines it differently. Fin bills per outcome, Zendesk per automated resolution, HubSpot per resolved conversation, and Freddy per session. Read each vendor's definition before comparing.",
      },
      {
        q: "Why are prices shown in my currency?",
        a: "Vendors publish these prices in US dollars. Outside the US version of this page, they are converted at the European Central Bank reference rate of 16 October 2026.",
      },
      {
        q: "Is a one-time build always cheaper?",
        a: "No. At low volumes a per-resolution agent can cost less. The calculator shows if and when a one-time build becomes cheaper at your volume.",
      },
    ],
  },
  whatsapp: {
    slug: "whatsapp-business-cost-calculator",
    navLabel: "WhatsApp Business cost",
    short: "Estimate your monthly WhatsApp API bill, including the new free service tier.",
    metaTitle: "WhatsApp Business API Cost Calculator 2026 | TascaLab",
    metaDescription:
      "Estimate your monthly WhatsApp Business Platform bill under Meta's per-message pricing, with the 1,000 free service messages per number from 1 October 2026.",
    h1: "WhatsApp Business API cost calculator",
    intro:
      "Since 1 October 2026, Meta charges WhatsApp service messages beyond 1,000 free per business number each month, at the market's utility rate. Enter your volumes and the rates from Meta's rate card for your customers' country.",
    inputs: {
      volumeTitle: "Messages per month",
      numbers: "Business phone numbers",
      service: "Service messages (free-form replies)",
      utility: "Utility templates",
      marketing: "Marketing templates",
      authentication: "Authentication templates",
      ratesTitle: "Rates per message",
      ratesHint: "Copy the rates for your customers' country from Meta's rate card in your billing currency.",
      rateCard: "Open Meta's rate cards",
      utilityRate: "Utility rate (also used for service messages)",
      marketingRate: "Marketing rate",
      authenticationRate: "Authentication rate",
    },
    results: {
      title: "Estimated monthly cost",
      freeService: "Free service messages used",
      billableService: "Billable service messages",
      service: "Service messages",
      utility: "Utility templates",
      marketing: "Marketing templates",
      authentication: "Authentication templates",
      total: "Total per month",
      enterRates: "Enter your rates to see the cost.",
    },
    notIncluded:
      "Not included: volume-tier discounts on utility and authentication messages, your WhatsApp provider's fees, and taxes. Messages in a free entry point window are not charged.",
    sections: [
      {
        heading: "What changed on 1 October 2026",
        text: "Free-form service messages, the replies you send inside the 24-hour customer service window, are no longer unlimited and free. Each business phone number gets 1,000 free service messages per month; after that, Meta charges them at the market's utility rate. Utility templates sent inside the window are now charged too.",
      },
      {
        heading: "How Meta bills messages",
        text: "Meta charges per delivered message. The rate depends on the message category (marketing, utility, authentication or service) and the recipient's country. Meta publishes rate cards in several currencies and may change prices only on the first day of a quarter.",
      },
      {
        heading: "What this calculator leaves out",
        text: "Utility and authentication messages have volume tiers that lower the rate at high volumes; they are not modelled here. Messages sent in the 72-hour free entry point window after a click-to-WhatsApp ad or Facebook Page button are free. Your WhatsApp provider may add its own fees.",
      },
    ],
    faqs: [
      {
        q: "Are WhatsApp service messages still free?",
        a: "Since 1 October 2026, each business phone number gets 1,000 free service messages per month. Meta charges from the 1,001st message at the market's utility rate.",
      },
      {
        q: "Why do I need to enter the rates?",
        a: "Rates depend on your customers' country and your billing currency. Meta publishes them in its rate cards; copy the ones that apply to you for an exact estimate.",
      },
      {
        q: "How often does Meta change WhatsApp prices?",
        a: "Meta says it may update pricing only on the first day of each quarter, so up to four times a year.",
      },
      {
        q: "Does this include my provider's fees?",
        a: "No. It covers Meta's per-message charges only. Your WhatsApp Business Solution Provider may charge its own fees.",
      },
    ],
  },
  sla: {
    slug: "sla-calculator",
    navLabel: "SLA calculator",
    short: "Work out SLA due times and first-reply times in business hours.",
    metaTitle: "SLA Calculator with Business Hours & Holidays | TascaLab",
    metaDescription:
      "Work out when a support SLA is due, or how much business time a first reply took, counting only your working hours, working days and holidays.",
    h1: "SLA calculator with business hours",
    intro:
      "SLA targets are usually counted in business hours, so a 4-hour target set on Friday afternoon can fall due on Monday. Enter a start time and your schedule to see the due time, or measure the business time between two moments.",
    modes: { due: "When is it due?", elapsed: "How long did it take?" },
    inputs: {
      received: "Ticket received",
      target: "SLA target",
      hours: "hours",
      minutes: "minutes",
      replied: "First reply sent",
      scheduleTitle: "Business hours",
      opens: "Opens",
      closes: "Closes",
      days: "Working days",
      dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      holidays: "Holidays",
      addHoliday: "Add",
      removeHoliday: "Remove {date}",
      noHolidays: "No holidays added.",
    },
    results: {
      dueAt: "Due",
      calendarTime: "Calendar time until due",
      businessTime: "Business time",
      elapsedCalendar: "Calendar time",
      withinTarget: "Within the {target} target",
      overTarget: "Over the {target} target",
      invalid: "Check the times and business hours.",
      duration: "{h} h {m} min",
      days: "{d} d {h} h {m} min",
    },
    sections: [
      {
        heading: "How business-hours SLAs are counted",
        text: "The SLA clock runs only during business hours on working days. When a ticket arrives outside those hours, the clock starts when the next working day opens. Holidays you add count as non-working days.",
      },
      {
        heading: "Time zones",
        text: "All times are treated as one time zone: the one your business hours are in. Enter the ticket times in that same time zone.",
      },
    ],
    faqs: [
      {
        q: "Does the calculator skip weekends?",
        a: "Yes. Only the working days you tick count. Saturday and Sunday are unticked by default.",
      },
      {
        q: "How do I handle public holidays?",
        a: "Add each holiday date. The calculator treats it as a non-working day.",
      },
      {
        q: "Is one business day eight hours?",
        a: "Only if your business hours are eight hours long. Enter your opening and closing times, then set the target in hours.",
      },
    ],
  },
};

export type ToolsDict = typeof tools;
export default tools;
