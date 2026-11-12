import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "automazione-workflow-attio",
    category: "crm",
    navLabel: "Workflow di Attio",
    primaryKeyword: "automazione workflow Attio",
    title: "Workflow di Attio: trigger, blocchi, crediti e API",
    description:
      "Workflow di Attio spiegati: blocchi trigger e di azione, uso dei crediti, rate limit della REST API, firme dei webhook e come collegare Attio all'assistenza.",
    h1: "Workflow di Attio: come funziona l'automazione del CRM in Attio",
    intro:
      "Attio automatizza il lavoro sul CRM con i workflow. Un workflow parte da un blocco trigger ed esegue una catena di blocchi di azione, come aggiornare un record, creare un task, inviare un messaggio Slack o fare una richiesta HTTP. Le esecuzioni dei workflow consumano i crediti del workspace, e tutto il resto si collega tramite la REST API e i webhook di Attio.",
    keyFacts: [
      "Un workflow di Attio è composto da un blocco trigger, che lo avvia, e da blocchi di azione, che svolgono il lavoro.",
      "Trigger, logica e ricerche di dati sono gratuiti. I blocchi che scrivono dati, chiamano sistemi esterni o usano l'AI consumano i crediti del workspace, la maggior parte un credito per esecuzione.",
      "La REST API di Attio consente 100 richieste di lettura e 25 richieste di scrittura al secondo. Oltre il limite restituisce HTTP 429 con un header Retry-After.",
      "Attio firma i webhook con un HMAC-SHA256 del corpo della richiesta, inviato nell'header Attio-Signature.",
    ],
    sections: [
      {
        heading: "Come si costruiscono i workflow di Attio",
        blocks: [
          {
            type: "p",
            text: "Un workflow si costruisce su un canvas. Il blocco trigger decide quando parte e i blocchi di azione che lo seguono decidono cosa succede. La libreria di blocchi di Attio raggruppa i trigger in quattro tipi:",
          },
          {
            type: "ul",
            items: [
              "Trigger sui record, come 'Record created'.",
              "Trigger sulle liste, come 'Record added to list'.",
              "Trigger sui task, come 'Task created'.",
              "Trigger di utilità, come 'Manual run', una pianificazione o un webhook in entrata.",
            ],
          },
          {
            type: "p",
            text: "Il centro assistenza di Attio cita come esempi di blocchi di azione l'aggiornamento di un record, la creazione di un task, l'invio di un messaggio Slack, l'iscrizione di una persona a una sequenza e l'invio di una richiesta HTTP. Un blocco 'Execute code' esegue il tuo codice JavaScript come passaggio, con un timeout di 100 secondi. Puoi anche descrivere un workflow in linguaggio naturale e lasciare che sia Ask Attio a costruirlo. Le app create con l'Attio SDK possono aggiungere blocchi propri, che poi compaiono nel selettore dei blocchi accanto a quelli integrati.",
          },
          {
            type: "note",
            text: "Per impostazione predefinita, un workflow non può scrivere su un oggetto. Prima un admin, o un membro con accesso completo a quell'oggetto, deve concedere l'accesso al workflow. Verificalo prima di testare un workflow che aggiorna dei record.",
          },
        ],
      },
      {
        heading: "Come i workflow consumano i crediti",
        blocks: [
          {
            type: "p",
            text: "Le esecuzioni dei workflow attingono ai crediti condivisi del workspace, non ai crediti delle postazioni. Il centro assistenza di Attio descrive come vengono conteggiati nei nuovi workflow:",
          },
          {
            type: "ul",
            items: [
              "Trigger, logica e ricerche di dati sono gratuiti. I crediti si consumano solo quando un blocco scrive dati, invia o riceve qualcosa dall'esterno, oppure usa l'AI.",
              "Scritture sui record, task, iscrizione a una sequenza, richieste HTTP e blocchi di integrazione costano 1 credito per esecuzione. I blocchi AI e 'Execute code' hanno costi variabili.",
              "Viene addebitato solo il percorso seguito da un'esecuzione. Se un'esecuzione fallisce a metà, il blocco che ha fallito e tutti i blocchi successivi non consumano crediti, ma i blocchi eseguiti prima dell'errore vengono addebitati.",
              "Costruire un workflow con Ask Attio consuma crediti delle postazioni, non i crediti condivisi del workspace.",
            ],
          },
          {
            type: "p",
            text: "A novembre 2026, Attio include 250 crediti del workspace al mese con Free, 1.500 con Plus e 10.000 con Pro. I piani cambiano, quindi controlla la pagina dei prezzi di Attio, poi stima il consumo moltiplicando i blocchi che consumano crediti per esecuzione per le esecuzioni che prevedi ogni mese.",
          },
        ],
      },
      {
        heading: "API e webhook di Attio",
        blocks: [
          {
            type: "p",
            text: "Per tutto ciò che un workflow non può fare da solo, Attio offre una REST API e webhook in uscita. Ecco cosa dice la documentazione per sviluppatori su ciascuno.",
          },
          {
            type: "table",
            caption: "REST API e webhook di Attio (documentazione per sviluppatori di Attio, verificata a novembre 2026)",
            head: ["Argomento", "Cosa documenta Attio"],
            rows: [
              ["Rate limit", "100 richieste al secondo per le letture e 25 al secondo per le scritture. Oltre il limite, HTTP 429 con un header Retry-After."],
              ["Endpoint di elenco", "Anche List records e List entries hanno limiti basati su un punteggio, conteggiati su una finestra di 10 secondi per tutte le app e tutti i token."],
              ["Autenticazione", "Una chiave API per un singolo workspace, oppure OAuth 2.0 per le app usate in più workspace. I token vengono inviati come Bearer token e gli scope si impostano per ogni token."],
              ["Eventi webhook", "Tra gli eventi ci sono record.created, list-entry.created, note.created e task.created."],
              ["Firma del webhook", "Un HMAC-SHA256 del corpo grezzo della richiesta, generato con il secret del webhook e codificato in esadecimale, nell'header Attio-Signature."],
              ["Nuovi tentativi", "Ogni messaggio include un header Idempotency-Key che resta invariato quando Attio lo reinvia."],
            ],
          },
          {
            type: "p",
            text: "Per verificare che un webhook provenga da Attio, ricalcola l'HMAC-SHA256 del corpo grezzo con il secret del webhook e confrontalo con l'header Attio-Signature. Attio invia lo stesso valore anche come X-Attio-Signature per i middleware più vecchi. Usa l'header Idempotency-Key per saltare i messaggi che hai già elaborato, così un nuovo tentativo non crea un secondo task o un secondo messaggio Slack.",
          },
        ],
      },
      {
        heading: "Collegare Attio ai tuoi strumenti di assistenza",
        blocks: [
          {
            type: "p",
            text: "Attio ha un'app Slack per le notifiche e un'app Zapier ufficiale. Zapier elenca collegamenti già pronti tra Attio e helpdesk come Zendesk e Intercom. Per avere più controllo, collega un helpdesk all'API e ai webhook di Attio tramite n8n o Make. Ecco uno schema comune, descritto per passaggi. Mostra come si incastrano i vari pezzi. Non è un caso di studio di TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: il tuo helpdesk invia un webhook a n8n o Make quando un ticket viene creato o va in escalation.",
              "Ricerca: il workflow trova tramite l'API il record dell'azienda del cliente in Attio, restando entro il limite di 100 letture al secondo.",
              "Aggiornamento: scrive lo stato o la categoria del ticket in un attributo del record, oppure crea un task per il responsabile dell'account.",
              "Reazione in Attio: un workflow di Attio attivato da quell'aggiornamento del record invia un messaggio Slack al responsabile dell'account.",
              "Gestione degli errori: in caso di HTTP 429 attendi e riprova, e usa l'header Idempotency-Key per scartare le consegne duplicate dei webhook.",
            ],
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab collega strumenti come Attio agli strumenti di helpdesk e di chat che usi già, tramite API, webhook, n8n e Make, senza cambiare piattaforma. I progetti Custom Automation costano {{price:custom}}. La maggior parte delle configurazioni richiede da 1 a 3 settimane e ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Cosa sono i workflow di Attio?",
        a: "Sono lo strumento di automazione di Attio. Un workflow parte da un blocco trigger, come la creazione di un record o un'esecuzione manuale, e poi esegue blocchi di azione, come aggiornare un record, creare un task, inviare un messaggio Slack o fare una richiesta HTTP.",
      },
      {
        q: "I workflow di Attio consumano crediti?",
        a: "Sì, per i blocchi che scrivono dati, chiamano sistemi esterni o usano l'AI. La maggior parte di questi costa un credito per esecuzione, mentre trigger, logica e ricerche di dati sono gratuiti. A novembre 2026, Free include 250 crediti del workspace al mese, Plus 1.500 e Pro 10.000.",
      },
      {
        q: "Quali sono i rate limit dell'API di Attio?",
        a: "100 richieste al secondo per le letture e 25 al secondo per le scritture. Oltre il limite, Attio restituisce HTTP 429 con un header Retry-After. Anche gli endpoint List records e List entries hanno limiti basati su un punteggio.",
      },
      {
        q: "Come verifico un webhook di Attio?",
        a: "Calcola un HMAC-SHA256 del corpo grezzo della richiesta con il secret del webhook, codificalo in esadecimale e confrontalo con l'header Attio-Signature.",
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
    slug: "attio-vs-hubspot-automazione",
    category: "crm",
    navLabel: "Automazione Attio vs HubSpot",
    primaryKeyword: "automazione Attio vs HubSpot",
    title: "Automazione Attio vs HubSpot: workflow, API, webhook",
    description:
      "Automazione Attio vs HubSpot a confronto: chi ha i workflow, limiti e crediti, trigger, passaggi di codice e webhook, rate limit API e verifica delle firme.",
    h1: "Automazione Attio vs HubSpot: workflow, limiti, API e webhook",
    intro:
      "Attio e HubSpot automatizzano entrambi il lavoro sul CRM con workflow visuali, ma li limitano in modo diverso. HubSpot include i workflow solo nelle edizioni Professional ed Enterprise e fissa un tetto al numero di workflow che puoi creare, mentre Attio misura le esecuzioni dei workflow con i crediti del workspace. Anche le loro API e i loro webhook differiscono nei rate limit e nel modo in cui verifichi una richiesta.",
    keyFacts: [
      "I workflow di HubSpot richiedono un abbonamento Professional o Enterprise. Marketing, Sales o Service Hub Professional consente fino a 300 workflow, Enterprise fino a 1.000.",
      "Attio misura i workflow con i crediti del workspace. Trigger, logica e ricerche sono gratuiti, e la maggior parte dei blocchi che scrivono dati o chiamano l'esterno consuma un credito per esecuzione.",
      "Le azioni di codice personalizzato di HubSpot devono terminare entro 20 secondi e possono usare fino a 128 MB di memoria. Il blocco 'Execute code' di Attio va in timeout dopo 100 secondi.",
      "L'API di Attio consente 100 letture e 25 scritture al secondo. Le app private di HubSpot sui piani Professional o Enterprise hanno 190 richieste ogni 10 secondi.",
      "HubSpot firma i webhook con X-HubSpot-Signature-v3. Attio usa l'header Attio-Signature.",
    ],
    sections: [
      {
        heading: "Confronto diretto",
        blocks: [
          {
            type: "table",
            caption: "Automazione Attio vs HubSpot (documentazione dei fornitori, verificata a novembre 2026)",
            head: ["Domanda", "Attio", "HubSpot"],
            rows: [
              ["Come viene limitato l'utilizzo", "Crediti del workspace. Trigger, logica e ricerche sono gratuiti, e la maggior parte dei blocchi che scrivono o chiamano l'esterno consuma un credito.", "Serve Professional o Enterprise. Un tetto al numero di workflow per ogni edizione."],
              ["Trigger", "Trigger su record, liste, task e di utilità, tra cui una pianificazione, un webhook e un'esecuzione manuale", "Trigger di iscrizione basati su filtri, eventi, pianificazione e webhook"],
              ["Chiamare un altro sistema e codice", "Blocco HTTP request, e un blocco 'Execute code' per JavaScript. Le app possono aggiungere blocchi personalizzati.", "Azioni 'Send a webhook' e 'Custom code', in Data Hub Professional ed Enterprise"],
              ["Slack", "Blocco di messaggio Slack, con l'app Slack di Attio", "Azione di notifica Slack, con l'integrazione Slack installata"],
              ["Rate limit dell'API", "100 letture e 25 scritture al secondo", "App private: 100 ogni 10 secondi su Free e Starter, 190 su Professional ed Enterprise, più un limite giornaliero"],
              ["Firma dei webhook", "HMAC-SHA256 del corpo, codificato in esadecimale, in Attio-Signature", "HMAC-SHA256 di metodo, URI, corpo e timestamp, codificato in base64, in X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "Workflow di HubSpot: edizioni e limiti",
        blocks: [
          {
            type: "p",
            text: "Le FAQ sui workflow di HubSpot indicano che per usare i workflow serve un abbonamento Professional o Enterprise. Quanti workflow puoi creare dipende dall'edizione:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales o Service Hub Professional: fino a 300 workflow.",
              "Marketing, Sales o Service Hub Enterprise: fino a 1.000 workflow.",
              "Con l'add-on Brands: 100 workflow in più.",
              "Con più hub, il tuo limite è quello dell'abbonamento con il limite più alto.",
            ],
          },
          {
            type: "p",
            text: "Contano ai fini del limite solo i workflow personalizzati creati nello strumento dei workflow. Le automazioni semplici in strumenti come i moduli non contano. Per impostazione predefinita, un record viene iscritto a un workflow solo la prima volta che soddisfa i trigger di iscrizione. Puoi attivare la re-iscrizione, ma non può usare criteri AND e non iscrive i record in modo retroattivo.",
          },
          {
            type: "p",
            text: "Per le integrazioni contano soprattutto due azioni: 'Send a webhook' e 'Custom code'. HubSpot le elenca entrambe per Data Hub Professional ed Enterprise, l'hub che in precedenza si chiamava Operations Hub. Le azioni di codice personalizzato eseguono Node.js per impostazione predefinita, oppure Python in beta, devono terminare entro 20 secondi e possono usare fino a 128 MB di memoria, quindi i lavori lunghi vanno affidati a uno strumento esterno come n8n.",
          },
        ],
      },
      {
        heading: "Workflow di Attio: misurati in crediti",
        blocks: [
          {
            type: "p",
            text: "Attio misura i workflow in base all'utilizzo. Le esecuzioni attingono ai crediti condivisi del workspace. Trigger, logica e ricerche di dati sono gratuiti, e i blocchi che scrivono dati, chiamano sistemi esterni o usano l'AI consumano crediti, la maggior parte uno per esecuzione. A novembre 2026, Free include 250 crediti del workspace al mese, Plus 1.500 e Pro 10.000.",
          },
          {
            type: "p",
            text: "Per raggiungere un altro sistema da un workflow di Attio, usa il blocco HTTP request. Il blocco 'Execute code' esegue il tuo codice JavaScript con un timeout di 100 secondi e un costo in crediti variabile, e le app create con l'Attio SDK possono aggiungere i propri blocchi ai workflow.",
          },
        ],
      },
      {
        heading: "API e webhook per le integrazioni",
        blocks: [
          {
            type: "p",
            text: "HubSpot limita le app private ogni 10 secondi e al giorno. Gli account Free e Starter hanno 100 richieste ogni 10 secondi e 250.000 al giorno. Professional ne ha 190 ogni 10 secondi e 625.000 al giorno, ed Enterprise 190 ogni 10 secondi e 1.000.000 al giorno. Il limite sui 10 secondi vale per ogni app, mentre il limite giornaliero è condiviso da tutte le app dell'account. Oltre il limite HubSpot restituisce HTTP 429, e le sue linee guida chiedono che le risposte di errore restino sotto il 5% delle tue richieste giornaliere.",
          },
          {
            type: "p",
            text: "Attio conta al secondo: 100 letture e 25 scritture, con HTTP 429 e un header Retry-After quando superi il limite. I suoi endpoint List records e List entries hanno anche limiti basati su un punteggio, conteggiati su una finestra di 10 secondi.",
          },
          {
            type: "p",
            text: "Entrambi firmano i propri webhook, ma in modo diverso. La firma v3 di HubSpot arriva in X-HubSpot-Signature-v3 insieme a X-HubSpot-Request-Timestamp. È un HMAC-SHA256, codificato in base64 e generato con il client secret dell'app, calcolato su metodo, URI, corpo e timestamp, e HubSpot indica di rifiutare le richieste il cui timestamp risale a più di 5 minuti prima. L'header Attio-Signature di Attio è un HMAC-SHA256 del corpo grezzo codificato in esadecimale, generato con il secret del webhook. Attio invia anche un header Idempotency-Key che resta invariato tra un tentativo e l'altro.",
          },
        ],
      },
      {
        heading: "Quale si adatta a un team di assistenza",
        blocks: [
          {
            type: "ul",
            items: [
              "Se il tuo team di assistenza lavora già nell'help desk di HubSpot, ticket, SLA e workflow sui ticket stanno nello stesso account del CRM, e i workflow sono inclusi a partire da Professional.",
              "Se usi Attio come CRM e un helpdesk separato, collega i due tramite API e webhook con n8n, Make o Zapier, che ha un'app Attio ufficiale.",
              "Se le tue automazioni chiamano altri sistemi, metti in budget Data Hub Professional in HubSpot, oppure organizzati attorno ai blocchi HTTP request ed 'Execute code' in Attio.",
              "Se i volumi sono alti, confronta i limiti API indicati sopra con il tuo picco di ticket prima di scegliere dove far girare la logica.",
            ],
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab realizza automazioni sopra il CRM e l'helpdesk che usi già, con API, webhook, n8n e Make, così non devi cambiare piattaforma. I progetti Custom Automation costano {{price:custom}}. La maggior parte delle configurazioni richiede da 1 a 3 settimane e ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "HubSpot include i workflow in tutti i piani?",
        a: "No. Le FAQ sui workflow di HubSpot indicano che serve un abbonamento Professional o Enterprise. Marketing, Sales o Service Hub Professional consente fino a 300 workflow, Enterprise fino a 1.000.",
      },
      {
        q: "Come limita i workflow Attio?",
        a: "Con i crediti del workspace. Trigger, logica e ricerche sono gratuiti, e la maggior parte dei blocchi che scrivono dati o chiamano sistemi esterni consuma un credito per esecuzione. I blocchi AI e di codice variano. I crediti inclusi dipendono dal tuo piano.",
      },
      {
        q: "Posso eseguire codice personalizzato nei workflow di HubSpot o di Attio?",
        a: "HubSpot ha un'azione 'Custom code' in Data Hub Professional ed Enterprise che esegue Node.js, oppure Python in beta, entro 20 secondi e 128 MB di memoria. Attio ha un blocco 'Execute code' che esegue JavaScript con un timeout di 100 secondi, e le app create con il suo SDK possono aggiungere blocchi personalizzati.",
      },
      {
        q: "Come verifico i webhook di HubSpot e di Attio?",
        a: "Per HubSpot, ricalcola l'HMAC-SHA256 di metodo, URI, corpo e timestamp con il tuo client secret e confrontalo con X-HubSpot-Signature-v3. Per Attio, confronta un HMAC-SHA256 del corpo grezzo, generato con il secret del webhook, con l'header Attio-Signature.",
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
    slug: "integrazione-hubspot-zendesk",
    category: "crm",
    navLabel: "Integrazione HubSpot Zendesk",
    primaryKeyword: "integrazione HubSpot Zendesk",
    title: "Integrazione HubSpot Zendesk: cosa sincronizza e opzioni",
    description:
      "Integrazione HubSpot Zendesk: cosa sincronizza o no l'app gratuita Zendesk for HubSpot, flussi di azioni, app bidirezionali e integrazioni su misura con le API.",
    h1: "Integrazione HubSpot Zendesk: cosa si sincronizza, cosa no e le tue opzioni",
    intro:
      "L'integrazione con HubSpot offerta da Zendesk è gratuita e si collega in fretta, ma invia gli eventi dei ticket in una sola direzione, da Zendesk alla timeline di un contatto in HubSpot. Se ti serve di più, i flussi di azioni (action flows) di Zendesk possono creare e aggiornare record di HubSpot, le app del Marketplace offrono la sincronizzazione bidirezionale e un'integrazione su misura con webhook ed entrambe le API può spostare esattamente i dati che scegli.",
    keyFacts: [
      "L'integrazione Zendesk Support for HubSpot è unidirezionale: le informazioni dei ticket passano da Zendesk a HubSpot.",
      "Crea tre trigger in Zendesk, per i nuovi ticket, i ticket risolti e le valutazioni CSAT, più un webhook chiamato HubSpot Integration.",
      "I ticket compaiono solo nella timeline del contatto in HubSpot, non su aziende o trattative, e viene sincronizzato solo l'indirizzo email dell'utente.",
      "I flussi di azioni di Zendesk hanno azioni HubSpot che creano, aggiornano e cercano contatti, aziende, trattative e ticket.",
      "Zendesk ha smesso di emettere nuovi API token il 27 ottobre 2026, quindi le integrazioni su misura dovrebbero usare OAuth.",
    ],
    sections: [
      {
        heading: "Quattro modi per collegare HubSpot e Zendesk",
        blocks: [
          {
            type: "table",
            caption: "Opzioni di integrazione tra HubSpot e Zendesk (documentazione e schede dei fornitori, verificate a novembre 2026)",
            head: ["Opzione", "Direzione", "Cosa sposta"],
            rows: [
              ["Zendesk Support for HubSpot", "Solo da Zendesk a HubSpot", "Eventi di nuovi ticket, ticket risolti e valutazioni CSAT, inviati alla timeline del contatto"],
              ["Flussi di azioni di Zendesk con le azioni HubSpot", "Da Zendesk a HubSpot, passaggio per passaggio", "Crea, aggiorna e cerca contatti, aziende, trattative e ticket"],
              ["App del Marketplace", "Dipende dall'app; alcune sono bidirezionali", "Tutto ciò che l'app supporta, come contatti o trattative"],
              ["Integrazione su misura con webhook ed entrambe le API", "In entrambe le direzioni", "Esattamente i campi e gli eventi che scegli"],
            ],
          },
          {
            type: "p",
            text: "Parti dalla domanda a cui il tuo team sta cercando di rispondere. Se i commerciali e i responsabili degli account devono solo vedere in HubSpot lo storico dell'assistenza di un contatto, l'integrazione gratuita può bastare. Se i ticket devono modificare dati di HubSpot, come una proprietà dell'azienda o la fase di una trattativa, ti servono i flussi di azioni, un'app o un'integrazione su misura.",
          },
        ],
      },
      {
        heading: "Configurare l'integrazione gratuita Zendesk Support for HubSpot",
        blocks: [
          {
            type: "ol",
            items: [
              "Apri la pagina di installazione dell'integrazione e inserisci il tuo sottodominio Zendesk.",
              "Autorizza la connessione sia in Zendesk sia in HubSpot.",
              "Zendesk crea tre trigger, per i nuovi ticket, i ticket risolti e le valutazioni CSAT, e un webhook chiamato HubSpot Integration.",
              "Modifica le condizioni di quei trigger se vuoi che solo alcuni ticket arrivino a HubSpot.",
            ],
          },
          {
            type: "p",
            text: "Zendesk documenta alcuni limiti. L'integrazione è unidirezionale, da Zendesk a HubSpot. Viene sincronizzato solo l'indirizzo email dell'utente, non il nome o il cognome. I ticket compaiono solo nella timeline del contatto, non nei record di aziende o trattative. Puoi cambiare quali ticket vengono inviati modificando le condizioni dei trigger, ma non puoi modificare il payload JSON. Per disattivare l'integrazione, disattiva i tre trigger.",
          },
          {
            type: "note",
            text: "Non testare il webhook HubSpot Integration dall'Admin Center. Zendesk avverte che farlo può inviare JSON non valido e scollegare l'integrazione. Fai invece il test creando o risolvendo un vero ticket di prova.",
          },
        ],
      },
      {
        heading: "Flussi di azioni di Zendesk con le azioni HubSpot",
        blocks: [
          {
            type: "p",
            text: "I flussi di azioni sono lo strumento di Zendesk per costruire automazioni in più passaggi che raggiungono sistemi esterni. Il connettore HubSpot aggiunge queste azioni:",
          },
          {
            type: "ul",
            items: [
              "Creare e aggiornare contatti, aziende, trattative e ticket in HubSpot.",
              "Cercare contatti, aziende, trattative e ticket, e cercare utenti.",
              "Cercare un contatto per Contact ID o per email. Se indichi entrambi, prevale il Contact ID.",
              "Collegarsi con OAuth 2.0 da 'External actions' nella barra laterale del passaggio. Zendesk consiglia un account di servizio dedicato e rinnova i token automaticamente.",
            ],
          },
          {
            type: "p",
            text: "I flussi di azioni consumano crediti di azione. Zendesk indica 100.000 azioni al mese per Suite Professional e 225.000 per Suite Enterprise, invia un'email all'80% e al 100% della quota e ne vende altre in blocchi da 100.000. Gli admin possono vedere il consumo nell'Admin Center in Account, poi Usage, poi Summary. Quote e disponibilità nei piani cambiano, quindi verificale nel tuo account prima di costruire sui flussi di azioni.",
          },
        ],
      },
      {
        heading: "App di sincronizzazione bidirezionale",
        blocks: [
          {
            type: "p",
            text: "Lo Zendesk Marketplace elenca un'app Data sync by HubSpot, che descrive come una sincronizzazione bidirezionale in tempo reale tra HubSpot e Zendesk. Per installarla serve un Super Admin di HubSpot o un utente con i permessi App Marketplace, che inserisce il sottodominio Zendesk, autorizza la connessione e sceglie cosa sincronizzare. App di terze parti come HubSpot CRM Connect aggiungono funzioni proprie. Le schede del Marketplace sono pagine di marketing, quindi controlla nella schermata di configurazione quali record e campi un'app sincronizza davvero prima di farci affidamento.",
          },
          {
            type: "p",
            text: "La documentazione di HubSpot sulla sincronizzazione dei dati spiega come le sincronizzazioni bidirezionali abbinano i record: per impostazione predefinita, i contatti vengono abbinati per email e le aziende per nome o dominio, e vengono sincronizzati solo i contatti con un indirizzo email valido. Sistema i contatti duplicati e le email mancanti prima di attivare una sincronizzazione bidirezionale, altrimenti la sincronizzazione copierà il disordine in entrambi gli strumenti.",
          },
        ],
      },
      {
        heading: "Integrazioni su misura con webhook ed entrambe le API",
        blocks: [
          {
            type: "p",
            text: "Un'integrazione su misura ti dà il pieno controllo, per esempio per mostrare i ticket aperti nei record delle aziende in HubSpot, cosa che l'integrazione gratuita non può fare. Ecco uno schema comune, descritto per passaggi. Non è un caso di studio di TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: un trigger di Zendesk con l'azione Notify by > Active webhook invia l'ID del ticket e l'email del richiedente a n8n o Make quando un ticket viene creato o cambia stato.",
              "Verifica: il workflow controlla l'header X-Zendesk-Webhook-Signature, così vengono elaborate solo le richieste che arrivano davvero da Zendesk.",
              "Ricerca: trova il contatto HubSpot per email tramite la CRM API, poi l'azienda associata al contatto.",
              "Aggiornamento: scrive il numero di ticket o l'ultimo stato in una proprietà dell'azienda, che liste, report e workflow di HubSpot possono usare.",
              "Gestione degli errori: in caso di HTTP 429 attende e riprova, perché sia Zendesk sia HubSpot limitano le richieste API.",
            ],
          },
          {
            type: "p",
            text: "Per la direzione opposta, un workflow di HubSpot può chiamare il tuo endpoint con l'azione 'Send a webhook', che HubSpot elenca per Data Hub Professional ed Enterprise e che accetta solo URL HTTPS. Sul lato Zendesk, usa OAuth anziché gli API token. Il 27 ottobre 2026 Zendesk ha smesso di consentire agli account esistenti di creare nuovi API token, e tutti gli API token smetteranno di funzionare il 30 aprile 2027. I client OAuth creati a partire dal 30 aprile 2026 ricevono access token che per impostazione predefinita scadono dopo 30 minuti, quindi l'integrazione deve gestire i refresh token.",
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab collega Zendesk e HubSpot tramite API, webhook, n8n e Make, sugli strumenti che usi già. I progetti Custom Automation costano {{price:custom}}. La maggior parte delle configurazioni richiede da 1 a 3 settimane e ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'integrazione HubSpot Zendesk è bidirezionale?",
        a: "Non l'integrazione gratuita Zendesk Support for HubSpot. È unidirezionale e invia le informazioni dei ticket da Zendesk alla timeline del contatto in HubSpot. Per una sincronizzazione bidirezionale, usa un'app del Marketplace come Data sync by HubSpot, oppure un'integrazione su misura.",
      },
      {
        q: "Posso vedere i ticket di Zendesk sulle aziende o sulle trattative di HubSpot?",
        a: "Non con l'integrazione gratuita, che mostra i ticket solo nella timeline del contatto. Puoi farlo con un'integrazione su misura che scrive i dati dei ticket nelle proprietà delle aziende o delle trattative tramite l'API di HubSpot.",
      },
      {
        q: "Perché la mia integrazione HubSpot si è scollegata dopo che ho testato il suo webhook?",
        a: "Zendesk avverte che testare il webhook HubSpot Integration dall'Admin Center può inviare JSON non valido e scollegare l'integrazione. Fai invece il test con un ticket reale.",
      },
      {
        q: "Posso ancora usare un API token di Zendesk per un'integrazione con HubSpot?",
        a: "Solo uno che hai già. Zendesk ha smesso di emettere nuovi API token il 27 ottobre 2026, disattiva i token che restano inutilizzati per 30 giorni e spegnerà tutti gli API token il 30 aprile 2027. Per le nuove integrazioni usa OAuth.",
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
  {
    key: "ai-lead-scoring",
    slug: "lead-scoring-ia",
    category: "crm",
    navLabel: "Lead scoring con IA",
    primaryKeyword: "lead scoring con IA",
    title: "Lead scoring con IA: fit ICP, setup HubSpot e Attio",
    description:
      "Lead scoring con IA: punteggi rispetto al profilo di cliente ideale, lo strumento di HubSpot con i suoi limiti e la scrittura dei punteggi in Attio via API.",
    h1: "Lead scoring con IA: come funziona il punteggio rispetto al tuo ICP",
    intro:
      "Il lead scoring trasforma i lead grezzi in una lista ordinata, assegnando a ciascuno dei punti in base a quanto corrisponde al tuo profilo di cliente ideale (ICP) e a come si comporta. L'IA entra in gioco in due modi: lo scoring nativo della piattaforma, come i lead score costruiti dall'IA di HubSpot, e la classificazione esterna, in cui un modello legge una risposta o un record di arricchimento, calcola un punteggio di fit e lo scrive nel CRM tramite l'API.",
    keyFacts: [
      "Lo strumento di lead scoring di HubSpot richiede Marketing Hub o Sales Hub Professional o Enterprise; i punteggi contatto costruiti dall'IA richiedono Marketing Hub Enterprise.",
      "I lead score con IA di HubSpot richiedono un campione minimo di 50 contatti — 25 convertiti e 25 non convertiti — prima di poter generare un punteggio.",
      "Attio non ha un motore di scoring integrato né un tipo di campo punteggio: un punteggio vive in un attributo numero o select che un workflow o l'API compila.",
      "Gli attributi numero di Attio memorizzano numeri in virgola mobile con fino a quattro decimali — sufficienti per un punteggio di fit da 0 a 100.",
      "Un punteggio esterno si scrive in HubSpot con una PATCH a /crm/v3/objects/contacts/{contactId} e in Attio con una PATCH a /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "Cosa significa lead scoring con IA",
        blocks: [
          {
            type: "p",
            text: "I modelli di scoring combinano di solito due tipi di segnale. I segnali di engagement misurano cosa fa un lead: aperture, clic, risposte, visite alle pagine, meeting prenotati. I segnali di fit misurano chi è il lead, rispetto al tuo profilo di cliente ideale: settore, dimensione dell'azienda, paese, ruolo, strumenti in uso. Un punteggio di fit risponde a \"dovremmo volere questo lead?\", un punteggio di engagement risponde a \"questo lead vuole noi?\".",
          },
          {
            type: "p",
            text: "L'IA compare in due punti. I CRM offrono punteggi nativi di machine learning che imparano dalle tue conversioni storiche, come i lead score costruiti dall'IA di HubSpot. E i team eseguono la propria classificazione fuori dal CRM: un modello linguistico legge una risposta di outreach o un record di arricchimento, la etichetta (interessato, non ora, persona sbagliata) o valuta il fit con l'ICP, e il risultato viene scritto in un campo del CRM tramite l'API. Il secondo schema funziona con qualsiasi CRM dotato di API, ed è quello su cui si concentra questa pagina.",
          },
        ],
      },
      {
        heading: "Il lead scoring dentro HubSpot",
        blocks: [
          {
            type: "p",
            text: "Lo scoring attuale di HubSpot vive nello strumento di lead scoring. È disponibile con Marketing Hub o Sales Hub Professional o Enterprise. Marketing Hub assegna punteggi ai contatti, entrambi gli hub alle aziende e Sales Hub ai deal. Puoi costruire punteggi di engagement, punteggi di fit basati sui valori delle proprietà e punteggi combinati, ciascuno da gruppi di criteri ponderati con punti positivi e negativi.",
          },
          {
            type: "ul",
            items: [
              "Il massimo predefinito per un punteggio è 100 punti; il limite può essere impostato a ±100, ±200, ±300, ±400, ±500, ±1.000 o ±10.000.",
              "Il decadimento del punteggio può ridurre i punti di engagement nel tempo, con intervalli di ogni 1, 3, 6 o 12 mesi, ogni mese contato come 30 giorni.",
              "Le soglie dividono un punteggio nelle fasce High, Medium e Low; i punteggi combinati usano una matrice A1–C3 di fit ed engagement.",
              "I punteggi contatto costruiti dall'IA (Marketing Hub Enterprise) imparano dai contatti passati tra due fasi del ciclo di vita e richiedono almeno 50 contatti — 25 convertiti e 25 non convertiti.",
            ],
          },
          {
            type: "note",
            text: "Lo strumento crea le proprie proprietà punteggio, legate al punteggio stesso: se elimini il punteggio, le proprietà spariscono con lui, e non si possono modificare dall'esterno. Un punteggio IA calcolato esternamente va quindi in una proprietà numerica personalizzata creata da te, non in una proprietà punteggio gestita dallo strumento.",
          },
        ],
      },
      {
        heading: "Lo scoring in Attio",
        blocks: [
          {
            type: "p",
            text: "Attio segue l'approccio opposto: non esiste un motore di scoring né un tipo di campo punteggio. Un punteggio è semplicemente un attributo che compili. Il template di workflow MQL Scoring di Attio assegna punteggi ai lead con blocchi di workflow, e la sua pagina sulle automazioni elenca uno \"Scoring Agent\" tra gli agenti IA che girano dentro i workflow — uno step agente con istruzioni, non un prodotto di scoring separato. Tre tipi di attributo si prestano a un punteggio:",
          },
          {
            type: "ul",
            items: [
              "Un attributo numero memorizza numeri in virgola mobile con fino a quattro decimali e si può filtrare con confronti come maggiore-o-uguale — una casa naturale per un punteggio di fit da 0 a 100.",
              "Un attributo select contiene opzioni predefinite, utile per fasce come A, B e C. Scrivere un valore la cui opzione non esiste restituisce un errore invece di creare l'opzione.",
              "Un attributo rating è un valore numerico da 0 a 5, mostrato come stelle.",
            ],
          },
          {
            type: "p",
            text: "I workflow sono disponibili su tutti i piani di Attio. Un workflow può partire da una modifica di record, da una pianificazione o da un trigger \"Webhook received\", così uno scorer esterno può avviarne uno direttamente; un blocco \"Custom agent\" può eseguire uno step IA con output strutturato, seguito da un blocco di aggiornamento record per salvarlo. I webhook in uscita sono firmati con un HMAC-SHA256 del corpo nell'header Attio-Signature, così il tuo scorer può anche reagire in sicurezza agli eventi di Attio.",
          },
        ],
      },
      {
        heading: "Scrivere un punteggio IA esterno nel tuo CRM",
        blocks: [
          {
            type: "table",
            caption: "Scrivere un punteggio via API (documentazione dei vendor, verificata a novembre 2026)",
            head: ["Passaggio", "HubSpot", "Attio"],
            rows: [
              [
                "Creare il campo",
                "POST /crm/v3/properties/{objectType} con groupName, name, label, type \"number\", fieldType \"number\"",
                "Creare un attributo numero o select sull'oggetto nelle impostazioni del workspace o tramite l'API degli attributi",
              ],
              [
                "Scrivere un record",
                "PATCH /crm/v3/objects/contacts/{contactId} con {\"properties\": {...}}; si può usare un'email con idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} con lo slug dell'attributo nel corpo",
              ],
              [
                "Scrivere in blocco",
                "POST /crm/v3/objects/contacts/batch/update, oppure batch/upsert per creare-o-aggiornare",
                "Una richiesta per record, entro i rate limit dell'API",
              ],
              [
                "Autenticazione",
                "Token di accesso di una private app come Bearer token",
                "API key del workspace o OAuth 2.0, come Bearer token; aggiornare i record richiede gli scope record_permission:read-write e object_configuration:read",
              ],
            ],
          },
          {
            type: "p",
            text: "Una pipeline tipica, descritta per passaggi — mostra come i pezzi si incastrano, non è un caso studio di TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Raccogliere: un nuovo lead arriva da un modulo, da una risposta di outreach o da uno strumento di identificazione dei visitatori.",
              "Classificare: un modello IA etichetta la risposta o il lead (interessato, non interessato, persona sbagliata, fuori mercato).",
              "Assegnare il punteggio: i dati firmografici del lead vengono confrontati con il tuo ICP e viene calcolato un punteggio di fit.",
              "Scrivere: il punteggio finisce in una proprietà numerica personalizzata in HubSpot o in un attributo numero in Attio, tramite gli endpoint qui sopra.",
              "Avvisare: un workflow del CRM o un messaggio Slack avvisa il responsabile quando un lead supera la soglia.",
            ],
          },
        ],
      },
      {
        heading: "Da dove arrivano le risposte: lemlist",
        blocks: [
          {
            type: "p",
            text: "Le risposte alle campagne di outreach sono uno dei segnali di scoring più forti, e lemlist le espone in due modi. I webhook inviano callback POST in tempo reale per eventi come emailsReplied, linkedinReplied e whatsappReplied, oltre a stati del lead come interested e notInterested; un workspace può contenere fino a 200 webhook e ogni URL di destinazione deve essere unico — registra un URL senza tipo di evento per ricevere tutti gli eventi e filtrare dal tuo lato. L'API delle attività (GET /activities) recupera la stessa cronologia filtrata per tipo, campagna e data, per il polling al posto del push. L'autenticazione è HTTP Basic con username vuoto e l'API key come password — non un Bearer token.",
          },
        ],
      },
      {
        heading: "Farlo costruire",
        blocks: [
          {
            type: "p",
            text: "TascaLab costruisce esattamente questa pipeline: lead da una fonte classificati e valutati dall'IA rispetto al tuo ICP e registrati nel tuo CRM, come pacchetto Lead Capture & Scoring ({{price:leadScoring}} una tantum). Collegare strumenti di outreach, chiamate o arricchimento a HubSpot o Attio è il pacchetto CRM Integration ({{price:crmIntegration}} una tantum). La maggior parte dei progetti richiede 1–3 settimane, e ogni progetto include documentazione di base e 30 giorni di supporto post-lancio. Puoi iniziare con una Health Check call gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Che cos'è il lead scoring con IA?",
        a: "Ordinare i lead combinando segnali di engagement (cosa fa un lead) con segnali di fit (quanto corrisponde al tuo profilo di cliente ideale), con l'IA integrata nel CRM — come i lead score con IA di HubSpot — oppure eseguita all'esterno, che classifica le risposte e calcola un punteggio di fit scritto poi tramite l'API.",
      },
      {
        q: "Cosa richiede lo strumento di lead scoring di HubSpot?",
        a: "Marketing Hub o Sales Hub Professional o Enterprise. I punteggi contatto costruiti dall'IA richiedono Marketing Hub Enterprise e almeno 50 contatti — 25 convertiti e 25 non convertiti — per generare un punteggio.",
      },
      {
        q: "Attio ha un lead scoring integrato?",
        a: "Nessun motore di scoring e nessun tipo di campo punteggio. I punteggi vivono in attributi numero o select, compilati dai workflow — inclusi gli step con agenti IA, che Attio presenta come Scoring Agent — o da uno strumento esterno tramite l'API.",
      },
      {
        q: "Come scrivo un punteggio in HubSpot o Attio dall'esterno?",
        a: "HubSpot: crea una proprietà numerica personalizzata, poi PATCH /crm/v3/objects/contacts/{contactId}, oppure usa gli endpoint batch update e upsert. Attio: PATCH /v2/objects/{object}/records/{record_id} con un Bearer token dotato degli scope record_permission:read-write e object_configuration:read.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-12",
  },
  {
    key: "website-visitor-identification",
    slug: "identificazione-visitatori-sito",
    category: "crm",
    navLabel: "Identificazione visitatori",
    primaryKeyword: "identificazione visitatori sito web",
    title: "Identificazione dei visitatori del sito: come funziona",
    description:
      "Identificazione dei visitatori del sito: reverse IP e tracker, cosa può e non può vedere, regole GDPR e consenso ai cookie, e il buyer intent di HubSpot.",
    h1: "Identificazione dei visitatori del sito: come funziona e i suoi limiti",
    intro:
      "Gli strumenti di identificazione dei visitatori abbinano il traffico anonimo del tuo sito alle aziende, usando uno script di tracciamento, il reverse IP lookup e database aziendali. Identificano aziende, non persone, la loro copertura dipende dalle reti da cui navigano i visitatori e nell'UE rientrano pienamente nelle regole del GDPR e del consenso ai cookie.",
    keyFacts: [
      "L'identificazione combina uno script di tracciamento, cookie di tracciamento, reverse IP lookup, database privati e machine learning — abbinando le visite alle aziende, non alle singole persone.",
      "Leadfeeder di Dealfront si rifiuta esplicitamente di pubblicare un tasso di identificazione tipico: la copertura varia con il pubblico, e le visite dai provider internet consumer vengono filtrate.",
      "Chi lavora da remoto è identificabile soprattutto quando naviga attraverso la VPN aziendale.",
      "La CGUE ha stabilito in Breyer (C-582/14) che un indirizzo IP dinamico può essere un dato personale per il gestore di un sito, e il considerando 30 del GDPR cita gli indirizzi IP tra gli identificativi online.",
      "Il buyer intent di HubSpot abbina le visite agli indirizzi IP di aziende note; vedere più di 20 aziende per vista richiede HubSpot Credits e un abbonamento a pagamento.",
    ],
    sections: [
      {
        heading: "Come vengono identificate le aziende",
        blocks: [
          {
            type: "p",
            text: "Il meccanismo, come lo descrive il centro assistenza di Leadfeeder (Dealfront) per il proprio tracker: uno script sul tuo sito registra ogni visita, e l'identificazione combina cookie di tracciamento, reverse IP lookup, database privati, dati di analytics e machine learning. Un'azienda di solito possiede il proprio dominio e il range IP dei propri uffici, quindi una visita da quella rete può essere abbinata all'azienda. La geolocalizzazione basata sull'IP aggiunge la regione del visitatore.",
          },
          {
            type: "p",
            text: "Il traffico che non può essere abbinato a un'azienda resta fuori: Leadfeeder dichiara di non far pagare — e nemmeno mostrare — le visite dai provider internet consumer. Quello che vedi è la fetta identificata del tuo traffico, non tutto il traffico.",
          },
        ],
      },
      {
        heading: "Cosa non può vedere",
        blocks: [
          {
            type: "ul",
            items: [
              "Le singole persone. Leadfeeder dichiara che non è possibile sapere esattamente chi ha visitato senza che il visitatore si identifichi da solo tramite un modulo o una registrazione, e che identificare i singoli visitatori è considerato illegale in molti paesi.",
              "La maggior parte del traffico da casa. Chi lavora da remoto è identificabile soprattutto quando naviga attraverso la VPN aziendale; su una connessione consumer appare come traffico ISP e viene filtrato.",
              "Una percentuale garantita. Il centro assistenza di Leadfeeder dice che non esiste un modo onesto di promettere un tasso di identificazione, perché varia con il pubblico di ogni sito — e avverte che i servizi che promettono una percentuale fissa probabilmente estrapolano da pochi account.",
            ],
          },
        ],
      },
      {
        heading: "GDPR e consenso ai cookie",
        blocks: [
          {
            type: "p",
            text: "Nell'UE si applicano due regole distinte. Primo, gli indirizzi IP possono essere dati personali: l'articolo 4(1) del GDPR definisce i dati personali includendo gli identificativi online, il considerando 30 cita tra questi gli indirizzi IP e gli identificativi cookie, e la Corte di giustizia ha stabilito in Breyer (C-582/14, decisa sotto la direttiva che ha preceduto il GDPR) che un indirizzo IP dinamico costituisce un dato personale per il gestore di un sito che dispone di mezzi legali per collegarlo al visitatore tramite il provider di accesso.",
          },
          {
            type: "p",
            text: "Secondo, l'articolo 5, paragrafo 3 della direttiva ePrivacy richiede il consenso per memorizzare informazioni sul dispositivo di un visitatore o leggerle da esso — con eccezioni ristrette per ciò che è strettamente necessario a fornire il servizio richiesto dal visitatore. Un tracker di identificazione dei visitatori che imposta o legge cookie rientra in quella regola a prescindere dal fatto che i dati siano personali, ed è per questo che nell'UE questi strumenti vanno dietro un banner di consenso ai cookie.",
          },
          {
            type: "note",
            text: "Questa è una descrizione delle regole ad alto livello. Non è una consulenza legale; come si applicano al tuo setup dipende dai tuoi strumenti e dalla tua base giuridica.",
          },
        ],
      },
      {
        heading: "L'identificazione dei visitatori in HubSpot",
        blocks: [
          {
            type: "p",
            text: "La funzione attuale di HubSpot per questo è il buyer intent. Il codice di tracciamento di HubSpot sul tuo sito raccoglie dati dei visitatori, come attività sul sito e indirizzi IP, e il buyer intent collega i visitatori web anonimi agli indirizzi IP di aziende note. Cosa documenta HubSpot, ad ottobre 2026:",
          },
          {
            type: "ul",
            items: [
              "È elencato per gli abbonamenti Starter, Professional ed Enterprise, con HubSpot Credits richiesti per alcune funzioni.",
              "Vedere più di 20 aziende per vista richiede HubSpot Credits e un abbonamento a pagamento; aggiungere aziende e tracciare i loro segnali di intent consuma crediti, mentre filtri ed esclusioni no.",
              "I filtri sul periodo delle visite coprono al massimo gli ultimi 90 giorni, e le aziende aggiunte dal buyer intent ricevono la record source \"Buyer-Intent\".",
              "L'articolo di HubSpot stesso segnala che per rispettare le leggi sulla protezione dei dati può servire un banner di consenso ai cookie sul tuo sito.",
            ],
          },
        ],
      },
      {
        heading: "Dall'azienda identificata al lead con punteggio",
        blocks: [
          {
            type: "p",
            text: "L'identificazione da sola produce solo una lista. Il valore arriva da ciò che succede dopo — uno schema comune, descritto per passaggi; mostra come i pezzi si incastrano, non è un caso studio di TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Identificare: il tracker riporta quali aziende hanno visitato e cosa hanno guardato.",
              "Arricchire: per ogni azienda si recuperano dimensione, settore e paese.",
              "Assegnare il punteggio: l'azienda viene confrontata con il tuo profilo di cliente ideale e riceve un punteggio di fit.",
              "Registrare: l'azienda e il suo punteggio finiscono nel tuo CRM — un record azienda in HubSpot o un record in Attio.",
              "Riepilogare: un riepilogo pianificato, ordinato per punteggio, arriva via email o Slack così il sales vede per primi gli account migliori.",
            ],
          },
        ],
      },
      {
        heading: "Farlo costruire",
        blocks: [
          {
            type: "p",
            text: "TascaLab lo costruisce come pacchetto Lead Capture & Scoring ({{price:leadScoring}} una tantum): lead da una fonte — visitatori del sito, un modulo o risposte di outreach — classificati e valutati dall'IA e registrati nel tuo CRM, con avvisi via email o Slack. Collegare gli strumenti circostanti a HubSpot o Attio è il pacchetto CRM Integration ({{price:crmIntegration}} una tantum). La maggior parte dei progetti richiede 1–3 settimane, e ogni progetto include documentazione di base e 30 giorni di supporto post-lancio. Puoi iniziare con una Health Check call gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'identificazione dei visitatori può dirmi chi ha visitato il mio sito?",
        a: "Identifica le aziende, attraverso le loro reti — non le persone. I vendor dichiarano che sapere esattamente chi ha visitato richiede che il visitatore si identifichi da solo tramite un modulo o una registrazione, e che identificare i singoli è considerato illegale in molti paesi.",
      },
      {
        q: "Quale quota di visitatori può essere identificata?",
        a: "Non esiste una percentuale fissa onesta. Il centro assistenza di Leadfeeder si rifiuta di pubblicarne una, perché la copertura dipende dal pubblico di ogni sito; il traffico dei provider consumer viene filtrato del tutto, e chi lavora da remoto è identificabile soprattutto su VPN aziendale.",
      },
      {
        q: "L'identificazione dei visitatori basata sull'IP è legale secondo il GDPR?",
        a: "Gli indirizzi IP possono essere dati personali (Breyer, C-582/14; considerando 30 del GDPR), e i tracker che impostano o leggono cookie richiedono il consenso ai sensi dell'articolo 5, paragrafo 3 della direttiva ePrivacy: per questo nell'UE questi strumenti vanno dietro un banner di consenso. Questa non è una consulenza legale.",
      },
      {
        q: "Cosa richiede il buyer intent di HubSpot?",
        a: "Il codice di tracciamento di HubSpot sul tuo sito e un abbonamento Starter, Professional o Enterprise. Vedere più di 20 aziende per vista richiede HubSpot Credits, aggiungere aziende e tracciare i segnali di intent consuma crediti, e i filtri sulle visite coprono al massimo gli ultimi 90 giorni.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
