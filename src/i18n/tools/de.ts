
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Tools",
  allTools: "Alle Tools",
  hub: {
    slug: "tools",
    metaTitle: "Kostenlose Rechner für Lead-Scoring & Support | TascaLab",
    metaDescription:
      "Kostenlose Rechner: Lead-Score bauen und testen, KI-Support-Agenten-Kosten vergleichen, Rechnungen der WhatsApp Business API schätzen, SLA-Fristen berechnen.",
    eyebrow: "Kostenlose Tools",
    title: "Kostenlose Tools für Vertriebs- und Support-Teams",
    intro: "Schnelle Rechner auf Basis veröffentlichter Preise und einfacher Mathematik. Kostenlos, ohne Anmeldung.",
    open: "Tool öffnen",
  },
  common: {
    freeTool: "Kostenloses Tool · ohne Anmeldung",
    howItWorks: "So funktioniert es",
    faqTitle: "Häufig gestellte Fragen",
    sources: "Quellen",
    estimate: "Nur Schätzwerte, kein Angebot.",
    max: "Maximum: {value}",
    min: "Minimum: {value}",
    perMonth: "/Monat",
    ctaTitle: "Möchten Sie eine genaue Zahl für Ihr Team?",
    ctaText:
      "Buchen Sie einen kostenlosen Health Check: ein 30-minütiges Gespräch, danach ein schriftlicher Bericht mit dem passenden Paket und Festpreis.",
    ctaBook: "Kostenlosen Health Check buchen",
    otherTools: "Weitere kostenlose Tools",
  },
  leadScore: {
    slug: "lead-scoring-rechner",
    navLabel: "Lead-Scoring-Rechner",
    short: "Bauen Sie einen Fit- und Engagement-Score, testen Sie ihn an einem Lead und kopieren Sie das Modell.",
    metaTitle: "Lead-Scoring-Rechner: Fit- & Engagement-Modell | TascaLab",
    metaDescription:
      "Gratis Lead-Scoring-Rechner: Fit- und Engagement-Score mit HubSpots Limits und Schwellenwerten bauen, an einem Lead testen, Modell kopieren. Ohne Anmeldung.",
    h1: "Lead-Scoring-Rechner",
    intro:
      "Bauen Sie einen punktebasierten Lead-Score so auf, wie HubSpots Lead-Scoring-Tool funktioniert: Fit-Kriterien dafür, wer der Lead ist, Engagement-Kriterien dafür, was er tut, jeder Score auf sein Limit begrenzt und in High, Medium und Low eingeteilt. Testen Sie ihn an einem Lead, prüfen Sie das Modell auf Fehler und kopieren Sie es dann in Ihr CRM.",
    inputs: {
      criteriaTitle: "Ihre Kriterien",
      criteriaHint:
        "Haken Sie die Kriterien an, die auf einen Lead zutreffen, den Sie testen möchten. Die Beispiele sind Platzhalter: Ersetzen Sie jede Bezeichnung und jeden Punktwert durch Ihre eigenen.",
      label: "Kriterium",
      score: "Score",
      points: "Punkte",
      applies: "Trifft auf den Test-Lead zu",
      remove: "{label} entfernen",
      add: "Kriterium hinzufügen",
      maxReached: "Bis zu {n} Kriterien.",
      settingsTitle: "Score-Einstellungen",
      limit: "Score-Limit",
      limitOption: "{min} bis {max}",
      high: "High ab",
      medium: "Medium ab",
      thresholdsHint:
        "Die Limits sind die Optionen von HubSpot. Die Standard-Schwellenwerte folgen HubSpots eigenem Beispiel: 70–100 High, 40–69 Medium, unter 40 Low.",
    },
    scores: { fit: "Fit", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "Branche passt zu Ihrem idealen Kundenprofil", score: "fit", points: 30, applies: true },
      { label: "Unternehmensgröße in Ihrem Zielbereich", score: "fit", points: 25, applies: true },
      { label: "Jobtitel ist eine Entscheiderrolle", score: "fit", points: 25, applies: false },
      { label: "Sitz in einer Region, die Sie nicht bedienen", score: "fit", points: -40, applies: false },
      { label: "Hat mit Interesse auf Outreach geantwortet", score: "engagement", points: 40, applies: true },
      { label: "Hat die Preisseite besucht", score: "engagement", points: 20, applies: true },
      { label: "Hat Ihre letzten drei E-Mails geöffnet", score: "engagement", points: 10, applies: false },
      { label: "Hat sich von Ihren E-Mails abgemeldet", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Ihr Test-Lead",
      combined: "Kombiniertes Label",
      combinedDesc: "{fit} Fit, {engagement} Engagement",
      range: "Möglicher Bereich: {min} bis {max}",
      checksTitle: "Bevor Sie es aufbauen",
      allGood: "In diesem Modell wurden keine Probleme gefunden.",
      noCriteria: "{score}: Fügen Sie mindestens ein Kriterium hinzu.",
      order: "{score}: Medium muss niedriger sein als High.",
      unreachable: "{score}: Kein Lead kann High erreichen. Die höchste mögliche Punktzahl eines Leads ist {max}.",
      capped: "{score}: Die positiven Punkte ergeben zusammen {total}, aber der Score endet bei {limit}.",
      copy: "Modell als Tabelle kopieren",
      copied: "Kopiert",
      copyFailed: "Kopieren nicht möglich. Markieren Sie die Kriterien und kopieren Sie sie von Hand.",
      tableHeads: { score: "Score", criterion: "Kriterium", points: "Punkte", limit: "Limit", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "So wird der Score berechnet",
        text: "Jedes Kriterium addiert oder subtrahiert Punkte, wenn es auf einen Lead zutrifft. Fit-Kriterien beschreiben, wer der Lead ist, etwa Branche, Unternehmensgröße oder Rolle; Engagement-Kriterien beschreiben, was der Lead tut, etwa Antworten, Besuche oder Öffnungen. Jeder Score endet an seinem Limit, wie in HubSpots Lead-Scoring-Tool, und die Schwellenwerte machen aus der Zahl High, Medium oder Low. Das kombinierte Label folgt HubSpots Konvention: Der Buchstabe ist das Fit-Band (A hoch, C niedrig) und die Zahl das Engagement-Band (1 hoch, 3 niedrig), ein Lead mit niedrigem Fit, aber hohem Engagement ist also C1.",
      },
      {
        heading: "Einrichtung in HubSpot",
        text: "HubSpots Lead-Scoring-Tool setzt Marketing Hub oder Sales Hub Professional oder Enterprise voraus. Die Score-Limits reichen von -100 bis 100 bis hin zu -10.000 bis 10.000, mit 100 als Standardmaximum. Innerhalb eines Scores können Sie Gruppen mit eigenen Limits anlegen, und alle Gruppenlimits werden auf das Score-Limit angerechnet. Für Engagement kann Score-Verfall die Punkte alle 1, 3, 6 oder 12 Monate senken, wobei jeder Monat mit 30 Tagen zählt.",
      },
      {
        heading: "Einrichtung in Attio",
        text: "Attio hat kein dediziertes Scoring-Tool. In den Tarifen Pro, Enterprise und Ultra kann ein Formel-Attribut Punkte mit if()-Bedingungen addieren und dabei mit dem Operator ?? leere Felder als 0 behandeln. Eine Formel, die eine Zahl zurückgibt, wird zu einem Zahl-Attribut, rechnet automatisch neu, wenn sich die verwendeten Felder ändern, und verbraucht keine Workspace-Credits. In Free und Plus speichern Sie den Score in einem Zahl-Attribut, das ein Workflow oder die API füllt.",
      },
      {
        heading: "Wann Sie keinen Score brauchen",
        text: "Wenn Ihr Team jeden neuen Lead noch am selben Tag liest, bringt ein Score wenig. Er lohnt sich, sobald Leads schneller eingehen, als jemand sie prüfen kann, oder wenn die wichtigsten Signale, etwa eine interessierte Antwort oder ein Besuch Ihrer Preisseite, in Tools liegen, die Ihr CRM nicht von selbst sieht.",
      },
    ],
    faqs: [
      {
        q: "Sind die Beispielpunkte eine Empfehlung?",
        a: "Nein. Es sind Platzhalter, die zeigen, wie die Rechnung funktioniert. Ersetzen Sie jedes Kriterium und jeden Punktwert durch Ihre eigenen. Die einzigen Standardwerte, die von einem Anbieter stammen, sind HubSpots Score-Limits und seine Beispiel-Schwellenwerte.",
      },
      {
        q: "Was bedeuten A1 und C3?",
        a: "Das sind HubSpots Labels für kombinierte Scores. Der Buchstabe ist das Fit-Band, von A (hoher Fit) bis C (niedriger Fit); die Zahl ist das Engagement-Band, von 1 (hohes Engagement) bis 3 (niedriges Engagement).",
      },
      {
        q: "Kann HubSpot den Score mit KI für mich erstellen?",
        a: "HubSpots KI-gestützte Kontakt-Scores brauchen Marketing Hub Enterprise und mindestens 50 Kontakte, 25 konvertierte und 25 nicht konvertierte, bevor ein Score erzeugt werden kann.",
      },
      {
        q: "Hat Attio Lead-Scoring?",
        a: "Kein dediziertes Scoring-Tool. In Pro, Enterprise und Ultra kann ein Formel-Attribut einen punktebasierten Score automatisch berechnen; in anderen Tarifen schreibt ein Workflow oder die API den Score in ein Zahl-Attribut.",
      },
      {
        q: "Wird gespeichert, was ich eingebe?",
        a: "Nein. Der Score wird in Ihrem Browser berechnet, und nichts, was Sie eingeben, wird irgendwohin gesendet.",
      },
    ],
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
      package: "Preis für {plan} (einmalig)",
      priceHint: "{plan} kostet ab {price}. Tragen Sie den Festpreis aus Ihrem Health-Check-Bericht ein, falls Sie einen haben.",
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
        "Beispielhafte Standardwerte: Keine offizielle Quelle veröffentlicht einen typischen Wert. Ersetzen Sie sie durch die echten Zahlen Ihres Bots aus dem Nutzungs-Dashboard Ihres KI-Anbieters.",
    },
    results: {
      title: "Geschätzte Kosten",
      vendor: "Anbieter",
      monthly: "Pro Monat",
      year: "12 Monate",
      yourBuild: "Einmalige Entwicklung",
      buildLine: "{price} einmalig + {monthly}/Monat laufende Kosten",
      payback: "Günstiger als {vendor} ab Monat {months}",
      neverCheaper: "Bei diesem Volumen wird die Entwicklung innerhalb von 12 Monaten gegenüber keinem Anbieter günstiger.",
      cheapest: "Günstigster Anbieter",
      currencyNote: "Die Anbieterpreise sind USD-Listenpreise, umgerechnet zum EZB-Kurs vom 16. Oktober 2026.",
      pricesAsOf: "Listenpreise der Anbieter, Stand {date}.",
      empty: "Geben Sie Ihre KI-Gespräche pro Monat ein, um die Kosten zu vergleichen.",
    },
    units: {
      fin: "0,99 $ pro Ergebnis; mit einem anderen Helpdesk ein Monatsminimum von 49 $, das 50 Ergebnisse enthält",
      zendesk: "2,00 $ pro automatisierter Lösung, nutzungsbasiert (Pay-as-you-go; 1,50 $ mit Abnahmeverpflichtung)",
      freddy: "49 $ pro 100 Sitzungen",
      hubspot: "0,50 $ pro gelöstem Gespräch (50 HubSpot Credits); erfordert einen Professional- oder Enterprise-Tarif",
      tidio: "Monatspakete von 39 $ für 50 bis 700 $ für 1.000 Gespräche; darüber hinaus Lyro Connect ab 0,50 $ pro Gespräch",
      agentforce: "0,10 $ pro Aktion (20 Flex Credits, 500 $ pro 100.000)",
    },
    notIncluded:
      "Nicht enthalten: Ihr Helpdesk-Abo, im Tarif enthaltene Kontingente, Mengenrabatte und Steuern. Fin rechnet außerdem Procedure-Übergaben (eine Procedure, die Sie so einrichten, dass sie mit einer Übergabe endet) als Ergebnisse ab, daher können die tatsächlichen Kosten höher sein. Zendesk stellt Konten auf Lösungsstufen um, deren Preise das Vertriebsteam von Zendesk festlegt.",
    sections: [
      {
        heading: "So funktioniert die Berechnung",
        text: "Gelöste Gespräche sind Ihre monatlichen Gespräche mal dem Anteil, der ohne menschliches Eingreifen gelöst wird. Fin rechnet pro Ergebnis zusätzlich zu einem Monatsminimum von 49 $ ab, Zendesk und HubSpot pro Lösung, Freddy pro Paket mit 100 Sitzungen, Tidio Lyro in Monatspaketen von Gesprächen, auf die es antwortet, und Agentforce pro Aktion. Der Listenpreis jedes Anbieters ist unten mit seiner Preisseite verlinkt.",
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
        a: "Es sind Listenpreise, wie sie auf den offiziellen Preisseiten der jeweiligen Anbieter veröffentlicht sind, geprüft im November 2026. Anbieter ändern ihre Preise oft; prüfen Sie daher vor dem Kauf die verlinkten Seiten.",
      },
      {
        q: "Was zählt als Lösung?",
        a: "Jeder Anbieter definiert das anders. Fin rechnet pro Ergebnis ab (eine Lösung oder eine Procedure, die mit einer Übergabe endet), Zendesk pro automatisierter Lösung, HubSpot pro Gespräch, das nicht innerhalb von 72 Stunden an eine Person übergeben wird, Freddy pro Sitzung und Tidio pro Gespräch, auf das Lyro antwortet. Lesen Sie vor dem Vergleich die Definition des jeweiligen Anbieters.",
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
      "Nicht enthalten: Mengenrabatte für Utility- und Authentifizierungsnachrichten, Nachrichten des Meta Business Agent, die Gebühren Ihres WhatsApp-Anbieters und Steuern. Nachrichten in einem kostenlosen Entry-Point-Fenster werden nicht berechnet.",
    sections: [
      {
        heading: "Was sich am 1. Oktober 2026 geändert hat",
        text: "Frei formulierte Service-Nachrichten, also die Antworten, die Sie innerhalb des 24-stündigen Kundenservice-Fensters senden, sind nicht mehr unbegrenzt kostenlos. Jede Business-Telefonnummer erhält 1.000 kostenlose Service-Nachrichten pro Monat; danach berechnet Meta sie zum Utility-Preis des jeweiligen Marktes. Auch Utility-Templates, die innerhalb des Fensters gesendet werden, werden jetzt berechnet.",
      },
      {
        heading: "Wie Meta Nachrichten abrechnet",
        text: "Meta berechnet pro zugestellter Nachricht. Der Preis hängt von der Nachrichtenkategorie (Marketing, Utility, Authentifizierung oder Service) und dem Land des Empfängers ab; Service-Nachrichten kosten denselben Listenpreis wie Utility- und Authentifizierungsnachrichten im selben Markt. Eine fünfte Kategorie – Nachrichten von Metas eigenem KI-Agenten, dem Meta Business Agent – wird stattdessen pro Token abgerechnet. Meta veröffentlicht Preislisten in 16 Währungen und darf Preise nur am ersten Tag eines Quartals ändern.",
      },
      {
        heading: "Was dieser Rechner nicht berücksichtigt",
        text: "Für Utility- und Authentifizierungsnachrichten gibt es Mengenstaffeln, die den Preis bei hohen Volumen senken; sie werden hier nicht abgebildet. Im kostenlosen Entry-Point-Fenster werden Nachrichten nicht berechnet. Es öffnet sich, wenn Sie innerhalb von 24 Stunden jemandem antworten, der Ihnen über eine Click-to-WhatsApp-Anzeige in der Android- oder iOS-App von WhatsApp geschrieben hat, und kann bis zu 7 Tage offen bleiben. Nachrichten des Meta Business Agent (2,00 $ pro Million Tokens) und die Gebühren Ihres WhatsApp-Anbieters sind nicht enthalten.",
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
