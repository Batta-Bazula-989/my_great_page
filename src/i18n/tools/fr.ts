import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Outils",
  allTools: "Tous les outils",
  hub: {
    slug: "tools",
    metaTitle: "Calculateurs gratuits : lead scoring et support | TascaLab",
    metaDescription:
      "Calculateurs gratuits : créez et testez un lead score, comparez le coût des agents IA, estimez la facture WhatsApp Business API et calculez les échéances SLA.",
    eyebrow: "Outils gratuits",
    title: "Outils gratuits pour les équipes commerciales et support",
    intro: "Des calculateurs rapides, fondés sur des prix publiés et des calculs simples. Gratuits, sans inscription.",
    open: "Ouvrir l'outil",
  },
  common: {
    freeTool: "Outil gratuit · sans inscription",
    howItWorks: "Comment ça marche",
    faqTitle: "Questions fréquentes",
    sources: "Sources",
    estimate: "Estimations uniquement, pas un devis.",
    max: "Maximum : {value}",
    min: "Minimum : {value}",
    perMonth: "/mois",
    ctaTitle: "Vous voulez un chiffre exact pour votre équipe ?",
    ctaText: "Réservez un Health Check gratuit : un appel de 30 minutes, puis un rapport écrit avec l'offre et le prix fixe qui vous conviennent.",
    ctaBook: "Réserver un Health Check gratuit",
    otherTools: "Autres outils gratuits",
  },
  leadScore: {
    slug: "calculateur-lead-scoring",
    navLabel: "Calculateur de lead scoring",
    short: "Construisez un score de fit et d'engagement, testez-le sur un lead et copiez le modèle.",
    metaTitle: "Calculateur de lead scoring : fit et engagement | TascaLab",
    metaDescription:
      "Calculateur de lead scoring gratuit : créez un score de fit et d'engagement avec les limites et seuils de HubSpot, testez-le sur un lead et copiez le modèle.",
    h1: "Calculateur de lead scoring",
    intro:
      "Construisez un score de lead à points sur le modèle de l'outil de lead scoring de HubSpot : des critères de fit pour qui est le lead, des critères d'engagement pour ce qu'il fait, chaque score étant plafonné à sa limite et découpé en High, Medium et Low. Testez-le sur un lead, vérifiez que le modèle ne contient pas d'erreurs, puis copiez-le dans votre CRM.",
    inputs: {
      criteriaTitle: "Vos critères",
      criteriaHint:
        "Cochez les critères qui s'appliquent à un lead que vous voulez tester. Les exemples sont fictifs : remplacez chaque libellé et chaque valeur de points par les vôtres.",
      label: "Critère",
      score: "Score",
      points: "Points",
      applies: "S'applique au lead de test",
      remove: "Supprimer {label}",
      add: "Ajouter un critère",
      maxReached: "Jusqu'à {n} critères.",
      settingsTitle: "Paramètres des scores",
      limit: "Limite du score",
      limitOption: "{min} à {max}",
      high: "High à partir de",
      medium: "Medium à partir de",
      thresholdsHint:
        "Les limites sont les options proposées par HubSpot. Les seuils par défaut reprennent l'exemple de HubSpot : 70–100 High, 40–69 Medium, moins de 40 Low.",
    },
    scores: { fit: "Fit", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "Le secteur correspond à votre profil client idéal", score: "fit", points: 30, applies: true },
      { label: "La taille de l'entreprise est dans votre fourchette cible", score: "fit", points: 25, applies: true },
      { label: "Le poste est celui d'un décideur", score: "fit", points: 25, applies: false },
      { label: "Situé dans une région que vous ne desservez pas", score: "fit", points: -40, applies: false },
      { label: "A répondu avec intérêt à votre outreach", score: "engagement", points: 40, applies: true },
      { label: "A visité la page de tarifs", score: "engagement", points: 20, applies: true },
      { label: "A ouvert vos trois derniers e-mails", score: "engagement", points: 10, applies: false },
      { label: "S'est désabonné de vos e-mails", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Votre lead de test",
      combined: "Libellé combiné",
      combinedDesc: "Fit {fit}, engagement {engagement}",
      range: "Plage possible : de {min} à {max}",
      checksTitle: "Avant de le mettre en place",
      allGood: "Aucun problème détecté dans ce modèle.",
      noCriteria: "{score} : ajoutez au moins un critère.",
      order: "{score} : Medium doit être inférieur à High.",
      unreachable: "{score} : aucun lead ne peut atteindre High. Le maximum qu'un lead peut obtenir est {max}.",
      capped: "{score} : les points positifs totalisent {total}, mais le score s'arrête à {limit}.",
      copy: "Copier le modèle sous forme de tableau",
      copied: "Copié",
      copyFailed: "Impossible de copier. Sélectionnez les critères et copiez-les à la main.",
      tableHeads: { score: "Score", criterion: "Critère", points: "Points", limit: "Limite", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "Comment le score est calculé",
        text: "Chaque critère ajoute ou retire des points lorsqu'il s'applique à un lead. Les critères de fit décrivent qui est le lead, comme le secteur, la taille de l'entreprise ou la fonction ; les critères d'engagement décrivent ce que fait le lead, comme les réponses, les visites ou les ouvertures. Chaque score s'arrête à sa limite, comme dans l'outil de lead scoring de HubSpot, et les seuils transforment le nombre en High, Medium ou Low. Le libellé combiné suit la convention de HubSpot : la lettre correspond à la bande de fit (A élevé, C faible) et le chiffre à la bande d'engagement (1 élevé, 3 faible) ; un lead peu adapté mais très engagé est donc C1.",
      },
      {
        heading: "La mise en place dans HubSpot",
        text: "L'outil de lead scoring de HubSpot exige Marketing Hub ou Sales Hub Professional ou Enterprise. Les limites de score vont de -100 à 100 jusqu'à -10 000 à 10 000, avec 100 comme maximum par défaut. Dans un score, vous pouvez ajouter des groupes dotés de leurs propres limites, et toutes les limites de groupe comptent dans la limite du score. Pour l'engagement, la décroissance du score peut réduire les points tous les 1, 3, 6 ou 12 mois, chaque mois comptant 30 jours.",
      },
      {
        heading: "La mise en place dans Attio",
        text: "Attio n'a pas d'outil de scoring dédié. Sur les forfaits Pro, Enterprise et Ultra, un attribut formule peut additionner des points avec des conditions if(), en utilisant l'opérateur ?? pour traiter les champs vides comme 0. Une formule qui renvoie un nombre devient un attribut nombre, se recalcule automatiquement quand les champs qu'elle utilise changent et ne consomme aucun crédit de l'espace de travail. Sur Free et Plus, stockez le score dans un attribut nombre qu'un workflow ou l'API remplit.",
      },
      {
        heading: "Quand vous n'avez pas besoin d'un score",
        text: "Si votre équipe lit chaque nouveau lead le jour même, un score apporte peu. Il devient rentable quand les leads arrivent plus vite que quiconque ne peut les examiner, ou quand les signaux qui comptent le plus, comme une réponse intéressée ou une visite de votre page de tarifs, se trouvent dans des outils que votre CRM ne voit pas de lui-même.",
      },
    ],
    faqs: [
      {
        q: "Les points des exemples sont-ils une recommandation ?",
        a: "Non. Ce sont des valeurs fictives qui montrent comment fonctionne le calcul. Remplacez chaque critère et chaque valeur de points par les vôtres. Les seules valeurs par défaut tirées d'un éditeur sont les limites de score de HubSpot et ses seuils d'exemple.",
      },
      {
        q: "Que signifient A1 et C3 ?",
        a: "Ce sont les libellés de HubSpot pour les scores combinés. La lettre correspond à la bande de fit, de A (fit élevé) à C (fit faible) ; le chiffre correspond à la bande d'engagement, de 1 (engagement élevé) à 3 (engagement faible).",
      },
      {
        q: "HubSpot peut-il construire le score à votre place avec l'IA ?",
        a: "Les scores de contacts construits par l'IA de HubSpot exigent Marketing Hub Enterprise et au moins 50 contacts, 25 convertis et 25 non convertis, avant de pouvoir générer un score.",
      },
      {
        q: "Attio propose-t-il du lead scoring ?",
        a: "Pas d'outil de scoring dédié. Sur Pro, Enterprise et Ultra, un attribut formule peut calculer automatiquement un score à points ; sur les autres forfaits, un workflow ou l'API écrit le score dans un attribut nombre.",
      },
      {
        q: "Ce que je saisis est-il enregistré ?",
        a: "Non. Le score est calculé dans votre navigateur, et rien de ce que vous saisissez n'est envoyé nulle part.",
      },
    ],
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
      package: "Prix de l'offre {plan} (paiement unique)",
      priceHint: "L'offre {plan} est proposée à partir de {price}. Saisissez le prix fixe indiqué dans votre rapport Health Check si vous en avez un.",
      platform: "Plateforme d'automatisation",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mois, facturé annuellement)",
        make: "Make Core (9 $/mois, facturé annuellement)",
        selfHosted: "n8n auto-hébergé (coût du serveur non inclus)",
      },
      tokens: "Tokens IA par conversation",
      inputTokens: "Entrée",
      outputTokens: "Sortie",
      tokensHint: "Valeurs par défaut indicatives : aucune source officielle ne publie de chiffre type. Remplacez-les par les chiffres réels de votre bot, tirés du tableau de bord d'utilisation de votre fournisseur d'IA.",
    },
    results: {
      title: "Coût estimé",
      vendor: "Éditeur",
      monthly: "Par mois",
      year: "12 mois",
      yourBuild: "Développement à paiement unique",
      buildLine: "{price} une fois + {monthly}/mois de coûts de fonctionnement",
      payback: "Moins cher que {vendor} à partir du mois {months}",
      neverCheaper: "À ce volume, le développement n'est moins cher qu'aucun éditeur sur 12 mois.",
      cheapest: "Éditeur le moins cher",
      currencyNote: "Les prix des éditeurs sont des prix catalogue en USD, convertis au taux de la BCE du 16 octobre 2026.",
      pricesAsOf: "Prix catalogue des éditeurs en {date}.",
      empty: "Saisissez vos conversations IA par mois pour comparer les coûts.",
    },
    units: {
      fin: "0,99 $ par résultat (outcome) ; avec un autre helpdesk, un minimum de 49 $ par mois qui inclut 50 résultats",
      zendesk: "2,00 $ par résolution automatisée, paiement à l'usage (1,50 $ avec engagement)",
      freddy: "49 $ les 100 sessions",
      hubspot: "0,50 $ par conversation résolue (50 HubSpot Credits) ; nécessite un plan Professional ou Enterprise",
      tidio: "Packs mensuels de 39 $ pour 50 conversations à 700 $ pour 1 000 ; au-delà, Lyro Connect à partir de 0,50 $ par conversation",
      agentforce: "0,10 $ par action (20 Flex Credits, 500 $ les 100 000)",
    },
    notIncluded:
      "Non inclus : votre abonnement au helpdesk, les volumes inclus dans les plans, les remises sur volume et les taxes. Fin facture aussi comme des résultats les transferts de Procedure (une Procedure que vous configurez pour qu'elle se termine par un transfert) : son coût réel peut donc être plus élevé. Zendesk fait passer les comptes à des paliers de résolutions dont le prix est fixé par son équipe commerciale.",
    sections: [
      {
        heading: "Comment fonctionne le calcul",
        text: "Les conversations résolues correspondent à vos conversations mensuelles multipliées par la part résolue sans intervention humaine. Fin facture au résultat en plus d'un minimum de 49 $ par mois, Zendesk et HubSpot à la résolution, Freddy par lot de 100 sessions, Tidio Lyro par packs mensuels de conversations auxquelles il répond, et Agentforce à l'action. Le prix catalogue de chaque éditeur renvoie à sa page de tarifs, ci-dessous.",
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
        a: "Ce sont les prix catalogue publiés sur les pages de tarifs officielles de chaque éditeur, vérifiés en novembre 2026. Les éditeurs changent souvent leurs prix : vérifiez les pages en lien avant d'acheter.",
      },
      {
        q: "Qu'est-ce qui compte comme une résolution ?",
        a: "Chaque éditeur la définit différemment. Fin facture au résultat (une résolution, ou une Procedure qui se termine par un transfert), Zendesk à la résolution automatisée, HubSpot à la conversation non transférée à une personne dans les 72 heures, Freddy à la session et Tidio à la conversation à laquelle Lyro répond. Lisez la définition de chaque éditeur avant de comparer.",
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
      "Non inclus : les remises par paliers de volume sur les messages utilitaires et d'authentification, les messages Meta Business Agent, les frais de votre fournisseur WhatsApp et les taxes. Les messages envoyés dans une fenêtre de point d'entrée gratuite ne sont pas facturés.",
    sections: [
      {
        heading: "Ce qui a changé le 1er octobre 2026",
        text: "Les messages de service en texte libre, c'est-à-dire les réponses que vous envoyez dans la fenêtre de service client de 24 heures, ne sont plus illimités et gratuits. Chaque numéro de téléphone professionnel bénéficie de 1 000 messages de service gratuits par mois ; au-delà, Meta les facture au tarif utilitaire du marché. Les modèles utilitaires envoyés dans la fenêtre sont désormais facturés eux aussi.",
      },
      {
        heading: "Comment Meta facture les messages",
        text: "Meta facture chaque message délivré. Le tarif dépend de la catégorie du message (marketing, utilitaire, authentification ou service) et du pays du destinataire ; les messages de service coûtent le même tarif catalogue que les messages utilitaires et d'authentification sur ce marché. Une cinquième catégorie, les messages Meta Business Agent envoyés par l'agent IA de Meta lui-même, est quant à elle facturée au token. Meta publie des grilles tarifaires dans 16 devises et ne peut modifier ses prix que le premier jour d'un trimestre.",
      },
      {
        heading: "Ce que ce calculateur ne prend pas en compte",
        text: "Les messages utilitaires et d'authentification ont des paliers de volume qui réduisent le tarif à fort volume ; ils ne sont pas modélisés ici. Les messages sont gratuits dans la fenêtre de point d'entrée gratuite, qui s'ouvre lorsque vous répondez dans les 24 heures à une personne qui vous a écrit depuis une publicité Click to WhatsApp dans l'application WhatsApp pour Android ou iOS, et qui peut rester ouverte jusqu'à 7 jours. Les messages Meta Business Agent (2,00 $ par million de tokens) et les frais de votre fournisseur WhatsApp ne sont pas inclus.",
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
