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

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "automatyzacja-jira-service-management",
    category: "helpdesks",
    navLabel: "Automatyzacja Jira Service Mgmt",
    primaryKeyword: "automatyzacja Jira Service Management",
    title: "Automatyzacja Jira Service Management: przepływy i SLA",
    description:
      "Jak działa automatyzacja Jira Service Management: triggery, warunki i akcje, triggery SLA i zatwierdzeń, smart values, webhooki, kolejki i typy żądań.",
    h1: "Automatyzacja Jira Service Management: jak działają przepływy, SLA i webhooki",
    intro:
      "Automatyzacja Jira Service Management składa się z przepływów (flows, wcześniej nazywanych regułami) złożonych z trzech części: triggera, który je uruchamia, opcjonalnych warunków, które określają, na jakie elementy robocze działają, oraz akcji, które wykonują pracę. Triggery specyficzne dla obsługi zgłoszeń, takie jak naruszenia SLA i zatwierdzenia, a do tego smart values i żądania webowe pozwalają zautomatyzować większość pracy związanej z triażem, eskalacją i powiadomieniami wokół Twoich kolejek.",
    keyFacts: [
      "Każdy przepływ automatyzacji to trigger, opcjonalne warunki i jedna lub więcej akcji, wykonywane od góry do dołu.",
      "Jira Service Management dodaje triggery takie jak 'SLA threshold breached' i 'Approval required'.",
      "Akcja 'Send web request' wywołuje systemy zewnętrzne; trigger przychodzącego webhooka pozwala systemom zewnętrznym uruchomić przepływ.",
      "Smart values, takie jak {{issue.key}}, wstawiają dane elementu roboczego do pól, komentarzy i wiadomości.",
      "Każde SLA ma własne warunki startu, wstrzymania i zatrzymania; wstrzymanie jest opcjonalne.",
    ],
    sections: [
      {
        heading: "Triggery, warunki i akcje",
        blocks: [
          {
            type: "p",
            text: "Dokumentacja Atlassian nazywa teraz reguły automatyzacji „przepływami” (flows); spotkasz oba terminy i oznaczają to samo. Przepływ możesz utworzyć od zera, z szablonu lub za pomocą Rovo, a po włączeniu jego kroki wykonują się po kolei, od góry do dołu.",
          },
          {
            type: "table",
            caption: "Trzy części przepływu automatyzacji w Jira Service Management",
            head: ["Część", "Co robi", "Przykłady"],
            rows: [
              [
                "Trigger",
                "Uruchamia przepływ, gdy coś się wydarzy",
                "Utworzenie elementu roboczego, przejście elementu roboczego do innego statusu, dodanie komentarza, przekroczenie progu SLA, wymagane zatwierdzenie, harmonogram, przychodzący webhook",
              ],
              [
                "Warunek (opcjonalny)",
                "Ogranicza, na jakie elementy robocze działa przepływ",
                "Element roboczy pasuje do filtra JQL, komentarz jest wewnętrzny lub publiczny, typ użytkownika",
              ],
              [
                "Akcja",
                "Wykonuje pracę",
                "Przejście (transition), edycja pola, dodanie komentarza, wysłanie e-maila, wysłanie żądania webowego, wysłanie wiadomości na Slacku lub w Microsoft Teams",
              ],
            ],
          },
          {
            type: "p",
            text: "Dwa triggery są specyficzne dla pracy serwisowej. 'SLA threshold breached' pozwala wybrać SLA i uruchomić przepływ, gdy zostało naruszone albo gdy zaraz zostanie naruszone. 'Approval required' uruchamia się, gdy zostanie utworzony lub zaktualizowany element roboczy wymagający zatwierdzenia albo gdy dodani zostaną nowi zatwierdzający. Trigger harmonogramu (scheduled) uruchamia przepływ według zegara, co przydaje się do okresowych kontroli, np. wylistowania elementów roboczych, którym grozi naruszenie.",
          },
        ],
      },
      {
        heading: "Kolejki, typy żądań i SLA: wokół czego budujesz automatyzację",
        blocks: [
          {
            type: "p",
            text: "Automatyzacja w Jira Service Management służy głównie temu, by trzy struktury pozostawały aktualne i poprawne:",
          },
          {
            type: "ul",
            items: [
              "Kolejki (queues) to przefiltrowane zestawy elementów roboczych, które dają agentom skupiony widok ich pracy. Filtrują według pól takich jak status, typ pracy, osoba przypisana i priorytet albo według JQL. Agenci nie mogą tworzyć ani edytować kolejek; robią to administratorzy przestrzeni.",
              "Typy żądań (request types) to formularze, za pomocą których klienci zgłaszają żądania w portalu. Każdy typ żądania jest powiązany z dokładnie jednym typem pracy (work type): typ żądania odpowiada za nazewnictwo i ustawienia portalu, a typ pracy przechowuje workflow i pola. Jeden typ pracy może obsługiwać wiele typów żądań.",
              "SLA mierzą czas względem celów. Każde SLA ma własne warunki startu, wstrzymania i zatrzymania; wstrzymanie jest opcjonalne i zwykle stosuje się je na czas oczekiwania na odpowiedź klienta, a pomiar kończy się, gdy tylko zostanie spełniony którykolwiek warunek zatrzymania.",
            ],
          },
          {
            type: "p",
            text: "W praktyce przepływy ustawiają pola, według których filtrują kolejki i cele SLA. Jeśli przepływ ustawia priorytet lub pole niestandardowe na podstawie typu żądania lub treści wiadomości, właściwa kolejka i właściwy cel SLA automatycznie przejmą element roboczy.",
          },
        ],
      },
      {
        heading: "Smart values",
        blocks: [
          {
            type: "p",
            text: "Smart values pozwalają przepływowi wstawiać dane z elementu roboczego do pól, komentarzy, e-maili i treści żądań webowych. {{issue.key}} zwraca klucz, np. PROJ-123. Inne pola działają według tego samego wzorca z użyciem nazwy pola, także pola niestandardowe; jeśli dwa pola mają tę samą nazwę, użyj zamiast niej ID pola niestandardowego.",
          },
          {
            type: "p",
            text: "Interfejs Atlassian mówi teraz 'work item' tam, gdzie wcześniej było 'issue', ale składnia smart values w dokumentacji nadal używa prefiksu issue. Po polach wielowartościowych można iterować składnią #, zamykaną przez {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooki i systemy zewnętrzne",
        blocks: [
          {
            type: "p",
            text: "Webhooki działają w obu kierunkach:",
          },
          {
            type: "ul",
            items: [
              "Wychodzące: akcja 'Send web request' wywołuje API innego systemu, gdy przepływ się uruchamia, i może zwrócić dane z odpowiedzi do dalszych kroków. Twój system odbierający musi akceptować żądania z sieci Atlassian.",
              "Przychodzące: trigger przychodzącego webhooka daje przepływowi własny URL, dzięki czemu system zewnętrzny (chatbot, narzędzie rozliczeniowe, narzędzie monitorujące) może uruchomić przepływ żądaniem HTTP.",
              "Komunikatory: akcje 'Send Slack message' i 'Send Microsoft Teams message' publikują na kanałach, a w treści wiadomości można używać smart values.",
            ],
          },
        ],
      },
      {
        heading: "Limity użycia i co zautomatyzować najpierw",
        blocks: [
          {
            type: "p",
            text: "Według stanu na październik 2026 Jira Cloud mierzy użycie automatyzacji dla każdego produktu w skali miesiąca, z limitami zależnymi od planu. Atlassian opisuje sposób liczenia użycia na stronie 'How is your automation usage calculated'; sprawdź ją oraz swoje bieżące użycie, zanim dodasz często uruchamiane przepływy harmonogramowe.",
          },
          {
            type: "p",
            text: "Typowe pierwsze przepływy dla service desku:",
          },
          {
            type: "ul",
            items: [
              "Ustawianie priorytetu, komponentu lub osoby przypisanej przy tworzeniu na podstawie typu żądania i treści zgłoszenia.",
              "Publikowanie na kanale eskalacji, gdy SLA zaraz zostanie naruszone.",
              "Przypominanie klientowi, gdy żądanie czeka na jego odpowiedź, a następnie rozwiązanie go z komentarzem po ustalonym czasie.",
              "Wysyłanie nowych żądań o wysokim priorytecie do systemu zewnętrznego przez 'Send web request'.",
            ],
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab pracuje na Twojej istniejącej instancji Jira Service Management, bez zmiany platformy, łącząc natywną automatyzację z API, webhookami oraz Make lub n8n tam, gdzie przepływ musi sięgnąć do innych narzędzi. Ticket Routing & Categorization to jednorazowo 600–950 USD; Custom Automation kosztuje 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Zacznij od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy reguły i przepływy automatyzacji w Jira to to samo?",
        a: "Tak. Nowsza dokumentacja i interfejs Atlassian używają terminu 'flow' (przepływ) dla tego, co nazywano regułą automatyzacji. Struktura jest taka sama: trigger, warunki i akcje.",
      },
      {
        q: "Czy automatyzacja Jira Service Management może reagować na naruszenia SLA?",
        a: "Tak. Trigger 'SLA threshold breached' pozwala wybrać SLA i uruchomić przepływ, gdy zostało naruszone albo gdy zaraz zostanie naruszone.",
      },
      {
        q: "Jak wysłać dane z Jira Service Management do innego systemu?",
        a: "Użyj w przepływie akcji 'Send web request'. Wywołuje ona API innego systemu, gdy przepływ się uruchamia, i może zwrócić dane z odpowiedzi do dalszych kroków.",
      },
      {
        q: "Czym różni się typ żądania (request type) od typu pracy (work type)?",
        a: "Typ żądania to widoczny dla klienta formularz w portalu; typ pracy, który za nim stoi, przechowuje workflow i pola. Każdy typ żądania korzysta z jednego typu pracy, a jeden typ pracy może obsługiwać wiele typów żądań.",
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
    slug: "automatyzacja-obslugi-klienta-slack",
    category: "helpdesks",
    navLabel: "Automatyzacja obsługi w Slacku",
    primaryKeyword: "automatyzacja obsługi klienta w Slacku",
    title: "Automatyzacja obsługi klienta w Slacku: alerty i eskalacje",
    description:
      "Automatyzacja obsługi klienta w Slacku: alerty eskalacji, Workflow Builder, incoming webhooks, Bolt, integracje Zendesk, Freshdesk i Jira, Slack Connect.",
    h1: "Automatyzacja obsługi klienta w Slacku: alerty, eskalacje i kanały z klientami",
    intro:
      "W większości zespołów wsparcia Slack nie jest miejscem, do którego piszą klienci. To tam zespół eskaluje sprawy, otrzymuje alerty i koordynuje pracę. Automatyzacja obsługi klienta w Slacku oznacza kierowanie właściwych zdarzeń ze zgłoszeń na właściwy kanał, zamienianie wiadomości ze Slacka w zgłoszenia, gdy jest taka potrzeba, a w zespołach B2B – obsługę klientów bezpośrednio na kanałach Slack Connect.",
    keyFacts: [
      "Przepływy pracy w Workflow Builder mogą startować z linku, webhooka, harmonogramu, opublikowanej wiadomości, reakcji emoji lub dołączenia do kanału.",
      "Incoming webhook to unikalny URL powiązany z jednym kanałem; aby opublikować wiadomość, wysyłasz do niego payload JSON metodą POST.",
      "Slack co do zasady pozwala aplikacjom publikować nie więcej niż jedną wiadomość na sekundę na kanał.",
      "Zendesk, Freshdesk i Jira Service Management oferują integracje ze Slackiem do tworzenia zgłoszeń i wysyłania powiadomień.",
      "Slack Connect pozwala osobom z innych organizacji współpracować z Tobą na wspólnym kanale.",
    ],
    sections: [
      {
        heading: "Sposoby automatyzacji pracy wsparcia w Slacku",
        blocks: [
          {
            type: "p",
            text: "Są cztery główne elementy składowe, od no-code po własny kod. Wybierz najprostszy, który wystarczy do zadania.",
          },
          {
            type: "table",
            caption: "Opcje automatyzacji Slacka dla zespołów wsparcia",
            head: ["Opcja", "Czym jest", "Najlepsza do"],
            rows: [
              [
                "Integracja z helpdeskiem",
                "Aplikacja Slack od Zendesk, Freshdesk lub Jira Service Management",
                "Powiadomień o zgłoszeniach na kanałach i tworzenia zgłoszeń z wiadomości",
              ],
              [
                "Workflow Builder",
                "Wbudowane w Slacka narzędzie do przepływów pracy bez kodu",
                "Formularzy przyjmowania zgłoszeń, checklist eskalacyjnych, zaplanowanych przypomnień",
              ],
              [
                "Incoming webhook",
                "URL, który publikuje wiadomość JSON na jednym kanale",
                "Jednokierunkowych alertów z helpdesku, skryptów lub Make/n8n",
              ],
              [
                "Własna aplikacja Slack (Bolt)",
                "Twoja własna aplikacja nasłuchująca zdarzeń i poleceń",
                "Akcji dwukierunkowych: przycisków, poleceń slash, wyszukiwania w innych systemach",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integracje helpdesku ze Slackiem",
        blocks: [
          {
            type: "p",
            text: "Zacznij od tego, co już oferuje Twój helpdesk:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: agenci mogą tworzyć zgłoszenia skrótem /zendesk, akcją wiadomości, która zamienia wiadomość ze Slacka w zgłoszenie, aplikacją Zendesk na pasku bocznym lub wzmianką @zendesk na kanale Slack Connect. Zgłoszenia utworzone w ten sposób dostają tag created_from_slack. Administratorzy za pomocą triggerów decydują, które zdarzenia trafiają na które kanały, a aplikację Zendesk trzeba zaprosić na każdy kanał, który ma otrzymywać powiadomienia.",
              "Freshdesk: aplikacja Slack może zamienić wiadomość z kanału w zgłoszenie, z treścią wiadomości jako opisem, a zgłoszenia można też tworzyć od zera w Slacku. Zgłoszenia mogą tworzyć również członkowie Slacka, którzy nie są agentami Freshdesk.",
              "Jira Service Management: czat w Slacku łączy kanały żądań, na których ludzie proszą o pomoc, z kanałem agentów. Agenci mogą utworzyć element roboczy, reagując na wiadomość emoji :ticket:, a typy żądań muszą być połączone z kanałem żądań, aby były tam dostępne.",
            ],
          },
          {
            type: "p",
            text: "Jeśli wbudowana integracja nie obsługuje zdarzenia, na którym Ci zależy, sięgnij po incoming webhook lub Workflow Builder, opisane poniżej.",
          },
        ],
      },
      {
        heading: "Workflow Builder do wewnętrznych eskalacji",
        blocks: [
          {
            type: "p",
            text: "Workflow Builder pozwala każdemu budować wieloetapowe przepływy pracy bez kodu. Przepływ startuje od triggera: linku do udostępnienia, webhooka, harmonogramu, aktualizacji elementu listy, wiadomości opublikowanej na kanale, dołączenia kogoś do kanału lub reakcji emoji. Kroki wykonują się w ustalonej przez Ciebie kolejności i mogą być akcjami Slacka, np. wysłaniem wiadomości, krokami konektorów do usług zewnętrznych lub krokami niestandardowymi zbudowanymi przez programistów. Zmienne przekazują dane z wcześniejszych kroków do późniejszych, przyciski wstrzymują przepływ, dopóki ktoś nie kliknie, a rozgałęzienia prowadzą ludzi różnymi ścieżkami w zależności od warunków.",
          },
          {
            type: "p",
            text: "Typowe zastosowania we wsparciu: formularz eskalacji uruchamiany linkiem, który zbiera URL zgłoszenia i poziom ważności, a potem publikuje uporządkowaną wiadomość na kanale eskalacji; przepływ uruchamiany reakcją emoji, który oznacza dyżurnego lidera; albo cotygodniowe zaplanowane przypomnienie o przejrzeniu zaległych zgłoszeń.",
          },
        ],
      },
      {
        heading: "Incoming webhooks i aplikacje Bolt",
        blocks: [
          {
            type: "p",
            text: "Incoming webhook to najprostszy sposób, by wypychać alerty z dowolnego systemu do Slacka. Każdy URL webhooka jest powiązany z jednym kanałem; wysyłasz żądanie HTTP POST z treścią JSON zawierającą pole text, a opcjonalnie bloki Block Kit dla bogatszego układu. Każdy, kto ma ten URL, może publikować w Twoim workspace, więc traktuj go jak hasło i nie umieszczaj go w publicznym kodzie.",
          },
          {
            type: "p",
            text: "Uważaj na wolumen. Limity Slacka mówią, że aplikacje co do zasady nie powinny publikować więcej niż jednej wiadomości na sekundę na kanał, czy to przez chat.postMessage, czy przez incoming webhook. Krótkie skoki są tolerowane, ale długotrwałe przekroczenia kończą się odpowiedziami HTTP 429 z nagłówkiem Retry-After. Przy obciążonych kolejkach grupuj alerty lub wysyłaj zestawienie (digest) zamiast jednej wiadomości na zgłoszenie.",
          },
          {
            type: "p",
            text: "Gdy potrzebujesz interakcji dwukierunkowej, np. przycisku, który przypisuje zgłoszenie, albo polecenia slash, które wyszukuje zamówienie, zbuduj aplikację Slack z użyciem Bolt – frameworka Slacka dla JavaScriptu, Pythona i Javy. Aplikacja Bolt nasłuchuje zdarzeń i poleceń slash w Twoim workspace i na nie odpowiada, np. wywołując API Twojego helpdesku.",
          },
        ],
      },
      {
        heading: "Slack Connect dla kanałów z klientami",
        blocks: [
          {
            type: "p",
            text: "Slack Connect pozwala udostępnić kanał osobom z innych organizacji, z których każda pracuje we własnym Slacku. Zespoły wsparcia B2B używają go jako dedykowanego kanału dla każdego kluczowego klienta. Organizację zewnętrzną zapraszasz z ustawień kanału i wybierasz poziom uprawnień: tylko publikowanie albo publikowanie, zapraszanie i więcej. Administratorzy mogą ograniczyć, kto może zapraszać osoby z zewnątrz. Kanał Slack Connect może obejmować do 250 organizacji, łącznie z Twoją.",
          },
          {
            type: "p",
            text: "Kanały z klientami nadal wymagają śledzenia zgłoszeń. Integracja Zendesk obsługuje wzmianki @zendesk na kanałach Slack Connect, z mniejszą liczbą opcji dla użytkowników zewnętrznych; w przypadku innych helpdesków niewielka aplikacja Bolt lub przepływ w Make/n8n może zamieniać oznaczone wiadomości w zgłoszenia.",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab łączy Slacka z helpdeskiem, którego już używasz (Zendesk, Freshdesk, Jira lub narzędzia wewnętrzne), przez API, webhooki oraz Make lub n8n, bez zmiany platformy. Automated Reports dostarczane na Slacka lub e-mailem kosztują jednorazowo 500–900 USD; Custom Automation dla dwukierunkowych przepływów w Slacku to 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Zacznij od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy mogę tworzyć zgłoszenia w helpdesku z wiadomości na Slacku?",
        a: "Tak. Zendesk i Freshdesk oferują aplikacje Slack, które zamieniają wiadomość w zgłoszenie, a agenci Jira Service Management mogą utworzyć element roboczy z wiadomości na kanale żądań, reagując emoji :ticket:.",
      },
      {
        q: "Jaki jest najprostszy sposób wysyłania alertów wsparcia na Slacka?",
        a: "Użyj integracji Twojego helpdesku ze Slackiem, jeśli obsługuje potrzebne zdarzenie. W przeciwnym razie wyślij payload JSON do incoming webhooka Slacka z akcji webhook w helpdesku albo z Make lub n8n.",
      },
      {
        q: "Czy przepływ pracy w Slacku może uruchomić system zewnętrzny?",
        a: "Tak. Workflow Builder obsługuje trigger webhook, więc system zewnętrzny może uruchomić przepływ pracy, wysyłając do niego żądanie HTTP.",
      },
      {
        q: "Czy jest limit liczby wiadomości, które mogę opublikować na kanale?",
        a: "Slack co do zasady pozwala aplikacjom publikować nie więcej niż jedną wiadomość na sekundę na kanał. Krótkie skoki są tolerowane, ale długotrwałe przekroczenia zwracają błędy HTTP 429.",
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
    slug: "automatyzacja-intercom",
    category: "helpdesks",
    navLabel: "Automatyzacja Intercom",
    primaryKeyword: "automatyzacja Intercom",
    title: "Automatyzacja Intercom: Workflows, Fin, routing i API",
    description:
      "Jak działa automatyzacja Intercom: triggery, rozgałęzienia i akcje w Workflows, przydzielanie w skrzynkach zespołów, Fin AI Agent, Slack, Jira, webhooki i API.",
    h1: "Automatyzacja Intercom: Workflows, przydzielanie, Fin i API",
    intro:
      "Automatyzację w Intercom buduje się głównie w Workflows: wizualnym kreatorze, w którym trigger uruchamia przepływ, rozgałęzienia (branches) wybierają ścieżkę, a akcje wykonują pracę, np. tagowanie, przypisywanie czy oddanie odpowiedzi Finowi. Następnie metoda przydzielania w danej skrzynce zespołu (team inbox) decyduje, który członek zespołu dostaje rozmowę, a webhooki i REST API obsługują wszystko, co musi się dziać poza Intercom. Poniżej opisujemy, jak zachowuje się każdy element i od czego zacząć.",
    keyFacts: [
      "Przepływy w Workflows buduje się w wizualnym kreatorze; mogą być skierowane do klienta albo działać po cichu w tle dla członków zespołu.",
      "Przy rozgałęzieniach (branches) rozmowa podąża tylko pierwszą pasującą ścieżką; Apply rules uruchamia każdą pasującą ścieżkę.",
      "Do rozmowy można zastosować tylko jedno SLA; późniejsze akcje SLA z innych przepływów są ignorowane.",
      "Przydzielanie zrównoważone (balanced) przekazuje rozmowę uprawnionemu członkowi zespołu z najmniejszą liczbą otwartych rozmów.",
      "Subskrypcje webhooków tworzy się w Developer Hub, a nie przez API, a endpoint musi używać HTTPS.",
    ],
    sections: [
      {
        heading: "Jak zbudowane są Intercom Workflows",
        blocks: [
          {
            type: "p",
            text: "Workflows to w Intercom jedno miejsce do automatyzacji rozmów z klientami i procesów zespołu. Budujesz je w wizualnym kreatorze z kroków wielokrotnego użytku. Przepływ może być skierowany do klienta, jak bot, który wita i wstępnie kwalifikuje sprawy, albo działać po cichu w tle dla Twojego zespołu. Każdy przepływ łączy te same kilka rodzajów kroków.",
          },
          {
            type: "table",
            caption: "Elementy składowe przepływu w Intercom",
            head: ["Element", "Co robi", "Przykłady"],
            rows: [
              [
                "Trigger",
                "Określa, kiedy i dla kogo przepływ startuje",
                "Gdy rozmowa się rozpoczyna, w trakcie rozmowy, przy zdarzeniu ticketu lub gdy inny przepływ wywołuje go jako przepływ wielokrotnego użytku",
              ],
              [
                "Branches (rozgałęzienia)",
                "Sprawdzają warunki i kierują rozmowę pierwszą ścieżką, której warunek pasuje",
                "Osobne ścieżki dla różnych grup odbiorców, kanałów lub tematów",
              ],
              [
                "Apply rules",
                "Sprawdza każdą ścieżkę i wykonuje akcje każdej pasującej",
                "Kilka niezależnych tagów lub atrybutów ustawianych w jednym kroku",
              ],
              [
                "Akcje",
                "Wykonują pracę",
                "Tagowanie, przypisanie, odłożenie (snooze), ustawienie priorytetu, zastosowanie SLA, odpowiedź Fina, powiadomienie na Slacku",
              ],
            ],
          },
          {
            type: "p",
            text: "Różnica między rozgałęzieniami a Apply rules ma znaczenie, gdy warunki się pokrywają. Przy rozgałęzieniach rozmowa spełniająca kilka warunków podąża tylko pierwszą pasującą ścieżką, czytaną od góry do dołu, więc najbardziej szczegółowe warunki umieść na początku. Apply rules wykonuje akcje każdej pasującej ścieżki, co sprawdza się przy krokach, które mają się sumować, a nie konkurować.",
          },
        ],
      },
      {
        heading: "Automatyzacja skrzynki: przydzielanie, priorytet i SLA",
        blocks: [
          {
            type: "p",
            text: "Większość automatyzacji skrzynki to przepływ w tle złożony z akcji. Assign przekazuje rozmowę wybranemu członkowi zespołu lub do skrzynki zespołu. Tag dodaje tag, a tagi tworzy się i zarządza nimi w ustawieniach workspace. Snooze tymczasowo usuwa rozmowę ze skrzynki członka zespołu; jeśli klient lub członek zespołu odpowie w czasie odłożenia, przepływ się kończy. Set priority oznacza, jak pilna jest rozmowa.",
          },
          {
            type: "p",
            text: "SLA również stosuje się akcją, ale do rozmowy można dodać tylko jedno SLA. Jeśli późniejszy przepływ spróbuje zastosować kolejne SLA, ta akcja zostanie zignorowana, więc zanim zbudujesz kilka przepływów, ustal, który z nich odpowiada za SLA.",
          },
          {
            type: "p",
            text: "Gdy rozmowa trafi do skrzynki zespołu, o tym, kto ją dostanie, decyduje metoda przydzielania tej skrzynki: ręczna, round robin lub zrównoważona (balanced). Przydzielanie zrównoważone przekazuje każdą nową rozmowę uprawnionemu członkowi zespołu z najmniejszą liczbą otwartych rozmów, a remisy rozstrzyga na korzyść tego, kto najdłużej czeka na kolejną. Aby być uprawnionym, członek zespołu musi być aktywny i poniżej swojego limitu przydziałów. Intercom zaleca przydzielanie zrównoważone dla zespołów wsparcia.",
          },
          {
            type: "note",
            text: "Prosty wzorzec na początek: jeden przepływ w tle dla nowych rozmów taguje je według tematu, ustawia priorytet, stosuje jedno SLA i przypisuje je do właściwej skrzynki zespołu. Potem metoda przydzielania skrzynki wybiera członka zespołu.",
          },
        ],
      },
      {
        heading: "Fin AI Agent w Twoich przepływach",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent to agent AI od Intercom, który odpowiada na pytania klientów. Odpowiada na podstawie treści, które mu przekażesz: publicznych artykułów, dokumentów, snippetów i publicznych adresów URL, którymi zarządzasz w Knowledge > Sources. Respektuje targetowanie odbiorców w artykułach Intercom, więc nie odpowie na podstawie prywatnych lub ograniczonych artykułów, których klient w Messengerze nie może zobaczyć.",
          },
          {
            type: "p",
            text: "Fin działa w Intercom Messenger w wersji web, iOS i Android, a także w e-mailu, WhatsAppie, SMS-ach, na Facebooku i Instagramie. W Workflows krok 'Let Fin answer' pozwala Finowi odpowiedzieć w dowolnym momencie przepływu i kontynuować, dopóki sprawa nie zostanie rozwiązana lub eskalowana do członka zespołu.",
          },
          {
            type: "p",
            text: "Przekazanie do człowieka zaplanuj równie starannie jak odpowiedzi. Zdecyduj, do której skrzynki zespołu ma trafić eskalowana rozmowa, i zbuduj tę ścieżkę w przepływie, aby rozmowa nigdy nie pozostała nieprzypisana.",
          },
        ],
      },
      {
        heading: "Webhooki i Intercom REST API",
        blocks: [
          {
            type: "p",
            text: "Gdy coś w Intercom musi dotrzeć do innego systemu, użyj webhooków. Konfigurujesz je w Developer Hub: otwórz swoją aplikację, przejdź do Configure, a następnie Webhooks i wpisz URL endpointu. Endpoint musi używać HTTPS i akceptować żądanie HEAD, którego Intercom używa do weryfikacji URL. Subskrypcje można tworzyć tylko w Developer Hub, a nie przez API.",
          },
          {
            type: "p",
            text: "Następnie wybierasz tematy (topics). Temat to zdarzenie w Intercom, które uruchamia webhook, a każdy temat jest powiązany z jednym lub kilkoma uprawnieniami, które musi mieć Twoja aplikacja. Intercom wysyła żądanie HTTP POST na Twój endpoint dla każdego subskrybowanego tematu, a każdy payload zawiera temat i licznik prób doręczenia. Przycisk 'Send a test request' w sekcji webhooków pozwala sprawdzić endpoint.",
          },
          {
            type: "p",
            text: "Aby działać na rozmowach z poziomu własnego kodu, użyj REST API. Żądania trafiają do api.intercom.io z tokenem dostępu przesyłanym jako token Bearer w nagłówku Authorization oraz z nagłówkiem Intercom-Version, który domyślnie przyjmuje wersję ustawioną w Twojej aplikacji. Odpowiedź w rozmowie to na przykład POST do /conversations/{id}/reply z treścią JSON, która określa typ wiadomości, typ autora i treść wiadomości.",
          },
          {
            type: "p",
            text: "Dobrzy kandydaci na pierwsze automatyzacje w Intercom:",
          },
          {
            type: "ul",
            items: [
              "Tagowanie nowych rozmów i przypisywanie ich do właściwej skrzynki zespołu.",
              "Stosowanie jednego SLA na rozmowę i podnoszenie priorytetu dla kluczowych klientów.",
              "Wysyłanie zdarzeń z rozmów do webhooka, aby Make lub n8n mogły aktualizować inne systemy.",
              "Publikowanie nowych lub eskalowanych rozmów na kanale Slack.",
            ],
          },
        ],
      },
      {
        heading: "Integracje ze Slackiem i Jira",
        blocks: [
          {
            type: "p",
            text: "Dla alertów na Slacku ustaw cel kanału Slack na notification-only, a potem dodaj do przepływu krok 'Notify Slack'. Aplikacja Intercom publikuje powiadomienie, a kolejne powiadomienia dotyczące tej samej rozmowy pojawiają się jako odpowiedzi w wątku pod pierwotną wiadomością. Odpowiedzi wpisane w tym wątku nie trafiają z powrotem do rozmowy w Intercom, więc członkowie zespołu nadal odpowiadają klientom w Intercom.",
          },
          {
            type: "p",
            text: "Dla eskalacji do zespołu inżynierskiego aplikacja Jira for Tickets od Intercom może automatycznie tworzyć zgłoszenia (issues) w Jira z określonych przez Ciebie typów ticketów, odzwierciedlać statusy zgłoszeń Jira z powrotem w ticketach Intercom i synchronizować notatki. Jej podstawowa automatyzacja mapuje tylko tytuł i opis; dla większej liczby pól użyj jej niestandardowej automatyzacji opartej na szablonach Workflows. Nie tworzy ona zgłoszeń bezpośrednio z rozmów, więc rozmowę trzeba najpierw przekształcić w ticket.",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje na narzędziach, których już używasz, bez zmiany platformy, wykorzystując API, webhooki oraz Make lub n8n. Intercom ma zarówno REST API, jak i webhooki, więc niemal na pewno da się go podłączyć; konkretną konfigurację potwierdzamy podczas bezpłatnej 30-minutowej rozmowy audytowej. Ticket Routing & Categorization to jednorazowy projekt w przedziale 600–950 USD, a Custom Automation dla procesów obejmujących kilka systemów kosztuje 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różnią się rozgałęzienia (branches) od Apply rules w Intercom Workflows?",
        a: "Rozgałęzienia kierują rozmowę tylko pierwszą ścieżką, której warunek pasuje, sprawdzając od góry do dołu. Apply rules sprawdza każdą ścieżkę i wykonuje akcje każdej pasującej.",
      },
      {
        q: "Którą metodę przydzielania Intercom zaleca dla zespołów wsparcia?",
        a: "Przydzielanie zrównoważone (balanced). Przekazuje każdą rozmowę aktywnemu członkowi zespołu poniżej limitu przydziałów, który ma najmniej otwartych rozmów, a przy remisie wygrywa ten, kto czeka najdłużej.",
      },
      {
        q: "Z jakich treści korzysta Fin AI Agent, odpowiadając klientom?",
        a: "Z publicznych artykułów, dokumentów, snippetów i publicznych adresów URL, które dodajesz w Knowledge > Sources. Respektuje targetowanie odbiorców artykułów, więc nie odpowie na podstawie artykułów, których klient nie może zobaczyć.",
      },
      {
        q: "Czy mogę tworzyć subskrypcje webhooków Intercom przez API?",
        a: "Nie. Subskrypcje webhooków konfiguruje się w Developer Hub. Endpoint musi używać HTTPS i akceptować żądanie HEAD, którego Intercom używa do jego weryfikacji.",
      },
      {
        q: "Czy członkowie zespołu mogą odpowiadać klientom z powiadomień Intercom na Slacku?",
        a: "Nie. Na kanale Slack typu notification-only odpowiedzi w wątku powiadomienia nie są przesyłane z powrotem do rozmowy w Intercom.",
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
    slug: "automatyzacja-hubspot-service-hub",
    category: "helpdesks",
    navLabel: "Automatyzacja HubSpot Service Hub",
    primaryKeyword: "automatyzacja HubSpot Service Hub",
    title: "Automatyzacja HubSpot Service Hub: zgłoszenia i workflowy",
    description:
      "Automatyzacja HubSpot Service Hub: kanały i routing help desku, pipeline'y i statusy zgłoszeń, cele SLA, workflowy zgłoszeń, chatboty, webhooki i API.",
    h1: "Automatyzacja HubSpot Service Hub: help desk, zgłoszenia, workflowy i API",
    intro:
      "Automatyzacja HubSpot Service Hub kręci się wokół zgłoszenia (ticketu): kanały help desku tworzą zgłoszenia, routing je przypisuje, pipeline'y i statusy śledzą ich postęp, a workflowy oparte na zgłoszeniach wykonują na nich działania. Chatboty oparte na regułach zbierają szczegóły, zanim zgłoszenie w ogóle powstanie, a akcja webhook w workflow i CRM API łączą HubSpot ze wszystkim innym. Poniżej opisujemy, co robi każdy element i od czego zacząć.",
    keyFacts: [
      "Domyślnie help desk automatycznie tworzy zgłoszenia z każdego podłączonego do niego kanału.",
      "Domyślny Support Pipeline ma cztery statusy zgłoszeń: New, Waiting on contact, Waiting on us i Closed.",
      "Cele SLA w help desku mogą mierzyć czas do pierwszej odpowiedzi, czas do kolejnej odpowiedzi i czas do zamknięcia.",
      "Akcja webhook w workflow akceptuje tylko adresy URL zaczynające się od HTTPS.",
      "Zgłoszenia tworzy się przez API żądaniem POST do /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Co możesz zautomatyzować w HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "Automatyzacja w Service Hub jest rozłożona na kilka narzędzi, które działają na rekordzie zgłoszenia. Zanim zbudujesz regułę, zdecyduj, gdzie powinna się znaleźć; większość problemów bierze się z tego, że ta sama logika żyje w dwóch miejscach.",
          },
          {
            type: "table",
            caption: "Gdzie znajduje się każdy rodzaj automatyzacji Service Hub",
            head: ["Narzędzie", "Co automatyzuje", "Typowe zastosowanie"],
            rows: [
              [
                "Kanały i routing help desku",
                "Tworzenie zgłoszeń z podłączonych kanałów i ich przypisywanie",
                "Każdy e-mail lub czat do wsparcia staje się zgłoszeniem i trafia do właściwego zespołu",
              ],
              [
                "Pipeline'y i statusy zgłoszeń",
                "Etapy, przez które przechodzi zgłoszenie, oraz to, czy każdy z nich liczy się jako otwarty czy zamknięty",
                "Osobne pipeline'y dla różnych rodzajów pracy wsparcia",
              ],
              [
                "Cele SLA",
                "Cele dla czasu pierwszej odpowiedzi, kolejnej odpowiedzi i zamknięcia",
                "Szybszy cel odpowiedzi dla czatu niż dla e-maila",
              ],
              [
                "Workflowy oparte na zgłoszeniach",
                "Akcje na zgłoszeniach spełniających triggery rejestracji (enrollment triggers)",
                "Rotacja właścicieli, aktualizacja właściwości, opóźnione działania następcze",
              ],
              [
                "Chatboty oparte na regułach",
                "Pytania, tworzenie zgłoszeń i przekazanie do człowieka na czacie",
                "Zbieranie szczegółów zamówienia, zanim dołączy agent",
              ],
              [
                "Webhooki i API",
                "Wysyłanie danych zgłoszeń na zewnątrz oraz tworzenie lub aktualizowanie zgłoszeń z innych systemów",
                "Synchronizacja zgłoszeń z Jira lub narzędziami wewnętrznymi",
              ],
            ],
          },
        ],
      },
      {
        heading: "Kanały i routing help desku",
        blocks: [
          {
            type: "p",
            text: "Help desk to przestrzeń robocza HubSpot do obsługi opartej na zgłoszeniach. Możesz podłączyć do niej kanały czatu, e-maila, formularzy, połączeń telefonicznych i Facebook Messengera. Domyślnie zgłoszenia są tworzone automatycznie z każdego podłączonego kanału, a HubSpot zaleca podłączenie wszystkich kanałów wsparcia, ponieważ zgłoszeniom z niepodłączonych kanałów może w help desku brakować tematu i wątku.",
          },
          {
            type: "p",
            text: "Routing ustawia się dla każdego kanału osobno. Gdy podłączasz na przykład zespołowy adres e-mail, wybierasz domyślny pipeline, status i priorytet nowych zgłoszeń, a potem opcję routingu:",
          },
          {
            type: "ul",
            items: [
              "Konkretni użytkownicy lub zespoły.",
              "Właściciel kontaktu.",
              "Routing według umiejętności (skill-based), który dopasowuje zgłoszenia do umiejętności agentów.",
              "Workflow przydzielania, gdy potrzebujesz logiki wykraczającej poza wbudowane opcje.",
              "Nikt – zgłoszenia zostają wtedy w widoku Unassigned, skąd agenci mogą je podjąć.",
            ],
          },
          {
            type: "note",
            text: "Routing automatyczny i według umiejętności zależy od Twoich licencji (seats) i subskrypcji. Zanim zaprojektujesz rozwiązanie wokół konkretnej opcji routingu, sprawdź, co obejmuje Twoje konto.",
          },
        ],
      },
      {
        heading: "Pipeline'y zgłoszeń, statusy i cele SLA",
        blocks: [
          {
            type: "p",
            text: "Zgłoszenia przechodzą przez pipeline, a w przypadku zgłoszeń etapy pipeline'u nazywają się statusami. Domyślny Support Pipeline ma cztery: New, Waiting on contact, Waiting on us i Closed. Pipeline'ami zarządzasz w Settings > Objects > Tickets > Pipelines, a każdy dodany status musi być oznaczony jako Open lub Closed.",
          },
          {
            type: "p",
            text: "Ten wybór napędza automatyzację. Gdy zgłoszenie przechodzi do statusu zamkniętego, jego Close date ustawia się na dzisiejszą datę; jeśli wróci do statusu otwartego, Close date zostaje wyczyszczona. To zachowanie możesz dostosować dla każdego pipeline'u. Ponieważ workflowy i raporty filtrują według statusu, utrzymuj niewielką liczbę jednoznacznych statusów.",
          },
          {
            type: "p",
            text: "Cele SLA w help desku określają docelowy czas do pierwszej odpowiedzi, czas do kolejnej odpowiedzi i czas do zamknięcia. Cel może dotyczyć wszystkich zgłoszeń, zgłoszeń z określoną wartością właściwości lub kombinacji właściwości, a każdą regułę można ograniczyć do ustalonych godzin i strefy czasowej. Przykłady samego HubSpot obejmują krótszy cel odpowiedzi dla klientów enterprise i szybszy cel odpowiedzi dla czatu niż dla e-maila. Odłożenie (snooze) zgłoszenia nie wpływa na jego SLA.",
          },
        ],
      },
      {
        heading: "Workflowy oparte na zgłoszeniach",
        blocks: [
          {
            type: "p",
            text: "Workflow oparty na zgłoszeniach rejestruje (enroll) zgłoszenia spełniające jego triggery rejestracji, a następnie wykonuje sekwencję akcji. Akcje najbardziej przydatne w pracy wsparcia:",
          },
          {
            type: "ul",
            items: [
              "Opóźnienia: czekanie przez ustaloną liczbę dni, godzin i minut albo do daty w kalendarzu, właściwości typu data lub zdarzenia.",
              "Rozgałęzienia if/then: kierowanie zgłoszeń różnymi ścieżkami na podstawie kryteriów filtrów łączonych przez AND i OR.",
              "Edit record: ustawianie, kopiowanie lub czyszczenie wartości właściwości w zgłoszeniu lub w powiązanym rekordzie.",
              "Create record: tworzenie nowego rekordu, który domyślnie jest powiązany z zarejestrowanym zgłoszeniem.",
              "Rotate record to owner: przypisywanie zgłoszeń po kolei wybranym użytkownikom. Liczniki rotacji są prowadzone dla każdej akcji osobno i resetują się, jeśli dodasz lub usuniesz właścicieli po włączeniu workflow.",
              "Send a webhook: wywołanie zewnętrznego URL z danymi zgłoszenia, opisane w następnej sekcji.",
            ],
          },
          {
            type: "p",
            text: "Dobrzy kandydaci na pierwsze workflowy zgłoszeń w HubSpot:",
          },
          {
            type: "ul",
            items: [
              "Rotacja nowych zgłoszeń w pipeline między grupą agentów.",
              "Kopiowanie właściwości z powiązanego rekordu do zgłoszenia, aby mogły z niej korzystać routing i raporty.",
              "Wysyłanie zgłoszenia do Jira lub narzędzia wewnętrznego przez webhook, gdy zmieni się jego status.",
              "Odczekanie ustalonego czasu po zamknięciu zgłoszenia, a potem rozgałęzienie według właściwości, aby zdecydować o dalszym kontakcie.",
            ],
          },
        ],
      },
      {
        heading: "Chatboty, webhooki i HubSpot API",
        blocks: [
          {
            type: "p",
            text: "Chatboty oparte na regułach obsługują pierwsze minuty czatu. Większość pracy wsparcia wykonują trzy akcje. Ask question zapisuje odpowiedź odwiedzającego we właściwości kontaktu i może oferować szybkie odpowiedzi. Submit a ticket tworzy zgłoszenie z ustawioną przez Ciebie nazwą, pipeline'em i statusem, ale jest pomijana, jeśli odwiedzający nie ma powiązanego rekordu kontaktu. Send to team member przekazuje czat konkretnemu użytkownikowi lub zespołowi po sprawdzeniu, czy są dostępni, a jeśli nie są, wyświetla komunikat o nieobecności. Jeśli bot ma godziny działania, czaty są kierowane do członka zespołu tylko w tych godzinach.",
          },
          {
            type: "p",
            text: "Akcja webhook w workflow wysyła dane na zewnątrz. Wybierz POST lub GET i wpisz URL zaczynający się od HTTPS. Treść żądania POST może zawierać wszystkie właściwości rekordu lub wybrany zestaw kluczy, z których każdy jest zmapowany na właściwość HubSpot. Możesz uwierzytelniać się podpisem żądania, który HubSpot dodaje jako nagłówek do weryfikacji po stronie Twojego endpointu, albo kluczem API przechowywanym jako sekret i wysyłanym w nagłówku lub parametrze zapytania. Akcję możesz przetestować z jej panelu bez wpływu na istniejące rekordy. Dostępność tej akcji zależy od Twojej subskrypcji.",
          },
          {
            type: "p",
            text: "W drugą stronę użyj CRM API. Żądanie POST do /crm/v3/objects/tickets tworzy zgłoszenie; podaj subject, hs_pipeline_stage (status) i hs_pipeline, używając wewnętrznych ID, a nie etykiet. Jeśli nie podasz pipeline'u, użyty zostanie domyślny. Żądanie GET do /crm/v3/properties/tickets zwraca listę właściwości zgłoszeń na Twoim koncie. Aplikacje mogą też subskrybować zdarzenia zgłoszeń przez Webhooks API, w tym ticket.creation i ticket.propertyChange, które uruchamia się, gdy wskazana przez Ciebie właściwość zmieni się w dowolnym zgłoszeniu. Te subskrypcje konfiguruje się na poziomie aplikacji i wymagają one zakresu (scope) tickets.",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje na narzędziach, których już używasz, bez zmiany platformy, wykorzystując API, webhooki oraz Make lub n8n. HubSpot ma udokumentowane API i obsługę webhooków, więc niemal na pewno da się go podłączyć; konkretną konfigurację potwierdzamy podczas bezpłatnej 30-minutowej rozmowy audytowej. Ticket Routing & Categorization to jednorazowy projekt w przedziale 600–950 USD, Automated Reports e-mailem lub na Slacka kosztują 500–900 USD, a Custom Automation obejmująca kilka systemów to 1 200–2 000 USD. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Jakie są domyślne statusy zgłoszeń w HubSpot?",
        a: "Domyślny Support Pipeline ma cztery statusy: New, Waiting on contact, Waiting on us i Closed. Możesz dodać własne i oznaczyć każdy jako Open lub Closed.",
      },
      {
        q: "Czy help desk HubSpot może śledzić SLA?",
        a: "Tak. Cele SLA w help desku mierzą czas do pierwszej odpowiedzi, czas do kolejnej odpowiedzi i czas do zamknięcia, dla wszystkich zgłoszeń lub według właściwości zgłoszeń, i można je ograniczyć do ustalonych godzin. Odłożenie zgłoszenia nie wpływa na jego SLA.",
      },
      {
        q: "Czy chatbot HubSpot może tworzyć zgłoszenia?",
        a: "Tak. Akcja Submit a ticket tworzy zgłoszenie z ustawioną przez Ciebie nazwą, pipeline'em i statusem. Jest pomijana, jeśli odwiedzający nie ma powiązanego rekordu kontaktu.",
      },
      {
        q: "Jak wysłać dane zgłoszeń z HubSpot do innego systemu?",
        a: "Dodaj akcję webhook do workflow opartego na zgłoszeniach; wysyła ona żądanie POST lub GET na URL z HTTPS. Aplikacje mogą też subskrybować zdarzenia zgłoszeń, takie jak ticket.creation i ticket.propertyChange, przez Webhooks API.",
      },
      {
        q: "Czego potrzebuję, aby utworzyć zgłoszenie przez HubSpot API?",
        a: "Wyślij żądanie POST do /crm/v3/objects/tickets z polami subject, hs_pipeline_stage i hs_pipeline, używając wewnętrznych ID. Jeśli pominiesz pipeline, użyty zostanie domyślny.",
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
