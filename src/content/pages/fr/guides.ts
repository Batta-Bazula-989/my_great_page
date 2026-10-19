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
            text: "TascaLab construit des automatisations du support sur les outils que vous utilisez déjà (Zendesk, Freshdesk, Jira, Slack et outils internes) avec des API, des webhooks, Make et n8n. La plupart des mises en place prennent 1 à 3 semaines. Chaque projet comprend une documentation de base et 30 jours de support après le lancement. Vous pouvez commencer par un appel d'audit gratuit de 30 minutes.",
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
];
