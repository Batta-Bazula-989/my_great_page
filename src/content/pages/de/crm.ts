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
];
