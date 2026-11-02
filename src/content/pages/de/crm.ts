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
      "Workflows verbrauchen Workspace-Credits. Die meisten Blöcke verbrauchen einen Credit, und ein fehlgeschlagener Block sowie jeder Block danach verbrauchen keinen.",
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
            text: "Das Help Center von Attio nennt als Beispiele für Aktionsblöcke: einen Datensatz aktualisieren, eine Aufgabe anlegen, eine Slack-Nachricht senden, jemanden in eine Sequence aufnehmen und einen HTTP-Request ausführen. Sie können einen Workflow auch in natürlicher Sprache beschreiben und ihn von Ask Attio bauen lassen. Apps, die mit dem Attio SDK gebaut sind, können eigene Blöcke hinzufügen, die dann in der Blockauswahl neben den integrierten Blöcken erscheinen.",
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
            text: "Workflow-Läufe und KI-Funktionen greifen auf die gemeinsamen Credits des Workspace zu. Die Abrechnungsdokumentation von Attio beschreibt, wie sie gezählt werden:",
          },
          {
            type: "ul",
            items: [
              "Die meisten Workflow-Blöcke verbrauchen bei jedem Lauf einen Credit.",
              "Credits werden nur für Blöcke berechnet, die tatsächlich laufen. Schlägt ein Lauf mittendrin fehl, verbrauchen der fehlgeschlagene Block und jeder Block danach keine Credits.",
              "Auch das Neuberechnen von KI-Attributen verbraucht Credits.",
              "Admins sehen den Credit-Verbrauch pro Workflow unter Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Wie viele Credits enthalten sind, unterscheidet sich je nach Plan, und Attio hat seine Pläne schon früher geändert. Prüfen Sie das aktuelle Kontingent auf der Preisseite von Attio und schätzen Sie den Verbrauch als Anzahl der Blöcke pro Lauf mal die erwarteten Läufe pro Monat.",
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
        a: "Ja. Workflow-Läufe verbrauchen die gemeinsamen Credits des Workspace. Die meisten Blöcke verbrauchen einen Credit pro Lauf, und Blöcke, die fehlschlagen oder nie laufen, verbrauchen keinen. Wie viele Credits enthalten sind, hängt von Ihrem Plan ab.",
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
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-02",
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
      "Attio bemisst Workflows über Workspace-Credits. Die meisten Blöcke verbrauchen einen Credit pro Lauf.",
      "Custom-Code-Aktionen in HubSpot müssen innerhalb von 20 Sekunden fertig sein und können bis zu 128 MB Arbeitsspeicher nutzen.",
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
              ["Wie die Nutzung begrenzt wird", "Workflow-Läufe verbrauchen Workspace-Credits. Die meisten Blöcke verbrauchen einen Credit.", "Professional oder Enterprise erforderlich. Eine Obergrenze für die Anzahl der Workflows je Edition."],
              ["Trigger", "Datensatz-, Listen-, Aufgaben- und Utility-Trigger, darunter ein Zeitplan, ein Webhook und ein manueller Lauf", "Aufnahme-Trigger auf Basis von Filtern, Ereignissen, Zeitplänen und Webhooks"],
              ["Ein anderes System aufrufen", "HTTP-Request-Block. Apps können eigene Blöcke hinzufügen.", "Aktionen 'Send a webhook' und 'Custom code', in Data Hub Professional und Enterprise"],
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
            text: "Für Integrationen sind zwei Aktionen am wichtigsten: 'Send a webhook' und 'Custom code'. HubSpot führt beide für Data Hub Professional und Enterprise auf, den Hub, der früher Operations Hub hieß. Custom-Code-Aktionen führen Node.js oder Python aus, müssen innerhalb von 20 Sekunden fertig sein und können bis zu 128 MB Arbeitsspeicher nutzen; lange Jobs gehören daher in ein externes Tool wie n8n.",
          },
        ],
      },
      {
        heading: "Attio-Workflows: über Credits bemessen",
        blocks: [
          {
            type: "p",
            text: "Attio bemisst Workflows nach Nutzung. Läufe greifen auf die gemeinsamen Credits des Workspace zu, die meisten Blöcke verbrauchen einen Credit, und Blöcke, die fehlschlagen oder nie laufen, verbrauchen keinen. Admins sehen den Credit-Verbrauch pro Workflow unter Workspace settings. Die enthaltenen Credits unterscheiden sich je nach Plan; prüfen Sie daher die Preisseite von Attio und schätzen Sie Blöcke pro Lauf mal Läufe pro Monat.",
          },
          {
            type: "p",
            text: "Um aus einem Attio-Workflow ein anderes System zu erreichen, nutzen Sie den HTTP-Request-Block oder bauen mit dem Attio SDK eine App, die eigene Workflow-Blöcke hinzufügt.",
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
              "Wenn Ihre Automatisierungen andere Systeme aufrufen, planen Sie in HubSpot Budget für Data Hub Professional ein oder planen Sie in Attio mit dem HTTP-Request-Block.",
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
        a: "Über Workspace-Credits. Workflow-Läufe greifen auf die gemeinsamen Credits des Workspace zu, die meisten Blöcke verbrauchen einen Credit pro Lauf, und die enthaltenen Credits hängen von Ihrem Plan ab.",
      },
      {
        q: "Kann ich in HubSpot- oder Attio-Workflows eigenen Code ausführen?",
        a: "HubSpot hat in Data Hub Professional und Enterprise eine Aktion 'Custom code', die Node.js oder Python ausführt, innerhalb von 20 Sekunden und 128 MB Arbeitsspeicher. Attio bietet einen HTTP-Request-Block, und Apps, die mit seinem SDK gebaut sind, können eigene Blöcke hinzufügen.",
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
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
