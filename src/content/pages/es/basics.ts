import type { TranslatedPage } from "../../types";

export const basicsPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. What is customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "what-is-customer-support-automation",
    slug: "que-es-automatizacion-atencion-cliente",
    category: "basics",
    navLabel: "Qué es automatizar el soporte",
    primaryKeyword: "qué es la automatización de la atención al cliente",
    title: "¿Qué es la automatización de la atención al cliente?",
    description:
      "Qué es automatizar la atención al cliente: bots, enrutamiento, macros, autorrespuestas, SLA e informes, qué dejar en manos humanas y cómo encaja en tu helpdesk.",
    h1: "¿Qué es la automatización de la atención al cliente?",
    intro:
      "La automatización de la atención al cliente consiste en usar reglas, bots e integraciones para resolver el trabajo de soporte repetitivo, como responder preguntas frecuentes, clasificar tickets, enviar acuses de recibo y controlar plazos, sin que un agente tenga que hacer cada paso a mano. La mayor parte funciona dentro del helpdesk que ya usas, ampliado con APIs y webhooks. El objetivo es dar a tus agentes más tiempo para las conversaciones que requieren criterio.",
    keyFacts: [
      "Los triggers de Zendesk se ejecutan inmediatamente después de crear o actualizar un ticket; las automatizaciones de Zendesk se basan en el tiempo y se ejecutan una vez cada hora.",
      "Las macros de Zendesk no tienen condiciones: es un agente quien decide cuándo aplicar una.",
      "Las automatizaciones de Zendesk, Freshdesk y Jira pueden enviar solicitudes HTTP a otros sistemas desde sus reglas.",
      "Según las indicaciones de Zendesk, las consultas complejas, urgentes o delicadas pueden necesitar un traspaso a un agente humano.",
    ],
    sections: [
      {
        heading: "Qué es la automatización de la atención al cliente",
        blocks: [
          {
            type: "p",
            text: "Toda automatización de soporte tiene las mismas tres partes: algo que la pone en marcha (un evento, como un ticket nuevo, o el paso del tiempo), condiciones que deciden si se aplica y acciones que ejecuta. Los helpdesks exponen este modelo directamente. Zendesk las llama reglas de negocio: los triggers se ejecutan inmediatamente después de crear o actualizar un ticket, mientras que las automatizaciones se basan en el tiempo y se ejecutan una vez cada hora sobre los tickets que no están cerrados. Zendesk señala que la diferencia entre ambos no está en qué acciones pueden realizar, sino en qué condiciones los activan.",
          },
          {
            type: "p",
            text: "La automatización va de un extremo a otro. En un extremo, actúa antes de que una persona vea el ticket: un bot responde la pregunta, o una regla fija la prioridad y asigna un grupo. En el otro, ayuda al agente: una respuesta guardada rellena una contestación habitual, o una barra lateral trae el pedido del cliente desde otro sistema. Ambas cuentan, y la mayoría de los equipos necesitan las dos.",
          },
        ],
      },
      {
        heading: "Los principales tipos de automatización del soporte",
        blocks: [
          {
            type: "table",
            caption: "Tipos habituales de automatización de la atención al cliente",
            head: ["Tipo", "Qué hace", "Ejemplo en un helpdesk"],
            rows: [
              [
                "Autoservicio y bots",
                "Responde preguntas frecuentes por chat, mensajería o correo sin un agente",
                "Los agentes de IA de Zendesk responden preguntas con contenido de tus fuentes de conocimiento y pueden escalar a una persona",
              ],
              [
                "Enrutamiento y triaje",
                "Clasifica los tickets nuevos y los envía al grupo o agente adecuado",
                "Los triggers de Zendesk pueden añadir habilidades a los tickets al crearse o actualizarse; el enrutamiento omnicanal reparte el trabajo según la disponibilidad y la capacidad de los agentes",
              ],
              [
                "Macros y respuestas predefinidas",
                "Aplica una respuesta guardada y actualizaciones del ticket en una sola acción",
                "Una macro de Zendesk puede añadir texto de comentario, actualizar campos, añadir o quitar etiquetas y cambiar el agente asignado",
              ],
              [
                "Respuestas automáticas",
                "Confirma la recepción y fija expectativas de inmediato",
                "Un trigger basado en eventos que envía al solicitante un acuse de recibo por correo cuando se crea un ticket",
              ],
              [
                "Temporizadores de SLA y escalados",
                "Controla los plazos de respuesta y resolución y avisa antes de un incumplimiento",
                "Una política de SLA más una regla basada en el tiempo que avisa a un jefe de equipo antes de que se incumpla un objetivo",
              ],
              [
                "Informes",
                "Recoge métricas de soporte y las entrega de forma programada",
                "Un resumen semanal del volumen de tickets, el tiempo de primera respuesta y el CSAT enviado por correo o a Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Las macros son un caso límite útil. Zendesk indica que las macros no tienen condiciones: nada evalúa un ticket para decidir si se aplica una macro, así que es el agente quien la elige. Eso convierte las respuestas guardadas en el punto de partida de menor riesgo, porque sigue siendo una persona quien decide cada vez.",
          },
          {
            type: "p",
            text: "El enrutamiento suele ser donde la automatización da resultados antes, porque afecta a todos los tickets. El triaje inteligente de Zendesk, por ejemplo, clasifica los tickets nuevos por tema, sentimiento e idioma, y puede enrutarlos mediante el enrutamiento omnicanal, el enrutamiento basado en habilidades o triggers. Las configuraciones más sencillas usan reglas por palabras clave o por campos de formulario para fijar el grupo y la prioridad.",
          },
        ],
      },
      {
        heading: "Qué debe seguir en manos humanas",
        blocks: [
          {
            type: "p",
            text: "La automatización funciona bien con el trabajo repetible y bien definido. Funciona mal con el criterio, la empatía y las excepciones. Según las indicaciones de Zendesk para los agentes de IA, a veces una consulta tiene que pasar a un agente humano cuando es compleja, urgente o delicada, y recomienda definir esas vías de escalado antes del lanzamiento. En la práctica, deja esto en manos de personas:",
          },
          {
            type: "ul",
            items: [
              "Quejas, cancelaciones y conversaciones con carga emocional",
              "Disputas de facturación, reembolsos fuera de la política y otras excepciones que necesitan a alguien con autoridad",
              "Seguridad de la cuenta y verificaciones de identidad en las que un error sale caro",
              "Preguntas que el bot no sabe clasificar o que ya no ha conseguido responder",
              "Cuentas de alto valor o en riesgo que has decidido atender personalmente",
            ],
          },
          {
            type: "p",
            text: "Automatices lo que automatices, mantén una forma visible de llegar a una persona y transmite el historial de la conversación, para que el cliente no tenga que repetirse. Nuestra guía sobre el traspaso de chatbot a humano explica cómo hacerlo.",
          },
        ],
      },
      {
        heading: "Cómo encaja la automatización en tu helpdesk",
        blocks: [
          {
            type: "p",
            text: "Rara vez necesitas sustituir tu helpdesk para automatizarlo. Los helpdesks modernos pueden llamar a otros sistemas desde sus reglas, y otros sistemas pueden actualizar tickets a través de la API del helpdesk. Así se construyen las automatizaciones a medida:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: creas un webhook en Admin Center y luego lo vinculas a un trigger o a una automatización con la acción 'Notify webhook'. El cuerpo de la solicitud puede ser JSON, XML o form-encoded, y los marcadores insertan datos del ticket.",
              "Freshdesk: las reglas de automatización que se ejecutan al crear o actualizar tickets pueden usar la acción 'Trigger webhook' con GET, POST, PUT, PATCH o DELETE y marcadores como {{ticket.id}}. Los webhooks fallidos se reintentan cada 30 minutos, hasta 48 llamadas.",
              "Jira: la acción de automatización 'Send web request' llama a otro sistema cuando se ejecuta una regla y puede esperar la respuesta para que los pasos posteriores usen los datos devueltos.",
            ],
          },
          {
            type: "p",
            text: "Un flujo a medida típico es así:",
          },
          {
            type: "ol",
            items: [
              "Una regla del helpdesk se activa con un ticket nuevo o actualizado y envía un webhook.",
              "Una herramienta de flujos de trabajo como Make o n8n, o un pequeño servicio, lo recibe y busca datos en otro sitio: un sistema de pedidos, un CRM o un modelo de lenguaje.",
              "El flujo escribe el resultado de vuelta a través de la API del helpdesk como una etiqueta, el valor de un campo, una nota privada o una asignación.",
              "Los agentes ven el resultado dentro del ticket, y a partir de ahí se encargan las reglas propias del helpdesk.",
            ],
          },
        ],
      },
      {
        heading: "Por dónde empezar",
        blocks: [
          {
            type: "ol",
            items: [
              "Haz una lista de los tipos de solicitud más frecuentes del último mes y marca los que siguen siempre los mismos pasos.",
              "Arregla primero el enrutamiento y las respuestas automáticas. Afectan a todos los tickets y son fáciles de verificar.",
              "Convierte las respuestas repetidas en macros o respuestas predefinidas antes de meterlas en un bot.",
              "Añade un bot para las preguntas más habituales y de bajo riesgo, con un traspaso claro a una persona.",
              "Mide el tiempo de primera respuesta, el tiempo de resolución y el CSAT antes y después de cada cambio, para saber qué ha ayudado de verdad.",
            ],
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab es un estudio unipersonal dirigido por Roman Zakharenko que crea automatizaciones de soporte sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira y Slack, con APIs, webhooks y Make o n8n. Entre los precios de proyecto puntual están Ticket Routing & Categorization (600–950 USD), un Starter Chat Bot (350–450 USD) y Automated Reports (500–900 USD). La mayoría de las implementaciones llevan 1–3 semanas e incluyen documentación básica, 30 días de soporte tras el lanzamiento y ningún coste oculto. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿La automatización de la atención al cliente es lo mismo que un chatbot?",
        a: "No. Un chatbot es solo un tipo. Las reglas de enrutamiento, las macros, las respuestas automáticas, los temporizadores de SLA y los informes programados también son automatización del soporte, y muchos equipos empiezan por ellos porque se aplican a todos los tickets.",
      },
      {
        q: "¿Qué diferencia hay entre un trigger y una automatización en Zendesk?",
        a: "Los triggers se basan en eventos y se ejecutan inmediatamente después de crear o actualizar un ticket. Las automatizaciones se basan en el tiempo y se ejecutan una vez cada hora, así que encajan con acciones como un recordatorio tras un número determinado de horas.",
      },
      {
        q: "¿Tengo que cambiar de helpdesk para automatizar el soporte?",
        a: "Normalmente no. Las automatizaciones de Zendesk, Freshdesk y Jira pueden enviar solicitudes HTTP salientes desde sus reglas, así que puedes conectar otros sistemas al helpdesk que ya usas.",
      },
      {
        q: "¿Qué no se debería automatizar en la atención al cliente?",
        a: "Las conversaciones complejas, urgentes o delicadas, que según las indicaciones de Zendesk pueden necesitar un agente humano, además de las disputas y las excepciones a la política que requieren que decida alguien con autoridad.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — About AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/6970583409690-About-AI-agents",
      },
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["ticket-routing-automation", "ai-chatbot-for-customer-support", "customer-support-metrics"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Chatbot to human handoff
  // ---------------------------------------------------------------------------
  {
    key: "chatbot-to-human-handoff",
    slug: "traspaso-chatbot-a-agente-humano",
    category: "basics",
    navLabel: "Traspaso de chatbot a humano",
    primaryKeyword: "traspaso de chatbot a agente humano",
    title: "Traspaso de chatbot a humano: desencadenantes y contexto",
    description:
      "Traspaso de chatbot a humano: cuándo escalar, qué contexto pasar al agente, qué hacer fuera de horario y cómo lo hacen Zendesk, Freshdesk y Messenger.",
    h1: "Traspaso de chatbot a humano: cómo escalar sin perder al cliente",
    intro:
      "El traspaso de chatbot a humano es el momento en que un bot deja de gestionar una conversación y la transfiere, con su historial y los datos que haya recogido, a un agente humano o a una cola. Un buen traspaso se activa en el momento adecuado, lleva el contexto para que el cliente no tenga que repetirse y sigue funcionando cuando no hay nadie conectado. Esta guía cubre los desencadenantes, el contexto que hay que pasar y cómo lo implementan Zendesk, Freshdesk y Messenger.",
    keyFacts: [
      "Zendesk indica que un agente de IA puede tener que transferir una consulta a una persona cuando es compleja, urgente o delicada.",
      "Los AI Agents de Freshdesk pueden transferir automáticamente cuando el cliente usa frases desencadenantes que tú defines, como pedir hablar con un agente.",
      "En Dialogflow CX, si ningún intent alcanza el umbral de clasificación, se activa un evento no-match en lugar de una coincidencia.",
      "En Messenger, el handover protocol decide qué app es dueña de un hilo de conversación; Meta ha pasado Instagram a Conversation Routing.",
    ],
    sections: [
      {
        heading: "Qué es un traspaso de chatbot a humano",
        blocks: [
          {
            type: "p",
            text: "Un traspaso, también llamado escalado o transferencia, pasa la responsabilidad de una conversación de la automatización a una persona. Según el canal, el resultado es un chat en directo asignado a un agente, una conversación esperando en una cola o un ticket que un agente recoge más tarde. En los agentes de IA de Zendesk, esto se construye con bloques de escalado en el editor de diálogos, que definen cómo pasa una consulta a una persona cuando el agente de IA no puede resolverla.",
          },
          {
            type: "p",
            text: "Los traspasos pueden ser de dos tipos. En un traspaso síncrono, el cliente sigue en la misma conversación en directo y se une un agente. En un traspaso asíncrono, se crea un ticket para que un agente responda más tarde, que es la alternativa habitual cuando no hay nadie disponible. Zendesk documenta ambos, incluido un flujo de escalado asíncrono a ticket que permite a los clientes dejar un mensaje cuando tu equipo no está disponible.",
          },
        ],
      },
      {
        heading: "Cuándo debe el bot hacer el traspaso",
        blocks: [
          {
            type: "table",
            caption: "Desencadenantes habituales del traspaso de un chatbot",
            head: ["Desencadenante", "Cómo se manifiesta", "Cómo se detecta"],
            rows: [
              [
                "El cliente pide una persona",
                "Agente, hablar con una persona, esto no me ayuda",
                "Los AI Agents de Freshdesk transfieren automáticamente ante las frases desencadenantes que definas, como una petición de hablar con un agente",
              ],
              [
                "Baja confianza o sin coincidencia",
                "El bot no sabe qué quiere el cliente",
                "Dialogflow CX activa un evento no-match cuando ningún intent alcanza el umbral de clasificación; usa esa alternativa para ofrecer una persona",
              ],
              [
                "Tema delicado o urgente",
                "Quejas, pagos fallidos, seguridad, cuestiones legales o de protección",
                "Zendesk cita las consultas complejas, urgentes o delicadas como motivos para transferir; entre las frases desencadenantes de ejemplo de Freshdesk está el aviso de un pago fallido",
              ],
              [
                "Fallos repetidos",
                "El cliente reformula la misma pregunta o el bot entra en bucle",
                "Cuenta las respuestas de fallback en la sesión y escala tras un número fijado",
              ],
              [
                "Regla de negocio",
                "Cuenta VIP, pedido de importe alto, incidencia abierta",
                "Consulta los datos del cliente mediante una API antes de que responda el bot y envía a esos clientes directamente a una persona",
              ],
            ],
          },
          {
            type: "p",
            text: "La confianza es el desencadenante que los equipos dejan implícito con más frecuencia. En Dialogflow CX, el intent con mayor puntuación solo se devuelve como coincidencia si su puntuación de confianza es mayor o igual que el umbral de clasificación; si no, se invoca un evento no-match. Trata ese evento como una señal: haz una pregunta aclaratoria y, si vuelve a ocurrir, haz el traspaso.",
          },
          {
            type: "p",
            text: "Zendesk también aconseja ofrecer el escalado solo cuando el agente de IA no puede guiar al cliente hacia recursos de autoservicio. Así los agentes se reservan para problemas reales, pero no escondas la opción. Un cliente que pide expresamente una persona debería tenerla, o recibir una respuesta clara sobre cuándo la tendrá.",
          },
        ],
      },
      {
        heading: "Pasa el contexto, no solo al cliente",
        blocks: [
          {
            type: "p",
            text: "Un traspaso que pierde la conversación obliga al cliente a empezar de cero. El paso heredado 'Transfer to agent' de Zendesk, por ejemplo, crea un ticket que incluye el historial de la conversación del cliente, que el cliente no ve, y puede añadir etiquetas a ese ticket para el enrutamiento. Los AI Agents de Freshdesk pueden recoger datos como un ID de cliente, un número de referencia o un número de pedido antes de la transferencia, cuando la recogida de propiedades está activada tanto en el comportamiento de la conversación como en la configuración del traspaso.",
          },
          {
            type: "p",
            text: "Como mínimo, el agente debería recibir:",
          },
          {
            type: "ul",
            items: [
              "La transcripción completa, incluido lo que el bot ya ha sugerido",
              "El motivo del traspaso: petición del cliente, sin coincidencia, tema delicado o regla de negocio",
              "Datos de identidad como nombre, correo o ID de cuenta, y si se han verificado",
              "Los campos estructurados que recogió el bot, como el número de pedido o el producto",
              "Etiquetas o una categoría, para que las reglas de enrutamiento envíen la conversación al grupo correcto",
            ],
          },
          {
            type: "p",
            text: "Fija las expectativas del cliente en el mismo mensaje: dile que una persona se hace cargo y, aproximadamente, cuándo tendrá respuesta.",
          },
        ],
      },
      {
        heading: "Cómo implementan el traspaso Zendesk, Freshdesk y Messenger",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: los bloques de escalado del editor de diálogos del agente de IA deciden adónde va una conversación cuando el agente de IA no puede resolverla, por ejemplo reenviándola a un agente. Un bloque de disponibilidad puede comprobar el horario laboral o la disponibilidad de los agentes antes de que se ejecute el escalado.",
              "Freshdesk: en la configuración de traspaso del AI Agent, activas 'Transfer conversation', defines las frases desencadenantes que deben provocar una transferencia automática y puedes hacer que el AI Agent recoja primero los datos del cliente.",
              "Messenger: cuando más de una app gestiona los mensajes de una página de Facebook, como tu bot y una bandeja de chat en directo, el handover protocol de Meta decide qué app es dueña del hilo. El webhook messaging_handovers informa de los eventos pass thread control, take thread control, request thread control y app role. Un evento pass_thread_control incluye los ID de la app propietaria anterior y de la nueva, además de una cadena metadata fijada en la solicitud a la API, que es un buen sitio para indicar el motivo del traspaso.",
              "Instagram: el registro de cambios de Meta indica que ya no admite el handover protocol para Instagram y que ha migrado a todas las empresas a Conversation Routing, que permite definir qué partners controlan las conversaciones con clientes en cada momento. Meta describe Conversation Routing como retrocompatible con la mayoría de las APIs del handover protocol.",
            ],
          },
        ],
      },
      {
        heading: "Qué hacer fuera del horario de atención",
        blocks: [
          {
            type: "p",
            text: "Un bot que promete una persona cuando no hay nadie conectado es peor que no tener traspaso. Comprueba primero la disponibilidad y luego elige una alternativa:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: un bloque de disponibilidad comprueba el horario laboral o la disponibilidad de los agentes. En un canal síncrono como la mensajería, Zendesk sugiere escalar por correo electrónico cuando se está fuera del horario de los agentes, y su flujo de escalado asíncrono a ticket permite a los clientes dejar un mensaje para que una persona haga el seguimiento más tarde.",
              "Freshdesk: la opción 'Transfer outside business hours' te permite elegir un horario laboral, transferir la conversación a un agente o a un grupo y redactar el mensaje que ve el cliente.",
              "Cualquier plataforma: crea un ticket con la transcripción, indica cuándo vuelve el equipo y deja que el bot siga respondiendo mientras tanto preguntas de autoservicio.",
            ],
          },
          {
            type: "note",
            text: "Prueba por separado el camino fuera de horario. Es la rama con más probabilidades de romperse sin que nadie lo note, porque no hay nadie del equipo conectado cuando se ejecuta.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea chatbots con traspaso a tu helpdesk actual o a Slack: un Starter Chat Bot (350–450 USD) o un Standard Chat Bot (500–650 USD), conectados mediante APIs, webhooks y Make o n8n. Todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento, sin costes ocultos, y la mayoría de las implementaciones llevan 1–3 semanas. Una llamada de auditoría gratuita de 30 minutos es un buen punto de partida para definir tus desencadenantes de traspaso.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuándo debe un chatbot pasar la conversación a una persona?",
        a: "Cuando el cliente pide una persona, cuando el bot no puede identificar la solicitud con confianza y cuando el tema es complejo, urgente o delicado, que es como Zendesk describe las consultas que necesitan un agente humano.",
      },
      {
        q: "¿Cómo evito que los clientes tengan que repetirse tras un traspaso?",
        a: "Pasa al ticket o al chat la transcripción, el motivo del traspaso y los datos que haya recogido el bot. El paso de transferencia heredado de Zendesk añade el historial de la conversación al ticket, y los AI Agents de Freshdesk pueden recoger datos como un número de pedido antes de la transferencia.",
      },
      {
        q: "¿Qué es el handover protocol de Messenger?",
        a: "Es el mecanismo de Meta para decidir qué app es dueña de un hilo de conversación de Messenger cuando varias apps atienden la misma página. Las apps pasan, toman y solicitan el control del hilo, y el webhook messaging_handovers informa de esos eventos.",
      },
      {
        q: "¿Qué pasa si un cliente pide una persona fuera del horario de atención?",
        a: "Comprueba la disponibilidad antes de escalar. Tanto Zendesk como Freshdesk permiten gestionar de otra forma los traspasos fuera de horario, por ejemplo creando un ticket para hacer el seguimiento más tarde y mostrando un mensaje sobre cuándo está disponible el equipo.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Configuring escalation strategies and flows for AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756604186-Configuring-escalation-strategies-and-flows-for-AI-agents",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Configuring asynchronous ticket escalations for messaging AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11285019603098-Workflow-recipe-Configuring-asynchronous-ticket-escalations-for-messaging-AI-agents",
      },
      {
        label: "Zendesk Help Center — Understanding the step types for AI agent answers (Legacy)",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836323738-Understanding-the-step-types-for-AI-agent-answers-Legacy",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Support — Configure conversation behaviour for AI agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011713-configure-conversation-behaviour-for-ai-agent",
      },
      {
        label: "Meta for Developers — messaging_handovers webhook event reference",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks/webhook-events/messaging_handovers",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Google Cloud — Dialogflow CX intents",
        url: "https://docs.cloud.google.com/dialogflow/cx/docs/concept/intent",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "facebook-messenger-bot-customer-service", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Customer support metrics
  // ---------------------------------------------------------------------------
  {
    key: "customer-support-metrics",
    slug: "metricas-atencion-al-cliente",
    category: "basics",
    navLabel: "Métricas de atención al cliente",
    primaryKeyword: "métricas de atención al cliente",
    title: "Métricas de atención al cliente: definiciones y fórmulas",
    description:
      "Métricas de atención al cliente: tiempo de primera respuesta, tiempo de resolución, FCR, reaperturas, CSAT, CES, NPS y backlog, y cómo se calcula cada una.",
    h1: "Métricas de atención al cliente: qué medir y cómo se calcula cada una",
    intro:
      "Las métricas de atención al cliente son las mediciones que muestran con qué rapidez, con qué calidad y con cuánta carga de trabajo resuelve tu equipo las solicitudes de los clientes. El conjunto básico abarca la velocidad (tiempo de primera respuesta y tiempo de resolución), la calidad (resolución en el primer contacto y reaperturas), la opinión del cliente (CSAT, CES y NPS) y la carga de trabajo (backlog). A continuación, cada una se define tal como la definen los proveedores de helpdesk y sus autores originales.",
    keyFacts: [
      "El tiempo de resolución completo de Zendesk va desde la creación del ticket hasta su resolución más reciente, así que los tickets reabiertos siguen sumando tiempo.",
      "Freshdesk solo cuenta un ticket para el FCR si el cliente no envió más mensajes después de su primer contacto.",
      "El NPS es el porcentaje de promotores (puntuaciones 9–10) menos el porcentaje de detractores (puntuaciones 0–6).",
      "Fred Reichheld presentó el NPS en Harvard Business Review en diciembre de 2003.",
      "La defensa de medir el esfuerzo del cliente se planteó en el artículo de HBR de julio de 2010 «Stop Trying to Delight Your Customers».",
    ],
    sections: [
      {
        heading: "Las métricas básicas de atención al cliente de un vistazo",
        blocks: [
          {
            type: "table",
            caption: "Métricas de atención al cliente y cómo se calculan",
            head: ["Métrica", "Qué mide", "Cómo se calcula"],
            rows: [
              [
                "Tiempo de primera respuesta (FRT)",
                "Cuánto esperan los clientes la primera respuesta",
                "Tiempo desde la creación del ticket hasta la primera respuesta de un agente, expresado como media o mediana de todos los tickets",
              ],
              [
                "Tiempo de resolución completo",
                "Cuánto se tarda en resolver definitivamente un ticket",
                "Tiempo desde la creación del ticket hasta su resolución más reciente (definición de Zendesk)",
              ],
              [
                "Tiempo medio de resolución",
                "Tiempo típico de resolución en muchos tickets",
                "Suma de los tiempos de resolución dividida entre el número de tickets resueltos en el periodo",
              ],
              [
                "Resolución en el primer contacto (FCR)",
                "Porcentaje de problemas resueltos sin que el cliente vuelva",
                "Tickets resueltos sin más mensajes del cliente después del primer contacto, divididos entre todos los tickets resueltos en el periodo (definición de Freshdesk)",
              ],
              [
                "Reaperturas",
                "Tickets que en realidad no estaban resueltos",
                "Número de tickets que pasan de 'Solved' de nuevo a 'Open' (Zendesk), a menudo expresado como porcentaje de los tickets resueltos",
              ],
              [
                "CSAT",
                "Satisfacción con una interacción concreta",
                "Tickets valorados como buenos divididos entre todos los tickets con valoración, en porcentaje (Zendesk Explore)",
              ],
              [
                "CES",
                "Cuánto esfuerzo ha tenido que hacer el cliente",
                "Una encuesta posterior a la interacción sobre la facilidad o el esfuerzo, medida como puntuación media o como porcentaje de respuestas de bajo esfuerzo",
              ],
              [
                "NPS",
                "Disposición a recomendar la empresa",
                "Porcentaje de promotores (9–10) menos porcentaje de detractores (0–6) en una escala de 0–10",
              ],
              [
                "Backlog",
                "Trabajo sin resolver pendiente para el equipo",
                "Número de tickets en estado 'New', 'Open', 'Pending' u 'On-hold' en un momento dado (Zendesk)",
              ],
            ],
          },
        ],
      },
      {
        heading: "Velocidad: tiempo de primera respuesta y tiempo de resolución",
        blocks: [
          {
            type: "p",
            text: "El tiempo de primera respuesta es el intervalo entre la creación de un ticket y la primera respuesta de un agente, que es como lo mide la métrica de tiempo de primera respuesta de Zendesk. Es la primera espera que vive el cliente, y suele ser el primer objetivo que los equipos incluyen en una política de SLA.",
          },
          {
            type: "p",
            text: "El tiempo de resolución mide cuánto se tarda en resolver el problema. El tiempo de resolución completo de Zendesk va desde la creación hasta la última resolución del ticket, así que un ticket que se reabre y se vuelve a resolver sigue acumulando tiempo. El tiempo medio de resolución es simplemente la media de esas duraciones en los tickets resueltos en un periodo. Unos pocos tickets muy antiguos pueden disparar la media, así que conviene mirar también la mediana.",
          },
          {
            type: "p",
            text: "Dos ajustes cambian mucho estas cifras: si cuentas horas laborables u horas naturales, y si las respuestas automáticas cuentan como respuesta. Decídelo una vez, déjalo por escrito y mantenlo estable, para que las tendencias sigan siendo comparables de un mes a otro.",
          },
        ],
      },
      {
        heading: "Calidad: resolución en el primer contacto y reaperturas",
        blocks: [
          {
            type: "p",
            text: "La resolución en el primer contacto (FCR) es el porcentaje de problemas resueltos sin que el cliente tenga que volver. Freshdesk calcula el FCR% como el número de tickets resueltos o cerrados tras el primer contacto del cliente, dividido entre todos los tickets resueltos o cerrados en el periodo seleccionado. Un ticket solo cuenta si el cliente no envió más mensajes después del primero; la descripción inicial del ticket no cuenta como respuesta del cliente, y el número de respuestas del agente no importa. Se excluyen los tickets reabiertos y también los tickets salientes iniciados por un agente.",
          },
          {
            type: "p",
            text: "Las reaperturas recogen el caso contrario: un ticket marcado como resuelto que vuelve. Zendesk registra una reapertura cuando el estado de un ticket pasa de 'Solved' de nuevo a 'Open'. Vigila el FCR y las reaperturas a la vez. Si tu equipo cierra tickets antes de tiempo para cumplir un objetivo de resolución, las reaperturas aumentarán.",
          },
          {
            type: "note",
            text: "Cada proveedor define el FCR de forma distinta: unos cuentan las respuestas del agente, otros las del cliente y otros excluyen ciertos canales. Comprueba la definición de tu helpdesk antes de comparar tu cifra con la de otros.",
          },
        ],
      },
      {
        heading: "Opinión del cliente: CSAT, CES y NPS",
        blocks: [
          {
            type: "p",
            text: "El CSAT (customer satisfaction score) pide a los clientes que valoren una interacción concreta. En Zendesk Explore, la puntuación de satisfacción es el número de tickets valorados como buenos dividido entre todos los tickets con una respuesta de satisfacción, expresado en porcentaje. Como está ligado a un solo ticket, el CSAT es la opinión más directa sobre el trabajo de tu equipo de soporte.",
          },
          {
            type: "p",
            text: "El CES (customer effort score) pregunta lo fácil que ha sido resolver un problema. La idea procede de «Stop Trying to Delight Your Customers», publicado en Harvard Business Review en julio de 2010. Se basó en un estudio con más de 75.000 personas que habían tratado con agentes de contact center o con canales de autoservicio, y sostenía que esforzarse por superar las expectativas apenas influye en la fidelidad, mientras que reducir el esfuerzo del cliente sí lo hace. La redacción de la encuesta y las escalas varían entre herramientas, así que elige una versión y mantenla.",
          },
          {
            type: "p",
            text: "El NPS (Net Promoter Score) mide la disposición a recomendar la empresa, no solo una interacción. Fred Reichheld, de Bain & Company, lo presentó en «The One Number You Need to Grow», publicado en Harvard Business Review en diciembre de 2003. Los clientes indican en una escala de 0–10 la probabilidad de que recomienden la empresa a un amigo o compañero. Las puntuaciones de 9–10 son promotores, las de 7–8 son pasivos y las de 0–6 son detractores. El NPS es el porcentaje de promotores menos el porcentaje de detractores, así que va de -100 a +100.",
          },
        ],
      },
      {
        heading: "Carga de trabajo: backlog y métricas fiables",
        blocks: [
          {
            type: "p",
            text: "El backlog es el trabajo sin resolver que tiene pendiente tu equipo. Zendesk define el backlog de tickets como todos los tickets que están en estado 'New', 'Open', 'Pending' u 'On-hold', tanto asignados como sin asignar. Regístralo como una foto diaria para poder ver la tendencia. Un backlog que crece semana tras semana significa que el volumen entrante supera la capacidad, aunque los tiempos de respuesta todavía parezcan correctos.",
          },
          {
            type: "p",
            text: "Algunos hábitos mantienen útiles las métricas:",
          },
          {
            type: "ul",
            items: [
              "Combina una métrica de velocidad con una de calidad, como el tiempo de resolución con las reaperturas, para que una no mejore a costa de la otra.",
              "Segmenta por canal y prioridad. Una primera respuesta en chat y una primera respuesta por correo no son comparables.",
              "Mantén las mismas definiciones y el mismo ajuste de horario a lo largo del tiempo, y anota cualquier cambio en tus informes.",
              "Convierte tus objetivos más importantes en políticas de SLA, para que el helpdesk los controle en cada ticket.",
            ],
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "El servicio Automated Reports de TascaLab (500–900 USD, proyecto puntual) extrae estas métricas de tu helpdesk, como Zendesk, Freshdesk o Jira, y envía un resumen programado por correo o a Slack. Cada proyecto incluye documentación básica, 30 días de soporte tras el lanzamiento y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas. Una llamada de auditoría gratuita de 30 minutos ayuda a decidir qué métricas merece la pena automatizar primero.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre el tiempo de primera respuesta y el tiempo de resolución?",
        a: "El tiempo de primera respuesta termina con la primera respuesta de un agente. El tiempo de resolución termina cuando se resuelve el ticket; el tiempo de resolución completo de Zendesk llega hasta la resolución más reciente, así que los tickets reabiertos siguen sumando tiempo.",
      },
      {
        q: "¿Cómo se calcula el NPS?",
        a: "Pregunta a los clientes, en una escala de 0–10, qué probabilidad hay de que te recomienden y, después, resta el porcentaje de detractores (0–6) del porcentaje de promotores (9–10). Los pasivos (7–8) cuentan en el total de respuestas, pero no en la resta.",
      },
      {
        q: "¿Qué diferencia hay entre CSAT, CES y NPS?",
        a: "El CSAT valora la satisfacción con una interacción concreta, el CES mide cuánto esfuerzo costó resolver un problema y el NPS mide la probabilidad de que un cliente recomiende la empresa en general.",
      },
      {
        q: "¿Cómo calcula Freshdesk la resolución en el primer contacto?",
        a: "El FCR% es el número de tickets resueltos sin más mensajes del cliente después del primer contacto, dividido entre todos los tickets resueltos en el periodo. Se excluyen los tickets reabiertos y los salientes.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Explore recipe: Determining satisfaction scores for your agents",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822875930-Explore-recipe-Determining-satisfaction-scores-for-your-agents",
      },
      {
        label: "Zendesk Help Center — Understanding backlog evolution",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155859610-Understanding-backlog-evolution",
      },
      {
        label: "Freshdesk Support — How are FCR%, First Response SLA%, and Average First response time calculated?",
        url: "https://support.freshdesk.com/support/solutions/articles/226861-how-are-fcr-first-response-sla-and-average-first-response-time-metrics-calculated-for-agent-perfo",
      },
      {
        label: "Harvard Business Review — The One Number You Need to Grow (December 2003)",
        url: "https://hbr.org/2003/12/the-one-number-you-need-to-grow",
      },
      {
        label: "Net Promoter System — Measuring Your Net Promoter Score",
        url: "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
      },
      {
        label: "Net Promoter System — The History of Net Promoter",
        url: "https://www.netpromotersystem.com/about/history-of-net-promoter/",
      },
      {
        label: "Harvard Business Review — Stop Trying to Delight Your Customers (July 2010)",
        url: "https://hbr.org/2010/07/stop-trying-to-delight-your-customers",
      },
    ],
    related: ["automated-support-reporting", "sla-policies-explained", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. SLA policies explained
  // ---------------------------------------------------------------------------
  {
    key: "sla-policies-explained",
    slug: "politicas-sla-atencion-al-cliente",
    category: "basics",
    navLabel: "Políticas de SLA explicadas",
    primaryKeyword: "políticas de SLA en atención al cliente",
    title: "Políticas de SLA en atención al cliente, explicadas",
    description:
      "Políticas de SLA en atención al cliente: objetivos de primera y siguiente respuesta y de resolución, horario laboral o natural, pausas, avisos y configuración.",
    h1: "Políticas de SLA en atención al cliente, explicadas",
    intro:
      "Una política de SLA es un conjunto de reglas de tu helpdesk que asigna a los tickets objetivos de tiempo de respuesta y de resolución, según condiciones como la prioridad, y controla cada ticket frente a ellos. Decide qué tickets reciben qué objetivos, si el reloj cuenta horas laborables o naturales, cuándo se pausa y qué ocurre antes de un incumplimiento. Aquí verás cómo funcionan las políticas de SLA y cómo las configuran Zendesk, Freshdesk y Jira Service Management.",
    keyFacts: [
      "Zendesk aplica la primera política de SLA, recorriendo la lista de arriba abajo, cuyas condiciones cumple el ticket.",
      "En Zendesk, 'requester wait time' se pausa en 'Pending', y 'agent work time' se pausa en 'Pending' y 'On-hold'.",
      "Freshdesk te permite calcular cada SLA en horas laborables o en horas naturales (24x7).",
      "Los recordatorios de Freshdesk se pueden configurar desde 5 minutos hasta 4 horas antes del vencimiento de un objetivo de SLA.",
      "En Jira Service Management, cada SLA tiene condiciones de inicio, pausa y parada, además de objetivos que seleccionan las solicitudes con JQL.",
    ],
    sections: [
      {
        heading: "Qué es una política de SLA",
        blocks: [
          {
            type: "p",
            text: "Un acuerdo de nivel de servicio (SLA) es un compromiso sobre la rapidez con la que vas a responder y resolver las solicitudes. Una política de SLA es la forma en que tu helpdesk hace cumplir ese compromiso en cada ticket. La mayoría de las políticas tienen las mismas partes:",
          },
          {
            type: "ul",
            items: [
              "Condiciones: a qué tickets se aplica la política, por ejemplo según el cliente, el canal o el tipo de solicitud",
              "Objetivos: límites de tiempo para la primera respuesta, las respuestas posteriores y la resolución, normalmente fijados por prioridad",
              "Horario: si el reloj cuenta horas laborables u horas naturales",
              "Reglas de pausa: qué estados detienen el reloj",
              "Acciones ante incumplimientos: recordatorios antes de que se incumpla un objetivo y escalados después",
            ],
          },
          {
            type: "p",
            text: "El orden importa cuando tienes varias políticas. Zendesk ejecuta primero los triggers, luego compara el ticket con sus políticas de SLA de arriba abajo y aplica la primera cuyas condiciones se cumplen. Coloca las políticas específicas, como una para clientes enterprise, por encima de las generales. Zendesk también exige que la prioridad del ticket esté en el campo de prioridad predeterminado del sistema; un campo de prioridad personalizado no hará coincidir ninguna política.",
          },
        ],
      },
      {
        heading: "Objetivos de primera respuesta, siguiente respuesta y resolución",
        blocks: [
          {
            type: "table",
            caption: "Objetivos de SLA y cómo los llama cada herramienta",
            head: ["Objetivo", "Qué mide", "Zendesk", "Freshdesk", "Jira Service Management"],
            rows: [
              [
                "Primera respuesta",
                "Tiempo desde la creación del ticket hasta la primera respuesta de un agente",
                "First reply time",
                "First response",
                "Un SLA personalizado que empieza al crearse la solicitud y se detiene con la primera respuesta al cliente",
              ],
              [
                "Siguiente respuesta",
                "Tiempo desde un mensaje del cliente sin contestar hasta la siguiente respuesta de un agente",
                "Next reply time",
                "Every response",
                "Un SLA personalizado con sus propias condiciones de inicio y parada",
              ],
              [
                "Resolución",
                "Tiempo desde la creación hasta que se resuelve el ticket",
                "Requester wait time, agent work time o total resolution time",
                "Resolution",
                "Un SLA personalizado que se detiene cuando se resuelve la solicitud",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk define 'next reply time' como el tiempo entre el comentario del cliente sin contestar más antiguo y el siguiente comentario público de un agente. También ofrece una métrica de actualización periódica, que mide el tiempo entre comentarios públicos de agentes. Para la resolución, Zendesk tiene tres métricas y recomienda elegir solo una por política: 'requester wait time' (tiempo en 'New', 'Open' y 'On-hold'), 'agent work time' (tiempo en 'New' y 'Open') y 'total resolution time' (todo el ciclo de vida, desde la creación hasta que el ticket se resuelve).",
          },
          {
            type: "p",
            text: "Freshdesk fija objetivos de primera respuesta, de cada respuesta y de resolución por prioridad dentro de cada política de SLA. En Jira Service Management, cada SLA es un temporizador con nombre: defines cuándo empieza, se pausa y se detiene, y luego añades objetivos que usan JQL para elegir a qué solicitudes se aplican, con tiempos objetivo escritos como 4h 30m.",
          },
        ],
      },
      {
        heading: "Cuándo corre el reloj: horas laborables, horas naturales y pausas",
        blocks: [
          {
            type: "p",
            text: "Las horas laborables solo cuentan el tiempo dentro de tu horario de trabajo; las horas naturales cuentan todas las horas de todos los días. Zendesk te permite elegir horas laborables o naturales para cada prioridad dentro de una política. Freshdesk pregunta si cada SLA debe usar el horario laboral que has configurado u horas naturales (24x7). Jira Service Management asocia a cada objetivo un calendario con zona horaria, días y horas laborables y festivos.",
          },
          {
            type: "p",
            text: "Un objetivo de 4 horas laborables en un ticket creado el viernes a última hora puede no vencer hasta el lunes. Es justo para tu equipo, pero no es lo que vive el cliente, así que usa horas naturales en cualquier prioridad en la que prometas cobertura las 24 horas.",
          },
          {
            type: "p",
            text: "La pausa es la otra mitad. El tiempo que se pasa esperando al cliente normalmente no debería contar en tu contra, y cada herramienta lo gestiona de forma distinta:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: 'requester wait time' se pausa en 'Pending'; 'agent work time' se pausa en 'Pending' y 'On-hold'; 'total resolution time' no se pausa con ningún cambio de estado hasta que se resuelve el ticket.",
              "Freshdesk: el estado 'Pending' pausa los temporizadores de SLA, y puedes desactivar el temporizador de SLA para cualquier estado, incluidos los personalizados como 'Waiting on Third Party'. Los tickets con el temporizador desactivado aparecen como 'On Hold', y cuando el cliente responde, el ticket vuelve a 'Open' y el reloj se reanuda.",
              "Jira Service Management: un SLA puede tener condiciones de pausa, por ejemplo mientras esperas la respuesta del cliente, junto con sus condiciones de inicio y parada.",
            ],
          },
        ],
      },
      {
        heading: "Avisos de incumplimiento y escalados",
        blocks: [
          {
            type: "p",
            text: "Un SLA solo sirve si alguien actúa antes de que se incumpla. Configura un aviso antes del plazo y un escalado después:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: crea una automatización con la condición 'Hours until next SLA breach' para avisar a un equipo o a una persona cuando un ticket esté a punto de incumplirse. Las automatizaciones se ejecutan una vez por hora, así que el aviso puede llegar hasta una hora antes o después del umbral, nunca en el momento exacto. El ejemplo de Zendesk añade una etiqueta en la misma automatización para que solo se active una vez por ticket.",
              "Freshdesk: cada política de SLA puede recordar a los agentes, desde 5 minutos hasta 4 horas antes, que vence un objetivo de primera respuesta o de resolución, y escalar cuando se incumple un objetivo al agente asignado o a otras personas que elijas, como un jefe de equipo. Ambas cosas se configuran en Admin > Workflows > SLA Policies.",
              "Cualquier herramienta: envía los avisos de incumplimiento donde tu equipo mira de verdad, como un canal de Slack, y no solo al correo.",
            ],
          },
        ],
      },
      {
        heading: "Cómo configuran los SLA Zendesk, Freshdesk y Jira Service Management",
        blocks: [
          {
            type: "ul",
            items: [
              "Zendesk: crea políticas de SLA con condiciones y objetivos por prioridad, elige horas laborables o naturales para cada prioridad y ordena la lista para que las políticas específicas vayan primero. Añade una automatización para los avisos de incumplimiento inminente.",
              "Freshdesk: en Admin > Workflows > SLA Policies, fija objetivos de primera respuesta, de cada respuesta y de resolución por prioridad, elige horas laborables o naturales y luego añade recordatorios y escalados. Decide en la configuración de estados de ticket qué estados desactivan el temporizador de SLA.",
              "Jira Service Management: crea cada SLA con condiciones de inicio, pausa y parada. Varias condiciones de inicio funcionan como OR, y el SLA se detiene en cuanto se cumple cualquier condición de parada. Después añade objetivos que seleccionen solicitudes con JQL, fija un tiempo objetivo y elige un calendario.",
            ],
          },
          {
            type: "p",
            text: "Sea cual sea la herramienta, empieza con una política y unas pocas prioridades, déjala funcionar unas semanas y luego compara los tiempos reales de primera respuesta y de resolución con los objetivos antes de ajustarlos.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura automatizaciones relacionadas con los SLA sobre Zendesk, Freshdesk y Jira: enrutamiento que fija la prioridad para que se aplique la política correcta, avisos de incumplimiento en Slack e informes de SLA programados. Los precios de proyecto puntual relevantes son Ticket Routing & Categorization (600–950 USD), Automated Reports (500–900 USD) y Custom Automation (1.200–2.000 USD). Los proyectos incluyen documentación básica, 30 días de soporte tras el lanzamiento y ningún coste oculto, y la mayoría llevan 1–3 semanas. Empieza con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre el tiempo de primera respuesta y el tiempo de siguiente respuesta?",
        a: "El tiempo de primera respuesta mide la espera hasta la primera respuesta de un agente tras crearse un ticket. El 'next reply time' de Zendesk se mide desde el comentario del cliente sin contestar más antiguo hasta el siguiente comentario público de un agente, así que se aplica durante toda la conversación.",
      },
      {
        q: "¿Los SLA deben usar horas laborables u horas naturales?",
        a: "Usa horas laborables si tu equipo trabaja en un horario fijo y los clientes lo saben, y horas naturales en las prioridades en las que prometes cobertura las 24 horas. Zendesk y Freshdesk te permiten elegir por política, y Jira Service Management usa un calendario que asignas a cada objetivo.",
      },
      {
        q: "¿Se detiene el reloj del SLA cuando un ticket está en 'Pending'?",
        a: "Depende de la herramienta y de la métrica. Freshdesk pausa los temporizadores de SLA en 'Pending'. En Zendesk, 'requester wait time' y 'agent work time' se pausan en 'Pending', mientras que 'total resolution time' sigue corriendo hasta que se resuelve el ticket.",
      },
      {
        q: "¿Puede Zendesk avisarme en el momento exacto en que se incumple un SLA?",
        a: "No. Los avisos de incumplimiento inminente de Zendesk usan automatizaciones, que se ejecutan una vez por hora, así que una notificación puede llegar hasta una hora antes o después del incumplimiento.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Defining SLA policies",
        url: "https://support.zendesk.com/hc/en-us/articles/4408829459866-Defining-SLA-policies",
      },
      {
        label: "Zendesk Help Center — About SLA policies and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/5600997516058-About-SLA-policies-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Workflow: How to alert your team to tickets nearing an SLA breach",
        url: "https://support.zendesk.com/hc/en-us/articles/4408820131994-Workflow-How-to-alert-your-team-to-tickets-nearing-an-SLA-breach",
      },
      {
        label: "Freshdesk Support — Understanding SLA Policies",
        url: "https://support.freshdesk.com/support/solutions/articles/37626-understanding-sla-policies",
      },
      {
        label: "Freshdesk Support — Setting SLA targets for every response",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001634-setting-sla-targets-for-every-response",
      },
      {
        label: "Freshdesk Support — Customizing your ticket statuses",
        url: "https://support.freshdesk.com/en/support/articles/37600-customizing-your-ticket-statuses",
      },
      {
        label: "Atlassian Support — Create service level agreements (SLAs) to manage goals",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/create-service-level-agreements-slas/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
    ],
    related: ["customer-support-metrics", "zendesk-automation", "jira-service-management-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Ticket deflection
  // ---------------------------------------------------------------------------
  {
    key: "ticket-deflection",
    slug: "deflexion-de-tickets",
    category: "basics",
    navLabel: "Deflexión de tickets",
    primaryKeyword: "deflexión de tickets",
    title: "Deflexión de tickets: definición, medición y límites",
    description:
      "Deflexión de tickets: qué canales de autoservicio la generan, cómo la miden Zendesk, Freshdesk e Intercom y por qué las sesiones abandonadas inflan la tasa.",
    h1: "Deflexión de tickets: qué es y cómo medirla con honestidad",
    intro:
      "La deflexión de tickets se produce cuando un cliente resuelve su duda mediante autoservicio, como un artículo del centro de ayuda o un agente de IA, en lugar de crear un ticket para tu equipo. Los proveedores de helpdesk la miden de formas muy distintas, y la mayoría de sus métricas cuentan como deflexión a los clientes que simplemente se fueron sin pedir ayuda. Una tasa de deflexión solo es útil cuando sabes exactamente qué cuenta y qué solicitudes no deberían desviarse nunca.",
    keyFacts: [
      "El 'self-service score' de Zendesk, también llamado 'ticket deflection ratio', compara el uso del centro de ayuda con los tickets creados en el mismo periodo.",
      "Zendesk registra una deflexión supuesta (assumed deflection) cuando un visitante del centro de ayuda no envía ningún ticket pero nunca confirma que encontró una respuesta.",
      "En los informes de agentes de IA de Zendesk, cualquier conversación que no termina en escalado cuenta como deflexión.",
      "Intercom registra una resolución supuesta cuando el cliente se va tras la última respuesta de Fin sin pedir más ayuda.",
      "Una encuesta de Gartner publicada en agosto de 2024 concluyó que solo el 14% de los problemas de atención al cliente se resuelven por completo mediante autoservicio.",
    ],
    sections: [
      {
        heading: "Dónde se produce la deflexión: canales de autoservicio",
        blocks: [
          {
            type: "p",
            text: "La deflexión se produce allí donde un cliente puede encontrar una respuesta antes de llegar a un agente. Cada canal la genera de una forma distinta y deja un rastro distinto en tus datos, así que conviene saber qué puedes medir realmente en cada uno.",
          },
          {
            type: "table",
            caption: "Canales de autoservicio que generan deflexión de tickets",
            head: ["Canal", "Cómo genera deflexión", "Qué puedes medir"],
            rows: [
              [
                "Centro de ayuda o base de conocimiento",
                "Los clientes buscan o consultan artículos antes de contactar contigo",
                "Sesiones o usuarios del centro de ayuda frente a tickets creados; visitas y votos de los artículos",
              ],
              [
                "Sugerencias de artículos en el formulario de contacto",
                "El formulario de solicitud sugiere artículos mientras el cliente describe el problema",
                "Zendesk registra una deflexión confirmada cuando se selecciona un artículo sugerido y no se envía ningún ticket en esa sesión",
              ],
              [
                "Agente de IA o chatbot",
                "Responde preguntas por chat, mensajería o correo, y escala a una persona cuando no puede ayudar",
                "Conversaciones que terminaron sin escalado e, idealmente, resoluciones confirmadas por el cliente",
              ],
              [
                "Ayuda contextual o dentro del producto",
                "Un widget de ayuda muestra artículos relacionados con la página o la función que está usando el cliente",
                "Aperturas del widget, visitas a artículos y envíos del formulario de contacto desde el widget",
              ],
              [
                "Foro de la comunidad",
                "Los clientes se responden entre sí, y los hilos respondidos siguen ayudando a visitantes posteriores",
                "Difícil de vincular directamente con los tickets; normalmente se mide como hilos con una respuesta aceptada",
              ],
            ],
          },
          {
            type: "note",
            text: "La deflexión es un efecto secundario de un buen autoservicio, no un objetivo en sí misma. Un cliente que obtiene una respuesta correcta en dos minutos es un éxito. Un cliente que se rinde no lo es, aunque muchos informes cuenten ambos casos igual.",
          },
        ],
      },
      {
        heading: "Cómo definen y miden la deflexión los proveedores",
        blocks: [
          {
            type: "p",
            text: "No existe una definición común. Cada helpdesk cuenta algo ligeramente distinto, y por eso las tasas de deflexión de dos herramientas, o de los casos de éxito de dos proveedores, no se pueden comparar directamente.",
          },
          {
            type: "table",
            caption: "Cómo definen la deflexión los proveedores de helpdesk",
            head: ["Proveedor y métrica", "Qué cuenta", "Qué vigilar"],
            rows: [
              [
                "'Self-service score' de Zendesk (también llamado 'self-service ratio' o 'ticket deflection ratio')",
                "El uso del centro de ayuda frente a los tickets creados en el mismo periodo. En los informes de Knowledge de Zendesk, el 'self-service ratio' son las sesiones del centro de ayuda divididas entre los tickets enviados",
                "Es una proporción, no un recuento de problemas resueltos, y los informes de deflexión de Zendesk solo registran los tickets enviados a través del formulario de solicitud del centro de ayuda",
              ],
              [
                "Deflexión confirmada y supuesta en Zendesk",
                "Confirmada: el visitante seleccionó un artículo sugerido en el formulario de solicitud y no envió ningún ticket en esa sesión. Supuesta: el visitante usó el centro de ayuda y no envió ningún ticket, pero no confirmó que encontrara una respuesta",
                "La deflexión supuesta es una deducción a partir del silencio",
              ],
              [
                "Tasa de deflexión del agente de IA de Zendesk",
                "Cualquier conversación que no termina en escalado, incluidos los escalados fallidos y las conversaciones sin estado",
                "Zendesk muestra a su lado métricas más estrictas: conversaciones 'AI agent-handled' y resoluciones automatizadas verificadas por un LLM",
              ],
              [
                "Tasa de deflexión del agente de IA de Freshdesk",
                "El porcentaje de conversaciones de un tema que el agente de IA resolvió sin intervención humana",
                "La tendencia de deflexión del Email AI Agent también cuenta los tickets que un agente humano cerró después de que el cliente leyera una respuesta y no contestara",
              ],
              [
                "Resolución de Fin en Intercom",
                "Tras la última respuesta de Fin, el cliente confirma que le ayudó (resolución confirmada) o se va sin pedir más ayuda (resolución supuesta)",
                "Si el cliente vuelve a la conversación para pedir más ayuda, la resolución se descuenta",
              ],
            ],
          },
          {
            type: "p",
            text: "Destacan dos patrones. Primero, las métricas más amplias, como la tasa de deflexión del agente de IA de Zendesk, las deflexiones supuestas y las resoluciones supuestas de Intercom, cuentan el silencio como éxito. Segundo, las métricas más estrictas añaden algún tipo de verificación: Zendesk solo cuenta una resolución automatizada cuando una comprobación con un LLM confirma que la solicitud se resolvió sin intervención humana, y las conversaciones que no superan esa comprobación no consumen una resolución automatizada.",
          },
        ],
      },
      {
        heading: "El problema de las sesiones abandonadas",
        blocks: [
          {
            type: "p",
            text: "La mayoría de las métricas de deflexión no distinguen a un cliente que encontró la respuesta de otro que se rindió. Un visitante que lee un artículo, no lo entiende y luego te llama por teléfono es una deflexión supuesta en el informe del centro de ayuda y un ticket en la cola telefónica. Un chat que termina porque el cliente cerró la pestaña parece igual que uno que terminó porque se resolvió el problema. Zendesk señala que incluso su categoría más estricta, 'AI agent-handled', puede incluir conversaciones en las que los clientes abandonaron antes de escalar o no quedaron satisfechos con la resolución.",
          },
          {
            type: "p",
            text: "El éxito real del autoservicio suele ser menor de lo que sugieren los paneles. En una encuesta de Gartner a 5.728 clientes, publicada en agosto de 2024, solo el 14% de los problemas de atención al cliente se resolvieron por completo mediante autoservicio, y solo el 36% incluso cuando los clientes describían el problema como muy sencillo.",
          },
          {
            type: "p",
            text: "Para que tus cifras de deflexión sean honestas:",
          },
          {
            type: "ul",
            items: [
              "Informa por separado de las deflexiones confirmadas y las supuestas, y trata la cifra supuesta como un límite superior.",
              "Registra los contactos repetidos. Un cliente que te contacta por otro canal un día después de una sesión con deflexión no fue desviado.",
              "Vigila los contactos por cliente o por pedido. Si la deflexión sube pero los contactos por cliente no bajan, la deflexión solo existe sobre el papel.",
              "Lee cada mes una muestra de transcripciones de bots con deflexión para ver cómo terminaron realmente las conversaciones.",
              "Combina la deflexión con una métrica de calidad, como el CSAT de las conversaciones con el bot o los tickets reabiertos.",
            ],
          },
        ],
      },
      {
        heading: "Qué no se debe desviar",
        blocks: [
          {
            type: "p",
            text: "Algunas solicitudes deberían llegar a una persona lo antes posible, aunque técnicamente un bot pudiera responder. Desviarlas te ahorra un ticket y te cuesta un cliente.",
          },
          {
            type: "ul",
            items: [
              "Clientes que piden expresamente hablar con una persona. Haz visible esa vía en lugar de esconderla tras varios turnos fallidos del bot.",
              "Problemas de seguridad, como cuentas comprometidas, sospechas de fraude o cargos inesperados.",
              "Disputas de facturación, reembolsos y cancelaciones, en los que una respuesta errónea o dilatoria tiene un coste directo.",
              "Quejas y escalados, sobre todo los contactos repetidos por el mismo problema.",
              "Solicitudes legales y de protección de datos, como las de acceso o supresión de datos personales, que necesitan una respuesta documentada.",
              "Problemas urgentes o relacionados con la seguridad física, y clientes que parecen angustiados o vulnerables.",
            ],
          },
          {
            type: "p",
            text: "Los clientes esperan esa vía de escape. En una encuesta de Gartner a 3.566 clientes, realizada en febrero y marzo de 2026 y publicada en agosto de 2026, el 87% afirmó que las empresas que usan IA generativa (GenAI) en la atención al cliente deben ofrecer acceso a un agente humano. El consejo de Gartner en ese mismo comunicado es no hacer de la IA generativa un primer paso obligatorio e intentar la resolución solo cuando la confianza sea alta, con una vía clara hacia una persona.",
          },
          {
            type: "p",
            text: "En la práctica, eso significa reglas de enrutamiento que envíen estas solicitudes directamente a la cola correcta, y un traspaso de bot a humano que transmita la conversación completa para que el cliente no tenga que repetir nada.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea chatbots con IA que responden a las preguntas frecuentes en tu web, WhatsApp, Telegram, Facebook Messenger o Instagram y pasan todo lo demás a tu equipo en Zendesk, Freshdesk o tus herramientas actuales. Un Starter Chat Bot cuesta 350–450 USD y un Standard Chat Bot que cubre 3–5 canales cuesta 500–650 USD, como proyecto puntual. Automated Reports (500–900 USD) puede medir la deflexión junto con los contactos repetidos y las reaperturas, para que veas el efecto real. Todos los proyectos incluyen documentación básica, 30 días de soporte tras el lanzamiento y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas. Una llamada de auditoría gratuita de 30 minutos es un buen punto de partida para decidir qué automatizar y qué dejar en manos de personas.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre deflexión y resolución de tickets?",
        a: "Deflexión significa que el cliente no creó un ticket ni llegó a un agente; resolución significa que el problema se resolvió de verdad. La tasa de deflexión del agente de IA de Zendesk cuenta cualquier conversación que no terminó en escalado, mientras que sus resoluciones automatizadas exigen además una comprobación con un LLM que confirme que la solicitud se resolvió.",
      },
      {
        q: "¿Qué es una deflexión supuesta en Zendesk?",
        a: "Una sesión del centro de ayuda en la que el visitante no pidió ayuda ni envió un ticket, pero tampoco confirmó que encontrara una respuesta. Una deflexión confirmada exige que el visitante seleccione un artículo sugerido en el formulario de solicitud y que después no envíe ningún ticket en esa sesión.",
      },
      {
        q: "¿Cómo calcula Zendesk el 'self-service ratio'?",
        a: "Compara el uso del centro de ayuda con los tickets del mismo periodo. En los informes de Knowledge de Zendesk, el 'self-service ratio' son las sesiones del centro de ayuda divididas entre los tickets enviados, y los informes de deflexión solo registran los tickets enviados a través del formulario de solicitud del centro de ayuda.",
      },
      {
        q: "¿Intercom cuenta una conversación con Fin como resuelta si el cliente simplemente se va?",
        a: "Sí. Si el cliente sale tras la última respuesta de Fin sin pedir más ayuda, Intercom registra una resolución supuesta. Si el cliente confirma que la respuesta le ayudó, es una resolución confirmada.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Getting started with self-service, Part 6: Tracking essential self-service metrics",
        url: "https://support.zendesk.com/hc/en-us/articles/4408894139930-Getting-started-with-self-service-Part-6-Tracking-essential-self-service-metrics",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Knowledge",
        url: "https://support.zendesk.com/hc/en-us/articles/4409155064090-Metrics-and-attributes-for-Zendesk-Knowledge",
      },
      {
        label: "Zendesk Help Center — Understanding the difference between deflection, AI agent-handled, automated resolution, and custom resolution rates",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756478106-Understanding-the-difference-between-deflection-AI-agent-handled-automated-resolution-and-custom-resolution-rates",
      },
      {
        label: "Freshdesk Support — Monitor and Analyze AI Agent Performance Metrics in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011716-monitor-ai-agent-performance",
      },
      {
        label: "Freshdesk Support — Manage, Test & Troubleshoot Your Email AI Agent",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011217-use-and-manage-the-email-ai-agent",
      },
      {
        label: "Intercom Help — Fin AI Agent outcomes",
        url: "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      },
      {
        label: "Gartner — Survey Finds Only 14% of Customer Service Issues Are Fully Resolved in Self-Service (August 2024)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2024-08-19-gartner-survey-finds-only-14-percent-of-customer-service-issues-are-fully-resolved-in-self-service",
      },
      {
        label: "Gartner — Survey Finds 87% of Customers Say Companies Using GenAI for Customer Service Must Provide Access to a Human Agent (August 2026)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2026-08-04-gartner-survey-finds-87-percent-of-customers-say-companies-using-genai-for-customer-service-must-provide-access-to-a-human-agent0",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "ai-knowledge-base-for-customer-support"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. Omnichannel customer support
  // ---------------------------------------------------------------------------
  {
    key: "omnichannel-customer-support",
    slug: "atencion-al-cliente-omnicanal",
    category: "basics",
    navLabel: "Atención al cliente omnicanal",
    primaryKeyword: "atención al cliente omnicanal",
    title: "Atención al cliente omnicanal: qué significa en la práctica",
    description:
      "Atención al cliente omnicanal: en qué se diferencia de la multicanal, espacios de trabajo unificados, enrutamiento omnicanal y ventanas de WhatsApp y Messenger.",
    h1: "Atención al cliente omnicanal: qué significa y cómo funciona",
    intro:
      "La atención al cliente omnicanal significa que todos los canales que usa un cliente para contactar contigo, como el correo electrónico, el chat, el teléfono, WhatsApp o la mensajería en redes sociales, están conectados a una única ficha de cliente y a un único historial de conversación que cualquier agente puede ver. La atención multicanal ofrece los mismos canales, pero los gestiona por separado, así que los clientes tienen que repetirse cada vez que cambian de canal. Llegar a la omnicanalidad requiere un espacio de trabajo unificado para los agentes, un enrutamiento que trate todos los canales como un único volumen de trabajo y flujos que respeten las reglas propias de cada canal.",
    keyFacts: [
      "Freshworks describe la atención multicanal como canales independientes que funcionan cada uno de forma autónoma; en la atención omnicanal están interconectados.",
      "En el Zendesk Agent Workspace, una misma conversación de ticket puede incluir correo electrónico, chat y voz.",
      "El enrutamiento omnicanal de Zendesk asigna tickets de correo, mensajería y llamadas según el estado del agente y su capacidad libre.",
      "En WhatsApp, las respuestas libres solo se permiten dentro de una ventana de atención al cliente de 24 horas; después, solo se pueden enviar plantillas.",
      "Una encuesta de Gartner publicada en julio de 2025 concluyó que solo el 22% de los clientes empiezan, se mantienen y resuelven su problema íntegramente en los canales propios de la empresa.",
    ],
    sections: [
      {
        heading: "Atención omnicanal frente a multicanal",
        blocks: [
          {
            type: "p",
            text: "Ambos modelos ofrecen varios canales. La diferencia está en si esos canales comparten contexto. Freshworks define la atención multicanal como la oferta de varios canales independientes, cada uno funcionando de forma autónoma, y señala que suele implicar equipos dedicados para cada canal. Los sistemas omnicanal, en cambio, garantizan que todos los canales estén interconectados. Zendesk traza la misma línea: en la atención multicanal, las conversaciones no pasan de un canal al siguiente, mientras que la atención omnicanal conecta las interacciones en una única conversación continua y da a los agentes una visión completa del historial del cliente.",
          },
          {
            type: "table",
            caption: "Atención al cliente multicanal frente a omnicanal",
            head: ["Aspecto", "Multicanal", "Omnicanal"],
            rows: [
              ["Canales", "Varios canales, cada uno con su propia herramienta o bandeja", "Varios canales que alimentan un único helpdesk"],
              ["Historial del cliente", "Se queda en el canal donde ocurrió", "Un solo historial para todos los canales, visible para todos los agentes"],
              ["Cambio de canal", "El cliente empieza de cero y repite los datos", "El agente retoma la conversación donde la dejó la última interacción"],
              ["Organización del equipo", "A menudo, un equipo dedicado por canal", "Una cola compartida, con agentes que trabajan varios canales"],
              ["Enrutamiento", "Por canal, a menudo manual", "Una única configuración de enrutamiento basada en estado, capacidad y habilidades"],
              ["Informes", "Cifras separadas por canal", "Informes por cliente y por incidencia en todos los canales"],
            ],
          },
          {
            type: "p",
            text: "Añadir un canal no te convierte en omnicanal. Si los mensajes de WhatsApp llegan a una app separada que tus agentes de correo no pueden ver, tienes un silo más. Y los clientes sí se mueven entre canales: una encuesta de Gartner a 5.801 clientes, publicada en julio de 2025, concluyó que solo el 22% empiezan, se mantienen y resuelven su problema íntegramente en los canales propios de la empresa, y que el 51% de los recorridos de atención empiezan ya en plataformas de terceros como Google, YouTube y ChatGPT.",
          },
        ],
      },
      {
        heading: "Un espacio de trabajo unificado y un historial compartido",
        blocks: [
          {
            type: "p",
            text: "El núcleo de la atención omnicanal es un único lugar donde los agentes ven y responden todas las conversaciones. En el Zendesk Agent Workspace, las conversaciones de ticket pueden incluir correo electrónico, chat y voz, y los agentes también pueden recibir y responder mensajes de redes sociales y de la web. El ejemplo del propio Zendesk es un ticket que empezó como chat en directo y continuó por correo, recogido como un único flujo de conversación. El contexto del cliente, incluido el historial de interacciones, aparece junto a la conversación, y los agentes pueden buscar y citar artículos del centro de ayuda desde la misma pantalla.",
          },
          {
            type: "p",
            text: "Uses el helpdesk que uses, una configuración omnicanal que funcione necesita las mismas capacidades:",
          },
          {
            type: "ul",
            items: [
              "Una única ficha de cliente que vincule direcciones de correo, números de teléfono e ID de mensajería, para que un mensaje de WhatsApp y un correo de la misma persona acaben en el mismo historial.",
              "El historial de conversación de todos los canales en el ticket, incluida la conversación con el bot previa al traspaso.",
              "La opción de responder por otro canal cuando el original ya no permite responder.",
              "Etiquetas, campos y macros compartidos, para que los informes funcionen igual en todos los canales.",
            ],
          },
          {
            type: "note",
            text: "La identificación de clientes es donde fallan muchas configuraciones. Si tu centralita, tu número de WhatsApp y tu bandeja de correo no apuntan a la misma ficha de cliente, los agentes siguen viendo fragmentos, solo que en una sola ventana.",
          },
        ],
      },
      {
        heading: "Enrutamiento omnicanal",
        blocks: [
          {
            type: "p",
            text: "El enrutamiento decide qué agente recibe cada conversación. El enrutamiento omnicanal de Zendesk envía los tickets nuevos y abiertos de correo, llamadas y mensajería a los agentes según su disponibilidad y capacidad. En lugar de fijar un estado para cada canal, los agentes fijan un único estado unificado para correo, voz y mensajería. Para la mensajería y las llamadas, el agente tiene que estar conectado, y todos los agentes necesitan capacidad libre, es decir, tener asignados menos tickets abiertos que su máximo para ese canal.",
          },
          {
            type: "p",
            text: "Por defecto, un ticket va al agente con más capacidad libre para ese canal y, en caso de empate, al agente que lleva más tiempo sin recibir un ticket de ese canal. Puedes cambiar a round robin y activar el modo de concentración (focus mode) para que un agente no reciba conversaciones de mensajería y llamadas a la vez. Según tu plan de Zendesk, el enrutamiento también puede tener en cuenta el tiempo hasta el incumplimiento del SLA, la prioridad del ticket y las habilidades de los agentes.",
          },
          {
            type: "p",
            text: "La ventaja de enrutar entre canales en lugar de por canal es la capacidad compartida: a un agente que está en una llamada no se le debería ofrecer un chat nuevo, y un agente con pocos correos abiertos puede asumir más trabajo.",
          },
        ],
      },
      {
        heading: "Reglas de cada canal: ventanas de mensajería en WhatsApp y Messenger",
        blocks: [
          {
            type: "p",
            text: "La omnicanalidad no hace que los canales sean idénticos. Las plataformas de mensajería fijan reglas sobre cuándo puede responder una empresa, y tus flujos de trabajo tienen que respetarlas.",
          },
          {
            type: "table",
            caption: "Ventanas de mensajería en WhatsApp y Facebook Messenger",
            head: ["Canal", "Ventana de respuesta", "Cuando se cierra la ventana"],
            rows: [
              [
                "WhatsApp Business Platform",
                "Una ventana de atención al cliente de 24 horas empieza cuando el cliente te escribe o te llama, y se reinicia con cada nuevo mensaje o llamada. Dentro de ella, puedes enviar mensajes de servicio libres sin aprobación previa.",
                "Solo se pueden enviar mensajes de plantilla aprobados previamente. Los mensajes libres solo pueden responder a usuarios, no iniciar una conversación.",
              ],
              [
                "Facebook Messenger",
                "La ventana de mensajería estándar es de 24 horas desde el último mensaje de la persona.",
                "Con la etiqueta 'Human Agent', una persona puede responder en los 7 días siguientes al mensaje del cliente. Tu app debe estar aprobada para usar la etiqueta, y no se permiten mensajes automatizados con ella.",
              ],
            ],
          },
          {
            type: "p",
            text: "Estas reglas condicionan tu flujo de trabajo. Si un agente retoma una conversación de WhatsApp más de 24 horas después del último mensaje del cliente, no puede enviar una respuesta libre: necesitas una plantilla aprobada o pasar a otro canal, como el correo electrónico. Los bots también se ven afectados, porque la etiqueta 'Human Agent' de Messenger es solo para respuestas humanas. Consulta la documentación vigente de Meta antes de diseñar en torno a estos límites, porque Meta actualiza sus políticas de mensajería y sus precios.",
          },
        ],
      },
      {
        heading: "Cómo pasar de multicanal a omnicanal",
        blocks: [
          {
            type: "ol",
            items: [
              "Haz una lista de todos los canales que usan hoy los clientes y de adónde llega cada uno: qué herramienta, qué equipo, qué bandeja.",
              "Reúne los canales en un único helpdesk, mediante integraciones nativas donde existan y APIs o webhooks donde no.",
              "Decide cómo identificas a los clientes entre canales, por ejemplo por dirección de correo y número de teléfono, y cómo fusionas los duplicados.",
              "Configura un único enrutamiento con capacidad por canal, en lugar de colas separadas por equipo.",
              "Haz que los traspasos de bot a humano lleven al ticket la conversación completa y los datos del cliente.",
              "Añade reglas específicas de cada canal, como respuestas con plantilla en WhatsApp pasadas 24 horas y objetivos de SLA distintos para los canales en directo y los asíncronos.",
              "Elabora informes por cliente y por incidencia en todos los canales, no solo por canal.",
            ],
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab conecta canales con el helpdesk que ya usas, como Zendesk o Freshdesk, mediante APIs, webhooks y Make o n8n. Un Standard Chat Bot (500–650 USD, proyecto puntual) cubre 3–5 canales, como tu web, WhatsApp, Telegram, Facebook Messenger e Instagram, y Ticket Routing & Categorization (600–950 USD) clasifica las conversaciones entrantes en la cola correcta. Todos los proyectos incluyen documentación básica, 30 días de soporte tras el lanzamiento y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas. Una llamada de auditoría gratuita de 30 minutos permite mapear tus canales actuales antes de construir nada.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre la atención omnicanal y la multicanal?",
        a: "La atención multicanal ofrece varios canales que funcionan de forma independiente, así que el historial se queda dentro de cada canal. La atención omnicanal conecta los canales, de modo que los agentes ven un único historial del cliente y los clientes pueden cambiar de canal sin repetirse.",
      },
      {
        q: "¿Qué es el enrutamiento omnicanal de Zendesk?",
        a: "Un sistema de enrutamiento que asigna tickets de correo, mensajería y llamadas a los agentes según un único estado unificado del agente y su capacidad libre por canal. Por defecto, el ticket lo recibe el agente con más capacidad libre para ese canal.",
      },
      {
        q: "¿Puedo responder a un cliente de WhatsApp pasadas 24 horas?",
        a: "No con un mensaje libre. Cuando se cierra la ventana de atención al cliente de 24 horas, solo se pueden enviar mensajes de plantilla aprobados previamente. Un nuevo mensaje o llamada del cliente abre una nueva ventana.",
      },
      {
        q: "¿Cuánto tiempo tiene un agente humano para responder en Facebook Messenger?",
        a: "La ventana de mensajería estándar es de 24 horas. Con la etiqueta 'Human Agent', que requiere la aprobación de la app, un agente humano puede responder en los 7 días siguientes al mensaje del cliente. La etiqueta no se puede usar para mensajes automatizados.",
      },
    ],
    sources: [
      {
        label: "Freshworks — Omnichannel vs Multichannel: Key Service Differences",
        url: "https://www.freshworks.com/explore-cx/omnichannel-vs-multichannel-support/",
      },
      {
        label: "Zendesk — What is omnichannel customer service?",
        url: "https://www.zendesk.com/blog/customer-service/support/omnichannel-really-means/",
      },
      {
        label: "Zendesk Help Center — About the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408821259930-About-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — WhatsApp Business Platform: Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Messenger Platform Send API reference",
        url: "https://developers.facebook.com/docs/messenger-platform/reference/send-api/",
      },
      {
        label: "Gartner — Survey Finds More Than Half of Customer Service Journeys Now Start on Third-Party Platforms (July 2025)",
        url: "https://www.gartner.com/en/newsroom/press-releases/2025-07-23-gartner-survey-finds-more-than-half-of-customer-service-journeys-now-start-on-third-party-platforms",
      },
    ],
    related: ["whatsapp-customer-support-bot", "ticket-routing-automation", "zendesk-automation"],
    updated: "2026-10-19",
  },
];
