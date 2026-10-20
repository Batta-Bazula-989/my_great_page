
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Herramientas",
  allTools: "Todas las herramientas",
  hub: {
    slug: "tools",
    metaTitle: "Herramientas y calculadoras gratis para soporte | TascaLab",
    metaDescription:
      "Calculadoras gratis para equipos de soporte: compara costes de agentes de IA, estima tu factura de WhatsApp Business API y calcula SLA en horario laboral.",
    eyebrow: "Herramientas gratis",
    title: "Herramientas gratis para equipos de soporte",
    intro: "Calculadoras rápidas basadas en precios publicados y cuentas sencillas. Gratis y sin registro.",
    open: "Abrir herramienta",
  },
  common: {
    freeTool: "Herramienta gratis · sin registro",
    howItWorks: "Cómo funciona",
    faqTitle: "Preguntas frecuentes",
    sources: "Fuentes",
    estimate: "Solo son estimaciones, no un presupuesto.",
    perMonth: "/mes",
    ctaTitle: "¿Quieres una cifra exacta para tu equipo?",
    ctaText: "Reserva un Health Check gratuito: una llamada de 30 minutos y, después, un informe por escrito con el paquete y el precio fijo que encajan.",
    ctaBook: "Reserva un Health Check gratuito",
    otherTools: "Otras herramientas gratis",
  },
  aiAgent: {
    slug: "calculadora-coste-agente-ia-soporte",
    navLabel: "Coste de agentes de IA de soporte",
    short: "Compara agentes de IA que cobran por resolución con un desarrollo de pago único a tu volumen.",
    metaTitle: "Calculadora de coste de agentes de IA de soporte | TascaLab",
    metaDescription:
      "Compara el coste mensual de Fin, Zendesk AI, Freddy, HubSpot, Tidio Lyro y Agentforce a tu volumen con un agente de IA de soporte a medida de pago único.",
    h1: "Calculadora de coste de agentes de IA de soporte",
    intro:
      "La mayoría de los agentes de IA de soporte cobran por resolución, por conversación o por acción, así que la factura crece con tu volumen. Introduce tus cifras para comparar los precios oficiales de seis proveedores con un desarrollo de pago único.",
    inputs: {
      title: "Tu volumen",
      conversations: "Conversaciones con IA al mes",
      resolutionRate: "Resueltas sin intervención humana",
      actions: "Acciones de Agentforce por conversación",
      buildTitle: "Desarrollo de pago único",
      package: "Paquete",
      platform: "Plataforma de automatización",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mes, con facturación anual)",
        make: "Make Core (9 $/mes, con facturación anual)",
        selfHosted: "n8n autoalojado (coste del servidor no incluido)",
      },
      tokens: "Tokens de IA por conversación",
      inputTokens: "Entrada",
      outputTokens: "Salida",
      tokensHint: "Valores de ejemplo de una conversación de soporte publicada de 5 mensajes. Cámbialos para que se ajusten a tu bot.",
    },
    results: {
      title: "Coste mensual estimado",
      vendor: "Proveedor",
      monthly: "Al mes",
      year: "12 meses",
      yourBuild: "Desarrollo de pago único",
      buildLine: "{price} en un solo pago + {monthly}/mes de costes de funcionamiento",
      payback: "Más barato que {vendor} a partir del mes {months}",
      neverCheaper: "Con este volumen, el desarrollo no sale más barato que ningún proveedor en 12 meses.",
      cheapest: "El más bajo",
      currencyNote: "Los precios de los proveedores son precios oficiales en USD, convertidos al tipo del BCE del 16 de octubre de 2026.",
    },
    units: {
      fin: "0,99 $ por resultado; mínimo 50 al mes con otro helpdesk",
      zendesk: "2,00 $ por resolución automatizada, pago por uso",
      freddy: "49 $ por cada 100 sesiones",
      hubspot: "0,50 $ por conversación resuelta; requiere un plan Professional o Enterprise",
      tidio: "0,50 $ por conversación a la que responde Lyro",
      agentforce: "0,10 $ por acción (20 Flex Credits)",
    },
    notIncluded:
      "No incluye: la suscripción a tu helpdesk, los volúmenes incluidos en los planes, los descuentos por volumen ni los impuestos. Fin también cobra como resultados algunos traspasos y enrutamientos, así que su coste real puede ser mayor.",
    sections: [
      {
        heading: "Cómo se hace el cálculo",
        text: "Las conversaciones resueltas son tus conversaciones mensuales multiplicadas por el porcentaje que se resuelve sin intervención humana. Fin, Zendesk y HubSpot cobran por resolución o por resultado; Freddy, por paquetes de 100 sesiones; Tidio Lyro, por cada conversación a la que responde, y Agentforce, por acción. El precio oficial de cada proveedor enlaza más abajo a su página de precios.",
      },
      {
        heading: "Por qué crecen las facturas por resolución",
        text: "Cuando un proveedor cobra por resolución, cada conversación adicional que resuelve el agente suma a la factura. Un desarrollo de pago único no tiene tarifa por resolución: pagas directamente al proveedor de IA por los tokens y a la plataforma de automatización por su plan.",
      },
      {
        heading: "Cuánto cuesta mantener en marcha un desarrollo de pago único",
        text: "Tu proveedor de IA factura el uso de IA por token. Esta calculadora usa los precios oficiales de Claude Haiku 5.5 para prompts de hasta 100.000 tokens: 0,10 $ por millón de tokens de entrada y 0,50 $ por millón de tokens de salida. Suma la plataforma de automatización: n8n autoalojado (software gratuito; el servidor lo pagas tú), n8n Cloud desde 20 €/mes o Make desde 9 $/mes, ambos con facturación anual.",
      },
    ],
    faqs: [
      {
        q: "¿Están actualizados estos precios?",
        a: "Son los precios oficiales publicados en la página de precios de cada proveedor en octubre de 2026. Los proveedores cambian sus precios a menudo, así que consulta las páginas enlazadas antes de comprar.",
      },
      {
        q: "¿Qué cuenta como resolución?",
        a: "Cada proveedor lo define de una forma distinta. Fin cobra por resultado, Zendesk por resolución automatizada, HubSpot por conversación resuelta y Freddy por sesión. Lee la definición de cada proveedor antes de comparar.",
      },
      {
        q: "¿Por qué se muestran los precios en mi moneda?",
        a: "Los proveedores publican estos precios en dólares estadounidenses. Fuera de la versión de esta página para EE. UU., se convierten al tipo de referencia del Banco Central Europeo del 16 de octubre de 2026.",
      },
      {
        q: "¿Un desarrollo de pago único sale siempre más barato?",
        a: "No. Con volúmenes bajos, un agente que cobra por resolución puede costar menos. La calculadora muestra si un desarrollo de pago único llega a ser más barato con tu volumen, y a partir de cuándo.",
      },
    ],
  },
  whatsapp: {
    slug: "calculadora-coste-whatsapp-business",
    navLabel: "Coste de WhatsApp Business",
    short: "Estima tu factura mensual de la API de WhatsApp, incluido el nuevo tramo gratuito de mensajes de servicio.",
    metaTitle: "Coste de WhatsApp Business API: calculadora 2026 | TascaLab",
    metaDescription:
      "Estima tu factura mensual de la API de WhatsApp con el precio por mensaje de Meta y 1.000 mensajes de servicio gratis por número desde el 1 de octubre de 2026.",
    h1: "Calculadora de coste de WhatsApp Business API",
    intro:
      "Desde el 1 de octubre de 2026, Meta cobra los mensajes de servicio de WhatsApp que superan los 1.000 gratuitos por número de empresa al mes, a la tarifa de utilidad del mercado. Introduce tus volúmenes y las tarifas de la tabla de tarifas de Meta para el país de tus clientes.",
    inputs: {
      volumeTitle: "Mensajes al mes",
      numbers: "Números de teléfono de empresa",
      service: "Mensajes de servicio (respuestas de formato libre)",
      utility: "Plantillas de utilidad",
      marketing: "Plantillas de marketing",
      authentication: "Plantillas de autenticación",
      ratesTitle: "Tarifas por mensaje",
      ratesHint: "Copia las tarifas del país de tus clientes de la tabla de tarifas de Meta, en tu moneda de facturación.",
      rateCard: "Abrir las tablas de tarifas de Meta",
      utilityRate: "Tarifa de utilidad (también se aplica a los mensajes de servicio)",
      marketingRate: "Tarifa de marketing",
      authenticationRate: "Tarifa de autenticación",
    },
    results: {
      title: "Coste mensual estimado",
      freeService: "Mensajes de servicio gratuitos usados",
      billableService: "Mensajes de servicio facturables",
      service: "Mensajes de servicio",
      utility: "Plantillas de utilidad",
      marketing: "Plantillas de marketing",
      authentication: "Plantillas de autenticación",
      total: "Total al mes",
      enterRates: "Introduce tus tarifas para ver el coste.",
    },
    notIncluded:
      "No incluye: los descuentos por tramos de volumen en los mensajes de utilidad y autenticación, las comisiones de tu proveedor de WhatsApp ni los impuestos. Los mensajes dentro de una ventana gratuita de punto de entrada no se cobran.",
    sections: [
      {
        heading: "Qué cambió el 1 de octubre de 2026",
        text: "Los mensajes de servicio de formato libre, es decir, las respuestas que envías dentro de la ventana de atención al cliente de 24 horas, ya no son ilimitados ni gratuitos. Cada número de teléfono de empresa tiene 1.000 mensajes de servicio gratis al mes; a partir de ahí, Meta los cobra a la tarifa de utilidad del mercado. Las plantillas de utilidad enviadas dentro de la ventana ahora también se cobran.",
      },
      {
        heading: "Cómo factura Meta los mensajes",
        text: "Meta cobra por mensaje entregado. La tarifa depende de la categoría del mensaje (marketing, utilidad, autenticación o servicio) y del país del destinatario. Meta publica tablas de tarifas en varias monedas y solo puede cambiar los precios el primer día de un trimestre.",
      },
      {
        heading: "Qué deja fuera esta calculadora",
        text: "Los mensajes de utilidad y autenticación tienen tramos de volumen que reducen la tarifa con volúmenes altos; aquí no se tienen en cuenta. Los mensajes enviados en la ventana gratuita de punto de entrada de 72 horas tras un anuncio Click to WhatsApp o un botón de una página de Facebook son gratuitos. Tu proveedor de WhatsApp puede añadir sus propias comisiones.",
      },
    ],
    faqs: [
      {
        q: "¿Siguen siendo gratis los mensajes de servicio de WhatsApp?",
        a: "Desde el 1 de octubre de 2026, cada número de teléfono de empresa tiene 1.000 mensajes de servicio gratis al mes. Meta cobra a partir del mensaje 1.001 a la tarifa de utilidad del mercado.",
      },
      {
        q: "¿Por qué tengo que introducir las tarifas?",
        a: "Las tarifas dependen del país de tus clientes y de tu moneda de facturación. Meta las publica en sus tablas de tarifas; copia las que se te aplican para obtener una estimación exacta.",
      },
      {
        q: "¿Cada cuánto cambia Meta los precios de WhatsApp?",
        a: "Meta indica que solo puede actualizar los precios el primer día de cada trimestre, es decir, hasta cuatro veces al año.",
      },
      {
        q: "¿Incluye las comisiones de mi proveedor?",
        a: "No. Solo cubre los cargos por mensaje de Meta. Tu proveedor de soluciones de WhatsApp Business puede cobrar sus propias comisiones.",
      },
    ],
  },
  sla: {
    slug: "calculadora-sla",
    navLabel: "Calculadora de SLA",
    short: "Calcula vencimientos de SLA y tiempos de primera respuesta en horario laboral.",
    metaTitle: "Calculadora de SLA con horario laboral y festivos | TascaLab",
    metaDescription:
      "Calcula cuándo vence un SLA de soporte o cuánto tiempo laborable tardó una primera respuesta, contando solo tu horario, tus días laborables y tus festivos.",
    h1: "Calculadora de SLA con horario laboral",
    intro:
      "Los objetivos de SLA suelen contarse en horas laborables, así que un objetivo de 4 horas fijado el viernes por la tarde puede vencer el lunes. Introduce una hora de inicio y tu horario para ver cuándo vence, o mide el tiempo laborable entre dos momentos.",
    modes: { due: "¿Cuándo vence?", elapsed: "¿Cuánto se tardó?" },
    inputs: {
      received: "Ticket recibido",
      target: "Objetivo de SLA",
      hours: "horas",
      minutes: "minutos",
      replied: "Primera respuesta enviada",
      scheduleTitle: "Horario laboral",
      opens: "Apertura",
      closes: "Cierre",
      days: "Días laborables",
      dayNames: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      holidays: "Festivos",
      addHoliday: "Añadir",
      removeHoliday: "Quitar {date}",
      noHolidays: "No has añadido festivos.",
    },
    results: {
      dueAt: "Vence",
      calendarTime: "Tiempo natural hasta el vencimiento",
      businessTime: "Tiempo laborable",
      elapsedCalendar: "Tiempo natural",
      withinTarget: "Dentro del objetivo de {target}",
      overTarget: "Supera el objetivo de {target}",
      invalid: "Revisa las horas y el horario laboral.",
      duration: "{h} h {m} min",
      days: "{d} d {h} h {m} min",
    },
    sections: [
      {
        heading: "Cómo se cuentan los SLA en horario laboral",
        text: "El reloj del SLA solo corre durante el horario laboral de los días laborables. Si un ticket llega fuera de ese horario, el reloj empieza a correr cuando abre el siguiente día laborable. Los festivos que añadas cuentan como días no laborables.",
      },
      {
        heading: "Zonas horarias",
        text: "Todas las horas se tratan como una sola zona horaria: la de tu horario laboral. Introduce las horas de los tickets en esa misma zona horaria.",
      },
    ],
    faqs: [
      {
        q: "¿La calculadora se salta los fines de semana?",
        a: "Sí. Solo cuentan los días laborables que marques. El sábado y el domingo están desmarcados por defecto.",
      },
      {
        q: "¿Cómo gestiono los festivos?",
        a: "Añade la fecha de cada festivo. La calculadora lo trata como un día no laborable.",
      },
      {
        q: "¿Un día laborable equivale a ocho horas?",
        a: "Solo si tu horario laboral dura ocho horas. Introduce tus horas de apertura y de cierre y, después, fija el objetivo en horas.",
      },
    ],
  },
};

export default tools;
