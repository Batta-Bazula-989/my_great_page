
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Narzędzia",
  allTools: "Wszystkie narzędzia",
  hub: {
    slug: "tools",
    metaTitle: "Bezpłatne kalkulatory lead scoringu i obsługi | TascaLab",
    metaDescription:
      "Bezpłatne kalkulatory: zbuduj i przetestuj scoring leadów, porównaj koszt agentów AI, oszacuj rachunek za WhatsApp Business API i wylicz terminy SLA.",
    eyebrow: "Bezpłatne narzędzia",
    title: "Bezpłatne narzędzia dla zespołów sprzedaży i obsługi klienta",
    intro: "Szybkie kalkulatory oparte na opublikowanych cenach i prostej matematyce. Bezpłatnie, bez rejestracji.",
    open: "Otwórz narzędzie",
  },
  common: {
    freeTool: "Bezpłatne narzędzie · bez rejestracji",
    howItWorks: "Jak to działa",
    faqTitle: "Najczęściej zadawane pytania",
    sources: "Źródła",
    estimate: "Tylko szacunki, nie oferta cenowa.",
    max: "Maksymalnie {value}",
    min: "Minimalnie {value}",
    perMonth: "/mies.",
    ctaTitle: "Chcesz dokładnych wyliczeń dla swojego zespołu?",
    ctaText: "Umów bezpłatny Health Check: 30-minutowa rozmowa, a potem pisemny raport z dopasowanym pakietem i stałą ceną.",
    ctaBook: "Umów bezpłatny Health Check",
    otherTools: "Inne bezpłatne narzędzia",
  },
  leadScore: {
    slug: "kalkulator-lead-scoringu",
    navLabel: "Kalkulator lead scoringu",
    short: "Zbuduj scoring dopasowania i zaangażowania, przetestuj go na leadzie i skopiuj model.",
    metaTitle: "Kalkulator lead scoringu: fit i zaangażowanie | TascaLab",
    metaDescription:
      "Bezpłatny kalkulator lead scoringu: zbuduj scoring dopasowania i zaangażowania z limitami i progami HubSpot, przetestuj go na leadzie i skopiuj model.",
    h1: "Kalkulator lead scoringu",
    intro:
      "Zbuduj punktowy scoring leadów tak, jak działa narzędzie lead scoringu HubSpot: kryteria dopasowania opisują, kim jest lead, a kryteria zaangażowania – co robi; każdy wynik zatrzymuje się na swoim limicie i jest dzielony na przedziały „Wysokie”, „Średnie” i „Niskie”. Przetestuj go na leadzie, sprawdź model pod kątem błędów, a potem skopiuj go do swojego CRM-u.",
    inputs: {
      criteriaTitle: "Twoje kryteria",
      criteriaHint:
        "Zaznacz kryteria, które dotyczą leada, którego chcesz przetestować. Przykłady to tylko wartości zastępcze: zastąp każdą nazwę i liczbę punktów własnymi.",
      label: "Kryterium",
      score: "Wynik",
      points: "Punkty",
      applies: "Dotyczy testowanego leada",
      remove: "Usuń {label}",
      add: "Dodaj kryterium",
      maxReached: "Maksymalnie {n} kryteriów.",
      settingsTitle: "Ustawienia scoringu",
      limit: "Limit scoringu",
      limitOption: "od {min} do {max}",
      high: "Wysokie od",
      medium: "Średnie od",
      thresholdsHint:
        "Limity to opcje dostępne w HubSpot. Domyślne progi odpowiadają przykładowi samego HubSpot: 70–100 „Wysokie”, 40–69 „Średnie”, poniżej 40 „Niskie”.",
    },
    scores: { fit: "Dopasowanie", engagement: "Zaangażowanie" },
    bands: { high: "Wysokie", medium: "Średnie", low: "Niskie" },
    examples: [
      { label: "Branża pasuje do Twojego profilu idealnego klienta", score: "fit", points: 30, applies: true },
      { label: "Wielkość firmy w Twoim docelowym przedziale", score: "fit", points: 25, applies: true },
      { label: "Stanowisko decyzyjne", score: "fit", points: 25, applies: false },
      { label: "Siedziba w regionie, którego nie obsługujesz", score: "fit", points: -40, applies: false },
      { label: "Odpowiedź na outreach z zainteresowaniem", score: "engagement", points: 40, applies: true },
      { label: "Wizyta na stronie z cennikiem", score: "engagement", points: 20, applies: true },
      { label: "Otwarcie Twoich trzech ostatnich e-maili", score: "engagement", points: 10, applies: false },
      { label: "Rezygnacja z subskrypcji Twoich e-maili", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Twój testowy lead",
      combined: "Etykieta łączona",
      combinedDesc: "Dopasowanie: {fit}, zaangażowanie: {engagement}",
      range: "Możliwy zakres: od {min} do {max}",
      checksTitle: "Zanim go zbudujesz",
      allGood: "W tym modelu nie znaleziono problemów.",
      noCriteria: "{score}: dodaj co najmniej jedno kryterium.",
      order: "{score}: próg „Średnie” musi być niższy niż „Wysokie”.",
      unreachable: "{score}: żaden lead nie może osiągnąć przedziału „Wysokie”. Najwyższy możliwy wynik leada to {max}.",
      capped: "{score}: punkty dodatnie sumują się do {total}, ale wynik zatrzymuje się na {limit}.",
      copy: "Skopiuj model jako tabelę",
      copied: "Skopiowano",
      copyFailed: "Nie udało się skopiować. Zaznacz kryteria i skopiuj je ręcznie.",
      tableHeads: { score: "Wynik", criterion: "Kryterium", points: "Punkty", limit: "Limit", high: "Wysokie", medium: "Średnie" },
    },
    sections: [
      {
        heading: "Jak liczony jest wynik",
        text: "Każde kryterium dodaje lub odejmuje punkty, gdy dotyczy danego leada. Kryteria dopasowania opisują, kim jest lead, np. branżę, wielkość firmy lub rolę; kryteria zaangażowania opisują, co lead robi, np. odpowiedzi, wizyty lub otwarcia. Każdy wynik zatrzymuje się na swoim limicie, tak jak w narzędziu lead scoringu HubSpot, a progi zamieniają liczbę na przedział „Wysokie”, „Średnie” lub „Niskie”. Etykieta łączona działa według konwencji HubSpot: litera to przedział dopasowania (A – wysokie, C – niskie), a cyfra to przedział zaangażowania (1 – wysokie, 3 – niskie), więc lead o niskim dopasowaniu, ale wysokim zaangażowaniu to C1.",
      },
      {
        heading: "Konfiguracja w HubSpot",
        text: "Narzędzie lead scoringu HubSpot wymaga planu Marketing Hub lub Sales Hub Professional albo Enterprise. Najmniejszy limit scoringu to zakres od -100 do 100, a największy – od -10 000 do 10 000; domyślne maksimum to 100. W ramach scoringu możesz dodawać grupy z własnymi limitami, a wszystkie limity grup wliczają się do limitu scoringu. W przypadku zaangażowania wygaszanie scoringu może obniżać punkty co 1, 3, 6 lub 12 miesięcy, przy czym każdy miesiąc liczy się jako 30 dni.",
      },
      {
        heading: "Konfiguracja w Attio",
        text: "Attio nie ma dedykowanego narzędzia do scoringu. W planach Pro, Enterprise i Ultra atrybut formuły (formula attribute) może sumować punkty za pomocą warunków if(), z operatorem ??, który traktuje puste pola jako 0. Formuła zwracająca liczbę staje się atrybutem liczbowym, przelicza się automatycznie, gdy zmieniają się pola, których używa, i nie zużywa kredytów przestrzeni roboczej. W planach Free i Plus trzymaj wynik w atrybucie liczbowym, który wypełnia workflow lub API.",
      },
      {
        heading: "Kiedy scoring nie jest Ci potrzebny",
        text: "Jeśli Twój zespół czyta każdego nowego leada tego samego dnia, scoring niewiele wnosi. Zaczyna się opłacać, gdy leady napływają szybciej, niż ktokolwiek jest w stanie je przejrzeć, albo gdy najważniejsze sygnały, takie jak odpowiedź z zainteresowaniem czy wizyta na stronie z cennikiem, są w narzędziach, których Twój CRM sam nie widzi.",
      },
    ],
    faqs: [
      {
        q: "Czy przykładowe punkty to rekomendacja?",
        a: "Nie. To wartości zastępcze, które pokazują, jak działa liczenie. Zastąp każde kryterium i każdą liczbę punktów własnymi. Jedyne wartości domyślne wzięte od dostawcy to limity scoringu HubSpot i jego przykładowe progi.",
      },
      {
        q: "Co oznaczają A1 i C3?",
        a: "To etykiety HubSpot dla scoringów łączonych. Litera to przedział dopasowania, od A (wysokie dopasowanie) do C (niskie dopasowanie); cyfra to przedział zaangażowania, od 1 (wysokie zaangażowanie) do 3 (niskie zaangażowanie).",
      },
      {
        q: "Czy HubSpot może zbudować scoring za mnie z pomocą AI?",
        a: "Scoringi kontaktów budowane przez AI w HubSpot wymagają Marketing Hub Enterprise i co najmniej 50 kontaktów – 25 skonwertowanych i 25 nieskonwertowanych – zanim można wygenerować wynik.",
      },
      {
        q: "Czy Attio ma lead scoring?",
        a: "Nie ma dedykowanego narzędzia do scoringu. W planach Pro, Enterprise i Ultra atrybut formuły może automatycznie wyliczać punktowy wynik; w pozostałych planach workflow lub API zapisuje wynik w atrybucie liczbowym.",
      },
      {
        q: "Czy to, co wpisuję, jest gdzieś zapisywane?",
        a: "Nie. Wynik jest liczony w Twojej przeglądarce i nic, co wpiszesz, nie jest nigdzie wysyłane.",
      },
    ],
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
      package: "Cena pakietu {plan} (jednorazowo)",
      priceHint: "Pakiet {plan} kosztuje od {price}. Jeśli masz raport z Health Check, wpisz podaną w nim stałą cenę.",
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
        "Domyślne wartości poglądowe: żadne oficjalne źródło nie publikuje typowej liczby. Zastąp je rzeczywistymi danymi Twojego bota z panelu zużycia u Twojego dostawcy AI.",
    },
    results: {
      title: "Szacowany koszt",
      vendor: "Dostawca",
      monthly: "Miesięcznie",
      year: "12 miesięcy",
      yourBuild: "Jednorazowe wdrożenie",
      buildLine: "{price} jednorazowo + koszty bieżące {monthly} miesięcznie",
      payback: "Taniej niż {vendor} od {months}. miesiąca",
      neverCheaper: "Przy tym wolumenie wdrożenie nie jest tańsze od żadnego dostawcy w ciągu 12 miesięcy.",
      cheapest: "Najtańszy dostawca",
      currencyNote: "Ceny dostawców to ceny katalogowe w USD, przeliczone po kursie EBC z 16 października 2026 r.",
      pricesAsOf: "Ceny katalogowe dostawców według stanu na {date}.",
      empty: "Wpisz liczbę rozmów z AI miesięcznie, aby porównać koszty.",
    },
    units: {
      fin: "0,99 USD za wynik (outcome); przy innym helpdesku minimum 49 USD miesięcznie, które obejmuje 50 wyników",
      zendesk: "2,00 USD za automatyczne rozwiązanie, w modelu pay-as-you-go (1,50 USD przy zobowiązaniu)",
      freddy: "49 USD za 100 sesji",
      hubspot: "0,50 USD za rozwiązaną rozmowę (50 HubSpot Credits); wymaga planu Professional lub Enterprise",
      tidio: "Miesięczne pakiety od 39 USD za 50 do 700 USD za 1000 rozmów; powyżej tego Lyro Connect od 0,50 USD za rozmowę",
      agentforce: "0,10 USD za akcję (20 Flex Credits, 500 USD za 100 000)",
    },
    notIncluded:
      "Nie uwzględniono: abonamentu helpdesku, limitów zawartych w planach, rabatów za wolumen ani podatków. Fin rozlicza też jako wyniki przekazania z Procedure (czyli z Procedure skonfigurowanej tak, aby kończyła się przekazaniem), więc jego rzeczywisty koszt może być wyższy. Zendesk przenosi konta na progi rozwiązań (resolution tiers), których ceny ustala jego dział sprzedaży.",
    sections: [
      {
        heading: "Jak działa wyliczenie",
        text: "Liczba rozwiązanych rozmów to Twoje miesięczne rozmowy pomnożone przez odsetek rozwiązanych bez udziału człowieka. Fin nalicza opłaty za wynik, ponad miesięczne minimum 49 USD, Zendesk i HubSpot za rozwiązanie, Freddy za pakiet 100 sesji, Tidio Lyro w miesięcznych pakietach rozmów, w których odpowiada, a Agentforce za akcję. Cena katalogowa każdego dostawcy prowadzi poniżej do jego strony z cennikiem.",
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
        a: "To ceny katalogowe opublikowane na oficjalnych stronach z cennikami poszczególnych dostawców, sprawdzone w listopadzie 2026 r. Dostawcy często zmieniają ceny, więc przed zakupem sprawdź podlinkowane strony.",
      },
      {
        q: "Co liczy się jako rozwiązanie?",
        a: "Każdy dostawca definiuje to inaczej. Fin nalicza opłaty za wynik (outcome: rozwiązanie albo Procedure zakończona przekazaniem), Zendesk za automatyczne rozwiązanie, HubSpot za rozmowę nieprzekazaną człowiekowi w ciągu 72 godzin, Freddy za sesję, a Tidio za rozmowę, w której odpowiada Lyro. Przed porównaniem przeczytaj definicję każdego dostawcy.",
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
      "Nie uwzględniono: rabatów progowych za wolumen dla wiadomości utility i uwierzytelniających, wiadomości Meta Business Agent, opłat Twojego dostawcy WhatsApp ani podatków. Wiadomości w bezpłatnym oknie punktu wejścia nie są płatne.",
    sections: [
      {
        heading: "Co zmieniło się 1 października 2026 r.",
        text: "Wiadomości serwisowe w dowolnej formie, czyli odpowiedzi wysyłane w 24-godzinnym oknie obsługi klienta, nie są już bez limitu i bezpłatne. Każdy firmowy numer telefonu dostaje 1000 bezpłatnych wiadomości serwisowych miesięcznie; potem Meta pobiera za nie opłatę według stawki utility obowiązującej na danym rynku. Szablony utility wysyłane w tym oknie są teraz również płatne.",
      },
      {
        heading: "Jak Meta nalicza opłaty za wiadomości",
        text: "Meta pobiera opłatę za każdą dostarczoną wiadomość. Stawka zależy od kategorii wiadomości (marketingowa, utility, uwierzytelniająca lub serwisowa) i kraju odbiorcy; wiadomości serwisowe mają na danym rynku tę samą stawkę katalogową co wiadomości utility i uwierzytelniające. Piąta kategoria, wiadomości Meta Business Agent wysyłane przez własnego agenta AI Meta, jest natomiast rozliczana za tokeny. Meta publikuje tabele stawek w 16 walutach i może zmieniać ceny tylko pierwszego dnia kwartału.",
      },
      {
        heading: "Czego ten kalkulator nie uwzględnia",
        text: "Wiadomości utility i uwierzytelniające mają progi wolumenowe, które obniżają stawkę przy dużych wolumenach; nie są one tu uwzględnione. Wiadomości są bezpłatne w bezpłatnym oknie punktu wejścia, które otwiera się, gdy w ciągu 24 godzin odpowiesz osobie, która napisała do Ciebie z reklamy Click to WhatsApp w aplikacji WhatsApp na Androida lub iOS, i może pozostać otwarte do 7 dni. Wiadomości Meta Business Agent (2,00 USD za milion tokenów) i opłaty Twojego dostawcy WhatsApp nie są uwzględnione.",
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
