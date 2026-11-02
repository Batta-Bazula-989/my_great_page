import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "automatyzacja-attio-workflows",
    category: "crm",
    navLabel: "Workflowy w Attio",
    primaryKeyword: "automatyzacja workflowów w Attio",
    title: "Workflowy w Attio: triggery, bloki, kredyty i API",
    description:
      "Workflowy w Attio: bloki triggerów i akcji, zużycie kredytów workflowów, limity REST API, podpisy webhooków i sposoby połączenia Attio z narzędziami wsparcia.",
    h1: "Workflowy w Attio: jak działa automatyzacja CRM w Attio",
    intro:
      "Attio automatyzuje pracę w CRM za pomocą workflowów. Workflow zaczyna się od bloku triggera i uruchamia łańcuch bloków akcji, np. aktualizację rekordu, utworzenie zadania, wysłanie wiadomości na Slacku lub wykonanie żądania HTTP. Uruchomienia workflowów zużywają kredyty przestrzeni roboczej (workspace), a wszystko inne łączy się przez REST API i webhooki Attio.",
    keyFacts: [
      "Workflow w Attio składa się z bloku triggera, który go uruchamia, i bloków akcji, które wykonują pracę.",
      "Workflowy zużywają kredyty przestrzeni roboczej. Większość bloków zużywa jeden kredyt, a blok, który zakończy się błędem, oraz każdy blok po nim nie zużywają żadnego.",
      "REST API Attio pozwala na 100 żądań odczytu i 25 żądań zapisu na sekundę. Po przekroczeniu limitu zwraca HTTP 429 z nagłówkiem Retry-After.",
      "Attio podpisuje webhooki za pomocą HMAC-SHA256 treści żądania, przesyłanego w nagłówku Attio-Signature.",
    ],
    sections: [
      {
        heading: "Jak zbudowane są workflowy w Attio",
        blocks: [
          {
            type: "p",
            text: "Workflow budujesz na kanwie. Blok triggera decyduje, kiedy workflow się uruchamia, a bloki akcji po nim – co się dzieje. Biblioteka bloków Attio dzieli triggery na cztery rodzaje:",
          },
          {
            type: "ul",
            items: [
              "Triggery rekordów, np. 'Record created'.",
              "Triggery list, np. 'Record added to list'.",
              "Triggery zadań, np. 'Task created'.",
              "Triggery narzędziowe (utility), np. 'Manual run', harmonogram lub przychodzący webhook.",
            ],
          },
          {
            type: "p",
            text: "Centrum pomocy Attio jako przykłady bloków akcji podaje aktualizację rekordu, utworzenie zadania, wysłanie wiadomości na Slacku, zapisanie kogoś do sekwencji i wykonanie żądania HTTP. Możesz też opisać workflow zwykłym językiem i pozwolić, by zbudował go Ask Attio. Aplikacje zbudowane za pomocą Attio SDK mogą dodawać własne bloki, które pojawiają się wtedy w selektorze bloków obok wbudowanych.",
          },
          {
            type: "note",
            text: "Domyślnie workflow nie może zapisywać danych w obiekcie. Administrator lub członek z pełnym dostępem do tego obiektu musi najpierw nadać workflow dostęp. Sprawdź to, zanim zaczniesz testować workflow, który aktualizuje rekordy.",
          },
        ],
      },
      {
        heading: "Jak workflowy zużywają kredyty",
        blocks: [
          {
            type: "p",
            text: "Uruchomienia workflowów i funkcje AI korzystają ze wspólnej puli kredytów przestrzeni roboczej. Dokumentacja rozliczeń Attio opisuje, jak są one liczone:",
          },
          {
            type: "ul",
            items: [
              "Większość bloków workflow zużywa jeden kredyt przy każdym uruchomieniu.",
              "Kredyty są naliczane tylko za bloki, które faktycznie się wykonały. Jeśli uruchomienie zakończy się błędem w połowie, blok, który zawiódł, i każdy blok po nim nie zużywają kredytów.",
              "Ponowne przeliczanie atrybutów AI również zużywa kredyty.",
              "Administratorzy widzą zużycie kredytów dla każdego workflow w Workspace settings.",
            ],
          },
          {
            type: "p",
            text: "Liczba kredytów w pakiecie zależy od planu, a Attio już wcześniej zmieniało swoje plany. Sprawdź aktualny limit na stronie cennika Attio i oszacuj zużycie, mnożąc liczbę bloków na uruchomienie przez spodziewaną liczbę uruchomień w miesiącu.",
          },
        ],
      },
      {
        heading: "API i webhooki Attio",
        blocks: [
          {
            type: "p",
            text: "Do wszystkiego, czego workflow nie zrobi sam, Attio udostępnia REST API i wychodzące webhooki. Oto co mówi o nich dokumentacja dla deweloperów.",
          },
          {
            type: "table",
            caption: "REST API i webhooki Attio (dokumentacja deweloperska Attio, sprawdzona w listopadzie 2026)",
            head: ["Temat", "Co dokumentuje Attio"],
            rows: [
              ["Limity zapytań (rate limits)", "100 żądań na sekundę dla odczytów i 25 na sekundę dla zapisów. Po przekroczeniu limitu HTTP 429 z nagłówkiem Retry-After."],
              ["Endpointy listujące", "List records i List entries mają też limity oparte na punktach (score), liczone w 10-sekundowym oknie łącznie dla wszystkich aplikacji i tokenów."],
              ["Uwierzytelnianie", "Klucz API dla jednej przestrzeni roboczej albo OAuth 2.0 dla aplikacji używanych w kilku przestrzeniach roboczych. Tokeny są wysyłane jako tokeny Bearer, a zakresy (scopes) ustawia się dla każdego tokena."],
              ["Zdarzenia webhooków", "Wśród zdarzeń są record.created, list-entry.created, note.created i task.created."],
              ["Podpis webhooka", "HMAC-SHA256 surowej treści żądania, utworzony z sekretem webhooka i zakodowany szesnastkowo (hex), w nagłówku Attio-Signature."],
              ["Ponowienia", "Każda wiadomość zawiera nagłówek Idempotency-Key, który pozostaje taki sam, gdy Attio ponawia jej wysłanie."],
            ],
          },
          {
            type: "p",
            text: "Aby sprawdzić, czy webhook pochodzi od Attio, oblicz ponownie HMAC-SHA256 surowej treści z sekretem webhooka i porównaj wynik z nagłówkiem Attio-Signature. Attio wysyła tę samą wartość także jako X-Attio-Signature na potrzeby starszego middleware. Używaj nagłówka Idempotency-Key, aby pomijać wiadomości, które już przetworzyłeś, tak by ponowienie nie utworzyło drugiego zadania ani drugiej wiadomości na Slacku.",
          },
        ],
      },
      {
        heading: "Łączenie Attio z narzędziami wsparcia",
        blocks: [
          {
            type: "p",
            text: "Attio ma aplikację Slack do powiadomień i oficjalną aplikację Zapier. Zapier wymienia gotowe połączenia między Attio a helpdeskami takimi jak Zendesk i Intercom. Jeśli potrzebujesz większej kontroli, połącz helpdesk z API i webhookami Attio przez n8n lub Make. Poniżej typowy schemat rozpisany na kroki. Pokazuje, jak elementy do siebie pasują. To nie jest studium przypadku TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: Twój helpdesk wysyła webhook do n8n lub Make, gdy zgłoszenie zostaje utworzone lub eskalowane.",
              "Wyszukanie: workflow znajduje w Attio rekord firmy klienta przez API, mieszcząc się w limicie 100 odczytów na sekundę.",
              "Aktualizacja: zapisuje status lub kategorię zgłoszenia w atrybucie rekordu albo tworzy zadanie dla opiekuna konta.",
              "Reakcja w Attio: workflow Attio uruchamiany tą aktualizacją rekordu wysyła wiadomość na Slacku do opiekuna konta.",
              "Obsługa błędów: przy HTTP 429 odczekaj i ponów żądanie, a nagłówek Idempotency-Key wykorzystaj do odrzucania zduplikowanych dostaw webhooków.",
            ],
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab łączy narzędzia takie jak Attio z helpdeskiem i narzędziami czatu, których już używasz, przez API, webhooki, n8n i Make, bez zmiany platformy. Projekty Custom Automation kosztują {{price:custom}}. Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym są workflowy w Attio?",
        a: "To narzędzie do automatyzacji w Attio. Workflow zaczyna się od bloku triggera, np. utworzenia rekordu lub ręcznego uruchomienia, a następnie wykonuje bloki akcji, np. aktualizację rekordu, utworzenie zadania, wysłanie wiadomości na Slacku lub wykonanie żądania HTTP.",
      },
      {
        q: "Czy workflowy w Attio zużywają kredyty?",
        a: "Tak. Uruchomienia workflowów zużywają wspólne kredyty przestrzeni roboczej. Większość bloków zużywa jeden kredyt na uruchomienie, a bloki, które zakończą się błędem lub w ogóle się nie wykonają, nie zużywają żadnego. Liczba kredytów w pakiecie zależy od Twojego planu.",
      },
      {
        q: "Jakie są limity zapytań API Attio?",
        a: "100 żądań na sekundę dla odczytów i 25 na sekundę dla zapisów. Po przekroczeniu limitu Attio zwraca HTTP 429 z nagłówkiem Retry-After. Endpointy List records i List entries mają też limity oparte na punktach (score).",
      },
      {
        q: "Jak zweryfikować webhook z Attio?",
        a: "Oblicz HMAC-SHA256 surowej treści żądania z sekretem webhooka, zakoduj go szesnastkowo (hex) i porównaj z nagłówkiem Attio-Signature.",
      },
    ],
    sources: [
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-02",
  },
  {
    key: "attio-vs-hubspot-automation",
    slug: "attio-vs-hubspot-automatyzacja",
    category: "crm",
    navLabel: "Attio vs HubSpot: automatyzacja",
    primaryKeyword: "Attio vs HubSpot automatyzacja",
    title: "Attio vs HubSpot: automatyzacja, workflowy, API, webhooki",
    description:
      "Attio vs HubSpot w automatyzacji: kto ma workflowy, limity i kredyty, triggery, kroki z kodem i webhookiem, limity zapytań API i weryfikacja podpisów webhooków.",
    h1: "Attio vs HubSpot: automatyzacja – workflowy, limity, API i webhooki",
    intro:
      "Attio i HubSpot automatyzują pracę w CRM za pomocą wizualnych workflowów, ale ograniczają je w różny sposób. HubSpot oferuje workflowy tylko w edycjach Professional i Enterprise i limituje, ile możesz ich utworzyć, natomiast Attio rozlicza uruchomienia workflowów kredytami przestrzeni roboczej. Ich API i webhooki różnią się też limitami zapytań i sposobem weryfikacji żądania.",
    keyFacts: [
      "Workflowy w HubSpot wymagają subskrypcji Professional lub Enterprise. Marketing, Sales lub Service Hub Professional pozwala na maksymalnie 300 workflowów, a Enterprise na maksymalnie 1000.",
      "Attio rozlicza workflowy kredytami przestrzeni roboczej. Większość bloków zużywa jeden kredyt na uruchomienie.",
      "Akcje z własnym kodem (custom code) w HubSpot muszą zakończyć się w ciągu 20 sekund i mogą używać do 128 MB pamięci.",
      "API Attio pozwala na 100 odczytów i 25 zapisów na sekundę. Prywatne aplikacje (private apps) HubSpot w planach Professional lub Enterprise mają 190 żądań na 10 sekund.",
      "HubSpot podpisuje webhooki nagłówkiem X-HubSpot-Signature-v3. Attio używa nagłówka Attio-Signature.",
    ],
    sections: [
      {
        heading: "Porównanie obok siebie",
        blocks: [
          {
            type: "table",
            caption: "Attio vs HubSpot: automatyzacja (dokumentacja dostawców, sprawdzona w listopadzie 2026)",
            head: ["Pytanie", "Attio", "HubSpot"],
            rows: [
              ["Jak ograniczane jest użycie", "Uruchomienia workflowów zużywają kredyty przestrzeni roboczej. Większość bloków zużywa jeden kredyt.", "Wymagany plan Professional lub Enterprise. Limit liczby workflowów w każdej edycji."],
              ["Triggery", "Triggery rekordów, list, zadań i narzędziowe, w tym harmonogram, webhook i ręczne uruchomienie", "Triggery zapisu (enrollment triggers) oparte na filtrach, zdarzeniach, harmonogramie i webhookach"],
              ["Wywoływanie innego systemu", "Blok HTTP request. Aplikacje mogą dodawać własne bloki.", "Akcje 'Send a webhook' i 'Custom code' w Data Hub Professional i Enterprise"],
              ["Slack", "Blok wiadomości Slack, z aplikacją Slack od Attio", "Akcja powiadomienia Slack, po zainstalowaniu integracji ze Slackiem"],
              ["Limit zapytań API", "100 odczytów i 25 zapisów na sekundę", "Prywatne aplikacje: 100 na 10 sekund w planach Free i Starter, 190 w Professional i Enterprise, plus limit dzienny"],
              ["Podpis webhooka", "HMAC-SHA256 treści, zakodowany szesnastkowo (hex), w Attio-Signature", "HMAC-SHA256 metody, URI, treści i znacznika czasu, zakodowany w base64, w X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "Workflowy w HubSpot: edycje i limity",
        blocks: [
          {
            type: "p",
            text: "FAQ HubSpot dotyczące workflowów mówi, że do korzystania z workflowów wymagana jest subskrypcja Professional lub Enterprise. Liczba workflowów, które możesz utworzyć, zależy od edycji:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales lub Service Hub Professional: do 300 workflowów.",
              "Marketing, Sales lub Service Hub Enterprise: do 1000 workflowów.",
              "Z dodatkiem Brands: 100 workflowów więcej.",
              "Przy kilku hubach Twój limit wyznacza subskrypcja z najwyższym limitem.",
            ],
          },
          {
            type: "p",
            text: "Do limitu wliczają się tylko niestandardowe workflowy zbudowane w narzędziu workflowów. Proste automatyzacje w narzędziach takich jak formularze się nie wliczają. Domyślnie rekord zostaje zapisany do workflow tylko za pierwszym razem, gdy spełni triggery zapisu (enrollment triggers). Możesz włączyć ponowny zapis (re-enrollment), ale nie może on używać kryteriów AND i nie zapisuje rekordów wstecznie.",
          },
          {
            type: "p",
            text: "Dla integracji najważniejsze są dwie akcje: 'Send a webhook' i 'Custom code'. HubSpot wymienia obie dla Data Hub Professional i Enterprise – huba, który wcześniej nazywał się Operations Hub. Akcje 'Custom code' uruchamiają Node.js lub Python, muszą zakończyć się w ciągu 20 sekund i mogą używać do 128 MB pamięci, więc długie zadania powinny trafić do zewnętrznego narzędzia, takiego jak n8n.",
          },
        ],
      },
      {
        heading: "Workflowy w Attio: rozliczane kredytami",
        blocks: [
          {
            type: "p",
            text: "Attio rozlicza workflowy według użycia. Uruchomienia korzystają ze wspólnych kredytów przestrzeni roboczej, większość bloków zużywa jeden kredyt, a bloki, które zakończą się błędem lub w ogóle się nie wykonają, nie zużywają żadnego. Administratorzy widzą zużycie kredytów dla każdego workflow w Workspace settings. Liczba kredytów w pakiecie zależy od planu, więc sprawdź stronę cennika Attio i oszacuj zużycie, mnożąc liczbę bloków na uruchomienie przez liczbę uruchomień w miesiącu.",
          },
          {
            type: "p",
            text: "Aby z workflow w Attio dotrzeć do innego systemu, użyj bloku HTTP request albo zbuduj za pomocą Attio SDK aplikację, która dodaje własne bloki workflow.",
          },
        ],
      },
      {
        heading: "API i webhooki do integracji",
        blocks: [
          {
            type: "p",
            text: "HubSpot limituje prywatne aplikacje w oknie 10 sekund i w skali dnia. Konta Free i Starter mają 100 żądań na 10 sekund i 250 000 dziennie. Professional ma 190 na 10 sekund i 625 000 dziennie, a Enterprise 190 na 10 sekund i 1 000 000 dziennie. Limit 10-sekundowy dotyczy każdej aplikacji osobno, a limit dzienny jest wspólny dla wszystkich aplikacji na koncie. Po przekroczeniu limitu HubSpot zwraca HTTP 429, a jego wytyczne proszą, by odpowiedzi z błędami stanowiły mniej niż 5% Twoich dziennych żądań.",
          },
          {
            type: "p",
            text: "Attio liczy na sekundę: 100 odczytów i 25 zapisów, z HTTP 429 i nagłówkiem Retry-After po przekroczeniu limitu. Jego endpointy List records i List entries mają też limity oparte na punktach (score), liczone w 10-sekundowym oknie.",
          },
          {
            type: "p",
            text: "Oba systemy podpisują swoje webhooki, ale w różny sposób. Podpis v3 HubSpot przychodzi w X-HubSpot-Signature-v3 razem z X-HubSpot-Request-Timestamp. To HMAC-SHA256 zakodowany w base64 i utworzony z client secret aplikacji, obliczany z metody, URI, treści i znacznika czasu, a według HubSpot należy odrzucać żądania, których znacznik czasu jest starszy niż 5 minut. Nagłówek Attio-Signature w Attio to zakodowany szesnastkowo HMAC-SHA256 surowej treści, utworzony z sekretem webhooka. Attio wysyła też nagłówek Idempotency-Key, który pozostaje taki sam przy ponowieniach.",
          },
        ],
      },
      {
        heading: "Co pasuje do zespołu wsparcia",
        blocks: [
          {
            type: "ul",
            items: [
              "Jeśli Twój zespół wsparcia pracuje już w help desku HubSpot, zgłoszenia, SLA i workflowy zgłoszeń znajdują się na tym samym koncie co CRM, a workflowy są dostępne od planu Professional.",
              "Jeśli używasz Attio jako CRM i osobnego helpdesku, połącz je przez API i webhooki za pomocą n8n, Make lub Zapiera, który ma oficjalną aplikację Attio.",
              "Jeśli Twoje automatyzacje wywołują inne systemy, uwzględnij w budżecie Data Hub Professional w HubSpot albo zaplanuj pracę wokół bloku HTTP request w Attio.",
              "Przy dużych wolumenach porównaj powyższe limity API ze szczytowym wolumenem zgłoszeń, zanim zdecydujesz, gdzie będzie działać logika.",
            ],
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje automatyzacje na CRM i helpdesku, których już używasz, z wykorzystaniem API, webhooków, n8n i Make, więc nie musisz zmieniać platformy. Projekty Custom Automation kosztują {{price:custom}}. Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy HubSpot oferuje workflowy w każdym planie?",
        a: "Nie. FAQ HubSpot dotyczące workflowów mówi, że wymagana jest subskrypcja Professional lub Enterprise. Marketing, Sales lub Service Hub Professional pozwala na maksymalnie 300 workflowów, a Enterprise na maksymalnie 1000.",
      },
      {
        q: "Jak Attio ogranicza workflowy?",
        a: "Kredytami przestrzeni roboczej. Uruchomienia workflowów korzystają ze wspólnych kredytów przestrzeni roboczej, większość bloków zużywa jeden kredyt na uruchomienie, a liczba kredytów w pakiecie zależy od Twojego planu.",
      },
      {
        q: "Czy w workflowach HubSpot lub Attio można uruchamiać własny kod?",
        a: "HubSpot ma akcję 'Custom code' w Data Hub Professional i Enterprise, która uruchamia Node.js lub Python z limitem 20 sekund i 128 MB pamięci. Attio oferuje blok HTTP request, a aplikacje zbudowane za pomocą jego SDK mogą dodawać własne bloki.",
      },
      {
        q: "Jak zweryfikować webhooki z HubSpot i Attio?",
        a: "W HubSpot oblicz ponownie HMAC-SHA256 metody, URI, treści i znacznika czasu z użyciem client secret i porównaj wynik z X-HubSpot-Signature-v3. W Attio porównaj HMAC-SHA256 surowej treści, utworzony z sekretem webhooka, z nagłówkiem Attio-Signature.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Workflows FAQ", url: "https://knowledge.hubspot.com/workflows/workflows-faq" },
      { label: "HubSpot Knowledge Base — Set your workflow enrollment triggers", url: "https://knowledge.hubspot.com/workflows/set-your-workflow-enrollment-triggers" },
      { label: "HubSpot Knowledge Base — Add re-enrollment triggers to a workflow", url: "https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "HubSpot Developers — Custom code actions", url: "https://developers.hubspot.com/docs/api-reference/latest/automation/workflow-actions/custom-code-actions" },
      { label: "HubSpot Developers — API usage guidelines and limits", url: "https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines" },
      { label: "HubSpot Developers — Validating requests", url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation" },
      { label: "HubSpot — Fall 2025 Spotlight", url: "https://www.hubspot.com/company-news/fall-2025-spotlight" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Automations billing", url: "https://attio.com/help/reference/automations/automations-billing" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-02",
  },
];
