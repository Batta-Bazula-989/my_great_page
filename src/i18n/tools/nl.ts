
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Tools",
  allTools: "Alle tools",
  hub: {
    slug: "tools",
    metaTitle: "Gratis tools en calculators voor klantenservice | TascaLab",
    metaDescription:
      "Gratis calculators voor supportteams: vergelijk kosten van AI-supportagents, schat je WhatsApp Business API-rekening en bereken SLA-deadlines in kantooruren.",
    eyebrow: "Gratis tools",
    title: "Gratis tools voor supportteams",
    intro: "Snelle calculators op basis van gepubliceerde prijzen en eenvoudig rekenwerk. Gratis, zonder registratie.",
    open: "Open de tool",
  },
  common: {
    freeTool: "Gratis tool · zonder registratie",
    howItWorks: "Zo werkt het",
    faqTitle: "Veelgestelde vragen",
    sources: "Bronnen",
    estimate: "Alleen schattingen, geen offerte.",
    perMonth: "/maand",
    ctaTitle: "Wil je een exact bedrag voor je team?",
    ctaText: "Plan een gratis Health Check: een gesprek van 30 minuten, daarna een schriftelijk rapport met het pakket en de vaste prijs die passen.",
    ctaBook: "Plan een gratis Health Check",
    otherTools: "Andere gratis tools",
  },
  aiAgent: {
    slug: "ai-supportagent-kosten-calculator",
    navLabel: "Kosten AI-supportagent",
    short: "Vergelijk AI-agents die per oplossing rekenen met een eenmalige bouw, bij je eigen volume.",
    metaTitle: "Kostencalculator AI-supportagent 2026 | TascaLab",
    metaDescription:
      "Vergelijk de maandkosten van Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro en Agentforce bij je volume met een eenmalig gebouwde AI-supportagent op maat.",
    h1: "Kostencalculator voor AI-supportagents",
    intro:
      "De meeste AI-supportagents rekenen per oplossing, gesprek of actie, dus de rekening groeit mee met je volume. Vul je cijfers in en vergelijk de lijstprijzen van zes leveranciers met een eenmalige bouw.",
    inputs: {
      title: "Je volume",
      conversations: "AI-gesprekken per maand",
      resolutionRate: "Opgelost zonder medewerker",
      actions: "Agentforce-acties per gesprek",
      buildTitle: "Eenmalige bouw",
      package: "Pakket",
      platform: "Automatiseringsplatform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (€ 20 per maand, jaarlijks gefactureerd)",
        make: "Make Core ($ 9 per maand, jaarlijks gefactureerd)",
        selfHosted: "n8n self-hosted (serverkosten niet inbegrepen)",
      },
      tokens: "AI-tokens per gesprek",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Voorbeeldwaarden uit een gepubliceerd supportgesprek van 5 berichten. Pas ze aan aan je eigen bot.",
    },
    results: {
      title: "Geschatte kosten per maand",
      vendor: "Leverancier",
      monthly: "Per maand",
      year: "12 maanden",
      yourBuild: "Eenmalige bouw",
      buildLine: "{price} eenmalig + {monthly} per maand aan lopende kosten",
      payback: "Goedkoper dan {vendor} vanaf maand {months}",
      neverCheaper: "Bij dit volume is de bouw binnen 12 maanden niet goedkoper dan welke leverancier ook.",
      cheapest: "Laagste",
      currencyNote: "De prijzen van leveranciers zijn lijstprijzen in USD, omgerekend tegen de ECB-koers van 16 oktober 2026.",
    },
    units: {
      fin: "$ 0,99 per uitkomst; minimaal 50 per maand met een andere helpdesk",
      zendesk: "$ 2,00 per geautomatiseerde oplossing, betalen naar gebruik",
      freddy: "$ 49 per 100 sessies",
      hubspot: "$ 0,50 per opgelost gesprek; vereist een Professional- of Enterprise-abonnement",
      tidio: "$ 0,50 per gesprek waarop Lyro antwoordt",
      agentforce: "$ 0,10 per actie (20 Flex Credits)",
    },
    notIncluded:
      "Niet inbegrepen: je helpdeskabonnement, tegoeden die bij je abonnement horen, volumekortingen en belastingen. Fin rekent ook sommige overdrachten en routeringen als uitkomst, dus de werkelijke kosten kunnen hoger zijn.",
    sections: [
      {
        heading: "Zo werkt de berekening",
        text: "Het aantal opgeloste gesprekken is je aantal gesprekken per maand maal het aandeel dat zonder medewerker wordt opgelost. Fin, Zendesk en HubSpot rekenen per oplossing of uitkomst, Freddy per bundel van 100 sessies, Tidio Lyro per gesprek waarop het antwoordt, en Agentforce per actie. Hieronder linkt elke lijstprijs naar de prijspagina van de leverancier.",
      },
      {
        heading: "Waarom rekeningen per oplossing groeien",
        text: "Rekent een leverancier per oplossing, dan maakt elk extra gesprek dat de agent oplost de rekening hoger. Een eenmalige bouw heeft geen kosten per oplossing: je betaalt de AI-aanbieder rechtstreeks voor tokens en het automatiseringsplatform rechtstreeks voor het abonnement.",
      },
      {
        heading: "Wat een eenmalige bouw kost om te draaien",
        text: "AI-gebruik wordt per token gefactureerd door je AI-aanbieder. Deze calculator gebruikt de lijstprijzen van Claude Haiku 5.5 voor prompts tot 100.000 tokens: $ 0,10 per miljoen inputtokens en $ 0,50 per miljoen outputtokens. Daar komt het automatiseringsplatform bij: n8n self-hosted (gratis software; de server betaal je wel), n8n Cloud vanaf € 20 per maand of Make vanaf $ 9 per maand, beide jaarlijks gefactureerd.",
      },
    ],
    faqs: [
      {
        q: "Zijn deze prijzen actueel?",
        a: "Het zijn lijstprijzen zoals ze in oktober 2026 op de prijspagina van elke leverancier stonden. Leveranciers wijzigen hun prijzen vaak, dus controleer de gelinkte pagina's voordat je koopt.",
      },
      {
        q: "Wat telt als een oplossing?",
        a: "Elke leverancier definieert dat anders. Fin rekent per uitkomst, Zendesk per geautomatiseerde oplossing, HubSpot per opgelost gesprek en Freddy per sessie. Lees de definitie van elke leverancier voordat je vergelijkt.",
      },
      {
        q: "Waarom worden de prijzen in mijn valuta getoond?",
        a: "Leveranciers publiceren deze prijzen in Amerikaanse dollars. Buiten de Amerikaanse versie van deze pagina worden ze omgerekend tegen de referentiekoers van de Europese Centrale Bank van 16 oktober 2026.",
      },
      {
        q: "Is een eenmalige bouw altijd goedkoper?",
        a: "Nee. Bij lage volumes kan een agent die per oplossing rekent minder kosten. De calculator laat zien of en wanneer een eenmalige bouw bij je volume goedkoper wordt.",
      },
    ],
  },
  whatsapp: {
    slug: "whatsapp-business-kosten-calculator",
    navLabel: "Kosten WhatsApp Business",
    short: "Schat je maandelijkse WhatsApp API-rekening, inclusief het nieuwe gratis tegoed voor serviceberichten.",
    metaTitle: "Kostencalculator WhatsApp Business API 2026 | TascaLab",
    metaDescription:
      "Schat je maandrekening voor het WhatsApp Business Platform met Meta's prijzen per bericht en 1.000 gratis serviceberichten per nummer vanaf 1 oktober 2026.",
    h1: "Kostencalculator voor de WhatsApp Business API",
    intro:
      "Sinds 1 oktober 2026 rekent Meta voor WhatsApp-serviceberichten boven de 1.000 gratis berichten per zakelijk nummer per maand het utility-tarief van de markt. Vul je volumes in, plus de tarieven uit de tarievenkaart van Meta voor het land van je klanten.",
    inputs: {
      volumeTitle: "Berichten per maand",
      numbers: "Zakelijke telefoonnummers",
      service: "Serviceberichten (vrije antwoorden)",
      utility: "Utility-templates",
      marketing: "Marketingtemplates",
      authentication: "Authenticatietemplates",
      ratesTitle: "Tarieven per bericht",
      ratesHint: "Neem de tarieven voor het land van je klanten over uit de tarievenkaart van Meta, in je factuurvaluta.",
      rateCard: "Open de tarievenkaarten van Meta",
      utilityRate: "Utility-tarief (geldt ook voor serviceberichten)",
      marketingRate: "Marketingtarief",
      authenticationRate: "Authenticatietarief",
    },
    results: {
      title: "Geschatte kosten per maand",
      freeService: "Gebruikte gratis serviceberichten",
      billableService: "Betaalde serviceberichten",
      service: "Serviceberichten",
      utility: "Utility-templates",
      marketing: "Marketingtemplates",
      authentication: "Authenticatietemplates",
      total: "Totaal per maand",
      enterRates: "Vul je tarieven in om de kosten te zien.",
    },
    notIncluded:
      "Niet inbegrepen: staffelkortingen op utility- en authenticatieberichten, de kosten van je WhatsApp-aanbieder en belastingen. Berichten binnen een gratis entry point-venster worden niet in rekening gebracht.",
    sections: [
      {
        heading: "Wat er op 1 oktober 2026 veranderde",
        text: "Vrije serviceberichten, de antwoorden die je binnen het klantenservicevenster van 24 uur stuurt, zijn niet langer onbeperkt en gratis. Elk zakelijk telefoonnummer krijgt 1.000 gratis serviceberichten per maand; daarna rekent Meta er het utility-tarief van de markt voor. Utility-templates die je binnen het venster verstuurt, worden nu ook in rekening gebracht.",
      },
      {
        heading: "Hoe Meta berichten factureert",
        text: "Meta rekent per afgeleverd bericht. Het tarief hangt af van de berichtcategorie (marketing, utility, authenticatie of service) en het land van de ontvanger. Meta publiceert tarievenkaarten in meerdere valuta en mag de prijzen alleen op de eerste dag van een kwartaal wijzigen.",
      },
      {
        heading: "Wat deze calculator buiten beschouwing laat",
        text: "Utility- en authenticatieberichten hebben staffels die het tarief bij hoge volumes verlagen; die zijn hier niet meegenomen. Berichten die je verstuurt in het gratis entry point-venster van 72 uur na een click-to-WhatsApp-advertentie of een knop op een Facebook-pagina zijn gratis. Je WhatsApp-aanbieder kan eigen kosten rekenen.",
      },
    ],
    faqs: [
      {
        q: "Zijn WhatsApp-serviceberichten nog gratis?",
        a: "Sinds 1 oktober 2026 krijgt elk zakelijk telefoonnummer 1.000 gratis serviceberichten per maand. Vanaf het 1.001e bericht rekent Meta het utility-tarief van de markt.",
      },
      {
        q: "Waarom moet ik de tarieven invullen?",
        a: "Tarieven hangen af van het land van je klanten en je factuurvaluta. Meta publiceert ze in zijn tarievenkaarten; neem de tarieven over die voor jou gelden voor een exacte schatting.",
      },
      {
        q: "Hoe vaak wijzigt Meta de prijzen van WhatsApp?",
        a: "Volgens Meta kunnen de prijzen alleen op de eerste dag van elk kwartaal worden aangepast, dus maximaal vier keer per jaar.",
      },
      {
        q: "Zitten de kosten van mijn aanbieder hierin?",
        a: "Nee. Het gaat alleen om de kosten per bericht van Meta. Je WhatsApp Business Solution Provider kan eigen kosten rekenen.",
      },
    ],
  },
  sla: {
    slug: "sla-calculator",
    navLabel: "SLA-calculator",
    short: "Bereken SLA-deadlines en de tijd tot het eerste antwoord in kantooruren.",
    metaTitle: "SLA-calculator met kantooruren en feestdagen | TascaLab",
    metaDescription:
      "Bereken wanneer een support-SLA verloopt, of hoeveel kantoortijd een eerste antwoord kostte: alleen je werkuren op werkdagen tellen, feestdagen niet.",
    h1: "SLA-calculator met kantooruren",
    intro:
      "SLA-doelen worden meestal in kantooruren geteld, dus een doel van 4 uur dat op vrijdagmiddag ingaat, kan op maandag verlopen. Vul een starttijd en je rooster in om te zien wanneer het doel verloopt, of meet de tijd in kantooruren tussen twee momenten.",
    modes: { due: "Wanneer verloopt het?", elapsed: "Hoe lang duurde het?" },
    inputs: {
      received: "Ticket ontvangen",
      target: "SLA-doel",
      hours: "uur",
      minutes: "minuten",
      replied: "Eerste antwoord verstuurd",
      scheduleTitle: "Kantooruren",
      opens: "Opent",
      closes: "Sluit",
      days: "Werkdagen",
      dayNames: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
      holidays: "Feestdagen",
      addHoliday: "Toevoegen",
      removeHoliday: "{date} verwijderen",
      noHolidays: "Geen feestdagen toegevoegd.",
    },
    results: {
      dueAt: "Verloopt op",
      calendarTime: "Kalendertijd tot de deadline",
      businessTime: "Tijd in kantooruren",
      elapsedCalendar: "Kalendertijd",
      withinTarget: "Binnen het doel van {target}",
      overTarget: "Doel van {target} overschreden",
      invalid: "Controleer de tijden en de kantooruren.",
      duration: "{h} u {m} min",
      days: "{d} d {h} u {m} min",
    },
    sections: [
      {
        heading: "Hoe SLA's in kantooruren worden geteld",
        text: "De SLA-klok loopt alleen tijdens kantooruren op werkdagen. Komt een ticket buiten die uren binnen, dan start de klok zodra de volgende werkdag begint. Feestdagen die je toevoegt, tellen niet als werkdag.",
      },
      {
        heading: "Tijdzones",
        text: "Alle tijden worden behandeld als één tijdzone: de tijdzone van je kantooruren. Vul de tickettijden in diezelfde tijdzone in.",
      },
    ],
    faqs: [
      {
        q: "Slaat de calculator weekenden over?",
        a: "Ja. Alleen de werkdagen die je aanvinkt, tellen mee. Zaterdag en zondag zijn standaard niet aangevinkt.",
      },
      {
        q: "Hoe ga ik om met feestdagen?",
        a: "Voeg de datum van elke feestdag toe. De calculator telt die dag niet als werkdag.",
      },
      {
        q: "Is één werkdag acht uur?",
        a: "Alleen als je kantooruren acht uur beslaan. Vul je openings- en sluitingstijd in en stel daarna het doel in uren in.",
      },
    ],
  },
};

export default tools;
