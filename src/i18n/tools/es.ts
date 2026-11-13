
import type { ToolsDict } from "./en";

const tools: ToolsDict = {
  menu: "Herramientas",
  allTools: "Todas las herramientas",
  hub: {
    slug: "tools",
    metaTitle: "Calculadoras gratis de lead scoring y soporte | TascaLab",
    metaDescription:
      "Calculadoras gratis: crea y prueba un lead score, compara costes de agentes de IA de soporte, estima facturas de WhatsApp Business API y calcula plazos de SLA.",
    eyebrow: "Herramientas gratis",
    title: "Herramientas gratis para equipos de ventas y soporte",
    intro: "Calculadoras rápidas basadas en precios publicados y cuentas sencillas. Gratis y sin registro.",
    open: "Abrir herramienta",
  },
  common: {
    freeTool: "Herramienta gratis · sin registro",
    howItWorks: "Cómo funciona",
    faqTitle: "Preguntas frecuentes",
    sources: "Fuentes",
    estimate: "Solo son estimaciones, no un presupuesto.",
    max: "Máximo: {value}",
    min: "Mínimo: {value}",
    perMonth: "/mes",
    ctaTitle: "¿Quieres una cifra exacta para tu equipo?",
    ctaText: "Reserva un Health Check gratuito: una llamada de 30 minutos y, después, un informe por escrito con el paquete y el precio fijo que encajan.",
    ctaBook: "Reserva un Health Check gratuito",
    otherTools: "Otras herramientas gratis",
  },
  leadScore: {
    slug: "calculadora-lead-scoring",
    navLabel: "Calculadora de lead scoring",
    short: "Crea una puntuación de encaje y de engagement, pruébala con un lead y copia el modelo.",
    metaTitle: "Calculadora de lead scoring: encaje y engagement | TascaLab",
    metaDescription:
      "Calculadora de lead scoring gratis: crea un score de encaje y engagement con límites y umbrales de HubSpot, pruébalo con un lead y cópialo. Sin registro.",
    h1: "Calculadora de lead scoring",
    intro:
      "Crea una puntuación de leads por puntos tal como funciona la herramienta de lead scoring de HubSpot: criterios de encaje para quién es el lead, criterios de engagement para lo que hace, cada puntuación con un tope en su límite y dividida en High, Medium y Low. Pruébala con un lead, revisa el modelo en busca de errores y cópialo en tu CRM.",
    inputs: {
      criteriaTitle: "Tus criterios",
      criteriaHint:
        "Marca los criterios que se aplican a un lead que quieras probar. Los ejemplos son solo de relleno: sustituye cada etiqueta y cada valor en puntos por los tuyos.",
      label: "Criterio",
      score: "Puntuación",
      points: "Puntos",
      applies: "Se aplica al lead de prueba",
      remove: "Quitar {label}",
      add: "Añadir criterio",
      maxReached: "Hasta {n} criterios.",
      settingsTitle: "Ajustes de la puntuación",
      limit: "Límite de puntuación",
      limitOption: "{min} a {max}",
      high: "High desde",
      medium: "Medium desde",
      thresholdsHint:
        "Los límites son las opciones de HubSpot. Los umbrales por defecto siguen el propio ejemplo de HubSpot: 70–100 High, 40–69 Medium, por debajo de 40 Low.",
    },
    scores: { fit: "Encaje", engagement: "Engagement" },
    bands: { high: "High", medium: "Medium", low: "Low" },
    examples: [
      { label: "El sector encaja con tu perfil de cliente ideal", score: "fit", points: 30, applies: true },
      { label: "Tamaño de empresa dentro de tu rango objetivo", score: "fit", points: 25, applies: true },
      { label: "Su cargo es de decisor", score: "fit", points: 25, applies: false },
      { label: "Está en una región que no atiendes", score: "fit", points: -40, applies: false },
      { label: "Respondió a tu outreach mostrando interés", score: "engagement", points: 40, applies: true },
      { label: "Visitó la página de precios", score: "engagement", points: 20, applies: true },
      { label: "Abrió tus tres últimos correos", score: "engagement", points: 10, applies: false },
      { label: "Se dio de baja de tus correos", score: "engagement", points: -50, applies: false },
    ],
    results: {
      title: "Tu lead de prueba",
      combined: "Etiqueta combinada",
      combinedDesc: "Encaje {fit}, engagement {engagement}",
      range: "Rango posible: de {min} a {max}",
      checksTitle: "Antes de crearlo",
      allGood: "No se han encontrado problemas en este modelo.",
      noCriteria: "{score}: añade al menos un criterio.",
      order: "{score}: Medium debe ser menor que High.",
      unreachable: "{score}: ningún lead puede llegar a High. La puntuación máxima que puede obtener un lead es {max}.",
      capped: "{score}: los puntos positivos suman {total}, pero la puntuación se detiene en {limit}.",
      copy: "Copiar el modelo como tabla",
      copied: "Copiado",
      copyFailed: "No se ha podido copiar. Selecciona los criterios y cópialos a mano.",
      tableHeads: { score: "Puntuación", criterion: "Criterio", points: "Puntos", limit: "Límite", high: "High", medium: "Medium" },
    },
    sections: [
      {
        heading: "Cómo se calcula la puntuación",
        text: "Cada criterio suma o resta puntos cuando se aplica a un lead. Los criterios de encaje describen quién es el lead, como el sector, el tamaño de la empresa o el cargo; los criterios de engagement describen lo que hace, como respuestas, visitas o aperturas. Cada puntuación se detiene en su límite, igual que en la herramienta de lead scoring de HubSpot, y los umbrales convierten el número en High, Medium o Low. La etiqueta combinada sigue la convención de HubSpot: la letra es la banda de encaje (A alta, C baja) y el número, la banda de engagement (1 alta, 3 baja), así que un lead con poco encaje pero mucho engagement es C1.",
      },
      {
        heading: "Configurarlo en HubSpot",
        text: "La herramienta de lead scoring de HubSpot requiere Marketing Hub o Sales Hub Professional o Enterprise. Los límites de puntuación van de -100 a 100 hasta de -10.000 a 10.000, con 100 como máximo por defecto. Dentro de una puntuación puedes añadir grupos con sus propios límites, y todos los límites de grupo cuentan para el límite de la puntuación. Para el engagement, el decaimiento de la puntuación puede reducir los puntos cada 1, 3, 6 o 12 meses, contando cada mes como 30 días.",
      },
      {
        heading: "Configurarlo en Attio",
        text: "Attio no tiene una herramienta de scoring dedicada. En los planes Pro, Enterprise y Ultra, un atributo de fórmula puede sumar puntos con condiciones if(), usando el operador ?? para tratar los campos vacíos como 0. Una fórmula que devuelve un número se convierte en un atributo de número, se recalcula automáticamente cuando cambian los campos que usa y no consume créditos del espacio de trabajo. En Free y Plus, guarda la puntuación en un atributo de número que rellene un workflow o la API.",
      },
      {
        heading: "Cuándo no necesitas una puntuación",
        text: "Si tu equipo lee cada lead nuevo el mismo día, una puntuación aporta poco. Empieza a compensar cuando los leads llegan más rápido de lo que nadie puede revisarlos, o cuando las señales que más importan, como una respuesta con interés o una visita a tu página de precios, están en herramientas que tu CRM no ve por sí solo.",
      },
    ],
    faqs: [
      {
        q: "¿Los puntos de ejemplo son una recomendación?",
        a: "No. Son valores de relleno que muestran cómo funcionan los cálculos. Sustituye cada criterio y cada valor en puntos por los tuyos. Los únicos valores por defecto que vienen de un proveedor son los límites de puntuación de HubSpot y sus umbrales de ejemplo.",
      },
      {
        q: "¿Qué significan A1 y C3?",
        a: "Son las etiquetas de HubSpot para las puntuaciones combinadas. La letra es la banda de encaje, de A (encaje alto) a C (encaje bajo); el número es la banda de engagement, de 1 (engagement alto) a 3 (engagement bajo).",
      },
      {
        q: "¿Puede HubSpot crear la puntuación por mí con IA?",
        a: "Las puntuaciones de contactos creadas con IA de HubSpot requieren Marketing Hub Enterprise y al menos 50 contactos, 25 convertidos y 25 no convertidos, antes de que se pueda generar una puntuación.",
      },
      {
        q: "¿Attio tiene lead scoring?",
        a: "No tiene una herramienta de scoring dedicada. En Pro, Enterprise y Ultra, un atributo de fórmula puede calcular automáticamente una puntuación por puntos; en los demás planes, un workflow o la API escribe la puntuación en un atributo de número.",
      },
      {
        q: "¿Se guarda algo de lo que escribo?",
        a: "No. La puntuación se calcula en tu navegador y nada de lo que introduces se envía a ningún sitio.",
      },
    ],
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
      package: "Precio de {plan} (pago único)",
      priceHint: "{plan} cuesta desde {price}. Introduce el precio fijo de tu informe de Health Check si ya lo tienes.",
      platform: "Plataforma de automatización",
      platforms: {
        n8nCloud: "n8n Cloud Starter (20 €/mes, con facturación anual)",
        make: "Make Core (9 $/mes, con facturación anual)",
        selfHosted: "n8n autoalojado (coste del servidor no incluido)",
      },
      tokens: "Tokens de IA por conversación",
      inputTokens: "Entrada",
      outputTokens: "Salida",
      tokensHint: "Valores por defecto ilustrativos: ninguna fuente oficial publica una cifra típica. Sustitúyelos por las cifras reales de tu bot, sacadas del panel de uso de tu proveedor de IA.",
    },
    results: {
      title: "Coste estimado",
      vendor: "Proveedor",
      monthly: "Al mes",
      year: "12 meses",
      yourBuild: "Desarrollo de pago único",
      buildLine: "{price} en un solo pago + {monthly}/mes de costes de funcionamiento",
      payback: "Más barato que {vendor} a partir del mes {months}",
      neverCheaper: "Con este volumen, el desarrollo no sale más barato que ningún proveedor en 12 meses.",
      cheapest: "Proveedor más barato",
      currencyNote: "Los precios de los proveedores son precios oficiales en USD, convertidos al tipo del BCE del 16 de octubre de 2026.",
      pricesAsOf: "Precios oficiales de los proveedores a {date}.",
      empty: "Introduce tus conversaciones con IA al mes para comparar los costes.",
    },
    units: {
      fin: "0,99 $ por resultado; con otro helpdesk, un mínimo mensual de 49 $ que incluye 50 resultados",
      zendesk: "2,00 $ por resolución automatizada, pago por uso (1,50 $ con compromiso)",
      freddy: "49 $ por cada 100 sesiones",
      hubspot: "0,50 $ por conversación resuelta (50 HubSpot Credits); requiere un plan Professional o Enterprise",
      tidio: "Paquetes mensuales desde 39 $ por 50 hasta 700 $ por 1.000 conversaciones; por encima, Lyro Connect desde 0,50 $ por conversación",
      agentforce: "0,10 $ por acción (20 Flex Credits, 500 $ por cada 100.000)",
    },
    notIncluded:
      "No incluye: la suscripción a tu helpdesk, los volúmenes incluidos en los planes, los descuentos por volumen ni los impuestos. Fin también cobra como resultados los traspasos de Procedures (un Procedure que configuras para que termine en un traspaso), así que su coste real puede ser mayor. Zendesk está pasando las cuentas a niveles de resoluciones con precios que fija su equipo de ventas.",
    sections: [
      {
        heading: "Cómo se hace el cálculo",
        text: "Las conversaciones resueltas son tus conversaciones mensuales multiplicadas por el porcentaje que se resuelve sin intervención humana. Fin cobra por resultado sobre un mínimo mensual de 49 $; Zendesk y HubSpot, por resolución; Freddy, por paquetes de 100 sesiones; Tidio Lyro, en paquetes mensuales de conversaciones a las que responde, y Agentforce, por acción. El precio oficial de cada proveedor enlaza más abajo a su página de precios.",
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
        a: "Son los precios oficiales publicados en las páginas de precios oficiales de cada proveedor, comprobados en noviembre de 2026. Los proveedores cambian sus precios a menudo, así que consulta las páginas enlazadas antes de comprar.",
      },
      {
        q: "¿Qué cuenta como resolución?",
        a: "Cada proveedor lo define de una forma distinta. Fin cobra por resultado (una resolución o un Procedure que termina en un traspaso), Zendesk por resolución automatizada, HubSpot por conversación que no se traspasa a una persona en un plazo de 72 horas, Freddy por sesión y Tidio por conversación a la que responde Lyro. Lee la definición de cada proveedor antes de comparar.",
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
      "No incluye: los descuentos por tramos de volumen en los mensajes de utilidad y autenticación, los mensajes de Meta Business Agent, las comisiones de tu proveedor de WhatsApp ni los impuestos. Los mensajes dentro de una ventana gratuita de punto de entrada no se cobran.",
    sections: [
      {
        heading: "Qué cambió el 1 de octubre de 2026",
        text: "Los mensajes de servicio de formato libre, es decir, las respuestas que envías dentro de la ventana de atención al cliente de 24 horas, ya no son ilimitados ni gratuitos. Cada número de teléfono de empresa tiene 1.000 mensajes de servicio gratis al mes; a partir de ahí, Meta los cobra a la tarifa de utilidad del mercado. Las plantillas de utilidad enviadas dentro de la ventana ahora también se cobran.",
      },
      {
        heading: "Cómo factura Meta los mensajes",
        text: "Meta cobra por mensaje entregado. La tarifa depende de la categoría del mensaje (marketing, utilidad, autenticación o servicio) y del país del destinatario; los mensajes de servicio cuestan la misma tarifa oficial que los de utilidad y autenticación en ese mercado. Una quinta categoría, los mensajes de Meta Business Agent del propio agente de IA de Meta, se cobra, en cambio, por token. Meta publica tablas de tarifas en 16 monedas y solo puede cambiar los precios el primer día de un trimestre.",
      },
      {
        heading: "Qué deja fuera esta calculadora",
        text: "Los mensajes de utilidad y autenticación tienen tramos de volumen que reducen la tarifa con volúmenes altos; aquí no se tienen en cuenta. Los mensajes son gratuitos en la ventana gratuita de punto de entrada, que se abre cuando respondes en un plazo de 24 horas a alguien que te escribió desde un anuncio Click to WhatsApp en la app de WhatsApp para Android o iOS, y puede permanecer abierta hasta 7 días. Los mensajes de Meta Business Agent (2,00 $ por millón de tokens) y las comisiones de tu proveedor de WhatsApp no están incluidos.",
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
