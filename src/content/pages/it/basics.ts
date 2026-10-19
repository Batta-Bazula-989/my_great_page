import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "cos-e-automazione-assistenza-clienti",
    category: "basics",
    navLabel: "Cos'è l'automazione del supporto",
    primaryKeyword: "cos'è l'automazione dell'assistenza clienti",
    title: "Cos'è l'automazione dell'assistenza clienti? Guida semplice",
    description:
      "Cos'è l'automazione dell'assistenza clienti: bot, routing, macro, risposte automatiche, timer SLA, report, cosa resta umano e come si integra con l'helpdesk.",
    h1: "Cos'è l'automazione dell'assistenza clienti?",
    intro:
      "L'automazione dell'assistenza clienti è l'uso di regole, bot e integrazioni per gestire il lavoro ripetitivo dell'assistenza, come rispondere alle domande frequenti, smistare i ticket, inviare conferme di ricezione e monitorare le scadenze, senza che un agente debba fare ogni passaggio a mano. Gran parte di essa gira all'interno dell'helpdesk che usi già, estesa con API e webhook. Lo scopo è dare ai tuoi agenti più tempo per le conversazioni che richiedono giudizio.",
    keyFacts: [
      "I trigger di Zendesk si attivano subito dopo la creazione o l'aggiornamento di un ticket; le automazioni di Zendesk sono basate sul tempo e girano una volta ogni ora.",
      "Le macro di Zendesk non hanno condizioni: è un agente a decidere quando applicarne una.",
      "Le automazioni di Zendesk, Freshdesk e Jira possono tutte inviare richieste HTTP ad altri sistemi dalle loro regole.",
      "Secondo le indicazioni di Zendesk, le richieste complesse, urgenti o delicate possono richiedere il trasferimento a un agente umano.",
    ],
    sections: [
      {
        heading: "Automazione dell'assistenza clienti: la definizione",
        blocks: [
          {
            type: "p",
            text: "Ogni automazione dell'assistenza ha le stesse tre parti: qualcosa che la avvia (un evento come un nuovo ticket, oppure il tempo trascorso), condizioni che decidono se si applica e azioni che esegue. Gli helpdesk espongono questo modello in modo diretto. Zendesk le chiama regole aziendali: i trigger si attivano subito dopo la creazione o l'aggiornamento di un ticket, mentre le automazioni sono basate sul tempo e girano una volta ogni ora sui ticket non chiusi. Zendesk sottolinea che la differenza tra le due non sta nelle azioni che possono eseguire, ma nelle condizioni che le attivano.",
          },
          {
            type: "p",
            text: "L'automazione si colloca lungo uno spettro. A un estremo lavora prima che una persona veda il ticket: un bot risponde alla domanda, oppure una regola imposta la priorità e assegna un gruppo. All'altro estremo assiste l'agente: una risposta salvata compila una risposta comune, oppure una barra laterale recupera l'ordine del cliente da un altro sistema. Contano entrambe e la maggior parte dei team ha bisogno di entrambe.",
          },
        ],
      },
      {
        heading: "I principali tipi di automazione dell'assistenza",
        blocks: [
          {
            type: "table",
            caption: "Tipi comuni di automazione dell'assistenza clienti",
            head: ["Tipo", "Cosa fa", "Esempio in un helpdesk"],
            rows: [
              [
                "Self-service e bot",
                "Risponde alle domande frequenti in chat, messaggistica o email senza un agente",
                "Gli agenti AI di Zendesk rispondono alle domande usando i contenuti delle tue fonti di conoscenza e possono passare la conversazione a una persona",
              ],
              [
                "Routing e smistamento",
                "Classifica i nuovi ticket e li invia al gruppo o all'agente giusto",
                "I trigger di Zendesk possono aggiungere competenze ai ticket quando vengono creati o aggiornati; il routing omnicanale assegna il lavoro in base alla disponibilità e alla capacità degli agenti",
              ],
              [
                "Macro e risposte predefinite",
                "Applica una risposta salvata e gli aggiornamenti del ticket con un'unica azione",
                "Una macro di Zendesk può aggiungere il testo di un commento, aggiornare campi, aggiungere o rimuovere tag e cambiare l'assegnatario",
              ],
              [
                "Risposte automatiche",
                "Conferma subito la ricezione e chiarisce i tempi",
                "Un trigger basato su eventi che invia al richiedente un'email di conferma quando viene creato un ticket",
              ],
              [
                "Timer SLA ed escalation",
                "Monitora le scadenze di risposta e risoluzione e avvisa prima di una violazione",
                "Una policy SLA più una regola basata sul tempo che avvisa un team lead prima che un obiettivo venga mancato",
              ],
              [
                "Reportistica",
                "Raccoglie le metriche dell'assistenza e le invia secondo una pianificazione",
                "Un riepilogo settimanale di volume dei ticket, tempo di prima risposta e CSAT inviato via email o su Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Le macro sono un caso limite utile. Zendesk fa notare che le macro non hanno condizioni: nulla valuta un ticket per decidere se una macro si applica, quindi è un agente a sceglierla. Questo rende le risposte salvate il punto di partenza meno rischioso, perché ogni volta decide comunque una persona.",
          },
          {
            type: "p",
            text: "Il routing è spesso il punto in cui l'automazione ripaga per prima, perché tocca ogni ticket. Il triage intelligente di Zendesk, per esempio, classifica i nuovi ticket per argomento, sentiment e lingua e può instradarli tramite il routing omnicanale, il routing basato sulle competenze o i trigger. Le configurazioni più semplici usano regole su parole chiave o campi del modulo per impostare gruppo e priorità.",
          },
        ],
      },
      {
        heading: "Cosa deve restare alle persone",
        blocks: [
          {
            type: "p",
            text: "L'automazione è brava nel lavoro ripetibile e ben definito. È scarsa in giudizio, empatia ed eccezioni. Secondo le indicazioni di Zendesk sugli agenti AI, a volte una richiesta deve essere trasferita a un agente umano quando è complessa, urgente o delicata, e Zendesk consiglia di definire questi percorsi di escalation prima del lancio. In pratica, lascia alle persone:",
          },
          {
            type: "ul",
            items: [
              "Reclami, disdette e conversazioni cariche di emotività",
              "Contestazioni di fatturazione, rimborsi fuori policy e altre eccezioni che richiedono qualcuno con l'autorità per decidere",
              "Sicurezza dell'account e verifiche d'identità in cui un errore costa caro",
              "Domande che il bot non riesce a classificare, o a cui non è già riuscito a rispondere",
              "Account di alto valore o a rischio che hai deciso di gestire personalmente",
            ],
          },
          {
            type: "p",
            text: "Qualunque cosa automatizzi, mantieni un modo visibile per raggiungere una persona e trasferisci la cronologia della conversazione, così il cliente non deve ripetersi. La nostra guida al passaggio dal chatbot all'operatore umano spiega come farlo.",
          },
        ],
      },
      {
        heading: "Come l'automazione si integra con il tuo helpdesk",
        blocks: [
          {
            type: "p",
            text: "Raramente devi sostituire il tuo helpdesk per automatizzarlo. Gli helpdesk moderni possono chiamare altri sistemi dalle loro regole e altri sistemi possono aggiornare i ticket tramite l'API dell'helpdesk. È così che si costruiscono le automazioni personalizzate:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: crei un webhook nell'Admin Center, poi lo colleghi a un trigger o a un'automazione con l'azione Notify webhook. Il corpo della richiesta può essere JSON, XML o form-encoded e i segnaposto inseriscono i dati del ticket.",
              "Freshdesk: le regole di automazione che girano alla creazione o all'aggiornamento dei ticket possono usare l'azione Trigger webhook con GET, POST, PUT, PATCH o DELETE e segnaposto come {{ticket.id}}. I webhook non riusciti vengono ritentati ogni 30 minuti, fino a 48 chiamate.",
              "Jira: l'azione di automazione Send web request chiama un altro sistema quando una regola viene eseguita e può attendere la risposta, così i passaggi successivi possono usare i dati restituiti.",
            ],
          },
          {
            type: "p",
            text: "Un tipico flusso personalizzato funziona così:",
          },
          {
            type: "ol",
            items: [
              "Una regola dell'helpdesk si attiva su un ticket nuovo o aggiornato e invia un webhook.",
              "Uno strumento di workflow come Make o n8n, oppure un piccolo servizio, lo riceve e cerca dati altrove: un sistema degli ordini, un CRM o un modello linguistico.",
              "Il workflow riscrive il risultato tramite l'API dell'helpdesk come tag, valore di un campo, nota privata o assegnazione.",
              "Gli agenti vedono il risultato all'interno del ticket e da lì proseguono le regole dell'helpdesk stesso.",
            ],
          },
        ],
      },
      {
        heading: "Da dove iniziare",
        blocks: [
          {
            type: "ol",
            items: [
              "Elenca i tipi di richiesta più frequenti dell'ultimo mese e segna quelli che seguono ogni volta gli stessi passaggi.",
              "Sistema prima il routing e le risposte automatiche. Toccano ogni ticket e sono facili da verificare.",
              "Trasforma le risposte ripetute in macro o risposte predefinite prima di inserirle in un bot.",
              "Aggiungi un bot per le domande più comuni e a basso rischio, con un passaggio chiaro a una persona.",
              "Misura tempo di prima risposta, tempo di risoluzione e CSAT prima e dopo ogni modifica, così sai cosa ha davvero aiutato.",
            ],
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab è uno studio individuale gestito da Roman Zakharenko che realizza automazioni dell'assistenza sugli strumenti che usi già, tra cui Zendesk, Freshdesk, Jira e Slack, con API, webhook e Make o n8n. I prezzi una tantum includono Ticket Routing & Categorization ({{price:routing}}), uno Starter Chat Bot ({{price:starter}}) e Automated Reports ({{price:reports}}). La maggior parte delle configurazioni richiede 1–3 settimane e include documentazione di base, 30 giorni di supporto dopo il lancio e nessun costo nascosto. Puoi iniziare con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'automazione dell'assistenza clienti è la stessa cosa di un chatbot?",
        a: "No. Il chatbot è solo un tipo. Anche le regole di routing, le macro, le risposte automatiche, i timer SLA e i report pianificati sono automazione dell'assistenza, e molti team iniziano da questi perché si applicano a ogni ticket.",
      },
      {
        q: "Qual è la differenza tra un trigger e un'automazione in Zendesk?",
        a: "I trigger sono basati sugli eventi e si attivano subito dopo la creazione o l'aggiornamento di un ticket. Le automazioni sono basate sul tempo e girano una volta ogni ora, quindi sono adatte ad azioni come un promemoria dopo un certo numero di ore.",
      },
      {
        q: "Devo cambiare helpdesk per automatizzare l'assistenza?",
        a: "Di solito no. Le automazioni di Zendesk, Freshdesk e Jira possono tutte inviare richieste HTTP in uscita dalle loro regole, quindi puoi collegare altri sistemi all'helpdesk che usi già.",
      },
      {
        q: "Cosa non andrebbe automatizzato nell'assistenza clienti?",
        a: "Le conversazioni complesse, urgenti o delicate, che secondo le indicazioni di Zendesk possono richiedere un agente umano, oltre alle contestazioni e alle eccezioni alla policy che richiedono qualcuno con l'autorità per decidere.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "passaggio-chatbot-operatore-umano",
    category: "basics",
    navLabel: "Passaggio da chatbot a operatore",
    primaryKeyword: "passaggio da chatbot a operatore umano",
    title: "Passaggio da chatbot a operatore: trigger, contesto, setup",
    description:
      "Passaggio da chatbot a operatore: quando fare escalation, che contesto passare, gestione fuori orario e come lo fanno Zendesk, Freshdesk e Messenger.",
    h1: "Passaggio da chatbot a operatore umano: come fare escalation senza perdere il cliente",
    intro:
      "Il passaggio da chatbot a operatore umano è il momento in cui un bot smette di gestire una conversazione e la trasferisce, con la cronologia e tutti i dettagli raccolti, a un agente o a una coda. Un buon passaggio scatta al momento giusto, porta con sé il contesto così il cliente non deve ripetersi e funziona anche quando non c'è nessuno online. Questa guida spiega i trigger, il contesto da passare e come lo implementano Zendesk, Freshdesk e Messenger.",
    keyFacts: [
      "Secondo Zendesk, un agente AI può dover trasferire una richiesta a una persona quando è complessa, urgente o delicata.",
      "Gli AI Agents di Freshdesk possono trasferire automaticamente la conversazione quando un cliente usa frasi trigger che definisci tu, come chiedere un operatore.",
      "In Dialogflow CX, se nessun intent raggiunge la soglia di classificazione, invece di una corrispondenza si attiva un evento no-match.",
      "Su Messenger, l'handover protocol decide quale app possiede un thread di conversazione; per Instagram Meta è passata a Conversation Routing.",
    ],
    sections: [
      {
        heading: "Cos'è il passaggio da chatbot a operatore",
        blocks: [
          {
            type: "p",
            text: "Un passaggio di consegne, chiamato anche escalation o trasferimento, sposta la titolarità di una conversazione dall'automazione a una persona. A seconda del canale, il risultato è una chat dal vivo assegnata a un agente, una conversazione in attesa in coda oppure un ticket che un agente prende in carico più tardi. Negli agenti AI di Zendesk lo costruisci con i blocchi di escalation nel dialogue builder, che definiscono come una richiesta passa a una persona quando l'agente AI non riesce a risolverla.",
          },
          {
            type: "p",
            text: "I passaggi di consegne hanno due forme. In un passaggio sincrono, il cliente resta nella stessa conversazione dal vivo e un agente si unisce. In un passaggio asincrono, viene creato un ticket perché un agente possa rispondere più tardi, ed è il ripiego abituale quando nessuno è disponibile. Zendesk documenta entrambi, compreso un workflow per le escalation asincrone a ticket che permette ai clienti di lasciare un messaggio quando il tuo team non è disponibile.",
          },
        ],
      },
      {
        heading: "Quando il bot deve passare la conversazione",
        blocks: [
          {
            type: "table",
            caption: "Trigger comuni per il passaggio da chatbot a operatore",
            head: ["Trigger", "Come si presenta", "Come si rileva"],
            rows: [
              [
                "Il cliente chiede una persona",
                "Operatore, parlare con una persona, così non mi aiuta",
                "Gli AI Agents di Freshdesk trasferiscono automaticamente con le frasi trigger che elenchi, come la richiesta di parlare con un operatore",
              ],
              [
                "Bassa confidenza o nessuna corrispondenza",
                "Il bot non capisce cosa vuole il cliente",
                "Dialogflow CX attiva un evento no-match quando nessun intent raggiunge la soglia di classificazione; usa quel fallback per offrire una persona",
              ],
              [
                "Argomento delicato o urgente",
                "Reclami, pagamenti non riusciti, sicurezza, questioni legali o di incolumità",
                "Zendesk indica le richieste complesse, urgenti o delicate come motivi di trasferimento; tra le frasi trigger di esempio di Freshdesk c'è la segnalazione di un pagamento non riuscito",
              ],
              [
                "Fallimenti ripetuti",
                "Il cliente riformula la stessa domanda o il bot gira a vuoto",
                "Conta le risposte di fallback nella sessione e fai escalation dopo un numero stabilito",
              ],
              [
                "Regola di business",
                "Account VIP, ordine di valore elevato, incidente aperto",
                "Recupera i dati del cliente tramite un'API prima che il bot risponda e indirizza quei clienti direttamente a una persona",
              ],
            ],
          },
          {
            type: "p",
            text: "La confidenza è il trigger che i team lasciano più spesso implicito. In Dialogflow CX, l'intent con il punteggio più alto viene restituito come corrispondenza solo se il suo punteggio di confidenza è maggiore o uguale alla soglia di classificazione; altrimenti viene invocato un evento no-match. Trattalo come un segnale: fai una domanda di chiarimento e passa la conversazione se succede di nuovo.",
          },
          {
            type: "p",
            text: "Zendesk consiglia inoltre di offrire l'escalation solo quando l'agente AI non riesce a guidare il cliente verso le risorse self-service. Così gli agenti restano per i problemi reali, ma non nascondere l'opzione. Un cliente che chiede esplicitamente una persona dovrebbe ottenerla, oppure una risposta chiara su quando l'otterrà.",
          },
        ],
      },
      {
        heading: "Passa il contesto, non solo il cliente",
        blocks: [
          {
            type: "p",
            text: "Un passaggio che perde la conversazione costringe il cliente a ricominciare da capo. Il vecchio passaggio Transfer to agent di Zendesk, per esempio, crea un ticket che include la cronologia della conversazione del cliente, che il cliente non vede, e può aggiungere tag a quel ticket per il routing. Gli AI Agents di Freshdesk possono raccogliere dettagli come un ID cliente, un numero di riferimento o un numero d'ordine prima del trasferimento, quando la raccolta delle proprietà è attivata sia nel comportamento della conversazione sia nelle impostazioni di handover.",
          },
          {
            type: "p",
            text: "Come minimo, l'agente dovrebbe ricevere:",
          },
          {
            type: "ul",
            items: [
              "La trascrizione completa, compreso ciò che il bot ha già suggerito",
              "Il motivo del passaggio: richiesta del cliente, nessuna corrispondenza, argomento delicato o regola di business",
              "I dati identificativi come nome, email o ID account, e se sono stati verificati",
              "I campi strutturati raccolti dal bot, come numero d'ordine o prodotto",
              "Tag o una categoria, così le regole di routing inviano la conversazione al gruppo giusto",
            ],
          },
          {
            type: "p",
            text: "Nello stesso messaggio chiarisci al cliente cosa aspettarsi: digli che una persona sta prendendo in carico la conversazione e più o meno quando riceverà una risposta.",
          },
        ],
      },
      {
        heading: "Come implementano il passaggio Zendesk, Freshdesk e Messenger",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: i blocchi di escalation nel dialogue builder dell'agente AI decidono dove va una conversazione quando l'agente AI non riesce a risolverla, per esempio inoltrandola a un agente. Un blocco di disponibilità può verificare l'orario lavorativo o la disponibilità degli agenti prima che parta l'escalation.",
              "Freshdesk: nelle impostazioni di handover dell'AI Agent attivi Transfer conversation, elenchi le frasi trigger che devono causare un trasferimento automatico e puoi far raccogliere prima i dati del cliente all'AI Agent.",
              "Messenger: quando più app gestiscono i messaggi di una Pagina Facebook, come il tuo bot e una inbox di live chat, l'handover protocol di Meta decide quale app possiede il thread. Il webhook messaging_handovers segnala gli eventi pass thread control, take thread control, request thread control e app role. Un evento pass_thread_control include gli ID dell'app proprietaria precedente e di quella nuova, più una stringa metadata impostata nella richiesta API, che è un posto comodo in cui inserire il motivo del passaggio.",
              "Instagram: il changelog di Meta dice che l'handover protocol non è più supportato per Instagram e che tutte le aziende sono state migrate a Conversation Routing, che ti permette di definire quali partner controllano le conversazioni con i clienti in un determinato momento. Meta descrive Conversation Routing come retrocompatibile con la maggior parte delle API dell'handover protocol.",
            ],
          },
        ],
      },
      {
        heading: "Gestione fuori orario",
        blocks: [
          {
            type: "p",
            text: "Un bot che promette una persona quando non c'è nessuno online è peggio di nessun passaggio. Verifica prima la disponibilità, poi scegli un ripiego:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: un blocco di disponibilità verifica l'orario lavorativo o la disponibilità degli agenti. In un canale sincrono come la messaggistica, Zendesk suggerisce di fare escalation via email quando si è fuori dall'orario di lavoro degli agenti, e il suo workflow di escalation asincrona a ticket permette ai clienti di lasciare un messaggio perché una persona lo riprenda più tardi.",
              "Freshdesk: l'opzione Transfer outside business hours ti permette di scegliere una pianificazione dell'orario lavorativo, trasferire la conversazione a un agente o a un gruppo e scrivere il messaggio che il cliente vede.",
              "Qualsiasi piattaforma: crea un ticket con la trascrizione, indica quando il team sarà di nuovo disponibile e lascia che nel frattempo il bot continui a rispondere alle domande self-service.",
            ],
          },
          {
            type: "note",
            text: "Testa separatamente il percorso fuori orario. È il ramo che ha più probabilità di rompersi senza che nessuno se ne accorga, perché quando gira nessuno del team è online.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab realizza chatbot con passaggio all'operatore nel tuo helpdesk o in Slack: uno Starter Chat Bot ({{price:starter}}) o uno Standard Chat Bot ({{price:standard}}), collegati tramite API, webhook e Make o n8n. Ogni progetto include documentazione di base e 30 giorni di supporto dopo il lancio, senza costi nascosti, e la maggior parte delle configurazioni richiede 1–3 settimane. Una call di Health Check gratuita di 30 minuti è un buon punto di partenza per mappare i trigger del tuo passaggio all'operatore.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quando un chatbot dovrebbe passare la conversazione a una persona?",
        a: "Quando il cliente chiede una persona, quando il bot non riesce ad abbinare la richiesta con sicurezza e quando l'argomento è complesso, urgente o delicato, che è il modo in cui Zendesk descrive le richieste che hanno bisogno di un agente umano.",
      },
      {
        q: "Come evito che i clienti debbano ripetersi dopo il passaggio?",
        a: "Passa nel ticket o nella chat la trascrizione, il motivo del passaggio e tutti i dettagli raccolti dal bot. Il vecchio passaggio di trasferimento di Zendesk aggiunge la cronologia della conversazione al ticket, e gli AI Agents di Freshdesk possono raccogliere dettagli come un numero d'ordine prima del trasferimento.",
      },
      {
        q: "Cos'è l'handover protocol di Messenger?",
        a: "È il meccanismo di Meta per decidere quale app possiede un thread di conversazione su Messenger quando più app servono la stessa Pagina. Le app passano, prendono e richiedono il controllo del thread, e il webhook messaging_handovers segnala questi eventi.",
      },
      {
        q: "Cosa succede se un cliente chiede una persona fuori orario?",
        a: "Verifica la disponibilità prima di fare escalation. Zendesk e Freshdesk ti permettono entrambi di gestire in modo diverso i passaggi fuori orario, per esempio creando un ticket da riprendere più tardi e mostrando un messaggio su quando il team è disponibile.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
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
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "metriche-assistenza-clienti",
    category: "basics",
    navLabel: "Metriche dell'assistenza clienti",
    primaryKeyword: "metriche assistenza clienti",
    title: "Metriche dell'assistenza clienti: definizioni e formule",
    description:
      "Metriche dell'assistenza clienti spiegate: tempo di prima risposta, tempo di risoluzione, FCR, riaperture, CSAT, CES, NPS e backlog, e come si calcola ognuna.",
    h1: "Metriche dell'assistenza clienti: cosa monitorare e come si calcola ognuna",
    intro:
      "Le metriche dell'assistenza clienti sono le misure che mostrano con quanta rapidità, con quale qualità e con quale carico di lavoro il tuo team risolve le richieste dei clienti. Il set di base copre la velocità (tempo di prima risposta e tempo di risoluzione), la qualità (risoluzione al primo contatto e riaperture), il feedback dei clienti (CSAT, CES e NPS) e il carico di lavoro (backlog). Qui sotto ognuna è definita come la definiscono i fornitori di helpdesk e gli autori originali.",
    keyFacts: [
      "Il tempo di risoluzione completa di Zendesk va dalla creazione del ticket alla sua risoluzione più recente, quindi i ticket riaperti continuano a contare.",
      "Freshdesk conta un ticket ai fini della FCR solo se il cliente non ha inviato altri messaggi dopo il primo contatto.",
      "L'NPS è la percentuale di promotori (punteggi 9–10) meno la percentuale di detrattori (punteggi 0–6).",
      "L'NPS è stato introdotto da Fred Reichheld sulla Harvard Business Review nel dicembre 2003.",
      "La tesi a favore della misurazione dello sforzo del cliente è stata esposta nell'articolo HBR di luglio 2010 Stop Trying to Delight Your Customers.",
    ],
    sections: [
      {
        heading: "Le metriche principali dell'assistenza clienti in sintesi",
        blocks: [
          {
            type: "table",
            caption: "Metriche dell'assistenza clienti e come si calcolano",
            head: ["Metrica", "Cosa misura", "Come si calcola"],
            rows: [
              [
                "Tempo di prima risposta (FRT)",
                "Quanto aspettano i clienti la prima risposta",
                "Tempo dalla creazione del ticket alla prima risposta di un agente, riportato come media o mediana sui ticket",
              ],
              [
                "Tempo di risoluzione completa",
                "Quanto ci vuole per risolvere definitivamente un ticket",
                "Tempo dalla creazione del ticket alla sua risoluzione più recente (definizione di Zendesk)",
              ],
              [
                "Tempo medio di risoluzione",
                "Tempo tipico di risoluzione su molti ticket",
                "Somma dei tempi di risoluzione divisa per il numero di ticket risolti nel periodo",
              ],
              [
                "Risoluzione al primo contatto (FCR)",
                "Quota di problemi risolti senza che il cliente torni a scrivere",
                "Ticket risolti senza altri messaggi del cliente dopo il primo contatto, divisi per tutti i ticket risolti nel periodo (definizione di Freshdesk)",
              ],
              [
                "Riaperture",
                "Ticket che in realtà non erano risolti",
                "Numero di ticket tornati da Solved a Open (Zendesk), spesso mostrato come quota dei ticket risolti",
              ],
              [
                "CSAT",
                "Soddisfazione per una specifica interazione",
                "Ticket valutati positivamente divisi per tutti i ticket con una valutazione, in percentuale (Zendesk Explore)",
              ],
              [
                "CES",
                "Quanto sforzo ha dovuto fare il cliente",
                "Un sondaggio post-interazione sulla facilità o sullo sforzo, monitorato come punteggio medio o come quota di risposte a basso sforzo",
              ],
              [
                "NPS",
                "Propensione a raccomandare l'azienda",
                "Percentuale di promotori (9–10) meno percentuale di detrattori (0–6) su una scala da 0 a 10",
              ],
              [
                "Backlog",
                "Lavoro non risolto in attesa del team",
                "Numero di ticket in stato New, Open, Pending o On-hold in un dato momento (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Velocità: tempo di prima risposta e tempo di risoluzione",
        blocks: [
          {
            type: "p",
            text: "Il tempo di prima risposta è l'intervallo tra la creazione di un ticket e la prima risposta di un agente, che è il modo in cui lo misura la metrica first reply time di Zendesk. È la prima attesa che il cliente vive ed è di solito il primo obiettivo che i team inseriscono in una policy SLA.",
          },
          {
            type: "p",
            text: "Il tempo di risoluzione misura quanto ci vuole per risolvere il problema. Il tempo di risoluzione completa di Zendesk va dalla creazione all'ultima risoluzione del ticket, quindi un ticket riaperto e risolto di nuovo continua ad accumulare tempo. Il tempo medio di risoluzione è semplicemente la media di queste durate sui ticket risolti in un periodo. Una manciata di ticket molto vecchi può alzare parecchio la media, quindi conviene guardare anche la mediana.",
          },
          {
            type: "p",
            text: "Due impostazioni cambiano molto questi numeri: se conti le ore lavorative o le ore di calendario, e se le risposte automatiche contano come risposta. Decidi una volta, mettilo per iscritto e mantienilo stabile, così le tendenze restano confrontabili da un mese all'altro.",
          },
        ],
      },
      {
        heading: "Qualità: risoluzione al primo contatto e riaperture",
        blocks: [
          {
            type: "p",
            text: "La risoluzione al primo contatto (FCR) è la quota di problemi risolti senza che il cliente debba tornare a scrivere. Freshdesk calcola la FCR% come il numero di ticket risolti o chiusi dopo il primo contatto del cliente, diviso per tutti i ticket risolti o chiusi nel periodo selezionato. Un ticket rientra solo se il cliente non ha inviato altri messaggi dopo il primo; la descrizione iniziale del ticket non conta come risposta del cliente e il numero di risposte dell'agente non ha importanza. I ticket riaperti sono esclusi, così come i ticket in uscita avviati da un agente.",
          },
          {
            type: "p",
            text: "Le riaperture intercettano il caso opposto: un ticket segnato come risolto che ritorna. Zendesk registra una riapertura quando lo stato di un ticket passa da Solved di nuovo a Open. Osserva FCR e riaperture insieme. Se il tuo team chiude i ticket troppo presto per raggiungere un obiettivo di risoluzione, le riaperture aumenteranno.",
          },
          {
            type: "note",
            text: "I fornitori definiscono la FCR in modi diversi: alcuni contano le risposte dell'agente, altri quelle del cliente, altri ancora escludono determinati canali. Controlla la definizione del tuo helpdesk prima di confrontare il tuo numero con quello di altri.",
          },
        ],
      },
      {
        heading: "Feedback dei clienti: CSAT, CES e NPS",
        blocks: [
          {
            type: "p",
            text: "Il CSAT (customer satisfaction score) chiede ai clienti di valutare una specifica interazione. In Zendesk Explore, il punteggio di soddisfazione è il numero di ticket valutati positivamente diviso per tutti i ticket con una risposta di soddisfazione, espresso in percentuale. Poiché è legato a un singolo ticket, il CSAT è il feedback più diretto sul lavoro del tuo team di assistenza.",
          },
          {
            type: "p",
            text: "Il CES (customer effort score) chiede quanto è stato facile far gestire un problema. L'idea nasce da Stop Trying to Delight Your Customers, pubblicato sulla Harvard Business Review nel luglio 2010. L'articolo si basava su uno studio su oltre 75.000 persone che avevano avuto a che fare con operatori di contact center o canali self-service, e sosteneva che fare più del dovuto incide poco sulla fedeltà, mentre ridurre lo sforzo del cliente sì. La formulazione dei sondaggi e le scale variano da uno strumento all'altro, quindi scegli una versione e mantienila.",
          },
          {
            type: "p",
            text: "L'NPS (Net Promoter Score) misura la propensione a raccomandare l'azienda, non solo una singola interazione. Fred Reichheld di Bain & Company lo ha introdotto in The One Number You Need to Grow, pubblicato sulla Harvard Business Review nel dicembre 2003. I clienti indicano su una scala da 0 a 10 quanto è probabile che raccomandino l'azienda a un amico o a un collega. I punteggi 9–10 sono promotori, 7–8 passivi e 0–6 detrattori. L'NPS è la percentuale di promotori meno la percentuale di detrattori, quindi va da -100 a +100.",
          },
        ],
      },
      {
        heading: "Carico di lavoro: il backlog, e metriche oneste",
        blocks: [
          {
            type: "p",
            text: "Il backlog è il lavoro non risolto che il tuo team ha davanti. Zendesk definisce il backlog dei ticket come tutti i ticket attualmente in stato New, Open, Pending o On-hold, sia assegnati sia non assegnati. Monitoralo come istantanea giornaliera così puoi vederne la tendenza. Un backlog che cresce di settimana in settimana significa che il volume in entrata sta superando la capacità, anche se i tempi di risposta sembrano ancora a posto.",
          },
          {
            type: "p",
            text: "Alcune abitudini mantengono utili le metriche:",
          },
          {
            type: "ul",
            items: [
              "Abbina una metrica di velocità a una di qualità, come il tempo di risoluzione alle riaperture, così una non può migliorare a spese dell'altra.",
              "Segmenta per canale e priorità. Una prima risposta in chat e una prima risposta via email non sono confrontabili.",
              "Mantieni nel tempo le stesse definizioni e la stessa impostazione degli orari, e segnala ogni modifica nei tuoi report.",
              "Trasforma i tuoi obiettivi più importanti in policy SLA, così l'helpdesk li monitora su ogni ticket.",
            ],
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "Il servizio Automated Reports di TascaLab ({{price:reports}}, una tantum) estrae queste metriche dal tuo helpdesk, come Zendesk, Freshdesk o Jira, e invia un riepilogo pianificato via email o su Slack. Ogni progetto include documentazione di base, 30 giorni di supporto dopo il lancio e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane. Una call di Health Check gratuita di 30 minuti aiuta a decidere quali metriche conviene automatizzare per prime.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra tempo di prima risposta e tempo di risoluzione?",
        a: "Il tempo di prima risposta termina con la prima risposta di un agente. Il tempo di risoluzione termina quando il ticket è risolto; il tempo di risoluzione completa di Zendesk arriva fino alla risoluzione più recente, quindi i ticket riaperti continuano a contare.",
      },
      {
        q: "Come si calcola l'NPS?",
        a: "Chiedi ai clienti, su una scala da 0 a 10, quanto è probabile che ti raccomandino, poi sottrai la percentuale di detrattori (0–6) dalla percentuale di promotori (9–10). I passivi (7–8) contano nel totale delle risposte ma non nella sottrazione.",
      },
      {
        q: "Qual è la differenza tra CSAT, CES e NPS?",
        a: "Il CSAT valuta la soddisfazione per una specifica interazione, il CES misura quanto sforzo è servito per far gestire un problema e l'NPS misura quanto è probabile che un cliente raccomandi l'azienda nel complesso.",
      },
      {
        q: "Come calcola Freshdesk la risoluzione al primo contatto?",
        a: "La FCR% è il numero di ticket risolti senza altri messaggi del cliente dopo il primo contatto, diviso per tutti i ticket risolti nel periodo. I ticket riaperti e quelli in uscita sono esclusi.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    key: "sla-policies-explained",
    slug: "policy-sla-assistenza-clienti",
    category: "basics",
    navLabel: "Le policy SLA spiegate",
    primaryKeyword: "policy SLA nell'assistenza clienti",
    title: "Policy SLA nell'assistenza clienti, spiegate",
    description:
      "Policy SLA nell'assistenza: obiettivi di prima risposta, risposta successiva e risoluzione, ore lavorative o di calendario, pause, avvisi e setup nell'helpdesk.",
    h1: "Le policy SLA nell'assistenza clienti, spiegate",
    intro:
      "Una policy SLA è un insieme di regole nel tuo helpdesk che assegna ai ticket obiettivi di tempo di risposta e di risoluzione, in base a condizioni come la priorità, e monitora ogni ticket rispetto a questi obiettivi. Decide quali ticket ricevono quali obiettivi, se il conteggio usa ore lavorative o ore di calendario, quando il conteggio si mette in pausa e cosa succede prima di una violazione. Ecco come funzionano le policy SLA e come le configurano Zendesk, Freshdesk e Jira Service Management.",
    keyFacts: [
      "Zendesk applica la prima policy SLA, scorrendo l'elenco dall'alto verso il basso, le cui condizioni corrispondono al ticket.",
      "In Zendesk, il requester wait time si mette in pausa in Pending e l'agent work time in Pending e On-hold.",
      "Freshdesk ti permette di calcolare ogni SLA in ore lavorative o in ore di calendario (24x7).",
      "In Freshdesk i promemoria si possono impostare da 5 minuti a 4 ore prima della scadenza di un obiettivo SLA.",
      "In Jira Service Management, ogni SLA ha condizioni di avvio, pausa e arresto, più obiettivi che selezionano le richieste con JQL.",
    ],
    sections: [
      {
        heading: "Cos'è una policy SLA",
        blocks: [
          {
            type: "p",
            text: "Un service level agreement (SLA) è una promessa su quanto velocemente risponderai alle richieste e le risolverai. Una policy SLA è il modo in cui il tuo helpdesk fa rispettare quella promessa su ogni ticket. La maggior parte delle policy ha le stesse parti:",
          },
          {
            type: "ul",
            items: [
              "Condizioni: a quali ticket si applica la policy, per esempio in base a cliente, canale o tipo di richiesta",
              "Obiettivi: limiti di tempo per la prima risposta, le risposte successive e la risoluzione, di solito impostati per priorità",
              "Orari: se il conteggio usa ore lavorative o ore di calendario",
              "Regole di pausa: quali stati fermano il conteggio",
              "Azioni in caso di violazione: promemoria prima che un obiettivo venga mancato ed escalation dopo",
            ],
          },
          {
            type: "p",
            text: "Quando hai più policy, l'ordine conta. Zendesk esegue prima i trigger, poi confronta il ticket con le sue policy SLA dall'alto verso il basso e applica la prima le cui condizioni sono soddisfatte. Metti le policy specifiche, come quella per i clienti enterprise, sopra quelle generiche. Zendesk richiede inoltre che la priorità del ticket sia impostata nel campo priorità di sistema predefinito; un campo priorità personalizzato non farà corrispondere una policy.",
          },
        ],
      },
      {
        heading: "Obiettivi di prima risposta, risposta successiva e risoluzione",
        blocks: [
          {
            type: "table",
            caption: "Obiettivi SLA e come li chiama ciascuno strumento",
            head: ["Obiettivo", "Cosa misura", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Prima risposta",
                "Tempo dalla creazione del ticket alla prima risposta di un agente",
                "First reply time",
                "First response",
                "Uno SLA personalizzato che parte quando viene creata la richiesta e si ferma alla prima risposta al cliente",
              ],
              [
                "Risposta successiva",
                "Tempo da un messaggio del cliente senza risposta alla successiva risposta di un agente",
                "Next reply time",
                "Every response",
                "Uno SLA personalizzato con condizioni di avvio e arresto proprie",
              ],
              [
                "Risoluzione",
                "Tempo dalla creazione fino alla risoluzione del ticket",
                "Requester wait time, agent work time o total resolution time",
                "Resolution",
                "Uno SLA personalizzato che si ferma quando la richiesta viene risolta",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk definisce il next reply time come il tempo tra il commento del cliente senza risposta più vecchio e il successivo commento pubblico di un agente. Offre anche una metrica di aggiornamento periodico, che misura il tempo tra i commenti pubblici degli agenti. Per la risoluzione, Zendesk ha tre metriche e consiglia di sceglierne una sola per policy: requester wait time (tempo in New, Open e On-hold), agent work time (tempo in New e Open) e total resolution time (l'intero ciclo di vita, dalla creazione fino alla risoluzione del ticket).",
          },
          {
            type: "p",
            text: "Freshdesk imposta gli obiettivi di first response, every response e resolution per priorità all'interno di ogni policy SLA. In Jira Service Management ogni SLA è un timer con un nome: definisci quando parte, si mette in pausa e si ferma, poi aggiungi obiettivi che usano JQL per scegliere le richieste a cui si applicano, con target di tempo scritti come 4h 30m.",
          },
        ],
      },
      {
        heading: "Quando scorre il tempo: ore lavorative, ore di calendario e pause",
        blocks: [
          {
            type: "p",
            text: "Le ore lavorative contano solo il tempo all'interno del tuo orario di lavoro; le ore di calendario contano ogni ora di ogni giorno. Zendesk ti permette di scegliere ore lavorative o di calendario per ogni priorità all'interno di una policy. Freshdesk chiede se ogni SLA debba usare l'orario lavorativo che hai impostato o le ore di calendario (24x7). Jira Service Management associa a ogni obiettivo un calendario, con fuso orario, giorni e orari lavorativi e festività.",
          },
          {
            type: "p",
            text: "Un obiettivo di 4 ore lavorative su un ticket creato venerdì sera tardi potrebbe scadere solo lunedì. È corretto verso il tuo team, ma non corrisponde a ciò che vive il cliente, quindi usa le ore di calendario per ogni priorità in cui prometti una copertura 24 ore su 24.",
          },
          {
            type: "p",
            text: "Le pause sono l'altra metà. Il tempo passato ad aspettare il cliente di solito non dovrebbe contare contro di te, e ogni strumento lo gestisce in modo diverso:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: il requester wait time si mette in pausa in Pending; l'agent work time in Pending e On-hold; il total resolution time non si mette in pausa con nessun cambio di stato finché il ticket non è risolto.",
              "Freshdesk: lo stato Pending mette in pausa i timer SLA e puoi disattivare il timer SLA per qualsiasi stato, compresi quelli personalizzati come Waiting on Third Party. I ticket con il timer disattivato risultano On Hold e, quando il cliente risponde, il ticket torna in Open e il conteggio riprende.",
              "Jira Service Management: uno SLA può avere condizioni di pausa, per esempio mentre aspetti la risposta del cliente, oltre alle condizioni di avvio e arresto.",
            ],
          },
        ],
      },
      {
        heading: "Avvisi di violazione ed escalation",
        blocks: [
          {
            type: "p",
            text: "Uno SLA è utile solo se qualcuno interviene prima che venga mancato. Imposta un avviso prima della scadenza e un'escalation dopo:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: crea un'automazione con la condizione Hours until next SLA breach per avvisare un team o una persona quando un ticket è vicino alla violazione. Le automazioni girano una volta all'ora, quindi l'avviso può arrivare fino a un'ora prima o dopo la soglia, mai nel momento esatto. Nell'esempio di Zendesk, la stessa automazione aggiunge un tag così si attiva una sola volta per ticket.",
              "Freshdesk: ogni policy SLA può inviare promemoria agli agenti da 5 minuti a 4 ore prima della scadenza di un obiettivo di prima risposta o di risoluzione, e fare escalation quando un obiettivo viene violato verso l'agente assegnato o altre persone che scegli, come un team lead. Entrambi si impostano in Admin > Workflows > SLA Policies.",
              "Qualsiasi strumento: invia gli avvisi di violazione dove il tuo team guarda davvero, come un canale Slack, e non solo via email.",
            ],
          },
        ],
      },
      {
        heading: "Come configurano gli SLA Zendesk, Freshdesk e Jira Service Management",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: crea policy SLA con condizioni e obiettivi per priorità, scegli ore lavorative o di calendario per ogni priorità e ordina l'elenco in modo che le policy specifiche vengano prima. Aggiungi un'automazione per gli avvisi di violazione imminente.",
              "Freshdesk: in Admin > Workflows > SLA Policies, imposta per priorità gli obiettivi di first response, every response e resolution, scegli ore lavorative o di calendario, poi aggiungi promemoria ed escalation. Decidi nelle impostazioni degli stati dei ticket quali stati disattivano il timer SLA.",
              "Jira Service Management: crea ogni SLA con condizioni di avvio, pausa e arresto. Più condizioni di avvio funzionano in OR e lo SLA si ferma non appena si verifica una qualsiasi condizione di arresto. Poi aggiungi obiettivi che selezionano le richieste con JQL, imposta un target di tempo e scegli un calendario.",
            ],
          },
          {
            type: "p",
            text: "Qualunque sia lo strumento, inizia con una policy e poche priorità, falla girare per qualche settimana, poi confronta i tempi reali di prima risposta e di risoluzione con gli obiettivi prima di renderli più stringenti.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura automazioni legate agli SLA su Zendesk, Freshdesk e Jira: routing che imposta la priorità così si applica la policy giusta, avvisi di violazione su Slack e report SLA pianificati. I prezzi una tantum pertinenti sono Ticket Routing & Categorization ({{price:routing}}), Automated Reports ({{price:reports}}) e Custom Automation ({{price:custom}}). I progetti includono documentazione di base, 30 giorni di supporto dopo il lancio e nessun costo nascosto, e la maggior parte richiede 1–3 settimane. Inizia con una call di Health Check gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra first reply time e next reply time?",
        a: "Il first reply time misura l'attesa per la prima risposta di un agente dopo la creazione di un ticket. Il next reply time di Zendesk va dal commento del cliente senza risposta più vecchio al successivo commento pubblico di un agente, quindi si applica per tutta la conversazione.",
      },
      {
        q: "Gli SLA devono usare ore lavorative o ore di calendario?",
        a: "Usa le ore lavorative se il tuo team lavora in orari stabiliti e i clienti lo sanno, e le ore di calendario per le priorità in cui prometti una copertura 24 ore su 24. Zendesk e Freshdesk ti permettono di scegliere per policy, mentre Jira Service Management usa un calendario che assegni a ogni obiettivo.",
      },
      {
        q: "Il conteggio SLA si ferma quando un ticket è in Pending?",
        a: "Dipende dallo strumento e dalla metrica. Freshdesk mette in pausa i timer SLA in Pending. In Zendesk, requester wait time e agent work time si mettono in pausa in Pending, mentre il total resolution time continua a scorrere finché il ticket non è risolto.",
      },
      {
        q: "Zendesk può avvisarmi nel momento esatto in cui uno SLA viene violato?",
        a: "No. Gli avvisi di violazione imminente di Zendesk usano le automazioni, che girano una volta all'ora, quindi una notifica può arrivare fino a un'ora prima o dopo la violazione.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Ticket deflection
  // ---------------------------------------------------------------------------
  {
    key: "ticket-deflection",
    slug: "ticket-deflection-definizione-e-misurazione",
    category: "basics",
    navLabel: "Ticket deflection",
    primaryKeyword: "ticket deflection",
    title: "Ticket deflection: definizione, misurazione e limiti",
    description:
      "Ticket deflection: quali canali self-service la generano, come la misurano Zendesk, Freshdesk e Intercom e perché le sessioni abbandonate gonfiano il tasso.",
    h1: "Ticket deflection: cos'è e come misurarla onestamente",
    intro:
      "Si parla di ticket deflection quando un cliente risolve la sua domanda in self-service, per esempio con un articolo del centro assistenza o un agente AI, invece di aprire un ticket per il tuo team. I fornitori di helpdesk la misurano in modi molto diversi e la maggior parte delle loro misure conta come deviati anche i clienti che se ne sono semplicemente andati senza chiedere aiuto. Un tasso di deflection è utile solo quando sai esattamente cosa conta e quali richieste non dovrebbero mai essere deviate.",
    keyFacts: [
      "Il self-service score di Zendesk, chiamato anche ticket deflection ratio, confronta l'utilizzo del centro assistenza con i ticket creati nello stesso periodo.",
      "Zendesk registra una deflection presunta quando un visitatore del centro assistenza non invia alcun ticket ma non conferma mai di aver trovato una risposta.",
      "Nei report sugli agenti AI di Zendesk, ogni conversazione che non termina con un'escalation conta come deviata.",
      "Intercom registra una risoluzione presunta quando un cliente se ne va dopo l'ultima risposta di Fin senza chiedere altro aiuto.",
      "Un sondaggio Gartner pubblicato ad agosto 2024 ha rilevato che solo il 14% dei problemi di assistenza clienti viene risolto completamente in self-service.",
    ],
    sections: [
      {
        heading: "Dove avviene la deflection: i canali self-service",
        blocks: [
          {
            type: "p",
            text: "La deflection avviene ovunque un cliente possa trovare una risposta prima di arrivare a un agente. Ogni canale devia i ticket in modo diverso e lascia una traccia diversa nei tuoi dati, quindi è utile sapere cosa puoi effettivamente misurare per ciascuno.",
          },
          {
            type: "table",
            caption: "Canali self-service che deviano i ticket",
            head: ["Canale", "Come devia", "Cosa puoi misurare"],
            rows: [
              [
                "Centro assistenza o knowledge base",
                "I clienti cercano o sfogliano gli articoli prima di contattarti",
                "Sessioni o utenti del centro assistenza rispetto ai ticket creati; visualizzazioni e voti degli articoli",
              ],
              [
                "Articoli suggeriti nel modulo di contatto",
                "Il modulo di richiesta suggerisce articoli mentre il cliente descrive il problema",
                "Zendesk registra una deflection confermata quando viene selezionato un articolo suggerito e in quella sessione non viene inviato alcun ticket",
              ],
              [
                "Agente AI o chatbot",
                "Risponde alle domande in chat, messaggistica o email e passa la conversazione a una persona quando non può aiutare",
                "Conversazioni terminate senza escalation e, idealmente, risoluzioni confermate dal cliente",
              ],
              [
                "Assistenza nel prodotto o contestuale",
                "Un widget di assistenza mostra articoli legati alla pagina o alla funzione che il cliente sta usando",
                "Aperture del widget, visualizzazioni degli articoli e invii del modulo di contatto dal widget",
              ],
              [
                "Forum della community",
                "I clienti si rispondono a vicenda e le discussioni con risposta continuano ad aiutare i visitatori successivi",
                "Difficile da collegare direttamente ai ticket; di solito si monitora come discussioni con una risposta accettata",
              ],
            ],
          },
          {
            type: "note",
            text: "La deflection è un effetto collaterale di un buon self-service, non un obiettivo in sé. Un cliente che ottiene una risposta corretta in due minuti è un successo. Un cliente che si arrende no, anche se molti report contano entrambi allo stesso modo.",
          },
        ],
      },
      {
        heading: "Come i fornitori definiscono e misurano la deflection",
        blocks: [
          {
            type: "p",
            text: "Non esiste una definizione condivisa. Ogni helpdesk conta qualcosa di leggermente diverso, ed è per questo che i tassi di deflection di due strumenti, o dei casi di studio di due fornitori, non si possono confrontare direttamente.",
          },
          {
            type: "table",
            caption: "Come i fornitori di helpdesk definiscono la deflection",
            head: ["Fornitore e metrica", "Cosa conta", "A cosa fare attenzione"],
            rows: [
              [
                "Self-service score di Zendesk (chiamato anche self-service ratio o ticket deflection ratio)",
                "L'utilizzo del centro assistenza rispetto ai ticket creati nello stesso periodo. Nella reportistica Knowledge di Zendesk, il self-service ratio è il numero di sessioni del centro assistenza diviso per i ticket inviati",
                "È un rapporto, non un conteggio di problemi risolti, e i report di deflection di Zendesk tracciano solo i ticket inviati tramite il modulo di richiesta del centro assistenza",
              ],
              [
                "Deflection confermata e presunta di Zendesk",
                "Confermata: il visitatore ha selezionato un articolo suggerito nel modulo di richiesta e non ha inviato alcun ticket in quella sessione. Presunta: il visitatore ha usato il centro assistenza e non ha inviato alcun ticket, ma non ha confermato di aver trovato una risposta",
                "La deflection presunta è una deduzione basata sul silenzio",
              ],
              [
                "Tasso di deflection degli agenti AI di Zendesk",
                "Ogni conversazione che non termina con un'escalation, comprese le escalation non riuscite e le conversazioni senza stato",
                "Accanto a questo Zendesk riporta misure più rigorose: conversazioni gestite dall'agente AI e risoluzioni automatizzate verificate da un LLM",
              ],
              [
                "Tasso di deflection degli agenti AI di Freshdesk",
                "La quota di conversazioni di un argomento risolte dall'agente AI senza intervento umano",
                "L'andamento della deflection dell'Email AI Agent conta anche i ticket chiusi da un agente umano dopo che il cliente ha letto una risposta e non ha replicato",
              ],
              [
                "Risoluzione di Fin in Intercom",
                "Dopo l'ultima risposta di Fin, il cliente conferma che è stata utile (risoluzione confermata) oppure se ne va senza chiedere altro aiuto (risoluzione presunta)",
                "Se il cliente torna nella conversazione per chiedere altro aiuto, la risoluzione viene stornata",
              ],
            ],
          },
          {
            type: "p",
            text: "Emergono due schemi. Primo, le metriche più ampie, come il tasso di deflection degli agenti AI di Zendesk, le deflection presunte e le risoluzioni presunte di Intercom, contano il silenzio come un successo. Secondo, le metriche più rigorose aggiungono una qualche forma di verifica: Zendesk conta una risoluzione automatizzata solo quando un controllo LLM conferma che la richiesta è stata risolta senza una persona, e le conversazioni che non superano quel controllo non consumano una risoluzione automatizzata.",
          },
        ],
      },
      {
        heading: "Il problema delle sessioni abbandonate",
        blocks: [
          {
            type: "p",
            text: "La maggior parte delle metriche di deflection non riesce a distinguere un cliente che ha trovato la risposta da uno che ha rinunciato. Un visitatore che legge un articolo, non lo capisce e poi ti telefona è una deflection presunta nel report del centro assistenza e un ticket nella coda telefonica. Una chat che termina perché il cliente ha chiuso la scheda sembra uguale a una che termina perché il problema è stato risolto. Zendesk fa notare che anche la sua categoria più rigorosa, quella delle conversazioni gestite dall'agente AI, può includere conversazioni in cui i clienti hanno abbandonato prima dell'escalation o non erano soddisfatti della risoluzione.",
          },
          {
            type: "p",
            text: "Il vero successo del self-service è di solito più basso di quanto suggeriscano le dashboard. In un sondaggio Gartner su 5.728 clienti, pubblicato ad agosto 2024, solo il 14% dei problemi di assistenza clienti è stato risolto completamente in self-service, e solo il 36% anche quando i clienti descrivevano il problema come molto semplice.",
          },
          {
            type: "p",
            text: "Per mantenere onesti i tuoi numeri di deflection:",
          },
          {
            type: "ul",
            items: [
              "Riporta separatamente le deflection confermate e quelle presunte, e tratta il numero presunto come un limite superiore.",
              "Monitora i contatti ripetuti. Un cliente che ti contatta su un altro canale il giorno dopo una sessione deviata non è stato deviato.",
              "Osserva i contatti per cliente o per ordine. Se la deflection sale ma i contatti per cliente non scendono, la deflection esiste solo sulla carta.",
              "Leggi ogni mese un campione di trascrizioni di bot deviate per vedere come sono finite davvero le conversazioni.",
              "Abbina la deflection a una metrica di qualità, come il CSAT sulle conversazioni con il bot o i ticket riaperti.",
            ],
          },
        ],
      },
      {
        heading: "Cosa non andrebbe deviato",
        blocks: [
          {
            type: "p",
            text: "Alcune richieste dovrebbero arrivare a una persona il più velocemente possibile, anche se tecnicamente un bot potrebbe rispondere. Deviarle ti fa risparmiare un ticket e ti fa perdere un cliente.",
          },
          {
            type: "ul",
            items: [
              "I clienti che chiedono esplicitamente una persona. Rendi visibile quel percorso invece di nasconderlo dietro diversi tentativi falliti del bot.",
              "Problemi di sicurezza, come account compromessi, sospette frodi o addebiti imprevisti.",
              "Contestazioni di fatturazione, rimborsi e disdette, dove una risposta sbagliata o dilatoria ha un costo diretto.",
              "Reclami ed escalation, soprattutto i contatti ripetuti sullo stesso problema.",
              "Richieste legali e di protezione dei dati, come le richieste di accesso o cancellazione dei dati personali, che richiedono una risposta documentata.",
              "Problemi urgenti o legati alla sicurezza delle persone, e clienti che sembrano in difficoltà o vulnerabili.",
            ],
          },
          {
            type: "p",
            text: "I clienti si aspettano questa via d'uscita. In un sondaggio Gartner su 3.566 clienti condotto a febbraio e marzo 2026 e pubblicato ad agosto 2026, l'87% ha dichiarato che le aziende che usano la GenAI per l'assistenza clienti devono garantire l'accesso a un agente umano. Nello stesso comunicato Gartner consiglia di non rendere la GenAI un primo passaggio obbligatorio e di tentare la risoluzione solo quando la confidenza è alta, con un percorso chiaro verso una persona.",
          },
          {
            type: "p",
            text: "In pratica, servono regole di routing che inviino queste richieste direttamente alla coda giusta e un passaggio dal bot all'operatore che trasferisca l'intera conversazione, così il cliente non deve ripetere nulla.",
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab realizza chatbot AI che rispondono alle domande frequenti sul tuo sito web, su WhatsApp, Telegram, Facebook Messenger o Instagram e passano tutto il resto al tuo team in Zendesk, Freshdesk o nei tuoi strumenti esistenti. Uno Starter Chat Bot costa {{price:starter}} e uno Standard Chat Bot che copre 3–5 canali costa {{price:standard}}, una tantum. Automated Reports ({{price:reports}}) può monitorare la deflection insieme ai contatti ripetuti e alle riaperture, così vedi l'effetto reale. Ogni progetto include documentazione di base, 30 giorni di supporto dopo il lancio e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane. Una call di Health Check gratuita di 30 minuti è un buon punto di partenza per decidere cosa automatizzare e cosa lasciare alle persone.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra ticket deflection e risoluzione del ticket?",
        a: "Deflection significa che il cliente non ha creato un ticket né raggiunto un agente; risoluzione significa che il problema è stato davvero risolto. Il tasso di deflection degli agenti AI di Zendesk conta ogni conversazione che non è terminata con un'escalation, mentre le sue risoluzioni automatizzate richiedono anche un controllo LLM che confermi che la richiesta è stata risolta.",
      },
      {
        q: "Cos'è una deflection presunta in Zendesk?",
        a: "Una sessione del centro assistenza in cui il visitatore non ha chiesto aiuto né inviato un ticket, ma non ha nemmeno confermato di aver trovato una risposta. Una deflection confermata richiede che il visitatore selezioni un articolo suggerito nel modulo di richiesta e poi non invii un ticket in quella sessione.",
      },
      {
        q: "Come calcola Zendesk il self-service ratio?",
        a: "Confronta l'utilizzo del centro assistenza con i ticket dello stesso periodo. Nella reportistica Knowledge di Zendesk, il self-service ratio è il numero di sessioni del centro assistenza diviso per i ticket inviati, e i report di deflection tracciano solo i ticket inviati tramite il modulo di richiesta del centro assistenza.",
      },
      {
        q: "Intercom conta come risolta una conversazione con Fin se il cliente se ne va e basta?",
        a: "Sì. Se il cliente esce dopo l'ultima risposta di Fin senza chiedere altro aiuto, Intercom registra una risoluzione presunta. Se il cliente conferma che la risposta è stata utile, è una risoluzione confermata.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Getting started with self-service, Part 6: Tracking essential self-service metrics",
        url: "https://support.zendesk.com/hc/en-us/articles/4408894139930-Getting-started-with-self-service-Part-6-Tracking-essential-self-service-metrics",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Knowledge",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155064090-Metrics-and-attributes-for-Zendesk-Knowledge",
      },
      {
        label: "Zendesk Help Center — Understanding the difference between deflection, AI agent-handled, automated resolution, and custom resolution rates",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756478106-Understanding-the-difference-between-deflection-AI-agent-handled-automated-resolution-and-custom-resolution-rates",
      },
      {
        label: "Freshdesk Support — Monitor and Analyze AI Agent Performance Metrics in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011716-monitor-ai-agent-performance",
      },
      {
        label: "Freshdesk Support — Manage, Test & Troubleshoot Your Email AI Agent",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011217-use-and-manage-the-email-ai-agent",
      },
      {
        label: "Intercom Help — Fin AI Agent outcomes",
        url: "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      },
      {
        label: "Gartner — Survey Finds Only 14% of Customer Service Issues Are Fully Resolved in Self-Service (August 2024)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2024-08-19-gartner-survey-finds-only-14-percent-of-customer-service-issues-are-fully-resolved-in-self-service",
      },
      {
        label: "Gartner — Survey Finds 87% of Customers Say Companies Using GenAI for Customer Service Must Provide Access to a Human Agent (August 2026)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "ai-knowledge-base-for-customer-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. Omnichannel customer support
  // ---------------------------------------------------------------------------
  {
    key: "omnichannel-customer-support",
    slug: "assistenza-clienti-omnicanale",
    category: "basics",
    navLabel: "Assistenza clienti omnicanale",
    primaryKeyword: "assistenza clienti omnicanale",
    title: "Assistenza clienti omnicanale: cosa significa in pratica",
    description:
      "Assistenza clienti omnicanale spiegata: differenze con il multicanale, workspace unico per gli agenti, routing omnicanale e finestre di WhatsApp e Messenger.",
    h1: "Assistenza clienti omnicanale: cosa significa e come funziona",
    intro:
      "Assistenza clienti omnicanale significa che ogni canale che un cliente usa per contattarti, come email, chat, telefono, WhatsApp o messaggistica social, è collegato a un'unica scheda cliente e a un'unica cronologia delle conversazioni visibile a qualsiasi agente. L'assistenza multicanale offre gli stessi canali ma li gestisce separatamente, quindi i clienti devono ripetersi ogni volta che cambiano canale. Per arrivare all'omnicanalità servono un workspace unificato per gli agenti, un routing che tratti tutti i canali come un unico bacino di lavoro e workflow che rispettino le regole specifiche di ogni canale.",
    keyFacts: [
      "Freshworks descrive l'assistenza multicanale come un insieme di canali indipendenti, ognuno dei quali opera in autonomia; nell'assistenza omnicanale sono interconnessi.",
      "Nell'Agent Workspace di Zendesk, una singola conversazione di un ticket può includere email, chat e voce.",
      "Il routing omnicanale di Zendesk assegna i ticket di email, messaggistica e chiamate in base allo stato degli agenti e alla loro capacità disponibile.",
      "Su WhatsApp le risposte libere sono consentite solo entro una finestra di assistenza clienti di 24 ore; dopo si possono inviare solo modelli.",
      "Un sondaggio Gartner pubblicato a luglio 2025 ha rilevato che solo il 22% dei clienti inizia, prosegue e risolve il proprio problema interamente nei canali dell'azienda.",
    ],
    sections: [
      {
        heading: "Assistenza omnicanale e multicanale a confronto",
        blocks: [
          {
            type: "p",
            text: "Entrambi i modelli offrono più canali. La differenza sta nel fatto che quei canali condividano o meno il contesto. Freshworks definisce l'assistenza multicanale come l'offerta di più canali indipendenti, ognuno dei quali opera in autonomia, e osserva che di solito prevede team dedicati per ogni canale. I sistemi omnicanale, invece, fanno in modo che tutti i canali siano interconnessi. Zendesk traccia la stessa linea: nell'assistenza multicanale le conversazioni non passano da un canale all'altro, mentre l'assistenza omnicanale collega le interazioni in un'unica conversazione continua e dà agli agenti una visione completa della cronologia del cliente.",
          },
          {
            type: "table",
            caption: "Assistenza clienti multicanale e omnicanale a confronto",
            head: ["Aspetto", "Multicanale", "Omnicanale"],
            rows: [
              ["Canali", "Più canali, ognuno con il proprio strumento o la propria inbox", "Più canali che confluiscono in un unico helpdesk"],
              ["Cronologia del cliente", "Resta nel canale in cui è avvenuta", "Un'unica cronologia su tutti i canali, visibile a ogni agente"],
              ["Cambio di canale", "Il cliente ricomincia da capo e ripete i dettagli", "L'agente riprende da dove si era fermata l'ultima interazione"],
              ["Organizzazione del team", "Spesso un team dedicato per canale", "Una coda condivisa, con agenti che lavorano su più canali"],
              ["Routing", "Per canale, spesso manuale", "Un'unica configurazione di routing basata su stato, capacità e competenze"],
              ["Reportistica", "Numeri separati per canale", "Report per cliente e per problema su tutti i canali"],
            ],
          },
          {
            type: "p",
            text: "Aggiungere un canale non ti rende omnicanale. Se i messaggi WhatsApp arrivano in un'app separata che i tuoi agenti email non vedono, hai solo un silo in più. E i clienti si spostano davvero tra i canali: un sondaggio Gartner su 5.801 clienti, pubblicato a luglio 2025, ha rilevato che solo il 22% inizia, prosegue e risolve il proprio problema interamente nei canali dell'azienda, e che il 51% dei percorsi di assistenza oggi inizia su piattaforme di terze parti come Google, YouTube e ChatGPT.",
          },
        ],
      },
      {
        heading: "Un workspace unificato per gli agenti e una cronologia condivisa",
        blocks: [
          {
            type: "p",
            text: "Il cuore dell'assistenza omnicanale è un unico luogo in cui gli agenti vedono e rispondono a ogni conversazione. Nell'Agent Workspace di Zendesk, le conversazioni dei ticket possono includere email, chat e voce, e gli agenti possono anche ricevere e rispondere a messaggi social e web. L'esempio di Zendesk stessa è un ticket nato come live chat e proseguito via email, registrato come un unico flusso di conversazione. Il contesto del cliente, compresa la cronologia delle interazioni, si trova accanto alla conversazione e gli agenti possono cercare e citare articoli del centro assistenza dalla stessa schermata.",
          },
          {
            type: "p",
            text: "Qualunque helpdesk tu usi, una configurazione omnicanale funzionante richiede le stesse capacità:",
          },
          {
            type: "ul",
            items: [
              "Un'unica scheda cliente che colleghi indirizzi email, numeri di telefono e ID di messaggistica, così un messaggio WhatsApp e un'email della stessa persona finiscono nella stessa cronologia.",
              "La cronologia delle conversazioni di ogni canale sul ticket, compresa la conversazione con il bot avvenuta prima di un passaggio all'operatore.",
              "La possibilità di rispondere su un canale diverso quando quello originale non consente più una risposta.",
              "Tag, campi e macro condivisi, così la reportistica funziona allo stesso modo su ogni canale.",
            ],
          },
          {
            type: "note",
            text: "L'abbinamento delle identità è il punto in cui molte configurazioni si rompono. Se il tuo centralino, il tuo numero WhatsApp e la tua casella email non corrispondono alla stessa scheda cliente, gli agenti vedono ancora frammenti, solo in un'unica finestra.",
          },
        ],
      },
      {
        heading: "Routing omnicanale",
        blocks: [
          {
            type: "p",
            text: "Il routing decide quale agente riceve quale conversazione. Il routing omnicanale di Zendesk invia agli agenti i ticket nuovi e aperti provenienti da email, chiamate e messaggistica in base alla loro disponibilità e capacità. Invece di impostare uno stato per ogni canale, gli agenti impostano un unico stato unificato per email, voce e messaggistica. Per messaggistica e chiamate l'agente deve essere online, e ogni agente deve avere capacità disponibile, cioè meno ticket aperti assegnati rispetto al proprio massimo per quel canale.",
          },
          {
            type: "p",
            text: "Per impostazione predefinita, un ticket va all'agente con più capacità disponibile per quel canale e, in caso di parità, all'agente che da più tempo non riceve un ticket da quel canale. Puoi passare invece al round robin e attivare la focus mode, così un agente non riceve contemporaneamente conversazioni di messaggistica e chiamate. A seconda del piano Zendesk, il routing può tenere conto anche del tempo alla violazione dello SLA, della priorità del ticket e delle competenze degli agenti.",
          },
          {
            type: "p",
            text: "Il senso di un routing trasversale ai canali, anziché per singolo canale, è la capacità condivisa: a un agente impegnato in una chiamata non andrebbe proposta una nuova chat, e un agente con poche email aperte può prendere altro lavoro.",
          },
        ],
      },
      {
        heading: "Regole dei canali: le finestre di messaggistica su WhatsApp e Messenger",
        blocks: [
          {
            type: "p",
            text: "L'omnicanalità non rende identici i canali. Le piattaforme di messaggistica fissano regole su quando un'azienda può rispondere e i tuoi workflow devono rispettarle.",
          },
          {
            type: "table",
            caption: "Finestre di messaggistica su WhatsApp e Facebook Messenger",
            head: ["Canale", "Finestra di risposta", "Dopo la chiusura della finestra"],
            rows: [
              [
                "WhatsApp Business Platform",
                "Una finestra di assistenza clienti di 24 ore si apre quando il cliente ti scrive o ti chiama e si azzera a ogni nuovo messaggio o chiamata. Al suo interno puoi inviare messaggi di servizio liberi senza approvazione preventiva.",
                "Si possono inviare solo messaggi modello pre-approvati. I messaggi liberi possono solo rispondere agli utenti, non avviare una conversazione.",
              ],
              [
                "Facebook Messenger",
                "La finestra di messaggistica standard è di 24 ore dall'ultimo messaggio della persona.",
                "Con il tag Human Agent, una persona può rispondere entro 7 giorni dal messaggio del cliente. La tua app deve essere approvata per usare il tag e con esso non sono consentiti messaggi automatici.",
              ],
            ],
          },
          {
            type: "p",
            text: "Queste regole condizionano il tuo workflow. Se un agente prende in carico una conversazione WhatsApp più di 24 ore dopo l'ultimo messaggio del cliente, una risposta libera non è possibile: ti serve un modello approvato oppure il passaggio a un altro canale, come l'email. Anche i bot ne sono toccati, perché il tag Human Agent di Messenger è riservato alle risposte umane. Controlla la documentazione aggiornata di Meta prima di progettare attorno a questi limiti, perché Meta aggiorna le sue policy di messaggistica e i suoi prezzi.",
          },
        ],
      },
      {
        heading: "Come passare dal multicanale all'omnicanale",
        blocks: [
          {
            type: "ol",
            items: [
              "Elenca ogni canale che i clienti usano oggi e dove arriva ciascuno: quale strumento, quale team, quale inbox.",
              "Porta i canali in un unico helpdesk, tramite integrazioni native dove esistono e API o webhook dove non esistono.",
              "Decidi come abbinare le identità tra i canali, per esempio tramite indirizzo email e numero di telefono, e come unire i duplicati.",
              "Imposta un'unica configurazione di routing con capacità per canale, invece di code separate per team.",
              "Fai in modo che i passaggi dal bot all'operatore portino nel ticket l'intera conversazione e i dati del cliente.",
              "Aggiungi regole specifiche per canale, come le risposte con modello su WhatsApp dopo 24 ore e obiettivi SLA diversi per i canali dal vivo e asincroni.",
              "Crea report per cliente e per problema su tutti i canali, non solo per canale.",
            ],
          },
        ],
      },
      {
        heading: "Come può aiutarti TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab collega i canali all'helpdesk che usi già, come Zendesk o Freshdesk, usando API, webhook e Make o n8n. Uno Standard Chat Bot ({{price:standard}}, una tantum) copre 3–5 canali come il tuo sito web, WhatsApp, Telegram, Facebook Messenger e Instagram, e Ticket Routing & Categorization ({{price:routing}}) smista le conversazioni in arrivo nella coda giusta. Ogni progetto include documentazione di base, 30 giorni di supporto dopo il lancio e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane. Una call di Health Check gratuita di 30 minuti mappa i tuoi canali attuali prima di costruire qualsiasi cosa.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra assistenza omnicanale e multicanale?",
        a: "L'assistenza multicanale offre più canali che funzionano in modo indipendente, quindi la cronologia resta all'interno di ciascun canale. L'assistenza omnicanale collega i canali, così gli agenti vedono un'unica cronologia del cliente e i clienti possono cambiare canale senza ripetersi.",
      },
      {
        q: "Cos'è il routing omnicanale in Zendesk?",
        a: "Un sistema di routing che assegna agli agenti i ticket di email, messaggistica e chiamate in base a un unico stato unificato dell'agente e alla capacità disponibile per canale. Per impostazione predefinita, il ticket va all'agente con più capacità disponibile per quel canale.",
      },
      {
        q: "Posso rispondere a un cliente su WhatsApp dopo 24 ore?",
        a: "Non con un messaggio libero. Una volta chiusa la finestra di assistenza clienti di 24 ore, si possono inviare solo messaggi modello pre-approvati. Un nuovo messaggio o una nuova chiamata del cliente apre una nuova finestra.",
      },
      {
        q: "Entro quanto tempo un operatore può rispondere su Facebook Messenger?",
        a: "La finestra di messaggistica standard è di 24 ore. Con il tag Human Agent, che richiede l'approvazione dell'app, un operatore umano può rispondere entro 7 giorni dal messaggio del cliente. Il tag non può essere usato per i messaggi automatici.",
      },
    ],
    sources: [
      {
        label: "Freshworks — Omnichannel vs Multichannel: Key Service Differences",
        url: "https://www.freshworks.com/explore-cx/omnichannel-vs-multichannel-support/",
      },
      {
        label: "Zendesk — What is omnichannel customer service?",
        url: "https://www.zendesk.com/blog/customer-service/support/omnichannel-really-means/",
      },
      {
        label: "Zendesk Help Center — About the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Messenger Platform Send API reference",
        url: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
      },
      {
        label: "Gartner — Survey Finds More Than Half of Customer Service Journeys Now Start on Third-Party Platforms (July 2025)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-23-gartner-survey-finds-more-than-half-of-customer-service-journeys-now-start-on-third-party-platforms",
      },
    ],
    related: ["whatsapp-customer-support-bot", "ticket-routing-automation", "zendesk-automation"],
    updated: "2026-10-19",
  },
];
