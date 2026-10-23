import type { Dictionary } from "./en";
import tools from "./tools/fr";

const fr: Dictionary = {
  meta: {
    homeTitle: "Chatbots IA, callbots, automatisation des tickets | TascaLab",
    homeDescription:
      "Automatisation du support : chatbots IA, callbots, routage de tickets et rapports automatisés pour Zendesk, Freshdesk et Jira. Prix fixes, Health Check gratuit.",
  },
  nav: {
    services: "Ce que je fais",
    whyMe: "Pourquoi moi ?",
    pricing: "Tarifs",
    reviews: "Avis",
    faq: "FAQ",
    resources: "Ressources",
    cta: "Health Check gratuit",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    logoAlt: "Logo TascaLab",
    skipToContent: "Aller au contenu",
  },
  hero: {
    eyebrow: "Une automatisation du support qui tient vraiment la route",
    titleBefore: "Chatbots IA, callbots et ",
    titleHighlight: "automatisation des tickets",
    titleAfter: " pour les équipes support",
    intro: "Je suis Roman. Je les construis moi-même, à un prix fixe à partir de {price}, payé une seule fois.",
    callNote: "Health Check gratuit : un appel de 30 minutes avec moi, puis un rapport écrit.",
    ctaBook: "Réserver un Health Check gratuit",
    ctaUpwork: "Avis sur Upwork",
    highlights: ["Fonctionne avec votre helpdesk actuel", "Opérationnel en 1 à 3 semaines", "30 jours de support inclus"],
    integratesWith: "S'intègre avec",
  },
  services: {
    eyebrow: "Ce que je fais",
    title: "Services d'automatisation du support client",
    items: [
      {
        title: "Chatbots et callbots de support",
        description:
          "Répond aux messages et appels courants, puis transmet le reste à votre équipe.",
      },
      {
        title: "Routage et catégorisation des tickets",
        description:
          "Chaque nouveau ticket tagué, priorisé et attribué automatiquement.",
      },
      {
        title: "Reporting",
        description:
          "Les rapports que votre équipe prépare à la main, envoyés automatiquement.",
      },
      {
        title: "Solution sur mesure",
        description:
          "Un besoin spécifique ? Je le cadre et je le construis.",
      },
    ],
  },
  process: {
    eyebrow: "Comment ça marche",
    title: "Du premier appel à une automatisation qui fonctionne",
    steps: [
      {
        title: "Health Check gratuit",
        description: "Un appel de 30 minutes sur votre configuration et les endroits où l'automatisation serait utile.",
      },
      {
        title: "Rapport écrit",
        description: "2 à 3 recommandations, l'offre qui vous convient et son prix fixe.",
      },
      {
        title: "Prix fixe convenu",
        description: "Convenu avant le début des travaux. Payé une seule fois, sans abonnement.",
      },
      {
        title: "Réalisé en 1 à 3 semaines",
        description: "Intégré à votre helpdesk et exécuté dans vos propres comptes.",
      },
      {
        title: "30 jours de support",
        description: "Si quelque chose casse après le lancement, je le répare.",
      },
    ],
  },
  fit: {
    eyebrow: "Est-ce pour vous ?",
    title: "À qui s'adresse cette automatisation du support",
    goodTitle: "C'est pour vous",
    notTitle: "Ce n'est pas pour vous",
    good: [
      "Du travail de support répétitif, tous les jours",
      "Vous utilisez Zendesk, Freshdesk, Jira ou un outil similaire",
      "Des rapports encore extraits à la main",
      "Des outils qui ne communiquent pas entre eux",
    ],
    not: [
      "Vous avez besoin d'un responsable support à temps plein",
      "Vous voulez remplacer tous vos outils de support",
      "Vous attendez de l'IA qu'elle remplace votre équipe",
    ],
  },
  whyMe: {
    eyebrow: "Pourquoi travailler avec moi",
    title: "Conçu par quelqu'un qui a travaillé dans le support",
    role: "Ingénieur en automatisation du support client",
    linkedin: "Mon parcours sur LinkedIn",
    items: [
      {
        title: "J'ai travaillé dans le support",
        description: "J'ai traité des tickets et construit des rapports à la main : je sais ce qui ralentit les équipes.",
      },
      {
        title: "Conçu pour tenir",
        description: "Gestion des erreurs, tests des cas limites et supervision dans chaque automatisation.",
      },
      {
        title: "Tout vous appartient",
        description: "Documentation complète et passation. Vous n'êtes pas captif.",
      },
      {
        title: "Des réponses franches",
        description: "Si quelque chose ne vaut pas la peine d'être automatisé, je vous le dirai.",
      },
    ],
  },
  pricing: {
    eyebrow: "Tarifs",
    title: "Offres d'automatisation du support à prix fixe",
    intro: "Un prix, payé une seule fois. Sans abonnement.",
    oneTimeFee: "paiement unique",
    cta: "En parler lors d'un Health Check",
    from: "à partir de {price}",
    delivery: "Livraison",
    deliveryTime: "1 à 3 semaines",
    included: "Ce qui est inclus",
    groups: {
      chat: "Chatbots et callbots",
      tickets: "Tickets et rapports",
      custom: "Projets sur mesure",
    },
    running: "Coûts mensuels de fonctionnement",
    showRunning: "Afficher les coûts mensuels de fonctionnement",
    hideRunning: "Masquer les coûts mensuels de fonctionnement",
    runningNote: "Facturés par les fournisseurs des outils. Non inclus dans le prix de l'offre.",
    estimate: "Estimez les vôtres avec mes calculateurs gratuits :",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Répond aux questions courantes sur 1–2 canaux et transmet le reste à votre équipe.",
        included: [
          "1–2 canaux : site web, WhatsApp, Telegram, Messenger ou Instagram",
          "Répond aux FAQ et collecte les informations client",
          "Transmet le reste à votre équipe",
        ],
        running: [
          "Utilisation de l'IA, facturée au token par votre fournisseur d'IA, par ex. Claude Haiku 5.5 à partir de 0,10 $ / 0,50 $ par million de tokens en entrée / en sortie*",
          "Plateforme d'automatisation : n8n auto-hébergé (logiciel gratuit ; vous payez le serveur), n8n Cloud à partir de 20 €/mois ou Make à partir de 9 $/mois (tous deux facturés annuellement)",
          "WhatsApp uniquement : à partir du 1er octobre 2026, 1 000 messages de service gratuits par mois et par numéro professionnel, puis tarif de Meta par message",
        ],
      },
      {
        name: "Voice Bot",
        description: "Répond aux appels entrants, les trie et les transfère à votre équipe.",
        included: [
          "Répond aux appels entrants",
          "Tri et transfert propre vers votre équipe",
          "Connecté à votre helpdesk",
        ],
        running: [
          "Frais à la minute de la plateforme vocale, par ex. Retell AI à partir de 0,07 $ la minute, plus le modèle d'IA et la ligne téléphonique",
          "Un numéro de téléphone fourni par votre opérateur téléphonique",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Gère des conversations plus complexes sur 3–5 canaux.",
        included: [
          "3–5 canaux",
          "Conversations en plusieurs étapes",
          "Transfert vers votre équipe, connecté à votre helpdesk",
        ],
        running: [
          "Utilisation de l'IA, facturée au token par votre fournisseur d'IA, par ex. Claude Haiku 5.5 à partir de 0,10 $ / 0,50 $ par million de tokens en entrée / en sortie*",
          "Plateforme d'automatisation : n8n auto-hébergé (logiciel gratuit ; vous payez le serveur), n8n Cloud à partir de 20 €/mois ou Make à partir de 9 $/mois (tous deux facturés annuellement)",
          "WhatsApp uniquement : à partir du 1er octobre 2026, 1 000 messages de service gratuits par mois et par numéro professionnel, puis tarif de Meta par message",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Chaque ticket tagué, priorisé et attribué dès son arrivée.",
        included: [
          "L'IA classe chaque nouveau ticket selon le sujet et l'urgence",
          "Définit les tags et la priorité, attribue au bon groupe",
          "Zendesk, Freshdesk ou Jira Service Management",
        ],
        running: [
          "Classification par IA, facturée au token par votre fournisseur d'IA, par ex. Claude Haiku 5.5 à partir de 0,10 $ / 0,50 $ par million de tokens en entrée / en sortie*",
          "Plateforme d'automatisation : n8n auto-hébergé (logiciel gratuit ; vous payez le serveur), n8n Cloud à partir de 20 €/mois ou Make à partir de 9 $/mois (tous deux facturés annuellement)",
        ],
      },
      {
        name: "Automated Reports",
        description: "Les rapports que votre équipe prépare à la main, envoyés automatiquement.",
        included: [
          "Indicateurs clés de support issus de votre helpdesk",
          "Envoi planifié par e-mail ou dans Slack",
        ],
        running: [
          "Plateforme d'automatisation : n8n auto-hébergé (logiciel gratuit ; vous payez le serveur), n8n Cloud à partir de 20 €/mois ou Make à partir de 9 $/mois (tous deux facturés annuellement)",
          "Pas de frais d'IA, sauf si vous voulez des résumés rédigés par l'IA",
        ],
      },
      {
        name: "Custom Automation",
        description: "Construite autour de vos workflows, de vos outils et de vos besoins.",
        included: [
          "Périmètre défini lors de votre Health Check gratuit",
          "Prix fixe convenu avant le début des travaux",
          "Tout outil doté d'une API ou de webhooks",
        ],
        running: ["Selon les outils utilisés ; estimation fournie dans le rapport de votre Health Check"],
      },
    ],
    footnote:
      "* Prix catalogue d'Anthropic (octobre 2026) pour les prompts jusqu'à 100 000 tokens ; les prompts plus longs coûtent 0,50 $ / 2,50 $. Les autres fournisseurs et modèles ont des tarifs différents, et les fournisseurs peuvent modifier leurs prix.",
    allPackages: "Chaque offre inclut 30 jours de support après la livraison et une documentation de base.",
    healthCheck: {
      title: "Health Check gratuit",
      text: "Un appel de 30 minutes, puis un rapport écrit : ce qu'il faut automatiser en premier, l'offre qui vous convient et son prix.",
      cta: "Réserver votre Health Check",
      price: "Gratuit",
    },
  },
  data: {
    eyebrow: "Vos données",
    title: "Vos données et le RGPD",
    intro: "Vous choisissez où tourne votre automatisation.",
    options: [
      {
        title: "Dans vos propres comptes (par défaut)",
        points: [
          "Tourne dans vos propres comptes : helpdesk, automatisation et IA",
          "Les données clients restent dans des systèmes que vous contrôlez",
          "Tout vous appartient et vous contrôlez mes accès",
        ],
      },
      {
        title: "Hébergement par mes soins, avec un DPA",
        points: [
          "Contrat de sous-traitance (DPA) au titre de l'article 28 du RGPD, signé avant tout traitement de données personnelles",
          "Sous-traitants ultérieurs uniquement avec votre autorisation écrite",
          "À la fin, données supprimées ou restituées, à votre choix",
        ],
      },
    ],
    note: "Cette section décrit la manière dont les projets sont organisés. Elle ne constitue pas un conseil juridique.",
  },
  reviews: {
    eyebrow: "Avis clients",
    title: "Avis vérifiés sur Upwork",
    intro: "Issus de contrats payés sur Upwork.",
    quoted: "Avis cités mot pour mot depuis mon profil Upwork.",
    verify: "Vérifier sur Upwork",
    stars: "{rating} sur 5 étoiles",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquentes",
    items: [
      {
        q: "Dois-je changer d'outils de support ?",
        a: "Non. Je travaille avec ce que vous utilisez déjà — Zendesk, Freshdesk, Jira, Slack, outils internes. L'objectif est de connecter et d'améliorer ce que vous avez, pas de le remplacer.",
      },
      {
        q: "Et si quelque chose tombe en panne après le lancement ?",
        a: "Chaque projet comprend 30 jours de support après le lancement. Si quelque chose casse pendant cette période, je le répare. Je m'appuie sur des intégrations standard — API, webhooks, Make/n8n — et non sur des bricolages fragiles qui ne fonctionnent que dans un seul environnement.",
      },
      {
        q: "Mon équipe pourra-t-elle maintenir le système une fois le projet terminé ?",
        a: "Oui. Je documente tout clairement : la logique, le flux, les cas limites. Vous n'êtes pas captif. Un support continu est disponible, mais facultatif.",
      },
      {
        q: "Pouvez-vous intégrer un outil en particulier ?",
        a: "S'il dispose d'une API ou prend en charge les webhooks, presque certainement. Mentionnez-le lors de votre Health Check et je vous le confirmerai.",
      },
      {
        q: "Que se passe-t-il concrètement pendant le Health Check gratuit ?",
        a: "Un appel de 30 minutes sur votre configuration actuelle, les points de friction et les endroits où l'automatisation ferait vraiment la différence. Ensuite, vous recevez un rapport écrit avec 2 à 3 recommandations concrètes, l'offre et le prix fixe qui vous conviennent, et les coûts mensuels de fonctionnement estimés. Pas de présentation commerciale. Aucune pression.",
      },
      {
        q: "Combien de temps dure un projet type ?",
        a: "La plupart des mises en place prennent 1 à 3 semaines, selon la complexité et la rapidité avec laquelle nous nous accordons sur les besoins. Je vous donne dès le départ un calendrier réaliste, pas un calendrier optimiste.",
      },
    ],
  },
  contact: {
    eyebrow: "Parlons-en",
    title: "Obtenez un Health Check gratuit de votre support",
    intro: "Un appel de 30 minutes, puis un rapport écrit.",
    cta: "Réserver un Health Check gratuit",
    linkedin: "Entrer en relation sur LinkedIn",
    email: "E-mail",
    upwork: "Avis Upwork",
  },
  footer: {
    resourcesNav: "Ressources",
    allResources: "Toutes les ressources",
    upworkReviews: "Avis Upwork",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
  categories: {
    services: { label: "Services", blurb: "Ce qui est construit : bots, routage et reporting." },
    helpdesks: { label: "Par helpdesk", blurb: "L'automatisation dans les outils que votre équipe utilise déjà." },
    channels: { label: "Par canal", blurb: "Des bots de support là où vos clients vous écrivent." },
    basics: { label: "Les bases", blurb: "Définitions, indicateurs et fonctionnement des transferts." },
    guides: { label: "Guides et conformité", blurb: "Comparatifs d'outils et règles européennes pour les bots de support." },
  },
  cookie: {
    text: "J'utilise des cookies de mesure d'audience et de mesure publicitaire pour comprendre comment les visiteurs trouvent et utilisent ce site.",
    privacy: "Politique de confidentialité",
    decline: "Refuser",
    accept: "Accepter",
  },
  booking: {
    title: "Réservez un Health Check gratuit",
    description:
      "Un appel de 30 minutes avec moi, Roman, puis un rapport écrit. Sans engagement, sans argumentaire commercial.",
    about: "Objet : {topic}",
    close: "Fermer",
    fullName: "Nom complet",
    fullNamePlaceholder: "Marie Dupont",
    email: "E-mail professionnel",
    emailPlaceholder: "marie@entreprise.fr",
    company: "Nom de l'entreprise",
    companyPlaceholder: "Dupont SAS",
    meetingMethod: "Mode de rendez-vous préféré",
    methodPhone: "Téléphone",
    phone: "Numéro de téléphone",
    phonePlaceholder: "06 12 34 56 78",
    searchCountry: "Rechercher un pays ou un indicatif...",
    noCountry: "Aucun pays trouvé.",
    telegram: "Lien ou nom d'utilisateur Telegram",
    telegramPlaceholder: "https://t.me/pseudo ou @pseudo",
    submitCalendar: "Continuer vers l'agenda",
    submitting: "Envoi en cours…",
    submit: "Réserver mon Health Check gratuit",
    nextCalendar: "Ensuite, vous choisissez un créneau dans mon agenda.",
    nextContact: "Je vous contacterai sous 24 heures pour convenir d'un créneau.",
    sendFailed: "Votre demande n'a pas abouti",
    networkError: "Veuillez réessayer dans un instant ou me contacter directement :",
    sentTitle: "Demande envoyée",
    sentCalendar: "Choisissez maintenant un créneau qui vous convient dans mon agenda.",
    openCalendar: "Ouvrir mon agenda",
    sent: "Je vous recontacterai sous 24 heures pour convenir d'un créneau.",
    errors: {
      nameRequired: "Le nom complet est obligatoire",
      nameShort: "Le nom complet doit comporter au moins 2 caractères",
      nameLong: "Le nom complet doit comporter moins de 50 caractères",
      nameChars: "Le nom complet ne peut contenir que des lettres, des espaces, des points, des traits d'union et des apostrophes",
      emailRequired: "L'e-mail professionnel est obligatoire",
      emailInvalid: "Veuillez saisir une adresse e-mail valide",
      companyLength: "Le nom de l'entreprise doit comporter entre 2 et 50 caractères",
      phoneRequired: "Le numéro de téléphone est obligatoire",
      phoneChars: "Utilisez uniquement des chiffres, des espaces, des points, des tirets et des parenthèses",
      phoneDigits: "Le numéro de téléphone doit comporter de 6 à 15 chiffres",
      telegramRequired: "Le lien ou le nom d'utilisateur Telegram est obligatoire",
      telegramInvalid:
        "Veuillez saisir un lien Telegram valide (par ex. https://t.me/pseudo) ou un nom d'utilisateur (par ex. @pseudo)",
    },
  },
  seo: {
    home: "Accueil",
    byline: "Par Roman Zakharenko",
    factsChecked: "Faits vérifiés",
    atAGlance: "En bref",
    faqTitle: "Questions fréquentes",
    faqShort: "FAQ",
    ctaTitle: "Vous voulez mettre cela en place pour votre équipe ?",
    ctaText:
      "Réservez un Health Check gratuit : un appel de 30 minutes et un rapport écrit avec 2 à 3 recommandations concrètes, un prix fixe et une estimation des coûts de fonctionnement. Sans argumentaire commercial.",
    ctaBook: "Réserver un Health Check gratuit",
    ctaUpwork: "Avis sur Upwork",
    sources: "Sources",
    onThisPage: "Sur cette page",
    related: "Voir aussi",
  },
  resources: {
    metaTitle: "Ressources sur l'automatisation du support client | TascaLab",
    metaDescription:
      "Guides : chatbots IA de support, routage des tickets, automatisation Zendesk, Freshdesk et Jira, bots WhatsApp et Telegram, indicateurs, SLA et règles de l'UE.",
    eyebrow: "Ressources",
    title: "Ressources sur l'automatisation du support client",
    intro:
      "Des guides vérifiés sur les bots de support, le routage des tickets, l'automatisation des helpdesks, les indicateurs de support et les règles européennes qui s'y appliquent. Chaque page cite les sources officielles sur lesquelles elle s'appuie.",
    readGuide: "Lire le guide",
  },
  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },
  tools,
};

export default fr;
