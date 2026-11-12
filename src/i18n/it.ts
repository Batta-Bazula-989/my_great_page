import type { Dictionary } from "./en";
import tools from "./tools/it";

const it: Dictionary = {
  meta: {
    homeTitle: "Automazione di lead, CRM e supporto B2B | TascaLab",
    homeDescription:
      "Automazione dei lead e integrazione CRM per team B2B: lead scoring con IA, HubSpot e Attio, più automazione del supporto. Prezzi fissi, Health Check gratuito.",
  },
  nav: {
    services: "Cosa faccio",
    whyMe: "Perché io?",
    pricing: "Prezzi",
    reviews: "Recensioni",
    faq: "FAQ",
    blog: "Blog",
    cta: "Health Check gratuito",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
    logoAlt: "Logo TascaLab",
    skipToContent: "Vai al contenuto",
  },
  hero: {
    eyebrow: "Automazione che regge davvero",
    titleBefore: "Automazione di lead, CRM e assistenza ",
    titleHighlight: "per piccoli team B2B",
    titleAfter: "",
    sectors: "Lavoro soprattutto con team di vendita B2B, ecommerce e operazioni di logistica.",
    intro: "Sono Roman. Li realizzo personalmente, a prezzo fisso da {price}, pagato una sola volta.",
    callNote: "Health Check gratuito: una call di 30 minuti con me, poi un report scritto.",
    ctaBook: "Prenota un Health Check gratuito",
    ctaUpwork: "Recensioni su Upwork",
    highlights: ["Funziona con il tuo helpdesk attuale", "Operativo in 1–3 settimane", "30 giorni di supporto inclusi"],
    integratesWith: "Si integra con",
  },
  recentWork: {
    eyebrow: "In pratica",
    title: "Lavori recenti",
    situationLabel: "Situazione",
    changeLabel: "Cosa è cambiato",
    resultLabel: "Risultato",
    cases: [
      {
        title: "Gestione delle risposte all'outreach",
        situation: "Un team di vendita B2B registrava a mano nel CRM le risposte alle campagne di outreach.",
        change:
          "Ora l'AI classifica ogni risposta da Lemlist e la registra sul deal giusto in HubSpot e Attio, con avvisi su Slack.",
        result: "Non si perde più nulla.",
      },
      {
        title: "Scoring dei visitatori del sito",
        situation: "Un'azienda non riusciva a capire quali visitatori del sito contassero davvero.",
        change:
          "Ora ogni azienda identificata viene valutata rispetto al profilo del cliente ideale e registrata in HubSpot.",
        result: "Un riepilogo settimanale, ordinato per punteggio.",
      },
      {
        title: "Migrazione della piattaforma di automazione",
        situation: "La piattaforma di automazione di un team ne aveva annunciato la chiusura.",
        change: "Oltre 20 workflow di produzione sono stati migrati su n8n.",
        result: "Tutto operativo prima della scadenza.",
      },
    ],
  },
  services: {
    eyebrow: "Cosa faccio",
    title: "Servizi di automazione di lead, CRM e assistenza",
    items: [
      {
        title: "Automazione dei lead",
        description:
          "I tuoi lead da visitatori del sito, moduli e risposte alle campagne di outreach vengono classificati dall'IA, valutati rispetto al tuo profilo di cliente ideale e registrati nel tuo CRM con avvisi al team.",
      },
      {
        title: "Integrazione e automazione del CRM",
        description:
          "Il tuo CRM (HubSpot, Attio) collegato a strumenti di outreach, chiamate e arricchimento. Risposte, chiamate e trascrizioni registrate automaticamente sul deal giusto, più migrazioni di workflow tra piattaforme.",
      },
      {
        title: "Automazione dell'assistenza",
        description:
          "Bot di chat e vocali, smistamento e categorizzazione dei ticket, report automatici, tutto collegato al tuo helpdesk (Zendesk, Freshdesk, Jira).",
      },
    ],
  },
  process: {
    eyebrow: "Come funziona",
    title: "Dalla prima call a un'automazione che funziona",
    intro:
      "Dopo aver prenotato l'Health Check: una call di 30 minuti, poi un report scritto con i consigli e un prezzo fisso — senza impegno.",
    steps: [
      {
        title: "Health Check gratuito",
        description: "Una call di 30 minuti sulla tua configurazione e su dove l'automazione ti aiuterebbe.",
      },
      {
        title: "Report scritto",
        description: "2–3 consigli, il pacchetto adatto a te e il suo prezzo fisso.",
      },
      {
        title: "Prezzo fisso concordato",
        description: "Concordato prima di iniziare qualsiasi lavoro. Pagato una volta, nessun canone.",
      },
      {
        title: "Realizzato in 1–3 settimane",
        description: "Nel tuo helpdesk, in funzione nei tuoi account.",
      },
      {
        title: "30 giorni di supporto",
        description: "Se qualcosa si rompe dopo il lancio, lo sistemo io.",
      },
    ],
  },
  fit: {
    eyebrow: "Fa per te?",
    title: "Per chi è questa automazione dell'assistenza",
    intro: "Di solito piccoli team B2B con lavoro ripetitivo nei loro strumenti quotidiani.",
    goodTitle: "Fa per te",
    notTitle: "Non fa per te",
    good: [
      "Lavoro di assistenza ripetitivo, ogni giorno",
      "Usi Zendesk, Freshdesk, Jira o simili",
      "Report ancora estratti a mano",
      "Strumenti che non comunicano tra loro",
    ],
    not: [
      "Ti serve un responsabile dell'assistenza a tempo pieno",
      "Vuoi sostituire tutti i tuoi strumenti di assistenza",
      "Ti aspetti che l'AI sostituisca il tuo team",
    ],
  },
  whyMe: {
    eyebrow: "Perché lavorare con me",
    title: "Realizzato da chi ha lavorato nell'assistenza",
    role: "Specialista in automazione AI",
    items: [
      {
        title: "Ho lavorato nell'assistenza",
        description: "Ho gestito ticket e preparato report a mano, quindi so cosa rallenta i team.",
      },
      {
        title: "Fatto per reggere",
        description: "Gestione degli errori, test dei casi limite e monitoraggio in ogni automazione.",
      },
      {
        title: "È tutto tuo",
        description: "Documentazione completa e passaggio di consegne. Nessun vincolo.",
      },
      {
        title: "Risposte dirette",
        description: "Se non vale la pena automatizzare qualcosa, te lo dico.",
      },
    ],
  },
  pricing: {
    eyebrow: "Prezzi",
    title: "Pacchetti di automazione a prezzo fisso",
    intro: "Un solo prezzo, pagato una volta. Nessun canone.",
    oneTimeFee: "una tantum",
    cta: "Parlane in un Health Check",
    from: "da {price}",
    delivery: "Consegna",
    deliveryTime: "1–3 settimane",
    included: "Cosa include",
    groups: {
      leads: "Automazione di lead e CRM",
      support: "Automazione del supporto",
      custom: "Progetti su misura",
    },
    running: "Costi mensili di esercizio",
    showRunning: "Mostra i costi mensili di esercizio",
    hideRunning: "Nascondi i costi mensili di esercizio",
    runningNote: "Li addebitano i fornitori degli strumenti. Non sono inclusi nel prezzo del pacchetto.",
    estimate: "Stima i tuoi con i miei calcolatori gratuiti:",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Risponde alle domande comuni su 1–2 canali e passa il resto al tuo team.",
        included: [
          "1–2 canali: sito web, WhatsApp, Telegram, Messenger o Instagram",
          "Risponde alle FAQ e raccoglie i dati dei clienti",
          "Passa il resto al tuo team",
        ],
        running: [
          "Uso dell'AI, fatturato a token dal tuo fornitore di AI, ad es. Claude Haiku 5.5 da 0,10 $ / 0,50 $ per milione di token in input / output*",
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
          "Solo WhatsApp: dal 1° ottobre 2026, 1.000 messaggi di servizio gratuiti al mese per ogni numero aziendale, poi la tariffa per messaggio di Meta",
        ],
      },
      {
        name: "Voice Bot",
        description: "Risponde alle chiamate in entrata, le smista e le passa al tuo team.",
        included: [
          "Risponde alle chiamate in entrata",
          "Smistamento e passaggio pulito al tuo team",
          "Collegato al tuo helpdesk",
        ],
        running: [
          "Tariffe al minuto della piattaforma vocale, ad es. Retell AI da 0,07 $ al minuto, più il modello AI e la linea telefonica",
          "Un numero di telefono del tuo operatore telefonico",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Gestisce conversazioni più complesse su 3–5 canali.",
        included: [
          "3–5 canali",
          "Conversazioni in più passaggi",
          "Passaggio al tuo team e collegamento al tuo helpdesk",
        ],
        running: [
          "Uso dell'AI, fatturato a token dal tuo fornitore di AI, ad es. Claude Haiku 5.5 da 0,10 $ / 0,50 $ per milione di token in input / output*",
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
          "Solo WhatsApp: dal 1° ottobre 2026, 1.000 messaggi di servizio gratuiti al mese per ogni numero aziendale, poi la tariffa per messaggio di Meta",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Ogni ticket etichettato, classificato per priorità e assegnato appena arriva.",
        included: [
          "L'AI classifica ogni nuovo ticket per argomento e urgenza",
          "Imposta tag e priorità, assegna il gruppo giusto",
          "Zendesk, Freshdesk o Jira Service Management",
        ],
        running: [
          "Classificazione AI, fatturata a token dal tuo fornitore di AI, ad es. Claude Haiku 5.5 da 0,10 $ / 0,50 $ per milione di token in input / output*",
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
        ],
      },
      {
        name: "Automated Reports",
        description: "I report che il tuo team prepara a mano, inviati in automatico.",
        included: [
          "Metriche chiave dell'assistenza dal tuo helpdesk",
          "Inviate via email o su Slack a orari programmati",
        ],
        running: [
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
          "Nessun costo per l'AI, a meno che tu non voglia riepiloghi scritti dall'AI",
        ],
      },
      {
        name: "Custom Automation",
        description: "Costruita attorno ai tuoi flussi di lavoro, ai tuoi strumenti e ai tuoi requisiti.",
        included: [
          "Definita nel tuo Health Check gratuito",
          "Prezzo fisso concordato prima di iniziare",
          "Qualsiasi strumento con API o webhook",
        ],
        running: ["Dipendono dagli strumenti coinvolti; stimati nel report del tuo Health Check"],
      },
      {
        name: "Lead Capture & Scoring",
        description: "Lead da una fonte, classificati e valutati dall'AI, registrati nel tuo CRM.",
        included: [
          "Lead da una sola fonte, classificati e valutati dall'IA",
          "Registrati nel tuo CRM",
          "Avvisi via e-mail o Slack",
        ],
        running: [
          "Uso dell'AI, fatturato a token dal tuo fornitore di AI, ad es. Claude Haiku 5.5 da 0,10 $ / 0,50 $ per milione di token in input / output*",
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
        ],
      },
      {
        name: "CRM Integration",
        description: "Due strumenti collegati al tuo CRM, con le attività registrate sui record giusti.",
        included: [
          "Due strumenti collegati al tuo CRM",
          "Risposte e attività registrate sui record giusti",
          "Gestione degli errori e avvisi",
        ],
        running: [
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
        ],
      },
      {
        name: "Support Automation",
        description: "La parte ripetitiva del tuo supporto, automatizzata e collegata al tuo helpdesk.",
        included: [
          "Bot di chat e vocali che rispondono a domande e chiamate frequenti",
          "Ticket smistati, taggati e prioritizzati automaticamente",
          "Report inviati via e-mail o Slack secondo un calendario",
          "Collegato a Zendesk, Freshdesk o Jira",
        ],
        running: [
          "Uso dell'AI, fatturato a token dal tuo fornitore di AI, ad es. Claude Haiku 5.5 da 0,10 $ / 0,50 $ per milione di token in input / output*",
          "Piattaforma di automazione: n8n self-hosted (software gratuito; il server lo paghi tu), n8n Cloud da 20 €/mese o Make da 9 $/mese (entrambi con fatturazione annuale)",
          "Solo bot vocali: tariffe al minuto della piattaforma vocale, ad es. Retell AI da 0,07 $ al minuto, più il modello AI e la linea telefonica",
        ],
      },
    ],
    footnote:
      "* Prezzi di listino di Anthropic (ottobre 2026) per prompt fino a 100.000 token; i prompt più lunghi costano 0,50 $ / 2,50 $. Altri fornitori e modelli hanno prezzi diversi, e i fornitori possono cambiare i loro prezzi.",
    allPackages: "In ogni pacchetto: 30 giorni di supporto dopo la consegna e documentazione di base.",
    healthCheck: {
      title: "Health Check gratuito",
      text: "Una call di 30 minuti, poi un report scritto: cosa automatizzare per primo, quale pacchetto fa per te e quanto costa.",
      cta: "Prenota il tuo Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "I tuoi dati",
    title: "I tuoi dati e il GDPR",
    intro: "Scegli tu dove gira la tua automazione.",
    options: [
      {
        title: "Nei tuoi account (opzione predefinita)",
        points: [
          "Gira nei tuoi account di helpdesk, automazione e AI",
          "I dati dei clienti restano in sistemi che controlli tu",
          "È tutto tuo e controlli tu il mio accesso",
        ],
      },
      {
        title: "Ospitata da me, con un DPA",
        points: [
          "Accordo sul trattamento dei dati (art. 28 GDPR) firmato prima di trattare qualsiasi dato personale",
          "Sub-responsabili del trattamento solo con la tua autorizzazione scritta",
          "A fine contratto, dati cancellati o restituiti, a tua scelta",
        ],
      },
    ],
    note: "Qui è descritto come vengono impostati i progetti. Non è una consulenza legale.",
  },
  reviews: {
    eyebrow: "Feedback dei clienti",
    title: "Recensioni verificate su Upwork",
    intro: "Da contratti pagati su Upwork.",
    quoted: "Recensioni citate parola per parola dal mio profilo Upwork.",
    verify: "Verifica su Upwork",
    stars: "{rating} su 5 stelle",
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
        a: "Se supporta API o webhook, quasi certamente sì. Parlamene nel tuo Health Check e te lo confermo.",
      },
      {
        q: "Cosa succede davvero nell'Health Check gratuito?",
        a: "Una call di 30 minuti sulla tua configurazione attuale, su dove sono gli attriti e su dove l'automazione farebbe davvero la differenza. Dopo ricevi un report scritto con 2–3 consigli concreti, il pacchetto e il prezzo fisso adatti a te e i costi mensili di esercizio stimati. Nessuna presentazione commerciale. Nessuna pressione.",
      },
      {
        q: "Quanto dura un progetto tipico?",
        a: "La maggior parte delle configurazioni richiede 1–3 settimane, a seconda della complessità e di quanto rapidamente ci allineiamo sui requisiti. Ti do fin dall'inizio una tempistica realistica, non ottimistica.",
      },
    ],
  },
  contact: {
    eyebrow: "Parliamone",
    title: "Richiedi un Health Check gratuito",
    intro: "Una call di 30 minuti, poi un report scritto.",
    cta: "Prenota un Health Check gratuito",
    email: "Email",
    upwork: "Recensioni su Upwork",
  },
  footer: {
    blogNav: "Blog",
    allPosts: "Tutti gli articoli",
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
    crm: { label: "Automazione di lead e CRM", blurb: "Workflow, webhook e API in Attio e HubSpot." },
  },
  cookie: {
    text: "Uso i cookie per l'analisi e la misurazione degli annunci, per capire come i visitatori trovano e usano questo sito.",
    privacy: "Informativa sulla privacy",
    decline: "Rifiuta",
    accept: "Accetta",
  },
  booking: {
    title: "Prenota un Health Check gratuito",
    description:
      "Una call di 30 minuti con me, Roman, poi un report scritto. Nessun impegno, nessuna proposta commerciale.",
    about: "Oggetto: {topic}",
    close: "Chiudi",
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
    submitting: "Invio in corso…",
    submit: "Prenota l'Health Check gratuito",
    nextCalendar: "Poi scegli un orario nel mio calendario.",
    nextContact: "Ti contatterò entro 24 ore per concordare un orario.",
    sendFailed: "La tua richiesta non è andata a buon fine",
    networkError: "Riprova tra un momento o contattami direttamente:",
    sentTitle: "Richiesta inviata",
    sentCalendar: "Ora scegli nel mio calendario un orario che ti va bene.",
    openCalendar: "Apri il mio calendario",
    sent: "Ti ricontatterò entro 24 ore per concordare un orario.",
    errors: {
      nameRequired: "Il campo Nome e cognome è obbligatorio",
      nameShort: "Il campo Nome e cognome deve contenere almeno 2 caratteri",
      nameLong: "Il campo Nome e cognome deve contenere meno di 50 caratteri",
      nameChars: "Il campo Nome e cognome può contenere solo lettere, spazi, punti, trattini e apostrofi",
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
      "Prenota un Health Check gratuito: una call di 30 minuti e un report scritto con 2–3 consigli concreti, un prezzo fisso e i costi di esercizio stimati. Nessuna proposta commerciale.",
    ctaBook: "Prenota un Health Check gratuito",
    ctaUpwork: "Recensioni su Upwork",
    sources: "Fonti",
    onThisPage: "In questa pagina",
    related: "Pagine correlate",
    readNext: "Leggi anche",
    ctaPackages: "Vedi pacchetti e prezzi",
  },
  blog: {
    metaTitle: "Blog su automazione di assistenza e CRM | TascaLab",
    metaDescription:
      "Guide su chatbot AI per l'assistenza, smistamento ticket, automazione di Zendesk, Freshdesk, Jira, HubSpot e Attio, bot WhatsApp e Telegram, SLA e regole UE.",
    title: "Blog sull'automazione di assistenza clienti e CRM",
    readArticle: "Leggi l'articolo",
    all: "Tutti",
    minRead: "{n} min di lettura",
    filterLabel: "Filtra gli articoli per argomento",
  },
  notFound: {
    title: "Pagina non trovata",
    text: "Questa pagina non esiste o è stata spostata.",
    back: "Torna alla home",
  },
  tools,
};

export default it;
