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
      "Les déclencheurs, la logique et les recherches de données sont gratuits. Les blocs qui écrivent des données, appellent des systèmes externes ou utilisent l'IA consomment des crédits de l'espace de travail, la plupart à raison d'un crédit par exécution.",
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
            text: "Le centre d'aide d'Attio cite comme exemples de blocs d'action la mise à jour d'une fiche, la création d'une tâche, l'envoi d'un message Slack, l'inscription d'une personne dans une séquence et l'exécution d'une requête HTTP. Un bloc 'Execute code' exécute votre propre code JavaScript comme une étape, avec un délai d'expiration de 100 secondes. Vous pouvez aussi décrire un workflow en langage courant et laisser Ask Attio le construire. Les apps créées avec le SDK Attio peuvent ajouter leurs propres blocs, qui apparaissent alors dans le sélecteur de blocs à côté des blocs intégrés.",
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
            text: "Les exécutions de workflow puisent dans les crédits partagés de l'espace de travail, et non dans les crédits de siège. Le centre d'aide d'Attio décrit comment ils sont décomptés dans les nouveaux workflows :",
          },
          {
            type: "ul",
            items: [
              "Les déclencheurs, la logique et les recherches de données sont gratuits. Des crédits ne sont consommés que lorsqu'un bloc écrit des données, envoie ou reçoit quelque chose vers ou depuis l'extérieur, ou utilise l'IA.",
              "Les écritures de fiches, les tâches, l'inscription dans une séquence, les requêtes HTTP et les blocs d'intégration coûtent 1 crédit par exécution. Les blocs d'IA et 'Execute code' ont un coût variable.",
              "Seul le chemin suivi par une exécution est facturé. Si une exécution échoue en cours de route, le bloc en échec et tous les blocs qui le suivent ne consomment aucun crédit, mais les blocs exécutés avant l'échec sont facturés.",
              "Créer un workflow avec Ask Attio consomme des crédits de siège, et non les crédits partagés de l'espace de travail.",
            ],
          },
          {
            type: "p",
            text: "En novembre 2026, Attio inclut 250 crédits d'espace de travail par mois sur Free, 1 500 sur Plus et 10 000 sur Pro. Les offres évoluent : vérifiez donc la page de tarifs d'Attio, puis estimez la consommation en multipliant le nombre de blocs consommateurs de crédits par exécution par le nombre d'exécutions prévues par mois.",
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
        a: "Oui, pour les blocs qui écrivent des données, appellent des systèmes externes ou utilisent l'IA. La plupart d'entre eux coûtent un crédit par exécution, tandis que les déclencheurs, la logique et les recherches de données sont gratuits. En novembre 2026, Free inclut 250 crédits d'espace de travail par mois, Plus 1 500 et Pro 10 000.",
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
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/getting-started-with-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-03",
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
      "Attio décompte les workflows en crédits de l'espace de travail. Les déclencheurs, la logique et les recherches sont gratuits, et la plupart des blocs qui écrivent des données ou appellent l'extérieur consomment un crédit par exécution.",
      "Les actions de code personnalisé de HubSpot doivent se terminer en 20 secondes et peuvent utiliser jusqu'à 128 Mo de mémoire. Le bloc 'Execute code' d'Attio expire au bout de 100 secondes.",
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
              ["Comment l'usage est limité", "Crédits de l'espace de travail. Les déclencheurs, la logique et les recherches sont gratuits, et la plupart des blocs qui écrivent ou appellent l'extérieur consomment un crédit.", "Professional ou Enterprise requis. Un plafond du nombre de workflows par édition."],
              ["Déclencheurs", "Déclencheurs de fiche, de liste, de tâche et utilitaires, dont une planification, un webhook et une exécution manuelle", "Déclencheurs d'inscription basés sur des filtres, des événements, une planification ou des webhooks"],
              ["Appeler un autre système et exécuter du code", "Bloc de requête HTTP, et bloc 'Execute code' pour le JavaScript. Les apps peuvent ajouter des blocs personnalisés.", "Actions 'Send a webhook' et 'Custom code', dans Data Hub Professional et Enterprise"],
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
            text: "Deux actions comptent le plus pour les intégrations : 'Send a webhook' et 'Custom code'. HubSpot les répertorie toutes deux pour Data Hub Professional et Enterprise, le hub auparavant appelé Operations Hub. Les actions de code personnalisé exécutent du Node.js par défaut, ou du Python en version bêta, doivent se terminer en 20 secondes et peuvent utiliser jusqu'à 128 Mo de mémoire : les traitements longs ont donc leur place dans un outil externe comme n8n.",
          },
        ],
      },
      {
        heading: "Workflows Attio : décomptés en crédits",
        blocks: [
          {
            type: "p",
            text: "Attio décompte les workflows à l'usage. Les exécutions puisent dans les crédits partagés de l'espace de travail. Les déclencheurs, la logique et les recherches de données sont gratuits, et les blocs qui écrivent des données, appellent des systèmes externes ou utilisent l'IA consomment des crédits, la plupart à raison d'un par exécution. En novembre 2026, Free inclut 250 crédits d'espace de travail par mois, Plus 1 500 et Pro 10 000.",
          },
          {
            type: "p",
            text: "Pour atteindre un autre système depuis un workflow Attio, utilisez le bloc de requête HTTP. Le bloc 'Execute code' exécute votre propre code JavaScript avec un délai d'expiration de 100 secondes et un coût en crédits variable, et les apps créées avec le SDK Attio peuvent ajouter leurs propres blocs de workflow.",
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
              "Si vos automatisations appellent d'autres systèmes, prévoyez le budget de Data Hub Professional dans HubSpot, ou organisez-vous autour des blocs de requête HTTP et 'Execute code' dans Attio.",
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
        a: "Avec les crédits de l'espace de travail. Les déclencheurs, la logique et les recherches sont gratuits, et la plupart des blocs qui écrivent des données ou appellent des systèmes externes consomment un crédit par exécution. Le coût des blocs d'IA et de code varie. Les crédits inclus dépendent de votre offre.",
      },
      {
        q: "Puis-je exécuter du code personnalisé dans les workflows HubSpot ou Attio ?",
        a: "HubSpot propose une action 'Custom code' dans Data Hub Professional et Enterprise, qui exécute du Node.js, ou du Python en version bêta, dans la limite de 20 secondes et de 128 Mo de mémoire. Attio propose un bloc 'Execute code' qui exécute du JavaScript avec un délai d'expiration de 100 secondes, et les apps créées avec son SDK peuvent ajouter des blocs personnalisés.",
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
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-03",
  },
  {
    key: "hubspot-zendesk-integration",
    slug: "integration-hubspot-zendesk",
    category: "crm",
    navLabel: "Intégration HubSpot Zendesk",
    primaryKeyword: "intégration HubSpot Zendesk",
    title: "Intégration HubSpot Zendesk : synchronisation et options",
    description:
      "Intégration HubSpot Zendesk : ce que l'app gratuite Zendesk for HubSpot synchronise ou non, flux d'actions, apps de synchro bidirectionnelle et API sur mesure.",
    h1: "Intégration HubSpot Zendesk : ce qui est synchronisé, ce qui ne l'est pas et vos options",
    intro:
      "L'intégration HubSpot proposée par Zendesk est gratuite et rapide à connecter, mais elle n'envoie les événements de ticket que dans un sens, de Zendesk vers la chronologie d'un contact dans HubSpot. Si vous avez besoin de plus, les flux d'actions (action flows) de Zendesk peuvent créer et mettre à jour des fiches HubSpot, des apps du Marketplace proposent une synchronisation bidirectionnelle, et une intégration sur mesure avec des webhooks et les deux API peut transférer exactement les données que vous choisissez.",
    keyFacts: [
      "L'intégration Zendesk Support for HubSpot est unidirectionnelle : les informations des tickets vont de Zendesk vers HubSpot.",
      "Elle crée trois déclencheurs Zendesk, pour les nouveaux tickets, les tickets résolus et les évaluations CSAT, ainsi qu'un webhook nommé HubSpot Integration.",
      "Les tickets n'apparaissent que sur la chronologie du contact HubSpot, pas sur les entreprises ni sur les transactions, et seule l'adresse e-mail de l'utilisateur est synchronisée.",
      "Les flux d'actions Zendesk disposent d'actions HubSpot qui créent, mettent à jour et recherchent des contacts, des entreprises, des transactions et des tickets.",
      "Zendesk a cessé d'émettre de nouveaux tokens API le 27 octobre 2026 : les intégrations sur mesure doivent donc utiliser OAuth.",
    ],
    sections: [
      {
        heading: "Quatre façons de connecter HubSpot et Zendesk",
        blocks: [
          {
            type: "table",
            caption: "Options d'intégration HubSpot et Zendesk (documentation et fiches Marketplace des éditeurs, vérifiées en novembre 2026)",
            head: ["Option", "Sens", "Ce qui est transféré"],
            rows: [
              ["Zendesk Support for HubSpot", "De Zendesk vers HubSpot uniquement", "Événements des nouveaux tickets, des tickets résolus et des évaluations CSAT, envoyés à la chronologie du contact"],
              ["Flux d'actions Zendesk avec actions HubSpot", "De Zendesk vers HubSpot, étape par étape", "Crée, met à jour et recherche des contacts, des entreprises, des transactions et des tickets"],
              ["Apps du Marketplace", "Selon l'app ; certaines sont bidirectionnelles", "Ce que l'app prend en charge, comme les contacts ou les transactions"],
              ["Intégration sur mesure avec des webhooks et les deux API", "Dans un sens comme dans l'autre", "Exactement les champs et les événements que vous choisissez"],
            ],
          },
          {
            type: "p",
            text: "Partez de la question à laquelle votre équipe cherche à répondre. Si les commerciaux et les responsables de compte ont seulement besoin de voir l'historique de support d'un contact dans HubSpot, l'intégration gratuite peut suffire. Si les tickets doivent modifier des données HubSpot, comme une propriété d'entreprise ou une étape de transaction, il vous faut des flux d'actions, une app ou une intégration sur mesure.",
          },
        ],
      },
      {
        heading: "Configurer l'intégration gratuite Zendesk Support for HubSpot",
        blocks: [
          {
            type: "ol",
            items: [
              "Ouvrez la page d'installation de l'intégration et saisissez votre sous-domaine Zendesk.",
              "Autorisez la connexion dans Zendesk et dans HubSpot.",
              "Zendesk crée trois déclencheurs, pour les nouveaux tickets, les tickets résolus et les évaluations CSAT, ainsi qu'un webhook nommé HubSpot Integration.",
              "Modifiez les conditions de ces déclencheurs si vous ne voulez envoyer que certains tickets vers HubSpot.",
            ],
          },
          {
            type: "p",
            text: "Zendesk documente quelques limites. L'intégration est unidirectionnelle, de Zendesk vers HubSpot. Seule l'adresse e-mail de l'utilisateur est synchronisée, pas son prénom ni son nom. Les tickets ne s'affichent que sur la chronologie du contact, pas sur les fiches d'entreprise ou de transaction. Vous pouvez choisir quels tickets sont envoyés en modifiant les conditions des déclencheurs, mais vous ne pouvez pas modifier la charge utile JSON. Pour désactiver l'intégration, désactivez les trois déclencheurs.",
          },
          {
            type: "note",
            text: "Ne testez pas le webhook HubSpot Integration depuis l'Admin Center. Zendesk avertit que cela peut envoyer du JSON invalide et déconnecter l'intégration. Testez plutôt en créant ou en résolvant un vrai ticket de test.",
          },
        ],
      },
      {
        heading: "Flux d'actions Zendesk avec actions HubSpot",
        blocks: [
          {
            type: "p",
            text: "Les flux d'actions (action flows) sont l'outil de Zendesk pour construire des automatisations en plusieurs étapes qui atteignent des systèmes externes. Le connecteur HubSpot ajoute ces actions :",
          },
          {
            type: "ul",
            items: [
              "Créer et mettre à jour des contacts, des entreprises, des transactions et des tickets dans HubSpot.",
              "Rechercher des contacts, des entreprises, des transactions et des tickets, ainsi que des utilisateurs.",
              "Rechercher un contact par Contact ID ou par e-mail. Si vous indiquez les deux, Contact ID est prioritaire.",
              "Se connecter avec OAuth 2.0 depuis 'External actions' dans la barre latérale de l'étape. Zendesk recommande un compte de service dédié et actualise les tokens automatiquement.",
            ],
          },
          {
            type: "p",
            text: "Les flux d'actions consomment des crédits d'action. Zendesk indique 100 000 actions par mois pour Suite Professional et 225 000 pour Suite Enterprise, envoie un e-mail à 80 % et à 100 % de l'allocation, et vend des actions supplémentaires par tranches de 100 000. Les admins peuvent consulter la consommation dans l'Admin Center, sous Account, puis Usage, puis Summary. Les allocations et la disponibilité selon les offres évoluent : vérifiez-les dans votre propre compte avant de construire sur les flux d'actions.",
          },
        ],
      },
      {
        heading: "Apps de synchronisation bidirectionnelle",
        blocks: [
          {
            type: "p",
            text: "Le Zendesk Marketplace répertorie une app Data sync by HubSpot, qu'il décrit comme une synchronisation bidirectionnelle en temps réel entre HubSpot et Zendesk. Son installation nécessite un Super Admin HubSpot ou un utilisateur disposant des autorisations App Marketplace, qui saisit le sous-domaine Zendesk, autorise la connexion et choisit ce qu'il faut synchroniser. Des apps tierces comme HubSpot CRM Connect ajoutent leurs propres fonctionnalités. Les présentations d'apps du Marketplace sont des pages marketing : vérifiez donc sur l'écran de configuration quelles fiches et quels champs une app synchronise réellement avant de vous y fier.",
          },
          {
            type: "p",
            text: "La documentation de HubSpot sur la synchronisation des données explique comment les synchronisations bidirectionnelles rapprochent les fiches : par défaut, les contacts sont rapprochés par e-mail et les entreprises par nom ou par domaine, et seuls les contacts ayant une adresse e-mail valide sont synchronisés. Nettoyez les contacts en double et les e-mails manquants avant d'activer une synchronisation bidirectionnelle, sinon elle recopiera le désordre dans les deux outils.",
          },
        ],
      },
      {
        heading: "Intégrations sur mesure avec des webhooks et les deux API",
        blocks: [
          {
            type: "p",
            text: "Une intégration sur mesure vous donne un contrôle total, par exemple pour afficher les tickets ouverts sur les fiches d'entreprise HubSpot, ce que l'intégration gratuite ne permet pas. Voici un schéma courant, décrit étape par étape. Ce n'est pas une étude de cas TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Déclencheur : un déclencheur Zendesk avec l'action Notify by > Active webhook envoie l'ID du ticket et l'e-mail du demandeur à n8n ou Make quand un ticket est créé ou que son statut change.",
              "Vérification : le workflow contrôle l'en-tête X-Zendesk-Webhook-Signature, pour que seules les vraies requêtes Zendesk soient traitées.",
              "Recherche : il trouve le contact HubSpot par e-mail via l'API CRM, puis l'entreprise associée à ce contact.",
              "Mise à jour : il écrit le nombre de tickets ou le dernier statut dans une propriété d'entreprise, que les listes, les rapports et les workflows HubSpot peuvent utiliser.",
              "Gestion des erreurs : il attend et réessaie en cas de HTTP 429, car Zendesk et HubSpot limitent tous deux les requêtes API.",
            ],
          },
          {
            type: "p",
            text: "Dans l'autre sens, un workflow HubSpot peut appeler votre endpoint avec l'action 'Send a webhook', que HubSpot répertorie pour Data Hub Professional et Enterprise et qui n'accepte que les URL HTTPS. Côté Zendesk, utilisez OAuth plutôt que des tokens API. Depuis le 27 octobre 2026, Zendesk ne permet plus aux comptes existants de créer de nouveaux tokens API, et tous les tokens API cesseront de fonctionner le 30 avril 2027. Les clients OAuth créés le 30 avril 2026 ou après reçoivent des access tokens qui expirent par défaut au bout de 30 minutes : l'intégration doit donc gérer les refresh tokens.",
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab connecte Zendesk et HubSpot via des API, des webhooks, n8n et Make, sur les outils que vous utilisez déjà. Les projets Custom Automation coûtent {{price:custom}}. La plupart des mises en place prennent 1 à 3 semaines, et chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'intégration HubSpot Zendesk est-elle bidirectionnelle ?",
        a: "Pas l'intégration gratuite Zendesk Support for HubSpot. Elle est unidirectionnelle et envoie les informations des tickets de Zendesk vers la chronologie du contact HubSpot. Pour une synchronisation bidirectionnelle, utilisez une app du Marketplace comme Data sync by HubSpot, ou une intégration sur mesure.",
      },
      {
        q: "Puis-je voir les tickets Zendesk sur les entreprises ou les transactions HubSpot ?",
        a: "Pas avec l'intégration gratuite, qui n'affiche les tickets que sur la chronologie du contact. C'est possible avec une intégration sur mesure qui écrit les données des tickets dans des propriétés d'entreprise ou de transaction via l'API HubSpot.",
      },
      {
        q: "Pourquoi mon intégration HubSpot s'est-elle déconnectée après que j'ai testé son webhook ?",
        a: "Zendesk avertit que tester le webhook HubSpot Integration depuis l'Admin Center peut envoyer du JSON invalide et déconnecter l'intégration. Testez plutôt avec un vrai ticket.",
      },
      {
        q: "Puis-je encore utiliser un token API Zendesk pour une intégration HubSpot ?",
        a: "Seulement un token que vous possédez déjà. Zendesk a cessé d'émettre de nouveaux tokens API le 27 octobre 2026, désactive les tokens inutilisés pendant 30 jours et désactivera tous les tokens API le 30 avril 2027. Utilisez OAuth pour les nouvelles intégrations.",
      },
    ],
    sources: [
      { label: "Zendesk Help — Setting up the Zendesk Support for HubSpot integration", url: "https://support.zendesk.com/hc/en-us/articles/4408884090650-Setting-up-the-Zendesk-Support-for-HubSpot-integration" },
      { label: "Zendesk Help — Using HubSpot actions in action flows", url: "https://support.zendesk.com/hc/en-us/articles/10917655354138-Using-HubSpot-actions-in-action-flows" },
      { label: "Zendesk Help — Monitoring the usage of action credits and action flow activity", url: "https://support.zendesk.com/hc/en-us/articles/10149993578522-Monitoring-the-usage-of-action-credits-and-action-flow-activity" },
      { label: "Zendesk Marketplace — Data sync by HubSpot", url: "https://www.zendesk.com/marketplace/apps/support/431348/data-sync-by-hubspot/" },
      { label: "Zendesk Marketplace — HubSpot CRM Connect", url: "https://www.zendesk.com/marketplace/apps/support/959977/hubspot-crm-connect/" },
      { label: "HubSpot Knowledge Base — Connect and use HubSpot data sync", url: "https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows", url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "Zendesk Help — Announcing the removal of API tokens as an authentication method for API requests", url: "https://support.zendesk.com/hc/en-us/articles/10851263566234-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests" },
      { label: "Zendesk Developer Docs — Working with OAuth refresh tokens", url: "https://developer.zendesk.com/documentation/api-basics/authentication/refresh-token/" },
    ],
    related: ["hubspot-service-hub-automation", "zendesk-automation", "n8n-zendesk-integration"],
    updated: "2026-11-03",
  },
];
