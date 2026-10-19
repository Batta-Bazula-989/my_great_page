import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-jamforelse",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier för supportautomatisering",
    title: "n8n vs Make vs Zapier för supportautomatisering (2026)",
    description:
      "n8n vs Make vs Zapier för supportautomatisering: licens och hosting, hur användningen räknas, kopplingar till Zendesk, Freshdesk, Jira och Slack, webhooks, kod.",
    h1: "n8n vs Make vs Zapier för supportautomatisering",
    intro:
      "De största skillnaderna mellan n8n, Make och Zapier för supportarbete är var de körs och hur de räknar användning. n8n kan hostas i egen regi under sin Sustainable Use License eller användas som n8n Cloud, medan Make och Zapier körs som hostade tjänster. Alla tre kopplas till Zendesk, Freshdesk, Jira och Slack, tar emot webhooks och har ett kodsteg, så valet handlar oftast om var data ska ligga, volym och hur mycket anpassad logik du behöver.",
    keyFacts: [
      "n8n:s egenhostade programvara använder Sustainable Use License, en fair-code-licens som n8n skapade 2022. n8n kallar sig inte öppen källkod.",
      "Per oktober 2026 räknar n8n executions (en körning av ett arbetsflöde), Make räknar credits (operations omräknade 1:1) och Zapier räknar tasks (lyckade åtgärdssteg).",
      "Triggers, Filter-steg och Paths-steg i Zapier förbrukar inga tasks. Triggermoduler i Make förbrukar 1 credit per körning även när de inte hittar några nya data.",
      "Make låter dig välja ett datacenter i USA eller EU när du skapar en organisation. Det går inte att ändra senare.",
      "Alla tre har en webhook-trigger och ett kodsteg som kör JavaScript eller Python.",
    ],
    sections: [
      {
        heading: "Jämförelse sida vid sida",
        blocks: [
          {
            type: "p",
            text: "Tabellen sammanfattar vad respektive leverantörs egen dokumentation säger, kontrollerat i oktober 2026. Priser är medvetet utelämnade. Planerna ändras ofta, så kontrollera den aktuella prissidan innan du bestämmer dig.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier för supportautomatisering (per oktober 2026)",
            head: ["Egenskap", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Var det körs",
                "n8n Cloud (drivs av n8n) eller egenhostat på din egen maskin eller infrastruktur",
                "Makes egna datacenter. Du väljer USA eller EU per organisation",
                "Zapiers hanterade moln. Ingen egenhostad version eller on-premises-version",
              ],
              [
                "Licens",
                "Sustainable Use License (fair-code) för den egenhostade programvaran",
                "Hostad tjänst enligt Makes villkor",
                "Hostad tjänst enligt Zapiers villkor",
              ],
              [
                "Användningsenhet",
                "Executions: en execution är en körning av ett arbetsflöde",
                "Credits: de flesta moduler förbrukar 1 credit per operation",
                "Tasks: en task per lyckat åtgärdssteg",
              ],
              [
                "Helpdesk-kopplingar",
                "Noder för Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software och Slack",
                "Appar för Zendesk, Freshdesk, Jira Cloud Platform och Slack",
                "Appar för Zendesk, Freshdesk, Jira Service Management och Slack",
              ],
              [
                "Webhook-trigger",
                "Webhook-nod med separata URL:er för test och produktion",
                "Modulen Custom webhook i appen Webhooks",
                "Webhooks by Zapier: Catch Hook och Catch Raw Hook",
              ],
              [
                "Kodsteg",
                "Code-nod: JavaScript eller Python",
                "Appen Make Code: JavaScript eller Python",
                "Code by Zapier: JavaScript (Node.js 22) eller Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting och licens",
        blocks: [
          {
            type: "p",
            text: "n8n ger dig två alternativ. n8n Cloud är en hanterad instans som n8n driver åt dig. Egen hosting innebär att du kör n8n på din egen maskin eller infrastruktur. För de flesta egenhostade upplägg rekommenderar dokumentationen Docker. Om du inte är van vid att hantera servrar rekommenderar den i stället n8n Cloud.",
          },
          {
            type: "p",
            text: "Den egenhostade programvaran omfattas av Sustainable Use License, en fair-code-licens som n8n skapade 2022. Du får använda, ändra, skapa härledda verk av och vidaredistribuera programvaran, men med begränsningar. Användningen är begränsad till interna affärsändamål eller icke-kommersiell eller personlig användning, och du får bara distribuera den kostnadsfritt för icke-kommersiella ändamål. Open Source Initiatives definition tillåter inte begränsningar av användningen, och därför kallar sig n8n inte öppen källkod. Filer med ”.ee.” i namnet omfattas av en separat n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make kör dina scenarier i sina egna datacenter. När du skapar en organisation väljer du USA eller Europeiska unionen. Den inställningen avgör var dina data lagras och behandlas, och den kan inte ändras i efterhand.",
          },
          {
            type: "p",
            text: "Zapier körs i sitt eget hanterade moln. I Zapiers jämförelse med n8n skriver Zapier att det inte fullt ut kan ersätta n8n för automatiseringar som av regelefterlevnadsskäl måste köras i en egenhostad, isolerad (air-gapped) eller on-premises-miljö.",
          },
          {
            type: "note",
            text: "Det här är en sammanfattning av n8n:s licens, inte en tolkning. Om du planerar att bygga in n8n i en produkt som du säljer, läs först hela licenstexten och användningsbegränsningarna.",
          },
        ],
      },
      {
        heading: "Hur varje verktyg räknar användning (per oktober 2026)",
        blocks: [
          {
            type: "p",
            text: "De tre produkterna använder olika debiteringsenheter, så du kan inte jämföra deras plangränser direkt. Så här definierar varje leverantör sin enhet.",
          },
          {
            type: "ul",
            items: [
              "n8n executions: n8n definierar en execution som en körning av ett arbetsflöde. Betalplaner, i molnet eller egenhostade, har en kvot för executions, och bara produktionskörningar räknas mot den. Manuella körningar från editorn räknas inte. En Schedule Trigger räknas varje gång den utlöses. Varje inkommande webhook-anrop som startar arbetsflödet räknas en gång.",
              "Make credits: sedan den 27 augusti 2025 debiterar Make i credits, och befintliga operations räknades om 1:1. En operation är en modulkörning som behandlar eller kontrollerar data. De flesta appar förbrukar 1 credit per operation. Triggermoduler förbrukar 1 credit per körning, även när de inte hittar några nya data. Med Makes egen AI-leverantör förbrukar AI-funktioner credits baserat på operations och tokens. Om du kopplar in din egen AI-leverantör täcker credits dina operations och du betalar den leverantören för tokens.",
              "Zapier tasks: Zapier räknar en task varje gång ett åtgärdssteg körs utan fel. Triggers förbrukar aldrig tasks, och det gör inte heller Filter- eller Paths-steg. Steg som slutar med fel eller stoppas räknas inte. Vissa produkter, till exempel steg med AI by Zapier, räknas till en högre taxa.",
            ],
          },
          {
            type: "p",
            text: "De här enheterna spelar roll för en supportbot som körs vid varje nytt ärende eller chattmeddelande. I n8n räknas även ett långt arbetsflöde som en execution per körning. I Make förbrukar varje modul som körs credits. I Zapier är varje lyckat åtgärdssteg en task. I Make förbrukar ett scenario som frågar din helpdesk enligt schema (polling) credits även när ingenting har ändrats. Webhook-baserade direkttriggers (instant triggers) gör att du slipper betala för de tomma kontrollerna.",
          },
        ],
      },
      {
        heading: "Kopplingar till Zendesk, Freshdesk, Jira och Slack",
        blocks: [
          {
            type: "p",
            text: "Alla tre verktygen har färdiga kopplingar för de här fyra, men namnen och djupet skiljer sig. Kontrollera att exakt den trigger och åtgärd du behöver finns innan du bestämmer dig.",
          },
          {
            type: "ul",
            items: [
              "n8n: det finns en Zendesk-nod med en separat Zendesk Trigger-nod. Freshdesk-noden täcker ärenden och kontakter. Jira Software-noden täcker issues, kommentarer och bilagor. Slack-noden täcker meddelanden, kanaler, filer och reaktioner, och dess operation ”Send and Wait for Response” stöder godkännandeflöden. Om en nod inte stöder en operation föreslår dokumentationen att du anropar API:et med noden HTTP Request och återanvänder samma inloggningsuppgifter (credential).",
              "Make: Zendesk-appen innehåller moduler som bevakar ärenden och ärendeaktivitet. De fungerar som direkttriggers via en webhook som du skapar i Zendesk. Freshdesk-appen täcker ärenden, konversationer, kontakter och företag och erbjuder också webhook-baserade direkttriggers. Make listar också en Jira Cloud Platform-app och en Slack-app.",
              "Zapier: Jira Service Management-appen har triggers för nya och uppdaterade förfrågningar och en åtgärd som skapar förfrågningar. Zapier listar färdiga Zaps som kopplar den till Zendesk och Slack. Freshdesk-appen kopplas till Slack och Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks och kodsteg",
        blocks: [
          {
            type: "p",
            text: "Webhooks låter en helpdesk eller chattkanal starta en automatisering i samma ögonblick som något händer. Kodsteg täcker den logik som inbyggda steg inte klarar, till exempel att strukturera om en payload eller anropa ett API som saknar färdig koppling.",
          },
          {
            type: "ul",
            items: [
              "n8n:s Webhook-nod: varje Webhook-nod får två URL:er, en Test URL och en Production URL. Den kan svara direkt, när den sista noden är klar eller via en separat Respond to Webhook-nod.",
              "Makes Webhooks-app: modulen Custom webhook skapar en unik URL för ett scenario, och du kan inte dela samma webhook mellan scenarier. En Webhook response-modul styr vad anroparen får tillbaka. Utan en sådan är standardsvaret texten ”Accepted”.",
              "Webhooks by Zapier: Catch Hook ger dig en unik URL som den andra appen skickar anrop till, och den tolkar anropets body. Catch Raw Hook returnerar body otolkad, tillsammans med headers. Retrieve Poll fungerar åt andra hållet och hämtar data med ett GET-anrop.",
              "n8n:s Code-nod: kör JavaScript eller Python, antingen en gång för alla inkommande objekt (standard) eller en gång per objekt. I n8n Cloud kan Python-alternativet inte importera bibliotek.",
              "Makes Code-app: modulen Run code kör JavaScript eller Python och har några inbyggda bibliotek. Enligt Makes dokumentation kräver import av egna bibliotek en Enterprise-plan.",
              "Code by Zapier: kodsteg kan vara triggers eller åtgärder och stöder JavaScript (Node.js 22) och Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Vilket som passar ditt supportteam",
        blocks: [
          {
            type: "ul",
            items: [
              "Ärendedata måste stanna på infrastruktur som du kontrollerar: n8n är det enda av de tre som dokumenterar ett egenhostat alternativ.",
              "Du vill ha ett hostat verktyg med datalagring i EU som ställs in per organisation: Makes alternativ med datacenter i EU täcker det.",
              "Ditt team använder redan Zapier och dina flöden är korta: triggers och filter förbrukar inga tasks, så enkla aviseringar förblir billiga.",
              "Dina arbetsflöden har många steg och körs på varje ärende: jämför n8n:s executions per körning med credits eller tasks per steg vid din verkliga volym.",
            ],
          },
          {
            type: "p",
            text: "TascaLab bygger supportautomatiseringar ovanpå de verktyg du redan använder (Zendesk, Freshdesk, Jira, Slack och interna verktyg) med API:er, webhooks, Make och n8n. De flesta upplägg tar 1 till 3 veckor. Varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt auditsamtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Är n8n öppen källkod?",
        a: "n8n distribuerar sin programvara under Sustainable Use License, som företaget kallar fair-code. Eftersom licensen begränsar hur programvaran får användas säger n8n att det inte kallar sig öppen källkod.",
      },
      {
        q: "Kan jag hosta Make eller Zapier själv?",
        a: "Make kör scenarier i sitt eget datacenter i USA eller EU, som du väljer när du skapar en organisation. Zapier körs i sitt hanterade moln och säger att det inte fullt ut kan ersätta n8n där automatiseringar måste köras i en egenhostad miljö eller on-premises-miljö.",
      },
      {
        q: "Förbrukar triggers i Zapier tasks?",
        a: "Nej. Zapier räknar en task varje gång ett åtgärdssteg körs utan fel. Triggers, Filter-steg och Paths-steg förbrukar inga tasks.",
      },
      {
        q: "Förbrukar en trigger i Make credits när det inte finns något nytt?",
        a: "Ja. Makes hjälpcenter säger att triggermoduler förbrukar 1 credit per körning, även när de inte hittar några nya data. Webhook-baserade direkttriggers undviker de tomma körningarna.",
      },
      {
        q: "Vad räknas som en execution i n8n?",
        a: "En körning av ett arbetsflöde. På betalplaner räknas bara produktionskörningar mot kvoten. Manuella körningar från editorn räknas inte.",
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
];
