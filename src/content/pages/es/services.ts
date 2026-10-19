import type { TranslatedPage } from "../../types";

export const servicesPages: TranslatedPage[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // 1. Chatbot con IA para atención al cliente
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-chatbot-for-customer-support",
    slug: "chatbot-ia-atencion-al-cliente",
    category: "services",
    navLabel: "Chatbot con IA para soporte",
    primaryKeyword: "chatbot con IA para atención al cliente",
    title: "Chatbot con IA para atención al cliente | TascaLab",
    description:
      "Cómo un chatbot con IA para atención al cliente responde dudas frecuentes, recoge datos y deriva a agentes, y cómo se conecta a Zendesk o Freshdesk por API.",
    h1: "Chatbot con IA para atención al cliente: qué hace y cómo se conecta a tu helpdesk",
    intro:
      "Un chatbot con IA para atención al cliente responde a las preguntas habituales a partir de tu contenido de ayuda, recoge los datos que necesitará un agente y pasa la conversación a una persona cuando no puede ayudar o cuando el cliente lo pide. Funciona mejor como una capa sobre tu helpdesk actual: el bot se encarga del primer intercambio y todo lo que no puede resolver se convierte en un ticket con todo el contexto adjunto.",
    keyFacts: [
      "Los agentes de IA de Zendesk generan respuestas a partir de las fuentes de conocimiento conectadas y recurren a una respuesta predeterminada cuando no encuentran nada relevante.",
      "Los AI Agents de Freshdesk pueden transferir automáticamente una conversación a una persona cuando el cliente usa frases que el administrador ha incluido en una lista.",
      "Un bot de terceros en la mensajería de Zendesk hace el traspaso cediendo el control al Agent Workspace, con lo que la conversación pasa a poder asignarse.",
      "Según el artículo 50 del Reglamento de IA de la UE, a partir del 2 de agosto de 2026 los chatbots deben informar a las personas de que están interactuando con una IA, salvo que sea evidente.",
    ],
    sections: [
      {
        heading: "Qué hace realmente un chatbot de soporte",
        blocks: [
          {
            type: "p",
            text: "La mayoría de los chatbots de soporte cumplen tres funciones, y una cuarta es opcional. Conviene definir el alcance de cada una por separado, porque cada una depende de datos distintos para funcionar bien.",
          },
          {
            type: "table",
            caption: "Funciones principales de un chatbot de atención al cliente",
            head: ["Función", "Ejemplo", "De qué depende"],
            rows: [
              [
                "Responder preguntas frecuentes",
                "Horario de apertura, política de devoluciones, plazos de entrega, instrucciones paso a paso",
                "Artículos de ayuda precisos y actualizados, o una lista aprobada de preguntas y respuestas",
              ],
              [
                "Recoger información",
                "Número de pedido, email de la cuenta, dispositivo, una foto del problema",
                "Una lista definida de campos que se correspondan con los campos de ticket de tu helpdesk",
              ],
              [
                "Derivar a una persona",
                "Transferencia en directo a un agente, o un ticket creado con la transcripción",
                "Una vía de traspaso a tu helpdesk y reglas claras sobre cuándo usarla",
              ],
              [
                "Ejecutar acciones sencillas (opcional)",
                "Consultar el estado de un pedido o de una reserva",
                "Acceso por API al sistema que contiene los datos",
              ],
            ],
          },
          {
            type: "p",
            text: "Los bots basados en LLM generan respuestas a partir de tu contenido de conocimiento en lugar de seguir guiones escritos a mano. Zendesk, por ejemplo, describe la «Knowledge reply» de sus agentes de IA como una búsqueda en las fuentes de conocimiento conectadas para generar una respuesta, que recurre a una respuesta predeterminada cuando no aparece nada relevante. La consecuencia práctica es sencilla: el bot solo es tan bueno como el contenido con el que responde. Las lagunas y los artículos desactualizados se traducen en respuestas erróneas o vagas.",
          },
          {
            type: "p",
            text: "La recogida de información suele infravalorarse. Aunque el bot no pueda resolver el problema, pedir desde el principio el número de pedido, el email de la cuenta y una breve descripción elimina la primera ronda de idas y venidas que, de otro modo, tendría el agente.",
          },
        ],
      },
      {
        heading: "El traspaso: la parte por la que los clientes juzgan al bot",
        blocks: [
          {
            type: "p",
            text: "Un bot que no deja hablar con una persona daña la confianza muy rápido. Decide de antemano qué situaciones ponen fin a la parte automatizada de la conversación:",
          },
          {
            type: "ul",
            items: [
              "El cliente pide hablar con una persona. Los ajustes de traspaso de los AI Agents de Freshdesk, por ejemplo, permiten a los administradores definir una lista de frases que transfieren la conversación automáticamente, mostrar un mensaje antes de la transferencia y, opcionalmente, recoger antes los datos del cliente.",
              "El bot falla una y otra vez. Zendesk permite configurar un agente de IA para que escale a una persona cuando no consigue generar una respuesta a partir de las fuentes de conocimiento conectadas tras varios intentos.",
              "El tema es delicado o queda fuera del alcance. Freshdesk incluye solicitudes como facturación o reembolsos, y preguntas fuera del alcance configurado del agente, entre los motivos típicos de traspaso.",
              "No hay nadie conectado. Fuera del horario de atención, el bot debe decirlo con claridad y crear un ticket en lugar de prometer un agente en directo.",
            ],
          },
          {
            type: "p",
            text: "Sea cual sea el motivo, el agente debe recibir la transcripción y los campos recogidos para que el cliente no tenga que repetir nada. Cuando un bot de terceros cede el control al Agent Workspace de Zendesk a través del switchboard de Sunshine Conversations, la conversación pasa a poder asignarse a un agente, y el bot puede incluir metadatos que rellenan campos del ticket resultante.",
          },
        ],
      },
      {
        heading: "Bots nativos del helpdesk frente a un bot a medida",
        blocks: [
          {
            type: "p",
            text: "Tanto Zendesk como Freshdesk ofrecen sus propios agentes de IA. Si tus conversaciones ya pasan por el widget de mensajería de ese helpdesk y tu centro de ayuda responde a la mayoría de las preguntas, la opción nativa es la forma más rápida de empezar. Un bot a medida conectado por API es la alternativa cuando necesitas algo que el bot nativo no cubre.",
          },
          {
            type: "table",
            caption: "Chatbot de soporte nativo frente a uno a medida",
            head: ["", "Agente de IA nativo del helpdesk", "Bot a medida conectado por API"],
            rows: [
              [
                "Configuración",
                "Se configura en la administración del helpdesk, con su centro de ayuda como fuente de conocimiento",
                "Se construye sobre una infraestructura aparte y se conecta al helpdesk mediante su API y webhooks",
              ],
              [
                "Canales",
                "Los que admita el producto de mensajería del helpdesk en tu plan",
                "Cualquier canal con una API que puedas conectar, como WhatsApp, Telegram o Messenger",
              ],
              [
                "Lógica",
                "Limitada al editor de flujos y a los ajustes de IA del proveedor",
                "Tus propias reglas, consultas a sistemas internos, formularios de varios pasos",
              ],
              [
                "Licencias",
                "Incluido en tu suscripción al helpdesk o como complemento; revisa tu plan",
                "Costes aparte para la plataforma del bot y para el uso de modelos de IA",
              ],
              [
                "Mantenimiento",
                "El proveedor mantiene la plataforma",
                "Alguien tiene que mantener la integración cuando cambian las API",
              ],
            ],
          },
          {
            type: "p",
            text: "Ninguna de las dos es mejor por defecto. Un orden sensato es comprobar primero qué cubre el agente nativo y desarrollar a medida solo para la carencia concreta: un canal, una consulta o una regla de traspaso que la herramienta nativa no puede expresar.",
          },
        ],
      },
      {
        heading: "Cómo se integra un bot a medida en tu helpdesk",
        blocks: [
          {
            type: "p",
            text: "Hay dos patrones de integración habituales, y muchas configuraciones usan los dos.",
          },
          {
            type: "ol",
            items: [
              "Crear un ticket en el traspaso. El bot funciona con su propia conexión de canal y, cuando hace falta una persona, crea un ticket mediante la API REST del helpdesk con la transcripción y los datos recogidos. En la Tickets API de Zendesk, el comentario es el único campo obligatorio al crear un ticket, y puedes enviar una clave de idempotencia para que una solicitud reintentada no cree un duplicado. El endpoint POST /api/v2/tickets de Freshdesk acepta campos personalizados como pares clave-valor y crea un contacto nuevo cuando el email del solicitante todavía no existe.",
              "Compartir la conversación dentro de la mensajería del helpdesk. En Zendesk, un bot de terceros puede instalarse como respondedor de la mensajería; solo un bot puede ocupar a la vez el rol de respondedor predeterminado. El bot responde primero y usa la acción «pass control» del switchboard para pasar la conversación al Agent Workspace cuando se necesita una persona.",
            ],
          },
          {
            type: "p",
            text: "Los webhooks se encargan del camino de vuelta. Un disparador de Zendesk puede llamar a un endpoint externo mediante una acción «Notify webhook»; por ejemplo, para avisar al bot de que un agente ha resuelto el ticket y que así pueda cerrar el ciclo en el canal original.",
          },
          {
            type: "note",
            text: "Mantén una única fuente de verdad para las respuestas. Si el bot responde a partir de un documento aparte que se va desviando de tu centro de ayuda, los clientes reciben respuestas contradictorias según dónde pregunten.",
          },
        ],
      },
      {
        heading: "Avisar a los clientes de que hablan con un bot",
        blocks: [
          {
            type: "p",
            text: "Si atiendes a clientes en la UE, el artículo 50 del Reglamento de IA se aplica a partir del 2 de agosto de 2026. Según las preguntas frecuentes de la Comisión Europea, los proveedores deben diseñar sistemas como los chatbots de forma que las personas sean informadas de que interactúan con una IA desde el inicio de la primera interacción, de manera clara y distinguible. La excepción, para cuando esto resulte evidente para una persona razonablemente bien informada, debe interpretarse de forma restrictiva, según la Comisión.",
          },
          {
            type: "p",
            text: "La forma más directa de cumplirlo es una frase sencilla en el saludo del bot, junto con una vía visible para hablar con una persona. Además, las transcripciones suelen contener datos personales, así que decide cuánto tiempo las conserva la plataforma del bot y quién puede acceder a ellas.",
          },
        ],
      },
      {
        heading: "Cómo crea TascaLab chatbots de soporte",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea chatbots sobre las herramientas que ya usas —Zendesk, Freshdesk, Jira, Slack o sistemas internos— mediante sus API, webhooks y Make o n8n, así que no tienes que cambiar de plataforma. El bot se diseña como un filtro delante de tu equipo, no como su sustituto: responde lo que puede, recoge los datos y pasa el resto con contexto.",
          },
          {
            type: "table",
            caption: "Paquetes de chatbot de TascaLab (pago único)",
            head: ["Paquete", "Alcance", "Precio (USD)"],
            rows: [
              ["Starter Chat Bot", "1–2 canales, preguntas frecuentes, recogida básica de información", "350–450 USD"],
              [
                "Standard Chat Bot",
                "3–5 canales, conversaciones más complejas, traspasos más fluidos",
                "500–650 USD",
              ],
            ],
          },
          {
            type: "p",
            text: "Canales disponibles: web, WhatsApp, Telegram, Facebook Messenger e Instagram, además del teléfono mediante el bot de voz. La mayoría de las implantaciones llevan 1–3 semanas, y todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos. El punto de partida es una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Sustituirá un chatbot con IA a mis agentes de soporte?",
        a: "No debería diseñarse para eso. Un bot de soporte resulta más útil cuando se ocupa de las preguntas repetitivas y de recoger datos, y pasa todo lo demás a personas con la conversación adjunta.",
      },
      {
        q: "¿Necesita el chatbot su propia base de conocimiento?",
        a: "Normalmente no. Los bots de soporte con IA suelen responder a partir de tu centro de ayuda actual o de una lista aprobada de preguntas y respuestas; los agentes de IA de Zendesk, por ejemplo, generan respuestas a partir de las fuentes de conocimiento conectadas. Mantener una sola fuente evita respuestas contradictorias.",
      },
      {
        q: "¿Puede un chatbot a medida crear tickets en Zendesk o Freshdesk?",
        a: "Sí. Ambos helpdesks ofrecen un endpoint REST para crear tickets (POST /api/v2/tickets), así que un bot puede abrir un ticket con la transcripción y los campos recogidos cuando hace el traspaso.",
      },
      {
        q: "¿Tengo que avisar a los clientes de que hablan con un bot?",
        a: "En la UE, el artículo 50 del Reglamento de IA exige que, a partir del 2 de agosto de 2026, los chatbots informen a las personas de que interactúan con una IA, salvo que sea evidente. Decirlo en el primer mensaje del bot es la forma más sencilla.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Customizing the Knowledge reply in an AI agent with agentic AI",
        url: "https://support.zendesk.com/hc/en-us/articles/10448933203994-Customizing-the-Knowledge-reply-in-an-AI-agent-with-agentic-AI",
      },
      {
        label: "Zendesk Help Center — Managing third-party bots in Admin Center",
        url: "https://support.zendesk.com/hc/en-us/articles/5064149334426-Managing-third-party-bots-in-Admin-Center",
      },
      {
        label: "Zendesk Developer Docs — Switchboard",
        url: "https://developer.zendesk.com/documentation/conversations/messaging-platform/programmable-conversations/switchboard/",
      },
      {
        label: "Zendesk Developer Docs — Tickets API",
        url: "https://developer.zendesk.com/api-reference/ticketing/tickets/tickets/",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "Freshdesk Developers — API reference (Create a ticket)",
        url: "https://developers.freshdesk.com/api/",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["chatbot-to-human-handoff", "website-chatbot-for-support", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 2. Bot de voz con IA para atención al cliente
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-voice-bot-for-customer-service",
    slug: "bot-de-voz-ia-atencion-al-cliente",
    category: "services",
    navLabel: "Bot de voz IA para llamadas",
    primaryKeyword: "bot de voz con IA para atención al cliente",
    title: "Bot de voz con IA para atención al cliente | TascaLab",
    description:
      "Cómo funciona un bot de voz con IA para atención al cliente: telefonía, voz a texto, lógica de IA y texto a voz, más transferencias, IVR frente a bot y la FCC.",
    h1: "Bot de voz con IA para atención al cliente: cómo funciona la automatización de llamadas entrantes",
    intro:
      "Un bot de voz con IA para atención al cliente contesta las llamadas entrantes, averigua qué necesita quien llama, resuelve las peticiones sencillas o recoge los datos, y transfiere la llamada a una persona cuando corresponde. Técnicamente encadena cuatro piezas —telefonía, voz a texto, un modelo de lenguaje o una lógica de diálogo, y texto a voz—, y el traspaso a tu equipo importa tanto como lo natural que suene la voz.",
    keyFacts: [
      "Un IVR tradicional funciona con pulsaciones de teclas (DTMF); el verbo Gather de Twilio usa DTMF por defecto y hay que configurarlo para que acepte voz y transcriba a quien llama.",
      "Los Media Streams bidireccionales de Twilio transportan el audio de la llamada en mu-law a 8 kHz, en un solo canal y codificado en base64, a través de un WebSocket.",
      "Zendesk permite que un agente de IA de voz externo atienda primero las llamadas y escale a un agente en directo mediante una línea SIP-IN.",
      "La resolución de la FCC de febrero de 2024 considera «artificiales» las voces generadas por IA a efectos de la TCPA, así que las llamadas hechas con ellas suelen requerir consentimiento expreso previo.",
    ],
    sections: [
      {
        heading: "Cómo funciona un bot de voz para llamadas entrantes",
        blocks: [
          {
            type: "p",
            text: "Todos los bots de voz para llamadas entrantes siguen el mismo ciclo, sean cuales sean los proveedores que uses:",
          },
          {
            type: "ol",
            items: [
              "Telefonía. La llamada llega a un número de teléfono o a un troncal SIP, y el proveedor de telefonía se la pasa a tu aplicación, ya sea pidiendo instrucciones de llamada a tu servidor o enviándole el audio en streaming.",
              "Voz a texto. Se transcribe lo que dice quien llama. Con el verbo Gather de Twilio configurado para aceptar voz, Twilio envía la transcripción (SpeechResult) junto con una puntuación Confidence a tu action URL.",
              "Comprensión y lógica. Un modelo de lenguaje o un diálogo basado en reglas decide qué quiere quien llama y qué hacer a continuación: responder, hacer una pregunta de seguimiento, consultar algo mediante una API o transferir.",
              "Texto a voz. La respuesta se sintetiza en audio y se reproduce a quien llama.",
              "Repetir o traspasar. El ciclo continúa hasta que se resuelve la petición o se transfiere la llamada, y el resultado se registra en tu helpdesk.",
            ],
          },
          {
            type: "p",
            text: "Hay dos formas principales de montarlo. En una configuración por turnos, la plataforma recoge una intervención cada vez y tu servidor responde con nuevas instrucciones; Twilio, por ejemplo, continúa la llamada con el TwiML que devuelve tu action URL. En una configuración en streaming, el audio fluye de forma continua por un WebSocket: los Media Streams bidireccionales de Twilio, que se inician con las instrucciones Connect y Stream de TwiML, entregan audio mu-law codificado en base64 a 8.000 Hz en un solo canal, y tu servidor devuelve audio en el mismo formato.",
          },
          {
            type: "p",
            text: "Entre ambas hay capas gestionadas. ConversationRelay de Twilio, por ejemplo, se encarga por sí mismo de la voz a texto y del texto a voz e intercambia texto con tu servidor a través de un WebSocket seguro, de modo que tu código trabaja con palabras en lugar de con audio en bruto. También tiene ajustes para las interrupciones, porque quienes llaman hablan por encima de los bots; en una configuración directa con Media Streams, tu servidor envía un mensaje «clear» para descartar el audio en búfer que aún no se ha reproducido.",
          },
        ],
      },
      {
        heading: "IVR frente a bot de voz conversacional",
        blocks: [
          {
            type: "table",
            caption: "Un menú IVR comparado con un bot de voz conversacional",
            head: ["", "IVR tradicional", "Bot de voz conversacional"],
            rows: [
              ["Entrada de quien llama", "Pulsaciones de teclas (DTMF) en un menú fijo", "Habla natural, transcrita e interpretada"],
              [
                "Estructura",
                "Árbol de menús: «pulsa 1 para facturación, 2 para pedidos»",
                "Pregunta abierta como «¿En qué puedo ayudarte?», seguida de la detección de la intención",
              ],
              [
                "Funciona bien para",
                "Un número reducido de opciones de enrutamiento previsibles",
                "Muchas peticiones distintas, y recoger datos con las propias palabras de quien llama",
              ],
              [
                "Puntos débiles",
                "Menús largos, y llamadas cuyo problema no encaja en ninguna opción",
                "Errores de comprensión en líneas con ruido; necesita pasos de confirmación y alternativas",
              ],
              [
                "Qué información obtienes",
                "Qué ruta del menú eligió quien llama",
                "Una transcripción, la intención detectada y los campos recogidos",
              ],
            ],
          },
          {
            type: "p",
            text: "No tienes por qué elegir uno solo. Una opción es un breve menú de teclas para elegir el idioma, seguido de un paso conversacional. Con el verbo Gather de Twilio, la entrada puede configurarse para aceptar tanto pulsaciones como voz en la misma pregunta.",
          },
        ],
      },
      {
        heading: "Pasar la llamada a una persona",
        blocks: [
          {
            type: "p",
            text: "Las plataformas de telefonía distinguen dos tipos de transferencia. En la terminología de Twilio, una transferencia en frío (cold transfer) añade al nuevo participante a la llamada, pero quien la inicia se desconecta antes de que el nuevo participante conteste; una transferencia en caliente (warm transfer) permite que los tres hablen antes de que salga quien la inició. Twilio recomienda conectar las llamadas entre clientes y agentes mediante una conferencia, que es lo que hace posibles ambos patrones.",
          },
          {
            type: "p",
            text: "Para un bot, la versión útil de la transferencia en caliente consiste en pasar contexto en lugar de hablar: crear o actualizar un ticket con la transcripción, la intención detectada y los datos recogidos antes de que el agente descuelgue, para que no empiece de cero. Buenos momentos para transferir:",
          },
          {
            type: "ul",
            items: [
              "Quien llama pide hablar con una persona: atiende la petición de inmediato, no después de dos preguntas más.",
              "El bot ha entendido mal a quien llama dos veces seguidas.",
              "La petición tiene que ver con pagos, reclamaciones o cualquier cosa que el bot no esté autorizado a decidir.",
              "Quien llama es un cliente prioritario conocido, si tu enrutamiento distingue a estos clientes.",
            ],
          },
          {
            type: "p",
            text: "En Zendesk, un agente de IA de voz externo puede contestar primero una llamada y escalarla a un agente de Zendesk mediante una línea SIP-IN. El bot puede crear un ticket y vincularlo a la llamada pasando el número de ticket en la cabecera SIP X-Zendesk-Ticket-Id; Zendesk autentica las llamadas SIP-IN con listas de control de acceso por IP. Zendesk también ofrece sus propios agentes de IA de voz, que al escalar añaden al ticket la transcripción, un resumen generado por IA y la intención detectada.",
          },
        ],
      },
      {
        heading: "Normativa: qué se aplica a los bots de voz",
        blocks: [
          {
            type: "p",
            text: "Estados Unidos. En febrero de 2024, la FCC emitió una resolución declarativa (FCC 24-17) que confirma que las restricciones de la TCPA a las llamadas que usan una «voz artificial o pregrabada» abarcan las tecnologías de IA actuales que generan voces humanas. Por tanto, las llamadas hechas con ellas suelen requerir el consentimiento expreso previo de quien recibe la llamada, salvo que tengan un fin de emergencia o se aplique una exención. La resolución se refiere a llamadas dirigidas a consumidores, como las robocalls. Un bot que contesta las llamadas que tus clientes te hacen es una situación distinta, pero cualquier llamada saliente que haga el bot —devoluciones de llamada, recordatorios, encuestas— está sujeta a estas normas.",
          },
          {
            type: "p",
            text: "Unión Europea. El artículo 50 del Reglamento de IA se aplica a partir del 2 de agosto de 2026 y exige que los sistemas de IA que interactúan directamente con personas se diseñen de modo que esas personas sepan que están tratando con una IA, salvo que sea evidente. Las preguntas frecuentes de la Comisión indican que hay que informar a las personas desde el inicio de la primera interacción. Para un bot de voz, la respuesta práctica es un breve aviso en el saludo.",
          },
          {
            type: "note",
            text: "Esto es información general, no asesoramiento jurídico. Si tu bot hace llamadas salientes o trabajas en un sector regulado, comprueba las normas que se te aplican.",
          },
        ],
      },
      {
        heading: "Decisiones de diseño de las que depende un bot de voz",
        blocks: [
          {
            type: "ul",
            items: [
              "Informa y fija expectativas en una sola frase: es un asistente automatizado, y esto es en lo que puede ayudar.",
              "Usa frases cortas y pregunta una sola cosa cada vez; quien llama no puede volver atrás para releer.",
              "Repite números, direcciones de email e identificadores de pedido antes de actuar sobre ellos.",
              "Explica cómo hablar con una persona y asegúrate de que esa vía funciona en cada paso.",
              "Registra cada llamada en tu helpdesk con la transcripción y el resultado, para ver por qué llama realmente la gente.",
              "Planifica el horario fuera de oficina: toma los datos, crea un ticket y promete solo devoluciones de llamada que alguien vaya a hacer de verdad.",
            ],
          },
        ],
      },
      {
        heading: "Cómo crea TascaLab bots de voz",
        blocks: [
          {
            type: "p",
            text: "El paquete Voice Bot de TascaLab cubre llamadas entrantes, triaje y traspaso a tu equipo, por un precio único de 1.100–1.600 USD. El bot se conecta a las herramientas que ya usas —Zendesk, Freshdesk, Jira, Slack o sistemas internos— mediante API y webhooks, de modo que los resultados de las llamadas llegan como tickets o mensajes que tu equipo ya sigue. Está pensado como un filtro delante de tu equipo, no como su sustituto.",
          },
          {
            type: "p",
            text: "La mayoría de las implantaciones llevan 1–3 semanas. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre un IVR y un bot de voz con IA?",
        a: "Un IVR dirige a quien llama a través de un menú fijo, normalmente con pulsaciones de teclas (DTMF). Un bot de voz conversacional transcribe lo que dice quien llama, identifica la intención y puede responder, recoger datos o transferir la llamada.",
      },
      {
        q: "¿Puede un bot de voz transferir llamadas a un agente en directo?",
        a: "Sí. Las plataformas de telefonía admiten transferencias en frío, en las que el bot se desconecta antes de que conteste el agente, y transferencias en caliente, en las que los participantes coinciden en la llamada. En Zendesk, un agente de IA de voz externo puede escalar a un agente en directo mediante una línea SIP-IN.",
      },
      {
        q: "¿Prohíbe la FCC los bots de voz con IA?",
        a: "No. Su resolución de febrero de 2024 establece que las voces generadas por IA cuentan como «artificiales» a efectos de la TCPA, así que las llamadas hechas con ellas suelen requerir el consentimiento expreso previo de quien recibe la llamada. Se refiere a llamadas dirigidas a consumidores, por lo que importa sobre todo si tu bot hace llamadas salientes.",
      },
      {
        q: "¿Tengo que avisar a quien llama de que habla con un bot?",
        a: "En la UE, el artículo 50 del Reglamento de IA exige, a partir del 2 de agosto de 2026, que se informe a las personas cuando interactúan directamente con un sistema de IA, salvo que sea evidente. Un aviso de una frase en el saludo es la forma sencilla de cumplirlo.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — TwiML Voice: Gather",
        url: "https://www.twilio.com/docs/voice/twiml/gather",
      },
      {
        label: "Twilio Docs — Media Streams Overview",
        url: "https://www.twilio.com/docs/voice/media-streams",
      },
      {
        label: "Twilio Docs — TwiML Voice: ConversationRelay",
        url: "https://www.twilio.com/docs/voice/twiml/connect/conversationrelay",
      },
      {
        label: "Twilio Docs — Call Control Concepts (warm and cold transfer)",
        url: "https://www.twilio.com/docs/taskrouter/contact-center-blueprint/call-control-concepts",
      },
      {
        label: "Zendesk Help Center — Connecting an external AI agent using a SIP-IN line",
        url: "https://support.zendesk.com/hc/en-us/articles/8397061704474-Connecting-an-external-AI-agent-using-a-SIP-IN-line",
      },
      {
        label: "Zendesk Help Center — Announcing the general availability of voice AI agents",
        url: "https://support.zendesk.com/hc/en-us/articles/11183058023450-Announcing-the-general-availability-of-voice-AI-agents",
      },
      {
        label: "FCC — Declaratory Ruling FCC 24-17 (AI-generated voices under the TCPA)",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf",
      },
      {
        label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)",
        url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "chatbot-to-human-handoff", "eu-ai-act-chatbot-rules"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 3. Enrutamiento automático de tickets
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ticket-routing-automation",
    slug: "enrutamiento-automatico-de-tickets",
    category: "services",
    navLabel: "Enrutamiento automático de tickets",
    primaryKeyword: "enrutamiento automático de tickets",
    title: "Enrutamiento automático de tickets: métodos | TascaLab",
    description:
      "Enrutamiento automático de tickets: reglas, round-robin, por carga y por habilidades, triaje con IA y cómo lo hacen Zendesk, Freshdesk y Jira.",
    h1: "Enrutamiento automático de tickets: métodos, herramientas y configuración",
    intro:
      "El enrutamiento automático de tickets asigna cada ticket entrante al grupo o agente adecuado sin que nadie tenga que clasificar la cola a mano. Implica dos decisiones —de qué trata el ticket (tema, idioma, prioridad, cliente) y quién debe atenderlo— que se toman con métodos como reglas, round-robin o asignación por carga o por habilidades. Zendesk, Freshdesk y Jira Service Management lo admiten de forma nativa.",
    keyFacts: [
      "El enrutamiento omnicanal de Zendesk asigna por defecto al agente con más capacidad libre; round robin es el método alternativo.",
      "El motor Omniroute de Freshdesk es la base de su asignación de tickets por round-robin, por carga y por habilidades.",
      "La acción de asignar de la automatización de Jira puede repartir el trabajo por carga equilibrada, round-robin o selección aleatoria.",
      "El triaje inteligente (intelligent triage) de Zendesk clasifica los tickets nuevos por intención, sentimiento, idioma y entidades, y los disparadores pueden enrutar según los resultados.",
    ],
    sections: [
      {
        heading: "Dos pasos: categorizar y después asignar",
        blocks: [
          {
            type: "p",
            text: "El enrutamiento suele fallar en el primer paso. Si los tickets llegan sin una categoría fiable, hasta un buen método de asignación los manda a las personas equivocadas. Por eso conviene tratar el enrutamiento como dos decisiones separadas: qué es este ticket y quién debe atenderlo; primero el grupo y después el agente. Señales que puedes usar para categorizar un ticket:",
          },
          {
            type: "ul",
            items: [
              "Punto de entrada: por qué dirección de email, formulario web, línea telefónica o widget de chat llegó el ticket.",
              "Campos del formulario: un tipo de solicitud o un desplegable que eligió el cliente.",
              "Datos del solicitante: la organización, el plan o una etiqueta VIP en el usuario.",
              "Contenido: palabras clave en el asunto o la descripción, o una clasificación por IA de la intención, el idioma y el sentimiento.",
            ],
          },
          {
            type: "p",
            text: "La clasificación por IA ya viene integrada en los principales helpdesks. El triaje inteligente de Zendesk clasifica los tickets nuevos por intención, sentimiento, idioma y entidades a partir del asunto y el primer comentario público, y añade los resultados como campos de ticket que pueden usar los disparadores, las vistas y el enrutamiento. Trátalo como cualquier otra señal: revisa una muestra de sus clasificaciones antes de enrutar basándote en ellas.",
          },
        ],
      },
      {
        heading: "Comparativa de métodos de enrutamiento",
        blocks: [
          {
            type: "table",
            caption: "Métodos habituales de enrutamiento de tickets",
            head: ["Método", "Cómo se elige al responsable", "Encaja bien con", "Ojo con"],
            rows: [
              [
                "Basado en reglas",
                "Condiciones si/entonces sobre canal, formulario, palabras clave o solicitante fijan el grupo, el agente o la prioridad",
                "Categorías estables, gestión de clientes VIP, colas por idioma",
                "Reglas que se solapan y el orden de las reglas; las reglas se quedan obsoletas cuando cambian los productos",
              ],
              [
                "Round-robin",
                "El siguiente agente disponible, por turno",
                "Tickets similares atendidos por agentes de nivel similar",
                "No tiene en cuenta la complejidad del ticket salvo que se combine con límites de capacidad",
              ],
              [
                "Por carga",
                "El agente con más capacidad libre o con menos tickets abiertos",
                "Tickets de duración desigual; evitar la sobrecarga",
                "Depende de que el estado de los agentes sea preciso y de que los límites sean razonables",
              ],
              [
                "Por habilidades",
                "Un agente cuyas habilidades coinciden con los atributos del ticket, como el idioma o el producto",
                "Equipos especializados y multilingües",
                "Los tickets que no coinciden con ninguna habilidad pueden quedarse esperando; necesitas una alternativa",
              ],
              [
                "Triaje asistido por IA",
                "Un modelo predice la categoría, la prioridad o el grupo, y después asigna uno de los métodos anteriores",
                "Grandes volúmenes de tickets de texto libre",
                "Clasificaciones erróneas; revisa muestras con regularidad",
              ],
            ],
          },
          {
            type: "p",
            text: "En la práctica, estos métodos se combinan por capas: las reglas o la IA deciden el grupo, y la asignación por round-robin, por carga o por habilidades elige al agente dentro de él.",
          },
        ],
      },
      {
        heading: "Cómo lo hacen Zendesk, Freshdesk y Jira Service Management",
        blocks: [
          {
            type: "table",
            caption: "Opciones de enrutamiento nativas por helpdesk",
            head: ["Helpdesk", "Capa basada en reglas", "Asignación automática de agentes"],
            rows: [
              [
                "Zendesk",
                "Los disparadores comprueban condiciones como el canal, la organización o las etiquetas y fijan el «Group» o el «Assignee»",
                "El enrutamiento omnicanal usa el estado, la capacidad y las habilidades de los agentes; por defecto prioriza la mayor capacidad libre, con round robin como alternativa",
              ],
              [
                "Freshdesk",
                "Las reglas de automatización de creación de tickets comprueban solicitante, asunto, descripción, etiquetas, origen o formulario y asignan un grupo o un agente",
                "Omniroute admite asignación por round-robin, por carga y por habilidades",
              ],
              [
                "Jira Service Management",
                "Reglas de automatización formadas por desencadenadores, condiciones y acciones",
                "La acción de asignar reparte el trabajo por carga equilibrada, round-robin o selección aleatoria",
              ],
            ],
          },
          {
            type: "p",
            text: "Zendesk. El enrutamiento omnicanal solo envía trabajo a los agentes cuyo estado los hace elegibles para ese canal, y las reglas de capacidad limitan cuántos tickets por canal puede tener un agente a la vez. Las habilidades pueden marcarse como obligatorias u opcionales: las opcionales se descartan tras un tiempo de espera de habilidades para que el ticket llegue a un grupo más amplio de agentes, mientras que las obligatorias nunca caducan. El orden de la cola depende de la antigüedad del ticket, de la prioridad o del incumplimiento de SLA más próximo, según tu plan y tu configuración.",
          },
          {
            type: "p",
            text: "Freshdesk. Por defecto, las reglas de creación de tickets se detienen en la primera regla activa cuyas condiciones se cumplen, así que coloca las reglas específicas por encima de las genéricas; también puedes cambiar a ejecutar todas las reglas que coincidan. Freshdesk aconseja asignar un grupo antes que un agente, porque asignar un agente sin grupo puede dejar el ticket sin asignar. En la asignación por habilidades, un ticket que no coincide con ninguna habilidad queda sin asignar hasta que alguien lo asigna, así que crea una habilidad de respaldo con el grupo como condición. En round-robin, Omniroute se salta a los agentes que han llegado a su límite y da el siguiente ticket al agente cuya última asignación es la más antigua.",
          },
          {
            type: "p",
            text: "Jira Service Management. El enrutamiento se construye con reglas de automatización: un desencadenador como un nuevo elemento de trabajo, condiciones sobre el tipo de solicitud o los campos, y acciones como asignar. Con el método de carga equilibrada, cada persona recibe una parte igual de los elementos de trabajo dentro de un ámbito que defines con JQL; sin una restricción JQL, la regla cuenta los elementos asignados en todo el proyecto. Round-robin recorre por orden a las personas de la lista.",
          },
        ],
      },
      {
        heading: "Cómo configurar un enrutamiento que funcione a largo plazo",
        blocks: [
          {
            type: "ol",
            items: [
              "Revisa unas cuantas semanas de tickets recientes: enumera las categorías principales y anota quién resolvió realmente cada una.",
              "Define los grupos antes que los agentes. Primero enruta al equipo correcto; elegir al agente es un segundo paso.",
              "Usa primero tus señales más fiables —puntos de entrada y campos de formulario— y añade clasificación por palabras clave o por IA para el resto.",
              "Elige un método de asignación por grupo: round-robin para trabajo uniforme, por carga cuando el esfuerzo por ticket varía, por habilidades cuando importa la especialización.",
              "Añade una alternativa para que nada se quede sin asignar: una regla general, una habilidad de respaldo o una cola de triaje con un responsable.",
              "Etiqueta las decisiones de enrutamiento para poder sacar informes sobre ellas, y revisa cada mes los tickets mal enrutados.",
            ],
          },
          {
            type: "note",
            text: "El enrutamiento cambia quién ve primero un ticket, así que afecta a tus tiempos de respuesta. Revisa tus informes de SLA durante un par de semanas después de cualquier cambio en el enrutamiento.",
          },
        ],
      },
      {
        heading: "Cómo configura TascaLab el enrutamiento de tickets",
        blocks: [
          {
            type: "p",
            text: "El servicio Ticket Routing & Categorization de TascaLab (600–950 USD, pago único) funciona sobre el helpdesk que ya tienes —Zendesk, Freshdesk o Jira—, con sus reglas nativas cuando bastan, y con API, webhooks o Make/n8n cuando no, por ejemplo para categorizar los tickets antes de que tu enrutamiento nativo los asigne. No hay que cambiar de plataforma.",
          },
          {
            type: "p",
            text: "La mayoría de las implantaciones llevan 1–3 semanas. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y una llamada de auditoría gratuita de 30 minutos es un buen punto de partida para analizar tu cola actual.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre el enrutamiento round-robin y el basado en la carga?",
        a: "Round-robin da el siguiente ticket al siguiente agente por turno. El enrutamiento por carga se lo da al agente con más capacidad libre o con menos tickets abiertos, lo que encaja con equipos cuyos tickets varían mucho en esfuerzo.",
      },
      {
        q: "¿Qué pasa con los tickets que no coinciden con ninguna regla ni habilidad de enrutamiento?",
        a: "Depende de la herramienta. En la asignación por habilidades de Freshdesk, un ticket sin coincidencia queda sin asignar hasta que alguien lo asigna, por eso Freshdesk recomienda una habilidad de respaldo. En Zendesk, las habilidades opcionales se descartan tras un tiempo de espera, mientras que las obligatorias nunca caducan.",
      },
      {
        q: "¿Puede la IA categorizar los tickets antes del enrutamiento?",
        a: "Sí. El triaje inteligente de Zendesk, por ejemplo, clasifica los tickets por intención, sentimiento e idioma, y los disparadores pueden enrutar según esos campos. También puedes clasificar los tickets con un modelo externo y escribir el resultado en un campo del ticket mediante la API.",
      },
      {
        q: "¿Tengo que cambiar de helpdesk para automatizar el enrutamiento?",
        a: "No. Zendesk, Freshdesk y Jira Service Management incluyen funciones nativas de enrutamiento y asignación, y se puede añadir lógica personalizada mediante sus API y webhooks.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About omnichannel routing",
        url: "https://support.zendesk.com/hc/en-us/articles/4409149119514-About-omnichannel-routing",
      },
      {
        label: "Zendesk Help Center — About using skills to route tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/5833468891674-About-using-skills-to-route-tickets",
      },
      {
        label: "Zendesk Help Center — Workflow: Auto-assigning tickets to a specific agent or group",
        url: "https://support.zendesk.com/hc/en-us/articles/7384207242778-Workflow-Auto-assigning-tickets-to-a-specific-agent-or-group",
      },
      {
        label: "Zendesk Help Center — About intelligent triage",
        url: "https://support.zendesk.com/hc/en-us/articles/4964463770650-About-intelligent-triage",
      },
      {
        label: "Freshdesk Support — Configure Freshdesk Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/238979-ticket-assignments-with-freshdesk-omniroute-",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Support — Automation rules that run on ticket creation",
        url: "https://support.freshdesk.com/support/solutions/articles/37614-setting-up-automation-rules-to-run-on-ticket-creation",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
    ],
    related: ["zendesk-automation", "freshdesk-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 4. Informes automáticos de atención al cliente
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "automated-support-reporting",
    slug: "informes-automaticos-atencion-al-cliente",
    category: "services",
    navLabel: "Informes automáticos de soporte",
    primaryKeyword: "informes automáticos de atención al cliente",
    title: "Informes automáticos de atención al cliente: guía | TascaLab",
    description:
      "Informes automáticos de atención al cliente: qué métricas seguir y cómo programar informes de Zendesk, Freshdesk o Jira por email, Slack o Google Sheets.",
    h1: "Informes automáticos de atención al cliente: métricas, programación y envío",
    intro:
      "Los informes automáticos de atención al cliente hacen llegar tus cifras clave —volumen de tickets, tiempos de respuesta y de resolución, cumplimiento de SLA, backlog— a las personas adecuadas de forma programada, sin que nadie tenga que exportar datos a mano. Empieza por los informes programados que ya incluye tu helpdesk; cuando no encajen, extrae los datos mediante la API y llévalos a Google Sheets, Slack o el email.",
    keyFacts: [
      "Zendesk Explore puede enviar por email un dashboard compartido de forma periódica, con una programación de hasta 12 meses vista.",
      "En Freshdesk Analytics se pueden programar los informes personalizados; los informes predefinidos (curated) hay que clonarlos antes.",
      "Las suscripciones a filtros de Jira envían por email los resultados de búsquedas guardadas de forma programada, también con expresiones cron; solo se envían los primeros 200 resultados.",
      "Un webhook entrante (incoming webhook) de Slack publica un mensaje en un canal a partir de un payload JSON sencillo.",
    ],
    sections: [
      {
        heading: "Qué suelen incluir los informes de los equipos de soporte",
        blocks: [
          {
            type: "p",
            text: "Un informe de soporte útil responde a tres preguntas: ¿damos abasto?, ¿somos lo bastante rápidos? y ¿están satisfechos los clientes? Estas métricas cubren la mayor parte:",
          },
          {
            type: "table",
            caption: "Métricas habituales en los informes de atención al cliente",
            head: ["Métrica", "Qué mide", "Para qué sirve"],
            rows: [
              [
                "Tickets creados, resueltos y abiertos",
                "El volumen, y si el backlog está creciendo",
                "Revisiones diarias, decisiones de plantilla",
              ],
              [
                "Tiempo de primera respuesta",
                "Tiempo desde la creación del ticket hasta la primera respuesta pública de un agente (definición de Zendesk)",
                "Capacidad de respuesta, seguimiento de SLA",
              ],
              [
                "Tiempo de primera resolución y de resolución completa",
                "Tiempo hasta la primera resolución frente a la última, que difieren cuando se reabren tickets",
                "Calidad del proceso, detección de problemas de reapertura",
              ],
              [
                "Cumplimiento de SLA",
                "Porcentaje de tickets que cumplieron los objetivos de primera respuesta o de resolución",
                "Alertas y resúmenes semanales",
              ],
              [
                "Resolución en un solo contacto",
                "Tickets resueltos con una sola respuesta del agente",
                "Detectar qué se podría automatizar o documentar",
              ],
              [
                "Satisfacción del cliente (CSAT)",
                "Respuestas a encuestas tras resolver un ticket",
                "Tendencias semanales o mensuales",
              ],
              [
                "Tasa de traspaso del bot",
                "Porcentaje de conversaciones del bot que pasan a una persona, si usas un bot",
                "Ajustar el bot y su base de conocimiento",
              ],
            ],
          },
          {
            type: "p",
            text: "Las definiciones importan más que el dashboard. Decide si informas de medianas o de medias, en horario laboral o en horas naturales, y qué tickets cuentan (fusionados, spam, solo bot). Pon las definiciones por escrito y mantenlas estables; si no, las comparaciones semana a semana dejan de tener sentido.",
          },
        ],
      },
      {
        heading: "Informes programados que tu helpdesk ya ofrece",
        blocks: [
          {
            type: "table",
            caption: "Opciones nativas de informes programados",
            head: ["Herramienta", "Cómo funciona la programación", "Qué reciben los destinatarios", "Límites que conviene conocer"],
            rows: [
              [
                "Zendesk Explore",
                "En un dashboard compartido, «Share > Schedule delivery»; define la hora, la periodicidad y una fecha de fin de hasta 12 meses vista",
                "Un email con la exportación del dashboard; entre los formatos están Excel (un archivo por pestaña) y PNG",
                "Las exportaciones de más de 25 MB llegan divididas en varios emails; el envío puede retrasarse respecto a la hora programada",
              ],
              [
                "Freshdesk Analytics",
                "Programa un informe personalizado; si quieres programar un informe predefinido, clónalo antes",
                "El informe en PDF, o widgets concretos en PDF o CSV",
                "Los widgets de los informes predefinidos no se pueden programar",
              ],
              [
                "Suscripciones a filtros de Jira",
                "Suscribe a un usuario o grupo a un filtro guardado, con una programación predefinida o una expresión cron",
                "Un email con la lista de elementos de trabajo que coinciden con el filtro",
                "Solo se envían los primeros 200 resultados; los resultados se evalúan para cada destinatario",
              ],
              [
                "Automatización de Jira",
                "Una regla programada busca elementos de trabajo con JQL y envía la lista",
                "Un email o un mensaje de Slack",
                "El envío a Slack necesita un webhook entrante de Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "Hay dos detalles de Zendesk que suelen pillar desprevenido a más de uno: los destinatarios se agrupan por idioma y zona horaria, con un email por grupo, y si un dashboard debe cubrir todo el día anterior, Zendesk aconseja programarlo para las 2:00 de la madrugada o más tarde.",
          },
          {
            type: "p",
            text: "La programación nativa es el primer paso correcto. Se queda corta cuando necesitas datos de varias herramientas en un mismo sitio, un resumen breve en lugar de un dashboard completo, cálculos personalizados o envíos a Slack desde una herramienta que no lo ofrece.",
          },
        ],
      },
      {
        heading: "Extraer datos mediante API hacia Sheets, Slack o el email",
        blocks: [
          {
            type: "p",
            text: "Cuando los informes integrados no encajan, un pequeño pipeline resuelve el problema. Los pasos son los mismos tanto si usas un script como una herramienta de automatización como Make o n8n:",
          },
          {
            type: "ol",
            items: [
              "Programar. Un disparador temporizado ejecuta el flujo cada día, cada semana o con el intervalo que necesites.",
              "Extraer. El flujo llama a la API del helpdesk para obtener los tickets que han cambiado desde la última ejecución. La Incremental Exports API de Zendesk está pensada para esto: devuelve los tickets actualizados desde una hora de inicio dada, y Zendesk recomienda su versión basada en cursor para un rendimiento más consistente.",
              "Calcular. Calcula las métricas con tus definiciones escritas y compáralas con el periodo anterior o con tus objetivos.",
              "Almacenar. Añade una fila por día o por semana a Google Sheets. El método spreadsheets.values.append de la Sheets API localiza la tabla en el rango que le pasas y añade las filas nuevas después de su última fila, lo que te da un historial continuo para hacer gráficos.",
              "Entregar. Publica un resumen breve en Slack mediante un webhook entrante —una URL única que acepta un payload JSON con el texto del mensaje y bloques opcionales de Block Kit— o envíalo por email con un enlace a la hoja o al dashboard completos.",
            ],
          },
          {
            type: "note",
            text: "Trata los tokens de API y las URL de webhook como secretos. Guárdalos en el almacén de credenciales de tu herramienta de automatización, no en la hoja ni en la plantilla del mensaje.",
          },
        ],
      },
      {
        heading: "Informes que la gente lee de verdad",
        blocks: [
          {
            type: "ul",
            items: [
              "Empieza con un puñado de cifras y su variación respecto al periodo anterior; enlaza al detalle en lugar de adjuntarlo.",
              "Separa las alertas de los informes. Un resumen semanal sirve para ver tendencias; un riesgo de incumplir el SLA merece su propio mensaje en el momento en que ocurre. La documentación de Atlassian, por ejemplo, muestra una regla de automatización programada de Jira que publica en Slack los elementos de trabajo a punto de incumplir su SLA.",
              "Envía a cada público aquello sobre lo que actúa: los agentes necesitan la cola de hoy; los responsables, las tendencias semanales.",
              "Asigna a cada métrica un responsable que pueda explicar los movimientos inusuales.",
              "Revisa el informe al cabo de un mes y elimina lo que nadie haya usado.",
            ],
          },
          {
            type: "p",
            text: "Un resumen semanal para el canal de un equipo puede limitarse a cinco líneas, cada una comparando esta semana con la anterior:",
          },
          {
            type: "ol",
            items: [
              "Tickets creados, resueltos y aún abiertos, con la variación del backlog.",
              "Mediana del tiempo de primera respuesta frente a tu objetivo.",
              "Mediana del tiempo de resolución completa, más el número de tickets reabiertos.",
              "Cumplimiento de SLA, con enlaces a los tickets que lo incumplieron.",
              "CSAT de la semana y un comentario destacado, si tus encuestas los recogen.",
            ],
          },
        ],
      },
      {
        heading: "Cómo configura TascaLab los informes automáticos",
        blocks: [
          {
            type: "p",
            text: "El servicio Automated Reports de TascaLab (500–900 USD, pago único) envía tus métricas de soporte por email o Slack de forma programada. Funciona sobre Zendesk, Freshdesk, Jira y tus herramientas internas mediante sus API y Make o n8n, así que no cambia nada en el día a día de tu equipo.",
          },
          {
            type: "p",
            text: "La mayoría de las implantaciones llevan 1–3 semanas. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puede Zendesk enviar informes por email automáticamente?",
        a: "Sí. En Zendesk Explore puedes programar envíos de un dashboard compartido, elegir la periodicidad y los destinatarios, y configurar la programación para que funcione durante un máximo de 12 meses.",
      },
      {
        q: "¿Puedo programar informes en Freshdesk?",
        a: "Sí, en el caso de los informes personalizados de Freshdesk Analytics; los informes predefinidos hay que clonarlos antes de poder programarlos. Los informes se envían en PDF, y los widgets pueden enviarse en PDF o CSV.",
      },
      {
        q: "¿Cómo envío datos de Jira Service Management a Slack de forma programada?",
        a: "Usa una regla de automatización de Jira con un desencadenador programado, una búsqueda de elementos de trabajo por JQL y una acción «Send Slack message» que publique a través de un webhook entrante de Slack.",
      },
      {
        q: "¿Qué métricas deben ir en un informe semanal de soporte?",
        a: "Normalmente el volumen de tickets y el backlog, el tiempo de primera respuesta, el tiempo de resolución, el cumplimiento de SLA y la satisfacción del cliente. Mantén fijas las definiciones para que la tendencia semana a semana tenga sentido.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Scheduling dashboard deliveries",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843602714-Scheduling-dashboard-deliveries",
      },
      {
        label: "Zendesk Help Center — Metrics and attributes for Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408827693594-Metrics-and-attributes-for-Zendesk-Support",
      },
      {
        label: "Zendesk Developer Docs — Incremental Exports",
        url: "https://developer.zendesk.com/api-reference/ticketing/ticket-management/incremental_exports/",
      },
      {
        label: "Freshdesk Support — Scheduling reports in Analytics",
        url: "https://support.freshdesk.com/support/solutions/articles/240703-scheduling-reports-in-analytics",
      },
      {
        label: "Atlassian Support — Manage filters (filter subscriptions)",
        url: "https://support.atlassian.com/jira-software-cloud/docs/manage-filters/",
      },
      {
        label: "Atlassian Support — Automation rule that sends a list of issues about to breach via Slack",
        url: "https://support.atlassian.com/automation/kb/automation-rule-to-send-list-of-issues-that-are-about-to-breach-via-slack/",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Google for Developers — Sheets API: spreadsheets.values.append",
        url: "https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets.values/append",
      },
    ],
    related: ["customer-support-metrics", "slack-support-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 5. Automatización del email de atención al cliente
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "customer-support-email-automation",
    slug: "automatizacion-email-atencion-al-cliente",
    category: "services",
    navLabel: "Automatización de email de soporte",
    primaryKeyword: "automatización del email de atención al cliente",
    title: "Automatización del email de atención al cliente | TascaLab",
    description:
      "Automatiza el email de atención al cliente: reenvía tu dirección de soporte a Zendesk o Freshdesk, configura SPF y DKIM, y confirma, enruta y escala los emails.",
    h1: "Automatización del email de atención al cliente: de la bandeja de entrada al ticket respondido",
    intro:
      "La automatización del email de atención al cliente convierte cada mensaje enviado a tu dirección de soporte en un ticket, confirma su recepción, lo envía al equipo adecuado y, cuando es seguro, lo responde, mientras las personas se quedan con los hilos que requieren criterio. No necesitas una bandeja de entrada nueva: reenvía tu dirección actual a Zendesk o Freshdesk, configura tu dominio de envío para que las respuestas se entreguen y, después, añade disparadores, clasificación e IA.",
    keyFacts: [
      "Todas las cuentas de Zendesk tienen una dirección de soporte del sistema con el formato support@yoursubdomain.zendesk.com.",
      "Zendesk recomienda el reenvío automático a nivel del servidor de correo en lugar de reenviar desde un cliente de email.",
      "Freshdesk solo convierte en tickets el email reenviado una vez que existe la regla de reenvío; también se pueden conectar directamente buzones de Gmail y Microsoft 365.",
      "En Zendesk, activar la firma DKIM antes de que los registros CNAME estén en el DNS provoca fallos de entrega.",
      "La función heredada de respuestas automáticas por email con artículos de Zendesk dejará de estar disponible a partir del 10 de diciembre de 2026.",
    ],
    sections: [
      {
        heading: "Paso 1: Convierte cada email de soporte en un ticket",
        blocks: [
          {
            type: "p",
            text: "Los clientes siguen escribiendo a la dirección que ya conocen, como soporte@tuempresa.com. Entre bastidores, ese buzón reenvía todo a tu helpdesk, que crea o actualiza un ticket por cada mensaje. Para el cliente no cambia nada, y tu equipo deja de trabajar desde una bandeja de entrada compartida.",
          },
          {
            type: "ul",
            items: [
              "Zendesk. Todas las cuentas tienen una dirección de soporte del sistema, support@yoursubdomain.zendesk.com. Añades tu propia dirección como dirección de soporte, configuras el reenvío en tu proveedor de email y después la verificas. Zendesk recomienda el reenvío automático a nivel de servidor, no el reenvío manual ni el reenvío automático desde un cliente de email, e indica que, después de corregir una configuración fallida, puede tardar hasta 48 horas en reconocerse.",
              "Freshdesk. Añade la dirección en «Admin > Channels > Email > New Support Email». Con el servidor de correo predeterminado de Freshworks, creas en tu buzón una regla de reenvío que envía el correo a la dirección que genera Freshdesk; los emails solo se convierten en tickets una vez que existe esa regla. Como alternativa, conecta directamente un buzón de Gmail o Microsoft 365 iniciando sesión.",
            ],
          },
          {
            type: "p",
            text: "Usa una dirección por finalidad —por ejemplo, soporte@, facturacion@ y partners@— en lugar de una única dirección para todo. Más adelante, cada dirección se convierte en una señal de enrutamiento que no te cuesta nada.",
          },
          {
            type: "note",
            text: "Haz la prueba con un mensaje desde una dirección externa. Zendesk suspende los emails que llegan desde una de tus propias direcciones de soporte, porque ese patrón puede provocar bucles de correo.",
          },
        ],
      },
      {
        heading: "Paso 2: Asegúrate de que tus respuestas se entregan",
        blocks: [
          {
            type: "p",
            text: "Cuando el helpdesk responde como soporte@tuempresa.com, envía en nombre de tu dominio, y los servidores de correo receptores comprueban que tiene permiso para hacerlo. Lo demuestras con registros DNS: SPF enumera los servicios autorizados a enviar en nombre de tu dominio, y DKIM añade una firma a cada mensaje. Es una tarea puntual para quien gestione tu DNS.",
          },
          {
            type: "table",
            caption: "Configuración del dominio de envío en Zendesk y Freshdesk",
            head: ["Helpdesk", "Registro", "Qué hacer", "Ojo con"],
            rows: [
              [
                "Zendesk",
                "SPF",
                "Añade include:mail.zendesk.com al registro TXT de SPF de tu dominio",
                "Un dominio solo puede tener un registro SPF; si otros servicios envían en tu nombre, combínalos en ese único registro",
              ],
              [
                "Zendesk",
                "DKIM",
                "Añade los registros CNAME de la guía de DKIM de Zendesk para cada dominio externo y después activa las firmas digitales en Admin Center",
                "Activar las firmas antes de que existan los registros CNAME provoca fallos de entrega",
              ],
              [
                "Freshdesk",
                "DKIM",
                "En «Admin > Channels > Email > Advanced Settings > Configure DKIM», publica los cuatro registros CNAME generados y haz clic en «Verify»",
                "Algunos proveedores de DNS, como GoDaddy, añaden tu dominio automáticamente, así que introduce solo el prefijo del host",
              ],
            ],
          },
          {
            type: "p",
            text: "El orden importa: primero los registros, después la activación. Si otro equipo o una agencia gestiona tu DNS, envíales los valores exactos de la documentación o de la pantalla de administración de tu helpdesk en lugar de volver a escribirlos.",
          },
        ],
      },
      {
        heading: "Paso 3: Confirma, clasifica y enruta al llegar",
        blocks: [
          {
            type: "p",
            text: "Cuando el correo empieza a entrar, las primeras automatizaciones se ejecutan en el momento en que se crea un ticket. En Zendesk, el email de confirmación procede de un disparador predeterminado, «Notify requester and CCs of received request». Edita su texto para que le diga al cliente algo útil:",
          },
          {
            type: "ul",
            items: [
              "La referencia del ticket, para que el cliente pueda citarla.",
              "Cuándo puede esperar una respuesta, solo si puedes cumplirlo.",
              "Enlaces a artículos del centro de ayuda sobre tus preguntas más habituales.",
              "Qué incluir para recibir ayuda más rápido, como un número de pedido o el email de la cuenta.",
            ],
          },
          {
            type: "p",
            text: "Después, enruta. La señal más sencilla es la dirección a la que se envió el email. El flujo documentado por Zendesk es un disparador con las condiciones «Ticket Is Created» y «Ticket Received at Is» tu dirección de facturación, más una acción que fija el grupo, junto con una vista que muestra a ese grupo sus tickets.",
          },
          {
            type: "p",
            text: "A continuación viene el enrutamiento según el contenido. Las reglas de palabras clave en el asunto funcionan durante un tiempo y luego fallan a medida que los clientes formulan las cosas de otra manera. Un paso de clasificación —un modelo de IA o un conjunto de reglas que se ejecutan a través de la API del helpdesk— lee el asunto y el cuerpo, escribe la categoría, el idioma y la urgencia en campos del ticket, y extrae datos como los números de pedido para que los agentes no tengan que buscarlos. Después, tus disparadores o reglas de automatización enrutan según esos campos.",
          },
          {
            type: "note",
            text: "Las respuestas automáticas pueden rebotar entre sistemas. Zendesk suspende los mensajes entrantes con cabeceras de respuesta automática como Auto-Submitted, Precedence o X-Autoresponder, y cuando un mismo remitente envía un gran número de emails en poco tiempo, los suspende y bloquea la dirección durante una hora. Revisa los tickets suspendidos con regularidad para que el mensaje de un cliente real no se quede ahí.",
          },
        ],
      },
      {
        heading: "Paso 4: Responde los sencillos y deja el resto en manos de personas",
        blocks: [
          {
            type: "p",
            text: "Muchos emails de soporte plantean las mismas pocas preguntas. Durante mucho tiempo, Zendesk resolvió esto con las respuestas automáticas con artículos: un email que recomienda hasta tres artículos del centro de ayuda y permite al cliente cerrar la solicitud. Esa función pasó a ser heredada (legacy) el 31 de julio de 2025 y dejará de estar disponible a partir del 10 de diciembre de 2026. Su sustituto en Zendesk son los agentes de IA, que ofrecen respuestas de IA generativa en los canales de mensajería, email y formulario web. Si todavía dependes de las respuestas automáticas, planifica el cambio ya.",
          },
          {
            type: "p",
            text: "Cualquier respuesta de IA es tan buena como los artículos en los que se basa, así que arregla la base de conocimiento antes de activar las respuestas automáticas. Después decide dónde termina la automatización. Pasa el hilo a una persona cuando:",
          },
          {
            type: "ul",
            items: [
              "El cliente pide hablar con una persona, o responde que la respuesta no le ha servido.",
              "El tema es facturación, reembolsos, asuntos legales, seguridad o una reclamación.",
              "El tono es de enfado, o el hilo ya ha ido y vuelto varias veces.",
              "Hay varias personas en CC, o el email forma parte de una conversación en curso sobre la cuenta.",
              "Responder implicaría modificar una cuenta que la automatización no puede verificar.",
            ],
          },
          {
            type: "p",
            text: "Haz visible el traspaso: etiqueta el ticket, sube su prioridad si hace falta y mantenlo todo en un solo ticket para que el agente vea lo que el cliente ya ha recibido.",
          },
        ],
      },
      {
        heading: "Cómo automatiza TascaLab el email de soporte",
        blocks: [
          {
            type: "p",
            text: "TascaLab lo configura sobre el helpdesk que ya usas —Zendesk, Freshdesk o Jira—, con disparadores y reglas nativas cuando bastan, y con API, webhooks o Make/n8n cuando no. No hay que cambiar de plataforma. La clasificación y el enrutamiento del email entrante encajan en el servicio Ticket Routing & Categorization (600–950 USD, pago único); los flujos de varios pasos, como leer un número de pedido en un email y buscarlo en otro sistema, corresponden a Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "La mayoría de las implantaciones llevan 1–3 semanas. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y una llamada de auditoría gratuita de 30 minutos es un buen punto de partida para analizar tu flujo de email actual.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo mantener mi propia dirección de email de soporte?",
        a: "Sí. En Zendesk la añades como dirección de soporte y reenvías su correo a Zendesk, preferiblemente con reenvío automático a nivel de servidor. En Freshdesk la reenvías a la dirección que genera Freshdesk, o conectas directamente un buzón de Gmail o Microsoft 365.",
      },
      {
        q: "¿Necesito SPF y DKIM para el email del helpdesk?",
        a: "Si el helpdesk envía las respuestas desde tu propio dominio, configura ambos. Zendesk te pide añadir include:mail.zendesk.com a tu registro SPF y añadir sus registros CNAME antes de activar la firma DKIM. Freshdesk genera cuatro registros CNAME de DKIM para que los publiques y los verifiques.",
      },
      {
        q: "¿Por qué el email de un cliente no se ha convertido en un ticket en Zendesk?",
        a: "Revisa los tickets suspendidos. Zendesk suspende los mensajes que identifica como respuestas automáticas, los mensajes enviados desde una de tus propias direcciones de soporte y las ráfagas de emails de un mismo remitente.",
      },
      {
        q: "¿Siguen disponibles las respuestas automáticas con artículos de Zendesk?",
        a: "Es una función heredada desde el 31 de julio de 2025 y dejará de estar disponible a partir del 10 de diciembre de 2026. Zendesk remite a los clientes a los agentes de IA, que pueden responder por email además de en mensajería y formularios web.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Forwarding incoming email from your existing email address to Zendesk Support",
        url: "https://support.zendesk.com/hc/en-us/articles/4408886828698-Forwarding-incoming-email-from-your-existing-email-address-to-Zendesk-Support",
      },
      {
        label: "Zendesk Help Center — Allowing Zendesk to send email on behalf of your email domain",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832543770-Allowing-Zendesk-to-send-email-on-behalf-of-your-email-domain",
      },
      {
        label: "Zendesk Help Center — Digitally signing your email with DKIM",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822303386-Digitally-signing-your-email-with-DKIM",
      },
      {
        label: "Zendesk Help Center — Causes for ticket suspension",
        url: "https://support.zendesk.com/hc/en-us/articles/4408828416282-Causes-for-ticket-suspension",
      },
      {
        label: "Zendesk Help Center — Workflow: Route tickets to groups based on support address",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823834394-Workflow-Route-tickets-to-groups-based-on-support-address",
      },
      {
        label: "Zendesk Help Center — Configuring email autoreplies to recommend articles",
        url: "https://support.zendesk.com/hc/en-us/articles/4408825385242-Configuring-email-autoreplies-to-recommend-articles",
      },
      {
        label: "Freshdesk Support — Converting support emails into tickets",
        url: "https://support.freshdesk.com/support/solutions/articles/37541-set-up-your-support-email",
      },
      {
        label: "Freshdesk Support — Email domain verification using DKIM records",
        url: "https://support.freshdesk.com/support/solutions/articles/223779-configuring-dkim-records",
      },
    ],
    related: ["ticket-routing-automation", "ai-knowledge-base-for-customer-support", "zendesk-automation"],
    updated: "2026-10-19",
  },

  // ───────────────────────────────────────────────────────────────────────────
  // 6. Base de conocimiento con IA para atención al cliente
  // ───────────────────────────────────────────────────────────────────────────
  {
    key: "ai-knowledge-base-for-customer-support",
    slug: "base-de-conocimiento-ia-atencion-al-cliente",
    category: "services",
    navLabel: "Base de conocimiento con IA",
    primaryKeyword: "base de conocimiento con IA para atención al cliente",
    title: "Base de conocimiento IA para atención al cliente | TascaLab",
    description:
      "Cómo funciona una base de conocimiento con IA para soporte, cómo estructurar artículos en Zendesk, Freshdesk o Confluence, mantenerlos al día y medir el desvío.",
    h1: "Base de conocimiento con IA para atención al cliente: cómo funciona y cómo crear una",
    intro:
      "Una base de conocimiento con IA para atención al cliente es un centro de ayuda redactado para que tanto los clientes como los agentes de IA puedan responder preguntas a partir de él. La IA busca los artículos relevantes y construye su respuesta con ellos, así que sus respuestas solo son tan precisas, completas y actuales como tus artículos. Puedes crearla en la herramienta que ya tienes: el centro de ayuda de Zendesk, la base de conocimiento de Freshdesk o espacios de Confluence vinculados a Jira Service Management.",
    keyFacts: [
      "La generación aumentada por recuperación (RAG) localiza pasajes relevantes en tus documentos y los añade al prompt, de modo que el modelo responde a partir de tu contenido.",
      "En un centro de ayuda de Zendesk, los artículos están en secciones dentro de categorías; no pueden colocarse directamente en una categoría.",
      "Freshdesk organiza su base de conocimiento en categorías, carpetas y artículos.",
      "Los espacios de Confluence vinculados a una base de conocimiento de Jira Service Management alimentan su centro de ayuda, la búsqueda en la base de conocimiento y el agente de servicio virtual.",
      "Jira Service Management cuenta una solicitud como desviada cuando un cliente elige un artículo sugerido mientras la envía y lo marca como útil.",
    ],
    sections: [
      {
        heading: "Cómo usan tus artículos las respuestas de IA",
        blocks: [
          {
            type: "p",
            text: "La mayoría de los agentes de soporte con IA usan alguna forma de generación aumentada por recuperación (RAG). AWS describe la RAG como una técnica que complementa un modelo de lenguaje de gran tamaño con datos externos, como los documentos internos de una empresa. A grandes rasgos:",
          },
          {
            type: "ol",
            items: [
              "Tus documentos se convierten en embeddings —representaciones numéricas del texto— y se guardan en una base de datos vectorial. Es un paso de configuración que se hace una sola vez.",
              "Un cliente hace una pregunta en lenguaje natural.",
              "El sistema ejecuta una búsqueda por similitud en la base de datos vectorial y añade al prompt, como contexto, los pasajes que encuentra.",
              "El modelo de lenguaje redacta su respuesta usando ese contexto.",
            ],
          },
          {
            type: "p",
            text: "De aquí se derivan dos cosas. La IA no puede responder a partir de lo que no está escrito, y trabaja con fragmentos de artículos, no con tu centro de ayuda completo. Las recomendaciones de Freshdesk insisten en lo mismo: Freddy AI recupera y usa los artículos de forma independiente, así que si un artículo omite definiciones o contexto, la IA puede hacer suposiciones o dar respuestas parciales.",
          },
          {
            type: "p",
            text: "Los principales helpdesks ya lo integran. Los agentes de IA de Zendesk pueden usar respuestas generativas en mensajería y email, conectadas a varias fuentes de conocimiento, con reglas de búsqueda que controlan qué fuentes se consultan en determinadas condiciones. En Jira Service Management, los artículos de un espacio de Confluence vinculado aparecen en el centro de ayuda, en la búsqueda de la base de conocimiento y en el agente de servicio virtual.",
          },
        ],
      },
      {
        heading: "Dónde está la base de conocimiento en tu helpdesk",
        blocks: [
          {
            type: "table",
            caption: "Estructura de la base de conocimiento por helpdesk",
            head: ["Helpdesk", "Dónde están los artículos", "Cómo se organizan", "Qué los utiliza"],
            rows: [
              [
                "Zendesk",
                "Centro de ayuda",
                "Las categorías contienen secciones, y las secciones contienen artículos; las secciones pueden anidarse, pero los artículos no pueden estar directamente en una categoría",
                "Los clientes que navegan y buscan, y los agentes de IA con respuestas generativas",
              ],
              [
                "Freshdesk",
                "Base de conocimiento (artículos de soluciones)",
                "Las categorías contienen carpetas, y las carpetas contienen artículos; las carpetas pueden anidarse",
                "Los clientes en el portal, y Freddy AI",
              ],
              [
                "Jira Service Management",
                "Espacios de Confluence vinculados a la base de conocimiento del proyecto de servicio",
                "Páginas del espacio de Confluence vinculado",
                "El centro de ayuda, la búsqueda en la base de conocimiento y el agente de servicio virtual",
              ],
            ],
          },
          {
            type: "p",
            text: "Un detalle práctico: en Freshdesk, una categoría o carpeta solo aparece en el portal del cliente cuando hay al menos un artículo publicado en ella. Para las respuestas de IA, lo que dice cada artículo importa más que dónde está; la jerarquía ayuda sobre todo a quienes navegan.",
          },
        ],
      },
      {
        heading: "Escribe artículos con los que una IA pueda responder",
        blocks: [
          {
            type: "p",
            text: "Freshdesk publica recomendaciones para redactar contenido de conocimiento para Freddy AI, y se aplican a cualquier IA basada en recuperación:",
          },
          {
            type: "ul",
            items: [
              "Limita cada artículo a un solo tema, e indica cuándo se aplica la información y cuándo no.",
              "Enlaza a artículos relacionados en lugar de incluir flujos de trabajo secundarios.",
              "Separa la configuración, el uso y la resolución de problemas en artículos distintos cuando persiguen objetivos diferentes.",
              "Haz que cada artículo sea autosuficiente: define los términos y el contexto en los que se apoya.",
              "Usa un único encabezado de primer nivel para el propósito del artículo, y encabezados de nivel inferior para separar tareas, opciones o conceptos.",
            ],
          },
          {
            type: "p",
            text: "Añade algunos hábitos propios. Titula los artículos con las palabras que usan realmente los clientes, no con nombres internos de producto. Pon la respuesta en las primeras líneas y después los pasos. Mantén los valores exactos —límites, plazos, precios— en un solo lugar y enlaza a él, para que un cambio no deje dos cifras distintas entre las que la IA tenga que elegir. Y empieza por donde están los tickets: unas cuantas semanas de tickets agrupados por tema muestran qué artículos escribir o arreglar primero.",
          },
        ],
      },
      {
        heading: "Mantén el contenido al día",
        blocks: [
          {
            type: "p",
            text: "Un artículo desactualizado se convierte en una respuesta de IA tan segura como errónea, así que asigna a cada artículo un responsable y un ritmo de revisión. Zendesk lo facilita con la verificación de artículos: los administradores de conocimiento definen reglas de verificación que marcan artículos para revisión según filtros e intervalos —por ejemplo, cada tres meses para los artículos con una etiqueta concreta, de una categoría determinada o que llevan tiempo sin actualizarse—, y los responsables de los artículos reciben recordatorios por email para verificarlos. Comprueba si tu plan lo incluye antes de contar con ello.",
          },
          {
            type: "p",
            text: "Las revisiones programadas detectan los desfases lentos. Estos hechos deberían provocar una actualización inmediata:",
          },
          {
            type: "ul",
            items: [
              "Un cambio de producto, de precios o de política: actualiza los artículos el mismo día del lanzamiento o antes.",
              "Un agente responde a un ticket que la base de conocimiento no cubre: crea un artículo o márcalo como pendiente.",
              "La IA pasa una conversación a una persona porque no ha sabido responder: revisa esa pregunta.",
              "Dos artículos dan respuestas distintas: fusiónalos y despublica el duplicado.",
            ],
          },
        ],
      },
      {
        heading: "Mide el autoservicio",
        blocks: [
          {
            type: "p",
            text: "Mide si los artículos evitan tickets, no solo si la gente los lee. Mantén las mismas definiciones cada mes para que la tendencia tenga sentido.",
          },
          {
            type: "table",
            caption: "Indicadores de autoservicio que vale la pena seguir",
            head: ["Indicador", "Qué te dice", "Cómo obtenerlo"],
            rows: [
              [
                "Solicitudes desviadas",
                "Clientes que encontraron una respuesta mientras enviaban una solicitud",
                "Jira Service Management cuenta una solicitud como desviada cuando el cliente selecciona un artículo sugerido durante el envío y lo marca como útil",
              ],
              [
                "Solicitudes resueltas con un artículo",
                "Con qué frecuencia los agentes cierran solicitudes usando contenido de la base de conocimiento",
                "El informe «Requests resolved» de Jira Service Management registra las solicitudes cerradas con o sin un artículo de la base de conocimiento",
              ],
              [
                "Ratio de autoservicio",
                "Uso del centro de ayuda por ticket",
                "Divide las sesiones del centro de ayuda entre los tickets creados en el mismo periodo y sigue la tendencia",
              ],
              [
                "Tasa de traspaso de la IA",
                "Porcentaje de conversaciones de IA que pasan a una persona",
                "La analítica de tu agente de IA, o una etiqueta añadida en cada traspaso",
              ],
              [
                "Tickets sobre temas documentados",
                "Si los artículos existentes evitan tickets de verdad",
                "Toma una muestra de tickets cada mes y comprueba si algún artículo ya cubría la pregunta",
              ],
            ],
          },
        ],
      },
      {
        heading: "Cómo pone TascaLab a trabajar tu base de conocimiento",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea chatbots sobre las herramientas que ya usas —Zendesk, Freshdesk, Jira, Slack o sistemas internos— mediante API, webhooks y Make o n8n, así que tu base de conocimiento se queda donde está. El Starter Chat Bot (350–450 USD, pago único) cubre 1–2 canales y el Standard Chat Bot (500–650 USD) cubre 3–5, entre tu web, el teléfono, WhatsApp, Telegram, Facebook Messenger e Instagram. Los flujos de mantenimiento, como los recordatorios de revisión para artículos desactualizados, encajan en Custom Automation (1.200–2.000 USD).",
          },
          {
            type: "p",
            text: "La mayoría de las implantaciones llevan 1–3 semanas. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué es la generación aumentada por recuperación en atención al cliente?",
        a: "Es una forma de que una IA responda a partir de tu propio contenido. Se recuperan pasajes relevantes de tus documentos, normalmente mediante una búsqueda por similitud en una base de datos vectorial, y se añaden al prompt, de modo que el modelo de lenguaje redacta su respuesta a partir de ese contexto.",
      },
      {
        q: "¿Puede Jira Service Management usar Confluence como base de conocimiento?",
        a: "Sí. Vinculas un espacio de Confluence a la base de conocimiento del proyecto de servicio, y sus artículos aparecen en el centro de ayuda, en la búsqueda de la base de conocimiento y en el agente de servicio virtual.",
      },
      {
        q: "¿Cómo mantengo al día los artículos de la base de conocimiento de Zendesk?",
        a: "Usa la verificación de artículos si tu plan la incluye. Las reglas de verificación marcan artículos para revisión según filtros e intervalos, y los responsables de los artículos reciben recordatorios por email para verificarlos.",
      },
      {
        q: "¿Cómo deben estructurarse los artículos para las respuestas de IA?",
        a: "Un tema por artículo, autosuficiente y con encabezados claros. Freshdesk señala que Freddy AI recupera los artículos de forma independiente, así que la falta de definiciones o de contexto puede llevar a suposiciones o a respuestas parciales.",
      },
    ],
    sources: [
      {
        label: "AWS Prescriptive Guidance — Understanding Retrieval Augmented Generation",
        url: "https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/what-is-rag.html",
      },
      {
        label: "Zendesk Help Center — Organizing knowledge base content in categories and sections",
        url: "https://support.zendesk.com/hc/en-us/articles/4408845897370-Organizing-knowledge-base-content-in-categories-and-sections",
      },
      {
        label: "Zendesk Help Center — Generative replies in AI agents FAQs",
        url: "https://support.zendesk.com/hc/en-us/articles/8357756420506-Generative-replies-in-AI-agents-FAQs",
      },
      {
        label: "Zendesk Help Center — About article verification and how it works",
        url: "https://support.zendesk.com/hc/en-us/articles/5588297664666-About-article-verification-and-how-it-works",
      },
      {
        label: "Freshdesk Support — Create categories, folders and articles in your knowledge base",
        url: "https://support.freshdesk.com/support/solutions/articles/37611-create-and-organize-knowledge-base",
      },
      {
        label: "Freshdesk Support — Write Freddy AI–optimised knowledge content",
        url: "https://support.freshdesk.com/support/solutions/articles/50000011859-write-freddy-ai-optimised-knowledge-content",
      },
      {
        label: "Atlassian Support — Link a Confluence space to your knowledge base",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/link-confluence-spaces-to-your-service-project/",
      },
      {
        label: "Atlassian Support — Find out how your knowledge base articles are performing",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/how-are-my-knowledge-base-articles-performing/",
      },
    ],
    related: ["ai-chatbot-for-customer-support", "ticket-deflection", "customer-support-email-automation"],
    updated: "2026-10-19",
  },
];
