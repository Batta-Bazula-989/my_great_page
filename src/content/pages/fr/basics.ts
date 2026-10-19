import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "automatisation-support-client-definition",
    category: "basics",
    navLabel: "Automatisation du support client",
    primaryKeyword: "qu'est-ce que l'automatisation du support client",
    title: "Qu'est-ce que l'automatisation du support client ?",
    description:
      "L'automatisation du support client : bots, routage, macros, réponses automatiques, minuteurs SLA et rapports, ce qui reste humain, lien avec votre helpdesk.",
    h1: "Qu'est-ce que l'automatisation du support client ?",
    intro:
      "L'automatisation du support client consiste à utiliser des règles, des bots et des intégrations pour traiter le travail de support répétitif, comme répondre aux questions courantes, trier les tickets, envoyer des accusés de réception et suivre les échéances, sans qu'un agent fasse chaque étape à la main. L'essentiel tourne dans le helpdesk que vous utilisez déjà, complété par des API et des webhooks. L'objectif est de donner à vos agents plus de temps pour les conversations qui demandent du discernement.",
    keyFacts: [
      "Les déclencheurs Zendesk s'exécutent immédiatement après la création ou la mise à jour d'un ticket ; les automatisations Zendesk reposent sur le temps et s'exécutent une fois par heure.",
      "Les macros Zendesk n'ont pas de conditions : c'est un agent qui décide quand en appliquer une.",
      "Les automatisations de Zendesk, Freshdesk et Jira peuvent toutes envoyer des requêtes HTTP vers d'autres systèmes depuis leurs règles.",
      "Selon Zendesk, les demandes complexes, urgentes ou sensibles peuvent nécessiter un transfert vers un agent humain.",
    ],
    sections: [
      {
        heading: "L'automatisation du support client, définition",
        blocks: [
          {
            type: "p",
            text: "Toute automatisation du support comporte les trois mêmes éléments : ce qui la lance (un événement, comme un nouveau ticket, ou le temps écoulé), des conditions qui décident si elle s'applique, et les actions qu'elle effectue. Les helpdesks exposent directement ce modèle. Zendesk parle de règles métier : les déclencheurs s'exécutent immédiatement après la création ou la mise à jour d'un ticket, tandis que les automatisations reposent sur le temps et s'exécutent une fois par heure sur les tickets non clos. Zendesk souligne que la différence entre les deux ne tient pas aux actions qu'ils peuvent effectuer, mais aux conditions qui les mettent en route.",
          },
          {
            type: "p",
            text: "L'automatisation couvre tout un spectre. À une extrémité, elle agit avant qu'un humain ne voie le ticket : un bot répond à la question, ou une règle fixe la priorité et attribue un groupe. À l'autre extrémité, elle assiste l'agent : une réponse enregistrée insère une réponse courante, ou une barre latérale récupère la commande du client dans un autre système. Les deux comptent, et la plupart des équipes ont besoin des deux.",
          },
        ],
      },
      {
        heading: "Les principaux types d'automatisation du support",
        blocks: [
          {
            type: "table",
            caption: "Types courants d'automatisation du support client",
            head: ["Type", "Ce qu'il fait", "Exemple dans un helpdesk"],
            rows: [
              [
                "Self-service et bots",
                "Répond aux questions courantes par chat, messagerie ou e-mail, sans agent",
                "Les agents IA de Zendesk répondent aux questions à partir du contenu de vos sources de connaissances et peuvent escalader vers un humain",
              ],
              [
                "Routage et tri",
                "Classe les nouveaux tickets et les envoie au bon groupe ou au bon agent",
                "Les déclencheurs Zendesk peuvent ajouter des compétences aux tickets à leur création ou à leur mise à jour ; le routage omnicanal attribue le travail selon la disponibilité et la capacité des agents",
              ],
              [
                "Macros et réponses types",
                "Applique une réponse enregistrée et des mises à jour du ticket en une seule action",
                "Une macro Zendesk peut ajouter un texte de commentaire, mettre à jour des champs, ajouter ou retirer des tags et changer l'assigné",
              ],
              [
                "Réponses automatiques",
                "Confirme la réception et fixe les attentes immédiatement",
                "Un déclencheur basé sur un événement qui envoie au demandeur un accusé de réception par e-mail à la création d'un ticket",
              ],
              [
                "Minuteurs SLA et escalades",
                "Suit les échéances de réponse et de résolution et avertit avant un dépassement",
                "Une politique SLA associée à une règle temporelle qui alerte un chef d'équipe avant qu'un objectif ne soit manqué",
              ],
              [
                "Reporting",
                "Collecte les indicateurs du support et les livre selon un planning",
                "Un récapitulatif hebdomadaire du volume de tickets, du délai de première réponse et du CSAT envoyé par e-mail ou sur Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Les macros sont un cas limite instructif. Zendesk note que les macros n'ont pas de conditions : rien n'évalue un ticket pour décider si une macro s'applique, c'est donc un agent qui la choisit. Les réponses enregistrées sont ainsi le point de départ le moins risqué, puisqu'une personne décide à chaque fois.",
          },
          {
            type: "p",
            text: "Le routage est souvent le premier endroit où l'automatisation est rentable, car il concerne chaque ticket. Le tri intelligent (intelligent triage) de Zendesk, par exemple, classe les nouveaux tickets par sujet, sentiment et langue, et peut les router via le routage omnicanal, le routage par compétences ou des déclencheurs. Les configurations plus simples utilisent des règles basées sur des mots-clés ou des champs de formulaire pour fixer le groupe et la priorité.",
          },
        ],
      },
      {
        heading: "Ce qui doit rester humain",
        blocks: [
          {
            type: "p",
            text: "L'automatisation excelle dans le travail répétable et bien défini. Elle est mauvaise en matière de discernement, d'empathie et d'exceptions. Pour les agents IA, Zendesk indique qu'une demande doit parfois être transférée à un agent humain lorsqu'elle est complexe, urgente ou sensible, et recommande de définir ces chemins d'escalade avant le lancement. En pratique, confiez ceci à des personnes :",
          },
          {
            type: "ul",
            items: [
              "Les réclamations, les résiliations et les conversations chargées en émotion",
              "Les litiges de facturation, les remboursements hors politique et les autres exceptions qui nécessitent une personne habilitée à décider",
              "La sécurité des comptes et les vérifications d'identité, où une erreur coûte cher",
              "Les questions que le bot ne sait pas classer, ou auxquelles il n'a déjà pas su répondre",
              "Les comptes à forte valeur ou à risque que vous avez décidé de gérer personnellement",
            ],
          },
          {
            type: "p",
            text: "Quoi que vous automatisiez, gardez un moyen visible de joindre une personne et transmettez l'historique de la conversation, pour que le client n'ait pas à se répéter. Notre guide sur le transfert du chatbot vers un humain explique comment faire.",
          },
        ],
      },
      {
        heading: "Comment l'automatisation se branche sur votre helpdesk",
        blocks: [
          {
            type: "p",
            text: "Il est rarement nécessaire de remplacer votre helpdesk pour l'automatiser. Les helpdesks modernes peuvent appeler d'autres systèmes depuis leurs règles, et d'autres systèmes peuvent mettre à jour les tickets via l'API du helpdesk. C'est ainsi que se construisent les automatisations sur mesure :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : vous créez un webhook dans l'Admin Center, puis vous l'associez à un déclencheur ou à une automatisation avec l'action « Notify webhook ». Le corps de la requête peut être en JSON, en XML ou encodé comme un formulaire, et des placeholders insèrent les données du ticket.",
              "Freshdesk : les règles d'automatisation qui s'exécutent à la création ou à la mise à jour des tickets peuvent utiliser l'action « Trigger webhook » avec GET, POST, PUT, PATCH ou DELETE et des placeholders comme {{ticket.id}}. Les webhooks en échec sont relancés toutes les 30 minutes, jusqu'à 48 appels.",
              "Jira : l'action d'automatisation « Send web request » appelle un autre système quand une règle s'exécute, et peut attendre la réponse pour que les étapes suivantes utilisent les données renvoyées.",
            ],
          },
          {
            type: "p",
            text: "Un flux sur mesure typique ressemble à ceci :",
          },
          {
            type: "ol",
            items: [
              "Une règle du helpdesk se déclenche sur un ticket nouveau ou mis à jour et envoie un webhook.",
              "Un outil de workflow comme Make ou n8n, ou un petit service, le reçoit et va chercher des données ailleurs : un système de commandes, un CRM ou un modèle de langage.",
              "Le workflow réécrit le résultat via l'API du helpdesk sous forme de tag, de valeur de champ, de note privée ou d'attribution.",
              "Les agents voient le résultat dans le ticket, et les règles du helpdesk prennent le relais.",
            ],
          },
        ],
      },
      {
        heading: "Par où commencer",
        blocks: [
          {
            type: "ol",
            items: [
              "Listez vos types de demandes les plus fréquents du mois dernier et repérez ceux qui suivent toujours les mêmes étapes.",
              "Réglez d'abord le routage et les réponses automatiques. Ils concernent chaque ticket et sont faciles à vérifier.",
              "Transformez les réponses répétées en macros ou en réponses types avant de les confier à un bot.",
              "Ajoutez un bot pour les questions les plus courantes et à faible risque, avec un transfert clair vers une personne.",
              "Mesurez le délai de première réponse, le délai de résolution et le CSAT avant et après chaque changement, pour savoir ce qui a réellement aidé.",
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab est l'activité indépendante de Roman Zakharenko, qui construit des automatisations du support sur les outils que vous utilisez déjà, dont Zendesk, Freshdesk, Jira et Slack, avec des API, des webhooks et Make ou n8n. Les tarifs ponctuels comprennent Ticket Routing & Categorization (600–950 USD), un Starter Chat Bot (350–450 USD) et Automated Reports (500–900 USD). La plupart des mises en place prennent 1 à 3 semaines et incluent une documentation de base, 30 jours de support après le lancement et aucun frais caché. Vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "L'automatisation du support client, est-ce la même chose qu'un chatbot ?",
        a: "Non. Le chatbot n'en est qu'un type. Les règles de routage, les macros, les réponses automatiques, les minuteurs SLA et les rapports planifiés relèvent aussi de l'automatisation du support, et beaucoup d'équipes commencent par ceux-là, car ils s'appliquent à chaque ticket.",
      },
      {
        q: "Quelle est la différence entre un déclencheur et une automatisation dans Zendesk ?",
        a: "Les déclencheurs reposent sur des événements et s'exécutent immédiatement après la création ou la mise à jour d'un ticket. Les automatisations reposent sur le temps et s'exécutent une fois par heure : elles conviennent donc à des actions comme une relance après un nombre d'heures défini.",
      },
      {
        q: "Faut-il changer de helpdesk pour automatiser le support ?",
        a: "Généralement non. Les automatisations de Zendesk, Freshdesk et Jira peuvent toutes envoyer des requêtes HTTP sortantes depuis leurs règles : vous pouvez donc connecter d'autres systèmes au helpdesk que vous utilisez déjà.",
      },
      {
        q: "Qu'est-ce qu'il ne faut pas automatiser dans le support client ?",
        a: "Les conversations complexes, urgentes ou sensibles, qui selon Zendesk peuvent nécessiter un agent humain, ainsi que les litiges et les exceptions aux règles qui exigent une personne habilitée à décider.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },
];
