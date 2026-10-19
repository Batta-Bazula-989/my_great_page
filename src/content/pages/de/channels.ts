import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "whatsapp-bot-kundenservice",
    category: "channels",
    navLabel: "WhatsApp-Bot für den Support",
    primaryKeyword: "WhatsApp Bot Kundenservice",
    title: "WhatsApp-Bot im Kundenservice: Regeln, Setup, Übergabe",
    description:
      "So funktioniert ein WhatsApp-Bot im Kundenservice: Business Platform vs. App, 24-Stunden-Fenster, Templates, Opt-in, Preise und Anbindung an Ihren Helpdesk.",
    h1: "WhatsApp-Bot im Kundenservice: Wie er funktioniert und was Meta erlaubt",
    intro:
      "Ein WhatsApp-Bot für den Kundenservice läuft auf der WhatsApp Business Platform (Cloud API), nicht auf der kostenlosen WhatsApp Business App. Er kann nach jeder Kundennachricht 24 Stunden lang frei antworten; danach erreichen Sie den Kunden nur noch mit einem vorab genehmigten Template. Bauen Sie den Bot um dieses Zeitfenster, Ihren Opt-in-Prozess und eine saubere Übergabe an Ihren Helpdesk herum auf.",
    keyFacts: [
      "Wenn ein Kunde Ihnen schreibt oder Sie anruft, öffnet sich ein 24-stündiges Kundenservice-Fenster, das mit jeder neuen Nachricht neu beginnt.",
      "Innerhalb des Fensters können Sie Servicenachrichten in freier Form ohne vorherige Genehmigung senden.",
      "Außerhalb des Fensters sind Templates der einzige Nachrichtentyp, den Sie senden können.",
      "Bevor Sie Menschen Nachrichten senden, brauchen Sie ein Opt-in, das Ihr Unternehmen klar benennt.",
      "Meta rechnet pro zugestellter Nachricht ab, abhängig von der Nachrichtenkategorie und dem Land des Empfängers.",
    ],
    sections: [
      {
        heading: "WhatsApp Business App vs. WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp bietet Unternehmen zwei Produkte an, und nur eines ist für Bots gemacht. Die WhatsApp Business App ist eine kostenlose App für kleine Unternehmen, die Kunden von Hand antworten und einfache automatische Antworten nutzen. Die WhatsApp Business Platform ist eine Sammlung von APIs für mittlere und größere Unternehmen. Die Cloud API ist ihr zentrales Messaging-Produkt, und an sie werden Chatbots, Helpdesks und CRMs angebunden.",
          },
          {
            type: "table",
            caption: "App vs. Platform im Überblick",
            head: ["", "WhatsApp Business App", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Gedacht für", "Kleine Unternehmen, die von Hand antworten", "Mittlere und große Unternehmen, die Bots und Support-Tools anbinden"],
              ["Kosten", "Kostenloser Download und kostenlose Nutzung", "Gebühren pro Nachricht, von Meta festgelegt"],
              ["Einrichtung", "Installation aus einem App Store", "Entwicklerressourcen oder ein Business Messaging Partner"],
              ["Automatisierung", "Einfache automatische Antworten", "Chatbots, Nachrichtenabläufe, CRM- und Helpdesk-Integrationen"],
            ],
          },
          {
            type: "p",
            text: "Wenn Sie die App bereits nutzen, unterstützt Meta das Onboarding einer bestehenden Nummer der WhatsApp Business App in die Cloud API, sodass beide über dieselbe Nummer laufen können. Nach dem Onboarding unterliegen Nachrichten aus der App nicht dem Kundenservice-Fenster, Nachrichten über die Cloud API dagegen schon, und einige Funktionen der App, etwa Gruppenchats, werden auf API-Seite nicht unterstützt. Prüfen Sie, ob Ihr Helpdesk dieses Setup unterstützt, bevor Sie sich darauf verlassen.",
          },
        ],
      },
      {
        heading: "Das 24-stündige Kundenservice-Fenster",
        blocks: [
          {
            type: "p",
            text: "Jeder WhatsApp-Support-Ablauf hängt an einem einzigen Timer. Wenn ein Kunde Ihrem Unternehmen schreibt oder es anruft, beginnt ein 24-stündiges Kundenservice-Fenster, und jede neue Nachricht und jeder neue Anruf von ihm setzt es wieder auf 24 Stunden. Solange es offen ist, können Ihr Bot oder Ihre Agenten über die API Servicenachrichten in freier Form ohne vorherige Genehmigung senden.",
          },
          {
            type: "p",
            text: "Sobald das Fenster geschlossen ist, sind Templates die einzigen Nachrichten, die Sie senden können. Templates sind vorformulierte Formate, die vor der Nutzung genehmigt werden müssen, und jedes gehört zu einer Kategorie: Marketing (Werbung), Utility (Folgenachrichten zu etwas, das der Kunde getan oder angefragt hat) oder Authentifizierung (Identitätsprüfung).",
          },
          {
            type: "table",
            caption: "Was Sie wann senden können",
            head: ["Situation", "Was Sie senden können"],
            rows: [
              ["Der Kunde hat innerhalb der letzten 24 Stunden geschrieben", "Servicenachrichten in freier Form von Ihrem Bot oder Ihren Agenten"],
              ["Fenster geschlossen, Sie müssen über ein Ticket oder eine Bestellung informieren", "Ein genehmigtes Utility-Template"],
              ["Sie müssen die Identität des Kunden prüfen", "Ein genehmigtes Authentifizierungs-Template"],
              ["Sie möchten etwas bewerben", "Ein genehmigtes Marketing-Template, nur an Nutzer mit Opt-in"],
              ["Der Kunde antwortet auf Ihr Template", "Seine Antwort öffnet ein neues 24-Stunden-Fenster, sodass Antworten in freier Form wieder möglich sind"],
            ],
          },
          {
            type: "p",
            text: "Für einen Support-Bot ergeben sich daraus zwei praktische Regeln: Antworten Sie, wann immer möglich, innerhalb des Fensters, und bereiten Sie Utility-Templates für späte Folgenachrichten vor, etwa „Ihr Ticket wurde aktualisiert“ oder „Wir benötigen noch eine Angabe“.",
          },
        ],
      },
      {
        heading: "Opt-in-Regeln, die Ihr Bot einhalten muss",
        blocks: [
          {
            type: "p",
            text: "Meta verlangt von Unternehmen eine Opt-in-Zustimmung, bevor sie Menschen auf WhatsApp Nachrichten senden. Das Opt-in muss nicht WhatsApp-spezifisch sein, aber es muss klar sagen, dass die Person zustimmt, Nachrichten von Ihrem Unternehmen zu erhalten, und den Namen Ihres Unternehmens nennen. Sie sind dafür verantwortlich, eine Opt-in-Methode zu wählen, die den für Sie geltenden Gesetzen entspricht. Meta nennt diese Methoden:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Ihre Website",
              "Ein Anruf mit einem IVR-Ablauf (Interactive Voice Response)",
              "Persönlich oder auf Papier",
            ],
          },
          {
            type: "p",
            text: "Meta empfiehlt außerdem ein Opt-in, das jede Art von Nachricht abdeckt, die Sie senden möchten, sowie klare Anweisungen zum Opt-out. Erfassen und dokumentieren Sie das Opt-in in der Praxis überall dort, wo Kunden Ihnen zum ersten Mal ihre Nummer geben, etwa beim Checkout, bei der Registrierung oder in Ihrem Kontaktformular, damit Templates für Ticket-Updates nie auf Vermutungen beruhen.",
          },
        ],
      },
      {
        heading: "So funktionieren die WhatsApp-Preise – ohne Preisliste",
        blocks: [
          {
            type: "p",
            text: "Meta berechnet pro zugestellter Nachricht und nur Nachrichten, die ein Unternehmen an Nutzer sendet. Der Preis hängt von der Nachrichtenkategorie und der Ländervorwahl des Empfängers ab. Preislisten werden pro Markt veröffentlicht und ändern sich von Zeit zu Zeit; prüfen Sie daher die aktuelle Preisseite von Meta statt einer Zahl aus einem Blogbeitrag.",
          },
          {
            type: "p",
            text: "Für Support-Teams sind zwei Punkte wichtig. Gespräche, die über eine Click-to-WhatsApp-Anzeige oder einen Call-to-Action auf einer Facebook-Seite beginnen, können ein kostenloses Entry-Point-Fenster öffnen: Wenn Sie innerhalb des Kundenservice-Fensters antworten, werden Ihre Nachrichten nicht berechnet, und laut der aktuellen Preisseite von Meta kann dieses Fenster bis zu 7 Tage offen bleiben (die ältere gesprächsbasierte Preisgestaltung sah 72 Stunden vor). Außerdem können Helpdesk-Anbieter eigene Gebühren hinzufügen: Die Dokumentation von Freshworks etwa gibt an, dass Freshworks auf die WhatsApp-Gebühren von Meta einen Aufschlag erhebt.",
          },
          {
            type: "note",
            text: "Die Preisdokumentation von Meta beschreibt Änderungen im Jahr 2026 bei der Abrechnung von Service- und Utility-Nachrichten. Prüfen Sie die aktuellen Regeln auf der Preisseite von Meta, bevor Sie monatliche Kosten schätzen.",
          },
        ],
      },
      {
        heading: "Den Bot an Ihren Helpdesk anbinden",
        blocks: [
          {
            type: "p",
            text: "Ein WhatsApp-Bot darf nie eine Sackgasse sein. Wenn er etwas nicht lösen kann, sollte das Gespräch mit bereits angehängtem Kontext bei einem Agenten landen. Zendesk und Freshdesk bieten beide native WhatsApp-Kanäle:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp wird im Admin Center als Messaging-Kanal hinzugefügt („Channels > Messaging and social > Messaging“). Sie brauchen einen Meta Business Manager, der Ihrem Unternehmen gehört, und die Person, die die Nummer verbindet, muss dort Admin sein. Zendesk weist darauf hin, dass Agenten nicht mehr als 24 Stunden nach der letzten Nachricht des Kunden antworten können und dass WhatsApp-Gruppennachrichten nicht unterstützt werden.",
              "Freshdesk: WhatsApp ist ein Kanal von Freshdesk Omni mit Unterstützung für genehmigte Nachrichten-Templates. Zu den Einstellungen pro Nummer gehören das Verknüpfen eines KI-Agenten, das Routing an Agentengruppen, die Template-Verwaltung, Automatisierungen und SLA-Richtlinien. Laut dem Leitfaden von Freshdesk gilt ein Limit von 250 vom Unternehmen initiierten Gesprächen pro 24 Stunden, bis die Unternehmensverifizierung bei Meta abgeschlossen ist.",
            ],
          },
          {
            type: "p",
            text: "Unabhängig vom Helpdesk sollten Sie die Angaben, die der Bot erfasst (Name, Bestellnummer, Art des Anliegens), auf Ticketfelder abbilden, damit Agenten nicht erneut fragen, und vom Bot bearbeitete Gespräche taggen, damit Sie sehen, was der Bot tatsächlich löst.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut WhatsApp-Bots auf den Tools auf, die Sie bereits nutzen, etwa Zendesk, Freshdesk, Jira, Slack oder interne Systeme, mithilfe von APIs, Webhooks und Make oder n8n. Ein Starter Chat Bot (350–450 USD) deckt ein oder zwei Kanäle mit FAQs und einfacher Erfassung von Informationen ab; ein Standard Chat Bot (500–650 USD) deckt drei bis fünf Kanäle mit komplexeren Gesprächen und reibungsloseren Übergaben ab. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und die meisten Setups dauern 1–3 Wochen. Ein kostenloses 30-minütiges Audit-Gespräch ist ein einfacher Weg, um zu prüfen, ob WhatsApp zu Ihrem Support-Volumen passt.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich einen Support-Bot mit der normalen WhatsApp Business App bauen?",
        a: "Nicht sinnvoll. Die App bietet einfache automatische Antworten, aber Chatbots und Helpdesk-Integrationen laufen auf der WhatsApp Business Platform, meist über die Cloud API.",
      },
      {
        q: "Was passiert, wenn ein Kunde nach mehr als 24 Stunden antwortet?",
        a: "Seine neue Nachricht öffnet ein neues 24-stündiges Kundenservice-Fenster, sodass Ihr Bot oder Ihre Agenten wieder frei antworten können. Das Fenster beschränkt nur Nachrichten, die Sie nach seinem Ablauf von sich aus senden.",
      },
      {
        q: "Müssen WhatsApp-Templates genehmigt werden?",
        a: "Ja. Templates müssen genehmigt sein, bevor Sie sie senden können, und sie sind die einzigen Nachrichten, die außerhalb des Kundenservice-Fensters erlaubt sind.",
      },
      {
        q: "Kann ich meine bestehende Nummer der WhatsApp Business App behalten?",
        a: "Meta unterstützt das Onboarding einer bestehenden Nummer der WhatsApp Business App in die Cloud API, sodass beide über dieselbe Nummer genutzt werden können; einige Funktionen sind auf API-Seite nicht verfügbar. Prüfen Sie vor dem Wechsel, ob Ihr Helpdesk das unterstützt.",
      },
      {
        q: "Was kostet der Betrieb eines WhatsApp-Support-Bots?",
        a: "Meta berechnet pro zugestellter Nachricht, abhängig von Nachrichtenkategorie und Empfängerland, und die Preise ändern sich im Lauf der Zeit. Prüfen Sie die aktuellen Preislisten von Meta und etwaige Gebühren, die Ihr Helpdesk hinzufügt.",
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
    slug: "telegram-bot-kundensupport",
    category: "channels",
    navLabel: "Telegram-Bot für den Support",
    primaryKeyword: "Telegram Bot Kundensupport",
    title: "Telegram-Bot für den Support: Bot API, Webhooks, Übergabe",
    description:
      "So betreiben Sie einen Telegram-Bot im Support: Einrichtung per BotFather, Webhooks vs. Long Polling, Inline-Keyboards, Privacy Mode, Limits und Übergabe.",
    h1: "Telegram-Bot für den Kundensupport: Wie er funktioniert und wie Sie ihn einrichten",
    intro:
      "Ein Telegram-Support-Bot ist ein Programm, das mit der Telegram Bot API verbunden ist. Sie registrieren ihn bei @BotFather, erhalten ein Token, und Ihr Code empfängt Kundennachrichten per Webhook oder Long Polling. Telegram-Bots können keine Gespräche beginnen, daher startet jeder Support-Ablauf damit, dass ein Kunde Ihren Bot öffnet und auf „Start“ tippt.",
    keyFacts: [
      "Sie erstellen einen Bot und erhalten sein Authentifizierungs-Token, indem Sie @BotFather eine Nachricht schreiben.",
      "Updates kommen über getUpdates oder einen Webhook an; beide Methoden schließen sich gegenseitig aus.",
      "Telegram speichert nicht abgerufene Updates höchstens 24 Stunden lang.",
      "Bots können Nutzern nicht zuerst schreiben; der Nutzer muss dem Bot schreiben oder ihn zu einer Gruppe hinzufügen.",
      "Webhooks funktionieren nur auf den Ports 443, 80, 88 und 8443.",
    ],
    sections: [
      {
        heading: "So funktioniert ein Telegram-Support-Bot",
        blocks: [
          {
            type: "p",
            text: "Sie erstellen einen Bot, indem Sie in Telegram @BotFather eine Nachricht schreiben; er registriert den Bot und gibt Ihnen ein Authentifizierungs-Token. Ihr Code nutzt dieses Token, um die Bot API über HTTPS aufzurufen. Das Token authentifiziert nur Ihren Code; es gibt dem Bot keine Erlaubnis, irgendjemandem zu schreiben.",
          },
          {
            type: "p",
            text: "Bots können keine Gespräche beginnen. Ein Nutzer muss dem Bot zuerst schreiben oder ihn zu einer Gruppe hinzufügen. Jeder Bot hat einen Link im Format t.me/ gefolgt vom Benutzernamen des Bots, der einen Chat mit ihm öffnet, und wer diesen Chat zum ersten Mal öffnet, sieht eine Schaltfläche „Start“, die den Befehl /start sendet. Speichern Sie in diesem Moment die Chat-ID des Nutzers: Sie brauchen sie für jede spätere Nachricht, etwa ein Ticket-Update.",
          },
          {
            type: "ol",
            items: [
              "Der Kunde tippt auf Ihren t.me-Link auf Ihrer Website oder in einer E-Mail und drückt auf „Start“.",
              "Der Bot begrüßt ihn und zeigt ein kurzes Menü mit häufigen Themen.",
              "Einfache Fragen werden sofort beantwortet; für alles andere werden Angaben erfasst (Bestellnummer, Beschreibung, Screenshots).",
              "Der Bot erstellt ein Ticket in Ihrem Helpdesk und sagt dem Kunden, wie es weitergeht.",
              "Wenn ein Agent im Helpdesk antwortet, wird die Antwort an denselben Telegram-Chat zurückgeschickt.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks vs. Long Polling",
        blocks: [
          {
            type: "p",
            text: "Die Bot API bietet zwei sich gegenseitig ausschließende Wege, Updates zu empfangen: die Methode getUpdates (Long Polling) und Webhooks. Solange ein Webhook gesetzt ist, funktioniert getUpdates nicht. In beiden Fällen speichert Telegram Updates, die Sie nicht abgerufen haben, höchstens 24 Stunden lang – ein Bot, der einen Tag offline ist, verliert also Nachrichten.",
          },
          {
            type: "table",
            caption: "So wählen Sie, wie Ihr Bot Nachrichten empfängt",
            head: ["", "getUpdates (Long Polling)", "Webhook (setWebhook)"],
            rows: [
              ["Funktionsweise", "Ihr Server fragt Telegram nach neuen Updates", "Telegram sendet jedes Update an Ihre HTTPS-URL"],
              ["Hosting", "Jeder Server, der ausgehende Anfragen stellen kann", "Ein öffentlicher HTTPS-Endpunkt auf Port 443, 80, 88 oder 8443"],
              ["Absender prüfen", "Nicht nötig, Ihr Server stellt die Anfragen", "Setzen Sie ein secret_token; Telegram sendet es im Header X-Telegram-Bot-Api-Secret-Token mit"],
            ],
          },
          {
            type: "p",
            text: "Um von einem Webhook zurück zum Polling zu wechseln, entfernen Sie den Webhook mit deleteWebhook oder rufen setWebhook mit einer leeren URL auf. Beide Methoden akzeptieren drop_pending_updates, falls Sie den aufgelaufenen Rückstand bei einer Umstellung verwerfen möchten.",
          },
        ],
      },
      {
        heading: "Schaltflächen und Menüs für Support-Abläufe",
        blocks: [
          {
            type: "p",
            text: "Support-Bots funktionieren mit Schaltflächen besser als mit Freitext. Custom Reply Keyboards ersetzen die Tastatur des Nutzers durch vordefinierte Antworten, und ein Tippen darauf sendet diesen Text in den Chat. Inline-Keyboards hängen Schaltflächen an eine bestimmte Nachricht und posten beim Tippen nichts in den Chat. Eine Inline-Schaltfläche kann eine URL öffnen oder Callback-Daten von 1–64 Byte an Ihren Bot senden.",
          },
          {
            type: "p",
            text: "Zwei Details bringen neue Bots oft ins Straucheln. Nachdem ein Nutzer eine Callback-Schaltfläche gedrückt hat, zeigen Telegram-Clients eine Fortschrittsanzeige, bis Ihr Bot answerCallbackQuery aufruft – beantworten Sie also jeden Callback, auch ohne Text. Und bei mehrstufigen Menüs bearbeiten Sie die bestehende Nachricht mit neuen Schaltflächen, statt jedes Mal eine neue Nachricht zu senden; das Bearbeiten funktioniert bei Nachrichten mit Inline-Keyboards.",
          },
        ],
      },
      {
        heading: "Gruppen, Privacy Mode und Sendelimits",
        blocks: [
          {
            type: "p",
            text: "Bots, die zu Gruppen hinzugefügt werden, laufen standardmäßig im Privacy Mode. In diesem Modus empfängt ein Bot an ihn gerichtete Befehle, Antworten auf seine eigenen Nachrichten, über den Bot gesendete Nachrichten und Servicenachrichten, aber keine gewöhnlichen Gruppengespräche. Bots, die Gruppenadmins sind, empfangen alle Nachrichten, und Sie können den Privacy Mode mit /setprivacy bei @BotFather ausschalten, wobei Telegram das nur empfiehlt, wenn es unbedingt nötig ist. Nachrichten in privaten Chats mit dem Bot erreichen ihn immer.",
          },
          {
            type: "table",
            caption: "Ungefähre Limits laut den Bots FAQ von Telegram",
            head: ["Wo", "Richtwert"],
            rows: [
              ["Ein einzelner Chat", "Nicht mehr als eine Nachricht pro Sekunde; kurze Spitzen können durchgehen, bevor 429-Fehler auftreten"],
              ["Eine Gruppe", "Nicht mehr als 20 Nachrichten pro Minute"],
              ["Massenbenachrichtigungen", "Etwa 30 Nachrichten pro Sekunde über alle Nutzer hinweg, sofern Sie keine kostenpflichtigen Broadcasts aktivieren"],
            ],
          },
          {
            type: "p",
            text: "Die FAQ von Telegram nennen diese Werte als ungefähre Angaben; bauen Sie daher Wiederholungsversuche für 429-Fehler ein, statt sich auf exakte Zahlen zu verlassen. Für einen Support-Bot spielen sie vor allem eine Rolle, wenn Sie viele Kunden gleichzeitig benachrichtigen, zum Beispiel über eine Störung. Übergeben Sie beim Long Polling außerdem den Parameter offset an getUpdates: Updates bis zu dieser ID gelten als bestätigt und werden nicht erneut zurückgegeben.",
          },
        ],
      },
      {
        heading: "Übergabe an den Helpdesk und Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Für die Übergabe vom Bot an einen Menschen eröffnet der Bot üblicherweise ein Ticket und leitet die Antworten der Agenten zurück in den Chat. Zendesk unterstützt Telegram als Sunshine-Conversations-Kanal im Agent Workspace, was Suite Professional oder höher voraussetzt. Nachrichten werden zu Tickets, und die Antwort eines Agenten in Zendesk erscheint in der Messaging-App des Kunden.",
          },
          {
            type: "p",
            text: "Telegram Business ist eine separate Option für kleine Teams, die Kunden über ihr eigenes Telegram-Konto antworten. Der Kontoinhaber kann jeweils einen Business-Bot verbinden, festlegen, auf welche Chats er zugreifen darf, und ihn eingehende Nachrichten verarbeiten und, wo erlaubt, im Namen des Inhabers antworten lassen.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Telegram-Support-Bots, die über APIs, Webhooks und Make oder n8n an die Tools angebunden werden, die Sie bereits nutzen, etwa Zendesk, Freshdesk, Jira, Slack oder interne Systeme. Ein Starter Chat Bot (350–450 USD) deckt ein oder zwei Kanäle mit FAQs und einfacher Erfassung von Informationen ab – das passt zu Telegram plus einem Website-Widget. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Sie können mit einem kostenlosen 30-minütigen Audit-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ein Telegram-Bot Kunden zuerst anschreiben?",
        a: "Nein. Ein Nutzer muss dem Bot schreiben oder ihn zu einer Gruppe hinzufügen, bevor der Bot ihm schreiben kann. Speichern Sie beim ersten Kontakt die Chat-ID, damit Sie später Updates senden können.",
      },
      {
        q: "Sollte ich Webhooks oder getUpdates verwenden?",
        a: "Beides funktioniert, aber nicht gleichzeitig. Webhooks schicken jedes Update an Ihren HTTPS-Endpunkt, während Long Polling nur ausgehende Anfragen benötigt und während der Entwicklung einfacher ist.",
      },
      {
        q: "Warum sieht mein Bot keine Nachrichten in einer Gruppe?",
        a: "Bots laufen standardmäßig im Privacy Mode und sehen nur Nachrichten, die für sie bestimmt sind. Machen Sie den Bot zum Gruppenadmin, oder deaktivieren Sie den Privacy Mode mit /setprivacy bei @BotFather und fügen Sie den Bot erneut zur Gruppe hinzu.",
      },
      {
        q: "Unterstützt Zendesk Telegram?",
        a: "Ja, als Sunshine-Conversations-Kanal im Agent Workspace, für den Zendesk Suite Professional oder höher voraussetzt. Nachrichten kommen als Tickets an, und Antworten der Agenten gehen zurück an Telegram.",
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
    slug: "facebook-messenger-bot-kundenservice",
    category: "channels",
    navLabel: "Messenger-Bot für Kundenservice",
    primaryKeyword: "Facebook Messenger Bot Kundenservice",
    title: "Facebook-Messenger-Bot im Kundenservice: Regeln & Setup",
    description:
      "So funktioniert ein Facebook-Messenger-Bot im Kundenservice: Webhooks, 24-Stunden-Fenster, das Tag HUMAN_AGENT, Übergabe an Agenten und Metas Bot-Richtlinien.",
    h1: "Facebook-Messenger-Bot im Kundenservice: Zeitfenster, Tags und Übergabe",
    intro:
      "Ein Facebook-Messenger-Bot für den Kundenservice wird über die Messenger Platform von Meta mit Ihrer Facebook-Seite verbunden: Eingehende Nachrichten erreichen Ihren Server über Webhooks, und der Bot antwortet über die Send API. Sie können nach jeder Kundennachricht 24 Stunden lang antworten, und ein menschlicher Agent kann mit dem Tag HUMAN_AGENT bis zu 7 Tage lang antworten, sobald Ihre App dafür freigegeben ist.",
    keyFacts: [
      "Mit Standard-Messaging können Sie innerhalb von 24 Stunden nach der Nachricht einer Person antworten.",
      "Das Tag HUMAN_AGENT erlaubt menschliche Antworten innerhalb von 7 Tagen, nach Freigabe der App.",
      "Seit dem 27. April 2026 geben die Tags CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE und POST_PURCHASE_UPDATE einen Fehler zurück.",
      "Wo das Gesetz es verlangt, muss ein Bot offenlegen, dass Menschen mit einem automatisierten Dienst sprechen.",
      "Die Richtlinien von Meta erwarten, dass automatisierte Angebote innerhalb von 30 Sekunden auf Nutzereingaben reagieren.",
    ],
    sections: [
      {
        heading: "So greift die Messenger Platform ineinander",
        blocks: [
          {
            type: "p",
            text: "Ein Messenger-Bot ist eine Meta-App, die mit einer oder mehreren Facebook-Seiten verbunden ist. Die App abonniert jede Seite über deren subscribed_apps-Edge, wofür die Berechtigungen pages_messaging und pages_manage_metadata nötig sind. Meta sendet dann Ereignisse wie neue Nachrichten und Button-Klicks an Ihren Webhook, und Ihr Bot antwortet über die Send API.",
          },
          {
            type: "table",
            caption: "Webhook-Ereignisse, die ein Support-Bot typischerweise nutzt",
            head: ["Ereignis", "Was es Ihrem Bot mitteilt"],
            rows: [
              ["messages", "Ein Kunde hat Ihrer Seite eine Nachricht gesendet"],
              ["messaging_postbacks", "Ein Kunde hat auf einen Postback-Button, den „Get Started“-Button oder einen Eintrag im Persistent Menu getippt"],
              ["messaging_handovers", "Die Kontrolle über das Gespräch wurde zwischen Apps übergeben, übernommen oder geändert"],
              ["standby", "Eine Nachricht ist eingegangen, während eine andere App das Gespräch kontrollierte"],
            ],
          },
          {
            type: "p",
            text: "Meta gibt Ihnen außerdem feste Einstiegspunkte. Ein Tippen auf den „Get Started“-Button sendet einen Postback – ein guter Moment für eine Begrüßungsnachricht. Ein Persistent Menu mit bis zu 20 Einträgen kann eine Option wie „Mit einer Person sprechen“ enthalten; es erscheint erst, wenn ein „Get Started“-Button eingerichtet ist.",
          },
        ],
      },
      {
        heading: "Das 24-Stunden-Fenster und Message Tags",
        blocks: [
          {
            type: "p",
            text: "Das Standard-Messaging-Fenster im Messenger gibt Ihnen 24 Stunden Zeit zu antworten, nachdem eine Person Ihrer Seite geschrieben hat, und Nachrichten innerhalb dieses Fensters dürfen Werbeinhalte enthalten. Wenn Sie nach Ablauf des Fensters eine normale Nachricht senden, gibt die Send API den Fehler 1545041 zurück.",
          },
          {
            type: "table",
            caption: "Was Meta erlaubt, nachdem ein Kunde geschrieben hat",
            head: ["Zeitpunkt oder Anwendungsfall", "Was Sie senden können", "Hinweise"],
            rows: [
              ["Innerhalb von 24 Stunden nach der Nachricht des Kunden", "Standardnachrichten vom Bot oder von einem Agenten", "Werbeinhalte sind in diesem Fenster erlaubt"],
              ["Bis zu 7 Tage nach der Nachricht des Kunden", "Eine menschliche Antwort mit dem Tag HUMAN_AGENT", "Erfordert App-Freigabe; nicht für automatisierte oder werbliche Nachrichten"],
              ["Updates zu Events, Käufen oder Konten", "Nicht die alten Tags: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE und POST_PURCHASE_UPDATE geben seit dem 27. April 2026 einen Fehler zurück", "Meta verweist auf Utility-Templates oder die Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta beschränkt HUMAN_AGENT auf Anliegen, die sich nicht innerhalb des Standardfensters lösen lassen, etwa eine Anfrage, die eingeht, während Ihr Unternehmen übers Wochenende geschlossen ist, oder einen Fall, der länger als einen Tag dauert. Automatisierte Nachrichten sind eine unzulässige Verwendung des Tags; der Bot kann es also nicht nutzen, um selbstständig späte Folgenachrichten zu senden.",
          },
        ],
      },
      {
        heading: "Gespräche vom Bot an einen Menschen übergeben",
        blocks: [
          {
            type: "p",
            text: "Mehrere Apps können auf derselben Seite arbeiten, zum Beispiel Ihr Bot und ein Helpdesk. Mit dem Handover Protocol können Sie ein Gespräch von einer App oder einem Posteingang an einen anderen übergeben, und der Webhook messaging_handovers meldet, wenn die Kontrolle übergeben, übernommen oder geändert wird. Apps, die den Thread nicht kontrollieren, erhalten statt normaler Nachrichtenereignisse standby-Ereignisse.",
          },
          {
            type: "p",
            text: "Meta entwickelt das in Richtung Conversation Routing weiter. Ein Update von 2021 machte die Zuweisung primärer und sekundärer Rollen überflüssig und führte die Modi Exclusive und Idle ein. Routing-Regeln lassen sich inzwischen in den Einstellungen Ihrer Seite verwalten, und wenn Conversation Routing aktiviert ist, gibt die Conversations API ein Feld is_owner zurück, damit Ihre App nur Threads beantwortet, die sie kontrolliert.",
          },
          {
            type: "ul",
            items: [
              "Bieten Sie einen klaren Ausweg: Die Dokumentation von Meta nennt die Eskalation über einen Fallback-Intent, ein Schlüsselwort oder Quick Replies.",
              "Posten Sie vor der Übergabe eine kurze Zusammenfassung (Thema, Bestellnummer, was der Bot schon versucht hat) dort, wo der Agent sie sieht.",
              "Sagen Sie dem Kunden, wie es weitergeht, einschließlich Ihrer Geschäftszeiten, falls niemand online ist.",
              "Wenn der Agent fertig ist, geben Sie die Kontrolle an den Bot zurück, damit die nächste Frage automatisch beantwortet wird.",
            ],
          },
        ],
      },
      {
        heading: "Richtlinien, die den Bot prägen",
        blocks: [
          {
            type: "ul",
            items: [
              "Offenlegung: Wenn geltendes Recht es verlangt, müssen automatisierte Chat-Angebote offenlegen, dass die Person mit einem automatisierten Dienst spricht, etwa zu Beginn eines Gesprächs oder wenn ein Mensch wieder an die Automatisierung übergibt. Meta empfiehlt die Offenlegung auch dort, wo sie nicht vorgeschrieben ist, und nennt ausdrücklich Kalifornien und Deutschland.",
              "Reaktionszeit: Vollständig automatisierte Angebote müssen innerhalb von 30 Sekunden auf alle Nutzereingaben reagieren. Hybride Setups, die Bots und Menschen kombinieren, sollten die Einstellung zur Antwortzeit in den „Page Settings“ unter „Advanced Messaging“ anpassen.",
              "Keine Werbung in getaggten Nachrichten: Message Tags dürfen nicht für Werbung, Marketing oder Akquise verwendet werden.",
              "App-Freigabe: Ihre App muss freigegeben sein, bevor sie das Tag HUMAN_AGENT nutzen kann.",
            ],
          },
        ],
      },
      {
        heading: "Messenger an Ihren Helpdesk anbinden",
        blocks: [
          {
            type: "p",
            text: "Die meisten Helpdesks können Messenger-Gespräche als Tickets empfangen. In Zendesk ist Messenger ein Messaging-Kanal im Agent Workspace, und Zendesk dokumentiert einige praktische Grenzen:",
          },
          {
            type: "ul",
            items: [
              "Agenten haben sieben Tage Zeit zu antworten, bevor sich das Messaging-Fenster schließt; danach ist das Antwortfeld gesperrt.",
              "Antworten, die ein Agent direkt im Messenger sendet, werden nicht mit Zendesk synchronisiert; Agenten sollten daher aus Zendesk antworten.",
              "Nachrichten mit mehr als 2.000 Zeichen werden nicht zugestellt.",
            ],
          },
          {
            type: "p",
            text: "Wenn Ihr Bot als separate App läuft, legen Sie fest, welche App den Thread standardmäßig kontrolliert und wann die Kontrolle wechselt; sonst antworten womöglich Bot und Helpdesk beide demselben Kunden.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Messenger-Bots, die auf Zendesk, Freshdesk, Jira, Slack oder Ihren internen Tools aufsetzen, mithilfe von APIs, Webhooks und Make oder n8n. Ein Starter Chat Bot (350–450 USD) deckt ein oder zwei Kanäle ab; ein Standard Chat Bot (500–650 USD) deckt drei bis fünf Kanäle ab, etwa Messenger, Instagram und WhatsApp, mit komplexeren Gesprächen und reibungsloseren Übergaben. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Buchen Sie ein kostenloses 30-minütiges Audit-Gespräch, um Ihren aktuellen Messenger-Ablauf zu erfassen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wie viel Zeit habe ich, um im Messenger zu antworten?",
        a: "Standardnachrichten können Sie innerhalb von 24 Stunden nach der Nachricht einer Person senden. Ein menschlicher Agent kann mit dem Tag HUMAN_AGENT bis zu 7 Tage später antworten, sobald Ihre App dafür freigegeben ist.",
      },
      {
        q: "Darf mein Bot das Tag HUMAN_AGENT verwenden?",
        a: "Nein. Meta führt automatisierte Nachrichten als unzulässige Verwendung des Tags auf. Es ist für Antworten von Menschen gedacht, wenn sich ein Anliegen nicht innerhalb von 24 Stunden lösen lässt.",
      },
      {
        q: "Was hat die Tags ACCOUNT_UPDATE und POST_PURCHASE_UPDATE ersetzt?",
        a: "Diese Tags geben, zusammen mit CONFIRMED_EVENT_UPDATE, seit dem 27. April 2026 einen Fehler zurück. Meta empfiehlt für diese Anwendungsfälle Utility-Templates oder die Marketing Messages API.",
      },
      {
        q: "Muss ich Nutzern sagen, dass sie mit einem Bot sprechen?",
        a: "Die Richtlinien von Meta verlangen eine Offenlegung, wo geltendes Recht sie vorschreibt, und empfehlen sie auch sonst. Am einfachsten sagen Sie es zu Beginn des Gesprächs.",
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
    slug: "instagram-dm-automatisierung",
    category: "channels",
    navLabel: "Instagram-DMs automatisieren",
    primaryKeyword: "Instagram DM Automatisierung",
    title: "Instagram-DM-Automatisierung im Kundensupport: Die Regeln",
    description:
      "Instagram-DM-Automatisierung erklärt: Regeln für professionelle Konten, 24-Stunden-Fenster, Human-Agent-Tag, Private Replies auf Kommentare und Ice Breakers.",
    h1: "Instagram-DM-Automatisierung für den Kundensupport",
    intro:
      "Instagram-DM-Automatisierung bedeutet, einen Bot über die APIs von Meta mit den Direktnachrichten eines professionellen Instagram-Kontos zu verbinden, sodass Routinefragen sofort beantwortet werden und der Rest bei einem Menschen landet. Der Bot kann erst antworten, nachdem Ihnen jemand geschrieben hat, und hat dafür 24 Stunden Zeit; menschliche Agenten können mit dem Human-Agent-Tag bis zu 7 Tage lang antworten.",
    keyFacts: [
      "Die Messaging-APIs von Instagram funktionieren mit professionellen Konten (Unternehmens- oder Creator-Konten).",
      "Ihre App kann einem Nutzer erst schreiben, nachdem er Ihnen geschrieben hat, und hat dann 24 Stunden Zeit zu antworten.",
      "Das Human-Agent-Tag erlaubt Antworten innerhalb von 7 Tagen, nach dem App Review.",
      "Private Antworten auf Kommentare können innerhalb von 7 Tagen nach dem Kommentar gesendet werden.",
      "Auf Instagram hat Meta das Handover Protocol durch Conversation Routing ersetzt.",
    ],
    sections: [
      {
        heading: "Was Sie brauchen, bevor Sie Instagram-DMs automatisieren",
        blocks: [
          {
            type: "p",
            text: "Die Messaging-APIs von Instagram funktionieren mit professionellen Konten. Es gibt zwei Typen: Unternehmenskonten für Händler, lokale Unternehmen, Marken, Organisationen und Dienstleister sowie Creator-Konten für Personen des öffentlichen Lebens, Content-Produzenten, Künstler und Influencer. Beachten Sie: Wenn Sie ein privates persönliches Konto auf ein professionelles Konto umstellen, wird es öffentlich.",
          },
          {
            type: "table",
            caption: "Zwei Wege, Instagram-Messaging anzubinden",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Facebook-Seite", "Nicht erforderlich", "Das Instagram-Konto muss mit einer Facebook-Seite verknüpft sein"],
              ["Nachrichten senden", "Instagram User Access Token mit der Berechtigung instagram_business_manage_messages", "Derselbe Endpunkt /PAGE_ID/messages wie beim Messenger, mit der Instagram-scoped ID des Kunden"],
              ["Eingehende Nachrichten", "Messaging-Webhooks", "Das Webhook-Feld messages, zusammen mit Messenger-Nachrichten"],
              ["Passt gut zu", "Unternehmen und Creators, die nur Instagram nutzen", "Teams, die bereits einen Messenger-Bot oder einen mit Meta verbundenen Helpdesk betreiben"],
            ],
          },
          {
            type: "p",
            text: "In beiden Fällen muss der Kontoinhaber in den Nachrichteneinstellungen von Instagram unter „Connected tools“ den Zugriff auf Nachrichten erlauben, sonst kann die API die Gespräche nicht verwalten. Zendesk weist darauf hin, dass dieser Schalter in der mobilen Instagram-App aktiviert werden muss, nicht im Web. Wenn Ihre App professionelle Konten bedient, die Sie nicht besitzen oder verwalten, benötigt sie außerdem Advanced Access über das App Review von Meta.",
          },
        ],
      },
      {
        heading: "Messaging-Fenster und das Human-Agent-Tag",
        blocks: [
          {
            type: "p",
            text: "Ihre App kann jemandem erst schreiben, nachdem diese Person Ihrem Konto geschrieben hat, und hat für jede Nachricht 24 Stunden Zeit zu antworten. Für Anliegen, die länger dauern, etwa eine Anfrage, die eingeht, während Ihr Unternehmen übers Wochenende geschlossen ist, erlaubt das Human-Agent-Tag einem Menschen, innerhalb von 7 Tagen zu antworten. Das Tag steht nur Apps zur Verfügung, die das App Review abgeschlossen haben.",
          },
          {
            type: "table",
            caption: "Wissenswerte Grenzen bei Instagram-DMs",
            head: ["Regel", "Was sie für Ihren Bot bedeutet"],
            rows: [
              ["24-Stunden-Antwortfenster", "Automatisierte Antworten müssen innerhalb von 24 Stunden nach der Nachricht des Kunden rausgehen"],
              ["Human-Agent-Tag (7 Tage)", "Späte Antworten kommen von einem Menschen, nach dem App Review"],
              ["Keine Gruppennachrichten", "Gruppengespräche werden von der API nicht unterstützt"],
              ["Ordner „Requests“", "Gespräche im Ordner „Requests“, die seit 30 Tagen inaktiv sind, werden von der API nicht zurückgegeben"],
            ],
          },
        ],
      },
      {
        heading: "Comment-to-DM: Private Replies",
        blocks: [
          {
            type: "p",
            text: "Viele Support-Fragen beginnen in Kommentaren, etwa „Ist das auf Lager?“ oder „Wie kann ich das zurückgeben?“. Mit Private Replies kann Ihr Konto einen Kommentar mit einer Direktnachricht an die kommentierende Person beantworten. Sie funktionieren für Kommentare unter Beiträgen, Reels und Anzeigen sowie für Kommentare bei Instagram Live. Eine Private Reply ist eine einzelne Nachricht, die innerhalb von 7 Tagen nach dem Kommentar gesendet wird und automatisch einen Link zum Beitrag oder Kommentar enthält.",
          },
          {
            type: "p",
            text: "Private Replies benötigen das Human-Agent-Tag nicht mehr. Antwortet die Person auf Ihre Private Reply, beginnt mit dieser Nachricht ein normales Gespräch, und es gilt das übliche 24-Stunden-Fenster. Ein praxistaugliches Setup: Kommentare auf Support-Schlüsselwörter überwachen, eine Private Reply mit einer Antwort oder einer Frage senden und den DM-Bot übernehmen lassen – so bleiben Bestellnummern und persönliche Angaben aus öffentlichen Kommentaren heraus.",
          },
        ],
      },
      {
        heading: "Ice Breakers und Einstiegspunkte",
        blocks: [
          {
            type: "p",
            text: "Ice Breakers sind vordefinierte Fragen, auf die Menschen tippen können, wenn sie ein neues Gespräch mit Ihrem Konto beginnen, etwa „Wo ist meine Bestellung?“ oder „Support kontaktieren“. Tippt jemand darauf, erhält Ihre App ein Webhook-Ereignis messaging_postback, sodass jeder Ice Breaker einen eigenen Bot-Ablauf starten kann. Ice Breakers lassen sich in mehreren Sprachen einrichten, wobei je nach Spracheinstellung (Locale) des Nutzers die passende Version angezeigt wird. Nutzen Sie sie für Ihre häufigsten Support-Fragen, leiten Sie jede an einen bestimmten Ablauf weiter und prüfen Sie, auf welche Menschen tatsächlich tippen, damit Sie ungenutzte ersetzen können.",
          },
          {
            type: "p",
            text: "ig.me-Links können einen Referral-Parameter an ein Gespräch übergeben, zum Beispiel um dem Bot mitzuteilen, von welcher Produktseite der Kunde kam. Bei neuen Gesprächen verlangt Meta, dass Ice Breakers eingerichtet sind, damit dieser Referral-Parameter ankommt.",
          },
        ],
      },
      {
        heading: "DMs an einen Menschen übergeben",
        blocks: [
          {
            type: "p",
            text: "Auf Instagram unterstützt Meta das Handover Protocol nicht mehr und hat alle Unternehmen auf Conversation Routing umgestellt. Damit können Sie die Thread-Kontrolle an den Instagram-Posteingang oder an einen Posteingang eines Drittanbieters wie einen Helpdesk übergeben. Im App Review erwartet Meta den Nachweis, dass bei einer Eskalation die Zuständigkeit für den Thread an den Posteingang übergeht und der Agent von dort antworten kann.",
          },
          {
            type: "p",
            text: "Zwei Eigenheiten sollten Sie kennen. Antworten über eine Drittanbieter-App verschieben den Thread in den Ordner „General“, und über die Plattform zugestellte Nachrichten enthalten nicht die Ordnerinformationen, die in der Instagram-App angezeigt werden. Im Instagram-Direct-Kanal von Zendesk werden Antworten, die direkt in Instagram verfasst werden, nicht zum Ticket hinzugefügt; Agenten sollten daher aus Zendesk antworten.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab richtet Instagram-DM-Bots ein, die häufige Fragen beantworten, Angaben erfassen und Gespräche an Ihr Team in Zendesk, Freshdesk, Jira, Slack oder einem internen Tool übergeben – gebaut auf APIs, Webhooks und Make oder n8n. Ein Starter Chat Bot (350–450 USD) deckt ein oder zwei Kanäle ab; ein Standard Chat Bot (500–650 USD) deckt drei bis fünf ab, etwa Instagram, Messenger und Ihre Website. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Das kostenlose 30-minütige Audit-Gespräch ist der richtige Einstieg.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich DMs auf einem persönlichen Instagram-Konto automatisieren?",
        a: "Nein. Die Messaging-APIs von Meta funktionieren mit professionellen Konten, also Unternehmens- oder Creator-Konten.",
      },
      {
        q: "Brauche ich eine Facebook-Seite, um Instagram-DMs zu automatisieren?",
        a: "Nicht mit der Instagram API with Instagram Login, die keine verknüpfte Seite voraussetzt. Die Instagram Messaging API über die Messenger Platform setzt dagegen eine voraus.",
      },
      {
        q: "Wie lange kann ich mit der Antwort auf eine DM warten?",
        a: "Automatisierte Antworten müssen innerhalb von 24 Stunden nach der Nachricht des Kunden rausgehen. Ein menschlicher Agent kann mit dem Human-Agent-Tag bis zu 7 Tage später antworten, sobald Ihre App das App Review bestanden hat.",
      },
      {
        q: "Kann ich jemandem eine DM senden, der meinen Beitrag kommentiert hat?",
        a: "Ja, mit einer Private Reply: einer einzelnen Nachricht, die innerhalb von 7 Tagen nach dem Kommentar gesendet wird und automatisch einen Link zum Beitrag oder Kommentar enthält.",
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
    slug: "website-chatbot-kundensupport",
    category: "channels",
    navLabel: "Website-Chatbot für den Support",
    primaryKeyword: "Website Chatbot Kundensupport",
    title: "Website-Chatbot für den Kundensupport: Setup und Übergabe",
    description:
      "Website-Chatbot für den Support planen: Helpdesk-Widgets wie Zendesk und Freshchat, Übergabe an Agenten, Abdeckung nach Feierabend und WCAG-Barrierefreiheit.",
    h1: "Website-Chatbot für den Kundensupport: Widgets, Übergabe und Barrierefreiheit",
    intro:
      "Ein Website-Chatbot für den Kundensupport ist ein Chat-Widget auf Ihrer Website oder in Ihrem Help Center, in dem ein Bot häufige Fragen beantwortet, Angaben erfasst und das Gespräch an einen Live-Agenten übergibt, wenn er nicht weiterhelfen kann. Die meisten Helpdesks bringen ihr eigenes Widget mit; die eigentliche Arbeit liegt also in der Konfiguration der Bot-Abläufe, der Übergabe, des Verhaltens außerhalb der Geschäftszeiten und der Barrierefreiheit.",
    keyFacts: [
      "Das Messaging-Web-Widget von Zendesk wird installiert, indem ein Code-Snippet auf jeder Seite eingefügt wird, auf der es erscheinen soll.",
      "Zendesk Messaging kann während und außerhalb der Geschäftszeiten unterschiedliche Antworten anzeigen.",
      "KI-Agenten in Freshdesk lassen sich so einstellen, dass sie vor der Übergabe an einen Menschen Kundendaten erfassen.",
      "WCAG 2.2 verlangt, dass alle Funktionen per Tastatur bedienbar sind (2.1.1, Stufe A).",
      "Die W3C-Technik role=\"log\" ermöglicht es Screenreadern, neue Chatnachrichten anzukündigen, sobald sie eingehen.",
    ],
    sections: [
      {
        heading: "Natives Helpdesk-Widget oder ein eigenes?",
        blocks: [
          {
            type: "p",
            text: "Wenn Sie bereits einen Helpdesk nutzen, beginnen Sie mit dessen Widget. Chats landen in derselben Queue wie E-Mails und Social-Media-Nachrichten, Agenten antworten aus einem einzigen Workspace, und der Anbieter pflegt den Widget-Code.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (Messaging): Gehen Sie im Admin Center zu „Channels > Messaging and social > Messaging“, öffnen Sie das Widget und kopieren Sie den Code aus dem Abschnitt „Installation“. Fügen Sie ihn in den Quelltext jeder Seite ein, auf der das Widget erscheinen soll, und stellen Sie sicher, dass Ihre Firewall das Widget zulässt.",
              "Freshchat-Web-Widget (Freshdesk): Kopieren Sie den Embed-Code aus den Einstellungen des Web-Chat-Kanals und fügen Sie ihn auf jeder Seite ein, auf der das Widget erscheinen soll. Freshworks dokumentiert außerdem die Installation auf WordPress, Shopify und Squarespace sowie in iOS- und Android-Apps.",
            ],
          },
          {
            type: "table",
            caption: "Ein Widget auswählen",
            head: ["Option", "Passt gut, wenn", "Worauf Sie achten sollten"],
            rows: [
              ["Natives Widget des Helpdesks", "Sie Chats, Tickets und Reporting an einem Ort haben möchten", "Gestaltung und Bot-Logik sind auf das beschränkt, was der Anbieter unterstützt"],
              ["Natives Widget mit eigenem Bot", "Sie Logik oder Integrationen brauchen, die dem integrierten Bot fehlen", "Übergabe und Kontextweitergabe müssen angebunden und getestet werden"],
              ["Komplett eigenes Widget", "Der Chat Teil der Oberfläche Ihres Produkts ist", "Sie sind selbst für Barrierefreiheit, Verfügbarkeit und die Integration auf Agentenseite verantwortlich"],
            ],
          },
        ],
      },
      {
        heading: "Die Übergabe vom Bot an einen Menschen gestalten",
        blocks: [
          {
            type: "p",
            text: "An der Übergabe scheitern die meisten Website-Bots. Eine gute Übergabe bringt den Kunden zu einem Menschen, ohne dass er sich wiederholen muss. Beide großen Helpdesks unterstützen dieses Muster:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Wenn Sie einem Messaging-Kanal einen KI-Agenten hinzufügen, ersetzen dessen eigene Antworten die Standard-Messaging-Antwort. Im Workflow-Rezept von Zendesk begrüßt der KI-Agent den Kunden, zeigt ein Formular an, um zu erfassen, was die Agenten brauchen, teilt dem Kunden mit, dass die Anfrage an das Team geht, und leitet das Gespräch dann an einen Agenten weiter, der benachrichtigt wird und die Angaben sieht, sobald er es annimmt. Das Rezept nutzt für angemeldete Kunden ein kürzeres Formular ohne Name und E-Mail-Adresse.",
              "Freshchat und Freshdesk: Bot-Abläufe übergeben mit Aktionen wie „Assign to group“ oder „Make available for assignment“, und die Übergabeeinstellungen der KI-Agenten von Freshdesk enthalten eine Option, vor der Übergabe Kundendaten zu erfassen.",
            ],
          },
          {
            type: "p",
            text: "Entscheiden Sie anhand dessen, was Ihre Agenten zuerst fragen, welche Angaben Sie erfassen. Typische Felder sind Name und E-Mail-Adresse bei nicht angemeldeten Besuchern, eine Bestell- oder Kundennummer, die per Schaltfläche gewählte Art des Anliegens, eine kurze Beschreibung in den eigenen Worten des Kunden und die Seite, auf der er sich befand.",
          },
        ],
      },
      {
        heading: "Abdeckung außerhalb der Geschäftszeiten",
        blocks: [
          {
            type: "p",
            text: "Ein Widget, das um 2 Uhr nachts verspricht: „Ein Agent ist gleich für Sie da“, schadet mehr als gar kein Chat. Planen Sie, was passiert, wenn niemand online ist:",
          },
          {
            type: "ul",
            items: [
              "Geschäftszeiten festlegen: Messaging-Kanäle in Zendesk können einen Geschäftszeitenplan nutzen und während und außerhalb dieser Zeiten unterschiedliche Antworten anzeigen.",
              "Chats in Tickets umwandeln: Im Rezept von Zendesk eskaliert der KI-Agent während der Geschäftszeiten an einen Live-Agenten; außerhalb davon erfasst er die Angaben des Kunden und eskaliert die Anfrage als E-Mail-Ticket zur Nachbearbeitung.",
              "Den Bot beantworten lassen, was er kann: FAQ-Antworten, Abfragen des Bestellstatus und Links ins Help Center funktionieren zu jeder Uhrzeit.",
              "Sagen, wann Sie antworten: Nennen Sie dem Kunden Ihre Geschäftszeiten und wo die Antwort ankommen wird, etwa per E-Mail.",
            ],
          },
        ],
      },
      {
        heading: "Grundlagen der Barrierefreiheit für Chat-Widgets",
        blocks: [
          {
            type: "p",
            text: "Ein Chat-Widget ist interaktiver Inhalt, der über Ihrer Website liegt, und muss daher dieselben Anforderungen an die Barrierefreiheit erfüllen wie der Rest der Seite. WCAG 2.2 ist die aktuelle Version des W3C, und diese Erfolgskriterien sind für Chats besonders relevant:",
          },
          {
            type: "table",
            caption: "WCAG-2.2-Kriterien, die Sie bei einem Chat-Widget prüfen sollten",
            head: ["Kriterium", "Stufe", "Was es für ein Chat-Widget bedeutet"],
            rows: [
              ["2.1.1 Tastatur", "A", "Widget öffnen, tippen, Schaltflächen auswählen und schließen – alles funktioniert ohne Maus"],
              ["2.4.7 Fokus sichtbar", "AA", "Nutzer sehen, welche Schaltfläche oder welches Feld den Tastaturfokus hat"],
              ["2.4.11 Fokus nicht verdeckt (Minimum)", "AA", "Der Launcher oder das geöffnete Chatfenster verdeckt das fokussierte Element auf der Seite nicht vollständig"],
              ["4.1.2 Name, Rolle, Wert", "A", "Eigene Schaltflächen, Menüs und der Launcher geben ihre Namen und Zustände an assistive Technologien weiter"],
              ["4.1.3 Statusmeldungen", "AA", "Updates wie „Nachricht gesendet“ werden angekündigt, ohne den Fokus zu verschieben"],
            ],
          },
          {
            type: "p",
            text: "Für das Gespräch selbst kennzeichnet die W3C-Technik ARIA23 den Chatverlauf mit role=\"log\": Neue Nachrichten werden am Ende des Bereichs angefügt, und Screenreader kündigen sie an, sobald sie erscheinen. Testen Sie bei einem Widget eines Anbieters Ihre eigene Konfiguration mit Tastatur und Screenreader, denn eigene Farben und Bot-Inhalte können trotzdem Probleme verursachen.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "TascaLab richtet Website-Chatbots auf dem Helpdesk ein, den Sie bereits nutzen, etwa Zendesk oder Freshdesk, oder bindet einen eigenen Bot über APIs, Webhooks und Make oder n8n an Jira, Slack oder interne Tools an. Ein Starter Chat Bot (350–450 USD) deckt ein oder zwei Kanäle mit FAQs und einfacher Erfassung von Informationen ab; ein Standard Chat Bot (500–650 USD) deckt drei bis fünf Kanäle mit komplexeren Gesprächen und reibungsloseren Übergaben ab. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und die meisten Setups dauern 1–3 Wochen. Starten Sie mit einem kostenlosen 30-minütigen Audit-Gespräch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich ein separates Chatbot-Tool, wenn mein Helpdesk ein Widget hat?",
        a: "Nicht unbedingt. Sowohl Zendesk als auch Freshdesk ermöglichen es, einen Bot oder KI-Agenten an das jeweilige Web-Widget anzubinden. Ein separates Tool ist sinnvoll, wenn Sie Logik oder Integrationen brauchen, die der integrierte Bot nicht bietet.",
      },
      {
        q: "Was sollte der Bot erfassen, bevor er an einen Agenten übergibt?",
        a: "Das, was Ihre Agenten zuerst fragen: meist Kontaktdaten bei anonymen Besuchern, eine Bestell- oder Kundennummer, die Art des Anliegens und eine kurze Beschreibung. Zendesk und Freshdesk unterstützen beide das Erfassen von Angaben vor der Übergabe.",
      },
      {
        q: "Was sollte ein Website-Chatbot außerhalb der Geschäftszeiten tun?",
        a: "Beantworten, was er kann, Ihre Geschäftszeiten erklären und den Rest in ein Ticket umwandeln. Das dokumentierte Rezept von Zendesk erfasst außerhalb der Geschäftszeiten die Angaben des Kunden und eskaliert die Anfrage als E-Mail-Ticket.",
      },
      {
        q: "Welcher Standard für Barrierefreiheit gilt für ein Chat-Widget?",
        a: "WCAG 2.2 ist die aktuelle Version des W3C. Bedienbarkeit per Tastatur (2.1.1), sichtbarer Fokus (2.4.7), Namen und Rollen für Bedienelemente (4.1.2) und Statusmeldungen (4.1.3) sind für Chats besonders relevant.",
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
    slug: "sms-automatisierung-kundenservice",
    category: "channels",
    navLabel: "SMS-Support automatisieren",
    primaryKeyword: "SMS Automatisierung Kundenservice",
    title: "SMS-Automatisierung im Kundenservice: Webhooks, 10DLC, STOP",
    description:
      "So funktioniert SMS-Automatisierung im Kundenservice: eingehende Webhooks, A2P 10DLC und Toll-Free-Verifizierung, STOP-Opt-outs, Segmentlimits und Tickets.",
    h1: "SMS-Automatisierung im Kundenservice: Wie sie funktioniert und was Sie einrichten müssen",
    intro:
      "SMS-Automatisierung im Kundenservice verbindet eine geschäftliche Telefonnummer mit Code, der eingehende SMS liest, einfache Fragen beantwortet und alles andere in Tickets umwandelt. Bei einem Anbieter wie Twilio Programmable Messaging wird jede eingehende SMS an Ihren Webhook gesendet, und Ihr Code antwortet über die API. In den USA müssen Sie außerdem die Nummer registrieren und STOP-Opt-outs beachten, sonst werden Ihre Nachrichten blockiert.",
    keyFacts: [
      "Twilio sendet jede eingehende SMS an Ihre Webhook-URL, mit Feldern wie From, To, Body und MessageSid.",
      "Laut Twilio behandeln US-Mobilfunkanbieter jede Nachricht, die über eine Plattform wie Twilio gesendet wird, als Application-to-Person-Traffic (A2P).",
      "Nachrichten von nicht registrierten US-10DLC-Nummern werden mit dem Fehler 30034 blockiert, auch solange die Registrierung noch aussteht.",
      "Twilio verarbeitet STOP und andere Standard-Opt-out-Schlüsselwörter auf Long-Code-Nummern standardmäßig selbst.",
      "Ein GSM-7-SMS-Segment fasst 160 Zeichen; ein UCS-2-Segment, das für Emojis nötig ist, fasst 70.",
    ],
    sections: [
      {
        heading: "So funktioniert SMS-Automatisierung im Support",
        blocks: [
          {
            type: "p",
            text: "Sie erhalten eine Telefonnummer von einem SMS-Anbieter, richten deren Webhook für eingehende Nachrichten auf Ihren Code aus und senden Antworten über die API des Anbieters. Bei Twilio Programmable Messaging wird jede SMS an Ihre Nummer zu einer HTTP-Anfrage an Ihre Webhook-URL. Die Anfrage enthält den Absender in From, Ihre Nummer in To, den Nachrichtentext in Body (bis zu 1.600 Zeichen) und eine 34-stellige MessageSid, mit der Sie die Nachricht später über die REST-API abrufen können.",
          },
          {
            type: "p",
            text: "Ihr Endpunkt antwortet mit TwiML, dem XML-Format von Twilio, das Twilio sagt, was als Nächstes zu tun ist, etwa eine Antwort zu senden. Wenn Ihr Helpdesk später antwortet und der Bot nichts zu sagen hat, geben Sie ein leeres Response-Element zurück, damit Twilio die Nachricht annimmt, ohne zu antworten.",
          },
          {
            type: "ol",
            items: [
              "Der Kunde schreibt eine SMS an Ihre Support-Nummer.",
              "Twilio sendet die Nachricht an Ihren Webhook.",
              "Ihr Bot beantwortet eine häufige Frage sofort oder fragt nach Angaben wie einer Bestellnummer.",
              "Alles, was der Bot nicht lösen kann, wird zu einem Ticket in Ihrem Helpdesk, zugeordnet zur Telefonnummer des Kunden.",
              "Antworten der Agenten gehen als SMS von derselben Nummer an den Kunden zurück.",
            ],
          },
        ],
      },
      {
        heading: "US-Registrierung: A2P 10DLC und Toll-Free-Verifizierung",
        blocks: [
          {
            type: "p",
            text: "Laut der Dokumentation von Twilio betrachten US-Mobilfunkanbieter jede Nachricht, die über eine Plattform wie Twilio gesendet wird, als Application-to-Person (A2P). Wenn Sie SMS oder MMS von einem standardmäßigen 10-stelligen Long Code (10DLC) an US-Nummern senden, müssen Sie sich für A2P 10DLC registrieren. Die Registrierung besteht aus zwei Teilen: einer Brand, die den Mobilfunkanbietern mitteilt, wer sendet, und einer Kampagne, die den Anwendungsfall beschreibt und wie Menschen sich anmelden, abmelden und Hilfe erhalten. Sobald die Kampagne genehmigt ist, fügen Sie Ihre Nummer dem damit verknüpften Messaging Service hinzu.",
          },
          {
            type: "p",
            text: "Die Registrierung ist keine optionale Formalität. Twilio blockiert für die USA bestimmte Nachrichten von 10DLC-Nummern, die nicht mit einer genehmigten Kampagne verknüpft sind, einschließlich Nummern, deren Registrierung noch aussteht – und die Messaging-Gebühren fallen für die blockierten Nachrichten trotzdem an. Toll-Free-Nummern durchlaufen ein separates Verfahren namens Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Was Twilio verlangt, bevor Sie US-Kunden SMS senden",
            head: ["Absendertyp", "Voraussetzung", "Was ohne sie passiert"],
            rows: [
              ["10DLC Long Code", "Genehmigte A2P-10DLC-Brand und -Kampagne, mit der Nummer im Messaging Service der Kampagne", "Nachrichten werden mit dem Fehler 30034 blockiert"],
              ["10DLC, Einzelunternehmer", "Dieselbe Registrierung, aber eine Sole-Proprietor-Kampagne kann nur eine registrierte 10DLC-Nummer haben", "Weitere Nummern im Messaging Service bleiben unregistriert"],
              ["Toll-Free-Nummer", "Genehmigte Toll-Free Verification", "Nachrichten an Mobilnummern in den USA und Kanada schlagen mit dem Fehler 30032 fehl"],
            ],
          },
        ],
      },
      {
        heading: "STOP-Schlüsselwörter, Opt-outs und Einwilligung",
        blocks: [
          {
            type: "p",
            text: "Twilio verarbeitet die englischen Standard-Opt-out-Schlüsselwörter auf Long-Code-Nummern für Sie. Die Dokumentation nennt STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT und CANCEL, unabhängig von Groß- und Kleinschreibung. Twilio sendet eine Standardbestätigung, und Ihre Nachrichten erreichen diese Nummer nicht mehr, bis der Kunde START schreibt. Bei Toll-Free-Nummern melden nur START und UNSTOP einen Kunden wieder an. Advanced Opt-Out, standardmäßig deaktiviert, ermöglicht es, Schlüsselwörter und Antworten in einem Messaging Service anzupassen, wobei reservierte Schlüsselwörter wie START nicht entfernt werden können.",
          },
          {
            type: "p",
            text: "Stellen Sie sicher, dass Ihr Bot einem Kunden, der sich abgemeldet hat, nichts mehr sendet. Auch US-Vorschriften regeln das. Die Anordnung der FCC von 2024 (FCC 24-24) besagt, dass Verbraucher ihre Einwilligung zu Robocalls und Robotexts auf jedem angemessenen Weg widerrufen können, dass eine Antwort wie stop, quit, end, revoke, opt out, cancel oder unsubscribe als angemessen gilt und dass Widerrufe innerhalb einer angemessenen Frist von höchstens zehn Geschäftstagen umgesetzt werden müssen. 2026 hat die FCC eine weitere Anordnung (FCC 26-67) erlassen, nach der Anrufer eine automatisierte Widerrufsmethode festlegen können, etwa eine Antwort-SMS mit Standardwörtern wie stop, quit oder unsubscribe, sofern die Methode klar offengelegt wird; zudem bittet sie um Stellungnahmen zu einer Verkürzung der Frist. Prüfen Sie, welche Fassung der Regeln zum Zeitpunkt Ihres Starts gilt.",
          },
          {
            type: "note",
            text: "Dies ist eine Zusammenfassung des FCC-Regeltexts, keine Rechtsberatung. Prüfen Sie die aktuellen Regeln mit Ihrem eigenen Rechtsbeistand, bevor Sie automatisierte SMS an US-Kunden senden.",
          },
        ],
      },
      {
        heading: "Nachrichtenlänge und Segmente",
        blocks: [
          {
            type: "p",
            text: "SMS werden in Segmenten versendet, und jedes Segment wird berechnet – die Länge der Bot-Antworten wirkt sich also auf die Kosten aus. Die Dokumentation von Twilio nennt diese Grenzen:",
          },
          {
            type: "table",
            caption: "SMS-Segmentgrößen laut der Dokumentation von Twilio",
            head: ["Kodierung", "Einzelne Nachricht", "Pro Segment bei Aufteilung", "Wann sie verwendet wird"],
            rows: [
              ["GSM-7", "160 Zeichen", "153 Zeichen", "Text, der nur den GSM-7-Zeichensatz verwendet"],
              ["UCS-2", "70 Zeichen", "67 Zeichen", "Jede Nachricht mit mindestens einem Zeichen außerhalb von GSM-7, etwa einem Emoji"],
            ],
          },
          {
            type: "p",
            text: "Ein einziges Nicht-GSM-7-Zeichen stellt die gesamte Nachricht auf UCS-2 um, nicht nur dieses Zeichen. Emojis, typografische Anführungszeichen und lange Gedankenstriche sind häufige Ursachen – das ist relevant, wenn ein Bot Antworten aus Help-Center-Artikeln übernimmt. Smart Encoding von Twilio kann einige dieser Zeichen durch GSM-7-Entsprechungen ersetzen. Ausgehender Nachrichtentext kann bis zu 1.600 Zeichen lang sein, kurze Antworten mit einem Link zum vollständigen Artikel funktionieren aber meist besser.",
          },
        ],
      },
      {
        heading: "SMS an Ihren Helpdesk anbinden",
        blocks: [
          {
            type: "p",
            text: "Zendesk bietet SMS als Zendesk Text an. Eine SMS an Ihre Text-Nummer erstellt automatisch ein Ticket, und öffentliche Antworten auf dieses Ticket gehen als SMS an den Kunden zurück. Zendesk weist außerdem darauf hin, dass SMS an US-Verbraucher von nicht registrierten Nummern blockiert werden; die A2P-10DLC-Registrierung gilt also auch dort.",
          },
          {
            type: "p",
            text: "Wenn Ihr Helpdesk keinen SMS-Kanal hat oder Sie Logik brauchen, die der integrierte Kanal nicht bietet, kann ein kleiner Dienst dazwischen das übernehmen. Er empfängt den Twilio-Webhook, führt den Bot aus, erstellt oder aktualisiert Tickets über die Helpdesk-API und sendet Antworten der Agenten über Twilio zurück.",
          },
        ],
      },
      {
        heading: "Wie TascaLab helfen kann",
        blocks: [
          {
            type: "p",
            text: "Die aufgeführten Bot-Kanäle von TascaLab sind Website, Telefon, WhatsApp, Telegram, Facebook Messenger und Instagram. SMS steht nicht auf dieser Liste, aber andere Kanäle mit einer API lassen sich im kostenlosen 30-minütigen Audit-Gespräch abstimmen. TascaLab baut auf den Tools auf, die Sie bereits nutzen, etwa Zendesk, Freshdesk, Jira und Slack, über APIs, Webhooks und Make oder n8n. Ein Starter Chat Bot kostet 350–450 USD für ein oder zwei Kanäle, ein Standard Chat Bot 500–650 USD für drei bis fünf. Jedes Projekt umfasst 30 Tage Support nach dem Launch, eine Basisdokumentation und keine versteckten Kosten, und die meisten Setups dauern 1–3 Wochen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Brauche ich für einen SMS-Support-Bot eine A2P-10DLC-Registrierung?",
        a: "Ja, wenn Sie SMS oder MMS über eine Plattform wie Twilio von einem 10-stelligen Long Code an US-Nummern senden. Twilio blockiert für die USA bestimmte Nachrichten von nicht registrierten 10DLC-Nummern mit dem Fehler 30034, auch solange die Registrierung noch aussteht.",
      },
      {
        q: "Was passiert, wenn ein Kunde STOP schreibt?",
        a: "Auf Long-Code-Nummern verarbeitet Twilio STOP und andere Standard-Opt-out-Schlüsselwörter standardmäßig. Es sendet eine Bestätigung, und Ihre Nachrichten erreichen diese Nummer nicht mehr, bis der Kunde START schreibt.",
      },
      {
        q: "Warum zählte eine kurze Nachricht als zwei Segmente?",
        a: "Wahrscheinlich enthielt sie ein Zeichen außerhalb von GSM-7, etwa ein Emoji oder ein typografisches Anführungszeichen. Das stellt die gesamte Nachricht auf UCS-2 um, wodurch in ein einzelnes Segment nur 70 Zeichen passen.",
      },
      {
        q: "Kann ich statt einer 10DLC-Nummer eine Toll-Free-Nummer verwenden?",
        a: "Ja, aber sie braucht eine Toll-Free Verification. Bis diese genehmigt ist, schlagen Nachrichten an Mobilnummern in den USA und Kanada mit dem Fehler 30032 fehl.",
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
