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

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "transfert-chatbot-agent-humain",
    category: "basics",
    navLabel: "Transfert chatbot vers humain",
    primaryKeyword: "transfert chatbot vers agent humain",
    title: "Transfert chatbot vers humain : déclencheurs et contexte",
    description:
      "Transfert du chatbot vers un humain : quand escalader, quel contexte transmettre, que faire hors horaires, et comment Zendesk, Freshdesk et Messenger le gèrent.",
    h1: "Transfert du chatbot vers un humain : escalader sans perdre le client",
    intro:
      "Le transfert d'un chatbot vers un humain est le moment où un bot cesse de gérer une conversation et la transmet, avec son historique et les informations qu'il a recueillies, à un agent humain ou à une file d'attente. Un bon transfert se déclenche au bon moment, transporte le contexte pour que le client n'ait pas à se répéter, et fonctionne même quand personne n'est en ligne. Ce guide couvre les déclencheurs, le contexte à transmettre et la façon dont Zendesk, Freshdesk et Messenger le mettent en œuvre.",
    keyFacts: [
      "Selon Zendesk, un agent IA peut devoir transférer une demande à un humain lorsqu'elle est complexe, urgente ou sensible.",
      "Les AI Agents de Freshdesk peuvent transférer automatiquement lorsqu'un client utilise des phrases déclencheuses que vous définissez, comme demander un agent.",
      "Dans Dialogflow CX, si aucun intent n'atteint le seuil de classification, un événement no-match se déclenche au lieu d'une correspondance.",
      "Sur Messenger, le handover protocol décide quelle app possède un fil de conversation ; Meta a fait passer Instagram au Conversation Routing.",
    ],
    sections: [
      {
        heading: "Qu'est-ce que le transfert d'un chatbot vers un humain",
        blocks: [
          {
            type: "p",
            text: "Un transfert, aussi appelé escalade ou handoff, fait passer la responsabilité d'une conversation de l'automatisation à une personne. Selon le canal, le résultat est un chat en direct attribué à un agent, une conversation en attente dans une file ou un ticket qu'un agent prendra plus tard. Dans les agents IA de Zendesk, vous le construisez avec des blocs d'escalade dans le dialogue builder, qui définissent comment une demande passe à un humain quand l'agent IA ne peut pas la résoudre.",
          },
          {
            type: "p",
            text: "Les transferts prennent deux formes. Dans un transfert synchrone, le client reste dans la même conversation en direct et un agent la rejoint. Dans un transfert asynchrone, un ticket est créé pour qu'un agent réponde plus tard, ce qui est la solution de repli habituelle quand personne n'est disponible. Zendesk documente les deux, y compris un workflow d'escalade asynchrone par ticket qui permet aux clients de laisser un message quand votre équipe n'est pas disponible.",
          },
        ],
      },
      {
        heading: "Quand le bot doit passer la main",
        blocks: [
          {
            type: "table",
            caption: "Déclencheurs courants de transfert d'un chatbot",
            head: ["Déclencheur", "À quoi il ressemble", "Comment il est détecté"],
            rows: [
              [
                "Le client demande un humain",
                "Agent, parler à une personne, ça ne m'aide pas",
                "Les AI Agents de Freshdesk transfèrent automatiquement sur les phrases déclencheuses que vous listez, comme une demande de parler à un agent",
              ],
              [
                "Confiance faible ou aucune correspondance",
                "Le bot ne comprend pas ce que veut le client",
                "Dialogflow CX déclenche un événement no-match quand aucun intent n'atteint le seuil de classification ; utilisez ce repli pour proposer une personne",
              ],
              [
                "Sujet sensible ou urgent",
                "Réclamations, paiements échoués, sécurité, questions juridiques ou de sûreté",
                "Zendesk cite les demandes complexes, urgentes ou sensibles comme motifs de transfert ; parmi les exemples de phrases déclencheuses de Freshdesk figure le signalement d'un paiement échoué",
              ],
              [
                "Échecs répétés",
                "Le client reformule la même question ou le bot tourne en boucle",
                "Comptez les réponses de repli dans la session et escaladez au-delà d'un nombre défini",
              ],
              [
                "Règle métier",
                "Compte VIP, commande de montant élevé, incident en cours",
                "Récupérez les données client via une API avant que le bot ne réponde et envoyez directement ces clients à une personne",
              ],
            ],
          },
          {
            type: "p",
            text: "La confiance est le déclencheur que les équipes laissent le plus souvent implicite. Dans Dialogflow CX, l'intent au score le plus élevé n'est renvoyé comme correspondance que si son score de confiance est supérieur ou égal au seuil de classification ; sinon, un événement no-match est invoqué. Traitez cet événement comme un signal : posez une question de clarification, et transférez si cela se reproduit.",
          },
          {
            type: "p",
            text: "Zendesk conseille aussi de ne proposer l'escalade que lorsque l'agent IA ne peut pas orienter le client vers des ressources en self-service. Cela réserve les agents aux vrais problèmes, mais ne cachez pas l'option. Un client qui demande explicitement une personne doit l'obtenir, ou recevoir une réponse claire sur le moment où ce sera le cas.",
          },
        ],
      },
      {
        heading: "Transmettez le contexte, pas seulement le client",
        blocks: [
          {
            type: "p",
            text: "Un transfert qui perd la conversation oblige le client à tout recommencer. L'étape legacy « Transfer to agent » de Zendesk, par exemple, crée un ticket qui inclut l'historique de la conversation du client, que celui-ci ne voit pas, et peut ajouter des tags à ce ticket pour le routage. Les AI Agents de Freshdesk peuvent recueillir des informations comme un identifiant client, un numéro de référence ou un numéro de commande avant le transfert, lorsque la collecte de propriétés est activée à la fois dans les paramètres de comportement de conversation et dans ceux de transfert.",
          },
          {
            type: "p",
            text: "L'agent doit recevoir au minimum :",
          },
          {
            type: "ul",
            items: [
              "La transcription complète, y compris ce que le bot a déjà suggéré",
              "La raison du transfert : demande du client, absence de correspondance, sujet sensible ou règle métier",
              "Les informations d'identité comme le nom, l'e-mail ou l'identifiant de compte, et si elles ont été vérifiées",
              "Les champs structurés recueillis par le bot, comme le numéro de commande ou le produit",
              "Des tags ou une catégorie, pour que les règles de routage envoient la conversation au bon groupe",
            ],
          },
          {
            type: "p",
            text: "Fixez les attentes du client dans le même message : dites-lui qu'une personne prend le relais et dans quel délai approximatif il aura une réponse.",
          },
        ],
      },
      {
        heading: "Comment Zendesk, Freshdesk et Messenger mettent en œuvre le transfert",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk : les blocs d'escalade du dialogue builder de l'agent IA décident où va une conversation quand l'agent IA ne peut pas la résoudre, par exemple en la transmettant à un agent. Un bloc de disponibilité peut vérifier les horaires d'ouverture ou la disponibilité des agents avant l'exécution de l'escalade.",
              "Freshdesk : dans les paramètres de transfert (handover) de l'AI Agent, vous activez « Transfer conversation », listez les phrases déclencheuses qui doivent provoquer un transfert automatique et pouvez faire recueillir d'abord les informations du client par l'AI Agent.",
              "Messenger : quand plusieurs apps gèrent les messages d'une Page Facebook, comme votre bot et une boîte de réception de chat en direct, le handover protocol de Meta décide quelle app possède le fil. Le webhook messaging_handovers signale les événements pass thread control, take thread control, request thread control et app role. Un événement pass_thread_control inclut les ID de l'app propriétaire précédente et de la nouvelle, ainsi qu'une chaîne metadata définie dans la requête API, un emplacement pratique pour indiquer la raison du transfert.",
              "Instagram : selon le changelog de Meta, le handover protocol n'est plus pris en charge pour Instagram et toutes les entreprises ont été migrées vers Conversation Routing, qui permet de définir quels partenaires contrôlent les conversations clients à un moment donné. Meta présente Conversation Routing comme rétrocompatible avec la plupart des API du handover protocol.",
            ],
          },
        ],
      },
      {
        heading: "Gestion en dehors des heures d'ouverture",
        blocks: [
          {
            type: "p",
            text: "Un bot qui promet un humain alors que personne n'est en ligne est pire que l'absence de transfert. Vérifiez d'abord la disponibilité, puis choisissez une solution de repli :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : un bloc de disponibilité vérifie les horaires d'ouverture ou la disponibilité des agents. Dans un canal synchrone comme la messagerie, Zendesk suggère d'escalader plutôt par e-mail en dehors des heures de travail des agents, et son workflow d'escalade asynchrone par ticket permet aux clients de laisser un message auquel un humain donnera suite plus tard.",
              "Freshdesk : l'option « Transfer outside business hours » vous permet de choisir un planning d'horaires d'ouverture, de transférer la conversation à un agent ou à un groupe, et de rédiger le message que voit le client.",
              "Toute plateforme : créez un ticket avec la transcription, indiquez quand l'équipe sera de retour et laissez le bot continuer à répondre aux questions de self-service en attendant.",
            ],
          },
          {
            type: "note",
            text: "Testez séparément le parcours hors horaires. C'est la branche la plus susceptible de tomber en panne sans que personne ne s'en aperçoive, car personne dans l'équipe n'est en ligne quand elle s'exécute.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des chatbots avec transfert vers votre helpdesk existant ou Slack : un Starter Chat Bot (350–450 USD) ou un Standard Chat Bot (500–650 USD), connectés via des API, des webhooks et Make ou n8n. Chaque projet comprend une documentation de base et 30 jours de support après le lancement, sans frais cachés, et la plupart des mises en place prennent 1 à 3 semaines. Un appel d'audit gratuit de 30 minutes est un bon moyen de cartographier vos déclencheurs de transfert.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quand un chatbot doit-il passer la main à un humain ?",
        a: "Quand le client demande une personne, quand le bot ne parvient pas à identifier la demande avec une confiance suffisante, et quand le sujet est complexe, urgent ou sensible, ce qui correspond à la façon dont Zendesk décrit les demandes qui nécessitent un agent humain.",
      },
      {
        q: "Comment éviter que les clients se répètent après un transfert ?",
        a: "Transmettez la transcription, la raison du transfert et toutes les informations recueillies par le bot dans le ticket ou le chat. L'étape de transfert legacy de Zendesk ajoute l'historique de la conversation au ticket, et les AI Agents de Freshdesk peuvent recueillir des informations comme un numéro de commande avant le transfert.",
      },
      {
        q: "Qu'est-ce que le handover protocol de Messenger ?",
        a: "C'est le mécanisme de Meta qui décide quelle app possède un fil de conversation Messenger quand plusieurs apps servent la même Page. Les apps cèdent, prennent et demandent le contrôle du fil, et le webhook messaging_handovers signale ces événements.",
      },
      {
        q: "Que se passe-t-il si un client demande un humain en dehors des heures d'ouverture ?",
        a: "Vérifiez la disponibilité avant d'escalader. Zendesk et Freshdesk vous permettent tous deux de traiter différemment les transferts hors horaires, par exemple en créant un ticket pour un suivi ultérieur et en affichant un message indiquant quand l'équipe est disponible.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
      },
      {
        label: "Meta for Developers — messaging_handovers webhook event reference",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_handovers",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
