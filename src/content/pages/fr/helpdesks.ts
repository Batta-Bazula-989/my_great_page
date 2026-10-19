import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "automatisation-zendesk",
    category: "helpdesks",
    navLabel: "Automatisation Zendesk",
    primaryKeyword: "automatisation Zendesk",
    title: "Automatisation Zendesk : triggers, automatisations et macros",
    description:
      "L'automatisation Zendesk : déclencheurs, automatisations et macros, exécution horaire, ordre des déclencheurs, routage omnicanal, webhooks et API Zendesk.",
    h1: "Automatisation Zendesk : déclencheurs, automatisations, macros et routage",
    intro:
      "L'automatisation Zendesk repose sur trois outils de règles métier : les déclencheurs (triggers), qui s'exécutent immédiatement à la création ou à la mise à jour d'un ticket, les automatisations, qui tournent selon un cycle horaire, et les macros, que les agents appliquent manuellement. Le routage (omnicanal ou par compétences), les webhooks et l'API Zendesk couvrent ce que ces règles ne peuvent pas faire seules. Voici comment se comporte chaque élément et ce qui mérite d'être automatisé en premier.",
    keyFacts: [
      "Les déclencheurs de tickets s'exécutent immédiatement après la création ou la mise à jour d'un ticket, dans l'ordre de la liste.",
      "Les automatisations s'exécutent une fois par heure sur les tickets non clos, et chacune peut agir sur 1 000 tickets maximum par heure.",
      "Chaque automatisation doit avoir une condition vraie une seule fois, ou une action qui annule une condition, sans quoi elle continue de se déclencher.",
      "Les macros ne contiennent que des actions, sans conditions, et ne peuvent faire que ce que l'agent qui les applique est autorisé à faire.",
      "Un webhook se connecte soit aux événements Zendesk, soit aux déclencheurs et automatisations, mais pas aux deux.",
    ],
    sections: [
      {
        heading: "Déclencheurs, automatisations et macros : les différences",
        blocks: [
          {
            type: "p",
            text: "Les trois outils modifient les tickets, mais ils ne démarrent pas de la même façon. Selon Zendesk, ce qui distingue les déclencheurs des automatisations, ce ne sont pas les actions qu'ils peuvent effectuer, mais les conditions qui les mettent en route. Les macros n'ont aucune condition, car rien n'évalue le ticket automatiquement : c'est un agent qui décide quand en appliquer une.",
          },
          {
            type: "table",
            caption: "Les trois outils de règles métier de Zendesk",
            head: ["Outil", "Ce qui le lance", "Conditions", "Usage typique"],
            rows: [
              [
                "Déclencheur (trigger)",
                "Création ou mise à jour d'un ticket (exécution immédiate)",
                "Oui",
                "Router les nouveaux tickets, renseigner des champs, envoyer des notifications",
              ],
              [
                "Automatisation",
                "Cycle horaire, selon le temps écoulé",
                "Oui, généralement des conditions « Hours since »",
                "Rappels, escalade des tickets en souffrance, clôture des tickets résolus",
              ],
              [
                "Macro",
                "Un agent l'applique manuellement",
                "Non, uniquement des actions",
                "Réponses types et mises à jour répétitives de plusieurs champs",
              ],
            ],
          },
          {
            type: "p",
            text: "Les trois se combinent bien. Un schéma courant : une macro ajoute un tag, ce qui active aussitôt un déclencheur qui surveille ce tag. Notez qu'une macro ne peut faire que ce que l'utilisateur actuel est autorisé à faire : un agent aux droits limités ne pourra donc pas forcément appliquer toutes les modifications qu'elle contient.",
          },
        ],
      },
      {
        heading: "Comment fonctionne l'ordre des déclencheurs",
        blocks: [
          {
            type: "p",
            text: "À chaque création ou mise à jour d'un ticket, tous les déclencheurs de tickets s'exécutent sur celui-ci en un cycle, dans l'ordre de la liste. Si un déclencheur met à jour le ticket, le cycle recommence et tous les déclencheurs s'exécutent de nouveau, sauf ceux qui se sont déjà déclenchés et ont mis à jour le ticket. La modification apportée par un déclencheur peut donc rendre vraies les conditions d'un autre, même si elles ne l'étaient pas un instant plus tôt.",
          },
          {
            type: "p",
            text: "L'ordre recommandé par Zendesk pour les déclencheurs de tickets :",
          },
          {
            type: "ol",
            items: [
              "Les déclencheurs qui modifient les valeurs du ticket, comme le statut, la priorité ou d'autres champs.",
              "Les déclencheurs qui attribuent le ticket.",
              "Les déclencheurs de notification, en dernier, pour que les e-mails et les messages reflètent l'état final du ticket.",
            ],
          },
          {
            type: "p",
            text: "Si vous utilisez des catégories de déclencheurs, l'ordre des catégories doit correspondre à l'ordre d'exécution souhaité ; vous le modifiez avec « Edit order » dans la liste des déclencheurs. Utilisez la condition « Ticket | Is | Created » pour les règles qui ne doivent agir que sur les nouveaux tickets (le routage en est l'exemple type), et « Ticket | Is | Updated » pour des cas comme les notifications de mise à jour. Les déclencheurs de tickets ne s'exécutent pas sur les tickets clos.",
          },
        ],
      },
      {
        heading: "À quelle fréquence s'exécutent les automatisations Zendesk, et comment éviter les boucles",
        blocks: [
          {
            type: "p",
            text: "Les automatisations s'exécutent une fois par heure sur tous les tickets non clos. Le moment est approximatif : une automatisation démarre à un instant quelconque de l'heure, pas à une minute fixe. Chaque automatisation peut agir sur 1 000 tickets maximum par heure, et le surplus attend les exécutions suivantes.",
          },
          {
            type: "p",
            text: "Comme les automatisations revérifient les mêmes tickets toutes les heures, Zendesk impose que chacune comporte une condition vraie une seule fois ou une action qui annule au moins une condition. Sans cela, les conditions continuent de correspondre et l'automatisation se déclenche en boucle sans fin. L'automatisation standard « close ticket after solved » le fait naturellement : clore le ticket le fait sortir de la condition « Status is Solved ». Pour les automatisations personnalisées, la solution habituelle consiste à ajouter un tag et à exclure ce tag dans les conditions.",
          },
          {
            type: "note",
            text: "Pour les conditions de temps, Zendesk recommande « Hours since ... greater than » plutôt que « Hours since ... is ». Une condition « is » peut être totalement manquée si l'automatisation ne s'exécute pas pendant cette heure précise. Une condition « greater than » a malgré tout besoin d'une action ou d'un tag d'annulation.",
          },
        ],
      },
      {
        heading: "Options de routage des tickets entrants",
        blocks: [
          {
            type: "p",
            text: "Les déclencheurs peuvent router les tickets en définissant un groupe, un assigné ou des compétences, mais Zendesk propose aussi des fonctions de routage dédiées :",
          },
          {
            type: "ul",
            items: [
              "Le routage omnicanal envoie les tickets issus de l'e-mail, des appels et de la messagerie aux agents selon leur disponibilité et leur capacité, et peut aussi tenir compte de la priorité et des compétences.",
              "Des compétences peuvent être ajoutées aux tickets par des déclencheurs et marquées comme requises ou facultatives. Les compétences requises limitent les agents éligibles ; les compétences facultatives peuvent expirer, et le ticket revient alors au modèle de routage normal.",
              "Le routage autonome par compétences fonctionne en mode « pull » : les tickets sont triés par compétence et les agents prennent leur travail dans des vues basées sur les compétences. Il ne peut pas être utilisé pour les tickets vocaux ou de messagerie.",
            ],
          },
          {
            type: "p",
            text: "Pour les appels, le routage omnicanal est le seul moyen pour les déclencheurs d'influencer le routage, car un ticket est créé dès qu'un appel entre dans la file d'attente. Les fonctions de routage varient selon l'offre : vérifiez ce que comprend la vôtre avant de concevoir votre organisation autour des compétences.",
          },
        ],
      },
      {
        heading: "Webhooks et API Zendesk",
        blocks: [
          {
            type: "p",
            text: "Quand une règle doit transmettre une information à un autre système, utilisez un webhook. Vous le créez dans l'Admin Center et choisissez son type de connexion : événements Zendesk, ou déclencheur ou automatisation. Un webhook ne peut utiliser que l'un des deux, et la méthode de connexion ne peut pas être modifiée par la suite. Dans un déclencheur ou une automatisation, ajoutez l'action « Notify webhook », sélectionnez le webhook et saisissez la charge utile (payload). Le corps des requêtes peut être en JSON, en XML ou encodé comme un formulaire, et la charge utile ne peut pas dépasser 16 000 caractères. Chaque webhook dispose d'une option « Test webhook » pour vérifier la requête avant la mise en production.",
          },
          {
            type: "p",
            text: "Quand la logique doit lire des données, prendre des décisions dans du code ou écrire dans les tickets, utilisez la Ticketing API. Les tickets se créent par un POST sur l'endpoint tickets et se mettent à jour par un PUT sur l'URL propre au ticket, avec des variantes en masse pour traiter de nombreux tickets à la fois. Les requêtes peuvent s'authentifier avec un jeton d'accès OAuth envoyé dans un en-tête Bearer.",
          },
          {
            type: "p",
            text: "Bons premiers candidats à l'automatisation Zendesk :",
          },
          {
            type: "ul",
            items: [
              "Router les nouveaux tickets vers le bon groupe selon le canal, le formulaire, la langue ou des mots-clés.",
              "Relances et escalades pour les tickets qui attendent une réponse depuis trop longtemps.",
              "Publier les tickets prioritaires ou VIP dans un canal Slack via un webhook.",
              "Récupérer les données de commande ou de compte dans un ticket via l'API avant qu'un agent ne l'ouvre.",
            ],
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab travaille sur votre compte Zendesk existant, sans changement de plateforme, en s'appuyant sur l'API Zendesk, les webhooks et Make ou n8n lorsque c'est pertinent. Ticket Routing & Categorization est un projet ponctuel à {{price:routing}} ; Custom Automation, pour les flux qui couvrent plusieurs systèmes, coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement, une documentation de base et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "À quelle fréquence les automatisations Zendesk s'exécutent-elles ?",
        a: "Une fois par heure, sur tous les tickets non clos. La minute exacte dans l'heure varie, et chaque automatisation peut agir sur 1 000 tickets maximum par heure.",
      },
      {
        q: "Quelle est la différence entre un déclencheur et une automatisation Zendesk ?",
        a: "Les déclencheurs reposent sur des événements et s'exécutent immédiatement à la création ou à la mise à jour d'un ticket. Les automatisations reposent sur le temps et s'exécutent toutes les heures. Les deux peuvent effectuer les mêmes types d'actions.",
      },
      {
        q: "Pourquoi mon automatisation Zendesk se déclenche-t-elle sans cesse sur le même ticket ?",
        a: "Il lui manque probablement une condition ou une action d'annulation. Ajoutez une action qui rend fausse l'une de ses conditions, par exemple un tag que les conditions excluent.",
      },
      {
        q: "Un déclencheur Zendesk peut-il appeler un système externe ?",
        a: "Oui. Créez un webhook connecté aux déclencheurs et automatisations, puis ajoutez au déclencheur l'action « Notify webhook » avec la charge utile à envoyer.",
      },
      {
        q: "Les catégories de déclencheurs changent-elles l'ordre d'exécution ?",
        a: "Oui. Les déclencheurs s'exécutent dans l'ordre de la liste, et l'ordre des catégories doit correspondre à l'ordre d'exécution souhaité. Vous le modifiez avec « Edit order » dans la liste des déclencheurs de tickets.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    key: "freshdesk-automation",
    slug: "automatisation-freshdesk",
    category: "helpdesks",
    navLabel: "Automatisation Freshdesk",
    primaryKeyword: "automatisation Freshdesk",
    title: "Automatisation Freshdesk : règles, attribution et webhooks",
    description:
      "L'automatisation Freshdesk : règles Ticket Creation, Ticket Updates et Hourly Triggers, attribution round-robin et par compétences, webhooks et API.",
    h1: "Automatisation Freshdesk : types de règles, attribution et webhooks",
    intro:
      "L'automatisation Freshdesk repose sur trois types de règles : les règles Ticket Creation pour les nouveaux tickets, les règles Ticket Updates pour les événements sur des tickets existants, et les Hourly Triggers pour les vérifications basées sur le temps. L'attribution (round-robin, selon la charge ou par compétences) décide qui reçoit le ticket, et les actions webhook ainsi que l'API Freshdesk relient l'ensemble à d'autres systèmes.",
    keyFacts: [
      "Freshdesk propose trois types de règles d'automatisation : Ticket Creation, Ticket Updates et Hourly Triggers.",
      "Les Hourly Triggers (anciennement Time Triggers) s'exécutent toutes les heures, en heures calendaires, et uniquement sur les tickets mis à jour au cours des 30 derniers jours.",
      "Les règles Ticket Creation peuvent exécuter soit la première règle correspondante, soit toutes les règles correspondantes.",
      "Freshdesk exécute jusqu'à 1 000 appels webhook par heure depuis les règles d'automatisation ; les appels excédentaires sont mis en mémoire tampon.",
      "L'attribution selon la charge ne compte dans la charge d'un agent que les tickets dont le minuteur SLA est actif.",
    ],
    sections: [
      {
        heading: "Les trois types de règles d'automatisation Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Si vous utilisez Freshdesk depuis un moment, vous les connaissez peut-être sous leurs anciens noms. Freshdesk les appelait Dispatch'r, Observer et Supervisor, puis les a réunis dans un module Automations unique, avec un onglet distinct pour chaque type de règle.",
          },
          {
            type: "table",
            caption: "Types de règles d'automatisation Freshdesk",
            head: ["Type de règle", "Ancien nom", "Quand elle s'exécute", "Idéale pour"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Une fois, à la création d'un nouveau ticket",
                "Catégoriser, prioriser et router les tickets entrants",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Quand un événement défini se produit sur un ticket existant",
                "Réagir aux réponses, aux notes, aux changements de statut ou de champ",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Toutes les heures, selon un planning",
                "Relances, escalades, clôture automatique des tickets inactifs",
              ],
            ],
          },
          {
            type: "p",
            text: "Les règles Ticket Creation comparent chaque nouveau ticket à vos conditions et exécutent les actions en cas de correspondance. Vous choisissez si Freshdesk exécute uniquement la première règle correspondante ou toutes les règles correspondantes. En mode première correspondance, c'est l'ordre de la liste qui détermine la règle retenue : placez donc les règles spécifiques au-dessus des règles génériques.",
          },
        ],
      },
      {
        heading: "Règles Ticket Updates : événements, conditions, actions",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates est le seul type de règle dans lequel vous configurez des événements. Une règle nécessite au moins un événement et se déclenche dès que l'un d'eux correspond. Vous définissez aussi qui a effectué l'action : un agent, le demandeur, l'un ou l'autre, un collaborateur, ou le système lui-même (System).",
          },
          {
            type: "ul",
            items: [
              "Événements : modification d'une propriété du ticket, mise à jour de l'agent ou du groupe, ajout d'une note, envoi d'une réponse, réception d'un retour client ; les événements système incluent l'échec de distribution d'un e-mail et le passage d'un ticket en retard.",
              "Conditions : propriétés du ticket (y compris les tags et les champs personnalisés), coordonnées du demandeur et champs de l'entreprise.",
              "Actions : renseigner des champs, réattribuer l'agent ou le groupe, ajouter des tags ou des observateurs, ajouter une note, envoyer un e-mail à un agent, à un groupe ou au demandeur, marquer comme spam ou supprimer, ou déclencher un webhook.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates est aussi le seul type de règle capable de créer un nouveau ticket ou d'ajouter un message à un fil. La liste exacte des événements dépend de votre offre et des fonctionnalités que vous avez activées.",
          },
        ],
      },
      {
        heading: "Hourly Triggers : les règles basées sur le temps",
        blocks: [
          {
            type: "p",
            text: "Les Hourly Triggers n'attendent pas d'événement. Ils parcourent les tickets toutes les heures et agissent sur ceux qui correspondent. Ce rythme détermine la façon de les rédiger :",
          },
          {
            type: "ul",
            items: [
              "Le délai que vous définissez doit être d'au moins une heure, puisque la règle ne s'exécute que toutes les heures.",
              "Ils comptent en heures calendaires, pas en heures ouvrées.",
              "Ils ne traitent que les tickets mis à jour au cours des 30 derniers jours.",
              "Ils ne portent que sur les propriétés du ticket, pas sur celles du contact ou de l'entreprise.",
            ],
          },
          {
            type: "note",
            text: "Une règle basée sur le temps mal définie s'exécutera chaque heure consécutive sur le même ticket. Une solution courante consiste à associer une condition de temps « greater than » à une condition « less than », pour que le ticket ne corresponde qu'une seule fois.",
          },
        ],
      },
      {
        heading: "Attribution automatique des tickets",
        blocks: [
          {
            type: "p",
            text: "Les règles d'automatisation définissent généralement le groupe ; l'attribution décide quel agent de ce groupe reçoit le ticket. L'attribution automatique de Freshdesk s'appuie sur son moteur Omniroute et propose trois méthodes par groupe :",
          },
          {
            type: "ul",
            items: [
              "Round-robin : fait tourner les tickets entre les agents disponibles du groupe, en ignorant ceux qui ont atteint leur capacité maximale et en confiant le ticket à l'agent éligible qui en a reçu un il y a le plus longtemps.",
              "Selon la charge (load-balanced) : envoie chaque nouveau ticket à l'agent le moins chargé, jusqu'à ce que chaque agent atteigne le maximum configuré. Seuls les tickets dont le minuteur SLA est actif comptent dans la charge : résoudre un ticket ou le passer dans un statut où le SLA est désactivé libère donc de la capacité.",
              "Par compétences (skill-based) : les agents ont des compétences classées par priorité, et un nouveau ticket va à un agent qui possède la première compétence correspondante. Freshdesk recommande une compétence de repli, avec le groupe comme condition, affectée en dernier à tous les agents, pour qu'aucun ticket ne reste non attribué.",
            ],
          },
          {
            type: "p",
            text: "Les méthodes disponibles dépendent de votre offre : vérifiez les paramètres de votre groupe avant d'en choisir une. Les tickets attribués manuellement comptent tout de même dans la charge et peuvent faire dépasser sa limite à un agent, ce qui suspend l'attribution automatique vers lui jusqu'à ce que son nombre de tickets baisse.",
          },
        ],
      },
      {
        heading: "Webhooks et API Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Dans Freshdesk, un webhook est une action d'automatisation qui effectue un appel d'API vers un autre système. Vous choisissez le type de requête et l'URL de rappel (callback), et l'URL comme la charge utile peuvent contenir des placeholders tels que {{ticket.id}}. Si vous effectuez un appel GET via un webhook, la règle ne peut pas utiliser la réponse ; pour cela, Freshdesk renvoie vers son action Trigger API.",
          },
          {
            type: "p",
            text: "Freshdesk exécute jusqu'à 1 000 appels webhook par heure depuis les règles d'automatisation. Au-delà, les appels sont mis en mémoire tampon jusqu'à ce qu'une nouvelle capacité se libère l'heure suivante : les flux à fort volume ne doivent donc pas compter sur une livraison instantanée.",
          },
          {
            type: "p",
            text: "Pour les intégrations qui tournent en dehors de Freshdesk, utilisez l'API REST à l'adresse your-domain.freshdesk.com/api/v2/. Les requêtes s'authentifient avec votre clé API comme nom d'utilisateur et n'importe quelle valeur factice comme mot de passe. Les limites de débit s'appliquent par compte et par minute et dépendent de votre offre ; une réponse 429 signifie que la limite est atteinte, et l'en-tête Retry-After indique combien de secondes attendre. La liste des tickets ne renvoie par défaut que les 30 derniers jours : utilisez le filtre updated_since pour les tickets plus anciens.",
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit sur votre compte Freshdesk existant, sans changement de plateforme, avec les règles d'automatisation, les webhooks, l'API Freshdesk et Make ou n8n lorsqu'ils sont utiles. Ticket Routing & Categorization est un projet ponctuel à {{price:routing}} ; Custom Automation coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. La première étape est un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quels sont les types de règles d'automatisation dans Freshdesk ?",
        a: "Les règles Ticket Creation s'exécutent sur les nouveaux tickets, les règles Ticket Updates quand un événement se produit sur un ticket existant, et les Hourly Triggers selon un planning, toutes les heures.",
      },
      {
        q: "Que sont devenus Dispatch'r, Observer et Supervisor ?",
        a: "Ce sont les anciens noms des mêmes types de règles : Dispatch'r pour la création de tickets, Observer pour les mises à jour de tickets et Supervisor pour les règles basées sur le temps. Freshdesk les a réunis dans un seul module Automations.",
      },
      {
        q: "Les Hourly Triggers de Freshdesk utilisent-ils les heures ouvrées ?",
        a: "Non. Ils fonctionnent en heures calendaires, et uniquement sur les tickets mis à jour au cours des 30 derniers jours.",
      },
      {
        q: "Combien de webhooks les automatisations Freshdesk peuvent-elles envoyer ?",
        a: "Freshdesk exécute jusqu'à 1 000 appels webhook par heure depuis les règles d'automatisation. Les appels au-delà de la limite sont mis en mémoire tampon jusqu'à ce que de la capacité se libère.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "automatisation-jira-service-management",
    category: "helpdesks",
    navLabel: "Automatisation Jira Service Mgmt",
    primaryKeyword: "automatisation Jira Service Management",
    title: "Automatisation Jira Service Management : flux, SLA, webhooks",
    description:
      "Automatisation Jira Service Management : déclencheurs, conditions, actions, déclencheurs SLA et d'approbation, smart values, webhooks, files, types de demande.",
    h1: "Automatisation Jira Service Management : fonctionnement des flux, des SLA et des webhooks",
    intro:
      "L'automatisation de Jira Service Management repose sur des flux (anciennement appelés règles) en trois parties : un déclencheur qui les lance, des conditions facultatives qui filtrent les éléments de travail concernés, et des actions qui effectuent le travail. Les déclencheurs propres au service, comme les dépassements de SLA et les approbations, ainsi que les smart values et les requêtes web, vous permettent d'automatiser l'essentiel du tri, de l'escalade et des notifications autour de vos files d'attente.",
    keyFacts: [
      "Chaque flux d'automatisation se compose d'un déclencheur, de conditions facultatives et d'une ou plusieurs actions, exécutés de haut en bas.",
      "Jira Service Management ajoute des déclencheurs comme « SLA threshold breached » et « Approval required ».",
      "L'action « Send web request » appelle des systèmes externes ; un déclencheur de webhook entrant permet à des systèmes externes de lancer un flux.",
      "Les smart values comme {{issue.key}} insèrent les données de l'élément de travail dans les champs, les commentaires et les messages.",
      "Chaque SLA a ses propres conditions de démarrage, de pause et d'arrêt ; la pause est facultative.",
    ],
    sections: [
      {
        heading: "Déclencheurs, conditions et actions",
        blocks: [
          {
            type: "p",
            text: "La documentation d'Atlassian appelle désormais les règles d'automatisation des « flows » (flux) ; vous rencontrerez les deux termes, qui désignent la même chose. Vous pouvez créer un flux de zéro, à partir d'un modèle ou avec Rovo, et une fois qu'il est activé, ses étapes s'exécutent dans l'ordre, de haut en bas.",
          },
          {
            type: "table",
            caption: "Les trois parties d'un flux d'automatisation Jira Service Management",
            head: ["Partie", "Rôle", "Exemples"],
            rows: [
              [
                "Déclencheur",
                "Lance le flux quand quelque chose se produit",
                "Élément de travail créé, élément de travail en transition, commentaire ajouté, seuil de SLA dépassé, approbation requise, planification, webhook entrant",
              ],
              [
                "Condition (facultative)",
                "Limite les éléments de travail sur lesquels le flux agit",
                "L'élément de travail correspond à un filtre JQL, commentaire interne ou public, type d'utilisateur",
              ],
              [
                "Action",
                "Effectue le travail",
                "Transition, modification de champ, ajout de commentaire, envoi d'e-mail, envoi de requête web, envoi de message Slack ou Microsoft Teams",
              ],
            ],
          },
          {
            type: "p",
            text: "Deux déclencheurs sont propres au travail de service. « SLA threshold breached » vous permet de choisir un SLA et de lancer le flux soit quand il est dépassé, soit quand il est sur le point de l'être. « Approval required » se déclenche quand un élément de travail nécessitant une approbation est créé ou mis à jour, ou quand de nouveaux approbateurs sont ajoutés. Un déclencheur planifié exécute un flux selon une minuterie, ce qui est utile pour des vérifications périodiques, comme lister les éléments de travail proches du dépassement.",
          },
        ],
      },
      {
        heading: "Files d'attente, types de demande et SLA : le cadre de l'automatisation",
        blocks: [
          {
            type: "p",
            text: "Dans Jira Service Management, l'automatisation sert surtout à tenir à jour trois structures :",
          },
          {
            type: "ul",
            items: [
              "Les files d'attente sont des ensembles filtrés d'éléments de travail qui donnent aux agents une vue ciblée de leur travail. Elles filtrent sur des champs comme le statut, le type de travail, l'assigné et la priorité, ou en JQL. Les agents ne peuvent ni créer ni modifier de files ; ce sont les administrateurs d'espace qui s'en chargent.",
              "Les types de demande sont les formulaires que les clients utilisent pour soumettre des demandes sur le portail. Chaque type de demande est lié à exactement un type de travail : le type de demande gère le nom et les paramètres du portail, tandis que le type de travail contient le workflow et les champs. Un même type de travail peut servir de base à plusieurs types de demande.",
              "Les SLA mesurent le temps par rapport à des objectifs. Chaque SLA a ses propres conditions de démarrage, de pause et d'arrêt ; la pause est facultative et sert généralement pendant l'attente d'une réponse du client, et la mesure s'arrête dès qu'une condition d'arrêt est remplie.",
            ],
          },
          {
            type: "p",
            text: "En pratique, les flux renseignent les champs sur lesquels filtrent les files d'attente et les objectifs de SLA. Si un flux définit la priorité ou un champ personnalisé en fonction du type de demande ou du contenu du message, la bonne file et le bon objectif de SLA prennent automatiquement en charge l'élément de travail.",
          },
        ],
      },
      {
        heading: "Smart values",
        blocks: [
          {
            type: "p",
            text: "Les smart values permettent à un flux d'insérer des données de l'élément de travail dans des champs, des commentaires, des e-mails et des corps de requêtes web. {{issue.key}} renvoie la clé, par exemple PROJ-123. Les autres champs suivent le même modèle avec le nom du champ, y compris les champs personnalisés ; si deux champs portent le même nom, utilisez plutôt l'ID du champ personnalisé.",
          },
          {
            type: "p",
            text: "L'interface d'Atlassian dit désormais « work item » là où elle disait « issue », mais la syntaxe des smart values dans sa documentation utilise toujours le préfixe issue. Les champs à valeurs multiples peuvent être parcourus en boucle avec la syntaxe #, fermée par {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks et systèmes externes",
        blocks: [
          {
            type: "p",
            text: "Les webhooks fonctionnent dans les deux sens :",
          },
          {
            type: "ul",
            items: [
              "Sortant : l'action « Send web request » appelle l'API d'un autre système quand un flux s'exécute, et peut renvoyer les données de réponse aux étapes suivantes. Votre système récepteur doit accepter les requêtes provenant du réseau d'Atlassian.",
              "Entrant : le déclencheur de webhook entrant donne à un flux sa propre URL, pour qu'un système externe (un chatbot, un outil de facturation, un outil de supervision) puisse lancer le flux par une requête HTTP.",
              "Outils de chat : les actions « Send Slack message » et « Send Microsoft Teams message » publient dans des canaux, avec des smart values dans le texte du message.",
            ],
          },
        ],
      },
      {
        heading: "Limites d'utilisation et premières automatisations",
        blocks: [
          {
            type: "p",
            text: "En date d'octobre 2026, Jira Cloud mesure l'utilisation de l'automatisation par produit et par mois, avec des limites qui dépendent de votre offre. Atlassian publie la méthode de décompte sur sa page « How is your automation usage calculated » ; consultez-la, ainsi que votre consommation actuelle, avant d'ajouter des flux planifiés à haute fréquence.",
          },
          {
            type: "p",
            text: "Premiers flux courants pour un centre de services :",
          },
          {
            type: "ul",
            items: [
              "Définir la priorité, le composant ou l'assigné à la création, selon le type de demande et le contenu de la demande.",
              "Publier dans un canal d'escalade quand un SLA est sur le point d'être dépassé.",
              "Relancer le client quand une demande attend sa réponse, puis la résoudre avec un commentaire après un délai défini.",
              "Envoyer les nouvelles demandes prioritaires vers un système externe via « Send web request ».",
            ],
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab travaille sur votre site Jira Service Management existant, sans changement de plateforme, en combinant l'automatisation native avec des API, des webhooks et Make ou n8n lorsqu'un flux doit atteindre d'autres outils. Ticket Routing & Categorization coûte {{price:routing}} en paiement unique ; Custom Automation coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. Commencez par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Les règles et les flux d'automatisation Jira sont-ils la même chose ?",
        a: "Oui. La documentation et l'interface récentes d'Atlassian utilisent « flow » pour ce qu'on appelait une règle d'automatisation. La structure est identique : déclencheur, conditions et actions.",
      },
      {
        q: "L'automatisation Jira Service Management peut-elle réagir aux dépassements de SLA ?",
        a: "Oui. Le déclencheur « SLA threshold breached » vous permet de choisir un SLA et de lancer le flux soit quand il est dépassé, soit quand il est sur le point de l'être.",
      },
      {
        q: "Comment envoyer des données de Jira Service Management vers un autre système ?",
        a: "Utilisez l'action « Send web request » dans un flux. Elle appelle l'API de l'autre système quand le flux s'exécute et peut renvoyer les données de réponse aux étapes suivantes.",
      },
      {
        q: "Quelle est la différence entre un type de demande et un type de travail ?",
        a: "Un type de demande est le formulaire présenté au client sur le portail ; le type de travail qui se trouve derrière contient le workflow et les champs. Chaque type de demande utilise un type de travail, et un type de travail peut servir à plusieurs types de demande.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "slack-support-automation",
    slug: "automatisation-support-client-slack",
    category: "helpdesks",
    navLabel: "Automatisation du support Slack",
    primaryKeyword: "automatisation du support client Slack",
    title: "Automatisation du support client Slack : alertes, escalades",
    description:
      "Automatiser le support client sur Slack : alertes d'escalade, Workflow Builder, webhooks entrants, Bolt, intégrations Zendesk, Freshdesk et Jira, Slack Connect.",
    h1: "Automatisation du support client sur Slack : alertes, escalades et canaux clients",
    intro:
      "Pour la plupart des équipes support, Slack n'est pas l'endroit où les clients écrivent. C'est là que l'équipe escalade, reçoit des alertes et se coordonne. Automatiser le support client sur Slack, c'est faire arriver les bons événements de tickets dans le bon canal, transformer des messages Slack en tickets quand c'est nécessaire et, pour les équipes B2B, servir directement les clients dans des canaux Slack Connect.",
    keyFacts: [
      "Les workflows de Workflow Builder peuvent démarrer à partir d'un lien, d'un webhook, d'un planning, d'un message publié, d'une réaction emoji ou de l'arrivée dans un canal.",
      "Un webhook entrant est une URL unique liée à un seul canal ; vous y envoyez une charge utile JSON en POST pour publier un message.",
      "Slack autorise généralement les applications à publier au maximum un message par seconde et par canal.",
      "Zendesk, Freshdesk et Jira Service Management proposent chacun une intégration Slack pour créer des tickets et envoyer des notifications.",
      "Slack Connect permet à des personnes d'autres organisations de travailler avec vous dans un canal partagé.",
    ],
    sections: [
      {
        heading: "Les moyens d'automatiser le travail de support dans Slack",
        blocks: [
          {
            type: "p",
            text: "Il existe quatre briques principales, du no-code au code sur mesure. Choisissez la plus simple qui fait l'affaire.",
          },
          {
            type: "table",
            caption: "Options d'automatisation Slack pour les équipes support",
            head: ["Option", "De quoi il s'agit", "Idéale pour"],
            rows: [
              [
                "Intégration helpdesk",
                "L'app Slack de Zendesk, Freshdesk ou Jira Service Management",
                "Notifications de tickets dans les canaux et création de tickets à partir de messages",
              ],
              [
                "Workflow Builder",
                "L'outil de workflows no-code intégré à Slack",
                "Formulaires de demande, checklists d'escalade, rappels planifiés",
              ],
              [
                "Webhook entrant",
                "Une URL qui publie un message JSON dans un seul canal",
                "Alertes à sens unique depuis votre helpdesk, des scripts ou Make/n8n",
              ],
              [
                "App Slack sur mesure (Bolt)",
                "Votre propre app, à l'écoute des événements et des commandes",
                "Actions bidirectionnelles : boutons, commandes slash, recherches dans d'autres systèmes",
              ],
            ],
          },
        ],
      },
      {
        heading: "Intégrations helpdesk vers Slack",
        blocks: [
          {
            type: "p",
            text: "Commencez par ce que votre helpdesk propose déjà :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : les agents peuvent créer des tickets avec le raccourci /zendesk, une action de message qui convertit un message Slack en ticket, l'app Zendesk dans la barre latérale ou une mention @zendesk dans un canal Slack Connect. Les tickets créés ainsi reçoivent le tag created_from_slack. Les administrateurs utilisent des déclencheurs pour décider quels événements sont publiés dans quels canaux, et l'app Zendesk doit être invitée dans chaque canal qui reçoit des notifications.",
              "Freshdesk : l'app Slack peut transformer un message de canal en ticket, avec le message comme description, et des tickets peuvent aussi être créés de zéro dans Slack. Les membres Slack qui ne sont pas agents Freshdesk peuvent eux aussi créer des tickets.",
              "Jira Service Management : le chat dans Slack relie les canaux de demande, où les gens demandent de l'aide, à un canal d'agents. Les agents peuvent créer un élément de travail en réagissant à un message avec l'emoji :ticket:, et les types de demande doivent être connectés à un canal de demande pour y être disponibles.",
            ],
          },
          {
            type: "p",
            text: "Si l'intégration native ne couvre pas un événement qui vous importe, rabattez-vous sur un webhook entrant ou sur Workflow Builder, décrits ci-dessous.",
          },
        ],
      },
      {
        heading: "Workflow Builder pour l'escalade interne",
        blocks: [
          {
            type: "p",
            text: "Workflow Builder permet à n'importe qui de créer des workflows en plusieurs étapes sans code. Un workflow démarre à partir d'un déclencheur : un lien partageable, un webhook, un planning, la mise à jour d'un élément de liste, un message publié dans un canal, l'arrivée de quelqu'un dans un canal ou une réaction emoji. Les étapes s'exécutent dans l'ordre que vous définissez et peuvent être des actions Slack, comme l'envoi d'un message, des étapes de connecteur pour des services tiers ou des étapes personnalisées créées par des développeurs. Les variables transmettent les données des étapes précédentes aux suivantes, les boutons mettent un workflow en pause jusqu'à ce que quelqu'un clique, et les branches orientent les personnes vers différents chemins selon des conditions.",
          },
          {
            type: "p",
            text: "Usages typiques en support : un formulaire d'escalade lancé par un lien, qui recueille l'URL du ticket et la gravité puis publie un message structuré dans un canal d'escalade ; un workflow déclenché par une réaction emoji qui fait intervenir le responsable d'astreinte ; ou un rappel hebdomadaire planifié pour passer en revue les tickets en souffrance.",
          },
        ],
      },
      {
        heading: "Webhooks entrants et apps Bolt",
        blocks: [
          {
            type: "p",
            text: "Un webhook entrant est le moyen le plus simple d'envoyer des alertes de n'importe quel système vers Slack. Chaque URL de webhook est liée à un seul canal ; vous envoyez un HTTP POST avec un corps JSON contenant un champ text et, éventuellement, des blocs Block Kit pour des mises en page plus riches. Toute personne qui dispose de l'URL peut publier dans votre espace de travail : traitez-la comme un mot de passe et tenez-la à l'écart de tout code public.",
          },
          {
            type: "p",
            text: "Attention au volume. Selon les limites de débit de Slack, les applications ne doivent généralement pas publier plus d'un message par seconde et par canal, que ce soit via chat.postMessage ou via un webhook entrant. Les pics courts sont tolérés, mais les dépassements prolongés reçoivent des réponses HTTP 429 avec un en-tête Retry-After. Pour les files chargées, regroupez les alertes ou envoyez un récapitulatif plutôt qu'un message par ticket.",
          },
          {
            type: "p",
            text: "Quand vous avez besoin d'interactions bidirectionnelles, comme un bouton qui attribue un ticket ou une commande slash qui retrouve une commande client, créez une app Slack avec Bolt, le framework de Slack pour JavaScript, Python et Java. Une app Bolt écoute les événements et les commandes slash de votre espace de travail et y répond, par exemple en appelant l'API de votre helpdesk.",
          },
        ],
      },
      {
        heading: "Slack Connect pour les canaux clients",
        blocks: [
          {
            type: "p",
            text: "Slack Connect vous permet de partager un canal avec des personnes d'autres organisations, chacune travaillant depuis son propre Slack. Les équipes support B2B l'utilisent comme canal dédié pour chaque client clé. Vous invitez une organisation externe depuis les paramètres du canal et choisissez un niveau d'autorisation : publication uniquement, ou publication, invitation et plus. Les administrateurs peuvent restreindre qui a le droit d'inviter des personnes externes. Un canal Slack Connect peut réunir jusqu'à 250 organisations, la vôtre comprise.",
          },
          {
            type: "p",
            text: "Les canaux clients ont tout de même besoin d'un suivi des tickets. L'intégration Zendesk prend en charge les mentions @zendesk dans les canaux Slack Connect, avec moins d'options pour les utilisateurs externes ; pour les autres helpdesks, une petite app Bolt ou un flux Make/n8n peut transformer les messages tagués en tickets.",
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab connecte Slack au helpdesk que vous utilisez déjà (Zendesk, Freshdesk, Jira ou outils internes) via des API, des webhooks et Make ou n8n, sans changement de plateforme. Automated Reports, livrés dans Slack ou par e-mail, coûte {{price:reports}} en paiement unique ; Custom Automation, pour des flux Slack bidirectionnels, coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. Commencez par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Peut-on créer des tickets helpdesk à partir de messages Slack ?",
        a: "Oui. Zendesk et Freshdesk proposent tous deux des apps Slack qui convertissent un message en ticket, et les agents Jira Service Management peuvent créer un élément de travail à partir d'un message d'un canal de demande en réagissant avec l'emoji :ticket:.",
      },
      {
        q: "Quel est le moyen le plus simple d'envoyer des alertes support vers Slack ?",
        a: "Utilisez l'intégration Slack de votre helpdesk si elle couvre l'événement voulu. Sinon, envoyez une charge utile JSON en POST à un webhook entrant Slack, depuis l'action webhook de votre helpdesk ou depuis Make ou n8n.",
      },
      {
        q: "Un workflow Slack peut-il être lancé par un système externe ?",
        a: "Oui. Workflow Builder prend en charge un déclencheur webhook : un système externe peut donc lancer un workflow en lui envoyant une requête HTTP.",
      },
      {
        q: "Le nombre de messages publiés dans un canal est-il limité ?",
        a: "Slack autorise généralement les applications à publier au maximum un message par seconde et par canal. Les pics courts sont tolérés, mais les dépassements prolongés renvoient des erreurs HTTP 429.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    key: "intercom-automation",
    slug: "automatisation-intercom",
    category: "helpdesks",
    navLabel: "Automatisation Intercom",
    primaryKeyword: "automatisation Intercom",
    title: "Automatisation Intercom : Workflows, Fin, routage et API",
    description:
      "Automatisation Intercom : déclencheurs, branches et actions des Workflows, attribution en boîte d'équipe, Fin AI Agent, Slack et Jira, webhooks et API REST.",
    h1: "Automatisation Intercom : Workflows, attribution, Fin et API",
    intro:
      "L'automatisation Intercom se construit principalement dans Workflows : un éditeur visuel où un déclencheur lance le flux, des branches choisissent un chemin et des actions effectuent le travail, comme ajouter un tag, attribuer la conversation ou laisser Fin répondre. La méthode d'attribution de chaque boîte de réception d'équipe décide ensuite quel coéquipier reçoit la conversation, et les webhooks ainsi que l'API REST couvrent tout ce qui doit se passer en dehors d'Intercom. Voici comment se comporte chaque élément et par où commencer.",
    keyFacts: [
      "Les Workflows se construisent dans un éditeur visuel et peuvent s'adresser aux clients ou tourner discrètement en arrière-plan pour les coéquipiers.",
      "Avec les branches, une conversation ne suit que le premier chemin correspondant ; Apply rules exécute chaque chemin correspondant.",
      "Un seul SLA peut être appliqué à une conversation ; les actions SLA ultérieures provenant d'autres workflows sont ignorées.",
      "L'attribution équilibrée confie une conversation au coéquipier éligible qui a le moins de conversations ouvertes.",
      "Les abonnements webhook se créent dans le Developer Hub, pas via l'API, et l'endpoint doit utiliser HTTPS.",
    ],
    sections: [
      {
        heading: "Comment sont construits les Workflows Intercom",
        blocks: [
          {
            type: "p",
            text: "Workflows est l'endroit unique où Intercom automatise les conversations clients et les processus des coéquipiers. Vous construisez les workflows dans un éditeur visuel, à partir d'étapes réutilisables. Un workflow peut s'adresser aux clients, comme un bot qui accueille et trie les demandes, ou tourner discrètement en arrière-plan pour votre équipe. Chaque workflow combine les mêmes quelques types d'étapes.",
          },
          {
            type: "table",
            caption: "Les briques d'un workflow Intercom",
            head: ["Brique", "Rôle", "Exemples"],
            rows: [
              [
                "Déclencheur",
                "Définit quand le workflow démarre et pour qui",
                "Au début d'une conversation, pendant une conversation, sur un événement de ticket, ou quand un autre workflow l'appelle en tant que workflow réutilisable",
              ],
              [
                "Branches",
                "Vérifient des conditions et envoient la conversation sur le premier chemin dont la condition correspond",
                "Chemins distincts pour différents publics, canaux ou sujets",
              ],
              [
                "Apply rules",
                "Vérifie chaque chemin et exécute les actions de chacun de ceux qui correspondent",
                "Plusieurs tags ou attributs indépendants définis en une seule étape",
              ],
              [
                "Actions",
                "Effectuent le travail",
                "Ajouter un tag, attribuer, mettre en veille (snooze), définir la priorité, appliquer un SLA, laisser Fin répondre, notifier Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "La différence entre branches et Apply rules compte quand des conditions se chevauchent. Avec les branches, une conversation qui remplit plusieurs conditions ne suit que le premier chemin correspondant, lu de haut en bas : placez donc les conditions les plus spécifiques en premier. Apply rules exécute les actions de chaque chemin correspondant, ce qui convient aux étapes qui doivent se cumuler plutôt que se concurrencer.",
          },
        ],
      },
      {
        heading: "Automatisation de la boîte de réception : attribution, priorité et SLA",
        blocks: [
          {
            type: "p",
            text: "L'essentiel de l'automatisation de la boîte de réception est un workflow d'arrière-plan composé d'actions. « Assign » envoie une conversation à un coéquipier ou à une boîte de réception d'équipe choisis. « Tag » ajoute un tag ; les tags se créent et se gèrent dans les paramètres de votre espace de travail. « Snooze » retire temporairement la conversation de la boîte de réception du coéquipier ; si le client ou un coéquipier répond pendant la mise en veille, le workflow se termine. « Set priority » indique le degré d'urgence de la conversation.",
          },
          {
            type: "p",
            text: "Les SLA s'appliquent eux aussi par une action, mais un seul SLA peut être ajouté à une conversation. Si un workflow ultérieur tente d'appliquer un autre SLA, cette action est ignorée : décidez donc quel workflow est responsable des SLA avant d'en construire plusieurs.",
          },
          {
            type: "p",
            text: "Une fois qu'une conversation arrive dans une boîte de réception d'équipe, la méthode d'attribution de cette boîte décide qui la reçoit : manuelle, round robin ou équilibrée. L'attribution équilibrée confie chaque nouvelle conversation au coéquipier éligible qui a le moins de conversations ouvertes et, en cas d'égalité, privilégie celui qui attend une conversation depuis le plus longtemps. Pour être éligible, un coéquipier doit être actif et sous sa limite d'attribution. Intercom recommande l'attribution équilibrée pour les équipes support.",
          },
          {
            type: "note",
            text: "Un schéma de départ simple : un workflow d'arrière-plan sur les nouvelles conversations les tague par sujet, définit la priorité, applique un seul SLA et les attribue à la bonne boîte de réception d'équipe. La méthode d'attribution de la boîte choisit ensuite le coéquipier.",
          },
        ],
      },
      {
        heading: "Fin AI Agent dans vos workflows",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent est l'agent IA d'Intercom qui répond aux questions des clients. Il répond à partir du contenu que vous lui fournissez : articles publics, documents, snippets et URL publiques, que vous gérez sous Knowledge > Sources. Il respecte le ciblage d'audience des articles Intercom : il ne répondra donc pas à partir d'articles privés ou restreints que le client sur Messenger n'est pas autorisé à voir.",
          },
          {
            type: "p",
            text: "Fin est pris en charge sur Intercom Messenger (web, iOS et Android), ainsi que sur l'e-mail, WhatsApp, les SMS, Facebook et Instagram. Dans Workflows, une étape « Let Fin answer » permet à Fin de répondre à n'importe quel moment du flux et de continuer jusqu'à ce que le problème soit résolu ou escaladé à un coéquipier.",
          },
          {
            type: "p",
            text: "Préparez le transfert avec autant de soin que les réponses. Décidez vers quelle boîte de réception d'équipe une conversation escaladée doit aller, et construisez ce chemin dans le workflow pour qu'elle ne reste jamais sans attribution.",
          },
        ],
      },
      {
        heading: "Webhooks et API REST Intercom",
        blocks: [
          {
            type: "p",
            text: "Quand quelque chose dans Intercom doit atteindre un autre système, utilisez les webhooks. Vous les configurez dans le Developer Hub : ouvrez votre app, allez dans Configure, puis Webhooks, et saisissez l'URL de votre endpoint. L'endpoint doit utiliser HTTPS et accepter une requête HEAD, qu'Intercom utilise pour valider l'URL. Les abonnements ne peuvent être créés que dans le Developer Hub, pas via l'API.",
          },
          {
            type: "p",
            text: "Vous choisissez ensuite des sujets (topics). Un topic est un événement dans Intercom qui déclenche le webhook, et chaque topic est lié à une ou plusieurs autorisations dont votre app doit disposer. Intercom envoie un HTTP POST à votre endpoint pour chaque topic auquel vous êtes abonné, et chaque charge utile inclut le topic et un compteur de tentatives de livraison. Le bouton « Send a test request » de la section webhooks vous permet de vérifier l'endpoint.",
          },
          {
            type: "p",
            text: "Pour agir sur les conversations depuis votre propre code, utilisez l'API REST. Les requêtes vont vers api.intercom.io avec un jeton d'accès envoyé comme jeton Bearer dans l'en-tête Authorization, plus un en-tête Intercom-Version qui prend par défaut la version définie dans votre app. Répondre, par exemple, se fait par un POST sur /conversations/{id}/reply avec un corps JSON qui définit le type de message, le type d'auteur et le corps du message.",
          },
          {
            type: "p",
            text: "Bons premiers candidats à l'automatisation Intercom :",
          },
          {
            type: "ul",
            items: [
              "Taguer les nouvelles conversations et les attribuer à la bonne boîte de réception d'équipe.",
              "Appliquer un SLA par conversation et relever la priorité pour les comptes clés.",
              "Envoyer les événements de conversation à un webhook pour que Make ou n8n mette à jour d'autres systèmes.",
              "Publier les conversations nouvelles ou escaladées dans un canal Slack.",
            ],
          },
        ],
      },
      {
        heading: "Intégrations Slack et Jira",
        blocks: [
          {
            type: "p",
            text: "Pour les alertes Slack, configurez un canal Slack pour un usage limité aux notifications, puis ajoutez une étape « Notify Slack » à un workflow. L'app Intercom publie la notification, et les notifications suivantes pour la même conversation apparaissent comme réponses dans le fil, sous le message d'origine. Les réponses saisies dans ce fil ne sont pas renvoyées dans la conversation Intercom : les coéquipiers continuent donc de répondre aux clients dans Intercom.",
          },
          {
            type: "p",
            text: "Pour les escalades vers l'équipe technique, l'app Jira for Tickets d'Intercom peut créer automatiquement des issues Jira à partir des types de ticket que vous indiquez, refléter les statuts des issues Jira dans les tickets Intercom et synchroniser les notes. Son automatisation de base ne mappe que le titre et la description ; pour davantage de champs, utilisez son automatisation personnalisée basée sur des modèles Workflows. Elle ne crée pas d'issues directement à partir des conversations : une conversation doit d'abord être convertie en ticket.",
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit sur les outils que vous utilisez déjà, sans changement de plateforme, avec des API, des webhooks et Make ou n8n. Intercom dispose à la fois d'une API REST et de webhooks : il peut donc presque certainement être connecté ; la configuration précise est confirmée lors d'un appel Health Check gratuit de 30 minutes. Ticket Routing & Categorization est un projet ponctuel à {{price:routing}}, et Custom Automation, pour des flux couvrant plusieurs systèmes, coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement, une documentation de base et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre les branches et Apply rules dans les Workflows Intercom ?",
        a: "Les branches n'envoient la conversation que sur le premier chemin dont la condition correspond, vérifié de haut en bas. Apply rules vérifie chaque chemin et exécute les actions de chacun de ceux qui correspondent.",
      },
      {
        q: "Quelle méthode d'attribution Intercom recommande-t-il pour les équipes support ?",
        a: "L'attribution équilibrée. Elle confie chaque conversation au coéquipier actif, sous sa limite d'attribution, qui a le moins de conversations ouvertes ; en cas d'égalité, c'est celui qui attend depuis le plus longtemps qui la reçoit.",
      },
      {
        q: "Quel contenu Fin AI Agent utilise-t-il pour répondre aux clients ?",
        a: "Les articles publics, documents, snippets et URL publiques que vous ajoutez sous Knowledge > Sources. Il respecte le ciblage d'audience des articles : il ne répondra donc pas à partir d'articles que le client ne peut pas voir.",
      },
      {
        q: "Peut-on créer des abonnements webhook Intercom via l'API ?",
        a: "Non. Les abonnements webhook se configurent dans le Developer Hub. L'endpoint doit utiliser HTTPS et accepter une requête HEAD, qu'Intercom utilise pour le valider.",
      },
      {
        q: "Les coéquipiers peuvent-ils répondre aux clients depuis les notifications Slack d'Intercom ?",
        a: "Non. Dans un canal Slack réservé aux notifications, les réponses dans le fil d'une notification ne sont pas renvoyées dans la conversation Intercom.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    key: "hubspot-service-hub-automation",
    slug: "automatisation-hubspot-service-hub",
    category: "helpdesks",
    navLabel: "Automatisation HubSpot Service Hub",
    primaryKeyword: "automatisation HubSpot Service Hub",
    title: "Automatisation HubSpot Service Hub : tickets, workflows, SLA",
    description:
      "Automatisation HubSpot Service Hub : canaux et routage du help desk, pipelines et statuts, objectifs SLA, workflows de tickets, chatbots, webhooks et API.",
    h1: "Automatisation HubSpot Service Hub : help desk, tickets, workflows et API",
    intro:
      "L'automatisation de HubSpot Service Hub s'articule autour du ticket : les canaux du help desk créent les tickets, le routage les attribue, les pipelines et les statuts les suivent, et les workflows basés sur les tickets agissent sur eux. Les chatbots à base de règles recueillent des informations avant même qu'un ticket existe, et l'action webhook des workflows ainsi que l'API CRM relient HubSpot à tout le reste. Voici le rôle de chaque élément et par où commencer.",
    keyFacts: [
      "Par défaut, le help desk crée automatiquement des tickets à partir de chaque canal que vous y connectez.",
      "Le Support Pipeline par défaut compte quatre statuts de ticket : New, Waiting on contact, Waiting on us et Closed.",
      "Les objectifs SLA du help desk peuvent suivre le délai de première réponse, le délai de réponse suivante et le délai de clôture.",
      "L'action webhook des workflows n'accepte que les URL qui commencent par HTTPS.",
      "Les tickets se créent via l'API par un POST sur /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Ce que vous pouvez automatiser dans HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "L'automatisation de Service Hub est répartie entre plusieurs outils qui agissent tous sur la fiche ticket. Décidez où une règle doit se trouver avant de la construire : la plupart des problèmes viennent d'une même logique présente à deux endroits.",
          },
          {
            type: "table",
            caption: "Où se trouve chaque type d'automatisation Service Hub",
            head: ["Outil", "Ce qu'il automatise", "Usage typique"],
            rows: [
              [
                "Canaux et routage du help desk",
                "La création de tickets à partir des canaux connectés et leur attribution",
                "Chaque e-mail ou chat de support devient un ticket et parvient à la bonne équipe",
              ],
              [
                "Pipelines et statuts de tickets",
                "Les étapes que traverse un ticket, et si chacune compte comme ouverte ou fermée",
                "Des pipelines distincts pour différents types de travail de support",
              ],
              [
                "Objectifs SLA",
                "Des cibles pour les délais de première réponse, de réponse suivante et de clôture",
                "Un objectif de réponse plus rapide pour le chat que pour l'e-mail",
              ],
              [
                "Workflows basés sur les tickets",
                "Des actions sur les tickets qui remplissent des déclencheurs d'inscription",
                "Rotation des propriétaires, mise à jour de propriétés, relances différées",
              ],
              [
                "Chatbots à base de règles",
                "Questions, création de tickets et transfert dans le chat",
                "Recueillir les détails de la commande avant qu'un agent ne rejoigne la conversation",
              ],
              [
                "Webhooks et API",
                "L'envoi de données de tickets vers l'extérieur, et la création ou la mise à jour de tickets depuis d'autres systèmes",
                "Synchroniser les tickets avec Jira ou des outils internes",
              ],
            ],
          },
        ],
      },
      {
        heading: "Canaux et routage du help desk",
        blocks: [
          {
            type: "p",
            text: "Le help desk est l'espace de travail de HubSpot dédié au support basé sur les tickets. Vous pouvez y connecter des canaux de chat, d'e-mail, de formulaire, d'appel et Facebook Messenger. Par défaut, des tickets sont créés automatiquement à partir de chaque canal connecté, et HubSpot recommande de connecter tous vos canaux de support, car les tickets issus de canaux non connectés peuvent être dépourvus de leur objet et de leur fil dans le help desk.",
          },
          {
            type: "p",
            text: "Le routage se règle par canal. Quand vous connectez une adresse e-mail d'équipe, par exemple, vous choisissez le pipeline, le statut et la priorité par défaut des nouveaux tickets, puis une option de routage :",
          },
          {
            type: "ul",
            items: [
              "Des utilisateurs ou des équipes spécifiques.",
              "Le propriétaire du contact.",
              "Le routage par compétences, qui associe les tickets aux compétences des agents.",
              "Un workflow d'attribution, quand vous avez besoin d'une logique qui va au-delà des options intégrées.",
              "Personne, ce qui laisse les tickets dans la vue Unassigned, où les agents viennent les prendre.",
            ],
          },
          {
            type: "note",
            text: "Le routage automatique et le routage par compétences dépendent de vos sièges et de votre abonnement. Vérifiez ce que comprend votre compte avant de concevoir votre organisation autour d'une option de routage précise.",
          },
        ],
      },
      {
        heading: "Pipelines, statuts de tickets et objectifs SLA",
        blocks: [
          {
            type: "p",
            text: "Les tickets progressent dans un pipeline et, pour les tickets, les étapes du pipeline s'appellent des statuts. Le Support Pipeline par défaut en compte quatre : New, Waiting on contact, Waiting on us et Closed. Vous gérez les pipelines sous Settings > Objects > Tickets > Pipelines, et chaque statut que vous ajoutez doit être marqué comme Open ou Closed.",
          },
          {
            type: "p",
            text: "Ce choix pilote l'automatisation. Quand un ticket passe à un statut fermé, sa Close date prend la date du jour ; s'il revient à un statut ouvert, la Close date est effacée. Vous pouvez ajuster ce comportement par pipeline. Comme les workflows et les rapports filtrent sur le statut, gardez des statuts peu nombreux et sans ambiguïté.",
          },
          {
            type: "p",
            text: "Les objectifs SLA du help desk définissent des cibles pour le délai de première réponse, le délai de réponse suivante et le délai de clôture. Un objectif peut s'appliquer à tous les tickets, aux tickets ayant une valeur de propriété précise ou à une combinaison de propriétés, et chaque règle peut être limitée à des horaires définis et à un fuseau horaire. Parmi les exemples de HubSpot figurent un objectif de réponse plus court pour les clients grands comptes et un objectif de réponse plus rapide pour le chat que pour l'e-mail. Mettre un ticket en veille (snooze) n'a pas d'effet sur son SLA.",
          },
        ],
      },
      {
        heading: "Workflows basés sur les tickets",
        blocks: [
          {
            type: "p",
            text: "Un workflow basé sur les tickets inscrit les tickets qui remplissent ses déclencheurs d'inscription, puis exécute une séquence d'actions. Les actions les plus utiles pour le support :",
          },
          {
            type: "ul",
            items: [
              "Délais (Delay) : attendre un nombre défini de jours, d'heures et de minutes, ou jusqu'à une date du calendrier, une propriété de date ou un événement.",
              "Branches If/then : envoyer les tickets sur différents chemins selon des critères de filtre combinés avec AND et OR.",
              "Edit record : définir, copier ou effacer des valeurs de propriétés sur le ticket ou sur une fiche associée.",
              "Create record : créer une nouvelle fiche, associée par défaut au ticket inscrit.",
              "Rotate record to owner : attribuer les tickets à tour de rôle aux utilisateurs que vous choisissez. Les compteurs de rotation sont suivis par action et remis à zéro si vous ajoutez ou retirez des propriétaires après l'activation du workflow.",
              "Send a webhook : appeler une URL externe avec les données du ticket, comme décrit dans la section suivante.",
            ],
          },
          {
            type: "p",
            text: "Bons premiers candidats pour les workflows de tickets HubSpot :",
          },
          {
            type: "ul",
            items: [
              "Faire tourner les nouveaux tickets d'un pipeline entre les agents d'un groupe.",
              "Copier une propriété d'une fiche associée sur le ticket pour que le routage et les rapports puissent l'utiliser.",
              "Envoyer un ticket vers Jira ou un outil interne via un webhook quand son statut change.",
              "Attendre un délai défini après la clôture d'un ticket, puis créer une branche selon une propriété pour décider d'une relance.",
            ],
          },
        ],
      },
      {
        heading: "Chatbots, webhooks et API HubSpot",
        blocks: [
          {
            type: "p",
            text: "Les chatbots à base de règles gèrent les premières minutes d'un chat. Trois actions font l'essentiel du travail de support. « Ask question » enregistre la réponse du visiteur dans une propriété de contact et peut proposer des réponses rapides. « Submit a ticket » crée un ticket avec le nom, le pipeline et le statut que vous définissez, mais est ignorée si le visiteur n'a pas de fiche contact associée. « Send to team member » transfère le chat à un utilisateur ou à une équipe précis après avoir vérifié leur disponibilité, et affiche le message d'absence s'ils ne sont pas disponibles. Si le bot a des heures de fonctionnement, les chats ne sont routés vers un membre de l'équipe que pendant ces heures.",
          },
          {
            type: "p",
            text: "L'action webhook des workflows envoie des données vers l'extérieur. Choisissez POST ou GET et saisissez une URL qui commence par HTTPS. Un corps POST peut inclure toutes les propriétés de la fiche ou un ensemble personnalisé de clés, chacune associée à une propriété HubSpot. Vous pouvez vous authentifier avec une signature de requête, que HubSpot ajoute en en-tête pour que votre endpoint la vérifie, ou avec une clé API stockée comme secret et envoyée dans un en-tête ou un paramètre de requête. Vous pouvez tester l'action depuis son panneau sans affecter les fiches existantes. La disponibilité de cette action dépend de votre abonnement.",
          },
          {
            type: "p",
            text: "Dans l'autre sens, utilisez l'API CRM. Un POST sur /crm/v3/objects/tickets crée un ticket ; incluez subject, hs_pipeline_stage (le statut) et hs_pipeline, avec les ID internes plutôt que les libellés. Si aucun pipeline n'est indiqué, le pipeline par défaut est utilisé. Un GET sur /crm/v3/properties/tickets liste les propriétés de ticket de votre compte. Les apps peuvent aussi s'abonner aux événements de tickets via la Webhooks API, notamment ticket.creation et ticket.propertyChange, qui se déclenche quand une propriété que vous désignez change sur n'importe quel ticket. Ces abonnements se configurent au niveau de l'app et nécessitent le scope tickets.",
          },
        ],
      },
      {
        heading: "Mise en œuvre",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit sur les outils que vous utilisez déjà, sans changement de plateforme, avec des API, des webhooks et Make ou n8n. HubSpot dispose d'une API documentée et prend en charge les webhooks : il peut donc presque certainement être connecté ; la configuration précise est confirmée lors d'un appel Health Check gratuit de 30 minutes. Ticket Routing & Categorization est un projet ponctuel à {{price:routing}}, Automated Reports par e-mail ou Slack coûte {{price:reports}}, et Custom Automation sur plusieurs systèmes coûte {{price:custom}}. Chaque projet comprend 30 jours de support après le lancement, une documentation de base et aucun frais caché, et la plupart des mises en place prennent 1 à 3 semaines.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quels sont les statuts de ticket par défaut dans HubSpot ?",
        a: "Le Support Pipeline par défaut compte quatre statuts : New, Waiting on contact, Waiting on us et Closed. Vous pouvez ajouter les vôtres et marquer chacun comme Open ou Closed.",
      },
      {
        q: "Le help desk HubSpot peut-il suivre les SLA ?",
        a: "Oui. Les objectifs SLA du help desk suivent le délai de première réponse, le délai de réponse suivante et le délai de clôture, pour tous les tickets ou selon des propriétés de ticket, et peuvent être limités à des horaires définis. Mettre un ticket en veille n'a pas d'effet sur son SLA.",
      },
      {
        q: "Un chatbot HubSpot peut-il créer des tickets ?",
        a: "Oui. L'action « Submit a ticket » crée un ticket avec le nom, le pipeline et le statut que vous définissez. Elle est ignorée si le visiteur n'a pas de fiche contact associée.",
      },
      {
        q: "Comment envoyer les données de tickets HubSpot vers un autre système ?",
        a: "Ajoutez une action webhook à un workflow basé sur les tickets ; elle envoie une requête POST ou GET vers une URL HTTPS. Les apps peuvent aussi s'abonner à des événements de tickets comme ticket.creation et ticket.propertyChange via la Webhooks API.",
      },
      {
        q: "Que faut-il pour créer un ticket via l'API HubSpot ?",
        a: "Envoyez un POST sur /crm/v3/objects/tickets avec subject, hs_pipeline_stage et hs_pipeline, en utilisant les ID internes. Si vous omettez le pipeline, celui par défaut est utilisé.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
