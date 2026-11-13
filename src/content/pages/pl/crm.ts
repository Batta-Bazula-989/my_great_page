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
      "Triggery, logika i wyszukiwania danych są bezpłatne. Bloki, które zapisują dane, wywołują systemy zewnętrzne lub używają AI, zużywają kredyty przestrzeni roboczej – większość z nich jeden kredyt na uruchomienie.",
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
            text: "Centrum pomocy Attio jako przykłady bloków akcji podaje aktualizację rekordu, utworzenie zadania, wysłanie wiadomości na Slacku, zapisanie kogoś do sekwencji i wykonanie żądania HTTP. Blok 'Execute code' uruchamia Twój własny kod JavaScript jako krok, z limitem czasu 100 sekund. Możesz też opisać workflow zwykłym językiem i pozwolić, by zbudował go Ask Attio. Aplikacje zbudowane za pomocą Attio SDK mogą dodawać własne bloki, które pojawiają się wtedy w selektorze bloków obok wbudowanych.",
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
            text: "Uruchomienia workflowów korzystają ze wspólnych kredytów przestrzeni roboczej, a nie z kredytów stanowisk (seat credits). Centrum pomocy Attio opisuje, jak są one liczone w nowych workflowach:",
          },
          {
            type: "ul",
            items: [
              "Triggery, logika i wyszukiwania danych są bezpłatne. Kredyty są zużywane tylko wtedy, gdy blok zapisuje dane, wysyła lub odbiera coś z zewnątrz albo używa AI.",
              "Zapisy rekordów, zadania, zapisanie do sekwencji, żądania HTTP i bloki integracji kosztują 1 kredyt za uruchomienie. Bloki AI i 'Execute code' mają zmienny koszt.",
              "Naliczana jest tylko ścieżka, którą przeszło uruchomienie. Jeśli uruchomienie zakończy się błędem w połowie, blok, który zawiódł, i każdy blok po nim nie zużywają kredytów, ale bloki wykonane przed błędem są naliczane.",
              "Budowanie workflow za pomocą Ask Attio zużywa kredyty stanowisk, a nie wspólne kredyty przestrzeni roboczej.",
            ],
          },
          {
            type: "p",
            text: "Według stanu na listopad 2026 Attio zapewnia 250 kredytów przestrzeni roboczej miesięcznie w planie Free, 1500 w Plus i 10 000 w Pro. Plany się zmieniają, więc sprawdź stronę cennika Attio, a następnie oszacuj zużycie, mnożąc liczbę bloków zużywających kredyty na uruchomienie przez spodziewaną liczbę uruchomień w miesiącu.",
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
        a: "Tak, w przypadku bloków, które zapisują dane, wywołują systemy zewnętrzne lub używają AI. Większość z nich kosztuje jeden kredyt na uruchomienie, a triggery, logika i wyszukiwania danych są bezpłatne. Według stanu na listopad 2026 plan Free obejmuje 250 kredytów przestrzeni roboczej miesięcznie, Plus 1500, a Pro 10 000.",
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
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/getting-started-with-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-03",
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
      "Attio rozlicza workflowy kredytami przestrzeni roboczej. Triggery, logika i wyszukiwania są bezpłatne, a większość bloków, które zapisują dane lub wywołują systemy zewnętrzne, zużywa jeden kredyt na uruchomienie.",
      "Akcje z własnym kodem (custom code) w HubSpot muszą zakończyć się w ciągu 20 sekund i mogą używać do 128 MB pamięci. Blok 'Execute code' w Attio ma limit czasu 100 sekund.",
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
              ["Jak ograniczane jest użycie", "Kredyty przestrzeni roboczej. Triggery, logika i wyszukiwania są bezpłatne, a większość bloków, które zapisują dane lub wywołują systemy zewnętrzne, zużywa jeden kredyt.","Wymagany plan Professional lub Enterprise. Limit liczby workflowów w każdej edycji."],
              ["Triggery", "Triggery rekordów, list, zadań i narzędziowe, w tym harmonogram, webhook i ręczne uruchomienie", "Triggery zapisu (enrollment triggers) oparte na filtrach, zdarzeniach, harmonogramie i webhookach"],
              ["Wywoływanie innego systemu i kod", "Blok HTTP request oraz blok 'Execute code' dla JavaScriptu. Aplikacje mogą dodawać własne bloki.","Akcje 'Send a webhook' i 'Custom code' w Data Hub Professional i Enterprise"],
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
            text: "Dla integracji najważniejsze są dwie akcje: 'Send a webhook' i 'Custom code'. HubSpot wymienia obie dla Data Hub Professional i Enterprise – huba, który wcześniej nazywał się Operations Hub. Akcje 'Custom code' uruchamiają domyślnie Node.js albo Python w wersji beta, muszą zakończyć się w ciągu 20 sekund i mogą używać do 128 MB pamięci, więc długie zadania powinny trafić do zewnętrznego narzędzia, takiego jak n8n.",
          },
        ],
      },
      {
        heading: "Workflowy w Attio: rozliczane kredytami",
        blocks: [
          {
            type: "p",
            text: "Attio rozlicza workflowy według użycia. Uruchomienia korzystają ze wspólnych kredytów przestrzeni roboczej. Triggery, logika i wyszukiwania danych są bezpłatne, a bloki, które zapisują dane, wywołują systemy zewnętrzne lub używają AI, zużywają kredyty – większość z nich jeden na uruchomienie. Według stanu na listopad 2026 plan Free obejmuje 250 kredytów przestrzeni roboczej miesięcznie, Plus 1500, a Pro 10 000.",
          },
          {
            type: "p",
            text: "Aby z workflow w Attio dotrzeć do innego systemu, użyj bloku HTTP request. Blok 'Execute code' uruchamia Twój własny kod JavaScript z limitem czasu 100 sekund i zmiennym kosztem w kredytach, a aplikacje zbudowane za pomocą Attio SDK mogą dodawać własne bloki workflow.",
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
              "Jeśli Twoje automatyzacje wywołują inne systemy, uwzględnij w budżecie Data Hub Professional w HubSpot albo zaplanuj pracę wokół bloków HTTP request i 'Execute code' w Attio.",
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
        a: "Kredytami przestrzeni roboczej. Triggery, logika i wyszukiwania są bezpłatne, a większość bloków, które zapisują dane lub wywołują systemy zewnętrzne, zużywa jeden kredyt na uruchomienie. Koszt bloków AI i bloków z kodem jest zmienny. Liczba kredytów w pakiecie zależy od Twojego planu.",
      },
      {
        q: "Czy w workflowach HubSpot lub Attio można uruchamiać własny kod?",
        a: "HubSpot ma akcję 'Custom code' w Data Hub Professional i Enterprise, która uruchamia Node.js albo Python w wersji beta, z limitem 20 sekund i 128 MB pamięci. Attio ma blok 'Execute code', który uruchamia JavaScript z limitem czasu 100 sekund, a aplikacje zbudowane za pomocą jego SDK mogą dodawać własne bloki.",
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
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-03",
  },
  {
    key: "hubspot-zendesk-integration",
    slug: "integracja-hubspot-zendesk",
    category: "crm",
    navLabel: "Integracja HubSpot z Zendesk",
    primaryKeyword: "integracja HubSpot Zendesk",
    title: "Integracja HubSpot z Zendesk: co się synchronizuje i opcje",
    description:
      "Integracja HubSpot z Zendesk: co synchronizuje darmowa aplikacja Zendesk dla HubSpot, a co nie, przepływy akcji, sync dwukierunkowy i integracje z oboma API.",
    h1: "Integracja HubSpot z Zendesk: co się synchronizuje, co nie i jakie masz opcje",
    intro:
      "Własna integracja Zendesk z HubSpot jest bezpłatna i szybko się ją podłącza, ale wysyła zdarzenia zgłoszeń tylko w jedną stronę: z Zendesk na oś czasu kontaktu w HubSpot. Jeśli potrzebujesz więcej, przepływy akcji (action flows) w Zendesk mogą tworzyć i aktualizować rekordy w HubSpot, aplikacje z Marketplace oferują synchronizację dwukierunkową, a rozwiązanie na zamówienie z webhookami i oboma API może przenosić dokładnie te dane, które wybierzesz.",
    keyFacts: [
      "Integracja Zendesk Support for HubSpot działa w jedną stronę: informacje o zgłoszeniach trafiają z Zendesk do HubSpot.",
      "Tworzy trzy triggery Zendesk – dla nowych zgłoszeń, rozwiązanych zgłoszeń i ocen CSAT – oraz webhook o nazwie HubSpot Integration.",
      "Zgłoszenia pojawiają się tylko na osi czasu kontaktu w HubSpot, a nie przy firmach czy transakcjach (deals), i synchronizowany jest tylko adres e-mail użytkownika.",
      "Przepływy akcji w Zendesk mają akcje HubSpot, które tworzą, aktualizują i wyszukują kontakty, firmy, transakcje i zgłoszenia.",
      "Zendesk przestał wydawać nowe tokeny API 27 października 2026, więc rozwiązania na zamówienie powinny korzystać z OAuth.",
    ],
    sections: [
      {
        heading: "Cztery sposoby połączenia HubSpot i Zendesk",
        blocks: [
          {
            type: "table",
            caption: "Opcje integracji HubSpot z Zendesk (dokumentacja dostawców i opisy aplikacji, sprawdzone w listopadzie 2026)",
            head: ["Opcja", "Kierunek", "Co przenosi"],
            rows: [
              ["Zendesk Support for HubSpot", "Tylko z Zendesk do HubSpot", "Zdarzenia dotyczące nowych zgłoszeń, rozwiązanych zgłoszeń i ocen CSAT, wysyłane na oś czasu kontaktu"],
              ["Przepływy akcji Zendesk z akcjami HubSpot", "Z Zendesk do HubSpot, krok po kroku", "Tworzy, aktualizuje i wyszukuje kontakty, firmy, transakcje i zgłoszenia"],
              ["Aplikacje z Marketplace", "Zależy od aplikacji; niektóre działają w obie strony", "Wszystko, co obsługuje aplikacja, np. kontakty lub transakcje"],
              ["Rozwiązanie na zamówienie z webhookami i oboma API", "W dowolnym kierunku", "Dokładnie te pola i zdarzenia, które wybierzesz"],
            ],
          },
          {
            type: "p",
            text: "Zacznij od pytania, na które Twój zespół próbuje odpowiedzieć. Jeśli handlowcy i opiekunowie kont potrzebują tylko widzieć w HubSpot historię wsparcia danego kontaktu, bezpłatna integracja może wystarczyć. Jeśli zgłoszenia mają zmieniać dane w HubSpot, np. właściwość firmy lub etap transakcji, potrzebujesz przepływów akcji, aplikacji albo rozwiązania na zamówienie.",
          },
        ],
      },
      {
        heading: "Konfiguracja bezpłatnej integracji Zendesk Support for HubSpot",
        blocks: [
          {
            type: "ol",
            items: [
              "Otwórz stronę instalacji integracji i wpisz swoją subdomenę Zendesk.",
              "Autoryzuj połączenie zarówno w Zendesk, jak i w HubSpot.",
              "Zendesk tworzy trzy triggery – dla nowych zgłoszeń, rozwiązanych zgłoszeń i ocen CSAT – oraz webhook o nazwie HubSpot Integration.",
              "Zmień warunki tych triggerów, jeśli chcesz, aby do HubSpot trafiała tylko część zgłoszeń.",
            ],
          },
          {
            type: "p",
            text: "Zendesk dokumentuje kilka ograniczeń. Integracja działa w jedną stronę, z Zendesk do HubSpot. Synchronizowany jest tylko adres e-mail użytkownika, bez imienia i nazwiska. Zgłoszenia są widoczne tylko na osi czasu kontaktu, a nie w rekordach firm czy transakcji. Możesz zmienić, które zgłoszenia są wysyłane, edytując warunki triggerów, ale nie możesz zmienić payloadu JSON. Aby wyłączyć integrację, dezaktywuj te trzy triggery.",
          },
          {
            type: "note",
            text: "Nie testuj webhooka HubSpot Integration z poziomu Admin Center. Zendesk ostrzega, że może to wysłać nieprawidłowy JSON i rozłączyć integrację. Zamiast tego testuj, tworząc lub rozwiązując prawdziwe zgłoszenie testowe.",
          },
        ],
      },
      {
        heading: "Przepływy akcji Zendesk z akcjami HubSpot",
        blocks: [
          {
            type: "p",
            text: "Przepływy akcji (action flows) to kreator Zendesk do wieloetapowych automatyzacji, które sięgają do systemów zewnętrznych. Konektor HubSpot dodaje następujące akcje:",
          },
          {
            type: "ul",
            items: [
              "Tworzenie i aktualizacja kontaktów, firm, transakcji i zgłoszeń w HubSpot.",
              "Wyszukiwanie kontaktów, firm, transakcji i zgłoszeń oraz wyszukiwanie użytkowników.",
              "Wyszukiwanie kontaktu po Contact ID lub adresie e-mail. Jeśli podasz oba, pierwszeństwo ma Contact ID.",
              "Połączenie przez OAuth 2.0 z 'External actions' na pasku bocznym kroku. Zendesk zaleca dedykowane konto serwisowe i automatycznie odświeża tokeny.",
            ],
          },
          {
            type: "p",
            text: "Przepływy akcji zużywają kredyty akcji (action credits). Zendesk podaje 100 000 akcji miesięcznie w Suite Professional i 225 000 w Suite Enterprise, wysyła e-mail przy 80% i 100% limitu i sprzedaje dodatkowe akcje w pakietach po 100 000. Administratorzy widzą zużycie w Admin Center w sekcji Account, następnie Usage, a potem Summary. Limity i dostępność w planach się zmieniają, więc sprawdź je na własnym koncie, zanim zaczniesz budować na przepływach akcji.",
          },
        ],
      },
      {
        heading: "Aplikacje do synchronizacji dwukierunkowej",
        blocks: [
          {
            type: "p",
            text: "Zendesk Marketplace zawiera aplikację Data sync by HubSpot, którą opisuje jako dwukierunkową synchronizację między HubSpot a Zendesk w czasie rzeczywistym. Do jej instalacji potrzebny jest Super Admin w HubSpot lub użytkownik z uprawnieniami do App Marketplace, który wpisuje subdomenę Zendesk, autoryzuje połączenie i wybiera, co synchronizować. Aplikacje firm trzecich, takie jak HubSpot CRM Connect, dodają własne funkcje. Opisy w Marketplace to strony marketingowe, więc zanim zaczniesz polegać na aplikacji, sprawdź na jej ekranie konfiguracji, które rekordy i pola naprawdę synchronizuje.",
          },
          {
            type: "p",
            text: "Dokumentacja synchronizacji danych HubSpot wyjaśnia, jak synchronizacje dwukierunkowe dopasowują rekordy: domyślnie kontakty są dopasowywane po adresie e-mail, a firmy po nazwie lub domenie, i synchronizowane są tylko kontakty z prawidłowym adresem e-mail. Zanim włączysz synchronizację dwukierunkową, uporządkuj zduplikowane kontakty i brakujące adresy e-mail, bo inaczej synchronizacja skopiuje bałagan do obu narzędzi.",
          },
        ],
      },
      {
        heading: "Rozwiązania na zamówienie z webhookami i oboma API",
        blocks: [
          {
            type: "p",
            text: "Rozwiązanie na zamówienie daje pełną kontrolę, np. pozwala pokazywać otwarte zgłoszenia w rekordach firm w HubSpot, czego bezpłatna integracja nie potrafi. Poniżej typowy schemat rozpisany na kroki. To nie jest studium przypadku TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: trigger Zendesk z akcją 'Notify by > Active webhook' wysyła ID zgłoszenia i e-mail zgłaszającego do n8n lub Make, gdy zgłoszenie zostanie utworzone lub zmieni się jego status.",
              "Weryfikacja: workflow sprawdza nagłówek X-Zendesk-Webhook-Signature, dzięki czemu przetwarzane są tylko prawdziwe żądania z Zendesk.",
              "Wyszukanie: workflow znajduje kontakt w HubSpot po adresie e-mail przez CRM API, a następnie firmę, z którą kontakt jest powiązany.",
              "Aktualizacja: zapisuje liczbę zgłoszeń lub najnowszy status we właściwości firmy, z której mogą korzystać listy, raporty i workflowy w HubSpot.",
              "Obsługa błędów: przy HTTP 429 odczekuje i ponawia żądanie, ponieważ zarówno Zendesk, jak i HubSpot limitują żądania API.",
            ],
          },
          {
            type: "p",
            text: "W drugą stronę workflow HubSpot może wywołać Twój endpoint akcją 'Send a webhook', którą HubSpot wymienia dla Data Hub Professional i Enterprise i która akceptuje tylko adresy URL HTTPS. Po stronie Zendesk używaj OAuth zamiast tokenów API. 27 października 2026 Zendesk przestał pozwalać istniejącym kontom na tworzenie nowych tokenów API, a 30 kwietnia 2027 wszystkie tokeny API przestaną działać. Klienci OAuth utworzeni 30 kwietnia 2026 lub później otrzymują tokeny dostępu, które domyślnie wygasają po 30 minutach, więc integracja musi obsługiwać tokeny odświeżania (refresh tokens).",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab łączy Zendesk i HubSpot przez API, webhooki, n8n i Make, na bazie narzędzi, których już używasz. Projekty Custom Automation kosztują {{price:custom}}. Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy integracja HubSpot z Zendesk działa w obie strony?",
        a: "Nie w przypadku bezpłatnej integracji Zendesk Support for HubSpot. Działa ona w jedną stronę i wysyła informacje o zgłoszeniach z Zendesk na oś czasu kontaktu w HubSpot. Do synchronizacji dwukierunkowej użyj aplikacji z Marketplace, takiej jak Data sync by HubSpot, albo rozwiązania na zamówienie.",
      },
      {
        q: "Czy mogę widzieć zgłoszenia z Zendesk przy firmach lub transakcjach w HubSpot?",
        a: "Nie z bezpłatną integracją, która pokazuje zgłoszenia tylko na osi czasu kontaktu. Możesz to zrobić rozwiązaniem na zamówienie, które zapisuje dane zgłoszeń we właściwościach firm lub transakcji przez HubSpot API.",
      },
      {
        q: "Dlaczego moja integracja z HubSpot rozłączyła się po przetestowaniu jej webhooka?",
        a: "Zendesk ostrzega, że testowanie webhooka HubSpot Integration z poziomu Admin Center może wysłać nieprawidłowy JSON i rozłączyć integrację. Zamiast tego testuj na prawdziwym zgłoszeniu.",
      },
      {
        q: "Czy nadal mogę używać tokena API Zendesk do integracji z HubSpot?",
        a: "Tylko takiego, który już masz. Zendesk przestał wydawać nowe tokeny API 27 października 2026, dezaktywuje tokeny nieużywane przez 30 dni i 30 kwietnia 2027 wyłączy wszystkie tokeny API. W nowych integracjach używaj OAuth.",
      },
    ],
    sources: [
      { label: "Zendesk Help — Setting up the Zendesk Support for HubSpot integration", url: "https://support.zendesk.com/hc/en-us/articles/4408884090650-Setting-up-the-Zendesk-Support-for-HubSpot-integration" },
      { label: "Zendesk Help — Using HubSpot actions in action flows", url: "https://support.zendesk.com/hc/en-us/articles/10917655354138-Using-HubSpot-actions-in-action-flows" },
      { label: "Zendesk Help — Monitoring the usage of action credits and action flow activity", url: "https://support.zendesk.com/hc/en-us/articles/10149993578522-Monitoring-the-usage-of-action-credits-and-action-flow-activity" },
      { label: "Zendesk Marketplace — Data sync by HubSpot", url: "https://www.zendesk.com/marketplace/apps/support/431348/data-sync-by-hubspot/" },
      { label: "Zendesk Marketplace — HubSpot CRM Connect", url: "https://www.zendesk.com/marketplace/apps/support/959977/hubspot-crm-connect/" },
      { label: "HubSpot Knowledge Base — Connect and use HubSpot data sync", url: "https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows", url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "Zendesk Help — Announcing the removal of API tokens as an authentication method for API requests", url: "https://support.zendesk.com/hc/en-us/articles/10851263566234-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests" },
      { label: "Zendesk Developer Docs — Working with OAuth refresh tokens", url: "https://developer.zendesk.com/documentation/api-basics/authentication/refresh-token/" },
    ],
    related: ["hubspot-service-hub-automation", "zendesk-automation", "n8n-zendesk-integration"],
    updated: "2026-11-03",
  },
  {
    key: "ai-lead-scoring",
    slug: "scoring-leadow-ai",
    category: "crm",
    navLabel: "Scoring leadów AI",
    primaryKeyword: "scoring leadów AI",
    title: "Scoring leadów AI: dopasowanie do ICP, HubSpot i Attio",
    description:
      "Scoring leadów AI w praktyce: ocena leadów względem profilu idealnego klienta (ICP), narzędzie lead scoringu HubSpot i zapisywanie wyników w Attio przez API.",
    h1: "Scoring leadów AI: jak działa ocena względem Twojego ICP",
    intro:
      "Scoring leadów zamienia surowe leady w uporządkowaną listę: każdy dostaje punkty za to, jak dobrze pasuje do Twojego profilu idealnego klienta (ICP), i za to, jak się zachowuje. AI wchodzi do gry na dwa sposoby: jako scoring natywny platformy, np. scoringi budowane przez AI w HubSpot, oraz jako klasyfikacja zewnętrzna, w której model czyta odpowiedź lub rekord wzbogacania danych, liczy wynik dopasowania i zapisuje go w CRM przez API.",
    keyFacts: [
      "Narzędzie lead scoringu HubSpot wymaga planu Marketing Hub lub Sales Hub Professional albo Enterprise; scoringi kontaktów budowane przez AI wymagają Marketing Hub Enterprise.",
      "Scoringi AI w HubSpot potrzebują próbki co najmniej 50 kontaktów – 25 skonwertowanych i 25 nieskonwertowanych – zanim wygenerują wynik.",
      "Attio nie ma dedykowanego narzędzia do scoringu: w planach Pro, Enterprise i Ultra atrybut formuły może automatycznie sumować punkty; w pozostałych planach atrybut liczbowy wypełnia workflow albo API.",
      "Atrybuty liczbowe w Attio przechowują liczby zmiennoprzecinkowe z dokładnością do czterech miejsc po przecinku – to wystarczy na wynik dopasowania 0–100.",
      "Zewnętrzny wynik zapisujesz w HubSpot żądaniem PATCH na /crm/v3/objects/contacts/{contactId}, a w Attio żądaniem PATCH na /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "Co oznacza scoring leadów AI",
        blocks: [
          {
            type: "p",
            text: "Modele scoringowe łączą zwykle dwa rodzaje sygnałów. Sygnały zaangażowania mierzą, co lead robi: otwarcia, kliknięcia, odpowiedzi, wizyty na stronie, umówione spotkania. Sygnały dopasowania mierzą, kim lead jest, w porównaniu z Twoim profilem idealnego klienta: branża, wielkość firmy, kraj, rola, używane narzędzia. Wynik dopasowania odpowiada na pytanie „czy powinniśmy chcieć tego leada?”, a wynik zaangażowania – „czy ten lead chce nas?”.",
          },
          {
            type: "p",
            text: "AI pojawia się w dwóch miejscach. CRM-y mają natywne scoringi oparte na uczeniu maszynowym, które uczą się na Twoich historycznych konwersjach – jak scoringi AI w HubSpot. A zespoły uruchamiają własną klasyfikację poza CRM-em: model językowy czyta odpowiedź z kampanii outreachowej lub rekord wzbogacania danych, nadaje etykietę (zainteresowany, nie teraz, niewłaściwa osoba) albo ocenia dopasowanie do ICP, a wynik trafia do pola w CRM przez API. Ten drugi wzorzec działa z każdym CRM-em, który ma API, i to na nim skupia się ta strona.",
          },
        ],
      },
      {
        heading: "Lead scoring w HubSpot",
        blocks: [
          {
            type: "p",
            text: "Scoring w HubSpot mieszka dziś w narzędziu lead scoringu. Jest ono dostępne w planach Marketing Hub lub Sales Hub Professional i Enterprise. Marketing Hub ocenia kontakty, oba huby oceniają firmy, a Sales Hub – deale. Możesz budować scoringi zaangażowania, scoringi dopasowania oparte na wartościach właściwości oraz scoringi łączone, każdy z grup ważonych kryteriów z punktami dodatnimi i ujemnymi.",
          },
          {
            type: "ul",
            items: [
              "Domyślne maksimum scoringu to 100 punktów; limit można ustawić na ±100, ±200, ±300, ±400, ±500, ±1 000 lub ±10 000.",
              "Wygaszanie scoringu może z czasem zmniejszać punkty zaangażowania, w odstępach co 1, 3, 6 lub 12 miesięcy, przy czym każdy miesiąc liczy się jako 30 dni.",
              "Progi dzielą wynik na przedziały High, Medium i Low; scoringi łączone używają macierzy A1–C3 dopasowania i zaangażowania.",
              "Scoringi kontaktów budowane przez AI (Marketing Hub Enterprise) uczą się na kontaktach, które przeszły między dwoma etapami cyklu życia, i potrzebują co najmniej 50 kontaktów – 25 skonwertowanych i 25 nieskonwertowanych.",
            ],
          },
          {
            type: "note",
            text: "Narzędzie tworzy własne właściwości score i są one związane ze scoringiem: usuniesz scoring – znikną też właściwości, a z zewnątrz nie da się ich edytować. Wynik AI liczony poza HubSpotem powinien więc trafiać do własnej właściwości liczbowej, którą tworzysz samodzielnie, a nie do właściwości zarządzanej przez narzędzie.",
          },
        ],
      },
      {
        heading: "Scoring w Attio",
        blocks: [
          {
            type: "p",
            text: "Attio podchodzi do tematu inaczej: nie ma dedykowanego narzędzia do scoringu ani typu pola score. W planach Pro, Enterprise i Ultra atrybut formuły (formula attribute) może wyliczać punktowy wynik z pól samego rekordu za pomocą warunków if(); formuła zwracająca liczbę staje się atrybutem liczbowym, przelicza się automatycznie, gdy zmieniają się pola, których używa, i nie zużywa kredytów przestrzeni roboczej. W pozostałych przypadkach wynik to po prostu atrybut, który wypełniasz: oficjalny szablon workflow „MQL Scoring” ocenia leady blokami workflow, a strona automatyzacji Attio wymienia „Scoring Agent” wśród agentów AI działających w workflowach – to krok agenta z instrukcjami, nie osobny produkt do scoringu. Do wyniku, który wypełniasz samodzielnie, pasują trzy typy atrybutów:",
          },
          {
            type: "ul",
            items: [
              "Atrybut liczbowy przechowuje liczby zmiennoprzecinkowe z dokładnością do czterech miejsc po przecinku i można go filtrować porównaniami typu „większe lub równe” – to naturalne miejsce na wynik dopasowania 0–100.",
              "Atrybut select przechowuje zdefiniowane opcje – dobre na przedziały takie jak A, B i C. Zapis wartości, dla której opcja nie istnieje, zwraca błąd zamiast tworzyć nową opcję.",
              "Atrybut rating to wartość liczbowa od 0 do 5, pokazywana jako gwiazdki.",
            ],
          },
          {
            type: "p",
            text: "Workflowy są dostępne we wszystkich planach Attio. Workflow może startować od zmiany rekordu, harmonogramu lub triggera „Webhook received”, więc zewnętrzny mechanizm scoringu może uruchomić go bezpośrednio; blok „Custom agent” może wykonać krok AI ze strukturalnym wynikiem, a następujący po nim blok aktualizacji rekordu zapisuje go. Wychodzące webhooki są podpisywane HMAC-SHA256 treści żądania w nagłówku Attio-Signature, więc Twój mechanizm scoringu może też bezpiecznie reagować na zdarzenia z Attio.",
          },
        ],
      },
      {
        heading: "Zapisywanie zewnętrznego wyniku AI w CRM",
        blocks: [
          {
            type: "table",
            caption: "Zapis wyniku przez API (dokumentacja dostawców, sprawdzona w listopadzie 2026)",
            head: ["Krok", "HubSpot", "Attio"],
            rows: [
              [
                "Utworzenie pola",
                "POST /crm/v3/properties/{objectType} z polami groupName, name, label, type \"number\", fieldType \"number\"",
                "Utworzenie atrybutu liczbowego lub select na obiekcie w ustawieniach przestrzeni roboczej albo przez API atrybutów",
              ],
              [
                "Zapis jednego rekordu",
                "PATCH /crm/v3/objects/contacts/{contactId} z {\"properties\": {...}}; można użyć adresu e-mail z idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} ze slugiem atrybutu w treści żądania",
              ],
              [
                "Zapis hurtowy",
                "POST /crm/v3/objects/contacts/batch/update albo batch/upsert, aby utworzyć lub zaktualizować",
                "Jedno żądanie na rekord, w ramach limitów API",
              ],
              [
                "Autoryzacja",
                "Token dostępu prywatnej aplikacji jako token Bearer",
                "Klucz API przestrzeni roboczej lub OAuth 2.0, jako token Bearer; aktualizacja rekordów wymaga uprawnień record_permission:read-write i object_configuration:read",
              ],
            ],
          },
          {
            type: "p",
            text: "Typowy pipeline, rozpisany na kroki. Pokazuje, jak elementy do siebie pasują. To nie jest studium przypadku TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Zbierz: nowy lead przychodzi z formularza, odpowiedzi outreachowej lub narzędzia identyfikacji odwiedzających.",
              "Sklasyfikuj: model AI nadaje etykietę odpowiedzi lub leadowi (zainteresowany, niezainteresowany, niewłaściwa osoba, poza rynkiem).",
              "Oceń: dane firmograficzne leada są porównywane z Twoim ICP i powstaje wynik dopasowania.",
              "Zapisz: wynik trafia do własnej właściwości liczbowej w HubSpot lub atrybutu liczbowego w Attio, przez endpointy z tabeli powyżej.",
              "Powiadom: workflow w CRM lub wiadomość na Slacku informuje opiekuna, gdy lead przekroczy próg.",
            ],
          },
        ],
      },
      {
        heading: "Skąd biorą się odpowiedzi: lemlist",
        blocks: [
          {
            type: "p",
            text: "Odpowiedzi z kampanii outreachowych to jeden z najsilniejszych sygnałów scoringowych, a lemlist udostępnia je na dwa sposoby. Webhooki wysyłają w czasie rzeczywistym wywołania POST dla zdarzeń takich jak emailsReplied, linkedinReplied i whatsappReplied oraz stanów leada takich jak interested i notInterested; przestrzeń robocza może mieć do 200 webhooków, a każdy adres docelowy musi być unikalny – zarejestruj adres bez typu zdarzenia, aby odbierać wszystkie zdarzenia i filtrować po swojej stronie. API aktywności (GET /activities) zwraca tę samą historię filtrowaną po typie, kampanii i dacie – do odpytywania zamiast otrzymywania powiadomień. Uwierzytelnianie to HTTP Basic z pustą nazwą użytkownika i kluczem API jako hasłem – nie token Bearer.",
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje dokładnie taki pipeline: leady z jednego źródła klasyfikowane i oceniane przez AI względem Twojego ICP i zapisywane w Twoim CRM – jako pakiet Lead Capture & Scoring ({{price:leadScoring}}, płatność jednorazowa). Połączenie narzędzi outreachowych, telefonicznych lub wzbogacania danych z HubSpotem albo Attio to pakiet CRM Integration ({{price:crmIntegration}}, płatność jednorazowa). Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czym jest scoring leadów AI?",
        a: "To ranking leadów łączący sygnały zaangażowania (co lead robi) z sygnałami dopasowania (jak pasuje do Twojego profilu idealnego klienta). AI jest albo wbudowane w CRM – jak scoringi AI w HubSpot – albo działa poza nim, klasyfikując odpowiedzi i licząc wynik dopasowania zapisywany z powrotem przez API.",
      },
      {
        q: "Czego wymaga narzędzie lead scoringu HubSpot?",
        a: "Planu Marketing Hub lub Sales Hub Professional albo Enterprise. Scoringi kontaktów budowane przez AI wymagają Marketing Hub Enterprise i co najmniej 50 kontaktów – 25 skonwertowanych i 25 nieskonwertowanych – aby wygenerować wynik.",
      },
      {
        q: "Czy Attio ma wbudowany scoring leadów?",
        a: "Nie ma dedykowanego narzędzia do scoringu ani typu pola score. W planach Pro, Enterprise i Ultra atrybut formuły może automatycznie wyliczać punktowy wynik; w pozostałych przypadkach wyniki mieszkają w atrybutach liczbowych lub select, wypełnianych przez workflowy – w tym kroki agentów AI, które Attio reklamuje jako Scoring Agent – albo przez zewnętrzne narzędzie przez API.",
      },
      {
        q: "Jak zapisać wynik w HubSpot lub Attio z zewnątrz?",
        a: "HubSpot: utwórz własną właściwość liczbową, a potem wyślij PATCH na /crm/v3/objects/contacts/{contactId} albo użyj endpointów batch update i upsert. Attio: PATCH na /v2/objects/{object}/records/{record_id} z tokenem Bearer z uprawnieniami record_permission:read-write i object_configuration:read.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Help — Formula attributes", url: "https://attio.com/help/reference/managing-your-data/attributes/formula-attributes" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-13",
  },
  {
    key: "website-visitor-identification",
    slug: "identyfikacja-odwiedzajacych-strone",
    category: "crm",
    navLabel: "Identyfikacja odwiedzających",
    primaryKeyword: "identyfikacja firm odwiedzających stronę",
    title: "Identyfikacja odwiedzających stronę: jak działa, limity",
    description:
      "Jak działa identyfikacja firm odwiedzających stronę: reverse IP i trackery, co widzi, a czego nie, zasady RODO i zgody na cookies oraz buyer intent w HubSpot.",
    h1: "Identyfikacja odwiedzających stronę: jak działa i jakie ma granice",
    intro:
      "Narzędzia do identyfikacji odwiedzających dopasowują anonimowy ruch na Twojej stronie do firm – za pomocą skryptu śledzącego, odwrotnego wyszukiwania adresu IP i baz danych o firmach. Identyfikują firmy, nie osoby, ich skuteczność zależy od sieci, z których przeglądają Twoi odwiedzający, a w UE podlegają wprost zasadom RODO i zgody na cookies.",
    keyFacts: [
      "Identyfikacja łączy skrypt śledzący, cookies, odwrotne wyszukiwanie adresu IP, prywatne bazy danych i uczenie maszynowe – dopasowuje wizyty do firm, nie do konkretnych osób.",
      "Leadfeeder od Dealfront wprost odmawia podawania typowej skuteczności identyfikacji: pokrycie zależy od odbiorców, a wizyty z sieci konsumenckich dostawców internetu są odfiltrowywane i niewidoczne.",
      "Pracownicy zdalni są identyfikowalni głównie wtedy, gdy przeglądają stronę przez firmowy VPN.",
      "TSUE orzekł w sprawie Breyer (C-582/14), że dynamiczny adres IP może być danymi osobowymi dla operatora strony, a motyw 30 RODO wymienia adresy IP wśród identyfikatorów internetowych.",
      "Buyer intent w HubSpot dopasowuje wizyty do adresów IP znanych firm; podgląd ponad 20 firm w widoku wymaga HubSpot Credits i płatnej subskrypcji.",
    ],
    sections: [
      {
        heading: "Jak identyfikowane są firmy",
        blocks: [
          {
            type: "p",
            text: "Mechanizm – tak, jak opisuje go centrum pomocy Leadfeeder (Dealfront) dla własnego trackera: skrypt na Twojej stronie rejestruje każdą wizytę, a identyfikacja łączy cookies śledzące, odwrotne wyszukiwanie adresu IP, prywatne bazy danych, dane analityczne i uczenie maszynowe. Firma zwykle jest właścicielem swojej domeny i biurowej puli adresów IP, więc wizytę z takiej sieci można dopasować do firmy. Geolokalizacja po IP dodaje region odwiedzającego.",
          },
          {
            type: "p",
            text: "Ruch, którego nie da się dopasować do firmy, jest pomijany: Leadfeeder deklaruje, że nie pobiera opłat za wizyty z konsumenckich sieci dostawców internetu – ani ich nawet nie pokazuje. Widzisz zidentyfikowany wycinek swojego ruchu, nie całość.",
          },
        ],
      },
      {
        heading: "Czego nie widzi",
        blocks: [
          {
            type: "ul",
            items: [
              "Konkretnych osób. Leadfeeder zaznacza, że nie da się ustalić, kto dokładnie odwiedził stronę, jeśli odwiedzający sam się nie ujawni przez formularz lub rejestrację, a identyfikowanie pojedynczych odwiedzających jest w wielu krajach uznawane za nielegalne.",
              "Większości ruchu z domów. Pracownicy zdalni są identyfikowalni głównie przez firmowy VPN; na łączu konsumenckim wyglądają jak ruch od dostawcy internetu i są odfiltrowywani.",
              "Gwarantowanego procentu. Centrum pomocy Leadfeeder pisze, że nie da się uczciwie obiecać skuteczności identyfikacji, bo zależy ona od odbiorców każdej strony – i ostrzega, że usługi obiecujące stały procent zwykle ekstrapolują z kilku kont.",
            ],
          },
        ],
      },
      {
        heading: "RODO i zgoda na cookies",
        blocks: [
          {
            type: "p",
            text: "W UE obowiązują dwie osobne zasady. Po pierwsze, adresy IP mogą być danymi osobowymi: art. 4 pkt 1 RODO zalicza do danych osobowych identyfikatory internetowe, motyw 30 wymienia wśród nich adresy IP i identyfikatory cookies, a Trybunał Sprawiedliwości orzekł w sprawie Breyer (C-582/14, rozstrzygniętej na gruncie dyrektywy poprzedzającej RODO), że dynamiczny adres IP stanowi dane osobowe dla operatora strony, który ma prawne środki, by powiązać go z odwiedzającym za pośrednictwem dostawcy dostępu.",
          },
          {
            type: "p",
            text: "Po drugie, art. 5 ust. 3 dyrektywy ePrivacy wymaga zgody na przechowywanie informacji na urządzeniu odwiedzającego lub uzyskiwanie do nich dostępu – z wąskimi wyjątkami dla tego, co ściśle niezbędne do świadczenia usługi, o którą odwiedzający poprosił. Tracker identyfikujący odwiedzających, który zapisuje lub odczytuje cookies, podlega tej zasadzie niezależnie od tego, czy dane są osobowe – dlatego w UE takie narzędzia powinny działać za banerem zgody na cookies.",
          },
          {
            type: "note",
            text: "To opis zasad na ogólnym poziomie. To nie jest porada prawna; jak zasady stosują się do Twojej konfiguracji, zależy od narzędzi i podstawy prawnej.",
          },
        ],
      },
      {
        heading: "Identyfikacja odwiedzających w HubSpot",
        blocks: [
          {
            type: "p",
            text: "Obecna funkcja HubSpot w tym obszarze to buyer intent. Kod śledzący HubSpot na Twojej stronie zbiera dane o odwiedzających, takie jak aktywność na stronie i adresy IP, a buyer intent łączy anonimowych odwiedzających z adresami IP znanych firm. Co dokumentuje HubSpot, według stanu na październik 2026:",
          },
          {
            type: "ul",
            items: [
              "Funkcja jest wymieniona dla subskrypcji Starter, Professional i Enterprise, przy czym niektóre możliwości wymagają HubSpot Credits.",
              "Podgląd ponad 20 firm w widoku wymaga HubSpot Credits i płatnej subskrypcji; dodawanie firm i śledzenie ich sygnałów intencji zużywa kredyty, a filtry i wykluczenia nie.",
              "Filtry zakresu wizyt obejmują najwyżej ostatnie 90 dni, a firmy dodane z buyer intent dostają źródło rekordu „Buyer-Intent”.",
              "Artykuł HubSpot sam zaznacza, że zgodność z przepisami o ochronie danych może wymagać banera zgody na cookies na Twojej stronie.",
            ],
          },
        ],
      },
      {
        heading: "Od zidentyfikowanej firmy do ocenionego leada",
        blocks: [
          {
            type: "p",
            text: "Sama identyfikacja daje tylko listę. Wartość powstaje w kolejnych krokach – typowy schemat rozpisany na kroki. Pokazuje, jak elementy do siebie pasują. To nie jest studium przypadku TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Zidentyfikuj: tracker raportuje, które firmy odwiedziły stronę i co oglądały.",
              "Wzbogać: każda firma jest sprawdzana pod kątem wielkości, branży i kraju.",
              "Oceń: firma jest porównywana z Twoim profilem idealnego klienta i dostaje wynik dopasowania.",
              "Zapisz: firma i jej wynik trafiają do Twojego CRM – rekordu firmy w HubSpot lub rekordu w Attio.",
              "Podsumuj: zaplanowane podsumowanie, posortowane po wyniku, trafia na e-mail lub Slacka, żeby sprzedaż widziała najlepsze firmy jako pierwsze.",
            ],
          },
        ],
      },
      {
        heading: "Wdrożenie",
        blocks: [
          {
            type: "p",
            text: "TascaLab buduje to jako pakiet Lead Capture & Scoring ({{price:leadScoring}}, płatność jednorazowa): leady z jednego źródła – odwiedzający stronę, formularz lub odpowiedzi outreachowe – klasyfikowane i oceniane przez AI oraz zapisywane w Twoim CRM, z powiadomieniami na e-mail lub Slacka. Połączenie otaczających narzędzi z HubSpotem albo Attio to pakiet CRM Integration ({{price:crmIntegration}}, płatność jednorazowa). Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy identyfikacja odwiedzających powie mi, kto odwiedził moją stronę?",
        a: "Identyfikuje firmy – po ich sieciach – a nie osoby. Dostawcy zaznaczają, że ustalenie, kto dokładnie odwiedził stronę, wymaga, by odwiedzający sam się ujawnił przez formularz lub rejestrację, a identyfikowanie pojedynczych osób jest w wielu krajach uznawane za nielegalne.",
      },
      {
        q: "Jaki odsetek odwiedzających da się zidentyfikować?",
        a: "Nie ma uczciwego stałego procentu. Centrum pomocy Leadfeeder odmawia publikowania takiej liczby, bo pokrycie zależy od odbiorców danej strony; ruch z konsumenckich sieci dostawców internetu jest całkowicie odfiltrowywany, a pracownicy zdalni są identyfikowalni głównie na firmowym VPN.",
      },
      {
        q: "Czy identyfikacja po adresie IP jest legalna w świetle RODO?",
        a: "Adresy IP mogą być danymi osobowymi (Breyer, C-582/14; motyw 30 RODO), a trackery zapisujące lub odczytujące cookies wymagają zgody na podstawie art. 5 ust. 3 dyrektywy ePrivacy – dlatego w UE takie narzędzia powinny działać za banerem zgody. To nie jest porada prawna.",
      },
      {
        q: "Czego wymaga buyer intent w HubSpot?",
        a: "Kodu śledzącego HubSpot na stronie oraz subskrypcji Starter, Professional lub Enterprise. Podgląd ponad 20 firm w widoku wymaga HubSpot Credits, dodawanie firm i śledzenie sygnałów intencji zużywa kredyty, a filtry wizyt obejmują najwyżej ostatnie 90 dni.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
