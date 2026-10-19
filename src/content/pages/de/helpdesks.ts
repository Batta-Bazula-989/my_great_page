import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "zendesk-automatisierung",
    category: "helpdesks",
    navLabel: "Zendesk-Automatisierung",
    primaryKeyword: "Zendesk Automatisierung",
    title: "Zendesk-Automatisierung: Trigger, Automationen und Makros",
    description:
      "So funktioniert Zendesk-Automatisierung: Trigger, Automationen, Makros, stündliche Läufe, Trigger-Reihenfolge, Omnichannel- und Skill-Routing, Webhooks und API.",
    h1: "Zendesk-Automatisierung: Trigger, Automationen, Makros und Routing",
    intro:
      "Zendesk-Automatisierung besteht aus drei Werkzeugen für Geschäftsregeln: Triggern, die sofort auslösen, wenn ein Ticket erstellt oder aktualisiert wird, Automationen, die stündlich nach Zeitplan laufen, und Makros, die Agenten von Hand anwenden. Routing (Omnichannel oder skillbasiert), Webhooks und die Zendesk API decken ab, was diese Regeln allein nicht leisten. Im Folgenden sehen Sie, wie sich die einzelnen Bausteine verhalten und was sich zuerst zu automatisieren lohnt.",
    keyFacts: [
      "Ticket-Trigger laufen unmittelbar, nachdem ein Ticket erstellt oder aktualisiert wurde, und zwar in der Reihenfolge, in der sie aufgelistet sind.",
      "Automationen laufen einmal pro Stunde auf nicht geschlossenen Tickets, und jede einzelne kann pro Stunde auf bis zu 1.000 Tickets wirken.",
      "Jede Automation braucht eine Bedingung, die nur einmal zutrifft, oder eine Aktion, die eine Bedingung aufhebt – sonst löst sie immer wieder aus.",
      "Makros enthalten nur Aktionen, keine Bedingungen, und können nur das tun, was der anwendende Agent selbst darf.",
      "Ein Webhook ist entweder mit Zendesk-Ereignissen oder mit Triggern und Automationen verbunden, nicht mit beidem.",
    ],
    sections: [
      {
        heading: "Trigger, Automationen und Makros im Vergleich",
        blocks: [
          {
            type: "p",
            text: "Alle drei Werkzeuge ändern Tickets, werden aber unterschiedlich gestartet. Zendesk selbst formuliert es so: Der Unterschied zwischen Triggern und Automationen liegt nicht darin, welche Aktionen sie ausführen können, sondern darin, welche Bedingungen sie auslösen. Makros haben überhaupt keine Bedingungen, weil nichts das Ticket automatisch prüft. Ein Agent entscheidet, wann er eines anwendet.",
          },
          {
            type: "table",
            caption: "Die drei Zendesk-Werkzeuge für Geschäftsregeln",
            head: ["Werkzeug", "Was es startet", "Bedingungen", "Typischer Einsatz"],
            rows: [
              [
                "Trigger",
                "Ein Ticket wird erstellt oder aktualisiert (läuft sofort)",
                "Ja",
                "Neue Tickets weiterleiten, Felder setzen, Benachrichtigungen senden",
              ],
              [
                "Automation",
                "Stündlicher Zeitplan, abhängig von der verstrichenen Zeit",
                "Ja, meist 'Hours since'-Bedingungen",
                "Erinnerungen, Eskalation liegengebliebener Tickets, Schließen gelöster Tickets",
              ],
              [
                "Makro",
                "Ein Agent wendet es manuell an",
                "Nein, nur Aktionen",
                "Textbausteine und wiederholbare Änderungen an mehreren Feldern",
              ],
            ],
          },
          {
            type: "p",
            text: "Die drei lassen sich gut kombinieren. Ein gängiges Muster ist ein Makro, das ein Tag hinzufügt, das wiederum sofort einen Trigger auslöst, der nach genau diesem Tag sucht. Beachten Sie, dass ein Makro nur das tun kann, was der aktuelle Benutzer darf. Ein Agent mit eingeschränkten Berechtigungen kann daher möglicherweise nicht jede Änderung anwenden, die ein Makro enthält.",
          },
        ],
      },
      {
        heading: "So funktioniert die Trigger-Reihenfolge",
        blocks: [
          {
            type: "p",
            text: "Jedes Mal, wenn ein Ticket erstellt oder aktualisiert wird, laufen alle Ticket-Trigger in einem Zyklus darüber, in der Reihenfolge, in der sie aufgelistet sind. Aktualisiert ein Trigger das Ticket, beginnt der Zyklus von vorn und alle Trigger laufen erneut – außer denen, die bereits ausgelöst und das Ticket aktualisiert haben. Die Änderung eines Triggers kann also die Bedingungen eines anderen Triggers erfüllen, auch wenn diese einen Moment zuvor noch nicht zutrafen.",
          },
          {
            type: "p",
            text: "Die von Zendesk empfohlene Reihenfolge für Ticket-Trigger:",
          },
          {
            type: "ol",
            items: [
              "Trigger, die Ticketwerte wie Status, Priorität oder andere Felder ändern.",
              "Trigger, die das Ticket zuweisen.",
              "Benachrichtigungs-Trigger, ganz zuletzt, damit E-Mails und Nachrichten den endgültigen Stand des Tickets wiedergeben.",
            ],
          },
          {
            type: "p",
            text: "Wenn Sie Trigger-Kategorien verwenden, muss die Reihenfolge der Kategorien der Reihenfolge entsprechen, in der die Trigger laufen sollen; Sie ändern sie mit 'Edit order' in der Trigger-Liste. Verwenden Sie die Bedingung Ticket | Is | Created für Regeln, die nur auf neue Tickets wirken sollen (Routing ist der klassische Fall), und Ticket | Is | Updated etwa für Benachrichtigungen über Aktualisierungen. Ticket-Trigger laufen nicht auf geschlossenen Tickets.",
          },
        ],
      },
      {
        heading: "Wie oft Zendesk-Automationen laufen und wie Sie Schleifen verhindern",
        blocks: [
          {
            type: "p",
            text: "Automationen laufen einmal pro Stunde auf allen nicht geschlossenen Tickets. Der Zeitpunkt ist ungefähr: Eine Automation startet irgendwann im Lauf der Stunde, nicht zu einer festen Minute. Jede Automation kann pro Stunde auf bis zu 1.000 Tickets wirken; alles darüber hinaus wartet auf spätere Läufe.",
          },
          {
            type: "p",
            text: "Weil Automationen dieselben Tickets jede Stunde erneut prüfen, verlangt Zendesk, dass jede eine Bedingung enthält, die nur einmal zutrifft, oder eine Aktion, die mindestens eine Bedingung aufhebt. Ohne sie treffen die Bedingungen immer wieder zu und die Automation löst in einer Endlosschleife aus. Die Standard-Automation 'close ticket after solved' erledigt das von selbst: Durch das Schließen fällt das Ticket aus der Bedingung 'Status is Solved' heraus. Bei eigenen Automationen besteht die übliche Lösung darin, ein Tag hinzuzufügen und genau dieses Tag in den Bedingungen auszuschließen.",
          },
          {
            type: "note",
            text: "Für Zeitbedingungen empfiehlt Zendesk 'Hours since ... greater than' statt 'Hours since ... is'. Eine 'is'-Bedingung kann komplett verpasst werden, wenn die Automation nicht genau in dieser Stunde läuft. Auch eine 'greater than'-Bedingung braucht weiterhin eine aufhebende Aktion oder ein Tag.",
          },
        ],
      },
      {
        heading: "Routing-Optionen für eingehende Tickets",
        blocks: [
          {
            type: "p",
            text: "Trigger können Tickets weiterleiten, indem sie eine Gruppe, einen Bearbeiter oder Skills setzen, aber Zendesk bietet auch eigene Routing-Funktionen:",
          },
          {
            type: "ul",
            items: [
              "Omnichannel-Routing verteilt Tickets aus E-Mail, Anrufen und Messaging an Agenten nach deren Verfügbarkeit und Kapazität und kann außerdem Priorität und Skills berücksichtigen.",
              "Skills können Tickets per Trigger hinzugefügt und als erforderlich oder optional markiert werden. Erforderliche Skills schränken ein, welche Agenten infrage kommen; optionale Skills können ablaufen, sodass das Ticket auf das normale Routing-Modell zurückfällt.",
              "Eigenständiges skillbasiertes Routing ist ein Pull-Modell: Tickets werden nach Skill sortiert, und Agenten holen sich ihre Arbeit aus skillbasierten Ansichten. Für Sprach- oder Messaging-Tickets lässt es sich nicht verwenden.",
            ],
          },
          {
            type: "p",
            text: "Bei Anrufen ist Omnichannel-Routing die einzige Möglichkeit, über Trigger das Routing zu beeinflussen, weil ein Ticket erstellt wird, sobald ein Anruf in die Warteschlange gelangt. Die Routing-Funktionen unterscheiden sich je nach Plan; prüfen Sie also, was Ihr Plan enthält, bevor Sie Ihre Abläufe auf Skills aufbauen.",
          },
        ],
      },
      {
        heading: "Webhooks und die Zendesk API",
        blocks: [
          {
            type: "p",
            text: "Wenn eine Regel einem anderen System etwas mitteilen muss, verwenden Sie einen Webhook. Sie legen ihn im Admin Center an und wählen seinen Verbindungstyp: Zendesk-Ereignisse oder Trigger bzw. Automation. Ein Webhook kann nur eine dieser Varianten nutzen, nicht beide, und die Verbindungsmethode lässt sich später nicht ändern. Fügen Sie in einem Trigger oder einer Automation die Aktion 'Notify webhook' hinzu, wählen Sie den Webhook aus und geben Sie die Payload ein. Request-Bodys können JSON, XML oder formularcodiert sein, und die Payload darf 16.000 Zeichen nicht überschreiten. Jeder Webhook hat eine Option 'Test webhook', mit der Sie die Anfrage prüfen können, bevor sie live geht.",
          },
          {
            type: "p",
            text: "Wenn die Logik Daten lesen, im Code Entscheidungen treffen oder in Tickets zurückschreiben muss, verwenden Sie die Ticketing API. Tickets werden mit einem POST an den Tickets-Endpunkt erstellt und mit einem PUT an die URL des jeweiligen Tickets aktualisiert; für viele Tickets auf einmal gibt es Bulk-Varianten. Anfragen können sich mit einem OAuth-Access-Token authentifizieren, der in einem Bearer-Header gesendet wird.",
          },
          {
            type: "p",
            text: "Gute erste Kandidaten für die Zendesk-Automatisierung:",
          },
          {
            type: "ul",
            items: [
              "Neue Tickets nach Kanal, Formular, Sprache oder Schlüsselwörtern an die richtige Gruppe weiterleiten.",
              "Erinnerungen und Eskalationen für Tickets, die zu lange auf eine Antwort gewartet haben.",
              "Tickets mit hoher Priorität oder von VIP-Kunden per Webhook in einem Slack-Channel posten.",
              "Bestell- oder Kontodaten per API in ein Ticket holen, bevor ein Agent es öffnet.",
            ],
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab arbeitet auf Ihrem bestehenden Zendesk-Konto, ohne Plattformwechsel, und nutzt dafür die Zendesk API, Webhooks sowie Make oder n8n, wo sie passen. Ticket Routing & Categorization ist ein einmaliges Projekt für {{price:routing}}; Custom Automation für Abläufe über mehrere Systeme hinweg kostet {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch, eine Basisdokumentation und keine versteckten Kosten, und die meisten Setups dauern 1–3 Wochen. Sie können mit einem kostenlosen 30-minütigen Health-Check-Gespräch starten.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wie oft laufen Zendesk-Automationen?",
        a: "Einmal pro Stunde, auf allen nicht geschlossenen Tickets. Die genaue Minute innerhalb der Stunde variiert, und jede Automation kann pro Stunde auf bis zu 1.000 Tickets wirken.",
      },
      {
        q: "Was ist der Unterschied zwischen einem Zendesk-Trigger und einer Automation?",
        a: "Trigger sind ereignisbasiert und laufen sofort, wenn ein Ticket erstellt oder aktualisiert wird. Automationen sind zeitbasiert und laufen stündlich. Beide können dieselben Arten von Aktionen ausführen.",
      },
      {
        q: "Warum löst meine Zendesk-Automation immer wieder beim selben Ticket aus?",
        a: "Wahrscheinlich fehlt eine aufhebende Bedingung oder Aktion. Fügen Sie eine Aktion hinzu, die eine ihrer Bedingungen unwahr macht, zum Beispiel ein Tag, das die Bedingungen ausschließen.",
      },
      {
        q: "Kann ein Zendesk-Trigger ein externes System aufrufen?",
        a: "Ja. Legen Sie einen Webhook an, der mit Triggern und Automationen verbunden ist, und fügen Sie dem Trigger dann die Aktion 'Notify webhook' mit der Payload hinzu, die Sie senden möchten.",
      },
      {
        q: "Ändern Trigger-Kategorien die Reihenfolge, in der Trigger laufen?",
        a: "Ja. Trigger laufen in der Reihenfolge der Liste, und die Reihenfolge der Kategorien muss der Reihenfolge entsprechen, in der sie laufen sollen. Sie ändern sie mit 'Edit order' in der Liste der Ticket-Trigger.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    key: "freshdesk-automation",
    slug: "freshdesk-automatisierung",
    category: "helpdesks",
    navLabel: "Freshdesk-Automatisierung",
    primaryKeyword: "Freshdesk Automatisierung",
    title: "Freshdesk-Automatisierung: Regeln, Zuweisung und Webhooks",
    description:
      "So funktioniert Freshdesk-Automatisierung: Regeln für Ticket Creation, Ticket Updates und Hourly Triggers, Round-Robin- und Skill-Zuweisung, Webhooks und API.",
    h1: "Freshdesk-Automatisierung: Regeltypen, Zuweisung und Webhooks",
    intro:
      "Freshdesk-Automatisierung basiert auf drei Regeltypen: Ticket Creation für neue Tickets, Ticket Updates für Ereignisse an bestehenden Tickets und Hourly Triggers für zeitbasierte Prüfungen. Die Zuweisung (Round-Robin, lastverteilt oder skillbasiert) entscheidet, wer das Ticket bekommt, und Webhook-Aktionen sowie die Freshdesk API verbinden das Ganze mit anderen Systemen.",
    keyFacts: [
      "Freshdesk kennt drei Typen von Automatisierungsregeln: Ticket Creation, Ticket Updates und Hourly Triggers.",
      "Hourly Triggers (früher Time Triggers) laufen jede Stunde, nach Kalenderstunden, und nur auf Tickets, die in den letzten 30 Tagen aktualisiert wurden.",
      "Ticket-Creation-Regeln können entweder die erste passende Regel oder alle passenden Regeln ausführen.",
      "Freshdesk führt aus Automatisierungsregeln bis zu 1.000 Webhook-Aufrufe pro Stunde aus; zusätzliche Aufrufe werden gepuffert.",
      "Bei der lastbasierten Zuweisung zählen nur Tickets mit aktivem SLA-Timer zur Auslastung eines Agenten.",
    ],
    sections: [
      {
        heading: "Die drei Typen von Freshdesk-Automatisierungsregeln",
        blocks: [
          {
            type: "p",
            text: "Wenn Sie Freshdesk schon länger nutzen, kennen Sie diese Regeln vielleicht unter ihren alten Namen. Freshdesk nannte sie früher Dispatch'r, Observer und Supervisor und hat später alle drei in einem einzigen Automations-Modul zusammengeführt, mit einem eigenen Tab für jeden Regeltyp.",
          },
          {
            type: "table",
            caption: "Typen von Freshdesk-Automatisierungsregeln",
            head: ["Regeltyp", "Früherer Name", "Wann sie läuft", "Geeignet für"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Einmal, wenn ein neues Ticket erstellt wird",
                "Eingehende Tickets kategorisieren, priorisieren und weiterleiten",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Wenn ein definiertes Ereignis an einem bestehenden Ticket eintritt",
                "Auf Antworten, Notizen, Status- oder Feldänderungen reagieren",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Jede Stunde, nach Zeitplan",
                "Erinnerungen, Eskalationen, automatisches Schließen inaktiver Tickets",
              ],
            ],
          },
          {
            type: "p",
            text: "Ticket-Creation-Regeln prüfen jedes neue Ticket gegen Ihre Bedingungen und führen bei einem Treffer die Aktionen aus. Sie legen fest, ob Freshdesk nur die erste passende Regel oder alle passenden Regeln ausführt. Wenn nur die erste passende Regel greift, entscheidet die Reihenfolge der Liste, welche Regel gewinnt; spezifische Regeln gehören deshalb über allgemeine.",
          },
        ],
      },
      {
        heading: "Ticket-Updates-Regeln: Ereignisse, Bedingungen, Aktionen",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates ist der einzige Regeltyp, bei dem Sie Ereignisse konfigurieren. Eine Regel braucht mindestens ein Ereignis und löst aus, sobald eines davon zutrifft. Außerdem legen Sie fest, wer die Aktion ausgeführt hat: ein Agent, der Anfragende, einer von beiden, ein Collaborator oder das System selbst.",
          },
          {
            type: "ul",
            items: [
              "Ereignisse: Eine Ticket-Eigenschaft ändert sich, ein Agent oder eine Gruppe wird aktualisiert, eine Notiz wird hinzugefügt, eine Antwort wird gesendet, Kundenfeedback geht ein; zu den Systemereignissen gehören eine fehlgeschlagene E-Mail-Zustellung und ein Ticket, das überfällig wird.",
              "Bedingungen: Ticket-Eigenschaften (einschließlich Tags und benutzerdefinierter Felder), Kontaktdaten des Anfragenden und Firmenfelder.",
              "Aktionen: Felder setzen, Agent oder Gruppe neu zuweisen, Tags oder Beobachter hinzufügen, eine Notiz hinzufügen, eine E-Mail an einen Agenten, eine Gruppe oder den Anfragenden senden, als Spam markieren oder löschen oder einen Webhook auslösen.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates ist außerdem der einzige Regeltyp, der ein neues Ticket erstellen oder eine Thread-Nachricht hinzufügen kann. Welche Ereignisse genau zur Verfügung stehen, hängt von Ihrem Plan und den aktivierten Funktionen ab.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: zeitbasierte Regeln",
        blocks: [
          {
            type: "p",
            text: "Hourly Triggers warten nicht auf ein Ereignis. Sie durchsuchen die Tickets jede Stunde und wirken auf diejenigen, die passen. Dieser Rhythmus bestimmt, wie Sie sie formulieren:",
          },
          {
            type: "ul",
            items: [
              "Das eingestellte Zeitlimit sollte mindestens eine Stunde betragen, da die Regel nur stündlich läuft.",
              "Sie zählen Kalenderstunden, nicht Geschäftszeiten.",
              "Sie verarbeiten nur Tickets, die innerhalb der letzten 30 Tage aktualisiert wurden.",
              "Sie arbeiten nur mit Ticket-Eigenschaften, nicht mit Kontakt- oder Firmeneigenschaften.",
            ],
          },
          {
            type: "note",
            text: "Eine zeitbasierte Regel, die nicht sorgfältig definiert ist, wird Stunde für Stunde erneut auf demselben Ticket ausgeführt. Eine gängige Lösung ist, eine Zeitbedingung 'greater than' mit einer Bedingung 'less than' zu kombinieren, sodass das Ticket nur einmal passt.",
          },
        ],
      },
      {
        heading: "Automatische Ticketzuweisung",
        blocks: [
          {
            type: "p",
            text: "Automatisierungsregeln setzen in der Regel die Gruppe; die Zuweisung entscheidet, welcher Agent in dieser Gruppe das Ticket bekommt. Die automatische Zuweisung von Freshdesk läuft auf der Omniroute-Engine und bietet pro Gruppe drei Methoden:",
          },
          {
            type: "ul",
            items: [
              "Round-Robin: verteilt Tickets reihum an verfügbare Agenten der Gruppe, überspringt Agenten mit voller Auslastung und gibt das Ticket dem berechtigten Agenten, dem am längsten keines mehr zugewiesen wurde.",
              "Lastverteilt (Load-balanced): schickt jedes neue Ticket an den am wenigsten ausgelasteten Agenten, bis jeder Agent das eingestellte Maximum erreicht. Nur Tickets mit aktivem SLA-Timer zählen zur Auslastung; wenn Sie ein Ticket lösen oder in einen Status ohne SLA verschieben, wird also Kapazität frei.",
              "Skillbasiert: Agenten haben nach Priorität geordnete Skills, und ein neues Ticket geht an einen Agenten mit dem ersten passenden Skill. Freshdesk empfiehlt einen Fallback-Skill mit der Gruppe als Bedingung, der allen Agenten als letzter zugeordnet wird, damit kein Ticket unzugewiesen bleibt.",
            ],
          },
          {
            type: "p",
            text: "Welche Methoden Sie nutzen können, hängt von Ihrem Plan ab; prüfen Sie daher Ihre Gruppeneinstellungen, bevor Sie sich für eine entscheiden. Manuell zugewiesene Tickets zählen trotzdem zur Auslastung und können einen Agenten über das Limit bringen. Dann pausiert die automatische Zuweisung an diesen Agenten, bis seine Ticketanzahl wieder sinkt.",
          },
        ],
      },
      {
        heading: "Webhooks und die Freshdesk API",
        blocks: [
          {
            type: "p",
            text: "Ein Webhook ist in Freshdesk eine Automatisierungsaktion, die einen API-Aufruf an ein anderes System sendet. Sie wählen den Request-Typ und die Callback-URL, und sowohl die URL als auch die Payload können Platzhalter wie {{ticket.id}} enthalten. Wenn Sie über einen Webhook einen GET-Aufruf machen, kann die Regel die Antwort nicht verwenden; dafür verweist Freshdesk auf seine Aktion 'Trigger API'.",
          },
          {
            type: "p",
            text: "Freshdesk führt aus Automatisierungsregeln bis zu 1.000 Webhook-Aufrufe pro Stunde aus. Aufrufe darüber hinaus werden gepuffert, bis in der nächsten Stunde neue Kapazität verfügbar ist; Abläufe mit hohem Volumen sollten sich daher nicht auf sofortige Zustellung verlassen.",
          },
          {
            type: "p",
            text: "Für Integrationen, die außerhalb von Freshdesk laufen, verwenden Sie die REST API unter your-domain.freshdesk.com/api/v2/. Anfragen authentifizieren sich mit Ihrem API-Schlüssel als Benutzername und einem beliebigen Platzhalterwert als Passwort. Rate Limits gelten pro Konto und Minute und hängen von Ihrem Plan ab; eine 429-Antwort bedeutet, dass das Limit ausgeschöpft ist, und der Header Retry-After gibt an, wie viele Sekunden Sie warten müssen. Beim Auflisten von Tickets werden standardmäßig nur die letzten 30 Tage zurückgegeben; für ältere Tickets verwenden Sie den Filter updated_since.",
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut auf Ihrem bestehenden Freshdesk-Konto auf, ohne Plattformwechsel, und nutzt dafür Automatisierungsregeln, Webhooks, die Freshdesk API sowie Make oder n8n, wo sie helfen. Ticket Routing & Categorization ist ein einmaliges Projekt für {{price:routing}}; Custom Automation kostet {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Der erste Schritt ist ein kostenloses 30-minütiges Health-Check-Gespräch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welche Typen von Automatisierungsregeln gibt es in Freshdesk?",
        a: "Ticket-Creation-Regeln laufen auf neuen Tickets, Ticket-Updates-Regeln laufen, wenn an einem bestehenden Ticket ein Ereignis eintritt, und Hourly Triggers laufen stündlich nach Zeitplan.",
      },
      {
        q: "Was ist aus Dispatch'r, Observer und Supervisor geworden?",
        a: "Das sind die älteren Namen derselben Regeltypen: Dispatch'r für die Ticketerstellung, Observer für Ticket-Aktualisierungen und Supervisor für zeitbasierte Regeln. Freshdesk hat sie in einem einzigen Automations-Modul zusammengeführt.",
      },
      {
        q: "Nutzen Freshdesk Hourly Triggers Geschäftszeiten?",
        a: "Nein. Sie laufen nach Kalenderstunden und nur auf Tickets, die innerhalb der letzten 30 Tage aktualisiert wurden.",
      },
      {
        q: "Wie viele Webhooks können Freshdesk-Automatisierungen senden?",
        a: "Freshdesk führt aus Automatisierungsregeln bis zu 1.000 Webhook-Aufrufe pro Stunde aus. Aufrufe über dem Limit werden gepuffert, bis wieder Kapazität frei ist.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "jira-service-management-automatisierung",
    category: "helpdesks",
    navLabel: "Jira Service Mgmt Automatisierung",
    primaryKeyword: "Jira Service Management Automatisierung",
    title: "Jira Service Management Automatisierung: Flows und SLAs",
    description:
      "Jira Service Management automatisieren: Trigger, Bedingungen, Aktionen, SLA- und Genehmigungs-Trigger, Smart Values, Webhooks, Warteschlangen, Anfragetypen.",
    h1: "Jira Service Management Automatisierung: So funktionieren Flows, SLAs und Webhooks",
    intro:
      "Automatisierung in Jira Service Management besteht aus Flows (früher Regeln genannt) mit drei Teilen: einem Trigger, der sie startet, optionalen Bedingungen, die filtern, welche Arbeitselemente sie betreffen, und Aktionen, die die eigentliche Arbeit erledigen. Service-spezifische Trigger wie SLA-Verletzungen und Genehmigungen sowie Smart Values und Web-Requests ermöglichen es, den Großteil der Triage-, Eskalations- und Benachrichtigungsarbeit rund um Ihre Warteschlangen zu automatisieren.",
    keyFacts: [
      "Jeder Automatisierungs-Flow besteht aus einem Trigger, optionalen Bedingungen und einer oder mehreren Aktionen, die von oben nach unten ausgeführt werden.",
      "Jira Service Management ergänzt Trigger wie 'SLA threshold breached' und 'Approval required'.",
      "Die Aktion 'Send web request' ruft externe Systeme auf; mit einem Trigger für eingehende Webhooks können externe Systeme einen Flow starten.",
      "Smart Values wie {{issue.key}} fügen Daten aus Arbeitselementen in Felder, Kommentare und Nachrichten ein.",
      "Jedes SLA hat eigene Start-, Pause- und Stopp-Bedingungen; das Pausieren ist optional.",
    ],
    sections: [
      {
        heading: "Trigger, Bedingungen und Aktionen",
        blocks: [
          {
            type: "p",
            text: "Die Atlassian-Dokumentation nennt Automatisierungsregeln inzwischen 'flows'; Sie werden beiden Begriffen begegnen, und sie bedeuten dasselbe. Sie können einen Flow von Grund auf, aus einer Vorlage oder mit Rovo erstellen, und sobald er aktiviert ist, laufen seine Schritte der Reihe nach von oben nach unten.",
          },
          {
            type: "table",
            caption: "Die drei Teile eines Automatisierungs-Flows in Jira Service Management",
            head: ["Teil", "Funktion", "Beispiele"],
            rows: [
              [
                "Trigger",
                "Startet den Flow, wenn etwas passiert",
                "Arbeitselement erstellt, Arbeitselement übergeleitet, Kommentar hinzugefügt, SLA-Schwelle überschritten, Genehmigung erforderlich, zeitgesteuert, eingehender Webhook",
              ],
              [
                "Bedingung (optional)",
                "Begrenzt, auf welche Arbeitselemente der Flow wirkt",
                "Arbeitselement entspricht einem JQL-Filter, Kommentar ist intern oder öffentlich, Benutzertyp",
              ],
              [
                "Aktion",
                "Erledigt die Arbeit",
                "Übergang (Transition), Feld bearbeiten, Kommentar hinzufügen, E-Mail senden, Web-Request senden, Slack- oder Microsoft-Teams-Nachricht senden",
              ],
            ],
          },
          {
            type: "p",
            text: "Zwei Trigger sind speziell auf Servicearbeit zugeschnitten. Bei 'SLA threshold breached' wählen Sie ein SLA und lassen den Flow entweder auslösen, wenn es verletzt wurde, oder wenn die Verletzung kurz bevorsteht. 'Approval required' löst aus, wenn ein genehmigungspflichtiges Arbeitselement erstellt oder aktualisiert wird oder wenn neue Genehmiger hinzugefügt werden. Ein zeitgesteuerter Trigger führt einen Flow nach einem Zeitplan aus, was sich für regelmäßige Prüfungen eignet, etwa um Arbeitselemente aufzulisten, die kurz vor einer SLA-Verletzung stehen.",
          },
        ],
      },
      {
        heading: "Warteschlangen, Anfragetypen und SLAs: der Rahmen der Automatisierung",
        blocks: [
          {
            type: "p",
            text: "Automatisierung in Jira Service Management dient vor allem dazu, drei Strukturen korrekt zu halten:",
          },
          {
            type: "ul",
            items: [
              "Warteschlangen (Queues) sind gefilterte Mengen von Arbeitselementen, die Agenten einen fokussierten Blick auf ihre Arbeit geben. Sie filtern nach Feldern wie Status, Arbeitstyp, Bearbeiter und Priorität oder per JQL. Agenten können Warteschlangen weder anlegen noch bearbeiten; das übernehmen Space-Admins.",
              "Anfragetypen (Request Types) sind die Formulare, mit denen Kunden im Portal Anfragen stellen. Jeder Anfragetyp ist mit genau einem Arbeitstyp verknüpft: Der Anfragetyp regelt Benennung und Portaleinstellungen, der Arbeitstyp enthält Workflow und Felder. Ein Arbeitstyp kann hinter vielen Anfragetypen stehen.",
              "SLAs messen Zeit gegen Ziele. Jedes SLA hat eigene Start-, Pause- und Stopp-Bedingungen; das Pausieren ist optional und wird typischerweise genutzt, während auf eine Antwort des Kunden gewartet wird, und die Messung endet, sobald irgendeine Stopp-Bedingung erfüllt ist.",
            ],
          },
          {
            type: "p",
            text: "In der Praxis setzen Flows die Felder, nach denen Warteschlangen und SLA-Ziele filtern. Wenn ein Flow die Priorität oder ein benutzerdefiniertes Feld anhand des Anfragetyps oder des Nachrichteninhalts setzt, greifen die richtige Warteschlange und das richtige SLA-Ziel das Arbeitselement automatisch auf.",
          },
        ],
      },
      {
        heading: "Smart Values",
        blocks: [
          {
            type: "p",
            text: "Mit Smart Values fügt ein Flow Daten aus dem Arbeitselement in Felder, Kommentare, E-Mails und Web-Request-Bodys ein. {{issue.key}} liefert den Schlüssel, zum Beispiel PROJ-123. Andere Felder folgen demselben Muster mit dem Namen des Felds, auch benutzerdefinierte Felder; haben zwei Felder denselben Namen, verwenden Sie stattdessen die ID des benutzerdefinierten Felds.",
          },
          {
            type: "p",
            text: "Die Atlassian-Oberfläche sagt inzwischen 'work item', wo früher 'issue' stand, aber die Smart-Value-Syntax in der Dokumentation verwendet weiterhin das Präfix issue. Über mehrwertige Felder können Sie mit der #-Syntax iterieren, abgeschlossen mit {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks und externe Systeme",
        blocks: [
          {
            type: "p",
            text: "Webhooks funktionieren in beide Richtungen:",
          },
          {
            type: "ul",
            items: [
              "Ausgehend: Die Aktion 'Send web request' ruft beim Ausführen eines Flows die API eines anderen Systems auf und kann Antwortdaten für spätere Schritte zurückgeben. Ihr empfangendes System muss Anfragen aus dem Netzwerk von Atlassian akzeptieren.",
              "Eingehend: Der Trigger für eingehende Webhooks gibt einem Flow eine eigene URL, sodass ein externes System (ein Chatbot, ein Abrechnungstool, ein Monitoring-Tool) den Flow mit einer HTTP-Anfrage starten kann.",
              "Chat-Tools: Die Aktionen 'Send Slack message' und 'Send Microsoft Teams message' posten in Channels, mit Smart Values im Nachrichtentext.",
            ],
          },
        ],
      },
      {
        heading: "Nutzungslimits und was Sie zuerst automatisieren sollten",
        blocks: [
          {
            type: "p",
            text: "Stand Oktober 2026 misst Jira Cloud die Automatisierungsnutzung pro Produkt und Monat, mit Limits, die von Ihrem Plan abhängen. Atlassian beschreibt auf der Seite 'How is your automation usage calculated', wie die Nutzung gezählt wird; prüfen Sie diese Seite und Ihre aktuelle Nutzung, bevor Sie häufig laufende zeitgesteuerte Flows hinzufügen.",
          },
          {
            type: "p",
            text: "Typische erste Flows für einen Service Desk:",
          },
          {
            type: "ul",
            items: [
              "Priorität, Komponente oder Bearbeiter bei der Erstellung anhand des Anfragetyps und des Inhalts der Anfrage setzen.",
              "In einem Eskalations-Channel posten, wenn eine SLA-Verletzung kurz bevorsteht.",
              "Den Kunden erinnern, wenn eine Anfrage auf ihn wartet, und sie nach einer festgelegten Zeit mit einem Kommentar lösen.",
              "Neue Anfragen mit hoher Priorität per 'Send web request' an ein externes System senden.",
            ],
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab arbeitet auf Ihrer bestehenden Jira-Service-Management-Site, ohne Plattformwechsel, und kombiniert native Automatisierung mit APIs, Webhooks sowie Make oder n8n, wo ein Flow andere Tools erreichen muss. Ticket Routing & Categorization kostet einmalig {{price:routing}}; Custom Automation kostet {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Starten Sie mit einem kostenlosen 30-minütigen Health-Check-Gespräch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Sind Jira-Automatisierungsregeln und Flows dasselbe?",
        a: "Ja. Die neuere Dokumentation und Oberfläche von Atlassian verwenden 'flow' für das, was früher Automatisierungsregel hieß. Der Aufbau ist derselbe: Trigger, Bedingungen und Aktionen.",
      },
      {
        q: "Kann die Automatisierung in Jira Service Management auf SLA-Verletzungen reagieren?",
        a: "Ja. Beim Trigger 'SLA threshold breached' wählen Sie ein SLA und lassen den Flow auslösen, entweder wenn es verletzt wurde oder wenn die Verletzung kurz bevorsteht.",
      },
      {
        q: "Wie sende ich Daten aus Jira Service Management an ein anderes System?",
        a: "Verwenden Sie die Aktion 'Send web request' in einem Flow. Sie ruft beim Ausführen des Flows die API des anderen Systems auf und kann Antwortdaten an spätere Schritte zurückgeben.",
      },
      {
        q: "Was ist der Unterschied zwischen einem Anfragetyp und einem Arbeitstyp?",
        a: "Ein Anfragetyp ist das kundenseitige Formular im Portal; der dahinterliegende Arbeitstyp enthält Workflow und Felder. Jeder Anfragetyp nutzt einen Arbeitstyp, und ein Arbeitstyp kann viele Anfragetypen bedienen.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "slack-support-automation",
    slug: "slack-kundensupport-automatisierung",
    category: "helpdesks",
    navLabel: "Slack-Support-Automatisierung",
    primaryKeyword: "Slack Kundensupport Automatisierung",
    title: "Slack-Kundensupport automatisieren: Alerts und Eskalationen",
    description:
      "Slack-Kundensupport automatisieren: Eskalations-Alerts, Workflow Builder, Incoming Webhooks, Bolt-Apps, Integration mit Zendesk, Freshdesk, Jira, Slack Connect.",
    h1: "Slack-Kundensupport automatisieren: Alerts, Eskalationen und Kunden-Channels",
    intro:
      "Für die meisten Supportteams ist Slack nicht der Ort, an dem Kunden schreiben. Dort eskaliert das Team, wird alarmiert und stimmt sich ab. Kundensupport-Automatisierung in Slack heißt: die richtigen Ticket-Ereignisse in den richtigen Channel bringen, Slack-Nachrichten bei Bedarf in Tickets umwandeln und – für B2B-Teams – Kunden direkt in Slack-Connect-Channels betreuen.",
    keyFacts: [
      "Workflows im Workflow Builder können über einen Link, einen Webhook, einen Zeitplan, eine gepostete Nachricht, eine Emoji-Reaktion oder den Beitritt zu einem Channel starten.",
      "Ein Incoming Webhook ist eine eindeutige URL, die an einen Channel gebunden ist; Sie senden per POST eine JSON-Payload an sie, um eine Nachricht zu posten.",
      "Slack erlaubt Apps in der Regel höchstens eine Nachricht pro Sekunde und Channel.",
      "Zendesk, Freshdesk und Jira Service Management bieten jeweils eine Slack-Integration zum Erstellen von Tickets und Senden von Benachrichtigungen.",
      "Mit Slack Connect arbeiten Personen aus anderen Organisationen in einem gemeinsamen Channel mit Ihnen zusammen.",
    ],
    sections: [
      {
        heading: "Möglichkeiten, Supportarbeit in Slack zu automatisieren",
        blocks: [
          {
            type: "p",
            text: "Es gibt vier zentrale Bausteine, von No-Code bis Custom Code. Wählen Sie den einfachsten, der die Aufgabe erfüllt.",
          },
          {
            type: "table",
            caption: "Slack-Automatisierungsoptionen für Supportteams",
            head: ["Option", "Was es ist", "Am besten für"],
            rows: [
              [
                "Helpdesk-Integration",
                "Die Slack-App von Zendesk, Freshdesk oder Jira Service Management",
                "Ticket-Benachrichtigungen in Channels und Tickets aus Nachrichten erstellen",
              ],
              [
                "Workflow Builder",
                "Das integrierte No-Code-Workflow-Tool von Slack",
                "Aufnahmeformulare, Eskalations-Checklisten, geplante Erinnerungen",
              ],
              [
                "Incoming Webhook",
                "Eine URL, die eine JSON-Nachricht in einen Channel postet",
                "Einseitige Alerts aus Ihrem Helpdesk, aus Skripten oder aus Make/n8n",
              ],
              [
                "Eigene Slack-App (Bolt)",
                "Ihre eigene App, die auf Ereignisse und Befehle hört",
                "Zweiseitige Aktionen: Buttons, Slash-Befehle, Abfragen in anderen Systemen",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integrationen vom Helpdesk nach Slack",
        blocks: [
          {
            type: "p",
            text: "Beginnen Sie mit dem, was Ihr Helpdesk bereits mitbringt:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: Agenten können Tickets mit dem Shortcut /zendesk erstellen, über eine Nachrichtenaktion, die eine Slack-Nachricht in ein Ticket umwandelt, über die Zendesk-App in der Seitenleiste oder per @zendesk-Erwähnung in einem Slack-Connect-Channel. So erstellte Tickets erhalten das Tag created_from_slack. Admins legen per Trigger fest, welche Ereignisse in welchen Channels gepostet werden, und die Zendesk-App muss in jeden Channel eingeladen werden, der Benachrichtigungen erhält.",
              "Freshdesk: Die Slack-App kann eine Channel-Nachricht in ein Ticket umwandeln, mit der Nachricht als Beschreibung, und Tickets lassen sich auch direkt in Slack von Grund auf erstellen. Auch Slack-Mitglieder, die keine Freshdesk-Agenten sind, können Tickets erstellen.",
              "Jira Service Management: Chat in Slack verbindet Anfrage-Channels, in denen Leute um Hilfe bitten, mit einem Agenten-Channel. Agenten können ein Arbeitselement erstellen, indem sie mit dem Emoji :ticket: auf eine Nachricht reagieren, und Anfragetypen müssen mit einem Anfrage-Channel verbunden sein, damit sie dort verfügbar sind.",
            ],
          },
          {
            type: "p",
            text: "Wenn die integrierte Anbindung ein Ereignis, das Ihnen wichtig ist, nicht abdeckt, weichen Sie auf einen Incoming Webhook oder den Workflow Builder aus, die unten beschrieben sind.",
          },
        ],
      },
      {
        heading: "Workflow Builder für interne Eskalationen",
        blocks: [
          {
            type: "p",
            text: "Mit dem Workflow Builder kann jeder mehrstufige Workflows ohne Code bauen. Ein Workflow startet durch einen Trigger: einen teilbaren Link, einen Webhook, einen Zeitplan, die Aktualisierung eines Listeneintrags, eine in einem Channel gepostete Nachricht, den Beitritt einer Person zu einem Channel oder eine Emoji-Reaktion. Die Schritte laufen in der von Ihnen festgelegten Reihenfolge und können Slack-Aktionen wie das Senden einer Nachricht sein, Connector-Schritte für Dienste von Drittanbietern oder von Entwicklern gebaute Custom Steps. Variablen geben Daten aus früheren Schritten an spätere weiter, Buttons pausieren einen Workflow, bis jemand klickt, und Verzweigungen führen Personen je nach Bedingungen über unterschiedliche Pfade.",
          },
          {
            type: "p",
            text: "Typische Einsätze im Support: ein per Link gestartetes Eskalationsformular, das Ticket-URL und Schweregrad abfragt und eine strukturierte Nachricht in einen Eskalations-Channel postet; ein Workflow per Emoji-Reaktion, der den diensthabenden Lead hinzuzieht; oder eine geplante wöchentliche Erinnerung, liegengebliebene Tickets zu prüfen.",
          },
        ],
      },
      {
        heading: "Incoming Webhooks und Bolt-Apps",
        blocks: [
          {
            type: "p",
            text: "Ein Incoming Webhook ist der einfachste Weg, Alerts aus einem beliebigen System nach Slack zu schicken. Jede Webhook-URL ist an einen Channel gebunden; Sie senden einen HTTP-POST mit einem JSON-Body, der ein text-Feld enthält, optional ergänzt um Block-Kit-Blöcke für reichhaltigere Layouts. Jeder, der die URL kennt, kann in Ihrem Workspace posten – behandeln Sie sie also wie ein Passwort und halten Sie sie aus öffentlichem Code heraus.",
          },
          {
            type: "p",
            text: "Achten Sie auf das Volumen. Laut den Rate Limits von Slack sollten Apps in der Regel höchstens eine Nachricht pro Sekunde und Channel posten, egal ob über chat.postMessage oder einen Incoming Webhook. Kurze Spitzen werden toleriert, aber anhaltende Überschreitungen erhalten HTTP-429-Antworten mit einem Retry-After-Header. Bei stark ausgelasteten Queues bündeln Sie Alerts oder senden eine Zusammenfassung, statt eine Nachricht pro Ticket.",
          },
          {
            type: "p",
            text: "Wenn Sie zweiseitige Interaktion brauchen, etwa einen Button, der ein Ticket zuweist, oder einen Slash-Befehl, der eine Bestellung nachschlägt, bauen Sie eine Slack-App mit Bolt, dem Framework von Slack für JavaScript, Python und Java. Eine Bolt-App hört auf Ereignisse und Slash-Befehle in Ihrem Workspace und reagiert darauf, zum Beispiel indem sie die API Ihres Helpdesks aufruft.",
          },
        ],
      },
      {
        heading: "Slack Connect für Kunden-Channels",
        blocks: [
          {
            type: "p",
            text: "Mit Slack Connect teilen Sie einen Channel mit Personen aus anderen Organisationen, die jeweils in ihrem eigenen Slack arbeiten. B2B-Supportteams nutzen das als eigenen Channel pro Schlüsselkunde. Sie laden eine externe Organisation über die Channel-Einstellungen ein und wählen eine Berechtigungsstufe: nur posten oder posten, einladen und mehr. Admins können einschränken, wer externe Personen einladen darf. Ein Slack-Connect-Channel kann bis zu 250 Organisationen umfassen, Ihre eigene eingeschlossen.",
          },
          {
            type: "p",
            text: "Auch Kunden-Channels brauchen Ticket-Tracking. Die Zendesk-Integration unterstützt @zendesk-Erwähnungen in Slack-Connect-Channels, mit weniger Optionen für externe Nutzer; bei anderen Helpdesks kann eine kleine Bolt-App oder ein Make/n8n-Flow markierte Nachrichten in Tickets umwandeln.",
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab verbindet Slack mit dem Helpdesk, den Sie bereits nutzen (Zendesk, Freshdesk, Jira oder interne Tools), über APIs, Webhooks sowie Make oder n8n, ohne Plattformwechsel. Automated Reports per Slack oder E-Mail kosten einmalig {{price:reports}}; Custom Automation für zweiseitige Slack-Abläufe kostet {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch und eine Basisdokumentation, und die meisten Setups dauern 1–3 Wochen. Starten Sie mit einem kostenlosen 30-minütigen Health-Check-Gespräch.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich Helpdesk-Tickets aus Slack-Nachrichten erstellen?",
        a: "Ja. Zendesk und Freshdesk bieten beide Slack-Apps, die eine Nachricht in ein Ticket umwandeln, und Agenten in Jira Service Management können aus einer Nachricht in einem Anfrage-Channel ein Arbeitselement erstellen, indem sie mit dem Emoji :ticket: reagieren.",
      },
      {
        q: "Wie schicke ich Support-Alerts am einfachsten nach Slack?",
        a: "Nutzen Sie die Slack-Integration Ihres Helpdesks, wenn sie das benötigte Ereignis abdeckt. Andernfalls senden Sie eine JSON-Payload per POST an einen Incoming Webhook von Slack, über die Webhook-Aktion Ihres Helpdesks oder über Make oder n8n.",
      },
      {
        q: "Kann ein externes System einen Slack-Workflow starten?",
        a: "Ja. Der Workflow Builder unterstützt einen Webhook-Trigger, sodass ein externes System einen Workflow mit einer HTTP-Anfrage starten kann.",
      },
      {
        q: "Gibt es ein Limit, wie viele Nachrichten ich in einem Channel posten kann?",
        a: "Slack erlaubt Apps in der Regel höchstens eine Nachricht pro Sekunde und Channel. Kurze Spitzen werden toleriert, aber anhaltende Überschreitungen führen zu HTTP-429-Fehlern.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    key: "intercom-automation",
    slug: "intercom-automatisierung",
    category: "helpdesks",
    navLabel: "Intercom-Automatisierung",
    primaryKeyword: "Intercom Automatisierung",
    title: "Intercom-Automatisierung: Workflows, Fin, Routing und API",
    description:
      "So funktioniert Intercom-Automatisierung: Trigger, Branches und Aktionen in Workflows, Zuweisung im Team-Posteingang, Fin AI Agent, Slack, Jira, Webhooks, API.",
    h1: "Intercom-Automatisierung: Workflows, Zuweisung, Fin und die API",
    intro:
      "Intercom-Automatisierung entsteht vor allem in Workflows: einem visuellen Builder, in dem ein Trigger den Ablauf startet, Verzweigungen (Branches) einen Pfad wählen und Aktionen die Arbeit erledigen, etwa Taggen, Zuweisen oder Fin antworten lassen. Die Zuweisungsmethode des jeweiligen Team-Posteingangs entscheidet dann, welches Teammitglied die Konversation erhält, und Webhooks sowie die REST API decken alles ab, was außerhalb von Intercom passieren muss. Im Folgenden sehen Sie, wie sich die einzelnen Bausteine verhalten und wo Sie anfangen.",
    keyFacts: [
      "Workflows werden in einem visuellen Builder erstellt und können kundenseitig sein oder still im Hintergrund für Teammitglieder laufen.",
      "Bei Verzweigungen folgt eine Konversation nur dem ersten passenden Pfad; 'Apply rules' führt jeden passenden Pfad aus.",
      "Auf eine Konversation kann nur ein SLA angewendet werden; spätere SLA-Aktionen aus anderen Workflows werden ignoriert.",
      "Die ausgewogene Zuweisung (Balanced assignment) gibt eine Konversation an das berechtigte Teammitglied mit den wenigsten offenen Konversationen.",
      "Webhook-Abonnements werden im Developer Hub angelegt, nicht über die API, und der Endpunkt muss HTTPS verwenden.",
    ],
    sections: [
      {
        heading: "So sind Intercom Workflows aufgebaut",
        blocks: [
          {
            type: "p",
            text: "Workflows sind bei Intercom der zentrale Ort, um Kundenkonversationen und Abläufe im Team zu automatisieren. Sie bauen sie in einem visuellen Builder aus wiederverwendbaren Schritten. Ein Workflow kann kundenseitig sein, etwa ein Bot, der begrüßt und vorsortiert, oder still im Hintergrund für Ihr Team laufen. Jeder Workflow kombiniert dieselben wenigen Arten von Schritten.",
          },
          {
            type: "table",
            caption: "Die Bausteine eines Intercom-Workflows",
            head: ["Baustein", "Funktion", "Beispiele"],
            rows: [
              [
                "Trigger",
                "Legt fest, wann der Workflow startet und für wen",
                "Wenn eine Konversation beginnt, während einer Konversation, bei einem Ticket-Ereignis oder wenn ein anderer Workflow ihn als wiederverwendbaren Workflow aufruft",
              ],
              [
                "Verzweigungen (Branches)",
                "Prüfen Bedingungen und schicken die Konversation über den ersten Pfad, dessen Bedingung zutrifft",
                "Getrennte Pfade für unterschiedliche Zielgruppen, Kanäle oder Themen",
              ],
              [
                "Apply rules",
                "Prüft jeden Pfad und führt die Aktionen jedes passenden Pfads aus",
                "Mehrere unabhängige Tags oder Attribute in einem Schritt setzen",
              ],
              [
                "Aktionen",
                "Erledigen die Arbeit",
                "Taggen, zuweisen, snoozen, Priorität setzen, SLA anwenden, Fin antworten lassen, Slack benachrichtigen",
              ],
            ],
          },
          {
            type: "p",
            text: "Der Unterschied zwischen Verzweigungen und 'Apply rules' ist wichtig, wenn sich Bedingungen überschneiden. Bei Verzweigungen folgt eine Konversation, die mehrere Bedingungen erfüllt, nur dem ersten passenden Pfad, von oben nach unten gelesen – stellen Sie also die spezifischsten Bedingungen an den Anfang. 'Apply rules' führt die Aktionen jedes passenden Pfads aus und eignet sich daher für Schritte, die sich ergänzen statt miteinander zu konkurrieren.",
          },
        ],
      },
      {
        heading: "Inbox-Automatisierung: Zuweisung, Priorität und SLAs",
        blocks: [
          {
            type: "p",
            text: "Die meiste Inbox-Automatisierung ist ein Hintergrund-Workflow aus Aktionen. 'Assign' schickt eine Konversation an ein ausgewähltes Teammitglied oder einen Team-Posteingang. 'Tag' fügt ein Tag hinzu; Tags werden in Ihren Workspace-Einstellungen angelegt und verwaltet. 'Snooze' entfernt die Konversation vorübergehend aus dem Posteingang des Teammitglieds; antwortet der Kunde oder ein Teammitglied während des Snoozens, endet der Workflow. 'Set priority' legt fest, wie dringend die Konversation ist.",
          },
          {
            type: "p",
            text: "SLAs werden ebenfalls per Aktion angewendet, aber einer Konversation kann nur ein SLA hinzugefügt werden. Versucht ein späterer Workflow, ein weiteres SLA anzuwenden, wird diese Aktion ignoriert – legen Sie also fest, welcher Workflow für SLAs zuständig ist, bevor Sie mehrere davon bauen.",
          },
          {
            type: "p",
            text: "Sobald eine Konversation in einem Team-Posteingang landet, entscheidet dessen Zuweisungsmethode, wer sie bekommt: manuell, Round Robin oder ausgewogen (balanced). Die ausgewogene Zuweisung gibt jede neue Konversation an das berechtigte Teammitglied mit den wenigsten offenen Konversationen und löst Gleichstände zugunsten des Teammitglieds auf, das am längsten auf eine gewartet hat. Berechtigt ist ein Teammitglied, wenn es aktiv ist und unter seinem Zuweisungslimit liegt. Intercom empfiehlt Supportteams die ausgewogene Zuweisung.",
          },
          {
            type: "note",
            text: "Ein einfaches Muster für den Anfang: Ein Hintergrund-Workflow für neue Konversationen taggt sie nach Thema, setzt die Priorität, wendet ein einziges SLA an und weist sie dem richtigen Team-Posteingang zu. Die Zuweisungsmethode des Posteingangs wählt dann das Teammitglied aus.",
          },
        ],
      },
      {
        heading: "Fin AI Agent in Ihren Workflows",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent ist der KI-Agent von Intercom zum Beantworten von Kundenfragen. Er antwortet auf Basis der Inhalte, die Sie ihm geben: öffentliche Artikel, Dokumente, Snippets und öffentliche URLs, die Sie unter Knowledge > Sources verwalten. Er berücksichtigt die Zielgruppen-Einstellungen von Intercom-Artikeln und antwortet daher nicht aus privaten oder eingeschränkten Artikeln, die der Kunde im Messenger nicht sehen darf.",
          },
          {
            type: "p",
            text: "Fin wird im Intercom Messenger für Web, iOS und Android unterstützt sowie per E-Mail, WhatsApp, SMS, Facebook und Instagram. In Workflows lässt ein Schritt 'Let Fin answer' Fin an jeder Stelle des Ablaufs antworten und weitermachen, bis das Anliegen gelöst oder an ein Teammitglied eskaliert ist.",
          },
          {
            type: "p",
            text: "Planen Sie die Übergabe so sorgfältig wie die Antworten. Legen Sie fest, in welchen Team-Posteingang eine eskalierte Konversation gehen soll, und bauen Sie diesen Pfad in den Workflow ein, damit sie nie unzugewiesen liegen bleibt.",
          },
        ],
      },
      {
        heading: "Webhooks und die Intercom REST API",
        blocks: [
          {
            type: "p",
            text: "Wenn etwas aus Intercom ein anderes System erreichen muss, verwenden Sie Webhooks. Sie richten sie im Developer Hub ein: Öffnen Sie Ihre App, gehen Sie zu Configure und dann zu Webhooks, und geben Sie die URL Ihres Endpunkts ein. Der Endpunkt muss HTTPS verwenden und eine HEAD-Anfrage akzeptieren, mit der Intercom die URL validiert. Abonnements lassen sich nur im Developer Hub anlegen, nicht über die API.",
          },
          {
            type: "p",
            text: "Als Nächstes wählen Sie Topics. Ein Topic ist ein Ereignis in Intercom, das den Webhook auslöst, und jedes Topic ist an eine oder mehrere Berechtigungen gebunden, die Ihre App haben muss. Intercom sendet für jedes abonnierte Topic einen HTTP-POST an Ihren Endpunkt, und jede Payload enthält das Topic und einen Zähler der Zustellversuche. Mit dem Button 'Send a test request' im Webhooks-Bereich können Sie den Endpunkt prüfen.",
          },
          {
            type: "p",
            text: "Um aus Ihrem eigenen Code mit Konversationen zu arbeiten, nutzen Sie die REST API. Anfragen gehen an api.intercom.io, mit einem Access Token als Bearer-Token im Authorization-Header und einem Intercom-Version-Header, der standardmäßig der in Ihrer App eingestellten Version entspricht. Eine Antwort ist zum Beispiel ein POST an /conversations/{id}/reply mit einem JSON-Body, der Nachrichtentyp, Autortyp und Nachrichtentext festlegt.",
          },
          {
            type: "p",
            text: "Gute erste Kandidaten für die Intercom-Automatisierung:",
          },
          {
            type: "ul",
            items: [
              "Neue Konversationen taggen und dem richtigen Team-Posteingang zuweisen.",
              "Ein SLA pro Konversation anwenden und die Priorität für Key Accounts erhöhen.",
              "Konversationsereignisse an einen Webhook senden, damit Make oder n8n andere Systeme aktualisieren kann.",
              "Neue oder eskalierte Konversationen in einem Slack-Channel posten.",
            ],
          },
        ],
      },
      {
        heading: "Slack- und Jira-Integrationen",
        blocks: [
          {
            type: "p",
            text: "Für Slack-Alerts stellen Sie den Zweck eines Slack-Channels auf 'notification-only' und fügen dann einem Workflow einen Schritt 'Notify Slack' hinzu. Die Intercom-App postet die Benachrichtigung, und spätere Benachrichtigungen zur selben Konversation erscheinen als Thread-Antworten unter der ursprünglichen Nachricht. Antworten, die in diesem Thread geschrieben werden, gehen nicht an die Intercom-Konversation zurück; Teammitglieder antworten Kunden also weiterhin in Intercom.",
          },
          {
            type: "p",
            text: "Für Eskalationen an die Entwicklung kann die Intercom-App Jira for Tickets automatisch Jira-Issues aus den von Ihnen festgelegten Tickettypen erstellen, Jira-Issue-Status zurück in die Intercom-Tickets spiegeln und Notizen synchronisieren. Ihre Basis-Automatisierung überträgt nur Titel und Beschreibung; für weitere Felder nutzen Sie die benutzerdefinierte Automatisierung auf Basis von Workflows-Vorlagen. Die App erstellt keine Issues direkt aus Konversationen; eine Konversation muss also zuerst in ein Ticket umgewandelt werden.",
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut auf den Tools auf, die Sie bereits nutzen, ohne Plattformwechsel, mit APIs, Webhooks sowie Make oder n8n. Intercom hat sowohl eine REST API als auch Webhooks und lässt sich daher fast sicher anbinden; das konkrete Setup wird in einem kostenlosen 30-minütigen Health-Check-Gespräch bestätigt. Ticket Routing & Categorization ist ein einmaliges Projekt für {{price:routing}}, und Custom Automation für Abläufe über mehrere Systeme kostet {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch, eine Basisdokumentation und keine versteckten Kosten, und die meisten Setups dauern 1–3 Wochen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist der Unterschied zwischen Verzweigungen und 'Apply rules' in Intercom Workflows?",
        a: "Verzweigungen schicken die Konversation nur über den ersten Pfad, dessen Bedingung zutrifft, geprüft von oben nach unten. 'Apply rules' prüft jeden Pfad und führt die Aktionen jedes passenden Pfads aus.",
      },
      {
        q: "Welche Zuweisungsmethode empfiehlt Intercom für Supportteams?",
        a: "Die ausgewogene Zuweisung (Balanced assignment). Sie gibt jede Konversation an das aktive Teammitglied unter seinem Zuweisungslimit, das die wenigsten offenen Konversationen hat; bei Gleichstand geht sie an das Teammitglied, das am längsten gewartet hat.",
      },
      {
        q: "Welche Inhalte nutzt Fin AI Agent, um Kunden zu antworten?",
        a: "Öffentliche Artikel, Dokumente, Snippets und öffentliche URLs, die Sie unter Knowledge > Sources hinzufügen. Fin berücksichtigt die Zielgruppen-Einstellungen von Artikeln und antwortet daher nicht aus Artikeln, die der Kunde nicht sehen kann.",
      },
      {
        q: "Kann ich Intercom-Webhook-Abonnements über die API anlegen?",
        a: "Nein. Webhook-Abonnements werden im Developer Hub eingerichtet. Der Endpunkt muss HTTPS verwenden und eine HEAD-Anfrage akzeptieren, mit der Intercom ihn validiert.",
      },
      {
        q: "Können Teammitglieder Kunden aus den Slack-Benachrichtigungen von Intercom antworten?",
        a: "Nein. In einem Slack-Channel mit dem Zweck 'notification-only' werden Antworten im Thread einer Benachrichtigung nicht an die Intercom-Konversation zurückgesendet.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    key: "hubspot-service-hub-automation",
    slug: "hubspot-service-hub-automatisierung",
    category: "helpdesks",
    navLabel: "HubSpot Service Hub automatisieren",
    primaryKeyword: "HubSpot Service Hub Automatisierung",
    title: "HubSpot Service Hub automatisieren: Tickets, Workflows, SLAs",
    description:
      "HubSpot Service Hub automatisieren: Help-Desk-Kanäle und Routing, Ticket-Pipelines und Status, SLA-Ziele, Ticket-Workflows, Chatbots, Webhooks und die API.",
    h1: "HubSpot Service Hub automatisieren: Help Desk, Tickets, Workflows und die API",
    intro:
      "Automatisierung in HubSpot Service Hub dreht sich um das Ticket: Help-Desk-Kanäle erstellen Tickets, das Routing weist sie zu, Pipelines und Status verfolgen sie, und ticketbasierte Workflows wirken auf sie. Regelbasierte Chatbots sammeln Details, bevor überhaupt ein Ticket existiert, und die Webhook-Aktion in Workflows sowie die CRM API verbinden HubSpot mit allem anderen. Im Folgenden sehen Sie, was die einzelnen Bausteine leisten und wo Sie anfangen.",
    keyFacts: [
      "Standardmäßig erstellt der Help Desk automatisch Tickets aus jedem Kanal, den Sie mit ihm verbinden.",
      "Die Standard-Pipeline Support Pipeline hat vier Ticketstatus: New, Waiting on contact, Waiting on us und Closed.",
      "SLA-Ziele im Help Desk können die Zeit bis zur ersten Antwort, bis zur nächsten Antwort und bis zum Schließen messen.",
      "Die Webhook-Aktion in Workflows akzeptiert nur URLs, die mit HTTPS beginnen.",
      "Tickets werden über die API mit einem POST an /crm/v3/objects/tickets erstellt.",
    ],
    sections: [
      {
        heading: "Was Sie in HubSpot Service Hub automatisieren können",
        blocks: [
          {
            type: "p",
            text: "Die Automatisierung in Service Hub verteilt sich auf mehrere Tools, die alle auf den Ticket-Datensatz wirken. Entscheiden Sie, wohin eine Regel gehört, bevor Sie sie bauen; die meisten Probleme entstehen, wenn dieselbe Logik an zwei Stellen lebt.",
          },
          {
            type: "table",
            caption: "Wo welche Art von Service-Hub-Automatisierung angesiedelt ist",
            head: ["Tool", "Was es automatisiert", "Typischer Einsatz"],
            rows: [
              [
                "Help-Desk-Kanäle und Routing",
                "Tickets aus verbundenen Kanälen erstellen und zuweisen",
                "Jede Support-E-Mail und jeder Chat wird zum Ticket und erreicht das richtige Team",
              ],
              [
                "Ticket-Pipelines und Status",
                "Die Phasen, die ein Ticket durchläuft, und ob jede als offen oder geschlossen gilt",
                "Getrennte Pipelines für unterschiedliche Arten von Supportarbeit",
              ],
              [
                "SLA-Ziele",
                "Zielwerte für erste Antwort, nächste Antwort und Schließen",
                "Ein schnelleres Antwortziel für Chat als für E-Mail",
              ],
              [
                "Ticketbasierte Workflows",
                "Aktionen auf Tickets, die die Aufnahme-Trigger erfüllen",
                "Ticketinhaber rotieren, Eigenschaften aktualisieren, verzögerte Follow-ups",
              ],
              [
                "Regelbasierte Chatbots",
                "Fragen, Ticketerstellung und Übergabe im Chat",
                "Bestelldaten erfassen, bevor ein Agent übernimmt",
              ],
              [
                "Webhooks und die API",
                "Ticketdaten nach außen senden und Tickets aus anderen Systemen erstellen oder aktualisieren",
                "Tickets mit Jira oder internen Tools synchronisieren",
              ],
            ],
          },
        ],
      },
      {
        heading: "Help-Desk-Kanäle und Routing",
        blocks: [
          {
            type: "p",
            text: "Der Help Desk ist der Arbeitsbereich von HubSpot für ticketbasierten Support. Sie können Chat-, E-Mail-, Formular-, Anruf- und Facebook-Messenger-Kanäle mit ihm verbinden. Standardmäßig werden Tickets automatisch aus jedem verbundenen Kanal erstellt, und HubSpot empfiehlt, alle Ihre Support-Kanäle zu verbinden, weil Tickets aus nicht verbundenen Kanälen im Help Desk womöglich ohne Betreff und Thread erscheinen.",
          },
          {
            type: "p",
            text: "Das Routing wird pro Kanal eingestellt. Wenn Sie etwa eine Team-E-Mail verbinden, wählen Sie Standard-Pipeline, -Status und -Priorität für neue Tickets und dann eine Routing-Option:",
          },
          {
            type: "ul",
            items: [
              "Bestimmte Benutzer oder Teams.",
              "Den Kontaktinhaber.",
              "Skillbasiertes Routing, das Tickets den Skills der Agenten zuordnet.",
              "Einen Zuweisungs-Workflow, wenn Sie Logik über die integrierten Optionen hinaus brauchen.",
              "Niemand – die Tickets bleiben dann in der Ansicht Unassigned, wo Agenten sie übernehmen.",
            ],
          },
          {
            type: "note",
            text: "Automatisches und skillbasiertes Routing hängen von Ihren Seats und Ihrem Abonnement ab. Prüfen Sie, was Ihr Account umfasst, bevor Sie Ihre Abläufe auf eine bestimmte Routing-Option ausrichten.",
          },
        ],
      },
      {
        heading: "Ticket-Pipelines, Status und SLA-Ziele",
        blocks: [
          {
            type: "p",
            text: "Tickets durchlaufen eine Pipeline, und bei Tickets heißen die Pipeline-Phasen Status. Die Standard-Pipeline Support Pipeline hat vier: New, Waiting on contact, Waiting on us und Closed. Sie verwalten Pipelines unter Settings > Objects > Tickets > Pipelines, und jeden Status, den Sie hinzufügen, müssen Sie als Open oder Closed markieren.",
          },
          {
            type: "p",
            text: "Diese Entscheidung steuert die Automatisierung. Wechselt ein Ticket in einen geschlossenen Status, wird sein Close date auf heute gesetzt; wechselt es zurück in einen offenen Status, wird das Close date gelöscht. Sie können dieses Verhalten pro Pipeline anpassen. Weil Workflows und Berichte nach Status filtern, halten Sie die Zahl der Status klein und eindeutig.",
          },
          {
            type: "p",
            text: "SLA-Ziele im Help Desk legen Zielwerte für die Zeit bis zur ersten Antwort, bis zur nächsten Antwort und bis zum Schließen fest. Ein Ziel kann für alle Tickets gelten, für Tickets mit einem bestimmten Eigenschaftswert oder für eine Kombination von Eigenschaften, und jede Regel lässt sich auf festgelegte Zeiten und eine Zeitzone beschränken. HubSpots eigene Beispiele sind ein kürzeres Antwortziel für Enterprise-Kunden und ein schnelleres Antwortziel für Chat als für E-Mail. Das Snoozen eines Tickets wirkt sich nicht auf sein SLA aus.",
          },
        ],
      },
      {
        heading: "Ticketbasierte Workflows",
        blocks: [
          {
            type: "p",
            text: "Ein ticketbasierter Workflow nimmt Tickets auf, die seine Aufnahme-Trigger (Enrollment Triggers) erfüllen, und führt dann eine Abfolge von Aktionen aus. Die für Supportarbeit nützlichsten Aktionen:",
          },
          {
            type: "ul",
            items: [
              "Verzögerungen: eine festgelegte Anzahl von Tagen, Stunden und Minuten warten oder bis zu einem Kalenderdatum, einer Datumseigenschaft oder einem Ereignis.",
              "If/then-Verzweigungen: Tickets anhand von Filterkriterien, die mit AND und OR verknüpft sind, auf unterschiedliche Pfade schicken.",
              "'Edit record': Eigenschaftswerte am Ticket oder an einem verknüpften Datensatz setzen, kopieren oder löschen.",
              "'Create record': einen neuen Datensatz anlegen, der standardmäßig mit dem aufgenommenen Ticket verknüpft wird.",
              "'Rotate record to owner': Tickets reihum unter den von Ihnen ausgewählten Benutzern verteilen. Die Rotation wird pro Aktion gezählt und zurückgesetzt, wenn Sie nach dem Aktivieren des Workflows Inhaber hinzufügen oder entfernen.",
              "'Send a webhook': eine externe URL mit Ticketdaten aufrufen, siehe nächster Abschnitt.",
            ],
          },
          {
            type: "p",
            text: "Gute erste Kandidaten für HubSpot-Ticket-Workflows:",
          },
          {
            type: "ul",
            items: [
              "Neue Tickets in einer Pipeline reihum unter einer Gruppe von Agenten verteilen.",
              "Eine Eigenschaft von einem verknüpften Datensatz auf das Ticket kopieren, damit Routing und Berichte sie nutzen können.",
              "Ein Ticket per Webhook an Jira oder ein internes Tool senden, wenn sich sein Status ändert.",
              "Nach dem Schließen eines Tickets eine festgelegte Zeit warten und dann anhand einer Eigenschaft verzweigen, um über ein Follow-up zu entscheiden.",
            ],
          },
        ],
      },
      {
        heading: "Chatbots, Webhooks und die HubSpot API",
        blocks: [
          {
            type: "p",
            text: "Regelbasierte Chatbots übernehmen die ersten Minuten eines Chats. Drei Aktionen leisten den Großteil der Supportarbeit. 'Ask question' speichert die Antwort des Besuchers in einer Kontakteigenschaft und kann Schnellantworten anbieten. 'Submit a ticket' erstellt ein Ticket mit dem Namen, der Pipeline und dem Status, die Sie festlegen, wird aber übersprungen, wenn der Besucher keinen verknüpften Kontaktdatensatz hat. 'Send to team member' übergibt den Chat an einen bestimmten Benutzer oder ein Team, nachdem geprüft wurde, ob diese verfügbar sind, und zeigt andernfalls die Abwesenheitsnachricht an. Hat der Bot Betriebszeiten, werden Chats nur innerhalb dieser Zeiten an ein Teammitglied weitergeleitet.",
          },
          {
            type: "p",
            text: "Die Webhook-Aktion in Workflows sendet Daten nach außen. Wählen Sie POST oder GET und geben Sie eine URL ein, die mit HTTPS beginnt. Ein POST-Body kann alle Eigenschaften des Datensatzes enthalten oder einen angepassten Satz von Schlüsseln, die jeweils einer HubSpot-Eigenschaft zugeordnet sind. Zur Authentifizierung können Sie eine Request-Signatur nutzen, die HubSpot als Header hinzufügt und die Ihr Endpunkt prüft, oder einen API-Schlüssel, der als Secret gespeichert und in einem Header oder Query-Parameter gesendet wird. Sie können die Aktion in ihrem Panel testen, ohne bestehende Datensätze zu verändern. Ob diese Aktion verfügbar ist, hängt von Ihrem Abonnement ab.",
          },
          {
            type: "p",
            text: "Für die Gegenrichtung nutzen Sie die CRM API. Ein POST an /crm/v3/objects/tickets erstellt ein Ticket; geben Sie subject, hs_pipeline_stage (den Status) und hs_pipeline mit, und zwar als interne IDs statt als Labels. Wird keine Pipeline angegeben, wird die Standard-Pipeline verwendet. Ein GET an /crm/v3/properties/tickets listet die Ticket-Eigenschaften Ihres Accounts auf. Apps können außerdem über die Webhooks API Ticket-Ereignisse abonnieren, darunter ticket.creation und ticket.propertyChange, das auslöst, wenn sich eine von Ihnen benannte Eigenschaft an irgendeinem Ticket ändert. Diese Abonnements werden auf App-Ebene konfiguriert und benötigen den Scope tickets.",
          },
        ],
      },
      {
        heading: "Umsetzung",
        blocks: [
          {
            type: "p",
            text: "TascaLab baut auf den Tools auf, die Sie bereits nutzen, ohne Plattformwechsel, mit APIs, Webhooks sowie Make oder n8n. HubSpot hat eine dokumentierte API und unterstützt Webhooks, lässt sich also fast sicher anbinden; das konkrete Setup wird in einem kostenlosen 30-minütigen Health-Check-Gespräch bestätigt. Ticket Routing & Categorization ist ein einmaliges Projekt für {{price:routing}}, Automated Reports per E-Mail oder Slack kosten {{price:reports}} und Custom Automation über mehrere Systeme {{price:custom}}. Jedes Projekt umfasst 30 Tage Support nach dem Launch, eine Basisdokumentation und keine versteckten Kosten, und die meisten Setups dauern 1–3 Wochen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was sind die Standard-Ticketstatus in HubSpot?",
        a: "Die Standard-Pipeline Support Pipeline hat vier Status: New, Waiting on contact, Waiting on us und Closed. Sie können eigene hinzufügen und jeden als Open oder Closed markieren.",
      },
      {
        q: "Kann der HubSpot Help Desk SLAs verfolgen?",
        a: "Ja. SLA-Ziele im Help Desk messen die Zeit bis zur ersten Antwort, bis zur nächsten Antwort und bis zum Schließen, für alle Tickets oder nach Ticket-Eigenschaften, und lassen sich auf festgelegte Zeiten beschränken. Das Snoozen eines Tickets wirkt sich nicht auf sein SLA aus.",
      },
      {
        q: "Kann ein HubSpot-Chatbot Tickets erstellen?",
        a: "Ja. Die Aktion 'Submit a ticket' erstellt ein Ticket mit dem Namen, der Pipeline und dem Status, die Sie festlegen. Sie wird übersprungen, wenn der Besucher keinen verknüpften Kontaktdatensatz hat.",
      },
      {
        q: "Wie sende ich HubSpot-Ticketdaten an ein anderes System?",
        a: "Fügen Sie einem ticketbasierten Workflow eine Webhook-Aktion hinzu, die eine POST- oder GET-Anfrage an eine HTTPS-URL sendet. Apps können außerdem über die Webhooks API Ticket-Ereignisse wie ticket.creation und ticket.propertyChange abonnieren.",
      },
      {
        q: "Was brauche ich, um über die HubSpot API ein Ticket zu erstellen?",
        a: "Senden Sie einen POST an /crm/v3/objects/tickets mit subject, hs_pipeline_stage und hs_pipeline, jeweils als interne IDs. Wenn Sie die Pipeline weglassen, wird die Standard-Pipeline verwendet.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
