import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "bot-whatsapp-obsluga-klienta",
    category: "channels",
    navLabel: "Bot WhatsApp dla supportu",
    primaryKeyword: "bot WhatsApp do obsługi klienta",
    title: "Bot WhatsApp do obsługi klienta: zasady i wdrożenie",
    description:
      "Jak działa bot WhatsApp w obsłudze klienta: Business Platform a aplikacja, okno 24 godzin, szablony, opt-in, podstawy cennika i integracja z helpdeskiem.",
    h1: "Bot WhatsApp do obsługi klienta: jak działa i na co pozwala Meta",
    intro:
      "Bot WhatsApp do obsługi klienta działa na WhatsApp Business Platform (Cloud API), a nie w bezpłatnej aplikacji WhatsApp Business. Może swobodnie odpowiadać przez 24 godziny od każdej wiadomości klienta; potem możesz dotrzeć do klienta tylko za pomocą wcześniej zatwierdzonego szablonu. Zbuduj bota wokół tego okna, swojego procesu zbierania zgód (opt-in) i sprawnego przekazania rozmowy do helpdesku.",
    keyFacts: [
      "Gdy klient napisze lub zadzwoni do Ciebie, otwiera się 24-godzinne okno obsługi klienta, które resetuje się z każdą nową wiadomością.",
      "W oknie możesz wysyłać dowolne wiadomości serwisowe bez wcześniejszego zatwierdzania.",
      "Poza oknem szablony są jedynym typem wiadomości, jaki możesz wysłać.",
      "Zanim napiszesz do kogoś, potrzebujesz zgody (opt-in), która wyraźnie wskazuje Twoją firmę.",
      "Meta pobiera opłatę za każdą dostarczoną wiadomość, w zależności od kategorii wiadomości i kraju odbiorcy.",
    ],
    sections: [
      {
        heading: "Aplikacja WhatsApp Business a WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp oferuje firmom dwa produkty i tylko jeden z nich jest stworzony dla botów. Aplikacja WhatsApp Business to bezpłatna aplikacja dla małych firm, które odpowiadają klientom ręcznie i korzystają z podstawowych automatycznych odpowiedzi. WhatsApp Business Platform to zestaw API dla średnich i większych firm. Cloud API jest jej głównym produktem do obsługi wiadomości i to z nim łączą się chatboty, helpdeski i systemy CRM.",
          },
          {
            type: "table",
            caption: "Aplikacja a Platform w skrócie",
            head: ["", "Aplikacja WhatsApp Business", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Dla kogo", "Małe firmy odpowiadające ręcznie", "Średnie i duże firmy podłączające boty i narzędzia obsługi klienta"],
              ["Koszt", "Bezpłatne pobranie i korzystanie", "Opłaty za wiadomość ustalane przez Meta"],
              ["Konfiguracja", "Instalacja ze sklepu z aplikacjami", "Zasoby dla deweloperów lub Business Messaging Partner"],
              ["Automatyzacja", "Podstawowe automatyczne odpowiedzi", "Chatboty, przepływy wiadomości, integracje z CRM i helpdeskiem"],
            ],
          },
          {
            type: "p",
            text: "Jeśli już korzystasz z aplikacji, Meta umożliwia podłączenie istniejącego numeru z aplikacji WhatsApp Business do Cloud API, tak aby oba rozwiązania działały na tym samym numerze. Po tej operacji wiadomości wysyłane z aplikacji nie podlegają oknu obsługi klienta, a wiadomości wysyłane przez Cloud API — tak; niektóre funkcje aplikacji, np. czaty grupowe, nie są obsługiwane po stronie API. Zanim zaczniesz na tym polegać, sprawdź, czy Twój helpdesk obsługuje taką konfigurację.",
          },
        ],
      },
      {
        heading: "24-godzinne okno obsługi klienta",
        blocks: [
          {
            type: "p",
            text: "Każdy przepływ obsługi klienta w WhatsAppie zależy od jednego licznika czasu. Gdy klient napisze lub zadzwoni do Twojej firmy, rozpoczyna się 24-godzinne okno obsługi klienta, a każda jego nowa wiadomość lub połączenie ustawia je ponownie na 24 godziny. Dopóki jest otwarte, Twój bot lub konsultanci mogą wysyłać przez API dowolne wiadomości serwisowe bez wcześniejszego zatwierdzania.",
          },
          {
            type: "p",
            text: "Po zamknięciu okna jedynymi wiadomościami, jakie możesz wysłać, są szablony. Szablony to wcześniej przygotowane formaty, które przed użyciem muszą zostać zatwierdzone, a każdy należy do jednej kategorii: marketing (promocje), utility (kontynuacja czegoś, co klient zrobił lub o co poprosił) lub authentication (weryfikacja tożsamości).",
          },
          {
            type: "table",
            caption: "Co możesz wysłać i kiedy",
            head: ["Sytuacja", "Co możesz wysłać"],
            rows: [
              ["Klient napisał w ciągu ostatnich 24 godzin", "Dowolne wiadomości serwisowe od bota lub konsultantów"],
              ["Okno jest zamknięte, a musisz przekazać aktualizację zgłoszenia lub zamówienia", "Zatwierdzony szablon utility"],
              ["Musisz zweryfikować tożsamość klienta", "Zatwierdzony szablon authentication"],
              ["Chcesz coś promować", "Zatwierdzony szablon marketingowy, wysyłany tylko do użytkowników, którzy wyrazili zgodę"],
              ["Klient odpowiada na Twój szablon", "Jego odpowiedź otwiera nowe 24-godzinne okno, więc znów możesz odpowiadać dowolnymi wiadomościami"],
            ],
          },
          {
            type: "p",
            text: "Dla bota obsługi klienta oznacza to dwie praktyczne zasady: odpowiadaj w oknie zawsze, gdy to możliwe, i przygotuj z wyprzedzeniem szablony utility do późniejszych wiadomości, takich jak „Twoje zgłoszenie zostało zaktualizowane” czy „potrzebujemy jeszcze jednej informacji”.",
          },
        ],
      },
      {
        heading: "Zasady zgody (opt-in), których bot musi przestrzegać",
        blocks: [
          {
            type: "p",
            text: "Meta wymaga, aby firmy uzyskiwały zgodę (opt-in), zanim napiszą do kogoś na WhatsAppie. Zgoda nie musi dotyczyć wyłącznie WhatsAppa, ale musi jasno mówić, że dana osoba zgadza się na otrzymywanie wiadomości od Twojej firmy, i musi zawierać nazwę Twojej firmy. To Ty odpowiadasz za wybór metody zbierania zgód zgodnej z przepisami, które Cię obowiązują. Meta wymienia te metody:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Twoja strona internetowa",
              "Połączenie telefoniczne z przepływem IVR (interactive voice response)",
              "Osobiście lub na papierze",
            ],
          },
          {
            type: "p",
            text: "Meta zaleca też zgodę obejmującą każdy rodzaj wiadomości, które planujesz wysyłać, oraz jasne instrukcje rezygnacji (opt-out). W praktyce zbieraj i rejestruj zgody wszędzie tam, gdzie klienci po raz pierwszy podają Ci swój numer, np. przy składaniu zamówienia, rejestracji lub w formularzu kontaktowym, aby wysyłanie szablonów z aktualizacjami zgłoszeń nigdy nie opierało się na domysłach.",
          },
        ],
      },
      {
        heading: "Jak działa cennik WhatsAppa — bez tabeli stawek",
        blocks: [
          {
            type: "p",
            text: "Meta pobiera opłaty za każdą dostarczoną wiadomość i tylko za wiadomości, które firma wysyła do użytkowników. Cena zależy od kategorii wiadomości i numeru kierunkowego kraju odbiorcy. Tabele stawek są publikowane dla poszczególnych rynków i co jakiś czas się zmieniają, więc sprawdzaj aktualną stronę cennika Meta, zamiast opierać się na liczbie z wpisu na blogu.",
          },
          {
            type: "p",
            text: "Dla zespołów obsługi klienta ważne są dwie kwestie. Rozmowy rozpoczęte z reklamy Click to WhatsApp lub przycisku wezwania do działania na stronie na Facebooku mogą otworzyć bezpłatne okno punktu wejścia (free entry point window): jeśli odpowiesz w oknie obsługi klienta, Twoje wiadomości nie są płatne, a według aktualnej strony cennika Meta to okno może pozostać otwarte do 7 dni (wcześniejszy cennik oparty na rozmowach dawał 72 godziny). Ponadto dostawcy helpdesków mogą doliczać własne opłaty: dokumentacja Freshworks podaje na przykład, że firma dolicza marżę do opłat Meta za WhatsAppa.",
          },
          {
            type: "note",
            text: "Dokumentacja cenowa Meta opisuje zmiany w 2026 roku w sposobie rozliczania wiadomości serwisowych i utility. Przed oszacowaniem miesięcznych kosztów potwierdź aktualne zasady na stronie cennika Meta.",
          },
        ],
      },
      {
        heading: "Podłączenie bota do helpdesku",
        blocks: [
          {
            type: "p",
            text: "Bot na WhatsAppie nigdy nie powinien być ślepą uliczką. Gdy nie może czegoś rozwiązać, rozmowa powinna trafić do konsultanta z dołączonym już kontekstem. Zendesk i Freshdesk oferują natywne kanały WhatsApp:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp dodaje się jako kanał messagingu w Admin Center (Channels > Messaging and social > Messaging). Potrzebujesz konta Meta Business Manager należącego do Twojej firmy, a osoba podłączająca numer musi być w nim administratorem. Zendesk zaznacza, że konsultanci nie mogą odpowiadać po upływie ponad 24 godzin od ostatniej wiadomości klienta oraz że wiadomości grupowe WhatsApp nie są obsługiwane.",
              "Freshdesk: WhatsApp to kanał Freshdesk Omni z obsługą zatwierdzonych szablonów wiadomości. Ustawienia dla każdego numeru obejmują podłączenie agenta AI, kierowanie do grup konsultantów, zarządzanie szablonami, automatyzacje i zasady SLA. Przewodnik Freshdesku wskazuje limit 250 rozmów inicjowanych przez firmę na 24 godziny do czasu zakończenia weryfikacji firmy przez Meta.",
            ],
          },
          {
            type: "p",
            text: "Niezależnie od helpdesku mapuj dane zbierane przez bota (imię, numer zamówienia, typ problemu) na pola zgłoszenia, aby konsultanci nie pytali o nie ponownie, i oznaczaj tagiem rozmowy obsłużone przez bota, aby widzieć, co bot faktycznie rozwiązuje.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje boty na WhatsAppa na bazie narzędzi, których już używasz, takich jak Zendesk, Freshdesk, Jira, Slack czy systemy wewnętrzne, z wykorzystaniem API, webhooków oraz Make lub n8n. Starter Chat Bot (350–450 USD) obejmuje jeden lub dwa kanały z FAQ i podstawowym zbieraniem informacji; Standard Chat Bot (500–650 USD) obejmuje od trzech do pięciu kanałów z bardziej złożonymi rozmowami i płynniejszymi przekazaniami. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Bezpłatna 30-minutowa rozmowa audytowa to prosty sposób, by sprawdzić, czy WhatsApp pasuje do skali Twojej obsługi klienta.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy mogę zbudować bota obsługi klienta w zwykłej aplikacji WhatsApp Business?",
        a: "Nie w sensowny sposób. Aplikacja oferuje podstawowe automatyczne odpowiedzi, ale chatboty i integracje z helpdeskiem działają na WhatsApp Business Platform, zwykle przez Cloud API.",
      },
      {
        q: "Co się dzieje, jeśli klient odpowie po 24 godzinach?",
        a: "Jego nowa wiadomość otwiera nowe 24-godzinne okno obsługi klienta, więc Twój bot lub konsultanci znów mogą swobodnie odpowiadać. Okno ogranicza tylko wiadomości, które inicjujesz po jego zamknięciu.",
      },
      {
        q: "Czy szablony WhatsApp wymagają zatwierdzenia?",
        a: "Tak. Szablony muszą zostać zatwierdzone, zanim będzie można je wysłać, i są jedynymi wiadomościami dozwolonymi poza oknem obsługi klienta.",
      },
      {
        q: "Czy mogę zachować dotychczasowy numer z aplikacji WhatsApp Business?",
        a: "Meta umożliwia podłączenie istniejącego numeru z aplikacji WhatsApp Business do Cloud API, tak aby z obu rozwiązań można było korzystać na tym samym numerze, przy czym niektóre funkcje nie są dostępne po stronie API. Przed zmianą sprawdź, czy Twój helpdesk to obsługuje.",
      },
      {
        q: "Ile kosztuje utrzymanie bota obsługi klienta na WhatsAppie?",
        a: "Meta pobiera opłaty za każdą dostarczoną wiadomość, w zależności od kategorii wiadomości i kraju odbiorcy, a stawki z czasem się zmieniają. Sprawdź aktualne tabele stawek Meta i ewentualne opłaty doliczane przez Twój helpdesk.",
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
    slug: "bot-telegram-obsluga-klienta",
    category: "channels",
    navLabel: "Bot Telegram dla supportu",
    primaryKeyword: "bot Telegram do obsługi klienta",
    title: "Bot Telegram do obsługi klienta: Bot API i webhooki",
    description:
      "Bot Telegram do obsługi klienta: konfiguracja w BotFather, webhooki a long polling, klawiatury inline, tryb prywatności, limity wysyłki i przekazanie do helpdesku.",
    h1: "Bot Telegram do obsługi klienta: jak działa i jak go skonfigurować",
    intro:
      "Bot Telegram do obsługi klienta to program połączony z Telegram Bot API. Rejestrujesz go przez @BotFather, otrzymujesz token, a Twój kod odbiera wiadomości klientów przez webhook lub long polling. Boty w Telegramie nie mogą rozpoczynać rozmów, więc każdy proces obsługi zaczyna się wtedy, gdy klient otworzy Twojego bota i dotknie Start.",
    keyFacts: [
      "Bota tworzysz i otrzymujesz jego token uwierzytelniający, pisząc do @BotFather.",
      "Aktualizacje przychodzą przez getUpdates lub webhook; obie metody wzajemnie się wykluczają.",
      "Telegram przechowuje niedostarczone aktualizacje nie dłużej niż 24 godziny.",
      "Boty nie mogą pisać do użytkowników jako pierwsze; użytkownik musi napisać do bota lub dodać go do grupy.",
      "Webhooki działają tylko na portach 443, 80, 88 i 8443.",
    ],
    sections: [
      {
        heading: "Jak działa bot Telegram do obsługi klienta",
        blocks: [
          {
            type: "p",
            text: "Bota tworzysz, pisząc w Telegramie do @BotFather, który go rejestruje i wydaje Ci token uwierzytelniający. Twój kod używa tego tokenu do wywoływania Bot API przez HTTPS. Token jedynie uwierzytelnia Twój kod; nie daje botowi uprawnień do pisania do kogokolwiek.",
          },
          {
            type: "p",
            text: "Boty nie mogą rozpoczynać rozmów. Użytkownik musi najpierw napisać do bota lub dodać go do grupy. Każdy bot ma link w formacie t.me/ z nazwą użytkownika bota, który otwiera z nim czat, a gdy ktoś otworzy ten czat po raz pierwszy, widzi przycisk Start, który wysyła polecenie /start. Zapisz wtedy chat ID użytkownika: potrzebujesz go do wysłania każdej późniejszej wiadomości, np. aktualizacji zgłoszenia.",
          },
          {
            type: "ol",
            items: [
              "Klient klika Twój link t.me na stronie internetowej lub w e-mailu i naciska Start.",
              "Bot wita go i pokazuje krótkie menu typowych tematów.",
              "Proste pytania dostają odpowiedź od razu; w pozostałych sprawach bot zbiera informacje (numer zamówienia, opis, zrzuty ekranu).",
              "Bot tworzy zgłoszenie w Twoim helpdesku i mówi klientowi, co będzie dalej.",
              "Gdy konsultant odpowie w helpdesku, odpowiedź trafia z powrotem do tego samego czatu w Telegramie.",
            ],
          },
        ],
      },
      {
        heading: "Webhooki a long polling",
        blocks: [
          {
            type: "p",
            text: "Bot API oferuje dwa wzajemnie wykluczające się sposoby odbierania aktualizacji: metodę getUpdates (long polling) i webhooki. Gdy webhook jest ustawiony, getUpdates nie zadziała. W obu przypadkach Telegram przechowuje nieodebrane aktualizacje nie dłużej niż 24 godziny, więc bot, który przez dobę jest offline, traci wiadomości.",
          },
          {
            type: "table",
            caption: "Jak wybrać sposób odbierania wiadomości przez bota",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Jak to działa", "Twój serwer pyta Telegram o nowe aktualizacje", "Telegram wysyła każdą aktualizację na Twój adres URL HTTPS"],
              ["Hosting", "Dowolny serwer, który może wysyłać żądania wychodzące", "Publiczny endpoint HTTPS na porcie 443, 80, 88 lub 8443"],
              ["Weryfikacja nadawcy", "Niepotrzebna, to Twój serwer wysyła żądania", "Ustaw secret_token; Telegram odsyła go w nagłówku X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "Aby przełączyć się z webhooka z powrotem na polling, usuń webhook metodą deleteWebhook lub wywołując setWebhook z pustym URL. Obie metody przyjmują parametr drop_pending_updates, jeśli przy zmianie konfiguracji chcesz odrzucić zaległe aktualizacje z kolejki.",
          },
        ],
      },
      {
        heading: "Przyciski i menu w procesach obsługi",
        blocks: [
          {
            type: "p",
            text: "Boty obsługi klienta działają lepiej z przyciskami niż z dowolnym tekstem. Niestandardowe klawiatury odpowiedzi (custom reply keyboards) zastępują klawiaturę użytkownika gotowymi odpowiedziami, a naciśnięcie jednej z nich wysyła ten tekst na czat. Klawiatury inline dołączają przyciski do konkretnej wiadomości i po naciśnięciu niczego nie publikują na czacie. Przycisk inline może otworzyć URL lub wysłać do bota dane callback o rozmiarze 1–64 bajtów.",
          },
          {
            type: "p",
            text: "Dwa szczegóły często zaskakują twórców nowych botów. Po naciśnięciu przycisku callback aplikacje Telegrama pokazują wskaźnik postępu, dopóki Twój bot nie wywoła answerCallbackQuery, więc odpowiadaj na każdy callback, nawet bez tekstu. A w menu wieloetapowych edytuj istniejącą wiadomość, podmieniając przyciski, zamiast za każdym razem wysyłać nową; edycja działa dla wiadomości z klawiaturami inline.",
          },
        ],
      },
      {
        heading: "Grupy, tryb prywatności i limity wysyłki",
        blocks: [
          {
            type: "p",
            text: "Boty dodane do grup domyślnie działają w trybie prywatności. W tym trybie bot otrzymuje skierowane do niego polecenia, odpowiedzi na swoje wiadomości, wiadomości wysłane za jego pośrednictwem i wiadomości serwisowe, ale nie zwykłe rozmowy w grupie. Boty będące administratorami grupy otrzymują wszystkie wiadomości, a tryb prywatności możesz wyłączyć poleceniem /setprivacy w @BotFather, choć Telegram zaleca to tylko wtedy, gdy jest to absolutnie konieczne. Wiadomości w prywatnych czatach z botem zawsze do niego docierają.",
          },
          {
            type: "table",
            caption: "Przybliżone limity z Bots FAQ Telegrama",
            head: ["Gdzie", "Wskazówki"],
            rows: [
              ["Pojedynczy czat", "Unikaj więcej niż jednej wiadomości na sekundę; krótkie serie mogą przejść, zanim zaczną pojawiać się błędy 429"],
              ["Grupa", "Nie więcej niż 20 wiadomości na minutę"],
              ["Powiadomienia masowe", "Około 30 wiadomości na sekundę łącznie do różnych użytkowników, chyba że włączysz płatne rozgłaszanie (paid broadcasts)"],
            ],
          },
          {
            type: "p",
            text: "FAQ Telegrama podaje te wartości jako przybliżone, więc zaimplementuj ponawianie prób przy błędach 429, zamiast polegać na dokładnych liczbach. W przypadku bota obsługi klienta mają one znaczenie głównie wtedy, gdy powiadamiasz wielu klientów naraz, np. o awarii. Przy long pollingu przekazuj też do getUpdates parametr offset: aktualizacje do tego ID są oznaczane jako potwierdzone i nie zostaną zwrócone ponownie.",
          },
        ],
      },
      {
        heading: "Przekazanie do helpdesku i Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Przy przekazaniu rozmowy od bota do człowieka typowy wzorzec polega na tym, że bot otwiera zgłoszenie i przesyła odpowiedzi konsultanta z powrotem na czat. Zendesk obsługuje Telegram jako kanał Sunshine Conversations w Agent Workspace, co wymaga planu Suite Professional lub wyższego. Wiadomości stają się zgłoszeniami, a odpowiedź konsultanta w Zendesku pojawia się w komunikatorze klienta.",
          },
          {
            type: "p",
            text: "Telegram Business to osobna opcja dla małych zespołów, które odpowiadają klientom z własnego konta w Telegramie. Właściciel konta może podłączyć naraz jednego bota biznesowego, wybrać, do których czatów ma on dostęp, i pozwolić mu przetwarzać wiadomości przychodzące oraz — jeśli ma na to uprawnienia — odpowiadać w imieniu właściciela.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje boty obsługi klienta na Telegramie, które łączą się z narzędziami, których już używasz, takimi jak Zendesk, Freshdesk, Jira, Slack czy systemy wewnętrzne, przez API, webhooki oraz Make lub n8n. Starter Chat Bot (350–450 USD) obejmuje jeden lub dwa kanały z FAQ i podstawowym zbieraniem informacji, co pasuje do połączenia Telegrama z widżetem na stronie internetowej. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Możesz zacząć od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy bot w Telegramie może napisać do klienta jako pierwszy?",
        a: "Nie. Użytkownik musi napisać do bota lub dodać go do grupy, zanim bot będzie mógł do niego pisać. Zapisz chat ID przy pierwszym kontakcie, aby później móc wysyłać aktualizacje.",
      },
      {
        q: "Czy używać webhooków, czy getUpdates?",
        a: "Obie metody działają, ale nie jednocześnie. Webhooki wysyłają każdą aktualizację na Twój endpoint HTTPS, a long polling wymaga tylko żądań wychodzących i jest prostszy na etapie developmentu.",
      },
      {
        q: "Dlaczego mój bot nie widzi wiadomości w grupie?",
        a: "Boty domyślnie działają w trybie prywatności i widzą tylko wiadomości przeznaczone dla nich. Nadaj botowi uprawnienia administratora grupy albo wyłącz tryb prywatności poleceniem /setprivacy w @BotFather i dodaj bota do grupy ponownie.",
      },
      {
        q: "Czy Zendesk obsługuje Telegram?",
        a: "Tak, jako kanał Sunshine Conversations w Agent Workspace, który według Zendeska wymaga planu Suite Professional lub wyższego. Wiadomości trafiają do Zendeska jako zgłoszenia, a odpowiedzi konsultantów wracają do Telegrama.",
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
    slug: "bot-facebook-messenger-obsluga-klienta",
    category: "channels",
    navLabel: "Bot Messenger w obsłudze klienta",
    primaryKeyword: "bot Facebook Messenger do obsługi klienta",
    title: "Bot Facebook Messenger do obsługi klienta: zasady",
    description:
      "Jak działa bot Facebook Messenger w obsłudze klienta: webhooki, okno 24 godzin, tag HUMAN_AGENT, przekazanie do konsultantów i zasady Meta dotyczące botów.",
    h1: "Bot Facebook Messenger do obsługi klienta: okna, tagi i przekazanie",
    intro:
      "Bot Facebook Messenger do obsługi klienta łączy się z Twoją stroną na Facebooku przez Messenger Platform Meta: wiadomości przychodzące trafiają na Twój serwer przez webhooki, a bot odpowiada przez Send API. Możesz odpowiadać przez 24 godziny od każdej wiadomości klienta, a konsultant może odpowiedzieć w ciągu maksymalnie 7 dni z tagiem HUMAN_AGENT, gdy Twoja aplikacja uzyska zgodę na jego używanie.",
    keyFacts: [
      "Standardowe wiadomości pozwalają odpowiedzieć w ciągu 24 godzin od wiadomości danej osoby.",
      "Tag HUMAN_AGENT pozwala ludziom odpowiadać w ciągu 7 dni, po zatwierdzeniu aplikacji.",
      "Od 27 kwietnia 2026 tagi CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE i POST_PURCHASE_UPDATE zwracają błąd.",
      "Tam, gdzie wymaga tego prawo, bot musi informować, że ludzie rozmawiają z automatyczną usługą.",
      "Zasady Meta oczekują, że zautomatyzowane rozwiązania odpowiadają na działania użytkownika w ciągu 30 sekund.",
    ],
    sections: [
      {
        heading: "Jak działa Messenger Platform",
        blocks: [
          {
            type: "p",
            text: "Bot w Messengerze to aplikacja Meta połączona z jedną lub kilkoma stronami na Facebooku. Aplikacja subskrybuje każdą stronę przez jej krawędź subscribed_apps, co wymaga uprawnień pages_messaging i pages_manage_metadata. Meta wysyła wtedy zdarzenia, takie jak nowe wiadomości i kliknięcia przycisków, na Twój webhook, a bot odpowiada przez Send API.",
          },
          {
            type: "table",
            caption: "Zdarzenia webhooka, z których zwykle korzysta bot obsługi klienta",
            head: ["Zdarzenie", "Co mówi Twojemu botowi"],
            rows: [
              ["messages", "Klient wysłał wiadomość do Twojej strony"],
              ["messaging_postbacks", "Klient kliknął przycisk postback, przycisk „Get Started” lub pozycję stałego menu (persistent menu)"],
              ["messaging_handovers", "Kontrola nad rozmową została przekazana, przejęta lub zmieniona między aplikacjami"],
              ["standby", "Wiadomość przyszła, gdy kontrolę nad rozmową miała inna aplikacja"],
            ],
          },
          {
            type: "p",
            text: "Meta daje też stałe punkty wejścia. Kliknięcie przycisku „Get Started” wysyła postback, co jest dobrym momentem na wiadomość powitalną. Stałe menu, z maksymalnie 20 pozycjami, może zawierać opcję „Porozmawiaj z człowiekiem”; pojawia się ono dopiero po ustawieniu przycisku „Get Started”.",
          },
        ],
      },
      {
        heading: "Okno 24 godzin i tagi wiadomości",
        blocks: [
          {
            type: "p",
            text: "Standardowe okno wiadomości w Messengerze daje Ci 24 godziny na odpowiedź od chwili, gdy ktoś napisze do Twojej strony, a wiadomości w tym oknie mogą zawierać treści promocyjne. Jeśli wyślesz zwykłą wiadomość po zamknięciu okna, Send API zwróci błąd 1545041.",
          },
          {
            type: "table",
            caption: "Na co Meta pozwala po wiadomości od klienta",
            head: ["Termin lub zastosowanie", "Co możesz wysłać", "Uwagi"],
            rows: [
              ["W ciągu 24 godzin od wiadomości klienta", "Standardowe wiadomości od bota lub konsultanta", "W tym oknie dozwolone są treści promocyjne"],
              ["Do 7 dni od wiadomości klienta", "Odpowiedź człowieka z tagiem HUMAN_AGENT", "Wymaga zatwierdzenia aplikacji; nie dla wiadomości automatycznych ani promocyjnych"],
              ["Aktualizacje wydarzeń, zakupów lub kont", "Nie stare tagi: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE i POST_PURCHASE_UPDATE od 27 kwietnia 2026 zwracają błąd", "Meta odsyła do szablonów utility lub Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta ogranicza HUMAN_AGENT do spraw, których nie da się rozwiązać w standardowym oknie, np. zapytania, które przychodzi, gdy Twoja firma jest zamknięta na weekend, albo sprawy, która trwa dłużej niż dzień. Wiadomości automatyczne są niedozwolonym zastosowaniem tego tagu, więc bot nie może go używać do samodzielnego wysyłania spóźnionych odpowiedzi.",
          },
        ],
      },
      {
        heading: "Przekazywanie rozmów od bota do człowieka",
        blocks: [
          {
            type: "p",
            text: "Na tej samej stronie może działać kilka aplikacji, np. Twój bot i helpdesk. Protokół przekazywania (handover protocol) pozwala przekazać rozmowę z jednej aplikacji lub skrzynki do innej, a webhook messaging_handovers informuje, kiedy kontrola zostaje przekazana, przejęta lub zmieniona. Aplikacje, które nie kontrolują wątku, otrzymują zdarzenia standby zamiast zwykłych zdarzeń wiadomości.",
          },
          {
            type: "p",
            text: "Meta stopniowo przenosi to rozwiązanie do Conversation Routing. Aktualizacja z 2021 roku usunęła konieczność przypisywania ról głównej i dodatkowej (primary i secondary) oraz dodała tryby Exclusive i Idle. Regułami routingu można teraz zarządzać w ustawieniach strony, a gdy Conversation Routing jest włączony, Conversations API zwraca pole is_owner, dzięki czemu Twoja aplikacja odpowiada tylko w wątkach, które kontroluje.",
          },
          {
            type: "ul",
            items: [
              "Zapewnij jasne wyjście: dokumentacja Meta wspomina o eskalacji przez intencję awaryjną (fallback intent), słowo kluczowe lub szybkie odpowiedzi (quick replies).",
              "Zanim przekażesz kontrolę, opublikuj krótkie podsumowanie (temat, numer zamówienia, co bot już próbował zrobić) tam, gdzie zobaczy je konsultant.",
              "Powiedz klientowi, co będzie dalej, łącznie z godzinami pracy, jeśli nikt nie jest online.",
              "Gdy konsultant skończy, oddaj kontrolę botowi, aby kolejne pytanie dostało odpowiedź automatycznie.",
            ],
          },
        ],
      },
      {
        heading: "Zasady, które kształtują bota",
        blocks: [
          {
            type: "ul",
            items: [
              "Informowanie: jeśli wymaga tego obowiązujące prawo, zautomatyzowane czaty muszą informować, że dana osoba rozmawia z automatyczną usługą, np. na początku rozmowy lub gdy człowiek oddaje rozmowę z powrotem automatyzacji. Meta sugeruje informowanie o tym nawet tam, gdzie nie jest to wymagane, i wymienia Kalifornię oraz Niemcy.",
              "Czas reakcji: w pełni zautomatyzowane rozwiązania muszą odpowiadać na wszystkie działania użytkownika w ciągu 30 sekund. Rozwiązania hybrydowe, łączące boty i ludzi, powinny zaktualizować ustawienie odpowiedzi w Page Settings w sekcji Advanced Messaging.",
              "Bez promocji w otagowanych wiadomościach: tagów wiadomości nie można używać do reklamy, marketingu ani akwizycji.",
              "Zatwierdzenie aplikacji: Twoja aplikacja musi zostać zatwierdzona, zanim będzie mogła używać tagu HUMAN_AGENT.",
            ],
          },
        ],
      },
      {
        heading: "Podłączenie Messengera do helpdesku",
        blocks: [
          {
            type: "p",
            text: "Większość helpdesków potrafi odbierać rozmowy z Messengera jako zgłoszenia. W Zendesku Messenger jest kanałem messagingu w Agent Workspace, a Zendesk opisuje kilka praktycznych ograniczeń:",
          },
          {
            type: "ul",
            items: [
              "Konsultanci mają siedem dni na odpowiedź, zanim okno wiadomości się zamknie; potem pole odpowiedzi jest zablokowane.",
              "Odpowiedzi wysłane przez konsultanta bezpośrednio w Messengerze nie synchronizują się z Zendeskiem, więc konsultanci powinni odpowiadać z Zendeska.",
              "Wiadomości dłuższe niż 2000 znaków nie są dostarczane.",
            ],
          },
          {
            type: "p",
            text: "Jeśli Twój bot działa jako osobna aplikacja, zdecyduj, która aplikacja domyślnie kontroluje wątek i kiedy kontrola przechodzi na inną; w przeciwnym razie bot i helpdesk mogą odpowiadać temu samemu klientowi jednocześnie.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje boty na Messengera działające na bazie Zendeska, Freshdeska, Jiry, Slacka lub Twoich narzędzi wewnętrznych, z wykorzystaniem API, webhooków oraz Make lub n8n. Starter Chat Bot (350–450 USD) obejmuje jeden lub dwa kanały; Standard Chat Bot (500–650 USD) obejmuje od trzech do pięciu kanałów, np. Messenger, Instagram i WhatsApp, z bardziej złożonymi rozmowami i płynniejszymi przekazaniami. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Zarezerwuj bezpłatną 30-minutową rozmowę audytową, aby rozpisać Twój obecny przepływ w Messengerze.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ile mam czasu na odpowiedź w Messengerze?",
        a: "Standardowe wiadomości możesz wysyłać w ciągu 24 godzin od wiadomości danej osoby. Konsultant może odpowiedzieć do 7 dni później z tagiem HUMAN_AGENT, gdy Twoja aplikacja uzyska zgodę na jego używanie.",
      },
      {
        q: "Czy mój bot może używać tagu HUMAN_AGENT?",
        a: "Nie. Meta wymienia wiadomości automatyczne jako niedozwolone zastosowanie tego tagu. Jest on przeznaczony dla odpowiedzi ludzi, gdy sprawy nie da się rozwiązać w ciągu 24 godzin.",
      },
      {
        q: "Co zastąpiło tagi ACCOUNT_UPDATE i POST_PURCHASE_UPDATE?",
        a: "Te tagi, podobnie jak CONFIRMED_EVENT_UPDATE, od 27 kwietnia 2026 zwracają błąd. W tych zastosowaniach Meta zaleca szablony utility lub Marketing Messages API.",
      },
      {
        q: "Czy muszę informować użytkowników, że rozmawiają z botem?",
        a: "Zasady Meta wymagają tego tam, gdzie nakazuje to obowiązujące prawo, a w pozostałych przypadkach to zalecają. Najprościej powiedzieć o tym na początku rozmowy.",
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
    slug: "automatyzacja-dm-instagram",
    category: "channels",
    navLabel: "Automatyzacja DM na Instagramie",
    primaryKeyword: "automatyzacja DM na Instagramie",
    title: "Automatyzacja DM na Instagramie w obsłudze klienta: zasady",
    description:
      "Automatyzacja DM na Instagramie: zasady dla kont profesjonalnych, okno 24 godzin, tag human agent, prywatne odpowiedzi na komentarze i ice breakers.",
    h1: "Automatyzacja DM na Instagramie w obsłudze klienta",
    intro:
      "Automatyzacja DM na Instagramie polega na podłączeniu bota do wiadomości bezpośrednich profesjonalnego konta na Instagramie przez API Meta, tak aby rutynowe pytania dostawały natychmiastowe odpowiedzi, a pozostałe trafiały do człowieka. Bot może odpowiedzieć dopiero wtedy, gdy ktoś do Ciebie napisze, i ma na to 24 godziny; konsultanci mogą odpowiadać do 7 dni z tagiem human agent.",
    keyFacts: [
      "API do wiadomości na Instagramie działają z kontami profesjonalnymi (firmowymi lub twórców).",
      "Twoja aplikacja może napisać do użytkownika dopiero wtedy, gdy on napisze do Ciebie, i ma wtedy 24 godziny na odpowiedź.",
      "Tag human agent pozwala odpowiadać w ciągu 7 dni, po przejściu weryfikacji aplikacji (app review).",
      "Prywatne odpowiedzi na komentarze można wysyłać w ciągu 7 dni od komentarza.",
      "Na Instagramie Meta zastąpiła protokół przekazywania (handover protocol) mechanizmem Conversation Routing.",
    ],
    sections: [
      {
        heading: "Czego potrzebujesz przed automatyzacją DM na Instagramie",
        blocks: [
          {
            type: "p",
            text: "API do wiadomości na Instagramie działają z kontami profesjonalnymi. Są dwa ich typy: konta firmowe — dla sprzedawców, lokalnych firm, marek, organizacji i usługodawców — oraz konta twórców — dla osób publicznych, twórców treści, artystów i influencerów. Pamiętaj, że przełączenie prywatnego konta osobistego na profesjonalne sprawia, że staje się ono publiczne.",
          },
          {
            type: "table",
            caption: "Dwa sposoby podłączenia wiadomości na Instagramie",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Strona na Facebooku", "Niewymagana", "Konto na Instagramie musi być połączone ze stroną na Facebooku"],
              ["Wysyłanie wiadomości", "Token dostępu użytkownika Instagrama (Instagram User access token) z uprawnieniem instagram_business_manage_messages", "Ten sam endpoint /PAGE_ID/messages co w Messengerze, z użyciem identyfikatora klienta w zakresie Instagrama (Instagram-scoped ID)"],
              ["Wiadomości przychodzące", "Webhooki wiadomości", "Pole webhooka messages, obok wiadomości z Messengera"],
              ["Kiedy się sprawdza", "Firmy i twórcy działający tylko na Instagramie", "Zespoły, które już mają bota w Messengerze lub helpdesk połączony z Meta"],
            ],
          },
          {
            type: "p",
            text: "W obu przypadkach właściciel konta musi zezwolić na dostęp do wiadomości w sekcji Connected tools w ustawieniach wiadomości Instagrama, inaczej API nie będzie mogło zarządzać rozmowami. Zendesk zaznacza, że ten przełącznik trzeba włączyć w aplikacji mobilnej Instagram, a nie w wersji webowej. Jeśli Twoja aplikacja obsługuje konta profesjonalne, których nie posiadasz ani którymi nie zarządzasz, potrzebuje też Advanced Access w ramach weryfikacji aplikacji przez Meta.",
          },
        ],
      },
      {
        heading: "Okna wiadomości i tag human agent",
        blocks: [
          {
            type: "p",
            text: "Twoja aplikacja może napisać do kogoś dopiero wtedy, gdy ta osoba napisze do Twojego konta, i ma 24 godziny na odpowiedź na każdą wiadomość. W sprawach, które trwają dłużej, np. przy zapytaniu, które przychodzi, gdy Twoja firma jest zamknięta na weekend, tag human agent pozwala człowiekowi odpowiedzieć w ciągu 7 dni. Tag jest dostępny tylko dla aplikacji, które przeszły weryfikację (app review).",
          },
          {
            type: "table",
            caption: "Ograniczenia DM na Instagramie, o których warto wiedzieć",
            head: ["Zasada", "Co oznacza dla Twojego bota"],
            rows: [
              ["24-godzinne okno odpowiedzi", "Automatyczne odpowiedzi muszą zostać wysłane w ciągu 24 godzin od wiadomości klienta"],
              ["Tag human agent (7 dni)", "Późne odpowiedzi wysyła człowiek, po weryfikacji aplikacji"],
              ["Brak wiadomości grupowych", "API nie obsługuje rozmów grupowych"],
              ["Folder Requests", "Rozmowy w folderze Requests nieaktywne przez 30 dni nie są zwracane przez API"],
            ],
          },
        ],
      },
      {
        heading: "Z komentarza do DM: prywatne odpowiedzi",
        blocks: [
          {
            type: "p",
            text: "Wiele pytań do obsługi klienta zaczyna się w komentarzach, np. „Czy to jest dostępne?” albo „Jak mogę to zwrócić?”. Prywatne odpowiedzi (private replies) pozwalają Twojemu kontu odpowiedzieć na komentarz wiadomością bezpośrednią do jego autora. Działają w przypadku komentarzy pod postami, rolkami i reklamami oraz komentarzy podczas transmisji Instagram Live. Prywatna odpowiedź to pojedyncza wiadomość wysyłana w ciągu 7 dni od komentarza, która automatycznie zawiera link do posta lub komentarza.",
          },
          {
            type: "p",
            text: "Prywatne odpowiedzi nie wymagają już tagu human agent. Jeśli dana osoba odpowie na Twoją prywatną odpowiedź, ta wiadomość rozpoczyna zwykłą rozmowę i obowiązuje standardowe 24-godzinne okno. Praktyczna konfiguracja: monitoruj komentarze pod kątem słów kluczowych związanych z obsługą klienta, wyślij prywatną odpowiedź z odpowiedzią lub pytaniem, a dalej niech działa bot DM — dzięki temu numery zamówień i dane osobowe nie trafiają do publicznych komentarzy.",
          },
        ],
      },
      {
        heading: "Ice breakers i punkty wejścia",
        blocks: [
          {
            type: "p",
            text: "Ice breakers to gotowe pytania, które ludzie mogą kliknąć, rozpoczynając nową rozmowę z Twoim kontem, np. „Gdzie jest moje zamówienie?” lub „Porozmawiaj z obsługą klienta”. Gdy ktoś kliknie jedno z nich, Twoja aplikacja otrzymuje zdarzenie webhooka messaging_postback, więc każdy ice breaker może uruchamiać własny przepływ bota. Ice breakers można skonfigurować w kilku językach, a odpowiednia wersja wyświetla się w zależności od ustawień regionalnych użytkownika. Używaj ich do najczęstszych pytań, kieruj każde do konkretnego przepływu i sprawdzaj, które ludzie faktycznie klikają, aby zastąpić te, z których nikt nie korzysta.",
          },
          {
            type: "p",
            text: "Linki ig.me mogą przekazywać do rozmowy parametr referral, np. aby poinformować bota, z której strony produktu przyszedł klient. W przypadku nowych rozmów Meta wymaga skonfigurowania ice breakers, aby ten parametr referral dotarł do bota.",
          },
        ],
      },
      {
        heading: "Przekazywanie DM człowiekowi",
        blocks: [
          {
            type: "p",
            text: "Na Instagramie Meta nie obsługuje już protokołu przekazywania (handover protocol) i przeniosła wszystkie firmy na Conversation Routing. Pozwala on przekazać kontrolę nad wątkiem do skrzynki Instagrama lub do zewnętrznej skrzynki, takiej jak helpdesk. Podczas weryfikacji aplikacji Meta oczekuje, że pokażesz, iż przy eskalacji własność wątku przechodzi do skrzynki, a konsultant może z niej odpowiadać.",
          },
          {
            type: "p",
            text: "Warto znać dwie osobliwości. Odpowiedzi wysłane przez zewnętrzną aplikację przenoszą wątek do folderu General, a wiadomości dostarczane przez platformę nie zawierają informacji o folderze widocznej w aplikacji Instagram. W kanale Instagram Direct w Zendesku odpowiedzi udzielone bezpośrednio na Instagramie nie są dodawane do zgłoszenia, więc konsultanci powinni odpowiadać z Zendeska.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "TascaLab konfiguruje boty DM na Instagramie, które odpowiadają na częste pytania, zbierają dane i przekazują rozmowy Twojemu zespołowi w Zendesku, Freshdesku, Jirze, Slacku lub narzędziu wewnętrznym, zbudowane na API, webhookach oraz Make lub n8n. Starter Chat Bot (350–450 USD) obejmuje jeden lub dwa kanały; Standard Chat Bot (500–650 USD) — od trzech do pięciu, np. Instagram, Messenger i Twoją stronę internetową. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, a większość wdrożeń trwa 1–3 tygodnie. Punktem wyjścia jest bezpłatna 30-minutowa rozmowa audytowa.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy mogę zautomatyzować DM na osobistym koncie na Instagramie?",
        a: "Nie. API Meta do wiadomości działają z kontami profesjonalnymi, którymi mogą być konta firmowe lub konta twórców.",
      },
      {
        q: "Czy do automatyzacji DM na Instagramie potrzebuję strony na Facebooku?",
        a: "Nie w przypadku Instagram API with Instagram Login, które nie wymaga połączonej strony. Instagram Messaging API w ramach Messenger Platform jej wymaga.",
      },
      {
        q: "Ile mogę czekać z odpowiedzią na DM?",
        a: "Automatyczne odpowiedzi muszą zostać wysłane w ciągu 24 godzin od wiadomości klienta. Konsultant może odpowiedzieć do 7 dni później z tagiem human agent, gdy Twoja aplikacja przejdzie weryfikację.",
      },
      {
        q: "Czy mogę wysłać DM osobie, która skomentowała mój post?",
        a: "Tak, za pomocą prywatnej odpowiedzi: pojedynczej wiadomości wysłanej w ciągu 7 dni od komentarza, która automatycznie zawiera link do posta lub komentarza.",
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
    slug: "chatbot-na-strone-obsluga-klienta",
    category: "channels",
    navLabel: "Chatbot na stronę dla supportu",
    primaryKeyword: "chatbot na stronę do obsługi klienta",
    title: "Chatbot na stronę do obsługi klienta: wdrożenie",
    description:
      "Zaplanuj chatbota na stronę do obsługi klienta: widżety helpdesków, np. Zendesk i Freshchat, przekazanie do konsultanta, obsługa po godzinach i dostępność WCAG.",
    h1: "Chatbot na stronę do obsługi klienta: widżety, przekazanie i dostępność",
    intro:
      "Chatbot na stronę do obsługi klienta to widżet czatu na Twojej stronie lub w centrum pomocy, w którym bot odpowiada na częste pytania, zbiera dane i przekazuje rozmowę konsultantowi na żywo, gdy nie może pomóc. Większość helpdesków ma własny widżet, więc właściwa praca polega na skonfigurowaniu przepływów bota, przekazania, działania po godzinach pracy i dostępności.",
    keyFacts: [
      "Web Widget (messaging) Zendeska instaluje się, dodając fragment kodu do każdej strony, na której ma się pojawiać.",
      "Messaging w Zendesku może wyświetlać różne odpowiedzi w godzinach pracy i poza nimi.",
      "Agentów AI we Freshdesku można ustawić tak, by zbierali dane klienta przed przekazaniem rozmowy człowiekowi.",
      "WCAG 2.2 wymaga, aby wszystkie funkcje dało się obsługiwać za pomocą klawiatury (2.1.1, poziom A).",
      "Technika W3C z role=\"log\" pozwala czytnikom ekranu ogłaszać nowe wiadomości czatu, gdy tylko się pojawią.",
    ],
    sections: [
      {
        heading: "Natywny widżet helpdesku czy własny?",
        blocks: [
          {
            type: "p",
            text: "Jeśli już korzystasz z helpdesku, zacznij od jego widżetu. Czaty trafiają do tej samej kolejki co e-maile i wiadomości z mediów społecznościowych, konsultanci odpowiadają z jednego miejsca, a kod widżetu utrzymuje dostawca.",
          },
          {
            type: "ul",
            items: [
              "Zendesk Web Widget (messaging): w Admin Center przejdź do Channels > Messaging and social > Messaging, otwórz widżet i skopiuj kod z sekcji Installation. Dodaj go do kodu źródłowego każdej strony, na której widżet ma się pojawiać, i upewnij się, że Twoja zapora sieciowa (firewall) przepuszcza widżet.",
              "Widżet Freshchat (Freshdesk): skopiuj kod do osadzenia z ustawień kanału czatu webowego i dodaj go do każdej strony, na której widżet ma się pojawiać. Freshworks opisuje też instalację w WordPressie, Shopify i Squarespace oraz w aplikacjach na iOS i Androida.",
            ],
          },
          {
            type: "table",
            caption: "Wybór widżetu",
            head: ["Opcja", "Dobry wybór, gdy", "Na co uważać"],
            rows: [
              ["Natywny widżet helpdesku", "Chcesz mieć czaty, zgłoszenia i raporty w jednym miejscu", "Wygląd i logika bota są ograniczone do tego, co obsługuje dostawca"],
              ["Natywny widżet z własnym botem", "Potrzebujesz logiki lub integracji, których brakuje wbudowanemu botowi", "Przekazanie rozmowy i kontekstu trzeba połączyć i przetestować"],
              ["W pełni własny widżet", "Czat jest częścią interfejsu Twojego produktu", "Odpowiadasz za dostępność cyfrową, ciągłość działania i integrację po stronie konsultantów"],
            ],
          },
        ],
      },
      {
        heading: "Projektowanie przekazania od bota do człowieka",
        blocks: [
          {
            type: "p",
            text: "Przekazanie to moment, w którym zawodzi większość botów na stronach. Dobre przekazanie przenosi klienta do człowieka, nie zmuszając go do powtarzania się. Oba główne helpdeski obsługują ten wzorzec:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: dodanie agenta AI do kanału messagingu zastępuje domyślną odpowiedź messagingu własnymi odpowiedziami agenta AI. W przepisie na przepływ (workflow recipe) Zendeska agent AI wita klienta, pokazuje formularz do zebrania informacji potrzebnych konsultantom, informuje klienta, że prośba trafia do zespołu, a potem przekazuje rozmowę konsultantowi, który dostaje powiadomienie i po jej przyjęciu widzi szczegóły. Dla zalogowanych klientów przepis wykorzystuje krótszy formularz, bez imienia i adresu e-mail.",
              "Freshchat i Freshdesk: przepływy bota przekazują rozmowę za pomocą akcji takich jak Assign to group czy Make available for assignment, a ustawienia przekazania agentów AI we Freshdesku obejmują opcję zbierania danych klienta przed przekazaniem.",
            ],
          },
          {
            type: "p",
            text: "O tym, co zbierać, zdecyduj na podstawie tego, o co Twoi konsultanci pytają najpierw. Typowe pola to imię i adres e-mail w przypadku niezalogowanych odwiedzających, numer zamówienia lub konta, typ problemu wybrany za pomocą przycisków, krótki opis własnymi słowami klienta oraz strona, na której się znajdował.",
          },
        ],
      },
      {
        heading: "Obsługa po godzinach pracy",
        blocks: [
          {
            type: "p",
            text: "Widżet, który o 2 w nocy obiecuje, że „konsultant zaraz się z Tobą połączy”, szkodzi bardziej niż brak czatu. Zaplanuj, co się dzieje, gdy nikt nie jest online:",
          },
          {
            type: "ul",
            items: [
              "Ustaw godziny pracy: kanały messagingu w Zendesku mogą korzystać z harmonogramu godzin pracy i wyświetlać różne odpowiedzi w tych godzinach i poza nimi.",
              "Zamieniaj czaty w zgłoszenia: w przepisie Zendeska agent AI w godzinach pracy eskaluje rozmowę do konsultanta na żywo, a poza nimi zbiera dane klienta i eskaluje prośbę jako zgłoszenie e-mailowe do dalszej obsługi.",
              "Pozwól botowi odpowiadać na to, co potrafi: odpowiedzi z FAQ, sprawdzanie statusu zamówienia i linki do centrum pomocy działają o każdej porze.",
              "Powiedz, kiedy odpowiesz: podaj klientowi godziny pracy i miejsce, w którym otrzyma odpowiedź, np. e-mail.",
            ],
          },
        ],
      },
      {
        heading: "Podstawy dostępności widżetów czatu",
        blocks: [
          {
            type: "p",
            text: "Widżet czatu to interaktywna treść nałożona na Twoją stronę, więc musi spełniać te same wymagania dostępności co reszta strony. WCAG 2.2 to aktualna wersja W3C, a te kryteria sukcesu są szczególnie istotne dla czatu:",
          },
          {
            type: "table",
            caption: "Kryteria WCAG 2.2 do sprawdzenia w widżecie czatu",
            head: ["Kryterium", "Poziom", "Co oznacza dla widżetu czatu"],
            rows: [
              ["2.1.1 Klawiatura", "A", "Otwieranie widżetu, pisanie, wybieranie przycisków i zamykanie działają bez myszy"],
              ["2.4.7 Widoczny fokus", "AA", "Użytkownicy widzą, który przycisk lub pole ma fokus klawiatury"],
              ["2.4.11 Fokus niezasłonięty (minimum)", "AA", "Przycisk uruchamiający lub otwarty panel czatu nie zasłania całkowicie elementu strony, który ma fokus"],
              ["4.1.2 Nazwa, rola, wartość", "A", "Niestandardowe przyciski, menu i przycisk uruchamiający udostępniają swoje nazwy i stany technologiom wspomagającym"],
              ["4.1.3 Komunikaty o stanie", "AA", "Aktualizacje takie jak „Wiadomość wysłana” są ogłaszane bez przenoszenia fokusu"],
            ],
          },
          {
            type: "p",
            text: "W samej rozmowie technika W3C ARIA23 oznacza historię czatu atrybutem role=\"log\": nowe wiadomości są dodawane na końcu regionu, a czytniki ekranu ogłaszają je, gdy się pojawiają. W przypadku widżetu dostawcy przetestuj własną konfigurację za pomocą klawiatury i czytnika ekranu, ponieważ niestandardowe kolory i treści bota nadal mogą powodować problemy.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "TascaLab konfiguruje chatboty na stronę na bazie helpdesku, którego już używasz, np. Zendeska lub Freshdeska, albo łączy własnego bota z Jirą, Slackiem lub narzędziami wewnętrznymi przez API, webhooki oraz Make lub n8n. Starter Chat Bot (350–450 USD) obejmuje jeden lub dwa kanały z FAQ i podstawowym zbieraniem informacji; Standard Chat Bot (500–650 USD) obejmuje od trzech do pięciu kanałów z bardziej złożonymi rozmowami i płynniejszymi przekazaniami. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie. Zacznij od bezpłatnej 30-minutowej rozmowy audytowej.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy potrzebuję osobnego narzędzia do chatbota, jeśli mój helpdesk ma widżet?",
        a: "Niekoniecznie. Zendesk i Freshdesk pozwalają podłączyć bota lub agenta AI do swojego widżetu webowego. Osobne narzędzie ma sens, gdy potrzebujesz logiki lub integracji, których wbudowany bot nie oferuje.",
      },
      {
        q: "Co bot powinien zebrać przed przekazaniem rozmowy konsultantowi?",
        a: "To, o co Twoi konsultanci pytają najpierw: zwykle dane kontaktowe anonimowych odwiedzających, numer zamówienia lub konta, typ problemu i krótki opis. Zendesk i Freshdesk obsługują zbieranie danych przed przekazaniem.",
      },
      {
        q: "Co chatbot na stronie powinien robić poza godzinami pracy?",
        a: "Odpowiadać na to, na co potrafi, informować o godzinach pracy, a resztę zamieniać w zgłoszenie. Udokumentowany przepis Zendeska po godzinach pracy zbiera dane klienta i eskaluje prośbę jako zgłoszenie e-mailowe.",
      },
      {
        q: "Jaki standard dostępności dotyczy widżetu czatu?",
        a: "WCAG 2.2 to aktualna wersja W3C. Szczególnie istotne dla czatu są obsługa za pomocą klawiatury (2.1.1), widoczny fokus (2.4.7), nazwy i role elementów sterujących (4.1.2) oraz komunikaty o stanie (4.1.3).",
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
    slug: "automatyzacja-obslugi-klienta-sms",
    category: "channels",
    navLabel: "Automatyzacja obsługi przez SMS",
    primaryKeyword: "automatyzacja obsługi klienta SMS",
    title: "Automatyzacja obsługi klienta SMS: webhooki, 10DLC, STOP",
    description:
      "Jak działa automatyzacja obsługi klienta przez SMS: webhooki, A2P 10DLC i weryfikacja numerów toll-free, rezygnacje STOP, limity segmentów i zgłoszenia.",
    h1: "Automatyzacja obsługi klienta przez SMS: jak działa i co skonfigurować",
    intro:
      "Automatyzacja obsługi klienta przez SMS łączy firmowy numer telefonu z kodem, który czyta przychodzące SMS-y, odpowiada na proste pytania, a wszystko inne zamienia w zgłoszenia. U dostawcy takiego jak Twilio Programmable Messaging każdy przychodzący SMS trafia na Twój webhook, a Twój kod odpowiada przez API. W USA musisz też zarejestrować numer i respektować rezygnacje STOP, inaczej Twoje wiadomości zostaną zablokowane.",
    keyFacts: [
      "Twilio wysyła każdy przychodzący SMS na Twój webhook URL z polami takimi jak From, To, Body i MessageSid.",
      "Według Twilio operatorzy w USA traktują każdą wiadomość wysłaną z platformy takiej jak Twilio jako ruch typu application-to-person (A2P).",
      "Wiadomości z niezarejestrowanych amerykańskich numerów 10DLC są blokowane z błędem 30034, nawet gdy rejestracja jest w toku.",
      "Twilio domyślnie obsługuje STOP i inne standardowe słowa kluczowe rezygnacji na numerach typu long code.",
      "Jeden segment SMS w kodowaniu GSM-7 mieści 160 znaków; segment UCS-2, potrzebny do emoji, mieści 70.",
    ],
    sections: [
      {
        heading: "Jak działa automatyzacja obsługi klienta przez SMS",
        blocks: [
          {
            type: "p",
            text: "Otrzymujesz numer telefonu od dostawcy SMS, kierujesz jego webhook wiadomości przychodzących na swój kod i wysyłasz odpowiedzi przez API dostawcy. W Twilio Programmable Messaging każdy SMS wysłany na Twój numer staje się żądaniem HTTP na Twój webhook URL. Żądanie zawiera nadawcę w polu From, Twój numer w polu To, treść wiadomości w polu Body (do 1600 znaków) oraz 34-znakowy MessageSid, za pomocą którego możesz później pobrać wiadomość przez REST API.",
          },
          {
            type: "p",
            text: "Twój endpoint odpowiada w TwiML, formacie XML Twilio, który mówi Twilio, co zrobić dalej, np. wysłać odpowiedź. Jeśli Twój helpdesk odpowie później, a bot nie ma nic do powiedzenia, zwróć pusty element Response, aby Twilio przyjęło wiadomość bez odpowiadania.",
          },
          {
            type: "ol",
            items: [
              "Klient wysyła SMS na Twój numer obsługi klienta.",
              "Twilio przesyła wiadomość na Twój webhook.",
              "Bot od razu odpowiada na typowe pytanie lub prosi o szczegóły, np. numer zamówienia.",
              "Wszystko, czego bot nie rozwiąże, staje się zgłoszeniem w Twoim helpdesku, powiązanym z numerem telefonu klienta.",
              "Odpowiedzi konsultantów wracają do klienta jako SMS z tego samego numeru.",
            ],
          },
        ],
      },
      {
        heading: "Rejestracja w USA: A2P 10DLC i weryfikacja numerów toll-free",
        blocks: [
          {
            type: "p",
            text: "Dokumentacja Twilio podaje, że operatorzy w USA traktują każdą wiadomość wysłaną z platformy takiej jak Twilio jako application-to-person (A2P). Jeśli wysyłasz SMS lub MMS na numery w USA ze standardowego 10-cyfrowego numeru typu long code (10DLC), musisz zarejestrować się w A2P 10DLC. Rejestracja składa się z dwóch części: marki (brand), która mówi operatorom, kto wysyła wiadomości, oraz kampanii (campaign), która opisuje zastosowanie i sposób, w jaki ludzie wyrażają zgodę, rezygnują i uzyskują pomoc. Po zatwierdzeniu kampanii dodajesz swój numer do powiązanego z nią Messaging Service.",
          },
          {
            type: "p",
            text: "Rejestracja to nie opcjonalna formalność. Twilio blokuje wiadomości kierowane do USA z numerów 10DLC, które nie są powiązane z zatwierdzoną kampanią, w tym z numerów, których rejestracja jest jeszcze w toku, a stawki Twilio za wiadomości nadal obowiązują także dla zablokowanych wiadomości. Numery bezpłatne (toll-free) przechodzą osobny proces o nazwie Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Czego Twilio wymaga, zanim wyślesz SMS do klientów w USA",
            head: ["Typ nadawcy", "Wymaganie", "Co się dzieje bez tego"],
            rows: [
              ["Long code 10DLC", "Zatwierdzona marka i kampania A2P 10DLC, z numerem w Messaging Service kampanii", "Wiadomości są blokowane z błędem 30034"],
              ["10DLC, jednoosobowa działalność (sole proprietor)", "Ta sama rejestracja, ale kampania sole proprietor może mieć tylko jeden zarejestrowany numer 10DLC", "Dodatkowe numery w Messaging Service pozostają niezarejestrowane"],
              ["Numer toll-free", "Zatwierdzona Toll-Free Verification", "Wiadomości na numery komórkowe w USA i Kanadzie kończą się błędem 30032"],
            ],
          },
        ],
      },
      {
        heading: "Słowa kluczowe STOP, rezygnacje i zgoda",
        blocks: [
          {
            type: "p",
            text: "Na numerach typu long code Twilio obsługuje za Ciebie standardowe angielskie słowa kluczowe rezygnacji. Jego dokumentacja wymienia STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT i CANCEL, rozpoznawane bez względu na wielkość liter. Twilio wysyła standardowe potwierdzenie, a Twoje wiadomości przestają docierać na ten numer, dopóki klient nie wyśle START. Na numerach toll-free ponowną subskrypcję włączają tylko START i UNSTOP. Advanced Opt-Out, domyślnie wyłączone, pozwala dostosować słowa kluczowe i odpowiedzi w Messaging Service, choć zastrzeżonych słów kluczowych, takich jak START, nie można usunąć.",
          },
          {
            type: "p",
            text: "Upewnij się, że Twój bot nie wysyła już niczego do klienta, który zrezygnował. Dotyczą tego również przepisy w USA. Postanowienie FCC z 2024 roku (FCC 24-24) stanowi, że konsumenci mogą odwołać zgodę na robocalle i roboteksty w dowolny rozsądny sposób, że odpowiedź taka jak stop, quit, end, revoke, opt out, cancel czy unsubscribe jest uznawana za rozsądną oraz że odwołania muszą zostać uwzględnione w rozsądnym czasie, nie dłuższym niż dziesięć dni roboczych. W 2026 roku FCC przyjęła kolejne postanowienie (FCC 26-67), które pozwala nadawcom wskazać jedną zautomatyzowaną metodę odwołania zgody, np. odpowiedź SMS ze standardowymi słowami, takimi jak stop, quit czy unsubscribe, pod warunkiem że metoda jest jasno ujawniona, i zaprasza do zgłaszania uwag w sprawie skrócenia tego terminu. Sprawdź, która wersja przepisów obowiązuje w chwili uruchomienia.",
          },
          {
            type: "note",
            text: "To podsumowanie treści przepisów FCC, a nie porada prawna. Zanim zaczniesz wysyłać automatyczne SMS-y do klientów w USA, sprawdź aktualne przepisy z własnym doradcą prawnym.",
          },
        ],
      },
      {
        heading: "Długość wiadomości i segmenty",
        blocks: [
          {
            type: "p",
            text: "SMS-y są wysyłane w segmentach, a każdy segment jest płatny, więc długość odpowiedzi bota wpływa na koszty. Dokumentacja Twilio podaje te limity:",
          },
          {
            type: "table",
            caption: "Rozmiary segmentów SMS według dokumentacji Twilio",
            head: ["Kodowanie", "Pojedyncza wiadomość", "Na segment po podziale", "Kiedy jest używane"],
            rows: [
              ["GSM-7", "160 znaków", "153 znaki", "Tekst korzystający wyłącznie z zestawu znaków GSM-7"],
              ["UCS-2", "70 znaków", "67 znaków", "Każda wiadomość z co najmniej jednym znakiem spoza GSM-7, np. emoji"],
            ],
          },
          {
            type: "p",
            text: "Jeden znak spoza GSM-7 przełącza całą wiadomość na UCS-2, a nie tylko ten znak. Częstymi przyczynami są emoji, cudzysłowy typograficzne i długie myślniki, co ma znaczenie, gdy bot kopiuje odpowiedzi z artykułów centrum pomocy. Smart Encoding w Twilio może zastąpić niektóre z tych znaków odpowiednikami z GSM-7. Treść wiadomości wychodzącej może mieć do 1600 znaków, ale zwykle lepiej sprawdzają się krótkie odpowiedzi z linkiem do pełnego artykułu.",
          },
        ],
      },
      {
        heading: "Podłączenie SMS do helpdesku",
        blocks: [
          {
            type: "p",
            text: "Zendesk oferuje SMS jako Zendesk Text. SMS wysłany na Twój numer Text automatycznie tworzy zgłoszenie, a publiczne odpowiedzi w tym zgłoszeniu wracają do klienta jako SMS-y. Zendesk podaje też, że SMS-y do konsumentów w USA z niezarejestrowanych numerów będą blokowane, więc rejestracja A2P 10DLC obowiązuje także tam.",
          },
          {
            type: "p",
            text: "Jeśli Twój helpdesk nie ma kanału SMS lub potrzebujesz logiki, której wbudowany kanał nie oferuje, może się tym zająć niewielka usługa pośrednicząca. Odbiera webhook Twilio, uruchamia bota, tworzy lub aktualizuje zgłoszenia przez API helpdesku i wysyła odpowiedzi konsultantów z powrotem przez Twilio.",
          },
        ],
      },
      {
        heading: "Jak TascaLab może pomóc",
        blocks: [
          {
            type: "p",
            text: "Kanały botów w ofercie TascaLab to strona internetowa, telefon, WhatsApp, Telegram, Facebook Messenger i Instagram. SMS-a nie ma na tej liście, ale zakres prac dla innych kanałów z API można ustalić podczas bezpłatnej 30-minutowej rozmowy audytowej. TascaLab buduje rozwiązania na bazie narzędzi, których już używasz, takich jak Zendesk, Freshdesk, Jira i Slack, przez API, webhooki oraz Make lub n8n. Starter Chat Bot kosztuje 350–450 USD za jeden lub dwa kanały, a Standard Chat Bot 500–650 USD za trzy do pięciu. Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu i podstawową dokumentację, bez ukrytych opłat, a większość wdrożeń trwa 1–3 tygodnie.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy bot obsługi klienta przez SMS wymaga rejestracji A2P 10DLC?",
        a: "Tak, jeśli wysyłasz SMS lub MMS na numery w USA z 10-cyfrowego numeru typu long code przez platformę taką jak Twilio. Twilio blokuje wiadomości kierowane do USA z niezarejestrowanych numerów 10DLC z błędem 30034, także w czasie, gdy rejestracja jest w toku.",
      },
      {
        q: "Co się dzieje, gdy klient wyśle STOP?",
        a: "Na numerach typu long code Twilio domyślnie obsługuje STOP i inne standardowe słowa kluczowe rezygnacji. Wysyła potwierdzenie, a Twoje wiadomości przestają docierać na ten numer, dopóki klient nie wyśle START.",
      },
      {
        q: "Dlaczego krótka wiadomość liczyła się jako dwa segmenty?",
        a: "Prawdopodobnie zawierała znak spoza GSM-7, np. emoji lub cudzysłów typograficzny. To przełącza całą wiadomość na UCS-2, a wtedy w jednym segmencie mieści się tylko 70 znaków.",
      },
      {
        q: "Czy mogę używać numeru toll-free zamiast numeru 10DLC?",
        a: "Tak, ale wymaga on Toll-Free Verification. Do czasu jej zatwierdzenia wiadomości na numery komórkowe w USA i Kanadzie kończą się błędem 30032.",
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
