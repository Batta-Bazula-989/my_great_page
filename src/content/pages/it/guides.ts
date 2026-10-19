import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-automazione-assistenza",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier per l'automazione dell'assistenza",
    title: "n8n vs Make vs Zapier per automatizzare l'assistenza (2026)",
    description:
      "n8n vs Make vs Zapier per automatizzare l'assistenza: licenze e hosting, come contano l'utilizzo, connettori Zendesk, Freshdesk, Jira e Slack, webhook, codice.",
    h1: "n8n vs Make vs Zapier per l'automazione dell'assistenza clienti",
    intro:
      "Le differenze principali tra n8n, Make e Zapier per il lavoro di assistenza sono dove girano e come conteggiano l'utilizzo. n8n può essere installato in self-hosting con la sua Sustainable Use License oppure usato come n8n Cloud, mentre Make e Zapier funzionano come servizi in hosting. Tutti e tre si collegano a Zendesk, Freshdesk, Jira e Slack, accettano webhook e hanno un passaggio di codice, quindi la scelta di solito dipende da dove stanno i dati, dai volumi e da quanta logica personalizzata ti serve.",
    keyFacts: [
      "Il software self-hosted di n8n usa la Sustainable Use License, una licenza fair-code creata da n8n nel 2022. n8n non si definisce open source.",
      "A ottobre 2026, n8n conteggia le esecuzioni (un'esecuzione di un workflow), Make i crediti (operazioni convertite 1:1) e Zapier i task (passaggi di azione riusciti).",
      "I trigger di Zapier e i passaggi Filter e Paths non consumano task. I moduli trigger di Make consumano 1 credito per esecuzione anche quando non trovano dati nuovi.",
      "Make ti permette di scegliere un data center negli USA o nell'UE quando crei un'organizzazione. Non puoi cambiarlo in seguito.",
      "Tutti e tre hanno un trigger webhook e un passaggio di codice che esegue JavaScript o Python.",
    ],
    sections: [
      {
        heading: "Confronto diretto",
        blocks: [
          {
            type: "p",
            text: "La tabella riassume ciò che dice la documentazione di ciascun fornitore, verificata a ottobre 2026. I prezzi sono stati esclusi di proposito. I piani cambiano spesso, quindi controlla la pagina dei prezzi aggiornata prima di decidere.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier per l'automazione dell'assistenza (a ottobre 2026)",
            head: ["Caratteristica", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Dove gira",
                "n8n Cloud (gestito da n8n) oppure self-hosted sulla tua macchina o infrastruttura",
                "Nei data center di Make. Scegli USA o UE per ogni organizzazione",
                "Nel cloud gestito di Zapier. Nessuna versione self-hosted o on-premises",
              ],
              [
                "Licenza",
                "Sustainable Use License (fair-code) per il software self-hosted",
                "Servizio in hosting secondo i termini di Make",
                "Servizio in hosting secondo i termini di Zapier",
              ],
              [
                "Unità di utilizzo",
                "Esecuzioni: un'esecuzione è un'esecuzione di un workflow",
                "Crediti: la maggior parte dei moduli consuma 1 credito per operazione",
                "Task: un task per ogni passaggio di azione riuscito",
              ],
              [
                "Connettori per helpdesk",
                "Nodi Zendesk (più Zendesk Trigger), Freshdesk, Jira Software e Slack",
                "App Zendesk, Freshdesk, Jira Cloud Platform e Slack",
                "App Zendesk, Freshdesk, Jira Service Management e Slack",
              ],
              [
                "Trigger webhook",
                "Nodo Webhook con URL di test e di produzione separati",
                "Modulo Custom webhook nell'app Webhooks",
                "Webhooks by Zapier: Catch Hook e Catch Raw Hook",
              ],
              [
                "Passaggio di codice",
                "Nodo Code: JavaScript o Python",
                "App Make Code: JavaScript o Python",
                "Code by Zapier: JavaScript (Node.js 22) o Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting e licenze",
        blocks: [
          {
            type: "p",
            text: "n8n ti offre due opzioni. n8n Cloud è un'istanza gestita che n8n fa girare per te. Il self-hosting significa far girare n8n sulla tua macchina o infrastruttura. Per la maggior parte delle installazioni self-hosted la documentazione consiglia Docker. Se non hai esperienza nella gestione dei server, consiglia invece n8n Cloud.",
          },
          {
            type: "p",
            text: "Il software self-hosted è coperto dalla Sustainable Use License, una licenza fair-code creata da n8n nel 2022. Puoi usare, modificare, creare opere derivate e ridistribuire il software, ma con dei limiti. L'uso è limitato a scopi aziendali interni o a uso non commerciale o personale, e puoi distribuirlo solo gratuitamente per scopi non commerciali. La definizione dell'Open Source Initiative non ammette limiti all'uso, quindi n8n non si definisce open source. I file con \".ee.\" nel nome sono coperti da una licenza separata, la n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make esegue i tuoi scenari nei propri data center. Quando crei un'organizzazione scegli gli Stati Uniti o l'Unione europea. Questa impostazione decide dove vengono archiviati e trattati i tuoi dati e non può essere modificata in seguito.",
          },
          {
            type: "p",
            text: "Zapier gira sul proprio cloud gestito. Il confronto di Zapier con n8n afferma che Zapier non può sostituire completamente n8n per le automazioni che, per motivi di conformità, devono girare in un ambiente self-hosted, air-gapped o on-premises.",
          },
          {
            type: "note",
            text: "Questo è un riassunto della licenza di n8n, non un'interpretazione. Se prevedi di integrare n8n in un prodotto che vendi, leggi prima il testo completo della licenza e le restrizioni d'uso.",
          },
        ],
      },
      {
        heading: "Come ogni strumento conteggia l'utilizzo (a ottobre 2026)",
        blocks: [
          {
            type: "p",
            text: "I tre prodotti usano unità di fatturazione diverse, quindi non puoi confrontare direttamente i limiti dei loro piani. Ecco come ogni fornitore definisce la propria unità.",
          },
          {
            type: "ul",
            items: [
              "Esecuzioni di n8n: n8n definisce un'esecuzione come un'esecuzione di un workflow. I piani a pagamento, cloud o self-hosted, hanno una quota di esecuzioni e solo le esecuzioni di produzione vi rientrano. Le esecuzioni manuali dall'editor non contano. Uno Schedule Trigger conta ogni volta che si attiva. Ogni richiesta webhook in entrata che avvia il workflow conta una volta.",
              "Crediti di Make: dal 27 agosto 2025 Make fattura in crediti e le operazioni esistenti sono state convertite 1:1. Un'operazione è un'esecuzione di un modulo che elabora o verifica dati. La maggior parte delle app consuma 1 credito per operazione. I moduli trigger consumano 1 credito per esecuzione, anche quando non trovano dati nuovi. Con il provider AI di Make, le funzioni AI consumano crediti in base a operazioni e token. Se colleghi un tuo provider AI, i crediti coprono le operazioni e i token li paghi a quel provider.",
              "Task di Zapier: Zapier conta un task ogni volta che un passaggio di azione viene eseguito con successo. I trigger non consumano mai task, e nemmeno i passaggi Filter o Paths. I passaggi che vanno in errore o si interrompono non contano. Alcuni prodotti, come i passaggi AI by Zapier, contano con una tariffa più alta.",
            ],
          },
          {
            type: "p",
            text: "Queste unità contano per un bot di assistenza che gira su ogni nuovo ticket o messaggio in chat. In n8n, anche un workflow lungo conta come un'esecuzione per ogni avvio. In Make, ogni modulo eseguito consuma crediti. In Zapier, ogni passaggio di azione riuscito è un task. Su Make, uno scenario che interroga periodicamente il tuo helpdesk consuma crediti anche quando non è cambiato nulla. I trigger istantanei basati su webhook evitano di pagare per questi controlli a vuoto.",
          },
        ],
      },
      {
        heading: "Connettori per Zendesk, Freshdesk, Jira e Slack",
        blocks: [
          {
            type: "p",
            text: "Tutti e tre gli strumenti hanno connettori pronti per questi quattro, ma nomi e profondità sono diversi. Prima di impegnarti, verifica che esistano esattamente il trigger e l'azione che ti servono.",
          },
          {
            type: "ul",
            items: [
              "n8n: c'è un nodo Zendesk con un nodo Zendesk Trigger separato. Il nodo Freshdesk copre ticket e contatti. Il nodo Jira Software copre issue, commenti e allegati. Il nodo Slack copre messaggi, canali, file e reazioni, e la sua operazione \"Send and Wait for Response\" supporta i flussi di approvazione. Se un nodo non supporta un'operazione, la documentazione suggerisce di chiamare l'API con il nodo HTTP Request, riutilizzando la stessa credenziale.",
              "Make: l'app Zendesk include moduli che monitorano i ticket e la loro attività. Funzionano come trigger istantanei tramite un webhook che crei in Zendesk. L'app Freshdesk copre ticket, conversazioni, contatti e aziende e offre anche trigger istantanei basati su webhook. Make elenca anche un'app Jira Cloud Platform e un'app Slack.",
              "Zapier: l'app Jira Service Management ha trigger per richieste nuove e aggiornate e un'azione che crea richieste. Zapier elenca Zap pronti che la collegano a Zendesk e Slack. L'app Freshdesk si collega a Slack e Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhook e passaggi di codice",
        blocks: [
          {
            type: "p",
            text: "I webhook permettono a un helpdesk o a un canale di chat di avviare un'automazione nel momento in cui succede qualcosa. I passaggi di codice coprono la logica che i passaggi integrati non riescono a gestire, come rimodellare un payload o chiamare un'API senza connettore.",
          },
          {
            type: "ul",
            items: [
              "Nodo Webhook di n8n: ogni nodo Webhook riceve due URL, un Test URL e un Production URL. Può rispondere subito, quando termina l'ultimo nodo, oppure tramite un nodo Respond to Webhook separato.",
              "App Webhooks di Make: il modulo Custom webhook crea un URL univoco per un singolo scenario e non puoi condividere lo stesso webhook tra più scenari. Un modulo Webhook response controlla cosa riceve il chiamante. Senza, la risposta predefinita è il testo \"Accepted\".",
              "Webhooks by Zapier: Catch Hook ti dà un URL univoco a cui l'altra app invia le richieste e analizza il corpo della richiesta. Catch Raw Hook restituisce il corpo non analizzato, insieme agli header. Retrieve Poll funziona al contrario e recupera i dati con una richiesta GET.",
              "Nodo Code di n8n: esegue JavaScript o Python, una sola volta per tutti gli elementi in ingresso (impostazione predefinita) oppure una volta per ciascun elemento. Su n8n Cloud, l'opzione Python non può importare librerie.",
              "App Make Code: il modulo Run code esegue JavaScript o Python e include alcune librerie integrate. Secondo la documentazione di Make, importare librerie proprie richiede un piano Enterprise.",
              "Code by Zapier: i passaggi di codice possono essere trigger o azioni e supportano JavaScript (Node.js 22) e Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Quale si adatta al tuo team di assistenza",
        blocks: [
          {
            type: "ul",
            items: [
              "I dati dei ticket devono restare su un'infrastruttura che controlli tu: n8n è l'unico dei tre che documenta un'opzione self-hosted.",
              "Vuoi uno strumento in hosting con archiviazione dei dati nell'UE impostata per organizzazione: l'opzione del data center UE di Make copre questa esigenza.",
              "Il tuo team usa già Zapier e i tuoi flussi sono brevi: trigger e filtri non consumano task, quindi le notifiche semplici restano economiche.",
              "I tuoi workflow hanno molti passaggi e girano su ogni ticket: confronta le esecuzioni per avvio di n8n con i crediti o i task per passaggio, ai tuoi volumi reali.",
            ],
          },
          {
            type: "p",
            text: "TascaLab realizza automazioni dell'assistenza sugli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack e strumenti interni) con API, webhook, Make e n8n. La maggior parte delle configurazioni richiede da 1 a 3 settimane. Ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "n8n è open source?",
        a: "n8n distribuisce il suo software con la Sustainable Use License, che definisce fair-code. Poiché la licenza limita il modo in cui il software può essere usato, n8n dichiara di non definirsi open source.",
      },
      {
        q: "Posso installare Make o Zapier in self-hosting?",
        a: "Make esegue gli scenari nel proprio data center negli USA o nell'UE, che scegli quando crei un'organizzazione. Zapier gira sul proprio cloud gestito e afferma di non poter sostituire completamente n8n quando le automazioni devono girare in un ambiente self-hosted o on-premises.",
      },
      {
        q: "I trigger di Zapier consumano task?",
        a: "No. Zapier conta un task ogni volta che un passaggio di azione viene eseguito con successo. I trigger e i passaggi Filter e Paths non consumano task.",
      },
      {
        q: "Un trigger di Make consuma crediti quando non c'è nulla di nuovo?",
        a: "Sì. Il centro assistenza di Make dice che i moduli trigger consumano 1 credito per esecuzione, anche quando non trovano dati nuovi. I trigger istantanei basati su webhook evitano queste esecuzioni a vuoto.",
      },
      {
        q: "Cosa conta come esecuzione in n8n?",
        a: "Un'esecuzione di un workflow. Nei piani a pagamento rientrano nella quota solo le esecuzioni di produzione. Le esecuzioni manuali dall'editor no.",
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
