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
];
