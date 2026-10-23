import type { Dictionary } from "./en";
import tools from "./tools/nl";

const nl: Dictionary = {
  meta: {
    homeTitle: "AI-chatbots, voicebots & ticketautomatisering | TascaLab",
    homeDescription:
      "Supportautomatisering: AI-chatbots, voicebots, ticketroutering en automatische rapportages voor Zendesk, Freshdesk en Jira. Vaste prijzen, gratis Health Check.",
  },
  nav: {
    services: "Wat ik doe",
    whyMe: "Waarom ik?",
    pricing: "Prijzen",
    reviews: "Reviews",
    faq: "FAQ",
    resources: "Gidsen",
    cta: "Gratis Health Check",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    language: "Taal",
    logoAlt: "Logo van TascaLab",
    skipToContent: "Ga naar de inhoud",
  },
  hero: {
    eyebrow: "Supportautomatisering die echt standhoudt",
    titleBefore: "AI-chatbots, voicebots & ",
    titleHighlight: "ticketautomatisering",
    titleAfter: " voor supportteams",
    intro: "Ik ben Roman. Ik bouw ze zelf, voor een vaste prijs vanaf {price}, één keer betaald.",
    callNote: "Gratis Health Check: een gesprek van 30 minuten met mij, daarna een schriftelijk rapport.",
    ctaBook: "Plan een gratis Health Check",
    ctaUpwork: "Reviews op Upwork",
    highlights: ["Werkt met je huidige helpdesk", "Live in 1–3 weken", "30 dagen ondersteuning inbegrepen"],
    integratesWith: "Integreert met",
  },
  services: {
    eyebrow: "Wat ik doe",
    title: "Diensten voor klantenservice-automatisering",
    items: [
      {
        title: "Chat- en voicebots voor support",
        description:
          "Beantwoordt veelvoorkomende berichten en telefoontjes en geeft de rest door aan je team.",
      },
      {
        title: "Ticketroutering & categorisering",
        description:
          "Elk nieuw ticket krijgt automatisch tags, een prioriteit en een behandelaar.",
      },
      {
        title: "Rapportages",
        description:
          "De rapportages die je team nu met de hand maakt, automatisch verstuurd.",
      },
      {
        title: "Maatwerkoplossing",
        description:
          "Iets specifieks? Ik breng het in kaart en bouw het.",
      },
    ],
  },
  process: {
    eyebrow: "Zo werkt het",
    title: "Van eerste gesprek tot werkende automatisering",
    steps: [
      {
        title: "Gratis Health Check",
        description: "Een gesprek van 30 minuten over je opzet en waar automatisering zou helpen.",
      },
      {
        title: "Schriftelijk rapport",
        description: "2–3 aanbevelingen, het pakket dat past en de vaste prijs ervan.",
      },
      {
        title: "Vaste prijs afgesproken",
        description: "Afgesproken voordat het werk begint. Eén keer betaald, geen abonnement.",
      },
      {
        title: "Gebouwd in 1–3 weken",
        description: "Ingebouwd in je helpdesk en draaiend in je eigen accounts.",
      },
      {
        title: "30 dagen ondersteuning",
        description: "Gaat er na de livegang iets kapot, dan los ik het op.",
      },
    ],
  },
  fit: {
    eyebrow: "Is dit een match?",
    title: "Voor wie deze supportautomatisering is",
    goodTitle: "Goede match",
    notTitle: "Geen goede match",
    good: [
      "Elke dag repetitief supportwerk",
      "Je gebruikt Zendesk, Freshdesk, Jira of iets vergelijkbaars",
      "Rapportages die nog met de hand worden gemaakt",
      "Tools die niet met elkaar praten",
    ],
    not: [
      "Je hebt een fulltime supportmanager nodig",
      "Je wilt je hele supportstack vervangen",
      "Je verwacht dat AI je team vervangt",
    ],
  },
  whyMe: {
    eyebrow: "Waarom met mij werken",
    title: "Gebouwd door iemand die zelf in support heeft gewerkt",
    role: "Specialist in AI-automatisering",
    linkedin: "Mijn achtergrond op LinkedIn",
    items: [
      {
        title: "Ik heb in support gewerkt",
        description: "Ik heb tickets afgehandeld en rapportages met de hand gemaakt, dus ik weet wat teams vertraagt.",
      },
      {
        title: "Gebouwd om stand te houden",
        description: "Foutafhandeling, tests op randgevallen en monitoring in alles wat ik bouw.",
      },
      {
        title: "Alles is van jou",
        description: "Volledige documentatie en overdracht. Je zit nergens aan vast.",
      },
      {
        title: "Eerlijke antwoorden",
        description: "Is iets het automatiseren niet waard, dan zeg ik dat.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prijzen",
    title: "Pakketten voor supportautomatisering tegen een vaste prijs",
    intro: "Eén prijs, één keer betaald. Geen abonnement.",
    oneTimeFee: "eenmalig",
    cta: "Vraag ernaar in een Health Check",
    from: "vanaf {price}",
    delivery: "Oplevering",
    deliveryTime: "1–3 weken",
    included: "Wat er inbegrepen is",
    groups: {
      chat: "Chat- en voicebots",
      tickets: "Tickets & rapportages",
      custom: "Maatwerk",
    },
    running: "Lopende kosten per maand",
    showRunning: "Toon lopende kosten per maand",
    hideRunning: "Verberg lopende kosten per maand",
    runningNote: "Gefactureerd door de aanbieders van de tools. Niet inbegrepen in de pakketprijs.",
    estimate: "Schat je eigen kosten met mijn gratis calculators:",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Beantwoordt veelgestelde vragen op 1–2 kanalen en geeft de rest door aan je team.",
        included: [
          "1–2 kanalen: website, WhatsApp, Telegram, Messenger of Instagram",
          "Beantwoordt FAQ's en verzamelt klantgegevens",
          "Geeft de rest door aan je team",
        ],
        running: [
          "AI-gebruik, per token gefactureerd door je AI-aanbieder, bijv. Claude Haiku 5.5 vanaf $ 0,10 / $ 0,50 per miljoen input-/outputtokens*",
          "Automatiseringsplatform: n8n self-hosted (gratis software; de server betaal je wel), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand (beide jaarlijks gefactureerd)",
          "Alleen bij WhatsApp: vanaf 1 oktober 2026 zijn 1.000 serviceberichten per maand per zakelijk nummer gratis, daarna geldt het tarief per bericht van Meta",
        ],
      },
      {
        name: "Voice Bot",
        description: "Neemt inkomende gesprekken aan, doet de triage en draagt ze over aan je team.",
        included: [
          "Neemt inkomende gesprekken aan",
          "Triage en nette overdracht aan je team",
          "Gekoppeld aan je helpdesk",
        ],
        running: [
          "Kosten per minuut van het voiceplatform, bijv. Retell AI vanaf $ 0,07 per minuut, plus het AI-model en de telefoonlijn",
          "Een telefoonnummer van je telefonieaanbieder",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Handelt complexere gesprekken af op 3–5 kanalen.",
        included: [
          "3–5 kanalen",
          "Gesprekken in meerdere stappen",
          "Overdracht aan je team, gekoppeld aan je helpdesk",
        ],
        running: [
          "AI-gebruik, per token gefactureerd door je AI-aanbieder, bijv. Claude Haiku 5.5 vanaf $ 0,10 / $ 0,50 per miljoen input-/outputtokens*",
          "Automatiseringsplatform: n8n self-hosted (gratis software; de server betaal je wel), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand (beide jaarlijks gefactureerd)",
          "Alleen bij WhatsApp: vanaf 1 oktober 2026 zijn 1.000 serviceberichten per maand per zakelijk nummer gratis, daarna geldt het tarief per bericht van Meta",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Elk ticket krijgt direct bij binnenkomst tags, een prioriteit en een behandelaar.",
        included: [
          "AI sorteert elk nieuw ticket op onderwerp en urgentie",
          "Zet tags en prioriteit en wijst de juiste groep toe",
          "Zendesk, Freshdesk of Jira Service Management",
        ],
        running: [
          "AI-classificatie, per token gefactureerd door je AI-aanbieder, bijv. Claude Haiku 5.5 vanaf $ 0,10 / $ 0,50 per miljoen input-/outputtokens*",
          "Automatiseringsplatform: n8n self-hosted (gratis software; de server betaal je wel), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand (beide jaarlijks gefactureerd)",
        ],
      },
      {
        name: "Automated Reports",
        description: "De rapportages die je team nu met de hand maakt, automatisch verstuurd.",
        included: [
          "Belangrijkste supportmetrics uit je helpdesk",
          "Volgens schema verstuurd naar e-mail of Slack",
        ],
        running: [
          "Automatiseringsplatform: n8n self-hosted (gratis software; de server betaal je wel), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand (beide jaarlijks gefactureerd)",
          "Geen AI-kosten, tenzij je samenvattingen door AI wilt laten schrijven",
        ],
      },
      {
        name: "Custom Automation",
        description: "Gebouwd rond je workflows, tools en eisen.",
        included: [
          "Afgebakend in je gratis Health Check",
          "Vaste prijs afgesproken voordat het werk begint",
          "Elke tool met een API of webhooks",
        ],
        running: ["Hangt af van de gebruikte tools; geschat in je Health Check-rapport"],
      },
    ],
    footnote:
      "* Lijstprijzen van Anthropic (oktober 2026) voor prompts tot 100.000 tokens; langere prompts kosten $ 0,50 / $ 2,50. Andere aanbieders en modellen hebben andere prijzen, en aanbieders kunnen hun prijzen wijzigen.",
    allPackages: "Elk pakket: 30 dagen ondersteuning na oplevering en basisdocumentatie.",
    healthCheck: {
      title: "Gratis Health Check",
      text: "Een gesprek van 30 minuten, daarna een schriftelijk rapport: wat je het eerst automatiseert, welk pakket past en wat het kost.",
      cta: "Plan je Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "Je gegevens",
    title: "Je gegevens en de AVG",
    intro: "Jij kiest waar je automatisering draait.",
    options: [
      {
        title: "In je eigen accounts (standaard)",
        points: [
          "Draait in je eigen accounts voor helpdesk, automatisering en AI",
          "Klantgegevens blijven in systemen die jij beheert",
          "Alles is van jou en jij bepaalt welke toegang ik heb",
        ],
      },
      {
        title: "Gehost door mij, met een verwerkersovereenkomst",
        points: [
          "Verwerkersovereenkomst (art. 28 AVG) getekend voordat er persoonsgegevens worden verwerkt",
          "Subverwerkers alleen met je schriftelijke toestemming",
          "Na afloop worden de gegevens verwijderd of teruggegeven, jij kiest",
        ],
      },
    ],
    note: "Dit beschrijft hoe projecten worden opgezet. Het is geen juridisch advies.",
  },
  reviews: {
    eyebrow: "Feedback van klanten",
    title: "Geverifieerde reviews op Upwork",
    intro: "Van betaalde opdrachten op Upwork.",
    quoted: "Beoordelingen woordelijk overgenomen van mijn Upwork-profiel.",
    verify: "Controleer op Upwork",
    stars: "{rating} van 5 sterren",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen",
    items: [
      {
        q: "Moet ik overstappen op andere supporttools?",
        a: "Nee. Ik werk met wat je al gebruikt: Zendesk, Freshdesk, Jira, Slack, interne tools. Het doel is om te koppelen en te verbeteren wat je hebt, niet om het te vervangen.",
      },
      {
        q: "Wat als er na de livegang iets kapotgaat?",
        a: "Elk project omvat 30 dagen ondersteuning na de livegang. Gaat er in die periode iets kapot, dan los ik het op. Ik bouw op standaardintegraties (API's, webhooks, Make/n8n), niet op kwetsbare maatwerkhacks die maar in één omgeving werken.",
      },
      {
        q: "Kan mijn team dit onderhouden als jij klaar bent?",
        a: "Ja. Ik documenteer alles duidelijk: de logica, de flow, de randgevallen. Je zit nergens aan vast. Doorlopende ondersteuning is beschikbaar, maar niet verplicht.",
      },
      {
        q: "Kun je een specifieke tool integreren?",
        a: "Als die een API of webhooks ondersteunt, vrijwel zeker. Noem het in je Health Check, dan bevestig ik het.",
      },
      {
        q: "Wat gebeurt er precies tijdens de gratis Health Check?",
        a: "Een gesprek van 30 minuten over je huidige opzet, waar het schuurt en waar automatisering echt verschil zou maken. Daarna krijg je een schriftelijk rapport met 2–3 concrete aanbevelingen, het pakket en de vaste prijs die passen, en de geschatte lopende kosten per maand. Geen salespresentatie. Geen druk.",
      },
      {
        q: "Hoe lang duurt een gemiddeld project?",
        a: "De meeste projecten duren 1–3 weken, afhankelijk van de complexiteit en hoe snel we het eens worden over de eisen. Ik geef je vooraf een realistische planning, geen optimistische.",
      },
    ],
  },
  contact: {
    eyebrow: "Laten we praten",
    title: "Vraag een gratis Health Check van je support aan",
    intro: "Een gesprek van 30 minuten, daarna een schriftelijk rapport.",
    cta: "Plan een gratis Health Check",
    linkedin: "Connect op LinkedIn",
    email: "E-mail",
    upwork: "Reviews op Upwork",
  },
  footer: {
    resourcesNav: "Gidsen",
    allResources: "Alle gidsen",
    upworkReviews: "Reviews op Upwork",
    privacy: "Privacybeleid",
    terms: "Servicevoorwaarden",
  },
  categories: {
    services: { label: "Diensten", blurb: "Wat er gebouwd wordt: bots, routering en rapportages." },
    helpdesks: { label: "Per helpdesk", blurb: "Automatisering in de tools die je team al gebruikt." },
    channels: { label: "Per kanaal", blurb: "Supportbots voor de kanalen waarlangs je klanten je berichten sturen." },
    basics: { label: "De basis", blurb: "Definities, metrics en hoe overdrachten werken." },
    guides: { label: "Gidsen & compliance", blurb: "Vergelijkingen van tools en EU-regels voor supportbots." },
  },
  cookie: {
    text: "Ik gebruik cookies voor analyse en advertentiemeting, zodat ik begrijp hoe bezoekers deze site vinden en gebruiken.",
    privacy: "Privacybeleid",
    decline: "Weigeren",
    accept: "Accepteren",
  },
  booking: {
    title: "Plan een gratis Health Check",
    description: "Een gesprek van 30 minuten met mij, Roman, daarna een schriftelijk rapport. Geen verplichtingen, geen verkooppraatje.",
    about: "Onderwerp: {topic}",
    close: "Sluiten",
    fullName: "Volledige naam",
    fullNamePlaceholder: "Sanne de Vries",
    email: "Zakelijk e-mailadres",
    emailPlaceholder: "sanne@bedrijf.nl",
    company: "Bedrijfsnaam",
    companyPlaceholder: "Voorbeeld B.V.",
    meetingMethod: "Voorkeur voor gesprek via",
    methodPhone: "Telefoon",
    phone: "Telefoonnummer",
    phonePlaceholder: "6 12345678",
    searchCountry: "Zoek land of landcode...",
    noCountry: "Geen land gevonden.",
    telegram: "Telegram-link of gebruikersnaam",
    telegramPlaceholder: "https://t.me/gebruikersnaam of @gebruikersnaam",
    submitCalendar: "Verder naar agenda",
    submitting: "Bezig met versturen…",
    submit: "Plan gratis Health Check",
    nextCalendar: "Daarna kies je een tijd in mijn agenda.",
    nextContact: "Ik neem binnen 24 uur contact met je op om een tijd af te spreken.",
    sendFailed: "Je aanvraag kon niet worden verstuurd",
    networkError: "Probeer het zo nog eens, of neem direct contact met me op:",
    sentTitle: "Aanvraag verstuurd",
    sentCalendar: "Kies nu in mijn agenda een tijd die je uitkomt.",
    openCalendar: "Open mijn agenda",
    sent: "Ik laat binnen 24 uur van me horen om een tijd af te spreken.",
    errors: {
      nameRequired: "Volledige naam is verplicht",
      nameShort: "Volledige naam moet minstens 2 tekens lang zijn",
      nameLong: "Volledige naam moet korter zijn dan 50 tekens",
      nameChars: "Volledige naam mag alleen letters, spaties, punten, koppeltekens en apostrofs bevatten",
      emailRequired: "Zakelijk e-mailadres is verplicht",
      emailInvalid: "Vul een geldig e-mailadres in",
      companyLength: "Bedrijfsnaam moet tussen 2 en 50 tekens lang zijn",
      phoneRequired: "Telefoonnummer is verplicht",
      phoneChars: "Gebruik alleen cijfers, spaties, punten, streepjes en haakjes",
      phoneDigits: "Telefoonnummer moet 6–15 cijfers bevatten",
      telegramRequired: "Telegram-link of gebruikersnaam is verplicht",
      telegramInvalid:
        "Vul een geldige Telegram-link (bijv. https://t.me/gebruikersnaam) of gebruikersnaam (bijv. @gebruikersnaam) in",
    },
  },
  seo: {
    home: "Home",
    byline: "Door Roman Zakharenko",
    factsChecked: "Feiten gecontroleerd",
    atAGlance: "In één oogopslag",
    faqTitle: "Veelgestelde vragen",
    faqShort: "FAQ",
    ctaTitle: "Wil je dit laten opzetten voor je team?",
    ctaText:
      "Plan een gratis Health Check: een gesprek van 30 minuten en een schriftelijk rapport met 2–3 concrete aanbevelingen, een vaste prijs en de geschatte lopende kosten. Geen verkooppraatje.",
    ctaBook: "Plan een gratis Health Check",
    ctaUpwork: "Reviews op Upwork",
    sources: "Bronnen",
    onThisPage: "Op deze pagina",
    related: "Gerelateerd",
  },
  resources: {
    metaTitle: "Gidsen over klantenservice automatiseren | TascaLab",
    metaDescription:
      "Gidsen over AI-supportchatbots, ticketroutering, automatisering in Zendesk, Freshdesk en Jira, WhatsApp- en Telegrambots, supportmetrics, SLA's en EU-regels.",
    eyebrow: "Gidsen",
    title: "Gidsen over klantenservice automatiseren",
    intro:
      "Gecontroleerde gidsen over supportbots, ticketroutering, helpdeskautomatisering, supportmetrics en de EU-regels die daarvoor gelden. Elke pagina vermeldt de officiële bronnen waarop hij is gebaseerd.",
    readGuide: "Lees de gids",
  },
  notFound: {
    title: "Pagina niet gevonden",
    text: "Deze pagina bestaat niet of is verplaatst.",
    back: "Terug naar home",
  },
  tools,
};

export default nl;
