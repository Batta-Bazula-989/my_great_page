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
];
