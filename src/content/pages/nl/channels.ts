import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "whatsapp-klantenservice-bot",
    category: "channels",
    navLabel: "WhatsApp-supportbot",
    primaryKeyword: "WhatsApp klantenservice bot",
    title: "WhatsApp-klantenservicebot: regels, opzet en overdracht",
    description:
      "Zo werkt een WhatsApp-klantenservicebot: Business Platform vs app, het 24-uursvenster, templates, opt-in, prijsbasis en de koppeling met je helpdesk.",
    h1: "WhatsApp-klantenservicebot: hoe hij werkt en wat Meta toestaat",
    intro:
      "Een WhatsApp-klantenservicebot draait op het WhatsApp Business Platform (Cloud API), niet op de gratis WhatsApp Business-app. Hij kan vrij antwoorden gedurende 24 uur na elk bericht van een klant; daarna kun je de klant alleen nog bereiken met een vooraf goedgekeurde template. Bouw de bot rond dat venster, je opt-inproces en een nette overdracht aan je helpdesk.",
    keyFacts: [
      "Als een klant je een bericht stuurt of belt, opent een klantenservicevenster van 24 uur dat bij elk nieuw bericht opnieuw begint.",
      "Binnen het venster kun je vrije serviceberichten sturen zonder voorafgaande goedkeuring.",
      "Buiten het venster zijn templates het enige berichttype dat je kunt versturen.",
      "Voordat je mensen berichten stuurt, heb je een opt-in nodig waarin je bedrijf duidelijk wordt genoemd.",
      "Meta rekent per afgeleverd bericht, op basis van de berichtcategorie en het land van de ontvanger.",
    ],
    sections: [
      {
        heading: "WhatsApp Business-app vs WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp biedt twee producten voor bedrijven, en maar één daarvan is gemaakt voor bots. De WhatsApp Business-app is een gratis app voor kleine bedrijven die klanten met de hand antwoorden en eenvoudige automatische antwoorden gebruiken. Het WhatsApp Business Platform is een set API's voor middelgrote en grotere bedrijven. Cloud API is het belangrijkste messagingproduct ervan, en daar koppelen chatbots, helpdesks en CRM's mee.",
          },
          {
            type: "table",
            caption: "App vs Platform in één oogopslag",
            head: ["", "WhatsApp Business-app", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Gemaakt voor", "Kleine bedrijven die met de hand antwoorden", "Middelgrote en grote bedrijven die bots en supporttools koppelen"],
              ["Kosten", "Gratis te downloaden en te gebruiken", "Kosten per bericht, vastgesteld door Meta"],
              ["Inrichting", "Installeren via een appstore", "Ontwikkelaarsresources of een Business Messaging Partner"],
              ["Automatisering", "Eenvoudige automatische antwoorden", "Chatbots, berichtenflows, CRM- en helpdeskintegraties"],
            ],
          },
          {
            type: "p",
            text: "Gebruik je de app al, dan ondersteunt Meta het onboarden van een bestaand nummer van de WhatsApp Business-app op Cloud API, zodat beide op hetzelfde nummer kunnen draaien. Na de onboarding vallen berichten die vanuit de app worden verstuurd niet onder het klantenservicevenster, berichten via Cloud API wel, en sommige functies van de app, zoals groepschats, worden aan de API-kant niet ondersteund. Controleer of je helpdesk deze opzet ondersteunt voordat je erop vertrouwt.",
          },
        ],
      },
      {
        heading: "Het klantenservicevenster van 24 uur",
        blocks: [
          {
            type: "p",
            text: "Elke supportflow in WhatsApp draait om één timer. Als een klant je bedrijf een bericht stuurt of belt, start een klantenservicevenster van 24 uur, en elk nieuw bericht of gesprek van die klant zet het weer op 24 uur. Zolang het open is, kunnen je bot of medewerkers via de API vrije serviceberichten sturen zonder voorafgaande goedkeuring.",
          },
          {
            type: "p",
            text: "Zodra het venster sluit, zijn templates de enige berichten die je kunt sturen. Templates zijn vooraf geschreven formats die vóór gebruik moeten worden goedgekeurd, en elke template valt in een categorie: marketing (promoties), utility (opvolging van iets wat de klant deed of vroeg) of authentication (identiteit verifiëren).",
          },
          {
            type: "table",
            caption: "Wat je kunt sturen, en wanneer",
            head: ["Situatie", "Wat je kunt sturen"],
            rows: [
              ["De klant schreef in de afgelopen 24 uur", "Vrije serviceberichten van je bot of medewerkers"],
              ["Venster gesloten, je moet een ticket of bestelling bijwerken", "Een goedgekeurde utility-template"],
              ["Je moet de identiteit van de klant verifiëren", "Een goedgekeurde authentication-template"],
              ["Je wilt iets promoten", "Een goedgekeurde marketingtemplate, alleen verstuurd naar gebruikers met opt-in"],
              ["De klant reageert op je template", "Die reactie opent een nieuw venster van 24 uur, dus vrije antwoorden werken weer"],
            ],
          },
          {
            type: "p",
            text: "Voor een supportbot betekent dit twee praktische regels: antwoord binnen het venster wanneer je kunt, en bereid utility-templates vooraf voor op late opvolging, zoals „je ticket is bijgewerkt” of „we hebben nog één gegeven nodig”.",
          },
        ],
      },
      {
        heading: "Opt-inregels die je bot moet respecteren",
        blocks: [
          {
            type: "p",
            text: "Meta verplicht bedrijven om toestemming (opt-in) te krijgen voordat ze mensen via WhatsApp berichten sturen. De opt-in hoeft niet specifiek voor WhatsApp te zijn, maar moet duidelijk maken dat de persoon ermee instemt berichten van je bedrijf te ontvangen en moet je bedrijfsnaam vermelden. Jij bent verantwoordelijk voor het kiezen van een opt-inmethode die voldoet aan de wetgeving die voor jou geldt. Meta noemt deze methodes:",
          },
          {
            type: "ul",
            items: [
              "Sms",
              "Je website",
              "Een telefoongesprek met een interactive voice response-flow (IVR)",
              "Persoonlijk of op papier",
            ],
          },
          {
            type: "p",
            text: "Meta raadt ook een opt-in aan die elk soort bericht dekt dat je wilt sturen, plus duidelijke instructies om je af te melden. Verzamel en registreer de opt-in in de praktijk overal waar klanten je voor het eerst hun nummer geven, zoals bij het afrekenen, de registratie of je contactformulier, zodat templates voor ticketupdates nooit een gok zijn.",
          },
        ],
      },
      {
        heading: "Hoe de prijzen van WhatsApp werken, zonder tarievenkaart",
        blocks: [
          {
            type: "p",
            text: "Meta rekent per afgeleverd bericht, en alleen voor berichten die een bedrijf naar gebruikers stuurt. De prijs hangt af van de berichtcategorie en de landcode van de ontvanger. Tarievenkaarten worden per markt gepubliceerd en veranderen af en toe, dus kijk op de actuele prijspagina van Meta in plaats van een getal uit een blogpost over te nemen.",
          },
          {
            type: "p",
            text: "Voor supportteams zijn twee punten belangrijk. Gesprekken die beginnen via een Click to WhatsApp-advertentie of een call-to-action op een Facebook-pagina kunnen een gratis entry point-venster openen: antwoord je binnen het klantenservicevenster, dan worden je berichten niet in rekening gebracht, en volgens de huidige prijspagina van Meta kan dat venster tot 7 dagen open blijven (de oudere prijzen op basis van gesprekken gaven 72 uur). En helpdeskleveranciers kunnen eigen kosten toevoegen: de documentatie van Freshworks vermeldt bijvoorbeeld dat het een opslag rekent bovenop de WhatsApp-kosten van Meta.",
          },
          {
            type: "note",
            text: "De prijsdocumentatie van Meta beschrijft wijzigingen in 2026 in hoe service- en utility-berichten worden gefactureerd. Controleer de actuele regels op de prijspagina van Meta voordat je maandelijkse kosten inschat.",
          },
        ],
      },
      {
        heading: "De bot koppelen aan je helpdesk",
        blocks: [
          {
            type: "p",
            text: "Een WhatsApp-bot mag nooit een doodlopende weg zijn. Als hij iets niet kan oplossen, moet het gesprek bij een medewerker terechtkomen met de context er al bij. Zendesk en Freshdesk bieden allebei ingebouwde WhatsApp-kanalen:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp wordt toegevoegd als messagingkanaal in Admin Center (Channels > Messaging and social > Messaging). Je hebt een Meta Business Manager nodig die van je bedrijf is, en de persoon die het nummer koppelt moet daarin beheerder zijn. Zendesk merkt op dat medewerkers niet meer kunnen antwoorden als het laatste bericht van de klant meer dan 24 uur oud is, en dat groepsberichten in WhatsApp niet worden ondersteund.",
              "Freshdesk: WhatsApp is een kanaal van Freshdesk Omni met ondersteuning voor goedgekeurde berichttemplates. Instellingen per nummer zijn onder meer het koppelen van een AI-agent, routering naar groepen medewerkers, templatebeheer, automatiseringen en SLA-beleid. De handleiding van Freshdesk vermeldt een limiet van 250 door het bedrijf gestarte gesprekken per 24 uur zolang de bedrijfsverificatie van Meta niet is afgerond.",
            ],
          },
          {
            type: "p",
            text: "Welke helpdesk je ook gebruikt, zet de gegevens die de bot verzamelt (naam, ordernummer, type probleem) in ticketvelden zodat medewerkers er niet opnieuw naar vragen, en tag gesprekken die de bot heeft afgehandeld zodat je ziet wat de bot echt oplost.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt WhatsApp-bots bovenop de tools die je al gebruikt, zoals Zendesk, Freshdesk, Jira, Slack of interne systemen, met API's, webhooks en Make of n8n. Een Starter Chat Bot (350–450 USD) dekt één of twee kanalen met FAQ's en eenvoudige gegevensverzameling; een Standard Chat Bot (500–650 USD) dekt drie tot vijf kanalen met complexere gesprekken en soepelere overdrachten. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en de meeste projecten duren 1–3 weken. Een gratis audit-gesprek van 30 minuten is een eenvoudige manier om na te gaan of WhatsApp past bij je supportvolume.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik een supportbot bouwen op de gewone WhatsApp Business-app?",
        a: "Niet op een zinvolle manier. De app biedt eenvoudige automatische antwoorden, maar chatbots en helpdeskintegraties draaien op het WhatsApp Business Platform, meestal via Cloud API.",
      },
      {
        q: "Wat gebeurt er als een klant na 24 uur reageert?",
        a: "Het nieuwe bericht opent een nieuw klantenservicevenster van 24 uur, dus je bot of medewerkers kunnen weer vrij antwoorden. Het venster beperkt alleen berichten die jij start nadat het is gesloten.",
      },
      {
        q: "Moeten WhatsApp-templates worden goedgekeurd?",
        a: "Ja. Templates moeten worden goedgekeurd voordat je ze kunt versturen, en ze zijn de enige berichten die buiten het klantenservicevenster zijn toegestaan.",
      },
      {
        q: "Kan ik mijn bestaande nummer van de WhatsApp Business-app houden?",
        a: "Meta ondersteunt het onboarden van een bestaand nummer van de WhatsApp Business-app op Cloud API, zodat beide op hetzelfde nummer kunnen worden gebruikt, waarbij sommige functies aan de API-kant niet beschikbaar zijn. Controleer of je helpdesk dit ondersteunt voordat je overstapt.",
      },
      {
        q: "Wat kost het om een WhatsApp-supportbot te laten draaien?",
        a: "Meta rekent per afgeleverd bericht, op basis van berichtcategorie en land van de ontvanger, en de tarieven veranderen in de loop van de tijd. Bekijk de actuele tarievenkaarten van Meta en eventuele kosten die je helpdesk toevoegt.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — About the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform",
      },
      {
        label: "Meta for Developers — Onboard WhatsApp Business app users",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/",
      },
      {
        label: "Meta for Developers — Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Pricing on the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      {
        label: "Meta for Developers — Get opt-in for WhatsApp",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in",
      },
      {
        label: "Zendesk Help Center — Adding WhatsApp channels to the Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408842821786-Adding-WhatsApp-channels-to-the-Agent-Workspace",
      },
      {
        label: "Freshdesk Support — WhatsApp Business integration for Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/238137-whatsapp-for-freshdesk-business-integration",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Telegram
  // ---------------------------------------------------------------------------
  {
    key: "telegram-support-bot",
    slug: "telegram-klantenservice-bot",
    category: "channels",
    navLabel: "Telegram-supportbot",
    primaryKeyword: "Telegram klantenservice bot",
    title: "Telegram-klantenservicebot: Bot API, webhooks, overdracht",
    description:
      "Zo draai je een Telegram-supportbot: inrichting via BotFather, webhooks vs long polling, inline keyboards, privacy mode in groepen, limieten en overdracht.",
    h1: "Telegram-klantenservicebot: hoe hij werkt en hoe je hem inricht",
    intro:
      "Een Telegram-supportbot is een programma dat gekoppeld is aan de Telegram Bot API. Je registreert hem bij @BotFather, krijgt een token, en je code ontvangt berichten van klanten via een webhook of long polling. Telegram-bots kunnen geen gesprekken beginnen, dus elke supportflow start wanneer een klant je bot opent en op 'Start' tikt.",
    keyFacts: [
      "Je maakt een bot aan en krijgt zijn authenticatietoken door @BotFather een bericht te sturen.",
      "Updates komen binnen via getUpdates of een webhook; de twee methodes sluiten elkaar uit.",
      "Telegram bewaart niet-afgeleverde updates niet langer dan 24 uur.",
      "Bots kunnen gebruikers niet als eerste een bericht sturen; de gebruiker moet de bot een bericht sturen of hem aan een groep toevoegen.",
      "Webhooks werken alleen op de poorten 443, 80, 88 en 8443.",
    ],
    sections: [
      {
        heading: "Hoe een Telegram-supportbot werkt",
        blocks: [
          {
            type: "p",
            text: "Je maakt een bot aan door in Telegram een bericht te sturen naar @BotFather, die hem registreert en je een authenticatietoken geeft. Je code gebruikt dat token om de Bot API via HTTPS aan te roepen. Het token authenticeert alleen je code; het geeft de bot geen toestemming om wie dan ook een bericht te sturen.",
          },
          {
            type: "p",
            text: "Bots kunnen geen gesprekken beginnen. Een gebruiker moet de bot eerst een bericht sturen of hem aan een groep toevoegen. Elke bot heeft een link in de vorm t.me/ gevolgd door de gebruikersnaam van de bot, die een chat met hem opent, en de eerste keer dat iemand die chat opent, ziet hij een knop 'Start' die het commando /start verstuurt. Sla op dat moment de chat-ID van de gebruiker op: die heb je nodig om later een bericht te sturen, zoals een ticketupdate.",
          },
          {
            type: "ol",
            items: [
              "De klant tikt op je t.me-link op je website of in een e-mail en drukt op 'Start'.",
              "De bot begroet de klant en toont een kort menu met veelvoorkomende onderwerpen.",
              "Eenvoudige vragen krijgen direct een antwoord; al het andere wordt verzameld (ordernummer, omschrijving, screenshots).",
              "De bot maakt een ticket aan in je helpdesk en vertelt de klant wat er nu gebeurt.",
              "Als een medewerker in de helpdesk antwoordt, wordt het antwoord teruggestuurd naar dezelfde Telegram-chat.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks vs long polling",
        blocks: [
          {
            type: "p",
            text: "De Bot API biedt twee manieren om updates te ontvangen die elkaar uitsluiten: de methode getUpdates (long polling) en webhooks. Zolang er een webhook is ingesteld, werkt getUpdates niet. Hoe dan ook bewaart Telegram updates die je nog niet hebt ontvangen niet langer dan 24 uur, dus een bot die een dag offline is, verliest berichten.",
          },
          {
            type: "table",
            caption: "Kiezen hoe je bot berichten ontvangt",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Hoe het werkt", "Je server vraagt Telegram om nieuwe updates", "Telegram stuurt elke update naar je HTTPS-URL"],
              ["Hosting", "Elke server die uitgaande verzoeken kan doen", "Een publiek HTTPS-endpoint op poort 443, 80, 88 of 8443"],
              ["Afzender controleren", "Niet nodig, je server doet zelf de verzoeken", "Stel een secret_token in; Telegram stuurt het terug in de header X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "Om van een webhook terug te schakelen naar polling, verwijder je de webhook met deleteWebhook of door setWebhook aan te roepen met een lege URL. Beide methodes accepteren drop_pending_updates als je de opgebouwde achterstand wilt weggooien wanneer je je opzet wijzigt.",
          },
        ],
      },
      {
        heading: "Knoppen en menu's voor supportflows",
        blocks: [
          {
            type: "p",
            text: "Supportbots werken beter met knoppen dan met vrije tekst. Custom reply keyboards vervangen het toetsenbord van de gebruiker door vooraf ingestelde antwoorden, en een druk op een daarvan stuurt die tekst in de chat. Inline keyboards koppelen knoppen aan een specifiek bericht en plaatsen niets in de chat als erop wordt gedrukt. Een inline knop kan een URL openen of callbackdata van 1–64 bytes naar je bot sturen.",
          },
          {
            type: "p",
            text: "Twee details overvallen nieuwe bots vaak. Nadat een gebruiker op een callbackknop drukt, tonen Telegram-clients een voortgangsindicator tot je bot answerCallbackQuery aanroept, dus beantwoord elke callback, ook zonder tekst. En bewerk bij menu's met meerdere stappen het bestaande bericht met nieuwe knoppen in plaats van elke keer een nieuw bericht te sturen; bewerken werkt voor berichten die inline keyboards hebben.",
          },
        ],
      },
      {
        heading: "Groepen, privacy mode en verzendlimieten",
        blocks: [
          {
            type: "p",
            text: "Bots die aan groepen worden toegevoegd, draaien standaard in privacy mode. In die modus ontvangt een bot commando's die aan hem zijn gericht, reacties op zijn eigen berichten, berichten die via de bot zijn verstuurd en serviceberichten, maar niet het gewone gesprek in de groep. Bots die beheerder van een groep zijn, ontvangen alle berichten, en je kunt privacy mode uitschakelen met /setprivacy in @BotFather, al raadt Telegram dat alleen aan als het absoluut nodig is. Berichten in privéchats met de bot komen altijd aan.",
          },
          {
            type: "table",
            caption: "Indicatieve limieten uit de Bots FAQ van Telegram",
            head: ["Waar", "Richtlijn"],
            rows: [
              ["Eén chat", "Vermijd meer dan één bericht per seconde; korte pieken kunnen doorkomen voordat 429-fouten beginnen"],
              ["Een groep", "Niet meer dan 20 berichten per minuut"],
              ["Bulkmeldingen", "Ongeveer 30 berichten per seconde over alle gebruikers, tenzij je paid broadcasts inschakelt"],
            ],
          },
          {
            type: "p",
            text: "De FAQ van Telegram geeft deze cijfers als indicatie, dus bouw nieuwe pogingen in bij 429-fouten in plaats van op exacte getallen te vertrouwen. Voor een supportbot zijn ze vooral van belang als je veel klanten tegelijk informeert, bijvoorbeeld over een storing. Geef bij long polling ook de parameter offset mee aan getUpdates: updates tot en met die ID worden als bevestigd gemarkeerd en worden niet opnieuw teruggegeven.",
          },
        ],
      },
      {
        heading: "Overdracht aan de helpdesk en Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Voor overdracht van bot naar mens is het gebruikelijke patroon dat de bot een ticket opent en de antwoorden van medewerkers terugstuurt naar de chat. Zendesk ondersteunt Telegram als Sunshine Conversations-kanaal in de Agent Workspace, waarvoor Suite Professional of hoger nodig is. Berichten worden tickets, en het antwoord van een medewerker in Zendesk verschijnt in de messaging-app van de klant.",
          },
          {
            type: "p",
            text: "Telegram Business is een aparte optie voor kleine teams die klanten vanuit hun eigen Telegram-account antwoorden. De accounteigenaar kan één business bot tegelijk koppelen, kiezen tot welke chats die toegang heeft, en hem inkomende berichten laten verwerken en, waar toegestaan, namens de eigenaar laten antwoorden.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt Telegram-supportbots die koppelen met de tools die je al gebruikt, zoals Zendesk, Freshdesk, Jira, Slack of interne systemen, via API's, webhooks en Make of n8n. Een Starter Chat Bot (350–450 USD) dekt één of twee kanalen met FAQ's en eenvoudige gegevensverzameling, wat past bij Telegram plus een websitewidget. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste projecten duren 1–3 weken. Je kunt beginnen met een gratis audit-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan een Telegram-bot klanten als eerste een bericht sturen?",
        a: "Nee. Een gebruiker moet de bot een bericht sturen of hem aan een groep toevoegen voordat de bot hem kan schrijven. Sla de chat-ID op bij het eerste contact, zodat je later updates kunt sturen.",
      },
      {
        q: "Moet ik webhooks of getUpdates gebruiken?",
        a: "Beide werken, maar niet tegelijk. Webhooks pushen elke update naar je HTTPS-endpoint, terwijl long polling alleen uitgaande verzoeken nodig heeft en eenvoudiger is tijdens de ontwikkeling.",
      },
      {
        q: "Waarom ziet mijn bot geen berichten in een groep?",
        a: "Bots draaien standaard in privacy mode en zien alleen berichten die voor hen bedoeld zijn. Maak de bot beheerder van de groep, of schakel privacy mode uit met /setprivacy in @BotFather en voeg de bot opnieuw toe aan de groep.",
      },
      {
        q: "Ondersteunt Zendesk Telegram?",
        a: "Ja, als Sunshine Conversations-kanaal in de Agent Workspace, waarvoor volgens Zendesk Suite Professional of hoger nodig is. Berichten komen binnen als tickets en antwoorden van medewerkers gaan terug naar Telegram.",
      },
    ],
    sources: [
      {
        label: "Telegram — Bots: An introduction for developers",
        url: "https://core.telegram.org/bots",
      },
      {
        label: "Telegram — Telegram Bot API",
        url: "https://core.telegram.org/bots/api",
      },
      {
        label: "Telegram — From BotFather to 'Hello World'",
        url: "https://core.telegram.org/bots/tutorial",
      },
      {
        label: "Telegram — Marvin's Marvellous Guide to All Things Webhook",
        url: "https://core.telegram.org/bots/webhooks",
      },
      {
        label: "Telegram — Telegram Bot Features",
        url: "https://core.telegram.org/bots/features",
      },
      {
        label: "Telegram — Bots FAQ",
        url: "https://core.telegram.org/bots/faq",
      },
      {
        label: "Telegram — Connected business bots",
        url: "https://core.telegram.org/api/bots/connected-business-bots",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "slack-support-automation",
      "n8n-vs-make-vs-zapier",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Facebook Messenger
  // ---------------------------------------------------------------------------
  {
    key: "facebook-messenger-bot-customer-service",
    slug: "facebook-messenger-bot-klantenservice",
    category: "channels",
    navLabel: "Messenger-bot voor klantenservice",
    primaryKeyword: "Facebook Messenger bot klantenservice",
    title: "Facebook Messenger-bot voor klantenservice: regels & opzet",
    description:
      "Zo werkt een Facebook Messenger-bot voor klantenservice: webhooks, het 24-uursvenster, de tag HUMAN_AGENT, overdracht aan medewerkers en het botbeleid van Meta.",
    h1: "Facebook Messenger-bot voor klantenservice: vensters, tags en overdracht",
    intro:
      "Een Facebook Messenger-bot voor klantenservice koppelt via het Messenger Platform van Meta met je Facebook-pagina: inkomende berichten bereiken je server via webhooks, en de bot antwoordt via de Send API. Je kunt antwoorden tot 24 uur na elk bericht van een klant, en een menselijke medewerker kan tot 7 dagen antwoorden met de tag HUMAN_AGENT zodra je app daarvoor is goedgekeurd.",
    keyFacts: [
      "Met standaardberichten kun je antwoorden binnen 24 uur na het bericht van iemand.",
      "De tag HUMAN_AGENT maakt menselijke antwoorden binnen 7 dagen mogelijk, na goedkeuring van de app.",
      "Sinds 27 april 2026 geven de tags CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE en POST_PURCHASE_UPDATE een foutmelding.",
      "Waar de wet dat vereist, moet een bot melden dat mensen met een geautomatiseerde dienst praten.",
      "Het beleid van Meta verwacht dat geautomatiseerde ervaringen binnen 30 seconden reageren op invoer van gebruikers.",
    ],
    sections: [
      {
        heading: "Hoe het Messenger Platform in elkaar zit",
        blocks: [
          {
            type: "p",
            text: "Een Messenger-bot is een Meta-app die aan een of meer Facebook-pagina's is gekoppeld. De app abonneert zich op elke pagina via de edge subscribed_apps van de pagina, waarvoor de machtigingen pages_messaging en pages_manage_metadata nodig zijn. Meta stuurt daarna gebeurtenissen zoals nieuwe berichten en tikken op knoppen naar je webhook, en je bot antwoordt via de Send API.",
          },
          {
            type: "table",
            caption: "Webhookgebeurtenissen die een supportbot meestal gebruikt",
            head: ["Gebeurtenis", "Wat het je bot vertelt"],
            rows: [
              ["messages", "Een klant heeft een bericht naar je pagina gestuurd"],
              ["messaging_postbacks", "Een klant tikte op een postbackknop, de knop 'Get Started' of een item in het persistent menu"],
              ["messaging_handovers", "De controle over het gesprek is doorgegeven, overgenomen of gewijzigd tussen apps"],
              ["standby", "Er kwam een bericht binnen terwijl een andere app de controle over het gesprek had"],
            ],
          },
          {
            type: "p",
            text: "Meta geeft je ook vaste instappunten. Een tik op de knop 'Get Started' verstuurt een postback, een goed moment voor een welkomstbericht. Een persistent menu, met maximaal 20 items, kan een optie „Met een medewerker praten” bevatten; het verschijnt pas als er een knop 'Get Started' is ingesteld.",
          },
        ],
      },
      {
        heading: "Het 24-uursvenster en message tags",
        blocks: [
          {
            type: "p",
            text: "Het standaard berichtvenster van Messenger geeft je 24 uur om te antwoorden nadat iemand je pagina een bericht heeft gestuurd, en berichten binnen dat venster mogen promotionele inhoud bevatten. Stuur je na het sluiten van het venster een gewoon bericht, dan geeft de Send API foutcode 1545041 terug.",
          },
          {
            type: "table",
            caption: "Wat Meta toestaat nadat een klant schrijft",
            head: ["Moment of toepassing", "Wat je kunt sturen", "Opmerkingen"],
            rows: [
              ["Binnen 24 uur na het bericht van de klant", "Standaardberichten van de bot of een medewerker", "Promotionele inhoud is in dit venster toegestaan"],
              ["Tot 7 dagen na het bericht van de klant", "Een menselijk antwoord met de tag HUMAN_AGENT", "Vereist goedkeuring van de app; niet voor geautomatiseerde of promotionele berichten"],
              ["Updates over evenementen, aankopen of accounts", "Niet de oude tags: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE en POST_PURCHASE_UPDATE geven sinds 27 april 2026 een foutmelding", "Meta verwijst naar utility-templates of de Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta beperkt HUMAN_AGENT tot problemen die niet binnen het standaardvenster kunnen worden opgelost, zoals een verzoek dat binnenkomt terwijl je bedrijf in het weekend gesloten is, of een zaak die meer dan een dag duurt. Geautomatiseerde berichten zijn een niet-toegestaan gebruik van de tag, dus de bot kan hem niet gebruiken om zelf late opvolgberichten te sturen.",
          },
        ],
      },
      {
        heading: "Gesprekken overdragen van de bot aan een mens",
        blocks: [
          {
            type: "p",
            text: "Meerdere apps kunnen op dezelfde pagina werken, bijvoorbeeld je bot en een helpdesk. Met het handover protocol kun je een gesprek van de ene app of inbox naar de andere doorgeven, en de webhook messaging_handovers meldt wanneer de controle is doorgegeven, overgenomen of gewijzigd. Apps die de thread niet beheren, ontvangen standby-gebeurtenissen in plaats van gewone berichtgebeurtenissen.",
          },
          {
            type: "p",
            text: "Meta beweegt dit richting Conversation Routing. Een update uit 2021 schrapte de noodzaak om primaire en secundaire rollen toe te wijzen en voegde de modi Exclusive en Idle toe. Routeringsregels kunnen nu in de instellingen van je pagina worden beheerd, en als Conversation Routing is ingeschakeld, geeft de Conversations API een veld is_owner terug, zodat je app alleen threads beantwoordt die hij beheert.",
          },
          {
            type: "ul",
            items: [
              "Bied een duidelijke uitweg: de documentatie van Meta noemt escaleren via een fallback intent, een trefwoord of quick replies.",
              "Plaats vóór het doorgeven van de controle een korte samenvatting (onderwerp, ordernummer, wat de bot al heeft geprobeerd) waar de medewerker die ziet.",
              "Vertel de klant wat er nu gebeurt, inclusief je openingstijden als er niemand online is.",
              "Geef de controle terug aan de bot als de medewerker klaar is, zodat de volgende vraag automatisch wordt beantwoord.",
            ],
          },
        ],
      },
      {
        heading: "Beleidsregels die de bot vormgeven",
        blocks: [
          {
            type: "ul",
            items: [
              "Melding: als de toepasselijke wetgeving het vereist, moeten geautomatiseerde chatervaringen melden dat de persoon met een geautomatiseerde dienst praat, bijvoorbeeld aan het begin van een gesprek of wanneer een mens het gesprek teruggeeft aan de automatisering. Meta raadt aan het ook te melden waar het niet verplicht is, en noemt Californië en Duitsland expliciet.",
              "Reactiesnelheid: volledig geautomatiseerde ervaringen moeten binnen 30 seconden reageren op alle invoer van gebruikers. Hybride opstellingen die bots en mensen combineren, moeten de reactie-instelling bijwerken in 'Page Settings' onder 'Advanced Messaging'.",
              "Geen promotie in getagde berichten: message tags mogen niet worden gebruikt voor reclame, marketing of werving.",
              "Goedkeuring van de app: je app moet zijn goedgekeurd voordat hij de tag HUMAN_AGENT kan gebruiken.",
            ],
          },
        ],
      },
      {
        heading: "Messenger koppelen aan je helpdesk",
        blocks: [
          {
            type: "p",
            text: "De meeste helpdesks kunnen Messenger-gesprekken als tickets ontvangen. In Zendesk is Messenger een messagingkanaal in de Agent Workspace, en Zendesk documenteert een paar praktische beperkingen:",
          },
          {
            type: "ul",
            items: [
              "Medewerkers hebben zeven dagen om te antwoorden voordat het berichtvenster sluit, waarna het antwoordvak wordt geblokkeerd.",
              "Antwoorden die een medewerker rechtstreeks in Messenger stuurt, worden niet teruggesynchroniseerd naar Zendesk, dus medewerkers moeten vanuit Zendesk antwoorden.",
              "Berichten van meer dan 2.000 tekens worden niet afgeleverd.",
            ],
          },
          {
            type: "p",
            text: "Draait je bot als aparte app, bepaal dan welke app de thread standaard beheert en wanneer de controle overgaat; anders kunnen de bot en de helpdesk allebei dezelfde klant antwoorden.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt Messenger-bots die werken bovenop Zendesk, Freshdesk, Jira, Slack of je interne tools, met API's, webhooks en Make of n8n. Een Starter Chat Bot (350–450 USD) dekt één of twee kanalen; een Standard Chat Bot (500–650 USD) dekt drie tot vijf kanalen, zoals Messenger, Instagram en WhatsApp, met complexere gesprekken en soepelere overdrachten. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste projecten duren 1–3 weken. Plan een gratis audit-gesprek van 30 minuten in om je huidige Messenger-flow in kaart te brengen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoeveel tijd heb ik om te antwoorden op Messenger?",
        a: "Je kunt standaardberichten sturen binnen 24 uur na het bericht van iemand. Een menselijke medewerker kan tot 7 dagen later antwoorden met de tag HUMAN_AGENT, zodra je app daarvoor is goedgekeurd.",
      },
      {
        q: "Mag mijn bot de tag HUMAN_AGENT gebruiken?",
        a: "Nee. Meta noemt geautomatiseerde berichten een niet-toegestaan gebruik van de tag. Hij is bedoeld voor antwoorden van mensen als een probleem niet binnen 24 uur kan worden opgelost.",
      },
      {
        q: "Wat vervangt de tags ACCOUNT_UPDATE en POST_PURCHASE_UPDATE?",
        a: "Die tags geven, samen met CONFIRMED_EVENT_UPDATE, sinds 27 april 2026 een foutmelding. Meta raadt voor die toepassingen utility-templates of de Marketing Messages API aan.",
      },
      {
        q: "Moet ik gebruikers vertellen dat ze met een bot praten?",
        a: "Het beleid van Meta vereist een melding waar de toepasselijke wetgeving dat vereist, en raadt het elders aan. Het aan het begin van het gesprek zeggen is de eenvoudigste aanpak.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Send a message (Messenger Platform)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Message tags (Send API)",
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/",
      },
      {
        label: "Meta for Developers — Messenger Platform and IG Messaging API policy",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy",
      },
      {
        label: "Meta for Developers — Webhooks for Messenger Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks",
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
        label: "Meta for Developers — Persistent menu",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu",
      },
      {
        label: "Zendesk Help Center — Adding Facebook Messenger channels",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835753370-Adding-Facebook-Messenger-channels",
      },
    ],
    related: [
      "instagram-dm-automation",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Instagram
  // ---------------------------------------------------------------------------
  {
    key: "instagram-dm-automation",
    slug: "instagram-dm-automatiseren",
    category: "channels",
    navLabel: "Instagram-DM's automatiseren",
    primaryKeyword: "Instagram DM automatiseren",
    title: "Instagram-DM's automatiseren voor klantenservice: de regels",
    description:
      "Instagram-DM's automatiseren: regels voor professionele accounts, het 24-uursvenster, de human agent-tag, private replies op reacties en ice breakers.",
    h1: "Instagram-DM's automatiseren voor klantenservice",
    intro:
      "Instagram-DM's automatiseren betekent een bot via de API's van Meta koppelen aan de directe berichten van een professioneel Instagram-account, zodat routinevragen direct antwoord krijgen en de rest bij een mens terechtkomt. De bot kan pas antwoorden nadat iemand je een bericht stuurt, en heeft daar 24 uur voor; menselijke medewerkers kunnen tot 7 dagen antwoorden met de human agent-tag.",
    keyFacts: [
      "De messaging-API's van Instagram werken met professionele accounts (zakelijk of creator).",
      "Je app kan een gebruiker pas een bericht sturen nadat die jou een bericht heeft gestuurd, en heeft dan 24 uur om te antwoorden.",
      "De human agent-tag maakt antwoorden binnen 7 dagen mogelijk, na app review.",
      "Private replies op reacties kunnen binnen 7 dagen na de reactie worden verstuurd.",
      "Op Instagram heeft Meta het handover protocol vervangen door Conversation Routing.",
    ],
    sections: [
      {
        heading: "Wat je nodig hebt voordat je Instagram-DM's automatiseert",
        blocks: [
          {
            type: "p",
            text: "De messaging-API's van Instagram werken met professionele accounts. Er zijn twee soorten: zakelijke accounts, voor retailers, lokale bedrijven, merken, organisaties en dienstverleners, en creatoraccounts, voor publieke figuren, contentmakers, artiesten en influencers. Let op: als je een privé persoonlijk account omzet naar professioneel, wordt het openbaar.",
          },
          {
            type: "table",
            caption: "Twee manieren om Instagram-messaging te koppelen",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Facebook-pagina", "Niet nodig", "Het Instagram-account moet aan een Facebook-pagina zijn gekoppeld"],
              ["Berichten versturen", "Instagram User access token met de machtiging instagram_business_manage_messages", "Hetzelfde endpoint /PAGE_ID/messages als bij Messenger, met de Instagram-scoped ID van de klant"],
              ["Inkomende berichten", "Messaging-webhooks", "Het webhookveld messages, naast Messenger-berichten"],
              ["Geschikt voor", "Bedrijven en creators die alleen Instagram gebruiken", "Teams die al een Messenger-bot of een aan Meta gekoppelde helpdesk gebruiken"],
            ],
          },
          {
            type: "p",
            text: "In beide gevallen moet de accounteigenaar toegang tot berichten toestaan onder 'Connected tools' in de berichtinstellingen van Instagram, anders kan de API de gesprekken niet beheren. Zendesk merkt op dat deze schakelaar in de mobiele Instagram-app moet worden ingeschakeld, niet op het web. Bedient je app professionele accounts die je niet zelf bezit of beheert, dan heeft hij ook Advanced Access nodig via de app review van Meta.",
          },
        ],
      },
      {
        heading: "Berichtvensters en de human agent-tag",
        blocks: [
          {
            type: "p",
            text: "Je app kan iemand pas een bericht sturen nadat die persoon je account een bericht heeft gestuurd, en heeft 24 uur om op elk bericht te antwoorden. Voor zaken die langer duren, zoals een verzoek dat binnenkomt terwijl je bedrijf in het weekend gesloten is, laat de human agent-tag een mens binnen 7 dagen antwoorden. De tag is alleen beschikbaar voor apps die de app review hebben doorlopen.",
          },
          {
            type: "table",
            caption: "Beperkingen van Instagram-DM's die je moet kennen",
            head: ["Regel", "Wat het betekent voor je bot"],
            rows: [
              ["Antwoordvenster van 24 uur", "Geautomatiseerde antwoorden moeten binnen 24 uur na het bericht van de klant de deur uit"],
              ["Human agent-tag (7 dagen)", "Late antwoorden komen van een mens, na app review"],
              ["Geen groepsberichten", "Groepsgesprekken worden niet ondersteund door de API"],
              ["Map 'Requests'", "Gesprekken in 'Requests' die 30 dagen inactief zijn, worden niet door de API teruggegeven"],
            ],
          },
        ],
      },
      {
        heading: "Van reactie naar DM: private replies",
        blocks: [
          {
            type: "p",
            text: "Veel supportvragen beginnen in de reacties, zoals „Is dit op voorraad?” of „Hoe stuur ik het terug?”. Met private replies kan je account een reactie beantwoorden met een direct bericht aan degene die reageerde. Ze werken voor reacties op posts, reels en advertenties, en voor reacties tijdens Instagram Live. Een private reply is één enkel bericht, verstuurd binnen 7 dagen na de reactie, en bevat automatisch een link naar de post of reactie.",
          },
          {
            type: "p",
            text: "Private replies hebben de human agent-tag niet meer nodig. Als de persoon op je private reply antwoordt, start dat bericht een normaal gesprek en geldt het gebruikelijke venster van 24 uur. Een praktische opzet: houd reacties in de gaten op supporttrefwoorden, stuur een private reply met een antwoord of een vraag, en laat de DM-bot het daarna overnemen, zodat ordernummers en persoonsgegevens buiten openbare reacties blijven.",
          },
        ],
      },
      {
        heading: "Ice breakers en instappunten",
        blocks: [
          {
            type: "p",
            text: "Ice breakers zijn vooraf ingestelde vragen waarop mensen kunnen tikken als ze een nieuw gesprek met je account beginnen, zoals „Waar is mijn bestelling?” of „Contact met support”. Als iemand erop tikt, ontvangt je app een webhookgebeurtenis messaging_postback, zodat elke ice breaker een eigen botflow kan starten. Ice breakers kunnen in meerdere talen worden ingesteld, waarbij de juiste versie wordt getoond op basis van de taalinstelling (locale) van de gebruiker. Gebruik ze voor je meest gestelde supportvragen, leid elke ice breaker naar een specifieke flow, en bekijk op welke mensen echt tikken, zodat je de ongebruikte kunt vervangen.",
          },
          {
            type: "p",
            text: "ig.me-links kunnen een referral-parameter meegeven aan een gesprek, bijvoorbeeld om de bot te laten weten van welke productpagina de klant kwam. Voor nieuwe gesprekken vereist Meta dat er ice breakers zijn ingesteld om die referral-parameter te laten aankomen.",
          },
        ],
      },
      {
        heading: "DM's overdragen aan een mens",
        blocks: [
          {
            type: "p",
            text: "Op Instagram ondersteunt Meta het handover protocol niet meer en zijn alle bedrijven overgezet naar Conversation Routing. Daarmee kun je de controle over een thread doorgeven aan de Instagram-inbox of aan een externe inbox, zoals een helpdesk. Tijdens de app review verwacht Meta dat je laat zien dat bij escalatie het eigenaarschap van de thread naar de inbox gaat en dat de medewerker van daaruit kan antwoorden.",
          },
          {
            type: "p",
            text: "Twee eigenaardigheden zijn handig om te weten. Antwoorden die via een externe app worden verstuurd, verplaatsen de thread naar de map 'General', en berichten die via het platform worden afgeleverd, bevatten niet de mapinformatie die in de Instagram-app wordt getoond. In het Instagram Direct-kanaal van Zendesk worden antwoorden die rechtstreeks in Instagram zijn gegeven niet aan het ticket toegevoegd, dus medewerkers moeten vanuit Zendesk antwoorden.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab richt Instagram-DM-bots in die veelgestelde vragen beantwoorden, gegevens verzamelen en gesprekken overdragen aan je team in Zendesk, Freshdesk, Jira, Slack of een interne tool, gebouwd op API's, webhooks en Make of n8n. Een Starter Chat Bot (350–450 USD) dekt één of twee kanalen; een Standard Chat Bot (500–650 USD) dekt er drie tot vijf, zoals Instagram, Messenger en je website. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste projecten duren 1–3 weken. Het gratis audit-gesprek van 30 minuten is het startpunt.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik DM's automatiseren op een persoonlijk Instagram-account?",
        a: "Nee. De messaging-API's van Meta werken met professionele accounts, en dat kunnen zakelijke accounts of creatoraccounts zijn.",
      },
      {
        q: "Heb ik een Facebook-pagina nodig om Instagram-DM's te automatiseren?",
        a: "Niet met de Instagram API with Instagram Login, waarvoor geen gekoppelde pagina nodig is. De Instagram Messaging API via het Messenger Platform vereist er wel een.",
      },
      {
        q: "Hoe lang kan ik wachten met antwoorden op een DM?",
        a: "Geautomatiseerde antwoorden moeten binnen 24 uur na het bericht van de klant de deur uit. Een menselijke medewerker kan tot 7 dagen later antwoorden met de human agent-tag, nadat je app de review heeft doorstaan.",
      },
      {
        q: "Kan ik een DM sturen naar iemand die op mijn post heeft gereageerd?",
        a: "Ja, met een private reply: één enkel bericht, verstuurd binnen 7 dagen na de reactie, dat automatisch een link naar de post of reactie bevat.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Instagram API with Instagram Login: Send Messages",
        url: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/",
      },
      {
        label: "Meta for Developers — Instagram Platform overview",
        url: "https://developers.facebook.com/docs/instagram-platform/overview/",
      },
      {
        label: "Meta for Developers — Instagram Messaging: Human Agent Escalation",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation",
      },
      {
        label: "Meta for Developers — Send a message (Messenger Platform, private replies)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Using ig.me Links",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Instagram Help Center — Set up a professional Instagram account",
        url: "https://help.instagram.com/502981923235522",
      },
      {
        label: "Zendesk Help Center — Adding and configuring the Instagram Direct channel",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835013018-Adding-and-configuring-Instagram-Direct",
      },
    ],
    related: [
      "facebook-messenger-bot-customer-service",
      "chatbot-to-human-handoff",
      "ai-chatbot-for-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Website chatbot
  // ---------------------------------------------------------------------------
  {
    key: "website-chatbot-for-support",
    slug: "website-chatbot-klantenservice",
    category: "channels",
    navLabel: "Website-chatbot voor support",
    primaryKeyword: "website chatbot klantenservice",
    title: "Website-chatbot voor klantenservice: opzet en overdracht",
    description:
      "Plan een website-chatbot voor klantenservice: helpdeskwidgets zoals Zendesk en Freshchat, overdracht van bot naar medewerker, buiten kantooruren en WCAG.",
    h1: "Website-chatbot voor klantenservice: widgets, overdracht en toegankelijkheid",
    intro:
      "Een website-chatbot voor klantenservice is een chatwidget op je site of in je helpcenter waarin een bot veelgestelde vragen beantwoordt, gegevens verzamelt en het gesprek overdraagt aan een live medewerker als hij niet verder kan. De meeste helpdesks leveren een eigen widget mee, dus het echte werk zit in het inrichten van de botflows, de overdracht, het gedrag buiten kantooruren en de toegankelijkheid.",
    keyFacts: [
      "De messaging Web Widget van Zendesk installeer je door een codefragment toe te voegen aan elke pagina waarop hij moet verschijnen.",
      "Zendesk-messaging kan verschillende antwoorden tonen binnen en buiten kantooruren.",
      "AI-agents van Freshdesk kunnen zo worden ingesteld dat ze klantgegevens verzamelen voordat ze overdragen aan een mens.",
      "WCAG 2.2 vereist dat alle functionaliteit met een toetsenbord te bedienen is (2.1.1, niveau A).",
      "Met de W3C-techniek role=\"log\" kunnen schermlezers nieuwe chatberichten voorlezen zodra ze binnenkomen.",
    ],
    sections: [
      {
        heading: "Ingebouwde helpdeskwidget of een eigen widget?",
        blocks: [
          {
            type: "p",
            text: "Gebruik je al een helpdesk, begin dan met de widget daarvan. Chats komen in dezelfde wachtrij terecht als e-mail en berichten via social media, medewerkers antwoorden vanuit één werkomgeving, en de leverancier onderhoudt de widgetcode.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (messaging): ga in Admin Center naar Channels > Messaging and social > Messaging, open de widget en kopieer de code uit het onderdeel 'Installation'. Voeg die toe aan de broncode van elke pagina waarop de widget moet verschijnen, en zorg dat je firewall de widget toelaat.",
              "Freshchat-webwidget (Freshdesk): kopieer de embedcode uit de kanaalinstellingen van de webchat en voeg die toe aan elke pagina waarop de widget moet verschijnen. Freshworks documenteert ook de installatie op WordPress, Shopify en Squarespace, en in iOS- en Android-apps.",
            ],
          },
          {
            type: "table",
            caption: "Een widget kiezen",
            head: ["Optie", "Geschikt als", "Let op"],
            rows: [
              ["Ingebouwde widget van de helpdesk", "Je chats, tickets en rapportages op één plek wilt", "Opmaak en botlogica zijn beperkt tot wat de leverancier ondersteunt"],
              ["Ingebouwde widget met een maatwerkbot", "Je logica of integraties nodig hebt die de ingebouwde bot mist", "Overdracht en het doorgeven van context moeten worden gekoppeld en getest"],
              ["Volledig eigen widget", "Chat onderdeel is van de interface van je product", "Toegankelijkheid, uptime en de integratie aan de kant van medewerkers zijn jouw verantwoordelijkheid"],
            ],
          },
        ],
      },
      {
        heading: "De overdracht van bot naar mens ontwerpen",
        blocks: [
          {
            type: "p",
            text: "Bij de overdracht gaan de meeste websitebots de mist in. Een goede overdracht brengt de klant bij een mens zonder dat die zichzelf hoeft te herhalen. Beide grote helpdesks ondersteunen dit patroon:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: als je een AI-agent aan een messagingkanaal toevoegt, vervangt die het standaard messaging-antwoord door de eigen antwoorden van de AI-agent. In het workflowrecept van Zendesk begroet de AI-agent de klant, toont hij een formulier om te verzamelen wat medewerkers nodig hebben, vertelt hij de klant dat het verzoek naar het team gaat, en stuurt hij het gesprek daarna door naar een medewerker, die een melding krijgt en de gegevens ziet bij het accepteren. Het recept gebruikt een korter formulier voor ingelogde klanten, zonder naam en e-mailadres.",
              "Freshchat en Freshdesk: botflows dragen over met acties zoals 'Assign to group' of 'Make available for assignment', en de handover-instellingen voor AI-agents van Freshdesk bevatten een optie om klantgegevens te verzamelen vóór de overdracht.",
            ],
          },
          {
            type: "p",
            text: "Bepaal wat je verzamelt op basis van wat je medewerkers als eerste vragen. Gebruikelijke velden zijn naam en e-mailadres voor bezoekers die niet zijn ingelogd, een order- of accountnummer, het type probleem gekozen via knoppen, een korte omschrijving in de eigen woorden van de klant, en de pagina waarop de klant zich bevond.",
          },
        ],
      },
      {
        heading: "Buiten kantooruren",
        blocks: [
          {
            type: "p",
            text: "Een widget die om 2 uur 's nachts belooft dat „er zo een medewerker bij je is”, doet meer kwaad dan helemaal geen chat. Plan wat er gebeurt als er niemand online is:",
          },
          {
            type: "ul",
            items: [
              "Stel kantooruren in: messagingkanalen in Zendesk kunnen een schema met kantooruren gebruiken en verschillende antwoorden tonen binnen en buiten die uren.",
              "Maak van chats tickets: in het recept van Zendesk escaleert de AI-agent binnen kantooruren naar een live medewerker, en daarbuiten verzamelt hij de gegevens van de klant en escaleert hij het verzoek als e-mailticket voor opvolging.",
              "Laat de bot beantwoorden wat hij kan: antwoorden op FAQ's, het opzoeken van de orderstatus en links naar het helpcenter werken op elk uur.",
              "Zeg wanneer je antwoordt: vertel de klant je openingstijden en waar het antwoord binnenkomt, bijvoorbeeld per e-mail.",
            ],
          },
        ],
      },
      {
        heading: "Basisprincipes van toegankelijkheid voor chatwidgets",
        blocks: [
          {
            type: "p",
            text: "Een chatwidget is interactieve content die over je site heen ligt, dus hij moet aan dezelfde toegankelijkheidslat voldoen als de rest van de pagina. WCAG 2.2 is de huidige versie van het W3C, en deze succescriteria zijn vooral relevant voor chat:",
          },
          {
            type: "table",
            caption: "WCAG 2.2-criteria om te controleren in een chatwidget",
            head: ["Criterium", "Niveau", "Wat het betekent voor een chatwidget"],
            rows: [
              ["2.1.1 Toetsenbord (Keyboard)", "A", "De widget openen, typen, knoppen kiezen en hem sluiten werkt allemaal zonder muis"],
              ["2.4.7 Focus zichtbaar (Focus Visible)", "AA", "Gebruikers zien welke knop of welk veld de toetsenbordfocus heeft"],
              ["2.4.11 Focus niet bedekt (minimum) (Focus Not Obscured (Minimum))", "AA", "De launcher of het geopende chatpaneel verbergt het element met focus op de pagina niet volledig"],
              ["4.1.2 Naam, rol, waarde (Name, Role, Value)", "A", "Eigen knoppen, menu's en de launcher geven hun namen en statussen door aan hulptechnologie"],
              ["4.1.3 Statusberichten (Status Messages)", "AA", "Updates zoals „Bericht verzonden” worden voorgelezen zonder de focus te verplaatsen"],
            ],
          },
          {
            type: "p",
            text: "Voor het gesprek zelf markeert W3C-techniek ARIA23 de chatgeschiedenis met role=\"log\": nieuwe berichten worden aan het eind van de regio toegevoegd en schermlezers lezen ze voor zodra ze verschijnen. Test bij een widget van een leverancier je eigen configuratie met een toetsenbord en een schermlezer, want eigen kleuren en botcontent kunnen nog steeds problemen veroorzaken.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "TascaLab richt website-chatbots in bovenop de helpdesk die je al gebruikt, zoals Zendesk of Freshdesk, of koppelt een maatwerkbot aan Jira, Slack of interne tools via API's, webhooks en Make of n8n. Een Starter Chat Bot (350–450 USD) dekt één of twee kanalen met FAQ's en eenvoudige gegevensverzameling; een Standard Chat Bot (500–650 USD) dekt drie tot vijf kanalen met complexere gesprekken en soepelere overdrachten. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en de meeste projecten duren 1–3 weken. Begin met een gratis audit-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Heb ik een aparte chatbottool nodig als mijn helpdesk een widget heeft?",
        a: "Niet per se. Met Zendesk en Freshdesk kun je allebei een bot of AI-agent aan hun webwidget koppelen. Een aparte tool is zinvol als je logica of integraties nodig hebt die de ingebouwde bot niet biedt.",
      },
      {
        q: "Wat moet de bot verzamelen voordat hij overdraagt aan een medewerker?",
        a: "Wat je medewerkers als eerste vragen: meestal contactgegevens van anonieme bezoekers, een order- of accountnummer, het type probleem en een korte omschrijving. Zendesk en Freshdesk ondersteunen allebei het verzamelen van gegevens vóór de overdracht.",
      },
      {
        q: "Wat moet een website-chatbot doen buiten kantooruren?",
        a: "Beantwoorden wat hij kan, je openingstijden uitleggen en de rest omzetten in een ticket. Het gedocumenteerde recept van Zendesk verzamelt buiten kantooruren de gegevens van de klant en escaleert het verzoek als e-mailticket.",
      },
      {
        q: "Welke toegankelijkheidsstandaard geldt voor een chatwidget?",
        a: "WCAG 2.2 is de huidige versie van het W3C. Bediening met het toetsenbord (2.1.1), zichtbare focus (2.4.7), namen en rollen voor bedieningselementen (4.1.2) en statusberichten (4.1.3) zijn vooral relevant voor chat.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Installing the Web Widget for messaging",
        url: "https://support.zendesk.com/hc/en-us/articles/4500748175258-Installing-the-Web-Widget-for-messaging",
      },
      {
        label: "Zendesk Help Center — Configuring messaging responses and business hours",
        url: "https://support.zendesk.com/hc/en-us/articles/4500737327258-Configuring-messaging-responses-and-business-hours",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Using an AI agent to collect customer info and immediately escalate to a human agent",
        url: "https://support.zendesk.com/hc/en-us/articles/10412442245914-Workflow-recipe-Using-an-AI-agent-to-collect-customer-info-and-immediately-escalate-to-a-human-agent",
      },
      {
        label: "Freshworks Support — Install Freshchat on your web/apps",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004353-embed-the-freshchat-widget-on-your-website",
      },
      {
        label: "Freshworks Support — Gracefully handover conversations from bots to your Freshchat agents",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004659-assigning-bot-conversations-to-your-agents",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
      },
      {
        label: "W3C — ARIA23: Using role=log to identify sequential information updates",
        url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "freshdesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. SMS
  // ---------------------------------------------------------------------------
  {
    key: "sms-customer-support-automation",
    slug: "sms-klantenservice-automatiseren",
    category: "channels",
    navLabel: "Sms-support automatiseren",
    primaryKeyword: "sms klantenservice automatiseren",
    title: "Sms-klantenservice automatiseren: webhooks, 10DLC, STOP",
    description:
      "Zo werkt geautomatiseerde sms-klantenservice: inkomende webhooks, A2P 10DLC en toll-free-verificatie, STOP-afmeldingen, segmentlimieten en helpdesktickets.",
    h1: "Sms-klantenservice automatiseren: hoe het werkt en wat je moet inrichten",
    intro:
      "Bij geautomatiseerde sms-klantenservice koppel je een zakelijk telefoonnummer aan code die inkomende sms'jes leest, eenvoudige vragen beantwoordt en al het andere omzet in tickets. Met een provider zoals Twilio Programmable Messaging wordt elke inkomende sms naar je webhook gestuurd en antwoordt je code via de API. In de VS moet je het nummer bovendien registreren en STOP-afmeldingen respecteren, anders worden je berichten geblokkeerd.",
    keyFacts: [
      "Twilio stuurt elke inkomende sms naar je webhook-URL met velden zoals From, To, Body en MessageSid.",
      "Volgens Twilio behandelen Amerikaanse providers elk bericht dat via een platform als Twilio wordt verstuurd als application-to-person-verkeer (A2P).",
      "Berichten van niet-geregistreerde Amerikaanse 10DLC-nummers worden geblokkeerd met foutcode 30034, ook terwijl de registratie nog loopt.",
      "Twilio handelt STOP en andere standaard afmeldtrefwoorden standaard af op long code-nummers.",
      "Eén GSM-7-sms-segment bevat 160 tekens; een UCS-2-segment, nodig voor emoji, bevat er 70.",
    ],
    sections: [
      {
        heading: "Hoe automatisering van sms-support werkt",
        blocks: [
          {
            type: "p",
            text: "Je neemt een telefoonnummer af bij een sms-provider, laat de webhook voor inkomende berichten naar je code wijzen en verstuurt antwoorden via de API van de provider. Met Twilio Programmable Messaging wordt elke sms naar je nummer een HTTP-verzoek naar je webhook-URL. Het verzoek bevat de afzender in From, je nummer in To, de berichttekst in Body (tot 1.600 tekens) en een MessageSid van 34 tekens waarmee je het bericht later via de REST API kunt ophalen.",
          },
          {
            type: "p",
            text: "Je endpoint antwoordt met TwiML, het XML-formaat van Twilio dat Twilio vertelt wat het vervolgens moet doen, zoals een antwoord versturen. Als je helpdesk later antwoordt en de bot niets te zeggen heeft, geef dan een leeg Response-element terug, zodat Twilio het bericht accepteert zonder te antwoorden.",
          },
          {
            type: "ol",
            items: [
              "De klant sms't naar je supportnummer.",
              "Twilio stuurt het bericht naar je webhook.",
              "Je bot beantwoordt een veelgestelde vraag direct of vraagt om gegevens zoals een ordernummer.",
              "Alles wat de bot niet kan oplossen, wordt een ticket in je helpdesk, gekoppeld aan het telefoonnummer van de klant.",
              "Antwoorden van medewerkers gaan als sms vanaf hetzelfde nummer terug naar de klant.",
            ],
          },
        ],
      },
      {
        heading: "Registratie in de VS: A2P 10DLC en toll-free-verificatie",
        blocks: [
          {
            type: "p",
            text: "Volgens de documentatie van Twilio beschouwen Amerikaanse providers elk bericht dat via een platform als Twilio wordt verstuurd als application-to-person (A2P). Verstuur je sms of mms naar Amerikaanse nummers vanaf een standaard long code van 10 cijfers (10DLC), dan moet je je registreren voor A2P 10DLC. De registratie bestaat uit twee delen: een brand, die providers vertelt wie de afzender is, en een campaign, die de toepassing beschrijft en hoe mensen zich aanmelden, afmelden en hulp krijgen. Zodra de campaign is goedgekeurd, voeg je je nummer toe aan de Messaging Service die eraan is gekoppeld.",
          },
          {
            type: "p",
            text: "Registratie is geen optioneel papierwerk. Twilio blokkeert berichten naar de VS vanaf 10DLC-nummers die niet aan een goedgekeurde campaign zijn gekoppeld, ook nummers waarvan de registratie nog loopt, en de berichttarieven gelden ook voor de geblokkeerde berichten. Toll-free-nummers doorlopen een apart proces, Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Wat Twilio vereist voordat je Amerikaanse klanten sms't",
            head: ["Type afzender", "Vereiste", "Wat er gebeurt zonder"],
            rows: [
              ["10DLC long code", "Goedgekeurde A2P 10DLC-brand en -campaign, met het nummer in de Messaging Service van de campaign", "Berichten worden geblokkeerd met foutcode 30034"],
              ["10DLC, eenmanszaak", "Dezelfde registratie, maar een campaign voor een eenmanszaak (sole proprietor) kan maar één geregistreerd 10DLC-nummer hebben", "Extra nummers in de Messaging Service blijven ongeregistreerd"],
              ["Toll-free-nummer", "Goedgekeurde Toll-Free Verification", "Berichten naar Amerikaanse en Canadese mobiele nummers mislukken met foutcode 30032"],
            ],
          },
        ],
      },
      {
        heading: "STOP-trefwoorden, afmeldingen en toestemming",
        blocks: [
          {
            type: "p",
            text: "Twilio handelt de standaard Engelse afmeldtrefwoorden voor je af op long code-nummers. De documentatie noemt STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT en CANCEL, ongeacht hoofd- of kleine letters. Twilio stuurt een standaardbevestiging, en je berichten bereiken dat nummer niet meer tot de klant START sms't. Op toll-free-nummers melden alleen START en UNSTOP een klant opnieuw aan. Met Advanced Opt-Out, dat standaard uit staat, kun je trefwoorden en antwoorden per Messaging Service aanpassen, al kunnen gereserveerde trefwoorden zoals START niet worden verwijderd.",
          },
          {
            type: "p",
            text: "Zorg dat je bot niets meer stuurt naar een klant die zich heeft afgemeld. Ook Amerikaanse regels gaan hierover. De order van de FCC uit 2024 (FCC 24-24) bepaalt dat consumenten hun toestemming voor robocalls en robotexts op elke redelijke manier kunnen intrekken, dat een antwoord zoals stop, quit, end, revoke, opt out, cancel of unsubscribe als redelijk geldt, en dat intrekkingen binnen een redelijke termijn van maximaal tien werkdagen moeten worden gehonoreerd. In 2026 nam de FCC een nieuwe order aan (FCC 26-67) waarmee bellers één geautomatiseerde intrekkingsmethode kunnen aanwijzen, zoals een antwoord-sms met standaardwoorden als stop, quit of unsubscribe, mits de methode duidelijk wordt vermeld, en die om commentaar vraagt op het verkorten van de termijn. Controleer welke versie van de regels van kracht is wanneer je live gaat.",
          },
          {
            type: "note",
            text: "Dit is een samenvatting van de regeltekst van de FCC, geen juridisch advies. Controleer de actuele regels met je eigen juridisch adviseur voordat je geautomatiseerde sms'jes naar Amerikaanse klanten stuurt.",
          },
        ],
      },
      {
        heading: "Berichtlengte en segmenten",
        blocks: [
          {
            type: "p",
            text: "Sms wordt verstuurd in segmenten, en elk segment wordt gefactureerd, dus de lengte van de antwoorden van je bot beïnvloedt de kosten. De documentatie van Twilio geeft deze limieten:",
          },
          {
            type: "table",
            caption: "Grootte van sms-segmenten volgens de documentatie van Twilio",
            head: ["Codering", "Enkel bericht", "Per segment bij opsplitsen", "Wanneer het wordt gebruikt"],
            rows: [
              ["GSM-7", "160 tekens", "153 tekens", "Tekst die alleen de GSM-7-tekenset gebruikt"],
              ["UCS-2", "70 tekens", "67 tekens", "Elk bericht met minstens één teken buiten GSM-7, zoals een emoji"],
            ],
          },
          {
            type: "p",
            text: "Eén teken buiten GSM-7 zet het hele bericht om naar UCS-2, niet alleen dat teken. Emoji, typografische aanhalingstekens en lange streepjes zijn veelvoorkomende oorzaken, wat ertoe doet als een bot antwoorden uit helpcenterartikelen kopieert. Smart Encoding van Twilio kan sommige van deze tekens vervangen door GSM-7-equivalenten. De tekst van uitgaande berichten kan tot 1.600 tekens lang zijn, maar korte antwoorden met een link naar het volledige artikel werken meestal beter.",
          },
        ],
      },
      {
        heading: "Sms koppelen aan je helpdesk",
        blocks: [
          {
            type: "p",
            text: "Zendesk biedt sms aan als Zendesk Text. Een sms naar je Text-nummer maakt automatisch een ticket aan, en openbare antwoorden op dat ticket gaan als sms terug naar de klant. Zendesk vermeldt ook dat sms'jes naar Amerikaanse consumenten vanaf niet-geregistreerde nummers worden geblokkeerd, dus A2P 10DLC-registratie geldt daar ook.",
          },
          {
            type: "p",
            text: "Heeft je helpdesk geen sms-kanaal, of heb je logica nodig die het ingebouwde kanaal niet biedt, dan kan een kleine dienst ertussen dat afhandelen. Die ontvangt de webhook van Twilio, draait de bot, maakt tickets aan of werkt ze bij via de helpdesk-API, en stuurt antwoorden van medewerkers terug via Twilio.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "De botkanalen die TascaLab aanbiedt, zijn website, telefoon, WhatsApp, Telegram, Facebook Messenger en Instagram. Sms staat niet op die lijst, maar andere kanalen met een API kunnen tijdens het gratis audit-gesprek van 30 minuten worden afgebakend. TascaLab bouwt bovenop de tools die je al gebruikt, zoals Zendesk, Freshdesk, Jira en Slack, via API's, webhooks en Make of n8n. Een Starter Chat Bot kost 350–450 USD voor één of twee kanalen en een Standard Chat Bot 500–650 USD voor drie tot vijf. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en de meeste projecten duren 1–3 weken.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Heb ik A2P 10DLC-registratie nodig voor een sms-supportbot?",
        a: "Ja, als je via een platform als Twilio sms of mms naar Amerikaanse nummers stuurt vanaf een long code van 10 cijfers. Twilio blokkeert berichten naar de VS vanaf niet-geregistreerde 10DLC-nummers met foutcode 30034, ook terwijl de registratie nog loopt.",
      },
      {
        q: "Wat gebeurt er als een klant STOP sms't?",
        a: "Op long code-nummers handelt Twilio STOP en andere standaard afmeldtrefwoorden standaard af. Het stuurt een bevestiging, en je berichten bereiken dat nummer niet meer tot de klant START sms't.",
      },
      {
        q: "Waarom telde een kort bericht als twee segmenten?",
        a: "Het bevatte waarschijnlijk een teken buiten GSM-7, zoals een emoji of een typografisch aanhalingsteken. Dat zet het hele bericht om naar UCS-2, waarin maar 70 tekens in één segment passen.",
      },
      {
        q: "Kan ik een toll-free-nummer gebruiken in plaats van een 10DLC-nummer?",
        a: "Ja, maar daarvoor is Toll-Free Verification nodig. Tot die is goedgekeurd, mislukken berichten naar Amerikaanse en Canadese mobiele nummers met foutcode 30032.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — Twilio's request to your incoming message Webhook URL",
        url: "https://www.twilio.com/docs/messaging/guides/webhook-request",
      },
      {
        label: "Twilio Docs — Programmable Messaging and A2P 10DLC",
        url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc",
      },
      {
        label: "Twilio Docs — Error 30034: US A2P 10DLC - Message from an Unregistered Number",
        url: "https://www.twilio.com/docs/api/errors/30034",
      },
      {
        label: "Twilio Docs — Error 30032: Toll-Free Number Has Not Been Verified",
        url: "https://www.twilio.com/docs/api/errors/30032",
      },
      {
        label: "Twilio Docs — Customize users' opt-in and opt-out experience with Advanced Opt-Out",
        url: "https://www.twilio.com/docs/messaging/tutorials/advanced-opt-out",
      },
      {
        label: "Twilio Docs — How long can a message be?",
        url: "https://www.twilio.com/docs/glossary/what-sms-character-limit",
      },
      {
        label: "FCC — FCC 24-24 Report and Order on revoking consent under the TCPA",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      },
      {
        label: "FCC — FCC 26-67 Report and Order on revocation of consent (2026)",
        url: "https://docs.fcc.gov/public/attachments/FCC-26-67A1.pdf",
      },
      {
        label: "Zendesk Help Center — Getting started with Text",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823788314-Getting-started-with-Text",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "zendesk-automation",
      "omnichannel-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 7. Viber
  // ---------------------------------------------------------------------------
  {
    key: "viber-chatbot-for-customer-support",
    slug: "viber-chatbot-klantenservice",
    category: "channels",
    navLabel: "Viber-chatbot voor support",
    primaryKeyword: "Viber chatbot klantenservice",
    title: "Viber-chatbot voor klantenservice: Bot API en regels",
    description:
      "Zo werkt een Viber-chatbot voor klantenservice: auth token, set_webhook, callbacks, wie de bot berichten mag sturen, keyboards en overdracht aan je helpdesk.",
    h1: "Viber-chatbot voor klantenservice: hoe hij werkt en hoe je hem inricht",
    intro:
      "Een Viber-chatbot voor klantenservice is een botaccount dat gekoppeld is aan de Viber REST Bot API. Je server registreert een webhook met set_webhook, ontvangt callbacks als klanten de chat openen of berichten sturen, en antwoordt met send_message met het authenticatietoken van de bot. Viber-bots kunnen alleen blijvend berichten sturen aan gebruikers die zich hebben geabonneerd, dus elk supportgesprek begint bij de klant.",
    keyFacts: [
      "Elk API-verzoek bevat het authenticatietoken van de bot in de header X-Viber-Auth-Token.",
      "Webhook-URL's moeten SSL gebruiken; Viber ondersteunt geen zelfondertekende certificaten.",
      "De callbacks message, subscribed en unsubscribed zijn verplicht en kunnen niet worden uitgefilterd.",
      "Een conversation_started-gebeurtenis staat één welkomstbericht toe, geen doorlopende berichten.",
      "Volgens de ontwikkelaarsdocumentatie van Viber (stand oktober 2026) kunnen bots alleen op commerciële voorwaarden worden aangemaakt.",
    ],
    sections: [
      {
        heading: "Hoe een Viber-supportbot werkt",
        blocks: [
          {
            type: "p",
            text: "Je bot wordt geïdentificeerd met een authenticatietoken. Elk verzoek aan de REST Bot API moet dat bevatten in een HTTP-header genaamd X-Viber-Auth-Token; laat je het weg, dan krijg je de fout missing_auth_token. Je registreert een openbare HTTPS-webhook met set_webhook, Viber post er callbacks naartoe als er iets gebeurt, en jij antwoordt met send_message.",
          },
          {
            type: "p",
            text: "Als je set_webhook aanroept, controleert Viber je URL door er een callback met de gebeurtenis webhook naartoe te sturen. De controle slaagt alleen als je server antwoordt met HTTP-status 200. Een geslaagde set_webhook-respons heeft status 0; een onbereikbare URL geeft status 1 terug, invalidUrl.",
          },
          {
            type: "ol",
            items: [
              "De klant opent je bot via een link op je website, en Viber stuurt een conversation_started-callback.",
              "Je bot stuurt één welkomstbericht met knoppen voor veelvoorkomende onderwerpen.",
              "De klant antwoordt, waarmee hij zich abonneert, en je bot ontvangt een message-callback.",
              "De bot beantwoordt eenvoudige vragen en verzamelt gegevens voor al het andere.",
              "Onopgeloste zaken worden helpdesktickets, en antwoorden van medewerkers gaan terug via send_message.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks en callbackgebeurtenissen",
        blocks: [
          {
            type: "p",
            text: "De webhook-URL moet SSL gebruiken met een geldig certificaat van een vertrouwde certificeringsinstantie. Met de optionele lijst event_types in set_webhook bepaal je welke callbacks je ontvangt, maar sommige kun je niet uitschakelen.",
          },
          {
            type: "table",
            caption: "Viber-callbacks die een supportbot afhandelt",
            head: ["Gebeurtenis", "Wanneer hij binnenkomt", "Kun je hem uitfilteren?"],
            rows: [
              ["webhook", "Direct na set_webhook, om je URL te controleren", "Nee, het hoort bij de inrichting"],
              ["conversation_started", "Een gebruiker opent een één-op-éénchat met de bot, bijvoorbeeld via een deeplink", "Ja"],
              ["subscribed", "Een gebruiker abonneert zich op de bot (niet als het abonnement voortkomt uit een eerste bericht)", "Nee"],
              ["unsubscribed", "Een gebruiker zegt het abonnement op; de bot kan hem geen berichten meer sturen", "Nee"],
              ["message", "Een gebruiker stuurt de bot een bericht", "Nee"],
              ["delivered, seen, failed", "Statusupdates voor berichten die de bot heeft verstuurd", "Ja"],
            ],
          },
          {
            type: "p",
            text: "Viber ondertekent elke callback. De header X-Viber-Content-Signature bevat een HMAC-SHA256 van de request body, met je authenticatietoken als sleutel, dus controleer die voordat je iets verwerkt. Geeft je webhook geen HTTP 200 terug, dan probeert Viber de callback meerdere keren opnieuw, dus zorg dat een herhaalde callback geen dubbel ticket aanmaakt.",
          },
        ],
      },
      {
        heading: "Wie je bot berichten mag sturen",
        blocks: [
          {
            type: "p",
            text: "Deze regel bepaalt elke supportflow in Viber: je bot kan alleen berichten sturen aan gebruikers die zich hebben geabonneerd. Een conversation_started-gebeurtenis is geen abonnement. Die staat één welkomstbericht toe, dat je volgens Viber binnen 5 minuten moet versturen via send_message, inclusief de parameter receiver. De gebeurtenis wordt ook geactiveerd voor gebruikers die al geabonneerd zijn.",
          },
          {
            type: "p",
            text: "Een gebruiker abonneert zich door de bot een bericht te sturen. Dat eerste bericht activeert een message-callback, geen subscribed-callback, dus sla de gebruikers-ID op uit beide gebeurtenissen. Gebruikers kunnen zich op elk moment afmelden, waardoor verdere berichten van de bot direct worden geblokkeerd, en je ontvangt een unsubscribed-callback met hun ID. Abonneren ze zich opnieuw, dan worden alle context en tracking_data van het gesprek verwijderd.",
          },
          {
            type: "p",
            text: "Om gesprekken vanaf je website te starten, gebruik je een deeplink in de vorm viber://pa?chatURI= gevolgd door de URI van je bot. Met een parameter context geef je een waarde, zoals de pagina waar de klant vandaan kwam, mee aan de conversation_started-callback. Viber merkt op dat sommige browsers de deeplink mogelijk niet herkennen. Voor storingsmeldingen verstuurt de broadcast-API naar maximaal 300 ontvangers per verzoek, en iedereen die niet geabonneerd is, komt terug als failed.",
          },
        ],
      },
      {
        heading: "Berichten en keyboards versturen",
        blocks: [
          {
            type: "p",
            text: "Een send_message-verzoek noemt de receiver (de gebruikers-ID), het berichttype en een sender-object waarvan de naam verplicht is en maximaal 28 tekens mag bevatten. Tekstberichten kunnen tot 7.000 tekens lang zijn. Twee optionele velden zijn handig voor support: tracking_data (tot 4.096 tekens), dat Viber met het antwoord van de gebruiker terugstuurt, zodat het een ticket-ID of de huidige stap in een flow kan bevatten; en min_api_version, de minimale client-API-versie die nodig is voor het bericht, met standaardwaarde 1.",
          },
          {
            type: "p",
            text: "Keyboards kunnen via het veld keyboard aan elk berichttype worden gekoppeld. Elke knop heeft een ActionType:",
          },
          {
            type: "ul",
            items: [
              "reply (de standaard) stuurt het antwoord van de knop naar de bot.",
              "open-url opent een URL, binnen Viber of in een externe browser afhankelijk van OpenURLType, en stuurt de URL naar de bot.",
              "location-picker, share-phone en none zijn ook beschikbaar.",
            ],
          },
          {
            type: "p",
            text: "Twee keyboardinstellingen helpen bij supportflows. InputFieldState op hidden verwijdert het tekstinvoerveld als je wilt dat klanten een knop kiezen, en DefaultHeight op true houdt het keyboard op de hoogte van het standaardtoetsenbord.",
          },
        ],
      },
      {
        heading: "Commerciële voorwaarden en overdracht aan de helpdesk",
        blocks: [
          {
            type: "p",
            text: "Stand oktober 2026 vermeldt de ontwikkelaarsdocumentatie van Viber dat „Viber-bots sinds 5.02.24 alleen op commerciële voorwaarden kunnen worden aangemaakt”, waarbij aanvragen rechtstreeks naar Rakuten Viber gaan of via de geverifieerde officiële partners. Vraag Viber of een partner naar de actuele prijzen voordat je gaat bouwen. De respons van send_message bevat ook een veld voor de billing status, dat laat zien hoe elk bericht voor de facturering is gecategoriseerd.",
          },
          {
            type: "p",
            text: "Voor overdracht aan medewerkers noemt Zendesk Viber bij de kanalen die beschikbaar zijn via Sunshine Conversations. Voor het toevoegen van Sunshine Conversations-kanalen aan de Agent Workspace is Suite Professional of hoger nodig, en je moet ook messaging en de Agent Workspace gebruiken. Berichten worden dan tickets, en antwoorden van medewerkers gaan terug naar de klant. Zonder die opzet is het gebruikelijke patroon een kleine dienst die tickets aanmaakt via je helpdesk-API en antwoorden van medewerkers verstuurt met send_message.",
          },
        ],
      },
      {
        heading: "Hoe TascaLab kan helpen",
        blocks: [
          {
            type: "p",
            text: "De botkanalen die TascaLab aanbiedt, zijn website, telefoon, WhatsApp, Telegram, Facebook Messenger en Instagram. Viber staat niet op die lijst, maar andere kanalen met een API kunnen tijdens het gratis audit-gesprek van 30 minuten worden afgebakend. TascaLab bouwt bovenop de tools die je al gebruikt, zoals Zendesk, Freshdesk, Jira en Slack, via API's, webhooks en Make of n8n. Een Starter Chat Bot kost 350–450 USD voor één of twee kanalen en een Standard Chat Bot 500–650 USD voor drie tot vijf. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, zonder verborgen kosten, en de meeste projecten duren 1–3 weken.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan een Viber-bot klanten als eerste een bericht sturen?",
        a: "Alleen geabonneerde gebruikers. Een conversation_started-gebeurtenis staat één welkomstbericht toe, maar voor doorlopende berichten moet de gebruiker zich abonneren, wat gebeurt als hij de bot een bericht stuurt.",
      },
      {
        q: "Waarom mislukt set_webhook?",
        a: "Viber controleert je URL met een webhook-callback en accepteert hem alleen als je server HTTP 200 teruggeeft. De URL heeft ook SSL nodig met een certificaat van een vertrouwde instantie; zelfondertekende certificaten worden niet ondersteund.",
      },
      {
        q: "Hoe weet mijn bot waar een klant vandaan kwam?",
        a: "Voeg een parameter context toe aan je deeplink viber://pa?chatURI=. Viber geeft die aan je bot door in de conversation_started-callback.",
      },
      {
        q: "Kan ik nog een gratis Viber-bot aanmaken?",
        a: "Volgens de ontwikkelaarsdocumentatie van Viber (stand oktober 2026) kunnen bots alleen op commerciële voorwaarden worden aangemaakt, rechtstreeks via Rakuten Viber of via de geverifieerde officiële partners.",
      },
      {
        q: "Ondersteunt Zendesk Viber?",
        a: "Ja, via Sunshine Conversations. Volgens Zendesk vereisen de Sunshine Conversations-kanalen in de Agent Workspace Suite Professional of hoger.",
      },
    ],
    sources: [
      {
        label: "Viber Developers — Viber REST API",
        url: "https://developers.viber.com/docs/api/rest-bot-api/",
      },
      {
        label: "Viber Developers — Keyboards",
        url: "https://developers.viber.com/docs/tools/keyboards/",
      },
      {
        label: "Viber Developers — DeepLinks",
        url: "https://developers.viber.com/docs/tools/deep-links/",
      },
      {
        label: "Viber Developers — API Access White Paper",
        url: "https://developers.viber.com/docs/general/api-access-white-paper/",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — What is Sunshine Conversations and how does it work?",
        url: "https://support.zendesk.com/hc/en-us/articles/6380323137306-What-is-Sunshine-Conversations-and-how-does-it-work",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "telegram-support-bot",
      "chatbot-to-human-handoff",
    ],
    updated: "2026-10-19",
  },
];
