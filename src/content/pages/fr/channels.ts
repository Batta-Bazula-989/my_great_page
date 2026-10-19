import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "bot-whatsapp-service-client",
    category: "channels",
    navLabel: "Bot WhatsApp pour le support",
    primaryKeyword: "bot WhatsApp service client",
    title: "Bot WhatsApp service client : règles, config et transfert",
    description:
      "Comment fonctionne un bot WhatsApp de service client : Business Platform vs app, fenêtre de 24 heures, modèles, opt-in, tarification et connexion au helpdesk.",
    h1: "Bot WhatsApp pour le service client : fonctionnement et ce que Meta autorise",
    intro:
      "Un bot WhatsApp de service client fonctionne sur la WhatsApp Business Platform (Cloud API), pas sur l'application gratuite WhatsApp Business. Il peut répondre librement pendant 24 heures après chaque message du client ; ensuite, vous ne pouvez joindre le client qu'avec un modèle (template) préapprouvé. Construisez le bot autour de cette fenêtre, de votre processus d'opt-in et d'un transfert propre vers votre helpdesk.",
    keyFacts: [
      "Lorsqu'un client vous envoie un message ou vous appelle, une fenêtre de service client de 24 heures s'ouvre et se réinitialise à chaque nouveau message.",
      "Dans cette fenêtre, vous pouvez envoyer des messages de service en texte libre sans approbation préalable.",
      "En dehors de la fenêtre, les modèles sont le seul type de message que vous pouvez envoyer.",
      "Avant d'envoyer des messages à des personnes, vous devez obtenir un opt-in qui nomme clairement votre entreprise.",
      "Meta facture chaque message délivré, selon la catégorie du message et le pays du destinataire.",
    ],
    sections: [
      {
        heading: "Application WhatsApp Business ou WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp propose deux produits aux entreprises, et un seul est conçu pour les bots. L'application WhatsApp Business est une application gratuite destinée aux petites entreprises qui répondent à leurs clients à la main et utilisent des réponses automatiques simples. La WhatsApp Business Platform est un ensemble d'API destiné aux moyennes et grandes entreprises. Cloud API est son principal produit de messagerie, et c'est à lui que se connectent les chatbots, les helpdesks et les CRM.",
          },
          {
            type: "table",
            caption: "Application vs Platform en un coup d'œil",
            head: ["", "Application WhatsApp Business", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Conçue pour", "Les petites entreprises qui répondent à la main", "Les moyennes et grandes entreprises qui connectent des bots et des outils de support"],
              ["Coût", "Téléchargement et utilisation gratuits", "Facturation par message fixée par Meta"],
              ["Mise en place", "Installation depuis une boutique d'applications", "Ressources pour développeurs ou un Business Messaging Partner"],
              ["Automatisation", "Réponses automatiques simples", "Chatbots, parcours de messages, intégrations CRM et helpdesk"],
            ],
          },
          {
            type: "p",
            text: "Si vous utilisez déjà l'application, Meta permet de connecter un numéro existant de l'application WhatsApp Business à Cloud API afin que les deux fonctionnent sur le même numéro. Après cette connexion, les messages envoyés depuis l'application ne sont pas soumis à la fenêtre de service client, alors que ceux envoyés via Cloud API le sont, et certaines fonctions de l'application, comme les discussions de groupe, ne sont pas prises en charge côté API. Vérifiez que votre helpdesk prend en charge cette configuration avant de compter dessus.",
          },
        ],
      },
      {
        heading: "La fenêtre de service client de 24 heures",
        blocks: [
          {
            type: "p",
            text: "Tout parcours de support WhatsApp dépend d'un seul minuteur. Lorsqu'un client envoie un message ou appelle votre entreprise, une fenêtre de service client de 24 heures démarre, et chaque nouveau message ou appel de sa part la remet à 24 heures. Tant qu'elle est ouverte, votre bot ou vos agents peuvent envoyer via l'API des messages de service en texte libre, sans approbation préalable.",
          },
          {
            type: "p",
            text: "Une fois la fenêtre fermée, les modèles sont les seuls messages que vous pouvez envoyer. Les modèles sont des formats prérédigés qui doivent être approuvés avant utilisation, et chacun appartient à une catégorie : marketing (promotions), utility (suivis liés à une action ou à une demande du client) ou authentication (vérification d'identité).",
          },
          {
            type: "table",
            caption: "Ce que vous pouvez envoyer, et quand",
            head: ["Situation", "Ce que vous pouvez envoyer"],
            rows: [
              ["Le client a écrit au cours des dernières 24 heures", "Des messages de service en texte libre de votre bot ou de vos agents"],
              ["Fenêtre fermée, vous devez mettre à jour un ticket ou une commande", "Un modèle utility approuvé"],
              ["Vous devez vérifier l'identité du client", "Un modèle authentication approuvé"],
              ["Vous voulez promouvoir quelque chose", "Un modèle marketing approuvé, envoyé uniquement aux utilisateurs ayant donné leur opt-in"],
              ["Le client répond à votre modèle", "Sa réponse ouvre une nouvelle fenêtre de 24 heures : les réponses en texte libre sont de nouveau possibles"],
            ],
          },
          {
            type: "p",
            text: "Pour un bot de support, cela se traduit par deux règles pratiques : répondez dans la fenêtre chaque fois que c'est possible, et préparez à l'avance des modèles utility pour les suivis tardifs comme « votre ticket a été mis à jour » ou « il nous manque une information ».",
          },
        ],
      },
      {
        heading: "Les règles d'opt-in que votre bot doit respecter",
        blocks: [
          {
            type: "p",
            text: "Meta exige que les entreprises obtiennent un consentement (opt-in) avant d'envoyer des messages aux personnes sur WhatsApp. L'opt-in n'a pas besoin d'être propre à WhatsApp, mais il doit indiquer clairement que la personne accepte de recevoir des messages de votre entreprise et mentionner le nom de votre entreprise. Il vous appartient de choisir une méthode d'opt-in conforme aux lois qui s'appliquent à vous. Meta cite ces méthodes :",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Votre site web",
              "Un appel téléphonique via un parcours de serveur vocal interactif (SVI)",
              "En personne ou sur papier",
            ],
          },
          {
            type: "p",
            text: "Meta recommande aussi un opt-in qui couvre chaque type de message que vous prévoyez d'envoyer, ainsi que des instructions claires pour se désinscrire (opt-out). En pratique, recueillez et enregistrez l'opt-in partout où les clients vous donnent leur numéro pour la première fois, comme au paiement, à l'inscription ou dans votre formulaire de contact, pour que les modèles de mise à jour de ticket ne reposent jamais sur une supposition.",
          },
        ],
      },
      {
        heading: "Comment fonctionne la tarification WhatsApp, sans la grille tarifaire",
        blocks: [
          {
            type: "p",
            text: "Meta facture chaque message délivré, et uniquement les messages qu'une entreprise envoie aux utilisateurs. Le prix dépend de la catégorie du message et de l'indicatif pays du destinataire. Les grilles tarifaires sont publiées par marché et changent de temps en temps : consultez la page de tarification actuelle de Meta plutôt qu'un chiffre tiré d'un article de blog.",
          },
          {
            type: "p",
            text: "Deux points comptent pour les équipes support. Les conversations qui démarrent depuis une publicité Click to WhatsApp ou un bouton d'appel à l'action d'une Page Facebook peuvent ouvrir une fenêtre de point d'entrée gratuite (free entry point) : si vous répondez dans la fenêtre de service client, vos messages ne sont pas facturés, et la page de tarification actuelle de Meta indique que cette fenêtre peut rester ouverte jusqu'à 7 jours (l'ancienne tarification par conversation accordait 72 heures). Par ailleurs, les éditeurs de helpdesk peuvent ajouter leurs propres frais : la documentation de Freshworks, par exemple, indique qu'il applique une marge en plus des frais WhatsApp de Meta.",
          },
          {
            type: "note",
            text: "La documentation tarifaire de Meta décrit des changements en 2026 dans la façon dont les messages de service et utility sont facturés. Vérifiez les règles en vigueur sur la page de tarification de Meta avant d'estimer vos coûts mensuels.",
          },
        ],
      },
      {
        heading: "Connecter le bot à votre helpdesk",
        blocks: [
          {
            type: "p",
            text: "Un bot WhatsApp ne doit jamais être une impasse. Lorsqu'il ne peut pas résoudre une demande, la conversation doit parvenir à un agent avec le contexte déjà joint. Zendesk et Freshdesk proposent tous deux des canaux WhatsApp natifs :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : WhatsApp s'ajoute comme canal de messagerie dans l'Admin Center (« Channels > Messaging and social > Messaging »). Il vous faut un Meta Business Manager appartenant à votre entreprise, et la personne qui connecte le numéro doit en être administratrice. Zendesk précise que les agents ne peuvent pas répondre plus de 24 heures après le dernier message du client, et que les messages de groupe WhatsApp ne sont pas pris en charge.",
              "Freshdesk : WhatsApp est un canal Freshdesk Omni qui prend en charge les modèles de message approuvés. Les réglages par numéro incluent l'association d'un agent IA, le routage vers des groupes d'agents, la gestion des modèles, les automatisations et les politiques de SLA. Le guide de Freshdesk mentionne une limite de 250 conversations initiées par l'entreprise par 24 heures tant que la vérification d'entreprise de Meta n'est pas terminée.",
            ],
          },
          {
            type: "p",
            text: "Quel que soit votre helpdesk, faites correspondre les informations collectées par le bot (nom, numéro de commande, type de problème) à des champs de ticket pour que les agents n'aient pas à les redemander, et taguez les conversations traitées par le bot pour voir ce qu'il résout réellement.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des bots WhatsApp par-dessus les outils que vous utilisez déjà, comme Zendesk, Freshdesk, Jira, Slack ou des systèmes internes, à l'aide d'API, de webhooks et de Make ou n8n. Un Starter Chat Bot (350–450 USD) couvre un ou deux canaux avec FAQ et collecte d'informations de base ; un Standard Chat Bot (500–650 USD) couvre trois à cinq canaux avec des conversations plus complexes et des transferts plus fluides. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et la plupart des mises en place prennent 1 à 3 semaines. Un appel d'audit gratuit de 30 minutes est un moyen simple de vérifier si WhatsApp correspond à votre volume de support.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Puis-je construire un bot de support sur l'application WhatsApp Business classique ?",
        a: "Pas de manière vraiment utile. L'application propose des réponses automatiques simples, mais les chatbots et les intégrations helpdesk fonctionnent sur la WhatsApp Business Platform, généralement via Cloud API.",
      },
      {
        q: "Que se passe-t-il si un client répond après 24 heures ?",
        a: "Son nouveau message ouvre une nouvelle fenêtre de service client de 24 heures : votre bot ou vos agents peuvent de nouveau répondre librement. La fenêtre ne limite que les messages que vous initiez après sa fermeture.",
      },
      {
        q: "Les modèles WhatsApp doivent-ils être approuvés ?",
        a: "Oui. Les modèles doivent être approuvés avant de pouvoir être envoyés, et ce sont les seuls messages autorisés en dehors de la fenêtre de service client.",
      },
      {
        q: "Puis-je garder mon numéro existant de l'application WhatsApp Business ?",
        a: "Meta permet de connecter un numéro existant de l'application WhatsApp Business à Cloud API pour utiliser les deux sur le même numéro, certaines fonctions n'étant pas disponibles côté API. Vérifiez que votre helpdesk le prend en charge avant de basculer.",
      },
      {
        q: "Combien coûte le fonctionnement d'un bot de support WhatsApp ?",
        a: "Meta facture chaque message délivré, selon la catégorie du message et le pays du destinataire, et les tarifs évoluent dans le temps. Consultez les grilles tarifaires actuelles de Meta et les éventuels frais ajoutés par votre helpdesk.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — About the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform",
      },
      {
        label: "Meta for Developers — Onboard WhatsApp Business app users",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/",
      },
      {
        label: "Meta for Developers — Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Pricing on the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      {
        label: "Meta for Developers — Get opt-in for WhatsApp",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in",
      },
      {
        label: "Zendesk Help Center — Adding WhatsApp channels to the Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408842821786-Adding-WhatsApp-channels-to-the-Agent-Workspace",
      },
      {
        label: "Freshdesk Support — WhatsApp Business integration for Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/238137-whatsapp-for-freshdesk-business-integration",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Telegram
  // ---------------------------------------------------------------------------
  {
    key: "telegram-support-bot",
    slug: "bot-telegram-support-client",
    category: "channels",
    navLabel: "Bot Telegram pour le support",
    primaryKeyword: "bot Telegram support client",
    title: "Bot Telegram de support : Bot API, webhooks et transfert",
    description:
      "Mettre en service un bot Telegram de support : BotFather, webhooks vs long polling, claviers inline, mode confidentialité, limites d'envoi et transfert.",
    h1: "Bot Telegram de support : fonctionnement et mise en place",
    intro:
      "Un bot Telegram de support est un programme connecté à la Telegram Bot API. Vous l'enregistrez auprès de @BotFather, recevez un jeton (token), et votre code reçoit les messages des clients via un webhook ou du long polling. Les bots Telegram ne peuvent pas démarrer de conversation : chaque parcours de support commence donc lorsqu'un client ouvre votre bot et appuie sur « Start ».",
    keyFacts: [
      "Vous créez un bot et obtenez son jeton d'authentification en envoyant un message à @BotFather.",
      "Les mises à jour arrivent via getUpdates ou via un webhook ; les deux méthodes s'excluent mutuellement.",
      "Telegram conserve les mises à jour non distribuées pendant 24 heures au maximum.",
      "Les bots ne peuvent pas écrire en premier aux utilisateurs ; l'utilisateur doit envoyer un message au bot ou l'ajouter à un groupe.",
      "Les webhooks ne fonctionnent que sur les ports 443, 80, 88 et 8443.",
    ],
    sections: [
      {
        heading: "Comment fonctionne un bot Telegram de support",
        blocks: [
          {
            type: "p",
            text: "Vous créez un bot en envoyant un message à @BotFather dans Telegram, qui l'enregistre et vous fournit un jeton d'authentification. Votre code utilise ce jeton pour appeler la Bot API en HTTPS. Le jeton authentifie uniquement votre code ; il ne donne pas au bot la permission d'écrire à qui que ce soit.",
          },
          {
            type: "p",
            text: "Les bots ne peuvent pas démarrer de conversation. Un utilisateur doit d'abord écrire au bot ou l'ajouter à un groupe. Chaque bot dispose d'un lien de la forme t.me/ suivi du nom d'utilisateur du bot, qui ouvre une discussion avec lui, et la première fois qu'une personne ouvre cette discussion, elle voit un bouton « Start » qui envoie la commande /start. Enregistrez à ce moment-là le chat ID de l'utilisateur : vous en aurez besoin pour lui envoyer tout message ultérieur, comme une mise à jour de ticket.",
          },
          {
            type: "ol",
            items: [
              "Le client clique sur votre lien t.me sur votre site web ou dans un e-mail et appuie sur « Start ».",
              "Le bot l'accueille et affiche un court menu des sujets courants.",
              "Les questions simples obtiennent une réponse immédiate ; pour tout le reste, le bot collecte les informations (numéro de commande, description, captures d'écran).",
              "Le bot crée un ticket dans votre helpdesk et indique au client la suite.",
              "Lorsqu'un agent répond dans le helpdesk, la réponse est renvoyée dans la même discussion Telegram.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks ou long polling",
        blocks: [
          {
            type: "p",
            text: "La Bot API propose deux façons, mutuellement exclusives, de recevoir les mises à jour : la méthode getUpdates (long polling) et les webhooks. Tant qu'un webhook est défini, getUpdates ne fonctionne pas. Dans les deux cas, Telegram conserve les mises à jour que vous n'avez pas reçues pendant 24 heures au maximum : un bot hors ligne pendant une journée perd donc des messages.",
          },
          {
            type: "table",
            caption: "Choisir comment votre bot reçoit les messages",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Fonctionnement", "Votre serveur demande à Telegram les nouvelles mises à jour", "Telegram envoie chaque mise à jour à votre URL HTTPS"],
              ["Hébergement", "N'importe quel serveur capable d'émettre des requêtes sortantes", "Un endpoint HTTPS public sur le port 443, 80, 88 ou 8443"],
              ["Vérification de l'expéditeur", "Inutile, c'est votre serveur qui émet les requêtes", "Définissez un secret_token ; Telegram le renvoie dans l'en-tête X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "Pour repasser d'un webhook au polling, supprimez le webhook avec deleteWebhook ou en appelant setWebhook avec une URL vide. Les deux méthodes acceptent drop_pending_updates si vous voulez supprimer les mises à jour en attente lorsque vous changez de configuration.",
          },
        ],
      },
      {
        heading: "Boutons et menus pour les parcours de support",
        blocks: [
          {
            type: "p",
            text: "Les bots de support fonctionnent mieux avec des boutons qu'avec du texte libre. Les claviers de réponse personnalisés (custom reply keyboards) remplacent le clavier de l'utilisateur par des réponses prédéfinies, et appuyer sur l'une d'elles envoie ce texte dans la discussion. Les claviers inline associent des boutons à un message précis et ne publient rien dans la discussion lorsqu'on appuie dessus. Un bouton inline peut ouvrir une URL ou envoyer à votre bot des données de callback de 1 à 64 octets.",
          },
          {
            type: "p",
            text: "Deux détails piègent les nouveaux bots. Après qu'un utilisateur a appuyé sur un bouton de callback, les clients Telegram affichent un indicateur de progression jusqu'à ce que votre bot appelle answerCallbackQuery : répondez donc à chaque callback, même sans texte. Et pour les menus en plusieurs étapes, modifiez le message existant avec de nouveaux boutons au lieu d'envoyer un nouveau message à chaque fois ; la modification fonctionne pour les messages dotés d'un clavier inline.",
          },
        ],
      },
      {
        heading: "Groupes, mode confidentialité et limites d'envoi",
        blocks: [
          {
            type: "p",
            text: "Les bots ajoutés à des groupes fonctionnent par défaut en mode confidentialité (privacy mode). Dans ce mode, un bot reçoit les commandes qui lui sont adressées, les réponses à ses propres messages, les messages envoyés via le bot et les messages de service, mais pas les échanges ordinaires du groupe. Les bots administrateurs d'un groupe reçoivent tous les messages, et vous pouvez désactiver le mode confidentialité avec /setprivacy dans @BotFather, même si Telegram ne le recommande qu'en cas de nécessité absolue. Les messages des discussions privées avec le bot lui parviennent toujours.",
          },
          {
            type: "table",
            caption: "Limites approximatives selon la FAQ Bots de Telegram",
            head: ["Où", "Recommandation"],
            rows: [
              ["Une seule discussion", "Évitez plus d'un message par seconde ; de courtes rafales peuvent passer avant l'apparition d'erreurs 429"],
              ["Un groupe", "Pas plus de 20 messages par minute"],
              ["Notifications en masse", "Environ 30 messages par seconde, tous utilisateurs confondus, sauf si vous activez les diffusions payantes (paid broadcasts)"],
            ],
          },
          {
            type: "p",
            text: "La FAQ de Telegram présente ces chiffres comme approximatifs : prévoyez donc des nouvelles tentatives en cas d'erreur 429 plutôt que de vous fier à des valeurs exactes. Pour un bot de support, ils comptent surtout lorsque vous notifiez de nombreux clients à la fois, par exemple lors d'une panne. Avec le long polling, passez aussi le paramètre offset à getUpdates : les mises à jour jusqu'à cet ID sont marquées comme confirmées et ne seront plus renvoyées.",
          },
        ],
      },
      {
        heading: "Transfert vers le helpdesk et Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Pour le transfert du bot vers un humain, le schéma habituel consiste à ce que le bot ouvre un ticket et relaie les réponses des agents dans la discussion. Zendesk prend en charge Telegram comme canal Sunshine Conversations dans l'Agent Workspace, ce qui nécessite Suite Professional ou supérieur. Les messages deviennent des tickets, et la réponse d'un agent dans Zendesk apparaît dans l'application de messagerie du client.",
          },
          {
            type: "p",
            text: "Telegram Business est une option distincte pour les petites équipes qui répondent aux clients depuis leur propre compte Telegram. Le titulaire du compte peut connecter un seul bot business à la fois, choisir les discussions auxquelles il a accès, et le laisser traiter les messages entrants et, lorsque c'est autorisé, répondre en son nom.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des bots Telegram de support qui se connectent aux outils que vous utilisez déjà, comme Zendesk, Freshdesk, Jira, Slack ou des systèmes internes, via des API, des webhooks et Make ou n8n. Un Starter Chat Bot (350–450 USD) couvre un ou deux canaux avec FAQ et collecte d'informations de base, ce qui convient à Telegram associé à un widget sur votre site web. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. Vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Un bot Telegram peut-il écrire en premier aux clients ?",
        a: "Non. Un utilisateur doit écrire au bot ou l'ajouter à un groupe avant que le bot puisse lui écrire. Enregistrez le chat ID au premier contact pour pouvoir envoyer des mises à jour plus tard.",
      },
      {
        q: "Faut-il utiliser des webhooks ou getUpdates ?",
        a: "Les deux fonctionnent, mais pas en même temps. Les webhooks envoient chaque mise à jour à votre endpoint HTTPS, tandis que le long polling ne nécessite que des requêtes sortantes et est plus simple pendant le développement.",
      },
      {
        q: "Pourquoi mon bot ne voit-il pas les messages d'un groupe ?",
        a: "Les bots fonctionnent par défaut en mode confidentialité et ne voient que les messages qui leur sont destinés. Faites du bot un administrateur du groupe, ou désactivez le mode confidentialité avec /setprivacy dans @BotFather et ajoutez de nouveau le bot au groupe.",
      },
      {
        q: "Zendesk prend-il en charge Telegram ?",
        a: "Oui, en tant que canal Sunshine Conversations dans l'Agent Workspace, pour lequel Zendesk indique qu'il faut Suite Professional ou supérieur. Les messages arrivent sous forme de tickets et les réponses des agents repartent vers Telegram.",
      },
    ],
    sources: [
      {
        label: "Telegram — Bots: An introduction for developers",
        url: "https://core.telegram.org/bots",
      },
      {
        label: "Telegram — Telegram Bot API",
        url: "https://core.telegram.org/bots/api",
      },
      {
        label: "Telegram — From BotFather to 'Hello World'",
        url: "https://core.telegram.org/bots/tutorial",
      },
      {
        label: "Telegram — Marvin's Marvellous Guide to All Things Webhook",
        url: "https://core.telegram.org/bots/webhooks",
      },
      {
        label: "Telegram — Telegram Bot Features",
        url: "https://core.telegram.org/bots/features",
      },
      {
        label: "Telegram — Bots FAQ",
        url: "https://core.telegram.org/bots/faq",
      },
      {
        label: "Telegram — Connected business bots",
        url: "https://core.telegram.org/api/bots/connected-business-bots",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "slack-support-automation",
      "n8n-vs-make-vs-zapier",
    ],
    updated: "2026-10-19",
  },
];
