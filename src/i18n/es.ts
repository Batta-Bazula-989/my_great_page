import type { Dictionary } from "./en";

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
    fit: "¿Encajamos?",
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
    intro:
      "Conecto la IA al helpdesk que ya usas: responde las preguntas repetitivas, envía cada ticket a la cola correcta y entrega los informes que tu equipo prepara a mano. Menos tareas manuales, primeras respuestas más rápidas y sin cambiar de plataforma.",
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
          "Atiende los mensajes de primer contacto y las llamadas entrantes. Cualifica la solicitud, responde lo que puede y traspasa lo que no, de forma limpia. Un filtro delante de tu equipo, no un sustituto.",
      },
      {
        title: "Enrutamiento y categorización de tickets",
        description:
          "Cada ticket se etiqueta, se prioriza y se asigna en cuanto llega, según lo que realmente dice. Sin clasificar a mano y sin tickets parados en la cola equivocada.",
      },
      {
        title: "Informes",
        description:
          "Los informes que tu equipo saca a mano cada semana se generan y se envían automáticamente. El formato adecuado, a las personas adecuadas, en el momento adecuado. Se acabó extraer datos a mano.",
      },
      {
        title: "Solución a medida",
        description:
          "¿Necesitas algo concreto que no encaja en una plantilla? Defino el alcance y lo construyo. Si se puede automatizar, encontraremos la forma.",
      },
    ],
    previous: "Servicio anterior",
    next: "Servicio siguiente",
    show: "Mostrar {title}",
  },
  fit: {
    eyebrow: "¿Encajamos?",
    title: "Para quién es esta automatización del soporte",
    goodTitle: "Encaja bien",
    notTitle: "No encaja",
    good: [
      "Tu equipo de soporte hace un trabajo repetitivo y predecible que aparece todos los días",
      "Usas Zendesk, Freshdesk, Jira o algo similar, y quieres automatización por encima, no sustituirlo",
      "Quieres informes claros sin que nadie tenga que extraer datos a mano cada semana",
      "Tus herramientas no se comunican entre sí y por eso se te escapan tickets",
      "Quieres saber exactamente qué vas a recibir antes de pagar nada",
    ],
    not: [
      "Necesitas un responsable de soporte a tiempo completo que lleve las operaciones del día a día",
      "Quieres una sola herramienta que lo haga todo: entrada, resolución, escalado, informes, absolutamente todo",
      "Tienes previsto sustituir todo tu stack de soporte y empezar de cero",
      "Crees que la IA puede sustituir por completo a tu equipo de soporte",
    ],
  },
  whyMe: {
    eyebrow: "Por qué trabajar conmigo",
    title: "Hecho por alguien que ha trabajado en soporte",
    items: [
      {
        title: "He trabajado en soporte, no solo cerca de él",
        description:
          "He gestionado tickets, he hecho informes a mano y he lidiado con flujos de trabajo que se sostenían a base de copiar y pegar y buenas intenciones. Sé lo que de verdad frena a los equipos porque he estado en ese lado.",
      },
      {
        title: "Hecho para aguantar, no para lucirse en una demo",
        description:
          "Cada automatización incluye gestión de errores, pruebas de casos límite y monitorización. Si ocurre algo inesperado, falla de forma controlada y avisa a la persona adecuada; no se rompe en silencio.",
      },
      {
        title: "Al terminar, todo es tuyo",
        description:
          "Documentación completa. Traspaso claro. Sin herramientas propietarias a las que solo yo pueda acceder. Tu equipo puede mantener y ampliar lo que construyo sin tener que llamarme.",
      },
      {
        title: "Comunicación directa, siempre",
        description:
          "Te diré si algo no merece la pena automatizarlo. Te diré si tu presupuesto no encaja con el alcance. No te daré la razón para luego facturarte algo que no va a cambiar nada.",
      },
    ],
    previous: "Motivo anterior",
    next: "Motivo siguiente",
    show: "Mostrar {title}",
  },
  pricing: {
    eyebrow: "Precios",
    title: "Paquetes de automatización del soporte a precio fijo",
    intro: "Un precio por paquete, que pagas una sola vez. Sin cuota mensual por mi parte. ¿No sabes cuál te encaja? Empieza con el Health Check gratuito.",
    oneTimeFee: "pago único",
    cta: "Empezar",
    from: "desde {price}",
    delivery: "Entrega",
    deliveryDays: "{days} días",
    deliveryFrom: "desde {days} días",
    support: "Soporte",
    included: "Qué incluye",
    running: "Costes mensuales de funcionamiento",
    runningNote: "Se pagan a los proveedores de las herramientas, no a mí.",
    // Same order as PACKAGES in src/lib/pricing.ts. Names stay in English in every language.
    plans: [
      {
        name: "Starter Chat Bot",
        description: "Responde las preguntas habituales en 1–2 canales y pasa el resto a tu equipo.",
        included: [
          "Chatbot en 1–2 canales: web, WhatsApp, Telegram, Messenger o Instagram",
          "Responde tus preguntas frecuentes y gestiona las solicitudes habituales",
          "Recoge la información básica del cliente",
          "Pasa el resto a tu equipo con contexto",
          "Documentación básica",
        ],
        running: [
          "Uso de IA, facturado por tu proveedor de IA: unos 2,50–50 $ por cada 1.000 conversaciones*",
          "Plataforma de automatización: n8n autoalojado (gratis), n8n Cloud desde 20 €/mes o Make desde 9 $/mes",
          "Solo WhatsApp: los primeros 1.000 mensajes de servicio al mes son gratis por número; después, las tarifas de Meta",
        ],
      },
      {
        name: "Voice Bot",
        description: "Atiende las llamadas entrantes, hace el triaje y las pasa a tu equipo.",
        included: [
          "Agente de voz para llamadas entrantes con conversación natural",
          "Triaje de cada llamada",
          "Traspaso limpio a tu equipo",
          "Conectado a tu helpdesk",
          "Documentación básica",
        ],
        running: [
          "Tarifas por minuto de la plataforma de voz, p. ej., Retell AI desde 0,07 $ por minuto",
          "Un número de teléfono de tu proveedor de telefonía",
        ],
      },
      {
        name: "Standard Chat Bot",
        description: "Gestiona conversaciones más complejas en 3–5 canales.",
        included: [
          "Chatbot en 3–5 canales",
          "Conversaciones de varios pasos con una lógica más inteligente",
          "Traspasos más fluidos a tu equipo",
          "Conectado a tu helpdesk",
          "Documentación básica",
        ],
        running: [
          "Uso de IA, facturado por tu proveedor de IA: unos 2,50–50 $ por cada 1.000 conversaciones*",
          "Plataforma de automatización: n8n autoalojado (gratis), n8n Cloud desde 20 €/mes o Make desde 9 $/mes",
          "Solo WhatsApp: los primeros 1.000 mensajes de servicio al mes son gratis por número; después, las tarifas de Meta",
        ],
      },
      {
        name: "Ticket Routing & Categorization",
        description: "Cada ticket etiquetado, priorizado y asignado en cuanto llega.",
        included: [
          "Clasificación con IA de cada ticket nuevo por tema y urgencia",
          "Etiquetas, prioridad y asignación al grupo correcto",
          "Funciona en Zendesk, Freshdesk o Jira Service Management",
          "Documentación básica",
        ],
        running: [
          "Clasificación con IA: unos 0,20 $ por cada 1.000 tickets*",
          "Plataforma de automatización: n8n autoalojado (gratis), n8n Cloud desde 20 €/mes o Make desde 9 $/mes",
        ],
      },
      {
        name: "Automated Reports",
        description: "Los informes que tu equipo prepara a mano, enviados automáticamente.",
        included: [
          "Tus métricas clave de soporte, extraídas de tu helpdesk",
          "Envío programado por correo electrónico o a Slack",
          "Documentación básica",
        ],
        running: [
          "Plataforma de automatización: n8n autoalojado (gratis), n8n Cloud desde 20 €/mes o Make desde 9 $/mes",
          "Sin costes de IA, salvo que quieras resúmenes redactados por IA",
        ],
      },
      {
        name: "Custom Automation",
        description: "Diseñada en torno a tus flujos de trabajo, tus herramientas y tus requisitos.",
        included: [
          "Definimos el alcance juntos en tu Health Check gratuito",
          "Precio fijo y plazo acordados antes de empezar el trabajo",
          "Cualquier herramienta con API o webhooks",
          "Documentación básica",
        ],
        running: ["Depende de las herramientas que intervengan; se estima en el informe de tu Health Check"],
      },
    ],
    footnote:
      "* Las estimaciones de IA usan los precios oficiales de Anthropic (octubre de 2026) para Claude Haiku 5.5 (0,10 $ / 0,50 $ por millón de tokens de entrada / salida) y Claude Sonnet 5.5 (2 $ / 10 $), suponiendo unos 20.000 tokens de entrada y 1.000 de salida por conversación, y 1.500 / 100 por ticket. Otros proveedores y modelos tienen costes distintos, y los proveedores pueden cambiar sus precios.",
    trust: ["Sin cuota mensual por mi parte", "30 días de soporte tras la entrega", "Documentación básica incluida"],
    healthCheck: {
      title: "Health Check gratuito",
      text: "Una llamada de 30 minutos sobre tu configuración de soporte y, después, un informe por escrito: qué automatizar primero, qué paquete encaja, el precio fijo y el plazo, y los costes mensuales de funcionamiento estimados.",
      cta: "Reserva tu Health Check",
      price: "Gratis",
    },
  },
  data: {
    eyebrow: "Tus datos",
    title: "Tus datos y el RGPD",
    intro: "Tú eliges dónde funciona tu automatización. Lo acordamos en tu Health Check, antes de construir nada.",
    options: [
      {
        title: "En tus propias cuentas (por defecto)",
        points: [
          "Se construye dentro de tu helpdesk, tu espacio de trabajo de automatización y tu cuenta del proveedor de IA",
          "Los datos de tus clientes se quedan en sistemas que controlas tú, bajo tus propios contratos con esos proveedores",
          "Mi acceso es solo para la implementación y se retira tras la entrega",
          "Todos los flujos, prompts y claves de API son tuyos",
        ],
      },
      {
        title: "Alojado por mí, con un DPA",
        points: [
          "Ejecuto la automatización en cuentas que gestiono yo",
          "Firmamos un contrato de encargo del tratamiento (DPA) conforme al art. 28 del RGPD antes de tratar ningún dato personal",
          "En él figura cada subencargado del tratamiento, como la plataforma de automatización, el proveedor de IA y el alojamiento",
          "Cuando termina el contrato, los datos se suprimen o se devuelven, como exige el art. 28",
        ],
      },
    ],
    note: "Esto describe cómo se configuran los proyectos. No es asesoramiento jurídico.",
  },
  reviews: {
    eyebrow: "Opiniones de clientes",
    title: "Reseñas verificadas en Upwork",
    intro:
      "Cada reseña de mi perfil de Upwork procede de un contrato real y pagado, así que puedes ver exactamente cómo fueron otros proyectos de automatización del soporte antes de reservar una llamada.",
    readTitle: "Lee las reseñas de clientes",
    readText:
      "Consulta las valoraciones, la puntuación de éxito en los trabajos y las opiniones escritas de equipos para los que he creado chatbots, enrutamiento de tickets y automatizaciones de informes.",
    readCta: "Ver mi perfil de Upwork",
    leaveTitle: "¿Has trabajado conmigo? Deja una reseña",
    leaveText:
      "Si hemos terminado un proyecto juntos, una breve reseña en Upwork ayuda a otros equipos de soporte a decidir con confianza. Solo son dos minutos. ¡Gracias!",
    leaveCta: "Deja tu opinión en Upwork",
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
    intro: "Una llamada de 30 minutos y, después, un informe por escrito. Veremos qué está frenando a tu equipo y decidiremos por dónde empezar.",
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
};

export default es;
