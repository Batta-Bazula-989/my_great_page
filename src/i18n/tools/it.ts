
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Strumenti",
  allTools: "Tutti gli strumenti",
  hub: {
    slug: "tools",
    metaTitle: "Calcolatori gratuiti di lead scoring e assistenza | TascaLab",
    metaDescription:
      "Calcolatori gratuiti: crea e testa un lead score, confronta i costi di agenti AI di assistenza, stima la spesa WhatsApp Business API e calcola le scadenze SLA.",
    eyebrow: "Strumenti gratuiti",
    title: "Strumenti gratuiti per i team di vendita e assistenza",
    intro: "Calcolatori rapidi basati su prezzi pubblicati e semplici calcoli. Gratuiti, senza registrazione.",
    open: "Apri lo strumento",
  },
  common: {
    freeTool: "Strumento gratuito · senza registrazione",
    howItWorks: "Come funziona",
    faqTitle: "Domande frequenti",
    sources: "Fonti",
    estimate: "Solo stime, non un preventivo.",
    max: "Massimo: {value}",
    min: "Minimo: {value}",
    perMonth: "/mese",
    ctaTitle: "Vuoi un numero esatto per il tuo team?",
    ctaText: "Prenota un Health Check gratuito: una call di 30 minuti, poi un report scritto con il pacchetto e il prezzo fisso adatti a te.",
    ctaBook: "Prenota un Health Check gratuito",
    otherTools: "Altri strumenti gratuiti",
  },
  leadScore: {
    slug: "calcolatore-lead-scoring",
    navLabel: "Calcolatore di lead scoring",
    short: "Costruisci un punteggio di fit e di engagement, testalo su un lead e copia il modello.",
    metaTitle: "Calcolatore di lead scoring: fit ed engagement | TascaLab",
    metaDescription:
      "Calcolatore di lead scoring gratuito: crea un punteggio di fit ed engagement con i limiti e le soglie di HubSpot, testalo su un lead e copia il modello.",
    h1: "Calcolatore di lead scoring",
    intro:
      "Costruisci un lead score a punti come fa lo strumento di lead scoring di HubSpot: criteri di fit per chi è il lead, criteri di engagement per cosa fa, ogni punteggio fermo al suo limite e diviso in High, Medium e Low. Testalo su un lead, controlla che il modello non contenga errori, poi copialo nel tuo CRM.",
    inputs: {
      criteriaTitle: "I tuoi criteri",
      criteriaHint:
        "Spunta i criteri che valgono per un lead che vuoi testare. Gli esempi sono segnaposto: sostituisci ogni etichetta e ogni valore in punti con i tuoi.",
      label: "Criterio",
      score: "Punteggio",
      points: "Punti",
      applies: "Vale per il lead di prova",
      remove: "Rimuovi {label}",
      add: "Aggiungi criterio",
      maxReached: "Fino a {n} criteri.",
      settingsTitle: "Impostazioni del punteggio",
      limit: "Limite del punteggio",
      limitOption: "Da {min} a {max}",
      high: "High a partire da",
      medium: "Medium a partire da",
      thresholdsHint:
        "I limiti sono le opzioni di HubSpot. Le soglie predefinite seguono l'esempio di HubSpot stesso: 70–100 High, 40–69 Medium, sotto 40 Low.",
    },
    scores: { fit: "Fit", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "Il settore corrisponde al tuo profilo di cliente ideale", score: "fit", points: 30, applies: true },
      { label: "Dimensione dell'azienda nella tua fascia target", score: "fit", points: 25, applies: true },
      { label: "Il ruolo è quello di un decisore", score: "fit", points: 25, applies: false },
      { label: "Ha sede in una regione che non servi", score: "fit", points: -40, applies: false },
      { label: "Ha risposto all'outreach con interesse", score: "engagement", points: 40, applies: true },
      { label: "Ha visitato la pagina dei prezzi", score: "engagement", points: 20, applies: true },
      { label: "Ha aperto le tue ultime tre email", score: "engagement", points: 10, applies: false },
      { label: "Si è disiscritto dalle tue email", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Il tuo lead di prova",
      combined: "Etichetta combinata",
      combinedDesc: "Fit {fit}, engagement {engagement}",
      range: "Intervallo possibile: da {min} a {max}",
      checksTitle: "Prima di costruirlo",
      allGood: "Nessun problema trovato in questo modello.",
      noCriteria: "{score}: aggiungi almeno un criterio.",
      order: "{score}: Medium deve essere più basso di High.",
      unreachable: "{score}: nessun lead può arrivare a High. Il punteggio massimo che un lead può ottenere è {max}.",
      capped: "{score}: i punti positivi arrivano a {total}, ma il punteggio si ferma a {limit}.",
      copy: "Copia il modello come tabella",
      copied: "Copiato",
      copyFailed: "Impossibile copiare. Seleziona i criteri e copiali a mano.",
      tableHeads: { score: "Punteggio", criterion: "Criterio", points: "Punti", limit: "Limite", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "Come si calcola il punteggio",
        text: "Ogni criterio aggiunge o toglie punti quando vale per un lead. I criteri di fit descrivono chi è il lead, come settore, dimensione dell'azienda o ruolo; i criteri di engagement descrivono cosa fa il lead, come risposte, visite o aperture. Ogni punteggio si ferma al suo limite, come nello strumento di lead scoring di HubSpot, e le soglie trasformano il numero in High, Medium o Low. L'etichetta combinata segue la convenzione di HubSpot: la lettera è la fascia di fit (A alta, C bassa) e il numero la fascia di engagement (1 alta, 3 bassa), quindi un lead con fit basso ma molto coinvolto è C1.",
      },
      {
        heading: "Configurarlo in HubSpot",
        text: "Lo strumento di lead scoring di HubSpot richiede Marketing Hub o Sales Hub Professional o Enterprise. I limiti del punteggio vanno da un intervallo da -100 a 100 fino a uno da -10.000 a 10.000, con 100 come massimo predefinito. All'interno di un punteggio puoi aggiungere gruppi con limiti propri, e tutti i limiti dei gruppi contano ai fini del limite del punteggio. Per l'engagement, il decadimento del punteggio può ridurre i punti ogni 1, 3, 6 o 12 mesi, ogni mese contato come 30 giorni.",
      },
      {
        heading: "Configurarlo in Attio",
        text: "Attio non ha uno strumento di scoring dedicato. Con i piani Pro, Enterprise e Ultra, un attributo formula può sommare punti con condizioni if(), usando l'operatore ?? per trattare i campi vuoti come 0. Una formula che restituisce un numero diventa un attributo numero, si ricalcola automaticamente quando cambiano i campi che usa e non consuma crediti del workspace. Con Free e Plus, tieni il punteggio in un attributo numero compilato da un workflow o dall'API.",
      },
      {
        heading: "Quando non ti serve un punteggio",
        text: "Se il tuo team legge ogni nuovo lead in giornata, un punteggio aggiunge poco. Comincia a ripagarsi quando i lead arrivano più in fretta di quanto qualcuno riesca a esaminarli, o quando i segnali che contano di più, come una risposta interessata o una visita alla tua pagina dei prezzi, si trovano in strumenti che il tuo CRM non vede da solo.",
      },
    ],
    faqs: [
      {
        q: "I punti degli esempi sono un consiglio?",
        a: "No. Sono segnaposto che mostrano come funzionano i calcoli. Sostituisci ogni criterio e ogni valore in punti con i tuoi. Gli unici valori predefiniti presi da un fornitore sono i limiti del punteggio di HubSpot e le sue soglie di esempio.",
      },
      {
        q: "Cosa significano A1 e C3?",
        a: "Sono le etichette di HubSpot per i punteggi combinati. La lettera è la fascia di fit, da A (fit alto) a C (fit basso); il numero è la fascia di engagement, da 1 (engagement alto) a 3 (engagement basso).",
      },
      {
        q: "HubSpot può costruire il punteggio per me con l'AI?",
        a: "I punteggi contatto costruiti dall'AI di HubSpot richiedono Marketing Hub Enterprise e almeno 50 contatti, 25 convertiti e 25 non convertiti, prima di poter generare un punteggio.",
      },
      {
        q: "Attio ha il lead scoring?",
        a: "Non ha uno strumento di scoring dedicato. Con Pro, Enterprise e Ultra, un attributo formula può calcolare automaticamente un punteggio a punti; con gli altri piani, un workflow o l'API scrive il punteggio in un attributo numero.",
      },
      {
        q: "Ciò che inserisco viene salvato?",
        a: "No. Il punteggio viene calcolato nel tuo browser e niente di ciò che inserisci viene inviato altrove.",
      },
    ],
  },
  aiAgent: {
    slug: "calcolatore-costo-agente-ai-assistenza",
    navLabel: "Costo agente AI per l'assistenza",
    short: "Confronta gli agenti AI a pagamento per risoluzione con una realizzazione una tantum, ai tuoi volumi.",
    metaTitle: "Calcolatore costo agente AI per l'assistenza 2026 | TascaLab",
    metaDescription:
      "Confronta il costo mensile di Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro e Agentforce ai tuoi volumi con un agente AI di assistenza su misura, una tantum.",
    h1: "Calcolatore del costo di un agente AI per l'assistenza",
    intro:
      "La maggior parte degli agenti AI per l'assistenza si paga per risoluzione, conversazione o azione, quindi il conto cresce con i tuoi volumi. Inserisci i tuoi numeri per confrontare i prezzi di listino di sei fornitori con una realizzazione una tantum.",
    inputs: {
      title: "I tuoi volumi",
      conversations: "Conversazioni AI al mese",
      resolutionRate: "Risolte senza intervento umano",
      actions: "Azioni Agentforce per conversazione",
      buildTitle: "Realizzazione una tantum",
      package: "Prezzo {plan} (una tantum)",
      priceHint: "{plan} parte da {price}. Se ne hai uno, inserisci il prezzo fisso indicato nel report del tuo Health Check.",
      platform: "Piattaforma di automazione",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mese, con fatturazione annuale)",
        make: "Make Core (9 $/mese, con fatturazione annuale)",
        selfHosted: "n8n self-hosted (costo del server non incluso)",
      },
      tokens: "Token AI per conversazione",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Valori predefiniti indicativi: nessuna fonte ufficiale pubblica un dato tipico. Sostituiscili con i numeri reali del tuo bot, presi dalla dashboard di utilizzo del tuo fornitore di AI.",
    },
    results: {
      title: "Costo stimato",
      vendor: "Fornitore",
      monthly: "Al mese",
      year: "12 mesi",
      yourBuild: "Realizzazione una tantum",
      buildLine: "{price} una tantum + {monthly}/mese di costi di esercizio",
      payback: "Più conveniente di {vendor} dal mese {months}",
      neverCheaper: "Con questi volumi, in 12 mesi la realizzazione non costa meno di nessun fornitore.",
      cheapest: "Fornitore più economico",
      currencyNote: "I prezzi dei fornitori sono prezzi di listino in USD, convertiti al tasso BCE del 16 ottobre 2026.",
      pricesAsOf: "Prezzi di listino dei fornitori aggiornati a {date}.",
      empty: "Inserisci le tue conversazioni AI al mese per confrontare i costi.",
    },
    units: {
      fin: "0,99 $ per risultato; se usi un altro helpdesk, un minimo mensile di 49 $ che include 50 risultati",
      zendesk: "2,00 $ per risoluzione automatizzata, a consumo (1,50 $ con un impegno)",
      freddy: "49 $ ogni 100 sessioni",
      hubspot: "0,50 $ per conversazione risolta (50 HubSpot Credits); richiede un piano Professional o Enterprise",
      tidio: "Pacchetti mensili da 39 $ per 50 a 700 $ per 1.000 conversazioni; oltre, Lyro Connect da 0,50 $ per conversazione",
      agentforce: "0,10 $ per azione (20 Flex Credits, 500 $ ogni 100.000)",
    },
    notIncluded:
      "Non inclusi: l'abbonamento al tuo helpdesk, le quote incluse nei piani, gli sconti sui volumi e le tasse. Fin fattura come risultati anche i passaggi all'operatore delle Procedure (una Procedure che configuri perché termini con un passaggio all'operatore), quindi il suo costo reale può essere più alto. Zendesk sta spostando gli account su fasce di risoluzioni con prezzi stabiliti dal suo team commerciale.",
    sections: [
      {
        heading: "Come funziona il calcolo",
        text: "Le conversazioni risolte sono le tue conversazioni mensili moltiplicate per la quota risolta senza intervento umano. Fin fattura per risultato oltre a un minimo mensile di 49 $, Zendesk e HubSpot per risoluzione, Freddy per pacchetto di 100 sessioni, Tidio Lyro in pacchetti mensili di conversazioni a cui risponde e Agentforce per azione. Il prezzo di listino di ogni fornitore rimanda alla sua pagina dei prezzi, qui sotto.",
      },
      {
        heading: "Perché i costi per risoluzione crescono",
        text: "Quando un fornitore fattura per risoluzione, ogni conversazione in più risolta dall'agente fa salire il conto. Una realizzazione una tantum non ha costi per risoluzione: paghi direttamente il fornitore di AI per i token e la piattaforma di automazione per il suo piano.",
      },
      {
        heading: "Quanto costa far funzionare una realizzazione una tantum",
        text: "L'uso dell'AI è fatturato a token dal tuo fornitore di AI. Questo calcolatore usa i prezzi di listino di Claude Haiku 5.5 per prompt fino a 100.000 token: 0,10 $ per milione di token in input e 0,50 $ per milione di token in output. A questo aggiungi la piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese, entrambi con fatturazione annuale.",
      },
    ],
    faqs: [
      {
        q: "Questi prezzi sono aggiornati?",
        a: "Sono i prezzi di listino pubblicati sulle pagine dei prezzi ufficiali di ogni fornitore, verificati a novembre 2026. I fornitori cambiano spesso i prezzi, quindi controlla le pagine linkate prima di acquistare.",
      },
      {
        q: "Cosa conta come risoluzione?",
        a: "Ogni fornitore la definisce in modo diverso. Fin fattura per risultato (una risoluzione, o una Procedure che termina con un passaggio all'operatore), Zendesk per risoluzione automatizzata, HubSpot per conversazione non passata a una persona entro 72 ore, Freddy per sessione e Tidio per conversazione a cui risponde Lyro. Leggi la definizione di ogni fornitore prima di confrontarli.",
      },
      {
        q: "Perché i prezzi sono mostrati nella mia valuta?",
        a: "I fornitori pubblicano questi prezzi in dollari USA. Al di fuori della versione statunitense di questa pagina, sono convertiti al tasso di riferimento della Banca centrale europea del 16 ottobre 2026.",
      },
      {
        q: "Una realizzazione una tantum costa sempre meno?",
        a: "No. Con volumi bassi, un agente a pagamento per risoluzione può costare meno. Il calcolatore mostra se e quando una realizzazione una tantum diventa più conveniente ai tuoi volumi.",
      },
    ],
  },
  whatsapp: {
    slug: "calcolatore-costi-whatsapp-business",
    navLabel: "Costi WhatsApp Business",
    short: "Stima la tua fattura mensile della WhatsApp API, compresa la nuova fascia gratuita per i messaggi di servizio.",
    metaTitle: "Calcolatore costi WhatsApp Business API 2026 | TascaLab",
    metaDescription:
      "Stima la spesa mensile per la WhatsApp Business Platform: prezzi per messaggio di Meta e 1.000 messaggi di servizio gratuiti per numero dal 1° ottobre 2026.",
    h1: "Calcolatore dei costi della WhatsApp Business API",
    intro:
      "Dal 1° ottobre 2026 Meta fa pagare i messaggi di servizio WhatsApp oltre i 1.000 gratuiti al mese per ogni numero aziendale, alla tariffa di utilità del mercato. Inserisci i tuoi volumi e le tariffe del listino di Meta per il paese dei tuoi clienti.",
    inputs: {
      volumeTitle: "Messaggi al mese",
      numbers: "Numeri di telefono aziendali",
      service: "Messaggi di servizio (risposte in formato libero)",
      utility: "Template di utilità",
      marketing: "Template di marketing",
      authentication: "Template di autenticazione",
      ratesTitle: "Tariffe per messaggio",
      ratesHint: "Copia dal listino di Meta le tariffe per il paese dei tuoi clienti, nella tua valuta di fatturazione.",
      rateCard: "Apri i listini tariffe di Meta",
      utilityRate: "Tariffa di utilità (usata anche per i messaggi di servizio)",
      marketingRate: "Tariffa di marketing",
      authenticationRate: "Tariffa di autenticazione",
    },
    results: {
      title: "Costo mensile stimato",
      freeService: "Messaggi di servizio gratuiti usati",
      billableService: "Messaggi di servizio a pagamento",
      service: "Messaggi di servizio",
      utility: "Template di utilità",
      marketing: "Template di marketing",
      authentication: "Template di autenticazione",
      total: "Totale al mese",
      enterRates: "Inserisci le tue tariffe per vedere il costo.",
    },
    notIncluded:
      "Non inclusi: gli sconti per fasce di volume sui messaggi di utilità e di autenticazione, i messaggi di Meta Business Agent, le commissioni del tuo fornitore WhatsApp e le tasse. I messaggi inviati in una finestra gratuita da punto di ingresso non vengono addebitati.",
    sections: [
      {
        heading: "Cosa è cambiato il 1° ottobre 2026",
        text: "I messaggi di servizio in formato libero, cioè le risposte che invii entro la finestra di assistenza clienti di 24 ore, non sono più illimitati e gratuiti. Ogni numero di telefono aziendale ha 1.000 messaggi di servizio gratuiti al mese; oltre questa soglia, Meta li addebita alla tariffa di utilità del mercato. Ora si pagano anche i template di utilità inviati all'interno della finestra.",
      },
      {
        heading: "Come Meta fattura i messaggi",
        text: "Meta addebita ogni messaggio consegnato. La tariffa dipende dalla categoria del messaggio (marketing, utilità, autenticazione o servizio) e dal paese del destinatario; in quel mercato i messaggi di servizio costano la stessa tariffa di listino dei messaggi di utilità e di autenticazione. Una quinta categoria, i messaggi di Meta Business Agent inviati dall'agente AI di Meta stesso, viene invece fatturata a token. Meta pubblica i listini tariffe in 16 valute e può cambiare i prezzi solo il primo giorno di un trimestre.",
      },
      {
        heading: "Cosa non considera questo calcolatore",
        text: "I messaggi di utilità e di autenticazione hanno fasce di volume che abbassano la tariffa ai volumi alti; qui non sono considerate. I messaggi sono gratuiti nella finestra gratuita da punto di ingresso, che si apre quando rispondi entro 24 ore a qualcuno che ti ha scritto da un annuncio click-to-WhatsApp nell'app WhatsApp per Android o iOS, e può restare aperta fino a 7 giorni. I messaggi di Meta Business Agent (2,00 $ per milione di token) e le commissioni del tuo fornitore WhatsApp non sono inclusi.",
      },
    ],
    faqs: [
      {
        q: "I messaggi di servizio WhatsApp sono ancora gratuiti?",
        a: "Dal 1° ottobre 2026 ogni numero di telefono aziendale ha 1.000 messaggi di servizio gratuiti al mese. Dal 1.001° messaggio Meta li addebita alla tariffa di utilità del mercato.",
      },
      {
        q: "Perché devo inserire le tariffe?",
        a: "Le tariffe dipendono dal paese dei tuoi clienti e dalla tua valuta di fatturazione. Meta le pubblica nei suoi listini tariffe: copia quelle che valgono per te per una stima esatta.",
      },
      {
        q: "Ogni quanto Meta cambia i prezzi di WhatsApp?",
        a: "Meta dichiara che può aggiornare i prezzi solo il primo giorno di ogni trimestre, quindi fino a quattro volte l'anno.",
      },
      {
        q: "Sono incluse le commissioni del mio fornitore?",
        a: "No. Copre solo i costi per messaggio di Meta. Il tuo WhatsApp Business Solution Provider può applicare commissioni proprie.",
      },
    ],
  },
  sla: {
    slug: "calcolatore-sla",
    navLabel: "Calcolatore SLA",
    short: "Calcola le scadenze SLA e i tempi di prima risposta in orario lavorativo.",
    metaTitle: "Calcolatore SLA con orario lavorativo e festivi | TascaLab",
    metaDescription:
      "Calcola quando scade uno SLA dell'assistenza o quanto tempo lavorativo ha richiesto una prima risposta, contando solo orari, giorni lavorativi e festivi.",
    h1: "Calcolatore SLA con orario lavorativo",
    intro:
      "Gli obiettivi SLA si contano di solito in ore lavorative, quindi un obiettivo di 4 ore che parte il venerdì pomeriggio può scadere il lunedì. Inserisci un orario di inizio e il tuo orario di lavoro per vedere la scadenza, oppure misura il tempo lavorativo tra due momenti.",
    modes: { due: "Quando scade?", elapsed: "Quanto tempo ci è voluto?" },
    inputs: {
      received: "Ticket ricevuto",
      target: "Obiettivo SLA",
      hours: "ore",
      minutes: "minuti",
      replied: "Prima risposta inviata",
      scheduleTitle: "Orario lavorativo",
      opens: "Apertura",
      closes: "Chiusura",
      days: "Giorni lavorativi",
      dayNames: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
      holidays: "Festività",
      addHoliday: "Aggiungi",
      removeHoliday: "Rimuovi {date}",
      noHolidays: "Nessuna festività aggiunta.",
    },
    results: {
      dueAt: "Scadenza",
      calendarTime: "Tempo di calendario fino alla scadenza",
      businessTime: "Tempo lavorativo",
      elapsedCalendar: "Tempo di calendario",
      withinTarget: "Entro l'obiettivo di {target}",
      overTarget: "Oltre l'obiettivo di {target}",
      invalid: "Controlla gli orari e l'orario lavorativo.",
      duration: "{h} h {m} min",
      days: "{d} g {h} h {m} min",
    },
    sections: [
      {
        heading: "Come si contano gli SLA in orario lavorativo",
        text: "Il timer dello SLA scorre solo durante l'orario lavorativo, nei giorni lavorativi. Se un ticket arriva fuori da quell'orario, il timer parte all'apertura del giorno lavorativo successivo. Le festività che aggiungi contano come giorni non lavorativi.",
      },
      {
        heading: "Fusi orari",
        text: "Tutti gli orari sono considerati in un unico fuso orario: quello del tuo orario lavorativo. Inserisci gli orari dei ticket nello stesso fuso orario.",
      },
    ],
    faqs: [
      {
        q: "Il calcolatore salta i fine settimana?",
        a: "Sì. Contano solo i giorni lavorativi che selezioni. Sabato e domenica sono deselezionati per impostazione predefinita.",
      },
      {
        q: "Come gestisco i giorni festivi?",
        a: "Aggiungi la data di ogni festività. Il calcolatore la tratta come un giorno non lavorativo.",
      },
      {
        q: "Una giornata lavorativa è di otto ore?",
        a: "Solo se il tuo orario lavorativo dura otto ore. Inserisci gli orari di apertura e chiusura, poi imposta l'obiettivo in ore.",
      },
    ],
  },
};

export default tools;
