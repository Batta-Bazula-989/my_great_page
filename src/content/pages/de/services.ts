import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "ki-chatbot-kundenservice",
    category: "services",
    navLabel: "KI-Chatbot für den Support",
    primaryKeyword: "KI-Chatbot Kundenservice",
    title: "KI-Chatbot im Kundenservice: So funktioniert er | TascaLab",
    description:
      "Wie ein KI-Chatbot im Kundenservice FAQs beantwortet, Angaben erfasst und an Agenten übergibt – und wie er per API an Zendesk oder Freshdesk angebunden wird.",
    h1: "KI-Chatbot im Kundenservice: was er leistet und wie er an Ihren Helpdesk angebunden wird",
    intro:
      "Ein KI-Chatbot im Kundenservice beantwortet Routinefragen anhand Ihrer Hilfeinhalte, erfasst die Angaben, die ein Agent brauchen wird, und übergibt das Gespräch an einen Menschen, wenn er nicht weiterhelfen kann oder der Kunde darum bittet. Am besten funktioniert er als Ebene über Ihrem bestehenden Helpdesk: Der Bot übernimmt den ersten Austausch, und alles, was er nicht lösen kann, wird zu einem Ticket mit dem vollständigen Kontext.",
    keyFacts: [
      "Die KI-Agenten von Zendesk generieren Antworten aus verbundenen Wissensquellen und greifen auf eine Standardantwort zurück, wenn nichts Relevantes gefunden wird.",
      "Die KI-Agenten von Freshdesk können ein Gespräch automatisch an einen Menschen übergeben, wenn der Kunde Formulierungen verwendet, die der Admin hinterlegt hat.",
      "Ein Drittanbieter-Bot in Zendesk Messaging übergibt, indem er die Kontrolle an den Agent Workspace abgibt; dadurch kommt das Gespräch für die Zuweisung an einen Agenten infrage.",
      "Nach Artikel 50 der EU-KI-Verordnung müssen Chatbots ab dem 2. August 2026 Menschen darüber informieren, dass sie mit einer KI interagieren, sofern das nicht offensichtlich ist.",
    ],
    sections: [
      {
        heading: "Was ein Support-Chatbot tatsächlich leistet",
        blocks: [
          {
            type: "p",
            text: "Die meisten Support-Chatbots erledigen drei Aufgaben, eine vierte ist optional. Es lohnt sich, sie getrennt zu planen, denn jede hängt von anderen Voraussetzungen ab, damit sie gut funktioniert.",
          },
          {
            type: "table",
            caption: "Die Kernaufgaben eines Chatbots im Kundensupport",
            head: ["Aufgabe", "Beispiel", "Wovon sie abhängt"],
            rows: [
              [
                "Häufige Fragen beantworten",
                "Öffnungszeiten, Rückgaberichtlinie, Lieferzeiten, Schritt-für-Schritt-Anleitungen",
                "Korrekte, aktuelle Hilfeartikel oder eine freigegebene Q&A-Liste",
              ],
              [
                "Informationen erfassen",
                "Bestellnummer, Konto-E-Mail, Gerät, ein Foto des Problems",
                "Eine festgelegte Liste von Feldern, die den Ticketfeldern in Ihrem Helpdesk entsprechen",
              ],
              [
                "An einen Menschen übergeben",
                "Live-Übergabe an einen Agenten oder ein Ticket mit dem Gesprächsverlauf",
                "Ein Übergabeweg in Ihren Helpdesk und klare Regeln, wann er genutzt wird",
              ],
              [
                "Einfache Aktionen ausführen (optional)",
                "Einen Bestellstatus oder eine Buchung abfragen",
                "API-Zugriff auf das System, in dem die Daten liegen",
              ],
            ],
          },
          {
            type: "p",
            text: "LLM-basierte Bots generieren Antworten aus Ihren Wissensinhalten, statt handgeschriebenen Skripten zu folgen. Zendesk beschreibt etwa die „Knowledge reply“ seiner KI-Agenten so, dass sie die verbundenen Wissensquellen durchsucht, um eine Antwort zu generieren, und auf eine Standardantwort zurückgreift, wenn nichts Relevantes gefunden wird. Die praktische Folge ist einfach: Der Bot ist nur so gut wie die Inhalte, aus denen er antwortet. Lücken und veraltete Artikel zeigen sich als falsche oder vage Antworten.",
          },
          {
            type: "p",
            text: "Das Erfassen von Informationen wird oft unterschätzt. Selbst wenn der Bot das Problem nicht lösen kann, erspart die Abfrage von Bestellnummer, Konto-E-Mail und einer kurzen Beschreibung vorab die erste Rückfragerunde, die ein Agent sonst hätte.",
          },
        ],
      },
      {
        heading: "Übergabe: woran Kunden den Bot messen",
        blocks: [
          {
            type: "p",
            text: "Ein Bot, der Kunden nicht zu einem Menschen durchlässt, beschädigt schnell das Vertrauen. Legen Sie vorab fest, in welchen Situationen der automatisierte Teil des Gesprächs endet:",
          },
          {
            type: "ul",
            items: [
              "Der Kunde möchte mit einem Menschen sprechen. In den Übergabeeinstellungen der KI-Agenten von Freshdesk können Admins zum Beispiel Formulierungen hinterlegen, die das Gespräch automatisch übergeben, vor der Übergabe eine Nachricht anzeigen und optional zuerst Kundendaten erfassen.",
              "Der Bot scheitert wiederholt. In Zendesk können Sie einen KI-Agenten so einrichten, dass er an einen Menschen eskaliert, wenn er nach mehreren Versuchen keine Antwort aus den verbundenen Wissensquellen generieren kann.",
              "Das Thema ist heikel oder liegt außerhalb des Zuständigkeitsbereichs. Freshdesk nennt Anfragen wie Abrechnung oder Rückerstattungen sowie Fragen außerhalb des konfigurierten Umfangs des Agenten als typische Auslöser für eine Übergabe.",
              "Niemand ist online. Außerhalb der Geschäftszeiten sollte der Bot das klar sagen und ein Ticket erstellen, statt einen Live-Agenten zu versprechen.",
            ],
          },
          {
            type: "p",
            text: "Unabhängig vom Auslöser sollte der Agent den Gesprächsverlauf und die erfassten Felder erhalten, damit der Kunde nichts wiederholen muss. Wenn ein Drittanbieter-Bot die Kontrolle über das Switchboard von Sunshine Conversations an den Agent Workspace von Zendesk abgibt, kommt das Gespräch für die Zuweisung an einen Agenten infrage, und der Bot kann Metadaten mitgeben, die Felder im daraus entstehenden Ticket ausfüllen.",
          },
        ],
      },
      {
        heading: "Native Helpdesk-Bots vs. eigener Bot",
        blocks: [
          {
            type: "p",
            text: "Zendesk und Freshdesk bieten beide eigene KI-Agenten an. Wenn Ihre Gespräche bereits über das Messaging-Widget dieses Helpdesks laufen und Ihr Help Center die meisten Fragen beantwortet, ist die native Option der schnellste Einstieg. Ein eigener, per API angebundener Bot ist die Alternative, wenn Sie etwas brauchen, das der native Bot nicht abdeckt.",
          },
          {
            type: "table",
            caption: "Nativer vs. eigener Support-Chatbot",
            head: ["", "Nativer KI-Agent des Helpdesks", "Eigener Bot, per API angebunden"],
            rows: [
              [
                "Einrichtung",
                "Wird im Admin-Bereich des Helpdesks konfiguriert, mit dessen Help Center als Wissensquelle",
                "Läuft auf einem separaten Stack und wird über API und Webhooks an den Helpdesk angebunden",
              ],
              [
                "Kanäle",
                "Alles, was das Messaging-Produkt des Helpdesks in Ihrem Tarif unterstützt",
                "Jeder Kanal mit einer API, die Sie anbinden können, etwa WhatsApp, Telegram oder Messenger",
              ],
              [
                "Logik",
                "Beschränkt auf den Flow-Builder und die KI-Einstellungen des Anbieters",
                "Eigene Regeln, Abfragen in internen Systemen, mehrstufige Formulare",
              ],
              [
                "Lizenzierung",
                "Teil Ihres Helpdesk-Abos oder ein Add-on; prüfen Sie Ihren Tarif",
                "Separate Kosten für die Bot-Plattform und die Nutzung von KI-Modellen",
              ],
              [
                "Wartung",
                "Der Anbieter wartet die Plattform",
                "Jemand muss die Integration pflegen, wenn sich APIs ändern",
              ],
            ],
          },
          {
            type: "p",
            text: "Keine der beiden Varianten ist grundsätzlich besser. Sinnvoll ist es, zuerst zu prüfen, was der native Agent abdeckt, und nur für die konkrete Lücke eine eigene Lösung zu bauen: einen Kanal, eine Abfrage oder eine Übergaberegel, die das native Tool nicht abbilden kann.",
          },
        ],
      },
      {
        heading: "Wie ein eigener Bot an Ihren Helpdesk angebunden wird",
        blocks: [
          {
            type: "p",
            text: "Es gibt zwei gängige Integrationsmuster, und viele Setups nutzen beide.",
          },
          {
            type: "ol",
            items: [
              "Ticket bei der Übergabe erstellen. Der Bot läuft über eine eigene Kanalanbindung und erstellt, sobald ein Mensch gebraucht wird, über die REST-API des Helpdesks ein Ticket mit Gesprächsverlauf und erfassten Angaben. In der Tickets API von Zendesk ist ein Kommentar das einzige Pflichtfeld beim Erstellen eines Tickets, und Sie können einen Idempotenzschlüssel mitsenden, damit eine wiederholte Anfrage kein Duplikat erzeugt. Der Endpunkt POST /api/v2/tickets von Freshdesk akzeptiert benutzerdefinierte Felder als Schlüssel-Wert-Paare und legt einen neuen Kontakt an, wenn die E-Mail-Adresse des Anfragenden noch nicht bekannt ist.",
              "Das Gespräch im Messaging des Helpdesks teilen. In Zendesk lässt sich ein Drittanbieter-Bot als Messaging-Responder installieren; nur ein Bot kann jeweils die Rolle des Standard-Responders innehaben. Der Bot antwortet zuerst und übergibt das Gespräch mit der Switchboard-Aktion „pass control“ an den Agent Workspace, wenn ein Mensch gebraucht wird.",
            ],
          },
          {
            type: "p",
            text: "Webhooks übernehmen den Rückweg. Ein Zendesk-Trigger kann über die Aktion „Notify webhook“ einen externen Endpunkt aufrufen – etwa um dem Bot mitzuteilen, dass ein Agent das Ticket gelöst hat, damit er den Vorgang im ursprünglichen Kanal abschließen kann.",
          },
          {
            type: "note",
            text: "Halten Sie eine einzige Quelle für Antworten. Wenn der Bot aus einem separaten Dokument antwortet, das sich nach und nach von Ihrem Help Center entfernt, erhalten Kunden widersprüchliche Antworten, je nachdem, wo sie fragen.",
          },
        ],
      },
      {
        heading: "Kunden mitteilen, dass sie mit einem Bot sprechen",
        blocks: [
          {
            type: "p",
            text: "Wenn Sie Kunden in der EU betreuen, gilt Artikel 50 der KI-Verordnung ab dem 2. August 2026. Laut den FAQ der Europäischen Kommission müssen Anbieter Systeme wie Chatbots so gestalten, dass Menschen ab Beginn der ersten Interaktion klar und erkennbar darüber informiert werden, dass sie mit einer KI interagieren. Die Ausnahme für Fälle, in denen dies für eine angemessen gut informierte Person offensichtlich ist, sei restriktiv auszulegen, so die Kommission.",
          },
          {
            type: "p",
            text: "Am einfachsten lösen Sie das mit einem klaren Satz in der Begrüßung des Bots und einem sichtbaren Weg zu einem Menschen. Gesprächsverläufe enthalten zudem häufig personenbezogene Daten; legen Sie also fest, wie lange die Bot-Plattform sie speichert und wer darauf zugreifen kann.",
          },
        ],
      },
      {
        heading: "Wie TascaLab Support-Chatbots baut",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Chatbots auf den Tools auf, die Sie bereits nutzen – Zendesk, Freshdesk, Jira, Slack oder interne Systeme –, über deren APIs, Webhooks und Make oder n8n, ganz ohne Plattformwechsel. Der Bot ist als Filter vor Ihrem Team konzipiert, nicht als Ersatz dafür: Er beantwortet, was er kann, erfasst die Angaben und übergibt den Rest mit Kontext.",
          },
          {
            type: "table",
            caption: "Chatbot-Pakete von TascaLab (einmaliger Preis)",
            head: ["Paket", "Umfang", "Preis"],
            rows: [
              ["Starter Chat Bot", "1–2 Kanäle, FAQs, einfache Erfassung von Informationen", "{{price:starter}}"],
              [
                "Standard Chat Bot",
                "3–5 Kanäle, komplexere Gespräche, reibungslosere Übergaben",
                "{{price:standard}}",
              ],
            ],
          },
          {
            type: "p",
            text: "Verfügbare Kanäle: Website, WhatsApp, Telegram, Facebook Messenger und Instagram sowie Telefon über den Voicebot. Die meisten Setups dauern 1–3 Wochen, und jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten. Ausgangspunkt ist ein kostenloses 30-minütiges Health-Check-Gespräch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ersetzt ein KI-Chatbot meine Support-Agenten?",
        a: "Dafür sollte er nicht ausgelegt sein. Ein Support-Bot ist am nützlichsten, wenn er wiederkehrende Fragen beantwortet und Angaben erfasst und alles andere samt Gesprächsverlauf an Menschen übergibt.",
      },
      {
        q: "Braucht der Chatbot eine eigene Wissensdatenbank?",
        a: "In der Regel nicht. KI-Support-Bots antworten typischerweise aus Ihrem bestehenden Help Center oder einer freigegebenen Q&A-Liste – die KI-Agenten von Zendesk etwa generieren Antworten aus verbundenen Wissensquellen. Eine einzige Quelle vermeidet widersprüchliche Antworten.",
      },
      {
        q: "Kann ein eigener Chatbot Tickets in Zendesk oder Freshdesk erstellen?",
        a: "Ja. Beide Helpdesks bieten einen REST-Endpunkt zum Erstellen von Tickets (POST /api/v2/tickets), sodass ein Bot bei der Übergabe ein Ticket mit Gesprächsverlauf und erfassten Feldern anlegen kann.",
      },
      {
        q: "Muss ich Kunden sagen, dass sie mit einem Bot sprechen?",
        a: "In der EU verlangt Artikel 50 der KI-Verordnung ab dem 2. August 2026, dass Chatbots Menschen darüber informieren, dass sie mit einer KI interagieren, sofern das nicht offensichtlich ist. Am einfachsten sagen Sie es in der ersten Nachricht des Bots.",
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
    slug: "ki-voicebot-kundenservice",
    category: "services",
    navLabel: "KI-Voicebot für Telefonsupport",
    primaryKeyword: "KI Voicebot Kundenservice",
    title: "KI-Voicebot im Kundenservice: So funktioniert er | TascaLab",
    description:
      "So funktioniert ein KI-Voicebot im Kundenservice: Telefonie, Speech-to-Text, KI-Logik und Text-to-Speech, dazu Anrufübergabe, IVR vs. Bot und FCC-Regeln.",
    h1: "KI-Voicebot im Kundenservice: So funktioniert die Automatisierung eingehender Anrufe",
    intro:
      "Ein KI-Voicebot im Kundenservice nimmt eingehende Anrufe an, ermittelt, was der Anrufer braucht, erledigt einfache Anliegen oder erfasst Angaben und leitet den Anruf an einen Menschen weiter, wenn es angebracht ist. Technisch verkettet er vier Bausteine – Telefonie, Speech-to-Text, ein Sprachmodell oder eine Dialoglogik sowie Text-to-Speech –, und die Übergabe an Ihr Team ist genauso wichtig wie eine natürlich klingende Stimme.",
    keyFacts: [
      "Ein klassisches IVR arbeitet mit Tastendrücken (DTMF); das Gather-Verb von Twilio nutzt standardmäßig DTMF und muss auf Spracheingabe eingestellt werden, um Anrufer zu transkribieren.",
      "Die bidirektionalen Media Streams von Twilio übertragen das Anrufaudio als einkanaliges mu-law mit 8 kHz, base64-kodiert über einen WebSocket.",
      "Zendesk lässt einen externen Voice-KI-Agenten Anrufe zuerst annehmen und über eine SIP-IN-Leitung an einen Live-Agenten eskalieren.",
      "Die FCC-Entscheidung vom Februar 2024 behandelt KI-generierte Stimmen nach dem TCPA als „künstlich“, sodass Anrufe damit in der Regel eine vorherige ausdrückliche Einwilligung erfordern.",
    ],
    sections: [
      {
        heading: "So funktioniert ein Voicebot für eingehende Anrufe",
        blocks: [
          {
            type: "p",
            text: "Jeder Voicebot für eingehende Anrufe durchläuft dieselbe Schleife, ganz gleich, welche Anbieter Sie einsetzen:",
          },
          {
            type: "ol",
            items: [
              "Telefonie. Der Anruf geht bei einer Telefonnummer oder einem SIP-Trunk ein, und der Telefonieanbieter übergibt ihn an Ihre Anwendung – entweder indem er Anrufanweisungen von Ihrem Server abruft oder indem er das Audio dorthin streamt.",
              "Speech-to-Text. Die Worte des Anrufers werden transkribiert. Ist das Gather-Verb von Twilio auf Spracheingabe eingestellt, sendet Twilio die Transkription (SpeechResult) zusammen mit einem Confidence-Wert an Ihre Action-URL.",
              "Verstehen und Logik. Ein Sprachmodell oder ein regelbasierter Dialog entscheidet, was der Anrufer möchte und was als Nächstes passiert: antworten, nachfragen, etwas per API nachschlagen oder weiterleiten.",
              "Text-to-Speech. Die Antwort wird als Audio synthetisiert und dem Anrufer vorgespielt.",
              "Wiederholen oder übergeben. Die Schleife läuft weiter, bis das Anliegen erledigt ist oder der Anruf weitergeleitet wird, und das Ergebnis wird in Ihrem Helpdesk protokolliert.",
            ],
          },
          {
            type: "p",
            text: "Für die Umsetzung gibt es zwei Hauptwege. In einem rundenbasierten Setup erfasst die Plattform jeweils eine Äußerung, und Ihr Server antwortet mit neuen Anweisungen; Twilio setzt den Anruf zum Beispiel mit dem TwiML fort, das Ihre Action-URL zurückgibt. In einem Streaming-Setup fließt das Audio kontinuierlich über einen WebSocket: Die bidirektionalen Media Streams von Twilio, gestartet mit den TwiML-Anweisungen Connect und Stream, liefern base64-kodiertes mu-law-Audio mit 8.000 Hz auf einem einzigen Kanal, und Ihr Server sendet Audio im selben Format zurück.",
          },
          {
            type: "p",
            text: "Dazwischen gibt es verwaltete Schichten. ConversationRelay von Twilio etwa übernimmt Speech-to-Text und Text-to-Speech selbst und tauscht über einen sicheren WebSocket Text mit Ihrem Server aus, sodass Ihr Code mit Wörtern statt mit Roh-Audio arbeitet. Es bietet außerdem Einstellungen für Unterbrechungen, denn Anrufer fallen Bots ins Wort; in einem reinen Media-Streams-Setup sendet Ihr Server eine „clear“-Nachricht, um gepuffertes, noch nicht abgespieltes Audio zu verwerfen.",
          },
        ],
      },
      {
        heading: "IVR vs. dialogfähiger Voicebot",
        blocks: [
          {
            type: "table",
            caption: "Ein IVR-Menü im Vergleich mit einem dialogfähigen Voicebot",
            head: ["", "Klassisches IVR", "Dialogfähiger Voicebot"],
            rows: [
              ["Eingabe des Anrufers", "Tastendrücke (DTMF) in einem festen Menü", "Natürliche Sprache, transkribiert und interpretiert"],
              [
                "Struktur",
                "Menübaum: „Drücken Sie 1 für Rechnungen, 2 für Bestellungen“",
                "Offene Frage wie „Wie kann ich helfen?“, gefolgt von Intent-Erkennung",
              ],
              [
                "Gut geeignet für",
                "Eine kleine Zahl vorhersehbarer Routing-Optionen",
                "Viele unterschiedliche Anliegen und das Erfassen von Angaben in den eigenen Worten des Anrufers",
              ],
              [
                "Schwachstellen",
                "Lange Menüs und Anrufer, deren Anliegen zu keiner Option passt",
                "Verhörer bei rauschenden Leitungen; braucht Bestätigungsschritte und Fallbacks",
              ],
              [
                "Was Sie erfahren",
                "Welchen Menüpfad der Anrufer gewählt hat",
                "Ein Transkript, den erkannten Intent und alle erfassten Felder",
              ],
            ],
          },
          {
            type: "p",
            text: "Sie müssen sich nicht für eines von beiden entscheiden. Eine Möglichkeit ist ein kurzes Tastenmenü zur Sprachauswahl, gefolgt von einem dialogbasierten Schritt. Beim Gather-Verb von Twilio lässt sich die Eingabe so einstellen, dass in derselben Abfrage sowohl Tastendrücke als auch Sprache akzeptiert werden.",
          },
        ],
      },
      {
        heading: "Den Anruf an einen Menschen übergeben",
        blocks: [
          {
            type: "p",
            text: "Telefonieplattformen unterscheiden zwei Arten der Weiterleitung. In der Terminologie von Twilio fügt ein Cold Transfer den neuen Teilnehmer zum Anruf hinzu, der Initiator steigt aber aus, bevor der neue Teilnehmer abnimmt; bei einem Warm Transfer können alle drei miteinander sprechen, bevor der Initiator den Anruf verlässt. Twilio empfiehlt, Anrufe zwischen Kunden und Agenten über eine Konferenz zu verbinden – erst das macht beide Varianten möglich.",
          },
          {
            type: "p",
            text: "Für einen Bot besteht die sinnvolle Form des Warm Transfers darin, Kontext zu übergeben statt zu sprechen: Erstellen oder aktualisieren Sie ein Ticket mit Transkript, erkanntem Intent und erfassten Angaben, bevor der Agent abnimmt, damit er nicht bei null anfängt. Gute Zeitpunkte für eine Weiterleitung:",
          },
          {
            type: "ul",
            items: [
              "Der Anrufer möchte einen Menschen sprechen – kommen Sie dem sofort nach, nicht erst nach zwei weiteren Fragen.",
              "Der Bot hat den Anrufer zweimal hintereinander missverstanden.",
              "Das Anliegen betrifft Zahlungen, Beschwerden oder etwas, das der Bot nicht entscheiden darf.",
              "Der Anrufer ist ein bekannter Kunde mit hoher Priorität, sofern Ihr Routing solche Kunden unterscheidet.",
            ],
          },
          {
            type: "p",
            text: "In Zendesk kann ein externer Voice-KI-Agent einen Anruf zuerst annehmen und über eine SIP-IN-Leitung an einen Zendesk-Agenten eskalieren. Der Bot kann ein Ticket erstellen und es mit dem Anruf verknüpfen, indem er die Ticketnummer im SIP-Header X-Zendesk-Ticket-Id übergibt; Zendesk authentifiziert SIP-IN-Anrufe über IP-Zugriffskontrolllisten. Zendesk bietet außerdem eigene Voice-KI-Agenten an, die bei einer Eskalation das Transkript, eine KI-generierte Zusammenfassung und den erkannten Intent zum Ticket hinzufügen.",
          },
        ],
      },
      {
        heading: "Regulierung: Was für Voicebots gilt",
        blocks: [
          {
            type: "p",
            text: "Vereinigte Staaten. Im Februar 2024 hat die FCC ein Declaratory Ruling (FCC 24-17) erlassen, das bestätigt: Die Beschränkungen des TCPA für Anrufe mit einer „künstlichen oder vorab aufgezeichneten Stimme“ („artificial or prerecorded voice“) erfassen auch aktuelle KI-Technologien, die menschliche Stimmen erzeugen. Anrufe damit erfordern daher in der Regel die vorherige ausdrückliche Einwilligung des Angerufenen, sofern kein Notfallzweck vorliegt und keine Ausnahme greift. Die Entscheidung betrifft Anrufe an Verbraucher, etwa Robocalls. Ein Bot, der Anrufe entgegennimmt, die Ihre Kunden bei Ihnen tätigen, ist eine andere Situation, aber alle ausgehenden Anrufe des Bots – Rückrufe, Erinnerungen, Umfragen – fallen unter diese Regeln.",
          },
          {
            type: "p",
            text: "Europäische Union. Artikel 50 der KI-Verordnung gilt ab dem 2. August 2026 und verlangt, dass KI-Systeme, die direkt mit Menschen interagieren, so gestaltet sind, dass diese Menschen wissen, dass sie es mit einer KI zu tun haben, sofern das nicht offensichtlich ist. Laut den FAQ der Kommission müssen Menschen ab Beginn der ersten Interaktion informiert werden. Für einen Voicebot ist die praktische Lösung ein kurzer Hinweis in der Begrüßung.",
          },
          {
            type: "note",
            text: "Dies sind allgemeine Informationen, keine Rechtsberatung. Wenn Ihr Bot ausgehende Anrufe tätigt oder Sie in einer regulierten Branche tätig sind, prüfen Sie die für Sie geltenden Regeln.",
          },
        ],
      },
      {
        heading: "Designentscheidungen, an denen ein Voicebot steht oder fällt",
        blocks: [
          {
            type: "ul",
            items: [
              "Legen Sie in einem Satz offen, worum es sich handelt, und setzen Sie Erwartungen: Es ist ein automatisierter Assistent, und dabei kann er helfen.",
              "Halten Sie Ansagen kurz und fragen Sie immer nur eine Sache ab; Anrufer können nicht zurückscrollen.",
              "Lassen Sie Nummern, E-Mail-Adressen und Bestell-IDs wiederholen und bestätigen, bevor der Bot damit arbeitet.",
              "Sagen Sie Anrufern, wie sie einen Menschen erreichen, und sorgen Sie dafür, dass dieser Weg bei jedem Schritt funktioniert.",
              "Protokollieren Sie jeden Anruf mit Transkript und Ergebnis in Ihrem Helpdesk, damit Sie sehen, weshalb Menschen tatsächlich anrufen.",
              "Planen Sie für die Zeit außerhalb der Geschäftszeiten: Nehmen Sie die Angaben auf, erstellen Sie ein Ticket und versprechen Sie nur einen Rückruf, den auch wirklich jemand tätigt.",
            ],
          },
        ],
      },
      {
        heading: "Wie TascaLab Voicebots baut",
        blocks: [
          {
            type: "p",
            text: "Das Paket „Voice Bot“ von TascaLab umfasst eingehende Anrufe, Triage und Übergabe an Ihr Team zum einmaligen Preis von {{price:voice}}. Der Bot wird über APIs und Webhooks an die Tools angebunden, die Sie bereits nutzen – Zendesk, Freshdesk, Jira, Slack oder interne Systeme –, sodass Anrufergebnisse als Tickets oder Nachrichten ankommen, die Ihr Team ohnehin im Blick hat. Er ist als Filter vor Ihrem Team konzipiert, nicht als Ersatz dafür.",
          },
          {
            type: "p",
            text: "Die meisten Setups dauern 1–3 Wochen. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen einem IVR und einem KI-Voicebot?",
        a: "Ein IVR führt Anrufer durch ein festes Menü, meist per Tastendruck (DTMF). Ein dialogfähiger Voicebot transkribiert, was der Anrufer sagt, ermittelt den Intent und kann antworten, Angaben erfassen oder den Anruf weiterleiten.",
      },
      {
        q: "Kann ein Voicebot Anrufe an einen Live-Agenten weiterleiten?",
        a: "Ja. Telefonieplattformen unterstützen Cold Transfers, bei denen der Bot aussteigt, bevor der Agent abnimmt, und Warm Transfers, bei denen die Teilnehmer gleichzeitig im Anruf sind. In Zendesk kann ein externer Voice-KI-Agent über eine SIP-IN-Leitung an einen Live-Agenten eskalieren.",
      },
      {
        q: "Verbietet die FCC KI-Voicebots?",
        a: "Nein. Laut ihrer Entscheidung vom Februar 2024 gelten KI-generierte Stimmen nach dem TCPA als „künstlich“, sodass Anrufe damit in der Regel die vorherige ausdrückliche Einwilligung des Angerufenen erfordern. Die Entscheidung betrifft Anrufe an Verbraucher und ist daher vor allem relevant, wenn Ihr Bot ausgehende Anrufe tätigt.",
      },
      {
        q: "Muss ich Anrufern sagen, dass sie mit einem Bot sprechen?",
        a: "In der EU verlangt Artikel 50 der KI-Verordnung ab dem 2. August 2026, dass Menschen informiert werden, wenn sie direkt mit einem KI-System interagieren, sofern das nicht offensichtlich ist. Ein kurzer Hinweis in einem Satz in der Begrüßung ist der einfachste Weg, das umzusetzen.",
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
    slug: "ticket-routing-automatisieren",
    category: "services",
    navLabel: "Ticket-Routing automatisieren",
    primaryKeyword: "Ticket-Routing automatisieren",
    title: "Ticket-Routing automatisieren: Methoden & Setup | TascaLab",
    description:
      "Ticket-Routing automatisieren: regelbasiertes, Round-Robin-, lastbasiertes und skillbasiertes Routing, KI-Triage und wie Zendesk, Freshdesk und Jira es lösen.",
    h1: "Ticket-Routing automatisieren: Methoden, Tools und Einrichtung",
    intro:
      "Automatisiertes Ticket-Routing weist jedes eingehende Ticket der richtigen Gruppe oder dem richtigen Agenten zu, ohne dass jemand die Queue von Hand sortiert. Dabei geht es um zwei Entscheidungen – worum es im Ticket geht (Thema, Sprache, Priorität, Kunde) und wer es bearbeiten soll –, getroffen mit Methoden wie Regeln, Round-Robin, lastbasiertem oder skillbasiertem Routing. Zendesk, Freshdesk und Jira Service Management unterstützen das alle nativ.",
    keyFacts: [
      "Das Omnichannel-Routing von Zendesk weist standardmäßig dem Agenten mit der meisten freien Kapazität zu; Round Robin ist die alternative Methode.",
      "Die Omniroute-Engine von Freshdesk steuert die Round-Robin-, lastbasierte und skillbasierte Ticketzuweisung.",
      "Die Zuweisungsaktion der Jira-Automatisierung kann Arbeit nach ausgeglichener Auslastung, per Round-Robin oder per Zufallsauswahl verteilen.",
      "Die intelligente Triage von Zendesk klassifiziert neue Tickets nach Intent, Stimmung, Sprache und Entitäten, und Trigger können anhand der Ergebnisse routen.",
    ],
    sections: [
      {
        heading: "Zwei Schritte: erst kategorisieren, dann zuweisen",
        blocks: [
          {
            type: "p",
            text: "Routing scheitert meist am ersten Schritt. Kommen Tickets ohne verlässliche Kategorie an, schickt selbst eine gute Zuweisungsmethode sie an die falschen Leute. Behandeln Sie Routing daher als zwei getrennte Entscheidungen: Was ist das für ein Ticket, und wer soll es bearbeiten – zuerst die Gruppe, dann der Agent. Signale, mit denen Sie ein Ticket kategorisieren können:",
          },
          {
            type: "ul",
            items: [
              "Eingangskanal: über welche E-Mail-Adresse, welches Webformular, welche Telefonleitung oder welches Chat-Widget das Ticket kam.",
              "Formularfelder: ein Anfragetyp oder eine Dropdown-Option, die der Kunde ausgewählt hat.",
              "Daten zum Anfragenden: die Organisation, der Tarif oder ein VIP-Tag am Benutzer.",
              "Inhalt: Schlüsselwörter in Betreff oder Beschreibung oder eine KI-Klassifizierung von Intent, Sprache und Stimmung.",
            ],
          },
          {
            type: "p",
            text: "KI-Klassifizierung ist inzwischen in die großen Helpdesks integriert. Die intelligente Triage von Zendesk klassifiziert neue Tickets anhand des Betreffs und des ersten öffentlichen Kommentars nach Intent, Stimmung, Sprache und Entitäten und speichert die Ergebnisse als Ticketfelder, die Trigger, Ansichten und Routing nutzen können. Behandeln Sie sie wie jedes andere Signal: Prüfen Sie eine Stichprobe ihrer Klassifizierungen, bevor Sie danach routen.",
          },
        ],
      },
      {
        heading: "Routing-Methoden im Vergleich",
        blocks: [
          {
            type: "table",
            caption: "Gängige Methoden für das Ticket-Routing",
            head: ["Methode", "Wie der Bearbeiter ausgewählt wird", "Passt gut zu", "Worauf Sie achten sollten"],
            rows: [
              [
                "Regelbasiert",
                "Wenn-dann-Bedingungen zu Kanal, Formular, Schlüsselwörtern oder Anfragendem legen Gruppe, Agent oder Priorität fest",
                "Stabile Kategorien, VIP-Behandlung, Sprach-Queues",
                "Überlappende Regeln und Regelreihenfolge; Regeln veralten, wenn sich Produkte ändern",
              ],
              [
                "Round-Robin",
                "Der nächste verfügbare Agent in der Reihe",
                "Ähnliche Tickets, bearbeitet von ähnlich qualifizierten Agenten",
                "Ignoriert die Komplexität von Tickets, sofern nicht mit Kapazitätsgrenzen kombiniert",
              ],
              [
                "Lastbasiert",
                "Der Agent mit der meisten freien Kapazität oder den wenigsten offenen Tickets",
                "Unterschiedlich lange Tickets; Überlastung vermeiden",
                "Hängt von korrektem Agentenstatus und sinnvollen Grenzen ab",
              ],
              [
                "Skillbasiert",
                "Ein Agent, dessen Skills zu den Merkmalen des Tickets passen, etwa Sprache oder Produkt",
                "Spezialisierte und mehrsprachige Teams",
                "Tickets, die zu keinem Skill passen, können liegen bleiben; Sie brauchen einen Fallback",
              ],
              [
                "KI-gestützte Triage",
                "Ein Modell sagt Kategorie, Priorität oder Gruppe voraus, dann weist eine der obigen Methoden zu",
                "Große Mengen an Freitext-Tickets",
                "Fehlklassifizierungen; prüfen Sie regelmäßig Stichproben",
              ],
            ],
          },
          {
            type: "p",
            text: "In der Praxis werden diese Methoden kombiniert: Regeln oder KI bestimmen die Gruppe, und Round-Robin-, lastbasierte oder skillbasierte Zuweisung wählt darin den Agenten aus.",
          },
        ],
      },
      {
        heading: "So machen es Zendesk, Freshdesk und Jira Service Management",
        blocks: [
          {
            type: "table",
            caption: "Native Routing-Optionen nach Helpdesk",
            head: ["Helpdesk", "Regelbasierte Ebene", "Automatische Zuweisung an Agenten"],
            rows: [
              [
                "Zendesk",
                "Trigger prüfen Bedingungen wie Kanal, Organisation oder Tags und setzen „Group“ oder „Assignee“",
                "Omnichannel-Routing nutzt Agentenstatus, Kapazität und Skills; der Standard bevorzugt die meiste freie Kapazität, Round Robin ist die Alternative",
              ],
              [
                "Freshdesk",
                "Automatisierungsregeln bei Ticketerstellung prüfen Anfragenden, Betreff, Beschreibung, Tags, Quelle oder Formular und weisen eine Gruppe oder einen Agenten zu",
                "Omniroute unterstützt Round-Robin-, lastbasierte und skillbasierte Zuweisung",
              ],
              [
                "Jira Service Management",
                "Automatisierungsregeln aus Triggern, Bedingungen und Aktionen",
                "Die Zuweisungsaktion verteilt Arbeit nach ausgeglichener Auslastung, per Round-Robin oder per Zufallsauswahl",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. Omnichannel-Routing schickt Arbeit nur an Agenten, deren Status sie für den jeweiligen Kanal berechtigt, und Kapazitätsregeln begrenzen, wie viele Tickets pro Kanal ein Agent gleichzeitig hält. Skills lassen sich als erforderlich oder optional markieren: Optionale Skills entfallen nach einem Skills-Timeout, damit das Ticket einen größeren Kreis von Agenten erreicht, während erforderliche Skills nie ablaufen. Die Reihenfolge in der Queue richtet sich je nach Tarif und Konfiguration nach Ticketalter, Priorität oder der am nächsten bevorstehenden SLA-Verletzung.",
          },
          {
            type: "p",
            text: "Freshdesk. Standardmäßig enden Regeln bei Ticketerstellung bei der ersten aktivierten Regel, deren Bedingungen zutreffen; stellen Sie spezifische Regeln daher über allgemeine. Sie können auch umstellen, sodass alle zutreffenden Regeln ausgeführt werden. Freshdesk rät, vor einem Agenten eine Gruppe zuzuweisen, da die Zuweisung eines Agenten ohne Gruppe dazu führen kann, dass das Ticket unzugewiesen bleibt. Bei skillbasierter Zuweisung bleibt ein Ticket, das zu keinem Skill passt, unzugewiesen, bis es jemand zuweist; legen Sie daher einen Fallback-Skill mit der Gruppe als Bedingung an. Bei Round-Robin überspringt Omniroute Agenten, die ihr Limit erreicht haben, und gibt das nächste Ticket dem Agenten, dessen letzte Zuweisung am längsten zurückliegt.",
          },
          {
            type: "p",
            text: "Jira Service Management. Routing wird mit Automatisierungsregeln umgesetzt: ein Trigger wie ein neues Arbeitselement, Bedingungen zum Anfragetyp oder zu Feldern und Aktionen wie die Zuweisung. Bei der Methode der ausgeglichenen Auslastung erhält jede Person einen gleichen Anteil an Arbeitselementen innerhalb eines Bereichs, den Sie per JQL festlegen; ohne JQL-Einschränkung zählt die Regel die zugewiesenen Elemente im gesamten Projekt. Round-Robin geht die aufgeführten Personen der Reihe nach durch.",
          },
        ],
      },
      {
        heading: "Routing einrichten, das sich im Alltag bewährt",
        blocks: [
          {
            type: "ol",
            items: [
              "Sehen Sie sich die Tickets der letzten Wochen an: Listen Sie die Hauptkategorien auf und notieren Sie, wer die jeweiligen Tickets tatsächlich gelöst hat.",
              "Definieren Sie Gruppen vor Agenten. Routen Sie zuerst an das richtige Team; die Auswahl des Agenten ist ein zweiter Schritt.",
              "Nutzen Sie zuerst Ihre verlässlichsten Signale – Eingangskanäle und Formularfelder – und ergänzen Sie für den Rest Schlüsselwort- oder KI-Klassifizierung.",
              "Wählen Sie pro Gruppe eine Zuweisungsmethode: Round-Robin für gleichartige Arbeit, lastbasiert bei unterschiedlichem Aufwand pro Ticket, Skills, wo Fachwissen zählt.",
              "Richten Sie einen Fallback ein, damit nichts unzugewiesen liegen bleibt: eine Auffangregel, einen Fallback-Skill oder eine Triage-Queue mit einer verantwortlichen Person.",
              "Taggen Sie Routing-Entscheidungen, damit Sie darüber berichten können, und prüfen Sie falsch geroutete Tickets jeden Monat.",
            ],
          },
          {
            type: "note",
            text: "Routing bestimmt, wer ein Ticket zuerst sieht, und beeinflusst damit Ihre Antwortzeiten. Prüfen Sie nach jeder Routing-Änderung ein paar Wochen lang Ihre SLA-Berichte.",
          },
        ],
      },
      {
        heading: "Wie TascaLab Ticket-Routing einrichtet",
        blocks: [
          {
            type: "p",
            text: "Der Service „Ticket Routing & Categorization“ von TascaLab ({{price:routing}} einmalig) setzt auf dem Helpdesk auf, den Sie bereits haben – Zendesk, Freshdesk oder Jira. Er nutzt dessen native Regeln, wo sie ausreichen, und APIs, Webhooks oder Make/n8n, wo nicht, etwa um Tickets zu kategorisieren, bevor Ihr natives Routing sie zuweist. Ein Plattformwechsel ist nicht nötig.",
          },
          {
            type: "p",
            text: "Die meisten Setups dauern 1–3 Wochen. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und ein kostenloses 30-minütiges Health-Check-Gespräch ist ein guter Rahmen, um Ihre aktuelle Queue zu erfassen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Round-Robin und lastbasiertem Routing?",
        a: "Bei Round-Robin geht das nächste Ticket an den nächsten Agenten in der Reihe. Lastbasiertes Routing gibt es dem Agenten mit der meisten freien Kapazität oder den wenigsten offenen Tickets – das passt zu Teams, deren Tickets sich im Aufwand stark unterscheiden.",
      },
      {
        q: "Was passiert mit Tickets, die zu keiner Routing-Regel und keinem Skill passen?",
        a: "Das hängt vom Tool ab. Bei der skillbasierten Zuweisung in Freshdesk bleibt ein nicht zugeordnetes Ticket unzugewiesen, bis es jemand zuweist; Freshdesk empfiehlt deshalb einen Fallback-Skill. In Zendesk entfallen optionale Skills nach einem Timeout, während erforderliche Skills nie ablaufen.",
      },
      {
        q: "Kann KI Tickets vor dem Routing kategorisieren?",
        a: "Ja. Die intelligente Triage von Zendesk etwa klassifiziert Tickets nach Intent, Stimmung und Sprache, und Trigger können anhand dieser Felder routen. Sie können Tickets auch mit einem externen Modell klassifizieren und das Ergebnis per API in ein Ticketfeld schreiben.",
      },
      {
        q: "Muss ich den Helpdesk wechseln, um das Routing zu automatisieren?",
        a: "Nein. Zendesk, Freshdesk und Jira Service Management bringen alle native Routing- und Zuweisungsfunktionen mit, und eigene Logik lässt sich über deren APIs und Webhooks ergänzen.",
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
    slug: "support-reporting-automatisieren",
    category: "services",
    navLabel: "Automatisiertes Support-Reporting",
    primaryKeyword: "Support-Reporting automatisieren",
    title: "Support-Reporting automatisieren: Leitfaden | TascaLab",
    description:
      "Support-Reporting automatisieren: welche Kennzahlen zählen und wie Sie Berichte aus Zendesk, Freshdesk oder Jira per E-Mail, Slack oder Google Sheets planen.",
    h1: "Automatisiertes Reporting im Kundensupport: Kennzahlen, Zeitpläne und Zustellung",
    intro:
      "Automatisiertes Reporting im Kundensupport bringt Ihre wichtigsten Zahlen – Ticketvolumen, Antwort- und Lösungszeiten, SLA-Erfüllung, Rückstand – nach Zeitplan zu den richtigen Personen, ohne dass jemand Daten von Hand exportiert. Beginnen Sie mit den integrierten geplanten Berichten Ihres Helpdesks; wenn diese nicht passen, holen Sie die Daten per API in Google Sheets, Slack oder E-Mail.",
    keyFacts: [
      "Zendesk Explore kann ein freigegebenes Dashboard nach einem wiederkehrenden Zeitplan per E-Mail versenden, der bis zu 12 Monate im Voraus festgelegt werden kann.",
      "In Freshdesk Analytics lassen sich benutzerdefinierte Berichte planen; kuratierte Berichte müssen zuerst geklont werden.",
      "Jira-Filterabonnements versenden die Ergebnisse gespeicherter Suchen nach Zeitplan per E-Mail, auch mit Cron-basierter Zeitsteuerung; es werden nur die ersten 200 Ergebnisse gesendet.",
      "Ein Slack Incoming Webhook postet aus einem einfachen JSON-Payload eine Nachricht in einen Channel.",
    ],
    sections: [
      {
        heading: "Worüber Support-Teams üblicherweise berichten",
        blocks: [
          {
            type: "p",
            text: "Ein nützlicher Support-Bericht beantwortet drei Fragen: Kommen wir hinterher, sind wir schnell genug, und sind die Kunden zufrieden? Diese Kennzahlen decken das meiste davon ab:",
          },
          {
            type: "table",
            caption: "Gängige Kennzahlen für das Reporting im Kundensupport",
            head: ["Kennzahl", "Was sie misst", "Nützlich für"],
            rows: [
              [
                "Erstellte, gelöste und offene Tickets",
                "Volumen und ob der Rückstand wächst",
                "Tägliche Abstimmungen, Personalentscheidungen",
              ],
              [
                "Erste Antwortzeit",
                "Zeit von der Ticketerstellung bis zur ersten öffentlichen Antwort eines Agenten (Definition von Zendesk)",
                "Reaktionsfähigkeit, SLA-Tracking",
              ],
              [
                "Erste und vollständige Lösungszeit",
                "Zeit bis zur ersten vs. zur letzten Lösung; beide unterscheiden sich, wenn Tickets wieder geöffnet werden",
                "Prozessqualität, Probleme mit wieder geöffneten Tickets erkennen",
              ],
              [
                "SLA-Erfüllung",
                "Anteil der Tickets, die die Ziele für Erstreaktion oder Lösung erreicht haben",
                "Warnmeldungen und Wochenübersichten",
              ],
              [
                "One-Touch-Lösung",
                "Tickets, die mit einer einzigen Agentenantwort gelöst wurden",
                "Herausfinden, was sich automatisieren oder dokumentieren ließe",
              ],
              [
                "Kundenzufriedenheit (CSAT)",
                "Umfrageantworten nach der Lösung eines Tickets",
                "Wöchentliche oder monatliche Trends",
              ],
              [
                "Bot-Übergabequote",
                "Anteil der Bot-Gespräche, die an einen Menschen übergeben werden, falls Sie einen Bot einsetzen",
                "Feinabstimmung des Bots und seiner Wissensbasis",
              ],
            ],
          },
          {
            type: "p",
            text: "Definitionen sind wichtiger als das Dashboard. Legen Sie fest, ob Sie Mediane oder Durchschnitte berichten, Geschäftszeiten oder Kalenderstunden, und welche Tickets zählen (zusammengeführte, Spam, nur vom Bot bearbeitete). Halten Sie die Definitionen schriftlich fest und ändern Sie sie nicht, sonst verlieren Vergleiche von Woche zu Woche ihre Aussagekraft.",
          },
        ],
      },
      {
        heading: "Geplante Berichte, die Ihr Helpdesk bereits bietet",
        blocks: [
          {
            type: "table",
            caption: "Native Optionen für geplante Berichte",
            head: ["Tool", "So funktioniert die Planung", "Was Empfänger erhalten", "Wichtige Grenzen"],
            rows: [
              [
                "Zendesk Explore",
                "Auf einem freigegebenen Dashboard über „Share > Schedule delivery“; Uhrzeit, Wiederholung und ein Enddatum bis zu 12 Monate im Voraus festlegen",
                "Eine E-Mail mit dem Dashboard-Export; Formate sind u. a. Excel (eine Datei pro Tab) und PNG",
                "Exporte über 25 MB kommen auf mehrere E-Mails verteilt an; die Zustellung kann sich gegenüber dem geplanten Zeitpunkt verzögern",
              ],
              [
                "Freshdesk Analytics",
                "Einen benutzerdefinierten Bericht planen; einen kuratierten Bericht zuerst klonen, wenn Sie ihn planen möchten",
                "Den Bericht als PDF oder einzelne Widgets als PDF oder CSV",
                "Widgets aus kuratierten Berichten lassen sich nicht planen",
              ],
              [
                "Jira-Filterabonnements",
                "Einen Benutzer oder eine Gruppe für einen gespeicherten Filter abonnieren, mit einem vordefinierten Zeitplan oder einem Cron-Ausdruck",
                "Eine E-Mail mit den Arbeitselementen, die zum Filter passen",
                "Es werden nur die ersten 200 Ergebnisse gesendet; die Ergebnisse werden pro Empfänger ausgewertet",
              ],
              [
                "Jira-Automatisierung",
                "Eine geplante Regel sucht Arbeitselemente per JQL und versendet die Liste",
                "Eine E-Mail oder eine Slack-Nachricht",
                "Für die Zustellung in Slack ist ein Slack Incoming Webhook nötig",
              ],
            ],
          },
          {
            type: "p",
            text: "Zwei Zendesk-Details sorgen oft für Probleme: Empfänger werden nach Sprache und Zeitzone gruppiert, wobei jede Gruppe eine E-Mail erhält, und wenn ein Dashboard den gesamten Vortag abdecken soll, empfiehlt Zendesk, es für 2 Uhr nachts oder später zu planen.",
          },
          {
            type: "p",
            text: "Native Planung ist der richtige erste Schritt. Sie stößt an Grenzen, wenn Sie Daten aus mehreren Tools an einem Ort brauchen, eine kurze Zusammenfassung statt eines vollständigen Dashboards, eigene Berechnungen oder die Zustellung in Slack aus einem Tool, das sie nicht anbietet.",
          },
        ],
      },
      {
        heading: "Daten per API in Sheets, Slack oder E-Mail holen",
        blocks: [
          {
            type: "p",
            text: "Wenn die integrierten Berichte nicht passen, erledigt eine kleine Pipeline die Arbeit. Die Schritte sind dieselben, ob Sie ein Skript oder ein Automatisierungstool wie Make oder n8n verwenden:",
          },
          {
            type: "ol",
            items: [
              "Planen. Ein zeitgesteuerter Trigger startet den Workflow täglich, wöchentlich oder in dem Intervall, das Sie brauchen.",
              "Extrahieren. Der Workflow ruft über die Helpdesk-API die Tickets ab, die sich seit dem letzten Lauf geändert haben. Die Incremental Exports API von Zendesk ist genau dafür gemacht: Sie liefert Tickets, die seit einem bestimmten Startzeitpunkt aktualisiert wurden, und Zendesk empfiehlt die Cursor-basierte Variante für eine gleichmäßigere Performance.",
              "Berechnen. Berechnen Sie die Kennzahlen anhand Ihrer schriftlichen Definitionen und vergleichen Sie sie mit der Vorperiode oder Ihren Zielen.",
              "Speichern. Hängen Sie pro Tag oder Woche eine Zeile in Google Sheets an. Die Methode spreadsheets.values.append der Sheets API findet die Tabelle im übergebenen Bereich und fügt die neuen Zeilen nach deren letzter Zeile ein – so entsteht ein fortlaufender Verlauf für Diagramme.",
              "Zustellen. Posten Sie eine kurze Zusammenfassung über einen Incoming Webhook in Slack – eine eindeutige URL, die einen JSON-Payload mit dem Nachrichtentext und optionalen Block-Kit-Blöcken annimmt – oder versenden Sie sie per E-Mail mit einem Link zum vollständigen Sheet oder Dashboard.",
            ],
          },
          {
            type: "note",
            text: "Behandeln Sie API-Tokens und Webhook-URLs als Geheimnisse. Bewahren Sie sie im Credential-Speicher Ihres Automatisierungstools auf, nicht im Sheet oder in der Nachrichtenvorlage.",
          },
        ],
      },
      {
        heading: "Berichte, die tatsächlich gelesen werden",
        blocks: [
          {
            type: "ul",
            items: [
              "Beginnen Sie mit einer Handvoll Zahlen und der Veränderung gegenüber der Vorperiode; verlinken Sie die Details, statt sie anzuhängen.",
              "Trennen Sie Warnmeldungen von Berichten. Eine Wochenübersicht ist für Trends da; ein SLA-Risiko verdient eine eigene Nachricht, sobald es auftritt. Die Dokumentation von Atlassian zeigt zum Beispiel eine geplante Jira-Automatisierungsregel, die Arbeitselemente, deren SLA kurz vor der Verletzung steht, in Slack postet.",
              "Schicken Sie jeder Zielgruppe das, worauf sie reagieren muss: Agenten brauchen die heutige Queue, Manager die Wochentrends.",
              "Geben Sie jeder Kennzahl eine verantwortliche Person, die ungewöhnliche Ausschläge erklären kann.",
              "Prüfen Sie den Bericht nach einem Monat und streichen Sie alles, was niemand genutzt hat.",
            ],
          },
          {
            type: "p",
            text: "Eine Wochenübersicht für einen Team-Channel kann aus nur fünf Zeilen bestehen, die jeweils diese Woche mit der Vorwoche vergleichen:",
          },
          {
            type: "ol",
            items: [
              "Erstellte, gelöste und noch offene Tickets, mit der Veränderung des Rückstands.",
              "Median der ersten Antwortzeit im Vergleich zu Ihrem Ziel.",
              "Median der vollständigen Lösungszeit sowie die Zahl der wieder geöffneten Tickets.",
              "SLA-Erfüllung, mit Links zu den Tickets, bei denen das SLA verletzt wurde.",
              "CSAT der Woche und ein bemerkenswerter Kommentar, sofern Ihre Umfragen Kommentare erfassen.",
            ],
          },
        ],
      },
      {
        heading: "Wie TascaLab automatisierte Berichte einrichtet",
        blocks: [
          {
            type: "p",
            text: "Der Service „Automated Reports“ von TascaLab ({{price:reports}} einmalig) liefert Ihre Support-Kennzahlen nach Zeitplan per E-Mail oder in Slack. Er setzt über deren APIs und Make oder n8n auf Zendesk, Freshdesk, Jira und Ihren internen Tools auf, sodass sich an der täglichen Arbeitsweise Ihres Teams nichts ändert.",
          },
          {
            type: "p",
            text: "Die meisten Setups dauern 1–3 Wochen. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann Zendesk Berichte automatisch per E-Mail versenden?",
        a: "Ja. In Zendesk Explore können Sie die Zustellung eines freigegebenen Dashboards planen, Wiederholung und Empfänger wählen und den Zeitplan für bis zu 12 Monate laufen lassen.",
      },
      {
        q: "Kann ich in Freshdesk Berichte planen?",
        a: "Ja, für benutzerdefinierte Berichte in Freshdesk Analytics; kuratierte Berichte müssen Sie klonen, bevor Sie sie planen können. Berichte werden als PDF versendet, Widgets als PDF oder CSV.",
      },
      {
        q: "Wie sende ich Daten aus Jira Service Management nach Zeitplan an Slack?",
        a: "Nutzen Sie eine Jira-Automatisierungsregel mit einem geplanten Trigger, einer Suche nach Arbeitselementen per JQL und der Aktion „Send Slack message“, die über einen Slack Incoming Webhook postet.",
      },
      {
        q: "Welche Kennzahlen gehören in einen wöchentlichen Support-Bericht?",
        a: "Typischerweise Ticketvolumen und Rückstand, erste Antwortzeit, Lösungszeit, SLA-Erfüllung und Kundenzufriedenheit. Halten Sie die Definitionen konstant, damit der Trend von Woche zu Woche aussagekräftig ist.",
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
    slug: "e-mail-automatisierung-kundenservice",
    category: "services",
    navLabel: "Support-E-Mails automatisieren",
    primaryKeyword: "E-Mail-Automatisierung Kundenservice",
    title: "E-Mail-Automatisierung im Kundenservice: Setup | TascaLab",
    description:
      "E-Mail-Automatisierung im Kundenservice: Support-Adresse an Zendesk oder Freshdesk weiterleiten, SPF und DKIM einrichten, Mails bestätigen, routen, eskalieren.",
    h1: "E-Mail-Automatisierung im Kundenservice: vom Posteingang zum beantworteten Ticket",
    intro:
      "E-Mail-Automatisierung im Kundenservice macht aus jeder Nachricht an Ihre Support-Adresse ein Ticket, bestätigt den Eingang, leitet sie an das richtige Team weiter und beantwortet sie, wo das unbedenklich ist – während Menschen die Threads übernehmen, die Urteilsvermögen erfordern. Sie brauchen kein neues Postfach: Leiten Sie Ihre bestehende Adresse an Zendesk oder Freshdesk weiter, richten Sie Ihre Absenderdomain so ein, dass Antworten zugestellt werden, und ergänzen Sie dann Trigger, Klassifizierung und KI.",
    keyFacts: [
      "Jedes Zendesk-Konto hat eine System-Support-Adresse im Format support@yoursubdomain.zendesk.com.",
      "Zendesk empfiehlt die automatische Weiterleitung auf Ebene des Mailservers statt einer Weiterleitung aus einem E-Mail-Client.",
      "Freshdesk wandelt weitergeleitete E-Mails erst in Tickets um, wenn die Weiterleitungsregel eingerichtet ist; Gmail- und Microsoft-365-Postfächer lassen sich auch direkt verbinden.",
      "Wer in Zendesk die DKIM-Signatur aktiviert, bevor die CNAME-Einträge im DNS stehen, verursacht Zustellungsfehler.",
      "Die Legacy-Funktion „E-Mail-Autoreplies mit Artikeln“ von Zendesk steht ab dem 10. Dezember 2026 nicht mehr zur Verfügung.",
    ],
    sections: [
      {
        heading: "Schritt 1: Jede Support-E-Mail wird zum Ticket",
        blocks: [
          {
            type: "p",
            text: "Kunden schreiben weiter an die Adresse, die sie bereits kennen, etwa support@yourcompany.com. Im Hintergrund leitet dieses Postfach alles an Ihren Helpdesk weiter, der für jede Nachricht ein Ticket erstellt oder aktualisiert. Für den Kunden ändert sich nichts, und Ihr Team arbeitet nicht mehr aus einem gemeinsamen Postfach heraus.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Jedes Konto hat eine System-Support-Adresse, support@yoursubdomain.zendesk.com. Sie fügen Ihre eigene Adresse als Support-Adresse hinzu, richten bei Ihrem E-Mail-Anbieter die Weiterleitung ein und verifizieren sie anschließend. Zendesk empfiehlt die automatische Weiterleitung auf Serverebene, keine manuelle Weiterleitung und keine automatische Weiterleitung aus einem E-Mail-Client, und weist darauf hin, dass es nach der Korrektur einer fehlgeschlagenen Einrichtung bis zu 48 Stunden dauern kann, bis diese erkannt wird.",
              "Freshdesk. Fügen Sie die Adresse unter „Admin > Channels > Email > New Support Email“ hinzu. Mit dem Standard-Mailserver von Freshworks legen Sie in Ihrem Postfach eine Weiterleitungsregel an, die E-Mails an die von Freshdesk generierte Adresse sendet; erst wenn diese Regel existiert, werden E-Mails zu Tickets. Alternativ verbinden Sie ein Gmail- oder Microsoft-365-Postfach direkt per Anmeldung.",
            ],
          },
          {
            type: "p",
            text: "Verwenden Sie eine Adresse pro Zweck – zum Beispiel support@, billing@ und partners@ – statt einer einzigen Sammeladresse. Jede Adresse wird später zu einem kostenlosen Routing-Signal.",
          },
          {
            type: "note",
            text: "Testen Sie mit einer Nachricht von einer externen Adresse. Zendesk sperrt E-Mails, die von einer Ihrer eigenen Support-Adressen eingehen, weil dieses Muster Mail-Schleifen verursachen kann.",
          },
        ],
      },
      {
        heading: "Schritt 2: Sorgen Sie dafür, dass Ihre Antworten ankommen",
        blocks: [
          {
            type: "p",
            text: "Wenn der Helpdesk als support@yourcompany.com antwortet, sendet er im Namen Ihrer Domain, und empfangende Mailserver prüfen, ob er das darf. Den Nachweis erbringen Sie mit DNS-Einträgen: SPF listet die Dienste auf, die für Ihre Domain senden dürfen, und DKIM fügt jeder Nachricht eine Signatur hinzu. Das ist eine einmalige Aufgabe für die Person, die Ihr DNS verwaltet.",
          },
          {
            type: "table",
            caption: "Einrichtung der Absenderdomain in Zendesk und Freshdesk",
            head: ["Helpdesk", "Eintrag", "Was zu tun ist", "Worauf Sie achten sollten"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "include:mail.zendesk.com zum SPF-TXT-Eintrag Ihrer Domain hinzufügen",
                "Eine Domain kann nur einen SPF-Eintrag haben; wenn andere Dienste für Sie senden, fassen Sie sie in diesem einen Eintrag zusammen",
              ],
              [
                "Zendesk",
                "DKIM",
                "Für jede externe Domain die CNAME-Einträge aus der DKIM-Anleitung von Zendesk hinzufügen und dann im Admin Center die digitalen Signaturen aktivieren",
                "Wenn Sie die Signaturen aktivieren, bevor die CNAME-Einträge existieren, kommt es zu Zustellungsfehlern",
              ],
              [
                "Freshdesk",
                "DKIM",
                "Unter „Admin > Channels > Email > Advanced Settings > Configure DKIM“ die vier generierten CNAME-Einträge veröffentlichen und dann auf „Verify“ klicken",
                "Manche DNS-Anbieter, etwa GoDaddy, ergänzen Ihre Domain automatisch; geben Sie dann nur das Host-Präfix ein",
              ],
            ],
          },
          {
            type: "p",
            text: "Die Reihenfolge ist wichtig: erst die Einträge, dann das Aktivieren. Wenn ein anderes Team oder eine Agentur Ihr DNS verwaltet, schicken Sie die exakten Werte aus der Dokumentation oder der Admin-Oberfläche Ihres Helpdesks, statt sie abzutippen.",
          },
        ],
      },
      {
        heading: "Schritt 3: Bei Eingang bestätigen, sortieren und routen",
        blocks: [
          {
            type: "p",
            text: "Sobald E-Mails eingehen, laufen die ersten Automatisierungen in dem Moment, in dem ein Ticket erstellt wird. In Zendesk kommt die Bestätigungs-E-Mail von einem Standard-Trigger, „Notify requester and CCs of received request“. Bearbeiten Sie dessen Text so, dass er dem Kunden etwas Nützliches mitteilt:",
          },
          {
            type: "ul",
            items: [
              "Die Ticketreferenz, damit der Kunde sie angeben kann.",
              "Wann mit einer Antwort zu rechnen ist – aber nur, wenn Sie das einhalten können.",
              "Links zu Help-Center-Artikeln zu Ihren häufigsten Fragen.",
              "Was der Kunde für eine schnellere Hilfe mitschicken sollte, etwa eine Bestellnummer oder die E-Mail-Adresse des Kontos.",
            ],
          },
          {
            type: "p",
            text: "Als Nächstes kommt das Routing. Das einfachste Signal ist die Adresse, an die die E-Mail geschickt wurde. Der dokumentierte Workflow von Zendesk ist ein Trigger mit den Bedingungen „Ticket Is Created“ und „Ticket Received at Is“ mit Ihrer Billing-Adresse sowie einer Aktion, die die Gruppe festlegt – kombiniert mit einer Ansicht, die dieser Gruppe ihre Tickets zeigt.",
          },
          {
            type: "p",
            text: "Danach folgt das inhaltsbasierte Routing. Schlüsselwortregeln für die Betreffzeile funktionieren eine Weile und versagen dann, weil Kunden sich unterschiedlich ausdrücken. Ein Klassifizierungsschritt – ein KI-Modell oder ein Regelwerk, das über die Helpdesk-API läuft – liest Betreff und Text, schreibt Kategorie, Sprache und Dringlichkeit in Ticketfelder und extrahiert Angaben wie Bestellnummern, damit Agenten nicht danach suchen müssen. Ihre Trigger oder Automatisierungsregeln routen dann anhand dieser Felder.",
          },
          {
            type: "note",
            text: "Automatische Antworten können zwischen Systemen hin- und herspringen. Zendesk sperrt eingehende Nachrichten mit Autoresponder-Headern wie Auto-Submitted, Precedence oder X-Autoresponder, und wenn ein Absender in kurzer Zeit sehr viele E-Mails sendet, sperrt Zendesk diese und setzt die Adresse für eine Stunde auf die Blockliste. Prüfen Sie gesperrte Tickets regelmäßig, damit dort keine echte Kundennachricht liegen bleibt.",
          },
        ],
      },
      {
        heading: "Schritt 4: Einfache Anfragen automatisch beantworten, den Rest übernehmen Menschen",
        blocks: [
          {
            type: "p",
            text: "Viele Support-E-Mails stellen immer wieder dieselben Fragen. Zendesk hat das lange mit Autoreplies mit Artikeln gelöst: einer E-Mail, die bis zu drei Help-Center-Artikel empfiehlt und es dem Kunden ermöglicht, die Anfrage zu schließen. Diese Funktion hat am 31. Juli 2025 den Legacy-Status erhalten und steht ab dem 10. Dezember 2026 nicht mehr zur Verfügung. Der Ersatz von Zendesk sind KI-Agenten, die generative KI-Antworten in den Kanälen Messaging, E-Mail und Webformular liefern. Wenn Sie noch auf Autoreplies setzen, planen Sie den Umstieg jetzt.",
          },
          {
            type: "p",
            text: "Jede KI-Antwort ist nur so gut wie die Artikel, auf die sie zurückgreift. Bringen Sie also die Wissensdatenbank in Ordnung, bevor Sie automatische Antworten aktivieren. Legen Sie dann fest, wo die Automatisierung endet. Übergeben Sie den Thread an einen Menschen, wenn:",
          },
          {
            type: "ul",
            items: [
              "der Kunde nach einem Menschen fragt oder antwortet, dass die Antwort nicht geholfen hat.",
              "es um Abrechnung, Rückerstattungen, Rechtliches, Sicherheit oder eine Beschwerde geht.",
              "der Ton verärgert ist oder der Thread schon mehrfach hin und her ging.",
              "mehrere Personen in CC stehen oder die E-Mail Teil einer laufenden Kommunikation zu einem Kundenkonto ist.",
              "eine Antwort eine Änderung an einem Konto erfordern würde, das die Automatisierung nicht verifizieren kann.",
            ],
          },
          {
            type: "p",
            text: "Machen Sie die Übergabe sichtbar: Taggen Sie das Ticket, erhöhen Sie bei Bedarf die Priorität und halten Sie alles in einem Ticket, damit der Agent sieht, was der Kunde bereits erhalten hat.",
          },
        ],
      },
      {
        heading: "Wie TascaLab Support-E-Mails automatisiert",
        blocks: [
          {
            type: "p",
            text: "TascaLab richtet das auf dem Helpdesk ein, den Sie bereits nutzen – Zendesk, Freshdesk oder Jira –, mit nativen Triggern und Regeln, wo sie ausreichen, und APIs, Webhooks oder Make/n8n, wo nicht. Ein Plattformwechsel ist nicht nötig. Das Klassifizieren und Routen eingehender E-Mails passt zum Service „Ticket Routing & Categorization“ ({{price:routing}} einmalig); mehrstufige Workflows, etwa eine Bestellnummer aus einer E-Mail auslesen und in einem anderen System nachschlagen, fallen unter „Custom Automation“ ({{price:custom}}).",
          },
          {
            type: "p",
            text: "Die meisten Setups dauern 1–3 Wochen. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und ein kostenloses 30-minütiges Health-Check-Gespräch ist ein guter Rahmen, um Ihren aktuellen E-Mail-Fluss zu erfassen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich meine eigene Support-E-Mail-Adresse behalten?",
        a: "Ja. In Zendesk fügen Sie sie als Support-Adresse hinzu und leiten ihre E-Mails an Zendesk weiter, vorzugsweise mit automatischer Weiterleitung auf Serverebene. In Freshdesk leiten Sie sie an die von Freshdesk generierte Adresse weiter oder verbinden ein Gmail- oder Microsoft-365-Postfach direkt.",
      },
      {
        q: "Brauche ich SPF und DKIM für Helpdesk-E-Mails?",
        a: "Wenn der Helpdesk Antworten von Ihrer eigenen Domain sendet, richten Sie beides ein. Zendesk verlangt, dass Sie include:mail.zendesk.com zu Ihrem SPF-Eintrag hinzufügen und seine CNAME-Einträge anlegen, bevor Sie die DKIM-Signatur aktivieren. Freshdesk generiert vier DKIM-CNAME-Einträge, die Sie veröffentlichen und verifizieren.",
      },
      {
        q: "Warum ist aus einer Kunden-E-Mail in Zendesk kein Ticket geworden?",
        a: "Prüfen Sie die gesperrten Tickets. Zendesk sperrt Nachrichten, die es als automatische Antworten erkennt, Nachrichten von einer Ihrer eigenen Support-Adressen und gehäufte E-Mails eines einzelnen Absenders in kurzer Zeit.",
      },
      {
        q: "Gibt es die Autoreplies mit Artikeln in Zendesk noch?",
        a: "Die Funktion ist seit dem 31. Juli 2025 eine Legacy-Funktion und steht ab dem 10. Dezember 2026 nicht mehr zur Verfügung. Zendesk verweist Kunden auf KI-Agenten, die per E-Mail sowie in Messaging und Webformularen antworten können.",
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
    slug: "ki-wissensdatenbank-kundenservice",
    category: "services",
    navLabel: "KI-Wissensdatenbank für Support",
    primaryKeyword: "KI-Wissensdatenbank Kundenservice",
    title: "KI-Wissensdatenbank im Kundenservice: Leitfaden | TascaLab",
    description:
      "So funktioniert eine KI-Wissensdatenbank im Kundenservice: Artikel in Zendesk, Freshdesk oder Confluence strukturieren, aktuell halten und Deflection messen.",
    h1: "KI-Wissensdatenbank im Kundenservice: Wie sie funktioniert und wie Sie sie aufbauen",
    intro:
      "Eine KI-Wissensdatenbank im Kundenservice ist ein Help Center, das so geschrieben ist, dass sowohl Kunden als auch KI-Agenten Fragen daraus beantworten können. Die KI sucht die passenden Artikel heraus und formuliert ihre Antwort daraus – ihre Antworten sind also nur so korrekt, vollständig und aktuell wie Ihre Artikel. Sie können sie in dem Tool aufbauen, das Sie bereits haben: im Help Center von Zendesk, in der Wissensdatenbank von Freshdesk oder in Confluence-Bereichen, die mit Jira Service Management verknüpft sind.",
    keyFacts: [
      "Retrieval-Augmented Generation findet relevante Passagen in Ihren Dokumenten und fügt sie dem Prompt hinzu, sodass das Modell aus Ihren Inhalten antwortet.",
      "In einem Zendesk Help Center liegen Artikel in Abschnitten innerhalb von Kategorien; direkt in einer Kategorie können sie nicht liegen.",
      "Freshdesk gliedert seine Wissensdatenbank in Kategorien, Ordner und Artikel.",
      "Confluence-Bereiche, die mit einer Wissensdatenbank in Jira Service Management verknüpft sind, speisen deren Help Center, die Suche in der Wissensdatenbank und den virtuellen Service-Agenten.",
      "Jira Service Management zählt eine Anfrage als abgewendet (Deflection), wenn ein Kunde beim Einreichen einen vorgeschlagenen Artikel auswählt und als hilfreich markiert.",
    ],
    sections: [
      {
        heading: "Wie KI-Antworten auf Ihre Artikel zurückgreifen",
        blocks: [
          {
            type: "p",
            text: "Die meisten KI-Support-Agenten nutzen eine Form von Retrieval-Augmented Generation (RAG). AWS beschreibt RAG als Technik, die ein großes Sprachmodell um externe Daten ergänzt, etwa um die internen Dokumente eines Unternehmens. Im Überblick:",
          },
          {
            type: "ol",
            items: [
              "Ihre Dokumente werden in Embeddings umgewandelt – numerische Darstellungen des Textes – und in einer Vektordatenbank gespeichert. Das ist ein einmaliger Einrichtungsschritt.",
              "Ein Kunde stellt eine Frage in natürlicher Sprache.",
              "Das System führt eine Ähnlichkeitssuche in der Vektordatenbank aus und fügt die gefundenen Passagen dem Prompt als Kontext hinzu.",
              "Das Sprachmodell schreibt seine Antwort auf Basis dieses Kontexts.",
            ],
          },
          {
            type: "p",
            text: "Daraus folgen zwei Dinge. Die KI kann nichts beantworten, was nicht aufgeschrieben ist, und sie arbeitet mit Ausschnitten aus Artikeln statt mit Ihrem gesamten Help Center. Die Leitlinien von Freshdesk betonen denselben Punkt: Freddy AI ruft Artikel unabhängig voneinander ab und nutzt sie einzeln; fehlen in einem Artikel Definitionen oder Kontext, trifft die KI womöglich Annahmen oder gibt unvollständige Antworten.",
          },
          {
            type: "p",
            text: "Die großen Helpdesks haben das bereits integriert. Die KI-Agenten von Zendesk können generative Antworten in Messaging und E-Mail nutzen, verbunden mit mehreren Wissensquellen, wobei Suchregeln steuern, welche Quellen unter bestimmten Bedingungen durchsucht werden. In Jira Service Management erscheinen Artikel aus einem verknüpften Confluence-Bereich im Help Center, in der Suche der Wissensdatenbank und im virtuellen Service-Agenten.",
          },
        ],
      },
      {
        heading: "Wo die Wissensdatenbank in Ihrem Helpdesk liegt",
        blocks: [
          {
            type: "table",
            caption: "Aufbau der Wissensdatenbank nach Helpdesk",
            head: ["Helpdesk", "Wo Artikel liegen", "Wie sie gegliedert sind", "Was darauf zugreift"],
            rows: [
              [
                "Zendesk",
                "Help Center",
                "Kategorien enthalten Abschnitte, und Abschnitte enthalten Artikel; Abschnitte lassen sich verschachteln, Artikel können aber nicht direkt in einer Kategorie liegen",
                "Kunden beim Stöbern und Suchen sowie KI-Agenten mit generativen Antworten",
              ],
              [
                "Freshdesk",
                "Wissensdatenbank (Lösungsartikel)",
                "Kategorien enthalten Ordner, und Ordner enthalten Artikel; Ordner lassen sich verschachteln",
                "Kunden im Portal und Freddy AI",
              ],
              [
                "Jira Service Management",
                "Confluence-Bereiche, die mit der Wissensdatenbank des Serviceprojekts verknüpft sind",
                "Seiten im verknüpften Confluence-Bereich",
                "Das Help Center, die Suche in der Wissensdatenbank und der virtuelle Service-Agent",
              ],
            ],
          },
          {
            type: "p",
            text: "Ein praktisches Detail: In Freshdesk erscheint eine Kategorie oder ein Ordner erst dann im Kundenportal, wenn mindestens ein Artikel darin veröffentlicht ist. Für KI-Antworten zählt, was in einem Artikel steht, mehr als, wo er liegt; die Hierarchie hilft vor allem Menschen, die stöbern.",
          },
        ],
      },
      {
        heading: "Artikel schreiben, aus denen eine KI antworten kann",
        blocks: [
          {
            type: "p",
            text: "Freshdesk veröffentlicht Leitlinien zum Verfassen von Wissensinhalten für Freddy AI, und sie gelten für jede abrufbasierte KI:",
          },
          {
            type: "ul",
            items: [
              "Beschränken Sie jeden Artikel auf ein einziges Thema und sagen Sie, wann die Informationen gelten und wann nicht.",
              "Verlinken Sie auf verwandte Artikel, statt Neben-Workflows einzubetten.",
              "Teilen Sie Einrichtung, Nutzung und Fehlerbehebung auf separate Artikel auf, wenn sie unterschiedlichen Zielen dienen.",
              "Machen Sie jeden Artikel in sich geschlossen: Definieren Sie die Begriffe und den Kontext, auf die er sich stützt.",
              "Verwenden Sie eine Überschrift der obersten Ebene für den Zweck des Artikels und Überschriften niedrigerer Ebenen, um Aufgaben, Optionen oder Konzepte zu trennen.",
            ],
          },
          {
            type: "p",
            text: "Ergänzen Sie ein paar eigene Gewohnheiten. Betiteln Sie Artikel mit den Worten, die Kunden tatsächlich verwenden, nicht mit internen Produktnamen. Stellen Sie die Antwort in die ersten Zeilen, danach die Schritte. Halten Sie exakte Werte – Limits, Fristen, Preise – an einer Stelle fest und verlinken Sie darauf, damit eine Änderung nicht zwei unterschiedliche Zahlen hinterlässt, zwischen denen die KI wählen muss. Und beginnen Sie dort, wo die Tickets sind: Ein paar Wochen Tickets, nach Themen gruppiert, zeigen, welche Artikel Sie zuerst schreiben oder überarbeiten sollten.",
          },
        ],
      },
      {
        heading: "Inhalte aktuell halten",
        blocks: [
          {
            type: "p",
            text: "Ein veralteter Artikel wird zu einer selbstsicheren, aber falschen KI-Antwort. Geben Sie deshalb jedem Artikel eine verantwortliche Person und einen Überprüfungsrhythmus. Zendesk unterstützt das mit der Artikelverifizierung: Knowledge-Admins legen Verifizierungsregeln fest, die Artikel anhand von Filtern und Intervallen zur Überprüfung markieren – zum Beispiel alle drei Monate für Artikel mit einem bestimmten Label, in einer bestimmten Kategorie oder solche, die länger nicht aktualisiert wurden –, und Artikelverantwortliche erhalten E-Mail-Erinnerungen, sie zu verifizieren. Prüfen Sie, ob Ihr Tarif das enthält, bevor Sie sich darauf verlassen.",
          },
          {
            type: "p",
            text: "Geplante Überprüfungen fangen schleichende Veränderungen ab. Diese Ereignisse sollten sofort eine Aktualisierung auslösen:",
          },
          {
            type: "ul",
            items: [
              "Eine Änderung an Produkt, Preisen oder Richtlinien: Aktualisieren Sie die Artikel spätestens am Tag des Release.",
              "Ein Agent beantwortet ein Ticket, das die Wissensdatenbank nicht abdeckt: Erstellen oder markieren Sie einen Artikel.",
              "Die KI übergibt ein Gespräch an einen Menschen, weil sie nicht antworten konnte: Prüfen Sie diese Frage.",
              "Zwei Artikel geben unterschiedliche Antworten: Führen Sie sie zusammen und nehmen Sie das Duplikat offline.",
            ],
          },
        ],
      },
      {
        heading: "Self-Service messen",
        blocks: [
          {
            type: "p",
            text: "Messen Sie, ob Artikel Tickets verhindern, nicht nur, ob sie gelesen werden. Halten Sie die Definitionen jeden Monat gleich, damit der Trend aussagekräftig bleibt.",
          },
          {
            type: "table",
            caption: "Self-Service-Kennzahlen, die sich zu verfolgen lohnen",
            head: ["Kennzahl", "Was sie Ihnen sagt", "Wie Sie sie erhalten"],
            rows: [
              [
                "Abgewendete Anfragen",
                "Kunden, die beim Einreichen einer Anfrage eine Antwort gefunden haben",
                "Jira Service Management zählt eine Anfrage als abgewendet, wenn der Kunde beim Einreichen einen vorgeschlagenen Artikel auswählt und als hilfreich markiert",
              ],
              [
                "Mit einem Artikel gelöste Anfragen",
                "Wie oft Agenten Anfragen mithilfe von Inhalten der Wissensdatenbank schließen",
                "Der Bericht „Requests resolved“ in Jira Service Management erfasst Anfragen, die mit oder ohne Artikel der Wissensdatenbank geschlossen wurden",
              ],
              [
                "Self-Service-Quote",
                "Help-Center-Nutzung pro Ticket",
                "Teilen Sie die Help-Center-Sitzungen durch die im selben Zeitraum erstellten Tickets und beobachten Sie den Trend",
              ],
              [
                "KI-Übergabequote",
                "Anteil der KI-Gespräche, die an einen Menschen übergeben werden",
                "Die Analysen Ihres KI-Agenten oder ein Tag, das bei jeder Übergabe gesetzt wird",
              ],
              [
                "Tickets zu dokumentierten Themen",
                "Ob bestehende Artikel tatsächlich Tickets verhindern",
                "Ziehen Sie jeden Monat Stichproben aus den Tickets und prüfen Sie, ob ein Artikel die Frage bereits abgedeckt hat",
              ],
            ],
          },
        ],
      },
      {
        heading: "Wie TascaLab Ihre Wissensdatenbank zum Einsatz bringt",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut Chatbots auf den Tools auf, die Sie bereits nutzen – Zendesk, Freshdesk, Jira, Slack oder interne Systeme –, über APIs, Webhooks und Make oder n8n, sodass Ihre Wissensdatenbank bleibt, wo sie ist. Der Starter Chat Bot ({{price:starter}} einmalig) deckt 1–2 Kanäle ab, der Standard Chat Bot ({{price:standard}}) 3–5 Kanäle, auf Ihrer Website, am Telefon sowie über WhatsApp, Telegram, Facebook Messenger und Instagram. Pflege-Workflows wie Überprüfungserinnerungen für veraltete Artikel fallen unter „Custom Automation“ ({{price:custom}}).",
          },
          {
            type: "p",
            text: "Die meisten Setups dauern 1–3 Wochen. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, ohne versteckte Kosten, und Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist Retrieval-Augmented Generation im Kundenservice?",
        a: "Ein Verfahren, mit dem eine KI aus Ihren eigenen Inhalten antwortet. Relevante Passagen werden aus Ihren Dokumenten abgerufen, typischerweise über eine Ähnlichkeitssuche in einer Vektordatenbank, und dem Prompt hinzugefügt, sodass das Sprachmodell seine Antwort aus diesem Kontext formuliert.",
      },
      {
        q: "Kann Jira Service Management Confluence als Wissensdatenbank nutzen?",
        a: "Ja. Sie verknüpfen einen Confluence-Bereich mit der Wissensdatenbank des Serviceprojekts, und seine Artikel erscheinen im Help Center, in der Suche der Wissensdatenbank und im virtuellen Service-Agenten.",
      },
      {
        q: "Wie halte ich Artikel in der Zendesk-Wissensdatenbank aktuell?",
        a: "Nutzen Sie die Artikelverifizierung, sofern Ihr Tarif sie enthält. Verifizierungsregeln markieren Artikel anhand von Filtern und Intervallen zur Überprüfung, und Artikelverantwortliche erhalten E-Mail-Erinnerungen, sie zu verifizieren.",
      },
      {
        q: "Wie sollten Artikel für KI-Antworten aufgebaut sein?",
        a: "Ein Thema pro Artikel, in sich geschlossen, mit klaren Überschriften. Freshdesk weist darauf hin, dass Freddy AI Artikel unabhängig voneinander abruft, sodass fehlende Definitionen oder fehlender Kontext zu Annahmen oder unvollständigen Antworten führen können.",
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
