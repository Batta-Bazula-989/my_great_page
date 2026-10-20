
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Tools",
  allTools: "Alle Tools",
  hub: {
    slug: "tools",
    metaTitle: "Kostenlose Kundenservice-Tools & Rechner | TascaLab",
    metaDescription:
      "Kostenlose Rechner für Support-Teams: KI-Agenten-Kosten vergleichen, Rechnungen der WhatsApp Business API schätzen und SLA-Fristen in Geschäftszeiten berechnen.",
    eyebrow: "Kostenlose Tools",
    title: "Kostenlose Tools für Support-Teams",
    intro: "Schnelle Rechner auf Basis veröffentlichter Preise und einfacher Mathematik. Kostenlos, ohne Anmeldung.",
    open: "Tool öffnen",
  },
  common: {
    freeTool: "Kostenloses Tool · ohne Anmeldung",
    howItWorks: "So funktioniert es",
    faqTitle: "Häufig gestellte Fragen",
    sources: "Quellen",
    estimate: "Nur Schätzwerte, kein Angebot.",
    perMonth: "/Monat",
    ctaTitle: "Möchten Sie eine genaue Zahl für Ihr Team?",
    ctaText:
      "Buchen Sie einen kostenlosen Health Check: ein 30-minütiges Gespräch, danach ein schriftlicher Bericht mit dem passenden Paket und Festpreis.",
    ctaBook: "Kostenlosen Health Check buchen",
    otherTools: "Weitere kostenlose Tools",
  },
  aiAgent: {
    slug: "ki-support-agent-kostenrechner",
    navLabel: "Kosten für KI-Support-Agenten",
    short: "Vergleichen Sie KI-Agenten mit Abrechnung pro Lösung bei Ihrem Volumen mit einer einmaligen Entwicklung.",
    metaTitle: "Kostenrechner für KI-Support-Agenten 2026 | TascaLab",
    metaDescription:
      "Vergleichen Sie die Monatskosten von Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro und Agentforce bei Ihrem Volumen mit eigenem KI-Agenten zum Einmalpreis.",
    h1: "Kostenrechner für KI-Support-Agenten",
    intro:
      "Die meisten KI-Support-Agenten rechnen pro Lösung, Gespräch oder Aktion ab, daher wächst die Rechnung mit Ihrem Volumen. Geben Sie Ihre Zahlen ein, um die Listenpreise von sechs Anbietern mit einer einmaligen Entwicklung zu vergleichen.",
    inputs: {
      title: "Ihr Volumen",
      conversations: "KI-Gespräche pro Monat",
      resolutionRate: "Ohne menschliches Eingreifen gelöst",
      actions: "Agentforce-Aktionen pro Gespräch",
      buildTitle: "Einmalige Entwicklung",
      package: "Paket",
      platform: "Automatisierungsplattform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/Monat, bei jährlicher Abrechnung)",
        make: "Make Core (9 $/Monat, bei jährlicher Abrechnung)",
        selfHosted: "n8n selbst gehostet (Serverkosten nicht enthalten)",
      },
      tokens: "KI-Tokens pro Gespräch",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint:
        "Beispielwerte aus einem veröffentlichten Support-Gespräch mit 5 Nachrichten. Passen Sie sie an Ihren Bot an.",
    },
    results: {
      title: "Geschätzte monatliche Kosten",
      vendor: "Anbieter",
      monthly: "Pro Monat",
      year: "12 Monate",
      yourBuild: "Einmalige Entwicklung",
      buildLine: "{price} einmalig + {monthly}/Monat laufende Kosten",
      payback: "Günstiger als {vendor} ab Monat {months}",
      neverCheaper: "Bei diesem Volumen wird die Entwicklung innerhalb von 12 Monaten gegenüber keinem Anbieter günstiger.",
      cheapest: "Am günstigsten",
      currencyNote: "Die Anbieterpreise sind USD-Listenpreise, umgerechnet zum EZB-Kurs vom 16. Oktober 2026.",
    },
    units: {
      fin: "0,99 $ pro Ergebnis; mindestens 50 pro Monat mit einem anderen Helpdesk",
      zendesk: "2,00 $ pro automatisierter Lösung, nutzungsbasiert (Pay-as-you-go)",
      freddy: "49 $ pro 100 Sitzungen",
      hubspot: "0,50 $ pro gelöstem Gespräch; erfordert einen Professional- oder Enterprise-Tarif",
      tidio: "0,50 $ pro Gespräch, auf das Lyro antwortet",
      agentforce: "0,10 $ pro Aktion (20 Flex Credits)",
    },
    notIncluded:
      "Nicht enthalten: Ihr Helpdesk-Abo, im Tarif enthaltene Kontingente, Mengenrabatte und Steuern. Fin rechnet außerdem einige Übergaben und Weiterleitungen als Ergebnisse ab, daher können die tatsächlichen Kosten höher sein.",
    sections: [
      {
        heading: "So funktioniert die Berechnung",
        text: "Gelöste Gespräche sind Ihre monatlichen Gespräche mal dem Anteil, der ohne menschliches Eingreifen gelöst wird. Fin, Zendesk und HubSpot rechnen pro Lösung oder Ergebnis ab, Freddy pro Paket mit 100 Sitzungen, Tidio Lyro pro Gespräch, auf das es antwortet, und Agentforce pro Aktion. Der Listenpreis jedes Anbieters ist unten mit seiner Preisseite verlinkt.",
      },
      {
        heading: "Warum Rechnungen mit Abrechnung pro Lösung wachsen",
        text: "Wenn ein Anbieter pro Lösung abrechnet, erhöht jedes zusätzliche Gespräch, das der Agent löst, die Rechnung. Bei einer einmaligen Entwicklung gibt es keine Gebühr pro Lösung: Sie bezahlen direkt den KI-Anbieter für Tokens und die Automatisierungsplattform für ihren Tarif.",
      },
      {
        heading: "Was eine einmalige Entwicklung im Betrieb kostet",
        text: "Die KI-Nutzung rechnet Ihr KI-Anbieter pro Token ab. Dieser Rechner verwendet die Listenpreise von Claude Haiku 5.5 für Prompts bis 100.000 Tokens: 0,10 $ pro Million Input-Tokens und 0,50 $ pro Million Output-Tokens. Dazu kommt die Automatisierungsplattform: n8n selbst gehostet (kostenlose Software; Sie zahlen für den Server), n8n Cloud ab 20 €/Monat oder Make ab 9 $/Monat, jeweils bei jährlicher Abrechnung.",
      },
    ],
    faqs: [
      {
        q: "Sind diese Preise aktuell?",
        a: "Es sind Listenpreise, wie sie im Oktober 2026 auf der Preisseite des jeweiligen Anbieters veröffentlicht waren. Anbieter ändern ihre Preise oft; prüfen Sie daher vor dem Kauf die verlinkten Seiten.",
      },
      {
        q: "Was zählt als Lösung?",
        a: "Jeder Anbieter definiert das anders. Fin rechnet pro Ergebnis ab, Zendesk pro automatisierter Lösung, HubSpot pro gelöstem Gespräch und Freddy pro Sitzung. Lesen Sie vor dem Vergleich die Definition des jeweiligen Anbieters.",
      },
      {
        q: "Warum werden die Preise in meiner Währung angezeigt?",
        a: "Die Anbieter veröffentlichen diese Preise in US-Dollar. Außerhalb der US-Version dieser Seite werden sie zum Referenzkurs der Europäischen Zentralbank vom 16. Oktober 2026 umgerechnet.",
      },
      {
        q: "Ist eine einmalige Entwicklung immer günstiger?",
        a: "Nein. Bei geringem Volumen kann ein Agent mit Abrechnung pro Lösung weniger kosten. Der Rechner zeigt, ob und ab wann eine einmalige Entwicklung bei Ihrem Volumen günstiger wird.",
      },
    ],
  },
  whatsapp: {
    slug: "whatsapp-business-kostenrechner",
    navLabel: "Kosten für WhatsApp Business",
    short: "Schätzen Sie Ihre monatliche WhatsApp-API-Rechnung, inklusive des neuen kostenlosen Service-Kontingents.",
    metaTitle: "WhatsApp Business API: Kostenrechner 2026 | TascaLab",
    metaDescription:
      "Schätzen Sie Ihre WhatsApp-Business-Kosten pro Monat nach Metas Preisen pro Nachricht, mit 1.000 kostenlosen Service-Nachrichten je Nummer ab 1. Oktober 2026.",
    h1: "Kostenrechner für die WhatsApp Business API",
    intro:
      "Seit dem 1. Oktober 2026 berechnet Meta WhatsApp-Service-Nachrichten, die über 1.000 kostenlose pro Business-Nummer und Monat hinausgehen, zum Utility-Preis des jeweiligen Marktes. Geben Sie Ihre Nachrichtenmengen und die Preise aus Metas Preisliste für das Land Ihrer Kunden ein.",
    inputs: {
      volumeTitle: "Nachrichten pro Monat",
      numbers: "Business-Telefonnummern",
      service: "Service-Nachrichten (frei formulierte Antworten)",
      utility: "Utility-Templates",
      marketing: "Marketing-Templates",
      authentication: "Authentifizierungs-Templates",
      ratesTitle: "Preise pro Nachricht",
      ratesHint: "Übernehmen Sie die Preise für das Land Ihrer Kunden aus Metas Preisliste in Ihrer Abrechnungswährung.",
      rateCard: "Metas Preislisten öffnen",
      utilityRate: "Utility-Preis (gilt auch für Service-Nachrichten)",
      marketingRate: "Marketing-Preis",
      authenticationRate: "Authentifizierungs-Preis",
    },
    results: {
      title: "Geschätzte monatliche Kosten",
      freeService: "Genutzte kostenlose Service-Nachrichten",
      billableService: "Kostenpflichtige Service-Nachrichten",
      service: "Service-Nachrichten",
      utility: "Utility-Templates",
      marketing: "Marketing-Templates",
      authentication: "Authentifizierungs-Templates",
      total: "Gesamt pro Monat",
      enterRates: "Geben Sie Ihre Preise ein, um die Kosten zu sehen.",
    },
    notIncluded:
      "Nicht enthalten: Mengenrabatte für Utility- und Authentifizierungsnachrichten, die Gebühren Ihres WhatsApp-Anbieters und Steuern. Nachrichten in einem kostenlosen Entry-Point-Fenster werden nicht berechnet.",
    sections: [
      {
        heading: "Was sich am 1. Oktober 2026 geändert hat",
        text: "Frei formulierte Service-Nachrichten, also die Antworten, die Sie innerhalb des 24-stündigen Kundenservice-Fensters senden, sind nicht mehr unbegrenzt kostenlos. Jede Business-Telefonnummer erhält 1.000 kostenlose Service-Nachrichten pro Monat; danach berechnet Meta sie zum Utility-Preis des jeweiligen Marktes. Auch Utility-Templates, die innerhalb des Fensters gesendet werden, werden jetzt berechnet.",
      },
      {
        heading: "Wie Meta Nachrichten abrechnet",
        text: "Meta berechnet pro zugestellter Nachricht. Der Preis hängt von der Nachrichtenkategorie (Marketing, Utility, Authentifizierung oder Service) und dem Land des Empfängers ab. Meta veröffentlicht Preislisten in mehreren Währungen und darf Preise nur am ersten Tag eines Quartals ändern.",
      },
      {
        heading: "Was dieser Rechner nicht berücksichtigt",
        text: "Für Utility- und Authentifizierungsnachrichten gibt es Mengenstaffeln, die den Preis bei hohen Volumen senken; sie werden hier nicht abgebildet. Nachrichten, die im 72-stündigen kostenlosen Entry-Point-Fenster nach einer Click-to-WhatsApp-Anzeige oder einem Button auf einer Facebook-Seite gesendet werden, sind kostenlos. Ihr WhatsApp-Anbieter kann eigene Gebühren hinzufügen.",
      },
    ],
    faqs: [
      {
        q: "Sind WhatsApp-Service-Nachrichten noch kostenlos?",
        a: "Seit dem 1. Oktober 2026 erhält jede Business-Telefonnummer 1.000 kostenlose Service-Nachrichten pro Monat. Ab der 1.001. Nachricht berechnet Meta den Utility-Preis des jeweiligen Marktes.",
      },
      {
        q: "Warum muss ich die Preise eingeben?",
        a: "Die Preise hängen vom Land Ihrer Kunden und Ihrer Abrechnungswährung ab. Meta veröffentlicht sie in seinen Preislisten; übernehmen Sie die für Sie geltenden Preise, um eine genaue Schätzung zu erhalten.",
      },
      {
        q: "Wie oft ändert Meta die WhatsApp-Preise?",
        a: "Laut Meta können die Preise nur am ersten Tag eines Quartals angepasst werden, also bis zu viermal im Jahr.",
      },
      {
        q: "Sind die Gebühren meines Anbieters enthalten?",
        a: "Nein. Der Rechner deckt nur die Gebühren von Meta pro Nachricht ab. Ihr WhatsApp Business Solution Provider kann eigene Gebühren berechnen.",
      },
    ],
  },
  sla: {
    slug: "sla-rechner",
    navLabel: "SLA-Rechner",
    short: "Berechnen Sie SLA-Fälligkeiten und Erstantwortzeiten in Geschäftszeiten.",
    metaTitle: "SLA-Rechner mit Geschäftszeiten & Feiertagen | TascaLab",
    metaDescription:
      "Berechnen Sie, wann ein Support-SLA fällig ist oder wie viel Geschäftszeit eine Erstantwort brauchte, mit Ihren Arbeitszeiten, Arbeitstagen und Feiertagen.",
    h1: "SLA-Rechner mit Geschäftszeiten",
    intro:
      "SLA-Ziele werden meist in Geschäftszeiten gezählt, daher kann ein 4-Stunden-Ziel, das am Freitagnachmittag gesetzt wird, am Montag fällig werden. Geben Sie eine Startzeit und Ihre Arbeitszeiten ein, um den Fälligkeitszeitpunkt zu sehen, oder messen Sie die Geschäftszeit zwischen zwei Zeitpunkten.",
    modes: { due: "Wann ist es fällig?", elapsed: "Wie lange hat es gedauert?" },
    inputs: {
      received: "Ticket eingegangen",
      target: "SLA-Ziel",
      hours: "Stunden",
      minutes: "Minuten",
      replied: "Erste Antwort gesendet",
      scheduleTitle: "Geschäftszeiten",
      opens: "Beginn",
      closes: "Ende",
      days: "Arbeitstage",
      dayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      holidays: "Feiertage",
      addHoliday: "Hinzufügen",
      removeHoliday: "{date} entfernen",
      noHolidays: "Keine Feiertage hinzugefügt.",
    },
    results: {
      dueAt: "Fällig",
      calendarTime: "Kalenderzeit bis zur Fälligkeit",
      businessTime: "Geschäftszeit",
      elapsedCalendar: "Kalenderzeit",
      withinTarget: "Innerhalb des Ziels von {target}",
      overTarget: "Über dem Ziel von {target}",
      invalid: "Prüfen Sie die Zeiten und die Geschäftszeiten.",
      duration: "{h} Std. {m} Min.",
      days: "{d} Tg. {h} Std. {m} Min.",
    },
    sections: [
      {
        heading: "Wie SLAs in Geschäftszeiten gezählt werden",
        text: "Die SLA-Uhr läuft nur während der Geschäftszeiten an Arbeitstagen. Geht ein Ticket außerhalb dieser Zeiten ein, startet die Uhr, wenn der nächste Arbeitstag beginnt. Feiertage, die Sie hinzufügen, zählen als arbeitsfreie Tage.",
      },
      {
        heading: "Zeitzonen",
        text: "Alle Zeiten werden in einer einzigen Zeitzone behandelt: der Zeitzone Ihrer Geschäftszeiten. Geben Sie die Ticketzeiten in derselben Zeitzone ein.",
      },
    ],
    faqs: [
      {
        q: "Überspringt der Rechner Wochenenden?",
        a: "Ja. Es zählen nur die Arbeitstage, die Sie auswählen. Samstag und Sonntag sind standardmäßig nicht ausgewählt.",
      },
      {
        q: "Wie berücksichtige ich gesetzliche Feiertage?",
        a: "Fügen Sie jeden Feiertag als Datum hinzu. Der Rechner behandelt ihn als arbeitsfreien Tag.",
      },
      {
        q: "Hat ein Arbeitstag acht Stunden?",
        a: "Nur wenn Ihre Geschäftszeiten acht Stunden umfassen. Geben Sie Ihre Anfangs- und Endzeiten ein und legen Sie dann das Ziel in Stunden fest.",
      },
    ],
  },
};

export default tools;
