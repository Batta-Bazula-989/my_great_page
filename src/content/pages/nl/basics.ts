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

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "chatbot-overdracht-naar-medewerker",
    category: "basics",
    navLabel: "Overdracht chatbot naar medewerker",
    primaryKeyword: "chatbot overdracht naar medewerker",
    title: "Chatbot-overdracht naar medewerker: triggers, context, opzet",
    description:
      "Chatbot-overdracht naar medewerker: wanneer escaleren, welke context doorgeven, opvang buiten kantooruren, en hoe Zendesk, Freshdesk en Messenger het doen.",
    h1: "Chatbot-overdracht naar medewerker: escaleren zonder de klant te verliezen",
    intro:
      "Een overdracht van chatbot naar medewerker is het moment waarop een bot stopt met het afhandelen van een gesprek en het, met de geschiedenis en alle verzamelde gegevens, doorzet naar een menselijke agent of wachtrij. Een goede overdracht gebeurt op het juiste moment, neemt de context mee zodat de klant zich niet hoeft te herhalen, en werkt ook als er niemand online is. Deze gids behandelt de triggers, de context die je doorgeeft en hoe Zendesk, Freshdesk en Messenger het implementeren.",
    keyFacts: [
      "Volgens Zendesk moet een AI-agent een vraag mogelijk overdragen aan een mens wanneer die complex, urgent of gevoelig is.",
      "Freshdesk AI Agents kunnen automatisch overdragen wanneer een klant triggerzinnen gebruikt die jij definieert, zoals vragen naar een agent.",
      "Als in Dialogflow CX geen enkele intent de classificatiedrempel haalt, wordt een no-match-event geactiveerd in plaats van een match.",
      "Op Messenger bepaalt het handover protocol welke app eigenaar is van een gespreksthread; Meta is voor Instagram overgestapt op Conversation Routing.",
    ],
    sections: [
      {
        heading: "Wat een overdracht van chatbot naar mens is",
        blocks: [
          {
            type: "p",
            text: "Een overdracht, ook wel escalatie of transfer genoemd, verplaatst het eigenaarschap van een gesprek van de automatisering naar een persoon. Afhankelijk van het kanaal is het resultaat een livechat die aan een agent is toegewezen, een gesprek dat in een wachtrij staat, of een ticket dat een agent later oppakt. Bij de AI-agents van Zendesk bouw je dit met escalatieblokken in de dialoogbuilder, die bepalen hoe een vraag naar een mens gaat wanneer de AI-agent die niet kan oplossen.",
          },
          {
            type: "p",
            text: "Overdrachten zijn er in twee vormen. Bij een synchrone overdracht blijft de klant in hetzelfde livegesprek en sluit er een agent aan. Bij een asynchrone overdracht wordt een ticket aangemaakt zodat een agent later kan antwoorden; dat is de gebruikelijke terugvaloptie als er niemand beschikbaar is. Zendesk documenteert beide, inclusief een workflow voor asynchrone ticketescalaties waarmee klanten een bericht kunnen achterlaten wanneer je team niet beschikbaar is.",
          },
        ],
      },
      {
        heading: "Wanneer de bot moet overdragen",
        blocks: [
          {
            type: "table",
            caption: "Veelvoorkomende triggers voor een chatbotoverdracht",
            head: ["Trigger", "Hoe het eruitziet", "Hoe het wordt herkend"],
            rows: [
              [
                "Klant vraagt om een mens",
                "Agent, ik wil een mens spreken, dit helpt niet",
                "Freshdesk AI Agents dragen automatisch over bij triggerzinnen die je opgeeft, zoals een verzoek om een agent te spreken",
              ],
              [
                "Lage zekerheid of geen match",
                "De bot kan niet bepalen wat de klant wil",
                "Dialogflow CX activeert een no-match-event wanneer geen enkele intent de classificatiedrempel haalt; gebruik die fallback om een mens aan te bieden",
              ],
              [
                "Gevoelig of urgent onderwerp",
                "Klachten, mislukte betalingen, beveiliging, juridische of veiligheidskwesties",
                "Zendesk noemt complexe, urgente of gevoelige vragen als redenen om over te dragen; de voorbeeldtriggerzinnen van Freshdesk omvatten een melding van een mislukte betaling",
              ],
              [
                "Herhaald falen",
                "De klant herformuleert dezelfde vraag of de bot draait in een lus",
                "Tel de fallback-antwoorden in de sessie en escaleer na een vast aantal",
              ],
              [
                "Bedrijfsregel",
                "VIP-account, hoge orderwaarde, lopend incident",
                "Zoek klantgegevens via een API op voordat de bot antwoordt en stuur die klanten direct naar een mens",
              ],
            ],
          },
          {
            type: "p",
            text: "Zekerheid (confidence) is de trigger die teams het vaakst impliciet laten. In Dialogflow CX wordt de intent met de hoogste score alleen als match teruggegeven als de confidence score groter dan of gelijk aan de classificatiedrempel is; anders wordt een no-match-event aangeroepen. Behandel dat event als signaal: stel één verduidelijkende vraag en draag over als het opnieuw gebeurt.",
          },
          {
            type: "p",
            text: "Zendesk adviseert ook om escalatie alleen aan te bieden wanneer de AI-agent de klant niet naar selfservicebronnen kan leiden. Zo houd je agents vrij voor echte problemen, maar verberg de optie niet. Een klant die expliciet om een mens vraagt, moet er een krijgen, of een duidelijk antwoord over wanneer dat gebeurt.",
          },
        ],
      },
      {
        heading: "Geef de context door, niet alleen de klant",
        blocks: [
          {
            type: "p",
            text: "Een overdracht die het gesprek laat vallen, dwingt de klant om opnieuw te beginnen. De legacy-stap Transfer to agent van Zendesk maakt bijvoorbeeld een ticket aan met de gespreksgeschiedenis van de klant, die de klant niet ziet, en kan tags aan dat ticket toevoegen voor routing. Freshdesk AI Agents kunnen vóór de overdracht gegevens verzamelen, zoals een klant-ID, referentienummer of ordernummer, wanneer het verzamelen van eigenschappen is ingeschakeld in zowel de instellingen voor gespreksgedrag als die voor overdracht.",
          },
          {
            type: "p",
            text: "De agent moet minimaal het volgende ontvangen:",
          },
          {
            type: "ul",
            items: [
              "Het volledige transcript, inclusief wat de bot al heeft voorgesteld",
              "De reden van de overdracht: verzoek van de klant, geen match, gevoelig onderwerp of bedrijfsregel",
              "Identiteitsgegevens zoals naam, e-mailadres of account-ID, en of die zijn geverifieerd",
              "Gestructureerde velden die de bot heeft verzameld, zoals ordernummer of product",
              "Tags of een categorie, zodat routingregels het gesprek naar de juiste groep sturen",
            ],
          },
          {
            type: "p",
            text: "Schep in hetzelfde bericht de verwachtingen van de klant: vertel dat een persoon het overneemt en ongeveer wanneer de klant iets terughoort.",
          },
        ],
      },
      {
        heading: "Hoe Zendesk, Freshdesk en Messenger overdracht implementeren",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: escalatieblokken in de dialoogbuilder van de AI-agent bepalen waar een gesprek heen gaat wanneer de AI-agent het niet kan oplossen, bijvoorbeeld door het door te sturen naar een agent. Een beschikbaarheidsblok kan kantooruren of de beschikbaarheid van agents controleren voordat de escalatie wordt uitgevoerd.",
              "Freshdesk: in de overdrachtsinstellingen van de AI Agent schakel je Transfer conversation in, geef je de triggerzinnen op die een automatische overdracht moeten veroorzaken, en kun je de AI Agent eerst klantgegevens laten verzamelen.",
              "Messenger: wanneer meer dan één app de berichten van een Facebook-pagina afhandelt, zoals je bot en een livechat-inbox, bepaalt het handover protocol van Meta welke app eigenaar is van de thread. De webhook messaging_handovers meldt events voor pass thread control, take thread control, request thread control en app roles. Een pass_thread_control-event bevat de app-ID's van de vorige en de nieuwe eigenaar plus een metadata-string die in het API-request is ingesteld: een handige plek voor de reden van de overdracht.",
              "Instagram: volgens de changelog van Meta wordt het handover protocol voor Instagram niet meer ondersteund en zijn alle bedrijven gemigreerd naar Conversation Routing, waarmee je bepaalt welke partners op een bepaald moment klantgesprekken beheren. Meta beschrijft Conversation Routing als achterwaarts compatibel met de meeste API's van het handover protocol.",
            ],
          },
        ],
      },
      {
        heading: "Afhandeling buiten kantooruren",
        blocks: [
          {
            type: "p",
            text: "Een bot die een mens belooft terwijl er niemand online is, is erger dan helemaal geen overdracht. Controleer eerst de beschikbaarheid en kies daarna een terugvaloptie:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: een beschikbaarheidsblok controleert kantooruren of de beschikbaarheid van agents. In een synchroon kanaal zoals messaging stelt Zendesk voor om buiten de werktijden van agents in plaats daarvan via e-mail te escaleren, en met de workflow voor asynchrone ticketescalatie kunnen klanten een bericht achterlaten dat later door een mens wordt opgevolgd.",
              "Freshdesk: met de optie Transfer outside business hours kies je een schema met kantooruren, draag je het gesprek over aan een agent of een groep, en schrijf je het bericht dat de klant ziet.",
              "Elk platform: maak een ticket aan met het transcript, vertel wanneer het team terug is, en laat de bot intussen selfservicevragen blijven beantwoorden.",
            ],
          },
          {
            type: "note",
            text: "Test het pad buiten kantooruren apart. Dat is de tak die het makkelijkst ongemerkt kapotgaat, omdat er niemand van het team online is wanneer hij draait.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt chatbots met overdracht naar je bestaande helpdesk of Slack: een Starter Chat Bot (350–450 USD) of een Standard Chat Bot (500–650 USD), gekoppeld via API's, webhooks en Make of n8n. Elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang, zonder verborgen kosten, en de meeste implementaties duren 1–3 weken. Een gratis auditgesprek van 30 minuten is een goed moment om je overdrachtstriggers in kaart te brengen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wanneer moet een chatbot overdragen aan een mens?",
        a: "Wanneer de klant om een persoon vraagt, wanneer de bot het verzoek niet met voldoende zekerheid kan matchen, en wanneer het onderwerp complex, urgent of gevoelig is; zo beschrijft Zendesk vragen die een menselijke agent nodig hebben.",
      },
      {
        q: "Hoe voorkom ik dat klanten zich na een overdracht moeten herhalen?",
        a: "Geef het transcript, de reden van de overdracht en alle gegevens die de bot heeft verzameld door aan het ticket of de chat. De legacy-overdrachtsstap van Zendesk voegt de gespreksgeschiedenis toe aan het ticket, en Freshdesk AI Agents kunnen vóór de overdracht gegevens zoals een ordernummer verzamelen.",
      },
      {
        q: "Wat is het handover protocol van Messenger?",
        a: "Dat is het mechanisme van Meta om te bepalen welke app eigenaar is van een Messenger-gespreksthread wanneer meerdere apps dezelfde pagina bedienen. Apps geven threadcontrole door, nemen die over of vragen erom, en de webhook messaging_handovers meldt die events.",
      },
      {
        q: "Wat gebeurt er als een klant buiten kantooruren om een mens vraagt?",
        a: "Controleer de beschikbaarheid voordat je escaleert. Met zowel Zendesk als Freshdesk kun je overdrachten buiten kantooruren anders afhandelen, bijvoorbeeld door een ticket aan te maken voor latere opvolging en een bericht te tonen over wanneer het team beschikbaar is.",
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
];
