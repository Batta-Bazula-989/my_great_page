import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "zendesk-automatisering",
    category: "helpdesks",
    navLabel: "Zendesk-automatisering",
    primaryKeyword: "Zendesk automatisering",
    title: "Zendesk-automatisering: triggers, automatiseringen, macro's",
    description:
      "Zo werkt Zendesk-automatisering: triggers, automatiseringen en macro's, uurlijkse runs, triggervolgorde, omnichannel- en skillsrouting, webhooks en API.",
    h1: "Zendesk-automatisering: triggers, automatiseringen, macro's en routing",
    intro:
      "Zendesk-automatisering bestaat uit drie tools voor bedrijfsregels: triggers die direct afgaan zodra een ticket wordt aangemaakt of bijgewerkt, automatiseringen die elk uur volgens schema draaien, en macro's die agents handmatig toepassen. Routing (omnichannel of op basis van skills), webhooks en de Zendesk API dekken wat die regels zelf niet kunnen. Hieronder lees je hoe elk onderdeel werkt en wat je het best als eerste automatiseert.",
    keyFacts: [
      "Tickettriggers draaien direct nadat een ticket is aangemaakt of bijgewerkt, in de volgorde waarin ze in de lijst staan.",
      "Automatiseringen draaien eens per uur op niet-gesloten tickets, en elke automatisering kan per uur op maximaal 1.000 tickets acties uitvoeren.",
      "Elke automatisering heeft een voorwaarde nodig die maar één keer waar is, of een actie die een voorwaarde tenietdoet; anders blijft ze afgaan.",
      "Macro's bevatten alleen acties, geen voorwaarden, en kunnen alleen doen wat de agent die ze toepast mag doen.",
      "Een webhook koppel je óf aan Zendesk-events óf aan triggers en automatiseringen, niet aan allebei.",
    ],
    sections: [
      {
        heading: "Triggers vs. automatiseringen vs. macro's",
        blocks: [
          {
            type: "p",
            text: "Alle drie de tools wijzigen tickets, maar ze worden op een andere manier gestart. Zoals Zendesk het zelf formuleert: het verschil tussen triggers en automatiseringen zit niet in de acties die ze kunnen uitvoeren, maar in de voorwaarden die ze in gang zetten. Macro's hebben helemaal geen voorwaarden, omdat niets het ticket automatisch beoordeelt. Een agent bepaalt wanneer hij er een toepast.",
          },
          {
            type: "table",
            caption: "De drie tools voor bedrijfsregels in Zendesk",
            head: ["Tool", "Wat het start", "Voorwaarden", "Typisch gebruik"],
            rows: [
              [
                "Trigger",
                "Een ticket wordt aangemaakt of bijgewerkt (draait direct)",
                "Ja",
                "Nieuwe tickets routeren, velden instellen, meldingen versturen",
              ],
              [
                "Automatisering",
                "Uurlijks schema, op basis van verstreken tijd",
                "Ja, meestal 'Hours since'-voorwaarden",
                "Herinneringen, blijven liggende tickets escaleren, opgeloste tickets sluiten",
              ],
              [
                "Macro",
                "Een agent past hem handmatig toe",
                "Nee, alleen acties",
                "Standaardantwoorden en herhaalbare updates van meerdere velden",
              ],
            ],
          },
          {
            type: "p",
            text: "De drie vullen elkaar goed aan. Een veelgebruikt patroon is een macro die een tag toevoegt, waarna direct een trigger afgaat die op die tag let. Let op: een macro kan alleen doen wat de huidige gebruiker mag doen, dus een agent met beperkte rechten kan mogelijk niet elke wijziging uit een macro toepassen.",
          },
        ],
      },
      {
        heading: "Hoe de volgorde van triggers werkt",
        blocks: [
          {
            type: "p",
            text: "Telkens wanneer een ticket wordt aangemaakt of bijgewerkt, lopen alle tickettriggers er in een cyclus overheen, in de volgorde waarin ze in de lijst staan. Als een trigger het ticket bijwerkt, begint de cyclus opnieuw en draait elke trigger nog een keer, behalve de triggers die al zijn afgegaan en het ticket hebben bijgewerkt. Zo kan de wijziging van de ene trigger de voorwaarden van een andere trigger waar maken, ook als die een moment eerder nog niet waar waren.",
          },
          {
            type: "p",
            text: "De volgorde die Zendesk aanraadt voor tickettriggers:",
          },
          {
            type: "ol",
            items: [
              "Triggers die ticketwaarden wijzigen, zoals status, prioriteit of andere velden.",
              "Triggers die het ticket toewijzen.",
              "Meldingstriggers, als laatste, zodat e-mails en berichten de uiteindelijke staat van het ticket weergeven.",
            ],
          },
          {
            type: "p",
            text: "Gebruik je triggercategorieën, dan moet de volgorde van de categorieën overeenkomen met de volgorde waarin je de triggers wilt laten draaien; die wijzig je met Edit order in de lijst met triggers. Gebruik de voorwaarde Ticket | Is | Created voor regels die alleen op nieuwe tickets moeten werken (routing is het klassieke voorbeeld), en Ticket | Is | Updated voor zaken als meldingen bij updates. Tickettriggers draaien niet op gesloten tickets.",
          },
        ],
      },
      {
        heading: "Hoe vaak Zendesk-automatiseringen draaien en hoe je lussen voorkomt",
        blocks: [
          {
            type: "p",
            text: "Automatiseringen draaien eens per uur op alle niet-gesloten tickets. Het tijdstip is bij benadering: een automatisering start ergens binnen het uur, niet op een vaste minuut. Elke automatisering kan per uur op maximaal 1.000 tickets acties uitvoeren; wat overblijft, wacht op latere runs.",
          },
          {
            type: "p",
            text: "Omdat automatiseringen elk uur dezelfde tickets opnieuw controleren, eist Zendesk dat elke automatisering een voorwaarde bevat die maar één keer waar is, of een actie die minstens één voorwaarde tenietdoet. Zonder dat blijven de voorwaarden kloppen en gaat de automatisering in een eindeloze lus af. De standaardautomatisering 'close ticket after solved' doet dit vanzelf: door het ticket te sluiten valt het buiten de voorwaarde 'Status is Solved'. Bij eigen automatiseringen is de gebruikelijke oplossing om een tag toe te voegen en die tag in de voorwaarden uit te sluiten.",
          },
          {
            type: "note",
            text: "Voor tijdsvoorwaarden raadt Zendesk 'Hours since ... greater than' aan boven 'Hours since ... is'. Een 'is'-voorwaarde kan volledig gemist worden als de automatisering niet precies in dat uur draait. Ook een greater-than-voorwaarde heeft nog een tenietdoende actie of tag nodig.",
          },
        ],
      },
      {
        heading: "Routingopties voor binnenkomende tickets",
        blocks: [
          {
            type: "p",
            text: "Triggers kunnen tickets routeren door een groep, een toegewezen agent of skills in te stellen, maar Zendesk heeft ook speciale routingfuncties:",
          },
          {
            type: "ul",
            items: [
              "Omnichannel routing stuurt tickets uit e-mail, telefoongesprekken en messaging naar agents op basis van hun beschikbaarheid en capaciteit, en kan ook rekening houden met prioriteit en skills.",
              "Skills kunnen door triggers aan tickets worden toegevoegd en als verplicht of optioneel worden gemarkeerd. Verplichte skills beperken welke agents in aanmerking komen; optionele skills kunnen verlopen, zodat het ticket terugvalt op het normale routingmodel.",
              "Losse skills-based routing is een pull-model: tickets worden op skill gesorteerd en agents pakken werk op uit views op basis van skills. Het werkt niet voor voice- of messagingtickets.",
            ],
          },
          {
            type: "p",
            text: "Voor telefoongesprekken is omnichannel routing de enige manier waarop triggers de routing kunnen beïnvloeden, omdat er een ticket wordt aangemaakt zodra een gesprek in de wachtrij komt. Routingfuncties verschillen per abonnement, dus controleer wat jouw abonnement bevat voordat je een opzet rond skills ontwerpt.",
          },
        ],
      },
      {
        heading: "Webhooks en de Zendesk API",
        blocks: [
          {
            type: "p",
            text: "Moet een regel iets doorgeven aan een ander systeem, gebruik dan een webhook. Je maakt die aan in Admin Center en kiest het verbindingstype: Zendesk-events, of trigger of automatisering. Een webhook kan een van beide gebruiken, niet allebei, en de verbindingsmethode kun je later niet meer wijzigen. Voeg in een trigger of automatisering de actie 'Notify webhook' toe, selecteer de webhook en vul de payload in. Request bodies kunnen JSON, XML of form-encoded zijn, en de payload mag niet langer zijn dan 16.000 tekens. Elke webhook heeft een optie Test webhook om het request te controleren voordat het live gaat.",
          },
          {
            type: "p",
            text: "Moet de logica data lezen, beslissingen in code nemen of terugschrijven naar tickets, gebruik dan de Ticketing API. Tickets maak je aan met een POST naar het tickets-endpoint en werk je bij met een PUT naar de eigen URL van het ticket, met bulkvarianten voor veel tickets tegelijk. Requests kunnen authenticeren met een OAuth-accesstoken in een Bearer-header.",
          },
          {
            type: "p",
            text: "Goede eerste kandidaten voor Zendesk-automatisering:",
          },
          {
            type: "ul",
            items: [
              "Nieuwe tickets naar de juiste groep routeren op basis van kanaal, formulier, taal of trefwoorden.",
              "Herinneringen en escalaties voor tickets die te lang op een antwoord wachten.",
              "Tickets met hoge prioriteit of van VIP-klanten via een webhook in een Slack-kanaal plaatsen.",
              "Order- of accountgegevens via de API in een ticket zetten voordat een agent het opent.",
            ],
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab werkt bovenop je bestaande Zendesk-account, zonder overstap naar een ander platform, met de Zendesk API, webhooks en Make of n8n waar dat past. Ticket Routing & Categorization is een eenmalig project van 600–950 USD; Custom Automation voor flows die meerdere systemen omvatten kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang, basisdocumentatie en geen verborgen kosten, en de meeste implementaties duren 1–3 weken. Je kunt beginnen met een gratis auditgesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hoe vaak draaien Zendesk-automatiseringen?",
        a: "Eens per uur, op alle niet-gesloten tickets. De exacte minuut binnen het uur varieert, en elke automatisering kan per uur op maximaal 1.000 tickets acties uitvoeren.",
      },
      {
        q: "Wat is het verschil tussen een trigger en een automatisering in Zendesk?",
        a: "Triggers zijn gebaseerd op gebeurtenissen en draaien direct wanneer een ticket wordt aangemaakt of bijgewerkt. Automatiseringen zijn gebaseerd op tijd en draaien elk uur. Beide kunnen dezelfde soorten acties uitvoeren.",
      },
      {
        q: "Waarom blijft mijn Zendesk-automatisering afgaan op hetzelfde ticket?",
        a: "Waarschijnlijk ontbreekt een tenietdoende voorwaarde of actie. Voeg een actie toe die een van de voorwaarden onwaar maakt, bijvoorbeeld een tag die de voorwaarden uitsluiten.",
      },
      {
        q: "Kan een Zendesk-trigger een extern systeem aanroepen?",
        a: "Ja. Maak een webhook aan die aan triggers en automatiseringen is gekoppeld en voeg daarna de actie 'Notify webhook' toe aan de trigger, met de payload die je wilt versturen.",
      },
      {
        q: "Veranderen triggercategorieën de volgorde waarin triggers draaien?",
        a: "Ja. Triggers draaien in de volgorde van de lijst, en de volgorde van de categorieën moet overeenkomen met de volgorde waarin je ze wilt laten draaien. Die wijzig je met Edit order in de lijst met tickettriggers.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    key: "freshdesk-automation",
    slug: "freshdesk-automatisering",
    category: "helpdesks",
    navLabel: "Freshdesk-automatisering",
    primaryKeyword: "Freshdesk automatisering",
    title: "Freshdesk-automatisering: regels, toewijzing en webhooks",
    description:
      "Zo werkt Freshdesk-automatisering: regels voor Ticket Creation, Ticket Updates en Hourly Triggers, round-robin- en skill-based toewijzing, webhooks en API.",
    h1: "Freshdesk-automatisering: regeltypes, toewijzing en webhooks",
    intro:
      "Freshdesk-automatisering draait op drie regeltypes: Ticket Creation-regels voor nieuwe tickets, Ticket Updates-regels voor gebeurtenissen op bestaande tickets, en Hourly Triggers voor tijdgebonden controles. Toewijzing (round-robin, load-balanced of skill-based) bepaalt wie het ticket krijgt, en webhookacties plus de Freshdesk API verbinden alles met andere systemen.",
    keyFacts: [
      "Freshdesk heeft drie typen automatiseringsregels: Ticket Creation, Ticket Updates en Hourly Triggers.",
      "Hourly Triggers (voorheen Time Triggers) draaien elk uur, op kalenderuren, en alleen op tickets die in de afgelopen 30 dagen zijn bijgewerkt.",
      "Ticket Creation-regels kunnen ofwel de eerste overeenkomende regel uitvoeren, ofwel alle overeenkomende regels.",
      "Freshdesk voert vanuit automatiseringsregels maximaal 1.000 webhookcalls per uur uit; extra calls worden gebufferd.",
      "Load-based toewijzing telt alleen tickets met een actieve SLA-timer mee voor de werklast van een agent.",
    ],
    sections: [
      {
        heading: "De drie typen automatiseringsregels in Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Werk je al een tijdje met Freshdesk, dan ken je ze misschien onder hun oude namen. Freshdesk noemde ze vroeger Dispatch'r, Observer en Supervisor, en bracht ze later alle drie samen in één Automations-module, met een apart tabblad per regeltype.",
          },
          {
            type: "table",
            caption: "Typen automatiseringsregels in Freshdesk",
            head: ["Regeltype", "Vroegere naam", "Wanneer het draait", "Geschikt voor"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Eén keer, wanneer een nieuw ticket wordt aangemaakt",
                "Binnenkomende tickets categoriseren, prioriteren en routeren",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Wanneer een gedefinieerde gebeurtenis plaatsvindt op een bestaand ticket",
                "Reageren op antwoorden, notities, status- of veldwijzigingen",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Elk uur, volgens schema",
                "Herinneringen, escalaties, inactieve tickets automatisch sluiten",
              ],
            ],
          },
          {
            type: "p",
            text: "Ticket Creation-regels toetsen elk nieuw ticket aan je voorwaarden en voeren bij een match de acties uit. Je kiest of Freshdesk alleen de eerste overeenkomende regel uitvoert of alle overeenkomende regels. Kies je voor de eerste match, dan bepaalt de volgorde van de lijst welke regel wint, dus specifieke regels horen boven algemene.",
          },
        ],
      },
      {
        heading: "Ticket Updates-regels: gebeurtenissen, voorwaarden, acties",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates is het enige regeltype waarin je gebeurtenissen instelt. Een regel heeft minstens één gebeurtenis nodig en gaat af zodra een daarvan overeenkomt. Je stelt ook in wie de actie heeft uitgevoerd: een agent, de aanvrager, een van beiden, een collaborator of het System zelf.",
          },
          {
            type: "ul",
            items: [
              "Gebeurtenissen: een ticketeigenschap verandert, een agent of groep wordt bijgewerkt, er wordt een notitie toegevoegd, er wordt een antwoord verstuurd, er komt klantfeedback binnen; systeemgebeurtenissen zijn onder meer een mislukte e-mailbezorging en een ticket dat over tijd raakt.",
              "Voorwaarden: ticketeigenschappen (inclusief tags en aangepaste velden), contactgegevens van de aanvrager en bedrijfsvelden.",
              "Acties: velden instellen, agent of groep opnieuw toewijzen, tags of watchers toevoegen, een notitie toevoegen, een agent, groep of aanvrager e-mailen, als spam markeren of verwijderen, of een webhook activeren.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates is ook het enige regeltype dat een nieuw ticket kan aanmaken of een threadbericht kan toevoegen. Welke gebeurtenissen er precies beschikbaar zijn, hangt af van je abonnement en de functies die je hebt ingeschakeld.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: tijdgebonden regels",
        blocks: [
          {
            type: "p",
            text: "Hourly Triggers wachten niet op een gebeurtenis. Ze scannen elk uur de tickets en ondernemen actie op de tickets die overeenkomen. Dat schema bepaalt hoe je ze opstelt:",
          },
          {
            type: "ul",
            items: [
              "De tijdslimiet die je instelt moet minstens één uur zijn, want de regel draait maar eens per uur.",
              "Ze tellen kalenderuren, geen kantooruren.",
              "Ze verwerken alleen tickets die in de afgelopen 30 dagen zijn bijgewerkt.",
              "Ze werken alleen met ticketeigenschappen, niet met contact- of bedrijfseigenschappen.",
            ],
          },
          {
            type: "note",
            text: "Een tijdgebonden regel die niet zorgvuldig is gedefinieerd, wordt elk opeenvolgend uur opnieuw op hetzelfde ticket uitgevoerd. Een gebruikelijke oplossing is een 'greater than'-tijdvoorwaarde te combineren met een 'less than'-voorwaarde, zodat het ticket maar één keer overeenkomt.",
          },
        ],
      },
      {
        heading: "Automatische tickettoewijzing",
        blocks: [
          {
            type: "p",
            text: "Automatiseringsregels stellen meestal de groep in; toewijzing bepaalt welke agent in die groep het ticket krijgt. De automatische toewijzing van Freshdesk draait op de Omniroute-engine en biedt per groep drie methoden:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: verdeelt tickets om de beurt over de beschikbare agents in de groep, slaat agents met volle capaciteit over en geeft het ticket aan de geschikte agent die het langst geleden een ticket kreeg.",
              "Load-balanced: stuurt elk nieuw ticket naar de agent met de laagste werklast, totdat elke agent het ingestelde maximum bereikt. Alleen tickets met een actieve SLA-timer tellen mee voor de werklast, dus een ticket oplossen of naar een status zonder SLA-timer zetten maakt capaciteit vrij.",
              "Skill-based: agents hebben skills die op prioriteit zijn gerangschikt, en een nieuw ticket gaat naar een agent met de eerste overeenkomende skill. Freshdesk raadt een fallback-skill aan, met de groep als voorwaarde, die voor alle agents als laatste is gekoppeld, zodat geen enkel ticket zonder toewijzing blijft.",
            ],
          },
          {
            type: "p",
            text: "Welke methoden je kunt gebruiken, hangt af van je abonnement, dus controleer je groepsinstellingen voordat je er een kiest. Handmatig toegewezen tickets tellen nog steeds mee voor de werklast en kunnen een agent over de limiet duwen, waardoor automatische toewijzing aan die agent pauzeert totdat het aantal weer daalt.",
          },
        ],
      },
      {
        heading: "Webhooks en de Freshdesk API",
        blocks: [
          {
            type: "p",
            text: "Een webhook in Freshdesk is een automatiseringsactie die een API-call naar een ander systeem doet. Je kiest het requesttype en de callback-URL, en zowel de URL als de payload kunnen placeholders bevatten, zoals {{ticket.id}}. Doe je via een webhook een GET-call, dan kan de regel de response niet gebruiken; Freshdesk verwijst daarvoor naar zijn Trigger API-actie.",
          },
          {
            type: "p",
            text: "Freshdesk voert vanuit automatiseringsregels maximaal 1.000 webhookcalls per uur uit. Calls daarboven worden gebufferd totdat er in het volgende uur nieuwe capaciteit is, dus flows met hoge volumes moeten niet afhankelijk zijn van directe aflevering.",
          },
          {
            type: "p",
            text: "Voor integraties die buiten Freshdesk draaien, gebruik je de REST API op your-domain.freshdesk.com/api/v2/. Requests authenticeren met je API-sleutel als gebruikersnaam en een willekeurige dummywaarde als wachtwoord. Rate limits gelden per account per minuut en hangen af van je abonnement; een 429-response betekent dat de limiet op is, en de Retry-After-header vertelt hoeveel seconden je moet wachten. Het opvragen van tickets levert standaard alleen de afgelopen 30 dagen op, dus gebruik het filter updated_since voor oudere tickets.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt op je bestaande Freshdesk-account, zonder overstap naar een ander platform, met automatiseringsregels, webhooks, de Freshdesk API en Make of n8n waar dat helpt. Ticket Routing & Categorization is een eenmalig project van 600–950 USD; Custom Automation kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste implementaties duren 1–3 weken. Een gratis auditgesprek van 30 minuten is de eerste stap.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welke typen automatiseringsregels heeft Freshdesk?",
        a: "Ticket Creation-regels draaien op nieuwe tickets, Ticket Updates-regels draaien wanneer er iets gebeurt op een bestaand ticket, en Hourly Triggers draaien elk uur volgens schema.",
      },
      {
        q: "Wat is er gebeurd met Dispatch'r, Observer en Supervisor?",
        a: "Dat zijn de oudere namen voor dezelfde regeltypes: Dispatch'r voor het aanmaken van tickets, Observer voor ticketupdates en Supervisor voor tijdgebonden regels. Freshdesk heeft ze samengevoegd in één Automations-module.",
      },
      {
        q: "Gebruiken Hourly Triggers in Freshdesk kantooruren?",
        a: "Nee. Ze draaien op kalenderuren, en alleen op tickets die in de afgelopen 30 dagen zijn bijgewerkt.",
      },
      {
        q: "Hoeveel webhooks kunnen Freshdesk-automatiseringen versturen?",
        a: "Freshdesk voert vanuit automatiseringsregels maximaal 1.000 webhookcalls per uur uit. Calls boven die limiet worden gebufferd totdat er weer capaciteit vrijkomt.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "jira-service-management-automatisering",
    category: "helpdesks",
    navLabel: "Jira Service Mgmt-automatisering",
    primaryKeyword: "Jira Service Management automatisering",
    title: "Jira Service Management-automatisering: flows en SLA's",
    description:
      "Zo werkt Jira Service Management-automatisering: triggers, voorwaarden, acties, SLA- en goedkeuringstriggers, smart values, webhooks, queues en aanvraagtypen.",
    h1: "Jira Service Management-automatisering: zo werken flows, SLA's en webhooks",
    intro:
      "Jira Service Management-automatisering bestaat uit flows (voorheen regels genoemd) met drie onderdelen: een trigger die ze start, optionele voorwaarden die filteren op welke werkitems ze van toepassing zijn, en acties die het werk doen. Met servicespecifieke triggers, zoals SLA-overschrijdingen en goedkeuringen, plus smart values en webrequests automatiseer je het grootste deel van het triage-, escalatie- en meldingswerk rond je wachtrijen.",
    keyFacts: [
      "Elke automatiseringsflow bestaat uit een trigger, optionele voorwaarden en een of meer acties, die van boven naar beneden worden uitgevoerd.",
      "Jira Service Management voegt triggers toe zoals 'SLA threshold breached' en 'Approval required'.",
      "De actie 'Send web request' roept externe systemen aan; met een incoming webhook-trigger kunnen externe systemen een flow starten.",
      "Smart values zoals {{issue.key}} voegen gegevens uit werkitems in velden, opmerkingen en berichten in.",
      "Elke SLA heeft eigen start-, pauze- en stopvoorwaarden; pauzeren is optioneel.",
    ],
    sections: [
      {
        heading: "Triggers, voorwaarden en acties",
        blocks: [
          {
            type: "p",
            text: "De documentatie van Atlassian noemt automatiseringsregels tegenwoordig 'flows'; je ziet beide termen, en ze betekenen hetzelfde. Je kunt een flow vanaf nul opbouwen, vanuit een template of met Rovo maken, en zodra hij is ingeschakeld, worden de stappen in volgorde van boven naar beneden uitgevoerd.",
          },
          {
            type: "table",
            caption: "De drie onderdelen van een automatiseringsflow in Jira Service Management",
            head: ["Onderdeel", "Wat het doet", "Voorbeelden"],
            rows: [
              [
                "Trigger",
                "Start de flow wanneer er iets gebeurt",
                "Werkitem aangemaakt, werkitem van status gewijzigd, opmerking toegevoegd, SLA-drempel overschreden, goedkeuring vereist, gepland, incoming webhook",
              ],
              [
                "Voorwaarde (optioneel)",
                "Beperkt op welke werkitems de flow werkt",
                "Werkitem voldoet aan een JQL-filter, opmerking is intern of openbaar, gebruikerstype",
              ],
              [
                "Actie",
                "Doet het werk",
                "Statusovergang, veld bewerken, opmerking toevoegen, e-mail versturen, webrequest versturen, Slack- of Microsoft Teams-bericht versturen",
              ],
            ],
          },
          {
            type: "p",
            text: "Twee triggers zijn specifiek voor servicewerk. Met 'SLA threshold breached' kies je een SLA en laat je de flow afgaan zodra die is overschreden of op het punt staat overschreden te worden. 'Approval required' gaat af wanneer een werkitem waarvoor goedkeuring nodig is, wordt aangemaakt of bijgewerkt, of wanneer er nieuwe goedkeurders worden toegevoegd. Een geplande trigger laat een flow op een timer draaien, wat handig is voor periodieke controles, zoals het oplijsten van werkitems die bijna over hun SLA gaan.",
          },
        ],
      },
      {
        heading: "Wachtrijen, aanvraagtypen en SLA's: waar je omheen automatiseert",
        blocks: [
          {
            type: "p",
            text: "Automatisering in Jira Service Management is er vooral om drie structuren accuraat te houden:",
          },
          {
            type: "ul",
            items: [
              "Wachtrijen (queues) zijn gefilterde sets werkitems die agents een gericht overzicht van hun werk geven. Ze filteren op velden zoals status, werktype, toegewezen persoon en prioriteit, of op JQL. Agents kunnen geen wachtrijen aanmaken of bewerken; dat doen space-admins.",
              "Aanvraagtypen (request types) zijn de formulieren die klanten op het portaal gebruiken om aanvragen in te dienen. Elk aanvraagtype is gekoppeld aan precies één werktype: het aanvraagtype regelt de naamgeving en portaalinstellingen, terwijl het werktype de workflow en velden bevat. Eén werktype kan achter veel aanvraagtypen zitten.",
              "SLA's meten tijd ten opzichte van doelen. Elke SLA heeft eigen start-, pauze- en stopvoorwaarden; pauzeren is optioneel en wordt meestal gebruikt terwijl je op een reactie van de klant wacht, en de meting stopt zodra aan een van de stopvoorwaarden is voldaan.",
            ],
          },
          {
            type: "p",
            text: "In de praktijk stellen flows de velden in waarop wachtrijen en SLA-doelen filteren. Als een flow de prioriteit of een aangepast veld instelt op basis van het aanvraagtype of de inhoud van het bericht, pakken de juiste wachtrij en het juiste SLA-doel het werkitem automatisch op.",
          },
        ],
      },
      {
        heading: "Smart values",
        blocks: [
          {
            type: "p",
            text: "Met smart values voegt een flow gegevens uit het werkitem in velden, opmerkingen, e-mails en bodies van webrequests in. {{issue.key}} geeft de sleutel terug, bijvoorbeeld PROJ-123. Andere velden volgen hetzelfde patroon met de naam van het veld, ook aangepaste velden; als twee velden dezelfde naam hebben, gebruik je in plaats daarvan het ID van het aangepaste veld.",
          },
          {
            type: "p",
            text: "De interface van Atlassian zegt nu 'work item' waar vroeger 'issue' stond, maar de syntax voor smart values in de documentatie gebruikt nog steeds het voorvoegsel issue. Over velden met meerdere waarden kun je een lus maken met de #-syntax, afgesloten met {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks en externe systemen",
        blocks: [
          {
            type: "p",
            text: "Webhooks werken in beide richtingen:",
          },
          {
            type: "ul",
            items: [
              "Uitgaand: de actie 'Send web request' roept de API van een ander systeem aan wanneer een flow draait, en kan responsdata teruggeven voor latere stappen. Je ontvangende systeem moet requests vanaf het netwerk van Atlassian accepteren.",
              "Inkomend: de incoming webhook-trigger geeft een flow een eigen URL, zodat een extern systeem (een chatbot, een factureringstool, een monitoringtool) de flow kan starten met een HTTP-request.",
              "Chattools: de acties 'Send Slack message' en 'Send Microsoft Teams message' plaatsen berichten in kanalen, met smart values in de berichttekst.",
            ],
          },
        ],
      },
      {
        heading: "Gebruikslimieten en wat je eerst automatiseert",
        blocks: [
          {
            type: "p",
            text: "Per oktober 2026 meet Jira Cloud het automatiseringsgebruik per product per maand, met limieten die afhangen van je abonnement. Atlassian publiceert op de pagina 'How is your automation usage calculated' hoe het gebruik wordt geteld; bekijk die, en je huidige verbruik, voordat je geplande flows met een hoge frequentie toevoegt.",
          },
          {
            type: "p",
            text: "Veelvoorkomende eerste flows voor een servicedesk:",
          },
          {
            type: "ul",
            items: [
              "Prioriteit, component of toegewezen persoon bij het aanmaken instellen op basis van het aanvraagtype en de inhoud van de aanvraag.",
              "Een bericht in een escalatiekanaal plaatsen wanneer een SLA op het punt staat overschreden te worden.",
              "De klant een herinnering sturen wanneer een aanvraag op hem wacht, en de aanvraag na een vaste tijd met een opmerking op opgelost zetten.",
              "Nieuwe aanvragen met hoge prioriteit via 'Send web request' naar een extern systeem sturen.",
            ],
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab werkt bovenop je bestaande Jira Service Management-site, zonder overstap naar een ander platform, en combineert native automatisering met API's, webhooks en Make of n8n waar een flow andere tools moet bereiken. Ticket Routing & Categorization kost eenmalig 600–950 USD; Custom Automation kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste implementaties duren 1–3 weken. Begin met een gratis auditgesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Zijn Jira-automatiseringsregels en flows hetzelfde?",
        a: "Ja. De nieuwere documentatie en interface van Atlassian gebruiken 'flow' voor wat vroeger een automatiseringsregel heette. De opbouw is hetzelfde: trigger, voorwaarden en acties.",
      },
      {
        q: "Kan Jira Service Management-automatisering reageren op SLA-overschrijdingen?",
        a: "Ja. Met de trigger 'SLA threshold breached' kies je een SLA en laat je de flow afgaan zodra die is overschreden of op het punt staat overschreden te worden.",
      },
      {
        q: "Hoe stuur ik gegevens vanuit Jira Service Management naar een ander systeem?",
        a: "Gebruik de actie 'Send web request' in een flow. Die roept de API van het andere systeem aan wanneer de flow draait en kan responsdata teruggeven aan latere stappen.",
      },
      {
        q: "Wat is het verschil tussen een aanvraagtype en een werktype?",
        a: "Een aanvraagtype is het formulier op het portaal dat de klant ziet; het werktype erachter bevat de workflow en de velden. Elk aanvraagtype gebruikt één werktype, en één werktype kan veel aanvraagtypen bedienen.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "slack-support-automation",
    slug: "klantenservice-automatiseren-slack",
    category: "helpdesks",
    navLabel: "Support automatiseren in Slack",
    primaryKeyword: "klantenservice automatiseren met Slack",
    title: "Klantenservice automatiseren met Slack: alerts en escalaties",
    description:
      "Klantenservice automatiseren met Slack: escalatie-alerts, Workflow Builder, webhooks, Bolt-apps, Zendesk-, Freshdesk- en Jira-integraties, Slack Connect.",
    h1: "Klantenservice automatiseren met Slack: alerts, escalaties en klantkanalen",
    intro:
      "Voor de meeste supportteams is Slack niet de plek waar klanten contact opnemen. Het is de plek waar het team escaleert, alerts ontvangt en afstemt. Klantenservice automatiseren met Slack betekent: de juiste ticketgebeurtenissen in het juiste kanaal krijgen, Slack-berichten zo nodig omzetten in tickets en, voor B2B-teams, klanten rechtstreeks bedienen in Slack Connect-kanalen.",
    keyFacts: [
      "Workflows in Workflow Builder kunnen starten vanaf een link, een webhook, een schema, een geplaatst bericht, een emoji-reactie of iemand die lid wordt van een kanaal.",
      "Een incoming webhook is een unieke URL die aan één kanaal is gekoppeld; je stuurt er met een POST een JSON-payload naartoe om een bericht te plaatsen.",
      "Slack staat apps over het algemeen niet meer dan één bericht per seconde per kanaal toe.",
      "Zendesk, Freshdesk en Jira Service Management bieden elk een Slack-integratie om tickets aan te maken en meldingen te versturen.",
      "Met Slack Connect kunnen mensen van andere organisaties met je samenwerken in een gedeeld kanaal.",
    ],
    sections: [
      {
        heading: "Manieren om supportwerk in Slack te automatiseren",
        blocks: [
          {
            type: "p",
            text: "Er zijn vier belangrijke bouwstenen, van no-code tot maatwerkcode. Kies de eenvoudigste die het werk doet.",
          },
          {
            type: "table",
            caption: "Slack-automatiseringsopties voor supportteams",
            head: ["Optie", "Wat het is", "Het meest geschikt voor"],
            rows: [
              [
                "Helpdeskintegratie",
                "De Slack-app van Zendesk, Freshdesk of Jira Service Management",
                "Ticketmeldingen in kanalen en tickets aanmaken vanuit berichten",
              ],
              [
                "Workflow Builder",
                "De ingebouwde no-codetool van Slack voor workflows",
                "Intakeformulieren, escalatiechecklists, geplande herinneringen",
              ],
              [
                "Incoming webhook",
                "Een URL die een JSON-bericht in één kanaal plaatst",
                "Eenrichtingsalerts vanuit je helpdesk, scripts of Make/n8n",
              ],
              [
                "Eigen Slack-app (Bolt)",
                "Je eigen app die naar events en commando's luistert",
                "Tweerichtingsacties: knoppen, slash-commando's, opzoeken in andere systemen",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integraties van helpdesk naar Slack",
        blocks: [
          {
            type: "p",
            text: "Begin met wat je helpdesk al biedt:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: agents kunnen tickets aanmaken met de snelkoppeling /zendesk, een berichtactie die een Slack-bericht omzet in een ticket, de Zendesk-app in de zijbalk of een @zendesk-vermelding in een Slack Connect-kanaal. Tickets die zo worden aangemaakt, krijgen de tag created_from_slack. Beheerders gebruiken triggers om te bepalen welke gebeurtenissen in welke kanalen verschijnen, en de Zendesk-app moet worden uitgenodigd in elk kanaal dat meldingen ontvangt.",
              "Freshdesk: de Slack-app kan een kanaalbericht omzetten in een ticket, met het bericht als beschrijving, en tickets kunnen ook vanaf nul in Slack worden aangemaakt. Slack-leden die geen Freshdesk-agent zijn, kunnen ook tickets aanmaken.",
              "Jira Service Management: chat in Slack koppelt aanvraagkanalen, waar mensen om hulp vragen, aan een agentkanaal. Agents kunnen een werkitem aanmaken door op een bericht te reageren met de emoji :ticket:, en aanvraagtypen moeten aan een aanvraagkanaal zijn gekoppeld om daar beschikbaar te zijn.",
            ],
          },
          {
            type: "p",
            text: "Dekt de ingebouwde integratie een gebeurtenis die voor jou belangrijk is niet, val dan terug op een incoming webhook of Workflow Builder, zoals hieronder beschreven.",
          },
        ],
      },
      {
        heading: "Workflow Builder voor interne escalatie",
        blocks: [
          {
            type: "p",
            text: "Met Workflow Builder kan iedereen zonder code workflows met meerdere stappen bouwen. Een workflow start vanaf een trigger: een deelbare link, een webhook, een schema, een update van een lijstitem, een bericht dat in een kanaal wordt geplaatst, iemand die lid wordt van een kanaal of een emoji-reactie. Stappen worden uitgevoerd in de volgorde die je instelt en kunnen Slack-acties zijn, zoals een bericht versturen, connectorstappen voor diensten van derden, of eigen stappen die door developers zijn gebouwd. Variabelen geven gegevens uit eerdere stappen door aan latere, knoppen pauzeren een workflow totdat iemand klikt, en vertakkingen leiden mensen op basis van voorwaarden langs verschillende paden.",
          },
          {
            type: "p",
            text: "Typische toepassingen in support: een escalatieformulier dat via een link start, de ticket-URL en de ernst verzamelt en een gestructureerd bericht in een escalatiekanaal plaatst; een workflow op een emoji-reactie die de dienstdoende lead erbij haalt; of een geplande wekelijkse herinnering om blijven liggende tickets te bekijken.",
          },
        ],
      },
      {
        heading: "Incoming webhooks en Bolt-apps",
        blocks: [
          {
            type: "p",
            text: "Een incoming webhook is de eenvoudigste manier om alerts uit elk systeem naar Slack te sturen. Elke webhook-URL is gekoppeld aan één kanaal; je stuurt een HTTP POST met een JSON-body met een text-veld, en optioneel Block Kit-blokken voor een rijkere opmaak. Iedereen die de URL heeft, kan berichten in je workspace plaatsen, dus behandel hem als een wachtwoord en houd hem uit openbare code.",
          },
          {
            type: "p",
            text: "Let op het volume. Volgens de rate limits van Slack mogen apps over het algemeen niet meer dan één bericht per seconde per kanaal plaatsen, of dat nu via chat.postMessage of een incoming webhook gaat. Korte pieken worden getolereerd, maar bij aanhoudende overschrijding krijg je HTTP 429-responses met een Retry-After-header. Bundel bij drukke wachtrijen de alerts of stuur een samenvatting in plaats van één bericht per ticket.",
          },
          {
            type: "p",
            text: "Heb je tweerichtingsinteractie nodig, zoals een knop die een ticket toewijst of een slash-commando dat een bestelling opzoekt, bouw dan een Slack-app met Bolt, het framework van Slack voor JavaScript, Python en Java. Een Bolt-app luistert naar events en slash-commando's in je workspace en reageert erop, bijvoorbeeld door de API van je helpdesk aan te roepen.",
          },
        ],
      },
      {
        heading: "Slack Connect voor klantkanalen",
        blocks: [
          {
            type: "p",
            text: "Met Slack Connect deel je een kanaal met mensen van andere organisaties, die elk vanuit hun eigen Slack werken. B2B-supportteams gebruiken het als vast kanaal per belangrijke klant. Je nodigt een externe organisatie uit via de kanaalinstellingen en kiest een rechtenniveau: alleen berichten plaatsen, of berichten plaatsen, uitnodigen en meer. Beheerders kunnen beperken wie externe mensen mag uitnodigen. Een Slack Connect-kanaal kan maximaal 250 organisaties bevatten, inclusief die van jou.",
          },
          {
            type: "p",
            text: "Ook klantkanalen hebben tickettracking nodig. De integratie van Zendesk ondersteunt @zendesk-vermeldingen in Slack Connect-kanalen, met minder opties voor externe gebruikers; voor andere helpdesks kan een kleine Bolt-app of een Make/n8n-flow getagde berichten omzetten in tickets.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab koppelt Slack aan de helpdesk die je al gebruikt (Zendesk, Freshdesk, Jira of interne tools) via API's, webhooks en Make of n8n, zonder overstap naar een ander platform. Automated Reports, geleverd in Slack of per e-mail, kosten eenmalig 500–900 USD; Custom Automation voor tweerichtingsflows in Slack kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang en basisdocumentatie, en de meeste implementaties duren 1–3 weken. Begin met een gratis auditgesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan ik helpdesktickets aanmaken vanuit Slack-berichten?",
        a: "Ja. Zendesk en Freshdesk bieden allebei Slack-apps die een bericht omzetten in een ticket, en agents in Jira Service Management kunnen een werkitem aanmaken vanuit een bericht in een aanvraagkanaal door te reageren met de emoji :ticket:.",
      },
      {
        q: "Wat is de makkelijkste manier om supportalerts naar Slack te sturen?",
        a: "Gebruik de Slack-integratie van je helpdesk als die de gebeurtenis dekt die je nodig hebt. Stuur anders een JSON-payload naar een incoming webhook van Slack, vanuit de webhookactie van je helpdesk of vanuit Make of n8n.",
      },
      {
        q: "Kan een Slack-workflow worden gestart door een extern systeem?",
        a: "Ja. Workflow Builder ondersteunt een webhooktrigger, zodat een extern systeem een workflow kan starten door er een HTTP-request naartoe te sturen.",
      },
      {
        q: "Is er een limiet op het aantal berichten dat ik in een kanaal kan plaatsen?",
        a: "Slack staat apps over het algemeen niet meer dan één bericht per seconde per kanaal toe. Korte pieken worden getolereerd, maar aanhoudende overschrijding levert HTTP 429-fouten op.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    key: "intercom-automation",
    slug: "intercom-automatisering",
    category: "helpdesks",
    navLabel: "Intercom-automatisering",
    primaryKeyword: "Intercom automatisering",
    title: "Intercom-automatisering: Workflows, Fin, routing en API",
    description:
      "Intercom-automatisering: triggers, vertakkingen en acties in Workflows, toewijzing in de team-inbox, Fin AI Agent, Slack en Jira, webhooks en de REST API.",
    h1: "Intercom-automatisering: Workflows, toewijzing, Fin en de API",
    intro:
      "Intercom-automatisering bouw je vooral in Workflows: een visuele builder waarin een trigger de flow start, vertakkingen een pad kiezen en acties het werk doen, zoals taggen, toewijzen of Fin laten antwoorden. De toewijzingsmethode van elke team-inbox bepaalt daarna welk teamlid het gesprek krijgt, en webhooks plus de REST API dekken alles wat buiten Intercom moet gebeuren. Hieronder lees je hoe elk onderdeel werkt en waar je begint.",
    keyFacts: [
      "Workflows bouw je in een visuele builder; ze kunnen klantgericht zijn of stil op de achtergrond voor teamleden draaien.",
      "Met vertakkingen volgt een gesprek alleen het eerste overeenkomende pad; Apply rules voert elk overeenkomend pad uit.",
      "Er kan maar één SLA op een gesprek worden toegepast; latere SLA-acties uit andere workflows worden genegeerd.",
      "Balanced assignment geeft een gesprek aan het geschikte teamlid met de minste openstaande gesprekken.",
      "Webhookabonnementen maak je aan in de Developer Hub, niet via de API, en het endpoint moet HTTPS gebruiken.",
    ],
    sections: [
      {
        heading: "Hoe Intercom Workflows zijn opgebouwd",
        blocks: [
          {
            type: "p",
            text: "Workflows is de centrale plek in Intercom om klantgesprekken en processen van teamleden te automatiseren. Je bouwt ze in een visuele builder uit herbruikbare stappen. Een workflow kan klantgericht zijn, zoals een bot die begroet en triageert, of stil op de achtergrond voor je team draaien. Elke workflow combineert dezelfde paar soorten stappen.",
          },
          {
            type: "table",
            caption: "De bouwstenen van een Intercom-workflow",
            head: ["Bouwsteen", "Wat het doet", "Voorbeelden"],
            rows: [
              [
                "Trigger",
                "Bepaalt wanneer de workflow start en voor wie",
                "Wanneer een gesprek begint, tijdens een gesprek, bij een ticketgebeurtenis, of wanneer een andere workflow hem aanroept als herbruikbare workflow",
              ],
              [
                "Vertakkingen (branches)",
                "Controleren voorwaarden en sturen het gesprek over het eerste pad waarvan de voorwaarde overeenkomt",
                "Aparte paden voor verschillende doelgroepen, kanalen of onderwerpen",
              ],
              [
                "Apply rules",
                "Controleert elk pad en voert de acties uit van elk pad dat overeenkomt",
                "Meerdere onafhankelijke tags of attributen in één stap instellen",
              ],
              [
                "Acties",
                "Doen het werk",
                "Taggen, toewijzen, snoozen, prioriteit instellen, een SLA toepassen, Fin laten antwoorden, Slack informeren",
              ],
            ],
          },
          {
            type: "p",
            text: "Het verschil tussen vertakkingen en Apply rules is belangrijk wanneer voorwaarden overlappen. Met vertakkingen volgt een gesprek dat aan meerdere voorwaarden voldoet alleen het eerste overeenkomende pad, van boven naar beneden gelezen, dus zet de meest specifieke voorwaarden bovenaan. Apply rules voert de acties van elk overeenkomend pad uit, wat past bij stappen die elkaar moeten aanvullen in plaats van met elkaar te concurreren.",
          },
        ],
      },
      {
        heading: "Inboxautomatisering: toewijzing, prioriteit en SLA's",
        blocks: [
          {
            type: "p",
            text: "De meeste inboxautomatisering is een achtergrondworkflow die uit acties bestaat. Assign stuurt een gesprek naar een gekozen teamlid of team-inbox. Tag voegt een tag toe; tags maak en beheer je in de instellingen van je workspace. Snooze haalt het gesprek tijdelijk uit de inbox van het teamlid; als de klant of een teamlid tijdens de snooze reageert, eindigt de workflow. Set priority geeft aan hoe urgent het gesprek is.",
          },
          {
            type: "p",
            text: "SLA's worden ook met een actie toegepast, maar er kan maar één SLA aan een gesprek worden toegevoegd. Probeert een latere workflow een andere SLA toe te passen, dan wordt die actie genegeerd, dus bepaal welke workflow de SLA's beheert voordat je er meerdere bouwt.",
          },
          {
            type: "p",
            text: "Zodra een gesprek in een team-inbox belandt, bepaalt de toewijzingsmethode van die inbox wie het krijgt: handmatig, round robin of balanced. Balanced assignment geeft elk nieuw gesprek aan het geschikte teamlid met de minste openstaande gesprekken, en bij een gelijke stand gaat het naar het teamlid dat het langst op een gesprek heeft gewacht. Om in aanmerking te komen, moet een teamlid actief zijn en onder zijn toewijzingslimiet zitten. Intercom raadt balanced assignment aan voor supportteams.",
          },
          {
            type: "note",
            text: "Een eenvoudig startpatroon: één achtergrondworkflow op nieuwe gesprekken tagt ze op onderwerp, stelt de prioriteit in, past één SLA toe en wijst ze toe aan de juiste team-inbox. De toewijzingsmethode van de inbox kiest vervolgens het teamlid.",
          },
        ],
      },
      {
        heading: "Fin AI Agent in je workflows",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent is de AI-agent van Intercom voor het beantwoorden van klantvragen. Fin antwoordt op basis van de content die je aanlevert: openbare artikelen, documenten, snippets en openbare URL's, die je beheert onder Knowledge > Sources. Fin houdt rekening met doelgroeptargeting op Intercom-artikelen en antwoordt dus niet vanuit privé- of afgeschermde artikelen die de klant in Messenger niet mag zien.",
          },
          {
            type: "p",
            text: "Fin wordt ondersteund in Intercom Messenger op web, iOS en Android, en op e-mail, WhatsApp, sms, Facebook en Instagram. Binnen Workflows laat een stap 'Let Fin answer' Fin op elk punt in de flow reageren en doorgaan totdat het probleem is opgelost of naar een teamlid is geëscaleerd.",
          },
          {
            type: "p",
            text: "Plan de overdracht net zo zorgvuldig als de antwoorden. Bepaal naar welke team-inbox een geëscaleerd gesprek moet gaan, en bouw dat pad in de workflow, zodat het nooit zonder toewijzing blijft liggen.",
          },
        ],
      },
      {
        heading: "Webhooks en de Intercom REST API",
        blocks: [
          {
            type: "p",
            text: "Moet iets in Intercom een ander systeem bereiken, gebruik dan webhooks. Je stelt ze in via de Developer Hub: open je app, ga naar Configure en daarna Webhooks, en vul de URL van je endpoint in. Het endpoint moet HTTPS gebruiken en een HEAD-request accepteren, waarmee Intercom de URL valideert. Abonnementen kunnen alleen in de Developer Hub worden aangemaakt, niet via de API.",
          },
          {
            type: "p",
            text: "Daarna kies je topics. Een topic is een gebeurtenis in Intercom die de webhook activeert, en elk topic is gekoppeld aan een of meer rechten die je app moet hebben. Intercom stuurt voor elk topic waarop je bent geabonneerd een HTTP POST naar je endpoint, en elke payload bevat het topic en het aantal afleverpogingen. Met de knop 'Send a test request' in het webhookgedeelte test je het endpoint.",
          },
          {
            type: "p",
            text: "Wil je vanuit je eigen code acties op gesprekken uitvoeren, gebruik dan de REST API. Requests gaan naar api.intercom.io met een accesstoken als Bearer-token in de Authorization-header, plus een Intercom-Version-header die standaard de versie gebruikt die in je app is ingesteld. Een antwoord sturen is bijvoorbeeld een POST naar /conversations/{id}/reply met een JSON-body die het berichttype, het type auteur en de berichttekst instelt.",
          },
          {
            type: "p",
            text: "Goede eerste kandidaten voor Intercom-automatisering:",
          },
          {
            type: "ul",
            items: [
              "Nieuwe gesprekken taggen en toewijzen aan de juiste team-inbox.",
              "Eén SLA per gesprek toepassen en de prioriteit verhogen voor belangrijke accounts.",
              "Gespreksgebeurtenissen naar een webhook sturen, zodat Make of n8n andere systemen kan bijwerken.",
              "Nieuwe of geëscaleerde gesprekken in een Slack-kanaal plaatsen.",
            ],
          },
        ],
      },
      {
        heading: "Integraties met Slack en Jira",
        blocks: [
          {
            type: "p",
            text: "Voor Slack-alerts stel je het doel van een Slack-kanaal in op alleen meldingen (notification-only) en voeg je een stap 'Notify Slack' toe aan een workflow. De Intercom-app plaatst de melding, en latere meldingen voor hetzelfde gesprek verschijnen als antwoorden in de thread onder het oorspronkelijke bericht. Antwoorden die in die thread worden getypt, gaan niet terug naar het Intercom-gesprek, dus teamleden beantwoorden klanten nog steeds in Intercom.",
          },
          {
            type: "p",
            text: "Voor escalaties naar engineering kan de app Jira for Tickets van Intercom automatisch Jira-issues aanmaken vanuit de tickettypen die je opgeeft, de statussen van Jira-issues terugspiegelen naar de Intercom-tickets en notities synchroniseren. De basisautomatisering koppelt alleen de titel en de beschrijving; voor meer velden gebruik je de aangepaste automatisering, gebouwd op Workflows-templates. De app maakt geen issues rechtstreeks vanuit gesprekken aan, dus een gesprek moet eerst worden omgezet in een ticket.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt bovenop de tools die je al gebruikt, zonder overstap naar een ander platform, met API's, webhooks en Make of n8n. Intercom heeft zowel een REST API als webhooks, dus een koppeling is vrijwel zeker mogelijk; de precieze opzet wordt bevestigd in een gratis auditgesprek van 30 minuten. Ticket Routing & Categorization is een eenmalig project van 600–950 USD, en Custom Automation voor flows over meerdere systemen kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang, basisdocumentatie en geen verborgen kosten, en de meeste implementaties duren 1–3 weken.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat is het verschil tussen vertakkingen en Apply rules in Intercom Workflows?",
        a: "Vertakkingen sturen het gesprek alleen over het eerste pad waarvan de voorwaarde overeenkomt, van boven naar beneden gecontroleerd. Apply rules controleert elk pad en voert de acties uit van elk pad dat overeenkomt.",
      },
      {
        q: "Welke toewijzingsmethode raadt Intercom aan voor supportteams?",
        a: "Balanced assignment. Die geeft elk gesprek aan het actieve teamlid onder zijn toewijzingslimiet met de minste openstaande gesprekken; bij een gelijke stand gaat het naar wie het langst heeft gewacht.",
      },
      {
        q: "Welke content gebruikt Fin AI Agent om klanten te antwoorden?",
        a: "Openbare artikelen, documenten, snippets en openbare URL's die je toevoegt onder Knowledge > Sources. Fin houdt rekening met doelgroeptargeting op artikelen en antwoordt dus niet vanuit artikelen die de klant niet kan zien.",
      },
      {
        q: "Kan ik webhookabonnementen in Intercom via de API aanmaken?",
        a: "Nee. Webhookabonnementen stel je in via de Developer Hub. Het endpoint moet HTTPS gebruiken en een HEAD-request accepteren, waarmee Intercom het valideert.",
      },
      {
        q: "Kunnen teamleden klanten antwoorden vanuit de Slack-meldingen van Intercom?",
        a: "Nee. In een Slack-kanaal voor alleen meldingen gaan antwoorden in de thread van een melding niet terug naar het Intercom-gesprek.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    key: "hubspot-service-hub-automation",
    slug: "hubspot-service-hub-automatisering",
    category: "helpdesks",
    navLabel: "HubSpot Service Hub-automatisering",
    primaryKeyword: "HubSpot Service Hub automatisering",
    title: "HubSpot Service Hub-automatisering: tickets en workflows",
    description:
      "HubSpot Service Hub-automatisering: helpdeskkanalen en routing, ticketpipelines en statussen, SLA-doelen, ticketworkflows, chatbots, webhooks en de API.",
    h1: "HubSpot Service Hub-automatisering: helpdesk, tickets, workflows en de API",
    intro:
      "HubSpot Service Hub-automatisering draait om het ticket: helpdeskkanalen maken tickets aan, routing wijst ze toe, pipelines en statussen volgen ze, en ticketgebaseerde workflows voeren er acties op uit. Regelgebaseerde chatbots verzamelen gegevens voordat er een ticket bestaat, en de webhookactie in workflows en de CRM API verbinden HubSpot met al het andere. Hieronder lees je wat elk onderdeel doet en waar je begint.",
    keyFacts: [
      "Standaard maakt de helpdesk automatisch tickets aan vanuit elk kanaal dat je ermee verbindt.",
      "De standaard Support Pipeline heeft vier ticketstatussen: New, Waiting on contact, Waiting on us en Closed.",
      "SLA-doelen in de helpdesk kunnen de tijd tot het eerste antwoord, de tijd tot het volgende antwoord en de tijd tot sluiting meten.",
      "De webhookactie in workflows accepteert alleen URL's die met HTTPS beginnen.",
      "Via de API maak je tickets aan met een POST naar /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Wat je kunt automatiseren in HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "Automatisering in Service Hub is verspreid over verschillende tools die allemaal op het ticketrecord werken. Bepaal waar een regel thuishoort voordat je hem bouwt; de meeste problemen ontstaan doordat dezelfde logica op twee plekken staat.",
          },
          {
            type: "table",
            caption: "Waar elk type Service Hub-automatisering zit",
            head: ["Tool", "Wat het automatiseert", "Typisch gebruik"],
            rows: [
              [
                "Helpdeskkanalen en routing",
                "Tickets aanmaken vanuit verbonden kanalen en ze toewijzen",
                "Elke supportmail of chat wordt een ticket en komt bij het juiste team terecht",
              ],
              [
                "Ticketpipelines en statussen",
                "De fasen die een ticket doorloopt, en of elke fase als open of gesloten telt",
                "Aparte pipelines voor verschillende soorten supportwerk",
              ],
              [
                "SLA-doelen",
                "Doelen voor de tijd tot het eerste antwoord, het volgende antwoord en sluiting",
                "Een sneller reactiedoel voor chat dan voor e-mail",
              ],
              [
                "Ticketgebaseerde workflows",
                "Acties op tickets die aan de inschrijvingstriggers voldoen",
                "Eigenaren rouleren, eigenschappen bijwerken, vertraagde opvolging",
              ],
              [
                "Regelgebaseerde chatbots",
                "Vragen, tickets aanmaken en overdracht in chat",
                "Bestelgegevens verzamelen voordat een agent aansluit",
              ],
              [
                "Webhooks en de API",
                "Ticketgegevens naar buiten sturen, en tickets aanmaken of bijwerken vanuit andere systemen",
                "Tickets synchroniseren met Jira of interne tools",
              ],
            ],
          },
        ],
      },
      {
        heading: "Helpdeskkanalen en routing",
        blocks: [
          {
            type: "p",
            text: "Help desk is de werkomgeving van HubSpot voor ticketgebaseerde support. Je kunt er chat-, e-mail-, formulier-, bel- en Facebook Messenger-kanalen mee verbinden. Standaard worden tickets automatisch aangemaakt vanuit elk kanaal dat je verbindt, en HubSpot raadt aan al je supportkanalen te verbinden, omdat bij tickets uit niet-verbonden kanalen het onderwerp en de thread in de helpdesk kunnen ontbreken.",
          },
          {
            type: "p",
            text: "Routing stel je per kanaal in. Verbind je bijvoorbeeld een team-e-mailadres, dan kies je de standaardpipeline, -status en -prioriteit voor nieuwe tickets, en daarna een routingoptie:",
          },
          {
            type: "ul",
            items: [
              "Specifieke gebruikers of teams.",
              "De eigenaar van het contact.",
              "Skill-based routing, die tickets koppelt aan de skills van agents.",
              "Een toewijzingsworkflow, als je logica nodig hebt die verder gaat dan de ingebouwde opties.",
              "Niemand, waardoor tickets in de weergave Unassigned blijven staan zodat agents ze kunnen oppakken.",
            ],
          },
          {
            type: "note",
            text: "Automatische en skill-based routing hangen af van je seats en abonnement. Controleer wat je account bevat voordat je een opzet rond een specifieke routingoptie ontwerpt.",
          },
        ],
      },
      {
        heading: "Ticketpipelines, statussen en SLA-doelen",
        blocks: [
          {
            type: "p",
            text: "Tickets bewegen door een pipeline, en voor tickets heten de fasen van de pipeline statussen. De standaard Support Pipeline heeft er vier: New, Waiting on contact, Waiting on us en Closed. Je beheert pipelines onder Settings > Objects > Tickets > Pipelines, en elke status die je toevoegt, moet je markeren als Open of Closed.",
          },
          {
            type: "p",
            text: "Die keuze stuurt de automatisering. Gaat een ticket naar een gesloten status, dan wordt de Close date op vandaag gezet; gaat het terug naar een open status, dan wordt de Close date gewist. Je kunt dit gedrag per pipeline aanpassen. Omdat workflows en rapporten op status filteren, houd je het aantal statussen beperkt en ondubbelzinnig.",
          },
          {
            type: "p",
            text: "SLA-doelen in de helpdesk stellen doelen voor de tijd tot het eerste antwoord, de tijd tot het volgende antwoord en de tijd tot sluiting. Een doel kan gelden voor alle tickets, voor tickets met een specifieke eigenschapswaarde of voor een combinatie van eigenschappen, en elke regel kan worden beperkt tot vaste uren en een tijdzone. HubSpot geeft zelf als voorbeelden een korter antwoorddoel voor enterpriseklanten en een sneller reactiedoel voor chat dan voor e-mail. Een ticket snoozen heeft geen invloed op de SLA.",
          },
        ],
      },
      {
        heading: "Ticketgebaseerde workflows",
        blocks: [
          {
            type: "p",
            text: "Een ticketgebaseerde workflow schrijft tickets in die aan de inschrijvingstriggers voldoen en voert daarna een reeks acties uit. De nuttigste acties voor supportwerk:",
          },
          {
            type: "ul",
            items: [
              "Vertragingen: wacht een vast aantal dagen, uren en minuten, of tot een kalenderdatum, een datumeigenschap of een gebeurtenis.",
              "If/then-vertakkingen: stuur tickets langs verschillende paden op basis van filtercriteria, gecombineerd met AND en OR.",
              "Edit record: stel eigenschapswaarden in op het ticket of op een gekoppeld record, kopieer ze of maak ze leeg.",
              "Create record: maak een nieuw record aan, dat standaard aan het ingeschreven ticket wordt gekoppeld.",
              "Rotate record to owner: wijs tickets om de beurt toe aan de gebruikers die je kiest. Rotaties worden per actie bijgehouden en opnieuw ingesteld als je eigenaren toevoegt of verwijdert nadat de workflow is ingeschakeld.",
              "Send a webhook: roep een externe URL aan met ticketgegevens; dit komt in de volgende sectie aan bod.",
            ],
          },
          {
            type: "p",
            text: "Goede eerste kandidaten voor ticketworkflows in HubSpot:",
          },
          {
            type: "ul",
            items: [
              "Nieuwe tickets in een pipeline om de beurt verdelen over een groep agents.",
              "Een eigenschap van een gekoppeld record naar het ticket kopiëren, zodat routing en rapporten die kunnen gebruiken.",
              "Een ticket via een webhook naar Jira of een interne tool sturen wanneer de status verandert.",
              "Na het sluiten van een ticket een vaste tijd wachten en dan op basis van een eigenschap vertakken om te bepalen of er een opvolging komt.",
            ],
          },
        ],
      },
      {
        heading: "Chatbots, webhooks en de HubSpot API",
        blocks: [
          {
            type: "p",
            text: "Regelgebaseerde chatbots handelen de eerste minuten van een chat af. Drie acties doen het meeste supportwerk. Ask question slaat het antwoord van de bezoeker op in een contacteigenschap en kan snelle antwoorden aanbieden. Submit a ticket maakt een ticket aan met de naam, pipeline en status die je instelt, maar wordt overgeslagen als de bezoeker geen gekoppeld contactrecord heeft. Send to team member draagt de chat over aan een specifieke gebruiker of een specifiek team nadat is gecontroleerd of die beschikbaar zijn, en toont het afwezigheidsbericht als dat niet zo is. Heeft de bot openingstijden, dan worden chats alleen tijdens die tijden naar een teamlid gerouteerd.",
          },
          {
            type: "p",
            text: "De webhookactie in workflows stuurt gegevens naar buiten. Kies POST of GET en vul een URL in die met HTTPS begint. Een POST-body kan alle eigenschappen van het record bevatten of een aangepaste set sleutels, die elk aan een HubSpot-eigenschap zijn gekoppeld. Je kunt authenticeren met een request signature, die HubSpot als header toevoegt zodat je endpoint die kan verifiëren, of met een API-sleutel die als secret is opgeslagen en in een header of queryparameter wordt meegestuurd. Je kunt de actie vanuit het eigen paneel testen zonder bestaande records te beïnvloeden. Of deze actie beschikbaar is, hangt af van je abonnement.",
          },
          {
            type: "p",
            text: "Voor de andere richting gebruik je de CRM API. Een POST naar /crm/v3/objects/tickets maakt een ticket aan; geef subject, hs_pipeline_stage (de status) en hs_pipeline mee, met interne ID's in plaats van labels. Geef je geen pipeline op, dan wordt de standaardpipeline gebruikt. Een GET naar /crm/v3/properties/tickets geeft de ticketeigenschappen van je account. Apps kunnen zich via de Webhooks API ook abonneren op ticketgebeurtenissen, waaronder ticket.creation en ticket.propertyChange; die laatste gaat af wanneer een eigenschap die je opgeeft op een willekeurig ticket verandert. Deze abonnementen worden op app-niveau geconfigureerd en hebben de tickets-scope nodig.",
          },
        ],
      },
      {
        heading: "Dit laten bouwen",
        blocks: [
          {
            type: "p",
            text: "TascaLab bouwt bovenop de tools die je al gebruikt, zonder overstap naar een ander platform, met API's, webhooks en Make of n8n. HubSpot heeft een gedocumenteerde API en ondersteunt webhooks, dus een koppeling is vrijwel zeker mogelijk; de precieze opzet wordt bevestigd in een gratis auditgesprek van 30 minuten. Ticket Routing & Categorization is een eenmalig project van 600–950 USD, Automated Reports per e-mail of Slack kosten 500–900 USD, en Custom Automation over meerdere systemen kost 1.200–2.000 USD. Elk project omvat 30 dagen ondersteuning na livegang, basisdocumentatie en geen verborgen kosten, en de meeste implementaties duren 1–3 weken.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wat zijn de standaard ticketstatussen in HubSpot?",
        a: "De standaard Support Pipeline heeft vier statussen: New, Waiting on contact, Waiting on us en Closed. Je kunt eigen statussen toevoegen en elke status markeren als Open of Closed.",
      },
      {
        q: "Kan de HubSpot-helpdesk SLA's bijhouden?",
        a: "Ja. SLA-doelen in de helpdesk meten de tijd tot het eerste antwoord, de tijd tot het volgende antwoord en de tijd tot sluiting, voor alle tickets of op basis van ticketeigenschappen, en kunnen worden beperkt tot vaste uren. Een ticket snoozen heeft geen invloed op de SLA.",
      },
      {
        q: "Kan een HubSpot-chatbot tickets aanmaken?",
        a: "Ja. De actie Submit a ticket maakt een ticket aan met de naam, pipeline en status die je instelt. De actie wordt overgeslagen als de bezoeker geen gekoppeld contactrecord heeft.",
      },
      {
        q: "Hoe stuur ik ticketgegevens uit HubSpot naar een ander systeem?",
        a: "Voeg een webhookactie toe aan een ticketgebaseerde workflow; die stuurt een POST- of GET-request naar een HTTPS-URL. Apps kunnen zich via de Webhooks API ook abonneren op ticketgebeurtenissen zoals ticket.creation en ticket.propertyChange.",
      },
      {
        q: "Wat heb ik nodig om een ticket aan te maken via de HubSpot API?",
        a: "Stuur een POST naar /crm/v3/objects/tickets met subject, hs_pipeline_stage en hs_pipeline, met interne ID's. Laat je de pipeline weg, dan wordt de standaardpipeline gebruikt.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
