import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "wat-is-klantenservice-automatisering",
    category: "basics",
    navLabel: "Wat is supportautomatisering",
    primaryKeyword: "wat is klantenservice-automatisering",
    title: "Wat is klantenservice-automatisering? Een heldere uitleg",
    description:
      "Klantenservice-automatisering: bots, routing, macro's, automatische antwoorden, SLA-timers, rapporten, wat menselijk blijft en hoe het in je helpdesk past.",
    h1: "Wat is klantenservice-automatisering?",
    intro:
      "Klantenservice-automatisering is het inzetten van regels, bots en integraties om repetitief supportwerk af te handelen, zoals veelgestelde vragen beantwoorden, tickets sorteren, ontvangstbevestigingen sturen en deadlines bewaken, zonder dat een agent elke stap met de hand doet. Het meeste draait binnen de helpdesk die je al gebruikt, uitgebreid met API's en webhooks. Het doel is je agents meer tijd te geven voor de gesprekken waarvoor beoordelingsvermogen nodig is.",
    keyFacts: [
      "Zendesk-triggers draaien direct nadat een ticket is aangemaakt of bijgewerkt; Zendesk-automatiseringen zijn tijdgebonden en draaien eens per uur.",
      "Zendesk-macro's hebben geen voorwaarden: een agent bepaalt wanneer hij er een toepast.",
      "Zendesk, Freshdesk en Jira-automatisering kunnen allemaal vanuit hun regels HTTP-requests naar andere systemen sturen.",
      "Volgens de richtlijnen van Zendesk kunnen complexe, urgente of gevoelige vragen een overdracht aan een menselijke agent nodig hebben.",
    ],
    sections: [
      {
        heading: "Klantenservice-automatisering, gedefinieerd",
        blocks: [
          {
            type: "p",
            text: "Elke supportautomatisering bestaat uit dezelfde drie onderdelen: iets wat haar start (een gebeurtenis zoals een nieuw ticket, of verstreken tijd), voorwaarden die bepalen of ze van toepassing is, en acties die ze uitvoert. Helpdesks maken dit model direct zichtbaar. Zendesk noemt dit bedrijfsregels: triggers draaien direct nadat een ticket is aangemaakt of bijgewerkt, terwijl automatiseringen tijdgebonden zijn en eens per uur draaien op tickets die niet gesloten zijn. Zendesk wijst erop dat het verschil tussen de twee niet zit in welke acties ze kunnen uitvoeren, maar in welke voorwaarden ze in gang zetten.",
          },
          {
            type: "p",
            text: "Automatisering bestaat op een spectrum. Aan de ene kant werkt ze voordat een mens het ticket ziet: een bot beantwoordt de vraag, of een regel stelt de prioriteit in en wijst een groep toe. Aan de andere kant ondersteunt ze de agent: een opgeslagen antwoord vult een veelgegeven antwoord in, of een zijbalk haalt de bestelling van de klant op uit een ander systeem. Beide tellen mee, en de meeste teams hebben beide nodig.",
          },
        ],
      },
      {
        heading: "De belangrijkste typen supportautomatisering",
        blocks: [
          {
            type: "table",
            caption: "Veelvoorkomende typen klantenservice-automatisering",
            head: ["Type", "Wat het doet", "Voorbeeld in een helpdesk"],
            rows: [
              [
                "Selfservice en bots",
                "Beantwoordt veelgestelde vragen in chat, messaging of e-mail zonder agent",
                "AI-agents van Zendesk beantwoorden vragen met content uit je kennisbronnen en kunnen escaleren naar een mens",
              ],
              [
                "Routing en triage",
                "Classificeert nieuwe tickets en stuurt ze naar de juiste groep of agent",
                "Zendesk-triggers kunnen skills aan tickets toevoegen wanneer ze worden aangemaakt of bijgewerkt; omnichannel routing wijst werk toe op basis van beschikbaarheid en capaciteit van agents",
              ],
              [
                "Macro's en standaardantwoorden",
                "Past een opgeslagen antwoord en ticketupdates toe in één actie",
                "Een Zendesk-macro kan opmerkingstekst toevoegen, velden bijwerken, tags toevoegen of verwijderen en de toegewezen agent wijzigen",
              ],
              [
                "Automatische antwoorden",
                "Bevestigt direct de ontvangst en schept verwachtingen",
                "Een gebeurtenisgestuurde trigger die de aanvrager een ontvangstbevestiging mailt wanneer een ticket wordt aangemaakt",
              ],
              [
                "SLA-timers en escalaties",
                "Bewaakt deadlines voor reactie en oplossing en waarschuwt vóór een overschrijding",
                "Een SLA-beleid plus een tijdgebonden regel die een teamleider waarschuwt voordat een doel wordt gemist",
              ],
              [
                "Rapportage",
                "Verzamelt supportmetrics en levert ze volgens schema",
                "Een wekelijkse samenvatting van ticketvolume, eerste reactietijd en CSAT, verstuurd per e-mail of naar Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Macro's zijn een nuttig grensgeval. Zendesk merkt op dat macro's geen voorwaarden hebben: niets beoordeelt een ticket om te bepalen of een macro van toepassing is, dus een agent kiest hem. Daarom zijn opgeslagen antwoorden de plek met het laagste risico om te beginnen, omdat er elke keer nog een mens beslist.",
          },
          {
            type: "p",
            text: "Routing is vaak waar automatisering zich het eerst terugbetaalt, omdat het elk ticket raakt. De intelligente triage van Zendesk classificeert nieuwe tickets bijvoorbeeld op onderwerp, sentiment en taal, en kan ze routeren via omnichannel routing, skills-based routing of triggers. Eenvoudigere opzetten gebruiken regels op trefwoorden of formuliervelden om de groep en prioriteit in te stellen.",
          },
        ],
      },
      {
        heading: "Wat menselijk moet blijven",
        blocks: [
          {
            type: "p",
            text: "Automatisering is goed in herhaalbaar, duidelijk afgebakend werk. Ze is slecht in beoordelingsvermogen, empathie en uitzonderingen. De richtlijn van Zendesk voor AI-agents is dat een vraag soms naar een menselijke agent moet worden overgedragen wanneer ze complex, urgent of gevoelig is, en Zendesk raadt aan die escalatiepaden vóór de lancering vast te leggen. Laat in de praktijk deze zaken bij mensen:",
          },
          {
            type: "ul",
            items: [
              "Klachten, opzeggingen en emotioneel geladen gesprekken",
              "Factuurgeschillen, terugbetalingen buiten het beleid en andere uitzonderingen waarvoor iemand met beslissingsbevoegdheid nodig is",
              "Accountbeveiliging en identiteitscontroles waarbij een fout duur uitvalt",
              "Vragen die de bot niet kan classificeren, of al niet heeft kunnen beantwoorden",
              "Waardevolle accounts of accounts met risico die je bewust persoonlijk wilt afhandelen",
            ],
          },
          {
            type: "p",
            text: "Wat je ook automatiseert, zorg voor een zichtbare manier om een mens te bereiken en geef de gespreksgeschiedenis door, zodat de klant zich niet hoeft te herhalen. Onze gids over de overdracht van chatbot naar mens legt uit hoe je dat doet.",
          },
        ],
      },
      {
        heading: "Hoe automatisering op je helpdesk aansluit",
        blocks: [
          {
            type: "p",
            text: "Je hoeft je helpdesk zelden te vervangen om hem te automatiseren. Moderne helpdesks kunnen vanuit hun regels andere systemen aanroepen, en andere systemen kunnen via de helpdesk-API tickets bijwerken. Zo worden maatwerkautomatiseringen gebouwd:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: je maakt een webhook aan in Admin Center en koppelt die vervolgens aan een trigger of automatisering met de actie Notify webhook. De request body kan JSON, XML of form-encoded zijn, en placeholders voegen ticketgegevens in.",
              "Freshdesk: automatiseringsregels die draaien bij het aanmaken of bijwerken van tickets kunnen de actie Trigger webhook gebruiken met GET, POST, PUT, PATCH of DELETE en placeholders zoals {{ticket.id}}. Mislukte webhooks worden elke 30 minuten opnieuw geprobeerd, tot maximaal 48 calls.",
              "Jira: de automatiseringsactie Send web request roept een ander systeem aan wanneer een regel draait, en kan op de response wachten zodat latere stappen de teruggegeven gegevens kunnen gebruiken.",
            ],
          },
          {
            type: "p",
            text: "Een typische maatwerkflow ziet er zo uit:",
          },
          {
            type: "ol",
            items: [
              "Een helpdeskregel gaat af op een nieuw of bijgewerkt ticket en verstuurt een webhook.",
              "Een workflowtool zoals Make of n8n, of een kleine service, ontvangt die en zoekt elders gegevens op: in een ordersysteem, een CRM of een taalmodel.",
              "De workflow schrijft het resultaat via de helpdesk-API terug als tag, veldwaarde, interne notitie of toewijzing.",
              "Agents zien het resultaat in het ticket, en de eigen regels van de helpdesk nemen het vanaf daar over.",
            ],
          },
        ],
      },
      {
        heading: "Waar je begint",
        blocks: [
          {
            type: "ol",
            items: [
              "Maak een lijst van je meest voorkomende verzoektypen van de afgelopen maand en markeer de verzoeken die elke keer dezelfde stappen volgen.",
              "Pak eerst routing en automatische antwoorden aan. Die raken elk ticket en zijn makkelijk te controleren.",
              "Maak van herhaalde antwoorden macro's of standaardantwoorden voordat je ze in een bot zet.",
              "Voeg een bot toe voor de meest voorkomende vragen met een laag risico, met een duidelijke overdracht naar een mens.",
              "Meet de eerste reactietijd, de oplossingstijd en CSAT vóór en na elke wijziging, zodat je weet wat echt heeft geholpen.",
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab is een eenmanspraktijk van Roman Zakharenko die supportautomatisering bouwt bovenop de tools die je al gebruikt, waaronder Zendesk, Freshdesk, Jira en Slack, met API's, webhooks en Make of n8n. Eenmalige prijzen zijn onder meer Ticket Routing & Categorization (600–950 USD), een Starter Chat Bot (350–450 USD) en Automated Reports (500–900 USD). De meeste implementaties duren 1–3 weken en worden geleverd met basisdocumentatie, 30 dagen ondersteuning na livegang en zonder verborgen kosten. Je kunt beginnen met een gratis auditgesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is klantenservice-automatisering hetzelfde als een chatbot?",
        a: "Nee. Een chatbot is één type. Routingregels, macro's, automatische antwoorden, SLA-timers en geplande rapporten zijn ook supportautomatisering, en veel teams beginnen daarmee omdat ze op elk ticket van toepassing zijn.",
      },
      {
        q: "Wat is het verschil tussen een trigger en een automatisering in Zendesk?",
        a: "Triggers zijn gebeurtenisgestuurd en draaien direct nadat een ticket is aangemaakt of bijgewerkt. Automatiseringen zijn tijdgebonden en draaien eens per uur, dus ze passen bij acties zoals een herinnering na een vast aantal uren.",
      },
      {
        q: "Moet ik overstappen naar een andere helpdesk om support te automatiseren?",
        a: "Meestal niet. Zendesk, Freshdesk en Jira-automatisering kunnen allemaal vanuit hun regels uitgaande HTTP-requests versturen, dus je kunt andere systemen koppelen aan de helpdesk die je al gebruikt.",
      },
      {
        q: "Wat moet je in de klantenservice niet automatiseren?",
        a: "Complexe, urgente of gevoelige gesprekken, die volgens de richtlijnen van Zendesk een menselijke agent nodig kunnen hebben, plus geschillen en uitzonderingen op het beleid waarover iemand met beslissingsbevoegdheid moet beslissen.",
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
