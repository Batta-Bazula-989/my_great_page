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
      "Triggers, logica en het opzoeken van gegevens zijn gratis. Blokken die gegevens schrijven, externe systemen aanroepen of AI gebruiken, verbruiken workspacecredits, de meeste één credit per run.",
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
            text: "Het helpcenter van Attio noemt een record bijwerken, een taak aanmaken, een Slack-bericht sturen, iemand inschrijven in een sequence en een HTTP-request doen als voorbeelden van actieblokken. Een blok 'Execute code' voert je eigen JavaScript uit als stap, met een timeout van 100 seconden. Je kunt een workflow ook in gewone taal beschrijven en Ask Attio hem laten bouwen. Apps die met de Attio SDK zijn gebouwd, kunnen eigen blokken toevoegen, die dan in de blokkiezer naast de ingebouwde blokken verschijnen.",
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
            text: "Workflowruns putten uit de gedeelde credits van de workspace, niet uit seatcredits. Het helpcenter van Attio beschrijft hoe ze in de nieuwe workflows worden geteld:",
          },
          {
            type: "ul",
            items: [
              "Triggers, logica en het opzoeken van gegevens zijn gratis. Credits worden alleen verbruikt wanneer een blok gegevens schrijft, extern iets verstuurt of ontvangt, of AI gebruikt.",
              "Records schrijven, taken, inschrijving in een sequence, HTTP-requests en integratieblokken kosten 1 credit per run. AI-blokken en 'Execute code' hebben variabele kosten.",
              "Alleen het pad dat een run aflegt, wordt in rekening gebracht. Mislukt een run halverwege, dan verbruiken het mislukte blok en elk blok daarna geen credits, maar blokken die vóór de fout draaiden, worden wel in rekening gebracht.",
              "Een workflow bouwen met Ask Attio verbruikt seatcredits, niet de gedeelde workspacecredits.",
            ],
          },
          {
            type: "p",
            text: "Per november 2026 biedt Attio 250 workspacecredits per maand op Free, 1.500 op Plus en 10.000 op Pro. Abonnementen veranderen, dus bekijk de prijspagina van Attio en schat daarna je verbruik als het aantal blokken per run dat credits verbruikt maal het aantal runs dat je per maand verwacht.",
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
        a: "Ja, voor blokken die gegevens schrijven, externe systemen aanroepen of AI gebruiken. De meeste daarvan kosten één credit per run, terwijl triggers, logica en het opzoeken van gegevens gratis zijn. Per november 2026 bevat Free 250 workspacecredits per maand, Plus 1.500 en Pro 10.000.",
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
      "Attio telt workflowgebruik in workspacecredits. Triggers, logica en opzoekacties zijn gratis, en de meeste blokken die gegevens schrijven of externe systemen aanroepen, verbruiken één credit per run.",
      "Custom code-acties in HubSpot moeten binnen 20 seconden klaar zijn en kunnen tot 128 MB geheugen gebruiken. Het blok 'Execute code' van Attio krijgt na 100 seconden een timeout.",
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
              ["Hoe gebruik wordt beperkt", "Workspacecredits. Triggers, logica en opzoekacties zijn gratis, en de meeste blokken die schrijven of externe systemen aanroepen, verbruiken één credit.", "Professional of Enterprise vereist. Een maximum aantal workflows per editie."],
              ["Triggers", "Record-, lijst-, taak- en utility-triggers, waaronder een schema, een webhook en een handmatige run", "Inschrijvingstriggers op basis van filters, gebeurtenissen, schema's en webhooks"],
              ["Een ander systeem aanroepen en code", "HTTP request-blok, en een blok 'Execute code' voor JavaScript. Apps kunnen eigen blokken toevoegen.", "Acties 'Send a webhook' en 'Custom code', in Data Hub Professional en Enterprise"],
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
            text: "Twee acties zijn het belangrijkst voor integraties: 'Send a webhook' en 'Custom code'. HubSpot vermeldt beide voor Data Hub Professional en Enterprise, de hub die eerder Operations Hub heette. Custom code-acties draaien standaard Node.js, of Python als bèta, moeten binnen 20 seconden klaar zijn en kunnen tot 128 MB geheugen gebruiken, dus lange taken horen thuis in een externe tool zoals n8n.",
          },
        ],
      },
      {
        heading: "Attio-workflows: gemeten in credits",
        blocks: [
          {
            type: "p",
            text: "Attio meet workflows op basis van gebruik. Runs putten uit de gedeelde credits van de workspace. Triggers, logica en het opzoeken van gegevens zijn gratis, en blokken die gegevens schrijven, externe systemen aanroepen of AI gebruiken, verbruiken credits, de meeste één per run. Per november 2026 bevat Free 250 workspacecredits per maand, Plus 1.500 en Pro 10.000.",
          },
          {
            type: "p",
            text: "Om vanuit een Attio-workflow een ander systeem te bereiken, gebruik je het HTTP request-blok. Het blok 'Execute code' voert je eigen JavaScript uit met een timeout van 100 seconden en variabele creditkosten, en apps die met de Attio SDK zijn gebouwd, kunnen eigen workflowblokken toevoegen.",
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
              "Roepen je automatiseringen andere systemen aan, houd dan in je budget rekening met Data Hub Professional in HubSpot, of plan rond het HTTP request-blok en het blok 'Execute code' in Attio.",
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
        a: "Met workspacecredits. Triggers, logica en opzoekacties zijn gratis, en de meeste blokken die gegevens schrijven of externe systemen aanroepen, verbruiken één credit per run. AI- en codeblokken variëren. Hoeveel credits inbegrepen zijn, hangt af van je abonnement.",
      },
      {
        q: "Kan ik eigen code draaien in workflows van HubSpot of Attio?",
        a: "HubSpot heeft een actie 'Custom code' in Data Hub Professional en Enterprise die Node.js draait, of Python als bèta, binnen 20 seconden en 128 MB geheugen. Attio heeft een blok 'Execute code' dat JavaScript draait met een timeout van 100 seconden, en apps die met de SDK van Attio zijn gebouwd, kunnen eigen blokken toevoegen.",
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
    slug: "hubspot-zendesk-koppeling",
    category: "crm",
    navLabel: "HubSpot Zendesk-koppeling",
    primaryKeyword: "HubSpot Zendesk koppeling",
    title: "HubSpot Zendesk-koppeling: wat synchroniseert en je opties",
    description:
      "HubSpot Zendesk-koppeling: wat de gratis app Zendesk for HubSpot wel en niet synchroniseert, action flows, tweerichtingssync-apps en maatwerk met beide API's.",
    h1: "HubSpot Zendesk-koppeling: wat synchroniseert, wat niet en je opties",
    intro:
      "De eigen HubSpot-integratie van Zendesk is gratis en snel gekoppeld, maar stuurt ticketevents maar in één richting: van Zendesk naar de tijdlijn van een contact in HubSpot. Heb je meer nodig, dan kunnen Zendesk action flows HubSpot-records aanmaken en bijwerken, bieden Marketplace-apps tweerichtingssynchronisatie, en kan maatwerk met webhooks en beide API's precies de gegevens overzetten die jij kiest.",
    keyFacts: [
      "De integratie Zendesk Support for HubSpot werkt in één richting: ticketinformatie gaat van Zendesk naar HubSpot.",
      "Ze maakt drie Zendesk-triggers aan, voor nieuwe tickets, opgeloste tickets en CSAT-beoordelingen, plus een webhook met de naam HubSpot Integration.",
      "Tickets verschijnen alleen op de contacttijdlijn in HubSpot, niet bij bedrijven of deals, en alleen het e-mailadres van de gebruiker wordt gesynchroniseerd.",
      "Zendesk action flows hebben HubSpot-acties die contacten, bedrijven, deals en tickets aanmaken, bijwerken en opzoeken.",
      "Zendesk is op 27 oktober 2026 gestopt met het uitgeven van nieuwe API-tokens, dus maatwerkkoppelingen moeten OAuth gebruiken.",
    ],
    sections: [
      {
        heading: "Vier manieren om HubSpot en Zendesk te koppelen",
        blocks: [
          {
            type: "table",
            caption: "Koppelingsopties voor HubSpot en Zendesk (documentatie en listings van de leveranciers, gecontroleerd in november 2026)",
            head: ["Optie", "Richting", "Wat er wordt overgezet"],
            rows: [
              ["Zendesk Support for HubSpot", "Alleen van Zendesk naar HubSpot", "Gebeurtenissen voor nieuwe tickets, opgeloste tickets en CSAT-beoordelingen, verstuurd naar de contacttijdlijn"],
              ["Zendesk action flows met HubSpot-acties", "Van Zendesk naar HubSpot, stap voor stap", "Maakt contacten, bedrijven, deals en tickets aan, werkt ze bij en zoekt ze op"],
              ["Marketplace-apps", "Hangt af van de app; sommige werken in twee richtingen", "Wat de app ondersteunt, zoals contacten of deals"],
              ["Maatwerk met webhooks en beide API's", "In beide richtingen", "Precies de velden en events die jij kiest"],
            ],
          },
          {
            type: "p",
            text: "Begin bij de vraag die je team wil beantwoorden. Hoeven sales en accountmanagers in HubSpot alleen de supportgeschiedenis van een contact te zien, dan is de gratis integratie misschien genoeg. Moeten tickets HubSpot-gegevens wijzigen, zoals een bedrijfseigenschap of een dealfase, dan heb je action flows, een app of maatwerk nodig.",
          },
        ],
      },
      {
        heading: "De gratis integratie Zendesk Support for HubSpot instellen",
        blocks: [
          {
            type: "ol",
            items: [
              "Open de installatiepagina van de integratie en vul je Zendesk-subdomein in.",
              "Autoriseer de verbinding in zowel Zendesk als HubSpot.",
              "Zendesk maakt drie triggers aan, voor nieuwe tickets, opgeloste tickets en CSAT-beoordelingen, en een webhook met de naam HubSpot Integration.",
              "Pas de voorwaarden van die triggers aan als je maar een deel van de tickets in HubSpot wilt laten aankomen.",
            ],
          },
          {
            type: "p",
            text: "Zendesk documenteert een paar beperkingen. De integratie werkt in één richting, van Zendesk naar HubSpot. Alleen het e-mailadres van de gebruiker wordt gesynchroniseerd, niet de voor- of achternaam. Tickets worden alleen op de contacttijdlijn getoond, niet op bedrijfs- of dealrecords. Je kunt bepalen welke tickets worden verstuurd door de triggervoorwaarden aan te passen, maar de JSON-payload kun je niet wijzigen. Wil je de integratie uitzetten, schakel dan de drie triggers uit.",
          },
          {
            type: "note",
            text: "Test de webhook HubSpot Integration niet vanuit Admin Center. Zendesk waarschuwt dat dit ongeldige JSON kan versturen en de integratie kan verbreken. Test in plaats daarvan door een echt testticket aan te maken of op te lossen.",
          },
        ],
      },
      {
        heading: "Zendesk action flows met HubSpot-acties",
        blocks: [
          {
            type: "p",
            text: "Action flows zijn de builder van Zendesk voor automatiseringen in meerdere stappen die externe systemen bereiken. De HubSpot-connector voegt deze acties toe:",
          },
          {
            type: "ul",
            items: [
              "Contacten, bedrijven, deals en tickets aanmaken en bijwerken in HubSpot.",
              "Contacten, bedrijven, deals en tickets opzoeken, en gebruikers opzoeken.",
              "Een contact opzoeken op Contact ID of e-mailadres. Geef je beide op, dan gaat Contact ID voor.",
              "Verbinden met OAuth 2.0 vanuit 'External actions' in de zijbalk van de stap. Zendesk raadt een apart serviceaccount aan en vernieuwt tokens automatisch.",
            ],
          },
          {
            type: "p",
            text: "Action flows verbruiken action credits. Zendesk noemt 100.000 acties per maand voor Suite Professional en 225.000 voor Suite Enterprise, stuurt een e-mail bij 80% en 100% van het tegoed, en verkoopt extra tegoed in eenheden van 100.000. Admins zien het verbruik in Admin Center onder Account, daarna Usage en daarna Summary. Tegoeden en beschikbaarheid per abonnement veranderen, dus controleer ze in je eigen account voordat je op action flows gaat bouwen.",
          },
        ],
      },
      {
        heading: "Apps voor tweerichtingssynchronisatie",
        blocks: [
          {
            type: "p",
            text: "De Zendesk Marketplace vermeldt een app Data sync by HubSpot, die daar wordt omschreven als een bidirectionele, realtime synchronisatie tussen HubSpot en Zendesk. Voor de installatie is een HubSpot Super Admin nodig, of een gebruiker met App Marketplace-rechten, die het Zendesk-subdomein invult, de verbinding autoriseert en kiest wat er wordt gesynchroniseerd. Apps van derden, zoals HubSpot CRM Connect, voegen hun eigen functies toe. Marketplace-listings zijn marketingpagina's, dus controleer op het instelscherm van een app welke records en velden die echt synchroniseert voordat je erop vertrouwt.",
          },
          {
            type: "p",
            text: "De documentatie van HubSpot over data sync legt uit hoe tweerichtingssyncs records aan elkaar koppelen: standaard worden contacten gekoppeld op e-mailadres en bedrijven op naam of domein, en alleen contacten met een geldig e-mailadres worden gesynchroniseerd. Ruim dubbele contacten en ontbrekende e-mailadressen op voordat je een tweerichtingssync inschakelt, anders kopieert de sync de rommel naar beide tools.",
          },
        ],
      },
      {
        heading: "Maatwerk met webhooks en beide API's",
        blocks: [
          {
            type: "p",
            text: "Met maatwerk heb je volledige controle, bijvoorbeeld om open tickets op bedrijfsrecords in HubSpot te tonen, wat de gratis integratie niet kan. Hieronder staat een veelgebruikt patroon, beschreven in stappen. Het is geen TascaLab-casestudy.",
          },
          {
            type: "ol",
            items: [
              "Trigger: een Zendesk-trigger met de actie Notify by > Active webhook stuurt het ticket-ID en het e-mailadres van de aanvrager naar n8n of Make wanneer een ticket wordt aangemaakt of de status ervan verandert.",
              "Verifiëren: de workflow controleert de header X-Zendesk-Webhook-Signature, zodat alleen echte Zendesk-requests worden verwerkt.",
              "Opzoeken: de workflow zoekt via de CRM API het HubSpot-contact op e-mailadres op, en daarna het bedrijf waaraan het contact is gekoppeld.",
              "Bijwerken: de workflow schrijft het aantal tickets of de laatste status naar een bedrijfseigenschap, die lijsten, rapporten en workflows in HubSpot kunnen gebruiken.",
              "Fouten afhandelen: de workflow wacht en probeert opnieuw bij HTTP 429, omdat zowel Zendesk als HubSpot het aantal API-requests beperkt.",
            ],
          },
          {
            type: "p",
            text: "Voor de andere richting kan een HubSpot-workflow je endpoint aanroepen met de actie 'Send a webhook', die HubSpot vermeldt voor Data Hub Professional en Enterprise en die alleen HTTPS-URL's accepteert. Gebruik aan de kant van Zendesk OAuth in plaats van API-tokens. Sinds 27 oktober 2026 kunnen bestaande accounts in Zendesk geen nieuwe API-tokens meer aanmaken, en op 30 april 2027 stoppen alle API-tokens met werken. OAuth-clients die op of na 30 april 2026 zijn aangemaakt, krijgen access tokens die standaard na 30 minuten verlopen, dus de koppeling moet refresh tokens kunnen afhandelen.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab koppelt Zendesk en HubSpot via API's, webhooks, n8n en Make, bovenop de tools die je al gebruikt. Projecten voor Custom Automation kosten {{price:custom}}. De meeste implementaties duren 1 tot 3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Werkt de HubSpot Zendesk-koppeling in twee richtingen?",
        a: "Niet de gratis integratie Zendesk Support for HubSpot. Die werkt in één richting en stuurt ticketinformatie van Zendesk naar de contacttijdlijn in HubSpot. Voor tweerichtingssynchronisatie gebruik je een Marketplace-app zoals Data sync by HubSpot, of maatwerk.",
      },
      {
        q: "Kan ik Zendesk-tickets zien bij bedrijven of deals in HubSpot?",
        a: "Niet met de gratis integratie, die tickets alleen op de contacttijdlijn toont. Met maatwerk dat ticketgegevens via de HubSpot API naar eigenschappen van bedrijven of deals schrijft, kan het wel.",
      },
      {
        q: "Waarom werd mijn HubSpot-integratie verbroken nadat ik de webhook had getest?",
        a: "Zendesk waarschuwt dat het testen van de webhook HubSpot Integration vanuit Admin Center ongeldige JSON kan versturen en de integratie kan verbreken. Test in plaats daarvan met een echt ticket.",
      },
      {
        q: "Kan ik nog een Zendesk API-token gebruiken voor een HubSpot-koppeling?",
        a: "Alleen een token dat je al hebt. Zendesk is op 27 oktober 2026 gestopt met het uitgeven van nieuwe API-tokens, deactiveert tokens die 30 dagen niet worden gebruikt en schakelt op 30 april 2027 alle API-tokens uit. Gebruik OAuth voor nieuwe koppelingen.",
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
    slug: "ai-leadscoring",
    category: "crm",
    navLabel: "AI-leadscoring",
    primaryKeyword: "AI leadscoring",
    title: "AI-leadscoring: ICP-fit, HubSpot en Attio instellen",
    description:
      "AI-leadscoring uitgelegd: leads scoren op je ideale klantprofiel, de lead scoring tool en limieten van HubSpot, en scores via de API naar Attio schrijven.",
    h1: "AI-leadscoring: zo werkt scoren op je ICP",
    intro:
      "Leadscoring maakt van losse leads een gerangschikte lijst door elke lead punten te geven voor hoe goed hij past bij je ideale klantprofiel (ICP) en hoe hij zich gedraagt. AI komt op twee manieren binnen: native scoring in het platform, zoals de AI-leadscores van HubSpot, en externe classificatie, waarbij een model een reactie of een verrijkingsrecord leest, een fit-score berekent en die via de API terugschrijft naar je CRM.",
    keyFacts: [
      "De lead scoring tool van HubSpot vereist Marketing Hub of Sales Hub Professional of Enterprise; AI-gebouwde contactscores vereisen Marketing Hub Enterprise.",
      "De AI-leadscores van HubSpot hebben een minimale steekproef van 50 contacten nodig — 25 geconverteerd en 25 niet-geconverteerd — voordat een score kan worden gegenereerd.",
      "Attio heeft geen aparte scoringtool: op Pro, Enterprise en Ultra kan een formula-attribuut automatisch punten optellen; op andere abonnementen vult een workflow of de API een number-attribuut.",
      "Number-attributen in Attio slaan floating-point-getallen op met maximaal vier decimalen — genoeg voor een fit-score van 0–100.",
      "Een externe score schrijf je naar HubSpot met een PATCH naar /crm/v3/objects/contacts/{contactId}, en naar Attio met een PATCH naar /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "Wat AI-leadscoring betekent",
        blocks: [
          {
            type: "p",
            text: "Scoringmodellen combineren meestal twee soorten signalen. Engagementsignalen meten wat een lead doet: opens, kliks, reacties, paginabezoeken, geboekte meetings. Fit-signalen meten wie de lead is, vergeleken met je ideale klantprofiel: branche, bedrijfsgrootte, land, rol, gebruikte tools. Een fit-score beantwoordt \"willen wij deze lead?\", een engagementscore beantwoordt \"wil deze lead ons?\".",
          },
          {
            type: "p",
            text: "AI duikt op twee plekken op. CRM's leveren native machine-learning-scores die leren van je historische conversies, zoals de AI-gebouwde leadscores van HubSpot. En teams draaien hun eigen classificatie buiten het CRM: een taalmodel leest een outreach-reactie of een verrijkingsrecord, labelt die (geïnteresseerd, nu niet, verkeerde persoon) of beoordeelt de ICP-fit, en het resultaat wordt via de API in een CRM-veld geschreven. Het tweede patroon werkt met elk CRM met een API, en daar richt deze pagina zich op.",
          },
        ],
      },
      {
        heading: "Leadscoring binnen HubSpot",
        blocks: [
          {
            type: "p",
            text: "De huidige scoring van HubSpot zit in de 'lead scoring tool'. Die is beschikbaar met Marketing Hub of Sales Hub Professional of Enterprise. Marketing Hub scoort contacten, beide hubs scoren bedrijven en Sales Hub scoort deals. Je bouwt engagementscores, fit-scores op basis van propertywaarden en gecombineerde scores, elk uit groepen gewogen criteria met plus- en minpunten.",
          },
          {
            type: "ul",
            items: [
              "Het standaardmaximum voor een score is 100 punten; de scorelimiet kan worden ingesteld op ±100, ±200, ±300, ±400, ±500, ±1.000 of ±10.000.",
              "Scoreverval kan engagementpunten in de loop van de tijd verlagen, met intervallen van elke 1, 3, 6 of 12 maanden, waarbij elke maand als 30 dagen telt.",
              "Drempels verdelen een score in de banden High, Medium en Low; gecombineerde scores gebruiken een A1–C3-matrix van fit en engagement.",
              "AI-gebouwde contactscores (Marketing Hub Enterprise) leren van contacten die tussen twee lifecyclefases zijn verschoven en hebben minstens 50 contacten nodig — 25 geconverteerd en 25 niet-geconverteerd.",
            ],
          },
          {
            type: "note",
            text: "De tool maakt eigen score-properties aan en die zijn gekoppeld aan de score: verwijder je de score, dan verdwijnen de properties mee, en van buitenaf zijn ze niet te bewerken. Een extern berekende AI-score hoort daarom in een eigen custom number-property, niet in een door de tool beheerde score-property.",
          },
        ],
      },
      {
        heading: "Scoren in Attio",
        blocks: [
          {
            type: "p",
            text: "Attio pakt het anders aan: er is geen aparte scoringtool en geen score-veldtype. Op de abonnementen Pro, Enterprise en Ultra kan een formula-attribuut met if()-voorwaarden een puntenscore berekenen uit de eigen velden van een record; een formule die een getal teruggeeft, wordt een number-attribuut, wordt automatisch opnieuw berekend zodra de velden die ze gebruikt veranderen, en verbruikt geen workspace-credits. Anders is een score gewoon een attribuut dat je vult: Attio's eigen workflowtemplate 'MQL Scoring' scoort leads met workflowblokken, en de automations-pagina noemt een \"Scoring Agent\" onder de AI-agents die binnen workflows draaien — een agent-stap met instructies, geen apart scoringproduct. Drie attribuuttypen passen bij een score die je zelf vult:",
          },
          {
            type: "ul",
            items: [
              "Een number-attribuut slaat floating-point-getallen op met maximaal vier decimalen en is te filteren met vergelijkingen zoals groter-dan-of-gelijk — een natuurlijke plek voor een fit-score van 0–100.",
              "Een select-attribuut bevat vooraf gedefinieerde opties, handig voor banden zoals A, B en C. Een waarde schrijven waarvan de optie niet bestaat, geeft een foutmelding in plaats van dat de optie wordt aangemaakt.",
              "Een rating-attribuut is een numerieke waarde van 0 tot 5, weergegeven als sterren.",
            ],
          },
          {
            type: "p",
            text: "Workflows zijn beschikbaar op alle Attio-abonnementen. Een workflow kan starten vanuit een recordwijziging, een schema of een 'Webhook received'-trigger, dus een externe scorer kan er direct een starten; een 'Custom agent'-blok kan een AI-stap met gestructureerde output draaien, gevolgd door een update-record-blok dat het resultaat opslaat. Uitgaande webhooks worden ondertekend met een HMAC-SHA256 van de body in de header Attio-Signature, zodat je scorer ook veilig op Attio-events kan reageren.",
          },
        ],
      },
      {
        heading: "Een externe AI-score naar je CRM schrijven",
        blocks: [
          {
            type: "table",
            caption: "Een score schrijven via de API (leveranciersdocumentatie, gecontroleerd november 2026)",
            head: ["Stap", "HubSpot", "Attio"],
            rows: [
              [
                "Het veld aanmaken",
                "POST /crm/v3/properties/{objectType} met groupName, name, label, type \"number\", fieldType \"number\"",
                "Maak een number- of select-attribuut op het object aan in de workspace-instellingen of via de attributes-API",
              ],
              [
                "Eén record schrijven",
                "PATCH /crm/v3/objects/contacts/{contactId} met {\"properties\": {...}}; een e-mailadres kan met idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} met de attribuutslug in de body",
              ],
              [
                "In bulk schrijven",
                "POST /crm/v3/objects/contacts/batch/update, of batch/upsert om aan te maken of bij te werken",
                "Eén request per record, binnen de rate limits van de API",
              ],
              [
                "Auth",
                "Private-app-accesstoken als Bearer-token",
                "Workspace-API-key of OAuth 2.0, als Bearer-token; records bijwerken vereist de scopes record_permission:read-write en object_configuration:read",
              ],
            ],
          },
          {
            type: "p",
            text: "Een typische pipeline, beschreven als stappen — het laat zien hoe de onderdelen samenwerken, geen TascaLab-casestudy:",
          },
          {
            type: "ol",
            items: [
              "Verzamelen: een nieuwe lead komt binnen via een formulier, een outreach-reactie of een bezoekersidentificatietool.",
              "Classificeren: een AI-model labelt de reactie of de lead (geïnteresseerd, niet geïnteresseerd, verkeerde persoon, buiten de markt).",
              "Scoren: de firmografische gegevens van de lead worden vergeleken met je ICP en er wordt een fit-score berekend.",
              "Schrijven: de score belandt in een custom number-property in HubSpot of een number-attribuut in Attio, via de endpoints hierboven.",
              "Alerteren: een CRM-workflow of een Slack-bericht waarschuwt de owner zodra een lead de drempel passeert.",
            ],
          },
        ],
      },
      {
        heading: "Waar de reacties vandaan komen: lemlist",
        blocks: [
          {
            type: "p",
            text: "Outreach-reacties zijn een van de sterkste scoringsignalen, en lemlist stelt ze op twee manieren beschikbaar. Webhooks sturen realtime POST-callbacks voor events zoals emailsReplied, linkedinReplied en whatsappReplied, plus leadstatussen zoals interested en notInterested; een workspace kan maximaal 200 webhooks bevatten en elke target-URL moet uniek zijn — registreer een URL zonder eventtype om elk event te ontvangen en filter aan jouw kant. De activities-API (GET /activities) haalt dezelfde historie op, gefilterd op type, campagne en datum, voor polling in plaats van pushen. Authenticatie is HTTP Basic met een lege gebruikersnaam en de API-key als wachtwoord — geen Bearer-token.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt precies deze pipeline: leads uit één bron, door AI geclassificeerd en gescoord op je ICP en vastgelegd in je CRM, als het pakket Lead Capture & Scoring ({{price:leadScoring}} eenmalig). Outreach-, bel- of verrijkingstools koppelen aan HubSpot of Attio is het pakket CRM Integration ({{price:crmIntegration}} eenmalig). De meeste implementaties duren 1–3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is AI-leadscoring?",
        a: "Leads rangschikken door engagementsignalen (wat een lead doet) te combineren met fit-signalen (hoe goed hij past bij je ideale klantprofiel), met AI ingebouwd in het CRM — zoals de AI-leadscores van HubSpot — of daarbuiten, waar een model reacties classificeert en een fit-score berekent die via de API wordt teruggeschreven.",
      },
      {
        q: "Wat vereist de lead scoring tool van HubSpot?",
        a: "Marketing Hub of Sales Hub Professional of Enterprise. AI-gebouwde contactscores vereisen Marketing Hub Enterprise en minstens 50 contacten — 25 geconverteerd en 25 niet-geconverteerd — om een score te genereren.",
      },
      {
        q: "Heeft Attio ingebouwde leadscoring?",
        a: "Geen aparte scoringtool en geen score-veldtype. Op Pro, Enterprise en Ultra kan een formula-attribuut automatisch een puntenscore berekenen; anders leven scores in number- of select-attributen, gevuld door workflows — inclusief AI-agent-stappen, die Attio als Scoring Agent in de markt zet — of door een externe tool via de API.",
      },
      {
        q: "Hoe schrijf ik van buitenaf een score naar HubSpot of Attio?",
        a: "HubSpot: maak een custom number-property aan en doe daarna een PATCH naar /crm/v3/objects/contacts/{contactId}, of gebruik de batch-update- en upsert-endpoints. Attio: PATCH naar /v2/objects/{object}/records/{record_id} met een Bearer-token met de scopes record_permission:read-write en object_configuration:read.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Help — Formula attributes", url: "https://attio.com/help/reference/managing-your-data/attributes/formula-attributes" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-13",
  },
  {
    key: "website-visitor-identification",
    slug: "websitebezoekers-identificeren",
    category: "crm",
    navLabel: "Bezoekersidentificatie",
    primaryKeyword: "websitebezoekers identificeren",
    title: "Websitebezoekers identificeren: werking en grenzen",
    description:
      "Zo werkt websitebezoekersidentificatie: reverse IP-lookup en trackers, wat het wel en niet ziet, AVG- en cookieregels, en HubSpot buyer intent.",
    h1: "Websitebezoekers identificeren: zo werkt het en dit zijn de grenzen",
    intro:
      "Tools voor bezoekersidentificatie koppelen het anonieme verkeer op je website aan bedrijven, met een trackingscript, reverse IP-lookup en bedrijvendatabases. Ze identificeren bedrijven, geen personen, hun dekking hangt af van de netwerken waarvandaan je bezoekers surfen, en in de EU vallen ze volop onder de AVG en de cookieregels.",
    keyFacts: [
      "Identificatie combineert een trackingscript, trackingcookies, reverse IP-lookup, eigen databases en machine learning — bezoeken worden gekoppeld aan bedrijven, niet aan individuele personen.",
      "Leadfeeder van Dealfront weigert expliciet een typisch identificatiepercentage te publiceren: de dekking verschilt per doelgroep, en bezoeken via consumentenproviders worden weggefilterd en niet getoond.",
      "Thuiswerkers zijn vooral identificeerbaar wanneer ze via een bedrijfs-VPN surfen.",
      "Het HvJ-EU oordeelde in Breyer (C-582/14) dat een dynamisch IP-adres persoonsgegevens kan zijn voor een websitebeheerder, en overweging 30 van de AVG noemt IP-adressen als online identificatoren.",
      "HubSpot buyer intent koppelt bezoeken aan de IP-adressen van bekende bedrijven; meer dan 20 bedrijven per weergave bekijken vereist HubSpot Credits en een betaald abonnement.",
    ],
    sections: [
      {
        heading: "Hoe bedrijven worden geïdentificeerd",
        blocks: [
          {
            type: "p",
            text: "Het mechanisme, zoals het helpcentrum van Dealfronts Leadfeeder het voor de eigen tracker beschrijft: een script op je site registreert elk bezoek, en identificatie combineert trackingcookies, reverse IP-lookup, eigen databases, analyticsgegevens en machine learning. Een bedrijf bezit meestal zijn domein en de IP-range van kantoor, dus een bezoek vanaf dat netwerk is aan het bedrijf te koppelen. IP-geolocatie voegt de regio van de bezoeker toe.",
          },
          {
            type: "p",
            text: "Verkeer dat niet aan een bedrijf te koppelen is, blijft buiten beeld: Leadfeeder zegt dat het bezoeken via consumentenproviders niet in rekening brengt — en zelfs niet toont. Wat je ziet is het geïdentificeerde deel van je verkeer, niet alles.",
          },
        ],
      },
      {
        heading: "Wat het niet kan zien",
        blocks: [
          {
            type: "ul",
            items: [
              "Individuele personen. Leadfeeder stelt dat je niet precies kunt weten wie er op bezoek was zonder dat de bezoeker zichzelf bekendmaakt via een formulier of registratie, en dat het identificeren van individuele bezoekers in veel landen als illegaal geldt.",
              "Het meeste thuisverkeer. Thuiswerkers zijn vooral identificeerbaar wanneer ze via een bedrijfs-VPN surfen; op een consumentenverbinding verschijnen ze als providerverkeer en worden ze weggefilterd.",
              "Een gegarandeerd percentage. Het helpcentrum van Leadfeeder zegt zelf dat er geen eerlijke manier is om een identificatiepercentage te beloven, omdat het per doelgroep verschilt — en waarschuwt dat diensten die een vast percentage beloven waarschijnlijk extrapoleren vanuit een paar accounts.",
            ],
          },
        ],
      },
      {
        heading: "AVG en cookietoestemming",
        blocks: [
          {
            type: "p",
            text: "In de EU gelden twee aparte regels. Ten eerste kunnen IP-adressen persoonsgegevens zijn: artikel 4, lid 1 van de AVG rekent online identificatoren tot persoonsgegevens, overweging 30 noemt daarbij internetprotocoladressen en cookie-identificatoren, en het Hof van Justitie oordeelde in Breyer (C-582/14, gewezen onder de voorloper van de AVG) dat een dynamisch IP-adres persoonsgegevens vormt voor een websitebeheerder die over wettige middelen beschikt om het via de accessprovider aan de bezoeker te koppelen.",
          },
          {
            type: "p",
            text: "Ten tweede vereist artikel 5, lid 3 van de ePrivacyrichtlijn toestemming voor het opslaan van informatie op, of het uitlezen van informatie van, het apparaat van een bezoeker — met beperkte uitzonderingen voor wat strikt noodzakelijk is om de dienst te leveren waar de bezoeker om vroeg. Een bezoekersidentificatietracker die cookies plaatst of uitleest valt onder die regel, ongeacht of de gegevens als persoonsgegevens tellen — daarom horen deze tools in de EU achter een cookiebanner.",
          },
          {
            type: "note",
            text: "Dit beschrijft de regels op hoofdlijnen. Het is geen juridisch advies; hoe ze op jouw situatie van toepassing zijn, hangt af van je tools en je rechtsgrond.",
          },
        ],
      },
      {
        heading: "Bezoekersidentificatie in HubSpot",
        blocks: [
          {
            type: "p",
            text: "De huidige functie hiervoor in HubSpot is buyer intent. De HubSpot-trackingcode op je site verzamelt bezoekersgegevens, zoals websiteactiviteit en IP-adressen, en buyer intent koppelt anonieme webbezoekers aan de IP-adressen van bekende bedrijven. Wat HubSpot documenteert, per oktober 2026:",
          },
          {
            type: "ul",
            items: [
              "De functie staat genoteerd voor Starter-, Professional- en Enterprise-abonnementen, met HubSpot Credits vereist voor bepaalde functies.",
              "Meer dan 20 bedrijven per weergave bekijken vereist HubSpot Credits en een betaald abonnement; bedrijven toevoegen en hun intentsignalen volgen kosten allebei credits, filters en uitsluitingen niet.",
              "Filters op bezoekperiode beslaan hooguit de laatste 90 dagen, en bedrijven die via buyer intent worden toegevoegd krijgen de recordbron \"Buyer-Intent\".",
              "HubSpots eigen artikel merkt op dat naleving van gegevensbeschermingswetgeving een cookiebanner op je site kan vereisen.",
            ],
          },
        ],
      },
      {
        heading: "Van geïdentificeerd bedrijf naar gescoorde lead",
        blocks: [
          {
            type: "p",
            text: "Identificatie op zich levert alleen een lijst op. De waarde zit in wat er daarna gebeurt — een gangbaar patroon, beschreven als stappen; het laat zien hoe de onderdelen samenwerken, geen TascaLab-casestudy:",
          },
          {
            type: "ol",
            items: [
              "Identificeren: de tracker meldt welke bedrijven op bezoek waren en wat ze hebben bekeken.",
              "Verrijken: elk bedrijf wordt opgezocht op grootte, branche en land.",
              "Scoren: het bedrijf wordt vergeleken met je ideale klantprofiel en krijgt een fit-score.",
              "Vastleggen: het bedrijf en zijn score belanden in je CRM — een HubSpot-bedrijfsrecord of een Attio-record.",
              "Samenvatten: een geplande samenvatting, gerangschikt op score, gaat naar e-mail of Slack zodat sales de beste accounts als eerste ziet.",
            ],
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt dit als het pakket Lead Capture & Scoring ({{price:leadScoring}} eenmalig): leads uit één bron — websitebezoekers, een formulier of outreach-reacties — door AI geclassificeerd en gescoord en vastgelegd in je CRM, met meldingen via e-mail of Slack. De omliggende tools koppelen aan HubSpot of Attio is het pakket CRM Integration ({{price:crmIntegration}} eenmalig). De meeste implementaties duren 1–3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan bezoekersidentificatie zien wie mijn website bezocht?",
        a: "Het identificeert bedrijven, via hun netwerk — geen personen. Leveranciers stellen dat je pas precies weet wie er was wanneer de bezoeker zichzelf bekendmaakt via een formulier of registratie, en dat het identificeren van individuen in veel landen als illegaal geldt.",
      },
      {
        q: "Welk deel van de bezoekers is te identificeren?",
        a: "Er bestaat geen eerlijk vast percentage. Het helpcentrum van Leadfeeder weigert er een te publiceren, omdat de dekking per doelgroep verschilt; verkeer via consumentenproviders wordt volledig weggefilterd, en thuiswerkers zijn vooral identificeerbaar via een bedrijfs-VPN.",
      },
      {
        q: "Is IP-gebaseerde bezoekersidentificatie legaal onder de AVG?",
        a: "IP-adressen kunnen persoonsgegevens zijn (Breyer, C-582/14; overweging 30 van de AVG), en trackers die cookies plaatsen of uitlezen hebben toestemming nodig onder artikel 5, lid 3 van de ePrivacyrichtlijn — daarom horen deze tools in de EU achter een cookiebanner. Dit is geen juridisch advies.",
      },
      {
        q: "Wat vereist HubSpot buyer intent?",
        a: "De HubSpot-trackingcode op je site en een Starter-, Professional- of Enterprise-abonnement. Meer dan 20 bedrijven per weergave bekijken vereist HubSpot Credits, bedrijven toevoegen en intentsignalen volgen kosten credits, en bezoekfilters beslaan hooguit de laatste 90 dagen.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
