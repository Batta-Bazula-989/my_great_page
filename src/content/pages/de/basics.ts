import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "was-ist-kundensupport-automatisierung",
    category: "basics",
    navLabel: "Was ist Support-Automatisierung?",
    primaryKeyword: "was ist Kundensupport-Automatisierung",
    title: "Was ist Kundensupport-Automatisierung? Einfach erklärt",
    description:
      "Was Kundensupport-Automatisierung ist: Bots, Routing, Makros, Auto-Antworten, SLA-Timer, Berichte, was menschlich bleiben sollte und wie sie zum Helpdesk passt.",
    h1: "Was ist Kundensupport-Automatisierung?",
    intro:
      "Kundensupport-Automatisierung bedeutet, wiederkehrende Supportarbeit mit Regeln, Bots und Integrationen zu erledigen – etwa häufige Fragen beantworten, Tickets sortieren, Eingangsbestätigungen senden und Fristen überwachen –, ohne dass ein Agent jeden Schritt von Hand ausführt. Das meiste davon läuft in dem Helpdesk, den Sie bereits nutzen, erweitert um APIs und Webhooks. Ziel ist es, Ihren Agenten mehr Zeit für die Gespräche zu verschaffen, die Urteilsvermögen erfordern.",
    keyFacts: [
      "Zendesk-Trigger laufen unmittelbar, nachdem ein Ticket erstellt oder aktualisiert wurde; Zendesk-Automationen sind zeitbasiert und laufen einmal pro Stunde.",
      "Zendesk-Makros haben keine Bedingungen: Ein Agent entscheidet, wann er eines anwendet.",
      "Die Automatisierung in Zendesk, Freshdesk und Jira kann aus ihren Regeln heraus HTTP-Anfragen an andere Systeme senden.",
      "Laut Zendesk müssen komplexe, dringende oder sensible Anfragen unter Umständen an einen menschlichen Agenten übergeben werden.",
    ],
    sections: [
      {
        heading: "Kundensupport-Automatisierung: die Definition",
        blocks: [
          {
            type: "p",
            text: "Jede Support-Automatisierung besteht aus denselben drei Teilen: etwas, das sie startet (ein Ereignis wie ein neues Ticket oder verstrichene Zeit), Bedingungen, die entscheiden, ob sie greift, und Aktionen, die sie ausführt. Helpdesks bilden dieses Modell direkt ab. Zendesk nennt das Geschäftsregeln: Trigger laufen unmittelbar, nachdem ein Ticket erstellt oder aktualisiert wurde, während Automationen zeitbasiert sind und einmal pro Stunde auf Tickets laufen, die nicht geschlossen sind. Zendesk weist darauf hin, dass sich die beiden nicht darin unterscheiden, welche Aktionen sie ausführen können, sondern darin, welche Bedingungen sie auslösen.",
          },
          {
            type: "p",
            text: "Automatisierung bewegt sich auf einem Spektrum. Am einen Ende arbeitet sie, bevor ein Mensch das Ticket sieht: Ein Bot beantwortet die Frage, oder eine Regel setzt die Priorität und weist eine Gruppe zu. Am anderen Ende unterstützt sie den Agenten: Eine gespeicherte Antwort fügt eine häufige Antwort ein, oder eine Seitenleiste holt die Bestellung des Kunden aus einem anderen System. Beides zählt, und die meisten Teams brauchen beides.",
          },
        ],
      },
      {
        heading: "Die wichtigsten Arten von Support-Automatisierung",
        blocks: [
          {
            type: "table",
            caption: "Gängige Arten von Kundensupport-Automatisierung",
            head: ["Art", "Was sie leistet", "Beispiel in einem Helpdesk"],
            rows: [
              [
                "Self-Service und Bots",
                "Beantwortet häufige Fragen in Chat, Messaging oder E-Mail ohne Agenten",
                "Die AI agents von Zendesk beantworten Fragen mit Inhalten aus Ihren Wissensquellen und können an einen Menschen eskalieren",
              ],
              [
                "Routing und Triage",
                "Klassifiziert neue Tickets und leitet sie an die richtige Gruppe oder den richtigen Agenten weiter",
                "Zendesk-Trigger können Tickets beim Erstellen oder Aktualisieren Skills hinzufügen; Omnichannel-Routing verteilt die Arbeit nach Verfügbarkeit und Kapazität der Agenten",
              ],
              [
                "Makros und Textbausteine",
                "Wendet eine gespeicherte Antwort und Ticket-Änderungen in einem Schritt an",
                "Ein Zendesk-Makro kann Kommentartext hinzufügen, Felder aktualisieren, Tags hinzufügen oder entfernen und den Bearbeiter ändern",
              ],
              [
                "Automatische Antworten",
                "Bestätigt den Eingang und setzt sofort Erwartungen",
                "Ein ereignisbasierter Trigger, der dem Anfragenden beim Erstellen eines Tickets eine Eingangsbestätigung per E-Mail schickt",
              ],
              [
                "SLA-Timer und Eskalationen",
                "Überwacht Antwort- und Lösungsfristen und warnt vor einer Verletzung",
                "Eine SLA-Richtlinie plus eine zeitbasierte Regel, die eine Teamleitung alarmiert, bevor ein Ziel verfehlt wird",
              ],
              [
                "Reporting",
                "Sammelt Support-Kennzahlen und liefert sie nach Zeitplan",
                "Eine wöchentliche Zusammenfassung von Ticketvolumen, Zeit bis zur ersten Antwort und CSAT per E-Mail oder Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Makros sind ein nützlicher Grenzfall. Zendesk weist darauf hin, dass Makros keine Bedingungen haben: Nichts prüft ein Ticket, um zu entscheiden, ob ein Makro greift, also wählt es ein Agent aus. Damit sind gespeicherte Antworten der risikoärmste Einstieg, denn jedes Mal entscheidet noch ein Mensch.",
          },
          {
            type: "p",
            text: "Beim Routing zahlt sich Automatisierung oft zuerst aus, weil es jedes Ticket betrifft. Die Intelligent Triage von Zendesk etwa klassifiziert neue Tickets nach Thema, Stimmung und Sprache und kann sie über Omnichannel-Routing, skillbasiertes Routing oder Trigger weiterleiten. Einfachere Setups setzen Gruppe und Priorität über Regeln auf Basis von Schlüsselwörtern oder Formularfeldern.",
          },
        ],
      },
      {
        heading: "Was menschlich bleiben sollte",
        blocks: [
          {
            type: "p",
            text: "Automatisierung ist gut bei wiederholbarer, klar definierter Arbeit. Schwach ist sie bei Urteilsvermögen, Empathie und Ausnahmen. Zendesk weist für AI agents darauf hin, dass eine Anfrage manchmal an einen menschlichen Agenten übergeben werden muss, wenn sie komplex, dringend oder sensibel ist, und empfiehlt, diese Eskalationspfade vor dem Start festzulegen. In der Praxis sollten diese Fälle bei Menschen bleiben:",
          },
          {
            type: "ul",
            items: [
              "Beschwerden, Kündigungen und emotional aufgeladene Gespräche",
              "Abrechnungsstreitigkeiten, Erstattungen außerhalb der Richtlinien und andere Ausnahmen, die jemanden mit Entscheidungsbefugnis brauchen",
              "Kontosicherheit und Identitätsprüfungen, bei denen ein Fehler teuer ist",
              "Fragen, die der Bot nicht zuordnen kann oder bereits nicht beantworten konnte",
              "Umsatzstarke oder abwanderungsgefährdete Accounts, die Sie bewusst persönlich betreuen",
            ],
          },
          {
            type: "p",
            text: "Was auch immer Sie automatisieren: Sorgen Sie für einen sichtbaren Weg zu einem Menschen und geben Sie den Gesprächsverlauf weiter, damit der Kunde sich nicht wiederholen muss. Wie das geht, erklärt unser Leitfaden zur Übergabe vom Chatbot an einen Menschen.",
          },
        ],
      },
      {
        heading: "Wie Automatisierung an Ihren Helpdesk andockt",
        blocks: [
          {
            type: "p",
            text: "Um Ihren Helpdesk zu automatisieren, müssen Sie ihn selten ersetzen. Moderne Helpdesks können aus ihren Regeln heraus andere Systeme aufrufen, und andere Systeme können Tickets über die Helpdesk-API aktualisieren. So entstehen individuelle Automatisierungen:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Sie legen im Admin Center einen Webhook an und hängen ihn dann mit der Aktion 'Notify webhook' an einen Trigger oder eine Automation. Der Request-Body kann JSON, XML oder formularcodiert sein, und Platzhalter fügen Ticketdaten ein.",
              "Freshdesk: Automatisierungsregeln, die bei der Ticketerstellung oder bei Ticket-Aktualisierungen laufen, können die Aktion 'Trigger webhook' mit GET, POST, PUT, PATCH oder DELETE und Platzhaltern wie {{ticket.id}} nutzen. Fehlgeschlagene Webhooks werden alle 30 Minuten erneut versucht, bis zu 48 Aufrufe.",
              "Jira: Die Automatisierungsaktion 'Send web request' ruft ein anderes System auf, wenn eine Regel läuft, und kann auf die Antwort warten, damit spätere Schritte die zurückgegebenen Daten nutzen können.",
            ],
          },
          {
            type: "p",
            text: "Ein typischer individueller Ablauf sieht so aus:",
          },
          {
            type: "ol",
            items: [
              "Eine Helpdesk-Regel löst bei einem neuen oder aktualisierten Ticket aus und sendet einen Webhook.",
              "Ein Workflow-Tool wie Make oder n8n oder ein kleiner Service empfängt ihn und schlägt Daten an anderer Stelle nach: in einem Bestellsystem, einem CRM oder einem Sprachmodell.",
              "Der Workflow schreibt das Ergebnis über die Helpdesk-API zurück, als Tag, Feldwert, private Notiz oder Zuweisung.",
              "Agenten sehen das Ergebnis direkt im Ticket, und ab dort übernehmen die eigenen Regeln des Helpdesks.",
            ],
          },
        ],
      },
      {
        heading: "Wo Sie anfangen sollten",
        blocks: [
          {
            type: "ol",
            items: [
              "Listen Sie Ihre häufigsten Anfragetypen des letzten Monats auf und markieren Sie die, die jedes Mal nach denselben Schritten ablaufen.",
              "Bringen Sie zuerst Routing und automatische Antworten in Ordnung. Sie betreffen jedes Ticket und lassen sich leicht überprüfen.",
              "Machen Sie aus wiederholten Antworten Makros oder Textbausteine, bevor Sie sie in einen Bot packen.",
              "Ergänzen Sie einen Bot für die häufigsten, risikoarmen Fragen, mit einer klaren Übergabe an einen Menschen.",
              "Messen Sie Zeit bis zur ersten Antwort, Lösungszeit und CSAT vor und nach jeder Änderung, damit Sie wissen, was wirklich geholfen hat.",
            ],
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab ist ein Ein-Personen-Unternehmen von Roman Zakharenko, das Support-Automatisierung auf den Tools aufbaut, die Sie bereits nutzen, darunter Zendesk, Freshdesk, Jira und Slack, mit APIs, Webhooks sowie Make oder n8n. Zu den Einmalpreisen gehören Ticket Routing & Categorization (600–950 USD), ein Starter Chat Bot (350–450 USD) und Automated Reports (500–900 USD). Die meisten Setups dauern 1–3 Wochen und umfassen eine Basisdokumentation, 30 Tage Support nach dem Launch und keine versteckten Kosten. Sie können mit einem kostenlosen 30-minütigen Audit-Call starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ist Kundensupport-Automatisierung dasselbe wie ein Chatbot?",
        a: "Nein. Ein Chatbot ist nur eine Form davon. Auch Routing-Regeln, Makros, automatische Antworten, SLA-Timer und geplante Berichte sind Support-Automatisierung, und viele Teams beginnen damit, weil sie jedes Ticket betreffen.",
      },
      {
        q: "Was ist in Zendesk der Unterschied zwischen einem Trigger und einer Automation?",
        a: "Trigger sind ereignisbasiert und laufen unmittelbar, nachdem ein Ticket erstellt oder aktualisiert wurde. Automationen sind zeitbasiert und laufen einmal pro Stunde; sie eignen sich daher für Aktionen wie eine Erinnerung nach einer festgelegten Anzahl von Stunden.",
      },
      {
        q: "Muss ich den Helpdesk wechseln, um den Support zu automatisieren?",
        a: "Meist nicht. Die Automatisierung in Zendesk, Freshdesk und Jira kann aus ihren Regeln heraus ausgehende HTTP-Anfragen senden; Sie können also andere Systeme an den Helpdesk anbinden, den Sie bereits nutzen.",
      },
      {
        q: "Was sollte im Kundensupport nicht automatisiert werden?",
        a: "Komplexe, dringende oder sensible Gespräche, die laut Zendesk unter Umständen einen menschlichen Agenten brauchen, außerdem Streitfälle und Ausnahmen von Richtlinien, über die jemand mit Entscheidungsbefugnis entscheiden muss.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },
];
