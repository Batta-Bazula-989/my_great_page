import type { Dictionary } from "./en";
import tools from "./tools/es";

const es: Dictionary = {
  meta: {
    homeTitle: "Automatización de leads, CRM y soporte B2B | TascaLab",
    homeDescription:
      "Automatización de leads e integración CRM para equipos B2B: scoring con IA, HubSpot y Attio, más automatización de soporte. Precios fijos, Health Check gratis.",
  },
  nav: {
    services: "Qué hago",
    whyMe: "¿Por qué yo?",
    pricing: "Precios",
    reviews: "Reseñas",
    faq: "FAQ",
    blog: "Blog",
    cta: "Health Check gratuito",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    logoAlt: "Logotipo de TascaLab",
    skipToContent: "Saltar al contenido",
  },
  hero: {
    eyebrow: "Automatización que aguanta de verdad",
    titleBefore: "Automatización de leads, CRM y soporte ",
    titleHighlight: "para pequeños equipos B2B",
    titleAfter: "",
    sectors: "La mayor parte de mi trabajo es con equipos de ventas B2B, ecommerce y operaciones de logística.",
    intro: "Soy Roman. Los construyo yo mismo, a precio fijo desde {price}, en un solo pago.",
    callNote: "Health Check gratuito: una llamada de 30 minutos conmigo y, después, un informe por escrito.",
    ctaBook: "Reserva un Health Check gratuito",
    ctaUpwork: "Reseñas en Upwork",
    highlights: ["Funciona con tu CRM o helpdesk actual", "En marcha en 1–3 semanas", "30 días de soporte incluidos"],
    integratesWith: "Se integra con",
  },
  recentWork: {
    eyebrow: "En la práctica",
    title: "Trabajos recientes",
    situationLabel: "Situación",
    changeLabel: "Qué cambió",
    resultLabel: "Resultado",
    cases: [
      {
        title: "Gestión de respuestas de outreach",
        situation: "Un equipo de ventas B2B registraba a mano en su CRM las respuestas de outreach.",
        change:
          "Ahora la IA clasifica cada respuesta de Lemlist y la registra en el deal correcto en HubSpot y Attio, con alertas en Slack.",
        result: "No se escapa nada.",
      },
      {
        title: "Scoring de visitantes web",
        situation: "Una empresa no podía ver qué visitantes de su web importaban.",
        change:
          "Ahora cada empresa identificada se puntúa frente a su perfil de cliente ideal y se registra en HubSpot.",
        result: "Un resumen semanal, ordenado por puntuación.",
      },
      {
        title: "Migración de plataforma de automatización",
        situation: "La plataforma de automatización de un equipo anunció su cierre.",
        change: "Se migraron más de 20 workflows en producción a n8n.",
        result: "Todo en marcha antes de la fecha límite.",
      },
    ],
  },
  services: {
    eyebrow: "Qué hago",
    title: "Servicios de automatización de leads, CRM y soporte",
    items: [
      {
        title: "Automatización de leads",
        description:
          "Tus leads de visitantes del sitio web, formularios y respuestas de outreach se clasifican con IA, se puntúan según tu perfil de cliente ideal y se registran en tu CRM con alertas para el equipo.",
      },
      {
        title: "Integración y automatización del CRM",
        description:
          "Tu CRM (HubSpot, Attio) conectado a herramientas de outreach, llamadas y enriquecimiento. Respuestas, llamadas y transcripciones registradas automáticamente en el deal correcto, y migraciones de workflows entre plataformas.",
      },
      {
        title: "Automatización del soporte",
        description:
          "Bots de chat y de voz, enrutamiento y categorización de tickets, informes automatizados, todo conectado a tu helpdesk (Zendesk, Freshdesk, Jira).",
      },
    ],
  },
  process: {
    eyebrow: "Cómo funciona",
    title: "De la primera llamada a una automatización que funciona",
    intro:
      "Después de reservar el Health Check: una llamada de 30 minutos y, después, un informe por escrito con recomendaciones y un precio fijo — sin compromiso.",
    steps: [
      {
        title: "Health Check gratuito",
        description: "Una llamada de 30 minutos sobre tu configuración y dónde te ayudaría la automatización.",
      },
      {
        title: "Informe por escrito",
        description: "2–3 recomendaciones, el paquete que encaja y su precio fijo.",
      },
      {
        title: "Precio fijo acordado",
        description: "Se acuerda antes de empezar a trabajar. Un solo pago, sin iguala.",
      },
      {
        title: "Construido en 1–3 semanas",
        description: "Dentro de tu CRM o helpdesk, funcionando en tus propias cuentas.",
      },
      {
        title: "30 días de soporte",
        description: "Si algo falla después del lanzamiento, lo arreglo.",
      },
    ],
  },
  fit: {
    eyebrow: "¿Encajamos?",
    title: "Para quién es esta automatización",
    intro: "Normalmente equipos B2B pequeños con trabajo repetitivo en sus herramientas del día a día.",
    goodTitle: "Encaja bien",
    notTitle: "No encaja",
    good: [
      "Trabajo repetitivo de ventas o soporte a diario",
      "Usas HubSpot, Attio, Zendesk, Freshdesk o similar",
      "Leads, respuestas o informes que aún se gestionan a mano",
      "Herramientas que no se comunican entre sí",
    ],
    not: [
      "Necesitas un responsable de soporte a tiempo completo",
      "Quieres sustituir todo tu stack de herramientas",
      "Esperas que la IA sustituya a tu equipo",
    ],
  },
  whyMe: {
    eyebrow: "Por qué trabajar conmigo",
    title: "Hecho por alguien que ha trabajado en soporte",
    role: "Especialista en automatización con IA",
    items: [
      {
        title: "He trabajado en soporte",
        description: "He gestionado tickets y hecho informes a mano, así que sé lo que frena a los equipos.",
      },
      {
        title: "Hecho para aguantar",
        description: "Gestión de errores, pruebas de casos límite y monitorización en cada proyecto.",
      },
      {
        title: "Todo es tuyo",
        description: "Documentación completa y traspaso. Sin ataduras.",
      },
      {
        title: "Respuestas directas",
        description: "Si algo no merece la pena automatizarlo, te lo diré.",
      },
    ],
  },
  pricing: {
    eyebrow: "Precios",
    title: "Paquetes de automatización a precio fijo",
    intro: "Un precio, un solo pago. Sin iguala.",
    oneTimeFee: "pago único",
    cta: "Consúltalo en un Health Check",
    from: "desde {price}",
    delivery: "Entrega",
    deliveryTime: "1–3 semanas",
    included: "Qué incluye",
    groups: {
      leads: "Automatización de leads y CRM",
      support: "Automatización de soporte",
      custom: "Proyectos a medida",
    },
    running: "Costes mensuales de funcionamiento",
    showRunning: "Mostrar los costes mensuales de funcionamiento",
    hideRunning: "Ocultar los costes mensuales de funcionamiento",
    runningNote: "Los cobran los proveedores de las herramientas. No se incluyen en el precio del paquete.",
    estimate: "Estima los tuyos con mis calculadoras gratuitas:",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Responde las preguntas habituales en 1–2 canales y pasa el resto a tu equipo.",
        included: [
          "1–2 canales: web, WhatsApp, Telegram, Messenger o Instagram",
          "Responde preguntas frecuentes y recoge datos del cliente",
          "Pasa el resto a tu equipo",
        ],
        running: [
          "Uso de IA, facturado por token por tu proveedor de IA, p. ej., Claude Haiku 5.5 desde 0,10 $ / 0,50 $ por millón de tokens de entrada / salida*",
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
          "Solo WhatsApp: desde el 1 de octubre de 2026, 1.000 mensajes de servicio gratis al mes por número de empresa; después, la tarifa por mensaje de Meta",
        ],
      },
      {
        name: "Voice Bot",
        description: "Atiende las llamadas entrantes, hace el triaje y las pasa a tu equipo.",
        included: [
          "Atiende las llamadas entrantes",
          "Triaje y traspaso limpio a tu equipo",
          "Conectado a tu helpdesk",
        ],
        running: [
          "Tarifas por minuto de la plataforma de voz, p. ej., Retell AI desde 0,07 $ por minuto, más el modelo de IA y la línea telefónica",
          "Un número de teléfono de tu proveedor de telefonía",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Gestiona conversaciones más complejas en 3–5 canales.",
        included: [
          "3–5 canales",
          "Conversaciones de varios pasos",
          "Traspaso a tu equipo, conectado a tu helpdesk",
        ],
        running: [
          "Uso de IA, facturado por token por tu proveedor de IA, p. ej., Claude Haiku 5.5 desde 0,10 $ / 0,50 $ por millón de tokens de entrada / salida*",
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
          "Solo WhatsApp: desde el 1 de octubre de 2026, 1.000 mensajes de servicio gratis al mes por número de empresa; después, la tarifa por mensaje de Meta",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Cada ticket etiquetado, priorizado y asignado en cuanto llega.",
        included: [
          "La IA clasifica cada ticket nuevo por tema y urgencia",
          "Pone etiquetas y prioridad, y lo asigna al grupo correcto",
          "Zendesk, Freshdesk o Jira Service Management",
        ],
        running: [
          "Clasificación con IA, facturada por token por tu proveedor de IA, p. ej., Claude Haiku 5.5 desde 0,10 $ / 0,50 $ por millón de tokens de entrada / salida*",
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
        ],
      },
      {
        name: "Automated Reports",
        description: "Los informes que tu equipo prepara a mano, enviados automáticamente.",
        included: [
          "Métricas clave de soporte de tu helpdesk",
          "Envío programado por correo o a Slack",
        ],
        running: [
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
          "Sin costes de IA, salvo que quieras resúmenes redactados por IA",
        ],
      },
      {
        name: "Custom Automation",
        description: "Diseñada en torno a tus flujos de trabajo, tus herramientas y tus requisitos.",
        included: [
          "Alcance definido en tu Health Check gratuito",
          "Precio fijo acordado antes de empezar",
          "Cualquier herramienta con API o webhooks",
        ],
        running: ["Depende de las herramientas que intervengan; se estima en el informe de tu Health Check"],
      },
      {
        name: "Lead Capture & Scoring",
        description: "Leads de una fuente, clasificados y puntuados por IA, registrados en tu CRM.",
        included: [
          "Leads de una sola fuente, clasificados y puntuados con IA",
          "Registrados en tu CRM",
          "Alertas por correo o Slack",
        ],
        running: [
          "Uso de IA, facturado por token por tu proveedor de IA, p. ej., Claude Haiku 5.5 desde 0,10 $ / 0,50 $ por millón de tokens de entrada / salida*",
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
        ],
      },
      {
        name: "CRM Integration",
        description: "Dos herramientas conectadas a tu CRM, con la actividad registrada en los registros correctos.",
        included: [
          "Dos herramientas conectadas a tu CRM",
          "Respuestas y actividad registradas en los registros correctos",
          "Gestión de errores y alertas",
        ],
        running: [
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
        ],
      },
      {
        name: "Support Automation",
        description: "La parte repetitiva de tu soporte, automatizada y conectada a tu helpdesk.",
        included: [
          "Bots de chat y de voz que responden preguntas y llamadas frecuentes",
          "Tickets enrutados, etiquetados y priorizados automáticamente",
          "Informes enviados por correo o Slack según un calendario",
          "Conectado a Zendesk, Freshdesk o Jira",
        ],
        running: [
          "Uso de IA, facturado por token por tu proveedor de IA, p. ej., Claude Haiku 5.5 desde 0,10 $ / 0,50 $ por millón de tokens de entrada / salida*",
          "Plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes (ambos con facturación anual)",
          "Solo bots de voz: tarifas por minuto de la plataforma de voz, p. ej., Retell AI desde 0,07 $ por minuto, más el modelo de IA y la línea telefónica",
        ],
      },
    ],
    footnote:
      "* Precios oficiales de Anthropic (octubre de 2026) para prompts de hasta 100.000 tokens; los prompts más largos cuestan 0,50 $ / 2,50 $. Otros proveedores y modelos tienen precios distintos, y los proveedores pueden cambiar sus precios.",
    allPackages: "Todos los paquetes: 30 días de soporte tras la entrega y documentación básica.",
    healthCheck: {
      title: "Health Check gratuito",
      text: "Una llamada de 30 minutos y, después, un informe por escrito: qué automatizar primero, qué paquete encaja y cuánto cuesta.",
      cta: "Reserva tu Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "Tus datos",
    title: "Tus datos y el RGPD",
    intro: "Tú eliges dónde funciona tu automatización.",
    options: [
      {
        title: "En tus propias cuentas (por defecto)",
        points: [
          "Funciona en tus propias cuentas de helpdesk, automatización e IA",
          "Los datos de tus clientes se quedan en sistemas que controlas tú",
          "Todo es tuyo y tú controlas mi acceso",
        ],
      },
      {
        title: "Alojado por mí, con un DPA",
        points: [
          "Contrato de encargo del tratamiento (DPA, art. 28 del RGPD) firmado antes de tratar ningún dato personal",
          "Subencargados del tratamiento solo con tu autorización por escrito",
          "Al terminar, los datos se suprimen o se devuelven, a tu elección",
        ],
      },
    ],
    note: "Esto describe cómo se configuran los proyectos. No es asesoramiento jurídico.",
  },
  reviews: {
    eyebrow: "Opiniones de clientes",
    title: "Reseñas verificadas en Upwork",
    intro: "De contratos pagados en Upwork.",
    quoted: "Reseñas citadas palabra por palabra de mi perfil de Upwork.",
    verify: "Verificar en Upwork",
    stars: "{rating} de 5 estrellas",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Tengo que cambiar mi CRM o mis herramientas de soporte?",
        a: "No. Trabajo con lo que ya uses: HubSpot, Attio, Zendesk, Freshdesk, Jira, Slack o herramientas internas. El objetivo es conectar y mejorar lo que tienes, no sustituirlo.",
      },
      {
        q: "¿Y si algo falla después del lanzamiento?",
        a: "Todos los proyectos incluyen 30 días de soporte tras el lanzamiento. Si algo falla en ese plazo, lo arreglo. Trabajo con integraciones estándar (APIs, webhooks, Make/n8n), no con apaños frágiles a medida que solo funcionan en un entorno.",
      },
      {
        q: "¿Puede mi equipo mantenerlo cuando termines?",
        a: "Sí. Lo documento todo con claridad: la lógica, el flujo, los casos límite. No quedas atado. El soporte continuado está disponible, pero es opcional.",
      },
      {
        q: "¿Puedes integrar una herramienta concreta?",
        a: "Si tiene API o admite webhooks, casi seguro que sí. Coméntalo en tu Health Check y te lo confirmo.",
      },
      {
        q: "¿Qué pasa exactamente en el Health Check gratuito?",
        a: "Una llamada de 30 minutos sobre tu configuración actual, dónde está la fricción y dónde la automatización marcaría una diferencia real. Después recibes un informe por escrito con 2–3 recomendaciones concretas, el paquete y el precio fijo que encajan, y los costes mensuales de funcionamiento estimados. Sin presentaciones comerciales. Sin presión.",
      },
      {
        q: "¿Cuánto dura un proyecto típico?",
        a: "La mayoría de las implantaciones llevan 1–3 semanas, según la complejidad y lo rápido que nos pongamos de acuerdo en los requisitos. Te daré un plazo realista desde el principio, no uno optimista.",
      },
    ],
  },
  contact: {
    eyebrow: "Hablemos",
    title: "Pide un Health Check gratuito",
    intro: "Una llamada de 30 minutos y, después, un informe por escrito.",
    cta: "Reserva un Health Check gratuito",
    email: "Correo electrónico",
    upwork: "Reseñas en Upwork",
  },
  footer: {
    blogNav: "Blog",
    allPosts: "Todos los artículos",
    upworkReviews: "Reseñas en Upwork",
    privacy: "Política de privacidad",
    terms: "Condiciones del servicio",
  },
  categories: {
    services: { label: "Servicios", blurb: "Lo que se construye: bots, enrutamiento e informes." },
    helpdesks: { label: "Por helpdesk", blurb: "Automatización dentro de las herramientas que tu equipo ya usa." },
    channels: { label: "Por canal", blurb: "Bots de soporte para los canales desde los que te escriben tus clientes." },
    basics: { label: "Conceptos básicos", blurb: "Definiciones, métricas y cómo funcionan los traspasos." },
    guides: { label: "Guías y normativa", blurb: "Comparativas de herramientas y normas de la UE para bots de soporte." },
    crm: { label: "Automatización de leads y CRM", blurb: "Workflows, webhooks y API en Attio y HubSpot." },
  },
  cookie: {
    text: "Uso cookies de analítica y de medición publicitaria para entender cómo llegan los visitantes a este sitio y cómo lo usan.",
    privacy: "Política de privacidad",
    label: "Consentimiento de cookies",
    decline: "Rechazar",
    accept: "Aceptar",
  },
  booking: {
    title: "Reserva un Health Check gratuito",
    description: "Una llamada de 30 minutos conmigo, Roman, y después un informe por escrito. Sin compromiso ni discurso de ventas.",
    about: "Asunto: {topic}",
    close: "Cerrar",
    fullName: "Nombre completo",
    fullNamePlaceholder: "María García",
    email: "Correo profesional",
    emailPlaceholder: "maria@empresa.es",
    company: "Nombre de la empresa",
    companyPlaceholder: "Empresa S.L.",
    meetingMethod: "Forma de reunión preferida",
    methodPhone: "Teléfono",
    phone: "Número de teléfono",
    phonePlaceholder: "612 345 678",
    searchCountry: "Busca un país o prefijo...",
    noCountry: "No se ha encontrado ningún país.",
    telegram: "Enlace o usuario de Telegram",
    telegramPlaceholder: "https://t.me/usuario o @usuario",
    submitCalendar: "Continuar al calendario",
    submitting: "Enviando…",
    submit: "Reserva tu Health Check gratuito",
    nextCalendar: "A continuación, eliges una hora en mi calendario.",
    nextContact: "Me pondré en contacto contigo en un plazo de 24 horas para acordar una hora.",
    sendFailed: "Tu solicitud no se ha podido enviar",
    networkError: "Vuelve a intentarlo en un momento o contacta conmigo directamente:",
    sentTitle: "Solicitud enviada",
    sentCalendarTitle: "Casi listo: elige una hora",
    sentCalendar: "Ahora elige en mi calendario la hora que mejor te venga.",
    openCalendar: "Abrir mi calendario",
    sent: "Te contactaré en un plazo de 24 horas para acordar una hora.",
    errors: {
      nameRequired: "El nombre completo es obligatorio",
      nameShort: "El nombre completo debe tener al menos 2 caracteres",
      nameLong: "El nombre completo debe tener menos de 50 caracteres",
      nameChars: "El nombre completo solo puede contener letras, espacios, puntos, guiones y apóstrofos",
      emailRequired: "El correo profesional es obligatorio",
      emailInvalid: "Introduce una dirección de correo electrónico válida",
      companyLength: "El nombre de la empresa debe tener entre 2 y 50 caracteres",
      phoneRequired: "El número de teléfono es obligatorio",
      phoneChars: "Usa solo dígitos, espacios, puntos, guiones y paréntesis",
      phoneDigits: "El número de teléfono debe tener 6–15 dígitos",
      telegramRequired: "El enlace o usuario de Telegram es obligatorio",
      telegramInvalid:
        "Introduce un enlace de Telegram válido (p. ej., https://t.me/usuario) o un nombre de usuario (p. ej., @usuario)",
    },
  },
  seo: {
    home: "Inicio",
    byline: "Por Roman Zakharenko",
    factsChecked: "Datos verificados",
    atAGlance: "De un vistazo",
    faqTitle: "Preguntas frecuentes",
    faqShort: "FAQ",
    ctaTitle: "¿No sabes qué automatizar primero?",
    ctaText:
      "Reserva un Health Check gratuito: una llamada de 30 minutos y un informe por escrito con 2–3 recomendaciones concretas, un precio fijo y los costes de funcionamiento estimados. Sin discurso de ventas.",
    ctaBook: "Reserva un Health Check gratuito",
    ctaUpwork: "Reseñas en Upwork",
    sources: "Fuentes",
    onThisPage: "En esta página",
    related: "Relacionado",
    readNext: "Sigue leyendo",
    ctaPackages: "Ver paquetes y precios",
  },
  blog: {
    metaTitle: "Blog de automatización de soporte y CRM | TascaLab",
    metaDescription:
      "Guías sobre chatbots de soporte con IA, enrutamiento de tickets, Zendesk, Freshdesk, Jira, HubSpot y Attio, bots de WhatsApp y Telegram, SLA y normas de la UE.",
    title: "Blog sobre automatización de soporte y CRM",
    readArticle: "Leer artículo",
    all: "Todos",
    minRead: "{n} min de lectura",
    filterLabel: "Filtrar artículos por tema",
  },
  notFound: {
    title: "Página no encontrada",
    text: "Esta página no existe o se ha movido.",
    back: "Volver al inicio",
  },
  tools,
};

export default es;
