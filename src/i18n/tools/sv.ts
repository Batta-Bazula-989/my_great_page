
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Verktyg",
  allTools: "Alla verktyg",
  hub: {
    slug: "tools",
    metaTitle: "Gratis kalkylatorer för leadscoring och kundtjänst | TascaLab",
    metaDescription:
      "Gratis kalkylatorer: bygg och testa en leadpoäng, jämför vad AI-supportagenter kostar, uppskatta WhatsApp Business API-fakturan och se när SLA-mål förfaller.",
    eyebrow: "Gratis verktyg",
    title: "Gratis verktyg för sälj- och supportteam",
    intro: "Snabba kalkylatorer som bygger på publicerade priser och enkel matematik. Gratis och utan registrering.",
    open: "Öppna verktyget",
  },
  common: {
    freeTool: "Gratis verktyg · ingen registrering",
    howItWorks: "Så fungerar det",
    faqTitle: "Vanliga frågor",
    sources: "Källor",
    estimate: "Endast uppskattningar, inte en offert.",
    max: "Högst {value}",
    min: "Minst {value}",
    perMonth: "/månad",
    ctaTitle: "Vill du ha en exakt siffra för ditt team?",
    ctaText: "Boka en kostnadsfri Health Check: ett samtal på 30 minuter, sedan en skriftlig rapport med det paket och fasta pris som passar.",
    ctaBook: "Boka kostnadsfri Health Check",
    otherTools: "Andra gratis verktyg",
  },
  leadScore: {
    slug: "leadscoring-kalkylator",
    navLabel: "Leadscoring-kalkylator",
    short: "Bygg fit- och engagemangspoäng, testa dem på ett lead och kopiera modellen.",
    metaTitle: "Leadscoring-kalkylator: fit- och engagemangsmodell | TascaLab",
    metaDescription:
      "Gratis leadscoring-kalkylator: bygg fit- och engagemangspoäng med HubSpots gränser och trösklar, testa på ett lead och kopiera modellen. Utan registrering.",
    h1: "Kalkylator för leadscoring",
    intro:
      "Bygg en poängbaserad leadscoring som fungerar som HubSpots verktyg för leadscoring: fit-kriterier för vem leadet är, engagemangskriterier för vad det gör, och varje poäng stannar vid sin gräns och delas in i Hög, Medel och Låg. Testa den på ett lead, kontrollera modellen efter fel och kopiera den sedan till ditt CRM.",
    inputs: {
      criteriaTitle: "Dina kriterier",
      criteriaHint:
        "Bocka i de kriterier som gäller för ett lead som du vill testa. Exemplen är platshållare: byt ut varje etikett och poängvärde mot dina egna.",
      label: "Kriterium",
      score: "Poängtyp",
      points: "Poäng",
      applies: "Gäller för testleadet",
      remove: "Ta bort {label}",
      add: "Lägg till kriterium",
      maxReached: "Upp till {n} kriterier.",
      settingsTitle: "Poänginställningar",
      limit: "Poänggräns",
      limitOption: "{min} till {max}",
      high: "Hög från",
      medium: "Medel från",
      thresholdsHint:
        "Gränserna är HubSpots alternativ. Standardtrösklarna följer HubSpots eget exempel: 70–100 Hög, 40–69 Medel, under 40 Låg.",
    },
    scores: { fit: "Fit", engagement: "Engagemang" },
    bands: { high: "Hög", medium: "Medel", low: "Låg" },
    examples: [
      { label: "Branschen matchar din ideala kundprofil", score: "fit", points: 30, applies: true },
      { label: "Företagsstorleken ligger inom ditt målintervall", score: "fit", points: 25, applies: true },
      { label: "Titeln är en beslutsfattarroll", score: "fit", points: 25, applies: false },
      { label: "Finns i en region som du inte betjänar", score: "fit", points: -40, applies: false },
      { label: "Svarade intresserat på din outreach", score: "engagement", points: 40, applies: true },
      { label: "Besökte prissidan", score: "engagement", points: 20, applies: true },
      { label: "Öppnade dina tre senaste mejl", score: "engagement", points: 10, applies: false },
      { label: "Avregistrerade sig från dina mejl", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Ditt testlead",
      combined: "Kombinerad etikett",
      combinedDesc: "Fit: {fit}, engagemang: {engagement}",
      range: "Möjligt intervall: {min} till {max}",
      checksTitle: "Innan du bygger den",
      allGood: "Inga problem hittades i den här modellen.",
      noCriteria: "{score}: lägg till minst ett kriterium.",
      order: "{score}: Medel måste vara lägre än Hög.",
      unreachable: "{score}: inget lead kan nå Hög. Den högsta poäng ett lead kan få är {max}.",
      capped: "{score}: de positiva poängen blir sammanlagt {total}, men poängen stannar vid {limit}.",
      copy: "Kopiera modellen som tabell",
      copied: "Kopierat",
      copyFailed: "Det gick inte att kopiera. Markera kriterierna och kopiera dem manuellt.",
      tableHeads: { score: "Poängtyp", criterion: "Kriterium", points: "Poäng", limit: "Gräns", high: "Hög", medium: "Medel" },
    },
    sections: [
      {
        heading: "Så räknas poängen ut",
        text: "Varje kriterium lägger till eller drar av poäng när det gäller för ett lead. Fit-kriterier beskriver vem leadet är, till exempel bransch, företagsstorlek eller roll; engagemangskriterier beskriver vad leadet gör, till exempel svar, besök eller öppningar. Varje poäng stannar vid sin gräns, som i HubSpots verktyg för leadscoring, och trösklarna gör om talet till Hög, Medel eller Låg. Den kombinerade etiketten följer HubSpots konvention: bokstaven är fit-bandet (A hög, C låg) och siffran engagemangsbandet (1 hög, 3 låg), så ett lead med låg fit men högt engagemang blir C1.",
      },
      {
        heading: "Så sätter du upp det i HubSpot",
        text: "HubSpots verktyg för leadscoring kräver Marketing Hub eller Sales Hub Professional eller Enterprise. Poänggränserna går från -100 till 100 upp till -10 000 till 10 000, med 100 som standardmaximum. Inuti en poäng kan du lägga till grupper med egna gränser, och alla gruppgränser räknas mot poänggränsen. För engagemang kan poängförfall sänka poängen var 1, 3, 6 eller 12 månader, där varje månad räknas som 30 dagar.",
      },
      {
        heading: "Så sätter du upp det i Attio",
        text: "Attio har inget särskilt verktyg för poängsättning. På planerna Pro, Enterprise och Ultra kan ett formula-attribut räkna ihop poäng med if()-villkor och använda operatorn ?? för att behandla tomma fält som 0. En formel som returnerar ett tal blir ett number-attribut, räknas om automatiskt när fälten den använder ändras och förbrukar inga av arbetsytans credits. På Free och Plus behåller du poängen i ett number-attribut som ett arbetsflöde eller API:et fyller i.",
      },
      {
        heading: "När du inte behöver en poäng",
        text: "Om ditt team läser varje nytt lead samma dag tillför en poäng inte mycket. Den börjar löna sig när leads kommer in snabbare än någon hinner gå igenom dem, eller när de signaler som betyder mest, till exempel ett intresserat svar eller ett besök på din prissida, finns i verktyg som ditt CRM inte ser på egen hand.",
      },
    ],
    faqs: [
      {
        q: "Är exempelpoängen en rekommendation?",
        a: "Nej. De är platshållare som visar hur beräkningen fungerar. Byt ut varje kriterium och poängvärde mot dina egna. De enda standardvärden som kommer från en leverantör är HubSpots poänggränser och dess exempeltrösklar.",
      },
      {
        q: "Vad betyder A1 och C3?",
        a: "Det är HubSpots etiketter för kombinerade poäng. Bokstaven är fit-bandet, från A (hög fit) till C (låg fit); siffran är engagemangsbandet, från 1 (högt engagemang) till 3 (lågt engagemang).",
      },
      {
        q: "Kan HubSpot bygga poängen åt mig med AI?",
        a: "HubSpots AI-byggda kontaktpoäng kräver Marketing Hub Enterprise och minst 50 kontakter, 25 konverterade och 25 icke-konverterade, innan en poäng kan genereras.",
      },
      {
        q: "Har Attio leadscoring?",
        a: "Inget särskilt verktyg för poängsättning. På Pro, Enterprise och Ultra kan ett formula-attribut räkna ut en poängsumma automatiskt; på andra planer skriver ett arbetsflöde eller API:et poängen till ett number-attribut.",
      },
      {
        q: "Sparas något av det jag skriver?",
        a: "Nej. Poängen räknas ut i din webbläsare, och inget du anger skickas någonstans.",
      },
    ],
  },
  aiAgent: {
    slug: "ai-supportagent-kostnadskalkylator",
    navLabel: "Kostnad för AI-supportagent",
    short: "Jämför AI-agenter som tar betalt per lösning med ett engångsbygge vid din volym.",
    metaTitle: "Kostnadskalkylator för AI-supportagenter 2026 | TascaLab",
    metaDescription:
      "Jämför månadskostnaden för Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro och Agentforce vid din volym med en egen AI-supportagent till engångspris.",
    h1: "Kostnadskalkylator för AI-supportagenter",
    intro:
      "De flesta AI-supportagenter tar betalt per lösning, konversation eller åtgärd, så fakturan växer med din volym. Ange dina siffror och jämför sex leverantörers listpriser med ett engångsbygge.",
    inputs: {
      title: "Din volym",
      conversations: "AI-konversationer per månad",
      resolutionRate: "Lösta utan en människa",
      actions: "Agentforce-åtgärder per konversation",
      buildTitle: "Engångsbygge",
      package: "Engångspris för {plan}",
      priceHint: "{plan} kostar från {price}. Ange det fasta priset från din Health Check-rapport om du har en.",
      platform: "Automatiseringsplattform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 EUR/månad, faktureras årsvis)",
        make: "Make Core (9 USD/månad, faktureras årsvis)",
        selfHosted: "n8n i egen drift (serverkostnaden ingår inte)",
      },
      tokens: "AI-tokens per konversation",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Illustrativa standardvärden: ingen officiell källa publicerar en typisk siffra. Ersätt dem med din bots verkliga siffror från användningspanelen hos din AI-leverantör.",
    },
    results: {
      title: "Uppskattad kostnad",
      vendor: "Leverantör",
      monthly: "Per månad",
      year: "12 månader",
      yourBuild: "Engångsbygge",
      buildLine: "{price} en gång + {monthly}/månad i driftskostnader",
      payback: "Billigare än {vendor} från månad {months}",
      neverCheaper: "Vid den här volymen blir bygget inte billigare än någon leverantör inom 12 månader.",
      cheapest: "Billigaste leverantör",
      currencyNote: "Leverantörernas priser är listpriser i USD, omräknade enligt ECB:s kurs den 16 oktober 2026.",
      pricesAsOf: "Leverantörernas listpriser per {date}.",
      empty: "Ange dina AI-konversationer per månad för att jämföra kostnaderna.",
    },
    units: {
      fin: "0,99 USD per utfall; med en annan helpdesk ett månadsminimum på 49 USD som inkluderar 50 utfall",
      zendesk: "2,00 USD per automatiserad lösning, betalning efter användning (1,50 USD med åtagande)",
      freddy: "49 USD per 100 sessioner",
      hubspot: "0,50 USD per löst konversation (50 HubSpot Credits); kräver planen Professional eller Enterprise",
      tidio: "Månadspaket från 39 USD för 50 till 700 USD för 1 000 konversationer; därutöver Lyro Connect från 0,50 USD per konversation",
      agentforce: "0,10 USD per åtgärd (20 Flex Credits, 500 USD per 100 000)",
    },
    notIncluded:
      "Ingår inte: ditt abonnemang på helpdesken, kvoter som ingår i din plan, volymrabatter och skatter. Fin debiterar också Procedure-överlämningar (en Procedure som du har satt upp för att avslutas med en överlämning) som utfall, så Fins verkliga kostnad kan bli högre. Zendesk flyttar konton till lösningsnivåer vars priser sätts av Zendesks säljteam.",
    sections: [
      {
        heading: "Så fungerar beräkningen",
        text: "Antalet lösta konversationer är dina konversationer per månad gånger andelen som löses utan en människa. Fin tar betalt per utfall utöver ett månadsminimum på 49 USD, Zendesk och HubSpot per lösning, Freddy per paket om 100 sessioner, Tidio Lyro i månadspaket med konversationer som den svarar i och Agentforce per åtgärd. Varje leverantörs listpris länkar till leverantörens prissida nedan.",
      },
      {
        heading: "Därför växer fakturor som räknas per lösning",
        text: "När en leverantör tar betalt per lösning ökar fakturan för varje extra konversation som agenten löser. Ett engångsbygge har ingen avgift per lösning: du betalar AI-leverantören för tokens och automatiseringsplattformen för dess plan, direkt.",
      },
      {
        heading: "Vad ett engångsbygge kostar att driva",
        text: "AI-användning faktureras per token av din AI-leverantör. Kalkylatorn använder listpriserna för Claude Haiku 5.5 för promptar på upp till 100 000 tokens: 0,10 USD per miljon input-tokens och 0,50 USD per miljon output-tokens. Lägg till automatiseringsplattformen: n8n i egen drift (gratis programvara; du betalar för servern), n8n Cloud från 20 EUR/månad eller Make från 9 USD/månad, båda faktureras årsvis.",
      },
    ],
    faqs: [
      {
        q: "Är priserna aktuella?",
        a: "Det är listpriser som de publiceras på varje leverantörs officiella prissidor, kontrollerade i november 2026. Leverantörer ändrar ofta sina priser, så kontrollera de länkade sidorna innan du köper.",
      },
      {
        q: "Vad räknas som en lösning?",
        a: "Varje leverantör definierar det på sitt eget sätt. Fin tar betalt per utfall (en lösning, eller en Procedure som avslutas med en överlämning), Zendesk per automatiserad lösning, HubSpot per konversation som inte lämnas över till en person inom 72 timmar, Freddy per session och Tidio per konversation som Lyro svarar i. Läs varje leverantörs definition innan du jämför.",
      },
      {
        q: "Varför visas priserna i min valuta?",
        a: "Leverantörerna publicerar de här priserna i amerikanska dollar. Utanför den amerikanska versionen av sidan räknas de om enligt Europeiska centralbankens referenskurs den 16 oktober 2026.",
      },
      {
        q: "Är ett engångsbygge alltid billigare?",
        a: "Nej. Vid låga volymer kan en agent som tar betalt per lösning kosta mindre. Kalkylatorn visar om och när ett engångsbygge blir billigare vid din volym.",
      },
    ],
  },
  whatsapp: {
    slug: "whatsapp-business-kostnadskalkylator",
    navLabel: "Kostnad för WhatsApp Business",
    short: "Uppskatta din månadsfaktura för WhatsApp API, inklusive de nya gratis servicemeddelandena.",
    metaTitle: "Kostnadskalkylator för WhatsApp Business API 2026 | TascaLab",
    metaDescription:
      "Uppskatta din månadsfaktura för WhatsApp Business Platform med Metas pris per meddelande och 1 000 gratis servicemeddelanden per nummer från den 1 oktober 2026.",
    h1: "Kostnadskalkylator för WhatsApp Business API",
    intro:
      "Sedan den 1 oktober 2026 tar Meta betalt för servicemeddelanden i WhatsApp utöver 1 000 gratis per företagsnummer och månad, till marknadens pris för utility-meddelanden. Ange dina volymer och priserna från Metas prislista för det land där dina kunder finns.",
    inputs: {
      volumeTitle: "Meddelanden per månad",
      numbers: "Företagstelefonnummer",
      service: "Servicemeddelanden (fritt formulerade svar)",
      utility: "Utility-mallar",
      marketing: "Marknadsföringsmallar",
      authentication: "Autentiseringsmallar",
      ratesTitle: "Pris per meddelande",
      ratesHint: "Kopiera priserna för dina kunders land från Metas prislista i din faktureringsvaluta.",
      rateCard: "Öppna Metas prislistor",
      utilityRate: "Utility-pris (används även för servicemeddelanden)",
      marketingRate: "Pris för marknadsföring",
      authenticationRate: "Pris för autentisering",
    },
    results: {
      title: "Uppskattad kostnad per månad",
      freeService: "Använda gratis servicemeddelanden",
      billableService: "Debiterade servicemeddelanden",
      service: "Servicemeddelanden",
      utility: "Utility-mallar",
      marketing: "Marknadsföringsmallar",
      authentication: "Autentiseringsmallar",
      total: "Totalt per månad",
      enterRates: "Ange dina priser för att se kostnaden.",
    },
    notIncluded:
      "Ingår inte: volymrabatter på utility- och autentiseringsmeddelanden, meddelanden från Meta Business Agent, avgifter från din WhatsApp-leverantör och skatter. Meddelanden i ett kostnadsfritt fönster för ingångspunkten debiteras inte.",
    sections: [
      {
        heading: "Det här ändrades den 1 oktober 2026",
        text: "Fritt formulerade servicemeddelanden, alltså de svar du skickar inom kundtjänstfönstret på 24 timmar, är inte längre obegränsade och gratis. Varje företagstelefonnummer får 1 000 gratis servicemeddelanden per månad; därefter tar Meta betalt för dem till marknadens pris för utility-meddelanden. Utility-mallar som skickas inom fönstret debiteras nu också.",
      },
      {
        heading: "Så debiterar Meta meddelanden",
        text: "Meta tar betalt per levererat meddelande. Priset beror på meddelandekategorin (marknadsföring, utility, autentisering eller service) och mottagarens land; servicemeddelanden kostar samma listpris som utility- och autentiseringsmeddelanden på den marknaden. En femte kategori, Meta Business Agent-meddelanden från Metas egen AI-agent, debiteras i stället per token. Meta publicerar prislistor i 16 valutor och kan bara ändra priserna den första dagen i ett kvartal.",
      },
      {
        heading: "Det här tar kalkylatorn inte med",
        text: "Utility- och autentiseringsmeddelanden har volymnivåer som sänker priset vid höga volymer; de räknas inte med här. Meddelanden är gratis i det kostnadsfria fönstret för ingångspunkten, som öppnas när du inom 24 timmar svarar någon som skrev till dig från en Click to WhatsApp-annons i WhatsApps app för Android eller iOS, och som kan vara öppet i upp till 7 dagar. Meddelanden från Meta Business Agent (2,00 USD per miljon tokens) och avgifter från din WhatsApp-leverantör ingår inte.",
      },
    ],
    faqs: [
      {
        q: "Är servicemeddelanden i WhatsApp fortfarande gratis?",
        a: "Sedan den 1 oktober 2026 får varje företagstelefonnummer 1 000 gratis servicemeddelanden per månad. Meta tar betalt från och med meddelande nummer 1 001 till marknadens pris för utility-meddelanden.",
      },
      {
        q: "Varför måste jag ange priserna?",
        a: "Priserna beror på dina kunders land och din faktureringsvaluta. Meta publicerar dem i sina prislistor; kopiera de som gäller dig för en exakt uppskattning.",
      },
      {
        q: "Hur ofta ändrar Meta priserna för WhatsApp?",
        a: "Meta uppger att priserna bara kan uppdateras den första dagen i varje kvartal, alltså upp till fyra gånger per år.",
      },
      {
        q: "Ingår min leverantörs avgifter?",
        a: "Nej. Kalkylatorn räknar bara med Metas avgifter per meddelande. Din WhatsApp Business Solution Provider kan ta ut egna avgifter.",
      },
    ],
  },
  sla: {
    slug: "sla-kalkylator",
    navLabel: "SLA-kalkylator",
    short: "Räkna ut när SLA-mål förfaller och hur lång tid första svaret tog, i kontorstid.",
    metaTitle: "SLA-kalkylator med kontorstid och helgdagar | TascaLab",
    metaDescription:
      "Räkna ut när ett SLA i kundtjänst förfaller, eller hur mycket kontorstid ett första svar tog, utifrån bara dina arbetstimmar, arbetsdagar och helgdagar.",
    h1: "SLA-kalkylator med kontorstid",
    intro:
      "SLA-mål räknas oftast i kontorstid, så ett mål på 4 timmar som sätts en fredagseftermiddag kan förfalla på måndagen. Ange en starttid och ditt schema för att se när målet förfaller, eller mät kontorstiden mellan två tidpunkter.",
    modes: { due: "När förfaller det?", elapsed: "Hur lång tid tog det?" },
    inputs: {
      received: "Ärendet mottaget",
      target: "SLA-mål",
      hours: "timmar",
      minutes: "minuter",
      replied: "Första svaret skickat",
      scheduleTitle: "Kontorstid",
      opens: "Öppnar",
      closes: "Stänger",
      days: "Arbetsdagar",
      dayNames: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
      holidays: "Helgdagar",
      addHoliday: "Lägg till",
      removeHoliday: "Ta bort {date}",
      noHolidays: "Inga helgdagar tillagda.",
    },
    results: {
      dueAt: "Förfaller",
      calendarTime: "Kalendertid tills det förfaller",
      businessTime: "Kontorstid",
      elapsedCalendar: "Kalendertid",
      withinTarget: "Inom målet på {target}",
      overTarget: "Över målet på {target}",
      invalid: "Kontrollera tiderna och kontorstiden.",
      duration: "{h} tim {m} min",
      days: "{d} d {h} tim {m} min",
    },
    sections: [
      {
        heading: "Så räknas SLA:er i kontorstid",
        text: "SLA-klockan går bara under kontorstid på arbetsdagar. När ett ärende kommer in utanför de tiderna startar klockan när kontorstiden börjar nästa arbetsdag. Helgdagar som du lägger till räknas som lediga dagar.",
      },
      {
        heading: "Tidszoner",
        text: "Alla tider behandlas som en och samma tidszon: den som din kontorstid gäller i. Ange ärendets tider i samma tidszon.",
      },
    ],
    faqs: [
      {
        q: "Hoppar kalkylatorn över helger?",
        a: "Ja. Bara de arbetsdagar du bockar i räknas. Lördag och söndag är inte ibockade som standard.",
      },
      {
        q: "Hur hanterar jag röda dagar?",
        a: "Lägg till datumet för varje helgdag. Kalkylatorn behandlar det som en ledig dag.",
      },
      {
        q: "Är en arbetsdag åtta timmar?",
        a: "Bara om din kontorstid är åtta timmar lång. Ange öppnings- och stängningstid och sätt sedan målet i timmar.",
      },
    ],
  },
};

export default tools;
