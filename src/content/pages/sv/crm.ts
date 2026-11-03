import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "attio-workflows-automatisering",
    category: "crm",
    navLabel: "Attio workflows",
    primaryKeyword: "Attio workflows automatisering",
    title: "Attio workflows: triggers, block, credits och API:et",
    description:
      "Attio workflows förklarat: trigger- och åtgärdsblock, hur credits förbrukas, anropsgränser i REST API:et, webhook-signaturer och kopplingar till support.",
    h1: "Attio workflows: så fungerar CRM-automatisering i Attio",
    intro:
      "Attio automatiserar CRM-arbete med arbetsflöden (workflows). Ett arbetsflöde startar från ett triggerblock och kör en kedja av åtgärdsblock, till exempel att uppdatera en post, skapa en uppgift, skicka ett Slack-meddelande eller göra ett HTTP-anrop. Körningar av arbetsflöden förbrukar arbetsytans credits, och allt annat kopplas in via Attios REST API och webhooks.",
    keyFacts: [
      "Ett arbetsflöde i Attio byggs av ett triggerblock, som startar det, och åtgärdsblock, som utför arbetet.",
      "Triggers, logik och datauppslag är gratis. Block som skriver data, anropar externa system eller använder AI förbrukar arbetsytans credits, de flesta en credit per körning.",
      "Attios REST API tillåter 100 läsanrop och 25 skrivanrop per sekund. Över gränsen returneras HTTP 429 med en Retry-After-header.",
      "Attio signerar webhooks med en HMAC-SHA256 av begärans body, som skickas i headern Attio-Signature.",
    ],
    sections: [
      {
        heading: "Så byggs arbetsflöden i Attio",
        blocks: [
          {
            type: "p",
            text: "Du bygger ett arbetsflöde på en canvas. Triggerblocket avgör när det körs, och åtgärdsblocken efter det avgör vad som händer. Attios blockbibliotek delar in triggers i fyra typer:",
          },
          {
            type: "ul",
            items: [
              "Triggers för poster (record), till exempel 'Record created'.",
              "Triggers för listor (list), till exempel 'Record added to list'.",
              "Triggers för uppgifter (task), till exempel 'Task created'.",
              "Verktygstriggers (utility), till exempel 'Manual run', ett schema eller en inkommande webhook.",
            ],
          },
          {
            type: "p",
            text: "Attios hjälpcenter ger följande exempel på åtgärdsblock: uppdatera en post, skapa en uppgift, skicka ett Slack-meddelande, lägga till någon i en sekvens och göra ett HTTP-anrop. Blocket 'Execute code' kör din egen JavaScript-kod som ett steg, med en tidsgräns på 100 sekunder. Du kan också beskriva ett arbetsflöde med vanliga ord och låta Ask Attio bygga det. Appar som byggs med Attio SDK kan lägga till egna block, som då visas i blockväljaren bredvid de inbyggda.",
          },
          {
            type: "note",
            text: "Som standard kan ett arbetsflöde inte skriva till ett objekt. En administratör, eller en medlem med full åtkomst till objektet, måste först ge arbetsflödet åtkomst. Kontrollera det innan du testar ett arbetsflöde som uppdaterar poster.",
          },
        ],
      },
      {
        heading: "Så förbrukar arbetsflöden credits",
        blocks: [
          {
            type: "p",
            text: "Körningar av arbetsflöden drar från arbetsytans gemensamma credits, inte från licensernas credits (seat credits). Attios hjälpcenter beskriver hur de räknas i de nya arbetsflödena:",
          },
          {
            type: "ul",
            items: [
              "Triggers, logik och datauppslag är gratis. Credits förbrukas bara när ett block skriver data, skickar eller tar emot något externt eller använder AI.",
              "Skrivningar till poster, uppgifter, tillägg i sekvenser, HTTP-anrop och integrationsblock kostar 1 credit per körning. AI-block och 'Execute code' har varierande kostnad.",
              "Bara den väg som en körning tar debiteras. Om en körning misslyckas halvvägs förbrukar det misslyckade blocket och alla block efter det inga credits, men block som kördes före felet debiteras.",
              "Att bygga ett arbetsflöde med Ask Attio förbrukar licensernas credits (seat credits), inte arbetsytans gemensamma credits.",
            ],
          },
          {
            type: "p",
            text: "Per november 2026 ingår 250 credits för arbetsytan per månad i Attios Free, 1 500 i Plus och 10 000 i Pro. Planerna ändras, så kontrollera Attios prissida och uppskatta sedan förbrukningen som antalet block som förbrukar credits per körning gånger det antal körningar du räknar med per månad.",
          },
        ],
      },
      {
        heading: "Attios API och webhooks",
        blocks: [
          {
            type: "p",
            text: "För allt som ett arbetsflöde inte klarar på egen hand har Attio ett REST API och utgående webhooks. Så här beskriver utvecklardokumentationen dem.",
          },
          {
            type: "table",
            caption: "Attios REST API och webhooks (Attios utvecklardokumentation, kontrollerad i november 2026)",
            head: ["Område", "Vad Attio dokumenterar"],
            rows: [
              ["Anropsgränser", "100 anrop per sekund för läsningar och 25 per sekund för skrivningar. Över gränsen returneras HTTP 429 med en Retry-After-header."],
              ["Endpoints för listning", "List records och List entries har dessutom poängbaserade gränser, som räknas över ett fönster på 10 sekunder för alla appar och tokens tillsammans."],
              ["Autentisering", "En API-nyckel för en enskild arbetsyta, eller OAuth 2.0 för appar som används i flera arbetsytor. Tokens skickas som Bearer-tokens, och scopes anges per token."],
              ["Webhook-händelser", "Händelserna omfattar bland annat record.created, list-entry.created, note.created och task.created."],
              ["Webhook-signatur", "En HMAC-SHA256 av begärans råa body, skapad med webhookens hemlighet och hex-kodad, i headern Attio-Signature."],
              ["Omförsök", "Varje meddelande har en Idempotency-Key-header som förblir densamma när Attio skickar det på nytt."],
            ],
          },
          {
            type: "p",
            text: "För att kontrollera att en webhook kommer från Attio räknar du om HMAC-SHA256 av den råa bodyn med webhookens hemlighet och jämför med headern Attio-Signature. Attio skickar också samma värde som X-Attio-Signature för äldre middleware. Använd headern Idempotency-Key för att hoppa över meddelanden som du redan har behandlat, så att ett omförsök inte skapar en andra uppgift eller ett andra Slack-meddelande.",
          },
        ],
      },
      {
        heading: "Koppla Attio till dina supportverktyg",
        blocks: [
          {
            type: "p",
            text: "Attio har en Slack-app för aviseringar och en officiell Zapier-app. Zapier listar färdiga kopplingar mellan Attio och helpdesksystem som Zendesk och Intercom. För mer kontroll kopplar du en helpdesk till Attios API och webhooks via n8n eller Make. Här är ett vanligt mönster, beskrivet steg för steg. Det visar hur delarna hänger ihop. Det är ingen fallstudie från TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: din helpdesk skickar en webhook till n8n eller Make när ett ärende skapas eller eskaleras.",
              "Slå upp: arbetsflödet hittar kundens företagspost i Attio via API:et och håller sig inom gränsen på 100 läsningar per sekund.",
              "Uppdatera: det skriver ärendets status eller kategori till ett attribut på posten, eller skapar en uppgift åt kontoansvarig.",
              "Reagera i Attio: ett arbetsflöde i Attio som utlöses av uppdateringen av posten skickar ett Slack-meddelande till kontoansvarig.",
              "Hantera fel: vänta och försök igen vid HTTP 429, och använd headern Idempotency-Key för att sortera bort dubbla webhook-leveranser.",
            ],
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab kopplar verktyg som Attio till de helpdesk- och chattverktyg du redan använder, via API:er, webhooks, n8n och Make, utan plattformsbyte. Projekt med Custom Automation kostar {{price:custom}}. De flesta upplägg tar 1 till 3 veckor, och varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vad är Attio workflows?",
        a: "Attios automatiseringsverktyg. Ett arbetsflöde startar från ett triggerblock, till exempel att en post skapas eller en manuell körning, och kör sedan åtgärdsblock, till exempel att uppdatera en post, skapa en uppgift, skicka ett Slack-meddelande eller göra ett HTTP-anrop.",
      },
      {
        q: "Kostar arbetsflöden i Attio credits?",
        a: "Ja, för block som skriver data, anropar externa system eller använder AI. De flesta av dem kostar en credit per körning, medan triggers, logik och datauppslag är gratis. Per november 2026 ingår 250 credits för arbetsytan per månad i Free, 1 500 i Plus och 10 000 i Pro.",
      },
      {
        q: "Vilka anropsgränser har Attios API?",
        a: "100 anrop per sekund för läsningar och 25 per sekund för skrivningar. Över gränsen returnerar Attio HTTP 429 med en Retry-After-header. Endpoints för List records och List entries har dessutom poängbaserade gränser.",
      },
      {
        q: "Hur verifierar jag en webhook från Attio?",
        a: "Beräkna en HMAC-SHA256 av begärans råa body med webhookens hemlighet, hex-koda den och jämför med headern Attio-Signature.",
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
    navLabel: "Attio vs HubSpot automatisering",
    primaryKeyword: "Attio vs HubSpot automatisering",
    title: "Attio vs HubSpot automatisering: arbetsflöden, API, webhooks",
    description:
      "Attio vs HubSpot automatisering jämförd: vem som får arbetsflöden, gränser och credits, triggers, kod- och webhook-steg, API-anropsgränser och signaturkontroll.",
    h1: "Attio vs HubSpot automatisering: arbetsflöden, gränser, API och webhooks",
    intro:
      "Både Attio och HubSpot automatiserar CRM-arbete med visuella arbetsflöden, men de begränsar dem på olika sätt. HubSpot inkluderar arbetsflöden bara i Professional- och Enterprise-utgåvorna och sätter ett tak för hur många du kan skapa, medan Attio mäter körningar av arbetsflöden med arbetsytans credits. Deras API:er och webhooks skiljer sig också åt i anropsgränser och i hur du verifierar ett anrop.",
    keyFacts: [
      "Arbetsflöden i HubSpot kräver en Professional- eller Enterprise-prenumeration. Marketing, Sales eller Service Hub Professional tillåter upp till 300 arbetsflöden, och Enterprise upp till 1 000.",
      "Attio mäter arbetsflöden med arbetsytans credits. Triggers, logik och uppslag är gratis, och de flesta block som skriver data eller anropar externt förbrukar en credit per körning.",
      "Custom code-åtgärder i HubSpot måste bli klara inom 20 sekunder och kan använda upp till 128 MB minne. Attios block 'Execute code' har en tidsgräns på 100 sekunder.",
      "Attios API tillåter 100 läsningar och 25 skrivningar per sekund. Privata appar i HubSpot på Professional eller Enterprise får 190 anrop per 10 sekunder.",
      "HubSpot signerar webhooks med X-HubSpot-Signature-v3. Attio använder headern Attio-Signature.",
    ],
    sections: [
      {
        heading: "Jämförelse sida vid sida",
        blocks: [
          {
            type: "table",
            caption: "Attio vs HubSpot automatisering (leverantörernas dokumentation, kontrollerad i november 2026)",
            head: ["Fråga", "Attio", "HubSpot"],
            rows: [
              ["Hur användningen begränsas", "Arbetsytans credits. Triggers, logik och uppslag är gratis, och de flesta block som skriver eller anropar externt förbrukar en credit.", "Professional eller Enterprise krävs. Ett tak för antalet arbetsflöden per utgåva."],
              ["Triggers", "Triggers för poster, listor, uppgifter och verktyg (utility), bland annat ett schema, en webhook och en manuell körning", "Registreringstriggers (enrollment triggers) baserade på filter, händelser, schema och webhooks"],
              ["Anropa ett annat system och kod", "HTTP request-blocket, och blocket 'Execute code' för JavaScript. Appar kan lägga till egna block.", "Åtgärderna 'Send a webhook' och 'Custom code', i Data Hub Professional och Enterprise"],
              ["Slack", "Block för Slack-meddelanden, med Attios Slack-app", "Åtgärd för Slack-aviseringar, med Slack-integrationen installerad"],
              ["Anropsgräns för API", "100 läsningar och 25 skrivningar per sekund", "Privata appar: 100 per 10 sekunder på Free och Starter, 190 på Professional och Enterprise, plus en daglig gräns"],
              ["Webhook-signatur", "HMAC-SHA256 av bodyn, hex-kodad, i Attio-Signature", "HMAC-SHA256 av metod, URI, body och tidsstämpel, base64-kodad, i X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "Arbetsflöden i HubSpot: utgåvor och gränser",
        blocks: [
          {
            type: "p",
            text: "Enligt HubSpots FAQ om arbetsflöden krävs en Professional- eller Enterprise-prenumeration för att använda arbetsflöden. Hur många du kan skapa beror på utgåvan:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales eller Service Hub Professional: upp till 300 arbetsflöden.",
              "Marketing, Sales eller Service Hub Enterprise: upp till 1 000 arbetsflöden.",
              "Med tillägget Brands: 100 arbetsflöden till.",
              "Med flera hubbar är det prenumerationen med högst gräns som avgör din gräns.",
            ],
          },
          {
            type: "p",
            text: "Bara anpassade arbetsflöden som byggs i arbetsflödesverktyget räknas mot gränsen. Enkla automatiseringar i verktyg som formulär gör det inte. Som standard registreras en post i ett arbetsflöde bara första gången den uppfyller registreringstriggarna. Du kan aktivera omregistrering (re-enrollment), men den kan inte använda AND-villkor och registrerar inte poster retroaktivt.",
          },
          {
            type: "p",
            text: "Två åtgärder är viktigast för integrationer: 'Send a webhook' och 'Custom code'. HubSpot listar båda för Data Hub Professional och Enterprise, hubben som tidigare hette Operations Hub. Custom code-åtgärder kör Node.js som standard, eller Python i beta, måste bli klara inom 20 sekunder och kan använda upp till 128 MB minne, så långa jobb hör hemma i ett externt verktyg som n8n.",
          },
        ],
      },
      {
        heading: "Arbetsflöden i Attio: mäts med credits",
        blocks: [
          {
            type: "p",
            text: "Attio mäter arbetsflöden efter användning. Körningar drar från arbetsytans gemensamma credits. Triggers, logik och datauppslag är gratis, och block som skriver data, anropar externa system eller använder AI förbrukar credits, de flesta en per körning. Per november 2026 ingår 250 credits för arbetsytan per månad i Free, 1 500 i Plus och 10 000 i Pro.",
          },
          {
            type: "p",
            text: "För att nå ett annat system från ett arbetsflöde i Attio använder du HTTP request-blocket. Blocket 'Execute code' kör din egen JavaScript-kod med en tidsgräns på 100 sekunder och en varierande kostnad i credits, och appar som byggs med Attio SDK kan lägga till egna block i arbetsflöden.",
          },
        ],
      },
      {
        heading: "API:er och webhooks för integrationer",
        blocks: [
          {
            type: "p",
            text: "HubSpot begränsar privata appar per 10 sekunder och per dag. Konton på Free och Starter får 100 anrop per 10 sekunder och 250 000 per dag. Professional får 190 per 10 sekunder och 625 000 per dag, och Enterprise får 190 per 10 sekunder och 1 000 000 per dag. Gränsen per 10 sekunder gäller för varje app, och den dagliga gränsen delas av alla appar i kontot. Över gränsen returnerar HubSpot HTTP 429, och HubSpots riktlinjer ber att felsvaren håller sig under 5 % av dina dagliga anrop.",
          },
          {
            type: "p",
            text: "Attio räknar per sekund: 100 läsningar och 25 skrivningar, med HTTP 429 och en Retry-After-header när du går över. Dess endpoints List records och List entries har dessutom poängbaserade gränser, som räknas över ett fönster på 10 sekunder.",
          },
          {
            type: "p",
            text: "Båda signerar sina webhooks, men på olika sätt. HubSpots v3-signatur kommer i X-HubSpot-Signature-v3 tillsammans med X-HubSpot-Request-Timestamp. Den är en HMAC-SHA256, base64-kodad och skapad med appens client secret, över metod, URI, body och tidsstämpel, och HubSpot säger att du ska avvisa anrop vars tidsstämpel är mer än 5 minuter gammal. Attios header Attio-Signature är en hex-kodad HMAC-SHA256 av den råa bodyn, skapad med webhookens hemlighet. Attio skickar också en Idempotency-Key-header som förblir densamma vid omförsök.",
          },
        ],
      },
      {
        heading: "Vad som passar ett supportteam",
        blocks: [
          {
            type: "ul",
            items: [
              "Om ditt supportteam redan arbetar i HubSpots helpdesk finns ärenden, SLA:er och arbetsflöden för ärenden i samma konto som CRM:et, och arbetsflöden ingår från Professional.",
              "Om du använder Attio som CRM och en separat helpdesk kopplar du ihop dem via API:erna och webhooks med n8n, Make eller Zapier, som har en officiell Attio-app.",
              "Om dina automatiseringar anropar andra system, budgetera för Data Hub Professional i HubSpot, eller planera utifrån blocken HTTP request och 'Execute code' i Attio.",
              "Om volymerna är höga, jämför API-gränserna ovan med din högsta ärendevolym innan du bestämmer var logiken ska köras.",
            ],
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger automatiseringar ovanpå det CRM och den helpdesk du redan använder, med API:er, webhooks, n8n och Make, så att du inte behöver byta plattform. Projekt med Custom Automation kostar {{price:custom}}. De flesta upplägg tar 1 till 3 veckor, och varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ingår arbetsflöden i alla HubSpots planer?",
        a: "Nej. Enligt HubSpots FAQ om arbetsflöden krävs en Professional- eller Enterprise-prenumeration. Marketing, Sales eller Service Hub Professional tillåter upp till 300 arbetsflöden, och Enterprise upp till 1 000.",
      },
      {
        q: "Hur begränsar Attio arbetsflöden?",
        a: "Med arbetsytans credits. Triggers, logik och uppslag är gratis, och de flesta block som skriver data eller anropar externa system förbrukar en credit per körning. AI- och kodblock varierar. Hur många credits som ingår beror på din plan.",
      },
      {
        q: "Kan jag köra egen kod i arbetsflöden i HubSpot eller Attio?",
        a: "HubSpot har åtgärden 'Custom code' i Data Hub Professional och Enterprise, som kör Node.js, eller Python i beta, inom 20 sekunder och 128 MB minne. Attio har blocket 'Execute code', som kör JavaScript med en tidsgräns på 100 sekunder, och appar som byggs med dess SDK kan lägga till egna block.",
      },
      {
        q: "Hur verifierar jag webhooks från HubSpot och Attio?",
        a: "För HubSpot räknar du om HMAC-SHA256 av metod, URI, body och tidsstämpel med din client secret och jämför med X-HubSpot-Signature-v3. För Attio jämför du en HMAC-SHA256 av den råa bodyn, skapad med webhookens hemlighet, med headern Attio-Signature.",
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
    slug: "hubspot-zendesk-integration",
    category: "crm",
    navLabel: "HubSpot Zendesk-integration",
    primaryKeyword: "HubSpot Zendesk-integration",
    title: "HubSpot Zendesk-integration: vad som synkas och dina val",
    description:
      "HubSpot Zendesk-integration: vad gratisappen Zendesk for HubSpot synkar och inte, action flows, appar för tvåvägssynk och egna lösningar med båda API:erna.",
    h1: "HubSpot Zendesk-integration: vad som synkas, vad som inte gör det och dina alternativ",
    intro:
      "Zendesks egen HubSpot-integration är gratis och snabb att koppla in, men den skickar bara ärendehändelser åt ett håll, från Zendesk till en kontakts tidslinje i HubSpot. Om du behöver mer kan action flows i Zendesk skapa och uppdatera poster i HubSpot, appar på Marketplace erbjuder tvåvägssynk, och en egen lösning med webhooks och båda API:erna kan flytta exakt den data du väljer.",
    keyFacts: [
      "Integrationen Zendesk Support for HubSpot är enkelriktad: ärendeinformation flödar från Zendesk till HubSpot.",
      "Den skapar tre triggers i Zendesk, för nya ärenden, lösta ärenden och CSAT-betyg, plus en webhook som heter HubSpot Integration.",
      "Ärenden visas bara på kontaktens tidslinje i HubSpot, inte på företag eller affärer (deals), och bara användarens mejladress synkas.",
      "Action flows i Zendesk har HubSpot-åtgärder som skapar, uppdaterar och slår upp kontakter, företag, affärer och ärenden.",
      "Zendesk slutade utfärda nya API-tokens den 27 oktober 2026, så egna lösningar bör använda OAuth.",
    ],
    sections: [
      {
        heading: "Fyra sätt att koppla ihop HubSpot och Zendesk",
        blocks: [
          {
            type: "table",
            caption: "Alternativ för att integrera HubSpot och Zendesk (leverantörernas dokumentation och listningar, kontrollerad i november 2026)",
            head: ["Alternativ", "Riktning", "Vad som flyttas"],
            rows: [
              ["Zendesk Support for HubSpot", "Bara från Zendesk till HubSpot", "Händelser för nya ärenden, lösta ärenden och CSAT-betyg, som skickas till kontaktens tidslinje"],
              ["Action flows i Zendesk med HubSpot-åtgärder", "Från Zendesk till HubSpot, steg för steg", "Skapar, uppdaterar och slår upp kontakter, företag, affärer och ärenden"],
              ["Appar på Marketplace", "Beror på appen, vissa är tvåvägs", "Det som appen stöder, till exempel kontakter eller affärer"],
              ["Egen lösning med webhooks och båda API:erna", "Åt båda hållen", "Exakt de fält och händelser du väljer"],
            ],
          },
          {
            type: "p",
            text: "Börja med frågan som ditt team försöker besvara. Om säljare och kontoansvariga bara behöver se en kontakts supporthistorik i HubSpot kan den kostnadsfria integrationen räcka. Om ärenden behöver ändra data i HubSpot, till exempel en företagsegenskap eller ett affärsstadium (deal stage), behöver du action flows, en app eller en egen lösning.",
          },
        ],
      },
      {
        heading: "Så ställer du in den kostnadsfria integrationen Zendesk Support for HubSpot",
        blocks: [
          {
            type: "ol",
            items: [
              "Öppna integrationens installationssida och ange din Zendesk-subdomän.",
              "Godkänn anslutningen i både Zendesk och HubSpot.",
              "Zendesk skapar tre triggers, för nya ärenden, lösta ärenden och CSAT-betyg, och en webhook som heter HubSpot Integration.",
              "Redigera villkoren i de triggarna om du bara vill att vissa ärenden ska nå HubSpot.",
            ],
          },
          {
            type: "p",
            text: "Zendesk dokumenterar några begränsningar. Integrationen är enkelriktad, från Zendesk till HubSpot. Bara användarens mejladress synkas, inte för- eller efternamnet. Ärenden visas bara på kontaktens tidslinje, inte på företags- eller affärsposter. Du kan ändra vilka ärenden som skickas genom att redigera villkoren i triggarna, men du kan inte ändra JSON-payloaden. För att stänga av integrationen inaktiverar du de tre triggarna.",
          },
          {
            type: "note",
            text: "Testa inte webhooken HubSpot Integration från Admin Center. Zendesk varnar för att det kan skicka ogiltig JSON och koppla från integrationen. Testa i stället genom att skapa eller lösa ett riktigt testärende.",
          },
        ],
      },
      {
        heading: "Action flows i Zendesk med HubSpot-åtgärder",
        blocks: [
          {
            type: "p",
            text: "Action flows är Zendesks verktyg för att bygga automatiseringar i flera steg som når externa system. HubSpot-kopplingen (connector) lägger till de här åtgärderna:",
          },
          {
            type: "ul",
            items: [
              "Skapa och uppdatera kontakter, företag, affärer och ärenden i HubSpot.",
              "Slå upp kontakter, företag, affärer och ärenden, och slå upp användare.",
              "Slå upp en kontakt via Contact ID eller mejladress. Om du anger båda har Contact ID företräde.",
              "Anslut med OAuth 2.0 från 'External actions' i stegets sidopanel. Zendesk rekommenderar ett dedikerat tjänstekonto och förnyar tokens automatiskt.",
            ],
          },
          {
            type: "p",
            text: "Action flows förbrukar action credits. Zendesk anger 100 000 åtgärder per månad för Suite Professional och 225 000 för Suite Enterprise, skickar ett mejl vid 80 % och 100 % av tilldelningen och säljer fler i enheter om 100 000. Administratörer kan se förbrukningen i Admin Center under Account, sedan Usage och sedan Summary. Tilldelningar och vilka planer som har funktionen ändras, så kontrollera dem i ditt eget konto innan du bygger på action flows.",
          },
        ],
      },
      {
        heading: "Appar för tvåvägssynk",
        blocks: [
          {
            type: "p",
            text: "Zendesk Marketplace listar appen Data sync by HubSpot, som den beskriver som en dubbelriktad synk i realtid mellan HubSpot och Zendesk. För att installera den krävs en Super Admin i HubSpot eller en användare med behörighet för App Marketplace, som anger Zendesk-subdomänen, godkänner anslutningen och väljer vad som ska synkas. Tredjepartsappar som HubSpot CRM Connect lägger till egna funktioner. Listningar på Marketplace är marknadsföringssidor, så kontrollera på appens inställningsskärm vilka poster och fält den faktiskt synkar innan du förlitar dig på den.",
          },
          {
            type: "p",
            text: "HubSpots dokumentation om datasynk förklarar hur tvåvägssynkar matchar poster: som standard matchas kontakter via mejladress och företag via namn eller domän, och bara kontakter med en giltig mejladress synkas. Rensa bort dubbletter av kontakter och saknade mejladresser innan du aktiverar en tvåvägssynk, annars kopierar synken röran till båda verktygen.",
          },
        ],
      },
      {
        heading: "Egna lösningar med webhooks och båda API:erna",
        blocks: [
          {
            type: "p",
            text: "En egen lösning ger dig full kontroll, till exempel att visa öppna ärenden på företagsposter i HubSpot, vilket den kostnadsfria integrationen inte klarar. Här är ett vanligt mönster, beskrivet steg för steg. Det är ingen fallstudie från TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: en trigger i Zendesk med åtgärden Notify by > Active webhook skickar ärende-ID:t och beställarens mejladress till n8n eller Make när ett ärende skapas eller byter status.",
              "Verifiera: arbetsflödet kontrollerar headern X-Zendesk-Webhook-Signature, så att bara äkta anrop från Zendesk behandlas.",
              "Slå upp: det hittar kontakten i HubSpot via mejladressen genom CRM-API:et, och sedan det företag som kontakten är associerad med.",
              "Uppdatera: det skriver antalet ärenden eller den senaste statusen till en företagsegenskap, som listor, rapporter och arbetsflöden i HubSpot kan använda.",
              "Hantera fel: det väntar och försöker igen vid HTTP 429, eftersom både Zendesk och HubSpot begränsar API-anrop.",
            ],
          },
          {
            type: "p",
            text: "För den andra riktningen kan ett arbetsflöde i HubSpot anropa din endpoint med åtgärden 'Send a webhook', som HubSpot listar för Data Hub Professional och Enterprise och som bara accepterar HTTPS-URL:er. På Zendesk-sidan använder du OAuth i stället för API-tokens. Zendesk slutade låta befintliga konton skapa nya API-tokens den 27 oktober 2026, och alla API-tokens slutar fungera den 30 april 2027. OAuth-klienter som skapats den 30 april 2026 eller senare får åtkomsttokens som som standard går ut efter 30 minuter, så integrationen behöver hantera refresh tokens.",
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab kopplar ihop Zendesk och HubSpot via API:er, webhooks, n8n och Make, ovanpå de verktyg du redan använder. Projekt med Custom Automation kostar {{price:custom}}. De flesta upplägg tar 1 till 3 veckor, och varje projekt inkluderar grundläggande dokumentation och 30 dagars support efter lansering. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Är HubSpot Zendesk-integrationen tvåvägs?",
        a: "Inte den kostnadsfria integrationen Zendesk Support for HubSpot. Den är enkelriktad och skickar ärendeinformation från Zendesk till kontaktens tidslinje i HubSpot. För tvåvägssynk använder du en app från Marketplace, till exempel Data sync by HubSpot, eller en egen lösning.",
      },
      {
        q: "Kan jag se Zendesk-ärenden på företag eller affärer i HubSpot?",
        a: "Inte med den kostnadsfria integrationen, som bara visar ärenden på kontaktens tidslinje. Det går med en egen lösning som skriver ärendedata till egenskaper på företag eller affärer via HubSpots API.",
      },
      {
        q: "Varför kopplades min HubSpot-integration från när jag testade dess webhook?",
        a: "Zendesk varnar för att test av webhooken HubSpot Integration från Admin Center kan skicka ogiltig JSON och koppla från integrationen. Testa med ett riktigt ärende i stället.",
      },
      {
        q: "Kan jag fortfarande använda en API-token från Zendesk för en HubSpot-integration?",
        a: "Bara en som du redan har. Zendesk slutade utfärda nya API-tokens den 27 oktober 2026, inaktiverar tokens som inte används på 30 dagar och stänger av alla API-tokens den 30 april 2027. Använd OAuth för nya integrationer.",
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
];
