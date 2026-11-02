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
      "Arbetsflöden förbrukar arbetsytans credits. De flesta block förbrukar en credit, och ett block som misslyckas, plus alla block efter det, förbrukar inga.",
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
            text: "Attios hjälpcenter ger följande exempel på åtgärdsblock: uppdatera en post, skapa en uppgift, skicka ett Slack-meddelande, lägga till någon i en sekvens och göra ett HTTP-anrop. Du kan också beskriva ett arbetsflöde med vanliga ord och låta Ask Attio bygga det. Appar som byggs med Attio SDK kan lägga till egna block, som då visas i blockväljaren bredvid de inbyggda.",
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
            text: "Körningar av arbetsflöden och AI-funktioner drar från arbetsytans gemensamma credits. Attios faktureringsdokumentation beskriver hur de räknas:",
          },
          {
            type: "ul",
            items: [
              "De flesta block i arbetsflöden förbrukar en credit varje gång de körs.",
              "Credits debiteras bara för block som faktiskt körs. Om en körning misslyckas halvvägs förbrukar det misslyckade blocket och alla block efter det inga credits.",
              "Omräkning av AI-attribut förbrukar också credits.",
              "Administratörer kan se förbrukningen av credits per arbetsflöde i Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Antalet credits som ingår skiljer sig mellan planerna, och Attio har ändrat sina planer tidigare. Kontrollera den aktuella tilldelningen på Attios prissida och uppskatta förbrukningen som antalet block per körning gånger det antal körningar du räknar med per månad.",
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
        a: "Ja. Körningar av arbetsflöden förbrukar arbetsytans gemensamma credits. De flesta block förbrukar en credit per körning, och block som misslyckas eller aldrig körs förbrukar inga. Hur många credits som ingår beror på din plan.",
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
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-02",
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
      "Attio mäter arbetsflöden med arbetsytans credits. De flesta block förbrukar en credit per körning.",
      "Custom code-åtgärder i HubSpot måste bli klara inom 20 sekunder och kan använda upp till 128 MB minne.",
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
              ["Hur användningen begränsas", "Körningar av arbetsflöden förbrukar arbetsytans credits. De flesta block förbrukar en credit.", "Professional eller Enterprise krävs. Ett tak för antalet arbetsflöden per utgåva."],
              ["Triggers", "Triggers för poster, listor, uppgifter och verktyg (utility), bland annat ett schema, en webhook och en manuell körning", "Registreringstriggers (enrollment triggers) baserade på filter, händelser, schema och webhooks"],
              ["Anropa ett annat system", "HTTP request-blocket. Appar kan lägga till egna block.", "Åtgärderna 'Send a webhook' och 'Custom code', i Data Hub Professional och Enterprise"],
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
            text: "Två åtgärder är viktigast för integrationer: 'Send a webhook' och 'Custom code'. HubSpot listar båda för Data Hub Professional och Enterprise, hubben som tidigare hette Operations Hub. Custom code-åtgärder kör Node.js eller Python, måste bli klara inom 20 sekunder och kan använda upp till 128 MB minne, så långa jobb hör hemma i ett externt verktyg som n8n.",
          },
        ],
      },
      {
        heading: "Arbetsflöden i Attio: mäts med credits",
        blocks: [
          {
            type: "p",
            text: "Attio mäter arbetsflöden efter användning. Körningar drar från arbetsytans gemensamma credits, de flesta block förbrukar en credit, och block som misslyckas eller aldrig körs förbrukar inga. Administratörer kan se förbrukningen av credits per arbetsflöde i Workspace settings. Hur många credits som ingår skiljer sig mellan planerna, så kontrollera Attios prissida och uppskatta block per körning gånger körningar per månad.",
          },
          {
            type: "p",
            text: "För att nå ett annat system från ett arbetsflöde i Attio använder du HTTP request-blocket, eller bygger en app med Attio SDK som lägger till egna block i arbetsflöden.",
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
              "Om dina automatiseringar anropar andra system, budgetera för Data Hub Professional i HubSpot, eller planera utifrån HTTP request-blocket i Attio.",
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
        a: "Med arbetsytans credits. Körningar av arbetsflöden drar från arbetsytans gemensamma credits, de flesta block förbrukar en credit per körning, och hur många credits som ingår beror på din plan.",
      },
      {
        q: "Kan jag köra egen kod i arbetsflöden i HubSpot eller Attio?",
        a: "HubSpot har åtgärden 'Custom code' i Data Hub Professional och Enterprise, som kör Node.js eller Python inom 20 sekunder och 128 MB minne. Attio erbjuder ett HTTP request-block, och appar som byggs med dess SDK kan lägga till egna block.",
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
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
