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
];
