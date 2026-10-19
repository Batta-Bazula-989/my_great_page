import type { Dictionary } from "./en";

const sv: Dictionary = {
  meta: {
    homeTitle: "AI-chattbottar, röstbottar & ärenderoutning för kundtjänst | TascaLab",
    homeDescription:
      "Kundtjänstautomatisering: AI-chattbottar, röstbottar, ärenderoutning och automatiska rapporter i Zendesk, Freshdesk och Jira. Fast pris, gratis Health Check.",
    noscriptHeading: "AI-automatisering av kundtjänst – chattbottar, röstbottar & ärenderoutning",
    noscriptText:
      "TascaLab bygger AI-chattbottar, röstbottar, ärenderoutning och automatiserad rapportering ovanpå Zendesk, Freshdesk, Jira och Slack. Mejla romanzakharenko.r@gmail.com för att boka en kostnadsfri Health Check.",
  },
  nav: {
    services: "Tjänster",
    fit: "Passar det?",
    whyMe: "Varför jag?",
    pricing: "Priser",
    reviews: "Omdömen",
    faq: "FAQ",
    resources: "Resurser",
    cta: "Kostnadsfri Health Check",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
    language: "Språk",
    logoAlt: "TascaLab-logotyp",
  },
  hero: {
    eyebrow: "Supportautomatisering som faktiskt håller",
    titleBefore: "AI-chattbottar, röstbottar & ",
    titleHighlight: "ärendeautomatisering",
    titleAfter: " för supportteam",
    intro: "Inbyggt i den helpdesk du redan använder. Fasta priser, inget plattformsbyte.",
    ctaBook: "Boka kostnadsfri Health Check",
    ctaUpwork: "Omdömen på Upwork",
    highlights: ["Fungerar med din nuvarande helpdesk", "Igång på 1–3 veckor", "30 dagars support ingår"],
    integratesWith: "Integreras med",
  },
  services: {
    eyebrow: "Vad jag gör",
    title: "Tjänster för automatisering av kundtjänst",
    items: [
      {
        title: "Chatt- och röstbottar för support",
        description:
          "Besvarar vanliga meddelanden och samtal och lämnar över resten till ditt team.",
      },
      {
        title: "Ärenderoutning och kategorisering",
        description:
          "Varje nytt ärende taggas, prioriteras och tilldelas automatiskt.",
      },
      {
        title: "Rapportering",
        description:
          "De rapporter som ditt team tar fram för hand, skickade automatiskt.",
      },
      {
        title: "Skräddarsydd lösning",
        description:
          "Något specifikt? Jag tar fram omfattningen och bygger det.",
      },
    ],
  },
  fit: {
    eyebrow: "Passar det dig?",
    title: "Vem den här supportautomatiseringen passar för",
    goodTitle: "Passar bra",
    notTitle: "Passar inte",
    good: [
      "Återkommande supportarbete varje dag",
      "Du använder Zendesk, Freshdesk, Jira eller liknande",
      "Rapporter som fortfarande tas fram för hand",
      "Verktyg som inte pratar med varandra",
    ],
    not: [
      "Du behöver en supportchef på heltid",
      "Du vill byta ut hela din supportstack",
      "Du förväntar dig att AI ska ersätta ditt team",
    ],
  },
  whyMe: {
    eyebrow: "Varför jobba med mig",
    title: "Byggt av någon som själv har jobbat med support",
    items: [
      {
        title: "Jag har jobbat i support",
        description: "Jag har hanterat ärenden och tagit fram rapporter för hand, så jag vet vad som bromsar team.",
      },
      {
        title: "Byggt för att hålla",
        description: "Felhantering, tester av kantfall och övervakning i allt jag bygger.",
      },
      {
        title: "Du äger allt",
        description: "Fullständig dokumentation och överlämning. Ingen inlåsning.",
      },
      {
        title: "Raka svar",
        description: "Om något inte är värt att automatisera säger jag det.",
      },
    ],
  },
  pricing: {
    eyebrow: "Priser",
    title: "Paket för supportautomatisering till fast pris",
    intro: "Ett pris, betalas en gång. Inget löpande avtal.",
    oneTimeFee: "engångspris",
    cta: "Kom igång",
    from: "från {price}",
    delivery: "Leverans",
    deliveryTime: "1–3 veckor",
    included: "Det här ingår",
    running: "Driftskostnader per månad",
    runningNote: "Faktureras av verktygsleverantörerna. Ingår inte i paketpriset.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Besvarar vanliga frågor i 1–2 kanaler och lämnar över resten till ditt team.",
        included: [
          "1–2 kanaler: webbplats, WhatsApp, Telegram, Messenger eller Instagram",
          "Besvarar vanliga frågor och samlar in kunduppgifter",
          "Lämnar över resten till ditt team",
        ],
        running: [
          "AI-användning, som din AI-leverantör fakturerar per token, t.ex. Claude Haiku 5.5 från 0,10 / 0,50 USD per miljon input-/output-tokens*",
          "Automatiseringsplattform: n8n i egen drift (gratis programvara; du betalar för servern), n8n Cloud från 20 EUR/månad eller Make från 9 USD/månad (båda faktureras årsvis)",
          "Endast för WhatsApp: från den 1 oktober 2026 är 1 000 servicemeddelanden per månad och företagstelefonnummer gratis, sedan gäller Metas pris per meddelande",
        ],
      },
      {
        name: "Voice Bot",
        description: "Besvarar inkommande samtal, gör triage och lämnar över till ditt team.",
        included: [
          "Besvarar inkommande samtal",
          "Triage och smidig överlämning till ditt team",
          "Kopplad till din helpdesk",
        ],
        running: [
          "Minutavgifter till röstplattformen, t.ex. Retell AI från 0,07 USD per minut, plus AI-modellen och telefonlinjen",
          "Ett telefonnummer från din telefonioperatör",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Hanterar mer komplexa konversationer i 3–5 kanaler.",
        included: [
          "3–5 kanaler",
          "Konversationer i flera steg",
          "Överlämning till ditt team, kopplad till din helpdesk",
        ],
        running: [
          "AI-användning, som din AI-leverantör fakturerar per token, t.ex. Claude Haiku 5.5 från 0,10 / 0,50 USD per miljon input-/output-tokens*",
          "Automatiseringsplattform: n8n i egen drift (gratis programvara; du betalar för servern), n8n Cloud från 20 EUR/månad eller Make från 9 USD/månad (båda faktureras årsvis)",
          "Endast för WhatsApp: från den 1 oktober 2026 är 1 000 servicemeddelanden per månad och företagstelefonnummer gratis, sedan gäller Metas pris per meddelande",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Varje ärende taggas, prioriteras och tilldelas i samma stund som det kommer in.",
        included: [
          "AI sorterar varje nytt ärende efter ämne och brådska",
          "Sätter taggar och prioritet, tilldelar rätt grupp",
          "Zendesk, Freshdesk eller Jira Service Management",
        ],
        running: [
          "AI-klassificering, som din AI-leverantör fakturerar per token, t.ex. Claude Haiku 5.5 från 0,10 / 0,50 USD per miljon input-/output-tokens*",
          "Automatiseringsplattform: n8n i egen drift (gratis programvara; du betalar för servern), n8n Cloud från 20 EUR/månad eller Make från 9 USD/månad (båda faktureras årsvis)",
        ],
      },
      {
        name: "Automated Reports",
        description: "De rapporter som ditt team tar fram för hand, skickade automatiskt.",
        included: [
          "Viktiga supportnyckeltal från din helpdesk",
          "Skickas schemalagt till e-post eller Slack",
        ],
        running: [
          "Automatiseringsplattform: n8n i egen drift (gratis programvara; du betalar för servern), n8n Cloud från 20 EUR/månad eller Make från 9 USD/månad (båda faktureras årsvis)",
          "Inga AI-avgifter, om du inte vill ha sammanfattningar skrivna av AI",
        ],
      },
      {
        name: "Custom Automation",
        description: "Byggd kring dina arbetsflöden, verktyg och krav.",
        included: [
          "Omfattningen tas fram i din kostnadsfria Health Check",
          "Fast pris som vi enas om innan arbetet börjar",
          "Alla verktyg med ett API eller webhooks",
        ],
        running: ["Beror på vilka verktyg som ingår; uppskattas i rapporten från din Health Check"],
      },
    ],
    footnote:
      "* Anthropics listpriser (oktober 2026) för promptar på upp till 100 000 tokens; längre promptar kostar 0,50 / 2,50 USD. Andra leverantörer och modeller prissätts annorlunda, och leverantörerna kan ändra sina priser.",
    allPackages: "Alla paket: 30 dagars support efter leverans och grundläggande dokumentation.",
    healthCheck: {
      title: "Kostnadsfri Health Check",
      text: "Ett samtal på 30 minuter, sedan en skriftlig rapport: vad du ska automatisera först, vilket paket som passar och vad det kostar.",
      cta: "Boka din Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "Dina data",
    title: "Dina data och GDPR",
    intro: "Du väljer var din automatisering körs.",
    options: [
      {
        title: "I dina egna konton (standard)",
        points: [
          "Körs i dina egna konton för helpdesk, automatisering och AI",
          "Kunddata stannar i system som du kontrollerar",
          "Du äger allt och bestämmer över min åtkomst",
        ],
      },
      {
        title: "Driftas av mig, med PUB-avtal",
        points: [
          "Personuppgiftsbiträdesavtal (PUB-avtal) enligt artikel 28 i GDPR tecknas innan några personuppgifter behandlas",
          "Underbiträden anlitas bara med ditt skriftliga godkännande",
          "Vid avslut raderas eller återlämnas uppgifterna, enligt ditt val",
        ],
      },
    ],
    note: "Det här beskriver hur projekten sätts upp. Det är inte juridisk rådgivning.",
  },
  reviews: {
    eyebrow: "Kundomdömen",
    title: "Verifierade omdömen på Upwork",
    intro: "Från betalda uppdrag på Upwork.",
    leaveCta: "Har du jobbat med mig? Lämna ett omdöme",
    quoted: "Omdömen citerade ordagrant från min Upwork-profil.",
    verify: "Kontrollera på Upwork",
    stars: "{rating} av 5 stjärnor",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Vanliga frågor",
    items: [
      {
        q: "Måste jag byta supportverktyg?",
        a: "Nej. Jag arbetar med det du redan använder – Zendesk, Freshdesk, Jira, Slack, interna verktyg. Målet är att koppla ihop och förbättra det du har, inte att ersätta det.",
      },
      {
        q: "Vad händer om något slutar fungera efter lanseringen?",
        a: "Varje projekt inkluderar 30 dagars support efter lanseringen. Om något slutar fungera under den perioden fixar jag det. Jag bygger på standardintegrationer – API:er, webhooks, Make/n8n – inte sköra specialhack som bara fungerar i en enda miljö.",
      },
      {
        q: "Kan mitt team underhålla lösningen när du är klar?",
        a: "Ja. Jag dokumenterar allt tydligt – logiken, flödet, kantfallen. Du är inte inlåst. Löpande support finns, men är valfri.",
      },
      {
        q: "Kan du integrera ett specifikt verktyg?",
        a: "Om det har ett API eller stöd för webhooks är svaret nästan säkert ja. Ta upp det i din Health Check så bekräftar jag.",
      },
      {
        q: "Vad händer egentligen under en kostnadsfri Health Check?",
        a: "Ett samtal på 30 minuter om din nuvarande uppsättning, var det skaver och var automatisering faktiskt skulle göra skillnad. Efteråt får du en skriftlig rapport med 2–3 konkreta rekommendationer, det paket och fasta pris som passar och de uppskattade driftskostnaderna per månad. Ingen säljpresentation. Ingen press.",
      },
      {
        q: "Hur lång tid tar ett typiskt projekt?",
        a: "De flesta lösningar tar 1–3 veckor, beroende på komplexitet och hur snabbt vi blir överens om kraven. Jag ger dig en realistisk tidsplan från början – inte en optimistisk.",
      },
    ],
  },
  contact: {
    eyebrow: "Låt oss prata",
    title: "Få en kostnadsfri Health Check av din support",
    intro: "Ett samtal på 30 minuter, sedan en skriftlig rapport.",
    cta: "Boka kostnadsfri Health Check",
    linkedin: "Kontakta mig på LinkedIn",
    email: "E-post",
    upwork: "Omdömen på Upwork",
  },
  footer: {
    resourcesNav: "Resurser",
    allResources: "Alla resurser",
    upworkReviews: "Omdömen på Upwork",
    privacy: "Integritetspolicy",
    terms: "Användarvillkor",
  },
  categories: {
    services: { label: "Tjänster", blurb: "Det som byggs: bottar, routning och rapportering." },
    helpdesks: { label: "Efter helpdesk", blurb: "Automatisering i de verktyg ditt team redan använder." },
    channels: { label: "Efter kanal", blurb: "Supportbottar för de kanaler dina kunder skriver i." },
    basics: { label: "Grunderna", blurb: "Definitioner, nyckeltal och hur överlämningar fungerar." },
    guides: { label: "Guider & regelefterlevnad", blurb: "Verktygsjämförelser och EU-regler för supportbottar." },
  },
  cookie: {
    text: "Vi använder cookies för analys och annonsmätning för att förstå hur besökare hittar och använder webbplatsen.",
    privacy: "Integritetspolicy",
    decline: "Avböj",
    accept: "Acceptera",
  },
  booking: {
    title: "Boka en kostnadsfri Health Check",
    description:
      "Lämna dina uppgifter så hör jag av mig för att boka ett samtal på 30 minuter. Efteråt får du en skriftlig rapport. Inga förpliktelser, ingen säljpitch.",
    fullName: "Fullständigt namn",
    fullNamePlaceholder: "Anna Andersson",
    email: "Jobbmejl",
    emailPlaceholder: "anna@foretaget.se",
    company: "Företagsnamn",
    companyPlaceholder: "Exempel AB",
    meetingMethod: "Önskat mötessätt",
    methodPhone: "Telefon",
    phone: "Telefonnummer",
    phonePlaceholder: "70 123 45 67",
    searchCountry: "Sök land eller landsnummer...",
    noCountry: "Inget land hittades.",
    telegram: "Telegram-länk eller användarnamn",
    telegramPlaceholder: "https://t.me/anvandarnamn eller @anvandarnamn",
    submitCalendar: "Fortsätt till kalendern",
    submitting: "Skickar...",
    submit: "Boka kostnadsfri Health Check",
    sendFailed: "Förfrågan kunde inte skickas",
    networkError: "Nätverksfel eller servern går inte att nå.",
    sent: "Förfrågan skickad! Jag hör av mig inom 24 timmar.",
    errors: {
      nameRequired: "Fullständigt namn krävs",
      nameShort: "Fullständigt namn måste vara minst 2 tecken",
      nameLong: "Fullständigt namn måste vara kortare än 50 tecken",
      nameChars: "Fullständigt namn får bara innehålla bokstäver, mellanslag, bindestreck och apostrofer",
      emailRequired: "Jobbmejl krävs",
      emailInvalid: "Ange en giltig e-postadress",
      companyLength: "Företagsnamnet måste vara mellan 2 och 50 tecken",
      phoneRequired: "Telefonnummer krävs",
      phoneChars: "Använd bara siffror, mellanslag, punkter, bindestreck och parenteser",
      phoneDigits: "Telefonnumret måste ha 6–15 siffror",
      telegramRequired: "Telegram-länk eller användarnamn krävs",
      telegramInvalid:
        "Ange en giltig Telegram-länk (t.ex. https://t.me/anvandarnamn) eller ett giltigt användarnamn (t.ex. @anvandarnamn)",
    },
  },
  seo: {
    home: "Startsida",
    byline: "Av Roman Zakharenko",
    factsChecked: "Faktagranskad",
    atAGlance: "I korthet",
    faqTitle: "Vanliga frågor",
    faqShort: "FAQ",
    ctaTitle: "Vill du ha det här på plats i ditt team?",
    ctaText:
      "Boka en kostnadsfri Health Check: ett samtal på 30 minuter och en skriftlig rapport med 2–3 konkreta rekommendationer, ett fast pris och uppskattade driftskostnader. Ingen säljpitch.",
    ctaBook: "Boka kostnadsfri Health Check",
    ctaUpwork: "Omdömen på Upwork",
    sources: "Källor",
    onThisPage: "På den här sidan",
    related: "Relaterat",
  },
  resources: {
    metaTitle: "Resurser för automatisering av kundtjänst | TascaLab",
    metaDescription:
      "Guider om AI-chattbottar, ärenderoutning, automatisering i Zendesk, Freshdesk och Jira, WhatsApp- och Telegram-bottar, supportnyckeltal, SLA:er och EU-regler.",
    eyebrow: "Resurser",
    title: "Resurser för automatisering av kundtjänst",
    intro:
      "Faktagranskade guider om supportbottar, ärenderoutning, helpdesk-automatisering, supportnyckeltal och de EU-regler som gäller för dem. Varje sida listar de officiella källor den bygger på.",
    readGuide: "Läs guiden",
  },
  notFound: {
    title: "Sidan hittades inte",
    text: "Den här sidan finns inte eller har flyttats.",
    back: "Tillbaka till startsidan",
  },
};

export default sv;
