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

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "kpi-klantenservice",
    category: "basics",
    navLabel: "KPI's voor klantenservice",
    primaryKeyword: "KPI's klantenservice",
    title: "KPI's voor klantenservice: definities en formules",
    description:
      "KPI's voor klantenservice uitgelegd: eerste reactietijd, oplossingstijd, FCR, heropeningen, CSAT, CES, NPS en backlog, en hoe je elke KPI echt berekent.",
    h1: "KPI's voor klantenservice: wat je meet en hoe je elke KPI berekent",
    intro:
      "KPI's voor klantenservice zijn de metingen die laten zien hoe snel en hoe goed je team klantverzoeken oplost, en onder welke werkdruk. De kernset omvat snelheid (eerste reactietijd en oplossingstijd), kwaliteit (first contact resolution en heropeningen), klantfeedback (CSAT, CES en NPS) en werkdruk (backlog). Hieronder wordt elke KPI gedefinieerd zoals helpdeskleveranciers en de oorspronkelijke auteurs dat doen.",
    keyFacts: [
      "De full resolution time van Zendesk loopt van het aanmaken van een ticket tot de meest recente oplossing, dus heropende tickets blijven meetellen.",
      "Freshdesk telt een ticket alleen mee voor FCR als de klant na het eerste contact geen berichten meer heeft gestuurd.",
      "NPS is het percentage promotors (scores 9–10) min het percentage criticasters (scores 0–6).",
      "NPS werd in december 2003 geïntroduceerd door Fred Reichheld in Harvard Business Review.",
      "Het pleidooi voor het meten van klantinspanning werd gemaakt in het HBR-artikel Stop Trying to Delight Your Customers van juli 2010.",
    ],
    sections: [
      {
        heading: "De belangrijkste klantenservice-KPI's in één oogopslag",
        blocks: [
          {
            type: "table",
            caption: "KPI's voor klantenservice en hoe ze worden berekend",
            head: ["KPI", "Wat het meet", "Hoe het wordt berekend"],
            rows: [
              [
                "Eerste reactietijd (FRT)",
                "Hoe lang klanten op het eerste antwoord wachten",
                "Tijd van het aanmaken van het ticket tot het eerste antwoord van een agent, gerapporteerd als gemiddelde of mediaan over tickets",
              ],
              [
                "Volledige oplossingstijd",
                "Hoe lang het duurt om een ticket definitief op te lossen",
                "Tijd van het aanmaken van het ticket tot de meest recente oplossing (definitie van Zendesk)",
              ],
              [
                "Gemiddelde oplossingstijd",
                "Typische oplossingstijd over veel tickets",
                "Som van de oplossingstijden gedeeld door het aantal tickets dat in de periode is opgelost",
              ],
              [
                "First contact resolution (FCR)",
                "Aandeel problemen dat is opgelost zonder dat de klant terugkomt",
                "Tickets die zijn opgelost zonder verdere berichten van de klant na het eerste contact, gedeeld door alle tickets die in de periode zijn opgelost (definitie van Freshdesk)",
              ],
              [
                "Heropeningen",
                "Tickets die niet echt waren opgelost",
                "Aantal tickets dat van Solved terug naar Open is gezet (Zendesk), vaak weergegeven als aandeel van de opgeloste tickets",
              ],
              [
                "CSAT",
                "Tevredenheid over een specifieke interactie",
                "Tickets met de beoordeling goed gedeeld door alle tickets met een beoordeling, als percentage (Zendesk Explore)",
              ],
              [
                "CES",
                "Hoeveel moeite de klant moest doen",
                "Een enquête na de interactie over gemak of moeite, bijgehouden als gemiddelde score of als aandeel antwoorden met weinig moeite",
              ],
              [
                "NPS",
                "Bereidheid om het bedrijf aan te bevelen",
                "Percentage promotors (9–10) min percentage criticasters (0–6) op een schaal van 0–10",
              ],
              [
                "Backlog",
                "Onopgelost werk dat op het team wacht",
                "Aantal tickets met de status New, Open, Pending of On-hold op een bepaald moment (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Snelheid: eerste reactietijd en oplossingstijd",
        blocks: [
          {
            type: "p",
            text: "De eerste reactietijd is de tijd tussen het aanmaken van een ticket en het eerste antwoord van een agent; zo meet de metric first reply time van Zendesk het. Het is de eerste wachttijd die een klant ervaart, en meestal het eerste doel dat teams in een SLA-beleid opnemen.",
          },
          {
            type: "p",
            text: "De oplossingstijd meet hoe lang het duurt om het probleem op te lossen. De full resolution time van Zendesk loopt van het aanmaken tot de laatste oplossing van het ticket, dus een ticket dat wordt heropend en opnieuw wordt opgelost, blijft tijd opbouwen. De gemiddelde oplossingstijd is simpelweg het gemiddelde van die doorlooptijden over de tickets die in een periode zijn opgelost. Een handvol zeer oude tickets kan een gemiddelde flink omhoogtrekken, dus het loont om er de mediaan naast te bekijken.",
          },
          {
            type: "p",
            text: "Twee instellingen veranderen deze cijfers sterk: of je kantooruren of kalenderuren telt, en of automatische antwoorden als reactie tellen. Beslis dit één keer, leg het vast en houd het stabiel, zodat trends van maand tot maand vergelijkbaar blijven.",
          },
        ],
      },
      {
        heading: "Kwaliteit: first contact resolution en heropeningen",
        blocks: [
          {
            type: "p",
            text: "First contact resolution (FCR) is het aandeel problemen dat wordt opgelost zonder dat de klant hoeft terug te komen. Freshdesk berekent FCR% als het aantal tickets dat na het eerste contact van de klant is opgelost of gesloten, gedeeld door alle tickets die in de geselecteerde periode zijn opgelost of gesloten. Een ticket telt alleen mee als de klant na het eerste bericht geen berichten meer heeft gestuurd; de oorspronkelijke ticketbeschrijving telt niet als antwoord van de klant, en het aantal antwoorden van agents maakt niet uit. Heropende tickets worden niet meegeteld, en uitgaande tickets die een agent is begonnen ook niet.",
          },
          {
            type: "p",
            text: "Heropeningen vangen het omgekeerde geval: een ticket dat als opgelost is gemarkeerd en terugkomt. Zendesk registreert een heropening wanneer de status van een ticket van Solved terug naar Open gaat. Bekijk FCR en heropeningen samen. Als je team tickets te vroeg sluit om een oplossingsdoel te halen, stijgt het aantal heropeningen.",
          },
          {
            type: "note",
            text: "Leveranciers definiëren FCR verschillend: sommige tellen antwoorden van agents, andere antwoorden van klanten, en sommige sluiten bepaalde kanalen uit. Controleer de definitie van je helpdesk voordat je je cijfer met dat van een ander vergelijkt.",
          },
        ],
      },
      {
        heading: "Klantfeedback: CSAT, CES en NPS",
        blocks: [
          {
            type: "p",
            text: "CSAT (customer satisfaction score) vraagt klanten een specifieke interactie te beoordelen. In Zendesk Explore is de tevredenheidsscore het aantal tickets met de beoordeling goed gedeeld door alle tickets met een tevredenheidsreactie, weergegeven als percentage. Omdat CSAT aan één ticket is gekoppeld, is het de meest directe feedback op het werk van je supportteam.",
          },
          {
            type: "p",
            text: "CES (customer effort score) vraagt hoe makkelijk het was om een probleem afgehandeld te krijgen. Het idee komt uit Stop Trying to Delight Your Customers, gepubliceerd in Harvard Business Review in juli 2010. Dat artikel was gebaseerd op een onderzoek onder meer dan 75.000 mensen die contact hadden gehad met medewerkers van contactcenters of met selfservicekanalen, en stelde dat een stap extra zetten weinig verschil maakt voor loyaliteit, terwijl het verminderen van de moeite voor klanten dat wel doet. Vraagformulering en schalen verschillen per tool, dus kies één versie en houd die aan.",
          },
          {
            type: "p",
            text: "NPS (Net Promoter Score) meet de bereidheid om het bedrijf aan te bevelen, niet slechts één interactie. Fred Reichheld van Bain & Company introduceerde de score in The One Number You Need to Grow, gepubliceerd in Harvard Business Review in december 2003. Klanten geven op een schaal van 0–10 aan hoe waarschijnlijk het is dat ze het bedrijf aanbevelen aan een vriend of collega. Scores van 9–10 zijn promotors, 7–8 passieven en 0–6 criticasters. NPS is het percentage promotors min het percentage criticasters, dus de score loopt van -100 tot +100.",
          },
        ],
      },
      {
        heading: "Werkdruk: backlog, en KPI's eerlijk houden",
        blocks: [
          {
            type: "p",
            text: "De backlog is het onopgeloste werk dat voor je team ligt. Zendesk definieert de ticketbacklog als alle tickets die op dat moment de status New, Open, Pending of On-hold hebben, zowel toegewezen als niet-toegewezen. Houd hem bij als dagelijkse momentopname, zodat je de trend ziet. Een backlog die week na week groeit, betekent dat het binnenkomende volume de capaciteit overtreft, ook als de reactietijden er nog goed uitzien.",
          },
          {
            type: "p",
            text: "Een paar gewoonten houden KPI's bruikbaar:",
          },
          {
            type: "ul",
            items: [
              "Koppel een snelheids-KPI aan een kwaliteits-KPI, zoals oplossingstijd aan heropeningen, zodat de ene niet kan verbeteren ten koste van de andere.",
              "Segmenteer op kanaal en prioriteit. Een eerste reactie in chat en een eerste reactie per e-mail zijn niet vergelijkbaar.",
              "Houd door de tijd heen dezelfde definities en uureninstelling aan, en vermeld elke wijziging in je rapporten.",
              "Zet je belangrijkste doelen om in SLA-beleid, zodat de helpdesk ze op elk ticket bijhoudt.",
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "De dienst Automated Reports van TascaLab (500–900 USD, eenmalig) haalt deze KPI's uit je helpdesk, zoals Zendesk, Freshdesk of Jira, en levert volgens schema een samenvatting per e-mail of in Slack. Elk project omvat basisdocumentatie, 30 dagen ondersteuning na livegang en geen verborgen kosten, en de meeste implementaties duren 1–3 weken. Een gratis auditgesprek van 30 minuten helpt bepalen welke KPI's het eerst de moeite waard zijn om te automatiseren.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen eerste reactietijd en oplossingstijd?",
        a: "De eerste reactietijd eindigt bij het eerste antwoord van een agent. De oplossingstijd eindigt wanneer het ticket is opgelost; de full resolution time van Zendesk loopt tot de meest recente oplossing, dus heropende tickets blijven meetellen.",
      },
      {
        q: "Hoe wordt NPS berekend?",
        a: "Vraag klanten op een schaal van 0–10 hoe waarschijnlijk het is dat ze je aanbevelen en trek daarna het percentage criticasters (0–6) af van het percentage promotors (9–10). Passieven (7–8) tellen mee in het totale aantal antwoorden, maar niet in de aftrekking.",
      },
      {
        q: "Wat is het verschil tussen CSAT, CES en NPS?",
        a: "CSAT meet de tevredenheid over een specifieke interactie, CES meet hoeveel moeite het kostte om een probleem afgehandeld te krijgen, en NPS meet hoe waarschijnlijk het is dat een klant het bedrijf in het algemeen aanbeveelt.",
      },
      {
        q: "Hoe berekent Freshdesk first contact resolution?",
        a: "FCR% is het aantal tickets dat is opgelost zonder verdere berichten van de klant na het eerste contact, gedeeld door alle tickets die in de periode zijn opgelost. Heropende en uitgaande tickets worden niet meegeteld.",
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
    slug: "sla-beleid-klantenservice",
    category: "basics",
    navLabel: "SLA-beleid uitgelegd",
    primaryKeyword: "SLA-beleid klantenservice",
    title: "SLA-beleid in de klantenservice, uitgelegd",
    description:
      "SLA-beleid in de klantenservice: doelen voor eerste antwoord, volgend antwoord en oplossing, kantooruren vs. kalenderuren, pauzeren, alerts en helpdeskopzet.",
    h1: "SLA-beleid in de klantenservice, uitgelegd",
    intro:
      "Een SLA-beleid is een set regels in je helpdesk die tickets doelen voor reactie- en oplostijd geeft, op basis van voorwaarden zoals prioriteit, en elk ticket daaraan toetst. Het bepaalt welke tickets welke doelen krijgen, of de klok kantooruren of kalenderuren telt, wanneer de klok pauzeert en wat er gebeurt vóór een overschrijding. Hier lees je hoe SLA-beleid werkt en hoe Zendesk, Freshdesk en Jira Service Management het inrichten.",
    keyFacts: [
      "Zendesk past het eerste SLA-beleid toe, van boven naar beneden in de lijst, waarvan de voorwaarden overeenkomen met het ticket.",
      "In Zendesk pauzeert requester wait time in Pending, en agent work time in Pending en On-hold.",
      "In Freshdesk kun je elke SLA berekenen in kantooruren of kalenderuren (24x7).",
      "Herinneringen in Freshdesk kunnen worden ingesteld van 5 minuten tot 4 uur voordat een SLA-doel verloopt.",
      "In Jira Service Management heeft elke SLA start-, pauze- en stopvoorwaarden plus doelen die aanvragen selecteren met JQL.",
    ],
    sections: [
      {
        heading: "Wat een SLA-beleid is",
        blocks: [
          {
            type: "p",
            text: "Een service level agreement (SLA) is een belofte over hoe snel je op verzoeken reageert en ze oplost. Een SLA-beleid is de manier waarop je helpdesk die belofte op elk ticket afdwingt. De meeste beleidsregels hebben dezelfde onderdelen:",
          },
          {
            type: "ul",
            items: [
              "Voorwaarden: op welke tickets het beleid van toepassing is, bijvoorbeeld per klant, kanaal of aanvraagtype",
              "Doelen: tijdslimieten voor het eerste antwoord, latere antwoorden en de oplossing, meestal per prioriteit ingesteld",
              "Uren: of de klok kantooruren of kalenderuren telt",
              "Pauzeregels: welke statussen de klok stilzetten",
              "Acties bij overschrijding: herinneringen voordat een doel wordt gemist en escalaties daarna",
            ],
          },
          {
            type: "p",
            text: "Bij meerdere beleidsregels is de volgorde belangrijk. Zendesk voert eerst de triggers uit, vergelijkt het ticket daarna van boven naar beneden met de SLA-beleidsregels en past de eerste toe waarvan aan de voorwaarden is voldaan. Zet specifieke beleidsregels, zoals een voor enterpriseklanten, boven algemene. Zendesk vereist ook dat de prioriteit van het ticket in het standaard systeemveld voor prioriteit is ingesteld; een aangepast prioriteitsveld komt niet overeen met een beleid.",
          },
        ],
      },
      {
        heading: "Doelen voor eerste antwoord, volgend antwoord en oplossing",
        blocks: [
          {
            type: "table",
            caption: "SLA-doelen en hoe elke tool ze noemt",
            head: ["Doel", "Wat het meet", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Eerste antwoord",
                "Tijd van het aanmaken van het ticket tot het eerste antwoord van een agent",
                "First reply time",
                "First response",
                "Een aangepaste SLA die start wanneer de aanvraag wordt aangemaakt en stopt bij het eerste antwoord aan de klant",
              ],
              [
                "Volgend antwoord",
                "Tijd van een onbeantwoord klantbericht tot het volgende antwoord van een agent",
                "Next reply time",
                "Every response",
                "Een aangepaste SLA met eigen start- en stopvoorwaarden",
              ],
              [
                "Oplossing",
                "Tijd van het aanmaken tot het ticket is opgelost",
                "Requester wait time, agent work time of total resolution time",
                "Resolution",
                "Een aangepaste SLA die stopt wanneer de aanvraag is opgelost",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk definieert next reply time als de tijd tussen de oudste onbeantwoorde opmerking van de klant en de volgende openbare opmerking van een agent. Daarnaast is er de metric periodic update, die de tijd tussen openbare opmerkingen van agents meet. Voor de oplossing heeft Zendesk drie metrics en raadt het aan er per beleid maar één te kiezen: requester wait time (tijd in New, Open en On-hold), agent work time (tijd in New en Open) en total resolution time (de hele levenscyclus vanaf het aanmaken tot het ticket is opgelost).",
          },
          {
            type: "p",
            text: "Freshdesk stelt binnen elk SLA-beleid per prioriteit doelen in voor first response, every response en resolution. In Jira Service Management is elke SLA een timer met een naam: je bepaalt wanneer hij start, pauzeert en stopt, en voegt daarna doelen toe die met JQL kiezen op welke aanvragen ze van toepassing zijn, met tijdsdoelen genoteerd als 4h 30m.",
          },
        ],
      },
      {
        heading: "Wanneer de klok loopt: kantooruren, kalenderuren en pauzeren",
        blocks: [
          {
            type: "p",
            text: "Kantooruren tellen alleen tijd binnen je werkrooster; kalenderuren tellen elk uur van elke dag. In Zendesk kies je per prioriteit binnen een beleid voor kantooruren of kalenderuren. Freshdesk vraagt of elke SLA de kantooruren moet gebruiken die je hebt ingesteld of kalenderuren (24x7). Jira Service Management koppelt aan elk doel een kalender, met een tijdzone, werkdagen en -uren, en feestdagen.",
          },
          {
            type: "p",
            text: "Een doel van 4 kantooruren op een ticket dat laat op vrijdag is aangemaakt, verloopt misschien pas op maandag. Dat is eerlijk tegenover je team, maar het is niet wat de klant ervaart, dus gebruik kalenderuren voor elke prioriteit waarvoor je bereikbaarheid rond de klok belooft.",
          },
          {
            type: "p",
            text: "Pauzeren is de andere helft. Tijd waarin je op de klant wacht, hoort meestal niet tegen je te tellen, en elke tool gaat daar anders mee om:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: requester wait time pauzeert in Pending; agent work time pauzeert in Pending en On-hold; total resolution time pauzeert bij geen enkele statuswijziging totdat het ticket is opgelost.",
              "Freshdesk: de status Pending pauzeert SLA-timers, en je kunt de SLA-timer uitzetten voor elke status, ook voor aangepaste statussen zoals Waiting on Third Party. Tickets waarvan de timer uit staat, worden weergegeven als On Hold, en wanneer de klant antwoordt, gaat het ticket terug naar Open en loopt de klok weer.",
              "Jira Service Management: een SLA kan pauzevoorwaarden hebben, bijvoorbeeld terwijl je op een reactie van de klant wacht, naast de start- en stopvoorwaarden.",
            ],
          },
        ],
      },
      {
        heading: "Waarschuwingen en escalaties bij overschrijding",
        blocks: [
          {
            type: "p",
            text: "Een SLA heeft alleen zin als iemand in actie komt voordat het doel wordt gemist. Stel een waarschuwing in vóór de deadline en een escalatie daarna:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: bouw een automatisering met de voorwaarde Hours until next SLA breach om een team of persoon te waarschuwen wanneer een ticket bijna over de SLA gaat. Automatiseringen draaien eens per uur, dus de alert kan tot een uur vóór of na de drempel binnenkomen, nooit op het exacte moment. In het voorbeeld van Zendesk voegt dezelfde automatisering een tag toe, zodat ze maar één keer per ticket afgaat.",
              "Freshdesk: elk SLA-beleid kan agents van 5 minuten tot 4 uur voordat een doel voor first response of resolution verloopt een herinnering sturen, en bij een overschreden doel escaleren naar de toegewezen agent of naar andere mensen die je kiest, zoals een teamleider. Beide stel je in onder Admin > Workflows > SLA Policies.",
              "Elke tool: stuur overschrijdingsalerts naar de plek waar je team echt kijkt, zoals een Slack-kanaal, en niet alleen naar e-mail.",
            ],
          },
        ],
      },
      {
        heading: "Hoe Zendesk, Freshdesk en Jira Service Management SLA's configureren",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: maak SLA-beleidsregels met voorwaarden en doelen per prioriteit, kies per prioriteit kantooruren of kalenderuren, en orden de lijst zodat specifieke beleidsregels bovenaan staan. Voeg een automatisering toe voor alerts bij een dreigende overschrijding.",
              "Freshdesk: stel onder Admin > Workflows > SLA Policies per prioriteit doelen in voor first response, every response en resolution, kies kantooruren of kalenderuren en voeg daarna herinneringen en escalaties toe. Bepaal in de instellingen van je ticketstatussen welke statussen de SLA-timer uitzetten.",
              "Jira Service Management: maak elke SLA aan met start-, pauze- en stopvoorwaarden. Meerdere startvoorwaarden werken als OR, en de SLA stopt zodra aan een van de stopvoorwaarden is voldaan. Voeg daarna doelen toe die aanvragen selecteren met JQL, stel een tijdsdoel in en kies een kalender.",
            ],
          },
          {
            type: "p",
            text: "Welke tool je ook gebruikt, begin met één beleid en een paar prioriteiten, laat het een paar weken draaien en vergelijk daarna de werkelijke eerste reactietijden en oplossingstijden met de doelen voordat je ze aanscherpt.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab richt SLA-gerelateerde automatisering in bovenop Zendesk, Freshdesk en Jira: routing die de prioriteit instelt zodat het juiste beleid wordt toegepast, overschrijdingsalerts naar Slack en geplande SLA-rapporten. Relevante eenmalige prijzen zijn Ticket Routing & Categorization (600–950 USD), Automated Reports (500–900 USD) en Custom Automation (1.200–2.000 USD). Projecten omvatten basisdocumentatie, 30 dagen ondersteuning na livegang en geen verborgen kosten, en de meeste duren 1–3 weken. Begin met een gratis auditgesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen de eerste en de volgende reactietijd?",
        a: "De eerste reactietijd meet de wachttijd tot het eerste antwoord van een agent nadat een ticket is aangemaakt. De next reply time van Zendesk meet vanaf de oudste onbeantwoorde opmerking van de klant tot de volgende openbare opmerking van een agent, en geldt dus gedurende het hele gesprek.",
      },
      {
        q: "Moeten SLA's kantooruren of kalenderuren gebruiken?",
        a: "Gebruik kantooruren als je team vaste uren werkt en klanten dat weten, en kalenderuren voor prioriteiten waarvoor je bereikbaarheid rond de klok belooft. Bij Zendesk en Freshdesk kies je dit per beleid, en Jira Service Management gebruikt een kalender die je aan elk doel koppelt.",
      },
      {
        q: "Stopt de SLA-klok wanneer een ticket op Pending staat?",
        a: "Dat hangt af van de tool en de metric. Freshdesk pauzeert SLA-timers in Pending. In Zendesk pauzeren requester wait time en agent work time in Pending, terwijl total resolution time doorloopt totdat het ticket is opgelost.",
      },
      {
        q: "Kan Zendesk me waarschuwen op het exacte moment dat een SLA wordt overschreden?",
        a: "Nee. De alerts van Zendesk bij een dreigende overschrijding gebruiken automatiseringen, die eens per uur draaien, dus een melding kan tot een uur vóór of na de overschrijding binnenkomen.",
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

  // ---------------------------------------------------------------------------
  // 5. Ticket deflection
  // ---------------------------------------------------------------------------
  {
    key: "ticket-deflection",
    slug: "ticket-deflection-uitgelegd",
    category: "basics",
    navLabel: "Ticket deflection",
    primaryKeyword: "ticket deflection",
    title: "Ticket deflection: definitie, meting en beperkingen",
    description:
      "Ticket deflection: welke selfservicekanalen tickets afvangen, hoe Zendesk, Freshdesk en Intercom het meten en waarom afgebroken sessies de score opblazen.",
    h1: "Ticket deflection: wat het is en hoe je het eerlijk meet",
    intro:
      "Ticket deflection is wanneer een klant zijn vraag oplost via selfservice, zoals een helpcenterartikel of een AI-agent, in plaats van een ticket aan te maken voor je team. Helpdeskleveranciers meten het op heel verschillende manieren, en de meeste van hun metingen tellen klanten die gewoon zijn vertrokken zonder om hulp te vragen als afgevangen. Een deflection rate is pas bruikbaar als je precies weet wat die telt en welke verzoeken nooit afgevangen zouden moeten worden.",
    keyFacts: [
      "De self-service score van Zendesk, ook wel ticket deflection ratio genoemd, vergelijkt het gebruik van het helpcenter met het aantal tickets dat in dezelfde periode is aangemaakt.",
      "Zendesk registreert een aangenomen deflection wanneer een helpcenterbezoeker geen ticket indient, maar nooit bevestigt dat hij een antwoord heeft gevonden.",
      "In de rapporten over AI-agents van Zendesk telt elk gesprek dat niet in een escalatie eindigt als afgevangen.",
      "Intercom registreert een aangenomen oplossing (assumed resolution) wanneer een klant na het laatste antwoord van Fin vertrekt zonder om meer hulp te vragen.",
      "Volgens een Gartner-enquête die in augustus 2024 werd gepubliceerd, wordt slechts 14% van de klantenserviceproblemen volledig via selfservice opgelost.",
    ],
    sections: [
      {
        heading: "Waar deflection plaatsvindt: selfservicekanalen",
        blocks: [
          {
            type: "p",
            text: "Deflection gebeurt overal waar een klant een antwoord kan vinden voordat hij bij een agent uitkomt. Elk kanaal vangt op een andere manier tickets af en laat een ander spoor achter in je data, dus het helpt om te weten wat je per kanaal echt kunt meten.",
          },
          {
            type: "table",
            caption: "Selfservicekanalen die tickets afvangen",
            head: ["Kanaal", "Hoe het afvangt", "Wat je kunt meten"],
            rows: [
              [
                "Helpcenter of kennisbank",
                "Klanten zoeken of bladeren door artikelen voordat ze contact opnemen",
                "Helpcentersessies of -gebruikers vergeleken met aangemaakte tickets; weergaven van en stemmen op artikelen",
              ],
              [
                "Artikelsuggesties op het contactformulier",
                "Het aanvraagformulier stelt artikelen voor terwijl de klant het probleem beschrijft",
                "Zendesk registreert een bevestigde deflection wanneer een voorgesteld artikel wordt geselecteerd en er in die sessie geen ticket wordt ingediend",
              ],
              [
                "AI-agent of chatbot",
                "Beantwoordt vragen in chat, messaging of e-mail, en escaleert naar een persoon als hij niet kan helpen",
                "Gesprekken die zonder escalatie zijn geëindigd, en idealiter oplossingen die de klant heeft bevestigd",
              ],
              [
                "In-product of contextuele hulp",
                "Een helpwidget toont artikelen die horen bij de pagina of functie die de klant gebruikt",
                "Hoe vaak de widget wordt geopend, artikelweergaven en ingediende contactformulieren vanuit de widget",
              ],
              [
                "Communityforum",
                "Klanten beantwoorden elkaars vragen, en beantwoorde threads blijven latere bezoekers helpen",
                "Moeilijk direct aan tickets te koppelen; meestal bijgehouden als threads met een geaccepteerd antwoord",
              ],
            ],
          },
          {
            type: "note",
            text: "Deflection is een bijeffect van goede selfservice, geen doel op zich. Een klant die in twee minuten een correct antwoord krijgt, is winst. Een klant die opgeeft niet, ook al tellen veel rapporten beide op dezelfde manier.",
          },
        ],
      },
      {
        heading: "Hoe leveranciers deflection definiëren en meten",
        blocks: [
          {
            type: "p",
            text: "Er is geen gedeelde definitie. Elke helpdesk telt iets net anders, en daarom kun je deflection rates uit twee tools, of uit casestudy's van twee leveranciers, niet direct vergelijken.",
          },
          {
            type: "table",
            caption: "Hoe helpdeskleveranciers deflection definiëren",
            head: ["Leverancier en metric", "Wat telt", "Waar je op moet letten"],
            rows: [
              [
                "Self-service score van Zendesk (ook wel self-service ratio of ticket deflection ratio)",
                "Gebruik van het helpcenter vergeleken met het aantal tickets dat in dezelfde periode is aangemaakt. In de Knowledge-rapportage van Zendesk is de self-service ratio het aantal helpcentersessies gedeeld door het aantal ingediende tickets",
                "Het is een verhouding, geen telling van opgeloste problemen, en de deflectionrapporten van Zendesk volgen alleen tickets die via het aanvraagformulier van het helpcenter zijn ingediend",
              ],
              [
                "Bevestigde en aangenomen deflection bij Zendesk",
                "Bevestigd: de bezoeker selecteerde een voorgesteld artikel op het aanvraagformulier en diende in die sessie geen ticket in. Aangenomen: de bezoeker gebruikte het helpcenter en diende geen ticket in, maar bevestigde niet dat hij een antwoord had gevonden",
                "Een aangenomen deflection is een conclusie op basis van stilte",
              ],
              [
                "Deflection rate van de AI-agent van Zendesk",
                "Elk gesprek dat niet in een escalatie eindigt, inclusief mislukte escalaties en gesprekken zonder status",
                "Zendesk rapporteert er strengere metingen naast: door de AI-agent afgehandelde gesprekken en geautomatiseerde oplossingen die door een LLM zijn geverifieerd",
              ],
              [
                "Deflection rate van de AI-agent van Freshdesk",
                "Het aandeel gesprekken binnen een onderwerp dat de AI-agent zonder menselijke tussenkomst heeft opgelost",
                "De deflectiontrend van de Email AI Agent telt ook tickets die een menselijke agent heeft gesloten nadat de klant een antwoord had gelezen en niet had gereageerd",
              ],
              [
                "Fin-oplossing bij Intercom",
                "Na het laatste antwoord van Fin bevestigt de klant dat het heeft geholpen (confirmed resolution) of vertrekt hij zonder om meer hulp te vragen (assumed resolution)",
                "Komt de klant terug in het gesprek voor meer hulp, dan wordt de oplossing weer afgetrokken",
              ],
            ],
          },
          {
            type: "p",
            text: "Twee patronen springen eruit. Ten eerste tellen de breedste metrics, zoals de deflection rate van de AI-agent van Zendesk, aangenomen deflections en de assumed resolutions van Intercom, stilte als succes. Ten tweede voegen de strengere metrics een vorm van verificatie toe: Zendesk telt een geautomatiseerde oplossing alleen als een LLM-controle bevestigt dat het verzoek zonder mens is opgelost, en gesprekken die niet door die controle komen, verbruiken geen automated resolution.",
          },
        ],
      },
      {
        heading: "Het probleem van afgebroken sessies",
        blocks: [
          {
            type: "p",
            text: "De meeste deflectionmetrics kunnen een klant die het antwoord heeft gevonden niet onderscheiden van een klant die heeft opgegeven. Een bezoeker die een artikel leest, het niet begrijpt en je daarna belt, is een aangenomen deflection in het helpcenterrapport en een ticket in de telefoonwachtrij. Een chat die eindigt omdat de klant het tabblad heeft gesloten, ziet er hetzelfde uit als een chat die eindigde omdat het probleem was opgelost. Zendesk merkt op dat zelfs de strengere categorie van door de AI-agent afgehandelde gesprekken gesprekken kan bevatten waarin klanten afhaakten voordat ze escaleerden of ontevreden waren over de oplossing.",
          },
          {
            type: "p",
            text: "Echt selfservicesucces is meestal lager dan dashboards doen vermoeden. In een Gartner-enquête onder 5.728 klanten, gepubliceerd in augustus 2024, werd slechts 14% van de klantenserviceproblemen volledig via selfservice opgelost, en slechts 36% zelfs wanneer klanten het probleem als heel eenvoudig omschreven.",
          },
          {
            type: "p",
            text: "Zo houd je je deflectioncijfers eerlijk:",
          },
          {
            type: "ul",
            items: [
              "Rapporteer bevestigde en aangenomen deflections apart, en behandel het aangenomen cijfer als bovengrens.",
              "Volg herhaalde contacten. Een klant die een dag na een afgevangen sessie via een ander kanaal contact opneemt, is niet afgevangen.",
              "Let op het aantal contacten per klant of per bestelling. Als deflection stijgt maar het aantal contacten per klant niet daalt, bestaat de deflection alleen op papier.",
              "Lees elke maand een steekproef van transcripten van afgevangen botgesprekken om te zien hoe gesprekken echt eindigden.",
              "Koppel deflection aan een kwaliteitsmetric, zoals CSAT op botgesprekken of heropende tickets.",
            ],
          },
        ],
      },
      {
        heading: "Wat je niet moet afvangen",
        blocks: [
          {
            type: "p",
            text: "Sommige verzoeken moeten zo snel mogelijk bij een persoon terechtkomen, ook als een bot technisch gezien zou kunnen antwoorden. Als je ze afvangt, bespaar je een ticket en verlies je een klant.",
          },
          {
            type: "ul",
            items: [
              "Klanten die expliciet om een mens vragen. Maak die route zichtbaar in plaats van haar te verstoppen achter een reeks mislukte botbeurten.",
              "Beveiligingsproblemen, zoals gehackte accounts, vermoedelijke fraude of onverwachte afschrijvingen.",
              "Factuurgeschillen, terugbetalingen en opzeggingen, waarbij een verkeerd of tijdrekkend antwoord direct geld kost.",
              "Klachten en escalaties, vooral herhaalde contacten over hetzelfde probleem.",
              "Juridische verzoeken en verzoeken over gegevensbescherming, zoals verzoeken om inzage in of verwijdering van persoonsgegevens, die een gedocumenteerd antwoord vereisen.",
              "Urgente of veiligheidsgerelateerde problemen, en klanten die van streek of kwetsbaar lijken.",
            ],
          },
          {
            type: "p",
            text: "Klanten verwachten die uitweg. In een Gartner-enquête onder 3.566 klanten, gehouden in februari en maart 2026 en gepubliceerd in augustus 2026, zei 87% dat bedrijven die GenAI inzetten voor klantenservice toegang tot een menselijke agent moeten bieden. Het advies van Gartner in hetzelfde persbericht is om GenAI geen verplichte eerste stap te maken, en alleen een oplossing te proberen wanneer de zekerheid hoog is, met een duidelijk pad naar een persoon.",
          },
          {
            type: "p",
            text: "In de praktijk betekent dat routingregels die deze verzoeken direct naar de juiste wachtrij sturen, en een overdracht van bot naar mens die het volledige gesprek meegeeft, zodat de klant niets hoeft te herhalen.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt AI-chatbots die veelgestelde vragen beantwoorden op je website, WhatsApp, Telegram, Facebook Messenger of Instagram en al het andere doorgeven aan je team in Zendesk, Freshdesk of je bestaande tools. Een Starter Chat Bot kost 350–450 USD en een Standard Chat Bot voor 3–5 kanalen kost 500–650 USD, eenmalig. Automated Reports (500–900 USD) kunnen deflection naast herhaalde contacten en heropeningen bijhouden, zodat je het echte effect ziet. Elk project omvat basisdocumentatie, 30 dagen ondersteuning na livegang en geen verborgen kosten, en de meeste implementaties duren 1–3 weken. Een gratis auditgesprek van 30 minuten is een goed moment om te bepalen wat je automatiseert en wat menselijk blijft.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen ticket deflection en ticketoplossing?",
        a: "Deflection betekent dat de klant geen ticket heeft aangemaakt of geen agent heeft bereikt; oplossing betekent dat het probleem echt is opgelost. De deflection rate van de AI-agent van Zendesk telt elk gesprek dat niet in een escalatie eindigde, terwijl de geautomatiseerde oplossingen ook een LLM-controle vereisen die bevestigt dat het verzoek is opgelost.",
      },
      {
        q: "Wat is een aangenomen deflection in Zendesk?",
        a: "Een helpcentersessie waarin de bezoeker niet om hulp vroeg en geen ticket indiende, maar ook niet bevestigde dat hij een antwoord had gevonden. Voor een bevestigde deflection moet de bezoeker een voorgesteld artikel op het aanvraagformulier selecteren en daarna in die sessie geen ticket indienen.",
      },
      {
        q: "Hoe berekent Zendesk de self-service ratio?",
        a: "Die vergelijkt het gebruik van het helpcenter met het aantal tickets in dezelfde periode. In de Knowledge-rapportage van Zendesk is de self-service ratio het aantal helpcentersessies gedeeld door het aantal ingediende tickets, en deflectionrapporten volgen alleen tickets die via het aanvraagformulier van het helpcenter zijn ingediend.",
      },
      {
        q: "Telt Intercom een Fin-gesprek als opgelost als de klant gewoon vertrekt?",
        a: "Ja. Als de klant na het laatste antwoord van Fin vertrekt zonder om verdere hulp te vragen, registreert Intercom een assumed resolution. Bevestigt de klant dat het antwoord heeft geholpen, dan is het een confirmed resolution.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Getting started with self-service, Part 6: Tracking essential self-service metrics",
        url: "https://support.zendesk.com/hc/en-us/articles/4408894139930-Getting-started-with-self-service-Part-6-Tracking-essential-self-service-metrics",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Knowledge",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155064090-Metrics-and-attributes-for-Zendesk-Knowledge",
      },
      {
        label: "Zendesk Help Center — Understanding the difference between deflection, AI agent-handled, automated resolution, and custom resolution rates",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756478106-Understanding-the-difference-between-deflection-AI-agent-handled-automated-resolution-and-custom-resolution-rates",
      },
      {
        label: "Freshdesk Support — Monitor and Analyze AI Agent Performance Metrics in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011716-monitor-ai-agent-performance",
      },
      {
        label: "Freshdesk Support — Manage, Test & Troubleshoot Your Email AI Agent",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011217-use-and-manage-the-email-ai-agent",
      },
      {
        label: "Intercom Help — Fin AI Agent outcomes",
        url: "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      },
      {
        label: "Gartner — Survey Finds Only 14% of Customer Service Issues Are Fully Resolved in Self-Service (August 2024)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2024-08-19-gartner-survey-finds-only-14-percent-of-customer-service-issues-are-fully-resolved-in-self-service",
      },
      {
        label: "Gartner — Survey Finds 87% of Customers Say Companies Using GenAI for Customer Service Must Provide Access to a Human Agent (August 2026)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "ai-knowledge-base-for-customer-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. Omnichannel customer support
  // ---------------------------------------------------------------------------
  {
    key: "omnichannel-customer-support",
    slug: "omnichannel-klantenservice",
    category: "basics",
    navLabel: "Omnichannel klantenservice",
    primaryKeyword: "omnichannel klantenservice",
    title: "Omnichannel klantenservice: wat het in de praktijk betekent",
    description:
      "Omnichannel klantenservice: het verschil met multichannel, een centrale agentwerkplek, omnichannel routing en de berichtvensters van WhatsApp en Messenger.",
    h1: "Omnichannel klantenservice: wat het betekent en hoe het werkt",
    intro:
      "Omnichannel klantenservice betekent dat elk kanaal waarlangs een klant je bereikt, zoals e-mail, chat, telefoon, WhatsApp of social messaging, gekoppeld is aan één klantrecord en één gespreksgeschiedenis die elke agent kan zien. Multichannel support biedt dezelfde kanalen, maar beheert ze los van elkaar, zodat klanten zich bij elke kanaalwissel moeten herhalen. Om omnichannel te werken, heb je een centrale werkplek voor agents nodig, routing die alle kanalen als één werkvoorraad behandelt, en workflows die de eigen regels van elk kanaal respecteren.",
    keyFacts: [
      "Freshworks beschrijft multichannel support als onafhankelijke kanalen die elk zelfstandig werken; bij omnichannel support zijn ze met elkaar verbonden.",
      "In de Zendesk Agent Workspace kan één ticketgesprek e-mail, chat en spraak bevatten.",
      "De omnichannel routing van Zendesk wijst e-mail-, messaging- en beltickets toe op basis van de status en vrije capaciteit van agents.",
      "Op WhatsApp zijn vrije antwoorden alleen toegestaan binnen een klantenservicevenster van 24 uur; daarna kunnen alleen templates worden verstuurd.",
      "Volgens een Gartner-enquête die in juli 2025 werd gepubliceerd, begint slechts 22% van de klanten in de eigen kanalen van een bedrijf, blijft daar en lost er het probleem volledig op.",
    ],
    sections: [
      {
        heading: "Omnichannel vs. multichannel support",
        blocks: [
          {
            type: "p",
            text: "Beide modellen bieden meerdere kanalen. Het verschil is of die kanalen context delen. Freshworks definieert multichannel support als het aanbieden van meerdere onafhankelijke kanalen die elk zelfstandig werken, en merkt op dat er doorgaans per kanaal een eigen team voor nodig is. Omnichannelsystemen zorgen er daarentegen voor dat alle kanalen met elkaar verbonden zijn. Zendesk trekt dezelfde grens: bij multichannel support gaan gesprekken niet mee van het ene kanaal naar het volgende, terwijl omnichannel support interacties verbindt tot één doorlopend gesprek en agents een volledig beeld geeft van de geschiedenis van de klant.",
          },
          {
            type: "table",
            caption: "Multichannel vs. omnichannel klantenservice",
            head: ["Aspect", "Multichannel", "Omnichannel"],
            rows: [
              ["Kanalen", "Meerdere kanalen, elk met een eigen tool of inbox", "Meerdere kanalen die in één helpdesk uitkomen"],
              ["Klantgeschiedenis", "Blijft in het kanaal waar ze plaatsvond", "Eén geschiedenis over alle kanalen, zichtbaar voor elke agent"],
              ["Van kanaal wisselen", "De klant begint opnieuw en herhaalt gegevens", "De agent gaat verder waar de vorige interactie ophield"],
              ["Teamopzet", "Vaak een eigen team per kanaal", "Een gedeelde wachtrij, met agents die op meerdere kanalen werken"],
              ["Routing", "Per kanaal, vaak handmatig", "Eén routingconfiguratie op basis van status, capaciteit en skills"],
              ["Rapportage", "Aparte cijfers per kanaal", "Rapportage per klant en per probleem over alle kanalen heen"],
            ],
          },
          {
            type: "p",
            text: "Een kanaal toevoegen maakt je nog niet omnichannel. Als WhatsApp-berichten in een aparte app terechtkomen die je e-mailagents niet kunnen zien, heb je er gewoon een silo bij. En klanten wisselen echt van kanaal: een Gartner-enquête onder 5.801 klanten, gepubliceerd in juli 2025, liet zien dat slechts 22% in de eigen kanalen van een bedrijf begint, daar blijft en er het probleem volledig oplost, en dat 51% van de serviceklantreizen nu begint op platforms van derden zoals Google, YouTube en ChatGPT.",
          },
        ],
      },
      {
        heading: "Een centrale agentwerkplek en gedeelde geschiedenis",
        blocks: [
          {
            type: "p",
            text: "De kern van omnichannel support is één plek waar agents elk gesprek zien en beantwoorden. In de Zendesk Agent Workspace kunnen ticketgesprekken e-mail, chat en spraak bevatten, en agents kunnen ook social- en webberichten ontvangen en beantwoorden. Het eigen voorbeeld van Zendesk is een ticket dat begon als livechat en per e-mail verderging, vastgelegd als één doorlopend gesprek. Klantcontext, inclusief de interactiegeschiedenis, staat naast het gesprek, en agents kunnen vanuit hetzelfde scherm helpcenterartikelen zoeken en citeren.",
          },
          {
            type: "p",
            text: "Welke helpdesk je ook gebruikt, een werkende omnichannelopzet heeft dezelfde mogelijkheden nodig:",
          },
          {
            type: "ul",
            items: [
              "Eén klantrecord dat e-mailadressen, telefoonnummers en messaging-ID's koppelt, zodat een WhatsApp-bericht en een e-mail van dezelfde persoon in dezelfde geschiedenis terechtkomen.",
              "Gespreksgeschiedenis uit elk kanaal op het ticket, inclusief het botgesprek dat vóór een overdracht plaatsvond.",
              "De mogelijkheid om via een ander kanaal te antwoorden wanneer het oorspronkelijke kanaal geen antwoord meer toestaat.",
              "Gedeelde tags, velden en macro's, zodat rapportage op elk kanaal op dezelfde manier werkt.",
            ],
          },
          {
            type: "note",
            text: "Identiteitskoppeling is waar veel opzetten misgaan. Als je telefoonsysteem, WhatsApp-nummer en e-mailinbox niet naar hetzelfde klantrecord verwijzen, zien agents nog steeds fragmenten, alleen in één venster.",
          },
        ],
      },
      {
        heading: "Omnichannel routing",
        blocks: [
          {
            type: "p",
            text: "Routing bepaalt welke agent welk gesprek krijgt. De omnichannel routing van Zendesk stuurt nieuwe en open tickets uit e-mail, telefoongesprekken en messaging naar agents op basis van hun beschikbaarheid en capaciteit. In plaats van per kanaal een status in te stellen, stellen agents één centrale status in voor e-mail, voice en messaging. Voor messaging en telefoongesprekken moet de agent online zijn, en elke agent heeft vrije capaciteit nodig, wat betekent dat er minder open tickets aan hem zijn toegewezen dan zijn maximum voor dat kanaal.",
          },
          {
            type: "p",
            text: "Standaard gaat een ticket naar de agent met de meeste vrije capaciteit voor dat kanaal, en bij een gelijke stand naar de agent die het langst geen ticket uit dat kanaal heeft gehad. Je kunt in plaats daarvan overschakelen op round robin, en focus mode inschakelen zodat een agent niet tegelijk messaginggesprekken en telefoongesprekken krijgt. Afhankelijk van je Zendesk-abonnement kan routing ook rekening houden met de tijd tot een SLA-overschrijding, de ticketprioriteit en de skills van agents.",
          },
          {
            type: "p",
            text: "Het nut van routing over kanalen heen in plaats van per kanaal is gedeelde capaciteit: een agent die aan de telefoon zit, moet geen nieuwe chat aangeboden krijgen, en een agent met weinig open e-mails kan meer werk aannemen.",
          },
        ],
      },
      {
        heading: "Kanaalregels: berichtvensters op WhatsApp en Messenger",
        blocks: [
          {
            type: "p",
            text: "Omnichannel maakt kanalen niet identiek. Messagingplatforms stellen regels over wanneer een bedrijf mag antwoorden, en je workflows moeten die respecteren.",
          },
          {
            type: "table",
            caption: "Berichtvensters op WhatsApp en Facebook Messenger",
            head: ["Kanaal", "Antwoordvenster", "Nadat het venster sluit"],
            rows: [
              [
                "WhatsApp Business Platform",
                "Een klantenservicevenster van 24 uur start wanneer de klant je een bericht stuurt of belt, en begint opnieuw bij elk nieuw bericht of gesprek. Binnen dat venster kun je vrije serviceberichten versturen zonder voorafgaande goedkeuring.",
                "Alleen vooraf goedgekeurde templateberichten kunnen worden verstuurd. Vrije berichten kunnen alleen een reactie op gebruikers zijn en geen gesprek starten.",
              ],
              [
                "Facebook Messenger",
                "Het standaard berichtvenster is 24 uur na het laatste bericht van de persoon.",
                "Met de Human Agent-tag kan een persoon binnen 7 dagen na het bericht van de klant antwoorden. Je app moet goedgekeurd zijn om de tag te gebruiken, en geautomatiseerde berichten zijn er niet mee toegestaan.",
              ],
            ],
          },
          {
            type: "p",
            text: "Deze regels bepalen je workflow. Als een agent een WhatsApp-gesprek oppakt meer dan 24 uur na het laatste bericht van de klant, is een vrij antwoord niet mogelijk: je hebt een goedgekeurde template nodig, of je stapt over op een ander kanaal zoals e-mail. Ook bots hebben ermee te maken, omdat de Human Agent-tag van Messenger alleen voor menselijke antwoorden is. Raadpleeg de actuele documentatie van Meta voordat je een opzet rond deze limieten ontwerpt, want Meta werkt zijn messagingbeleid en prijzen bij.",
          },
        ],
      },
      {
        heading: "Zo stap je over van multichannel naar omnichannel",
        blocks: [
          {
            type: "ol",
            items: [
              "Maak een lijst van elk kanaal dat klanten nu gebruiken en waar elk kanaal terechtkomt: welke tool, welk team, welke inbox.",
              "Breng de kanalen samen in één helpdesk, via native integraties waar die bestaan en via API's of webhooks waar dat niet zo is.",
              "Bepaal hoe je identiteiten over kanalen heen koppelt, bijvoorbeeld op e-mailadres en telefoonnummer, en hoe je dubbele records samenvoegt.",
              "Richt één routingconfiguratie in met capaciteit per kanaal, in plaats van aparte wachtrijen per team.",
              "Zorg dat overdrachten van bot naar mens het volledige gesprek en de klantgegevens in het ticket meenemen.",
              "Voeg kanaalspecifieke regels toe, zoals templateantwoorden op WhatsApp na 24 uur en verschillende SLA-doelen voor live- en asynchrone kanalen.",
              "Rapporteer per klant en per probleem over alle kanalen heen, niet alleen per kanaal.",
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab koppelt kanalen aan de helpdesk die je al gebruikt, zoals Zendesk of Freshdesk, met API's, webhooks en Make of n8n. Een Standard Chat Bot (500–650 USD, eenmalig) dekt 3–5 kanalen, zoals je website, WhatsApp, Telegram, Facebook Messenger en Instagram, en Ticket Routing & Categorization (600–950 USD) sorteert binnenkomende gesprekken in de juiste wachtrij. Elk project omvat basisdocumentatie, 30 dagen ondersteuning na livegang en geen verborgen kosten, en de meeste implementaties duren 1–3 weken. In een gratis auditgesprek van 30 minuten worden je huidige kanalen in kaart gebracht voordat er iets wordt gebouwd.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen omnichannel en multichannel support?",
        a: "Multichannel support biedt meerdere kanalen die onafhankelijk van elkaar werken, dus de geschiedenis blijft binnen elk kanaal. Omnichannel support verbindt de kanalen, zodat agents één klantgeschiedenis zien en klanten van kanaal kunnen wisselen zonder zich te herhalen.",
      },
      {
        q: "Wat is omnichannel routing in Zendesk?",
        a: "Een routingsysteem dat e-mail-, messaging- en beltickets aan agents toewijst op basis van één centrale agentstatus en vrije capaciteit per kanaal. Standaard krijgt de agent met de meeste vrije capaciteit voor dat kanaal het ticket.",
      },
      {
        q: "Kan ik een WhatsApp-klant na 24 uur nog antwoorden?",
        a: "Niet met een vrij bericht. Zodra het klantenservicevenster van 24 uur sluit, kunnen alleen vooraf goedgekeurde templateberichten worden verstuurd. Een nieuw bericht of gesprek van de klant opent een nieuw venster.",
      },
      {
        q: "Hoe lang kan een menselijke agent op Facebook Messenger antwoorden?",
        a: "Het standaard berichtvenster is 24 uur. Met de Human Agent-tag, waarvoor goedkeuring van de app nodig is, kan een menselijke agent binnen 7 dagen na het bericht van de klant antwoorden. De tag kan niet worden gebruikt voor geautomatiseerde berichten.",
      },
    ],
    sources: [
      {
        label: "Freshworks — Omnichannel vs Multichannel: Key Service Differences",
        url: "https://www.freshworks.com/explore-cx/omnichannel-vs-multichannel-support/",
      },
      {
        label: "Zendesk — What is omnichannel customer service?",
        url: "https://www.zendesk.com/blog/customer-service/support/omnichannel-really-means/",
      },
      {
        label: "Zendesk Help Center — About the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Messenger Platform Send API reference",
        url: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
      },
      {
        label: "Gartner — Survey Finds More Than Half of Customer Service Journeys Now Start on Third-Party Platforms (July 2025)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-23-gartner-survey-finds-more-than-half-of-customer-service-journeys-now-start-on-third-party-platforms",
      },
    ],
    related: ["whatsapp-customer-support-bot", "ticket-routing-automation", "zendesk-automation"],
    updated: "2026-10-19",
  },
];
