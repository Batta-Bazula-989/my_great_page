import type { TranslatedPage } from "../../types";

export const crmPages: TranslatedPage[] = [
  {
    key: "attio-workflows-automation",
    slug: "automatizacion-workflows-attio",
    category: "crm",
    navLabel: "Workflows de Attio",
    primaryKeyword: "automatización con workflows de Attio",
    title: "Workflows de Attio: triggers, bloques, créditos y la API",
    description:
      "Workflows de Attio: bloques trigger y de acción, cómo se consumen los créditos, límites de la API REST, firmas de webhooks y cómo conectar Attio al soporte.",
    h1: "Workflows de Attio: cómo funciona la automatización del CRM en Attio",
    intro:
      "Attio automatiza el trabajo del CRM con workflows. Un workflow empieza en un bloque trigger y ejecuta una cadena de bloques de acción, como actualizar un registro, crear una tarea, enviar un mensaje de Slack o hacer una solicitud HTTP. Las ejecuciones de workflows consumen créditos del espacio de trabajo, y todo lo demás se conecta a través de la API REST y los webhooks de Attio.",
    keyFacts: [
      "Un workflow de Attio se compone de un bloque trigger, que lo inicia, y de bloques de acción, que hacen el trabajo.",
      "Los triggers, la lógica y las búsquedas de datos son gratuitos. Los bloques que escriben datos, llaman a sistemas externos o usan IA consumen créditos del espacio de trabajo, la mayoría de ellos un crédito por ejecución.",
      "La API REST de Attio permite 100 solicitudes de lectura y 25 de escritura por segundo. Si se supera el límite, devuelve HTTP 429 con una cabecera Retry-After.",
      "Attio firma los webhooks con un HMAC-SHA256 del cuerpo de la solicitud, enviado en la cabecera Attio-Signature.",
    ],
    sections: [
      {
        heading: "Cómo se construyen los workflows de Attio",
        blocks: [
          {
            type: "p",
            text: "Un workflow se construye en un lienzo. El bloque trigger decide cuándo se ejecuta, y los bloques de acción que vienen después deciden qué ocurre. La biblioteca de bloques de Attio agrupa los triggers en cuatro tipos:",
          },
          {
            type: "ul",
            items: [
              "Triggers de registro, como 'Record created'.",
              "Triggers de lista, como 'Record added to list'.",
              "Triggers de tarea, como 'Task created'.",
              "Triggers de utilidad, como 'Manual run', una programación o un webhook entrante.",
            ],
          },
          {
            type: "p",
            text: "El centro de ayuda de Attio pone como ejemplos de bloques de acción actualizar un registro, crear una tarea, enviar un mensaje de Slack, inscribir a alguien en una secuencia y hacer una solicitud HTTP. Un bloque 'Execute code' ejecuta tu propio código JavaScript como un paso, con un límite de tiempo de 100 segundos. También puedes describir un workflow en lenguaje natural y dejar que Ask Attio lo cree. Las apps creadas con el Attio SDK pueden añadir sus propios bloques, que después aparecen en el selector de bloques junto a los integrados.",
          },
          {
            type: "note",
            text: "Por defecto, un workflow no puede escribir en un objeto. Un administrador, o un miembro con acceso completo a ese objeto, tiene que dar antes acceso al workflow. Compruébalo antes de probar un workflow que actualiza registros.",
          },
        ],
      },
      {
        heading: "Cómo consumen créditos los workflows",
        blocks: [
          {
            type: "p",
            text: "Las ejecuciones de workflows consumen los créditos compartidos del espacio de trabajo, no los créditos por licencia. El centro de ayuda de Attio describe cómo se cuentan en los nuevos workflows:",
          },
          {
            type: "ul",
            items: [
              "Los triggers, la lógica y las búsquedas de datos son gratuitos. Solo se consumen créditos cuando un bloque escribe datos, envía o recibe algo de forma externa o usa IA.",
              "Las escrituras de registros, las tareas, la inscripción en secuencias, las solicitudes HTTP y los bloques de integración cuestan 1 crédito por ejecución. Los bloques de IA y 'Execute code' tienen costes variables.",
              "Solo se cobra el camino que sigue una ejecución. Si una ejecución falla a mitad, el bloque que falla y todos los bloques posteriores no consumen créditos, pero los bloques que se ejecutaron antes del fallo sí se cobran.",
              "Crear un workflow con Ask Attio consume créditos por licencia, no los créditos compartidos del espacio de trabajo.",
            ],
          },
          {
            type: "p",
            text: "A fecha de noviembre de 2026, Attio incluye 250 créditos del espacio de trabajo al mes en Free, 1.500 en Plus y 10.000 en Pro. Los planes cambian, así que consulta la página de precios de Attio y después estima el consumo multiplicando los bloques que consumen créditos en cada ejecución por las ejecuciones que esperas al mes.",
          },
        ],
      },
      {
        heading: "La API y los webhooks de Attio",
        blocks: [
          {
            type: "p",
            text: "Para todo lo que un workflow no puede hacer por sí solo, Attio tiene una API REST y webhooks salientes. Esto es lo que dice la documentación para desarrolladores sobre cada uno.",
          },
          {
            type: "table",
            caption: "API REST y webhooks de Attio (documentación para desarrolladores de Attio, revisada en noviembre de 2026)",
            head: ["Tema", "Qué documenta Attio"],
            rows: [
              ["Límites de tasa", "100 solicitudes por segundo para lecturas y 25 por segundo para escrituras. Si se supera el límite, HTTP 429 con una cabecera Retry-After."],
              ["Endpoints de listado", "List records y List entries tienen además límites basados en puntuación, contados en una ventana de 10 segundos para todas las apps y tokens."],
              ["Autenticación", "Una clave de API para un solo espacio de trabajo, u OAuth 2.0 para apps que se usan en varios espacios de trabajo. Los tokens se envían como Bearer tokens, y los scopes se definen por token."],
              ["Eventos de webhook", "Entre los eventos están record.created, list-entry.created, note.created y task.created."],
              ["Firma del webhook", "Un HMAC-SHA256 del cuerpo sin procesar de la solicitud, generado con el secreto del webhook y codificado en hexadecimal, en la cabecera Attio-Signature."],
              ["Reintentos", "Cada mensaje lleva una cabecera Idempotency-Key que no cambia cuando Attio lo reintenta."],
            ],
          },
          {
            type: "p",
            text: "Para comprobar que un webhook viene de Attio, vuelve a calcular el HMAC-SHA256 del cuerpo sin procesar con el secreto del webhook y compáralo con la cabecera Attio-Signature. Attio también envía el mismo valor como X-Attio-Signature para middleware más antiguo. Usa la cabecera Idempotency-Key para omitir los mensajes que ya has procesado, de modo que un reintento no cree una segunda tarea o un segundo mensaje de Slack.",
          },
        ],
      },
      {
        heading: "Conectar Attio con tus herramientas de soporte",
        blocks: [
          {
            type: "p",
            text: "Attio tiene una app de Slack para notificaciones y una app oficial de Zapier. Zapier muestra conexiones ya preparadas entre Attio y helpdesks como Zendesk e Intercom. Para tener más control, conecta un helpdesk a la API y los webhooks de Attio mediante n8n o Make. Este es un patrón habitual, descrito paso a paso. Muestra cómo encajan las piezas. No es un caso de éxito de TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: tu helpdesk envía un webhook a n8n o Make cuando se crea o se escala un ticket.",
              "Búsqueda: el workflow encuentra el registro de la empresa del cliente en Attio a través de la API, sin salirse del límite de 100 lecturas por segundo.",
              "Actualización: escribe el estado o la categoría del ticket en un atributo del registro, o crea una tarea para el responsable de la cuenta.",
              "Reacción en Attio: un workflow de Attio que se activa con esa actualización del registro envía un mensaje de Slack al responsable de la cuenta.",
              "Gestión de errores: espera y reintenta ante un HTTP 429, y usa la cabecera Idempotency-Key para descartar las entregas de webhook duplicadas.",
            ],
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab conecta herramientas como Attio con las herramientas de helpdesk y de chat que ya usas, mediante APIs, webhooks, n8n y Make, sin cambiar de plataforma. Los proyectos de Custom Automation cuestan {{price:custom}}. La mayoría de las implementaciones llevan de 1 a 3 semanas, y todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué son los workflows de Attio?",
        a: "La herramienta de automatización de Attio. Un workflow empieza en un bloque trigger, como la creación de un registro o una ejecución manual, y después ejecuta bloques de acción, como actualizar un registro, crear una tarea, enviar un mensaje de Slack o hacer una solicitud HTTP.",
      },
      {
        q: "¿Los workflows de Attio consumen créditos?",
        a: "Sí, en el caso de los bloques que escriben datos, llaman a sistemas externos o usan IA. La mayoría de ellos cuestan un crédito por ejecución, mientras que los triggers, la lógica y las búsquedas de datos son gratuitos. A fecha de noviembre de 2026, Free incluye 250 créditos del espacio de trabajo al mes, Plus 1.500 y Pro 10.000.",
      },
      {
        q: "¿Cuáles son los límites de tasa de la API de Attio?",
        a: "100 solicitudes por segundo para lecturas y 25 por segundo para escrituras. Si se supera el límite, Attio devuelve HTTP 429 con una cabecera Retry-After. Los endpoints List records y List entries tienen además límites basados en puntuación.",
      },
      {
        q: "¿Cómo verifico un webhook de Attio?",
        a: "Calcula un HMAC-SHA256 del cuerpo sin procesar de la solicitud con el secreto del webhook, codifícalo en hexadecimal y compáralo con la cabecera Attio-Signature.",
      },
    ],
    sources: [
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/getting-started-with-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Create a workflow", url: "https://attio.com/help/reference/automations/workflows/create-a-workflow" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Authentication", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Docs — Workflow blocks (SDK)", url: "https://docs.attio.com/sdk/workflow-blocks/overview" },
      { label: "Attio Help — Communication apps (Slack)", url: "https://attio.com/help/reference/apps/communication-apps" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
      { label: "Zapier — Attio and Zendesk integrations", url: "https://zapier.com/apps/attio/integrations/zendesk" },
    ],
    related: ["attio-vs-hubspot-automation", "n8n-vs-make-vs-zapier", "slack-support-automation"],
    updated: "2026-11-03",
  },
  {
    key: "attio-vs-hubspot-automation",
    slug: "attio-vs-hubspot-automatizacion",
    category: "crm",
    navLabel: "Attio vs HubSpot: automatización",
    primaryKeyword: "Attio vs HubSpot automatización",
    title: "Attio vs HubSpot: automatización, workflows, API, webhooks",
    description:
      "Attio vs HubSpot en automatización: quién tiene workflows, límites y créditos, triggers, pasos de código y webhook, límites de la API y firmas de webhooks.",
    h1: "Attio vs HubSpot en automatización: workflows, límites, API y webhooks",
    intro:
      "Attio y HubSpot automatizan el trabajo del CRM con workflows visuales, pero los limitan de forma distinta. HubSpot solo incluye workflows en las ediciones Professional y Enterprise y limita cuántos puedes crear, mientras que Attio mide las ejecuciones de workflows con créditos del espacio de trabajo. Sus APIs y webhooks también se diferencian en los límites de tasa y en cómo verificas una solicitud.",
    keyFacts: [
      "Los workflows de HubSpot requieren una suscripción Professional o Enterprise. Marketing, Sales o Service Hub Professional permite hasta 300 workflows, y Enterprise hasta 1.000.",
      "Attio mide los workflows con créditos del espacio de trabajo. Los triggers, la lógica y las búsquedas son gratuitos, y la mayoría de los bloques que escriben datos o llaman a sistemas externos consumen un crédito por ejecución.",
      "Las acciones de código personalizado de HubSpot deben terminar en 20 segundos y pueden usar hasta 128 MB de memoria. El bloque 'Execute code' de Attio agota el tiempo de espera a los 100 segundos.",
      "La API de Attio permite 100 lecturas y 25 escrituras por segundo. Las apps privadas de HubSpot en Professional o Enterprise tienen 190 solicitudes cada 10 segundos.",
      "HubSpot firma los webhooks con X-HubSpot-Signature-v3. Attio usa la cabecera Attio-Signature.",
    ],
    sections: [
      {
        heading: "Comparativa lado a lado",
        blocks: [
          {
            type: "table",
            caption: "Automatización en Attio vs HubSpot (documentación de los proveedores, revisada en noviembre de 2026)",
            head: ["Pregunta", "Attio", "HubSpot"],
            rows: [
              ["Cómo se limita el uso", "Créditos del espacio de trabajo. Los triggers, la lógica y las búsquedas son gratuitos, y la mayoría de los bloques que escriben o llaman a sistemas externos consumen un crédito.", "Requiere Professional o Enterprise. Un límite en el número de workflows por edición."],
              ["Triggers", "Triggers de registro, de lista, de tarea y de utilidad, incluidos una programación, un webhook y una ejecución manual", "Triggers de inscripción basados en filtros, eventos, programaciones y webhooks"],
              ["Llamar a otro sistema y código", "Bloque de solicitud HTTP y un bloque 'Execute code' para JavaScript. Las apps pueden añadir bloques personalizados.", "Acciones 'Send a webhook' y 'Custom code', en Data Hub Professional y Enterprise"],
              ["Slack", "Bloque de mensaje de Slack, con la app de Slack de Attio", "Acción de notificación de Slack, con la integración de Slack instalada"],
              ["Límite de tasa de la API", "100 lecturas y 25 escrituras por segundo", "Apps privadas: 100 cada 10 segundos en Free y Starter, 190 en Professional y Enterprise, más un límite diario"],
              ["Firma del webhook", "HMAC-SHA256 del cuerpo, codificado en hexadecimal, en Attio-Signature", "HMAC-SHA256 del método, la URI, el cuerpo y la marca de tiempo, codificado en base64, en X-HubSpot-Signature-v3"],
            ],
          },
        ],
      },
      {
        heading: "Workflows de HubSpot: ediciones y límites",
        blocks: [
          {
            type: "p",
            text: "Las preguntas frecuentes de HubSpot sobre workflows dicen que se necesita una suscripción Professional o Enterprise para usar workflows. Cuántos puedes crear depende de la edición:",
          },
          {
            type: "ul",
            items: [
              "Marketing, Sales o Service Hub Professional: hasta 300 workflows.",
              "Marketing, Sales o Service Hub Enterprise: hasta 1.000 workflows.",
              "Con el complemento Brands: 100 workflows más.",
              "Con varios hubs, la suscripción con el límite más alto fija tu límite.",
            ],
          },
          {
            type: "p",
            text: "Solo cuentan para el límite los workflows personalizados creados en la herramienta de workflows. Las automatizaciones sencillas de herramientas como los formularios no cuentan. Por defecto, un registro se inscribe en un workflow solo la primera vez que cumple los triggers de inscripción. Puedes activar la reinscripción, pero no puede usar criterios AND y no inscribe registros de forma retroactiva.",
          },
          {
            type: "p",
            text: "Dos acciones son las que más importan para las integraciones: 'Send a webhook' y 'Custom code'. HubSpot indica ambas para Data Hub Professional y Enterprise, el hub que antes se llamaba Operations Hub. Las acciones de código personalizado ejecutan Node.js de forma predeterminada, o Python en beta, deben terminar en 20 segundos y pueden usar hasta 128 MB de memoria, así que los trabajos largos deben ir en una herramienta externa como n8n.",
          },
        ],
      },
      {
        heading: "Workflows de Attio: medidos con créditos",
        blocks: [
          {
            type: "p",
            text: "Attio mide los workflows según el uso. Las ejecuciones consumen los créditos compartidos del espacio de trabajo. Los triggers, la lógica y las búsquedas de datos son gratuitos, y los bloques que escriben datos, llaman a sistemas externos o usan IA consumen créditos, la mayoría de ellos uno por ejecución. A fecha de noviembre de 2026, Free incluye 250 créditos del espacio de trabajo al mes, Plus 1.500 y Pro 10.000.",
          },
          {
            type: "p",
            text: "Para llegar a otro sistema desde un workflow de Attio, usa el bloque de solicitud HTTP. El bloque 'Execute code' ejecuta tu propio código JavaScript con un límite de tiempo de 100 segundos y un coste en créditos variable, y las apps creadas con el Attio SDK pueden añadir sus propios bloques de workflow.",
          },
        ],
      },
      {
        heading: "APIs y webhooks para integraciones",
        blocks: [
          {
            type: "p",
            text: "HubSpot limita las apps privadas por cada 10 segundos y por día. Las cuentas Free y Starter tienen 100 solicitudes cada 10 segundos y 250.000 al día. Professional tiene 190 cada 10 segundos y 625.000 al día, y Enterprise, 190 cada 10 segundos y 1.000.000 al día. El límite de 10 segundos se aplica a cada app, y el límite diario lo comparten todas las apps de la cuenta. Si se supera el límite, HubSpot devuelve HTTP 429, y sus directrices piden que las respuestas de error se mantengan por debajo del 5% de tus solicitudes diarias.",
          },
          {
            type: "p",
            text: "Attio cuenta por segundo: 100 lecturas y 25 escrituras, con HTTP 429 y una cabecera Retry-After cuando las superas. Sus endpoints List records y List entries tienen además límites basados en puntuación, contados en una ventana de 10 segundos.",
          },
          {
            type: "p",
            text: "Los dos firman sus webhooks, pero de forma distinta. La firma v3 de HubSpot llega en X-HubSpot-Signature-v3 junto con X-HubSpot-Request-Timestamp. Es un HMAC-SHA256, codificado en base64 y generado con el secreto de cliente de la app, sobre el método, la URI, el cuerpo y la marca de tiempo, y HubSpot indica que se rechacen las solicitudes cuya marca de tiempo tenga más de 5 minutos. La cabecera Attio-Signature de Attio es un HMAC-SHA256 del cuerpo sin procesar, codificado en hexadecimal y generado con el secreto del webhook. Attio también envía una cabecera Idempotency-Key que no cambia entre reintentos.",
          },
        ],
      },
      {
        heading: "Cuál encaja mejor con un equipo de soporte",
        blocks: [
          {
            type: "ul",
            items: [
              "Si tu equipo de soporte ya trabaja en el help desk de HubSpot, los tickets, los SLA y los workflows de tickets están en la misma cuenta que el CRM, y los workflows están incluidos a partir de Professional.",
              "Si usas Attio como CRM y un helpdesk aparte, conecta los dos a través de las APIs y los webhooks con n8n, Make o Zapier, que tiene una app oficial de Attio.",
              "Si tus automatizaciones llaman a otros sistemas, cuenta en el presupuesto con Data Hub Professional en HubSpot, o planifica en torno a los bloques de solicitud HTTP y 'Execute code' en Attio.",
              "Si los volúmenes son altos, compara los límites de la API anteriores con tu volumen máximo de tickets antes de decidir dónde se ejecuta la lógica.",
            ],
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab crea automatizaciones sobre el CRM y el helpdesk que ya usas, con APIs, webhooks, n8n y Make, para que no tengas que cambiar de plataforma. Los proyectos de Custom Automation cuestan {{price:custom}}. La mayoría de las implementaciones llevan de 1 a 3 semanas, y todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿HubSpot incluye workflows en todos los planes?",
        a: "No. Las preguntas frecuentes de HubSpot sobre workflows dicen que se necesita una suscripción Professional o Enterprise. Marketing, Sales o Service Hub Professional permite hasta 300 workflows, y Enterprise hasta 1.000.",
      },
      {
        q: "¿Cómo limita Attio los workflows?",
        a: "Con créditos del espacio de trabajo. Los triggers, la lógica y las búsquedas son gratuitos, y la mayoría de los bloques que escriben datos o llaman a sistemas externos consumen un crédito por ejecución. Los bloques de IA y de código varían. Los créditos incluidos dependen de tu plan.",
      },
      {
        q: "¿Puedo ejecutar código personalizado en los workflows de HubSpot o Attio?",
        a: "HubSpot tiene una acción 'Custom code' en Data Hub Professional y Enterprise que ejecuta Node.js, o Python en beta, con un máximo de 20 segundos y 128 MB de memoria. Attio tiene un bloque 'Execute code' que ejecuta JavaScript con un límite de tiempo de 100 segundos, y las apps creadas con su SDK pueden añadir bloques personalizados.",
      },
      {
        q: "¿Cómo verifico los webhooks de HubSpot y Attio?",
        a: "En HubSpot, vuelve a calcular el HMAC-SHA256 del método, la URI, el cuerpo y la marca de tiempo con tu secreto de cliente y compáralo con X-HubSpot-Signature-v3. En Attio, compara un HMAC-SHA256 del cuerpo sin procesar, generado con el secreto del webhook, con la cabecera Attio-Signature.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Workflows FAQ", url: "https://knowledge.hubspot.com/workflows/workflows-faq" },
      { label: "HubSpot Knowledge Base — Set your workflow enrollment triggers", url: "https://knowledge.hubspot.com/workflows/set-your-workflow-enrollment-triggers" },
      { label: "HubSpot Knowledge Base — Add re-enrollment triggers to a workflow", url: "https://knowledge.hubspot.com/workflows/add-re-enrollment-triggers-to-a-workflow" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "HubSpot Developers — Custom code actions", url: "https://developers.hubspot.com/docs/api-reference/latest/automation/workflow-actions/custom-code-actions" },
      { label: "HubSpot Developers — API usage guidelines and limits", url: "https://developers.hubspot.com/docs/developer-tooling/platform/usage-guidelines" },
      { label: "HubSpot Developers — Validating requests", url: "https://developers.hubspot.com/docs/apps/developer-platform/build-apps/authentication/request-validation" },
      { label: "HubSpot — Fall 2025 Spotlight", url: "https://www.hubspot.com/company-news/fall-2025-spotlight" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio Help — Manage workspace and seat credits", url: "https://attio.com/help/reference/workspace-settings-billing/manage-workspace-and-seat-credits" },
      { label: "Attio Help — Migrate your legacy workflows", url: "https://attio.com/help/reference/automations/workflows/migrate-your-legacy-workflows" },
      { label: "Attio Docs — Rate limiting", url: "https://docs.attio.com/rest-api/guides/rate-limiting" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Zapier app", url: "https://attio.com/help/reference/apps/zapier-app" },
    ],
    related: ["attio-workflows-automation", "hubspot-service-hub-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-11-03",
  },
  {
    key: "hubspot-zendesk-integration",
    slug: "integracion-hubspot-zendesk",
    category: "crm",
    navLabel: "Integración HubSpot Zendesk",
    primaryKeyword: "integración HubSpot Zendesk",
    title: "Integración HubSpot Zendesk: qué se sincroniza y opciones",
    description:
      "Integración HubSpot Zendesk: qué sincroniza la app gratuita Zendesk for HubSpot y qué no, action flows, apps bidireccionales y desarrollos con ambas APIs.",
    h1: "Integración HubSpot Zendesk: qué se sincroniza, qué no y tus opciones",
    intro:
      "La integración de HubSpot de la propia Zendesk es gratuita y se conecta rápido, pero solo envía eventos de tickets en un sentido, de Zendesk a la cronología de un contacto en HubSpot. Si necesitas más, los flujos de acciones (action flows) de Zendesk pueden crear y actualizar registros de HubSpot, las apps del Marketplace ofrecen sincronización bidireccional y un desarrollo a medida con webhooks y ambas APIs puede mover exactamente los datos que elijas.",
    keyFacts: [
      "La integración Zendesk Support for HubSpot es unidireccional: la información de los tickets va de Zendesk a HubSpot.",
      "Crea tres triggers de Zendesk, para tickets nuevos, tickets resueltos y valoraciones CSAT, además de un webhook llamado HubSpot Integration.",
      "Los tickets solo aparecen en la cronología del contacto de HubSpot, no en empresas ni en negocios, y solo se sincroniza la dirección de correo del usuario.",
      "Los flujos de acciones de Zendesk tienen acciones de HubSpot que crean, actualizan y buscan contactos, empresas, negocios y tickets.",
      "Zendesk dejó de emitir nuevos tokens de API el 27 de octubre de 2026, así que los desarrollos a medida deben usar OAuth.",
    ],
    sections: [
      {
        heading: "Cuatro formas de conectar HubSpot y Zendesk",
        blocks: [
          {
            type: "table",
            caption: "Opciones de integración entre HubSpot y Zendesk (documentación y fichas de los proveedores, revisadas en noviembre de 2026)",
            head: ["Opción", "Sentido", "Qué mueve"],
            rows: [
              ["Zendesk Support for HubSpot", "Solo de Zendesk a HubSpot", "Eventos de tickets nuevos, tickets resueltos y valoraciones CSAT, enviados a la cronología del contacto"],
              ["Flujos de acciones de Zendesk con acciones de HubSpot", "De Zendesk a HubSpot, paso a paso", "Crea, actualiza y busca contactos, empresas, negocios y tickets"],
              ["Apps del Marketplace", "Depende de la app; algunas son bidireccionales", "Lo que admita la app, como contactos o negocios"],
              ["Desarrollo a medida con webhooks y ambas APIs", "En cualquier sentido", "Exactamente los campos y eventos que elijas"],
            ],
          },
          {
            type: "p",
            text: "Empieza por la pregunta que tu equipo intenta responder. Si el equipo de ventas y los gestores de cuentas solo necesitan ver en HubSpot el historial de soporte de un contacto, puede que la integración gratuita sea suficiente. Si los tickets tienen que cambiar datos de HubSpot, como una propiedad de empresa o la etapa de un negocio, necesitas flujos de acciones, una app o un desarrollo a medida.",
          },
        ],
      },
      {
        heading: "Cómo configurar la integración gratuita Zendesk Support for HubSpot",
        blocks: [
          {
            type: "ol",
            items: [
              "Abre la página de instalación de la integración e introduce tu subdominio de Zendesk.",
              "Autoriza la conexión tanto en Zendesk como en HubSpot.",
              "Zendesk crea tres triggers, para tickets nuevos, tickets resueltos y valoraciones CSAT, y un webhook llamado HubSpot Integration.",
              "Edita las condiciones de esos triggers si solo quieres que algunos tickets lleguen a HubSpot.",
            ],
          },
          {
            type: "p",
            text: "Zendesk documenta algunos límites. La integración es unidireccional, de Zendesk a HubSpot. Solo se sincroniza la dirección de correo del usuario, no el nombre ni los apellidos. Los tickets solo se muestran en la cronología del contacto, no en los registros de empresas ni de negocios. Puedes cambiar qué tickets se envían editando las condiciones de los triggers, pero no puedes cambiar el payload JSON. Para desactivar la integración, desactiva los tres triggers.",
          },
          {
            type: "note",
            text: "No pruebes el webhook HubSpot Integration desde Admin Center. Zendesk advierte de que hacerlo puede enviar JSON no válido y desconectar la integración. En su lugar, prueba creando o resolviendo un ticket de prueba real.",
          },
        ],
      },
      {
        heading: "Flujos de acciones de Zendesk con acciones de HubSpot",
        blocks: [
          {
            type: "p",
            text: "Los flujos de acciones son el editor de Zendesk para automatizaciones de varios pasos que llegan a sistemas externos. El conector de HubSpot añade estas acciones:",
          },
          {
            type: "ul",
            items: [
              "Crear y actualizar contactos, empresas, negocios y tickets en HubSpot.",
              "Buscar contactos, empresas, negocios y tickets, y buscar usuarios.",
              "Buscar un contacto por Contact ID o por correo electrónico. Si indicas ambos, Contact ID tiene prioridad.",
              "Conectar con OAuth 2.0 desde 'External actions' en la barra lateral del paso. Zendesk recomienda una cuenta de servicio dedicada y renueva los tokens automáticamente.",
            ],
          },
          {
            type: "p",
            text: "Los flujos de acciones consumen créditos de acciones. Zendesk indica 100.000 acciones al mes para Suite Professional y 225.000 para Suite Enterprise, envía un correo al llegar al 80% y al 100% de la asignación y vende más en unidades de 100.000. Los administradores pueden ver el consumo en Admin Center, en 'Account', luego 'Usage' y luego 'Summary'. Las asignaciones y la disponibilidad por plan cambian, así que compruébalas en tu propia cuenta antes de construir sobre flujos de acciones.",
          },
        ],
      },
      {
        heading: "Apps de sincronización bidireccional",
        blocks: [
          {
            type: "p",
            text: "El Zendesk Marketplace incluye una app Data sync by HubSpot que describe como una sincronización bidireccional en tiempo real entre HubSpot y Zendesk. Para instalarla hace falta un Super Admin de HubSpot o un usuario con permisos de App Marketplace, que introduce el subdominio de Zendesk, autoriza la conexión y elige qué sincronizar. Las apps de terceros, como HubSpot CRM Connect, añaden sus propias funciones. Las fichas del Marketplace son páginas de marketing, así que comprueba en su pantalla de configuración qué registros y campos sincroniza realmente una app antes de confiar en ella.",
          },
          {
            type: "p",
            text: "La documentación de HubSpot sobre la sincronización de datos explica cómo emparejan los registros las sincronizaciones bidireccionales: de forma predeterminada, los contactos se emparejan por correo electrónico y las empresas por nombre o dominio, y solo se sincronizan los contactos con una dirección de correo válida. Limpia los contactos duplicados y los correos que falten antes de activar una sincronización bidireccional, o la sincronización copiará el desorden en las dos herramientas.",
          },
        ],
      },
      {
        heading: "Desarrollos a medida con webhooks y ambas APIs",
        blocks: [
          {
            type: "p",
            text: "Un desarrollo a medida te da control total, por ejemplo para mostrar los tickets abiertos en los registros de empresas de HubSpot, algo que la integración gratuita no puede hacer. Este es un patrón habitual, descrito paso a paso. No es un caso de éxito de TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: un trigger de Zendesk con la acción 'Notify by > Active webhook' envía el ID del ticket y el correo del solicitante a n8n o Make cuando se crea un ticket o cambia su estado.",
              "Verificación: el workflow comprueba la cabecera X-Zendesk-Webhook-Signature, de modo que solo se procesan las solicitudes reales de Zendesk.",
              "Búsqueda: encuentra el contacto de HubSpot por correo electrónico a través de la API del CRM y, después, la empresa a la que está asociado el contacto.",
              "Actualización: escribe el número de tickets o el último estado en una propiedad de la empresa, que pueden usar las listas, los informes y los workflows de HubSpot.",
              "Gestión de errores: espera y reintenta ante un HTTP 429, ya que tanto Zendesk como HubSpot limitan las solicitudes a la API.",
            ],
          },
          {
            type: "p",
            text: "Para la dirección contraria, un workflow de HubSpot puede llamar a tu endpoint con la acción 'Send a webhook', que HubSpot indica para Data Hub Professional y Enterprise y que solo acepta URL HTTPS. En el lado de Zendesk, usa OAuth en lugar de tokens de API. Zendesk dejó de permitir que las cuentas existentes crearan nuevos tokens de API el 27 de octubre de 2026, y todos los tokens de API dejarán de funcionar el 30 de abril de 2027. Los clientes OAuth creados a partir del 30 de abril de 2026 reciben tokens de acceso que, de forma predeterminada, caducan a los 30 minutos, así que la integración tiene que gestionar los tokens de actualización (refresh tokens).",
          },
        ],
      },
      {
        heading: "Cómo ponerlo en marcha",
        blocks: [
          {
            type: "p",
            text: "TascaLab conecta Zendesk y HubSpot mediante APIs, webhooks, n8n y Make, sobre las herramientas que ya usas. Los proyectos de Custom Automation cuestan {{price:custom}}. La mayoría de las implementaciones llevan de 1 a 3 semanas, y todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿La integración HubSpot Zendesk es bidireccional?",
        a: "La integración gratuita Zendesk Support for HubSpot, no. Es unidireccional y envía la información de los tickets de Zendesk a la cronología del contacto en HubSpot. Para una sincronización bidireccional, usa una app del Marketplace como Data sync by HubSpot, o un desarrollo a medida.",
      },
      {
        q: "¿Puedo ver los tickets de Zendesk en las empresas o los negocios de HubSpot?",
        a: "No con la integración gratuita, que solo muestra los tickets en la cronología del contacto. Puedes hacerlo con un desarrollo a medida que escriba los datos de los tickets en propiedades de empresas o de negocios a través de la API de HubSpot.",
      },
      {
        q: "¿Por qué se desconectó mi integración de HubSpot después de probar su webhook?",
        a: "Zendesk advierte de que probar el webhook HubSpot Integration desde Admin Center puede enviar JSON no válido y desconectar la integración. En su lugar, prueba con un ticket real.",
      },
      {
        q: "¿Todavía puedo usar un token de API de Zendesk para una integración con HubSpot?",
        a: "Solo uno que ya tengas. Zendesk dejó de emitir nuevos tokens de API el 27 de octubre de 2026, desactiva los tokens que pasan 30 días sin usarse y desactivará todos los tokens de API el 30 de abril de 2027. Usa OAuth para las integraciones nuevas.",
      },
    ],
    sources: [
      { label: "Zendesk Help — Setting up the Zendesk Support for HubSpot integration", url: "https://support.zendesk.com/hc/en-us/articles/4408884090650-Setting-up-the-Zendesk-Support-for-HubSpot-integration" },
      { label: "Zendesk Help — Using HubSpot actions in action flows", url: "https://support.zendesk.com/hc/en-us/articles/10917655354138-Using-HubSpot-actions-in-action-flows" },
      { label: "Zendesk Help — Monitoring the usage of action credits and action flow activity", url: "https://support.zendesk.com/hc/en-us/articles/10149993578522-Monitoring-the-usage-of-action-credits-and-action-flow-activity" },
      { label: "Zendesk Marketplace — Data sync by HubSpot", url: "https://www.zendesk.com/marketplace/apps/support/431348/data-sync-by-hubspot/" },
      { label: "Zendesk Marketplace — HubSpot CRM Connect", url: "https://www.zendesk.com/marketplace/apps/support/959977/hubspot-crm-connect/" },
      { label: "HubSpot Knowledge Base — Connect and use HubSpot data sync", url: "https://knowledge.hubspot.com/integrations/connect-and-use-hubspot-data-sync" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "HubSpot Knowledge Base — Use webhooks with HubSpot workflows", url: "https://knowledge.hubspot.com/workflows/how-do-i-use-webhooks-with-hubspot-workflows" },
      { label: "HubSpot Knowledge Base — Choose your workflow actions", url: "https://knowledge.hubspot.com/workflows/choose-your-workflow-actions" },
      { label: "Zendesk Help — Announcing the removal of API tokens as an authentication method for API requests", url: "https://support.zendesk.com/hc/en-us/articles/10851263566234-Announcing-the-removal-of-API-tokens-as-an-authentication-method-for-API-requests" },
      { label: "Zendesk Developer Docs — Working with OAuth refresh tokens", url: "https://developer.zendesk.com/documentation/api-basics/authentication/refresh-token/" },
    ],
    related: ["hubspot-service-hub-automation", "zendesk-automation", "n8n-zendesk-integration"],
    updated: "2026-11-03",
  },
  {
    key: "ai-lead-scoring",
    slug: "lead-scoring-ia",
    category: "crm",
    navLabel: "Lead scoring con IA",
    primaryKeyword: "lead scoring con IA",
    title: "Lead scoring con IA: encaje ICP, HubSpot y Attio",
    description:
      "Lead scoring con IA: puntuar leads según tu perfil de cliente ideal, la herramienta de scoring de HubSpot y cómo escribir la puntuación en Attio por API.",
    h1: "Lead scoring con IA: cómo funciona la puntuación según tu ICP",
    intro:
      "El lead scoring convierte leads sin procesar en una lista ordenada, dando puntos a cada uno según lo bien que encaja con tu perfil de cliente ideal (ICP) y cómo se comporta. La IA entra de dos formas: el scoring nativo de la plataforma, como los lead scores creados con IA de HubSpot, y la clasificación externa, donde un modelo lee una respuesta o un registro de enriquecimiento, calcula una puntuación de encaje y la escribe en tu CRM a través de la API.",
    keyFacts: [
      "La herramienta de lead scoring de HubSpot requiere Marketing Hub o Sales Hub Professional o Enterprise; los scores de contactos creados con IA requieren Marketing Hub Enterprise.",
      "Los lead scores con IA de HubSpot necesitan una muestra mínima de 50 contactos — 25 convertidos y 25 no convertidos — antes de poder generar una puntuación.",
      "Attio no tiene motor de scoring ni tipo de campo de puntuación: la puntuación vive en un atributo de número o de selección que rellena un workflow o la API.",
      "Los atributos de número de Attio almacenan números de coma flotante con hasta cuatro decimales — suficiente para una puntuación de encaje de 0–100.",
      "Una puntuación externa se escribe en HubSpot con un PATCH a /crm/v3/objects/contacts/{contactId}, y en Attio con un PATCH a /v2/objects/{object}/records/{record_id}.",
    ],
    sections: [
      {
        heading: "Qué significa el lead scoring con IA",
        blocks: [
          {
            type: "p",
            text: "Los modelos de scoring suelen combinar dos tipos de señal. Las señales de engagement miden lo que hace un lead: aperturas, clics, respuestas, visitas a la web, reuniones agendadas. Las señales de encaje miden quién es el lead, comparado con tu perfil de cliente ideal: sector, tamaño de empresa, país, cargo, herramientas que usa. La puntuación de encaje responde a \"¿queremos a este lead?\"; la de engagement, a \"¿este lead nos quiere a nosotros?\".",
          },
          {
            type: "p",
            text: "La IA aparece en dos sitios. Los CRM incluyen scores nativos de machine learning que aprenden de tus conversiones históricas, como los lead scores creados con IA de HubSpot. Y hay equipos que ejecutan su propia clasificación fuera del CRM: un modelo de lenguaje lee una respuesta de outreach o un registro de enriquecimiento, la etiqueta (interesado, ahora no, persona equivocada) o valora el encaje con el ICP, y el resultado se escribe en un campo del CRM a través de la API. El segundo patrón funciona con cualquier CRM que tenga API, y es en el que se centra esta página.",
          },
        ],
      },
      {
        heading: "Lead scoring dentro de HubSpot",
        blocks: [
          {
            type: "p",
            text: "El scoring actual de HubSpot vive en la herramienta de lead scoring. Está disponible con Marketing Hub o Sales Hub Professional o Enterprise. Marketing Hub puntúa contactos, ambos hubs puntúan empresas y Sales Hub puntúa negocios. Puedes crear scores de engagement, scores de encaje basados en valores de propiedades y scores combinados, cada uno a partir de grupos de criterios ponderados con puntos positivos y negativos.",
          },
          {
            type: "ul",
            items: [
              "El máximo por defecto de un score es de 100 puntos; el límite puede fijarse en ±100, ±200, ±300, ±400, ±500, ±1.000 o ±10.000.",
              "El decaimiento del score puede reducir los puntos de engagement con el tiempo, con intervalos de cada 1, 3, 6 o 12 meses, contando cada mes como 30 días.",
              "Los umbrales dividen una puntuación en bandas High, Medium y Low; los scores combinados usan una matriz A1–C3 de encaje y engagement.",
              "Los scores de contactos creados con IA (Marketing Hub Enterprise) aprenden de contactos que pasaron entre dos etapas del ciclo de vida y necesitan al menos 50 contactos — 25 convertidos y 25 no convertidos.",
            ],
          },
          {
            type: "note",
            text: "La herramienta crea sus propias propiedades de score, ligadas al score: si borras el score, las propiedades desaparecen con él, y no pueden editarse desde fuera. Una puntuación de IA calculada externamente debe ir, por tanto, en una propiedad de número personalizada que crees tú, no en una propiedad de score gestionada por la herramienta.",
          },
        ],
      },
      {
        heading: "Scoring en Attio",
        blocks: [
          {
            type: "p",
            text: "Attio toma el enfoque contrario: no hay motor de scoring ni tipo de campo de puntuación. Una puntuación es simplemente un atributo que tú rellenas. La propia plantilla de workflow \"MQL Scoring\" de Attio puntúa leads con bloques de workflow, y su página de automatizaciones menciona un \"Scoring Agent\" entre los agentes de IA que se ejecutan dentro de los workflows — un paso de agente con instrucciones, no un producto de scoring aparte. Tres tipos de atributo encajan con una puntuación:",
          },
          {
            type: "ul",
            items: [
              "Un atributo de número almacena números de coma flotante con hasta cuatro decimales y se puede filtrar con comparaciones como mayor-o-igual — un lugar natural para una puntuación de encaje de 0–100.",
              "Un atributo de selección contiene opciones predefinidas, útil para bandas como A, B y C. Escribir un valor cuya opción no existe devuelve un error en lugar de crear la opción.",
              "Un atributo de valoración es un valor numérico de 0 a 5, mostrado como estrellas.",
            ],
          },
          {
            type: "p",
            text: "Los workflows están disponibles en todos los planes de Attio. Un workflow puede arrancar con un cambio en un registro, una programación o un disparador \"Webhook received\", así que un scorer externo puede iniciarlo directamente; un bloque \"Custom agent\" puede ejecutar un paso de IA con salida estructurada, seguido de un bloque de actualización de registro para guardarla. Los webhooks salientes van firmados con un HMAC-SHA256 del cuerpo en la cabecera Attio-Signature, de modo que tu scorer también puede reaccionar a eventos de Attio de forma segura.",
          },
        ],
      },
      {
        heading: "Escribir una puntuación de IA externa en tu CRM",
        blocks: [
          {
            type: "table",
            caption: "Escribir una puntuación vía API (docs de los proveedores, consultado en noviembre de 2026)",
            head: ["Paso", "HubSpot", "Attio"],
            rows: [
              [
                "Crear el campo",
                "POST /crm/v3/properties/{objectType} con groupName, name, label, type \"number\", fieldType \"number\"",
                "Crear un atributo de número o de selección en el objeto, en los ajustes del workspace o vía la API de atributos",
              ],
              [
                "Escribir un registro",
                "PATCH /crm/v3/objects/contacts/{contactId} con {\"properties\": {...}}; se puede usar un email con idProperty=email",
                "PATCH /v2/objects/{object}/records/{record_id} con el slug del atributo en el cuerpo",
              ],
              [
                "Escribir en bloque",
                "POST /crm/v3/objects/contacts/batch/update, o batch/upsert para crear-o-actualizar",
                "Una petición por registro, dentro de los límites de la API",
              ],
              [
                "Autenticación",
                "Token de acceso de una private app como token Bearer",
                "API key del workspace u OAuth 2.0, como token Bearer; actualizar registros requiere los scopes record_permission:read-write y object_configuration:read",
              ],
            ],
          },
          {
            type: "p",
            text: "Un pipeline típico, descrito en pasos — muestra cómo encajan las piezas, no es un caso de estudio de TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Captar: llega un lead nuevo desde un formulario, una respuesta de outreach o una herramienta de identificación de visitantes.",
              "Clasificar: un modelo de IA etiqueta la respuesta o el lead (interesado, no interesado, persona equivocada, fuera de mercado).",
              "Puntuar: los datos firmográficos del lead se comparan con tu ICP y se calcula una puntuación de encaje.",
              "Escribir: la puntuación aterriza en una propiedad de número personalizada en HubSpot o en un atributo de número en Attio, mediante los endpoints de arriba.",
              "Avisar: un workflow del CRM o un mensaje de Slack avisa al responsable cuando un lead cruza el umbral.",
            ],
          },
        ],
      },
      {
        heading: "De dónde salen las respuestas: lemlist",
        blocks: [
          {
            type: "p",
            text: "Las respuestas de outreach son una de las señales de scoring más fuertes, y lemlist las expone de dos maneras. Los webhooks envían callbacks POST en tiempo real para eventos como emailsReplied, linkedinReplied y whatsappReplied, además de estados del lead como interested y notInterested; un workspace admite hasta 200 webhooks y cada URL de destino debe ser única — registra una URL sin tipo de evento para recibir todos los eventos y filtrar por tu cuenta. La API de actividades (GET /activities) recupera el mismo historial filtrado por tipo, campaña y fecha, para hacer polling en lugar de push. La autenticación es HTTP Basic con el nombre de usuario vacío y la API key como contraseña — no un token Bearer.",
          },
        ],
      },
      {
        heading: "Cómo encargarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab construye exactamente este pipeline: leads de una sola fuente, clasificados y puntuados con IA según tu ICP y registrados en tu CRM, como paquete Lead Capture & Scoring ({{price:leadScoring}}, pago único). Conectar herramientas de outreach, llamadas o enriquecimiento con HubSpot o Attio es el paquete CRM Integration ({{price:crmIntegration}}, pago único). La mayoría de los proyectos tardan 1–3 semanas, y cada proyecto incluye documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué es el lead scoring con IA?",
        a: "Ordenar leads combinando señales de engagement (lo que hace un lead) con señales de encaje (lo bien que coincide con tu perfil de cliente ideal), con IA integrada en el CRM — como los lead scores con IA de HubSpot — o ejecutada fuera, clasificando respuestas y calculando una puntuación de encaje que se escribe de vuelta a través de la API.",
      },
      {
        q: "¿Qué requiere la herramienta de lead scoring de HubSpot?",
        a: "Marketing Hub o Sales Hub Professional o Enterprise. Los scores de contactos creados con IA requieren Marketing Hub Enterprise y al menos 50 contactos — 25 convertidos y 25 no convertidos — para generar una puntuación.",
      },
      {
        q: "¿Attio tiene lead scoring integrado?",
        a: "No hay motor de scoring ni tipo de campo de puntuación. Las puntuaciones viven en atributos de número o de selección, rellenados por workflows — incluidos pasos de agentes de IA, que Attio comercializa como Scoring Agent — o por una herramienta externa a través de la API.",
      },
      {
        q: "¿Cómo escribo una puntuación en HubSpot o Attio desde fuera?",
        a: "HubSpot: crea una propiedad de número personalizada y haz PATCH a /crm/v3/objects/contacts/{contactId}, o usa los endpoints de actualización y upsert por lotes. Attio: PATCH a /v2/objects/{object}/records/{record_id} con un token Bearer que tenga los scopes record_permission:read-write y object_configuration:read.",
      },
    ],
    sources: [
      { label: "HubSpot Knowledge Base — Overview of the lead scoring tool", url: "https://knowledge.hubspot.com/scoring/understand-the-lead-scoring-tool" },
      { label: "HubSpot Knowledge Base — Build lead scores to qualify contacts, companies, and deals", url: "https://knowledge.hubspot.com/scoring/build-lead-scores" },
      { label: "HubSpot Knowledge Base — Build contact lead scores with AI", url: "https://knowledge.hubspot.com/scoring/build-lead-scores-with-ai" },
      { label: "HubSpot Developers — Properties API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/properties/guide" },
      { label: "HubSpot Developers — Contacts API", url: "https://developers.hubspot.com/docs/api-reference/legacy/crm/objects/contacts/guide" },
      { label: "Attio Docs — Number attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-number" },
      { label: "Attio Docs — Select attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-select" },
      { label: "Attio Docs — Rating attributes", url: "https://docs.attio.com/rest-api/attribute-types/attribute-types-rating" },
      { label: "Attio Docs — Authenticating requests", url: "https://docs.attio.com/rest-api/guides/authentication" },
      { label: "Attio Docs — Update a record", url: "https://docs.attio.com/rest-api/endpoint-reference/records/update-a-record-append-multiselect-values" },
      { label: "Attio Docs — Webhooks", url: "https://docs.attio.com/rest-api/guides/webhooks" },
      { label: "Attio Help — Overview of workflows", url: "https://attio.com/help/reference/automations/workflows/overview-of-workflows" },
      { label: "Attio Help — Workflows block library", url: "https://attio.com/help/reference/automations/workflows/workflows-block-library" },
      { label: "Attio — MQL Scoring workflow template", url: "https://attio.com/templates/revenue-operations/mql-scoring" },
      { label: "Attio — Agents and automations", url: "https://attio.com/platform/automations" },
      { label: "lemlist Developer — Authentication", url: "https://developer.lemlist.com/api-reference/getting-started/authentication" },
      { label: "lemlist Developer — Add Webhook", url: "https://developer.lemlist.com/api-reference/endpoints/webhooks/add-webhook" },
      { label: "lemlist Developer — Get Many Activities", url: "https://developer.lemlist.com/api-reference/endpoints/activities/get-many-activities" },
    ],
    related: ["website-visitor-identification", "attio-workflows-automation", "attio-vs-hubspot-automation"],
    updated: "2026-11-12",
  },
  {
    key: "website-visitor-identification",
    slug: "identificacion-visitantes-web",
    category: "crm",
    navLabel: "Identificación de visitantes",
    primaryKeyword: "identificación de visitantes web",
    title: "Identificación de visitantes web: cómo funciona y límites",
    description:
      "Identificación de visitantes web: reverse IP y rastreadores, qué puede ver y qué no, RGPD y cookies, y el buyer intent de HubSpot.",
    h1: "Identificación de visitantes web: cómo funciona y sus límites",
    intro:
      "Las herramientas de identificación de visitantes asocian el tráfico anónimo de tu web a empresas, usando un script de seguimiento, reverse IP lookup y bases de datos de empresas. Identifican empresas, no personas, su cobertura depende de las redes desde las que navegan tus visitantes y, en la UE, caen de lleno dentro del RGPD y de las normas de consentimiento de cookies.",
    keyFacts: [
      "La identificación combina un script de seguimiento, cookies de rastreo, reverse IP lookup, bases de datos privadas y machine learning — asociando visitas a empresas, no a personas concretas.",
      "Leadfeeder, de Dealfront, se niega expresamente a publicar una tasa típica de identificación: la cobertura varía según la audiencia, y las visitas de ISP de consumo se filtran y no se muestran.",
      "Los trabajadores en remoto solo son identificables, en general, cuando navegan a través de la VPN de su empresa.",
      "El TJUE sostuvo en Breyer (C-582/14) que una dirección IP dinámica puede ser un dato personal para el operador de una web, y el considerando 30 del RGPD menciona las direcciones IP entre los identificadores en línea.",
      "El buyer intent de HubSpot asocia visitas a las direcciones IP de empresas conocidas; ver más de 20 empresas por vista requiere HubSpot Credits y una suscripción de pago.",
    ],
    sections: [
      {
        heading: "Cómo se identifican las empresas",
        blocks: [
          {
            type: "p",
            text: "El mecanismo, tal y como lo describe el centro de ayuda de Leadfeeder (Dealfront) para su propio rastreador: un script en tu web captura cada visita, y la identificación combina cookies de rastreo, reverse IP lookup, bases de datos privadas, datos de analítica y machine learning. Una empresa suele ser dueña de su dominio y de su rango de IP de oficina, así que una visita desde esa red puede asociarse a la empresa. La geolocalización por IP añade la región del visitante.",
          },
          {
            type: "p",
            text: "El tráfico que no puede asociarse a una empresa se queda fuera: Leadfeeder dice que no cobra por — ni siquiera muestra — las visitas de proveedores de internet de consumo. Lo que ves es la parte identificada de tu tráfico, no todo el tráfico.",
          },
        ],
      },
      {
        heading: "Lo que no puede ver",
        blocks: [
          {
            type: "ul",
            items: [
              "Personas concretas. Leadfeeder afirma que no es posible saber exactamente quién visitó la web sin que el visitante se identifique a sí mismo mediante un formulario o registro, y que identificar a visitantes individuales se considera ilegal en muchos países.",
              "La mayor parte del tráfico doméstico. Los trabajadores en remoto son identificables sobre todo cuando navegan por la VPN de la empresa; con una conexión de consumo aparecen como tráfico de ISP y se filtran.",
              "Un porcentaje garantizado. El propio centro de ayuda de Leadfeeder dice que no hay forma honesta de prometer una tasa de identificación, porque varía con la audiencia de cada web — y advierte de que los servicios que prometen un porcentaje fijo probablemente extrapolan a partir de unas pocas cuentas.",
            ],
          },
        ],
      },
      {
        heading: "RGPD y consentimiento de cookies",
        blocks: [
          {
            type: "p",
            text: "En la UE se aplican dos normas distintas. Primero, las direcciones IP pueden ser datos personales: el artículo 4, apartado 1 del RGPD define los datos personales incluyendo los identificadores en línea, el considerando 30 menciona entre ellos las direcciones de protocolo de internet y los identificadores de cookies, y el Tribunal de Justicia sostuvo en Breyer (C-582/14, resuelto bajo la directiva predecesora del RGPD) que una dirección IP dinámica constituye un dato personal para el operador de una web que dispone de medios legales para vincularla al visitante a través del proveedor de acceso.",
          },
          {
            type: "p",
            text: "Segundo, el artículo 5, apartado 3 de la Directiva ePrivacy exige consentimiento para almacenar información en el dispositivo del visitante o leerla de él — con excepciones estrechas para lo estrictamente necesario para prestar el servicio que el visitante pidió. Un rastreador de identificación de visitantes que coloca o lee cookies cae bajo esa norma con independencia de si los datos cuentan como personales, y por eso estas herramientas deben ir detrás de un banner de consentimiento de cookies en la UE.",
          },
          {
            type: "note",
            text: "Esto describe las normas a grandes rasgos. No es asesoramiento jurídico; cómo se aplican a tu caso depende de tus herramientas y de tu base jurídica.",
          },
        ],
      },
      {
        heading: "Identificación de visitantes en HubSpot",
        blocks: [
          {
            type: "p",
            text: "La función actual de HubSpot para esto es buyer intent. El código de seguimiento de HubSpot en tu web recoge datos del visitante, como la actividad en el sitio y las direcciones IP, y buyer intent conecta a los visitantes anónimos con las direcciones IP de empresas conocidas. Lo que HubSpot documenta, a fecha de octubre de 2026:",
          },
          {
            type: "ul",
            items: [
              "Aparece listado para las suscripciones Starter, Professional y Enterprise, con HubSpot Credits requeridos para ciertas funciones.",
              "Ver más de 20 empresas por vista requiere HubSpot Credits y una suscripción de pago; añadir empresas y rastrear sus señales de intención consumen créditos, mientras que los filtros y las exclusiones no.",
              "Los filtros de periodo de visita cubren como máximo los últimos 90 días, y las empresas añadidas desde buyer intent reciben la fuente de registro \"Buyer-Intent\".",
              "El propio artículo de HubSpot señala que cumplir las leyes de protección de datos puede requerir un banner de consentimiento de cookies en tu web.",
            ],
          },
        ],
      },
      {
        heading: "De empresa identificada a lead puntuado",
        blocks: [
          {
            type: "p",
            text: "La identificación por sí sola solo produce una lista. El valor está en lo que pasa después — un patrón habitual, descrito en pasos; muestra cómo encajan las piezas, no es un caso de estudio de TascaLab:",
          },
          {
            type: "ol",
            items: [
              "Identificar: el rastreador informa de qué empresas visitaron la web y qué miraron.",
              "Enriquecer: se consulta el tamaño, el sector y el país de cada empresa.",
              "Puntuar: la empresa se compara con tu perfil de cliente ideal y recibe una puntuación de encaje.",
              "Registrar: la empresa y su puntuación aterrizan en tu CRM — un registro de empresa en HubSpot o un registro en Attio.",
              "Resumir: un resumen programado, ordenado por puntuación, llega a email o Slack para que ventas vea primero las mejores cuentas.",
            ],
          },
        ],
      },
      {
        heading: "Cómo encargarlo",
        blocks: [
          {
            type: "p",
            text: "TascaLab construye esto como paquete Lead Capture & Scoring ({{price:leadScoring}}, pago único): leads de una sola fuente — visitantes de la web, un formulario o respuestas de outreach — clasificados y puntuados con IA y registrados en tu CRM, con avisos a email o Slack. Conectar las herramientas de alrededor con HubSpot o Attio es el paquete CRM Integration ({{price:crmIntegration}}, pago único). La mayoría de los proyectos tardan 1–3 semanas, y cada proyecto incluye documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada Health Check gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿La identificación de visitantes puede decirme quién visitó mi web?",
        a: "Identifica empresas, a través de sus redes — no personas. Los proveedores afirman que saber exactamente quién visitó requiere que el visitante se identifique mediante un formulario o registro, y que identificar a individuos se considera ilegal en muchos países.",
      },
      {
        q: "¿Qué parte de los visitantes se puede identificar?",
        a: "No hay un porcentaje fijo honesto. El centro de ayuda de Leadfeeder se niega a publicar uno, porque la cobertura depende de la audiencia de cada web; el tráfico de ISP de consumo se filtra por completo, y los trabajadores en remoto son identificables sobre todo cuando usan la VPN de la empresa.",
      },
      {
        q: "¿La identificación de visitantes por IP es legal bajo el RGPD?",
        a: "Las direcciones IP pueden ser datos personales (Breyer, C-582/14; considerando 30 del RGPD), y los rastreadores que colocan o leen cookies necesitan consentimiento según el artículo 5, apartado 3 de ePrivacy, por lo que estas herramientas deben ir detrás de un banner de consentimiento en la UE. Esto no es asesoramiento jurídico.",
      },
      {
        q: "¿Qué requiere el buyer intent de HubSpot?",
        a: "El código de seguimiento de HubSpot en tu web y una suscripción Starter, Professional o Enterprise. Ver más de 20 empresas por vista requiere HubSpot Credits, añadir empresas y rastrear señales de intención consumen créditos, y los filtros de visitas cubren como máximo los últimos 90 días.",
      },
    ],
    sources: [
      { label: "Leadfeeder (Dealfront) Help — How Does Web Visitors Identify Companies?", url: "https://help.leadfeeder.com/en/articles/3385515-how-does-leadfeeder-identify-leads" },
      { label: "EUR-Lex — Regulation (EU) 2016/679 (GDPR)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679" },
      { label: "CJEU — Press Release No 112/16, Judgment in Case C-582/14 Breyer", url: "https://curia.europa.eu/jcms/upload/docs/application/pdf/2016-10/cp160112en.pdf" },
      { label: "EUR-Lex — Consolidated Directive 2002/58/EC (ePrivacy), Article 5(3)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02002L0058-20091219" },
      { label: "HubSpot Knowledge Base — Use buyer intent data to identify companies ready to buy", url: "https://knowledge.hubspot.com/reports/use-buyer-intent" },
    ],
    related: ["ai-lead-scoring", "hubspot-zendesk-integration", "attio-workflows-automation"],
    updated: "2026-11-12",
  },
];
