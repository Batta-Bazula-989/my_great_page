import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "bot-whatsapp-assistenza-clienti",
    category: "channels",
    navLabel: "Bot WhatsApp per l'assistenza",
    primaryKeyword: "bot WhatsApp per assistenza clienti",
    title: "Bot WhatsApp per assistenza clienti: regole e configurazione",
    description:
      "Come funziona un bot WhatsApp per l'assistenza clienti: Business Platform o app, finestra di 24 ore, template, opt-in, costi di base e collegamento all'helpdesk.",
    h1: "Bot WhatsApp per l'assistenza clienti: come funziona e cosa consente Meta",
    intro:
      "Un bot WhatsApp per l'assistenza clienti gira sulla WhatsApp Business Platform (Cloud API), non sull'app gratuita WhatsApp Business. Può rispondere liberamente per 24 ore dopo ogni messaggio del cliente; trascorso quel tempo, puoi raggiungere il cliente solo con un template approvato in anticipo. Costruisci il bot attorno a questa finestra, al tuo processo di opt-in e a un passaggio pulito verso il tuo helpdesk.",
    keyFacts: [
      "Quando un cliente ti scrive o ti chiama, si apre una finestra di assistenza clienti di 24 ore che si azzera a ogni nuovo messaggio.",
      "All'interno della finestra puoi inviare messaggi di servizio in forma libera senza approvazione preventiva.",
      "Fuori dalla finestra, i template sono l'unico tipo di messaggio che puoi inviare.",
      "Prima di scrivere alle persone ti serve un opt-in che indichi chiaramente il nome della tua azienda.",
      "Meta fattura per messaggio consegnato, in base alla categoria del messaggio e al paese del destinatario.",
    ],
    sections: [
      {
        heading: "App WhatsApp Business o WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp offre due prodotti per le aziende, e solo uno è pensato per i bot. L'app WhatsApp Business è un'app gratuita per le piccole imprese che rispondono ai clienti a mano e usano risposte automatiche di base. La WhatsApp Business Platform è un insieme di API per le aziende medie e grandi. Cloud API è il suo prodotto di messaggistica principale, ed è a questo che si collegano chatbot, helpdesk e CRM.",
          },
          {
            type: "table",
            caption: "App e Platform a colpo d'occhio",
            head: ["", "App WhatsApp Business", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Pensata per", "Piccole imprese che rispondono a mano", "Aziende medie e grandi che collegano bot e strumenti di assistenza"],
              ["Costo", "Download e uso gratuiti", "Costi per messaggio stabiliti da Meta"],
              ["Configurazione", "Installazione da un app store", "Risorse per sviluppatori o un Business Messaging Partner"],
              ["Automazione", "Risposte automatiche di base", "Chatbot, flussi di messaggi, integrazioni con CRM e helpdesk"],
            ],
          },
          {
            type: "p",
            text: "Se usi già l'app, Meta supporta l'onboarding di un numero esistente dell'app WhatsApp Business su Cloud API, così entrambe possono funzionare sullo stesso numero. Dopo l'onboarding, i messaggi inviati dall'app non sono soggetti alla finestra di assistenza clienti, mentre quelli inviati tramite Cloud API sì, e alcune funzioni dell'app, come le chat di gruppo, non sono supportate lato API. Verifica che il tuo helpdesk supporti questa configurazione prima di farci affidamento.",
          },
        ],
      },
      {
        heading: "La finestra di assistenza clienti di 24 ore",
        blocks: [
          {
            type: "p",
            text: "Ogni flusso di assistenza su WhatsApp dipende da un timer. Quando un cliente scrive o chiama la tua azienda, parte una finestra di assistenza clienti di 24 ore, e ogni suo nuovo messaggio o chiamata la riporta a 24 ore. Finché è aperta, il tuo bot o i tuoi operatori possono inviare messaggi di servizio in forma libera tramite l'API, senza approvazione preventiva.",
          },
          {
            type: "p",
            text: "Quando la finestra si chiude, i template sono gli unici messaggi che puoi inviare. I template sono formati prestabiliti che vanno approvati prima dell'uso, e ognuno appartiene a una categoria: marketing (promozioni), utility (seguiti a qualcosa che il cliente ha fatto o chiesto) o authentication (verifica dell'identità).",
          },
          {
            type: "table",
            caption: "Cosa puoi inviare e quando",
            head: ["Situazione", "Cosa puoi inviare"],
            rows: [
              ["Il cliente ha scritto nelle ultime 24 ore", "Messaggi di servizio in forma libera dal tuo bot o dai tuoi operatori"],
              ["Finestra chiusa, devi aggiornare il cliente su un ticket o un ordine", "Un template utility approvato"],
              ["Devi verificare l'identità del cliente", "Un template authentication approvato"],
              ["Vuoi promuovere qualcosa", "Un template marketing approvato, inviato solo agli utenti che hanno dato l'opt-in"],
              ["Il cliente risponde al tuo template", "La sua risposta apre una nuova finestra di 24 ore, quindi le risposte in forma libera tornano possibili"],
            ],
          },
          {
            type: "p",
            text: "Per un bot di assistenza questo si traduce in due regole pratiche: rispondi all'interno della finestra ogni volta che puoi, e prepara in anticipo template utility per i seguiti tardivi, come “il tuo ticket è stato aggiornato” o “ci serve un ultimo dettaglio”.",
          },
        ],
      },
      {
        heading: "Le regole sull'opt-in che il tuo bot deve rispettare",
        blocks: [
          {
            type: "p",
            text: "Meta richiede alle aziende di ottenere il consenso (opt-in) prima di scrivere alle persone su WhatsApp. L'opt-in non deve per forza essere specifico per WhatsApp, ma deve dire chiaramente che la persona accetta di ricevere messaggi dalla tua azienda e deve indicare il nome della tua azienda. Sei tu responsabile di scegliere un metodo di opt-in conforme alle leggi che si applicano al tuo caso. Meta elenca questi metodi:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Il tuo sito web",
              "Una telefonata con un flusso di risposta vocale interattiva (IVR)",
              "Di persona o su carta",
            ],
          },
          {
            type: "p",
            text: "Meta consiglia inoltre un opt-in che copra ogni tipo di messaggio che intendi inviare, oltre a istruzioni chiare per revocarlo (opt-out). In pratica, raccogli e registra l'opt-in ovunque i clienti ti diano per la prima volta il loro numero, come al checkout, alla registrazione o nel modulo di contatto, così i template per gli aggiornamenti dei ticket non sono mai un azzardo.",
          },
        ],
      },
      {
        heading: "Come funzionano i prezzi di WhatsApp, senza il listino",
        blocks: [
          {
            type: "p",
            text: "Meta addebita per messaggio consegnato e solo per i messaggi che un'azienda invia agli utenti. Il prezzo dipende dalla categoria del messaggio e dal prefisso internazionale del destinatario. I listini sono pubblicati per mercato e cambiano di tanto in tanto, quindi controlla la pagina attuale dei prezzi di Meta invece di un numero letto in un articolo di blog.",
          },
          {
            type: "p",
            text: "Per i team di assistenza contano due aspetti. Le conversazioni che partono da un annuncio Click to WhatsApp o da una call to action di una Pagina Facebook possono aprire una free entry point window: se rispondi entro la finestra di assistenza clienti, i tuoi messaggi non vengono addebitati, e la pagina attuale dei prezzi di Meta indica che quella finestra può restare aperta fino a 7 giorni (il vecchio modello di prezzi basato sulle conversazioni prevedeva 72 ore). Inoltre i fornitori di helpdesk possono aggiungere costi propri: la documentazione di Freshworks, per esempio, dichiara che applica un ricarico sulle tariffe WhatsApp di Meta.",
          },
          {
            type: "note",
            text: "La documentazione sui prezzi di Meta descrive modifiche del 2026 al modo in cui vengono fatturati i messaggi di servizio e utility. Verifica le regole attuali sulla pagina dei prezzi di Meta prima di stimare i costi mensili.",
          },
        ],
      },
      {
        heading: "Collegare il bot al tuo helpdesk",
        blocks: [
          {
            type: "p",
            text: "Un bot WhatsApp non dovrebbe mai essere un vicolo cieco. Quando non riesce a risolvere qualcosa, la conversazione deve arrivare a un operatore con il contesto già allegato. Zendesk e Freshdesk offrono entrambi canali WhatsApp nativi:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp si aggiunge come canale di messaggistica in Admin Center (Channels > Messaging and social > Messaging). Ti serve un Meta Business Manager che appartenga alla tua azienda, e la persona che collega il numero deve esserne amministratore. Zendesk precisa che gli operatori non possono rispondere oltre 24 ore dopo l'ultimo messaggio del cliente e che i messaggi di gruppo WhatsApp non sono supportati.",
              "Freshdesk: WhatsApp è un canale di Freshdesk Omni con supporto per i template di messaggio approvati. Le impostazioni per numero includono il collegamento di un AI agent, l'instradamento a gruppi di operatori, la gestione dei template, le automazioni e le policy SLA. La guida di Freshdesk indica un limite di 250 conversazioni avviate dall'azienda ogni 24 ore finché la verifica aziendale di Meta non è completata.",
            ],
          },
          {
            type: "p",
            text: "Qualunque helpdesk usi, mappa i dati raccolti dal bot (nome, numero d'ordine, tipo di problema) nei campi del ticket, così gli operatori non li chiedono di nuovo, e tagga le conversazioni gestite dal bot per vedere cosa risolve davvero.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab sviluppa bot WhatsApp sopra gli strumenti che usi già, come Zendesk, Freshdesk, Jira, Slack o sistemi interni, usando API, webhook e Make o n8n. Uno Starter Chat Bot (350–450 USD) copre uno o due canali con FAQ e raccolta di informazioni di base; uno Standard Chat Bot (500–650 USD) copre da tre a cinque canali con conversazioni più complesse e passaggi all'operatore più fluidi. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e la maggior parte delle configurazioni richiede 1–3 settimane. Una call di audit gratuita di 30 minuti è un modo semplice per capire se WhatsApp è adatto al tuo volume di richieste.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso costruire un bot di assistenza sulla normale app WhatsApp Business?",
        a: "Non in modo significativo. L'app offre risposte automatiche di base, ma chatbot e integrazioni con gli helpdesk girano sulla WhatsApp Business Platform, di solito tramite Cloud API.",
      },
      {
        q: "Cosa succede se un cliente risponde dopo 24 ore?",
        a: "Il suo nuovo messaggio apre una nuova finestra di assistenza clienti di 24 ore, quindi il tuo bot o i tuoi operatori possono di nuovo rispondere liberamente. La finestra limita solo i messaggi che avvii tu dopo la sua chiusura.",
      },
      {
        q: "I template WhatsApp richiedono un'approvazione?",
        a: "Sì. I template devono essere approvati prima di poterli inviare, e sono gli unici messaggi consentiti fuori dalla finestra di assistenza clienti.",
      },
      {
        q: "Posso mantenere il mio numero attuale dell'app WhatsApp Business?",
        a: "Meta supporta l'onboarding di un numero esistente dell'app WhatsApp Business su Cloud API, così entrambe possono essere usate sullo stesso numero, con alcune funzioni non disponibili lato API. Verifica che il tuo helpdesk lo supporti prima di fare il passaggio.",
      },
      {
        q: "Quanto costa far funzionare un bot di assistenza su WhatsApp?",
        a: "Meta addebita per messaggio consegnato, in base alla categoria del messaggio e al paese del destinatario, e le tariffe cambiano nel tempo. Controlla i listini attuali di Meta ed eventuali costi aggiunti dal tuo helpdesk.",
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
    slug: "bot-telegram-assistenza-clienti",
    category: "channels",
    navLabel: "Bot Telegram per l'assistenza",
    primaryKeyword: "bot Telegram per assistenza clienti",
    title: "Bot Telegram per l'assistenza: Bot API, webhook e passaggio",
    description:
      "Come gestire un bot Telegram per l'assistenza: BotFather, webhook o long polling, tastiere inline, privacy mode nei gruppi, limiti di invio e passaggio all'helpdesk.",
    h1: "Bot Telegram per l'assistenza clienti: come funziona e come configurarlo",
    intro:
      "Un bot Telegram per l'assistenza è un programma collegato alla Telegram Bot API. Lo registri con @BotFather, ricevi un token e il tuo codice riceve i messaggi dei clienti tramite un webhook o il long polling. I bot di Telegram non possono avviare conversazioni, quindi ogni flusso di assistenza inizia quando un cliente apre il tuo bot e tocca Start.",
    keyFacts: [
      "Crei un bot e ottieni il suo token di autenticazione scrivendo a @BotFather.",
      "Gli aggiornamenti arrivano tramite getUpdates o tramite un webhook; i due metodi si escludono a vicenda.",
      "Telegram conserva gli aggiornamenti non consegnati per non più di 24 ore.",
      "I bot non possono scrivere per primi agli utenti; è l'utente che deve scrivere al bot o aggiungerlo a un gruppo.",
      "I webhook funzionano solo sulle porte 443, 80, 88 e 8443.",
    ],
    sections: [
      {
        heading: "Come funziona un bot Telegram per l'assistenza",
        blocks: [
          {
            type: "p",
            text: "Crei un bot scrivendo a @BotFather su Telegram, che lo registra e ti fornisce un token di autenticazione. Il tuo codice usa quel token per chiamare la Bot API via HTTPS. Il token autentica soltanto il tuo codice; non dà al bot il permesso di scrivere a nessuno.",
          },
          {
            type: "p",
            text: "I bot non possono avviare conversazioni. Un utente deve scrivere per primo al bot o aggiungerlo a un gruppo. Ogni bot ha un link nel formato t.me/ seguito dallo username del bot, che apre una chat con il bot, e la prima volta che qualcuno apre quella chat vede un pulsante Start che invia il comando /start. Salva in quel momento il chat ID dell'utente: ti serve per inviare qualsiasi messaggio successivo, come l'aggiornamento di un ticket.",
          },
          {
            type: "ol",
            items: [
              "Il cliente tocca il tuo link t.me sul sito web o in un'email e preme Start.",
              "Il bot lo saluta e mostra un breve menu con gli argomenti più comuni.",
              "Le domande semplici ricevono subito una risposta; per tutto il resto il bot raccoglie i dati (numero d'ordine, descrizione, screenshot).",
              "Il bot crea un ticket nel tuo helpdesk e dice al cliente cosa succederà dopo.",
              "Quando un operatore risponde nell'helpdesk, la risposta viene rimandata nella stessa chat Telegram.",
            ],
          },
        ],
      },
      {
        heading: "Webhook o long polling",
        blocks: [
          {
            type: "p",
            text: "La Bot API offre due modi, che si escludono a vicenda, per ricevere gli aggiornamenti: il metodo getUpdates (long polling) e i webhook. Finché è impostato un webhook, getUpdates non funziona. In entrambi i casi, Telegram conserva gli aggiornamenti che non hai ricevuto per non più di 24 ore, quindi un bot offline per un giorno perde messaggi.",
          },
          {
            type: "table",
            caption: "Scegliere come il tuo bot riceve i messaggi",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Come funziona", "Il tuo server chiede a Telegram i nuovi aggiornamenti", "Telegram invia ogni aggiornamento al tuo URL HTTPS"],
              ["Hosting", "Qualsiasi server in grado di effettuare richieste in uscita", "Un endpoint HTTPS pubblico sulla porta 443, 80, 88 o 8443"],
              ["Verifica del mittente", "Non necessaria, è il tuo server a fare le richieste", "Imposta un secret_token; Telegram lo restituisce nell'header X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "Per tornare dal webhook al polling, rimuovi il webhook con deleteWebhook oppure chiamando setWebhook con un URL vuoto. Entrambi i metodi accettano drop_pending_updates se vuoi scartare gli aggiornamenti in coda quando cambi configurazione.",
          },
        ],
      },
      {
        heading: "Pulsanti e menu per i flussi di assistenza",
        blocks: [
          {
            type: "p",
            text: "I bot di assistenza funzionano meglio con i pulsanti che con il testo libero. Le tastiere di risposta personalizzate sostituiscono la tastiera dell'utente con risposte predefinite, e premerne una invia quel testo nella chat. Le tastiere inline associano pulsanti a un messaggio specifico e, quando vengono premute, non pubblicano nulla nella chat. Un pulsante inline può aprire un URL o inviare al tuo bot callback data di 1–64 byte.",
          },
          {
            type: "p",
            text: "Due dettagli mettono in difficoltà i bot alle prime armi. Dopo che un utente preme un pulsante di callback, i client Telegram mostrano un indicatore di avanzamento finché il tuo bot non chiama answerCallbackQuery, quindi rispondi a ogni callback, anche senza testo. E per i menu in più passaggi, modifica il messaggio esistente con nuovi pulsanti invece di inviare ogni volta un nuovo messaggio; la modifica funziona per i messaggi che hanno tastiere inline.",
          },
        ],
      },
      {
        heading: "Gruppi, privacy mode e limiti di invio",
        blocks: [
          {
            type: "p",
            text: "I bot aggiunti ai gruppi funzionano in privacy mode per impostazione predefinita. In questa modalità un bot riceve i comandi a lui indirizzati, le risposte ai suoi messaggi, i messaggi inviati tramite il bot e i messaggi di servizio, ma non le normali conversazioni del gruppo. I bot che sono amministratori del gruppo ricevono tutti i messaggi, e puoi disattivare la privacy mode con /setprivacy in @BotFather, anche se Telegram lo consiglia solo quando è assolutamente necessario. I messaggi nelle chat private con il bot gli arrivano sempre.",
          },
          {
            type: "table",
            caption: "Limiti approssimativi secondo le Bots FAQ di Telegram",
            head: ["Dove", "Indicazione"],
            rows: [
              ["Una singola chat", "Evita più di un messaggio al secondo; brevi raffiche possono passare prima che inizino gli errori 429"],
              ["Un gruppo", "Non più di 20 messaggi al minuto"],
              ["Notifiche massive", "Circa 30 messaggi al secondo tra tutti gli utenti, a meno che non attivi i paid broadcasts"],
            ],
          },
          {
            type: "p",
            text: "Le FAQ di Telegram presentano questi valori come approssimativi, quindi prevedi nuovi tentativi in caso di errori 429 invece di affidarti a numeri esatti. Per un bot di assistenza contano soprattutto quando avvisi molti clienti contemporaneamente, per esempio di un disservizio. Con il long polling, passa anche il parametro offset a getUpdates: gli aggiornamenti fino a quell'ID vengono contrassegnati come confermati e non vengono restituiti di nuovo.",
          },
        ],
      },
      {
        heading: "Passaggio all'helpdesk e Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Per il passaggio dal bot all'operatore, lo schema abituale prevede che il bot apra un ticket e rimandi nella chat le risposte dell'operatore. Zendesk supporta Telegram come canale Sunshine Conversations nell'Agent Workspace, che richiede Suite Professional o superiore. I messaggi diventano ticket, e la risposta di un operatore in Zendesk compare nell'app di messaggistica del cliente.",
          },
          {
            type: "p",
            text: "Telegram Business è un'opzione a parte per i piccoli team che rispondono ai clienti dal proprio account Telegram. Il titolare dell'account può collegare un solo business bot alla volta, scegliere a quali chat può accedere e consentirgli di elaborare i messaggi in arrivo e, dove permesso, di rispondere per conto del titolare.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab sviluppa bot Telegram per l'assistenza che si collegano agli strumenti che usi già, come Zendesk, Freshdesk, Jira, Slack o sistemi interni, tramite API, webhook e Make o n8n. Uno Starter Chat Bot (350–450 USD) copre uno o due canali con FAQ e raccolta di informazioni di base, ed è adatto a Telegram più un widget sul sito web. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. Puoi partire da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Un bot Telegram può scrivere per primo ai clienti?",
        a: "No. Un utente deve scrivere al bot o aggiungerlo a un gruppo prima che il bot possa scrivergli. Salva il chat ID al primo contatto, così potrai inviare aggiornamenti in seguito.",
      },
      {
        q: "Meglio usare i webhook o getUpdates?",
        a: "Vanno bene entrambi, ma non contemporaneamente. I webhook inviano ogni aggiornamento al tuo endpoint HTTPS, mentre il long polling richiede solo richieste in uscita ed è più semplice durante lo sviluppo.",
      },
      {
        q: "Perché il mio bot non vede i messaggi in un gruppo?",
        a: "I bot funzionano in privacy mode per impostazione predefinita e vedono solo i messaggi destinati a loro. Rendi il bot amministratore del gruppo, oppure disattiva la privacy mode con /setprivacy in @BotFather e aggiungi di nuovo il bot al gruppo.",
      },
      {
        q: "Zendesk supporta Telegram?",
        a: "Sì, come canale Sunshine Conversations nell'Agent Workspace, che secondo Zendesk richiede Suite Professional o superiore. I messaggi arrivano come ticket e le risposte degli operatori tornano su Telegram.",
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
    slug: "bot-facebook-messenger-servizio-clienti",
    category: "channels",
    navLabel: "Bot Messenger per i clienti",
    primaryKeyword: "bot Facebook Messenger per servizio clienti",
    title: "Bot Facebook Messenger per servizio clienti: regole e setup",
    description:
      "Come funziona un bot Facebook Messenger per il servizio clienti: webhook, finestra di 24 ore, tag HUMAN_AGENT, passaggio agli operatori e policy di Meta sui bot.",
    h1: "Bot Facebook Messenger per il servizio clienti: finestre, tag e passaggio all'operatore",
    intro:
      "Un bot Facebook Messenger per il servizio clienti si collega alla tua Pagina Facebook tramite la Messenger Platform di Meta: i messaggi in arrivo raggiungono il tuo server tramite webhook e il bot risponde tramite la Send API. Puoi rispondere per 24 ore dopo ogni messaggio del cliente, e un operatore umano può rispondere fino a 7 giorni dopo con il tag HUMAN_AGENT, una volta che la tua app è stata approvata per usarlo.",
    keyFacts: [
      "La messaggistica standard ti permette di rispondere entro 24 ore dal messaggio di una persona.",
      "Il tag HUMAN_AGENT consente risposte da parte di persone entro 7 giorni, previa approvazione dell'app.",
      "Dal 27 aprile 2026 i tag CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE e POST_PURCHASE_UPDATE restituiscono un errore.",
      "Dove la legge lo richiede, un bot deve dichiarare che le persone stanno parlando con un servizio automatico.",
      "La policy di Meta prevede che le esperienze automatizzate rispondano all'input dell'utente entro 30 secondi.",
    ],
    sections: [
      {
        heading: "Come si compone la Messenger Platform",
        blocks: [
          {
            type: "p",
            text: "Un bot Messenger è un'app Meta collegata a una o più Pagine Facebook. L'app si iscrive a ogni Pagina tramite l'edge subscribed_apps della Pagina, che richiede le autorizzazioni pages_messaging e pages_manage_metadata. Meta invia quindi al tuo webhook eventi come nuovi messaggi e tocchi sui pulsanti, e il tuo bot risponde tramite la Send API.",
          },
          {
            type: "table",
            caption: "Eventi webhook usati di solito da un bot di assistenza",
            head: ["Evento", "Cosa comunica al tuo bot"],
            rows: [
              ["messages", "Un cliente ha inviato un messaggio alla tua Pagina"],
              ["messaging_postbacks", "Un cliente ha toccato un pulsante postback, il pulsante “Get Started” o una voce del persistent menu"],
              ["messaging_handovers", "Il controllo della conversazione è stato passato, preso o modificato tra app"],
              ["standby", "È arrivato un messaggio mentre un'altra app aveva il controllo della conversazione"],
            ],
          },
          {
            type: "p",
            text: "Meta ti offre anche punti di ingresso fissi. Toccare il pulsante “Get Started” invia un postback, che è un buon momento per un messaggio di benvenuto. Un persistent menu, con fino a 20 voci, può includere un'opzione “Parla con una persona”; compare solo dopo che è stato impostato un pulsante “Get Started”.",
          },
        ],
      },
      {
        heading: "La finestra di 24 ore e i tag dei messaggi",
        blocks: [
          {
            type: "p",
            text: "La finestra di messaggistica standard di Messenger ti dà 24 ore per rispondere dopo che una persona ha scritto alla tua Pagina, e i messaggi al suo interno possono includere contenuti promozionali. Se invii un messaggio normale dopo la chiusura della finestra, la Send API restituisce l'errore 1545041.",
          },
          {
            type: "table",
            caption: "Cosa consente Meta dopo che un cliente ha scritto",
            head: ["Tempistica o caso d'uso", "Cosa puoi inviare", "Note"],
            rows: [
              ["Entro 24 ore dal messaggio del cliente", "Messaggi standard dal bot o da un operatore", "In questa finestra i contenuti promozionali sono consentiti"],
              ["Fino a 7 giorni dopo il messaggio del cliente", "Una risposta di una persona con il tag HUMAN_AGENT", "Richiede l'approvazione dell'app; non vale per messaggi automatici o promozionali"],
              ["Aggiornamenti su eventi, acquisti o account", "Non i vecchi tag: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE e POST_PURCHASE_UPDATE restituiscono un errore dal 27 aprile 2026", "Meta rimanda ai template utility o alla Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta limita HUMAN_AGENT ai problemi che non si possono risolvere nella finestra standard, come una richiesta che arriva mentre la tua azienda è chiusa per il fine settimana o un caso che richiede più di un giorno. I messaggi automatici sono un uso non consentito del tag, quindi il bot non può usarlo per inviare da solo seguiti tardivi.",
          },
        ],
      },
      {
        heading: "Passare le conversazioni dal bot a una persona",
        blocks: [
          {
            type: "p",
            text: "Più app possono lavorare sulla stessa Pagina, per esempio il tuo bot e un helpdesk. L'handover protocol ti permette di passare una conversazione da un'app o da una inbox a un'altra, e il webhook messaging_handovers segnala quando il controllo viene passato, preso o modificato. Le app che non controllano la conversazione ricevono eventi standby invece dei normali eventi di messaggio.",
          },
          {
            type: "p",
            text: "Meta sta spostando questo meccanismo verso il Conversation Routing. Un aggiornamento del 2021 ha eliminato la necessità di assegnare ruoli primari e secondari e ha aggiunto le modalità Exclusive e Idle. Ora le regole di routing si possono gestire nelle impostazioni della Pagina e, quando il Conversation Routing è attivo, la Conversations API restituisce un campo is_owner, così la tua app risponde solo alle conversazioni che controlla.",
          },
          {
            type: "ul",
            items: [
              "Offri una via d'uscita chiara: la documentazione di Meta cita il passaggio tramite un fallback intent, una parola chiave o le quick reply.",
              "Prima di passare il controllo, pubblica un breve riepilogo (argomento, numero d'ordine, cosa ha già provato il bot) dove l'operatore lo vedrà.",
              "Di' al cliente cosa succederà dopo, inclusi i tuoi orari se non c'è nessuno online.",
              "Quando l'operatore ha finito, restituisci il controllo al bot, così la domanda successiva riceve una risposta automatica.",
            ],
          },
        ],
      },
      {
        heading: "Le regole della policy che definiscono il bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Dichiarazione: quando la legge applicabile lo richiede, le esperienze di chat automatizzate devono dichiarare che la persona sta parlando con un servizio automatico, per esempio all'inizio di una conversazione o quando una persona restituisce la conversazione all'automazione. Meta suggerisce di dichiararlo anche dove non è obbligatorio e cita espressamente la California e la Germania.",
              "Reattività: le esperienze completamente automatizzate devono rispondere a ogni input dell'utente entro 30 secondi. Le configurazioni ibride che combinano bot e persone dovrebbero aggiornare l'impostazione di risposta in Page Settings, alla voce Advanced Messaging.",
              "Niente promozioni nei messaggi con tag: i tag dei messaggi non possono essere usati per pubblicità, marketing o sollecitazioni commerciali.",
              "Approvazione dell'app: la tua app deve essere approvata prima di poter usare il tag HUMAN_AGENT.",
            ],
          },
        ],
      },
      {
        heading: "Collegare Messenger al tuo helpdesk",
        blocks: [
          {
            type: "p",
            text: "La maggior parte degli helpdesk può ricevere le conversazioni di Messenger come ticket. In Zendesk, Messenger è un canale di messaggistica nell'Agent Workspace, e Zendesk documenta alcuni limiti pratici:",
          },
          {
            type: "ul",
            items: [
              "Gli operatori hanno sette giorni per rispondere prima che la finestra di messaggistica si chiuda; dopo, la casella di risposta viene bloccata.",
              "Le risposte che un operatore invia direttamente in Messenger non si sincronizzano con Zendesk, quindi gli operatori dovrebbero rispondere da Zendesk.",
              "I messaggi più lunghi di 2.000 caratteri non vengono consegnati.",
            ],
          },
          {
            type: "p",
            text: "Se il tuo bot gira come app separata, decidi quale app controlla la conversazione per impostazione predefinita e quando il controllo passa all'altra; altrimenti il bot e l'helpdesk potrebbero rispondere entrambi allo stesso cliente.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab sviluppa bot Messenger che lavorano sopra Zendesk, Freshdesk, Jira, Slack o i tuoi strumenti interni, usando API, webhook e Make o n8n. Uno Starter Chat Bot (350–450 USD) copre uno o due canali; uno Standard Chat Bot (500–650 USD) copre da tre a cinque canali, come Messenger, Instagram e WhatsApp, con conversazioni più complesse e passaggi all'operatore più fluidi. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. Prenota una call di audit gratuita di 30 minuti per mappare il tuo attuale flusso su Messenger.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quanto tempo ho per rispondere su Messenger?",
        a: "Puoi inviare messaggi standard entro 24 ore dal messaggio di una persona. Un operatore umano può rispondere fino a 7 giorni dopo usando il tag HUMAN_AGENT, una volta che la tua app è stata approvata per usarlo.",
      },
      {
        q: "Il mio bot può usare il tag HUMAN_AGENT?",
        a: "No. Meta indica i messaggi automatici come uso non consentito del tag. È pensato per le risposte di persone quando un problema non si può risolvere entro 24 ore.",
      },
      {
        q: "Cosa ha sostituito i tag ACCOUNT_UPDATE e POST_PURCHASE_UPDATE?",
        a: "Questi tag, insieme a CONFIRMED_EVENT_UPDATE, restituiscono un errore dal 27 aprile 2026. Per quei casi d'uso Meta consiglia i template utility o la Marketing Messages API.",
      },
      {
        q: "Devo dire agli utenti che stanno parlando con un bot?",
        a: "La policy di Meta richiede la dichiarazione dove la legge applicabile lo impone e la consiglia negli altri casi. Dirlo all'inizio della conversazione è l'approccio più semplice.",
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
    slug: "automazione-dm-instagram",
    category: "channels",
    navLabel: "Automazione DM Instagram",
    primaryKeyword: "automazione DM Instagram",
    title: "Automazione DM Instagram per l'assistenza clienti: le regole",
    description:
      "Automazione dei DM Instagram: regole per gli account professionali, finestra di 24 ore, tag human agent, risposte private ai commenti e ice breaker.",
    h1: "Automazione dei DM Instagram per l'assistenza clienti",
    intro:
      "Automatizzare i DM di Instagram significa collegare un bot ai messaggi diretti di un account professionale Instagram tramite le API di Meta, così le domande ricorrenti ricevono subito una risposta e il resto arriva a una persona. Il bot può rispondere solo dopo che qualcuno ti ha scritto e ha 24 ore per farlo; gli operatori umani possono rispondere fino a 7 giorni dopo con il tag human agent.",
    keyFacts: [
      "Le API di messaggistica di Instagram funzionano con gli account professionali (aziendali o creator).",
      "La tua app può scrivere a un utente solo dopo che lui ti ha scritto, e da quel momento ha 24 ore per rispondere.",
      "Il tag human agent consente risposte entro 7 giorni, dopo la revisione dell'app.",
      "Le risposte private ai commenti si possono inviare entro 7 giorni dal commento.",
      "Su Instagram, Meta ha sostituito l'handover protocol con il Conversation Routing.",
    ],
    sections: [
      {
        heading: "Cosa ti serve prima di automatizzare i DM di Instagram",
        blocks: [
          {
            type: "p",
            text: "Le API di messaggistica di Instagram funzionano con gli account professionali. Ne esistono due tipi: gli account aziendali, per rivenditori, attività locali, brand, organizzazioni e fornitori di servizi, e gli account creator, per personaggi pubblici, produttori di contenuti, artisti e influencer. Tieni presente che trasformare un account personale privato in professionale lo rende pubblico.",
          },
          {
            type: "table",
            caption: "Due modi per collegare la messaggistica di Instagram",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Pagina Facebook", "Non richiesta", "L'account Instagram deve essere collegato a una Pagina Facebook"],
              ["Invio dei messaggi", "Instagram User access token con l'autorizzazione instagram_business_manage_messages", "Lo stesso endpoint /PAGE_ID/messages di Messenger, usando l'ID con ambito Instagram del cliente"],
              ["Messaggi in arrivo", "Webhook di messaggistica", "Il campo webhook messages, insieme ai messaggi di Messenger"],
              ["Ideale per", "Aziende e creator presenti solo su Instagram", "Team che usano già un bot Messenger o un helpdesk collegato a Meta"],
            ],
          },
          {
            type: "p",
            text: "In entrambi i casi, il titolare dell'account deve consentire l'accesso ai messaggi alla voce Connected tools nelle impostazioni dei messaggi di Instagram, altrimenti l'API non può gestire le conversazioni. Zendesk precisa che questa opzione va attivata nell'app mobile di Instagram, non dal web. Se la tua app serve account professionali che non possiedi né gestisci, le serve anche l'Advanced Access tramite la app review di Meta.",
          },
        ],
      },
      {
        heading: "Finestre di messaggistica e tag human agent",
        blocks: [
          {
            type: "p",
            text: "La tua app può scrivere a qualcuno solo dopo che questa persona ha scritto al tuo account, e ha 24 ore per rispondere a ogni messaggio. Per i problemi che richiedono più tempo, come una richiesta che arriva mentre la tua azienda è chiusa per il fine settimana, il tag human agent permette a una persona di rispondere entro 7 giorni. Il tag è disponibile solo per le app che hanno completato la app review.",
          },
          {
            type: "table",
            caption: "Limiti dei DM di Instagram da conoscere",
            head: ["Regola", "Cosa significa per il tuo bot"],
            rows: [
              ["Finestra di risposta di 24 ore", "Le risposte automatiche devono partire entro 24 ore dal messaggio del cliente"],
              ["Tag human agent (7 giorni)", "Le risposte tardive arrivano da una persona, dopo la app review"],
              ["Niente messaggi di gruppo", "Le conversazioni di gruppo non sono supportate dall'API"],
              ["Cartella Requests", "Le conversazioni in Requests inattive da 30 giorni non vengono restituite dall'API"],
            ],
          },
        ],
      },
      {
        heading: "Dal commento al DM: le risposte private",
        blocks: [
          {
            type: "p",
            text: "Molte domande di assistenza nascono nei commenti, come “È disponibile?” o “Come faccio il reso?”. Le risposte private permettono al tuo account di rispondere a un commento con un messaggio diretto a chi l'ha scritto. Funzionano per i commenti a post, reel e inserzioni, e per i commenti alle dirette Instagram. Una risposta privata è un singolo messaggio, inviato entro 7 giorni dal commento, e include automaticamente un link al post o al commento.",
          },
          {
            type: "p",
            text: "Le risposte private non richiedono più il tag human agent. Se la persona risponde alla tua risposta privata, quel messaggio avvia una conversazione normale e si applica la consueta finestra di 24 ore. Una configurazione pratica: monitora i commenti alla ricerca di parole chiave legate all'assistenza, invia una risposta privata con una risposta o una domanda e lascia che il bot dei DM prosegua da lì, tenendo numeri d'ordine e dati personali fuori dai commenti pubblici.",
          },
        ],
      },
      {
        heading: "Ice breaker e punti di ingresso",
        blocks: [
          {
            type: "p",
            text: "Gli ice breaker sono domande predefinite che le persone possono toccare quando avviano una nuova conversazione con il tuo account, come “Dov'è il mio ordine?” o “Parla con l'assistenza”. Quando qualcuno ne tocca uno, la tua app riceve un evento webhook messaging_postback, quindi ogni ice breaker può avviare un proprio flusso del bot. Gli ice breaker si possono configurare in più lingue, e viene mostrata la versione giusta in base alla lingua e al paese (locale) dell'utente. Usali per le domande di assistenza più comuni, indirizza ognuno verso un flusso specifico e controlla quali vengono davvero toccati, così puoi sostituire quelli che nessuno usa.",
          },
          {
            type: "p",
            text: "I link ig.me possono passare un parametro referral in una conversazione, per esempio per dire al bot da quale pagina prodotto arriva il cliente. Per le nuove conversazioni, Meta richiede che gli ice breaker siano configurati perché quel parametro referral arrivi.",
          },
        ],
      },
      {
        heading: "Passare i DM a una persona",
        blocks: [
          {
            type: "p",
            text: "Su Instagram, Meta non supporta più l'handover protocol e ha spostato tutte le aziende sul Conversation Routing. Questo ti permette di passare il controllo della conversazione alla inbox di Instagram o a una inbox di terze parti, come un helpdesk. Durante la app review, Meta si aspetta che tu dimostri che, quando avviene il passaggio, la titolarità della conversazione passa alla inbox e l'operatore può rispondere da lì.",
          },
          {
            type: "p",
            text: "Vale la pena conoscere due particolarità. Le risposte inviate tramite un'app di terze parti spostano la conversazione nella cartella General, e i messaggi consegnati tramite la piattaforma non includono le informazioni sulla cartella mostrate nell'app Instagram. Nel canale Instagram Direct di Zendesk, le risposte date direttamente in Instagram non vengono aggiunte al ticket, quindi gli operatori dovrebbero rispondere da Zendesk.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura bot per i DM di Instagram che rispondono alle domande comuni, raccolgono i dati e passano le conversazioni al tuo team in Zendesk, Freshdesk, Jira, Slack o uno strumento interno, basati su API, webhook e Make o n8n. Uno Starter Chat Bot (350–450 USD) copre uno o due canali; uno Standard Chat Bot (500–650 USD) ne copre da tre a cinque, come Instagram, Messenger e il tuo sito web. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. La call di audit gratuita di 30 minuti è il punto da cui partire.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso automatizzare i DM su un account Instagram personale?",
        a: "No. Le API di messaggistica di Meta funzionano con gli account professionali, che possono essere account aziendali o creator.",
      },
      {
        q: "Mi serve una Pagina Facebook per automatizzare i DM di Instagram?",
        a: "Non con la Instagram API with Instagram Login, che non richiede una Pagina collegata. La Instagram Messaging API tramite la Messenger Platform, invece, la richiede.",
      },
      {
        q: "Quanto posso aspettare prima di rispondere a un DM?",
        a: "Le risposte automatiche devono partire entro 24 ore dal messaggio del cliente. Un operatore umano può rispondere fino a 7 giorni dopo con il tag human agent, dopo che la tua app ha superato la revisione.",
      },
      {
        q: "Posso inviare un DM a qualcuno che ha commentato un mio post?",
        a: "Sì, con una risposta privata: un singolo messaggio inviato entro 7 giorni dal commento, che include automaticamente un link al post o al commento.",
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
    slug: "chatbot-sito-web-assistenza-clienti",
    category: "channels",
    navLabel: "Chatbot di assistenza sul sito",
    primaryKeyword: "chatbot sito web assistenza clienti",
    title: "Chatbot sito web per l'assistenza clienti: setup e passaggio",
    description:
      "Pianifica un chatbot sul sito per l'assistenza clienti: widget come Zendesk e Freshchat, passaggio dal bot all'operatore, copertura fuori orario e accessibilità WCAG.",
    h1: "Chatbot sul sito web per l'assistenza clienti: widget, passaggio all'operatore e accessibilità",
    intro:
      "Un chatbot sul sito web per l'assistenza clienti è un widget di chat sul tuo sito o nel tuo help center in cui un bot risponde alle domande comuni, raccoglie i dati e passa la conversazione a un operatore dal vivo quando non può aiutare. La maggior parte degli helpdesk fornisce un proprio widget, quindi il vero lavoro consiste nel configurare i flussi del bot, il passaggio all'operatore, il comportamento fuori orario e l'accessibilità.",
    keyFacts: [
      "Il Web Widget di messaggistica di Zendesk si installa aggiungendo uno snippet di codice a ogni pagina in cui deve comparire.",
      "La messaggistica di Zendesk può mostrare risposte diverse durante e fuori dall'orario di lavoro.",
      "Gli AI agent di Freshdesk possono essere configurati per raccogliere i dati del cliente prima del trasferimento a una persona.",
      "Le WCAG 2.2 richiedono che tutte le funzionalità siano utilizzabili da tastiera (2.1.1, livello A).",
      "La tecnica W3C basata su role=\"log\" permette agli screen reader di annunciare i nuovi messaggi di chat man mano che arrivano.",
    ],
    sections: [
      {
        heading: "Widget nativo dell'helpdesk o widget personalizzato?",
        blocks: [
          {
            type: "p",
            text: "Se usi già un helpdesk, parti dal suo widget. Le chat finiscono nella stessa coda di email e messaggi social, gli operatori rispondono da un unico spazio di lavoro e il fornitore si occupa della manutenzione del codice del widget.",
          },
          {
            type: "ul",
            items: [
              "Web Widget di Zendesk (messaggistica): in Admin Center, vai su Channels > Messaging and social > Messaging, apri il widget e copia il codice dalla sezione Installation. Aggiungilo al codice sorgente di ogni pagina in cui deve comparire il widget, e assicurati che il tuo firewall consenta il widget.",
              "Web widget di Freshchat (Freshdesk): copia il codice di incorporamento dalle impostazioni del canale web chat e aggiungilo a ogni pagina in cui deve comparire il widget. Freshworks documenta anche l'installazione su WordPress, Shopify, Squarespace e nelle app iOS e Android.",
            ],
          },
          {
            type: "table",
            caption: "Scegliere un widget",
            head: ["Opzione", "Adatta quando", "Attenzione a"],
            rows: [
              ["Widget nativo dell'helpdesk", "Vuoi chat, ticket e report in un unico posto", "Stile e logica del bot sono limitati a ciò che il fornitore supporta"],
              ["Widget nativo con un bot personalizzato", "Ti servono logiche o integrazioni che il bot integrato non ha", "Il passaggio all'operatore e la trasmissione del contesto vanno collegati e testati"],
              ["Widget completamente personalizzato", "La chat fa parte dell'interfaccia del tuo prodotto", "Accessibilità, disponibilità del servizio e integrazione lato operatore sono a tuo carico"],
            ],
          },
        ],
      },
      {
        heading: "Progettare il passaggio dal bot all'operatore",
        blocks: [
          {
            type: "p",
            text: "Il passaggio all'operatore è il punto in cui fallisce la maggior parte dei bot sui siti web. Un buon passaggio porta il cliente a una persona senza costringerlo a ripetersi. Entrambi i principali helpdesk supportano questo schema:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: aggiungere un AI agent a un canale di messaggistica sostituisce la risposta di messaggistica predefinita con le risposte dell'AI agent. La workflow recipe di Zendesk prevede che l'AI agent saluti il cliente, mostri un modulo per raccogliere ciò che serve agli operatori, comunichi al cliente che la richiesta sta passando al team e poi inoltri la conversazione a un operatore, che riceve una notifica e vede i dettagli quando la accetta. La recipe usa un modulo più breve per i clienti che hanno effettuato l'accesso, senza nome ed email.",
              "Freshchat e Freshdesk: i flussi dei bot passano la conversazione con azioni come Assign to group o Make available for assignment, e le impostazioni di handover degli AI agent di Freshdesk includono un'opzione per raccogliere i dati del cliente prima del trasferimento.",
            ],
          },
          {
            type: "p",
            text: "Decidi cosa raccogliere in base a ciò che i tuoi operatori chiedono per primo. I campi tipici sono nome ed email per i visitatori che non hanno effettuato l'accesso, un numero d'ordine o di account, il tipo di problema scelto tramite pulsanti, una breve descrizione con le parole del cliente e la pagina in cui si trovava.",
          },
        ],
      },
      {
        heading: "Copertura fuori orario",
        blocks: [
          {
            type: "p",
            text: "Un widget che alle 2 di notte promette “un operatore sarà subito da te” fa più danni che nessuna chat. Pianifica cosa succede quando non c'è nessuno online:",
          },
          {
            type: "ul",
            items: [
              "Imposta l'orario di lavoro: i canali di messaggistica di Zendesk possono usare una pianificazione degli orari di lavoro e mostrare risposte diverse durante e fuori da quegli orari.",
              "Trasforma le chat in ticket: nella recipe di Zendesk, durante l'orario di lavoro l'AI agent passa la conversazione a un operatore dal vivo, mentre fuori orario raccoglie i dati del cliente e inoltra la richiesta come ticket email da seguire in seguito.",
              "Lascia che il bot risponda a ciò che può: risposte alle FAQ, verifica dello stato degli ordini e link all'help center funzionano a qualsiasi ora.",
              "Di' quando risponderai: comunica al cliente i tuoi orari e dove arriverà la risposta, per esempio via email.",
            ],
          },
        ],
      },
      {
        heading: "Nozioni di base di accessibilità per i widget di chat",
        blocks: [
          {
            type: "p",
            text: "Un widget di chat è un contenuto interattivo sovrapposto al tuo sito, quindi deve rispettare lo stesso livello di accessibilità del resto della pagina. Le WCAG 2.2 sono la versione attuale del W3C, e questi criteri di successo sono particolarmente rilevanti per la chat:",
          },
          {
            type: "table",
            caption: "Criteri WCAG 2.2 da verificare in un widget di chat",
            head: ["Criterio", "Livello", "Cosa significa per un widget di chat"],
            rows: [
              ["2.1.1 Keyboard", "A", "Aprire il widget, scrivere, scegliere i pulsanti e chiuderlo funzionano tutti senza mouse"],
              ["2.4.7 Focus Visible", "AA", "Gli utenti vedono quale pulsante o campo ha il focus della tastiera"],
              ["2.4.11 Focus Not Obscured (Minimum)", "AA", "Il pulsante di avvio o il pannello della chat aperto non nascondono completamente l'elemento della pagina che ha il focus"],
              ["4.1.2 Name, Role, Value", "A", "Pulsanti personalizzati, menu e pulsante di avvio espongono nomi e stati alle tecnologie assistive"],
              ["4.1.3 Status Messages", "AA", "Aggiornamenti come “Messaggio inviato” vengono annunciati senza spostare il focus"],
            ],
          },
          {
            type: "p",
            text: "Per la conversazione vera e propria, la tecnica W3C ARIA23 contrassegna la cronologia della chat con role=\"log\": i nuovi messaggi vengono aggiunti in fondo alla regione e gli screen reader li annunciano man mano che compaiono. Con il widget di un fornitore, testa la tua configurazione con una tastiera e uno screen reader, perché colori personalizzati e contenuti del bot possono comunque introdurre problemi.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura chatbot per siti web sopra l'helpdesk che usi già, come Zendesk o Freshdesk, oppure collega un bot personalizzato a Jira, Slack o strumenti interni tramite API, webhook e Make o n8n. Uno Starter Chat Bot (350–450 USD) copre uno o due canali con FAQ e raccolta di informazioni di base; uno Standard Chat Bot (500–650 USD) copre da tre a cinque canali con conversazioni più complesse e passaggi all'operatore più fluidi. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e la maggior parte delle configurazioni richiede 1–3 settimane. Parti da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Mi serve uno strumento di chatbot separato se il mio helpdesk ha un widget?",
        a: "Non necessariamente. Zendesk e Freshdesk permettono entrambi di associare un bot o un AI agent al loro web widget. Uno strumento separato ha senso quando ti servono logiche o integrazioni che il bot integrato non offre.",
      },
      {
        q: "Cosa deve raccogliere il bot prima di passare la conversazione a un operatore?",
        a: "Ciò che i tuoi operatori chiedono per primo: di solito i dati di contatto per i visitatori anonimi, un numero d'ordine o di account, il tipo di problema e una breve descrizione. Zendesk e Freshdesk supportano entrambi la raccolta dei dati prima del trasferimento.",
      },
      {
        q: "Cosa deve fare un chatbot sul sito web fuori dall'orario di lavoro?",
        a: "Rispondere a ciò che può, spiegare i tuoi orari e trasformare il resto in un ticket. La recipe documentata da Zendesk raccoglie i dati del cliente fuori orario e inoltra la richiesta come ticket email.",
      },
      {
        q: "Quale standard di accessibilità si applica a un widget di chat?",
        a: "Le WCAG 2.2 sono la versione attuale del W3C. L'uso da tastiera (2.1.1), il focus visibile (2.4.7), nomi e ruoli dei controlli (4.1.2) e i messaggi di stato (4.1.3) sono particolarmente rilevanti per la chat.",
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
    slug: "automazione-sms-assistenza-clienti",
    category: "channels",
    navLabel: "Automazione SMS per il supporto",
    primaryKeyword: "automazione SMS per assistenza clienti",
    title: "Automazione SMS per assistenza clienti: webhook, 10DLC, STOP",
    description:
      "Come funziona l'automazione SMS per l'assistenza: webhook in entrata, A2P 10DLC e verifica toll-free, opt-out con STOP, limiti dei segmenti e ticket nell'helpdesk.",
    h1: "Automazione SMS per l'assistenza clienti: come funziona e cosa configurare",
    intro:
      "L'automazione SMS per l'assistenza clienti collega un numero di telefono aziendale a un codice che legge gli SMS in arrivo, risponde alle domande semplici e trasforma tutto il resto in ticket. Con un provider come Twilio Programmable Messaging, ogni SMS in arrivo viene inviato al tuo webhook e il tuo codice risponde tramite l'API. Negli Stati Uniti devi anche registrare il numero e rispettare gli opt-out con STOP, altrimenti i tuoi messaggi vengono bloccati.",
    keyFacts: [
      "Twilio invia ogni SMS in arrivo all'URL del tuo webhook con campi come From, To, Body e MessageSid.",
      "Secondo Twilio, gli operatori statunitensi trattano qualsiasi messaggio inviato da una piattaforma come Twilio come traffico application-to-person (A2P).",
      "I messaggi da numeri 10DLC statunitensi non registrati vengono bloccati con l'errore 30034, anche mentre la registrazione è in attesa.",
      "Twilio gestisce per impostazione predefinita STOP e le altre parole chiave standard di opt-out sui numeri long code.",
      "Un segmento SMS GSM-7 contiene 160 caratteri; un segmento UCS-2, necessario per le emoji, ne contiene 70.",
    ],
    sections: [
      {
        heading: "Come funziona l'automazione SMS per l'assistenza",
        blocks: [
          {
            type: "p",
            text: "Ottieni un numero di telefono da un provider SMS, punti il suo webhook per i messaggi in arrivo verso il tuo codice e invii le risposte tramite l'API del provider. Con Twilio Programmable Messaging, ogni SMS inviato al tuo numero diventa una richiesta HTTP all'URL del tuo webhook. La richiesta contiene il mittente in From, il tuo numero in To, il testo del messaggio in Body (fino a 1.600 caratteri) e un MessageSid di 34 caratteri che puoi usare per recuperare il messaggio in seguito tramite la REST API.",
          },
          {
            type: "p",
            text: "Il tuo endpoint risponde con TwiML, il formato XML di Twilio che indica a Twilio cosa fare dopo, per esempio inviare una risposta. Se il tuo helpdesk risponderà più tardi e il bot non ha nulla da dire, restituisci un elemento Response vuoto, così Twilio accetta il messaggio senza rispondere.",
          },
          {
            type: "ol",
            items: [
              "Il cliente invia un SMS al tuo numero di assistenza.",
              "Twilio invia il messaggio al tuo webhook.",
              "Il tuo bot risponde subito a una domanda comune o chiede dati come un numero d'ordine.",
              "Tutto ciò che il bot non riesce a risolvere diventa un ticket nel tuo helpdesk, associato al numero di telefono del cliente.",
              "Le risposte degli operatori tornano al cliente come SMS dallo stesso numero.",
            ],
          },
        ],
      },
      {
        heading: "Registrazione negli Stati Uniti: A2P 10DLC e Toll-Free Verification",
        blocks: [
          {
            type: "p",
            text: "La documentazione di Twilio afferma che gli operatori statunitensi considerano application-to-person (A2P) qualsiasi messaggio inviato da una piattaforma come Twilio. Se invii SMS o MMS a numeri statunitensi da un long code standard a 10 cifre (10DLC), devi registrarti ad A2P 10DLC. La registrazione ha due parti: un brand, che dice agli operatori chi sta inviando, e una campaign, che descrive il caso d'uso e il modo in cui le persone danno il consenso, lo revocano e ottengono aiuto. Una volta approvata la campaign, aggiungi il tuo numero al Messaging Service collegato.",
          },
          {
            type: "p",
            text: "La registrazione non è una pratica burocratica facoltativa. Twilio blocca i messaggi diretti negli Stati Uniti dai numeri 10DLC non associati a una campaign approvata, compresi i numeri la cui registrazione è ancora in attesa, e le sue tariffe di messaggistica si applicano comunque ai messaggi bloccati. I numeri toll-free seguono un processo separato chiamato Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Cosa richiede Twilio prima di inviare SMS a clienti statunitensi",
            head: ["Tipo di mittente", "Requisito", "Cosa succede senza"],
            rows: [
              ["Long code 10DLC", "Brand e campaign A2P 10DLC approvati, con il numero nel Messaging Service della campaign", "I messaggi vengono bloccati con l'errore 30034"],
              ["10DLC, ditta individuale (sole proprietor)", "Stessa registrazione, ma una campaign sole proprietor può avere un solo numero 10DLC registrato", "Gli altri numeri nel Messaging Service restano non registrati"],
              ["Numero toll-free", "Toll-Free Verification approvata", "I messaggi verso numeri mobili statunitensi e canadesi falliscono con l'errore 30032"],
            ],
          },
        ],
      },
      {
        heading: "Parole chiave STOP, opt-out e consenso",
        blocks: [
          {
            type: "p",
            text: "Sui numeri long code, Twilio gestisce per te le parole chiave standard di opt-out in inglese. La sua documentazione elenca STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT e CANCEL, riconosciute indipendentemente da maiuscole e minuscole. Twilio invia una conferma standard e i tuoi messaggi smettono di raggiungere quel numero finché il cliente non invia START. Sui numeri toll-free, solo START e UNSTOP riattivano l'iscrizione di un cliente. Advanced Opt-Out, disattivato per impostazione predefinita, ti permette di personalizzare parole chiave e risposte su un Messaging Service, anche se le parole chiave riservate come START non si possono rimuovere.",
          },
          {
            type: "p",
            text: "Assicurati che il tuo bot non invii più nulla a un cliente che ha revocato il consenso. Anche le norme statunitensi coprono questo aspetto. L'ordinanza della FCC del 2024 (FCC 24-24) stabilisce che i consumatori possono revocare il consenso a robocall e robotext con qualsiasi mezzo ragionevole, che una risposta come stop, quit, end, revoke, opt out, cancel o unsubscribe conta come ragionevole e che le revoche devono essere rispettate entro un tempo ragionevole, non superiore a dieci giorni lavorativi. Nel 2026 la FCC ha adottato un'ulteriore ordinanza (FCC 26-67) che consente a chi effettua le comunicazioni di designare un unico metodo di revoca automatizzato, come un SMS di risposta con parole standard quali stop, quit o unsubscribe, a condizione che il metodo sia indicato chiaramente, e chiede osservazioni sulla riduzione del termine. Verifica quale versione delle regole è in vigore al momento del lancio.",
          },
          {
            type: "note",
            text: "Questa è una sintesi del testo della norma FCC, non una consulenza legale. Verifica le regole vigenti con il tuo consulente legale prima di inviare SMS automatici a clienti statunitensi.",
          },
        ],
      },
      {
        heading: "Lunghezza dei messaggi e segmenti",
        blocks: [
          {
            type: "p",
            text: "Gli SMS vengono inviati in segmenti, e ogni segmento viene fatturato, quindi la lunghezza delle risposte del tuo bot incide sui costi. La documentazione di Twilio indica questi limiti:",
          },
          {
            type: "table",
            caption: "Dimensioni dei segmenti SMS secondo la documentazione di Twilio",
            head: ["Codifica", "Messaggio singolo", "Per segmento se suddiviso", "Quando si usa"],
            rows: [
              ["GSM-7", "160 caratteri", "153 caratteri", "Testo che usa solo il set di caratteri GSM-7"],
              ["UCS-2", "70 caratteri", "67 caratteri", "Qualsiasi messaggio con almeno un carattere fuori da GSM-7, come un'emoji"],
            ],
          },
          {
            type: "p",
            text: "Un solo carattere non GSM-7 fa passare l'intero messaggio a UCS-2, non solo quel carattere. Emoji, virgolette tipografiche e trattini lunghi sono cause comuni, e questo conta quando un bot copia le risposte dagli articoli dell'help center. Lo Smart Encoding di Twilio può sostituire alcuni di questi caratteri con equivalenti GSM-7. Il testo di un messaggio in uscita può arrivare a 1.600 caratteri, ma di solito funzionano meglio risposte brevi con un link all'articolo completo.",
          },
        ],
      },
      {
        heading: "Collegare gli SMS al tuo helpdesk",
        blocks: [
          {
            type: "p",
            text: "Zendesk offre gli SMS come Zendesk Text. Un SMS inviato al tuo numero Text crea automaticamente un ticket, e le risposte pubbliche su quel ticket tornano al cliente come SMS. Zendesk precisa inoltre che gli SMS inviati a consumatori statunitensi da numeri non registrati verranno bloccati, quindi anche lì si applica la registrazione A2P 10DLC.",
          },
          {
            type: "p",
            text: "Se il tuo helpdesk non ha un canale SMS, o ti serve una logica che quello integrato non offre, può occuparsene un piccolo servizio intermedio. Riceve il webhook di Twilio, esegue il bot, crea o aggiorna i ticket tramite l'API dell'helpdesk e rimanda le risposte degli operatori tramite Twilio.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "I canali per bot indicati da TascaLab sono sito web, telefono, WhatsApp, Telegram, Facebook Messenger e Instagram. Gli SMS non sono in quell'elenco, ma altri canali con un'API possono essere valutati durante la call di audit gratuita di 30 minuti. TascaLab lavora sopra gli strumenti che usi già, come Zendesk, Freshdesk, Jira e Slack, tramite API, webhook e Make o n8n. Uno Starter Chat Bot costa 350–450 USD per uno o due canali e uno Standard Chat Bot 500–650 USD per tre-cinque canali. Ogni progetto include 30 giorni di supporto dopo il lancio, una documentazione di base e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Serve la registrazione A2P 10DLC per un bot di assistenza via SMS?",
        a: "Sì, se invii SMS o MMS a numeri statunitensi da un long code a 10 cifre tramite una piattaforma come Twilio. Twilio blocca i messaggi diretti negli Stati Uniti dai numeri 10DLC non registrati con l'errore 30034, anche mentre la registrazione è in attesa.",
      },
      {
        q: "Cosa succede quando un cliente invia STOP?",
        a: "Sui numeri long code Twilio gestisce per impostazione predefinita STOP e le altre parole chiave standard di opt-out. Invia una conferma e i tuoi messaggi smettono di raggiungere quel numero finché il cliente non invia START.",
      },
      {
        q: "Perché un messaggio breve è stato conteggiato come due segmenti?",
        a: "Probabilmente conteneva un carattere fuori da GSM-7, come un'emoji o una virgoletta tipografica. Questo fa passare l'intero messaggio a UCS-2, che in un singolo segmento contiene solo 70 caratteri.",
      },
      {
        q: "Posso usare un numero toll-free invece di un numero 10DLC?",
        a: "Sì, ma serve la Toll-Free Verification. Finché non è approvata, i messaggi verso numeri mobili statunitensi e canadesi falliscono con l'errore 30032.",
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
    slug: "chatbot-viber-assistenza-clienti",
    category: "channels",
    navLabel: "Chatbot Viber per l'assistenza",
    primaryKeyword: "chatbot Viber per assistenza clienti",
    title: "Chatbot Viber per l'assistenza clienti: Bot API e regole",
    description:
      "Come funziona un chatbot Viber per l'assistenza: token di autenticazione, set_webhook, eventi di callback, a chi può scrivere il bot, tastiere e passaggio all'helpdesk.",
    h1: "Chatbot Viber per l'assistenza clienti: come funziona e come configurarlo",
    intro:
      "Un chatbot Viber per l'assistenza clienti è un account bot collegato alla Viber REST Bot API. Il tuo server registra un webhook con set_webhook, riceve callback quando i clienti aprono la chat o inviano messaggi e risponde con send_message usando il token di autenticazione del bot. I bot Viber possono continuare a scrivere solo agli utenti iscritti, quindi ogni conversazione di assistenza parte dal cliente.",
    keyFacts: [
      "Ogni richiesta API contiene il token di autenticazione del bot nell'header X-Viber-Auth-Token.",
      "Gli URL dei webhook devono usare SSL; Viber non supporta i certificati autofirmati.",
      "Le callback message, subscribed e unsubscribed sono obbligatorie e non si possono escludere con un filtro.",
      "Un evento conversation_started consente un solo messaggio di benvenuto, non una messaggistica continuativa.",
      "A ottobre 2026, la documentazione per sviluppatori di Viber afferma che i bot possono essere creati solo a condizioni commerciali.",
    ],
    sections: [
      {
        heading: "Come funziona un bot di assistenza su Viber",
        blocks: [
          {
            type: "p",
            text: "Il tuo bot è identificato da un token di autenticazione. Ogni richiesta alla REST Bot API deve includerlo in un header HTTP chiamato X-Viber-Auth-Token; se lo ometti, ricevi un errore missing_auth_token. Registri un webhook HTTPS pubblico con set_webhook, Viber vi invia le callback man mano che succedono le cose e tu rispondi con send_message.",
          },
          {
            type: "p",
            text: "Quando chiami set_webhook, Viber verifica il tuo URL inviandogli una callback con l'evento webhook. La verifica riesce solo se il tuo server risponde con lo stato HTTP 200. Una risposta set_webhook riuscita ha status 0; un URL irraggiungibile restituisce status 1, invalidUrl.",
          },
          {
            type: "ol",
            items: [
              "Il cliente apre il tuo bot da un link sul tuo sito web e Viber invia una callback conversation_started.",
              "Il tuo bot invia un messaggio di benvenuto con pulsanti per gli argomenti più comuni.",
              "Il cliente risponde, il che lo iscrive, e il tuo bot riceve una callback message.",
              "Il bot risponde alle domande semplici e raccoglie i dati per tutto il resto.",
              "I casi non risolti diventano ticket nell'helpdesk, e le risposte degli operatori tornano indietro tramite send_message.",
            ],
          },
        ],
      },
      {
        heading: "Webhook ed eventi di callback",
        blocks: [
          {
            type: "p",
            text: "L'URL del webhook deve usare SSL con un certificato valido emesso da un'autorità di certificazione attendibile. L'elenco facoltativo event_types in set_webhook stabilisce quali callback ricevi, ma alcune non si possono disattivare.",
          },
          {
            type: "table",
            caption: "Le callback di Viber che un bot di assistenza gestisce",
            head: ["Evento", "Quando arriva", "Si può escludere con un filtro?"],
            rows: [
              ["webhook", "Subito dopo set_webhook, per verificare il tuo URL", "No, fa parte della configurazione"],
              ["conversation_started", "Un utente apre una chat individuale con il bot, per esempio tramite un deep link", "Sì"],
              ["subscribed", "Un utente si iscrive al bot (non quando l'iscrizione deriva da un primo messaggio)", "No"],
              ["unsubscribed", "Un utente annulla l'iscrizione; il bot non può più scrivergli", "No"],
              ["message", "Un utente invia un messaggio al bot", "No"],
              ["delivered, seen, failed", "Aggiornamenti di stato sui messaggi inviati dal bot", "Sì"],
            ],
          },
          {
            type: "p",
            text: "Viber firma ogni callback. L'header X-Viber-Content-Signature contiene un HMAC-SHA256 del corpo della richiesta, calcolato con il tuo token di autenticazione come chiave, quindi verificalo prima di elaborare qualsiasi cosa. Se il tuo webhook non restituisce HTTP 200, Viber ritenta la callback più volte, quindi assicurati che una callback ripetuta non crei un ticket duplicato.",
          },
        ],
      },
      {
        heading: "A chi può scrivere il tuo bot",
        blocks: [
          {
            type: "p",
            text: "Questa regola definisce ogni flusso di assistenza su Viber: il tuo bot può inviare messaggi solo agli utenti che si sono iscritti. Un evento conversation_started non è un'iscrizione. Consente un solo messaggio di benvenuto, che secondo Viber va inviato entro 5 minuti tramite send_message, includendo il parametro receiver. L'evento si attiva anche per gli utenti già iscritti.",
          },
          {
            type: "p",
            text: "Un utente si iscrive inviando un messaggio al bot. Quel primo messaggio genera una callback message, non una callback subscribed, quindi salva l'ID utente da entrambi gli eventi. Gli utenti possono annullare l'iscrizione in qualsiasi momento, il che blocca subito ogni ulteriore messaggio dal bot, e ricevi una callback unsubscribed con il loro ID. Se si iscrivono di nuovo, il contesto o i tracking_data della conversazione vengono eliminati.",
          },
          {
            type: "p",
            text: "Per avviare conversazioni dal tuo sito web, usa un deep link nel formato viber://pa?chatURI= seguito dall'URI del tuo bot. Aggiungere un parametro context passa un valore, come la pagina da cui arriva il cliente, nella callback conversation_started. Viber segnala che alcuni browser potrebbero non riconoscere il deep link. Per gli avvisi di disservizio, la broadcast API invia fino a 300 destinatari per richiesta, e chiunque non sia iscritto viene restituito come failed.",
          },
        ],
      },
      {
        heading: "Invio dei messaggi e tastiere",
        blocks: [
          {
            type: "p",
            text: "Una richiesta send_message indica il receiver (l'ID utente), il tipo di messaggio e un oggetto sender il cui name è obbligatorio e limitato a 28 caratteri. I messaggi di testo possono arrivare a 7.000 caratteri. Due campi facoltativi sono utili per l'assistenza: tracking_data (fino a 4.096 caratteri), che Viber ripassa insieme alla risposta dell'utente, quindi può contenere un ID ticket o il passaggio corrente di un flusso; e min_api_version, la versione minima dell'API client necessaria per il messaggio, che per impostazione predefinita è 1.",
          },
          {
            type: "p",
            text: "Le tastiere si possono associare a qualsiasi tipo di messaggio tramite il campo keyboard. Ogni pulsante ha un ActionType:",
          },
          {
            type: "ul",
            items: [
              "reply (il valore predefinito) invia al bot la risposta del pulsante.",
              "open-url apre un URL, all'interno di Viber o in un browser esterno a seconda di OpenURLType, e invia l'URL al bot.",
              "Sono disponibili anche location-picker, share-phone e none.",
            ],
          },
          {
            type: "p",
            text: "Due impostazioni della tastiera aiutano i flussi di assistenza. InputFieldState impostato su hidden rimuove il campo di testo quando vuoi che i clienti scelgano un pulsante, e DefaultHeight impostato su true mantiene la tastiera all'altezza di quella nativa.",
          },
        ],
      },
      {
        heading: "Condizioni commerciali e passaggio all'helpdesk",
        blocks: [
          {
            type: "p",
            text: "A ottobre 2026, la documentazione per sviluppatori di Viber afferma che “dal 5.02.24 i bot Viber possono essere creati solo a condizioni commerciali”, con richieste da inviare direttamente a Rakuten Viber o tramite i suoi partner ufficiali verificati. Chiedi a Viber o a un partner i prezzi attuali prima di sviluppare. La risposta di send_message include anche un campo con lo stato di fatturazione (billing status) che mostra come ogni messaggio è stato classificato ai fini della fatturazione.",
          },
          {
            type: "p",
            text: "Per il passaggio agli operatori, Zendesk elenca Viber tra i canali disponibili tramite Sunshine Conversations. Aggiungere canali Sunshine Conversations all'Agent Workspace richiede Suite Professional o superiore, e devi anche usare la messaggistica e l'Agent Workspace. I messaggi diventano così ticket, e le risposte degli operatori tornano al cliente. Senza questa opzione, lo schema abituale è un piccolo servizio che crea ticket tramite l'API del tuo helpdesk e invia le risposte degli operatori con send_message.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "I canali per bot indicati da TascaLab sono sito web, telefono, WhatsApp, Telegram, Facebook Messenger e Instagram. Viber non è in quell'elenco, ma altri canali con un'API possono essere valutati durante la call di audit gratuita di 30 minuti. TascaLab lavora sopra gli strumenti che usi già, come Zendesk, Freshdesk, Jira e Slack, tramite API, webhook e Make o n8n. Uno Starter Chat Bot costa 350–450 USD per uno o due canali e uno Standard Chat Bot 500–650 USD per tre-cinque canali. Ogni progetto include 30 giorni di supporto dopo il lancio, una documentazione di base e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Un bot Viber può scrivere per primo ai clienti?",
        a: "Solo agli utenti iscritti. Un evento conversation_started consente un solo messaggio di benvenuto, ma per i messaggi successivi l'utente deve iscriversi, cosa che avviene quando invia un messaggio al bot.",
      },
      {
        q: "Perché set_webhook non riesce?",
        a: "Viber verifica il tuo URL con una callback webhook e lo accetta solo se il tuo server restituisce HTTP 200. L'URL deve anche usare SSL con un certificato di un'autorità attendibile; i certificati autofirmati non sono supportati.",
      },
      {
        q: "Come può il mio bot sapere da dove arriva un cliente?",
        a: "Aggiungi un parametro context al tuo deep link viber://pa?chatURI=. Viber lo passa al tuo bot nella callback conversation_started.",
      },
      {
        q: "Posso ancora creare un bot Viber gratuito?",
        a: "A ottobre 2026, la documentazione per sviluppatori di Viber afferma che i bot possono essere creati solo a condizioni commerciali, direttamente tramite Rakuten Viber o tramite i suoi partner ufficiali verificati.",
      },
      {
        q: "Zendesk supporta Viber?",
        a: "Sì, tramite Sunshine Conversations. Zendesk indica che i suoi canali Sunshine Conversations nell'Agent Workspace richiedono Suite Professional o superiore.",
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
