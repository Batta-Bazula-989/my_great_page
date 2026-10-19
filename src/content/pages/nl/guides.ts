import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-supportautomatisering",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier voor supportautomatisering",
    title: "n8n vs Make vs Zapier voor supportautomatisering (2026)",
    description:
      "n8n vs Make vs Zapier voor supportautomatisering: licentie en hosting, hoe elk gebruik telt, connectors voor Zendesk, Freshdesk, Jira en Slack, webhooks, code.",
    h1: "n8n vs Make vs Zapier voor supportautomatisering",
    intro:
      "De grootste verschillen tussen n8n, Make en Zapier voor supportwerk zitten in waar ze draaien en hoe ze gebruik tellen. n8n kun je zelf hosten onder de Sustainable Use License of gebruiken als n8n Cloud, terwijl Make en Zapier als gehoste diensten draaien. Alle drie koppelen met Zendesk, Freshdesk, Jira en Slack, accepteren webhooks en hebben een codestap, dus de keuze komt meestal neer op de locatie van je data, het volume en hoeveel maatwerklogica je nodig hebt.",
    keyFacts: [
      "De self-hosted software van n8n valt onder de Sustainable Use License, een fair-code-licentie die n8n in 2022 heeft opgesteld. n8n noemt zichzelf niet open source.",
      "Per oktober 2026 telt n8n executions (één run van een workflow), telt Make credits (operations 1:1 omgezet) en telt Zapier tasks (geslaagde actiestappen).",
      "Triggers, Filter-stappen en Paths-stappen in Zapier verbruiken geen tasks. Triggermodules in Make verbruiken 1 credit per run, ook als ze geen nieuwe data vinden.",
      "In Make kies je een datacenter in de VS of de EU wanneer je een organisatie aanmaakt. Dat kun je later niet meer wijzigen.",
      "Alle drie hebben een webhooktrigger en een codestap die JavaScript of Python uitvoert.",
    ],
    sections: [
      {
        heading: "Vergelijking naast elkaar",
        blocks: [
          {
            type: "p",
            text: "De tabel vat samen wat de eigen documentatie van elke leverancier zegt, gecontroleerd in oktober 2026. Prijzen zijn bewust weggelaten. Abonnementen veranderen vaak, dus bekijk de actuele prijspagina voordat je beslist.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier voor supportautomatisering (per oktober 2026)",
            head: ["Kenmerk", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Waar het draait",
                "n8n Cloud (beheerd door n8n) of self-hosted op je eigen machine of infrastructuur",
                "De eigen datacenters van Make. Je kiest per organisatie de VS of de EU",
                "De beheerde cloud van Zapier. Geen self-hosted of on-premises versie",
              ],
              [
                "Licentie",
                "Sustainable Use License (fair-code) voor de self-hosted software",
                "Gehoste dienst onder de voorwaarden van Make",
                "Gehoste dienst onder de voorwaarden van Zapier",
              ],
              [
                "Gebruikseenheid",
                "Executions: één execution is één run van een workflow",
                "Credits: de meeste modules verbruiken 1 credit per operation",
                "Tasks: één task per geslaagde actiestap",
              ],
              [
                "Helpdeskconnectors",
                "Nodes voor Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software en Slack",
                "Apps voor Zendesk, Freshdesk, Jira Cloud Platform en Slack",
                "Apps voor Zendesk, Freshdesk, Jira Service Management en Slack",
              ],
              [
                "Webhooktrigger",
                "Webhook-node met aparte test- en productie-URL's",
                "Module Custom webhook in de app Webhooks",
                "Webhooks by Zapier: Catch Hook en Catch Raw Hook",
              ],
              [
                "Codestap",
                "Code-node: JavaScript of Python",
                "App Make Code: JavaScript of Python",
                "Code by Zapier: JavaScript (Node.js 22) of Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting en licenties",
        blocks: [
          {
            type: "p",
            text: "n8n geeft je twee opties. n8n Cloud is een beheerde instantie die n8n voor je draait. Self-hosting betekent dat je n8n op je eigen machine of infrastructuur draait. Voor de meeste self-hosted opzetten raadt de documentatie Docker aan. Heb je geen ervaring met serverbeheer, dan raadt de documentatie juist n8n Cloud aan.",
          },
          {
            type: "p",
            text: "De self-hosted software valt onder de Sustainable Use License, een fair-code-licentie die n8n in 2022 heeft opgesteld. Je mag de software gebruiken, aanpassen, er afgeleide werken van maken en haar herdistribueren, maar met beperkingen. Gebruik is beperkt tot interne bedrijfsdoeleinden of niet-commercieel of persoonlijk gebruik, en je mag haar alleen kosteloos distribueren voor niet-commerciële doeleinden. De definitie van het Open Source Initiative staat geen gebruiksbeperkingen toe, dus n8n noemt zichzelf niet open source. Bestanden met \".ee.\" in de naam vallen onder een aparte n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make draait je scenario's in zijn eigen datacenters. Wanneer je een organisatie aanmaakt, kies je de Verenigde Staten of de Europese Unie. Die instelling bepaalt waar je data wordt opgeslagen en verwerkt, en kan achteraf niet worden gewijzigd.",
          },
          {
            type: "p",
            text: "Zapier draait op zijn eigen beheerde cloud. Volgens de vergelijking van Zapier met n8n kan Zapier n8n niet volledig vervangen voor automatiseringen die om compliance-redenen binnen een self-hosted, air-gapped of on-premises omgeving moeten draaien.",
          },
          {
            type: "note",
            text: "Dit is een samenvatting van de n8n-licentie, geen interpretatie. Wil je n8n inbouwen in een product dat je verkoopt, lees dan eerst de volledige licentietekst en de gebruiksbeperkingen.",
          },
        ],
      },
      {
        heading: "Hoe elke tool gebruik telt (per oktober 2026)",
        blocks: [
          {
            type: "p",
            text: "De drie producten gebruiken verschillende factureringseenheden, dus je kunt hun abonnementslimieten niet direct vergelijken. Zo definieert elke leverancier zijn eenheid.",
          },
          {
            type: "ul",
            items: [
              "n8n-executions: n8n definieert een execution als één run van een workflow. Betaalde abonnementen, in de cloud of self-hosted, hebben een quotum voor executions, en alleen productie-executions tellen daarvoor mee. Handmatige runs vanuit de editor tellen niet. Een Schedule Trigger telt elke keer dat hij afgaat. Elk inkomend webhookrequest dat de workflow start, telt één keer.",
              "Make-credits: sinds 27 augustus 2025 factureert Make in credits, en bestaande operations zijn 1:1 omgezet. Een operation is één run van een module die data verwerkt of controleert. De meeste apps verbruiken 1 credit per operation. Triggermodules verbruiken 1 credit per run, ook als ze geen nieuwe data vinden. Met de eigen AI-provider van Make verbruiken AI-functies credits op basis van operations en tokens. Koppel je je eigen AI-provider, dan dekken credits de operations en betaal je die provider voor de tokens.",
              "Zapier-tasks: Zapier telt een task elke keer dat een actiestap succesvol wordt uitgevoerd. Triggers verbruiken nooit tasks, en Filter- of Paths-stappen ook niet. Stappen die een fout geven of stoppen, tellen niet mee. Sommige producten, zoals stappen van AI by Zapier, tellen tegen een hoger tarief.",
            ],
          },
          {
            type: "p",
            text: "Deze eenheden zijn belangrijk voor een supportbot die op elk nieuw ticket of chatbericht draait. In n8n telt een lange workflow nog steeds als één execution per run. In Make verbruikt elke module die draait credits. In Zapier is elke geslaagde actiestap een task. Op Make verbruikt een scenario dat je helpdesk volgens schema pollt credits, ook als er niets is veranderd. Instant triggers op basis van webhooks voorkomen dat je voor die lege controles betaalt.",
          },
        ],
      },
      {
        heading: "Connectors voor Zendesk, Freshdesk, Jira en Slack",
        blocks: [
          {
            type: "p",
            text: "Alle drie de tools hebben kant-en-klare connectors voor deze vier, maar de namen en de diepgang verschillen. Controleer voordat je je vastlegt of de exacte trigger en actie die je nodig hebt bestaan.",
          },
          {
            type: "ul",
            items: [
              "n8n: er is een Zendesk-node met een aparte Zendesk Trigger-node. De Freshdesk-node dekt tickets en contacten. De Jira Software-node dekt issues, opmerkingen en bijlagen. De Slack-node dekt berichten, kanalen, bestanden en reacties, en de bewerking \"Send and Wait for Response\" ondersteunt goedkeuringsflows. Ondersteunt een node een bewerking niet, dan raadt de documentatie aan de API aan te roepen met de HTTP Request-node, met hergebruik van dezelfde credential.",
              "Make: de Zendesk-app bevat modules die tickets en ticketactiviteit volgen. Ze werken als instant triggers via een webhook die je in Zendesk aanmaakt. De Freshdesk-app dekt tickets, conversaties, contacten en bedrijven, en biedt ook instant triggers op basis van webhooks. Make vermeldt daarnaast een Jira Cloud Platform-app en een Slack-app.",
              "Zapier: de Jira Service Management-app heeft triggers voor nieuwe en bijgewerkte aanvragen en een actie die aanvragen aanmaakt. Zapier vermeldt kant-en-klare Zaps die de app aan Zendesk en Slack koppelen. De Freshdesk-app koppelt met Slack en Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks en codestappen",
        blocks: [
          {
            type: "p",
            text: "Met webhooks kan een helpdesk of chatkanaal een automatisering starten op het moment dat er iets gebeurt. Codestappen dekken de logica die ingebouwde stappen niet aankunnen, zoals een payload omvormen of een API aanroepen waarvoor geen connector bestaat.",
          },
          {
            type: "ul",
            items: [
              "n8n Webhook-node: elke Webhook-node krijgt twee URL's, een Test URL en een Production URL. De node kan direct antwoorden, wanneer de laatste node klaar is, of via een aparte Respond to Webhook-node.",
              "Make Webhooks-app: de module Custom webhook maakt een unieke URL voor één scenario, en je kunt dezelfde webhook niet tussen scenario's delen. Een module Webhook response bepaalt wat de aanroeper terugkrijgt. Zonder die module is het standaardantwoord de tekst \"Accepted\".",
              "Webhooks by Zapier: Catch Hook geeft je een unieke URL waar de andere app requests naartoe stuurt, en parseert de request body. Catch Raw Hook levert de body ongeparseerd, samen met de headers. Retrieve Poll werkt andersom en haalt data op met een GET-request.",
              "n8n Code-node: voert JavaScript of Python uit, ofwel één keer voor alle binnenkomende items (de standaard) ofwel één keer per item. Op n8n Cloud kan de Python-optie geen libraries importeren.",
              "Make Code-app: de module Run code voert JavaScript of Python uit en bevat een aantal ingebouwde libraries. Volgens de documentatie van Make is voor het importeren van je eigen libraries een Enterprise-abonnement nodig.",
              "Code by Zapier: codestappen kunnen triggers of acties zijn en ondersteunen JavaScript (Node.js 22) en Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Welke past bij je supportteam",
        blocks: [
          {
            type: "ul",
            items: [
              "Ticketdata moet op infrastructuur blijven die je zelf beheert: n8n is de enige van de drie die een self-hosted optie documenteert.",
              "Je wilt een gehoste tool met EU-dataopslag die per organisatie wordt ingesteld: de EU-datacenteroptie van Make dekt dit.",
              "Je team gebruikt al Zapier en je flows zijn kort: triggers en filters verbruiken geen tasks, dus eenvoudige meldingen blijven goedkoop.",
              "Je workflows hebben veel stappen en draaien op elk ticket: vergelijk de executions per run van n8n met credits of tasks per stap bij je werkelijke volume.",
            ],
          },
          {
            type: "p",
            text: "TascaLab bouwt supportautomatiseringen bovenop de tools die je al gebruikt (Zendesk, Freshdesk, Jira, Slack en interne tools) met API's, webhooks, Make en n8n. De meeste implementaties duren 1 tot 3 weken. Elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Is n8n open source?",
        a: "n8n distribueert zijn software onder de Sustainable Use License, die het zelf fair-code noemt. Omdat de licentie beperkt hoe de software mag worden gebruikt, zegt n8n dat het zichzelf niet open source noemt.",
      },
      {
        q: "Kan ik Make of Zapier zelf hosten?",
        a: "Make draait scenario's in zijn eigen datacenter in de VS of de EU, dat je kiest wanneer je een organisatie aanmaakt. Zapier draait op zijn beheerde cloud en zegt dat het n8n niet volledig kan vervangen wanneer automatiseringen in een self-hosted of on-premises omgeving moeten draaien.",
      },
      {
        q: "Verbruiken triggers in Zapier tasks?",
        a: "Nee. Zapier telt een task elke keer dat een actiestap succesvol wordt uitgevoerd. Triggers, Filter-stappen en Paths-stappen verbruiken geen tasks.",
      },
      {
        q: "Verbruikt een trigger in Make credits als er niets nieuws is?",
        a: "Ja. Volgens het helpcenter van Make verbruiken triggermodules 1 credit per run, ook als ze geen nieuwe data vinden. Instant triggers op basis van webhooks voorkomen deze lege runs.",
      },
      {
        q: "Wat telt als een execution in n8n?",
        a: "Eén run van een workflow. Op betaalde abonnementen tellen alleen productie-executions mee voor het quotum. Handmatige runs vanuit de editor tellen niet.",
      },
    ],
    sources: [
      { label: "n8n Docs — Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Executions", url: "https://docs.n8n.io/workflows/executions/" },
      { label: "n8n Docs — Integrations (Zendesk, Freshdesk, Jira Software, Slack and Webhook nodes)", url: "https://docs.n8n.io/integrations" },
      { label: "n8n Docs — Code node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code" },
      { label: "Make Help Center — Credits & operations", url: "https://help.make.com/credits-and-operations" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "Make Apps Documentation — Webhooks", url: "https://apps.make.com/gateway" },
      { label: "Make Apps Documentation — Make Code", url: "https://apps.make.com/code" },
      { label: "Make Apps Documentation — Zendesk", url: "https://apps.make.com/zendesk" },
      { label: "Make Apps Documentation — Freshdesk", url: "https://apps.make.com/freshdesk" },
      { label: "Make — Jira Cloud Platform and Slack integration", url: "https://www.make.com/en/integrations/jira/slack" },
      { label: "Zapier Help Center — How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "Zapier Help Center — Trigger Zap workflows from webhooks", url: "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks" },
      { label: "Zapier Help Center — Using Code by Zapier", url: "https://help.zapier.com/hc/en-us/articles/45405528551181-Using-Code-by-Zapier" },
      { label: "Zapier — Jira Service Management integrations", url: "https://zapier.com/apps/jira-service-management/integrations" },
      { label: "Zapier — Freshdesk integrations", url: "https://zapier.com/apps/freshdesk/integrations" },
      { label: "Zapier — Zapier vs. n8n comparison", url: "https://zapier.com/blog/n8n-vs-zapier/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "what-is-customer-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "ai-verordening-chatbot-regels",
    category: "guides",
    navLabel: "AI-verordening en chatbots",
    primaryKeyword: "AI-verordening regels chatbots",
    title: "AI-verordening en chatbots: artikel 50 en belangrijke datums",
    description:
      "AI-verordening en chatbots: wat artikel 50 vereist, wie aanbieder of gebruiksverantwoordelijke is, datums en wat de Digital Omnibus van 2026 veranderde.",
    h1: "AI-verordening en chatbots: wat artikel 50 vereist en wanneer",
    intro:
      "Onder de Europese AI-verordening (Verordening (EU) 2024/1689) moeten aanbieders AI-systemen die rechtstreeks met mensen interageren, zoals chatbots, zo ontwerpen dat die mensen te horen krijgen dat ze met een AI-systeem te maken hebben, tenzij dat uit de context duidelijk is. Deze plicht staat in artikel 50 en geldt vanaf 2 augustus 2026. De Digital Omnibus on AI van 2026 verschoof de deadlines voor hoog risico, maar de Commissie noemt nog steeds 2 augustus 2026 als de datum waarop artikel 50 van toepassing is.",
    keyFacts: [
      "Artikel 50(1): aanbieders moeten ervoor zorgen dat mensen worden geïnformeerd dat ze met een AI-systeem interageren, tenzij dit uit de context duidelijk is.",
      "Artikel 50(5): de informatie moet op een duidelijke en herkenbare manier worden gegeven, uiterlijk bij de eerste interactie.",
      "De AI-verordening is op 1 augustus 2024 in werking getreden. Artikel 50 is van toepassing vanaf 2 augustus 2026.",
      "De Digital Omnibus on AI (Verordening (EU) 2026/1744) is op 27 juli 2026 in werking getreden. Die verschoof de deadlines voor hoog risico naar 2 december 2027 en 2 augustus 2028.",
      "Een schending van artikel 50 kan leiden tot boetes tot EUR 15 miljoen of 3% van de wereldwijde jaaromzet, afhankelijk van welk bedrag hoger is.",
    ],
    sections: [
      {
        heading: "Wat artikel 50 vereist voor chatbots",
        blocks: [
          {
            type: "p",
            text: "Artikel 50(1) bepaalt dat aanbieders ervoor moeten zorgen dat AI-systemen die bedoeld zijn om rechtstreeks met natuurlijke personen te interageren, zo worden ontworpen en ontwikkeld dat de betrokken personen worden geïnformeerd dat ze met een AI-systeem interageren. De uitzondering geldt wanneer dit duidelijk is voor een redelijk geïnformeerde, oplettende en omzichtige persoon, gezien de omstandigheden en de gebruikscontext. De plicht geldt niet voor AI-systemen die bij wet zijn toegestaan om strafbare feiten op te sporen, te voorkomen, te onderzoeken of te vervolgen, mits er passende waarborgen zijn.",
          },
          {
            type: "p",
            text: "Artikel 50(5) regelt hoe en wanneer mensen moeten worden geïnformeerd. De informatie moet op een duidelijke en herkenbare manier worden verstrekt, uiterlijk op het moment van de eerste interactie of blootstelling, en moet voldoen aan de toepasselijke toegankelijkheidseisen.",
          },
          {
            type: "p",
            text: "Artikel 50 bevat ook andere transparantieplichten. Alleen de eerste in deze lijst is specifiek voor chatbots:",
          },
          {
            type: "ul",
            items: [
              "Artikel 50(1): aanbieders van systemen die rechtstreeks met mensen interageren, moeten die zo ontwerpen dat mensen weten dat ze met AI te maken hebben.",
              "Artikel 50(2): aanbieders van systemen die synthetische audio, beelden, video of tekst genereren, moeten de output in een machineleesbaar formaat markeren, zodat die als AI-gegenereerd kan worden herkend.",
              "Artikel 50(3): gebruiksverantwoordelijken van systemen voor emotieherkenning of biometrische categorisering moeten de personen die eraan worden blootgesteld informeren.",
              "Artikel 50(4): gebruiksverantwoordelijken moeten deepfakes bekendmaken, evenals AI-gegenereerde tekst die wordt gepubliceerd om het publiek te informeren over zaken van algemeen belang. Voor die tekst geldt de plicht niet wanneer die menselijke controle heeft ondergaan en iemand de redactionele verantwoordelijkheid draagt.",
            ],
          },
        ],
      },
      {
        heading: "Aanbieder of gebruiksverantwoordelijke: bij wie de plicht ligt",
        blocks: [
          {
            type: "p",
            text: "Artikel 3(3) definieert een aanbieder als een persoon of instantie die een AI-systeem ontwikkelt of laat ontwikkelen en het onder eigen naam of merk in de handel brengt of in gebruik stelt, al dan niet tegen betaling. Artikel 3(4) definieert een gebruiksverantwoordelijke als iedereen die een AI-systeem onder eigen verantwoordelijkheid gebruikt, behalve voor persoonlijk, niet-beroepsmatig gebruik.",
          },
          {
            type: "p",
            text: "De chatbotmelding in artikel 50(1) is een plicht van de aanbieder. De labelingplichten in artikel 50(3) en 50(4) zijn plichten van de gebruiksverantwoordelijke. Bouwt je bedrijf een supportassistent en zet het die onder eigen merk in, lees dan beide definities zorgvuldig in het licht van hoe het systeem is gebouwd en wie het aan klanten voorlegt.",
          },
        ],
      },
      {
        heading: "Hoe de meldingsplicht zich verhoudt tot supportautomatisering",
        blocks: [
          {
            type: "p",
            text: "Volgens de FAQ van de Commissie over artikel 50 stellen de richtsnoeren vier cumulatieve criteria voor de interactieplicht: het systeem is een AI-systeem, het is gebouwd voor een echte tweerichtingsuitwisseling, het communiceert rechtstreeks in plaats van via een menselijke tussenpersoon, en het interageert met natuurlijke personen. Volgens de FAQ vallen systemen die alleen op de achtergrond werken, via machine-tot-machinecommunicatie of zonder direct contact met mensen, buiten deze plicht. De FAQ zegt ook dat de uitzondering voor wat „duidelijk” is, restrictief moet worden uitgelegd.",
          },
          {
            type: "table",
            caption: "Vragen over veelvoorkomende supportopzetten, op basis van de criteria van de Commissie",
            head: ["Opzet", "Wat je toetst aan de criteria"],
            rows: [
              [
                "AI-chatbot op je website, WhatsApp of Messenger",
                "Wisselt hij rechtstreeks berichten uit met klanten? Zo ja, plan dan een melding bij of vóór het eerste bericht.",
              ],
              [
                "AI-voicebot die telefoontjes beantwoordt",
                "Dezelfde vraag voor gesproken gesprekken. Artikel 50(5) verwijst ook naar toegankelijkheidseisen.",
              ],
              [
                "AI die tickets classificeert en routeert",
                "Werkt hij alleen op de achtergrond, zonder direct contact met klanten? De FAQ plaatst zulke systemen buiten de interactieplicht.",
              ],
              [
                "AI die antwoorden opstelt die een agent controleert en verstuurt",
                "Communiceert hij rechtstreeks met de klant, of via een menselijke tussenpersoon? Toets dit aan de richtsnoeren.",
              ],
            ],
          },
          {
            type: "p",
            text: "In de praktijk beginnen veel teams elk AI-gesprek met een korte regel als „Je chat met een AI-assistent. Typ 'medewerker' om een persoon te spreken.” Dat is een ontwerpkeuze. Of het voor jouw systeem voldoende is, is een vraag voor de richtsnoeren en je adviseur.",
          },
        ],
      },
      {
        heading: "Belangrijke datums, inclusief de Digital Omnibus van 2026",
        blocks: [
          {
            type: "p",
            text: "Artikel 113 legt de tijdlijn van de AI-verordening vast. In november 2025 stelde de Commissie voor delen daarvan te wijzigen in een Digital Omnibus on AI (COM(2025) 836 van 19 november 2025). Dat voorstel is inmiddels aangenomen: na een politiek akkoord op 7 mei 2026 en formele vaststelling is het gepubliceerd als Verordening (EU) 2026/1744. Volgens de Commissie is die op 27 juli 2026 in werking getreden. De tabel toont de aangenomen datums.",
          },
          {
            type: "table",
            caption: "Toepassingsdatums van de AI-verordening (officiële teksten, gecontroleerd op 19 oktober 2026)",
            head: ["Datum", "Wat van toepassing wordt", "Rechtsgrondslag"],
            rows: [
              ["1 augustus 2024", "De AI-verordening treedt in werking", "Artikel 113, Verordening (EU) 2024/1689"],
              ["2 februari 2025", "Hoofdstukken I en II zijn van toepassing, inclusief AI-geletterdheid en de verboden praktijken", "Artikel 113(a)"],
              ["2 augustus 2025", "Regels over aangemelde instanties, AI-modellen voor algemene doeleinden, governance en sancties zijn van toepassing (behalve artikel 101)", "Artikel 113(b)"],
              ["2 augustus 2026", "Algemene toepassing, inclusief de transparantieplichten van artikel 50", "Artikel 113; FAQ van de Commissie over artikel 50"],
              ["2 december 2026", "Deadline voor markering volgens artikel 50(2) door generatieve AI-systemen die vóór 2 augustus 2026 in de handel zijn gebracht; nieuw verbod op AI die niet-consensuele intieme content of materiaal van seksueel misbruik van kinderen genereert", "Verordening (EU) 2026/1744 (aangenomen)"],
              ["2 december 2027", "Regels voor hoog risico voor systemen die zijn ingedeeld op grond van artikel 6(2) en bijlage III", "Verordening (EU) 2026/1744 (aangenomen)"],
              ["2 augustus 2028", "Regels voor hoog risico voor systemen die zijn ingedeeld op grond van artikel 6(1) en bijlage I (producten)", "Verordening (EU) 2026/1744 (aangenomen); vervangt de oorspronkelijke datum van 2 augustus 2027"],
            ],
          },
          {
            type: "p",
            text: "Eén verschil tussen het voorstel en de aangenomen tekst raakt generatieve AI. Het voorstel van de Commissie zou aanbieders van generatieve systemen die al op de markt zijn een overgangsperiode van zes maanden hebben gegeven voor de markering volgens artikel 50(2). De aangenomen verordening legt de deadline vast op 2 december 2026. Volgens de FAQ van de Commissie geldt de chatbotmelding in artikel 50(1) nog steeds vanaf 2 augustus 2026.",
          },
        ],
      },
      {
        heading: "Sancties en officiële richtsnoeren",
        blocks: [
          {
            type: "p",
            text: "Op grond van artikel 99(4) kan een schending van de verplichtingen uit artikel 50 leiden tot administratieve geldboetes tot EUR 15.000.000 of, voor een onderneming, tot 3% van haar totale wereldwijde jaaromzet in het voorgaande boekjaar, afhankelijk van welk bedrag hoger is. Voor het mkb, inclusief start-ups, past artikel 99 het laagste van de twee bedragen toe.",
          },
          {
            type: "p",
            text: "Op 20 juli 2026 publiceerde de Commissie richtsnoeren over de transparantieplichten van artikel 50. Een aparte, vrijwillige praktijkcode, de Code of Practice on Transparency of AI-generated Content, behandelt artikel 50(2), (4) en (5). Volgens de Commissie betekent het niet ondertekenen ervan niet dat je niet aan de regels voldoet. Voor de chatbotplicht in artikel 50(1) zegt de FAQ dat aanbieders en gebruiksverantwoordelijken zelf passende maatregelen kunnen kiezen, met inachtneming van de richtsnoeren.",
          },
          {
            type: "note",
            text: "Dit is geen juridisch advies. Deze pagina beschrijft wat de AI-verordening, de Digital Omnibus en de richtsnoeren van de Commissie zeggen per 19 oktober 2026. Lees voor beslissingen over je eigen systemen de officiële teksten op EUR-Lex en overleg met een gekwalificeerde jurist.",
          },
        ],
      },
      {
        heading: "Een melding inbouwen in een supportbot",
        blocks: [
          {
            type: "ul",
            items: [
              "Zet de AI-melding in het eerste bericht of de gesproken begroeting, niet alleen in je algemene voorwaarden.",
              "Zorg dat de melding leesbaar is voor schermlezers en duidelijk is in spraak, omdat artikel 50(5) toegankelijkheid noemt.",
              "Geef klanten een zichtbare manier om een persoon te bereiken, en geef de gespreksgeschiedenis door zodat ze zich niet hoeven te herhalen.",
              "Houd bij welke meldingstekst je gebruikt en wanneer je die hebt gewijzigd, zodat je kunt laten zien wat klanten te zien kregen.",
            ],
          },
          {
            type: "p",
            text: "TascaLab bouwt chat- en voicebots bovenop de tools die je al gebruikt (Zendesk, Freshdesk, Jira, Slack en interne tools). Projecten voor een Standard Chat Bot kosten {{price:standard}} en projecten voor een Voice Bot {{price:voice}}. Beide omvatten basisdocumentatie en 30 dagen ondersteuning na livegang.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Moet ik klanten vertellen dat ze met een chatbot praten?",
        a: "Artikel 50(1) van de AI-verordening verplicht aanbieders om AI-systemen die rechtstreeks met mensen interageren zo te ontwerpen dat die mensen worden geïnformeerd dat ze met een AI-systeem interageren, tenzij dat uit de context duidelijk is. Volgens de Commissie moet de uitzondering voor wat „duidelijk” is restrictief worden uitgelegd.",
      },
      {
        q: "Wanneer gelden de regels van de AI-verordening voor chatbots?",
        a: "Artikel 50 is van toepassing vanaf 2 augustus 2026. De FAQ van de Commissie geeft alleen een overgangsperiode tot 2 december 2026 voor de markering volgens artikel 50(2) door generatieve systemen die al op de markt zijn.",
      },
      {
        q: "Heeft de Digital Omnibus de AI-verordening uitgesteld?",
        a: "Deels. Verordening (EU) 2026/1744, volgens de Commissie in werking sinds 27 juli 2026, verschoof de verplichtingen voor hoog risico naar 2 december 2027 (bijlage III) en 2 augustus 2028 (producten uit bijlage I). De datum van 2 augustus 2026 voor artikel 50 is niet verschoven.",
      },
      {
        q: "Heeft een AI-ticketrouter een AI-melding nodig?",
        a: "Volgens de FAQ van de Commissie vallen systemen die alleen op de achtergrond werken, via machine-tot-machinecommunicatie of zonder direct contact met mensen, buiten de interactieplicht van artikel 50(1). Toets je eigen opzet aan de richtsnoeren van de Commissie.",
      },
      {
        q: "Wat zijn de boetes bij een schending van artikel 50?",
        a: "Op grond van artikel 99(4) tot EUR 15 miljoen of 3% van de totale wereldwijde jaaromzet, afhankelijk van welk bedrag hoger is. Voor het mkb, inclusief start-ups, geldt het laagste van de twee bedragen.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2024/1689 (Artificial Intelligence Act)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      { label: "AI Act Service Desk — Article 50: Transparency obligations", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
      { label: "AI Act Service Desk — Article 99: Penalties", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99" },
      { label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "European Commission — Guidelines on transparency obligations published (20 July 2026)", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems" },
      { label: "EUR-Lex — Proposal COM(2025) 836, Digital Omnibus on AI", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0836" },
      { label: "EUR-Lex — Regulation (EU) 2026/1744 (Digital Omnibus on AI)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
      { label: "European Commission — AI Omnibus enters into force", url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force" },
    ],
    related: ["ai-chatbot-for-customer-support", "gdpr-customer-support-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "gdpr-customer-support-automation",
    slug: "avg-klantenservice-automatisering",
    category: "guides",
    navLabel: "AVG en supportautomatisering",
    primaryKeyword: "AVG en klantenservice-automatisering",
    title: "AVG en klantenservice-automatisering: een praktische gids",
    description:
      "AVG en klantenservice-automatisering: grondslagen, dataminimalisatie, bewaartermijnen en verwerkersovereenkomsten, toegepast op chatbots en helpdeskworkflows.",
    h1: "AVG en klantenservice-automatisering: een praktische gids",
    intro:
      "De AVG geldt voor supportautomatisering zoals voor elke andere verwerking van persoonsgegevens. Je hebt een grondslag nodig op grond van artikel 6, je verwerkt alleen wat je nodig hebt (artikel 5(1)(c)) en bewaart het alleen zo lang als nodig (artikel 5(1)(e)), en leveranciers die gegevens voor jou verwerken, hebben een overeenkomst nodig volgens artikel 28. Bij chatbots en helpdeskworkflows komt het meeste hiervan neer op ontwerpkeuzes: welke velden je doorstuurt, waar ze terechtkomen en hoe lang de logs worden bewaard.",
    keyFacts: [
      "Artikel 5(1)(c): persoonsgegevens moeten toereikend zijn, ter zake dienend en beperkt tot wat noodzakelijk is voor de doeleinden.",
      "Artikel 6(1) noemt zes grondslagen. Het Hof van Justitie van de EU beschouwt die lijst als uitputtend.",
      "Artikel 28(3) vereist een bindende overeenkomst met elke verwerker, waarin onder meer staat dat die alleen handelt op basis van jouw gedocumenteerde instructies.",
      "Volgens de EDPB is controleren of een verwerker voldoende garanties biedt een doorlopende verplichting, geen eenmalige.",
      "In Make kies je een datacenter in de VS of de EU wanneer je een organisatie aanmaakt. Dat kun je later niet meer wijzigen.",
    ],
    sections: [
      {
        heading: "Waar persoonsgegevens opduiken in supportautomatisering",
        blocks: [
          {
            type: "p",
            text: "Een supportautomatisering komt op meerdere punten in aanraking met persoonsgegevens, vaak meer dan het team beseft. Die punten in kaart brengen is de eerste praktische stap, want op elk ervan spelen dataminimalisatie, bewaartermijnen en leverancierscontracten een rol.",
          },
          {
            type: "ul",
            items: [
              "Chat- en e-mailtranscripten: namen, e-mailadressen, telefoonnummers, ordernummers en alles wat klanten verder typen.",
              "Ticketvelden en bijlagen in de helpdesk die een automatisering leest of naar een andere tool kopieert.",
              "Prompts en antwoorden die naar een AI-model worden gestuurd, als je bot er een gebruikt.",
              "Uitvoeringslogs in je automatiseringsplatform, die de gegevens kunnen opslaan die elke stap heeft ontvangen.",
              "Meldingen die in Slack of andere interne tools worden geplaatst.",
            ],
          },
        ],
      },
      {
        heading: "De AVG-artikelen die er het meest toe doen voor een supportbot",
        blocks: [
          {
            type: "table",
            caption: "AVG-artikelen en hun praktische gevolgen voor supportautomatisering",
            head: ["Artikel", "Wat de tekst zegt", "Wat het betekent voor een supportbot"],
            rows: [
              [
                "Art. 5(1)(c): minimale gegevensverwerking",
                "Persoonsgegevens moeten toereikend zijn, ter zake dienend en beperkt tot wat noodzakelijk is voor de doeleinden waarvoor zij worden verwerkt.",
                "Stuur elke stap alleen de velden die hij nodig heeft. Identificerende gegevens weglakken voordat tekst naar een AI-model gaat, is een manier om dit te doen.",
              ],
              [
                "Art. 5(1)(e): opslagbeperking",
                "Gegevens worden bewaard in een vorm die het mogelijk maakt personen te identificeren, niet langer dan nodig is voor de doeleinden, met uitzonderingen voor archivering, onderzoek en statistiek met waarborgen volgens artikel 89(1).",
                "Stel bewaartermijnen in voor chatlogs, ticketexports en uitvoeringslogs van automatiseringen.",
              ],
              [
                "Art. 6(1): rechtmatigheid",
                "Verwerking is alleen rechtmatig als ten minste één van zes grondslagen van toepassing is: toestemming, overeenkomst, wettelijke verplichting, vitaal belang, taak van algemeen belang of gerechtvaardigd belang.",
                "Leg vast welke grondslag elk doel dekt, zoals een verzoek beantwoorden versus transcripten analyseren.",
              ],
              [
                "Art. 28: verwerkers",
                "Maak alleen gebruik van verwerkers die voldoende garanties bieden, onder een bindende overeenkomst die de verwerking beschrijft en vereist dat zij handelen op basis van jouw gedocumenteerde instructies.",
                "Sluit een overeenkomst met elke leverancier in de keten: helpdesk, automatiseringsplatform, AI-provider en hosting.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Grondslag: bepaal die per doel",
        blocks: [
          {
            type: "p",
            text: "Artikel 6(1) noemt zes grondslagen: toestemming, overeenkomst, wettelijke verplichting, vitaal belang, taak van algemeen belang en gerechtvaardigd belang. Het Hof van Justitie van de EU heeft deze lijst uitputtend en beperkend genoemd, dus een verwerking moet onder ten minste één ervan vallen.",
          },
          {
            type: "p",
            text: "In supportwerk komen twee grondslagen het vaakst voor. De grondslag overeenkomst dekt verwerking die nodig is om een overeenkomst met de persoon uit te voeren, of om op diens verzoek stappen te zetten voordat een overeenkomst wordt gesloten. In zaak C-621/22 stelde het Hof van Justitie dat gerechtvaardigd belang drie cumulatieve voorwaarden kent: de verwerkingsverantwoordelijke of een derde behartigt een gerechtvaardigd belang, de verwerking is noodzakelijk voor dat belang, en de belangen of grondrechten van de persoon wegen niet zwaarder. Overheidsinstanties kunnen zich niet op gerechtvaardigd belang beroepen voor verwerking bij de uitvoering van hun taken.",
          },
          {
            type: "p",
            text: "Zet in de praktijk elk doel apart op een rij. De vraag van de klant beantwoorden, medewerkers trainen met oude transcripten en rapporten maken zijn verschillende doelen, en elk doel heeft een eigen grondslag nodig.",
          },
        ],
      },
      {
        heading: "Verwerkers en overeenkomsten volgens artikel 28",
        blocks: [
          {
            type: "p",
            text: "Op grond van artikel 28(1) mag je alleen verwerkers inschakelen die voldoende garanties bieden voor passende technische en organisatorische maatregelen. Artikel 28(3) vereist een overeenkomst of andere rechtshandeling waarin het onderwerp, de duur, de aard en het doel van de verwerking, het soort persoonsgegevens en de categorieën betrokkenen zijn vastgelegd. Daarin moet ook staan dat de verwerker alleen handelt op basis van jouw gedocumenteerde instructies, ook wat betreft doorgiften van persoonsgegevens naar een derde land. Op grond van artikel 28(4) moet een verwerker die een subverwerker inschakelt dezelfde gegevensbeschermingsverplichtingen contractueel aan die subverwerker opleggen, en blijft de oorspronkelijke verwerker volledig aansprakelijk tegenover jou.",
          },
          {
            type: "ul",
            items: [
              "EDPB-richtsnoeren 07/2020: het controleren van de garanties van een verwerker is een doorlopende verplichting, met audits en inspecties waar dat passend is. Instructies kunnen in een bijlage bij de overeenkomst staan of in een andere schriftelijke vorm, zoals e-mail, zolang je dat vastlegt. Een algemene lijst van subverwerkers die af en toe kan worden bijgewerkt, is niet voldoende. De verwerker moet je actief op de hoogte brengen van wijzigingen.",
              "EDPB-advies 22/2024: de plicht om te controleren of verwerkers en subverwerkers voldoende garanties bieden, geldt ongeacht het risiconiveau, al kan de diepgang van de controles verschillen. De uiteindelijke beslissing over, en verantwoordelijkheid voor, het inschakelen van een specifieke subverwerker blijft bij de verwerkingsverantwoordelijke.",
            ],
          },
          {
            type: "p",
            text: "Een typische supportketen kan bestaan uit een helpdesk, een automatiseringsplatform, een aanbieder van AI-modellen en een chattool. Leg vast welke leveranciers namens jou persoonsgegevens verwerken, controleer van elk de voorwaarden voor gegevensverwerking en de lijst met subverwerkers, en bewaar die in je administratie.",
          },
        ],
      },
      {
        heading: "Hosting, datalocatie en bewaarinstellingen",
        blocks: [
          {
            type: "p",
            text: "Waar je automatisering draait, bepaalt waar de gegevens worden opgeslagen. Make biedt twee datacenterlocaties: de Verenigde Staten en de Europese Unie. Je kiest er een wanneer je een organisatie aanmaakt, de keuze kan later niet worden gewijzigd, en ze bepaalt waar je gegevens worden opgeslagen en verwerkt. Host je n8n zelf, dan bepalen de instellingen voor executions hoeveel uitvoeringsdata wordt bewaard. De gedocumenteerde standaard is maximaal 10.000 opgeslagen executions, en 0 betekent geen limiet.",
          },
          {
            type: "p",
            text: "Omdat artikel 28(3) ook instructies over doorgiften naar derde landen omvat, controleer je in de voorwaarden van elke leverancier waar gegevens worden verwerkt. Stel bewaartermijnen in in elke tool die een kopie van de gegevens bewaart, niet alleen in je helpdesk.",
          },
        ],
      },
      {
        heading: "Praktische ontwerpkeuzes voor AVG-bewuste automatisering",
        blocks: [
          {
            type: "ul",
            items: [
              "Geef ticket-ID's en de velden die een stap nodig heeft door in plaats van volledige klantrecords.",
              "Maskeer e-mailadressen, telefoonnummers en betaalgegevens voordat tekst naar een AI-model gaat. Geredigeerde tekst kan nog steeds persoonsgegevens bevatten, dus ga er met dezelfde zorg mee om.",
              "Schoon uitvoeringslogs van automatiseringen op en zet het volledig loggen van payloads uit waar je dat niet nodig hebt.",
              "Ontwerp een manier om de gegevens van één klant in de bot, de helpdesk en de logs te vinden, te exporteren of te verwijderen, zodat individuele verzoeken geen handmatige zoektocht vereisen.",
              "Stuur gevoelige zaken of zaken met veel impact naar een menselijke agent in plaats van de bot te laten beslissen.",
              "Vergeet niet dat chatbots ook onder de aparte transparantieregels van de Europese AI-verordening vallen.",
            ],
          },
          {
            type: "note",
            text: "Dit is geen juridisch advies. Deze pagina beschrijft wat de tekst van de AVG en de richtsnoeren van de EDPB zeggen, plus gangbare technische praktijk. Overleg voor beslissingen over je eigen verwerkingen met je functionaris voor gegevensbescherming of een gekwalificeerde jurist.",
          },
          {
            type: "p",
            text: "TascaLab bouwt automatiseringen bovenop Zendesk, Freshdesk, Jira, Slack en interne tools, met API's, webhooks, Make en n8n. Elk project omvat basisdocumentatie van wat er is gebouwd, wat helpt bij het in kaart brengen van gegevensstromen, plus 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welke AVG-grondslag geldt voor een supportchatbot?",
        a: "De AVG wijst er niet één toe. Artikel 6(1) noemt zes grondslagen, waaronder overeenkomst en gerechtvaardigd belang, en jij kiest en documenteert per doel de grondslag die past. Het Hof van Justitie van de EU beschouwt de lijst als uitputtend.",
      },
      {
        q: "Heb ik een verwerkersovereenkomst nodig met mijn automatiseringsplatform?",
        a: "Artikel 28(3) vereist dat verwerking door een verwerker wordt geregeld in een overeenkomst of andere rechtshandeling die onder meer het onderwerp, de duur, de aard en het doel van de verwerking beschrijft. Verwerkt een leverancier namens jou persoonsgegevens, controleer dan of zulke voorwaarden er zijn.",
      },
      {
        q: "Mag ik klantberichten naar een AI-model sturen?",
        a: "Dezelfde AVG-beginselen gelden als bij elke andere verwerking: een grondslag, dataminimalisatie en een verwerkersovereenkomst als de aanbieder gegevens voor jou verwerkt. Identificerende gegevens weglakken voordat je de tekst verstuurt, is een praktische manier om minder te delen.",
      },
      {
        q: "Hoe lang mag ik chattranscripten bewaren?",
        a: "Volgens artikel 5(1)(e) moeten persoonsgegevens niet langer dan nodig voor de doeleinden worden bewaard in een vorm die het mogelijk maakt personen te identificeren. De tekst noemt geen vast aantal dagen, dus je stelt per doel een bewaartermijn vast.",
      },
      {
        q: "Waar slaat Make mijn gegevens op?",
        a: "Make heeft datacenters in de VS en de EU. Je kiest er een wanneer je een organisatie aanmaakt, en die keuze kan achteraf niet worden gewijzigd.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2016/679 (General Data Protection Regulation)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679" },
      { label: "GDPR-Info — Art. 6 GDPR: Lawfulness of processing", url: "https://gdpr-info.eu/art-6-gdpr/" },
      { label: "GDPR-Info — Art. 28 GDPR: Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { label: "EUR-Lex — Court of Justice judgment in Case C-621/22 (legitimate interests)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A62022CJ0621" },
      { label: "EDPB — Guidelines 07/2020 on the concepts of controller and processor", url: "https://edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf" },
      { label: "EDPB — Opinion 22/2024 on reliance on processors and sub-processors", url: "https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "n8n Docs — Executions environment variables", url: "https://docs.n8n.io/hosting/configuration/environment-variables/executions/" },
    ],
    related: ["eu-ai-act-chatbot-rules", "ai-chatbot-for-customer-support", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
  {
    key: "european-accessibility-act-customer-service",
    slug: "european-accessibility-act-klantenservice",
    category: "guides",
    navLabel: "European Accessibility Act",
    primaryKeyword: "European Accessibility Act klantenservice",
    title: "European Accessibility Act: regels voor klantenservice",
    description:
      "European Accessibility Act: welke diensten eronder vallen, datums, de vrijstelling voor micro-ondernemingen en wat bijlage I van klantenservice vraagt.",
    h1: "European Accessibility Act en klantenservice: wat supportteams moeten weten",
    intro:
      "De European Accessibility Act (Richtlijn (EU) 2019/882) geldt sinds 28 juni 2025 voor een lijst van consumentendiensten, waaronder e-commerce, bankdiensten voor consumenten, e-books en elektronische communicatie. Voor diensten die eronder vallen, vraagt bijlage I dat websites en mobiele apps toegankelijk zijn en dat ondersteunende diensten zoals helpdesks en callcenters, als je die hebt, informatie geven over de toegankelijkheid van de dienst via toegankelijke communicatiemiddelen. Micro-ondernemingen die diensten verlenen, zijn vrijgesteld.",
    keyFacts: [
      "Artikel 31: lidstaten moesten hun nationale wetten uiterlijk 28 juni 2022 vaststellen en ze vanaf 28 juni 2025 toepassen.",
      "Artikel 2(2) omvat diensten aan consumenten zoals elektronische communicatie, bankdiensten voor consumenten, e-books en e-commerce.",
      "Artikel 4(5) stelt micro-ondernemingen die diensten verlenen vrij; artikel 3(23) definieert die als minder dan 10 personen met een omzet of balanstotaal van ten hoogste EUR 2 miljoen.",
      "Bijlage I, afdeling III: waar beschikbaar moeten ondersteunende diensten informatie geven over de toegankelijkheid van de dienst via toegankelijke communicatiemiddelen.",
      "EN 301 549 V4.1.1 is in augustus 2026 vastgesteld, maar volgens AccessibleEU is het nog niet de juridische referentie voor naleving van de EAA.",
    ],
    sections: [
      {
        heading: "Welke diensten onder de European Accessibility Act vallen",
        blocks: [
          {
            type: "p",
            text: "Richtlijn (EU) 2019/882, bekend als de European Accessibility Act of EAA, stelt toegankelijkheidseisen voor een lijst van producten in artikel 2(1) en een lijst van diensten in artikel 2(2). Deze pagina richt zich op diensten, omdat klantenservice daaronder valt. Artikel 2(2) is van toepassing op de volgende diensten die na 28 juni 2025 aan consumenten worden verleend.",
          },
          {
            type: "table",
            caption: "Diensten genoemd in artikel 2(2) van Richtlijn (EU) 2019/882",
            head: ["Artikel 2(2)", "Dienst", "Supportcontactpunten die het nalopen waard zijn"],
            rows: [
              ["(a)", "Elektronische communicatiediensten, behalve transmissiediensten voor machine-to-machinediensten", "Hulppagina's, livechat en contactopties voor abonnees"],
              ["(b)", "Diensten die toegang bieden tot audiovisuele mediadiensten", "Hulp in de app en supportchat"],
              ["(c)", "Bepaalde onderdelen van passagiersvervoer door de lucht, per bus, per spoor en over water", "Hulp bij boekingen, reisinformatie en chat op de website of in de app"],
              ["(d)", "Bankdiensten voor consumenten", "Chat- en voicebots die vragen over rekeningen of passen beantwoorden"],
              ["(e)", "E-books en specifieke software", "Helpdesk voor leesapps en aankopen"],
              ["(f)", "E-commercediensten", "Chatwidget in de webshop, bot voor de orderstatus, retourproces"],
            ],
          },
          {
            type: "p",
            text: "De richtlijn definieert e-commercediensten als diensten die op afstand, via websites en diensten op mobiele apparaten, langs elektronische weg en op individueel verzoek van een consument worden verleend met het oog op het sluiten van een consumentenovereenkomst. De overwegingen van de richtlijn voegen toe dat de e-commerceverplichtingen gelden voor de onlineverkoop van elk product of elke dienst. De derde kolom in de tabel is een suggestie voor een checklist, geen beschrijving van wat de wet van jouw bedrijf vereist.",
          },
        ],
      },
      {
        heading: "Belangrijke datums en overgangsperioden",
        blocks: [
          {
            type: "p",
            text: "De EAA is een richtlijn, dus ze bereikt bedrijven via nationale wetten. Artikel 31 verplichtte lidstaten om die wetten uiterlijk 28 juni 2022 vast te stellen en bekend te maken, en ze vanaf 28 juni 2025 toe te passen. Artikel 32 voegt een aantal overgangsperioden toe.",
          },
          {
            type: "table",
            caption: "EAA-datums voor diensten (Richtlijn (EU) 2019/882)",
            head: ["Datum", "Wat het betekent", "Artikel"],
            rows: [
              ["28 juni 2022", "Deadline voor lidstaten om de nationale wetten die de richtlijn omzetten vast te stellen en bekend te maken", "Artikel 31"],
              ["28 juni 2025", "Nationale maatregelen zijn van toepassing. Artikel 2(2) omvat diensten die na deze datum aan consumenten worden verleend", "Artikelen 2(2) en 31"],
              ["Tot 5 jaar na 28 juni 2025", "Dienstencontracten die vóór 28 juni 2025 zijn gesloten, mogen ongewijzigd doorlopen tot ze aflopen", "Artikel 32"],
              ["28 juni 2030", "Einde van de periode waarin dienstverleners diensten mogen blijven verlenen met producten die ze al rechtmatig gebruikten voor soortgelijke diensten", "Artikel 32"],
              ["Tot 20 jaar in gebruik", "Lidstaten mogen zelfbedieningsterminals die vóór 28 juni 2025 werden gebruikt, in gebruik laten tot het einde van hun economische levensduur, maar niet langer dan 20 jaar nadat ze in gebruik zijn genomen", "Artikel 32"],
            ],
          },
          {
            type: "p",
            text: "Omdat elke lidstaat zijn eigen wet schrijft, verschillen de nationale teksten en de toezichthouders per land. De Commissie zegt dat ze toeziet op de volledige en correcte omzetting van de richtlijn. Bedien je klanten in meerdere EU-landen, controleer dan in elk land de nationale wet.",
          },
        ],
      },
      {
        heading: "De vrijstelling voor micro-ondernemingen en andere grenzen",
        blocks: [
          {
            type: "p",
            text: "Artikel 3(23) definieert een micro-onderneming als een onderneming die minder dan 10 personen in dienst heeft en een jaaromzet van ten hoogste EUR 2 miljoen of een jaarlijks balanstotaal van ten hoogste EUR 2 miljoen heeft. Op grond van artikel 4(5) zijn micro-ondernemingen die diensten verlenen vrijgesteld van de toegankelijkheidseisen in artikel 4(3) en van de verplichtingen die verband houden met de naleving daarvan. De overwegingen leggen uit dat het voor deze bedrijven zelf al een onevenredige last zou zijn om een beoordeling uit te voeren. De richtlijn moedigt micro-ondernemingen wel aan om diensten te verlenen die aan de eisen voldoen.",
          },
          {
            type: "p",
            text: "De vrijstelling geldt alleen voor diensten. Micro-ondernemingen die met producten werken, worden anders behandeld en zijn niet volledig vrijgesteld.",
          },
          {
            type: "p",
            text: "Voor alle anderen bepaalt artikel 14 dat de toegankelijkheidseisen alleen gelden voor zover naleving geen ingrijpende wijziging vereist die de basiskenmerken van de dienst fundamenteel verandert, en geen onevenredige last oplegt. Een bedrijf dat zich hierop beroept, moet een beoordeling maken aan de hand van de criteria in bijlage VI. Dienstverleners moeten die beoordeling vernieuwen wanneer de dienst wordt gewijzigd, wanneer een autoriteit daarom vraagt en ten minste om de vijf jaar. De overwegingen voegen toe dat gebrek aan prioriteit, tijd of kennis niet als legitieme redenen mag worden beschouwd.",
          },
        ],
      },
      {
        heading: "Wat bijlage I zegt over klantenservice",
        blocks: [
          {
            type: "p",
            text: "Artikel 4(3) bepaalt dat alle diensten, behalve stedelijke en voorstedelijke vervoersdiensten en regionale vervoersdiensten, moeten voldoen aan afdeling III van bijlage I, die algemene toegankelijkheidseisen voor diensten vastlegt. Afdeling IV voegt eisen toe voor specifieke diensten, zoals bankdiensten voor consumenten en e-commerce. Drie punten in afdeling III zijn het belangrijkst voor supportteams:",
          },
          {
            type: "ul",
            items: [
              "Punt (a): de producten die worden gebruikt om de dienst te verlenen, moeten toegankelijk zijn.",
              "Punt (c): websites, inclusief bijbehorende onlinetoepassingen, en diensten op mobiele apparaten, inclusief mobiele apps, moeten op een consistente en adequate manier toegankelijk worden gemaakt door ze waarneembaar, bedienbaar, begrijpelijk en robuust te maken.",
              "Punt (d): waar beschikbaar moeten ondersteunende diensten (helpdesks, callcenters, technische ondersteuning, relaydiensten en opleidingsdiensten) informatie geven over de toegankelijkheid van de dienst en de compatibiliteit met ondersteunende technologieën, via toegankelijke communicatiemiddelen.",
            ],
          },
          {
            type: "p",
            text: "Artikel 13 voegt een transparantieplicht toe. Dienstverleners stellen volgens bijlage V informatie op die uitlegt hoe de dienst aan de toegankelijkheidseisen voldoet, en maken die schriftelijk en mondeling openbaar, ook op een manier die toegankelijk is voor personen met een handicap. De richtsnoeren van AccessibleEU voegen toe dat deze informatie moet worden bewaard zolang de dienst in gebruik is.",
          },
          {
            type: "p",
            text: "Een chatwidget of supportbot die op je website of in je app draait, is onderdeel van de interface die klanten gebruiken, dus het is logisch om die aan dezelfde toets te onderwerpen: waarneembaar, bedienbaar, begrijpelijk en robuust. Je helpdesk, bemand door mensen of bots, moet ook klaar zijn om vragen over de toegankelijkheid van je dienst te beantwoorden.",
          },
        ],
      },
      {
        heading: "Praktische richtlijnen voor chatwidgets en supportbots",
        blocks: [
          {
            type: "p",
            text: "De richtlijn noemt geen technische controles voor een chatwidget. De punten hieronder zijn gangbare technische praktijk die aansluit bij de principes van bijlage I. Test ze met echte ondersteunende technologie, zoals schermlezers en bediening met alleen het toetsenbord.",
          },
          {
            type: "ul",
            items: [
              "Maak de chatknop, het berichtveld, de knoppen en de snelle antwoorden bruikbaar met alleen een toetsenbord, met een zichtbare focusindicator.",
              "Geef elk bedieningselement een tekstlabel dat schermlezers voorlezen, en laat nieuwe berichten voorlezen zonder de focus van de gebruiker te verplaatsen.",
              "Vertrouw niet alleen op kleur, iconen of afbeeldingen om betekenis over te brengen. Geef afbeeldingen en kaarten tekstalternatieven.",
              "Vermijd korte inactiviteitstime-outs die de chat sluiten, of waarschuw voordat de chat sluit en laat de klant verdergaan.",
              "Houd botantwoorden kort en eenvoudig, en geef klanten een makkelijke manier om een persoon te bereiken, met doorgifte van de gespreksgeschiedenis.",
              "Leer de bot en je agents om vragen over de toegankelijkheid van je dienst te beantwoorden en te verwijzen naar je informatie volgens artikel 13.",
              "Bied meer dan één contactkanaal aan, zoals chat en e-mail, en geef bellers van een voicebot een tekstalternatief.",
            ],
          },
          {
            type: "p",
            text: "Voor technische details kijk je naar EN 301 549, de Europese norm voor toegankelijkheidseisen voor ICT-producten en -diensten. Uitvoeringsbesluit (EU) 2021/1339 van de Commissie verwijst naar EN 301 549 V3.2.1 als geharmoniseerde norm onder de richtlijn webtoegankelijkheid (Web Accessibility Directive), die geldt voor websites en apps van de publieke sector. ETSI heeft EN 301 549 V4.1.1 op 24 augustus 2026 vastgesteld. Die versie stapt over op WCAG 2.2 en voegt een bijlage toe die de eisen koppelt aan de EAA. Volgens AccessibleEU is V4.1.1 nog niet de juridische referentie om naleving van de EAA of de richtlijn webtoegankelijkheid aan te tonen, en blijft V3.2.1, gebaseerd op WCAG 2.1 niveau AA, de referentie totdat de Commissie V4.1.1 in het Publicatieblad vermeldt.",
          },
          {
            type: "note",
            text: "Dit is geen juridisch advies. Deze pagina vat Richtlijn (EU) 2019/882 en officiële EU-richtsnoeren samen zoals gecontroleerd op 19 oktober 2026. Of je dienst eronder valt en wat je moet doen, hangt af van de nationale wet die op jou van toepassing is. Lees voor beslissingen over je eigen dienst de officiële teksten en overleg met een gekwalificeerde jurist.",
          },
          {
            type: "p",
            text: "TascaLab bouwt chat- en voicebots bovenop de tools die je al gebruikt, zoals Zendesk, Freshdesk, Jira en Slack. Projecten voor een Standard Chat Bot kosten {{price:standard}} en projecten voor een Voice Bot {{price:voice}}. Beide omvatten basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Sinds wanneer geldt de European Accessibility Act?",
        a: "Artikel 31 verplichtte lidstaten om hun nationale wetten uiterlijk 28 juni 2022 vast te stellen en ze vanaf 28 juni 2025 toe te passen. Artikel 2(2) omvat diensten die na 28 juni 2025 aan consumenten worden verleend.",
      },
      {
        q: "Zijn kleine bedrijven vrijgesteld van de European Accessibility Act?",
        a: "Micro-ondernemingen die diensten verlenen, zijn vrijgesteld op grond van artikel 4(5). Artikel 3(23) definieert een micro-onderneming als een onderneming met minder dan 10 personen en een jaaromzet of balanstotaal van ten hoogste EUR 2 miljoen. De vrijstelling geldt niet volledig voor micro-ondernemingen die met producten werken.",
      },
      {
        q: "Geldt de European Accessibility Act ook voor klantenservice?",
        a: "Bijlage I, afdeling III, punt (d) bepaalt dat ondersteunende diensten zoals helpdesks, callcenters, technische ondersteuning, relaydiensten en opleidingsdiensten, waar beschikbaar, informatie moeten geven over de toegankelijkheid van de dienst en de compatibiliteit met ondersteunende technologieën, via toegankelijke communicatiemiddelen.",
      },
      {
        q: "Is EN 301 549 de geharmoniseerde norm voor de EAA?",
        a: "EN 301 549 V4.1.1, vastgesteld op 24 augustus 2026, voegt een bijlage toe die de eisen aan de EAA koppelt. Volgens AccessibleEU is die versie nog niet de juridische referentie voor naleving van de EAA totdat de Commissie haar in het Publicatieblad vermeldt, en blijft V3.2.1 tot dan de referentie.",
      },
      {
        q: "Moeten dienstencontracten die vóór juni 2025 zijn gesloten worden aangepast?",
        a: "Artikel 32 laat dienstencontracten die vóór 28 juni 2025 zijn gesloten ongewijzigd doorlopen tot ze aflopen, maar niet langer dan vijf jaar na die datum.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Directive (EU) 2019/882 (European Accessibility Act)", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" },
      { label: "EUR-Lex — Summary: Accessibility of products and services", url: "https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html" },
      { label: "European Commission — European Accessibility Act (EAA)", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" },
      { label: "AccessibleEU — Guidance on legislation", url: "https://accessible-eu-centre.ec.europa.eu/document/download/7bf9cb97-8ccf-421f-9d2d-6d1283e602ef_en?filename=AccEU_Guidance+on+legislation_English_acc.pdf" },
      { label: "AccessibleEU — The European accessibility standard EN 301 549 has been updated", url: "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en" },
      { label: "ETSI — EN 301 549 V4.1.1 (2026-09)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf" },
      { label: "EUR-Lex — Commission Implementing Decision (EU) 2021/1339", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1339" },
    ],
    related: ["website-chatbot-for-support", "eu-ai-act-chatbot-rules", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "n8n-zendesk-integration",
    slug: "n8n-zendesk-koppeling",
    category: "guides",
    navLabel: "n8n Zendesk-koppeling",
    primaryKeyword: "n8n Zendesk koppeling",
    title: "n8n Zendesk-koppeling: nodes, triggers en webhooks",
    description:
      "n8n Zendesk-koppeling: bewerkingen van de Zendesk-node, de Zendesk Trigger, API-token of OAuth2, webhooks, rate limits en een voorbeeldworkflow.",
    h1: "n8n Zendesk-koppeling: nodes, credentials en voorbeeldworkflows",
    intro:
      "n8n koppelt met Zendesk via twee ingebouwde nodes. De Zendesk-node werkt met tickets, ticketvelden, gebruikers en organisaties, en de Zendesk Trigger-node start een workflow wanneer er iets gebeurt in Zendesk. Beide gebruiken dezelfde credential: een API-token of OAuth2. Houd je de regels liever in Zendesk, dan kun je in plaats daarvan een Zendesk-webhook naar een n8n Webhook-node laten wijzen en die afvuren vanuit een Zendesk-trigger.",
    keyFacts: [
      "De n8n Zendesk-node heeft vier resources: Ticket, Ticket Field, User en Organization.",
      "Tags instellen met de bewerking Update Ticket van de node vervangt de hele taglijst. Tags die je weglaat, worden verwijderd.",
      "De Zendesk-credential van n8n ondersteunt een API-token (subdomein, e-mailadres waarmee je inlogt en token) of OAuth2.",
      "Zendesk ondertekent webhookrequests met de headers X-Zendesk-Webhook-Signature en X-Zendesk-Webhook-Signature-Timestamp.",
      "De API-limieten van Zendesk Suite lopen van 200 requests per minuut op Team tot 2.500 op Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Wat de n8n Zendesk-node kan",
        blocks: [
          {
            type: "p",
            text: "De Zendesk-node leest of wijzigt gegevens in Zendesk als stap in een workflow. De documentatie van n8n groepeert de bewerkingen per resource.",
          },
          {
            type: "table",
            caption: "Resources en bewerkingen van de Zendesk-node (n8n-documentatie, gecontroleerd in oktober 2026)",
            head: ["Resource", "Bewerkingen"],
            rows: [
              ["Ticket", "Aanmaken, verwijderen, één of meer ophalen, bijwerken en een opgeschort ticket herstellen"],
              ["Ticket Field", "Eén ticketveld ophalen, of alle systeem- en aangepaste ticketvelden ophalen"],
              ["User", "Aanmaken, verwijderen, één of meer ophalen, bijwerken, zoeken, de organisaties van een gebruiker ophalen en gerelateerde gegevens ophalen"],
              ["Organization", "Aanmaken, verwijderen, tellen, één of meer ophalen, bijwerken en gerelateerde gegevens ophalen"],
            ],
          },
          {
            type: "p",
            text: "Eén gedrag zet mensen op het verkeerde been. Gebruik je Update Ticket en vul je het veld Tag Names or IDs in, dan wordt volgens de documentatie van n8n de hele lijst met tags op het ticket vervangen, dus elke tag die je niet opneemt, wordt verwijderd. Dit volgt hoe de Zendesk API tagupdates standaard verwerkt. De documentatie noemt drie oplossingen: haal de huidige tags op en voeg ze samen met de nieuwe voordat je bijwerkt, gebruik de HTTP Request-node met de property additional_tags van Zendesk, of roep het tags-endpoint van het ticket aan. De laatste twee voegen tags toe zonder bestaande tags te verwijderen.",
          },
          {
            type: "p",
            text: "Ondersteunt de node een bewerking die je nodig hebt niet, gebruik dan de HTTP Request-node, zet Authentication op Predefined Credential Type en kies je Zendesk-credential. Het request gebruikt dan dezelfde verbinding als de Zendesk-node.",
          },
        ],
      },
      {
        heading: "Zendesk-credentials instellen in n8n",
        blocks: [
          {
            type: "p",
            text: "De Zendesk- en Zendesk Trigger-nodes gebruiken dezelfde credential, en n8n ondersteunt twee manieren om te authenticeren. Voor beide heb je je subdomein nodig: het deel van je Zendesk-URL tussen https:// en .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "API-token: open in Zendesk Admin Center Apps and integrations en daarna APIs, en schakel tokentoegang voor de Zendesk API in. Voeg een token met een beschrijving toe en kopieer het. Vul in n8n het subdomein, het e-mailadres waarmee je in Zendesk inlogt en het token in.",
              "OAuth2: maak in Zendesk Admin Center een OAuth-client aan onder Apps and integrations en daarna APIs. Plak de OAuth-callback-URL van n8n in het veld voor de redirect-URL van de client. Kopieer de unieke identifier van de client naar Client ID in n8n en het secret naar Client Secret, voeg het subdomein toe, sla op en verbind je Zendesk-account.",
            ],
          },
        ],
      },
      {
        heading: "Zendesk Trigger-node of een Zendesk-webhook",
        blocks: [
          {
            type: "p",
            text: "Er zijn twee manieren om een n8n-workflow vanuit Zendesk te starten. De Zendesk Trigger-node start een workflow wanneer Zendesk-events voldoen aan de voorwaarden die je in de node instelt. In het voorbeeld uit de documentatie van n8n filtert de node op tickets met de status Open, en de workflow draait zodra je hem inschakelt.",
          },
          {
            type: "p",
            text: "Het alternatief is de koppeling zelf te bouwen. Ga in Zendesk Admin Center naar Apps and integrations en daarna Webhooks, maak een webhook aan, kies Trigger or Automation als verbindingsmethode en laat hem wijzen naar de Production URL van een n8n Webhook-node. Voeg daarna de actie Notify webhook toe aan een Zendesk-trigger of -automatisering en schrijf de payload, die niet langer mag zijn dan 16.000 tekens. Zo blijven de voorwaarden in de bedrijfsregels van Zendesk en kies je precies welke velden je verstuurt.",
          },
          {
            type: "table",
            caption: "Twee manieren om een n8n-workflow vanuit Zendesk te starten",
            head: ["Vraag", "Zendesk Trigger-node", "Zendesk-webhook + n8n Webhook-node"],
            rows: [
              ["Waar de voorwaarden staan", "In de node, in n8n", "In een Zendesk-trigger of -automatisering met de actie Notify webhook"],
              ["Wat n8n ontvangt", "De eventdata die de node levert", "De payload die je in de triggeractie schrijft, tot 16.000 tekens"],
              ["Zendesk-credential", "Nodig voor de trigger zelf", "Alleen nodig voor latere stappen die Zendesk aanroepen"],
              ["Testen", "Voer de node uit in de editor, zoals in het voorbeeld uit de documentatie van n8n", "Gebruik de Test URL van de Webhook-node, die 120 seconden luistert, en schakel daarna over op de Production URL"],
            ],
          },
          {
            type: "p",
            text: "Gebruik je een webhook, controleer dan of requests echt van Zendesk komen. Zendesk stuurt twee headers mee: X-Zendesk-Webhook-Signature en X-Zendesk-Webhook-Signature-Timestamp. De handtekening is base64(HMACSHA256(timestamp + body)), gemaakt met het signing secret van de webhook, dat je op de detailpagina van de webhook kunt weergeven of via de API kunt ophalen. Bereken de handtekening opnieuw in je workflow en weiger requests die niet overeenkomen. Zendesk zegt ook dat dezelfde actie een webhook meer dan eens kan aanroepen, dus zorg dat de workflow veilig twee keer voor hetzelfde ticket kan draaien.",
          },
          {
            type: "p",
            text: "De Webhook-node kan direct antwoorden, wanneer de laatste node klaar is, of via een aparte Respond to Webhook-node. Bij langere workflows geeft direct antwoorden Zendesk snel een reactie terwijl de rest van het werk doorloopt.",
          },
        ],
      },
      {
        heading: "Voorbeeldworkflow: nieuwe tickets classificeren en Slack informeren",
        blocks: [
          {
            type: "p",
            text: "Hier is een veelgebruikt patroon, beschreven in stappen. Het laat zien hoe de nodes in elkaar passen. Het is geen casestudy van TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: een Zendesk Trigger-node, of een Webhook-node die wordt gevoed door een Zendesk-trigger die afgaat wanneer een ticket wordt aangemaakt. Stuur minimaal het ticket-ID mee.",
              "Ophalen: een Zendesk-node met de resource Ticket haalt het volledige ticket op, inclusief onderwerp, beschrijving en huidige tags.",
              "Classificeren: een Text Classifier-node sorteert de tekst in categorieën die je zelf definieert, zoals facturering, technisch probleem of terugbetaling. Elke categorie heeft een naam en een beschrijving die het model helpt. Standaard worden items die bij geen enkele categorie passen weggegooid, dus schakel de tak Other in om ze op te vangen.",
              "Bijwerken: een Zendesk-node stelt de groep en tags in. Voeg eerst de bestaande tags samen, of voeg tags toe via de HTTP Request-node met additional_tags, zodat je geen tags wist die agents hebben ingesteld.",
              "Informeren: een Slack-node plaatst de categorie en een link naar het ticket in het kanaal van het team.",
              "Fouten afhandelen: stuur mislukte runs naar een alert, en wacht en probeer opnieuw wanneer Zendesk een 429-response geeft.",
            ],
          },
          {
            type: "p",
            text: "Je kunt hetzelfde patroon uitbreiden. Stuur urgente tickets naar een apart Slack-kanaal, of zoek met de resource Organization de organisatie van de klant op voordat je een groep kiest.",
          },
        ],
      },
      {
        heading: "Rate limits en waar n8n draait",
        blocks: [
          {
            type: "p",
            text: "Zendesk beperkt het aantal API-requests per minuut per abonnement. De developerdocumentatie noemt deze standaardlimieten voor de Support- en Help Center-API's:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 requests per minuut.",
              "Suite Growth en Suite Professional: 400 requests per minuut.",
              "Suite Enterprise: 700 requests per minuut.",
              "Suite Enterprise Plus: 2.500 requests per minuut.",
            ],
          },
          {
            type: "p",
            text: "De add-on High Volume API verhoogt een geschikt abonnement naar 2.500 requests per minuut. Die vervangt de limiet van het abonnement in plaats van erbij op te tellen, en vereist Suite Growth of hoger (of Support Professional of hoger) met minimaal 10 agentseats. Boven de limiet geeft Zendesk HTTP 429 terug met een Retry-After-header die aangeeft hoeveel seconden je moet wachten. Sommige endpoints hebben eigen, strengere limieten. Tel het aantal API-calls per run en vermenigvuldig dat met je piekvolume aan tickets. Bulktaken, zoals achteraf tags toevoegen aan oude tickets, lopen eerder tegen de limiet aan, dus verdeel ze in batches en voeg wachttijden toe.",
          },
          {
            type: "p",
            text: "n8n draait als n8n Cloud, een beheerde instantie die n8n voor je draait, of self-hosted op je eigen machine of infrastructuur. Voor de meeste self-hosted opzetten raadt de documentatie Docker aan, en n8n Cloud als je geen ervaring hebt met serverbeheer. Bij beide triggermethoden moet Zendesk je n8n-instantie kunnen bereiken. Staat een self-hosted instantie achter een reverse proxy, stel dan N8N_WEBHOOK_URL in op de openbare basis-URL, zodat n8n de juiste webhook-URL's toont en externe diensten ze correct registreren. N8N_WEBHOOK_URL vervangt WEBHOOK_URL, dat nog steeds werkt maar vanaf n8n 2.35.0 verouderd is.",
          },
          {
            type: "p",
            text: "TascaLab bouwt Zendesk-automatiseringen zoals deze met n8n, Make, API's en webhooks, bovenop de tools die je al gebruikt. Projecten voor Ticket Routing & Categorization kosten {{price:routing}}, en projecten voor Custom Automation {{price:custom}}. De meeste implementaties duren 1 tot 3 weken, en elk project omvat basisdocumentatie en 30 dagen ondersteuning na livegang. Je kunt beginnen met een gratis Health Check-gesprek van 30 minuten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Heeft n8n een ingebouwde Zendesk-koppeling?",
        a: "Ja. n8n heeft een Zendesk-node voor tickets, ticketvelden, gebruikers en organisaties, en een Zendesk Trigger-node die workflows start vanuit Zendesk-events. Beide gebruiken dezelfde Zendesk-credential.",
      },
      {
        q: "Waarom verwijdert de n8n Zendesk-node mijn tickettags?",
        a: "Als je in de bewerking Update Ticket het veld Tag Names or IDs invult, wordt de hele taglijst vervangen. De documentatie van n8n raadt aan eerst de bestaande tags samen te voegen, of tags toe te voegen via de HTTP Request-node met de property additional_tags van Zendesk of via het tags-endpoint.",
      },
      {
        q: "Welke authenticatiemethoden ondersteunt de Zendesk-credential van n8n?",
        a: "Een API-token, ingevoerd met je subdomein en het e-mailadres waarmee je inlogt, of OAuth2, met de client-ID en het secret van een OAuth-client die je in Zendesk aanmaakt.",
      },
      {
        q: "Hoe controleer ik of een webhookrequest van Zendesk komt?",
        a: "Bereken base64(HMACSHA256(timestamp + body)) opnieuw met het signing secret van de webhook en vergelijk de uitkomst met de header X-Zendesk-Webhook-Signature. De timestamp staat in de header X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Wat gebeurt er als een workflow de rate limit van de Zendesk API bereikt?",
        a: "Zendesk weigert het request met HTTP 429 en een Retry-After-header die aangeeft hoeveel seconden je moet wachten. De standaardlimieten lopen van 200 requests per minuut op Suite Team tot 2.500 op Suite Enterprise Plus.",
      },
    ],
    sources: [
      { label: "n8n Docs — Zendesk node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk" },
      { label: "n8n Docs — Zendesk Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger" },
      { label: "n8n Docs — Zendesk credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/zendesk" },
      { label: "n8n Docs — Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook" },
      { label: "n8n Docs — Text Classifier node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Configure webhook URLs with reverse proxy", url: "https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "Zendesk Developer Docs — Rate limits", url: "https://developer.zendesk.com/api-reference/introduction/rate-limits/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
