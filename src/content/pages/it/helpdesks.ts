import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "automazione-zendesk",
    category: "helpdesks",
    navLabel: "Automazione Zendesk",
    primaryKeyword: "automazione Zendesk",
    title: "Automazione Zendesk: trigger, automazioni e macro",
    description:
      "Come funziona l'automazione Zendesk: trigger, automazioni e macro, esecuzione oraria, ordine dei trigger, routing omnicanale e per competenze, webhook e API.",
    h1: "Automazione Zendesk: trigger, automazioni, macro e routing",
    intro:
      "L'automazione in Zendesk si basa su tre strumenti di regole aziendali: i trigger, che si attivano subito quando un ticket viene creato o aggiornato; le automazioni, che girano con cadenza oraria; e le macro, che gli agenti applicano a mano. Il routing (omnicanale o basato sulle competenze), i webhook e l'API di Zendesk coprono ciò che queste regole da sole non riescono a fare. Qui sotto trovi come si comporta ogni elemento e cosa conviene automatizzare per primo.",
    keyFacts: [
      "I trigger dei ticket si attivano subito dopo la creazione o l'aggiornamento di un ticket, nell'ordine in cui sono elencati.",
      "Le automazioni girano una volta ogni ora sui ticket non chiusi e ognuna può agire su un massimo di 1.000 ticket all'ora.",
      "Ogni automazione ha bisogno di una condizione vera una sola volta, o di un'azione che annulli una condizione, altrimenti continua ad attivarsi.",
      "Le macro contengono solo azioni, nessuna condizione, e possono fare solo ciò che l'agente che le applica è autorizzato a fare.",
      "Un webhook si collega agli eventi Zendesk oppure a trigger e automazioni, non a entrambi.",
    ],
    sections: [
      {
        heading: "Trigger, automazioni e macro a confronto",
        blocks: [
          {
            type: "p",
            text: "Tutti e tre gli strumenti modificano i ticket, ma partono in modo diverso. Come la spiega Zendesk stessa, la differenza tra trigger e automazioni non sta nelle azioni che possono eseguire, ma nelle condizioni che li attivano. Le macro non hanno alcuna condizione, perché nulla valuta il ticket in automatico: è l'agente a decidere quando applicarne una.",
          },
          {
            type: "table",
            caption: "I tre strumenti di regole aziendali di Zendesk",
            head: ["Strumento", "Cosa lo attiva", "Condizioni", "Uso tipico"],
            rows: [
              [
                "Trigger",
                "Un ticket viene creato o aggiornato (si attiva subito)",
                "Sì",
                "Instradare i nuovi ticket, impostare campi, inviare notifiche",
              ],
              [
                "Automazione",
                "Pianificazione oraria, in base al tempo trascorso",
                "Sì, di solito condizioni 'Hours since'",
                "Promemoria, escalation dei ticket fermi, chiusura dei ticket risolti",
              ],
              [
                "Macro",
                "Un agente la applica manualmente",
                "No, solo azioni",
                "Risposte predefinite e aggiornamenti ripetibili di più campi",
              ],
            ],
          },
          {
            type: "p",
            text: "I tre strumenti funzionano bene insieme. Uno schema comune è una macro che aggiunge un tag, il quale attiva subito un trigger che cerca proprio quel tag. Tieni presente che una macro può fare solo ciò che l'utente corrente è autorizzato a fare, quindi un agente con permessi limitati potrebbe non riuscire ad applicare tutte le modifiche contenute in una macro.",
          },
        ],
      },
      {
        heading: "Come funziona l'ordine dei trigger",
        blocks: [
          {
            type: "p",
            text: "Ogni volta che un ticket viene creato o aggiornato, tutti i trigger dei ticket vengono eseguiti su di esso in un ciclo, nell'ordine in cui sono elencati. Se un trigger aggiorna il ticket, il ciclo ricomincia e tutti i trigger vengono eseguiti di nuovo, tranne quelli che si sono già attivati e hanno aggiornato il ticket. Così la modifica fatta da un trigger può rendere vere le condizioni di un altro, anche se un attimo prima non lo erano.",
          },
          {
            type: "p",
            text: "L'ordine consigliato da Zendesk per i trigger dei ticket:",
          },
          {
            type: "ol",
            items: [
              "Trigger che modificano valori del ticket come stato, priorità o altri campi.",
              "Trigger che assegnano il ticket.",
              "Trigger di notifica, per ultimi, così email e messaggi riflettono lo stato finale del ticket.",
            ],
          },
          {
            type: "p",
            text: "Se usi le categorie di trigger, l'ordine delle categorie deve corrispondere all'ordine in cui vuoi che i trigger vengano eseguiti; lo modifichi con Edit order nell'elenco dei trigger. Usa la condizione Ticket | Is | Created per le regole che devono agire solo sui nuovi ticket (il routing è il caso classico) e Ticket | Is | Updated per cose come le notifiche di aggiornamento. I trigger dei ticket non vengono eseguiti sui ticket chiusi.",
          },
        ],
      },
      {
        heading: "Ogni quanto girano le automazioni Zendesk e come evitare i loop",
        blocks: [
          {
            type: "p",
            text: "Le automazioni girano una volta ogni ora su tutti i ticket non chiusi. La tempistica è approssimativa: un'automazione parte in un momento qualsiasi nel corso dell'ora, non a un minuto fisso. Ogni automazione può agire su un massimo di 1.000 ticket all'ora e quelli in eccesso aspettano le esecuzioni successive.",
          },
          {
            type: "p",
            text: "Poiché le automazioni ricontrollano gli stessi ticket ogni ora, Zendesk richiede che ognuna includa una condizione vera una sola volta o un'azione che annulli almeno una condizione. Senza, le condizioni continuano a corrispondere e l'automazione si attiva in un loop infinito. L'automazione standard 'close ticket after solved' lo fa in modo naturale: chiudere il ticket lo esclude dalla condizione 'Status is Solved'. Per le automazioni personalizzate, la soluzione abituale è aggiungere un tag ed escluderlo nelle condizioni.",
          },
          {
            type: "note",
            text: "Per le condizioni temporali, Zendesk consiglia 'Hours since ... greater than' invece di 'Hours since ... is'. Una condizione 'is' può essere saltata del tutto se l'automazione non gira proprio in quell'ora. Anche una condizione 'greater than' ha comunque bisogno di un'azione o di un tag che la annulli.",
          },
        ],
      },
      {
        heading: "Opzioni di routing per i ticket in arrivo",
        blocks: [
          {
            type: "p",
            text: "I trigger possono instradare i ticket impostando un gruppo, un assegnatario o delle competenze, ma Zendesk ha anche funzioni di routing dedicate:",
          },
          {
            type: "ul",
            items: [
              "Il routing omnicanale assegna agli agenti i ticket provenienti da email, chiamate e messaggistica in base alla loro disponibilità e capacità, e può tenere conto anche di priorità e competenze.",
              "I trigger possono aggiungere competenze ai ticket e contrassegnarle come obbligatorie o facoltative. Le competenze obbligatorie limitano gli agenti idonei; quelle facoltative possono scadere, così il ticket torna al normale modello di routing.",
              "Il routing autonomo basato sulle competenze è un modello pull: i ticket vengono ordinati per competenza e gli agenti prendono il lavoro da viste basate sulle competenze. Non si può usare con i ticket vocali o di messaggistica.",
            ],
          },
          {
            type: "p",
            text: "Per le chiamate, il routing omnicanale è l'unico modo in cui i trigger possono influire sul routing, perché un ticket viene creato non appena una chiamata entra in coda. Le funzioni di routing variano in base al piano, quindi verifica cosa include il tuo prima di progettare attorno alle competenze.",
          },
        ],
      },
      {
        heading: "Webhook e API di Zendesk",
        blocks: [
          {
            type: "p",
            text: "Quando una regola deve comunicare qualcosa a un altro sistema, usa un webhook. Lo crei nell'Admin Center e scegli il tipo di connessione: eventi Zendesk, oppure trigger o automazione. Un webhook può usarne uno solo, non entrambi, e il metodo di connessione non si può cambiare in seguito. In un trigger o in un'automazione, aggiungi l'azione 'Notify webhook', seleziona il webhook e inserisci il payload. Il corpo della richiesta può essere JSON, XML o form-encoded e il payload non può superare i 16.000 caratteri. Ogni webhook ha un'opzione Test webhook per verificare la richiesta prima che vada in produzione.",
          },
          {
            type: "p",
            text: "Quando la logica deve leggere dati, prendere decisioni nel codice o riscrivere sui ticket, usa la Ticketing API. I ticket si creano con una POST all'endpoint dei ticket e si aggiornano con una PUT all'URL del singolo ticket, con varianti bulk per molti ticket insieme. Le richieste possono autenticarsi con un token di accesso OAuth inviato in un header Bearer.",
          },
          {
            type: "p",
            text: "Buoni primi candidati per l'automazione Zendesk:",
          },
          {
            type: "ul",
            items: [
              "Instradare i nuovi ticket al gruppo giusto in base a canale, modulo, lingua o parole chiave.",
              "Promemoria ed escalation per i ticket che aspettano una risposta da troppo tempo.",
              "Pubblicare i ticket ad alta priorità o VIP in un canale Slack tramite un webhook.",
              "Importare in un ticket i dati dell'ordine o dell'account tramite l'API prima che un agente lo apra.",
            ],
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab lavora sul tuo account Zendesk esistente, senza cambiare piattaforma, usando l'API di Zendesk, i webhook e Make o n8n dove servono. Ticket Routing & Categorization è un progetto una tantum nella fascia 600–950 USD; Custom Automation, per flussi che coinvolgono più sistemi, costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio, documentazione di base e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane. Puoi iniziare con una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ogni quanto girano le automazioni Zendesk?",
        a: "Una volta ogni ora, su tutti i ticket non chiusi. Il minuto esatto all'interno dell'ora varia e ogni automazione può agire su un massimo di 1.000 ticket all'ora.",
      },
      {
        q: "Qual è la differenza tra un trigger e un'automazione in Zendesk?",
        a: "I trigger sono basati sugli eventi e si attivano subito quando un ticket viene creato o aggiornato. Le automazioni sono basate sul tempo e girano ogni ora. Entrambi possono eseguire gli stessi tipi di azioni.",
      },
      {
        q: "Perché la mia automazione Zendesk continua ad attivarsi sullo stesso ticket?",
        a: "Probabilmente le manca una condizione o un'azione di annullamento. Aggiungi un'azione che renda falsa una delle sue condizioni, per esempio un tag escluso dalle condizioni.",
      },
      {
        q: "Un trigger Zendesk può chiamare un sistema esterno?",
        a: "Sì. Crea un webhook collegato a trigger e automazioni, poi aggiungi al trigger l'azione 'Notify webhook' con il payload che vuoi inviare.",
      },
      {
        q: "Le categorie di trigger cambiano l'ordine di esecuzione dei trigger?",
        a: "Sì. I trigger vengono eseguiti nell'ordine dell'elenco e l'ordine delle categorie deve corrispondere a quello in cui vuoi che vengano eseguiti. Lo modifichi con Edit order nell'elenco dei trigger dei ticket.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    key: "freshdesk-automation",
    slug: "automazione-freshdesk",
    category: "helpdesks",
    navLabel: "Automazione Freshdesk",
    primaryKeyword: "automazione Freshdesk",
    title: "Automazione Freshdesk: regole, assegnazione e webhook",
    description:
      "Come funziona l'automazione Freshdesk: regole Ticket Creation, Ticket Updates e Hourly Triggers, assegnazione round-robin e per competenze, webhook e API.",
    h1: "Automazione Freshdesk: tipi di regole, assegnazione e webhook",
    intro:
      "L'automazione in Freshdesk si basa su tre tipi di regole: le regole Ticket Creation per i nuovi ticket, le regole Ticket Updates per gli eventi sui ticket esistenti e gli Hourly Triggers per i controlli basati sul tempo. L'assegnazione (round-robin, bilanciata sul carico o per competenze) decide chi riceve il ticket, mentre le azioni webhook e l'API di Freshdesk collegano il tutto ad altri sistemi.",
    keyFacts: [
      "Freshdesk ha tre tipi di regole di automazione: Ticket Creation, Ticket Updates e Hourly Triggers.",
      "Gli Hourly Triggers (in precedenza Time Triggers) girano ogni ora, su ore di calendario, e solo sui ticket aggiornati negli ultimi 30 giorni.",
      "Le regole Ticket Creation possono eseguire solo la prima regola corrispondente oppure tutte le regole corrispondenti.",
      "Freshdesk esegue fino a 1.000 chiamate webhook all'ora dalle regole di automazione; le chiamate in più vengono messe in buffer.",
      "L'assegnazione basata sul carico conta nel carico di un agente solo i ticket con un timer SLA attivo.",
    ],
    sections: [
      {
        heading: "I tre tipi di regole di automazione di Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Se usi Freshdesk da un po', potresti conoscerle con i loro vecchi nomi. Freshdesk le chiamava Dispatch'r, Observer e Supervisor, e in seguito le ha riunite tutte e tre in un unico modulo Automations, con una scheda separata per ogni tipo di regola.",
          },
          {
            type: "table",
            caption: "Tipi di regole di automazione di Freshdesk",
            head: ["Tipo di regola", "Nome precedente", "Quando viene eseguita", "Ideale per"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Una volta, quando viene creato un nuovo ticket",
                "Categorizzare, assegnare priorità e instradare i ticket in arrivo",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Quando si verifica un evento definito su un ticket esistente",
                "Reagire a risposte, note, cambi di stato o di campi",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Ogni ora, secondo una pianificazione",
                "Promemoria, escalation, chiusura automatica dei ticket inattivi",
              ],
            ],
          },
          {
            type: "p",
            text: "Le regole Ticket Creation confrontano ogni nuovo ticket con le tue condizioni ed eseguono le azioni quando c'è una corrispondenza. Scegli tu se Freshdesk deve eseguire solo la prima regola corrispondente o tutte le regole corrispondenti. Con la prima corrispondenza è l'ordine dell'elenco a decidere quale regola vince, quindi le regole specifiche vanno sopra quelle generiche.",
          },
        ],
      },
      {
        heading: "Regole Ticket Updates: eventi, condizioni, azioni",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates è l'unico tipo di regola in cui configuri degli eventi. Una regola ha bisogno di almeno un evento e si attiva quando uno qualsiasi di essi corrisponde. Imposti anche chi ha eseguito l'azione: un agente, il richiedente, uno dei due, un collaboratore o il System stesso.",
          },
          {
            type: "ul",
            items: [
              "Eventi: cambia una proprietà del ticket, viene aggiornato un agente o un gruppo, viene aggiunta una nota, viene inviata una risposta, arriva il feedback del cliente; gli eventi di sistema includono la mancata consegna di un'email e un ticket che va in ritardo.",
              "Condizioni: proprietà del ticket (inclusi tag e campi personalizzati), dati di contatto del richiedente e campi dell'azienda.",
              "Azioni: impostare campi, riassegnare agente o gruppo, aggiungere tag o osservatori, aggiungere una nota, inviare un'email a un agente, a un gruppo o al richiedente, segnare come spam o eliminare, oppure attivare un webhook.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates è anche l'unico tipo di regola che può creare un nuovo ticket o aggiungere un messaggio a un thread. L'elenco esatto degli eventi dipende dal tuo piano e dalle funzioni che hai attivato.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: regole basate sul tempo",
        blocks: [
          {
            type: "p",
            text: "Gli Hourly Triggers non aspettano un evento. Analizzano i ticket ogni ora e agiscono su quelli che corrispondono. Questa pianificazione determina il modo in cui li scrivi:",
          },
          {
            type: "ul",
            items: [
              "Il limite di tempo che imposti dovrebbe essere di almeno un'ora, dato che la regola gira solo ogni ora.",
              "Contano le ore di calendario, non le ore lavorative.",
              "Elaborano solo i ticket aggiornati negli ultimi 30 giorni.",
              "Lavorano solo sulle proprietà del ticket, non su quelle del contatto o dell'azienda.",
            ],
          },
          {
            type: "note",
            text: "Una regola basata sul tempo che non è definita con cura verrà eseguita ogni ora consecutiva sullo stesso ticket. Una soluzione comune è abbinare una condizione temporale 'greater than' a una condizione 'less than', così il ticket corrisponde una sola volta.",
          },
        ],
      },
      {
        heading: "Assegnazione automatica dei ticket",
        blocks: [
          {
            type: "p",
            text: "Di solito le regole di automazione impostano il gruppo; l'assegnazione decide quale agente di quel gruppo riceve il ticket. L'assegnazione automatica di Freshdesk si basa sul motore Omniroute e offre tre metodi per ogni gruppo:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: fa ruotare i ticket tra gli agenti disponibili del gruppo, salta quelli già al massimo della capacità e assegna il ticket all'agente idoneo che ne ha ricevuto uno da più tempo.",
              "Bilanciata sul carico: invia ogni nuovo ticket all'agente meno carico finché tutti gli agenti non raggiungono il massimo configurato. Contano nel carico solo i ticket con un timer SLA attivo, quindi risolvere un ticket o spostarlo in uno stato con SLA disattivato libera capacità.",
              "Per competenze: gli agenti hanno competenze ordinate per priorità e un nuovo ticket va a un agente con la prima competenza corrispondente. Freshdesk consiglia una competenza di riserva, con il gruppo come condizione, associata per ultima a tutti gli agenti, così nessun ticket resta non assegnato.",
            ],
          },
          {
            type: "p",
            text: "I metodi disponibili dipendono dal tuo piano, quindi controlla le impostazioni del gruppo prima di sceglierne uno. I ticket assegnati manualmente contano comunque nel carico e possono portare un agente oltre il limite, il che sospende l'assegnazione automatica a quell'agente finché il suo conteggio non scende.",
          },
        ],
      },
      {
        heading: "Webhook e API di Freshdesk",
        blocks: [
          {
            type: "p",
            text: "In Freshdesk un webhook è un'azione di automazione che effettua una chiamata API verso un altro sistema. Scegli il tipo di richiesta e l'URL di callback, e sia l'URL sia il payload possono contenere segnaposto come {{ticket.id}}. Se fai una chiamata GET tramite un webhook, la regola non può usare la risposta; per questo Freshdesk rimanda alla sua azione Trigger API.",
          },
          {
            type: "p",
            text: "Freshdesk esegue fino a 1.000 chiamate webhook all'ora dalle regole di automazione. Le chiamate oltre questo limite vengono messe in buffer finché non si libera nuova capacità nell'ora successiva, quindi i flussi ad alto volume non dovrebbero dipendere da una consegna istantanea.",
          },
          {
            type: "p",
            text: "Per le integrazioni che girano fuori da Freshdesk, usa la REST API all'indirizzo your-domain.freshdesk.com/api/v2/. Le richieste si autenticano con la tua chiave API come nome utente e un valore fittizio qualsiasi come password. I limiti di frequenza si applicano per account e per minuto e dipendono dal piano; una risposta 429 significa che il limite è esaurito e l'header Retry-After indica quanti secondi aspettare. L'elenco dei ticket restituisce per impostazione predefinita solo gli ultimi 30 giorni, quindi usa il filtro updated_since per i ticket più vecchi.",
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab lavora sul tuo account Freshdesk esistente, senza cambiare piattaforma, usando regole di automazione, webhook, l'API di Freshdesk e Make o n8n dove sono utili. Ticket Routing & Categorization è un progetto una tantum nella fascia 600–950 USD; Custom Automation costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio e documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. Il primo passo è una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quali tipi di regole di automazione ci sono in Freshdesk?",
        a: "Le regole Ticket Creation girano sui nuovi ticket, le regole Ticket Updates quando si verifica un evento su un ticket esistente e gli Hourly Triggers secondo una pianificazione, ogni ora.",
      },
      {
        q: "Che fine hanno fatto Dispatch'r, Observer e Supervisor?",
        a: "Sono i vecchi nomi degli stessi tipi di regole: Dispatch'r per la creazione dei ticket, Observer per gli aggiornamenti dei ticket e Supervisor per le regole basate sul tempo. Freshdesk li ha riuniti in un unico modulo Automations.",
      },
      {
        q: "Gli Hourly Triggers di Freshdesk usano l'orario lavorativo?",
        a: "No. Girano su ore di calendario e solo sui ticket aggiornati negli ultimi 30 giorni.",
      },
      {
        q: "Quanti webhook possono inviare le automazioni di Freshdesk?",
        a: "Freshdesk esegue fino a 1.000 chiamate webhook all'ora dalle regole di automazione. Le chiamate oltre il limite vengono messe in buffer finché non si libera capacità.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "automazione-jira-service-management",
    category: "helpdesks",
    navLabel: "Automazione Jira Service Mgmt",
    primaryKeyword: "automazione Jira Service Management",
    title: "Automazione Jira Service Management: flussi, SLA, webhook",
    description:
      "Automazione Jira Service Management: trigger, condizioni e azioni, trigger SLA e di approvazione, smart value, webhook, code e tipi di richiesta.",
    h1: "Automazione Jira Service Management: come funzionano flussi, SLA e webhook",
    intro:
      "L'automazione in Jira Service Management si basa su flussi (in precedenza chiamati regole) composti da tre parti: un trigger che li avvia, condizioni facoltative che filtrano gli elementi di lavoro su cui agiscono e azioni che svolgono il lavoro. I trigger specifici per i servizi, come le violazioni degli SLA e le approvazioni, insieme agli smart value e alle richieste web, ti permettono di automatizzare gran parte del lavoro di smistamento, escalation e notifica attorno alle tue code.",
    keyFacts: [
      "Ogni flusso di automazione è composto da un trigger, condizioni facoltative e una o più azioni, eseguiti dall'alto verso il basso.",
      "Jira Service Management aggiunge trigger come 'SLA threshold breached' e 'Approval required'.",
      "L'azione 'Send web request' chiama sistemi esterni; un trigger webhook in entrata permette a sistemi esterni di avviare un flusso.",
      "Gli smart value come {{issue.key}} inseriscono i dati dell'elemento di lavoro in campi, commenti e messaggi.",
      "Ogni SLA ha le proprie condizioni di avvio, pausa e arresto; la pausa è facoltativa.",
    ],
    sections: [
      {
        heading: "Trigger, condizioni e azioni",
        blocks: [
          {
            type: "p",
            text: "La documentazione di Atlassian ora chiama le regole di automazione 'flussi'; troverai entrambi i termini e significano la stessa cosa. Puoi creare un flusso da zero, da un modello o con Rovo e, una volta attivato, i suoi passaggi vengono eseguiti in ordine dall'alto verso il basso.",
          },
          {
            type: "table",
            caption: "Le tre parti di un flusso di automazione di Jira Service Management",
            head: ["Parte", "Cosa fa", "Esempi"],
            rows: [
              [
                "Trigger",
                "Avvia il flusso quando succede qualcosa",
                "Elemento di lavoro creato, elemento di lavoro in transizione, commento aggiunto, soglia SLA superata, approvazione richiesta, pianificazione, webhook in entrata",
              ],
              [
                "Condizione (facoltativa)",
                "Limita gli elementi di lavoro su cui agisce il flusso",
                "L'elemento di lavoro corrisponde a un filtro JQL, il commento è interno o pubblico, tipo di utente",
              ],
              [
                "Azione",
                "Svolge il lavoro",
                "Transizione, modifica di un campo, aggiunta di un commento, invio di un'email, invio di una richiesta web, invio di un messaggio Slack o Microsoft Teams",
              ],
            ],
          },
          {
            type: "p",
            text: "Due trigger sono specifici del lavoro di assistenza. 'SLA threshold breached' ti permette di scegliere uno SLA e di attivare il flusso quando è stato violato oppure quando sta per esserlo. 'Approval required' si attiva quando viene creato o aggiornato un elemento di lavoro che richiede un'approvazione, oppure quando vengono aggiunti nuovi approvatori. Un trigger pianificato esegue un flusso a intervalli di tempo, utile per controlli periodici come elencare gli elementi di lavoro vicini alla violazione.",
          },
        ],
      },
      {
        heading: "Code, tipi di richiesta e SLA: cosa si automatizza",
        blocks: [
          {
            type: "p",
            text: "In Jira Service Management l'automazione serve soprattutto a mantenere accurate tre strutture:",
          },
          {
            type: "ul",
            items: [
              "Le code sono insiemi filtrati di elementi di lavoro che danno agli agenti una vista mirata del proprio lavoro. Filtrano su campi come stato, tipo di lavoro, assegnatario e priorità, oppure su JQL. Gli agenti non possono creare né modificare le code: lo fanno gli amministratori dello spazio.",
              "I tipi di richiesta sono i moduli che i clienti usano per aprire richieste sul portale. Ogni tipo di richiesta è collegato a un solo tipo di lavoro: il tipo di richiesta gestisce il nome e le impostazioni del portale, mentre il tipo di lavoro contiene il workflow e i campi. Un tipo di lavoro può essere alla base di molti tipi di richiesta.",
              "Gli SLA misurano il tempo rispetto a degli obiettivi. Ogni SLA ha le proprie condizioni di avvio, pausa e arresto; la pausa è facoltativa e si usa di solito mentre si attende la risposta del cliente, e la misurazione si ferma non appena si verifica una qualsiasi condizione di arresto.",
            ],
          },
          {
            type: "p",
            text: "In pratica, i flussi impostano i campi su cui filtrano le code e gli obiettivi SLA. Se un flusso imposta la priorità o un campo personalizzato in base al tipo di richiesta o al contenuto del messaggio, la coda giusta e l'obiettivo SLA giusto prendono in carico l'elemento di lavoro in automatico.",
          },
        ],
      },
      {
        heading: "Smart value",
        blocks: [
          {
            type: "p",
            text: "Gli smart value permettono a un flusso di inserire dati dell'elemento di lavoro in campi, commenti, email e corpi delle richieste web. {{issue.key}} restituisce la chiave, per esempio PROJ-123. Gli altri campi seguono lo stesso schema usando il nome del campo, compresi i campi personalizzati; se due campi hanno lo stesso nome, usa invece l'ID del campo personalizzato.",
          },
          {
            type: "p",
            text: "L'interfaccia di Atlassian ora dice 'work item' dove prima diceva 'issue', ma la sintassi degli smart value nella sua documentazione usa ancora il prefisso issue. Sui campi a più valori puoi iterare con la sintassi #, chiusa con {{/}}.",
          },
        ],
      },
      {
        heading: "Webhook e sistemi esterni",
        blocks: [
          {
            type: "p",
            text: "I webhook funzionano in entrambe le direzioni:",
          },
          {
            type: "ul",
            items: [
              "In uscita: l'azione 'Send web request' chiama l'API di un altro sistema quando un flusso viene eseguito e può restituire i dati della risposta ai passaggi successivi. Il sistema che riceve deve accettare le richieste provenienti dalla rete di Atlassian.",
              "In entrata: il trigger webhook in entrata assegna a un flusso un URL proprio, così un sistema esterno (un chatbot, uno strumento di fatturazione, uno strumento di monitoraggio) può avviare il flusso con una richiesta HTTP.",
              "Strumenti di chat: le azioni 'Send Slack message' e 'Send Microsoft Teams message' pubblicano nei canali, con smart value nel testo del messaggio.",
            ],
          },
        ],
      },
      {
        heading: "Limiti di utilizzo e cosa automatizzare per primo",
        blocks: [
          {
            type: "p",
            text: "A ottobre 2026, Jira Cloud misura l'utilizzo dell'automazione per prodotto e per mese, con limiti che dipendono dal piano. Atlassian spiega come viene conteggiato l'utilizzo nella pagina 'How is your automation usage calculated'; controllala, insieme al tuo utilizzo attuale, prima di aggiungere flussi pianificati ad alta frequenza.",
          },
          {
            type: "p",
            text: "Primi flussi comuni per un service desk:",
          },
          {
            type: "ul",
            items: [
              "Impostare priorità, componente o assegnatario alla creazione in base al tipo di richiesta e al contenuto della richiesta.",
              "Pubblicare un messaggio in un canale di escalation quando uno SLA sta per essere violato.",
              "Inviare un promemoria al cliente quando una richiesta è in attesa di una sua risposta, poi risolverla con un commento dopo un tempo stabilito.",
              "Inviare le nuove richieste ad alta priorità a un sistema esterno tramite 'Send web request'.",
            ],
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab lavora sul tuo sito Jira Service Management esistente, senza cambiare piattaforma, combinando l'automazione nativa con API, webhook e Make o n8n quando un flusso deve raggiungere altri strumenti. Ticket Routing & Categorization costa 600–950 USD una tantum; Custom Automation costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio e documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. Inizia con una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Regole e flussi di automazione in Jira sono la stessa cosa?",
        a: "Sì. La documentazione e l'interfaccia più recenti di Atlassian usano 'flusso' per quella che si chiamava regola di automazione. La struttura è la stessa: trigger, condizioni e azioni.",
      },
      {
        q: "L'automazione di Jira Service Management può reagire alle violazioni degli SLA?",
        a: "Sì. Il trigger 'SLA threshold breached' ti permette di scegliere uno SLA e di attivare il flusso quando è stato violato oppure quando sta per esserlo.",
      },
      {
        q: "Come invio dati da Jira Service Management a un altro sistema?",
        a: "Usa l'azione 'Send web request' in un flusso. Chiama l'API dell'altro sistema quando il flusso viene eseguito e può restituire i dati della risposta ai passaggi successivi.",
      },
      {
        q: "Qual è la differenza tra un tipo di richiesta e un tipo di lavoro?",
        a: "Il tipo di richiesta è il modulo rivolto al cliente sul portale; il tipo di lavoro che c'è dietro contiene il workflow e i campi. Ogni tipo di richiesta usa un tipo di lavoro e un tipo di lavoro può servire molti tipi di richiesta.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "slack-support-automation",
    slug: "automazione-assistenza-clienti-slack",
    category: "helpdesks",
    navLabel: "Automazione supporto su Slack",
    primaryKeyword: "automazione assistenza clienti Slack",
    title: "Automazione assistenza clienti Slack: avvisi ed escalation",
    description:
      "Assistenza clienti su Slack automatizzata: avvisi di escalation, Workflow Builder, webhook in entrata, app Bolt, Zendesk, Freshdesk e Jira, Slack Connect.",
    h1: "Automazione dell'assistenza clienti su Slack: avvisi, escalation e canali con i clienti",
    intro:
      "Per la maggior parte dei team di assistenza, Slack non è il canale da cui scrivono i clienti. È il luogo in cui il team gestisce le escalation, riceve gli avvisi e si coordina. Automatizzare l'assistenza clienti su Slack significa portare gli eventi giusti dei ticket nel canale giusto, trasformare i messaggi Slack in ticket quando serve e, per i team B2B, assistere i clienti direttamente nei canali Slack Connect.",
    keyFacts: [
      "I flussi di lavoro di Workflow Builder possono partire da un link, un webhook, una pianificazione, un messaggio pubblicato, una reazione con emoji o l'ingresso in un canale.",
      "Un webhook in entrata è un URL univoco legato a un solo canale; per pubblicare un messaggio invii a quell'URL un payload JSON con una POST.",
      "In generale Slack consente alle app di pubblicare non più di un messaggio al secondo per canale.",
      "Zendesk, Freshdesk e Jira Service Management offrono ciascuno un'integrazione con Slack per creare ticket e inviare notifiche.",
      "Slack Connect permette a persone di altre organizzazioni di lavorare con te in un canale condiviso.",
    ],
    sections: [
      {
        heading: "Come automatizzare il lavoro di assistenza in Slack",
        blocks: [
          {
            type: "p",
            text: "Ci sono quattro componenti principali, dal no-code al codice personalizzato. Scegli il più semplice che fa al caso tuo.",
          },
          {
            type: "table",
            caption: "Opzioni di automazione Slack per i team di assistenza",
            head: ["Opzione", "Che cos'è", "Ideale per"],
            rows: [
              [
                "Integrazione con l'helpdesk",
                "L'app Slack di Zendesk, Freshdesk o Jira Service Management",
                "Notifiche dei ticket nei canali e creazione di ticket dai messaggi",
              ],
              [
                "Workflow Builder",
                "Lo strumento no-code integrato di Slack per i flussi di lavoro",
                "Moduli di raccolta richieste, checklist di escalation, promemoria pianificati",
              ],
              [
                "Webhook in entrata",
                "Un URL che pubblica un messaggio JSON in un solo canale",
                "Avvisi unidirezionali dal tuo helpdesk, da script o da Make/n8n",
              ],
              [
                "App Slack personalizzata (Bolt)",
                "Una tua app che ascolta eventi e comandi",
                "Azioni bidirezionali: pulsanti, slash command, ricerche in altri sistemi",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integrazioni tra helpdesk e Slack",
        blocks: [
          {
            type: "p",
            text: "Parti da ciò che il tuo helpdesk offre già:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: gli agenti possono creare ticket con la scorciatoia /zendesk, con un'azione sul messaggio che converte un messaggio Slack in ticket, con l'app Zendesk nella barra laterale o con una menzione @zendesk in un canale Slack Connect. I ticket creati in questo modo ricevono il tag created_from_slack. Gli amministratori usano i trigger per decidere quali eventi vengono pubblicati in quali canali, e l'app Zendesk deve essere invitata in ogni canale che riceve notifiche.",
              "Freshdesk: l'app Slack può trasformare un messaggio di un canale in un ticket, con il messaggio come descrizione, e i ticket si possono anche creare da zero dentro Slack. Anche i membri di Slack che non sono agenti Freshdesk possono creare ticket.",
              "Jira Service Management: la chat in Slack collega i canali di richiesta, dove le persone chiedono aiuto, a un canale degli agenti. Gli agenti possono creare un elemento di lavoro reagendo a un messaggio con l'emoji :ticket:, e i tipi di richiesta devono essere collegati a un canale di richiesta per essere disponibili lì.",
            ],
          },
          {
            type: "p",
            text: "Se l'integrazione nativa non copre un evento che ti interessa, ripiega su un webhook in entrata o su Workflow Builder, descritti qui sotto.",
          },
        ],
      },
      {
        heading: "Workflow Builder per l'escalation interna",
        blocks: [
          {
            type: "p",
            text: "Workflow Builder permette a chiunque di creare flussi di lavoro in più passaggi senza codice. Un flusso parte da un trigger: un link condivisibile, un webhook, una pianificazione, l'aggiornamento di un elemento di una lista, un messaggio pubblicato in un canale, l'ingresso di qualcuno in un canale o una reazione con emoji. I passaggi vengono eseguiti nell'ordine che imposti e possono essere azioni Slack come l'invio di un messaggio, passaggi connettore per servizi di terze parti o passaggi personalizzati creati da sviluppatori. Le variabili passano i dati dai passaggi precedenti a quelli successivi, i pulsanti mettono in pausa un flusso finché qualcuno non fa clic e le diramazioni indirizzano le persone su percorsi diversi in base a condizioni.",
          },
          {
            type: "p",
            text: "Usi tipici nell'assistenza: un modulo di escalation avviato da un link che raccoglie l'URL del ticket e la gravità e pubblica un messaggio strutturato in un canale di escalation; un flusso attivato da una reazione con emoji che coinvolge il responsabile di turno; oppure un promemoria settimanale pianificato per rivedere i ticket fermi.",
          },
        ],
      },
      {
        heading: "Webhook in entrata e app Bolt",
        blocks: [
          {
            type: "p",
            text: "Un webhook in entrata è il modo più semplice per inviare avvisi a Slack da qualsiasi sistema. Ogni URL di webhook è legato a un solo canale; invii una HTTP POST con un corpo JSON che contiene un campo text e, facoltativamente, blocchi Block Kit per layout più ricchi. Chiunque abbia l'URL può pubblicare nel tuo workspace, quindi trattalo come una password e tienilo fuori dal codice pubblico.",
          },
          {
            type: "p",
            text: "Attenzione ai volumi. Secondo i limiti di frequenza di Slack, in generale le app non dovrebbero pubblicare più di un messaggio al secondo per canale, sia tramite chat.postMessage sia tramite un webhook in entrata. Brevi picchi sono tollerati, ma i superamenti prolungati ricevono risposte HTTP 429 con un header Retry-After. Per le code molto attive, raggruppa gli avvisi o invia un riepilogo invece di un messaggio per ogni ticket.",
          },
          {
            type: "p",
            text: "Quando ti serve un'interazione bidirezionale, come un pulsante che assegna un ticket o uno slash command che cerca un ordine, crea un'app Slack con Bolt, il framework di Slack per JavaScript, Python e Java. Un'app Bolt ascolta eventi e slash command nel tuo workspace e risponde, per esempio chiamando l'API del tuo helpdesk.",
          },
        ],
      },
      {
        heading: "Slack Connect per i canali con i clienti",
        blocks: [
          {
            type: "p",
            text: "Slack Connect ti permette di condividere un canale con persone di altre organizzazioni, ognuna dal proprio Slack. I team di assistenza B2B lo usano come canale dedicato per ogni cliente chiave. Inviti un'organizzazione esterna dalle impostazioni del canale e scegli un livello di autorizzazione: solo pubblicare, oppure pubblicare, invitare e altro. Gli amministratori possono limitare chi può invitare persone esterne. Un canale Slack Connect può includere fino a 250 organizzazioni, compresa la tua.",
          },
          {
            type: "p",
            text: "Anche i canali con i clienti hanno bisogno del tracciamento dei ticket. L'integrazione di Zendesk supporta le menzioni @zendesk nei canali Slack Connect, con meno opzioni per gli utenti esterni; per altri helpdesk, una piccola app Bolt o un flusso Make/n8n può trasformare in ticket i messaggi contrassegnati.",
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab collega Slack all'helpdesk che usi già (Zendesk, Freshdesk, Jira o strumenti interni) tramite API, webhook e Make o n8n, senza cambiare piattaforma. Automated Reports, con report inviati su Slack o via email, costa 500–900 USD una tantum; Custom Automation per flussi Slack bidirezionali costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio e documentazione di base, e la maggior parte delle configurazioni richiede 1–3 settimane. Inizia con una call di audit gratuita di 30 minuti.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Posso creare ticket dell'helpdesk dai messaggi Slack?",
        a: "Sì. Zendesk e Freshdesk offrono entrambi app Slack che convertono un messaggio in ticket, e gli agenti di Jira Service Management possono creare un elemento di lavoro da un messaggio in un canale di richiesta reagendo con l'emoji :ticket:.",
      },
      {
        q: "Qual è il modo più semplice per inviare avvisi di assistenza su Slack?",
        a: "Usa l'integrazione Slack del tuo helpdesk se copre l'evento che ti serve. Altrimenti, invia un payload JSON a un webhook in entrata di Slack dall'azione webhook del tuo helpdesk oppure da Make o n8n.",
      },
      {
        q: "Un flusso di lavoro Slack può essere avviato da un sistema esterno?",
        a: "Sì. Workflow Builder supporta un trigger webhook, quindi un sistema esterno può avviare un flusso inviandogli una richiesta HTTP.",
      },
      {
        q: "C'è un limite al numero di messaggi che posso pubblicare in un canale?",
        a: "In generale Slack consente alle app di pubblicare non più di un messaggio al secondo per canale. Brevi picchi sono tollerati, ma i superamenti prolungati restituiscono errori HTTP 429.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    key: "intercom-automation",
    slug: "automazione-intercom",
    category: "helpdesks",
    navLabel: "Automazione Intercom",
    primaryKeyword: "automazione Intercom",
    title: "Automazione Intercom: Workflows, Fin, routing e API",
    description:
      "Come funziona l'automazione Intercom: trigger, branch e azioni dei Workflows, assegnazione nelle inbox dei team, Fin AI Agent, Slack e Jira, webhook e REST API.",
    h1: "Automazione Intercom: Workflows, assegnazione, Fin e API",
    intro:
      "L'automazione in Intercom si costruisce soprattutto nei Workflows: un builder visuale in cui un trigger avvia il flusso, i branch scelgono un percorso e le azioni svolgono il lavoro, come aggiungere tag, assegnare o lasciare rispondere Fin. Il metodo di assegnazione di ogni inbox del team decide poi quale collega riceve la conversazione, mentre webhook e REST API coprono tutto ciò che deve succedere fuori da Intercom. Qui sotto trovi come si comporta ogni elemento e da dove iniziare.",
    keyFacts: [
      "I Workflows si creano in un builder visuale e possono essere rivolti ai clienti oppure girare in background per il team.",
      "Con i branch una conversazione segue solo il primo percorso corrispondente; Apply rules esegue ogni percorso corrispondente.",
      "A una conversazione si può applicare un solo SLA; le azioni SLA successive provenienti da altri workflow vengono ignorate.",
      "L'assegnazione bilanciata assegna una conversazione al collega idoneo con meno conversazioni aperte.",
      "Le sottoscrizioni webhook si creano nel Developer Hub, non tramite l'API, e l'endpoint deve usare HTTPS.",
    ],
    sections: [
      {
        heading: "Come si costruiscono i Workflows di Intercom",
        blocks: [
          {
            type: "p",
            text: "I Workflows sono l'unico punto di Intercom in cui automatizzare le conversazioni con i clienti e i processi del team. Li costruisci in un builder visuale a partire da passaggi riutilizzabili. Un workflow può essere rivolto ai clienti, come un bot che saluta e fa lo smistamento, oppure girare in background per il tuo team. Ogni workflow combina gli stessi pochi tipi di passaggi.",
          },
          {
            type: "table",
            caption: "I componenti di un workflow di Intercom",
            head: ["Componente", "Cosa fa", "Esempi"],
            rows: [
              [
                "Trigger",
                "Stabilisce quando parte il workflow e per chi",
                "All'avvio di una conversazione, durante una conversazione, a un evento di un ticket, oppure quando un altro workflow lo richiama come workflow riutilizzabile",
              ],
              [
                "Branches",
                "Verificano le condizioni e mandano la conversazione sul primo percorso la cui condizione corrisponde",
                "Percorsi separati per pubblici, canali o argomenti diversi",
              ],
              [
                "Apply rules",
                "Verifica ogni percorso ed esegue le azioni di ciascuno che corrisponde",
                "Più tag o attributi indipendenti impostati in un unico passaggio",
              ],
              [
                "Azioni",
                "Svolgono il lavoro",
                "Aggiungere un tag, assegnare, posticipare, impostare la priorità, applicare uno SLA, lasciare rispondere Fin, notificare Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "La differenza tra branch e Apply rules conta quando le condizioni si sovrappongono. Con i branch, una conversazione che soddisfa più condizioni segue solo il primo percorso corrispondente, letto dall'alto verso il basso, quindi metti per prime le condizioni più specifiche. Apply rules esegue le azioni di ogni percorso corrispondente, il che è adatto ai passaggi che devono sommarsi anziché farsi concorrenza.",
          },
        ],
      },
      {
        heading: "Automazione della inbox: assegnazione, priorità e SLA",
        blocks: [
          {
            type: "p",
            text: "Gran parte dell'automazione della inbox è un workflow in background fatto di azioni. Assign invia una conversazione a un collega o a una inbox del team scelti. Tag aggiunge un tag, e i tag si creano e si gestiscono nelle impostazioni del workspace. Snooze toglie temporaneamente la conversazione dalla inbox del collega; se il cliente o un collega risponde durante il posticipo, il workflow termina. Set priority indica quanto è urgente la conversazione.",
          },
          {
            type: "p",
            text: "Anche gli SLA si applicano con un'azione, ma a una conversazione se ne può aggiungere uno solo. Se un workflow successivo prova ad applicare un altro SLA, quell'azione viene ignorata, quindi decidi quale workflow gestisce gli SLA prima di crearne diversi.",
          },
          {
            type: "p",
            text: "Quando una conversazione arriva in una inbox del team, è il metodo di assegnazione di quella inbox a decidere chi la riceve: manuale, round robin o bilanciato. L'assegnazione bilanciata assegna ogni nuova conversazione al collega idoneo con meno conversazioni aperte e, in caso di parità, favorisce il collega che ne aspetta una da più tempo. Per essere idoneo, un collega deve essere attivo e sotto il proprio limite di assegnazione. Intercom consiglia l'assegnazione bilanciata per i team di assistenza.",
          },
          {
            type: "note",
            text: "Uno schema semplice per iniziare: un workflow in background sulle nuove conversazioni le tagga per argomento, imposta la priorità, applica un solo SLA e le assegna alla inbox del team giusta. Il metodo di assegnazione della inbox sceglie poi il collega.",
          },
        ],
      },
      {
        heading: "Fin AI Agent nei tuoi workflow",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent è l'agente AI di Intercom che risponde alle domande dei clienti. Risponde in base ai contenuti che gli fornisci: articoli pubblici, documenti, snippet e URL pubblici, che gestisci in Knowledge > Sources. Rispetta il targeting del pubblico sugli articoli di Intercom, quindi non risponde usando articoli privati o riservati che il cliente su Messenger non è autorizzato a vedere.",
          },
          {
            type: "p",
            text: "Fin è supportato su Intercom Messenger per web, iOS e Android, e su email, WhatsApp, SMS, Facebook e Instagram. Nei Workflows, un passaggio 'Let Fin answer' permette a Fin di rispondere in qualsiasi punto del flusso e di continuare finché il problema non è risolto o passato a un collega.",
          },
          {
            type: "p",
            text: "Pianifica il passaggio di consegne con la stessa cura delle risposte. Decidi a quale inbox del team deve andare una conversazione passata a un operatore e costruisci quel percorso nel workflow, così non resta mai non assegnata.",
          },
        ],
      },
      {
        heading: "Webhook e REST API di Intercom",
        blocks: [
          {
            type: "p",
            text: "Quando qualcosa in Intercom deve raggiungere un altro sistema, usa i webhook. Li configuri nel Developer Hub: apri la tua app, vai in Configure, poi Webhooks, e inserisci l'URL del tuo endpoint. L'endpoint deve usare HTTPS e deve accettare una richiesta HEAD, che Intercom usa per validare l'URL. Le sottoscrizioni si possono creare solo nel Developer Hub, non tramite l'API.",
          },
          {
            type: "p",
            text: "Poi scegli i topic. Un topic è un evento all'interno di Intercom che attiva il webhook, e ogni topic è legato a uno o più permessi che la tua app deve avere. Intercom invia una HTTP POST al tuo endpoint per ogni topic a cui ti iscrivi, e ogni payload include il topic e il numero di tentativi di consegna. Il pulsante 'Send a test request' nella sezione dei webhook ti permette di verificare l'endpoint.",
          },
          {
            type: "p",
            text: "Per agire sulle conversazioni dal tuo codice, usa la REST API. Le richieste vanno ad api.intercom.io con un token di accesso inviato come Bearer token nell'header Authorization, più un header Intercom-Version che per impostazione predefinita è la versione configurata nella tua app. Rispondere, per esempio, è una POST a /conversations/{id}/reply con un corpo JSON che imposta il tipo di messaggio, il tipo di autore e il corpo del messaggio.",
          },
          {
            type: "p",
            text: "Buoni primi candidati per l'automazione Intercom:",
          },
          {
            type: "ul",
            items: [
              "Taggare le nuove conversazioni e assegnarle alla inbox del team giusta.",
              "Applicare un solo SLA per conversazione e alzare la priorità per gli account chiave.",
              "Inviare gli eventi delle conversazioni a un webhook, così Make o n8n possono aggiornare altri sistemi.",
              "Pubblicare le conversazioni nuove o passate in escalation in un canale Slack.",
            ],
          },
        ],
      },
      {
        heading: "Integrazioni con Slack e Jira",
        blocks: [
          {
            type: "p",
            text: "Per gli avvisi su Slack, imposta lo scopo di un canale Slack su solo notifiche, poi aggiungi a un workflow un passaggio 'Notify Slack'. L'app Intercom pubblica la notifica e le notifiche successive per la stessa conversazione compaiono come risposte nel thread sotto il messaggio originale. Le risposte scritte in quel thread non vengono inviate alla conversazione di Intercom, quindi i colleghi continuano a rispondere ai clienti in Intercom.",
          },
          {
            type: "p",
            text: "Per le escalation verso il team di sviluppo, l'app Jira for Tickets di Intercom può creare automaticamente issue Jira dai tipi di ticket che specifichi, riportare gli stati delle issue Jira sui ticket di Intercom e sincronizzare le note. La sua automazione di base mappa solo titolo e descrizione; per altri campi usa la sua automazione personalizzata basata sui modelli di Workflows. Non crea issue direttamente dalle conversazioni, quindi una conversazione va prima convertita in ticket.",
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab lavora sugli strumenti che usi già, senza cambiare piattaforma, usando API, webhook e Make o n8n. Intercom ha sia una REST API sia i webhook, quindi quasi certamente si può collegare; la configurazione specifica si conferma in una call di audit gratuita di 30 minuti. Ticket Routing & Categorization è un progetto una tantum nella fascia 600–950 USD e Custom Automation, per flussi che coinvolgono più sistemi, costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio, documentazione di base e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qual è la differenza tra branch e Apply rules nei Workflows di Intercom?",
        a: "I branch mandano la conversazione solo sul primo percorso la cui condizione corrisponde, verificando dall'alto verso il basso. Apply rules verifica ogni percorso ed esegue le azioni di ciascuno che corrisponde.",
      },
      {
        q: "Quale metodo di assegnazione consiglia Intercom per i team di assistenza?",
        a: "L'assegnazione bilanciata. Assegna ogni conversazione al collega attivo, sotto il proprio limite di assegnazione, con meno conversazioni aperte; in caso di parità vince chi aspetta da più tempo.",
      },
      {
        q: "Quali contenuti usa Fin AI Agent per rispondere ai clienti?",
        a: "Articoli pubblici, documenti, snippet e URL pubblici che aggiungi in Knowledge > Sources. Rispetta il targeting del pubblico degli articoli, quindi non risponde usando articoli che il cliente non può vedere.",
      },
      {
        q: "Posso creare sottoscrizioni webhook di Intercom tramite l'API?",
        a: "No. Le sottoscrizioni webhook si configurano nel Developer Hub. L'endpoint deve usare HTTPS e accettare una richiesta HEAD, che Intercom usa per validarlo.",
      },
      {
        q: "I colleghi possono rispondere ai clienti dalle notifiche Slack di Intercom?",
        a: "No. In un canale Slack di sole notifiche, le risposte nel thread di una notifica non vengono inviate alla conversazione di Intercom.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    key: "hubspot-service-hub-automation",
    slug: "automazione-hubspot-service-hub",
    category: "helpdesks",
    navLabel: "Automazione HubSpot Service Hub",
    primaryKeyword: "automazione HubSpot Service Hub",
    title: "Automazione HubSpot Service Hub: ticket, workflow, SLA",
    description:
      "Automazione HubSpot Service Hub: canali e routing dell'help desk, pipeline e stati dei ticket, obiettivi SLA, workflow sui ticket, chatbot, webhook e API.",
    h1: "Automazione HubSpot Service Hub: help desk, ticket, workflow e API",
    intro:
      "L'automazione in HubSpot Service Hub ruota attorno al ticket: i canali dell'help desk creano i ticket, il routing li assegna, pipeline e stati ne seguono l'avanzamento e i workflow basati sui ticket agiscono su di essi. I chatbot basati su regole raccolgono i dettagli prima ancora che esista un ticket, mentre l'azione webhook dei workflow e la CRM API collegano HubSpot a tutto il resto. Qui sotto trovi cosa fa ogni elemento e da dove iniziare.",
    keyFacts: [
      "Per impostazione predefinita, l'help desk crea automaticamente i ticket da ogni canale che gli colleghi.",
      "La Support Pipeline predefinita ha quattro stati dei ticket: New, Waiting on contact, Waiting on us e Closed.",
      "Gli obiettivi SLA dell'help desk possono misurare il tempo alla prima risposta, il tempo alla risposta successiva e il tempo di chiusura.",
      "L'azione webhook dei workflow accetta solo URL che iniziano con HTTPS.",
      "I ticket si creano tramite l'API con una POST a /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Cosa puoi automatizzare in HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "L'automazione di Service Hub è distribuita su diversi strumenti che agiscono tutti sul record del ticket. Decidi dove deve stare una regola prima di crearla: la maggior parte dei problemi nasce dalla stessa logica presente in due punti.",
          },
          {
            type: "table",
            caption: "Dove si trova ogni tipo di automazione di Service Hub",
            head: ["Strumento", "Cosa automatizza", "Uso tipico"],
            rows: [
              [
                "Canali e routing dell'help desk",
                "La creazione di ticket dai canali collegati e la loro assegnazione",
                "Ogni email o chat di assistenza diventa un ticket e arriva al team giusto",
              ],
              [
                "Pipeline e stati dei ticket",
                "Le fasi che un ticket attraversa e se ciascuna conta come aperta o chiusa",
                "Pipeline separate per diversi tipi di lavoro di assistenza",
              ],
              [
                "Obiettivi SLA",
                "Target per i tempi di prima risposta, risposta successiva e chiusura",
                "Un obiettivo di risposta più rapido per la chat che per l'email",
              ],
              [
                "Workflow basati sui ticket",
                "Azioni sui ticket che soddisfano i trigger di iscrizione",
                "Rotazione dei proprietari, aggiornamento delle proprietà, follow-up ritardati",
              ],
              [
                "Chatbot basati su regole",
                "Domande, creazione di ticket e passaggio a un operatore in chat",
                "Raccogliere i dettagli dell'ordine prima che intervenga un agente",
              ],
              [
                "Webhook e API",
                "Inviare all'esterno i dati dei ticket e creare o aggiornare ticket da altri sistemi",
                "Sincronizzare i ticket con Jira o con strumenti interni",
              ],
            ],
          },
        ],
      },
      {
        heading: "Canali e routing dell'help desk",
        blocks: [
          {
            type: "p",
            text: "L'help desk è lo spazio di lavoro di HubSpot per l'assistenza basata sui ticket. Puoi collegargli canali di chat, email, moduli, chiamate e Facebook Messenger. Per impostazione predefinita, i ticket vengono creati automaticamente da ogni canale collegato, e HubSpot consiglia di collegare tutti i tuoi canali di assistenza, perché ai ticket provenienti da canali non collegati potrebbero mancare l'oggetto e il thread nell'help desk.",
          },
          {
            type: "p",
            text: "Il routing si imposta per canale. Quando colleghi un'email del team, per esempio, scegli pipeline, stato e priorità predefiniti per i nuovi ticket, poi un'opzione di routing:",
          },
          {
            type: "ul",
            items: [
              "Utenti o team specifici.",
              "Il proprietario del contatto.",
              "Il routing per competenze, che abbina i ticket alle competenze degli agenti.",
              "Un workflow di assegnazione, quando ti serve una logica che va oltre le opzioni integrate.",
              "Nessuno, che lascia i ticket nella vista Unassigned perché gli agenti li prendano in carico.",
            ],
          },
          {
            type: "note",
            text: "Il routing automatico e quello per competenze dipendono dalle tue postazioni e dal tuo abbonamento. Verifica cosa include il tuo account prima di progettare attorno a una specifica opzione di routing.",
          },
        ],
      },
      {
        heading: "Pipeline, stati dei ticket e obiettivi SLA",
        blocks: [
          {
            type: "p",
            text: "I ticket avanzano lungo una pipeline e, per i ticket, le fasi della pipeline si chiamano stati. La Support Pipeline predefinita ne ha quattro: New, Waiting on contact, Waiting on us e Closed. Gestisci le pipeline in Settings > Objects > Tickets > Pipelines, e ogni stato che aggiungi deve essere contrassegnato come Open o Closed.",
          },
          {
            type: "p",
            text: "Questa scelta guida l'automazione. Quando un ticket passa a uno stato chiuso, la sua Close date viene impostata su oggi; se torna a uno stato aperto, la Close date viene cancellata. Puoi modificare questo comportamento per ogni pipeline. Poiché workflow e report filtrano in base allo stato, mantieni gli stati pochi e inequivocabili.",
          },
          {
            type: "p",
            text: "Gli obiettivi SLA nell'help desk fissano target per il tempo alla prima risposta, il tempo alla risposta successiva e il tempo di chiusura. Un obiettivo può valere per tutti i ticket, per i ticket con un determinato valore di proprietà o per una combinazione di proprietà, e ogni regola può essere limitata a orari stabiliti e a un fuso orario. Tra gli esempi di HubSpot ci sono un obiettivo di risposta più breve per i clienti enterprise e un obiettivo di risposta più rapido per la chat che per l'email. Posticipare un ticket non influisce sul suo SLA.",
          },
        ],
      },
      {
        heading: "Workflow basati sui ticket",
        blocks: [
          {
            type: "p",
            text: "Un workflow basato sui ticket iscrive i ticket che soddisfano i suoi trigger di iscrizione, poi esegue una sequenza di azioni. Le azioni più utili per il lavoro di assistenza:",
          },
          {
            type: "ul",
            items: [
              "Delays: attendere un numero stabilito di giorni, ore e minuti, oppure fino a una data di calendario, una proprietà di tipo data o un evento.",
              "If/then branches: mandare i ticket su percorsi diversi in base a criteri di filtro combinati con AND e OR.",
              "Edit record: impostare, copiare o cancellare valori di proprietà sul ticket o su un record associato.",
              "Create record: creare un nuovo record, che per impostazione predefinita viene associato al ticket iscritto.",
              "Rotate record to owner: assegnare i ticket a turno tra gli utenti che scegli. I conteggi della rotazione sono tracciati per azione e si azzerano se aggiungi o rimuovi proprietari dopo l'attivazione del workflow.",
              "Send a webhook: chiamare un URL esterno con i dati del ticket, come spiegato nella sezione successiva.",
            ],
          },
          {
            type: "p",
            text: "Buoni primi candidati per i workflow sui ticket di HubSpot:",
          },
          {
            type: "ul",
            items: [
              "Far ruotare i nuovi ticket di una pipeline tra un gruppo di agenti.",
              "Copiare una proprietà da un record associato sul ticket, così routing e report possono usarla.",
              "Inviare un ticket a Jira o a uno strumento interno tramite un webhook quando cambia il suo stato.",
              "Attendere un tempo stabilito dopo la chiusura di un ticket, poi creare un branch su una proprietà per decidere un follow-up.",
            ],
          },
        ],
      },
      {
        heading: "Chatbot, webhook e API di HubSpot",
        blocks: [
          {
            type: "p",
            text: "I chatbot basati su regole gestiscono i primi minuti di una chat. Tre azioni svolgono gran parte del lavoro di assistenza. Ask question salva la risposta del visitatore in una proprietà del contatto e può offrire risposte rapide. Submit a ticket crea un ticket con il nome, la pipeline e lo stato che imposti, ma viene saltata se il visitatore non ha un record di contatto associato. Send to team member passa la chat a un utente o a un team specifico dopo aver verificato che sia disponibile, e mostra il messaggio di assenza se non lo è. Se il bot ha un orario di attività, le chat vengono instradate a un membro del team solo durante quell'orario.",
          },
          {
            type: "p",
            text: "L'azione webhook dei workflow invia i dati all'esterno. Scegli POST o GET e inserisci un URL che inizi con HTTPS. Il corpo di una POST può includere tutte le proprietà del record o un insieme personalizzato di chiavi, ciascuna mappata su una proprietà di HubSpot. Puoi autenticarti con una firma della richiesta, che HubSpot aggiunge come header perché il tuo endpoint la verifichi, oppure con una chiave API salvata come secret e inviata in un header o in un parametro di query. Puoi testare l'azione dal suo pannello senza influire sui record esistenti. La disponibilità di questa azione dipende dal tuo abbonamento.",
          },
          {
            type: "p",
            text: "Per la direzione opposta, usa la CRM API. Una POST a /crm/v3/objects/tickets crea un ticket; includi subject, hs_pipeline_stage (lo stato) e hs_pipeline, usando gli ID interni anziché le etichette. Se non indichi una pipeline, viene usata quella predefinita. Una GET a /crm/v3/properties/tickets elenca le proprietà dei ticket del tuo account. Le app possono anche iscriversi agli eventi dei ticket tramite la Webhooks API, tra cui ticket.creation e ticket.propertyChange, che si attiva quando una proprietà che indichi cambia su un ticket qualsiasi. Queste sottoscrizioni si configurano a livello di app e richiedono lo scope tickets.",
          },
        ],
      },
      {
        heading: "Come realizzarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab lavora sugli strumenti che usi già, senza cambiare piattaforma, usando API, webhook e Make o n8n. HubSpot ha un'API documentata e supporta i webhook, quindi quasi certamente si può collegare; la configurazione specifica si conferma in una call di audit gratuita di 30 minuti. Ticket Routing & Categorization è un progetto una tantum nella fascia 600–950 USD, Automated Reports via email o Slack costa 500–900 USD e Custom Automation su più sistemi costa 1.200–2.000 USD. Ogni progetto include 30 giorni di supporto dopo il lancio, documentazione di base e nessun costo nascosto, e la maggior parte delle configurazioni richiede 1–3 settimane.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quali sono gli stati predefiniti dei ticket in HubSpot?",
        a: "La Support Pipeline predefinita ha quattro stati: New, Waiting on contact, Waiting on us e Closed. Puoi aggiungerne di tuoi e contrassegnare ciascuno come Open o Closed.",
      },
      {
        q: "L'help desk di HubSpot può monitorare gli SLA?",
        a: "Sì. Gli obiettivi SLA nell'help desk misurano il tempo alla prima risposta, il tempo alla risposta successiva e il tempo di chiusura, per tutti i ticket o in base alle proprietà dei ticket, e possono essere limitati a orari stabiliti. Posticipare un ticket non influisce sul suo SLA.",
      },
      {
        q: "Un chatbot di HubSpot può creare ticket?",
        a: "Sì. L'azione Submit a ticket crea un ticket con il nome, la pipeline e lo stato che imposti. Viene saltata se il visitatore non ha un record di contatto associato.",
      },
      {
        q: "Come invio i dati dei ticket di HubSpot a un altro sistema?",
        a: "Aggiungi un'azione webhook a un workflow basato sui ticket: invierà una richiesta POST o GET a un URL HTTPS. Le app possono anche iscriversi agli eventi dei ticket come ticket.creation e ticket.propertyChange tramite la Webhooks API.",
      },
      {
        q: "Cosa mi serve per creare un ticket tramite l'API di HubSpot?",
        a: "Invia una POST a /crm/v3/objects/tickets con subject, hs_pipeline_stage e hs_pipeline, usando gli ID interni. Se ometti la pipeline, viene usata quella predefinita.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
