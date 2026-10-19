import type { Dictionary } from "./en";

const de: Dictionary = {
  meta: {
    homeTitle: "KI-Chatbots, Voicebots & Ticket-Routing im Kundenservice | TascaLab",
    homeDescription:
      "Support-Automatisierung: KI-Chatbots, Voicebots, Ticket-Routing und automatische Reports für Zendesk, Freshdesk und Jira. Festpreise, kostenloser Health Check.",
    noscriptHeading: "KI-Automatisierung für den Kundenservice – Chatbots, Voicebots & Ticket-Routing",
    noscriptText:
      "TascaLab baut KI-Chatbots, Voicebots, Ticket-Routing und automatisierte Reports auf Basis von Zendesk, Freshdesk, Jira und Slack. Schreiben Sie an romanzakharenko.r@gmail.com, um einen kostenlosen Health Check zu buchen.",
  },
  nav: {
    services: "Leistungen",
    fit: "Passt es?",
    whyMe: "Warum ich?",
    pricing: "Preise",
    reviews: "Bewertungen",
    faq: "FAQ",
    resources: "Ressourcen",
    cta: "Kostenloser Health Check",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    logoAlt: "TascaLab-Logo",
  },
  hero: {
    eyebrow: "Support-Automatisierung, die im Alltag wirklich hält",
    titleBefore: "KI-Chatbots, Voicebots & ",
    titleHighlight: "Ticket-Automatisierung",
    titleAfter: " für Support-Teams",
    intro: "Integriert in den Helpdesk, den Sie bereits nutzen. Festpreise, kein Plattformwechsel.",
    ctaBook: "Kostenlosen Health Check buchen",
    ctaUpwork: "Bewertungen auf Upwork",
    highlights: ["Funktioniert mit Ihrem aktuellen Helpdesk", "Live in 1–3 Wochen", "30 Tage Support inklusive"],
    integratesWith: "Integriert mit",
  },
  services: {
    eyebrow: "Leistungen",
    title: "Leistungen rund um die Kundensupport-Automatisierung",
    items: [
      {
        title: "Chat- & Voicebots für den Support",
        description: "Beantwortet häufige Nachrichten und Anrufe und übergibt den Rest an Ihr Team.",
      },
      {
        title: "Ticket-Routing & Kategorisierung",
        description: "Jedes neue Ticket automatisch getaggt, priorisiert und zugewiesen.",
      },
      {
        title: "Reporting",
        description: "Die Reports, die Ihr Team von Hand erstellt, automatisch versendet.",
      },
      {
        title: "Individuelle Lösung",
        description: "Etwas Spezielles? Ich plane und baue es.",
      },
    ],
  },
  fit: {
    eyebrow: "Passt das zu Ihnen?",
    title: "Für wen sich diese Support-Automatisierung eignet",
    goodTitle: "Passt gut",
    notTitle: "Passt nicht",
    good: [
      "Täglich wiederkehrende Support-Aufgaben",
      "Sie nutzen Zendesk, Freshdesk, Jira oder Ähnliches",
      "Reports werden noch von Hand erstellt",
      "Tools, die nicht miteinander verbunden sind",
    ],
    not: [
      "Sie brauchen einen Vollzeit-Support-Manager",
      "Sie möchten Ihren gesamten Support-Stack ersetzen",
      "Sie erwarten, dass KI Ihr Team ersetzt",
    ],
  },
  whyMe: {
    eyebrow: "Warum mit mir arbeiten",
    title: "Gebaut von jemandem, der selbst im Support gearbeitet hat",
    items: [
      {
        title: "Ich habe im Support gearbeitet",
        description: "Ich habe Tickets bearbeitet und Reports von Hand erstellt. Daher weiß ich, was Teams ausbremst.",
      },
      {
        title: "Gebaut für den Alltag",
        description: "Fehlerbehandlung, Grenzfall-Tests und Monitoring in jeder Lösung.",
      },
      {
        title: "Alles gehört Ihnen",
        description: "Vollständige Dokumentation und Übergabe. Keine Abhängigkeit.",
      },
      {
        title: "Klare Antworten",
        description: "Wenn sich eine Automatisierung nicht lohnt, sage ich es Ihnen.",
      },
    ],
  },
  pricing: {
    eyebrow: "Preise",
    title: "Support-Automatisierungspakete zum Festpreis",
    intro: "Ein Preis, einmal bezahlt. Keine laufende Pauschale.",
    oneTimeFee: "einmalig",
    cta: "Jetzt starten",
    from: "ab {price}",
    delivery: "Lieferzeit",
    deliveryTime: "1–3 Wochen",
    included: "Im Paket enthalten",
    running: "Laufende Kosten pro Monat",
    runningNote: "Berechnet von den Tool-Anbietern. Nicht im Paketpreis enthalten.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Beantwortet häufige Fragen auf 1–2 Kanälen und übergibt den Rest an Ihr Team.",
        included: [
          "1–2 Kanäle: Website, WhatsApp, Telegram, Messenger oder Instagram",
          "Beantwortet FAQs und erfasst Kundenangaben",
          "Übergibt den Rest an Ihr Team",
        ],
        running: [
          "KI-Nutzung, von Ihrem KI-Anbieter pro Token abgerechnet, z. B. Claude Haiku 5.5 ab 0,10 $ / 0,50 $ pro Million Input-/Output-Tokens*",
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
          "Nur bei WhatsApp: Ab 1. Oktober 2026 sind 1.000 Service-Nachrichten pro Monat und Business-Nummer kostenlos, danach gilt der Preis von Meta pro Nachricht",
        ],
      },
      {
        name: "Voice Bot",
        description: "Nimmt eingehende Anrufe entgegen, triagiert sie und übergibt an Ihr Team.",
        included: [
          "Nimmt eingehende Anrufe entgegen",
          "Triage und saubere Übergabe an Ihr Team",
          "Angebunden an Ihren Helpdesk",
        ],
        running: [
          "Minutenpreise der Voice-Plattform, z. B. Retell AI ab 0,07 $ pro Minute, plus KI-Modell und Telefonleitung",
          "Eine Telefonnummer von Ihrem Telefonieanbieter",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Bewältigt komplexere Gespräche auf 3–5 Kanälen.",
        included: [
          "3–5 Kanäle",
          "Mehrstufige Gespräche",
          "Übergabe an Ihr Team, angebunden an Ihren Helpdesk",
        ],
        running: [
          "KI-Nutzung, von Ihrem KI-Anbieter pro Token abgerechnet, z. B. Claude Haiku 5.5 ab 0,10 $ / 0,50 $ pro Million Input-/Output-Tokens*",
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
          "Nur bei WhatsApp: Ab 1. Oktober 2026 sind 1.000 Service-Nachrichten pro Monat und Business-Nummer kostenlos, danach gilt der Preis von Meta pro Nachricht",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Jedes Ticket wird beim Eingang sofort getaggt, priorisiert und zugewiesen.",
        included: [
          "KI sortiert jedes neue Ticket nach Thema und Dringlichkeit",
          "Setzt Tags und Priorität, weist die richtige Gruppe zu",
          "Zendesk, Freshdesk oder Jira Service Management",
        ],
        running: [
          "KI-Klassifizierung, von Ihrem KI-Anbieter pro Token abgerechnet, z. B. Claude Haiku 5.5 ab 0,10 $ / 0,50 $ pro Million Input-/Output-Tokens*",
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
        ],
      },
      {
        name: "Automated Reports",
        description: "Die Reports, die Ihr Team von Hand erstellt, automatisch versendet.",
        included: [
          "Wichtige Support-Kennzahlen aus Ihrem Helpdesk",
          "Nach Zeitplan per E-Mail oder in Slack versendet",
        ],
        running: [
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
          "Keine KI-Kosten, es sei denn, Sie möchten von KI geschriebene Zusammenfassungen",
        ],
      },
      {
        name: "Custom Automation",
        description: "Maßgeschneidert für Ihre Abläufe, Tools und Anforderungen.",
        included: [
          "Umfang in Ihrem kostenlosen Health Check festgelegt",
          "Festpreis vor Arbeitsbeginn vereinbart",
          "Jedes Tool mit API oder Webhooks",
        ],
        running: ["Hängt von den beteiligten Tools ab; geschätzt in Ihrem Health-Check-Bericht"],
      },
    ],
    footnote:
      "* Listenpreise von Anthropic (Oktober 2026) für Prompts bis 100.000 Tokens; längere Prompts kosten 0,50 $ / 2,50 $. Andere Anbieter und Modelle haben andere Preise, und Anbieter können ihre Preise ändern.",
    allPackages: "In jedem Paket: 30 Tage Support nach der Auslieferung und Basisdokumentation.",
    healthCheck: {
      title: "Kostenloser Health Check",
      text: "Ein 30-minütiges Gespräch, danach ein schriftlicher Bericht: was Sie zuerst automatisieren sollten, welches Paket passt und was es kostet.",
      cta: "Ihren Health Check buchen",
      price: "Kostenlos",
    },
  },
  data: {
    eyebrow: "Ihre Daten",
    title: "Ihre Daten und die DSGVO",
    intro: "Sie entscheiden, wo Ihre Automatisierung läuft.",
    options: [
      {
        title: "In Ihren eigenen Konten (Standard)",
        points: [
          "Läuft in Ihren eigenen Helpdesk-, Automatisierungs- und KI-Konten",
          "Kundendaten bleiben in Systemen, die Sie kontrollieren",
          "Alles gehört Ihnen, und Sie steuern meinen Zugang",
        ],
      },
      {
        title: "Von mir gehostet, mit AVV",
        points: [
          "Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO, unterzeichnet, bevor personenbezogene Daten verarbeitet werden",
          "Unterauftragsverarbeiter nur mit Ihrer schriftlichen Genehmigung",
          "Bei Vertragsende werden die Daten nach Ihrer Wahl gelöscht oder zurückgegeben",
        ],
      },
    ],
    note: "Dies beschreibt, wie Projekte aufgesetzt werden. Es ist keine Rechtsberatung.",
  },
  reviews: {
    eyebrow: "Kundenfeedback",
    title: "Verifizierte Bewertungen auf Upwork",
    intro: "Aus bezahlten Aufträgen auf Upwork.",
    leaveCta: "Schon mit mir gearbeitet? Bewertung abgeben",
    quoted: "Bewertungen wörtlich aus meinem Upwork-Profil zitiert.",
    verify: "Auf Upwork prüfen",
    stars: "{rating} von 5 Sternen",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufig gestellte Fragen",
    items: [
      {
        q: "Muss ich meine Support-Tools wechseln?",
        a: "Nein. Ich arbeite mit dem, was Sie bereits nutzen – Zendesk, Freshdesk, Jira, Slack, interne Tools. Ziel ist es, Ihre vorhandenen Systeme zu verbinden und zu verbessern, nicht sie zu ersetzen.",
      },
      {
        q: "Was passiert, wenn nach dem Launch etwas nicht mehr funktioniert?",
        a: "Jedes Projekt umfasst 30 Tage Support nach dem Launch. Wenn in diesem Zeitraum etwas ausfällt, behebe ich es. Ich setze auf Standardintegrationen – APIs, Webhooks, Make/n8n – statt auf fragile Speziallösungen, die nur in einer einzigen Umgebung funktionieren.",
      },
      {
        q: "Kann mein Team das selbst warten, wenn Sie fertig sind?",
        a: "Ja. Ich dokumentiere alles verständlich – die Logik, den Ablauf, die Grenzfälle. Sie sind nicht an mich gebunden. Laufender Support ist verfügbar, aber optional.",
      },
      {
        q: "Können Sie ein bestimmtes Tool integrieren?",
        a: "Wenn es eine API oder Webhooks unterstützt, mit ziemlicher Sicherheit. Sprechen Sie es in Ihrem Health Check an, dann bestätige ich es Ihnen.",
      },
      {
        q: "Was passiert eigentlich im kostenlosen Health Check?",
        a: "Ein 30-minütiges Gespräch über Ihr aktuelles Setup: wo es hakt und wo Automatisierung wirklich etwas bewirken würde. Danach erhalten Sie einen schriftlichen Bericht mit 2–3 konkreten Empfehlungen, dem passenden Paket samt Festpreis und den geschätzten laufenden Kosten pro Monat. Keine Verkaufspräsentation. Kein Druck.",
      },
      {
        q: "Wie lange dauert ein typisches Projekt?",
        a: "Die meisten Setups dauern 1–3 Wochen, je nach Komplexität und je nachdem, wie schnell wir uns auf die Anforderungen einigen. Ich nenne Ihnen vorab einen realistischen Zeitplan – keinen optimistischen.",
      },
    ],
  },
  contact: {
    eyebrow: "Sprechen wir",
    title: "Kostenloser Health Check für Ihren Support",
    intro: "Ein 30-minütiges Gespräch, danach ein schriftlicher Bericht.",
    cta: "Kostenlosen Health Check buchen",
    linkedin: "Auf LinkedIn vernetzen",
    email: "E-Mail",
    upwork: "Upwork-Bewertungen",
  },
  footer: {
    resourcesNav: "Ressourcen",
    allResources: "Alle Ressourcen",
    upworkReviews: "Upwork-Bewertungen",
    privacy: "Datenschutzerklärung",
    terms: "Nutzungsbedingungen",
  },
  categories: {
    services: { label: "Leistungen", blurb: "Was gebaut wird: Bots, Routing und Reporting." },
    helpdesks: { label: "Nach Helpdesk", blurb: "Automatisierung in den Tools, die Ihr Team bereits nutzt." },
    channels: { label: "Nach Kanal", blurb: "Support-Bots für die Kanäle, über die Ihre Kunden schreiben." },
    basics: { label: "Grundlagen", blurb: "Definitionen, Kennzahlen und wie Übergaben funktionieren." },
    guides: { label: "Ratgeber & Compliance", blurb: "Tool-Vergleiche und EU-Regeln für Support-Bots." },
  },
  cookie: {
    text: "Wir verwenden Cookies für Analysen und Anzeigenmessung, um zu verstehen, wie Besucher diese Website finden und nutzen.",
    privacy: "Datenschutzerklärung",
    decline: "Ablehnen",
    accept: "Akzeptieren",
  },
  booking: {
    title: "Kostenlosen Health Check buchen",
    description:
      "Hinterlassen Sie Ihre Daten, und ich melde mich, um ein 30-minütiges Gespräch zu vereinbaren. Danach erhalten Sie einen schriftlichen Bericht. Unverbindlich, ohne Verkaufsgespräch.",
    fullName: "Vollständiger Name",
    fullNamePlaceholder: "Erika Mustermann",
    email: "Geschäftliche E-Mail",
    emailPlaceholder: "erika@firma.de",
    company: "Firmenname",
    companyPlaceholder: "Muster GmbH",
    meetingMethod: "Bevorzugte Gesprächsart",
    methodPhone: "Telefon",
    phone: "Telefonnummer",
    phonePlaceholder: "170 1234567",
    searchCountry: "Land oder Vorwahl suchen...",
    noCountry: "Kein Land gefunden.",
    telegram: "Telegram-Link oder Benutzername",
    telegramPlaceholder: "https://t.me/benutzername oder @benutzername",
    submitCalendar: "Weiter zum Kalender",
    submitting: "Wird gesendet...",
    submit: "Kostenlosen Health Check buchen",
    sendFailed: "Anfrage konnte nicht gesendet werden",
    networkError: "Netzwerkfehler oder Server nicht erreichbar.",
    sent: "Anfrage gesendet! Ich melde mich innerhalb von 24 Stunden.",
    errors: {
      nameRequired: "Der vollständige Name ist erforderlich",
      nameShort: "Der vollständige Name muss mindestens 2 Zeichen lang sein",
      nameLong: "Der vollständige Name muss kürzer als 50 Zeichen sein",
      nameChars: "Der vollständige Name darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten",
      emailRequired: "Die geschäftliche E-Mail ist erforderlich",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      companyLength: "Der Firmenname muss zwischen 2 und 50 Zeichen lang sein",
      phoneRequired: "Die Telefonnummer ist erforderlich",
      phoneChars: "Nur Ziffern, Leerzeichen, Punkte, Bindestriche und Klammern verwenden",
      phoneDigits: "Die Telefonnummer muss 6–15 Ziffern haben",
      telegramRequired: "Telegram-Link oder Benutzername ist erforderlich",
      telegramInvalid:
        "Bitte geben Sie einen gültigen Telegram-Link (z. B. https://t.me/benutzername) oder Benutzernamen (z. B. @benutzername) ein",
    },
  },
  seo: {
    home: "Startseite",
    byline: "Von Roman Zakharenko",
    factsChecked: "Fakten geprüft",
    atAGlance: "Auf einen Blick",
    faqTitle: "Häufig gestellte Fragen",
    faqShort: "FAQ",
    ctaTitle: "Möchten Sie das für Ihr Team einrichten lassen?",
    ctaText:
      "Buchen Sie einen kostenlosen Health Check: ein 30-minütiges Gespräch und ein schriftlicher Bericht mit 2–3 konkreten Empfehlungen, einem Festpreis und den geschätzten laufenden Kosten. Ohne Verkaufsgespräch.",
    ctaBook: "Kostenlosen Health Check buchen",
    ctaUpwork: "Bewertungen auf Upwork",
    sources: "Quellen",
    onThisPage: "Auf dieser Seite",
    related: "Verwandte Themen",
  },
  resources: {
    metaTitle: "Ressourcen zur Kundensupport-Automatisierung | TascaLab",
    metaDescription:
      "Ratgeber: KI-Support-Chatbots, Ticket-Routing, Zendesk-, Freshdesk- und Jira-Automatisierung, WhatsApp- und Telegram-Bots, Support-Kennzahlen, SLAs, EU-Regeln.",
    eyebrow: "Ressourcen",
    title: "Ressourcen zur Kundensupport-Automatisierung",
    intro:
      "Faktengeprüfte Ratgeber zu Support-Bots, Ticket-Routing, Helpdesk-Automatisierung, Support-Kennzahlen und den EU-Regeln, die dafür gelten. Jede Seite nennt die offiziellen Quellen, auf denen sie beruht.",
    readGuide: "Ratgeber lesen",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite existiert nicht oder wurde verschoben.",
    back: "Zurück zur Startseite",
  },
};

export default de;
