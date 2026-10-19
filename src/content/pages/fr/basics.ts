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

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "kpi-support-client",
    category: "basics",
    navLabel: "KPI du support client",
    primaryKeyword: "KPI support client",
    title: "KPI du support client : définitions et formules",
    description:
      "Les KPI du support client expliqués : première réponse, délai de résolution, FCR, réouvertures, CSAT, CES, NPS et backlog, avec leur mode de calcul réel.",
    h1: "KPI du support client : quoi suivre et comment calculer chaque indicateur",
    intro:
      "Les indicateurs du support client sont les mesures qui montrent à quelle vitesse, avec quelle qualité et sous quelle charge de travail votre équipe résout les demandes des clients. Le socle couvre la rapidité (délai de première réponse et délai de résolution), la qualité (résolution au premier contact et réouvertures), le retour client (CSAT, CES et NPS) et la charge de travail (backlog). Ci-dessous, chacun est défini comme le font les éditeurs de helpdesks et les auteurs d'origine.",
    keyFacts: [
      "Le full resolution time de Zendesk court de la création du ticket à sa résolution la plus récente : les tickets rouverts continuent donc d'être comptés.",
      "Freshdesk ne compte un ticket dans le FCR que si le client n'a envoyé aucun autre message après son premier contact.",
      "Le NPS est le pourcentage de promoteurs (notes de 9 à 10) moins le pourcentage de détracteurs (notes de 0 à 6).",
      "Le NPS a été présenté par Fred Reichheld dans la Harvard Business Review en décembre 2003.",
      "La mesure de l'effort client a été défendue dans l'article de la HBR de juillet 2010 Stop Trying to Delight Your Customers.",
    ],
    sections: [
      {
        heading: "Les principaux indicateurs du support client en un coup d'œil",
        blocks: [
          {
            type: "table",
            caption: "Indicateurs du support client et leur mode de calcul",
            head: ["Indicateur", "Ce qu'il mesure", "Mode de calcul"],
            rows: [
              [
                "Délai de première réponse (FRT)",
                "Combien de temps les clients attendent la première réponse",
                "Temps entre la création du ticket et la première réponse d'un agent, exprimé en moyenne ou en médiane sur l'ensemble des tickets",
              ],
              [
                "Délai de résolution complète",
                "Le temps nécessaire pour résoudre définitivement un ticket",
                "Temps entre la création du ticket et sa résolution la plus récente (définition Zendesk)",
              ],
              [
                "Délai moyen de résolution",
                "Le temps de résolution typique sur de nombreux tickets",
                "Somme des délais de résolution divisée par le nombre de tickets résolus sur la période",
              ],
              [
                "Résolution au premier contact (FCR)",
                "Part des problèmes résolus sans que le client revienne",
                "Tickets résolus sans autre message du client après le premier contact, divisés par l'ensemble des tickets résolus sur la période (définition Freshdesk)",
              ],
              [
                "Réouvertures",
                "Les tickets qui n'étaient pas vraiment résolus",
                "Nombre de tickets repassés de Solved à Open (Zendesk), souvent exprimé en part des tickets résolus",
              ],
              [
                "CSAT",
                "La satisfaction vis-à-vis d'une interaction précise",
                "Tickets notés « good » divisés par l'ensemble des tickets notés, en pourcentage (Zendesk Explore)",
              ],
              [
                "CES",
                "L'effort que le client a dû fournir",
                "Une enquête après l'interaction sur la facilité ou l'effort, suivie sous forme de score moyen ou de part de réponses à faible effort",
              ],
              [
                "NPS",
                "La propension à recommander l'entreprise",
                "Pourcentage de promoteurs (9–10) moins pourcentage de détracteurs (0–6) sur une échelle de 0 à 10",
              ],
              [
                "Backlog",
                "Le travail non résolu qui attend l'équipe",
                "Nombre de tickets aux statuts New, Open, Pending ou On-hold à un instant donné (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Rapidité : délai de première réponse et délai de résolution",
        blocks: [
          {
            type: "p",
            text: "Le délai de première réponse est l'écart entre la création d'un ticket et la première réponse d'un agent ; c'est ainsi que le mesure l'indicateur first reply time de Zendesk. C'est la première attente que vit le client, et c'est généralement le premier objectif que les équipes inscrivent dans une politique SLA.",
          },
          {
            type: "p",
            text: "Le délai de résolution mesure le temps nécessaire pour résoudre le problème. Le full resolution time de Zendesk court de la création à la résolution la plus récente du ticket : un ticket rouvert puis résolu à nouveau continue donc d'accumuler du temps. Le délai moyen de résolution est simplement la moyenne de ces durées sur les tickets résolus pendant une période. Quelques tickets très anciens peuvent faire grimper fortement une moyenne : il vaut donc la peine de regarder aussi la médiane.",
          },
          {
            type: "p",
            text: "Deux réglages changent beaucoup ces chiffres : compter en heures ouvrées ou en heures calendaires, et considérer ou non les réponses automatiques comme une réponse. Décidez une fois pour toutes, notez-le et n'y touchez plus, pour que les tendances restent comparables d'un mois à l'autre.",
          },
        ],
      },
      {
        heading: "Qualité : résolution au premier contact et réouvertures",
        blocks: [
          {
            type: "p",
            text: "La résolution au premier contact (FCR) est la part des problèmes résolus sans que le client ait besoin de revenir. Freshdesk calcule le FCR% comme le nombre de tickets résolus ou fermés après le premier contact du client, divisé par l'ensemble des tickets résolus ou fermés sur la période sélectionnée. Un ticket n'est retenu que si le client n'a envoyé aucun autre message après le premier ; la description initiale du ticket ne compte pas comme une réponse du client, et le nombre de réponses de l'agent n'a pas d'importance. Les tickets rouverts sont exclus, de même que les tickets sortants initiés par un agent.",
          },
          {
            type: "p",
            text: "Les réouvertures captent le cas inverse : un ticket marqué comme résolu qui revient. Zendesk enregistre une réouverture quand le statut d'un ticket repasse de Solved à Open. Surveillez le FCR et les réouvertures ensemble. Si votre équipe clôt des tickets trop tôt pour atteindre un objectif de résolution, les réouvertures augmenteront.",
          },
          {
            type: "note",
            text: "Les éditeurs définissent le FCR différemment : certains comptent les réponses des agents, d'autres celles des clients, et d'autres excluent certains canaux. Vérifiez la définition de votre helpdesk avant de comparer votre chiffre à celui de quelqu'un d'autre.",
          },
        ],
      },
      {
        heading: "Retour client : CSAT, CES et NPS",
        blocks: [
          {
            type: "p",
            text: "Le CSAT (customer satisfaction score) demande aux clients de noter une interaction précise. Dans Zendesk Explore, le score de satisfaction est le nombre de tickets notés « good » divisé par l'ensemble des tickets ayant reçu une réponse de satisfaction, exprimé en pourcentage. Comme il est lié à un ticket, le CSAT est le retour le plus direct sur le travail de votre équipe support.",
          },
          {
            type: "p",
            text: "Le CES (customer effort score) demande à quel point il a été facile de faire traiter un problème. L'idée vient de l'article Stop Trying to Delight Your Customers, publié dans la Harvard Business Review en juillet 2010. Il s'appuyait sur une étude portant sur plus de 75 000 personnes ayant eu affaire à des conseillers de centre de contact ou à des canaux de self-service, et soutenait que dépasser les attentes ne change pas grand-chose à la fidélité, contrairement à la réduction de l'effort client. La formulation et les échelles des enquêtes varient selon les outils : choisissez une version et gardez-la.",
          },
          {
            type: "p",
            text: "Le NPS (Net Promoter Score) mesure la propension à recommander l'entreprise, et pas seulement une interaction. Fred Reichheld, de Bain & Company, l'a présenté dans The One Number You Need to Grow, publié dans la Harvard Business Review en décembre 2003. Les clients indiquent sur une échelle de 0 à 10 dans quelle mesure ils recommanderaient l'entreprise à un ami ou à un collègue. Les notes de 9 à 10 désignent les promoteurs, de 7 à 8 les passifs et de 0 à 6 les détracteurs. Le NPS est le pourcentage de promoteurs moins le pourcentage de détracteurs : il va donc de -100 à +100.",
          },
        ],
      },
      {
        heading: "Charge de travail : le backlog, et des indicateurs fiables",
        blocks: [
          {
            type: "p",
            text: "Le backlog est le travail non résolu qui attend votre équipe. Zendesk définit le backlog de tickets comme l'ensemble des tickets actuellement aux statuts New, Open, Pending ou On-hold, attribués ou non. Suivez-le sous forme d'instantané quotidien pour voir la tendance. Un backlog qui grossit de semaine en semaine signifie que le volume entrant dépasse la capacité, même si les délais de réponse semblent encore corrects.",
          },
          {
            type: "p",
            text: "Quelques habitudes gardent les indicateurs utiles :",
          },
          {
            type: "ul",
            items: [
              "Associez un indicateur de rapidité à un indicateur de qualité, comme le délai de résolution et les réouvertures, pour que l'un ne puisse pas s'améliorer au détriment de l'autre.",
              "Segmentez par canal et par priorité. Une première réponse en chat et une première réponse par e-mail ne sont pas comparables.",
              "Gardez les mêmes définitions et le même réglage d'heures dans le temps, et signalez tout changement dans vos rapports.",
              "Transformez vos objectifs les plus importants en politiques SLA, pour que le helpdesk les suive sur chaque ticket.",
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "Le service Automated Reports de TascaLab (500–900 USD, paiement unique) extrait ces indicateurs de votre helpdesk, comme Zendesk, Freshdesk ou Jira, et livre un récapitulatif planifié par e-mail ou sur Slack. Chaque projet comprend une documentation de base, 30 jours de support après le lancement et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines. Un appel d'audit gratuit de 30 minutes aide à choisir les indicateurs à automatiser en priorité.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre le délai de première réponse et le délai de résolution ?",
        a: "Le délai de première réponse s'arrête à la première réponse d'un agent. Le délai de résolution s'arrête quand le ticket est résolu ; le full resolution time de Zendesk court jusqu'à la résolution la plus récente : les tickets rouverts continuent donc d'être comptés.",
      },
      {
        q: "Comment calcule-t-on le NPS ?",
        a: "Demandez aux clients, sur une échelle de 0 à 10, dans quelle mesure ils vous recommanderaient, puis soustrayez le pourcentage de détracteurs (0–6) du pourcentage de promoteurs (9–10). Les passifs (7–8) comptent dans le total des réponses, mais pas dans la soustraction.",
      },
      {
        q: "Quelle est la différence entre CSAT, CES et NPS ?",
        a: "Le CSAT note la satisfaction vis-à-vis d'une interaction précise, le CES mesure l'effort nécessaire pour faire traiter un problème, et le NPS mesure la probabilité qu'un client recommande l'entreprise dans son ensemble.",
      },
      {
        q: "Comment Freshdesk calcule-t-il la résolution au premier contact ?",
        a: "Le FCR% est le nombre de tickets résolus sans autre message du client après le premier contact, divisé par l'ensemble des tickets résolus sur la période. Les tickets rouverts et sortants sont exclus.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    key: "sla-policies-explained",
    slug: "politiques-sla-support-client",
    category: "basics",
    navLabel: "Politiques SLA expliquées",
    primaryKeyword: "politique SLA support client",
    title: "Politiques SLA du support client expliquées",
    description:
      "Politiques SLA du support client : objectifs de première réponse, réponse suivante et résolution, heures ouvrées ou calendaires, pause, alertes, configuration.",
    h1: "Les politiques SLA du support client, expliquées",
    intro:
      "Une politique SLA est un ensemble de règles de votre helpdesk qui attribue aux tickets des objectifs de délai de réponse et de résolution, selon des conditions comme la priorité, et suit chaque ticket par rapport à ces objectifs. Elle détermine quels tickets reçoivent quels objectifs, si le chronomètre compte en heures ouvrées ou en heures calendaires, quand il se met en pause et ce qui se passe avant un dépassement. Voici comment fonctionnent les politiques SLA, et comment Zendesk, Freshdesk et Jira Service Management les configurent.",
    keyFacts: [
      "Zendesk applique la première politique SLA, en parcourant la liste de haut en bas, dont les conditions correspondent au ticket.",
      "Dans Zendesk, le requester wait time se met en pause en Pending, et l'agent work time en Pending et On-hold.",
      "Freshdesk vous permet de calculer chaque SLA en heures ouvrées ou en heures calendaires (24x7).",
      "Les rappels de Freshdesk peuvent être programmés de 5 minutes à 4 heures avant l'échéance d'un objectif SLA.",
      "Dans Jira Service Management, chaque SLA a des conditions de démarrage, de pause et d'arrêt, ainsi que des objectifs qui sélectionnent les demandes en JQL.",
    ],
    sections: [
      {
        heading: "Qu'est-ce qu'une politique SLA",
        blocks: [
          {
            type: "p",
            text: "Un accord de niveau de service (SLA, service level agreement) est un engagement sur la rapidité avec laquelle vous répondez aux demandes et les résolvez. Une politique SLA est la façon dont votre helpdesk fait respecter cet engagement sur chaque ticket. La plupart des politiques ont les mêmes composantes :",
          },
          {
            type: "ul",
            items: [
              "Conditions : les tickets auxquels la politique s'applique, par exemple selon le client, le canal ou le type de demande",
              "Objectifs : les délais maximaux pour la première réponse, les réponses suivantes et la résolution, généralement définis par priorité",
              "Heures : si le chronomètre compte en heures ouvrées ou en heures calendaires",
              "Règles de pause : les statuts qui arrêtent le chronomètre",
              "Actions en cas de dépassement : rappels avant qu'un objectif ne soit manqué et escalades après",
            ],
          },
          {
            type: "p",
            text: "L'ordre compte quand vous avez plusieurs politiques. Zendesk exécute d'abord les déclencheurs, puis compare le ticket à ses politiques SLA en parcourant la liste de haut en bas et applique la première dont les conditions sont remplies. Placez les politiques spécifiques, comme celle des clients grands comptes, au-dessus des politiques générales. Zendesk exige aussi que la priorité du ticket soit définie dans le champ de priorité système par défaut ; un champ de priorité personnalisé ne correspondra à aucune politique.",
          },
        ],
      },
      {
        heading: "Objectifs de première réponse, de réponse suivante et de résolution",
        blocks: [
          {
            type: "table",
            caption: "Objectifs SLA et leur nom dans chaque outil",
            head: ["Objectif", "Ce qu'il mesure", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Première réponse",
                "Temps entre la création du ticket et la première réponse d'un agent",
                "First reply time",
                "First response",
                "Un SLA personnalisé qui démarre à la création de la demande et s'arrête à la première réponse au client",
              ],
              [
                "Réponse suivante",
                "Temps entre un message client resté sans réponse et la réponse suivante d'un agent",
                "Next reply time",
                "Every response",
                "Un SLA personnalisé avec ses propres conditions de démarrage et d'arrêt",
              ],
              [
                "Résolution",
                "Temps entre la création et la résolution du ticket",
                "Requester wait time, agent work time ou total resolution time",
                "Resolution",
                "Un SLA personnalisé qui s'arrête quand la demande est résolue",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk définit le next reply time comme le temps entre le plus ancien commentaire client sans réponse et le commentaire public suivant d'un agent. Il propose aussi un indicateur periodic update, qui mesure le temps entre les commentaires publics des agents. Pour la résolution, Zendesk dispose de trois indicateurs et recommande de n'en choisir qu'un par politique : requester wait time (temps passé en New, Open et On-hold), agent work time (temps passé en New et Open) et total resolution time (tout le cycle de vie, de la création jusqu'à la résolution du ticket).",
          },
          {
            type: "p",
            text: "Freshdesk définit des objectifs first response, every response et resolution par priorité dans chaque politique SLA. Dans Jira Service Management, chaque SLA est un minuteur nommé : vous définissez quand il démarre, se met en pause et s'arrête, puis vous ajoutez des objectifs qui utilisent JQL pour choisir les demandes concernées, avec des délais cibles écrits sous la forme 4h 30m.",
          },
        ],
      },
      {
        heading: "Quand le chronomètre tourne : heures ouvrées, heures calendaires et pause",
        blocks: [
          {
            type: "p",
            text: "Les heures ouvrées ne comptent que le temps compris dans vos horaires de travail ; les heures calendaires comptent chaque heure de chaque jour. Zendesk vous permet de choisir heures ouvrées ou calendaires pour chaque priorité d'une politique. Freshdesk demande si chaque SLA doit utiliser les horaires d'ouverture que vous avez définis ou les heures calendaires (24x7). Jira Service Management associe à chaque objectif un calendrier, avec un fuseau horaire, des jours et des heures ouvrés, et des jours fériés.",
          },
          {
            type: "p",
            text: "Un objectif de 4 heures ouvrées sur un ticket créé tard le vendredi peut n'arriver à échéance que le lundi. C'est juste pour votre équipe, mais ce n'est pas ce que vit le client : utilisez donc les heures calendaires pour toute priorité où vous promettez une couverture jour et nuit.",
          },
          {
            type: "p",
            text: "La pause est l'autre moitié du sujet. Le temps passé à attendre le client ne devrait généralement pas compter contre vous, et chaque outil le gère différemment :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : le requester wait time se met en pause en Pending ; l'agent work time se met en pause en Pending et On-hold ; le total resolution time ne se met en pause sur aucun changement de statut jusqu'à la résolution du ticket.",
              "Freshdesk : le statut Pending met en pause les minuteurs SLA, et vous pouvez désactiver le minuteur SLA pour n'importe quel statut, y compris des statuts personnalisés comme Waiting on Third Party. Les tickets dont le minuteur est désactivé apparaissent comme On Hold, et quand le client répond, le ticket repasse en Open et le chronomètre reprend.",
              "Jira Service Management : un SLA peut avoir des conditions de pause, par exemple pendant que vous attendez la réponse du client, en plus de ses conditions de démarrage et d'arrêt.",
            ],
          },
        ],
      },
      {
        heading: "Alertes de dépassement et escalades",
        blocks: [
          {
            type: "p",
            text: "Un SLA n'est utile que si quelqu'un agit avant qu'il ne soit manqué. Prévoyez un avertissement avant l'échéance et une escalade après :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : créez une automatisation avec la condition « Hours until next SLA breach » pour prévenir une équipe ou une personne quand un ticket approche du dépassement. Les automatisations s'exécutent une fois par heure : l'alerte peut donc arriver jusqu'à une heure avant ou après le seuil, jamais au moment exact. L'exemple de Zendesk ajoute un tag dans la même automatisation pour qu'elle ne se déclenche qu'une fois par ticket.",
              "Freshdesk : chaque politique SLA peut envoyer aux agents un rappel de 5 minutes à 4 heures avant l'échéance d'un objectif de première réponse ou de résolution, et escalader en cas de non-respect vers l'agent assigné ou d'autres personnes de votre choix, comme un chef d'équipe. Les deux se règlent dans Admin > Workflows > SLA Policies.",
              "Tout outil : envoyez les alertes de dépassement là où votre équipe regarde vraiment, comme un canal Slack, et pas seulement par e-mail.",
            ],
          },
        ],
      },
      {
        heading: "Comment Zendesk, Freshdesk et Jira Service Management configurent les SLA",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk : créez des politiques SLA avec des conditions et des objectifs par priorité, choisissez heures ouvrées ou calendaires pour chaque priorité, et ordonnez la liste pour que les politiques spécifiques viennent en premier. Ajoutez une automatisation pour les alertes de dépassement imminent.",
              "Freshdesk : dans Admin > Workflows > SLA Policies, définissez des objectifs first response, every response et resolution par priorité, choisissez heures ouvrées ou calendaires, puis ajoutez des rappels et des escalades. Décidez dans les paramètres de statut des tickets quels statuts désactivent le minuteur SLA.",
              "Jira Service Management : créez chaque SLA avec des conditions de démarrage, de pause et d'arrêt. Plusieurs conditions de démarrage se combinent avec OR, et le SLA s'arrête dès qu'une condition d'arrêt est remplie. Ajoutez ensuite des objectifs qui sélectionnent les demandes en JQL, définissez un délai cible et choisissez un calendrier.",
            ],
          },
          {
            type: "p",
            text: "Quel que soit l'outil, commencez par une politique et quelques priorités, faites-la tourner quelques semaines, puis comparez les délais réels de première réponse et de résolution aux objectifs avant de les resserrer.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab met en place l'automatisation liée aux SLA sur Zendesk, Freshdesk et Jira : un routage qui définit la priorité pour que la bonne politique s'applique, des alertes de dépassement vers Slack et des rapports SLA planifiés. Les tarifs ponctuels concernés sont Ticket Routing & Categorization (600–950 USD), Automated Reports (500–900 USD) et Custom Automation (1 200–2 000 USD). Les projets comprennent une documentation de base, 30 jours de support après le lancement et aucun frais caché, et la plupart prennent 1 à 3 semaines. Commencez par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre le délai de première réponse et le délai de réponse suivante ?",
        a: "Le délai de première réponse mesure l'attente de la première réponse d'un agent après la création d'un ticket. Le next reply time de Zendesk se mesure du plus ancien commentaire client sans réponse jusqu'au commentaire public suivant d'un agent : il s'applique donc tout au long de la conversation.",
      },
      {
        q: "Les SLA doivent-ils utiliser les heures ouvrées ou les heures calendaires ?",
        a: "Utilisez les heures ouvrées si votre équipe travaille selon des horaires définis et que les clients le savent, et les heures calendaires pour les priorités où vous promettez une couverture jour et nuit. Zendesk et Freshdesk vous laissent choisir par politique, et Jira Service Management utilise un calendrier que vous attribuez à chaque objectif.",
      },
      {
        q: "Le chronomètre SLA s'arrête-t-il quand un ticket est en Pending ?",
        a: "Cela dépend de l'outil et de l'indicateur. Freshdesk met en pause les minuteurs SLA en Pending. Dans Zendesk, le requester wait time et l'agent work time se mettent en pause en Pending, tandis que le total resolution time continue de tourner jusqu'à la résolution du ticket.",
      },
      {
        q: "Zendesk peut-il m'alerter au moment exact où un SLA est dépassé ?",
        a: "Non. Les alertes de dépassement imminent de Zendesk utilisent des automatisations, qui s'exécutent une fois par heure : une notification peut donc arriver jusqu'à une heure avant ou après le dépassement.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Ticket deflection
  // ---------------------------------------------------------------------------
  {
    key: "ticket-deflection",
    slug: "deflexion-tickets",
    category: "basics",
    navLabel: "Déflexion des tickets",
    primaryKeyword: "déflexion de tickets",
    title: "Déflexion de tickets : définition, mesure et limites",
    description:
      "La déflexion de tickets expliquée : canaux de self-service concernés, mesure chez Zendesk, Freshdesk et Intercom, et sessions abandonnées qui gonflent le taux.",
    h1: "Déflexion de tickets : ce que c'est et comment la mesurer honnêtement",
    intro:
      "On parle de déflexion de tickets quand un client résout sa question en self-service, par exemple grâce à un article du centre d'aide ou à un agent IA, au lieu de créer un ticket pour votre équipe. Les éditeurs de helpdesks la mesurent de façons très différentes, et la plupart de leurs mesures comptent comme déviés les clients qui sont simplement partis sans demander d'aide. Un taux de déflexion n'est utile qu'une fois que vous savez exactement ce qu'il compte et quelles demandes ne devraient jamais être déviées.",
    keyFacts: [
      "Le self-service score de Zendesk, aussi appelé ticket deflection ratio, compare l'utilisation du centre d'aide aux tickets créés sur la même période.",
      "Zendesk enregistre une déflexion supposée (assumed deflection) quand un visiteur du centre d'aide ne soumet aucun ticket mais ne confirme jamais avoir trouvé une réponse.",
      "Dans les rapports sur les agents IA de Zendesk, toute conversation qui ne se termine pas par une escalade compte comme déviée.",
      "Intercom enregistre une résolution supposée (assumed resolution) quand un client part après la dernière réponse de Fin sans demander davantage d'aide.",
      "Une enquête Gartner publiée en août 2024 a montré que seuls 14 % des problèmes de service client sont entièrement résolus en self-service.",
    ],
    sections: [
      {
        heading: "Où se produit la déflexion : les canaux de self-service",
        blocks: [
          {
            type: "p",
            text: "La déflexion se produit partout où un client peut trouver une réponse avant de joindre un agent. Chaque canal dévie les demandes d'une manière différente et laisse une trace différente dans vos données : il est donc utile de savoir ce que vous pouvez réellement mesurer pour chacun.",
          },
          {
            type: "table",
            caption: "Canaux de self-service qui dévient les tickets",
            head: ["Canal", "Comment il dévie", "Ce que vous pouvez mesurer"],
            rows: [
              [
                "Centre d'aide ou base de connaissances",
                "Les clients cherchent ou parcourent des articles avant de vous contacter",
                "Sessions ou utilisateurs du centre d'aide comparés aux tickets créés ; vues et votes sur les articles",
              ],
              [
                "Suggestions d'articles sur le formulaire de contact",
                "Le formulaire de demande suggère des articles pendant que le client décrit son problème",
                "Zendesk enregistre une déflexion confirmée quand un article suggéré est sélectionné et qu'aucun ticket n'est soumis dans cette session",
              ],
              [
                "Agent IA ou chatbot",
                "Répond aux questions par chat, messagerie ou e-mail, et escalade vers une personne quand il ne peut pas aider",
                "Conversations terminées sans escalade et, idéalement, résolutions confirmées par le client",
              ],
              [
                "Aide contextuelle ou intégrée au produit",
                "Un widget d'aide affiche des articles liés à la page ou à la fonctionnalité que le client utilise",
                "Ouvertures du widget, vues d'articles et formulaires de contact envoyés depuis le widget",
              ],
              [
                "Forum communautaire",
                "Les clients se répondent entre eux, et les fils résolus continuent d'aider les visiteurs suivants",
                "Difficile à relier directement aux tickets ; généralement suivi sous forme de fils avec une réponse acceptée",
              ],
            ],
          },
          {
            type: "note",
            text: "La déflexion est un effet secondaire d'un bon self-service, pas un objectif en soi. Un client qui obtient une réponse correcte en deux minutes, c'est une réussite. Un client qui abandonne, non, même si beaucoup de rapports comptent les deux de la même façon.",
          },
        ],
      },
      {
        heading: "Comment les éditeurs définissent et mesurent la déflexion",
        blocks: [
          {
            type: "p",
            text: "Il n'existe pas de définition commune. Chaque helpdesk compte quelque chose de légèrement différent, c'est pourquoi les taux de déflexion de deux outils, ou des études de cas de deux éditeurs, ne sont pas directement comparables.",
          },
          {
            type: "table",
            caption: "Comment les éditeurs de helpdesks définissent la déflexion",
            head: ["Éditeur et indicateur", "Ce qui est compté", "Points de vigilance"],
            rows: [
              [
                "Self-service score de Zendesk (aussi appelé self-service ratio ou ticket deflection ratio)",
                "L'utilisation du centre d'aide comparée aux tickets créés sur la même période. Dans le reporting Knowledge de Zendesk, le self-service ratio correspond aux sessions du centre d'aide divisées par les tickets soumis",
                "C'est un ratio, pas un nombre de problèmes résolus, et les rapports de déflexion de Zendesk ne suivent que les tickets soumis via le formulaire de demande du centre d'aide",
              ],
              [
                "Déflexion confirmée et supposée chez Zendesk",
                "Confirmée : le visiteur a sélectionné un article suggéré sur le formulaire de demande et n'a soumis aucun ticket dans cette session. Supposée : le visiteur a utilisé le centre d'aide et n'a soumis aucun ticket, mais n'a pas confirmé avoir trouvé une réponse",
                "La déflexion supposée est une déduction tirée du silence",
              ],
              [
                "Taux de déflexion des agents IA de Zendesk",
                "Toute conversation qui ne se termine pas par une escalade, y compris les escalades échouées et les conversations sans statut",
                "Zendesk publie à côté des mesures plus strictes : les conversations gérées par l'agent IA et les résolutions automatisées vérifiées par un LLM",
              ],
              [
                "Taux de déflexion des agents IA de Freshdesk",
                "La part des conversations d'un sujet résolues par l'agent IA sans intervention humaine",
                "La tendance de déflexion de l'Email AI Agent compte aussi les tickets qu'un agent humain a fermés après que le client a lu une réponse sans y répondre",
              ],
              [
                "Résolution par Fin chez Intercom",
                "Après la dernière réponse de Fin, le client confirme qu'elle l'a aidé (résolution confirmée) ou part sans demander davantage d'aide (résolution supposée)",
                "Si le client revient dans la conversation pour obtenir plus d'aide, la résolution est retirée du décompte",
              ],
            ],
          },
          {
            type: "p",
            text: "Deux tendances ressortent. D'abord, les indicateurs les plus larges, comme le taux de déflexion des agents IA de Zendesk, les déflexions supposées et les résolutions supposées d'Intercom, comptent le silence comme un succès. Ensuite, les indicateurs plus stricts ajoutent une forme de vérification : Zendesk ne compte une résolution automatisée que lorsqu'un contrôle par LLM confirme que la demande a été résolue sans humain, et les conversations qui échouent à ce contrôle ne consomment pas de résolution automatisée.",
          },
        ],
      },
      {
        heading: "Le problème des sessions abandonnées",
        blocks: [
          {
            type: "p",
            text: "La plupart des indicateurs de déflexion ne savent pas distinguer un client qui a trouvé la réponse d'un client qui a abandonné. Un visiteur qui lit un article, ne le comprend pas, puis vous appelle est une déflexion supposée dans le rapport du centre d'aide et un ticket dans la file téléphonique. Un chat qui se termine parce que le client a fermé l'onglet ressemble à un chat terminé parce que le problème est résolu. Zendesk note que même sa catégorie plus stricte des conversations gérées par l'agent IA peut inclure des conversations où les clients ont décroché avant l'escalade ou étaient mécontents de la résolution.",
          },
          {
            type: "p",
            text: "Le succès réel du self-service est généralement plus faible que ne le suggèrent les tableaux de bord. Dans une enquête Gartner menée auprès de 5 728 clients et publiée en août 2024, seuls 14 % des problèmes de service client ont été entièrement résolus en self-service, et seulement 36 % même lorsque les clients décrivaient le problème comme très simple.",
          },
          {
            type: "p",
            text: "Pour que vos chiffres de déflexion restent honnêtes :",
          },
          {
            type: "ul",
            items: [
              "Présentez séparément les déflexions confirmées et supposées, et traitez le chiffre supposé comme une borne haute.",
              "Suivez les contacts répétés. Un client qui vous joint sur un autre canal le lendemain d'une session déviée n'a pas été dévié.",
              "Surveillez les contacts par client ou par commande. Si la déflexion augmente mais que les contacts par client ne baissent pas, la déflexion n'existe que sur le papier.",
              "Lisez chaque mois un échantillon de transcriptions de bot comptées comme déviées pour voir comment les conversations se sont réellement terminées.",
              "Associez la déflexion à un indicateur de qualité, comme le CSAT des conversations avec le bot ou les tickets rouverts.",
            ],
          },
        ],
      },
      {
        heading: "Ce qui ne doit pas être dévié",
        blocks: [
          {
            type: "p",
            text: "Certaines demandes doivent parvenir à une personne le plus vite possible, même si un bot pourrait techniquement répondre. Les dévier vous épargne un ticket et vous coûte un client.",
          },
          {
            type: "ul",
            items: [
              "Les clients qui demandent explicitement un humain. Rendez ce chemin visible au lieu de le cacher derrière plusieurs échanges ratés avec le bot.",
              "Les problèmes de sécurité, comme les comptes compromis, les soupçons de fraude ou les prélèvements inattendus.",
              "Les litiges de facturation, les remboursements et les résiliations, où une réponse erronée ou dilatoire a un coût direct.",
              "Les réclamations et les escalades, surtout les contacts répétés sur le même problème.",
              "Les demandes juridiques et de protection des données, comme les demandes d'accès ou de suppression de données personnelles, qui exigent une réponse documentée.",
              "Les problèmes urgents ou liés à la sécurité des personnes, et les clients qui semblent en détresse ou vulnérables.",
            ],
          },
          {
            type: "p",
            text: "Les clients attendent cette porte de sortie. Dans une enquête Gartner menée auprès de 3 566 clients en février et mars 2026 et publiée en août 2026, 87 % ont déclaré que les entreprises qui utilisent l'IA générative (GenAI) pour le service client doivent donner accès à un agent humain. Dans le même communiqué, Gartner conseille de ne pas faire de l'IA générative une première étape obligatoire, et de ne tenter une résolution que lorsque la confiance est élevée, avec un chemin clair vers une personne.",
          },
          {
            type: "p",
            text: "En pratique, cela signifie des règles de routage qui envoient ces demandes directement dans la bonne file, et un transfert du bot vers un humain qui transmet toute la conversation pour que le client n'ait rien à répéter.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des chatbots IA qui répondent aux questions courantes sur votre site web, WhatsApp, Telegram, Facebook Messenger ou Instagram, et transmettent tout le reste à votre équipe dans Zendesk, Freshdesk ou vos outils existants. Un Starter Chat Bot coûte 350–450 USD et un Standard Chat Bot couvrant 3 à 5 canaux coûte 500–650 USD, en paiement unique. Automated Reports (500–900 USD) peut suivre la déflexion à côté des contacts répétés et des réouvertures, pour que vous en voyiez l'effet réel. Chaque projet comprend une documentation de base, 30 jours de support après le lancement et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines. Un appel d'audit gratuit de 30 minutes est un bon moyen de décider ce qu'il faut automatiser et ce qu'il faut garder humain.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre déflexion et résolution de tickets ?",
        a: "La déflexion signifie que le client n'a pas créé de ticket ni joint d'agent ; la résolution signifie que le problème a réellement été résolu. Le taux de déflexion des agents IA de Zendesk compte toute conversation qui ne s'est pas terminée par une escalade, tandis que ses résolutions automatisées exigent en plus un contrôle par LLM confirmant que la demande a été résolue.",
      },
      {
        q: "Qu'est-ce qu'une déflexion supposée (assumed deflection) dans Zendesk ?",
        a: "Une session du centre d'aide où le visiteur n'a ni demandé d'aide ni soumis de ticket, mais n'a pas non plus confirmé avoir trouvé une réponse. Une déflexion confirmée exige que le visiteur sélectionne un article suggéré sur le formulaire de demande, puis ne soumette aucun ticket dans cette session.",
      },
      {
        q: "Comment Zendesk calcule-t-il le self-service ratio ?",
        a: "Il compare l'utilisation du centre d'aide aux tickets de la même période. Dans le reporting Knowledge de Zendesk, le self-service ratio correspond aux sessions du centre d'aide divisées par les tickets soumis, et les rapports de déflexion ne suivent que les tickets soumis via le formulaire de demande du centre d'aide.",
      },
      {
        q: "Intercom compte-t-il une conversation Fin comme résolue si le client part simplement ?",
        a: "Oui. Si le client quitte la conversation après la dernière réponse de Fin sans demander davantage d'aide, Intercom enregistre une résolution supposée. Si le client confirme que la réponse l'a aidé, il s'agit d'une résolution confirmée.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Getting started with self-service, Part 6: Tracking essential self-service metrics",
        url: "https://support.zendesk.com/hc/en-us/articles/4408894139930-Getting-started-with-self-service-Part-6-Tracking-essential-self-service-metrics",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Knowledge",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155064090-Metrics-and-attributes-for-Zendesk-Knowledge",
      },
      {
        label: "Zendesk Help Center — Understanding the difference between deflection, AI agent-handled, automated resolution, and custom resolution rates",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756478106-Understanding-the-difference-between-deflection-AI-agent-handled-automated-resolution-and-custom-resolution-rates",
      },
      {
        label: "Freshdesk Support — Monitor and Analyze AI Agent Performance Metrics in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011716-monitor-ai-agent-performance",
      },
      {
        label: "Freshdesk Support — Manage, Test & Troubleshoot Your Email AI Agent",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011217-use-and-manage-the-email-ai-agent",
      },
      {
        label: "Intercom Help — Fin AI Agent outcomes",
        url: "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      },
      {
        label: "Gartner — Survey Finds Only 14% of Customer Service Issues Are Fully Resolved in Self-Service (August 2024)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2024-08-19-gartner-survey-finds-only-14-percent-of-customer-service-issues-are-fully-resolved-in-self-service",
      },
      {
        label: "Gartner — Survey Finds 87% of Customers Say Companies Using GenAI for Customer Service Must Provide Access to a Human Agent (August 2026)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "ai-knowledge-base-for-customer-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. Omnichannel customer support
  // ---------------------------------------------------------------------------
  {
    key: "omnichannel-customer-support",
    slug: "support-client-omnicanal",
    category: "basics",
    navLabel: "Support client omnicanal",
    primaryKeyword: "support client omnicanal",
    title: "Support client omnicanal : ce que cela signifie en pratique",
    description:
      "Le support client omnicanal expliqué : différence avec le multicanal, espace de travail agent unifié, routage omnicanal, fenêtres WhatsApp et Messenger.",
    h1: "Support client omnicanal : définition et fonctionnement",
    intro:
      "Le support client omnicanal signifie que chaque canal par lequel un client vous contacte, comme l'e-mail, le chat, le téléphone, WhatsApp ou les messageries sociales, est relié à une seule fiche client et à un seul historique de conversation que n'importe quel agent peut voir. Le support multicanal propose les mêmes canaux, mais les gère séparément : les clients se répètent chaque fois qu'ils changent de canal. Passer à l'omnicanal suppose un espace de travail agent unifié, un routage qui traite tous les canaux comme un seul réservoir de travail et des workflows qui respectent les règles propres à chaque canal.",
    keyFacts: [
      "Freshworks décrit le support multicanal comme des canaux indépendants qui fonctionnent chacun de manière autonome ; dans le support omnicanal, ils sont interconnectés.",
      "Dans le Zendesk Agent Workspace, une même conversation de ticket peut inclure e-mail, chat et voix.",
      "Le routage omnicanal de Zendesk attribue les tickets e-mail, messagerie et appels selon le statut des agents et leur capacité disponible.",
      "Sur WhatsApp, les réponses libres ne sont autorisées que dans une fenêtre de service client de 24 heures ; ensuite, seuls des modèles (templates) peuvent être envoyés.",
      "Une enquête Gartner publiée en juillet 2025 a montré que seuls 22 % des clients commencent, poursuivent et résolvent leur problème entièrement sur les canaux propres d'une entreprise.",
    ],
    sections: [
      {
        heading: "Support omnicanal ou multicanal",
        blocks: [
          {
            type: "p",
            text: "Les deux modèles proposent plusieurs canaux. La différence tient au partage, ou non, du contexte entre ces canaux. Freshworks définit le support multicanal comme l'offre de plusieurs canaux indépendants, chacun fonctionnant de manière autonome, et note qu'il implique généralement des équipes dédiées à chaque canal. Les systèmes omnicanaux, au contraire, garantissent que tous les canaux sont interconnectés. Zendesk trace la même ligne : dans le support multicanal, les conversations ne passent pas d'un canal à l'autre, tandis que le support omnicanal relie les interactions en une conversation continue et donne aux agents une vue complète de l'historique du client.",
          },
          {
            type: "table",
            caption: "Support client multicanal ou omnicanal",
            head: ["Aspect", "Multicanal", "Omnicanal"],
            rows: [
              ["Canaux", "Plusieurs canaux, chacun avec son outil ou sa boîte de réception", "Plusieurs canaux qui alimentent un seul helpdesk"],
              ["Historique client", "Reste dans le canal où il s'est produit", "Un seul historique sur tous les canaux, visible par chaque agent"],
              ["Changement de canal", "Le client recommence et répète ses informations", "L'agent reprend là où la dernière interaction s'est arrêtée"],
              ["Organisation de l'équipe", "Souvent une équipe dédiée par canal", "Une file partagée, avec des agents qui travaillent sur plusieurs canaux"],
              ["Routage", "Par canal, souvent manuel", "Une seule configuration de routage basée sur le statut, la capacité et les compétences"],
              ["Reporting", "Des chiffres séparés par canal", "Un reporting par client et par problème, tous canaux confondus"],
            ],
          },
          {
            type: "p",
            text: "Ajouter un canal ne vous rend pas omnicanal. Si les messages WhatsApp arrivent dans une application séparée que vos agents e-mail ne voient pas, vous avez simplement un silo de plus. Et les clients passent bel et bien d'un canal à l'autre : une enquête Gartner menée auprès de 5 801 clients et publiée en juillet 2025 a montré que seuls 22 % commencent, poursuivent et résolvent leur problème entièrement sur les canaux propres d'une entreprise, et que 51 % des parcours de service commencent désormais sur des plateformes tierces comme Google, YouTube et ChatGPT.",
          },
        ],
      },
      {
        heading: "Un espace de travail agent unifié et un historique partagé",
        blocks: [
          {
            type: "p",
            text: "Le cœur du support omnicanal, c'est un endroit unique où les agents voient chaque conversation et y répondent. Dans le Zendesk Agent Workspace, les conversations de tickets peuvent inclure e-mail, chat et voix, et les agents peuvent aussi recevoir des messages sociaux et web et y répondre. L'exemple donné par Zendesk est un ticket qui a commencé en chat en direct et s'est poursuivi par e-mail, enregistré comme un seul fil de conversation. Le contexte client, dont l'historique des interactions, s'affiche à côté de la conversation, et les agents peuvent rechercher et citer des articles du centre d'aide depuis le même écran.",
          },
          {
            type: "p",
            text: "Quel que soit votre helpdesk, une configuration omnicanale fonctionnelle nécessite les mêmes capacités :",
          },
          {
            type: "ul",
            items: [
              "Une fiche client unique qui relie adresses e-mail, numéros de téléphone et identifiants de messagerie, pour qu'un message WhatsApp et un e-mail de la même personne aboutissent dans le même historique.",
              "L'historique de conversation de chaque canal sur le ticket, y compris la conversation avec le bot qui a précédé un transfert.",
              "La possibilité de répondre sur un autre canal quand le canal d'origine ne permet plus de réponse.",
              "Des tags, des champs et des macros partagés, pour que le reporting fonctionne de la même façon sur chaque canal.",
            ],
          },
          {
            type: "note",
            text: "La correspondance des identités est le point où beaucoup de configurations échouent. Si votre système téléphonique, votre numéro WhatsApp et votre boîte e-mail ne renvoient pas à la même fiche client, les agents voient toujours des fragments, simplement dans une seule fenêtre.",
          },
        ],
      },
      {
        heading: "Le routage omnicanal",
        blocks: [
          {
            type: "p",
            text: "Le routage décide quel agent reçoit quelle conversation. Le routage omnicanal de Zendesk envoie les tickets nouveaux et ouverts issus de l'e-mail, des appels et de la messagerie aux agents selon leur disponibilité et leur capacité. Au lieu de définir un statut par canal, les agents définissent un statut unifié pour l'e-mail, la voix et la messagerie. Pour la messagerie et les appels, l'agent doit être en ligne, et chaque agent doit disposer de capacité disponible, c'est-à-dire avoir moins de tickets ouverts attribués que son maximum pour ce canal.",
          },
          {
            type: "p",
            text: "Par défaut, un ticket va à l'agent qui a le plus de capacité disponible pour ce canal et, en cas d'égalité, à celui qui n'a pas reçu de ticket de ce canal depuis le plus longtemps. Vous pouvez passer au round robin à la place, et activer le focus mode pour qu'un agent ne reçoive pas en même temps des conversations de messagerie et des appels. Selon votre offre Zendesk, le routage peut aussi tenir compte du délai avant dépassement du SLA, de la priorité du ticket et des compétences des agents.",
          },
          {
            type: "p",
            text: "L'intérêt de router tous canaux confondus plutôt que canal par canal, c'est la capacité partagée : un agent en communication téléphonique ne devrait pas se voir proposer un nouveau chat, et un agent qui a peu d'e-mails ouverts peut prendre davantage de travail.",
          },
        ],
      },
      {
        heading: "Règles des canaux : fenêtres de messagerie sur WhatsApp et Messenger",
        blocks: [
          {
            type: "p",
            text: "L'omnicanal ne rend pas les canaux identiques. Les plateformes de messagerie fixent des règles sur le moment où une entreprise peut répondre, et vos workflows doivent les respecter.",
          },
          {
            type: "table",
            caption: "Fenêtres de messagerie sur WhatsApp et Facebook Messenger",
            head: ["Canal", "Fenêtre de réponse", "Après la fermeture de la fenêtre"],
            rows: [
              [
                "WhatsApp Business Platform",
                "Une fenêtre de service client de 24 heures s'ouvre quand le client vous envoie un message ou vous appelle, et se réinitialise à chaque nouveau message ou appel. Pendant cette fenêtre, vous pouvez envoyer des messages de service libres sans approbation préalable.",
                "Seuls des modèles de messages préapprouvés peuvent être envoyés. Les messages libres ne peuvent que répondre aux utilisateurs, pas engager une conversation.",
              ],
              [
                "Facebook Messenger",
                "La fenêtre de messagerie standard est de 24 heures à compter du dernier message de la personne.",
                "Avec le tag Human Agent, une personne peut répondre dans les 7 jours suivant le message du client. Votre app doit être approuvée pour utiliser ce tag, et les messages automatisés ne sont pas autorisés avec lui.",
              ],
            ],
          },
          {
            type: "p",
            text: "Ces règles façonnent votre workflow. Si un agent reprend une conversation WhatsApp plus de 24 heures après le dernier message du client, une réponse libre n'est pas possible : il vous faut un modèle approuvé, ou un passage à un autre canal comme l'e-mail. Les bots sont aussi concernés, car le tag Human Agent de Messenger est réservé aux réponses humaines. Consultez la documentation actuelle de Meta avant de concevoir vos processus autour de ces limites, car Meta met à jour ses politiques de messagerie et ses tarifs.",
          },
        ],
      },
      {
        heading: "Comment passer du multicanal à l'omnicanal",
        blocks: [
          {
            type: "ol",
            items: [
              "Listez tous les canaux que vos clients utilisent aujourd'hui et où chacun aboutit : quel outil, quelle équipe, quelle boîte de réception.",
              "Regroupez les canaux dans un seul helpdesk, via des intégrations natives quand elles existent et via des API ou des webhooks sinon.",
              "Décidez comment faire correspondre les identités d'un canal à l'autre, par exemple par adresse e-mail et numéro de téléphone, et comment fusionner les doublons.",
              "Mettez en place une seule configuration de routage avec une capacité par canal, au lieu de files séparées par équipe.",
              "Faites en sorte que les transferts du bot vers un humain emportent toute la conversation et les informations du client dans le ticket.",
              "Ajoutez des règles propres à chaque canal, comme les réponses par modèle sur WhatsApp après 24 heures et des objectifs SLA différents pour les canaux en direct et asynchrones.",
              "Établissez vos rapports par client et par problème, tous canaux confondus, et pas seulement par canal.",
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab connecte les canaux au helpdesk que vous utilisez déjà, comme Zendesk ou Freshdesk, avec des API, des webhooks et Make ou n8n. Un Standard Chat Bot (500–650 USD, paiement unique) couvre 3 à 5 canaux, comme votre site web, WhatsApp, Telegram, Facebook Messenger et Instagram, et Ticket Routing & Categorization (600–950 USD) trie les conversations entrantes dans la bonne file. Chaque projet comprend une documentation de base, 30 jours de support après le lancement et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines. Un appel d'audit gratuit de 30 minutes permet de cartographier vos canaux actuels avant toute construction.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre support omnicanal et multicanal ?",
        a: "Le support multicanal propose plusieurs canaux qui fonctionnent indépendamment : l'historique reste dans chaque canal. Le support omnicanal relie les canaux : les agents voient un seul historique client, et les clients peuvent changer de canal sans se répéter.",
      },
      {
        q: "Qu'est-ce que le routage omnicanal dans Zendesk ?",
        a: "Un système de routage qui attribue les tickets e-mail, messagerie et appels aux agents selon un statut d'agent unifié et la capacité disponible par canal. Par défaut, c'est l'agent qui a le plus de capacité disponible pour ce canal qui reçoit le ticket.",
      },
      {
        q: "Peut-on répondre à un client WhatsApp après 24 heures ?",
        a: "Pas avec un message libre. Une fois la fenêtre de service client de 24 heures fermée, seuls des modèles de messages préapprouvés peuvent être envoyés. Un nouveau message ou appel du client ouvre une nouvelle fenêtre.",
      },
      {
        q: "Pendant combien de temps un agent humain peut-il répondre sur Facebook Messenger ?",
        a: "La fenêtre de messagerie standard est de 24 heures. Avec le tag Human Agent, qui nécessite l'approbation de l'app, un agent humain peut répondre dans les 7 jours suivant le message du client. Le tag ne peut pas être utilisé pour des messages automatisés.",
      },
    ],
    sources: [
      {
        label: "Freshworks — Omnichannel vs Multichannel: Key Service Differences",
        url: "https://www.freshworks.com/explore-cx/omnichannel-vs-multichannel-support/",
      },
      {
        label: "Zendesk — What is omnichannel customer service?",
        url: "https://www.zendesk.com/blog/customer-service/support/omnichannel-really-means/",
      },
      {
        label: "Zendesk Help Center — About the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Messenger Platform Send API reference",
        url: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
      },
      {
        label: "Gartner — Survey Finds More Than Half of Customer Service Journeys Now Start on Third-Party Platforms (July 2025)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-23-gartner-survey-finds-more-than-half-of-customer-service-journeys-now-start-on-third-party-platforms",
      },
    ],
    related: ["whatsapp-customer-support-bot", "ticket-routing-automation", "zendesk-automation"],
    updated: "2026-10-19",
  },
];
