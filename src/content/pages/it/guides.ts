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
            text: "TascaLab realizza automazioni dell'assistenza sugli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack e strumenti interni) con API, webhook, Make e n8n. La maggior parte delle configurazioni richiede da 1 a 3 settimane. Ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
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
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "ai-act-chatbot-obblighi-articolo-50",
    category: "guides",
    navLabel: "AI Act: regole per i chatbot",
    primaryKeyword: "AI Act chatbot obblighi",
    title: "AI Act e chatbot: obblighi dell'articolo 50 e date chiave",
    description:
      "AI Act e chatbot: cosa richiede l'articolo 50, chi è fornitore o deployer, le date chiave e cosa ha cambiato nel 2026 il Digital Omnibus on AI.",
    h1: "AI Act e chatbot: cosa richiede l'articolo 50 e quando",
    intro:
      "In base all'AI Act dell'UE (regolamento (UE) 2024/1689), i fornitori devono progettare i sistemi di IA che interagiscono direttamente con le persone, come i chatbot, in modo che quelle persone siano informate del fatto di interagire con un sistema di IA, a meno che ciò non risulti evidente dal contesto. Questo obbligo è previsto dall'articolo 50 e si applica dal 2 agosto 2026. Il Digital Omnibus on AI del 2026 ha spostato le scadenze per l'alto rischio, ma la Commissione indica ancora il 2 agosto 2026 come data di applicazione dell'articolo 50.",
    keyFacts: [
      "Articolo 50(1): i fornitori devono garantire che le persone siano informate del fatto di interagire con un sistema di IA, a meno che ciò non risulti evidente dal contesto.",
      "Articolo 50(5): l'informazione deve essere fornita in modo chiaro e distinguibile, al più tardi al momento della prima interazione.",
      "L'AI Act è entrato in vigore il 1° agosto 2024. L'articolo 50 si applica dal 2 agosto 2026.",
      "Il Digital Omnibus on AI (regolamento (UE) 2026/1744) è entrato in vigore il 27 luglio 2026. Ha spostato le scadenze per l'alto rischio al 2 dicembre 2027 e al 2 agosto 2028.",
      "La violazione dell'articolo 50 può comportare sanzioni fino a 15 milioni di EUR o al 3% del fatturato mondiale annuo, se superiore.",
    ],
    sections: [
      {
        heading: "Cosa richiede l'articolo 50 per i chatbot",
        blocks: [
          {
            type: "p",
            text: "L'articolo 50(1) stabilisce che i fornitori devono garantire che i sistemi di IA destinati a interagire direttamente con le persone fisiche siano progettati e sviluppati in modo che le persone interessate siano informate del fatto di interagire con un sistema di IA. L'eccezione è quando ciò risulta evidente per una persona ragionevolmente informata, attenta e avveduta, tenuto conto delle circostanze e del contesto di utilizzo. L'obbligo non si applica ai sistemi di IA autorizzati dalla legge per accertare, prevenire, indagare o perseguire reati, fatte salve adeguate garanzie.",
          },
          {
            type: "p",
            text: "L'articolo 50(5) disciplina come e quando le persone devono essere informate. L'informazione deve essere fornita in modo chiaro e distinguibile al più tardi al momento della prima interazione o esposizione, e deve rispettare i requisiti di accessibilità applicabili.",
          },
          {
            type: "p",
            text: "L'articolo 50 prevede anche altri obblighi di trasparenza. Solo il primo di questo elenco riguarda specificamente i chatbot:",
          },
          {
            type: "ul",
            items: [
              "Articolo 50(1): i fornitori di sistemi che interagiscono direttamente con le persone devono progettarli in modo che le persone sappiano di avere a che fare con un'IA.",
              "Articolo 50(2): i fornitori di sistemi che generano audio, immagini, video o testi sintetici devono marcare gli output in un formato leggibile da una macchina, così che siano rilevabili come generati dall'IA.",
              "Articolo 50(3): i deployer di sistemi di riconoscimento delle emozioni o di categorizzazione biometrica devono informare le persone esposte.",
              "Articolo 50(4): i deployer devono rendere noti i deepfake e i testi generati dall'IA pubblicati per informare il pubblico su questioni di interesse pubblico. Per questi testi, l'obbligo non si applica quando sono stati sottoposti a revisione umana e qualcuno ne detiene la responsabilità editoriale.",
            ],
          },
        ],
      },
      {
        heading: "Fornitore o deployer: su chi ricade l'obbligo",
        blocks: [
          {
            type: "p",
            text: "L'articolo 3(3) definisce fornitore una persona o un organismo che sviluppa un sistema di IA, o lo fa sviluppare, e lo immette sul mercato o lo mette in servizio con il proprio nome o marchio, a titolo oneroso o gratuito. L'articolo 3(4) definisce deployer chiunque utilizzi un sistema di IA sotto la propria autorità, salvo il caso di un uso personale non professionale.",
          },
          {
            type: "p",
            text: "L'informativa sui chatbot dell'articolo 50(1) è un obbligo del fornitore. Gli obblighi di etichettatura degli articoli 50(3) e 50(4) sono obblighi del deployer. Se la tua azienda sviluppa un assistente per l'assistenza clienti e lo gestisce con il proprio marchio, confronta con attenzione entrambe le definizioni con il modo in cui il sistema è stato costruito e con chi lo mette davanti ai clienti.",
          },
        ],
      },
      {
        heading: "Come si applica l'obbligo di informativa all'automazione dell'assistenza",
        blocks: [
          {
            type: "p",
            text: "Le FAQ della Commissione sull'articolo 50 spiegano che i suoi orientamenti fissano quattro criteri cumulativi per l'obbligo legato all'interazione: il sistema è un sistema di IA, è costruito per un vero scambio bidirezionale, comunica direttamente e non tramite un intermediario umano, e interagisce con persone fisiche. Secondo le FAQ, i sistemi che lavorano solo in background, tramite comunicazione machine-to-machine o senza contatto diretto con le persone, non rientrano in questo obbligo. Le FAQ precisano inoltre che l'eccezione dell'\"evidente\" va interpretata in modo restrittivo.",
          },
          {
            type: "table",
            caption: "Domande da porsi sulle configurazioni di assistenza più comuni, in base ai criteri della Commissione",
            head: ["Configurazione", "Cosa verificare rispetto ai criteri"],
            rows: [
              [
                "Chatbot IA sul tuo sito web, su WhatsApp o su Messenger",
                "Scambia messaggi direttamente con i clienti? Se sì, prevedi un'informativa al primo messaggio o prima.",
              ],
              [
                "Voice bot IA che risponde alle chiamate",
                "Stessa domanda per le conversazioni vocali. L'articolo 50(5) richiama anche i requisiti di accessibilità.",
              ],
              [
                "IA che classifica e instrada i ticket",
                "Lavora solo in background, senza contatto diretto con i clienti? Le FAQ collocano questi sistemi fuori dall'obbligo legato all'interazione.",
              ],
              [
                "IA che prepara bozze di risposta che un agente rivede e invia",
                "Comunica con il cliente direttamente o tramite un intermediario umano? Verificalo rispetto agli orientamenti.",
              ],
            ],
          },
          {
            type: "p",
            text: "In pratica, molti team aprono ogni conversazione con l'IA con una breve frase come \"Stai chattando con un assistente IA. Scrivi 'operatore' per parlare con una persona.\" Farlo è una scelta di design. Se sia sufficiente per il tuo sistema è una questione da valutare con gli orientamenti e con il tuo consulente.",
          },
        ],
      },
      {
        heading: "Date chiave, compreso il Digital Omnibus del 2026",
        blocks: [
          {
            type: "p",
            text: "L'articolo 113 fissa il calendario dell'AI Act. A novembre 2025 la Commissione ha proposto di modificarne alcune parti con un Digital Omnibus on AI (COM(2025) 836, del 19 novembre 2025). Da allora la proposta è stata adottata: dopo un accordo politico del 7 maggio 2026 e l'adozione formale, è stata pubblicata come regolamento (UE) 2026/1744. Secondo la Commissione è entrato in vigore il 27 luglio 2026. La tabella riporta le date adottate.",
          },
          {
            type: "table",
            caption: "Date di applicazione dell'AI Act (testi ufficiali verificati il 19 ottobre 2026)",
            head: ["Data", "Cosa si applica", "Base giuridica"],
            rows: [
              ["1° agosto 2024", "L'AI Act entra in vigore", "Articolo 113, regolamento (UE) 2024/1689"],
              ["2 febbraio 2025", "Si applicano i capi I e II, comprese l'alfabetizzazione in materia di IA e le pratiche vietate", "Articolo 113, lettera a)"],
              ["2 agosto 2025", "Si applicano le norme su organismi notificati, modelli di IA per finalità generali, governance e sanzioni (tranne l'articolo 101)", "Articolo 113, lettera b)"],
              ["2 agosto 2026", "Applicazione generale, compresi gli obblighi di trasparenza dell'articolo 50", "Articolo 113; FAQ della Commissione sull'articolo 50"],
              ["2 dicembre 2026", "Scadenza per la marcatura ai sensi dell'articolo 50(2) da parte dei sistemi di IA generativa immessi sul mercato prima del 2 agosto 2026; nuovo divieto per l'IA che genera contenuti intimi non consensuali o materiale pedopornografico", "Regolamento (UE) 2026/1744 (adottato)"],
              ["2 dicembre 2027", "Norme sull'alto rischio per i sistemi classificati ai sensi dell'articolo 6(2) e dell'allegato III", "Regolamento (UE) 2026/1744 (adottato)"],
              ["2 agosto 2028", "Norme sull'alto rischio per i sistemi classificati ai sensi dell'articolo 6(1) e dell'allegato I (prodotti)", "Regolamento (UE) 2026/1744 (adottato); sostituisce la data originaria del 2 agosto 2027"],
            ],
          },
          {
            type: "p",
            text: "Una differenza tra la proposta e il testo adottato riguarda l'IA generativa. La proposta della Commissione avrebbe concesso ai fornitori di sistemi generativi già sul mercato un periodo di tolleranza di sei mesi per la marcatura ai sensi dell'articolo 50(2). Il regolamento adottato fissa la scadenza al 2 dicembre 2026. Secondo le FAQ della Commissione, l'informativa sui chatbot dell'articolo 50(1) si applica comunque dal 2 agosto 2026.",
          },
        ],
      },
      {
        heading: "Sanzioni e indicazioni ufficiali",
        blocks: [
          {
            type: "p",
            text: "In base all'articolo 99(4), la violazione degli obblighi dell'articolo 50 può comportare sanzioni amministrative pecuniarie fino a 15.000.000 EUR o, per un'impresa, fino al 3% del fatturato mondiale annuo totale dell'esercizio precedente, se superiore. Per le PMI, comprese le start-up, l'articolo 99 applica il minore dei due importi.",
          },
          {
            type: "p",
            text: "Il 20 luglio 2026 la Commissione ha pubblicato gli orientamenti sugli obblighi di trasparenza dell'articolo 50. Un codice di buone pratiche separato e volontario, il Code of Practice on Transparency of AI-generated Content, copre l'articolo 50(2), (4) e (5). La Commissione precisa che non sottoscriverlo non significa non essere conformi. Per l'obbligo relativo ai chatbot dell'articolo 50(1), le FAQ dicono che fornitori e deployer possono decidere autonomamente le misure adeguate, tenendo conto degli orientamenti.",
          },
          {
            type: "note",
            text: "Questa non è una consulenza legale. Questa pagina descrive ciò che dicono l'AI Act, il Digital Omnibus e le indicazioni della Commissione al 19 ottobre 2026. Per le decisioni sui tuoi sistemi, leggi i testi ufficiali su EUR-Lex e rivolgiti a un avvocato qualificato.",
          },
        ],
      },
      {
        heading: "Integrare l'informativa in un bot di assistenza",
        blocks: [
          {
            type: "ul",
            items: [
              "Inserisci l'informativa sull'IA nel primo messaggio o nel saluto vocale, non solo nei termini di servizio.",
              "Rendi l'informativa leggibile dagli screen reader e chiara nella versione vocale, dato che l'articolo 50(5) menziona l'accessibilità.",
              "Offri ai clienti un modo visibile per raggiungere una persona e trasferisci la cronologia della conversazione, così non devono ripetersi.",
              "Conserva una traccia del testo dell'informativa e di quando l'hai modificato, così puoi dimostrare cosa vedevano i clienti.",
            ],
          },
          {
            type: "p",
            text: "TascaLab realizza chatbot e voice bot sugli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack e strumenti interni). I progetti Standard Chat Bot costano {{price:standard}} e i progetti Voice Bot {{price:voice}}. Entrambi includono documentazione di base e 30 giorni di supporto dopo il lancio.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Devo dire ai clienti che stanno parlando con un chatbot?",
        a: "L'articolo 50(1) dell'AI Act impone ai fornitori di progettare i sistemi di IA che interagiscono direttamente con le persone in modo che queste siano informate del fatto di interagire con un sistema di IA, a meno che ciò non risulti evidente dal contesto. La Commissione afferma che l'eccezione dell'\"evidente\" va interpretata in modo restrittivo.",
      },
      {
        q: "Quando si applicano le regole dell'AI Act sui chatbot?",
        a: "L'articolo 50 si applica dal 2 agosto 2026. Le FAQ della Commissione prevedono un periodo di tolleranza fino al 2 dicembre 2026 solo per la marcatura ai sensi dell'articolo 50(2) da parte dei sistemi generativi già sul mercato.",
      },
      {
        q: "Il Digital Omnibus ha rinviato l'AI Act?",
        a: "In parte. Il regolamento (UE) 2026/1744, in vigore dal 27 luglio 2026 secondo la Commissione, ha spostato gli obblighi per l'alto rischio al 2 dicembre 2027 (allegato III) e al 2 agosto 2028 (prodotti dell'allegato I). Non ha spostato la data del 2 agosto 2026 per l'articolo 50.",
      },
      {
        q: "Un sistema di IA che instrada i ticket deve avere un'informativa sull'IA?",
        a: "Le FAQ della Commissione dicono che i sistemi che lavorano solo in background, tramite comunicazione machine-to-machine o senza contatto diretto con le persone, non rientrano nell'obbligo legato all'interazione dell'articolo 50(1). Verifica la tua configurazione rispetto agli orientamenti della Commissione.",
      },
      {
        q: "Quali sono le sanzioni per la violazione dell'articolo 50?",
        a: "In base all'articolo 99(4), fino a 15 milioni di EUR o al 3% del fatturato mondiale annuo totale, se superiore. Per le PMI, comprese le start-up, si applica il minore dei due importi.",
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
    slug: "gdpr-automazione-assistenza-clienti",
    category: "guides",
    navLabel: "GDPR e automazione del supporto",
    primaryKeyword: "GDPR e automazione dell'assistenza clienti",
    title: "GDPR e automazione dell'assistenza clienti: guida pratica",
    description:
      "GDPR e automazione dell'assistenza: basi giuridiche, minimizzazione, conservazione dei dati e accordi con i responsabili per chatbot e workflow dell'helpdesk.",
    h1: "GDPR e automazione dell'assistenza clienti: una guida pratica",
    intro:
      "Il GDPR si applica all'automazione dell'assistenza come a qualsiasi altro trattamento di dati personali. Ti serve una base giuridica ai sensi dell'articolo 6, tratti solo i dati che ti servono (articolo 5(1)(c)) e li conservi solo per il tempo necessario (articolo 5(1)(e)), e i fornitori che trattano dati per tuo conto devono avere un contratto ai sensi dell'articolo 28. Per chatbot e workflow dell'helpdesk, gran parte di tutto questo si riduce a scelte di progettazione: quali campi invii, dove finiscono e per quanto tempo vengono conservati i log.",
    keyFacts: [
      "Articolo 5(1)(c): i dati personali devono essere adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità.",
      "L'articolo 6(1) elenca sei basi giuridiche. La Corte di giustizia dell'UE considera l'elenco esaustivo.",
      "L'articolo 28(3) richiede un contratto vincolante con ogni responsabile del trattamento, che preveda tra l'altro che agisca solo su tue istruzioni documentate.",
      "L'EDPB afferma che verificare che un responsabile del trattamento offra garanzie sufficienti è un obbligo continuativo, non una tantum.",
      "Make ti permette di scegliere un data center negli USA o nell'UE quando crei un'organizzazione. Non puoi cambiarlo in seguito.",
    ],
    sections: [
      {
        heading: "Dove compaiono i dati personali nell'automazione dell'assistenza",
        blocks: [
          {
            type: "p",
            text: "Un'automazione dell'assistenza tocca dati personali in diversi punti, spesso più di quanti il team immagini. Mapparli è il primo passo pratico, perché ognuno è un punto in cui entrano in gioco minimizzazione dei dati, conservazione e contratti con i fornitori.",
          },
          {
            type: "ul",
            items: [
              "Trascrizioni di chat ed email: nomi, email, numeri di telefono, numeri d'ordine e qualsiasi altra cosa scrivano i clienti.",
              "Campi e allegati dei ticket dell'helpdesk che un'automazione legge o copia in un altro strumento.",
              "Prompt e risposte inviati a un modello di IA, se il tuo bot ne usa uno.",
              "Log di esecuzione nella tua piattaforma di automazione, che possono memorizzare i dati ricevuti da ogni passaggio.",
              "Notifiche pubblicate su Slack o su altri strumenti interni.",
            ],
          },
        ],
      },
      {
        heading: "Gli articoli del GDPR che contano di più per un bot di assistenza",
        blocks: [
          {
            type: "table",
            caption: "Articoli del GDPR e il loro impatto pratico sull'automazione dell'assistenza",
            head: ["Articolo", "Cosa dice il testo", "Cosa significa per un bot di assistenza"],
            rows: [
              [
                "Art. 5(1)(c): minimizzazione dei dati",
                "I dati personali sono adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità.",
                "Invia a ogni passaggio solo i campi di cui ha bisogno. Oscurare gli identificativi prima che il testo arrivi a un modello di IA è un modo per farlo.",
              ],
              [
                "Art. 5(1)(e): limitazione della conservazione",
                "I dati sono conservati in una forma che consenta l'identificazione delle persone per un arco di tempo non superiore al necessario per le finalità, con eccezioni per archiviazione, ricerca e statistica con le garanzie dell'articolo 89(1).",
                "Stabilisci periodi di conservazione per i log delle chat, le esportazioni dei ticket e i log di esecuzione delle automazioni.",
              ],
              [
                "Art. 6(1): liceità",
                "Il trattamento è lecito solo se si applica almeno una di sei basi: consenso, contratto, obbligo legale, interessi vitali, compito di interesse pubblico o legittimo interesse.",
                "Registra quale base copre ogni finalità, per esempio rispondere a una richiesta rispetto ad analizzare le trascrizioni.",
              ],
              [
                "Art. 28: responsabili del trattamento",
                "Ricorri solo a responsabili del trattamento che offrono garanzie sufficienti, con un contratto vincolante che definisce il trattamento e li obbliga ad agire su tue istruzioni documentate.",
                "Stipula un contratto con ogni fornitore della catena: helpdesk, piattaforma di automazione, provider di IA e hosting.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Base giuridica: decidi per ogni finalità",
        blocks: [
          {
            type: "p",
            text: "L'articolo 6(1) elenca sei basi giuridiche: consenso, contratto, obbligo legale, interessi vitali, compito di interesse pubblico e legittimo interesse. La Corte di giustizia dell'UE ha descritto questo elenco come esaustivo e tassativo, quindi il trattamento deve rientrare in almeno una di esse.",
          },
          {
            type: "p",
            text: "Nel lavoro di assistenza ricorrono più spesso due basi. La base contrattuale copre il trattamento necessario all'esecuzione di un contratto con la persona o all'esecuzione di misure precontrattuali adottate su sua richiesta. Nella causa C-621/22, la Corte di giustizia ha affermato che il legittimo interesse richiede tre condizioni cumulative: il titolare del trattamento o un terzo persegue un interesse legittimo, il trattamento è necessario per tale interesse e gli interessi o i diritti fondamentali della persona non prevalgono su di esso. Le autorità pubbliche non possono basarsi sul legittimo interesse per i trattamenti effettuati nell'esecuzione dei loro compiti.",
          },
          {
            type: "p",
            text: "In pratica, elenca ogni finalità separatamente. Rispondere alla domanda del cliente, formare il personale sulle trascrizioni passate e creare report sono finalità diverse, e ognuna ha bisogno della propria base.",
          },
        ],
      },
      {
        heading: "Responsabili del trattamento e accordi ai sensi dell'articolo 28",
        blocks: [
          {
            type: "p",
            text: "In base all'articolo 28(1), puoi ricorrere solo a responsabili del trattamento che presentino garanzie sufficienti per mettere in atto misure tecniche e organizzative adeguate. L'articolo 28(3) richiede un contratto o altro atto giuridico che stabilisca la materia disciplinata, la durata, la natura e la finalità del trattamento, il tipo di dati personali e le categorie di interessati. Deve anche prevedere che il responsabile agisca solo su tue istruzioni documentate, anche per quanto riguarda i trasferimenti di dati personali verso un paese terzo. In base all'articolo 28(4), un responsabile che ricorre a un sub-responsabile deve trasferirgli per contratto gli stessi obblighi in materia di protezione dei dati, e il responsabile iniziale resta pienamente responsabile nei tuoi confronti.",
          },
          {
            type: "ul",
            items: [
              "Linee guida EDPB 07/2020: verificare le garanzie di un responsabile del trattamento è un obbligo continuativo, con audit e ispezioni ove opportuno. Le istruzioni possono essere riportate in un allegato al contratto o in altra forma scritta, come un'email, purché tu ne conservi traccia. Un elenco generico di sub-responsabili che può essere aggiornato di tanto in tanto non basta. Il responsabile dovrebbe informarti attivamente delle modifiche.",
              "Parere EDPB 22/2024: l'obbligo di verificare che responsabili e sub-responsabili offrano garanzie sufficienti si applica qualunque sia il livello di rischio, anche se la profondità delle verifiche può variare. La decisione finale sul ricorso a uno specifico sub-responsabile, e la relativa responsabilità, restano in capo al titolare del trattamento.",
            ],
          },
          {
            type: "p",
            text: "Una tipica catena di assistenza può includere un helpdesk, una piattaforma di automazione, un provider di modelli di IA e uno strumento di chat. Annota quali fornitori trattano dati personali per tuo conto, controlla i termini sul trattamento dei dati e l'elenco dei sub-responsabili di ciascuno e conservali agli atti.",
          },
        ],
      },
      {
        heading: "Hosting, ubicazione dei dati e impostazioni di conservazione",
        blocks: [
          {
            type: "p",
            text: "Il luogo in cui gira la tua automazione decide dove vengono archiviati i suoi dati. Make offre due ubicazioni di data center, gli Stati Uniti e l'Unione europea. Ne scegli una quando crei un'organizzazione, non può essere cambiata in seguito e determina dove vengono archiviati e trattati i tuoi dati. Se installi n8n in self-hosting, le sue impostazioni di esecuzione controllano quanti dati di esecuzione vengono conservati. Il valore predefinito documentato è un massimo di 10.000 esecuzioni memorizzate, e 0 significa nessun limite.",
          },
          {
            type: "p",
            text: "Poiché l'articolo 28(3) copre le istruzioni sui trasferimenti verso paesi terzi, verifica nei termini di ogni fornitore dove vengono trattati i dati. Imposta la conservazione in ogni strumento che mantiene una copia dei dati, non solo nel tuo helpdesk.",
          },
        ],
      },
      {
        heading: "Scelte di progettazione pratiche per un'automazione attenta al GDPR",
        blocks: [
          {
            type: "ul",
            items: [
              "Passa gli ID dei ticket e i campi che servono a un passaggio invece di intere schede cliente.",
              "Maschera email, numeri di telefono e dati di pagamento prima che il testo arrivi a un modello di IA. Il testo oscurato può comunque contenere dati personali, quindi trattalo con la stessa cura.",
              "Sfoltisci i log di esecuzione delle automazioni e disattiva la registrazione completa dei payload dove non ti serve.",
              "Prevedi un modo per trovare, esportare o cancellare i dati di un singolo cliente nel bot, nell'helpdesk e nei log, così le singole richieste non richiedono una ricerca manuale.",
              "Invia i casi delicati o ad alto impatto a un agente umano invece di lasciar decidere il bot.",
              "Ricorda che i chatbot rientrano anche nelle norme di trasparenza separate dell'AI Act dell'UE.",
            ],
          },
          {
            type: "note",
            text: "Questa non è una consulenza legale. Questa pagina descrive ciò che dicono il testo del GDPR e le indicazioni dell'EDPB, oltre alle pratiche tecniche più comuni. Per le decisioni sui tuoi trattamenti, rivolgiti al tuo responsabile della protezione dei dati o a un avvocato qualificato.",
          },
          {
            type: "p",
            text: "TascaLab realizza automazioni su Zendesk, Freshdesk, Jira, Slack e strumenti interni, usando API, webhook, Make e n8n. Ogni progetto include una documentazione di base di ciò che è stato realizzato, utile quando mappi i flussi di dati, più 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quale base giuridica del GDPR copre un chatbot di assistenza?",
        a: "Il GDPR non ne assegna una. L'articolo 6(1) elenca sei basi, tra cui il contratto e il legittimo interesse, e sei tu a scegliere e registrare quella adatta a ogni finalità. La Corte di giustizia dell'UE considera l'elenco esaustivo.",
      },
      {
        q: "Mi serve un accordo sul trattamento dei dati con la mia piattaforma di automazione?",
        a: "L'articolo 28(3) richiede che i trattamenti da parte di un responsabile siano disciplinati da un contratto o altro atto giuridico che copra, tra l'altro, la materia disciplinata, la durata, la natura e la finalità del trattamento. Se un fornitore tratta dati personali per tuo conto, verifica che questi termini siano in essere.",
      },
      {
        q: "Posso inviare i messaggi dei clienti a un modello di IA?",
        a: "Si applicano gli stessi principi del GDPR validi per qualsiasi altro trattamento: una base giuridica, la minimizzazione dei dati e un contratto con il responsabile quando il provider tratta dati per tuo conto. Oscurare gli identificativi prima di inviare il testo è un modo pratico per ridurre ciò che condividi.",
      },
      {
        q: "Per quanto tempo posso conservare le trascrizioni delle chat?",
        a: "L'articolo 5(1)(e) dice che i dati personali vanno conservati in una forma che consenta l'identificazione delle persone per un arco di tempo non superiore al necessario per le finalità. Il testo non fissa un numero di giorni, quindi stabilisci un periodo di conservazione per ogni finalità.",
      },
      {
        q: "Dove archivia i miei dati Make?",
        a: "Make ha data center negli USA e nell'UE. Ne scegli uno quando crei un'organizzazione e non può essere cambiato in seguito.",
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
    slug: "european-accessibility-act-assistenza-clienti",
    category: "guides",
    navLabel: "European Accessibility Act",
    primaryKeyword: "European Accessibility Act assistenza clienti",
    title: "European Accessibility Act: regole per l'assistenza clienti",
    description:
      "European Accessibility Act e assistenza clienti: servizi interessati, date chiave, esenzione per le microimprese e cosa chiede l'allegato I al supporto.",
    h1: "European Accessibility Act e assistenza clienti: cosa devono sapere i team di supporto",
    intro:
      "L'European Accessibility Act (direttiva (UE) 2019/882) si applica dal 28 giugno 2025 a un elenco di servizi ai consumatori che comprende il commercio elettronico, i servizi bancari per i consumatori, gli e-book e le comunicazioni elettroniche. Per i servizi che rientrano nell'ambito di applicazione, l'allegato I chiede che siti web e app mobili siano accessibili e che i servizi di assistenza come help desk e call center, se presenti, forniscano informazioni sull'accessibilità del servizio tramite modalità di comunicazione accessibili. Le microimprese che forniscono servizi sono esentate.",
    keyFacts: [
      "Articolo 31: gli Stati membri dovevano adottare le leggi nazionali entro il 28 giugno 2022 e applicarle dal 28 giugno 2025.",
      "L'articolo 2(2) copre servizi ai consumatori come comunicazioni elettroniche, servizi bancari per i consumatori, e-book e commercio elettronico.",
      "L'articolo 4(5) esenta le microimprese che forniscono servizi; l'articolo 3(23) le definisce come imprese con meno di 10 persone e un fatturato o un totale di bilancio non superiore a 2 milioni di EUR.",
      "Allegato I, sezione III: se presenti, i servizi di assistenza devono fornire informazioni sull'accessibilità del servizio tramite modalità di comunicazione accessibili.",
      "La EN 301 549 V4.1.1 è stata adottata ad agosto 2026, ma secondo AccessibleEU non è ancora il riferimento giuridico per la conformità all'EAA.",
    ],
    sections: [
      {
        heading: "Quali servizi copre l'European Accessibility Act",
        blocks: [
          {
            type: "p",
            text: "La direttiva (UE) 2019/882, nota come European Accessibility Act o EAA, stabilisce requisiti di accessibilità per un elenco di prodotti all'articolo 2(1) e per un elenco di servizi all'articolo 2(2). Questa pagina si concentra sui servizi, perché è lì che si colloca l'assistenza clienti. L'articolo 2(2) si applica ai seguenti servizi forniti ai consumatori dopo il 28 giugno 2025.",
          },
          {
            type: "table",
            caption: "Servizi elencati all'articolo 2(2) della direttiva (UE) 2019/882",
            head: ["Articolo 2(2)", "Servizio", "Punti di contatto dell'assistenza da verificare"],
            rows: [
              ["(a)", "Servizi di comunicazione elettronica, esclusi i servizi di trasmissione utilizzati per servizi machine-to-machine", "Pagine di aiuto, live chat e opzioni di contatto per gli abbonati"],
              ["(b)", "Servizi che forniscono accesso a servizi di media audiovisivi", "Assistenza in-app e chat di supporto"],
              ["(c)", "Alcuni elementi dei servizi di trasporto passeggeri aereo, con autobus, ferroviario e per vie navigabili", "Assistenza alla prenotazione, informazioni di viaggio e chat sul sito web o nell'app"],
              ["(d)", "Servizi bancari per i consumatori", "Chatbot e voice bot che rispondono a domande su conti o carte"],
              ["(e)", "E-book e software dedicati", "Help desk per le app di lettura e gli acquisti"],
              ["(f)", "Servizi di commercio elettronico", "Widget di chat nel negozio, bot sullo stato degli ordini, flusso dei resi"],
            ],
          },
          {
            type: "p",
            text: "La direttiva definisce i servizi di commercio elettronico come servizi forniti a distanza, tramite siti web e servizi su dispositivi mobili, per via elettronica e su richiesta individuale di un consumatore in vista della conclusione di un contratto con il consumatore. I considerando della direttiva aggiungono che gli obblighi relativi al commercio elettronico riguardano la vendita online di qualsiasi prodotto o servizio. La terza colonna della tabella è un suggerimento di checklist, non un'indicazione di ciò che la legge richiede alla tua azienda.",
          },
        ],
      },
      {
        heading: "Date chiave e periodi transitori",
        blocks: [
          {
            type: "p",
            text: "L'EAA è una direttiva, quindi arriva alle aziende tramite le leggi nazionali. L'articolo 31 imponeva agli Stati membri di adottare e pubblicare tali leggi entro il 28 giugno 2022 e di applicarle dal 28 giugno 2025. L'articolo 32 aggiunge alcuni periodi transitori.",
          },
          {
            type: "table",
            caption: "Date dell'EAA per i servizi (direttiva (UE) 2019/882)",
            head: ["Data", "Cosa significa", "Articolo"],
            rows: [
              ["28 giugno 2022", "Termine entro cui gli Stati membri dovevano adottare e pubblicare le leggi nazionali di recepimento della direttiva", "Articolo 31"],
              ["28 giugno 2025", "Si applicano le misure nazionali. L'articolo 2(2) copre i servizi forniti ai consumatori dopo questa data", "Articoli 2(2) e 31"],
              ["Fino a 5 anni dal 28 giugno 2025", "I contratti di servizio stipulati prima del 28 giugno 2025 possono proseguire senza modifiche fino alla loro scadenza", "Articolo 32"],
              ["28 giugno 2030", "Fine del periodo in cui i fornitori di servizi possono continuare a fornire servizi con prodotti che già utilizzavano legalmente per servizi analoghi", "Articolo 32"],
              ["Fino a 20 anni di servizio", "Gli Stati membri possono consentire che i terminali self-service utilizzati prima del 28 giugno 2025 continuino a funzionare fino alla fine della loro vita utile, ma non oltre 20 anni dalla loro messa in servizio", "Articolo 32"],
            ],
          },
          {
            type: "p",
            text: "Poiché ogni Stato membro scrive la propria legge, i testi nazionali e le autorità che li fanno rispettare variano da paese a paese. La Commissione afferma di monitorare il recepimento completo e corretto dell'atto. Se servi clienti in più paesi dell'UE, verifica la legge nazionale di ciascuno.",
          },
        ],
      },
      {
        heading: "L'esenzione per le microimprese e gli altri limiti",
        blocks: [
          {
            type: "p",
            text: "L'articolo 3(23) definisce microimpresa un'impresa che occupa meno di 10 persone e ha un fatturato annuo non superiore a 2 milioni di EUR o un totale di bilancio annuo non superiore a 2 milioni di EUR. In base all'articolo 4(5), le microimprese che forniscono servizi sono esentate dai requisiti di accessibilità dell'articolo 4(3) e dagli obblighi relativi al loro rispetto. I considerando spiegano che chiedere a queste imprese di effettuare una valutazione costituirebbe di per sé un onere sproporzionato. La direttiva incoraggia comunque le microimprese a fornire servizi conformi ai requisiti.",
          },
          {
            type: "p",
            text: "L'esenzione copre solo i servizi. Le microimprese che trattano prodotti sono trattate diversamente e non sono del tutto esentate.",
          },
          {
            type: "p",
            text: "Per tutti gli altri, l'articolo 14 stabilisce che i requisiti di accessibilità si applicano solo nella misura in cui la conformità non richieda una modifica significativa che alteri sostanzialmente la natura fondamentale del servizio e non imponga un onere sproporzionato. Un'azienda che si basa su questa eccezione deve effettuare una valutazione secondo i criteri dell'allegato VI. I fornitori di servizi devono rinnovarla quando il servizio viene modificato, quando un'autorità lo richiede e almeno ogni cinque anni. I considerando aggiungono che la mancanza di priorità, di tempo o di conoscenze non dovrebbe essere considerata un motivo legittimo.",
          },
        ],
      },
      {
        heading: "Cosa dice l'allegato I sull'assistenza clienti",
        blocks: [
          {
            type: "p",
            text: "L'articolo 4(3) stabilisce che tutti i servizi, eccetto i servizi di trasporto urbano ed extraurbano e i servizi di trasporto regionale, devono essere conformi alla sezione III dell'allegato I, che fissa i requisiti generali di accessibilità per i servizi. La sezione IV aggiunge requisiti per servizi specifici, come i servizi bancari per i consumatori e il commercio elettronico. Tre punti della sezione III contano di più per i team di assistenza:",
          },
          {
            type: "ul",
            items: [
              "Lettera a): i prodotti utilizzati per fornire il servizio devono essere accessibili.",
              "Lettera c): i siti web, comprese le relative applicazioni online, e i servizi su dispositivi mobili, comprese le app mobili, devono essere resi accessibili in modo coerente e adeguato, rendendoli percepibili, utilizzabili, comprensibili e robusti.",
              "Lettera d): se presenti, i servizi di assistenza (help desk, call center, assistenza tecnica, servizi di inoltro e servizi di formazione) devono fornire informazioni sull'accessibilità del servizio e sulla sua compatibilità con le tecnologie assistive, tramite modalità di comunicazione accessibili.",
            ],
          },
          {
            type: "p",
            text: "L'articolo 13 aggiunge un obbligo di trasparenza. I fornitori di servizi preparano informazioni, secondo l'allegato V, che spiegano come il servizio soddisfa i requisiti di accessibilità, e le rendono disponibili al pubblico in forma scritta e orale, anche in un modo accessibile alle persone con disabilità. Le indicazioni di AccessibleEU aggiungono che queste informazioni devono essere conservate per tutto il tempo in cui il servizio è in funzione.",
          },
          {
            type: "p",
            text: "Un widget di chat o un bot di assistenza che gira sul tuo sito web o nella tua app fa parte dell'interfaccia che i clienti usano, quindi ha senso sottoporlo allo stesso test: percepibile, utilizzabile, comprensibile e robusto. Anche il tuo help desk, gestito da persone o da bot, dovrebbe essere pronto a rispondere a domande sull'accessibilità del tuo servizio.",
          },
        ],
      },
      {
        heading: "Indicazioni pratiche per widget di chat e bot di assistenza",
        blocks: [
          {
            type: "p",
            text: "La direttiva non elenca controlli tecnici per un widget di chat. I punti seguenti sono pratiche tecniche comuni che corrispondono ai principi dell'allegato I. Testali con vere tecnologie assistive, come gli screen reader e l'uso della sola tastiera.",
          },
          {
            type: "ul",
            items: [
              "Rendi il pulsante di apertura della chat, il campo del messaggio, i pulsanti e le risposte rapide utilizzabili con la sola tastiera, con un indicatore di focus visibile.",
              "Dai a ogni controllo un'etichetta testuale che gli screen reader annuncino, e annuncia i nuovi messaggi senza spostare il focus dell'utente.",
              "Non affidarti solo a colori, icone o immagini per trasmettere un significato. Fornisci alternative testuali per immagini e card.",
              "Evita timeout di inattività brevi che chiudono la chat, oppure avvisa prima della chiusura e lascia che il cliente continui.",
              "Mantieni le risposte del bot brevi e semplici, e offri ai clienti un modo facile per raggiungere una persona, trasferendo la cronologia della conversazione.",
              "Insegna al bot e ai tuoi agenti a rispondere a domande sull'accessibilità del tuo servizio e a rimandare alle tue informazioni ai sensi dell'articolo 13.",
              "Offri più di un canale di contatto, come chat ed email, e dai a chi chiama un voice bot un'alternativa testuale.",
            ],
          },
          {
            type: "p",
            text: "Per i dettagli tecnici, consulta la EN 301 549, la norma europea sui requisiti di accessibilità per prodotti e servizi ICT. La decisione di esecuzione (UE) 2021/1339 della Commissione fa riferimento alla EN 301 549 V3.2.1 come norma armonizzata ai sensi della direttiva sull'accessibilità del web, che riguarda i siti web e le app del settore pubblico. L'ETSI ha adottato la EN 301 549 V4.1.1 il 24 agosto 2026. La nuova versione passa alle WCAG 2.2 e aggiunge un allegato che collega i suoi requisiti all'EAA. Secondo AccessibleEU, la V4.1.1 non è ancora il riferimento giuridico per dimostrare la conformità all'EAA o alla direttiva sull'accessibilità del web, e il riferimento resta la V3.2.1, basata sulle WCAG 2.1 livello AA, finché la Commissione non citerà la V4.1.1 nella Gazzetta ufficiale.",
          },
          {
            type: "note",
            text: "Questa non è una consulenza legale. Questa pagina riassume la direttiva (UE) 2019/882 e le indicazioni ufficiali dell'UE come verificate il 19 ottobre 2026. Se il tuo servizio rientri nell'ambito di applicazione, e cosa devi fare, dipende dalla legge nazionale che ti si applica. Per le decisioni sul tuo servizio, leggi i testi ufficiali e rivolgiti a un avvocato qualificato.",
          },
          {
            type: "p",
            text: "TascaLab realizza chatbot e voice bot sugli strumenti che usi già, come Zendesk, Freshdesk, Jira e Slack. I progetti Standard Chat Bot costano {{price:standard}} e i progetti Voice Bot {{price:voice}}. Entrambi includono documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Da quando si applica l'European Accessibility Act?",
        a: "L'articolo 31 imponeva agli Stati membri di adottare le leggi nazionali entro il 28 giugno 2022 e di applicarle dal 28 giugno 2025. L'articolo 2(2) copre i servizi forniti ai consumatori dopo il 28 giugno 2025.",
      },
      {
        q: "Le piccole imprese sono esentate dall'European Accessibility Act?",
        a: "Le microimprese che forniscono servizi sono esentate in base all'articolo 4(5). L'articolo 3(23) definisce microimpresa un'impresa con meno di 10 persone e un fatturato annuo o un totale di bilancio non superiore a 2 milioni di EUR. L'esenzione non copre del tutto le microimprese che trattano prodotti.",
      },
      {
        q: "L'European Accessibility Act riguarda l'assistenza clienti?",
        a: "L'allegato I, sezione III, lettera d) stabilisce che, se presenti, i servizi di assistenza come help desk, call center, assistenza tecnica, servizi di inoltro e servizi di formazione devono fornire informazioni sull'accessibilità del servizio e sulla sua compatibilità con le tecnologie assistive, tramite modalità di comunicazione accessibili.",
      },
      {
        q: "La EN 301 549 è la norma armonizzata per l'EAA?",
        a: "La EN 301 549 V4.1.1, adottata il 24 agosto 2026, aggiunge un allegato che collega i suoi requisiti all'EAA. Secondo AccessibleEU non è ancora il riferimento giuridico per la conformità all'EAA finché la Commissione non la citerà nella Gazzetta ufficiale, e fino ad allora il riferimento resta la V3.2.1.",
      },
      {
        q: "I contratti di servizio firmati prima di giugno 2025 devono essere modificati?",
        a: "L'articolo 32 consente ai contratti di servizio stipulati prima del 28 giugno 2025 di proseguire senza modifiche fino alla loro scadenza, ma per non più di cinque anni da quella data.",
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
    slug: "integrazione-n8n-zendesk",
    category: "guides",
    navLabel: "Integrazione n8n Zendesk",
    primaryKeyword: "integrazione n8n Zendesk",
    title: "Integrazione n8n Zendesk: nodi, trigger e webhook",
    description:
      "Guida all'integrazione n8n Zendesk: operazioni del nodo Zendesk, Zendesk Trigger, credenziali API token o OAuth2, webhook, rate limit e un workflow di esempio.",
    h1: "Integrazione n8n Zendesk: nodi, credenziali e workflow di esempio",
    intro:
      "n8n si collega a Zendesk tramite due nodi integrati. Il nodo Zendesk lavora con ticket, campi dei ticket, utenti e organizzazioni, mentre il nodo Zendesk Trigger avvia un workflow quando succede qualcosa in Zendesk. Entrambi usano la stessa credenziale, un API token oppure OAuth2. Se preferisci tenere le regole in Zendesk, puoi invece indirizzare un webhook di Zendesk verso un nodo Webhook di n8n e attivarlo da un trigger di Zendesk.",
    keyFacts: [
      "Il nodo Zendesk di n8n ha quattro risorse: Ticket, Ticket Field, User e Organization.",
      "Impostare i tag con l'operazione Update Ticket del nodo sostituisce l'intero elenco di tag. I tag che non includi vengono rimossi.",
      "La credenziale Zendesk di n8n supporta un API token (sottodominio, email di accesso e token) oppure OAuth2.",
      "Zendesk firma le richieste webhook con gli header X-Zendesk-Webhook-Signature e X-Zendesk-Webhook-Signature-Timestamp.",
      "I limiti API di Zendesk Suite vanno da 200 richieste al minuto con Team a 2.500 con Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Cosa può fare il nodo Zendesk di n8n",
        blocks: [
          {
            type: "p",
            text: "Il nodo Zendesk legge o modifica dati in Zendesk come passaggio di un workflow. La documentazione di n8n raggruppa le sue operazioni per risorsa.",
          },
          {
            type: "table",
            caption: "Risorse e operazioni del nodo Zendesk (documentazione n8n, verificata a ottobre 2026)",
            head: ["Risorsa", "Operazioni"],
            rows: [
              ["Ticket", "Creare, eliminare, ottenere uno o più ticket, aggiornare e recuperare un ticket sospeso"],
              ["Ticket Field", "Ottenere un campo del ticket, oppure tutti i campi del ticket di sistema e personalizzati"],
              ["User", "Creare, eliminare, ottenere uno o più utenti, aggiornare, cercare, ottenere le organizzazioni di un utente e i dati correlati"],
              ["Organization", "Creare, eliminare, contare, ottenere una o più organizzazioni, aggiornare e ottenere i dati correlati"],
            ],
          },
          {
            type: "p",
            text: "C'è un comportamento che coglie molti di sorpresa. Quando usi Update Ticket e compili il campo Tag Names or IDs, la documentazione di n8n dice che l'intero elenco di tag del ticket viene sostituito, quindi ogni tag che non includi viene rimosso. Questo rispecchia il modo in cui l'API di Zendesk gestisce per impostazione predefinita gli aggiornamenti dei tag. La documentazione indica tre soluzioni: recuperare i tag attuali e unirli a quelli nuovi prima dell'aggiornamento, usare il nodo HTTP Request con la proprietà additional_tags di Zendesk, oppure chiamare l'endpoint dei tag del ticket. Le ultime due aggiungono tag senza rimuovere quelli esistenti.",
          },
          {
            type: "p",
            text: "Se il nodo non supporta un'operazione che ti serve, usa il nodo HTTP Request, imposta Authentication su Predefined Credential Type e scegli la tua credenziale Zendesk. La richiesta riutilizza così la stessa connessione del nodo Zendesk.",
          },
        ],
      },
      {
        heading: "Configurare le credenziali Zendesk in n8n",
        blocks: [
          {
            type: "p",
            text: "I nodi Zendesk e Zendesk Trigger usano la stessa credenziale e n8n supporta due modalità di autenticazione. Entrambe richiedono il tuo sottodominio, cioè la parte dell'URL di Zendesk tra https:// e .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "API token: nell'Admin Center di Zendesk apri Apps and integrations, poi APIs, e abilita l'accesso tramite token per la Zendesk API. Aggiungi un token con una descrizione e copialo. In n8n inserisci il sottodominio, l'indirizzo email che usi per accedere a Zendesk e il token.",
              "OAuth2: nell'Admin Center di Zendesk crea un client OAuth in Apps and integrations, poi APIs. Incolla l'URL di callback OAuth di n8n nel campo dell'URL di reindirizzamento del client. Copia l'identificativo univoco del client in Client ID in n8n e il suo secret in Client Secret, aggiungi il sottodominio, salva e collega il tuo account Zendesk.",
            ],
          },
        ],
      },
      {
        heading: "Nodo Zendesk Trigger o webhook di Zendesk",
        blocks: [
          {
            type: "p",
            text: "Ci sono due modi per avviare un workflow n8n da Zendesk. Il nodo Zendesk Trigger avvia un workflow quando gli eventi di Zendesk corrispondono alle condizioni che imposti nel nodo. Nell'esempio della documentazione di n8n, filtra i ticket con stato Open e il workflow gira non appena lo attivi.",
          },
          {
            type: "p",
            text: "L'alternativa è costruire tu stesso la connessione. Nell'Admin Center di Zendesk vai in Apps and integrations, poi Webhooks, crea un webhook, scegli Trigger o Automation come metodo di connessione e indirizzalo verso il Production URL di un nodo Webhook di n8n. Poi aggiungi l'azione Notify webhook a un trigger o a un'automazione di Zendesk e scrivi il payload, che non può superare i 16.000 caratteri. Così le condizioni restano nelle regole aziendali di Zendesk e puoi scegliere esattamente quali campi inviare.",
          },
          {
            type: "table",
            caption: "Due modi per avviare un workflow n8n da Zendesk",
            head: ["Domanda", "Nodo Zendesk Trigger", "Webhook di Zendesk + nodo Webhook di n8n"],
            rows: [
              ["Dove stanno le condizioni", "Nel nodo, in n8n", "In un trigger o in un'automazione di Zendesk con l'azione Notify webhook"],
              ["Cosa riceve n8n", "I dati dell'evento forniti dal nodo", "Il payload che scrivi nell'azione del trigger, fino a 16.000 caratteri"],
              ["Credenziale Zendesk", "Necessaria per il trigger stesso", "Necessaria solo per i passaggi successivi che chiamano Zendesk"],
              ["Test", "Esegui il nodo nell'editor, come nell'esempio della documentazione di n8n", "Usa il Test URL del nodo Webhook, che resta in ascolto per 120 secondi, poi passa al Production URL"],
            ],
          },
          {
            type: "p",
            text: "Se usi un webhook, verifica che le richieste arrivino davvero da Zendesk. Zendesk invia due header, X-Zendesk-Webhook-Signature e X-Zendesk-Webhook-Signature-Timestamp. La firma è base64(HMACSHA256(timestamp + body)) calcolata con il signing secret del webhook, che puoi visualizzare nella pagina dei dettagli del webhook o ottenere tramite l'API. Ricalcolala nel tuo workflow e rifiuta le richieste che non corrispondono. Zendesk avverte inoltre che la stessa azione può chiamare un webhook più di una volta, quindi fai in modo che il workflow possa girare due volte per lo stesso ticket senza problemi.",
          },
          {
            type: "p",
            text: "Il nodo Webhook può rispondere subito, quando termina l'ultimo nodo, oppure tramite un nodo Respond to Webhook separato. Per i workflow più lunghi, rispondere subito dà a Zendesk una risposta rapida mentre il resto del lavoro prosegue.",
          },
        ],
      },
      {
        heading: "Workflow di esempio: classificare i nuovi ticket e notificare Slack",
        blocks: [
          {
            type: "p",
            text: "Ecco uno schema comune, descritto per passaggi. Mostra come i nodi si incastrano tra loro. Non è un caso di studio di TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: un nodo Zendesk Trigger, oppure un nodo Webhook alimentato da un trigger di Zendesk che si attiva alla creazione di un ticket. Invia almeno l'ID del ticket.",
              "Recupero: un nodo Zendesk con la risorsa Ticket ottiene il ticket completo, compresi oggetto, descrizione e tag attuali.",
              "Classificazione: un nodo Text Classifier ordina il testo nelle categorie che definisci, come fatturazione, problema tecnico o rimborso. Ogni categoria ha un nome e una descrizione che aiuta il modello. Per impostazione predefinita, gli elementi che non corrispondono a nessuna categoria vengono scartati, quindi attiva il ramo Other per intercettarli.",
              "Aggiornamento: un nodo Zendesk imposta il gruppo e i tag. Unisci prima i tag esistenti, oppure aggiungi i tag tramite il nodo HTTP Request con additional_tags, così non cancelli i tag impostati dagli agenti.",
              "Notifica: un nodo Slack pubblica la categoria e un link al ticket nel canale del team.",
              "Gestione degli errori: invia le esecuzioni non riuscite a un avviso, e attendi e riprova quando Zendesk restituisce una risposta 429.",
            ],
          },
          {
            type: "p",
            text: "Puoi estendere lo stesso schema. Invia i ticket urgenti a un canale Slack separato, oppure cerca l'organizzazione del cliente con la risorsa Organization prima di scegliere un gruppo.",
          },
        ],
      },
      {
        heading: "Rate limit e dove gira n8n",
        blocks: [
          {
            type: "p",
            text: "Zendesk limita le richieste API al minuto in base al piano. La sua documentazione per sviluppatori indica questi limiti predefiniti per le API di Support e Help Center:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 richieste al minuto.",
              "Suite Growth e Suite Professional: 400 richieste al minuto.",
              "Suite Enterprise: 700 richieste al minuto.",
              "Suite Enterprise Plus: 2.500 richieste al minuto.",
            ],
          },
          {
            type: "p",
            text: "L'add-on High Volume API porta un piano idoneo a 2.500 richieste al minuto. Sostituisce il limite del piano anziché aggiungersi a esso e richiede Suite Growth o superiore (oppure Support Professional o superiore) con almeno 10 postazioni agente. Oltre il limite, Zendesk restituisce HTTP 429 con un header Retry-After che indica quanti secondi aspettare. Alcuni endpoint hanno limiti propri, più restrittivi. Conta le chiamate API che fa ogni esecuzione e moltiplica per il tuo volume di ticket nei momenti di picco. I job massivi, come l'aggiunta retroattiva di tag ai ticket vecchi, hanno più probabilità di raggiungere il limite, quindi suddividili in blocchi e aggiungi delle attese.",
          },
          {
            type: "p",
            text: "n8n gira come n8n Cloud, un'istanza gestita che n8n fa girare per te, oppure in self-hosting sulla tua macchina o infrastruttura. Per la maggior parte delle installazioni self-hosted la documentazione consiglia Docker, e consiglia n8n Cloud se non hai esperienza nella gestione dei server. Con entrambi i metodi di attivazione, Zendesk deve poter raggiungere la tua istanza n8n. Se un'istanza self-hosted si trova dietro un reverse proxy, imposta N8N_WEBHOOK_URL sul suo URL di base pubblico, così n8n mostra gli URL dei webhook corretti e i servizi esterni li registrano correttamente. N8N_WEBHOOK_URL sostituisce WEBHOOK_URL, che funziona ancora ma è deprecata da n8n 2.35.0.",
          },
          {
            type: "p",
            text: "TascaLab realizza automazioni Zendesk come questa con n8n, Make, API e webhook, sugli strumenti che usi già. I progetti Ticket Routing & Categorization costano {{price:routing}} e i progetti Custom Automation {{price:custom}}. La maggior parte delle configurazioni richiede da 1 a 3 settimane e ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "n8n ha un'integrazione Zendesk integrata?",
        a: "Sì. n8n ha un nodo Zendesk per ticket, campi dei ticket, utenti e organizzazioni, e un nodo Zendesk Trigger che avvia i workflow dagli eventi di Zendesk. Entrambi usano la stessa credenziale Zendesk.",
      },
      {
        q: "Perché il nodo Zendesk di n8n rimuove i tag dei miei ticket?",
        a: "Quando compili Tag Names or IDs nell'operazione Update Ticket, l'intero elenco di tag viene sostituito. La documentazione di n8n suggerisce di unire prima i tag esistenti, oppure di aggiungere i tag tramite il nodo HTTP Request con la proprietà additional_tags di Zendesk o con l'endpoint dei tag.",
      },
      {
        q: "Quali metodi di autenticazione supporta la credenziale Zendesk di n8n?",
        a: "Un API token, inserito insieme al tuo sottodominio e all'email con cui accedi, oppure OAuth2, usando il client ID e il secret di un client OAuth che crei in Zendesk.",
      },
      {
        q: "Come verifico che una richiesta webhook provenga da Zendesk?",
        a: "Ricalcola base64(HMACSHA256(timestamp + body)) con il signing secret del webhook e confrontalo con l'header X-Zendesk-Webhook-Signature. Il timestamp si trova nell'header X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Cosa succede quando un workflow raggiunge il rate limit dell'API di Zendesk?",
        a: "Zendesk rifiuta la richiesta con HTTP 429 e un header Retry-After che indica quanti secondi aspettare. I limiti predefiniti vanno da 200 richieste al minuto con Suite Team a 2.500 con Suite Enterprise Plus.",
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
