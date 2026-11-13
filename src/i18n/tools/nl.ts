
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Tools",
  allTools: "Alle tools",
  hub: {
    slug: "tools",
    metaTitle: "Gratis calculators voor leadscoring en support | TascaLab",
    metaDescription:
      "Gratis calculators: bouw en test een leadscore, vergelijk de kosten van AI-supportagents, schat je WhatsApp Business API-rekening en bereken SLA-deadlines.",
    eyebrow: "Gratis tools",
    title: "Gratis tools voor sales- en supportteams",
    intro: "Snelle calculators op basis van gepubliceerde prijzen en eenvoudig rekenwerk. Gratis, zonder registratie.",
    open: "Open de tool",
  },
  common: {
    freeTool: "Gratis tool · zonder registratie",
    howItWorks: "Zo werkt het",
    faqTitle: "Veelgestelde vragen",
    sources: "Bronnen",
    estimate: "Alleen schattingen, geen offerte.",
    max: "Maximaal {value}",
    min: "Minimaal {value}",
    perMonth: "/maand",
    ctaTitle: "Wil je een exact bedrag voor je team?",
    ctaText: "Plan een gratis Health Check: een gesprek van 30 minuten, daarna een schriftelijk rapport met het pakket en de vaste prijs die passen.",
    ctaBook: "Plan een gratis Health Check",
    otherTools: "Andere gratis tools",
  },
  leadScore: {
    slug: "leadscoring-calculator",
    navLabel: "Leadscoring-calculator",
    short: "Bouw een fit- en engagementscore, test die op een lead en kopieer het model.",
    metaTitle: "Leadscoring-calculator: fit- en engagementmodel | TascaLab",
    metaDescription:
      "Gratis leadscoring-calculator: bouw een fit- en engagementscore met de limieten en drempels van HubSpot, test die op een lead en kopieer het model.",
    h1: "Leadscoring-calculator",
    intro:
      "Bouw een leadscore op basis van punten, zoals de lead scoring tool van HubSpot werkt: fit-criteria voor wie de lead is, engagementcriteria voor wat de lead doet, elke score begrensd op zijn limiet en verdeeld in High, Medium en Low. Test de score op een lead, controleer het model op fouten en kopieer het daarna naar je CRM.",
    inputs: {
      criteriaTitle: "Je criteria",
      criteriaHint:
        "Vink de criteria aan die gelden voor een lead die je wilt testen. De voorbeelden zijn placeholders: vervang elk label en elke puntwaarde door je eigen.",
      label: "Criterium",
      score: "Score",
      points: "Punten",
      applies: "Geldt voor de testlead",
      remove: "{label} verwijderen",
      add: "Criterium toevoegen",
      maxReached: "Maximaal {n} criteria.",
      settingsTitle: "Score-instellingen",
      limit: "Scorelimiet",
      limitOption: "{min} tot {max}",
      high: "High vanaf",
      medium: "Medium vanaf",
      thresholdsHint:
        "De limieten zijn de opties van HubSpot. De standaarddrempels volgen het eigen voorbeeld van HubSpot: 70–100 High, 40–69 Medium, onder 40 Low.",
    },
    scores: { fit: "Fit", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "Branche past bij je ideale klantprofiel", score: "fit", points: 30, applies: true },
      { label: "Bedrijfsgrootte valt binnen je doelgroep", score: "fit", points: 25, applies: true },
      { label: "Functietitel is die van een beslisser", score: "fit", points: 25, applies: false },
      { label: "Gevestigd in een regio die je niet bedient", score: "fit", points: -40, applies: false },
      { label: "Reageerde met interesse op outreach", score: "engagement", points: 40, applies: true },
      { label: "Bezocht de prijspagina", score: "engagement", points: 20, applies: true },
      { label: "Opende je laatste drie e-mails", score: "engagement", points: 10, applies: false },
      { label: "Afgemeld voor je e-mails", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Je testlead",
      combined: "Gecombineerd label",
      combinedDesc: "{fit} fit, {engagement} engagement",
      range: "Mogelijk bereik: {min} tot {max}",
      checksTitle: "Voordat je het bouwt",
      allGood: "Geen problemen gevonden in dit model.",
      noCriteria: "{score}: voeg minstens één criterium toe.",
      order: "{score}: Medium moet lager zijn dan High.",
      unreachable: "{score}: geen enkele lead kan High bereiken. De hoogste score die een lead kan halen, is {max}.",
      capped: "{score}: de pluspunten tellen op tot {total}, maar de score stopt bij {limit}.",
      copy: "Kopieer het model als tabel",
      copied: "Gekopieerd",
      copyFailed: "Kopiëren is niet gelukt. Selecteer de criteria en kopieer ze handmatig.",
      tableHeads: { score: "Score", criterion: "Criterium", points: "Punten", limit: "Limiet", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "Hoe de score wordt berekend",
        text: "Elk criterium telt punten op of trekt ze af als het voor een lead geldt. Fit-criteria beschrijven wie de lead is, zoals branche, bedrijfsgrootte of rol; engagementcriteria beschrijven wat de lead doet, zoals reacties, bezoeken of opens. Elke score stopt bij zijn limiet, net als in de lead scoring tool van HubSpot, en de drempels maken van het getal High, Medium of Low. Het gecombineerde label volgt de conventie van HubSpot: de letter is de fit-band (A hoog, C laag) en het cijfer de engagementband (1 hoog, 3 laag), dus een lead met een lage fit maar veel engagement is C1.",
      },
      {
        heading: "Instellen in HubSpot",
        text: "De lead scoring tool van HubSpot vereist Marketing Hub of Sales Hub Professional of Enterprise. Scorelimieten lopen van -100 tot 100 tot en met -10.000 tot 10.000, met 100 als standaardmaximum. Binnen een score kun je groepen met hun eigen limieten toevoegen, en alle groepslimieten tellen mee voor de scorelimiet. Voor engagement kan scoreverval punten elke 1, 3, 6 of 12 maanden verlagen, waarbij elke maand als 30 dagen telt.",
      },
      {
        heading: "Instellen in Attio",
        text: "Attio heeft geen aparte scoringtool. Op de abonnementen Pro, Enterprise en Ultra kan een formula-attribuut punten optellen met if()-voorwaarden, met de operator ?? om lege velden als 0 te behandelen. Een formule die een getal teruggeeft, wordt een number-attribuut, wordt automatisch opnieuw berekend zodra de velden die ze gebruikt veranderen, en verbruikt geen workspace-credits. Op Free en Plus houd je de score bij in een number-attribuut dat een workflow of de API invult.",
      },
      {
        heading: "Wanneer je geen score nodig hebt",
        text: "Als je team elke nieuwe lead nog dezelfde dag leest, voegt een score weinig toe. Een score gaat lonen wanneer leads sneller binnenkomen dan iemand ze kan beoordelen, of wanneer de signalen die het meest tellen, zoals een geïnteresseerde reactie of een bezoek aan je prijspagina, in tools zitten die je CRM niet uit zichzelf ziet.",
      },
    ],
    faqs: [
      {
        q: "Zijn de voorbeeldpunten een aanbeveling?",
        a: "Nee. Het zijn placeholders die laten zien hoe de berekening werkt. Vervang elk criterium en elke puntwaarde door je eigen. De enige standaardwaarden die van een leverancier komen, zijn de scorelimieten van HubSpot en de voorbeelddrempels van HubSpot.",
      },
      {
        q: "Wat betekenen A1 en C3?",
        a: "Dat zijn de labels van HubSpot voor gecombineerde scores. De letter is de fit-band, van A (hoge fit) tot C (lage fit); het cijfer is de engagementband, van 1 (veel engagement) tot 3 (weinig engagement).",
      },
      {
        q: "Kan HubSpot de score met AI voor me bouwen?",
        a: "De AI-gebouwde contactscores van HubSpot vereisen Marketing Hub Enterprise en minstens 50 contacten, 25 geconverteerd en 25 niet geconverteerd, voordat een score kan worden gegenereerd.",
      },
      {
        q: "Heeft Attio leadscoring?",
        a: "Geen aparte scoringtool. Op Pro, Enterprise en Ultra kan een formula-attribuut automatisch een puntenscore berekenen; op andere abonnementen schrijft een workflow of de API de score naar een number-attribuut.",
      },
      {
        q: "Wordt er iets opgeslagen van wat ik invul?",
        a: "Nee. De score wordt in je browser berekend en niets van wat je invult, wordt ergens naartoe gestuurd.",
      },
    ],
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
      package: "Prijs {plan} (eenmalig)",
      priceHint: "{plan} begint bij {price}. Vul de vaste prijs uit je Health Check-rapport in als je die hebt.",
      platform: "Automatiseringsplatform",
      platforms: {
        n8nCloud: "n8n Cloud Starter (€ 20 per maand, jaarlijks gefactureerd)",
        make: "Make Core ($ 9 per maand, jaarlijks gefactureerd)",
        selfHosted: "n8n self-hosted (serverkosten niet inbegrepen)",
      },
      tokens: "AI-tokens per gesprek",
      inputTokens: "Input",
      outputTokens: "Output",
      tokensHint: "Standaardwaarden ter illustratie: geen enkele officiële bron publiceert een typisch cijfer. Vervang ze door de echte cijfers van je bot uit het gebruiksdashboard van je AI-aanbieder.",
    },
    results: {
      title: "Geschatte kosten",
      vendor: "Leverancier",
      monthly: "Per maand",
      year: "12 maanden",
      yourBuild: "Eenmalige bouw",
      buildLine: "{price} eenmalig + {monthly} per maand aan lopende kosten",
      payback: "Goedkoper dan {vendor} vanaf maand {months}",
      neverCheaper: "Bij dit volume is de bouw binnen 12 maanden niet goedkoper dan welke leverancier ook.",
      cheapest: "Goedkoopste leverancier",
      currencyNote: "De prijzen van leveranciers zijn lijstprijzen in USD, omgerekend tegen de ECB-koers van 16 oktober 2026.",
      pricesAsOf: "Lijstprijzen van leveranciers per {date}.",
      empty: "Vul je AI-gesprekken per maand in om de kosten te vergelijken.",
    },
    units: {
      fin: "$ 0,99 per uitkomst; met een andere helpdesk een minimum van $ 49 per maand, inclusief 50 uitkomsten",
      zendesk: "$ 2,00 per geautomatiseerde oplossing, betalen naar gebruik ($ 1,50 met een afnameverplichting)",
      freddy: "$ 49 per 100 sessies",
      hubspot: "$ 0,50 per opgelost gesprek (50 HubSpot Credits); vereist een Professional- of Enterprise-abonnement",
      tidio: "Maandbundels van $ 39 voor 50 tot $ 700 voor 1.000 gesprekken; daarboven Lyro Connect vanaf $ 0,50 per gesprek",
      agentforce: "$ 0,10 per actie (20 Flex Credits, $ 500 per 100.000)",
    },
    notIncluded:
      "Niet inbegrepen: je helpdeskabonnement, tegoeden die bij je abonnement horen, volumekortingen en belastingen. Fin rekent ook Procedure-overdrachten (een Procedure die je zo instelt dat die eindigt in een overdracht) als uitkomst, dus de werkelijke kosten kunnen hoger zijn. Zendesk zet accounts over op staffels voor oplossingen, met prijzen die het salesteam van Zendesk bepaalt.",
    sections: [
      {
        heading: "Zo werkt de berekening",
        text: "Het aantal opgeloste gesprekken is je aantal gesprekken per maand maal het aandeel dat zonder medewerker wordt opgelost. Fin rekent per uitkomst bovenop een minimum van $ 49 per maand, Zendesk en HubSpot per oplossing, Freddy per bundel van 100 sessies, Tidio Lyro in maandbundels van gesprekken waarop het antwoordt, en Agentforce per actie. Hieronder linkt elke lijstprijs naar de prijspagina van de leverancier.",
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
        a: "Het zijn lijstprijzen zoals ze op de officiële prijspagina's van elke leverancier staan, gecontroleerd in november 2026. Leveranciers wijzigen hun prijzen vaak, dus controleer de gelinkte pagina's voordat je koopt.",
      },
      {
        q: "Wat telt als een oplossing?",
        a: "Elke leverancier definieert dat anders. Fin rekent per uitkomst (een oplossing, of een Procedure die eindigt in een overdracht), Zendesk per geautomatiseerde oplossing, HubSpot per gesprek dat niet binnen 72 uur aan een medewerker wordt overgedragen, Freddy per sessie en Tidio per gesprek waarop Lyro antwoordt. Lees de definitie van elke leverancier voordat je vergelijkt.",
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
      "Niet inbegrepen: staffelkortingen op utility- en authenticatieberichten, berichten van Meta Business Agent, de kosten van je WhatsApp-aanbieder en belastingen. Berichten binnen een gratis entry point-venster worden niet in rekening gebracht.",
    sections: [
      {
        heading: "Wat er op 1 oktober 2026 veranderde",
        text: "Vrije serviceberichten, de antwoorden die je binnen het klantenservicevenster van 24 uur stuurt, zijn niet langer onbeperkt en gratis. Elk zakelijk telefoonnummer krijgt 1.000 gratis serviceberichten per maand; daarna rekent Meta er het utility-tarief van de markt voor. Utility-templates die je binnen het venster verstuurt, worden nu ook in rekening gebracht.",
      },
      {
        heading: "Hoe Meta berichten factureert",
        text: "Meta rekent per afgeleverd bericht. Het tarief hangt af van de berichtcategorie (marketing, utility, authenticatie of service) en het land van de ontvanger; serviceberichten kosten in die markt hetzelfde lijsttarief als utility- en authenticatieberichten. Een vijfde categorie, berichten van Meta Business Agent, de eigen AI-agent van Meta, wordt in plaats daarvan per token gefactureerd. Meta publiceert tarievenkaarten in 16 valuta en mag de prijzen alleen op de eerste dag van een kwartaal wijzigen.",
      },
      {
        heading: "Wat deze calculator buiten beschouwing laat",
        text: "Utility- en authenticatieberichten hebben staffels die het tarief bij hoge volumes verlagen; die zijn hier niet meegenomen. Berichten zijn gratis in het gratis entry point-venster, dat opengaat wanneer je binnen 24 uur antwoordt op iemand die je een bericht stuurde via een click-to-WhatsApp-advertentie in de Android- of iOS-app van WhatsApp, en dat tot 7 dagen open kan blijven. Berichten van Meta Business Agent ($ 2,00 per miljoen tokens) en de kosten van je WhatsApp-aanbieder zijn niet inbegrepen.",
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
