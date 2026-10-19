import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. AI chatbot for customer support
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "chatbot-ai-obsluga-klienta",
    category: "services",
    navLabel: "Chatbot AI w obsłudze klienta",
    primaryKeyword: "chatbot AI do obsługi klienta",
    title: "Chatbot AI do obsługi klienta: jak działa | TascaLab",
    description:
      "Jak chatbot AI w obsłudze klienta odpowiada na FAQ, zbiera dane i przekazuje rozmowę konsultantom — i jak łączy się z Zendeskiem lub Freshdeskiem przez API.",
    h1: "Chatbot AI do obsługi klienta: co robi i jak łączy się z Twoim helpdeskiem",
    intro:
      "Chatbot AI do obsługi klienta odpowiada na rutynowe pytania na podstawie Twoich treści pomocy, zbiera dane, których będzie potrzebował konsultant, i przekazuje rozmowę człowiekowi, gdy nie potrafi pomóc albo klient o to poprosi. Najlepiej sprawdza się jako warstwa nad istniejącym helpdeskiem: bot prowadzi pierwszą wymianę wiadomości, a wszystko, czego nie rozwiąże, trafia do zgłoszenia z pełnym kontekstem.",
    keyFacts: [
      "Agenci AI w Zendesku generują odpowiedzi z połączonych źródeł wiedzy, a gdy nie znajdą nic trafnego, wysyłają odpowiedź domyślną.",
      "Agenci AI we Freshdesku mogą automatycznie przekazać rozmowę człowiekowi, gdy klient użyje fraz wskazanych przez administratora.",
      "Zewnętrzny bot w Zendesk messaging przekazuje rozmowę, oddając kontrolę do Agent Workspace — dzięki temu rozmowa może zostać przydzielona konsultantowi.",
      "Zgodnie z art. 50 unijnego AI Act od 2 sierpnia 2026 chatboty muszą informować ludzi, że rozmawiają z AI, chyba że jest to oczywiste.",
    ],
    sections: [
      {
        heading: "Co tak naprawdę robi chatbot w obsłudze klienta",
        blocks: [
          {
            type: "p",
            text: "Większość chatbotów w obsłudze klienta wykonuje trzy zadania, a czwarte jest opcjonalne. Warto zaplanować je osobno, bo każde do dobrego działania potrzebuje innych danych wejściowych.",
          },
          {
            type: "table",
            caption: "Podstawowe zadania chatbota w obsłudze klienta",
            head: ["Zadanie", "Przykład", "Od czego zależy"],
            rows: [
              [
                "Odpowiadanie na częste pytania",
                "Godziny otwarcia, zasady zwrotów, czasy dostawy, instrukcje krok po kroku",
                "Rzetelne, aktualne artykuły pomocy lub zatwierdzona lista pytań i odpowiedzi",
              ],
              [
                "Zbieranie informacji",
                "Numer zamówienia, e-mail konta, urządzenie, zdjęcie problemu",
                "Zdefiniowana lista pól odpowiadających polom zgłoszenia w Twoim helpdesku",
              ],
              [
                "Przekazanie człowiekowi",
                "Przełączenie na żywo do konsultanta lub zgłoszenie utworzone z zapisem rozmowy",
                "Ścieżka przekazania do helpdesku i jasne zasady, kiedy z niej korzystać",
              ],
              [
                "Proste działania (opcjonalnie)",
                "Sprawdzenie statusu zamówienia lub rezerwacji",
                "Dostęp przez API do systemu, w którym są dane",
              ],
            ],
          },
          {
            type: "p",
            text: "Boty oparte na LLM generują odpowiedzi z Twoich treści, zamiast trzymać się ręcznie napisanych skryptów. Zendesk opisuje na przykład funkcję „Knowledge reply” swoich agentów AI jako przeszukiwanie połączonych źródeł wiedzy w celu wygenerowania odpowiedzi, z odpowiedzią domyślną, gdy nie pojawi się nic trafnego. Praktyczny wniosek jest prosty: bot jest tak dobry, jak treści, z których odpowiada. Luki i nieaktualne artykuły objawiają się błędnymi lub mglistymi odpowiedziami.",
          },
          {
            type: "p",
            text: "Zbieranie informacji bywa niedoceniane. Nawet gdy bot nie rozwiąże problemu, zapytanie od razu o numer zamówienia, e-mail konta i krótki opis eliminuje pierwszą rundę dopytywania, którą inaczej musiałby przeprowadzić konsultant.",
          },
        ],
      },
      {
        heading: "Przekazanie rozmowy: po tym klienci oceniają bota",
        blocks: [
          {
            type: "p",
            text: "Bot, który nie pozwala dotrzeć do człowieka, szybko niszczy zaufanie. Ustal z góry, w jakich sytuacjach kończy się zautomatyzowana część rozmowy:",
          },
          {
            type: "ul",
            items: [
              "Klient prosi o rozmowę z człowiekiem. Ustawienia przekazania (handover) agentów AI we Freshdesku pozwalają na przykład administratorom wskazać frazy, które automatycznie przekazują rozmowę, wyświetlić wiadomość przed przekazaniem i opcjonalnie najpierw zebrać dane klienta.",
              "Bot wciąż sobie nie radzi. W Zendesku możesz skonfigurować agenta AI tak, by eskalował do człowieka, gdy po kilku próbach nie potrafi wygenerować odpowiedzi z połączonych źródeł wiedzy.",
              "Temat jest drażliwy lub wykracza poza zakres. Freshdesk wymienia wśród typowych powodów przekazania sprawy dotyczące rozliczeń lub zwrotów pieniędzy oraz pytania spoza skonfigurowanego zakresu agenta.",
              "Nikogo nie ma online. Poza godzinami pracy bot powinien jasno to powiedzieć i utworzyć zgłoszenie, zamiast obiecywać rozmowę z konsultantem na żywo.",
            ],
          },
          {
            type: "p",
            text: "Niezależnie od powodu konsultant powinien otrzymać zapis rozmowy i zebrane pola, aby klient nie musiał niczego powtarzać. Gdy zewnętrzny bot oddaje kontrolę do Agent Workspace w Zendesku przez switchboard Sunshine Conversations, rozmowa może zostać przydzielona konsultantowi, a bot może dołączyć metadane, które wypełnią pola w powstałym zgłoszeniu.",
          },
        ],
      },
      {
        heading: "Natywne boty helpdesku a własny bot",
        blocks: [
          {
            type: "p",
            text: "Zendesk i Freshdesk oferują własnych agentów AI. Jeśli Twoje rozmowy już przechodzą przez widżet wiadomości danego helpdesku, a centrum pomocy odpowiada na większość pytań, opcja natywna to najszybszy start. Własny bot podłączony przez API jest alternatywą, gdy potrzebujesz czegoś, czego natywny bot nie obejmuje.",
          },
          {
            type: "table",
            caption: "Natywny a własny chatbot do obsługi klienta",
            head: ["", "Natywny agent AI helpdesku", "Własny bot podłączony przez API"],
            rows: [
              [
                "Wdrożenie",
                "Konfiguracja w panelu administracyjnym helpdesku, z jego centrum pomocy jako źródłem wiedzy",
                "Budowany na osobnym stosie technologicznym i łączony z helpdeskiem przez API i webhooki",
              ],
              [
                "Kanały",
                "To, co obsługuje moduł wiadomości danego helpdesku w Twoim planie",
                "Każdy kanał z API, które da się podłączyć, np. WhatsApp, Telegram czy Messenger",
              ],
              [
                "Logika",
                "Ograniczona do kreatora przepływów i ustawień AI dostawcy",
                "Własne reguły, wyszukiwanie w systemach wewnętrznych, formularze wieloetapowe",
              ],
              [
                "Licencje",
                "Część subskrypcji helpdesku lub dodatek; sprawdź swój plan",
                "Osobne koszty platformy bota i korzystania z modeli AI",
              ],
              [
                "Utrzymanie",
                "Platformę utrzymuje dostawca",
                "Ktoś musi utrzymywać integrację, gdy zmieniają się API",
              ],
            ],
          },
          {
            type: "p",
            text: "Żadna opcja nie jest domyślnie lepsza. Rozsądna kolejność to najpierw sprawdzić, co obejmuje natywny agent, a własne rozwiązanie budować tylko dla konkretnej luki: kanału, wyszukiwania danych lub reguły przekazania, której natywne narzędzie nie potrafi wyrazić.",
          },
        ],
      },
      {
        heading: "Jak własny bot łączy się z Twoim helpdeskiem",
        blocks: [
          {
            type: "p",
            text: "Istnieją dwa popularne wzorce integracji, a wiele wdrożeń korzysta z obu.",
          },
          {
            type: "ol",
            items: [
              "Utworzenie zgłoszenia przy przekazaniu. Bot działa na własnym połączeniu z kanałem, a gdy potrzebny jest człowiek, tworzy zgłoszenie przez REST API helpdesku, z zapisem rozmowy i zebranymi danymi. W Tickets API Zendeska jedynym wymaganym polem przy tworzeniu zgłoszenia jest komentarz, a możesz wysłać klucz idempotencji, aby ponowione żądanie nie utworzyło duplikatu. Endpoint POST /api/v2/tickets we Freshdesku przyjmuje pola niestandardowe jako pary klucz–wartość i tworzy nowy kontakt, gdy e-mail zgłaszającego nie jest jeszcze znany.",
              "Wspólna rozmowa w module wiadomości helpdesku. W Zendesku zewnętrzny bot może zostać zainstalowany jako responder w messagingu; rolę domyślnego respondera może naraz pełnić tylko jeden bot. Bot odpowiada pierwszy i używa akcji pass control w switchboardzie, aby przekazać rozmowę do Agent Workspace, gdy potrzebny jest człowiek.",
            ],
          },
          {
            type: "p",
            text: "Webhooki obsługują drogę powrotną. Wyzwalacz (trigger) w Zendesku może wywołać zewnętrzny endpoint przez akcję „Notify webhook” — na przykład, aby poinformować bota, że konsultant rozwiązał zgłoszenie, dzięki czemu bot może domknąć sprawę w pierwotnym kanale.",
          },
          {
            type: "note",
            text: "Trzymaj jedno źródło prawdy dla odpowiedzi. Jeśli bot odpowiada z osobnego dokumentu, który rozjeżdża się z Twoim centrum pomocy, klienci dostają sprzeczne odpowiedzi w zależności od tego, gdzie pytają.",
          },
        ],
      },
      {
        heading: "Informowanie klientów, że rozmawiają z botem",
        blocks: [
          {
            type: "p",
            text: "Jeśli obsługujesz klientów w UE, art. 50 AI Act stosuje się od 2 sierpnia 2026. Według FAQ Komisji Europejskiej dostawcy muszą projektować systemy takie jak chatboty tak, by ludzie byli informowani o interakcji z AI od początku pierwszej interakcji, w jasny i wyraźny sposób. Wyjątek — gdy jest to oczywiste dla rozsądnie poinformowanej osoby — należy według Komisji interpretować zawężająco.",
          },
          {
            type: "p",
            text: "Najprostszy sposób to jedno zwykłe zdanie w powitaniu bota oraz widoczna możliwość kontaktu z człowiekiem. Zapisy rozmów często zawierają też dane osobowe, więc ustal, jak długo platforma bota je przechowuje i kto ma do nich dostęp.",
          },
        ],
      },
      {
        heading: "Jak TascaLab buduje chatboty do obsługi klienta",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje chatboty na bazie narzędzi, których już używasz — Zendesk, Freshdesk, Jira, Slack czy systemy wewnętrzne — przez ich API, webhooki oraz Make lub n8n, więc nie musisz zmieniać platformy. Bot jest projektowany jako filtr przed Twoim zespołem, a nie jego zastępstwo: odpowiada na to, na co potrafi, zbiera dane i przekazuje resztę z kontekstem.",
          },
          {
            type: "table",
            caption: "Pakiety chatbotów TascaLab (cena jednorazowa)",
            head: ["Pakiet", "Zakres", "Cena (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 kanały, FAQ, podstawowe zbieranie informacji", "350–450 USD"],
              [
                "Standard Chat Bot",
                "3–5 kanałów, bardziej złożone rozmowy, płynniejsze przekazania",
                "500–650 USD",
              ],
            ],
          },
          {
            type: "p",
            text: "Dostępne kanały: strona internetowa, WhatsApp, Telegram, Facebook Messenger i Instagram, a także telefon dzięki voicebotowi. Większość wdrożeń trwa 1–3 tygodnie, a każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat. Punktem wyjścia jest bezpłatna 30-minutowa rozmowa audytowa.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy chatbot AI zastąpi moich konsultantów?",
        a: "Nie powinien być do tego projektowany. Bot w obsłudze klienta najlepiej sprawdza się przy powtarzalnych pytaniach i zbieraniu danych, a wszystko inne przekazuje ludziom razem z zapisem rozmowy.",
      },
      {
        q: "Czy chatbot potrzebuje własnej bazy wiedzy?",
        a: "Zwykle nie. Boty AI w obsłudze klienta zazwyczaj odpowiadają z istniejącego centrum pomocy lub zatwierdzonej listy pytań i odpowiedzi — agenci AI w Zendesku generują na przykład odpowiedzi z połączonych źródeł wiedzy. Jedno źródło pozwala uniknąć sprzecznych odpowiedzi.",
      },
      {
        q: "Czy własny chatbot może tworzyć zgłoszenia w Zendesku lub Freshdesku?",
        a: "Tak. Oba helpdeski udostępniają endpoint REST do tworzenia zgłoszeń (POST /api/v2/tickets), więc bot może otworzyć zgłoszenie z zapisem rozmowy i zebranymi polami, gdy przekazuje sprawę.",
      },
      {
        q: "Czy muszę informować klientów, że rozmawiają z botem?",
        a: "W UE art. 50 AI Act od 2 sierpnia 2026 wymaga, by chatboty informowały ludzi, że rozmawiają z AI, chyba że jest to oczywiste. Najprościej powiedzieć o tym w pierwszej wiadomości bota.",
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
    slug: "voicebot-ai-obsluga-klienta",
    category: "services",
    navLabel: "Voicebot AI dla infolinii",
    primaryKeyword: "voicebot AI do obsługi klienta",
    title: "Voicebot AI do obsługi klienta: jak działa | TascaLab",
    description:
      "Jak działa voicebot AI w obsłudze klienta: telefonia, zamiana mowy na tekst, logika AI i synteza mowy, a także przekazanie połączenia, IVR a bot i przepisy FCC.",
    h1: "Voicebot AI do obsługi klienta: jak działa automatyzacja połączeń przychodzących",
    intro:
      "Voicebot AI do obsługi klienta odbiera połączenia przychodzące, ustala, czego potrzebuje dzwoniący, załatwia proste sprawy lub zbiera dane i przekazuje połączenie człowiekowi, gdy jest to potrzebne. Technicznie łączy cztery elementy — telefonię, zamianę mowy na tekst, model językowy lub logikę dialogu oraz syntezę mowy — a przekazanie rozmowy do Twojego zespołu jest równie ważne jak to, jak naturalnie brzmi głos.",
    keyFacts: [
      "Tradycyjny IVR działa na wybieranie klawiszy (DTMF); czasownik Gather w Twilio domyślnie używa DTMF i trzeba go ustawić na przyjmowanie mowy, aby transkrybował wypowiedzi dzwoniących.",
      "Dwukierunkowe Media Streams w Twilio przesyłają dźwięk rozmowy przez WebSocket jako jednokanałowy mu-law 8 kHz zakodowany w base64.",
      "Zendesk pozwala zewnętrznemu głosowemu agentowi AI odbierać połączenia jako pierwszy i eskalować je do konsultanta na żywo przez linię SIP-IN.",
      "Orzeczenie FCC z lutego 2024 uznaje głosy generowane przez AI za „sztuczne” w rozumieniu TCPA, więc połączenia z ich użyciem zasadniczo wymagają uprzedniej wyraźnej zgody.",
    ],
    sections: [
      {
        heading: "Jak działa voicebot dla połączeń przychodzących",
        blocks: [
          {
            type: "p",
            text: "Każdy voicebot dla połączeń przychodzących działa w tej samej pętli, niezależnie od tego, z jakich dostawców korzystasz:",
          },
          {
            type: "ol",
            items: [
              "Telefonia. Połączenie trafia na numer telefonu lub trunk SIP, a dostawca telefonii przekazuje je do Twojej aplikacji — albo pobierając instrukcje dla połączenia z Twojego serwera, albo strumieniując do niego dźwięk.",
              "Zamiana mowy na tekst. Słowa dzwoniącego są transkrybowane. Gdy czasownik Gather w Twilio jest ustawiony na przyjmowanie mowy, Twilio wysyła transkrypcję (SpeechResult) wraz z wynikiem Confidence na Twój action URL.",
              "Rozumienie i logika. Model językowy lub dialog oparty na regułach ustala, czego chce dzwoniący i co zrobić dalej: odpowiedzieć, zadać pytanie uzupełniające, sprawdzić coś przez API lub przekazać połączenie.",
              "Synteza mowy. Odpowiedź jest zamieniana na dźwięk i odtwarzana dzwoniącemu.",
              "Powtórzenie lub przekazanie. Pętla trwa, dopóki sprawa nie zostanie załatwiona lub połączenie nie zostanie przekazane, a wynik trafia do Twojego helpdesku.",
            ],
          },
          {
            type: "p",
            text: "Są dwa główne sposoby, by to połączyć. W układzie turowym platforma zbiera jedną wypowiedź naraz, a Twój serwer odpowiada nowymi instrukcjami; Twilio na przykład kontynuuje połączenie na podstawie TwiML zwróconego przez Twój action URL. W układzie strumieniowym dźwięk płynie nieprzerwanie przez WebSocket: dwukierunkowe Media Streams w Twilio, uruchamiane instrukcjami TwiML Connect i Stream, dostarczają dźwięk mu-law zakodowany w base64 z częstotliwością 8000 Hz w jednym kanale, a Twój serwer odsyła dźwięk w tym samym formacie.",
          },
          {
            type: "p",
            text: "Pomiędzy nimi są warstwy zarządzane. ConversationRelay w Twilio sam obsługuje na przykład zamianę mowy na tekst i syntezę mowy oraz wymienia tekst z Twoim serwerem przez bezpieczny WebSocket, więc Twój kod operuje słowami, a nie surowym dźwiękiem. Ma też ustawienia dotyczące przerywania, bo dzwoniący wchodzą botom w słowo; w układzie z samymi Media Streams Twój serwer wysyła komunikat clear, aby odrzucić zbuforowany dźwięk, który nie został jeszcze odtworzony.",
          },
        ],
      },
      {
        heading: "IVR a konwersacyjny voicebot",
        blocks: [
          {
            type: "table",
            caption: "Menu IVR w porównaniu z konwersacyjnym voicebotem",
            head: ["", "Tradycyjny IVR", "Konwersacyjny voicebot"],
            rows: [
              ["Jak odpowiada dzwoniący", "Wybieranie klawiszy (DTMF) w stałym menu", "Naturalna mowa, transkrybowana i interpretowana"],
              [
                "Struktura",
                "Drzewo menu: „wciśnij 1 – rozliczenia, 2 – zamówienia”",
                "Otwarte pytanie, np. „W czym mogę pomóc?”, a potem rozpoznanie intencji",
              ],
              [
                "Dobrze sprawdza się przy",
                "Niewielkiej liczbie przewidywalnych opcji kierowania",
                "Wielu różnych sprawach i zbieraniu danych własnymi słowami dzwoniącego",
              ],
              [
                "Słabe strony",
                "Długie menu i dzwoniący, których sprawa nie pasuje do żadnej opcji",
                "Błędne rozpoznanie mowy na zaszumionych liniach; wymaga kroków potwierdzenia i ścieżek awaryjnych",
              ],
              [
                "Czego się dowiadujesz",
                "Którą ścieżkę menu wybrał dzwoniący",
                "Zapis rozmowy, rozpoznaną intencję i wszystkie zebrane pola",
              ],
            ],
          },
          {
            type: "p",
            text: "Nie musisz wybierać jednego z nich. Jedną z opcji jest krótkie menu klawiszowe do wyboru języka, a po nim etap konwersacyjny. W czasowniku Gather w Twilio można ustawić przyjmowanie zarówno klawiszy, jak i mowy w tym samym komunikacie.",
          },
        ],
      },
      {
        heading: "Przekazanie połączenia człowiekowi",
        blocks: [
          {
            type: "p",
            text: "Platformy telefoniczne rozróżniają dwa rodzaje przekazania. W terminologii Twilio przy cold transfer (przekazaniu „na zimno”) nowy uczestnik zostaje dodany do połączenia, ale inicjator rozłącza się, zanim nowy uczestnik odbierze; warm transfer (przekazanie „na ciepło”) pozwala całej trójce porozmawiać, zanim inicjator się rozłączy. Twilio zaleca łączenie klientów z konsultantami przez konferencję — to właśnie umożliwia oba wzorce.",
          },
          {
            type: "p",
            text: "W przypadku bota przydatna wersja przekazania na ciepło polega na przekazaniu kontekstu, a nie na rozmowie: utwórz lub zaktualizuj zgłoszenie z zapisem rozmowy, rozpoznaną intencją i zebranymi danymi, zanim konsultant odbierze, żeby nie zaczynał od zera. Dobre momenty na przekazanie:",
          },
          {
            type: "ul",
            items: [
              "Dzwoniący prosi o człowieka — spełnij tę prośbę od razu, a nie po dwóch kolejnych pytaniach.",
              "Bot dwa razy z rzędu źle zrozumiał dzwoniącego.",
              "Sprawa dotyczy płatności, reklamacji lub czegokolwiek, o czym bot nie może decydować.",
              "Dzwoni znany klient o wysokim priorytecie, jeśli Twoje kierowanie połączeń go wyróżnia.",
            ],
          },
          {
            type: "p",
            text: "W Zendesku zewnętrzny głosowy agent AI może odebrać połączenie jako pierwszy i eskalować je do konsultanta Zendeska przez linię SIP-IN. Bot może utworzyć zgłoszenie i powiązać je z połączeniem, przekazując numer zgłoszenia w nagłówku SIP X-Zendesk-Ticket-Id; Zendesk uwierzytelnia połączenia SIP-IN za pomocą list kontroli dostępu IP. Zendesk oferuje też własnych głosowych agentów AI, którzy przy eskalacji dodają do zgłoszenia zapis rozmowy, podsumowanie wygenerowane przez AI i rozpoznaną intencję.",
          },
        ],
      },
      {
        heading: "Regulacje: co dotyczy voicebotów",
        blocks: [
          {
            type: "p",
            text: "Stany Zjednoczone. W lutym 2024 FCC wydała orzeczenie deklaratoryjne (Declaratory Ruling FCC 24-17), które potwierdza, że ograniczenia TCPA dotyczące połączeń z użyciem „sztucznego lub nagranego głosu” obejmują obecne technologie AI generujące ludzkie głosy. Połączenia z ich użyciem wymagają więc zasadniczo uprzedniej wyraźnej zgody osoby, do której się dzwoni, chyba że chodzi o cel alarmowy lub ma zastosowanie wyjątek. Orzeczenie dotyczy połączeń wykonywanych do konsumentów, np. robocalli. Bot odbierający połączenia, które klienci wykonują do Ciebie, to inna sytuacja, ale wszelkie połączenia wychodzące wykonywane przez bota — oddzwonienia, przypomnienia, ankiety — podlegają tym przepisom.",
          },
          {
            type: "p",
            text: "Unia Europejska. Art. 50 AI Act stosuje się od 2 sierpnia 2026 i wymaga, by systemy AI wchodzące w bezpośrednią interakcję z ludźmi były projektowane tak, aby ci ludzie wiedzieli, że mają do czynienia z AI, chyba że jest to oczywiste. Według FAQ Komisji ludzie muszą być informowani od początku pierwszej interakcji. W przypadku voicebota praktycznym rozwiązaniem jest krótka informacja w powitaniu.",
          },
          {
            type: "note",
            text: "To informacje ogólne, a nie porada prawna. Jeśli Twój bot wykonuje połączenia wychodzące lub działasz w sektorze regulowanym, sprawdź przepisy, które Cię dotyczą.",
          },
        ],
      },
      {
        heading: "Decyzje projektowe, od których zależy sukces voicebota",
        blocks: [
          {
            type: "ul",
            items: [
              "Poinformuj i określ oczekiwania w jednym zdaniu: to automatyczny asystent, a oto w czym może pomóc.",
              "Pisz krótkie komunikaty i pytaj o jedną rzecz naraz; dzwoniący nie mogą przewinąć wstecz.",
              "Powtarzaj dzwoniącemu numery, adresy e-mail i identyfikatory zamówień, zanim podejmiesz na ich podstawie jakieś działanie.",
              "Mów dzwoniącym, jak skontaktować się z człowiekiem, i zadbaj, by ta ścieżka działała na każdym etapie.",
              "Zapisuj każde połączenie w helpdesku z transkrypcją i wynikiem, aby widzieć, w jakich sprawach ludzie naprawdę dzwonią.",
              "Zaplanuj obsługę poza godzinami pracy: zbierz dane i utwórz zgłoszenie, a oddzwonienie obiecuj tylko wtedy, gdy ktoś naprawdę oddzwoni.",
            ],
          },
        ],
      },
      {
        heading: "Jak TascaLab buduje voiceboty",
        blocks: [
          {
            type: "p",
            text: "Pakiet Voice Bot od TascaLab obejmuje połączenia przychodzące, wstępną kwalifikację zgłoszeń (triage) i przekazanie do Twojego zespołu, w jednorazowej cenie 1 100–1 600 USD. Bot łączy się z narzędziami, których już używasz — Zendesk, Freshdesk, Jira, Slack czy systemy wewnętrzne — przez API i webhooki, więc wyniki rozmów trafiają jako zgłoszenia lub wiadomości tam, gdzie Twój zespół już zagląda. Jest zbudowany jako filtr przed Twoim zespołem, a nie jego zastępstwo.",
          },
          {
            type: "p",
            text: "Większość wdrożeń trwa 1–3 tygodnie. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a zacząć możesz od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się IVR od voicebota AI?",
        a: "IVR prowadzi dzwoniących przez stałe menu, zwykle za pomocą klawiszy (DTMF). Konwersacyjny voicebot transkrybuje to, co mówi dzwoniący, ustala intencję i może odpowiedzieć, zebrać dane lub przekazać połączenie.",
      },
      {
        q: "Czy voicebot może przekazywać połączenia do konsultanta na żywo?",
        a: "Tak. Platformy telefoniczne obsługują przekazanie na zimno (cold transfer), przy którym bot rozłącza się, zanim konsultant odbierze, oraz przekazanie na ciepło (warm transfer), przy którym uczestnicy są przez chwilę połączeni jednocześnie. W Zendesku zewnętrzny głosowy agent AI może eskalować do konsultanta na żywo przez linię SIP-IN.",
      },
      {
        q: "Czy FCC zakazuje voicebotów AI?",
        a: "Nie. Jej orzeczenie z lutego 2024 stwierdza, że głosy generowane przez AI są „sztuczne” w rozumieniu TCPA, więc połączenia z ich użyciem zasadniczo wymagają uprzedniej wyraźnej zgody osoby, do której się dzwoni. Dotyczy ono połączeń wykonywanych do konsumentów, więc ma największe znaczenie, jeśli Twój bot wykonuje połączenia wychodzące.",
      },
      {
        q: "Czy muszę mówić dzwoniącym, że rozmawiają z botem?",
        a: "W UE art. 50 AI Act wymaga od 2 sierpnia 2026 informowania ludzi, gdy wchodzą w bezpośrednią interakcję z systemem AI, chyba że jest to oczywiste. Najprościej załatwić to jednym zdaniem w powitaniu.",
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
    slug: "automatyczny-routing-zgloszen",
    category: "services",
    navLabel: "Automatyczny routing zgłoszeń",
    primaryKeyword: "automatyczny routing zgłoszeń",
    title: "Automatyczny routing zgłoszeń: metody i wdrożenie | TascaLab",
    description:
      "Automatyczny routing zgłoszeń: reguły, round-robin, routing według obciążenia i umiejętności, triage AI oraz jak robią to Zendesk, Freshdesk i Jira.",
    h1: "Automatyczny routing zgłoszeń: metody, narzędzia i wdrożenie",
    intro:
      "Automatyczny routing zgłoszeń przydziela każde przychodzące zgłoszenie do właściwej grupy lub konsultanta, bez ręcznego przeglądania kolejki. Obejmuje dwie decyzje — czego dotyczy zgłoszenie (temat, język, priorytet, klient) i kto powinien się nim zająć — podejmowane metodami takimi jak reguły, round-robin oraz routing według obciążenia lub umiejętności. Zendesk, Freshdesk i Jira Service Management obsługują to natywnie.",
    keyFacts: [
      "Omnichannel routing w Zendesku domyślnie przydziela pracę konsultantowi z największą wolną pojemnością; alternatywną metodą jest round robin.",
      "Silnik Omniroute we Freshdesku odpowiada za przydzielanie zgłoszeń metodą round-robin, według obciążenia i według umiejętności.",
      "Akcja przypisania w automatyzacji Jira może rozdzielać pracę według zrównoważonego obciążenia, metodą round-robin lub losowo.",
      "Intelligent triage w Zendesku klasyfikuje nowe zgłoszenia według intencji, sentymentu, języka i encji, a wyzwalacze mogą kierować je na podstawie wyników.",
    ],
    sections: [
      {
        heading: "Dwa kroki: najpierw kategoryzacja, potem przydział",
        blocks: [
          {
            type: "p",
            text: "Routing najczęściej zawodzi na pierwszym kroku. Jeśli zgłoszenia przychodzą bez wiarygodnej kategorii, nawet dobra metoda przydziału wyśle je do niewłaściwych osób. Traktuj więc routing jako dwie osobne decyzje: czym jest to zgłoszenie i kto powinien się nim zająć — najpierw grupa, potem konsultant. Sygnały, których możesz użyć do kategoryzacji zgłoszenia:",
          },
          {
            type: "ul",
            items: [
              "Punkt wejścia: przez który adres e-mail, formularz internetowy, linię telefoniczną lub widżet czatu przyszło zgłoszenie.",
              "Pola formularza: typ zgłoszenia lub opcja z listy rozwijanej wybrana przez klienta.",
              "Dane zgłaszającego: organizacja, plan lub tag VIP przypisany do użytkownika.",
              "Treść: słowa kluczowe w temacie lub opisie albo klasyfikacja AI według intencji, języka i sentymentu.",
            ],
          },
          {
            type: "p",
            text: "Klasyfikacja AI jest dziś wbudowana w największe helpdeski. Intelligent triage w Zendesku klasyfikuje nowe zgłoszenia według intencji, sentymentu, języka i encji na podstawie tematu i pierwszego publicznego komentarza, a wyniki dodaje jako pola zgłoszenia, z których mogą korzystać wyzwalacze, widoki i routing. Traktuj ją jak każdy inny sygnał: sprawdź próbkę jej klasyfikacji, zanim zaczniesz na ich podstawie kierować zgłoszenia.",
          },
        ],
      },
      {
        heading: "Porównanie metod routingu",
        blocks: [
          {
            type: "table",
            caption: "Popularne metody routingu zgłoszeń",
            head: ["Metoda", "Jak wybierany jest konsultant", "Kiedy się sprawdza", "Na co uważać"],
            rows: [
              [
                "Oparta na regułach",
                "Warunki „jeśli/to” dotyczące kanału, formularza, słów kluczowych lub zgłaszającego ustawiają grupę, konsultanta lub priorytet",
                "Stabilne kategorie, obsługa klientów VIP, kolejki językowe",
                "Nakładające się reguły i ich kolejność; reguły dezaktualizują się wraz ze zmianami w produktach",
              ],
              [
                "Round-robin",
                "Kolejny dostępny konsultant po kolei",
                "Podobne zgłoszenia obsługiwane przez konsultantów o podobnych umiejętnościach",
                "Ignoruje złożoność zgłoszeń, chyba że połączysz go z limitami pojemności",
              ],
              [
                "Według obciążenia",
                "Konsultant z największą wolną pojemnością lub najmniejszą liczbą otwartych zgłoszeń",
                "Zgłoszenia o różnej pracochłonności; unikanie przeciążenia",
                "Zależy od aktualnych statusów konsultantów i sensownych limitów",
              ],
              [
                "Według umiejętności",
                "Konsultant, którego umiejętności pasują do atrybutów zgłoszenia, np. języka lub produktu",
                "Zespoły specjalistyczne i wielojęzyczne",
                "Zgłoszenia niepasujące do żadnej umiejętności mogą czekać; potrzebujesz rozwiązania awaryjnego",
              ],
              [
                "Triage wspierany przez AI",
                "Model przewiduje kategorię, priorytet lub grupę, a potem jedna z powyższych metod przydziela zgłoszenie",
                "Duże wolumeny zgłoszeń pisanych swobodnym tekstem",
                "Błędne klasyfikacje; regularnie przeglądaj próbki",
              ],
            ],
          },
          {
            type: "p",
            text: "W praktyce te metody łączy się warstwowo: reguły lub AI wybierają grupę, a przydział round-robin, według obciążenia lub według umiejętności wskazuje konsultanta w jej obrębie.",
          },
        ],
      },
      {
        heading: "Jak robią to Zendesk, Freshdesk i Jira Service Management",
        blocks: [
          {
            type: "table",
            caption: "Natywne opcje routingu w poszczególnych helpdeskach",
            head: ["Helpdesk", "Warstwa reguł", "Automatyczne przydzielanie konsultantów"],
            rows: [
              [
                "Zendesk",
                "Wyzwalacze (triggers) sprawdzają warunki, takie jak kanał, organizacja czy tagi, i ustawiają pole Group lub Assignee",
                "Omnichannel routing uwzględnia status, pojemność i umiejętności konsultantów; domyślnie preferuje największą wolną pojemność, a alternatywą jest round robin",
              ],
              [
                "Freshdesk",
                "Reguły automatyzacji przy tworzeniu zgłoszeń sprawdzają zgłaszającego, temat, opis, tagi, źródło lub formularz i przypisują grupę lub konsultanta",
                "Omniroute obsługuje przydział round-robin, według obciążenia i według umiejętności",
              ],
              [
                "Jira Service Management",
                "Reguły automatyzacji zbudowane z wyzwalaczy, warunków i akcji",
                "Akcja przypisania rozdziela pracę według zrównoważonego obciążenia, metodą round-robin lub losowo",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. Omnichannel routing wysyła pracę tylko do konsultantów, których status pozwala im przyjmować pracę z danego kanału, a reguły pojemności ograniczają, ile zgłoszeń z danego kanału konsultant może mieć jednocześnie. Umiejętności można oznaczyć jako wymagane lub opcjonalne: opcjonalne są pomijane po upływie limitu czasu umiejętności (skills timeout), aby zgłoszenie mogło trafić do szerszej puli, a wymagane nigdy nie wygasają. Kolejność w kolejce zależy od wieku zgłoszenia, priorytetu lub najbliższego naruszenia SLA — w zależności od planu i konfiguracji.",
          },
          {
            type: "p",
            text: "Freshdesk. Domyślnie reguły tworzenia zgłoszeń zatrzymują się na pierwszej włączonej regule, której warunki są spełnione, więc umieszczaj reguły szczegółowe nad ogólnymi; możesz też przełączyć się na wykonywanie wszystkich pasujących reguł. Freshdesk radzi przypisywać grupę przed konsultantem, ponieważ przypisanie konsultanta bez grupy może pozostawić zgłoszenie nieprzydzielone. W przydziale według umiejętności zgłoszenie, które nie pasuje do żadnej umiejętności, pozostaje nieprzydzielone, dopóki ktoś go nie przypisze, dlatego utwórz umiejętność awaryjną z grupą jako warunkiem. W trybie round-robin Omniroute pomija konsultantów, którzy osiągnęli swój limit, i przydziela kolejne zgłoszenie konsultantowi, którego ostatni przydział jest najstarszy.",
          },
          {
            type: "p",
            text: "Jira Service Management. Routing buduje się z reguł automatyzacji: wyzwalacza, np. nowego elementu pracy (work item), warunków dotyczących typu zgłoszenia lub pól oraz akcji, np. przypisania. W metodzie zrównoważonego obciążenia każda osoba dostaje równą część elementów pracy w zakresie określonym za pomocą JQL; bez ograniczenia JQL reguła liczy przypisane elementy w całym projekcie. Round-robin przechodzi po kolei przez wskazane osoby.",
          },
        ],
      },
      {
        heading: "Jak skonfigurować routing, który działa na dłuższą metę",
        blocks: [
          {
            type: "ol",
            items: [
              "Przejrzyj zgłoszenia z ostatnich kilku tygodni: spisz główne kategorie i zanotuj, kto faktycznie rozwiązał każdą z nich.",
              "Zdefiniuj grupy przed konsultantami. Najpierw kieruj zgłoszenie do właściwego zespołu; wybór konsultanta to drugi krok.",
              "Zacznij od najbardziej wiarygodnych sygnałów — punktów wejścia i pól formularza — a dla reszty dodaj klasyfikację po słowach kluczowych lub AI.",
              "Wybierz metodę przydziału dla każdej grupy: round-robin przy jednorodnej pracy, według obciążenia tam, gdzie pracochłonność zgłoszeń się różni, według umiejętności tam, gdzie liczy się wiedza specjalistyczna.",
              "Dodaj rozwiązanie awaryjne, aby nic nie zostawało nieprzydzielone: regułę typu catch-all, umiejętność awaryjną lub kolejkę triage, za którą ktoś odpowiada.",
              "Oznaczaj decyzje routingu tagami, aby móc o nich raportować, i co miesiąc przeglądaj źle skierowane zgłoszenia.",
            ],
          },
          {
            type: "note",
            text: "Routing zmienia to, kto pierwszy widzi zgłoszenie, więc wpływa na czasy odpowiedzi. Przez kilka tygodni po każdej zmianie routingu sprawdzaj raporty SLA.",
          },
        ],
      },
      {
        heading: "Jak TascaLab konfiguruje routing zgłoszeń",
        blocks: [
          {
            type: "p",
            text: "Usługa Ticket Routing & Categorization od TascaLab (600–950 USD jednorazowo) działa na bazie helpdesku, który już masz — Zendesk, Freshdesk lub Jira — z wykorzystaniem jego natywnych reguł tam, gdzie wystarczają, oraz API, webhooków lub Make/n8n tam, gdzie nie wystarczają, np. do kategoryzowania zgłoszeń, zanim natywny routing je przydzieli. Nie musisz zmieniać platformy.",
          },
          {
            type: "p",
            text: "Większość wdrożeń trwa 1–3 tygodnie. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a bezpłatna 30-minutowa rozmowa audytowa to dobra okazja, by rozpisać Twoją obecną kolejkę.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym różni się round-robin od routingu według obciążenia?",
        a: "Round-robin przydziela kolejne zgłoszenie następnemu konsultantowi po kolei. Routing według obciążenia przydziela je konsultantowi z największą wolną pojemnością lub najmniejszą liczbą otwartych zgłoszeń, co pasuje do zespołów, w których pracochłonność zgłoszeń mocno się różni.",
      },
      {
        q: "Co dzieje się ze zgłoszeniami, które nie pasują do żadnej reguły ani umiejętności?",
        a: "To zależy od narzędzia. W przydziale według umiejętności we Freshdesku niedopasowane zgłoszenie pozostaje nieprzydzielone, dopóki ktoś go nie przypisze, dlatego Freshdesk sugeruje umiejętność awaryjną. W Zendesku umiejętności opcjonalne są pomijane po upływie limitu czasu, a wymagane nigdy nie wygasają.",
      },
      {
        q: "Czy AI może kategoryzować zgłoszenia przed routingiem?",
        a: "Tak. Intelligent triage w Zendesku klasyfikuje na przykład zgłoszenia według intencji, sentymentu i języka, a wyzwalacze mogą kierować je na podstawie tych pól. Możesz też klasyfikować zgłoszenia zewnętrznym modelem i zapisywać wynik w polu zgłoszenia przez API.",
      },
      {
        q: "Czy muszę zmienić helpdesk, aby zautomatyzować routing?",
        a: "Nie. Zendesk, Freshdesk i Jira Service Management mają natywne funkcje routingu i przydziału, a własną logikę można dodać przez ich API i webhooki.",
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
    slug: "automatyczne-raportowanie-obslugi-klienta",
    category: "services",
    navLabel: "Automatyczne raporty supportu",
    primaryKeyword: "automatyczne raportowanie obsługi klienta",
    title: "Automatyczne raportowanie obsługi klienta | TascaLab",
    description:
      "Automatyczne raportowanie obsługi klienta: jakie metryki śledzić i jak planować raporty z Zendeska, Freshdeska lub Jiry na e-mail, Slacka czy do Google Sheets.",
    h1: "Automatyczne raportowanie obsługi klienta: metryki, harmonogramy i dostarczanie",
    intro:
      "Automatyczne raportowanie obsługi klienta dostarcza kluczowe liczby — liczbę zgłoszeń, czasy odpowiedzi i rozwiązania, realizację SLA, zaległości — właściwym osobom według harmonogramu, bez ręcznego eksportowania danych. Zacznij od wbudowanych raportów cyklicznych w helpdesku; gdy nie wystarczają, pobieraj dane przez API do Google Sheets, na Slacka lub e-mailem.",
    keyFacts: [
      "Zendesk Explore może wysyłać e-mailem udostępniony dashboard według cyklicznego harmonogramu ustawionego maksymalnie 12 miesięcy do przodu.",
      "We Freshdesk Analytics można planować wysyłkę raportów niestandardowych; raporty kuratorskie (curated) trzeba najpierw sklonować.",
      "Subskrypcje filtrów w Jirze wysyłają e-mailem wyniki zapisanego wyszukiwania według harmonogramu, także opartego na wyrażeniu cron; wysyłanych jest tylko pierwszych 200 wyników.",
      "Incoming webhook Slacka publikuje wiadomość na kanale na podstawie prostego ładunku JSON.",
    ],
    sections: [
      {
        heading: "Co zwykle raportują zespoły obsługi klienta",
        blocks: [
          {
            type: "p",
            text: "Przydatny raport z obsługi klienta odpowiada na trzy pytania: czy nadążamy, czy jesteśmy wystarczająco szybcy i czy klienci są zadowoleni? Większość z tego obejmują te metryki:",
          },
          {
            type: "table",
            caption: "Popularne metryki w raportach obsługi klienta",
            head: ["Metryka", "Co mierzy", "Do czego się przydaje"],
            rows: [
              [
                "Zgłoszenia utworzone, rozwiązane i otwarte",
                "Wolumen i to, czy rosną zaległości",
                "Codzienne przeglądy, decyzje kadrowe",
              ],
              [
                "Czas pierwszej odpowiedzi",
                "Czas od utworzenia zgłoszenia do pierwszej publicznej odpowiedzi konsultanta (definicja Zendeska)",
                "Szybkość reakcji, monitorowanie SLA",
              ],
              [
                "Czas pierwszego i pełnego rozwiązania",
                "Czas do pierwszego rozwiązania w porównaniu z ostatnim rozwiązaniem — różnią się, gdy zgłoszenia są ponownie otwierane",
                "Jakość procesu, wykrywanie problemów z ponownym otwieraniem",
              ],
              [
                "Realizacja SLA",
                "Odsetek zgłoszeń, które spełniły cele dotyczące pierwszej odpowiedzi lub rozwiązania",
                "Alerty i tygodniowe podsumowania",
              ],
              [
                "Rozwiązanie za pierwszym razem (one-touch)",
                "Zgłoszenia rozwiązane jedną odpowiedzią konsultanta",
                "Znajdowanie tego, co można zautomatyzować lub opisać w dokumentacji",
              ],
              [
                "Zadowolenie klientów (CSAT)",
                "Odpowiedzi w ankiecie po rozwiązaniu zgłoszenia",
                "Trendy tygodniowe lub miesięczne",
              ],
              [
                "Odsetek przekazań przez bota",
                "Odsetek rozmów z botem przekazanych człowiekowi, jeśli korzystasz z bota",
                "Dostrajanie bota i jego bazy wiedzy",
              ],
            ],
          },
          {
            type: "p",
            text: "Definicje są ważniejsze niż dashboard. Zdecyduj, czy raportujesz mediany, czy średnie, godziny pracy czy godziny kalendarzowe i które zgłoszenia się liczą (scalone, spam, obsłużone wyłącznie przez bota). Zapisz definicje i trzymaj się ich, inaczej porównania tydzień do tygodnia przestaną cokolwiek znaczyć.",
          },
        ],
      },
      {
        heading: "Raporty cykliczne, które Twój helpdesk już oferuje",
        blocks: [
          {
            type: "table",
            caption: "Natywne opcje cyklicznego raportowania",
            head: ["Narzędzie", "Jak działa harmonogram", "Co dostają odbiorcy", "Ograniczenia, o których warto wiedzieć"],
            rows: [
              [
                "Zendesk Explore",
                "Na udostępnionym dashboardzie: Share > Schedule delivery; ustaw godzinę, cykliczność i datę zakończenia maksymalnie 12 miesięcy do przodu",
                "E-mail z eksportem dashboardu; dostępne formaty to m.in. Excel (jeden plik na kartę) i PNG",
                "Eksporty powyżej 25 MB przychodzą podzielone na kilka e-maili; dostarczenie może się opóźnić względem zaplanowanej godziny",
              ],
              [
                "Freshdesk Analytics",
                "Zaplanuj raport niestandardowy; jeśli chcesz zaplanować raport kuratorski, najpierw go sklonuj",
                "Raport w formacie PDF lub pojedyncze widżety jako PDF albo CSV",
                "Widżetów z raportów kuratorskich nie można planować",
              ],
              [
                "Subskrypcje filtrów Jira",
                "Zasubskrybuj użytkownika lub grupę do zapisanego filtra, z gotowym harmonogramem lub wyrażeniem cron",
                "E-mail z listą elementów pracy pasujących do filtra",
                "Wysyłanych jest tylko pierwszych 200 wyników; wyniki są obliczane osobno dla każdego odbiorcy",
              ],
              [
                "Automatyzacja Jira",
                "Zaplanowana reguła wyszukuje elementy pracy za pomocą JQL i wysyła listę",
                "E-mail lub wiadomość na Slacku",
                "Wysyłka na Slacka wymaga incoming webhooka Slacka",
              ],
            ],
          },
          {
            type: "p",
            text: "Dwa szczegóły Zendeska często zaskakują: odbiorcy są grupowani według języka i strefy czasowej, a do każdej grupy wysyłany jest jeden e-mail; jeśli dashboard ma obejmować cały poprzedni dzień, Zendesk radzi zaplanować wysyłkę na 2:00 lub później.",
          },
          {
            type: "p",
            text: "Natywne planowanie to właściwy pierwszy krok. Przestaje wystarczać, gdy potrzebujesz danych z kilku narzędzi w jednym miejscu, krótkiego podsumowania zamiast pełnego dashboardu, własnych obliczeń lub wysyłki na Slacka z narzędzia, które jej nie oferuje.",
          },
        ],
      },
      {
        heading: "Pobieranie danych przez API do Sheets, na Slacka lub e-mailem",
        blocks: [
          {
            type: "p",
            text: "Gdy wbudowane raporty nie pasują, sprawdzi się niewielki pipeline. Kroki są takie same niezależnie od tego, czy używasz skryptu, czy narzędzia do automatyzacji, takiego jak Make lub n8n:",
          },
          {
            type: "ol",
            items: [
              "Harmonogram. Wyzwalacz czasowy uruchamia przepływ codziennie, co tydzień lub w dowolnym innym potrzebnym odstępie.",
              "Pobranie. Przepływ wywołuje API helpdesku, by pobrać zgłoszenia zmienione od ostatniego uruchomienia. Do tego służy Incremental Exports API Zendeska: zwraca zgłoszenia zaktualizowane od podanego czasu początkowego, a Zendesk zaleca jego wersję opartą na kursorze ze względu na bardziej przewidywalną wydajność.",
              "Obliczenia. Wylicz metryki zgodnie ze spisanymi definicjami i porównaj je z poprzednim okresem lub z celami.",
              "Zapis. Dopisuj jeden wiersz na dzień lub tydzień w Google Sheets. Metoda spreadsheets.values.append w Sheets API znajduje tabelę w przekazanym zakresie i dodaje nowe wiersze po jej ostatnim wierszu, co daje narastającą historię do wykresów.",
              "Dostarczenie. Opublikuj krótkie podsumowanie na Slacku przez incoming webhook — unikalny URL, który przyjmuje ładunek JSON z treścią wiadomości i opcjonalnymi blokami Block Kit — albo wyślij je e-mailem z linkiem do pełnego arkusza lub dashboardu.",
            ],
          },
          {
            type: "note",
            text: "Traktuj tokeny API i adresy URL webhooków jak sekrety. Przechowuj je w magazynie poświadczeń narzędzia do automatyzacji, a nie w arkuszu ani w szablonie wiadomości.",
          },
        ],
      },
      {
        heading: "Raporty, które ludzie naprawdę czytają",
        blocks: [
          {
            type: "ul",
            items: [
              "Zacznij od kilku liczb i zmiany względem poprzedniego okresu; podlinkuj szczegóły zamiast je załączać.",
              "Oddziel alerty od raportów. Tygodniowe podsumowanie służy do śledzenia trendów; ryzyko naruszenia SLA zasługuje na osobną wiadomość w chwili, gdy się pojawi. Dokumentacja Atlassian pokazuje na przykład zaplanowaną regułę automatyzacji Jira, która publikuje na Slacku elementy pracy bliskie naruszenia SLA.",
              "Wysyłaj każdej grupie odbiorców to, na podstawie czego działa: konsultanci potrzebują dzisiejszej kolejki, menedżerowie — trendów tygodniowych.",
              "Każdej metryce przypisz właściciela, który potrafi wyjaśnić nietypowe zmiany.",
              "Po miesiącu przejrzyj raport i usuń wszystko, z czego nikt nie korzystał.",
            ],
          },
          {
            type: "p",
            text: "Tygodniowe podsumowanie dla kanału zespołu może mieć zaledwie pięć linijek, z których każda porównuje ten tydzień z poprzednim:",
          },
          {
            type: "ol",
            items: [
              "Zgłoszenia utworzone, rozwiązane i nadal otwarte, wraz ze zmianą zaległości.",
              "Mediana czasu pierwszej odpowiedzi w porównaniu z celem.",
              "Mediana czasu pełnego rozwiązania oraz liczba ponownie otwartych zgłoszeń.",
              "Realizacja SLA z linkami do zgłoszeń, w których doszło do naruszenia.",
              "CSAT za tydzień i jeden godny uwagi komentarz, jeśli Twoje ankiety je zbierają.",
            ],
          },
        ],
      },
      {
        heading: "Jak TascaLab konfiguruje automatyczne raporty",
        blocks: [
          {
            type: "p",
            text: "Usługa Automated Reports od TascaLab (500–900 USD jednorazowo) dostarcza Twoje metryki obsługi klienta e-mailem lub na Slacka według harmonogramu. Działa na bazie Zendeska, Freshdeska, Jiry i Twoich narzędzi wewnętrznych przez ich API oraz Make lub n8n, więc w codziennej pracy Twojego zespołu nic się nie zmienia.",
          },
          {
            type: "p",
            text: "Większość wdrożeń trwa 1–3 tygodnie. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a zacząć możesz od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy Zendesk może automatycznie wysyłać raporty e-mailem?",
        a: "Tak. W Zendesk Explore możesz zaplanować wysyłkę udostępnionego dashboardu, wybrać cykliczność i odbiorców oraz ustawić harmonogram na maksymalnie 12 miesięcy.",
      },
      {
        q: "Czy we Freshdesku można planować raporty?",
        a: "Tak, w przypadku raportów niestandardowych we Freshdesk Analytics; raporty kuratorskie trzeba sklonować, zanim będzie można je zaplanować. Raporty są wysyłane jako PDF, a widżety jako PDF lub CSV.",
      },
      {
        q: "Jak wysyłać dane z Jira Service Management na Slacka według harmonogramu?",
        a: "Użyj reguły automatyzacji Jira z wyzwalaczem harmonogramu, wyszukiwaniem elementów pracy za pomocą JQL i akcją Send Slack message, która publikuje przez incoming webhook Slacka.",
      },
      {
        q: "Jakie metryki powinien zawierać tygodniowy raport z obsługi klienta?",
        a: "Zwykle liczbę zgłoszeń i zaległości, czas pierwszej odpowiedzi, czas rozwiązania, realizację SLA i zadowolenie klientów. Trzymaj się stałych definicji, aby trend tydzień do tygodnia miał sens.",
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
    slug: "automatyzacja-e-maili-obslugi-klienta",
    category: "services",
    navLabel: "Automatyzacja e-maili supportu",
    primaryKeyword: "automatyzacja e-maili w obsłudze klienta",
    title: "Automatyzacja e-maili w obsłudze klienta | TascaLab",
    description:
      "Automatyzacja e-maili w obsłudze klienta: przekieruj adres supportu do Zendeska lub Freshdeska, skonfiguruj SPF i DKIM, a potem potwierdzaj, kieruj i eskaluj.",
    h1: "Automatyzacja e-maili w obsłudze klienta: od skrzynki do zgłoszenia z odpowiedzią",
    intro:
      "Automatyzacja e-maili w obsłudze klienta zamienia każdą wiadomość wysłaną na Twój adres supportu w zgłoszenie, potwierdza jej otrzymanie, kieruje ją do właściwego zespołu i — tam, gdzie to bezpieczne — odpowiada na nią, a wątki wymagające oceny sytuacji zostają w rękach ludzi. Nie potrzebujesz nowej skrzynki: przekieruj istniejący adres do Zendeska lub Freshdeska, skonfiguruj domenę nadawczą, aby odpowiedzi docierały do adresatów, a potem dodaj wyzwalacze, klasyfikację i AI.",
    keyFacts: [
      "Każde konto Zendesk ma systemowy adres supportu w formacie support@yoursubdomain.zendesk.com.",
      "Zendesk zaleca automatyczne przekierowanie na poziomie serwera pocztowego zamiast przekazywania wiadomości z programu pocztowego.",
      "Freshdesk zamienia przekierowane e-maile w zgłoszenia dopiero po skonfigurowaniu reguły przekierowania; skrzynki Gmail i Microsoft 365 można też podłączyć bezpośrednio.",
      "Jeśli w Zendesku włączysz podpisywanie DKIM, zanim rekordy CNAME pojawią się w DNS, dojdzie do błędów doręczania.",
      "Starsza funkcja Zendeska — autoodpowiedzi e-mail z artykułami — nie będzie dostępna od 10 grudnia 2026.",
    ],
    sections: [
      {
        heading: "Krok 1: każdy e-mail do supportu jako zgłoszenie",
        blocks: [
          {
            type: "p",
            text: "Klienci nadal piszą na adres, który już znają, np. support@twojafirma.pl. Za kulisami ta skrzynka przekierowuje wszystko do Twojego helpdesku, który dla każdej wiadomości tworzy lub aktualizuje zgłoszenie. Dla klienta nic się nie zmienia, a Twój zespół przestaje pracować na wspólnej skrzynce.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Każde konto ma systemowy adres supportu support@yoursubdomain.zendesk.com. Dodajesz własny adres jako adres supportu, konfigurujesz przekierowanie u dostawcy poczty, a potem go weryfikujesz. Zendesk zaleca automatyczne przekierowanie na poziomie serwera, a nie ręczne przekazywanie czy automatyczne przekazywanie z programu pocztowego, i zaznacza, że po naprawieniu nieudanej konfiguracji jej rozpoznanie może potrwać do 48 godzin.",
              "Freshdesk. Dodaj adres w Admin > Channels > Email > New Support Email. Przy domyślnym serwerze pocztowym Freshworks tworzysz w swojej skrzynce regułę przekierowania, która wysyła pocztę na adres wygenerowany przez Freshdesk; e-maile stają się zgłoszeniami dopiero wtedy, gdy ta reguła istnieje. Możesz też bezpośrednio podłączyć skrzynkę Gmail lub Microsoft 365, logując się do niej.",
            ],
          },
          {
            type: "p",
            text: "Używaj osobnego adresu do każdego celu — np. support@, billing@ i partners@ — zamiast jednego adresu na wszystko. Każdy adres stanie się później darmowym sygnałem do routingu.",
          },
          {
            type: "note",
            text: "Testuj wiadomością z zewnętrznego adresu. Zendesk zawiesza e-maile przychodzące z jednego z Twoich własnych adresów supportu, ponieważ taki układ może powodować pętle pocztowe.",
          },
        ],
      },
      {
        heading: "Krok 2: zadbaj o to, by Twoje odpowiedzi docierały",
        blocks: [
          {
            type: "p",
            text: "Gdy helpdesk odpowiada jako support@twojafirma.pl, wysyła wiadomości w imieniu Twojej domeny, a serwery odbiorcze sprawdzają, czy ma do tego prawo. Potwierdzasz to rekordami DNS: SPF wskazuje usługi, które mogą wysyłać pocztę w imieniu Twojej domeny, a DKIM dodaje podpis do każdej wiadomości. To jednorazowe zadanie dla osoby zarządzającej Twoim DNS.",
          },
          {
            type: "table",
            caption: "Konfiguracja domeny nadawczej w Zendesku i Freshdesku",
            head: ["Helpdesk", "Rekord", "Co zrobić", "Na co uważać"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "Dodaj include:mail.zendesk.com do rekordu SPF TXT swojej domeny",
                "Domena może mieć tylko jeden rekord SPF; jeśli w Twoim imieniu wysyłają pocztę także inne usługi, połącz je w tym jednym rekordzie",
              ],
              [
                "Zendesk",
                "DKIM",
                "Dodaj rekordy CNAME z przewodnika DKIM Zendeska dla każdej domeny zewnętrznej, a potem włącz podpisy cyfrowe w Admin Center",
                "Włączenie podpisów, zanim rekordy CNAME istnieją, powoduje błędy doręczania",
              ],
              [
                "Freshdesk",
                "DKIM",
                "W Admin > Channels > Email > Advanced Settings > Configure DKIM opublikuj cztery wygenerowane rekordy CNAME, a potem kliknij Verify",
                "Niektórzy dostawcy DNS, np. GoDaddy, automatycznie dopisują Twoją domenę, więc wpisz tylko prefiks hosta",
              ],
            ],
          },
          {
            type: "p",
            text: "Kolejność ma znaczenie: najpierw rekordy, potem włączenie. Jeśli Twoim DNS zarządza inny zespół lub agencja, wyślij im dokładne wartości z dokumentacji lub panelu administracyjnego helpdesku, zamiast przepisywać je ręcznie.",
          },
        ],
      },
      {
        heading: "Krok 3: potwierdzaj, sortuj i kieruj od razu po otrzymaniu",
        blocks: [
          {
            type: "p",
            text: "Gdy poczta zacznie napływać, pierwsze automatyzacje uruchamiają się w chwili utworzenia zgłoszenia. W Zendesku e-mail z potwierdzeniem pochodzi z domyślnego wyzwalacza Notify requester and CCs of received request. Zmień jego treść tak, by przekazywała klientowi coś przydatnego:",
          },
          {
            type: "ul",
            items: [
              "Numer referencyjny zgłoszenia, aby klient mógł się na niego powołać.",
              "Kiedy spodziewać się odpowiedzi — tylko jeśli jesteś w stanie dotrzymać tego terminu.",
              "Linki do artykułów w centrum pomocy dotyczących najczęstszych pytań.",
              "Co podać, aby szybciej uzyskać pomoc, np. numer zamówienia lub e-mail konta.",
            ],
          },
          {
            type: "p",
            text: "Następnie routing. Najprostszym sygnałem jest adres, na który wysłano e-mail. Udokumentowany przepływ Zendeska to wyzwalacz z warunkami Ticket Is Created i Ticket Received at Is (Twój adres do spraw rozliczeń) oraz akcją ustawiającą grupę — w parze z widokiem, który pokazuje tej grupie jej zgłoszenia.",
          },
          {
            type: "p",
            text: "Potem przychodzi kolej na routing oparty na treści. Reguły ze słowami kluczowymi w temacie działają przez jakiś czas, a potem zawodzą, bo klienci formułują sprawy na różne sposoby. Krok klasyfikacji — model AI lub zestaw reguł uruchamiany przez API helpdesku — czyta temat i treść, zapisuje kategorię, język i pilność w polach zgłoszenia oraz wyciąga szczegóły, takie jak numery zamówień, aby konsultanci nie musieli ich szukać. Twoje wyzwalacze lub reguły automatyzacji kierują następnie zgłoszenia na podstawie tych pól.",
          },
          {
            type: "note",
            text: "Autoodpowiedzi mogą odbijać się między systemami. Zendesk zawiesza wiadomości przychodzące z nagłówkami autorespondera, takimi jak Auto-Submitted, Precedence czy X-Autoresponder, a gdy jeden nadawca wyśle dużo e-maili w krótkim czasie, zawiesza je i blokuje ten adres na godzinę. Regularnie sprawdzaj zawieszone zgłoszenia, aby nie utknęła tam prawdziwa wiadomość od klienta.",
          },
        ],
      },
      {
        heading: "Krok 4: proste sprawy obsłuż automatycznie, resztę zostaw ludziom",
        blocks: [
          {
            type: "p",
            text: "Wiele e-maili do supportu dotyczy tych samych kilku pytań. Zendesk przez długi czas obsługiwał to funkcją autoodpowiedzi z artykułami (autoreplies with articles): e-mailem, który poleca maksymalnie trzy artykuły z centrum pomocy i pozwala klientowi zamknąć zgłoszenie. Funkcja ta otrzymała status starszej (legacy) 31 lipca 2025 i nie będzie dostępna od 10 grudnia 2026. Zastępstwem w Zendesku są agenci AI, którzy udzielają odpowiedzi generatywnej AI w kanałach messagingu, e-maila i formularzy internetowych. Jeśli nadal korzystasz z autoodpowiedzi, zaplanuj przejście już teraz.",
          },
          {
            type: "p",
            text: "Każda odpowiedź AI jest tak dobra, jak artykuły, na których się opiera, więc popraw bazę wiedzy, zanim włączysz automatyczne odpowiedzi. Potem zdecyduj, gdzie kończy się automatyzacja. Przekaż wątek człowiekowi, gdy:",
          },
          {
            type: "ul",
            items: [
              "Klient prosi o kontakt z człowiekiem lub odpisuje, że odpowiedź nie pomogła.",
              "Temat dotyczy rozliczeń, zwrotów pieniędzy, kwestii prawnych, bezpieczeństwa lub jest reklamacją.",
              "Ton jest gniewny albo wątek kilka razy przechodził tam i z powrotem.",
              "W kopii (CC) jest kilka osób lub e-mail jest częścią trwającej rozmowy dotyczącej konta.",
              "Odpowiedź wymagałaby zmiany na koncie, której automatyzacja nie może zweryfikować.",
            ],
          },
          {
            type: "p",
            text: "Zadbaj o widoczne przekazanie: oznacz zgłoszenie tagiem, w razie potrzeby podnieś jego priorytet i trzymaj wszystko w jednym zgłoszeniu, aby konsultant widział, co klient już otrzymał.",
          },
        ],
      },
      {
        heading: "Jak TascaLab automatyzuje e-maile w obsłudze klienta",
        blocks: [
          {
            type: "p",
            text: "TascaLab konfiguruje to na bazie helpdesku, którego już używasz — Zendesk, Freshdesk lub Jira — z natywnymi wyzwalaczami i regułami tam, gdzie wystarczają, oraz API, webhookami lub Make/n8n tam, gdzie nie wystarczają. Nie musisz zmieniać platformy. Klasyfikacja i routing przychodzących e-maili mieszczą się w usłudze Ticket Routing & Categorization (600–950 USD jednorazowo); przepływy wieloetapowe, takie jak odczytanie numeru zamówienia z e-maila i sprawdzenie go w innym systemie, to Custom Automation (1 200–2 000 USD).",
          },
          {
            type: "p",
            text: "Większość wdrożeń trwa 1–3 tygodnie. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a bezpłatna 30-minutowa rozmowa audytowa to dobra okazja, by rozpisać Twój obecny przepływ e-maili.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy mogę zachować własny adres e-mail supportu?",
        a: "Tak. W Zendesku dodajesz go jako adres supportu i przekierowujesz z niego pocztę do Zendeska, najlepiej automatycznie na poziomie serwera. We Freshdesku przekierowujesz go na adres wygenerowany przez Freshdesk albo bezpośrednio podłączasz skrzynkę Gmail lub Microsoft 365.",
      },
      {
        q: "Czy do poczty z helpdesku potrzebuję SPF i DKIM?",
        a: "Jeśli helpdesk wysyła odpowiedzi z Twojej własnej domeny, skonfiguruj oba. Zendesk prosi o dodanie include:mail.zendesk.com do rekordu SPF oraz o dodanie swoich rekordów CNAME przed włączeniem podpisywania DKIM. Freshdesk generuje cztery rekordy CNAME dla DKIM, które publikujesz i weryfikujesz.",
      },
      {
        q: "Dlaczego e-mail od klienta nie stał się zgłoszeniem w Zendesku?",
        a: "Sprawdź zawieszone zgłoszenia. Zendesk zawiesza wiadomości, które rozpoznaje jako automatyczne odpowiedzi, wiadomości wysłane z jednego z Twoich własnych adresów supportu oraz serie e-maili od jednego nadawcy.",
      },
      {
        q: "Czy autoodpowiedzi z artykułami w Zendesku są nadal dostępne?",
        a: "Od 31 lipca 2025 to funkcja starsza (legacy), która nie będzie dostępna od 10 grudnia 2026. Zendesk kieruje klientów do agentów AI, którzy mogą odpowiadać w e-mailu, a także w messagingu i formularzach internetowych.",
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
    slug: "baza-wiedzy-ai-obsluga-klienta",
    category: "services",
    navLabel: "Baza wiedzy AI dla supportu",
    primaryKeyword: "baza wiedzy AI dla obsługi klienta",
    title: "Baza wiedzy AI dla obsługi klienta: przewodnik | TascaLab",
    description:
      "Jak działa baza wiedzy AI w obsłudze klienta, jak układać artykuły w Zendesku, Freshdesku lub Confluence, dbać o ich aktualność i mierzyć unikanie zgłoszeń.",
    h1: "Baza wiedzy AI dla obsługi klienta: jak działa i jak ją zbudować",
    intro:
      "Baza wiedzy AI dla obsługi klienta to centrum pomocy napisane tak, aby zarówno klienci, jak i agenci AI mogli na jego podstawie odpowiadać na pytania. AI wyszukuje odpowiednie artykuły i na ich podstawie buduje odpowiedź, więc jej odpowiedzi są tylko tak trafne, kompletne i aktualne jak Twoje artykuły. Możesz ją zbudować w narzędziu, które już masz: w centrum pomocy Zendeska, bazie wiedzy Freshdeska lub w przestrzeniach Confluence połączonych z Jira Service Management.",
    keyFacts: [
      "Generowanie wspomagane wyszukiwaniem (RAG) znajduje odpowiednie fragmenty w Twoich dokumentach i dodaje je do promptu, dzięki czemu model odpowiada na podstawie Twoich treści.",
      "W centrum pomocy Zendeska artykuły znajdują się w sekcjach wewnątrz kategorii; nie mogą leżeć bezpośrednio w kategorii.",
      "Freshdesk porządkuje bazę wiedzy w kategorie, foldery i artykuły.",
      "Przestrzenie Confluence połączone z bazą wiedzy Jira Service Management zasilają jej centrum pomocy, wyszukiwanie w bazie wiedzy i wirtualnego agenta obsługi (virtual service agent).",
      "Jira Service Management uznaje zgłoszenie za uniknięte (deflected), gdy klient podczas jego wysyłania wybierze sugerowany artykuł i oznaczy go jako pomocny.",
    ],
    sections: [
      {
        heading: "Jak odpowiedzi AI korzystają z Twoich artykułów",
        blocks: [
          {
            type: "p",
            text: "Większość agentów AI w obsłudze klienta korzysta z jakiejś formy generowania wspomaganego wyszukiwaniem (retrieval-augmented generation, RAG). AWS opisuje RAG jako technikę, która uzupełnia duży model językowy o dane zewnętrzne, np. wewnętrzne dokumenty firmy. W skrócie:",
          },
          {
            type: "ol",
            items: [
              "Twoje dokumenty są zamieniane na embeddingi — liczbowe reprezentacje tekstu — i zapisywane w wektorowej bazie danych. To jednorazowy krok konfiguracji.",
              "Klient zadaje pytanie w języku naturalnym.",
              "System przeprowadza wyszukiwanie podobieństwa w wektorowej bazie danych i dodaje znalezione fragmenty do promptu jako kontekst.",
              "Model językowy pisze odpowiedź, korzystając z tego kontekstu.",
            ],
          },
          {
            type: "p",
            text: "Wynikają z tego dwie rzeczy. AI nie odpowie na podstawie czegoś, czego nie zapisano, i pracuje na fragmentach artykułów, a nie na całym centrum pomocy. Wskazówki Freshdesku mówią to samo: Freddy AI wyszukuje i wykorzystuje artykuły niezależnie od siebie, więc jeśli w artykule brakuje definicji lub kontekstu, AI może przyjmować założenia lub udzielać niepełnych odpowiedzi.",
          },
          {
            type: "p",
            text: "Największe helpdeski mają to wbudowane. Agenci AI Zendeska mogą korzystać z odpowiedzi generatywnych w messagingu i e-mailu, połączonych z wieloma źródłami wiedzy, z regułami wyszukiwania określającymi, które źródła są przeszukiwane w określonych warunkach. W Jira Service Management artykuły z połączonej przestrzeni Confluence pojawiają się w centrum pomocy, w wyszukiwaniu w bazie wiedzy i u wirtualnego agenta obsługi.",
          },
        ],
      },
      {
        heading: "Gdzie w helpdesku znajduje się baza wiedzy",
        blocks: [
          {
            type: "table",
            caption: "Struktura bazy wiedzy w poszczególnych helpdeskach",
            head: ["Helpdesk", "Gdzie są artykuły", "Jak są uporządkowane", "Co z nich korzysta"],
            rows: [
              [
                "Zendesk",
                "Centrum pomocy (Help center)",
                "Kategorie zawierają sekcje, a sekcje — artykuły; sekcje można zagnieżdżać, ale artykuły nie mogą leżeć bezpośrednio w kategorii",
                "Klienci przeglądający i przeszukujący centrum pomocy oraz agenci AI z odpowiedziami generatywnymi",
              ],
              [
                "Freshdesk",
                "Baza wiedzy (artykuły rozwiązań)",
                "Kategorie zawierają foldery, a foldery — artykuły; foldery można zagnieżdżać",
                "Klienci w portalu oraz Freddy AI",
              ],
              [
                "Jira Service Management",
                "Przestrzenie Confluence połączone z bazą wiedzy projektu usługowego",
                "Strony w połączonej przestrzeni Confluence",
                "Centrum pomocy, wyszukiwanie w bazie wiedzy i wirtualny agent obsługi",
              ],
            ],
          },
          {
            type: "p",
            text: "Jeden praktyczny szczegół: we Freshdesku kategoria lub folder pojawia się w portalu klienta dopiero wtedy, gdy opublikowano w nim co najmniej jeden artykuł. Dla odpowiedzi AI ważniejsze jest to, co mówi każdy artykuł, niż to, gdzie się znajduje; hierarchia pomaga głównie ludziom, którzy przeglądają treści.",
          },
        ],
      },
      {
        heading: "Pisz artykuły, na podstawie których AI może odpowiadać",
        blocks: [
          {
            type: "p",
            text: "Freshdesk publikuje wskazówki dotyczące pisania treści dla Freddy AI i mają one zastosowanie do każdej AI opartej na wyszukiwaniu:",
          },
          {
            type: "ul",
            items: [
              "Ogranicz każdy artykuł do jednego tematu i napisz, kiedy informacja ma zastosowanie, a kiedy nie.",
              "Linkuj do powiązanych artykułów, zamiast wplatać w tekst poboczne procesy.",
              "Rozdziel konfigurację, użytkowanie i rozwiązywanie problemów na osobne artykuły, jeśli służą różnym celom.",
              "Spraw, by każdy artykuł był samodzielny: zdefiniuj pojęcia i kontekst, na których się opiera.",
              "Użyj jednego nagłówka najwyższego poziomu dla celu artykułu i nagłówków niższego poziomu do rozdzielenia zadań, opcji lub pojęć.",
            ],
          },
          {
            type: "p",
            text: "Dodaj kilka własnych nawyków. Nadawaj artykułom tytuły słowami, których faktycznie używają klienci, a nie wewnętrznymi nazwami produktów. Umieść odpowiedź w pierwszych zdaniach, a dopiero potem kroki. Dokładne wartości — limity, terminy, ceny — trzymaj w jednym miejscu i do niego linkuj, aby zmiana nie zostawiła AI dwóch różnych liczb do wyboru. I zacznij tam, gdzie są zgłoszenia: kilka tygodni zgłoszeń pogrupowanych według tematów pokaże, które artykuły napisać lub poprawić najpierw.",
          },
        ],
      },
      {
        heading: "Dbaj o aktualność treści",
        blocks: [
          {
            type: "p",
            text: "Nieaktualny artykuł zamienia się w pewną siebie, błędną odpowiedź AI, dlatego każdy artykuł powinien mieć właściciela i rytm przeglądów. Zendesk wspiera to weryfikacją artykułów: administratorzy wiedzy ustawiają reguły weryfikacji, które oznaczają artykuły do przeglądu na podstawie filtrów i interwałów — np. co trzy miesiące dla artykułów z określoną etykietą, w danej kategorii lub od dawna nieaktualizowanych — a właściciele artykułów dostają e-mailowe przypomnienia o ich weryfikacji. Zanim zaczniesz na tym polegać, sprawdź, czy Twój plan to obejmuje.",
          },
          {
            type: "p",
            text: "Zaplanowane przeglądy wyłapują powolne rozjeżdżanie się treści z rzeczywistością. Te zdarzenia powinny od razu wywoływać aktualizację:",
          },
          {
            type: "ul",
            items: [
              "Zmiana produktu, cennika lub zasad: zaktualizuj artykuły najpóźniej w dniu wdrożenia zmiany.",
              "Konsultant odpowiada na zgłoszenie, którego baza wiedzy nie obejmuje: utwórz artykuł lub zgłoś jego brak.",
              "AI przekazuje rozmowę człowiekowi, bo nie umiała odpowiedzieć: przeanalizuj to pytanie.",
              "Dwa artykuły dają różne odpowiedzi: połącz je i wycofaj z publikacji duplikat.",
            ],
          },
        ],
      },
      {
        heading: "Mierz samoobsługę",
        blocks: [
          {
            type: "p",
            text: "Mierz, czy artykuły zapobiegają powstawaniu zgłoszeń, a nie tylko, czy ludzie je czytają. Trzymaj się tych samych definicji co miesiąc, aby trend miał sens.",
          },
          {
            type: "table",
            caption: "Wskaźniki samoobsługi warte śledzenia",
            head: ["Wskaźnik", "Co mówi", "Jak go uzyskać"],
            rows: [
              [
                "Uniknięte zgłoszenia (deflected requests)",
                "Klienci, którzy znaleźli odpowiedź podczas wysyłania zgłoszenia",
                "Jira Service Management uznaje zgłoszenie za uniknięte, gdy klient podczas wysyłania wybierze sugerowany artykuł i oznaczy go jako pomocny",
              ],
              [
                "Zgłoszenia rozwiązane za pomocą artykułu",
                "Jak często konsultanci zamykają zgłoszenia z użyciem treści z bazy wiedzy",
                "Raport Requests resolved w Jira Service Management śledzi zgłoszenia zamknięte z artykułem z bazy wiedzy lub bez niego",
              ],
              [
                "Wskaźnik samoobsługi",
                "Korzystanie z centrum pomocy w przeliczeniu na zgłoszenie",
                "Podziel liczbę sesji w centrum pomocy przez liczbę zgłoszeń utworzonych w tym samym okresie i obserwuj trend",
              ],
              [
                "Odsetek przekazań przez AI",
                "Odsetek rozmów z AI przekazanych człowiekowi",
                "Analityka Twojego agenta AI lub tag dodawany przy każdym przekazaniu",
              ],
              [
                "Zgłoszenia w tematach opisanych w dokumentacji",
                "Czy istniejące artykuły faktycznie zapobiegają zgłoszeniom",
                "Co miesiąc sprawdzaj próbkę zgłoszeń i oceniaj, czy artykuł już odpowiadał na dane pytanie",
              ],
            ],
          },
        ],
      },
      {
        heading: "Jak TascaLab wykorzystuje Twoją bazę wiedzy",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje chatboty na bazie narzędzi, których już używasz — Zendesk, Freshdesk, Jira, Slack czy systemy wewnętrzne — przez API, webhooki oraz Make lub n8n, więc Twoja baza wiedzy zostaje tam, gdzie jest. Starter Chat Bot (350–450 USD jednorazowo) obejmuje 1–2 kanały, a Standard Chat Bot (500–650 USD) — 3–5 kanałów, spośród: strony internetowej, telefonu, WhatsAppa, Telegrama, Facebook Messengera i Instagrama. Przepływy utrzymaniowe, takie jak przypomnienia o przeglądzie nieaktualnych artykułów, mieszczą się w usłudze Custom Automation (1 200–2 000 USD).",
          },
          {
            type: "p",
            text: "Większość wdrożeń trwa 1–3 tygodnie. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a zacząć możesz od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym jest generowanie wspomagane wyszukiwaniem (RAG) w obsłudze klienta?",
        a: "To sposób, w jaki AI odpowiada na podstawie Twoich własnych treści. Odpowiednie fragmenty są wyszukiwane w Twoich dokumentach, zwykle przez wyszukiwanie podobieństwa w wektorowej bazie danych, i dodawane do promptu, a model językowy pisze odpowiedź na podstawie tego kontekstu.",
      },
      {
        q: "Czy Jira Service Management może używać Confluence jako bazy wiedzy?",
        a: "Tak. Łączysz przestrzeń Confluence z bazą wiedzy projektu usługowego, a jej artykuły pojawiają się w centrum pomocy, w wyszukiwaniu w bazie wiedzy i u wirtualnego agenta obsługi.",
      },
      {
        q: "Jak dbać o aktualność artykułów w bazie wiedzy Zendeska?",
        a: "Korzystaj z weryfikacji artykułów, jeśli Twój plan ją obejmuje. Reguły weryfikacji oznaczają artykuły do przeglądu na podstawie filtrów i interwałów, a właściciele artykułów dostają e-mailowe przypomnienia o ich weryfikacji.",
      },
      {
        q: "Jak układać artykuły pod odpowiedzi AI?",
        a: "Jeden temat na artykuł, samodzielna treść, czytelne nagłówki. Freshdesk zaznacza, że Freddy AI wyszukuje artykuły niezależnie od siebie, więc brak definicji lub kontekstu może prowadzić do założeń lub niepełnych odpowiedzi.",
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
