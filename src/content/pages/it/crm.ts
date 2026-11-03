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
];
