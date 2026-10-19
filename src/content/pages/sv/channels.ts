import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "whatsapp-bot-kundtjanst",
    category: "channels",
    navLabel: "WhatsApp-bot för support",
    primaryKeyword: "WhatsApp-bot för kundtjänst",
    title: "WhatsApp-bot för kundtjänst: regler, upplägg och överlämning",
    description:
      "Så fungerar en WhatsApp-bot för kundtjänst: Business Platform kontra appen, 24-timmarsfönstret, mallar, opt-in, prissättning och koppling till din helpdesk.",
    h1: "WhatsApp-bot för kundtjänst: så fungerar den och vad Meta tillåter",
    intro:
      "En WhatsApp-bot för kundtjänst körs på WhatsApp Business Platform (Cloud API), inte i den kostnadsfria appen WhatsApp Business. Den kan svara fritt i 24 timmar efter varje kundmeddelande; efter det kan du bara nå kunden med en förhandsgodkänd mall. Bygg boten kring det fönstret, din process för samtycke (opt-in) och en smidig överlämning till din helpdesk.",
    keyFacts: [
      "När en kund skickar ett meddelande eller ringer dig öppnas ett kundtjänstfönster på 24 timmar, som startar om vid varje nytt meddelande.",
      "Inom fönstret kan du skicka fritt formulerade servicemeddelanden utan förhandsgodkännande.",
      "Utanför fönstret är mallar den enda meddelandetyp du kan skicka.",
      "Innan du skickar meddelanden till människor behöver du ett samtycke (opt-in) som tydligt anger ditt företags namn.",
      "Meta debiterar per levererat meddelande, utifrån meddelandekategori och mottagarens land.",
    ],
    sections: [
      {
        heading: "Appen WhatsApp Business eller WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp erbjuder två produkter för företag, och bara den ena är byggd för bottar. Appen WhatsApp Business är en kostnadsfri app för småföretag som svarar kunder för hand och använder enkla automatiska svar. WhatsApp Business Platform är en uppsättning API:er för medelstora och större företag. Cloud API är dess huvudsakliga meddelandeprodukt, och det är den som chattbottar, helpdeskar och CRM-system ansluter till.",
          },
          {
            type: "table",
            caption: "Appen och plattformen i korthet",
            head: ["", "Appen WhatsApp Business", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Byggd för", "Småföretag som svarar för hand", "Medelstora företag och storföretag som kopplar in bottar och supportverktyg"],
              ["Kostnad", "Gratis att ladda ner och använda", "Avgifter per meddelande som Meta fastställer"],
              ["Uppsättning", "Installeras från en appbutik", "Utvecklarresurser eller en Business Messaging Partner"],
              ["Automatisering", "Enkla automatiska svar", "Chattbottar, meddelandeflöden, integrationer med CRM och helpdesk"],
            ],
          },
          {
            type: "p",
            text: "Om du redan använder appen stöder Meta att ett befintligt nummer i appen WhatsApp Business ansluts till Cloud API, så att båda kan köras på samma nummer. Efter anslutningen omfattas meddelanden som skickas från appen inte av kundtjänstfönstret, medan meddelanden som skickas via Cloud API gör det, och vissa funktioner i appen, till exempel gruppchattar, stöds inte på API-sidan. Kontrollera att din helpdesk stöder den här uppsättningen innan du förlitar dig på den.",
          },
        ],
      },
      {
        heading: "Kundtjänstfönstret på 24 timmar",
        blocks: [
          {
            type: "p",
            text: "Varje supportflöde i WhatsApp hänger på en enda timer. När en kund skickar ett meddelande till eller ringer ditt företag startar ett kundtjänstfönster på 24 timmar, och varje nytt meddelande eller samtal från kunden nollställer det till 24 timmar. Medan fönstret är öppet kan din bot eller dina agenter skicka fritt formulerade servicemeddelanden via API:et utan förhandsgodkännande.",
          },
          {
            type: "p",
            text: "När fönstret har stängts är mallar de enda meddelanden du kan skicka. Mallar är förformulerade format som måste godkännas innan de används, och var och en tillhör en kategori: marknadsföring (kampanjer), utility (uppföljning av något som kunden har gjort eller bett om) eller autentisering (verifiering av identitet).",
          },
          {
            type: "table",
            caption: "Vad du kan skicka, och när",
            head: ["Situation", "Vad du kan skicka"],
            rows: [
              ["Kunden skrev inom de senaste 24 timmarna", "Fritt formulerade servicemeddelanden från din bot eller dina agenter"],
              ["Fönstret har stängts och du behöver uppdatera ett ärende eller en order", "En godkänd utility-mall"],
              ["Du behöver verifiera kundens identitet", "En godkänd autentiseringsmall"],
              ["Du vill marknadsföra något", "En godkänd marknadsföringsmall, som bara skickas till användare som har gett sitt samtycke"],
              ["Kunden svarar på din mall", "Svaret öppnar ett nytt fönster på 24 timmar, så fritt formulerade svar fungerar igen"],
            ],
          },
          {
            type: "p",
            text: "För en supportbot innebär det två praktiska regler: svara inom fönstret närhelst du kan, och förbered utility-mallar i förväg för sena uppföljningar som ”ditt ärende har uppdaterats” eller ”vi behöver en uppgift till”.",
          },
        ],
      },
      {
        heading: "Regler för samtycke som din bot måste följa",
        blocks: [
          {
            type: "p",
            text: "Meta kräver att företag får samtycke (opt-in) innan de skickar meddelanden till människor på WhatsApp. Samtycket behöver inte vara specifikt för WhatsApp, men det måste tydligt säga att personen godkänner att ta emot meddelanden från ditt företag och ange ditt företags namn. Du ansvarar själv för att välja en metod för samtycke som uppfyller de lagar som gäller för dig. Meta listar dessa metoder:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Din webbplats",
              "Ett telefonsamtal med ett IVR-flöde (interaktivt röstsvar)",
              "Personligen eller på papper",
            ],
          },
          {
            type: "p",
            text: "Meta rekommenderar också samtycke som täcker varje typ av meddelande som du planerar att skicka, plus tydliga instruktioner för hur man avregistrerar sig. I praktiken: samla in och registrera samtycket där kunderna först ger dig sitt nummer, till exempel i kassan, vid registrering eller i ditt kontaktformulär, så att mallar för ärendeuppdateringar aldrig bygger på en gissning.",
          },
        ],
      },
      {
        heading: "Så fungerar prissättningen i WhatsApp, utan prislistan",
        blocks: [
          {
            type: "p",
            text: "Meta tar betalt per levererat meddelande och bara för meddelanden som ett företag skickar till användare. Priset beror på meddelandekategorin och mottagarens landsnummer. Prislistor publiceras per marknad och ändras då och då, så kontrollera Metas aktuella prissida i stället för att lita på en siffra från ett blogginlägg.",
          },
          {
            type: "p",
            text: "Två saker spelar roll för supportteam. Samtal som startar från en Click to WhatsApp-annons eller en uppmaning (call-to-action) på en Facebook-sida kan öppna ett kostnadsfritt fönster för ingångspunkten: om du svarar inom kundtjänstfönstret debiteras inte dina meddelanden, och enligt Metas aktuella prissida kan det fönstret vara öppet i upp till 7 dagar (den äldre konversationsbaserade prissättningen gav 72 timmar). Dessutom kan helpdeskleverantörer lägga på egna avgifter: Freshworks dokumentation anger till exempel att företaget lägger ett påslag ovanpå Metas WhatsApp-avgifter.",
          },
          {
            type: "note",
            text: "Metas prisdokumentation beskriver ändringar under 2026 i hur service- och utility-meddelanden debiteras. Bekräfta de aktuella reglerna på Metas prissida innan du uppskattar månadskostnaderna.",
          },
        ],
      },
      {
        heading: "Koppla boten till din helpdesk",
        blocks: [
          {
            type: "p",
            text: "En WhatsApp-bot får aldrig vara en återvändsgränd. När den inte kan lösa något ska samtalet nå en agent med sammanhanget redan bifogat. Både Zendesk och Freshdesk erbjuder inbyggda WhatsApp-kanaler:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp läggs till som meddelandekanal i Admin Center (Channels > Messaging and social > Messaging). Du behöver en Meta Business Manager som tillhör ditt företag, och den person som ansluter numret måste vara administratör i den. Zendesk påpekar att agenter inte kan svara mer än 24 timmar efter kundens senaste meddelande och att gruppmeddelanden i WhatsApp inte stöds.",
              "Freshdesk: WhatsApp är en Freshdesk Omni-kanal med stöd för godkända meddelandemallar. Inställningarna per nummer omfattar koppling av en AI-agent, routing till agentgrupper, mallhantering, automatiseringar och SLA-policyer. Freshdesks guide nämner en gräns på 250 företagsinitierade konversationer per 24 timmar tills Metas företagsverifiering är klar.",
            ],
          },
          {
            type: "p",
            text: "Oavsett vilken helpdesk du använder: mappa de uppgifter som boten samlar in (namn, ordernummer, ärendetyp) till ärendefält så att agenterna inte frågar igen, och tagga konversationer som boten har hanterat så att du ser vad boten faktiskt löser.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger WhatsApp-bottar ovanpå de verktyg du redan använder, till exempel Zendesk, Freshdesk, Jira, Slack eller interna system, med API:er, webhooks och Make eller n8n. En Starter Chat Bot (350–450 USD) täcker en eller två kanaler med vanliga frågor och enkel insamling av uppgifter; en Standard Chat Bot (500–650 USD) täcker tre till fem kanaler med mer komplexa samtal och smidigare överlämningar. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, utan dolda avgifter, och de flesta uppsättningar tar 1–3 veckor. Ett kostnadsfritt genomlysningssamtal på 30 minuter är ett enkelt sätt att se om WhatsApp passar din supportvolym.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag bygga en supportbot i den vanliga appen WhatsApp Business?",
        a: "Inte på något meningsfullt sätt. Appen erbjuder enkla automatiska svar, men chattbottar och helpdeskintegrationer körs på WhatsApp Business Platform, oftast via Cloud API.",
      },
      {
        q: "Vad händer om en kund svarar efter 24 timmar?",
        a: "Kundens nya meddelande öppnar ett nytt kundtjänstfönster på 24 timmar, så din bot eller dina agenter kan svara fritt igen. Fönstret begränsar bara meddelanden som du själv initierar efter att det har stängts.",
      },
      {
        q: "Måste WhatsApp-mallar godkännas?",
        a: "Ja. Mallar måste godkännas innan du kan skicka dem, och de är de enda meddelanden som är tillåtna utanför kundtjänstfönstret.",
      },
      {
        q: "Kan jag behålla mitt befintliga nummer från appen WhatsApp Business?",
        a: "Meta stöder att ett befintligt nummer i appen WhatsApp Business ansluts till Cloud API så att båda kan användas på samma nummer, men vissa funktioner är inte tillgängliga på API-sidan. Kontrollera att din helpdesk stöder detta innan du byter.",
      },
      {
        q: "Vad kostar det att driva en supportbot i WhatsApp?",
        a: "Meta tar betalt per levererat meddelande, utifrån meddelandekategori och mottagarens land, och priserna ändras över tid. Kontrollera Metas aktuella prislistor och eventuella avgifter som din helpdesk lägger på.",
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
    slug: "telegram-supportbot",
    category: "channels",
    navLabel: "Telegram-bot för support",
    primaryKeyword: "Telegram-bot för support",
    title: "Telegram-bot för support: Bot API, webhooks och överlämning",
    description:
      "Så driver du en Telegram-bot för support: BotFather, webhooks kontra long polling, inline-tangentbord, sekretessläge i grupper, gränser och överlämning.",
    h1: "Telegram-bot för support: så fungerar den och så sätter du upp den",
    intro:
      "En Telegram-bot för support är ett program som är anslutet till Telegrams Bot API. Du registrerar den hos @BotFather, får en token, och din kod tar emot kundernas meddelanden via en webhook eller long polling. Telegram-bottar kan inte starta konversationer, så varje supportflöde börjar med att en kund öppnar din bot och trycker på Start.",
    keyFacts: [
      "Du skapar en bot och får dess autentiseringstoken genom att skicka ett meddelande till @BotFather.",
      "Uppdateringar kommer via getUpdates eller en webhook; de två metoderna utesluter varandra.",
      "Telegram sparar uppdateringar som inte har levererats i högst 24 timmar.",
      "Bottar kan inte skriva till användare först; användaren måste skriva till boten eller lägga till den i en grupp.",
      "Webhooks fungerar bara på portarna 443, 80, 88 och 8443.",
    ],
    sections: [
      {
        heading: "Så fungerar en Telegram-bot för support",
        blocks: [
          {
            type: "p",
            text: "Du skapar en bot genom att skicka ett meddelande till @BotFather i Telegram, som registrerar den och ger dig en autentiseringstoken. Din kod använder den token för att anropa Bot API över HTTPS. Token autentiserar bara din kod; den ger inte boten behörighet att skicka meddelanden till någon.",
          },
          {
            type: "p",
            text: "Bottar kan inte starta konversationer. En användare måste skriva till boten först eller lägga till den i en grupp. Varje bot har en länk i formatet t.me/ följt av botens användarnamn som öppnar en chatt med den, och första gången någon öppnar den chatten visas en Start-knapp som skickar kommandot /start. Spara användarens chatt-ID i det ögonblicket: du behöver det för att skicka senare meddelanden, till exempel en ärendeuppdatering.",
          },
          {
            type: "ol",
            items: [
              "Kunden klickar på din t.me-länk på din webbplats eller i ett e-postmeddelande och trycker på Start.",
              "Boten hälsar och visar en kort meny med vanliga ämnen.",
              "Enkla frågor får svar direkt; för allt annat samlas uppgifter in (ordernummer, beskrivning, skärmbilder).",
              "Boten skapar ett ärende i din helpdesk och berättar för kunden vad som händer härnäst.",
              "När en agent svarar i helpdesken skickas svaret tillbaka till samma Telegram-chatt.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks eller long polling",
        blocks: [
          {
            type: "p",
            text: "Bot API erbjuder två sätt att ta emot uppdateringar, och de utesluter varandra: metoden getUpdates (long polling) och webhooks. Medan en webhook är inställd fungerar inte getUpdates. Oavsett vilket sparar Telegram uppdateringar som du inte har tagit emot i högst 24 timmar, så en bot som är offline i ett dygn förlorar meddelanden.",
          },
          {
            type: "table",
            caption: "Välj hur din bot tar emot meddelanden",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Så fungerar det", "Din server frågar Telegram efter nya uppdateringar", "Telegram skickar varje uppdatering till din HTTPS-URL"],
              ["Hosting", "Vilken server som helst som kan göra utgående anrop", "En publik HTTPS-endpoint på port 443, 80, 88 eller 8443"],
              ["Kontroll av avsändaren", "Behövs inte, din server gör anropen", "Ange en secret_token; Telegram skickar tillbaka den i headern X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "För att byta från en webhook tillbaka till polling tar du bort webhooken med deleteWebhook eller genom att anropa setWebhook med en tom URL. Båda metoderna accepterar drop_pending_updates om du vill slänga den köade eftersläpningen när du ändrar din uppsättning.",
          },
        ],
      },
      {
        heading: "Knappar och menyer för supportflöden",
        blocks: [
          {
            type: "p",
            text: "Supportbottar fungerar bättre med knappar än med fritext. Anpassade svarstangentbord (custom reply keyboards) ersätter användarens tangentbord med förinställda svar, och ett tryck på ett av dem skickar den texten till chatten. Inline-tangentbord fäster knappar vid ett specifikt meddelande och postar inget i chatten när man trycker på dem. En inline-knapp kan öppna en URL eller skicka callback-data på 1–64 byte till din bot.",
          },
          {
            type: "p",
            text: "Två detaljer ställer ofta till det för nya bottar. När en användare har tryckt på en callback-knapp visar Telegram-klienterna en förloppsindikator tills din bot anropar answerCallbackQuery, så besvara varje callback, även utan text. Och i menyer med flera steg: redigera det befintliga meddelandet med nya knappar i stället för att skicka ett nytt meddelande varje gång; redigering fungerar för meddelanden som har inline-tangentbord.",
          },
        ],
      },
      {
        heading: "Grupper, sekretessläge och sändningsgränser",
        blocks: [
          {
            type: "p",
            text: "Bottar som läggs till i grupper körs som standard i sekretessläge (privacy mode). I det läget tar en bot emot kommandon som riktas till den, svar på dess egna meddelanden, meddelanden som skickats via boten och tjänstemeddelanden, men inte vanligt gruppsnack. Bottar som är gruppadministratörer tar emot alla meddelanden, och du kan stänga av sekretessläget med /setprivacy i @BotFather, även om Telegram bara rekommenderar det när det är absolut nödvändigt. Meddelanden i privata chattar med boten når den alltid.",
          },
          {
            type: "table",
            caption: "Ungefärliga gränser enligt Telegrams Bots FAQ",
            head: ["Var", "Riktlinje"],
            rows: [
              ["En enskild chatt", "Undvik mer än ett meddelande per sekund; korta skurar kan gå igenom innan 429-fel börjar komma"],
              ["En grupp", "Högst 20 meddelanden per minut"],
              ["Massutskick", "Omkring 30 meddelanden per sekund till olika användare, om du inte aktiverar betalda utskick (paid broadcasts)"],
            ],
          },
          {
            type: "p",
            text: "Telegrams FAQ anger dessa som ungefärliga siffror, så bygg in nya försök vid 429-fel i stället för att förlita dig på exakta tal. För en supportbot spelar de främst roll när du meddelar många kunder samtidigt, till exempel om ett driftavbrott. Med long polling ska du också skicka parametern offset till getUpdates: uppdateringar upp till det ID:t markeras som bekräftade och returneras inte igen.",
          },
        ],
      },
      {
        heading: "Överlämning till helpdesk och Telegram Business",
        blocks: [
          {
            type: "p",
            text: "För överlämning från bot till människa är det vanliga mönstret att boten öppnar ett ärende och skickar agenternas svar tillbaka till chatten. Zendesk stöder Telegram som en Sunshine Conversations-kanal i Agent Workspace, vilket kräver Suite Professional eller högre. Meddelanden blir ärenden, och en agents svar i Zendesk visas i kundens meddelandeapp.",
          },
          {
            type: "p",
            text: "Telegram Business är ett separat alternativ för små team som svarar kunder från sitt eget Telegram-konto. Kontoägaren kan ansluta en företagsbot i taget, välja vilka chattar den får åtkomst till och låta den behandla inkommande meddelanden och, där det är tillåtet, svara för ägarens räkning.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger Telegram-bottar för support som kopplas till de verktyg du redan använder, till exempel Zendesk, Freshdesk, Jira, Slack eller interna system, via API:er, webhooks och Make eller n8n. En Starter Chat Bot (350–450 USD) täcker en eller två kanaler med vanliga frågor och enkel insamling av uppgifter, vilket passar Telegram plus en widget på webbplatsen. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta uppsättningar tar 1–3 veckor. Du kan börja med ett kostnadsfritt genomlysningssamtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan en Telegram-bot skriva till kunder först?",
        a: "Nej. En användare måste skriva till boten eller lägga till den i en grupp innan boten kan skriva till hen. Spara chatt-ID:t vid första kontakten så att du kan skicka uppdateringar senare.",
      },
      {
        q: "Ska jag använda webhooks eller getUpdates?",
        a: "Båda fungerar, men inte samtidigt. Webhooks skickar varje uppdatering till din HTTPS-endpoint, medan long polling bara kräver utgående anrop och är enklare under utvecklingen.",
      },
      {
        q: "Varför ser min bot inte meddelanden i en grupp?",
        a: "Bottar körs som standard i sekretessläge och ser bara meddelanden som är avsedda för dem. Gör boten till gruppadministratör, eller stäng av sekretessläget med /setprivacy i @BotFather och lägg till boten i gruppen igen.",
      },
      {
        q: "Stöder Zendesk Telegram?",
        a: "Ja, som en Sunshine Conversations-kanal i Agent Workspace, som enligt Zendesk kräver Suite Professional eller högre. Meddelanden kommer in som ärenden och agenternas svar går tillbaka till Telegram.",
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
    slug: "facebook-messenger-bot-kundtjanst",
    category: "channels",
    navLabel: "Messenger-bot för kundtjänst",
    primaryKeyword: "Facebook Messenger-bot för kundtjänst",
    title: "Facebook Messenger-bot för kundtjänst: regler och upplägg",
    description:
      "Så fungerar en Facebook Messenger-bot för kundtjänst: webhooks, 24-timmarsfönstret, taggen HUMAN_AGENT, överlämning till agenter och Metas regler för bottar.",
    h1: "Facebook Messenger-bot för kundtjänst: fönster, taggar och överlämning",
    intro:
      "En Facebook Messenger-bot för kundtjänst kopplas till din Facebook-sida via Metas Messenger Platform: inkommande meddelanden når din server via webhooks, och boten svarar via Send API. Du kan svara i 24 timmar efter varje kundmeddelande, och en mänsklig agent kan svara i upp till 7 dagar med taggen HUMAN_AGENT när din app har godkänts för den.",
    keyFacts: [
      "Med standardmeddelanden kan du svara inom 24 timmar efter en persons meddelande.",
      "Taggen HUMAN_AGENT tillåter svar från människor inom 7 dagar, efter att appen har godkänts.",
      "Sedan 27 april 2026 returnerar taggarna CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE och POST_PURCHASE_UPDATE ett fel.",
      "Där lagen kräver det måste en bot upplysa om att man pratar med en automatiserad tjänst.",
      "Metas policy förväntar sig att automatiserade upplevelser svarar på användarens inmatning inom 30 sekunder.",
    ],
    sections: [
      {
        heading: "Så hänger Messenger Platform ihop",
        blocks: [
          {
            type: "p",
            text: "En Messenger-bot är en Meta-app som är kopplad till en eller flera Facebook-sidor. Appen prenumererar på varje sida via sidans subscribed_apps-edge, vilket kräver behörigheterna pages_messaging och pages_manage_metadata. Meta skickar sedan händelser som nya meddelanden och knapptryckningar till din webhook, och din bot svarar via Send API.",
          },
          {
            type: "table",
            caption: "Webhook-händelser som en supportbot ofta använder",
            head: ["Händelse", "Vad den säger din bot"],
            rows: [
              ["messages", "En kund har skickat ett meddelande till din sida"],
              ["messaging_postbacks", "En kund har tryckt på en postback-knapp, knappen Get Started eller ett alternativ i den beständiga menyn"],
              ["messaging_handovers", "Kontrollen över konversationen har lämnats över, tagits eller ändrats mellan appar"],
              ["standby", "Ett meddelande kom in medan en annan app hade kontrollen över konversationen"],
            ],
          },
          {
            type: "p",
            text: "Meta ger dig också fasta ingångspunkter. Ett tryck på knappen Get Started skickar en postback, vilket är ett bra tillfälle för ett välkomstmeddelande. En beständig meny (persistent menu) med upp till 20 alternativ kan innehålla alternativet ”Prata med en person”; den visas bara när en Get Started-knapp har ställts in.",
          },
        ],
      },
      {
        heading: "24-timmarsfönstret och meddelandetaggar",
        blocks: [
          {
            type: "p",
            text: "Messengers standardfönster för meddelanden ger dig 24 timmar att svara efter att en person har skrivit till din sida, och meddelanden inom fönstret får innehålla marknadsföring. Om du skickar ett vanligt meddelande efter att fönstret har stängts returnerar Send API felet 1545041.",
          },
          {
            type: "table",
            caption: "Vad Meta tillåter efter att en kund har skrivit",
            head: ["Tidpunkt eller användningsfall", "Vad du kan skicka", "Kommentarer"],
            rows: [
              ["Inom 24 timmar efter kundens meddelande", "Standardmeddelanden från boten eller en agent", "Marknadsföring är tillåten inom det här fönstret"],
              ["Upp till 7 dagar efter kundens meddelande", "Ett svar från en människa med taggen HUMAN_AGENT", "Kräver att appen godkänns; inte för automatiserade meddelanden eller marknadsföring"],
              ["Uppdateringar om evenemang, köp eller konton", "Inte de gamla taggarna: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE och POST_PURCHASE_UPDATE returnerar ett fel sedan 27 april 2026", "Meta hänvisar till utility-mallar eller Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta begränsar HUMAN_AGENT till ärenden som inte kan lösas inom standardfönstret, till exempel en förfrågan som kommer in medan ditt företag har helgstängt eller ett ärende som tar mer än ett dygn. Automatiserade meddelanden är en otillåten användning av taggen, så boten kan inte använda den för att skicka sena uppföljningar på egen hand.",
          },
        ],
      },
      {
        heading: "Att lämna över konversationer från boten till en person",
        blocks: [
          {
            type: "p",
            text: "Flera appar kan arbeta på samma sida, till exempel din bot och en helpdesk. Med handover-protokollet kan du lämna över en konversation från en app eller inkorg till en annan, och webhooken messaging_handovers rapporterar när kontrollen lämnas över, tas eller ändras. Appar som inte har kontroll över tråden får standby-händelser i stället för vanliga meddelandehändelser.",
          },
          {
            type: "p",
            text: "Meta har successivt flyttat detta mot Conversation Routing. En uppdatering 2021 tog bort behovet av att tilldela primära och sekundära roller och lade till lägena Exclusive och Idle. Routingregler kan nu hanteras i sidans inställningar, och när Conversation Routing är aktiverat returnerar Conversations API ett is_owner-fält så att din app bara svarar i trådar som den kontrollerar.",
          },
          {
            type: "ul",
            items: [
              "Erbjud en tydlig väg ut: Metas dokumentation nämner eskalering via en reservavsikt (fallback intent), ett nyckelord eller snabbsvar.",
              "Innan du lämnar över kontrollen, posta en kort sammanfattning (ämne, ordernummer, vad boten redan har försökt) där agenten kommer att se den.",
              "Berätta för kunden vad som händer härnäst, inklusive dina öppettider om ingen är online.",
              "När agenten är klar, lämna tillbaka kontrollen till boten så att nästa fråga besvaras automatiskt.",
            ],
          },
        ],
      },
      {
        heading: "Policyregler som formar boten",
        blocks: [
          {
            type: "ul",
            items: [
              "Upplysning: när tillämplig lag kräver det måste automatiserade chattupplevelser upplysa om att personen pratar med en automatiserad tjänst, till exempel i början av en konversation eller när en människa lämnar tillbaka till automatiseringen. Meta föreslår att man upplyser om det även där det inte krävs och nämner särskilt Kalifornien och Tyskland.",
              "Svarstid: helt automatiserade upplevelser måste svara på all inmatning från användaren inom 30 sekunder. Hybridlösningar som blandar bottar och människor bör uppdatera svarsinställningen i ”Page Settings” under ”Advanced Messaging”.",
              "Ingen marknadsföring i taggade meddelanden: meddelandetaggar får inte användas för reklam, marknadsföring eller försäljningsförsök.",
              "Godkännande av appen: din app måste godkännas innan den kan använda taggen HUMAN_AGENT.",
            ],
          },
        ],
      },
      {
        heading: "Koppla Messenger till din helpdesk",
        blocks: [
          {
            type: "p",
            text: "De flesta helpdeskar kan ta emot Messenger-konversationer som ärenden. I Zendesk är Messenger en meddelandekanal i Agent Workspace, och Zendesk dokumenterar några praktiska begränsningar:",
          },
          {
            type: "ul",
            items: [
              "Agenter har sju dagar på sig att svara innan meddelandefönstret stängs, och därefter blockeras svarsrutan.",
              "Svar som en agent skickar direkt i Messenger synkroniseras inte tillbaka till Zendesk, så agenterna bör svara från Zendesk.",
              "Meddelanden som är längre än 2 000 tecken levereras inte.",
            ],
          },
          {
            type: "p",
            text: "Om din bot körs som en separat app, bestäm vilken app som har kontroll över tråden som standard och när kontrollen flyttas; annars kan både boten och helpdesken svara samma kund.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger Messenger-bottar som fungerar ovanpå Zendesk, Freshdesk, Jira, Slack eller dina interna verktyg, med API:er, webhooks och Make eller n8n. En Starter Chat Bot (350–450 USD) täcker en eller två kanaler; en Standard Chat Bot (500–650 USD) täcker tre till fem kanaler, till exempel Messenger, Instagram och WhatsApp, med mer komplexa samtal och smidigare överlämningar. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta uppsättningar tar 1–3 veckor. Boka ett kostnadsfritt genomlysningssamtal på 30 minuter för att kartlägga ditt nuvarande Messenger-flöde.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hur lång tid har jag på mig att svara i Messenger?",
        a: "Du kan skicka standardmeddelanden inom 24 timmar efter en persons meddelande. En mänsklig agent kan svara upp till 7 dagar senare med taggen HUMAN_AGENT, när din app har godkänts för den.",
      },
      {
        q: "Kan min bot använda taggen HUMAN_AGENT?",
        a: "Nej. Meta anger automatiserade meddelanden som en otillåten användning av taggen. Den är avsedd för svar från människor när ett ärende inte kan lösas inom 24 timmar.",
      },
      {
        q: "Vad har ersatt taggarna ACCOUNT_UPDATE och POST_PURCHASE_UPDATE?",
        a: "De taggarna, tillsammans med CONFIRMED_EVENT_UPDATE, returnerar ett fel sedan 27 april 2026. Meta rekommenderar utility-mallar eller Marketing Messages API för de användningsfallen.",
      },
      {
        q: "Måste jag tala om för användarna att de pratar med en bot?",
        a: "Metas policy kräver upplysning där tillämplig lag kräver det och rekommenderar det i övrigt. Att säga det i början av konversationen är det enklaste sättet.",
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
    slug: "instagram-dm-automatisering",
    category: "channels",
    navLabel: "Automatisering av Instagram-DM",
    primaryKeyword: "automatisera Instagram-DM",
    title: "Automatisera Instagram-DM för kundtjänst: så är reglerna",
    description:
      "Automatisering av Instagram-DM förklarad: krav på professionellt konto, 24-timmarsfönstret, taggen human agent, privata svar på kommentarer och ice breakers.",
    h1: "Automatisera Instagram-DM i kundtjänsten",
    intro:
      "Att automatisera Instagram-DM innebär att koppla en bot till direktmeddelandena i ett professionellt Instagram-konto via Metas API:er, så att rutinfrågor får svar direkt och resten når en person. Boten kan bara svara efter att någon har skrivit till dig och har 24 timmar på sig att göra det; mänskliga agenter kan svara i upp till 7 dagar med taggen human agent.",
    keyFacts: [
      "Instagrams API:er för meddelanden fungerar med professionella konton (företags- eller kreatörskonton).",
      "Din app kan bara skicka meddelanden till en användare efter att användaren har skrivit till dig, och har sedan 24 timmar på sig att svara.",
      "Taggen human agent tillåter svar inom 7 dagar, efter appgranskning.",
      "Privata svar på kommentarer kan skickas inom 7 dagar efter kommentaren.",
      "På Instagram har Meta ersatt handover-protokollet med Conversation Routing.",
    ],
    sections: [
      {
        heading: "Det här behöver du innan du automatiserar Instagram-DM",
        blocks: [
          {
            type: "p",
            text: "Instagrams API:er för meddelanden fungerar med professionella konton. Det finns två typer: företagskonton, för återförsäljare, lokala företag, varumärken, organisationer och tjänsteleverantörer, och kreatörskonton, för offentliga personer, innehållsskapare, konstnärer och influencers. Observera att ett privat personligt konto blir offentligt när det byts till ett professionellt konto.",
          },
          {
            type: "table",
            caption: "Två sätt att koppla in meddelanden på Instagram",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Facebook-sida", "Krävs inte", "Instagram-kontot måste vara länkat till en Facebook-sida"],
              ["Skicka meddelanden", "Instagram User access token med behörigheten instagram_business_manage_messages", "Samma endpoint /PAGE_ID/messages som Messenger, med kundens Instagram-specifika ID (Instagram-scoped ID)"],
              ["Inkommande meddelanden", "Webhooks för meddelanden", "Webhook-fältet messages, tillsammans med Messenger-meddelanden"],
              ["Passar bra för", "Företag och kreatörer som bara finns på Instagram", "Team som redan har en Messenger-bot eller en helpdesk som är kopplad till Meta"],
            ],
          },
          {
            type: "p",
            text: "Oavsett vilket måste kontoägaren tillåta åtkomst till meddelanden under ”Connected tools” i Instagrams meddelandeinställningar, annars kan API:et inte hantera konversationerna. Zendesk påpekar att den här inställningen måste slås på i Instagrams mobilapp, inte på webben. Om din app betjänar professionella konton som du inte äger eller hanterar behöver den också Advanced Access via Metas appgranskning.",
          },
        ],
      },
      {
        heading: "Meddelandefönster och taggen human agent",
        blocks: [
          {
            type: "p",
            text: "Din app kan bara skicka meddelanden till någon efter att personen har skrivit till ditt konto, och den har 24 timmar på sig att svara på varje meddelande. För ärenden som tar längre tid, till exempel en förfrågan som kommer in medan ditt företag har helgstängt, låter taggen human agent en person svara inom 7 dagar. Taggen är bara tillgänglig för appar som har gått igenom appgranskningen.",
          },
          {
            type: "table",
            caption: "Begränsningar för Instagram-DM som är värda att känna till",
            head: ["Regel", "Vad den innebär för din bot"],
            rows: [
              ["Svarsfönster på 24 timmar", "Automatiserade svar måste skickas inom 24 timmar efter kundens meddelande"],
              ["Taggen human agent (7 dagar)", "Sena svar kommer från en person, efter appgranskning"],
              ["Inga gruppmeddelanden", "Gruppkonversationer stöds inte av API:et"],
              ["Mappen ”Requests”", "Konversationer i ”Requests” som har varit inaktiva i 30 dagar returneras inte av API:et"],
            ],
          },
        ],
      },
      {
        heading: "Från kommentar till DM: privata svar",
        blocks: [
          {
            type: "p",
            text: "Många supportfrågor börjar i kommentarerna, till exempel ”Finns den här i lager?” eller ”Hur returnerar jag den?”. Med privata svar (private replies) kan ditt konto svara på en kommentar med ett direktmeddelande till den som kommenterade. De fungerar för kommentarer på inlägg, reels och annonser samt för kommentarer i Instagram Live. Ett privat svar är ett enda meddelande som skickas inom 7 dagar efter kommentaren, och det innehåller automatiskt en länk till inlägget eller kommentaren.",
          },
          {
            type: "p",
            text: "Privata svar kräver inte längre taggen human agent. Om personen svarar på ditt privata svar startar det meddelandet en vanlig konversation, och det vanliga 24-timmarsfönstret gäller. Ett praktiskt upplägg: bevaka kommentarer efter supportrelaterade nyckelord, skicka ett privat svar med ett svar eller en fråga och låt DM-boten ta över därifrån – och håll ordernummer och personuppgifter borta från offentliga kommentarer.",
          },
        ],
      },
      {
        heading: "Ice breakers och ingångspunkter",
        blocks: [
          {
            type: "p",
            text: "Ice breakers är förinställda frågor som folk kan trycka på när de startar en ny konversation med ditt konto, till exempel ”Var är min beställning?” eller ”Prata med supporten”. När någon trycker på en får din app en webhook-händelse av typen messaging_postback, så varje ice breaker kan starta ett eget botflöde. Ice breakers kan ställas in på flera språk, och rätt version visas utifrån användarens språkinställning (locale). Använd dem för dina vanligaste supportfrågor, routa var och en till ett specifikt flöde och följ upp vilka som faktiskt används, så att du kan byta ut dem som ingen trycker på.",
          },
          {
            type: "p",
            text: "ig.me-länkar kan skicka med en referral-parameter in i en konversation, till exempel för att tala om för boten vilken produktsida kunden kom från. För nya konversationer kräver Meta att ice breakers är inställda för att referral-parametern ska komma fram.",
          },
        ],
      },
      {
        heading: "Att lämna över DM till en människa",
        blocks: [
          {
            type: "p",
            text: "På Instagram stöder Meta inte längre handover-protokollet och har flyttat alla företag till Conversation Routing. Med det kan du lämna över kontrollen över tråden till Instagram-inkorgen eller till en inkorg från tredje part, till exempel en helpdesk. Vid appgranskningen förväntar sig Meta att du visar att trådens ägarskap flyttas till inkorgen när en eskalering sker och att agenten kan svara därifrån.",
          },
          {
            type: "p",
            text: "Två egenheter är värda att känna till. Svar som skickas via en tredjepartsapp flyttar tråden till mappen ”General”, och meddelanden som levereras via plattformen innehåller inte den mappinformation som visas i Instagram-appen. I Zendesks kanal Instagram Direct läggs svar som görs direkt i Instagram inte till i ärendet, så agenterna bör svara från Zendesk.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLab sätter upp DM-bottar för Instagram som besvarar vanliga frågor, samlar in uppgifter och lämnar över konversationer till ditt team i Zendesk, Freshdesk, Jira, Slack eller ett internt verktyg, byggda med API:er, webhooks och Make eller n8n. En Starter Chat Bot (350–450 USD) täcker en eller två kanaler; en Standard Chat Bot (500–650 USD) täcker tre till fem, till exempel Instagram, Messenger och din webbplats. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta uppsättningar tar 1–3 veckor. Det kostnadsfria genomlysningssamtalet på 30 minuter är stället att börja.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag automatisera DM på ett personligt Instagram-konto?",
        a: "Nej. Metas API:er för meddelanden fungerar med professionella konton, som kan vara företags- eller kreatörskonton.",
      },
      {
        q: "Behöver jag en Facebook-sida för att automatisera Instagram-DM?",
        a: "Inte med Instagram API with Instagram Login, som inte kräver en länkad sida. Instagram Messaging API via Messenger Platform kräver däremot en.",
      },
      {
        q: "Hur länge kan jag vänta innan jag svarar på ett DM?",
        a: "Automatiserade svar måste skickas inom 24 timmar efter kundens meddelande. En mänsklig agent kan svara upp till 7 dagar senare med taggen human agent, efter att din app har godkänts i granskningen.",
      },
      {
        q: "Kan jag skicka ett DM till någon som har kommenterat mitt inlägg?",
        a: "Ja, med ett privat svar: ett enda meddelande som skickas inom 7 dagar efter kommentaren och som automatiskt innehåller en länk till inlägget eller kommentaren.",
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
    slug: "chattbot-webbplats-kundtjanst",
    category: "channels",
    navLabel: "Chattbot på webbplatsen",
    primaryKeyword: "chattbot på webbplatsen för kundtjänst",
    title: "Chattbot på webbplatsen för support: upplägg och överlämning",
    description:
      "Planera en chattbot på webbplatsen för kundtjänst: widgetar från Zendesk och Freshchat, överlämning till agent, tid utanför öppettider och WCAG-tillgänglighet.",
    h1: "Chattbot på webbplatsen för kundtjänst: widgetar, överlämning och tillgänglighet",
    intro:
      "En chattbot på webbplatsen för kundtjänst är en chattwidget på din webbplats eller i ditt hjälpcenter där en bot besvarar vanliga frågor, samlar in uppgifter och lämnar över samtalet till en agent i realtid när den inte kan hjälpa till. De flesta helpdeskar har en egen widget, så det verkliga arbetet ligger i att konfigurera botflödena, överlämningen, beteendet utanför öppettiderna och tillgängligheten.",
    keyFacts: [
      "Zendesks Web Widget för meddelanden installeras genom att ett kodstycke läggs till på varje sida där den ska visas.",
      "Zendesk Messaging kan visa olika svar under och utanför öppettiderna.",
      "Freshdesks AI-agenter kan ställas in så att de samlar in kunduppgifter innan de för över till en människa.",
      "WCAG 2.2 kräver att all funktionalitet går att använda via tangentbord (2.1.1, nivå A).",
      "W3C:s teknik med role=\"log\" gör att skärmläsare läser upp nya chattmeddelanden när de kommer in.",
    ],
    sections: [
      {
        heading: "Helpdeskens egen widget eller en egen lösning?",
        blocks: [
          {
            type: "p",
            text: "Om du redan använder en helpdesk, börja med dess widget. Chattarna hamnar i samma kö som e-post och sociala meddelanden, agenterna svarar från en och samma arbetsyta, och leverantören underhåller widgetkoden.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (messaging): i Admin Center går du till Channels > Messaging and social > Messaging, öppnar widgeten och kopierar koden från avsnittet ”Installation”. Lägg till den i källkoden på varje sida där widgeten ska visas, och se till att din brandvägg tillåter widgeten.",
              "Freshchats webbwidget (Freshdesk): kopiera inbäddningskoden från inställningarna för webbchattkanalen och lägg till den på varje sida där widgeten ska visas. Freshworks dokumenterar också installation i WordPress, Shopify och Squarespace samt i iOS- och Android-appar.",
            ],
          },
          {
            type: "table",
            caption: "Att välja widget",
            head: ["Alternativ", "Passar bra när", "Se upp med"],
            rows: [
              ["Helpdeskens egen widget", "Du vill ha chattar, ärenden och rapportering på ett ställe", "Utseende och botlogik är begränsade till det leverantören stöder"],
              ["Helpdeskens widget med en egen bot", "Du behöver logik eller integrationer som den inbyggda boten saknar", "Överlämning och överföring av sammanhang måste kopplas ihop och testas"],
              ["Helt egenutvecklad widget", "Chatten är en del av din produkts gränssnitt", "Du ansvarar själv för tillgänglighet, drifttid och integrationen på agentsidan"],
            ],
          },
        ],
      },
      {
        heading: "Utforma överlämningen från bot till människa",
        blocks: [
          {
            type: "p",
            text: "Det är i överlämningen som de flesta webbplatsbottar fallerar. En bra överlämning för kunden vidare till en person utan att hen behöver upprepa sig. Båda de stora helpdeskarna stöder det här mönstret:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: när en AI-agent läggs till i en meddelandekanal ersätts standardsvaret för meddelanden med AI-agentens egna svar. I Zendesks arbetsflödesrecept hälsar AI-agenten på kunden, visar ett formulär för att samla in det agenterna behöver, berättar för kunden att förfrågan skickas till teamet och vidarebefordrar sedan konversationen till en agent, som får en avisering och ser uppgifterna när hen accepterar den. Receptet använder ett kortare formulär för inloggade kunder, utan namn och e-postadress.",
              "Freshchat och Freshdesk: botflöden lämnar över med åtgärder som ”Assign to group” eller ”Make available for assignment”, och Freshdesks inställningar för överlämning från AI-agenter innehåller ett alternativ för att samla in kunduppgifter före överföringen.",
            ],
          },
          {
            type: "p",
            text: "Bestäm vad som ska samlas in utifrån vad dina agenter frågar först. Typiska fält är namn och e-postadress för besökare som inte är inloggade, ett order- eller kontonummer, ärendetypen vald med knappar, en kort beskrivning med kundens egna ord och sidan kunden befann sig på.",
          },
        ],
      },
      {
        heading: "Täckning utanför öppettiderna",
        blocks: [
          {
            type: "p",
            text: "En widget som lovar ”en agent är strax hos dig” klockan 2 på natten gör mer skada än ingen chatt alls. Planera vad som händer när ingen är online:",
          },
          {
            type: "ul",
            items: [
              "Ställ in öppettider: meddelandekanaler i Zendesk kan använda ett schema för öppettider och visa olika svar under och utanför dessa tider.",
              "Gör chattar till ärenden: i Zendesks recept eskalerar AI-agenten till en agent i realtid under öppettiderna, och utanför dem samlar den in kundens uppgifter och eskalerar förfrågan som ett e-postärende för uppföljning.",
              "Låt boten svara på det den kan: svar på vanliga frågor, uppslag av orderstatus och länkar till hjälpcentret fungerar dygnet runt.",
              "Säg när du svarar: berätta för kunden om dina öppettider och var svaret kommer att komma, till exempel via e-post.",
            ],
          },
        ],
      },
      {
        heading: "Grundläggande tillgänglighet för chattwidgetar",
        blocks: [
          {
            type: "p",
            text: "En chattwidget är interaktivt innehåll som ligger ovanpå din webbplats, så den måste hålla samma tillgänglighetsnivå som resten av sidan. WCAG 2.2 är den aktuella versionen från W3C, och följande framgångskriterier är särskilt relevanta för chatt:",
          },
          {
            type: "table",
            caption: "WCAG 2.2-kriterier att kontrollera i en chattwidget",
            head: ["Kriterium", "Nivå", "Vad det innebär för en chattwidget"],
            rows: [
              ["2.1.1 Keyboard", "A", "Att öppna widgeten, skriva, välja knappar och stänga den fungerar utan mus"],
              ["2.4.7 Focus Visible", "AA", "Användarna kan se vilken knapp eller vilket fält som har tangentbordsfokus"],
              ["2.4.11 Focus Not Obscured (Minimum)", "AA", "Startknappen eller den öppna chattpanelen döljer inte helt det element på sidan som har fokus"],
              ["4.1.2 Name, Role, Value", "A", "Anpassade knappar, menyer och startknappen exponerar sina namn och tillstånd för hjälpmedel"],
              ["4.1.3 Status Messages", "AA", "Uppdateringar som ”Meddelandet har skickats” läses upp utan att fokus flyttas"],
            ],
          },
          {
            type: "p",
            text: "För själva konversationen markerar W3C-tekniken ARIA23 chatthistoriken med role=\"log\": nya meddelanden läggs till i slutet av regionen och skärmläsare läser upp dem när de dyker upp. Med en widget från en leverantör bör du testa din egen konfiguration med tangentbord och skärmläsare, eftersom anpassade färger och botinnehåll fortfarande kan skapa problem.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLab sätter upp chattbottar på webbplatser ovanpå den helpdesk du redan använder, till exempel Zendesk eller Freshdesk, eller kopplar en egen bot till Jira, Slack eller interna verktyg via API:er, webhooks och Make eller n8n. En Starter Chat Bot (350–450 USD) täcker en eller två kanaler med vanliga frågor och enkel insamling av uppgifter; en Standard Chat Bot (500–650 USD) täcker tre till fem kanaler med mer komplexa samtal och smidigare överlämningar. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, utan dolda avgifter, och de flesta uppsättningar tar 1–3 veckor. Börja med ett kostnadsfritt genomlysningssamtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Behöver jag ett separat chattbotverktyg om min helpdesk har en widget?",
        a: "Inte nödvändigtvis. Både Zendesk och Freshdesk låter dig koppla en bot eller AI-agent till sin webbwidget. Ett separat verktyg är motiverat när du behöver logik eller integrationer som den inbyggda boten inte erbjuder.",
      },
      {
        q: "Vad ska boten samla in innan den lämnar över till en agent?",
        a: "Det som dina agenter frågar först: oftast kontaktuppgifter för anonyma besökare, ett order- eller kontonummer, ärendetyp och en kort beskrivning. Både Zendesk och Freshdesk stöder insamling av uppgifter före överföringen.",
      },
      {
        q: "Vad ska en chattbot på webbplatsen göra utanför öppettiderna?",
        a: "Svara på det den kan, förklara dina öppettider och göra resten till ett ärende. Zendesks dokumenterade recept samlar in kundens uppgifter utanför öppettiderna och eskalerar förfrågan som ett e-postärende.",
      },
      {
        q: "Vilken tillgänglighetsstandard gäller för en chattwidget?",
        a: "WCAG 2.2 är den aktuella versionen från W3C. Tangentbordsanvändning (2.1.1), synligt fokus (2.4.7), namn och roller för kontroller (4.1.2) och statusmeddelanden (4.1.3) är särskilt relevanta för chatt.",
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
    slug: "sms-automatisering-kundtjanst",
    category: "channels",
    navLabel: "SMS-automatisering för support",
    primaryKeyword: "SMS-automatisering för kundtjänst",
    title: "SMS-automatisering för kundtjänst: webhooks, 10DLC, STOP",
    description:
      "Så fungerar SMS-automatisering för kundtjänst: inkommande webhooks, A2P 10DLC och Toll-Free Verification, avregistrering med STOP, segment och helpdeskärenden.",
    h1: "SMS-automatisering för kundtjänst: så fungerar det och det här ska du ställa in",
    intro:
      "SMS-automatisering för kundtjänst kopplar ett företagsnummer till kod som läser inkommande sms, besvarar enkla frågor och gör allt annat till ärenden. Med en leverantör som Twilio Programmable Messaging skickas varje inkommande sms till din webhook, och din kod svarar via API:et. I USA måste du också registrera numret och respektera avregistreringar med STOP, annars blockeras dina meddelanden.",
    keyFacts: [
      "Twilio skickar varje inkommande sms till din webhook-URL med fält som From, To, Body och MessageSid.",
      "Enligt Twilio behandlar amerikanska operatörer alla meddelanden som skickas från en plattform som Twilio som application-to-person-trafik (A2P).",
      "Meddelanden från oregistrerade amerikanska 10DLC-nummer blockeras med felet 30034, även medan registreringen pågår.",
      "Twilio hanterar som standard STOP och andra vanliga nyckelord för avregistrering på long code-nummer.",
      "Ett SMS-segment i GSM-7 rymmer 160 tecken; ett UCS-2-segment, som krävs för emojier, rymmer 70.",
    ],
    sections: [
      {
        heading: "Så fungerar SMS-automatisering i kundtjänsten",
        blocks: [
          {
            type: "p",
            text: "Du skaffar ett telefonnummer från en SMS-leverantör, pekar dess webhook för inkommande meddelanden mot din kod och skickar svar via leverantörens API. Med Twilio Programmable Messaging blir varje sms som skickas till ditt nummer en HTTP-begäran till din webhook-URL. Begäran innehåller avsändaren i From, ditt nummer i To, meddelandetexten i Body (upp till 1 600 tecken) och ett MessageSid på 34 tecken som du kan använda för att hämta meddelandet senare via REST-API:et.",
          },
          {
            type: "p",
            text: "Din endpoint svarar med TwiML, Twilios XML-format som talar om för Twilio vad som ska hända härnäst, till exempel att ett svar ska skickas. Om din helpdesk ska svara senare och boten inte har något att säga, returnera ett tomt Response-element så att Twilio tar emot meddelandet utan att svara.",
          },
          {
            type: "ol",
            items: [
              "Kunden skickar ett sms till ditt supportnummer.",
              "Twilio skickar meddelandet till din webhook.",
              "Din bot besvarar en vanlig fråga direkt eller ber om uppgifter som ett ordernummer.",
              "Allt som boten inte kan lösa blir ett ärende i din helpdesk, kopplat till kundens telefonnummer.",
              "Agenternas svar går tillbaka till kunden som sms från samma nummer.",
            ],
          },
        ],
      },
      {
        heading: "Registrering i USA: A2P 10DLC och Toll-Free Verification",
        blocks: [
          {
            type: "p",
            text: "Enligt Twilios dokumentation betraktar amerikanska operatörer alla meddelanden som skickas från en plattform som Twilio som application-to-person (A2P). Om du skickar SMS eller MMS till amerikanska nummer från en vanlig tiosiffrig long code (10DLC) måste du registrera dig för A2P 10DLC. Registreringen har två delar: ett varumärke (brand), som talar om för operatörerna vem som skickar, och en kampanj (campaign), som beskriver användningsfallet och hur människor ger samtycke, avregistrerar sig och får hjälp. När kampanjen har godkänts lägger du till ditt nummer i den Messaging Service som är kopplad till den.",
          },
          {
            type: "p",
            text: "Registreringen är inte valfritt pappersarbete. Twilio blockerar meddelanden till USA från 10DLC-nummer som inte är kopplade till en godkänd kampanj, inklusive nummer vars registrering fortfarande pågår, och Twilios meddelandeavgifter gäller ändå för de blockerade meddelandena. Avgiftsfria nummer (toll-free) går igenom en separat process som heter Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Vad Twilio kräver innan du skickar sms till kunder i USA",
            head: ["Typ av avsändare", "Krav", "Vad som händer utan det"],
            rows: [
              ["10DLC long code", "Godkänt varumärke och godkänd kampanj för A2P 10DLC, med numret i kampanjens Messaging Service", "Meddelanden blockeras med felet 30034"],
              ["10DLC, enskild näringsidkare", "Samma registrering, men en kampanj för enskild näringsidkare (sole proprietor) kan bara ha ett registrerat 10DLC-nummer", "Ytterligare nummer i Messaging Service förblir oregistrerade"],
              ["Avgiftsfritt nummer (toll-free)", "Godkänd Toll-Free Verification", "Meddelanden till amerikanska och kanadensiska mobilnummer misslyckas med felet 30032"],
            ],
          },
        ],
      },
      {
        heading: "STOP-nyckelord, avregistreringar och samtycke",
        blocks: [
          {
            type: "p",
            text: "Twilio hanterar engelska standardnyckelord för avregistrering åt dig på long code-nummer. Dokumentationen listar STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT och CANCEL, som matchas oavsett skiftläge. Twilio skickar en standardbekräftelse, och dina meddelanden når inte längre det numret förrän kunden skickar START. På avgiftsfria nummer är det bara START och UNSTOP som registrerar en kund igen. Advanced Opt-Out, som är avstängt som standard, låter dig anpassa nyckelord och svar i en Messaging Service, men reserverade nyckelord som START kan inte tas bort.",
          },
          {
            type: "p",
            text: "Se till att din bot inte skickar något mer till en kund som har avregistrerat sig. Amerikanska regler omfattar också detta. FCC:s beslut från 2024 (FCC 24-24) säger att konsumenter kan återkalla sitt samtycke till robotsamtal och robot-sms på vilket rimligt sätt som helst, att ett svar som stop, quit, end, revoke, opt out, cancel eller unsubscribe räknas som rimligt och att återkallelser måste respekteras inom rimlig tid, högst tio arbetsdagar. Under 2026 antog FCC ett ytterligare beslut (FCC 26-67) som låter avsändare utse en automatiserad metod för återkallelse, till exempel ett svars-sms med standardord som stop, quit eller unsubscribe, förutsatt att metoden tydligt anges, och som begär in synpunkter på att korta tidsgränsen. Kontrollera vilken version av reglerna som gäller när du lanserar.",
          },
          {
            type: "note",
            text: "Detta är en sammanfattning av FCC:s regeltext, inte juridisk rådgivning. Kontrollera de aktuella reglerna med din egen juridiska rådgivare innan du skickar automatiserade sms till kunder i USA.",
          },
        ],
      },
      {
        heading: "Meddelandelängd och segment",
        blocks: [
          {
            type: "p",
            text: "SMS skickas i segment, och varje segment debiteras, så längden på botens svar påverkar kostnaden. Twilios dokumentation anger dessa gränser:",
          },
          {
            type: "table",
            caption: "Segmentstorlekar för SMS enligt Twilios dokumentation",
            head: ["Kodning", "Enskilt meddelande", "Per segment vid uppdelning", "När den används"],
            rows: [
              ["GSM-7", "160 tecken", "153 tecken", "Text som bara använder teckenuppsättningen GSM-7"],
              ["UCS-2", "70 tecken", "67 tecken", "Alla meddelanden med minst ett tecken utanför GSM-7, till exempel en emoji"],
            ],
          },
          {
            type: "p",
            text: "Ett enda tecken som inte ingår i GSM-7 gör att hela meddelandet går över till UCS-2, inte bara det tecknet. Emojier, typografiska citattecken och långa tankstreck är vanliga orsaker, vilket spelar roll när en bot kopierar svar från artiklar i hjälpcentret. Twilios Smart Encoding kan ersätta en del av dessa tecken med motsvarigheter i GSM-7. Utgående meddelandetext kan vara upp till 1 600 tecken, men korta svar med en länk till hela artikeln fungerar oftast bättre.",
          },
        ],
      },
      {
        heading: "Koppla SMS till din helpdesk",
        blocks: [
          {
            type: "p",
            text: "Zendesk erbjuder SMS som Zendesk Text. Ett sms som skickas till ditt Text-nummer skapar automatiskt ett ärende, och offentliga svar i det ärendet går tillbaka till kunden som sms. Zendesk anger också att sms till amerikanska konsumenter från oregistrerade nummer kommer att blockeras, så registrering för A2P 10DLC gäller även där.",
          },
          {
            type: "p",
            text: "Om din helpdesk saknar en SMS-kanal, eller om du behöver logik som den inbyggda inte erbjuder, kan en liten tjänst i mitten sköta det. Den tar emot Twilios webhook, kör boten, skapar eller uppdaterar ärenden via helpdeskens API och skickar agenternas svar tillbaka via Twilio.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLabs listade botkanaler är webbplats, telefon, WhatsApp, Telegram, Facebook Messenger och Instagram. SMS finns inte på den listan, men andra kanaler med ett API kan avgränsas under det kostnadsfria genomlysningssamtalet på 30 minuter. TascaLab bygger ovanpå de verktyg du redan använder, till exempel Zendesk, Freshdesk, Jira och Slack, via API:er, webhooks och Make eller n8n. En Starter Chat Bot kostar 350–450 USD för en eller två kanaler och en Standard Chat Bot 500–650 USD för tre till fem. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, utan dolda avgifter, och de flesta uppsättningar tar 1–3 veckor.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Behöver jag registrera mig för A2P 10DLC för en supportbot via SMS?",
        a: "Ja, om du skickar SMS eller MMS till amerikanska nummer från en tiosiffrig long code via en plattform som Twilio. Twilio blockerar meddelanden till USA från oregistrerade 10DLC-nummer med felet 30034, även medan registreringen pågår.",
      },
      {
        q: "Vad händer när en kund skickar STOP?",
        a: "På long code-nummer hanterar Twilio som standard STOP och andra vanliga nyckelord för avregistrering. Twilio skickar en bekräftelse, och dina meddelanden når inte längre det numret förrän kunden skickar START.",
      },
      {
        q: "Varför räknades ett kort meddelande som två segment?",
        a: "Det innehöll troligen ett tecken utanför GSM-7, till exempel en emoji eller ett typografiskt citattecken. Det gör att hela meddelandet går över till UCS-2, där bara 70 tecken ryms i ett enda segment.",
      },
      {
        q: "Kan jag använda ett avgiftsfritt nummer i stället för ett 10DLC-nummer?",
        a: "Ja, men det kräver Toll-Free Verification. Tills den är godkänd misslyckas meddelanden till amerikanska och kanadensiska mobilnummer med felet 30032.",
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
    slug: "viber-chattbot-kundtjanst",
    category: "channels",
    navLabel: "Viber-chattbot för support",
    primaryKeyword: "Viber-chattbot för kundtjänst",
    title: "Viber-chattbot för kundtjänst: Bot API och regler",
    description:
      "Så fungerar en Viber-chattbot för kundtjänst: autentiseringstoken, set_webhook, callback-händelser, vem boten får skriva till, tangentbord och överlämning.",
    h1: "Viber-chattbot för kundtjänst: så fungerar den och så sätter du upp den",
    intro:
      "En Viber-chattbot för kundtjänst är ett botkonto som är anslutet till Vibers REST Bot API. Din server registrerar en webhook med set_webhook, tar emot callbacks när kunder öppnar chatten eller skickar meddelanden och svarar med send_message med botens autentiseringstoken. Viber-bottar kan bara fortsätta skicka meddelanden till användare som prenumererar, så varje supportkonversation börjar hos kunden.",
    keyFacts: [
      "Varje API-anrop innehåller botens autentiseringstoken i headern X-Viber-Auth-Token.",
      "Webhook-URL:er måste använda SSL; Viber stöder inte självsignerade certifikat.",
      "Callbacks av typen message, subscribed och unsubscribed är obligatoriska och kan inte filtreras bort.",
      "En conversation_started-händelse tillåter ett välkomstmeddelande, inte löpande meddelanden.",
      "Per oktober 2026 anger Vibers utvecklardokumentation att bottar bara kan skapas på kommersiella villkor.",
    ],
    sections: [
      {
        heading: "Så fungerar en Viber-bot för support",
        blocks: [
          {
            type: "p",
            text: "Din bot identifieras av en autentiseringstoken. Varje anrop till REST Bot API måste innehålla den i en HTTP-header som heter X-Viber-Auth-Token; utelämnar du den får du felet missing_auth_token. Du registrerar en publik HTTPS-webhook med set_webhook, Viber postar callbacks till den när saker händer, och du svarar med send_message.",
          },
          {
            type: "p",
            text: "När du anropar set_webhook kontrollerar Viber din URL genom att skicka en callback med händelsen webhook till den. Kontrollen går bara igenom om din server svarar med HTTP-status 200. Ett lyckat svar på set_webhook har status 0; en URL som inte kan nås returnerar status 1, invalidUrl.",
          },
          {
            type: "ol",
            items: [
              "Kunden öppnar din bot via en länk på din webbplats, och Viber skickar en conversation_started-callback.",
              "Din bot skickar ett välkomstmeddelande med knappar för vanliga ämnen.",
              "Kunden svarar, vilket gör att hen börjar prenumerera, och din bot tar emot en message-callback.",
              "Boten besvarar enkla frågor och samlar in uppgifter för allt annat.",
              "Fall som inte löses blir ärenden i helpdesken, och agenternas svar går tillbaka via send_message.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks och callback-händelser",
        blocks: [
          {
            type: "p",
            text: "Webhook-URL:en måste använda SSL med ett giltigt certifikat från en betrodd certifikatutfärdare. Den valfria listan event_types i set_webhook styr vilka callbacks du tar emot, men vissa kan inte stängas av.",
          },
          {
            type: "table",
            caption: "Viber-callbacks som en supportbot hanterar",
            head: ["Händelse", "När den kommer", "Kan du filtrera bort den?"],
            rows: [
              ["webhook", "Direkt efter set_webhook, för att kontrollera din URL", "Nej, den är en del av uppsättningen"],
              ["conversation_started", "En användare öppnar en enskild chatt med boten, till exempel via en djuplänk", "Ja"],
              ["subscribed", "En användare börjar prenumerera på boten (inte när prenumerationen kommer från ett första meddelande)", "Nej"],
              ["unsubscribed", "En användare avslutar sin prenumeration; boten kan inte längre skicka meddelanden till hen", "Nej"],
              ["message", "En användare skickar ett meddelande till boten", "Nej"],
              ["delivered, seen, failed", "Statusuppdateringar för meddelanden som boten har skickat", "Ja"],
            ],
          },
          {
            type: "p",
            text: "Viber signerar varje callback. Headern X-Viber-Content-Signature innehåller en HMAC-SHA256 av begärans body, med din autentiseringstoken som nyckel, så kontrollera den innan du behandlar något. Om din webhook inte returnerar HTTP 200 försöker Viber skicka callbacken flera gånger, så se till att en upprepad callback inte skapar ett dubblettärende.",
          },
        ],
      },
      {
        heading: "Vem din bot får skriva till",
        blocks: [
          {
            type: "p",
            text: "Den här regeln formar varje supportflöde i Viber: din bot kan bara skicka meddelanden till användare som prenumererar. En conversation_started-händelse är ingen prenumeration. Den tillåter ett välkomstmeddelande, som Viber säger att du bör skicka inom 5 minuter via send_message, med parametern receiver. Händelsen utlöses också för användare som redan prenumererar.",
          },
          {
            type: "p",
            text: "En användare börjar prenumerera genom att skicka ett meddelande till boten. Det första meddelandet utlöser en message-callback, inte en subscribed-callback, så spara användar-ID:t från båda händelserna. Användare kan avsluta prenumerationen när som helst, vilket omedelbart blockerar fler meddelanden från boten, och du får en unsubscribed-callback med deras ID. Om de börjar prenumerera igen raderas allt sammanhang och all tracking_data för konversationen.",
          },
          {
            type: "p",
            text: "För att starta konversationer från din webbplats använder du en djuplänk i formatet viber://pa?chatURI= följt av botens URI. Om du lägger till en context-parameter skickas ett värde, till exempel sidan kunden kom från, med in i conversation_started-callbacken. Viber påpekar att vissa webbläsare kanske inte känner igen djuplänken. För meddelanden om driftavbrott skickar broadcast-API:et till upp till 300 mottagare per anrop, och alla som inte prenumererar returneras som misslyckade (failed).",
          },
        ],
      },
      {
        heading: "Skicka meddelanden och tangentbord",
        blocks: [
          {
            type: "p",
            text: "En begäran till send_message anger mottagaren (receiver, användar-ID:t), meddelandetypen och ett sender-objekt vars namn är obligatoriskt och begränsat till 28 tecken. Textmeddelanden kan vara upp till 7 000 tecken. Två valfria fält är användbara för support: tracking_data (upp till 4 096 tecken), som Viber skickar tillbaka med användarens svar och som därför kan innehålla ett ärende-ID eller det aktuella steget i ett flöde, och min_api_version, den lägsta klient-API-version som krävs för meddelandet, som är 1 som standard.",
          },
          {
            type: "p",
            text: "Tangentbord kan fästas vid alla meddelandetyper via fältet keyboard. Varje knapp har en ActionType:",
          },
          {
            type: "ul",
            items: [
              "reply (standard) skickar knappens svar till boten.",
              "open-url öppnar en URL, i Viber eller i en extern webbläsare beroende på OpenURLType, och skickar URL:en till boten.",
              "location-picker, share-phone och none är också tillgängliga.",
            ],
          },
          {
            type: "p",
            text: "Två tangentbordsinställningar hjälper supportflöden. InputFieldState satt till hidden tar bort textfältet när du vill att kunderna ska välja en knapp, och DefaultHeight satt till true håller tangentbordet på samma höjd som det inbyggda tangentbordet.",
          },
        ],
      },
      {
        heading: "Kommersiella villkor och överlämning till helpdesk",
        blocks: [
          {
            type: "p",
            text: "Per oktober 2026 anger Vibers utvecklardokumentation att ”sedan 5.02.24 kan Viber-bottar endast skapas på kommersiella villkor”, med ansökningar som går direkt till Rakuten Viber eller via dess verifierade officiella partner. Fråga Viber eller en partner om aktuella priser innan du bygger. Svaret från send_message innehåller också ett fält för faktureringsstatus som visar hur varje meddelande har kategoriserats för debitering.",
          },
          {
            type: "p",
            text: "För överlämning till agenter listar Zendesk Viber bland de kanaler som finns tillgängliga via Sunshine Conversations. Att lägga till Sunshine Conversations-kanaler i Agent Workspace kräver Suite Professional eller högre, och du måste också använda messaging och Agent Workspace. Meddelanden blir då ärenden, och agenternas svar går tillbaka till kunden. Utan det är det vanliga mönstret en liten tjänst som skapar ärenden via helpdeskens API och skickar agenternas svar med send_message.",
          },
        ],
      },
      {
        heading: "Så kan TascaLab hjälpa till",
        blocks: [
          {
            type: "p",
            text: "TascaLabs listade botkanaler är webbplats, telefon, WhatsApp, Telegram, Facebook Messenger och Instagram. Viber finns inte på den listan, men andra kanaler med ett API kan avgränsas under det kostnadsfria genomlysningssamtalet på 30 minuter. TascaLab bygger ovanpå de verktyg du redan använder, till exempel Zendesk, Freshdesk, Jira och Slack, via API:er, webhooks och Make eller n8n. En Starter Chat Bot kostar 350–450 USD för en eller två kanaler och en Standard Chat Bot 500–650 USD för tre till fem. Varje projekt omfattar 30 dagars support efter lansering och grundläggande dokumentation, utan dolda avgifter, och de flesta uppsättningar tar 1–3 veckor.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan en Viber-bot skriva till kunder först?",
        a: "Bara till användare som prenumererar. En conversation_started-händelse tillåter ett välkomstmeddelande, men löpande meddelanden kräver att användaren prenumererar, vilket sker när hen skickar ett meddelande till boten.",
      },
      {
        q: "Varför misslyckas set_webhook?",
        a: "Viber kontrollerar din URL med en webhook-callback och godkänner den bara om din server returnerar HTTP 200. URL:en måste också använda SSL med ett certifikat från en betrodd utfärdare; självsignerade certifikat stöds inte.",
      },
      {
        q: "Hur kan min bot veta var en kund kom ifrån?",
        a: "Lägg till en context-parameter i din djuplänk viber://pa?chatURI=. Viber skickar den till din bot i conversation_started-callbacken.",
      },
      {
        q: "Kan jag fortfarande skapa en kostnadsfri Viber-bot?",
        a: "Per oktober 2026 anger Vibers utvecklardokumentation att bottar bara kan skapas på kommersiella villkor, direkt via Rakuten Viber eller via dess verifierade officiella partner.",
      },
      {
        q: "Stöder Zendesk Viber?",
        a: "Ja, via Sunshine Conversations. Enligt Zendesk kräver dess Sunshine Conversations-kanaler i Agent Workspace Suite Professional eller högre.",
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
