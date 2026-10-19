import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-vergleich",
    category: "guides",
    navLabel: "n8n vs. Make vs. Zapier",
    primaryKeyword: "n8n vs Make vs Zapier für Support-Automatisierung",
    title: "n8n vs. Make vs. Zapier für Support-Automatisierung (2026)",
    description:
      "n8n vs. Make vs. Zapier für Support-Automatisierung: Lizenz und Hosting, Zählung der Nutzung, Connectors für Zendesk, Freshdesk, Jira und Slack, Webhooks, Code.",
    h1: "n8n vs. Make vs. Zapier für Support-Automatisierung",
    intro:
      "Die größten Unterschiede zwischen n8n, Make und Zapier für die Supportarbeit liegen darin, wo sie laufen und wie sie die Nutzung zählen. n8n lässt sich unter seiner Sustainable Use License selbst hosten oder als n8n Cloud nutzen, während Make und Zapier als gehostete Dienste laufen. Alle drei verbinden sich mit Zendesk, Freshdesk, Jira und Slack, nehmen Webhooks an und haben einen Code-Schritt; die Wahl hängt daher meist vom Datenstandort, vom Volumen und davon ab, wie viel individuelle Logik Sie brauchen.",
    keyFacts: [
      "Die selbst gehostete Software von n8n steht unter der Sustainable Use License, einer Fair-Code-Lizenz, die n8n 2022 geschaffen hat. n8n bezeichnet sich selbst nicht als Open Source.",
      "Stand Oktober 2026 zählt n8n Executions (ein Workflow-Durchlauf), Make zählt Credits (Operations im Verhältnis 1:1 umgerechnet) und Zapier zählt Tasks (erfolgreiche Aktionsschritte).",
      "Zapier-Trigger, Filter-Schritte und Paths-Schritte verbrauchen keine Tasks. Trigger-Module in Make verbrauchen 1 Credit pro Lauf, auch wenn sie keine neuen Daten finden.",
      "Make lässt Sie beim Anlegen einer Organisation ein Rechenzentrum in den USA oder in der EU wählen. Später lässt sich das nicht ändern.",
      "Alle drei haben einen Webhook-Trigger und einen Code-Schritt, der JavaScript oder Python ausführt.",
    ],
    sections: [
      {
        heading: "Direktvergleich",
        blocks: [
          {
            type: "p",
            text: "Die Tabelle fasst zusammen, was die Dokumentation des jeweiligen Anbieters sagt, geprüft im Oktober 2026. Preise sind bewusst weggelassen. Pläne ändern sich oft; prüfen Sie daher die aktuelle Preisseite, bevor Sie sich entscheiden.",
          },
          {
            type: "table",
            caption: "n8n vs. Make vs. Zapier für Support-Automatisierung (Stand Oktober 2026)",
            head: ["Merkmal", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Wo es läuft",
                "n8n Cloud (von n8n betrieben) oder selbst gehostet auf Ihrem eigenen Rechner oder Ihrer eigenen Infrastruktur",
                "In den eigenen Rechenzentren von Make. Sie wählen pro Organisation USA oder EU",
                "In der verwalteten Cloud von Zapier. Keine selbst gehostete oder On-Premises-Version",
              ],
              [
                "Lizenz",
                "Sustainable Use License (Fair Code) für die selbst gehostete Software",
                "Gehosteter Dienst gemäß den Bedingungen von Make",
                "Gehosteter Dienst gemäß den Bedingungen von Zapier",
              ],
              [
                "Nutzungseinheit",
                "Executions: Eine Execution ist ein Durchlauf eines Workflows",
                "Credits: Die meisten Module verbrauchen 1 Credit pro Operation",
                "Tasks: ein Task pro erfolgreichem Aktionsschritt",
              ],
              [
                "Helpdesk-Connectors",
                "Nodes für Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software und Slack",
                "Apps für Zendesk, Freshdesk, Jira Cloud Platform und Slack",
                "Apps für Zendesk, Freshdesk, Jira Service Management und Slack",
              ],
              [
                "Webhook-Trigger",
                "Webhook-Node mit getrennten Test- und Produktions-URLs",
                "Modul Custom webhook in der Webhooks-App",
                "Webhooks by Zapier: Catch Hook und Catch Raw Hook",
              ],
              [
                "Code-Schritt",
                "Code-Node: JavaScript oder Python",
                "Make Code App: JavaScript oder Python",
                "Code by Zapier: JavaScript (Node.js 22) oder Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting und Lizenz",
        blocks: [
          {
            type: "p",
            text: "n8n bietet Ihnen zwei Optionen. n8n Cloud ist eine verwaltete Instanz, die n8n für Sie betreibt. Self-Hosting bedeutet, n8n auf Ihrem eigenen Rechner oder Ihrer eigenen Infrastruktur zu betreiben. Für die meisten selbst gehosteten Setups empfiehlt die Dokumentation Docker. Wenn Sie keine Erfahrung mit der Verwaltung von Servern haben, empfiehlt sie stattdessen n8n Cloud.",
          },
          {
            type: "p",
            text: "Die selbst gehostete Software fällt unter die Sustainable Use License, eine Fair-Code-Lizenz, die n8n 2022 geschaffen hat. Sie dürfen die Software nutzen, verändern, abgeleitete Werke daraus erstellen und weitergeben, allerdings mit Einschränkungen. Die Nutzung ist auf interne Geschäftszwecke oder auf nicht kommerzielle bzw. private Nutzung beschränkt, und weitergeben dürfen Sie die Software nur kostenlos und zu nicht kommerziellen Zwecken. Die Definition der Open Source Initiative erlaubt keine Nutzungsbeschränkungen; deshalb bezeichnet sich n8n nicht als Open Source. Dateien mit „.ee.“ im Namen fallen unter eine separate n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make führt Ihre Szenarien in eigenen Rechenzentren aus. Beim Anlegen einer Organisation wählen Sie die Vereinigten Staaten oder die Europäische Union. Diese Einstellung bestimmt, wo Ihre Daten gespeichert und verarbeitet werden, und lässt sich nachträglich nicht ändern.",
          },
          {
            type: "p",
            text: "Zapier läuft in seiner eigenen verwalteten Cloud. In seinem Vergleich mit n8n schreibt Zapier, dass es n8n bei Automatisierungen, die aus Compliance-Gründen in einer selbst gehosteten, abgeschotteten (air-gapped) oder On-Premises-Umgebung laufen müssen, nicht vollständig ersetzen kann.",
          },
          {
            type: "note",
            text: "Dies ist eine Zusammenfassung der n8n-Lizenz, keine Auslegung. Wenn Sie n8n in ein Produkt einbauen wollen, das Sie verkaufen, lesen Sie zuerst den vollständigen Lizenztext und die Nutzungsbeschränkungen.",
          },
        ],
      },
      {
        heading: "Wie die Tools die Nutzung zählen (Stand Oktober 2026)",
        blocks: [
          {
            type: "p",
            text: "Die drei Produkte verwenden unterschiedliche Abrechnungseinheiten; ihre Plan-Limits lassen sich daher nicht direkt vergleichen. So definiert jeder Anbieter seine Einheit.",
          },
          {
            type: "ul",
            items: [
              "n8n-Executions: n8n definiert eine Execution als einen Durchlauf eines Workflows. Bezahlte Pläne, ob Cloud oder selbst gehostet, haben ein Execution-Kontingent, und nur Produktions-Executions zählen dazu. Manuelle Durchläufe aus dem Editor zählen nicht. Ein Schedule Trigger zählt bei jedem Auslösen. Jede eingehende Webhook-Anfrage, die den Workflow startet, zählt einmal.",
              "Make-Credits: Seit dem 27. August 2025 rechnet Make in Credits ab, und bestehende Operations wurden im Verhältnis 1:1 umgerechnet. Eine Operation ist ein Modullauf, der Daten verarbeitet oder prüft. Die meisten Apps verbrauchen 1 Credit pro Operation. Trigger-Module verbrauchen 1 Credit pro Lauf, auch wenn sie keine neuen Daten finden. Mit dem eigenen KI-Anbieter von Make verbrauchen KI-Funktionen Credits auf Basis von Operations und Tokens. Wenn Sie Ihren eigenen KI-Anbieter anbinden, decken die Credits die Operations ab, und die Tokens bezahlen Sie bei diesem Anbieter.",
              "Zapier-Tasks: Zapier zählt einen Task jedes Mal, wenn ein Aktionsschritt erfolgreich läuft. Trigger verbrauchen nie Tasks, Filter- und Paths-Schritte ebenso wenig. Schritte, die mit einem Fehler enden oder anhalten, zählen nicht. Manche Produkte, etwa Schritte mit AI by Zapier, werden mit einem höheren Satz angerechnet.",
            ],
          },
          {
            type: "p",
            text: "Diese Einheiten sind wichtig für einen Support-Bot, der bei jedem neuen Ticket oder jeder Chat-Nachricht läuft. In n8n zählt auch ein langer Workflow als eine Execution pro Durchlauf. In Make verbraucht jedes Modul, das läuft, Credits. In Zapier ist jeder erfolgreiche Aktionsschritt ein Task. In Make verbraucht ein Szenario, das Ihren Helpdesk nach Zeitplan abfragt, auch dann Credits, wenn sich nichts geändert hat. Webhook-basierte Instant-Trigger vermeiden, dass Sie für diese leeren Prüfungen zahlen.",
          },
        ],
      },
      {
        heading: "Connectors für Zendesk, Freshdesk, Jira und Slack",
        blocks: [
          {
            type: "p",
            text: "Alle drei Tools haben fertige Connectors für diese vier, aber Namen und Funktionsumfang unterscheiden sich. Prüfen Sie vor der Festlegung, ob genau der Trigger und die Aktion existieren, die Sie brauchen.",
          },
          {
            type: "ul",
            items: [
              "n8n: Es gibt einen Zendesk-Node und einen separaten Zendesk-Trigger-Node. Der Freshdesk-Node deckt Tickets und Kontakte ab. Der Jira-Software-Node deckt Issues, Kommentare und Anhänge ab. Der Slack-Node deckt Nachrichten, Channels, Dateien und Reaktionen ab, und seine Operation 'Send and Wait for Response' unterstützt Freigabe-Abläufe. Unterstützt ein Node eine Operation nicht, empfiehlt die Dokumentation, die API mit dem HTTP-Request-Node aufzurufen und dabei dasselbe Credential wiederzuverwenden.",
              "Make: Die Zendesk-App enthält Module, die Tickets und Ticketaktivitäten beobachten. Sie arbeiten als Instant-Trigger über einen Webhook, den Sie in Zendesk anlegen. Die Freshdesk-App deckt Tickets, Konversationen, Kontakte und Firmen ab und bietet ebenfalls webhook-basierte Instant-Trigger. Make führt außerdem eine Jira-Cloud-Platform-App und eine Slack-App.",
              "Zapier: Die App für Jira Service Management hat Trigger für neue und aktualisierte Anfragen und eine Aktion, die Anfragen erstellt. Zapier listet fertige Zaps auf, die sie mit Zendesk und Slack verbinden. Die Freshdesk-App lässt sich mit Slack und Jira Software Cloud verbinden.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks und Code-Schritte",
        blocks: [
          {
            type: "p",
            text: "Mit Webhooks kann ein Helpdesk oder Chat-Kanal eine Automatisierung in dem Moment starten, in dem etwas passiert. Code-Schritte decken die Logik ab, die eingebaute Schritte nicht leisten, etwa eine Payload umbauen oder eine API ohne Connector aufrufen.",
          },
          {
            type: "ul",
            items: [
              "n8n-Webhook-Node: Jeder Webhook-Node bekommt zwei URLs, eine Test URL und eine Production URL. Er kann sofort antworten, nach Abschluss des letzten Nodes oder über einen separaten Respond-to-Webhook-Node.",
              "Make-Webhooks-App: Das Modul Custom webhook erzeugt eine eindeutige URL für ein Szenario, und denselben Webhook können Sie nicht für mehrere Szenarien nutzen. Ein Modul Webhook response steuert, was der Aufrufer zurückbekommt. Ohne ein solches Modul lautet die Standardantwort „Accepted“.",
              "Webhooks by Zapier: Catch Hook liefert Ihnen eine eindeutige URL, an die die andere App Anfragen sendet, und parst den Request-Body. Catch Raw Hook gibt den Body ungeparst zurück, zusammen mit den Headern. Retrieve Poll funktioniert umgekehrt und ruft Daten per GET-Anfrage ab.",
              "n8n-Code-Node: führt JavaScript oder Python aus, entweder einmal für alle eingehenden Items (Standard) oder einmal pro Item. In n8n Cloud kann die Python-Option keine Bibliotheken importieren.",
              "Make Code App: Das Modul Run code führt JavaScript oder Python aus und bringt einige integrierte Bibliotheken mit. Laut Dokumentation von Make erfordert das Importieren eigener Bibliotheken einen Enterprise-Plan.",
              "Code by Zapier: Code-Schritte können Trigger oder Aktionen sein und unterstützen JavaScript (Node.js 22) und Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Welches Tool zu Ihrem Supportteam passt",
        blocks: [
          {
            type: "ul",
            items: [
              "Ticketdaten müssen auf Infrastruktur bleiben, die Sie kontrollieren: n8n ist das einzige der drei Tools, das eine Self-Hosting-Option dokumentiert.",
              "Sie wollen ein gehostetes Tool mit Datenspeicherung in der EU, festgelegt pro Organisation: Das deckt die EU-Rechenzentrumsoption von Make ab.",
              "Ihr Team nutzt bereits Zapier und Ihre Abläufe sind kurz: Trigger und Filter verbrauchen keine Tasks, einfache Benachrichtigungen bleiben also günstig.",
              "Ihre Workflows haben viele Schritte und laufen bei jedem Ticket: Vergleichen Sie die Executions pro Durchlauf bei n8n mit Credits oder Tasks pro Schritt bei Ihrem tatsächlichen Volumen.",
            ],
          },
          {
            type: "p",
            text: "TascaLab baut Support-Automatisierungen auf den Tools auf, die Sie bereits nutzen (Zendesk, Freshdesk, Jira, Slack und interne Tools), mit APIs, Webhooks, Make und n8n. Die meisten Setups dauern 1 bis 3 Wochen. Jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Audit-Call starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ist n8n Open Source?",
        a: "n8n vertreibt seine Software unter der Sustainable Use License, die es als Fair Code bezeichnet. Weil die Lizenz die Nutzung der Software einschränkt, bezeichnet sich n8n nach eigener Aussage nicht als Open Source.",
      },
      {
        q: "Kann ich Make oder Zapier selbst hosten?",
        a: "Make führt Szenarien in seinem eigenen Rechenzentrum in den USA oder in der EU aus, das Sie beim Anlegen einer Organisation wählen. Zapier läuft in seiner verwalteten Cloud und sagt, dass es n8n dort, wo Automatisierungen in einer selbst gehosteten oder On-Premises-Umgebung laufen müssen, nicht vollständig ersetzen kann.",
      },
      {
        q: "Verbrauchen Zapier-Trigger Tasks?",
        a: "Nein. Zapier zählt einen Task jedes Mal, wenn ein Aktionsschritt erfolgreich läuft. Trigger, Filter-Schritte und Paths-Schritte verbrauchen keine Tasks.",
      },
      {
        q: "Verbraucht ein Make-Trigger Credits, wenn es nichts Neues gibt?",
        a: "Ja. Laut Help Center von Make verbrauchen Trigger-Module 1 Credit pro Lauf, auch wenn sie keine neuen Daten finden. Webhook-basierte Instant-Trigger vermeiden diese leeren Läufe.",
      },
      {
        q: "Was zählt als n8n-Execution?",
        a: "Ein Durchlauf eines Workflows. In bezahlten Plänen zählen nur Produktions-Executions zum Kontingent. Manuelle Durchläufe aus dem Editor zählen nicht.",
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
    slug: "eu-ai-act-chatbot-pflichten",
    category: "guides",
    navLabel: "EU AI Act: Chatbot-Pflichten",
    primaryKeyword: "EU AI Act Chatbot Pflichten",
    title: "EU AI Act: Chatbot-Pflichten, Artikel 50 und Fristen",
    description:
      "EU AI Act und Chatbots erklärt: was Artikel 50 verlangt, wer Anbieter oder Betreiber ist, die wichtigsten Fristen und was der KI-Omnibus 2026 geändert hat.",
    h1: "EU AI Act und Chatbots: was Artikel 50 verlangt und ab wann",
    intro:
      "Nach der KI-Verordnung der EU (Verordnung (EU) 2024/1689, EU AI Act) müssen Anbieter KI-Systeme, die direkt mit Menschen interagieren, etwa Chatbots, so gestalten, dass diese Menschen erfahren, dass sie mit einem KI-System interagieren – es sei denn, das ist aus dem Kontext offensichtlich. Diese Pflicht steht in Artikel 50 und gilt ab dem 2. August 2026. Der KI-Omnibus (Digital Omnibus on AI) von 2026 hat die Fristen für Hochrisiko-Systeme verschoben, doch die Kommission nennt weiterhin den 2. August 2026 als Geltungsbeginn von Artikel 50.",
    keyFacts: [
      "Artikel 50 Absatz 1: Anbieter müssen sicherstellen, dass Menschen informiert werden, dass sie mit einem KI-System interagieren, es sei denn, das ist aus dem Kontext offensichtlich.",
      "Artikel 50 Absatz 5: Die Information muss klar und eindeutig erkennbar spätestens bei der ersten Interaktion gegeben werden.",
      "Die KI-Verordnung ist am 1. August 2024 in Kraft getreten. Artikel 50 gilt ab dem 2. August 2026.",
      "Der KI-Omnibus (Verordnung (EU) 2026/1744) ist am 27. Juli 2026 in Kraft getreten. Er hat die Fristen für Hochrisiko-Systeme auf den 2. Dezember 2027 und den 2. August 2028 verschoben.",
      "Verstöße gegen Artikel 50 können mit Geldbußen von bis zu 15 Millionen EUR oder 3 % des weltweiten Jahresumsatzes geahndet werden, je nachdem, welcher Betrag höher ist.",
    ],
    sections: [
      {
        heading: "Was Artikel 50 für Chatbots verlangt",
        blocks: [
          {
            type: "p",
            text: "Nach Artikel 50 Absatz 1 müssen Anbieter sicherstellen, dass KI-Systeme, die für die direkte Interaktion mit natürlichen Personen bestimmt sind, so konzipiert und entwickelt werden, dass die betroffenen Personen informiert werden, dass sie mit einem KI-System interagieren. Ausgenommen ist der Fall, dass dies für eine angemessen informierte, aufmerksame und verständige Person aufgrund der Umstände und des Nutzungskontexts offensichtlich ist. Die Pflicht gilt nicht für KI-Systeme, die gesetzlich zur Aufdeckung, Verhütung, Ermittlung oder Verfolgung von Straftaten zugelassen sind, vorbehaltlich geeigneter Schutzvorkehrungen.",
          },
          {
            type: "p",
            text: "Artikel 50 Absatz 5 regelt, wie und wann Menschen informiert werden müssen. Die Information muss klar und eindeutig erkennbar spätestens zum Zeitpunkt der ersten Interaktion oder Exposition gegeben werden und den geltenden Barrierefreiheitsanforderungen entsprechen.",
          },
          {
            type: "p",
            text: "Artikel 50 enthält noch weitere Transparenzpflichten. Nur die erste in dieser Liste betrifft speziell Chatbots:",
          },
          {
            type: "ul",
            items: [
              "Artikel 50 Absatz 1: Anbieter von Systemen, die direkt mit Menschen interagieren, müssen diese so gestalten, dass Menschen wissen, dass sie es mit KI zu tun haben.",
              "Artikel 50 Absatz 2: Anbieter von Systemen, die synthetische Audio-, Bild-, Video- oder Textinhalte erzeugen, müssen die Ausgaben in einem maschinenlesbaren Format kennzeichnen, damit sie als KI-generiert erkennbar sind.",
              "Artikel 50 Absatz 3: Betreiber von Systemen zur Emotionserkennung oder zur biometrischen Kategorisierung müssen die betroffenen Personen informieren.",
              "Artikel 50 Absatz 4: Betreiber müssen Deepfakes sowie KI-generierte Texte offenlegen, die veröffentlicht werden, um die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse zu informieren. Für solche Texte gilt die Pflicht nicht, wenn sie menschlich überprüft wurden und jemand die redaktionelle Verantwortung trägt.",
            ],
          },
        ],
      },
      {
        heading: "Anbieter oder Betreiber: wen die Pflicht trifft",
        blocks: [
          {
            type: "p",
            text: "Artikel 3 Nummer 3 definiert einen Anbieter als eine Person oder Stelle, die ein KI-System entwickelt oder entwickeln lässt und es unter ihrem eigenen Namen oder ihrer eigenen Marke in Verkehr bringt oder in Betrieb nimmt, ob entgeltlich oder unentgeltlich. Artikel 3 Nummer 4 definiert einen Betreiber als jeden, der ein KI-System in eigener Verantwortung verwendet, außer im Rahmen einer persönlichen, nicht beruflichen Tätigkeit.",
          },
          {
            type: "p",
            text: "Die Chatbot-Offenlegung in Artikel 50 Absatz 1 ist eine Anbieterpflicht. Die Kennzeichnungspflichten in Artikel 50 Absatz 3 und 4 sind Betreiberpflichten. Wenn Ihr Unternehmen einen Support-Assistenten entwickelt und unter eigener Marke betreibt, prüfen Sie beide Definitionen sorgfältig daraufhin, wie das System gebaut wurde und wer es Kunden zur Verfügung stellt.",
          },
        ],
      },
      {
        heading: "Wie die Offenlegungspflicht auf Support-Automatisierung passt",
        blocks: [
          {
            type: "p",
            text: "Laut den FAQ der Kommission zu Artikel 50 legen ihre Leitlinien vier kumulative Kriterien für die Interaktionspflicht fest: Das System ist ein KI-System, es ist für einen echten wechselseitigen Austausch gebaut, es kommuniziert direkt statt über einen menschlichen Vermittler, und es interagiert mit natürlichen Personen. Laut den FAQ fallen Systeme, die nur im Hintergrund arbeiten, über Maschine-zu-Maschine-Kommunikation oder ohne direkten Kontakt mit Menschen, nicht unter diese Pflicht. Außerdem sei die Ausnahme „offensichtlich“ eng auszulegen.",
          },
          {
            type: "table",
            caption: "Fragen zu gängigen Support-Setups, basierend auf den Kriterien der Kommission",
            head: ["Setup", "Was Sie anhand der Kriterien prüfen sollten"],
            rows: [
              [
                "KI-Chatbot auf Ihrer Website, in WhatsApp oder im Messenger",
                "Tauscht er direkt Nachrichten mit Kunden aus? Falls ja, planen Sie eine Offenlegung bei oder vor der ersten Nachricht.",
              ],
              [
                "KI-Voicebot, der Anrufe annimmt",
                "Dieselbe Frage für gesprochene Gespräche. Artikel 50 Absatz 5 verweist außerdem auf Barrierefreiheitsanforderungen.",
              ],
              [
                "KI, die Tickets klassifiziert und weiterleitet",
                "Arbeitet sie nur im Hintergrund ohne direkten Kontakt mit Kunden? Die FAQ ordnen solche Systeme außerhalb der Interaktionspflicht ein.",
              ],
              [
                "KI, die Antworten entwirft, die ein Agent prüft und sendet",
                "Kommuniziert sie direkt mit dem Kunden oder über einen menschlichen Vermittler? Prüfen Sie das anhand der Leitlinien.",
              ],
            ],
          },
          {
            type: "p",
            text: "In der Praxis beginnen viele Teams jedes KI-Gespräch mit einem kurzen Satz wie „Sie chatten mit einem KI-Assistenten. Geben Sie ‚Agent‘ ein, um eine Person zu erreichen.“ Das ist eine Gestaltungsentscheidung. Ob es für Ihr System ausreicht, ist eine Frage für die Leitlinien und Ihre rechtliche Beratung.",
          },
        ],
      },
      {
        heading: "Wichtige Fristen, einschließlich des KI-Omnibus 2026",
        blocks: [
          {
            type: "p",
            text: "Artikel 113 legt den Zeitplan der KI-Verordnung fest. Im November 2025 schlug die Kommission vor, Teile davon mit einem KI-Omnibus (Digital Omnibus on AI) zu ändern (COM(2025) 836 vom 19. November 2025). Dieser Vorschlag wurde inzwischen angenommen: Nach einer politischen Einigung am 7. Mai 2026 und der förmlichen Annahme wurde er als Verordnung (EU) 2026/1744 veröffentlicht. Laut Kommission ist er am 27. Juli 2026 in Kraft getreten. Die Tabelle zeigt die angenommenen Daten.",
          },
          {
            type: "table",
            caption: "Geltungsbeginn der KI-Verordnung (amtliche Texte, geprüft am 19. Oktober 2026)",
            head: ["Datum", "Was gilt", "Rechtsgrundlage"],
            rows: [
              ["1. August 2024", "Die KI-Verordnung tritt in Kraft", "Artikel 113, Verordnung (EU) 2024/1689"],
              ["2. Februar 2025", "Kapitel I und II gelten, einschließlich KI-Kompetenz und verbotener Praktiken", "Artikel 113 Buchstabe a"],
              ["2. August 2025", "Regeln zu notifizierten Stellen, KI-Modellen mit allgemeinem Verwendungszweck, Governance und Sanktionen gelten (außer Artikel 101)", "Artikel 113 Buchstabe b"],
              ["2. August 2026", "Allgemeine Geltung, einschließlich der Transparenzpflichten nach Artikel 50", "Artikel 113; FAQ der Kommission zu Artikel 50"],
              ["2. Dezember 2026", "Frist für die Kennzeichnung nach Artikel 50 Absatz 2 bei generativen KI-Systemen, die vor dem 2. August 2026 in Verkehr gebracht wurden; neues Verbot von KI, die nicht einvernehmliche intime Inhalte oder Darstellungen sexuellen Kindesmissbrauchs erzeugt", "Verordnung (EU) 2026/1744 (angenommen)"],
              ["2. Dezember 2027", "Hochrisiko-Regeln für Systeme, die nach Artikel 6 Absatz 2 und Anhang III eingestuft sind", "Verordnung (EU) 2026/1744 (angenommen)"],
              ["2. August 2028", "Hochrisiko-Regeln für Systeme, die nach Artikel 6 Absatz 1 und Anhang I (Produkte) eingestuft sind", "Verordnung (EU) 2026/1744 (angenommen); ersetzt das ursprüngliche Datum 2. August 2027"],
            ],
          },
          {
            type: "p",
            text: "Ein Unterschied zwischen Vorschlag und angenommenem Text betrifft generative KI. Der Vorschlag der Kommission hätte Anbietern generativer Systeme, die bereits auf dem Markt sind, eine sechsmonatige Übergangsfrist für die Kennzeichnung nach Artikel 50 Absatz 2 gewährt. Die angenommene Verordnung setzt die Frist auf den 2. Dezember 2026. Laut den FAQ der Kommission gilt die Chatbot-Offenlegung nach Artikel 50 Absatz 1 weiterhin ab dem 2. August 2026.",
          },
        ],
      },
      {
        heading: "Sanktionen und offizielle Leitlinien",
        blocks: [
          {
            type: "p",
            text: "Nach Artikel 99 Absatz 4 können Verstöße gegen die Pflichten aus Artikel 50 mit Geldbußen von bis zu 15.000.000 EUR oder – im Fall von Unternehmen – von bis zu 3 % des gesamten weltweiten Jahresumsatzes des vorangegangenen Geschäftsjahres geahndet werden, je nachdem, welcher Betrag höher ist. Für KMU, einschließlich Start-ups, gilt nach Artikel 99 der jeweils niedrigere der beiden Beträge.",
          },
          {
            type: "p",
            text: "Am 20. Juli 2026 veröffentlichte die Kommission Leitlinien zu den Transparenzpflichten nach Artikel 50. Ein separater, freiwilliger Verhaltenskodex zur Transparenz KI-generierter Inhalte (Code of Practice on Transparency of AI-generated Content) deckt Artikel 50 Absatz 2, 4 und 5 ab. Laut Kommission bedeutet eine Nichtunterzeichnung keine Nichteinhaltung. Für die Chatbot-Pflicht nach Artikel 50 Absatz 1 können Anbieter und Betreiber laut den FAQ selbst über geeignete Maßnahmen entscheiden und dabei die Leitlinien berücksichtigen.",
          },
          {
            type: "note",
            text: "Dies ist keine Rechtsberatung. Diese Seite beschreibt, was die KI-Verordnung, der KI-Omnibus und die Leitlinien der Kommission mit Stand 19. Oktober 2026 sagen. Für Entscheidungen über Ihre eigenen Systeme lesen Sie die amtlichen Texte auf EUR-Lex und sprechen Sie mit einem qualifizierten Rechtsbeistand.",
          },
        ],
      },
      {
        heading: "Offenlegung in einen Support-Bot einbauen",
        blocks: [
          {
            type: "ul",
            items: [
              "Platzieren Sie den KI-Hinweis in der ersten Nachricht oder in der Begrüßung des Voicebots, nicht nur in Ihren Nutzungsbedingungen.",
              "Machen Sie den Hinweis für Screenreader lesbar und in der Sprachausgabe klar verständlich, da Artikel 50 Absatz 5 die Barrierefreiheit erwähnt.",
              "Geben Sie Kunden einen sichtbaren Weg zu einem Menschen und übergeben Sie den Gesprächsverlauf, damit sie sich nicht wiederholen müssen.",
              "Dokumentieren Sie den Hinweistext und wann Sie ihn geändert haben, damit Sie zeigen können, was Kunden gesehen haben.",
            ],
          },
          {
            type: "p",
            text: "TascaLab baut Chat- und Voicebots auf den Tools auf, die Sie bereits nutzen (Zendesk, Freshdesk, Jira, Slack und interne Tools). Projekte für einen Standard Chat Bot kosten 500 bis 650 USD, Voice-Bot-Projekte 1.100 bis 1.600 USD. Beide umfassen eine Basisdokumentation und 30 Tage Support nach dem Launch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich Kunden sagen, dass sie mit einem Chatbot sprechen?",
        a: "Artikel 50 Absatz 1 der KI-Verordnung verpflichtet Anbieter, KI-Systeme, die direkt mit Menschen interagieren, so zu gestalten, dass diese Menschen informiert werden, dass sie mit einem KI-System interagieren, es sei denn, das ist aus dem Kontext offensichtlich. Laut Kommission ist die Ausnahme „offensichtlich“ eng auszulegen.",
      },
      {
        q: "Ab wann gelten die Chatbot-Regeln des EU AI Act?",
        a: "Artikel 50 gilt ab dem 2. August 2026. Die FAQ der Kommission gewähren eine Übergangsfrist bis zum 2. Dezember 2026 nur für die Kennzeichnung nach Artikel 50 Absatz 2 bei generativen Systemen, die bereits auf dem Markt sind.",
      },
      {
        q: "Hat der KI-Omnibus die KI-Verordnung verschoben?",
        a: "Teilweise. Die Verordnung (EU) 2026/1744, laut Kommission seit dem 27. Juli 2026 in Kraft, hat die Hochrisiko-Pflichten auf den 2. Dezember 2027 (Anhang III) und den 2. August 2028 (Produkte nach Anhang I) verschoben. Das Datum 2. August 2026 für Artikel 50 hat sie nicht verschoben.",
      },
      {
        q: "Braucht ein KI-Ticket-Router einen KI-Hinweis?",
        a: "Laut den FAQ der Kommission fallen Systeme, die nur im Hintergrund arbeiten, über Maschine-zu-Maschine-Kommunikation oder ohne direkten Kontakt mit Menschen, nicht unter die Interaktionspflicht nach Artikel 50 Absatz 1. Prüfen Sie Ihr eigenes Setup anhand der Leitlinien der Kommission.",
      },
      {
        q: "Welche Geldbußen drohen bei Verstößen gegen Artikel 50?",
        a: "Nach Artikel 99 Absatz 4 bis zu 15 Millionen EUR oder 3 % des gesamten weltweiten Jahresumsatzes, je nachdem, welcher Betrag höher ist. Für KMU, einschließlich Start-ups, gilt der niedrigere der beiden Beträge.",
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
    slug: "dsgvo-kundensupport-automatisierung",
    category: "guides",
    navLabel: "DSGVO und Support-Automatisierung",
    primaryKeyword: "DSGVO Kundensupport Automatisierung",
    title: "DSGVO und Kundensupport-Automatisierung: Praxisleitfaden",
    description:
      "DSGVO und Kundensupport-Automatisierung: Rechtsgrundlagen, Datenminimierung, Speicherfristen und Auftragsverarbeitung bei Chatbots und Helpdesk-Workflows.",
    h1: "DSGVO und Kundensupport-Automatisierung: ein Praxisleitfaden",
    intro:
      "Die DSGVO gilt für Support-Automatisierung wie für jede andere Verarbeitung personenbezogener Daten. Sie brauchen eine Rechtsgrundlage nach Art. 6, verarbeiten nur, was Sie benötigen (Art. 5 Abs. 1 lit. c), speichern es nur so lange wie nötig (Art. 5 Abs. 1 lit. e), und Anbieter, die Daten in Ihrem Auftrag verarbeiten, brauchen einen Vertrag nach Art. 28. Bei Chatbots und Helpdesk-Workflows läuft das meiste auf Gestaltungsentscheidungen hinaus: welche Felder Sie senden, wohin sie gehen und wie lange die Logs aufbewahrt werden.",
    keyFacts: [
      "Art. 5 Abs. 1 lit. c: Personenbezogene Daten müssen dem Zweck angemessen und erheblich sowie auf das notwendige Maß beschränkt sein.",
      "Art. 6 Abs. 1 nennt sechs Rechtsgrundlagen. Der EuGH behandelt die Liste als abschließend.",
      "Art. 28 Abs. 3 verlangt mit jedem Auftragsverarbeiter einen verbindlichen Vertrag, unter anderem darüber, dass er nur auf Ihre dokumentierte Weisung handelt.",
      "Laut EDSA ist die Prüfung, ob ein Auftragsverarbeiter hinreichende Garantien bietet, eine fortlaufende Pflicht und keine einmalige.",
      "Make lässt Sie beim Anlegen einer Organisation ein Rechenzentrum in den USA oder in der EU wählen. Später lässt sich das nicht ändern.",
    ],
    sections: [
      {
        heading: "Wo personenbezogene Daten in der Support-Automatisierung auftauchen",
        blocks: [
          {
            type: "p",
            text: "Eine Support-Automatisierung berührt personenbezogene Daten an mehreren Stellen, oft an mehr, als dem Team bewusst ist. Diese Stellen zu erfassen ist der erste praktische Schritt, denn an jeder davon kommen Datenminimierung, Speicherfristen und Verträge mit Anbietern ins Spiel.",
          },
          {
            type: "ul",
            items: [
              "Chat- und E-Mail-Transkripte: Namen, E-Mail-Adressen, Telefonnummern, Bestellnummern und alles andere, was Kunden eintippen.",
              "Ticketfelder und Anhänge im Helpdesk, die eine Automatisierung liest oder in ein anderes Tool kopiert.",
              "Prompts und Antworten, die an ein KI-Modell gesendet werden, falls Ihr Bot eines nutzt.",
              "Ausführungs-Logs in Ihrer Automatisierungsplattform, die die Daten speichern können, die jeder Schritt erhalten hat.",
              "Benachrichtigungen, die in Slack oder anderen internen Tools gepostet werden.",
            ],
          },
        ],
      },
      {
        heading: "Die DSGVO-Artikel, auf die es bei einem Support-Bot am meisten ankommt",
        blocks: [
          {
            type: "table",
            caption: "DSGVO-Artikel und ihre praktischen Auswirkungen auf Support-Automatisierung",
            head: ["Artikel", "Was der Text sagt", "Was das für einen Support-Bot bedeutet"],
            rows: [
              [
                "Art. 5 Abs. 1 lit. c: Datenminimierung",
                "Personenbezogene Daten müssen dem Zweck angemessen und erheblich sowie auf das für die Zwecke der Verarbeitung notwendige Maß beschränkt sein.",
                "Geben Sie jedem Schritt nur die Felder, die er braucht. Identifikatoren zu schwärzen, bevor Text an ein KI-Modell geht, ist eine Möglichkeit dafür.",
              ],
              [
                "Art. 5 Abs. 1 lit. e: Speicherbegrenzung",
                "Daten werden in einer Form gespeichert, die die Identifizierung der Personen nur so lange ermöglicht, wie es für die Zwecke erforderlich ist, mit Ausnahmen für Archiv-, Forschungs- und Statistikzwecke unter den Garantien von Art. 89 Abs. 1.",
                "Legen Sie Aufbewahrungsfristen für Chat-Logs, Ticket-Exporte und Ausführungs-Logs der Automatisierung fest.",
              ],
              [
                "Art. 6 Abs. 1: Rechtmäßigkeit",
                "Die Verarbeitung ist nur rechtmäßig, wenn mindestens eine von sechs Grundlagen greift: Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe oder berechtigte Interessen.",
                "Dokumentieren Sie, welche Grundlage jeden Zweck abdeckt, etwa die Beantwortung einer Anfrage im Unterschied zur Analyse von Transkripten.",
              ],
              [
                "Art. 28: Auftragsverarbeiter",
                "Setzen Sie nur Auftragsverarbeiter mit hinreichenden Garantien ein, auf Grundlage eines verbindlichen Vertrags, der die Verarbeitung festlegt und sie verpflichtet, nur auf Ihre dokumentierte Weisung zu handeln.",
                "Schließen Sie mit jedem Anbieter in der Kette einen Vertrag: Helpdesk, Automatisierungsplattform, KI-Anbieter und Hosting.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Rechtsgrundlage: pro Zweck entscheiden",
        blocks: [
          {
            type: "p",
            text: "Art. 6 Abs. 1 nennt sechs Rechtsgrundlagen: Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe und berechtigte Interessen. Der EuGH hat diese Liste als abschließend und restriktiv bezeichnet; eine Verarbeitung muss also unter mindestens eine davon fallen.",
          },
          {
            type: "p",
            text: "Zwei Grundlagen kommen in der Supportarbeit am häufigsten vor. Die Vertragsgrundlage deckt Verarbeitungen ab, die zur Erfüllung eines Vertrags mit der Person erforderlich sind oder zur Durchführung vorvertraglicher Maßnahmen, die auf ihre Anfrage erfolgen. In der Rechtssache C-621/22 hat der EuGH festgestellt, dass berechtigte Interessen drei kumulative Voraussetzungen erfordern: Der Verantwortliche oder ein Dritter verfolgt ein berechtigtes Interesse, die Verarbeitung ist für dieses Interesse erforderlich, und die Interessen oder Grundrechte der Person überwiegen nicht. Behörden können sich bei Verarbeitungen in Erfüllung ihrer Aufgaben nicht auf berechtigte Interessen stützen.",
          },
          {
            type: "p",
            text: "Listen Sie in der Praxis jeden Zweck einzeln auf. Die Frage des Kunden beantworten, Mitarbeitende anhand früherer Transkripte schulen und Berichte erstellen sind unterschiedliche Zwecke, und jeder braucht seine eigene Grundlage.",
          },
        ],
      },
      {
        heading: "Auftragsverarbeiter und Verträge nach Art. 28",
        blocks: [
          {
            type: "p",
            text: "Nach Art. 28 Abs. 1 dürfen Sie nur Auftragsverarbeiter einsetzen, die hinreichende Garantien dafür bieten, geeignete technische und organisatorische Maßnahmen umzusetzen. Art. 28 Abs. 3 verlangt einen Vertrag oder ein anderes Rechtsinstrument, das Gegenstand und Dauer, Art und Zweck der Verarbeitung, die Art der personenbezogenen Daten und die Kategorien betroffener Personen festlegt. Darin muss auch stehen, dass der Auftragsverarbeiter nur auf Ihre dokumentierte Weisung handelt, auch in Bezug auf die Übermittlung personenbezogener Daten an ein Drittland. Nach Art. 28 Abs. 4 muss ein Auftragsverarbeiter, der einen Unterauftragsverarbeiter einbindet, dieselben Datenschutzpflichten vertraglich weitergeben, und der ursprüngliche Auftragsverarbeiter haftet Ihnen gegenüber weiterhin voll.",
          },
          {
            type: "ul",
            items: [
              "EDSA-Leitlinien 07/2020: Die Prüfung der Garantien eines Auftragsverarbeiters ist eine fortlaufende Pflicht, gegebenenfalls mit Audits und Inspektionen. Weisungen können in einem Anhang zum Vertrag oder in anderer schriftlicher Form, etwa per E-Mail, festgehalten werden, solange Sie sie dokumentieren. Eine allgemeine Liste von Unterauftragsverarbeitern, die von Zeit zu Zeit aktualisiert werden kann, reicht nicht aus. Der Auftragsverarbeiter sollte Sie aktiv über Änderungen informieren.",
              "EDSA-Stellungnahme 22/2024: Die Pflicht zu prüfen, ob Auftragsverarbeiter und Unterauftragsverarbeiter hinreichende Garantien bieten, gilt unabhängig vom Risikoniveau, auch wenn die Prüftiefe variieren kann. Die endgültige Entscheidung über den Einsatz eines bestimmten Unterauftragsverarbeiters und die Verantwortung dafür bleiben beim Verantwortlichen.",
            ],
          },
          {
            type: "p",
            text: "Eine typische Support-Kette kann einen Helpdesk, eine Automatisierungsplattform, einen KI-Modellanbieter und ein Chat-Tool umfassen. Halten Sie fest, welche Anbieter personenbezogene Daten in Ihrem Auftrag verarbeiten, prüfen Sie jeweils deren Bedingungen zur Auftragsverarbeitung und die Liste der Unterauftragsverarbeiter, und bewahren Sie diese Unterlagen auf.",
          },
        ],
      },
      {
        heading: "Hosting, Datenstandort und Aufbewahrungseinstellungen",
        blocks: [
          {
            type: "p",
            text: "Wo Ihre Automatisierung läuft, bestimmt, wo ihre Daten gespeichert werden. Make bietet zwei Rechenzentrumsstandorte, die Vereinigten Staaten und die Europäische Union. Sie wählen einen davon beim Anlegen einer Organisation, er lässt sich später nicht ändern, und er bestimmt, wo Ihre Daten gespeichert und verarbeitet werden. Wenn Sie n8n selbst hosten, steuern dessen Execution-Einstellungen, wie viele Ausführungsdaten aufbewahrt werden. Der dokumentierte Standard ist ein Maximum von 10.000 gespeicherten Executions, und 0 bedeutet kein Limit.",
          },
          {
            type: "p",
            text: "Da Art. 28 Abs. 3 auch Weisungen zu Übermittlungen in Drittländer umfasst, prüfen Sie in den Bedingungen jedes Anbieters, wo Daten verarbeitet werden. Legen Sie Aufbewahrungsfristen in jedem Tool fest, das eine Kopie der Daten vorhält, nicht nur in Ihrem Helpdesk.",
          },
        ],
      },
      {
        heading: "Praktische Gestaltungsentscheidungen für DSGVO-bewusste Automatisierung",
        blocks: [
          {
            type: "ul",
            items: [
              "Übergeben Sie Ticket-IDs und die Felder, die ein Schritt braucht, statt ganzer Kundendatensätze.",
              "Maskieren Sie E-Mail-Adressen, Telefonnummern und Zahlungsdaten, bevor Text an ein KI-Modell geht. Auch geschwärzter Text kann noch personenbezogene Daten enthalten; behandeln Sie ihn daher mit derselben Sorgfalt.",
              "Bereinigen Sie die Ausführungs-Logs Ihrer Automatisierung und schalten Sie das vollständige Protokollieren von Payloads ab, wo Sie es nicht brauchen.",
              "Sehen Sie einen Weg vor, die Daten eines einzelnen Kunden über Bot, Helpdesk und Logs hinweg zu finden, zu exportieren oder zu löschen, damit einzelne Anfragen keine manuelle Suche erfordern.",
              "Leiten Sie sensible oder folgenreiche Fälle an einen menschlichen Agenten weiter, statt den Bot entscheiden zu lassen.",
              "Denken Sie daran, dass Chatbots außerdem unter die separaten Transparenzregeln des EU AI Act fallen.",
            ],
          },
          {
            type: "note",
            text: "Dies ist keine Rechtsberatung. Diese Seite beschreibt, was der Text der DSGVO und die Leitlinien des EDSA sagen, ergänzt um gängige technische Praxis. Für Entscheidungen über Ihre eigene Verarbeitung sprechen Sie mit Ihrem Datenschutzbeauftragten oder einem qualifizierten Rechtsbeistand.",
          },
          {
            type: "p",
            text: "TascaLab baut Automatisierungen auf Zendesk, Freshdesk, Jira, Slack und internen Tools, mit APIs, Webhooks, Make und n8n. Jedes Projekt umfasst eine Basisdokumentation des Gebauten, die beim Erfassen von Datenflüssen hilft, sowie 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Audit-Call starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welche Rechtsgrundlage der DSGVO deckt einen Support-Chatbot ab?",
        a: "Die DSGVO legt keine bestimmte fest. Art. 6 Abs. 1 nennt sechs Grundlagen, darunter Vertrag und berechtigte Interessen, und Sie wählen und dokumentieren diejenige, die zum jeweiligen Zweck passt. Der EuGH behandelt die Liste als abschließend.",
      },
      {
        q: "Brauche ich mit meiner Automatisierungsplattform einen Auftragsverarbeitungsvertrag?",
        a: "Nach Art. 28 Abs. 3 muss die Verarbeitung durch einen Auftragsverarbeiter auf Grundlage eines Vertrags oder eines anderen Rechtsinstruments erfolgen, das unter anderem Gegenstand, Dauer, Art und Zweck der Verarbeitung regelt. Wenn ein Anbieter personenbezogene Daten in Ihrem Auftrag verarbeitet, prüfen Sie, ob solche Bedingungen vorliegen.",
      },
      {
        q: "Darf ich Kundennachrichten an ein KI-Modell senden?",
        a: "Es gelten dieselben DSGVO-Grundsätze wie für jede andere Verarbeitung: eine Rechtsgrundlage, Datenminimierung und ein Vertrag zur Auftragsverarbeitung, wenn der Anbieter Daten in Ihrem Auftrag verarbeitet. Identifikatoren vor dem Senden zu schwärzen ist ein praktischer Weg, die geteilten Daten zu reduzieren.",
      },
      {
        q: "Wie lange darf ich Chat-Transkripte aufbewahren?",
        a: "Nach Art. 5 Abs. 1 lit. e sollen personenbezogene Daten nur so lange in einer Form gespeichert werden, die die Identifizierung der Personen ermöglicht, wie es für die Zwecke erforderlich ist. Der Text legt keine feste Zahl von Tagen fest; Sie bestimmen also für jeden Zweck eine Aufbewahrungsfrist.",
      },
      {
        q: "Wo speichert Make meine Daten?",
        a: "Make hat Rechenzentren in den USA und in der EU. Sie wählen eines beim Anlegen einer Organisation, und die Wahl lässt sich nachträglich nicht ändern.",
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
    slug: "european-accessibility-act-kundenservice",
    category: "guides",
    navLabel: "European Accessibility Act",
    primaryKeyword: "European Accessibility Act Kundenservice",
    title: "European Accessibility Act: Regeln für den Kundenservice",
    description:
      "European Accessibility Act im Kundenservice: erfasste Dienste, wichtige Fristen, die Ausnahme für Kleinstunternehmen und was Anhang I vom Support verlangt.",
    h1: "European Accessibility Act und Kundenservice: was Supportteams wissen müssen",
    intro:
      "Der European Accessibility Act (Richtlinie (EU) 2019/882) gilt seit dem 28. Juni 2025 für eine Reihe von Verbraucherdienstleistungen, darunter E-Commerce, Bankdienstleistungen für Verbraucher, E-Books und elektronische Kommunikation. Für erfasste Dienstleistungen verlangt Anhang I, dass Websites und mobile Apps barrierefrei sind und dass Unterstützungsdienste wie Helpdesks und Callcenter, sofern vorhanden, Informationen zur Barrierefreiheit der Dienstleistung in barrierefreien Kommunikationsformen bereitstellen. Kleinstunternehmen, die Dienstleistungen erbringen, sind ausgenommen.",
    keyFacts: [
      "Artikel 31: Die Mitgliedstaaten mussten ihre nationalen Gesetze bis zum 28. Juni 2022 erlassen und ab dem 28. Juni 2025 anwenden.",
      "Artikel 2 Absatz 2 erfasst Dienstleistungen für Verbraucher wie elektronische Kommunikation, Bankdienstleistungen für Verbraucher, E-Books und E-Commerce.",
      "Artikel 4 Absatz 5 nimmt Kleinstunternehmen aus, die Dienstleistungen erbringen; Artikel 3 Nummer 23 definiert sie als Unternehmen mit weniger als 10 Personen und einem Jahresumsatz oder einer Jahresbilanzsumme von höchstens 2 Millionen EUR.",
      "Anhang I Abschnitt III: Unterstützungsdienste müssen, sofern vorhanden, Informationen zur Barrierefreiheit der Dienstleistung in barrierefreien Kommunikationsformen bereitstellen.",
      "EN 301 549 V4.1.1 wurde im August 2026 angenommen, ist laut AccessibleEU aber noch nicht die rechtliche Referenz für die Einhaltung des EAA.",
    ],
    sections: [
      {
        heading: "Welche Dienstleistungen der European Accessibility Act erfasst",
        blocks: [
          {
            type: "p",
            text: "Die Richtlinie (EU) 2019/882, bekannt als European Accessibility Act oder EAA, legt Barrierefreiheitsanforderungen für eine Liste von Produkten in Artikel 2 Absatz 1 und eine Liste von Dienstleistungen in Artikel 2 Absatz 2 fest. Diese Seite konzentriert sich auf Dienstleistungen, denn dort ist der Kundensupport angesiedelt. Artikel 2 Absatz 2 gilt für die folgenden Dienstleistungen, die nach dem 28. Juni 2025 für Verbraucher erbracht werden.",
          },
          {
            type: "table",
            caption: "In Artikel 2 Absatz 2 der Richtlinie (EU) 2019/882 aufgeführte Dienstleistungen",
            head: ["Artikel 2 Absatz 2", "Dienstleistung", "Support-Kontaktpunkte, die eine Prüfung wert sind"],
            rows: [
              ["(a)", "Elektronische Kommunikationsdienste, mit Ausnahme von Übertragungsdiensten für Maschine-zu-Maschine-Dienste", "Hilfeseiten, Live-Chat und Kontaktmöglichkeiten für Vertragskunden"],
              ["(b)", "Dienstleistungen, die Zugang zu audiovisuellen Mediendiensten bieten", "In-App-Hilfe und Support-Chat"],
              ["(c)", "Bestimmte Elemente von Personenbeförderungsdiensten im Luft-, Bus-, Schienen- und Schiffsverkehr", "Buchungshilfe, Reiseinformationen und Chat auf der Website oder in der App"],
              ["(d)", "Bankdienstleistungen für Verbraucher", "Chat- und Voicebots, die Fragen zu Konto oder Karte beantworten"],
              ["(e)", "E-Books und dafür bestimmte Software", "Helpdesk für Lese-Apps und Käufe"],
              ["(f)", "Dienstleistungen im elektronischen Geschäftsverkehr", "Chat-Widget im Shop, Bot für den Bestellstatus, Retourenprozess"],
            ],
          },
          {
            type: "p",
            text: "Die Richtlinie definiert Dienstleistungen im elektronischen Geschäftsverkehr als Dienstleistungen, die im Fernabsatz über Websites und Dienste für mobile Geräte elektronisch und auf individuelle Anfrage eines Verbrauchers im Hinblick auf den Abschluss eines Verbrauchervertrags erbracht werden. Die Erwägungsgründe der Richtlinie ergänzen, dass die Pflichten für den elektronischen Geschäftsverkehr den Online-Verkauf jedes Produkts und jeder Dienstleistung abdecken. Die dritte Spalte der Tabelle ist ein Vorschlag für eine Checkliste, keine Aussage darüber, was das Gesetz von Ihrem Unternehmen verlangt.",
          },
        ],
      },
      {
        heading: "Wichtige Fristen und Übergangszeiträume",
        blocks: [
          {
            type: "p",
            text: "Der EAA ist eine Richtlinie und erreicht Unternehmen daher über nationale Gesetze. Artikel 31 verpflichtete die Mitgliedstaaten, diese Gesetze bis zum 28. Juni 2022 zu erlassen und zu veröffentlichen und sie ab dem 28. Juni 2025 anzuwenden. Artikel 32 sieht einige Übergangszeiträume vor.",
          },
          {
            type: "table",
            caption: "EAA-Fristen für Dienstleistungen (Richtlinie (EU) 2019/882)",
            head: ["Datum", "Was es bedeutet", "Artikel"],
            rows: [
              ["28. Juni 2022", "Frist für die Mitgliedstaaten, die nationalen Gesetze zur Umsetzung der Richtlinie zu erlassen und zu veröffentlichen", "Artikel 31"],
              ["28. Juni 2025", "Die nationalen Maßnahmen gelten. Artikel 2 Absatz 2 erfasst Dienstleistungen, die nach diesem Datum für Verbraucher erbracht werden", "Artikel 2 Absatz 2 und Artikel 31"],
              ["Bis zu 5 Jahre ab dem 28. Juni 2025", "Dienstleistungsverträge, die vor dem 28. Juni 2025 geschlossen wurden, dürfen bis zu ihrem Ablauf unverändert fortbestehen", "Artikel 32"],
              ["28. Juni 2030", "Ende des Zeitraums, in dem Dienstleister ihre Dienste weiterhin mit Produkten erbringen dürfen, die sie bereits zuvor rechtmäßig für ähnliche Dienstleistungen eingesetzt haben", "Artikel 32"],
              ["Bis zu 20 Jahre im Einsatz", "Die Mitgliedstaaten können erlauben, dass Selbstbedienungsterminals, die vor dem 28. Juni 2025 genutzt wurden, bis zum Ende ihrer wirtschaftlichen Nutzungsdauer weiterbetrieben werden, höchstens jedoch 20 Jahre nach ihrer Inbetriebnahme", "Artikel 32"],
            ],
          },
          {
            type: "p",
            text: "Da jeder Mitgliedstaat sein eigenes Gesetz erlässt, unterscheiden sich die nationalen Texte und die Behörden, die sie durchsetzen, von Land zu Land. Die Kommission gibt an, die vollständige und korrekte Umsetzung des Rechtsakts zu überwachen. Wenn Sie Kunden in mehreren EU-Ländern bedienen, prüfen Sie das nationale Gesetz in jedem davon.",
          },
        ],
      },
      {
        heading: "Die Ausnahme für Kleinstunternehmen und weitere Grenzen",
        blocks: [
          {
            type: "p",
            text: "Artikel 3 Nummer 23 definiert ein Kleinstunternehmen als Unternehmen, das weniger als 10 Personen beschäftigt und dessen Jahresumsatz 2 Millionen EUR nicht übersteigt oder dessen Jahresbilanzsumme 2 Millionen EUR nicht übersteigt. Nach Artikel 4 Absatz 5 sind Kleinstunternehmen, die Dienstleistungen erbringen, von den Barrierefreiheitsanforderungen in Artikel 4 Absatz 3 und von den Pflichten im Zusammenhang mit deren Einhaltung ausgenommen. Die Erwägungsgründe erläutern, dass schon die Pflicht zu einer Beurteilung für diese Unternehmen eine unverhältnismäßige Belastung wäre. Die Richtlinie ermutigt Kleinstunternehmen dennoch, Dienstleistungen anzubieten, die die Anforderungen erfüllen.",
          },
          {
            type: "p",
            text: "Die Ausnahme gilt nur für Dienstleistungen. Kleinstunternehmen, die mit Produkten zu tun haben, werden anders behandelt und sind nicht vollständig ausgenommen.",
          },
          {
            type: "p",
            text: "Für alle anderen gilt nach Artikel 14: Die Barrierefreiheitsanforderungen greifen nur insoweit, als ihre Einhaltung keine wesentliche Änderung erfordert, die zu einer grundlegenden Veränderung der Wesensmerkmale der Dienstleistung führt, und keine unverhältnismäßige Belastung darstellt. Ein Unternehmen, das sich darauf beruft, muss eine Beurteilung anhand der Kriterien in Anhang VI vornehmen. Dienstleister müssen sie erneuern, wenn die Dienstleistung verändert wird, wenn eine Behörde dies verlangt, und mindestens alle fünf Jahre. Die Erwägungsgründe ergänzen, dass fehlende Priorität, Zeit oder Kenntnisse nicht als legitime Gründe gelten sollten.",
          },
        ],
      },
      {
        heading: "Was Anhang I zum Kundensupport sagt",
        blocks: [
          {
            type: "p",
            text: "Nach Artikel 4 Absatz 3 müssen alle Dienstleistungen, mit Ausnahme von Stadt-, Vorort- und Regionalverkehrsdiensten, Abschnitt III von Anhang I erfüllen, der allgemeine Barrierefreiheitsanforderungen an Dienstleistungen festlegt. Abschnitt IV ergänzt Anforderungen für bestimmte Dienstleistungen, etwa Bankdienstleistungen für Verbraucher und E-Commerce. Drei Punkte in Abschnitt III sind für Supportteams am wichtigsten:",
          },
          {
            type: "ul",
            items: [
              "Buchstabe a: Die Produkte, mit denen die Dienstleistung erbracht wird, müssen barrierefrei sein.",
              "Buchstabe c: Websites, einschließlich zugehöriger Online-Anwendungen, und Dienste für mobile Geräte, einschließlich mobiler Apps, müssen auf konsistente und angemessene Weise barrierefrei gestaltet werden, indem sie wahrnehmbar, bedienbar, verständlich und robust gemacht werden.",
              "Buchstabe d: Unterstützungsdienste (Helpdesks, Callcenter, technischer Support, Relaisdienste und Schulungsangebote) müssen, sofern vorhanden, Informationen zur Barrierefreiheit der Dienstleistung und zu ihrer Kompatibilität mit assistiven Technologien in barrierefreien Kommunikationsformen bereitstellen.",
            ],
          },
          {
            type: "p",
            text: "Artikel 13 ergänzt eine Transparenzpflicht. Dienstleister erstellen gemäß Anhang V Informationen, die erläutern, wie die Dienstleistung die Barrierefreiheitsanforderungen erfüllt, und machen sie der Öffentlichkeit in schriftlicher und mündlicher Form zugänglich, auch in einer für Menschen mit Behinderungen barrierefreien Weise. Laut den Leitlinien von AccessibleEU müssen diese Informationen aufbewahrt werden, solange die Dienstleistung angeboten wird.",
          },
          {
            type: "p",
            text: "Ein Chat-Widget oder Support-Bot auf Ihrer Website oder in Ihrer App ist Teil der Oberfläche, die Kunden nutzen; es liegt daher nahe, ihn am selben Maßstab – wahrnehmbar, bedienbar, verständlich, robust – zu messen. Auch Ihr Helpdesk, ob mit Menschen oder Bots besetzt, sollte bereit sein, Fragen zur Barrierefreiheit Ihrer Dienstleistung zu beantworten.",
          },
        ],
      },
      {
        heading: "Praktische Hinweise für Chat-Widgets und Support-Bots",
        blocks: [
          {
            type: "p",
            text: "Die Richtlinie nennt keine technischen Prüfungen für ein Chat-Widget. Die folgenden Punkte sind gängige technische Praxis, die sich auf die Grundsätze von Anhang I abbilden lässt. Testen Sie sie mit echter assistiver Technologie, etwa Screenreadern und reiner Tastaturbedienung.",
          },
          {
            type: "ul",
            items: [
              "Machen Sie Chat-Launcher, Nachrichtenfeld, Buttons und Schnellantworten allein mit der Tastatur bedienbar, mit sichtbarem Fokusindikator.",
              "Geben Sie jedem Bedienelement eine Textbeschriftung, die Screenreader vorlesen, und kündigen Sie neue Nachrichten an, ohne den Fokus des Nutzers zu verschieben.",
              "Verlassen Sie sich nicht allein auf Farbe, Icons oder Bilder, um Bedeutung zu transportieren. Geben Sie Bildern und Karten Textalternativen.",
              "Vermeiden Sie kurze Inaktivitäts-Timeouts, die den Chat schließen, oder warnen Sie vor dem Schließen und lassen Sie den Kunden weitermachen.",
              "Halten Sie Bot-Antworten kurz und einfach und geben Sie Kunden einen leichten Weg zu einem Menschen, mit Übergabe des Gesprächsverlaufs.",
              "Bringen Sie dem Bot und Ihren Agenten bei, Fragen zur Barrierefreiheit Ihrer Dienstleistung zu beantworten und auf Ihre Informationen nach Artikel 13 zu verweisen.",
              "Bieten Sie mehr als einen Kontaktkanal an, etwa Chat und E-Mail, und geben Sie Anrufern bei Voicebots eine textbasierte Alternative.",
            ],
          },
          {
            type: "p",
            text: "Für technische Details lohnt ein Blick auf EN 301 549, die europäische Norm zu Barrierefreiheitsanforderungen an IKT-Produkte und -Dienstleistungen. Der Durchführungsbeschluss (EU) 2021/1339 der Kommission verweist auf EN 301 549 V3.2.1 als harmonisierte Norm im Rahmen der Web Accessibility Directive, die Websites und Apps öffentlicher Stellen betrifft. ETSI hat EN 301 549 V4.1.1 am 24. August 2026 angenommen. Diese Version wechselt zu WCAG 2.2 und ergänzt einen Anhang, der ihre Anforderungen dem EAA zuordnet. Laut AccessibleEU ist V4.1.1 noch nicht die rechtliche Referenz für den Nachweis der Einhaltung des EAA oder der Web Accessibility Directive; Referenz bleibt V3.2.1 auf Basis von WCAG 2.1 Stufe AA, bis die Kommission V4.1.1 im Amtsblatt referenziert.",
          },
          {
            type: "note",
            text: "Dies ist keine Rechtsberatung. Diese Seite fasst die Richtlinie (EU) 2019/882 und offizielle Leitlinien der EU mit Stand 19. Oktober 2026 zusammen. Ob Ihre Dienstleistung erfasst ist und was Sie tun müssen, hängt vom für Sie geltenden nationalen Recht ab. Für Entscheidungen über Ihre eigene Dienstleistung lesen Sie die amtlichen Texte und sprechen Sie mit einem qualifizierten Rechtsbeistand.",
          },
          {
            type: "p",
            text: "TascaLab baut Chat- und Voicebots auf den Tools auf, die Sie bereits nutzen, etwa Zendesk, Freshdesk, Jira und Slack. Projekte für einen Standard Chat Bot kosten 500 bis 650 USD, Voice-Bot-Projekte 1.100 bis 1.600 USD. Beide umfassen eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Audit-Call starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Seit wann gilt der European Accessibility Act?",
        a: "Artikel 31 verpflichtete die Mitgliedstaaten, ihre nationalen Gesetze bis zum 28. Juni 2022 zu erlassen und ab dem 28. Juni 2025 anzuwenden. Artikel 2 Absatz 2 erfasst Dienstleistungen, die nach dem 28. Juni 2025 für Verbraucher erbracht werden.",
      },
      {
        q: "Sind kleine Unternehmen vom European Accessibility Act ausgenommen?",
        a: "Kleinstunternehmen, die Dienstleistungen erbringen, sind nach Artikel 4 Absatz 5 ausgenommen. Artikel 3 Nummer 23 definiert ein Kleinstunternehmen als Unternehmen mit weniger als 10 Personen und einem Jahresumsatz oder einer Jahresbilanzsumme von höchstens 2 Millionen EUR. Kleinstunternehmen, die mit Produkten zu tun haben, sind nicht vollständig ausgenommen.",
      },
      {
        q: "Erfasst der European Accessibility Act den Kundensupport?",
        a: "Nach Anhang I Abschnitt III Buchstabe d müssen Unterstützungsdienste wie Helpdesks, Callcenter, technischer Support, Relaisdienste und Schulungsangebote, sofern vorhanden, Informationen zur Barrierefreiheit der Dienstleistung und zu ihrer Kompatibilität mit assistiven Technologien in barrierefreien Kommunikationsformen bereitstellen.",
      },
      {
        q: "Ist EN 301 549 die harmonisierte Norm für den EAA?",
        a: "EN 301 549 V4.1.1, angenommen am 24. August 2026, ergänzt einen Anhang, der ihre Anforderungen dem EAA zuordnet. Laut AccessibleEU ist sie noch nicht die rechtliche Referenz für die Einhaltung des EAA, bis die Kommission sie im Amtsblatt referenziert; bis dahin bleibt V3.2.1 die Referenz.",
      },
      {
        q: "Müssen Dienstleistungsverträge, die vor Juni 2025 geschlossen wurden, geändert werden?",
        a: "Nach Artikel 32 dürfen Dienstleistungsverträge, die vor dem 28. Juni 2025 geschlossen wurden, bis zu ihrem Ablauf unverändert fortbestehen, jedoch nicht länger als fünf Jahre ab diesem Datum.",
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
    slug: "n8n-zendesk-integration-anleitung",
    category: "guides",
    navLabel: "n8n-Zendesk-Integration",
    primaryKeyword: "n8n Zendesk Integration",
    title: "n8n-Zendesk-Integration: Nodes, Trigger und Webhooks",
    description:
      "n8n-Zendesk-Integration erklärt: Operationen des Zendesk-Nodes, Zendesk Trigger, API-Token oder OAuth2, Webhooks, Rate Limits und ein Beispiel-Workflow.",
    h1: "n8n-Zendesk-Integration: Nodes, Credentials und Beispiel-Workflows",
    intro:
      "n8n verbindet sich über zwei integrierte Nodes mit Zendesk. Der Zendesk-Node arbeitet mit Tickets, Ticketfeldern, Benutzern und Organisationen, und der Zendesk-Trigger-Node startet einen Workflow, wenn in Zendesk etwas passiert. Beide verwenden dasselbe Credential, ein API-Token oder OAuth2. Wenn Sie die Regeln lieber in Zendesk behalten, können Sie stattdessen einen Zendesk-Webhook auf einen n8n-Webhook-Node richten und ihn über einen Zendesk-Trigger auslösen.",
    keyFacts: [
      "Der Zendesk-Node in n8n hat vier Ressourcen: Ticket, Ticket Field, User und Organization.",
      "Wenn Sie mit der Operation Update Ticket Tags setzen, wird die gesamte Tag-Liste ersetzt. Tags, die Sie weglassen, werden entfernt.",
      "Das Zendesk-Credential von n8n unterstützt ein API-Token (Subdomain, Login-E-Mail und Token) oder OAuth2.",
      "Zendesk signiert Webhook-Anfragen mit den Headern X-Zendesk-Webhook-Signature und X-Zendesk-Webhook-Signature-Timestamp.",
      "Die API-Limits der Zendesk Suite reichen von 200 Anfragen pro Minute bei Team bis 2.500 bei Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Was der Zendesk-Node in n8n kann",
        blocks: [
          {
            type: "p",
            text: "Der Zendesk-Node liest oder ändert Daten in Zendesk als Schritt in einem Workflow. Die n8n-Dokumentation gruppiert seine Operationen nach Ressource.",
          },
          {
            type: "table",
            caption: "Ressourcen und Operationen des Zendesk-Nodes (n8n-Dokumentation, geprüft im Oktober 2026)",
            head: ["Ressource", "Operationen"],
            rows: [
              ["Ticket", "Erstellen, löschen, eines oder viele abrufen, aktualisieren und ein gesperrtes (suspended) Ticket wiederherstellen"],
              ["Ticket Field", "Ein Ticketfeld abrufen oder alle System- und benutzerdefinierten Ticketfelder abrufen"],
              ["User", "Erstellen, löschen, einen oder viele abrufen, aktualisieren, suchen, die Organisationen eines Benutzers abrufen und zugehörige Daten abrufen"],
              ["Organization", "Erstellen, löschen, zählen, eine oder viele abrufen, aktualisieren und zugehörige Daten abrufen"],
            ],
          },
          {
            type: "p",
            text: "Ein Verhalten sorgt immer wieder für Überraschungen. Wenn Sie Update Ticket verwenden und das Feld Tag Names or IDs ausfüllen, wird laut n8n-Dokumentation die gesamte Tag-Liste des Tickets ersetzt; jedes Tag, das Sie nicht angeben, wird entfernt. Das entspricht dem Standardverhalten der Zendesk API bei Tag-Updates. Die Dokumentation nennt drei Workarounds: die aktuellen Tags abrufen und vor dem Update mit den neuen zusammenführen, den HTTP-Request-Node mit der Zendesk-Eigenschaft additional_tags verwenden oder den Tags-Endpunkt des Tickets aufrufen. Die letzten beiden fügen Tags hinzu, ohne bestehende zu entfernen.",
          },
          {
            type: "p",
            text: "Wenn der Node eine benötigte Operation nicht unterstützt, verwenden Sie den HTTP-Request-Node, setzen Authentication auf Predefined Credential Type und wählen Ihr Zendesk-Credential. Die Anfrage nutzt dann dieselbe Verbindung wie der Zendesk-Node.",
          },
        ],
      },
      {
        heading: "Zendesk-Credentials in n8n einrichten",
        blocks: [
          {
            type: "p",
            text: "Die Nodes Zendesk und Zendesk Trigger verwenden dasselbe Credential, und n8n unterstützt zwei Arten der Authentifizierung. Beide brauchen Ihre Subdomain, also den Teil Ihrer Zendesk-URL zwischen https:// und .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "API-Token: Öffnen Sie im Zendesk Admin Center Apps and integrations, dann APIs, und aktivieren Sie den Token-Zugriff für die Zendesk API. Fügen Sie ein Token mit einer Beschreibung hinzu und kopieren Sie es. Geben Sie in n8n die Subdomain, die E-Mail-Adresse, mit der Sie sich bei Zendesk anmelden, und das Token ein.",
              "OAuth2: Legen Sie im Zendesk Admin Center unter Apps and integrations, dann APIs, einen OAuth-Client an. Fügen Sie die OAuth-Callback-URL von n8n in das Feld für die Redirect-URL des Clients ein. Kopieren Sie die eindeutige Kennung des Clients in Client ID in n8n und sein Secret in Client Secret, ergänzen Sie die Subdomain, speichern Sie und verbinden Sie Ihr Zendesk-Konto.",
            ],
          },
        ],
      },
      {
        heading: "Zendesk-Trigger-Node oder Zendesk-Webhook",
        blocks: [
          {
            type: "p",
            text: "Es gibt zwei Wege, einen n8n-Workflow aus Zendesk zu starten. Der Zendesk-Trigger-Node startet einen Workflow, wenn Zendesk-Ereignisse den Bedingungen entsprechen, die Sie im Node festlegen. Im Beispiel der n8n-Dokumentation filtert er nach Tickets mit dem Status Open, und der Workflow läuft, sobald Sie ihn aktivieren.",
          },
          {
            type: "p",
            text: "Die Alternative ist, die Verbindung selbst zu bauen. Gehen Sie im Zendesk Admin Center zu Apps and integrations, dann Webhooks, legen Sie einen Webhook an, wählen Sie Trigger oder Automation als Verbindungsmethode und richten Sie ihn auf die Production URL eines n8n-Webhook-Nodes. Fügen Sie dann einem Zendesk-Trigger oder einer Automation die Aktion 'Notify webhook' hinzu und schreiben Sie die Payload, die 16.000 Zeichen nicht überschreiten darf. So bleiben die Bedingungen in den Geschäftsregeln von Zendesk, und Sie bestimmen genau, welche Felder gesendet werden.",
          },
          {
            type: "table",
            caption: "Zwei Wege, einen n8n-Workflow aus Zendesk zu starten",
            head: ["Frage", "Zendesk-Trigger-Node", "Zendesk-Webhook + n8n-Webhook-Node"],
            rows: [
              ["Wo die Bedingungen liegen", "Im Node, in n8n", "In einem Zendesk-Trigger oder einer Automation mit der Aktion 'Notify webhook'"],
              ["Was n8n empfängt", "Die Ereignisdaten, die der Node liefert", "Die Payload, die Sie in der Trigger-Aktion schreiben, bis zu 16.000 Zeichen"],
              ["Zendesk-Credential", "Für den Trigger selbst erforderlich", "Nur für spätere Schritte erforderlich, die Zendesk aufrufen"],
              ["Testen", "Den Node im Editor ausführen, wie im Beispiel der n8n-Dokumentation", "Die Test URL des Webhook-Nodes verwenden, die 120 Sekunden lang lauscht, und dann auf die Production URL umstellen"],
            ],
          },
          {
            type: "p",
            text: "Wenn Sie einen Webhook verwenden, prüfen Sie, ob Anfragen wirklich von Zendesk kommen. Zendesk sendet zwei Header, X-Zendesk-Webhook-Signature und X-Zendesk-Webhook-Signature-Timestamp. Die Signatur ist base64(HMACSHA256(timestamp + body)), gebildet mit dem Signing Secret des Webhooks, das Sie auf der Detailseite des Webhooks anzeigen oder über die API abrufen können. Berechnen Sie sie in Ihrem Workflow neu und lehnen Sie Anfragen ab, die nicht übereinstimmen. Zendesk weist außerdem darauf hin, dass dieselbe Aktion einen Webhook mehr als einmal aufrufen kann; gestalten Sie den Workflow also so, dass er für dasselbe Ticket gefahrlos zweimal laufen kann.",
          },
          {
            type: "p",
            text: "Der Webhook-Node kann sofort antworten, nach Abschluss des letzten Nodes oder über einen separaten Respond-to-Webhook-Node. Bei längeren Workflows gibt eine sofortige Antwort Zendesk eine schnelle Rückmeldung, während der Rest der Arbeit weiterläuft.",
          },
        ],
      },
      {
        heading: "Beispiel-Workflow: neue Tickets klassifizieren und Slack benachrichtigen",
        blocks: [
          {
            type: "p",
            text: "Hier ist ein gängiges Muster, beschrieben in Schritten. Es zeigt, wie die Nodes zusammenspielen. Es ist keine Fallstudie von TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: ein Zendesk-Trigger-Node oder ein Webhook-Node, der von einem Zendesk-Trigger gespeist wird, der beim Erstellen eines Tickets auslöst. Senden Sie mindestens die Ticket-ID.",
              "Abrufen: Ein Zendesk-Node mit der Ressource Ticket holt das vollständige Ticket, einschließlich Betreff, Beschreibung und aktueller Tags.",
              "Klassifizieren: Ein Text-Classifier-Node ordnet den Text Kategorien zu, die Sie festlegen, etwa Abrechnung, technisches Problem oder Erstattung. Jede Kategorie hat einen Namen und eine Beschreibung, die dem Modell hilft. Standardmäßig werden Items, die zu keiner Kategorie passen, verworfen; aktivieren Sie daher den Zweig Other, um sie aufzufangen.",
              "Aktualisieren: Ein Zendesk-Node setzt Gruppe und Tags. Führen Sie zuerst die bestehenden Tags zusammen oder fügen Sie Tags über den HTTP-Request-Node mit additional_tags hinzu, damit Sie keine Tags löschen, die Agenten gesetzt haben.",
              "Benachrichtigen: Ein Slack-Node postet die Kategorie und einen Link zum Ticket in den Channel des Teams.",
              "Fehler behandeln: Leiten Sie fehlgeschlagene Durchläufe an eine Warnung weiter, und warten Sie und versuchen Sie es erneut, wenn Zendesk eine 429-Antwort liefert.",
            ],
          },
          {
            type: "p",
            text: "Sie können dasselbe Muster erweitern. Schicken Sie dringende Tickets in einen separaten Slack-Channel, oder schlagen Sie mit der Ressource Organization die Organisation des Kunden nach, bevor Sie eine Gruppe wählen.",
          },
        ],
      },
      {
        heading: "Rate Limits und wo n8n läuft",
        blocks: [
          {
            type: "p",
            text: "Zendesk begrenzt API-Anfragen pro Minute je nach Plan. Die Entwicklerdokumentation nennt diese Standardlimits für die Support- und Help-Center-APIs:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 Anfragen pro Minute.",
              "Suite Growth und Suite Professional: 400 Anfragen pro Minute.",
              "Suite Enterprise: 700 Anfragen pro Minute.",
              "Suite Enterprise Plus: 2.500 Anfragen pro Minute.",
            ],
          },
          {
            type: "p",
            text: "Das Add-on High Volume API hebt einen berechtigten Plan auf 2.500 Anfragen pro Minute an. Es ersetzt das Plan-Limit, statt es zu ergänzen, und setzt Suite Growth oder höher (oder Support Professional oder höher) mit mindestens 10 Agenten-Lizenzen voraus. Bei Überschreitung des Limits liefert Zendesk HTTP 429 mit einem Retry-After-Header, der angibt, wie viele Sekunden Sie warten müssen. Manche Endpunkte haben eigene, strengere Limits. Zählen Sie die API-Aufrufe pro Durchlauf und multiplizieren Sie sie mit Ihrem Spitzen-Ticketvolumen. Bulk-Jobs, etwa das nachträgliche Setzen von Tags auf alten Tickets, stoßen eher an das Limit; bündeln Sie sie daher und bauen Sie Wartezeiten ein.",
          },
          {
            type: "p",
            text: "n8n läuft als n8n Cloud, eine verwaltete Instanz, die n8n für Sie betreibt, oder selbst gehostet auf Ihrem eigenen Rechner oder Ihrer eigenen Infrastruktur. Für die meisten selbst gehosteten Setups empfiehlt die Dokumentation Docker, und n8n Cloud, wenn Sie keine Erfahrung mit der Verwaltung von Servern haben. Bei beiden Trigger-Methoden muss Zendesk Ihre n8n-Instanz erreichen können. Sitzt eine selbst gehostete Instanz hinter einem Reverse Proxy, setzen Sie N8N_WEBHOOK_URL auf deren öffentliche Basis-URL, damit n8n die richtigen Webhook-URLs anzeigt und externe Dienste sie korrekt registrieren. N8N_WEBHOOK_URL ersetzt WEBHOOK_URL, das weiterhin funktioniert, aber ab n8n 2.35.0 veraltet ist.",
          },
          {
            type: "p",
            text: "TascaLab baut solche Zendesk-Automatisierungen mit n8n, Make, APIs und Webhooks, auf den Tools, die Sie bereits nutzen. Projekte für Ticket Routing & Categorization kosten 600 bis 950 USD, Projekte für Custom Automation 1.200 bis 2.000 USD. Die meisten Setups dauern 1 bis 3 Wochen, und jedes Projekt umfasst eine Basisdokumentation und 30 Tage Support nach dem Launch. Sie können mit einem kostenlosen 30-minütigen Audit-Call starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hat n8n eine integrierte Zendesk-Integration?",
        a: "Ja. n8n hat einen Zendesk-Node für Tickets, Ticketfelder, Benutzer und Organisationen sowie einen Zendesk-Trigger-Node, der Workflows aus Zendesk-Ereignissen startet. Beide verwenden dasselbe Zendesk-Credential.",
      },
      {
        q: "Warum entfernt der Zendesk-Node in n8n meine Ticket-Tags?",
        a: "Wenn Sie in der Operation Update Ticket das Feld Tag Names or IDs ausfüllen, wird die gesamte Tag-Liste ersetzt. Die n8n-Dokumentation empfiehlt, zuerst die bestehenden Tags zusammenzuführen oder Tags über den HTTP-Request-Node mit der Zendesk-Eigenschaft additional_tags oder über den Tags-Endpunkt hinzuzufügen.",
      },
      {
        q: "Welche Authentifizierungsmethoden unterstützt das Zendesk-Credential in n8n?",
        a: "Ein API-Token, eingegeben zusammen mit Ihrer Subdomain und der E-Mail-Adresse, mit der Sie sich anmelden, oder OAuth2 mit Client ID und Secret eines OAuth-Clients, den Sie in Zendesk anlegen.",
      },
      {
        q: "Wie prüfe ich, ob eine Webhook-Anfrage von Zendesk stammt?",
        a: "Berechnen Sie base64(HMACSHA256(timestamp + body)) mit dem Signing Secret des Webhooks neu und vergleichen Sie das Ergebnis mit dem Header X-Zendesk-Webhook-Signature. Der Zeitstempel steht im Header X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Was passiert, wenn ein Workflow das Rate Limit der Zendesk API erreicht?",
        a: "Zendesk lehnt die Anfrage mit HTTP 429 und einem Retry-After-Header ab, der angibt, wie viele Sekunden Sie warten müssen. Die Standardlimits reichen von 200 Anfragen pro Minute bei Suite Team bis 2.500 bei Suite Enterprise Plus.",
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
