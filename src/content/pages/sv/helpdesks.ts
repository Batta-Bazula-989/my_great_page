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
            text: "TascaLab arbetar i ditt befintliga Zendesk-konto, utan plattformsbyte, med Zendesk API, webhooks och Make eller n8n där de passar. Ticket Routing & Categorization är ett engångsprojekt i spannet 600–950 USD; Custom Automation för flöden som går över flera system kostar 1 200–2 000 USD. Varje projekt inkluderar 30 dagars support efter lansering, grundläggande dokumentation och inga dolda avgifter, och de flesta upplägg tar 1–3 veckor. Du kan börja med ett kostnadsfritt auditsamtal på 30 minuter.",
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
            text: "TascaLab bygger vidare på ditt befintliga Freshdesk-konto, utan plattformsbyte, med automatiseringsregler, webhooks, Freshdesk API och Make eller n8n där de hjälper. Ticket Routing & Categorization är ett engångsprojekt i spannet 600–950 USD; Custom Automation kostar 1 200–2 000 USD. Varje projekt inkluderar 30 dagars support efter lansering och grundläggande dokumentation, och de flesta upplägg tar 1–3 veckor. Första steget är ett kostnadsfritt auditsamtal på 30 minuter.",
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
];
