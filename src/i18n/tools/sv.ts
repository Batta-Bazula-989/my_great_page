
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Verktyg",
  allTools: "Alla verktyg",
  hub: {
    slug: "tools",
    metaTitle: "Gratis verktyg och kalkylatorer för kundtjänst | TascaLab",
    metaDescription:
      "Gratis kalkylatorer för supportteam: jämför vad AI-supportagenter kostar, uppskatta WhatsApp Business API-fakturan och se när SLA-mål förfaller i kontorstid.",
    eyebrow: "Gratis verktyg",
    title: "Gratis verktyg för supportteam",
    intro: "Snabba kalkylatorer som bygger på publicerade priser och enkel matematik. Gratis och utan registrering.",
    open: "Öppna verktyget",
  },
  common: {
    freeTool: "Gratis verktyg · ingen registrering",
    howItWorks: "Så fungerar det",
    faqTitle: "Vanliga frågor",
    sources: "Källor",
    estimate: "Endast uppskattningar, inte en offert.",
    perMonth: "/månad",
    ctaTitle: "Vill du ha en exakt siffra för ditt team?",
    ctaText: "Boka en kostnadsfri Health Check: ett samtal på 30 minuter, sedan en skriftlig rapport med det paket och fasta pris som passar.",
    ctaBook: "Boka kostnadsfri Health Check",
    otherTools: "Andra gratis verktyg",
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
      package: "Paket",
      platform: "Automatiseringsplattform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 EUR/månad, faktureras årsvis)",
        make: "Make Core (9 USD/månad, faktureras årsvis)",
        selfHosted: "n8n i egen drift (serverkostnaden ingår inte)",
      },
      tokens: "AI-tokens per konversation",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Exempelvärden från en publicerad supportkonversation med 5 meddelanden. Ändra dem så att de passar din bot.",
    },
    results: {
      title: "Uppskattad kostnad per månad",
      vendor: "Leverantör",
      monthly: "Per månad",
      year: "12 månader",
      yourBuild: "Engångsbygge",
      buildLine: "{price} en gång + {monthly}/månad i driftskostnader",
      payback: "Billigare än {vendor} från månad {months}",
      neverCheaper: "Vid den här volymen blir bygget inte billigare än någon leverantör inom 12 månader.",
      cheapest: "Lägst",
      currencyNote: "Leverantörernas priser är listpriser i USD, omräknade enligt ECB:s kurs den 16 oktober 2026.",
    },
    units: {
      fin: "0,99 USD per utfall; minst 50 per månad om du använder en annan helpdesk",
      zendesk: "2,00 USD per automatiserad lösning, betalning efter användning",
      freddy: "49 USD per 100 sessioner",
      hubspot: "0,50 USD per löst konversation; kräver planen Professional eller Enterprise",
      tidio: "0,50 USD per konversation som Lyro svarar i",
      agentforce: "0,10 USD per åtgärd (20 Flex Credits)",
    },
    notIncluded:
      "Ingår inte: ditt abonnemang på helpdesken, kvoter som ingår i din plan, volymrabatter och skatter. Fin debiterar också vissa överlämningar och routningar som utfall, så Fins verkliga kostnad kan bli högre.",
    sections: [
      {
        heading: "Så fungerar beräkningen",
        text: "Antalet lösta konversationer är dina konversationer per månad gånger andelen som löses utan en människa. Fin, Zendesk och HubSpot tar betalt per lösning eller utfall, Freddy per paket om 100 sessioner, Tidio Lyro per konversation som den svarar i och Agentforce per åtgärd. Varje leverantörs listpris länkar till leverantörens prissida nedan.",
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
        a: "Det är listpriser som de publicerades på varje leverantörs prissida i oktober 2026. Leverantörer ändrar ofta sina priser, så kontrollera de länkade sidorna innan du köper.",
      },
      {
        q: "Vad räknas som en lösning?",
        a: "Varje leverantör definierar det på sitt eget sätt. Fin tar betalt per utfall, Zendesk per automatiserad lösning, HubSpot per löst konversation och Freddy per session. Läs varje leverantörs definition innan du jämför.",
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
      "Ingår inte: volymrabatter på utility- och autentiseringsmeddelanden, avgifter från din WhatsApp-leverantör och skatter. Meddelanden i ett kostnadsfritt fönster för ingångspunkten debiteras inte.",
    sections: [
      {
        heading: "Det här ändrades den 1 oktober 2026",
        text: "Fritt formulerade servicemeddelanden, alltså de svar du skickar inom kundtjänstfönstret på 24 timmar, är inte längre obegränsade och gratis. Varje företagstelefonnummer får 1 000 gratis servicemeddelanden per månad; därefter tar Meta betalt för dem till marknadens pris för utility-meddelanden. Utility-mallar som skickas inom fönstret debiteras nu också.",
      },
      {
        heading: "Så debiterar Meta meddelanden",
        text: "Meta tar betalt per levererat meddelande. Priset beror på meddelandekategorin (marknadsföring, utility, autentisering eller service) och mottagarens land. Meta publicerar prislistor i flera valutor och kan bara ändra priserna den första dagen i ett kvartal.",
      },
      {
        heading: "Det här tar kalkylatorn inte med",
        text: "Utility- och autentiseringsmeddelanden har volymnivåer som sänker priset vid höga volymer; de räknas inte med här. Meddelanden som skickas i det kostnadsfria fönstret för ingångspunkten på 72 timmar efter en Click to WhatsApp-annons eller en knapp på en Facebook-sida är gratis. Din WhatsApp-leverantör kan lägga till egna avgifter.",
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
