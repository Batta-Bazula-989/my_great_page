import type { Dictionary } from "./en";

const it: Dictionary = {
  meta: {
    homeTitle: "Automazione AI dell'assistenza clienti: chatbot e voice bot | TascaLab",
    homeDescription:
      "Chatbot AI, voice bot, smistamento ticket Zendesk/Freshdesk/Jira e report automatici nei tool che usi già. Freelance, prezzi fissi, audit gratis di 30 min.",
    noscriptHeading: "Automazione AI dell'assistenza clienti: chatbot, voice bot e smistamento dei ticket",
    noscriptText:
      "TascaLab realizza chatbot AI, voice bot, smistamento dei ticket e report automatici su Zendesk, Freshdesk, Jira e Slack. Scrivi a romanzakharenko.r@gmail.com per prenotare un audit gratuito di 30 minuti.",
  },
  nav: {
    services: "Cosa faccio",
    fit: "Fa per te?",
    whyMe: "Perché io?",
    pricing: "Prezzi",
    reviews: "Recensioni",
    faq: "FAQ",
    resources: "Risorse",
    cta: "Prenota un audit gratuito",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
    logoAlt: "Logo TascaLab",
  },
  hero: {
    eyebrow: "Automazione dell'assistenza che regge davvero",
    titleBefore: "Chatbot AI, voice bot e ",
    titleHighlight: "automazione dei ticket",
    titleAfter: " per i team di assistenza",
    intro:
      "Collego l'AI all'helpdesk che usi già: risponde alle domande ripetitive, assegna ogni ticket alla coda giusta e consegna i report che il tuo team prepara a mano. Meno attività manuali, prime risposte più rapide, nessun cambio di piattaforma.",
    ctaBook: "Prenota un audit gratuito",
    ctaUpwork: "Recensioni su Upwork",
    highlights: ["Funziona con il tuo helpdesk attuale", "Operativo in 1–3 settimane", "30 giorni di supporto inclusi"],
    integratesWith: "Si integra con",
  },
  services: {
    eyebrow: "Cosa faccio",
    title: "Servizi di automazione dell'assistenza clienti",
    items: [
      {
        title: "Chatbot e voice bot per l'assistenza",
        description:
          "Gestiscono i messaggi di primo contatto e le chiamate in entrata. Qualificano la richiesta, rispondono a ciò che possono e passano il resto in modo ordinato. Un filtro davanti al tuo team, non un suo sostituto.",
      },
      {
        title: "Smistamento e categorizzazione dei ticket",
        description:
          "Ogni ticket viene etichettato, classificato per priorità e assegnato appena arriva, in base a ciò che dice davvero. Niente smistamento manuale, niente ticket fermi nella coda sbagliata.",
      },
      {
        title: "Reportistica",
        description:
          "I report che il tuo team estrae a mano ogni settimana vengono generati e consegnati in automatico. Formato giusto, persone giuste, momento giusto. Basta estrarre dati a mano.",
      },
      {
        title: "Soluzione su misura",
        description:
          "Hai un'esigenza specifica che non rientra in un modello? La definisco e la realizzo. Se si può automatizzare, troveremo il modo.",
      },
    ],
    previous: "Servizio precedente",
    next: "Servizio successivo",
    show: "Mostra {title}",
  },
  fit: {
    eyebrow: "Fa per te?",
    title: "Per chi è questa automazione dell'assistenza",
    goodTitle: "Fa per te",
    notTitle: "Non fa per te",
    good: [
      "Il tuo team di assistenza gestisce lavoro ripetitivo e prevedibile che si ripresenta ogni singolo giorno",
      "Usi Zendesk, Freshdesk, Jira o strumenti simili e vuoi aggiungere l'automazione, non sostituirli",
      "Vuoi report chiari senza che qualcuno debba estrarre dati a mano ogni settimana",
      "I tuoi strumenti non comunicano tra loro e per questo i ticket si perdono per strada",
      "Vuoi sapere esattamente cosa ottieni prima di pagare qualsiasi cosa",
    ],
    not: [
      "Ti serve un responsabile dell'assistenza a tempo pieno che gestisca le operazioni quotidiane",
      "Vuoi un unico strumento che faccia tutto: ricezione, risoluzione, escalation, report, proprio tutto",
      "Hai in programma di sostituire l'intero stack di assistenza e ripartire da zero",
      "Credi che l'AI possa sostituire completamente il tuo team di assistenza",
    ],
  },
  whyMe: {
    eyebrow: "Perché lavorare con me",
    title: "Realizzato da chi ha lavorato nell'assistenza",
    items: [
      {
        title: "Ho lavorato nell'assistenza, non solo intorno",
        description:
          "Ho gestito ticket, preparato report a mano e avuto a che fare con flussi di lavoro tenuti insieme da copia-incolla e buone speranze. So cosa rallenta davvero i team perché sono stato da quella parte.",
      },
      {
        title: "Fatto per reggere, non per fare bella figura in demo",
        description:
          "Ogni automazione include gestione degli errori, test dei casi limite e monitoraggio. Se succede qualcosa di imprevisto, si ferma in modo controllato e avvisa la persona giusta, invece di rompersi in silenzio.",
      },
      {
        title: "A lavoro finito, è tutto tuo",
        description:
          "Documentazione completa. Passaggio di consegne chiaro. Nessuno strumento proprietario a cui posso accedere solo io. Il tuo team può mantenere ed estendere ciò che realizzo senza dovermi chiamare.",
      },
      {
        title: "Comunicazione diretta, sempre",
        description:
          "Ti dico se qualcosa non vale la pena di essere automatizzato. Ti dico se il tuo budget non è adatto al perimetro del progetto. Non annuirò per poi fatturarti qualcosa che non farà la differenza.",
      },
    ],
    previous: "Motivo precedente",
    next: "Motivo successivo",
    show: "Mostra {title}",
  },
  pricing: {
    eyebrow: "Prezzi",
    title: "Pacchetti di automazione dell'assistenza a prezzo fisso",
    intro:
      "Compensi una tantum per progetto. Conosci la fascia di prezzo prima di iniziare; il preventivo finale arriva dopo un audit gratuito.",
    oneTimeFee: "una tantum",
    cta: "Inizia",
    // Same order as the plans in PricingSection; prices stay in USD.
    plans: [
      {
        name: "Starter Chat Bot",
        price: "350 – 450 USD",
        description:
          "Gestisce le richieste di base dei clienti e le FAQ su 1–2 canali. Perfetto per le piccole imprese che iniziano con l'automazione.",
        features: ["1–2 canali", "Risponde alle FAQ, raccoglie informazioni di base e gestisce in automatico le richieste più comuni"],
      },
      {
        name: "Voice Bot",
        price: "1.100 – 1.600 USD",
        description: "Per le chiamate in entrata.",
        features: [
          "Voice agent completo che gestisce le chiamate in entrata con conversazione naturale, smistamento e passaggio pulito al tuo team",
        ],
      },
      {
        name: "Standard Chat Bot",
        price: "500 – 650 USD",
        description:
          "Chatbot avanzato con supporto multicanale, risposte più intelligenti e una gestione migliore delle interazioni con i clienti su larga scala.",
        features: ["3–5 canali", "Gestisce conversazioni più complesse con una logica più intelligente e passaggi più fluidi al tuo team"],
      },
      {
        name: "Ticket Routing & Categorization",
        price: "600 – 950 USD",
        description: "Smistamento e assegnazione automatici dei ticket.",
        features: [
          "Etichetta, categorizza e instrada automaticamente i ticket al team giusto, così nulla va perso e i tempi di risposta restano rapidi.",
        ],
      },
      {
        name: "Automated Reports",
        price: "500 – 900 USD",
        description: "Report programmati inviati in automatico.",
        features: [
          "Report automatici con le metriche chiave della tua attività, consegnati via email o su Slack, così resti informato senza lavoro manuale.",
        ],
      },
      {
        name: "Custom Automation",
        price: "1.200 – 2.000 USD",
        description:
          "Automazione completamente personalizzata, costruita attorno ai tuoi flussi di lavoro, ai tuoi strumenti e alle esigenze specifiche della tua attività.",
        features: ["Automazione completamente personalizzata, costruita attorno ai tuoi flussi di lavoro, ai tuoi strumenti e alle esigenze specifiche della tua attività"],
      },
    ],
    trust: ["Nessun costo nascosto", "30 giorni di supporto dopo la consegna", "Documentazione di base inclusa"],
  },
  reviews: {
    eyebrow: "Feedback dei clienti",
    title: "Recensioni verificate su Upwork",
    intro:
      "Ogni recensione sul mio profilo Upwork proviene da un contratto reale e pagato, così puoi vedere esattamente com'è andata nei precedenti progetti di automazione dell'assistenza prima di prenotare una call.",
    readTitle: "Leggi le recensioni dei clienti",
    readText:
      "Guarda valutazioni, punteggio di successo dei lavori e feedback scritti dei team per cui ho realizzato chatbot, smistamento dei ticket e automazioni di report.",
    readCta: "Vedi il mio profilo Upwork",
    leaveTitle: "Hai lavorato con me? Lascia una recensione",
    leaveText:
      "Se abbiamo concluso un progetto insieme, una breve recensione su Upwork aiuta altri team di assistenza a decidere con fiducia. Bastano due minuti: grazie.",
    leaveCta: "Lascia un feedback su Upwork",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Domande frequenti",
    items: [
      {
        q: "Devo cambiare i miei strumenti di assistenza?",
        a: "No. Lavoro con quello che usi già: Zendesk, Freshdesk, Jira, Slack, strumenti interni. L'obiettivo è collegare e migliorare ciò che hai, non sostituirlo.",
      },
      {
        q: "E se qualcosa si rompe dopo il lancio?",
        a: "Ogni progetto include 30 giorni di supporto dopo il lancio. Se qualcosa si rompe in quel periodo, lo sistemo io. Lavoro con integrazioni standard (API, webhook, Make/n8n), non con soluzioni artigianali fragili che funzionano in un solo ambiente.",
      },
      {
        q: "Il mio team potrà gestire tutto quando avrai finito?",
        a: "Sì. Documento tutto in modo chiaro: la logica, il flusso, i casi limite. Non resti vincolato. Il supporto continuativo è disponibile ma facoltativo.",
      },
      {
        q: "Puoi integrare uno strumento specifico?",
        a: "Se supporta API o webhook, quasi certamente sì. Parlamene durante la call di audit e te lo confermo.",
      },
      {
        q: "Cosa succede davvero nell'audit gratuito?",
        a: "30 minuti. Esaminiamo la tua configurazione attuale, dove sono gli attriti e dove l'automazione farebbe davvero la differenza. Esci con 2–3 consigli concreti, un perimetro di massima e una fascia di prezzo. Nessuna presentazione commerciale. Nessuna pressione.",
      },
      {
        q: "Quanto dura un progetto tipico?",
        a: "La maggior parte delle configurazioni richiede 1–3 settimane, a seconda della complessità e di quanto rapidamente ci allineiamo sui requisiti. Ti do fin dall'inizio una tempistica realistica, non ottimistica.",
      },
    ],
  },
  contact: {
    eyebrow: "Parliamone",
    title: "Prenota un audit gratuito dell'assistenza di 30 minuti",
    intro: "Prenota una call di 30 minuti. Vediamo cosa sta rallentando il tuo team e capiamo da dove cominciare.",
    cta: "Prenota un audit gratuito",
    linkedin: "Collegati su LinkedIn",
    email: "Email",
    upwork: "Recensioni su Upwork",
  },
  footer: {
    resourcesNav: "Risorse",
    allResources: "Tutte le risorse",
    upworkReviews: "Recensioni su Upwork",
    privacy: "Informativa sulla privacy",
    terms: "Termini di servizio",
  },
  categories: {
    services: { label: "Servizi", blurb: "Cosa si realizza: bot, smistamento e report." },
    helpdesks: { label: "Per helpdesk", blurb: "Automazione dentro gli strumenti che il tuo team usa già." },
    channels: { label: "Per canale", blurb: "Bot di assistenza per i canali da cui ti scrivono i clienti." },
    basics: { label: "Nozioni di base", blurb: "Definizioni, metriche e come funziona il passaggio all'operatore." },
    guides: { label: "Guide e conformità", blurb: "Confronti tra strumenti e regole UE per i bot di assistenza." },
  },
  cookie: {
    text: "Usiamo i cookie per l'analisi e la misurazione degli annunci, per capire come i visitatori trovano e usano questo sito.",
    privacy: "Informativa sulla privacy",
    decline: "Rifiuta",
    accept: "Accetta",
  },
  booking: {
    title: "Prenota un'analisi gratuita dell'assistenza",
    description:
      "Lascia i tuoi dati e ti contatterò per fissare una call di 30 minuti. Nessun impegno, nessuna proposta commerciale.",
    fullName: "Nome e cognome",
    fullNamePlaceholder: "Mario Rossi",
    email: "Email di lavoro",
    emailPlaceholder: "mario@azienda.it",
    company: "Nome dell'azienda",
    companyPlaceholder: "Rossi S.r.l.",
    meetingMethod: "Modalità di incontro preferita",
    methodPhone: "Telefono",
    phone: "Numero di telefono",
    phonePlaceholder: "333 123 4567",
    searchCountry: "Cerca paese o prefisso...",
    noCountry: "Nessun paese trovato.",
    telegram: "Link o nome utente Telegram",
    telegramPlaceholder: "https://t.me/nomeutente o @nomeutente",
    submitCalendar: "Continua al calendario",
    submitting: "Invio in corso...",
    submit: "Prenota l'analisi gratuita dell'assistenza",
    sendFailed: "Impossibile inviare la richiesta",
    networkError: "Errore di rete o server non raggiungibile.",
    sent: "Richiesta inviata! Ti ricontatterò entro 24 ore.",
    errors: {
      nameRequired: "Il campo Nome e cognome è obbligatorio",
      nameShort: "Il campo Nome e cognome deve contenere almeno 2 caratteri",
      nameLong: "Il campo Nome e cognome deve contenere meno di 50 caratteri",
      nameChars: "Il campo Nome e cognome può contenere solo lettere, spazi, trattini e apostrofi",
      emailRequired: "Il campo Email di lavoro è obbligatorio",
      emailInvalid: "Inserisci un indirizzo email valido",
      companyLength: "Il nome dell'azienda deve contenere tra 2 e 50 caratteri",
      phoneRequired: "Il numero di telefono è obbligatorio",
      phoneChars: "Usa solo cifre, spazi, punti, trattini e parentesi",
      phoneDigits: "Il numero di telefono deve contenere 6–15 cifre",
      telegramRequired: "Il link o nome utente Telegram è obbligatorio",
      telegramInvalid:
        "Inserisci un link Telegram valido (es. https://t.me/nomeutente) o un nome utente (es. @nomeutente)",
    },
  },
  seo: {
    home: "Home",
    byline: "Di Roman Zakharenko",
    factsChecked: "Fatti verificati il",
    atAGlance: "In breve",
    faqTitle: "Domande frequenti",
    faqShort: "FAQ",
    ctaTitle: "Vuoi questa configurazione per il tuo team?",
    ctaText:
      "Prenota un audit gratuito di 30 minuti. Ricevi 2–3 consigli concreti, un perimetro di massima e una fascia di prezzo, senza proposte commerciali.",
    ctaBook: "Prenota un audit gratuito",
    ctaUpwork: "Recensioni su Upwork",
    sources: "Fonti",
    onThisPage: "In questa pagina",
    related: "Pagine correlate",
  },
  resources: {
    metaTitle: "Risorse sull'automazione dell'assistenza clienti | TascaLab",
    metaDescription:
      "Guide su chatbot AI per l'assistenza, smistamento dei ticket, automazione di Zendesk, Freshdesk e Jira, bot WhatsApp e Telegram, metriche, SLA e regole UE.",
    eyebrow: "Risorse",
    title: "Risorse sull'automazione dell'assistenza clienti",
    intro:
      "Guide verificate su bot di assistenza, smistamento dei ticket, automazione dell'helpdesk, metriche del supporto e regole UE che si applicano. Ogni pagina elenca le fonti ufficiali su cui si basa.",
    readGuide: "Leggi la guida",
  },
  notFound: {
    title: "Pagina non trovata",
    text: "Questa pagina non esiste o è stata spostata.",
    back: "Torna alla home",
  },
};

export default it;
