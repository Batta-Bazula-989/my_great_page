import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "chatbot-ai-assistenza-clienti",
    category: "services",
    navLabel: "Chatbot AI per l'assistenza",
    primaryKeyword: "chatbot AI per assistenza clienti",
    title: "Chatbot AI per assistenza clienti: come funziona | TascaLab",
    description:
      "Come un chatbot AI per l'assistenza clienti risponde alle FAQ, raccoglie i dati e passa la chat agli operatori, e come si collega a Zendesk o Freshdesk via API.",
    h1: "Chatbot AI per l'assistenza clienti: cosa fa e come si collega al tuo helpdesk",
    intro:
      "Un chatbot AI per l'assistenza clienti risponde alle domande ricorrenti partendo dai tuoi contenuti di aiuto, raccoglie i dati che serviranno all'operatore e passa la conversazione a una persona quando non può aiutare o quando il cliente lo chiede. Rende al meglio come livello sopra il tuo helpdesk esistente: il bot gestisce il primo scambio e tutto ciò che non riesce a risolvere diventa un ticket con il contesto completo allegato.",
    keyFacts: [
      "Gli AI agent di Zendesk generano le risposte dalle fonti di conoscenza collegate e ripiegano su una risposta predefinita quando non trovano nulla di pertinente.",
      "Gli AI Agents di Freshdesk possono trasferire automaticamente una conversazione a una persona quando il cliente usa frasi indicate dall'amministratore.",
      "Un bot di terze parti in Zendesk messaging passa la conversazione cedendo il controllo all'Agent Workspace, il che la rende assegnabile a un operatore.",
      "In base all'articolo 50 dell'AI Act dell'UE, dal 2 agosto 2026 i chatbot devono informare le persone che stanno interagendo con un'intelligenza artificiale, a meno che non sia evidente.",
    ],
    sections: [
      {
        heading: "Cosa fa davvero un chatbot di assistenza",
        blocks: [
          {
            type: "p",
            text: "La maggior parte dei chatbot di assistenza svolge tre compiti, più un quarto facoltativo. Conviene definirli separatamente, perché ognuno ha bisogno di input diversi per funzionare bene.",
          },
          {
            type: "table",
            caption: "I compiti principali di un chatbot per l'assistenza clienti",
            head: ["Compito", "Esempio", "Da cosa dipende"],
            rows: [
              [
                "Rispondere alle domande frequenti",
                "Orari di apertura, politica di reso, tempi di consegna, istruzioni passo passo",
                "Articoli di aiuto accurati e aggiornati o un elenco approvato di domande e risposte",
              ],
              [
                "Raccogliere informazioni",
                "Numero d'ordine, email dell'account, dispositivo, una foto del problema",
                "Un elenco definito di campi che corrispondono ai campi del ticket nel tuo helpdesk",
              ],
              [
                "Passare la conversazione a una persona",
                "Trasferimento in diretta a un operatore, oppure un ticket creato con la trascrizione",
                "Un percorso di passaggio verso il tuo helpdesk e regole chiare su quando usarlo",
              ],
              [
                "Eseguire azioni semplici (facoltativo)",
                "Verificare lo stato di un ordine o di una prenotazione",
                "Accesso via API al sistema che contiene i dati",
              ],
            ],
          },
          {
            type: "p",
            text: "I bot basati su LLM generano le risposte dai tuoi contenuti di conoscenza invece di seguire script scritti a mano. Zendesk, per esempio, descrive la Knowledge reply dei suoi AI agent come una ricerca nelle fonti di conoscenza collegate per generare una risposta, con il ripiego su una risposta predefinita quando non emerge nulla di pertinente. La conseguenza pratica è semplice: il bot vale quanto i contenuti da cui risponde. Lacune e articoli obsoleti si traducono in risposte sbagliate o vaghe.",
          },
          {
            type: "p",
            text: "La raccolta di informazioni viene spesso sottovalutata. Anche quando il bot non riesce a risolvere il problema, chiedere subito numero d'ordine, email dell'account e una breve descrizione elimina il primo giro di domande e risposte che altrimenti toccherebbe all'operatore.",
          },
        ],
      },
      {
        heading: "Il passaggio all'operatore: il punto su cui i clienti giudicano il bot",
        blocks: [
          {
            type: "p",
            text: "Un bot che non permette di raggiungere una persona fa perdere fiducia in fretta. Decidi in anticipo quali situazioni chiudono la parte automatizzata della conversazione:",
          },
          {
            type: "ul",
            items: [
              "Il cliente chiede di parlare con una persona. Le impostazioni di handover degli AI Agent di Freshdesk, per esempio, permettono agli amministratori di elencare frasi che trasferiscono automaticamente la conversazione, mostrare un messaggio prima del trasferimento e, facoltativamente, raccogliere prima i dati del cliente.",
              "Il bot continua a fallire. Zendesk ti permette di configurare un AI agent in modo che passi la conversazione a una persona quando, dopo più tentativi, non riesce a generare una risposta dalle fonti di conoscenza collegate.",
              "L'argomento è delicato o fuori ambito. Freshdesk indica tra i tipici motivi di handover richieste come fatturazione o rimborsi e domande che esulano dall'ambito configurato per l'agente.",
              "Non c'è nessuno online. Fuori dall'orario di lavoro, il bot deve dirlo chiaramente e creare un ticket invece di promettere un operatore dal vivo.",
            ],
          },
          {
            type: "p",
            text: "Qualunque sia il motivo, l'operatore deve ricevere la trascrizione e i campi raccolti, così il cliente non deve ripetere nulla. Quando un bot di terze parti cede il controllo all'Agent Workspace di Zendesk tramite lo switchboard di Sunshine Conversations, la conversazione diventa assegnabile a un operatore e il bot può includere metadati che compilano i campi del ticket che ne risulta.",
          },
        ],
      },
      {
        heading: "Bot nativi dell'helpdesk o bot personalizzato",
        blocks: [
          {
            type: "p",
            text: "Zendesk e Freshdesk offrono entrambi i propri AI agent. Se le tue conversazioni passano già dal widget di messaggistica di quell'helpdesk e il tuo help center risponde alla maggior parte delle domande, l'opzione nativa è il modo più rapido per partire. Un bot personalizzato collegato tramite API è l'alternativa quando ti serve qualcosa che il bot nativo non copre.",
          },
          {
            type: "table",
            caption: "Chatbot di assistenza nativo o personalizzato",
            head: ["", "AI agent nativo dell'helpdesk", "Bot personalizzato collegato via API"],
            rows: [
              [
                "Configurazione",
                "Si configura nell'amministrazione dell'helpdesk, con il suo help center come fonte di conoscenza",
                "Costruito su uno stack separato e collegato all'helpdesk tramite le sue API e i suoi webhook",
              ],
              [
                "Canali",
                "Quelli supportati dal prodotto di messaggistica dell'helpdesk nel tuo piano",
                "Qualsiasi canale con un'API collegabile, come WhatsApp, Telegram o Messenger",
              ],
              [
                "Logica",
                "Limitata al flow builder e alle impostazioni AI del fornitore",
                "Regole tue, ricerche nei sistemi interni, moduli in più passaggi",
              ],
              [
                "Licenze",
                "Incluse nell'abbonamento all'helpdesk o come add-on; verifica il tuo piano",
                "Costi separati per la piattaforma del bot e per l'eventuale uso di modelli AI",
              ],
              [
                "Manutenzione",
                "La piattaforma è mantenuta dal fornitore",
                "Qualcuno deve mantenere l'integrazione quando le API cambiano",
              ],
            ],
          },
          {
            type: "p",
            text: "Nessuna delle due opzioni è migliore a priori. Un ordine sensato è verificare prima cosa copre l'agente nativo e sviluppare su misura solo per la lacuna specifica: un canale, una ricerca o una regola di passaggio che lo strumento nativo non riesce a esprimere.",
          },
        ],
      },
      {
        heading: "Come un bot personalizzato si collega al tuo helpdesk",
        blocks: [
          {
            type: "p",
            text: "Esistono due schemi di integrazione comuni, e molte configurazioni li usano entrambi.",
          },
          {
            type: "ol",
            items: [
              "Creare un ticket al momento del passaggio. Il bot gira sulla propria connessione al canale e, quando serve una persona, crea un ticket tramite la REST API dell'helpdesk con la trascrizione e i dati raccolti. Nella Tickets API di Zendesk, un commento è l'unico campo obbligatorio per creare un ticket, e puoi inviare una chiave di idempotenza in modo che una richiesta ripetuta non crei un duplicato. L'endpoint POST /api/v2/tickets di Freshdesk accetta campi personalizzati come coppie chiave–valore e crea un nuovo contatto quando l'email del richiedente non è già nota.",
              "Condividere la conversazione all'interno della messaggistica dell'helpdesk. In Zendesk, un bot di terze parti può essere installato come risponditore della messaggistica; un solo bot alla volta può avere il ruolo di risponditore predefinito. Il bot risponde per primo e usa l'azione pass control dello switchboard per passare la conversazione all'Agent Workspace quando serve una persona.",
            ],
          },
          {
            type: "p",
            text: "I webhook gestiscono il percorso di ritorno. Un trigger di Zendesk può chiamare un endpoint esterno tramite un'azione Notify webhook, per esempio per comunicare al bot che un operatore ha risolto il ticket, così che possa chiudere il cerchio sul canale originale.",
          },
          {
            type: "note",
            text: "Mantieni un'unica fonte di verità per le risposte. Se il bot risponde da un documento separato che col tempo si discosta dal tuo help center, i clienti ricevono risposte contraddittorie a seconda di dove chiedono.",
          },
        ],
      },
      {
        heading: "Dire ai clienti che stanno parlando con un bot",
        blocks: [
          {
            type: "p",
            text: "Se servi clienti nell'UE, l'articolo 50 dell'AI Act si applica dal 2 agosto 2026. Secondo le FAQ della Commissione europea, i fornitori devono progettare sistemi come i chatbot in modo che le persone siano informate che stanno interagendo con un'intelligenza artificiale fin dall'inizio della prima interazione, in modo chiaro e distinguibile. L'eccezione, per i casi in cui ciò è evidente per una persona ragionevolmente informata, va interpretata in modo restrittivo, afferma la Commissione.",
          },
          {
            type: "p",
            text: "Il modo più semplice per gestirlo è una frase chiara nel saluto del bot, più un modo visibile per raggiungere una persona. Inoltre le trascrizioni tendono a contenere dati personali, quindi decidi per quanto tempo la piattaforma del bot le conserva e chi può accedervi.",
          },
        ],
      },
      {
        heading: "Come TascaLab sviluppa i chatbot di assistenza",
        blocks: [
          {
            type: "p",
            text: "TascaLab sviluppa chatbot sopra gli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack o sistemi interni) tramite le loro API, i webhook e Make o n8n, quindi non serve cambiare piattaforma. Il bot è pensato come un filtro davanti al tuo team, non come un suo sostituto: risponde a ciò che può, raccoglie i dati e passa il resto con il contesto.",
          },
          {
            type: "table",
            caption: "Pacchetti chatbot TascaLab (prezzo una tantum)",
            head: ["Pacchetto", "Ambito", "Prezzo (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 canali, FAQ, raccolta di informazioni di base", "350–450 USD"],
              [
                "Standard Chat Bot",
                "3–5 canali, conversazioni più complesse, passaggi all'operatore più fluidi",
                "500–650 USD",
              ],
            ],
          },
          {
            type: "p",
            text: "Canali disponibili: sito web, WhatsApp, Telegram, Facebook Messenger e Instagram, più il telefono tramite il voice bot. La maggior parte delle configurazioni richiede 1–3 settimane, e ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti. Si parte da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Un chatbot AI sostituirà i miei operatori?",
        a: "Non dovrebbe essere progettato per farlo. Un bot di assistenza è più utile quando gestisce le domande ripetitive e raccoglie i dati, per poi passare tutto il resto alle persone con la conversazione allegata.",
      },
      {
        q: "Il chatbot ha bisogno di una propria knowledge base?",
        a: "Di solito no. I bot di assistenza AI rispondono in genere dal tuo help center esistente o da un elenco approvato di domande e risposte: gli AI agent di Zendesk, per esempio, generano le risposte dalle fonti di conoscenza collegate. Mantenere un'unica fonte evita risposte contraddittorie.",
      },
      {
        q: "Un chatbot personalizzato può creare ticket in Zendesk o Freshdesk?",
        a: "Sì. Entrambi gli helpdesk espongono un endpoint REST per creare ticket (POST /api/v2/tickets), quindi un bot può aprire un ticket con la trascrizione e i campi raccolti quando passa la conversazione.",
      },
      {
        q: "Devo dire ai clienti che stanno parlando con un bot?",
        a: "Nell'UE, l'articolo 50 dell'AI Act impone ai chatbot, dal 2 agosto 2026, di informare le persone che stanno interagendo con un'intelligenza artificiale, a meno che non sia evidente. Dirlo nel primo messaggio del bot è l'approccio più semplice.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Customizing the Knowledge reply in an AI agent with agentic AI",
        url: "https://support.zendesk.com/hc/en-us/articles/10448933203994-Customizing-the-Knowledge-reply-in-an-AI-agent-with-agentic-AI",
      },
      {
        label: "Zendesk Help Center — Managing third-party bots in Admin Center",
        url: "https://support.zendesk.com/hc/en-us/articles/5064149334426-Managing-third-party-bots-in-Admin-Center",
      },
      {
        label: "Zendesk Developer Docs — Switchboard",
        url: "https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/",
      },
      {
        label: "Zendesk Developer Docs — Tickets API",
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Developers — API reference (Create a ticket)",
        url: "https://developers.freshdesk.com/api/",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["chatbot-to-human-handoff", "website-chatbot-for-support", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. AI voice bot for customer service
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-voice-bot-for-customer-service",
    slug: "voice-bot-ai-servizio-clienti",
    category: "services",
    navLabel: "Voice bot AI per il telefono",
    primaryKeyword: "voice bot AI per servizio clienti",
    title: "Voice bot AI per servizio clienti: come funziona | TascaLab",
    description:
      "Come funziona un voice bot AI per il servizio clienti: telefonia, speech-to-text, logica AI e text-to-speech, più trasferimento, IVR o bot e regole FCC.",
    h1: "Voice bot AI per il servizio clienti: come funziona l'automazione delle chiamate in entrata",
    intro:
      "Un voice bot AI per il servizio clienti risponde alle chiamate in entrata, capisce di cosa ha bisogno chi chiama, gestisce le richieste semplici o raccoglie i dati e trasferisce la chiamata a una persona quando è il caso. Dal punto di vista tecnico concatena quattro componenti (telefonia, speech-to-text, un modello linguistico o una logica di dialogo e text-to-speech) e il passaggio al tuo team conta quanto la naturalezza della voce.",
    keyFacts: [
      "Un IVR tradizionale funziona con la pressione dei tasti (DTMF); il verbo Gather di Twilio usa DTMF come impostazione predefinita e va configurato per accettare il parlato se vuoi trascrivere chi chiama.",
      "I Media Streams bidirezionali di Twilio trasportano l'audio della chiamata in mu-law a 8 kHz, su un solo canale, codificato in base64 su una WebSocket.",
      "Zendesk permette a un voice AI agent esterno di rispondere per primo alle chiamate e di passarle a un operatore dal vivo su una linea SIP-IN.",
      "La decisione della FCC di febbraio 2024 considera le voci generate dall'AI come “artificiali” ai sensi del TCPA, quindi le chiamate effettuate con esse richiedono in genere il consenso esplicito preventivo.",
    ],
    sections: [
      {
        heading: "Come funziona un voice bot per le chiamate in entrata",
        blocks: [
          {
            type: "p",
            text: "Ogni voice bot per le chiamate in entrata esegue lo stesso ciclo, a prescindere dai fornitori che usi:",
          },
          {
            type: "ol",
            items: [
              "Telefonia. La chiamata arriva a un numero di telefono o a un trunk SIP e il provider di telefonia la consegna alla tua applicazione, chiedendo istruzioni per la chiamata al tuo server oppure inviandogli l'audio in streaming.",
              "Speech-to-text. Le parole di chi chiama vengono trascritte. Con il verbo Gather di Twilio configurato per accettare il parlato, Twilio invia la trascrizione (SpeechResult) insieme a un punteggio Confidence alla tua action URL.",
              "Comprensione e logica. Un modello linguistico o un dialogo basato su regole stabilisce cosa vuole chi chiama e cosa fare dopo: rispondere, fare una domanda di approfondimento, cercare un dato tramite API o trasferire la chiamata.",
              "Text-to-speech. La risposta viene sintetizzata in audio e riprodotta a chi chiama.",
              "Ripetere o passare la chiamata. Il ciclo continua finché la richiesta non è gestita o la chiamata non viene trasferita, e l'esito viene registrato nel tuo helpdesk.",
            ],
          },
          {
            type: "p",
            text: "Ci sono due modi principali per collegare il tutto. In una configurazione a turni, la piattaforma raccoglie un enunciato alla volta e il tuo server risponde con nuove istruzioni; Twilio, per esempio, prosegue la chiamata usando il TwiML restituito dalla tua action URL. In una configurazione in streaming, l'audio scorre senza interruzioni su una WebSocket: i Media Streams bidirezionali di Twilio, avviati con le istruzioni TwiML Connect e Stream, trasmettono audio mu-law codificato in base64 a 8.000 Hz su un solo canale, e il tuo server rimanda l'audio nello stesso formato.",
          },
          {
            type: "p",
            text: "Nel mezzo ci sono i livelli gestiti. ConversationRelay di Twilio, per esempio, gestisce direttamente speech-to-text e text-to-speech e scambia testo con il tuo server su una WebSocket sicura, così il tuo codice lavora con le parole invece che con l'audio grezzo. Ha anche impostazioni per le interruzioni, perché chi chiama parla sopra ai bot; in una configurazione con Media Streams grezzi, il tuo server invia un messaggio clear per scartare l'audio nel buffer non ancora riprodotto.",
          },
        ],
      },
      {
        heading: "IVR o voice bot conversazionale",
        blocks: [
          {
            type: "table",
            caption: "Un menu IVR a confronto con un voice bot conversazionale",
            head: ["", "IVR tradizionale", "Voice bot conversazionale"],
            rows: [
              ["Input di chi chiama", "Pressione dei tasti (DTMF) su un menu fisso", "Linguaggio naturale, trascritto e interpretato"],
              [
                "Struttura",
                "Albero di menu: “premi 1 per la fatturazione, 2 per gli ordini”",
                "Domanda aperta come “Come posso aiutarti?”, seguita dal riconoscimento dell'intento",
              ],
              [
                "Funziona bene per",
                "Un numero ridotto di opzioni di instradamento prevedibili",
                "Molte richieste diverse e la raccolta di dati con le parole di chi chiama",
              ],
              [
                "Punti deboli",
                "Menu lunghi e chiamanti il cui problema non rientra in nessuna opzione",
                "Fraintendimenti sulle linee rumorose; servono passaggi di conferma e alternative di ripiego",
              ],
              [
                "Cosa ricavi",
                "Quale percorso del menu ha scelto chi chiama",
                "Una trascrizione, l'intento rilevato ed eventuali campi raccolti",
              ],
            ],
          },
          {
            type: "p",
            text: "Non devi per forza scegliere. Un'opzione è un breve menu a tasti per la scelta della lingua, seguito da un passaggio conversazionale. Con il verbo Gather di Twilio, l'input può essere configurato per accettare sia i tasti sia il parlato nello stesso prompt.",
          },
        ],
      },
      {
        heading: "Passare la chiamata a una persona",
        blocks: [
          {
            type: "p",
            text: "Le piattaforme di telefonia distinguono due tipi di trasferimento. Nella terminologia di Twilio, un cold transfer aggiunge il nuovo partecipante alla chiamata, ma chi l'ha avviato esce prima che il nuovo partecipante risponda; un warm transfer permette a tutti e tre di parlare prima che chi l'ha avviato esca. Twilio consiglia di collegare le chiamate tra clienti e operatori tramite una conferenza, che è ciò che rende possibili entrambi gli schemi.",
          },
          {
            type: "p",
            text: "Per un bot, la versione utile del warm transfer consiste nel passare il contesto anziché parlare: crea o aggiorna un ticket con la trascrizione, l'intento rilevato e i dati raccolti prima che l'operatore risponda, così non parte da zero. I momenti giusti per trasferire:",
          },
          {
            type: "ul",
            items: [
              "Chi chiama chiede di parlare con una persona: assecondalo subito, non dopo altre due domande.",
              "Il bot ha frainteso chi chiama due volte di fila.",
              "La richiesta riguarda pagamenti, reclami o qualsiasi cosa su cui il bot non è autorizzato a decidere.",
              "Chi chiama è un cliente noto ad alta priorità, se il tuo instradamento li distingue.",
            ],
          },
          {
            type: "p",
            text: "In Zendesk, un voice AI agent esterno può rispondere per primo a una chiamata e passarla a un operatore Zendesk su una linea SIP-IN. Il bot può creare un ticket e collegarlo alla chiamata passando il numero del ticket nell'header SIP X-Zendesk-Ticket-Id; Zendesk autentica le chiamate SIP-IN con liste di controllo degli accessi basate su IP. Zendesk offre anche i propri voice AI agent, che quando passano la chiamata aggiungono al ticket la trascrizione, un riepilogo generato dall'AI e l'intento rilevato.",
          },
        ],
      },
      {
        heading: "Normativa: cosa si applica ai voice bot",
        blocks: [
          {
            type: "p",
            text: "Stati Uniti. A febbraio 2024 la FCC ha emesso una Declaratory Ruling (FCC 24-17) che conferma che le restrizioni del TCPA sulle chiamate con “voce artificiale o preregistrata” si estendono alle attuali tecnologie di AI che generano voci umane. Le chiamate effettuate con queste tecnologie richiedono quindi in genere il consenso esplicito preventivo della persona chiamata, salvo finalità di emergenza o un'esenzione applicabile. La decisione riguarda le chiamate effettuate verso i consumatori, come le robocall. Un bot che risponde alle chiamate che i tuoi clienti fanno a te è una situazione diversa, ma tutte le chiamate in uscita effettuate dal bot (richiamate, promemoria, sondaggi) rientrano in queste regole.",
          },
          {
            type: "p",
            text: "Unione europea. L'articolo 50 dell'AI Act si applica dal 2 agosto 2026 e impone che i sistemi di AI che interagiscono direttamente con le persone siano progettati in modo che queste sappiano di avere a che fare con un'intelligenza artificiale, a meno che non sia evidente. Le FAQ della Commissione affermano che le persone devono essere informate fin dall'inizio della prima interazione. Per un voice bot, la soluzione pratica è una breve dichiarazione nel saluto iniziale.",
          },
          {
            type: "note",
            text: "Queste sono informazioni generali, non una consulenza legale. Se il tuo bot effettua chiamate in uscita o operi in un settore regolamentato, verifica le regole che si applicano al tuo caso.",
          },
        ],
      },
      {
        heading: "Le scelte di design che decidono il successo di un voice bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Dichiara la natura del bot e chiarisci le aspettative in una frase: è un assistente automatico ed ecco in cosa può aiutare.",
              "Usa prompt brevi e chiedi una cosa alla volta; chi chiama non può tornare indietro a rileggere.",
              "Ripeti numeri, indirizzi email e ID d'ordine prima di usarli.",
              "Spiega a chi chiama come raggiungere una persona, e fai in modo che quel percorso funzioni in ogni fase.",
              "Registra ogni chiamata nel tuo helpdesk con la trascrizione e l'esito, così vedi per cosa chiamano davvero le persone.",
              "Pianifica il fuori orario: prendi i dati e crea un ticket, e prometti una richiamata solo se qualcuno la farà davvero.",
            ],
          },
        ],
      },
      {
        heading: "Come TascaLab sviluppa i voice bot",
        blocks: [
          {
            type: "p",
            text: "Il pacchetto Voice Bot di TascaLab copre chiamate in entrata, smistamento e passaggio al tuo team, a un prezzo una tantum di 1.100–1.600 USD. Il bot si collega agli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack o sistemi interni) tramite API e webhook, così gli esiti delle chiamate arrivano come ticket o messaggi che il tuo team già segue. È costruito come un filtro davanti al tuo team, non come un suo sostituto.",
          },
          {
            type: "p",
            text: "La maggior parte delle configurazioni richiede 1–3 settimane. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e puoi partire da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra un IVR e un voice bot AI?",
        a: "Un IVR instrada chi chiama attraverso un menu fisso, di solito con la pressione dei tasti (DTMF). Un voice bot conversazionale trascrive ciò che dice chi chiama, ne individua l'intento e può rispondere, raccogliere dati o trasferire la chiamata.",
      },
      {
        q: "Un voice bot può trasferire le chiamate a un operatore dal vivo?",
        a: "Sì. Le piattaforme di telefonia supportano i cold transfer, in cui il bot esce prima che l'operatore risponda, e i warm transfer, in cui i partecipanti si sovrappongono. In Zendesk, un voice AI agent esterno può passare la chiamata a un operatore dal vivo su una linea SIP-IN.",
      },
      {
        q: "La FCC vieta i voice bot AI?",
        a: "No. La sua decisione di febbraio 2024 stabilisce che le voci generate dall'AI contano come “artificiali” ai sensi del TCPA, quindi le chiamate effettuate con esse richiedono in genere il consenso esplicito preventivo della persona chiamata. Riguarda le chiamate verso i consumatori, quindi conta soprattutto se il tuo bot effettua chiamate in uscita.",
      },
      {
        q: "Devo dire a chi chiama che sta parlando con un bot?",
        a: "Nell'UE, l'articolo 50 dell'AI Act impone, dal 2 agosto 2026, che le persone siano informate quando interagiscono direttamente con un sistema di AI, a meno che non sia evidente. Una dichiarazione di una frase nel saluto iniziale è il modo semplice per gestirlo.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — TwiML Voice: Gather",
        url: "https://www.twilio.com/docs/voice/twiml/gather",
      },
      {
        label: "Twilio Docs — Media Streams Overview",
        url: "https://www.twilio.com/docs/voice/media-streams",
      },
      {
        label: "Twilio Docs — TwiML Voice: ConversationRelay",
        url: "https://www.twilio.com/docs/voice/twiml/connect/conversationrelay",
      },
      {
        label: "Twilio Docs — Call Control Concepts (warm and cold transfer)",
        url: "https://www.twilio.com/docs/taskrouter/contact-center-blueprint/call-control-concepts",
      },
      {
        label: "Zendesk Help Center — Connecting an external AI agent using a SIP-IN line",
        url: "https://support.zendesk.com/hc/en-us/articles/8397061704474-Connecting-an-external-AI-agent-using-a-SIP-IN-line",
      },
      {
        label: "Zendesk Help Center — Announcing the general availability of voice AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11183058023450-Announcing-the-general-availability-of-voice-AI-agents",
      },
      {
        label: "FCC — Declaratory Ruling FCC 24-17 (AI-generated voices under the TCPA)",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Ticket routing automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ticket-routing-automation",
    slug: "smistamento-automatico-ticket",
    category: "services",
    navLabel: "Smistamento automatico ticket",
    primaryKeyword: "smistamento automatico dei ticket",
    title: "Smistamento automatico dei ticket: metodi e setup | TascaLab",
    description:
      "Smistamento automatico dei ticket: routing a regole, round-robin, per carico e per competenze, triage con AI e come lo gestiscono Zendesk, Freshdesk e Jira.",
    h1: "Smistamento automatico dei ticket: metodi, strumenti e configurazione",
    intro:
      "Lo smistamento automatico dei ticket assegna ogni ticket in arrivo al gruppo o all'operatore giusto senza che qualcuno debba fare il triage della coda a mano. Richiede due decisioni, cioè di cosa tratta il ticket (argomento, lingua, priorità, cliente) e chi deve gestirlo, prese con metodi come regole, round-robin, routing basato sul carico o sulle competenze. Zendesk, Freshdesk e Jira Service Management lo supportano tutti in modo nativo.",
    keyFacts: [
      "L'omnichannel routing di Zendesk assegna per impostazione predefinita all'operatore con più capacità libera; il round robin è il metodo alternativo.",
      "Il motore Omniroute di Freshdesk gestisce l'assegnazione dei ticket round-robin, basata sul carico e basata sulle competenze.",
      "L'azione di assegnazione dell'automazione di Jira può distribuire il lavoro per carico bilanciato, round-robin o selezione casuale.",
      "L'intelligent triage di Zendesk classifica i nuovi ticket per intento, sentiment, lingua ed entità, e i trigger possono smistarli in base ai risultati.",
    ],
    sections: [
      {
        heading: "Due passaggi: classificare, poi assegnare",
        blocks: [
          {
            type: "p",
            text: "Di solito lo smistamento fallisce al primo passaggio. Se i ticket arrivano senza una categoria affidabile, anche un buon metodo di assegnazione li manda alle persone sbagliate. Tratta quindi lo smistamento come due decisioni separate: che cos'è questo ticket e chi deve gestirlo, prima il gruppo e poi l'operatore. I segnali che puoi usare per classificare un ticket:",
          },
          {
            type: "ul",
            items: [
              "Punto di ingresso: l'indirizzo email, il modulo web, la linea telefonica o il widget di chat da cui è arrivato il ticket.",
              "Campi del modulo: un tipo di richiesta o un menu a tendina selezionato dal cliente.",
              "Dati del richiedente: l'organizzazione, il piano o un tag VIP sull'utente.",
              "Contenuto: parole chiave nell'oggetto o nella descrizione, oppure una classificazione AI di intento, lingua e sentiment.",
            ],
          },
          {
            type: "p",
            text: "La classificazione AI è ormai integrata nei principali helpdesk. L'intelligent triage di Zendesk classifica i nuovi ticket per intento, sentiment, lingua ed entità in base all'oggetto e al primo commento pubblico, e aggiunge i risultati come campi del ticket utilizzabili da trigger, viste e routing. Trattala come qualsiasi altro segnale: controlla un campione delle sue classificazioni prima di basarci lo smistamento.",
          },
        ],
      },
      {
        heading: "Metodi di smistamento a confronto",
        blocks: [
          {
            type: "table",
            caption: "Metodi comuni di smistamento dei ticket",
            head: ["Metodo", "Come viene scelto l'assegnatario", "Ideale per", "Attenzione a"],
            rows: [
              [
                "Basato su regole",
                "Condizioni se/allora su canale, modulo, parole chiave o richiedente impostano gruppo, operatore o priorità",
                "Categorie stabili, gestione dei VIP, code per lingua",
                "Regole sovrapposte e ordine delle regole; le regole invecchiano quando i prodotti cambiano",
              ],
              [
                "Round-robin",
                "Il successivo operatore disponibile, a turno",
                "Ticket simili gestiti da operatori con competenze simili",
                "Ignora la complessità dei ticket, a meno che non sia combinato con limiti di capacità",
              ],
              [
                "Basato sul carico",
                "L'operatore con più capacità libera o con meno ticket aperti",
                "Ticket di durata disomogenea; evitare il sovraccarico",
                "Dipende da stati degli operatori accurati e da limiti sensati",
              ],
              [
                "Basato sulle competenze",
                "Un operatore le cui competenze corrispondono agli attributi del ticket, come lingua o prodotto",
                "Team specialistici e multilingue",
                "I ticket che non corrispondono a nessuna competenza possono restare in attesa; serve un'alternativa di ripiego",
              ],
              [
                "Triage assistito dall'AI",
                "Un modello prevede categoria, priorità o gruppo, poi uno dei metodi sopra assegna il ticket",
                "Grandi volumi di ticket in testo libero",
                "Classificazioni errate; rivedi regolarmente dei campioni",
              ],
            ],
          },
          {
            type: "p",
            text: "In pratica questi metodi si combinano a livelli: regole o AI decidono il gruppo, e l'assegnazione round-robin, basata sul carico o sulle competenze sceglie l'operatore al suo interno.",
          },
        ],
      },
      {
        heading: "Come lo fanno Zendesk, Freshdesk e Jira Service Management",
        blocks: [
          {
            type: "table",
            caption: "Opzioni di smistamento native per helpdesk",
            head: ["Helpdesk", "Livello basato su regole", "Assegnazione automatica all'operatore"],
            rows: [
              [
                "Zendesk",
                "I trigger verificano condizioni come canale, organizzazione o tag e impostano il Group o l'Assignee",
                "L'omnichannel routing usa stato, capacità e competenze degli operatori; l'impostazione predefinita privilegia chi ha più capacità libera, con il round robin come alternativa",
              ],
              [
                "Freshdesk",
                "Le regole di automazione alla creazione del ticket verificano richiedente, oggetto, descrizione, tag, origine o modulo e assegnano un gruppo o un operatore",
                "Omniroute supporta l'assegnazione round-robin, basata sul carico e basata sulle competenze",
              ],
              [
                "Jira Service Management",
                "Regole di automazione composte da trigger, condizioni e azioni",
                "L'azione di assegnazione distribuisce il lavoro per carico bilanciato, round-robin o selezione casuale",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. L'omnichannel routing invia il lavoro solo agli operatori il cui stato li rende idonei per quel canale, e le regole di capacità limitano quanti ticket per canale un operatore può avere contemporaneamente. Le competenze possono essere contrassegnate come obbligatorie o facoltative: quelle facoltative vengono ignorate dopo un timeout delle competenze, così il ticket può raggiungere un gruppo più ampio di operatori, mentre quelle obbligatorie non scadono mai. L'ordine della coda dipende dall'anzianità del ticket, dalla priorità o dalla violazione SLA più vicina, a seconda del piano e della configurazione.",
          },
          {
            type: "p",
            text: "Freshdesk. Per impostazione predefinita, le regole alla creazione del ticket si fermano alla prima regola attiva le cui condizioni corrispondono, quindi metti le regole specifiche sopra quelle generiche; puoi passare all'esecuzione di tutte le regole corrispondenti. Freshdesk consiglia di assegnare un gruppo prima di un operatore, perché assegnare un operatore senza gruppo può lasciare il ticket non assegnato. Nell'assegnazione basata sulle competenze, un ticket che non corrisponde a nessuna competenza resta non assegnato finché qualcuno non lo assegna, quindi crea una competenza di ripiego che abbia il gruppo come condizione. Nel round-robin, Omniroute salta gli operatori che hanno raggiunto il proprio limite e dà il ticket successivo all'operatore la cui ultima assegnazione è la più vecchia.",
          },
          {
            type: "p",
            text: "Jira Service Management. Lo smistamento si costruisce con le regole di automazione: un trigger come un nuovo work item, condizioni sul tipo di richiesta o sui campi e azioni come l'assegnazione. Con il metodo del carico bilanciato, ogni persona riceve una quota uguale di work item all'interno di un perimetro che definisci con JQL; senza una restrizione JQL, la regola conta gli elementi assegnati in tutto il progetto. Il round-robin scorre in ordine le persone indicate.",
          },
        ],
      },
      {
        heading: "Configurare uno smistamento che regge",
        blocks: [
          {
            type: "ol",
            items: [
              "Analizza alcune settimane di ticket recenti: elenca le categorie principali e annota chi ha effettivamente risolto ciascuna.",
              "Definisci i gruppi prima degli operatori. Indirizza prima al team giusto; la scelta dell'operatore è un secondo passaggio.",
              "Usa per primi i segnali più affidabili, cioè punti di ingresso e campi del modulo, e aggiungi la classificazione per parole chiave o con AI per il resto.",
              "Scegli un metodo di assegnazione per ogni gruppo: round-robin per lavoro uniforme, basato sul carico dove l'impegno per ticket varia, competenze dove conta l'esperienza.",
              "Aggiungi un'alternativa di ripiego perché nulla resti non assegnato: una regola generica, una competenza di ripiego o una coda di triage con un responsabile.",
              "Tagga le decisioni di smistamento per poterci fare report, e rivedi ogni mese i ticket smistati male.",
            ],
          },
          {
            type: "note",
            text: "Lo smistamento cambia chi vede per primo un ticket, quindi incide sui tuoi tempi di risposta. Controlla i report SLA per un paio di settimane dopo ogni modifica allo smistamento.",
          },
        ],
      },
      {
        heading: "Come TascaLab configura lo smistamento dei ticket",
        blocks: [
          {
            type: "p",
            text: "Il servizio Ticket Routing & Categorization di TascaLab (600–950 USD una tantum) lavora sopra l'helpdesk che hai già, che sia Zendesk, Freshdesk o Jira, usando le sue regole native dove bastano e API, webhook o Make/n8n dove non bastano, per esempio per classificare i ticket prima che il tuo smistamento nativo li assegni. Non serve cambiare piattaforma.",
          },
          {
            type: "p",
            text: "La maggior parte delle configurazioni richiede 1–3 settimane. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e una call di audit gratuita di 30 minuti è un buon punto di partenza per mappare la tua coda attuale.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra round-robin e smistamento basato sul carico?",
        a: "Il round-robin dà il ticket successivo al successivo operatore di turno. Lo smistamento basato sul carico lo dà all'operatore con più capacità libera o con meno ticket aperti, il che si adatta ai team in cui l'impegno richiesto dai ticket varia molto.",
      },
      {
        q: "Cosa succede ai ticket che non corrispondono a nessuna regola o competenza?",
        a: "Dipende dallo strumento. Nell'assegnazione basata sulle competenze di Freshdesk, un ticket senza corrispondenza resta non assegnato finché qualcuno non lo assegna, perciò Freshdesk suggerisce una competenza di ripiego. In Zendesk, le competenze facoltative vengono ignorate dopo un timeout, mentre quelle obbligatorie non scadono mai.",
      },
      {
        q: "L'AI può classificare i ticket prima dello smistamento?",
        a: "Sì. L'intelligent triage di Zendesk, per esempio, classifica i ticket per intento, sentiment e lingua, e i trigger possono smistarli in base a quei campi. Puoi anche classificare i ticket con un modello esterno e scrivere il risultato in un campo del ticket tramite API.",
      },
      {
        q: "Devo cambiare helpdesk per automatizzare lo smistamento?",
        a: "No. Zendesk, Freshdesk e Jira Service Management includono tutti funzioni native di smistamento e assegnazione, e la logica personalizzata si può aggiungere tramite le loro API e i loro webhook.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Zendesk Help Center — About using skills to route tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/5833468891674-About-using-skills-to-route-tickets",
      },
      {
        label: "Zendesk Help Center — Workflow: Auto-assigning tickets to a specific agent or group",
        url: "https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group",
      },
      {
        label: "Zendesk Help Center — About intelligent triage",
        url: "https://support.zendesk.com/hc/en-us/articles/4964463770650-About-intelligent-triage",
      },
      {
        label: "Freshdesk Support — Configure Freshdesk Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/238979-ticket-assignments-with-freshdesk-omniroute-",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Support — Automation rules that run on ticket creation",
        url: "https://support.freshdesk.com/support/solutions/articles/37614-setting-up-automation-rules-to-run-on-ticket-creation",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["zendesk-automation", "freshdesk-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Automated customer support reporting
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "automated-support-reporting",
    slug: "report-automatici-assistenza-clienti",
    category: "services",
    navLabel: "Report automatici del supporto",
    primaryKeyword: "report automatici assistenza clienti",
    title: "Report automatici per l'assistenza clienti: guida | TascaLab",
    description:
      "Report automatici per l'assistenza clienti: quali metriche seguire e come programmare i report da Zendesk, Freshdesk o Jira verso email, Slack o Google Sheets.",
    h1: "Report automatici per l'assistenza clienti: metriche, pianificazione e invio",
    intro:
      "I report automatici per l'assistenza clienti portano i tuoi numeri chiave (volume di ticket, tempi di risposta e di risoluzione, rispetto degli SLA, arretrato) alle persone giuste a cadenza fissa, senza che nessuno debba esportare dati a mano. Parti dai report pianificati integrati nel tuo helpdesk; quando non bastano, estrai i dati tramite API verso Google Sheets, Slack o email.",
    keyFacts: [
      "Zendesk Explore può inviare via email una dashboard condivisa con una pianificazione ricorrente impostabile fino a 12 mesi in avanti.",
      "In Freshdesk Analytics i report personalizzati si possono pianificare; i report predefiniti (curated) vanno prima clonati.",
      "Le sottoscrizioni ai filtri di Jira inviano via email i risultati di una ricerca salvata secondo una pianificazione, anche basata su cron; vengono inviati solo i primi 200 risultati.",
      "Un incoming webhook di Slack pubblica un messaggio in un canale a partire da un semplice payload JSON.",
    ],
    sections: [
      {
        heading: "Cosa riportano di solito i team di assistenza",
        blocks: [
          {
            type: "p",
            text: "Un report di assistenza utile risponde a tre domande: stiamo tenendo il passo, siamo abbastanza veloci e i clienti sono soddisfatti? Queste metriche coprono quasi tutto:",
          },
          {
            type: "table",
            caption: "Metriche comuni nei report dell'assistenza clienti",
            head: ["Metrica", "Cosa misura", "Utile per"],
            rows: [
              [
                "Ticket creati, risolti e aperti",
                "Il volume, e se l'arretrato sta crescendo",
                "Controlli quotidiani, decisioni sul personale",
              ],
              [
                "Tempo di prima risposta",
                "Tempo dalla creazione del ticket alla prima risposta pubblica di un operatore (definizione di Zendesk)",
                "Reattività, monitoraggio degli SLA",
              ],
              [
                "Tempo di prima risoluzione e di risoluzione completa",
                "Tempo fino alla prima risoluzione rispetto all'ultima, che differiscono quando i ticket vengono riaperti",
                "Qualità dei processi, individuazione dei problemi di riapertura",
              ],
              [
                "Rispetto degli SLA",
                "Quota di ticket che hanno rispettato gli obiettivi di prima risposta o di risoluzione",
                "Avvisi e riepiloghi settimanali",
              ],
              [
                "Risoluzione al primo contatto",
                "Ticket risolti con una sola risposta dell'operatore",
                "Capire cosa si potrebbe automatizzare o documentare",
              ],
              [
                "Soddisfazione dei clienti (CSAT)",
                "Risposte ai sondaggi dopo la risoluzione di un ticket",
                "Andamenti settimanali o mensili",
              ],
              [
                "Tasso di passaggio dal bot all'operatore",
                "Quota di conversazioni del bot passate a una persona, se usi un bot",
                "Messa a punto del bot e dei suoi contenuti",
              ],
            ],
          },
          {
            type: "p",
            text: "Le definizioni contano più della dashboard. Decidi se riporti mediane o medie, ore lavorative od ore di calendario, e quali ticket contano (uniti, spam, gestiti solo dal bot). Metti per iscritto le definizioni e mantienile stabili, altrimenti i confronti settimana su settimana smettono di avere senso.",
          },
        ],
      },
      {
        heading: "I report pianificati che il tuo helpdesk offre già",
        blocks: [
          {
            type: "table",
            caption: "Opzioni native di report pianificati",
            head: ["Strumento", "Come funziona la pianificazione", "Cosa ricevono i destinatari", "Limiti da conoscere"],
            rows: [
              [
                "Zendesk Explore",
                "Su una dashboard condivisa, Share > Schedule delivery; imposti orario, ricorrenza e una data di fine fino a 12 mesi in avanti",
                "Un'email con l'esportazione della dashboard; i formati includono Excel (un file per scheda) e PNG",
                "Le esportazioni oltre 25 MB arrivano suddivise in più email; l'invio può avvenire in ritardo rispetto all'orario pianificato",
              ],
              [
                "Freshdesk Analytics",
                "Pianifichi un report personalizzato; se vuoi pianificare un report predefinito, prima lo cloni",
                "Il report in PDF, oppure singoli widget in PDF o CSV",
                "I widget dei report predefiniti non si possono pianificare",
              ],
              [
                "Sottoscrizioni ai filtri di Jira",
                "Iscrivi un utente o un gruppo a un filtro salvato, con una pianificazione predefinita o un'espressione cron",
                "Un'email con l'elenco dei work item che corrispondono al filtro",
                "Vengono inviati solo i primi 200 risultati; i risultati sono calcolati per ciascun destinatario",
              ],
              [
                "Automazione di Jira",
                "Una regola pianificata cerca i work item con JQL e invia l'elenco",
                "Un'email o un messaggio Slack",
                "L'invio su Slack richiede un incoming webhook di Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Due dettagli di Zendesk traggono spesso in inganno: i destinatari vengono raggruppati per lingua e fuso orario, con un'email inviata a ciascun gruppo, e se una dashboard deve coprire l'intera giornata precedente, Zendesk consiglia di pianificarla per le 2:00 o più tardi.",
          },
          {
            type: "p",
            text: "La pianificazione nativa è il primo passo giusto. Non basta più quando ti servono in un unico posto dati da più strumenti, un breve riepilogo invece di una dashboard completa, calcoli personalizzati o l'invio su Slack da uno strumento che non lo prevede.",
          },
        ],
      },
      {
        heading: "Estrarre i dati tramite API verso Sheets, Slack o email",
        blocks: [
          {
            type: "p",
            text: "Quando i report integrati non bastano, una piccola pipeline fa il lavoro. I passaggi sono gli stessi sia che usi uno script sia uno strumento di automazione come Make o n8n:",
          },
          {
            type: "ol",
            items: [
              "Pianificazione. Un trigger a tempo esegue il workflow ogni giorno, ogni settimana o con l'intervallo che ti serve.",
              "Estrazione. Il workflow chiama l'API dell'helpdesk per ottenere i ticket modificati dall'ultima esecuzione. L'Incremental Exports API di Zendesk è pensata proprio per questo: restituisce i ticket aggiornati a partire da un orario di inizio indicato, e Zendesk consiglia la sua versione basata su cursore per prestazioni più costanti.",
              "Calcolo. Calcola le metriche secondo le definizioni che hai messo per iscritto e confrontale con il periodo precedente o con i tuoi obiettivi.",
              "Archiviazione. Aggiungi una riga al giorno o alla settimana in Google Sheets. Il metodo spreadsheets.values.append della Sheets API individua la tabella nell'intervallo che passi e aggiunge le nuove righe dopo l'ultima, così ottieni uno storico progressivo da rappresentare in grafico.",
              "Invio. Pubblica un breve riepilogo su Slack tramite un incoming webhook (un URL univoco che accetta un payload JSON con il testo del messaggio e blocchi Block Kit facoltativi) oppure invialo via email con un link al foglio o alla dashboard completi.",
            ],
          },
          {
            type: "note",
            text: "Tratta i token API e gli URL dei webhook come segreti. Conservali nell'archivio delle credenziali del tuo strumento di automazione, non nel foglio o nel modello del messaggio.",
          },
        ],
      },
      {
        heading: "Report che le persone leggono davvero",
        blocks: [
          {
            type: "ul",
            items: [
              "Apri con pochi numeri e la variazione rispetto al periodo precedente; inserisci un link ai dettagli invece di allegarli.",
              "Separa gli avvisi dai report. Un riepilogo settimanale serve per gli andamenti; un rischio SLA merita un messaggio a sé quando si presenta. La documentazione di Atlassian, per esempio, mostra una regola di automazione di Jira pianificata che pubblica su Slack i work item che stanno per violare il proprio SLA.",
              "Invia a ogni pubblico ciò su cui deve agire: agli operatori serve la coda di oggi, ai manager gli andamenti settimanali.",
              "Assegna a ogni metrica un responsabile in grado di spiegarne le variazioni insolite.",
              "Rivedi il report dopo un mese ed elimina tutto ciò che nessuno ha usato.",
            ],
          },
          {
            type: "p",
            text: "Un riepilogo settimanale per il canale del team può essere di appena cinque righe, ciascuna delle quali confronta questa settimana con la precedente:",
          },
          {
            type: "ol",
            items: [
              "Ticket creati, risolti e ancora aperti, con la variazione dell'arretrato.",
              "Tempo mediano di prima risposta rispetto al tuo obiettivo.",
              "Tempo mediano di risoluzione completa, più il numero di ticket riaperti.",
              "Rispetto degli SLA, con i link ai ticket che li hanno violati.",
              "CSAT della settimana e un commento significativo, se i tuoi sondaggi li raccolgono.",
            ],
          },
        ],
      },
      {
        heading: "Come TascaLab configura i report automatici",
        blocks: [
          {
            type: "p",
            text: "Il servizio Automated Reports di TascaLab (500–900 USD una tantum) invia le tue metriche di assistenza via email o su Slack secondo una pianificazione. Lavora sopra Zendesk, Freshdesk, Jira e i tuoi strumenti interni tramite le loro API e Make o n8n, quindi non cambia nulla nel lavoro quotidiano del tuo team.",
          },
          {
            type: "p",
            text: "La maggior parte delle configurazioni richiede 1–3 settimane. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e puoi partire da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Zendesk può inviare report via email in automatico?",
        a: "Sì. In Zendesk Explore puoi pianificare l'invio di una dashboard condivisa, scegliere ricorrenza e destinatari e impostare la pianificazione per una durata massima di 12 mesi.",
      },
      {
        q: "Posso pianificare i report in Freshdesk?",
        a: "Sì, per i report personalizzati in Freshdesk Analytics; i report predefiniti vanno clonati prima di poterli pianificare. I report vengono inviati in PDF, mentre i widget possono essere inviati in PDF o CSV.",
      },
      {
        q: "Come invio dati di Jira Service Management su Slack a cadenza fissa?",
        a: "Usa una regola di automazione di Jira con un trigger pianificato, una ricerca dei work item tramite JQL e un'azione Send Slack message che pubblica tramite un incoming webhook di Slack.",
      },
      {
        q: "Quali metriche vanno in un report settimanale dell'assistenza?",
        a: "Di solito volume di ticket e arretrato, tempo di prima risposta, tempo di risoluzione, rispetto degli SLA e soddisfazione dei clienti. Mantieni fisse le definizioni, così l'andamento settimana su settimana ha un significato.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Scheduling dashboard deliveries",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843602714-Scheduling-dashboard-deliveries",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Developer Docs — Incremental Exports",
        url: "https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/",
      },
      {
        label: "Freshdesk Support — Scheduling reports in Analytics",
        url: "https://support.freshdesk.com/support/solutions/articles/240703-scheduling-reports-in-analytics",
      },
      {
        label: "Atlassian Support — Manage filters (filter subscriptions)",
        url: "https://support.atlassian.com/jira-software-cloud/docs/manage-filters/",
      },
      {
        label: "Atlassian Support — Automation rule that sends a list of issues about to breach via Slack",
        url: "https://support.atlassian.com/automation/kb/automation-rule-to-send-list-of-issues-that-are-about-to-breach-via-slack/",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Google for Developers — Sheets API: spreadsheets.values.append",
        url: "https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append",
      },
    ],
    related: ["customer-support-metrics", "slack-support-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Customer support email automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "customer-support-email-automation",
    slug: "automazione-email-assistenza-clienti",
    category: "services",
    navLabel: "Automazione email di supporto",
    primaryKeyword: "automazione email assistenza clienti",
    title: "Automazione email assistenza clienti: guida | TascaLab",
    description:
      "Automazione delle email di assistenza: inoltra l'indirizzo di supporto a Zendesk o Freshdesk, configura SPF e DKIM, poi conferma, smista e inoltra le email.",
    h1: "Automazione delle email di assistenza clienti: dalla casella al ticket con risposta",
    intro:
      "L'automazione delle email di assistenza clienti trasforma ogni messaggio inviato al tuo indirizzo di supporto in un ticket, ne conferma la ricezione, lo indirizza al team giusto e, dove è sicuro farlo, risponde, mentre le persone si occupano delle conversazioni che richiedono giudizio. Non ti serve una nuova casella: inoltra il tuo indirizzo attuale a Zendesk o Freshdesk, configura il dominio di invio perché le risposte vengano recapitate, poi aggiungi trigger, classificazione e AI.",
    keyFacts: [
      "Ogni account Zendesk ha un indirizzo di supporto di sistema nel formato support@yoursubdomain.zendesk.com.",
      "Zendesk consiglia l'inoltro automatico a livello di server di posta invece dell'inoltro da un client email.",
      "Freshdesk converte in ticket le email inoltrate solo dopo che la regola di inoltro è attiva; si possono anche collegare direttamente caselle Gmail e Microsoft 365.",
      "In Zendesk, attivare la firma DKIM prima che i record CNAME siano nel DNS causa errori di recapito.",
      "Le risposte automatiche via email con articoli di Zendesk, funzione legacy, non saranno più disponibili dal 10 dicembre 2026.",
    ],
    sections: [
      {
        heading: "Passo 1: trasforma ogni email di supporto in un ticket",
        blocks: [
          {
            type: "p",
            text: "I clienti continuano a scrivere all'indirizzo che già conoscono, come support@tuaazienda.com. Dietro le quinte, quella casella inoltra tutto al tuo helpdesk, che crea o aggiorna un ticket per ogni messaggio. Per il cliente non cambia nulla, e il tuo team smette di lavorare da una casella condivisa.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Ogni account ha un indirizzo di supporto di sistema, support@yoursubdomain.zendesk.com. Aggiungi il tuo indirizzo come indirizzo di supporto, configuri l'inoltro nel tuo provider email e poi lo verifichi. Zendesk consiglia l'inoltro automatico a livello di server, non l'inoltro manuale né l'inoltro automatico da un client email, e precisa che, dopo aver corretto una configurazione non riuscita, possono servire fino a 48 ore perché venga riconosciuta.",
              "Freshdesk. Aggiungi l'indirizzo in Admin > Channels > Email > New Support Email. Con il server di posta predefinito di Freshworks, crei nella tua casella una regola di inoltro che invia la posta all'indirizzo generato da Freshdesk; le email diventano ticket solo dopo che quella regola esiste. In alternativa, collega direttamente una casella Gmail o Microsoft 365 effettuando l'accesso.",
            ],
          },
          {
            type: "p",
            text: "Usa un indirizzo per ogni scopo, per esempio support@, billing@ e partners@, invece di un unico indirizzo generico. Ogni indirizzo diventerà poi un segnale di smistamento gratuito.",
          },
          {
            type: "note",
            text: "Fai una prova con un messaggio da un indirizzo esterno. Zendesk sospende le email che arrivano da uno dei tuoi indirizzi di supporto, perché questo schema può causare loop di posta.",
          },
        ],
      },
      {
        heading: "Passo 2: assicurati che le tue risposte vengano recapitate",
        blocks: [
          {
            type: "p",
            text: "Quando l'helpdesk risponde come support@tuaazienda.com, invia per conto del tuo dominio, e i server di posta riceventi verificano che sia autorizzato a farlo. Lo dimostri con i record DNS: SPF elenca i servizi autorizzati a inviare per il tuo dominio e DKIM aggiunge una firma a ogni messaggio. È un'attività una tantum per chi gestisce il tuo DNS.",
          },
          {
            type: "table",
            caption: "Configurazione del dominio di invio in Zendesk e Freshdesk",
            head: ["Helpdesk", "Record", "Cosa fare", "Attenzione a"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "Aggiungi include:mail.zendesk.com al record SPF TXT del tuo dominio",
                "Un dominio può avere un solo record SPF; se altri servizi inviano per tuo conto, combinali in quell'unico record",
              ],
              [
                "Zendesk",
                "DKIM",
                "Aggiungi i record CNAME indicati nella guida DKIM di Zendesk per ogni dominio esterno, poi attiva le firme digitali in Admin Center",
                "Attivare le firme prima che i record CNAME esistano causa errori di recapito",
              ],
              [
                "Freshdesk",
                "DKIM",
                "In Admin > Channels > Email > Advanced Settings > Configure DKIM, pubblica i quattro record CNAME generati, poi fai clic su Verify",
                "Alcuni provider DNS, come GoDaddy, aggiungono automaticamente il tuo dominio, quindi inserisci solo il prefisso dell'host",
              ],
            ],
          },
          {
            type: "p",
            text: "L'ordine conta: prima i record, poi l'attivazione. Se il tuo DNS è gestito da un altro team o da un'agenzia, invia loro i valori esatti presi dalla documentazione o dalla schermata di amministrazione del tuo helpdesk invece di ridigitarli.",
          },
        ],
      },
      {
        heading: "Passo 3: conferma, classifica e smista all'arrivo",
        blocks: [
          {
            type: "p",
            text: "Una volta che la posta arriva, le prime automazioni partono nel momento in cui viene creato un ticket. In Zendesk, l'email di conferma proviene da un trigger predefinito, “Notify requester and CCs of received request”. Modificane il testo perché dica al cliente qualcosa di utile:",
          },
          {
            type: "ul",
            items: [
              "Il riferimento del ticket, così il cliente può citarlo.",
              "Quando aspettarsi una risposta, solo se riesci a rispettarlo.",
              "Link ad articoli dell'help center per le domande più comuni.",
              "Cosa includere per ricevere aiuto più in fretta, come un numero d'ordine o l'email dell'account.",
            ],
          },
          {
            type: "p",
            text: "Poi lo smistamento. Il segnale più semplice è l'indirizzo a cui è stata inviata l'email. Il workflow documentato da Zendesk è un trigger con le condizioni Ticket Is Created e Ticket Received at Is il tuo indirizzo di fatturazione, più un'azione che imposta il gruppo, abbinato a una vista che mostra a quel gruppo i suoi ticket.",
          },
          {
            type: "p",
            text: "Poi viene lo smistamento basato sul contenuto. Le regole per parole chiave sull'oggetto funzionano per un po', poi si rompono quando i clienti formulano le cose in modo diverso. Un passaggio di classificazione (un modello AI o un insieme di regole eseguite tramite l'API dell'helpdesk) legge oggetto e corpo del messaggio, scrive categoria, lingua e urgenza nei campi del ticket ed estrae dati come i numeri d'ordine, così gli operatori non devono cercarli. I tuoi trigger o le tue regole di automazione smistano poi in base a quei campi.",
          },
          {
            type: "note",
            text: "Le risposte automatiche possono rimbalzare tra sistemi. Zendesk sospende i messaggi in arrivo con header da risponditore automatico come Auto-Submitted, Precedence o X-Autoresponder e, quando un mittente invia un gran numero di email in poco tempo, le sospende e blocca l'indirizzo per un'ora. Controlla regolarmente i ticket sospesi, così il messaggio di un cliente reale non resta lì.",
          },
        ],
      },
      {
        heading: "Passo 4: rispondi a quelle semplici, lascia il resto alle persone",
        blocks: [
          {
            type: "p",
            text: "Molte email di supporto pongono sempre le stesse poche domande. Zendesk ha gestito a lungo questo caso con le risposte automatiche con articoli: un'email che consiglia fino a tre articoli dell'help center e permette al cliente di chiudere la richiesta. Questa funzione è diventata legacy il 31 luglio 2025 e non sarà più disponibile dal 10 dicembre 2026. Il sostituto indicato da Zendesk sono gli AI agent, che forniscono risposte di AI generativa sui canali di messaggistica, email e modulo web. Se usi ancora le risposte automatiche, pianifica il passaggio adesso.",
          },
          {
            type: "p",
            text: "Qualsiasi risposta AI vale quanto gli articoli da cui attinge, quindi sistema la knowledge base prima di attivare le risposte automatiche. Poi decidi dove si ferma l'automazione. Passa la conversazione a una persona quando:",
          },
          {
            type: "ul",
            items: [
              "Il cliente chiede di parlare con una persona, o risponde che la risposta non è stata utile.",
              "L'argomento è fatturazione, rimborsi, questioni legali, sicurezza o un reclamo.",
              "Il tono è arrabbiato, o lo scambio è andato avanti e indietro diverse volte.",
              "Ci sono diverse persone in CC, o l'email fa parte di una conversazione in corso sull'account.",
              "Rispondere significherebbe modificare un account che l'automazione non può verificare.",
            ],
          },
          {
            type: "p",
            text: "Rendi visibile il passaggio: tagga il ticket, alzane la priorità se serve e tieni tutto in un unico ticket, così l'operatore vede cosa ha già ricevuto il cliente.",
          },
        ],
      },
      {
        heading: "Come TascaLab automatizza le email di supporto",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura tutto questo sopra l'helpdesk che usi già, che sia Zendesk, Freshdesk o Jira, con trigger e regole nativi dove bastano e API, webhook o Make/n8n dove non bastano. Non serve cambiare piattaforma. La classificazione e lo smistamento delle email in arrivo rientrano nel servizio Ticket Routing & Categorization (600–950 USD una tantum); i workflow in più passaggi, come leggere un numero d'ordine da un'email e cercarlo in un altro sistema, rientrano in Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "La maggior parte delle configurazioni richiede 1–3 settimane. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e una call di audit gratuita di 30 minuti è un buon punto di partenza per mappare il tuo flusso email attuale.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso mantenere il mio indirizzo email di supporto?",
        a: "Sì. In Zendesk lo aggiungi come indirizzo di supporto e ne inoltri la posta a Zendesk, preferibilmente con l'inoltro automatico a livello di server. In Freshdesk lo inoltri all'indirizzo generato da Freshdesk, oppure colleghi direttamente una casella Gmail o Microsoft 365.",
      },
      {
        q: "Servono SPF e DKIM per le email dell'helpdesk?",
        a: "Se l'helpdesk invia le risposte dal tuo dominio, configurali entrambi. Zendesk ti chiede di aggiungere include:mail.zendesk.com al tuo record SPF e di aggiungere i suoi record CNAME prima di attivare la firma DKIM. Freshdesk genera quattro record CNAME DKIM da pubblicare e verificare.",
      },
      {
        q: "Perché l'email di un cliente non è diventata un ticket in Zendesk?",
        a: "Controlla i ticket sospesi. Zendesk sospende i messaggi che identifica come risposte automatiche, i messaggi inviati da uno dei tuoi indirizzi di supporto e le raffiche di email da un singolo mittente.",
      },
      {
        q: "Le risposte automatiche con articoli di Zendesk sono ancora disponibili?",
        a: "Sono una funzione legacy dal 31 luglio 2025 e non saranno più disponibili dal 10 dicembre 2026. Zendesk indirizza i clienti verso gli AI agent, che possono rispondere via email oltre che su messaggistica e moduli web.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Forwarding incoming email from your existing email address to Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408886828698-Forwarding-incoming-email-from-your-existing-email-address-to-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Allowing Zendesk to send email on behalf of your email domain",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832543770-Allowing-Zendesk-to-send-email-on-behalf-of-your-email-domain",
      },
      {
        label: "Zendesk Help Center — Digitally signing your email with DKIM",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822303386-Digitally-signing-your-email-with-DKIM",
      },
      {
        label: "Zendesk Help Center — Causes for ticket suspension",
        url: "https://support.zendesk.com/hc/en-us/articles/4408828416282-Causes-for-ticket-suspension",
      },
      {
        label: "Zendesk Help Center — Workflow: Route tickets to groups based on support address",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823834394-Workflow-Route-tickets-to-groups-based-on-support-address",
      },
      {
        label: "Zendesk Help Center — Configuring email autoreplies to recommend articles",
        url: "https://support.zendesk.com/hc/en-us/articles/4408825385242-Configuring-email-autoreplies-to-recommend-articles",
      },
      {
        label: "Freshdesk Support — Converting support emails into tickets",
        url: "https://support.freshdesk.com/support/solutions/articles/37541-set-up-your-support-email",
      },
      {
        label: "Freshdesk Support — Email domain verification using DKIM records",
        url: "https://support.freshdesk.com/support/solutions/articles/223779-configuring-dkim-records",
      },
    ],
    related: ["ticket-routing-automation", "ai-knowledge-base-for-customer-support", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. AI knowledge base for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-knowledge-base-for-customer-support",
    slug: "knowledge-base-ai-assistenza-clienti",
    category: "services",
    navLabel: "Knowledge base AI per il supporto",
    primaryKeyword: "knowledge base AI per assistenza clienti",
    title: "Knowledge base AI per l'assistenza clienti: guida | TascaLab",
    description:
      "Come funziona una knowledge base AI per l'assistenza, come strutturare gli articoli in Zendesk, Freshdesk o Confluence, aggiornarli e misurare la deflection.",
    h1: "Knowledge base AI per l'assistenza clienti: come funziona e come costruirla",
    intro:
      "Una knowledge base AI per l'assistenza clienti è un help center scritto in modo che sia i clienti sia gli AI agent possano trovarvi le risposte. L'AI cerca gli articoli pertinenti e costruisce la risposta a partire da essi, quindi le sue risposte sono accurate, complete e aggiornate solo quanto i tuoi articoli. Puoi costruirla nello strumento che hai già: l'help center di Zendesk, la knowledge base di Freshdesk o gli spazi Confluence collegati a Jira Service Management.",
    keyFacts: [
      "La retrieval-augmented generation trova i passaggi pertinenti nei tuoi documenti e li aggiunge al prompt, così il modello risponde a partire dai tuoi contenuti.",
      "In un help center Zendesk, gli articoli stanno nelle sezioni all'interno delle categorie; non possono stare direttamente in una categoria.",
      "Freshdesk organizza la sua knowledge base in categorie, cartelle e articoli.",
      "Gli spazi Confluence collegati a una knowledge base di Jira Service Management alimentano il suo help center, la ricerca nella knowledge base e il virtual service agent.",
      "Jira Service Management conta una richiesta come deviata quando un cliente, durante l'invio, sceglie un articolo suggerito e lo segna come utile.",
    ],
    sections: [
      {
        heading: "Come le risposte dell'AI attingono ai tuoi articoli",
        blocks: [
          {
            type: "p",
            text: "La maggior parte degli AI agent per l'assistenza usa una qualche forma di retrieval-augmented generation (RAG). AWS descrive la RAG come una tecnica che arricchisce un large language model con dati esterni, come i documenti interni di un'azienda. A grandi linee:",
          },
          {
            type: "ol",
            items: [
              "I tuoi documenti vengono convertiti in embedding, cioè rappresentazioni numeriche del testo, e salvati in un database vettoriale. È un passaggio di configurazione una tantum.",
              "Un cliente fa una domanda in linguaggio naturale.",
              "Il sistema esegue una ricerca per similarità nel database vettoriale e aggiunge al prompt, come contesto, i passaggi che trova.",
              "Il modello linguistico scrive la risposta usando quel contesto.",
            ],
          },
          {
            type: "p",
            text: "Ne derivano due conseguenze. L'AI non può rispondere a partire da ciò che non è scritto, e lavora con frammenti di articoli anziché con l'intero help center. Le indicazioni di Freshdesk sottolineano lo stesso punto: Freddy AI recupera e usa gli articoli in modo indipendente, quindi se un articolo omette definizioni o contesto, l'AI può fare supposizioni o dare risposte parziali.",
          },
          {
            type: "p",
            text: "I principali helpdesk lo integrano. Gli AI agent di Zendesk possono usare risposte generative su messaggistica ed email, collegati a più fonti di conoscenza, con regole di ricerca che stabiliscono in quali fonti cercare in condizioni specifiche. In Jira Service Management, gli articoli di uno spazio Confluence collegato compaiono nell'help center, nella ricerca della knowledge base e nel virtual service agent.",
          },
        ],
      },
      {
        heading: "Dove si trova la knowledge base nel tuo helpdesk",
        blocks: [
          {
            type: "table",
            caption: "Struttura della knowledge base per helpdesk",
            head: ["Helpdesk", "Dove stanno gli articoli", "Come sono organizzati", "Chi li utilizza"],
            rows: [
              [
                "Zendesk",
                "Help center",
                "Le categorie contengono sezioni e le sezioni contengono articoli; le sezioni si possono annidare, ma gli articoli non possono stare direttamente in una categoria",
                "I clienti che navigano e cercano, e gli AI agent con risposte generative",
              ],
              [
                "Freshdesk",
                "Knowledge base (solution articles)",
                "Le categorie contengono cartelle e le cartelle contengono articoli; le cartelle si possono annidare",
                "I clienti sul portale e Freddy AI",
              ],
              [
                "Jira Service Management",
                "Spazi Confluence collegati alla knowledge base del service project",
                "Pagine nello spazio Confluence collegato",
                "L'help center, la ricerca nella knowledge base e il virtual service agent",
              ],
            ],
          },
          {
            type: "p",
            text: "Un dettaglio pratico: in Freshdesk, una categoria o una cartella compare sul portale clienti solo dopo che almeno un articolo al suo interno è stato pubblicato. Per le risposte dell'AI conta più ciò che dice ogni articolo che la sua posizione; la gerarchia aiuta soprattutto le persone che navigano.",
          },
        ],
      },
      {
        heading: "Scrivi articoli da cui un'AI possa rispondere",
        blocks: [
          {
            type: "p",
            text: "Freshdesk pubblica indicazioni su come scrivere contenuti di conoscenza per Freddy AI, e valgono per qualsiasi AI basata sul recupero di informazioni:",
          },
          {
            type: "ul",
            items: [
              "Limita ogni articolo a un solo argomento e indica quando l'informazione si applica e quando no.",
              "Inserisci link ad articoli correlati invece di includere workflow secondari.",
              "Separa configurazione, utilizzo e risoluzione dei problemi in articoli distinti quando servono a obiettivi diversi.",
              "Rendi ogni articolo autosufficiente: definisci i termini e il contesto su cui si basa.",
              "Usa un unico titolo di primo livello per lo scopo dell'articolo e titoli di livello inferiore per separare attività, opzioni o concetti.",
            ],
          },
          {
            type: "p",
            text: "Aggiungi qualche abitudine tua. Dai agli articoli titoli con le parole che usano davvero i clienti, non i nomi interni dei prodotti. Metti la risposta nelle prime righe, poi i passaggi. Tieni i valori esatti (limiti, scadenze, prezzi) in un unico posto e rimanda lì con un link, così una modifica non lascia all'AI due numeri diversi tra cui scegliere. E parti da dove ci sono i ticket: qualche settimana di ticket raggruppati per argomento mostra quali articoli scrivere o correggere per primi.",
          },
        ],
      },
      {
        heading: "Mantieni i contenuti aggiornati",
        blocks: [
          {
            type: "p",
            text: "Un articolo obsoleto si trasforma in una risposta dell'AI sicura di sé ma sbagliata, quindi assegna a ogni articolo un responsabile e una cadenza di revisione. Zendesk lo supporta con la verifica degli articoli: gli amministratori della knowledge base impostano regole di verifica che segnalano gli articoli da rivedere in base a filtri e intervalli (per esempio ogni tre mesi per gli articoli con una certa etichetta, in una certa categoria o non aggiornati da tempo) e i responsabili degli articoli ricevono promemoria via email per verificarli. Controlla se il tuo piano la include prima di farci affidamento.",
          },
          {
            type: "p",
            text: "Le revisioni pianificate intercettano il lento scivolamento verso l'obsolescenza. Questi eventi dovrebbero invece far scattare subito un aggiornamento:",
          },
          {
            type: "ul",
            items: [
              "Una modifica a prodotto, prezzi o policy: aggiorna gli articoli entro il giorno del rilascio.",
              "Un operatore risponde a un ticket che la knowledge base non copre: crea o segnala un articolo.",
              "L'AI passa una conversazione a una persona perché non è riuscita a rispondere: rivedi quella domanda.",
              "Due articoli danno risposte diverse: uniscili e annulla la pubblicazione del duplicato.",
            ],
          },
        ],
      },
      {
        heading: "Misura il self-service",
        blocks: [
          {
            type: "p",
            text: "Misura se gli articoli evitano i ticket, non solo se le persone li leggono. Mantieni le stesse definizioni ogni mese, così l'andamento ha un significato.",
          },
          {
            type: "table",
            caption: "Misure del self-service da monitorare",
            head: ["Misura", "Cosa ti dice", "Come ottenerla"],
            rows: [
              [
                "Richieste deviate",
                "I clienti che hanno trovato una risposta mentre inviavano una richiesta",
                "Jira Service Management conta una richiesta come deviata quando il cliente, durante l'invio, seleziona un articolo suggerito e lo segna come utile",
              ],
              [
                "Richieste risolte con un articolo",
                "Quanto spesso gli operatori chiudono le richieste usando contenuti della knowledge base",
                "Il report Requests resolved di Jira Service Management traccia le richieste chiuse con o senza un articolo della knowledge base",
              ],
              [
                "Rapporto di self-service",
                "Uso dell'help center per ticket",
                "Dividi le sessioni dell'help center per i ticket creati nello stesso periodo e osserva l'andamento",
              ],
              [
                "Tasso di passaggio dall'AI all'operatore",
                "Quota di conversazioni dell'AI passate a una persona",
                "Le analytics del tuo AI agent, oppure un tag aggiunto a ogni passaggio",
              ],
              [
                "Ticket su argomenti documentati",
                "Se gli articoli esistenti evitano davvero i ticket",
                "Prendi ogni mese un campione di ticket e verifica se un articolo copriva già la domanda",
              ],
            ],
          },
        ],
      },
      {
        heading: "Come TascaLab mette al lavoro la tua knowledge base",
        blocks: [
          {
            type: "p",
            text: "TascaLab sviluppa chatbot sopra gli strumenti che usi già (Zendesk, Freshdesk, Jira, Slack o sistemi interni) tramite API, webhook e Make o n8n, quindi la tua knowledge base resta dov'è. Lo Starter Chat Bot (350–450 USD una tantum) copre 1–2 canali e lo Standard Chat Bot (500–650 USD) ne copre 3–5, tra sito web, telefono, WhatsApp, Telegram, Facebook Messenger e Instagram. I workflow di manutenzione, come i promemoria di revisione per gli articoli obsoleti, rientrano in Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "La maggior parte delle configurazioni richiede 1–3 settimane. Ogni progetto include 30 giorni di supporto dopo il lancio e una documentazione di base, senza costi nascosti, e puoi partire da una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Che cos'è la retrieval-augmented generation nell'assistenza clienti?",
        a: "È un modo per far rispondere un'AI a partire dai tuoi contenuti. I passaggi pertinenti vengono recuperati dai tuoi documenti, di solito con una ricerca per similarità in un database vettoriale, e aggiunti al prompt, così il modello linguistico scrive la risposta a partire da quel contesto.",
      },
      {
        q: "Jira Service Management può usare Confluence come knowledge base?",
        a: "Sì. Colleghi uno spazio Confluence alla knowledge base del service project, e i suoi articoli compaiono nell'help center, nella ricerca della knowledge base e nel virtual service agent.",
      },
      {
        q: "Come tengo aggiornati gli articoli della knowledge base di Zendesk?",
        a: "Usa la verifica degli articoli, se il tuo piano la include. Le regole di verifica segnalano gli articoli da rivedere in base a filtri e intervalli, e i responsabili degli articoli ricevono promemoria via email per verificarli.",
      },
      {
        q: "Come vanno strutturati gli articoli per le risposte dell'AI?",
        a: "Un argomento per articolo, contenuti autosufficienti, titoli chiari. Freshdesk osserva che Freddy AI recupera gli articoli in modo indipendente, quindi definizioni o contesto mancanti possono portare a supposizioni o risposte parziali.",
      },
    ],
    sources: [
      {
        label: "AWS Prescriptive Guidance — Understanding Retrieval Augmented Generation",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/what-is-rag.html",
      },
      {
        label: "Zendesk Help Center — Organizing knowledge base content in categories and sections",
        url: "https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections",
      },
      {
        label: "Zendesk Help Center — Generative replies in AI agents FAQs",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756420506-Generative-replies-in-AI-agents-FAQs",
      },
      {
        label: "Zendesk Help Center — About article verification and how it works",
        url: "https://support.zendesk.com/hc/en-us/articles/5588297664666-About-article-verification-and-how-it-works",
      },
      {
        label: "Freshdesk Support — Create categories, folders and articles in your knowledge base",
        url: "https://support.freshdesk.com/support/solutions/articles/37611-create-and-organize-knowledge-base",
      },
      {
        label: "Freshdesk Support — Write Freddy AI–optimised knowledge content",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011859-write-freddy-ai-optimised-knowledge-content",
      },
      {
        label: "Atlassian Support — Link a Confluence space to your knowledge base",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/link-confluence-spaces-to-your-service-project/",
      },
      {
        label: "Atlassian Support — Find out how your knowledge base articles are performing",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/how-are-my-knowledge-base-articles-performing/",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "ticket-deflection", "customer-support-email-automation"],
    updated: "2026-10-19",
  },
];
