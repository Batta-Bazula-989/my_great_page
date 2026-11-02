import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "attio-workflows-automatisering",
    category: "crm",
    navLabel: "Attio-workflows",
    primaryKeyword: "Attio workflows automatisering",
    title: "Attio-workflows: triggers, blokken, credits en de API",
    description:
      "Attio-workflows uitgelegd: trigger- en actieblokken, verbruik van workflowcredits, rate limits van de REST API, webhooksignaturen en koppelingen met support.",
    h1: "Attio-workflows: zo werkt CRM-automatisering in Attio",
    intro:
      "Attio automatiseert CRM-werk met workflows. Een workflow start vanuit een triggerblok en voert een reeks actieblokken uit, zoals een record bijwerken, een taak aanmaken, een Slack-bericht sturen of een HTTP-request doen. Workflowruns verbruiken workspacecredits, en al het andere koppel je via de REST API en webhooks van Attio.",
    keyFacts: [
      "Een Attio-workflow bestaat uit een triggerblok, dat de workflow start, en actieblokken, die het werk doen.",
      "Workflows verbruiken workspacecredits. De meeste blokken verbruiken één credit, en een blok dat mislukt verbruikt er geen, net als elk blok daarna.",
      "De REST API van Attio staat 100 leesrequests en 25 schrijfrequests per seconde toe. Boven de limiet geeft de API HTTP 429 terug met een Retry-After-header.",
      "Attio ondertekent webhooks met een HMAC-SHA256 van de request body, verstuurd in de header Attio-Signature.",
    ],
    sections: [
      {
        heading: "Zo zijn Attio-workflows opgebouwd",
        blocks: [
          {
            type: "p",
            text: "Je bouwt een workflow op een canvas. Het triggerblok bepaalt wanneer de workflow draait, en de actieblokken erna bepalen wat er gebeurt. De blokbibliotheek van Attio deelt triggers in vier soorten in:",
          },
          {
            type: "ul",
            items: [
              "Recordtriggers, zoals 'Record created'.",
              "Lijsttriggers, zoals 'Record added to list'.",
              "Taaktriggers, zoals 'Task created'.",
              "Utility-triggers, zoals 'Manual run', een schema of een inkomende webhook.",
            ],
          },
          {
            type: "p",
            text: "Het helpcenter van Attio noemt een record bijwerken, een taak aanmaken, een Slack-bericht sturen, iemand inschrijven in een sequence en een HTTP-request doen als voorbeelden van actieblokken. Je kunt een workflow ook in gewone taal beschrijven en Ask Attio hem laten bouwen. Apps die met de Attio SDK zijn gebouwd, kunnen eigen blokken toevoegen, die dan in de blokkiezer naast de ingebouwde blokken verschijnen.",
          },
          {
            type: "note",
            text: "Standaard kan een workflow niet naar een object schrijven. Een admin, of een lid met volledige toegang tot dat object, moet de workflow eerst toegang geven. Controleer dit voordat je een workflow test die records bijwerkt.",
          },
        ],
      },
      {
        heading: "Hoe workflows credits verbruiken",
        blocks: [
          {
            type: "p",
            text: "Workflowruns en AI-functies putten uit de gedeelde credits van de workspace. De factureringsdocumentatie van Attio beschrijft hoe ze worden geteld:",
          },
          {
            type: "ul",
            items: [
              "De meeste workflowblokken verbruiken één credit per keer dat ze draaien.",
              "Credits worden alleen in rekening gebracht voor blokken die echt draaien. Mislukt een run halverwege, dan verbruiken het mislukte blok en elk blok daarna geen credits.",
              "Het herberekenen van AI-attributen verbruikt ook credits.",
              "Admins zien het creditverbruik per workflow in Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Hoeveel credits inbegrepen zijn, verschilt per abonnement, en Attio heeft zijn abonnementen al eerder gewijzigd. Bekijk het actuele tegoed op de prijspagina van Attio en schat je verbruik als het aantal blokken per run maal het aantal runs dat je per maand verwacht.",
          },
        ],
      },
      {
        heading: "De Attio API en webhooks",
        blocks: [
          {
            type: "p",
            text: "Voor alles wat een workflow niet zelf kan, heeft Attio een REST API en uitgaande webhooks. Dit zegt de ontwikkelaarsdocumentatie over elk van beide.",
          },
          {
            type: "table",
            caption: "REST API en webhooks van Attio (ontwikkelaarsdocumentatie van Attio, gecontroleerd in november 2026)",
            head: ["Onderwerp", "Wat Attio documenteert"],
            rows: [
              ["Rate limits", "100 requests per seconde voor leesacties en 25 per seconde voor schrijfacties. Boven de limiet volgt HTTP 429 met een Retry-After-header."],
              ["List-endpoints", "List records en List entries hebben daarnaast limieten op basis van een score, geteld over een venster van 10 seconden over alle apps en tokens heen."],
              ["Authenticatie", "Een API-sleutel voor één workspace, of OAuth 2.0 voor apps die in meerdere workspaces worden gebruikt. Tokens worden als Bearer-tokens verstuurd, en scopes stel je per token in."],
              ["Webhookgebeurtenissen", "Gebeurtenissen zijn onder meer record.created, list-entry.created, note.created en task.created."],
              ["Webhooksignatuur", "Een HMAC-SHA256 van de ruwe request body, gemaakt met het secret van de webhook en hex-gecodeerd, in de header Attio-Signature."],
              ["Nieuwe pogingen", "Elk bericht bevat een Idempotency-Key-header die gelijk blijft wanneer Attio het bericht opnieuw verstuurt."],
            ],
          },
          {
            type: "p",
            text: "Om te controleren of een webhook van Attio komt, bereken je de HMAC-SHA256 van de ruwe body opnieuw met het webhooksecret en vergelijk je die met de header Attio-Signature. Attio stuurt dezelfde waarde ook als X-Attio-Signature mee voor oudere middleware. Gebruik de Idempotency-Key-header om berichten over te slaan die je al hebt verwerkt, zodat een nieuwe poging geen tweede taak of Slack-bericht aanmaakt.",
          },
        ],
      },
      {
        heading: "Attio koppelen aan je supporttools",
        blocks: [
          {
            type: "p",
            text: "Attio heeft een Slack-app voor meldingen en een officiële Zapier-app. Zapier vermeldt kant-en-klare koppelingen tussen Attio en helpdesks zoals Zendesk en Intercom. Wil je meer controle, koppel een helpdesk dan via n8n of Make aan de API en webhooks van Attio. Hieronder staat een veelgebruikt patroon, beschreven in stappen. Het laat zien hoe de onderdelen in elkaar grijpen. Het is geen TascaLab-casestudy.",
          },
          {
            type: "ol",
            items: [
              "Trigger: je helpdesk stuurt een webhook naar n8n of Make wanneer een ticket wordt aangemaakt of geëscaleerd.",
              "Opzoeken: de workflow zoekt via de API het bedrijfsrecord van de klant in Attio op en blijft daarbij binnen de limiet van 100 leesacties per seconde.",
              "Bijwerken: de workflow schrijft de status of categorie van het ticket naar een attribuut op het record, of maakt een taak aan voor de accounteigenaar.",
              "Reageren in Attio: een Attio-workflow die door die recordupdate wordt getriggerd, stuurt een Slack-bericht naar de accounteigenaar.",
              "Fouten afhandelen: wacht en probeer opnieuw bij HTTP 429, en gebruik de Idempotency-Key-header om dubbele webhookleveringen te negeren.",
            ],
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab koppelt tools zoals Attio aan de helpdesk- en chattools die je al gebruikt, via API's, webhooks, n8n en Make, zonder overstap naar een ander platform. Projecten voor Custom Automation kosten {{price:custom}}. De meeste implementaties duren 1 tot 3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat zijn Attio-workflows?",
        a: "De automatiseringstool van Attio. Een workflow start vanuit een triggerblok, zoals een record dat wordt aangemaakt of een handmatige run, en voert daarna actieblokken uit, zoals een record bijwerken, een taak aanmaken, een Slack-bericht sturen of een HTTP-request doen.",
      },
      {
        q: "Kosten Attio-workflows credits?",
        a: "Ja. Workflowruns verbruiken de gedeelde credits van de workspace. De meeste blokken verbruiken één credit per run, en blokken die mislukken of nooit draaien verbruiken er geen. Hoeveel credits inbegrepen zijn, hangt af van je abonnement.",
      },
      {
        q: "Wat zijn de rate limits van de Attio API?",
        a: "100 requests per seconde voor leesacties en 25 per seconde voor schrijfacties. Boven de limiet geeft Attio HTTP 429 terug met een Retry-After-header. De endpoints List records en List entries hebben daarnaast limieten op basis van een score.",
      },
      {
        q: "Hoe verifieer ik een Attio-webhook?",
        a: "Bereken een HMAC-SHA256 van de ruwe request body met het secret van de webhook, codeer die als hex en vergelijk de uitkomst met de header Attio-Signature.",
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
    slug: "attio-vs-hubspot-automatisering",
    category: "crm",
    navLabel: "Attio vs HubSpot-automatisering",
    primaryKeyword: "Attio vs HubSpot automatisering",
    title: "Attio vs HubSpot-automatisering: workflows, API, webhooks",
    description:
      "Attio vs HubSpot-automatisering: wie workflows krijgt, limieten en credits, triggers, code- en webhookstappen, API-limieten en controle van webhooksignaturen.",
    h1: "Attio vs HubSpot-automatisering: workflows, limieten, API en webhooks",
    intro:
      "Attio en HubSpot automatiseren allebei CRM-werk met visuele workflows, maar ze beperken die op verschillende manieren. HubSpot biedt workflows alleen in de Professional- en Enterprise-edities en legt een maximum op aan hoeveel je er kunt maken, terwijl Attio workflowruns telt in workspacecredits. Hun API's en webhooks verschillen ook in rate limits en in hoe je een request verifieert.",
    keyFacts: [
      "HubSpot-workflows vereisen een Professional- of Enterprise-abonnement. Marketing, Sales of Service Hub Professional staat tot 300 workflows toe, en Enterprise tot 1.000.",
      "Attio telt workflowgebruik in workspacecredits. De meeste blokken verbruiken één credit per run.",
      "Custom code-acties in HubSpot moeten binnen 20 seconden klaar zijn en kunnen tot 128 MB geheugen gebruiken.",
      "De API van Attio staat 100 leesacties en 25 schrijfacties per seconde toe. Private apps van HubSpot op Professional of Enterprise krijgen 190 requests per 10 seconden.",
      "HubSpot ondertekent webhooks met X-HubSpot-Signature-v3. Attio gebruikt de header Attio-Signature.",
    ],
    sections: [
      {
        heading: "Vergelijking naast elkaar",
        blocks: [
          {
            type: "table",
            caption: "Attio vs HubSpot-automatisering (documentatie van de leveranciers, gecontroleerd in november 2026)",
            head: ["Vraag", "Attio", "HubSpot"],
            rows: [
              ["Hoe gebruik wordt beperkt", "Workflowruns verbruiken workspacecredits. De meeste blokken verbruiken één credit.", "Professional of Enterprise vereist. Een maximum aantal workflows per editie."],
              ["Triggers", "Record-, lijst-, taak- en utility-triggers, waaronder een schema, een webhook en een handmatige run", "Inschrijvingstriggers op basis van filters, gebeurtenissen, schema's en webhooks"],
              ["Een ander systeem aanroepen", "HTTP request-blok. Apps kunnen eigen blokken toevoegen.", "Acties 'Send a webhook' en 'Custom code', in Data Hub Professional en Enterprise"],
              ["Slack", "Blok voor Slack-berichten, met de Slack-app van Attio", "Actie voor Slack-meldingen, met de Slack-integratie geïnstalleerd"],
              ["API-rate limit", "100 leesacties en 25 schrijfacties per seconde", "Private apps: 100 per 10 seconden op Free en Starter, 190 op Professional en Enterprise, plus een daglimiet"],
              ["Webhooksignatuur", "HMAC-SHA256 van de body, hex-gecodeerd, in Attio-Signature", "HMAC-SHA256 van methode, URI, body en timestamp, base64-gecodeerd, in X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "HubSpot-workflows: edities en limieten",
        blocks: [
          {
            type: "p",
            text: "Volgens de workflows-FAQ van HubSpot is een Professional- of Enterprise-abonnement vereist om workflows te gebruiken. Hoeveel je er kunt maken, hangt af van de editie:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales of Service Hub Professional: tot 300 workflows.",
              "Marketing, Sales of Service Hub Enterprise: tot 1.000 workflows.",
              "Met de Brands-add-on: 100 workflows extra.",
              "Met meerdere hubs bepaalt het abonnement met de hoogste limiet jouw limiet.",
            ],
          },
          {
            type: "p",
            text: "Alleen aangepaste workflows die in de workflowtool zijn gebouwd, tellen mee voor de limiet. Eenvoudige automatiseringen in tools zoals formulieren tellen niet mee. Standaard wordt een record alleen in een workflow ingeschreven de eerste keer dat het aan de inschrijvingstriggers voldoet. Je kunt herinschrijving inschakelen, maar die kan geen AND-criteria gebruiken en schrijft records niet met terugwerkende kracht in.",
          },
          {
            type: "p",
            text: "Twee acties zijn het belangrijkst voor integraties: 'Send a webhook' en 'Custom code'. HubSpot vermeldt beide voor Data Hub Professional en Enterprise, de hub die eerder Operations Hub heette. Custom code-acties draaien Node.js of Python, moeten binnen 20 seconden klaar zijn en kunnen tot 128 MB geheugen gebruiken, dus lange taken horen thuis in een externe tool zoals n8n.",
          },
        ],
      },
      {
        heading: "Attio-workflows: gemeten in credits",
        blocks: [
          {
            type: "p",
            text: "Attio meet workflows op basis van gebruik. Runs putten uit de gedeelde credits van de workspace, de meeste blokken verbruiken één credit, en blokken die mislukken of nooit draaien verbruiken er geen. Admins zien het creditverbruik per workflow in Workspace settings. Hoeveel credits inbegrepen zijn, verschilt per abonnement, dus bekijk de prijspagina van Attio en schat het aantal blokken per run maal het aantal runs per maand.",
          },
          {
            type: "p",
            text: "Om vanuit een Attio-workflow een ander systeem te bereiken, gebruik je het HTTP request-blok, of bouw je met de Attio SDK een app die eigen workflowblokken toevoegt.",
          },
        ],
      },
      {
        heading: "API's en webhooks voor integraties",
        blocks: [
          {
            type: "p",
            text: "HubSpot beperkt private apps per 10 seconden en per dag. Free- en Starter-accounts krijgen 100 requests per 10 seconden en 250.000 per dag. Professional krijgt 190 per 10 seconden en 625.000 per dag, en Enterprise krijgt 190 per 10 seconden en 1.000.000 per dag. De limiet per 10 seconden geldt per app, en de daglimiet wordt gedeeld door alle apps in het account. Boven de limiet geeft HubSpot HTTP 429 terug, en de richtlijnen van HubSpot vragen om foutresponses onder 5% van je dagelijkse requests te houden.",
          },
          {
            type: "p",
            text: "Attio telt per seconde: 100 leesacties en 25 schrijfacties, met HTTP 429 en een Retry-After-header als je daarboven komt. De endpoints List records en List entries hebben daarnaast limieten op basis van een score, geteld over een venster van 10 seconden.",
          },
          {
            type: "p",
            text: "Beide ondertekenen hun webhooks, maar op een andere manier. De v3-signatuur van HubSpot komt binnen in X-HubSpot-Signature-v3, samen met X-HubSpot-Request-Timestamp. Het is een HMAC-SHA256, base64-gecodeerd en gemaakt met het client secret van de app, over de methode, URI, body en timestamp, en HubSpot zegt dat je requests moet weigeren waarvan de timestamp meer dan 5 minuten oud is. De header Attio-Signature van Attio is een hex-gecodeerde HMAC-SHA256 van de ruwe body, gemaakt met het secret van de webhook. Attio stuurt ook een Idempotency-Key-header mee die bij nieuwe pogingen gelijk blijft.",
          },
        ],
      },
      {
        heading: "Welke past bij een supportteam",
        blocks: [
          {
            type: "ul",
            items: [
              "Werkt je supportteam al in de helpdesk van HubSpot, dan staan tickets, SLA's en ticketworkflows in hetzelfde account als het CRM, en zijn workflows inbegrepen vanaf Professional.",
              "Gebruik je Attio als CRM en een aparte helpdesk, koppel die twee dan via de API's en webhooks met n8n, Make of Zapier, dat een officiële Attio-app heeft.",
              "Roepen je automatiseringen andere systemen aan, houd dan in je budget rekening met Data Hub Professional in HubSpot, of plan rond het HTTP request-blok in Attio.",
              "Zijn de volumes hoog, vergelijk de API-limieten hierboven dan met je piekvolume aan tickets voordat je kiest waar de logica draait.",
            ],
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt automatiseringen bovenop het CRM en de helpdesk die je al gebruikt, met API's, webhooks, n8n en Make, zodat je niet van platform hoeft te wisselen. Projecten voor Custom Automation kosten {{price:custom}}. De meeste implementaties duren 1 tot 3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Bevat elk HubSpot-abonnement workflows?",
        a: "Nee. Volgens de workflows-FAQ van HubSpot is een Professional- of Enterprise-abonnement vereist. Marketing, Sales of Service Hub Professional staat tot 300 workflows toe, en Enterprise tot 1.000.",
      },
      {
        q: "Hoe beperkt Attio workflows?",
        a: "Met workspacecredits. Workflowruns putten uit de gedeelde credits van de workspace, de meeste blokken verbruiken één credit per run, en hoeveel credits inbegrepen zijn, hangt af van je abonnement.",
      },
      {
        q: "Kan ik eigen code draaien in workflows van HubSpot of Attio?",
        a: "HubSpot heeft een actie 'Custom code' in Data Hub Professional en Enterprise die Node.js of Python draait, binnen 20 seconden en 128 MB geheugen. Attio biedt een HTTP request-blok, en apps die met de SDK van Attio zijn gebouwd, kunnen eigen blokken toevoegen.",
      },
      {
        q: "Hoe verifieer ik webhooks van HubSpot en Attio?",
        a: "Bij HubSpot bereken je de HMAC-SHA256 van methode, URI, body en timestamp opnieuw met je client secret en vergelijk je die met X-HubSpot-Signature-v3. Bij Attio vergelijk je een HMAC-SHA256 van de ruwe body, gemaakt met het webhooksecret, met de header Attio-Signature.",
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
