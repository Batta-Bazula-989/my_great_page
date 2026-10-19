import type { Dictionary } from "./en";

const nl: Dictionary = {
  meta: {
    homeTitle: "AI-klantenservice: chatbots, voicebots & ticketroutering | TascaLab",
    homeDescription:
      "Freelance supportautomatisering: AI-chatbots, voicebots, ticketroutering en rapportages in je Zendesk, Freshdesk of Jira. Vaste prijzen, gratis audit (30 min).",
    noscriptHeading: "AI-automatisering voor klantenservice — chatbots, voicebots & ticketroutering",
    noscriptText:
      "TascaLab bouwt AI-chatbots, voicebots, ticketroutering en automatische rapportages bovenop Zendesk, Freshdesk, Jira en Slack. Mail naar romanzakharenko.r@gmail.com om een gratis audit van 30 minuten te plannen.",
  },
  nav: {
    services: "Wat ik doe",
    fit: "Een match?",
    whyMe: "Waarom ik?",
    pricing: "Prijzen",
    reviews: "Reviews",
    faq: "FAQ",
    resources: "Gidsen",
    cta: "Plan een gratis audit",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    language: "Taal",
    logoAlt: "Logo van TascaLab",
  },
  hero: {
    eyebrow: "Supportautomatisering die echt standhoudt",
    titleBefore: "AI-chatbots, voicebots & ",
    titleHighlight: "ticketautomatisering",
    titleAfter: " voor supportteams",
    intro:
      "Ik koppel AI aan de helpdesk die je al gebruikt: hij beantwoordt terugkerende vragen, stuurt elk ticket naar de juiste wachtrij en levert de rapportages die je team nu met de hand maakt. Minder handwerk, snellere eerste reacties en geen overstap naar een ander platform.",
    ctaBook: "Plan een gratis audit",
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
          "Handelt eerste berichten en inkomende gesprekken af. Achterhaalt wat de klant nodig heeft, beantwoordt wat hij kan en draagt de rest netjes over. Een filter vóór je team, geen vervanging ervan.",
      },
      {
        title: "Ticketroutering & categorisering",
        description:
          "Elk ticket krijgt direct bij binnenkomst tags, een prioriteit en een behandelaar, op basis van wat er echt in staat. Geen handmatig sorteren, geen tickets die in de verkeerde wachtrij blijven liggen.",
      },
      {
        title: "Rapportages",
        description:
          "De rapportages die je team elke week met de hand samenstelt, worden automatisch gemaakt en verstuurd. Het juiste formaat, de juiste mensen, het juiste moment. Nooit meer zelf data verzamelen.",
      },
      {
        title: "Maatwerkoplossing",
        description:
          "Iets specifieks dat niet in een standaardpakket past? Ik breng het in kaart en bouw het. Als het te automatiseren is, vinden we samen uit hoe.",
      },
    ],
    previous: "Vorige dienst",
    next: "Volgende dienst",
    show: "Toon {title}",
  },
  fit: {
    eyebrow: "Is dit een match?",
    title: "Voor wie deze supportautomatisering is",
    goodTitle: "Goede match",
    notTitle: "Geen goede match",
    good: [
      "Je supportteam doet repetitief, voorspelbaar werk dat elke dag opnieuw terugkomt",
      "Je werkt met Zendesk, Freshdesk, Jira of iets vergelijkbaars en wilt daar automatisering bovenop, geen vervanging",
      "Je wilt duidelijke rapportages zonder dat iemand elke week met de hand data verzamelt",
      "Je tools praten niet met elkaar en daardoor raken tickets zoek",
      "Je wilt precies weten wat je krijgt voordat je ergens voor betaalt",
    ],
    not: [
      "Je hebt een fulltime supportmanager nodig die de dagelijkse gang van zaken regelt",
      "Je wilt één tool die alles doet: intake, oplossing, escalatie, rapportage, alles",
      "Je bent van plan je hele supportstack te vervangen en helemaal opnieuw te beginnen",
      "Je denkt dat AI je supportteam volledig kan vervangen",
    ],
  },
  whyMe: {
    eyebrow: "Waarom met mij werken",
    title: "Gebouwd door iemand die zelf in support heeft gewerkt",
    items: [
      {
        title: "Ik heb in support gewerkt, niet er alleen omheen",
        description:
          "Ik heb tickets afgehandeld, rapportages met de hand gemaakt en gewerkt met processen die aan elkaar hingen van copy-paste en hoop. Ik weet wat teams echt vertraagt, omdat ik zelf aan die kant heb gestaan.",
      },
      {
        title: "Gebouwd om stand te houden, niet om mooi te demonstreren",
        description:
          "Elke automatisering bevat foutafhandeling, tests op randgevallen en monitoring. Gebeurt er iets onverwachts, dan faalt hij netjes en waarschuwt hij de juiste persoon, in plaats van stilletjes kapot te gaan.",
      },
      {
        title: "Na afloop is alles van jou",
        description:
          "Volledige documentatie. Een duidelijke overdracht. Geen eigen tooling waar alleen ik bij kan. Je team kan onderhouden en uitbreiden wat ik bouw, zonder mij te hoeven bellen.",
      },
      {
        title: "Altijd eerlijke communicatie",
        description:
          "Ik zeg het als iets het automatiseren niet waard is. Ik zeg het als je budget niet past bij de scope. Ik ga niet knikken en je een factuur sturen voor iets dat niets oplevert.",
      },
    ],
    previous: "Vorige reden",
    next: "Volgende reden",
    show: "Toon {title}",
  },
  pricing: {
    eyebrow: "Prijzen",
    title: "Pakketten voor supportautomatisering tegen een vaste prijs",
    intro: "Eenmalige projectprijzen. Je kent de prijsrange voordat we beginnen; de definitieve offerte volgt na een gratis audit.",
    oneTimeFee: "eenmalig",
    cta: "Aan de slag",
    // Same order as the plans in PricingSection; prices stay in USD. Plan names match the nl landing pages.
    plans: [
      {
        name: "Starter Chat Bot",
        price: "350 – 450 USD",
        description:
          "Handelt eenvoudige klantvragen en FAQ's af via 1–2 kanalen. Ideaal voor kleine bedrijven die met automatisering beginnen.",
        features: ["1–2 kanalen", "Beantwoordt FAQ's, verzamelt basisgegevens en handelt veelvoorkomende verzoeken automatisch af"],
      },
      {
        name: "Voice Bot",
        price: "1.100 – 1.600 USD",
        description: "Voor inkomende telefoongesprekken.",
        features: [
          "Volledige voice-agent voor inkomende gesprekken, met natuurlijke conversatie, triage en een nette overdracht aan je team",
        ],
      },
      {
        name: "Standard Chat Bot",
        price: "500 – 650 USD",
        description:
          "Geavanceerde chatbot met ondersteuning voor meerdere kanalen, slimmere antwoorden en een betere afhandeling van klantcontact op grote schaal.",
        features: ["3–5 kanalen", "Handelt complexere gesprekken af met slimmere logica en soepelere overdrachten aan je team"],
      },
      {
        name: "Ticket Routing & Categorization",
        price: "600 – 950 USD",
        description: "Tickets automatisch sorteren en toewijzen.",
        features: [
          "Tagt, categoriseert en routeert tickets automatisch naar het juiste team, zodat er niets tussen wal en schip valt en de reactietijden kort blijven.",
        ],
      },
      {
        name: "Automated Reports",
        price: "500 – 900 USD",
        description: "Geplande rapportages, automatisch verstuurd.",
        features: [
          "Automatische rapportages met je belangrijkste bedrijfscijfers, geleverd per e-mail of in Slack, zodat je op de hoogte blijft zonder handwerk.",
        ],
      },
      {
        name: "Custom Automation",
        price: "1.200 – 2.000 USD",
        description:
          "Volledig op maat gemaakte automatisering, gebouwd rond je workflows, tools en specifieke bedrijfseisen.",
        features: ["Volledig op maat gemaakte automatisering, gebouwd rond je workflows, tools en specifieke bedrijfseisen"],
      },
    ],
    trust: ["Geen verborgen kosten", "30 dagen ondersteuning na oplevering", "Basisdocumentatie inbegrepen"],
  },
  reviews: {
    eyebrow: "Feedback van klanten",
    title: "Geverifieerde reviews op Upwork",
    intro:
      "Elke review op mijn Upwork-profiel komt van een echte, betaalde opdracht. Zo zie je precies hoe eerdere projecten voor supportautomatisering zijn verlopen voordat je een gesprek plant.",
    readTitle: "Lees reviews van klanten",
    readText:
      "Bekijk beoordelingen, Job Success Score en geschreven feedback van teams voor wie ik chatbots, ticketroutering en automatische rapportages heb gebouwd.",
    readCta: "Bekijk mijn Upwork-profiel",
    leaveTitle: "Met mij gewerkt? Laat een review achter",
    leaveText:
      "Hebben we samen een project afgerond? Een korte review op Upwork helpt andere supportteams om met vertrouwen te kiezen. Het kost twee minuten. Dank je wel!",
    leaveCta: "Laat feedback achter op Upwork",
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
        a: "Als die een API of webhooks ondersteunt, vrijwel zeker. Noem het tijdens het auditgesprek, dan bevestig ik het.",
      },
      {
        q: "Wat gebeurt er precies tijdens de gratis audit?",
        a: "30 minuten. We bekijken je huidige opzet, waar het schuurt en waar automatisering echt verschil zou maken. Je gaat weg met 2–3 concrete aanbevelingen, een globale scope en een prijsrange. Geen salespresentatie. Geen druk.",
      },
      {
        q: "Hoe lang duurt een gemiddeld project?",
        a: "De meeste projecten duren 1–3 weken, afhankelijk van de complexiteit en hoe snel we het eens worden over de eisen. Ik geef je vooraf een realistische planning, geen optimistische.",
      },
    ],
  },
  contact: {
    eyebrow: "Laten we praten",
    title: "Plan een gratis supportaudit van 30 minuten",
    intro: "Plan een gesprek van 30 minuten. We kijken wat je team vertraagt en bepalen waar we beginnen.",
    cta: "Plan een gratis audit",
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
    text: "We gebruiken cookies voor analyse en advertentiemeting, zodat we begrijpen hoe bezoekers deze site vinden en gebruiken.",
    privacy: "Privacybeleid",
    decline: "Weigeren",
    accept: "Accepteren",
  },
  booking: {
    title: "Plan een gratis supportreview",
    description: "Laat je gegevens achter, dan neem ik contact op om een gesprek van 30 minuten in te plannen. Geen verplichtingen, geen verkooppraatje.",
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
    submitting: "Bezig met versturen...",
    submit: "Plan gratis supportreview",
    sendFailed: "Aanvraag kon niet worden verstuurd",
    networkError: "Netwerkfout of server niet bereikbaar.",
    sent: "Aanvraag verstuurd! Ik neem binnen 24 uur contact op.",
    errors: {
      nameRequired: "Volledige naam is verplicht",
      nameShort: "Volledige naam moet minstens 2 tekens lang zijn",
      nameLong: "Volledige naam moet korter zijn dan 50 tekens",
      nameChars: "Volledige naam mag alleen letters, spaties, koppeltekens en apostrofs bevatten",
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
      "Plan een gratis audit van 30 minuten. Je krijgt 2–3 concrete aanbevelingen, een globale scope en een prijsrange, zonder verkooppraatje.",
    ctaBook: "Plan een gratis audit",
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
};

export default nl;
