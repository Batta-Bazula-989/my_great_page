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
];
