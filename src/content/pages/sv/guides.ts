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
            text: "TascaLab bygger supportautomatiseringar ovanpå de verktyg du redan använder (Zendesk, Freshdesk, Jira, Slack och interna verktyg) med API:er, webhooks, Make och n8n. De flesta upplägg tar 1 till 3 veckor. Varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
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
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "ai-forordningen-chattbottar-artikel-50",
    category: "guides",
    navLabel: "AI-förordningen och chattbottar",
    primaryKeyword: "AI-förordningen chattbottar",
    title: "AI-förordningen och chattbottar: artikel 50 och datum",
    description:
      "AI-förordningen och chattbottar: vad artikel 50 kräver, vem som är leverantör eller tillhandahållare, viktiga datum och vad Digital Omnibus on AI ändrade.",
    h1: "AI-förordningen och chattbottar: vad artikel 50 kräver och när",
    intro:
      "Enligt EU:s AI-förordning (förordning (EU) 2024/1689) måste leverantörer utforma AI-system som interagerar direkt med människor, till exempel chattbottar, så att de människorna informeras om att de interagerar med ett AI-system, om det inte är uppenbart av sammanhanget. Skyldigheten finns i artikel 50 och tillämpas från den 2 augusti 2026. Digital Omnibus on AI från 2026 flyttade tidsfristerna för högrisksystem, men kommissionen anger fortfarande den 2 augusti 2026 som det datum då artikel 50 börjar tillämpas.",
    keyFacts: [
      "Artikel 50.1: leverantörer måste se till att människor informeras om att de interagerar med ett AI-system, om det inte är uppenbart av sammanhanget.",
      "Artikel 50.5: informationen måste ges på ett tydligt och urskiljbart sätt, senast vid den första interaktionen.",
      "AI-förordningen trädde i kraft den 1 augusti 2024. Artikel 50 tillämpas från den 2 augusti 2026.",
      "Digital Omnibus on AI (förordning (EU) 2026/1744) trädde i kraft den 27 juli 2026. Den flyttade tidsfristerna för högrisksystem till den 2 december 2027 och den 2 augusti 2028.",
      "Överträdelser av artikel 50 kan leda till sanktionsavgifter på upp till 15 miljoner EUR eller 3 % av den globala årsomsättningen, beroende på vilket belopp som är högst.",
    ],
    sections: [
      {
        heading: "Vad artikel 50 kräver för chattbottar",
        blocks: [
          {
            type: "p",
            text: "Artikel 50.1 säger att leverantörer ska se till att AI-system som är avsedda att interagera direkt med fysiska personer utformas och utvecklas så att de berörda personerna informeras om att de interagerar med ett AI-system. Undantaget är när detta är uppenbart för en rimligt välinformerad, uppmärksam och försiktig person, med hänsyn till omständigheterna och användningssammanhanget. Skyldigheten gäller inte AI-system som enligt lag får användas för att upptäcka, förebygga, utreda eller lagföra brott, med förbehåll för lämpliga skyddsåtgärder.",
          },
          {
            type: "p",
            text: "Artikel 50.5 reglerar hur och när människor ska informeras. Informationen ska ges på ett tydligt och urskiljbart sätt senast vid tidpunkten för den första interaktionen eller exponeringen, och den ska uppfylla tillämpliga tillgänglighetskrav.",
          },
          {
            type: "p",
            text: "Artikel 50 innehåller även andra transparensskyldigheter. Bara den första i den här listan gäller specifikt chattbottar:",
          },
          {
            type: "ul",
            items: [
              "Artikel 50.1: leverantörer av system som interagerar direkt med människor måste utforma dem så att människor vet att de har att göra med AI.",
              "Artikel 50.2: leverantörer av system som genererar syntetiskt ljud, bilder, video eller text måste märka utdata i ett maskinläsbart format så att de kan upptäckas som AI-genererade.",
              "Artikel 50.3: tillhandahållare av system för känsloigenkänning eller biometrisk kategorisering måste informera de personer som exponeras för dem.",
              "Artikel 50.4: tillhandahållare måste upplysa om deepfakes och om AI-genererad text som publiceras för att informera allmänheten om frågor av allmänt intresse. För sådan text gäller skyldigheten inte när den har genomgått mänsklig granskning och någon har det redaktionella ansvaret.",
            ],
          },
        ],
      },
      {
        heading: "Leverantör eller tillhandahållare: vem skyldigheten gäller",
        blocks: [
          {
            type: "p",
            text: "Artikel 3.3 definierar en leverantör som en person eller ett organ som utvecklar ett AI-system, eller låter utveckla ett, och släpper ut det på marknaden eller tar det i bruk under eget namn eller varumärke, oavsett om det sker mot betalning eller kostnadsfritt. Artikel 3.4 definierar en tillhandahållare (deployer) som den som använder ett AI-system under sin behörighet, utom vid personlig, icke-yrkesmässig användning.",
          },
          {
            type: "p",
            text: "Upplysningen om chattbottar i artikel 50.1 är en skyldighet för leverantören. Märkningsskyldigheterna i artikel 50.3 och 50.4 är skyldigheter för tillhandahållaren. Om ditt företag bygger en supportassistent och driver den under eget varumärke, läs båda definitionerna noga mot hur systemet byggdes och vem som ställer det framför kunderna.",
          },
        ],
      },
      {
        heading: "Hur upplysningsskyldigheten gäller supportautomatisering",
        blocks: [
          {
            type: "p",
            text: "Kommissionens FAQ om artikel 50 säger att dess riktlinjer ställer upp fyra kumulativa kriterier för interaktionsskyldigheten: systemet är ett AI-system, det är byggt för ett verkligt dubbelriktat utbyte, det kommunicerar direkt i stället för via en mänsklig mellanhand, och det interagerar med fysiska personer. Enligt FAQ:n faller system som bara arbetar i bakgrunden, via kommunikation mellan maskiner eller utan direkt kontakt med människor, utanför den här skyldigheten. Där står också att undantaget för det ”uppenbara” ska tolkas restriktivt.",
          },
          {
            type: "table",
            caption: "Frågor att ställa om vanliga supportupplägg, utifrån kommissionens kriterier",
            head: ["Upplägg", "Vad du ska kontrollera mot kriterierna"],
            rows: [
              [
                "AI-chattbot på din webbplats, i WhatsApp eller Messenger",
                "Utbyter den meddelanden direkt med kunder? Planera i så fall en upplysning vid eller före det första meddelandet.",
              ],
              [
                "AI-röstbot som svarar i telefon",
                "Samma fråga för talade samtal. Artikel 50.5 hänvisar också till tillgänglighetskrav.",
              ],
              [
                "AI som klassificerar och routar ärenden",
                "Arbetar den bara i bakgrunden utan direkt kontakt med kunder? FAQ:n placerar sådana system utanför interaktionsskyldigheten.",
              ],
              [
                "AI som skriver utkast till svar som en agent granskar och skickar",
                "Kommunicerar den direkt med kunden, eller via en mänsklig mellanhand? Kontrollera detta mot riktlinjerna.",
              ],
            ],
          },
          {
            type: "p",
            text: "I praktiken inleder många team varje AI-konversation med en kort rad som ”Du chattar med en AI-assistent. Skriv 'agent' för att nå en person.” Det är ett designval. Om det räcker för ditt system är en fråga för riktlinjerna och din rådgivare.",
          },
        ],
      },
      {
        heading: "Viktiga datum, inklusive Digital Omnibus 2026",
        blocks: [
          {
            type: "p",
            text: "Artikel 113 fastställer AI-förordningens tidslinje. I november 2025 föreslog kommissionen ändringar i delar av den i en Digital Omnibus on AI (COM(2025) 836, daterad den 19 november 2025). Förslaget har sedan dess antagits: efter en politisk överenskommelse den 7 maj 2026 och ett formellt antagande publicerades det som förordning (EU) 2026/1744. Enligt kommissionen trädde den i kraft den 27 juli 2026. Tabellen visar de antagna datumen.",
          },
          {
            type: "table",
            caption: "Tillämpningsdatum för AI-förordningen (officiella texter kontrollerade den 19 oktober 2026)",
            head: ["Datum", "Vad som börjar gälla", "Rättslig grund"],
            rows: [
              ["1 augusti 2024", "AI-förordningen träder i kraft", "Artikel 113, förordning (EU) 2024/1689"],
              ["2 februari 2025", "Kapitel I och II tillämpas, inklusive AI-kunnighet och de förbjudna metoderna", "Artikel 113 a"],
              ["2 augusti 2025", "Regler om anmälda organ, AI-modeller för allmänna ändamål, styrning och sanktioner tillämpas (utom artikel 101)", "Artikel 113 b"],
              ["2 augusti 2026", "Allmän tillämpning, inklusive transparensskyldigheterna i artikel 50", "Artikel 113; kommissionens FAQ om artikel 50"],
              ["2 december 2026", "Tidsfrist för märkning enligt artikel 50.2 för generativa AI-system som släppts ut på marknaden före den 2 augusti 2026; nytt förbud mot AI som genererar intimt innehåll utan samtycke eller material med sexuella övergrepp mot barn", "Förordning (EU) 2026/1744 (antagen)"],
              ["2 december 2027", "Högriskregler för system som klassificeras enligt artikel 6.2 och bilaga III", "Förordning (EU) 2026/1744 (antagen)"],
              ["2 augusti 2028", "Högriskregler för system som klassificeras enligt artikel 6.1 och bilaga I (produkter)", "Förordning (EU) 2026/1744 (antagen); ersätter det ursprungliga datumet 2 augusti 2027"],
            ],
          },
          {
            type: "p",
            text: "En skillnad mellan förslaget och den antagna texten påverkar generativ AI. Kommissionens förslag skulle ha gett leverantörer av generativa system som redan finns på marknaden en övergångsperiod på sex månader för märkning enligt artikel 50.2. Den antagna förordningen sätter tidsfristen till den 2 december 2026. Enligt kommissionens FAQ gäller upplysningen om chattbottar i artikel 50.1 fortfarande från den 2 augusti 2026.",
          },
        ],
      },
      {
        heading: "Sanktioner och officiell vägledning",
        blocks: [
          {
            type: "p",
            text: "Enligt artikel 99.4 kan överträdelser av skyldigheterna i artikel 50 leda till administrativa sanktionsavgifter på upp till 15 000 000 EUR eller, för ett företag, upp till 3 % av dess totala globala årsomsättning under föregående räkenskapsår, beroende på vilket belopp som är högst. För små och medelstora företag, inklusive uppstartsföretag, tillämpar artikel 99 det lägre av de två beloppen.",
          },
          {
            type: "p",
            text: "Den 20 juli 2026 publicerade kommissionen riktlinjer om transparensskyldigheterna i artikel 50. En separat, frivillig uppförandekod för transparens i AI-genererat innehåll (Code of Practice on Transparency of AI-generated Content) omfattar artikel 50.2, 50.4 och 50.5. Kommissionen säger att det inte innebär bristande efterlevnad att låta bli att underteckna den. För chattbotskyldigheten i artikel 50.1 säger FAQ:n att leverantörer och tillhandahållare själva kan besluta om lämpliga åtgärder, med hänsyn till riktlinjerna.",
          },
          {
            type: "note",
            text: "Detta är inte juridisk rådgivning. Den här sidan beskriver vad AI-förordningen, Digital Omnibus och kommissionens vägledning säger per den 19 oktober 2026. För beslut om dina egna system, läs de officiella texterna på EUR-Lex och tala med en kvalificerad jurist.",
          },
        ],
      },
      {
        heading: "Så bygger du in upplysningen i en supportbot",
        blocks: [
          {
            type: "ul",
            items: [
              "Lägg AI-upplysningen i det första meddelandet eller i röstbotens hälsning, inte bara i dina användarvillkor.",
              "Gör upplysningen läsbar för skärmläsare och tydlig i röstkanalen, eftersom artikel 50.5 nämner tillgänglighet.",
              "Ge kunderna ett synligt sätt att nå en person, och skicka med konversationshistoriken så att de inte behöver upprepa sig.",
              "Spara en logg över upplysningstexten och när du ändrade den, så att du kan visa vad kunderna såg.",
            ],
          },
          {
            type: "p",
            text: "TascaLab bygger chatt- och röstbottar ovanpå de verktyg du redan använder (Zendesk, Freshdesk, Jira, Slack och interna verktyg). Projekt med Standard Chat Bot kostar {{price:standard}} och projekt med Voice Bot {{price:voice}}. Båda inkluderar grundläggande dokumentation och 30 dagars support efter lansering.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Måste jag berätta för kunderna att de pratar med en chattbot?",
        a: "Artikel 50.1 i AI-förordningen kräver att leverantörer utformar AI-system som interagerar direkt med människor så att de informeras om att de interagerar med ett AI-system, om det inte är uppenbart av sammanhanget. Kommissionen säger att undantaget för det ”uppenbara” ska tolkas restriktivt.",
      },
      {
        q: "När börjar AI-förordningens regler för chattbottar gälla?",
        a: "Artikel 50 tillämpas från den 2 augusti 2026. Kommissionens FAQ ger en övergångsperiod till den 2 december 2026 bara för märkning enligt artikel 50.2 för generativa system som redan finns på marknaden.",
      },
      {
        q: "Försenade Digital Omnibus AI-förordningen?",
        a: "Delvis. Förordning (EU) 2026/1744, som enligt kommissionen är i kraft sedan den 27 juli 2026, flyttade högriskskyldigheterna till den 2 december 2027 (bilaga III) och den 2 augusti 2028 (produkter enligt bilaga I). Den flyttade inte datumet 2 augusti 2026 för artikel 50.",
      },
      {
        q: "Behöver en AI-baserad ärenderouter en AI-upplysning?",
        a: "Kommissionens FAQ säger att system som bara arbetar i bakgrunden, via kommunikation mellan maskiner eller utan direkt kontakt med människor, faller utanför interaktionsskyldigheten i artikel 50.1. Kontrollera ditt eget upplägg mot kommissionens riktlinjer.",
      },
      {
        q: "Vilka sanktionsavgifter gäller vid överträdelse av artikel 50?",
        a: "Enligt artikel 99.4 upp till 15 miljoner EUR eller 3 % av den totala globala årsomsättningen, beroende på vilket belopp som är högst. För små och medelstora företag, inklusive uppstartsföretag, gäller det lägre av de två beloppen.",
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
    slug: "gdpr-automatisering-kundtjanst",
    category: "guides",
    navLabel: "GDPR och supportautomatisering",
    primaryKeyword: "GDPR automatisering kundtjänst",
    title: "GDPR och automatisering av kundtjänst: en praktisk guide",
    description:
      "GDPR och automatisering av kundtjänst: rättslig grund, uppgiftsminimering, lagringstid och biträdesavtal för chattbottar och arbetsflöden i helpdesken.",
    h1: "GDPR och automatisering av kundtjänst: en praktisk guide",
    intro:
      "GDPR (dataskyddsförordningen) gäller för supportautomatisering precis som för all annan behandling av personuppgifter. Du behöver en rättslig grund enligt artikel 6, du behandlar bara det du behöver (artikel 5.1 c) och sparar det bara så länge du behöver det (artikel 5.1 e), och leverantörer som behandlar uppgifter åt dig behöver ett avtal enligt artikel 28. För chattbottar och arbetsflöden i helpdesken handlar det mesta om designval: vilka fält du skickar, vart de tar vägen och hur länge loggarna sparas.",
    keyFacts: [
      "Artikel 5.1 c: personuppgifter ska vara adekvata, relevanta och begränsade till vad som är nödvändigt för ändamålen.",
      "Artikel 6.1 räknar upp sex rättsliga grunder. EU-domstolen betraktar listan som uttömmande.",
      "Artikel 28.3 kräver ett bindande avtal med varje personuppgiftsbiträde, bland annat om att biträdet bara agerar enligt dina dokumenterade instruktioner.",
      "EDPB säger att kontrollen av att ett personuppgiftsbiträde ger tillräckliga garantier är en löpande skyldighet, inte en engångsåtgärd.",
      "Make låter dig välja ett datacenter i USA eller EU när du skapar en organisation. Det går inte att ändra senare.",
    ],
    sections: [
      {
        heading: "Där personuppgifter förekommer i supportautomatisering",
        blocks: [
          {
            type: "p",
            text: "En supportautomatisering berör personuppgifter på flera ställen, ofta fler än teamet inser. Att kartlägga dem är det första praktiska steget, eftersom varje ställe är en punkt där uppgiftsminimering, lagringstid och leverantörsavtal spelar in.",
          },
          {
            type: "ul",
            items: [
              "Transkript från chatt och mejl: namn, mejladresser, telefonnummer, ordernummer och allt annat som kunderna skriver.",
              "Ärendefält och bilagor i helpdesken som en automatisering läser eller kopierar till ett annat verktyg.",
              "Prompter och svar som skickas till en AI-modell, om din bot använder en sådan.",
              "Körloggar i din automatiseringsplattform, som kan lagra de data som varje steg tog emot.",
              "Aviseringar som postas i Slack eller andra interna verktyg.",
            ],
          },
        ],
      },
      {
        heading: "De GDPR-artiklar som betyder mest för en supportbot",
        blocks: [
          {
            type: "table",
            caption: "GDPR-artiklar och deras praktiska betydelse för supportautomatisering",
            head: ["Artikel", "Vad texten säger", "Vad det betyder för en supportbot"],
            rows: [
              [
                "Art. 5.1 c: uppgiftsminimering",
                "Personuppgifter ska vara adekvata, relevanta och begränsade till vad som är nödvändigt i förhållande till ändamålen.",
                "Skicka bara de fält som varje steg behöver. Att maskera identifierare innan text skickas till en AI-modell är ett sätt att göra det.",
              ],
              [
                "Art. 5.1 e: lagringsminimering",
                "Uppgifter förvaras i en form som gör det möjligt att identifiera personer under en tid som inte är längre än nödvändigt för ändamålen, med undantag för arkivering, forskning och statistik med skyddsåtgärder enligt artikel 89.1.",
                "Bestäm lagringstider för chattloggar, ärendeexporter och automatiseringens körloggar.",
              ],
              [
                "Art. 6.1: laglighet",
                "Behandlingen är laglig endast om minst en av sex grunder är tillämplig: samtycke, avtal, rättslig förpliktelse, grundläggande intressen, uppgift av allmänt intresse eller berättigat intresse.",
                "Dokumentera vilken grund som täcker varje ändamål, till exempel att besvara en förfrågan jämfört med att analysera transkript.",
              ],
              [
                "Art. 28: personuppgiftsbiträden",
                "Anlita bara biträden som ger tillräckliga garantier, under ett bindande avtal som beskriver behandlingen och kräver att de agerar enligt dina dokumenterade instruktioner.",
                "Ha ett avtal med varje leverantör i kedjan: helpdesk, automatiseringsplattform, AI-leverantör och hosting.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Rättslig grund: bestäm per ändamål",
        blocks: [
          {
            type: "p",
            text: "Artikel 6.1 räknar upp sex rättsliga grunder: samtycke, avtal, rättslig förpliktelse, grundläggande intressen, uppgift av allmänt intresse och berättigat intresse. EU-domstolen har beskrivit listan som uttömmande och begränsande, så behandlingen måste passa in under minst en av dem.",
          },
          {
            type: "p",
            text: "Två grunder förekommer oftast i supportarbete. Avtalsgrunden omfattar behandling som är nödvändig för att fullgöra ett avtal med personen, eller för att vidta åtgärder som personen begärt innan ett avtal ingås. I mål C-621/22 slog EU-domstolen fast att berättigat intresse kräver tre kumulativa villkor: den personuppgiftsansvarige eller en tredje part har ett berättigat intresse, behandlingen är nödvändig för det intresset, och personens intressen eller grundläggande rättigheter väger inte tyngre. Offentliga myndigheter kan inte åberopa berättigat intresse för behandling som sker när de utför sina uppgifter.",
          },
          {
            type: "p",
            text: "I praktiken bör du lista varje ändamål separat. Att besvara kundens fråga, utbilda personal med hjälp av gamla transkript och ta fram rapporter är olika ändamål, och vart och ett behöver en egen grund.",
          },
        ],
      },
      {
        heading: "Personuppgiftsbiträden och avtal enligt artikel 28",
        blocks: [
          {
            type: "p",
            text: "Enligt artikel 28.1 får du bara anlita personuppgiftsbiträden som ger tillräckliga garantier om att genomföra lämpliga tekniska och organisatoriska åtgärder. Artikel 28.3 kräver ett avtal eller en annan rättsakt som anger föremålet för behandlingen, varaktigheten, behandlingens art och ändamål, typen av personuppgifter och kategorierna av registrerade. Det ska också framgå att biträdet bara agerar enligt dina dokumenterade instruktioner, även när det gäller överföringar av personuppgifter till tredjeland. Enligt artikel 28.4 måste ett biträde som anlitar ett underbiträde föra över samma dataskyddsskyldigheter genom avtal, och det ursprungliga biträdet förblir fullt ansvarigt gentemot dig.",
          },
          {
            type: "ul",
            items: [
              "EDPB:s riktlinjer 07/2020: att kontrollera ett biträdes garantier är en löpande skyldighet, med revisioner och inspektioner där det är lämpligt. Instruktioner kan anges i en bilaga till avtalet eller i annan skriftlig form, till exempel mejl, så länge du sparar dokumentationen. En allmän lista över underbiträden som kan uppdateras då och då räcker inte. Biträdet bör aktivt informera dig om ändringar.",
              "EDPB:s yttrande 22/2024: skyldigheten att kontrollera att biträden och underbiträden ger tillräckliga garantier gäller oavsett risknivå, även om hur ingående kontrollerna är kan variera. Det slutliga beslutet om, och ansvaret för, att anlita ett visst underbiträde ligger kvar hos den personuppgiftsansvarige.",
            ],
          },
          {
            type: "p",
            text: "En typisk supportkedja kan omfatta en helpdesk, en automatiseringsplattform, en leverantör av AI-modeller och ett chattverktyg. Skriv ned vilka leverantörer som behandlar personuppgifter för din räkning, kontrollera var och ens villkor för personuppgiftsbehandling och lista över underbiträden, och spara dem.",
          },
        ],
      },
      {
        heading: "Hosting, dataplacering och inställningar för lagringstid",
        blocks: [
          {
            type: "p",
            text: "Var din automatisering körs avgör var dess data lagras. Make erbjuder två platser för datacenter, USA och Europeiska unionen. Du väljer en när du skapar en organisation, den kan inte ändras senare, och den avgör var dina data lagras och behandlas. Om du hostar n8n själv styr dess inställningar för executions hur mycket körningsdata som sparas. Det dokumenterade standardvärdet är högst 10 000 sparade executions, och 0 betyder ingen gräns.",
          },
          {
            type: "p",
            text: "Eftersom artikel 28.3 omfattar instruktioner om överföringar till tredjeland bör du kontrollera i varje leverantörs villkor var uppgifterna behandlas. Ställ in lagringstid i varje verktyg som sparar en kopia av uppgifterna, inte bara i din helpdesk.",
          },
        ],
      },
      {
        heading: "Praktiska designval för GDPR-medveten automatisering",
        blocks: [
          {
            type: "ul",
            items: [
              "Skicka ärende-ID:n och de fält som ett steg behöver i stället för hela kundposter.",
              "Maskera mejladresser, telefonnummer och betalningsuppgifter innan text skickas till en AI-modell. Maskerad text kan fortfarande innehålla personuppgifter, så hantera den med samma omsorg.",
              "Rensa automatiseringens körloggar och stäng av loggning av hela payloads där du inte behöver den.",
              "Bygg ett sätt att hitta, exportera eller radera en enskild kunds uppgifter i boten, helpdesken och loggarna, så att enskilda förfrågningar inte kräver manuell sökning.",
              "Skicka känsliga ärenden eller ärenden med stor påverkan till en mänsklig agent i stället för att låta boten avgöra.",
              "Kom ihåg att chattbottar även omfattas av AI-förordningens separata transparensregler.",
            ],
          },
          {
            type: "note",
            text: "Detta är inte juridisk rådgivning. Den här sidan beskriver vad GDPR-texten och EDPB:s vägledning säger, plus vanlig teknisk praxis. För beslut om din egen behandling, tala med ditt dataskyddsombud eller en kvalificerad jurist.",
          },
          {
            type: "p",
            text: "TascaLab bygger automatiseringar ovanpå Zendesk, Freshdesk, Jira, Slack och interna verktyg, med API:er, webhooks, Make och n8n. Varje projekt inkluderar grundläggande dokumentation av det som byggts, vilket hjälper när du kartlägger dataflöden, plus 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vilken rättslig grund enligt GDPR gäller för en supportchattbot?",
        a: "GDPR pekar inte ut någon. Artikel 6.1 räknar upp sex grunder, bland annat avtal och berättigat intresse, och du väljer och dokumenterar den som passar varje ändamål. EU-domstolen betraktar listan som uttömmande.",
      },
      {
        q: "Behöver jag ett personuppgiftsbiträdesavtal med min automatiseringsplattform?",
        a: "Artikel 28.3 kräver att behandling som utförs av ett personuppgiftsbiträde regleras av ett avtal eller en annan rättsakt som bland annat omfattar föremålet för behandlingen, varaktigheten, behandlingens art och ändamål. Om en leverantör behandlar personuppgifter för din räkning, kontrollera att sådana villkor finns.",
      },
      {
        q: "Får jag skicka kundmeddelanden till en AI-modell?",
        a: "Samma GDPR-principer gäller som för all annan behandling: en rättslig grund, uppgiftsminimering och ett biträdesavtal när leverantören behandlar uppgifter åt dig. Att maskera identifierare innan du skickar texten är ett praktiskt sätt att minska det du delar.",
      },
      {
        q: "Hur länge får jag spara chattranskript?",
        a: "Artikel 5.1 e säger att personuppgifter inte ska förvaras i en form som gör det möjligt att identifiera personer längre än vad som är nödvändigt för ändamålen. Texten anger inget fast antal dagar, så du bestämmer en lagringstid för varje ändamål.",
      },
      {
        q: "Var lagrar Make mina data?",
        a: "Make har datacenter i USA och EU. Du väljer ett när du skapar en organisation, och det kan inte ändras i efterhand.",
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
    slug: "tillganglighetsdirektivet-kundtjanst",
    category: "guides",
    navLabel: "Tillgänglighetsdirektivet (EAA)",
    primaryKeyword: "tillgänglighetsdirektivet kundtjänst",
    title: "Tillgänglighetsdirektivet (EAA): regler för kundtjänst",
    description:
      "Tillgänglighetsdirektivet (EAA) och kundtjänst: vilka tjänster som omfattas, viktiga datum, undantaget för mikroföretag och vad bilaga I kräver av supporten.",
    h1: "Tillgänglighetsdirektivet och kundtjänst: det här behöver supportteam veta",
    intro:
      "Det europeiska tillgänglighetsdirektivet (European Accessibility Act, direktiv (EU) 2019/882) har sedan den 28 juni 2025 tillämpats på en lista över konsumenttjänster som omfattar e-handel, banktjänster för konsumenter, e-böcker och elektronisk kommunikation. För tjänster som omfattas kräver bilaga I att webbplatser och mobilappar är tillgängliga och att supporttjänster som helpdesk och callcenter, där sådana finns, ger information om tjänstens tillgänglighet i tillgängliga kommunikationsformer. Mikroföretag som tillhandahåller tjänster är undantagna.",
    keyFacts: [
      "Artikel 31: medlemsstaterna skulle anta sina nationella lagar senast den 28 juni 2022 och tillämpa dem från den 28 juni 2025.",
      "Artikel 2.2 omfattar tjänster till konsumenter, till exempel elektronisk kommunikation, banktjänster för konsumenter, e-böcker och e-handel.",
      "Artikel 4.5 undantar mikroföretag som tillhandahåller tjänster; artikel 3.23 definierar dem som företag med färre än 10 personer och en omsättning eller balansomslutning på högst 2 miljoner EUR.",
      "Bilaga I, avsnitt III: där sådana finns ska supporttjänster ge information om tjänstens tillgänglighet i tillgängliga kommunikationsformer.",
      "EN 301 549 V4.1.1 antogs i augusti 2026, men AccessibleEU säger att den ännu inte är den rättsliga referensen för efterlevnad av EAA.",
    ],
    sections: [
      {
        heading: "Vilka tjänster tillgänglighetsdirektivet omfattar",
        blocks: [
          {
            type: "p",
            text: "Direktiv (EU) 2019/882, känt som tillgänglighetsdirektivet, European Accessibility Act eller EAA, fastställer tillgänglighetskrav för en lista över produkter i artikel 2.1 och en lista över tjänster i artikel 2.2. Den här sidan fokuserar på tjänster, eftersom det är där kundsupporten hör hemma. Artikel 2.2 gäller följande tjänster som tillhandahålls konsumenter efter den 28 juni 2025.",
          },
          {
            type: "table",
            caption: "Tjänster som anges i artikel 2.2 i direktiv (EU) 2019/882",
            head: ["Artikel 2.2", "Tjänst", "Kontaktpunkter i supporten som är värda att granska"],
            rows: [
              ["a)", "Elektroniska kommunikationstjänster, utom överföringstjänster som används för maskin-till-maskin-tjänster", "Hjälpsidor, livechatt och kontaktvägar för abonnenter"],
              ["b)", "Tjänster som ger tillgång till audiovisuella medietjänster", "Hjälp i appen och supportchatt"],
              ["c)", "Vissa delar av persontransporttjänster med flyg, buss, järnväg och fartyg", "Bokningshjälp, reseinformation och chatt på webbplatsen eller i appen"],
              ["d)", "Banktjänster för konsumenter", "Chatt- och röstbottar som besvarar frågor om konton eller kort"],
              ["e)", "E-böcker och tillhörande programvara", "Helpdesk för läsappar och köp"],
              ["f)", "E-handelstjänster", "Chattwidget i butiken, bot för orderstatus, returflöde"],
            ],
          },
          {
            type: "p",
            text: "Direktivet definierar e-handelstjänster som tjänster som tillhandahålls på distans, via webbplatser och tjänster för mobila enheter, på elektronisk väg och på individuell begäran av en konsument i syfte att ingå ett konsumentavtal. Direktivets skäl tillägger att skyldigheterna för e-handel omfattar onlineförsäljning av alla produkter och tjänster. Den tredje kolumnen i tabellen är ett förslag till checklista, inte en beskrivning av vad lagen kräver av ditt företag.",
          },
        ],
      },
      {
        heading: "Viktiga datum och övergångsperioder",
        blocks: [
          {
            type: "p",
            text: "EAA är ett direktiv, så det når företagen via nationella lagar. Artikel 31 krävde att medlemsstaterna antog och offentliggjorde de lagarna senast den 28 juni 2022 och tillämpade dem från den 28 juni 2025. Artikel 32 lägger till vissa övergångsperioder.",
          },
          {
            type: "table",
            caption: "EAA-datum för tjänster (direktiv (EU) 2019/882)",
            head: ["Datum", "Vad det innebär", "Artikel"],
            rows: [
              ["28 juni 2022", "Sista dag för medlemsstaterna att anta och offentliggöra de nationella lagar som införlivar direktivet", "Artikel 31"],
              ["28 juni 2025", "De nationella åtgärderna börjar tillämpas. Artikel 2.2 omfattar tjänster som tillhandahålls konsumenter efter detta datum", "Artiklarna 2.2 och 31"],
              ["Upp till 5 år från 28 juni 2025", "Tjänsteavtal som ingåtts före den 28 juni 2025 får fortsätta utan ändringar tills de löper ut", "Artikel 32"],
              ["28 juni 2030", "Slut på perioden då tjänsteleverantörer får fortsätta tillhandahålla tjänster med produkter som de redan lagligen använde för liknande tjänster", "Artikel 32"],
              ["Upp till 20 år i drift", "Medlemsstaterna får låta självbetjäningsterminaler som användes före den 28 juni 2025 vara i drift till slutet av sin livslängd, dock högst 20 år efter att de togs i drift", "Artikel 32"],
            ],
          },
          {
            type: "p",
            text: "Eftersom varje medlemsstat skriver sin egen lag skiljer sig de nationella texterna och de myndigheter som övervakar efterlevnaden mellan länderna. Kommissionen säger att den övervakar att direktivet införlivas fullständigt och korrekt. Om du har kunder i flera EU-länder, kontrollera den nationella lagen i vart och ett.",
          },
        ],
      },
      {
        heading: "Undantaget för mikroföretag och andra begränsningar",
        blocks: [
          {
            type: "p",
            text: "Artikel 3.23 definierar ett mikroföretag som ett företag som sysselsätter färre än 10 personer och som har en årsomsättning som inte överstiger 2 miljoner EUR eller en balansomslutning som inte överstiger 2 miljoner EUR per år. Enligt artikel 4.5 är mikroföretag som tillhandahåller tjänster undantagna från tillgänglighetskraven i artikel 4.3 och från skyldigheterna som rör efterlevnaden av dem. Skälen förklarar att det i sig skulle vara en oproportionerlig börda att kräva att dessa företag gör en bedömning. Direktivet uppmuntrar ändå mikroföretag att tillhandahålla tjänster som uppfyller kraven.",
          },
          {
            type: "p",
            text: "Undantaget gäller bara tjänster. Mikroföretag som hanterar produkter behandlas annorlunda och är inte helt undantagna.",
          },
          {
            type: "p",
            text: "För alla andra säger artikel 14 att tillgänglighetskraven bara gäller i den mån efterlevnaden inte kräver en betydande ändring som i grunden förändrar tjänstens grundläggande karaktär, och inte medför en oproportionerlig börda. Ett företag som åberopar detta måste göra en bedömning utifrån kriterierna i bilaga VI. Tjänsteleverantörer måste förnya bedömningen när tjänsten ändras, när en myndighet begär det och minst vart femte år. Skälen tillägger att brist på prioritet, tid eller kunskap inte bör betraktas som legitima skäl.",
          },
        ],
      },
      {
        heading: "Vad bilaga I säger om kundsupport",
        blocks: [
          {
            type: "p",
            text: "Artikel 4.3 säger att alla tjänster, utom stads- och förortstrafik samt regional trafik, ska uppfylla avsnitt III i bilaga I, som fastställer allmänna tillgänglighetskrav för tjänster. Avsnitt IV lägger till krav för specifika tjänster, till exempel banktjänster för konsumenter och e-handel. Tre punkter i avsnitt III är viktigast för supportteam:",
          },
          {
            type: "ul",
            items: [
              "Punkt a: de produkter som används för att tillhandahålla tjänsten ska vara tillgängliga.",
              "Punkt c: webbplatser, inklusive tillhörande onlineapplikationer, och tjänster för mobila enheter, inklusive mobilappar, ska göras tillgängliga på ett konsekvent och adekvat sätt genom att de görs möjliga att uppfatta, hanterbara, begripliga och robusta.",
              "Punkt d: där sådana finns ska supporttjänster (helpdesk, callcenter, teknisk support, förmedlingstjänster och utbildningstjänster) ge information om tjänstens tillgänglighet och dess kompatibilitet med hjälpmedelsteknik, i tillgängliga kommunikationsformer.",
            ],
          },
          {
            type: "p",
            text: "Artikel 13 lägger till en transparensskyldighet. Tjänsteleverantörer tar fram information, i enlighet med bilaga V, som förklarar hur tjänsten uppfyller tillgänglighetskraven, och gör den tillgänglig för allmänheten i skriftlig och muntlig form, även på ett sätt som är tillgängligt för personer med funktionsnedsättning. AccessibleEU:s vägledning tillägger att informationen ska finnas kvar så länge tjänsten är i drift.",
          },
          {
            type: "p",
            text: "En chattwidget eller supportbot som körs på din webbplats eller i din app är en del av det gränssnitt kunderna använder, så det är rimligt att pröva den mot samma krav på att vara möjlig att uppfatta, hanterbar, begriplig och robust. Din helpdesk, bemannad av människor eller bottar, bör också vara redo att besvara frågor om tjänstens tillgänglighet.",
          },
        ],
      },
      {
        heading: "Praktisk vägledning för chattwidgetar och supportbottar",
        blocks: [
          {
            type: "p",
            text: "Direktivet räknar inte upp tekniska kontroller för en chattwidget. Punkterna nedan är vanlig teknisk praxis som motsvarar principerna i bilaga I. Testa dem med verkliga hjälpmedel, till exempel skärmläsare och navigering med enbart tangentbord.",
          },
          {
            type: "ul",
            items: [
              "Se till att chattknappen, meddelandefältet, knappar och snabbsvar går att använda med enbart tangentbord, med en synlig fokusmarkering.",
              "Ge varje kontroll en textetikett som skärmläsare läser upp, och läs upp nya meddelanden utan att flytta användarens fokus.",
              "Låt inte färg, ikoner eller bilder ensamma bära betydelse. Ge bilder och kort textalternativ.",
              "Undvik korta tidsgränser för inaktivitet som stänger chatten, eller varna innan den stängs och låt kunden fortsätta.",
              "Håll botens svar korta och enkla, och ge kunderna ett enkelt sätt att nå en person, med konversationshistoriken vidareskickad.",
              "Lär boten och dina agenter att besvara frågor om tjänstens tillgänglighet och att hänvisa till din information enligt artikel 13.",
              "Erbjud mer än en kontaktkanal, till exempel chatt och mejl, och ge den som ringer en röstbot ett textbaserat alternativ.",
            ],
          },
          {
            type: "p",
            text: "För tekniska detaljer, se EN 301 549, den europeiska standarden för tillgänglighetskrav för IKT-produkter och IKT-tjänster. Kommissionens genomförandebeslut (EU) 2021/1339 hänvisar till EN 301 549 V3.2.1 som harmoniserad standard enligt webbtillgänglighetsdirektivet, som omfattar offentliga sektorns webbplatser och appar. ETSI antog EN 301 549 V4.1.1 den 24 augusti 2026. Den går över till WCAG 2.2 och lägger till en bilaga som kopplar dess krav till EAA. AccessibleEU säger att V4.1.1 ännu inte är den rättsliga referensen för att visa efterlevnad av EAA eller webbtillgänglighetsdirektivet, och att referensen förblir V3.2.1, baserad på WCAG 2.1 nivå AA, tills kommissionen hänvisar till V4.1.1 i Europeiska unionens officiella tidning.",
          },
          {
            type: "note",
            text: "Detta är inte juridisk rådgivning. Den här sidan sammanfattar direktiv (EU) 2019/882 och officiell vägledning från EU, kontrollerad den 19 oktober 2026. Om din tjänst omfattas, och vad du måste göra, beror på den nationella lag som gäller för dig. För beslut om din egen tjänst, läs de officiella texterna och tala med en kvalificerad jurist.",
          },
          {
            type: "p",
            text: "TascaLab bygger chatt- och röstbottar ovanpå de verktyg du redan använder, till exempel Zendesk, Freshdesk, Jira och Slack. Projekt med Standard Chat Bot kostar {{price:standard}} och projekt med Voice Bot {{price:voice}}. Båda inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "När började tillgänglighetsdirektivet att tillämpas?",
        a: "Artikel 31 krävde att medlemsstaterna antog sina nationella lagar senast den 28 juni 2022 och tillämpade dem från den 28 juni 2025. Artikel 2.2 omfattar tjänster som tillhandahålls konsumenter efter den 28 juni 2025.",
      },
      {
        q: "Är små företag undantagna från tillgänglighetsdirektivet?",
        a: "Mikroföretag som tillhandahåller tjänster är undantagna enligt artikel 4.5. Artikel 3.23 definierar ett mikroföretag som ett företag med färre än 10 personer och en årsomsättning eller balansomslutning på högst 2 miljoner EUR. Undantaget omfattar inte fullt ut mikroföretag som hanterar produkter.",
      },
      {
        q: "Omfattar tillgänglighetsdirektivet kundsupport?",
        a: "Bilaga I, avsnitt III, punkt d säger att supporttjänster som helpdesk, callcenter, teknisk support, förmedlingstjänster och utbildningstjänster, där sådana finns, ska ge information om tjänstens tillgänglighet och dess kompatibilitet med hjälpmedelsteknik, i tillgängliga kommunikationsformer.",
      },
      {
        q: "Är EN 301 549 den harmoniserade standarden för EAA?",
        a: "EN 301 549 V4.1.1, som antogs den 24 augusti 2026, lägger till en bilaga som kopplar dess krav till EAA. AccessibleEU säger att den ännu inte är den rättsliga referensen för efterlevnad av EAA förrän kommissionen hänvisar till den i Europeiska unionens officiella tidning, och att referensen fram till dess förblir V3.2.1.",
      },
      {
        q: "Måste tjänsteavtal som tecknats före juni 2025 ändras?",
        a: "Artikel 32 låter tjänsteavtal som ingåtts före den 28 juni 2025 fortsätta utan ändringar tills de löper ut, dock inte längre än fem år från det datumet.",
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
    slug: "n8n-zendesk-integration-guide",
    category: "guides",
    navLabel: "n8n Zendesk-integration",
    primaryKeyword: "n8n Zendesk-integration",
    title: "n8n Zendesk-integration: noder, triggers och webhooks",
    description:
      "Guide till n8n Zendesk-integration: Zendesk-nodens operationer, Zendesk Trigger, API-token eller OAuth2, webhooks, anropsgränser och ett exempelarbetsflöde.",
    h1: "n8n Zendesk-integration: noder, inloggningsuppgifter och exempelarbetsflöden",
    intro:
      "n8n kopplas till Zendesk via två inbyggda noder. Zendesk-noden arbetar med ärenden, ärendefält, användare och organisationer, och Zendesk Trigger-noden startar ett arbetsflöde när något händer i Zendesk. Båda använder samma inloggningsuppgifter (credential), en API-token eller OAuth2. Om du hellre vill behålla reglerna i Zendesk kan du i stället rikta en Zendesk-webhook mot en Webhook-nod i n8n och utlösa den från en trigger i Zendesk.",
    keyFacts: [
      "Zendesk-noden i n8n har fyra resurser: Ticket, Ticket Field, User och Organization.",
      "Om du sätter taggar med nodens operation Update Ticket ersätts hela tagglistan. Taggar som du utelämnar tas bort.",
      "n8n:s Zendesk-credential stöder en API-token (subdomän, inloggningsmejl och token) eller OAuth2.",
      "Zendesk signerar webhook-anrop med headrarna X-Zendesk-Webhook-Signature och X-Zendesk-Webhook-Signature-Timestamp.",
      "API-gränserna för Zendesk Suite sträcker sig från 200 anrop per minut på Team till 2 500 på Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Vad Zendesk-noden i n8n kan göra",
        blocks: [
          {
            type: "p",
            text: "Zendesk-noden läser eller ändrar data i Zendesk som ett steg i ett arbetsflöde. n8n:s dokumentation grupperar dess operationer efter resurs.",
          },
          {
            type: "table",
            caption: "Zendesk-nodens resurser och operationer (n8n:s dokumentation, kontrollerad i oktober 2026)",
            head: ["Resurs", "Operationer"],
            rows: [
              ["Ticket", "Skapa, radera, hämta ett eller flera, uppdatera och återställa ett avstängt ärende (suspended ticket)"],
              ["Ticket Field", "Hämta ett ärendefält, eller hämta alla system- och anpassade ärendefält"],
              ["User", "Skapa, radera, hämta en eller flera, uppdatera, söka, hämta en användares organisationer och hämta relaterade data"],
              ["Organization", "Skapa, radera, räkna, hämta en eller flera, uppdatera och hämta relaterade data"],
            ],
          },
          {
            type: "p",
            text: "Ett beteende brukar överraska. När du använder Update Ticket och fyller i fältet Tag Names or IDs säger n8n:s dokumentation att hela listan med taggar på ärendet ersätts, så alla taggar som du inte tar med tas bort. Det följer hur Zendesk API hanterar tagguppdateringar som standard. Dokumentationen listar tre sätt att komma runt det: hämta de aktuella taggarna och slå ihop dem med de nya innan du uppdaterar, använd noden HTTP Request med Zendesks egenskap additional_tags, eller anropa ärendets tags-endpoint. De två sista lägger till taggar utan att ta bort befintliga.",
          },
          {
            type: "p",
            text: "Om noden inte stöder en operation du behöver, använd noden HTTP Request, ställ in Authentication på Predefined Credential Type och välj din Zendesk-credential. Anropet återanvänder då samma anslutning som Zendesk-noden.",
          },
        ],
      },
      {
        heading: "Så ställer du in Zendesk-inloggningsuppgifter i n8n",
        blocks: [
          {
            type: "p",
            text: "Noderna Zendesk och Zendesk Trigger använder samma credential, och n8n stöder två sätt att autentisera. Båda kräver din subdomän, som är delen av din Zendesk-URL mellan https:// och .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "API-token: i Zendesk Admin Center öppnar du Apps and integrations och sedan APIs, och aktiverar tokenåtkomst för Zendesk API. Lägg till en token med en beskrivning och kopiera den. I n8n anger du subdomänen, mejladressen du loggar in i Zendesk med och token.",
              "OAuth2: i Zendesk Admin Center skapar du en OAuth-klient under Apps and integrations och sedan APIs. Klistra in n8n:s OAuth-callback-URL i klientens fält för omdirigerings-URL. Kopiera klientens unika identifierare till Client ID i n8n och dess hemlighet till Client Secret, lägg till subdomänen, spara och anslut ditt Zendesk-konto.",
            ],
          },
        ],
      },
      {
        heading: "Zendesk Trigger-nod eller Zendesk-webhook",
        blocks: [
          {
            type: "p",
            text: "Det finns två sätt att starta ett arbetsflöde i n8n från Zendesk. Zendesk Trigger-noden startar ett arbetsflöde när händelser i Zendesk matchar de villkor du anger i noden. I exemplet i n8n:s dokumentation filtrerar den på ärenden med status Open, och arbetsflödet körs när du har aktiverat det.",
          },
          {
            type: "p",
            text: "Alternativet är att bygga kopplingen själv. I Zendesk Admin Center går du till Apps and integrations och sedan Webhooks, skapar en webhook, väljer Trigger or Automation som anslutningsmetod och riktar den mot Production URL för en Webhook-nod i n8n. Lägg sedan till åtgärden Notify webhook i en trigger eller automatisering i Zendesk och skriv payloaden, som inte får överstiga 16 000 tecken. På så sätt ligger villkoren kvar i Zendesks affärsregler och du kan välja exakt vilka fält som ska skickas.",
          },
          {
            type: "table",
            caption: "Två sätt att starta ett arbetsflöde i n8n från Zendesk",
            head: ["Fråga", "Zendesk Trigger-nod", "Zendesk-webhook + Webhook-nod i n8n"],
            rows: [
              ["Var villkoren finns", "I noden, i n8n", "I en trigger eller automatisering i Zendesk med åtgärden Notify webhook"],
              ["Vad n8n tar emot", "De händelsedata som noden tillhandahåller", "Den payload du skriver i triggeråtgärden, upp till 16 000 tecken"],
              ["Zendesk-credential", "Behövs för själva triggern", "Behövs bara för senare steg som anropar Zendesk"],
              ["Testning", "Kör noden i editorn, som i exemplet i n8n:s dokumentation", "Använd Webhook-nodens Test URL, som lyssnar i 120 sekunder, och byt sedan till Production URL"],
            ],
          },
          {
            type: "p",
            text: "Om du använder en webhook, kontrollera att anropen verkligen kommer från Zendesk. Zendesk skickar två headrar, X-Zendesk-Webhook-Signature och X-Zendesk-Webhook-Signature-Timestamp. Signaturen är base64(HMACSHA256(timestamp + body)) skapad med webhookens signeringshemlighet, som du kan visa på webhookens detaljsida eller hämta via API:et. Räkna om den i ditt arbetsflöde och avvisa anrop som inte stämmer. Zendesk säger också att samma åtgärd kan anropa en webhook mer än en gång, så gör arbetsflödet säkert att köra två gånger för samma ärende.",
          },
          {
            type: "p",
            text: "Webhook-noden kan svara direkt, när den sista noden är klar eller via en separat Respond to Webhook-nod. För längre arbetsflöden ger ett direkt svar Zendesk ett snabbt besked medan resten av arbetet fortsätter.",
          },
        ],
      },
      {
        heading: "Exempelarbetsflöde: klassificera nya ärenden och avisera Slack",
        blocks: [
          {
            type: "p",
            text: "Här är ett vanligt mönster, beskrivet steg för steg. Det visar hur noderna hänger ihop. Det är inte ett kundcase från TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: en Zendesk Trigger-nod, eller en Webhook-nod som matas av en trigger i Zendesk som körs när ett ärende skapas. Skicka åtminstone ärende-ID:t.",
              "Hämta: en Zendesk-nod med resursen Ticket hämtar hela ärendet, inklusive ämne, beskrivning och aktuella taggar.",
              "Klassificera: en Text Classifier-nod sorterar texten i kategorier som du definierar, till exempel fakturering, tekniskt problem eller återbetalning. Varje kategori har ett namn och en beskrivning som hjälper modellen. Som standard tas objekt som inte matchar någon kategori bort, så aktivera grenen Other för att fånga upp dem.",
              "Uppdatera: en Zendesk-nod sätter grupp och taggar. Slå först ihop de befintliga taggarna, eller lägg till taggar via noden HTTP Request med additional_tags, så att du inte raderar taggar som agenter har satt.",
              "Avisera: en Slack-nod postar kategorin och en länk till ärendet i teamets kanal.",
              "Hantera fel: skicka misslyckade körningar till ett larm, och vänta och försök igen när Zendesk returnerar ett 429-svar.",
            ],
          },
          {
            type: "p",
            text: "Du kan bygga ut samma mönster. Skicka brådskande ärenden till en separat Slack-kanal, eller slå upp kundens organisation med resursen Organization innan du väljer grupp.",
          },
        ],
      },
      {
        heading: "Anropsgränser och var n8n körs",
        blocks: [
          {
            type: "p",
            text: "Zendesk begränsar API-anrop per minut beroende på plan. Utvecklardokumentationen anger följande standardgränser för API:erna för Support och Help Center:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 anrop per minut.",
              "Suite Growth och Suite Professional: 400 anrop per minut.",
              "Suite Enterprise: 700 anrop per minut.",
              "Suite Enterprise Plus: 2 500 anrop per minut.",
            ],
          },
          {
            type: "p",
            text: "Tillägget High Volume API höjer en kvalificerande plan till 2 500 anrop per minut. Det ersätter planens gräns i stället för att läggas till den, och kräver Suite Growth eller högre (eller Support Professional eller högre) med minst 10 agentlicenser. Över gränsen returnerar Zendesk HTTP 429 med en Retry-After-header som anger hur många sekunder du ska vänta. Vissa endpoints har egna, striktare gränser. Räkna antalet API-anrop som varje körning gör och multiplicera med din högsta ärendevolym. Massjobb, till exempel att i efterhand lägga till taggar på gamla ärenden, slår lättare i gränsen, så dela upp dem i omgångar och lägg in pauser.",
          },
          {
            type: "p",
            text: "n8n körs som n8n Cloud, en hanterad instans som n8n driver åt dig, eller egenhostat på din egen maskin eller infrastruktur. För de flesta egenhostade upplägg rekommenderar dokumentationen Docker, och den rekommenderar n8n Cloud om du inte är van vid att hantera servrar. Oavsett triggermetod måste Zendesk kunna nå din n8n-instans. Om en egenhostad instans ligger bakom en omvänd proxy (reverse proxy), sätt N8N_WEBHOOK_URL till dess publika bas-URL så att n8n visar rätt webhook-URL:er och externa tjänster registrerar dem korrekt. N8N_WEBHOOK_URL ersätter WEBHOOK_URL, som fortfarande fungerar men är utfasad från och med n8n 2.35.0.",
          },
          {
            type: "p",
            text: "TascaLab bygger Zendesk-automatiseringar som den här med n8n, Make, API:er och webhooks, ovanpå de verktyg du redan använder. Projekt med Ticket Routing & Categorization kostar {{price:routing}} och projekt med Custom Automation {{price:custom}}. De flesta upplägg tar 1 till 3 veckor, och varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Har n8n en inbyggd Zendesk-integration?",
        a: "Ja. n8n har en Zendesk-nod för ärenden, ärendefält, användare och organisationer, och en Zendesk Trigger-nod som startar arbetsflöden från händelser i Zendesk. Båda använder samma Zendesk-credential.",
      },
      {
        q: "Varför tar Zendesk-noden i n8n bort mina ärendetaggar?",
        a: "När du fyller i Tag Names or IDs i operationen Update Ticket ersätts hela tagglistan. n8n:s dokumentation föreslår att du först slår ihop de befintliga taggarna, eller lägger till taggar via noden HTTP Request med Zendesks egenskap additional_tags eller via tags-endpointen.",
      },
      {
        q: "Vilka autentiseringsmetoder stöder n8n:s Zendesk-credential?",
        a: "En API-token, som anges tillsammans med din subdomän och mejladressen du loggar in med, eller OAuth2, med klient-ID och hemlighet från en OAuth-klient som du skapar i Zendesk.",
      },
      {
        q: "Hur kontrollerar jag att ett webhook-anrop kom från Zendesk?",
        a: "Räkna om base64(HMACSHA256(timestamp + body)) med webhookens signeringshemlighet och jämför med headern X-Zendesk-Webhook-Signature. Tidsstämpeln finns i headern X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Vad händer när ett arbetsflöde når Zendesks gräns för API-anrop?",
        a: "Zendesk avvisar anropet med HTTP 429 och en Retry-After-header som anger hur många sekunder du ska vänta. Standardgränserna sträcker sig från 200 anrop per minut på Suite Team till 2 500 på Suite Enterprise Plus.",
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
