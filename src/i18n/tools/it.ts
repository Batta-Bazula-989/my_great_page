
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Strumenti",
  allTools: "Tutti gli strumenti",
  hub: {
    slug: "tools",
    metaTitle: "Calcolatori gratuiti per l'assistenza clienti | TascaLab",
    metaDescription:
      "Calcolatori gratuiti per l'assistenza: confronta i costi degli agenti AI, stima la fattura WhatsApp Business API e calcola le scadenze SLA in ore lavorative.",
    eyebrow: "Strumenti gratuiti",
    title: "Strumenti gratuiti per i team di assistenza",
    intro: "Calcolatori rapidi basati su prezzi pubblicati e semplici calcoli. Gratuiti, senza registrazione.",
    open: "Apri lo strumento",
  },
  common: {
    freeTool: "Strumento gratuito · senza registrazione",
    howItWorks: "Come funziona",
    faqTitle: "Domande frequenti",
    sources: "Fonti",
    estimate: "Solo stime, non un preventivo.",
    perMonth: "/mese",
    ctaTitle: "Vuoi un numero esatto per il tuo team?",
    ctaText: "Prenota un Health Check gratuito: una call di 30 minuti, poi un report scritto con il pacchetto e il prezzo fisso adatti a te.",
    ctaBook: "Prenota un Health Check gratuito",
    otherTools: "Altri strumenti gratuiti",
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
      package: "Pacchetto",
      platform: "Piattaforma di automazione",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mese, con fatturazione annuale)",
        make: "Make Core (9 $/mese, con fatturazione annuale)",
        selfHosted: "n8n self-hosted (costo del server non incluso)",
      },
      tokens: "Token AI per conversazione",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Valori di esempio tratti da una conversazione di assistenza di 5 messaggi già pubblicata. Cambiali in base al tuo bot.",
    },
    results: {
      title: "Costo mensile stimato",
      vendor: "Fornitore",
      monthly: "Al mese",
      year: "12 mesi",
      yourBuild: "Realizzazione una tantum",
      buildLine: "{price} una tantum + {monthly}/mese di costi di esercizio",
      payback: "Più conveniente di {vendor} dal mese {months}",
      neverCheaper: "Con questi volumi, in 12 mesi la realizzazione non costa meno di nessun fornitore.",
      cheapest: "Più economico",
      currencyNote: "I prezzi dei fornitori sono prezzi di listino in USD, convertiti al tasso BCE del 16 ottobre 2026.",
    },
    units: {
      fin: "0,99 $ per risultato; almeno 50 al mese se usi un altro helpdesk",
      zendesk: "2,00 $ per risoluzione automatizzata, a consumo",
      freddy: "49 $ ogni 100 sessioni",
      hubspot: "0,50 $ per conversazione risolta; richiede un piano Professional o Enterprise",
      tidio: "0,50 $ per conversazione a cui risponde Lyro",
      agentforce: "0,10 $ per azione (20 Flex Credits)",
    },
    notIncluded:
      "Non inclusi: l'abbonamento al tuo helpdesk, le quote incluse nei piani, gli sconti sui volumi e le tasse. Fin fattura come risultati anche alcuni passaggi all'operatore e smistamenti, quindi il suo costo reale può essere più alto.",
    sections: [
      {
        heading: "Come funziona il calcolo",
        text: "Le conversazioni risolte sono le tue conversazioni mensili moltiplicate per la quota risolta senza intervento umano. Fin, Zendesk e HubSpot fatturano per risoluzione o per risultato, Freddy per pacchetto di 100 sessioni, Tidio Lyro per conversazione a cui risponde e Agentforce per azione. Il prezzo di listino di ogni fornitore rimanda alla sua pagina dei prezzi, qui sotto.",
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
        a: "Sono i prezzi di listino pubblicati sulla pagina dei prezzi di ogni fornitore a ottobre 2026. I fornitori cambiano spesso i prezzi, quindi controlla le pagine linkate prima di acquistare.",
      },
      {
        q: "Cosa conta come risoluzione?",
        a: "Ogni fornitore la definisce in modo diverso. Fin fattura per risultato, Zendesk per risoluzione automatizzata, HubSpot per conversazione risolta e Freddy per sessione. Leggi la definizione di ogni fornitore prima di confrontarli.",
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
      "Non inclusi: gli sconti per fasce di volume sui messaggi di utilità e di autenticazione, le commissioni del tuo fornitore WhatsApp e le tasse. I messaggi inviati in una finestra gratuita da punto di ingresso non vengono addebitati.",
    sections: [
      {
        heading: "Cosa è cambiato il 1° ottobre 2026",
        text: "I messaggi di servizio in formato libero, cioè le risposte che invii entro la finestra di assistenza clienti di 24 ore, non sono più illimitati e gratuiti. Ogni numero di telefono aziendale ha 1.000 messaggi di servizio gratuiti al mese; oltre questa soglia, Meta li addebita alla tariffa di utilità del mercato. Ora si pagano anche i template di utilità inviati all'interno della finestra.",
      },
      {
        heading: "Come Meta fattura i messaggi",
        text: "Meta addebita ogni messaggio consegnato. La tariffa dipende dalla categoria del messaggio (marketing, utilità, autenticazione o servizio) e dal paese del destinatario. Meta pubblica i listini tariffe in diverse valute e può cambiare i prezzi solo il primo giorno di un trimestre.",
      },
      {
        heading: "Cosa non considera questo calcolatore",
        text: "I messaggi di utilità e di autenticazione hanno fasce di volume che abbassano la tariffa ai volumi alti; qui non sono considerate. I messaggi inviati nella finestra gratuita da punto di ingresso di 72 ore, dopo un annuncio click-to-WhatsApp o il pulsante di una Pagina Facebook, sono gratuiti. Il tuo fornitore WhatsApp può aggiungere commissioni proprie.",
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
