import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "ai-chatbot-klantenservice",
    category: "services",
    navLabel: "AI-chatbot voor klantenservice",
    primaryKeyword: "AI chatbot klantenservice",
    title: "AI-chatbot voor klantenservice: zo werkt het | TascaLab",
    description:
      "Hoe een AI-chatbot voor klantenservice FAQ's beantwoordt, gegevens verzamelt en doorzet naar medewerkers — en via de API koppelt met Zendesk of Freshdesk.",
    h1: "AI-chatbot voor klantenservice: wat hij doet en hoe hij koppelt met je helpdesk",
    intro:
      "Een AI-chatbot voor klantenservice beantwoordt routinevragen op basis van je helpcontent, verzamelt de gegevens die een medewerker nodig heeft en draagt het gesprek over aan een mens als hij niet verder kan of de klant daarom vraagt. Hij werkt het best als laag bovenop je bestaande helpdesk: de bot handelt het eerste contact af, en alles wat hij niet kan oplossen wordt een ticket met de volledige context erbij.",
    keyFacts: [
      "AI-agents van Zendesk genereren antwoorden uit gekoppelde kennisbronnen en vallen terug op een standaardantwoord als er niets relevants wordt gevonden.",
      "AI Agents van Freshdesk kunnen een gesprek automatisch overdragen aan een mens als de klant zinnen gebruikt die de beheerder heeft opgegeven.",
      "Een externe bot in Zendesk-messaging draagt over door de controle door te geven aan de Agent Workspace, waardoor het gesprek kan worden toegewezen.",
      "Volgens artikel 50 van de EU AI-verordening moeten chatbots vanaf 2 augustus 2026 mensen laten weten dat ze met AI communiceren, tenzij dat duidelijk is.",
    ],
    sections: [
      {
        heading: "Wat een supportchatbot echt doet",
        blocks: [
          {
            type: "p",
            text: "De meeste supportchatbots hebben drie taken, en een vierde is optioneel. Het helpt om ze los van elkaar af te bakenen, omdat elke taak andere input nodig heeft om goed te werken.",
          },
          {
            type: "table",
            caption: "De kerntaken van een klantenservicechatbot",
            head: ["Taak", "Voorbeeld", "Waar het van afhangt"],
            rows: [
              [
                "Veelgestelde vragen beantwoorden",
                "Openingstijden, retourbeleid, levertijden, stappenplannen",
                "Juiste, actuele helpartikelen of een goedgekeurde lijst met vragen en antwoorden",
              ],
              [
                "Informatie verzamelen",
                "Ordernummer, e-mailadres van het account, apparaat, een foto van het probleem",
                "Een vaste lijst met velden die aansluiten op de ticketvelden in je helpdesk",
              ],
              [
                "Doorzetten naar een mens",
                "Live doorverbinden met een medewerker, of een ticket aanmaken met het transcript",
                "Een overdrachtsroute naar je helpdesk en duidelijke regels voor wanneer je die gebruikt",
              ],
              [
                "Eenvoudige acties uitvoeren (optioneel)",
                "De status van een bestelling of reservering opzoeken",
                "API-toegang tot het systeem waarin de gegevens staan",
              ],
            ],
          },
          {
            type: "p",
            text: "Bots op basis van LLM's genereren antwoorden uit je kenniscontent in plaats van handgeschreven scripts te volgen. Zendesk beschrijft de Knowledge reply van zijn AI-agents bijvoorbeeld als het doorzoeken van de gekoppelde kennisbronnen om een antwoord te genereren, met een standaardantwoord als er niets relevants opduikt. Het praktische gevolg is simpel: de bot is maar zo goed als de content waaruit hij antwoordt. Hiaten en verouderde artikelen leiden tot foute of vage antwoorden.",
          },
          {
            type: "p",
            text: "Het verzamelen van informatie wordt vaak onderschat. Ook als de bot het probleem niet kan oplossen, scheelt het een eerste rondje heen-en-weer voor de medewerker als hij vooraf vraagt naar het ordernummer, het e-mailadres van het account en een korte omschrijving.",
          },
        ],
      },
      {
        heading: "Overdracht: het onderdeel waarop klanten de bot beoordelen",
        blocks: [
          {
            type: "p",
            text: "Een bot die mensen niet bij een mens laat komen, schaadt het vertrouwen snel. Bepaal vooraf in welke situaties het geautomatiseerde deel van het gesprek stopt:",
          },
          {
            type: "ul",
            items: [
              "De klant vraagt om een mens. Met de handover-instellingen voor AI Agents in Freshdesk kunnen beheerders bijvoorbeeld zinnen opgeven die het gesprek automatisch overdragen, een bericht tonen vóór de overdracht en eventueel eerst klantgegevens verzamelen.",
              "De bot blijft falen. In Zendesk kun je een AI-agent laten escaleren naar een mens als hij na meerdere pogingen geen antwoord kan genereren uit de gekoppelde kennisbronnen.",
              "Het onderwerp is gevoelig of valt buiten de scope. Freshdesk noemt verzoeken over bijvoorbeeld facturatie of terugbetalingen, en vragen buiten de ingestelde scope van de agent, als typische aanleidingen voor overdracht.",
              "Er is niemand online. Buiten kantooruren moet de bot dat gewoon zeggen en een ticket aanmaken, in plaats van een live medewerker te beloven.",
            ],
          },
          {
            type: "p",
            text: "Wat de aanleiding ook is, de medewerker moet het transcript en de verzamelde velden ontvangen, zodat de klant niets hoeft te herhalen. Als een externe bot de controle via de switchboard van Sunshine Conversations doorgeeft aan de Agent Workspace van Zendesk, kan het gesprek aan een medewerker worden toegewezen, en de bot kan metadata meesturen die velden in het resulterende ticket invult.",
          },
        ],
      },
      {
        heading: "Ingebouwde helpdeskbots vs. een maatwerkbot",
        blocks: [
          {
            type: "p",
            text: "Zendesk en Freshdesk bieden allebei hun eigen AI-agents. Lopen je gesprekken al via de messaging-widget van die helpdesk en beantwoordt je helpcenter de meeste vragen, dan is de ingebouwde optie de snelste start. Een maatwerkbot die via de API is gekoppeld, is het alternatief als je iets nodig hebt wat de ingebouwde bot niet dekt.",
          },
          {
            type: "table",
            caption: "Ingebouwde vs. maatwerk-supportchatbot",
            head: ["", "Ingebouwde AI-agent van de helpdesk", "Maatwerkbot gekoppeld via API"],
            rows: [
              [
                "Inrichting",
                "Ingesteld in het beheer van de helpdesk, met het helpcenter als kennisbron",
                "Gebouwd op een aparte stack en via API en webhooks gekoppeld aan de helpdesk",
              ],
              [
                "Kanalen",
                "Wat het messagingproduct van de helpdesk binnen je abonnement ondersteunt",
                "Elk kanaal met een API die je kunt koppelen, zoals WhatsApp, Telegram of Messenger",
              ],
              [
                "Logica",
                "Beperkt tot de flowbuilder en AI-instellingen van de leverancier",
                "Je eigen regels, opzoekacties in interne systemen, formulieren met meerdere stappen",
              ],
              [
                "Licenties",
                "Onderdeel van je helpdeskabonnement of een add-on; controleer je abonnement",
                "Aparte kosten voor het botplatform en eventueel gebruik van AI-modellen",
              ],
              [
                "Onderhoud",
                "De leverancier onderhoudt het platform",
                "Iemand moet de integratie bijhouden als API's veranderen",
              ],
            ],
          },
          {
            type: "p",
            text: "Geen van beide is per definitie beter. Een verstandige volgorde is eerst nagaan wat de ingebouwde agent dekt, en alleen maatwerk bouwen voor het specifieke gat: een kanaal, een opzoekactie of een overdrachtsregel die de ingebouwde tool niet aankan.",
          },
        ],
      },
      {
        heading: "Hoe een maatwerkbot aansluit op je helpdesk",
        blocks: [
          {
            type: "p",
            text: "Er zijn twee gangbare integratiepatronen, en veel opstellingen gebruiken ze allebei.",
          },
          {
            type: "ol",
            items: [
              "Een ticket aanmaken bij overdracht. De bot draait op zijn eigen kanaalkoppeling en maakt, als er een mens nodig is, via de REST API van de helpdesk een ticket aan met het transcript en de verzamelde gegevens. In de Tickets API van Zendesk is een comment het enige verplichte veld bij het aanmaken van een ticket, en je kunt een idempotency key meesturen zodat een herhaald verzoek geen dubbel ticket oplevert. Het endpoint POST /api/v2/tickets van Freshdesk accepteert aangepaste velden als sleutel-waardeparen en maakt een nieuw contact aan als het e-mailadres van de aanvrager nog niet bekend is.",
              "Het gesprek delen binnen de messaging van de helpdesk. In Zendesk kan een externe bot worden geïnstalleerd als messaging-responder; er kan maar één bot tegelijk de rol van standaardresponder hebben. De bot antwoordt eerst en gebruikt de pass control-actie van de switchboard om het gesprek over te dragen aan de Agent Workspace als er een mens nodig is.",
            ],
          },
          {
            type: "p",
            text: "Webhooks regelen de terugweg. Een Zendesk-trigger kan via een 'Notify webhook'-actie een extern endpoint aanroepen — bijvoorbeeld om de bot te laten weten dat een medewerker het ticket heeft opgelost, zodat hij de cirkel op het oorspronkelijke kanaal kan sluiten.",
          },
          {
            type: "note",
            text: "Houd één bron van waarheid voor antwoorden aan. Als de bot antwoordt uit een apart document dat steeds verder afwijkt van je helpcenter, krijgen klanten tegenstrijdige antwoorden, afhankelijk van waar ze het vragen.",
          },
        ],
      },
      {
        heading: "Klanten laten weten dat ze met een bot praten",
        blocks: [
          {
            type: "p",
            text: "Bedien je klanten in de EU, dan geldt artikel 50 van de AI-verordening vanaf 2 augustus 2026. Volgens de FAQ van de Europese Commissie moeten aanbieders systemen zoals chatbots zo ontwerpen dat mensen vanaf het begin van de eerste interactie op een duidelijke en herkenbare manier te horen krijgen dat ze met AI communiceren. De uitzondering, waarbij dit duidelijk is voor een redelijk geïnformeerd persoon, moet volgens de Commissie restrictief worden uitgelegd.",
          },
          {
            type: "p",
            text: "De eenvoudigste aanpak is één duidelijke zin in de begroeting van de bot, plus een zichtbare manier om een mens te bereiken. Transcripten bevatten bovendien vaak persoonsgegevens, dus bepaal hoe lang het botplatform ze bewaart en wie er toegang toe heeft.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab supportchatbots bouwt",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt chatbots bovenop de tools die je al gebruikt — Zendesk, Freshdesk, Jira, Slack of interne systemen — via hun API's, webhooks en Make of n8n, zodat je niet van platform hoeft te wisselen. De bot is ontworpen als filter vóór je team, niet als vervanging ervan: hij beantwoordt wat hij kan, verzamelt de gegevens en draagt de rest met context over.",
          },
          {
            type: "table",
            caption: "Chatbotpakketten van TascaLab (eenmalige prijs)",
            head: ["Pakket", "Omvang", "Prijs (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 kanalen, FAQ's, eenvoudige gegevensverzameling", "350–450 USD"],
              [
                "Standard Chat Bot",
                "3–5 kanalen, complexere gesprekken, soepelere overdrachten",
                "500–650 USD",
              ],
            ],
          },
          {
            type: "p",
            text: "Beschikbare kanalen: website, WhatsApp, Telegram, Facebook Messenger en Instagram, plus telefoon via de voicebot. De meeste projecten duren 1–3 weken, en elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten. Een gratis audit-gesprek van 30 minuten is het startpunt.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vervangt een AI-chatbot mijn supportmedewerkers?",
        a: "Daar hoort hij niet voor ontworpen te zijn. Een supportbot is het nuttigst bij het afhandelen van terugkerende vragen en het verzamelen van gegevens, waarna hij al het andere met het gesprek erbij aan mensen overdraagt.",
      },
      {
        q: "Heeft de chatbot een eigen kennisbank nodig?",
        a: "Meestal niet. AI-supportbots antwoorden doorgaans uit je bestaande helpcenter of een goedgekeurde lijst met vragen en antwoorden — de AI-agents van Zendesk genereren bijvoorbeeld antwoorden uit gekoppelde kennisbronnen. Eén bron voorkomt tegenstrijdige antwoorden.",
      },
      {
        q: "Kan een maatwerkchatbot tickets aanmaken in Zendesk of Freshdesk?",
        a: "Ja. Beide helpdesks bieden een REST-endpoint voor het aanmaken van tickets (POST /api/v2/tickets), zodat een bot bij de overdracht een ticket kan openen met het transcript en de verzamelde velden.",
      },
      {
        q: "Moet ik klanten vertellen dat ze met een bot praten?",
        a: "In de EU verplicht artikel 50 van de AI-verordening chatbots vanaf 2 augustus 2026 om mensen te laten weten dat ze met AI communiceren, tenzij dat duidelijk is. Dat in het eerste bericht van de bot zeggen is de eenvoudigste aanpak.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Customizing the Knowledge reply in an AI agent with agentic AI",
        url: "https://support.zendesk.com/hc/en-us/articles/10448933203994-Customizing-the-Knowledge-reply-in-an-AI-agent-with-agentic-AI",
      },
      {
        label: "Zendesk Help Center — Managing third-party bots in Admin Center",
        url: "https://support.zendesk.com/hc/en-us/articles/5064149334426-Managing-third-party-bots-in-Admin-Center",
      },
      {
        label: "Zendesk Developer Docs — Switchboard",
        url: "https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/",
      },
      {
        label: "Zendesk Developer Docs — Tickets API",
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Developers — API reference (Create a ticket)",
        url: "https://developers.freshdesk.com/api/",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["chatbot-to-human-handoff", "website-chatbot-for-support", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. AI voice bot for customer service
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-voice-bot-for-customer-service",
    slug: "ai-voicebot-klantenservice",
    category: "services",
    navLabel: "AI-voicebot voor telefonie",
    primaryKeyword: "AI voicebot klantenservice",
    title: "AI-voicebot voor klantenservice: zo werkt het | TascaLab",
    description:
      "Zo werkt een AI-voicebot voor klantenservice: telefonie, spraak-naar-tekst, AI-logica en tekst-naar-spraak, plus doorverbinden, IVR vs. bot en FCC-regels.",
    h1: "AI-voicebot voor klantenservice: zo werkt automatisering van inkomende gesprekken",
    intro:
      "Een AI-voicebot voor klantenservice neemt inkomende gesprekken aan, achterhaalt wat de beller nodig heeft, handelt eenvoudige verzoeken af of verzamelt gegevens, en verbindt het gesprek door met een mens wanneer dat moet. Technisch koppelt hij vier onderdelen aan elkaar — telefonie, spraak-naar-tekst, een taalmodel of dialooglogica, en tekst-naar-spraak — en de overdracht aan je team telt even zwaar als hoe natuurlijk de stem klinkt.",
    keyFacts: [
      "Een traditionele IVR werkt met toetsaanslagen (DTMF); het Gather-verb van Twilio staat standaard op DTMF en moet worden ingesteld op spraak om bellers te transcriberen.",
      "De bidirectionele Media Streams van Twilio versturen gespreksaudio als 8 kHz, eenkanaals mu-law, base64-gecodeerd via een WebSocket.",
      "Met Zendesk kan een externe voice-AI-agent gesprekken eerst aannemen en via een SIP-IN-lijn escaleren naar een live medewerker.",
      "De FCC-uitspraak van februari 2024 behandelt AI-gegenereerde stemmen als „artificial” onder de TCPA, dus gesprekken daarmee vereisen doorgaans voorafgaande uitdrukkelijke toestemming.",
    ],
    sections: [
      {
        heading: "Hoe een voicebot voor inkomende gesprekken werkt",
        blocks: [
          {
            type: "p",
            text: "Elke voicebot voor inkomende gesprekken doorloopt dezelfde cyclus, welke leveranciers je ook gebruikt:",
          },
          {
            type: "ol",
            items: [
              "Telefonie. Het gesprek komt binnen op een telefoonnummer of SIP-trunk, en de telefonieprovider geeft het door aan je applicatie — door gespreksinstructies op te vragen bij je server of door de audio ernaartoe te streamen.",
              "Spraak-naar-tekst. Wat de beller zegt, wordt getranscribeerd. Als het Gather-verb van Twilio is ingesteld op spraak, post Twilio de transcriptie (SpeechResult) samen met een Confidence-score naar je action-URL.",
              "Begrip en logica. Een taalmodel of regelgebaseerde dialoog bepaalt wat de beller wil en wat de volgende stap is: antwoorden, een vervolgvraag stellen, iets opzoeken via een API of doorverbinden.",
              "Tekst-naar-spraak. Het antwoord wordt omgezet in audio en afgespeeld voor de beller.",
              "Herhalen of overdragen. De cyclus gaat door tot het verzoek is afgehandeld of het gesprek is doorverbonden, en de uitkomst wordt vastgelegd in je helpdesk.",
            ],
          },
          {
            type: "p",
            text: "Er zijn twee hoofdmanieren om dit op te zetten. In een beurtgebaseerde opzet verzamelt het platform één uiting tegelijk en antwoordt je server met nieuwe instructies; Twilio zet het gesprek bijvoorbeeld voort met de TwiML die je action-URL teruggeeft. In een streamingopzet loopt de audio continu via een WebSocket: de bidirectionele Media Streams van Twilio, gestart met de TwiML-instructies Connect en Stream, leveren base64-gecodeerde mu-law-audio op 8.000 Hz in één kanaal, en je server stuurt audio in hetzelfde formaat terug.",
          },
          {
            type: "p",
            text: "Daartussen zitten beheerde lagen. ConversationRelay van Twilio regelt bijvoorbeeld zelf spraak-naar-tekst en tekst-naar-spraak en wisselt tekst uit met je server via een beveiligde WebSocket, zodat je code met woorden werkt in plaats van met ruwe audio. Het heeft ook instellingen voor onderbrekingen, omdat bellers door bots heen praten; in een opzet met kale Media Streams stuurt je server een clear-bericht om gebufferde audio die nog niet is afgespeeld te laten vallen.",
          },
        ],
      },
      {
        heading: "IVR vs. conversationele voicebot",
        blocks: [
          {
            type: "table",
            caption: "Een IVR-menu vergeleken met een conversationele voicebot",
            head: ["", "Traditionele IVR", "Conversationele voicebot"],
            rows: [
              ["Invoer van de beller", "Toetsaanslagen (DTMF) in een vast menu", "Natuurlijke spraak, getranscribeerd en geïnterpreteerd"],
              [
                "Structuur",
                "Menuboom: „toets 1 voor facturen, 2 voor bestellingen”",
                "Open vraag zoals „Waarmee kan ik je helpen?”, gevolgd door intentieherkenning",
              ],
              [
                "Werkt goed voor",
                "Een klein aantal voorspelbare routeringsopties",
                "Veel verschillende verzoeken, en gegevens verzamelen in de eigen woorden van de beller",
              ],
              [
                "Zwakke plekken",
                "Lange menu's, en bellers wier probleem bij geen enkele optie past",
                "Verkeerd verstaan op lijnen met ruis; heeft bevestigingsstappen en terugvalopties nodig",
              ],
              [
                "Wat je te weten komt",
                "Welk menupad de beller heeft gekozen",
                "Een transcript, de herkende intentie en eventuele verzamelde velden",
              ],
            ],
          },
          {
            type: "p",
            text: "Je hoeft niet te kiezen. Een optie is een kort toetsmenu voor de taalkeuze, gevolgd door een conversationele stap. Met het Gather-verb van Twilio kan de invoer zo worden ingesteld dat zowel toetsaanslagen als spraak in dezelfde prompt worden geaccepteerd.",
          },
        ],
      },
      {
        heading: "Het gesprek overdragen aan een mens",
        blocks: [
          {
            type: "p",
            text: "Telefonieplatforms onderscheiden twee soorten doorverbinden. In de termen van Twilio voegt een cold transfer de nieuwe deelnemer toe aan het gesprek, maar haakt de initiator af voordat de nieuwe deelnemer opneemt; bij een warm transfer kunnen alle drie met elkaar praten voordat de initiator vertrekt. Twilio raadt aan gesprekken tussen klanten en medewerkers via een conference te verbinden, wat beide patronen mogelijk maakt.",
          },
          {
            type: "p",
            text: "Voor een bot is de nuttige versie van een warm transfer het doorgeven van context in plaats van praten: maak of werk een ticket bij met het transcript, de herkende intentie en de verzamelde gegevens voordat de medewerker opneemt, zodat die niet bij nul begint. Goede momenten om door te verbinden:",
          },
          {
            type: "ul",
            items: [
              "De beller vraagt om een mens — honoreer dat meteen, niet pas na nog twee vragen.",
              "De bot heeft de beller twee keer achter elkaar verkeerd begrepen.",
              "Het verzoek gaat over betalingen, klachten of iets anders waarover de bot niet mag beslissen.",
              "De beller is een bekende klant met hoge prioriteit, als je routering daar onderscheid in maakt.",
            ],
          },
          {
            type: "p",
            text: "In Zendesk kan een externe voice-AI-agent een gesprek eerst aannemen en via een SIP-IN-lijn escaleren naar een Zendesk-medewerker. De bot kan een ticket aanmaken en dat aan het gesprek koppelen door het ticketnummer mee te geven in de SIP-header X-Zendesk-Ticket-Id; Zendesk authenticeert SIP-IN-gesprekken met IP-toegangslijsten (access control lists). Zendesk biedt ook eigen voice-AI-agents, die bij escalatie het transcript, een door AI gegenereerde samenvatting en de herkende intentie aan het ticket toevoegen.",
          },
        ],
      },
      {
        heading: "Regelgeving: wat geldt voor voicebots",
        blocks: [
          {
            type: "p",
            text: "Verenigde Staten. In februari 2024 vaardigde de FCC een Declaratory Ruling (FCC 24-17) uit die bevestigt dat de beperkingen van de TCPA voor gesprekken met een „artificial or prerecorded voice” ook gelden voor huidige AI-technologieën die menselijke stemmen genereren. Gesprekken daarmee vereisen dus doorgaans voorafgaande uitdrukkelijke toestemming van de gebelde persoon, tenzij er een noodsituatie of een uitzondering van toepassing is. De uitspraak gaat over gesprekken naar consumenten, zoals robocalls. Een bot die gesprekken aanneemt die je klanten naar jou voeren, is een andere situatie, maar alle uitgaande gesprekken die de bot voert — terugbelverzoeken, herinneringen, enquêtes — vallen onder deze regels.",
          },
          {
            type: "p",
            text: "Europese Unie. Artikel 50 van de AI-verordening geldt vanaf 2 augustus 2026 en vereist dat AI-systemen die rechtstreeks met mensen communiceren zo worden ontworpen dat die mensen weten dat ze met AI te maken hebben, tenzij dat duidelijk is. Volgens de FAQ van de Commissie moeten mensen vanaf het begin van de eerste interactie worden geïnformeerd. Voor een voicebot is het praktische antwoord een korte melding in de begroeting.",
          },
          {
            type: "note",
            text: "Dit is algemene informatie, geen juridisch advies. Voert je bot uitgaande gesprekken of werk je in een gereguleerde sector, controleer dan welke regels voor jou gelden.",
          },
        ],
      },
      {
        heading: "Ontwerpkeuzes die een voicebot maken of breken",
        blocks: [
          {
            type: "ul",
            items: [
              "Meld het en schep verwachtingen in één zin: het is een geautomatiseerde assistent, en hiermee kan hij helpen.",
              "Houd prompts kort en vraag één ding tegelijk; bellers kunnen niet terugscrollen.",
              "Lees nummers, e-mailadressen en order-ID's terug voordat je er iets mee doet.",
              "Vertel bellers hoe ze een mens bereiken, en zorg dat die route bij elke stap werkt.",
              "Leg elk gesprek vast in je helpdesk met het transcript en de uitkomst, zodat je ziet waarover mensen echt bellen.",
              "Plan voor buiten kantooruren: noteer de gegevens en maak een ticket aan, en beloof alleen een terugbelactie die iemand ook echt uitvoert.",
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab voicebots bouwt",
        blocks: [
          {
            type: "p",
            text: "Het Voice Bot-pakket van TascaLab omvat inkomende gesprekken, triage en overdracht aan je team, voor een eenmalige prijs van 1.100–1.600 USD. De bot koppelt met de tools die je al gebruikt — Zendesk, Freshdesk, Jira, Slack of interne systemen — via API's en webhooks, zodat de uitkomsten van gesprekken binnenkomen als tickets of berichten die je team al in de gaten houdt. Hij is gebouwd als filter vóór je team, niet als vervanging ervan.",
          },
          {
            type: "p",
            text: "De meeste projecten duren 1–3 weken. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en je kunt beginnen met een gratis audit-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen een IVR en een AI-voicebot?",
        a: "Een IVR leidt bellers door een vast menu, meestal met toetsaanslagen (DTMF). Een conversationele voicebot transcribeert wat de beller zegt, bepaalt de intentie en kan antwoorden, gegevens verzamelen of het gesprek doorverbinden.",
      },
      {
        q: "Kan een voicebot gesprekken doorverbinden met een live medewerker?",
        a: "Ja. Telefonieplatforms ondersteunen cold transfers, waarbij de bot afhaakt voordat de medewerker opneemt, en warm transfers, waarbij de deelnemers elkaar overlappen. In Zendesk kan een externe voice-AI-agent via een SIP-IN-lijn escaleren naar een live medewerker.",
      },
      {
        q: "Verbiedt de FCC AI-voicebots?",
        a: "Nee. Volgens de uitspraak van februari 2024 gelden AI-gegenereerde stemmen als „artificial” onder de TCPA, dus gesprekken daarmee vereisen doorgaans voorafgaande uitdrukkelijke toestemming van de gebelde persoon. Het gaat om gesprekken naar consumenten, dus het is vooral van belang als je bot uitgaande gesprekken voert.",
      },
      {
        q: "Moet ik bellers vertellen dat ze met een bot spreken?",
        a: "In de EU vereist artikel 50 van de AI-verordening vanaf 2 augustus 2026 dat mensen worden geïnformeerd als ze rechtstreeks met een AI-systeem communiceren, tenzij dat duidelijk is. Een melding van één zin in de begroeting is de eenvoudige manier om dat te regelen.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — TwiML Voice: Gather",
        url: "https://www.twilio.com/docs/voice/twiml/gather",
      },
      {
        label: "Twilio Docs — Media Streams Overview",
        url: "https://www.twilio.com/docs/voice/media-streams",
      },
      {
        label: "Twilio Docs — TwiML Voice: ConversationRelay",
        url: "https://www.twilio.com/docs/voice/twiml/connect/conversationrelay",
      },
      {
        label: "Twilio Docs — Call Control Concepts (warm and cold transfer)",
        url: "https://www.twilio.com/docs/taskrouter/contact-center-blueprint/call-control-concepts",
      },
      {
        label: "Zendesk Help Center — Connecting an external AI agent using a SIP-IN line",
        url: "https://support.zendesk.com/hc/en-us/articles/8397061704474-Connecting-an-external-AI-agent-using-a-SIP-IN-line",
      },
      {
        label: "Zendesk Help Center — Announcing the general availability of voice AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11183058023450-Announcing-the-general-availability-of-voice-AI-agents",
      },
      {
        label: "FCC — Declaratory Ruling FCC 24-17 (AI-generated voices under the TCPA)",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Ticket routing automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ticket-routing-automation",
    slug: "ticketroutering-automatiseren",
    category: "services",
    navLabel: "Ticketroutering automatiseren",
    primaryKeyword: "ticketroutering automatiseren",
    title: "Ticketroutering automatiseren: methodes & opzet | TascaLab",
    description:
      "Ticketroutering automatiseren: op regels, round-robin, op werklast en op vaardigheden, AI-triage, en hoe Zendesk, Freshdesk en Jira het aanpakken.",
    h1: "Ticketroutering automatiseren: methodes, tools en opzet",
    intro:
      "Geautomatiseerde ticketroutering wijst elk binnenkomend ticket toe aan de juiste groep of medewerker, zonder dat iemand de wachtrij handmatig hoeft te sorteren. Het draait om twee beslissingen — waar het ticket over gaat (onderwerp, taal, prioriteit, klant) en wie het moet oppakken — genomen met methodes zoals regels, round-robin, routering op werklast of op vaardigheden. Zendesk, Freshdesk en Jira Service Management ondersteunen dit allemaal standaard.",
    keyFacts: [
      "Omnichannel routing in Zendesk wijst standaard toe aan de medewerker met de meeste vrije capaciteit; round robin is de alternatieve methode.",
      "De Omniroute-engine van Freshdesk zit achter de toewijzing van tickets via round-robin, op werklast en op vaardigheden.",
      "De assign-actie van Jira automation kan werk verdelen op basis van gelijke werklast, round-robin of willekeurige selectie.",
      "Intelligent triage van Zendesk classificeert nieuwe tickets op intentie, sentiment, taal en entiteiten, en triggers kunnen op basis van de resultaten routeren.",
    ],
    sections: [
      {
        heading: "Twee stappen: eerst categoriseren, dan toewijzen",
        blocks: [
          {
            type: "p",
            text: "Routering gaat meestal mis bij de eerste stap. Als tickets binnenkomen zonder betrouwbare categorie, stuurt zelfs een goede toewijzingsmethode ze naar de verkeerde mensen. Behandel routering daarom als twee aparte beslissingen: wat is dit ticket, en wie moet het oppakken — eerst de groep, dan de medewerker. Signalen die je kunt gebruiken om een ticket te categoriseren:",
          },
          {
            type: "ul",
            items: [
              "Ingang: via welk e-mailadres, webformulier, telefoonnummer of chatwidget het ticket binnenkwam.",
              "Formuliervelden: een verzoektype of keuzelijst die de klant heeft geselecteerd.",
              "Gegevens van de aanvrager: de organisatie, het abonnement of een VIP-tag bij de gebruiker.",
              "Inhoud: trefwoorden in het onderwerp of de omschrijving, of een AI-classificatie van intentie, taal en sentiment.",
            ],
          },
          {
            type: "p",
            text: "AI-classificatie zit inmiddels ingebouwd in de grote helpdesks. Intelligent triage van Zendesk classificeert nieuwe tickets op intentie, sentiment, taal en entiteiten op basis van het onderwerp en de eerste openbare reactie, en voegt de resultaten toe als ticketvelden die triggers, weergaven en routering kunnen gebruiken. Behandel het als elk ander signaal: controleer een steekproef van de classificaties voordat je erop gaat routeren.",
          },
        ],
      },
      {
        heading: "Routeringsmethodes vergeleken",
        blocks: [
          {
            type: "table",
            caption: "Gangbare methodes voor ticketroutering",
            head: ["Methode", "Hoe de behandelaar wordt gekozen", "Geschikt voor", "Let op"],
            rows: [
              [
                "Op regels",
                "Als/dan-voorwaarden op kanaal, formulier, trefwoorden of aanvrager bepalen de groep, medewerker of prioriteit",
                "Stabiele categorieën, VIP-afhandeling, wachtrijen per taal",
                "Overlappende regels en de volgorde van regels; regels verouderen als producten veranderen",
              ],
              [
                "Round-robin",
                "De volgende beschikbare medewerker op de beurt",
                "Vergelijkbare tickets, afgehandeld door medewerkers met vergelijkbare vaardigheden",
                "Negeert de complexiteit van tickets, tenzij gecombineerd met capaciteitslimieten",
              ],
              [
                "Op werklast",
                "De medewerker met de meeste vrije capaciteit of de minste openstaande tickets",
                "Tickets die sterk verschillen in omvang; overbelasting voorkomen",
                "Hangt af van een correcte status van medewerkers en zinnige limieten",
              ],
              [
                "Op vaardigheden",
                "Een medewerker wiens vaardigheden passen bij de kenmerken van het ticket, zoals taal of product",
                "Specialistische en meertalige teams",
                "Tickets die bij geen enkele vaardigheid passen kunnen blijven liggen; je hebt een terugvaloptie nodig",
              ],
              [
                "AI-ondersteunde triage",
                "Een model voorspelt categorie, prioriteit of groep, waarna een van de methodes hierboven toewijst",
                "Grote volumes tickets met vrije tekst",
                "Verkeerde classificaties; controleer regelmatig steekproeven",
              ],
            ],
          },
          {
            type: "p",
            text: "In de praktijk worden deze methodes gestapeld: regels of AI bepalen de groep, en toewijzing via round-robin, op werklast of op vaardigheden kiest de medewerker binnen die groep.",
          },
        ],
      },
      {
        heading: "Hoe Zendesk, Freshdesk en Jira Service Management het doen",
        blocks: [
          {
            type: "table",
            caption: "Ingebouwde routeringsopties per helpdesk",
            head: ["Helpdesk", "Laag met regels", "Automatische toewijzing aan medewerkers"],
            rows: [
              [
                "Zendesk",
                "Triggers matchen voorwaarden zoals kanaal, organisatie of tags en stellen de Group of Assignee in",
                "Omnichannel routing gebruikt status, capaciteit en vaardigheden van medewerkers; standaard krijgt de meeste vrije capaciteit voorrang, met round robin als alternatief",
              ],
              [
                "Freshdesk",
                "Automatiseringsregels bij het aanmaken van tickets matchen aanvrager, onderwerp, omschrijving, tags, bron of formulier en wijzen een groep of medewerker toe",
                "Omniroute ondersteunt toewijzing via round-robin, op werklast en op vaardigheden",
              ],
              [
                "Jira Service Management",
                "Automatiseringsregels opgebouwd uit triggers, voorwaarden en acties",
                "De assign-actie verdeelt werk op basis van gelijke werklast, round-robin of willekeurige selectie",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. Omnichannel routing stuurt werk alleen naar medewerkers wier status hen in aanmerking laat komen voor dat kanaal, en capaciteitsregels beperken hoeveel tickets per kanaal een medewerker tegelijk heeft. Vaardigheden kunnen als verplicht of optioneel worden gemarkeerd: optionele vaardigheden vervallen na een skills-time-out zodat het ticket een bredere groep kan bereiken, terwijl verplichte vaardigheden nooit verlopen. De volgorde in de wachtrij hangt af van de leeftijd van het ticket, de prioriteit of de dichtstbijzijnde SLA-overschrijding, afhankelijk van je abonnement en configuratie.",
          },
          {
            type: "p",
            text: "Freshdesk. Standaard stoppen regels bij het aanmaken van tickets bij de eerste ingeschakelde regel waarvan de voorwaarden matchen, dus zet specifieke regels boven algemene; je kunt overschakelen naar het uitvoeren van alle matchende regels. Freshdesk raadt aan eerst een groep toe te wijzen en dan pas een medewerker, omdat een medewerker toewijzen zonder groep het ticket niet-toegewezen kan laten. Bij toewijzing op vaardigheden blijft een ticket dat bij geen enkele vaardigheid past niet-toegewezen tot iemand het toewijst, dus maak een terugvalvaardigheid aan met de groep als voorwaarde. Bij round-robin slaat Omniroute medewerkers over die hun limiet hebben bereikt en geeft het volgende ticket aan de medewerker wiens laatste toewijzing het langst geleden is.",
          },
          {
            type: "p",
            text: "Jira Service Management. Routering bouw je met automatiseringsregels: een trigger zoals een nieuw werkitem, voorwaarden op het verzoektype of velden, en acties zoals assign. Met de methode voor gelijke werklast krijgt iedereen een gelijk deel van de werkitems binnen een scope die je met JQL instelt; zonder JQL-beperking telt de regel toegewezen items in het hele project. Round-robin loopt de opgegeven personen op volgorde af.",
          },
        ],
      },
      {
        heading: "Routering opzetten die standhoudt",
        blocks: [
          {
            type: "ol",
            items: [
              "Bekijk een paar weken aan recente tickets: maak een lijst van de belangrijkste categorieën en noteer wie elk ticket daadwerkelijk heeft opgelost.",
              "Definieer groepen vóór medewerkers. Routeer eerst naar het juiste team; de medewerker kiezen is een tweede stap.",
              "Gebruik eerst je meest betrouwbare signalen — ingangen en formuliervelden — en voeg voor de rest classificatie op trefwoorden of met AI toe.",
              "Kies per groep een toewijzingsmethode: round-robin voor uniform werk, op werklast waar de inspanning per ticket verschilt, op vaardigheden waar expertise ertoe doet.",
              "Voeg een terugvaloptie toe zodat niets niet-toegewezen blijft liggen: een vangnetregel, een terugvalvaardigheid of een triagewachtrij met een vaste eigenaar.",
              "Tag routeringsbeslissingen zodat je erover kunt rapporteren, en bekijk elke maand verkeerd gerouteerde tickets.",
            ],
          },
          {
            type: "note",
            text: "Routering bepaalt wie een ticket als eerste ziet, en beïnvloedt dus je reactietijden. Controleer na elke wijziging in de routering een paar weken je SLA-rapporten.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab ticketroutering inricht",
        blocks: [
          {
            type: "p",
            text: "De dienst Ticket Routing & Categorization van TascaLab (eenmalig 600–950 USD) werkt bovenop de helpdesk die je al hebt — Zendesk, Freshdesk of Jira — met de ingebouwde regels waar die volstaan, en API's, webhooks of Make/n8n waar dat niet zo is, bijvoorbeeld om tickets te categoriseren voordat je ingebouwde routering ze toewijst. Je hoeft niet van platform te wisselen.",
          },
          {
            type: "p",
            text: "De meeste projecten duren 1–3 weken. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en een gratis audit-gesprek van 30 minuten is een goed moment om je huidige wachtrij in kaart te brengen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen round-robin en routering op werklast?",
        a: "Round-robin geeft het volgende ticket aan de volgende medewerker op de beurt. Routering op werklast geeft het aan de medewerker met de meeste vrije capaciteit of de minste openstaande tickets, wat past bij teams waar tickets sterk verschillen in inspanning.",
      },
      {
        q: "Wat gebeurt er met tickets die bij geen enkele routeringsregel of vaardigheid passen?",
        a: "Dat hangt af van de tool. Bij toewijzing op vaardigheden in Freshdesk blijft een ticket zonder match niet-toegewezen tot iemand het toewijst, daarom raadt Freshdesk een terugvalvaardigheid aan. In Zendesk vervallen optionele vaardigheden na een time-out, terwijl verplichte vaardigheden nooit verlopen.",
      },
      {
        q: "Kan AI tickets categoriseren vóór de routering?",
        a: "Ja. Intelligent triage van Zendesk classificeert tickets bijvoorbeeld op intentie, sentiment en taal, en triggers kunnen op die velden routeren. Je kunt tickets ook met een extern model classificeren en het resultaat via de API naar een ticketveld schrijven.",
      },
      {
        q: "Moet ik van helpdesk wisselen om routering te automatiseren?",
        a: "Nee. Zendesk, Freshdesk en Jira Service Management hebben allemaal ingebouwde functies voor routering en toewijzing, en maatwerklogica kun je toevoegen via hun API's en webhooks.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Zendesk Help Center — About using skills to route tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/5833468891674-About-using-skills-to-route-tickets",
      },
      {
        label: "Zendesk Help Center — Workflow: Auto-assigning tickets to a specific agent or group",
        url: "https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group",
      },
      {
        label: "Zendesk Help Center — About intelligent triage",
        url: "https://support.zendesk.com/hc/en-us/articles/4964463770650-About-intelligent-triage",
      },
      {
        label: "Freshdesk Support — Configure Freshdesk Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/238979-ticket-assignments-with-freshdesk-omniroute-",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Support — Automation rules that run on ticket creation",
        url: "https://support.freshdesk.com/support/solutions/articles/37614-setting-up-automation-rules-to-run-on-ticket-creation",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["zendesk-automation", "freshdesk-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Automated customer support reporting
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "automated-support-reporting",
    slug: "klantenservice-rapportages-automatiseren",
    category: "services",
    navLabel: "Supportrapportages automatiseren",
    primaryKeyword: "klantenservice rapportages automatiseren",
    title: "Klantenservicerapportages automatiseren: gids | TascaLab",
    description:
      "Klantenservicerapportages automatiseren: welke metrics je volgt en hoe je rapporten uit Zendesk, Freshdesk of Jira inplant naar e-mail, Slack of Google Sheets.",
    h1: "Klantenservicerapportages automatiseren: metrics, planning en levering",
    intro:
      "Geautomatiseerde klantenservicerapportages brengen je belangrijkste cijfers — ticketvolume, reactie- en oplostijden, SLA-prestaties, achterstand — volgens een vast schema bij de juiste mensen, zonder dat iemand handmatig data exporteert. Begin met de ingebouwde geplande rapporten van je helpdesk; passen die niet, haal de data dan via de API naar Google Sheets, Slack of e-mail.",
    keyFacts: [
      "Zendesk Explore kan een gedeeld dashboard volgens een terugkerend schema mailen, in te stellen tot 12 maanden vooruit.",
      "In Freshdesk Analytics kunnen aangepaste rapporten worden ingepland; standaardrapporten (curated reports) moeten eerst worden gekloond.",
      "Met filterabonnementen in Jira worden opgeslagen zoekresultaten volgens schema gemaild, ook met timing op basis van cron; alleen de eerste 200 resultaten worden verstuurd.",
      "Een incoming webhook van Slack plaatst een bericht in een kanaal op basis van een eenvoudige JSON-payload.",
    ],
    sections: [
      {
        heading: "Waar supportteams meestal over rapporteren",
        blocks: [
          {
            type: "p",
            text: "Een bruikbaar supportrapport beantwoordt drie vragen: houden we het bij, zijn we snel genoeg, en zijn klanten tevreden? Deze metrics dekken het meeste af:",
          },
          {
            type: "table",
            caption: "Gangbare metrics voor klantenservicerapportages",
            head: ["Metric", "Wat het meet", "Handig voor"],
            rows: [
              [
                "Aangemaakte, opgeloste en openstaande tickets",
                "Volume, en of de achterstand groeit",
                "Dagelijkse check-ins, beslissingen over bezetting",
              ],
              [
                "Eerste reactietijd",
                "Tijd van het aanmaken van het ticket tot de eerste openbare reactie van een medewerker (definitie van Zendesk)",
                "Reactiesnelheid, SLA-bewaking",
              ],
              [
                "Eerste en volledige oplostijd",
                "Tijd tot de eerste oplossing vs. de laatste oplossing, die verschillen als tickets worden heropend",
                "Proceskwaliteit, problemen met heropende tickets opsporen",
              ],
              [
                "Gehaalde SLA's",
                "Aandeel tickets dat de doelen voor eerste reactie of oplossing haalde",
                "Waarschuwingen en wekelijkse samenvattingen",
              ],
              [
                "Oplossing in één keer (one-touch)",
                "Tickets opgelost met één enkele reactie van een medewerker",
                "Ontdekken wat geautomatiseerd of gedocumenteerd kan worden",
              ],
              [
                "Klanttevredenheid (CSAT)",
                "Antwoorden op enquêtes nadat een ticket is opgelost",
                "Wekelijkse of maandelijkse trends",
              ],
              [
                "Overdrachtspercentage van de bot",
                "Aandeel botgesprekken dat aan een mens wordt overgedragen, als je een bot gebruikt",
                "De bot en zijn kennis bijstellen",
              ],
            ],
          },
          {
            type: "p",
            text: "Definities zijn belangrijker dan het dashboard. Bepaal of je medianen of gemiddelden rapporteert, kantooruren of kalenderuren, en welke tickets meetellen (samengevoegd, spam, alleen bot). Leg de definities vast en houd ze stabiel, anders zeggen vergelijkingen van week tot week niets meer.",
          },
        ],
      },
      {
        heading: "Geplande rapporten die je helpdesk al biedt",
        blocks: [
          {
            type: "table",
            caption: "Ingebouwde opties voor geplande rapporten",
            head: ["Tool", "Hoe inplannen werkt", "Wat ontvangers krijgen", "Beperkingen om te kennen"],
            rows: [
              [
                "Zendesk Explore",
                "Op een gedeeld dashboard via Share > Schedule delivery; stel tijd, herhaling en een einddatum tot 12 maanden vooruit in",
                "Een e-mail met de export van het dashboard; formaten zijn onder meer Excel (één bestand per tabblad) en PNG",
                "Exports boven 25 MB komen verdeeld over meerdere e-mails binnen; de levering kan achterlopen op het geplande tijdstip",
              ],
              [
                "Freshdesk Analytics",
                "Plan een aangepast rapport in; kloon eerst een standaardrapport als je dat wilt inplannen",
                "Het rapport als pdf, of losse widgets als pdf of csv",
                "Widgets uit standaardrapporten kunnen niet worden ingepland",
              ],
              [
                "Jira-filterabonnementen",
                "Abonneer een gebruiker of groep op een opgeslagen filter, met een vooraf ingesteld schema of een cron-expressie",
                "Een e-mail met de werkitems die aan het filter voldoen",
                "Alleen de eerste 200 resultaten worden verstuurd; resultaten worden per ontvanger bepaald",
              ],
              [
                "Jira automation",
                "Een geplande regel zoekt werkitems op met JQL en verstuurt de lijst",
                "Een e-mail of een Slack-bericht",
                "Levering via Slack vereist een incoming webhook van Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Twee details in Zendesk zetten mensen vaak op het verkeerde been: ontvangers worden gegroepeerd op taal en tijdzone, met één e-mail per groep, en als een dashboard de hele vorige dag moet beslaan, raadt Zendesk aan het in te plannen om 2.00 uur 's nachts of later.",
          },
          {
            type: "p",
            text: "Ingebouwd inplannen is de juiste eerste stap. Het schiet tekort als je data uit meerdere tools op één plek nodig hebt, een korte samenvatting in plaats van een volledig dashboard, eigen berekeningen, of levering via Slack vanuit een tool die dat niet biedt.",
          },
        ],
      },
      {
        heading: "Data via API's naar Sheets, Slack of e-mail halen",
        blocks: [
          {
            type: "p",
            text: "Als ingebouwde rapporten niet passen, doet een kleine pipeline het werk. De stappen zijn hetzelfde, of je nu een script gebruikt of een automatiseringstool zoals Make of n8n:",
          },
          {
            type: "ol",
            items: [
              "Inplannen. Een tijdgestuurde trigger voert de workflow dagelijks, wekelijks of met elk gewenst interval uit.",
              "Ophalen. De workflow roept de helpdesk-API aan voor tickets die sinds de vorige run zijn gewijzigd. De Incremental Exports API van Zendesk is hiervoor gemaakt: hij geeft tickets terug die sinds een bepaalde starttijd zijn bijgewerkt, en Zendesk raadt de cursorgebaseerde versie aan voor consistentere prestaties.",
              "Berekenen. Bereken de metrics met je vastgelegde definities en vergelijk ze met de vorige periode of met je doelen.",
              "Opslaan. Voeg per dag of week een rij toe in Google Sheets. De methode spreadsheets.values.append van de Sheets API vindt de tabel in het bereik dat je meegeeft en voegt de nieuwe rijen toe na de laatste rij, zodat je een doorlopende historie krijgt om in grafieken te zetten.",
              "Leveren. Plaats een korte samenvatting in Slack via een incoming webhook — een unieke URL die een JSON-payload accepteert met de berichttekst en optioneel Block Kit-blokken — of verstuur hem per e-mail met een link naar de volledige sheet of het dashboard.",
            ],
          },
          {
            type: "note",
            text: "Behandel API-tokens en webhook-URL's als geheimen. Bewaar ze in de credential-opslag van je automatiseringstool, niet in de sheet of het berichtsjabloon.",
          },
        ],
      },
      {
        heading: "Rapporten die mensen echt lezen",
        blocks: [
          {
            type: "ul",
            items: [
              "Begin met een handvol cijfers en de verandering ten opzichte van de vorige periode; link naar de details in plaats van ze bij te voegen.",
              "Houd waarschuwingen en rapporten gescheiden. Een wekelijkse samenvatting is voor trends; een SLA-risico verdient een eigen bericht op het moment dat het speelt. De documentatie van Atlassian toont bijvoorbeeld een geplande Jira-automatiseringsregel die werkitems die hun SLA dreigen te overschrijden in Slack plaatst.",
              "Stuur elke doelgroep waar die op handelt: medewerkers hebben de wachtrij van vandaag nodig, managers wekelijkse trends.",
              "Geef elke metric een eigenaar die ongebruikelijke schommelingen kan verklaren.",
              "Evalueer het rapport na een maand en schrap alles wat niemand heeft gebruikt.",
            ],
          },
          {
            type: "p",
            text: "Een wekelijkse samenvatting voor een teamkanaal kan zo kort zijn als vijf regels, die elk deze week met vorige week vergelijken:",
          },
          {
            type: "ol",
            items: [
              "Aangemaakte, opgeloste en nog openstaande tickets, met de verandering in de achterstand.",
              "Mediane eerste reactietijd ten opzichte van je doel.",
              "Mediane volledige oplostijd, plus het aantal heropende tickets.",
              "Gehaalde SLA's, met links naar de tickets die de SLA overschreden.",
              "CSAT van de week en één opvallende opmerking, als je enquêtes die verzamelen.",
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab geautomatiseerde rapporten inricht",
        blocks: [
          {
            type: "p",
            text: "De dienst Automated Reports van TascaLab (eenmalig 500–900 USD) levert je supportmetrics volgens schema per e-mail of in Slack. Hij werkt bovenop Zendesk, Freshdesk, Jira en je interne tools via hun API's en Make of n8n, zodat er niets verandert aan hoe je team dagelijks werkt.",
          },
          {
            type: "p",
            text: "De meeste projecten duren 1–3 weken. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en je kunt beginnen met een gratis audit-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan Zendesk automatisch rapporten per e-mail versturen?",
        a: "Ja. In Zendesk Explore kun je leveringen van een gedeeld dashboard inplannen, de herhaling en ontvangers kiezen, en het schema tot 12 maanden laten lopen.",
      },
      {
        q: "Kan ik rapporten inplannen in Freshdesk?",
        a: "Ja, voor aangepaste rapporten in Freshdesk Analytics; standaardrapporten moeten eerst worden gekloond voordat je ze kunt inplannen. Rapporten worden als pdf verstuurd, en widgets kunnen als pdf of csv worden verstuurd.",
      },
      {
        q: "Hoe stuur ik data uit Jira Service Management volgens schema naar Slack?",
        a: "Gebruik een Jira-automatiseringsregel met een geplande trigger, een opzoeking van werkitems via JQL en een actie 'Send Slack message' die via een incoming webhook van Slack post.",
      },
      {
        q: "Welke metrics horen in een wekelijks supportrapport?",
        a: "Doorgaans ticketvolume en achterstand, eerste reactietijd, oplostijd, gehaalde SLA's en klanttevredenheid. Houd de definities vast, zodat de trend van week tot week iets betekent.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Scheduling dashboard deliveries",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843602714-Scheduling-dashboard-deliveries",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Developer Docs — Incremental Exports",
        url: "https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/",
      },
      {
        label: "Freshdesk Support — Scheduling reports in Analytics",
        url: "https://support.freshdesk.com/support/solutions/articles/240703-scheduling-reports-in-analytics",
      },
      {
        label: "Atlassian Support — Manage filters (filter subscriptions)",
        url: "https://support.atlassian.com/jira-software-cloud/docs/manage-filters/",
      },
      {
        label: "Atlassian Support — Automation rule that sends a list of issues about to breach via Slack",
        url: "https://support.atlassian.com/automation/kb/automation-rule-to-send-list-of-issues-that-are-about-to-breach-via-slack/",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Google for Developers — Sheets API: spreadsheets.values.append",
        url: "https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append",
      },
    ],
    related: ["customer-support-metrics", "slack-support-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Customer support email automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "customer-support-email-automation",
    slug: "klantenservice-e-mail-automatiseren",
    category: "services",
    navLabel: "Support-e-mail automatiseren",
    primaryKeyword: "klantenservice e-mail automatiseren",
    title: "Klantenservice-e-mail automatiseren: stappenplan | TascaLab",
    description:
      "Klantenservice-e-mail automatiseren: stuur je supportadres door naar Zendesk of Freshdesk, stel SPF en DKIM in, en bevestig, routeer en escaleer e-mails.",
    h1: "Klantenservice-e-mail automatiseren: van inbox tot beantwoord ticket",
    intro:
      "Met automatisering van klantenservice-e-mail wordt elk bericht aan je supportadres een ticket, krijgt de klant een ontvangstbevestiging, gaat het naar het juiste team en wordt het, waar dat veilig kan, beantwoord — terwijl mensen de gesprekken houden die oordeelsvermogen vragen. Je hebt geen nieuwe inbox nodig: stuur je bestaande adres door naar Zendesk of Freshdesk, richt je verzenddomein in zodat antwoorden aankomen, en voeg daarna triggers, classificatie en AI toe.",
    keyFacts: [
      "Elk Zendesk-account heeft een systeemsupportadres in de vorm support@jouwsubdomein.zendesk.com.",
      "Zendesk raadt automatisch doorsturen op het niveau van de mailserver aan, in plaats van doorsturen vanuit een e-mailprogramma.",
      "Freshdesk zet doorgestuurde e-mail pas om in tickets zodra de doorstuurregel actief is; Gmail- en Microsoft 365-mailboxen kunnen ook rechtstreeks worden gekoppeld.",
      "In Zendesk leidt het inschakelen van DKIM-ondertekening voordat de CNAME-records in de DNS staan tot afleverproblemen.",
      "De verouderde (legacy) e-mail-autoreplies met artikelen van Zendesk zijn vanaf 10 december 2026 niet meer beschikbaar.",
    ],
    sections: [
      {
        heading: "Stap 1: Maak van elke supportmail een ticket",
        blocks: [
          {
            type: "p",
            text: "Klanten blijven mailen naar het adres dat ze al kennen, zoals support@jouwbedrijf.nl. Achter de schermen stuurt die mailbox alles door naar je helpdesk, die voor elk bericht een ticket aanmaakt of bijwerkt. Voor de klant verandert er niets, en je team werkt niet langer vanuit een gedeelde inbox.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Elk account heeft een systeemsupportadres, support@jouwsubdomein.zendesk.com. Je voegt je eigen adres toe als supportadres, stelt doorsturen in bij je e-mailprovider en verifieert het daarna. Zendesk raadt automatisch doorsturen op serverniveau aan, niet handmatig doorsturen of automatisch doorsturen vanuit een e-mailprogramma, en merkt op dat het na het herstellen van een mislukte configuratie tot 48 uur kan duren voordat die wordt herkend.",
              "Freshdesk. Voeg het adres toe onder Admin > Channels > Email > New Support Email. Met de standaardmailserver van Freshworks maak je in je mailbox een doorstuurregel aan die mail naar het adres stuurt dat Freshdesk genereert; e-mails worden pas tickets als die regel bestaat. Je kunt ook een Gmail- of Microsoft 365-mailbox rechtstreeks koppelen door in te loggen.",
            ],
          },
          {
            type: "p",
            text: "Gebruik één adres per doel — bijvoorbeeld support@, billing@ en partners@ — in plaats van één verzameladres. Elk adres wordt later een gratis routeringssignaal.",
          },
          {
            type: "note",
            text: "Test met een bericht vanaf een extern adres. Zendesk schort e-mail op die binnenkomt vanaf een van je eigen supportadressen, omdat dat patroon mailloops kan veroorzaken.",
          },
        ],
      },
      {
        heading: "Stap 2: Zorg dat je antwoorden aankomen",
        blocks: [
          {
            type: "p",
            text: "Als de helpdesk antwoordt als support@jouwbedrijf.nl, verstuurt hij namens jouw domein, en ontvangende mailservers controleren of dat mag. Dat bewijs je met DNS-records: SPF somt de diensten op die namens je domein mogen versturen, en DKIM voegt een handtekening toe aan elk bericht. Het is een eenmalige klus voor degene die je DNS beheert.",
          },
          {
            type: "table",
            caption: "Verzenddomein instellen in Zendesk en Freshdesk",
            head: ["Helpdesk", "Record", "Wat je doet", "Let op"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "Voeg include:mail.zendesk.com toe aan het SPF-TXT-record van je domein",
                "Een domein kan maar één SPF-record hebben; als andere diensten namens je versturen, combineer ze dan in dat ene record",
              ],
              [
                "Zendesk",
                "DKIM",
                "Voeg voor elk extern domein de CNAME-records uit de DKIM-handleiding van Zendesk toe en schakel daarna digitale handtekeningen in via Admin Center",
                "Handtekeningen inschakelen voordat de CNAME-records bestaan leidt tot afleverproblemen",
              ],
              [
                "Freshdesk",
                "DKIM",
                "Publiceer onder Admin > Channels > Email > Advanced Settings > Configure DKIM de vier gegenereerde CNAME-records en klik daarna op 'Verify'",
                "Sommige DNS-providers, zoals GoDaddy, voegen je domein automatisch toe, dus vul alleen het hostvoorvoegsel in",
              ],
            ],
          },
          {
            type: "p",
            text: "De volgorde telt: eerst de records, dan inschakelen. Beheert een ander team of een bureau je DNS, stuur hun dan de exacte waarden uit de documentatie of het beheerscherm van je helpdesk in plaats van ze over te typen.",
          },
        ],
      },
      {
        heading: "Stap 3: Bevestigen, sorteren en routeren bij binnenkomst",
        blocks: [
          {
            type: "p",
            text: "Zodra de mail binnenstroomt, draaien de eerste automatiseringen op het moment dat een ticket wordt aangemaakt. In Zendesk komt de bevestigingsmail van een standaardtrigger, 'Notify requester and CCs of received request'. Pas de tekst aan zodat die de klant iets nuttigs vertelt:",
          },
          {
            type: "ul",
            items: [
              "Het ticketnummer, zodat de klant ernaar kan verwijzen.",
              "Wanneer de klant een antwoord kan verwachten — alleen als je dat kunt waarmaken.",
              "Links naar helpcenterartikelen over je meest gestelde vragen.",
              "Wat de klant kan meesturen voor snellere hulp, zoals een ordernummer of het e-mailadres van het account.",
            ],
          },
          {
            type: "p",
            text: "Daarna routeer je. Het eenvoudigste signaal is het adres waarnaar de e-mail is gestuurd. De gedocumenteerde workflow van Zendesk is een trigger met de voorwaarden 'Ticket Is Created' en 'Ticket Received at Is' je factuuradres, plus een actie die de groep instelt — gecombineerd met een weergave die die groep zijn tickets toont.",
          },
          {
            type: "p",
            text: "Daarna volgt routering op inhoud. Trefwoordregels op de onderwerpregel werken een tijdje en lopen dan stuk omdat klanten dingen anders formuleren. Een classificatiestap — een AI-model of een set regels die via de helpdesk-API draait — leest onderwerp en tekst, schrijft categorie, taal en urgentie naar ticketvelden, en haalt gegevens zoals ordernummers eruit zodat medewerkers die niet hoeven te zoeken. Je triggers of automatiseringsregels routeren vervolgens op die velden.",
          },
          {
            type: "note",
            text: "Automatische antwoorden kunnen heen en weer kaatsen tussen systemen. Zendesk schort inkomende berichten op met autoresponderheaders zoals Auto-Submitted, Precedence of X-Autoresponder, en als één afzender in korte tijd veel e-mails stuurt, schort het die op en zet het adres een uur op de blokkeerlijst. Controleer opgeschorte tickets regelmatig, zodat een echt bericht van een klant daar niet blijft liggen.",
          },
        ],
      },
      {
        heading: "Stap 4: Beantwoord de eenvoudige, laat mensen de rest doen",
        blocks: [
          {
            type: "p",
            text: "Veel supportmails stellen steeds dezelfde paar vragen. Zendesk loste dit lang op met autoreplies met artikelen: een e-mail die tot drie helpcenterartikelen aanbeveelt en de klant het verzoek laat sluiten. Die functie kreeg op 31 juli 2025 de legacy-status en is vanaf 10 december 2026 niet meer beschikbaar. De vervanger van Zendesk zijn AI-agents, die generatieve AI-antwoorden geven via messaging, e-mail en webformulieren. Vertrouw je nog op autoreplies, plan de overstap dan nu.",
          },
          {
            type: "p",
            text: "Elk AI-antwoord is maar zo goed als de artikelen waarop het steunt, dus breng de kennisbank op orde voordat je automatische antwoorden inschakelt. Bepaal daarna waar de automatisering stopt. Draag het gesprek over aan een mens als:",
          },
          {
            type: "ul",
            items: [
              "De klant om een mens vraagt, of antwoordt dat het antwoord niet hielp.",
              "Het onderwerp facturatie, terugbetalingen, juridische zaken, beveiliging of een klacht is.",
              "De toon boos is, of het gesprek al meerdere keren heen en weer is gegaan.",
              "Er meerdere mensen in CC staan, of de e-mail deel uitmaakt van een lopend accountgesprek.",
              "Antwoorden zou betekenen dat een account wordt gewijzigd dat de automatisering niet kan verifiëren.",
            ],
          },
          {
            type: "p",
            text: "Maak de overdracht zichtbaar: tag het ticket, verhoog zo nodig de prioriteit, en houd alles in één ticket zodat de medewerker ziet wat de klant al heeft ontvangen.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab support-e-mail automatiseert",
        blocks: [
          {
            type: "p",
            text: "TascaLab richt dit in bovenop de helpdesk die je al gebruikt — Zendesk, Freshdesk of Jira — met ingebouwde triggers en regels waar die volstaan, en API's, webhooks of Make/n8n waar dat niet zo is. Je hoeft niet van platform te wisselen. Het classificeren en routeren van inkomende e-mail valt onder de dienst Ticket Routing & Categorization (eenmalig 600–950 USD); workflows met meerdere stappen, zoals een ordernummer uit een e-mail lezen en dat in een ander systeem opzoeken, vallen onder Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "De meeste projecten duren 1–3 weken. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en een gratis audit-gesprek van 30 minuten is een goed moment om je huidige e-mailstroom in kaart te brengen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik mijn eigen supportadres houden?",
        a: "Ja. In Zendesk voeg je het toe als supportadres en stuur je de mail door naar Zendesk, bij voorkeur met automatisch doorsturen op serverniveau. In Freshdesk stuur je het door naar het adres dat Freshdesk genereert, of koppel je een Gmail- of Microsoft 365-mailbox rechtstreeks.",
      },
      {
        q: "Heb ik SPF en DKIM nodig voor helpdeskmail?",
        a: "Als de helpdesk antwoorden verstuurt vanaf je eigen domein, stel dan beide in. Zendesk vraagt je include:mail.zendesk.com aan je SPF-record toe te voegen en zijn CNAME-records toe te voegen voordat je DKIM-ondertekening inschakelt. Freshdesk genereert vier DKIM-CNAME-records die jij publiceert en verifieert.",
      },
      {
        q: "Waarom werd een e-mail van een klant geen ticket in Zendesk?",
        a: "Controleer de opgeschorte tickets. Zendesk schort berichten op die het herkent als automatische antwoorden, berichten die zijn verstuurd vanaf een van je eigen supportadressen, en grote hoeveelheden e-mail van één afzender in korte tijd.",
      },
      {
        q: "Zijn de autoreplies met artikelen van Zendesk nog beschikbaar?",
        a: "Het is sinds 31 juli 2025 een legacy-functie en is vanaf 10 december 2026 niet meer beschikbaar. Zendesk verwijst klanten naar AI-agents, die kunnen antwoorden via e-mail en ook via messaging en webformulieren.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Forwarding incoming email from your existing email address to Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408886828698-Forwarding-incoming-email-from-your-existing-email-address-to-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Allowing Zendesk to send email on behalf of your email domain",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832543770-Allowing-Zendesk-to-send-email-on-behalf-of-your-email-domain",
      },
      {
        label: "Zendesk Help Center — Digitally signing your email with DKIM",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822303386-Digitally-signing-your-email-with-DKIM",
      },
      {
        label: "Zendesk Help Center — Causes for ticket suspension",
        url: "https://support.zendesk.com/hc/en-us/articles/4408828416282-Causes-for-ticket-suspension",
      },
      {
        label: "Zendesk Help Center — Workflow: Route tickets to groups based on support address",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823834394-Workflow-Route-tickets-to-groups-based-on-support-address",
      },
      {
        label: "Zendesk Help Center — Configuring email autoreplies to recommend articles",
        url: "https://support.zendesk.com/hc/en-us/articles/4408825385242-Configuring-email-autoreplies-to-recommend-articles",
      },
      {
        label: "Freshdesk Support — Converting support emails into tickets",
        url: "https://support.freshdesk.com/support/solutions/articles/37541-set-up-your-support-email",
      },
      {
        label: "Freshdesk Support — Email domain verification using DKIM records",
        url: "https://support.freshdesk.com/support/solutions/articles/223779-configuring-dkim-records",
      },
    ],
    related: ["ticket-routing-automation", "ai-knowledge-base-for-customer-support", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. AI knowledge base for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-knowledge-base-for-customer-support",
    slug: "ai-kennisbank-klantenservice",
    category: "services",
    navLabel: "AI-kennisbank voor support",
    primaryKeyword: "AI kennisbank klantenservice",
    title: "AI-kennisbank voor klantenservice: gids | TascaLab",
    description:
      "Hoe een AI-kennisbank voor klantenservice werkt, hoe je artikelen structureert in Zendesk, Freshdesk of Confluence, ze actueel houdt en deflectie meet.",
    h1: "AI-kennisbank voor klantenservice: hoe het werkt en hoe je er een opbouwt",
    intro:
      "Een AI-kennisbank voor klantenservice is een helpcenter dat zo is geschreven dat zowel klanten als AI-agents er vragen mee kunnen beantwoorden. De AI zoekt de relevante artikelen op en bouwt daaruit zijn antwoord, dus zijn antwoorden zijn maar zo juist, volledig en actueel als je artikelen. Je kunt hem opbouwen in de tool die je al hebt: het helpcenter van Zendesk, de kennisbank van Freshdesk of Confluence-spaces die aan Jira Service Management zijn gekoppeld.",
    keyFacts: [
      "Retrieval-augmented generation vindt relevante passages in je documenten en voegt ze toe aan de prompt, zodat het model antwoordt vanuit jouw content.",
      "In een Zendesk-helpcenter staan artikelen in secties binnen categorieën; ze kunnen niet rechtstreeks in een categorie staan.",
      "Freshdesk deelt zijn kennisbank in met categorieën, mappen en artikelen.",
      "Confluence-spaces die aan een kennisbank van Jira Service Management zijn gekoppeld, voeden het helpcenter, de zoekfunctie van de kennisbank en de virtual service agent.",
      "Jira Service Management telt een verzoek als gedeflecteerd als een klant bij het indienen een voorgesteld artikel kiest en het als nuttig markeert.",
    ],
    sections: [
      {
        heading: "Hoe AI-antwoorden putten uit je artikelen",
        blocks: [
          {
            type: "p",
            text: "De meeste AI-supportagents gebruiken een vorm van retrieval-augmented generation (RAG). AWS beschrijft RAG als een techniek die een groot taalmodel aanvult met externe data, zoals de interne documenten van een bedrijf. In grote lijnen:",
          },
          {
            type: "ol",
            items: [
              "Je documenten worden omgezet in embeddings — numerieke representaties van de tekst — en opgeslagen in een vectordatabase. Dit is een eenmalige stap bij de inrichting.",
              "Een klant stelt een vraag in natuurlijke taal.",
              "Het systeem voert een similarity search uit op de vectordatabase en voegt de gevonden passages als context toe aan de prompt.",
              "Het taalmodel schrijft zijn antwoord op basis van die context.",
            ],
          },
          {
            type: "p",
            text: "Daar volgen twee dingen uit. De AI kan niet antwoorden vanuit wat niet is opgeschreven, en hij werkt met stukken van artikelen in plaats van met je hele helpcenter. De richtlijnen van Freshdesk zeggen hetzelfde: Freddy AI haalt artikelen los van elkaar op en gebruikt ze zo, dus als een artikel definities of context weglaat, kan de AI aannames doen of onvolledige antwoorden geven.",
          },
          {
            type: "p",
            text: "De grote helpdesks hebben dit ingebouwd. AI-agents van Zendesk kunnen generatieve antwoorden geven via messaging en e-mail, gekoppeld aan meerdere kennisbronnen, met zoekregels die bepalen welke bronnen onder specifieke voorwaarden worden doorzocht. In Jira Service Management verschijnen artikelen uit een gekoppelde Confluence-space in het helpcenter, in de zoekfunctie van de kennisbank en in de virtual service agent.",
          },
        ],
      },
      {
        heading: "Waar de kennisbank in je helpdesk staat",
        blocks: [
          {
            type: "table",
            caption: "Opbouw van de kennisbank per helpdesk",
            head: ["Helpdesk", "Waar artikelen staan", "Hoe ze zijn ingedeeld", "Wat ze gebruikt"],
            rows: [
              [
                "Zendesk",
                "Helpcenter",
                "Categorieën bevatten secties, en secties bevatten artikelen; secties kunnen worden genest, maar artikelen kunnen niet rechtstreeks in een categorie staan",
                "Klanten die bladeren en zoeken, en AI-agents met generatieve antwoorden",
              ],
              [
                "Freshdesk",
                "Kennisbank (solution articles)",
                "Categorieën bevatten mappen, en mappen bevatten artikelen; mappen kunnen worden genest",
                "Klanten op het portaal, en Freddy AI",
              ],
              [
                "Jira Service Management",
                "Confluence-spaces die aan de kennisbank van het serviceproject zijn gekoppeld",
                "Pagina's in de gekoppelde Confluence-space",
                "Het helpcenter, de zoekfunctie van de kennisbank en de virtual service agent",
              ],
            ],
          },
          {
            type: "p",
            text: "Eén praktisch detail: in Freshdesk verschijnt een categorie of map pas op het klantportaal als er minstens één artikel in is gepubliceerd. Voor AI-antwoorden is wat elk artikel zegt belangrijker dan waar het staat; de hiërarchie helpt vooral mensen die bladeren.",
          },
        ],
      },
      {
        heading: "Schrijf artikelen waaruit een AI kan antwoorden",
        blocks: [
          {
            type: "p",
            text: "Freshdesk publiceert richtlijnen voor het schrijven van kenniscontent voor Freddy AI, en die gelden voor elke AI die met retrieval werkt:",
          },
          {
            type: "ul",
            items: [
              "Beperk elk artikel tot één onderwerp, en vermeld wanneer de informatie wel en niet van toepassing is.",
              "Link naar gerelateerde artikelen in plaats van bijkomende workflows in te voegen.",
              "Splits inrichting, gebruik en probleemoplossing in aparte artikelen als ze verschillende doelen dienen.",
              "Maak elk artikel op zichzelf staand: definieer de begrippen en context waarop het steunt.",
              "Gebruik één kop op het hoogste niveau voor het doel van het artikel, en lagere koppen om taken, opties of concepten te scheiden.",
            ],
          },
          {
            type: "p",
            text: "Voeg er een paar eigen gewoontes aan toe. Geef artikelen een titel met de woorden die klanten echt gebruiken, niet met interne productnamen. Zet het antwoord in de eerste regels, en daarna de stappen. Houd exacte waarden — limieten, deadlines, prijzen — op één plek bij en link daarnaar, zodat een wijziging niet twee verschillende getallen achterlaat waartussen de AI moet kiezen. En begin waar de tickets zitten: een paar weken aan tickets, gegroepeerd per onderwerp, laat zien welke artikelen je als eerste moet schrijven of repareren.",
          },
        ],
      },
      {
        heading: "Houd de content actueel",
        blocks: [
          {
            type: "p",
            text: "Een verouderd artikel wordt een zelfverzekerd, fout AI-antwoord, dus geef elk artikel een eigenaar en een reviewritme. Zendesk ondersteunt dit met artikelverificatie: kennisbeheerders stellen verificatieregels in die artikelen voor review markeren op basis van filters en intervallen — bijvoorbeeld elke drie maanden voor artikelen met een bepaald label, in een bepaalde categorie of die al een tijd niet zijn bijgewerkt — en eigenaren van artikelen krijgen e-mailherinneringen om ze te verifiëren. Controleer of je abonnement dit bevat voordat je erop rekent.",
          },
          {
            type: "p",
            text: "Geplande reviews vangen langzame veroudering op. Deze gebeurtenissen moeten direct tot een update leiden:",
          },
          {
            type: "ul",
            items: [
              "Een wijziging in product, prijzen of beleid: werk de artikelen bij op of vóór de releasedag.",
              "Een medewerker beantwoordt een ticket dat de kennisbank niet dekt: maak een artikel aan of markeer het.",
              "De AI draagt een gesprek over aan een mens omdat hij geen antwoord kon geven: bekijk die vraag.",
              "Twee artikelen geven verschillende antwoorden: voeg ze samen en zet het dubbele artikel offline.",
            ],
          },
        ],
      },
      {
        heading: "Meet selfservice",
        blocks: [
          {
            type: "p",
            text: "Meet of artikelen tickets voorkomen, niet alleen of mensen ze lezen. Houd de definities elke maand gelijk, zodat de trend iets betekent.",
          },
          {
            type: "table",
            caption: "Selfservicemetingen die het volgen waard zijn",
            head: ["Meting", "Wat het je vertelt", "Hoe je eraan komt"],
            rows: [
              [
                "Gedeflecteerde verzoeken",
                "Klanten die een antwoord vonden tijdens het indienen van een verzoek",
                "Jira Service Management telt een verzoek als gedeflecteerd als de klant tijdens het indienen een voorgesteld artikel selecteert en het als nuttig markeert",
              ],
              [
                "Verzoeken opgelost met een artikel",
                "Hoe vaak medewerkers verzoeken sluiten met content uit de kennisbank",
                "Het rapport 'Requests resolved' van Jira Service Management volgt verzoeken die zijn gesloten met of zonder kennisbankartikel",
              ],
              [
                "Selfserviceratio",
                "Gebruik van het helpcenter per ticket",
                "Deel het aantal helpcentersessies door het aantal aangemaakte tickets in dezelfde periode, en volg de trend",
              ],
              [
                "AI-overdrachtspercentage",
                "Aandeel AI-gesprekken dat aan een mens wordt overgedragen",
                "De analytics van je AI-agent, of een tag die bij elke overdracht wordt toegevoegd",
              ],
              [
                "Tickets over gedocumenteerde onderwerpen",
                "Of bestaande artikelen tickets echt voorkomen",
                "Neem elke maand een steekproef van tickets en controleer of een artikel de vraag al behandelde",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hoe TascaLab je kennisbank aan het werk zet",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt chatbots bovenop de tools die je al gebruikt — Zendesk, Freshdesk, Jira, Slack of interne systemen — via API's, webhooks en Make of n8n, zodat je kennisbank blijft waar hij is. De Starter Chat Bot (eenmalig 350–450 USD) dekt 1–2 kanalen en de Standard Chat Bot (500–650 USD) dekt er 3–5, verdeeld over je website, telefoon, WhatsApp, Telegram, Facebook Messenger en Instagram. Onderhoudsworkflows, zoals reviewherinneringen voor verouderde artikelen, vallen onder Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "De meeste projecten duren 1–3 weken. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en je kunt beginnen met een gratis audit-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is retrieval-augmented generation in klantenservice?",
        a: "Het is een manier waarop een AI antwoordt vanuit je eigen content. Relevante passages worden uit je documenten opgehaald, meestal via een similarity search op een vectordatabase, en aan de prompt toegevoegd, zodat het taalmodel zijn antwoord schrijft vanuit die context.",
      },
      {
        q: "Kan Jira Service Management Confluence als kennisbank gebruiken?",
        a: "Ja. Je koppelt een Confluence-space aan de kennisbank van het serviceproject, en de artikelen ervan verschijnen in het helpcenter, in de zoekfunctie van de kennisbank en in de virtual service agent.",
      },
      {
        q: "Hoe houd ik artikelen in de kennisbank van Zendesk up-to-date?",
        a: "Gebruik artikelverificatie als je abonnement dat bevat. Verificatieregels markeren artikelen voor review op basis van filters en intervallen, en eigenaren van artikelen krijgen e-mailherinneringen om ze te verifiëren.",
      },
      {
        q: "Hoe moeten artikelen zijn opgebouwd voor AI-antwoorden?",
        a: "Eén onderwerp per artikel, op zichzelf staand, met duidelijke koppen. Freshdesk merkt op dat Freddy AI artikelen los van elkaar ophaalt, dus ontbrekende definities of context kunnen leiden tot aannames of onvolledige antwoorden.",
      },
    ],
    sources: [
      {
        label: "AWS Prescriptive Guidance — Understanding Retrieval Augmented Generation",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/what-is-rag.html",
      },
      {
        label: "Zendesk Help Center — Organizing knowledge base content in categories and sections",
        url: "https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections",
      },
      {
        label: "Zendesk Help Center — Generative replies in AI agents FAQs",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756420506-Generative-replies-in-AI-agents-FAQs",
      },
      {
        label: "Zendesk Help Center — About article verification and how it works",
        url: "https://support.zendesk.com/hc/en-us/articles/5588297664666-About-article-verification-and-how-it-works",
      },
      {
        label: "Freshdesk Support — Create categories, folders and articles in your knowledge base",
        url: "https://support.freshdesk.com/support/solutions/articles/37611-create-and-organize-knowledge-base",
      },
      {
        label: "Freshdesk Support — Write Freddy AI–optimised knowledge content",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011859-write-freddy-ai-optimised-knowledge-content",
      },
      {
        label: "Atlassian Support — Link a Confluence space to your knowledge base",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/link-confluence-spaces-to-your-service-project/",
      },
      {
        label: "Atlassian Support — Find out how your knowledge base articles are performing",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/how-are-my-knowledge-base-articles-performing/",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "ticket-deflection", "customer-support-email-automation"],
    updated: "2026-10-19",
  },
];
