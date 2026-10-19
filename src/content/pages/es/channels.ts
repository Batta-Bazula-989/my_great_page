import type { TranslatedPage } from "../../types";

export const channelPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. WhatsApp
  // ---------------------------------------------------------------------------
  {
    key: "whatsapp-customer-support-bot",
    slug: "bot-whatsapp-atencion-al-cliente",
    category: "channels",
    navLabel: "Bot de WhatsApp para soporte",
    primaryKeyword: "bot de WhatsApp para atención al cliente",
    title: "Bot de WhatsApp para atención al cliente: normas y traspaso",
    description:
      "Cómo funciona un bot de WhatsApp para atención al cliente: Business Platform frente a la app, la ventana de 24 horas, plantillas, opt-in, precios y helpdesk.",
    h1: "Bot de WhatsApp para atención al cliente: cómo funciona y qué permite Meta",
    intro:
      "Un bot de WhatsApp para atención al cliente funciona sobre la WhatsApp Business Platform (Cloud API), no sobre la app gratuita WhatsApp Business. Puede responder libremente durante las 24 horas siguientes a cada mensaje del cliente; pasado ese plazo, solo puedes contactar con el cliente mediante una plantilla aprobada previamente. Diseña el bot en torno a esa ventana, a tu proceso de consentimiento (opt-in) y a un traspaso limpio a tu helpdesk.",
    keyFacts: [
      "Cuando un cliente te escribe o te llama, se abre una ventana de atención al cliente de 24 horas que se reinicia con cada mensaje nuevo.",
      "Dentro de la ventana puedes enviar mensajes de servicio de formato libre sin aprobación previa.",
      "Fuera de la ventana, las plantillas son el único tipo de mensaje que puedes enviar.",
      "Antes de escribir a nadie, necesitas un opt-in que mencione claramente el nombre de tu empresa.",
      "Meta factura por mensaje entregado, según la categoría del mensaje y el país del destinatario.",
    ],
    sections: [
      {
        heading: "App WhatsApp Business frente a WhatsApp Business Platform",
        blocks: [
          {
            type: "p",
            text: "WhatsApp ofrece dos productos para empresas, y solo uno está pensado para bots. La app WhatsApp Business es una aplicación gratuita para pequeñas empresas que responden a los clientes a mano y usan respuestas automáticas básicas. La WhatsApp Business Platform es un conjunto de API para empresas medianas y grandes. Cloud API es su principal producto de mensajería, y es a lo que se conectan los chatbots, los helpdesks y los CRM.",
          },
          {
            type: "table",
            caption: "La app y la Platform de un vistazo",
            head: ["", "App WhatsApp Business", "WhatsApp Business Platform (Cloud API)"],
            rows: [
              ["Pensada para", "Pequeñas empresas que responden a mano", "Empresas medianas y grandes que conectan bots y herramientas de soporte"],
              ["Coste", "Descarga y uso gratuitos", "Cargos por mensaje fijados por Meta"],
              ["Configuración", "Se instala desde una tienda de aplicaciones", "Recursos para desarrolladores o un Business Messaging Partner"],
              ["Automatización", "Respuestas automáticas básicas", "Chatbots, flujos de mensajes, integraciones con CRM y helpdesk"],
            ],
          },
          {
            type: "p",
            text: "Si ya usas la app, Meta permite incorporar a Cloud API un número existente de la app WhatsApp Business para que ambas funcionen con el mismo número. Tras la incorporación, los mensajes enviados desde la app no están sujetos a la ventana de atención al cliente, mientras que los enviados a través de Cloud API sí, y algunas funciones de la app, como los chats de grupo, no se admiten en la parte de la API. Comprueba que tu helpdesk admite esta configuración antes de depender de ella.",
          },
        ],
      },
      {
        heading: "La ventana de atención al cliente de 24 horas",
        blocks: [
          {
            type: "p",
            text: "Todo flujo de soporte en WhatsApp depende de un temporizador. Cuando un cliente escribe o llama a tu empresa, empieza una ventana de atención al cliente de 24 horas, y cada nuevo mensaje o llamada suya la reinicia a 24 horas. Mientras está abierta, tu bot o tus agentes pueden enviar mensajes de servicio de formato libre a través de la API sin aprobación previa.",
          },
          {
            type: "p",
            text: "Una vez cerrada la ventana, las plantillas son los únicos mensajes que puedes enviar. Las plantillas son formatos redactados de antemano que necesitan aprobación antes de usarse, y cada una pertenece a una categoría: marketing (promociones), utilidad (seguimiento de algo que el cliente hizo o pidió) o autenticación (verificación de identidad).",
          },
          {
            type: "table",
            caption: "Qué puedes enviar y cuándo",
            head: ["Situación", "Qué puedes enviar"],
            rows: [
              ["El cliente escribió en las últimas 24 horas", "Mensajes de servicio de formato libre de tu bot o tus agentes"],
              ["La ventana se ha cerrado y necesitas actualizar un ticket o un pedido", "Una plantilla de utilidad aprobada"],
              ["Necesitas verificar la identidad del cliente", "Una plantilla de autenticación aprobada"],
              ["Quieres promocionar algo", "Una plantilla de marketing aprobada, enviada solo a usuarios que han dado su opt-in"],
              ["El cliente responde a tu plantilla", "Su respuesta abre una nueva ventana de 24 horas, así que vuelven a funcionar las respuestas de formato libre"],
            ],
          },
          {
            type: "p",
            text: "Para un bot de soporte, esto se traduce en dos reglas prácticas: responde dentro de la ventana siempre que puedas, y prepara con antelación plantillas de utilidad para seguimientos tardíos como «tu ticket se ha actualizado» o «necesitamos un dato más».",
          },
        ],
      },
      {
        heading: "Normas de opt-in que tu bot debe respetar",
        blocks: [
          {
            type: "p",
            text: "Meta exige a las empresas obtener permiso (opt-in) antes de enviar mensajes a las personas por WhatsApp. El opt-in no tiene por qué ser específico de WhatsApp, pero debe indicar claramente que la persona acepta recibir mensajes de tu empresa y debe incluir el nombre de tu empresa. Eres responsable de elegir un método de opt-in que cumpla la legislación que te aplique. Meta enumera estos métodos:",
          },
          {
            type: "ul",
            items: [
              "SMS",
              "Tu web",
              "Una llamada telefónica con un flujo de respuesta de voz interactiva (IVR)",
              "En persona o en papel",
            ],
          },
          {
            type: "p",
            text: "Meta también recomienda un opt-in que cubra cada tipo de mensaje que pienses enviar, además de instrucciones claras para darse de baja. En la práctica, recoge y registra el opt-in allí donde los clientes te den su número por primera vez, como el proceso de compra, el registro o tu formulario de contacto, para que las plantillas de actualización de tickets nunca sean una apuesta a ciegas.",
          },
        ],
      },
      {
        heading: "Cómo funcionan los precios de WhatsApp, sin entrar en tarifas",
        blocks: [
          {
            type: "p",
            text: "Meta cobra por mensaje entregado y solo por los mensajes que una empresa envía a los usuarios. El precio depende de la categoría del mensaje y del prefijo de país del destinatario. Las tarifas se publican por mercado y cambian de vez en cuando, así que consulta la página de precios actual de Meta en lugar de fiarte de una cifra sacada de un blog.",
          },
          {
            type: "p",
            text: "Hay dos puntos importantes para los equipos de soporte. Las conversaciones que empiezan desde un anuncio Click to WhatsApp o desde un botón de llamada a la acción de una página de Facebook pueden abrir una ventana gratuita de punto de entrada: si respondes dentro de la ventana de atención al cliente, tus mensajes no se cobran, y la página de precios actual de Meta indica que esa ventana puede permanecer abierta hasta 7 días (el antiguo modelo de precios por conversación daba 72 horas). Además, los proveedores de helpdesk pueden añadir sus propias tarifas: la documentación de Freshworks, por ejemplo, indica que aplica un recargo sobre los cargos de WhatsApp de Meta.",
          },
          {
            type: "note",
            text: "La documentación de precios de Meta describe cambios en 2026 en la forma de facturar los mensajes de servicio y de utilidad. Confirma las normas vigentes en la página de precios de Meta antes de estimar los costes mensuales.",
          },
        ],
      },
      {
        heading: "Conectar el bot a tu helpdesk",
        blocks: [
          {
            type: "p",
            text: "Un bot de WhatsApp nunca debería ser un callejón sin salida. Cuando no puede resolver algo, la conversación debe llegar a un agente con el contexto ya adjunto. Tanto Zendesk como Freshdesk ofrecen canales nativos de WhatsApp:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: WhatsApp se añade como canal de mensajería en Admin Center («Channels > Messaging and social > Messaging»). Necesitas un Meta Business Manager que pertenezca a tu empresa, y la persona que conecta el número debe ser administradora en él. Zendesk advierte de que los agentes no pueden responder pasadas más de 24 horas desde el último mensaje del cliente, y de que no se admiten los mensajes de grupo de WhatsApp.",
              "Freshdesk: WhatsApp es un canal de Freshdesk Omni que admite plantillas de mensajes aprobadas. Los ajustes por número incluyen vincular un agente de IA, enrutar a grupos de agentes, gestionar plantillas, automatizaciones y políticas de SLA. La guía de Freshdesk señala un límite de 250 conversaciones iniciadas por la empresa cada 24 horas hasta que se complete la verificación de empresa de Meta.",
            ],
          },
          {
            type: "p",
            text: "Uses el helpdesk que uses, asigna los datos que recoge el bot (nombre, número de pedido, tipo de incidencia) a campos del ticket para que los agentes no vuelvan a preguntar, y etiqueta las conversaciones atendidas por el bot para ver qué resuelve realmente.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea bots de WhatsApp sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira, Slack o sistemas internos, mediante API, webhooks y Make o n8n. Un Starter Chat Bot (350–450 USD) cubre uno o dos canales con preguntas frecuentes y recogida básica de información; un Standard Chat Bot (500–650 USD) cubre de tres a cinco canales con conversaciones más complejas y traspasos más fluidos. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y la mayoría de las implantaciones llevan 1–3 semanas. Una llamada de auditoría gratuita de 30 minutos es una forma sencilla de comprobar si WhatsApp encaja con tu volumen de soporte.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo crear un bot de soporte con la app WhatsApp Business normal?",
        a: "No de una forma que merezca la pena. La app ofrece respuestas automáticas básicas, pero los chatbots y las integraciones con helpdesks funcionan sobre la WhatsApp Business Platform, normalmente a través de Cloud API.",
      },
      {
        q: "¿Qué pasa si un cliente responde pasadas 24 horas?",
        a: "Su nuevo mensaje abre una nueva ventana de atención al cliente de 24 horas, así que tu bot o tus agentes pueden volver a responder libremente. La ventana solo limita los mensajes que inicias tú después de que se haya cerrado.",
      },
      {
        q: "¿Necesitan aprobación las plantillas de WhatsApp?",
        a: "Sí. Las plantillas deben aprobarse antes de poder enviarlas, y son los únicos mensajes permitidos fuera de la ventana de atención al cliente.",
      },
      {
        q: "¿Puedo conservar mi número actual de la app WhatsApp Business?",
        a: "Meta permite incorporar a Cloud API un número existente de la app WhatsApp Business para usar ambas con el mismo número, aunque algunas funciones no están disponibles en la parte de la API. Comprueba que tu helpdesk lo admite antes de hacer el cambio.",
      },
      {
        q: "¿Cuánto cuesta mantener en marcha un bot de soporte en WhatsApp?",
        a: "Meta cobra por mensaje entregado, según la categoría del mensaje y el país del destinatario, y las tarifas cambian con el tiempo. Consulta las tarifas actuales de Meta y las comisiones que añada tu helpdesk.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — About the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/about-the-platform",
      },
      {
        label: "Meta for Developers — Onboard WhatsApp Business app users",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users/",
      },
      {
        label: "Meta for Developers — Service messages",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages",
      },
      {
        label: "Meta for Developers — Template fundamentals",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview",
      },
      {
        label: "Meta for Developers — Pricing on the WhatsApp Business Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing",
      },
      {
        label: "Meta for Developers — Get opt-in for WhatsApp",
        url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/getting-opt-in",
      },
      {
        label: "Zendesk Help Center — Adding WhatsApp channels to the Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408842821786-Adding-WhatsApp-channels-to-the-Agent-Workspace",
      },
      {
        label: "Freshdesk Support — WhatsApp Business integration for Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/238137-whatsapp-for-freshdesk-business-integration",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Telegram
  // ---------------------------------------------------------------------------
  {
    key: "telegram-support-bot",
    slug: "bot-telegram-atencion-al-cliente",
    category: "channels",
    navLabel: "Bot de Telegram para soporte",
    primaryKeyword: "bot de Telegram para atención al cliente",
    title: "Bot de Telegram para atención al cliente: API y traspaso",
    description:
      "Cómo gestionar un bot de soporte en Telegram: BotFather, webhooks o long polling, teclados inline, modo privacidad, límites de envío y traspaso al helpdesk.",
    h1: "Bot de Telegram para atención al cliente: cómo funciona y cómo configurarlo",
    intro:
      "Un bot de soporte de Telegram es un programa conectado a la Telegram Bot API. Lo registras con @BotFather, recibes un token y tu código recibe los mensajes de los clientes mediante un webhook o long polling. Los bots de Telegram no pueden iniciar conversaciones, así que todo flujo de soporte empieza cuando un cliente abre tu bot y pulsa «Start».",
    keyFacts: [
      "Para crear un bot y obtener su token de autenticación, envías un mensaje a @BotFather.",
      "Las actualizaciones llegan mediante getUpdates o un webhook; los dos métodos son mutuamente excluyentes.",
      "Telegram conserva las actualizaciones no entregadas un máximo de 24 horas.",
      "Los bots no pueden escribir primero a los usuarios; el usuario tiene que escribir al bot o añadirlo a un grupo.",
      "Los webhooks solo funcionan en los puertos 443, 80, 88 y 8443.",
    ],
    sections: [
      {
        heading: "Cómo funciona un bot de soporte en Telegram",
        blocks: [
          {
            type: "p",
            text: "Para crear un bot, envías un mensaje a @BotFather en Telegram, que lo registra y te da un token de autenticación. Tu código usa ese token para llamar a la Bot API por HTTPS. El token solo autentica tu código; no da al bot permiso para escribir a nadie.",
          },
          {
            type: "p",
            text: "Los bots no pueden iniciar conversaciones. Un usuario tiene que escribir primero al bot o añadirlo a un grupo. Cada bot tiene un enlace con el formato t.me/ seguido del nombre de usuario del bot que abre un chat con él, y la primera vez que alguien abre ese chat ve un botón «Start» que envía el comando /start. Guarda en ese momento el chat ID del usuario: lo necesitas para enviar cualquier mensaje posterior, como una actualización del ticket.",
          },
          {
            type: "ol",
            items: [
              "El cliente toca tu enlace t.me en tu web o en un email y pulsa «Start».",
              "El bot le saluda y muestra un menú breve con los temas habituales.",
              "Las preguntas sencillas reciben respuesta al momento; para todo lo demás, el bot recoge los datos (número de pedido, descripción, capturas de pantalla).",
              "El bot crea un ticket en tu helpdesk y le dice al cliente qué pasará a continuación.",
              "Cuando un agente responde en el helpdesk, la respuesta se envía de vuelta al mismo chat de Telegram.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks frente a long polling",
        blocks: [
          {
            type: "p",
            text: "La Bot API ofrece dos formas mutuamente excluyentes de recibir actualizaciones: el método getUpdates (long polling) y los webhooks. Mientras haya un webhook configurado, getUpdates no funciona. En ambos casos, Telegram conserva las actualizaciones que no has recibido un máximo de 24 horas, así que un bot que pasa un día sin conexión pierde mensajes.",
          },
          {
            type: "table",
            caption: "Cómo elegir la forma en que tu bot recibe los mensajes",
            head: ["", "getUpdates (long polling)", "Webhook (setWebhook)"],
            rows: [
              ["Cómo funciona", "Tu servidor pide a Telegram las actualizaciones nuevas", "Telegram envía cada actualización a tu URL HTTPS"],
              ["Alojamiento", "Cualquier servidor que pueda hacer peticiones salientes", "Un endpoint HTTPS público en el puerto 443, 80, 88 u 8443"],
              ["Verificación del remitente", "No hace falta, las peticiones las hace tu servidor", "Define un secret_token; Telegram lo devuelve en la cabecera X-Telegram-Bot-Api-Secret-Token"],
            ],
          },
          {
            type: "p",
            text: "Para volver de un webhook a polling, elimina el webhook con deleteWebhook o llamando a setWebhook con una URL vacía. Ambos métodos aceptan drop_pending_updates si quieres descartar las actualizaciones acumuladas en cola al cambiar la configuración.",
          },
        ],
      },
      {
        heading: "Botones y menús para flujos de soporte",
        blocks: [
          {
            type: "p",
            text: "Los bots de soporte funcionan mejor con botones que con texto libre. Los teclados de respuesta personalizados sustituyen el teclado del usuario por respuestas predefinidas, y al pulsar una se envía ese texto al chat. Los teclados inline añaden botones a un mensaje concreto y no publican nada en el chat al pulsarlos. Un botón inline puede abrir una URL o enviar a tu bot datos de callback de 1–64 bytes.",
          },
          {
            type: "p",
            text: "Hay dos detalles que pillan desprevenidos a los bots nuevos. Después de que un usuario pulse un botón de callback, los clientes de Telegram muestran un indicador de progreso hasta que tu bot llama a answerCallbackQuery, así que responde a cada callback, aunque sea sin texto. Y en los menús de varios pasos, edita el mensaje existente con botones nuevos en lugar de enviar un mensaje nuevo cada vez; la edición funciona con los mensajes que tienen teclados inline.",
          },
        ],
      },
      {
        heading: "Grupos, modo privacidad y límites de envío",
        blocks: [
          {
            type: "p",
            text: "Los bots añadidos a grupos funcionan en modo privacidad por defecto. En ese modo, un bot recibe los comandos dirigidos a él, las respuestas a sus propios mensajes, los mensajes enviados a través del bot y los mensajes de servicio, pero no la conversación normal del grupo. Los bots que son administradores del grupo reciben todos los mensajes, y puedes desactivar el modo privacidad con /setprivacy en @BotFather, aunque Telegram solo lo recomienda cuando sea absolutamente necesario. Los mensajes en chats privados con el bot siempre le llegan.",
          },
          {
            type: "table",
            caption: "Límites aproximados según las Bots FAQ de Telegram",
            head: ["Dónde", "Recomendación"],
            rows: [
              ["Un solo chat", "Evita enviar más de un mensaje por segundo; pueden pasar ráfagas cortas antes de que empiecen los errores 429"],
              ["Un grupo", "No más de 20 mensajes por minuto"],
              ["Notificaciones masivas", "Unos 30 mensajes por segundo entre todos los usuarios, salvo que actives las difusiones de pago (paid broadcasts)"],
            ],
          },
          {
            type: "p",
            text: "Las FAQ de Telegram dan estas cifras como aproximadas, así que incorpora reintentos para los errores 429 en lugar de confiar en números exactos. Para un bot de soporte importan sobre todo cuando avisas a muchos clientes a la vez, por ejemplo de una caída del servicio. Con long polling, pasa además el parámetro offset a getUpdates: las actualizaciones hasta ese ID se marcan como confirmadas y no se vuelven a devolver.",
          },
        ],
      },
      {
        heading: "Traspaso al helpdesk y Telegram Business",
        blocks: [
          {
            type: "p",
            text: "Para el traspaso del bot a una persona, el patrón habitual es que el bot abra un ticket y reenvíe al chat las respuestas del agente. Zendesk admite Telegram como canal de Sunshine Conversations en el Agent Workspace, lo que requiere Suite Professional o superior. Los mensajes se convierten en tickets, y la respuesta de un agente en Zendesk aparece en la aplicación de mensajería del cliente.",
          },
          {
            type: "p",
            text: "Telegram Business es una opción aparte para equipos pequeños que atienden a los clientes desde su propia cuenta de Telegram. El titular de la cuenta puede conectar un bot de empresa a la vez, elegir a qué chats puede acceder y permitirle procesar los mensajes entrantes y, cuando esté autorizado, responder en su nombre.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea bots de soporte para Telegram que se conectan a las herramientas que ya usas, como Zendesk, Freshdesk, Jira, Slack o sistemas internos, mediante API, webhooks y Make o n8n. Un Starter Chat Bot (350–450 USD) cubre uno o dos canales con preguntas frecuentes y recogida básica de información, lo que encaja con Telegram más un widget en tu web. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implantaciones llevan 1–3 semanas. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puede un bot de Telegram escribir primero a los clientes?",
        a: "No. Un usuario tiene que escribir al bot o añadirlo a un grupo antes de que el bot pueda escribirle. Guarda el chat ID en el primer contacto para poder enviar actualizaciones más adelante.",
      },
      {
        q: "¿Uso webhooks o getUpdates?",
        a: "Cualquiera de los dos sirve, pero no a la vez. Los webhooks envían cada actualización a tu endpoint HTTPS, mientras que el long polling solo necesita peticiones salientes y es más sencillo durante el desarrollo.",
      },
      {
        q: "¿Por qué mi bot no ve los mensajes de un grupo?",
        a: "Los bots funcionan en modo privacidad por defecto y solo ven los mensajes dirigidos a ellos. Haz que el bot sea administrador del grupo, o desactiva el modo privacidad con /setprivacy en @BotFather y vuelve a añadir el bot al grupo.",
      },
      {
        q: "¿Admite Zendesk Telegram?",
        a: "Sí, como canal de Sunshine Conversations en el Agent Workspace, para el que Zendesk indica que se necesita Suite Professional o superior. Los mensajes llegan como tickets y las respuestas de los agentes vuelven a Telegram.",
      },
    ],
    sources: [
      {
        label: "Telegram — Bots: An introduction for developers",
        url: "https://core.telegram.org/bots",
      },
      {
        label: "Telegram — Telegram Bot API",
        url: "https://core.telegram.org/bots/api",
      },
      {
        label: "Telegram — From BotFather to 'Hello World'",
        url: "https://core.telegram.org/bots/tutorial",
      },
      {
        label: "Telegram — Marvin's Marvellous Guide to All Things Webhook",
        url: "https://core.telegram.org/bots/webhooks",
      },
      {
        label: "Telegram — Telegram Bot Features",
        url: "https://core.telegram.org/bots/features",
      },
      {
        label: "Telegram — Bots FAQ",
        url: "https://core.telegram.org/bots/faq",
      },
      {
        label: "Telegram — Connected business bots",
        url: "https://core.telegram.org/api/bots/connected-business-bots",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "slack-support-automation",
      "n8n-vs-make-vs-zapier",
    ],
    updated: "2026-10-19",
  },
];
