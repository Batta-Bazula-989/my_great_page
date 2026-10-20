import type { Dictionary } from "./en";
import tools from "./tools/es";

const es: Dictionary = {
  meta: {
    homeTitle: "Atención al cliente con IA: chatbots, bots de voz y tickets | TascaLab",
    homeDescription:
      "Automatiza tu soporte: chatbots con IA, bots de voz, enrutamiento de tickets e informes en Zendesk, Freshdesk y Jira. Precios fijos y Health Check gratis.",
    noscriptHeading: "Automatización de la atención al cliente con IA: chatbots, bots de voz y enrutamiento de tickets",
    noscriptText:
      "TascaLab crea chatbots con IA, bots de voz, enrutamiento de tickets e informes automáticos sobre Zendesk, Freshdesk, Jira y Slack. Escribe a romanzakharenko.r@gmail.com para reservar un Health Check gratuito.",
  },
  nav: {
    services: "Qué hago",
    whyMe: "¿Por qué yo?",
    pricing: "Precios",
    reviews: "Reseñas",
    faq: "FAQ",
    resources: "Recursos",
    cta: "Health Check gratuito",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    logoAlt: "Logotipo de TascaLab",
  },
  hero: {
    eyebrow: "Automatización del soporte que aguanta de verdad",
    titleBefore: "Chatbots con IA, bots de voz y ",
    titleHighlight: "automatización de tickets",
    titleAfter: " para equipos de soporte",
    intro: "Integrado en el helpdesk que ya usas. Precios fijos, sin cambiar de plataforma.",
    ctaBook: "Reserva un Health Check gratuito",
    ctaUpwork: "Reseñas en Upwork",
    highlights: ["Funciona con tu helpdesk actual", "En marcha en 1–3 semanas", "30 días de soporte incluidos"],
    integratesWith: "Se integra con",
  },
  services: {
    eyebrow: "Qué hago",
    title: "Servicios de automatización de la atención al cliente",
    items: [
      {
        title: "Chatbots y bots de voz de soporte",
        description:
          "Responde los mensajes y las llamadas habituales y pasa el resto a tu equipo.",
      },
      {
        title: "Enrutamiento y categorización de tickets",
        description:
          "Cada ticket nuevo etiquetado, priorizado y asignado automáticamente.",
      },
      {
        title: "Informes",
        description:
          "Los informes que tu equipo prepara a mano, enviados automáticamente.",
      },
      {
        title: "Solución a medida",
        description:
          "¿Algo concreto? Defino el alcance y lo construyo.",
      },
    ],
  },
  fit: {
    eyebrow: "¿Encajamos?",
    title: "Para quién es esta automatización del soporte",
    goodTitle: "Encaja bien",
    notTitle: "No encaja",
    good: [
      "Trabajo de soporte repetitivo a diario",
      "Usas Zendesk, Freshdesk, Jira o similar",
      "Informes que aún se sacan a mano",
      "Herramientas que no se comunican entre sí",
    ],
    not: [
      "Necesitas un responsable de soporte a tiempo completo",
      "Quieres sustituir todo tu stack de soporte",
      "Esperas que la IA sustituya a tu equipo",
    ],
  },
  whyMe: {
    eyebrow: "Por qué trabajar conmigo",
    title: "Hecho por alguien que ha trabajado en soporte",
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
    title: "Paquetes de automatización del soporte a precio fijo",
    intro: "Un precio, un solo pago. Sin iguala.",
    oneTimeFee: "pago único",
    cta: "Empezar",
    from: "desde {price}",
    delivery: "Entrega",
    deliveryTime: "1–3 semanas",
    included: "Qué incluye",
    running: "Costes mensuales de funcionamiento",
    runningNote: "Los cobran los proveedores de las herramientas. No se incluyen en el precio del paquete.",
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
    leaveCta: "¿Has trabajado conmigo? Deja una reseña",
    quoted: "Reseñas citadas palabra por palabra de mi perfil de Upwork.",
    verify: "Verificar en Upwork",
    stars: "{rating} de 5 estrellas",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Tengo que cambiar mis herramientas de soporte?",
        a: "No. Trabajo con lo que ya uses: Zendesk, Freshdesk, Jira, Slack o herramientas internas. El objetivo es conectar y mejorar lo que tienes, no sustituirlo.",
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
    title: "Pide un Health Check gratuito de tu soporte",
    intro: "Una llamada de 30 minutos y, después, un informe por escrito.",
    cta: "Reserva un Health Check gratuito",
    linkedin: "Conecta en LinkedIn",
    email: "Correo electrónico",
    upwork: "Reseñas en Upwork",
  },
  footer: {
    resourcesNav: "Recursos",
    allResources: "Todos los recursos",
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
  },
  cookie: {
    text: "Usamos cookies de analítica y de medición publicitaria para entender cómo llegan los visitantes a este sitio y cómo lo usan.",
    privacy: "Política de privacidad",
    decline: "Rechazar",
    accept: "Aceptar",
  },
  booking: {
    title: "Reserva un Health Check gratuito",
    description: "Déjame tus datos y me pondré en contacto contigo para programar una llamada de 30 minutos. Después recibirás un informe por escrito. Sin compromiso ni discurso de ventas.",
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
    submitting: "Enviando...",
    submit: "Reserva tu Health Check gratuito",
    sendFailed: "No se ha podido enviar la solicitud",
    networkError: "Error de red o no se puede acceder al servidor.",
    sent: "¡Solicitud enviada! Me pondré en contacto contigo en un plazo de 24 horas.",
    errors: {
      nameRequired: "El nombre completo es obligatorio",
      nameShort: "El nombre completo debe tener al menos 2 caracteres",
      nameLong: "El nombre completo debe tener menos de 50 caracteres",
      nameChars: "El nombre completo solo puede contener letras, espacios, guiones y apóstrofos",
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
    ctaTitle: "¿Quieres que lo configure para tu equipo?",
    ctaText:
      "Reserva un Health Check gratuito: una llamada de 30 minutos y un informe por escrito con 2–3 recomendaciones concretas, un precio fijo y los costes de funcionamiento estimados. Sin discurso de ventas.",
    ctaBook: "Reserva un Health Check gratuito",
    ctaUpwork: "Reseñas en Upwork",
    sources: "Fuentes",
    onThisPage: "En esta página",
    related: "Relacionado",
  },
  resources: {
    metaTitle: "Recursos de automatización del soporte | TascaLab",
    metaDescription:
      "Guías sobre chatbots de soporte con IA, enrutamiento de tickets, Zendesk, Freshdesk y Jira, bots de WhatsApp y Telegram, métricas, SLA y normas de la UE.",
    eyebrow: "Recursos",
    title: "Recursos sobre automatización de la atención al cliente",
    intro:
      "Guías verificadas sobre bots de soporte, enrutamiento de tickets, automatización del helpdesk, métricas de soporte y las normas de la UE que se les aplican. Cada página indica las fuentes oficiales en las que se basa.",
    readGuide: "Leer guía",
  },
  notFound: {
    title: "Página no encontrada",
    text: "Esta página no existe o se ha movido.",
    back: "Volver al inicio",
  },
  tools,
};

export default es;
