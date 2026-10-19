import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    homeTitle: "Atención al cliente con IA: chatbots, bots de voz y tickets | TascaLab",
    homeDescription:
      "Chatbots y bots de voz con IA, enrutamiento de tickets e informes automáticos en tu Zendesk/Freshdesk/Jira. Freelance, precio fijo, auditoría gratis de 30 min.",
    noscriptHeading: "Automatización de la atención al cliente con IA: chatbots, bots de voz y enrutamiento de tickets",
    noscriptText:
      "TascaLab crea chatbots con IA, bots de voz, enrutamiento de tickets e informes automáticos sobre Zendesk, Freshdesk, Jira y Slack. Escribe a romanzakharenko.r@gmail.com para reservar una auditoría gratuita de 30 minutos.",
  },
  nav: {
    services: "Qué hago",
    fit: "¿Encajamos?",
    whyMe: "¿Por qué yo?",
    pricing: "Precios",
    reviews: "Reseñas",
    faq: "FAQ",
    resources: "Recursos",
    cta: "Reserva una auditoría gratuita",
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
    ctaBook: "Reserva una auditoría gratuita",
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
    intro: "Tarifas de proyecto de pago único. Conoces el rango de precio antes de empezar; el presupuesto final llega tras una auditoría gratuita.",
    oneTimeFee: "pago único",
    cta: "Empezar",
    // Same order as the plans in PricingSection; prices stay in USD.
    plans: [
      {
        name: "Chatbot básico",
        price: "350 – 450 USD",
        description:
          "Atiende consultas básicas de clientes y preguntas frecuentes en 1–2 canales. Perfecto para pequeñas empresas que empiezan con la automatización.",
        features: ["1–2 canales", "Responde preguntas frecuentes, recoge información básica y gestiona automáticamente las solicitudes habituales"],
      },
      {
        name: "Bot de voz",
        price: "1.100 – 1.600 USD",
        description: "Para llamadas telefónicas entrantes.",
        features: [
          "Agente de voz completo para atender llamadas entrantes con conversación natural, triaje y un traspaso limpio a tu equipo",
        ],
      },
      {
        name: "Chatbot estándar",
        price: "500 – 650 USD",
        description:
          "Chatbot avanzado con soporte multicanal, respuestas más inteligentes y mejor gestión de las interacciones con clientes a gran escala.",
        features: ["3–5 canales", "Gestiona conversaciones más complejas con una lógica más inteligente y traspasos más fluidos a tu equipo"],
      },
      {
        name: "Enrutamiento y categorización de tickets",
        price: "600 – 950 USD",
        description: "Clasificación y asignación automáticas de tickets.",
        features: [
          "Etiqueta, categoriza y enruta automáticamente los tickets al equipo adecuado, para que no se pierda nada y los tiempos de respuesta sigan siendo rápidos.",
        ],
      },
      {
        name: "Informes automáticos",
        price: "500 – 900 USD",
        description: "Informes programados que se envían automáticamente.",
        features: [
          "Informes automáticos con las métricas clave de tu negocio, enviados por correo electrónico o a Slack, para que estés al tanto sin trabajo manual.",
        ],
      },
      {
        name: "Automatización a medida",
        price: "1.200 – 2.000 USD",
        description:
          "Automatización totalmente personalizada, diseñada en torno a tus flujos de trabajo, tus herramientas y los requisitos específicos de tu negocio.",
        features: ["Automatización totalmente personalizada, diseñada en torno a tus flujos de trabajo, tus herramientas y los requisitos específicos de tu negocio"],
      },
    ],
    trust: ["Sin costes ocultos", "30 días de soporte tras la entrega", "Documentación básica incluida"],
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
        a: "Si tiene API o admite webhooks, casi seguro que sí. Coméntalo en la llamada de auditoría y te lo confirmo.",
      },
      {
        q: "¿Qué pasa exactamente en la auditoría gratuita?",
        a: "30 minutos. Revisamos tu configuración actual, dónde está la fricción y dónde la automatización marcaría una diferencia real. Te llevas 2–3 recomendaciones concretas, un alcance aproximado y un rango de precio. Sin presentaciones comerciales. Sin presión.",
      },
      {
        q: "¿Cuánto dura un proyecto típico?",
        a: "La mayoría de las implantaciones llevan 1–3 semanas, según la complejidad y lo rápido que nos pongamos de acuerdo en los requisitos. Te daré un plazo realista desde el principio, no uno optimista.",
      },
    ],
  },
  contact: {
    eyebrow: "Hablemos",
    title: "Reserva una auditoría gratuita de tu soporte de 30 minutos",
    intro: "Reserva una llamada de 30 minutos. Veremos qué está frenando a tu equipo y decidiremos por dónde empezar.",
    cta: "Reserva una auditoría gratuita",
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
    title: "Reserva una revisión gratuita de tu soporte",
    description: "Déjame tus datos y me pondré en contacto contigo para programar una llamada de 30 minutos. Sin compromiso ni discurso de ventas.",
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
    submit: "Reserva tu revisión gratuita",
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
      "Reserva una auditoría gratuita de 30 minutos. Te llevas 2–3 recomendaciones concretas, un alcance aproximado y un rango de precio, sin discurso de ventas.",
    ctaBook: "Reserva una auditoría gratuita",
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
