import type { TranslatedPage } from "../../types";

export const guidePages: TranslatedPage[] = [
  {
    key: "n8n-vs-make-vs-zapier",
    slug: "n8n-vs-make-vs-zapier-automatizacion-soporte",
    category: "guides",
    navLabel: "n8n vs Make vs Zapier",
    primaryKeyword: "n8n vs Make vs Zapier para automatizar el soporte",
    title: "n8n vs Make vs Zapier para automatizar el soporte (2026)",
    description:
      "n8n vs Make vs Zapier para automatizar el soporte: licencia y alojamiento, medición del uso, conectores de Zendesk, Freshdesk, Jira y Slack, webhooks y código.",
    h1: "n8n vs Make vs Zapier para automatizar el soporte",
    intro:
      "Las mayores diferencias entre n8n, Make y Zapier para el trabajo de soporte están en dónde se ejecutan y en cómo cuentan el uso. n8n se puede alojar en tus propios servidores bajo su Sustainable Use License o usar como n8n Cloud, mientras que Make y Zapier funcionan como servicios alojados. Los tres se conectan con Zendesk, Freshdesk, Jira y Slack, aceptan webhooks y tienen un paso de código, así que la elección suele depender de dónde deben estar los datos, del volumen y de cuánta lógica a medida necesitas.",
    keyFacts: [
      "El software autoalojado de n8n usa la Sustainable Use License, una licencia fair-code que n8n creó en 2022. n8n no se define como open source.",
      "A fecha de octubre de 2026, n8n cuenta ejecuciones (una ejecución de un workflow), Make cuenta créditos (las operaciones se convirtieron 1:1) y Zapier cuenta tareas (pasos de acción completados con éxito).",
      "Los triggers de Zapier y los pasos Filter y Paths no consumen tareas. Los módulos trigger de Make consumen 1 crédito por ejecución aunque no encuentren datos nuevos.",
      "Make te permite elegir un centro de datos en EE. UU. o en la UE al crear una organización. No se puede cambiar después.",
      "Los tres tienen un trigger de webhook y un paso de código que ejecuta JavaScript o Python.",
    ],
    sections: [
      {
        heading: "Comparativa lado a lado",
        blocks: [
          {
            type: "p",
            text: "La tabla resume lo que dice la documentación de cada proveedor, revisada en octubre de 2026. Los precios se han dejado fuera a propósito. Los planes cambian a menudo, así que consulta la página de precios vigente antes de decidir.",
          },
          {
            type: "table",
            caption: "n8n vs Make vs Zapier para automatizar el soporte (a fecha de octubre de 2026)",
            head: ["Característica", "n8n", "Make", "Zapier"],
            rows: [
              [
                "Dónde se ejecuta",
                "n8n Cloud (gestionado por n8n) o autoalojado en tu propia máquina o infraestructura",
                "En los centros de datos de Make. Eliges EE. UU. o la UE para cada organización",
                "En la nube gestionada de Zapier. No hay versión autoalojada ni on-premises",
              ],
              [
                "Licencia",
                "Sustainable Use License (fair-code) para el software autoalojado",
                "Servicio alojado sujeto a los términos de Make",
                "Servicio alojado sujeto a los términos de Zapier",
              ],
              [
                "Unidad de uso",
                "Ejecuciones: una ejecución es una ejecución de un workflow",
                "Créditos: la mayoría de los módulos consumen 1 crédito por operación",
                "Tareas: una tarea por cada paso de acción completado con éxito",
              ],
              [
                "Conectores de helpdesk",
                "Nodos de Zendesk (más Zendesk Trigger), Freshdesk, Jira Software y Slack",
                "Apps de Zendesk, Freshdesk, Jira Cloud Platform y Slack",
                "Apps de Zendesk, Freshdesk, Jira Service Management y Slack",
              ],
              [
                "Trigger de webhook",
                "Nodo Webhook con URL separadas de prueba y de producción",
                "Módulo Custom webhook en la app Webhooks",
                "Webhooks by Zapier: Catch Hook y Catch Raw Hook",
              ],
              [
                "Paso de código",
                "Nodo Code: JavaScript o Python",
                "App Make Code: JavaScript o Python",
                "Code by Zapier: JavaScript (Node.js 22) o Python 3.13",
              ],
            ],
          },
        ],
      },
      {
        heading: "Alojamiento y licencias",
        blocks: [
          {
            type: "p",
            text: "n8n te da dos opciones. n8n Cloud es una instancia gestionada que n8n opera por ti. Autoalojar significa ejecutar n8n en tu propia máquina o infraestructura. Para la mayoría de las instalaciones autoalojadas, la documentación recomienda Docker. Si no tienes experiencia gestionando servidores, recomienda n8n Cloud.",
          },
          {
            type: "p",
            text: "El software autoalojado está cubierto por la Sustainable Use License, una licencia fair-code que n8n creó en 2022. Puedes usar, modificar, crear obras derivadas y redistribuir el software, pero con límites. El uso se limita a fines empresariales internos o a usos no comerciales o personales, y solo puedes distribuirlo gratuitamente con fines no comerciales. La definición de la Open Source Initiative no permite limitar el uso, así que n8n no se define como open source. Los archivos con \".ee.\" en su nombre están cubiertos por una licencia aparte, la n8n Enterprise License.",
          },
          {
            type: "p",
            text: "Make ejecuta tus escenarios en sus propios centros de datos. Al crear una organización, eliges Estados Unidos o la Unión Europea. Ese ajuste decide dónde se almacenan y procesan tus datos, y no se puede cambiar después.",
          },
          {
            type: "p",
            text: "Zapier funciona en su propia nube gestionada. La comparativa de Zapier con n8n dice que Zapier no puede sustituir por completo a n8n en automatizaciones que, por motivos de cumplimiento normativo, deben ejecutarse en un entorno autoalojado, aislado (air-gapped) u on-premises.",
          },
          {
            type: "note",
            text: "Esto es un resumen de la licencia de n8n, no una interpretación. Si piensas integrar n8n en un producto que vendes, lee antes el texto completo de la licencia y las restricciones de uso.",
          },
        ],
      },
      {
        heading: "Cómo cuenta el uso cada herramienta (a fecha de octubre de 2026)",
        blocks: [
          {
            type: "p",
            text: "Los tres productos usan unidades de facturación distintas, así que no puedes comparar directamente los límites de sus planes. Así define cada proveedor su unidad.",
          },
          {
            type: "ul",
            items: [
              "Ejecuciones de n8n: n8n define una ejecución como una ejecución de un workflow. Los planes de pago, en la nube o autoalojados, tienen una cuota de ejecuciones, y solo cuentan para ella las ejecuciones de producción. Las ejecuciones manuales desde el editor no cuentan. Un Schedule Trigger cuenta cada vez que se activa. Cada solicitud de webhook entrante que inicia el workflow cuenta una vez.",
              "Créditos de Make: desde el 27 de agosto de 2025, Make factura en créditos, y las operaciones existentes se convirtieron 1:1. Una operación es una ejecución de un módulo que procesa o comprueba datos. La mayoría de las apps consumen 1 crédito por operación. Los módulos trigger consumen 1 crédito por ejecución, aunque no encuentren datos nuevos. Con el proveedor de IA propio de Make, las funciones de IA consumen créditos según las operaciones y los tokens. Si conectas tu propio proveedor de IA, los créditos cubren las operaciones y pagas los tokens a ese proveedor.",
              "Tareas de Zapier: Zapier cuenta una tarea cada vez que un paso de acción se ejecuta con éxito. Los triggers nunca consumen tareas, y tampoco los pasos Filter o Paths. Los pasos que dan error o se detienen no cuentan. Algunos productos, como los pasos de AI by Zapier, cuentan a una tasa mayor.",
            ],
          },
          {
            type: "p",
            text: "Estas unidades importan para un bot de soporte que se ejecuta con cada ticket nuevo o mensaje de chat. En n8n, un workflow largo sigue contando como una ejecución por cada ejecución. En Make, cada módulo que se ejecuta consume créditos. En Zapier, cada paso de acción completado con éxito es una tarea. En Make, un escenario que consulta tu helpdesk de forma programada consume créditos aunque no haya cambiado nada. Los triggers instantáneos basados en webhooks evitan pagar por esas comprobaciones vacías.",
          },
        ],
      },
      {
        heading: "Conectores de Zendesk, Freshdesk, Jira y Slack",
        blocks: [
          {
            type: "p",
            text: "Las tres herramientas tienen conectores listos para estos cuatro, pero los nombres y la profundidad varían. Antes de comprometerte, comprueba que existen exactamente el trigger y la acción que necesitas.",
          },
          {
            type: "ul",
            items: [
              "n8n: hay un nodo Zendesk con un nodo Zendesk Trigger aparte. El nodo Freshdesk cubre tickets y contactos. El nodo Jira Software cubre issues, comentarios y adjuntos. El nodo Slack cubre mensajes, canales, archivos y reacciones, y su operación \"Send and Wait for Response\" admite flujos de aprobación. Si un nodo no admite una operación, la documentación sugiere llamar a la API con el nodo HTTP Request, reutilizando la misma credencial.",
              "Make: la app de Zendesk incluye módulos que vigilan los tickets y la actividad de los tickets. Funcionan como triggers instantáneos mediante un webhook que creas en Zendesk. La app de Freshdesk cubre tickets, conversaciones, contactos y empresas, y también ofrece triggers instantáneos basados en webhooks. Make también incluye una app de Jira Cloud Platform y una app de Slack.",
              "Zapier: la app de Jira Service Management tiene triggers para solicitudes nuevas y actualizadas y una acción que crea solicitudes. Zapier ofrece Zaps listos que la conectan con Zendesk y Slack. La app de Freshdesk se conecta con Slack y Jira Software Cloud.",
            ],
          },
        ],
      },
      {
        heading: "Webhooks y pasos de código",
        blocks: [
          {
            type: "p",
            text: "Los webhooks permiten que un helpdesk o un canal de chat inicie una automatización en el momento en que ocurre algo. Los pasos de código cubren la lógica que los pasos integrados no pueden resolver, como transformar un payload o llamar a una API sin conector.",
          },
          {
            type: "ul",
            items: [
              "Nodo Webhook de n8n: cada nodo Webhook tiene dos URL, una Test URL y una Production URL. Puede responder de inmediato, cuando termina el último nodo o mediante un nodo Respond to Webhook aparte.",
              "App Webhooks de Make: el módulo Custom webhook crea una URL única para un escenario, y no se puede compartir el mismo webhook entre escenarios. Un módulo Webhook response controla lo que recibe quien hace la llamada. Sin él, la respuesta predeterminada es el texto \"Accepted\".",
              "Webhooks by Zapier: Catch Hook te da una URL única a la que la otra app envía solicitudes, y analiza el cuerpo de la solicitud. Catch Raw Hook devuelve el cuerpo sin analizar, junto con las cabeceras. Retrieve Poll funciona al revés y obtiene datos con una solicitud GET.",
              "Nodo Code de n8n: ejecuta JavaScript o Python, una vez para todos los elementos entrantes (la opción predeterminada) o una vez por cada elemento. En n8n Cloud, la opción de Python no puede importar librerías.",
              "App Make Code: el módulo Run code ejecuta JavaScript o Python e incluye algunas librerías integradas. La documentación de Make dice que importar tus propias librerías requiere un plan Enterprise.",
              "Code by Zapier: los pasos de código pueden ser triggers o acciones y admiten JavaScript (Node.js 22) y Python 3.13.",
            ],
          },
        ],
      },
      {
        heading: "Cuál encaja con tu equipo de soporte",
        blocks: [
          {
            type: "ul",
            items: [
              "Los datos de los tickets tienen que quedarse en infraestructura que tú controlas: n8n es la única de las tres que documenta una opción autoalojada.",
              "Quieres una herramienta alojada con almacenamiento de datos en la UE definido por organización: la opción de centro de datos en la UE de Make cubre esto.",
              "Tu equipo ya usa Zapier y tus flujos son cortos: los triggers y los filtros no consumen tareas, así que las notificaciones sencillas siguen siendo baratas.",
              "Tus workflows tienen muchos pasos y se ejecutan con cada ticket: compara las ejecuciones por ejecución de n8n con los créditos o tareas por paso a tu volumen real.",
            ],
          },
          {
            type: "p",
            text: "TascaLab crea automatizaciones de soporte sobre las herramientas que ya usas (Zendesk, Freshdesk, Jira, Slack y herramientas internas) con APIs, webhooks, Make y n8n. La mayoría de las implementaciones llevan de 1 a 3 semanas. Todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿n8n es open source?",
        a: "n8n distribuye su software bajo la Sustainable Use License, que define como fair-code. Como la licencia limita cómo se puede usar el software, n8n dice que no se define como open source.",
      },
      {
        q: "¿Puedo alojar Make o Zapier en mis propios servidores?",
        a: "Make ejecuta los escenarios en su propio centro de datos de EE. UU. o de la UE, que eliges al crear una organización. Zapier funciona en su nube gestionada y dice que no puede sustituir por completo a n8n cuando las automatizaciones deben ejecutarse en un entorno autoalojado u on-premises.",
      },
      {
        q: "¿Los triggers de Zapier consumen tareas?",
        a: "No. Zapier cuenta una tarea cada vez que un paso de acción se ejecuta con éxito. Los triggers y los pasos Filter y Paths no consumen tareas.",
      },
      {
        q: "¿Un trigger de Make consume créditos cuando no hay nada nuevo?",
        a: "Sí. El centro de ayuda de Make dice que los módulos trigger consumen 1 crédito por ejecución, aunque no encuentren datos nuevos. Los triggers instantáneos basados en webhooks evitan estas ejecuciones vacías.",
      },
      {
        q: "¿Qué cuenta como una ejecución en n8n?",
        a: "Una ejecución de un workflow. En los planes de pago, solo las ejecuciones de producción cuentan para la cuota. Las ejecuciones manuales desde el editor no cuentan.",
      },
    ],
    sources: [
      { label: "n8n Docs — Sustainable Use License", url: "https://docs.n8n.io/privacy-and-security/sustainable-use-license" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Executions", url: "https://docs.n8n.io/workflows/executions/" },
      { label: "n8n Docs — Integrations (Zendesk, Freshdesk, Jira Software, Slack and Webhook nodes)", url: "https://docs.n8n.io/integrations" },
      { label: "n8n Docs — Code node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code" },
      { label: "Make Help Center — Credits & operations", url: "https://help.make.com/credits-and-operations" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "Make Apps Documentation — Webhooks", url: "https://apps.make.com/gateway" },
      { label: "Make Apps Documentation — Make Code", url: "https://apps.make.com/code" },
      { label: "Make Apps Documentation — Zendesk", url: "https://apps.make.com/zendesk" },
      { label: "Make Apps Documentation — Freshdesk", url: "https://apps.make.com/freshdesk" },
      { label: "Make — Jira Cloud Platform and Slack integration", url: "https://www.make.com/en/integrations/jira/slack" },
      { label: "Zapier Help Center — How is task usage measured in Zapier?", url: "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier" },
      { label: "Zapier Help Center — Trigger Zap workflows from webhooks", url: "https://help.zapier.com/hc/en-us/articles/8496288690317-Trigger-Zaps-from-webhooks" },
      { label: "Zapier Help Center — Using Code by Zapier", url: "https://help.zapier.com/hc/en-us/articles/45405528551181-Using-Code-by-Zapier" },
      { label: "Zapier — Jira Service Management integrations", url: "https://zapier.com/apps/jira-service-management/integrations" },
      { label: "Zapier — Freshdesk integrations", url: "https://zapier.com/apps/freshdesk/integrations" },
      { label: "Zapier — Zapier vs. n8n comparison", url: "https://zapier.com/blog/n8n-vs-zapier/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "what-is-customer-support-automation"],
    updated: "2026-10-19",
  },
  {
    key: "eu-ai-act-chatbot-rules",
    slug: "reglamento-ia-ue-chatbots",
    category: "guides",
    navLabel: "Reglamento de IA y chatbots",
    primaryKeyword: "Reglamento de IA de la UE chatbots",
    title: "Reglamento de IA de la UE y chatbots: artículo 50 y fechas",
    description:
      "Reglamento de IA y chatbots: qué exige el artículo 50, quién es proveedor o responsable del despliegue, fechas clave y qué cambió el Ómnibus Digital de 2026.",
    h1: "Reglamento de IA de la UE y chatbots: qué exige el artículo 50 y desde cuándo",
    intro:
      "Según el Reglamento de IA de la UE (Reglamento (UE) 2024/1689), los proveedores deben diseñar los sistemas de IA que interactúan directamente con personas, como los chatbots, de forma que esas personas sepan que están interactuando con un sistema de IA, salvo que resulte evidente por el contexto. Esta obligación figura en el artículo 50 y se aplica desde el 2 de agosto de 2026. El Ómnibus Digital sobre IA de 2026 aplazó los plazos de alto riesgo, pero la Comisión sigue indicando el 2 de agosto de 2026 como fecha de aplicación del artículo 50.",
    keyFacts: [
      "Artículo 50(1): los proveedores deben garantizar que las personas sean informadas de que están interactuando con un sistema de IA, salvo que resulte evidente por el contexto.",
      "Artículo 50(5): la información debe facilitarse de manera clara y distinguible, a más tardar en la primera interacción.",
      "El Reglamento de IA entró en vigor el 1 de agosto de 2024. El artículo 50 se aplica desde el 2 de agosto de 2026.",
      "El Ómnibus Digital sobre IA (Reglamento (UE) 2026/1744) entró en vigor el 27 de julio de 2026. Aplazó los plazos de alto riesgo al 2 de diciembre de 2027 y al 2 de agosto de 2028.",
      "Incumplir el artículo 50 puede acarrear multas de hasta 15 millones de EUR o el 3% del volumen de negocios anual mundial, si esta cifra es superior.",
    ],
    sections: [
      {
        heading: "Qué exige el artículo 50 a los chatbots",
        blocks: [
          {
            type: "p",
            text: "El artículo 50(1) establece que los proveedores deben garantizar que los sistemas de IA destinados a interactuar directamente con personas físicas se diseñen y desarrollen de forma que las personas afectadas sean informadas de que están interactuando con un sistema de IA. La excepción se da cuando esto resulta evidente para una persona razonablemente bien informada, observadora y prudente, teniendo en cuenta las circunstancias y el contexto de uso. La obligación no se aplica a los sistemas de IA autorizados por ley para detectar, prevenir, investigar o enjuiciar delitos, con sujeción a las garantías adecuadas.",
          },
          {
            type: "p",
            text: "El artículo 50(5) regula cómo y cuándo hay que informar a las personas. La información debe facilitarse de manera clara y distinguible, a más tardar en el momento de la primera interacción o exposición, y debe cumplir los requisitos de accesibilidad aplicables.",
          },
          {
            type: "p",
            text: "El artículo 50 contiene también otras obligaciones de transparencia. Solo la primera de esta lista es específica de los chatbots:",
          },
          {
            type: "ul",
            items: [
              "Artículo 50(1): los proveedores de sistemas que interactúan directamente con personas deben diseñarlos para que esas personas sepan que están tratando con una IA.",
              "Artículo 50(2): los proveedores de sistemas que generan audio, imagen, vídeo o texto sintéticos deben marcar los resultados en un formato legible por máquina para que puedan detectarse como generados por IA.",
              "Artículo 50(3): los responsables del despliegue de sistemas de reconocimiento de emociones o de categorización biométrica deben informar a las personas expuestas a ellos.",
              "Artículo 50(4): los responsables del despliegue deben revelar las ultrasuplantaciones (deepfakes) y el texto generado por IA que se publique para informar al público sobre asuntos de interés público. En el caso de ese texto, la obligación no se aplica cuando ha pasado por una revisión humana y alguien asume la responsabilidad editorial.",
            ],
          },
        ],
      },
      {
        heading: "Proveedor o responsable del despliegue: a quién corresponde la obligación",
        blocks: [
          {
            type: "p",
            text: "El artículo 3(3) define al proveedor como la persona u organismo que desarrolla un sistema de IA, o para quien se desarrolla, y lo introduce en el mercado o lo pone en servicio con su propio nombre o marca, ya sea a cambio de una remuneración o de forma gratuita. El artículo 3(4) define al responsable del despliegue como cualquiera que utilice un sistema de IA bajo su propia autoridad, salvo cuando se trate de un uso personal no profesional.",
          },
          {
            type: "p",
            text: "La información sobre el chatbot del artículo 50(1) es una obligación del proveedor. Las obligaciones de etiquetado de los artículos 50(3) y 50(4) corresponden al responsable del despliegue. Si tu empresa crea un asistente de soporte y lo opera con su propia marca, lee con atención ambas definiciones y contrástalas con cómo se ha construido el sistema y con quién lo pone delante de los clientes.",
          },
        ],
      },
      {
        heading: "Cómo se aplica la obligación de información a la automatización del soporte",
        blocks: [
          {
            type: "p",
            text: "Las preguntas frecuentes (FAQ) de la Comisión sobre el artículo 50 indican que sus directrices fijan cuatro criterios acumulativos para la obligación de interacción: el sistema es un sistema de IA, está diseñado para un intercambio bidireccional real, se comunica directamente y no a través de un intermediario humano, e interactúa con personas físicas. Las FAQ señalan que los sistemas que solo funcionan en segundo plano, mediante comunicación entre máquinas o sin contacto directo con personas, quedan fuera de esta obligación. También indican que la excepción de lo \"evidente\" debe interpretarse de forma restrictiva.",
          },
          {
            type: "table",
            caption: "Preguntas sobre configuraciones de soporte habituales, según los criterios de la Comisión",
            head: ["Configuración", "Qué comprobar frente a los criterios"],
            rows: [
              [
                "Chatbot de IA en tu web, WhatsApp o Messenger",
                "¿Intercambia mensajes directamente con los clientes? Si es así, prevé un aviso en el primer mensaje o antes.",
              ],
              [
                "Bot de voz con IA que atiende llamadas",
                "La misma pregunta para las conversaciones habladas. El artículo 50(5) también menciona los requisitos de accesibilidad.",
              ],
              [
                "IA que clasifica y enruta tickets",
                "¿Funciona solo en segundo plano, sin contacto directo con los clientes? Las FAQ sitúan estos sistemas fuera de la obligación de interacción.",
              ],
              [
                "IA que redacta respuestas que un agente revisa y envía",
                "¿Se comunica directamente con el cliente o a través de un intermediario humano? Compruébalo frente a las directrices.",
              ],
            ],
          },
          {
            type: "p",
            text: "En la práctica, muchos equipos empiezan cada conversación con IA con una línea breve como \"Estás hablando con un asistente de IA. Escribe 'agente' para hablar con una persona.\" Hacerlo es una decisión de diseño. Si basta o no para tu sistema es una cuestión que deben resolver las directrices y tu asesor.",
          },
        ],
      },
      {
        heading: "Fechas clave, incluido el Ómnibus Digital de 2026",
        blocks: [
          {
            type: "p",
            text: "El artículo 113 fija el calendario del Reglamento de IA. En noviembre de 2025, la Comisión propuso modificar parte de él en un Ómnibus Digital sobre IA (COM(2025) 836, de 19 de noviembre de 2025). Esa propuesta ya se ha adoptado: tras un acuerdo político el 7 de mayo de 2026 y su adopción formal, se publicó como Reglamento (UE) 2026/1744. La Comisión indica que entró en vigor el 27 de julio de 2026. La tabla muestra las fechas adoptadas.",
          },
          {
            type: "table",
            caption: "Fechas de aplicación del Reglamento de IA de la UE (textos oficiales revisados el 19 de octubre de 2026)",
            head: ["Fecha", "Qué se aplica", "Base jurídica"],
            rows: [
              ["1 de agosto de 2024", "Entra en vigor el Reglamento de IA", "Artículo 113, Reglamento (UE) 2024/1689"],
              ["2 de febrero de 2025", "Se aplican los capítulos I y II, incluidas la alfabetización en materia de IA y las prácticas prohibidas", "Artículo 113(a)"],
              ["2 de agosto de 2025", "Se aplican las normas sobre organismos notificados, modelos de IA de uso general, gobernanza y sanciones (salvo el artículo 101)", "Artículo 113(b)"],
              ["2 de agosto de 2026", "Aplicación general, incluidas las obligaciones de transparencia del artículo 50", "Artículo 113; FAQ de la Comisión sobre el artículo 50"],
              ["2 de diciembre de 2026", "Plazo para el marcado del artículo 50(2) en los sistemas de IA generativa introducidos en el mercado antes del 2 de agosto de 2026; nueva prohibición de la IA que genera contenido íntimo no consentido o material de abuso sexual infantil", "Reglamento (UE) 2026/1744 (adoptado)"],
              ["2 de diciembre de 2027", "Normas de alto riesgo para los sistemas clasificados con arreglo al artículo 6(2) y al anexo III", "Reglamento (UE) 2026/1744 (adoptado)"],
              ["2 de agosto de 2028", "Normas de alto riesgo para los sistemas clasificados con arreglo al artículo 6(1) y al anexo I (productos)", "Reglamento (UE) 2026/1744 (adoptado); sustituye la fecha original del 2 de agosto de 2027"],
            ],
          },
          {
            type: "p",
            text: "Una diferencia entre la propuesta y el texto adoptado afecta a la IA generativa. La propuesta de la Comisión habría dado a los proveedores de sistemas generativos ya comercializados un periodo de gracia de seis meses para el marcado del artículo 50(2). El reglamento adoptado fija el plazo en el 2 de diciembre de 2026. Según las FAQ de la Comisión, la obligación de información sobre chatbots del artículo 50(1) se sigue aplicando desde el 2 de agosto de 2026.",
          },
        ],
      },
      {
        heading: "Sanciones y orientaciones oficiales",
        blocks: [
          {
            type: "p",
            text: "Según el artículo 99(4), incumplir las obligaciones del artículo 50 puede acarrear multas administrativas de hasta 15.000.000 EUR o, si el infractor es una empresa, de hasta el 3% de su volumen de negocios mundial total correspondiente al ejercicio financiero anterior, si esta cifra es superior. Para las pymes, incluidas las empresas emergentes, el artículo 99 aplica el menor de los dos importes.",
          },
          {
            type: "p",
            text: "El 20 de julio de 2026, la Comisión publicó directrices sobre las obligaciones de transparencia del artículo 50. Un código de buenas prácticas voluntario y separado sobre la transparencia del contenido generado por IA (Code of Practice on Transparency of AI-generated Content) cubre los apartados 2, 4 y 5 del artículo 50. La Comisión afirma que no firmarlo no implica incumplimiento. Para la obligación sobre chatbots del artículo 50(1), las FAQ indican que los proveedores y los responsables del despliegue pueden decidir por sí mismos las medidas adecuadas, teniendo en cuenta las directrices.",
          },
          {
            type: "note",
            text: "Esto no es asesoramiento jurídico. Esta página describe lo que dicen el Reglamento de IA, el Ómnibus Digital y las orientaciones de la Comisión a fecha de 19 de octubre de 2026. Para tomar decisiones sobre tus propios sistemas, lee los textos oficiales en EUR-Lex y consulta con un abogado cualificado.",
          },
        ],
      },
      {
        heading: "Cómo incluir el aviso en un bot de soporte",
        blocks: [
          {
            type: "ul",
            items: [
              "Pon el aviso de IA en el primer mensaje o en el saludo de voz, no solo en tus condiciones de servicio.",
              "Haz que el aviso sea legible por lectores de pantalla y claro en voz, ya que el artículo 50(5) menciona la accesibilidad.",
              "Da a los clientes una forma visible de llegar a una persona y transmite el historial de la conversación para que no tengan que repetirse.",
              "Guarda un registro del texto del aviso y de cuándo lo cambiaste, para poder demostrar lo que vieron los clientes.",
            ],
          },
          {
            type: "p",
            text: "TascaLab crea bots de chat y de voz sobre las herramientas que ya usas (Zendesk, Freshdesk, Jira, Slack y herramientas internas). Los proyectos Standard Chat Bot cuestan de 500 a 650 USD y los proyectos Voice Bot, de 1.100 a 1.600 USD. Ambos incluyen documentación básica y 30 días de soporte tras el lanzamiento.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Tengo que decir a los clientes que están hablando con un chatbot?",
        a: "El artículo 50(1) del Reglamento de IA exige a los proveedores diseñar los sistemas de IA que interactúan directamente con personas de forma que esas personas sean informadas de que están interactuando con un sistema de IA, salvo que resulte evidente por el contexto. La Comisión indica que la excepción de lo \"evidente\" debe interpretarse de forma restrictiva.",
      },
      {
        q: "¿Desde cuándo se aplican las normas del Reglamento de IA de la UE sobre chatbots?",
        a: "El artículo 50 se aplica desde el 2 de agosto de 2026. Las FAQ de la Comisión dan un periodo de gracia hasta el 2 de diciembre de 2026 solo para el marcado del artículo 50(2) en sistemas generativos ya comercializados.",
      },
      {
        q: "¿El Ómnibus Digital ha retrasado el Reglamento de IA?",
        a: "En parte. El Reglamento (UE) 2026/1744, en vigor desde el 27 de julio de 2026 según la Comisión, aplazó las obligaciones de alto riesgo al 2 de diciembre de 2027 (anexo III) y al 2 de agosto de 2028 (productos del anexo I). No modificó la fecha del 2 de agosto de 2026 para el artículo 50.",
      },
      {
        q: "¿Un enrutador de tickets con IA necesita un aviso de IA?",
        a: "Las FAQ de la Comisión indican que los sistemas que solo funcionan en segundo plano, mediante comunicación entre máquinas o sin contacto directo con personas, quedan fuera de la obligación de interacción del artículo 50(1). Contrasta tu propia configuración con las directrices de la Comisión.",
      },
      {
        q: "¿Qué multas hay por incumplir el artículo 50?",
        a: "Según el artículo 99(4), hasta 15 millones de EUR o el 3% del volumen de negocios mundial total anual, si esta cifra es superior. Para las pymes, incluidas las empresas emergentes, se aplica el menor de los dos importes.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2024/1689 (Artificial Intelligence Act)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" },
      { label: "AI Act Service Desk — Article 50: Transparency obligations", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50" },
      { label: "AI Act Service Desk — Article 99: Penalties", url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99" },
      { label: "European Commission — Transparency obligations under Article 50 of the AI Act (FAQ)", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act" },
      { label: "European Commission — Guidelines on transparency obligations published (20 July 2026)", url: "https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems" },
      { label: "EUR-Lex — Proposal COM(2025) 836, Digital Omnibus on AI", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0836" },
      { label: "EUR-Lex — Regulation (EU) 2026/1744 (Digital Omnibus on AI)", url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng" },
      { label: "European Commission — AI Omnibus enters into force", url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force" },
    ],
    related: ["ai-chatbot-for-customer-support", "gdpr-customer-support-automation", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "gdpr-customer-support-automation",
    slug: "rgpd-automatizacion-atencion-al-cliente",
    category: "guides",
    navLabel: "RGPD y automatización del soporte",
    primaryKeyword: "RGPD y automatización de la atención al cliente",
    title: "RGPD y automatización de atención al cliente: guía práctica",
    description:
      "RGPD y automatización de la atención al cliente: bases jurídicas, minimización de datos, conservación y contratos con encargados en chatbots y helpdesks.",
    h1: "RGPD y automatización de la atención al cliente: guía práctica",
    intro:
      "El RGPD se aplica a la automatización del soporte como a cualquier otro tratamiento de datos personales. Necesitas una base jurídica conforme al artículo 6, tratas solo lo que necesitas (artículo 5(1)(c)) y lo conservas solo mientras lo necesitas (artículo 5(1)(e)), y los proveedores que tratan datos por cuenta tuya necesitan un contrato conforme al artículo 28. En los chatbots y los flujos del helpdesk, casi todo se reduce a decisiones de diseño: qué campos envías, adónde van y cuánto tiempo se conservan los registros.",
    keyFacts: [
      "Artículo 5(1)(c): los datos personales deben ser adecuados, pertinentes y limitados a lo necesario en relación con los fines.",
      "El artículo 6(1) enumera seis bases jurídicas. El Tribunal de Justicia de la UE considera que la lista es exhaustiva.",
      "El artículo 28(3) exige un contrato vinculante con cada encargado del tratamiento, que establezca, entre otras cosas, que solo actúa siguiendo tus instrucciones documentadas.",
      "El CEPD afirma que comprobar que un encargado ofrece garantías suficientes es una obligación continua, no algo que se hace una sola vez.",
      "Make te permite elegir un centro de datos en EE. UU. o en la UE al crear una organización. No se puede cambiar después.",
    ],
    sections: [
      {
        heading: "Dónde aparecen datos personales en la automatización del soporte",
        blocks: [
          {
            type: "p",
            text: "Una automatización de soporte toca datos personales en varios puntos, a menudo más de los que el equipo cree. Identificarlos es el primer paso práctico, porque en cada uno entran en juego la minimización de datos, la conservación y los contratos con proveedores.",
          },
          {
            type: "ul",
            items: [
              "Transcripciones de chats y correos: nombres, correos electrónicos, números de teléfono, números de pedido y cualquier otra cosa que escriban los clientes.",
              "Campos y adjuntos de los tickets del helpdesk que una automatización lee o copia a otra herramienta.",
              "Prompts y respuestas enviados a un modelo de IA, si tu bot usa uno.",
              "Registros de ejecución de tu plataforma de automatización, que pueden guardar los datos que recibió cada paso.",
              "Notificaciones publicadas en Slack u otras herramientas internas.",
            ],
          },
        ],
      },
      {
        heading: "Los artículos del RGPD que más importan para un bot de soporte",
        blocks: [
          {
            type: "table",
            caption: "Artículos del RGPD y su impacto práctico en la automatización del soporte",
            head: ["Artículo", "Qué dice el texto", "Qué significa para un bot de soporte"],
            rows: [
              [
                "Art. 5(1)(c): minimización de datos",
                "Los datos personales serán adecuados, pertinentes y limitados a lo necesario en relación con los fines.",
                "Envía a cada paso solo los campos que necesita. Ocultar los identificadores antes de que el texto llegue a un modelo de IA es una forma de hacerlo.",
              ],
              [
                "Art. 5(1)(e): limitación del plazo de conservación",
                "Los datos se mantienen de forma que permita identificar a las personas durante no más tiempo del necesario para los fines, con excepciones para archivo, investigación y estadística sujetas a las garantías del artículo 89(1).",
                "Fija plazos de conservación para los registros de chat, las exportaciones de tickets y los registros de ejecución de las automatizaciones.",
              ],
              [
                "Art. 6(1): licitud",
                "El tratamiento solo es lícito si se cumple al menos una de seis bases: consentimiento, contrato, obligación legal, intereses vitales, misión de interés público o intereses legítimos.",
                "Documenta qué base cubre cada finalidad, por ejemplo responder a una solicitud frente a analizar transcripciones.",
              ],
              [
                "Art. 28: encargados del tratamiento",
                "Recurre solo a encargados que ofrezcan garantías suficientes, mediante un contrato vinculante que establezca el tratamiento y les obligue a actuar siguiendo tus instrucciones documentadas.",
                "Ten un contrato con cada proveedor de la cadena: helpdesk, plataforma de automatización, proveedor de IA y alojamiento.",
              ],
            ],
          },
        ],
      },
      {
        heading: "Base jurídica: decide por finalidad",
        blocks: [
          {
            type: "p",
            text: "El artículo 6(1) enumera seis bases jurídicas: consentimiento, contrato, obligación legal, intereses vitales, misión de interés público e intereses legítimos. El Tribunal de Justicia de la UE ha descrito esta lista como exhaustiva y taxativa, así que el tratamiento tiene que encajar en al menos una de ellas.",
          },
          {
            type: "p",
            text: "En el trabajo de soporte hay dos bases que aparecen con más frecuencia. La base contractual cubre el tratamiento necesario para ejecutar un contrato con la persona o para aplicar medidas que ella haya solicitado antes de celebrarlo. En el asunto C-621/22, el Tribunal de Justicia señaló que el interés legítimo exige tres condiciones acumulativas: que el responsable del tratamiento o un tercero persiga un interés legítimo, que el tratamiento sea necesario para ese interés y que no prevalezcan sobre él los intereses o derechos fundamentales de la persona. Las autoridades públicas no pueden basarse en el interés legítimo para el tratamiento que realicen en el ejercicio de sus funciones.",
          },
          {
            type: "p",
            text: "En la práctica, enumera cada finalidad por separado. Responder a la pregunta del cliente, formar al personal con transcripciones antiguas y elaborar informes son finalidades distintas, y cada una necesita su propia base.",
          },
        ],
      },
      {
        heading: "Encargados del tratamiento y contratos del artículo 28",
        blocks: [
          {
            type: "p",
            text: "Según el artículo 28(1), solo puedes recurrir a encargados que ofrezcan garantías suficientes para aplicar medidas técnicas y organizativas apropiadas. El artículo 28(3) exige un contrato u otro acto jurídico que establezca el objeto, la duración, la naturaleza y la finalidad del tratamiento, el tipo de datos personales y las categorías de interesados. También debe indicar que el encargado solo actúa siguiendo tus instrucciones documentadas, incluidas las relativas a las transferencias de datos personales a un tercer país. Según el artículo 28(4), un encargado que recurra a un subencargado debe trasladarle por contrato las mismas obligaciones de protección de datos, y el encargado inicial sigue siendo plenamente responsable ante ti.",
          },
          {
            type: "ul",
            items: [
              "Directrices 07/2020 del CEPD: verificar las garantías de un encargado es una obligación continua, con auditorías e inspecciones cuando proceda. Las instrucciones pueden figurar en un anexo al contrato o en otra forma escrita, como un correo electrónico, siempre que conserves constancia. Una lista general de subencargados que pueda actualizarse de vez en cuando no es suficiente. El encargado debe informarte activamente de los cambios.",
              "Dictamen 22/2024 del CEPD: la obligación de comprobar que los encargados y subencargados ofrecen garantías suficientes se aplica sea cual sea el nivel de riesgo, aunque la profundidad de las comprobaciones puede variar. La decisión final sobre el uso de un subencargado concreto, y la responsabilidad por ello, sigue recayendo en el responsable del tratamiento.",
            ],
          },
          {
            type: "p",
            text: "Una cadena de soporte típica puede incluir un helpdesk, una plataforma de automatización, un proveedor de modelos de IA y una herramienta de chat. Anota qué proveedores tratan datos personales por cuenta tuya, revisa las condiciones de tratamiento de datos y la lista de subencargados de cada uno, y archívalas.",
          },
        ],
      },
      {
        heading: "Alojamiento, ubicación de los datos y ajustes de conservación",
        blocks: [
          {
            type: "p",
            text: "Dónde se ejecuta tu automatización decide dónde se almacenan sus datos. Make ofrece dos ubicaciones de centro de datos, Estados Unidos y la Unión Europea. Eliges una al crear una organización, no se puede cambiar después y decide dónde se almacenan y procesan tus datos. Si alojas n8n en tus propios servidores, sus ajustes de ejecución controlan cuántos datos de ejecución se conservan. El valor predeterminado documentado es un máximo de 10.000 ejecuciones almacenadas, y 0 significa sin límite.",
          },
          {
            type: "p",
            text: "Como el artículo 28(3) abarca las instrucciones sobre transferencias a terceros países, comprueba en las condiciones de cada proveedor dónde se tratan los datos. Configura la conservación en todas las herramientas que guarden una copia de los datos, no solo en tu helpdesk.",
          },
        ],
      },
      {
        heading: "Decisiones de diseño prácticas para una automatización conforme al RGPD",
        blocks: [
          {
            type: "ul",
            items: [
              "Pasa los ID de ticket y los campos que necesita cada paso en lugar de fichas de cliente completas.",
              "Enmascara correos, números de teléfono y datos de pago antes de que el texto llegue a un modelo de IA. El texto anonimizado parcialmente puede seguir conteniendo datos personales, así que trátalo con el mismo cuidado.",
              "Depura los registros de ejecución de las automatizaciones y desactiva el registro completo del payload donde no lo necesites.",
              "Diseña una forma de encontrar, exportar o eliminar los datos de un cliente en el bot, el helpdesk y los registros, para que las solicitudes individuales no requieran una búsqueda manual.",
              "Envía los casos delicados o de gran impacto a un agente humano en lugar de dejar que decida el bot.",
              "Recuerda que los chatbots también están sujetos a las normas de transparencia, independientes, del Reglamento de IA de la UE.",
            ],
          },
          {
            type: "note",
            text: "Esto no es asesoramiento jurídico. Esta página describe lo que dicen el texto del RGPD y las orientaciones del CEPD, además de prácticas de ingeniería habituales. Para tomar decisiones sobre tus propios tratamientos, consulta con tu delegado de protección de datos o con un abogado cualificado.",
          },
          {
            type: "p",
            text: "TascaLab crea automatizaciones sobre Zendesk, Freshdesk, Jira, Slack y herramientas internas, usando APIs, webhooks, Make y n8n. Todos los proyectos incluyen documentación básica de lo que se ha construido, que ayuda a la hora de mapear los flujos de datos, además de 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué base jurídica del RGPD cubre un chatbot de soporte?",
        a: "El RGPD no asigna ninguna. El artículo 6(1) enumera seis bases, entre ellas el contrato y el interés legítimo, y tú eliges y documentas la que encaja con cada finalidad. El Tribunal de Justicia de la UE considera que la lista es exhaustiva.",
      },
      {
        q: "¿Necesito un contrato de encargo del tratamiento con mi plataforma de automatización?",
        a: "El artículo 28(3) exige que el tratamiento por parte de un encargado se rija por un contrato u otro acto jurídico que regule, entre otras cosas, el objeto, la duración, la naturaleza y la finalidad del tratamiento. Si un proveedor trata datos personales por cuenta tuya, comprueba que existen esas condiciones.",
      },
      {
        q: "¿Puedo enviar los mensajes de los clientes a un modelo de IA?",
        a: "Se aplican los mismos principios del RGPD que a cualquier otro tratamiento: una base jurídica, la minimización de datos y un contrato de encargo cuando el proveedor trata datos por cuenta tuya. Ocultar los identificadores antes de enviar el texto es una forma práctica de reducir lo que compartes.",
      },
      {
        q: "¿Cuánto tiempo puedo conservar las transcripciones de chat?",
        a: "El artículo 5(1)(e) dice que los datos personales deben mantenerse de forma que permita identificar a las personas durante no más tiempo del necesario para los fines. El texto no fija un número de días concreto, así que tú defines un plazo de conservación para cada finalidad.",
      },
      {
        q: "¿Dónde almacena Make mis datos?",
        a: "Make tiene centros de datos en EE. UU. y en la UE. Eliges uno al crear una organización, y no se puede cambiar después.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Regulation (EU) 2016/679 (General Data Protection Regulation)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679" },
      { label: "GDPR-Info — Art. 6 GDPR: Lawfulness of processing", url: "https://gdpr-info.eu/art-6-gdpr/" },
      { label: "GDPR-Info — Art. 28 GDPR: Processor", url: "https://gdpr-info.eu/art-28-gdpr/" },
      { label: "EUR-Lex — Court of Justice judgment in Case C-621/22 (legitimate interests)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A62022CJ0621" },
      { label: "EDPB — Guidelines 07/2020 on the concepts of controller and processor", url: "https://edpb.europa.eu/system/files/2023-10/EDPB_guidelines_202007_controllerprocessor_final_en.pdf" },
      { label: "EDPB — Opinion 22/2024 on reliance on processors and sub-processors", url: "https://www.edpb.europa.eu/system/files/2024-10/edpb_opinion_202422_relianceonprocessors-sub-processors_en.pdf" },
      { label: "Make Help Center — Organizations (data center location)", url: "https://help.make.com/organizations" },
      { label: "n8n Docs — Executions environment variables", url: "https://docs.n8n.io/hosting/configuration/environment-variables/executions/" },
    ],
    related: ["eu-ai-act-chatbot-rules", "ai-chatbot-for-customer-support", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
  {
    key: "european-accessibility-act-customer-service",
    slug: "acta-europea-accesibilidad-atencion-al-cliente",
    category: "guides",
    navLabel: "Acta Europea de Accesibilidad",
    primaryKeyword: "Acta Europea de Accesibilidad atención al cliente",
    title: "Acta Europea de Accesibilidad y atención al cliente",
    description:
      "Acta Europea de Accesibilidad y atención al cliente: qué servicios incluye, fechas clave, la exención de las microempresas y qué exige el anexo I al soporte.",
    h1: "Acta Europea de Accesibilidad y atención al cliente: lo que deben saber los equipos de soporte",
    intro:
      "El Acta Europea de Accesibilidad (Directiva (UE) 2019/882) se aplica desde el 28 de junio de 2025 a una lista de servicios a consumidores que incluye el comercio electrónico, los servicios bancarios para consumidores, los libros electrónicos y las comunicaciones electrónicas. Para los servicios incluidos, el anexo I exige que los sitios web y las aplicaciones móviles sean accesibles y que los servicios de apoyo, como los servicios de asistencia (help desks) y los centros de llamadas, cuando existan, informen sobre la accesibilidad del servicio mediante modos de comunicación accesibles. Las microempresas que prestan servicios están exentas.",
    keyFacts: [
      "Artículo 31: los Estados miembros debían adoptar sus leyes nacionales a más tardar el 28 de junio de 2022 y aplicarlas a partir del 28 de junio de 2025.",
      "El artículo 2(2) abarca servicios a consumidores como las comunicaciones electrónicas, los servicios bancarios para consumidores, los libros electrónicos y el comercio electrónico.",
      "El artículo 4(5) exime a las microempresas que prestan servicios; el artículo 3(23) las define como empresas con menos de 10 personas y un volumen de negocios o un balance general de 2 millones de EUR o menos.",
      "Anexo I, sección III: cuando estén disponibles, los servicios de apoyo deben informar sobre la accesibilidad del servicio mediante modos de comunicación accesibles.",
      "La norma EN 301 549 V4.1.1 se adoptó en agosto de 2026, pero AccessibleEU indica que todavía no es la referencia jurídica para el cumplimiento del Acta Europea de Accesibilidad.",
    ],
    sections: [
      {
        heading: "Qué servicios cubre el Acta Europea de Accesibilidad",
        blocks: [
          {
            type: "p",
            text: "La Directiva (UE) 2019/882, conocida como Acta Europea de Accesibilidad o EAA (European Accessibility Act), establece requisitos de accesibilidad para una lista de productos en el artículo 2(1) y una lista de servicios en el artículo 2(2). Esta página se centra en los servicios, porque es ahí donde se encuadra la atención al cliente. El artículo 2(2) se aplica a los siguientes servicios prestados a consumidores después del 28 de junio de 2025.",
          },
          {
            type: "table",
            caption: "Servicios enumerados en el artículo 2(2) de la Directiva (UE) 2019/882",
            head: ["Artículo 2(2)", "Servicio", "Puntos de contacto de soporte que conviene revisar"],
            rows: [
              ["(a)", "Servicios de comunicaciones electrónicas, salvo los servicios de transmisión utilizados para servicios máquina a máquina", "Páginas de ayuda, chat en directo y opciones de contacto para los abonados"],
              ["(b)", "Servicios que dan acceso a servicios de comunicación audiovisual", "Ayuda dentro de la app y chat de soporte"],
              ["(c)", "Determinados elementos de los servicios de transporte de viajeros aéreo, por autobús, ferroviario y por vías navegables", "Ayuda con las reservas, información de viaje y chat en la web o la app"],
              ["(d)", "Servicios bancarios para consumidores", "Bots de chat y de voz que responden preguntas sobre cuentas o tarjetas"],
              ["(e)", "Libros electrónicos y programas informáticos específicos", "Servicio de asistencia para apps de lectura y compras"],
              ["(f)", "Servicios de comercio electrónico", "Widget de chat en la tienda, bot de estado de pedidos, flujo de devoluciones"],
            ],
          },
          {
            type: "p",
            text: "La directiva define los servicios de comercio electrónico como servicios prestados a distancia, a través de sitios web y servicios basados en dispositivos móviles, por vía electrónica y a petición individual de un consumidor con vistas a celebrar un contrato de consumo. Los considerandos de la directiva añaden que las obligaciones de comercio electrónico abarcan la venta en línea de cualquier producto o servicio. La tercera columna de la tabla es una sugerencia de lista de comprobación, no una afirmación de lo que la ley exige a tu empresa.",
          },
        ],
      },
      {
        heading: "Fechas clave y periodos transitorios",
        blocks: [
          {
            type: "p",
            text: "El Acta Europea de Accesibilidad es una directiva, así que llega a las empresas a través de las leyes nacionales. El artículo 31 obligaba a los Estados miembros a adoptar y publicar esas leyes a más tardar el 28 de junio de 2022 y a aplicarlas a partir del 28 de junio de 2025. El artículo 32 añade algunos periodos transitorios.",
          },
          {
            type: "table",
            caption: "Fechas del Acta Europea de Accesibilidad para los servicios (Directiva (UE) 2019/882)",
            head: ["Fecha", "Qué significa", "Artículo"],
            rows: [
              ["28 de junio de 2022", "Plazo para que los Estados miembros adopten y publiquen las leyes nacionales que transponen la directiva", "Artículo 31"],
              ["28 de junio de 2025", "Se aplican las medidas nacionales. El artículo 2(2) abarca los servicios prestados a consumidores después de esta fecha", "Artículos 2(2) y 31"],
              ["Hasta 5 años desde el 28 de junio de 2025", "Los contratos de servicios celebrados antes del 28 de junio de 2025 pueden seguir sin modificaciones hasta su vencimiento", "Artículo 32"],
              ["28 de junio de 2030", "Fin del periodo en el que los prestadores de servicios pueden seguir prestando servicios con productos que ya utilizaban legalmente para servicios similares", "Artículo 32"],
              ["Hasta 20 años en servicio", "Los Estados miembros pueden permitir que los terminales de autoservicio utilizados antes del 28 de junio de 2025 sigan funcionando hasta el final de su vida útil, pero no más de 20 años después de su entrada en servicio", "Artículo 32"],
            ],
          },
          {
            type: "p",
            text: "Como cada Estado miembro redacta su propia ley, los textos nacionales y las autoridades que los aplican varían de un país a otro. La Comisión indica que supervisa la transposición completa y correcta del Acta. Si atiendes a clientes en varios países de la UE, consulta la ley nacional de cada uno.",
          },
        ],
      },
      {
        heading: "La exención de las microempresas y otros límites",
        blocks: [
          {
            type: "p",
            text: "El artículo 3(23) define la microempresa como una empresa que emplea a menos de 10 personas y cuyo volumen de negocios anual no excede de 2 millones de EUR o cuyo balance general anual no excede de 2 millones de EUR. Según el artículo 4(5), las microempresas que prestan servicios están exentas de los requisitos de accesibilidad del artículo 4(3) y de las obligaciones relativas a su cumplimiento. Los considerandos explican que exigir a estas empresas que realicen una evaluación supondría en sí mismo una carga desproporcionada. La directiva sigue animando a las microempresas a prestar servicios que cumplan los requisitos.",
          },
          {
            type: "p",
            text: "La exención solo abarca los servicios. Las microempresas que trabajan con productos reciben un trato distinto y no están totalmente exentas.",
          },
          {
            type: "p",
            text: "Para todos los demás, el artículo 14 establece que los requisitos de accesibilidad solo se aplican en la medida en que su cumplimiento no exija un cambio significativo que altere de forma fundamental la naturaleza básica del servicio ni imponga una carga desproporcionada. La empresa que se acoja a esto debe hacer una evaluación con los criterios del anexo VI. Los prestadores de servicios deben renovarla cuando se modifique el servicio, cuando lo pida una autoridad y, como mínimo, cada cinco años. Los considerandos añaden que la falta de prioridad, de tiempo o de conocimientos no debe considerarse un motivo legítimo.",
          },
        ],
      },
      {
        heading: "Qué dice el anexo I sobre la atención al cliente",
        blocks: [
          {
            type: "p",
            text: "El artículo 4(3) establece que todos los servicios, salvo los servicios de transporte urbano y suburbano y los servicios de transporte regional, deben cumplir la sección III del anexo I, que fija requisitos generales de accesibilidad para los servicios. La sección IV añade requisitos para servicios concretos, como los servicios bancarios para consumidores y el comercio electrónico. Tres puntos de la sección III son los que más importan a los equipos de soporte:",
          },
          {
            type: "ul",
            items: [
              "Letra a): los productos utilizados para prestar el servicio deben ser accesibles.",
              "Letra c): los sitios web, incluidas las aplicaciones en línea relacionadas, y los servicios basados en dispositivos móviles, incluidas las aplicaciones móviles, deben hacerse accesibles de forma coherente y adecuada, haciéndolos perceptibles, operables, comprensibles y robustos.",
              "Letra d): cuando estén disponibles, los servicios de apoyo (servicios de asistencia, centros de llamadas, asistencia técnica, servicios de retransmisión y servicios de formación) deben proporcionar información sobre la accesibilidad del servicio y su compatibilidad con las tecnologías de apoyo, mediante modos de comunicación accesibles.",
            ],
          },
          {
            type: "p",
            text: "El artículo 13 añade una obligación de transparencia. Los prestadores de servicios elaboran información, conforme al anexo V, que explica cómo cumple el servicio los requisitos de accesibilidad, y la ponen a disposición del público por escrito y de forma oral, también de manera accesible para las personas con discapacidad. Las orientaciones de AccessibleEU añaden que esta información debe conservarse mientras el servicio esté en funcionamiento.",
          },
          {
            type: "p",
            text: "Un widget de chat o un bot de soporte que funciona en tu web o tu app forma parte de la interfaz que usan los clientes, así que tiene sentido someterlo a la misma prueba de que sea perceptible, operable, comprensible y robusto. Tu servicio de asistencia, atendido por personas o por bots, también debería estar preparado para responder preguntas sobre la accesibilidad de tu servicio.",
          },
        ],
      },
      {
        heading: "Orientaciones prácticas para widgets de chat y bots de soporte",
        blocks: [
          {
            type: "p",
            text: "La directiva no enumera comprobaciones técnicas para un widget de chat. Los puntos siguientes son prácticas de ingeniería habituales que encajan con los principios del anexo I. Pruébalos con tecnologías de apoyo reales, como lectores de pantalla y el uso solo con teclado.",
          },
          {
            type: "ul",
            items: [
              "Haz que el botón de apertura del chat, el campo de mensaje, los botones y las respuestas rápidas se puedan usar solo con el teclado, con un indicador de foco visible.",
              "Da a cada control una etiqueta de texto que anuncien los lectores de pantalla, y anuncia los mensajes nuevos sin mover el foco del usuario.",
              "No confíes solo en el color, los iconos o las imágenes para transmitir significado. Da alternativas de texto a las imágenes y las tarjetas.",
              "Evita los tiempos de inactividad cortos que cierran el chat, o avisa antes de cerrarlo y deja que el cliente continúe.",
              "Mantén las respuestas del bot breves y sencillas, y da a los clientes una forma fácil de llegar a una persona, transmitiendo el historial de la conversación.",
              "Enseña al bot y a tus agentes a responder preguntas sobre la accesibilidad de tu servicio y a remitir a tu información del artículo 13.",
              "Ofrece más de un canal de contacto, como chat y correo electrónico, y da a quienes llaman a un bot de voz una alternativa basada en texto.",
            ],
          },
          {
            type: "p",
            text: "Para el detalle técnico, consulta la EN 301 549, la norma europea sobre requisitos de accesibilidad para productos y servicios TIC. La Decisión de Ejecución (UE) 2021/1339 de la Comisión cita la EN 301 549 V3.2.1 como norma armonizada en virtud de la Directiva sobre accesibilidad web, que abarca los sitios web y las apps del sector público. ETSI adoptó la EN 301 549 V4.1.1 el 24 de agosto de 2026. Pasa a WCAG 2.2 y añade un anexo que relaciona sus requisitos con el Acta Europea de Accesibilidad. AccessibleEU indica que la V4.1.1 todavía no es la referencia jurídica para demostrar el cumplimiento del Acta Europea de Accesibilidad ni de la Directiva sobre accesibilidad web, y que la referencia sigue siendo la V3.2.1, basada en WCAG 2.1 nivel AA, hasta que la Comisión cite la V4.1.1 en el Diario Oficial.",
          },
          {
            type: "note",
            text: "Esto no es asesoramiento jurídico. Esta página resume la Directiva (UE) 2019/882 y las orientaciones oficiales de la UE revisadas el 19 de octubre de 2026. Si tu servicio está incluido, y qué debes hacer, depende de la ley nacional que se te aplique. Para tomar decisiones sobre tu propio servicio, lee los textos oficiales y consulta con un abogado cualificado.",
          },
          {
            type: "p",
            text: "TascaLab crea bots de chat y de voz sobre las herramientas que ya usas, como Zendesk, Freshdesk, Jira y Slack. Los proyectos Standard Chat Bot cuestan de 500 a 650 USD y los proyectos Voice Bot, de 1.100 a 1.600 USD. Ambos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿Desde cuándo se aplica el Acta Europea de Accesibilidad?",
        a: "El artículo 31 obligaba a los Estados miembros a adoptar sus leyes nacionales a más tardar el 28 de junio de 2022 y a aplicarlas a partir del 28 de junio de 2025. El artículo 2(2) abarca los servicios prestados a consumidores después del 28 de junio de 2025.",
      },
      {
        q: "¿Las pequeñas empresas están exentas del Acta Europea de Accesibilidad?",
        a: "Las microempresas que prestan servicios están exentas según el artículo 4(5). El artículo 3(23) define la microempresa como la que tiene menos de 10 personas y un volumen de negocios anual o un balance general de no más de 2 millones de EUR. La exención no cubre por completo a las microempresas que trabajan con productos.",
      },
      {
        q: "¿El Acta Europea de Accesibilidad abarca la atención al cliente?",
        a: "El anexo I, sección III, letra d), establece que, cuando estén disponibles, los servicios de apoyo, como los servicios de asistencia, los centros de llamadas, la asistencia técnica, los servicios de retransmisión y los servicios de formación, deben proporcionar información sobre la accesibilidad del servicio y su compatibilidad con las tecnologías de apoyo, mediante modos de comunicación accesibles.",
      },
      {
        q: "¿La EN 301 549 es la norma armonizada para el Acta Europea de Accesibilidad?",
        a: "La EN 301 549 V4.1.1, adoptada el 24 de agosto de 2026, añade un anexo que relaciona sus requisitos con el Acta Europea de Accesibilidad. AccessibleEU indica que todavía no es la referencia jurídica para su cumplimiento hasta que la Comisión la cite en el Diario Oficial, y que hasta entonces la referencia sigue siendo la V3.2.1.",
      },
      {
        q: "¿Hay que modificar los contratos de servicios firmados antes de junio de 2025?",
        a: "El artículo 32 permite que los contratos de servicios celebrados antes del 28 de junio de 2025 sigan sin modificaciones hasta su vencimiento, pero no más de cinco años desde esa fecha.",
      },
    ],
    sources: [
      { label: "EUR-Lex — Directive (EU) 2019/882 (European Accessibility Act)", url: "https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng" },
      { label: "EUR-Lex — Summary: Accessibility of products and services", url: "https://eur-lex.europa.eu/EN/legal-content/summary/accessibility-of-products-and-services.html" },
      { label: "European Commission — European Accessibility Act (EAA)", url: "https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/european-accessibility-act-eaa_en" },
      { label: "AccessibleEU — Guidance on legislation", url: "https://accessible-eu-centre.ec.europa.eu/document/download/7bf9cb97-8ccf-421f-9d2d-6d1283e602ef_en?filename=AccEU_Guidance+on+legislation_English_acc.pdf" },
      { label: "AccessibleEU — The European accessibility standard EN 301 549 has been updated", url: "https://accessible-eu-centre.ec.europa.eu/content-corner/news/european-accessibility-standard-en-301-549-has-been-updated-2026-09-07_en" },
      { label: "ETSI — EN 301 549 V4.1.1 (2026-09)", url: "https://www.etsi.org/deliver/etsi_en/301500_301599/301549/04.01.01_60/en_301549v040101p.pdf" },
      { label: "EUR-Lex — Commission Implementing Decision (EU) 2021/1339", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021D1339" },
    ],
    related: ["website-chatbot-for-support", "eu-ai-act-chatbot-rules", "chatbot-to-human-handoff"],
    updated: "2026-10-19",
  },
  {
    key: "n8n-zendesk-integration",
    slug: "integracion-n8n-zendesk",
    category: "guides",
    navLabel: "Integración n8n y Zendesk",
    primaryKeyword: "integración n8n Zendesk",
    title: "Integración de n8n con Zendesk: nodos, triggers y webhooks",
    description:
      "Integración de n8n con Zendesk: operaciones del nodo Zendesk, Zendesk Trigger, credenciales con token de API u OAuth2, webhooks, límites de API y un ejemplo.",
    h1: "Integración de n8n con Zendesk: nodos, credenciales y workflows de ejemplo",
    intro:
      "n8n se conecta con Zendesk mediante dos nodos integrados. El nodo Zendesk trabaja con tickets, campos de ticket, usuarios y organizaciones, y el nodo Zendesk Trigger inicia un workflow cuando ocurre algo en Zendesk. Ambos usan la misma credencial, un token de API u OAuth2. Si prefieres mantener las reglas en Zendesk, puedes dirigir un webhook de Zendesk a un nodo Webhook de n8n y activarlo desde un trigger de Zendesk.",
    keyFacts: [
      "El nodo Zendesk de n8n tiene cuatro recursos: Ticket, Ticket Field, User y Organization.",
      "Fijar etiquetas con la operación 'Update Ticket' del nodo sustituye toda la lista de etiquetas. Las etiquetas que no incluyas se eliminan.",
      "La credencial de Zendesk de n8n admite un token de API (subdominio, correo de inicio de sesión y token) u OAuth2.",
      "Zendesk firma las solicitudes de webhook con las cabeceras X-Zendesk-Webhook-Signature y X-Zendesk-Webhook-Signature-Timestamp.",
      "Los límites de la API de Zendesk Suite van de 200 solicitudes por minuto en Team a 2.500 en Enterprise Plus.",
    ],
    sections: [
      {
        heading: "Qué puede hacer el nodo Zendesk de n8n",
        blocks: [
          {
            type: "p",
            text: "El nodo Zendesk lee o modifica datos en Zendesk como un paso más de un workflow. La documentación de n8n agrupa sus operaciones por recurso.",
          },
          {
            type: "table",
            caption: "Recursos y operaciones del nodo Zendesk (documentación de n8n, revisada en octubre de 2026)",
            head: ["Recurso", "Operaciones"],
            rows: [
              ["Ticket", "Crear, eliminar, obtener uno o varios, actualizar y recuperar un ticket suspendido"],
              ["Ticket Field", "Obtener un campo de ticket u obtener todos los campos de ticket del sistema y personalizados"],
              ["User", "Crear, eliminar, obtener uno o varios, actualizar, buscar, obtener las organizaciones de un usuario y obtener datos relacionados"],
              ["Organization", "Crear, eliminar, contar, obtener una o varias, actualizar y obtener datos relacionados"],
            ],
          },
          {
            type: "p",
            text: "Hay un comportamiento que pilla a muchos por sorpresa. Cuando usas 'Update Ticket' y rellenas el campo 'Tag Names or IDs', la documentación de n8n indica que se sustituye toda la lista de etiquetas del ticket, así que cualquier etiqueta que no incluyas se elimina. Esto sigue el comportamiento predeterminado de la API de Zendesk con las actualizaciones de etiquetas. La documentación propone tres soluciones: obtener las etiquetas actuales y combinarlas con las nuevas antes de actualizar, usar el nodo HTTP Request con la propiedad additional_tags de Zendesk o llamar al endpoint de etiquetas del ticket. Las dos últimas añaden etiquetas sin eliminar las existentes.",
          },
          {
            type: "p",
            text: "Si el nodo no admite una operación que necesitas, usa el nodo HTTP Request, pon 'Authentication' en 'Predefined Credential Type' y elige tu credencial de Zendesk. La solicitud reutiliza entonces la misma conexión que el nodo Zendesk.",
          },
        ],
      },
      {
        heading: "Cómo configurar las credenciales de Zendesk en n8n",
        blocks: [
          {
            type: "p",
            text: "Los nodos Zendesk y Zendesk Trigger usan la misma credencial, y n8n admite dos formas de autenticarse. Ambas necesitan tu subdominio, que es la parte de la URL de Zendesk entre https:// y .zendesk.com.",
          },
          {
            type: "ul",
            items: [
              "Token de API: en Zendesk Admin Center, abre 'Apps and integrations' y luego 'APIs', y activa el acceso por token para la API de Zendesk. Añade un token con una descripción y cópialo. En n8n, introduce el subdominio, la dirección de correo con la que inicias sesión en Zendesk y el token.",
              "OAuth2: en Zendesk Admin Center, crea un cliente OAuth en 'Apps and integrations' y luego 'APIs'. Pega la URL de callback de OAuth de n8n en el campo de URL de redirección del cliente. Copia el identificador único del cliente en 'Client ID' en n8n y su secreto en 'Client Secret', añade el subdominio, guarda y conecta tu cuenta de Zendesk.",
            ],
          },
        ],
      },
      {
        heading: "Nodo Zendesk Trigger o webhook de Zendesk",
        blocks: [
          {
            type: "p",
            text: "Hay dos formas de iniciar un workflow de n8n desde Zendesk. El nodo Zendesk Trigger inicia un workflow cuando los eventos de Zendesk cumplen las condiciones que defines en el nodo. En el ejemplo de la documentación de n8n, filtra los tickets cuyo estado es 'Open', y el workflow se ejecuta en cuanto lo activas.",
          },
          {
            type: "p",
            text: "La alternativa es construir la conexión tú mismo. En Zendesk Admin Center, ve a 'Apps and integrations' y luego a 'Webhooks', crea un webhook, elige 'Trigger or Automation' como método de conexión y apúntalo a la 'Production URL' de un nodo Webhook de n8n. Después, añade la acción 'Notify webhook' a un trigger o una automatización de Zendesk y escribe el payload, que no puede superar los 16.000 caracteres. Así las condiciones se quedan en las reglas de negocio de Zendesk y puedes elegir exactamente qué campos enviar.",
          },
          {
            type: "table",
            caption: "Dos formas de iniciar un workflow de n8n desde Zendesk",
            head: ["Pregunta", "Nodo Zendesk Trigger", "Webhook de Zendesk + nodo Webhook de n8n"],
            rows: [
              ["Dónde están las condiciones", "En el nodo, en n8n", "En un trigger o una automatización de Zendesk con la acción 'Notify webhook'"],
              ["Qué recibe n8n", "Los datos del evento que proporciona el nodo", "El payload que escribes en la acción del trigger, hasta 16.000 caracteres"],
              ["Credencial de Zendesk", "Necesaria para el propio trigger", "Solo necesaria para los pasos posteriores que llaman a Zendesk"],
              ["Pruebas", "Ejecuta el nodo en el editor, como en el ejemplo de la documentación de n8n", "Usa la 'Test URL' del nodo Webhook, que escucha durante 120 segundos, y luego cambia a la 'Production URL'"],
            ],
          },
          {
            type: "p",
            text: "Si usas un webhook, comprueba que las solicitudes vienen de verdad de Zendesk. Zendesk envía dos cabeceras, X-Zendesk-Webhook-Signature y X-Zendesk-Webhook-Signature-Timestamp. La firma es base64(HMACSHA256(timestamp + body)) generada con el secreto de firma del webhook, que puedes mostrar en la página de detalles del webhook u obtener a través de la API. Vuelve a calcularla en tu workflow y rechaza las solicitudes que no coincidan. Zendesk también indica que la misma acción puede llamar a un webhook más de una vez, así que haz que el workflow pueda ejecutarse dos veces para el mismo ticket sin problemas.",
          },
          {
            type: "p",
            text: "El nodo Webhook puede responder de inmediato, cuando termina el último nodo o mediante un nodo Respond to Webhook aparte. En los workflows más largos, responder de inmediato da a Zendesk una respuesta rápida mientras el resto del trabajo continúa.",
          },
        ],
      },
      {
        heading: "Workflow de ejemplo: clasificar tickets nuevos y avisar en Slack",
        blocks: [
          {
            type: "p",
            text: "Este es un patrón habitual, descrito paso a paso. Muestra cómo encajan los nodos. No es un caso de éxito de TascaLab.",
          },
          {
            type: "ol",
            items: [
              "Trigger: un nodo Zendesk Trigger, o un nodo Webhook alimentado por un trigger de Zendesk que se activa cuando se crea un ticket. Envía al menos el ID del ticket.",
              "Obtener: un nodo Zendesk con el recurso Ticket obtiene el ticket completo, incluidos el asunto, la descripción y las etiquetas actuales.",
              "Clasificar: un nodo Text Classifier clasifica el texto en categorías que defines, como facturación, incidencia técnica o reembolso. Cada categoría tiene un nombre y una descripción que ayuda al modelo. Por defecto, los elementos que no coinciden con ninguna categoría se descartan, así que activa la rama 'Other' para recogerlos.",
              "Actualizar: un nodo Zendesk fija el grupo y las etiquetas. Combina primero las etiquetas existentes, o añade etiquetas mediante el nodo HTTP Request con additional_tags, para no borrar las etiquetas que hayan puesto los agentes.",
              "Avisar: un nodo Slack publica la categoría y un enlace al ticket en el canal del equipo.",
              "Gestionar errores: envía las ejecuciones fallidas a una alerta, y espera y reintenta cuando Zendesk devuelva una respuesta 429.",
            ],
          },
          {
            type: "p",
            text: "Puedes ampliar el mismo patrón. Envía los tickets urgentes a un canal de Slack aparte, o consulta la organización del cliente con el recurso Organization antes de elegir un grupo.",
          },
        ],
      },
      {
        heading: "Límites de la API y dónde se ejecuta n8n",
        blocks: [
          {
            type: "p",
            text: "Zendesk limita las solicitudes a la API por minuto según el plan. Su documentación para desarrolladores indica estos límites predeterminados para las APIs de Support y Help Center:",
          },
          {
            type: "ul",
            items: [
              "Suite Team: 200 solicitudes por minuto.",
              "Suite Growth y Suite Professional: 400 solicitudes por minuto.",
              "Suite Enterprise: 700 solicitudes por minuto.",
              "Suite Enterprise Plus: 2.500 solicitudes por minuto.",
            ],
          },
          {
            type: "p",
            text: "El complemento High Volume API sube un plan que cumpla los requisitos a 2.500 solicitudes por minuto. Sustituye el límite del plan en lugar de sumarse a él, y requiere Suite Growth o superior (o Support Professional o superior) con al menos 10 licencias de agente. Por encima del límite, Zendesk devuelve HTTP 429 con una cabecera Retry-After que indica cuántos segundos esperar. Algunos endpoints tienen sus propios límites, más estrictos. Cuenta las llamadas a la API que hace cada ejecución y multiplícalas por tu volumen máximo de tickets. Los trabajos masivos, como añadir etiquetas a tickets antiguos, tienen más probabilidades de alcanzar el límite, así que divídelos en lotes y añade esperas.",
          },
          {
            type: "p",
            text: "n8n funciona como n8n Cloud, una instancia gestionada que n8n opera por ti, o autoalojado en tu propia máquina o infraestructura. Para la mayoría de las instalaciones autoalojadas, la documentación recomienda Docker, y recomienda n8n Cloud si no tienes experiencia gestionando servidores. Con cualquiera de los dos métodos de activación, Zendesk tiene que poder llegar a tu instancia de n8n. Si una instancia autoalojada está detrás de un proxy inverso, define N8N_WEBHOOK_URL con su URL base pública para que n8n muestre las URL de webhook correctas y los servicios externos las registren correctamente. N8N_WEBHOOK_URL sustituye a WEBHOOK_URL, que sigue funcionando pero está obsoleta desde n8n 2.35.0.",
          },
          {
            type: "p",
            text: "TascaLab crea automatizaciones de Zendesk como esta con n8n, Make, APIs y webhooks, sobre las herramientas que ya usas. Los proyectos de Ticket Routing & Categorization cuestan de 600 a 950 USD, y los de Custom Automation, de 1.200 a 2.000 USD. La mayoría de las implementaciones llevan de 1 a 3 semanas, y todos los proyectos incluyen documentación básica y 30 días de soporte tras el lanzamiento. Puedes empezar con una llamada de auditoría gratuita de 30 minutos.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "¿n8n tiene una integración nativa con Zendesk?",
        a: "Sí. n8n tiene un nodo Zendesk para tickets, campos de ticket, usuarios y organizaciones, y un nodo Zendesk Trigger que inicia workflows a partir de eventos de Zendesk. Ambos usan la misma credencial de Zendesk.",
      },
      {
        q: "¿Por qué el nodo Zendesk de n8n elimina las etiquetas de mis tickets?",
        a: "Cuando rellenas 'Tag Names or IDs' en la operación 'Update Ticket', se sustituye toda la lista de etiquetas. La documentación de n8n sugiere combinar primero las etiquetas existentes, o añadir etiquetas mediante el nodo HTTP Request con la propiedad additional_tags de Zendesk o con el endpoint de etiquetas.",
      },
      {
        q: "¿Qué métodos de autenticación admite la credencial de Zendesk de n8n?",
        a: "Un token de API, introducido junto con tu subdominio y el correo con el que inicias sesión, u OAuth2, con el ID y el secreto de un cliente OAuth que creas en Zendesk.",
      },
      {
        q: "¿Cómo compruebo que una solicitud de webhook viene de Zendesk?",
        a: "Vuelve a calcular base64(HMACSHA256(timestamp + body)) con el secreto de firma del webhook y compáralo con la cabecera X-Zendesk-Webhook-Signature. El timestamp está en la cabecera X-Zendesk-Webhook-Signature-Timestamp.",
      },
      {
        q: "¿Qué pasa cuando un workflow alcanza el límite de la API de Zendesk?",
        a: "Zendesk rechaza la solicitud con HTTP 429 y una cabecera Retry-After que indica cuántos segundos esperar. Los límites predeterminados van de 200 solicitudes por minuto en Suite Team a 2.500 en Suite Enterprise Plus.",
      },
    ],
    sources: [
      { label: "n8n Docs — Zendesk node", url: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.zendesk" },
      { label: "n8n Docs — Zendesk Trigger node", url: "https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.zendesktrigger" },
      { label: "n8n Docs — Zendesk credentials", url: "https://docs.n8n.io/integrations/builtin/credentials/zendesk" },
      { label: "n8n Docs — Webhook node", url: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook" },
      { label: "n8n Docs — Text Classifier node", url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.text-classifier" },
      { label: "n8n Docs — Host n8n", url: "https://docs.n8n.io/hosting/" },
      { label: "n8n Docs — Configure webhook URLs with reverse proxy", url: "https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/" },
      { label: "Zendesk Help — Creating webhooks to interact with third-party systems", url: "https://support.zendesk.com/hc/en-us/articles/4408839108378-Creating-webhooks-to-interact-with-third-party-systems" },
      { label: "Zendesk Developer Docs — Verifying webhook authenticity", url: "https://developer.zendesk.com/documentation/webhooks/verifying/" },
      { label: "Zendesk Developer Docs — Rate limits", url: "https://developer.zendesk.com/api-reference/introduction/rate-limits/" },
    ],
    related: ["zendesk-automation", "ticket-routing-automation", "n8n-vs-make-vs-zapier"],
    updated: "2026-10-19",
  },
];
