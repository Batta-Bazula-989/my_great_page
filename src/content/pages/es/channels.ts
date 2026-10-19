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
];
