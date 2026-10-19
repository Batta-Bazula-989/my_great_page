import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "chatbot-ia-service-client",
    category: "services",
    navLabel: "Chatbot IA pour le support",
    primaryKeyword: "chatbot IA service client",
    title: "Chatbot IA service client : fonctionnement | TascaLab",
    description:
      "Comment un chatbot IA de service client répond aux FAQ, collecte les infos et passe la main aux agents — et se connecte à Zendesk ou Freshdesk via API.",
    h1: "Chatbot IA pour le service client : ce qu'il fait et comment il se connecte à votre helpdesk",
    intro:
      "Un chatbot IA pour le service client répond aux questions courantes à partir de votre contenu d'aide, collecte les informations dont un agent aura besoin et transmet la conversation à une personne lorsqu'il ne peut pas aider ou que le client le demande. Il fonctionne au mieux comme une couche au-dessus de votre helpdesk existant : le bot gère le premier échange, et tout ce qu'il ne peut pas résoudre devient un ticket avec l'ensemble du contexte joint.",
    keyFacts: [
      "Les agents IA de Zendesk génèrent leurs réponses à partir des sources de connaissances connectées et se rabattent sur une réponse par défaut lorsqu'ils ne trouvent rien de pertinent.",
      "Les AI Agents de Freshdesk peuvent transférer automatiquement une conversation à un humain lorsque le client emploie des expressions listées par l'administrateur.",
      "Dans la messagerie Zendesk, un bot tiers passe la main en cédant le contrôle à l'Agent Workspace, ce qui rend la conversation éligible à l'attribution.",
      "En vertu de l'article 50 du règlement européen sur l'IA (AI Act), à partir du 2 août 2026, les chatbots doivent indiquer aux personnes qu'elles interagissent avec une IA, sauf si c'est évident.",
    ],
    sections: [
      {
        heading: "Ce que fait réellement un chatbot de support",
        blocks: [
          {
            type: "p",
            text: "La plupart des chatbots de support remplissent trois missions, et une quatrième est facultative. Mieux vaut les cadrer séparément, car chacune dépend d'éléments différents pour bien fonctionner.",
          },
          {
            type: "table",
            caption: "Les missions principales d'un chatbot de service client",
            head: ["Mission", "Exemple", "Ce dont elle dépend"],
            rows: [
              [
                "Répondre aux questions courantes",
                "Horaires d'ouverture, politique de retour, délais de livraison, procédures pas à pas",
                "Des articles d'aide exacts et à jour, ou une liste de questions-réponses validée",
              ],
              [
                "Collecter des informations",
                "Numéro de commande, e-mail du compte, appareil, photo du problème",
                "Une liste définie de champs correspondant aux champs de ticket de votre helpdesk",
              ],
              [
                "Passer la main à une personne",
                "Transfert en direct vers un agent, ou ticket créé avec la transcription",
                "Un circuit de transfert vers votre helpdesk et des règles claires sur le moment de l'utiliser",
              ],
              [
                "Exécuter des actions simples (facultatif)",
                "Consulter le statut d'une commande ou d'une réservation",
                "Un accès API au système qui détient les données",
              ],
            ],
          },
          {
            type: "p",
            text: "Les bots basés sur un LLM génèrent leurs réponses à partir de votre contenu de connaissances au lieu de suivre des scripts écrits à la main. Zendesk, par exemple, décrit la « Knowledge reply » de ses agents IA comme une recherche dans les sources de connaissances connectées pour générer une réponse, avec un repli sur une réponse par défaut lorsque rien de pertinent n'apparaît. La conséquence pratique est simple : le bot ne vaut que le contenu à partir duquel il répond. Les lacunes et les articles obsolètes se traduisent par des réponses fausses ou vagues.",
          },
          {
            type: "p",
            text: "La collecte d'informations est souvent sous-estimée. Même lorsque le bot ne peut pas résoudre le problème, demander d'emblée le numéro de commande, l'e-mail du compte et une brève description évite le premier aller-retour qu'un agent aurait sinon dû faire.",
          },
        ],
      },
      {
        heading: "Le transfert : ce sur quoi les clients jugent le bot",
        blocks: [
          {
            type: "p",
            text: "Un bot qui empêche de joindre un humain abîme vite la confiance. Décidez à l'avance quelles situations mettent fin à la partie automatisée de la conversation :",
          },
          {
            type: "ul",
            items: [
              "Le client demande à parler à une personne. Les paramètres de transfert des AI Agents de Freshdesk, par exemple, permettent aux administrateurs de lister des expressions qui transfèrent automatiquement la conversation, d'afficher un message avant le transfert et, en option, de collecter d'abord les coordonnées du client.",
              "Le bot échoue à répétition. Zendesk permet de configurer un agent IA pour qu'il escalade vers un humain lorsqu'il ne parvient pas à générer de réponse à partir des sources de connaissances connectées après plusieurs tentatives.",
              "Le sujet est sensible ou hors périmètre. Freshdesk cite des demandes comme la facturation ou les remboursements, ainsi que les questions qui sortent du périmètre configuré de l'agent, parmi les déclencheurs de transfert typiques.",
              "Personne n'est en ligne. En dehors des heures d'ouverture, le bot doit le dire clairement et créer un ticket plutôt que promettre un agent en direct.",
            ],
          },
          {
            type: "p",
            text: "Quel que soit le déclencheur, l'agent doit recevoir la transcription et les champs collectés pour que le client n'ait rien à répéter. Lorsqu'un bot tiers cède le contrôle à l'Agent Workspace de Zendesk via le switchboard de Sunshine Conversations, la conversation devient éligible à l'attribution à un agent, et le bot peut inclure des métadonnées qui remplissent des champs du ticket qui en résulte.",
          },
        ],
      },
      {
        heading: "Agents IA natifs du helpdesk ou bot sur mesure",
        blocks: [
          {
            type: "p",
            text: "Zendesk et Freshdesk proposent tous deux leurs propres agents IA. Si vos conversations passent déjà par le widget de messagerie de ce helpdesk et que votre centre d'aide répond à la plupart des questions, l'option native est la plus rapide pour démarrer. Un bot sur mesure connecté via l'API est l'alternative lorsque vous avez besoin de quelque chose que le bot natif ne couvre pas.",
          },
          {
            type: "table",
            caption: "Chatbot de support natif ou sur mesure",
            head: ["", "Agent IA natif du helpdesk", "Bot sur mesure connecté via API"],
            rows: [
              [
                "Mise en place",
                "Configuré dans l'administration du helpdesk, avec son centre d'aide comme source de connaissances",
                "Construit sur une infrastructure distincte et connecté au helpdesk via son API et ses webhooks",
              ],
              [
                "Canaux",
                "Ceux que le produit de messagerie du helpdesk prend en charge avec votre offre",
                "Tout canal doté d'une API que vous pouvez connecter, comme WhatsApp, Telegram ou Messenger",
              ],
              [
                "Logique",
                "Limitée au constructeur de flux et aux paramètres IA de l'éditeur",
                "Vos propres règles, des recherches dans les systèmes internes, des formulaires en plusieurs étapes",
              ],
              [
                "Licences",
                "Inclus dans votre abonnement helpdesk ou en module complémentaire ; vérifiez votre offre",
                "Coûts distincts pour la plateforme du bot et pour l'utilisation éventuelle d'un modèle d'IA",
              ],
              [
                "Maintenance",
                "L'éditeur maintient la plateforme",
                "Quelqu'un doit maintenir l'intégration quand les API changent",
              ],
            ],
          },
          {
            type: "p",
            text: "Aucune des deux options n'est meilleure par défaut. Un ordre raisonnable consiste à vérifier d'abord ce que couvre l'agent natif, puis à ne développer sur mesure que pour le manque précis : un canal, une recherche de données ou une règle de transfert que l'outil natif ne sait pas exprimer.",
          },
        ],
      },
      {
        heading: "Comment un bot sur mesure se branche sur votre helpdesk",
        blocks: [
          {
            type: "p",
            text: "Il existe deux schémas d'intégration courants, et beaucoup de configurations utilisent les deux.",
          },
          {
            type: "ol",
            items: [
              "Créer un ticket au moment du transfert. Le bot fonctionne sur sa propre connexion au canal et, lorsqu'une personne est nécessaire, crée un ticket via l'API REST du helpdesk avec la transcription et les informations collectées. Dans la Tickets API de Zendesk, un commentaire est le seul champ obligatoire pour créer un ticket, et vous pouvez envoyer une clé d'idempotence pour qu'une requête relancée ne crée pas de doublon. L'endpoint POST /api/v2/tickets de Freshdesk accepte les champs personnalisés sous forme de paires clé–valeur et crée un nouveau contact lorsque l'e-mail du demandeur n'est pas encore connu.",
              "Partager la conversation dans la messagerie du helpdesk. Dans Zendesk, un bot tiers peut être installé comme répondant de messagerie ; un seul bot à la fois peut occuper le rôle de répondant par défaut. Le bot répond en premier et utilise l'action « pass control » du switchboard pour transmettre la conversation à l'Agent Workspace lorsqu'un humain est nécessaire.",
            ],
          },
          {
            type: "p",
            text: "Les webhooks assurent le trajet retour. Un déclencheur Zendesk peut appeler un endpoint externe via une action « Notify webhook » — par exemple pour signaler au bot qu'un agent a résolu le ticket, afin qu'il puisse boucler la boucle sur le canal d'origine.",
          },
          {
            type: "note",
            text: "Gardez une seule source de vérité pour les réponses. Si le bot répond à partir d'un document séparé qui s'éloigne peu à peu de votre centre d'aide, les clients obtiennent des réponses contradictoires selon l'endroit où ils posent leur question.",
          },
        ],
      },
      {
        heading: "Indiquer aux clients qu'ils parlent à un bot",
        blocks: [
          {
            type: "p",
            text: "Si vous servez des clients dans l'UE, l'article 50 de l'AI Act s'applique à partir du 2 août 2026. Selon la FAQ de la Commission européenne, les fournisseurs doivent concevoir les systèmes tels que les chatbots de sorte que les personnes soient informées qu'elles interagissent avec une IA dès le début de la première interaction, de manière claire et reconnaissable. L'exception, lorsque c'est évident pour une personne raisonnablement bien informée, doit être interprétée de façon restrictive, précise la Commission.",
          },
          {
            type: "p",
            text: "La façon la plus directe de gérer cela est une phrase claire dans le message d'accueil du bot, plus un moyen visible de joindre une personne. Les transcriptions contiennent aussi souvent des données personnelles : décidez combien de temps la plateforme du bot les conserve et qui peut y accéder.",
          },
        ],
      },
      {
        heading: "Comment TascaLab construit des chatbots de support",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des chatbots par-dessus les outils que vous utilisez déjà — Zendesk, Freshdesk, Jira, Slack ou des systèmes internes — via leurs API, leurs webhooks et Make ou n8n, sans changement de plateforme. Le bot est conçu comme un filtre devant votre équipe, pas comme un remplaçant : il répond à ce qu'il peut, collecte les informations et transmet le reste avec le contexte.",
          },
          {
            type: "table",
            caption: "Offres chatbot TascaLab (prix unique)",
            head: ["Offre", "Périmètre", "Prix (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 canaux, FAQ, collecte d'informations de base", "350–450 USD"],
              [
                "Standard Chat Bot",
                "3–5 canaux, conversations plus complexes, transferts plus fluides",
                "500–650 USD",
              ],
            ],
          },
          {
            type: "p",
            text: "Canaux disponibles : site web, WhatsApp, Telegram, Facebook Messenger et Instagram, plus le téléphone via le callbot. La plupart des mises en place prennent 1 à 3 semaines, et chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés. Un appel d'audit gratuit de 30 minutes est le point de départ.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Un chatbot IA va-t-il remplacer mes agents de support ?",
        a: "Il ne devrait pas être conçu pour cela. Un bot de support est surtout utile pour traiter les questions répétitives et collecter les informations, puis transmettre tout le reste à des personnes avec la conversation jointe.",
      },
      {
        q: "Le chatbot a-t-il besoin de sa propre base de connaissances ?",
        a: "Généralement non. Les bots de support IA répondent en principe à partir de votre centre d'aide existant ou d'une liste de questions-réponses validée — les agents IA de Zendesk, par exemple, génèrent leurs réponses à partir des sources de connaissances connectées. Garder une seule source évite les réponses contradictoires.",
      },
      {
        q: "Un chatbot sur mesure peut-il créer des tickets dans Zendesk ou Freshdesk ?",
        a: "Oui. Les deux helpdesks exposent un endpoint REST de création de tickets (POST /api/v2/tickets), si bien qu'un bot peut ouvrir un ticket avec la transcription et les champs collectés au moment du transfert.",
      },
      {
        q: "Dois-je indiquer aux clients qu'ils parlent à un bot ?",
        a: "Dans l'UE, l'article 50 de l'AI Act impose aux chatbots, à partir du 2 août 2026, d'informer les personnes qu'elles interagissent avec une IA, sauf si c'est évident. Le dire dans le premier message du bot est l'approche la plus simple.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Customizing the Knowledge reply in an AI agent with agentic AI",
        url: "https://support.zendesk.com/hc/en-us/articles/10448933203994-Customizing-the-Knowledge-reply-in-an-AI-agent-with-agentic-AI",
      },
      {
        label: "Zendesk Help Center — Managing third-party bots in Admin Center",
        url: "https://support.zendesk.com/hc/en-us/articles/5064149334426-Managing-third-party-bots-in-Admin-Center",
      },
      {
        label: "Zendesk Developer Docs — Switchboard",
        url: "https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/",
      },
      {
        label: "Zendesk Developer Docs — Tickets API",
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Developers — API reference (Create a ticket)",
        url: "https://developers.freshdesk.com/api/",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["chatbot-to-human-handoff", "website-chatbot-for-support", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. AI voice bot for customer service
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-voice-bot-for-customer-service",
    slug: "callbot-ia-service-client",
    category: "services",
    navLabel: "Callbot IA (support téléphonique)",
    primaryKeyword: "callbot IA service client",
    title: "Callbot IA service client : fonctionnement | TascaLab",
    description:
      "Comment fonctionne un callbot IA de service client : téléphonie, speech-to-text, logique IA et synthèse vocale, transfert d'appel, SVI vs bot et règles FCC.",
    h1: "Callbot IA pour le service client : comment fonctionne l'automatisation des appels entrants",
    intro:
      "Un callbot IA pour le service client répond aux appels entrants, identifie ce dont l'appelant a besoin, traite les demandes simples ou collecte les informations, et transfère l'appel à une personne quand il le faut. Techniquement, il enchaîne quatre briques — téléphonie, speech-to-text, un modèle de langage ou une logique de dialogue, et text-to-speech — et le transfert vers votre équipe compte autant que le naturel de la voix.",
    keyFacts: [
      "Un SVI (IVR) traditionnel fonctionne avec des touches (DTMF) ; le verbe Gather de Twilio utilise le DTMF par défaut et doit être configuré pour accepter la parole afin de transcrire les appelants.",
      "Les Media Streams bidirectionnels de Twilio transportent l'audio de l'appel en mu-law 8 kHz sur un seul canal, encodé en base64, via un WebSocket.",
      "Zendesk permet à un agent IA vocal externe de répondre d'abord aux appels et d'escalader vers un agent en direct via une ligne SIP-IN.",
      "La décision de la FCC de février 2024 considère les voix générées par IA comme « artificial » (artificielles) au sens du TCPA : les appels qui les utilisent exigent donc en général un consentement exprès préalable.",
    ],
    sections: [
      {
        heading: "Comment fonctionne un callbot pour les appels entrants",
        blocks: [
          {
            type: "p",
            text: "Tout callbot pour appels entrants exécute la même boucle, quels que soient les fournisseurs utilisés :",
          },
          {
            type: "ol",
            items: [
              "Téléphonie. L'appel arrive sur un numéro de téléphone ou un trunk SIP, et le fournisseur de téléphonie le transmet à votre application — soit en demandant des instructions d'appel à votre serveur, soit en lui envoyant l'audio en streaming.",
              "Speech-to-text. Les paroles de l'appelant sont transcrites. Lorsque le verbe Gather de Twilio est configuré pour accepter la parole, Twilio envoie la transcription (SpeechResult) accompagnée d'un score Confidence à votre URL « action ».",
              "Compréhension et logique. Un modèle de langage ou un dialogue à base de règles détermine ce que veut l'appelant et la suite à donner : répondre, poser une question complémentaire, consulter une information via une API, ou transférer.",
              "Text-to-speech. La réponse est synthétisée en audio et diffusée à l'appelant.",
              "Recommencer ou passer la main. La boucle se poursuit jusqu'à ce que la demande soit traitée ou l'appel transféré, et le résultat est consigné dans votre helpdesk.",
            ],
          },
          {
            type: "p",
            text: "Il existe deux façons principales de câbler l'ensemble. Dans une configuration au tour par tour, la plateforme recueille un énoncé à la fois et votre serveur répond par de nouvelles instructions ; Twilio, par exemple, poursuit l'appel avec le TwiML que renvoie votre URL « action ». Dans une configuration en streaming, l'audio circule en continu sur un WebSocket : les Media Streams bidirectionnels de Twilio, lancés avec les instructions TwiML Connect et Stream, transmettent de l'audio mu-law encodé en base64 à 8 000 Hz sur un seul canal, et votre serveur renvoie de l'audio dans le même format.",
          },
          {
            type: "p",
            text: "Des couches gérées s'intercalent entre les deux. ConversationRelay de Twilio, par exemple, prend lui-même en charge le speech-to-text et le text-to-speech et échange du texte avec votre serveur via un WebSocket sécurisé : votre code manipule des mots plutôt que de l'audio brut. Il propose aussi des réglages pour les interruptions, car les appelants parlent par-dessus les bots ; dans une configuration Media Streams brute, votre serveur envoie un message « clear » pour supprimer l'audio en mémoire tampon qui n'a pas encore été joué.",
          },
        ],
      },
      {
        heading: "SVI ou callbot conversationnel",
        blocks: [
          {
            type: "table",
            caption: "Un menu SVI comparé à un callbot conversationnel",
            head: ["", "SVI traditionnel", "Callbot conversationnel"],
            rows: [
              ["Saisie de l'appelant", "Touches (DTMF) sur un menu fixe", "Parole naturelle, transcrite et interprétée"],
              [
                "Structure",
                "Arborescence de menus : « tapez 1 pour la facturation, 2 pour les commandes »",
                "Question ouverte comme « Comment puis-je vous aider ? », suivie de la détection d'intention",
              ],
              [
                "Adapté à",
                "Un petit nombre d'options de routage prévisibles",
                "De nombreuses demandes différentes, et la collecte d'informations dans les mots de l'appelant",
              ],
              [
                "Points faibles",
                "Menus longs, et appelants dont le problème ne correspond à aucune option",
                "Erreurs de compréhension sur les lignes bruyantes ; nécessite des étapes de confirmation et des solutions de repli",
              ],
              [
                "Ce que vous apprenez",
                "Le chemin de menu choisi par l'appelant",
                "Une transcription, l'intention détectée et les champs collectés",
              ],
            ],
          },
          {
            type: "p",
            text: "Vous n'êtes pas obligé de choisir. Une option consiste à proposer un court menu à touches pour le choix de la langue, suivi d'une étape conversationnelle. Avec le verbe Gather de Twilio, la saisie peut être configurée pour accepter à la fois les touches et la parole dans la même invite.",
          },
        ],
      },
      {
        heading: "Transférer l'appel à une personne",
        blocks: [
          {
            type: "p",
            text: "Les plateformes de téléphonie distinguent deux types de transfert. Dans la terminologie de Twilio, un transfert à froid (cold transfer) ajoute le nouveau participant à l'appel, mais l'initiateur quitte l'appel avant que le nouveau participant ne réponde ; un transfert à chaud (warm transfer) permet aux trois de se parler avant que l'initiateur ne parte. Twilio recommande de relier clients et agents via une conférence, ce qui rend ces deux schémas possibles.",
          },
          {
            type: "p",
            text: "Pour un bot, la version utile du transfert à chaud consiste à transmettre le contexte plutôt qu'à parler : créer ou mettre à jour un ticket avec la transcription, l'intention détectée et les informations collectées avant que l'agent ne décroche, pour qu'il ne parte pas de zéro. Les bons moments pour transférer :",
          },
          {
            type: "ul",
            items: [
              "L'appelant demande à parler à une personne — accédez à sa demande immédiatement, pas après deux questions de plus.",
              "Le bot a mal compris l'appelant deux fois de suite.",
              "La demande concerne des paiements, des réclamations ou tout ce que le bot n'est pas autorisé à trancher.",
              "L'appelant est un client connu à haute priorité, si votre routage fait cette distinction.",
            ],
          },
          {
            type: "p",
            text: "Dans Zendesk, un agent IA vocal externe peut répondre d'abord à un appel et l'escalader vers un agent Zendesk via une ligne SIP-IN. Le bot peut créer un ticket et le lier à l'appel en transmettant le numéro du ticket dans l'en-tête SIP X-Zendesk-Ticket-Id ; Zendesk authentifie les appels SIP-IN au moyen de listes de contrôle d'accès IP. Zendesk propose aussi ses propres agents IA vocaux, qui ajoutent au ticket la transcription, un résumé généré par IA et l'intention détectée lorsqu'ils escaladent.",
          },
        ],
      },
      {
        heading: "Réglementation : ce qui s'applique aux callbots",
        blocks: [
          {
            type: "p",
            text: "États-Unis. En février 2024, la FCC a publié une décision déclaratoire (Declaratory Ruling FCC 24-17) confirmant que les restrictions du TCPA sur les appels utilisant une « artificial or prerecorded voice » (voix artificielle ou préenregistrée) couvrent les technologies d'IA actuelles qui génèrent des voix humaines. Les appels qui les utilisent exigent donc en général le consentement exprès préalable de la personne appelée, sauf finalité d'urgence ou exemption applicable. La décision concerne les appels passés vers des consommateurs, comme les robocalls. Un bot qui répond aux appels que vos clients vous passent relève d'une autre situation, mais tous les appels sortants passés par le bot — rappels, relances, enquêtes — sont soumis à ces règles.",
          },
          {
            type: "p",
            text: "Union européenne. L'article 50 du règlement européen sur l'IA (AI Act) s'applique à partir du 2 août 2026 et exige que les systèmes d'IA qui interagissent directement avec des personnes soient conçus de sorte que celles-ci sachent qu'elles ont affaire à une IA, sauf si c'est évident. La FAQ de la Commission précise que les personnes doivent être informées dès le début de la première interaction. Pour un callbot, la réponse pratique est une courte mention dans le message d'accueil.",
          },
          {
            type: "note",
            text: "Ces informations sont générales et ne constituent pas un conseil juridique. Si votre bot passe des appels sortants ou si vous opérez dans un secteur réglementé, vérifiez les règles qui s'appliquent à vous.",
          },
        ],
      },
      {
        heading: "Les choix de conception qui font ou défont un callbot",
        blocks: [
          {
            type: "ul",
            items: [
              "Annoncez la couleur et fixez les attentes en une phrase : c'est un assistant automatisé, et voici ce pour quoi il peut aider.",
              "Gardez des invites courtes et ne demandez qu'une chose à la fois ; les appelants ne peuvent pas revenir en arrière.",
              "Relisez à voix haute les numéros, adresses e-mail et identifiants de commande avant d'agir dessus.",
              "Indiquez aux appelants comment joindre une personne, et faites en sorte que ce chemin fonctionne à chaque étape.",
              "Consignez chaque appel dans votre helpdesk avec la transcription et le résultat, pour voir pourquoi les gens appellent réellement.",
              "Prévoyez les heures de fermeture : prenez les informations et créez un ticket, et ne promettez un rappel que si quelqu'un va réellement le passer.",
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab construit des callbots",
        blocks: [
          {
            type: "p",
            text: "L'offre Voice Bot de TascaLab couvre les appels entrants, le tri et le transfert vers votre équipe, pour un prix unique de 1 100–1 600 USD. Le bot se connecte aux outils que vous utilisez déjà — Zendesk, Freshdesk, Jira, Slack ou des systèmes internes — via des API et des webhooks, si bien que les résultats des appels arrivent sous forme de tickets ou de messages que votre équipe suit déjà. Il est conçu comme un filtre devant votre équipe, pas comme un remplaçant.",
          },
          {
            type: "p",
            text: "La plupart des mises en place prennent 1 à 3 semaines. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre un SVI et un callbot IA ?",
        a: "Un SVI oriente les appelants dans un menu fixe, généralement avec des touches (DTMF). Un callbot conversationnel transcrit ce que dit l'appelant, en déduit l'intention, et peut répondre, collecter des informations ou transférer l'appel.",
      },
      {
        q: "Un callbot peut-il transférer les appels à un agent en direct ?",
        a: "Oui. Les plateformes de téléphonie prennent en charge les transferts à froid, où le bot se retire avant que l'agent ne réponde, et les transferts à chaud, où les participants se chevauchent. Dans Zendesk, un agent IA vocal externe peut escalader vers un agent en direct via une ligne SIP-IN.",
      },
      {
        q: "La FCC interdit-elle les callbots IA ?",
        a: "Non. Sa décision de février 2024 indique que les voix générées par IA sont « artificial » (artificielles) au sens du TCPA, si bien que les appels qui les utilisent exigent en général le consentement exprès préalable de la personne appelée. Elle concerne les appels passés vers des consommateurs : elle compte donc surtout si votre bot passe des appels sortants.",
      },
      {
        q: "Dois-je dire aux appelants qu'ils parlent à un bot ?",
        a: "Dans l'UE, l'article 50 de l'AI Act impose, à partir du 2 août 2026, d'informer les personnes lorsqu'elles interagissent directement avec un système d'IA, sauf si c'est évident. Une mention d'une phrase dans le message d'accueil est la façon simple de gérer ce point.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — TwiML Voice: Gather",
        url: "https://www.twilio.com/docs/voice/twiml/gather",
      },
      {
        label: "Twilio Docs — Media Streams Overview",
        url: "https://www.twilio.com/docs/voice/media-streams",
      },
      {
        label: "Twilio Docs — TwiML Voice: ConversationRelay",
        url: "https://www.twilio.com/docs/voice/twiml/connect/conversationrelay",
      },
      {
        label: "Twilio Docs — Call Control Concepts (warm and cold transfer)",
        url: "https://www.twilio.com/docs/taskrouter/contact-center-blueprint/call-control-concepts",
      },
      {
        label: "Zendesk Help Center — Connecting an external AI agent using a SIP-IN line",
        url: "https://support.zendesk.com/hc/en-us/articles/8397061704474-Connecting-an-external-AI-agent-using-a-SIP-IN-line",
      },
      {
        label: "Zendesk Help Center — Announcing the general availability of voice AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11183058023450-Announcing-the-general-availability-of-voice-AI-agents",
      },
      {
        label: "FCC — Declaratory Ruling FCC 24-17 (AI-generated voices under the TCPA)",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Ticket routing automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ticket-routing-automation",
    slug: "automatisation-routage-tickets",
    category: "services",
    navLabel: "Routage automatique des tickets",
    primaryKeyword: "automatisation du routage des tickets",
    title: "Automatisation du routage des tickets : méthodes | TascaLab",
    description:
      "Le routage automatique des tickets expliqué : par règles, round-robin, par charge ou par compétences, triage IA, et l'approche de Zendesk, Freshdesk et Jira.",
    h1: "Automatisation du routage des tickets : méthodes, outils et mise en place",
    intro:
      "L'automatisation du routage des tickets attribue chaque ticket entrant au bon groupe ou au bon agent sans que quelqu'un trie la file à la main. Elle repose sur deux décisions — de quoi parle le ticket (sujet, langue, priorité, client) et qui doit le traiter — prises avec des méthodes comme les règles, le round-robin, le routage par charge ou par compétences. Zendesk, Freshdesk et Jira Service Management prennent tous ce routage en charge nativement.",
    keyFacts: [
      "Le routage omnicanal de Zendesk attribue par défaut à l'agent qui a le plus de capacité disponible ; le round robin est la méthode alternative.",
      "Le moteur Omniroute de Freshdesk assure l'attribution des tickets en round-robin, par charge et par compétences.",
      "L'action d'attribution de Jira automation peut répartir le travail par charge équilibrée, en round-robin ou par sélection aléatoire.",
      "Le triage intelligent de Zendesk classe les nouveaux tickets par intention, sentiment, langue et entités, et les déclencheurs peuvent router en fonction des résultats.",
    ],
    sections: [
      {
        heading: "Deux étapes : catégoriser, puis attribuer",
        blocks: [
          {
            type: "p",
            text: "Le routage échoue généralement à la première étape. Si les tickets arrivent sans catégorie fiable, même une bonne méthode d'attribution les envoie aux mauvaises personnes. Traitez donc le routage comme deux décisions distinctes : de quoi parle ce ticket, et qui doit s'en occuper — d'abord le groupe, puis l'agent. Les signaux utilisables pour catégoriser un ticket :",
          },
          {
            type: "ul",
            items: [
              "Point d'entrée : l'adresse e-mail, le formulaire web, la ligne téléphonique ou le widget de chat par lequel le ticket est arrivé.",
              "Champs de formulaire : un type de demande ou une liste déroulante choisie par le client.",
              "Données du demandeur : l'organisation, l'offre souscrite ou un tag VIP sur l'utilisateur.",
              "Contenu : des mots-clés dans l'objet ou la description, ou une classification par IA de l'intention, de la langue et du sentiment.",
            ],
          },
          {
            type: "p",
            text: "La classification par IA est désormais intégrée aux principaux helpdesks. Le triage intelligent de Zendesk classe les nouveaux tickets par intention, sentiment, langue et entités à partir de l'objet et du premier commentaire public, et ajoute les résultats sous forme de champs de ticket utilisables par les déclencheurs, les vues et le routage. Traitez-le comme n'importe quel autre signal : vérifiez un échantillon de ses classifications avant de router en fonction d'elles.",
          },
        ],
      },
      {
        heading: "Les méthodes de routage comparées",
        blocks: [
          {
            type: "table",
            caption: "Méthodes courantes de routage des tickets",
            head: ["Méthode", "Comment l'assigné est choisi", "Cas adaptés", "Points de vigilance"],
            rows: [
              [
                "Par règles",
                "Des conditions si/alors sur le canal, le formulaire, les mots-clés ou le demandeur définissent le groupe, l'agent ou la priorité",
                "Catégories stables, traitement des VIP, files par langue",
                "Règles qui se chevauchent et ordre des règles ; les règles deviennent obsolètes à mesure que les produits évoluent",
              ],
              [
                "Round-robin",
                "Le prochain agent disponible, à tour de rôle",
                "Tickets similaires traités par des agents aux compétences similaires",
                "Ignore la complexité des tickets, sauf s'il est combiné à des limites de capacité",
              ],
              [
                "Par charge",
                "L'agent qui a le plus de capacité disponible ou le moins de tickets ouverts",
                "Tickets de durée inégale ; éviter la surcharge",
                "Dépend d'un statut agent exact et de limites raisonnables",
              ],
              [
                "Par compétences",
                "Un agent dont les compétences correspondent aux attributs du ticket, comme la langue ou le produit",
                "Équipes spécialisées et multilingues",
                "Les tickets qui ne correspondent à aucune compétence peuvent attendre ; il faut une solution de repli",
              ],
              [
                "Triage assisté par IA",
                "Un modèle prédit la catégorie, la priorité ou le groupe, puis l'une des méthodes ci-dessus attribue",
                "Gros volumes de tickets en texte libre",
                "Erreurs de classification ; contrôlez régulièrement des échantillons",
              ],
            ],
          },
          {
            type: "p",
            text: "En pratique, ces méthodes se superposent : des règles ou l'IA choisissent le groupe, et l'attribution en round-robin, par charge ou par compétences désigne l'agent au sein de ce groupe.",
          },
        ],
      },
      {
        heading: "Comment font Zendesk, Freshdesk et Jira Service Management",
        blocks: [
          {
            type: "table",
            caption: "Options de routage natives par helpdesk",
            head: ["Helpdesk", "Couche de règles", "Attribution automatique aux agents"],
            rows: [
              [
                "Zendesk",
                "Les déclencheurs vérifient des conditions comme le canal, l'organisation ou les tags et définissent le champ « Group » ou « Assignee »",
                "Le routage omnicanal s'appuie sur le statut, la capacité et les compétences des agents ; par défaut, il privilégie la plus grande capacité disponible, avec le round robin comme alternative",
              ],
              [
                "Freshdesk",
                "Les règles d'automatisation à la création des tickets vérifient le demandeur, l'objet, la description, les tags, la source ou le formulaire, et attribuent un groupe ou un agent",
                "Omniroute prend en charge l'attribution en round-robin, par charge et par compétences",
              ],
              [
                "Jira Service Management",
                "Règles d'automatisation composées de déclencheurs, de conditions et d'actions",
                "L'action d'attribution répartit le travail par charge équilibrée, en round-robin ou par sélection aléatoire",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. Le routage omnicanal n'envoie du travail qu'aux agents dont le statut les rend éligibles pour le canal concerné, et des règles de capacité plafonnent le nombre de tickets par canal qu'un agent peut détenir simultanément. Les compétences peuvent être marquées comme obligatoires ou facultatives : les compétences facultatives sont abandonnées après un délai d'expiration des compétences pour que le ticket puisse atteindre un groupe d'agents plus large, tandis que les compétences obligatoires n'expirent jamais. L'ordre de la file dépend de l'ancienneté du ticket, de sa priorité ou de la violation de SLA la plus proche, selon votre offre et votre configuration.",
          },
          {
            type: "p",
            text: "Freshdesk. Par défaut, les règles de création de tickets s'arrêtent à la première règle activée dont les conditions correspondent : placez donc les règles spécifiques au-dessus des règles génériques ; vous pouvez aussi choisir d'exécuter toutes les règles correspondantes. Freshdesk conseille d'attribuer un groupe avant un agent, car attribuer un agent sans groupe peut laisser le ticket non attribué. Dans l'attribution par compétences, un ticket qui ne correspond à aucune compétence reste non attribué jusqu'à ce que quelqu'un l'attribue : créez donc une compétence de repli ayant le groupe pour condition. En round-robin, Omniroute ignore les agents qui ont atteint leur limite et donne le ticket suivant à l'agent dont la dernière attribution est la plus ancienne.",
          },
          {
            type: "p",
            text: "Jira Service Management. Le routage se construit avec des règles d'automatisation : un déclencheur comme un nouvel élément de travail (work item), des conditions sur le type de demande ou sur des champs, et des actions comme l'attribution. Avec la méthode de charge équilibrée, chaque personne reçoit une part égale des éléments de travail dans un périmètre que vous définissez en JQL ; sans restriction JQL, la règle compte les éléments attribués sur l'ensemble du projet. Le round-robin parcourt dans l'ordre les personnes listées.",
          },
        ],
      },
      {
        heading: "Mettre en place un routage qui tient la route",
        blocks: [
          {
            type: "ol",
            items: [
              "Passez en revue quelques semaines de tickets récents : listez les principales catégories et notez qui a réellement résolu chacune d'elles.",
              "Définissez les groupes avant les agents. Routez d'abord vers la bonne équipe ; le choix de l'agent est une seconde étape.",
              "Utilisez d'abord vos signaux les plus fiables — points d'entrée et champs de formulaire — et ajoutez une classification par mots-clés ou par IA pour le reste.",
              "Choisissez une méthode d'attribution par groupe : round-robin pour un travail homogène, par charge lorsque l'effort varie selon les tickets, par compétences lorsque l'expertise compte.",
              "Ajoutez une solution de repli pour que rien ne reste non attribué : une règle fourre-tout, une compétence de repli ou une file de triage dont quelqu'un est responsable.",
              "Taguez les décisions de routage pour pouvoir en faire le reporting, et passez en revue chaque mois les tickets mal routés.",
            ],
          },
          {
            type: "note",
            text: "Le routage détermine qui voit un ticket en premier : il influe donc sur vos temps de réponse. Surveillez vos rapports SLA pendant quelques semaines après toute modification du routage.",
          },
        ],
      },
      {
        heading: "Comment TascaLab met en place le routage des tickets",
        blocks: [
          {
            type: "p",
            text: "Le service Ticket Routing & Categorization de TascaLab (600–950 USD, prix unique) s'appuie sur le helpdesk que vous avez déjà — Zendesk, Freshdesk ou Jira — en utilisant ses règles natives lorsqu'elles suffisent, et des API, des webhooks ou Make/n8n lorsqu'elles ne suffisent pas, par exemple pour catégoriser les tickets avant que votre routage natif ne les attribue. Aucun changement de plateforme.",
          },
          {
            type: "p",
            text: "La plupart des mises en place prennent 1 à 3 semaines. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et un appel d'audit gratuit de 30 minutes est un bon moyen de cartographier votre file actuelle.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre le routage round-robin et le routage par charge ?",
        a: "Le round-robin donne le ticket suivant au prochain agent, à tour de rôle. Le routage par charge le donne à l'agent qui a le plus de capacité disponible ou le moins de tickets ouverts, ce qui convient aux équipes dont les tickets varient beaucoup en effort.",
      },
      {
        q: "Que deviennent les tickets qui ne correspondent à aucune règle ni compétence ?",
        a: "Cela dépend de l'outil. Dans l'attribution par compétences de Freshdesk, un ticket sans correspondance reste non attribué jusqu'à ce que quelqu'un l'attribue : Freshdesk suggère donc une compétence de repli. Dans Zendesk, les compétences facultatives sont abandonnées après un délai, tandis que les compétences obligatoires n'expirent jamais.",
      },
      {
        q: "L'IA peut-elle catégoriser les tickets avant le routage ?",
        a: "Oui. Le triage intelligent de Zendesk, par exemple, classe les tickets par intention, sentiment et langue, et les déclencheurs peuvent router en fonction de ces champs. Vous pouvez aussi classer les tickets avec un modèle externe et écrire le résultat dans un champ de ticket via l'API.",
      },
      {
        q: "Faut-il changer de helpdesk pour automatiser le routage ?",
        a: "Non. Zendesk, Freshdesk et Jira Service Management incluent tous des fonctions natives de routage et d'attribution, et une logique sur mesure peut être ajoutée via leurs API et leurs webhooks.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Zendesk Help Center — About using skills to route tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/5833468891674-About-using-skills-to-route-tickets",
      },
      {
        label: "Zendesk Help Center — Workflow: Auto-assigning tickets to a specific agent or group",
        url: "https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group",
      },
      {
        label: "Zendesk Help Center — About intelligent triage",
        url: "https://support.zendesk.com/hc/en-us/articles/4964463770650-About-intelligent-triage",
      },
      {
        label: "Freshdesk Support — Configure Freshdesk Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/238979-ticket-assignments-with-freshdesk-omniroute-",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Support — Automation rules that run on ticket creation",
        url: "https://support.freshdesk.com/support/solutions/articles/37614-setting-up-automation-rules-to-run-on-ticket-creation",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["zendesk-automation", "freshdesk-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Automated customer support reporting
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "automated-support-reporting",
    slug: "reporting-automatise-service-client",
    category: "services",
    navLabel: "Reporting automatisé du support",
    primaryKeyword: "reporting automatisé service client",
    title: "Reporting automatisé du service client : guide | TascaLab",
    description:
      "Reporting automatisé du service client : les indicateurs à suivre et comment programmer des rapports Zendesk, Freshdesk ou Jira vers l'e-mail, Slack ou Sheets.",
    h1: "Reporting automatisé du service client : indicateurs, planification et diffusion",
    intro:
      "Le reporting automatisé du service client transmet vos chiffres clés — volume de tickets, délais de réponse et de résolution, respect des SLA, backlog — aux bonnes personnes selon un calendrier fixe, sans que personne n'exporte les données à la main. Commencez par les rapports programmés intégrés à votre helpdesk ; lorsqu'ils ne conviennent pas, récupérez les données via l'API vers Google Sheets, Slack ou l'e-mail.",
    keyFacts: [
      "Zendesk Explore peut envoyer par e-mail un tableau de bord partagé selon un calendrier récurrent défini jusqu'à 12 mois à l'avance.",
      "Dans Freshdesk Analytics, les rapports personnalisés peuvent être programmés ; les rapports prédéfinis (curated) doivent d'abord être clonés.",
      "Les abonnements aux filtres Jira envoient par e-mail les résultats d'une recherche enregistrée selon un calendrier, y compris via une expression cron ; seuls les 200 premiers résultats sont envoyés.",
      "Un incoming webhook Slack publie un message dans un canal à partir d'un simple payload JSON.",
    ],
    sections: [
      {
        heading: "Ce que les équipes support suivent généralement",
        blocks: [
          {
            type: "p",
            text: "Un rapport de support utile répond à trois questions : suivons-nous le rythme, sommes-nous assez rapides, et les clients sont-ils satisfaits ? Ces indicateurs couvrent l'essentiel :",
          },
          {
            type: "table",
            caption: "Indicateurs courants du reporting de service client",
            head: ["Indicateur", "Ce qu'il mesure", "Utile pour"],
            rows: [
              [
                "Tickets créés, résolus et ouverts",
                "Le volume, et si le backlog augmente",
                "Points quotidiens, décisions d'effectifs",
              ],
              [
                "Délai de première réponse",
                "Temps entre la création du ticket et la première réponse publique d'un agent (définition de Zendesk)",
                "Réactivité, suivi des SLA",
              ],
              [
                "Délai de première résolution et de résolution complète",
                "Temps jusqu'à la première résolution vs la dernière, qui diffèrent lorsque des tickets sont rouverts",
                "Qualité des processus, repérage des problèmes de réouverture",
              ],
              [
                "Respect des SLA",
                "Part des tickets qui ont atteint les objectifs de première réponse ou de résolution",
                "Alertes et synthèses hebdomadaires",
              ],
              [
                "Résolution en un seul contact",
                "Tickets résolus avec une seule réponse d'agent",
                "Repérer ce qui pourrait être automatisé ou documenté",
              ],
              [
                "Satisfaction client (CSAT)",
                "Réponses aux enquêtes envoyées après la résolution d'un ticket",
                "Tendances hebdomadaires ou mensuelles",
              ],
              [
                "Taux de transfert du bot",
                "Part des conversations du bot transmises à une personne, si vous utilisez un bot",
                "Ajuster le bot et ses connaissances",
              ],
            ],
          },
          {
            type: "p",
            text: "Les définitions comptent plus que le tableau de bord. Décidez si vous publiez des médianes ou des moyennes, en heures ouvrées ou en heures calendaires, et quels tickets comptent (fusionnés, spam, traités uniquement par le bot). Mettez les définitions par écrit et gardez-les stables, sinon les comparaisons d'une semaine à l'autre perdent tout sens.",
          },
        ],
      },
      {
        heading: "Les rapports programmés que votre helpdesk propose déjà",
        blocks: [
          {
            type: "table",
            caption: "Options natives de rapports programmés",
            head: ["Outil", "Fonctionnement de la planification", "Ce que reçoivent les destinataires", "Limites à connaître"],
            rows: [
              [
                "Zendesk Explore",
                "Sur un tableau de bord partagé, « Share > Schedule delivery » ; définissez l'heure, la récurrence et une date de fin jusqu'à 12 mois à l'avance",
                "Un e-mail avec l'export du tableau de bord ; formats possibles : Excel (un fichier par onglet) et PNG",
                "Les exports de plus de 25 Mo arrivent répartis sur plusieurs e-mails ; l'envoi peut avoir du retard sur l'heure prévue",
              ],
              [
                "Freshdesk Analytics",
                "Programmez un rapport personnalisé ; clonez d'abord un rapport prédéfini si vous voulez le programmer",
                "Le rapport en PDF, ou des widgets individuels en PDF ou CSV",
                "Les widgets des rapports prédéfinis ne peuvent pas être programmés",
              ],
              [
                "Abonnements aux filtres Jira",
                "Abonnez un utilisateur ou un groupe à un filtre enregistré, avec un calendrier prédéfini ou une expression cron",
                "Un e-mail listant les éléments de travail qui correspondent au filtre",
                "Seuls les 200 premiers résultats sont envoyés ; les résultats sont évalués pour chaque destinataire",
              ],
              [
                "Jira automation",
                "Une règle programmée recherche des éléments de travail en JQL et envoie la liste",
                "Un e-mail ou un message Slack",
                "L'envoi vers Slack nécessite un incoming webhook Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Deux détails de Zendesk piègent souvent : les destinataires sont regroupés par langue et par fuseau horaire, avec un e-mail envoyé à chaque groupe, et si un tableau de bord doit couvrir toute la journée précédente, Zendesk conseille de le programmer à 2 h du matin ou plus tard.",
          },
          {
            type: "p",
            text: "La planification native est la bonne première étape. Elle atteint ses limites lorsque vous avez besoin de données issues de plusieurs outils au même endroit, d'une courte synthèse au lieu d'un tableau de bord complet, de calculs personnalisés, ou d'un envoi vers Slack depuis un outil qui ne le propose pas.",
          },
        ],
      },
      {
        heading: "Récupérer les données via les API vers Sheets, Slack ou l'e-mail",
        blocks: [
          {
            type: "p",
            text: "Lorsque les rapports intégrés ne conviennent pas, un petit pipeline fait l'affaire. Les étapes sont les mêmes, que vous utilisiez un script ou un outil d'automatisation comme Make ou n8n :",
          },
          {
            type: "ol",
            items: [
              "Planifier. Un déclencheur horaire lance le workflow chaque jour, chaque semaine ou à l'intervalle dont vous avez besoin.",
              "Extraire. Le workflow appelle l'API du helpdesk pour récupérer les tickets modifiés depuis la dernière exécution. L'Incremental Exports API de Zendesk est conçue pour cela : elle renvoie les tickets mis à jour depuis une heure de début donnée, et Zendesk recommande sa version basée sur un curseur pour des performances plus régulières.",
              "Calculer. Calculez les indicateurs selon vos définitions écrites et comparez-les à la période précédente ou à vos objectifs.",
              "Stocker. Ajoutez une ligne par jour ou par semaine dans Google Sheets. La méthode spreadsheets.values.append de l'API Sheets trouve le tableau dans la plage que vous indiquez et ajoute les nouvelles lignes après sa dernière ligne, ce qui vous donne un historique continu à mettre en graphique.",
              "Diffuser. Publiez une courte synthèse dans Slack via un incoming webhook — une URL unique qui accepte un payload JSON contenant le texte du message et, en option, des blocs Block Kit — ou envoyez-la par e-mail avec un lien vers la feuille ou le tableau de bord complet.",
            ],
          },
          {
            type: "note",
            text: "Traitez les jetons d'API et les URL de webhook comme des secrets. Conservez-les dans le gestionnaire d'identifiants de votre outil d'automatisation, pas dans la feuille ni dans le modèle de message.",
          },
        ],
      },
      {
        heading: "Des rapports que les gens lisent vraiment",
        blocks: [
          {
            type: "ul",
            items: [
              "Commencez par une poignée de chiffres et leur évolution depuis la période précédente ; mettez un lien vers le détail au lieu de le joindre.",
              "Séparez les alertes des rapports. Une synthèse hebdomadaire sert à suivre les tendances ; un risque de SLA mérite son propre message au moment où il survient. La documentation d'Atlassian, par exemple, présente une règle Jira automation programmée qui publie dans Slack les éléments de travail sur le point de dépasser leur SLA.",
              "Envoyez à chaque public ce sur quoi il agit : les agents ont besoin de la file du jour, les managers des tendances hebdomadaires.",
              "Attribuez à chaque indicateur un responsable capable d'expliquer les variations inhabituelles.",
              "Réexaminez le rapport au bout d'un mois et supprimez ce que personne n'a utilisé.",
            ],
          },
          {
            type: "p",
            text: "Une synthèse hebdomadaire pour un canal d'équipe peut tenir en cinq lignes, chacune comparant cette semaine à la précédente :",
          },
          {
            type: "ol",
            items: [
              "Tickets créés, résolus et encore ouverts, avec l'évolution du backlog.",
              "Délai médian de première réponse par rapport à votre objectif.",
              "Délai médian de résolution complète, plus le nombre de tickets rouverts.",
              "Respect des SLA, avec des liens vers les tickets en dépassement.",
              "Le CSAT de la semaine et un commentaire marquant, si vos enquêtes en recueillent.",
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab met en place les rapports automatisés",
        blocks: [
          {
            type: "p",
            text: "Le service Automated Reports de TascaLab (500–900 USD, prix unique) envoie vos indicateurs de support par e-mail ou dans Slack selon un calendrier. Il fonctionne par-dessus Zendesk, Freshdesk, Jira et vos outils internes via leurs API et Make ou n8n : rien ne change dans le travail quotidien de votre équipe.",
          },
          {
            type: "p",
            text: "La plupart des mises en place prennent 1 à 3 semaines. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Zendesk peut-il envoyer des rapports par e-mail automatiquement ?",
        a: "Oui. Dans Zendesk Explore, vous pouvez programmer l'envoi d'un tableau de bord partagé, choisir la récurrence et les destinataires, et faire courir la planification jusqu'à 12 mois.",
      },
      {
        q: "Peut-on programmer des rapports dans Freshdesk ?",
        a: "Oui, pour les rapports personnalisés de Freshdesk Analytics ; les rapports prédéfinis doivent être clonés avant de pouvoir être programmés. Les rapports sont envoyés en PDF, et les widgets peuvent l'être en PDF ou en CSV.",
      },
      {
        q: "Comment envoyer des données Jira Service Management vers Slack selon un calendrier ?",
        a: "Utilisez une règle Jira automation avec un déclencheur programmé, une recherche d'éléments de travail en JQL et une action « Send Slack message » qui publie via un incoming webhook Slack.",
      },
      {
        q: "Quels indicateurs mettre dans un rapport de support hebdomadaire ?",
        a: "En général le volume de tickets et le backlog, le délai de première réponse, le délai de résolution, le respect des SLA et la satisfaction client. Gardez des définitions fixes pour que la tendance d'une semaine à l'autre ait un sens.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Scheduling dashboard deliveries",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843602714-Scheduling-dashboard-deliveries",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Developer Docs — Incremental Exports",
        url: "https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/",
      },
      {
        label: "Freshdesk Support — Scheduling reports in Analytics",
        url: "https://support.freshdesk.com/support/solutions/articles/240703-scheduling-reports-in-analytics",
      },
      {
        label: "Atlassian Support — Manage filters (filter subscriptions)",
        url: "https://support.atlassian.com/jira-software-cloud/docs/manage-filters/",
      },
      {
        label: "Atlassian Support — Automation rule that sends a list of issues about to breach via Slack",
        url: "https://support.atlassian.com/automation/kb/automation-rule-to-send-list-of-issues-that-are-about-to-breach-via-slack/",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Google for Developers — Sheets API: spreadsheets.values.append",
        url: "https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append",
      },
    ],
    related: ["customer-support-metrics", "slack-support-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Customer support email automation
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "customer-support-email-automation",
    slug: "automatisation-emails-service-client",
    category: "services",
    navLabel: "Automatisation des e-mails support",
    primaryKeyword: "automatisation des e-mails service client",
    title: "Automatisation des e-mails du service client | TascaLab",
    description:
      "Automatisation des e-mails support : transférez votre adresse vers Zendesk ou Freshdesk, configurez SPF et DKIM, puis accusez réception, routez, escaladez.",
    h1: "Automatisation des e-mails du service client : de la boîte de réception au ticket traité",
    intro:
      "L'automatisation des e-mails du service client transforme chaque message envoyé à votre adresse support en ticket, en accuse réception, l'oriente vers la bonne équipe et, lorsque c'est sans risque, y répond — tandis que des personnes gardent les échanges qui demandent du discernement. Pas besoin d'une nouvelle boîte de réception : transférez votre adresse existante vers Zendesk ou Freshdesk, configurez votre domaine d'envoi pour que les réponses soient bien délivrées, puis ajoutez des déclencheurs, de la classification et de l'IA par-dessus.",
    keyFacts: [
      "Chaque compte Zendesk dispose d'une adresse support système de la forme support@votresousdomaine.zendesk.com.",
      "Zendesk recommande un transfert automatique au niveau du serveur de messagerie plutôt qu'un transfert depuis un client de messagerie.",
      "Freshdesk ne convertit les e-mails transférés en tickets qu'une fois la règle de transfert en place ; les boîtes Gmail et Microsoft 365 peuvent aussi être connectées directement.",
      "Dans Zendesk, activer la signature DKIM avant que les enregistrements CNAME soient présents dans le DNS provoque des échecs de distribution.",
      "Les réponses automatiques par e-mail avec articles, fonction historique (legacy) de Zendesk, ne seront plus disponibles à partir du 10 décembre 2026.",
    ],
    sections: [
      {
        heading: "Étape 1 : transformer chaque e-mail de support en ticket",
        blocks: [
          {
            type: "p",
            text: "Les clients continuent d'écrire à l'adresse qu'ils connaissent déjà, par exemple support@votreentreprise.com. En coulisses, cette boîte transfère tout vers votre helpdesk, qui crée ou met à jour un ticket pour chaque message. Rien ne change pour le client, et votre équipe cesse de travailler dans une boîte partagée.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Chaque compte dispose d'une adresse support système, support@votresousdomaine.zendesk.com. Vous ajoutez votre propre adresse comme adresse support, configurez le transfert chez votre fournisseur de messagerie, puis la vérifiez. Zendesk recommande un transfert automatique au niveau du serveur, et non un transfert manuel ou un transfert automatique depuis un client de messagerie, et précise qu'après la correction d'une configuration en échec, la prise en compte peut prendre jusqu'à 48 heures.",
              "Freshdesk. Ajoutez l'adresse sous « Admin > Channels > Email > New Support Email ». Avec le serveur de messagerie Freshworks par défaut, vous créez dans votre boîte une règle de transfert qui envoie le courrier à l'adresse générée par Freshdesk ; les e-mails ne deviennent des tickets qu'une fois cette règle en place. Vous pouvez aussi connecter directement une boîte Gmail ou Microsoft 365 en vous y identifiant.",
            ],
          },
          {
            type: "p",
            text: "Utilisez une adresse par usage — par exemple support@, facturation@ et partenaires@ — plutôt qu'une adresse fourre-tout unique. Chaque adresse devient ensuite un signal de routage gratuit.",
          },
          {
            type: "note",
            text: "Testez avec un message envoyé depuis une adresse externe. Zendesk suspend les e-mails qui arrivent depuis l'une de vos propres adresses support, car ce schéma peut provoquer des boucles de messagerie.",
          },
        ],
      },
      {
        heading: "Étape 2 : s'assurer que vos réponses sont bien délivrées",
        blocks: [
          {
            type: "p",
            text: "Lorsque le helpdesk répond en tant que support@votreentreprise.com, il envoie au nom de votre domaine, et les serveurs de réception vérifient qu'il en a le droit. Vous le prouvez avec des enregistrements DNS : SPF liste les services autorisés à envoyer pour votre domaine, et DKIM ajoute une signature à chaque message. C'est une tâche ponctuelle pour la personne qui gère votre DNS.",
          },
          {
            type: "table",
            caption: "Configuration du domaine d'envoi dans Zendesk et Freshdesk",
            head: ["Helpdesk", "Enregistrement", "Que faire", "Points de vigilance"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "Ajoutez include:mail.zendesk.com à l'enregistrement TXT SPF de votre domaine",
                "Un domaine ne peut avoir qu'un seul enregistrement SPF ; si d'autres services envoient pour vous, regroupez-les dans cet enregistrement unique",
              ],
              [
                "Zendesk",
                "DKIM",
                "Ajoutez les enregistrements CNAME indiqués dans le guide DKIM de Zendesk pour chaque domaine externe, puis activez les signatures numériques dans l'Admin Center",
                "Activer les signatures avant que les enregistrements CNAME existent provoque des échecs de distribution",
              ],
              [
                "Freshdesk",
                "DKIM",
                "Sous « Admin > Channels > Email > Advanced Settings > Configure DKIM », publiez les quatre enregistrements CNAME générés, puis cliquez sur « Verify »",
                "Certains fournisseurs DNS, comme GoDaddy, ajoutent automatiquement votre domaine : saisissez uniquement le préfixe de l'hôte",
              ],
            ],
          },
          {
            type: "p",
            text: "L'ordre compte : d'abord les enregistrements, ensuite l'activation. Si une autre équipe ou une agence gère votre DNS, envoyez-lui les valeurs exactes tirées de la documentation ou de l'écran d'administration de votre helpdesk au lieu de les retaper.",
          },
        ],
      },
      {
        heading: "Étape 3 : accuser réception, trier et router dès l'arrivée",
        blocks: [
          {
            type: "p",
            text: "Une fois que le courrier arrive, les premières automatisations s'exécutent dès la création d'un ticket. Dans Zendesk, l'e-mail de confirmation provient d'un déclencheur par défaut, « Notify requester and CCs of received request ». Modifiez son texte pour qu'il apporte au client une information utile :",
          },
          {
            type: "ul",
            items: [
              "La référence du ticket, pour que le client puisse la citer.",
              "Le délai de réponse à attendre — seulement si vous pouvez le tenir.",
              "Des liens vers les articles du centre d'aide pour vos questions les plus fréquentes.",
              "Ce qu'il faut fournir pour obtenir de l'aide plus vite, comme un numéro de commande ou l'e-mail du compte.",
            ],
          },
          {
            type: "p",
            text: "Ensuite, routez. Le signal le plus simple est l'adresse à laquelle l'e-mail a été envoyé. Le workflow documenté par Zendesk est un déclencheur avec les conditions « Ticket Is Created » et « Ticket Received at Is » votre adresse de facturation, plus une action qui définit le groupe — associé à une vue qui montre à ce groupe ses tickets.",
          },
          {
            type: "p",
            text: "Le routage basé sur le contenu vient ensuite. Les règles par mots-clés sur l'objet fonctionnent un temps, puis cessent de fonctionner à mesure que les clients formulent les choses autrement. Une étape de classification — un modèle d'IA ou un ensemble de règles exécuté via l'API du helpdesk — lit l'objet et le corps du message, inscrit la catégorie, la langue et l'urgence dans des champs du ticket, et extrait des informations comme les numéros de commande pour que les agents n'aient pas à les chercher. Vos déclencheurs ou règles d'automatisation routent ensuite en fonction de ces champs.",
          },
          {
            type: "note",
            text: "Les réponses automatiques peuvent rebondir d'un système à l'autre. Zendesk suspend les messages entrants qui portent des en-têtes de réponse automatique comme Auto-Submitted, Precedence ou X-Autoresponder, et lorsqu'un même expéditeur envoie un grand nombre d'e-mails en peu de temps, il les suspend et bloque l'adresse pendant une heure. Vérifiez régulièrement les tickets suspendus pour qu'un vrai message client n'y reste pas en attente.",
          },
        ],
      },
      {
        heading: "Étape 4 : répondre aux cas simples, garder des personnes sur le reste",
        blocks: [
          {
            type: "p",
            text: "Beaucoup d'e-mails de support posent les mêmes quelques questions. Zendesk a longtemps traité ce cas avec les réponses automatiques avec articles (autoreplies with articles) : un e-mail qui recommande jusqu'à trois articles du centre d'aide et permet au client de clore sa demande. Cette fonction est passée au statut legacy le 31 juillet 2025 et ne sera plus disponible à partir du 10 décembre 2026. Pour la remplacer, Zendesk propose les agents IA, qui fournissent des réponses d'IA générative sur les canaux de messagerie, d'e-mail et de formulaire web. Si vous dépendez encore des réponses automatiques, planifiez la transition dès maintenant.",
          },
          {
            type: "p",
            text: "Une réponse d'IA ne vaut que les articles sur lesquels elle s'appuie : corrigez donc la base de connaissances avant d'activer les réponses automatiques. Décidez ensuite où s'arrête l'automatisation. Confiez l'échange à une personne lorsque :",
          },
          {
            type: "ul",
            items: [
              "Le client demande à parler à une personne, ou répond que la réponse ne l'a pas aidé.",
              "Le sujet porte sur la facturation, les remboursements, le juridique, la sécurité ou une réclamation.",
              "Le ton est en colère, ou l'échange a déjà fait plusieurs allers-retours.",
              "Plusieurs personnes sont en copie, ou l'e-mail fait partie d'une conversation de compte en cours.",
              "Répondre impliquerait de modifier un compte que l'automatisation ne peut pas vérifier.",
            ],
          },
          {
            type: "p",
            text: "Rendez le transfert visible : ajoutez un tag au ticket, augmentez sa priorité si nécessaire, et gardez tout dans un seul ticket pour que l'agent voie ce que le client a déjà reçu.",
          },
        ],
      },
      {
        heading: "Comment TascaLab automatise les e-mails de support",
        blocks: [
          {
            type: "p",
            text: "TascaLab met cela en place par-dessus le helpdesk que vous utilisez déjà — Zendesk, Freshdesk ou Jira — avec les déclencheurs et règles natifs lorsqu'ils suffisent, et des API, des webhooks ou Make/n8n lorsqu'ils ne suffisent pas. Aucun changement de plateforme. La classification et le routage des e-mails entrants relèvent du service Ticket Routing & Categorization (600–950 USD, prix unique) ; les workflows en plusieurs étapes, comme lire un numéro de commande dans un e-mail et le rechercher dans un autre système, relèvent de Custom Automation (1 200–2 000 USD).",
          },
          {
            type: "p",
            text: "La plupart des mises en place prennent 1 à 3 semaines. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et un appel d'audit gratuit de 30 minutes est un bon moyen de cartographier votre flux d'e-mails actuel.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Puis-je garder ma propre adresse e-mail de support ?",
        a: "Oui. Dans Zendesk, vous l'ajoutez comme adresse support et transférez son courrier vers Zendesk, de préférence avec un transfert automatique au niveau du serveur. Dans Freshdesk, vous la transférez vers l'adresse générée par Freshdesk, ou connectez directement une boîte Gmail ou Microsoft 365.",
      },
      {
        q: "Ai-je besoin de SPF et DKIM pour les e-mails du helpdesk ?",
        a: "Si le helpdesk envoie les réponses depuis votre propre domaine, configurez les deux. Zendesk vous demande d'ajouter include:mail.zendesk.com à votre enregistrement SPF et d'ajouter ses enregistrements CNAME avant d'activer la signature DKIM. Freshdesk génère quatre enregistrements CNAME DKIM que vous devez publier et vérifier.",
      },
      {
        q: "Pourquoi l'e-mail d'un client n'est-il pas devenu un ticket dans Zendesk ?",
        a: "Vérifiez les tickets suspendus. Zendesk suspend les messages qu'il identifie comme des réponses automatiques, les messages envoyés depuis l'une de vos propres adresses support et les rafales d'e-mails provenant d'un même expéditeur.",
      },
      {
        q: "Les réponses automatiques avec articles de Zendesk sont-elles toujours disponibles ?",
        a: "C'est une fonction legacy depuis le 31 juillet 2025, et elle ne sera plus disponible à partir du 10 décembre 2026. Zendesk oriente ses clients vers les agents IA, qui peuvent répondre par e-mail ainsi que sur la messagerie et les formulaires web.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Forwarding incoming email from your existing email address to Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408886828698-Forwarding-incoming-email-from-your-existing-email-address-to-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Allowing Zendesk to send email on behalf of your email domain",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832543770-Allowing-Zendesk-to-send-email-on-behalf-of-your-email-domain",
      },
      {
        label: "Zendesk Help Center — Digitally signing your email with DKIM",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822303386-Digitally-signing-your-email-with-DKIM",
      },
      {
        label: "Zendesk Help Center — Causes for ticket suspension",
        url: "https://support.zendesk.com/hc/en-us/articles/4408828416282-Causes-for-ticket-suspension",
      },
      {
        label: "Zendesk Help Center — Workflow: Route tickets to groups based on support address",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823834394-Workflow-Route-tickets-to-groups-based-on-support-address",
      },
      {
        label: "Zendesk Help Center — Configuring email autoreplies to recommend articles",
        url: "https://support.zendesk.com/hc/en-us/articles/4408825385242-Configuring-email-autoreplies-to-recommend-articles",
      },
      {
        label: "Freshdesk Support — Converting support emails into tickets",
        url: "https://support.freshdesk.com/support/solutions/articles/37541-set-up-your-support-email",
      },
      {
        label: "Freshdesk Support — Email domain verification using DKIM records",
        url: "https://support.freshdesk.com/support/solutions/articles/223779-configuring-dkim-records",
      },
    ],
    related: ["ticket-routing-automation", "ai-knowledge-base-for-customer-support", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. AI knowledge base for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-knowledge-base-for-customer-support",
    slug: "base-de-connaissances-ia-service-client",
    category: "services",
    navLabel: "Base de connaissances IA (support)",
    primaryKeyword: "base de connaissances IA service client",
    title: "Base de connaissances IA pour le service client | TascaLab",
    description:
      "Base de connaissances IA pour le support : fonctionnement, structure des articles dans Zendesk, Freshdesk ou Confluence, mise à jour et mesure de la déflexion.",
    h1: "Base de connaissances IA pour le service client : fonctionnement et mise en place",
    intro:
      "Une base de connaissances IA pour le service client est un centre d'aide rédigé de façon à ce que les clients comme les agents IA puissent y trouver des réponses. L'IA recherche les articles pertinents et construit sa réponse à partir d'eux : ses réponses ne sont donc ni plus exactes, ni plus complètes, ni plus à jour que vos articles. Vous pouvez la construire dans l'outil que vous avez déjà : le centre d'aide de Zendesk, la base de connaissances de Freshdesk ou des espaces Confluence liés à Jira Service Management.",
    keyFacts: [
      "La génération augmentée par récupération (RAG) retrouve les passages pertinents dans vos documents et les ajoute au prompt, pour que le modèle réponde à partir de votre contenu.",
      "Dans un centre d'aide Zendesk, les articles se trouvent dans des sections au sein de catégories ; ils ne peuvent pas être placés directement dans une catégorie.",
      "Freshdesk organise sa base de connaissances en catégories, dossiers et articles.",
      "Les espaces Confluence liés à une base de connaissances Jira Service Management alimentent son centre d'aide, la recherche dans la base de connaissances et l'agent de service virtuel.",
      "Jira Service Management compte une demande comme évitée (deflected) lorsqu'un client choisit un article suggéré pendant la soumission et le marque comme utile.",
    ],
    sections: [
      {
        heading: "Comment les réponses de l'IA s'appuient sur vos articles",
        blocks: [
          {
            type: "p",
            text: "La plupart des agents de support IA utilisent une forme de génération augmentée par récupération (RAG). AWS décrit le RAG comme une technique qui enrichit un grand modèle de langage avec des données externes, comme les documents internes d'une entreprise. Dans les grandes lignes :",
          },
          {
            type: "ol",
            items: [
              "Vos documents sont convertis en embeddings — des représentations numériques du texte — et stockés dans une base de données vectorielle. C'est une étape de configuration ponctuelle.",
              "Un client pose une question en langage naturel.",
              "Le système lance une recherche de similarité dans la base de données vectorielle et ajoute au prompt, comme contexte, les passages trouvés.",
              "Le modèle de langage rédige sa réponse à l'aide de ce contexte.",
            ],
          },
          {
            type: "p",
            text: "Deux conséquences en découlent. L'IA ne peut pas répondre à partir de ce qui n'est pas écrit, et elle travaille sur des extraits d'articles plutôt que sur l'ensemble de votre centre d'aide. Les recommandations de Freshdesk vont dans le même sens : Freddy AI récupère et utilise les articles indépendamment les uns des autres, donc si un article omet des définitions ou du contexte, l'IA peut faire des suppositions ou donner des réponses partielles.",
          },
          {
            type: "p",
            text: "Les principaux helpdesks intègrent ce mécanisme. Les agents IA de Zendesk peuvent utiliser des réponses génératives sur la messagerie et l'e-mail, connectées à plusieurs sources de connaissances, avec des règles de recherche qui déterminent quelles sources sont interrogées dans quelles conditions. Dans Jira Service Management, les articles d'un espace Confluence lié apparaissent dans le centre d'aide, dans la recherche de la base de connaissances et dans l'agent de service virtuel.",
          },
        ],
      },
      {
        heading: "Où se trouve la base de connaissances dans votre helpdesk",
        blocks: [
          {
            type: "table",
            caption: "Structure de la base de connaissances par helpdesk",
            head: ["Helpdesk", "Où se trouvent les articles", "Comment ils sont organisés", "Ce qui s'appuie dessus"],
            rows: [
              [
                "Zendesk",
                "Centre d'aide",
                "Les catégories contiennent des sections, et les sections contiennent des articles ; les sections peuvent être imbriquées, mais les articles ne peuvent pas être placés directement dans une catégorie",
                "Les clients qui naviguent et effectuent des recherches, et les agents IA avec réponses génératives",
              ],
              [
                "Freshdesk",
                "Base de connaissances (articles de solution)",
                "Les catégories contiennent des dossiers, et les dossiers contiennent des articles ; les dossiers peuvent être imbriqués",
                "Les clients sur le portail, et Freddy AI",
              ],
              [
                "Jira Service Management",
                "Espaces Confluence liés à la base de connaissances du projet de service",
                "Pages de l'espace Confluence lié",
                "Le centre d'aide, la recherche dans la base de connaissances et l'agent de service virtuel",
              ],
            ],
          },
          {
            type: "p",
            text: "Un détail pratique : dans Freshdesk, une catégorie ou un dossier n'apparaît sur le portail client qu'une fois au moins un de ses articles publié. Pour les réponses de l'IA, ce que dit chaque article compte plus que son emplacement ; la hiérarchie aide surtout les personnes qui naviguent.",
          },
        ],
      },
      {
        heading: "Rédiger des articles à partir desquels une IA peut répondre",
        blocks: [
          {
            type: "p",
            text: "Freshdesk publie des recommandations pour rédiger du contenu de connaissances destiné à Freddy AI, et elles valent pour toute IA basée sur la récupération :",
          },
          {
            type: "ul",
            items: [
              "Limitez chaque article à un seul sujet, et précisez quand l'information s'applique et quand elle ne s'applique pas.",
              "Mettez des liens vers les articles connexes au lieu d'y intégrer des workflows secondaires.",
              "Séparez la configuration, l'utilisation et le dépannage en articles distincts lorsqu'ils répondent à des objectifs différents.",
              "Rendez chaque article autonome : définissez les termes et le contexte sur lesquels il s'appuie.",
              "Utilisez un seul titre de premier niveau pour l'objet de l'article, et des titres de niveau inférieur pour séparer les tâches, les options ou les concepts.",
            ],
          },
          {
            type: "p",
            text: "Ajoutez-y quelques habitudes à vous. Titrez les articles avec les mots qu'emploient réellement les clients, pas avec les noms de produits internes. Placez la réponse dans les premières lignes, puis les étapes. Gardez les valeurs exactes — limites, délais, prix — à un seul endroit et renvoyez-y par un lien, pour qu'un changement ne laisse pas deux chiffres différents entre lesquels l'IA devrait choisir. Et commencez là où sont les tickets : quelques semaines de tickets regroupés par sujet montrent quels articles rédiger ou corriger en premier.",
          },
        ],
      },
      {
        heading: "Garder le contenu à jour",
        blocks: [
          {
            type: "p",
            text: "Un article obsolète se transforme en réponse d'IA assurée mais fausse : donnez donc à chaque article un responsable et un rythme de relecture. Zendesk le facilite avec la vérification des articles : les administrateurs de connaissances définissent des règles de vérification qui signalent les articles à relire selon des filtres et des intervalles — par exemple tous les trois mois pour les articles portant un libellé précis, situés dans une certaine catégorie ou non mis à jour depuis un moment — et les propriétaires des articles reçoivent des rappels par e-mail pour les vérifier. Vérifiez que votre offre l'inclut avant de compter dessus.",
          },
          {
            type: "p",
            text: "Les relectures planifiées rattrapent la dérive lente. Les événements suivants doivent déclencher une mise à jour immédiate :",
          },
          {
            type: "ul",
            items: [
              "Un changement de produit, de tarif ou de politique : mettez à jour les articles au plus tard le jour de la sortie.",
              "Un agent répond à un ticket que la base de connaissances ne couvre pas : créez ou signalez un article.",
              "L'IA transmet une conversation à une personne parce qu'elle n'a pas pu répondre : examinez cette question.",
              "Deux articles donnent des réponses différentes : fusionnez-les et dépubliez le doublon.",
            ],
          },
        ],
      },
      {
        heading: "Mesurer le self-service",
        blocks: [
          {
            type: "p",
            text: "Mesurez si les articles évitent des tickets, pas seulement s'ils sont lus. Gardez les mêmes définitions d'un mois à l'autre pour que la tendance ait un sens.",
          },
          {
            type: "table",
            caption: "Indicateurs de self-service à suivre",
            head: ["Indicateur", "Ce qu'il vous apprend", "Comment l'obtenir"],
            rows: [
              [
                "Demandes évitées",
                "Les clients qui ont trouvé une réponse en soumettant une demande",
                "Jira Service Management compte une demande comme évitée (deflected) lorsque le client sélectionne un article suggéré pendant la soumission et le marque comme utile",
              ],
              [
                "Demandes résolues avec un article",
                "La fréquence à laquelle les agents clôturent des demandes à l'aide du contenu de la base de connaissances",
                "Le rapport « Requests resolved » de Jira Service Management suit les demandes clôturées avec ou sans article de la base de connaissances",
              ],
              [
                "Taux de self-service",
                "L'utilisation du centre d'aide par ticket",
                "Divisez les sessions du centre d'aide par les tickets créés sur la même période, et suivez la tendance",
              ],
              [
                "Taux de transfert de l'IA",
                "Part des conversations de l'IA transmises à une personne",
                "Les statistiques de votre agent IA, ou un tag ajouté à chaque transfert",
              ],
              [
                "Tickets sur des sujets documentés",
                "Si les articles existants évitent réellement des tickets",
                "Échantillonnez des tickets chaque mois et vérifiez si un article couvrait déjà la question",
              ],
            ],
          },
        ],
      },
      {
        heading: "Comment TascaLab met votre base de connaissances au travail",
        blocks: [
          {
            type: "p",
            text: "TascaLab construit des chatbots par-dessus les outils que vous utilisez déjà — Zendesk, Freshdesk, Jira, Slack ou des systèmes internes — via des API, des webhooks et Make ou n8n : votre base de connaissances reste où elle est. Le Starter Chat Bot (350–450 USD, prix unique) couvre 1–2 canaux et le Standard Chat Bot (500–650 USD) en couvre 3–5, parmi votre site web, le téléphone, WhatsApp, Telegram, Facebook Messenger et Instagram. Les workflows de maintenance, comme les rappels de relecture pour les articles obsolètes, relèvent de Custom Automation (1 200–2 000 USD).",
          },
          {
            type: "p",
            text: "La plupart des mises en place prennent 1 à 3 semaines. Chaque projet inclut 30 jours de support après le lancement et une documentation de base, sans frais cachés, et vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Qu'est-ce que la génération augmentée par récupération dans le service client ?",
        a: "C'est une façon pour une IA de répondre à partir de votre propre contenu. Les passages pertinents sont récupérés dans vos documents, généralement par une recherche de similarité dans une base de données vectorielle, puis ajoutés au prompt, pour que le modèle de langage rédige sa réponse à partir de ce contexte.",
      },
      {
        q: "Jira Service Management peut-il utiliser Confluence comme base de connaissances ?",
        a: "Oui. Vous liez un espace Confluence à la base de connaissances du projet de service, et ses articles apparaissent dans le centre d'aide, dans la recherche de la base de connaissances et dans l'agent de service virtuel.",
      },
      {
        q: "Comment tenir à jour les articles de la base de connaissances Zendesk ?",
        a: "Utilisez la vérification des articles si votre offre l'inclut. Les règles de vérification signalent les articles à relire selon des filtres et des intervalles, et les propriétaires des articles reçoivent des rappels par e-mail pour les vérifier.",
      },
      {
        q: "Comment structurer les articles pour les réponses de l'IA ?",
        a: "Un sujet par article, autonome, avec des titres clairs. Freshdesk souligne que Freddy AI récupère les articles indépendamment les uns des autres : l'absence de définitions ou de contexte peut donc entraîner des suppositions ou des réponses partielles.",
      },
    ],
    sources: [
      {
        label: "AWS Prescriptive Guidance — Understanding Retrieval Augmented Generation",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/what-is-rag.html",
      },
      {
        label: "Zendesk Help Center — Organizing knowledge base content in categories and sections",
        url: "https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections",
      },
      {
        label: "Zendesk Help Center — Generative replies in AI agents FAQs",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756420506-Generative-replies-in-AI-agents-FAQs",
      },
      {
        label: "Zendesk Help Center — About article verification and how it works",
        url: "https://support.zendesk.com/hc/en-us/articles/5588297664666-About-article-verification-and-how-it-works",
      },
      {
        label: "Freshdesk Support — Create categories, folders and articles in your knowledge base",
        url: "https://support.freshdesk.com/support/solutions/articles/37611-create-and-organize-knowledge-base",
      },
      {
        label: "Freshdesk Support — Write Freddy AI–optimised knowledge content",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011859-write-freddy-ai-optimised-knowledge-content",
      },
      {
        label: "Atlassian Support — Link a Confluence space to your knowledge base",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/link-confluence-spaces-to-your-service-project/",
      },
      {
        label: "Atlassian Support — Find out how your knowledge base articles are performing",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/how-are-my-knowledge-base-articles-performing/",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "ticket-deflection", "customer-support-email-automation"],
    updated: "2026-10-19",
  },
];
