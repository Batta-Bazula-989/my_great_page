// UI and page text for the free tools under /tools. Other languages mirror this shape exactly.
// Vendor names, plan names and product names stay in English.

const tools = {
  menu: "Tools",
  allTools: "All tools",
  hub: {
    slug: "tools",
    metaTitle: "Free Lead Scoring & Support Calculators | TascaLab",
    metaDescription:
      "Free calculators: build and test a lead score, compare AI support agent costs, estimate WhatsApp Business API bills and work out SLA due times.",
    eyebrow: "Free tools",
    title: "Free tools for sales and support teams",
    intro: "Quick calculators built on published prices and plain maths. Free, no sign-up.",
    open: "Open tool",
  },
  common: {
    freeTool: "Free tool · no sign-up",
    howItWorks: "How it works",
    faqTitle: "Frequently asked questions",
    sources: "Sources",
    estimate: "Estimates only, not a quote.",
    max: "Maximum: {value}",
    min: "Minimum: {value}",
    perMonth: "/month",
    ctaTitle: "Want an exact number for your team?",
    ctaText: "Book a free Health Check: a 30-minute call, then a written report with the package and fixed price that fit.",
    ctaBook: "Book a Free Health Check",
    otherTools: "Other free tools",
  },
  leadScore: {
    slug: "lead-scoring-calculator",
    navLabel: "Lead scoring calculator",
    short: "Build a fit and engagement score, test it on a lead and copy the model.",
    metaTitle: "Lead Scoring Calculator: Fit & Engagement Model | TascaLab",
    metaDescription:
      "Free lead scoring calculator: build a fit and engagement score with HubSpot's limits and thresholds, test it on a lead and copy the model. No sign-up.",
    h1: "Lead scoring calculator",
    intro:
      "Build a points-based lead score the way HubSpot's lead scoring tool works: fit criteria for who the lead is, engagement criteria for what it does, each score capped at its limit and split into High, Medium and Low. Test it on a lead, check the model for mistakes, then copy it into your CRM.",
    inputs: {
      criteriaTitle: "Your criteria",
      criteriaHint:
        "Tick the criteria that apply to a lead you want to test. The examples are placeholders: replace every label and point value with your own.",
      label: "Criterion",
      score: "Score",
      points: "Points",
      applies: "Applies to the test lead",
      remove: "Remove {label}",
      add: "Add criterion",
      maxReached: "Up to {n} criteria.",
      settingsTitle: "Score settings",
      limit: "Score limit",
      limitOption: "{min} to {max}",
      high: "High from",
      medium: "Medium from",
      thresholdsHint:
        "Limits are HubSpot's options. The default thresholds follow HubSpot's own example: 70–100 High, 40–69 Medium, below 40 Low.",
    },
    scores: { fit: "Fit", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "Industry matches your ideal customer profile", score: "fit", points: 30, applies: true },
      { label: "Company size in your target range", score: "fit", points: 25, applies: true },
      { label: "Job title is a decision-maker", score: "fit", points: 25, applies: false },
      { label: "Based in a region you don't serve", score: "fit", points: -40, applies: false },
      { label: "Replied to outreach with interest", score: "engagement", points: 40, applies: true },
      { label: "Visited the pricing page", score: "engagement", points: 20, applies: true },
      { label: "Opened your last three emails", score: "engagement", points: 10, applies: false },
      { label: "Unsubscribed from your emails", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Your test lead",
      combined: "Combined label",
      combinedDesc: "{fit} fit, {engagement} engagement",
      range: "Possible range: {min} to {max}",
      checksTitle: "Before you build it",
      allGood: "No problems found in this model.",
      noCriteria: "{score}: add at least one criterion.",
      order: "{score}: Medium must be lower than High.",
      unreachable: "{score}: no lead can reach High. The most a lead can score is {max}.",
      capped: "{score}: positive points add up to {total}, but the score stops at {limit}.",
      copy: "Copy model as a table",
      copied: "Copied",
      copyFailed: "Couldn't copy. Select the criteria and copy them by hand.",
      tableHeads: { score: "Score", criterion: "Criterion", points: "Points", limit: "Limit", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "How the score is calculated",
        text: "Each criterion adds or subtracts points when it applies to a lead. Fit criteria describe who the lead is, such as industry, company size or role; engagement criteria describe what the lead does, such as replies, visits or opens. Each score stops at its limit, as HubSpot's lead scoring tool does, and the thresholds turn the number into High, Medium or Low. The combined label follows HubSpot's convention: the letter is the fit band (A high, C low) and the number the engagement band (1 high, 3 low), so a low-fit but highly engaged lead is C1.",
      },
      {
        heading: "Setting it up in HubSpot",
        text: "HubSpot's lead scoring tool needs Marketing Hub or Sales Hub Professional or Enterprise. Score limits run from -100 to 100 up to -10,000 to 10,000, with 100 as the default maximum. Inside a score you can add groups with their own limits, and all group limits count toward the score limit. For engagement, score decay can lower points every 1, 3, 6 or 12 months, each month counted as 30 days.",
      },
      {
        heading: "Setting it up in Attio",
        text: "Attio has no dedicated scoring tool. On the Pro, Enterprise and Ultra plans, a formula attribute can add up points with if() conditions, using the ?? operator to treat empty fields as 0. A formula that returns a number becomes a number attribute, recalculates automatically when the fields it uses change, and uses no workspace credits. On Free and Plus, keep the score in a number attribute that a workflow or the API fills in.",
      },
      {
        heading: "When you don't need a score",
        text: "If your team reads every new lead the same day, a score adds little. It starts to pay off when leads arrive faster than anyone can review them, or when the signals that matter most, such as an interested reply or a visit to your pricing page, live in tools your CRM doesn't see on its own.",
      },
    ],
    faqs: [
      {
        q: "Are the example points a recommendation?",
        a: "No. They are placeholders that show how the maths works. Replace every criterion and point value with your own. The only defaults taken from a vendor are HubSpot's score limits and its example thresholds.",
      },
      {
        q: "What do A1 and C3 mean?",
        a: "They are HubSpot's labels for combined scores. The letter is the fit band, from A (high fit) to C (low fit); the number is the engagement band, from 1 (high engagement) to 3 (low engagement).",
      },
      {
        q: "Can HubSpot build the score for me with AI?",
        a: "HubSpot's AI-built contact scores need Marketing Hub Enterprise and at least 50 contacts, 25 converted and 25 not converted, before a score can be generated.",
      },
      {
        q: "Does Attio have lead scoring?",
        a: "No dedicated scoring tool. On Pro, Enterprise and Ultra, a formula attribute can calculate a points-based score automatically; on other plans, a workflow or the API writes the score to a number attribute.",
      },
      {
        q: "Is anything I type stored?",
        a: "No. The score is calculated in your browser, and nothing you enter is sent anywhere.",
      },
    ],
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
      package: "{plan} price (one-time)",
      priceHint: "{plan} starts at {price}. Enter the fixed price from your Health Check report if you have one.",
      platform: "Automation platform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (€20/month, billed annually)",
        make: "Make Core ($9/month, billed annually)",
        selfHosted: "Self-hosted n8n (server cost not included)",
      },
      tokens: "AI tokens per conversation",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Illustrative defaults: no official source publishes a typical figure. Replace them with your bot's real numbers from your AI provider's usage dashboard.",
    },
    results: {
      title: "Estimated cost",
      vendor: "Vendor",
      monthly: "Per month",
      year: "12 months",
      yourBuild: "One-time build",
      buildLine: "{price} once + {monthly}/month running costs",
      payback: "Cheaper than {vendor} from month {months}",
      neverCheaper: "At this volume, the build is not cheaper than any vendor in 12 months.",
      cheapest: "Lowest vendor",
      currencyNote: "Vendor prices are USD list prices, converted at the ECB rate of 16 October 2026.",
      pricesAsOf: "Vendor list prices as of {date}.",
      empty: "Enter your AI conversations per month to compare costs.",
    },
    units: {
      fin: "$0.99 per outcome; with another helpdesk, a $49 monthly minimum that includes 50 outcomes",
      zendesk: "$2.00 per automated resolution, pay-as-you-go ($1.50 with a commitment)",
      freddy: "$49 per 100 sessions",
      hubspot: "$0.50 per resolved conversation (50 HubSpot Credits); needs a Professional or Enterprise plan",
      tidio: "Monthly packs from $39 for 50 to $700 for 1,000 conversations; above that, Lyro Connect from $0.50 per conversation",
      agentforce: "$0.10 per action (20 Flex Credits, $500 per 100,000)",
    },
    notIncluded:
      "Not included: your helpdesk subscription, plan allowances, volume discounts and taxes. Fin also bills Procedure handoffs (a Procedure you set up to end in a handoff) as outcomes, so its real cost can be higher. Zendesk is moving accounts to resolution tiers priced by its sales team.",
    sections: [
      {
        heading: "How the calculation works",
        text: "Resolved conversations are your monthly conversations times the share resolved without a human. Fin bills per outcome on top of a $49 monthly minimum, Zendesk and HubSpot per resolution, Freddy per pack of 100 sessions, Tidio Lyro in monthly packs of conversations it replies to, and Agentforce per action. Each vendor's list price links to its pricing page below.",
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
        a: "They are list prices as published on each vendor's official pricing pages, checked in November 2026. Vendors change prices often, so check the linked pages before you buy.",
      },
      {
        q: "What counts as a resolution?",
        a: "Each vendor defines it differently. Fin bills per outcome (a resolution, or a Procedure that ends in a handoff), Zendesk per automated resolution, HubSpot per conversation not handed to a person within 72 hours, Freddy per session and Tidio per conversation Lyro replies to. Read each vendor's definition before comparing.",
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
      "Not included: volume-tier discounts on utility and authentication messages, Meta Business Agent messages, your WhatsApp provider's fees, and taxes. Messages in a free entry point window are not charged.",
    sections: [
      {
        heading: "What changed on 1 October 2026",
        text: "Free-form service messages, the replies you send inside the 24-hour customer service window, are no longer unlimited and free. Each business phone number gets 1,000 free service messages per month; after that, Meta charges them at the market's utility rate. Utility templates sent inside the window are now charged too.",
      },
      {
        heading: "How Meta bills messages",
        text: "Meta charges per delivered message. The rate depends on the message category (marketing, utility, authentication or service) and the recipient's country; service messages cost the same list rate as utility and authentication messages in that market. A fifth category, Meta Business Agent messages from Meta's own AI agent, is billed per token instead. Meta publishes rate cards in 16 currencies and may change prices only on the first day of a quarter.",
      },
      {
        heading: "What this calculator leaves out",
        text: "Utility and authentication messages have volume tiers that lower the rate at high volumes; they are not modelled here. Messages are free in the free entry point window, which opens when you reply within 24 hours to someone who messaged you from a click-to-WhatsApp ad in WhatsApp's Android or iOS app, and can stay open for up to 7 days. Meta Business Agent messages ($2.00 per million tokens) and your WhatsApp provider's fees are not included.",
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
