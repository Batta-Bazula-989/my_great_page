import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "attio-workflows-automatisierung",
    category: "crm",
    navLabel: "Attio-Workflows",
    primaryKeyword: "Attio Workflows Automatisierung",
    title: "Attio-Workflows: Trigger, Blöcke, Credits und die API",
    description:
      "Attio-Workflows erklärt: Trigger- und Aktionsblöcke, Verbrauch von Workflow-Credits, Rate Limits der REST API, Webhook-Signaturen und Anbindung an den Support.",
    h1: "Attio-Workflows: So funktioniert CRM-Automatisierung in Attio",
    intro:
      "Attio automatisiert CRM-Arbeit mit Workflows. Ein Workflow startet mit einem Trigger-Block und führt eine Kette von Aktionsblöcken aus, etwa einen Datensatz aktualisieren, eine Aufgabe anlegen, eine Slack-Nachricht senden oder einen HTTP-Request ausführen. Workflow-Läufe verbrauchen Workspace-Credits, und alles andere wird über die REST API und die Webhooks von Attio angebunden.",
    keyFacts: [
      "Ein Attio-Workflow besteht aus einem Trigger-Block, der ihn startet, und Aktionsblöcken, die die Arbeit erledigen.",
      "Trigger, Logik und Datenabfragen sind kostenlos. Blöcke, die Daten schreiben, externe Systeme aufrufen oder KI nutzen, verbrauchen Workspace-Credits, die meisten davon einen Credit pro Lauf.",
      "Die REST API von Attio erlaubt 100 Lese- und 25 Schreibanfragen pro Sekunde. Über dem Limit liefert sie HTTP 429 mit einem Retry-After-Header.",
      "Attio signiert Webhooks mit einem HMAC-SHA256 des Request-Bodys, der im Header Attio-Signature gesendet wird.",
    ],
    sections: [
      {
        heading: "Wie Attio-Workflows aufgebaut sind",
        blocks: [
          {
            type: "p",
            text: "Sie bauen einen Workflow auf einem Canvas. Der Trigger-Block legt fest, wann er läuft, und die Aktionsblöcke danach legen fest, was passiert. Die Block-Bibliothek von Attio teilt Trigger in vier Arten ein:",
          },
          {
            type: "ul",
            items: [
              "Datensatz-Trigger, etwa 'Record created'.",
              "Listen-Trigger, etwa 'Record added to list'.",
              "Aufgaben-Trigger, etwa 'Task created'.",
              "Utility-Trigger, etwa 'Manual run', ein Zeitplan oder ein eingehender Webhook.",
            ],
          },
          {
            type: "p",
            text: "Das Help Center von Attio nennt als Beispiele für Aktionsblöcke: einen Datensatz aktualisieren, eine Aufgabe anlegen, eine Slack-Nachricht senden, jemanden in eine Sequence aufnehmen und einen HTTP-Request ausführen. Ein Block 'Execute code' führt Ihren eigenen JavaScript-Code als Schritt aus, mit einem Timeout von 100 Sekunden. Sie können einen Workflow auch in natürlicher Sprache beschreiben und ihn von Ask Attio bauen lassen. Apps, die mit dem Attio SDK gebaut sind, können eigene Blöcke hinzufügen, die dann in der Blockauswahl neben den integrierten Blöcken erscheinen.",
          },
          {
            type: "note",
            text: "Standardmäßig kann ein Workflow nicht in ein Objekt schreiben. Ein Admin oder ein Mitglied mit vollem Zugriff auf dieses Objekt muss dem Workflow zuerst Zugriff gewähren. Prüfen Sie das, bevor Sie einen Workflow testen, der Datensätze aktualisiert.",
          },
        ],
      },
      {
        heading: "Wie Workflows Credits verbrauchen",
        blocks: [
          {
            type: "p",
            text: "Workflow-Läufe greifen auf die gemeinsamen Credits des Workspace zu, nicht auf Seat-Credits. Das Help Center von Attio beschreibt, wie sie in den neuen Workflows gezählt werden:",
          },
          {
            type: "ul",
            items: [
              "Trigger, Logik und Datenabfragen sind kostenlos. Credits werden nur verbraucht, wenn ein Block Daten schreibt, extern etwas sendet oder empfängt oder KI nutzt.",
              "Schreibvorgänge in Datensätze, Aufgaben, die Aufnahme in eine Sequence, HTTP-Requests und Integrationsblöcke kosten 1 Credit pro Lauf. KI-Blöcke und 'Execute code' haben variable Kosten.",
              "Berechnet wird nur der Pfad, den ein Lauf nimmt. Schlägt ein Lauf mittendrin fehl, verbrauchen der fehlgeschlagene Block und jeder Block danach keine Credits, Blöcke, die vor dem Fehler gelaufen sind, werden aber berechnet.",
              "Einen Workflow mit Ask Attio zu bauen, verbraucht Seat-Credits, nicht die gemeinsamen Workspace-Credits.",
            ],
          },
          {
            type: "p",
            text: "Stand November 2026 enthält Attio 250 Workspace-Credits pro Monat bei Free, 1.500 bei Plus und 10.000 bei Pro. Pläne ändern sich; prüfen Sie daher die Preisseite von Attio und schätzen Sie den Verbrauch dann als Anzahl der Blöcke pro Lauf, die Credits verbrauchen, mal die erwarteten Läufe pro Monat.",
          },
        ],
      },
      {
        heading: "Die Attio API und Webhooks",
        blocks: [
          {
            type: "p",
            text: "Für alles, was ein Workflow nicht allein erledigen kann, bietet Attio eine REST API und ausgehende Webhooks. Das sagt die Entwicklerdokumentation jeweils dazu.",
          },
          {
            type: "table",
            caption: "REST API und Webhooks von Attio (Attio-Entwicklerdokumentation, geprüft im November 2026)",
            head: ["Thema", "Was Attio dokumentiert"],
            rows: [
              ["Rate Limits", "100 Anfragen pro Sekunde für Lesezugriffe und 25 pro Sekunde für Schreibzugriffe. Über dem Limit HTTP 429 mit einem Retry-After-Header."],
              ["Listing-Endpunkte", "List records und List entries haben zusätzlich score-basierte Limits, gezählt über ein 10-Sekunden-Fenster über alle Apps und Tokens hinweg."],
              ["Authentifizierung", "Ein API-Key für einen einzelnen Workspace oder OAuth 2.0 für Apps, die in mehreren Workspaces genutzt werden. Tokens werden als Bearer-Tokens gesendet, und Scopes werden pro Token festgelegt."],
              ["Webhook-Ereignisse", "Zu den Ereignissen gehören record.created, list-entry.created, note.created und task.created."],
              ["Webhook-Signatur", "Ein HMAC-SHA256 des rohen Request-Bodys, gebildet mit dem Secret des Webhooks und hex-kodiert, im Header Attio-Signature."],
              ["Wiederholungen", "Jede Nachricht trägt einen Idempotency-Key-Header, der gleich bleibt, wenn Attio sie erneut sendet."],
            ],
          },
          {
            type: "p",
            text: "Um zu prüfen, ob ein Webhook von Attio stammt, berechnen Sie den HMAC-SHA256 des rohen Bodys mit dem Webhook-Secret neu und vergleichen ihn mit dem Header Attio-Signature. Für ältere Middleware sendet Attio denselben Wert außerdem als X-Attio-Signature. Nutzen Sie den Idempotency-Key-Header, um bereits verarbeitete Nachrichten zu überspringen, damit eine Wiederholung keine zweite Aufgabe oder Slack-Nachricht erzeugt.",
          },
        ],
      },
      {
        heading: "Attio mit Ihren Support-Tools verbinden",
        blocks: [
          {
            type: "p",
            text: "Attio hat eine Slack-App für Benachrichtigungen und eine offizielle Zapier-App. Zapier listet fertige Verbindungen zwischen Attio und Helpdesks wie Zendesk und Intercom auf. Für mehr Kontrolle verbinden Sie einen Helpdesk über n8n oder Make mit der API und den Webhooks von Attio. Hier ist ein gängiges Muster, in Schritten beschrieben. Es zeigt, wie die Teile zusammenpassen. Es ist keine Fallstudie von TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: Ihr Helpdesk sendet einen Webhook an n8n oder Make, wenn ein Ticket erstellt oder eskaliert wird.",
              "Nachschlagen: Der Workflow findet den Firmendatensatz des Kunden in Attio über die API und bleibt dabei innerhalb des Limits von 100 Lesezugriffen pro Sekunde.",
              "Aktualisieren: Er schreibt den Status oder die Kategorie des Tickets in ein Attribut des Datensatzes oder legt eine Aufgabe für den Account Owner an.",
              "In Attio reagieren: Ein Attio-Workflow, der durch diese Aktualisierung des Datensatzes ausgelöst wird, sendet eine Slack-Nachricht an den Account Owner.",
              "Fehler behandeln: Bei HTTP 429 warten und erneut versuchen, und mit dem Idempotency-Key-Header doppelte Webhook-Zustellungen verwerfen.",
            ],
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab verbindet Tools wie Attio mit den Helpdesk- und Chat-Tools, die Sie bereits nutzen, über APIs, Webhooks, n8n und Make, ohne Plattformwechsel. Projekte für Custom Automation kosten {{price:custom}}. Die meisten Setups dauern 1 bis 3 Wochen, und jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was sind Attio-Workflows?",
        a: "Das Automatisierungstool von Attio. Ein Workflow startet mit einem Trigger-Block, etwa wenn ein Datensatz erstellt wird oder bei einem manuellen Lauf, und führt dann Aktionsblöcke aus, etwa einen Datensatz aktualisieren, eine Aufgabe anlegen, eine Slack-Nachricht senden oder einen HTTP-Request ausführen.",
      },
      {
        q: "Verbrauchen Attio-Workflows Credits?",
        a: "Ja, für Blöcke, die Daten schreiben, externe Systeme aufrufen oder KI nutzen. Die meisten davon kosten einen Credit pro Lauf, während Trigger, Logik und Datenabfragen kostenlos sind. Stand November 2026 enthält Free 250 Workspace-Credits pro Monat, Plus 1.500 und Pro 10.000.",
      },
      {
        q: "Welche Rate Limits hat die Attio API?",
        a: "100 Anfragen pro Sekunde für Lesezugriffe und 25 pro Sekunde für Schreibzugriffe. Über dem Limit liefert Attio HTTP 429 mit einem Retry-After-Header. Die Endpunkte List records und List entries haben zusätzlich score-basierte Limits.",
      },
      {
        q: "Wie verifiziere ich einen Attio-Webhook?",
        a: "Berechnen Sie einen HMAC-SHA256 des rohen Request-Bodys mit dem Secret des Webhooks, kodieren Sie ihn hexadezimal und vergleichen Sie ihn mit dem Header Attio-Signature.",
      },
    ],
    sources: [
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/getting-started-with-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-03",
  },
  {
    key: "attio-vs-hubspot-automation",
    slug: "attio-vs-hubspot-automatisierung",
    category: "crm",
    navLabel: "Attio vs. HubSpot Automatisierung",
    primaryKeyword: "Attio vs HubSpot Automatisierung",
    title: "Attio vs. HubSpot Automatisierung: Workflows, API, Webhooks",
    description:
      "Attio vs. HubSpot Automatisierung im Vergleich: wer Workflows bekommt, Limits und Credits, Trigger, Code-/Webhook-Schritte, API-Rate-Limits, Signaturprüfung.",
    h1: "Attio vs. HubSpot Automatisierung: Workflows, Limits, API und Webhooks",
    intro:
      "Attio und HubSpot automatisieren CRM-Arbeit beide mit visuellen Workflows, begrenzen sie aber unterschiedlich. HubSpot enthält Workflows nur in den Editionen Professional und Enterprise und begrenzt, wie viele Sie anlegen können, während Attio Workflow-Läufe über Workspace-Credits bemisst. Auch ihre APIs und Webhooks unterscheiden sich, bei den Rate Limits und darin, wie Sie eine Anfrage verifizieren.",
    keyFacts: [
      "HubSpot-Workflows erfordern ein Professional- oder Enterprise-Abonnement. Marketing, Sales oder Service Hub Professional erlaubt bis zu 300 Workflows, Enterprise bis zu 1.000.",
      "Attio bemisst Workflows über Workspace-Credits. Trigger, Logik und Abfragen sind kostenlos, und die meisten Blöcke, die Daten schreiben oder externe Systeme aufrufen, verbrauchen einen Credit pro Lauf.",
      "Custom-Code-Aktionen in HubSpot müssen innerhalb von 20 Sekunden fertig sein und können bis zu 128 MB Arbeitsspeicher nutzen. Der Block 'Execute code' von Attio bricht nach 100 Sekunden mit einem Timeout ab.",
      "Die API von Attio erlaubt 100 Lese- und 25 Schreibzugriffe pro Sekunde. Private Apps in HubSpot erhalten in Professional oder Enterprise 190 Anfragen pro 10 Sekunden.",
      "HubSpot signiert Webhooks mit X-HubSpot-Signature-v3. Attio verwendet den Header Attio-Signature.",
    ],
    sections: [
      {
        heading: "Direktvergleich",
        blocks: [
          {
            type: "table",
            caption: "Attio vs. HubSpot Automatisierung (Anbieterdokumentation, geprüft im November 2026)",
            head: ["Frage", "Attio", "HubSpot"],
            rows: [
              ["Wie die Nutzung begrenzt wird", "Workspace-Credits. Trigger, Logik und Abfragen sind kostenlos, und die meisten Blöcke, die schreiben oder externe Systeme aufrufen, verbrauchen einen Credit.", "Professional oder Enterprise erforderlich. Eine Obergrenze für die Anzahl der Workflows je Edition."],
              ["Trigger", "Datensatz-, Listen-, Aufgaben- und Utility-Trigger, darunter ein Zeitplan, ein Webhook und ein manueller Lauf", "Aufnahme-Trigger auf Basis von Filtern, Ereignissen, Zeitplänen und Webhooks"],
              ["Ein anderes System aufrufen und Code", "HTTP-Request-Block und ein Block 'Execute code' für JavaScript. Apps können eigene Blöcke hinzufügen.", "Aktionen 'Send a webhook' und 'Custom code', in Data Hub Professional und Enterprise"],
              ["Slack", "Block für Slack-Nachrichten, mit der Slack-App von Attio", "Aktion für Slack-Benachrichtigungen, bei installierter Slack-Integration"],
              ["API-Rate-Limit", "100 Lese- und 25 Schreibzugriffe pro Sekunde", "Private Apps: 100 pro 10 Sekunden in Free und Starter, 190 in Professional und Enterprise, plus ein Tageslimit"],
              ["Webhook-Signatur", "HMAC-SHA256 des Bodys, hex-kodiert, in Attio-Signature", "HMAC-SHA256 aus Methode, URI, Body und Zeitstempel, base64-kodiert, in X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "HubSpot-Workflows: Editionen und Limits",
        blocks: [
          {
            type: "p",
            text: "Laut dem Workflows-FAQ von HubSpot ist für die Nutzung von Workflows ein Professional- oder Enterprise-Abonnement erforderlich. Wie viele Sie anlegen können, hängt von der Edition ab:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales oder Service Hub Professional: bis zu 300 Workflows.",
              "Marketing, Sales oder Service Hub Enterprise: bis zu 1.000 Workflows.",
              "Mit dem Brands-Add-on: 100 weitere Workflows.",
              "Bei mehreren Hubs bestimmt das Abonnement mit dem höchsten Limit Ihr Limit.",
            ],
          },
          {
            type: "p",
            text: "Nur benutzerdefinierte Workflows, die im Workflows-Tool gebaut werden, zählen zum Limit. Einfache Automatisierungen in Tools wie Formularen zählen nicht. Standardmäßig wird ein Datensatz nur dann in einen Workflow aufgenommen, wenn er die Aufnahme-Trigger zum ersten Mal erfüllt. Sie können die erneute Aufnahme (Re-Enrollment) aktivieren, sie kann aber keine AND-Kriterien verwenden und nimmt Datensätze nicht rückwirkend auf.",
          },
          {
            type: "p",
            text: "Für Integrationen sind zwei Aktionen am wichtigsten: 'Send a webhook' und 'Custom code'. HubSpot führt beide für Data Hub Professional und Enterprise auf, den Hub, der früher Operations Hub hieß. Custom-Code-Aktionen führen standardmäßig Node.js aus oder, als Beta, Python, müssen innerhalb von 20 Sekunden fertig sein und können bis zu 128 MB Arbeitsspeicher nutzen; lange Jobs gehören daher in ein externes Tool wie n8n.",
          },
        ],
      },
      {
        heading: "Attio-Workflows: über Credits bemessen",
        blocks: [
          {
            type: "p",
            text: "Attio bemisst Workflows nach Nutzung. Läufe greifen auf die gemeinsamen Credits des Workspace zu. Trigger, Logik und Datenabfragen sind kostenlos, und Blöcke, die Daten schreiben, externe Systeme aufrufen oder KI nutzen, verbrauchen Credits, die meisten davon einen pro Lauf. Stand November 2026 enthält Free 250 Workspace-Credits pro Monat, Plus 1.500 und Pro 10.000.",
          },
          {
            type: "p",
            text: "Um aus einem Attio-Workflow ein anderes System zu erreichen, nutzen Sie den HTTP-Request-Block. Der Block 'Execute code' führt Ihren eigenen JavaScript-Code mit einem Timeout von 100 Sekunden und variablen Credit-Kosten aus, und Apps, die mit dem Attio SDK gebaut sind, können eigene Workflow-Blöcke hinzufügen.",
          },
        ],
      },
      {
        heading: "APIs und Webhooks für Integrationen",
        blocks: [
          {
            type: "p",
            text: "HubSpot begrenzt private Apps pro 10 Sekunden und pro Tag. Free- und Starter-Accounts erhalten 100 Anfragen pro 10 Sekunden und 250.000 pro Tag. Professional erhält 190 pro 10 Sekunden und 625.000 pro Tag, Enterprise 190 pro 10 Sekunden und 1.000.000 pro Tag. Das 10-Sekunden-Limit gilt pro App, das Tageslimit teilen sich alle Apps im Account. Über dem Limit liefert HubSpot HTTP 429, und laut seinen Richtlinien sollen Fehlerantworten unter 5 % Ihrer täglichen Anfragen bleiben.",
          },
          {
            type: "p",
            text: "Attio zählt pro Sekunde: 100 Lese- und 25 Schreibzugriffe, mit HTTP 429 und einem Retry-After-Header, wenn Sie darüber liegen. Die Endpunkte List records und List entries haben zusätzlich score-basierte Limits, gezählt über ein 10-Sekunden-Fenster.",
          },
          {
            type: "p",
            text: "Beide signieren ihre Webhooks, aber unterschiedlich. Die v3-Signatur von HubSpot kommt in X-HubSpot-Signature-v3 zusammen mit X-HubSpot-Request-Timestamp. Sie ist ein HMAC-SHA256, base64-kodiert und mit dem Client Secret der App gebildet, über Methode, URI, Body und Zeitstempel, und laut HubSpot sollen Sie Anfragen ablehnen, deren Zeitstempel älter als 5 Minuten ist. Der Header Attio-Signature von Attio ist ein hex-kodierter HMAC-SHA256 des rohen Bodys, gebildet mit dem Secret des Webhooks. Attio sendet außerdem einen Idempotency-Key-Header, der über Wiederholungen hinweg gleich bleibt.",
          },
        ],
      },
      {
        heading: "Was zu einem Support-Team passt",
        blocks: [
          {
            type: "ul",
            items: [
              "Wenn Ihr Support-Team bereits im Help Desk von HubSpot arbeitet, liegen Tickets, SLAs und Ticket-Workflows im selben Account wie das CRM, und Workflows sind ab Professional enthalten.",
              "Wenn Sie Attio als CRM und einen separaten Helpdesk nutzen, verbinden Sie beide über die APIs und Webhooks mit n8n, Make oder Zapier, das eine offizielle Attio-App hat.",
              "Wenn Ihre Automatisierungen andere Systeme aufrufen, planen Sie in HubSpot Budget für Data Hub Professional ein oder planen Sie in Attio mit dem HTTP-Request-Block und dem Block 'Execute code'.",
              "Bei hohen Volumen prüfen Sie die oben genannten API-Limits gegen Ihr Ticketvolumen zu Spitzenzeiten, bevor Sie entscheiden, wo die Logik läuft.",
            ],
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Automatisierungen auf dem CRM und dem Helpdesk auf, die Sie bereits nutzen, mit APIs, Webhooks, n8n und Make, sodass Sie die Plattform nicht wechseln müssen. Projekte für Custom Automation kosten {{price:custom}}. Die meisten Setups dauern 1 bis 3 Wochen, und jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Enthält HubSpot Workflows in jedem Plan?",
        a: "Nein. Laut dem Workflows-FAQ von HubSpot ist ein Professional- oder Enterprise-Abonnement erforderlich. Marketing, Sales oder Service Hub Professional erlaubt bis zu 300 Workflows, Enterprise bis zu 1.000.",
      },
      {
        q: "Wie begrenzt Attio Workflows?",
        a: "Über Workspace-Credits. Trigger, Logik und Abfragen sind kostenlos, und die meisten Blöcke, die Daten schreiben oder externe Systeme aufrufen, verbrauchen einen Credit pro Lauf. KI- und Code-Blöcke variieren. Die enthaltenen Credits hängen von Ihrem Plan ab.",
      },
      {
        q: "Kann ich in HubSpot- oder Attio-Workflows eigenen Code ausführen?",
        a: "HubSpot hat in Data Hub Professional und Enterprise eine Aktion 'Custom code', die Node.js oder, als Beta, Python ausführt, innerhalb von 20 Sekunden und 128 MB Arbeitsspeicher. Attio hat einen Block 'Execute code', der JavaScript mit einem Timeout von 100 Sekunden ausführt, und Apps, die mit seinem SDK gebaut sind, können eigene Blöcke hinzufügen.",
      },
      {
        q: "Wie verifiziere ich Webhooks von HubSpot und Attio?",
        a: "Bei HubSpot berechnen Sie den HMAC-SHA256 aus Methode, URI, Body und Zeitstempel mit Ihrem Client Secret neu und vergleichen ihn mit X-HubSpot-Signature-v3. Bei Attio vergleichen Sie einen HMAC-SHA256 des rohen Bodys, gebildet mit dem Webhook-Secret, mit dem Header Attio-Signature.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Workflows FAQ", url: "https://knowledge.hubspot.com/workflows/workflows-faq" },
      { label: "HubSpot Knowledge Base — Set your workflow enrollment triggers", url: "https://knowledge.hubspot.com/workflows/set-your-workflow-enrollment-triggers" },
      { label: "HubSpot Knowledge Base — Add re-enrollment triggers to a workflow", url: "https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "HubSpot Developers — Custom code actions", url: "https://developers.hubspot.com/docs/api-reference/latest/automation/workflow-actions/custom-code-actions" },
      { label: "HubSpot Developers — API usage guidelines and limits", url: "https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines" },
      { label: "HubSpot Developers — Validating requests", url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation" },
      { label: "HubSpot — Fall 2025 Spotlight", url: "https://www.hubspot.com/company-news/fall-2025-spotlight" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-03",
  },
  {
    key: "hubspot-zendesk-integration",
    slug: "hubspot-zendesk-integration-anleitung",
    category: "crm",
    navLabel: "HubSpot-Zendesk-Integration",
    primaryKeyword: "HubSpot Zendesk Integration",
    title: "HubSpot-Zendesk-Integration: Sync-Umfang und Optionen",
    description:
      "HubSpot-Zendesk-Integration: was die Gratis-App Zendesk for HubSpot synchronisiert, was nicht, Action Flows, Zwei-Wege-Sync-Apps und Eigenbau mit beiden APIs.",
    h1: "HubSpot-Zendesk-Integration: was synchronisiert wird, was nicht und Ihre Optionen",
    intro:
      "Die eigene HubSpot-Integration von Zendesk ist kostenlos und schnell verbunden, sendet Ticket-Ereignisse aber nur in eine Richtung, von Zendesk auf die Timeline eines Kontakts in HubSpot. Wenn Sie mehr brauchen, können Zendesk Action Flows HubSpot-Datensätze erstellen und aktualisieren, Marketplace-Apps bieten einen Zwei-Wege-Sync, und ein Eigenbau mit Webhooks und beiden APIs kann genau die Daten übertragen, die Sie auswählen.",
    keyFacts: [
      "Die Integration Zendesk Support for HubSpot arbeitet in eine Richtung: Ticketinformationen fließen von Zendesk zu HubSpot.",
      "Sie legt drei Zendesk-Trigger an, für neue Tickets, gelöste Tickets und CSAT-Bewertungen, dazu einen Webhook namens HubSpot Integration.",
      "Tickets erscheinen nur auf der Timeline des HubSpot-Kontakts, nicht bei Unternehmen oder Deals, und nur die E-Mail-Adresse des Benutzers wird synchronisiert.",
      "Zendesk Action Flows haben HubSpot-Aktionen, die Kontakte, Unternehmen, Deals und Tickets erstellen, aktualisieren und nachschlagen.",
      "Zendesk stellt seit dem 27. Oktober 2026 keine neuen API-Tokens mehr aus; ein Eigenbau sollte daher OAuth verwenden.",
    ],
    sections: [
      {
        heading: "Vier Wege, HubSpot und Zendesk zu verbinden",
        blocks: [
          {
            type: "table",
            caption: "Integrationsoptionen für HubSpot und Zendesk (Anbieterdokumentation und Marketplace-Einträge, geprüft im November 2026)",
            head: ["Option", "Richtung", "Was übertragen wird"],
            rows: [
              ["Zendesk Support for HubSpot", "Nur von Zendesk zu HubSpot", "Ereignisse zu neuen Tickets, gelösten Tickets und CSAT-Bewertungen, gesendet an die Kontakt-Timeline"],
              ["Zendesk Action Flows mit HubSpot-Aktionen", "Von Zendesk zu HubSpot, Schritt für Schritt", "Kontakte, Unternehmen, Deals und Tickets erstellen, aktualisieren und nachschlagen"],
              ["Marketplace-Apps", "Je nach App; manche arbeiten in beide Richtungen", "Was die App unterstützt, etwa Kontakte oder Deals"],
              ["Eigenbau mit Webhooks und beiden APIs", "In beide Richtungen", "Genau die Felder und Ereignisse, die Sie auswählen"],
            ],
          },
          {
            type: "p",
            text: "Beginnen Sie mit der Frage, die Ihr Team beantworten will. Wenn Vertrieb und Account Manager in HubSpot nur die Support-Historie eines Kontakts sehen müssen, reicht die kostenlose Integration womöglich aus. Wenn Tickets HubSpot-Daten ändern sollen, etwa eine Unternehmenseigenschaft oder eine Deal-Phase, brauchen Sie Action Flows, eine App oder einen Eigenbau.",
          },
        ],
      },
      {
        heading: "Die kostenlose Integration Zendesk Support for HubSpot einrichten",
        blocks: [
          {
            type: "ol",
            items: [
              "Öffnen Sie die Installationsseite der Integration und geben Sie Ihre Zendesk-Subdomain ein.",
              "Autorisieren Sie die Verbindung sowohl in Zendesk als auch in HubSpot.",
              "Zendesk legt drei Trigger an, für neue Tickets, gelöste Tickets und CSAT-Bewertungen, sowie einen Webhook namens HubSpot Integration.",
              "Bearbeiten Sie die Bedingungen dieser Trigger, wenn nur ein Teil der Tickets HubSpot erreichen soll.",
            ],
          },
          {
            type: "p",
            text: "Zendesk dokumentiert einige Einschränkungen. Die Integration arbeitet in eine Richtung, von Zendesk zu HubSpot. Synchronisiert wird nur die E-Mail-Adresse des Benutzers, nicht Vor- oder Nachname. Tickets werden nur auf der Kontakt-Timeline angezeigt, nicht in Unternehmens- oder Deal-Datensätzen. Welche Tickets gesendet werden, können Sie über die Trigger-Bedingungen ändern, die JSON-Payload jedoch nicht. Um die Integration abzuschalten, deaktivieren Sie die drei Trigger.",
          },
          {
            type: "note",
            text: "Testen Sie den Webhook HubSpot Integration nicht aus dem Admin Center. Zendesk warnt, dass dabei ungültiges JSON gesendet und die Integration getrennt werden kann. Testen Sie stattdessen, indem Sie ein echtes Testticket erstellen oder lösen.",
          },
        ],
      },
      {
        heading: "Zendesk Action Flows mit HubSpot-Aktionen",
        blocks: [
          {
            type: "p",
            text: "Action Flows sind der Builder von Zendesk für mehrstufige Automatisierungen, die externe Systeme erreichen. Der HubSpot-Connector fügt diese Aktionen hinzu:",
          },
          {
            type: "ul",
            items: [
              "Kontakte, Unternehmen, Deals und Tickets in HubSpot erstellen und aktualisieren.",
              "Kontakte, Unternehmen, Deals und Tickets nachschlagen sowie Benutzer nachschlagen.",
              "Einen Kontakt über Contact ID oder E-Mail nachschlagen. Wenn Sie beides angeben, hat Contact ID Vorrang.",
              "Mit OAuth 2.0 über 'External actions' in der Seitenleiste des Schritts verbinden. Zendesk empfiehlt ein eigenes Servicekonto und erneuert Tokens automatisch.",
            ],
          },
          {
            type: "p",
            text: "Action Flows verbrauchen Action-Credits. Zendesk nennt 100.000 Aktionen pro Monat für Suite Professional und 225.000 für Suite Enterprise, sendet bei 80 % und 100 % des Kontingents eine E-Mail und verkauft weitere in Einheiten von 100.000. Admins sehen den Verbrauch im Admin Center unter Account, dann Usage, dann Summary. Kontingente und Verfügbarkeit je Plan ändern sich; prüfen Sie sie daher in Ihrem eigenen Account, bevor Sie auf Action Flows aufbauen.",
          },
        ],
      },
      {
        heading: "Apps für den Zwei-Wege-Sync",
        blocks: [
          {
            type: "p",
            text: "Der Zendesk Marketplace führt eine App Data sync by HubSpot, die er als bidirektionalen Echtzeit-Sync zwischen HubSpot und Zendesk beschreibt. Für die Installation braucht es einen HubSpot Super Admin oder einen Benutzer mit Berechtigungen für den App Marketplace, der die Zendesk-Subdomain eingibt, die Verbindung autorisiert und auswählt, was synchronisiert wird. Apps von Drittanbietern wie HubSpot CRM Connect bringen eigene Funktionen mit. Marketplace-Einträge sind Marketingseiten; prüfen Sie daher im Einrichtungsbildschirm, welche Datensätze und Felder eine App tatsächlich synchronisiert, bevor Sie sich darauf verlassen.",
          },
          {
            type: "p",
            text: "Die Data-Sync-Dokumentation von HubSpot erklärt, wie Zwei-Wege-Syncs Datensätze zuordnen: Standardmäßig werden Kontakte über die E-Mail-Adresse und Unternehmen über Name oder Domain abgeglichen, und nur Kontakte mit gültiger E-Mail-Adresse werden synchronisiert. Bereinigen Sie doppelte Kontakte und fehlende E-Mail-Adressen, bevor Sie einen Zwei-Wege-Sync aktivieren, sonst kopiert der Sync das Durcheinander in beide Tools.",
          },
        ],
      },
      {
        heading: "Eigenbau mit Webhooks und beiden APIs",
        blocks: [
          {
            type: "p",
            text: "Ein Eigenbau gibt Ihnen volle Kontrolle, etwa um offene Tickets in HubSpot-Unternehmensdatensätzen anzuzeigen, was die kostenlose Integration nicht kann. Hier ist ein gängiges Muster, beschrieben in Schritten. Es ist keine Fallstudie von TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: Ein Zendesk-Trigger mit der Aktion 'Notify by > Active webhook' sendet die Ticket-ID und die E-Mail-Adresse des Anfragenden an n8n oder Make, wenn ein Ticket erstellt wird oder sich sein Status ändert.",
              "Verifizieren: Der Workflow prüft den Header X-Zendesk-Webhook-Signature, sodass nur echte Zendesk-Anfragen verarbeitet werden.",
              "Nachschlagen: Er findet den HubSpot-Kontakt über die E-Mail-Adresse mithilfe der CRM API und dann das Unternehmen, mit dem der Kontakt verknüpft ist.",
              "Aktualisieren: Er schreibt die Anzahl der Tickets oder den letzten Status in eine Unternehmenseigenschaft, die Listen, Berichte und Workflows in HubSpot nutzen können.",
              "Fehler behandeln: Bei HTTP 429 wartet er und versucht es erneut, da sowohl Zendesk als auch HubSpot API-Anfragen begrenzen.",
            ],
          },
          {
            type: "p",
            text: "Für die Gegenrichtung kann ein HubSpot-Workflow Ihren Endpunkt mit der Aktion 'Send a webhook' aufrufen, die HubSpot für Data Hub Professional und Enterprise aufführt und die nur HTTPS-URLs akzeptiert. Verwenden Sie auf der Zendesk-Seite OAuth statt API-Tokens. Seit dem 27. Oktober 2026 können bestehende Accounts bei Zendesk keine neuen API-Tokens mehr erstellen, und alle API-Tokens funktionieren ab dem 30. April 2027 nicht mehr. OAuth-Clients, die am oder nach dem 30. April 2026 erstellt wurden, erhalten Access-Tokens, die standardmäßig nach 30 Minuten ablaufen; die Integration muss daher mit Refresh-Tokens umgehen können.",
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab verbindet Zendesk und HubSpot über APIs, Webhooks, n8n und Make, auf Basis der Tools, die Sie bereits nutzen. Projekte für Custom Automation kosten {{price:custom}}. Die meisten Setups dauern 1 bis 3 Wochen, und jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ist die HubSpot-Zendesk-Integration bidirektional?",
        a: "Die kostenlose Integration Zendesk Support for HubSpot nicht. Sie arbeitet in eine Richtung und sendet Ticketinformationen von Zendesk auf die Timeline des HubSpot-Kontakts. Für einen Zwei-Wege-Sync nutzen Sie eine Marketplace-App wie Data sync by HubSpot oder einen Eigenbau.",
      },
      {
        q: "Kann ich Zendesk-Tickets bei HubSpot-Unternehmen oder -Deals sehen?",
        a: "Nicht mit der kostenlosen Integration, die Tickets nur auf der Kontakt-Timeline anzeigt. Möglich ist das mit einem Eigenbau, der Ticketdaten über die HubSpot API in Unternehmens- oder Deal-Eigenschaften schreibt.",
      },
      {
        q: "Warum wurde meine HubSpot-Integration getrennt, nachdem ich ihren Webhook getestet habe?",
        a: "Zendesk warnt, dass das Testen des Webhooks HubSpot Integration aus dem Admin Center ungültiges JSON senden und die Integration trennen kann. Testen Sie stattdessen mit einem echten Ticket.",
      },
      {
        q: "Kann ich für eine HubSpot-Integration noch ein Zendesk-API-Token verwenden?",
        a: "Nur ein bereits vorhandenes. Zendesk stellt seit dem 27. Oktober 2026 keine neuen API-Tokens mehr aus, deaktiviert Tokens, die 30 Tage lang ungenutzt bleiben, und schaltet am 30. April 2027 alle API-Tokens ab. Verwenden Sie für neue Integrationen OAuth.",
      },
    ],
    sources: [
      { label: "Zendesk Help — Setting up the Zendesk Support for HubSpot integration", url: "https://support.zendesk.com/hc/en-us/articles/4408884090650-Setting-up-the-Zendesk-Support-for-HubSpot-integration" },
      { label: "Zendesk Help — Using HubSpot actions in action flows", url: "https://support.zendesk.com/hc/en-us/articles/10917655354138-Using-HubSpot-actions-in-action-flows" },
      { label: "Zendesk Help — Monitoring the usage of action credits and action flow activity", url: "https://support.zendesk.com/hc/en-us/articles/10149993578522-Monitoring-the-usage-of-action-credits-and-action-flow-activity" },
      { label: "Zendesk Marketplace — Data sync by HubSpot", url: "https://www.zendesk.com/marketplace/apps/support/431348/data-sync-by-hubspot/" },
      { label: "Zendesk Marketplace — HubSpot CRM Connect", url: "https://www.zendesk.com/marketplace/apps/support/959977/hubspot-crm-connect/" },
      { label: "HubSpot Knowledge Base — Connect and use HubSpot data sync", url: "https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows", url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "Zendesk Help — Announcing the removal of API tokens as an authentication method for API requests", url: "https://support.zendesk.com/hc/en-us/articles/10851263566234-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests" },
      { label: "Zendesk Developer Docs — Working with OAuth refresh tokens", url: "https://developer.zendesk.com/documentation/api-basics/authentication/refresh-token/" },
    ],
    related: ["hubspot-service-hub-automation", "zendesk-automation", "n8n-zendesk-integration"],
    updated: "2026-11-03",
  },
  {
    key: "ai-lead-scoring",
    slug: "ki-lead-scoring",
    category: "crm",
    navLabel: "KI-Lead-Scoring",
    primaryKeyword: "KI Lead Scoring",
    title: "KI-Lead-Scoring: ICP-Fit, HubSpot und Attio",
    description:
      "KI-Lead-Scoring erkl\u00e4rt: Leads am idealen Kundenprofil bewerten, HubSpots Lead-Scoring-Tool und seine Grenzen, Scores per API nach Attio schreiben.",
    h1: "KI-Lead-Scoring: So funktioniert die Bewertung am ICP",
    intro:
      "Lead-Scoring macht aus rohen Leads eine sortierte Liste, indem jeder Lead Punkte daf\u00fcr bekommt, wie gut er zu Ihrem idealen Kundenprofil (ICP) passt und wie er sich verh\u00e4lt. KI kommt auf zwei Wegen ins Spiel: plattformeigenes Scoring, etwa HubSpots KI-gest\u00fctzte Lead-Scores, und externe Klassifizierung, bei der ein Modell eine Antwort oder einen Anreicherungsdatensatz liest, einen Fit-Score berechnet und ihn \u00fcber die API zur\u00fcck ins CRM schreibt.",
    keyFacts: [
      "HubSpots Lead-Scoring-Tool braucht Marketing Hub oder Sales Hub Professional oder Enterprise; KI-gest\u00fctzte Kontakt-Scores brauchen Marketing Hub Enterprise.",
      "HubSpots KI-Lead-Scores brauchen eine Mindeststichprobe von 50 Kontakten \u2014 25 konvertierte und 25 nicht konvertierte \u2014, bevor ein Score erzeugt werden kann.",
      "Attio hat keine eingebaute Scoring-Engine und keinen Score-Feldtyp: Ein Score lebt in einem Zahl- oder Auswahl-Attribut, das ein Workflow oder die API f\u00fcllt.",
      "Attio-Zahl-Attribute speichern Flie\u00dfkommazahlen mit bis zu vier Nachkommastellen \u2014 genug f\u00fcr einen Fit-Score von 0\u2013100.",
      "Ein externer Score wird mit einem PATCH auf /crm/v3/objects/contacts/{contactId} nach HubSpot geschrieben und mit einem PATCH auf /v2/objects/{object}/records/{record_id} nach Attio.",
    ],
    sections: [
      {
        heading: "Was KI-Lead-Scoring bedeutet",
        blocks: [
          {
            type: "p",
            text: "Scoring-Modelle kombinieren in der Regel zwei Arten von Signalen. Engagement-Signale messen, was ein Lead tut: \u00d6ffnungen, Klicks, Antworten, Seitenbesuche, gebuchte Termine. Fit-Signale messen, wer der Lead ist, verglichen mit Ihrem idealen Kundenprofil: Branche, Unternehmensgr\u00f6\u00dfe, Land, Rolle, eingesetzte Tools. Ein Fit-Score beantwortet die Frage, ob Sie diesen Lead wollen sollten; ein Engagement-Score, ob der Lead Sie will.",
          },
          {
            type: "p",
            text: "KI taucht an zwei Stellen auf. CRMs liefern eingebaute Machine-Learning-Scores, die aus Ihren historischen Conversions lernen, etwa HubSpots KI-gest\u00fctzte Lead-Scores. Und Teams betreiben eigene Klassifizierung au\u00dferhalb des CRM: Ein Sprachmodell liest eine Outreach-Antwort oder einen Anreicherungsdatensatz, vergibt ein Label (interessiert, jetzt nicht, falsche Person) oder bewertet den ICP-Fit, und das Ergebnis wird \u00fcber die API in ein CRM-Feld geschrieben. Das zweite Muster funktioniert mit jedem CRM, das eine API hat, und darum geht es auf dieser Seite.",
          },
        ],
      },
      {
        heading: "Lead-Scoring in HubSpot",
        blocks: [
          {
            type: "p",
            text: "HubSpots aktuelles Scoring lebt im Lead-Scoring-Tool. Es ist mit Marketing Hub oder Sales Hub Professional oder Enterprise verf\u00fcgbar. Marketing Hub bewertet Kontakte, beide Hubs bewerten Unternehmen, und Sales Hub bewertet Deals. Sie k\u00f6nnen Engagement-Scores, Fit-Scores auf Basis von Eigenschaftswerten und kombinierte Scores anlegen, jeweils aus Gruppen gewichteter Kriterien mit Plus- und Minuspunkten.",
          },
          {
            type: "ul",
            items: [
              "Das Standardmaximum eines Scores liegt bei 100 Punkten; als Score-Limit lassen sich \u00b1100, \u00b1200, \u00b1300, \u00b1400, \u00b1500, \u00b11.000 oder \u00b110.000 einstellen.",
              "Score-Verfall kann Engagement-Punkte mit der Zeit reduzieren, in Intervallen von 1, 3, 6 oder 12 Monaten, wobei jeder Monat mit 30 Tagen z\u00e4hlt.",
              "Schwellenwerte teilen einen Score in die B\u00e4nder High, Medium und Low; kombinierte Scores nutzen eine A1\u2013C3-Matrix aus Fit und Engagement.",
              "KI-gest\u00fctzte Kontakt-Scores (Marketing Hub Enterprise) lernen aus Kontakten, die zwischen zwei Lifecycle-Phasen gewechselt sind, und brauchen mindestens 50 Kontakte \u2014 25 konvertierte und 25 nicht konvertierte.",
            ],
          },
          {
            type: "note",
            text: "Das Tool erstellt eigene Score-Eigenschaften, die an den Score gebunden sind: L\u00f6schen Sie den Score, verschwinden auch die Eigenschaften, und von au\u00dfen lassen sie sich nicht bearbeiten. Ein extern berechneter KI-Score geh\u00f6rt deshalb in eine eigene Zahl-Eigenschaft, die Sie selbst anlegen, nicht in eine vom Tool verwaltete Score-Eigenschaft.",
          },
        ],
      },
      {
        heading: "Scoring in Attio",
        blocks: [
          {
            type: "p",
            text: "Attio geht den umgekehrten Weg: Es gibt keine Scoring-Engine und keinen Score-Feldtyp. Ein Score ist einfach ein Attribut, das Sie f\u00fcllen. Attios eigene Workflow-Vorlage \"MQL Scoring\" bewertet Leads mit Workflow-Bl\u00f6cken, und die Automations-Seite f\u00fchrt einen \"Scoring Agent\" unter den KI-Agenten auf, die in Workflows laufen \u2014 ein Agenten-Schritt mit Anweisungen, kein eigenes Scoring-Produkt. Drei Attributtypen eignen sich f\u00fcr einen Score:",
          },
          {
            type: "ul",
            items: [
              "Ein Zahl-Attribut speichert Flie\u00dfkommazahlen mit bis zu vier Nachkommastellen und l\u00e4sst sich mit Vergleichen wie gr\u00f6\u00dfer-oder-gleich filtern \u2014 ein nat\u00fcrlicher Platz f\u00fcr einen Fit-Score von 0\u2013100.",
              "Ein Auswahl-Attribut h\u00e4lt vordefinierte Optionen, gut f\u00fcr B\u00e4nder wie A, B und C. Das Schreiben eines Werts, dessen Option nicht existiert, liefert einen Fehler, statt die Option anzulegen.",
              "Ein Bewertungs-Attribut ist ein Zahlenwert von 0 bis 5, dargestellt als Sterne.",
            ],
          },
          {
            type: "p",
            text: "Workflows sind in allen Attio-Tarifen verf\u00fcgbar. Ein Workflow kann mit einer Datensatz-\u00c4nderung, einem Zeitplan oder einem \"Webhook received\"-Trigger starten, sodass ein externer Scorer ihn direkt anstossen kann; ein \"Custom agent\"-Block kann einen KI-Schritt mit strukturierter Ausgabe ausf\u00fchren, gefolgt von einem Update-Record-Block zum Speichern. Ausgehende Webhooks sind mit einem HMAC-SHA256 des Bodys im Header Attio-Signature signiert, sodass Ihr Scorer auch sicher auf Attio-Ereignisse reagieren kann.",
          },
        ],
      },
      {
        heading: "Einen externen KI-Score ins CRM schreiben",
        blocks: [
          {
            type: "table",
            caption: "Score per API schreiben (Hersteller-Doku, gepr\u00fcft November 2026)",
            head: ["Schritt", "HubSpot", "Attio"],
            rows: [
              [
                "Feld anlegen",
                "POST /crm/v3/properties/{objectType} mit groupName, name, label, type \"number\", fieldType \"number\"",
                "Zahl- oder Auswahl-Attribut am Objekt anlegen, in den Workspace-Einstellungen oder \u00fcber die Attribut-API",
              ],
              [
                "Einen Datensatz schreiben",
                "PATCH /crm/v3/objects/contacts/{contactId} mit {\"properties\": {...}}; mit idProperty=email geht auch die E-Mail-Adresse",
                "PATCH /v2/objects/{object}/records/{record_id} mit dem Attribut-Slug im Body",
              ],
              [
                "In Masse schreiben",
                "POST /crm/v3/objects/contacts/batch/update, oder batch/upsert zum Anlegen-oder-Aktualisieren",
                "Eine Anfrage pro Datensatz, innerhalb der Rate Limits der API",
              ],
              [
                "Auth",
                "Private-App-Zugriffstoken als Bearer-Token",
                "Workspace-API-Key oder OAuth 2.0, als Bearer-Token; zum Aktualisieren von Datens\u00e4tzen sind die Scopes record_permission:read-write und object_configuration:read n\u00f6tig",
              ],
            ],
          },
          {
            type: "p",
            text: "Eine typische Pipeline, als Schritte beschrieben \u2014 sie zeigt, wie die Teile zusammenpassen, keine TascaLab-Fallstudie:",
          },
          {
            type: "ol",
            items: [
              "Erfassen: Ein neuer Lead kommt aus einem Formular, einer Outreach-Antwort oder einem Tool zur Besucher-Identifizierung.",
              "Klassifizieren: Ein KI-Modell labelt die Antwort oder den Lead (interessiert, nicht interessiert, falsche Person, au\u00dferhalb des Markts).",
              "Bewerten: Die Firmografie des Leads wird mit Ihrem ICP verglichen und ein Fit-Score berechnet.",
              "Schreiben: Der Score landet \u00fcber die obigen Endpunkte in einer eigenen Zahl-Eigenschaft in HubSpot oder einem Zahl-Attribut in Attio.",
              "Alarmieren: Ein CRM-Workflow oder eine Slack-Nachricht informiert den Owner, wenn ein Lead die Schwelle \u00fcberschreitet.",
            ],
          },
        ],
      },
      {
        heading: "Woher die Antworten kommen: lemlist",
        blocks: [
          {
            type: "p",
            text: "Outreach-Antworten sind eines der st\u00e4rksten Scoring-Signale, und lemlist stellt sie auf zwei Wegen bereit. Webhooks senden Echtzeit-POST-Callbacks f\u00fcr Ereignisse wie emailsReplied, linkedinReplied und whatsappReplied sowie Lead-Status wie interested und notInterested; ein Workspace kann bis zu 200 Webhooks halten, und jede Ziel-URL muss eindeutig sein \u2014 registrieren Sie eine URL ohne Ereignistyp, um alle Ereignisse zu empfangen und selbst zu filtern. Die Activities-API (GET /activities) liefert dieselbe Historie gefiltert nach Typ, Kampagne und Datum, zum Abfragen statt Push. Die Authentifizierung ist HTTP Basic mit leerem Benutzernamen und dem API-Key als Passwort \u2014 kein Bearer-Token.",
          },
        ],
      },
      {
        heading: "So wird das gebaut",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut genau diese Pipeline: Leads aus einer Quelle, von KI klassifiziert, am ICP bewertet und in Ihrem CRM erfasst \u2014 als Paket Lead Capture & Scoring ({{price:leadScoring}}, einmalig). Outreach-, Telefonie- oder Anreicherungstools mit HubSpot oder Attio zu verbinden ist das Paket CRM Integration ({{price:crmIntegration}}, einmalig). Die meisten Setups dauern 1\u20133 Wochen, und jedes Projekt umfasst Basisdokumentation und 30 Tage Support nach dem Launch. Sie k\u00f6nnen mit einem kostenlosen 30-min\u00fctigen Health-Check-Gespr\u00e4ch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist KI-Lead-Scoring?",
        a: "Das Sortieren von Leads durch die Kombination von Engagement-Signalen (was ein Lead tut) mit Fit-Signalen (wie gut er zu Ihrem idealen Kundenprofil passt). Die KI steckt entweder im CRM \u2014 wie HubSpots KI-Lead-Scores \u2014 oder l\u00e4uft au\u00dferhalb, klassifiziert Antworten und berechnet einen Fit-Score, der \u00fcber die API zur\u00fcckgeschrieben wird.",
      },
      {
        q: "Was setzt HubSpots Lead-Scoring-Tool voraus?",
        a: "Marketing Hub oder Sales Hub Professional oder Enterprise. KI-gest\u00fctzte Kontakt-Scores brauchen Marketing Hub Enterprise und mindestens 50 Kontakte \u2014 25 konvertierte und 25 nicht konvertierte \u2014, um einen Score zu erzeugen.",
      },
      {
        q: "Hat Attio eingebautes Lead-Scoring?",
        a: "Keine Scoring-Engine und keinen Score-Feldtyp. Scores leben in Zahl- oder Auswahl-Attributen, gef\u00fcllt von Workflows \u2014 einschlie\u00dflich KI-Agenten-Schritten, die Attio als Scoring Agent vermarktet \u2014 oder von einem externen Tool \u00fcber die API.",
      },
      {
        q: "Wie schreibe ich einen Score von au\u00dfen nach HubSpot oder Attio?",
        a: "HubSpot: eine eigene Zahl-Eigenschaft anlegen, dann PATCH /crm/v3/objects/contacts/{contactId}, oder die Batch-Endpunkte f\u00fcr Update und Upsert nutzen. Attio: PATCH /v2/objects/{object}/records/{record_id} mit einem Bearer-Token, das die Scopes record_permission:read-write und object_configuration:read enth\u00e4lt.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base \u2014 Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base \u2014 Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base \u2014 Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers \u2014 Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers \u2014 Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Docs \u2014 Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs \u2014 Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs \u2014 Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs \u2014 Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs \u2014 Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs \u2014 Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help \u2014 Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help \u2014 Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio \u2014 MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio \u2014 Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer \u2014 Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer \u2014 Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer \u2014 Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-12",
  },
  {
    key: "website-visitor-identification",
    slug: "website-besucher-identifizieren",
    category: "crm",
    navLabel: "Besucher-Identifizierung",
    primaryKeyword: "Website Besucher identifizieren",
    title: "Website-Besucher identifizieren: Funktionsweise, Grenzen",
    description:
      "So funktioniert Website-Besucher-Identifizierung: Reverse-IP-Lookup und Tracker, was sie sieht und was nicht, DSGVO- und Cookie-Regeln, HubSpot Buyer Intent.",
    h1: "Website-Besucher identifizieren: Funktionsweise und Grenzen",
    intro:
      "Tools zur Besucher-Identifizierung ordnen den anonymen Traffic Ihrer Website Unternehmen zu \u2014 mit einem Tracking-Skript, Reverse-IP-Lookup und Firmendatenbanken. Sie identifizieren Unternehmen, keine Personen, ihre Abdeckung h\u00e4ngt von den Netzwerken ab, aus denen Ihre Besucher surfen, und in der EU fallen sie klar unter DSGVO- und Cookie-Consent-Regeln.",
    keyFacts: [
      "Die Identifizierung kombiniert ein Tracking-Skript, Tracking-Cookies, Reverse-IP-Lookup, private Datenbanken und Machine Learning \u2014 Besuche werden Unternehmen zugeordnet, nicht einzelnen Personen.",
      "Dealfronts Leadfeeder weigert sich ausdr\u00fccklich, eine typische Identifizierungsquote zu ver\u00f6ffentlichen: Die Abdeckung h\u00e4ngt vom Publikum ab, und Besuche von Consumer-Providern werden herausgefiltert und nicht angezeigt.",
      "Remote-Mitarbeitende sind vor allem dann identifizierbar, wenn sie \u00fcber ein Firmen-VPN surfen.",
      "Der EuGH hat in Breyer (C-582/14) entschieden, dass eine dynamische IP-Adresse f\u00fcr einen Website-Betreiber ein personenbezogenes Datum sein kann, und Erw\u00e4gungsgrund 30 der DSGVO nennt IP-Adressen unter den Online-Kennungen.",
      "HubSpots Buyer Intent ordnet Besuche den IP-Adressen bekannter Unternehmen zu; mehr als 20 Unternehmen pro Ansicht brauchen HubSpot Credits und ein kostenpflichtiges Abo.",
    ],
    sections: [
      {
        heading: "Wie Unternehmen identifiziert werden",
        blocks: [
          {
            type: "p",
            text: "Der Mechanismus, wie ihn das Hilfe-Center von Dealfronts Leadfeeder f\u00fcr den eigenen Tracker beschreibt: Ein Skript auf Ihrer Website erfasst jeden Besuch, und die Identifizierung kombiniert Tracking-Cookies, Reverse-IP-Lookup, private Datenbanken, Analytics-Daten und Machine Learning. Ein Unternehmen besitzt in der Regel seine Domain und seinen B\u00fcro-IP-Bereich, sodass ein Besuch aus diesem Netzwerk dem Unternehmen zugeordnet werden kann. IP-basierte Geolokalisierung erg\u00e4nzt die Region des Besuchers.",
          },
          {
            type: "p",
            text: "Traffic, der keinem Unternehmen zugeordnet werden kann, bleibt au\u00dfen vor: Leadfeeder berechnet Besuche von Consumer-Internetprovidern nach eigener Aussage nicht \u2014 und zeigt sie nicht einmal an. Was Sie sehen, ist der identifizierte Ausschnitt Ihres Traffics, nicht alles.",
          },
        ],
      },
      {
        heading: "Was das Tool nicht sieht",
        blocks: [
          {
            type: "ul",
            items: [
              "Einzelne Personen. Leadfeeder erkl\u00e4rt, dass sich ohne Selbst-Identifizierung \u00fcber ein Formular oder eine Anmeldung nicht feststellen l\u00e4sst, wer genau die Website besucht hat \u2014 und dass das Identifizieren einzelner Besucher in vielen L\u00e4ndern als illegal gilt.",
              "Den meisten Heim-Traffic. Remote-Mitarbeitende sind vor allem \u00fcber ein Firmen-VPN identifizierbar; auf einer Consumer-Verbindung erscheinen sie als Provider-Traffic und werden herausgefiltert.",
              "Eine garantierte Quote. Leadfeeders eigenes Hilfe-Center sagt, es gebe keinen ehrlichen Weg, eine Identifizierungsquote zu versprechen, weil sie vom Publikum jeder Website abh\u00e4ngt \u2014 und warnt, dass Dienste mit festen Prozentversprechen vermutlich von wenigen Konten hochrechnen.",
            ],
          },
        ],
      },
      {
        heading: "DSGVO und Cookie-Consent",
        blocks: [
          {
            type: "p",
            text: "In der EU gelten zwei getrennte Regeln. Erstens k\u00f6nnen IP-Adressen personenbezogene Daten sein: Artikel 4 Absatz 1 der DSGVO z\u00e4hlt Online-Kennungen zu den personenbezogenen Daten, Erw\u00e4gungsgrund 30 nennt Internetprotokoll-Adressen und Cookie-Kennungen ausdr\u00fccklich, und der Europ\u00e4ische Gerichtshof hat in Breyer (C-582/14, entschieden unter der Vorg\u00e4nger-Richtlinie der DSGVO) festgestellt, dass eine dynamische IP-Adresse f\u00fcr einen Website-Betreiber ein personenbezogenes Datum darstellt, wenn er rechtliche Mittel hat, sie \u00fcber den Zugangsanbieter dem Besucher zuzuordnen.",
          },
          {
            type: "p",
            text: "Zweitens verlangt Artikel 5 Absatz 3 der ePrivacy-Richtlinie eine Einwilligung f\u00fcr das Speichern von Informationen auf dem Ger\u00e4t eines Besuchers oder das Auslesen daraus \u2014 mit engen Ausnahmen f\u00fcr das, was f\u00fcr den vom Besucher angeforderten Dienst unbedingt erforderlich ist. Ein Tracker zur Besucher-Identifizierung, der Cookies setzt oder liest, f\u00e4llt unter diese Regel, unabh\u00e4ngig davon, ob die Daten personenbezogen sind \u2014 deshalb geh\u00f6ren solche Tools in der EU hinter ein Cookie-Consent-Banner.",
          },
          {
            type: "note",
            text: "Das beschreibt die Regeln auf hoher Ebene. Es ist keine Rechtsberatung; wie sie auf Ihr Setup zutreffen, h\u00e4ngt von Ihren Tools und Ihrer Rechtsgrundlage ab.",
          },
        ],
      },
      {
        heading: "Besucher-Identifizierung in HubSpot",
        blocks: [
          {
            type: "p",
            text: "HubSpots aktuelles Feature daf\u00fcr ist Buyer Intent. Der HubSpot-Tracking-Code auf Ihrer Website sammelt Besucherdaten wie Website-Aktivit\u00e4t und IP-Adressen, und Buyer Intent verbindet anonyme Web-Besucher mit den IP-Adressen bekannter Unternehmen. Was HubSpot dokumentiert, Stand Oktober 2026:",
          },
          {
            type: "ul",
            items: [
              "Es wird f\u00fcr Starter-, Professional- und Enterprise-Abos gef\u00fchrt, wobei bestimmte Funktionen HubSpot Credits erfordern.",
              "Mehr als 20 Unternehmen pro Ansicht erfordern HubSpot Credits und ein kostenpflichtiges Abo; das Hinzuf\u00fcgen von Unternehmen und das Verfolgen ihrer Intent-Signale verbrauchen Credits, Filter und Ausschl\u00fcsse nicht.",
              "Zeitraum-Filter f\u00fcr Besuche decken h\u00f6chstens die letzten 90 Tage ab, und \u00fcber Buyer Intent hinzugef\u00fcgte Unternehmen erhalten die Datensatzquelle \"Buyer-Intent\".",
              "HubSpots eigener Artikel weist darauf hin, dass zur Einhaltung der Datenschutzgesetze ein Cookie-Consent-Banner auf Ihrer Website n\u00f6tig sein kann.",
            ],
          },
        ],
      },
      {
        heading: "Vom identifizierten Unternehmen zum bewerteten Lead",
        blocks: [
          {
            type: "p",
            text: "Die Identifizierung allein erzeugt nur eine Liste. Der Wert entsteht durch das, was danach passiert \u2014 ein g\u00e4ngiges Muster, als Schritte beschrieben; es zeigt, wie die Teile zusammenpassen, keine TascaLab-Fallstudie:",
          },
          {
            type: "ol",
            items: [
              "Identifizieren: Der Tracker meldet, welche Unternehmen die Website besucht und was sie angesehen haben.",
              "Anreichern: Jedes Unternehmen wird nach Gr\u00f6\u00dfe, Branche und Land nachgeschlagen.",
              "Bewerten: Das Unternehmen wird mit Ihrem idealen Kundenprofil verglichen und bekommt einen Fit-Score.",
              "Erfassen: Das Unternehmen und sein Score landen in Ihrem CRM \u2014 als HubSpot-Unternehmensdatensatz oder Attio-Datensatz.",
              "Zusammenfassen: Eine geplante \u00dcbersicht, sortiert nach Score, geht per E-Mail oder Slack an den Vertrieb, damit er die besten Accounts zuerst sieht.",
            ],
          },
        ],
      },
      {
        heading: "So wird das gebaut",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut das als Paket Lead Capture & Scoring ({{price:leadScoring}}, einmalig): Leads aus einer Quelle \u2014 Website-Besucher, ein Formular oder Outreach-Antworten \u2014 von KI klassifiziert und bewertet und in Ihrem CRM erfasst, mit Benachrichtigungen per E-Mail oder Slack. Die umliegenden Tools mit HubSpot oder Attio zu verbinden ist das Paket CRM Integration ({{price:crmIntegration}}, einmalig). Die meisten Setups dauern 1\u20133 Wochen, und jedes Projekt umfasst Basisdokumentation und 30 Tage Support nach dem Launch. Sie k\u00f6nnen mit einem kostenlosen 30-min\u00fctigen Health-Check-Gespr\u00e4ch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann Besucher-Identifizierung mir sagen, wer meine Website besucht hat?",
        a: "Sie identifiziert Unternehmen \u00fcber deren Netzwerke \u2014 keine Personen. Die Anbieter erkl\u00e4ren, dass sich ohne Selbst-Identifizierung \u00fcber ein Formular oder eine Anmeldung nicht feststellen l\u00e4sst, wer genau da war, und dass das Identifizieren einzelner Besucher in vielen L\u00e4ndern als illegal gilt.",
      },
      {
        q: "Welcher Anteil der Besucher l\u00e4sst sich identifizieren?",
        a: "Es gibt keine ehrliche feste Quote. Leadfeeders Hilfe-Center weigert sich, eine zu ver\u00f6ffentlichen, weil die Abdeckung vom Publikum jeder Website abh\u00e4ngt; Consumer-Provider-Traffic wird komplett herausgefiltert, und Remote-Mitarbeitende sind vor allem \u00fcber ein Firmen-VPN identifizierbar.",
      },
      {
        q: "Ist IP-basierte Besucher-Identifizierung nach der DSGVO legal?",
        a: "IP-Adressen k\u00f6nnen personenbezogene Daten sein (Breyer, C-582/14; Erw\u00e4gungsgrund 30 der DSGVO), und Tracker, die Cookies setzen oder lesen, brauchen nach Artikel 5 Absatz 3 der ePrivacy-Richtlinie eine Einwilligung \u2014 deshalb geh\u00f6ren diese Tools in der EU hinter ein Consent-Banner. Das ist keine Rechtsberatung.",
      },
      {
        q: "Was setzt HubSpot Buyer Intent voraus?",
        a: "Den HubSpot-Tracking-Code auf Ihrer Website und ein Starter-, Professional- oder Enterprise-Abo. Mehr als 20 Unternehmen pro Ansicht brauchen HubSpot Credits, das Hinzuf\u00fcgen von Unternehmen und das Verfolgen von Intent-Signalen verbrauchen Credits, und Besuchs-Filter decken h\u00f6chstens die letzten 90 Tage ab.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help \u2014 How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex \u2014 Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU \u2014 Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex \u2014 Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base \u2014 Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
