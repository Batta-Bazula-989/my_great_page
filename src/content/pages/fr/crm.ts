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
  {
    key: "ai-lead-scoring",
    slug: "lead-scoring-ia",
    category: "crm",
    navLabel: "Lead scoring par IA",
    primaryKeyword: "lead scoring IA",
    title: "Lead scoring par IA : ICP, HubSpot et Attio",
    description:
      "Le lead scoring par IA : scorer vos leads selon votre ICP, l'outil de scoring de HubSpot et ses limites, et écrire un score dans Attio via l'API.",
    h1: "Lead scoring par IA : comment fonctionne le scoring selon votre ICP",
    intro:
      "Le lead scoring transforme des leads bruts en liste classée : chacun reçoit des points selon sa correspondance avec votre profil client idéal (ICP) et selon son comportement. L'IA intervient de deux façons : le scoring natif de la plateforme, comme les scores construits par l'IA de HubSpot, et la classification externe, où un modèle lit une réponse ou une fiche d'enrichissement, calcule un score de fit et l'écrit dans votre CRM via l'API.",
    keyFacts: [
      "L'outil de lead scoring de HubSpot exige Marketing Hub ou Sales Hub Professional ou Enterprise ; les scores de contacts construits par l'IA exigent Marketing Hub Enterprise.",
      "Les scores IA de HubSpot demandent un échantillon minimal de 50 contacts — 25 convertis et 25 non convertis — avant de pouvoir générer un score.",
      "Attio n'a ni moteur de scoring intégré ni type de champ score : un score vit dans un attribut nombre ou sélection, rempli par un workflow ou par l'API.",
      "Les attributs nombre d'Attio stockent des nombres à virgule flottante avec jusqu'à quatre décimales — de quoi tenir un score de fit de 0–100.",
      "Un score externe s'écrit dans HubSpot via un PATCH sur /crm/v3/objects/contacts/{contactId}, et dans Attio via un PATCH sur /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "Ce que recouvre le lead scoring par IA",
        blocks: [
          {
            type: "p",
            text: "Les modèles de scoring combinent en général deux types de signaux. Les signaux d'engagement mesurent ce que fait un lead : ouvertures, clics, réponses, visites de pages, rendez-vous pris. Les signaux de fit mesurent qui est le lead, comparé à votre profil client idéal : secteur, taille d'entreprise, pays, fonction, outils utilisés. Un score de fit répond à « ce lead devrait-il nous intéresser ? », un score d'engagement répond à « ce lead s'intéresse-t-il à nous ? ».",
          },
          {
            type: "p",
            text: "L'IA apparaît à deux endroits. Les CRM intègrent des scores d'apprentissage automatique natifs qui apprennent de vos conversions passées, comme les scores de leads construits par l'IA de HubSpot. Et des équipes font tourner leur propre classification hors du CRM : un modèle de langage lit une réponse d'outreach ou une fiche d'enrichissement, l'étiquette (intéressé, pas maintenant, mauvaise personne) ou note le fit ICP, et le résultat est écrit dans un champ du CRM via l'API. Ce second schéma fonctionne avec tout CRM doté d'une API, et c'est celui sur lequel cette page se concentre.",
          },
        ],
      },
      {
        heading: "Le lead scoring dans HubSpot",
        blocks: [
          {
            type: "p",
            text: "Le scoring actuel de HubSpot vit dans l'outil de lead scoring. Il est disponible avec Marketing Hub ou Sales Hub Professional ou Enterprise. Marketing Hub score les contacts, les deux hubs scorent les entreprises, et Sales Hub score les transactions. Vous pouvez construire des scores d'engagement, des scores de fit basés sur les valeurs de propriétés, et des scores combinés, chacun à partir de groupes de critères pondérés avec des points positifs et négatifs.",
          },
          {
            type: "ul",
            items: [
              "Le maximum par défaut d'un score est de 100 points ; la limite peut être fixée à ±100, ±200, ±300, ±400, ±500, ±1 000 ou ±10 000.",
              "La décroissance du score peut réduire les points d'engagement au fil du temps, par intervalles de 1, 3, 6 ou 12 mois, chaque mois comptant 30 jours.",
              "Des seuils découpent un score en bandes High, Medium et Low ; les scores combinés utilisent une matrice A1–C3 croisant fit et engagement.",
              "Les scores de contacts construits par l'IA (Marketing Hub Enterprise) apprennent des contacts passés d'une étape de cycle de vie à une autre et exigent au moins 50 contacts — 25 convertis et 25 non convertis.",
            ],
          },
          {
            type: "note",
            text: "L'outil crée ses propres propriétés de score, liées au score : supprimez le score et les propriétés disparaissent avec lui, et elles ne peuvent pas être modifiées de l'extérieur. Un score IA calculé en externe doit donc aller dans une propriété nombre personnalisée que vous créez vous-même, pas dans une propriété de score gérée par l'outil.",
          },
        ],
      },
      {
        heading: "Le scoring dans Attio",
        blocks: [
          {
            type: "p",
            text: "Attio prend le chemin inverse : pas de moteur de scoring ni de type de champ score. Un score n'est qu'un attribut que vous remplissez. Le modèle de workflow « MQL Scoring » d'Attio score les leads avec des blocs de workflow, et sa page automatisations cite un « Scoring Agent » parmi les agents IA qui tournent dans les workflows — une étape d'agent avec des instructions, pas un produit de scoring distinct. Trois types d'attributs conviennent à un score :",
          },
          {
            type: "ul",
            items: [
              "Un attribut nombre stocke des nombres à virgule flottante avec jusqu'à quatre décimales et se filtre avec des comparaisons comme supérieur-ou-égal — un emplacement naturel pour un score de fit de 0–100.",
              "Un attribut sélection contient des options prédéfinies, pratique pour des bandes comme A, B et C. Écrire une valeur dont l'option n'existe pas renvoie une erreur au lieu de créer l'option.",
              "Un attribut note est une valeur numérique de 0 à 5, affichée en étoiles.",
            ],
          },
          {
            type: "p",
            text: "Les workflows sont disponibles sur tous les forfaits Attio. Un workflow peut partir d'un changement de fiche, d'une planification ou d'un déclencheur « Webhook received », si bien qu'un scorer externe peut en lancer un directement ; un bloc « Custom agent » peut exécuter une étape IA avec une sortie structurée, suivie d'un bloc de mise à jour de fiche pour l'enregistrer. Les webhooks sortants sont signés avec un HMAC-SHA256 du corps dans l'en-tête Attio-Signature, pour que votre scorer réagisse aussi aux événements Attio en toute sécurité.",
          },
        ],
      },
      {
        heading: "Écrire un score IA externe dans votre CRM",
        blocks: [
          {
            type: "table",
            caption: "Écrire un score via l'API (docs éditeurs, vérifié en novembre 2026)",
            head: ["Étape", "HubSpot", "Attio"],
            rows: [
              [
                "Créer le champ",
                "POST /crm/v3/properties/{objectType} avec groupName, name, label, type \"number\", fieldType \"number\"",
                "Créer un attribut nombre ou sélection sur l'objet, dans les réglages de l'espace de travail ou via l'API des attributs",
              ],
              [
                "Écrire une fiche",
                "PATCH /crm/v3/objects/contacts/{contactId} avec {\"properties\": {...}} ; un e-mail peut servir d'identifiant avec idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} avec le slug de l'attribut dans le corps",
              ],
              [
                "Écrire en masse",
                "POST /crm/v3/objects/contacts/batch/update, ou batch/upsert pour créer-ou-mettre-à-jour",
                "Une requête par fiche, dans les limites de débit de l'API",
              ],
              [
                "Authentification",
                "Jeton d'accès d'application privée, en Bearer token",
                "Clé API d'espace de travail ou OAuth 2.0, en Bearer token ; mettre à jour des fiches exige les scopes record_permission:read-write et object_configuration:read",
              ],
            ],
          },
          {
            type: "p",
            text: "Un pipeline type, décrit en étapes — il montre comment les pièces s'assemblent, pas une étude de cas TascaLab :",
          },
          {
            type: "ol",
            items: [
              "Collecter : un nouveau lead arrive d'un formulaire, d'une réponse d'outreach ou d'un outil d'identification des visiteurs.",
              "Classifier : un modèle d'IA étiquette la réponse ou le lead (intéressé, pas intéressé, mauvaise personne, hors marché).",
              "Scorer : les données firmographiques du lead sont comparées à votre ICP et un score de fit est calculé.",
              "Écrire : le score atterrit dans une propriété nombre personnalisée de HubSpot ou un attribut nombre d'Attio, via les endpoints ci-dessus.",
              "Alerter : un workflow du CRM ou un message Slack prévient le responsable quand un lead franchit le seuil.",
            ],
          },
        ],
      },
      {
        heading: "D'où viennent les réponses : lemlist",
        blocks: [
          {
            type: "p",
            text: "Les réponses d'outreach comptent parmi les signaux de scoring les plus forts, et lemlist les expose de deux façons. Les webhooks envoient des callbacks POST en temps réel pour des événements comme emailsReplied, linkedinReplied et whatsappReplied, plus des états de lead comme interested et notInterested ; un espace de travail peut contenir jusqu'à 200 webhooks, et chaque URL cible doit être unique — enregistrez une URL sans type d'événement pour recevoir tous les événements et filtrer de votre côté. L'API activities (GET /activities) récupère le même historique filtré par type, campagne et date, pour interroger au lieu de recevoir. L'authentification est HTTP Basic avec un nom d'utilisateur vide et la clé API comme mot de passe — pas un Bearer token.",
          },
        ],
      },
      {
        heading: "Faire construire tout cela",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit exactement ce pipeline : des leads d'une source, classés et scorés par l'IA selon votre ICP et enregistrés dans votre CRM, avec le package Lead Capture & Scoring ({{price:leadScoring}}, paiement unique). Connecter vos outils d'outreach, de téléphonie ou d'enrichissement à HubSpot ou Attio relève du package CRM Integration ({{price:crmIntegration}}, paiement unique). La plupart des mises en place prennent 1 à 3 semaines, et chaque projet inclut une documentation de base et 30 jours de support après lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce que le lead scoring par IA ?",
        a: "Classer les leads en combinant des signaux d'engagement (ce que fait un lead) et des signaux de fit (sa correspondance avec votre profil client idéal), avec une IA soit intégrée au CRM — comme les scores IA de HubSpot — soit exécutée à l'extérieur, qui classe les réponses et calcule un score de fit réécrit via l'API.",
      },
      {
        q: "Que requiert l'outil de lead scoring de HubSpot ?",
        a: "Marketing Hub ou Sales Hub Professional ou Enterprise. Les scores de contacts construits par l'IA exigent Marketing Hub Enterprise et au moins 50 contacts — 25 convertis et 25 non convertis — pour générer un score.",
      },
      {
        q: "Attio a-t-il un lead scoring intégré ?",
        a: "Ni moteur de scoring ni type de champ score. Les scores vivent dans des attributs nombre ou sélection, remplis par des workflows — y compris des étapes d'agent IA, qu'Attio présente comme un Scoring Agent — ou par un outil externe via l'API.",
      },
      {
        q: "Comment écrire un score dans HubSpot ou Attio depuis l'extérieur ?",
        a: "HubSpot : créez une propriété nombre personnalisée, puis PATCH /crm/v3/objects/contacts/{contactId}, ou utilisez les endpoints batch update et upsert. Attio : PATCH /v2/objects/{object}/records/{record_id} avec un Bearer token portant les scopes record_permission:read-write et object_configuration:read.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-12",
  },
  {
    key: "website-visitor-identification",
    slug: "identification-visiteurs-site-web",
    category: "crm",
    navLabel: "Identification des visiteurs",
    primaryKeyword: "identification des visiteurs d'un site web",
    title: "Identification des visiteurs web : principe et limites",
    description:
      "L'identification des visiteurs d'un site web : reverse IP et traceurs, ce qu'elle voit ou non, RGPD et consentement aux cookies, buyer intent de HubSpot.",
    h1: "Identification des visiteurs d'un site web : fonctionnement et limites",
    intro:
      "Les outils d'identification des visiteurs rattachent le trafic anonyme de votre site à des entreprises, à l'aide d'un script de suivi, d'une résolution inverse d'adresses IP (reverse IP) et de bases de données d'entreprises. Ils identifient des entreprises, pas des personnes, leur couverture dépend des réseaux depuis lesquels vos visiteurs naviguent, et dans l'UE ils relèvent pleinement du RGPD et des règles de consentement aux cookies.",
    keyFacts: [
      "L'identification combine un script de suivi, des cookies de suivi, la résolution inverse d'adresses IP, des bases de données privées et de l'apprentissage automatique — en rattachant les visites à des entreprises, pas à des personnes.",
      "Leadfeeder, de Dealfront, refuse explicitement de publier un taux d'identification type : la couverture varie selon l'audience, et les visites issues de fournisseurs d'accès grand public sont filtrées.",
      "Les télétravailleurs ne sont identifiables, pour l'essentiel, que lorsqu'ils naviguent via le VPN de leur entreprise.",
      "La CJUE a jugé dans l'arrêt Breyer (C-582/14) qu'une adresse IP dynamique peut être une donnée personnelle pour l'exploitant d'un site, et le considérant 30 du RGPD cite les adresses IP parmi les identifiants en ligne.",
      "Le buyer intent de HubSpot rattache les visites aux adresses IP d'entreprises connues ; voir plus de 20 entreprises par vue exige des crédits HubSpot et un abonnement payant.",
    ],
    sections: [
      {
        heading: "Comment les entreprises sont identifiées",
        blocks: [
          {
            type: "p",
            text: "Le mécanisme, tel que le centre d'aide Leadfeeder de Dealfront le décrit pour son propre traceur : un script sur votre site capte chaque visite, et l'identification combine cookies de suivi, résolution inverse d'adresses IP, bases de données privées, données analytiques et apprentissage automatique. Une entreprise possède en général son domaine et la plage IP de ses bureaux, si bien qu'une visite venue de ce réseau peut lui être rattachée. La géolocalisation par IP ajoute la région du visiteur.",
          },
          {
            type: "p",
            text: "Le trafic qui ne peut pas être rattaché à une entreprise est laissé de côté : Leadfeeder indique ne pas facturer — ni même afficher — les visites issues de fournisseurs d'accès grand public. Ce que vous voyez est la part identifiée de votre trafic, pas sa totalité.",
          },
        ],
      },
      {
        heading: "Ce qu'elle ne peut pas voir",
        blocks: [
          {
            type: "ul",
            items: [
              "Les personnes. Leadfeeder précise qu'il est impossible de savoir exactement qui a visité sans que le visiteur ne s'identifie lui-même via un formulaire ou une inscription, et que l'identification des visiteurs individuels est jugée illégale dans de nombreux pays.",
              "La majeure partie du trafic domestique. Les télétravailleurs sont identifiables surtout lorsqu'ils naviguent via le VPN de leur entreprise ; sur une connexion grand public, ils apparaissent comme du trafic de fournisseur d'accès et sont filtrés.",
              "Un pourcentage garanti. Le centre d'aide de Leadfeeder affirme qu'il n'existe aucune façon honnête de promettre un taux d'identification, car il varie selon l'audience de chaque site — et prévient que les services qui promettent un pourcentage fixe extrapolent probablement à partir de quelques comptes.",
            ],
          },
        ],
      },
      {
        heading: "RGPD et consentement aux cookies",
        blocks: [
          {
            type: "p",
            text: "Deux règles distinctes s'appliquent dans l'UE. D'abord, les adresses IP peuvent être des données personnelles : l'article 4, point 1, du RGPD inclut les identifiants en ligne dans la définition des données personnelles, le considérant 30 cite les adresses de protocole internet et les témoins de connexion (cookies) parmi eux, et la Cour de justice a jugé dans l'arrêt Breyer (C-582/14, rendu sous la directive qui a précédé le RGPD) qu'une adresse IP dynamique constitue une donnée personnelle pour l'exploitant d'un site disposant de moyens légaux de la relier au visiteur via le fournisseur d'accès.",
          },
          {
            type: "p",
            text: "Ensuite, l'article 5, paragraphe 3, de la directive ePrivacy exige un consentement pour stocker des informations sur l'appareil d'un visiteur ou y accéder — avec des exceptions étroites pour ce qui est strictement nécessaire à la fourniture du service demandé par le visiteur. Un traceur d'identification des visiteurs qui dépose ou lit des cookies relève de cette règle, que les données soient personnelles ou non, et c'est pourquoi ces outils ont leur place derrière une bannière de consentement aux cookies dans l'UE.",
          },
          {
            type: "note",
            text: "Ceci décrit les règles dans les grandes lignes. Ce n'est pas un conseil juridique ; leur application à votre configuration dépend de vos outils et de votre base légale.",
          },
        ],
      },
      {
        heading: "L'identification des visiteurs dans HubSpot",
        blocks: [
          {
            type: "p",
            text: "La fonctionnalité actuelle de HubSpot pour cela est le buyer intent. Le code de suivi HubSpot installé sur votre site collecte des données de visite, comme l'activité sur le site et les adresses IP, et le buyer intent relie les visiteurs anonymes aux adresses IP d'entreprises connues. Ce que HubSpot documente, en octobre 2026 :",
          },
          {
            type: "ul",
            items: [
              "Il est proposé avec les abonnements Starter, Professional et Enterprise, des crédits HubSpot étant requis pour certaines fonctionnalités.",
              "Voir plus de 20 entreprises par vue exige des crédits HubSpot et un abonnement payant ; ajouter des entreprises et suivre leurs signaux d'intention consomment des crédits, tandis que les filtres et exclusions n'en consomment pas.",
              "Les filtres de période de visite couvrent au plus les 90 derniers jours, et les entreprises ajoutées depuis le buyer intent reçoivent la source de fiche « Buyer-Intent ».",
              "L'article de HubSpot note lui-même que le respect des lois sur la protection des données peut exiger une bannière de consentement aux cookies sur votre site.",
            ],
          },
        ],
      },
      {
        heading: "De l'entreprise identifiée au lead scoré",
        blocks: [
          {
            type: "p",
            text: "L'identification seule ne produit qu'une liste. La valeur vient de la suite — un schéma courant, décrit en étapes ; il montre comment les pièces s'assemblent, pas une étude de cas TascaLab :",
          },
          {
            type: "ol",
            items: [
              "Identifier : le traceur rapporte quelles entreprises ont visité et ce qu'elles ont consulté.",
              "Enrichir : chaque entreprise est recherchée pour sa taille, son secteur et son pays.",
              "Scorer : l'entreprise est comparée à votre profil client idéal et reçoit un score de fit.",
              "Enregistrer : l'entreprise et son score atterrissent dans votre CRM — une fiche entreprise HubSpot ou une fiche Attio.",
              "Récapituler : un résumé planifié, classé par score, part vers l'e-mail ou Slack pour que les commerciaux voient d'abord les meilleurs comptes.",
            ],
          },
        ],
      },
      {
        heading: "Faire construire tout cela",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit cela sous la forme du package Lead Capture & Scoring ({{price:leadScoring}}, paiement unique) : des leads d'une source — visiteurs du site, un formulaire ou des réponses d'outreach — classés et scorés par l'IA puis enregistrés dans votre CRM, avec des alertes par e-mail ou Slack. Connecter les outils environnants à HubSpot ou Attio relève du package CRM Integration ({{price:crmIntegration}}, paiement unique). La plupart des mises en place prennent 1 à 3 semaines, et chaque projet inclut une documentation de base et 30 jours de support après lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'identification des visiteurs peut-elle me dire qui a visité mon site ?",
        a: "Elle identifie des entreprises, via leurs réseaux — pas des personnes. Les éditeurs précisent que savoir exactement qui a visité exige que le visiteur s'identifie lui-même via un formulaire ou une inscription, et que l'identification des individus est jugée illégale dans de nombreux pays.",
      },
      {
        q: "Quelle part des visiteurs peut être identifiée ?",
        a: "Il n'existe pas de pourcentage fixe honnête. Le centre d'aide de Leadfeeder refuse d'en publier un, car la couverture dépend de l'audience de chaque site ; le trafic des fournisseurs d'accès grand public est entièrement filtré, et les télétravailleurs ne sont identifiables, pour l'essentiel, que via un VPN d'entreprise.",
      },
      {
        q: "L'identification des visiteurs par IP est-elle légale au regard du RGPD ?",
        a: "Les adresses IP peuvent être des données personnelles (arrêt Breyer, C-582/14 ; considérant 30 du RGPD), et les traceurs qui déposent ou lisent des cookies exigent un consentement au titre de l'article 5, paragraphe 3, de la directive ePrivacy — d'où la place de ces outils derrière une bannière de consentement dans l'UE. Ce n'est pas un conseil juridique.",
      },
      {
        q: "Que requiert le buyer intent de HubSpot ?",
        a: "Le code de suivi HubSpot sur votre site, et un abonnement Starter, Professional ou Enterprise. Voir plus de 20 entreprises par vue exige des crédits HubSpot, ajouter des entreprises et suivre les signaux d'intention consomment des crédits, et les filtres de visite couvrent au plus les 90 derniers jours.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
