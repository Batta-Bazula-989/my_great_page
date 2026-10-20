
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Narzędzia",
  allTools: "Wszystkie narzędzia",
  hub: {
    slug: "tools",
    metaTitle: "Bezpłatne narzędzia i kalkulatory obsługi klienta | TascaLab",
    metaDescription:
      "Bezpłatne kalkulatory dla zespołów obsługi klienta: porównaj koszt agentów AI, oszacuj rachunek za WhatsApp Business API i wylicz terminy SLA w godzinach pracy.",
    eyebrow: "Bezpłatne narzędzia",
    title: "Bezpłatne narzędzia dla zespołów obsługi klienta",
    intro: "Szybkie kalkulatory oparte na opublikowanych cenach i prostej matematyce. Bezpłatnie, bez rejestracji.",
    open: "Otwórz narzędzie",
  },
  common: {
    freeTool: "Bezpłatne narzędzie · bez rejestracji",
    howItWorks: "Jak to działa",
    faqTitle: "Najczęściej zadawane pytania",
    sources: "Źródła",
    estimate: "Tylko szacunki, nie oferta cenowa.",
    perMonth: "/mies.",
    ctaTitle: "Chcesz dokładnych wyliczeń dla swojego zespołu?",
    ctaText: "Umów bezpłatny Health Check: 30-minutowa rozmowa, a potem pisemny raport z dopasowanym pakietem i stałą ceną.",
    ctaBook: "Umów bezpłatny Health Check",
    otherTools: "Inne bezpłatne narzędzia",
  },
  aiAgent: {
    slug: "kalkulator-kosztow-agenta-ai",
    navLabel: "Koszt agenta AI obsługi klienta",
    short: "Porównaj agentów AI rozliczanych za rozwiązanie z jednorazowym wdrożeniem przy Twoim wolumenie.",
    metaTitle: "Kalkulator kosztów agenta AI obsługi klienta 2026 | TascaLab",
    metaDescription:
      "Porównaj miesięczny koszt Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro i Agentforce przy Twoim wolumenie z jednorazowo zbudowanym własnym agentem AI.",
    h1: "Kalkulator kosztów agenta AI obsługi klienta",
    intro:
      "Większość agentów AI do obsługi klienta nalicza opłaty za rozwiązanie, rozmowę lub akcję, więc rachunek rośnie razem z Twoim wolumenem. Wpisz swoje dane, aby porównać ceny katalogowe sześciu dostawców z jednorazowym wdrożeniem.",
    inputs: {
      title: "Twój wolumen",
      conversations: "Rozmowy z AI miesięcznie",
      resolutionRate: "Rozwiązane bez udziału człowieka",
      actions: "Akcje Agentforce na rozmowę",
      buildTitle: "Jednorazowe wdrożenie",
      package: "Pakiet",
      platform: "Platforma automatyzacji",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 EUR miesięcznie przy rozliczeniu rocznym)",
        make: "Make Core (9 USD miesięcznie przy rozliczeniu rocznym)",
        selfHosted: "n8n na własnym serwerze (bez kosztu serwera)",
      },
      tokens: "Tokeny AI na rozmowę",
      inputTokens: "Wejściowe",
      outputTokens: "Wyjściowe",
      tokensHint:
        "Przykładowe wartości z opublikowanej rozmowy z obsługą klienta liczącej 5 wiadomości. Zmień je, aby pasowały do Twojego bota.",
    },
    results: {
      title: "Szacowany koszt miesięczny",
      vendor: "Dostawca",
      monthly: "Miesięcznie",
      year: "12 miesięcy",
      yourBuild: "Jednorazowe wdrożenie",
      buildLine: "{price} jednorazowo + koszty bieżące {monthly} miesięcznie",
      payback: "Taniej niż {vendor} od {months}. miesiąca",
      neverCheaper: "Przy tym wolumenie wdrożenie nie jest tańsze od żadnego dostawcy w ciągu 12 miesięcy.",
      cheapest: "Najtańszy",
      currencyNote: "Ceny dostawców to ceny katalogowe w USD, przeliczone po kursie EBC z 16 października 2026 r.",
    },
    units: {
      fin: "0,99 USD za wynik (outcome); co najmniej 50 miesięcznie przy innym helpdesku",
      zendesk: "2,00 USD za automatyczne rozwiązanie, w modelu pay-as-you-go",
      freddy: "49 USD za 100 sesji",
      hubspot: "0,50 USD za rozwiązaną rozmowę; wymaga planu Professional lub Enterprise",
      tidio: "0,50 USD za rozmowę, w której odpowiada Lyro",
      agentforce: "0,10 USD za akcję (20 Flex Credits)",
    },
    notIncluded:
      "Nie uwzględniono: abonamentu helpdesku, limitów zawartych w planach, rabatów za wolumen ani podatków. Fin rozlicza też niektóre przekazania i przekierowania jako wyniki, więc jego rzeczywisty koszt może być wyższy.",
    sections: [
      {
        heading: "Jak działa wyliczenie",
        text: "Liczba rozwiązanych rozmów to Twoje miesięczne rozmowy pomnożone przez odsetek rozwiązanych bez udziału człowieka. Fin, Zendesk i HubSpot naliczają opłaty za rozwiązanie lub wynik, Freddy za pakiet 100 sesji, Tidio Lyro za rozmowę, w której odpowiada, a Agentforce za akcję. Cena katalogowa każdego dostawcy prowadzi poniżej do jego strony z cennikiem.",
      },
      {
        heading: "Dlaczego rachunki naliczane za rozwiązanie rosną",
        text: "Gdy dostawca nalicza opłatę za rozwiązanie, każda dodatkowa rozmowa rozwiązana przez agenta zwiększa rachunek. Jednorazowe wdrożenie nie ma opłaty za rozwiązanie: płacisz bezpośrednio dostawcy AI za tokeny i platformie automatyzacji za jej plan.",
      },
      {
        heading: "Ile kosztuje utrzymanie jednorazowego wdrożenia",
        text: "Korzystanie z AI jest rozliczane za tokeny przez Twojego dostawcę AI. Ten kalkulator używa cen katalogowych Claude Haiku 5.5 dla promptów do 100 000 tokenów: 0,10 USD za milion tokenów wejściowych i 0,50 USD za milion tokenów wyjściowych. Do tego dochodzi platforma automatyzacji: n8n na własnym serwerze (oprogramowanie bezpłatne, płacisz za serwer), n8n Cloud od 20 EUR miesięcznie lub Make od 9 USD miesięcznie, w obu przypadkach przy rozliczeniu rocznym.",
      },
    ],
    faqs: [
      {
        q: "Czy te ceny są aktualne?",
        a: "To ceny katalogowe opublikowane na stronach z cennikami poszczególnych dostawców w październiku 2026 r. Dostawcy często zmieniają ceny, więc przed zakupem sprawdź podlinkowane strony.",
      },
      {
        q: "Co liczy się jako rozwiązanie?",
        a: "Każdy dostawca definiuje to inaczej. Fin nalicza opłaty za wynik (outcome), Zendesk za automatyczne rozwiązanie, HubSpot za rozwiązaną rozmowę, a Freddy za sesję. Przed porównaniem przeczytaj definicję każdego dostawcy.",
      },
      {
        q: "Dlaczego ceny są pokazane w mojej walucie?",
        a: "Dostawcy publikują te ceny w dolarach amerykańskich. Poza amerykańską wersją tej strony są one przeliczane po kursie referencyjnym Europejskiego Banku Centralnego z 16 października 2026 r.",
      },
      {
        q: "Czy jednorazowe wdrożenie zawsze wychodzi taniej?",
        a: "Nie. Przy małych wolumenach agent rozliczany za rozwiązanie może kosztować mniej. Kalkulator pokazuje, czy i od kiedy jednorazowe wdrożenie staje się tańsze przy Twoim wolumenie.",
      },
    ],
  },
  whatsapp: {
    slug: "kalkulator-kosztow-whatsapp-business",
    navLabel: "Koszt WhatsApp Business",
    short: "Oszacuj miesięczny rachunek za WhatsApp API, z uwzględnieniem nowej bezpłatnej puli wiadomości serwisowych.",
    metaTitle: "Kalkulator kosztów WhatsApp Business API 2026 | TascaLab",
    metaDescription:
      "Oszacuj miesięczny koszt WhatsApp Business Platform przy cenach Meta za wiadomość, z 1000 bezpłatnych wiadomości serwisowych na numer od 1 października 2026 r.",
    h1: "Kalkulator kosztów WhatsApp Business API",
    intro:
      "Od 1 października 2026 r. Meta pobiera opłaty za wiadomości serwisowe WhatsApp powyżej 1000 bezpłatnych na numer firmowy miesięcznie, według stawki utility obowiązującej na danym rynku. Wpisz swoje wolumeny i stawki z tabeli stawek Meta dla kraju Twoich klientów.",
    inputs: {
      volumeTitle: "Wiadomości miesięcznie",
      numbers: "Firmowe numery telefonu",
      service: "Wiadomości serwisowe (odpowiedzi w dowolnej formie)",
      utility: "Szablony utility",
      marketing: "Szablony marketingowe",
      authentication: "Szablony uwierzytelniające",
      ratesTitle: "Stawki za wiadomość",
      ratesHint: "Skopiuj stawki dla kraju Twoich klientów z tabeli stawek Meta w Twojej walucie rozliczeniowej.",
      rateCard: "Otwórz tabele stawek Meta",
      utilityRate: "Stawka utility (stosowana też do wiadomości serwisowych)",
      marketingRate: "Stawka marketingowa",
      authenticationRate: "Stawka za uwierzytelnianie",
    },
    results: {
      title: "Szacowany koszt miesięczny",
      freeService: "Wykorzystane bezpłatne wiadomości serwisowe",
      billableService: "Płatne wiadomości serwisowe",
      service: "Wiadomości serwisowe",
      utility: "Szablony utility",
      marketing: "Szablony marketingowe",
      authentication: "Szablony uwierzytelniające",
      total: "Łącznie miesięcznie",
      enterRates: "Wpisz swoje stawki, aby zobaczyć koszt.",
    },
    notIncluded:
      "Nie uwzględniono: rabatów progowych za wolumen dla wiadomości utility i uwierzytelniających, opłat Twojego dostawcy WhatsApp ani podatków. Wiadomości w bezpłatnym oknie punktu wejścia nie są płatne.",
    sections: [
      {
        heading: "Co zmieniło się 1 października 2026 r.",
        text: "Wiadomości serwisowe w dowolnej formie, czyli odpowiedzi wysyłane w 24-godzinnym oknie obsługi klienta, nie są już bez limitu i bezpłatne. Każdy firmowy numer telefonu dostaje 1000 bezpłatnych wiadomości serwisowych miesięcznie; potem Meta pobiera za nie opłatę według stawki utility obowiązującej na danym rynku. Szablony utility wysyłane w tym oknie są teraz również płatne.",
      },
      {
        heading: "Jak Meta nalicza opłaty za wiadomości",
        text: "Meta pobiera opłatę za każdą dostarczoną wiadomość. Stawka zależy od kategorii wiadomości (marketingowa, utility, uwierzytelniająca lub serwisowa) i kraju odbiorcy. Meta publikuje tabele stawek w kilku walutach i może zmieniać ceny tylko pierwszego dnia kwartału.",
      },
      {
        heading: "Czego ten kalkulator nie uwzględnia",
        text: "Wiadomości utility i uwierzytelniające mają progi wolumenowe, które obniżają stawkę przy dużych wolumenach; nie są one tu uwzględnione. Wiadomości wysłane w 72-godzinnym bezpłatnym oknie punktu wejścia po kliknięciu reklamy Click to WhatsApp lub przycisku na stronie na Facebooku są bezpłatne. Twój dostawca WhatsApp może doliczać własne opłaty.",
      },
    ],
    faqs: [
      {
        q: "Czy wiadomości serwisowe WhatsApp są nadal bezpłatne?",
        a: "Od 1 października 2026 r. każdy firmowy numer telefonu dostaje 1000 bezpłatnych wiadomości serwisowych miesięcznie. Od 1001. wiadomości Meta pobiera opłatę według stawki utility obowiązującej na danym rynku.",
      },
      {
        q: "Dlaczego muszę wpisać stawki?",
        a: "Stawki zależą od kraju Twoich klientów i Twojej waluty rozliczeniowej. Meta publikuje je w swoich tabelach stawek; skopiuj te, które dotyczą Ciebie, aby uzyskać dokładne oszacowanie.",
      },
      {
        q: "Jak często Meta zmienia ceny WhatsAppa?",
        a: "Meta podaje, że może aktualizować ceny tylko pierwszego dnia każdego kwartału, czyli maksymalnie cztery razy w roku.",
      },
      {
        q: "Czy wynik obejmuje opłaty mojego dostawcy?",
        a: "Nie. Obejmuje tylko opłaty Meta za wiadomości. Twój dostawca rozwiązań WhatsApp Business (WhatsApp Business Solution Provider) może pobierać własne opłaty.",
      },
    ],
  },
  sla: {
    slug: "kalkulator-sla",
    navLabel: "Kalkulator SLA",
    short: "Wylicz terminy SLA i czas pierwszej odpowiedzi w godzinach pracy.",
    metaTitle: "Kalkulator SLA z godzinami pracy i świętami | TascaLab",
    metaDescription:
      "Sprawdź, kiedy mija termin SLA w obsłudze klienta lub ile czasu pracy zajęła pierwsza odpowiedź, licząc tylko Twoje godziny pracy, dni robocze i święta.",
    h1: "Kalkulator SLA z godzinami pracy",
    intro:
      "Cele SLA zwykle liczy się w godzinach pracy, więc termin 4-godzinnego celu ustawionego w piątek po południu może przypaść dopiero w poniedziałek. Wpisz czas rozpoczęcia i swój harmonogram, aby zobaczyć termin, albo zmierz czas w godzinach pracy między dwoma momentami.",
    modes: { due: "Kiedy mija termin?", elapsed: "Ile to trwało?" },
    inputs: {
      received: "Zgłoszenie otrzymane",
      target: "Cel SLA",
      hours: "godz.",
      minutes: "min",
      replied: "Wysłano pierwszą odpowiedź",
      scheduleTitle: "Godziny pracy",
      opens: "Otwarcie",
      closes: "Zamknięcie",
      days: "Dni robocze",
      dayNames: ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"],
      holidays: "Święta",
      addHoliday: "Dodaj",
      removeHoliday: "Usuń {date}",
      noHolidays: "Nie dodano świąt.",
    },
    results: {
      dueAt: "Termin",
      calendarTime: "Czas kalendarzowy do terminu",
      businessTime: "Czas w godzinach pracy",
      elapsedCalendar: "Czas kalendarzowy",
      withinTarget: "Mieści się w celu {target}",
      overTarget: "Przekroczono cel {target}",
      invalid: "Sprawdź wpisane czasy i godziny pracy.",
      duration: "{h} godz. {m} min",
      days: "{d} d {h} godz. {m} min",
    },
    sections: [
      {
        heading: "Jak liczy się SLA w godzinach pracy",
        text: "Zegar SLA biegnie tylko w godzinach pracy w dni robocze. Gdy zgłoszenie wpłynie poza tymi godzinami, zegar startuje w chwili otwarcia w następnym dniu roboczym. Dodane przez Ciebie święta liczą się jako dni wolne od pracy.",
      },
      {
        heading: "Strefy czasowe",
        text: "Wszystkie czasy są traktowane jako jedna strefa czasowa: ta, w której obowiązują Twoje godziny pracy. Wpisuj czasy zgłoszeń w tej samej strefie czasowej.",
      },
    ],
    faqs: [
      {
        q: "Czy kalkulator pomija weekendy?",
        a: "Tak. Liczą się tylko dni robocze, które zaznaczysz. Sobota i niedziela są domyślnie odznaczone.",
      },
      {
        q: "Jak uwzględnić święta?",
        a: "Dodaj datę każdego święta. Kalkulator traktuje je jako dzień wolny od pracy.",
      },
      {
        q: "Czy jeden dzień roboczy to osiem godzin?",
        a: "Tylko jeśli Twoje godziny pracy trwają osiem godzin. Wpisz godziny otwarcia i zamknięcia, a potem ustaw cel w godzinach.",
      },
    ],
  },
};

export default tools;
