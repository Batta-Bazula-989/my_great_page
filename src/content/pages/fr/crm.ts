import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "workflows-attio-automatisation",
    category: "crm",
    navLabel: "Workflows Attio",
    primaryKeyword: "workflows Attio automatisation",
    title: "Workflows Attio : déclencheurs, blocs, crédits et API",
    description:
      "Les workflows Attio expliqués : blocs déclencheurs et d'action, usage des crédits, limites de l'API REST, signature des webhooks et liens avec le support.",
    h1: "Workflows Attio : comment fonctionne l'automatisation du CRM dans Attio",
    intro:
      "Attio automatise le travail CRM avec des workflows. Un workflow part d'un bloc déclencheur et exécute une chaîne de blocs d'action, comme mettre à jour une fiche, créer une tâche, envoyer un message Slack ou effectuer une requête HTTP. Les exécutions de workflow consomment les crédits de l'espace de travail, et tout le reste se connecte via l'API REST et les webhooks d'Attio.",
    keyFacts: [
      "Un workflow Attio se compose d'un bloc déclencheur, qui le lance, et de blocs d'action, qui font le travail.",
      "Les workflows consomment les crédits de l'espace de travail. La plupart des blocs consomment un crédit, et un bloc qui échoue, ainsi que tous les blocs qui le suivent, n'en consomment aucun.",
      "L'API REST d'Attio autorise 100 requêtes de lecture et 25 requêtes d'écriture par seconde. Au-delà de la limite, elle renvoie HTTP 429 avec un en-tête Retry-After.",
      "Attio signe les webhooks avec un HMAC-SHA256 du corps de la requête, envoyé dans l'en-tête Attio-Signature.",
    ],
    sections: [
      {
        heading: "Comment sont construits les workflows Attio",
        blocks: [
          {
            type: "p",
            text: "Vous construisez un workflow sur un canevas. Le bloc déclencheur détermine quand il s'exécute, et les blocs d'action qui le suivent déterminent ce qui se passe. La bibliothèque de blocs d'Attio classe les déclencheurs en quatre types :",
          },
          {
            type: "ul",
            items: [
              "Les déclencheurs de fiche, comme 'Record created'.",
              "Les déclencheurs de liste, comme 'Record added to list'.",
              "Les déclencheurs de tâche, comme 'Task created'.",
              "Les déclencheurs utilitaires, comme 'Manual run', une planification ou un webhook entrant.",
            ],
          },
          {
            type: "p",
            text: "Le centre d'aide d'Attio cite comme exemples de blocs d'action la mise à jour d'une fiche, la création d'une tâche, l'envoi d'un message Slack, l'inscription d'une personne dans une séquence et l'exécution d'une requête HTTP. Vous pouvez aussi décrire un workflow en langage courant et laisser Ask Attio le construire. Les apps créées avec le SDK Attio peuvent ajouter leurs propres blocs, qui apparaissent alors dans le sélecteur de blocs à côté des blocs intégrés.",
          },
          {
            type: "note",
            text: "Par défaut, un workflow ne peut pas écrire dans un objet. Un admin, ou un membre disposant d'un accès complet à cet objet, doit d'abord accorder l'accès au workflow. Vérifiez ce point avant de tester un workflow qui met à jour des fiches.",
          },
        ],
      },
      {
        heading: "Comment les workflows consomment des crédits",
        blocks: [
          {
            type: "p",
            text: "Les exécutions de workflow et les fonctions d'IA puisent dans les crédits partagés de l'espace de travail. La documentation de facturation d'Attio décrit comment ils sont décomptés :",
          },
          {
            type: "ul",
            items: [
              "La plupart des blocs de workflow consomment un crédit à chaque exécution.",
              "Seuls les blocs réellement exécutés sont facturés en crédits. Si une exécution échoue en cours de route, le bloc en échec et tous les blocs qui le suivent ne consomment aucun crédit.",
              "Le recalcul des attributs IA consomme aussi des crédits.",
              "Les admins peuvent consulter la consommation de crédits par workflow dans Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Le nombre de crédits inclus varie selon l'offre, et Attio a déjà modifié ses offres par le passé. Vérifiez l'allocation actuelle sur la page de tarifs d'Attio et estimez la consommation en multipliant le nombre de blocs par exécution par le nombre d'exécutions prévues par mois.",
          },
        ],
      },
      {
        heading: "L'API et les webhooks d'Attio",
        blocks: [
          {
            type: "p",
            text: "Pour tout ce qu'un workflow ne sait pas faire seul, Attio propose une API REST et des webhooks sortants. Voici ce que la documentation développeur dit de chacun.",
          },
          {
            type: "table",
            caption: "API REST et webhooks d'Attio (documentation développeur d'Attio, vérifiée en novembre 2026)",
            head: ["Sujet", "Ce que documente Attio"],
            rows: [
              ["Limites de débit", "100 requêtes par seconde en lecture et 25 par seconde en écriture. Au-delà de la limite, HTTP 429 avec un en-tête Retry-After."],
              ["Endpoints de liste", "List records et List entries ont aussi des limites basées sur un score, calculées sur une fenêtre de 10 secondes pour l'ensemble des apps et des tokens."],
              ["Authentification", "Une clé API pour un seul espace de travail, ou OAuth 2.0 pour les apps utilisées dans plusieurs espaces de travail. Les tokens sont envoyés comme Bearer tokens, et les scopes sont définis par token."],
              ["Événements webhook", "Les événements incluent record.created, list-entry.created, note.created et task.created."],
              ["Signature des webhooks", "Un HMAC-SHA256 du corps brut de la requête, calculé avec le secret du webhook et encodé en hexadécimal, dans l'en-tête Attio-Signature."],
              ["Nouvelles tentatives", "Chaque message porte un en-tête Idempotency-Key qui reste identique quand Attio le renvoie."],
            ],
          },
          {
            type: "p",
            text: "Pour vérifier qu'un webhook provient bien d'Attio, recalculez le HMAC-SHA256 du corps brut avec le secret du webhook et comparez-le à l'en-tête Attio-Signature. Attio envoie aussi la même valeur dans X-Attio-Signature pour les anciens middlewares. Utilisez l'en-tête Idempotency-Key pour ignorer les messages déjà traités, afin qu'une nouvelle tentative ne crée pas une deuxième tâche ou un deuxième message Slack.",
          },
        ],
      },
      {
        heading: "Connecter Attio à vos outils de support",
        blocks: [
          {
            type: "p",
            text: "Attio dispose d'une app Slack pour les notifications et d'une app Zapier officielle. Zapier répertorie des connexions prêtes à l'emploi entre Attio et des helpdesks comme Zendesk et Intercom. Pour plus de contrôle, connectez un helpdesk à l'API et aux webhooks d'Attio via n8n ou Make. Voici un schéma courant, décrit étape par étape. Il montre comment les éléments s'articulent. Ce n'est pas une étude de cas TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Déclencheur : votre helpdesk envoie un webhook à n8n ou Make quand un ticket est créé ou escaladé.",
              "Recherche : le workflow trouve la fiche entreprise du client dans Attio via l'API, en restant dans la limite de 100 lectures par seconde.",
              "Mise à jour : il écrit le statut ou la catégorie du ticket dans un attribut de la fiche, ou crée une tâche pour le responsable du compte.",
              "Réaction dans Attio : un workflow Attio déclenché par cette mise à jour de la fiche envoie un message Slack au responsable du compte.",
              "Gestion des erreurs : attendez et réessayez en cas de HTTP 429, et utilisez l'en-tête Idempotency-Key pour écarter les livraisons de webhook en double.",
            ],
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab connecte des outils comme Attio aux outils de helpdesk et de chat que vous utilisez déjà, via des API, des webhooks, n8n et Make, sans changement de plateforme. Les projets Custom Automation coûtent {{price:custom}}. La plupart des mises en place prennent 1 à 3 semaines, et chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Que sont les workflows Attio ?",
        a: "L'outil d'automatisation d'Attio. Un workflow part d'un bloc déclencheur, comme la création d'une fiche ou une exécution manuelle, puis exécute des blocs d'action, comme mettre à jour une fiche, créer une tâche, envoyer un message Slack ou effectuer une requête HTTP.",
      },
      {
        q: "Les workflows Attio consomment-ils des crédits ?",
        a: "Oui. Les exécutions de workflow consomment les crédits partagés de l'espace de travail. La plupart des blocs consomment un crédit par exécution, et les blocs qui échouent ou ne s'exécutent jamais n'en consomment aucun. Le nombre de crédits inclus dépend de votre offre.",
      },
      {
        q: "Quelles sont les limites de débit de l'API Attio ?",
        a: "100 requêtes par seconde en lecture et 25 par seconde en écriture. Au-delà de la limite, Attio renvoie HTTP 429 avec un en-tête Retry-After. Les endpoints List records et List entries ont aussi des limites basées sur un score.",
      },
      {
        q: "Comment vérifier un webhook Attio ?",
        a: "Calculez un HMAC-SHA256 du corps brut de la requête avec le secret du webhook, encodez-le en hexadécimal et comparez-le à l'en-tête Attio-Signature.",
      },
    ],
    sources: [
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-02",
  },
  {
    key: "attio-vs-hubspot-automation",
    slug: "attio-vs-hubspot-automatisation",
    category: "crm",
    navLabel: "Automatisation Attio vs HubSpot",
    primaryKeyword: "Attio vs HubSpot automatisation",
    title: "Automatisation Attio vs HubSpot : workflows, API, webhooks",
    description:
      "Automatisation Attio vs HubSpot : accès aux workflows, limites et crédits, déclencheurs, étapes de code et webhook, limites d'API et signatures de webhooks.",
    h1: "Automatisation Attio vs HubSpot : workflows, limites, API et webhooks",
    intro:
      "Attio et HubSpot automatisent tous deux le travail CRM avec des workflows visuels, mais ils les limitent différemment. HubSpot n'inclut les workflows que dans les éditions Professional et Enterprise et plafonne le nombre que vous pouvez en créer, tandis qu'Attio décompte les exécutions de workflow en crédits de l'espace de travail. Leurs API et leurs webhooks diffèrent aussi par leurs limites de débit et par la façon de vérifier une requête.",
    keyFacts: [
      "Les workflows HubSpot nécessitent un abonnement Professional ou Enterprise. Marketing, Sales ou Service Hub Professional permet jusqu'à 300 workflows, et Enterprise jusqu'à 1 000.",
      "Attio décompte les workflows en crédits de l'espace de travail. La plupart des blocs consomment un crédit par exécution.",
      "Les actions de code personnalisé de HubSpot doivent se terminer en 20 secondes et peuvent utiliser jusqu'à 128 Mo de mémoire.",
      "L'API d'Attio autorise 100 lectures et 25 écritures par seconde. Les apps privées HubSpot sur Professional ou Enterprise ont droit à 190 requêtes par tranche de 10 secondes.",
      "HubSpot signe ses webhooks avec X-HubSpot-Signature-v3. Attio utilise l'en-tête Attio-Signature.",
    ],
    sections: [
      {
        heading: "Comparatif côte à côte",
        blocks: [
          {
            type: "table",
            caption: "Automatisation Attio vs HubSpot (documentation des éditeurs, vérifiée en novembre 2026)",
            head: ["Question", "Attio", "HubSpot"],
            rows: [
              ["Comment l'usage est limité", "Les exécutions de workflow consomment des crédits de l'espace de travail. La plupart des blocs consomment un crédit.", "Professional ou Enterprise requis. Un plafond du nombre de workflows par édition."],
              ["Déclencheurs", "Déclencheurs de fiche, de liste, de tâche et utilitaires, dont une planification, un webhook et une exécution manuelle", "Déclencheurs d'inscription basés sur des filtres, des événements, une planification ou des webhooks"],
              ["Appeler un autre système", "Bloc de requête HTTP. Les apps peuvent ajouter des blocs personnalisés.", "Actions 'Send a webhook' et 'Custom code', dans Data Hub Professional et Enterprise"],
              ["Slack", "Bloc de message Slack, avec l'app Slack d'Attio", "Action de notification Slack, avec l'intégration Slack installée"],
              ["Limite de débit de l'API", "100 lectures et 25 écritures par seconde", "Apps privées : 100 par tranche de 10 secondes sur Free et Starter, 190 sur Professional et Enterprise, plus une limite quotidienne"],
              ["Signature des webhooks", "HMAC-SHA256 du corps, encodé en hexadécimal, dans Attio-Signature", "HMAC-SHA256 de la méthode, de l'URI, du corps et de l'horodatage, encodé en base64, dans X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "Workflows HubSpot : éditions et limites",
        blocks: [
          {
            type: "p",
            text: "La FAQ des workflows de HubSpot indique qu'un abonnement Professional ou Enterprise est nécessaire pour utiliser les workflows. Le nombre que vous pouvez en créer dépend de l'édition :",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales ou Service Hub Professional : jusqu'à 300 workflows.",
              "Marketing, Sales ou Service Hub Enterprise : jusqu'à 1 000 workflows.",
              "Avec le module complémentaire Brands : 100 workflows de plus.",
              "Avec plusieurs hubs, c'est l'abonnement doté de la limite la plus élevée qui fixe votre limite.",
            ],
          },
          {
            type: "p",
            text: "Seuls les workflows personnalisés créés dans l'outil de workflows comptent dans la limite. Les automatisations simples dans des outils comme les formulaires n'y comptent pas. Par défaut, une fiche n'est inscrite dans un workflow que la première fois qu'elle remplit les déclencheurs d'inscription. Vous pouvez activer la réinscription, mais elle ne peut pas utiliser de critères AND et n'inscrit pas les fiches rétroactivement.",
          },
          {
            type: "p",
            text: "Deux actions comptent le plus pour les intégrations : 'Send a webhook' et 'Custom code'. HubSpot les répertorie toutes deux pour Data Hub Professional et Enterprise, le hub auparavant appelé Operations Hub. Les actions de code personnalisé exécutent du Node.js ou du Python, doivent se terminer en 20 secondes et peuvent utiliser jusqu'à 128 Mo de mémoire : les traitements longs ont donc leur place dans un outil externe comme n8n.",
          },
        ],
      },
      {
        heading: "Workflows Attio : décomptés en crédits",
        blocks: [
          {
            type: "p",
            text: "Attio décompte les workflows à l'usage. Les exécutions puisent dans les crédits partagés de l'espace de travail, la plupart des blocs consomment un crédit, et les blocs qui échouent ou ne s'exécutent jamais n'en consomment aucun. Les admins peuvent consulter la consommation de crédits par workflow dans Workspace settings. Les crédits inclus varient selon l'offre : consultez donc la page de tarifs d'Attio et estimez le nombre de blocs par exécution multiplié par le nombre d'exécutions par mois.",
          },
          {
            type: "p",
            text: "Pour atteindre un autre système depuis un workflow Attio, utilisez le bloc de requête HTTP, ou créez avec le SDK Attio une app qui ajoute ses propres blocs de workflow.",
          },
        ],
      },
      {
        heading: "API et webhooks pour les intégrations",
        blocks: [
          {
            type: "p",
            text: "HubSpot limite les apps privées par tranche de 10 secondes et par jour. Les comptes Free et Starter ont droit à 100 requêtes par tranche de 10 secondes et 250 000 par jour. Professional a droit à 190 par tranche de 10 secondes et 625 000 par jour, et Enterprise à 190 par tranche de 10 secondes et 1 000 000 par jour. La limite sur 10 secondes s'applique à chaque app, et la limite quotidienne est partagée par toutes les apps du compte. Au-delà de la limite, HubSpot renvoie HTTP 429, et ses consignes demandent que les réponses en erreur restent sous 5 % de vos requêtes quotidiennes.",
          },
          {
            type: "p",
            text: "Attio compte par seconde : 100 lectures et 25 écritures, avec HTTP 429 et un en-tête Retry-After en cas de dépassement. Ses endpoints List records et List entries ont aussi des limites basées sur un score, calculées sur une fenêtre de 10 secondes.",
          },
          {
            type: "p",
            text: "Les deux signent leurs webhooks, mais différemment. La signature v3 de HubSpot arrive dans X-HubSpot-Signature-v3 avec X-HubSpot-Request-Timestamp. Il s'agit d'un HMAC-SHA256, encodé en base64 et calculé avec le client secret de l'app, sur la méthode, l'URI, le corps et l'horodatage, et HubSpot indique qu'il faut rejeter les requêtes dont l'horodatage date de plus de 5 minutes. L'en-tête Attio-Signature d'Attio est un HMAC-SHA256 du corps brut encodé en hexadécimal, calculé avec le secret du webhook. Attio envoie aussi un en-tête Idempotency-Key qui reste identique d'une nouvelle tentative à l'autre.",
          },
        ],
      },
      {
        heading: "Lequel convient à une équipe support",
        blocks: [
          {
            type: "ul",
            items: [
              "Si votre équipe support travaille déjà dans le help desk de HubSpot, les tickets, les SLA et les workflows de tickets se trouvent dans le même compte que le CRM, et les workflows sont inclus à partir de Professional.",
              "Si vous utilisez Attio comme CRM avec un helpdesk distinct, connectez les deux via les API et les webhooks avec n8n, Make ou Zapier, qui dispose d'une app Attio officielle.",
              "Si vos automatisations appellent d'autres systèmes, prévoyez le budget de Data Hub Professional dans HubSpot, ou organisez-vous autour du bloc de requête HTTP dans Attio.",
              "Si les volumes sont élevés, comparez les limites d'API ci-dessus à votre pic de volume de tickets avant de choisir où s'exécute la logique.",
            ],
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des automatisations sur le CRM et le helpdesk que vous utilisez déjà, avec des API, des webhooks, n8n et Make : vous n'avez donc pas à changer de plateforme. Les projets Custom Automation coûtent {{price:custom}}. La plupart des mises en place prennent 1 à 3 semaines, et chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "HubSpot inclut-il les workflows dans toutes les offres ?",
        a: "Non. La FAQ des workflows de HubSpot indique qu'un abonnement Professional ou Enterprise est nécessaire. Marketing, Sales ou Service Hub Professional permet jusqu'à 300 workflows, et Enterprise jusqu'à 1 000.",
      },
      {
        q: "Comment Attio limite-t-il les workflows ?",
        a: "Avec les crédits de l'espace de travail. Les exécutions de workflow puisent dans les crédits partagés de l'espace de travail, la plupart des blocs consomment un crédit par exécution, et les crédits inclus dépendent de votre offre.",
      },
      {
        q: "Puis-je exécuter du code personnalisé dans les workflows HubSpot ou Attio ?",
        a: "HubSpot propose une action 'Custom code' dans Data Hub Professional et Enterprise, qui exécute du Node.js ou du Python, dans la limite de 20 secondes et de 128 Mo de mémoire. Attio propose un bloc de requête HTTP, et les apps créées avec son SDK peuvent ajouter des blocs personnalisés.",
      },
      {
        q: "Comment vérifier les webhooks de HubSpot et d'Attio ?",
        a: "Pour HubSpot, recalculez le HMAC-SHA256 de la méthode, de l'URI, du corps et de l'horodatage avec votre client secret et comparez-le à X-HubSpot-Signature-v3. Pour Attio, comparez un HMAC-SHA256 du corps brut, calculé avec le secret du webhook, à l'en-tête Attio-Signature.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Workflows FAQ", url: "https://knowledge.hubspot.com/workflows/workflows-faq" },
      { label: "HubSpot Knowledge Base — Set your workflow enrollment triggers", url: "https://knowledge.hubspot.com/workflows/set-your-workflow-enrollment-triggers" },
      { label: "HubSpot Knowledge Base — Add re-enrollment triggers to a workflow", url: "https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "HubSpot Developers — Custom code actions", url: "https://developers.hubspot.com/docs/api-reference/latest/automation/workflow-actions/custom-code-actions" },
      { label: "HubSpot Developers — API usage guidelines and limits", url: "https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines" },
      { label: "HubSpot Developers — Validating requests", url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation" },
      { label: "HubSpot — Fall 2025 Spotlight", url: "https://www.hubspot.com/company-news/fall-2025-spotlight" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
