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
      "I workflow consumano i crediti del workspace. La maggior parte dei blocchi consuma un credito, e un blocco che fallisce, insieme a tutti i blocchi successivi, non ne consuma nessuno.",
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
            text: "Il centro assistenza di Attio cita come esempi di blocchi di azione l'aggiornamento di un record, la creazione di un task, l'invio di un messaggio Slack, l'iscrizione di una persona a una sequenza e l'invio di una richiesta HTTP. Puoi anche descrivere un workflow in linguaggio naturale e lasciare che sia Ask Attio a costruirlo. Le app create con l'Attio SDK possono aggiungere blocchi propri, che poi compaiono nel selettore dei blocchi accanto a quelli integrati.",
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
            text: "Le esecuzioni dei workflow e le funzioni AI attingono ai crediti condivisi del workspace. La documentazione di fatturazione di Attio descrive come vengono conteggiati:",
          },
          {
            type: "ul",
            items: [
              "La maggior parte dei blocchi dei workflow consuma un credito a ogni esecuzione.",
              "I crediti vengono addebitati solo per i blocchi effettivamente eseguiti. Se un'esecuzione fallisce a metà, il blocco che ha fallito e tutti i blocchi successivi non consumano crediti.",
              "Anche il ricalcolo degli attributi AI consuma crediti.",
              "Gli admin possono vedere il consumo di crediti di ogni workflow in Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Il numero di crediti inclusi varia in base al piano, e Attio ha già cambiato i suoi piani in passato. Controlla la quota attuale sulla pagina dei prezzi di Attio e stima il consumo moltiplicando il numero di blocchi per esecuzione per le esecuzioni che prevedi ogni mese.",
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
        a: "Sì. Le esecuzioni dei workflow consumano i crediti condivisi del workspace. La maggior parte dei blocchi consuma un credito per esecuzione, e i blocchi che falliscono o non vengono mai eseguiti non ne consumano. Il numero di crediti inclusi dipende dal tuo piano.",
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
      "Attio misura i workflow con i crediti del workspace. La maggior parte dei blocchi consuma un credito per esecuzione.",
      "Le azioni di codice personalizzato di HubSpot devono terminare entro 20 secondi e possono usare fino a 128 MB di memoria.",
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
              ["Come viene limitato l'utilizzo", "Le esecuzioni dei workflow consumano i crediti del workspace. La maggior parte dei blocchi consuma un credito.", "Serve Professional o Enterprise. Un tetto al numero di workflow per ogni edizione."],
              ["Trigger", "Trigger su record, liste, task e di utilità, tra cui una pianificazione, un webhook e un'esecuzione manuale", "Trigger di iscrizione basati su filtri, eventi, pianificazione e webhook"],
              ["Chiamare un altro sistema", "Blocco HTTP request. Le app possono aggiungere blocchi personalizzati.", "Azioni 'Send a webhook' e 'Custom code', in Data Hub Professional ed Enterprise"],
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
            text: "Per le integrazioni contano soprattutto due azioni: 'Send a webhook' e 'Custom code'. HubSpot le elenca entrambe per Data Hub Professional ed Enterprise, l'hub che in precedenza si chiamava Operations Hub. Le azioni di codice personalizzato eseguono Node.js o Python, devono terminare entro 20 secondi e possono usare fino a 128 MB di memoria, quindi i lavori lunghi vanno affidati a uno strumento esterno come n8n.",
          },
        ],
      },
      {
        heading: "Workflow di Attio: misurati in crediti",
        blocks: [
          {
            type: "p",
            text: "Attio misura i workflow in base all'utilizzo. Le esecuzioni attingono ai crediti condivisi del workspace, la maggior parte dei blocchi consuma un credito e i blocchi che falliscono o non vengono mai eseguiti non ne consumano. Gli admin possono vedere il consumo di crediti di ogni workflow in Workspace settings. I crediti inclusi variano in base al piano, quindi controlla la pagina dei prezzi di Attio e stima i blocchi per esecuzione moltiplicati per le esecuzioni al mese.",
          },
          {
            type: "p",
            text: "Per raggiungere un altro sistema da un workflow di Attio, usa il blocco HTTP request oppure crea con l'Attio SDK un'app che aggiunge i propri blocchi ai workflow.",
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
              "Se le tue automazioni chiamano altri sistemi, metti in budget Data Hub Professional in HubSpot, oppure organizzati attorno al blocco HTTP request in Attio.",
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
        a: "Con i crediti del workspace. Le esecuzioni dei workflow attingono ai crediti condivisi del workspace, la maggior parte dei blocchi consuma un credito per esecuzione e i crediti inclusi dipendono dal tuo piano.",
      },
      {
        q: "Posso eseguire codice personalizzato nei workflow di HubSpot o di Attio?",
        a: "HubSpot ha un'azione 'Custom code' in Data Hub Professional ed Enterprise che esegue Node.js o Python, entro 20 secondi e 128 MB di memoria. Attio offre un blocco HTTP request, e le app create con il suo SDK possono aggiungere blocchi personalizzati.",
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
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
