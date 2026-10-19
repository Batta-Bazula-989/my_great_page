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
            text: "TascaLab crea bots de WhatsApp sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira, Slack o sistemas internos, mediante API, webhooks y Make o n8n. Un Starter Chat Bot ({{price:starter}}) cubre uno o dos canales con preguntas frecuentes y recogida básica de información; un Standard Chat Bot ({{price:standard}}) cubre de tres a cinco canales con conversaciones más complejas y traspasos más fluidos. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y la mayoría de las implantaciones llevan 1–3 semanas. Una llamada de Health Check gratuita de 30 minutos es una forma sencilla de comprobar si WhatsApp encaja con tu volumen de soporte.",
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
            text: "TascaLab crea bots de soporte para Telegram que se conectan a las herramientas que ya usas, como Zendesk, Freshdesk, Jira, Slack o sistemas internos, mediante API, webhooks y Make o n8n. Un Starter Chat Bot ({{price:starter}}) cubre uno o dos canales con preguntas frecuentes y recogida básica de información, lo que encaja con Telegram más un widget en tu web. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implantaciones llevan 1–3 semanas. Puedes empezar con una llamada de Health Check gratuita de 30 minutos.",
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

  // ---------------------------------------------------------------------------
  // 3. Facebook Messenger
  // ---------------------------------------------------------------------------
  {
    key: "facebook-messenger-bot-customer-service",
    slug: "bot-facebook-messenger-atencion-al-cliente",
    category: "channels",
    navLabel: "Bot de Messenger para soporte",
    primaryKeyword: "bot de Facebook Messenger para atención al cliente",
    title: "Bot de Facebook Messenger para atención al cliente: normas",
    description:
      "Cómo funciona un bot de Facebook Messenger para atención al cliente: webhooks, ventana de 24 horas, etiqueta HUMAN_AGENT, traspaso a agentes y política de Meta.",
    h1: "Bot de Facebook Messenger para atención al cliente: ventanas, etiquetas y traspaso",
    intro:
      "Un bot de Facebook Messenger para atención al cliente se conecta a tu página de Facebook a través de la Messenger Platform de Meta: los mensajes entrantes llegan a tu servidor mediante webhooks, y el bot responde a través de la Send API. Puedes responder durante las 24 horas siguientes a cada mensaje del cliente, y un agente humano puede responder hasta 7 días después con la etiqueta HUMAN_AGENT una vez que tu app esté aprobada para usarla.",
    keyFacts: [
      "La mensajería estándar te permite responder en las 24 horas siguientes al mensaje de una persona.",
      "La etiqueta HUMAN_AGENT permite respuestas humanas en un plazo de 7 días, previa aprobación de la app.",
      "Desde el 27 de abril de 2026, las etiquetas CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE y POST_PURCHASE_UPDATE devuelven un error.",
      "Cuando la ley lo exija, un bot debe informar de que la persona está hablando con un servicio automatizado.",
      "La política de Meta espera que las experiencias automatizadas respondan a lo que escribe el usuario en un plazo de 30 segundos.",
    ],
    sections: [
      {
        heading: "Cómo encajan las piezas de la Messenger Platform",
        blocks: [
          {
            type: "p",
            text: "Un bot de Messenger es una app de Meta conectada a una o varias páginas de Facebook. La app se suscribe a cada página a través del edge subscribed_apps de la página, lo que requiere los permisos pages_messaging y pages_manage_metadata. Después, Meta envía a tu webhook eventos como los mensajes nuevos o los toques en botones, y tu bot responde a través de la Send API.",
          },
          {
            type: "table",
            caption: "Eventos de webhook que suele usar un bot de soporte",
            head: ["Evento", "Qué le dice a tu bot"],
            rows: [
              ["messages", "Un cliente ha enviado un mensaje a tu página"],
              ["messaging_postbacks", "Un cliente ha tocado un botón de postback, el botón «Get Started» o un elemento del menú persistente"],
              ["messaging_handovers", "El control de la conversación se ha pasado, tomado o cambiado entre apps"],
              ["standby", "Ha llegado un mensaje mientras otra app tenía el control de la conversación"],
            ],
          },
          {
            type: "p",
            text: "Meta también te ofrece puntos de entrada fijos. Al tocar el botón «Get Started» se envía un postback, que es un buen momento para un mensaje de bienvenida. Un menú persistente, con hasta 20 elementos, puede incluir una opción «Hablar con una persona»; solo aparece cuando hay un botón «Get Started» configurado.",
          },
        ],
      },
      {
        heading: "La ventana de 24 horas y las etiquetas de mensaje",
        blocks: [
          {
            type: "p",
            text: "La ventana de mensajería estándar de Messenger te da 24 horas para responder después de que una persona escriba a tu página, y los mensajes dentro de ella pueden incluir contenido promocional. Si envías un mensaje normal después de que se cierre la ventana, la Send API devuelve el error 1545041.",
          },
          {
            type: "table",
            caption: "Qué permite Meta después de que un cliente escriba",
            head: ["Plazo o caso de uso", "Qué puedes enviar", "Notas"],
            rows: [
              ["En las 24 horas siguientes al mensaje del cliente", "Mensajes estándar del bot o de un agente", "En esta ventana se permite contenido promocional"],
              ["Hasta 7 días después del mensaje del cliente", "Una respuesta humana con la etiqueta HUMAN_AGENT", "Requiere aprobación de la app; no sirve para mensajes automatizados ni promocionales"],
              ["Actualizaciones de eventos, compras o cuentas", "Las antiguas etiquetas no: CONFIRMED_EVENT_UPDATE, ACCOUNT_UPDATE y POST_PURCHASE_UPDATE devuelven un error desde el 27 de abril de 2026", "Meta remite a las plantillas de utilidad o a la Marketing Messages API"],
            ],
          },
          {
            type: "p",
            text: "Meta limita HUMAN_AGENT a los problemas que no se pueden resolver dentro de la ventana estándar, como una solicitud que llega mientras tu empresa está cerrada el fin de semana o un caso que lleva más de un día. Los mensajes automatizados son un uso no permitido de la etiqueta, así que el bot no puede usarla para enviar seguimientos tardíos por su cuenta.",
          },
        ],
      },
      {
        heading: "Pasar conversaciones del bot a una persona",
        blocks: [
          {
            type: "p",
            text: "Varias apps pueden trabajar en la misma página, por ejemplo tu bot y un helpdesk. El protocolo de traspaso (handover protocol) te permite pasar una conversación de una app o bandeja de entrada a otra, y el webhook messaging_handovers informa de cuándo se pasa, se toma o se cambia el control. Las apps que no controlan el hilo reciben eventos standby en lugar de los eventos de mensaje normales.",
          },
          {
            type: "p",
            text: "Meta ha ido llevando esto hacia Conversation Routing. Una actualización de 2021 eliminó la necesidad de asignar roles principal y secundario y añadió los modos Exclusive e Idle. Ahora las reglas de enrutamiento pueden gestionarse en la configuración de la página, y cuando Conversation Routing está activado, la Conversations API devuelve un campo is_owner para que tu app responda solo a los hilos que controla.",
          },
          {
            type: "ul",
            items: [
              "Ofrece una salida clara: la documentación de Meta menciona escalar mediante un intent de respaldo, una palabra clave o respuestas rápidas.",
              "Antes de pasar el control, publica un breve resumen (tema, número de pedido, lo que el bot ya ha intentado) donde lo vaya a ver el agente.",
              "Explica al cliente qué pasará a continuación, incluido tu horario si no hay nadie conectado.",
              "Cuando el agente termine, devuelve el control al bot para que la siguiente pregunta se responda automáticamente.",
            ],
          },
        ],
      },
      {
        heading: "Normas de la política que condicionan el bot",
        blocks: [
          {
            type: "ul",
            items: [
              "Transparencia: cuando la legislación aplicable lo exija, las experiencias de chat automatizadas deben informar de que la persona está hablando con un servicio automatizado, por ejemplo al inicio de una conversación o cuando una persona devuelve la conversación a la automatización. Meta sugiere informar incluso donde no es obligatorio y menciona expresamente California y Alemania.",
              "Capacidad de respuesta: las experiencias totalmente automatizadas deben responder a todo lo que escriba el usuario en un plazo de 30 segundos. Las configuraciones híbridas que combinan bots y personas deben actualizar el ajuste de respuesta en «Page Settings», dentro de «Advanced Messaging».",
              "Nada de promoción en los mensajes con etiqueta: las etiquetas de mensaje no pueden usarse para publicidad, marketing ni captación comercial.",
              "Aprobación de la app: tu app debe estar aprobada antes de poder usar la etiqueta HUMAN_AGENT.",
            ],
          },
        ],
      },
      {
        heading: "Conectar Messenger a tu helpdesk",
        blocks: [
          {
            type: "p",
            text: "La mayoría de los helpdesks pueden recibir conversaciones de Messenger como tickets. En Zendesk, Messenger es un canal de mensajería del Agent Workspace, y Zendesk documenta algunos límites prácticos:",
          },
          {
            type: "ul",
            items: [
              "Los agentes tienen siete días para responder antes de que se cierre la ventana de mensajería; pasado ese plazo, el cuadro de respuesta queda bloqueado.",
              "Las respuestas que un agente envía directamente en Messenger no se sincronizan con Zendesk, así que los agentes deben responder desde Zendesk.",
              "Los mensajes de más de 2.000 caracteres no se entregan.",
            ],
          },
          {
            type: "p",
            text: "Si tu bot funciona como una app aparte, decide qué app controla el hilo por defecto y cuándo pasa el control; si no, el bot y el helpdesk pueden acabar respondiendo los dos al mismo cliente.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea bots de Messenger que funcionan sobre Zendesk, Freshdesk, Jira, Slack o tus herramientas internas, mediante API, webhooks y Make o n8n. Un Starter Chat Bot ({{price:starter}}) cubre uno o dos canales; un Standard Chat Bot ({{price:standard}}) cubre de tres a cinco canales, como Messenger, Instagram y WhatsApp, con conversaciones más complejas y traspasos más fluidos. Cada proyecto incluye 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implantaciones llevan 1–3 semanas. Reserva una llamada de Health Check gratuita de 30 minutos para analizar tu flujo actual de Messenger.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto tiempo tengo para responder en Messenger?",
        a: "Puedes enviar mensajes estándar en las 24 horas siguientes al mensaje de una persona. Un agente humano puede responder hasta 7 días después con la etiqueta HUMAN_AGENT, una vez que tu app esté aprobada para usarla.",
      },
      {
        q: "¿Puede mi bot usar la etiqueta HUMAN_AGENT?",
        a: "No. Meta incluye los mensajes automatizados entre los usos no permitidos de la etiqueta. Está pensada para respuestas de personas cuando un problema no se puede resolver en 24 horas.",
      },
      {
        q: "¿Qué sustituye a las etiquetas ACCOUNT_UPDATE y POST_PURCHASE_UPDATE?",
        a: "Esas etiquetas, junto con CONFIRMED_EVENT_UPDATE, devuelven un error desde el 27 de abril de 2026. Meta recomienda las plantillas de utilidad o la Marketing Messages API para esos casos de uso.",
      },
      {
        q: "¿Tengo que decir a los usuarios que hablan con un bot?",
        a: "La política de Meta exige informar de ello cuando la legislación aplicable lo requiera y lo recomienda en los demás casos. Decirlo al inicio de la conversación es la forma más sencilla.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Send a message (Messenger Platform)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Message tags (Send API)",
        url: "https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags/",
      },
      {
        label: "Meta for Developers — Messenger Platform and IG Messaging API policy",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/policy",
      },
      {
        label: "Meta for Developers — Webhooks for Messenger Platform",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/webhooks",
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
        label: "Meta for Developers — Persistent menu",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages/persistent-menu",
      },
      {
        label: "Zendesk Help Center — Adding Facebook Messenger channels",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835753370-Adding-Facebook-Messenger-channels",
      },
    ],
    related: [
      "instagram-dm-automation",
      "chatbot-to-human-handoff",
      "zendesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Instagram
  // ---------------------------------------------------------------------------
  {
    key: "instagram-dm-automation",
    slug: "automatizacion-mensajes-directos-instagram",
    category: "channels",
    navLabel: "Automatización de DM de Instagram",
    primaryKeyword: "automatización de mensajes directos de Instagram",
    title: "Automatización de mensajes directos de Instagram: normas",
    description:
      "Automatización de mensajes directos de Instagram: cuentas profesionales, ventana de 24 horas, etiqueta human agent, del comentario al DM e ice breakers.",
    h1: "Automatización de mensajes directos de Instagram para atención al cliente",
    intro:
      "Automatizar los mensajes directos (DM) de Instagram significa conectar un bot a los mensajes directos de una cuenta profesional de Instagram a través de las API de Meta, para que las preguntas rutinarias reciban respuesta al instante y el resto llegue a una persona. El bot solo puede responder después de que alguien te escriba y tiene 24 horas para hacerlo; los agentes humanos pueden responder hasta 7 días después con la etiqueta human agent.",
    keyFacts: [
      "Las API de mensajería de Instagram funcionan con cuentas profesionales (de empresa o de creador).",
      "Tu app solo puede escribir a un usuario después de que este te escriba, y entonces tiene 24 horas para responder.",
      "La etiqueta human agent permite responder en un plazo de 7 días, tras la revisión de la app.",
      "Las respuestas privadas a comentarios pueden enviarse en los 7 días siguientes al comentario.",
      "En Instagram, Meta ha sustituido el protocolo de traspaso (handover protocol) por Conversation Routing.",
    ],
    sections: [
      {
        heading: "Qué necesitas antes de automatizar los DM de Instagram",
        blocks: [
          {
            type: "p",
            text: "Las API de mensajería de Instagram funcionan con cuentas profesionales. Hay dos tipos: las cuentas de empresa, para comercios, negocios locales, marcas, organizaciones y proveedores de servicios, y las cuentas de creador, para figuras públicas, creadores de contenido, artistas e influencers. Ten en cuenta que pasar una cuenta personal privada a profesional la hace pública.",
          },
          {
            type: "table",
            caption: "Dos formas de conectar la mensajería de Instagram",
            head: ["", "Instagram API with Instagram Login", "Instagram Messaging API (Messenger Platform)"],
            rows: [
              ["Página de Facebook", "No es necesaria", "La cuenta de Instagram debe estar vinculada a una página de Facebook"],
              ["Envío de mensajes", "Token de acceso de usuario de Instagram con el permiso instagram_business_manage_messages", "El mismo endpoint /PAGE_ID/messages que Messenger, con el ID del cliente con ámbito de Instagram (Instagram-scoped ID)"],
              ["Mensajes entrantes", "Webhooks de mensajería", "El campo de webhook messages, junto con los mensajes de Messenger"],
              ["Encaja bien con", "Empresas y creadores que solo usan Instagram", "Equipos que ya tienen un bot de Messenger o un helpdesk conectado a Meta"],
            ],
          },
          {
            type: "p",
            text: "En ambos casos, el titular de la cuenta debe permitir el acceso a los mensajes en «Connected tools», dentro de la configuración de mensajes de Instagram; si no, la API no puede gestionar las conversaciones. Zendesk señala que este interruptor hay que activarlo en la app móvil de Instagram, no en la web. Si tu app da servicio a cuentas profesionales que no son tuyas ni gestionas, también necesita Advanced Access a través de la revisión de apps de Meta.",
          },
        ],
      },
      {
        heading: "Ventanas de mensajería y la etiqueta human agent",
        blocks: [
          {
            type: "p",
            text: "Tu app solo puede escribir a alguien después de que esa persona escriba a tu cuenta, y tiene 24 horas para responder a cada mensaje. Para los problemas que llevan más tiempo, como una solicitud que llega mientras tu empresa está cerrada el fin de semana, la etiqueta human agent permite que una persona responda en un plazo de 7 días. La etiqueta solo está disponible para las apps que han superado la revisión de apps.",
          },
          {
            type: "table",
            caption: "Límites de los DM de Instagram que conviene conocer",
            head: ["Norma", "Qué significa para tu bot"],
            rows: [
              ["Ventana de respuesta de 24 horas", "Las respuestas automáticas deben enviarse en las 24 horas siguientes al mensaje del cliente"],
              ["Etiqueta human agent (7 días)", "Las respuestas tardías las envía una persona, tras la revisión de la app"],
              ["Sin mensajes de grupo", "La API no admite conversaciones de grupo"],
              ["Carpeta de solicitudes", "La API no devuelve las conversaciones de la carpeta Solicitudes (Requests) que llevan 30 días inactivas"],
            ],
          },
        ],
      },
      {
        heading: "Del comentario al DM: respuestas privadas",
        blocks: [
          {
            type: "p",
            text: "Muchas preguntas de soporte empiezan en los comentarios, como «¿Hay stock de esto?» o «¿Cómo lo devuelvo?». Las respuestas privadas permiten a tu cuenta contestar a un comentario con un mensaje directo a quien lo ha escrito. Funcionan con comentarios en publicaciones, reels y anuncios, y con comentarios de Instagram Live. Una respuesta privada es un único mensaje, enviado en los 7 días siguientes al comentario, que incluye automáticamente un enlace a la publicación o al comentario.",
          },
          {
            type: "p",
            text: "Las respuestas privadas ya no necesitan la etiqueta human agent. Si la persona contesta a tu respuesta privada, ese mensaje inicia una conversación normal y se aplica la ventana habitual de 24 horas. Una configuración práctica: vigila los comentarios en busca de palabras clave de soporte, envía una respuesta privada con una respuesta o una pregunta y deja que el bot de DM siga desde ahí, manteniendo los números de pedido y los datos personales fuera de los comentarios públicos.",
          },
        ],
      },
      {
        heading: "Ice breakers y puntos de entrada",
        blocks: [
          {
            type: "p",
            text: "Los ice breakers son preguntas predefinidas que la gente puede tocar al iniciar una conversación nueva con tu cuenta, como «¿Dónde está mi pedido?» o «Hablar con soporte». Cuando alguien toca una, tu app recibe un evento de webhook messaging_postback, así que cada ice breaker puede iniciar su propio flujo del bot. Los ice breakers pueden configurarse en varios idiomas, y se muestra la versión adecuada según la configuración regional del usuario. Úsalos para tus preguntas de soporte más habituales, dirige cada uno a un flujo concreto y revisa cuáles toca realmente la gente para sustituir los que nadie usa.",
          },
          {
            type: "p",
            text: "Los enlaces ig.me pueden pasar un parámetro de referencia (referral) a una conversación, por ejemplo para indicar al bot desde qué página de producto llega el cliente. En las conversaciones nuevas, Meta exige que haya ice breakers configurados para que llegue ese parámetro de referencia.",
          },
        ],
      },
      {
        heading: "Pasar los DM a una persona",
        blocks: [
          {
            type: "p",
            text: "En Instagram, Meta ya no admite el protocolo de traspaso y ha trasladado a todas las empresas a Conversation Routing. Te permite pasar el control del hilo a la bandeja de entrada de Instagram o a una bandeja de entrada de terceros, como un helpdesk. Durante la revisión de la app, Meta espera que demuestres que, cuando se produce una escalada, la titularidad del hilo pasa a la bandeja de entrada y el agente puede responder desde allí.",
          },
          {
            type: "p",
            text: "Hay dos particularidades que conviene conocer. Las respuestas enviadas a través de una app de terceros mueven el hilo a la carpeta General, y los mensajes entregados a través de la plataforma no incluyen la información de carpeta que se ve en la app de Instagram. En el canal Instagram Direct de Zendesk, las respuestas hechas directamente en Instagram no se añaden al ticket, así que los agentes deben responder desde Zendesk.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura bots de DM para Instagram que responden a las preguntas habituales, recogen datos y pasan las conversaciones a tu equipo en Zendesk, Freshdesk, Jira, Slack o una herramienta interna, sobre la base de API, webhooks y Make o n8n. Un Starter Chat Bot ({{price:starter}}) cubre uno o dos canales; un Standard Chat Bot ({{price:standard}}) cubre de tres a cinco, como Instagram, Messenger y tu web. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implantaciones llevan 1–3 semanas. La llamada de Health Check gratuita de 30 minutos es el punto de partida.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo automatizar los DM de una cuenta personal de Instagram?",
        a: "No. Las API de mensajería de Meta funcionan con cuentas profesionales, que pueden ser de empresa o de creador.",
      },
      {
        q: "¿Necesito una página de Facebook para automatizar los DM de Instagram?",
        a: "No con la Instagram API with Instagram Login, que no requiere una página vinculada. La Instagram Messaging API, a través de la Messenger Platform, sí la requiere.",
      },
      {
        q: "¿Cuánto puedo esperar antes de responder a un DM?",
        a: "Las respuestas automáticas deben enviarse en las 24 horas siguientes al mensaje del cliente. Un agente humano puede responder hasta 7 días después con la etiqueta human agent, una vez que tu app supere la revisión.",
      },
      {
        q: "¿Puedo enviar un DM a alguien que ha comentado mi publicación?",
        a: "Sí, con una respuesta privada: un único mensaje enviado en los 7 días siguientes al comentario, que incluye automáticamente un enlace a la publicación o al comentario.",
      },
    ],
    sources: [
      {
        label: "Meta for Developers — Instagram API with Instagram Login: Send Messages",
        url: "https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/",
      },
      {
        label: "Meta for Developers — Instagram Platform overview",
        url: "https://developers.facebook.com/docs/instagram-platform/overview/",
      },
      {
        label: "Meta for Developers — Instagram Messaging: Human Agent Escalation",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/human-agent-escalation",
      },
      {
        label: "Meta for Developers — Send a message (Messenger Platform, private replies)",
        url: "https://developers.facebook.com/documentation/business-messaging/messenger-platform/send-messages",
      },
      {
        label: "Meta for Developers — Using ig.me Links",
        url: "https://developers.facebook.com/documentation/business-messaging/instagram-messaging/features/ig-me-links",
      },
      {
        label: "Meta for Developers — Messenger Platform changelog",
        url: "https://developers.facebook.com/docs/messenger-platform/changelog/",
      },
      {
        label: "Instagram Help Center — Set up a professional Instagram account",
        url: "https://help.instagram.com/502981923235522",
      },
      {
        label: "Zendesk Help Center — Adding and configuring the Instagram Direct channel",
        url: "https://support.zendesk.com/hc/en-us/articles/4408835013018-Adding-and-configuring-Instagram-Direct",
      },
    ],
    related: [
      "facebook-messenger-bot-customer-service",
      "chatbot-to-human-handoff",
      "ai-chatbot-for-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Chatbot web
  // ---------------------------------------------------------------------------
  {
    key: "website-chatbot-for-support",
    slug: "chatbot-web-atencion-al-cliente",
    category: "channels",
    navLabel: "Chatbot web para soporte",
    primaryKeyword: "chatbot web para atención al cliente",
    title: "Chatbot web para atención al cliente: widget y traspaso",
    description:
      "Chatbot web para atención al cliente: widgets de helpdesk como Zendesk y Freshchat, traspaso del bot al agente, fuera de horario y accesibilidad WCAG.",
    h1: "Chatbot web para atención al cliente: widgets, traspaso y accesibilidad",
    intro:
      "Un chatbot web para atención al cliente es un widget de chat en tu web o en tu centro de ayuda donde un bot responde a las preguntas habituales, recoge datos y pasa la conversación a un agente en directo cuando no puede ayudar. La mayoría de los helpdesks incluyen su propio widget, así que el trabajo real está en configurar los flujos del bot, el traspaso, el comportamiento fuera de horario y la accesibilidad.",
    keyFacts: [
      "El Web Widget de mensajería de Zendesk se instala añadiendo un fragmento de código a cada página en la que deba aparecer.",
      "La mensajería de Zendesk puede mostrar respuestas distintas dentro y fuera del horario de atención.",
      "Los agentes de IA de Freshdesk pueden configurarse para recoger los datos del cliente antes de transferirlo a una persona.",
      "Las WCAG 2.2 exigen que toda la funcionalidad pueda manejarse con el teclado (2.1.1, nivel A).",
      "La técnica role=\"log\" del W3C permite que los lectores de pantalla anuncien los nuevos mensajes del chat a medida que llegan.",
    ],
    sections: [
      {
        heading: "¿Widget nativo del helpdesk o uno a medida?",
        blocks: [
          {
            type: "p",
            text: "Si ya usas un helpdesk, empieza por su widget. Los chats llegan a la misma cola que el email y los mensajes de redes sociales, los agentes responden desde un único espacio de trabajo y el proveedor mantiene el código del widget.",
          },
          {
            type: "ul",
            items: [
              "Web Widget de Zendesk (mensajería): en Admin Center, ve a «Channels > Messaging and social > Messaging», abre el widget y copia el código de la sección «Installation». Añádelo al código fuente de cada página en la que deba aparecer el widget, y asegúrate de que tu firewall permite el widget.",
              "Widget web de Freshchat (Freshdesk): copia el código de inserción de la configuración del canal de chat web y añádelo a cada página en la que deba aparecer el widget. Freshworks también documenta cómo instalarlo en WordPress, Shopify y Squarespace, y en apps de iOS y Android.",
            ],
          },
          {
            type: "table",
            caption: "Cómo elegir un widget",
            head: ["Opción", "Encaja bien cuando", "Ojo con"],
            rows: [
              ["Widget nativo del helpdesk", "Quieres chats, tickets e informes en un mismo lugar", "El diseño y la lógica del bot se limitan a lo que admite el proveedor"],
              ["Widget nativo con un bot a medida", "Necesitas lógica o integraciones que el bot integrado no tiene", "Hay que montar y probar el traspaso y el paso de contexto"],
              ["Widget totalmente a medida", "El chat forma parte de la interfaz de tu producto", "La accesibilidad, la disponibilidad y la integración del lado del agente corren de tu cuenta"],
            ],
          },
        ],
      },
      {
        heading: "Diseñar el traspaso del bot a una persona",
        blocks: [
          {
            type: "p",
            text: "El traspaso es donde fallan la mayoría de los bots web. Uno bueno lleva al cliente hasta una persona sin obligarle a repetirse. Los dos principales helpdesks admiten este patrón:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: al añadir un agente de IA a un canal de mensajería, la respuesta de mensajería predeterminada se sustituye por las respuestas propias del agente de IA. En la receta de flujo de trabajo de Zendesk, el agente de IA saluda al cliente, muestra un formulario para recoger lo que necesitan los agentes, le dice al cliente que su solicitud pasa al equipo y después reenvía la conversación a un agente, que recibe un aviso y ve los datos al aceptarla. La receta usa un formulario más corto, sin nombre ni email, para los clientes que han iniciado sesión.",
              "Freshchat y Freshdesk: los flujos del bot hacen el traspaso con acciones como «Assign to group» o «Make available for assignment», y los ajustes de traspaso de los agentes de IA de Freshdesk incluyen una opción para recoger los datos del cliente antes de la transferencia.",
            ],
          },
          {
            type: "p",
            text: "Decide qué recoger en función de lo primero que preguntan tus agentes. Los campos típicos son el nombre y el email para los visitantes que no han iniciado sesión, un número de pedido o de cuenta, el tipo de incidencia elegido con botones, una breve descripción con las palabras del propio cliente y la página en la que estaba.",
          },
        ],
      },
      {
        heading: "Cobertura fuera de horario",
        blocks: [
          {
            type: "p",
            text: "Un widget que promete «un agente te atenderá en breve» a las 2 de la madrugada hace más daño que no tener chat. Planifica qué pasa cuando no hay nadie conectado:",
          },
          {
            type: "ul",
            items: [
              "Define el horario de atención: los canales de mensajería de Zendesk pueden usar un horario de atención y mostrar respuestas distintas dentro y fuera de ese horario.",
              "Convierte los chats en tickets: en la receta de Zendesk, el agente de IA escala a un agente en directo dentro del horario de atención y, fuera de él, recoge los datos del cliente y escala la solicitud como ticket de email para hacer el seguimiento.",
              "Deja que el bot responda lo que pueda: las respuestas a preguntas frecuentes, las consultas del estado de pedidos y los enlaces al centro de ayuda funcionan a cualquier hora.",
              "Di cuándo vas a responder: indica al cliente tu horario y por dónde le llegará la respuesta, por ejemplo por email.",
            ],
          },
        ],
      },
      {
        heading: "Nociones básicas de accesibilidad para widgets de chat",
        blocks: [
          {
            type: "p",
            text: "Un widget de chat es contenido interactivo superpuesto a tu web, así que debe cumplir el mismo nivel de accesibilidad que el resto de la página. Las WCAG 2.2 son la versión actual del W3C, y estos criterios de conformidad son especialmente relevantes para el chat:",
          },
          {
            type: "table",
            caption: "Criterios de las WCAG 2.2 que conviene comprobar en un widget de chat",
            head: ["Criterio", "Nivel", "Qué significa para un widget de chat"],
            rows: [
              ["2.1.1 Teclado", "A", "Abrir el widget, escribir, elegir botones y cerrarlo funcionan sin ratón"],
              ["2.4.7 Foco visible", "AA", "Los usuarios ven qué botón o campo tiene el foco del teclado"],
              ["2.4.11 Foco no oculto (mínimo)", "AA", "El botón de apertura o el panel de chat abierto no ocultan por completo el elemento con foco de la página"],
              ["4.1.2 Nombre, función, valor", "A", "Los botones personalizados, los menús y el botón de apertura exponen sus nombres y estados a las tecnologías de apoyo"],
              ["4.1.3 Mensajes de estado", "AA", "Avisos como «Mensaje enviado» se anuncian sin mover el foco"],
            ],
          },
          {
            type: "p",
            text: "Para la conversación en sí, la técnica ARIA23 del W3C marca el historial del chat con role=\"log\": los mensajes nuevos se añaden al final de la región y los lectores de pantalla los anuncian a medida que aparecen. Con un widget de un proveedor, prueba tu propia configuración con teclado y con un lector de pantalla, ya que los colores personalizados y el contenido del bot pueden seguir causando problemas.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "TascaLab configura chatbots web sobre el helpdesk que ya usas, como Zendesk o Freshdesk, o conecta un bot a medida a Jira, Slack o herramientas internas mediante API, webhooks y Make o n8n. Un Starter Chat Bot ({{price:starter}}) cubre uno o dos canales con preguntas frecuentes y recogida básica de información; un Standard Chat Bot ({{price:standard}}) cubre de tres a cinco canales con conversaciones más complejas y traspasos más fluidos. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, sin costes ocultos, y la mayoría de las implantaciones llevan 1–3 semanas. Empieza con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Necesito una herramienta de chatbot aparte si mi helpdesk tiene un widget?",
        a: "No necesariamente. Tanto Zendesk como Freshdesk permiten conectar un bot o un agente de IA a su widget web. Una herramienta aparte tiene sentido cuando necesitas lógica o integraciones que el bot integrado no ofrece.",
      },
      {
        q: "¿Qué debe recoger el bot antes de pasar la conversación a un agente?",
        a: "Lo que tus agentes preguntan primero: normalmente los datos de contacto de los visitantes anónimos, un número de pedido o de cuenta, el tipo de incidencia y una breve descripción. Tanto Zendesk como Freshdesk permiten recoger datos antes de la transferencia.",
      },
      {
        q: "¿Qué debe hacer un chatbot web fuera del horario de atención?",
        a: "Responder lo que pueda, explicar tu horario y convertir el resto en un ticket. La receta documentada de Zendesk recoge los datos del cliente fuera de horario y escala la solicitud como ticket de email.",
      },
      {
        q: "¿Qué norma de accesibilidad se aplica a un widget de chat?",
        a: "Las WCAG 2.2 son la versión actual del W3C. El manejo con teclado (2.1.1), el foco visible (2.4.7), los nombres y funciones de los controles (4.1.2) y los mensajes de estado (4.1.3) son especialmente relevantes para el chat.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — Installing the Web Widget for messaging",
        url: "https://support.zendesk.com/hc/en-us/articles/4500748175258-Installing-the-Web-Widget-for-messaging",
      },
      {
        label: "Zendesk Help Center — Configuring messaging responses and business hours",
        url: "https://support.zendesk.com/hc/en-us/articles/4500737327258-Configuring-messaging-responses-and-business-hours",
      },
      {
        label: "Zendesk Help Center — Workflow recipe: Using an AI agent to collect customer info and immediately escalate to a human agent",
        url: "https://support.zendesk.com/hc/en-us/articles/10412442245914-Workflow-recipe-Using-an-AI-agent-to-collect-customer-info-and-immediately-escalate-to-a-human-agent",
      },
      {
        label: "Freshworks Support — Install Freshchat on your web/apps",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004353-embed-the-freshchat-widget-on-your-website",
      },
      {
        label: "Freshworks Support — Gracefully handover conversations from bots to your Freshchat agents",
        url: "https://crmsupport.freshworks.com/support/solutions/articles/50000004659-assigning-bot-conversations-to-your-agents",
      },
      {
        label: "Freshdesk Support — Configure handover settings for AI Agents",
        url: "https://support.freshdesk.com/support/solutions/articles/50000012026-configure-handover-settings-for-ai-agents",
      },
      {
        label: "W3C — Web Content Accessibility Guidelines (WCAG) 2.2",
        url: "https://www.w3.org/TR/WCAG22/",
      },
      {
        label: "W3C — ARIA23: Using role=log to identify sequential information updates",
        url: "https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "chatbot-to-human-handoff",
      "freshdesk-automation",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. SMS
  // ---------------------------------------------------------------------------
  {
    key: "sms-customer-support-automation",
    slug: "automatizacion-sms-atencion-al-cliente",
    category: "channels",
    navLabel: "Automatización de soporte por SMS",
    primaryKeyword: "automatización de atención al cliente por SMS",
    title: "Automatización de atención al cliente por SMS: 10DLC y STOP",
    description:
      "Cómo funciona la automatización de atención al cliente por SMS: webhooks entrantes, A2P 10DLC y verificación toll-free, bajas con STOP, segmentos y tickets.",
    h1: "Automatización de atención al cliente por SMS: cómo funciona y qué hay que configurar",
    intro:
      "La automatización de la atención al cliente por SMS conecta un número de teléfono de empresa a un código que lee los mensajes entrantes, responde a las preguntas sencillas y convierte todo lo demás en tickets. Con un proveedor como Twilio Programmable Messaging, cada SMS entrante se envía a tu webhook y tu código responde a través de la API. En EE. UU., además, tienes que registrar el número y respetar las bajas con STOP; si no, tus mensajes se bloquean.",
    keyFacts: [
      "Twilio envía cada SMS entrante a la URL de tu webhook con campos como From, To, Body y MessageSid.",
      "Según Twilio, los operadores de EE. UU. tratan cualquier mensaje enviado desde una plataforma como Twilio como tráfico de aplicación a persona (A2P).",
      "Los mensajes desde números 10DLC de EE. UU. no registrados se bloquean con el error 30034, incluso mientras el registro está pendiente.",
      "Twilio gestiona por defecto STOP y las demás palabras clave estándar de baja en los números long code.",
      "Un segmento SMS en GSM-7 admite 160 caracteres; un segmento UCS-2, necesario para los emojis, admite 70.",
    ],
    sections: [
      {
        heading: "Cómo funciona la automatización del soporte por SMS",
        blocks: [
          {
            type: "p",
            text: "Consigues un número de teléfono de un proveedor de SMS, diriges su webhook de mensajes entrantes a tu código y envías las respuestas a través de la API del proveedor. Con Twilio Programmable Messaging, cada SMS enviado a tu número se convierte en una petición HTTP a la URL de tu webhook. La petición incluye el remitente en From, tu número en To, el texto del mensaje en Body (hasta 1.600 caracteres) y un MessageSid de 34 caracteres que puedes usar para recuperar el mensaje más tarde a través de la API REST.",
          },
          {
            type: "p",
            text: "Tu endpoint responde con TwiML, el formato XML de Twilio que le indica qué hacer a continuación, como enviar una respuesta. Si tu helpdesk va a responder más tarde y el bot no tiene nada que decir, devuelve un elemento Response vacío para que Twilio acepte el mensaje sin responder.",
          },
          {
            type: "ol",
            items: [
              "El cliente envía un SMS a tu número de soporte.",
              "Twilio envía el mensaje a tu webhook.",
              "Tu bot responde al momento a una pregunta habitual o pide datos como un número de pedido.",
              "Todo lo que el bot no puede resolver se convierte en un ticket en tu helpdesk, vinculado al número de teléfono del cliente.",
              "Las respuestas de los agentes vuelven al cliente como SMS desde el mismo número.",
            ],
          },
        ],
      },
      {
        heading: "Registro en EE. UU.: A2P 10DLC y verificación toll-free",
        blocks: [
          {
            type: "p",
            text: "La documentación de Twilio indica que los operadores de EE. UU. consideran de aplicación a persona (A2P) cualquier mensaje enviado desde una plataforma como Twilio. Si envías SMS o MMS a números de EE. UU. desde un long code estándar de 10 dígitos (10DLC), debes registrarte en A2P 10DLC. El registro tiene dos partes: una marca (brand), que indica a los operadores quién envía, y una campaña (campaign), que describe el caso de uso y cómo las personas se dan de alta, se dan de baja y piden ayuda. Una vez aprobada la campaña, añades tu número al Messaging Service vinculado a ella.",
          },
          {
            type: "p",
            text: "El registro no es un mero trámite opcional. Twilio bloquea los mensajes con destino a EE. UU. desde números 10DLC que no están vinculados a una campaña aprobada, incluidos los números cuyo registro sigue pendiente, y sus tarifas de mensajería se siguen aplicando a los mensajes bloqueados. Los números toll-free (gratuitos) pasan por un proceso aparte llamado Toll-Free Verification.",
          },
          {
            type: "table",
            caption: "Qué exige Twilio antes de enviar SMS a clientes de EE. UU.",
            head: ["Tipo de remitente", "Requisito", "Qué pasa si no se cumple"],
            rows: [
              ["Long code 10DLC", "Marca y campaña A2P 10DLC aprobadas, con el número en el Messaging Service de la campaña", "Los mensajes se bloquean con el error 30034"],
              ["10DLC, autónomo (sole proprietor)", "El mismo registro, pero una campaña de autónomo solo puede tener un número 10DLC registrado", "Los números adicionales del Messaging Service siguen sin registrar"],
              ["Número toll-free", "Toll-Free Verification aprobada", "Los mensajes a números móviles de EE. UU. y Canadá fallan con el error 30032"],
            ],
          },
        ],
      },
      {
        heading: "Palabras clave STOP, bajas y consentimiento",
        blocks: [
          {
            type: "p",
            text: "Twilio gestiona por ti las palabras clave estándar de baja en inglés en los números long code. Su documentación enumera STOP, UNSUBSCRIBE, END, QUIT, STOPALL, REVOKE, OPTOUT y CANCEL, que se reconocen sin distinguir entre mayúsculas y minúsculas. Twilio envía una confirmación estándar, y tus mensajes dejan de llegar a ese número hasta que el cliente envía START. En los números toll-free, solo START y UNSTOP vuelven a dar de alta a un cliente. Advanced Opt-Out, desactivado por defecto, te permite personalizar las palabras clave y las respuestas en un Messaging Service, aunque las palabras clave reservadas como START no se pueden eliminar.",
          },
          {
            type: "p",
            text: "Asegúrate de que tu bot no envía nada más a un cliente que se ha dado de baja. Las normas de EE. UU. también lo regulan. La orden de la FCC de 2024 (FCC 24-24) establece que los consumidores pueden revocar el consentimiento a las robocalls y los robotexts por cualquier medio razonable, que una respuesta como stop, quit, end, revoke, opt out, cancel o unsubscribe se considera razonable, y que las revocaciones deben atenderse en un plazo razonable de no más de diez días hábiles. En 2026, la FCC adoptó una nueva orden (FCC 26-67) que permite a quienes llaman designar un único método automatizado de revocación, como un SMS de respuesta con palabras estándar como stop, quit o unsubscribe, siempre que el método se comunique claramente, y abre una consulta sobre acortar el plazo. Comprueba qué versión de las normas está en vigor cuando lances el servicio.",
          },
          {
            type: "note",
            text: "Esto es un resumen del texto de las normas de la FCC, no asesoramiento jurídico. Comprueba las normas vigentes con tu propio asesor legal antes de enviar SMS automatizados a clientes de EE. UU.",
          },
        ],
      },
      {
        heading: "Longitud de los mensajes y segmentos",
        blocks: [
          {
            type: "p",
            text: "Los SMS se envían en segmentos, y cada segmento se factura, así que la longitud de las respuestas de tu bot afecta al coste. La documentación de Twilio da estos límites:",
          },
          {
            type: "table",
            caption: "Tamaños de segmento SMS según la documentación de Twilio",
            head: ["Codificación", "Mensaje único", "Por segmento si se divide", "Cuándo se usa"],
            rows: [
              ["GSM-7", "160 caracteres", "153 caracteres", "Texto que solo usa el juego de caracteres GSM-7"],
              ["UCS-2", "70 caracteres", "67 caracteres", "Cualquier mensaje con al menos un carácter fuera de GSM-7, como un emoji"],
            ],
          },
          {
            type: "p",
            text: "Un solo carácter que no sea GSM-7 hace que todo el mensaje pase a UCS-2, no solo ese carácter. Los emojis, las comillas tipográficas y las rayas largas son causas habituales, algo importante cuando un bot copia respuestas de artículos del centro de ayuda. Smart Encoding de Twilio puede sustituir algunos de estos caracteres por equivalentes GSM-7. El texto de un mensaje saliente puede tener hasta 1.600 caracteres, pero las respuestas cortas con un enlace al artículo completo suelen funcionar mejor.",
          },
        ],
      },
      {
        heading: "Conectar los SMS a tu helpdesk",
        blocks: [
          {
            type: "p",
            text: "Zendesk ofrece SMS mediante Zendesk Text. Un SMS enviado a tu número de Text crea un ticket automáticamente, y las respuestas públicas de ese ticket vuelven al cliente como SMS. Zendesk también indica que los SMS a consumidores de EE. UU. desde números no registrados se bloquearán, así que el registro A2P 10DLC también se aplica ahí.",
          },
          {
            type: "p",
            text: "Si tu helpdesk no tiene canal de SMS, o necesitas una lógica que el canal integrado no ofrece, puede encargarse un pequeño servicio intermedio. Recibe el webhook de Twilio, ejecuta el bot, crea o actualiza tickets a través de la API del helpdesk y devuelve las respuestas de los agentes a través de Twilio.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "Los canales de bot que ofrece TascaLab son web, teléfono, WhatsApp, Telegram, Facebook Messenger e Instagram. Los SMS no están en esa lista, pero otros canales con API pueden valorarse en la llamada de Health Check gratuita de 30 minutos. TascaLab trabaja sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira y Slack, mediante API, webhooks y Make o n8n. Un Starter Chat Bot cuesta {{price:starter}} para uno o dos canales y un Standard Chat Bot, {{price:standard}} para entre tres y cinco. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento, documentación básica y ningún coste oculto, y la mayoría de las implantaciones llevan 1–3 semanas.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Necesito el registro A2P 10DLC para un bot de soporte por SMS?",
        a: "Sí, si envías SMS o MMS a números de EE. UU. desde un long code de 10 dígitos a través de una plataforma como Twilio. Twilio bloquea con el error 30034 los mensajes con destino a EE. UU. desde números 10DLC no registrados, también mientras el registro está pendiente.",
      },
      {
        q: "¿Qué pasa cuando un cliente envía STOP?",
        a: "En los números long code, Twilio gestiona por defecto STOP y las demás palabras clave estándar de baja. Envía una confirmación, y tus mensajes dejan de llegar a ese número hasta que el cliente envía START.",
      },
      {
        q: "¿Por qué un mensaje corto ha contado como dos segmentos?",
        a: "Probablemente contenía un carácter fuera de GSM-7, como un emoji o unas comillas tipográficas. Eso hace que todo el mensaje pase a UCS-2, que solo admite 70 caracteres en un único segmento.",
      },
      {
        q: "¿Puedo usar un número toll-free en lugar de un número 10DLC?",
        a: "Sí, pero necesita Toll-Free Verification. Hasta que se apruebe, los mensajes a números móviles de EE. UU. y Canadá fallan con el error 30032.",
      },
    ],
    sources: [
      {
        label: "Twilio Docs — Twilio's request to your incoming message Webhook URL",
        url: "https://www.twilio.com/docs/messaging/guides/webhook-request",
      },
      {
        label: "Twilio Docs — Programmable Messaging and A2P 10DLC",
        url: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc",
      },
      {
        label: "Twilio Docs — Error 30034: US A2P 10DLC - Message from an Unregistered Number",
        url: "https://www.twilio.com/docs/api/errors/30034",
      },
      {
        label: "Twilio Docs — Error 30032: Toll-Free Number Has Not Been Verified",
        url: "https://www.twilio.com/docs/api/errors/30032",
      },
      {
        label: "Twilio Docs — Customize users' opt-in and opt-out experience with Advanced Opt-Out",
        url: "https://www.twilio.com/docs/messaging/tutorials/advanced-opt-out",
      },
      {
        label: "Twilio Docs — How long can a message be?",
        url: "https://www.twilio.com/docs/glossary/what-sms-character-limit",
      },
      {
        label: "FCC — FCC 24-24 Report and Order on revoking consent under the TCPA",
        url: "https://docs.fcc.gov/public/attachments/FCC-24-24A1.pdf",
      },
      {
        label: "FCC — FCC 26-67 Report and Order on revocation of consent (2026)",
        url: "https://docs.fcc.gov/public/attachments/FCC-26-67A1.pdf",
      },
      {
        label: "Zendesk Help Center — Getting started with Text",
        url: "https://support.zendesk.com/hc/en-us/articles/4408823788314-Getting-started-with-Text",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "zendesk-automation",
      "omnichannel-customer-support",
    ],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 7. Viber
  // ---------------------------------------------------------------------------
  {
    key: "viber-chatbot-for-customer-support",
    slug: "chatbot-viber-atencion-al-cliente",
    category: "channels",
    navLabel: "Chatbot de Viber para soporte",
    primaryKeyword: "chatbot de Viber para atención al cliente",
    title: "Chatbot de Viber para atención al cliente: Bot API y normas",
    description:
      "Cómo funciona un chatbot de Viber para atención al cliente: token, set_webhook, callbacks, a quién puede escribir el bot, teclados y traspaso a tu helpdesk.",
    h1: "Chatbot de Viber para atención al cliente: cómo funciona y cómo configurarlo",
    intro:
      "Un chatbot de Viber para atención al cliente es una cuenta de bot conectada a la REST Bot API de Viber. Tu servidor registra un webhook con set_webhook, recibe callbacks cuando los clientes abren el chat o envían mensajes, y responde con send_message usando el token de autenticación del bot. Los bots de Viber solo pueden seguir escribiendo a los usuarios que se han suscrito, así que toda conversación de soporte empieza por el cliente.",
    keyFacts: [
      "Cada petición a la API lleva el token de autenticación del bot en la cabecera X-Viber-Auth-Token.",
      "Las URL de webhook deben usar SSL; Viber no admite certificados autofirmados.",
      "Los callbacks message, subscribed y unsubscribed son obligatorios y no se pueden filtrar.",
      "Un evento conversation_started permite un único mensaje de bienvenida, no una conversación continuada.",
      "A fecha de octubre de 2026, la documentación para desarrolladores de Viber indica que los bots solo pueden crearse en condiciones comerciales.",
    ],
    sections: [
      {
        heading: "Cómo funciona un bot de soporte en Viber",
        blocks: [
          {
            type: "p",
            text: "Tu bot se identifica con un token de autenticación. Cada petición a la REST Bot API debe incluirlo en una cabecera HTTP llamada X-Viber-Auth-Token; si lo omites, recibes un error missing_auth_token. Registras un webhook HTTPS público con set_webhook, Viber le envía callbacks a medida que ocurren las cosas, y tú respondes con send_message.",
          },
          {
            type: "p",
            text: "Cuando llamas a set_webhook, Viber comprueba tu URL enviándole un callback con el evento webhook. La comprobación solo se supera si tu servidor responde con el código de estado HTTP 200. Una respuesta correcta de set_webhook tiene status 0; una URL inaccesible devuelve status 1, invalidUrl.",
          },
          {
            type: "ol",
            items: [
              "El cliente abre tu bot desde un enlace de tu web, y Viber envía un callback conversation_started.",
              "Tu bot envía un único mensaje de bienvenida con botones para los temas habituales.",
              "El cliente responde, lo que le suscribe, y tu bot recibe un callback message.",
              "El bot responde a las preguntas sencillas y recoge los datos para todo lo demás.",
              "Los casos sin resolver se convierten en tickets del helpdesk, y las respuestas de los agentes vuelven a través de send_message.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks y eventos de callback",
        blocks: [
          {
            type: "p",
            text: "La URL del webhook debe usar SSL con un certificado válido de una autoridad de certificación de confianza. La lista opcional event_types de set_webhook controla qué callbacks recibes, pero algunos no se pueden desactivar.",
          },
          {
            type: "table",
            caption: "Callbacks de Viber que gestiona un bot de soporte",
            head: ["Evento", "Cuándo llega", "¿Se puede filtrar?"],
            rows: [
              ["webhook", "Justo después de set_webhook, para comprobar tu URL", "No, forma parte de la configuración"],
              ["conversation_started", "Un usuario abre un chat individual con el bot, por ejemplo mediante un deep link", "Sí"],
              ["subscribed", "Un usuario se suscribe al bot (no cuando la suscripción se produce con un primer mensaje)", "No"],
              ["unsubscribed", "Un usuario se da de baja; el bot ya no puede escribirle", "No"],
              ["message", "Un usuario envía un mensaje al bot", "No"],
              ["delivered, seen, failed", "Actualizaciones de estado de los mensajes que ha enviado el bot", "Sí"],
            ],
          },
          {
            type: "p",
            text: "Viber firma cada callback. La cabecera X-Viber-Content-Signature contiene un HMAC-SHA256 del cuerpo de la petición, con tu token de autenticación como clave, así que compruébala antes de procesar nada. Si tu webhook no devuelve HTTP 200, Viber reintenta el callback varias veces, así que asegúrate de que un callback repetido no cree un ticket duplicado.",
          },
        ],
      },
      {
        heading: "A quién puede escribir tu bot",
        blocks: [
          {
            type: "p",
            text: "Esta norma condiciona todo flujo de soporte en Viber: tu bot solo puede enviar mensajes a los usuarios que se han suscrito. Un evento conversation_started no es una suscripción. Permite un único mensaje de bienvenida, que según Viber debes enviar en un plazo de 5 minutos mediante send_message, incluyendo el parámetro receiver. El evento también se dispara para usuarios que ya están suscritos.",
          },
          {
            type: "p",
            text: "Un usuario se suscribe enviando un mensaje al bot. Ese primer mensaje genera un callback message, no un callback subscribed, así que guarda el ID de usuario de cualquiera de los dos eventos. Los usuarios pueden darse de baja en cualquier momento, lo que bloquea de inmediato los mensajes posteriores del bot, y recibes un callback unsubscribed con su ID. Si vuelven a suscribirse, se elimina cualquier context o tracking_data de la conversación.",
          },
          {
            type: "p",
            text: "Para iniciar conversaciones desde tu web, usa un deep link con el formato viber://pa?chatURI= seguido del URI de tu bot. Si añades un parámetro context, se pasa un valor, como la página de la que viene el cliente, al callback conversation_started. Viber advierte de que algunos navegadores pueden no reconocer el deep link. Para avisos de incidencias, la broadcast API envía hasta a 300 destinatarios por petición, y quien no esté suscrito aparece como fallido (failed).",
          },
        ],
      },
      {
        heading: "Envío de mensajes y teclados",
        blocks: [
          {
            type: "p",
            text: "Una petición send_message indica el destinatario (receiver, el ID de usuario), el tipo de mensaje y un objeto sender cuyo name es obligatorio y está limitado a 28 caracteres. Los mensajes de texto pueden tener hasta 7.000 caracteres. Dos campos opcionales son útiles para el soporte: tracking_data (hasta 4.096 caracteres), que Viber devuelve junto con la respuesta del usuario, así que puede guardar un ID de ticket o el paso actual de un flujo; y min_api_version, la versión mínima de la API del cliente necesaria para el mensaje, que por defecto es 1.",
          },
          {
            type: "p",
            text: "Se pueden añadir teclados a cualquier tipo de mensaje mediante el campo keyboard. Cada botón tiene un ActionType:",
          },
          {
            type: "ul",
            items: [
              "reply (el valor por defecto) envía al bot la respuesta del botón.",
              "open-url abre una URL, dentro de Viber o en un navegador externo según OpenURLType, y envía la URL al bot.",
              "También están disponibles location-picker, share-phone y none.",
            ],
          },
          {
            type: "p",
            text: "Dos ajustes del teclado ayudan en los flujos de soporte. InputFieldState con el valor hidden elimina el campo de texto cuando quieres que los clientes elijan un botón, y DefaultHeight con el valor true mantiene el teclado a la altura del teclado nativo.",
          },
        ],
      },
      {
        heading: "Condiciones comerciales y traspaso al helpdesk",
        blocks: [
          {
            type: "p",
            text: "A fecha de octubre de 2026, la documentación para desarrolladores de Viber indica que «desde el 5.02.24, los bots de Viber solo pueden crearse en condiciones comerciales», y las solicitudes se dirigen a Rakuten Viber directamente o a través de sus socios oficiales verificados. Pide a Viber o a un socio los precios actuales antes de empezar a desarrollar. La respuesta de send_message también incluye un campo de estado de facturación que muestra cómo se ha categorizado cada mensaje a efectos de facturación.",
          },
          {
            type: "p",
            text: "Para el traspaso a agentes, Zendesk incluye Viber entre los canales disponibles a través de Sunshine Conversations. Añadir canales de Sunshine Conversations al Agent Workspace requiere Suite Professional o superior, y además debes usar la mensajería y el Agent Workspace. Así, los mensajes se convierten en tickets y las respuestas de los agentes vuelven al cliente. Sin eso, el patrón habitual es un pequeño servicio que crea tickets mediante la API de tu helpdesk y envía las respuestas de los agentes con send_message.",
          },
        ],
      },
      {
        heading: "Cómo puede ayudarte TascaLab",
        blocks: [
          {
            type: "p",
            text: "Los canales de bot que ofrece TascaLab son web, teléfono, WhatsApp, Telegram, Facebook Messenger e Instagram. Viber no está en esa lista, pero otros canales con API pueden valorarse en la llamada de Health Check gratuita de 30 minutos. TascaLab trabaja sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira y Slack, mediante API, webhooks y Make o n8n. Un Starter Chat Bot cuesta {{price:starter}} para uno o dos canales y un Standard Chat Bot, {{price:standard}} para entre tres y cinco. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento, documentación básica y ningún coste oculto, y la mayoría de las implantaciones llevan 1–3 semanas.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puede un bot de Viber escribir primero a los clientes?",
        a: "Solo a los usuarios suscritos. Un evento conversation_started permite un único mensaje de bienvenida, pero para seguir enviando mensajes el usuario tiene que suscribirse, lo que ocurre cuando envía un mensaje al bot.",
      },
      {
        q: "¿Por qué falla set_webhook?",
        a: "Viber comprueba tu URL con un callback webhook y solo la acepta si tu servidor devuelve HTTP 200. La URL también necesita SSL con un certificado de una autoridad de confianza; no se admiten certificados autofirmados.",
      },
      {
        q: "¿Cómo puede saber mi bot de dónde viene un cliente?",
        a: "Añade un parámetro context a tu deep link viber://pa?chatURI=. Viber se lo pasa a tu bot en el callback conversation_started.",
      },
      {
        q: "¿Todavía puedo crear un bot de Viber gratis?",
        a: "A fecha de octubre de 2026, la documentación para desarrolladores de Viber indica que los bots solo pueden crearse en condiciones comerciales, directamente con Rakuten Viber o a través de sus socios oficiales verificados.",
      },
      {
        q: "¿Admite Zendesk Viber?",
        a: "Sí, a través de Sunshine Conversations. Zendesk indica que sus canales de Sunshine Conversations en el Agent Workspace requieren Suite Professional o superior.",
      },
    ],
    sources: [
      {
        label: "Viber Developers — Viber REST API",
        url: "https://developers.viber.com/docs/api/rest-bot-api/",
      },
      {
        label: "Viber Developers — Keyboards",
        url: "https://developers.viber.com/docs/tools/keyboards/",
      },
      {
        label: "Viber Developers — DeepLinks",
        url: "https://developers.viber.com/docs/tools/deep-links/",
      },
      {
        label: "Viber Developers — API Access White Paper",
        url: "https://developers.viber.com/docs/general/api-access-white-paper/",
      },
      {
        label: "Zendesk Help Center — Adding Sunshine Conversations channels to the Zendesk Agent Workspace",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836484378-Adding-Sunshine-Conversations-channels-to-the-Zendesk-Agent-Workspace",
      },
      {
        label: "Zendesk Help Center — What is Sunshine Conversations and how does it work?",
        url: "https://support.zendesk.com/hc/en-us/articles/6380323137306-What-is-Sunshine-Conversations-and-how-does-it-work",
      },
    ],
    related: [
      "ai-chatbot-for-customer-support",
      "telegram-support-bot",
      "chatbot-to-human-handoff",
    ],
    updated: "2026-10-19",
  },
];
