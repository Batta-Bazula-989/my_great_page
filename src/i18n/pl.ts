import type { Dictionary } from "./en";
import tools from "./tools/pl";

const pl: Dictionary = {
  meta: {
    homeTitle: "Obsługa klienta z AI: chatboty, voiceboty, routing zgłoszeń | TascaLab",
    homeDescription:
      "Automatyzacja obsługi klienta: chatboty AI, voiceboty, routing zgłoszeń i automatyczne raporty w Zendesk, Freshdesk i Jira. Stałe ceny, bezpłatny Health Check.",
    noscriptHeading: "Automatyzacja obsługi klienta z AI – chatboty, voiceboty i routing zgłoszeń",
    noscriptText:
      "TascaLab tworzy chatboty AI, voiceboty, routing zgłoszeń i automatyczne raporty w oparciu o Zendesk, Freshdesk, Jira i Slack. Napisz na romanzakharenko.r@gmail.com, aby umówić bezpłatny Health Check.",
  },
  nav: {
    services: "Co robię",
    whyMe: "Dlaczego ja?",
    pricing: "Ceny",
    reviews: "Opinie",
    faq: "FAQ",
    resources: "Materiały",
    cta: "Bezpłatny Health Check",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    language: "Język",
    logoAlt: "Logo TascaLab",
  },
  hero: {
    eyebrow: "Automatyzacja obsługi klienta, która sprawdza się w praktyce",
    titleBefore: "Chatboty AI, voiceboty i ",
    titleHighlight: "automatyzacja zgłoszeń",
    titleAfter: " dla zespołów obsługi klienta",
    intro: "Działa w helpdesku, którego już używasz. Stałe ceny, bez zmiany platformy.",
    ctaBook: "Umów bezpłatny Health Check",
    ctaUpwork: "Opinie na Upwork",
    highlights: ["Działa z Twoim obecnym helpdeskiem", "Wdrożenie w 1–3 tygodnie", "30 dni wsparcia w cenie"],
    integratesWith: "Integruje się z",
  },
  services: {
    eyebrow: "Co robię",
    title: "Usługi automatyzacji obsługi klienta",
    items: [
      {
        title: "Chatboty i voiceboty dla obsługi klienta",
        description: "Odpowiada na typowe wiadomości i połączenia, a resztę przekazuje Twojemu zespołowi.",
      },
      {
        title: "Routing i kategoryzacja zgłoszeń",
        description: "Każde nowe zgłoszenie automatycznie tagowane, priorytetyzowane i przypisywane.",
      },
      {
        title: "Raportowanie",
        description: "Raporty, które Twój zespół przygotowuje ręcznie, wysyłane automatycznie.",
      },
      {
        title: "Rozwiązanie na miarę",
        description: "Coś konkretnego? Określę zakres i to zbuduję.",
      },
    ],
  },
  fit: {
    eyebrow: "Czy to dla Ciebie?",
    title: "Dla kogo jest ta automatyzacja obsługi klienta",
    goodTitle: "To dla Ciebie",
    notTitle: "To nie dla Ciebie",
    good: [
      "Codzienna, powtarzalna praca w obsłudze klienta",
      "Korzystasz z Zendesk, Freshdesk, Jira lub podobnego narzędzia",
      "Raporty wciąż zbierane ręcznie",
      "Narzędzia, które ze sobą nie współpracują",
    ],
    not: [
      "Potrzebujesz pełnoetatowego kierownika obsługi klienta",
      "Chcesz wymienić cały zestaw narzędzi do obsługi klienta",
      "Oczekujesz, że AI zastąpi Twój zespół",
    ],
  },
  whyMe: {
    eyebrow: "Dlaczego warto ze mną współpracować",
    title: "Zbudowane przez kogoś, kto sam pracował w obsłudze klienta",
    items: [
      {
        title: "Pracowałem w obsłudze klienta",
        description: "Obsługiwałem zgłoszenia i ręcznie przygotowywałem raporty, więc wiem, co spowalnia zespoły.",
      },
      {
        title: "Zbudowane, by działać",
        description: "Obsługa błędów, testy przypadków brzegowych i monitoring w każdym wdrożeniu.",
      },
      {
        title: "Wszystko należy do Ciebie",
        description: "Pełna dokumentacja i przekazanie. Nic Cię ze mną nie wiąże.",
      },
      {
        title: "Mówię wprost",
        description: "Jeśli czegoś nie warto automatyzować, powiem Ci o tym.",
      },
    ],
  },
  pricing: {
    eyebrow: "Cennik",
    title: "Pakiety automatyzacji obsługi klienta w stałej cenie",
    intro: "Jedna cena, płatna jednorazowo. Bez abonamentu.",
    oneTimeFee: "jednorazowo",
    cta: "Rozpocznij",
    from: "od {price}",
    delivery: "Czas realizacji",
    deliveryTime: "1–3 tygodnie",
    included: "Co obejmuje pakiet",
    running: "Miesięczne koszty bieżące",
    runningNote: "Naliczane przez dostawców narzędzi. Nie są wliczone w cenę pakietu.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Odpowiada na częste pytania w 1–2 kanałach, a resztę przekazuje Twojemu zespołowi.",
        included: [
          "1–2 kanały: strona internetowa, WhatsApp, Telegram, Messenger lub Instagram",
          "Odpowiada na FAQ i zbiera dane klienta",
          "Resztę przekazuje Twojemu zespołowi",
        ],
        running: [
          "Korzystanie z AI, rozliczane za tokeny przez Twojego dostawcę AI, np. Claude Haiku 5.5 od 0,10 / 0,50 USD za milion tokenów wejściowych / wyjściowych*",
          "Platforma automatyzacji: n8n na własnym serwerze (oprogramowanie bezpłatne; płacisz za serwer), n8n Cloud od 20 EUR miesięcznie lub Make od 9 USD miesięcznie (w obu przypadkach przy rozliczeniu rocznym)",
          "Tylko WhatsApp: od 1 października 2026 r. 1000 bezpłatnych wiadomości serwisowych miesięcznie dla każdego numeru firmowego, potem stawka Meta za wiadomość",
        ],
      },
      {
        name: "Voice Bot",
        description: "Odbiera połączenia przychodzące, wstępnie je kwalifikuje i przekazuje Twojemu zespołowi.",
        included: [
          "Odbiera połączenia przychodzące",
          "Wstępna kwalifikacja i sprawne przekazanie Twojemu zespołowi",
          "Połączenie z Twoim helpdeskiem",
        ],
        running: [
          "Opłaty minutowe platformy głosowej, np. Retell AI od 0,07 USD za minutę, plus model AI i linia telefoniczna",
          "Numer telefonu od Twojego operatora telefonii",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Prowadzi bardziej złożone rozmowy w 3–5 kanałach.",
        included: [
          "3–5 kanałów",
          "Wieloetapowe rozmowy",
          "Przekazanie Twojemu zespołowi, połączenie z Twoim helpdeskiem",
        ],
        running: [
          "Korzystanie z AI, rozliczane za tokeny przez Twojego dostawcę AI, np. Claude Haiku 5.5 od 0,10 / 0,50 USD za milion tokenów wejściowych / wyjściowych*",
          "Platforma automatyzacji: n8n na własnym serwerze (oprogramowanie bezpłatne; płacisz za serwer), n8n Cloud od 20 EUR miesięcznie lub Make od 9 USD miesięcznie (w obu przypadkach przy rozliczeniu rocznym)",
          "Tylko WhatsApp: od 1 października 2026 r. 1000 bezpłatnych wiadomości serwisowych miesięcznie dla każdego numeru firmowego, potem stawka Meta za wiadomość",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Każde zgłoszenie tagowane, priorytetyzowane i przypisywane w chwili, gdy wpływa.",
        included: [
          "AI klasyfikuje każde nowe zgłoszenie według tematu i pilności",
          "Nadaje tagi i priorytet, przypisuje do właściwej grupy",
          "Zendesk, Freshdesk lub Jira Service Management",
        ],
        running: [
          "Klasyfikacja AI, rozliczana za tokeny przez Twojego dostawcę AI, np. Claude Haiku 5.5 od 0,10 / 0,50 USD za milion tokenów wejściowych / wyjściowych*",
          "Platforma automatyzacji: n8n na własnym serwerze (oprogramowanie bezpłatne; płacisz za serwer), n8n Cloud od 20 EUR miesięcznie lub Make od 9 USD miesięcznie (w obu przypadkach przy rozliczeniu rocznym)",
        ],
      },
      {
        name: "Automated Reports",
        description: "Raporty, które Twój zespół przygotowuje ręcznie, wysyłane automatycznie.",
        included: [
          "Kluczowe wskaźniki obsługi klienta z Twojego helpdesku",
          "Wysyłane według harmonogramu e-mailem lub na Slacka",
        ],
        running: [
          "Platforma automatyzacji: n8n na własnym serwerze (oprogramowanie bezpłatne; płacisz za serwer), n8n Cloud od 20 EUR miesięcznie lub Make od 9 USD miesięcznie (w obu przypadkach przy rozliczeniu rocznym)",
          "Bez opłat za AI, chyba że chcesz podsumowań pisanych przez AI",
        ],
      },
      {
        name: "Custom Automation",
        description: "Zbudowana wokół Twoich procesów, narzędzi i wymagań.",
        included: [
          "Zakres ustalamy podczas bezpłatnego Health Check",
          "Stała cena uzgodniona przed rozpoczęciem prac",
          "Dowolne narzędzie z API lub webhookami",
        ],
        running: ["Zależą od użytych narzędzi; szacunek znajdziesz w raporcie Health Check"],
      },
    ],
    footnote:
      "* Ceny katalogowe Anthropic (październik 2026) dla promptów do 100 000 tokenów; dłuższe prompty kosztują 0,50 / 2,50 USD. Inni dostawcy i modele mają inne ceny, a dostawcy mogą zmieniać swoje cenniki.",
    allPackages: "W każdym pakiecie: 30 dni wsparcia po wdrożeniu i podstawowa dokumentacja.",
    healthCheck: {
      title: "Bezpłatny Health Check",
      text: "30-minutowa rozmowa, a potem pisemny raport: co zautomatyzować najpierw, który pakiet pasuje i ile kosztuje.",
      cta: "Umów swój Health Check",
      price: "Bezpłatnie",
    },
  },
  data: {
    eyebrow: "Twoje dane",
    title: "Twoje dane i RODO",
    intro: "Ty decydujesz, gdzie działa Twoja automatyzacja.",
    options: [
      {
        title: "Na Twoich własnych kontach (domyślnie)",
        points: [
          "Działa na Twoich własnych kontach helpdesku, automatyzacji i AI",
          "Dane klientów zostają w systemach, które kontrolujesz",
          "Wszystko należy do Ciebie, a Ty kontrolujesz mój dostęp",
        ],
      },
      {
        title: "Hostowane przeze mnie, na podstawie umowy powierzenia (DPA)",
        points: [
          "Umowa powierzenia przetwarzania danych (art. 28 RODO) podpisana przed przetworzeniem jakichkolwiek danych osobowych",
          "Podmioty podprzetwarzające tylko za Twoją pisemną zgodą",
          "Po zakończeniu umowy dane są usuwane lub zwracane – Ty wybierasz",
        ],
      },
    ],
    note: "To opis tego, jak organizowane są projekty. Nie stanowi porady prawnej.",
  },
  reviews: {
    eyebrow: "Opinie klientów",
    title: "Zweryfikowane opinie na Upwork",
    intro: "Z opłaconych zleceń na Upwork.",
    leaveCta: "Współpracowaliśmy? Zostaw opinię",
    quoted: "Opinie cytowane dosłownie z mojego profilu na Upwork.",
    verify: "Sprawdź na Upwork",
    stars: "{rating} na 5 gwiazdek",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Najczęściej zadawane pytania",
    items: [
      {
        q: "Czy muszę zmieniać narzędzia do obsługi klienta?",
        a: "Nie. Pracuję z tym, czego już używasz – Zendesk, Freshdesk, Jira, Slack, narzędzia wewnętrzne. Celem jest połączenie i usprawnienie tego, co masz, a nie zastąpienie tego.",
      },
      {
        q: "Co, jeśli po uruchomieniu coś przestanie działać?",
        a: "Każdy projekt obejmuje 30 dni wsparcia po uruchomieniu. Jeśli w tym czasie coś się zepsuje, naprawiam to. Buduję na standardowych integracjach – API, webhookach, Make/n8n – a nie na kruchych, doraźnych obejściach, które działają tylko w jednym środowisku.",
      },
      {
        q: "Czy mój zespół będzie mógł to utrzymywać, gdy skończysz?",
        a: "Tak. Wszystko jasno dokumentuję – logikę, przepływ, przypadki brzegowe. Nic Cię ze mną nie wiąże. Dalsze wsparcie jest dostępne, ale opcjonalne.",
      },
      {
        q: "Czy możesz zintegrować konkretne narzędzie?",
        a: "Jeśli ma API lub obsługuje webhooki – niemal na pewno. Wspomnij o nim podczas rozmowy Health Check, a potwierdzę.",
      },
      {
        q: "Jak właściwie wygląda bezpłatny Health Check?",
        a: "To 30-minutowa rozmowa o Twojej obecnej konfiguracji, o tym, gdzie coś zgrzyta, i o tym, gdzie automatyzacja naprawdę coś zmieni. Potem dostajesz pisemny raport z 2–3 konkretnymi rekomendacjami, dopasowanym pakietem i stałą ceną oraz szacowanymi miesięcznymi kosztami bieżącymi. Bez prezentacji sprzedażowej. Bez presji.",
      },
      {
        q: "Ile trwa typowy projekt?",
        a: "Większość wdrożeń trwa 1–3 tygodnie, zależnie od złożoności i tego, jak szybko uzgodnimy wymagania. Na starcie podam Ci realistyczny harmonogram – a nie optymistyczny.",
      },
    ],
  },
  contact: {
    eyebrow: "Porozmawiajmy",
    title: "Zamów bezpłatny Health Check obsługi klienta",
    intro: "30-minutowa rozmowa, a potem pisemny raport.",
    cta: "Umów bezpłatny Health Check",
    linkedin: "Nawiąż kontakt na LinkedIn",
    email: "E-mail",
    upwork: "Opinie na Upwork",
  },
  footer: {
    resourcesNav: "Materiały",
    allResources: "Wszystkie materiały",
    upworkReviews: "Opinie na Upwork",
    privacy: "Polityka prywatności",
    terms: "Regulamin",
  },
  categories: {
    services: { label: "Usługi", blurb: "Co powstaje: boty, routing i raportowanie." },
    helpdesks: { label: "Według helpdesku", blurb: "Automatyzacja w narzędziach, których Twój zespół już używa." },
    channels: { label: "Według kanału", blurb: "Boty obsługi klienta tam, skąd piszą Twoi klienci." },
    basics: { label: "Podstawy", blurb: "Definicje, wskaźniki i zasady przekazywania rozmów." },
    guides: { label: "Poradniki i zgodność", blurb: "Porównania narzędzi i przepisy UE dotyczące botów obsługi klienta." },
  },
  cookie: {
    text: "Używamy plików cookie do analityki i pomiaru reklam, aby zrozumieć, jak odwiedzający znajdują tę stronę i z niej korzystają.",
    privacy: "Polityka prywatności",
    decline: "Odrzuć",
    accept: "Akceptuj",
  },
  booking: {
    title: "Umów bezpłatny Health Check",
    description:
      "Zostaw swoje dane, a odezwę się, aby umówić 30-minutową rozmowę. Po niej otrzymasz pisemny raport. Bez zobowiązań, bez nachalnej sprzedaży.",
    fullName: "Imię i nazwisko",
    fullNamePlaceholder: "Anna Kowalska",
    email: "Służbowy e-mail",
    emailPlaceholder: "anna@firma.pl",
    company: "Nazwa firmy",
    companyPlaceholder: "Przykład sp. z o.o.",
    meetingMethod: "Preferowana forma spotkania",
    methodPhone: "Telefon",
    phone: "Numer telefonu",
    phonePlaceholder: "512 345 678",
    searchCountry: "Szukaj kraju lub kodu...",
    noCountry: "Nie znaleziono kraju.",
    telegram: "Link lub nazwa użytkownika (Telegram)",
    telegramPlaceholder: "https://t.me/uzytkownik lub @uzytkownik",
    submitCalendar: "Przejdź do kalendarza",
    submitting: "Wysyłanie...",
    submit: "Umów bezpłatny Health Check",
    sendFailed: "Nie udało się wysłać formularza",
    networkError: "Błąd sieci lub serwer jest niedostępny.",
    sent: "Formularz wysłany! Odezwę się w ciągu 24 godzin.",
    errors: {
      nameRequired: "Imię i nazwisko są wymagane",
      nameShort: "Imię i nazwisko muszą mieć co najmniej 2 znaki",
      nameLong: "Imię i nazwisko muszą mieć mniej niż 50 znaków",
      nameChars: "Imię i nazwisko mogą zawierać tylko litery, spacje, łączniki i apostrofy",
      emailRequired: "Służbowy e-mail jest wymagany",
      emailInvalid: "Podaj prawidłowy adres e-mail",
      companyLength: "Nazwa firmy musi mieć od 2 do 50 znaków",
      phoneRequired: "Numer telefonu jest wymagany",
      phoneChars: "Używaj tylko cyfr, spacji, kropek, myślników i nawiasów",
      phoneDigits: "Numer telefonu musi mieć 6–15 cyfr",
      telegramRequired: "Podaj link lub nazwę użytkownika (Telegram)",
      telegramInvalid:
        "Podaj prawidłowy link (np. https://t.me/uzytkownik) lub nazwę użytkownika Telegram (np. @uzytkownik)",
    },
  },
  seo: {
    home: "Strona główna",
    byline: "Autor: Roman Zakharenko",
    factsChecked: "Fakty sprawdzone",
    atAGlance: "W skrócie",
    faqTitle: "Najczęściej zadawane pytania",
    faqShort: "FAQ",
    ctaTitle: "Chcesz takie rozwiązanie dla swojego zespołu?",
    ctaText:
      "Umów bezpłatny Health Check: 30-minutowa rozmowa i pisemny raport z 2–3 konkretnymi rekomendacjami, stałą ceną i szacowanymi kosztami bieżącymi. Bez nachalnej sprzedaży.",
    ctaBook: "Umów bezpłatny Health Check",
    ctaUpwork: "Opinie na Upwork",
    sources: "Źródła",
    onThisPage: "Na tej stronie",
    related: "Powiązane",
  },
  resources: {
    metaTitle: "Materiały o automatyzacji obsługi klienta | TascaLab",
    metaDescription:
      "Poradniki: chatboty AI w obsłudze klienta, routing zgłoszeń, automatyzacja Zendesk, Freshdesk i Jira, boty WhatsApp i Telegram, wskaźniki, SLA i przepisy UE.",
    eyebrow: "Materiały",
    title: "Materiały o automatyzacji obsługi klienta",
    intro:
      "Sprawdzone pod kątem faktów poradniki o botach obsługi klienta, routingu zgłoszeń, automatyzacji helpdesku, wskaźnikach obsługi klienta i przepisach UE, które ich dotyczą. Każda strona podaje oficjalne źródła, na których się opiera.",
    readGuide: "Przeczytaj poradnik",
  },
  notFound: {
    title: "Nie znaleziono strony",
    text: "Ta strona nie istnieje lub została przeniesiona.",
    back: "Wróć na stronę główną",
  },
  tools,
};

export default pl;
