import type { TranslatedPage } from "../../types";

export const helpdeskPages: TranslatedPage[] = [
  // ---------------------------------------------------------------------------
  // 1. Zendesk automation
  // ---------------------------------------------------------------------------
  {
    key: "zendesk-automation",
    slug: "automatizacion-zendesk",
    category: "helpdesks",
    navLabel: "Automatización de Zendesk",
    primaryKeyword: "automatización Zendesk",
    title: "Automatización Zendesk: triggers, automatizaciones y macros",
    description:
      "Cómo funciona la automatización en Zendesk: triggers, automatizaciones y macros, ejecución horaria, orden de triggers, enrutamiento, webhooks y API.",
    h1: "Automatización de Zendesk: triggers, automatizaciones, macros y enrutamiento",
    intro:
      "La automatización de Zendesk se basa en tres herramientas de reglas de negocio: los triggers, que se activan de inmediato cuando se crea o actualiza un ticket; las automatizaciones, que se ejecutan cada hora; y las macros, que los agentes aplican a mano. El enrutamiento (omnicanal o basado en habilidades), los webhooks y la API de Zendesk cubren lo que esas reglas no pueden hacer por sí solas. A continuación verás cómo se comporta cada pieza y qué conviene automatizar primero.",
    keyFacts: [
      "Los triggers de tickets se ejecutan inmediatamente después de crear o actualizar un ticket, en el orden en que aparecen en la lista.",
      "Las automatizaciones se ejecutan una vez cada hora sobre los tickets no cerrados, y cada una puede actuar sobre un máximo de 1.000 tickets por hora.",
      "Cada automatización necesita una condición que solo se cumpla una vez, o una acción que anule una condición; si no, se sigue activando.",
      "Las macros solo contienen acciones, sin condiciones, y solo pueden hacer lo que el agente que las aplica tiene permiso para hacer.",
      "Un webhook se conecta o bien a eventos de Zendesk o bien a triggers y automatizaciones, no a ambos.",
    ],
    sections: [
      {
        heading: "Triggers, automatizaciones y macros: diferencias",
        blocks: [
          {
            type: "p",
            text: "Las tres herramientas modifican tickets, pero se ponen en marcha de forma distinta. Según el propio Zendesk, la diferencia entre triggers y automatizaciones no está en qué acciones pueden realizar, sino en qué condiciones los activan. Las macros no tienen ninguna condición, porque nada evalúa el ticket automáticamente: es un agente quien decide cuándo aplicar una.",
          },
          {
            type: "table",
            caption: "Las tres herramientas de reglas de negocio de Zendesk",
            head: ["Herramienta", "Qué la activa", "Condiciones", "Uso típico"],
            rows: [
              [
                "Trigger",
                "Se crea o actualiza un ticket (se ejecuta de inmediato)",
                "Sí",
                "Enrutar tickets nuevos, rellenar campos, enviar notificaciones",
              ],
              [
                "Automatización",
                "Programación cada hora, según el tiempo transcurrido",
                "Sí, normalmente condiciones 'Hours since'",
                "Recordatorios, escalar tickets estancados, cerrar tickets resueltos",
              ],
              [
                "Macro",
                "Un agente la aplica manualmente",
                "No, solo acciones",
                "Respuestas predefinidas y actualizaciones repetibles de varios campos",
              ],
            ],
          },
          {
            type: "p",
            text: "Las tres se combinan bien. Un patrón habitual es una macro que añade una etiqueta, lo que activa de inmediato un trigger que busca esa etiqueta. Ten en cuenta que una macro solo puede hacer lo que el usuario actual tiene permiso para hacer, así que un agente con permisos limitados puede no ser capaz de aplicar todos los cambios que contiene una macro.",
          },
        ],
      },
      {
        heading: "Cómo funciona el orden de los triggers",
        blocks: [
          {
            type: "p",
            text: "Cada vez que se crea o actualiza un ticket, todos los triggers de tickets se ejecutan sobre él en un ciclo, en el orden de la lista. Si un trigger actualiza el ticket, el ciclo vuelve a empezar y todos los triggers se ejecutan de nuevo, salvo los que ya se han activado y han actualizado el ticket. Así, el cambio de un trigger puede hacer que se cumplan las condiciones de otro, aunque no se cumplieran un momento antes.",
          },
          {
            type: "p",
            text: "El orden que recomienda Zendesk para los triggers de tickets:",
          },
          {
            type: "ol",
            items: [
              "Triggers que cambian valores del ticket, como el estado, la prioridad u otros campos.",
              "Triggers que asignan el ticket.",
              "Triggers de notificación, al final, para que los correos y mensajes reflejen el estado final del ticket.",
            ],
          },
          {
            type: "p",
            text: "Si usas categorías de triggers, el orden de las categorías debe coincidir con el orden en que quieres que se ejecuten los triggers; se cambia con 'Edit order' en la lista de triggers. Usa la condición 'Ticket | Is | Created' para reglas que solo deben actuar sobre tickets nuevos (el enrutamiento es el caso clásico), y 'Ticket | Is | Updated' para cosas como las notificaciones de actualización. Los triggers de tickets no se ejecutan sobre tickets cerrados.",
          },
        ],
      },
      {
        heading: "Cada cuánto se ejecutan las automatizaciones de Zendesk y cómo evitar bucles",
        blocks: [
          {
            type: "p",
            text: "Las automatizaciones se ejecutan una vez cada hora sobre todos los tickets no cerrados. El momento es aproximado: una automatización empieza en algún punto dentro de la hora, no en un minuto fijo. Cada automatización puede actuar sobre un máximo de 1.000 tickets por hora, y el excedente espera a ejecuciones posteriores.",
          },
          {
            type: "p",
            text: "Como las automatizaciones vuelven a comprobar los mismos tickets cada hora, Zendesk exige que cada una incluya una condición que solo se cumpla una vez o una acción que anule al menos una condición. Sin ella, las condiciones siguen coincidiendo y la automatización se activa en un bucle infinito. La automatización estándar 'close ticket after solved' lo resuelve de forma natural: al cerrar el ticket, este deja de cumplir la condición 'Status is Solved'. En automatizaciones personalizadas, la solución habitual es añadir una etiqueta y excluir esa etiqueta en las condiciones.",
          },
          {
            type: "note",
            text: "Para las condiciones de tiempo, Zendesk recomienda 'Hours since ... greater than' en lugar de 'Hours since ... is'. Una condición 'is' puede pasarse por alto por completo si la automatización no se ejecuta justo durante esa hora. Una condición 'greater than' sigue necesitando una acción o una etiqueta que la anule.",
          },
        ],
      },
      {
        heading: "Opciones de enrutamiento para tickets entrantes",
        blocks: [
          {
            type: "p",
            text: "Los triggers pueden enrutar tickets asignando un grupo, un agente o habilidades, pero Zendesk también tiene funciones de enrutamiento específicas:",
          },
          {
            type: "ul",
            items: [
              "El enrutamiento omnicanal envía a los agentes tickets de correo electrónico, llamadas y mensajería según su disponibilidad y capacidad, y también puede tener en cuenta la prioridad y las habilidades.",
              "Los triggers pueden añadir habilidades a los tickets y marcarlas como obligatorias u opcionales. Las habilidades obligatorias limitan qué agentes son elegibles; las opcionales pueden caducar para que el ticket vuelva al modelo de enrutamiento normal.",
              "El enrutamiento basado en habilidades independiente es un modelo pull: los tickets se ordenan por habilidad y los agentes eligen el trabajo desde vistas basadas en habilidades. No se puede usar con tickets de voz ni de mensajería.",
            ],
          },
          {
            type: "p",
            text: "En las llamadas, el enrutamiento omnicanal es la única forma de que los triggers influyan en el enrutamiento, porque el ticket se crea en cuanto la llamada entra en la cola. Las funciones de enrutamiento varían según el plan, así que confirma qué incluye el tuyo antes de diseñar en torno a las habilidades.",
          },
        ],
      },
      {
        heading: "Webhooks y la API de Zendesk",
        blocks: [
          {
            type: "p",
            text: "Cuando una regla tiene que avisar a otro sistema, usa un webhook. Se crea en Admin Center y se elige su tipo de conexión: eventos de Zendesk, o trigger o automatización. Un webhook puede usar uno de los dos, no ambos, y el método de conexión no se puede cambiar después. En un trigger o una automatización, añade la acción 'Notify webhook', selecciona el webhook e introduce el payload. El cuerpo de la solicitud puede ser JSON, XML o form-encoded, y el payload no puede superar los 16.000 caracteres. Cada webhook tiene la opción 'Test webhook' para comprobar la solicitud antes de ponerlo en producción.",
          },
          {
            type: "p",
            text: "Cuando la lógica necesita leer datos, tomar decisiones en código o escribir de vuelta en los tickets, usa la Ticketing API. Los tickets se crean con un POST al endpoint de tickets y se actualizan con un PUT a la URL del propio ticket, con variantes masivas para muchos tickets a la vez. Las solicitudes pueden autenticarse con un token de acceso OAuth enviado en una cabecera Bearer.",
          },
          {
            type: "p",
            text: "Buenos candidatos para empezar a automatizar Zendesk:",
          },
          {
            type: "ul",
            items: [
              "Enrutar tickets nuevos al grupo correcto según canal, formulario, idioma o palabras clave.",
              "Recordatorios y escalados para tickets que llevan demasiado tiempo esperando respuesta.",
              "Publicar tickets de alta prioridad o VIP en un canal de Slack mediante un webhook.",
              "Traer datos de pedidos o de la cuenta a un ticket a través de la API antes de que un agente lo abra.",
            ],
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab trabaja sobre tu cuenta de Zendesk actual, sin cambiar de plataforma, usando la API de Zendesk, webhooks y Make o n8n donde encajan. Ticket Routing & Categorization es un proyecto puntual de {{price:routing}}; Custom Automation, para flujos que abarcan varios sistemas, cuesta {{price:custom}}. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento, documentación básica y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas. Puedes empezar con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cada cuánto se ejecutan las automatizaciones de Zendesk?",
        a: "Una vez cada hora, sobre todos los tickets no cerrados. El minuto exacto dentro de la hora varía, y cada automatización puede actuar sobre un máximo de 1.000 tickets por hora.",
      },
      {
        q: "¿Qué diferencia hay entre un trigger y una automatización de Zendesk?",
        a: "Los triggers se basan en eventos y se ejecutan de inmediato cuando se crea o actualiza un ticket. Las automatizaciones se basan en el tiempo y se ejecutan cada hora. Ambos pueden realizar el mismo tipo de acciones.",
      },
      {
        q: "¿Por qué mi automatización de Zendesk se sigue activando en el mismo ticket?",
        a: "Probablemente le falta una condición o una acción que la anule. Añade una acción que haga falsa una de sus condiciones, por ejemplo una etiqueta que las condiciones excluyan.",
      },
      {
        q: "¿Puede un trigger de Zendesk llamar a un sistema externo?",
        a: "Sí. Crea un webhook conectado a triggers y automatizaciones y, después, añade al trigger la acción 'Notify webhook' con el payload que quieras enviar.",
      },
      {
        q: "¿Las categorías de triggers cambian el orden en que se ejecutan los triggers?",
        a: "Sí. Los triggers se ejecutan en el orden de la lista, y el orden de las categorías debe coincidir con el orden en que quieres que se ejecuten. Se cambia con 'Edit order' en la lista de triggers de tickets.",
      },
    ],
    sources: [
      {
        label: "Zendesk Help Center — About automations and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832701850-About-automations-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — About Zendesk triggers and how they work",
        url: "https://support.zendesk.com/hc/en-us/articles/4408822236058-About-Zendesk-triggers-and-how-they-work",
      },
      {
        label: "Zendesk Help Center — Creating macros for repetitive ticket responses and actions",
        url: "https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions",
      },
      {
        label: "Zendesk Help Center — Using the \"Hours since\" condition in automations",
        url: "https://support.zendesk.com/hc/en-us/articles/4408836495130-Using-the-Hours-since-condition-in-automations",
      },
      {
        label: "Zendesk Help Center — Managing trigger categories for ticket triggers",
        url: "https://support.zendesk.com/hc/en-us/articles/4408832263066-Managing-trigger-categories-for-ticket-triggers",
      },
      {
        label: "Zendesk Help Center — Routing and automation options for incoming tickets",
        url: "https://support.zendesk.com/hc/en-us/articles/4408831658650-Routing-and-automation-options-for-incoming-tickets",
      },
      {
        label: "Zendesk Help Center — Creating webhooks to interact with third-party systems",
        url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems",
      },
      {
        label: "Zendesk Developer Docs — Creating and updating tickets",
        url: "https://developer.zendesk.com/documentation/ticketing/managing-tickets/creating-and-updating-tickets/",
      },
    ],
    related: ["ticket-routing-automation", "slack-support-automation", "sla-policies-explained"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 2. Freshdesk automation
  // ---------------------------------------------------------------------------
  {
    key: "freshdesk-automation",
    slug: "automatizacion-freshdesk",
    category: "helpdesks",
    navLabel: "Automatización de Freshdesk",
    primaryKeyword: "automatización Freshdesk",
    title: "Automatización de Freshdesk: reglas, asignación y webhooks",
    description:
      "Cómo funciona la automatización en Freshdesk: reglas Ticket Creation, Ticket Updates y Hourly Triggers, asignación round-robin o por habilidad, webhooks y API.",
    h1: "Automatización de Freshdesk: tipos de reglas, asignación y webhooks",
    intro:
      "La automatización de Freshdesk funciona con tres tipos de reglas: reglas Ticket Creation para tickets nuevos, reglas Ticket Updates para eventos en tickets existentes y Hourly Triggers para comprobaciones basadas en el tiempo. La asignación (round-robin, por equilibrio de carga o por habilidades) decide quién recibe el ticket, y las acciones de webhook junto con la API de Freshdesk lo conectan todo con otros sistemas.",
    keyFacts: [
      "Freshdesk tiene tres tipos de reglas de automatización: Ticket Creation, Ticket Updates y Hourly Triggers.",
      "Los Hourly Triggers (antes Time Triggers) se ejecutan cada hora, en horas naturales, y solo sobre tickets actualizados en los últimos 30 días.",
      "Las reglas Ticket Creation pueden ejecutar solo la primera regla que coincida o todas las reglas que coincidan.",
      "Freshdesk ejecuta hasta 1.000 llamadas de webhook por hora desde reglas de automatización; las llamadas adicionales quedan en espera.",
      "La asignación basada en la carga solo cuenta para la carga de un agente los tickets con un temporizador de SLA activo.",
    ],
    sections: [
      {
        heading: "Los tres tipos de reglas de automatización de Freshdesk",
        blocks: [
          {
            type: "p",
            text: "Si llevas tiempo usando Freshdesk, puede que las conozcas por sus nombres antiguos. Freshdesk las llamaba Dispatch'r, Observer y Supervisor, y más adelante reunió las tres en un único módulo de automatizaciones, con una pestaña para cada tipo de regla.",
          },
          {
            type: "table",
            caption: "Tipos de reglas de automatización de Freshdesk",
            head: ["Tipo de regla", "Nombre anterior", "Cuándo se ejecuta", "Útil para"],
            rows: [
              [
                "Ticket Creation",
                "Dispatch'r",
                "Una vez, cuando se crea un ticket nuevo",
                "Categorizar, priorizar y enrutar los tickets entrantes",
              ],
              [
                "Ticket Updates",
                "Observer",
                "Cuando ocurre un evento definido en un ticket existente",
                "Reaccionar a respuestas, notas, cambios de estado o de campos",
              ],
              [
                "Hourly Triggers",
                "Supervisor (Time Triggers)",
                "Cada hora, de forma programada",
                "Recordatorios, escalados, cierre automático de tickets inactivos",
              ],
            ],
          },
          {
            type: "p",
            text: "Las reglas Ticket Creation comparan cada ticket nuevo con tus condiciones y, si coincide, ejecutan las acciones. Tú eliges si Freshdesk ejecuta solo la primera regla que coincida o todas las que coincidan. Con la primera coincidencia, el orden de la lista decide qué regla gana, así que las reglas específicas deben ir por encima de las genéricas.",
          },
        ],
      },
      {
        heading: "Reglas Ticket Updates: eventos, condiciones y acciones",
        blocks: [
          {
            type: "p",
            text: "Ticket Updates es el único tipo de regla en el que se configuran eventos. Una regla necesita al menos un evento y se activa cuando coincide cualquiera de ellos. También defines quién realizó la acción: un agente, el solicitante, cualquiera de los dos, un colaborador o el propio System.",
          },
          {
            type: "ul",
            items: [
              "Eventos: cambia una propiedad del ticket, se actualiza un agente o un grupo, se añade una nota, se envía una respuesta, llega una valoración del cliente; entre los eventos del sistema están el fallo en la entrega de un correo y que un ticket pase a estar vencido.",
              "Condiciones: propiedades del ticket (incluidas etiquetas y campos personalizados), datos de contacto del solicitante y campos de la empresa.",
              "Acciones: rellenar campos, reasignar agente o grupo, añadir etiquetas u observadores, añadir una nota, enviar un correo a un agente, a un grupo o al solicitante, marcar como spam o eliminar, o activar un webhook.",
            ],
          },
          {
            type: "p",
            text: "Ticket Updates es también el único tipo de regla que puede crear un ticket nuevo o añadir un mensaje a un hilo. La lista exacta de eventos depende de tu plan y de las funciones que tengas activadas.",
          },
        ],
      },
      {
        heading: "Hourly Triggers: reglas basadas en el tiempo",
        blocks: [
          {
            type: "p",
            text: "Los Hourly Triggers no esperan a que ocurra un evento. Revisan los tickets cada hora y actúan sobre los que coinciden. Esa programación condiciona cómo debes escribirlos:",
          },
          {
            type: "ul",
            items: [
              "El límite de tiempo que configures debería ser de al menos una hora, ya que la regla solo se ejecuta cada hora.",
              "Cuentan horas naturales, no horas laborables.",
              "Solo procesan tickets actualizados en los últimos 30 días.",
              "Solo trabajan con propiedades del ticket, no con propiedades del contacto ni de la empresa.",
            ],
          },
          {
            type: "note",
            text: "Una regla basada en el tiempo que no esté bien definida se ejecutará cada hora consecutiva sobre el mismo ticket. Una solución habitual es combinar una condición de tiempo 'greater than' con una condición 'less than' para que el ticket solo coincida una vez.",
          },
        ],
      },
      {
        heading: "Asignación automática de tickets",
        blocks: [
          {
            type: "p",
            text: "Las reglas de automatización suelen fijar el grupo; la asignación decide qué agente de ese grupo recibe el ticket. La asignación automática de Freshdesk funciona con su motor Omniroute y ofrece tres métodos por grupo:",
          },
          {
            type: "ul",
            items: [
              "Round-robin: reparte los tickets por turnos entre los agentes disponibles del grupo, se salta a los que están al máximo de capacidad y da el ticket al agente elegible que lleva más tiempo sin recibir uno.",
              "Equilibrio de carga: envía cada ticket nuevo al agente con menos carga hasta que todos alcanzan el máximo configurado. Solo cuentan para la carga los tickets con un temporizador de SLA activo, así que resolver un ticket o pasarlo a un estado sin SLA libera capacidad.",
              "Por habilidades: los agentes tienen habilidades ordenadas por prioridad, y cada ticket nuevo va a un agente con la primera habilidad que coincida. Freshdesk recomienda una habilidad de respaldo, con el grupo como condición, asignada en último lugar a todos los agentes para que ningún ticket quede sin asignar.",
            ],
          },
          {
            type: "p",
            text: "Los métodos que puedes usar dependen de tu plan, así que revisa la configuración de tus grupos antes de elegir uno. Los tickets asignados manualmente también cuentan para la carga y pueden hacer que un agente supere el límite, lo que pausa la asignación automática a esa persona hasta que su recuento baje.",
          },
        ],
      },
      {
        heading: "Webhooks y la API de Freshdesk",
        blocks: [
          {
            type: "p",
            text: "En Freshdesk, un webhook es una acción de automatización que hace una llamada a la API de otro sistema. Eliges el tipo de solicitud y la URL de callback, y tanto la URL como el payload pueden incluir marcadores como {{ticket.id}}. Si haces una llamada GET a través de un webhook, la regla no puede usar la respuesta; para eso, Freshdesk remite a su acción Trigger API.",
          },
          {
            type: "p",
            text: "Freshdesk ejecuta hasta 1.000 llamadas de webhook por hora desde reglas de automatización. Las llamadas que superan esa cifra quedan en espera hasta que haya capacidad en la hora siguiente, así que los flujos de gran volumen no deberían depender de una entrega instantánea.",
          },
          {
            type: "p",
            text: "Para integraciones que se ejecutan fuera de Freshdesk, usa la API REST en your-domain.freshdesk.com/api/v2/. Las solicitudes se autentican con tu clave de API como nombre de usuario y cualquier valor ficticio como contraseña. Los límites de frecuencia se aplican por cuenta y por minuto y dependen de tu plan; una respuesta 429 significa que se ha agotado el límite, y la cabecera Retry-After indica cuántos segundos esperar. Al listar tickets, por defecto solo se devuelven los de los últimos 30 días, así que usa el filtro updated_since para tickets más antiguos.",
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab trabaja sobre tu cuenta de Freshdesk actual, sin cambiar de plataforma, usando reglas de automatización, webhooks, la API de Freshdesk y Make o n8n donde aportan. Ticket Routing & Categorization es un proyecto puntual de {{price:routing}}; Custom Automation cuesta {{price:custom}}. Cada proyecto incluye 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implementaciones llevan 1–3 semanas. El primer paso es una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué tipos de reglas de automatización hay en Freshdesk?",
        a: "Las reglas Ticket Creation se ejecutan sobre tickets nuevos, las reglas Ticket Updates se ejecutan cuando ocurre un evento en un ticket existente y los Hourly Triggers se ejecutan de forma programada cada hora.",
      },
      {
        q: "¿Qué ha pasado con Dispatch'r, Observer y Supervisor?",
        a: "Son los nombres antiguos de los mismos tipos de reglas: Dispatch'r para la creación de tickets, Observer para las actualizaciones de tickets y Supervisor para las reglas basadas en el tiempo. Freshdesk los unificó en un solo módulo de automatizaciones.",
      },
      {
        q: "¿Los Hourly Triggers de Freshdesk usan horario laboral?",
        a: "No. Funcionan con horas naturales y solo sobre tickets actualizados en los últimos 30 días.",
      },
      {
        q: "¿Cuántos webhooks pueden enviar las automatizaciones de Freshdesk?",
        a: "Freshdesk ejecuta hasta 1.000 llamadas de webhook por hora desde reglas de automatización. Las llamadas que superan el límite quedan en espera hasta que se libera capacidad.",
      },
    ],
    sources: [
      {
        label: "Freshdesk Support — Overview of Automation Rules in Freshdesk",
        url: "https://support.freshdesk.com/support/solutions/articles/207276-overview-of-automation-rules",
      },
      {
        label: "Freshdesk Support — What has changed in Freshdesk Automations",
        url: "https://support.freshdesk.com/support/solutions/articles/50000000043-what-has-changed-in-freshdesk-automations",
      },
      {
        label: "Freshdesk Support — Creating a new automation rule to run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/99047-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Using webhooks in automation rules that run on ticket updates",
        url: "https://support.freshdesk.com/support/solutions/articles/132589-using-webhooks-in-automation-rules-that-run-on-ticket-updates",
      },
      {
        label: "Freshdesk Support — Automatic Ticket Assignment in Freshdesk Using Omniroute",
        url: "https://support.freshdesk.com/support/solutions/articles/196581-automatic-ticket-assignment-in-a-group-round-robin-",
      },
      {
        label: "Freshdesk Support — Setting up load balanced ticket assignment",
        url: "https://support.freshdesk.com/support/solutions/articles/221919-setting-up-load-balanced-ticket-assignment",
      },
      {
        label: "Freshdesk Support — Skill based ticket assignment for agents",
        url: "https://support.freshdesk.com/support/solutions/articles/222692-setting-up-skill-based-ticket-assignment-matching-tickets-to-agents-with-expertise-",
      },
      {
        label: "Freshdesk Developers — Freshdesk API v2",
        url: "https://developers.freshdesk.com/api/",
      },
    ],
    related: ["ticket-routing-automation", "zendesk-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 3. Jira Service Management automation
  // ---------------------------------------------------------------------------
  {
    key: "jira-service-management-automation",
    slug: "automatizacion-jira-service-management",
    category: "helpdesks",
    navLabel: "Automatización Jira Service Mgmt",
    primaryKeyword: "automatización Jira Service Management",
    title: "Automatización de Jira Service Management: flujos y SLA",
    description:
      "Cómo funciona la automatización en Jira Service Management: triggers, condiciones y acciones, triggers de SLA y aprobación, smart values, webhooks y colas.",
    h1: "Automatización de Jira Service Management: cómo funcionan los flujos, los SLA y los webhooks",
    intro:
      "La automatización de Jira Service Management se basa en flujos (antes llamados reglas) con tres partes: un trigger que los pone en marcha, condiciones opcionales que filtran a qué elementos de trabajo afectan y acciones que hacen el trabajo. Los triggers propios del servicio, como los incumplimientos de SLA y las aprobaciones, junto con los smart values y las solicitudes web, te permiten automatizar la mayor parte del triaje, los escalados y las notificaciones en torno a tus colas.",
    keyFacts: [
      "Cada flujo de automatización consta de un trigger, condiciones opcionales y una o más acciones, que se ejecutan de arriba abajo.",
      "Jira Service Management añade triggers como 'SLA threshold breached' y 'Approval required'.",
      "La acción 'Send web request' llama a sistemas externos; un trigger de webhook entrante permite que un sistema externo inicie un flujo.",
      "Los smart values como {{issue.key}} insertan datos del elemento de trabajo en campos, comentarios y mensajes.",
      "Cada SLA tiene sus propias condiciones de inicio, pausa y parada; la pausa es opcional.",
    ],
    sections: [
      {
        heading: "Triggers, condiciones y acciones",
        blocks: [
          {
            type: "p",
            text: "La documentación de Atlassian llama ahora 'flows' (flujos) a las reglas de automatización; verás ambos términos y significan lo mismo. Puedes crear un flujo desde cero, a partir de una plantilla o con Rovo, y una vez activado, sus pasos se ejecutan en orden de arriba abajo.",
          },
          {
            type: "table",
            caption: "Las tres partes de un flujo de automatización de Jira Service Management",
            head: ["Parte", "Qué hace", "Ejemplos"],
            rows: [
              [
                "Trigger",
                "Inicia el flujo cuando ocurre algo",
                "Elemento de trabajo creado, elemento de trabajo en transición, comentario añadido, umbral de SLA incumplido, aprobación requerida, programado, webhook entrante",
              ],
              [
                "Condición (opcional)",
                "Limita sobre qué elementos de trabajo actúa el flujo",
                "El elemento de trabajo coincide con un filtro JQL, el comentario es interno o público, tipo de usuario",
              ],
              [
                "Acción",
                "Hace el trabajo",
                "Transición, editar campo, añadir comentario, enviar correo, enviar solicitud web, enviar mensaje de Slack o Microsoft Teams",
              ],
            ],
          },
          {
            type: "p",
            text: "Dos triggers son específicos del trabajo de servicio. 'SLA threshold breached' te permite elegir un SLA y activarse cuando se ha incumplido o cuando está a punto de incumplirse. 'Approval required' se activa cuando se crea o actualiza un elemento de trabajo que necesita aprobación, o cuando se añaden nuevos aprobadores. Un trigger programado ejecuta un flujo con un temporizador, algo útil para comprobaciones periódicas como listar los elementos de trabajo a punto de incumplir el SLA.",
          },
        ],
      },
      {
        heading: "Colas, tipos de solicitud y SLA: en torno a qué automatizas",
        blocks: [
          {
            type: "p",
            text: "La automatización en Jira Service Management existe sobre todo para mantener al día tres estructuras:",
          },
          {
            type: "ul",
            items: [
              "Las colas son conjuntos filtrados de elementos de trabajo que dan a los agentes una vista centrada en su trabajo. Filtran por campos como estado, tipo de trabajo, persona asignada y prioridad, o por JQL. Los agentes no pueden crear ni editar colas; lo hacen los administradores del espacio.",
              "Los tipos de solicitud son los formularios que usan los clientes para abrir solicitudes en el portal. Cada tipo de solicitud está vinculado exactamente a un tipo de trabajo: el tipo de solicitud gestiona el nombre y la configuración del portal, mientras que el tipo de trabajo contiene el flujo de trabajo y los campos. Un mismo tipo de trabajo puede respaldar muchos tipos de solicitud.",
              "Los SLA miden el tiempo frente a unos objetivos. Cada SLA tiene sus propias condiciones de inicio, pausa y parada; la pausa es opcional y se suele usar mientras se espera la respuesta del cliente, y la medición se detiene en cuanto se cumple cualquier condición de parada.",
            ],
          },
          {
            type: "p",
            text: "En la práctica, los flujos rellenan los campos por los que filtran las colas y los objetivos de SLA. Si un flujo establece la prioridad o un campo personalizado según el tipo de solicitud o el contenido del mensaje, la cola correcta y el objetivo de SLA correcto recogen el elemento de trabajo automáticamente.",
          },
        ],
      },
      {
        heading: "Smart values",
        blocks: [
          {
            type: "p",
            text: "Los smart values permiten que un flujo inserte datos del elemento de trabajo en campos, comentarios, correos y cuerpos de solicitudes web. {{issue.key}} devuelve la clave, por ejemplo PROJ-123. Los demás campos siguen el mismo patrón con el nombre del campo, incluidos los campos personalizados; si dos campos comparten nombre, usa en su lugar el ID del campo personalizado.",
          },
          {
            type: "p",
            text: "La interfaz de Atlassian dice ahora 'work item' donde antes decía 'issue', pero la sintaxis de smart values de su documentación sigue usando el prefijo issue. Los campos con varios valores se pueden recorrer con la sintaxis #, que se cierra con {{/}}.",
          },
        ],
      },
      {
        heading: "Webhooks y sistemas externos",
        blocks: [
          {
            type: "p",
            text: "Los webhooks funcionan en ambas direcciones:",
          },
          {
            type: "ul",
            items: [
              "Salientes: la acción 'Send web request' llama a la API de otro sistema cuando se ejecuta un flujo y puede devolver datos de la respuesta para pasos posteriores. El sistema receptor debe aceptar solicitudes desde la red de Atlassian.",
              "Entrantes: el trigger de webhook entrante da al flujo su propia URL, de modo que un sistema externo (un chatbot, una herramienta de facturación, una herramienta de monitorización) puede iniciar el flujo con una solicitud HTTP.",
              "Herramientas de chat: las acciones 'Send Slack message' y 'Send Microsoft Teams message' publican en canales, con smart values en el texto del mensaje.",
            ],
          },
        ],
      },
      {
        heading: "Límites de uso y qué automatizar primero",
        blocks: [
          {
            type: "p",
            text: "A fecha de octubre de 2026, Jira Cloud mide el uso de la automatización por producto y por mes, con límites que dependen de tu plan. Atlassian publica cómo se cuenta el uso en su página 'How is your automation usage calculated'; consúltala, junto con tu uso actual, antes de añadir flujos programados de alta frecuencia.",
          },
          {
            type: "p",
            text: "Primeros flujos habituales para un service desk:",
          },
          {
            type: "ul",
            items: [
              "Establecer prioridad, componente o persona asignada al crear la solicitud, según el tipo de solicitud y su contenido.",
              "Publicar en un canal de escalado cuando un SLA está a punto de incumplirse.",
              "Recordar al cliente que una solicitud está esperando su respuesta y, pasado un tiempo fijado, resolverla con un comentario.",
              "Enviar las nuevas solicitudes de alta prioridad a un sistema externo mediante 'Send web request'.",
            ],
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab trabaja sobre tu sitio de Jira Service Management actual, sin cambiar de plataforma, combinando la automatización nativa con APIs, webhooks y Make o n8n cuando un flujo necesita llegar a otras herramientas. Ticket Routing & Categorization cuesta {{price:routing}} como proyecto puntual; Custom Automation, {{price:custom}}. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implementaciones llevan 1–3 semanas. Empieza con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Las reglas de automatización y los flujos de Jira son lo mismo?",
        a: "Sí. La documentación y la interfaz más recientes de Atlassian usan 'flow' (flujo) para lo que antes se llamaba regla de automatización. La estructura es la misma: trigger, condiciones y acciones.",
      },
      {
        q: "¿Puede la automatización de Jira Service Management reaccionar a incumplimientos de SLA?",
        a: "Sí. El trigger 'SLA threshold breached' te permite elegir un SLA y activarse cuando se ha incumplido o cuando está a punto de incumplirse.",
      },
      {
        q: "¿Cómo envío datos de Jira Service Management a otro sistema?",
        a: "Usa la acción 'Send web request' en un flujo. Llama a la API del otro sistema cuando se ejecuta el flujo y puede devolver datos de la respuesta a pasos posteriores.",
      },
      {
        q: "¿Qué diferencia hay entre un tipo de solicitud y un tipo de trabajo?",
        a: "Un tipo de solicitud es el formulario que ve el cliente en el portal; el tipo de trabajo que hay detrás contiene el flujo de trabajo y los campos. Cada tipo de solicitud usa un tipo de trabajo, y un tipo de trabajo puede servir a muchos tipos de solicitud.",
      },
    ],
    sources: [
      {
        label: "Atlassian Support — Create automation flows in Jira",
        url: "https://support.atlassian.com/cloud-automation/docs/create-and-edit-jira-automation-rules/",
      },
      {
        label: "Atlassian Support — Jira automation triggers",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-triggers/",
      },
      {
        label: "Atlassian Support — Jira automation actions",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-automation-actions/",
      },
      {
        label: "Atlassian Support — Automation smart values: issues",
        url: "https://support.atlassian.com/cloud-automation/docs/jira-smart-values-issues/",
      },
      {
        label: "Atlassian Support — What are queues?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/what-are-queues/",
      },
      {
        label: "Atlassian Support — What's the difference between request types and work types?",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/whats-the-difference-between-request-types-and-issue-types/",
      },
      {
        label: "Atlassian Support — Set up SLA conditions",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-sla-conditions/",
      },
      {
        label: "Atlassian Support — How is your automation usage calculated",
        url: "https://support.atlassian.com/cloud-automation/docs/how-is-my-usage-calculated/",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 4. Slack customer support automation
  // ---------------------------------------------------------------------------
  {
    key: "slack-support-automation",
    slug: "automatizacion-atencion-cliente-slack",
    category: "helpdesks",
    navLabel: "Automatización de soporte en Slack",
    primaryKeyword: "automatización atención al cliente Slack",
    title: "Automatización del soporte en Slack: alertas y escalados",
    description:
      "Automatización de atención al cliente en Slack: alertas de escalado, Workflow Builder, webhooks entrantes, apps Bolt, Zendesk, Freshdesk, Jira y Slack Connect.",
    h1: "Automatización de atención al cliente en Slack: alertas, escalados y canales con clientes",
    intro:
      "Para la mayoría de los equipos de soporte, Slack no es donde escriben los clientes. Es donde el equipo escala, recibe alertas y se coordina. Automatizar la atención al cliente en Slack consiste en llevar los eventos de ticket adecuados al canal adecuado, convertir mensajes de Slack en tickets cuando haga falta y, en equipos B2B, atender a los clientes directamente en canales de Slack Connect.",
    keyFacts: [
      "Los flujos de Workflow Builder pueden iniciarse desde un enlace, un webhook, una programación, un mensaje publicado, una reacción con emoji o la entrada en un canal.",
      "Un webhook entrante es una URL única vinculada a un canal; para publicar un mensaje, se le envía un payload JSON con POST.",
      "Por lo general, Slack no permite que las apps publiquen más de un mensaje por segundo y por canal.",
      "Zendesk, Freshdesk y Jira Service Management ofrecen cada uno una integración con Slack para crear tickets y enviar notificaciones.",
      "Slack Connect permite que personas de otras organizaciones trabajen contigo en un canal compartido.",
    ],
    sections: [
      {
        heading: "Formas de automatizar el trabajo de soporte en Slack",
        blocks: [
          {
            type: "p",
            text: "Hay cuatro piezas principales, desde el no-code hasta el código a medida. Elige la más sencilla que resuelva el problema.",
          },
          {
            type: "table",
            caption: "Opciones de automatización de Slack para equipos de soporte",
            head: ["Opción", "Qué es", "Ideal para"],
            rows: [
              [
                "Integración con el helpdesk",
                "La app de Slack de Zendesk, Freshdesk o Jira Service Management",
                "Notificaciones de tickets en canales y creación de tickets a partir de mensajes",
              ],
              [
                "Workflow Builder",
                "La herramienta no-code de flujos de trabajo integrada en Slack",
                "Formularios de entrada, listas de comprobación de escalado, recordatorios programados",
              ],
              [
                "Webhook entrante",
                "Una URL que publica un mensaje JSON en un canal",
                "Alertas unidireccionales desde tu helpdesk, scripts o Make/n8n",
              ],
              [
                "App de Slack a medida (Bolt)",
                "Tu propia app, que escucha eventos y comandos",
                "Acciones bidireccionales: botones, comandos de barra, consultas en otros sistemas",
              ],
            ],
          },
        ],
      },
      {
        heading: "Integraciones del helpdesk con Slack",
        blocks: [
          {
            type: "p",
            text: "Empieza por lo que ya ofrece tu helpdesk:",
          },
          {
            type: "ul",
            items: [
              "Zendesk: los agentes pueden crear tickets con el atajo /zendesk, con una acción de mensaje que convierte un mensaje de Slack en ticket, con la app de Zendesk en la barra lateral o con una mención @zendesk en un canal de Slack Connect. Los tickets creados así reciben la etiqueta created_from_slack. Los administradores usan triggers para decidir qué eventos se publican en qué canales, y hay que invitar a la app de Zendesk a cada canal que recibe notificaciones.",
              "Freshdesk: la app de Slack puede convertir un mensaje de un canal en un ticket, con el mensaje como descripción, y también se pueden crear tickets desde cero dentro de Slack. Los miembros de Slack que no son agentes de Freshdesk también pueden crear tickets.",
              "Jira Service Management: el chat en Slack conecta los canales de solicitudes, donde la gente pide ayuda, con un canal de agentes. Los agentes pueden crear un elemento de trabajo reaccionando a un mensaje con el emoji :ticket:, y los tipos de solicitud tienen que estar conectados a un canal de solicitudes para estar disponibles en él.",
            ],
          },
          {
            type: "p",
            text: "Si la integración nativa no cubre un evento que te interesa, recurre a un webhook entrante o a Workflow Builder, que se describen a continuación.",
          },
        ],
      },
      {
        heading: "Workflow Builder para escalados internos",
        blocks: [
          {
            type: "p",
            text: "Workflow Builder permite a cualquiera crear flujos de trabajo de varios pasos sin código. Un flujo empieza con un trigger: un enlace para compartir, un webhook, una programación, la actualización de un elemento de una lista, un mensaje publicado en un canal, alguien que se une a un canal o una reacción con emoji. Los pasos se ejecutan en el orden que fijes y pueden ser acciones de Slack, como enviar un mensaje, pasos de conectores para servicios de terceros o pasos personalizados creados por desarrolladores. Las variables pasan datos de los pasos anteriores a los siguientes, los botones pausan el flujo hasta que alguien hace clic y las ramas llevan a las personas por caminos distintos según condiciones.",
          },
          {
            type: "p",
            text: "Usos típicos en soporte: un formulario de escalado iniciado desde un enlace que recoge la URL del ticket y la gravedad y publica un mensaje estructurado en un canal de escalados; un flujo activado por una reacción con emoji que avisa al responsable de guardia; o un recordatorio semanal programado para revisar los tickets estancados.",
          },
        ],
      },
      {
        heading: "Webhooks entrantes y apps con Bolt",
        blocks: [
          {
            type: "p",
            text: "Un webhook entrante es la forma más sencilla de enviar alertas desde cualquier sistema a Slack. Cada URL de webhook está vinculada a un canal; envías un HTTP POST con un cuerpo JSON que contiene un campo text y, opcionalmente, bloques de Block Kit para diseños más ricos. Cualquiera que tenga la URL puede publicar en tu espacio de trabajo, así que trátala como una contraseña y mantenla fuera del código público.",
          },
          {
            type: "p",
            text: "Vigila el volumen. Los límites de frecuencia de Slack indican que, por lo general, las apps no deberían publicar más de un mensaje por segundo y por canal, ya sea mediante chat.postMessage o un webhook entrante. Se toleran picos cortos, pero los excesos sostenidos reciben respuestas HTTP 429 con una cabecera Retry-After. En colas con mucho movimiento, agrupa las alertas o envía un resumen en lugar de un mensaje por ticket.",
          },
          {
            type: "p",
            text: "Cuando necesites interacción bidireccional, como un botón que asigna un ticket o un comando de barra que consulta un pedido, crea una app de Slack con Bolt, el framework de Slack para JavaScript, Python y Java. Una app de Bolt escucha eventos y comandos de barra en tu espacio de trabajo y responde a ellos, por ejemplo llamando a la API de tu helpdesk.",
          },
        ],
      },
      {
        heading: "Slack Connect para canales con clientes",
        blocks: [
          {
            type: "p",
            text: "Slack Connect te permite compartir un canal con personas de otras organizaciones, cada una trabajando desde su propio Slack. Los equipos de soporte B2B lo usan como canal dedicado para cada cliente clave. Invitas a una organización externa desde la configuración del canal y eliges un nivel de permisos: solo publicar, o publicar, invitar y más. Los administradores pueden restringir quién puede invitar a personas externas. Un canal de Slack Connect puede incluir hasta 250 organizaciones, incluida la tuya.",
          },
          {
            type: "p",
            text: "Los canales con clientes también necesitan seguimiento de tickets. La integración de Zendesk admite menciones @zendesk en canales de Slack Connect, con menos opciones para usuarios externos; con otros helpdesks, una pequeña app de Bolt o un flujo de Make/n8n puede convertir en tickets los mensajes etiquetados.",
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab conecta Slack con el helpdesk que ya usas (Zendesk, Freshdesk, Jira o herramientas internas) mediante APIs, webhooks y Make o n8n, sin cambiar de plataforma. Automated Reports enviados a Slack o por correo cuestan {{price:reports}} como proyecto puntual; Custom Automation para flujos bidireccionales en Slack, {{price:custom}}. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento y documentación básica, y la mayoría de las implementaciones llevan 1–3 semanas. Empieza con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Puedo crear tickets del helpdesk a partir de mensajes de Slack?",
        a: "Sí. Zendesk y Freshdesk ofrecen apps de Slack que convierten un mensaje en un ticket, y los agentes de Jira Service Management pueden crear un elemento de trabajo a partir de un mensaje de un canal de solicitudes reaccionando con el emoji :ticket:.",
      },
      {
        q: "¿Cuál es la forma más sencilla de enviar alertas de soporte a Slack?",
        a: "Usa la integración con Slack de tu helpdesk si cubre el evento que necesitas. Si no, publica un payload JSON en un webhook entrante de Slack desde la acción de webhook de tu helpdesk o desde Make o n8n.",
      },
      {
        q: "¿Puede un sistema externo iniciar un flujo de trabajo de Slack?",
        a: "Sí. Workflow Builder admite un trigger de webhook, así que un sistema externo puede iniciar un flujo enviándole una solicitud HTTP.",
      },
      {
        q: "¿Hay un límite de mensajes que puedo publicar en un canal?",
        a: "Por lo general, Slack no permite que las apps publiquen más de un mensaje por segundo y por canal. Se toleran picos cortos, pero los excesos sostenidos devuelven errores HTTP 429.",
      },
    ],
    sources: [
      {
        label: "Slack Help Center — Build a workflow: Create a workflow in Slack",
        url: "https://slack.com/help/articles/17542172840595-Build-a-workflow--Create-a-workflow-in-Slack",
      },
      {
        label: "Slack Developer Docs — Sending messages using incoming webhooks",
        url: "https://docs.slack.dev/messaging/sending-messages-using-incoming-webhooks/",
      },
      {
        label: "Slack Developer Docs — Rate limits",
        url: "https://docs.slack.dev/apis/web-api/rate-limits/",
      },
      {
        label: "Slack API — Tutorial: Hello World Slack app using Bolt",
        url: "https://api.slack.com/tutorials/tracks/hello-world-bolt",
      },
      {
        label: "Slack Help Center — Use Slack Connect to work with other companies in channels",
        url: "https://slack.com/help/articles/360035092414-Use-Slack-Connect-to-work-with-other-companies-in-channels",
      },
      {
        label: "Zendesk Help Center — Using the Slack for Zendesk Support integration",
        url: "https://support.zendesk.com/hc/en-us/articles/4408843621530-Using-the-Slack-for-Zendesk-Support-integration",
      },
      {
        label: "Freshdesk Support — Simplifying collaboration using the latest Slack app",
        url: "https://support.freshdesk.com/support/solutions/articles/50000001687-simplifying-collaboration-using-the-latest-slack-app",
      },
      {
        label: "Atlassian Support — Set up chat in Slack (Jira Service Management)",
        url: "https://support.atlassian.com/jira-service-management-cloud/docs/set-up-chat/",
      },
    ],
    related: ["automated-support-reporting", "zendesk-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 5. Intercom automation
  // ---------------------------------------------------------------------------
  {
    key: "intercom-automation",
    slug: "automatizacion-intercom",
    category: "helpdesks",
    navLabel: "Automatización de Intercom",
    primaryKeyword: "automatización Intercom",
    title: "Automatización Intercom: Workflows, Fin, enrutamiento y API",
    description:
      "Cómo funciona la automatización en Intercom: triggers, ramas y acciones de Workflows, asignación por bandeja, Fin AI Agent, Slack, Jira, webhooks y API.",
    h1: "Automatización de Intercom: Workflows, asignación, Fin y la API",
    intro:
      "La automatización de Intercom se construye sobre todo en Workflows: un editor visual en el que un trigger inicia el flujo, las ramas eligen un camino y las acciones hacen el trabajo, como etiquetar, asignar o dejar que Fin responda. Después, el método de asignación de cada bandeja de equipo decide qué compañero recibe la conversación, y los webhooks junto con la API REST cubren todo lo que tiene que ocurrir fuera de Intercom. A continuación verás cómo se comporta cada pieza y por dónde empezar.",
    keyFacts: [
      "Los workflows se crean en un editor visual y pueden estar de cara al cliente o ejecutarse en segundo plano, sin que se vean, para el equipo.",
      "Con ramas, una conversación sigue solo el primer camino que coincide; 'Apply rules' ejecuta todos los caminos que coinciden.",
      "Solo se puede aplicar un SLA a una conversación; las acciones de SLA posteriores de otros workflows se ignoran.",
      "La asignación equilibrada da la conversación al compañero elegible con menos conversaciones abiertas.",
      "Las suscripciones a webhooks se crean en el Developer Hub, no a través de la API, y el endpoint debe usar HTTPS.",
    ],
    sections: [
      {
        heading: "Cómo se construyen los Workflows de Intercom",
        blocks: [
          {
            type: "p",
            text: "Workflows es el único lugar de Intercom para automatizar las conversaciones con clientes y los procesos del equipo. Se construyen en un editor visual a partir de pasos reutilizables. Un workflow puede estar de cara al cliente, como un bot que saluda y hace el triaje, o ejecutarse en segundo plano, sin que se vea, para tu equipo. Todos los workflows combinan los mismos pocos tipos de pasos.",
          },
          {
            type: "table",
            caption: "Las piezas de un workflow de Intercom",
            head: ["Pieza", "Qué hace", "Ejemplos"],
            rows: [
              [
                "Trigger",
                "Define cuándo empieza el workflow y para quién",
                "Cuando empieza una conversación, durante una conversación, ante un evento de ticket o cuando otro workflow lo llama como workflow reutilizable",
              ],
              [
                "Ramas (Branches)",
                "Comprueban condiciones y envían la conversación por el primer camino cuya condición coincide",
                "Caminos separados para distintas audiencias, canales o temas",
              ],
              [
                "Apply rules",
                "Comprueba todos los caminos y ejecuta las acciones de cada uno que coincide",
                "Varias etiquetas o atributos independientes en un solo paso",
              ],
              [
                "Acciones",
                "Hacen el trabajo",
                "Etiquetar, asignar, posponer, fijar la prioridad, aplicar un SLA, dejar que Fin responda, avisar en Slack",
              ],
            ],
          },
          {
            type: "p",
            text: "La diferencia entre las ramas y 'Apply rules' importa cuando las condiciones se solapan. Con ramas, una conversación que cumple varias condiciones solo sigue el primer camino que coincide, leído de arriba abajo, así que pon primero las condiciones más específicas. 'Apply rules' ejecuta las acciones de todos los caminos que coinciden, lo que encaja con pasos que deben sumarse en lugar de competir.",
          },
        ],
      },
      {
        heading: "Automatización de la bandeja: asignación, prioridad y SLA",
        blocks: [
          {
            type: "p",
            text: "La mayor parte de la automatización de la bandeja es un workflow en segundo plano formado por acciones. 'Assign' envía una conversación a un compañero o a una bandeja de equipo concretos. 'Tag' añade una etiqueta, y las etiquetas se crean y gestionan en la configuración de tu espacio de trabajo. 'Snooze' retira temporalmente la conversación de la bandeja del compañero; si el cliente o un compañero responde durante ese tiempo, el workflow termina. 'Set priority' marca la urgencia de la conversación.",
          },
          {
            type: "p",
            text: "Los SLA también se aplican con una acción, pero solo se puede añadir un SLA a una conversación. Si un workflow posterior intenta aplicar otro SLA, esa acción se ignora, así que decide qué workflow se encarga de los SLA antes de crear varios.",
          },
          {
            type: "p",
            text: "Cuando una conversación llega a una bandeja de equipo, el método de asignación de esa bandeja decide quién la recibe: manual, round robin o equilibrado. La asignación equilibrada da cada conversación nueva al compañero elegible con menos conversaciones abiertas y, en caso de empate, favorece al compañero que lleva más tiempo esperando una. Para ser elegible, un compañero debe estar activo y por debajo de su límite de asignación. Intercom recomienda la asignación equilibrada para los equipos de soporte.",
          },
          {
            type: "note",
            text: "Un patrón sencillo para empezar: un workflow en segundo plano sobre las conversaciones nuevas las etiqueta por tema, fija la prioridad, aplica un único SLA y las asigna a la bandeja de equipo correcta. Después, el método de asignación de la bandeja elige al compañero.",
          },
        ],
      },
      {
        heading: "Fin AI Agent en tus workflows",
        blocks: [
          {
            type: "p",
            text: "Fin AI Agent es el agente de IA de Intercom para responder a las preguntas de los clientes. Responde a partir del contenido que le das: artículos públicos, documentos, fragmentos (snippets) y URL públicas, que gestionas en Knowledge > Sources. Respeta la segmentación por audiencia de los artículos de Intercom, así que no responderá a partir de artículos privados o restringidos que el cliente de Messenger no tenga permiso para ver.",
          },
          {
            type: "p",
            text: "Fin es compatible con Intercom Messenger en web, iOS y Android, y con correo electrónico, WhatsApp, SMS, Facebook e Instagram. Dentro de Workflows, un paso 'Let Fin answer' permite que Fin responda en cualquier punto del flujo y siga hasta que el problema se resuelva o se escale a un compañero.",
          },
          {
            type: "p",
            text: "Planifica el traspaso con tanto cuidado como las respuestas. Decide a qué bandeja de equipo debe ir una conversación escalada y construye ese camino en el workflow para que nunca se quede sin asignar.",
          },
        ],
      },
      {
        heading: "Webhooks y la API REST de Intercom",
        blocks: [
          {
            type: "p",
            text: "Cuando algo en Intercom tiene que llegar a otro sistema, usa webhooks. Se configuran en el Developer Hub: abre tu app, ve a 'Configure' y luego a 'Webhooks', e introduce la URL de tu endpoint. El endpoint debe usar HTTPS y aceptar una solicitud HEAD, que Intercom usa para validar la URL. Las suscripciones solo se pueden crear en el Developer Hub, no a través de la API.",
          },
          {
            type: "p",
            text: "Después eliges los topics. Un topic es un evento dentro de Intercom que activa el webhook, y cada topic está vinculado a uno o varios permisos que tu app debe tener. Intercom envía un HTTP POST a tu endpoint por cada topic al que te suscribas, y cada payload incluye el topic y un contador de intentos de entrega. El botón 'Send a test request' de la sección de webhooks te permite comprobar el endpoint.",
          },
          {
            type: "p",
            text: "Para actuar sobre conversaciones desde tu propio código, usa la API REST. Las solicitudes van a api.intercom.io con un token de acceso enviado como token Bearer en la cabecera Authorization, más una cabecera Intercom-Version que, por defecto, toma la versión configurada en tu app. Responder, por ejemplo, es un POST a /conversations/{id}/reply con un cuerpo JSON que fija el tipo de mensaje, el tipo de autor y el cuerpo del mensaje.",
          },
          {
            type: "p",
            text: "Buenos candidatos para empezar a automatizar Intercom:",
          },
          {
            type: "ul",
            items: [
              "Etiquetar las conversaciones nuevas y asignarlas a la bandeja de equipo correcta.",
              "Aplicar un SLA por conversación y subir la prioridad de las cuentas clave.",
              "Enviar eventos de conversación a un webhook para que Make o n8n actualicen otros sistemas.",
              "Publicar las conversaciones nuevas o escaladas en un canal de Slack.",
            ],
          },
        ],
      },
      {
        heading: "Integraciones con Slack y Jira",
        blocks: [
          {
            type: "p",
            text: "Para las alertas en Slack, configura el propósito de un canal de Slack como solo para notificaciones y luego añade un paso 'Notify Slack' a un workflow. La app de Intercom publica la notificación, y las notificaciones posteriores de la misma conversación aparecen como respuestas en el hilo del mensaje original. Las respuestas escritas en ese hilo no se envían de vuelta a la conversación de Intercom, así que el equipo sigue respondiendo a los clientes en Intercom.",
          },
          {
            type: "p",
            text: "Para los escalados a ingeniería, la app Jira for Tickets de Intercom puede crear automáticamente issues de Jira a partir de los tipos de ticket que indiques, reflejar los estados de las issues de Jira en los tickets de Intercom y sincronizar notas. Su automatización básica solo mapea el título y la descripción; para más campos, usa su automatización personalizada basada en plantillas de Workflows. No crea issues directamente desde las conversaciones, así que primero hay que convertir la conversación en un ticket.",
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab trabaja sobre las herramientas que ya usas, sin cambiar de plataforma, con APIs, webhooks y Make o n8n. Intercom tiene tanto API REST como webhooks, así que casi con total seguridad se puede conectar; la configuración concreta se confirma en una llamada de Health Check gratuita de 30 minutos. Ticket Routing & Categorization es un proyecto puntual de {{price:routing}}, y Custom Automation para flujos entre varios sistemas cuesta {{price:custom}}. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento, documentación básica y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué diferencia hay entre las ramas y 'Apply rules' en los Workflows de Intercom?",
        a: "Las ramas envían la conversación solo por el primer camino cuya condición coincide, comprobando de arriba abajo. 'Apply rules' comprueba todos los caminos y ejecuta las acciones de cada uno que coincide.",
      },
      {
        q: "¿Qué método de asignación recomienda Intercom para los equipos de soporte?",
        a: "La asignación equilibrada. Da cada conversación al compañero activo, por debajo de su límite de asignación, con menos conversaciones abiertas; en caso de empate, gana quien lleva más tiempo esperando.",
      },
      {
        q: "¿Qué contenido usa Fin AI Agent para responder a los clientes?",
        a: "Artículos públicos, documentos, fragmentos (snippets) y URL públicas que añades en Knowledge > Sources. Respeta la segmentación por audiencia de los artículos, así que no responderá a partir de artículos que el cliente no puede ver.",
      },
      {
        q: "¿Puedo crear suscripciones a webhooks de Intercom a través de la API?",
        a: "No. Las suscripciones a webhooks se configuran en el Developer Hub. El endpoint debe usar HTTPS y aceptar una solicitud HEAD, que Intercom usa para validarlo.",
      },
      {
        q: "¿Puede el equipo responder a los clientes desde las notificaciones de Intercom en Slack?",
        a: "No. En un canal de Slack solo para notificaciones, las respuestas en el hilo de una notificación no se envían de vuelta a la conversación de Intercom.",
      },
    ],
    sources: [
      {
        label: "Intercom Help — Workflows explained",
        url: "https://www.intercom.com/help/en/articles/7836459-workflows-explained",
      },
      {
        label: "Intercom Help — Using actions in Workflows",
        url: "https://www.intercom.com/help/en/articles/7836466-using-actions-in-workflows",
      },
      {
        label: "Intercom Help — Balanced assignment deep dive",
        url: "https://www.intercom.com/help/en/articles/6553774-balanced-assignment-deep-dive",
      },
      {
        label: "Intercom Help — Fin AI Agent FAQs",
        url: "https://www.intercom.com/help/en/articles/7837535-fin-ai-agent-faqs",
      },
      {
        label: "Intercom Help — Set up Slack notifications",
        url: "https://www.intercom.com/help/en/articles/12556780-set-up-slack-notifications",
      },
      {
        label: "Intercom Help — Jira for Tickets app",
        url: "https://www.intercom.com/help/en/articles/7918909-jira-for-tickets-app",
      },
      {
        label: "Intercom Developers — Set up Webhooks",
        url: "https://developers.intercom.com/docs/webhooks/setting-up-webhooks",
      },
      {
        label: "Intercom Developers — Reply to a conversation",
        url: "https://developers.intercom.com/docs/references/rest-api/api.intercom.io/conversations/replyconversation",
      },
    ],
    related: ["chatbot-to-human-handoff", "ticket-routing-automation", "slack-support-automation"],
    updated: "2026-10-19",
  },

  // ---------------------------------------------------------------------------
  // 6. HubSpot Service Hub automation
  // ---------------------------------------------------------------------------
  {
    key: "hubspot-service-hub-automation",
    slug: "automatizacion-hubspot-service-hub",
    category: "helpdesks",
    navLabel: "Automatización HubSpot Service Hub",
    primaryKeyword: "automatización HubSpot Service Hub",
    title: "Automatización HubSpot Service Hub: tickets, workflows, SLA",
    description:
      "Automatización de HubSpot Service Hub: canales y enrutamiento del help desk, pipelines y estados de ticket, objetivos SLA, workflows, chatbots, webhooks y API.",
    h1: "Automatización de HubSpot Service Hub: help desk, tickets, workflows y la API",
    intro:
      "La automatización de HubSpot Service Hub gira en torno al ticket: los canales del help desk crean tickets, el enrutamiento los asigna, los pipelines y los estados les hacen seguimiento y los workflows basados en tickets actúan sobre ellos. Los chatbots basados en reglas recogen datos antes de que exista un ticket, y la acción de webhook de los workflows junto con la API del CRM conectan HubSpot con todo lo demás. A continuación verás qué hace cada pieza y por dónde empezar.",
    keyFacts: [
      "Por defecto, el help desk crea tickets automáticamente desde todos los canales que conectes a él.",
      "El 'Support Pipeline' predeterminado tiene cuatro estados de ticket: 'New', 'Waiting on contact', 'Waiting on us' y 'Closed'.",
      "Los objetivos de SLA del help desk pueden medir el tiempo hasta la primera respuesta, el tiempo hasta la siguiente respuesta y el tiempo hasta el cierre.",
      "La acción de webhook de los workflows solo acepta URL que empiecen por HTTPS.",
      "Los tickets se crean a través de la API con un POST a /crm/v3/objects/tickets.",
    ],
    sections: [
      {
        heading: "Qué puedes automatizar en HubSpot Service Hub",
        blocks: [
          {
            type: "p",
            text: "La automatización de Service Hub está repartida entre varias herramientas que actúan todas sobre el registro del ticket. Decide dónde va cada regla antes de crearla; la mayoría de los problemas vienen de tener la misma lógica en dos sitios.",
          },
          {
            type: "table",
            caption: "Dónde vive cada tipo de automatización de Service Hub",
            head: ["Herramienta", "Qué automatiza", "Uso típico"],
            rows: [
              [
                "Canales y enrutamiento del help desk",
                "Crear tickets desde los canales conectados y asignarlos",
                "Cada correo o chat de soporte se convierte en ticket y llega al equipo correcto",
              ],
              [
                "Pipelines y estados de tickets",
                "Las fases por las que pasa un ticket y si cada una cuenta como abierta o cerrada",
                "Pipelines separados para distintos tipos de trabajo de soporte",
              ],
              [
                "Objetivos de SLA",
                "Metas para los tiempos de primera respuesta, siguiente respuesta y cierre",
                "Un objetivo de respuesta más rápido para el chat que para el correo",
              ],
              [
                "Workflows basados en tickets",
                "Acciones sobre los tickets que cumplen los triggers de inscripción",
                "Rotar propietarios, actualizar propiedades, seguimientos diferidos",
              ],
              [
                "Chatbots basados en reglas",
                "Preguntas, creación de tickets y traspaso en el chat",
                "Recoger los datos del pedido antes de que entre un agente",
              ],
              [
                "Webhooks y la API",
                "Enviar datos de tickets hacia fuera y crear o actualizar tickets desde otros sistemas",
                "Sincronizar tickets con Jira o con herramientas internas",
              ],
            ],
          },
        ],
      },
      {
        heading: "Canales y enrutamiento del help desk",
        blocks: [
          {
            type: "p",
            text: "El help desk es el espacio de trabajo de HubSpot para el soporte basado en tickets. Puedes conectarle canales de chat, correo electrónico, formularios, llamadas y Facebook Messenger. Por defecto, los tickets se crean automáticamente desde todos los canales que conectes, y HubSpot recomienda conectar todos tus canales de soporte, porque a los tickets de canales no conectados les pueden faltar el asunto y el hilo en el help desk.",
          },
          {
            type: "p",
            text: "El enrutamiento se configura por canal. Cuando conectas un correo de equipo, por ejemplo, eliges el pipeline, el estado y la prioridad predeterminados para los tickets nuevos y, después, una opción de enrutamiento:",
          },
          {
            type: "ul",
            items: [
              "Usuarios o equipos concretos.",
              "El propietario del contacto.",
              "Enrutamiento por habilidades, que asigna los tickets según las habilidades de los agentes.",
              "Un workflow de asignación, cuando necesitas una lógica que va más allá de las opciones integradas.",
              "Nadie, lo que deja los tickets en la vista 'Unassigned' para que los agentes los recojan.",
            ],
          },
          {
            type: "note",
            text: "El enrutamiento automático y el enrutamiento por habilidades dependen de tus licencias y de tu suscripción. Comprueba qué incluye tu cuenta antes de diseñar en torno a una opción de enrutamiento concreta.",
          },
        ],
      },
      {
        heading: "Pipelines de tickets, estados y objetivos de SLA",
        blocks: [
          {
            type: "p",
            text: "Los tickets avanzan por un pipeline, y en el caso de los tickets las fases del pipeline se llaman estados. El 'Support Pipeline' predeterminado tiene cuatro: 'New', 'Waiting on contact', 'Waiting on us' y 'Closed'. Los pipelines se gestionan en Settings > Objects > Tickets > Pipelines, y cada estado que añadas debe marcarse como 'Open' o 'Closed'.",
          },
          {
            type: "p",
            text: "Esa elección condiciona la automatización. Cuando un ticket pasa a un estado cerrado, su 'Close date' se fija en la fecha de hoy; si vuelve a un estado abierto, la 'Close date' se borra. Puedes ajustar este comportamiento en cada pipeline. Como los workflows y los informes filtran por estado, mantén pocos estados y que no den lugar a dudas.",
          },
          {
            type: "p",
            text: "Los objetivos de SLA del help desk fijan metas para el tiempo hasta la primera respuesta, el tiempo hasta la siguiente respuesta y el tiempo hasta el cierre. Un objetivo puede aplicarse a todos los tickets, a los tickets con un valor de propiedad concreto o a una combinación de propiedades, y cada regla puede limitarse a un horario y una zona horaria. Entre los ejemplos del propio HubSpot están un objetivo de respuesta más corto para clientes enterprise y un objetivo de respuesta más rápido para el chat que para el correo. Posponer un ticket no afecta a su SLA.",
          },
        ],
      },
      {
        heading: "Workflows basados en tickets",
        blocks: [
          {
            type: "p",
            text: "Un workflow basado en tickets inscribe los tickets que cumplen sus triggers de inscripción y luego ejecuta una secuencia de acciones. Las acciones más útiles para el trabajo de soporte:",
          },
          {
            type: "ul",
            items: [
              "'Delays': esperar un número fijo de días, horas y minutos, o hasta una fecha del calendario, una propiedad de fecha o un evento.",
              "'If/then branches': enviar los tickets por caminos distintos según criterios de filtro combinados con AND y OR.",
              "'Edit record': fijar, copiar o borrar valores de propiedades en el ticket o en un registro asociado.",
              "'Create record': crear un registro nuevo, que por defecto queda asociado al ticket inscrito.",
              "'Rotate record to owner': asignar tickets por turnos entre los usuarios que elijas. Los recuentos de rotación se registran por acción y se reinician si añades o quitas propietarios después de activar el workflow.",
              "'Send a webhook': llamar a una URL externa con datos del ticket, como se explica en la siguiente sección.",
            ],
          },
          {
            type: "p",
            text: "Buenos candidatos para empezar con los workflows de tickets de HubSpot:",
          },
          {
            type: "ul",
            items: [
              "Rotar los tickets nuevos de un pipeline entre un grupo de agentes.",
              "Copiar una propiedad de un registro asociado al ticket para que el enrutamiento y los informes puedan usarla.",
              "Enviar un ticket a Jira o a una herramienta interna mediante un webhook cuando cambia su estado.",
              "Esperar un tiempo fijado después de que se cierre un ticket y luego ramificar según una propiedad para decidir un seguimiento.",
            ],
          },
        ],
      },
      {
        heading: "Chatbots, webhooks y la API de HubSpot",
        blocks: [
          {
            type: "p",
            text: "Los chatbots basados en reglas se encargan de los primeros minutos de un chat. Tres acciones hacen la mayor parte del trabajo de soporte. 'Ask question' guarda la respuesta del visitante en una propiedad del contacto y puede ofrecer respuestas rápidas. 'Submit a ticket' crea un ticket con el nombre, el pipeline y el estado que configures, pero se omite si el visitante no tiene un registro de contacto asociado. 'Send to team member' pasa el chat a un usuario o equipo concreto tras comprobar que está disponible, y muestra el mensaje de ausencia si no lo está. Si el bot tiene horario de funcionamiento, los chats solo se enrutan a un miembro del equipo dentro de ese horario.",
          },
          {
            type: "p",
            text: "La acción de webhook de los workflows envía datos hacia fuera. Elige POST o GET e introduce una URL que empiece por HTTPS. Un cuerpo POST puede incluir todas las propiedades del registro o un conjunto personalizado de claves, cada una asignada a una propiedad de HubSpot. Puedes autenticarte con una firma de solicitud, que HubSpot añade como cabecera para que tu endpoint la verifique, o con una clave de API guardada como secreto y enviada en una cabecera o un parámetro de consulta. Puedes probar la acción desde su panel sin afectar a los registros existentes. Que esta acción esté disponible depende de tu suscripción.",
          },
          {
            type: "p",
            text: "Para la dirección contraria, usa la API del CRM. Un POST a /crm/v3/objects/tickets crea un ticket; incluye subject, hs_pipeline_stage (el estado) y hs_pipeline, con ID internos en lugar de etiquetas. Si no se indica ningún pipeline, se usa el predeterminado. Un GET a /crm/v3/properties/tickets lista las propiedades de ticket de tu cuenta. Las apps también pueden suscribirse a eventos de tickets a través de la Webhooks API, entre ellos ticket.creation y ticket.propertyChange, que se activa cuando cambia en cualquier ticket una propiedad que indiques. Estas suscripciones se configuran a nivel de app y necesitan el scope tickets.",
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab trabaja sobre las herramientas que ya usas, sin cambiar de plataforma, con APIs, webhooks y Make o n8n. HubSpot tiene una API documentada y admite webhooks, así que casi con total seguridad se puede conectar; la configuración concreta se confirma en una llamada de Health Check gratuita de 30 minutos. Ticket Routing & Categorization es un proyecto puntual de {{price:routing}}, Automated Reports por correo o Slack cuestan {{price:reports}} y Custom Automation entre varios sistemas, {{price:custom}}. Todos los proyectos incluyen 30 días de soporte tras el lanzamiento, documentación básica y ningún coste oculto, y la mayoría de las implementaciones llevan 1–3 semanas.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuáles son los estados de ticket predeterminados en HubSpot?",
        a: "El 'Support Pipeline' predeterminado tiene cuatro estados: 'New', 'Waiting on contact', 'Waiting on us' y 'Closed'. Puedes añadir los tuyos y marcar cada uno como 'Open' o 'Closed'.",
      },
      {
        q: "¿Puede el help desk de HubSpot medir los SLA?",
        a: "Sí. Los objetivos de SLA del help desk miden el tiempo hasta la primera respuesta, el tiempo hasta la siguiente respuesta y el tiempo hasta el cierre, para todos los tickets o según propiedades del ticket, y pueden limitarse a un horario. Posponer un ticket no afecta a su SLA.",
      },
      {
        q: "¿Puede un chatbot de HubSpot crear tickets?",
        a: "Sí. La acción 'Submit a ticket' crea un ticket con el nombre, el pipeline y el estado que configures. Se omite si el visitante no tiene un registro de contacto asociado.",
      },
      {
        q: "¿Cómo envío datos de tickets de HubSpot a otro sistema?",
        a: "Añade una acción de webhook a un workflow basado en tickets, que envía una solicitud POST o GET a una URL HTTPS. Las apps también pueden suscribirse a eventos de tickets como ticket.creation y ticket.propertyChange a través de la Webhooks API.",
      },
      {
        q: "¿Qué necesito para crear un ticket a través de la API de HubSpot?",
        a: "Envía un POST a /crm/v3/objects/tickets con subject, hs_pipeline_stage y hs_pipeline, usando ID internos. Si no indicas el pipeline, se usa el predeterminado.",
      },
    ],
    sources: [
      {
        label: "HubSpot Knowledge Base — Connect channels to help desk",
        url: "https://knowledge.hubspot.com/help-desk/connect-channels-to-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Set up and manage object pipelines",
        url: "https://knowledge.hubspot.com/object-settings/set-up-and-customize-pipelines",
      },
      {
        label: "HubSpot Knowledge Base — Set SLA goals in help desk",
        url: "https://knowledge.hubspot.com/help-desk/set-sla-goals-in-help-desk",
      },
      {
        label: "HubSpot Knowledge Base — Choose your workflow actions",
        url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions",
      },
      {
        label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows",
        url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows",
      },
      {
        label: "HubSpot Knowledge Base — Choose your rule-based chatbot actions",
        url: "https://knowledge.hubspot.com/chatflows/a-guide-to-bot-actions",
      },
      {
        label: "HubSpot Developers — Tickets API",
        url: "https://developers.hubspot.com/docs/api-reference/latest/crm/objects/tickets/guide",
      },
      {
        label: "HubSpot Developers — Webhooks API guide",
        url: "https://developers.hubspot.com/docs/api-reference/latest/webhooks/guide",
      },
    ],
    related: ["sla-policies-explained", "ticket-routing-automation", "website-chatbot-for-support"],
    updated: "2026-10-19",
  },
];
