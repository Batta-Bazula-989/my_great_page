import type { Dictionary } from "./en";
import tools from "./tools/de";

const de: Dictionary = {
  meta: {
    homeTitle: "Lead-, CRM- & Support-Automatisierung B2B | TascaLab",
    homeDescription:
      "Lead-Automatisierung und CRM-Integration für B2B-Teams: KI-Lead-Scoring, HubSpot und Attio, dazu Support-Automatisierung. Festpreise, gratis Health Check.",
  },
  nav: {
    services: "Leistungen",
    whyMe: "Warum ich?",
    pricing: "Preise",
    reviews: "Bewertungen",
    faq: "FAQ",
    blog: "Blog",
    cta: "Kostenloser Health Check",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
    logoAlt: "TascaLab-Logo",
    skipToContent: "Zum Inhalt springen",
  },
  hero: {
    eyebrow: "Automatisierung, die im Alltag wirklich hält",
    titleBefore: "Lead-, CRM- und Support-Automatisierung ",
    titleHighlight: "für kleine B2B-Teams",
    titleAfter: "",
    sectors: "Die meisten meiner Projekte entstehen für B2B-Vertriebsteams, E-Commerce und Fulfillment.",
    intro: "Ich bin Roman. Ich baue sie selbst, zum Festpreis ab {price}, einmal bezahlt.",
    callNote: "Kostenloser Health Check: ein 30-minütiges Gespräch mit mir, danach ein schriftlicher Bericht.",
    ctaBook: "Kostenlosen Health Check buchen",
    ctaUpwork: "Bewertungen auf Upwork",
    highlights: ["Funktioniert mit Ihrem aktuellen Helpdesk", "Live in 1–3 Wochen", "30 Tage Support inklusive"],
    integratesWith: "Integriert mit",
  },
  recentWork: {
    eyebrow: "In der Praxis",
    title: "Aktuelle Projekte",
    situationLabel: "Ausgangslage",
    changeLabel: "Was sich geändert hat",
    resultLabel: "Ergebnis",
    cases: [
      {
        title: "Outreach-Antworten verarbeiten",
        situation: "Ein B2B-Vertriebsteam übertrug Antworten auf Outreach-Kampagnen von Hand ins CRM.",
        change:
          "KI klassifiziert jetzt jede Lemlist-Antwort und ordnet sie dem richtigen Deal in HubSpot und Attio zu, mit Slack-Benachrichtigungen.",
        result: "Nichts geht mehr unter.",
      },
      {
        title: "Website-Besucher bewerten",
        situation: "Ein Unternehmen konnte nicht erkennen, welche Website-Besucher relevant waren.",
        change:
          "Jedes identifizierte Unternehmen wird jetzt gegen das ideale Kundenprofil bewertet und in HubSpot erfasst.",
        result: "Eine wöchentliche Übersicht, sortiert nach Score.",
      },
      {
        title: "Migration der Automatisierungsplattform",
        situation: "Die Automatisierungsplattform eines Teams kündigte ihre Abschaltung an.",
        change: "Über 20 produktive Workflows wurden zu n8n migriert.",
        result: "Alles lief vor Ablauf der Frist.",
      },
    ],
  },
  services: {
    eyebrow: "Leistungen",
    title: "Leistungen rund um Lead-, CRM- und Support-Automatisierung",
    items: [
      {
        title: "Lead-Automatisierung",
        description:
          "Ihre Leads von Website-Besuchern, Formularen und Outreach-Antworten werden von KI klassifiziert, gegen Ihr ideales Kundenprofil bewertet und mit Team-Benachrichtigungen in Ihrem CRM erfasst.",
      },
      {
        title: "CRM-Integration & -Automatisierung",
        description:
          "Ihr CRM (HubSpot, Attio) verbunden mit Outreach-, Telefonie- und Anreicherungstools. Antworten, Anrufe und Transkripte werden automatisch dem richtigen Deal zugeordnet, dazu Workflow-Migrationen zwischen Plattformen.",
      },
      {
        title: "Support-Automatisierung",
        description:
          "Chat- und Voicebots, Ticket-Routing und Kategorisierung, automatische Reports – alles angebunden an Ihren Helpdesk (Zendesk, Freshdesk, Jira).",
      },
    ],
  },
  process: {
    eyebrow: "So läuft es ab",
    title: "Vom ersten Gespräch zur funktionierenden Automatisierung",
    intro:
      "Nach der Buchung des Health Checks: ein 30-minütiges Gespräch, danach ein schriftlicher Bericht mit Empfehlungen und einem Festpreis – unverbindlich.",
    steps: [
      {
        title: "Kostenloser Health Check",
        description: "Ein 30-minütiges Gespräch über Ihr Setup und darüber, wo Automatisierung helfen würde.",
      },
      {
        title: "Schriftlicher Bericht",
        description: "2–3 Empfehlungen, das passende Paket und sein Festpreis.",
      },
      {
        title: "Festpreis vereinbart",
        description: "Vereinbart, bevor die Arbeit beginnt. Einmal bezahlt, keine laufende Pauschale.",
      },
      {
        title: "Umgesetzt in 1–3 Wochen",
        description: "In Ihrem Helpdesk, betrieben in Ihren eigenen Konten.",
      },
      {
        title: "30 Tage Support",
        description: "Fällt nach dem Launch etwas aus, behebe ich es.",
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
    role: "Spezialist für KI-Automatisierung",
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
    title: "Automatisierungspakete zum Festpreis",
    intro: "Ein Preis, einmal bezahlt. Keine laufende Pauschale.",
    oneTimeFee: "einmalig",
    cta: "Im Health Check ansprechen",
    from: "ab {price}",
    delivery: "Lieferzeit",
    deliveryTime: "1–3 Wochen",
    included: "Im Paket enthalten",
    groups: {
      leads: "Lead- & CRM-Automatisierung",
      support: "Support-Automatisierung",
      custom: "Individuelle Lösungen",
    },
    running: "Laufende Kosten pro Monat",
    showRunning: "Laufende Kosten pro Monat anzeigen",
    hideRunning: "Laufende Kosten pro Monat ausblenden",
    runningNote: "Berechnet von den Tool-Anbietern. Nicht im Paketpreis enthalten.",
    estimate: "Schätzen Sie Ihre Kosten mit meinen kostenlosen Rechnern:",
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
      {
        name: "Lead Capture & Scoring",
        description: "Leads aus einer Quelle, von KI klassifiziert und bewertet, erfasst in Ihrem CRM.",
        included: [
          "Leads aus einer Quelle, von KI klassifiziert und bewertet",
          "Erfasst in Ihrem CRM",
          "Benachrichtigungen per E-Mail oder Slack",
        ],
        running: [
          "KI-Nutzung, von Ihrem KI-Anbieter pro Token abgerechnet, z. B. Claude Haiku 5.5 ab 0,10 $ / 0,50 $ pro Million Input-/Output-Tokens*",
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
        ],
      },
      {
        name: "CRM Integration",
        description: "Zwei Tools mit Ihrem CRM verbunden, Aktivitäten den richtigen Datensätzen zugeordnet.",
        included: [
          "Zwei Tools mit Ihrem CRM verbunden",
          "Antworten und Aktivitäten den richtigen Datensätzen zugeordnet",
          "Fehlerbehandlung und Benachrichtigungen",
        ],
        running: [
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
        ],
      },
      {
        name: "Support Automation",
        description: "Der wiederkehrende Teil Ihres Supports, automatisiert und angebunden an Ihren Helpdesk.",
        included: [
          "Chat- und Voicebots, die häufige Fragen und Anrufe beantworten",
          "Tickets automatisch geroutet, getaggt und priorisiert",
          "Reports nach Zeitplan per E-Mail oder in Slack",
          "Angebunden an Zendesk, Freshdesk oder Jira",
        ],
        running: [
          "KI-Nutzung, von Ihrem KI-Anbieter pro Token abgerechnet, z. B. Claude Haiku 5.5 ab 0,10 $ / 0,50 $ pro Million Input-/Output-Tokens*",
          "Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat (jeweils bei jährlicher Abrechnung)",
          "Nur bei Voicebots: minutenpreise der Voice-Plattform, z. B. Retell AI ab 0,07 $ pro Minute, plus KI-Modell und Telefonleitung",
        ],
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
    email: "E-Mail",
    upwork: "Upwork-Bewertungen",
  },
  footer: {
    blogNav: "Blog",
    allPosts: "Alle Artikel",
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
    crm: { label: "Lead- & CRM-Automatisierung", blurb: "Workflows, Webhooks und APIs in Attio und HubSpot." },
  },
  cookie: {
    text: "Ich verwende Cookies für Analysen und Anzeigenmessung, um zu verstehen, wie Besucher diese Website finden und nutzen.",
    privacy: "Datenschutzerklärung",
    decline: "Ablehnen",
    accept: "Akzeptieren",
  },
  booking: {
    title: "Kostenlosen Health Check buchen",
    description: "Ein 30-minütiges Gespräch mit mir, Roman, danach ein schriftlicher Bericht. Unverbindlich, ohne Verkaufsgespräch.",
    about: "Thema: {topic}",
    close: "Schließen",
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
    submitting: "Wird gesendet…",
    submit: "Kostenlosen Health Check buchen",
    nextCalendar: "Als Nächstes wählen Sie einen Termin in meinem Kalender.",
    nextContact: "Ich kontaktiere Sie innerhalb von 24 Stunden, um einen Termin zu vereinbaren.",
    sendFailed: "Ihre Anfrage konnte nicht gesendet werden",
    networkError: "Bitte versuchen Sie es gleich noch einmal oder kontaktieren Sie mich direkt:",
    sentTitle: "Anfrage gesendet",
    sentCalendar: "Wählen Sie jetzt in meinem Kalender einen Termin, der Ihnen passt.",
    openCalendar: "Meinen Kalender öffnen",
    sent: "Ich melde mich innerhalb von 24 Stunden, um einen Termin abzustimmen.",
    errors: {
      nameRequired: "Der vollständige Name ist erforderlich",
      nameShort: "Der vollständige Name muss mindestens 2 Zeichen lang sein",
      nameLong: "Der vollständige Name muss kürzer als 50 Zeichen sein",
      nameChars: "Der vollständige Name darf nur Buchstaben, Leerzeichen, Punkte, Bindestriche und Apostrophe enthalten",
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
  blog: {
    metaTitle: "Blog zur Kundensupport-Automatisierung | TascaLab",
    metaDescription:
      "Ratgeber: KI-Support-Chatbots, Ticket-Routing, Zendesk-, Freshdesk- und Jira-Automatisierung, WhatsApp- und Telegram-Bots, Support-Kennzahlen, SLAs, EU-Regeln.",
    title: "Blog zur Kundensupport-Automatisierung",
    readArticle: "Artikel lesen",
    all: "Alle",
    minRead: "{n} Min. Lesezeit",
    filterLabel: "Artikel nach Thema filtern",
  },
  notFound: {
    title: "Seite nicht gefunden",
    text: "Diese Seite existiert nicht oder wurde verschoben.",
    back: "Zurück zur Startseite",
  },
  tools,
};

export default de;
