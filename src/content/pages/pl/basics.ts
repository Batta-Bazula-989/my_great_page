import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "czym-jest-automatyzacja-obslugi-klienta",
    category: "basics",
    navLabel: "Czym jest automatyzacja obsługi",
    primaryKeyword: "czym jest automatyzacja obsługi klienta",
    title: "Czym jest automatyzacja obsługi klienta? Prosty przewodnik",
    description:
      "Czym jest automatyzacja obsługi klienta: boty, routing, makra, autoodpowiedzi, liczniki SLA i raporty, co zostawić ludziom i jak działa z Twoim helpdeskiem.",
    h1: "Czym jest automatyzacja obsługi klienta?",
    intro:
      "Automatyzacja obsługi klienta to wykorzystanie reguł, botów i integracji do powtarzalnej pracy wsparcia – np. odpowiadania na częste pytania, sortowania zgłoszeń, wysyłania potwierdzeń i pilnowania terminów – bez konieczności wykonywania każdego kroku ręcznie przez agenta. Większość z niej działa w helpdesku, którego już używasz, rozszerzonym o API i webhooki. Chodzi o to, by Twoi agenci mieli więcej czasu na rozmowy, które wymagają osądu.",
    keyFacts: [
      "Triggery Zendesk uruchamiają się natychmiast po utworzeniu lub aktualizacji zgłoszenia; automatyzacje Zendesk są oparte na czasie i działają raz na godzinę.",
      "Makra Zendesk nie mają warunków: to agent decyduje, kiedy je zastosować.",
      "Automatyzacje Zendesk, Freshdesk i Jira mogą wysyłać ze swoich reguł żądania HTTP do innych systemów.",
      "Według wytycznych Zendesk złożone, pilne lub wrażliwe zapytania mogą wymagać przekazania do agenta-człowieka.",
    ],
    sections: [
      {
        heading: "Automatyzacja obsługi klienta – definicja",
        blocks: [
          {
            type: "p",
            text: "Każda automatyzacja wsparcia składa się z tych samych trzech części: czegoś, co ją uruchamia (zdarzenia, np. nowego zgłoszenia, albo upływu czasu), warunków, które decydują, czy ma zastosowanie, oraz akcji, które wykonuje. Helpdeski udostępniają ten model bezpośrednio. Zendesk nazywa je regułami biznesowymi: triggery działają natychmiast po utworzeniu lub aktualizacji zgłoszenia, a automatyzacje są oparte na czasie i działają raz na godzinę na zgłoszeniach, które nie są zamknięte. Zendesk zwraca uwagę, że różnica między nimi nie polega na tym, jakie akcje mogą wykonać, lecz na tym, jakie warunki je uruchamiają.",
          },
          {
            type: "p",
            text: "Automatyzacja to całe spektrum. Na jednym końcu działa, zanim człowiek zobaczy zgłoszenie: bot odpowiada na pytanie albo reguła ustawia priorytet i przypisuje grupę. Na drugim końcu wspiera agenta: zapisana odpowiedź uzupełnia typową treść, a panel boczny pobiera zamówienie klienta z innego systemu. Jedno i drugie się liczy, a większość zespołów potrzebuje obu.",
          },
        ],
      },
      {
        heading: "Główne rodzaje automatyzacji wsparcia",
        blocks: [
          {
            type: "table",
            caption: "Typowe rodzaje automatyzacji obsługi klienta",
            head: ["Rodzaj", "Co robi", "Przykład w helpdesku"],
            rows: [
              [
                "Samoobsługa i boty",
                "Odpowiada na częste pytania na czacie, w komunikatorach lub e-mailem bez udziału agenta",
                "Agenci AI Zendesk odpowiadają na pytania na podstawie treści z Twoich źródeł wiedzy i mogą eskalować do człowieka",
              ],
              [
                "Routing i triaż",
                "Klasyfikuje nowe zgłoszenia i kieruje je do właściwej grupy lub agenta",
                "Triggery Zendesk mogą dodawać umiejętności do zgłoszeń przy ich tworzeniu lub aktualizacji; routing omnichannel przydziela pracę według dostępności i obciążenia agentów",
              ],
              [
                "Makra i gotowe odpowiedzi",
                "Stosuje zapisaną odpowiedź i aktualizacje zgłoszenia jedną akcją",
                "Makro Zendesk może dodać treść komentarza, zaktualizować pola, dodać lub usunąć tagi i zmienić osobę przypisaną",
              ],
              [
                "Autoodpowiedzi",
                "Od razu potwierdza otrzymanie i określa oczekiwania",
                "Trigger oparty na zdarzeniu, który po utworzeniu zgłoszenia wysyła zgłaszającemu e-mail z potwierdzeniem",
              ],
              [
                "Liczniki SLA i eskalacje",
                "Śledzi terminy odpowiedzi i rozwiązania oraz ostrzega przed ich przekroczeniem",
                "Polityka SLA plus reguła czasowa, która alarmuje lidera zespołu, zanim cel zostanie przekroczony",
              ],
              [
                "Raportowanie",
                "Zbiera wskaźniki wsparcia i dostarcza je według harmonogramu",
                "Cotygodniowe podsumowanie liczby zgłoszeń, czasu pierwszej odpowiedzi i CSAT wysyłane e-mailem lub na Slacka",
              ],
            ],
          },
          {
            type: "p",
            text: "Makra to przydatny przypadek graniczny. Zendesk zauważa, że makra nie mają warunków: nic nie ocenia zgłoszenia, by zdecydować, czy makro ma zastosowanie, więc wybiera je agent. Dlatego zapisane odpowiedzi to najmniej ryzykowne miejsce na start – za każdym razem decyduje człowiek.",
          },
          {
            type: "p",
            text: "Routing to często obszar, w którym automatyzacja zwraca się najszybciej, bo dotyczy każdego zgłoszenia. Na przykład intelligent triage w Zendesk klasyfikuje nowe zgłoszenia według tematu, sentymentu i języka i może kierować je przez routing omnichannel, routing według umiejętności lub triggery. Prostsze konfiguracje ustawiają grupę i priorytet regułami opartymi na słowach kluczowych lub polach formularza.",
          },
        ],
      },
      {
        heading: "Co powinno zostać w rękach ludzi",
        blocks: [
          {
            type: "p",
            text: "Automatyzacja dobrze radzi sobie z powtarzalną, jasno zdefiniowaną pracą. Słabo radzi sobie z osądem, empatią i wyjątkami. Wytyczne Zendesk dotyczące agentów AI mówią, że zapytanie czasem musi zostać przekazane do agenta-człowieka, gdy jest złożone, pilne lub wrażliwe, i zalecają zdefiniowanie ścieżek eskalacji przed uruchomieniem. W praktyce zostaw ludziom:",
          },
          {
            type: "ul",
            items: [
              "Reklamacje, rezygnacje i rozmowy nacechowane emocjami",
              "Spory o rozliczenia, zwroty poza polityką i inne wyjątki, które wymagają osoby z uprawnieniami decyzyjnymi",
              "Bezpieczeństwo konta i weryfikację tożsamości, gdzie pomyłka jest kosztowna",
              "Pytania, których bot nie potrafi sklasyfikować albo na które już nie zdołał odpowiedzieć",
              "Klientów o wysokiej wartości lub zagrożonych odejściem, których postanowiłeś obsługiwać osobiście",
            ],
          },
          {
            type: "p",
            text: "Cokolwiek automatyzujesz, zachowaj widoczny sposób kontaktu z człowiekiem i przekazuj historię rozmowy, aby klient nie musiał się powtarzać. Jak to zrobić, opisujemy w naszym przewodniku o przekazywaniu rozmowy z chatbota do człowieka.",
          },
        ],
      },
      {
        heading: "Jak automatyzacja łączy się z Twoim helpdeskiem",
        blocks: [
          {
            type: "p",
            text: "Rzadko trzeba wymieniać helpdesk, aby go zautomatyzować. Nowoczesne helpdeski mogą ze swoich reguł wywoływać inne systemy, a inne systemy mogą aktualizować zgłoszenia przez API helpdesku. Tak powstają niestandardowe automatyzacje:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: tworzysz webhook w Admin Center, a potem podpinasz go do triggera lub automatyzacji akcją 'Notify webhook'. Treść żądania może mieć format JSON, XML lub form-encoded, a placeholdery wstawiają dane zgłoszenia.",
              "Freshdesk: reguły automatyzacji działające przy tworzeniu lub aktualizacji zgłoszeń mogą używać akcji 'Trigger webhook' z metodami GET, POST, PUT, PATCH lub DELETE i placeholderami takimi jak {{ticket.id}}. Nieudane webhooki są ponawiane co 30 minut, maksymalnie do 48 wywołań.",
              "Jira: akcja automatyzacji 'Send web request' wywołuje inny system, gdy reguła się uruchamia, i może czekać na odpowiedź, aby dalsze kroki mogły wykorzystać zwrócone dane.",
            ],
          },
          {
            type: "p",
            text: "Typowy niestandardowy przepływ wygląda tak:",
          },
          {
            type: "ol",
            items: [
              "Reguła helpdesku uruchamia się na nowym lub zaktualizowanym zgłoszeniu i wysyła webhook.",
              "Narzędzie do przepływów, takie jak Make lub n8n, albo niewielka usługa odbiera go i wyszukuje dane w innym miejscu: w systemie zamówień, CRM lub modelu językowym.",
              "Przepływ zapisuje wynik z powrotem przez API helpdesku jako tag, wartość pola, notatkę prywatną lub przypisanie.",
              "Agenci widzą wynik w zgłoszeniu, a dalej działają już własne reguły helpdesku.",
            ],
          },
        ],
      },
      {
        heading: "Od czego zacząć",
        blocks: [
          {
            type: "ol",
            items: [
              "Spisz najczęstsze typy próśb z ostatniego miesiąca i zaznacz te, które za każdym razem przebiegają według tych samych kroków.",
              "Najpierw uporządkuj routing i autoodpowiedzi. Dotyczą każdego zgłoszenia i łatwo je zweryfikować.",
              "Zamień powtarzające się odpowiedzi w makra lub gotowe odpowiedzi, zanim umieścisz je w bocie.",
              "Dodaj bota dla najczęstszych pytań o niskim ryzyku, z jasnym przekazaniem do człowieka.",
              "Mierz czas pierwszej odpowiedzi, czas rozwiązania i CSAT przed każdą zmianą i po niej, aby wiedzieć, co naprawdę pomogło.",
            ],
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab to jednoosobowa praktyka – prowadzi ją Roman Zakharenko – która buduje automatyzację wsparcia na narzędziach, których już używasz, w tym Zendesk, Freshdesk, Jira i Slack, z wykorzystaniem API, webhooków oraz Make lub n8n. Ceny jednorazowe obejmują Ticket Routing & Categorization (600–950 USD), Starter Chat Bot (350–450 USD) i Automated Reports (500–900 USD). Większość wdrożeń trwa 1–3 tygodnie i obejmuje podstawową dokumentację oraz 30 dni wsparcia po uruchomieniu, bez ukrytych opłat. Możesz zacząć od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy automatyzacja obsługi klienta to to samo co chatbot?",
        a: "Nie. Chatbot to tylko jeden z jej rodzajów. Reguły routingu, makra, autoodpowiedzi, liczniki SLA i raporty wysyłane według harmonogramu to również automatyzacja wsparcia, a wiele zespołów zaczyna właśnie od nich, bo dotyczą każdego zgłoszenia.",
      },
      {
        q: "Czym różni się trigger od automatyzacji w Zendesk?",
        a: "Triggery są oparte na zdarzeniach i działają natychmiast po utworzeniu lub aktualizacji zgłoszenia. Automatyzacje są oparte na czasie i działają raz na godzinę, więc nadają się do akcji takich jak przypomnienie po ustalonej liczbie godzin.",
      },
      {
        q: "Czy muszę zmienić helpdesk, aby zautomatyzować wsparcie?",
        a: "Zwykle nie. Automatyzacje Zendesk, Freshdesk i Jira mogą wysyłać ze swoich reguł wychodzące żądania HTTP, więc możesz podłączyć inne systemy do helpdesku, którego już używasz.",
      },
      {
        q: "Czego nie należy automatyzować w obsłudze klienta?",
        a: "Złożonych, pilnych lub wrażliwych rozmów, które według wytycznych Zendesk mogą wymagać agenta-człowieka, a także sporów i wyjątków od zasad, o których musi zdecydować osoba z odpowiednimi uprawnieniami.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "przekazanie-rozmowy-z-chatbota-do-konsultanta",
    category: "basics",
    navLabel: "Przekazanie z bota do konsultanta",
    primaryKeyword: "przekazanie rozmowy z chatbota do konsultanta",
    title: "Przekazanie z chatbota do konsultanta: kiedy, co i jak",
    description:
      "Przekazanie rozmowy z chatbota do konsultanta: kiedy eskalować, jaki kontekst przekazać, co po godzinach pracy i jak robią to Zendesk, Freshdesk i Messenger.",
    h1: "Przekazanie z chatbota do konsultanta: jak eskalować i nie stracić klienta",
    intro:
      "Przekazanie rozmowy z chatbota do konsultanta to moment, w którym bot przestaje obsługiwać rozmowę i przekazuje ją – wraz z historią i zebranymi danymi – człowiekowi lub do kolejki. Dobre przekazanie następuje we właściwym momencie, niesie ze sobą kontekst, aby klient nie musiał się powtarzać, i działa nawet wtedy, gdy nikt nie jest online. Ten przewodnik omawia wyzwalacze, kontekst do przekazania oraz to, jak realizują to Zendesk, Freshdesk i Messenger.",
    keyFacts: [
      "Zendesk podaje, że agent AI może musieć przekazać zapytanie człowiekowi, gdy jest ono złożone, pilne lub wrażliwe.",
      "Freshdesk AI Agents mogą automatycznie przekazać rozmowę, gdy klient użyje zdefiniowanych przez Ciebie fraz wyzwalających, np. poprosi o konsultanta.",
      "W Dialogflow CX, jeśli żadna intencja nie osiąga progu klasyfikacji, zamiast dopasowania uruchamia się zdarzenie no-match.",
      "W Messengerze protokół przekazywania (handover protocol) decyduje, która aplikacja jest właścicielem wątku rozmowy; Meta przeniosła Instagram na Conversation Routing.",
    ],
    sections: [
      {
        heading: "Czym jest przekazanie rozmowy z chatbota do człowieka",
        blocks: [
          {
            type: "p",
            text: "Przekazanie (handoff), nazywane też eskalacją lub transferem, przenosi odpowiedzialność za rozmowę z automatyzacji na człowieka. W zależności od kanału efektem jest czat na żywo przypisany do konsultanta, rozmowa czekająca w kolejce albo zgłoszenie, które konsultant podejmie później. W agentach AI Zendesk buduje się to za pomocą bloków eskalacji w kreatorze dialogów, które określają, jak zapytanie trafia do człowieka, gdy agent AI nie potrafi go rozwiązać.",
          },
          {
            type: "p",
            text: "Przekazania mają dwie formy. Przy przekazaniu synchronicznym klient pozostaje w tej samej rozmowie na żywo, a dołącza do niej konsultant. Przy przekazaniu asynchronicznym tworzone jest zgłoszenie, aby konsultant mógł odpowiedzieć później – to typowe rozwiązanie awaryjne, gdy nikt nie jest dostępny. Zendesk dokumentuje oba warianty, w tym przepływ asynchronicznych eskalacji do zgłoszeń, który pozwala klientom zostawić wiadomość, gdy Twój zespół jest niedostępny.",
          },
        ],
      },
      {
        heading: "Kiedy bot powinien przekazać rozmowę",
        blocks: [
          {
            type: "table",
            caption: "Typowe wyzwalacze przekazania z chatbota",
            head: ["Wyzwalacz", "Jak to wygląda", "Jak jest wykrywany"],
            rows: [
              [
                "Klient prosi o człowieka",
                "„Konsultant”, „chcę rozmawiać z człowiekiem”, „to nic nie pomaga”",
                "Freshdesk AI Agents przekazują rozmowę automatycznie po frazach wyzwalających z Twojej listy, np. prośbie o rozmowę z konsultantem",
              ],
              [
                "Niska pewność lub brak dopasowania",
                "Bot nie potrafi ustalić, czego chce klient",
                "Dialogflow CX uruchamia zdarzenie no-match, gdy żadna intencja nie osiąga progu klasyfikacji; wykorzystaj tę ścieżkę awaryjną, aby zaproponować człowieka",
              ],
              [
                "Temat wrażliwy lub pilny",
                "Reklamacje, nieudane płatności, zabezpieczenia konta, kwestie prawne lub zagrożenie bezpieczeństwa",
                "Zendesk wymienia złożone, pilne lub wrażliwe zapytania jako powody przekazania; przykładowe frazy wyzwalające we Freshdesk obejmują zgłoszenie nieudanej płatności",
              ],
              [
                "Powtarzające się niepowodzenia",
                "Klient przeformułowuje to samo pytanie albo bot się zapętla",
                "Licz odpowiedzi awaryjne (fallback) w sesji i eskaluj po ustalonej ich liczbie",
              ],
              [
                "Reguła biznesowa",
                "Konto VIP, wysoka wartość zamówienia, otwarty incydent",
                "Pobierz dane klienta przez API, zanim bot odpowie, i kieruj takich klientów od razu do człowieka",
              ],
            ],
          },
          {
            type: "p",
            text: "Pewność dopasowania to wyzwalacz, którego zespoły najczęściej nie definiują wprost. W Dialogflow CX intencja z najwyższym wynikiem jest zwracana jako dopasowanie tylko wtedy, gdy jej wynik pewności jest większy lub równy progowi klasyfikacji; w przeciwnym razie wywoływane jest zdarzenie no-match. Traktuj to zdarzenie jako sygnał: zadaj jedno pytanie doprecyzowujące, a jeśli sytuacja się powtórzy, przekaż rozmowę.",
          },
          {
            type: "p",
            text: "Zendesk radzi też, by oferować eskalację tylko wtedy, gdy agent AI nie może skierować klienta do zasobów samoobsługowych. Dzięki temu konsultanci zajmują się prawdziwymi problemami, ale nie ukrywaj tej opcji. Klient, który wprost prosi o człowieka, powinien go dostać albo otrzymać jasną informację, kiedy to nastąpi.",
          },
        ],
      },
      {
        heading: "Przekazuj kontekst, nie tylko klienta",
        blocks: [
          {
            type: "p",
            text: "Przekazanie, które gubi rozmowę, zmusza klienta do zaczynania od nowa. Na przykład starszy (legacy) krok Transfer to agent w Zendesk tworzy zgłoszenie zawierające historię rozmowy klienta, której klient nie widzi, i może dodać do tego zgłoszenia tagi na potrzeby routingu. Freshdesk AI Agents mogą przed przekazaniem zebrać dane, takie jak ID klienta, numer referencyjny lub numer zamówienia, jeśli zbieranie właściwości jest włączone zarówno w ustawieniach zachowania w rozmowie, jak i w ustawieniach przekazania.",
          },
          {
            type: "p",
            text: "Konsultant powinien otrzymać co najmniej:",
          },
          {
            type: "ul",
            items: [
              "Pełny zapis rozmowy, łącznie z tym, co bot już zaproponował",
              "Powód przekazania: prośba klienta, brak dopasowania, wrażliwy temat lub reguła biznesowa",
              "Dane identyfikacyjne, takie jak imię i nazwisko, e-mail lub ID konta, oraz informację, czy zostały zweryfikowane",
              "Ustrukturyzowane pola zebrane przez bota, np. numer zamówienia lub produkt",
              "Tagi lub kategorię, aby reguły routingu skierowały rozmowę do właściwej grupy",
            ],
          },
          {
            type: "p",
            text: "W tej samej wiadomości ustaw oczekiwania klienta: napisz, że rozmowę przejmuje człowiek, i mniej więcej kiedy klient dostanie odpowiedź.",
          },
        ],
      },
      {
        heading: "Jak przekazanie realizują Zendesk, Freshdesk i Messenger",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: bloki eskalacji w kreatorze dialogów agenta AI decydują, dokąd trafia rozmowa, gdy agent AI nie potrafi jej rozwiązać, np. przekazują ją do konsultanta. Blok dostępności (availability) może przed eskalacją sprawdzić godziny pracy lub dostępność konsultantów.",
              "Freshdesk: w ustawieniach przekazania AI Agenta włączasz Transfer conversation, wpisujesz frazy wyzwalające, które mają powodować automatyczne przekazanie, i możesz polecić AI Agentowi wcześniejsze zebranie danych klienta.",
              "Messenger: gdy wiadomości strony na Facebooku obsługuje więcej niż jedna aplikacja, np. Twój bot i skrzynka czatu na żywo, protokół przekazywania Meta (handover protocol) decyduje, która aplikacja jest właścicielem wątku. Webhook messaging_handovers raportuje zdarzenia przekazania kontroli nad wątkiem (pass), przejęcia kontroli (take), prośby o kontrolę (request) oraz ról aplikacji. Zdarzenie pass_thread_control zawiera ID poprzedniej i nowej aplikacji-właściciela oraz ciąg metadata ustawiony w żądaniu API – to wygodne miejsce na powód przekazania.",
              "Instagram: według changelogu Meta protokół przekazywania nie jest już obsługiwany na Instagramie, a wszystkie firmy zostały przeniesione na Conversation Routing, który pozwala określić, którzy partnerzy kontrolują rozmowy z klientami w danym momencie. Meta opisuje Conversation Routing jako wstecznie kompatybilny z większością API protokołu przekazywania.",
            ],
          },
        ],
      },
      {
        heading: "Obsługa poza godzinami pracy",
        blocks: [
          {
            type: "p",
            text: "Bot, który obiecuje człowieka, gdy nikt nie jest online, jest gorszy niż brak przekazania. Najpierw sprawdź dostępność, a potem wybierz rozwiązanie awaryjne:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: blok dostępności sprawdza godziny pracy lub dostępność konsultantów. W kanale synchronicznym, takim jak messaging, Zendesk sugeruje, by poza godzinami pracy konsultantów eskalować zamiast tego e-mailem, a jego przepływ asynchronicznych eskalacji do zgłoszeń pozwala klientom zostawić wiadomość, na którą człowiek odpowie później.",
              "Freshdesk: opcja Transfer outside business hours pozwala wybrać harmonogram godzin pracy, przekazać rozmowę do konsultanta lub do grupy i napisać wiadomość, którą zobaczy klient.",
              "Dowolna platforma: utwórz zgłoszenie z zapisem rozmowy, poinformuj, kiedy zespół wróci, i pozwól botowi w międzyczasie dalej odpowiadać na pytania samoobsługowe.",
            ],
          },
          {
            type: "note",
            text: "Ścieżkę poza godzinami pracy testuj osobno. To gałąź, która najłatwiej psuje się niezauważona, bo gdy działa, nikt z zespołu nie jest online.",
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje chatboty z przekazaniem do Twojego istniejącego helpdesku lub Slacka: Starter Chat Bot (350–450 USD) lub Standard Chat Bot (500–650 USD), połączone przez API, webhooki oraz Make lub n8n. Każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Bezpłatna 30-minutowa rozmowa audytowa to dobry moment, by rozpisać wyzwalacze przekazania.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kiedy chatbot powinien przekazać rozmowę człowiekowi?",
        a: "Gdy klient prosi o człowieka, gdy bot nie potrafi z wystarczającą pewnością dopasować prośby oraz gdy temat jest złożony, pilny lub wrażliwy – tak Zendesk opisuje zapytania, które wymagają konsultanta.",
      },
      {
        q: "Jak sprawić, by klienci nie musieli się powtarzać po przekazaniu?",
        a: "Przekaż do zgłoszenia lub czatu zapis rozmowy, powód przekazania i wszystkie dane zebrane przez bota. Starszy krok przekazania w Zendesk dodaje historię rozmowy do zgłoszenia, a Freshdesk AI Agents mogą przed przekazaniem zebrać dane, takie jak numer zamówienia.",
      },
      {
        q: "Czym jest protokół przekazywania (handover protocol) w Messengerze?",
        a: "To mechanizm Meta, który decyduje, która aplikacja jest właścicielem wątku rozmowy w Messengerze, gdy tę samą stronę obsługuje kilka aplikacji. Aplikacje przekazują, przejmują i proszą o kontrolę nad wątkiem, a webhook messaging_handovers raportuje te zdarzenia.",
      },
      {
        q: "Co się dzieje, gdy klient prosi o człowieka poza godzinami pracy?",
        a: "Przed eskalacją sprawdź dostępność. Zendesk i Freshdesk pozwalają inaczej obsługiwać przekazania poza godzinami pracy, np. tworząc zgłoszenie do późniejszej obsługi i wyświetlając informację o tym, kiedy zespół jest dostępny.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
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
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "wskazniki-obslugi-klienta",
    category: "basics",
    navLabel: "Wskaźniki obsługi klienta",
    primaryKeyword: "wskaźniki obsługi klienta",
    title: "Wskaźniki obsługi klienta: definicje i wzory",
    description:
      "Wskaźniki obsługi klienta: czas pierwszej odpowiedzi, czas rozwiązania, FCR, ponowne otwarcia, CSAT, CES, NPS i backlog oraz jak liczy się każdy z nich.",
    h1: "Wskaźniki obsługi klienta: co mierzyć i jak liczy się każdy z nich",
    intro:
      "Wskaźniki obsługi klienta to pomiary pokazujące, jak szybko, jak dobrze i przy jakim obciążeniu Twój zespół rozwiązuje prośby klientów. Podstawowy zestaw obejmuje szybkość (czas pierwszej odpowiedzi i czas rozwiązania), jakość (rozwiązanie przy pierwszym kontakcie i ponowne otwarcia), opinie klientów (CSAT, CES i NPS) oraz obciążenie (backlog). Poniżej każdy z nich zdefiniowano tak, jak definiują go dostawcy helpdesków i pierwotni autorzy.",
    keyFacts: [
      "Full resolution time w Zendesk liczy się od utworzenia zgłoszenia do jego ostatniego rozwiązania, więc ponownie otwarte zgłoszenia nadal nabijają czas.",
      "Freshdesk wlicza zgłoszenie do FCR tylko wtedy, gdy klient po pierwszym kontakcie nie wysłał żadnych kolejnych wiadomości.",
      "NPS to odsetek promotorów (oceny 9–10) minus odsetek krytyków (oceny 0–6).",
      "NPS wprowadził Fred Reichheld w Harvard Business Review w grudniu 2003 roku.",
      "Argumenty za mierzeniem wysiłku klienta przedstawiono w artykule HBR „Stop Trying to Delight Your Customers” z lipca 2010 roku.",
    ],
    sections: [
      {
        heading: "Najważniejsze wskaźniki obsługi klienta w skrócie",
        blocks: [
          {
            type: "table",
            caption: "Wskaźniki obsługi klienta i sposób ich obliczania",
            head: ["Wskaźnik", "Co mierzy", "Jak się go oblicza"],
            rows: [
              [
                "Czas pierwszej odpowiedzi (FRT)",
                "Jak długo klienci czekają na pierwszą odpowiedź",
                "Czas od utworzenia zgłoszenia do pierwszej odpowiedzi agenta, raportowany jako średnia lub mediana dla wszystkich zgłoszeń",
              ],
              [
                "Pełny czas rozwiązania (full resolution time)",
                "Ile trwa ostateczne rozwiązanie zgłoszenia",
                "Czas od utworzenia zgłoszenia do jego ostatniego rozwiązania (definicja Zendesk)",
              ],
              [
                "Średni czas rozwiązania",
                "Typowy czas rozwiązania dla wielu zgłoszeń",
                "Suma czasów rozwiązania podzielona przez liczbę zgłoszeń rozwiązanych w danym okresie",
              ],
              [
                "Rozwiązanie przy pierwszym kontakcie (FCR)",
                "Odsetek spraw rozwiązanych bez powrotu klienta",
                "Zgłoszenia rozwiązane bez kolejnych wiadomości klienta po pierwszym kontakcie, podzielone przez wszystkie zgłoszenia rozwiązane w danym okresie (definicja Freshdesk)",
              ],
              [
                "Ponowne otwarcia",
                "Zgłoszenia, które tak naprawdę nie zostały rozwiązane",
                "Liczba zgłoszeń przeniesionych ze statusu Solved z powrotem do Open (Zendesk), często pokazywana jako odsetek rozwiązanych zgłoszeń",
              ],
              [
                "CSAT",
                "Zadowolenie z konkretnej interakcji",
                "Zgłoszenia ocenione jako dobre podzielone przez wszystkie zgłoszenia z oceną, w procentach (Zendesk Explore)",
              ],
              [
                "CES",
                "Ile wysiłku musiał włożyć klient",
                "Ankieta po interakcji dotycząca łatwości lub wysiłku, śledzona jako średni wynik lub odsetek odpowiedzi wskazujących niski wysiłek",
              ],
              [
                "NPS",
                "Gotowość do polecenia firmy",
                "Odsetek promotorów (9–10) minus odsetek krytyków (0–6) na skali 0–10",
              ],
              [
                "Backlog",
                "Nierozwiązana praca czekająca na zespół",
                "Liczba zgłoszeń w statusie New, Open, Pending lub On-hold w danym momencie (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Szybkość: czas pierwszej odpowiedzi i czas rozwiązania",
        blocks: [
          {
            type: "p",
            text: "Czas pierwszej odpowiedzi to odstęp między utworzeniem zgłoszenia a pierwszą odpowiedzią agenta – tak mierzy go wskaźnik first reply time w Zendesk. To pierwsze oczekiwanie, którego doświadcza klient, i zwykle pierwszy cel, jaki zespoły wpisują do polityki SLA.",
          },
          {
            type: "p",
            text: "Czas rozwiązania mierzy, ile trwa rozwiązanie problemu. Full resolution time w Zendesk liczy się od utworzenia do ostatniego rozwiązania zgłoszenia, więc zgłoszenie ponownie otwarte i rozwiązane jeszcze raz wciąż nabija czas. Średni czas rozwiązania to po prostu średnia tych czasów dla zgłoszeń rozwiązanych w danym okresie. Kilka bardzo starych zgłoszeń może mocno zawyżyć średnią, dlatego warto patrzeć obok niej także na medianę.",
          },
          {
            type: "p",
            text: "Dwa ustawienia bardzo zmieniają te liczby: czy liczysz godziny pracy, czy godziny kalendarzowe, oraz czy automatyczne odpowiedzi liczą się jako odpowiedź. Zdecyduj raz, zapisz to i trzymaj się tego, aby trendy dało się porównywać z miesiąca na miesiąc.",
          },
        ],
      },
      {
        heading: "Jakość: rozwiązanie przy pierwszym kontakcie i ponowne otwarcia",
        blocks: [
          {
            type: "p",
            text: "Rozwiązanie przy pierwszym kontakcie (FCR) to odsetek spraw rozwiązanych bez konieczności powrotu klienta. Freshdesk oblicza FCR% jako liczbę zgłoszeń rozwiązanych lub zamkniętych po pierwszym kontakcie klienta, podzieloną przez wszystkie zgłoszenia rozwiązane lub zamknięte w wybranym okresie. Zgłoszenie się kwalifikuje tylko wtedy, gdy klient nie wysłał żadnych wiadomości po pierwszej; początkowy opis zgłoszenia nie liczy się jako odpowiedź klienta, a liczba odpowiedzi agenta nie ma znaczenia. Zgłoszenia ponownie otwarte są pomijane, podobnie jak zgłoszenia wychodzące rozpoczęte przez agenta.",
          },
          {
            type: "p",
            text: "Ponowne otwarcia wychwytują sytuację odwrotną: zgłoszenie oznaczone jako rozwiązane, które wraca. Zendesk rejestruje ponowne otwarcie, gdy status zgłoszenia zmienia się z Solved z powrotem na Open. Obserwuj FCR i ponowne otwarcia razem. Jeśli Twój zespół zamyka zgłoszenia przedwcześnie, by osiągnąć cel czasu rozwiązania, liczba ponownych otwarć wzrośnie.",
          },
          {
            type: "note",
            text: "Dostawcy różnie definiują FCR: jedni liczą odpowiedzi agenta, inni odpowiedzi klienta, a jeszcze inni wykluczają niektóre kanały. Zanim porównasz swój wynik z cudzym, sprawdź definicję w swoim helpdesku.",
          },
        ],
      },
      {
        heading: "Opinie klientów: CSAT, CES i NPS",
        blocks: [
          {
            type: "p",
            text: "CSAT (customer satisfaction score) prosi klientów o ocenę konkretnej interakcji. W Zendesk Explore wynik zadowolenia to liczba zgłoszeń ocenionych jako dobre podzielona przez wszystkie zgłoszenia z odpowiedzią w ankiecie zadowolenia, pokazana w procentach. Ponieważ CSAT jest powiązany z jednym zgłoszeniem, to najbardziej bezpośrednia informacja zwrotna o pracy Twojego zespołu wsparcia.",
          },
          {
            type: "p",
            text: "CES (customer effort score) pyta, jak łatwo było załatwić sprawę. Pomysł pochodzi z artykułu „Stop Trying to Delight Your Customers” opublikowanego w Harvard Business Review w lipcu 2010 roku. Opierał się on na badaniu ponad 75 000 osób, które miały kontakt z konsultantami contact center lub z kanałami samoobsługowymi, i dowodził, że wychodzenie ponad oczekiwania niewiele zmienia w lojalności, natomiast zmniejszanie wysiłku klienta – owszem. Brzmienie pytań i skale różnią się między narzędziami, więc wybierz jedną wersję i się jej trzymaj.",
          },
          {
            type: "p",
            text: "NPS (Net Promoter Score) mierzy gotowość do polecenia firmy, a nie tylko jedną interakcję. Fred Reichheld z Bain & Company wprowadził go w artykule „The One Number You Need to Grow”, opublikowanym w Harvard Business Review w grudniu 2003 roku. Klienci określają na skali 0–10, jak bardzo prawdopodobne jest, że polecą firmę znajomemu lub współpracownikowi. Oceny 9–10 to promotorzy, 7–8 to pasywni, a 0–6 to krytycy. NPS to odsetek promotorów minus odsetek krytyków, więc przyjmuje wartości od -100 do +100.",
          },
        ],
      },
      {
        heading: "Obciążenie: backlog i uczciwe wskaźniki",
        blocks: [
          {
            type: "p",
            text: "Backlog to nierozwiązana praca czekająca na Twój zespół. Zendesk definiuje backlog zgłoszeń jako wszystkie zgłoszenia znajdujące się aktualnie w statusie New, Open, Pending lub On-hold, zarówno przypisane, jak i nieprzypisane. Śledź go jako codzienny zrzut stanu, aby widzieć trend. Backlog rosnący z tygodnia na tydzień oznacza, że napływ zgłoszeń przewyższa możliwości zespołu, nawet jeśli czasy odpowiedzi nadal wyglądają dobrze.",
          },
          {
            type: "p",
            text: "Kilka nawyków sprawia, że wskaźniki pozostają przydatne:",
          },
          {
            type: "ul",
            items: [
              "Łącz wskaźnik szybkości ze wskaźnikiem jakości, np. czas rozwiązania z ponownymi otwarciami, aby jeden nie poprawiał się kosztem drugiego.",
              "Segmentuj według kanału i priorytetu. Pierwsza odpowiedź na czacie i pierwsza odpowiedź e-mailowa nie są porównywalne.",
              "Utrzymuj w czasie te same definicje i to samo ustawienie godzin, a każdą zmianę odnotowuj w raportach.",
              "Zamień najważniejsze cele w polityki SLA, aby helpdesk śledził je w każdym zgłoszeniu.",
            ],
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "Usługa Automated Reports od TascaLab (500–900 USD, jednorazowo) pobiera te wskaźniki z Twojego helpdesku, np. Zendesk, Freshdesk lub Jira, i dostarcza cykliczne podsumowanie e-mailem lub na Slacka. Każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Bezpłatna 30-minutowa rozmowa audytowa pomaga zdecydować, które wskaźniki warto zautomatyzować najpierw.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się czas pierwszej odpowiedzi od czasu rozwiązania?",
        a: "Czas pierwszej odpowiedzi kończy się wraz z pierwszą odpowiedzią agenta. Czas rozwiązania kończy się, gdy zgłoszenie zostanie rozwiązane; full resolution time w Zendesk liczy się do ostatniego rozwiązania, więc ponownie otwarte zgłoszenia nadal nabijają czas.",
      },
      {
        q: "Jak oblicza się NPS?",
        a: "Zapytaj klientów na skali 0–10, jak bardzo prawdopodobne jest, że Cię polecą, a następnie od odsetka promotorów (9–10) odejmij odsetek krytyków (0–6). Pasywni (7–8) liczą się do ogólnej liczby odpowiedzi, ale nie biorą udziału w odejmowaniu.",
      },
      {
        q: "Czym różnią się CSAT, CES i NPS?",
        a: "CSAT ocenia zadowolenie z konkretnej interakcji, CES mierzy, ile wysiłku kosztowało załatwienie sprawy, a NPS mierzy, jak bardzo prawdopodobne jest, że klient poleci firmę jako całość.",
      },
      {
        q: "Jak Freshdesk oblicza rozwiązanie przy pierwszym kontakcie?",
        a: "FCR% to liczba zgłoszeń rozwiązanych bez kolejnych wiadomości klienta po pierwszym kontakcie, podzielona przez wszystkie zgłoszenia rozwiązane w danym okresie. Zgłoszenia ponownie otwarte i wychodzące są wykluczane.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    key: "sla-policies-explained",
    slug: "polityki-sla-w-obsludze-klienta",
    category: "basics",
    navLabel: "Polityki SLA – wyjaśnienie",
    primaryKeyword: "polityki SLA w obsłudze klienta",
    title: "Polityki SLA w obsłudze klienta – wyjaśnienie",
    description:
      "Polityki SLA w obsłudze klienta: cele pierwszej i kolejnej odpowiedzi oraz rozwiązania, godziny pracy a kalendarzowe, wstrzymywanie, alerty i konfiguracja.",
    h1: "Polityki SLA w obsłudze klienta – wyjaśnienie",
    intro:
      "Polityka SLA to zestaw reguł w Twoim helpdesku, który przypisuje zgłoszeniom docelowe czasy odpowiedzi i rozwiązania na podstawie warunków, takich jak priorytet, i śledzi każde zgłoszenie względem tych celów. Decyduje, które zgłoszenia dostają jakie cele, czy zegar liczy godziny pracy, czy kalendarzowe, kiedy zegar się zatrzymuje i co dzieje się przed przekroczeniem. Oto jak działają polityki SLA i jak konfigurują je Zendesk, Freshdesk i Jira Service Management.",
    keyFacts: [
      "Zendesk stosuje pierwszą politykę SLA (licząc od góry listy), której warunki spełnia zgłoszenie.",
      "W Zendesk requester wait time wstrzymuje się w statusie Pending, a agent work time – w statusach Pending i On-hold.",
      "Freshdesk pozwala liczyć każde SLA w godzinach pracy lub w godzinach kalendarzowych (24x7).",
      "Przypomnienia we Freshdesk można ustawić od 5 minut do 4 godzin przed terminem celu SLA.",
      "W Jira Service Management każde SLA ma warunki startu, wstrzymania i zatrzymania oraz cele, które wybierają żądania za pomocą JQL.",
    ],
    sections: [
      {
        heading: "Czym jest polityka SLA",
        blocks: [
          {
            type: "p",
            text: "Umowa o poziomie usług (SLA, service level agreement) to obietnica dotycząca tego, jak szybko odpowiesz na prośby i je rozwiążesz. Polityka SLA to sposób, w jaki Twój helpdesk egzekwuje tę obietnicę w każdym zgłoszeniu. Większość polityk składa się z tych samych elementów:",
          },
          {
            type: "ul",
            items: [
              "Warunki: do jakich zgłoszeń polityka ma zastosowanie, np. według klienta, kanału lub typu prośby",
              "Cele: limity czasu na pierwszą odpowiedź, kolejne odpowiedzi i rozwiązanie, zwykle ustawiane dla każdego priorytetu",
              "Godziny: czy zegar liczy godziny pracy, czy godziny kalendarzowe",
              "Reguły wstrzymania: które statusy zatrzymują zegar",
              "Działania przy przekroczeniu: przypomnienia przed niedotrzymaniem celu i eskalacje po nim",
            ],
          },
          {
            type: "p",
            text: "Gdy masz kilka polityk, liczy się kolejność. Zendesk najpierw uruchamia triggery, a potem porównuje zgłoszenie ze swoimi politykami SLA od góry listy i stosuje pierwszą, której warunki są spełnione. Polityki szczegółowe, np. dla klientów enterprise, umieść nad ogólnymi. Zendesk wymaga też, aby priorytet zgłoszenia był ustawiony w domyślnym systemowym polu priorytetu; niestandardowe pole priorytetu nie zostanie dopasowane do polityki.",
          },
        ],
      },
      {
        heading: "Cele pierwszej odpowiedzi, kolejnej odpowiedzi i rozwiązania",
        blocks: [
          {
            type: "table",
            caption: "Cele SLA i ich nazwy w poszczególnych narzędziach",
            head: ["Cel", "Co mierzy", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Pierwsza odpowiedź",
                "Czas od utworzenia zgłoszenia do pierwszej odpowiedzi agenta",
                "First reply time",
                "First response",
                "Niestandardowe SLA, które startuje po utworzeniu żądania i zatrzymuje się przy pierwszej odpowiedzi do klienta",
              ],
              [
                "Kolejna odpowiedź",
                "Czas od pozostawionej bez odpowiedzi wiadomości klienta do następnej odpowiedzi agenta",
                "Next reply time",
                "Every response",
                "Niestandardowe SLA z własnymi warunkami startu i zatrzymania",
              ],
              [
                "Rozwiązanie",
                "Czas od utworzenia do rozwiązania zgłoszenia",
                "Requester wait time, agent work time lub total resolution time",
                "Resolution",
                "Niestandardowe SLA, które zatrzymuje się po rozwiązaniu żądania",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk definiuje next reply time jako czas między najstarszym komentarzem klienta bez odpowiedzi a następnym publicznym komentarzem agenta. Oferuje też wskaźnik periodic update, który mierzy czas między publicznymi komentarzami agenta. Dla rozwiązania Zendesk ma trzy wskaźniki i zaleca wybranie tylko jednego na politykę: requester wait time (czas w statusach New, Open i On-hold), agent work time (czas w statusach New i Open) oraz total resolution time (cały cykl życia od utworzenia do rozwiązania zgłoszenia).",
          },
          {
            type: "p",
            text: "Freshdesk ustawia cele first response, every response i resolution dla każdego priorytetu w ramach każdej polityki SLA. W Jira Service Management każde SLA to nazwany licznik czasu: określasz, kiedy startuje, kiedy się wstrzymuje i kiedy zatrzymuje, a potem dodajesz cele, które za pomocą JQL wybierają, do jakich żądań mają zastosowanie, z docelowymi czasami zapisywanymi w formacie 4h 30m.",
          },
        ],
      },
      {
        heading: "Kiedy biegnie zegar: godziny pracy, godziny kalendarzowe i wstrzymywanie",
        blocks: [
          {
            type: "p",
            text: "Godziny pracy obejmują tylko czas w ramach Twojego harmonogramu pracy; godziny kalendarzowe obejmują każdą godzinę każdego dnia. Zendesk pozwala wybrać godziny pracy lub kalendarzowe dla każdego priorytetu w ramach polityki. Freshdesk pyta, czy dane SLA ma używać ustawionych przez Ciebie godzin pracy, czy godzin kalendarzowych (24x7). Jira Service Management przypisuje do każdego celu kalendarz ze strefą czasową, dniami i godzinami pracy oraz świętami.",
          },
          {
            type: "p",
            text: "Cel 4-godzinny liczony w godzinach pracy dla zgłoszenia utworzonego późno w piątek może upłynąć dopiero w poniedziałek. To uczciwe wobec Twojego zespołu, ale nie odpowiada temu, czego doświadcza klient, więc godzin kalendarzowych używaj dla każdego priorytetu, przy którym obiecujesz obsługę przez całą dobę.",
          },
          {
            type: "p",
            text: "Drugą połową jest wstrzymywanie. Czas oczekiwania na klienta zwykle nie powinien liczyć się na Twoją niekorzyść, a każde narzędzie obsługuje to inaczej:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: requester wait time wstrzymuje się w statusie Pending; agent work time wstrzymuje się w statusach Pending i On-hold; total resolution time nie wstrzymuje się przy żadnej zmianie statusu, dopóki zgłoszenie nie zostanie rozwiązane.",
              "Freshdesk: status Pending wstrzymuje liczniki SLA, a licznik SLA możesz wyłączyć dla dowolnego statusu, także niestandardowego, np. Waiting on Third Party. Zgłoszenia z wyłączonym licznikiem są pokazywane jako On Hold, a gdy klient odpowie, zgłoszenie wraca do statusu Open i zegar rusza dalej.",
              "Jira Service Management: SLA może mieć warunki wstrzymania, np. na czas oczekiwania na odpowiedź klienta, obok warunków startu i zatrzymania.",
            ],
          },
        ],
      },
      {
        heading: "Ostrzeżenia przed przekroczeniem i eskalacje",
        blocks: [
          {
            type: "p",
            text: "SLA ma sens tylko wtedy, gdy ktoś zareaguje, zanim cel zostanie przekroczony. Ustaw ostrzeżenie przed terminem i eskalację po nim:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: zbuduj automatyzację z warunkiem Hours until next SLA breach, która powiadomi zespół lub osobę, gdy zgłoszenie zbliża się do przekroczenia. Automatyzacje działają raz na godzinę, więc alert może przyjść do godziny przed progiem lub po nim, nigdy dokładnie w tym momencie. W przykładzie Zendesk ta sama automatyzacja dodaje tag, aby uruchamiała się tylko raz na zgłoszenie.",
              "Freshdesk: każda polityka SLA może przypominać agentom od 5 minut do 4 godzin przed terminem celu pierwszej odpowiedzi lub rozwiązania oraz eskalować naruszenie celu do przypisanego agenta lub innych wybranych osób, np. lidera zespołu. Jedno i drugie ustawiasz w Admin > Workflows > SLA Policies.",
              "Dowolne narzędzie: wysyłaj alerty o przekroczeniach tam, gdzie Twój zespół naprawdę zagląda, np. na kanał Slack, a nie tylko e-mailem.",
            ],
          },
        ],
      },
      {
        heading: "Jak SLA konfigurują Zendesk, Freshdesk i Jira Service Management",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: utwórz polityki SLA z warunkami i celami dla każdego priorytetu, wybierz godziny pracy lub kalendarzowe dla każdego priorytetu i uporządkuj listę tak, aby polityki szczegółowe były na górze. Dodaj automatyzację z alertami o zbliżającym się przekroczeniu.",
              "Freshdesk: w Admin > Workflows > SLA Policies ustaw cele first response, every response i resolution dla każdego priorytetu, wybierz godziny pracy lub kalendarzowe, a potem dodaj przypomnienia i eskalacje. W ustawieniach statusów zgłoszeń zdecyduj, które statusy wyłączają licznik SLA.",
              "Jira Service Management: utwórz każde SLA z warunkami startu, wstrzymania i zatrzymania. Kilka warunków startu działa jak OR, a SLA zatrzymuje się, gdy tylko zostanie spełniony którykolwiek warunek zatrzymania. Następnie dodaj cele, które wybierają żądania za pomocą JQL, ustaw docelowy czas i wybierz kalendarz.",
            ],
          },
          {
            type: "p",
            text: "Niezależnie od narzędzia zacznij od jednej polityki i kilku priorytetów, stosuj ją przez kilka tygodni, a potem – zanim zaostrzysz cele – porównaj z nimi rzeczywiste czasy pierwszej odpowiedzi i rozwiązania.",
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab konfiguruje automatyzację związaną z SLA na Zendesk, Freshdesk i Jira: routing, który ustawia priorytet, aby zastosowana została właściwa polityka, alerty o przekroczeniach na Slacku i cykliczne raporty SLA. Odpowiednie ceny jednorazowe to Ticket Routing & Categorization (600–950 USD), Automated Reports (500–900 USD) i Custom Automation (1 200–2 000 USD). Projekty obejmują podstawową dokumentację i 30 dni wsparcia po uruchomieniu, bez ukrytych opłat, a większość trwa 1–3 tygodnie. Zacznij od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się first reply time od next reply time?",
        a: "First reply time mierzy oczekiwanie na pierwszą odpowiedź agenta po utworzeniu zgłoszenia. Next reply time w Zendesk liczy się od najstarszego komentarza klienta bez odpowiedzi do następnego publicznego komentarza agenta, więc obowiązuje przez całą rozmowę.",
      },
      {
        q: "Czy SLA powinny korzystać z godzin pracy, czy z godzin kalendarzowych?",
        a: "Używaj godzin pracy, jeśli Twój zespół pracuje w ustalonych godzinach, a klienci o tym wiedzą, a godzin kalendarzowych dla priorytetów, przy których obiecujesz obsługę przez całą dobę. Zendesk i Freshdesk pozwalają wybrać to w ramach polityki, a Jira Service Management używa kalendarza przypisanego do każdego celu.",
      },
      {
        q: "Czy zegar SLA zatrzymuje się, gdy zgłoszenie ma status Pending?",
        a: "To zależy od narzędzia i wskaźnika. Freshdesk wstrzymuje liczniki SLA w statusie Pending. W Zendesk requester wait time i agent work time wstrzymują się w statusie Pending, natomiast total resolution time biegnie dalej, dopóki zgłoszenie nie zostanie rozwiązane.",
      },
      {
        q: "Czy Zendesk może powiadomić mnie dokładnie w momencie przekroczenia SLA?",
        a: "Nie. Alerty Zendesk o zbliżającym się przekroczeniu korzystają z automatyzacji, które działają raz na godzinę, więc powiadomienie może przyjść do godziny przed przekroczeniem lub po nim.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Ticket deflection
  // ---------------------------------------------------------------------------
  {
    key: "ticket-deflection",
    slug: "ticket-deflection-definicja-i-pomiar",
    category: "basics",
    navLabel: "Ticket deflection",
    primaryKeyword: "ticket deflection",
    title: "Ticket deflection: definicja, pomiar i ograniczenia",
    description:
      "Ticket deflection: które kanały samoobsługi odciążają support, jak mierzą to Zendesk, Freshdesk i Intercom i dlaczego porzucone sesje zawyżają wskaźnik.",
    h1: "Ticket deflection: czym jest i jak ją uczciwie mierzyć",
    intro:
      "Ticket deflection (deflekcja zgłoszeń) zachodzi wtedy, gdy klient rozwiązuje swój problem przez samoobsługę – np. artykuł w centrum pomocy lub agenta AI – zamiast tworzyć zgłoszenie dla Twojego zespołu. Dostawcy helpdesków mierzą ją na bardzo różne sposoby, a większość ich miar zalicza do deflekcji także klientów, którzy po prostu odeszli, nie prosząc o pomoc. Wskaźnik deflekcji jest przydatny dopiero wtedy, gdy wiesz dokładnie, co liczy i których próśb w ogóle nie należy odbijać do samoobsługi.",
    keyFacts: [
      "Self-service score w Zendesk, nazywany też ticket deflection ratio, porównuje korzystanie z centrum pomocy z liczbą zgłoszeń utworzonych w tym samym okresie.",
      "Zendesk rejestruje deflekcję domniemaną (assumed), gdy odwiedzający centrum pomocy nie wysyła zgłoszenia, ale nigdy nie potwierdza, że znalazł odpowiedź.",
      "W raportach agentów AI Zendesk każda rozmowa, która nie kończy się eskalacją, liczy się jako deflekcja.",
      "Intercom rejestruje rozwiązanie domniemane (assumed resolution), gdy klient odchodzi po ostatniej odpowiedzi Fina, nie prosząc o dalszą pomoc.",
      "Badanie Gartnera opublikowane w sierpniu 2024 roku wykazało, że tylko 14% spraw z obsługi klienta jest w pełni rozwiązywanych w samoobsłudze.",
    ],
    sections: [
      {
        heading: "Gdzie zachodzi deflekcja: kanały samoobsługowe",
        blocks: [
          {
            type: "p",
            text: "Deflekcja zachodzi wszędzie tam, gdzie klient może znaleźć odpowiedź, zanim dotrze do agenta. Każdy kanał odciąża zespół w inny sposób i każdy zostawia inny ślad w Twoich danych, dlatego warto wiedzieć, co faktycznie da się zmierzyć w każdym z nich.",
          },
          {
            type: "table",
            caption: "Kanały samoobsługowe, które odciążają zgłoszenia",
            head: ["Kanał", "Jak odciąża", "Co możesz zmierzyć"],
            rows: [
              [
                "Centrum pomocy lub baza wiedzy",
                "Klienci wyszukują lub przeglądają artykuły, zanim się z Tobą skontaktują",
                "Sesje lub użytkownicy centrum pomocy w porównaniu z utworzonymi zgłoszeniami; wyświetlenia artykułów i głosy",
              ],
              [
                "Sugestie artykułów w formularzu kontaktowym",
                "Formularz prośby podpowiada artykuły, gdy klient opisuje problem",
                "Zendesk rejestruje deflekcję potwierdzoną, gdy klient wybierze sugerowany artykuł i w tej sesji nie wyśle zgłoszenia",
              ],
              [
                "Agent AI lub chatbot",
                "Odpowiada na pytania na czacie, w komunikatorach lub e-mailem i eskaluje do człowieka, gdy nie może pomóc",
                "Rozmowy zakończone bez eskalacji, a najlepiej rozwiązania potwierdzone przez klienta",
              ],
              [
                "Pomoc w produkcie lub kontekstowa",
                "Widżet pomocy pokazuje artykuły związane ze stroną lub funkcją, z której korzysta klient",
                "Otwarcia widżetu, wyświetlenia artykułów i formularze kontaktowe wysłane z widżetu",
              ],
              [
                "Forum społeczności",
                "Klienci odpowiadają sobie nawzajem, a wątki z odpowiedziami pomagają kolejnym odwiedzającym",
                "Trudno bezpośrednio powiązać ze zgłoszeniami; zwykle śledzi się wątki z zaakceptowaną odpowiedzią",
              ],
            ],
          },
          {
            type: "note",
            text: "Deflekcja to efekt uboczny dobrej samoobsługi, a nie cel sam w sobie. Klient, który w dwie minuty dostaje poprawną odpowiedź, to sukces. Klient, który się poddaje – nie, choć wiele raportów liczy oba przypadki tak samo.",
          },
        ],
      },
      {
        heading: "Jak dostawcy definiują i mierzą deflekcję",
        blocks: [
          {
            type: "p",
            text: "Nie ma wspólnej definicji. Każdy helpdesk liczy coś nieco innego, dlatego wskaźników deflekcji z dwóch narzędzi czy z case studies dwóch dostawców nie da się bezpośrednio porównywać.",
          },
          {
            type: "table",
            caption: "Jak dostawcy helpdesków definiują deflekcję",
            head: ["Dostawca i wskaźnik", "Co się liczy", "Na co uważać"],
            rows: [
              [
                "Self-service score w Zendesk (nazywany też self-service ratio lub ticket deflection ratio)",
                "Korzystanie z centrum pomocy w porównaniu ze zgłoszeniami utworzonymi w tym samym okresie. W raportach Zendesk Knowledge self-service ratio to liczba sesji centrum pomocy podzielona przez liczbę wysłanych zgłoszeń",
                "To proporcja, a nie liczba rozwiązanych problemów, a raporty deflekcji w Zendesk śledzą tylko zgłoszenia wysłane przez formularz prośby w centrum pomocy",
              ],
              [
                "Deflekcja potwierdzona i domniemana w Zendesk",
                "Potwierdzona: odwiedzający wybrał sugerowany artykuł w formularzu prośby i w tej sesji nie wysłał zgłoszenia. Domniemana: odwiedzający korzystał z centrum pomocy i nie wysłał zgłoszenia, ale nie potwierdził, że znalazł odpowiedź",
                "Deflekcja domniemana to wniosek wyciągany z milczenia",
              ],
              [
                "Deflection rate agenta AI w Zendesk",
                "Każda rozmowa, która nie kończy się eskalacją, w tym nieudane eskalacje i rozmowy bez statusu",
                "Zendesk raportuje obok niego bardziej rygorystyczne miary: rozmowy obsłużone przez agenta AI i automatyczne rozwiązania zweryfikowane przez LLM",
              ],
              [
                "Deflection rate agenta AI we Freshdesk",
                "Odsetek rozmów w danym temacie rozwiązanych przez agenta AI bez udziału człowieka",
                "Trend deflekcji w Email AI Agent liczy też zgłoszenia zamknięte przez agenta-człowieka po tym, jak klient przeczytał odpowiedź i nie odpisał",
              ],
              [
                "Rozwiązanie przez Fin w Intercom",
                "Po ostatniej odpowiedzi Fina klient albo potwierdza, że pomogła (rozwiązanie potwierdzone), albo odchodzi, nie prosząc o dalszą pomoc (rozwiązanie domniemane)",
                "Jeśli klient wróci do rozmowy po dalszą pomoc, rozwiązanie jest odejmowane",
              ],
            ],
          },
          {
            type: "p",
            text: "Wyróżniają się dwa wzorce. Po pierwsze, najszersze wskaźniki, takie jak deflection rate agenta AI w Zendesk, deflekcje domniemane i rozwiązania domniemane w Intercom, traktują milczenie jako sukces. Po drugie, bardziej rygorystyczne wskaźniki dodają jakąś formę weryfikacji: Zendesk liczy automatyczne rozwiązanie tylko wtedy, gdy kontrola LLM potwierdzi, że prośba została rozwiązana bez udziału człowieka, a rozmowy, które tej kontroli nie przejdą, nie zużywają automatycznego rozwiązania.",
          },
        ],
      },
      {
        heading: "Problem porzuconych sesji",
        blocks: [
          {
            type: "p",
            text: "Większość wskaźników deflekcji nie odróżnia klienta, który znalazł odpowiedź, od takiego, który się poddał. Odwiedzający, który czyta artykuł, nie rozumie go, a potem do Ciebie dzwoni, jest deflekcją domniemaną w raporcie centrum pomocy i zgłoszeniem w kolejce telefonicznej. Czat, który się skończył, bo klient zamknął kartę, wygląda tak samo jak taki, który się skończył, bo problem został rozwiązany. Zendesk zaznacza, że nawet jego bardziej rygorystyczna kategoria rozmów obsłużonych przez agenta AI może obejmować rozmowy, w których klienci odeszli przed eskalacją lub byli niezadowoleni z rozwiązania.",
          },
          {
            type: "p",
            text: "Rzeczywista skuteczność samoobsługi jest zwykle niższa, niż sugerują dashboardy. W badaniu Gartnera na grupie 5 728 klientów, opublikowanym w sierpniu 2024 roku, tylko 14% spraw z obsługi klienta zostało w pełni rozwiązanych w samoobsłudze, a nawet gdy klienci opisywali sprawę jako bardzo prostą – tylko 36%.",
          },
          {
            type: "p",
            text: "Aby Twoje wskaźniki deflekcji były uczciwe:",
          },
          {
            type: "ul",
            items: [
              "Raportuj deflekcje potwierdzone i domniemane osobno, a liczbę domniemanych traktuj jako górną granicę.",
              "Śledź ponowne kontakty. Klient, który dzień po „odbitej” sesji kontaktuje się z Tobą innym kanałem, wcale nie został odbity.",
              "Obserwuj liczbę kontaktów na klienta lub na zamówienie. Jeśli deflekcja rośnie, a liczba kontaktów na klienta nie spada, deflekcja istnieje tylko na papierze.",
              "Co miesiąc czytaj próbkę zapisów rozmów z botem zaliczonych do deflekcji, aby zobaczyć, jak naprawdę się kończyły.",
              "Łącz deflekcję ze wskaźnikiem jakości, np. CSAT dla rozmów z botem lub ponownie otwartymi zgłoszeniami.",
            ],
          },
        ],
      },
      {
        heading: "Czego nie należy odbijać do samoobsługi",
        blocks: [
          {
            type: "p",
            text: "Niektóre prośby powinny jak najszybciej trafić do człowieka, nawet jeśli bot technicznie mógłby odpowiedzieć. Odbicie ich oszczędza jedno zgłoszenie, a kosztuje Cię klienta.",
          },
          {
            type: "ul",
            items: [
              "Klienci, którzy wprost proszą o człowieka. Pokaż tę ścieżkę wyraźnie, zamiast chować ją za kilkoma nieudanymi turami rozmowy z botem.",
              "Kwestie bezpieczeństwa, takie jak przejęte konta, podejrzenie oszustwa lub nieoczekiwane obciążenia.",
              "Spory o rozliczenia, zwroty i rezygnacje, gdzie błędna lub wymijająca odpowiedź ma bezpośredni koszt.",
              "Reklamacje i eskalacje, zwłaszcza ponowne kontakty w tej samej sprawie.",
              "Prośby prawne i dotyczące ochrony danych, np. żądania dostępu do danych osobowych lub ich usunięcia, które wymagają udokumentowanej odpowiedzi.",
              "Sprawy pilne lub związane z bezpieczeństwem fizycznym oraz klienci, którzy wydają się zdenerwowani lub znajdują się w trudnym położeniu.",
            ],
          },
          {
            type: "p",
            text: "Klienci oczekują takiej drogi wyjścia. W badaniu Gartnera na grupie 3 566 klientów, przeprowadzonym w lutym i marcu 2026 roku i opublikowanym w sierpniu 2026 roku, 87% stwierdziło, że firmy używające GenAI w obsłudze klienta muszą zapewniać dostęp do agenta-człowieka. W tym samym komunikacie Gartner radzi, by nie czynić GenAI obowiązkowym pierwszym krokiem i podejmować próbę rozwiązania tylko przy wysokiej pewności, z jasną ścieżką do człowieka.",
          },
          {
            type: "p",
            text: "W praktyce oznacza to reguły routingu, które kierują takie prośby od razu do właściwej kolejki, oraz przekazanie z bota do człowieka, które przenosi całą rozmowę, aby klient nie musiał niczego powtarzać.",
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje chatboty AI, które odpowiadają na częste pytania na Twojej stronie, w WhatsAppie, Telegramie, Facebook Messengerze lub na Instagramie, a wszystko inne przekazują Twojemu zespołowi w Zendesk, Freshdesk lub Twoich obecnych narzędziach. Starter Chat Bot kosztuje 350–450 USD, a Standard Chat Bot obejmujący 3–5 kanałów – 500–650 USD, jednorazowo. Automated Reports (500–900 USD) mogą śledzić deflekcję obok ponownych kontaktów i ponownych otwarć, abyś widział rzeczywisty efekt. Każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Bezpłatna 30-minutowa rozmowa audytowa to dobry moment, by zdecydować, co zautomatyzować, a co zostawić ludziom.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się ticket deflection od rozwiązania zgłoszenia?",
        a: "Deflekcja oznacza, że klient nie utworzył zgłoszenia ani nie dotarł do agenta; rozwiązanie oznacza, że problem został faktycznie rozwiązany. Deflection rate agenta AI w Zendesk liczy każdą rozmowę, która nie zakończyła się eskalacją, natomiast automatyczne rozwiązania wymagają dodatkowo kontroli LLM potwierdzającej, że prośba została rozwiązana.",
      },
      {
        q: "Czym jest deflekcja domniemana (assumed deflection) w Zendesk?",
        a: "To sesja w centrum pomocy, w której odwiedzający nie poprosił o pomoc ani nie wysłał zgłoszenia, ale też nie potwierdził, że znalazł odpowiedź. Deflekcja potwierdzona wymaga, by odwiedzający wybrał sugerowany artykuł w formularzu prośby, a potem nie wysłał zgłoszenia w tej sesji.",
      },
      {
        q: "Jak Zendesk oblicza self-service ratio?",
        a: "Porównuje korzystanie z centrum pomocy ze zgłoszeniami z tego samego okresu. W raportach Zendesk Knowledge self-service ratio to liczba sesji centrum pomocy podzielona przez liczbę wysłanych zgłoszeń, a raporty deflekcji śledzą tylko zgłoszenia wysłane przez formularz prośby w centrum pomocy.",
      },
      {
        q: "Czy Intercom liczy rozmowę z Finem jako rozwiązaną, jeśli klient po prostu wyjdzie?",
        a: "Tak. Jeśli klient wyjdzie po ostatniej odpowiedzi Fina, nie prosząc o dalszą pomoc, Intercom rejestruje rozwiązanie domniemane. Jeśli klient potwierdzi, że odpowiedź pomogła, jest to rozwiązanie potwierdzone.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Getting started with self-service, Part 6: Tracking essential self-service metrics",
        url: "https://support.zendesk.com/hc/en-us/articles/4408894139930-Getting-started-with-self-service-Part-6-Tracking-essential-self-service-metrics",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Knowledge",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155064090-Metrics-and-attributes-for-Zendesk-Knowledge",
      },
      {
        label: "Zendesk Help Center — Understanding the difference between deflection, AI agent-handled, automated resolution, and custom resolution rates",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756478106-Understanding-the-difference-between-deflection-AI-agent-handled-automated-resolution-and-custom-resolution-rates",
      },
      {
        label: "Freshdesk Support — Monitor and Analyze AI Agent Performance Metrics in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011716-monitor-ai-agent-performance",
      },
      {
        label: "Freshdesk Support — Manage, Test & Troubleshoot Your Email AI Agent",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011217-use-and-manage-the-email-ai-agent",
      },
      {
        label: "Intercom Help — Fin AI Agent outcomes",
        url: "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      },
      {
        label: "Gartner — Survey Finds Only 14% of Customer Service Issues Are Fully Resolved in Self-Service (August 2024)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2024-08-19-gartner-survey-finds-only-14-percent-of-customer-service-issues-are-fully-resolved-in-self-service",
      },
      {
        label: "Gartner — Survey Finds 87% of Customers Say Companies Using GenAI for Customer Service Must Provide Access to a Human Agent (August 2026)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "ai-knowledge-base-for-customer-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. Omnichannel customer support
  // ---------------------------------------------------------------------------
  {
    key: "omnichannel-customer-support",
    slug: "obsluga-klienta-omnichannel",
    category: "basics",
    navLabel: "Obsługa klienta omnichannel",
    primaryKeyword: "obsługa klienta omnichannel",
    title: "Obsługa klienta omnichannel: co to oznacza w praktyce",
    description:
      "Obsługa klienta omnichannel: czym różni się od multichannel, wspólny panel agentów, routing omnichannel oraz okna wiadomości w WhatsAppie i Messengerze.",
    h1: "Obsługa klienta omnichannel: co oznacza i jak działa",
    intro:
      "Obsługa klienta omnichannel oznacza, że każdy kanał, którym klient się z Tobą kontaktuje – e-mail, czat, telefon, WhatsApp czy komunikatory społecznościowe – jest połączony z jednym rekordem klienta i jedną historią rozmów, którą widzi każdy agent. Obsługa multichannel oferuje te same kanały, ale prowadzi je osobno, więc klienci powtarzają się przy każdej zmianie kanału. Przejście na omnichannel wymaga wspólnej przestrzeni pracy agentów, routingu, który traktuje wszystkie kanały jako jedną pulę pracy, oraz przepływów, które respektują własne zasady każdego kanału.",
    keyFacts: [
      "Freshworks opisuje obsługę multichannel jako niezależne kanały, z których każdy działa autonomicznie; w obsłudze omnichannel są one ze sobą połączone.",
      "W Zendesk Agent Workspace jedna rozmowa w zgłoszeniu może obejmować e-mail, czat i połączenie głosowe.",
      "Routing omnichannel w Zendesk przydziela zgłoszenia z e-maili, komunikatorów i połączeń na podstawie statusu agenta i jego wolnej przepustowości.",
      "W WhatsAppie odpowiedzi w dowolnej formie są dozwolone tylko w 24-godzinnym oknie obsługi klienta; potem można wysyłać wyłącznie szablony.",
      "Badanie Gartnera opublikowane w lipcu 2025 roku wykazało, że tylko 22% klientów rozpoczyna, prowadzi i rozwiązuje swoją sprawę wyłącznie w kanałach należących do firmy.",
    ],
    sections: [
      {
        heading: "Omnichannel a multichannel",
        blocks: [
          {
            type: "p",
            text: "Oba modele oferują kilka kanałów. Różnica polega na tym, czy te kanały współdzielą kontekst. Freshworks definiuje obsługę multichannel jako oferowanie wielu niezależnych kanałów, z których każdy działa autonomicznie, i zauważa, że zwykle wiąże się to z osobnymi zespołami dla każdego kanału. Systemy omnichannel natomiast dbają o to, by wszystkie kanały były ze sobą połączone. Zendesk wyznacza tę samą granicę: w obsłudze multichannel rozmowy nie przechodzą z jednego kanału do drugiego, a obsługa omnichannel łączy interakcje w jedną ciągłą rozmowę i daje agentom pełny wgląd w historię klienta.",
          },
          {
            type: "table",
            caption: "Obsługa klienta multichannel a omnichannel",
            head: ["Aspekt", "Multichannel", "Omnichannel"],
            rows: [
              ["Kanały", "Kilka kanałów, każdy z własnym narzędziem lub skrzynką", "Kilka kanałów zasilających jeden helpdesk"],
              ["Historia klienta", "Zostaje w kanale, w którym miała miejsce", "Jedna historia ze wszystkich kanałów, widoczna dla każdego agenta"],
              ["Zmiana kanału", "Klient zaczyna od nowa i powtarza szczegóły", "Agent kontynuuje od miejsca, w którym skończyła się ostatnia interakcja"],
              ["Organizacja zespołu", "Często osobny zespół dla każdego kanału", "Wspólna kolejka, a agenci obsługują kilka kanałów"],
              ["Routing", "Osobno dla każdego kanału, często ręczny", "Jedna konfiguracja routingu oparta na statusie, przepustowości i umiejętnościach"],
              ["Raportowanie", "Osobne liczby dla każdego kanału", "Raportowanie według klienta i sprawy we wszystkich kanałach"],
            ],
          },
          {
            type: "p",
            text: "Dodanie kanału nie czyni Cię omnichannel. Jeśli wiadomości z WhatsAppa trafiają do osobnej aplikacji, której nie widzą Twoi agenci obsługujący e-mail, masz po prostu kolejny silos. A klienci naprawdę przechodzą między kanałami: badanie Gartnera na grupie 5 801 klientów, opublikowane w lipcu 2025 roku, wykazało, że tylko 22% rozpoczyna, prowadzi i rozwiązuje swoją sprawę wyłącznie w kanałach należących do firmy, a 51% ścieżek obsługi zaczyna się obecnie na platformach zewnętrznych, takich jak Google, YouTube i ChatGPT.",
          },
        ],
      },
      {
        heading: "Wspólna przestrzeń pracy agentów i wspólna historia",
        blocks: [
          {
            type: "p",
            text: "Sercem obsługi omnichannel jest jedno miejsce, w którym agenci widzą każdą rozmowę i na nią odpowiadają. W Zendesk Agent Workspace rozmowy w zgłoszeniach mogą obejmować e-mail, czat i połączenia głosowe, a agenci mogą też odbierać wiadomości z mediów społecznościowych i ze strony internetowej oraz na nie odpowiadać. Przykład samego Zendesk to zgłoszenie, które zaczęło się jako czat na żywo i było kontynuowane e-mailem, zapisane jako jeden przebieg rozmowy. Kontekst klienta, w tym historia interakcji, znajduje się obok rozmowy, a agenci mogą wyszukiwać i cytować artykuły z centrum pomocy z tego samego ekranu.",
          },
          {
            type: "p",
            text: "Niezależnie od tego, jakiego helpdesku używasz, działająca konfiguracja omnichannel wymaga tych samych możliwości:",
          },
          {
            type: "ul",
            items: [
              "Jeden rekord klienta, który łączy adresy e-mail, numery telefonów i identyfikatory w komunikatorach, aby wiadomość z WhatsAppa i e-mail od tej samej osoby trafiły do tej samej historii.",
              "Historia rozmów ze wszystkich kanałów w zgłoszeniu, w tym rozmowa z botem, która odbyła się przed przekazaniem.",
              "Możliwość odpowiedzi innym kanałem, gdy pierwotny kanał nie pozwala już na odpowiedź.",
              "Wspólne tagi, pola i makra, aby raportowanie działało tak samo w każdym kanale.",
            ],
          },
          {
            type: "note",
            text: "Dopasowywanie tożsamości to miejsce, w którym wiele konfiguracji się sypie. Jeśli Twój system telefoniczny, numer WhatsApp i skrzynka e-mail nie są mapowane na ten sam rekord klienta, agenci nadal widzą fragmenty – tyle że w jednym oknie.",
          },
        ],
      },
      {
        heading: "Routing omnichannel",
        blocks: [
          {
            type: "p",
            text: "Routing decyduje, który agent dostaje którą rozmowę. Routing omnichannel w Zendesk przekazuje nowe i otwarte zgłoszenia z e-maili, połączeń i komunikatorów agentom na podstawie ich dostępności i przepustowości. Zamiast ustawiać status dla każdego kanału, agenci ustawiają jeden wspólny status dla e-maila, połączeń głosowych i komunikatorów. W przypadku komunikatorów i połączeń agent musi być online, a każdy agent potrzebuje wolnej przepustowości, czyli mniejszej liczby przypisanych otwartych zgłoszeń niż jego maksimum dla danego kanału.",
          },
          {
            type: "p",
            text: "Domyślnie zgłoszenie trafia do agenta z największą wolną przepustowością w danym kanale, a przy remisie – do agenta, który najdłużej nie dostał zgłoszenia z tego kanału. Zamiast tego możesz przełączyć się na round robin i włączyć focus mode, aby agent nie otrzymywał jednocześnie rozmów z komunikatorów i połączeń. W zależności od planu Zendesk routing może też uwzględniać czas do naruszenia SLA, priorytet zgłoszenia i umiejętności agentów.",
          },
          {
            type: "p",
            text: "Sens routingu obejmującego wszystkie kanały, a nie każdy kanał z osobna, to wspólna przepustowość: agent, który prowadzi rozmowę telefoniczną, nie powinien dostać propozycji nowego czatu, a agent z niewielką liczbą otwartych e-maili może przyjąć więcej pracy.",
          },
        ],
      },
      {
        heading: "Zasady kanałów: okna wiadomości w WhatsAppie i Messengerze",
        blocks: [
          {
            type: "p",
            text: "Omnichannel nie sprawia, że kanały stają się identyczne. Platformy komunikacyjne ustalają zasady, kiedy firma może odpowiedzieć, a Twoje przepływy muszą je respektować.",
          },
          {
            type: "table",
            caption: "Okna wiadomości w WhatsAppie i Facebook Messengerze",
            head: ["Kanał", "Okno odpowiedzi", "Po zamknięciu okna"],
            rows: [
              [
                "WhatsApp Business Platform",
                "24-godzinne okno obsługi klienta otwiera się, gdy klient napisze lub zadzwoni do Ciebie, i resetuje się przy każdej nowej wiadomości lub połączeniu. W jego trakcie możesz wysyłać wiadomości serwisowe w dowolnej formie bez wcześniejszej akceptacji.",
                "Można wysyłać wyłącznie wcześniej zatwierdzone wiadomości szablonowe. Wiadomości w dowolnej formie mogą jedynie odpowiadać użytkownikom, a nie rozpoczynać rozmowę.",
              ],
              [
                "Facebook Messenger",
                "Standardowe okno wiadomości wynosi 24 godziny od ostatniej wiadomości danej osoby.",
                "Z tagiem Human Agent człowiek może odpowiedzieć w ciągu 7 dni od wiadomości klienta. Twoja aplikacja musi mieć zgodę na używanie tego tagu, a wiadomości automatyczne nie są z nim dozwolone.",
              ],
            ],
          },
          {
            type: "p",
            text: "Te zasady kształtują Twój przepływ pracy. Jeśli agent podejmie rozmowę w WhatsAppie później niż 24 godziny po ostatniej wiadomości klienta, odpowiedź w dowolnej formie nie jest możliwa: potrzebujesz zatwierdzonego szablonu albo przejścia na inny kanał, np. e-mail. Dotyczy to też botów, bo tag Human Agent w Messengerze służy wyłącznie do odpowiedzi udzielanych przez ludzi. Zanim zaprojektujesz rozwiązanie wokół tych limitów, sprawdź aktualną dokumentację Meta, ponieważ Meta aktualizuje swoje zasady dotyczące wiadomości i cenniki.",
          },
        ],
      },
      {
        heading: "Jak przejść z multichannel na omnichannel",
        blocks: [
          {
            type: "ol",
            items: [
              "Spisz wszystkie kanały, z których dziś korzystają klienci, i to, gdzie trafia każdy z nich: do którego narzędzia, zespołu i skrzynki.",
              "Połącz kanały w jednym helpdesku – przez natywne integracje tam, gdzie istnieją, a przez API lub webhooki tam, gdzie ich brak.",
              "Zdecyduj, jak dopasowujesz tożsamości między kanałami, np. po adresie e-mail i numerze telefonu, oraz jak scalasz duplikaty.",
              "Skonfiguruj jeden routing z przepustowością dla każdego kanału zamiast osobnych kolejek dla każdego zespołu.",
              "Zadbaj, aby przekazania z bota do człowieka przenosiły do zgłoszenia całą rozmowę i dane klienta.",
              "Dodaj zasady specyficzne dla kanałów, np. odpowiedzi szablonowe w WhatsAppie po 24 godzinach i różne cele SLA dla kanałów na żywo i asynchronicznych.",
              "Raportuj według klienta i sprawy we wszystkich kanałach, a nie tylko według kanału.",
            ],
          },
        ],
      },
      {
        heading: "Jak może pomóc TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab łączy kanały z helpdeskiem, którego już używasz, np. Zendesk lub Freshdesk, za pomocą API, webhooków oraz Make lub n8n. Standard Chat Bot (500–650 USD, jednorazowo) obejmuje 3–5 kanałów, takich jak Twoja strona, WhatsApp, Telegram, Facebook Messenger i Instagram, a Ticket Routing & Categorization (600–950 USD) kieruje przychodzące rozmowy do właściwej kolejki. Każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Bezpłatna 30-minutowa rozmowa audytowa pozwala rozpisać Twoje obecne kanały, zanim cokolwiek powstanie.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się obsługa omnichannel od multichannel?",
        a: "Obsługa multichannel oferuje kilka kanałów działających niezależnie, więc historia zostaje w każdym z nich osobno. Obsługa omnichannel łączy kanały, dzięki czemu agenci widzą jedną historię klienta, a klienci mogą zmieniać kanały bez powtarzania się.",
      },
      {
        q: "Czym jest routing omnichannel w Zendesk?",
        a: "To system routingu, który przydziela agentom zgłoszenia z e-maili, komunikatorów i połączeń na podstawie jednego wspólnego statusu agenta i wolnej przepustowości w każdym kanale. Domyślnie zgłoszenie dostaje agent z największą wolną przepustowością w danym kanale.",
      },
      {
        q: "Czy mogę odpowiedzieć klientowi w WhatsAppie po 24 godzinach?",
        a: "Nie wiadomością w dowolnej formie. Po zamknięciu 24-godzinnego okna obsługi klienta można wysyłać wyłącznie wcześniej zatwierdzone wiadomości szablonowe. Nowa wiadomość lub połączenie od klienta otwiera nowe okno.",
      },
      {
        q: "Jak długo konsultant może odpowiadać w Facebook Messengerze?",
        a: "Standardowe okno wiadomości wynosi 24 godziny. Z tagiem Human Agent, który wymaga zatwierdzenia aplikacji, człowiek może odpowiedzieć w ciągu 7 dni od wiadomości klienta. Tagu nie można używać do wiadomości automatycznych.",
      },
    ],
    sources: [
      {
        label: "Freshworks — Omnichannel vs Multichannel: Key Service Differences",
        url: "https://www.freshworks.com/explore-cx/omnichannel-vs-multichannel-support/",
      },
      {
        label: "Zendesk — What is omnichannel customer service?",
        url: "https://www.zendesk.com/blog/customer-service/support/omnichannel-really-means/",
      },
      {
        label: "Zendesk Help Center — About the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Messenger Platform Send API reference",
        url: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
      },
      {
        label: "Gartner — Survey Finds More Than Half of Customer Service Journeys Now Start on Third-Party Platforms (July 2025)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-23-gartner-survey-finds-more-than-half-of-customer-service-journeys-now-start-on-third-party-platforms",
      },
    ],
    related: ["whatsapp-customer-support-bot", "ticket-routing-automation", "zendesk-automation"],
    updated: "2026-10-19",
  },
];
