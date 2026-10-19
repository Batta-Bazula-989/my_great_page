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

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "chatbot-uebergabe-an-mitarbeiter",
    category: "basics",
    navLabel: "Chatbot-Übergabe an Mitarbeiter",
    primaryKeyword: "Chatbot Übergabe an Mitarbeiter",
    title: "Chatbot-Übergabe an Mitarbeiter: Auslöser, Kontext, Setup",
    description:
      "Übergabe vom Chatbot an Mitarbeiter: wann eskalieren, welcher Kontext an Agenten geht, Fallbacks nach Feierabend, Umsetzung in Zendesk, Freshdesk, Messenger.",
    h1: "Chatbot-Übergabe an Mitarbeiter: eskalieren, ohne den Kunden zu verlieren",
    intro:
      "Die Übergabe vom Chatbot an einen Menschen ist der Moment, in dem ein Bot ein Gespräch nicht mehr selbst führt, sondern es mit seinem Verlauf und allen gesammelten Details an einen menschlichen Agenten oder eine Warteschlange übergibt. Eine gute Übergabe erfolgt im richtigen Moment, transportiert den Kontext, damit sich der Kunde nicht wiederholen muss, und funktioniert auch dann, wenn niemand online ist. Dieser Leitfaden behandelt die Auslöser, den zu übergebenden Kontext und wie Zendesk, Freshdesk und Messenger die Übergabe umsetzen.",
    keyFacts: [
      "Laut Zendesk muss ein AI agent eine Anfrage unter Umständen an einen Menschen übergeben, wenn sie komplex, dringend oder sensibel ist.",
      "Freshdesk AI Agents können automatisch übergeben, wenn ein Kunde von Ihnen festgelegte Trigger-Phrasen verwendet, etwa nach einem Agenten fragt.",
      "Wenn in Dialogflow CX kein Intent den Klassifizierungsschwellenwert erreicht, wird statt eines Treffers ein No-Match-Ereignis ausgelöst.",
      "Im Messenger entscheidet das Handover Protocol, welche App einen Konversations-Thread besitzt; für Instagram hat Meta auf Conversation Routing umgestellt.",
    ],
    sections: [
      {
        heading: "Was eine Übergabe vom Chatbot an einen Menschen ist",
        blocks: [
          {
            type: "p",
            text: "Eine Übergabe (Handoff), auch Eskalation oder Transfer genannt, überträgt die Verantwortung für ein Gespräch von der Automatisierung auf einen Menschen. Je nach Kanal ist das Ergebnis ein Live-Chat, der einem Agenten zugewiesen ist, ein Gespräch, das in einer Warteschlange wartet, oder ein Ticket, das ein Agent später übernimmt. Bei den AI agents von Zendesk bauen Sie das mit Eskalationsblöcken im Dialog-Builder, die festlegen, wie eine Anfrage an einen Menschen geht, wenn der AI agent sie nicht lösen kann.",
          },
          {
            type: "p",
            text: "Übergaben gibt es in zwei Formen. Bei einer synchronen Übergabe bleibt der Kunde im selben Live-Gespräch, und ein Agent steigt ein. Bei einer asynchronen Übergabe wird ein Ticket erstellt, damit ein Agent später antworten kann – der übliche Fallback, wenn niemand verfügbar ist. Zendesk dokumentiert beide Varianten, darunter einen Workflow für asynchrone Ticket-Eskalationen, mit dem Kunden eine Nachricht hinterlassen können, wenn Ihr Team nicht verfügbar ist.",
          },
        ],
      },
      {
        heading: "Wann der Bot übergeben sollte",
        blocks: [
          {
            type: "table",
            caption: "Gängige Auslöser für eine Chatbot-Übergabe",
            head: ["Auslöser", "Wie er aussieht", "Wie er erkannt wird"],
            rows: [
              [
                "Kunde verlangt einen Menschen",
                "Agent, mit einer Person sprechen, das hilft mir nicht",
                "Freshdesk AI Agents übergeben automatisch bei Trigger-Phrasen, die Sie festlegen, etwa der Bitte, mit einem Agenten zu sprechen",
              ],
              [
                "Geringe Konfidenz oder kein Treffer",
                "Der Bot erkennt nicht, was der Kunde will",
                "Dialogflow CX löst ein No-Match-Ereignis aus, wenn kein Intent den Klassifizierungsschwellenwert erreicht; nutzen Sie diesen Fallback, um einen Menschen anzubieten",
              ],
              [
                "Sensibles oder dringendes Thema",
                "Beschwerden, fehlgeschlagene Zahlungen, IT-Sicherheit, rechtliche Themen oder Personensicherheit",
                "Zendesk nennt komplexe, dringende oder sensible Anfragen als Gründe für eine Übergabe; zu den Beispiel-Trigger-Phrasen von Freshdesk gehört die Meldung einer fehlgeschlagenen Zahlung",
              ],
              [
                "Wiederholtes Scheitern",
                "Der Kunde formuliert dieselbe Frage um, oder der Bot dreht sich im Kreis",
                "Fallback-Antworten in der Sitzung zählen und nach einer festgelegten Anzahl eskalieren",
              ],
              [
                "Geschäftsregel",
                "VIP-Account, hoher Bestellwert, offener Störfall",
                "Kundendaten per API abrufen, bevor der Bot antwortet, und diese Kunden direkt an einen Menschen weiterleiten",
              ],
            ],
          },
          {
            type: "p",
            text: "Konfidenz ist der Auslöser, den Teams am häufigsten implizit lassen. In Dialogflow CX wird der Intent mit der höchsten Bewertung nur dann als Treffer zurückgegeben, wenn sein Konfidenzwert größer oder gleich dem Klassifizierungsschwellenwert ist; andernfalls wird ein No-Match-Ereignis ausgelöst. Behandeln Sie dieses Ereignis als Signal: Stellen Sie eine klärende Rückfrage und übergeben Sie, wenn es erneut auftritt.",
          },
          {
            type: "p",
            text: "Zendesk rät außerdem, eine Eskalation nur dann anzubieten, wenn der AI agent den Kunden nicht zu Self-Service-Ressourcen führen kann. So bleiben die Agenten für echte Probleme frei – verstecken Sie die Option aber nicht. Ein Kunde, der ausdrücklich nach einem Menschen fragt, sollte einen bekommen oder eine klare Auskunft, wann das der Fall sein wird.",
          },
        ],
      },
      {
        heading: "Den Kontext übergeben, nicht nur den Kunden",
        blocks: [
          {
            type: "p",
            text: "Eine Übergabe, die das Gespräch verliert, zwingt den Kunden, von vorn anzufangen. Der Legacy-Schritt 'Transfer to agent' von Zendesk erstellt zum Beispiel ein Ticket mit dem Gesprächsverlauf des Kunden, den der Kunde nicht sieht, und kann diesem Ticket Tags für das Routing hinzufügen. Freshdesk AI Agents können vor der Übergabe Details wie eine Kunden-ID, eine Referenznummer oder eine Bestellnummer erfassen, wenn die Erfassung von Eigenschaften sowohl im Gesprächsverhalten als auch in den Übergabe-Einstellungen aktiviert ist.",
          },
          {
            type: "p",
            text: "Der Agent sollte mindestens Folgendes erhalten:",
          },
          {
            type: "ul",
            items: [
              "Das vollständige Transkript, einschließlich dessen, was der Bot bereits vorgeschlagen hat",
              "Den Grund für die Übergabe: Kundenwunsch, kein Treffer, sensibles Thema oder Geschäftsregel",
              "Identitätsdaten wie Name, E-Mail oder Account-ID und ob sie verifiziert wurden",
              "Strukturierte Felder, die der Bot erfasst hat, etwa Bestellnummer oder Produkt",
              "Tags oder eine Kategorie, damit Routing-Regeln das Gespräch an die richtige Gruppe schicken",
            ],
          },
          {
            type: "p",
            text: "Setzen Sie in derselben Nachricht die Erwartungen des Kunden: Sagen Sie ihm, dass ein Mensch übernimmt und wann er ungefähr eine Antwort erhält.",
          },
        ],
      },
      {
        heading: "Wie Zendesk, Freshdesk und Messenger die Übergabe umsetzen",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: Eskalationsblöcke im Dialog-Builder des AI agents legen fest, wohin ein Gespräch geht, wenn der AI agent es nicht lösen kann, etwa zur Weiterleitung an einen Agenten. Ein Verfügbarkeitsblock kann Geschäftszeiten oder die Verfügbarkeit von Agenten prüfen, bevor die Eskalation läuft.",
              "Freshdesk: In den Übergabe-Einstellungen des AI Agents aktivieren Sie 'Transfer conversation', legen die Trigger-Phrasen fest, die eine automatische Übergabe auslösen sollen, und können den AI Agent vorher Kundendaten erfassen lassen.",
              "Messenger: Wenn mehr als eine App die Nachrichten einer Facebook-Seite bearbeitet, etwa Ihr Bot und ein Live-Chat-Posteingang, entscheidet das Handover Protocol von Meta, welche App den Thread besitzt. Der Webhook messaging_handovers meldet die Ereignisse pass thread control, take thread control, request thread control und app role. Ein pass_thread_control-Ereignis enthält die App-IDs des bisherigen und des neuen Besitzers sowie einen Metadaten-String, der im API-Request gesetzt wird – ein praktischer Ort für den Grund der Übergabe.",
              "Instagram: Laut Changelog von Meta wird das Handover Protocol für Instagram nicht mehr unterstützt, und alle Unternehmen wurden auf Conversation Routing migriert, mit dem Sie festlegen, welche Partner Kundengespräche zu einem bestimmten Zeitpunkt steuern. Meta beschreibt Conversation Routing als abwärtskompatibel zu den meisten APIs des Handover Protocol.",
            ],
          },
        ],
      },
      {
        heading: "Anfragen außerhalb der Geschäftszeiten",
        blocks: [
          {
            type: "p",
            text: "Ein Bot, der einen Menschen verspricht, wenn niemand online ist, ist schlimmer als gar keine Übergabe. Prüfen Sie zuerst die Verfügbarkeit und wählen Sie dann einen Fallback:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Ein Verfügbarkeitsblock prüft Geschäftszeiten oder die Verfügbarkeit von Agenten. In einem synchronen Kanal wie Messaging schlägt Zendesk vor, außerhalb der Arbeitszeiten der Agenten stattdessen per E-Mail zu eskalieren, und der Workflow für asynchrone Ticket-Eskalationen lässt Kunden eine Nachricht hinterlassen, die ein Mensch später bearbeitet.",
              "Freshdesk: Mit der Option 'Transfer outside business hours' wählen Sie einen Geschäftszeiten-Plan, übergeben das Gespräch an einen Agenten oder an eine Gruppe und formulieren die Nachricht, die der Kunde sieht.",
              "Jede Plattform: Erstellen Sie ein Ticket mit dem Transkript, sagen Sie, wann das Team wieder da ist, und lassen Sie den Bot in der Zwischenzeit weiter Self-Service-Fragen beantworten.",
            ],
          },
          {
            type: "note",
            text: "Testen Sie den Pfad außerhalb der Geschäftszeiten separat. Es ist der Zweig, der am ehesten unbemerkt kaputtgeht, weil niemand im Team online ist, wenn er läuft.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Chatbots mit Übergabe an Ihren bestehenden Helpdesk oder an Slack: einen Starter Chat Bot (350–450 USD) oder einen Standard Chat Bot (500–650 USD), angebunden über APIs, Webhooks sowie Make oder n8n. Jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch, ohne versteckte Kosten, und die meisten Setups dauern 1–3 Wochen. Ein kostenloser 30-minütiger Audit-Call ist ein guter Rahmen, um Ihre Übergabe-Auslöser zu skizzieren.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wann sollte ein Chatbot an einen Menschen übergeben?",
        a: "Wenn der Kunde nach einer Person fragt, wenn der Bot die Anfrage nicht sicher zuordnen kann und wenn das Thema komplex, dringend oder sensibel ist – so beschreibt Zendesk Anfragen, die einen menschlichen Agenten brauchen.",
      },
      {
        q: "Wie verhindere ich, dass Kunden sich nach einer Übergabe wiederholen müssen?",
        a: "Übergeben Sie das Transkript, den Grund für die Übergabe und alle vom Bot erfassten Details ins Ticket oder in den Chat. Der Legacy-Übergabeschritt von Zendesk fügt den Gesprächsverlauf dem Ticket hinzu, und Freshdesk AI Agents können vor der Übergabe Details wie eine Bestellnummer erfassen.",
      },
      {
        q: "Was ist das Messenger Handover Protocol?",
        a: "Es ist der Mechanismus von Meta, der festlegt, welche App einen Messenger-Konversations-Thread besitzt, wenn mehrere Apps dieselbe Seite bedienen. Apps geben die Thread-Kontrolle ab, übernehmen sie oder fordern sie an, und der Webhook messaging_handovers meldet diese Ereignisse.",
      },
      {
        q: "Was passiert, wenn ein Kunde außerhalb der Geschäftszeiten nach einem Menschen fragt?",
        a: "Prüfen Sie die Verfügbarkeit, bevor Sie eskalieren. Zendesk und Freshdesk lassen Sie beide Übergaben außerhalb der Geschäftszeiten anders behandeln, zum Beispiel indem ein Ticket für die spätere Bearbeitung erstellt und eine Nachricht angezeigt wird, wann das Team erreichbar ist.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
      },
      {
        label: "Meta for Developers — messaging_handovers webhook event reference",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_handovers",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "kundensupport-kennzahlen",
    category: "basics",
    navLabel: "Kundensupport-Kennzahlen",
    primaryKeyword: "Kundensupport Kennzahlen",
    title: "Kundensupport-Kennzahlen: Definitionen und Formeln",
    description:
      "Kundensupport-Kennzahlen erklärt: erste Antwortzeit, Lösungszeit, FCR, Wiedereröffnungen, CSAT, CES, NPS und Backlog – und wie jede tatsächlich berechnet wird.",
    h1: "Kundensupport-Kennzahlen: was Sie messen sollten und wie jede berechnet wird",
    intro:
      "Kundensupport-Kennzahlen zeigen, wie schnell, wie gut und unter welcher Arbeitslast Ihr Team Kundenanfragen löst. Das Kernset umfasst Geschwindigkeit (Zeit bis zur ersten Antwort und Lösungszeit), Qualität (Erstkontaktlösung und Wiedereröffnungen), Kundenfeedback (CSAT, CES und NPS) und Arbeitslast (Backlog). Im Folgenden wird jede Kennzahl so definiert, wie Helpdesk-Anbieter und die ursprünglichen Urheber sie definieren.",
    keyFacts: [
      "Die vollständige Lösungszeit (Full resolution time) von Zendesk läuft von der Ticketerstellung bis zur jüngsten Lösung des Tickets; wiedereröffnete Tickets zählen also weiter.",
      "Freshdesk rechnet ein Ticket nur dann zur FCR, wenn der Kunde nach seiner ersten Kontaktaufnahme keine weiteren Nachrichten gesendet hat.",
      "Der NPS ist der Prozentsatz der Promotoren (Werte 9–10) minus der Prozentsatz der Detraktoren (Werte 0–6).",
      "Der NPS wurde von Fred Reichheld im Dezember 2003 in der Harvard Business Review vorgestellt.",
      "Für die Messung des Kundenaufwands plädierte der HBR-Artikel Stop Trying to Delight Your Customers vom Juli 2010.",
    ],
    sections: [
      {
        heading: "Die wichtigsten Kundensupport-Kennzahlen im Überblick",
        blocks: [
          {
            type: "table",
            caption: "Kundensupport-Kennzahlen und wie sie berechnet werden",
            head: ["Kennzahl", "Was sie misst", "Wie sie berechnet wird"],
            rows: [
              [
                "Zeit bis zur ersten Antwort (FRT)",
                "Wie lange Kunden auf die erste Antwort warten",
                "Zeit von der Ticketerstellung bis zur ersten Antwort eines Agenten, angegeben als Durchschnitt oder Median über alle Tickets",
              ],
              [
                "Vollständige Lösungszeit",
                "Wie lange es dauert, ein Ticket endgültig zu lösen",
                "Zeit von der Ticketerstellung bis zur jüngsten Lösung (Zendesk-Definition)",
              ],
              [
                "Durchschnittliche Lösungszeit",
                "Typische Lösungsdauer über viele Tickets",
                "Summe der Lösungszeiten geteilt durch die Anzahl der im Zeitraum gelösten Tickets",
              ],
              [
                "Erstkontaktlösung (FCR)",
                "Anteil der Anliegen, die gelöst werden, ohne dass der Kunde sich erneut meldet",
                "Tickets, die ohne weitere Kundennachrichten nach dem ersten Kontakt gelöst wurden, geteilt durch alle im Zeitraum gelösten Tickets (Freshdesk-Definition)",
              ],
              [
                "Wiedereröffnungen",
                "Tickets, die nicht wirklich gelöst waren",
                "Anzahl der Tickets, die von Solved zurück auf Open gesetzt wurden (Zendesk), oft als Anteil der gelösten Tickets dargestellt",
              ],
              [
                "CSAT",
                "Zufriedenheit mit einer bestimmten Interaktion",
                "Als gut bewertete Tickets geteilt durch alle bewerteten Tickets, in Prozent (Zendesk Explore)",
              ],
              [
                "CES",
                "Wie viel Aufwand der Kunde betreiben musste",
                "Eine Umfrage nach der Interaktion zu Einfachheit oder Aufwand, erfasst als Durchschnittswert oder als Anteil der Antworten mit geringem Aufwand",
              ],
              [
                "NPS",
                "Bereitschaft, das Unternehmen weiterzuempfehlen",
                "Prozentsatz der Promotoren (9–10) minus Prozentsatz der Detraktoren (0–6) auf einer Skala von 0–10",
              ],
              [
                "Backlog",
                "Ungelöste Arbeit, die auf das Team wartet",
                "Anzahl der Tickets im Status New, Open, Pending oder On-hold zu einem bestimmten Zeitpunkt (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Geschwindigkeit: Zeit bis zur ersten Antwort und Lösungszeit",
        blocks: [
          {
            type: "p",
            text: "Die Zeit bis zur ersten Antwort ist die Spanne zwischen der Erstellung eines Tickets und der ersten Antwort eines Agenten – so misst es die Kennzahl First reply time von Zendesk. Es ist die erste Wartezeit, die ein Kunde erlebt, und meist das erste Ziel, das Teams in eine SLA-Richtlinie aufnehmen.",
          },
          {
            type: "p",
            text: "Die Lösungszeit misst, wie lange es dauert, das Anliegen zu lösen. Die vollständige Lösungszeit von Zendesk läuft von der Erstellung bis zur letzten Lösung des Tickets; ein Ticket, das wiedereröffnet und erneut gelöst wird, sammelt also weiter Zeit an. Die durchschnittliche Lösungszeit ist einfach der Mittelwert dieser Dauern über die in einem Zeitraum gelösten Tickets. Schon eine Handvoll sehr alter Tickets kann einen Durchschnitt stark nach oben ziehen; es lohnt sich daher, zusätzlich den Median anzusehen.",
          },
          {
            type: "p",
            text: "Zwei Einstellungen verändern diese Zahlen stark: ob Sie Geschäftszeiten oder Kalenderstunden zählen und ob automatische Antworten als Antwort gelten. Entscheiden Sie das einmal, halten Sie es schriftlich fest und lassen Sie es unverändert, damit Trends von Monat zu Monat vergleichbar bleiben.",
          },
        ],
      },
      {
        heading: "Qualität: Erstkontaktlösung und Wiedereröffnungen",
        blocks: [
          {
            type: "p",
            text: "Die Erstkontaktlösung (First Contact Resolution, FCR) ist der Anteil der Anliegen, die gelöst werden, ohne dass der Kunde sich erneut melden muss. Freshdesk berechnet FCR% als die Anzahl der Tickets, die nach dem ersten Kontakt des Kunden gelöst oder geschlossen wurden, geteilt durch alle im ausgewählten Zeitraum gelösten oder geschlossenen Tickets. Ein Ticket zählt nur, wenn der Kunde nach der ersten Nachricht keine weiteren gesendet hat; die ursprüngliche Ticketbeschreibung gilt nicht als Kundenantwort, und die Anzahl der Agentenantworten spielt keine Rolle. Wiedereröffnete Tickets werden nicht berücksichtigt, ebenso wenig ausgehende Tickets, die ein Agent gestartet hat.",
          },
          {
            type: "p",
            text: "Wiedereröffnungen erfassen den umgekehrten Fall: ein als gelöst markiertes Ticket, das zurückkommt. Zendesk zählt eine Wiedereröffnung, wenn der Status eines Tickets von Solved zurück auf Open wechselt. Beobachten Sie FCR und Wiedereröffnungen gemeinsam. Wenn Ihr Team Tickets vorschnell schließt, um ein Lösungsziel zu erreichen, steigen die Wiedereröffnungen.",
          },
          {
            type: "note",
            text: "Anbieter definieren FCR unterschiedlich: Manche zählen Agentenantworten, manche Kundenantworten, und manche schließen bestimmte Kanäle aus. Prüfen Sie die Definition Ihres Helpdesks, bevor Sie Ihren Wert mit anderen vergleichen.",
          },
        ],
      },
      {
        heading: "Kundenfeedback: CSAT, CES und NPS",
        blocks: [
          {
            type: "p",
            text: "CSAT (Customer Satisfaction Score) bittet Kunden, eine bestimmte Interaktion zu bewerten. In Zendesk Explore ist der Satisfaction Score die Anzahl der als gut bewerteten Tickets geteilt durch alle Tickets mit einer Zufriedenheitsbewertung, angegeben in Prozent. Weil er an ein einzelnes Ticket gebunden ist, ist CSAT das direkteste Feedback auf die Arbeit Ihres Supportteams.",
          },
          {
            type: "p",
            text: "CES (Customer Effort Score) fragt, wie einfach es war, ein Anliegen erledigt zu bekommen. Die Idee stammt aus dem Artikel Stop Trying to Delight Your Customers, erschienen im Juli 2010 in der Harvard Business Review. Er stützte sich auf eine Studie mit mehr als 75.000 Personen, die mit Contact-Center-Mitarbeitern oder Self-Service-Kanälen zu tun hatten, und argumentierte, dass es für die Loyalität kaum einen Unterschied macht, Erwartungen zu übertreffen, während ein geringerer Kundenaufwand sehr wohl einen macht. Formulierungen und Skalen der Umfragen unterscheiden sich von Tool zu Tool; wählen Sie also eine Variante und bleiben Sie dabei.",
          },
          {
            type: "p",
            text: "Der NPS (Net Promoter Score) misst die Bereitschaft, das Unternehmen weiterzuempfehlen, nicht nur eine einzelne Interaktion. Fred Reichheld von Bain & Company stellte ihn in The One Number You Need to Grow vor, erschienen im Dezember 2003 in der Harvard Business Review. Kunden geben auf einer Skala von 0–10 an, wie wahrscheinlich es ist, dass sie das Unternehmen einem Freund oder Kollegen empfehlen. Werte von 9–10 sind Promotoren, 7–8 Passive und 0–6 Detraktoren. Der NPS ist der Prozentsatz der Promotoren minus der Prozentsatz der Detraktoren und reicht daher von -100 bis +100.",
          },
        ],
      },
      {
        heading: "Arbeitslast: Backlog – und wie Kennzahlen aussagekräftig bleiben",
        blocks: [
          {
            type: "p",
            text: "Der Backlog ist die ungelöste Arbeit, die vor Ihrem Team liegt. Zendesk definiert den Ticket-Backlog als alle Tickets, die sich aktuell im Status New, Open, Pending oder On-hold befinden, zugewiesene wie nicht zugewiesene. Erfassen Sie ihn als tägliche Momentaufnahme, damit Sie den Trend sehen. Ein Backlog, der Woche für Woche wächst, bedeutet, dass das eingehende Volumen die Kapazität übersteigt – selbst wenn die Antwortzeiten noch gut aussehen.",
          },
          {
            type: "p",
            text: "Ein paar Gewohnheiten halten Kennzahlen nützlich:",
          },
          {
            type: "ul",
            items: [
              "Kombinieren Sie eine Geschwindigkeits- mit einer Qualitätskennzahl, etwa Lösungszeit mit Wiedereröffnungen, damit sich die eine nicht auf Kosten der anderen verbessert.",
              "Segmentieren Sie nach Kanal und Priorität. Eine erste Antwort im Chat und eine erste Antwort per E-Mail sind nicht vergleichbar.",
              "Behalten Sie dieselben Definitionen und dieselbe Zeiteinstellung dauerhaft bei, und vermerken Sie jede Änderung in Ihren Berichten.",
              "Machen Sie Ihre wichtigsten Ziele zu SLA-Richtlinien, damit der Helpdesk sie bei jedem Ticket überwacht.",
            ],
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "Der Service Automated Reports von TascaLab (500–900 USD, einmalig) holt diese Kennzahlen aus Ihrem Helpdesk, etwa Zendesk, Freshdesk oder Jira, und liefert eine geplante Zusammenfassung per E-Mail oder Slack. Jedes Projekt umfasst eine Basisdokumentation, 30 Tage Support nach dem Launch und keine versteckten Kosten, und die meisten Setups dauern 1–3 Wochen. Ein kostenloser 30-minütiger Audit-Call hilft bei der Entscheidung, welche Kennzahlen sich zuerst zu automatisieren lohnen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen der Zeit bis zur ersten Antwort und der Lösungszeit?",
        a: "Die Zeit bis zur ersten Antwort endet mit der ersten Antwort eines Agenten. Die Lösungszeit endet, wenn das Ticket gelöst ist; die vollständige Lösungszeit von Zendesk läuft bis zur jüngsten Lösung, wiedereröffnete Tickets zählen also weiter.",
      },
      {
        q: "Wie wird der NPS berechnet?",
        a: "Fragen Sie Kunden auf einer Skala von 0–10, wie wahrscheinlich sie Sie weiterempfehlen, und ziehen Sie dann den Prozentsatz der Detraktoren (0–6) vom Prozentsatz der Promotoren (9–10) ab. Passive (7–8) zählen zu den Gesamtantworten, gehen aber nicht in die Subtraktion ein.",
      },
      {
        q: "Was ist der Unterschied zwischen CSAT, CES und NPS?",
        a: "CSAT bewertet die Zufriedenheit mit einer bestimmten Interaktion, CES misst, wie viel Aufwand es kostete, ein Anliegen erledigt zu bekommen, und NPS misst, wie wahrscheinlich ein Kunde das Unternehmen insgesamt weiterempfiehlt.",
      },
      {
        q: "Wie berechnet Freshdesk die Erstkontaktlösung?",
        a: "FCR% ist die Anzahl der Tickets, die ohne weitere Kundennachrichten nach dem ersten Kontakt gelöst wurden, geteilt durch alle im Zeitraum gelösten Tickets. Wiedereröffnete und ausgehende Tickets sind ausgenommen.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    key: "sla-policies-explained",
    slug: "sla-richtlinien-kundensupport",
    category: "basics",
    navLabel: "SLA-Richtlinien erklärt",
    primaryKeyword: "SLA-Richtlinien im Kundensupport",
    title: "SLA-Richtlinien im Kundensupport einfach erklärt",
    description:
      "SLA-Richtlinien im Kundensupport: Ziele für erste und nächste Antwort und Lösung, Geschäfts- vs. Kalenderstunden, Pausen, Warnungen und Setup im Helpdesk.",
    h1: "SLA-Richtlinien im Kundensupport, einfach erklärt",
    intro:
      "Eine SLA-Richtlinie ist ein Regelwerk in Ihrem Helpdesk, das Tickets anhand von Bedingungen wie der Priorität Zielzeiten für Antwort und Lösung zuweist und jedes Ticket daran misst. Sie legt fest, welche Tickets welche Ziele bekommen, ob die Uhr Geschäfts- oder Kalenderstunden zählt, wann sie pausiert und was vor einer Verletzung passiert. So funktionieren SLA-Richtlinien – und so richten Zendesk, Freshdesk und Jira Service Management sie ein.",
    keyFacts: [
      "Zendesk wendet die erste SLA-Richtlinie an, von oben nach unten in der Liste, deren Bedingungen ein Ticket erfüllt.",
      "In Zendesk pausiert die Requester wait time im Status Pending, die Agent work time in Pending und On-hold.",
      "In Freshdesk können Sie jedes SLA in Geschäftszeiten oder in Kalenderstunden (24x7) berechnen lassen.",
      "Erinnerungen in Freshdesk lassen sich auf 5 Minuten bis 4 Stunden vor Fälligkeit eines SLA-Ziels einstellen.",
      "In Jira Service Management hat jedes SLA Start-, Pause- und Stopp-Bedingungen sowie Ziele, die Anfragen per JQL auswählen.",
    ],
    sections: [
      {
        heading: "Was eine SLA-Richtlinie ist",
        blocks: [
          {
            type: "p",
            text: "Ein Service Level Agreement (SLA) ist ein Versprechen, wie schnell Sie auf Anfragen reagieren und sie lösen. Eine SLA-Richtlinie ist das Mittel, mit dem Ihr Helpdesk dieses Versprechen bei jedem Ticket durchsetzt. Die meisten Richtlinien bestehen aus denselben Teilen:",
          },
          {
            type: "ul",
            items: [
              "Bedingungen: für welche Tickets die Richtlinie gilt, etwa nach Kunde, Kanal oder Anfragetyp",
              "Ziele: Zeitlimits für die erste Antwort, spätere Antworten und die Lösung, meist pro Priorität festgelegt",
              "Zeiten: ob die Uhr Geschäftszeiten oder Kalenderstunden zählt",
              "Pausenregeln: welche Status die Uhr anhalten",
              "Aktionen bei Verletzung: Erinnerungen, bevor ein Ziel verfehlt wird, und Eskalationen danach",
            ],
          },
          {
            type: "p",
            text: "Bei mehreren Richtlinien kommt es auf die Reihenfolge an. Zendesk führt zuerst die Trigger aus, vergleicht das Ticket dann von oben nach unten mit seinen SLA-Richtlinien und wendet die erste an, deren Bedingungen erfüllt sind. Stellen Sie spezifische Richtlinien, etwa eine für Enterprise-Kunden, über allgemeine. Zendesk verlangt außerdem, dass die Priorität des Tickets im Standard-Systemfeld für die Priorität gesetzt ist; ein benutzerdefiniertes Prioritätsfeld passt zu keiner Richtlinie.",
          },
        ],
      },
      {
        heading: "Ziele für erste Antwort, nächste Antwort und Lösung",
        blocks: [
          {
            type: "table",
            caption: "SLA-Ziele und wie die einzelnen Tools sie nennen",
            head: ["Ziel", "Was es misst", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Erste Antwort",
                "Zeit von der Ticketerstellung bis zur ersten Antwort eines Agenten",
                "First reply time",
                "First response",
                "Ein eigenes SLA, das beim Erstellen der Anfrage startet und bei der ersten Antwort an den Kunden stoppt",
              ],
              [
                "Nächste Antwort",
                "Zeit von einer unbeantworteten Kundennachricht bis zur nächsten Antwort eines Agenten",
                "Next reply time",
                "Every response",
                "Ein eigenes SLA mit eigenen Start- und Stopp-Bedingungen",
              ],
              [
                "Lösung",
                "Zeit von der Erstellung, bis das Ticket gelöst ist",
                "Requester wait time, Agent work time oder Total resolution time",
                "Resolution",
                "Ein eigenes SLA, das stoppt, wenn die Anfrage gelöst ist",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk definiert die Next reply time als die Zeit zwischen dem ältesten unbeantworteten Kundenkommentar und dem nächsten öffentlichen Agentenkommentar. Außerdem gibt es die Kennzahl Periodic update, die die Zeit zwischen öffentlichen Agentenkommentaren misst. Für die Lösung hat Zendesk drei Kennzahlen und empfiehlt, pro Richtlinie nur eine zu wählen: Requester wait time (Zeit in New, Open und On-hold), Agent work time (Zeit in New und Open) und Total resolution time (der gesamte Lebenszyklus von der Erstellung, bis das Ticket gelöst ist).",
          },
          {
            type: "p",
            text: "Freshdesk legt in jeder SLA-Richtlinie pro Priorität Ziele für First response, Every response und Resolution fest. In Jira Service Management ist jedes SLA ein benannter Timer: Sie definieren, wann er startet, pausiert und stoppt, und fügen dann Ziele hinzu, die per JQL auswählen, für welche Anfragen sie gelten, mit Zeitvorgaben in der Form 4h 30m.",
          },
        ],
      },
      {
        heading: "Wann die Uhr läuft: Geschäftszeiten, Kalenderstunden und Pausen",
        blocks: [
          {
            type: "p",
            text: "Geschäftszeiten zählen nur die Zeit innerhalb Ihres Arbeitsplans; Kalenderstunden zählen jede Stunde jedes Tages. In Zendesk wählen Sie innerhalb einer Richtlinie für jede Priorität Geschäfts- oder Kalenderstunden. Freshdesk fragt, ob jedes SLA die von Ihnen festgelegten Geschäftszeiten oder Kalenderstunden (24x7) verwenden soll. Jira Service Management hängt an jedes Ziel einen Kalender mit Zeitzone, Arbeitstagen und Arbeitszeiten sowie Feiertagen.",
          },
          {
            type: "p",
            text: "Ein Ziel von 4 Geschäftsstunden für ein Ticket, das am späten Freitag erstellt wird, wird womöglich erst am Montag fällig. Das ist fair gegenüber Ihrem Team, entspricht aber nicht dem, was der Kunde erlebt – verwenden Sie daher Kalenderstunden für jede Priorität, bei der Sie Erreichbarkeit rund um die Uhr versprechen.",
          },
          {
            type: "p",
            text: "Das Pausieren ist die andere Hälfte. Zeit, in der Sie auf den Kunden warten, sollte in der Regel nicht gegen Sie zählen, und jedes Tool handhabt das anders:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Die Requester wait time pausiert in Pending; die Agent work time pausiert in Pending und On-hold; die Total resolution time pausiert bei keinem Statuswechsel, bis das Ticket gelöst ist.",
              "Freshdesk: Der Status Pending pausiert SLA-Timer, und Sie können den SLA-Timer für jeden Status ausschalten, auch für eigene wie Waiting on Third Party. Tickets mit ausgeschaltetem Timer werden als On Hold angezeigt, und wenn der Kunde antwortet, wechselt das Ticket zurück auf Open und die Uhr läuft weiter.",
              "Jira Service Management: Ein SLA kann neben seinen Start- und Stopp-Bedingungen Pause-Bedingungen haben, etwa während Sie auf eine Antwort des Kunden warten.",
            ],
          },
        ],
      },
      {
        heading: "Warnungen vor SLA-Verletzungen und Eskalationen",
        blocks: [
          {
            type: "p",
            text: "Ein SLA nützt nur, wenn jemand handelt, bevor es verfehlt wird. Legen Sie eine Warnung vor der Frist und eine Eskalation danach fest:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Bauen Sie eine Automation mit der Bedingung 'Hours until next SLA breach', die ein Team oder eine Person benachrichtigt, wenn ein Ticket kurz vor einer Verletzung steht. Automationen laufen einmal pro Stunde; die Warnung kann also bis zu eine Stunde vor oder nach dem Schwellenwert eintreffen, nie genau im Moment selbst. Im Beispiel von Zendesk fügt dieselbe Automation ein Tag hinzu, damit sie pro Ticket nur einmal auslöst.",
              "Freshdesk: Jede SLA-Richtlinie kann Agenten 5 Minuten bis 4 Stunden vor Fälligkeit eines Ziels für First response oder Resolution erinnern und bei einer Zielverletzung an den zugewiesenen Agenten oder andere von Ihnen gewählte Personen eskalieren, etwa an eine Teamleitung. Beides wird unter Admin > Workflows > SLA Policies eingestellt.",
              "Jedes Tool: Schicken Sie Warnungen dorthin, wo Ihr Team tatsächlich hinschaut, etwa in einen Slack-Channel, und nicht nur per E-Mail.",
            ],
          },
        ],
      },
      {
        heading: "So konfigurieren Zendesk, Freshdesk und Jira Service Management SLAs",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: Legen Sie SLA-Richtlinien mit Bedingungen und Zielen pro Priorität an, wählen Sie für jede Priorität Geschäfts- oder Kalenderstunden und ordnen Sie die Liste so, dass spezifische Richtlinien zuerst kommen. Ergänzen Sie eine Automation für Warnungen kurz vor einer Verletzung.",
              "Freshdesk: Legen Sie unter Admin > Workflows > SLA Policies pro Priorität Ziele für First response, Every response und Resolution fest, wählen Sie Geschäfts- oder Kalenderstunden und ergänzen Sie dann Erinnerungen und Eskalationen. Legen Sie in den Einstellungen Ihrer Ticketstatus fest, welche Status den SLA-Timer ausschalten.",
              "Jira Service Management: Legen Sie jedes SLA mit Start-, Pause- und Stopp-Bedingungen an. Mehrere Start-Bedingungen wirken als ODER-Verknüpfung, und das SLA stoppt, sobald irgendeine Stopp-Bedingung erfüllt ist. Fügen Sie dann Ziele hinzu, die Anfragen per JQL auswählen, legen Sie eine Zeitvorgabe fest und wählen Sie einen Kalender.",
            ],
          },
          {
            type: "p",
            text: "Unabhängig vom Tool: Starten Sie mit einer Richtlinie und wenigen Prioritäten, lassen Sie sie ein paar Wochen laufen und vergleichen Sie dann die tatsächlichen Zeiten bis zur ersten Antwort und bis zur Lösung mit den Zielen, bevor Sie diese verschärfen.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab richtet SLA-bezogene Automatisierung auf Zendesk, Freshdesk und Jira ein: Routing, das die Priorität setzt, damit die richtige Richtlinie greift, Warnungen vor SLA-Verletzungen in Slack und geplante SLA-Berichte. Die relevanten Einmalpreise sind Ticket Routing & Categorization (600–950 USD), Automated Reports (500–900 USD) und Custom Automation (1.200–2.000 USD). Projekte umfassen eine Basisdokumentation, 30 Tage Support nach dem Launch und keine versteckten Kosten, und die meisten dauern 1–3 Wochen. Starten Sie mit einem kostenlosen 30-minütigen Audit-Call.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen der Zeit bis zur ersten und bis zur nächsten Antwort?",
        a: "Die First reply time misst die Wartezeit auf die erste Antwort eines Agenten nach der Ticketerstellung. Die Next reply time von Zendesk misst vom ältesten unbeantworteten Kundenkommentar bis zum nächsten öffentlichen Agentenkommentar und gilt daher während des gesamten Gesprächs.",
      },
      {
        q: "Sollten SLAs Geschäftszeiten oder Kalenderstunden verwenden?",
        a: "Verwenden Sie Geschäftszeiten, wenn Ihr Team zu festen Zeiten arbeitet und Kunden das wissen, und Kalenderstunden für Prioritäten, bei denen Sie Erreichbarkeit rund um die Uhr versprechen. In Zendesk und Freshdesk wählen Sie das pro Richtlinie, und Jira Service Management verwendet einen Kalender, den Sie jedem Ziel zuweisen.",
      },
      {
        q: "Hält die SLA-Uhr an, wenn ein Ticket auf Pending steht?",
        a: "Das hängt vom Tool und von der Kennzahl ab. Freshdesk pausiert SLA-Timer in Pending. In Zendesk pausieren Requester wait time und Agent work time in Pending, während die Total resolution time weiterläuft, bis das Ticket gelöst ist.",
      },
      {
        q: "Kann Zendesk mich genau im Moment einer SLA-Verletzung benachrichtigen?",
        a: "Nein. Die Warnungen von Zendesk vor SLA-Verletzungen nutzen Automationen, die einmal pro Stunde laufen; eine Benachrichtigung kann also bis zu eine Stunde vor oder nach der Verletzung eintreffen.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },
];
