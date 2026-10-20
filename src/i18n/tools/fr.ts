import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Outils",
  allTools: "Tous les outils",
  hub: {
    slug: "tools",
    metaTitle: "Outils et calculateurs gratuits pour le support | TascaLab",
    metaDescription:
      "Calculateurs gratuits pour les équipes support : comparez le coût des agents IA, estimez la facture WhatsApp Business API et calculez les SLA en heures ouvrées.",
    eyebrow: "Outils gratuits",
    title: "Outils gratuits pour les équipes support",
    intro: "Des calculateurs rapides, fondés sur des prix publiés et des calculs simples. Gratuits, sans inscription.",
    open: "Ouvrir l'outil",
  },
  common: {
    freeTool: "Outil gratuit · sans inscription",
    howItWorks: "Comment ça marche",
    faqTitle: "Questions fréquentes",
    sources: "Sources",
    estimate: "Estimations uniquement, pas un devis.",
    perMonth: "/mois",
    ctaTitle: "Vous voulez un chiffre exact pour votre équipe ?",
    ctaText: "Réservez un Health Check gratuit : un appel de 30 minutes, puis un rapport écrit avec l'offre et le prix fixe qui vous conviennent.",
    ctaBook: "Réserver un Health Check gratuit",
    otherTools: "Autres outils gratuits",
  },
  aiAgent: {
    slug: "calculateur-cout-agent-ia-support",
    navLabel: "Coût d'un agent IA de support",
    short: "Comparez des agents IA facturés à la résolution avec un développement à paiement unique, à votre volume.",
    metaTitle: "Calculateur de coût d'agent IA de support 2026 | TascaLab",
    metaDescription:
      "Comparez le coût mensuel de Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro et Agentforce à votre volume avec un agent IA de support sur mesure à paiement unique.",
    h1: "Calculateur de coût d'un agent IA de support",
    intro:
      "La plupart des agents IA de support facturent à la résolution, à la conversation ou à l'action : la facture augmente donc avec votre volume. Saisissez vos chiffres pour comparer les prix catalogue de six éditeurs avec un développement à paiement unique.",
    inputs: {
      title: "Votre volume",
      conversations: "Conversations IA par mois",
      resolutionRate: "Résolues sans intervention humaine",
      actions: "Actions Agentforce par conversation",
      buildTitle: "Développement à paiement unique",
      package: "Offre",
      platform: "Plateforme d'automatisation",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mois, facturé annuellement)",
        make: "Make Core (9 $/mois, facturé annuellement)",
        selfHosted: "n8n auto-hébergé (coût du serveur non inclus)",
      },
      tokens: "Tokens IA par conversation",
      inputTokens: "Entrée",
      outputTokens: "Sortie",
      tokensHint: "Valeurs d'exemple tirées d'une conversation de support publiée de 5 messages. Modifiez-les selon votre bot.",
    },
    results: {
      title: "Coût mensuel estimé",
      vendor: "Éditeur",
      monthly: "Par mois",
      year: "12 mois",
      yourBuild: "Développement à paiement unique",
      buildLine: "{price} une fois + {monthly}/mois de coûts de fonctionnement",
      payback: "Moins cher que {vendor} à partir du mois {months}",
      neverCheaper: "À ce volume, le développement n'est moins cher qu'aucun éditeur sur 12 mois.",
      cheapest: "Le moins cher",
      currencyNote: "Les prix des éditeurs sont des prix catalogue en USD, convertis au taux de la BCE du 16 octobre 2026.",
    },
    units: {
      fin: "0,99 $ par résultat (outcome) ; au moins 50 par mois avec un autre helpdesk",
      zendesk: "2,00 $ par résolution automatisée, paiement à l'usage",
      freddy: "49 $ les 100 sessions",
      hubspot: "0,50 $ par conversation résolue ; nécessite un plan Professional ou Enterprise",
      tidio: "0,50 $ par conversation à laquelle Lyro répond",
      agentforce: "0,10 $ par action (20 Flex Credits)",
    },
    notIncluded:
      "Non inclus : votre abonnement au helpdesk, les volumes inclus dans les plans, les remises sur volume et les taxes. Fin facture aussi certains transferts et routages comme des résultats : son coût réel peut donc être plus élevé.",
    sections: [
      {
        heading: "Comment fonctionne le calcul",
        text: "Les conversations résolues correspondent à vos conversations mensuelles multipliées par la part résolue sans intervention humaine. Fin, Zendesk et HubSpot facturent à la résolution ou au résultat, Freddy par lot de 100 sessions, Tidio Lyro par conversation à laquelle il répond, et Agentforce à l'action. Le prix catalogue de chaque éditeur renvoie à sa page de tarifs, ci-dessous.",
      },
      {
        heading: "Pourquoi les factures à la résolution augmentent",
        text: "Quand un éditeur facture à la résolution, chaque conversation supplémentaire résolue par l'agent alourdit la facture. Un développement à paiement unique n'a pas de frais par résolution : vous payez directement le fournisseur d'IA pour les tokens et la plateforme d'automatisation pour son plan.",
      },
      {
        heading: "Les coûts de fonctionnement d'un développement à paiement unique",
        text: "L'utilisation de l'IA est facturée au token par votre fournisseur d'IA. Ce calculateur utilise les prix catalogue de Claude Haiku 5.5 pour les prompts jusqu'à 100 000 tokens : 0,10 $ par million de tokens en entrée et 0,50 $ par million de tokens en sortie. Ajoutez la plateforme d'automatisation : n8n auto-hébergé (logiciel gratuit ; vous payez le serveur), n8n Cloud à partir de 20 €/mois ou Make à partir de 9 $/mois, tous deux facturés annuellement.",
      },
    ],
    faqs: [
      {
        q: "Ces prix sont-ils à jour ?",
        a: "Ce sont les prix catalogue publiés sur la page de tarifs de chaque éditeur en octobre 2026. Les éditeurs changent souvent leurs prix : vérifiez les pages en lien avant d'acheter.",
      },
      {
        q: "Qu'est-ce qui compte comme une résolution ?",
        a: "Chaque éditeur la définit différemment. Fin facture au résultat, Zendesk à la résolution automatisée, HubSpot à la conversation résolue et Freddy à la session. Lisez la définition de chaque éditeur avant de comparer.",
      },
      {
        q: "Pourquoi les prix sont-ils affichés dans ma devise ?",
        a: "Les éditeurs publient ces prix en dollars américains. En dehors de la version américaine de cette page, ils sont convertis au taux de référence de la Banque centrale européenne du 16 octobre 2026.",
      },
      {
        q: "Un développement à paiement unique est-il toujours moins cher ?",
        a: "Non. À faible volume, un agent facturé à la résolution peut coûter moins cher. Le calculateur indique si, et à partir de quand, un développement à paiement unique devient moins cher à votre volume.",
      },
    ],
  },
  whatsapp: {
    slug: "calculateur-cout-whatsapp-business",
    navLabel: "Coût de WhatsApp Business",
    short: "Estimez votre facture mensuelle de l'API WhatsApp, y compris le nouveau palier gratuit de messages de service.",
    metaTitle: "Calculateur de coût WhatsApp Business API 2026 | TascaLab",
    metaDescription:
      "Estimez vos coûts mensuels WhatsApp Business Platform au tarif par message de Meta, avec 1 000 messages de service gratuits par numéro dès le 1er octobre 2026.",
    h1: "Calculateur de coût de l'API WhatsApp Business",
    intro:
      "Depuis le 1er octobre 2026, Meta facture les messages de service WhatsApp au-delà de 1 000 messages gratuits par numéro professionnel et par mois, au tarif utilitaire du marché. Saisissez vos volumes et les tarifs de la grille tarifaire de Meta pour le pays de vos clients.",
    inputs: {
      volumeTitle: "Messages par mois",
      numbers: "Numéros de téléphone professionnels",
      service: "Messages de service (réponses libres)",
      utility: "Modèles utilitaires",
      marketing: "Modèles marketing",
      authentication: "Modèles d'authentification",
      ratesTitle: "Tarifs par message",
      ratesHint: "Copiez les tarifs pour le pays de vos clients depuis la grille tarifaire de Meta, dans votre devise de facturation.",
      rateCard: "Ouvrir les grilles tarifaires de Meta",
      utilityRate: "Tarif utilitaire (appliqué aussi aux messages de service)",
      marketingRate: "Tarif marketing",
      authenticationRate: "Tarif d'authentification",
    },
    results: {
      title: "Coût mensuel estimé",
      freeService: "Messages de service gratuits utilisés",
      billableService: "Messages de service facturables",
      service: "Messages de service",
      utility: "Modèles utilitaires",
      marketing: "Modèles marketing",
      authentication: "Modèles d'authentification",
      total: "Total par mois",
      enterRates: "Saisissez vos tarifs pour voir le coût.",
    },
    notIncluded:
      "Non inclus : les remises par paliers de volume sur les messages utilitaires et d'authentification, les frais de votre fournisseur WhatsApp et les taxes. Les messages envoyés dans une fenêtre de point d'entrée gratuite ne sont pas facturés.",
    sections: [
      {
        heading: "Ce qui a changé le 1er octobre 2026",
        text: "Les messages de service en texte libre, c'est-à-dire les réponses que vous envoyez dans la fenêtre de service client de 24 heures, ne sont plus illimités et gratuits. Chaque numéro de téléphone professionnel bénéficie de 1 000 messages de service gratuits par mois ; au-delà, Meta les facture au tarif utilitaire du marché. Les modèles utilitaires envoyés dans la fenêtre sont désormais facturés eux aussi.",
      },
      {
        heading: "Comment Meta facture les messages",
        text: "Meta facture chaque message délivré. Le tarif dépend de la catégorie du message (marketing, utilitaire, authentification ou service) et du pays du destinataire. Meta publie des grilles tarifaires dans plusieurs devises et ne peut modifier ses prix que le premier jour d'un trimestre.",
      },
      {
        heading: "Ce que ce calculateur ne prend pas en compte",
        text: "Les messages utilitaires et d'authentification ont des paliers de volume qui réduisent le tarif à fort volume ; ils ne sont pas modélisés ici. Les messages envoyés dans la fenêtre de point d'entrée gratuite de 72 heures, après une publicité Click to WhatsApp ou un bouton de Page Facebook, sont gratuits. Votre fournisseur WhatsApp peut ajouter ses propres frais.",
      },
    ],
    faqs: [
      {
        q: "Les messages de service WhatsApp sont-ils toujours gratuits ?",
        a: "Depuis le 1er octobre 2026, chaque numéro de téléphone professionnel bénéficie de 1 000 messages de service gratuits par mois. Meta facture à partir du 1 001e message, au tarif utilitaire du marché.",
      },
      {
        q: "Pourquoi dois-je saisir les tarifs ?",
        a: "Les tarifs dépendent du pays de vos clients et de votre devise de facturation. Meta les publie dans ses grilles tarifaires ; copiez ceux qui s'appliquent à vous pour obtenir une estimation exacte.",
      },
      {
        q: "À quelle fréquence Meta modifie-t-il les prix de WhatsApp ?",
        a: "Meta indique ne pouvoir mettre à jour ses tarifs que le premier jour de chaque trimestre, soit jusqu'à quatre fois par an.",
      },
      {
        q: "Les frais de mon fournisseur sont-ils inclus ?",
        a: "Non. Seuls les frais par message de Meta sont couverts. Votre fournisseur de solutions WhatsApp Business (Business Solution Provider) peut facturer ses propres frais.",
      },
    ],
  },
  sla: {
    slug: "calculateur-sla",
    navLabel: "Calculateur de SLA",
    short: "Calculez les échéances de SLA et les délais de première réponse en heures ouvrées.",
    metaTitle: "Calculateur SLA : heures ouvrées et jours fériés | TascaLab",
    metaDescription:
      "Calculez l'échéance d'un SLA de support, ou le temps ouvré qu'a pris une première réponse, en ne comptant que vos heures ouvrées, jours ouvrés et jours fériés.",
    h1: "Calculateur de SLA en heures ouvrées",
    intro:
      "Les objectifs de SLA se comptent généralement en heures ouvrées : un objectif de 4 heures fixé le vendredi après-midi peut donc arriver à échéance le lundi. Saisissez une heure de début et vos horaires pour voir l'échéance, ou mesurez le temps ouvré entre deux moments.",
    modes: { due: "Quelle est l'échéance ?", elapsed: "Combien de temps cela a-t-il pris ?" },
    inputs: {
      received: "Ticket reçu",
      target: "Objectif de SLA",
      hours: "heures",
      minutes: "minutes",
      replied: "Première réponse envoyée",
      scheduleTitle: "Horaires d'ouverture",
      opens: "Ouverture",
      closes: "Fermeture",
      days: "Jours ouvrés",
      dayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      holidays: "Jours fériés",
      addHoliday: "Ajouter",
      removeHoliday: "Supprimer {date}",
      noHolidays: "Aucun jour férié ajouté.",
    },
    results: {
      dueAt: "Échéance",
      calendarTime: "Temps calendaire jusqu'à l'échéance",
      businessTime: "Temps ouvré",
      elapsedCalendar: "Temps calendaire",
      withinTarget: "Dans l'objectif de {target}",
      overTarget: "Au-delà de l'objectif de {target}",
      invalid: "Vérifiez les heures et les horaires d'ouverture.",
      duration: "{h} h {m} min",
      days: "{d} j {h} h {m} min",
    },
    sections: [
      {
        heading: "Comment se comptent les SLA en heures ouvrées",
        text: "Le chronomètre du SLA ne tourne que pendant les heures ouvrées des jours ouvrés. Quand un ticket arrive en dehors de ces horaires, le chronomètre démarre à l'ouverture du jour ouvré suivant. Les jours fériés que vous ajoutez comptent comme des jours non ouvrés.",
      },
      {
        heading: "Fuseaux horaires",
        text: "Toutes les heures sont traitées dans un seul fuseau horaire : celui de vos horaires d'ouverture. Saisissez les heures des tickets dans ce même fuseau horaire.",
      },
    ],
    faqs: [
      {
        q: "Le calculateur ignore-t-il les week-ends ?",
        a: "Oui. Seuls les jours ouvrés que vous cochez comptent. Le samedi et le dimanche sont décochés par défaut.",
      },
      {
        q: "Comment gérer les jours fériés ?",
        a: "Ajoutez la date de chaque jour férié. Le calculateur le traite comme un jour non ouvré.",
      },
      {
        q: "Un jour ouvré compte-t-il huit heures ?",
        a: "Seulement si vos horaires d'ouverture durent huit heures. Saisissez vos heures d'ouverture et de fermeture, puis fixez l'objectif en heures.",
      },
    ],
  },
};

export default tools;
