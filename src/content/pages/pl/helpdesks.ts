import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "automatyzacja-zendesk",
    category: "helpdesks",
    navLabel: "Automatyzacja Zendesk",
    primaryKeyword: "automatyzacja Zendesk",
    title: "Automatyzacja Zendesk: triggery, automatyzacje i makra",
    description:
      "Jak działa automatyzacja Zendesk: triggery, automatyzacje i makra, cogodzinne uruchomienia, kolejność triggerów, routing omnichannel i skills, webhooki i API.",
    h1: "Automatyzacja Zendesk: triggery, automatyzacje, makra i routing",
    intro:
      "Automatyzacja Zendesk opiera się na trzech narzędziach reguł biznesowych: triggerach, które uruchamiają się natychmiast po utworzeniu lub aktualizacji zgłoszenia, automatyzacjach działających co godzinę według harmonogramu oraz makrach, które agenci stosują ręcznie. Routing (omnichannel lub oparty na umiejętnościach), webhooki i Zendesk API pokrywają to, czego same reguły nie potrafią. Poniżej opisujemy, jak zachowuje się każdy z tych elementów i co warto zautomatyzować w pierwszej kolejności.",
    keyFacts: [
      "Triggery zgłoszeń uruchamiają się natychmiast po utworzeniu lub aktualizacji zgłoszenia, w kolejności, w jakiej są wymienione na liście.",
      "Automatyzacje działają raz na godzinę na niezamkniętych zgłoszeniach, a każda z nich może objąć do 1 000 zgłoszeń na godzinę.",
      "Każda automatyzacja potrzebuje warunku, który jest spełniony tylko raz, albo akcji unieważniającej warunek – inaczej będzie uruchamiać się w kółko.",
      "Makra zawierają wyłącznie akcje, bez warunków, i mogą zrobić tylko to, na co pozwalają uprawnienia agenta, który je stosuje.",
      "Webhook łączy się albo ze zdarzeniami Zendesk, albo z triggerami i automatyzacjami – nie z jednym i drugim naraz.",
    ],
    sections: [
      {
        heading: "Triggery, automatyzacje i makra – porównanie",
        blocks: [
          {
            type: "p",
            text: "Wszystkie trzy narzędzia zmieniają zgłoszenia, ale uruchamiają się w inny sposób. Jak ujmuje to sam Zendesk: triggery i automatyzacje różnią się nie tym, jakie akcje mogą wykonać, lecz tym, jakie warunki je uruchamiają. Makra nie mają żadnych warunków, bo nic nie ocenia zgłoszenia automatycznie. To agent decyduje, kiedy je zastosować.",
          },
          {
            type: "table",
            caption: "Trzy narzędzia reguł biznesowych w Zendesk",
            head: ["Narzędzie", "Co je uruchamia", "Warunki", "Typowe zastosowanie"],
            rows: [
              [
                "Trigger",
                "Utworzenie lub aktualizacja zgłoszenia (działa natychmiast)",
                "Tak",
                "Routing nowych zgłoszeń, ustawianie pól, wysyłanie powiadomień",
              ],
              [
                "Automatyzacja",
                "Harmonogram cogodzinny, zależnie od upływu czasu",
                "Tak, zwykle warunki 'Hours since'",
                "Przypomnienia, eskalacja zaległych zgłoszeń, zamykanie rozwiązanych zgłoszeń",
              ],
              [
                "Makro",
                "Agent stosuje je ręcznie",
                "Nie, tylko akcje",
                "Gotowe odpowiedzi i powtarzalne zmiany wielu pól naraz",
              ],
            ],
          },
          {
            type: "p",
            text: "Te trzy narzędzia dobrze się uzupełniają. Częsty schemat to makro, które dodaje tag, a ten natychmiast uruchamia trigger szukający właśnie tego tagu. Pamiętaj, że makro może zrobić tylko to, na co pozwalają uprawnienia bieżącego użytkownika, więc agent z ograniczonymi uprawnieniami może nie być w stanie zastosować wszystkich zmian zawartych w makrze.",
          },
        ],
      },
      {
        heading: "Jak działa kolejność triggerów",
        blocks: [
          {
            type: "p",
            text: "Za każdym razem, gdy zgłoszenie jest tworzone lub aktualizowane, wszystkie triggery zgłoszeń są wobec niego uruchamiane w cyklu, w kolejności z listy. Jeśli trigger zaktualizuje zgłoszenie, cykl zaczyna się od nowa i każdy trigger działa ponownie, z wyjątkiem tych, które już się uruchomiły i zaktualizowały zgłoszenie. Zmiana wprowadzona przez jeden trigger może więc sprawić, że warunki innego triggera zostaną spełnione, nawet jeśli chwilę wcześniej nie były.",
          },
          {
            type: "p",
            text: "Kolejność triggerów zgłoszeń zalecana przez Zendesk:",
          },
          {
            type: "ol",
            items: [
              "Triggery zmieniające wartości zgłoszenia, takie jak status, priorytet czy inne pola.",
              "Triggery przypisujące zgłoszenie.",
              "Triggery powiadomień – na samym końcu, aby e-maile i wiadomości odzwierciedlały ostateczny stan zgłoszenia.",
            ],
          },
          {
            type: "p",
            text: "Jeśli korzystasz z kategorii triggerów, kolejność kategorii musi odpowiadać kolejności, w jakiej mają działać triggery; zmienisz ją opcją 'Edit order' na liście triggerów. Warunku Ticket | Is | Created używaj w regułach, które mają działać tylko na nowych zgłoszeniach (klasyczny przykład to routing), a Ticket | Is | Updated np. w powiadomieniach o aktualizacjach. Triggery zgłoszeń nie działają na zamkniętych zgłoszeniach.",
          },
        ],
      },
      {
        heading: "Jak często działają automatyzacje Zendesk i jak zapobiegać pętlom",
        blocks: [
          {
            type: "p",
            text: "Automatyzacje działają raz na godzinę na wszystkich niezamkniętych zgłoszeniach. Moment uruchomienia jest przybliżony: automatyzacja startuje w którymś momencie w ciągu godziny, a nie o stałej minucie. Każda automatyzacja może objąć do 1 000 zgłoszeń na godzinę, a nadwyżka czeka na kolejne uruchomienia.",
          },
          {
            type: "p",
            text: "Ponieważ automatyzacje co godzinę ponownie sprawdzają te same zgłoszenia, Zendesk wymaga, aby każda z nich zawierała warunek spełniony tylko raz albo akcję, która unieważnia co najmniej jeden warunek. Bez tego warunki wciąż pasują, a automatyzacja uruchamia się w nieskończonej pętli. Standardowa automatyzacja 'close ticket after solved' załatwia to w naturalny sposób: zamknięcie zgłoszenia wyłącza je z warunku 'Status is Solved'. W przypadku własnych automatyzacji typowym rozwiązaniem jest dodanie tagu i wykluczenie tego tagu w warunkach.",
          },
          {
            type: "note",
            text: "Dla warunków czasowych Zendesk zaleca 'Hours since ... greater than' zamiast 'Hours since ... is'. Warunek 'is' może zostać całkowicie pominięty, jeśli automatyzacja nie uruchomi się dokładnie w tej godzinie. Warunek 'greater than' nadal wymaga akcji unieważniającej lub tagu.",
          },
        ],
      },
      {
        heading: "Opcje routingu przychodzących zgłoszeń",
        blocks: [
          {
            type: "p",
            text: "Triggery mogą kierować zgłoszenia, ustawiając grupę, osobę przypisaną lub umiejętności, ale Zendesk ma też dedykowane funkcje routingu:",
          },
          {
            type: "ul",
            items: [
              "Routing omnichannel przekazuje agentom zgłoszenia z e-maili, połączeń i messagingu na podstawie ich dostępności i obciążenia, a do tego może uwzględniać priorytet i umiejętności.",
              "Umiejętności (skills) mogą być dodawane do zgłoszeń przez triggery i oznaczane jako wymagane lub opcjonalne. Wymagane umiejętności zawężają grono agentów, którzy mogą otrzymać zgłoszenie; opcjonalne mogą wygasnąć, dzięki czemu zgłoszenie wraca do standardowego modelu routingu.",
              "Samodzielny routing oparty na umiejętnościach to model typu pull: zgłoszenia są sortowane według umiejętności, a agenci wybierają pracę z widoków opartych na umiejętnościach. Nie można go używać ze zgłoszeniami głosowymi ani z messagingu.",
            ],
          },
          {
            type: "p",
            text: "W przypadku połączeń telefonicznych routing omnichannel to jedyny sposób, w jaki triggery mogą wpływać na routing, ponieważ zgłoszenie powstaje, gdy tylko połączenie trafi do kolejki. Funkcje routingu różnią się w zależności od planu, więc zanim zaprojektujesz rozwiązanie oparte na umiejętnościach, sprawdź, co obejmuje Twój plan.",
          },
        ],
      },
      {
        heading: "Webhooki i Zendesk API",
        blocks: [
          {
            type: "p",
            text: "Gdy reguła ma przekazać informację innemu systemowi, użyj webhooka. Tworzysz go w Admin Center i wybierasz typ połączenia: zdarzenia Zendesk albo trigger lub automatyzacja. Webhook może korzystać z jednego z nich, nie z obu, a metody połączenia nie da się później zmienić. W triggerze lub automatyzacji dodaj akcję 'Notify webhook', wybierz webhook i wpisz payload. Treść żądania może mieć format JSON, XML lub form-encoded, a payload nie może przekraczać 16 000 znaków. Każdy webhook ma opcję 'Test webhook', która pozwala sprawdzić żądanie przed uruchomieniem na produkcji.",
          },
          {
            type: "p",
            text: "Gdy logika musi odczytywać dane, podejmować decyzje w kodzie lub zapisywać zmiany w zgłoszeniach, użyj Ticketing API. Zgłoszenia tworzy się żądaniem POST do endpointu tickets, a aktualizuje żądaniem PUT na własny URL zgłoszenia; są też warianty zbiorcze dla wielu zgłoszeń naraz. Żądania można uwierzytelniać tokenem dostępu OAuth przesyłanym w nagłówku Bearer.",
          },
          {
            type: "p",
            text: "Dobrzy kandydaci na pierwsze automatyzacje w Zendesk:",
          },
          {
            type: "ul",
            items: [
              "Kierowanie nowych zgłoszeń do właściwej grupy według kanału, formularza, języka lub słów kluczowych.",
              "Przypomnienia i eskalacje dla zgłoszeń, które zbyt długo czekają na odpowiedź.",
              "Publikowanie zgłoszeń o wysokim priorytecie lub od klientów VIP na kanale Slack przez webhook.",
              "Pobieranie danych zamówienia lub konta do zgłoszenia przez API, zanim agent je otworzy.",
            ],
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab pracuje na Twoim istniejącym koncie Zendesk, bez zmiany platformy, wykorzystując Zendesk API, webhooki oraz Make lub n8n tam, gdzie się sprawdzają. Ticket Routing & Categorization to jednorazowy projekt w przedziale 600–950 USD; Custom Automation dla procesów obejmujących kilka systemów kosztuje 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Możesz zacząć od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Jak często działają automatyzacje Zendesk?",
        a: "Raz na godzinę, na wszystkich niezamkniętych zgłoszeniach. Dokładna minuta w ciągu godziny bywa różna, a każda automatyzacja może objąć do 1 000 zgłoszeń na godzinę.",
      },
      {
        q: "Czym różni się trigger od automatyzacji w Zendesk?",
        a: "Triggery są oparte na zdarzeniach i działają natychmiast po utworzeniu lub aktualizacji zgłoszenia. Automatyzacje są oparte na czasie i działają co godzinę. Jedne i drugie mogą wykonywać te same rodzaje akcji.",
      },
      {
        q: "Dlaczego moja automatyzacja Zendesk wciąż uruchamia się na tym samym zgłoszeniu?",
        a: "Prawdopodobnie brakuje jej warunku lub akcji unieważniającej. Dodaj akcję, która sprawi, że jeden z jej warunków przestanie być spełniony, np. tag wykluczony w warunkach.",
      },
      {
        q: "Czy trigger Zendesk może wywołać system zewnętrzny?",
        a: "Tak. Utwórz webhook połączony z triggerami i automatyzacjami, a następnie dodaj do triggera akcję 'Notify webhook' z payloadem, który chcesz wysłać.",
      },
      {
        q: "Czy kategorie triggerów zmieniają kolejność ich działania?",
        a: "Tak. Triggery działają w kolejności z listy, a kolejność kategorii musi odpowiadać kolejności, w jakiej mają działać. Zmienisz ją opcją 'Edit order' na liście triggerów zgłoszeń.",
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
    slug: "automatyzacja-freshdesk",
    category: "helpdesks",
    navLabel: "Automatyzacja Freshdesk",
    primaryKeyword: "automatyzacja Freshdesk",
    title: "Automatyzacja Freshdesk: reguły, przydzielanie i webhooki",
    description:
      "Jak działa automatyzacja Freshdesk: reguły Ticket Creation, Ticket Updates i Hourly Triggers, przydzielanie round-robin i według umiejętności, webhooki i API.",
    h1: "Automatyzacja Freshdesk: typy reguł, przydzielanie i webhooki",
    intro:
      "Automatyzacja Freshdesk opiera się na trzech typach reguł: Ticket Creation dla nowych zgłoszeń, Ticket Updates dla zdarzeń w istniejących zgłoszeniach i Hourly Triggers dla kontroli opartych na czasie. Przydzielanie (round-robin, z równoważeniem obciążenia lub według umiejętności) decyduje, kto dostaje zgłoszenie, a akcje webhook i Freshdesk API łączą całość z innymi systemami.",
    keyFacts: [
      "Freshdesk ma trzy typy reguł automatyzacji: Ticket Creation, Ticket Updates i Hourly Triggers.",
      "Hourly Triggers (dawniej Time Triggers) działają co godzinę, według godzin kalendarzowych, i tylko na zgłoszeniach zaktualizowanych w ciągu ostatnich 30 dni.",
      "Reguły Ticket Creation mogą wykonywać albo pierwszą pasującą regułę, albo wszystkie pasujące reguły.",
      "Freshdesk wykonuje do 1 000 wywołań webhooków na godzinę z reguł automatyzacji; dodatkowe wywołania są buforowane.",
      "Przydzielanie oparte na obciążeniu wlicza do obciążenia agenta tylko zgłoszenia z aktywnym licznikiem SLA.",
    ],
    sections: [
      {
        heading: "Trzy typy reguł automatyzacji we Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Jeśli korzystasz z Freshdesk od dłuższego czasu, możesz znać je pod dawnymi nazwami. Freshdesk nazywał je kiedyś Dispatch'r, Observer i Supervisor, a później połączył wszystkie trzy w jednym module Automations, z osobną zakładką dla każdego typu reguł.",
          },
          {
            type: "table",
            caption: "Typy reguł automatyzacji we Freshdesk",
            head: ["Typ reguły", "Dawna nazwa", "Kiedy działa", "Do czego się nadaje"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Raz, gdy powstaje nowe zgłoszenie",
                "Kategoryzowanie, nadawanie priorytetów i routing przychodzących zgłoszeń",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Gdy w istniejącym zgłoszeniu zajdzie określone zdarzenie",
                "Reagowanie na odpowiedzi, notatki, zmiany statusu lub pól",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Co godzinę, według harmonogramu",
                "Przypomnienia, eskalacje, automatyczne zamykanie nieaktywnych zgłoszeń",
              ],
            ],
          },
          {
            type: "p",
            text: "Reguły Ticket Creation sprawdzają każde nowe zgłoszenie pod kątem Twoich warunków i przy dopasowaniu wykonują akcje. Sam decydujesz, czy Freshdesk wykona tylko pierwszą pasującą regułę, czy wszystkie pasujące reguły. W trybie pierwszego dopasowania o tym, która reguła wygrywa, decyduje kolejność na liście, więc reguły szczegółowe powinny stać nad ogólnymi.",
          },
        ],
      },
      {
        heading: "Reguły Ticket Updates: zdarzenia, warunki, akcje",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates to jedyny typ reguł, w którym konfigurujesz zdarzenia. Reguła potrzebuje co najmniej jednego zdarzenia i uruchamia się, gdy pasuje którekolwiek z nich. Ustawiasz też, kto wykonał działanie: agent, zgłaszający, dowolny z nich, współpracownik (collaborator) lub sam System.",
          },
          {
            type: "ul",
            items: [
              "Zdarzenia: zmienia się właściwość zgłoszenia, aktualizowany jest agent lub grupa, dodana zostaje notatka, wysłana zostaje odpowiedź, wpływa opinia klienta; zdarzenia systemowe obejmują nieudane doręczenie e-maila i przekroczenie terminu zgłoszenia.",
              "Warunki: właściwości zgłoszenia (w tym tagi i pola niestandardowe), dane kontaktowe zgłaszającego i pola firmy.",
              "Akcje: ustawianie pól, ponowne przypisanie agenta lub grupy, dodawanie tagów lub obserwatorów, dodanie notatki, e-mail do agenta, grupy lub zgłaszającego, oznaczenie jako spam lub usunięcie albo wywołanie webhooka.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates to również jedyny typ reguł, który może utworzyć nowe zgłoszenie lub dodać wiadomość w wątku. Dokładna lista zdarzeń zależy od Twojego planu i włączonych funkcji.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: reguły oparte na czasie",
        blocks: [
          {
            type: "p",
            text: "Hourly Triggers nie czekają na zdarzenie. Co godzinę skanują zgłoszenia i działają na tych, które pasują. Ten harmonogram wpływa na to, jak je pisać:",
          },
          {
            type: "ul",
            items: [
              "Ustawiony limit czasu powinien wynosić co najmniej jedną godzinę, bo reguła działa tylko co godzinę.",
              "Liczą godziny kalendarzowe, a nie godziny pracy.",
              "Przetwarzają tylko zgłoszenia zaktualizowane w ciągu ostatnich 30 dni.",
              "Działają wyłącznie na właściwościach zgłoszenia, nie na właściwościach kontaktu czy firmy.",
            ],
          },
          {
            type: "note",
            text: "Nieprecyzyjnie zdefiniowana reguła oparta na czasie będzie wykonywać się na tym samym zgłoszeniu co godzinę, godzina po godzinie. Częstym rozwiązaniem jest połączenie warunku czasowego 'greater than' z warunkiem 'less than', tak aby zgłoszenie pasowało tylko raz.",
          },
        ],
      },
      {
        heading: "Automatyczne przydzielanie zgłoszeń",
        blocks: [
          {
            type: "p",
            text: "Reguły automatyzacji zwykle ustawiają grupę; przydzielanie decyduje, który agent w tej grupie dostaje zgłoszenie. Automatyczne przydzielanie we Freshdesk działa na silniku Omniroute i oferuje trzy metody dla każdej grupy:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: rozdziela zgłoszenia rotacyjnie między dostępnych agentów w grupie, pomijając tych, którzy mają pełne obciążenie, i przekazując zgłoszenie temu uprawnionemu agentowi, który najdawniej otrzymał poprzednie.",
              "Z równoważeniem obciążenia (load-balanced): każde nowe zgłoszenie trafia do najmniej obciążonego agenta, dopóki każdy agent nie osiągnie ustawionego maksimum. Do obciążenia liczą się tylko zgłoszenia z aktywnym licznikiem SLA, więc rozwiązanie zgłoszenia lub przeniesienie go do statusu z wyłączonym SLA zwalnia miejsce.",
              "Według umiejętności (skill-based): agenci mają umiejętności uszeregowane według priorytetu, a nowe zgłoszenie trafia do agenta z pierwszą pasującą umiejętnością. Freshdesk zaleca umiejętność awaryjną (fallback), z grupą jako warunkiem, przypisaną na końcu wszystkim agentom, aby żadne zgłoszenie nie pozostało nieprzydzielone.",
            ],
          },
          {
            type: "p",
            text: "To, z których metod możesz korzystać, zależy od Twojego planu, więc przed wyborem sprawdź ustawienia grupy. Zgłoszenia przypisane ręcznie nadal liczą się do obciążenia i mogą wypchnąć agenta ponad limit, co wstrzymuje automatyczne przydzielanie mu zgłoszeń, dopóki ich liczba nie spadnie.",
          },
        ],
      },
      {
        heading: "Webhooki i Freshdesk API",
        blocks: [
          {
            type: "p",
            text: "Webhook we Freshdesk to akcja automatyzacji, która wykonuje wywołanie API do innego systemu. Wybierasz typ żądania i adres URL wywołania zwrotnego (callback), a zarówno URL, jak i payload mogą zawierać placeholdery, takie jak {{ticket.id}}. Jeśli wykonasz przez webhook wywołanie GET, reguła nie może wykorzystać odpowiedzi; do tego Freshdesk wskazuje swoją akcję Trigger API.",
          },
          {
            type: "p",
            text: "Freshdesk wykonuje do 1 000 wywołań webhooków na godzinę z reguł automatyzacji. Wywołania ponad ten limit są buforowane, dopóki w kolejnej godzinie nie pojawi się nowa przepustowość, więc procesy o dużym wolumenie nie powinny zależeć od natychmiastowego doręczenia.",
          },
          {
            type: "p",
            text: "Do integracji działających poza Freshdesk używaj REST API pod adresem your-domain.freshdesk.com/api/v2/. Żądania uwierzytelnia się kluczem API jako nazwą użytkownika i dowolną wartością zastępczą jako hasłem. Limity zapytań są naliczane na konto na minutę i zależą od planu; odpowiedź 429 oznacza wyczerpanie limitu, a nagłówek Retry-After podaje, ile sekund trzeba odczekać. Lista zgłoszeń domyślnie zwraca tylko ostatnie 30 dni, więc do starszych zgłoszeń używaj filtra updated_since.",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje rozwiązania na Twoim istniejącym koncie Freshdesk, bez zmiany platformy, wykorzystując reguły automatyzacji, webhooki, Freshdesk API oraz Make lub n8n tam, gdzie pomagają. Ticket Routing & Categorization to jednorazowy projekt w przedziale 600–950 USD; Custom Automation kosztuje 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Pierwszym krokiem jest bezpłatna 30-minutowa rozmowa audytowa.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Jakie są typy reguł automatyzacji we Freshdesk?",
        a: "Reguły Ticket Creation działają na nowych zgłoszeniach, reguły Ticket Updates – gdy w istniejącym zgłoszeniu zajdzie zdarzenie, a Hourly Triggers – według harmonogramu, co godzinę.",
      },
      {
        q: "Co się stało z Dispatch'r, Observer i Supervisor?",
        a: "To dawne nazwy tych samych typów reguł: Dispatch'r dla tworzenia zgłoszeń, Observer dla aktualizacji zgłoszeń i Supervisor dla reguł opartych na czasie. Freshdesk połączył je w jeden moduł Automations.",
      },
      {
        q: "Czy Hourly Triggers we Freshdesk uwzględniają godziny pracy?",
        a: "Nie. Działają według godzin kalendarzowych i tylko na zgłoszeniach zaktualizowanych w ciągu ostatnich 30 dni.",
      },
      {
        q: "Ile webhooków mogą wysłać automatyzacje Freshdesk?",
        a: "Freshdesk wykonuje do 1 000 wywołań webhooków na godzinę z reguł automatyzacji. Wywołania ponad limit są buforowane, dopóki nie zwolni się przepustowość.",
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
];
