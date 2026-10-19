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

  // ---------------------------------------------------------------------------
  // 3. Facebook Messenger
  // ---------------------------------------------------------------------------
  {
    key: "facebook-messenger-bot-customer-service",
    slug: "bot-messenger-service-client",
    category: "channels",
    navLabel: "Bot Messenger service client",
    primaryKeyword: "bot Facebook Messenger service client",
    title: "Bot Facebook Messenger service client : règles et config",
    description:
      "Comment fonctionne un bot Facebook Messenger de service client : webhooks, fenêtre de 24 heures, tag HUMAN_AGENT, transfert aux agents et politique de Meta.",
    h1: "Bot Facebook Messenger pour le service client : fenêtres, tags et transfert",
    intro:
      "Un bot Facebook Messenger de service client se connecte à votre Page Facebook via la Messenger Platform de Meta : les messages entrants parviennent à votre serveur par des webhooks, et le bot répond via la Send API. Vous pouvez répondre pendant 24 heures après chaque message du client, et un agent humain peut répondre jusqu'à 7 jours plus tard avec le tag HUMAN_AGENT, une fois votre application approuvée pour cet usage.",
    keyFacts: [
      "La messagerie standard vous permet de répondre dans les 24 heures suivant le message d'une personne.",
      "Le tag HUMAN_AGENT autorise des réponses humaines dans un délai de 7 jours, après approbation de l'application.",
      "Depuis le 27 avril 2026, les tags CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE et POST_PURCHASE_UPDATE renvoient une erreur.",
      "Lorsque la loi l'exige, un bot doit indiquer que les personnes échangent avec un service automatisé.",
      "La politique de Meta attend des expériences automatisées qu'elles répondent aux saisies des utilisateurs en 30 secondes.",
    ],
    sections: [
      {
        heading: "Comment s'articule la Messenger Platform",
        blocks: [
          {
            type: "p",
            text: "Un bot Messenger est une application Meta connectée à une ou plusieurs Pages Facebook. L'application s'abonne à chaque Page via l'edge subscribed_apps de la Page, ce qui nécessite les permissions pages_messaging et pages_manage_metadata. Meta envoie ensuite à votre webhook des événements comme les nouveaux messages et les appuis sur des boutons, et votre bot répond via la Send API.",
          },
          {
            type: "table",
            caption: "Événements webhook généralement utilisés par un bot de support",
            head: ["Événement", "Ce qu'il indique à votre bot"],
            rows: [
              ["messages", "Un client a envoyé un message à votre Page"],
              ["messaging_postbacks", "Un client a appuyé sur un bouton postback, sur le bouton « Get Started » ou sur un élément du menu persistant"],
              ["messaging_handovers", "Le contrôle de la conversation a été transmis, repris ou modifié entre applications"],
              ["standby", "Un message est arrivé alors qu'une autre application contrôlait la conversation"],
            ],
          },
          {
            type: "p",
            text: "Meta fournit aussi des points d'entrée fixes. Appuyer sur le bouton « Get Started » envoie un postback, ce qui est un bon moment pour un message de bienvenue. Un menu persistant, avec jusqu'à 20 éléments, peut inclure une option « Parler à une personne » ; il n'apparaît qu'une fois qu'un bouton « Get Started » est défini.",
          },
        ],
      },
      {
        heading: "La fenêtre de 24 heures et les tags de message",
        blocks: [
          {
            type: "p",
            text: "La fenêtre de messagerie standard de Messenger vous donne 24 heures pour répondre après qu'une personne a écrit à votre Page, et les messages envoyés dans cette fenêtre peuvent contenir du contenu promotionnel. Si vous envoyez un message ordinaire après la fermeture de la fenêtre, la Send API renvoie l'erreur 1545041.",
          },
          {
            type: "table",
            caption: "Ce que Meta autorise après qu'un client a écrit",
            head: ["Moment ou cas d'usage", "Ce que vous pouvez envoyer", "Remarques"],
            rows: [
              ["Dans les 24 heures suivant le message du client", "Des messages standard du bot ou d'un agent", "Le contenu promotionnel est autorisé dans cette fenêtre"],
              ["Jusqu'à 7 jours après le message du client", "Une réponse humaine avec le tag HUMAN_AGENT", "Nécessite l'approbation de l'application ; pas pour les messages automatisés ou promotionnels"],
              ["Mises à jour d'événement, d'achat ou de compte", "Pas les anciens tags : CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE et POST_PURCHASE_UPDATE renvoient une erreur depuis le 27 avril 2026", "Meta oriente vers les modèles utility ou la Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta réserve HUMAN_AGENT aux problèmes qui ne peuvent pas être résolus dans la fenêtre standard, comme une demande qui arrive pendant que votre entreprise est fermée le week-end ou un dossier qui prend plus d'une journée. Les messages automatisés font partie des usages interdits de ce tag : le bot ne peut donc pas s'en servir pour envoyer seul des suivis tardifs.",
          },
        ],
      },
      {
        heading: "Transmettre les conversations du bot à une personne",
        blocks: [
          {
            type: "p",
            text: "Plusieurs applications peuvent travailler sur la même Page, par exemple votre bot et un helpdesk. Le protocole de transfert (handover protocol) permet de passer une conversation d'une application ou d'une boîte de réception à une autre, et le webhook messaging_handovers signale quand le contrôle est transmis, repris ou modifié. Les applications qui ne contrôlent pas le fil de discussion reçoivent des événements standby au lieu des événements de message habituels.",
          },
          {
            type: "p",
            text: "Meta fait évoluer ce mécanisme vers Conversation Routing. Une mise à jour de 2021 a supprimé l'obligation d'attribuer des rôles principal et secondaire et a ajouté les modes Exclusive et Idle. Les règles de routage peuvent désormais être gérées dans les paramètres de votre Page, et lorsque Conversation Routing est activé, la Conversations API renvoie un champ is_owner pour que votre application ne réponde qu'aux fils qu'elle contrôle.",
          },
          {
            type: "ul",
            items: [
              "Proposez une porte de sortie claire : la documentation de Meta mentionne l'escalade via une intention de repli (fallback intent), un mot-clé ou des réponses rapides (quick replies).",
              "Avant de transmettre le contrôle, publiez un court résumé (sujet, numéro de commande, ce que le bot a déjà tenté) là où l'agent le verra.",
              "Dites au client ce qui va se passer, y compris vos horaires si personne n'est en ligne.",
              "Lorsque l'agent a terminé, rendez le contrôle au bot pour que la question suivante reçoive une réponse automatique.",
            ],
          },
        ],
      },
      {
        heading: "Les règles de politique qui façonnent le bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Transparence : lorsque la loi applicable l'exige, les expériences de chat automatisées doivent indiquer que la personne échange avec un service automatisé, par exemple au début d'une conversation ou lorsqu'un humain rend la main à l'automatisation. Meta suggère de le signaler même lorsque ce n'est pas obligatoire et cite la Californie et l'Allemagne.",
              "Réactivité : les expériences entièrement automatisées doivent répondre à toutes les saisies des utilisateurs en 30 secondes. Les configurations hybrides qui mêlent bots et personnes doivent mettre à jour le réglage de réponse dans « Page Settings », sous « Advanced Messaging ».",
              "Pas de promotion dans les messages tagués : les tags de message ne peuvent pas servir à la publicité, au marketing ou à la sollicitation.",
              "Approbation de l'application : votre application doit être approuvée avant de pouvoir utiliser le tag HUMAN_AGENT.",
            ],
          },
        ],
      },
      {
        heading: "Connecter Messenger à votre helpdesk",
        blocks: [
          {
            type: "p",
            text: "La plupart des helpdesks peuvent recevoir les conversations Messenger sous forme de tickets. Dans Zendesk, Messenger est un canal de messagerie de l'Agent Workspace, et Zendesk documente quelques limites pratiques :",
          },
          {
            type: "ul",
            items: [
              "Les agents disposent de sept jours pour répondre avant la fermeture de la fenêtre de messagerie, après quoi la zone de réponse est bloquée.",
              "Les réponses qu'un agent envoie directement dans Messenger ne se synchronisent pas avec Zendesk : les agents doivent donc répondre depuis Zendesk.",
              "Les messages de plus de 2 000 caractères ne sont pas délivrés.",
            ],
          },
          {
            type: "p",
            text: "Si votre bot fonctionne comme une application distincte, décidez quelle application contrôle le fil par défaut et à quel moment le contrôle change de main ; sinon, le bot et le helpdesk risquent de répondre tous deux au même client.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des bots Messenger qui fonctionnent par-dessus Zendesk, Freshdesk, Jira, Slack ou vos outils internes, à l'aide d'API, de webhooks et de Make ou n8n. Un Starter Chat Bot (350–450 USD) couvre un ou deux canaux ; un Standard Chat Bot (500–650 USD) couvre trois à cinq canaux, comme Messenger, Instagram et WhatsApp, avec des conversations plus complexes et des transferts plus fluides. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. Réservez un appel d'audit gratuit de 30 minutes pour cartographier votre parcours Messenger actuel.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Combien de temps ai-je pour répondre sur Messenger ?",
        a: "Vous pouvez envoyer des messages standard dans les 24 heures suivant le message d'une personne. Un agent humain peut répondre jusqu'à 7 jours plus tard avec le tag HUMAN_AGENT, une fois votre application approuvée pour cet usage.",
      },
      {
        q: "Mon bot peut-il utiliser le tag HUMAN_AGENT ?",
        a: "Non. Meta classe les messages automatisés parmi les usages interdits de ce tag. Il est destiné aux réponses de personnes lorsqu'un problème ne peut pas être résolu en 24 heures.",
      },
      {
        q: "Qu'est-ce qui a remplacé les tags ACCOUNT_UPDATE et POST_PURCHASE_UPDATE ?",
        a: "Ces tags, ainsi que CONFIRMED_EVENT_UPDATE, renvoient une erreur depuis le 27 avril 2026. Meta recommande les modèles utility ou la Marketing Messages API pour ces cas d'usage.",
      },
      {
        q: "Dois-je dire aux utilisateurs qu'ils parlent à un bot ?",
        a: "La politique de Meta exige de le signaler lorsque la loi applicable l'impose, et le recommande ailleurs. Le dire au début de la conversation est l'approche la plus simple.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Send a message (Messenger Platform)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Message tags (Send API)",
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/",
      },
      {
        label: "Meta for Developers — Messenger Platform and IG Messaging API policy",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy",
      },
      {
        label: "Meta for Developers — Webhooks for Messenger Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks",
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
        label: "Meta for Developers — Persistent menu",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu",
      },
      {
        label: "Zendesk Help Center — Adding Facebook Messenger channels",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835753370-Adding-Facebook-Messenger-channels",
      },
    ],
    related: [
      "instagram-dm-automation",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Instagram
  // ---------------------------------------------------------------------------
  {
    key: "instagram-dm-automation",
    slug: "automatisation-dm-instagram",
    category: "channels",
    navLabel: "Automatisation des DM Instagram",
    primaryKeyword: "automatisation DM Instagram",
    title: "Automatisation des DM Instagram pour le support : règles",
    description:
      "L'automatisation des DM Instagram expliquée : comptes professionnels, fenêtre de 24 heures, tag human agent, réponses privées aux commentaires et ice breakers.",
    h1: "Automatisation des DM Instagram pour le service client",
    intro:
      "Automatiser les DM Instagram consiste à connecter un bot aux messages privés d'un compte Instagram professionnel via les API de Meta, pour que les questions courantes obtiennent une réponse instantanée et que le reste parvienne à une personne. Le bot ne peut répondre qu'après qu'une personne vous a écrit et dispose de 24 heures pour le faire ; les agents humains peuvent répondre jusqu'à 7 jours plus tard avec le tag human agent.",
    keyFacts: [
      "Les API de messagerie d'Instagram fonctionnent avec les comptes professionnels (entreprise ou créateur).",
      "Votre application ne peut écrire à un utilisateur qu'après qu'il vous a écrit, puis dispose de 24 heures pour répondre.",
      "Le tag human agent permet de répondre dans un délai de 7 jours, après l'examen de l'application (app review).",
      "Les réponses privées aux commentaires peuvent être envoyées dans les 7 jours suivant le commentaire.",
      "Sur Instagram, Meta a remplacé le protocole de transfert (handover protocol) par Conversation Routing.",
    ],
    sections: [
      {
        heading: "Ce qu'il vous faut avant d'automatiser les DM Instagram",
        blocks: [
          {
            type: "p",
            text: "Les API de messagerie d'Instagram fonctionnent avec les comptes professionnels. Il en existe deux types : les comptes entreprise, pour les commerçants, entreprises locales, marques, organisations et prestataires de services, et les comptes créateur, pour les personnalités publiques, producteurs de contenu, artistes et influenceurs. Notez que passer un compte personnel privé en compte professionnel le rend public.",
          },
          {
            type: "table",
            caption: "Deux façons de connecter la messagerie Instagram",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Page Facebook", "Non requise", "Le compte Instagram doit être lié à une Page Facebook"],
              ["Envoi de messages", "Jeton d'accès utilisateur Instagram avec la permission instagram_business_manage_messages", "Même endpoint /PAGE_ID/messages que Messenger, avec l'identifiant Instagram du client propre à l'application (Instagram-scoped ID)"],
              ["Messages entrants", "Webhooks de messagerie", "Le champ de webhook messages, aux côtés des messages Messenger"],
              ["Cas adapté", "Entreprises et créateurs présents uniquement sur Instagram", "Équipes qui utilisent déjà un bot Messenger ou un helpdesk connecté à Meta"],
            ],
          },
          {
            type: "p",
            text: "Dans les deux cas, le titulaire du compte doit autoriser l'accès aux messages sous « Connected tools » dans les paramètres de messages d'Instagram, sinon l'API ne peut pas gérer les conversations. Zendesk précise que cette option doit être activée dans l'application mobile Instagram, pas sur le web. Si votre application sert des comptes professionnels que vous ne possédez pas et ne gérez pas, elle a aussi besoin de l'Advanced Access via l'examen des applications de Meta.",
          },
        ],
      },
      {
        heading: "Fenêtres de messagerie et tag human agent",
        blocks: [
          {
            type: "p",
            text: "Votre application ne peut écrire à quelqu'un qu'après qu'il a écrit à votre compte, et elle dispose de 24 heures pour répondre à chaque message. Pour les problèmes qui prennent plus de temps, comme une demande qui arrive pendant que votre entreprise est fermée le week-end, le tag human agent permet à une personne de répondre dans un délai de 7 jours. Ce tag n'est disponible que pour les applications qui ont terminé l'examen des applications (app review).",
          },
          {
            type: "table",
            caption: "Limites des DM Instagram à connaître",
            head: ["Règle", "Ce que cela signifie pour votre bot"],
            rows: [
              ["Fenêtre de réponse de 24 heures", "Les réponses automatiques doivent partir dans les 24 heures suivant le message du client"],
              ["Tag human agent (7 jours)", "Les réponses tardives viennent d'une personne, après l'examen de l'application"],
              ["Pas de messagerie de groupe", "Les conversations de groupe ne sont pas prises en charge par l'API"],
              ["Dossier « Requests »", "Les conversations du dossier « Requests » inactives depuis 30 jours ne sont pas renvoyées par l'API"],
            ],
          },
        ],
      },
      {
        heading: "Du commentaire au DM : les réponses privées",
        blocks: [
          {
            type: "p",
            text: "Beaucoup de questions de support commencent dans les commentaires, comme « C'est en stock ? » ou « Comment je le retourne ? ». Les réponses privées (private replies) permettent à votre compte de répondre à un commentaire par un message privé à son auteur. Elles fonctionnent pour les commentaires sur les publications, les reels et les publicités, ainsi que pour les commentaires d'Instagram Live. Une réponse privée est un message unique, envoyé dans les 7 jours suivant le commentaire, qui inclut automatiquement un lien vers la publication ou le commentaire.",
          },
          {
            type: "p",
            text: "Les réponses privées n'ont plus besoin du tag human agent. Si la personne répond à votre réponse privée, ce message démarre une conversation normale et la fenêtre habituelle de 24 heures s'applique. Une configuration pratique : surveillez les commentaires à la recherche de mots-clés de support, envoyez une réponse privée contenant une réponse ou une question, et laissez le bot de DM prendre le relais, en gardant les numéros de commande et les données personnelles hors des commentaires publics.",
          },
        ],
      },
      {
        heading: "Ice breakers et points d'entrée",
        blocks: [
          {
            type: "p",
            text: "Les ice breakers sont des questions prédéfinies sur lesquelles les personnes peuvent appuyer lorsqu'elles démarrent une nouvelle conversation avec votre compte, comme « Où est ma commande ? » ou « Contacter le support ». Lorsque quelqu'un appuie sur l'une d'elles, votre application reçoit un événement webhook messaging_postback : chaque ice breaker peut donc lancer son propre parcours de bot. Les ice breakers peuvent être configurés en plusieurs langues, la bonne version s'affichant selon les paramètres régionaux (locale) de l'utilisateur. Utilisez-les pour vos questions de support les plus fréquentes, routez chacune vers un parcours précis, et vérifiez lesquelles sont réellement utilisées pour remplacer celles que personne ne choisit.",
          },
          {
            type: "p",
            text: "Les liens ig.me peuvent transmettre un paramètre de référence (referral) à une conversation, par exemple pour indiquer au bot depuis quelle page produit le client est arrivé. Pour les nouvelles conversations, Meta exige que des ice breakers soient configurés pour que ce paramètre de référence soit transmis.",
          },
        ],
      },
      {
        heading: "Transmettre les DM à un humain",
        blocks: [
          {
            type: "p",
            text: "Sur Instagram, Meta ne prend plus en charge le protocole de transfert et a fait passer toutes les entreprises à Conversation Routing. Celui-ci permet de transmettre le contrôle du fil à la boîte de réception Instagram ou à une boîte de réception tierce comme un helpdesk. Lors de l'examen de l'application, Meta attend que vous montriez qu'en cas d'escalade, la propriété du fil passe à la boîte de réception et que l'agent peut y répondre.",
          },
          {
            type: "p",
            text: "Deux particularités sont bonnes à connaître. Les réponses envoyées via une application tierce déplacent le fil dans le dossier « General », et les messages transmis par la plateforme n'incluent pas l'information de dossier affichée dans l'application Instagram. Dans le canal Instagram Direct de Zendesk, les réponses faites directement dans Instagram ne sont pas ajoutées au ticket : les agents doivent donc répondre depuis Zendesk.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab met en place des bots de DM Instagram qui répondent aux questions courantes, collectent les informations et transmettent les conversations à votre équipe dans Zendesk, Freshdesk, Jira, Slack ou un outil interne, à l'aide d'API, de webhooks et de Make ou n8n. Un Starter Chat Bot (350–450 USD) couvre un ou deux canaux ; un Standard Chat Bot (500–650 USD) en couvre trois à cinq, comme Instagram, Messenger et votre site web. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, et la plupart des mises en place prennent 1 à 3 semaines. L'appel d'audit gratuit de 30 minutes est le point de départ.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Puis-je automatiser les DM d'un compte Instagram personnel ?",
        a: "Non. Les API de messagerie de Meta fonctionnent avec les comptes professionnels, qui peuvent être des comptes entreprise ou créateur.",
      },
      {
        q: "Ai-je besoin d'une Page Facebook pour automatiser les DM Instagram ?",
        a: "Pas avec l'Instagram API with Instagram Login, qui ne nécessite pas de Page liée. L'Instagram Messaging API via la Messenger Platform, elle, en exige une.",
      },
      {
        q: "Combien de temps puis-je attendre avant de répondre à un DM ?",
        a: "Les réponses automatiques doivent partir dans les 24 heures suivant le message du client. Un agent humain peut répondre jusqu'à 7 jours plus tard avec le tag human agent, une fois l'examen de votre application validé.",
      },
      {
        q: "Puis-je envoyer un DM à quelqu'un qui a commenté ma publication ?",
        a: "Oui, avec une réponse privée : un message unique envoyé dans les 7 jours suivant le commentaire, qui inclut automatiquement un lien vers la publication ou le commentaire.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Instagram API with Instagram Login: Send Messages",
        url: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/",
      },
      {
        label: "Meta for Developers — Instagram Platform overview",
        url: "https://developers.facebook.com/docs/instagram-platform/overview/",
      },
      {
        label: "Meta for Developers — Instagram Messaging: Human Agent Escalation",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation",
      },
      {
        label: "Meta for Developers — Send a message (Messenger Platform, private replies)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Using ig.me Links",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Instagram Help Center — Set up a professional Instagram account",
        url: "https://help.instagram.com/502981923235522",
      },
      {
        label: "Zendesk Help Center — Adding and configuring the Instagram Direct channel",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835013018-Adding-and-configuring-Instagram-Direct",
      },
    ],
    related: [
      "facebook-messenger-bot-customer-service",
      "chatbot-to-human-handoff",
      "ai-chatbot-for-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Website chatbot
  // ---------------------------------------------------------------------------
  {
    key: "website-chatbot-for-support",
    slug: "chatbot-site-web-service-client",
    category: "channels",
    navLabel: "Chatbot de support pour site web",
    primaryKeyword: "chatbot site web service client",
    title: "Chatbot site web service client : mise en place et transfert",
    description:
      "Préparer un chatbot de site web de service client : widgets Zendesk et Freshchat, transfert du bot à l'agent, hors heures d'ouverture et accessibilité WCAG.",
    h1: "Chatbot de site web pour le service client : widgets, transfert et accessibilité",
    intro:
      "Un chatbot de site web pour le service client est un widget de chat sur votre site ou votre centre d'aide, dans lequel un bot répond aux questions courantes, collecte les informations et transmet la conversation à un agent en direct lorsqu'il ne peut pas aider. La plupart des helpdesks fournissent leur propre widget : le vrai travail consiste donc à configurer les parcours du bot, le transfert, le comportement en dehors des heures d'ouverture et l'accessibilité.",
    keyFacts: [
      "Le Web Widget de messagerie de Zendesk s'installe en ajoutant un extrait de code à chaque page où il doit apparaître.",
      "La messagerie Zendesk peut afficher des réponses différentes pendant et en dehors des heures d'ouverture.",
      "Les agents IA de Freshdesk peuvent être configurés pour collecter les coordonnées du client avant le transfert à un humain.",
      "Les WCAG 2.2 exigent que toutes les fonctionnalités soient utilisables au clavier (2.1.1, niveau A).",
      "La technique role=\"log\" du W3C permet aux lecteurs d'écran d'annoncer les nouveaux messages de chat à mesure qu'ils arrivent.",
    ],
    sections: [
      {
        heading: "Widget natif du helpdesk ou widget sur mesure ?",
        blocks: [
          {
            type: "p",
            text: "Si vous utilisez déjà un helpdesk, commencez par son widget. Les chats arrivent dans la même file que les e-mails et les messages des réseaux sociaux, les agents répondent depuis un seul espace de travail, et l'éditeur maintient le code du widget.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (messagerie) : dans l'Admin Center, allez dans « Channels > Messaging and social > Messaging », ouvrez le widget et copiez le code de la section « Installation ». Ajoutez-le au code source de chaque page où le widget doit apparaître, et vérifiez que votre pare-feu autorise le widget.",
              "Widget web Freshchat (Freshdesk) : copiez le code d'intégration depuis les paramètres du canal de chat web et ajoutez-le à chaque page où le widget doit apparaître. Freshworks documente aussi son installation sur WordPress, Shopify, Squarespace et dans les applications iOS et Android.",
            ],
          },
          {
            type: "table",
            caption: "Choisir un widget",
            head: ["Option", "Adaptée lorsque", "Points de vigilance"],
            rows: [
              ["Widget natif du helpdesk", "Vous voulez les chats, les tickets et le reporting au même endroit", "Le style et la logique du bot se limitent à ce que l'éditeur prend en charge"],
              ["Widget natif avec un bot sur mesure", "Vous avez besoin d'une logique ou d'intégrations que le bot intégré n'offre pas", "Le transfert et la transmission du contexte doivent être câblés et testés"],
              ["Widget entièrement sur mesure", "Le chat fait partie de l'interface de votre produit", "L'accessibilité, la disponibilité et l'intégration côté agents sont à votre charge"],
            ],
          },
        ],
      },
      {
        heading: "Concevoir le transfert du bot vers un humain",
        blocks: [
          {
            type: "p",
            text: "C'est au moment du transfert que la plupart des bots de site web échouent. Un bon transfert fait passer le client à une personne sans l'obliger à se répéter. Les deux principaux helpdesks prennent en charge ce schéma :",
          },
          {
            type: "ul",
            items: [
              "Zendesk : ajouter un agent IA à un canal de messagerie remplace la réponse de messagerie par défaut par les réponses propres de l'agent IA. Dans la recette de workflow de Zendesk, l'agent IA accueille le client, affiche un formulaire pour collecter ce dont les agents ont besoin, indique au client que sa demande est transmise à l'équipe, puis transfère la conversation à un agent, qui est notifié et voit les informations en l'acceptant. La recette utilise un formulaire plus court pour les clients connectés, sans nom ni e-mail.",
              "Freshchat et Freshdesk : les parcours de bot passent la main avec des actions comme « Assign to group » ou « Make available for assignment », et les paramètres de transfert des agents IA de Freshdesk incluent une option pour collecter les coordonnées du client avant le transfert.",
            ],
          },
          {
            type: "p",
            text: "Décidez quoi collecter à partir de ce que vos agents demandent en premier. Les champs typiques sont le nom et l'e-mail pour les visiteurs non connectés, un numéro de commande ou de compte, le type de problème choisi via des boutons, une brève description dans les mots du client, et la page sur laquelle il se trouvait.",
          },
        ],
      },
      {
        heading: "Couverture en dehors des heures d'ouverture",
        blocks: [
          {
            type: "p",
            text: "Un widget qui promet « un agent va vous répondre dans un instant » à 2 h du matin fait plus de mal que pas de chat du tout. Prévoyez ce qui se passe lorsque personne n'est en ligne :",
          },
          {
            type: "ul",
            items: [
              "Définissez des heures d'ouverture : les canaux de messagerie Zendesk peuvent utiliser un planning d'heures d'ouverture et afficher des réponses différentes pendant et en dehors de ces heures.",
              "Transformez les chats en tickets : dans la recette de Zendesk, l'agent IA escalade vers un agent en direct pendant les heures d'ouverture et, en dehors, collecte les coordonnées du client et escalade la demande sous forme de ticket e-mail pour un suivi.",
              "Laissez le bot répondre à ce qu'il peut : réponses aux FAQ, consultation du statut des commandes et liens vers le centre d'aide fonctionnent à toute heure.",
              "Indiquez quand vous répondrez : donnez au client vos horaires et l'endroit où arrivera la réponse, par exemple par e-mail.",
            ],
          },
        ],
      },
      {
        heading: "Les bases de l'accessibilité pour les widgets de chat",
        blocks: [
          {
            type: "p",
            text: "Un widget de chat est un contenu interactif superposé à votre site : il doit donc atteindre le même niveau d'accessibilité que le reste de la page. Les WCAG 2.2 sont la version actuelle du W3C, et les critères de succès suivants concernent particulièrement le chat :",
          },
          {
            type: "table",
            caption: "Critères WCAG 2.2 à vérifier dans un widget de chat",
            head: ["Critère", "Niveau", "Ce que cela signifie pour un widget de chat"],
            rows: [
              ["2.1.1 Clavier", "A", "Ouvrir le widget, saisir du texte, choisir des boutons et le fermer fonctionnent sans souris"],
              ["2.4.7 Visibilité du focus", "AA", "Les utilisateurs voient quel bouton ou champ a le focus clavier"],
              ["2.4.11 Focus non masqué (minimum)", "AA", "Le lanceur ou le panneau de chat ouvert ne masque pas entièrement l'élément de la page qui a le focus"],
              ["4.1.2 Nom, rôle et valeur", "A", "Les boutons personnalisés, les menus et le lanceur exposent leur nom et leur état aux technologies d'assistance"],
              ["4.1.3 Messages d'état", "AA", "Les mises à jour comme « Message envoyé » sont annoncées sans déplacer le focus"],
            ],
          },
          {
            type: "p",
            text: "Pour la conversation elle-même, la technique ARIA23 du W3C marque l'historique du chat avec role=\"log\" : les nouveaux messages sont ajoutés à la fin de la zone et les lecteurs d'écran les annoncent à mesure qu'ils apparaissent. Avec un widget d'éditeur, testez votre propre configuration au clavier et avec un lecteur d'écran, car des couleurs personnalisées et le contenu du bot peuvent malgré tout introduire des problèmes.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "TascaLab met en place des chatbots de site web par-dessus le helpdesk que vous utilisez déjà, comme Zendesk ou Freshdesk, ou connecte un bot sur mesure à Jira, Slack ou des outils internes via des API, des webhooks et Make ou n8n. Un Starter Chat Bot (350–450 USD) couvre un ou deux canaux avec FAQ et collecte d'informations de base ; un Standard Chat Bot (500–650 USD) couvre trois à cinq canaux avec des conversations plus complexes et des transferts plus fluides. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et la plupart des mises en place prennent 1 à 3 semaines. Commencez par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ai-je besoin d'un outil de chatbot distinct si mon helpdesk a un widget ?",
        a: "Pas forcément. Zendesk et Freshdesk permettent tous deux d'associer un bot ou un agent IA à leur widget web. Un outil distinct se justifie lorsque vous avez besoin d'une logique ou d'intégrations que le bot intégré ne propose pas.",
      },
      {
        q: "Que doit collecter le bot avant de transmettre à un agent ?",
        a: "Ce que vos agents demandent en premier : généralement les coordonnées des visiteurs anonymes, un numéro de commande ou de compte, le type de problème et une brève description. Zendesk et Freshdesk permettent tous deux de collecter des informations avant le transfert.",
      },
      {
        q: "Que doit faire un chatbot de site web en dehors des heures d'ouverture ?",
        a: "Répondre à ce qu'il peut, expliquer vos horaires et transformer le reste en ticket. La recette documentée par Zendesk collecte les coordonnées du client en dehors des heures d'ouverture et escalade la demande sous forme de ticket e-mail.",
      },
      {
        q: "Quelle norme d'accessibilité s'applique à un widget de chat ?",
        a: "Les WCAG 2.2 sont la version actuelle du W3C. L'utilisation au clavier (2.1.1), la visibilité du focus (2.4.7), les noms et rôles des contrôles (4.1.2) et les messages d'état (4.1.3) concernent particulièrement le chat.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Installing the Web Widget for messaging",
        url: "https://support.zendesk.com/hc/en-us/articles/4500748175258-Installing-the-Web-Widget-for-messaging",
      },
      {
        label: "Zendesk Help Center — Configuring messaging responses and business hours",
        url: "https://support.zendesk.com/hc/en-us/articles/4500737327258-Configuring-messaging-responses-and-business-hours",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Using an AI agent to collect customer info and immediately escalate to a human agent",
        url: "https://support.zendesk.com/hc/en-us/articles/10412442245914-Workflow-recipe-Using-an-AI-agent-to-collect-customer-info-and-immediately-escalate-to-a-human-agent",
      },
      {
        label: "Freshworks Support — Install Freshchat on your web/apps",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004353-embed-the-freshchat-widget-on-your-website",
      },
      {
        label: "Freshworks Support — Gracefully handover conversations from bots to your Freshchat agents",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004659-assigning-bot-conversations-to-your-agents",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
      },
      {
        label: "W3C — ARIA23: Using role=log to identify sequential information updates",
        url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "freshdesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. SMS
  // ---------------------------------------------------------------------------
  {
    key: "sms-customer-support-automation",
    slug: "automatisation-sms-service-client",
    category: "channels",
    navLabel: "Automatisation du support par SMS",
    primaryKeyword: "automatisation SMS service client",
    title: "Automatisation SMS du service client : webhooks, 10DLC, STOP",
    description:
      "Comment fonctionne l'automatisation SMS du service client : webhooks entrants, A2P 10DLC et vérification toll-free, désinscriptions STOP, segments et tickets.",
    h1: "Automatisation SMS du service client : fonctionnement et éléments à configurer",
    intro:
      "L'automatisation SMS du service client relie un numéro de téléphone professionnel à du code qui lit les SMS entrants, répond aux questions simples et transforme tout le reste en tickets. Avec un fournisseur comme Twilio Programmable Messaging, chaque SMS entrant est envoyé à votre webhook et votre code répond via l'API. Aux États-Unis, vous devez aussi enregistrer le numéro et respecter les désinscriptions STOP, sinon vos messages sont bloqués.",
    keyFacts: [
      "Twilio envoie chaque SMS entrant à l'URL de votre webhook avec des champs comme From, To, Body et MessageSid.",
      "Selon Twilio, les opérateurs américains considèrent tout message envoyé depuis une plateforme comme Twilio comme du trafic application-to-person (A2P).",
      "Les messages provenant de numéros 10DLC américains non enregistrés sont bloqués avec l'erreur 30034, même pendant que l'enregistrement est en attente.",
      "Twilio gère par défaut STOP et les autres mots-clés de désinscription standard sur les numéros long code.",
      "Un segment SMS GSM-7 contient 160 caractères ; un segment UCS-2, nécessaire pour les emoji, en contient 70.",
    ],
    sections: [
      {
        heading: "Comment fonctionne l'automatisation du support par SMS",
        blocks: [
          {
            type: "p",
            text: "Vous obtenez un numéro de téléphone auprès d'un fournisseur SMS, faites pointer son webhook de messages entrants vers votre code, et envoyez les réponses via l'API du fournisseur. Avec Twilio Programmable Messaging, chaque SMS envoyé à votre numéro devient une requête HTTP vers l'URL de votre webhook. La requête contient l'expéditeur dans From, votre numéro dans To, le texte du message dans Body (jusqu'à 1 600 caractères) et un MessageSid de 34 caractères qui permet de récupérer le message plus tard via l'API REST.",
          },
          {
            type: "p",
            text: "Votre endpoint répond en TwiML, le format XML de Twilio qui lui indique quoi faire ensuite, par exemple envoyer une réponse. Si votre helpdesk répondra plus tard et que le bot n'a rien à dire, renvoyez un élément Response vide pour que Twilio accepte le message sans répondre.",
          },
          {
            type: "ol",
            items: [
              "Le client envoie un SMS à votre numéro de support.",
              "Twilio envoie le message à votre webhook.",
              "Votre bot répond immédiatement à une question courante ou demande des informations comme un numéro de commande.",
              "Tout ce que le bot ne peut pas résoudre devient un ticket dans votre helpdesk, rattaché au numéro de téléphone du client.",
              "Les réponses des agents repartent vers le client par SMS depuis le même numéro.",
            ],
          },
        ],
      },
      {
        heading: "Enregistrement aux États-Unis : A2P 10DLC et Toll-Free Verification",
        blocks: [
          {
            type: "p",
            text: "D'après la documentation de Twilio, les opérateurs américains considèrent tout message envoyé depuis une plateforme comme Twilio comme du trafic application-to-person (A2P). Si vous envoyez des SMS ou des MMS vers des numéros américains depuis un long code standard à 10 chiffres (10DLC), vous devez vous enregistrer pour l'A2P 10DLC. L'enregistrement comporte deux parties : une marque (brand), qui indique aux opérateurs qui envoie, et une campagne (campaign), qui décrit le cas d'usage et la manière dont les personnes donnent leur consentement, se désinscrivent et obtiennent de l'aide. Une fois la campagne approuvée, vous ajoutez votre numéro au Messaging Service qui lui est associé.",
          },
          {
            type: "p",
            text: "L'enregistrement n'est pas une simple formalité. Twilio bloque les messages à destination des États-Unis provenant de numéros 10DLC qui ne sont pas rattachés à une campagne approuvée, y compris les numéros dont l'enregistrement est encore en attente, et ses tarifs de messagerie s'appliquent malgré tout aux messages bloqués. Les numéros toll-free (numéros gratuits) passent par un processus distinct appelé Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Ce que Twilio exige avant d'envoyer des SMS à des clients américains",
            head: ["Type d'expéditeur", "Exigence", "Ce qui se passe sans elle"],
            rows: [
              ["Long code 10DLC", "Marque et campagne A2P 10DLC approuvées, avec le numéro dans le Messaging Service de la campagne", "Les messages sont bloqués avec l'erreur 30034"],
              ["10DLC, entrepreneur individuel", "Même enregistrement, mais une campagne sole proprietor ne peut avoir qu'un seul numéro 10DLC enregistré", "Les numéros supplémentaires du Messaging Service restent non enregistrés"],
              ["Numéro toll-free", "Toll-Free Verification approuvée", "Les messages vers les numéros mobiles américains et canadiens échouent avec l'erreur 30032"],
            ],
          },
        ],
      },
      {
        heading: "Mots-clés STOP, désinscriptions et consentement",
        blocks: [
          {
            type: "p",
            text: "Twilio gère pour vous les mots-clés de désinscription standard en anglais sur les numéros long code. Sa documentation liste STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT et CANCEL, reconnus sans tenir compte de la casse. Twilio envoie une confirmation standard, et vos messages cessent d'atteindre ce numéro jusqu'à ce que le client envoie START. Sur les numéros toll-free, seuls START et UNSTOP réabonnent un client. Advanced Opt-Out, désactivé par défaut, permet de personnaliser les mots-clés et les réponses sur un Messaging Service, mais les mots-clés réservés comme START ne peuvent pas être supprimés.",
          },
          {
            type: "p",
            text: "Assurez-vous que votre bot n'envoie plus rien à un client qui s'est désinscrit. Les règles américaines couvrent aussi ce point. La décision de la FCC de 2024 (FCC 24-24) indique que les consommateurs peuvent révoquer leur consentement aux robocalls et aux robotexts par tout moyen raisonnable, qu'une réponse comme stop, quit, end, revoke, opt out, cancel ou unsubscribe est considérée comme raisonnable, et que les révocations doivent être prises en compte dans un délai raisonnable ne dépassant pas dix jours ouvrés. En 2026, la FCC a adopté une nouvelle décision (FCC 26-67) qui permet aux appelants de désigner une méthode de révocation automatisée unique, comme une réponse par SMS avec des mots standard tels que stop, quit ou unsubscribe, à condition que cette méthode soit clairement indiquée, et qui sollicite des commentaires sur un raccourcissement du délai. Vérifiez quelle version des règles est en vigueur au moment de votre lancement.",
          },
          {
            type: "note",
            text: "Ceci est un résumé du texte de la règle de la FCC, pas un conseil juridique. Vérifiez les règles en vigueur avec votre propre conseil juridique avant d'envoyer des SMS automatisés à des clients américains.",
          },
        ],
      },
      {
        heading: "Longueur des messages et segments",
        blocks: [
          {
            type: "p",
            text: "Les SMS sont envoyés par segments, et chaque segment est facturé : la longueur des réponses de votre bot influe donc sur le coût. La documentation de Twilio donne ces limites :",
          },
          {
            type: "table",
            caption: "Tailles des segments SMS selon la documentation de Twilio",
            head: ["Encodage", "Message unique", "Par segment en cas de découpage", "Quand il est utilisé"],
            rows: [
              ["GSM-7", "160 caractères", "153 caractères", "Texte qui n'utilise que le jeu de caractères GSM-7"],
              ["UCS-2", "70 caractères", "67 caractères", "Tout message comportant au moins un caractère hors GSM-7, comme un emoji"],
            ],
          },
          {
            type: "p",
            text: "Un seul caractère hors GSM-7 fait passer tout le message en UCS-2, pas seulement ce caractère. Les emoji, les guillemets typographiques et les tirets longs en sont des causes fréquentes, ce qui compte lorsqu'un bot copie des réponses depuis des articles du centre d'aide. Le Smart Encoding de Twilio peut remplacer certains de ces caractères par des équivalents GSM-7. Le texte d'un message sortant peut atteindre 1 600 caractères, mais des réponses courtes avec un lien vers l'article complet fonctionnent généralement mieux.",
          },
        ],
      },
      {
        heading: "Connecter les SMS à votre helpdesk",
        blocks: [
          {
            type: "p",
            text: "Zendesk propose les SMS sous le nom de Zendesk Text. Un SMS envoyé à votre numéro Text crée automatiquement un ticket, et les réponses publiques sur ce ticket repartent vers le client sous forme de SMS. Zendesk précise aussi que les SMS envoyés à des consommateurs américains depuis des numéros non enregistrés seront bloqués : l'enregistrement A2P 10DLC s'applique donc là aussi.",
          },
          {
            type: "p",
            text: "Si votre helpdesk n'a pas de canal SMS, ou si vous avez besoin d'une logique que le canal intégré ne propose pas, un petit service intermédiaire peut s'en charger. Il reçoit le webhook Twilio, exécute le bot, crée ou met à jour les tickets via l'API du helpdesk, et renvoie les réponses des agents via Twilio.",
          },
        ],
      },
      {
        heading: "Comment TascaLab peut vous aider",
        blocks: [
          {
            type: "p",
            text: "Les canaux de bot proposés par TascaLab sont le site web, le téléphone, WhatsApp, Telegram, Facebook Messenger et Instagram. Le SMS n'en fait pas partie, mais d'autres canaux dotés d'une API peuvent être étudiés lors de l'appel d'audit gratuit de 30 minutes. TascaLab construit par-dessus les outils que vous utilisez déjà, comme Zendesk, Freshdesk, Jira et Slack, via des API, des webhooks et Make ou n8n. Un Starter Chat Bot coûte 350–450 USD pour un ou deux canaux et un Standard Chat Bot 500–650 USD pour trois à cinq. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et la plupart des mises en place prennent 1 à 3 semaines.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ai-je besoin d'un enregistrement A2P 10DLC pour un bot de support par SMS ?",
        a: "Oui, si vous envoyez des SMS ou des MMS vers des numéros américains depuis un long code à 10 chiffres via une plateforme comme Twilio. Twilio bloque les messages à destination des États-Unis provenant de numéros 10DLC non enregistrés avec l'erreur 30034, y compris pendant que l'enregistrement est en attente.",
      },
      {
        q: "Que se passe-t-il lorsqu'un client envoie STOP ?",
        a: "Sur les numéros long code, Twilio gère par défaut STOP et les autres mots-clés de désinscription standard. Il envoie une confirmation, et vos messages cessent d'atteindre ce numéro jusqu'à ce que le client envoie START.",
      },
      {
        q: "Pourquoi un message court a-t-il compté pour deux segments ?",
        a: "Il contenait probablement un caractère hors GSM-7, comme un emoji ou un guillemet typographique. Cela fait passer tout le message en UCS-2, qui ne permet que 70 caractères dans un segment unique.",
      },
      {
        q: "Puis-je utiliser un numéro toll-free au lieu d'un numéro 10DLC ?",
        a: "Oui, mais il nécessite la Toll-Free Verification. Tant qu'elle n'est pas approuvée, les messages vers les numéros mobiles américains et canadiens échouent avec l'erreur 30032.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — Twilio's request to your incoming message Webhook URL",
        url: "https://www.twilio.com/docs/messaging/guides/webhook-request",
      },
      {
        label: "Twilio Docs — Programmable Messaging and A2P 10DLC",
        url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc",
      },
      {
        label: "Twilio Docs — Error 30034: US A2P 10DLC - Message from an Unregistered Number",
        url: "https://www.twilio.com/docs/api/errors/30034",
      },
      {
        label: "Twilio Docs — Error 30032: Toll-Free Number Has Not Been Verified",
        url: "https://www.twilio.com/docs/api/errors/30032",
      },
      {
        label: "Twilio Docs — Customize users' opt-in and opt-out experience with Advanced Opt-Out",
        url: "https://www.twilio.com/docs/messaging/tutorials/advanced-opt-out",
      },
      {
        label: "Twilio Docs — How long can a message be?",
        url: "https://www.twilio.com/docs/glossary/what-sms-character-limit",
      },
      {
        label: "FCC — FCC 24-24 Report and Order on revoking consent under the TCPA",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      },
      {
        label: "FCC — FCC 26-67 Report and Order on revocation of consent (2026)",
        url: "https://docs.fcc.gov/public/attachments/FCC-26-67A1.pdf",
      },
      {
        label: "Zendesk Help Center — Getting started with Text",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823788314-Getting-started-with-Text",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "zendesk-automation",
      "omnichannel-customer-support",
    ],
    updated: "2026-10-19",
  },
];
