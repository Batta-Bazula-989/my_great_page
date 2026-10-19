import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  {
    key: "zendesk-automation",
    slug: "zendesk-automatisering",
    category: "helpdesks",
    navLabel: "Zendesk-automatisering",
    primaryKeyword: "zendesk automatisering",
    title: "Zendesk-automatisering: triggers, automatiseringar, makron",
    description:
      "Så fungerar Zendesk-automatisering: triggers, automatiseringar och makron, körning varje timme, triggerordning, routning, webhooks och Zendesk API.",
    h1: "Zendesk-automatisering: triggers, automatiseringar, makron och routning",
    intro:
      "Zendesk-automatisering bygger på tre verktyg för affärsregler: triggers som körs direkt när ett ärende skapas eller uppdateras, automatiseringar som körs enligt ett schema varje timme och makron som agenter tillämpar manuellt. Routning (omnikanal eller kompetensbaserad), webhooks och Zendesk API täcker det som reglerna inte klarar på egen hand. Nedan ser du hur varje del fungerar och vad som är värt att automatisera först.",
    keyFacts: [
      "Ärendetriggers körs direkt efter att ett ärende har skapats eller uppdaterats, i den ordning de står i listan.",
      "Automatiseringar körs en gång i timmen på ärenden som inte är stängda, och var och en kan hantera upp till 1 000 ärenden per timme.",
      "Varje automatisering behöver ett villkor som bara är sant en gång, eller en åtgärd som upphäver ett villkor, annars fortsätter den att köras.",
      "Makron innehåller bara åtgärder, inga villkor, och kan bara göra det som agenten som tillämpar dem har behörighet till.",
      "En webhook kopplas antingen till Zendesk-händelser eller till triggers och automatiseringar, inte till båda.",
    ],
    sections: [
      {
        heading: "Triggers, automatiseringar och makron",
        blocks: [
          {
            type: "p",
            text: "Alla tre verktygen ändrar ärenden, men de startar på olika sätt. Zendesk formulerar det själv så här: skillnaden mellan triggers och automatiseringar ligger inte i vilka åtgärder de kan utföra, utan i vilka villkor som sätter i gång dem. Makron har inga villkor alls, eftersom ingenting utvärderar ärendet automatiskt. Det är en agent som bestämmer när ett makro ska tillämpas.",
          },
          {
            type: "table",
            caption: "Zendesks tre verktyg för affärsregler",
            head: ["Verktyg", "Vad som startar det", "Villkor", "Typisk användning"],
            rows: [
              [
                "Trigger",
                "Ett ärende skapas eller uppdateras (körs direkt)",
                "Ja",
                "Routa nya ärenden, sätta fält, skicka aviseringar",
              ],
              [
                "Automatisering",
                "Schema varje timme, utifrån förfluten tid",
                "Ja, oftast 'Hours since'-villkor",
                "Påminnelser, eskalering av ärenden som blivit liggande, stängning av lösta ärenden",
              ],
              [
                "Makro",
                "En agent tillämpar det manuellt",
                "Nej, bara åtgärder",
                "Färdiga svar och återkommande uppdateringar av flera fält",
              ],
            ],
          },
          {
            type: "p",
            text: "De tre fungerar bra tillsammans. Ett vanligt mönster är ett makro som lägger till en tagg, vilket direkt sätter i gång en trigger som letar efter just den taggen. Observera att ett makro bara kan göra det som den aktuella användaren har behörighet till, så en agent med begränsade behörigheter kanske inte kan tillämpa alla ändringar som ett makro innehåller.",
          },
        ],
      },
      {
        heading: "Så fungerar triggerordningen",
        blocks: [
          {
            type: "p",
            text: "Varje gång ett ärende skapas eller uppdateras körs alla ärendetriggers mot det i en cykel, i den ordning de står i listan. Om en trigger uppdaterar ärendet börjar cykeln om och alla triggers körs igen, utom de som redan har körts och uppdaterat ärendet. En triggers ändring kan alltså göra en annan triggers villkor sanna, även om de inte var det en stund tidigare.",
          },
          {
            type: "p",
            text: "Zendesks rekommenderade ordning för ärendetriggers:",
          },
          {
            type: "ol",
            items: [
              "Triggers som ändrar ärendevärden som status, prioritet eller andra fält.",
              "Triggers som tilldelar ärendet.",
              "Aviseringstriggers, sist, så att mejl och meddelanden speglar ärendets slutliga tillstånd.",
            ],
          },
          {
            type: "p",
            text: "Om du använder triggerkategorier måste kategoriernas ordning motsvara den ordning du vill att triggrarna ska köras i; du ändrar den med Edit order i triggerlistan. Använd villkoret Ticket | Is | Created för regler som bara ska gälla nya ärenden (routning är det klassiska exemplet), och Ticket | Is | Updated för till exempel aviseringar om uppdateringar. Ärendetriggers körs inte på stängda ärenden.",
          },
        ],
      },
      {
        heading: "Hur ofta Zendesk-automatiseringar körs och hur du stoppar loopar",
        blocks: [
          {
            type: "p",
            text: "Automatiseringar körs en gång i timmen på alla ärenden som inte är stängda. Tidpunkten är ungefärlig: en automatisering startar någon gång under timmen, inte på en fast minut. Varje automatisering kan hantera upp till 1 000 ärenden per timme, och resten får vänta till senare körningar.",
          },
          {
            type: "p",
            text: "Eftersom automatiseringar kontrollerar samma ärenden varje timme kräver Zendesk att varje automatisering innehåller ett villkor som bara är sant en gång, eller en åtgärd som upphäver minst ett villkor. Utan det fortsätter villkoren att matcha och automatiseringen körs i en oändlig loop. Standardautomatiseringen 'close ticket after solved' löser detta naturligt: när ärendet stängs uppfyller det inte längre villkoret 'Status is Solved'. För egna automatiseringar är den vanliga lösningen att lägga till en tagg och utesluta den taggen i villkoren.",
          },
          {
            type: "note",
            text: "För tidsvillkor rekommenderar Zendesk 'Hours since ... greater than' framför 'Hours since ... is'. Ett 'is'-villkor kan missas helt om automatiseringen inte körs under just den timmen. Ett 'greater than'-villkor behöver ändå en upphävande åtgärd eller tagg.",
          },
        ],
      },
      {
        heading: "Routningsalternativ för inkommande ärenden",
        blocks: [
          {
            type: "p",
            text: "Triggers kan routa ärenden genom att ange en grupp, en tilldelad agent eller kompetenser (skills), men Zendesk har också särskilda routningsfunktioner:",
          },
          {
            type: "ul",
            items: [
              "Omnikanalroutning (omnichannel routing) skickar ärenden från mejl, samtal och meddelanden till agenter utifrån deras tillgänglighet och kapacitet, och kan även ta hänsyn till prioritet och kompetenser.",
              "Kompetenser kan läggas till på ärenden av triggers och markeras som obligatoriska eller valfria. Obligatoriska kompetenser begränsar vilka agenter som kan få ärendet; valfria kompetenser kan få en tidsgräns så att ärendet faller tillbaka på den vanliga routningsmodellen.",
              "Fristående kompetensbaserad routning är en pull-modell: ärenden sorteras efter kompetens och agenter hämtar arbete från kompetensbaserade vyer. Den kan inte användas för röst- eller meddelandeärenden.",
            ],
          },
          {
            type: "p",
            text: "För samtal är omnikanalroutning det enda sättet för triggers att påverka routningen, eftersom ett ärende skapas så snart ett samtal kommer in i kön. Routningsfunktionerna skiljer sig mellan planer, så kontrollera vad din plan innehåller innan du bygger upplägget kring kompetenser.",
          },
        ],
      },
      {
        heading: "Webhooks och Zendesk API",
        blocks: [
          {
            type: "p",
            text: "När en regel behöver meddela ett annat system något använder du en webhook. Du skapar den i Admin Center och väljer anslutningstyp: Zendesk-händelser, eller trigger eller automatisering. En webhook kan använda den ena eller den andra, inte båda, och du kan inte ändra anslutningsmetoden i efterhand. I en trigger eller automatisering lägger du till åtgärden 'Notify webhook', väljer webhooken och anger payloaden. Anropets body kan vara JSON, XML eller formulärkodad, och payloaden får inte överstiga 16 000 tecken. Varje webhook har alternativet Test webhook så att du kan kontrollera anropet innan det tas i drift.",
          },
          {
            type: "p",
            text: "När logiken behöver läsa data, fatta beslut i kod eller skriva tillbaka till ärenden använder du Ticketing API. Ärenden skapas med en POST till tickets-endpointen och uppdateras med en PUT till ärendets egen URL, med bulkvarianter för många ärenden samtidigt. Anrop kan autentiseras med en OAuth-åtkomsttoken som skickas i en Bearer-header.",
          },
          {
            type: "p",
            text: "Bra första kandidater för Zendesk-automatisering:",
          },
          {
            type: "ul",
            items: [
              "Routa nya ärenden till rätt grupp utifrån kanal, formulär, språk eller nyckelord.",
              "Påminnelser och eskaleringar för ärenden som har väntat för länge på svar.",
              "Posta ärenden med hög prioritet och VIP-ärenden i en Slack-kanal via en webhook.",
              "Hämta order- eller kontodata till ett ärende via API:et innan en agent öppnar det.",
            ],
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab arbetar i ditt befintliga Zendesk-konto, utan plattformsbyte, med Zendesk API, webhooks och Make eller n8n där de passar. Ticket Routing & Categorization är ett engångsprojekt för {{price:routing}}; Custom Automation för flöden som går över flera system kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering, grundläggande dokumentation och inga dolda avgifter, och de flesta upplägg tar 1–3 veckor. Du kan börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Hur ofta körs Zendesk-automatiseringar?",
        a: "En gång i timmen, på alla ärenden som inte är stängda. Exakt vilken minut under timmen varierar, och varje automatisering kan hantera upp till 1 000 ärenden per timme.",
      },
      {
        q: "Vad är skillnaden mellan en trigger och en automatisering i Zendesk?",
        a: "Triggers är händelsebaserade och körs direkt när ett ärende skapas eller uppdateras. Automatiseringar är tidsbaserade och körs varje timme. Båda kan utföra samma typer av åtgärder.",
      },
      {
        q: "Varför körs min Zendesk-automatisering om och om igen på samma ärende?",
        a: "Den saknar troligen ett upphävande villkor eller en upphävande åtgärd. Lägg till en åtgärd som gör ett av dess villkor falskt, till exempel en tagg som villkoren utesluter.",
      },
      {
        q: "Kan en trigger i Zendesk anropa ett externt system?",
        a: "Ja. Skapa en webhook som är kopplad till triggers och automatiseringar och lägg sedan till åtgärden 'Notify webhook' i triggern, med den payload du vill skicka.",
      },
      {
        q: "Påverkar triggerkategorier i vilken ordning triggrarna körs?",
        a: "Ja. Triggers körs i listordning, och kategoriernas ordning måste motsvara den ordning du vill att de ska köras i. Du ändrar den med Edit order i listan över ärendetriggers.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },
  {
    key: "freshdesk-automation",
    slug: "freshdesk-automatisering",
    category: "helpdesks",
    navLabel: "Freshdesk-automatisering",
    primaryKeyword: "freshdesk automatisering",
    title: "Freshdesk-automatisering: regler, tilldelning och webhooks",
    description:
      "Så fungerar Freshdesk-automatisering: Ticket Creation, Ticket Updates och Hourly Triggers, round-robin och kompetensbaserad tilldelning, webhooks och API.",
    h1: "Freshdesk-automatisering: regeltyper, tilldelning och webhooks",
    intro:
      "Freshdesk-automatisering bygger på tre regeltyper: Ticket Creation-regler för nya ärenden, Ticket Updates-regler för händelser i befintliga ärenden och Hourly Triggers för tidsbaserade kontroller. Tilldelningen (round-robin, lastbalanserad eller kompetensbaserad) avgör vem som får ärendet, och webhook-åtgärder samt Freshdesk API kopplar ihop allt med andra system.",
    keyFacts: [
      "Freshdesk har tre typer av automatiseringsregler: Ticket Creation, Ticket Updates och Hourly Triggers.",
      "Hourly Triggers (tidigare Time Triggers) körs varje timme, räknat i kalendertimmar, och bara på ärenden som uppdaterats under de senaste 30 dagarna.",
      "Ticket Creation-regler kan köra antingen den första matchande regeln eller alla matchande regler.",
      "Freshdesk utför upp till 1 000 webhook-anrop per timme från automatiseringsregler; anrop utöver det buffras.",
      "Lastbaserad tilldelning räknar bara ärenden med en aktiv SLA-timer till en agents belastning.",
    ],
    sections: [
      {
        heading: "Freshdesks tre typer av automatiseringsregler",
        blocks: [
          {
            type: "p",
            text: "Om du har använt Freshdesk ett tag känner du kanske igen dem under deras gamla namn. Freshdesk kallade dem tidigare Dispatch'r, Observer och Supervisor och samlade senare alla tre i en enda Automations-modul, med en separat flik för varje regeltyp.",
          },
          {
            type: "table",
            caption: "Freshdesks typer av automatiseringsregler",
            head: ["Regeltyp", "Tidigare namn", "När den körs", "Passar för"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "En gång, när ett nytt ärende skapas",
                "Kategorisering, prioritering och routning av inkommande ärenden",
              ],
              [
                "Ticket Updates",
                "Observer",
                "När en definierad händelse inträffar i ett befintligt ärende",
                "Reagera på svar, anteckningar, status- eller fältändringar",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Varje timme, enligt schema",
                "Påminnelser, eskaleringar, automatisk stängning av inaktiva ärenden",
              ],
            ],
          },
          {
            type: "p",
            text: "Ticket Creation-regler kontrollerar varje nytt ärende mot dina villkor och kör åtgärderna vid en matchning. Du väljer om Freshdesk bara ska köra den första matchande regeln eller alla matchande regler. Med första matchning avgör listans ordning vilken regel som vinner, så specifika regler ska ligga ovanför generella.",
          },
        ],
      },
      {
        heading: "Ticket Updates-regler: händelser, villkor, åtgärder",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates är den enda regeltypen där du konfigurerar händelser. En regel behöver minst en händelse och körs när någon av dem matchar. Du anger också vem som utförde åtgärden: en agent, beställaren, någon av dem, en medarbetare (collaborator) eller själva systemet (System).",
          },
          {
            type: "ul",
            items: [
              "Händelser: en ärendeegenskap ändras, en agent eller grupp uppdateras, en anteckning läggs till, ett svar skickas, kundfeedback kommer in; systemhändelser omfattar misslyckad e-postleverans och att ett ärende blir försenat (overdue).",
              "Villkor: ärendeegenskaper (inklusive taggar och anpassade fält), beställarens kontaktuppgifter och företagsfält.",
              "Åtgärder: sätta fält, tilldela om agent eller grupp, lägga till taggar eller bevakare, lägga till en anteckning, mejla en agent, en grupp eller beställaren, markera som spam eller radera, eller trigga en webhook.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates är också den enda regeltypen som kan skapa ett nytt ärende eller lägga till ett trådmeddelande. Den exakta listan över händelser beror på din plan och vilka funktioner du har aktiverat.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: tidsbaserade regler",
        blocks: [
          {
            type: "p",
            text: "Hourly Triggers väntar inte på en händelse. De går igenom ärenden varje timme och agerar på dem som matchar. Det schemat påverkar hur du ska skriva dem:",
          },
          {
            type: "ul",
            items: [
              "Tidsgränsen du anger bör vara minst en timme, eftersom regeln bara körs en gång i timmen.",
              "De räknar kalendertimmar, inte kontorstid.",
              "De behandlar bara ärenden som uppdaterats under de senaste 30 dagarna.",
              "De fungerar bara på ärendeegenskaper, inte på kontakt- eller företagsegenskaper.",
            ],
          },
          {
            type: "note",
            text: "En tidsbaserad regel som inte är noggrant definierad körs varje timme i följd på samma ärende. En vanlig lösning är att kombinera ett tidsvillkor med 'greater than' med ett villkor med 'less than', så att ärendet bara matchar en gång.",
          },
        ],
      },
      {
        heading: "Automatisk tilldelning av ärenden",
        blocks: [
          {
            type: "p",
            text: "Automatiseringsregler sätter oftast gruppen; tilldelningen avgör vilken agent i gruppen som får ärendet. Freshdesks automatiska tilldelning körs på motorn Omniroute och erbjuder tre metoder per grupp:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: roterar ärenden mellan tillgängliga agenter i gruppen, hoppar över agenter som har nått full kapacitet och ger ärendet till den behöriga agent som fick ett ärende för längst tid sedan.",
              "Lastbalanserad: skickar varje nytt ärende till den agent som har lägst belastning, tills alla agenter har nått det konfigurerade maxvärdet. Bara ärenden med en aktiv SLA-timer räknas till belastningen, så när du löser ett ärende eller flyttar det till en status där SLA är avstängt frigörs kapacitet.",
              "Kompetensbaserad: agenter har kompetenser rangordnade efter prioritet, och ett nytt ärende går till en agent med den första matchande kompetensen. Freshdesk rekommenderar en reservkompetens, med gruppen som villkor, som mappas sist för alla agenter så att inget ärende förblir otilldelat.",
            ],
          },
          {
            type: "p",
            text: "Vilka metoder du kan använda beror på din plan, så kontrollera gruppinställningarna innan du väljer. Manuellt tilldelade ärenden räknas fortfarande till belastningen och kan få en agent att gå över gränsen, vilket pausar automatisk tilldelning till den agenten tills antalet sjunker.",
          },
        ],
      },
      {
        heading: "Webhooks och Freshdesk API",
        blocks: [
          {
            type: "p",
            text: "En webhook i Freshdesk är en automatiseringsåtgärd som gör ett API-anrop till ett annat system. Du väljer typ av anrop och callback-URL, och både URL:en och payloaden kan innehålla platshållare som {{ticket.id}}. Om du gör ett GET-anrop via en webhook kan regeln inte använda svaret; för det hänvisar Freshdesk till sin åtgärd Trigger API.",
          },
          {
            type: "p",
            text: "Freshdesk utför upp till 1 000 webhook-anrop per timme från automatiseringsregler. Anrop utöver det buffras tills det finns ny kapacitet nästa timme, så flöden med hög volym bör inte vara beroende av omedelbar leverans.",
          },
          {
            type: "p",
            text: "För integrationer som körs utanför Freshdesk använder du REST API:et på your-domain.freshdesk.com/api/v2/. Anrop autentiseras med din API-nyckel som användarnamn och ett valfritt låtsasvärde som lösenord. Anropsgränserna (rate limits) gäller per konto och minut och beror på din plan; ett 429-svar betyder att gränsen är förbrukad, och headern Retry-After anger hur många sekunder du ska vänta. När du listar ärenden returneras som standard bara de senaste 30 dagarna, så använd filtret updated_since för äldre ärenden.",
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger vidare på ditt befintliga Freshdesk-konto, utan plattformsbyte, med automatiseringsregler, webhooks, Freshdesk API och Make eller n8n där de hjälper. Ticket Routing & Categorization är ett engångsprojekt för {{price:routing}}; Custom Automation kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta upplägg tar 1–3 veckor. Första steget är ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vilka typer av automatiseringsregler finns i Freshdesk?",
        a: "Ticket Creation-regler körs på nya ärenden, Ticket Updates-regler körs när en händelse inträffar i ett befintligt ärende, och Hourly Triggers körs enligt schema varje timme.",
      },
      {
        q: "Vad hände med Dispatch'r, Observer och Supervisor?",
        a: "Det är de äldre namnen på samma regeltyper: Dispatch'r för ärendeskapande, Observer för ärendeuppdateringar och Supervisor för tidsbaserade regler. Freshdesk slog ihop dem till en enda Automations-modul.",
      },
      {
        q: "Använder Freshdesks Hourly Triggers kontorstid?",
        a: "Nej. De räknar kalendertimmar och körs bara på ärenden som uppdaterats under de senaste 30 dagarna.",
      },
      {
        q: "Hur många webhooks kan Freshdesk-automatiseringar skicka?",
        a: "Freshdesk utför upp till 1 000 webhook-anrop per timme från automatiseringsregler. Anrop över gränsen buffras tills kapacitet frigörs.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
  {
    key: "jira-service-management-automation",
    slug: "jira-service-management-automatisering",
    category: "helpdesks",
    navLabel: "Jira Service Mgmt-automatisering",
    primaryKeyword: "jira service management automatisering",
    title: "Jira Service Management-automatisering: flöden och SLA",
    description:
      "Automatisering i Jira Service Management: triggers, villkor och åtgärder, SLA- och godkännandetriggers, smarta värden, webhooks, köer och förfrågningstyper.",
    h1: "Jira Service Management-automatisering: så fungerar flöden, SLA och webhooks",
    intro:
      "Automatisering i Jira Service Management bygger på flöden (tidigare kallade regler) med tre delar: en trigger som startar dem, valfria villkor som filtrerar vilka arbetsobjekt de berör och åtgärder som utför arbetet. Servicespecifika triggers som SLA-överträdelser och godkännanden, tillsammans med smarta värden och webbanrop, gör att du kan automatisera det mesta av sorteringen, eskaleringen och aviseringarna kring dina köer.",
    keyFacts: [
      "Varje automatiseringsflöde består av en trigger, valfria villkor och en eller flera åtgärder, som körs uppifrån och ned.",
      "Jira Service Management lägger till triggers som 'SLA threshold breached' och 'Approval required'.",
      "Åtgärden 'Send web request' anropar externa system; en trigger för inkommande webhooks låter externa system starta ett flöde.",
      "Smarta värden som {{issue.key}} infogar data från arbetsobjektet i fält, kommentarer och meddelanden.",
      "Varje SLA har egna villkor för start, paus och stopp; paus är valfritt.",
    ],
    sections: [
      {
        heading: "Triggers, villkor och åtgärder",
        blocks: [
          {
            type: "p",
            text: "Atlassians dokumentation kallar nu automatiseringsregler för 'flows' (flöden); du kommer att se båda termerna, och de betyder samma sak. Du kan skapa ett flöde från grunden, från en mall eller med Rovo, och när det är aktiverat körs stegen i ordning uppifrån och ned.",
          },
          {
            type: "table",
            caption: "De tre delarna i ett automatiseringsflöde i Jira Service Management",
            head: ["Del", "Vad den gör", "Exempel"],
            rows: [
              [
                "Trigger",
                "Startar flödet när något händer",
                "Arbetsobjekt skapat, arbetsobjekt flyttat till ny status, kommentar tillagd, SLA-tröskel överskriden, godkännande krävs, schemalagd, inkommande webhook",
              ],
              [
                "Villkor (valfritt)",
                "Begränsar vilka arbetsobjekt flödet agerar på",
                "Arbetsobjektet matchar ett JQL-filter, kommentaren är intern eller publik, användartyp",
              ],
              [
                "Åtgärd",
                "Utför arbetet",
                "Statusövergång, redigera fält, lägga till kommentar, skicka mejl, skicka webbanrop, skicka meddelande i Slack eller Microsoft Teams",
              ],
            ],
          },
          {
            type: "p",
            text: "Två triggers är specifika för servicearbete. 'SLA threshold breached' låter dig välja en SLA och köra antingen när den har överskridits eller när den är på väg att överskridas. 'Approval required' körs när ett arbetsobjekt som kräver godkännande skapas eller uppdateras, eller när nya godkännare läggs till. En schemalagd trigger kör ett flöde enligt en timer, vilket är användbart för återkommande kontroller, till exempel att lista arbetsobjekt som snart överskrider sin SLA.",
          },
        ],
      },
      {
        heading: "Köer, förfrågningstyper och SLA: det du automatiserar kring",
        blocks: [
          {
            type: "p",
            text: "Automatisering i Jira Service Management finns främst för att hålla tre strukturer korrekta:",
          },
          {
            type: "ul",
            items: [
              "Köer är filtrerade urval av arbetsobjekt som ger agenter en fokuserad vy över sitt arbete. De filtrerar på fält som status, arbetstyp, tilldelad person och prioritet, eller på JQL. Agenter kan inte skapa eller redigera köer; det gör space-administratörer.",
              "Förfrågningstyper (request types) är de formulär som kunder använder för att skicka in förfrågningar via portalen. Varje förfrågningstyp är kopplad till exakt en arbetstyp: förfrågningstypen hanterar namn och portalinställningar, medan arbetstypen innehåller arbetsflödet och fälten. En arbetstyp kan ligga bakom många förfrågningstyper.",
              "SLA:er mäter tid mot mål. Varje SLA har egna villkor för start, paus och stopp; paus är valfritt och används ofta medan man väntar på att kunden ska svara, och mätningen stoppas så snart något stoppvillkor uppfylls.",
            ],
          },
          {
            type: "p",
            text: "I praktiken sätter flöden de fält som köer och SLA-mål filtrerar på. Om ett flöde sätter prioritet eller ett anpassat fält utifrån förfrågningstypen eller meddelandets innehåll plockar rätt kö och rätt SLA-mål upp arbetsobjektet automatiskt.",
          },
        ],
      },
      {
        heading: "Smarta värden",
        blocks: [
          {
            type: "p",
            text: "Smarta värden (smart values) låter ett flöde infoga data från arbetsobjektet i fält, kommentarer, mejl och webbanropens body. {{issue.key}} returnerar nyckeln, till exempel PROJ-123. Andra fält följer samma mönster med fältets namn, även anpassade fält; om två fält har samma namn använder du i stället det anpassade fältets ID.",
          },
          {
            type: "p",
            text: "Atlassians gränssnitt säger nu 'work item' där det tidigare stod 'issue', men syntaxen för smarta värden i dokumentationen använder fortfarande prefixet issue. Fält med flera värden kan loopas igenom med #-syntaxen, som avslutas med {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks och externa system",
        blocks: [
          {
            type: "p",
            text: "Webhooks fungerar åt båda hållen:",
          },
          {
            type: "ul",
            items: [
              "Utgående: åtgärden 'Send web request' anropar ett annat systems API när ett flöde körs och kan returnera svarsdata till senare steg. Det mottagande systemet måste acceptera anrop från Atlassians nätverk.",
              "Inkommande: triggern för inkommande webhooks ger ett flöde en egen URL, så att ett externt system (en chattbot, ett faktureringsverktyg, ett övervakningsverktyg) kan starta flödet med ett HTTP-anrop.",
              "Chattverktyg: åtgärderna 'Send Slack message' och 'Send Microsoft Teams message' postar i kanaler, med smarta värden i meddelandetexten.",
            ],
          },
        ],
      },
      {
        heading: "Användningsgränser och vad du ska automatisera först",
        blocks: [
          {
            type: "p",
            text: "Per oktober 2026 mäter Jira Cloud automatiseringsanvändningen per produkt och månad, med gränser som beror på din plan. Atlassian beskriver hur användningen räknas på sidan 'How is your automation usage calculated'; kontrollera den, och din nuvarande användning, innan du lägger till schemalagda flöden som körs ofta.",
          },
          {
            type: "p",
            text: "Vanliga första flöden för en servicedesk:",
          },
          {
            type: "ul",
            items: [
              "Sätt prioritet, komponent eller tilldelad person när förfrågan skapas, utifrån förfrågningstypen och förfrågans innehåll.",
              "Posta i en eskaleringskanal när en SLA är på väg att överskridas.",
              "Påminn kunden när en förfrågan har väntat på kunden, och lös den sedan med en kommentar efter en bestämd tid.",
              "Skicka nya förfrågningar med hög prioritet till ett externt system via 'Send web request'.",
            ],
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab arbetar i din befintliga Jira Service Management-site, utan plattformsbyte, och kombinerar inbyggd automatisering med API:er, webhooks och Make eller n8n där ett flöde behöver nå andra verktyg. Ticket Routing & Categorization kostar {{price:routing}} som engångsbelopp; Custom Automation kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta upplägg tar 1–3 veckor. Börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Är automatiseringsregler och flöden i Jira samma sak?",
        a: "Ja. Atlassians nyare dokumentation och gränssnitt använder 'flow' för det som tidigare kallades automatiseringsregel. Strukturen är densamma: trigger, villkor och åtgärder.",
      },
      {
        q: "Kan automatisering i Jira Service Management reagera på SLA-överträdelser?",
        a: "Ja. Triggern 'SLA threshold breached' låter dig välja en SLA och köra antingen när den har överskridits eller när den är på väg att överskridas.",
      },
      {
        q: "Hur skickar jag data från Jira Service Management till ett annat system?",
        a: "Använd åtgärden 'Send web request' i ett flöde. Den anropar det andra systemets API när flödet körs och kan returnera svarsdata till senare steg.",
      },
      {
        q: "Vad är skillnaden mellan en förfrågningstyp och en arbetstyp?",
        a: "En förfrågningstyp är det formulär kunden ser i portalen; arbetstypen bakom den innehåller arbetsflödet och fälten. Varje förfrågningstyp använder en arbetstyp, och en arbetstyp kan användas av många förfrågningstyper.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "slack-support-automation",
    slug: "slack-automatisering-kundtjanst",
    category: "helpdesks",
    navLabel: "Slack-automatisering för support",
    primaryKeyword: "slack automatisering kundtjänst",
    title: "Slack-automatisering för kundtjänst: larm och eskaleringar",
    description:
      "Slack-automatisering för kundtjänst: eskaleringslarm, Workflow Builder, inkommande webhooks, Bolt-appar, Zendesk, Freshdesk och Jira, Slack Connect.",
    h1: "Slack-automatisering för kundtjänst: larm, eskaleringar och kundkanaler",
    intro:
      "För de flesta supportteam är Slack inte där kunderna hör av sig. Det är där teamet eskalerar, får larm och samordnar sig. Slack-automatisering för kundtjänst innebär att få in rätt ärendehändelser i rätt kanal, göra om Slack-meddelanden till ärenden vid behov och, för B2B-team, hjälpa kunder direkt i Slack Connect-kanaler.",
    keyFacts: [
      "Arbetsflöden i Workflow Builder kan starta från en länk, en webhook, ett schema, ett postat meddelande, en emojireaktion eller att någon går med i en kanal.",
      "En inkommande webhook är en unik URL som är kopplad till en kanal; du skickar en JSON-payload till den med POST för att posta ett meddelande.",
      "Slack tillåter generellt att appar postar högst ett meddelande per sekund och kanal.",
      "Zendesk, Freshdesk och Jira Service Management har var sin Slack-integration för att skapa ärenden och skicka aviseringar.",
      "Slack Connect låter personer från andra organisationer arbeta med dig i en delad kanal.",
    ],
    sections: [
      {
        heading: "Sätt att automatisera supportarbete i Slack",
        blocks: [
          {
            type: "p",
            text: "Det finns fyra huvudsakliga byggstenar, från no-code till egen kod. Välj den enklaste som klarar uppgiften.",
          },
          {
            type: "table",
            caption: "Alternativ för Slack-automatisering i supportteam",
            head: ["Alternativ", "Vad det är", "Passar bäst för"],
            rows: [
              [
                "Helpdesk-integration",
                "Slack-appen från Zendesk, Freshdesk eller Jira Service Management",
                "Ärendeaviseringar i kanaler och att skapa ärenden från meddelanden",
              ],
              [
                "Workflow Builder",
                "Slacks inbyggda no-code-verktyg för arbetsflöden",
                "Intagsformulär, checklistor för eskalering, schemalagda påminnelser",
              ],
              [
                "Inkommande webhook",
                "En URL som postar ett JSON-meddelande i en kanal",
                "Envägslarm från din helpdesk, skript eller Make/n8n",
              ],
              [
                "Egen Slack-app (Bolt)",
                "Din egen app som lyssnar på händelser och kommandon",
                "Tvåvägsåtgärder: knappar, snedstreckskommandon, uppslag i andra system",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integrationer från helpdesk till Slack",
        blocks: [
          {
            type: "p",
            text: "Börja med det som din helpdesk redan erbjuder:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: agenter kan skapa ärenden med genvägen /zendesk, en meddelandeåtgärd som gör om ett Slack-meddelande till ett ärende, Zendesk-appen i sidofältet eller ett @zendesk-omnämnande i en Slack Connect-kanal. Ärenden som skapas på det här sättet får taggen created_from_slack. Administratörer använder triggers för att bestämma vilka händelser som postas i vilka kanaler, och Zendesk-appen måste bjudas in till varje kanal som ska ta emot aviseringar.",
              "Freshdesk: Slack-appen kan göra om ett kanalmeddelande till ett ärende, med meddelandet som beskrivning, och ärenden kan också skapas från grunden inne i Slack. Slack-medlemmar som inte är Freshdesk-agenter kan också skapa ärenden.",
              "Jira Service Management: chatt i Slack kopplar förfrågningskanaler, där folk ber om hjälp, till en agentkanal. Agenter kan skapa ett arbetsobjekt genom att reagera på ett meddelande med emojin :ticket:, och förfrågningstyper måste vara kopplade till en förfrågningskanal för att vara tillgängliga där.",
            ],
          },
          {
            type: "p",
            text: "Om den inbyggda integrationen inte täcker en händelse som är viktig för dig kan du i stället använda en inkommande webhook eller Workflow Builder, som beskrivs nedan.",
          },
        ],
      },
      {
        heading: "Workflow Builder för intern eskalering",
        blocks: [
          {
            type: "p",
            text: "Med Workflow Builder kan vem som helst bygga arbetsflöden i flera steg utan kod. Ett arbetsflöde startar från en trigger: en delbar länk, en webhook, ett schema, en uppdatering av ett listobjekt, ett meddelande som postas i en kanal, att någon går med i en kanal eller en emojireaktion. Stegen körs i den ordning du anger och kan vara Slack-åtgärder som att skicka ett meddelande, connector-steg för tredjepartstjänster eller anpassade steg som utvecklare har byggt. Variabler skickar data från tidigare steg vidare till senare, knappar pausar ett arbetsflöde tills någon klickar, och förgreningar leder personer genom olika vägar utifrån villkor.",
          },
          {
            type: "p",
            text: "Typiska användningar inom support: ett eskaleringsformulär som startas via en länk, samlar in ärendets URL och allvarlighetsgrad och postar ett strukturerat meddelande i en eskaleringskanal; ett arbetsflöde som startas av en emojireaktion och drar in den jouransvariga; eller en schemalagd veckopåminnelse om att gå igenom ärenden som blivit liggande.",
          },
        ],
      },
      {
        heading: "Inkommande webhooks och Bolt-appar",
        blocks: [
          {
            type: "p",
            text: "En inkommande webhook är det enklaste sättet att skicka larm från vilket system som helst till Slack. Varje webhook-URL är kopplad till en kanal; du skickar en HTTP POST med en JSON-body som innehåller fältet text, och vid behov Block Kit-block för rikare layouter. Alla som har URL:en kan posta i din arbetsyta, så behandla den som ett lösenord och håll den borta från publik kod.",
          },
          {
            type: "p",
            text: "Tänk på volymen. Enligt Slacks rate limits bör appar generellt inte posta mer än ett meddelande per sekund och kanal, oavsett om det sker via chat.postMessage eller en inkommande webhook. Korta toppar tolereras, men varaktiga överskridanden får HTTP 429-svar med headern Retry-After. För köer med hög belastning bör du samla larm eller skicka en sammanfattning i stället för ett meddelande per ärende.",
          },
          {
            type: "p",
            text: "När du behöver tvåvägsinteraktion, till exempel en knapp som tilldelar ett ärende eller ett snedstreckskommando som slår upp en order, bygger du en Slack-app med Bolt, Slacks ramverk för JavaScript, Python och Java. En Bolt-app lyssnar efter händelser och snedstreckskommandon i din arbetsyta och svarar på dem, till exempel genom att anropa din helpdesks API.",
          },
        ],
      },
      {
        heading: "Slack Connect för kundkanaler",
        blocks: [
          {
            type: "p",
            text: "Med Slack Connect kan du dela en kanal med personer från andra organisationer, som var och en arbetar i sin egen Slack. B2B-supportteam använder det som en egen kanal per nyckelkund. Du bjuder in en extern organisation från kanalinställningarna och väljer en behörighetsnivå: bara posta, eller posta, bjuda in med mera. Administratörer kan begränsa vem som får bjuda in externa personer. En Slack Connect-kanal kan omfatta upp till 250 organisationer, inklusive din egen.",
          },
          {
            type: "p",
            text: "Kundkanaler behöver fortfarande ärendehantering. Zendesks integration stöder @zendesk-omnämnanden i Slack Connect-kanaler, med färre alternativ för externa användare; för andra helpdesksystem kan en liten Bolt-app eller ett Make/n8n-flöde göra om taggade meddelanden till ärenden.",
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab kopplar Slack till den helpdesk du redan använder (Zendesk, Freshdesk, Jira eller interna verktyg) via API:er, webhooks och Make eller n8n, utan plattformsbyte. Automated Reports som levereras till Slack eller mejl kostar {{price:reports}} som engångsbelopp; Custom Automation för tvåvägsflöden i Slack kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta upplägg tar 1–3 veckor. Börja med ett kostnadsfritt Health Check-samtal på 30 minuter.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kan jag skapa helpdesk-ärenden från Slack-meddelanden?",
        a: "Ja. Både Zendesk och Freshdesk har Slack-appar som gör om ett meddelande till ett ärende, och agenter i Jira Service Management kan skapa ett arbetsobjekt från ett meddelande i en förfrågningskanal genom att reagera med emojin :ticket:.",
      },
      {
        q: "Vad är det enklaste sättet att skicka supportlarm till Slack?",
        a: "Använd din helpdesks Slack-integration om den täcker händelsen du behöver. Annars postar du en JSON-payload till en inkommande webhook i Slack från din helpdesks webhook-åtgärd eller från Make eller n8n.",
      },
      {
        q: "Kan ett arbetsflöde i Slack startas av ett externt system?",
        a: "Ja. Workflow Builder stöder en webhook-trigger, så ett externt system kan starta ett arbetsflöde genom att skicka ett HTTP-anrop till det.",
      },
      {
        q: "Finns det en gräns för hur många meddelanden jag kan posta i en kanal?",
        a: "Slack tillåter generellt att appar postar högst ett meddelande per sekund och kanal. Korta toppar tolereras, men varaktiga överskridanden ger HTTP 429-fel.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "intercom-automation",
    slug: "intercom-automatisering",
    category: "helpdesks",
    navLabel: "Intercom-automatisering",
    primaryKeyword: "intercom automatisering",
    title: "Intercom-automatisering: Workflows, Fin, routning och API",
    description:
      "Så fungerar Intercom-automatisering: triggers, förgreningar och åtgärder i Workflows, tilldelning i teaminkorgar, Fin AI Agent, Slack, Jira, webhooks och API.",
    h1: "Intercom-automatisering: Workflows, tilldelning, Fin och API:et",
    intro:
      "Intercom-automatisering byggs främst i Workflows: en visuell byggare där en trigger startar flödet, förgreningar (branches) väljer en väg och åtgärder utför arbetet, till exempel taggning, tilldelning eller att låta Fin svara. Varje teaminkorgs tilldelningsmetod avgör sedan vilken teammedlem som får konversationen, och webhooks samt REST API:et täcker allt som måste ske utanför Intercom. Nedan ser du hur varje del fungerar och var du ska börja.",
    keyFacts: [
      "Workflows byggs i en visuell byggare och kan vara kundriktade eller köras tyst i bakgrunden för teammedlemmar.",
      "Med förgreningar följer en konversation bara den första matchande vägen; Apply rules kör alla vägar som matchar.",
      "Bara en SLA kan tillämpas på en konversation; senare SLA-åtgärder från andra arbetsflöden ignoreras.",
      "Balanserad tilldelning ger en konversation till den behöriga teammedlem som har minst antal öppna konversationer.",
      "Webhook-prenumerationer skapas i Developer Hub, inte via API:et, och endpointen måste använda HTTPS.",
    ],
    sections: [
      {
        heading: "Så byggs arbetsflöden i Intercom Workflows",
        blocks: [
          {
            type: "p",
            text: "Workflows är Intercoms samlade ställe för att automatisera kundkonversationer och processer för teammedlemmar. Du bygger dem i en visuell byggare av återanvändbara steg. Ett arbetsflöde kan vara kundriktat, som en bot som hälsar och sorterar, eller köras tyst i bakgrunden för ditt team. Varje arbetsflöde kombinerar samma fåtal typer av steg.",
          },
          {
            type: "table",
            caption: "Byggstenarna i ett arbetsflöde i Intercom",
            head: ["Byggsten", "Vad den gör", "Exempel"],
            rows: [
              [
                "Trigger",
                "Bestämmer när arbetsflödet startar och för vem",
                "När en konversation startar, under en konversation, vid en ticket-händelse eller när ett annat arbetsflöde anropar det som ett återanvändbart arbetsflöde",
              ],
              [
                "Förgreningar (branches)",
                "Kontrollerar villkor och skickar konversationen längs den första väg vars villkor matchar",
                "Separata vägar för olika målgrupper, kanaler eller ämnen",
              ],
              [
                "Apply rules",
                "Kontrollerar alla vägar och kör åtgärderna för varje väg som matchar",
                "Flera oberoende taggar eller attribut som sätts i ett steg",
              ],
              [
                "Åtgärder",
                "Utför arbetet",
                "Tagga, tilldela, snooza, sätta prioritet, tillämpa en SLA, låta Fin svara, avisera Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Skillnaden mellan förgreningar och Apply rules spelar roll när villkor överlappar. Med förgreningar följer en konversation som uppfyller flera villkor bara den första matchande vägen, läst uppifrån och ned, så lägg de mest specifika villkoren först. Apply rules kör åtgärderna för alla matchande vägar, vilket passar steg som ska läggas ovanpå varandra i stället för att konkurrera.",
          },
        ],
      },
      {
        heading: "Inkorgsautomatisering: tilldelning, prioritet och SLA",
        blocks: [
          {
            type: "p",
            text: "Det mesta av inkorgsautomatiseringen är ett bakgrundsarbetsflöde som består av åtgärder. Assign skickar en konversation till en vald teammedlem eller teaminkorg. Tag lägger till en tagg, och taggar skapas och hanteras i inställningarna för din arbetsyta. Snooze tar tillfälligt bort konversationen från teammedlemmens inkorg; om kunden eller en teammedlem svarar under tiden avslutas arbetsflödet. Set priority anger hur brådskande konversationen är.",
          },
          {
            type: "p",
            text: "SLA:er tillämpas också med en åtgärd, men bara en SLA kan läggas till på en konversation. Om ett senare arbetsflöde försöker tillämpa en annan SLA ignoreras den åtgärden, så bestäm vilket arbetsflöde som äger SLA:erna innan du bygger flera.",
          },
          {
            type: "p",
            text: "När en konversation hamnar i en teaminkorg avgör inkorgens tilldelningsmetod vem som får den: manuell, round robin eller balanserad. Balanserad tilldelning ger varje ny konversation till den behöriga teammedlem som har minst antal öppna konversationer, och vid lika läge går den till den teammedlem som har väntat längst på en. För att vara behörig måste en teammedlem vara aktiv och under sin tilldelningsgräns. Intercom rekommenderar balanserad tilldelning för supportteam.",
          },
          {
            type: "note",
            text: "Ett enkelt mönster att börja med: ett bakgrundsarbetsflöde för nya konversationer taggar dem efter ämne, sätter prioritet, tillämpar en enda SLA och tilldelar dem till rätt teaminkorg. Inkorgens tilldelningsmetod väljer sedan teammedlem.",
          },
        ],
      },
      {
        heading: "Fin AI Agent i dina arbetsflöden",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent är Intercoms AI-agent för att svara på kunders frågor. Den svarar utifrån innehållet du ger den: publika artiklar, dokument, snippets och publika URL:er, som du hanterar under Knowledge > Sources. Den respekterar målgruppsstyrningen på Intercom-artiklar, så den svarar inte utifrån privata eller begränsade artiklar som kunden i Messenger inte får se.",
          },
          {
            type: "p",
            text: "Fin stöds i Intercom Messenger på webben, iOS och Android, samt i mejl, WhatsApp, SMS, Facebook och Instagram. I Workflows låter steget 'Let Fin answer' Fin svara var som helst i flödet och fortsätta tills frågan är löst eller eskalerad till en teammedlem.",
          },
          {
            type: "p",
            text: "Planera överlämningen lika noga som svaren. Bestäm vilken teaminkorg en eskalerad konversation ska gå till, och bygg den vägen i arbetsflödet så att konversationen aldrig blir liggande otilldelad.",
          },
        ],
      },
      {
        heading: "Webhooks och Intercoms REST API",
        blocks: [
          {
            type: "p",
            text: "När något i Intercom behöver nå ett annat system använder du webhooks. Du ställer in dem i Developer Hub: öppna din app, gå till Configure och sedan Webhooks, och ange din endpoint-URL. Endpointen måste använda HTTPS och acceptera en HEAD-förfrågan, som Intercom använder för att validera URL:en. Prenumerationer kan bara skapas i Developer Hub, inte via API:et.",
          },
          {
            type: "p",
            text: "Därefter väljer du topics. Ett topic är en händelse i Intercom som utlöser webhooken, och varje topic är kopplat till en eller flera behörigheter som din app måste ha. Intercom skickar en HTTP POST till din endpoint för varje topic du prenumererar på, och varje payload innehåller topic och antal leveransförsök. Med knappen 'Send a test request' i webhook-avsnittet kan du testa endpointen.",
          },
          {
            type: "p",
            text: "För att hantera konversationer från din egen kod använder du REST API:et. Anrop går till api.intercom.io med en åtkomsttoken som skickas som Bearer-token i Authorization-headern, plus en Intercom-Version-header som som standard är den version som är inställd i din app. Att svara är till exempel en POST till /conversations/{id}/reply med en JSON-body som anger meddelandetyp, författartyp och meddelandetext.",
          },
          {
            type: "p",
            text: "Bra första kandidater för Intercom-automatisering:",
          },
          {
            type: "ul",
            items: [
              "Tagga nya konversationer och tilldela dem till rätt teaminkorg.",
              "Tillämpa en SLA per konversation och höja prioriteten för nyckelkunder.",
              "Skicka konversationshändelser till en webhook så att Make eller n8n kan uppdatera andra system.",
              "Posta nya eller eskalerade konversationer i en Slack-kanal.",
            ],
          },
        ],
      },
      {
        heading: "Integrationer med Slack och Jira",
        blocks: [
          {
            type: "p",
            text: "För Slack-larm ställer du in en Slack-kanals syfte på enbart aviseringar (notification-only) och lägger sedan till steget 'Notify Slack' i ett arbetsflöde. Intercom-appen postar aviseringen, och senare aviseringar för samma konversation visas som trådsvar under det ursprungliga meddelandet. Svar som skrivs i den tråden skickas inte tillbaka till konversationen i Intercom, så teammedlemmar svarar fortfarande kunder i Intercom.",
          },
          {
            type: "p",
            text: "För eskaleringar till utvecklingsteamet kan Intercoms app Jira for Tickets automatiskt skapa Jira-ärenden från de ticket-typer du anger, spegla Jira-ärendenas status tillbaka till Intercom-tickets och synka anteckningar. Den grundläggande automatiseringen mappar bara titel och beskrivning; för fler fält använder du appens anpassade automatisering, som bygger på Workflows-mallar. Den skapar inte ärenden direkt från konversationer, så en konversation måste först konverteras till en ticket.",
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger vidare på de verktyg du redan använder, utan plattformsbyte, med API:er, webhooks och Make eller n8n. Intercom har både ett REST API och webhooks, så det går nästan säkert att koppla in; den konkreta lösningen bekräftas i ett kostnadsfritt Health Check-samtal på 30 minuter. Ticket Routing & Categorization är ett engångsprojekt för {{price:routing}}, och Custom Automation för flöden över flera system kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering, grundläggande dokumentation och inga dolda avgifter, och de flesta upplägg tar 1–3 veckor.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vad är skillnaden mellan förgreningar och Apply rules i Intercom Workflows?",
        a: "Förgreningar skickar konversationen bara längs den första väg vars villkor matchar, kontrollerat uppifrån och ned. Apply rules kontrollerar alla vägar och kör åtgärderna för varje väg som matchar.",
      },
      {
        q: "Vilken tilldelningsmetod rekommenderar Intercom för supportteam?",
        a: "Balanserad tilldelning. Den ger varje konversation till den aktiva teammedlem under sin tilldelningsgräns som har minst antal öppna konversationer, och vid lika läge går den till den som har väntat längst.",
      },
      {
        q: "Vilket innehåll använder Fin AI Agent för att svara kunder?",
        a: "Publika artiklar, dokument, snippets och publika URL:er som du lägger till under Knowledge > Sources. Den respekterar artiklarnas målgruppsstyrning, så den svarar inte utifrån artiklar som kunden inte kan se.",
      },
      {
        q: "Kan jag skapa webhook-prenumerationer i Intercom via API:et?",
        a: "Nej. Webhook-prenumerationer ställs in i Developer Hub. Endpointen måste använda HTTPS och acceptera en HEAD-förfrågan, som Intercom använder för att validera den.",
      },
      {
        q: "Kan teammedlemmar svara kunder från Intercoms Slack-aviseringar?",
        a: "Nej. I en Slack-kanal för enbart aviseringar skickas svar i en aviserings tråd inte tillbaka till konversationen i Intercom.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "hubspot-service-hub-automation",
    slug: "hubspot-service-hub-automatisering",
    category: "helpdesks",
    navLabel: "HubSpot Service Hub-automatisering",
    primaryKeyword: "hubspot service hub automatisering",
    title: "HubSpot Service Hub-automatisering: ärenden, flöden och SLA",
    description:
      "HubSpot Service Hub-automatisering: help desk-kanaler och routning, ärendepipelines och statusar, SLA-mål, arbetsflöden, chattbottar, webhooks och API.",
    h1: "HubSpot Service Hub-automatisering: help desk, ärenden, arbetsflöden och API:et",
    intro:
      "HubSpot Service Hub-automatisering kretsar kring ärendet: help desk-kanaler skapar ärenden, routning tilldelar dem, pipelines och statusar håller koll på dem och ärendebaserade arbetsflöden agerar på dem. Regelbaserade chattbottar samlar in uppgifter innan ett ärende finns, och webhook-åtgärden i arbetsflöden samt CRM-API:et kopplar HubSpot till allt annat. Nedan ser du vad varje del gör och var du ska börja.",
    keyFacts: [
      "Som standard skapar help desk automatiskt ärenden från varje kanal du kopplar till den.",
      "Standardpipelinen Support Pipeline har fyra ärendestatusar: New, Waiting on contact, Waiting on us och Closed.",
      "SLA-mål i help desk kan mäta tid till första svar, tid till nästa svar och tid till stängning.",
      "Webhook-åtgärden i arbetsflöden accepterar bara URL:er som börjar med HTTPS.",
      "Ärenden skapas via API:et med en POST till /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Vad du kan automatisera i HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "Automatiseringen i Service Hub är utspridd över flera verktyg som alla agerar på ärendeposten. Bestäm var en regel hör hemma innan du bygger den; de flesta problem uppstår när samma logik finns på två ställen.",
          },
          {
            type: "table",
            caption: "Var varje typ av Service Hub-automatisering finns",
            head: ["Verktyg", "Vad det automatiserar", "Typisk användning"],
            rows: [
              [
                "Help desk-kanaler och routning",
                "Skapar ärenden från anslutna kanaler och tilldelar dem",
                "Varje supportmejl eller chatt blir ett ärende och når rätt team",
              ],
              [
                "Ärendepipelines och statusar",
                "Stegen ett ärende går igenom, och om varje steg räknas som öppet eller stängt",
                "Separata pipelines för olika typer av supportarbete",
              ],
              [
                "SLA-mål",
                "Mål för tid till första svar, nästa svar och stängning",
                "Ett snabbare svarsmål för chatt än för mejl",
              ],
              [
                "Ärendebaserade arbetsflöden",
                "Åtgärder på ärenden som uppfyller registreringstriggers (enrollment triggers)",
                "Roterande ägare, uppdatering av egenskaper, fördröjd uppföljning",
              ],
              [
                "Regelbaserade chattbottar",
                "Frågor, ärendeskapande och överlämning i chatten",
                "Samla in orderuppgifter innan en agent kopplas in",
              ],
              [
                "Webhooks och API:et",
                "Skickar ut ärendedata och skapar eller uppdaterar ärenden från andra system",
                "Synka ärenden med Jira eller interna verktyg",
              ],
            ],
          },
        ],
      },
      {
        heading: "Help desk-kanaler och routning",
        blocks: [
          {
            type: "p",
            text: "Help desk är HubSpots arbetsyta för ärendebaserad support. Du kan koppla chatt-, mejl-, formulär-, samtals- och Facebook Messenger-kanaler till den. Som standard skapas ärenden automatiskt från varje kanal du kopplar in, och HubSpot rekommenderar att du kopplar in alla dina supportkanaler, eftersom ärenden från kanaler som inte är inkopplade kan sakna ämne och tråd i help desk.",
          },
          {
            type: "p",
            text: "Routning ställs in per kanal. När du till exempel kopplar in en gemensam teammejladress väljer du standardpipeline, status och prioritet för nya ärenden och väljer sedan ett routningsalternativ:",
          },
          {
            type: "ul",
            items: [
              "Specifika användare eller team.",
              "Kontaktens ägare.",
              "Kompetensbaserad routning, som matchar ärenden mot agenternas kompetenser.",
              "Ett tilldelningsarbetsflöde, när du behöver logik utöver de inbyggda alternativen.",
              "Ingen, vilket lämnar ärendena i vyn Unassigned så att agenter kan plocka dem.",
            ],
          },
          {
            type: "note",
            text: "Automatisk och kompetensbaserad routning beror på dina licenser (seats) och ditt abonnemang. Kontrollera vad ditt konto innehåller innan du bygger upplägget kring ett specifikt routningsalternativ.",
          },
        ],
      },
      {
        heading: "Ärendepipelines, statusar och SLA-mål",
        blocks: [
          {
            type: "p",
            text: "Ärenden går igenom en pipeline, och för ärenden kallas pipelinens steg för statusar. Standardpipelinen Support Pipeline har fyra: New, Waiting on contact, Waiting on us och Closed. Du hanterar pipelines under Settings > Objects > Tickets > Pipelines, och varje status du lägger till måste markeras som Open eller Closed.",
          },
          {
            type: "p",
            text: "Det valet styr automatiseringen. När ett ärende flyttas till en stängd status sätts dess Close date till dagens datum; om det flyttas tillbaka till en öppen status rensas Close date. Du kan justera det här beteendet per pipeline. Eftersom arbetsflöden och rapporter filtrerar på status bör du hålla statusarna få och entydiga.",
          },
          {
            type: "p",
            text: "SLA-mål i help desk anger mål för tid till första svar, tid till nästa svar och tid till stängning. Ett mål kan gälla alla ärenden, ärenden med ett visst egenskapsvärde eller en kombination av egenskaper, och varje regel kan begränsas till bestämda tider och en tidszon. HubSpots egna exempel är bland annat ett kortare svarsmål för enterprise-kunder och ett snabbare svarsmål för chatt än för mejl. Att snooza ett ärende påverkar inte dess SLA.",
          },
        ],
      },
      {
        heading: "Ärendebaserade arbetsflöden",
        blocks: [
          {
            type: "p",
            text: "Ett ärendebaserat arbetsflöde registrerar ärenden som uppfyller dess registreringstriggers och kör sedan en sekvens av åtgärder. De mest användbara åtgärderna för supportarbete:",
          },
          {
            type: "ul",
            items: [
              "Fördröjningar: vänta ett bestämt antal dagar, timmar och minuter, eller till ett kalenderdatum, en datumegenskap eller en händelse.",
              "Om/då-förgreningar (if/then branches): skicka ärenden längs olika vägar utifrån filterkriterier kombinerade med AND och OR.",
              "Edit record: sätt, kopiera eller rensa egenskapsvärden på ärendet eller på en associerad post.",
              "Create record: skapa en ny post, som som standard associeras med det registrerade ärendet.",
              "Rotate record to owner: tilldela ärenden i tur och ordning mellan de användare du väljer. Rotationen räknas per åtgärd och nollställs om du lägger till eller tar bort ägare efter att arbetsflödet har aktiverats.",
              "Send a webhook: anropa en extern URL med ärendedata, vilket beskrivs i nästa avsnitt.",
            ],
          },
          {
            type: "p",
            text: "Bra första kandidater för ärendearbetsflöden i HubSpot:",
          },
          {
            type: "ul",
            items: [
              "Rotera nya ärenden i en pipeline mellan en grupp agenter.",
              "Kopiera en egenskap från en associerad post till ärendet så att routning och rapporter kan använda den.",
              "Skicka ett ärende till Jira eller ett internt verktyg via en webhook när dess status ändras.",
              "Vänta en bestämd tid efter att ett ärende har stängts och förgrena sedan utifrån en egenskap för att bestämma uppföljning.",
            ],
          },
        ],
      },
      {
        heading: "Chattbottar, webhooks och HubSpot API",
        blocks: [
          {
            type: "p",
            text: "Regelbaserade chattbottar hanterar de första minuterna av en chatt. Tre åtgärder gör det mesta av supportarbetet. Ask question sparar besökarens svar i en kontaktegenskap och kan erbjuda snabbsvar. Submit a ticket skapar ett ärende med det namn, den pipeline och den status du anger, men hoppas över om besökaren inte har någon associerad kontaktpost. Send to team member lämnar över chatten till en viss användare eller ett visst team efter att ha kontrollerat att de är tillgängliga, och visar frånvaromeddelandet om de inte är det. Om boten har öppettider routas chattar bara till en teammedlem under de tiderna.",
          },
          {
            type: "p",
            text: "Webhook-åtgärden i arbetsflöden skickar ut data. Välj POST eller GET och ange en URL som börjar med HTTPS. En POST-body kan innehålla alla postens egenskaper eller en anpassad uppsättning nycklar, var och en mappad till en HubSpot-egenskap. Du kan autentisera med en anropssignatur (request signature), som HubSpot lägger till som en header som din endpoint verifierar, eller med en API-nyckel som lagras som en hemlighet (secret) och skickas i en header eller query-parameter. Du kan testa åtgärden från dess panel utan att påverka befintliga poster. Om åtgärden är tillgänglig beror på ditt abonnemang.",
          },
          {
            type: "p",
            text: "För motsatt riktning använder du CRM-API:et. En POST till /crm/v3/objects/tickets skapar ett ärende; ta med subject, hs_pipeline_stage (statusen) och hs_pipeline, med interna ID:n i stället för etiketter. Om ingen pipeline anges används standardpipelinen. En GET till /crm/v3/properties/tickets listar ditt kontos ärendeegenskaper. Appar kan också prenumerera på ärendehändelser via Webhooks API, bland annat ticket.creation och ticket.propertyChange, som utlöses när en egenskap du anger ändras på något ärende. Prenumerationerna konfigureras på appnivå och kräver scopet tickets.",
          },
        ],
      },
      {
        heading: "Så får du det byggt",
        blocks: [
          {
            type: "p",
            text: "TascaLab bygger vidare på de verktyg du redan använder, utan plattformsbyte, med API:er, webhooks och Make eller n8n. HubSpot har ett dokumenterat API och stöd för webhooks, så det går nästan säkert att koppla in; den konkreta lösningen bekräftas i ett kostnadsfritt Health Check-samtal på 30 minuter. Ticket Routing & Categorization är ett engångsprojekt för {{price:routing}}, Automated Reports via mejl eller Slack kostar {{price:reports}} och Custom Automation över flera system kostar {{price:custom}}. Varje projekt inkluderar 30 dagars support efter lansering, grundläggande dokumentation och inga dolda avgifter, och de flesta upplägg tar 1–3 veckor.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Vilka är standardstatusarna för ärenden i HubSpot?",
        a: "Standardpipelinen Support Pipeline har fyra statusar: New, Waiting on contact, Waiting on us och Closed. Du kan lägga till egna och markera var och en som Open eller Closed.",
      },
      {
        q: "Kan help desk i HubSpot mäta SLA:er?",
        a: "Ja. SLA-mål i help desk mäter tid till första svar, tid till nästa svar och tid till stängning, för alla ärenden eller utifrån ärendeegenskaper, och kan begränsas till bestämda tider. Att snooza ett ärende påverkar inte dess SLA.",
      },
      {
        q: "Kan en chattbot i HubSpot skapa ärenden?",
        a: "Ja. Åtgärden Submit a ticket skapar ett ärende med det namn, den pipeline och den status du anger. Den hoppas över om besökaren inte har någon associerad kontaktpost.",
      },
      {
        q: "Hur skickar jag ärendedata från HubSpot till ett annat system?",
        a: "Lägg till en webhook-åtgärd i ett ärendebaserat arbetsflöde, som skickar en POST- eller GET-förfrågan till en HTTPS-URL. Appar kan också prenumerera på ärendehändelser som ticket.creation och ticket.propertyChange via Webhooks API.",
      },
      {
        q: "Vad behöver jag för att skapa ett ärende via HubSpot API?",
        a: "Skicka en POST till /crm/v3/objects/tickets med subject, hs_pipeline_stage och hs_pipeline, med interna ID:n. Om du utelämnar pipelinen används standardpipelinen.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
