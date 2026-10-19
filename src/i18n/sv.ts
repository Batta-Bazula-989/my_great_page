import type { Dictionary } from "./en";

const sv: Dictionary = {
  meta: {
    homeTitle: "AI-chattbottar, röstbottar & ärenderoutning för kundtjänst | TascaLab",
    homeDescription:
      "Frilansare: AI-chatt- och röstbottar, ärenderoutning i Zendesk/Freshdesk/Jira och automatiska rapporter i dina verktyg. Fastpris, gratis genomlysning (30 min).",
    noscriptHeading: "AI-automatisering av kundtjänst – chattbottar, röstbottar & ärenderoutning",
    noscriptText:
      "TascaLab bygger AI-chattbottar, röstbottar, ärenderoutning och automatiserad rapportering ovanpå Zendesk, Freshdesk, Jira och Slack. Mejla romanzakharenko.r@gmail.com för att boka en kostnadsfri genomlysning på 30 minuter.",
  },
  nav: {
    services: "Tjänster",
    fit: "Passar det?",
    whyMe: "Varför jag?",
    pricing: "Priser",
    reviews: "Omdömen",
    faq: "FAQ",
    resources: "Resurser",
    cta: "Boka kostnadsfri genomlysning",
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
    intro:
      "Jag kopplar AI till den helpdesk du redan använder – den besvarar återkommande frågor, skickar varje ärende till rätt kö och levererar de rapporter som ditt team i dag tar fram för hand. Färre manuella uppgifter, snabbare första svar, inget plattformsbyte.",
    ctaBook: "Boka kostnadsfri genomlysning",
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
          "Tar hand om första kontakten i meddelanden och inkommande samtal. Kvalificerar förfrågan, besvarar det den kan och lämnar över resten – på ett snyggt sätt. Ett filter framför ditt team, inte en ersättning för det.",
      },
      {
        title: "Ärenderoutning och kategorisering",
        description:
          "Varje ärende taggas, prioriteras och tilldelas i samma stund som det kommer in – utifrån vad det faktiskt står i det. Ingen manuell sortering, inga ärenden som blir liggande i fel kö.",
      },
      {
        title: "Rapportering",
        description:
          "De rapporter som ditt team tar fram manuellt varje vecka skapas och levereras automatiskt. Rätt format, rätt personer, rätt tid. Slut på att plocka ihop data.",
      },
      {
        title: "Skräddarsydd lösning",
        description:
          "Något specifikt som inte passar in i en mall? Jag tar fram omfattningen och bygger det. Går det att automatisera listar vi ut hur.",
      },
    ],
    previous: "Föregående tjänst",
    next: "Nästa tjänst",
    show: "Visa {title}",
  },
  fit: {
    eyebrow: "Passar det dig?",
    title: "Vem den här supportautomatiseringen passar för",
    goodTitle: "Passar bra",
    notTitle: "Passar inte",
    good: [
      "Ditt supportteam hanterar återkommande, förutsägbara uppgifter som dyker upp varenda dag",
      "Du använder Zendesk, Freshdesk, Jira eller liknande – och vill ha automatisering ovanpå, inte en ersättning",
      "Du vill ha tydlig rapportering utan att någon manuellt plockar fram data varje vecka",
      "Dina verktyg pratar inte med varandra, och därför faller ärenden mellan stolarna",
      "Du vill veta exakt vad du får innan du betalar för något",
    ],
    not: [
      "Du behöver en supportchef på heltid som sköter den dagliga driften",
      "Du vill att ett enda verktyg ska sköta allt – mottagning, lösning, eskalering, rapportering, precis allt",
      "Du planerar att byta ut hela din supportstack och börja om från noll",
      "Du tror att AI helt kan ersätta ditt supportteam",
    ],
  },
  whyMe: {
    eyebrow: "Varför jobba med mig",
    title: "Byggt av någon som själv har jobbat med support",
    items: [
      {
        title: "Jag har jobbat i support – inte bara runt omkring",
        description:
          "Jag har hanterat ärenden, tagit fram rapporter manuellt och brottats med arbetsflöden som hölls ihop av copy-paste och önsketänkande. Jag vet vad som faktiskt bromsar team, eftersom jag själv har stått på den sidan.",
      },
      {
        title: "Byggt för att hålla, inte för att imponera i en demo",
        description:
          "Varje automatisering har felhantering, tester av kantfall och övervakning. Om något oväntat händer hanteras felet kontrollerat och rätt person larmas – den slutar inte bara tyst att fungera.",
      },
      {
        title: "Du äger allt när vi är klara",
        description:
          "Fullständig dokumentation. Tydlig överlämning. Inga proprietära verktyg som bara jag har tillgång till. Ditt team kan underhålla och bygga vidare på det jag bygger utan att behöva ringa mig.",
      },
      {
        title: "Alltid rak kommunikation",
        description:
          "Jag säger till om något inte är värt att automatisera. Jag säger till om din budget inte räcker till omfattningen. Jag nickar inte bara och fakturerar dig för något som inte gör någon skillnad.",
      },
    ],
    previous: "Föregående skäl",
    next: "Nästa skäl",
    show: "Visa {title}",
  },
  pricing: {
    eyebrow: "Priser",
    title: "Paket för supportautomatisering till fast pris",
    intro:
      "Engångsavgifter per projekt. Du vet prisintervallet innan vi börjar – slutlig offert efter en kostnadsfri genomlysning.",
    oneTimeFee: "engångsavgift",
    cta: "Kom igång",
    // Same order as the plans in PricingSection; prices stay in USD.
    // Package names stay in English, as in every other language.
    plans: [
      {
        name: "Starter Chat Bot",
        price: "350 – 450 USD",
        description:
          "Hanterar enkla kundfrågor och FAQ i 1–2 kanaler. Perfekt för små företag som tar sina första steg med automatisering.",
        features: [
          "1–2 kanaler",
          "Besvarar FAQ, samlar in grundläggande uppgifter och hanterar vanliga förfrågningar automatiskt",
        ],
      },
      {
        name: "Voice Bot",
        price: "1 100 – 1 600 USD",
        description: "För inkommande telefonsamtal.",
        features: [
          "Fullständig röstagent som tar emot inkommande samtal med naturlig dialog, triage och smidig överlämning till ditt team",
        ],
      },
      {
        name: "Standard Chat Bot",
        price: "500 – 650 USD",
        description:
          "Avancerad chattbot med stöd för flera kanaler, smartare svar och bättre hantering av kundinteraktioner i stor skala.",
        features: [
          "3–5 kanaler",
          "Hanterar mer komplexa konversationer med smartare logik och smidigare överlämningar till ditt team",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        price: "600 – 950 USD",
        description: "Automatisk sortering och tilldelning av ärenden.",
        features: [
          "Taggar, kategoriserar och routar ärenden automatiskt till rätt team, så att inget missas och svarstiderna hålls korta.",
        ],
      },
      {
        name: "Automated Reports",
        price: "500 – 900 USD",
        description: "Schemalagda rapporter som skickas automatiskt.",
        features: [
          "Automatiska rapporter med dina viktigaste affärsnyckeltal, levererade via e-post eller Slack, så att du håller dig informerad utan manuellt arbete.",
        ],
      },
      {
        name: "Custom Automation",
        price: "1 200 – 2 000 USD",
        description:
          "Helt skräddarsydd automatisering byggd kring dina arbetsflöden, verktyg och unika affärskrav.",
        features: ["Helt skräddarsydd automatisering byggd kring dina arbetsflöden, verktyg och unika affärskrav"],
      },
    ],
    trust: ["Inga dolda avgifter", "30 dagars support efter leverans", "Grundläggande dokumentation ingår"],
  },
  reviews: {
    eyebrow: "Kundomdömen",
    title: "Verifierade omdömen på Upwork",
    intro:
      "Varje omdöme på min Upwork-profil kommer från ett riktigt, betalt uppdrag – så du kan se exakt hur tidigare projekt inom supportautomatisering har gått innan du bokar ett samtal.",
    readTitle: "Läs kundomdömen",
    readText:
      "Se betyg, Job Success Score och skriftlig feedback från team som jag har byggt chattbottar, ärenderoutning och rapportautomatiseringar åt.",
    readCta: "Visa min Upwork-profil",
    leaveTitle: "Har du jobbat med mig? Lämna ett omdöme",
    leaveText:
      "Om vi har slutfört ett projekt tillsammans hjälper ett kort omdöme på Upwork andra supportteam att fatta beslut med trygghet. Det tar två minuter – tack!",
    leaveCta: "Lämna feedback på Upwork",
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
        a: "Om det har ett API eller stöd för webhooks är svaret nästan säkert ja. Ta upp det under genomlysningen så bekräftar jag.",
      },
      {
        q: "Vad händer egentligen under den kostnadsfria genomlysningen?",
        a: "30 minuter. Vi går igenom din nuvarande uppsättning, var det skaver och var automatisering faktiskt skulle göra skillnad. Du går därifrån med 2–3 konkreta rekommendationer, en ungefärlig omfattning och ett prisintervall. Ingen säljpresentation. Ingen press.",
      },
      {
        q: "Hur lång tid tar ett typiskt projekt?",
        a: "De flesta lösningar tar 1–3 veckor, beroende på komplexitet och hur snabbt vi blir överens om kraven. Jag ger dig en realistisk tidsplan från början – inte en optimistisk.",
      },
    ],
  },
  contact: {
    eyebrow: "Låt oss prata",
    title: "Boka en kostnadsfri supportgenomlysning på 30 minuter",
    intro: "Boka ett samtal på 30 minuter. Vi tittar på vad som bromsar ditt team och tar reda på var vi ska börja.",
    cta: "Boka kostnadsfri genomlysning",
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
    title: "Boka en kostnadsfri supportanalys",
    description:
      "Lämna dina uppgifter så hör jag av mig för att boka ett samtal på 30 minuter. Inga förpliktelser, ingen säljpitch.",
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
    submit: "Boka kostnadsfri supportanalys",
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
      "Boka en kostnadsfri genomlysning på 30 minuter. Du får 2–3 konkreta rekommendationer, en ungefärlig omfattning och ett prisintervall – ingen säljpitch.",
    ctaBook: "Boka kostnadsfri genomlysning",
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
