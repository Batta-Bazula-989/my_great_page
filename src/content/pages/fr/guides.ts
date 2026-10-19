import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-support-client",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier pour l'automatisation du support",
    title: "n8n vs Make vs Zapier pour automatiser le support (2026)",
    description:
      "n8n vs Make vs Zapier pour automatiser le support : licence et hébergement, décompte de l'usage, connecteurs Zendesk, Freshdesk, Jira et Slack, webhooks, code.",
    h1: "n8n vs Make vs Zapier pour l'automatisation du support",
    intro:
      "Les plus grandes différences entre n8n, Make et Zapier pour le travail de support tiennent à l'endroit où ils s'exécutent et à la façon dont ils décomptent l'usage. n8n peut être auto-hébergé sous sa Sustainable Use License ou utilisé en tant que n8n Cloud, tandis que Make et Zapier fonctionnent comme des services hébergés. Les trois se connectent à Zendesk, Freshdesk, Jira et Slack, acceptent les webhooks et disposent d'une étape de code : le choix se résume donc généralement à l'emplacement des données, au volume et à la quantité de logique sur mesure dont vous avez besoin.",
    keyFacts: [
      "Le logiciel auto-hébergé de n8n utilise la Sustainable Use License, une licence fair-code créée par n8n en 2022. n8n ne se présente pas comme open source.",
      "En date d'octobre 2026, n8n compte des exécutions (un run de workflow), Make des crédits (convertis 1:1 depuis les opérations) et Zapier des tâches (étapes d'action réussies).",
      "Les déclencheurs Zapier, les étapes Filter et les étapes Paths ne consomment pas de tâches. Les modules déclencheurs de Make consomment 1 crédit par exécution, même quand ils ne trouvent aucune nouvelle donnée.",
      "Make vous permet de choisir un data center aux États-Unis ou dans l'UE lors de la création d'une organisation. Ce choix ne peut pas être modifié ensuite.",
      "Les trois disposent d'un déclencheur webhook et d'une étape de code qui exécute du JavaScript ou du Python.",
    ],
    sections: [
      {
        heading: "Comparatif côte à côte",
        blocks: [
          {
            type: "p",
            text: "Le tableau résume ce que dit la documentation de chaque éditeur, vérifiée en octobre 2026. Les prix sont volontairement omis. Les offres changent souvent : consultez la page de tarifs actuelle avant de décider.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier pour l'automatisation du support (en date d'octobre 2026)",
            head: ["Critère", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Où il s'exécute",
                "n8n Cloud (géré par n8n) ou auto-hébergé sur votre propre machine ou infrastructure",
                "Les data centers de Make. Vous choisissez les États-Unis ou l'UE par organisation",
                "Le cloud géré de Zapier. Pas de version auto-hébergée ni sur site (on-premises)",
              ],
              [
                "Licence",
                "Sustainable Use License (fair-code) pour le logiciel auto-hébergé",
                "Service hébergé soumis aux conditions de Make",
                "Service hébergé soumis aux conditions de Zapier",
              ],
              [
                "Unité d'usage",
                "Exécutions : une exécution est un run d'un workflow",
                "Crédits : la plupart des modules consomment 1 crédit par opération",
                "Tâches : une tâche par étape d'action réussie",
              ],
              [
                "Connecteurs helpdesk",
                "Nodes Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software et Slack",
                "Apps Zendesk, Freshdesk, Jira Cloud Platform et Slack",
                "Apps Zendesk, Freshdesk, Jira Service Management et Slack",
              ],
              [
                "Déclencheur webhook",
                "Node Webhook avec des URL de test et de production distinctes",
                "Module Custom webhook dans l'app Webhooks",
                "Webhooks by Zapier : Catch Hook et Catch Raw Hook",
              ],
              [
                "Étape de code",
                "Node Code : JavaScript ou Python",
                "App Make Code : JavaScript ou Python",
                "Code by Zapier : JavaScript (Node.js 22) ou Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hébergement et licence",
        blocks: [
          {
            type: "p",
            text: "n8n vous offre deux options. n8n Cloud est une instance gérée que n8n exploite pour vous. L'auto-hébergement consiste à faire tourner n8n sur votre propre machine ou infrastructure. Pour la plupart des installations auto-hébergées, la documentation recommande Docker. Si vous n'avez pas l'habitude d'administrer des serveurs, elle recommande plutôt n8n Cloud.",
          },
          {
            type: "p",
            text: "Le logiciel auto-hébergé relève de la Sustainable Use License, une licence fair-code créée par n8n en 2022. Vous pouvez utiliser, modifier, créer des œuvres dérivées et redistribuer le logiciel, mais avec des limites. L'usage est limité à des fins professionnelles internes ou à un usage non commercial ou personnel, et vous ne pouvez le distribuer que gratuitement, à des fins non commerciales. La définition de l'Open Source Initiative n'autorise pas de limites d'usage : n8n ne se présente donc pas comme open source. Les fichiers dont le nom contient « .ee. » relèvent d'une licence distincte, la n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make exécute vos scénarios dans ses propres data centers. Lorsque vous créez une organisation, vous choisissez les États-Unis ou l'Union européenne. Ce paramètre détermine où vos données sont stockées et traitées, et il ne peut pas être modifié par la suite.",
          },
          {
            type: "p",
            text: "Zapier fonctionne sur son propre cloud géré. Le comparatif de Zapier avec n8n indique que Zapier ne peut pas remplacer complètement n8n pour les automatisations qui doivent s'exécuter dans un environnement auto-hébergé, isolé (air-gapped) ou sur site pour des raisons de conformité.",
          },
          {
            type: "note",
            text: "Ceci est un résumé de la licence n8n, pas une interprétation. Si vous prévoyez d'intégrer n8n dans un produit que vous vendez, lisez d'abord le texte complet de la licence et les restrictions d'usage.",
          },
        ],
      },
      {
        heading: "Comment chaque outil décompte l'usage (en date d'octobre 2026)",
        blocks: [
          {
            type: "p",
            text: "Les trois produits utilisent des unités de facturation différentes : vous ne pouvez donc pas comparer directement les limites de leurs offres. Voici comment chaque éditeur définit son unité.",
          },
          {
            type: "ul",
            items: [
              "Exécutions n8n : n8n définit une exécution comme un run d'un workflow. Les offres payantes, cloud ou auto-hébergées, ont un quota d'exécutions, et seules les exécutions de production y sont décomptées. Les exécutions manuelles depuis l'éditeur ne comptent pas. Un Schedule Trigger compte à chaque déclenchement. Chaque requête webhook entrante qui lance le workflow compte une fois.",
              "Crédits Make : depuis le 27 août 2025, Make facture en crédits, et les opérations existantes ont été converties 1:1. Une opération est une exécution de module qui traite ou vérifie des données. La plupart des apps consomment 1 crédit par opération. Les modules déclencheurs consomment 1 crédit par exécution, même quand ils ne trouvent aucune nouvelle donnée. Avec le fournisseur d'IA de Make, les fonctions d'IA consomment des crédits en fonction des opérations et des tokens. Si vous connectez votre propre fournisseur d'IA, les crédits couvrent les opérations et vous payez les tokens à ce fournisseur.",
              "Tâches Zapier : Zapier compte une tâche chaque fois qu'une étape d'action s'exécute avec succès. Les déclencheurs ne consomment jamais de tâches, pas plus que les étapes Filter ou Paths. Les étapes en erreur ou interrompues ne comptent pas. Certains produits, comme les étapes AI by Zapier, sont comptés à un taux plus élevé.",
            ],
          },
          {
            type: "p",
            text: "Ces unités comptent pour un bot de support qui tourne sur chaque nouveau ticket ou message de chat. Dans n8n, un long workflow compte toujours pour une exécution par run. Dans Make, chaque module exécuté consomme des crédits. Dans Zapier, chaque étape d'action réussie est une tâche. Sur Make, un scénario qui interroge votre helpdesk selon un planning consomme des crédits même quand rien n'a changé. Les déclencheurs instantanés basés sur des webhooks évitent de payer ces vérifications à vide.",
          },
        ],
      },
      {
        heading: "Connecteurs Zendesk, Freshdesk, Jira et Slack",
        blocks: [
          {
            type: "p",
            text: "Les trois outils disposent de connecteurs prêts à l'emploi pour ces quatre services, mais les noms et la profondeur diffèrent. Avant de vous engager, vérifiez que le déclencheur et l'action exacts dont vous avez besoin existent.",
          },
          {
            type: "ul",
            items: [
              "n8n : il existe un node Zendesk et un node Zendesk Trigger distinct. Le node Freshdesk couvre les tickets et les contacts. Le node Jira Software couvre les issues, les commentaires et les pièces jointes. Le node Slack couvre les messages, les canaux, les fichiers et les réactions, et son opération « Send and Wait for Response » permet des flux d'approbation. Si un node ne prend pas en charge une opération, la documentation suggère d'appeler l'API avec le node HTTP Request, en réutilisant le même credential.",
              "Make : l'app Zendesk comprend des modules qui surveillent les tickets et l'activité des tickets. Ils fonctionnent comme des déclencheurs instantanés via un webhook que vous créez dans Zendesk. L'app Freshdesk couvre les tickets, les conversations, les contacts et les entreprises, et propose aussi des déclencheurs instantanés basés sur des webhooks. Make propose également une app Jira Cloud Platform et une app Slack.",
              "Zapier : l'app Jira Service Management dispose de déclencheurs pour les demandes nouvelles et mises à jour, et d'une action qui crée des demandes. Zapier propose des Zaps prêts à l'emploi qui la relient à Zendesk et à Slack. L'app Freshdesk se relie à Slack et à Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks et étapes de code",
        blocks: [
          {
            type: "p",
            text: "Les webhooks permettent à un helpdesk ou à un canal de chat de lancer une automatisation dès que quelque chose se produit. Les étapes de code couvrent la logique que les étapes intégrées ne savent pas gérer, comme remodeler une charge utile ou appeler une API sans connecteur.",
          },
          {
            type: "ul",
            items: [
              "Node Webhook de n8n : chaque node Webhook reçoit deux URL, une Test URL et une Production URL. Il peut répondre immédiatement, quand le dernier node se termine, ou via un node Respond to Webhook distinct.",
              "App Webhooks de Make : le module Custom webhook crée une URL unique pour un scénario, et vous ne pouvez pas partager le même webhook entre plusieurs scénarios. Un module Webhook response contrôle ce que reçoit l'appelant. Sans lui, la réponse par défaut est le texte « Accepted ».",
              "Webhooks by Zapier : Catch Hook vous donne une URL unique à laquelle l'autre application envoie ses requêtes, et analyse le corps de la requête. Catch Raw Hook renvoie le corps sans l'analyser, avec les en-têtes. Retrieve Poll fonctionne dans l'autre sens et récupère des données par une requête GET.",
              "Node Code de n8n : exécute du JavaScript ou du Python, soit une fois pour tous les éléments entrants (par défaut), soit une fois par élément. Sur n8n Cloud, l'option Python ne peut pas importer de bibliothèques.",
              "App Make Code : le module Run code exécute du JavaScript ou du Python et inclut quelques bibliothèques intégrées. Selon la documentation de Make, l'import de vos propres bibliothèques nécessite une offre Enterprise.",
              "Code by Zapier : les étapes de code peuvent être des déclencheurs ou des actions et prennent en charge JavaScript (Node.js 22) et Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Lequel convient à votre équipe support",
        blocks: [
          {
            type: "ul",
            items: [
              "Les données des tickets doivent rester sur une infrastructure que vous contrôlez : n8n est le seul des trois à documenter une option auto-hébergée.",
              "Vous voulez un outil hébergé avec un stockage des données dans l'UE défini par organisation : l'option de data center européen de Make répond à ce besoin.",
              "Votre équipe utilise déjà Zapier et vos flux sont courts : les déclencheurs et les filtres ne consomment pas de tâches, donc les notifications simples restent bon marché.",
              "Vos workflows comportent de nombreuses étapes et tournent sur chaque ticket : comparez les exécutions par run de n8n aux crédits ou aux tâches comptés par étape, à votre volume réel.",
            ],
          },
          {
            type: "p",
            text: "TascaLab construit des automatisations du support sur les outils que vous utilisez déjà (Zendesk, Freshdesk, Jira, Slack et outils internes) avec des API, des webhooks, Make et n8n. La plupart des mises en place prennent 1 à 3 semaines. Chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "n8n est-il open source ?",
        a: "n8n distribue son logiciel sous la Sustainable Use License, qu'il qualifie de fair-code. Comme cette licence limite la façon dont le logiciel peut être utilisé, n8n indique qu'il ne se présente pas comme open source.",
      },
      {
        q: "Peut-on auto-héberger Make ou Zapier ?",
        a: "Make exécute les scénarios dans son propre data center, aux États-Unis ou dans l'UE, que vous choisissez lors de la création d'une organisation. Zapier fonctionne sur son cloud géré et indique ne pas pouvoir remplacer complètement n8n lorsque les automatisations doivent s'exécuter dans un environnement auto-hébergé ou sur site.",
      },
      {
        q: "Les déclencheurs Zapier consomment-ils des tâches ?",
        a: "Non. Zapier compte une tâche chaque fois qu'une étape d'action s'exécute avec succès. Les déclencheurs, les étapes Filter et les étapes Paths ne consomment pas de tâches.",
      },
      {
        q: "Un déclencheur Make consomme-t-il des crédits quand il n'y a rien de nouveau ?",
        a: "Oui. Selon le centre d'aide de Make, les modules déclencheurs consomment 1 crédit par exécution, même quand ils ne trouvent aucune nouvelle donnée. Les déclencheurs instantanés basés sur des webhooks évitent ces exécutions à vide.",
      },
      {
        q: "Qu'est-ce qui compte comme une exécution n8n ?",
        a: "Un run d'un workflow. Sur les offres payantes, seules les exécutions de production sont décomptées du quota. Les exécutions manuelles depuis l'éditeur ne le sont pas.",
      },
    ],
    sources: [
      { label: "n8n Docs — Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Executions", url: "https://docs.n8n.io/workflows/executions/" },
      { label: "n8n Docs — Integrations (Zendesk, Freshdesk, Jira Software, Slack and Webhook nodes)", url: "https://docs.n8n.io/integrations" },
      { label: "n8n Docs — Code node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code" },
      { label: "Make Help Center — Credits & operations", url: "https://help.make.com/credits-and-operations" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "Make Apps Documentation — Webhooks", url: "https://apps.make.com/gateway" },
      { label: "Make Apps Documentation — Make Code", url: "https://apps.make.com/code" },
      { label: "Make Apps Documentation — Zendesk", url: "https://apps.make.com/zendesk" },
      { label: "Make Apps Documentation — Freshdesk", url: "https://apps.make.com/freshdesk" },
      { label: "Make — Jira Cloud Platform and Slack integration", url: "https://www.make.com/en/integrations/jira/slack" },
      { label: "Zapier Help Center — How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "Zapier Help Center — Trigger Zap workflows from webhooks", url: "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks" },
      { label: "Zapier Help Center — Using Code by Zapier", url: "https://help.zapier.com/hc/en-us/articles/45405528551181-Using-Code-by-Zapier" },
      { label: "Zapier — Jira Service Management integrations", url: "https://zapier.com/apps/jira-service-management/integrations" },
      { label: "Zapier — Freshdesk integrations", url: "https://zapier.com/apps/freshdesk/integrations" },
      { label: "Zapier — Zapier vs. n8n comparison", url: "https://zapier.com/blog/n8n-vs-zapier/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "what-is-customer-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "ai-act-chatbots-article-50",
    category: "guides",
    navLabel: "AI Act : règles pour les chatbots",
    primaryKeyword: "règles AI Act chatbots",
    title: "AI Act et chatbots : l'article 50 et les dates clés",
    description:
      "Les règles de l'AI Act pour les chatbots : ce qu'exige l'article 50, qui est fournisseur ou déployeur, les dates clés et l'effet de l'omnibus numérique de 2026.",
    h1: "AI Act et chatbots : ce qu'exige l'article 50, et à partir de quand",
    intro:
      "En vertu de l'AI Act (règlement (UE) 2024/1689), les fournisseurs doivent concevoir les systèmes d'IA qui interagissent directement avec des personnes, comme les chatbots, de sorte que ces personnes soient informées qu'elles interagissent avec un système d'IA, sauf si cela ressort clairement du contexte. Cette obligation figure à l'article 50 et s'applique à partir du 2 août 2026. L'omnibus numérique sur l'IA de 2026 a déplacé les échéances relatives au haut risque, mais la Commission indique toujours le 2 août 2026 comme date d'application de l'article 50.",
    keyFacts: [
      "Article 50(1) : les fournisseurs doivent veiller à ce que les personnes soient informées qu'elles interagissent avec un système d'IA, sauf si cela ressort clairement du contexte.",
      "Article 50(5) : l'information doit être fournie de manière claire et reconnaissable, au plus tard lors de la première interaction.",
      "L'AI Act est entré en vigueur le 1er août 2024. L'article 50 s'applique à partir du 2 août 2026.",
      "L'omnibus numérique sur l'IA (règlement (UE) 2026/1744) est entré en vigueur le 27 juillet 2026. Il a reporté les échéances relatives au haut risque au 2 décembre 2027 et au 2 août 2028.",
      "Une violation de l'article 50 peut entraîner des amendes allant jusqu'à 15 millions d'EUR ou 3 % du chiffre d'affaires annuel mondial, le montant le plus élevé étant retenu.",
    ],
    sections: [
      {
        heading: "Ce que l'article 50 exige pour les chatbots",
        blocks: [
          {
            type: "p",
            text: "L'article 50(1) dispose que les fournisseurs doivent veiller à ce que les systèmes d'IA destinés à interagir directement avec des personnes physiques soient conçus et développés de manière que les personnes concernées soient informées qu'elles interagissent avec un système d'IA. L'exception vise le cas où cela est évident pour une personne raisonnablement bien informée, attentive et avisée, compte tenu des circonstances et du contexte d'utilisation. L'obligation ne s'applique pas aux systèmes d'IA autorisés par la loi à détecter, prévenir, rechercher ou poursuivre des infractions pénales, sous réserve de garanties appropriées.",
          },
          {
            type: "p",
            text: "L'article 50(5) précise comment et quand les personnes doivent être informées. L'information doit être fournie de manière claire et reconnaissable au plus tard au moment de la première interaction ou exposition, et elle doit respecter les exigences d'accessibilité applicables.",
          },
          {
            type: "p",
            text: "L'article 50 prévoit aussi d'autres obligations de transparence. Seule la première de cette liste est propre aux chatbots :",
          },
          {
            type: "ul",
            items: [
              "Article 50(1) : les fournisseurs de systèmes qui interagissent directement avec des personnes doivent les concevoir de sorte que ces personnes sachent qu'elles ont affaire à une IA.",
              "Article 50(2) : les fournisseurs de systèmes qui génèrent du contenu synthétique de type audio, image, vidéo ou texte doivent marquer les résultats dans un format lisible par machine, afin qu'ils puissent être détectés comme générés par l'IA.",
              "Article 50(3) : les déployeurs de systèmes de reconnaissance des émotions ou de catégorisation biométrique doivent informer les personnes qui y sont exposées.",
              "Article 50(4) : les déployeurs doivent signaler les hypertrucages (deepfakes) et les textes générés par l'IA publiés dans le but d'informer le public sur des questions d'intérêt public. Pour ces textes, l'obligation ne s'applique pas lorsqu'ils ont fait l'objet d'un contrôle humain et qu'une personne en assume la responsabilité éditoriale.",
            ],
          },
        ],
      },
      {
        heading: "Fournisseur ou déployeur : sur qui pèse l'obligation",
        blocks: [
          {
            type: "p",
            text: "L'article 3(3) définit le fournisseur comme une personne ou un organisme qui développe un système d'IA, ou le fait développer, et le met sur le marché ou en service sous son propre nom ou sa propre marque, à titre onéreux ou gratuit. L'article 3(4) définit le déployeur comme toute personne qui utilise un système d'IA sous sa propre autorité, sauf dans le cadre d'une activité personnelle à caractère non professionnel.",
          },
          {
            type: "p",
            text: "L'information sur les chatbots prévue à l'article 50(1) est une obligation du fournisseur. Les obligations de signalement des articles 50(3) et 50(4) sont des obligations du déployeur. Si votre entreprise construit un assistant de support et l'exploite sous sa propre marque, confrontez attentivement les deux définitions à la façon dont le système a été construit et à l'identité de celui qui le met face aux clients.",
          },
        ],
      },
      {
        heading: "Comment l'obligation d'information s'applique à l'automatisation du support",
        blocks: [
          {
            type: "p",
            text: "La FAQ de la Commission sur l'article 50 indique que ses lignes directrices fixent quatre critères cumulatifs pour l'obligation relative à l'interaction : le système est un système d'IA, il est conçu pour un véritable échange bidirectionnel, il communique directement plutôt que par l'intermédiaire d'un humain, et il interagit avec des personnes physiques. Selon la FAQ, les systèmes qui fonctionnent uniquement en arrière-plan, par communication de machine à machine ou sans contact direct avec des personnes, sortent du champ de cette obligation. Elle précise aussi que l'exception du caractère « évident » doit être interprétée de manière restrictive.",
          },
          {
            type: "table",
            caption: "Questions à se poser sur les configurations de support courantes, d'après les critères de la Commission",
            head: ["Configuration", "Ce qu'il faut vérifier au regard des critères"],
            rows: [
              [
                "Chatbot IA sur votre site web, WhatsApp ou Messenger",
                "Échange-t-il des messages directement avec les clients ? Si oui, prévoyez une information au moment du premier message ou avant.",
              ],
              [
                "Voicebot IA qui répond aux appels",
                "Même question pour les conversations orales. L'article 50(5) renvoie aussi aux exigences d'accessibilité.",
              ],
              [
                "IA qui classe et route les tickets",
                "Fonctionne-t-elle uniquement en arrière-plan, sans contact direct avec les clients ? La FAQ place ce type de système hors du champ de l'obligation relative à l'interaction.",
              ],
              [
                "IA qui rédige des réponses qu'un agent relit et envoie",
                "Communique-t-elle directement avec le client, ou par l'intermédiaire d'un humain ? Vérifiez ce point au regard des lignes directrices.",
              ],
            ],
          },
          {
            type: "p",
            text: "En pratique, beaucoup d'équipes ouvrent chaque conversation avec l'IA par une courte phrase comme « Vous échangez avec un assistant IA. Tapez “agent” pour joindre une personne. » C'est un choix de conception. Savoir si cela suffit pour votre système relève des lignes directrices et de votre conseiller.",
          },
        ],
      },
      {
        heading: "Dates clés, y compris l'omnibus numérique de 2026",
        blocks: [
          {
            type: "p",
            text: "L'article 113 fixe le calendrier de l'AI Act. En novembre 2025, la Commission a proposé d'en modifier certaines parties dans un omnibus numérique sur l'IA (COM(2025) 836, du 19 novembre 2025). Cette proposition a depuis été adoptée : après un accord politique le 7 mai 2026 et l'adoption formelle, elle a été publiée sous la forme du règlement (UE) 2026/1744. Selon la Commission, il est entré en vigueur le 27 juillet 2026. Le tableau présente les dates adoptées.",
          },
          {
            type: "table",
            caption: "Dates d'application de l'AI Act (textes officiels vérifiés le 19 octobre 2026)",
            head: ["Date", "Ce qui s'applique", "Base juridique"],
            rows: [
              ["1er août 2024", "Entrée en vigueur de l'AI Act", "Article 113, règlement (UE) 2024/1689"],
              ["2 février 2025", "Application des chapitres I et II, dont la maîtrise de l'IA et les pratiques interdites", "Article 113(a)"],
              ["2 août 2025", "Application des règles sur les organismes notifiés, les modèles d'IA à usage général, la gouvernance et les sanctions (sauf l'article 101)", "Article 113(b)"],
              ["2 août 2026", "Application générale, y compris les obligations de transparence de l'article 50", "Article 113 ; FAQ de la Commission sur l'article 50"],
              ["2 décembre 2026", "Échéance du marquage prévu à l'article 50(2) pour les systèmes d'IA générative mis sur le marché avant le 2 août 2026 ; nouvelle interdiction des IA générant des contenus intimes non consentis ou du matériel relatif à des abus sexuels sur des enfants", "Règlement (UE) 2026/1744 (adopté)"],
              ["2 décembre 2027", "Règles relatives au haut risque pour les systèmes classés en vertu de l'article 6(2) et de l'annexe III", "Règlement (UE) 2026/1744 (adopté)"],
              ["2 août 2028", "Règles relatives au haut risque pour les systèmes classés en vertu de l'article 6(1) et de l'annexe I (produits)", "Règlement (UE) 2026/1744 (adopté) ; remplace la date initiale du 2 août 2027"],
            ],
          },
          {
            type: "p",
            text: "Une différence entre la proposition et le texte adopté concerne l'IA générative. La proposition de la Commission aurait accordé aux fournisseurs de systèmes génératifs déjà sur le marché un délai de grâce de six mois pour le marquage prévu à l'article 50(2). Le règlement adopté fixe l'échéance au 2 décembre 2026. Selon la FAQ de la Commission, l'information sur les chatbots prévue à l'article 50(1) s'applique toujours à partir du 2 août 2026.",
          },
        ],
      },
      {
        heading: "Sanctions et orientations officielles",
        blocks: [
          {
            type: "p",
            text: "En vertu de l'article 99(4), la violation des obligations de l'article 50 peut entraîner des amendes administratives pouvant aller jusqu'à 15 000 000 EUR ou, pour une entreprise, jusqu'à 3 % de son chiffre d'affaires annuel mondial total réalisé au cours de l'exercice précédent, le montant le plus élevé étant retenu. Pour les PME, y compris les start-up, l'article 99 retient le plus faible des deux montants.",
          },
          {
            type: "p",
            text: "Le 20 juillet 2026, la Commission a publié des lignes directrices sur les obligations de transparence de l'article 50. Un code de bonnes pratiques distinct et volontaire sur la transparence des contenus générés par l'IA (Code of Practice on Transparency of AI-generated Content) couvre l'article 50(2), (4) et (5). La Commission précise que ne pas le signer ne signifie pas être en situation de non-conformité. Pour l'obligation relative aux chatbots de l'article 50(1), la FAQ indique que les fournisseurs et les déployeurs peuvent décider eux-mêmes des mesures appropriées, en tenant compte des lignes directrices.",
          },
          {
            type: "note",
            text: "Ceci ne constitue pas un conseil juridique. Cette page décrit ce que disent l'AI Act, l'omnibus numérique et les orientations de la Commission en date du 19 octobre 2026. Pour les décisions concernant vos propres systèmes, lisez les textes officiels sur EUR-Lex et consultez un avocat qualifié.",
          },
        ],
      },
      {
        heading: "Intégrer l'information dans un bot de support",
        blocks: [
          {
            type: "ul",
            items: [
              "Placez l'information sur l'IA dans le premier message ou dans l'accueil vocal, et pas seulement dans vos conditions d'utilisation.",
              "Rendez l'information lisible par les lecteurs d'écran et claire à l'oral, puisque l'article 50(5) mentionne l'accessibilité.",
              "Offrez aux clients un moyen visible de joindre une personne, et transmettez l'historique de la conversation pour qu'ils n'aient pas à se répéter.",
              "Conservez une trace du texte d'information et de ses modifications, pour pouvoir montrer ce que les clients ont vu.",
            ],
          },
          {
            type: "p",
            text: "TascaLab construit des chatbots et des voicebots sur les outils que vous utilisez déjà (Zendesk, Freshdesk, Jira, Slack et outils internes). Les projets Standard Chat Bot coûtent {{price:standard}} et les projets Voice Bot {{price:voice}}. Les deux incluent une documentation de base et 30 jours de support après le lancement.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Dois-je dire aux clients qu'ils parlent à un chatbot ?",
        a: "L'article 50(1) de l'AI Act impose aux fournisseurs de concevoir les systèmes d'IA qui interagissent directement avec des personnes de sorte que celles-ci soient informées qu'elles interagissent avec un système d'IA, sauf si cela ressort clairement du contexte. La Commission indique que l'exception du caractère « évident » doit être interprétée de manière restrictive.",
      },
      {
        q: "Quand les règles de l'AI Act pour les chatbots s'appliquent-elles ?",
        a: "L'article 50 s'applique à partir du 2 août 2026. La FAQ de la Commission accorde un délai de grâce jusqu'au 2 décembre 2026 uniquement pour le marquage prévu à l'article 50(2) par les systèmes génératifs déjà sur le marché.",
      },
      {
        q: "L'omnibus numérique a-t-il retardé l'AI Act ?",
        a: "En partie. Le règlement (UE) 2026/1744, en vigueur depuis le 27 juillet 2026 selon la Commission, a reporté les obligations relatives au haut risque au 2 décembre 2027 (annexe III) et au 2 août 2028 (produits de l'annexe I). Il n'a pas modifié la date du 2 août 2026 pour l'article 50.",
      },
      {
        q: "Un routeur de tickets IA doit-il signaler l'usage de l'IA ?",
        a: "Selon la FAQ de la Commission, les systèmes qui fonctionnent uniquement en arrière-plan, par communication de machine à machine ou sans contact direct avec des personnes, sortent du champ de l'obligation relative à l'interaction de l'article 50(1). Vérifiez votre propre configuration au regard des lignes directrices de la Commission.",
      },
      {
        q: "Quelles sont les amendes en cas de violation de l'article 50 ?",
        a: "En vertu de l'article 99(4), jusqu'à 15 millions d'EUR ou 3 % du chiffre d'affaires annuel mondial total, le montant le plus élevé étant retenu. Pour les PME, y compris les start-up, c'est le plus faible des deux montants qui s'applique.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2024/1689 (Artificial Intelligence Act)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      { label: "AI Act Service Desk — Article 50: Transparency obligations", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
      { label: "AI Act Service Desk — Article 99: Penalties", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99" },
      { label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "European Commission — Guidelines on transparency obligations published (20 July 2026)", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems" },
      { label: "EUR-Lex — Proposal COM(2025) 836, Digital Omnibus on AI", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0836" },
      { label: "EUR-Lex — Regulation (EU) 2026/1744 (Digital Omnibus on AI)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
      { label: "European Commission — AI Omnibus enters into force", url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force" },
    ],
    related: ["ai-chatbot-for-customer-support", "gdpr-customer-support-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "gdpr-customer-support-automation",
    slug: "rgpd-automatisation-support-client",
    category: "guides",
    navLabel: "RGPD et automatisation du support",
    primaryKeyword: "RGPD et automatisation du support client",
    title: "RGPD et automatisation du support client : guide pratique",
    description:
      "RGPD et automatisation du support client : bases légales, minimisation, conservation et contrats de sous-traitance, appliqués aux chatbots et aux helpdesks.",
    h1: "RGPD et automatisation du support client : guide pratique",
    intro:
      "Le RGPD s'applique à l'automatisation du support comme à tout autre traitement de données personnelles. Il vous faut une base légale au titre de l'article 6, vous ne traitez que ce dont vous avez besoin (article 5(1)(c)) et ne le conservez que le temps nécessaire (article 5(1)(e)), et les prestataires qui traitent des données pour votre compte doivent être liés par un contrat au titre de l'article 28. Pour les chatbots et les workflows de helpdesk, l'essentiel se joue dans des choix de conception : quels champs vous envoyez, où ils vont et combien de temps les logs sont conservés.",
    keyFacts: [
      "Article 5(1)(c) : les données personnelles doivent être adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités.",
      "L'article 6(1) énumère six bases légales. La Cour de justice de l'UE considère cette liste comme exhaustive.",
      "L'article 28(3) exige un contrat contraignant avec chaque sous-traitant, prévoyant notamment qu'il n'agit que sur vos instructions documentées.",
      "Selon le CEPD (EDPB), vérifier qu'un sous-traitant présente des garanties suffisantes est une obligation continue, et non ponctuelle.",
      "Make vous permet de choisir un data center aux États-Unis ou dans l'UE lors de la création d'une organisation. Ce choix ne peut pas être modifié ensuite.",
    ],
    sections: [
      {
        heading: "Où apparaissent les données personnelles dans l'automatisation du support",
        blocks: [
          {
            type: "p",
            text: "Une automatisation du support touche des données personnelles à plusieurs endroits, souvent plus que l'équipe ne l'imagine. Les recenser est la première étape concrète, car chacun de ces points met en jeu la minimisation des données, la conservation et les contrats avec les prestataires.",
          },
          {
            type: "ul",
            items: [
              "Transcriptions de chats et d'e-mails : noms, e-mails, numéros de téléphone, numéros de commande et tout ce que les clients saisissent.",
              "Champs et pièces jointes des tickets du helpdesk qu'une automatisation lit ou copie vers un autre outil.",
              "Prompts et réponses envoyés à un modèle d'IA, si votre bot en utilise un.",
              "Logs d'exécution de votre plateforme d'automatisation, qui peuvent stocker les données reçues par chaque étape.",
              "Notifications publiées dans Slack ou d'autres outils internes.",
            ],
          },
        ],
      },
      {
        heading: "Les articles du RGPD qui comptent le plus pour un bot de support",
        blocks: [
          {
            type: "table",
            caption: "Articles du RGPD et leur impact concret sur l'automatisation du support",
            head: ["Article", "Ce que dit le texte", "Ce que cela implique pour un bot de support"],
            rows: [
              [
                "Art. 5(1)(c) : minimisation des données",
                "Les données personnelles doivent être adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités.",
                "N'envoyez à chaque étape que les champs dont elle a besoin. Masquer les identifiants avant que le texte ne parte vers un modèle d'IA est une façon d'y parvenir.",
              ],
              [
                "Art. 5(1)(e) : limitation de la conservation",
                "Les données sont conservées sous une forme permettant l'identification des personnes pendant une durée n'excédant pas celle nécessaire au regard des finalités, avec des exceptions pour l'archivage, la recherche et les statistiques, sous réserve des garanties de l'article 89(1).",
                "Fixez des durées de conservation pour les logs de chat, les exports de tickets et les logs d'exécution des automatisations.",
              ],
              [
                "Art. 6(1) : licéité",
                "Le traitement n'est licite que si au moins l'une des six bases s'applique : consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public ou intérêts légitimes.",
                "Consignez quelle base couvre chaque finalité, par exemple répondre à une demande ou analyser des transcriptions.",
              ],
              [
                "Art. 28 : sous-traitants",
                "Ne faire appel qu'à des sous-traitants présentant des garanties suffisantes, dans le cadre d'un contrat contraignant qui définit le traitement et les oblige à agir sur vos instructions documentées.",
                "Ayez un contrat avec chaque prestataire de la chaîne : helpdesk, plateforme d'automatisation, fournisseur d'IA et hébergement.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Base légale : décider finalité par finalité",
        blocks: [
          {
            type: "p",
            text: "L'article 6(1) énumère six bases légales : consentement, contrat, obligation légale, intérêts vitaux, mission d'intérêt public et intérêts légitimes. La Cour de justice de l'UE a qualifié cette liste d'exhaustive et limitative : un traitement doit donc relever d'au moins l'une d'elles.",
          },
          {
            type: "p",
            text: "Deux bases reviennent le plus souvent dans le travail de support. La base contractuelle couvre le traitement nécessaire à l'exécution d'un contrat avec la personne, ou à des mesures prises à sa demande avant la conclusion d'un contrat. Dans l'affaire C-621/22, la Cour de justice a indiqué que les intérêts légitimes supposent trois conditions cumulatives : le responsable du traitement ou un tiers poursuit un intérêt légitime, le traitement est nécessaire à cet intérêt, et les intérêts ou les droits fondamentaux de la personne ne prévalent pas. Les autorités publiques ne peuvent pas invoquer les intérêts légitimes pour les traitements effectués dans l'exécution de leurs missions.",
          },
          {
            type: "p",
            text: "En pratique, listez chaque finalité séparément. Répondre à la question du client, former le personnel à partir d'anciennes transcriptions et produire des rapports sont des finalités différentes, et chacune a besoin de sa propre base.",
          },
        ],
      },
      {
        heading: "Sous-traitants et contrats au titre de l'article 28",
        blocks: [
          {
            type: "p",
            text: "En vertu de l'article 28(1), vous ne pouvez faire appel qu'à des sous-traitants qui présentent des garanties suffisantes quant à la mise en œuvre de mesures techniques et organisationnelles appropriées. L'article 28(3) exige un contrat ou un autre acte juridique qui définit l'objet, la durée, la nature et la finalité du traitement, le type de données personnelles et les catégories de personnes concernées. Il doit aussi prévoir que le sous-traitant n'agit que sur vos instructions documentées, y compris pour les transferts de données personnelles vers un pays tiers. En vertu de l'article 28(4), un sous-traitant qui fait appel à un autre sous-traitant doit lui imposer par contrat les mêmes obligations en matière de protection des données, et le sous-traitant initial reste pleinement responsable envers vous.",
          },
          {
            type: "ul",
            items: [
              "Lignes directrices 07/2020 du CEPD : vérifier les garanties d'un sous-traitant est une obligation continue, avec des audits et des inspections le cas échéant. Les instructions peuvent figurer dans une annexe au contrat ou sous une autre forme écrite, comme un e-mail, à condition d'en garder une trace. Une liste générale de sous-traitants ultérieurs susceptible d'être mise à jour de temps à autre ne suffit pas. Le sous-traitant doit vous informer activement des changements.",
              "Avis 22/2024 du CEPD : l'obligation de vérifier que les sous-traitants et sous-traitants ultérieurs présentent des garanties suffisantes s'applique quel que soit le niveau de risque, même si la profondeur des vérifications peut varier. La décision finale de recourir à un sous-traitant ultérieur précis, et la responsabilité de ce choix, restent au responsable du traitement.",
            ],
          },
          {
            type: "p",
            text: "Une chaîne de support typique peut inclure un helpdesk, une plateforme d'automatisation, un fournisseur de modèle d'IA et un outil de chat. Notez quels prestataires traitent des données personnelles pour votre compte, vérifiez les conditions de traitement des données et la liste des sous-traitants ultérieurs de chacun, et conservez-les dans vos dossiers.",
          },
        ],
      },
      {
        heading: "Hébergement, localisation des données et paramètres de conservation",
        blocks: [
          {
            type: "p",
            text: "L'endroit où s'exécute votre automatisation détermine où ses données sont stockées. Make propose deux localisations de data center, les États-Unis et l'Union européenne. Vous en choisissez une lors de la création d'une organisation, elle ne peut pas être modifiée ensuite, et elle détermine où vos données sont stockées et traitées. Si vous auto-hébergez n8n, ses paramètres d'exécution contrôlent la quantité de données d'exécution conservée. La valeur par défaut documentée est un maximum de 10 000 exécutions stockées, et 0 signifie aucune limite.",
          },
          {
            type: "p",
            text: "Comme l'article 28(3) couvre les instructions relatives aux transferts vers des pays tiers, vérifiez dans les conditions de chaque prestataire où les données sont traitées. Réglez la conservation dans chaque outil qui garde une copie des données, et pas seulement dans votre helpdesk.",
          },
        ],
      },
      {
        heading: "Choix de conception concrets pour une automatisation conforme au RGPD",
        blocks: [
          {
            type: "ul",
            items: [
              "Transmettez les identifiants de tickets et les champs dont une étape a besoin plutôt que des fiches clients entières.",
              "Masquez les e-mails, les numéros de téléphone et les données de paiement avant que le texte ne parte vers un modèle d'IA. Un texte masqué peut encore contenir des données personnelles : traitez-le avec le même soin.",
              "Purgez les logs d'exécution des automatisations et désactivez la journalisation complète des charges utiles là où vous n'en avez pas besoin.",
              "Prévoyez un moyen de retrouver, d'exporter ou de supprimer les données d'un client dans le bot, le helpdesk et les logs, pour que les demandes individuelles ne nécessitent pas de recherche manuelle.",
              "Confiez les cas sensibles ou à fort impact à un agent humain au lieu de laisser le bot décider.",
              "N'oubliez pas que les chatbots relèvent aussi des règles de transparence distinctes de l'AI Act européen.",
            ],
          },
          {
            type: "note",
            text: "Ceci ne constitue pas un conseil juridique. Cette page décrit ce que disent le texte du RGPD et les orientations du CEPD, ainsi que des pratiques d'ingénierie courantes. Pour les décisions concernant vos propres traitements, adressez-vous à votre délégué à la protection des données ou à un avocat qualifié.",
          },
          {
            type: "p",
            text: "TascaLab construit des automatisations sur Zendesk, Freshdesk, Jira, Slack et des outils internes, avec des API, des webhooks, Make et n8n. Chaque projet comprend une documentation de base de ce qui a été construit, utile pour cartographier les flux de données, ainsi que 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Quelle base légale du RGPD couvre un chatbot de support ?",
        a: "Le RGPD n'en attribue aucune d'office. L'article 6(1) énumère six bases, dont le contrat et les intérêts légitimes, et c'est à vous de choisir et de consigner celle qui convient à chaque finalité. La Cour de justice de l'UE considère cette liste comme exhaustive.",
      },
      {
        q: "Ai-je besoin d'un contrat de sous-traitance avec ma plateforme d'automatisation ?",
        a: "L'article 28(3) exige que le traitement effectué par un sous-traitant soit régi par un contrat ou un autre acte juridique qui définit notamment l'objet, la durée, la nature et la finalité du traitement. Si un prestataire traite des données personnelles pour votre compte, vérifiez que de telles clauses sont en place.",
      },
      {
        q: "Puis-je envoyer les messages des clients à un modèle d'IA ?",
        a: "Les mêmes principes du RGPD s'appliquent que pour tout autre traitement : une base légale, la minimisation des données et un contrat de sous-traitance lorsque le fournisseur traite des données pour votre compte. Masquer les identifiants avant d'envoyer le texte est un moyen concret de réduire ce que vous partagez.",
      },
      {
        q: "Combien de temps puis-je conserver les transcriptions de chat ?",
        a: "Selon l'article 5(1)(e), les données personnelles doivent être conservées sous une forme permettant l'identification des personnes pendant une durée n'excédant pas celle nécessaire au regard des finalités. Le texte ne fixe pas de nombre de jours : c'est à vous de définir une durée de conservation pour chaque finalité.",
      },
      {
        q: "Où Make stocke-t-il mes données ?",
        a: "Make dispose de data centers aux États-Unis et dans l'UE. Vous en choisissez un lors de la création d'une organisation, et ce choix ne peut pas être modifié ensuite.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2016/679 (General Data Protection Regulation)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679" },
      { label: "GDPR-Info — Art. 6 GDPR: Lawfulness of processing", url: "https://gdpr-info.eu/art-6-gdpr/" },
      { label: "GDPR-Info — Art. 28 GDPR: Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { label: "EUR-Lex — Court of Justice judgment in Case C-621/22 (legitimate interests)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A62022CJ0621" },
      { label: "EDPB — Guidelines 07/2020 on the concepts of controller and processor", url: "https://edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf" },
      { label: "EDPB — Opinion 22/2024 on reliance on processors and sub-processors", url: "https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "n8n Docs — Executions environment variables", url: "https://docs.n8n.io/hosting/configuration/environment-variables/executions/" },
    ],
    related: ["eu-ai-act-chatbot-rules", "ai-chatbot-for-customer-support", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
  {
    key: "european-accessibility-act-customer-service",
    slug: "acte-europeen-accessibilite-service-client",
    category: "guides",
    navLabel: "Acte européen sur l'accessibilité",
    primaryKeyword: "acte européen sur l'accessibilité service client",
    title: "Acte européen sur l'accessibilité : règles du service client",
    description:
      "Acte européen sur l'accessibilité et service client : services concernés, dates clés, exemption des microentreprises et ce que l'annexe I exige du support.",
    h1: "Acte européen sur l'accessibilité et service client : ce que les équipes support doivent savoir",
    intro:
      "L'acte européen sur l'accessibilité (directive (UE) 2019/882) s'applique depuis le 28 juin 2025 à une liste de services aux consommateurs qui comprend le commerce électronique, les services bancaires aux consommateurs, les livres numériques et les communications électroniques. Pour les services concernés, l'annexe I exige que les sites web et les applications mobiles soient accessibles, et que les services d'assistance tels que les help desks et les centres d'appels, lorsqu'ils existent, fournissent des informations sur l'accessibilité du service dans des modes de communication accessibles. Les microentreprises qui fournissent des services en sont exemptées.",
    keyFacts: [
      "Article 31 : les États membres devaient adopter leurs lois nationales au plus tard le 28 juin 2022 et les appliquer à partir du 28 juin 2025.",
      "L'article 2(2) couvre des services aux consommateurs tels que les communications électroniques, les services bancaires aux consommateurs, les livres numériques et le commerce électronique.",
      "L'article 4(5) exempte les microentreprises qui fournissent des services ; l'article 3(23) les définit comme occupant moins de 10 personnes, avec un chiffre d'affaires ou un total du bilan inférieur ou égal à 2 millions d'EUR.",
      "Annexe I, section III : lorsqu'ils existent, les services d'assistance doivent fournir des informations sur l'accessibilité du service dans des modes de communication accessibles.",
      "La norme EN 301 549 V4.1.1 a été adoptée en août 2026, mais AccessibleEU indique qu'elle n'est pas encore la référence juridique pour la conformité à l'EAA.",
    ],
    sections: [
      {
        heading: "Les services couverts par l'acte européen sur l'accessibilité",
        blocks: [
          {
            type: "p",
            text: "La directive (UE) 2019/882, connue sous le nom d'acte européen sur l'accessibilité ou EAA (European Accessibility Act), fixe des exigences d'accessibilité pour une liste de produits à l'article 2(1) et une liste de services à l'article 2(2). Cette page se concentre sur les services, car c'est là que se situe le support client. L'article 2(2) s'applique aux services suivants fournis aux consommateurs après le 28 juin 2025.",
          },
          {
            type: "table",
            caption: "Services énumérés à l'article 2(2) de la directive (UE) 2019/882",
            head: ["Article 2(2)", "Service", "Points de contact du support à examiner"],
            rows: [
              ["(a)", "Services de communications électroniques, à l'exception des services de transmission utilisés pour la fourniture de services de machine à machine", "Pages d'aide, chat en direct et options de contact pour les abonnés"],
              ["(b)", "Services donnant accès à des services de médias audiovisuels", "Aide intégrée à l'application et chat de support"],
              ["(c)", "Certains éléments des services de transport de voyageurs aérien, par autobus, ferroviaire et par voie d'eau", "Aide à la réservation, informations de voyage et chat sur le site web ou l'application"],
              ["(d)", "Services bancaires aux consommateurs", "Chatbots et voicebots qui répondent aux questions sur les comptes ou les cartes"],
              ["(e)", "Livres numériques et logiciels spécialisés", "Help desk pour les applications de lecture et les achats"],
              ["(f)", "Services de commerce électronique", "Widget de chat sur la boutique, bot de suivi de commande, parcours de retour"],
            ],
          },
          {
            type: "p",
            text: "La directive définit les services de commerce électronique comme des services fournis à distance, au moyen de sites web et de services sur appareils mobiles, par voie électronique et à la demande individuelle d'un consommateur en vue de conclure un contrat de consommation. Les considérants de la directive ajoutent que les obligations relatives au commerce électronique couvrent la vente en ligne de tout produit ou service. La troisième colonne du tableau est une suggestion de points à vérifier, pas une description de ce que la loi exige de votre entreprise.",
          },
        ],
      },
      {
        heading: "Dates clés et périodes transitoires",
        blocks: [
          {
            type: "p",
            text: "L'EAA est une directive : elle s'applique aux entreprises par l'intermédiaire des lois nationales. L'article 31 imposait aux États membres d'adopter et de publier ces lois au plus tard le 28 juin 2022 et de les appliquer à partir du 28 juin 2025. L'article 32 ajoute certaines périodes transitoires.",
          },
          {
            type: "table",
            caption: "Dates de l'EAA pour les services (directive (UE) 2019/882)",
            head: ["Date", "Signification", "Article"],
            rows: [
              ["28 juin 2022", "Date limite pour que les États membres adoptent et publient les lois nationales qui transposent la directive", "Article 31"],
              ["28 juin 2025", "Application des mesures nationales. L'article 2(2) couvre les services fournis aux consommateurs après cette date", "Articles 2(2) et 31"],
              ["Jusqu'à 5 ans à compter du 28 juin 2025", "Les contrats de services conclus avant le 28 juin 2025 peuvent se poursuivre sans modification jusqu'à leur expiration", "Article 32"],
              ["28 juin 2030", "Fin de la période pendant laquelle les prestataires de services peuvent continuer à fournir leurs services avec des produits qu'ils utilisaient déjà légalement pour des services similaires", "Article 32"],
              ["Jusqu'à 20 ans de service", "Les États membres peuvent autoriser les terminaux en libre-service utilisés avant le 28 juin 2025 à continuer de fonctionner jusqu'à la fin de leur vie utile, sans dépasser 20 ans après leur mise en service", "Article 32"],
            ],
          },
          {
            type: "p",
            text: "Comme chaque État membre rédige sa propre loi, les textes nationaux et les autorités chargées de les faire appliquer diffèrent d'un pays à l'autre. La Commission indique qu'elle surveille la transposition complète et correcte de l'acte. Si vous servez des clients dans plusieurs pays de l'UE, vérifiez la loi nationale de chacun.",
          },
        ],
      },
      {
        heading: "L'exemption des microentreprises et les autres limites",
        blocks: [
          {
            type: "p",
            text: "L'article 3(23) définit une microentreprise comme une entreprise qui occupe moins de 10 personnes et dont le chiffre d'affaires annuel n'excède pas 2 millions d'EUR ou dont le total du bilan annuel n'excède pas 2 millions d'EUR. En vertu de l'article 4(5), les microentreprises qui fournissent des services sont exemptées des exigences d'accessibilité de l'article 4(3) et des obligations liées au respect de ces exigences. Les considérants expliquent qu'imposer à ces entreprises de réaliser une évaluation constituerait en soi une charge disproportionnée. La directive encourage néanmoins les microentreprises à fournir des services conformes aux exigences.",
          },
          {
            type: "p",
            text: "L'exemption ne concerne que les services. Les microentreprises qui commercialisent des produits sont traitées différemment et ne sont pas totalement exemptées.",
          },
          {
            type: "p",
            text: "Pour toutes les autres entreprises, l'article 14 prévoit que les exigences d'accessibilité ne s'appliquent que dans la mesure où leur respect n'exige pas une modification importante qui altère fondamentalement la nature même du service, et n'impose pas de charge disproportionnée. Une entreprise qui s'en prévaut doit réaliser une évaluation selon les critères de l'annexe VI. Les prestataires de services doivent la renouveler lorsque le service est modifié, lorsqu'une autorité le demande, et au moins tous les cinq ans. Les considérants ajoutent que le manque de priorité, de temps ou de connaissances ne devrait pas être considéré comme un motif légitime.",
          },
        ],
      },
      {
        heading: "Ce que dit l'annexe I sur le support client",
        blocks: [
          {
            type: "p",
            text: "L'article 4(3) prévoit que tous les services, à l'exception des services de transport urbains et suburbains et des services de transport régionaux, doivent respecter la section III de l'annexe I, qui fixe les exigences générales d'accessibilité pour les services. La section IV ajoute des exigences pour certains services, comme les services bancaires aux consommateurs et le commerce électronique. Trois points de la section III comptent le plus pour les équipes support :",
          },
          {
            type: "ul",
            items: [
              "Point (a) : les produits utilisés pour fournir le service doivent être accessibles.",
              "Point (c) : les sites web, y compris les applications en ligne associées, et les services sur appareils mobiles, y compris les applications mobiles, doivent être rendus accessibles de manière cohérente et adéquate, en les rendant perceptibles, utilisables, compréhensibles et robustes.",
              "Point (d) : lorsqu'ils existent, les services d'assistance (help desks, centres d'appels, assistance technique, services de relais et services de formation) doivent fournir des informations sur l'accessibilité du service et sa compatibilité avec les technologies d'assistance, dans des modes de communication accessibles.",
            ],
          },
          {
            type: "p",
            text: "L'article 13 ajoute une obligation de transparence. Les prestataires de services préparent des informations, conformément à l'annexe V, qui expliquent comment le service satisfait aux exigences d'accessibilité, et les mettent à la disposition du public sous forme écrite et orale, y compris d'une manière accessible aux personnes handicapées. Les orientations d'AccessibleEU ajoutent que ces informations doivent être conservées aussi longtemps que le service est en exploitation.",
          },
          {
            type: "p",
            text: "Un widget de chat ou un bot de support qui fonctionne sur votre site web ou votre application fait partie de l'interface utilisée par les clients : il est donc logique de le soumettre au même critère (perceptible, utilisable, compréhensible et robuste). Votre help desk, qu'il soit tenu par des personnes ou par des bots, doit aussi être prêt à répondre aux questions sur l'accessibilité de votre service.",
          },
        ],
      },
      {
        heading: "Conseils pratiques pour les widgets de chat et les bots de support",
        blocks: [
          {
            type: "p",
            text: "La directive ne dresse pas de liste de contrôles techniques pour un widget de chat. Les points ci-dessous sont des pratiques d'ingénierie courantes qui correspondent aux principes de l'annexe I. Testez-les avec de vraies technologies d'assistance, comme les lecteurs d'écran et la navigation au clavier seul.",
          },
          {
            type: "ul",
            items: [
              "Rendez le bouton d'ouverture du chat, le champ de message, les boutons et les réponses rapides utilisables au clavier seul, avec un indicateur de focus visible.",
              "Donnez à chaque contrôle un libellé textuel annoncé par les lecteurs d'écran, et annoncez les nouveaux messages sans déplacer le focus de l'utilisateur.",
              "Ne vous reposez pas uniquement sur la couleur, les icônes ou les images pour transmettre le sens. Donnez aux images et aux cartes des alternatives textuelles.",
              "Évitez les délais d'inactivité courts qui ferment le chat, ou prévenez avant la fermeture et laissez le client continuer.",
              "Gardez des réponses de bot courtes et simples, et offrez aux clients un moyen facile de joindre une personne, avec transmission de l'historique de la conversation.",
              "Apprenez au bot et à vos agents à répondre aux questions sur l'accessibilité de votre service et à renvoyer vers vos informations au titre de l'article 13.",
              "Proposez plus d'un canal de contact, comme le chat et l'e-mail, et offrez aux personnes qui appellent un voicebot une alternative textuelle.",
            ],
          },
          {
            type: "p",
            text: "Pour le détail technique, consultez la norme EN 301 549, la norme européenne sur les exigences d'accessibilité applicables aux produits et services TIC. La décision d'exécution (UE) 2021/1339 de la Commission cite EN 301 549 V3.2.1 comme norme harmonisée au titre de la directive sur l'accessibilité du web, qui couvre les sites web et applications du secteur public. L'ETSI a adopté EN 301 549 V4.1.1 le 24 août 2026. Cette version passe aux WCAG 2.2 et ajoute une annexe qui met ses exigences en correspondance avec l'EAA. AccessibleEU indique que la V4.1.1 n'est pas encore la référence juridique pour démontrer la conformité à l'EAA ou à la directive sur l'accessibilité du web, et que la référence reste la V3.2.1, fondée sur les WCAG 2.1 niveau AA, jusqu'à ce que la Commission cite la V4.1.1 au Journal officiel.",
          },
          {
            type: "note",
            text: "Ceci ne constitue pas un conseil juridique. Cette page résume la directive (UE) 2019/882 et les orientations officielles de l'UE telles que vérifiées le 19 octobre 2026. Le fait que votre service soit concerné, et ce que vous devez faire, dépendent de la loi nationale qui vous est applicable. Pour les décisions concernant votre propre service, lisez les textes officiels et consultez un avocat qualifié.",
          },
          {
            type: "p",
            text: "TascaLab construit des chatbots et des voicebots sur les outils que vous utilisez déjà, comme Zendesk, Freshdesk, Jira et Slack. Les projets Standard Chat Bot coûtent {{price:standard}} et les projets Voice Bot {{price:voice}}. Les deux incluent une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Depuis quand l'acte européen sur l'accessibilité s'applique-t-il ?",
        a: "L'article 31 imposait aux États membres d'adopter leurs lois nationales au plus tard le 28 juin 2022 et de les appliquer à partir du 28 juin 2025. L'article 2(2) couvre les services fournis aux consommateurs après le 28 juin 2025.",
      },
      {
        q: "Les petites entreprises sont-elles exemptées de l'acte européen sur l'accessibilité ?",
        a: "Les microentreprises qui fournissent des services sont exemptées en vertu de l'article 4(5). L'article 3(23) définit une microentreprise comme occupant moins de 10 personnes, avec un chiffre d'affaires annuel ou un total du bilan annuel n'excédant pas 2 millions d'EUR. L'exemption ne couvre pas entièrement les microentreprises qui commercialisent des produits.",
      },
      {
        q: "L'acte européen sur l'accessibilité couvre-t-il le support client ?",
        a: "Selon l'annexe I, section III, point (d), lorsqu'ils existent, les services d'assistance tels que les help desks, les centres d'appels, l'assistance technique, les services de relais et les services de formation doivent fournir des informations sur l'accessibilité du service et sa compatibilité avec les technologies d'assistance, dans des modes de communication accessibles.",
      },
      {
        q: "EN 301 549 est-elle la norme harmonisée pour l'EAA ?",
        a: "EN 301 549 V4.1.1, adoptée le 24 août 2026, ajoute une annexe qui met ses exigences en correspondance avec l'EAA. AccessibleEU indique qu'elle n'est pas encore la référence juridique pour la conformité à l'EAA tant que la Commission ne l'a pas citée au Journal officiel, et que la référence reste la V3.2.1 d'ici là.",
      },
      {
        q: "Les contrats de services signés avant juin 2025 doivent-ils être modifiés ?",
        a: "L'article 32 permet aux contrats de services conclus avant le 28 juin 2025 de se poursuivre sans modification jusqu'à leur expiration, mais pas plus de cinq ans à compter de cette date.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Directive (EU) 2019/882 (European Accessibility Act)", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" },
      { label: "EUR-Lex — Summary: Accessibility of products and services", url: "https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html" },
      { label: "European Commission — European Accessibility Act (EAA)", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" },
      { label: "AccessibleEU — Guidance on legislation", url: "https://accessible-eu-centre.ec.europa.eu/document/download/7bf9cb97-8ccf-421f-9d2d-6d1283e602ef_en?filename=AccEU_Guidance+on+legislation_English_acc.pdf" },
      { label: "AccessibleEU — The European accessibility standard EN 301 549 has been updated", url: "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en" },
      { label: "ETSI — EN 301 549 V4.1.1 (2026-09)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf" },
      { label: "EUR-Lex — Commission Implementing Decision (EU) 2021/1339", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1339" },
    ],
    related: ["website-chatbot-for-support", "eu-ai-act-chatbot-rules", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "n8n-zendesk-integration",
    slug: "integration-n8n-zendesk",
    category: "guides",
    navLabel: "Intégration n8n Zendesk",
    primaryKeyword: "intégration n8n Zendesk",
    title: "Intégration n8n Zendesk : nodes, déclencheurs et webhooks",
    description:
      "Guide de l'intégration n8n Zendesk : opérations du node Zendesk, Zendesk Trigger, token API ou OAuth2, webhooks, limites de débit et exemple de workflow.",
    h1: "Intégration n8n Zendesk : nodes, identifiants et exemples de workflows",
    intro:
      "n8n se connecte à Zendesk via deux nodes intégrés. Le node Zendesk travaille sur les tickets, les champs de ticket, les utilisateurs et les organisations, et le node Zendesk Trigger lance un workflow quand quelque chose se produit dans Zendesk. Les deux utilisent le même identifiant (credential) : un token API ou OAuth2. Si vous préférez garder les règles dans Zendesk, vous pouvez à la place diriger un webhook Zendesk vers un node Webhook de n8n et l'activer depuis un déclencheur Zendesk.",
    keyFacts: [
      "Le node Zendesk de n8n dispose de quatre ressources : Ticket, Ticket Field, User et Organization.",
      "Définir des tags avec l'opération Update Ticket du node remplace toute la liste de tags. Les tags que vous omettez sont supprimés.",
      "Le credential Zendesk de n8n prend en charge un token API (sous-domaine, e-mail de connexion et token) ou OAuth2.",
      "Zendesk signe les requêtes webhook avec les en-têtes X-Zendesk-Webhook-Signature et X-Zendesk-Webhook-Signature-Timestamp.",
      "Les limites de l'API Zendesk Suite vont de 200 requêtes par minute sur Team à 2 500 sur Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Ce que peut faire le node Zendesk de n8n",
        blocks: [
          {
            type: "p",
            text: "Le node Zendesk lit ou modifie des données dans Zendesk en tant qu'étape d'un workflow. La documentation de n8n regroupe ses opérations par ressource.",
          },
          {
            type: "table",
            caption: "Ressources et opérations du node Zendesk (documentation n8n, vérifiée en octobre 2026)",
            head: ["Ressource", "Opérations"],
            rows: [
              ["Ticket", "Créer, supprimer, obtenir un ou plusieurs tickets, mettre à jour et récupérer un ticket suspendu"],
              ["Ticket Field", "Obtenir un champ de ticket, ou obtenir tous les champs de ticket système et personnalisés"],
              ["User", "Créer, supprimer, obtenir un ou plusieurs utilisateurs, mettre à jour, rechercher, obtenir les organisations d'un utilisateur et obtenir les données associées"],
              ["Organization", "Créer, supprimer, compter, obtenir une ou plusieurs organisations, mettre à jour et obtenir les données associées"],
            ],
          },
          {
            type: "p",
            text: "Un comportement surprend souvent. Quand vous utilisez Update Ticket et remplissez le champ Tag Names or IDs, la documentation de n8n indique que toute la liste des tags du ticket est remplacée : tout tag que vous n'incluez pas est donc supprimé. Cela suit la façon dont l'API Zendesk gère par défaut les mises à jour de tags. La documentation propose trois solutions de contournement : récupérer les tags actuels et les fusionner avec les nouveaux avant la mise à jour, utiliser le node HTTP Request avec la propriété additional_tags de Zendesk, ou appeler l'endpoint tags du ticket. Les deux dernières ajoutent des tags sans supprimer les existants.",
          },
          {
            type: "p",
            text: "Si le node ne prend pas en charge une opération dont vous avez besoin, utilisez le node HTTP Request, réglez Authentication sur Predefined Credential Type et choisissez votre credential Zendesk. La requête réutilise alors la même connexion que le node Zendesk.",
          },
        ],
      },
      {
        heading: "Configurer les identifiants Zendesk dans n8n",
        blocks: [
          {
            type: "p",
            text: "Les nodes Zendesk et Zendesk Trigger utilisent le même credential, et n8n prend en charge deux méthodes d'authentification. Les deux nécessitent votre sous-domaine, c'est-à-dire la partie de votre URL Zendesk située entre https:// et .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "Token API : dans l'Admin Center de Zendesk, ouvrez Apps and integrations, puis APIs, et activez l'accès par token pour l'API Zendesk. Ajoutez un token avec une description et copiez-le. Dans n8n, saisissez le sous-domaine, l'adresse e-mail avec laquelle vous vous connectez à Zendesk et le token.",
              "OAuth2 : dans l'Admin Center de Zendesk, créez un client OAuth sous Apps and integrations, puis APIs. Collez l'URL de callback OAuth de n8n dans le champ d'URL de redirection du client. Copiez l'identifiant unique du client dans Client ID dans n8n et son secret dans Client Secret, ajoutez le sous-domaine, enregistrez et connectez votre compte Zendesk.",
            ],
          },
        ],
      },
      {
        heading: "Node Zendesk Trigger ou webhook Zendesk",
        blocks: [
          {
            type: "p",
            text: "Il existe deux façons de lancer un workflow n8n depuis Zendesk. Le node Zendesk Trigger lance un workflow quand des événements Zendesk correspondent aux conditions définies dans le node. Dans l'exemple de la documentation de n8n, il filtre les tickets dont le statut est Open, et le workflow s'exécute dès que vous l'activez.",
          },
          {
            type: "p",
            text: "L'autre solution consiste à construire la connexion vous-même. Dans l'Admin Center de Zendesk, allez dans Apps and integrations, puis Webhooks, créez un webhook, choisissez Trigger ou Automation comme méthode de connexion et faites-le pointer vers la Production URL d'un node Webhook de n8n. Ajoutez ensuite l'action « Notify webhook » à un déclencheur ou à une automatisation Zendesk et rédigez la charge utile, qui ne peut pas dépasser 16 000 caractères. Les conditions restent ainsi dans les règles métier de Zendesk, et vous choisissez exactement quels champs envoyer.",
          },
          {
            type: "table",
            caption: "Deux façons de lancer un workflow n8n depuis Zendesk",
            head: ["Question", "Node Zendesk Trigger", "Webhook Zendesk + node Webhook de n8n"],
            rows: [
              ["Où se trouvent les conditions", "Dans le node, dans n8n", "Dans un déclencheur ou une automatisation Zendesk avec l'action « Notify webhook »"],
              ["Ce que reçoit n8n", "Les données d'événement fournies par le node", "La charge utile que vous rédigez dans l'action du déclencheur, jusqu'à 16 000 caractères"],
              ["Credential Zendesk", "Nécessaire pour le déclencheur lui-même", "Nécessaire uniquement pour les étapes suivantes qui appellent Zendesk"],
              ["Test", "Exécuter le node dans l'éditeur, comme dans l'exemple de la documentation de n8n", "Utiliser la Test URL du node Webhook, qui écoute pendant 120 secondes, puis passer à la Production URL"],
            ],
          },
          {
            type: "p",
            text: "Si vous utilisez un webhook, vérifiez que les requêtes proviennent bien de Zendesk. Zendesk envoie deux en-têtes, X-Zendesk-Webhook-Signature et X-Zendesk-Webhook-Signature-Timestamp. La signature est base64(HMACSHA256(timestamp + body)), calculée avec le secret de signature du webhook, que vous pouvez afficher sur la page de détails du webhook ou obtenir via l'API. Recalculez-la dans votre workflow et rejetez les requêtes qui ne correspondent pas. Zendesk précise aussi qu'une même action peut appeler un webhook plus d'une fois : faites en sorte que le workflow puisse s'exécuter deux fois pour le même ticket sans dommage.",
          },
          {
            type: "p",
            text: "Le node Webhook peut répondre immédiatement, quand le dernier node se termine, ou via un node Respond to Webhook distinct. Pour les workflows plus longs, répondre immédiatement donne à Zendesk une réponse rapide pendant que le reste du travail se poursuit.",
          },
        ],
      },
      {
        heading: "Exemple de workflow : classer les nouveaux tickets et notifier Slack",
        blocks: [
          {
            type: "p",
            text: "Voici un schéma courant, décrit étape par étape. Il montre comment les nodes s'articulent. Ce n'est pas une étude de cas TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Déclenchement : un node Zendesk Trigger, ou un node Webhook alimenté par un déclencheur Zendesk qui s'active à la création d'un ticket. Envoyez au moins l'ID du ticket.",
              "Récupération : un node Zendesk avec la ressource Ticket récupère le ticket complet, y compris l'objet, la description et les tags actuels.",
              "Classification : un node Text Classifier trie le texte dans des catégories que vous définissez, comme facturation, problème technique ou remboursement. Chaque catégorie a un nom et une description qui aide le modèle. Par défaut, les éléments qui ne correspondent à aucune catégorie sont écartés : activez la branche Other pour les récupérer.",
              "Mise à jour : un node Zendesk définit le groupe et les tags. Fusionnez d'abord les tags existants, ou ajoutez les tags via le node HTTP Request avec additional_tags, pour ne pas effacer les tags posés par les agents.",
              "Notification : un node Slack publie la catégorie et un lien vers le ticket dans le canal de l'équipe.",
              "Gestion des erreurs : envoyez les exécutions en échec vers une alerte, et attendez puis réessayez quand Zendesk renvoie une réponse 429.",
            ],
          },
          {
            type: "p",
            text: "Vous pouvez étendre ce schéma. Envoyez les tickets urgents dans un canal Slack distinct, ou recherchez l'organisation du client avec la ressource Organization avant de choisir un groupe.",
          },
        ],
      },
      {
        heading: "Limites de débit et lieu d'exécution de n8n",
        blocks: [
          {
            type: "p",
            text: "Zendesk limite le nombre de requêtes API par minute selon l'offre. Sa documentation développeur indique ces limites par défaut pour les API Support et Help Center :",
          },
          {
            type: "ul",
            items: [
              "Suite Team : 200 requêtes par minute.",
              "Suite Growth et Suite Professional : 400 requêtes par minute.",
              "Suite Enterprise : 700 requêtes par minute.",
              "Suite Enterprise Plus : 2 500 requêtes par minute.",
            ],
          },
          {
            type: "p",
            text: "L'add-on High Volume API porte une offre éligible à 2 500 requêtes par minute. Il remplace la limite de l'offre au lieu de s'y ajouter, et nécessite Suite Growth ou supérieur (ou Support Professional ou supérieur) avec au moins 10 sièges d'agent. Au-delà de la limite, Zendesk renvoie un HTTP 429 avec un en-tête Retry-After qui indique combien de secondes attendre. Certains endpoints ont leurs propres limites, plus strictes. Comptez les appels API effectués à chaque exécution et multipliez-les par votre volume de tickets en pointe. Les traitements en masse, comme l'ajout rétroactif de tags sur d'anciens tickets, risquent davantage d'atteindre la limite : traitez-les par lots et ajoutez des pauses.",
          },
          {
            type: "p",
            text: "n8n s'exécute en tant que n8n Cloud, une instance gérée que n8n exploite pour vous, ou en auto-hébergement sur votre propre machine ou infrastructure. Pour la plupart des installations auto-hébergées, la documentation recommande Docker, et elle recommande n8n Cloud si vous n'avez pas l'habitude d'administrer des serveurs. Quelle que soit la méthode de déclenchement, Zendesk doit pouvoir joindre votre instance n8n. Si une instance auto-hébergée se trouve derrière un reverse proxy, définissez N8N_WEBHOOK_URL sur son URL de base publique pour que n8n affiche les bonnes URL de webhook et que les services externes les enregistrent correctement. N8N_WEBHOOK_URL remplace WEBHOOK_URL, qui fonctionne encore mais est déprécié à partir de n8n 2.35.0.",
          },
          {
            type: "p",
            text: "TascaLab construit ce type d'automatisations Zendesk avec n8n, Make, des API et des webhooks, sur les outils que vous utilisez déjà. Les projets Ticket Routing & Categorization coûtent {{price:routing}}, et les projets Custom Automation {{price:custom}}. La plupart des mises en place prennent 1 à 3 semaines, et chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel Health Check gratuit de 30 minutes.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "n8n dispose-t-il d'une intégration Zendesk native ?",
        a: "Oui. n8n propose un node Zendesk pour les tickets, les champs de ticket, les utilisateurs et les organisations, et un node Zendesk Trigger qui lance des workflows à partir d'événements Zendesk. Les deux utilisent le même credential Zendesk.",
      },
      {
        q: "Pourquoi le node Zendesk de n8n supprime-t-il les tags de mes tickets ?",
        a: "Quand vous remplissez Tag Names or IDs dans l'opération Update Ticket, toute la liste de tags est remplacée. La documentation de n8n suggère de fusionner d'abord les tags existants, ou d'ajouter les tags via le node HTTP Request avec la propriété additional_tags de Zendesk ou l'endpoint tags.",
      },
      {
        q: "Quelles méthodes d'authentification le credential Zendesk de n8n prend-il en charge ?",
        a: "Un token API, saisi avec votre sous-domaine et l'e-mail avec lequel vous vous connectez, ou OAuth2, avec le client ID et le secret d'un client OAuth que vous créez dans Zendesk.",
      },
      {
        q: "Comment vérifier qu'une requête webhook provient bien de Zendesk ?",
        a: "Recalculez base64(HMACSHA256(timestamp + body)) avec le secret de signature du webhook et comparez le résultat à l'en-tête X-Zendesk-Webhook-Signature. Le timestamp se trouve dans l'en-tête X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Que se passe-t-il quand un workflow atteint la limite de débit de l'API Zendesk ?",
        a: "Zendesk rejette la requête avec un HTTP 429 et un en-tête Retry-After qui indique combien de secondes attendre. Les limites par défaut vont de 200 requêtes par minute sur Suite Team à 2 500 sur Suite Enterprise Plus.",
      },
    ],
    sources: [
      { label: "n8n Docs — Zendesk node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk" },
      { label: "n8n Docs — Zendesk Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger" },
      { label: "n8n Docs — Zendesk credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/zendesk" },
      { label: "n8n Docs — Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook" },
      { label: "n8n Docs — Text Classifier node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Configure webhook URLs with reverse proxy", url: "https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "Zendesk Developer Docs — Rate limits", url: "https://developer.zendesk.com/api-reference/introduction/rate-limits/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
