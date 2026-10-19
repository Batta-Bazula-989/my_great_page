import type { Dictionary } from "./en";

const nl: Dictionary = {
  meta: {
    homeTitle: "AI-klantenservice: chatbots, voicebots & ticketroutering | TascaLab",
    homeDescription:
      "Supportautomatisering: AI-chatbots, voicebots, ticketroutering en automatische rapportages voor Zendesk, Freshdesk en Jira. Vaste prijzen, gratis Health Check.",
    noscriptHeading: "AI-automatisering voor klantenservice — chatbots, voicebots & ticketroutering",
    noscriptText:
      "TascaLab bouwt AI-chatbots, voicebots, ticketroutering en automatische rapportages bovenop Zendesk, Freshdesk, Jira en Slack. Mail naar romanzakharenko.r@gmail.com om een gratis Health Check te plannen.",
  },
  nav: {
    services: "Wat ik doe",
    fit: "Een match?",
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
  },
  hero: {
    eyebrow: "Supportautomatisering die echt standhoudt",
    titleBefore: "AI-chatbots, voicebots & ",
    titleHighlight: "ticketautomatisering",
    titleAfter: " voor supportteams",
    intro:
      "Ik koppel AI aan de helpdesk die je al gebruikt: hij beantwoordt terugkerende vragen, stuurt elk ticket naar de juiste wachtrij en levert de rapportages die je team nu met de hand maakt. Minder handwerk, snellere eerste reacties en geen overstap naar een ander platform.",
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
    intro:
      "Eén prijs per pakket, één keer betaald. Geen maandelijkse kosten van mijn kant. Twijfel je welk pakket past? Begin met de gratis Health Check.",
    oneTimeFee: "eenmalig",
    cta: "Aan de slag",
    from: "vanaf {price}",
    delivery: "Oplevering",
    deliveryTime: "1–3 weken",
    support: "Ondersteuning",
    supportTime: "30 dagen",
    included: "Wat er inbegrepen is",
    running: "Lopende kosten per maand",
    runningNote: "Die betaal je aan de aanbieders van de tools, niet aan mij.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Beantwoordt veelgestelde vragen op 1–2 kanalen en geeft de rest door aan je team.",
        included: [
          "Chatbot op 1–2 kanalen: website, WhatsApp, Telegram, Messenger of Instagram",
          "Beantwoordt je FAQ's en handelt veelvoorkomende verzoeken af",
          "Verzamelt basisgegevens van klanten",
          "Geeft de rest met context door aan je team",
          "Basisdocumentatie",
        ],
        running: [
          "AI-gebruik, gefactureerd door je AI-aanbieder: ongeveer $ 2,50–50 per 1.000 gesprekken*",
          "Automatiseringsplatform: n8n self-hosted (gratis), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand",
          "Alleen bij WhatsApp: de eerste 1.000 serviceberichten per maand gratis per nummer, daarna de tarieven van Meta",
        ],
      },
      {
        name: "Voice Bot",
        description: "Neemt inkomende gesprekken aan, doet de triage en draagt ze over aan je team.",
        included: [
          "Voice-agent voor inkomende gesprekken, met natuurlijke conversatie",
          "Triage van elk gesprek",
          "Nette overdracht aan je team",
          "Gekoppeld aan je helpdesk",
          "Basisdocumentatie",
        ],
        running: [
          "Kosten per minuut van het voiceplatform, bijv. Retell AI vanaf $ 0,07 per minuut",
          "Een telefoonnummer van je telefonieaanbieder",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Handelt complexere gesprekken af op 3–5 kanalen.",
        included: [
          "Chatbot op 3–5 kanalen",
          "Gesprekken in meerdere stappen, met slimmere logica",
          "Soepelere overdrachten aan je team",
          "Gekoppeld aan je helpdesk",
          "Basisdocumentatie",
        ],
        running: [
          "AI-gebruik, gefactureerd door je AI-aanbieder: ongeveer $ 2,50–50 per 1.000 gesprekken*",
          "Automatiseringsplatform: n8n self-hosted (gratis), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand",
          "Alleen bij WhatsApp: de eerste 1.000 serviceberichten per maand gratis per nummer, daarna de tarieven van Meta",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Elk ticket krijgt direct bij binnenkomst tags, een prioriteit en een behandelaar.",
        included: [
          "AI-classificatie van elk nieuw ticket op onderwerp en urgentie",
          "Tags, prioriteit en toewijzing aan de juiste groep",
          "Werkt in Zendesk, Freshdesk of Jira Service Management",
          "Basisdocumentatie",
        ],
        running: [
          "AI-classificatie: ongeveer $ 0,20 per 1.000 tickets*",
          "Automatiseringsplatform: n8n self-hosted (gratis), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand",
        ],
      },
      {
        name: "Automated Reports",
        description: "De rapportages die je team nu met de hand maakt, automatisch verstuurd.",
        included: [
          "Je belangrijkste supportmetrics, opgehaald uit je helpdesk",
          "Volgens schema verstuurd per e-mail of naar Slack",
          "Basisdocumentatie",
        ],
        running: [
          "Automatiseringsplatform: n8n self-hosted (gratis), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand",
          "Geen AI-kosten, tenzij je samenvattingen door AI wilt laten schrijven",
        ],
      },
      {
        name: "Custom Automation",
        description: "Gebouwd rond je workflows, tools en eisen.",
        included: [
          "Samen afgebakend in je gratis Health Check",
          "Vaste prijs en planning afgesproken voordat het werk begint",
          "Elke tool met een API of webhooks",
          "Basisdocumentatie",
        ],
        running: ["Hangt af van de gebruikte tools; geschat in je Health Check-rapport"],
      },
    ],
    footnote:
      "* De AI-schattingen gaan uit van de lijstprijzen van Anthropic (oktober 2026) voor Claude Haiku 5.5 ($ 0,10 / $ 0,50 per miljoen input-/outputtokens) en Claude Sonnet 5.5 ($ 2 / $ 10), bij ongeveer 20.000 input- en 1.000 outputtokens per gesprek en 1.500 / 100 per ticket. Andere aanbieders en modellen kosten anders, en aanbieders kunnen hun prijzen wijzigen.",
    trust: ["Geen maandelijkse kosten van mijn kant", "30 dagen ondersteuning na oplevering", "Basisdocumentatie inbegrepen"],
    healthCheck: {
      title: "Gratis Health Check",
      text: "Een gesprek van 30 minuten over je supportopzet, gevolgd door een schriftelijk rapport: wat je het eerst automatiseert, welk pakket past, de vaste prijs en planning, en de geschatte lopende kosten per maand.",
      cta: "Plan je Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "Je gegevens",
    title: "Je gegevens en de AVG",
    intro: "Jij kiest waar je automatisering draait. Dat spreken we af in je Health Check, voordat er iets wordt gebouwd.",
    options: [
      {
        title: "In je eigen accounts (standaard)",
        points: [
          "Gebouwd in je eigen helpdesk, je automatiseringsomgeving en je account bij je AI-aanbieder",
          "Klantgegevens blijven in systemen die jij beheert, onder je eigen contracten met die aanbieders",
          "Mijn toegang is alleen voor de bouw en wordt na de overdracht ingetrokken",
          "Elke workflow, prompt en API-sleutel is van jou",
        ],
      },
      {
        title: "Gehost door mij, met een verwerkersovereenkomst",
        points: [
          "Ik draai de automatisering op accounts die ik beheer",
          "We sluiten een verwerkersovereenkomst (art. 28 AVG) voordat er persoonsgegevens worden verwerkt",
          "Elke subverwerker, zoals het automatiseringsplatform, de AI-aanbieder en de hosting, wordt daarin genoemd",
          "Na afloop van de overeenkomst worden de gegevens verwijderd of teruggegeven, zoals art. 28 vereist",
        ],
      },
    ],
    note: "Dit beschrijft hoe projecten worden opgezet. Het is geen juridisch advies.",
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
    intro: "Een gesprek van 30 minuten, daarna een schriftelijk rapport. We kijken wat je team vertraagt en bepalen waar we beginnen.",
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
    text: "We gebruiken cookies voor analyse en advertentiemeting, zodat we begrijpen hoe bezoekers deze site vinden en gebruiken.",
    privacy: "Privacybeleid",
    decline: "Weigeren",
    accept: "Accepteren",
  },
  booking: {
    title: "Plan een gratis Health Check",
    description:
      "Laat je gegevens achter, dan neem ik contact op om een gesprek van 30 minuten in te plannen. Daarna krijg je een schriftelijk rapport. Geen verplichtingen, geen verkooppraatje.",
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
    submit: "Plan gratis Health Check",
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
};

export default nl;
