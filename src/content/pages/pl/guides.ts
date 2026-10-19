import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-porownanie",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier do automatyzacji obsługi klienta",
    title: "n8n vs Make vs Zapier do automatyzacji obsługi (2026)",
    description:
      "n8n vs Make vs Zapier w automatyzacji obsługi klienta: licencje i hosting, liczenie użycia, konektory Zendesk, Freshdesk, Jira i Slack, webhooki i kod.",
    h1: "n8n vs Make vs Zapier do automatyzacji obsługi klienta",
    intro:
      "Największe różnice między n8n, Make i Zapierem w pracy wsparcia dotyczą tego, gdzie działają i jak liczą użycie. n8n można hostować samodzielnie na licencji Sustainable Use License albo korzystać z n8n Cloud, natomiast Make i Zapier działają jako usługi hostowane. Wszystkie trzy łączą się z Zendesk, Freshdesk, Jira i Slackiem, przyjmują webhooki i mają krok z kodem, więc wybór zwykle sprowadza się do lokalizacji danych, wolumenu i tego, ile niestandardowej logiki potrzebujesz.",
    keyFacts: [
      "Samodzielnie hostowane oprogramowanie n8n jest objęte Sustainable Use License – licencją typu fair-code, którą n8n stworzyło w 2022 roku. n8n nie nazywa siebie open source.",
      "Według stanu na październik 2026 n8n liczy wykonania (executions – jedno uruchomienie workflow), Make liczy kredyty (credits – operacje przeliczone 1:1), a Zapier liczy zadania (tasks – udane kroki akcji).",
      "Triggery Zapiera oraz kroki Filter i Paths nie zużywają zadań. Moduły triggerów w Make zużywają 1 kredyt na uruchomienie, nawet gdy nie znajdą nowych danych.",
      "Make pozwala wybrać centrum danych w USA lub UE przy tworzeniu organizacji. Później nie można tego zmienić.",
      "Wszystkie trzy mają trigger webhook i krok z kodem, który uruchamia JavaScript lub Python.",
    ],
    sections: [
      {
        heading: "Porównanie obok siebie",
        blocks: [
          {
            type: "p",
            text: "Tabela podsumowuje to, co mówi własna dokumentacja każdego dostawcy, sprawdzona w październiku 2026 roku. Ceny celowo pominięto. Plany często się zmieniają, więc przed decyzją sprawdź aktualny cennik.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier do automatyzacji obsługi klienta (stan na październik 2026)",
            head: ["Cecha", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Gdzie działa",
                "n8n Cloud (zarządzane przez n8n) lub samodzielnie hostowane na Twoim własnym komputerze lub infrastrukturze",
                "We własnych centrach danych Make. Dla każdej organizacji wybierasz USA lub UE",
                "W zarządzanej chmurze Zapiera. Brak wersji self-hosted lub on-premises",
              ],
              [
                "Licencja",
                "Sustainable Use License (fair-code) dla oprogramowania hostowanego samodzielnie",
                "Usługa hostowana na warunkach Make",
                "Usługa hostowana na warunkach Zapiera",
              ],
              [
                "Jednostka użycia",
                "Executions: jedno wykonanie to jedno uruchomienie workflow",
                "Credits: większość modułów zużywa 1 kredyt na operację",
                "Tasks: jedno zadanie na każdy udany krok akcji",
              ],
              [
                "Konektory helpdesków",
                "Nody Zendesk (plus Zendesk Trigger), Freshdesk, Jira Software i Slack",
                "Aplikacje Zendesk, Freshdesk, Jira Cloud Platform i Slack",
                "Aplikacje Zendesk, Freshdesk, Jira Service Management i Slack",
              ],
              [
                "Trigger webhook",
                "Node Webhook z osobnymi adresami URL: testowym i produkcyjnym",
                "Moduł Custom webhook w aplikacji Webhooks",
                "Webhooks by Zapier: Catch Hook i Catch Raw Hook",
              ],
              [
                "Krok z kodem",
                "Node Code: JavaScript lub Python",
                "Aplikacja Make Code: JavaScript lub Python",
                "Code by Zapier: JavaScript (Node.js 22) lub Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Hosting i licencje",
        blocks: [
          {
            type: "p",
            text: "n8n daje dwie opcje. n8n Cloud to zarządzana instancja, którą n8n uruchamia za Ciebie. Self-hosting oznacza uruchamianie n8n na własnym komputerze lub własnej infrastrukturze. W większości instalacji self-hosted dokumentacja zaleca Dockera. Jeśli nie masz doświadczenia w zarządzaniu serwerami, zaleca zamiast tego n8n Cloud.",
          },
          {
            type: "p",
            text: "Samodzielnie hostowane oprogramowanie jest objęte Sustainable Use License – licencją fair-code, którą n8n stworzyło w 2022 roku. Możesz używać oprogramowania, modyfikować je, tworzyć utwory zależne i je redystrybuować, ale z ograniczeniami. Użycie jest ograniczone do wewnętrznych celów biznesowych albo do zastosowań niekomercyjnych lub osobistych, a rozpowszechniać je możesz tylko bezpłatnie i w celach niekomercyjnych. Definicja Open Source Initiative nie dopuszcza ograniczeń użycia, dlatego n8n nie nazywa siebie open source. Pliki z „.ee.” w nazwie są objęte osobną licencją n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make uruchamia Twoje scenariusze we własnych centrach danych. Przy tworzeniu organizacji wybierasz Stany Zjednoczone lub Unię Europejską. To ustawienie decyduje, gdzie Twoje dane są przechowywane i przetwarzane, i nie można go później zmienić.",
          },
          {
            type: "p",
            text: "Zapier działa we własnej zarządzanej chmurze. W porównaniu Zapiera z n8n czytamy, że Zapier nie może w pełni zastąpić n8n w automatyzacjach, które ze względów zgodności (compliance) muszą działać w środowisku self-hosted, odizolowanym (air-gapped) lub on-premises.",
          },
          {
            type: "note",
            text: "To podsumowanie licencji n8n, a nie jej interpretacja. Jeśli planujesz wbudować n8n w produkt, który sprzedajesz, najpierw przeczytaj pełny tekst licencji i ograniczenia użycia.",
          },
        ],
      },
      {
        heading: "Jak każde narzędzie liczy użycie (stan na październik 2026)",
        blocks: [
          {
            type: "p",
            text: "Trzy produkty używają różnych jednostek rozliczeniowych, więc nie da się bezpośrednio porównać limitów ich planów. Oto jak każdy dostawca definiuje swoją jednostkę.",
          },
          {
            type: "ul",
            items: [
              "Wykonania w n8n: n8n definiuje wykonanie (execution) jako jedno uruchomienie workflow. Płatne plany, w chmurze lub self-hosted, mają limit wykonań, a wliczają się do niego tylko wykonania produkcyjne. Ręczne uruchomienia z edytora się nie liczą. Schedule Trigger liczy się przy każdym uruchomieniu. Każde przychodzące żądanie webhooka, które uruchamia workflow, liczy się raz.",
              "Kredyty w Make: od 27 sierpnia 2025 roku Make rozlicza się w kredytach, a dotychczasowe operacje zostały przeliczone 1:1. Operacja to jedno uruchomienie modułu, który przetwarza lub sprawdza dane. Większość aplikacji zużywa 1 kredyt na operację. Moduły triggerów zużywają 1 kredyt na uruchomienie, nawet gdy nie znajdą nowych danych. Przy dostawcy AI od Make funkcje AI zużywają kredyty na podstawie operacji i tokenów. Jeśli podłączysz własnego dostawcę AI, kredyty pokrywają operacje, a za tokeny płacisz temu dostawcy.",
              "Zadania w Zapierze: Zapier nalicza zadanie (task) za każdym razem, gdy krok akcji wykona się pomyślnie. Triggery nigdy nie zużywają zadań, podobnie jak kroki Filter i Paths. Kroki, które zakończą się błędem lub zatrzymaniem, się nie liczą. Niektóre produkty, np. kroki AI by Zapier, są liczone według wyższej stawki.",
            ],
          },
          {
            type: "p",
            text: "Te jednostki mają znaczenie dla bota wsparcia, który działa przy każdym nowym zgłoszeniu lub wiadomości na czacie. W n8n nawet długi workflow liczy się jako jedno wykonanie na uruchomienie. W Make każdy uruchomiony moduł zużywa kredyty. W Zapierze każdy udany krok akcji to zadanie. W Make scenariusz, który według harmonogramu odpytuje Twój helpdesk, zużywa kredyty, nawet gdy nic się nie zmieniło. Natychmiastowe triggery oparte na webhookach pozwalają nie płacić za takie puste sprawdzenia.",
          },
        ],
      },
      {
        heading: "Konektory Zendesk, Freshdesk, Jira i Slack",
        blocks: [
          {
            type: "p",
            text: "Wszystkie trzy narzędzia mają gotowe konektory do tych czterech systemów, ale różnią się nazwami i zakresem. Zanim się zdecydujesz, sprawdź, czy istnieje dokładnie ten trigger i ta akcja, których potrzebujesz.",
          },
          {
            type: "ul",
            items: [
              "n8n: jest node Zendesk z osobnym node'em Zendesk Trigger. Node Freshdesk obsługuje zgłoszenia i kontakty. Node Jira Software obsługuje zgłoszenia (issues), komentarze i załączniki. Node Slack obsługuje wiadomości, kanały, pliki i reakcje, a jego operacja „Send and Wait for Response” umożliwia przepływy zatwierdzania. Jeśli node nie obsługuje danej operacji, dokumentacja sugeruje wywołanie API przez node HTTP Request z użyciem tych samych poświadczeń.",
              "Make: aplikacja Zendesk zawiera moduły obserwujące zgłoszenia i aktywność w zgłoszeniach. Działają jako natychmiastowe triggery przez webhook, który tworzysz w Zendesk. Aplikacja Freshdesk obsługuje zgłoszenia, konwersacje, kontakty i firmy, a także oferuje natychmiastowe triggery oparte na webhookach. Make ma też aplikację Jira Cloud Platform i aplikację Slack.",
              "Zapier: aplikacja Jira Service Management ma triggery dla nowych i zaktualizowanych żądań oraz akcję tworzącą żądania. Zapier oferuje gotowe Zapy łączące ją z Zendesk i Slackiem. Aplikacja Freshdesk łączy się ze Slackiem i Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooki i kroki z kodem",
        blocks: [
          {
            type: "p",
            text: "Webhooki pozwalają helpdeskowi lub kanałowi czatu uruchomić automatyzację w chwili, gdy coś się wydarzy. Kroki z kodem obsługują logikę, której nie pokrywają wbudowane kroki, np. przekształcenie payloadu albo wywołanie API bez konektora.",
          },
          {
            type: "ul",
            items: [
              "Node Webhook w n8n: każdy node Webhook dostaje dwa adresy URL – Test URL i Production URL. Może odpowiedzieć od razu, po zakończeniu ostatniego node'a albo przez osobny node Respond to Webhook.",
              "Aplikacja Webhooks w Make: moduł Custom webhook tworzy unikalny URL dla jednego scenariusza i nie można współdzielić tego samego webhooka między scenariuszami. Moduł Webhook response określa, co otrzyma wywołujący. Bez niego domyślną odpowiedzią jest tekst „Accepted”.",
              "Webhooks by Zapier: Catch Hook daje unikalny URL, na który druga aplikacja wysyła żądania, i parsuje treść żądania. Catch Raw Hook zwraca treść bez parsowania, razem z nagłówkami. Retrieve Poll działa w drugą stronę i pobiera dane żądaniem GET.",
              "Node Code w n8n: uruchamia JavaScript lub Python, albo raz dla wszystkich przychodzących elementów (domyślnie), albo raz dla każdego elementu. W n8n Cloud opcja Python nie pozwala importować bibliotek.",
              "Aplikacja Make Code: moduł Run code uruchamia JavaScript lub Python i zawiera kilka wbudowanych bibliotek. Dokumentacja Make podaje, że importowanie własnych bibliotek wymaga planu Enterprise.",
              "Code by Zapier: kroki z kodem mogą być triggerami lub akcjami i obsługują JavaScript (Node.js 22) i Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Które narzędzie pasuje do Twojego zespołu wsparcia",
        blocks: [
          {
            type: "ul",
            items: [
              "Dane zgłoszeń muszą zostać na infrastrukturze, którą kontrolujesz: n8n jako jedyne z tych trzech narzędzi dokumentuje opcję self-hosted.",
              "Chcesz narzędzia hostowanego z przechowywaniem danych w UE ustawianym na poziomie organizacji: zapewnia to opcja centrum danych w UE w Make.",
              "Twój zespół już korzysta z Zapiera, a Twoje przepływy są krótkie: triggery i filtry nie zużywają zadań, więc proste powiadomienia pozostają tanie.",
              "Twoje workflowy mają wiele kroków i działają przy każdym zgłoszeniu: porównaj wykonania n8n liczone na uruchomienie z kredytami lub zadaniami liczonymi na krok przy Twoim rzeczywistym wolumenie.",
            ],
          },
          {
            type: "p",
            text: "TascaLab buduje automatyzacje wsparcia na narzędziach, których już używasz (Zendesk, Freshdesk, Jira, Slack i narzędzia wewnętrzne), z wykorzystaniem API, webhooków, Make i n8n. Większość wdrożeń trwa od 1 do 3 tygodni. Każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy n8n jest open source?",
        a: "n8n udostępnia swoje oprogramowanie na licencji Sustainable Use License, którą nazywa fair-code. Ponieważ licencja ogranicza sposób używania oprogramowania, n8n deklaruje, że nie nazywa siebie open source.",
      },
      {
        q: "Czy mogę hostować Make lub Zapier samodzielnie?",
        a: "Make uruchamia scenariusze we własnym centrum danych w USA lub UE, które wybierasz przy tworzeniu organizacji. Zapier działa w swojej zarządzanej chmurze i podaje, że nie może w pełni zastąpić n8n tam, gdzie automatyzacje muszą działać w środowisku self-hosted lub on-premises.",
      },
      {
        q: "Czy triggery Zapiera zużywają zadania?",
        a: "Nie. Zapier nalicza zadanie za każdym razem, gdy krok akcji wykona się pomyślnie. Triggery oraz kroki Filter i Paths nie zużywają zadań.",
      },
      {
        q: "Czy trigger w Make zużywa kredyty, gdy nie ma nic nowego?",
        a: "Tak. Według centrum pomocy Make moduły triggerów zużywają 1 kredyt na uruchomienie, nawet gdy nie znajdą nowych danych. Natychmiastowe triggery oparte na webhookach pozwalają uniknąć takich pustych uruchomień.",
      },
      {
        q: "Co liczy się jako wykonanie w n8n?",
        a: "Jedno uruchomienie workflow. W płatnych planach do limitu wliczają się tylko wykonania produkcyjne. Ręczne uruchomienia z edytora się nie wliczają.",
      },
    ],
    sources: [
      { label: "n8n Docs — Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Executions", url: "https://docs.n8n.io/workflows/executions/" },
      { label: "n8n Docs — Integrations (Zendesk, Freshdesk, Jira Software, Slack and Webhook nodes)", url: "https://docs.n8n.io/integrations" },
      { label: "n8n Docs — Code node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code" },
      { label: "Make Help Center — Credits & operations", url: "https://help.make.com/credits-and-operations" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "Make Apps Documentation — Webhooks", url: "https://apps.make.com/gateway" },
      { label: "Make Apps Documentation — Make Code", url: "https://apps.make.com/code" },
      { label: "Make Apps Documentation — Zendesk", url: "https://apps.make.com/zendesk" },
      { label: "Make Apps Documentation — Freshdesk", url: "https://apps.make.com/freshdesk" },
      { label: "Make — Jira Cloud Platform and Slack integration", url: "https://www.make.com/en/integrations/jira/slack" },
      { label: "Zapier Help Center — How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "Zapier Help Center — Trigger Zap workflows from webhooks", url: "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks" },
      { label: "Zapier Help Center — Using Code by Zapier", url: "https://help.zapier.com/hc/en-us/articles/45405528551181-Using-Code-by-Zapier" },
      { label: "Zapier — Jira Service Management integrations", url: "https://zapier.com/apps/jira-service-management/integrations" },
      { label: "Zapier — Freshdesk integrations", url: "https://zapier.com/apps/freshdesk/integrations" },
      { label: "Zapier — Zapier vs. n8n comparison", url: "https://zapier.com/blog/n8n-vs-zapier/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "what-is-customer-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "ai-act-chatboty-obowiazki",
    category: "guides",
    navLabel: "AI Act: obowiązki dla chatbotów",
    primaryKeyword: "AI Act chatbot obowiązki",
    title: "AI Act a chatboty: art. 50 i kluczowe daty",
    description:
      "AI Act a chatboty: czego wymaga art. 50, kto jest dostawcą, a kto podmiotem stosującym, kluczowe daty i co zmienił Digital Omnibus on AI z 2026 roku.",
    h1: "AI Act a chatboty: czego wymaga art. 50 i od kiedy",
    intro:
      "Zgodnie z AI Act (rozporządzenie (UE) 2024/1689) dostawcy muszą projektować systemy AI przeznaczone do bezpośredniej interakcji z ludźmi, takie jak chatboty, tak, aby osoby te były informowane, że wchodzą w interakcję z systemem AI, chyba że jest to oczywiste z kontekstu. Ten obowiązek wynika z art. 50 i ma zastosowanie od 2 sierpnia 2026. Digital Omnibus on AI z 2026 roku przesunął terminy dla systemów wysokiego ryzyka, ale Komisja nadal podaje 2 sierpnia 2026 jako datę rozpoczęcia stosowania art. 50.",
    keyFacts: [
      "Art. 50 ust. 1: dostawcy muszą zapewnić, aby ludzie byli informowani, że wchodzą w interakcję z systemem AI, chyba że jest to oczywiste z kontekstu.",
      "Art. 50 ust. 5: informacje muszą być przekazane w jasny i wyraźny sposób, najpóźniej w momencie pierwszej interakcji.",
      "AI Act wszedł w życie 1 sierpnia 2024. Art. 50 ma zastosowanie od 2 sierpnia 2026.",
      "Digital Omnibus on AI (rozporządzenie (UE) 2026/1744) wszedł w życie 27 lipca 2026. Przesunął terminy dla systemów wysokiego ryzyka na 2 grudnia 2027 i 2 sierpnia 2028.",
      "Naruszenie art. 50 może skutkować karami do 15 mln EUR lub 3% rocznego światowego obrotu, w zależności od tego, która kwota jest wyższa.",
    ],
    sections: [
      {
        heading: "Czego art. 50 wymaga od chatbotów",
        blocks: [
          {
            type: "p",
            text: "Art. 50 ust. 1 stanowi, że dostawcy muszą zapewnić, aby systemy AI przeznaczone do wchodzenia w bezpośrednią interakcję z osobami fizycznymi były projektowane i rozwijane w taki sposób, by zainteresowane osoby były informowane, że wchodzą w interakcję z systemem AI. Wyjątkiem jest sytuacja, gdy jest to oczywiste dla dostatecznie poinformowanej, uważnej i ostrożnej osoby, biorąc pod uwagę okoliczności i kontekst wykorzystania. Obowiązek nie dotyczy systemów AI, których wykorzystywanie do wykrywania przestępstw, zapobiegania im, prowadzenia postępowań przygotowawczych w ich sprawie lub ścigania ich sprawców jest dozwolone na mocy prawa, z zastrzeżeniem odpowiednich zabezpieczeń.",
          },
          {
            type: "p",
            text: "Art. 50 ust. 5 określa, jak i kiedy trzeba poinformować ludzi. Informacje muszą być przekazane w jasny i wyraźny sposób najpóźniej w momencie pierwszej interakcji lub pierwszego zetknięcia się z systemem i muszą spełniać obowiązujące wymogi dostępności.",
          },
          {
            type: "p",
            text: "Art. 50 zawiera też inne obowiązki w zakresie przejrzystości. Tylko pierwszy z poniższej listy dotyczy konkretnie chatbotów:",
          },
          {
            type: "ul",
            items: [
              "Art. 50 ust. 1: dostawcy systemów wchodzących w bezpośrednią interakcję z ludźmi muszą projektować je tak, aby ludzie wiedzieli, że mają do czynienia z AI.",
              "Art. 50 ust. 2: dostawcy systemów generujących syntetyczne treści audio, obrazy, wideo lub tekst muszą oznaczać wyniki w formacie nadającym się do odczytu maszynowego, tak aby można było wykryć, że zostały wygenerowane przez AI.",
              "Art. 50 ust. 3: podmioty stosujące systemy rozpoznawania emocji lub kategoryzacji biometrycznej muszą informować osoby, wobec których systemy te są stosowane.",
              "Art. 50 ust. 4: podmioty stosujące muszą ujawniać deepfake'i oraz tekst wygenerowany przez AI publikowany w celu informowania społeczeństwa o sprawach leżących w interesie publicznym. W przypadku takiego tekstu obowiązek nie ma zastosowania, gdy przeszedł on weryfikację przez człowieka, a ktoś ponosi odpowiedzialność redakcyjną.",
            ],
          },
        ],
      },
      {
        heading: "Dostawca czy podmiot stosujący: na kim ciąży obowiązek",
        blocks: [
          {
            type: "p",
            text: "Art. 3 pkt 3 definiuje dostawcę jako osobę lub podmiot, który rozwija system AI lub zleca jego rozwój i wprowadza go do obrotu lub oddaje do użytku pod własną nazwą lub własnym znakiem towarowym, odpłatnie lub nieodpłatnie. Art. 3 pkt 4 definiuje podmiot stosujący jako każdego, kto wykorzystuje system AI, nad którym sprawuje kontrolę, z wyjątkiem wykorzystywania go w ramach osobistej działalności pozazawodowej.",
          },
          {
            type: "p",
            text: "Informowanie o chatbocie z art. 50 ust. 1 to obowiązek dostawcy. Obowiązki oznaczania z art. 50 ust. 3 i 4 to obowiązki podmiotu stosującego. Jeśli Twoja firma buduje asystenta wsparcia i uruchamia go pod własną marką, uważnie przeczytaj obie definicje i zestaw je z tym, jak system został zbudowany i kto udostępnia go klientom.",
          },
        ],
      },
      {
        heading: "Jak obowiązek informowania przekłada się na automatyzację wsparcia",
        blocks: [
          {
            type: "p",
            text: "FAQ Komisji dotyczące art. 50 mówi, że jej wytyczne ustanawiają cztery łączne kryteria obowiązku dotyczącego interakcji: system jest systemem AI, jest zbudowany do rzeczywistej dwustronnej wymiany, komunikuje się bezpośrednio, a nie za pośrednictwem człowieka, i wchodzi w interakcję z osobami fizycznymi. Według FAQ systemy działające wyłącznie w tle, poprzez komunikację między maszynami lub bez bezpośredniego kontaktu z ludźmi, nie podlegają temu obowiązkowi. FAQ zaznacza też, że wyjątek dotyczący „oczywistości” należy interpretować zawężająco.",
          },
          {
            type: "table",
            caption: "Pytania o typowe konfiguracje wsparcia na podstawie kryteriów Komisji",
            head: ["Konfiguracja", "Co sprawdzić w świetle kryteriów"],
            rows: [
              [
                "Chatbot AI na Twojej stronie, w WhatsAppie lub Messengerze",
                "Czy wymienia wiadomości bezpośrednio z klientami? Jeśli tak, zaplanuj informację najpóźniej przy pierwszej wiadomości.",
              ],
              [
                "Voicebot AI odbierający połączenia",
                "To samo pytanie w odniesieniu do rozmów głosowych. Art. 50 ust. 5 odwołuje się też do wymogów dostępności.",
              ],
              [
                "AI klasyfikująca i kierująca zgłoszenia",
                "Czy działa wyłącznie w tle, bez bezpośredniego kontaktu z klientami? FAQ wyłącza takie systemy z obowiązku dotyczącego interakcji.",
              ],
              [
                "AI przygotowująca szkice odpowiedzi, które agent sprawdza i wysyła",
                "Czy komunikuje się z klientem bezpośrednio, czy za pośrednictwem człowieka? Sprawdź to w świetle wytycznych.",
              ],
            ],
          },
          {
            type: "p",
            text: "W praktyce wiele zespołów zaczyna każdą rozmowę z AI krótkim zdaniem, np. „Rozmawiasz z asystentem AI. Wpisz 'konsultant', aby połączyć się z człowiekiem.” To decyzja projektowa. Czy jest wystarczająca w przypadku Twojego systemu, to kwestia wytycznych i Twojego doradcy.",
          },
        ],
      },
      {
        heading: "Kluczowe daty, w tym Digital Omnibus z 2026 roku",
        blocks: [
          {
            type: "p",
            text: "Art. 113 określa harmonogram AI Act. W listopadzie 2025 roku Komisja zaproponowała zmianę jego części w ramach Digital Omnibus on AI (COM(2025) 836 z 19 listopada 2025). Propozycja została już przyjęta: po porozumieniu politycznym z 7 maja 2026 i formalnym przyjęciu opublikowano ją jako rozporządzenie (UE) 2026/1744. Według Komisji weszło ono w życie 27 lipca 2026. Tabela pokazuje przyjęte daty.",
          },
          {
            type: "table",
            caption: "Daty stosowania AI Act (teksty urzędowe według stanu na 19 października 2026)",
            head: ["Data", "Co ma zastosowanie", "Podstawa prawna"],
            rows: [
              ["1 sierpnia 2024", "AI Act wchodzi w życie", "Art. 113 rozporządzenia (UE) 2024/1689"],
              ["2 lutego 2025", "Stosuje się rozdziały I i II, w tym kompetencje w zakresie AI i zakazane praktyki", "Art. 113 lit. a"],
              ["2 sierpnia 2025", "Stosuje się przepisy o jednostkach notyfikowanych, modelach AI ogólnego przeznaczenia, zarządzaniu i karach (z wyjątkiem art. 101)", "Art. 113 lit. b"],
              ["2 sierpnia 2026", "Ogólne stosowanie, w tym obowiązki w zakresie przejrzystości z art. 50", "Art. 113; FAQ Komisji dotyczące art. 50"],
              ["2 grudnia 2026", "Termin na oznaczanie zgodnie z art. 50 ust. 2 przez systemy generatywnej AI wprowadzone do obrotu przed 2 sierpnia 2026; nowy zakaz dotyczący AI generującej intymne treści bez zgody lub materiały przedstawiające niegodziwe traktowanie dzieci w celach seksualnych", "Rozporządzenie (UE) 2026/1744 (przyjęte)"],
              ["2 grudnia 2027", "Przepisy dotyczące wysokiego ryzyka dla systemów klasyfikowanych na podstawie art. 6 ust. 2 i załącznika III", "Rozporządzenie (UE) 2026/1744 (przyjęte)"],
              ["2 sierpnia 2028", "Przepisy dotyczące wysokiego ryzyka dla systemów klasyfikowanych na podstawie art. 6 ust. 1 i załącznika I (produkty)", "Rozporządzenie (UE) 2026/1744 (przyjęte); zastępuje pierwotną datę 2 sierpnia 2027"],
            ],
          },
          {
            type: "p",
            text: "Jedna różnica między propozycją a przyjętym tekstem dotyczy generatywnej AI. Propozycja Komisji przewidywała dla dostawców systemów generatywnych już obecnych na rynku sześciomiesięczny okres przejściowy na oznaczanie zgodnie z art. 50 ust. 2. Przyjęte rozporządzenie ustala termin na 2 grudnia 2026. Według FAQ Komisji obowiązek informowania o chatbocie z art. 50 ust. 1 nadal obowiązuje od 2 sierpnia 2026.",
          },
        ],
      },
      {
        heading: "Kary i oficjalne wytyczne",
        blocks: [
          {
            type: "p",
            text: "Zgodnie z art. 99 ust. 4 naruszenie obowiązków z art. 50 może skutkować administracyjnymi karami pieniężnymi w wysokości do 15 000 000 EUR lub, w przypadku przedsiębiorstwa, do 3% jego całkowitego rocznego światowego obrotu z poprzedniego roku obrotowego, w zależności od tego, która z tych kwot jest wyższa. W przypadku MŚP, w tym start-upów, art. 99 przewiduje zastosowanie niższej z tych dwóch kwot.",
          },
          {
            type: "p",
            text: "20 lipca 2026 Komisja opublikowała wytyczne dotyczące obowiązków w zakresie przejrzystości z art. 50. Osobny, dobrowolny kodeks praktyk (Code of Practice on Transparency of AI-generated Content) obejmuje art. 50 ust. 2, 4 i 5. Komisja podkreśla, że niepodpisanie go nie oznacza niezgodności z przepisami. W przypadku obowiązku dotyczącego chatbotów z art. 50 ust. 1 FAQ mówi, że dostawcy i podmioty stosujące mogą sami zdecydować o odpowiednich środkach, biorąc pod uwagę wytyczne.",
          },
          {
            type: "note",
            text: "To nie jest porada prawna. Ta strona opisuje, co mówią AI Act, Digital Omnibus i wytyczne Komisji według stanu na 19 października 2026. Przy decyzjach dotyczących Twoich systemów przeczytaj teksty urzędowe w EUR-Lex i porozmawiaj z wykwalifikowanym prawnikiem.",
          },
        ],
      },
      {
        heading: "Jak wbudować informację o AI w bota wsparcia",
        blocks: [
          {
            type: "ul",
            items: [
              "Umieść informację o AI w pierwszej wiadomości lub w powitaniu głosowym, a nie tylko w regulaminie.",
              "Zadbaj, aby informacja była czytelna dla czytników ekranu i wyraźna w kanale głosowym, ponieważ art. 50 ust. 5 wspomina o dostępności.",
              "Daj klientom widoczny sposób kontaktu z człowiekiem i przekazuj historię rozmowy, aby nie musieli się powtarzać.",
              "Przechowuj zapis treści informacji i dat jej zmian, aby móc pokazać, co widzieli klienci.",
            ],
          },
          {
            type: "p",
            text: "TascaLab buduje chatboty i voiceboty na narzędziach, których już używasz (Zendesk, Freshdesk, Jira, Slack i narzędzia wewnętrzne). Projekty Standard Chat Bot kosztują {{price:standard}}, a projekty Voice Bot {{price:voice}}. Oba obejmują podstawową dokumentację i 30 dni wsparcia po uruchomieniu.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy muszę informować klientów, że rozmawiają z chatbotem?",
        a: "Art. 50 ust. 1 AI Act wymaga od dostawców projektowania systemów AI wchodzących w bezpośrednią interakcję z ludźmi tak, aby osoby te były informowane, że wchodzą w interakcję z systemem AI, chyba że jest to oczywiste z kontekstu. Komisja podkreśla, że wyjątek dotyczący „oczywistości” należy interpretować zawężająco.",
      },
      {
        q: "Od kiedy obowiązują przepisy AI Act dotyczące chatbotów?",
        a: "Art. 50 ma zastosowanie od 2 sierpnia 2026. FAQ Komisji przewiduje okres przejściowy do 2 grudnia 2026 wyłącznie dla oznaczania zgodnie z art. 50 ust. 2 przez systemy generatywne już obecne na rynku.",
      },
      {
        q: "Czy Digital Omnibus opóźnił AI Act?",
        a: "Częściowo. Rozporządzenie (UE) 2026/1744, obowiązujące według Komisji od 27 lipca 2026, przesunęło obowiązki dotyczące wysokiego ryzyka na 2 grudnia 2027 (załącznik III) i 2 sierpnia 2028 (produkty z załącznika I). Nie przesunęło daty 2 sierpnia 2026 dla art. 50.",
      },
      {
        q: "Czy router zgłoszeń oparty na AI wymaga informacji o AI?",
        a: "FAQ Komisji mówi, że systemy działające wyłącznie w tle, poprzez komunikację między maszynami lub bez bezpośredniego kontaktu z ludźmi, nie podlegają obowiązkowi dotyczącemu interakcji z art. 50 ust. 1. Sprawdź swoją konfigurację w świetle wytycznych Komisji.",
      },
      {
        q: "Jakie są kary za naruszenie art. 50?",
        a: "Zgodnie z art. 99 ust. 4 do 15 mln EUR lub 3% całkowitego rocznego światowego obrotu, w zależności od tego, która kwota jest wyższa. W przypadku MŚP, w tym start-upów, stosuje się niższą z tych dwóch kwot.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2024/1689 (Artificial Intelligence Act)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      { label: "AI Act Service Desk — Article 50: Transparency obligations", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
      { label: "AI Act Service Desk — Article 99: Penalties", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99" },
      { label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "European Commission — Guidelines on transparency obligations published (20 July 2026)", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems" },
      { label: "EUR-Lex — Proposal COM(2025) 836, Digital Omnibus on AI", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0836" },
      { label: "EUR-Lex — Regulation (EU) 2026/1744 (Digital Omnibus on AI)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
      { label: "European Commission — AI Omnibus enters into force", url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force" },
    ],
    related: ["ai-chatbot-for-customer-support", "gdpr-customer-support-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "gdpr-customer-support-automation",
    slug: "rodo-automatyzacja-obslugi-klienta",
    category: "guides",
    navLabel: "RODO a automatyzacja obsługi",
    primaryKeyword: "RODO a automatyzacja obsługi klienta",
    title: "RODO a automatyzacja obsługi klienta: praktyczny przewodnik",
    description:
      "RODO a automatyzacja obsługi klienta: podstawy prawne, minimalizacja danych, okresy przechowywania i umowy powierzenia w chatbotach i przepływach helpdesku.",
    h1: "RODO a automatyzacja obsługi klienta: praktyczny przewodnik",
    intro:
      "RODO ma zastosowanie do automatyzacji wsparcia tak samo jak do każdego innego przetwarzania danych osobowych. Potrzebujesz podstawy prawnej z art. 6, przetwarzasz tylko to, czego potrzebujesz (art. 5 ust. 1 lit. c), i przechowujesz dane tylko tak długo, jak to konieczne (art. 5 ust. 1 lit. e), a dostawcy przetwarzający dane w Twoim imieniu potrzebują umowy zgodnej z art. 28. W chatbotach i przepływach helpdesku większość z tego sprowadza się do decyzji projektowych: jakie pola wysyłasz, dokąd trafiają i jak długo przechowywane są logi.",
    keyFacts: [
      "Art. 5 ust. 1 lit. c: dane osobowe muszą być adekwatne, stosowne i ograniczone do tego, co niezbędne do celów przetwarzania.",
      "Art. 6 ust. 1 wymienia sześć podstaw prawnych. Trybunał Sprawiedliwości UE traktuje tę listę jako wyczerpującą.",
      "Art. 28 ust. 3 wymaga wiążącej umowy z każdym podmiotem przetwarzającym, która stanowi m.in., że działa on wyłącznie na Twoje udokumentowane polecenie.",
      "EROD (EDPB) wskazuje, że sprawdzanie, czy podmiot przetwarzający zapewnia wystarczające gwarancje, to obowiązek ciągły, a nie jednorazowy.",
      "Make pozwala wybrać centrum danych w USA lub UE przy tworzeniu organizacji. Później nie można tego zmienić.",
    ],
    sections: [
      {
        heading: "Gdzie w automatyzacji wsparcia pojawiają się dane osobowe",
        blocks: [
          {
            type: "p",
            text: "Automatyzacja wsparcia styka się z danymi osobowymi w kilku miejscach, często w większej liczbie, niż zespół zdaje sobie sprawę. Ich zmapowanie to pierwszy praktyczny krok, bo w każdym z tych miejsc w grę wchodzą minimalizacja danych, okresy przechowywania i umowy z dostawcami.",
          },
          {
            type: "ul",
            items: [
              "Zapisy czatów i e-maili: imiona i nazwiska, adresy e-mail, numery telefonów, numery zamówień i wszystko inne, co wpisują klienci.",
              "Pola zgłoszeń w helpdesku i załączniki, które automatyzacja odczytuje lub kopiuje do innego narzędzia.",
              "Prompty i odpowiedzi wysyłane do modelu AI, jeśli Twój bot z niego korzysta.",
              "Logi wykonań w Twojej platformie automatyzacji, które mogą przechowywać dane otrzymane przez każdy krok.",
              "Powiadomienia publikowane na Slacku lub w innych narzędziach wewnętrznych.",
            ],
          },
        ],
      },
      {
        heading: "Artykuły RODO najważniejsze dla bota wsparcia",
        blocks: [
          {
            type: "table",
            caption: "Artykuły RODO i ich praktyczny wpływ na automatyzację wsparcia",
            head: ["Artykuł", "Co mówi tekst", "Co to oznacza dla bota wsparcia"],
            rows: [
              [
                "Art. 5 ust. 1 lit. c: minimalizacja danych",
                "Dane osobowe muszą być adekwatne, stosowne oraz ograniczone do tego, co niezbędne do celów, w których są przetwarzane.",
                "Przekazuj każdemu krokowi tylko potrzebne mu pola. Jednym ze sposobów jest usuwanie identyfikatorów, zanim tekst trafi do modelu AI.",
              ],
              [
                "Art. 5 ust. 1 lit. e: ograniczenie przechowywania",
                "Dane są przechowywane w formie umożliwiającej identyfikację osób nie dłużej, niż jest to niezbędne do celów przetwarzania, z wyjątkami dla archiwizacji, badań i celów statystycznych przy zabezpieczeniach z art. 89 ust. 1.",
                "Ustal okresy przechowywania logów czatów, eksportów zgłoszeń i logów wykonań automatyzacji.",
              ],
              [
                "Art. 6 ust. 1: zgodność przetwarzania z prawem",
                "Przetwarzanie jest zgodne z prawem tylko wtedy, gdy ma zastosowanie co najmniej jedna z sześciu podstaw: zgoda, umowa, obowiązek prawny, żywotne interesy, zadanie realizowane w interesie publicznym lub prawnie uzasadnione interesy.",
                "Zapisz, która podstawa obejmuje każdy cel, np. odpowiedź na prośbę w odróżnieniu od analizy zapisów rozmów.",
              ],
              [
                "Art. 28: podmioty przetwarzające",
                "Korzystaj wyłącznie z podmiotów przetwarzających zapewniających wystarczające gwarancje, na podstawie wiążącej umowy, która określa przetwarzanie i zobowiązuje je do działania na Twoje udokumentowane polecenie.",
                "Zawrzyj umowę z każdym dostawcą w łańcuchu: helpdeskiem, platformą automatyzacji, dostawcą AI i hostingiem.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Podstawa prawna: decyduj osobno dla każdego celu",
        blocks: [
          {
            type: "p",
            text: "Art. 6 ust. 1 wymienia sześć podstaw prawnych: zgodę, umowę, obowiązek prawny, żywotne interesy, zadanie realizowane w interesie publicznym i prawnie uzasadnione interesy. Trybunał Sprawiedliwości UE określił tę listę jako wyczerpującą i zamkniętą, więc przetwarzanie musi mieścić się w co najmniej jednej z nich.",
          },
          {
            type: "p",
            text: "W pracy wsparcia najczęściej pojawiają się dwie podstawy. Podstawa umowna obejmuje przetwarzanie niezbędne do wykonania umowy z daną osobą lub do podjęcia działań na jej żądanie przed zawarciem umowy. W sprawie C-621/22 Trybunał Sprawiedliwości stwierdził, że prawnie uzasadnione interesy wymagają spełnienia trzech łącznych warunków: administrator lub strona trzecia realizuje prawnie uzasadniony interes, przetwarzanie jest niezbędne do realizacji tego interesu, a interesy lub podstawowe prawa danej osoby nie mają wobec niego charakteru nadrzędnego. Organy publiczne nie mogą powoływać się na prawnie uzasadnione interesy w przypadku przetwarzania w ramach wykonywania swoich zadań.",
          },
          {
            type: "p",
            text: "W praktyce wypisz każdy cel osobno. Odpowiadanie na pytanie klienta, szkolenie pracowników na dawnych zapisach rozmów i tworzenie raportów to różne cele i każdy wymaga własnej podstawy.",
          },
        ],
      },
      {
        heading: "Podmioty przetwarzające i umowy z art. 28",
        blocks: [
          {
            type: "p",
            text: "Zgodnie z art. 28 ust. 1 możesz korzystać wyłącznie z usług podmiotów przetwarzających, które zapewniają wystarczające gwarancje wdrożenia odpowiednich środków technicznych i organizacyjnych. Art. 28 ust. 3 wymaga umowy lub innego instrumentu prawnego, który określa przedmiot, czas trwania, charakter i cel przetwarzania, rodzaj danych osobowych oraz kategorie osób, których dane dotyczą. Musi on też stanowić, że podmiot przetwarzający działa wyłącznie na Twoje udokumentowane polecenie, także w odniesieniu do przekazywania danych osobowych do państwa trzeciego. Zgodnie z art. 28 ust. 4 podmiot przetwarzający, który korzysta z usług dalszego podmiotu przetwarzającego, musi umownie nałożyć na niego te same obowiązki w zakresie ochrony danych, a pierwotny podmiot przetwarzający ponosi wobec Ciebie pełną odpowiedzialność.",
          },
          {
            type: "ul",
            items: [
              "Wytyczne EROD 07/2020: weryfikacja gwarancji podmiotu przetwarzającego to obowiązek ciągły, w stosownych przypadkach z audytami i inspekcjami. Polecenia mogą być określone w załączniku do umowy lub w innej formie pisemnej, np. e-mailem, pod warunkiem że prowadzisz ich ewidencję. Ogólna lista dalszych podmiotów przetwarzających, która może być od czasu do czasu aktualizowana, nie wystarcza. Podmiot przetwarzający powinien aktywnie informować Cię o zmianach.",
              "Opinia EROD 22/2024: obowiązek sprawdzenia, czy podmioty przetwarzające i dalsze podmioty przetwarzające zapewniają wystarczające gwarancje, obowiązuje niezależnie od poziomu ryzyka, choć szczegółowość weryfikacji może się różnić. Ostateczna decyzja o skorzystaniu z konkretnego dalszego podmiotu przetwarzającego i odpowiedzialność za nią pozostają po stronie administratora.",
            ],
          },
          {
            type: "p",
            text: "Typowy łańcuch wsparcia może obejmować helpdesk, platformę automatyzacji, dostawcę modelu AI i narzędzie do czatu. Zapisz, którzy dostawcy przetwarzają dane osobowe w Twoim imieniu, sprawdź warunki przetwarzania danych i listę dalszych podmiotów przetwarzających każdego z nich i przechowuj je w dokumentacji.",
          },
        ],
      },
      {
        heading: "Hosting, lokalizacja danych i ustawienia przechowywania",
        blocks: [
          {
            type: "p",
            text: "To, gdzie działa Twoja automatyzacja, decyduje o tym, gdzie przechowywane są jej dane. Make oferuje dwie lokalizacje centrów danych: Stany Zjednoczone i Unię Europejską. Wybierasz jedną przy tworzeniu organizacji, nie można jej później zmienić i to ona decyduje, gdzie Twoje dane są przechowywane i przetwarzane. Jeśli hostujesz n8n samodzielnie, ustawienia wykonań określają, ile danych o wykonaniach jest przechowywanych. Udokumentowana wartość domyślna to maksymalnie 10 000 przechowywanych wykonań, a 0 oznacza brak limitu.",
          },
          {
            type: "p",
            text: "Ponieważ art. 28 ust. 3 obejmuje polecenia dotyczące przekazywania danych do państw trzecich, sprawdź w warunkach każdego dostawcy, gdzie przetwarzane są dane. Ustaw okresy przechowywania w każdym narzędziu, które przechowuje kopię danych, a nie tylko w helpdesku.",
          },
        ],
      },
      {
        heading: "Praktyczne decyzje projektowe dla automatyzacji zgodnej z RODO",
        blocks: [
          {
            type: "ul",
            items: [
              "Przekazuj ID zgłoszeń i pola potrzebne danemu krokowi zamiast całych rekordów klientów.",
              "Maskuj adresy e-mail, numery telefonów i dane płatnicze, zanim tekst trafi do modelu AI. Tekst po usunięciu identyfikatorów nadal może zawierać dane osobowe, więc traktuj go z taką samą ostrożnością.",
              "Przycinaj logi wykonań automatyzacji i wyłącz logowanie pełnych payloadów tam, gdzie go nie potrzebujesz.",
              "Zaprojektuj sposób wyszukania, wyeksportowania lub usunięcia danych jednego klienta w bocie, helpdesku i logach, aby indywidualne żądania nie wymagały ręcznego przeszukiwania.",
              "Kieruj sprawy wrażliwe lub o dużym wpływie do konsultanta, zamiast pozwalać botowi decydować.",
              "Pamiętaj, że chatboty podlegają też odrębnym przepisom AI Act dotyczącym przejrzystości.",
            ],
          },
          {
            type: "note",
            text: "To nie jest porada prawna. Ta strona opisuje, co mówią tekst RODO i wytyczne EROD, oraz powszechne praktyki inżynierskie. Przy decyzjach dotyczących Twojego przetwarzania porozmawiaj ze swoim inspektorem ochrony danych lub wykwalifikowanym prawnikiem.",
          },
          {
            type: "p",
            text: "TascaLab buduje automatyzacje na Zendesk, Freshdesk, Jira, Slacku i narzędziach wewnętrznych, wykorzystując API, webhooki, Make i n8n. Każdy projekt obejmuje podstawową dokumentację tego, co zostało zbudowane – przydaje się ona przy mapowaniu przepływów danych – oraz 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Która podstawa prawna z RODO obejmuje chatbota wsparcia?",
        a: "RODO nie przypisuje jednej. Art. 6 ust. 1 wymienia sześć podstaw, w tym umowę i prawnie uzasadnione interesy, a Ty wybierasz i dokumentujesz tę, która pasuje do każdego celu. Trybunał Sprawiedliwości UE traktuje tę listę jako wyczerpującą.",
      },
      {
        q: "Czy potrzebuję umowy powierzenia przetwarzania danych z platformą automatyzacji?",
        a: "Art. 28 ust. 3 wymaga, aby przetwarzanie przez podmiot przetwarzający odbywało się na podstawie umowy lub innego instrumentu prawnego, który określa m.in. przedmiot, czas trwania, charakter i cel przetwarzania. Jeśli dostawca przetwarza dane osobowe w Twoim imieniu, sprawdź, czy takie warunki obowiązują.",
      },
      {
        q: "Czy mogę wysyłać wiadomości klientów do modelu AI?",
        a: "Obowiązują te same zasady RODO co przy każdym innym przetwarzaniu: podstawa prawna, minimalizacja danych i umowa z podmiotem przetwarzającym, jeśli dostawca przetwarza dane w Twoim imieniu. Usuwanie identyfikatorów przed wysłaniem tekstu to jeden z praktycznych sposobów ograniczenia tego, co udostępniasz.",
      },
      {
        q: "Jak długo mogę przechowywać zapisy czatów?",
        a: "Art. 5 ust. 1 lit. e mówi, że dane osobowe powinny być przechowywane w formie umożliwiającej identyfikację osób nie dłużej, niż jest to niezbędne do celów przetwarzania. Tekst nie określa stałej liczby dni, więc okres przechowywania ustalasz dla każdego celu.",
      },
      {
        q: "Gdzie Make przechowuje moje dane?",
        a: "Make ma centra danych w USA i UE. Wybierasz jedno przy tworzeniu organizacji i nie można go później zmienić.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2016/679 (General Data Protection Regulation)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679" },
      { label: "GDPR-Info — Art. 6 GDPR: Lawfulness of processing", url: "https://gdpr-info.eu/art-6-gdpr/" },
      { label: "GDPR-Info — Art. 28 GDPR: Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { label: "EUR-Lex — Court of Justice judgment in Case C-621/22 (legitimate interests)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A62022CJ0621" },
      { label: "EDPB — Guidelines 07/2020 on the concepts of controller and processor", url: "https://edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf" },
      { label: "EDPB — Opinion 22/2024 on reliance on processors and sub-processors", url: "https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "n8n Docs — Executions environment variables", url: "https://docs.n8n.io/hosting/configuration/environment-variables/executions/" },
    ],
    related: ["eu-ai-act-chatbot-rules", "ai-chatbot-for-customer-support", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
  {
    key: "european-accessibility-act-customer-service",
    slug: "europejski-akt-o-dostepnosci-obsluga-klienta",
    category: "guides",
    navLabel: "Europejski akt o dostępności",
    primaryKeyword: "Europejski akt o dostępności obsługa klienta",
    title: "Europejski akt o dostępności (EAA) a obsługa klienta",
    description:
      "European Accessibility Act a obsługa klienta: które usługi obejmuje, kluczowe daty, wyłączenie mikroprzedsiębiorstw i czego załącznik I wymaga od wsparcia.",
    h1: "Europejski akt o dostępności a obsługa klienta: co muszą wiedzieć zespoły wsparcia",
    intro:
      "Europejski akt o dostępności (European Accessibility Act, dyrektywa (UE) 2019/882) od 28 czerwca 2025 ma zastosowanie do listy usług konsumenckich obejmującej handel elektroniczny, konsumenckie usługi bankowe, e-booki i łączność elektroniczną. W przypadku usług objętych zakresem załącznik I wymaga, aby strony internetowe i aplikacje mobilne były dostępne, a usługi wsparcia, takie jak help desk i call center – o ile je prowadzisz – przekazywały informacje o dostępności usługi w dostępnych sposobach komunikacji. Mikroprzedsiębiorstwa świadczące usługi są zwolnione.",
    keyFacts: [
      "Art. 31: państwa członkowskie musiały przyjąć przepisy krajowe do 28 czerwca 2022 i stosować je od 28 czerwca 2025.",
      "Art. 2 ust. 2 obejmuje usługi świadczone konsumentom, takie jak łączność elektroniczna, konsumenckie usługi bankowe, e-booki i handel elektroniczny.",
      "Art. 4 ust. 5 zwalnia mikroprzedsiębiorstwa świadczące usługi; art. 3 pkt 23 definiuje je jako zatrudniające mniej niż 10 osób, z obrotem lub sumą bilansową nieprzekraczającymi 2 mln EUR.",
      "Załącznik I sekcja III: usługi wsparcia, o ile są dostępne, muszą przekazywać informacje o dostępności usługi w dostępnych sposobach komunikacji.",
      "Norma EN 301 549 V4.1.1 została przyjęta w sierpniu 2026, ale AccessibleEU podaje, że nie jest jeszcze prawnym punktem odniesienia dla zgodności z EAA.",
    ],
    sections: [
      {
        heading: "Jakie usługi obejmuje Europejski akt o dostępności",
        blocks: [
          {
            type: "p",
            text: "Dyrektywa (UE) 2019/882, znana jako Europejski akt o dostępności (European Accessibility Act, EAA), określa wymogi dostępności dla listy produktów w art. 2 ust. 1 i listy usług w art. 2 ust. 2. Ta strona skupia się na usługach, bo tam mieści się obsługa klienta. Art. 2 ust. 2 ma zastosowanie do następujących usług świadczonych konsumentom po 28 czerwca 2025.",
          },
          {
            type: "table",
            caption: "Usługi wymienione w art. 2 ust. 2 dyrektywy (UE) 2019/882",
            head: ["Art. 2 ust. 2", "Usługa", "Punkty styku ze wsparciem warte przeglądu"],
            rows: [
              ["lit. a", "Usługi łączności elektronicznej, z wyjątkiem usług transmisji wykorzystywanych do świadczenia usług komunikacji maszyna–maszyna", "Strony pomocy, czat na żywo i opcje kontaktu dla abonentów"],
              ["lit. b", "Usługi zapewniające dostęp do audiowizualnych usług medialnych", "Pomoc w aplikacji i czat wsparcia"],
              ["lit. c", "Niektóre elementy usług transportu pasażerskiego lotniczego, autobusowego, kolejowego i wodnego", "Pomoc przy rezerwacji, informacje o podróży i czat na stronie lub w aplikacji"],
              ["lit. d", "Konsumenckie usługi bankowe", "Chatboty i voiceboty odpowiadające na pytania o konto lub kartę"],
              ["lit. e", "E-booki i specjalne oprogramowanie", "Help desk dla aplikacji do czytania i zakupów"],
              ["lit. f", "Usługi handlu elektronicznego", "Widżet czatu w sklepie, bot statusu zamówienia, proces zwrotów"],
            ],
          },
          {
            type: "p",
            text: "Dyrektywa definiuje usługi handlu elektronicznego jako usługi świadczone na odległość, za pośrednictwem stron internetowych i usług na urządzeniach mobilnych, drogą elektroniczną i na indywidualne żądanie konsumenta w celu zawarcia umowy konsumenckiej. Motywy dyrektywy dodają, że obowiązki dotyczące handlu elektronicznego obejmują sprzedaż online dowolnego produktu lub usługi. Trzecia kolumna tabeli to sugestia do listy kontrolnej, a nie stwierdzenie, czego prawo wymaga od Twojej firmy.",
          },
        ],
      },
      {
        heading: "Kluczowe daty i okresy przejściowe",
        blocks: [
          {
            type: "p",
            text: "EAA jest dyrektywą, więc dociera do firm przez przepisy krajowe. Art. 31 zobowiązał państwa członkowskie do przyjęcia i opublikowania tych przepisów do 28 czerwca 2022 i stosowania ich od 28 czerwca 2025. Art. 32 dodaje pewne okresy przejściowe.",
          },
          {
            type: "table",
            caption: "Daty EAA dla usług (dyrektywa (UE) 2019/882)",
            head: ["Data", "Co to oznacza", "Artykuł"],
            rows: [
              ["28 czerwca 2022", "Termin, w którym państwa członkowskie miały przyjąć i opublikować przepisy krajowe transponujące dyrektywę", "Art. 31"],
              ["28 czerwca 2025", "Przepisy krajowe zaczynają być stosowane. Art. 2 ust. 2 obejmuje usługi świadczone konsumentom po tej dacie", "Art. 2 ust. 2 i art. 31"],
              ["Do 5 lat od 28 czerwca 2025", "Umowy o świadczenie usług zawarte przed 28 czerwca 2025 mogą obowiązywać bez zmian do czasu ich wygaśnięcia", "Art. 32"],
              ["28 czerwca 2030", "Koniec okresu, w którym usługodawcy mogą nadal świadczyć usługi z wykorzystaniem produktów, których już zgodnie z prawem używali do świadczenia podobnych usług", "Art. 32"],
              ["Do 20 lat użytkowania", "Państwa członkowskie mogą zezwolić, aby terminale samoobsługowe używane przed 28 czerwca 2025 działały do końca okresu ich ekonomicznej użyteczności, ale nie dłużej niż 20 lat od oddania ich do użytku", "Art. 32"],
            ],
          },
          {
            type: "p",
            text: "Ponieważ każde państwo członkowskie pisze własną ustawę, teksty krajowe i organy odpowiedzialne za ich egzekwowanie różnią się między krajami. Komisja informuje, że monitoruje pełną i prawidłową transpozycję aktu. Jeśli obsługujesz klientów w kilku krajach UE, sprawdź prawo krajowe w każdym z nich.",
          },
        ],
      },
      {
        heading: "Wyłączenie mikroprzedsiębiorstw i inne ograniczenia",
        blocks: [
          {
            type: "p",
            text: "Art. 3 pkt 23 definiuje mikroprzedsiębiorstwo jako przedsiębiorstwo, które zatrudnia mniej niż 10 osób i którego roczny obrót nie przekracza 2 mln EUR lub roczna suma bilansowa nie przekracza 2 mln EUR. Zgodnie z art. 4 ust. 5 mikroprzedsiębiorstwa świadczące usługi są zwolnione z wymogów dostępności określonych w art. 4 ust. 3 oraz z obowiązków związanych ze zgodnością z nimi. Motywy wyjaśniają, że wymaganie od tych firm przeprowadzenia oceny samo w sobie stanowiłoby nieproporcjonalne obciążenie. Dyrektywa mimo to zachęca mikroprzedsiębiorstwa do świadczenia usług spełniających te wymogi.",
          },
          {
            type: "p",
            text: "Wyłączenie dotyczy wyłącznie usług. Mikroprzedsiębiorstwa zajmujące się produktami są traktowane inaczej i nie są w pełni zwolnione.",
          },
          {
            type: "p",
            text: "W przypadku wszystkich pozostałych art. 14 stanowi, że wymogi dostępności mają zastosowanie tylko w takim zakresie, w jakim zgodność z nimi nie wymaga znaczącej zmiany, która powodowałaby zasadniczą zmianę podstawowego charakteru usługi, i nie nakłada nieproporcjonalnego obciążenia. Firma, która się na to powołuje, musi przeprowadzić ocenę według kryteriów z załącznika VI. Usługodawcy muszą ją ponawiać, gdy usługa zostanie zmieniona, na wniosek organu oraz co najmniej raz na pięć lat. Motywy dodają, że brak priorytetu, czasu lub wiedzy nie powinien być uznawany za uzasadnione powody.",
          },
        ],
      },
      {
        heading: "Co załącznik I mówi o obsłudze klienta",
        blocks: [
          {
            type: "p",
            text: "Art. 4 ust. 3 stanowi, że wszystkie usługi, z wyjątkiem usług transportu miejskiego i podmiejskiego oraz usług transportu regionalnego, muszą być zgodne z sekcją III załącznika I, która określa ogólne wymogi dostępności dla usług. Sekcja IV dodaje wymogi dla konkretnych usług, takich jak konsumenckie usługi bankowe i handel elektroniczny. Dla zespołów wsparcia najważniejsze są trzy punkty sekcji III:",
          },
          {
            type: "ul",
            items: [
              "Lit. a: produkty wykorzystywane do świadczenia usługi muszą być dostępne.",
              "Lit. c: strony internetowe, w tym powiązane aplikacje internetowe, oraz usługi na urządzeniach mobilnych, w tym aplikacje mobilne, muszą być udostępnione w spójny i odpowiedni sposób – tak, aby były postrzegalne, funkcjonalne, zrozumiałe i solidne.",
              "Lit. d: usługi wsparcia (help desk, call center, wsparcie techniczne, usługi przekazywania komunikatów i usługi szkoleniowe), o ile są dostępne, muszą przekazywać informacje o dostępności usługi i jej kompatybilności z technologiami wspomagającymi w dostępnych sposobach komunikacji.",
            ],
          },
          {
            type: "p",
            text: "Art. 13 dodaje obowiązek przejrzystości. Usługodawcy przygotowują informacje – zgodnie z załącznikiem V – wyjaśniające, w jaki sposób usługa spełnia wymogi dostępności, i udostępniają je publicznie w formie pisemnej i ustnej, w tym w sposób dostępny dla osób z niepełnosprawnościami. Wytyczne AccessibleEU dodają, że informacje te muszą być przechowywane przez cały okres świadczenia usługi.",
          },
          {
            type: "p",
            text: "Widżet czatu lub bot wsparcia działający na Twojej stronie lub w aplikacji jest częścią interfejsu, z którego korzystają klienci, więc warto stosować do niego ten sam test: czy jest postrzegalny, funkcjonalny, zrozumiały i solidny. Twój help desk – obsługiwany przez ludzi lub boty – powinien też być gotowy odpowiadać na pytania o dostępność Twojej usługi.",
          },
        ],
      },
      {
        heading: "Praktyczne wskazówki dla widżetów czatu i botów wsparcia",
        blocks: [
          {
            type: "p",
            text: "Dyrektywa nie wymienia technicznych kontroli dla widżetu czatu. Poniższe punkty to powszechna praktyka inżynierska odpowiadająca zasadom z załącznika I. Testuj je z prawdziwymi technologiami wspomagającymi, takimi jak czytniki ekranu i obsługa wyłącznie z klawiatury.",
          },
          {
            type: "ul",
            items: [
              "Zadbaj, aby przycisk otwierający czat, pole wiadomości, przyciski i szybkie odpowiedzi dały się obsłużyć samą klawiaturą, z widocznym wskaźnikiem fokusu.",
              "Nadaj każdemu elementowi sterującemu etykietę tekstową odczytywaną przez czytniki ekranu i ogłaszaj nowe wiadomości bez przenoszenia fokusu użytkownika.",
              "Nie przekazuj znaczenia wyłącznie kolorem, ikonami lub obrazami. Zapewnij obrazom i kartom alternatywy tekstowe.",
              "Unikaj krótkich limitów bezczynności, które zamykają czat, albo ostrzegaj przed zamknięciem i pozwól klientowi kontynuować.",
              "Pisz krótkie i proste odpowiedzi bota i daj klientom łatwy sposób kontaktu z człowiekiem, z przekazaniem historii rozmowy.",
              "Naucz bota i swoich agentów odpowiadać na pytania o dostępność Twojej usługi i wskazywać Twoje informacje z art. 13.",
              "Oferuj więcej niż jeden kanał kontaktu, np. czat i e-mail, a osobom dzwoniącym do voicebota zapewnij alternatywę tekstową.",
            ],
          },
          {
            type: "p",
            text: "Szczegóły techniczne znajdziesz w EN 301 549 – europejskiej normie dotyczącej wymogów dostępności produktów i usług ICT. Decyzja wykonawcza Komisji (UE) 2021/1339 wskazuje EN 301 549 V3.2.1 jako normę zharmonizowaną na potrzeby dyrektywy w sprawie dostępności stron internetowych, która obejmuje strony i aplikacje sektora publicznego. 24 sierpnia 2026 ETSI przyjął EN 301 549 V4.1.1. Wersja ta przechodzi na WCAG 2.2 i dodaje załącznik mapujący jej wymogi na EAA. AccessibleEU podaje, że V4.1.1 nie jest jeszcze prawnym punktem odniesienia do wykazywania zgodności z EAA ani z dyrektywą w sprawie dostępności stron internetowych, a punktem odniesienia pozostaje V3.2.1, oparta na WCAG 2.1 na poziomie AA, dopóki Komisja nie powoła V4.1.1 w Dzienniku Urzędowym.",
          },
          {
            type: "note",
            text: "To nie jest porada prawna. Ta strona podsumowuje dyrektywę (UE) 2019/882 i oficjalne wytyczne UE według stanu na 19 października 2026. To, czy Twoja usługa jest objęta zakresem i co musisz zrobić, zależy od prawa krajowego, które Cię dotyczy. Przy decyzjach dotyczących Twojej usługi przeczytaj teksty urzędowe i porozmawiaj z wykwalifikowanym prawnikiem.",
          },
          {
            type: "p",
            text: "TascaLab buduje chatboty i voiceboty na narzędziach, których już używasz, takich jak Zendesk, Freshdesk, Jira i Slack. Projekty Standard Chat Bot kosztują {{price:standard}}, a projekty Voice Bot {{price:voice}}. Oba obejmują podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Od kiedy obowiązuje Europejski akt o dostępności?",
        a: "Art. 31 zobowiązał państwa członkowskie do przyjęcia przepisów krajowych do 28 czerwca 2022 i stosowania ich od 28 czerwca 2025. Art. 2 ust. 2 obejmuje usługi świadczone konsumentom po 28 czerwca 2025.",
      },
      {
        q: "Czy małe firmy są zwolnione z Europejskiego aktu o dostępności?",
        a: "Mikroprzedsiębiorstwa świadczące usługi są zwolnione na podstawie art. 4 ust. 5. Art. 3 pkt 23 definiuje mikroprzedsiębiorstwo jako zatrudniające mniej niż 10 osób, z rocznym obrotem lub roczną sumą bilansową nieprzekraczającymi 2 mln EUR. Wyłączenie nie obejmuje w pełni mikroprzedsiębiorstw zajmujących się produktami.",
      },
      {
        q: "Czy Europejski akt o dostępności obejmuje obsługę klienta?",
        a: "Załącznik I sekcja III lit. d stanowi, że usługi wsparcia, takie jak help desk, call center, wsparcie techniczne, usługi przekazywania komunikatów i usługi szkoleniowe, o ile są dostępne, muszą przekazywać informacje o dostępności usługi i jej kompatybilności z technologiami wspomagającymi w dostępnych sposobach komunikacji.",
      },
      {
        q: "Czy EN 301 549 jest normą zharmonizowaną dla EAA?",
        a: "EN 301 549 V4.1.1, przyjęta 24 sierpnia 2026, dodaje załącznik mapujący jej wymogi na EAA. AccessibleEU podaje, że nie jest ona jeszcze prawnym punktem odniesienia dla zgodności z EAA, dopóki Komisja nie powoła jej w Dzienniku Urzędowym, a do tego czasu punktem odniesienia pozostaje V3.2.1.",
      },
      {
        q: "Czy umowy o świadczenie usług podpisane przed czerwcem 2025 muszą zostać zmienione?",
        a: "Art. 32 pozwala, aby umowy o świadczenie usług zawarte przed 28 czerwca 2025 obowiązywały bez zmian do czasu ich wygaśnięcia, ale nie dłużej niż pięć lat od tej daty.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Directive (EU) 2019/882 (European Accessibility Act)", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" },
      { label: "EUR-Lex — Summary: Accessibility of products and services", url: "https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html" },
      { label: "European Commission — European Accessibility Act (EAA)", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" },
      { label: "AccessibleEU — Guidance on legislation", url: "https://accessible-eu-centre.ec.europa.eu/document/download/7bf9cb97-8ccf-421f-9d2d-6d1283e602ef_en?filename=AccEU_Guidance+on+legislation_English_acc.pdf" },
      { label: "AccessibleEU — The European accessibility standard EN 301 549 has been updated", url: "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en" },
      { label: "ETSI — EN 301 549 V4.1.1 (2026-09)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf" },
      { label: "EUR-Lex — Commission Implementing Decision (EU) 2021/1339", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1339" },
    ],
    related: ["website-chatbot-for-support", "eu-ai-act-chatbot-rules", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "n8n-zendesk-integration",
    slug: "integracja-n8n-zendesk",
    category: "guides",
    navLabel: "Integracja n8n z Zendesk",
    primaryKeyword: "integracja n8n Zendesk",
    title: "Integracja n8n z Zendesk: nody, triggery i webhooki",
    description:
      "Integracja n8n z Zendesk: operacje node'a Zendesk, Zendesk Trigger, poświadczenia z tokenem API lub OAuth2, webhooki, limity zapytań i przykładowy workflow.",
    h1: "Integracja n8n z Zendesk: nody, poświadczenia i przykładowe workflowy",
    intro:
      "n8n łączy się z Zendesk przez dwa wbudowane nody. Node Zendesk działa na zgłoszeniach, polach zgłoszeń, użytkownikach i organizacjach, a node Zendesk Trigger uruchamia workflow, gdy coś wydarzy się w Zendesk. Oba korzystają z tych samych poświadczeń: tokena API lub OAuth2. Jeśli wolisz trzymać reguły w Zendesk, możesz zamiast tego skierować webhook Zendesk na node Webhook w n8n i uruchamiać go z triggera Zendesk.",
    keyFacts: [
      "Node Zendesk w n8n ma cztery zasoby: Ticket, Ticket Field, User i Organization.",
      "Ustawianie tagów operacją Update Ticket w tym nodzie zastępuje całą listę tagów. Tagi, których nie podasz, zostaną usunięte.",
      "Poświadczenia Zendesk w n8n obsługują token API (subdomena, e-mail logowania i token) lub OAuth2.",
      "Zendesk podpisuje żądania webhooków nagłówkami X-Zendesk-Webhook-Signature i X-Zendesk-Webhook-Signature-Timestamp.",
      "Limity API w Zendesk Suite wynoszą od 200 żądań na minutę w planie Team do 2 500 w planie Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Co potrafi node Zendesk w n8n",
        blocks: [
          {
            type: "p",
            text: "Node Zendesk odczytuje lub zmienia dane w Zendesk jako krok workflow. Dokumentacja n8n grupuje jego operacje według zasobów.",
          },
          {
            type: "table",
            caption: "Zasoby i operacje node'a Zendesk (dokumentacja n8n, sprawdzona w październiku 2026)",
            head: ["Zasób", "Operacje"],
            rows: [
              ["Ticket", "Tworzenie, usuwanie, pobieranie jednego lub wielu, aktualizacja oraz przywracanie zawieszonego zgłoszenia"],
              ["Ticket Field", "Pobieranie jednego pola zgłoszenia lub wszystkich systemowych i niestandardowych pól zgłoszeń"],
              ["User", "Tworzenie, usuwanie, pobieranie jednego lub wielu, aktualizacja, wyszukiwanie, pobieranie organizacji użytkownika i pobieranie powiązanych danych"],
              ["Organization", "Tworzenie, usuwanie, zliczanie, pobieranie jednej lub wielu, aktualizacja i pobieranie powiązanych danych"],
            ],
          },
          {
            type: "p",
            text: "Jedno zachowanie często zaskakuje. Gdy używasz Update Ticket i wypełniasz pole Tag Names or IDs, według dokumentacji n8n cała lista tagów zgłoszenia zostaje zastąpiona, więc każdy tag, którego nie uwzględnisz, zostanie usunięty. Wynika to z domyślnego sposobu, w jaki Zendesk API obsługuje aktualizacje tagów. Dokumentacja podaje trzy obejścia: pobierz bieżące tagi i scal je z nowymi przed aktualizacją, użyj node'a HTTP Request z właściwością additional_tags w Zendesk albo wywołaj endpoint tagów zgłoszenia. Dwa ostatnie dodają tagi bez usuwania istniejących.",
          },
          {
            type: "p",
            text: "Jeśli node nie obsługuje potrzebnej Ci operacji, użyj node'a HTTP Request, ustaw Authentication na Predefined Credential Type i wybierz swoje poświadczenia Zendesk. Żądanie korzysta wtedy z tego samego połączenia co node Zendesk.",
          },
        ],
      },
      {
        heading: "Konfiguracja poświadczeń Zendesk w n8n",
        blocks: [
          {
            type: "p",
            text: "Nody Zendesk i Zendesk Trigger korzystają z tych samych poświadczeń, a n8n obsługuje dwa sposoby uwierzytelniania. Oba wymagają Twojej subdomeny, czyli części adresu URL Zendesk między https:// a .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "Token API: w Zendesk Admin Center otwórz Apps and integrations, a następnie APIs, i włącz dostęp przez token dla Zendesk API. Dodaj token z opisem i skopiuj go. W n8n wpisz subdomenę, adres e-mail, którym logujesz się do Zendesk, i token.",
              "OAuth2: w Zendesk Admin Center utwórz klienta OAuth w Apps and integrations, a następnie APIs. Wklej adres OAuth callback URL z n8n w pole redirect URL klienta. Skopiuj unikalny identyfikator klienta do pola Client ID w n8n, a jego sekret do Client Secret, dodaj subdomenę, zapisz i połącz swoje konto Zendesk.",
            ],
          },
        ],
      },
      {
        heading: "Node Zendesk Trigger czy webhook Zendesk",
        blocks: [
          {
            type: "p",
            text: "Workflow n8n można uruchomić z Zendesk na dwa sposoby. Node Zendesk Trigger uruchamia workflow, gdy zdarzenia w Zendesk pasują do warunków ustawionych w nodzie. W przykładzie z dokumentacji n8n filtruje zgłoszenia o statusie Open, a workflow działa po jego włączeniu.",
          },
          {
            type: "p",
            text: "Alternatywą jest samodzielne zbudowanie połączenia. W Zendesk Admin Center przejdź do Apps and integrations, a następnie Webhooks, utwórz webhook, wybierz Trigger or Automation jako metodę połączenia i skieruj go na Production URL node'a Webhook w n8n. Następnie dodaj akcję 'Notify webhook' do triggera lub automatyzacji Zendesk i napisz payload, który nie może przekraczać 16 000 znaków. Dzięki temu warunki pozostają w regułach biznesowych Zendesk, a Ty dokładnie wybierasz, które pola wysłać.",
          },
          {
            type: "table",
            caption: "Dwa sposoby uruchomienia workflow n8n z Zendesk",
            head: ["Pytanie", "Node Zendesk Trigger", "Webhook Zendesk + node Webhook w n8n"],
            rows: [
              ["Gdzie są warunki", "W nodzie, w n8n", "W triggerze lub automatyzacji Zendesk z akcją 'Notify webhook'"],
              ["Co otrzymuje n8n", "Dane zdarzenia dostarczane przez node", "Payload, który piszesz w akcji triggera, do 16 000 znaków"],
              ["Poświadczenia Zendesk", "Potrzebne do samego triggera", "Potrzebne tylko w dalszych krokach, które wywołują Zendesk"],
              ["Testowanie", "Uruchom node w edytorze, jak w przykładzie z dokumentacji n8n", "Użyj Test URL node'a Webhook, który nasłuchuje przez 120 sekund, a potem przełącz się na Production URL"],
            ],
          },
          {
            type: "p",
            text: "Jeśli używasz webhooka, sprawdzaj, czy żądania naprawdę pochodzą z Zendesk. Zendesk wysyła dwa nagłówki: X-Zendesk-Webhook-Signature i X-Zendesk-Webhook-Signature-Timestamp. Podpis to base64(HMACSHA256(timestamp + body)) utworzony z użyciem sekretu podpisującego webhooka, który możesz odsłonić na stronie szczegółów webhooka lub pobrać przez API. Przelicz go w swoim workflow i odrzucaj żądania, które się nie zgadzają. Zendesk zaznacza też, że ta sama akcja może wywołać webhook więcej niż raz, więc zadbaj, aby workflow można było bezpiecznie uruchomić dwa razy dla tego samego zgłoszenia.",
          },
          {
            type: "p",
            text: "Node Webhook może odpowiedzieć od razu, po zakończeniu ostatniego node'a albo przez osobny node Respond to Webhook. Przy dłuższych workflowach natychmiastowa odpowiedź szybko potwierdza odbiór po stronie Zendesk, podczas gdy reszta pracy trwa dalej.",
          },
        ],
      },
      {
        heading: "Przykładowy workflow: klasyfikacja nowych zgłoszeń i powiadomienie na Slacku",
        blocks: [
          {
            type: "p",
            text: "Oto popularny wzorzec opisany krok po kroku. Pokazuje, jak nody do siebie pasują. To nie jest case study TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: node Zendesk Trigger albo node Webhook zasilany przez trigger Zendesk, który uruchamia się po utworzeniu zgłoszenia. Wyślij co najmniej ID zgłoszenia.",
              "Pobranie: node Zendesk z zasobem Ticket pobiera pełne zgłoszenie, w tym temat, opis i bieżące tagi.",
              "Klasyfikacja: node Text Classifier przypisuje tekst do zdefiniowanych przez Ciebie kategorii, np. rozliczenia, problem techniczny lub zwrot. Każda kategoria ma nazwę i opis, który pomaga modelowi. Domyślnie elementy niepasujące do żadnej kategorii są odrzucane, więc włącz gałąź Other, aby je wychwycić.",
              "Aktualizacja: node Zendesk ustawia grupę i tagi. Najpierw scal istniejące tagi albo dodaj tagi przez node HTTP Request z additional_tags, aby nie wymazać tagów ustawionych przez agentów.",
              "Powiadomienie: node Slack publikuje kategorię i link do zgłoszenia na kanale zespołu.",
              "Obsługa błędów: wysyłaj nieudane uruchomienia do alertu, a gdy Zendesk zwróci odpowiedź 429, odczekaj i ponów próbę.",
            ],
          },
          {
            type: "p",
            text: "Ten sam wzorzec możesz rozbudować. Wysyłaj pilne zgłoszenia na osobny kanał Slack albo przed wyborem grupy wyszukaj organizację klienta za pomocą zasobu Organization.",
          },
        ],
      },
      {
        heading: "Limity zapytań i gdzie działa n8n",
        blocks: [
          {
            type: "p",
            text: "Zendesk ogranicza liczbę żądań API na minutę w zależności od planu. Dokumentacja dla deweloperów podaje następujące domyślne limity dla Support API i Help Center API:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 żądań na minutę.",
              "Suite Growth i Suite Professional: 400 żądań na minutę.",
              "Suite Enterprise: 700 żądań na minutę.",
              "Suite Enterprise Plus: 2 500 żądań na minutę.",
            ],
          },
          {
            type: "p",
            text: "Dodatek High Volume API podnosi limit kwalifikującego się planu do 2 500 żądań na minutę. Zastępuje on limit planu, a nie się do niego dodaje, i wymaga planu Suite Growth lub wyższego (albo Support Professional lub wyższego) z co najmniej 10 licencjami agentów. Po przekroczeniu limitu Zendesk zwraca HTTP 429 z nagłówkiem Retry-After, który podaje, ile sekund trzeba odczekać. Niektóre endpointy mają własne, surowsze limity. Policz wywołania API wykonywane przy każdym uruchomieniu i pomnóż przez szczytowy wolumen zgłoszeń. Zadania zbiorcze, np. uzupełnianie tagów w starych zgłoszeniach, częściej trafiają na limit, więc dziel je na partie i dodawaj odczekiwanie.",
          },
          {
            type: "p",
            text: "n8n działa jako n8n Cloud – zarządzana instancja, którą n8n uruchamia za Ciebie – albo jako instalacja self-hosted na Twoim własnym komputerze lub infrastrukturze. W większości instalacji self-hosted dokumentacja zaleca Dockera, a n8n Cloud – jeśli nie masz doświadczenia w zarządzaniu serwerami. Przy obu metodach uruchamiania Zendesk musi mieć dostęp do Twojej instancji n8n. Jeśli instancja self-hosted stoi za reverse proxy, ustaw N8N_WEBHOOK_URL na jej publiczny bazowy URL, aby n8n pokazywało prawidłowe adresy URL webhooków, a usługi zewnętrzne poprawnie je rejestrowały. N8N_WEBHOOK_URL zastępuje WEBHOOK_URL, które nadal działa, ale od n8n 2.35.0 jest przestarzałe (deprecated).",
          },
          {
            type: "p",
            text: "TascaLab buduje takie automatyzacje Zendesk z użyciem n8n, Make, API i webhooków, na narzędziach, których już używasz. Projekty Ticket Routing & Categorization kosztują {{price:routing}}, a projekty Custom Automation {{price:custom}}. Większość wdrożeń trwa od 1 do 3 tygodni, a każdy projekt obejmuje podstawową dokumentację i 30 dni wsparcia po uruchomieniu. Możesz zacząć od bezpłatnej 30-minutowej rozmowy Health Check.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Czy n8n ma wbudowaną integrację z Zendesk?",
        a: "Tak. n8n ma node Zendesk dla zgłoszeń, pól zgłoszeń, użytkowników i organizacji oraz node Zendesk Trigger, który uruchamia workflowy na podstawie zdarzeń w Zendesk. Oba korzystają z tych samych poświadczeń Zendesk.",
      },
      {
        q: "Dlaczego node Zendesk w n8n usuwa tagi moich zgłoszeń?",
        a: "Gdy wypełniasz Tag Names or IDs w operacji Update Ticket, cała lista tagów zostaje zastąpiona. Dokumentacja n8n sugeruje najpierw scalić istniejące tagi albo dodawać tagi przez node HTTP Request z właściwością additional_tags w Zendesk lub przez endpoint tagów.",
      },
      {
        q: "Jakie metody uwierzytelniania obsługują poświadczenia Zendesk w n8n?",
        a: "Token API, wpisywany razem z subdomeną i e-mailem, którym się logujesz, albo OAuth2 z użyciem client ID i sekretu klienta OAuth utworzonego w Zendesk.",
      },
      {
        q: "Jak sprawdzić, czy żądanie webhooka pochodzi z Zendesk?",
        a: "Przelicz base64(HMACSHA256(timestamp + body)) z użyciem sekretu podpisującego webhooka i porównaj wynik z nagłówkiem X-Zendesk-Webhook-Signature. Znacznik czasu znajduje się w nagłówku X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "Co się dzieje, gdy workflow przekroczy limit zapytań Zendesk API?",
        a: "Zendesk odrzuca żądanie z kodem HTTP 429 i nagłówkiem Retry-After, który podaje, ile sekund trzeba odczekać. Domyślne limity wynoszą od 200 żądań na minutę w Suite Team do 2 500 w Suite Enterprise Plus.",
      },
    ],
    sources: [
      { label: "n8n Docs — Zendesk node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk" },
      { label: "n8n Docs — Zendesk Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger" },
      { label: "n8n Docs — Zendesk credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/zendesk" },
      { label: "n8n Docs — Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook" },
      { label: "n8n Docs — Text Classifier node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Configure webhook URLs with reverse proxy", url: "https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "Zendesk Developer Docs — Rate limits", url: "https://developer.zendesk.com/api-reference/introduction/rate-limits/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
