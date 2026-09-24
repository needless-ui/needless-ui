import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Componentes Angular accesibles y personalizables: elementos nativos, tokens W3C y una hoja de estilos para cualquier framework. Código abierto, licencia MIT.',
    skipToContent: 'Saltar al contenido principal',
    nav: {
      label: 'Principal',
      home: 'Inicio de Needless UI',
      components: 'Componentes',
      guides: 'Guías',
      github: 'GitHub',
      language: 'Idioma',
      theme: 'Tema',
      themes: { system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
    },
    footer: {
      license: 'Publicado bajo la licencia MIT.',
      source: 'Código fuente',
      built: 'Innecesariamente sofisticado, cuidadosamente construido.',
      legal: 'Aviso legal',
      privacy: 'Política de privacidad',
    },
  },

  home: {
    title: 'Needless UI · Componentes Angular accesibles, con ingeniería de sobra',
    description:
      'Needless UI es una biblioteca de componentes Angular de código abierto: elementos nativos, CSS independiente del framework, tokens W3C y WCAG 2.2 AA de serie.',
    eyebrow: 'Código abierto · Angular 22 · MIT',
    heading: 'Componentes de UI, innecesariamente bien hechos.',
    lead: 'Needless UI da estilo a <strong>elementos nativos</strong> con una sola hoja de estilos independiente del framework y tokens de diseño W3C. Sus directivas de Angular añaden el comportamiento de Angular Aria, así que todos los componentes son accesibles desde el primer renderizado.',
    getStarted: 'Empezar',
    browse: 'Explorar componentes',
    featuresTitle: 'Por qué existe',
    features: [
      {
        title: 'Elementos nativos ante todo',
        text: '<code>&lt;button nuiButton&gt;</code> es un botón de verdad. Los formularios, el teclado y los lectores de pantalla funcionan porque no hay nada que lo envuelva.',
      },
      {
        title: 'Una hoja de estilos, cualquier framework',
        text: 'Los componentes son CSS puro en capas de cascada: Angular hoy, React después y HTML simple siempre.',
      },
      {
        title: 'Tu CSS siempre gana',
        text: 'Todo va dentro de <code>@layer nui</code>, así que tus propios estilos lo sobrescriben sin <code>!important</code> ni guerras de especificidad.',
      },
      {
        title: 'Accesible por diseño',
        text: 'Al generar la paleta, cada par de colores se comprueba según las WCAG 2.2 AA. El foco, los colores forzados y el movimiento reducido ya vienen resueltos.',
      },
      {
        title: 'Tokens de diseño estándar',
        text: 'Los archivos de tokens en formato W3C DTCG se compilan en propiedades personalizadas de CSS, con temas claro, oscuro y anidados.',
      },
      {
        title: 'Angular moderno',
        text: 'Signal inputs, zoneless, renderizado en el servidor y un punto de entrada por componente, para que las aplicaciones solo incluyan lo que importan.',
      },
    ],
    codeTitle: 'Dos imports y listo',
    codeText:
      'Añade el paquete, importa la hoja de estilos una sola vez y usa los componentes en cualquier componente standalone.',
  },

  components: {
    title: 'Componentes',
    description:
      'Explora los componentes de Needless UI para Angular: botones, diálogos y menús accesibles, con ejemplos en vivo, referencia de la API y navegación por teclado.',
    intro:
      'Todos los componentes se basan en elementos nativos y están documentados con ejemplos en vivo, su API y su comportamiento con el teclado.',
    tabsLabel: 'Secciones de la documentación',
    tabs: { overview: 'Descripción general', api: 'API', accessibility: 'Accesibilidad' },
    sidenavLabel: 'Componentes',
    onThisPage: 'En esta página',
    example: {
      showCode: 'Mostrar código',
      hideCode: 'Ocultar código',
      copy: 'Copiar',
      copied: 'Copiado',
      files: 'Archivos fuente',
    },
    api: {
      import: 'Importación',
      selector: 'Selector',
      exportAs: 'Exportado como',
      members: 'Propiedades',
      name: 'Nombre',
      type: 'Tipo',
      default: 'Predeterminado',
      description: 'Descripción',
      kinds: { input: 'Input', model: 'Bidireccional', output: 'Output', method: 'Método' },
    },
    a11y: {
      keyboard: 'Interacción con el teclado',
      key: 'Tecla',
      action: 'Acción',
      notes: 'Notas de accesibilidad',
    },
    titles: {
      api: (name) => `API del componente ${name}`,
      accessibility: (name) => `Accesibilidad del componente ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Componente de botón para Angular',
        summary:
          'Acciones y enlaces, con estilo aplicado directamente a botones y enlaces nativos.',
        description:
          'Directiva de botón accesible para Angular sobre elementos nativos de botón y enlace, con cuatro variantes, tres tonos, tres tamaños y soporte para enlaces.',
        apiDescription:
          'Referencia de la API del botón de Needless UI: la directiva nuiButton, su selector y sus inputs variant, tone, size y disabled.',
        a11yDescription:
          'Comportamiento con el teclado y accesibilidad del botón de Needless UI: semántica nativa, anillo de foco, contraste, tamaño del objetivo y enlaces desactivados.',
        overview: [
          'La directiva <code>nuiButton</code> da estilo a un <code>&lt;button&gt;</code> o un <code>&lt;a&gt;</code> nativo. El elemento conserva su semántica, su comportamiento con el teclado y su participación en formularios; la directiva solo refleja sus inputs en los atributos data a los que apunta la hoja de estilos.',
          'Usa un <code>&lt;button&gt;</code> para las acciones y un <code>&lt;a&gt;</code> para la navegación. Los dos se ven igual y ambos admiten <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Variantes',
            text: 'Cuatro estilos de relleno, del más llamativo al más discreto. Usa un solo botón sólido por vista, para la acción principal.',
          },
          tones: {
            title: 'Tonos',
            text: 'Los tonos cambian la paleta: accent para el camino principal, neutral para las acciones secundarias y danger para las destructivas.',
          },
          sizes: {
            title: 'Tamaños',
            text: 'Tres alturas: 28, 36 y 44 píxeles. Incluso el más pequeño supera el tamaño mínimo de objetivo de las WCAG 2.2.',
          },
          links: {
            title: 'Enlaces y botones desactivados',
            text: 'Los enlaces no se pueden desactivar de forma nativa, así que un enlace desactivado recibe <code>aria-disabled="true"</code> y sus clics se bloquean, incluso con <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Da estilo de botón a un <code>&lt;button&gt;</code> o un <code>&lt;a&gt;</code> nativo.',
            members: {
              variant:
                'Estilo de relleno: <code>solid</code>, <code>soft</code>, <code>outline</code> o <code>ghost</code>.',
              tone: 'Paleta de colores: <code>accent</code>, <code>neutral</code> o <code>danger</code>.',
              size: 'Altura, padding y tamaño de fuente: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              disabled:
                'Desactiva el botón. En los enlaces, aplica <code>aria-disabled</code> y bloquea la activación.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Mueve el foco al botón o al enlace.'],
          ['Intro', 'Activa el botón o sigue el enlace.'],
          [
            'Espacio',
            'Activa el botón. En los enlaces, desplaza la página (comportamiento nativo).',
          ],
        ],
        notes: [
          'El nombre accesible es el texto del elemento. Los botones que solo tienen un icono necesitan un <code>aria-label</code>.',
          'El texto alcanza una relación de contraste de 4.5:1 en todas las variantes, tonos y temas; el generador de la paleta lo garantiza.',
          'El anillo de foco es un contorno de 2 px con un contraste de al menos 3:1 frente a la página, en ambos temas.',
          'Un <code>&lt;button&gt;</code> desactivado sale del orden de tabulación. Un enlace desactivado sigue siendo enfocable, para que quienes usan lectores de pantalla puedan encontrarlo, y se anuncia como desactivado.',
          'En el modo de colores forzados, el borde transparente se convierte en un contorno visible con el color del sistema.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Componente de diálogo para Angular',
        summary:
          'Una ventana modal sobre el elemento dialog nativo, con el foco gestionado por el navegador.',
        description:
          'Diálogo accesible para Angular basado en el elemento dialog nativo: foco modal, cierre con Esc o con un clic en el fondo, y valores de retorno.',
        apiDescription:
          'Referencia de la API del diálogo de Needless UI: nuiDialog con open bidireccional, tamaños, valores de retorno y sus partes de título, descripción y cierre.',
        a11yDescription:
          'Comportamiento con el teclado y accesibilidad del diálogo de Needless UI: foco modal, Esc, restauración del foco y contenido etiquetado.',
        overview: [
          'La directiva <code>nuiDialog</code> convierte un <code>&lt;dialog&gt;</code> nativo en un diálogo de Needless UI. El navegador aporta el comportamiento modal: la página de fondo queda inerte, el foco se mantiene dentro, Esc lo cierra y el foco vuelve al elemento que lo abrió.',
          'Enlaza <code>[(open)]</code> a un signal y asigna un valor a los botones de cierre con <code>nuiDialogClose="…"</code> para saber cómo se cerró el diálogo.',
        ],
        examples: {
          confirm: {
            title: 'Confirmación',
            text: 'Una confirmación destructiva. La opción segura tiene <code>autofocus</code> y el valor elegido llega a través de <code>(closed)</code>.',
          },
          form: {
            title: 'Formulario en un diálogo',
            text: 'Un diálogo puede contener cualquier cosa. Aquí el primer campo recibe el foco cuando se abre el diálogo.',
          },
          dismissible: {
            title: 'Elección obligatoria',
            text: 'Con <code>[dismissible]="false"</code>, Esc y los clics en el fondo se ignoran, así que hay que elegir una opción.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Convierte un <code>&lt;dialog&gt;</code> nativo en un diálogo de Needless UI.',
            members: {
              open: 'Indica si el diálogo está abierto. Enlázalo con <code>[(open)]</code>.',
              modal: 'Lo abre como modal, con un fondo y la página de detrás inerte.',
              dismissible: 'Indica si Esc y los clics en el fondo cierran el diálogo.',
              size: 'Ancho máximo: <code>sm</code> (24rem), <code>md</code> (32rem) o <code>lg</code> (44rem).',
              closed:
                'Emite el valor de retorno cada vez que el diálogo se cierra. Está vacío si se cerró sin elegir ninguna opción.',
              close: 'Cierra el diálogo con un valor de retorno opcional.',
            },
          },
          NuiDialogTitle: {
            summary:
              'El título del diálogo. Recibe un id y se convierte en el <code>aria-labelledby</code> del diálogo.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Una descripción breve, referenciada por el <code>aria-describedby</code> del diálogo.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Una fila de botones en la parte inferior del diálogo, alineada al final.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Cierra el diálogo que lo contiene al hacer clic.',
            members: {
              nuiDialogClose:
                'El valor con el que se cierra el diálogo, emitido por <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Mueve el foco al siguiente elemento dentro del diálogo.'],
          ['Mayús + Tab', 'Mueve el foco al elemento anterior dentro del diálogo.'],
          ['Esc', 'Cierra el diálogo, salvo que obligue a elegir una opción.'],
        ],
        notes: [
          'Abrirlo con <code>showModal()</code> le da al diálogo <code>role="dialog"</code> y semántica modal, y vuelve inerte el resto de la página.',
          'El título y la descripción se vinculan mediante ids generados, así que los lectores de pantalla anuncian ambos al abrirse el diálogo.',
          'El foco inicial va al elemento con <code>autofocus</code> o al primer elemento enfocable. En las confirmaciones destructivas, pon <code>autofocus</code> en la opción segura.',
          'Cuando el diálogo se cierra, el foco vuelve al elemento que lo abrió.',
          'Los navegadores pueden cerrar igualmente un diálogo que obliga a elegir si se pulsa Esc varias veces sin otra interacción, así que ofrece siempre una salida explícita.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Componente de menú para Angular',
        summary:
          'Una lista emergente de acciones, con submenús, elementos de casilla y de radio, y compatibilidad total con el teclado.',
        description:
          'Menú accesible para Angular basado en Angular Aria: navegación por teclado, búsqueda al escribir, submenús, casillas y radios, y posición dentro del viewport.',
        apiDescription:
          'Referencia de la API del menú de Needless UI: nuiMenuTrigger, nuiMenu y nuiMenuItem, con valores, tonos, submenús y estado marcado.',
        a11yDescription:
          'Interacción con el teclado y accesibilidad del menú de Needless UI: flechas, búsqueda al escribir, submenús, Esc y retorno del foco.',
        overview: [
          'Un menú muestra una lista de acciones cuando se activa su disparador. El comportamiento viene del patrón de menú de Angular Aria; Needless UI añade los estilos, muestra el menú como un popover por encima de la página y lo mantiene dentro del viewport.',
          'Pasa la referencia <code>ngMenu</code> del menú a <code>[nuiMenuTrigger]</code>, da a cada elemento un <code>value</code> único y responde a <code>(selected)</code> en cada elemento o a <code>(itemSelected)</code> en el menú.',
        ],
        examples: {
          actions: {
            title: 'Acciones',
            text: 'Un menú de acciones con indicaciones de atajos, un separador y un elemento destructivo.',
          },
          submenu: {
            title: 'Submenús',
            text: 'Vincula un elemento a un <code>nuiMenu</code> anidado con <code>[submenu]</code>. Se abre al pasar el puntero por encima o con la flecha derecha.',
          },
          checkable: {
            title: 'Elementos de casilla y de radio',
            text: 'Define <code>role</code> y enlaza <code>[checked]</code>. El menú muestra el indicador y anuncia el estado.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Abre un menú. Normalmente se aplica a un <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'El menú que se abre: la referencia <code>ngMenu</code> de un <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Un menú de elementos, mostrado como popover junto a su disparador. Su exportación <code>ngMenu</code> es el menú de Angular Aria que reciben los disparadores y los submenús.',
            members: {
              wrap: 'Indica si las flechas pasan del último elemento al primero.',
              typeaheadDelay: 'Milisegundos antes de que se reinicie la búsqueda al escribir.',
              disabled: 'Desactiva todo el menú.',
              itemSelected:
                'Emite el valor del elemento elegido. En el menú raíz también se dispara con los elementos de los submenús.',
            },
          },
          NuiMenuItem: {
            summary: 'Un elemento de un <code>nuiMenu</code>.',
            members: {
              value:
                'Identifica el elemento. Debe ser único en todo el menú, incluidos los submenús.',
              disabled:
                'Desactiva el elemento. Sigue siendo alcanzable con las flechas, pero no se puede elegir.',
              submenu: 'Un <code>nuiMenu</code> anidado que este elemento abre.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> o <code>menuitemradio</code>.',
              checked: 'Estado marcado de un elemento de casilla o de radio.',
              tone: '<code>danger</code> para acciones destructivas.',
              searchTerm:
                'Texto que usa la búsqueda al escribir. Por defecto, la etiqueta del elemento.',
              selected:
                'Emite el valor del elemento cuando se elige con el puntero o con el teclado.',
            },
          },
          NuiMenuSeparator: { summary: 'Una línea entre grupos de elementos.', members: {} },
          NuiMenuShortcut: {
            summary: 'Una indicación de atajo de teclado, alineada al final de un elemento.',
            members: {},
          },
        },
        keyboard: [
          [
            'Intro o Espacio',
            'En el disparador: abre el menú en su primer elemento. En un elemento: lo elige o abre su submenú.',
          ],
          [
            'Flecha abajo',
            'En el disparador: abre el menú en su primer elemento. En el menú: pasa al elemento siguiente.',
          ],
          [
            'Flecha arriba',
            'En el disparador: abre el menú en su último elemento. En el menú: pasa al elemento anterior.',
          ],
          ['Inicio y Fin', 'Pasa al primer o al último elemento.'],
          [
            'Flecha derecha',
            'Abre un submenú y pasa a su primer elemento (flecha izquierda en texto de derecha a izquierda).',
          ],
          [
            'Flecha izquierda',
            'Cierra un submenú y vuelve a su elemento padre (flecha derecha en texto de derecha a izquierda).',
          ],
          ['Esc', 'Cierra el menú y devuelve el foco al disparador.'],
          ['Letras', 'Pasa al siguiente elemento cuya etiqueta empieza por el texto escrito.'],
        ],
        notes: [
          'El disparador recibe <code>aria-haspopup</code>, <code>aria-expanded</code> y <code>aria-controls</code>; el menú y sus elementos obtienen sus roles ARIA de Angular Aria.',
          'El elemento resaltado usa un relleno sólido con un contraste de texto de al menos 4.5:1 y también sirve de indicador de foco. En el modo de colores forzados recibe un contorno de resaltado del sistema.',
          'Los elementos de casilla y de radio anuncian su estado mediante <code>aria-checked</code>.',
          'Elegir un elemento cierra el menú y devuelve el foco al disparador. Mover el foco fuera del disparador y del menú también lo cierra.',
          'Los elementos miden al menos 28 píxeles de alto, por encima del tamaño mínimo de objetivo de las WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Guías',
    items: {
      'getting-started': {
        title: 'Primeros pasos',
        description:
          'Instala Needless UI en una aplicación de Angular 22: añade los paquetes, importa la hoja de estilos y usa tu primer componente accesible en minutos.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI funciona con Angular 22. Los componentes son directivas standalone, así que no hay módulos que importar.',
          },
          { kind: 'h2', id: 'install', text: 'Instalación' },
          {
            kind: 'p',
            html: 'Añade el paquete de Angular junto con Angular Aria y el CDK, que aportan el comportamiento de teclado y de accesibilidad. La hoja de estilos viene incluida.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Importa los estilos' },
          {
            kind: 'p',
            html: 'Importa la hoja de estilos una sola vez en <code>src/styles.css</code>. Incluye los tokens de diseño y todos los componentes.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Todo va dentro de <code>@layer nui</code>. Si tu aplicación tiene resets globales como <code>a { color: inherit }</code>, ponlos en una capa declarada antes de <code>nui</code> para que no sobrescriban los componentes.',
          },
          { kind: 'h2', id: 'use', text: 'Usa un componente' },
          {
            kind: 'p',
            html: 'Importa las directivas que necesites desde sus puntos de entrada y añádelas a los <code>imports</code> de tu componente.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Próximos pasos' },
          {
            kind: 'p',
            html: 'Explora los <a href="/components">componentes</a> para ver ejemplos en vivo, o lee la <a href="/guides/theming">guía de temas</a> para adaptarlos a tu marca.',
          },
        ],
      },
      theming: {
        title: 'Temas',
        description:
          'Adapta Needless UI con propiedades personalizadas de CSS: modo claro y oscuro, temas anidados, tokens propios y una paleta de marca con contraste verificado.',
        blocks: [
          {
            kind: 'p',
            html: 'Cada decisión visual es una propiedad personalizada de CSS generada a partir de tokens de diseño W3C. Los componentes solo usan tokens semánticos como <code>--nui-color-accent-solid</code>, así que cambiar un token cambia el estilo de todos los componentes que lo usan.',
          },
          { kind: 'h2', id: 'modes', text: 'Claro y oscuro' },
          {
            kind: 'p',
            html: 'Por defecto, el modo lo decide la preferencia del sistema operativo. Fija un modo en cualquier elemento con <code>data-nui-theme</code> y anida temas libremente.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Sobrescribe los tokens' },
          {
            kind: 'p',
            html: 'Los tokens viven en <code>@layer nui</code>, así que el CSS normal de tu aplicación los sobrescribe. Defínelos en <code>:root</code> para toda la aplicación o en cualquier elemento para una parte de ella.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Una paleta para tu marca' },
          {
            kind: 'p',
            html: 'Las escalas de color se generan. Cambia un matiz en <code>packages/tokens/scripts/palette.ts</code> y vuelve a generarlas: el script reajusta cada color a sRGB y vuelve a comprobar el contraste de cada par de texto y fondo.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Página no encontrada',
    description:
      'Esta página no existe. Explora los componentes de Needless UI o empieza desde la página de inicio.',
    text: 'Esta página no existe o se ha movido.',
    home: 'Ir a la página de inicio',
    components: 'Explorar componentes',
  },

  legal: {
    translationNote:
      'Esta traducción se ofrece por comodidad; en caso de discrepancia, prevalece el texto en inglés.',
    labels: {
      name: 'Nombre',
      address: 'Dirección',
      email: 'Correo electrónico',
      uid: 'UID',
      vat: 'Número de IVA',
    },
    notice: {
      title: 'Aviso legal',
      description:
        'Quién gestiona needlessui.com: nombre, dirección postal y correo electrónico del titular, con los datos del registro mercantil y del IVA.',
      operator: 'Titular',
      legalForm: 'empresa individual',
      country: 'Suiza',
      register: 'Registro mercantil',
      registerEntry: 'Inscrita en el registro mercantil del cantón de Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Responsabilidad' },
        {
          kind: 'p',
          html: 'Los contenidos de este sitio se elaboran con cuidado, pero sin ninguna garantía de que sean exactos, completos o actuales. Los sitios web enlazados escapan a nuestro control; sus titulares son responsables de su contenido.',
        },
        { kind: 'h2', id: 'license', text: 'Licencia' },
        {
          kind: 'p',
          html: 'Needless UI, incluido este sitio, es de código abierto bajo la <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">licencia MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad',
      description:
        'Cómo trata needlessui.com tus datos: sin cookies, analítica ni rastreo. Qué procesa el proveedor de alojamiento cuando lo visitas y cuáles son tus derechos.',
      updated: 'Última actualización: 24 de septiembre de 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Esta política explica qué datos personales se tratan cuando visitas www.needlessui.com y cuáles son tus derechos. En resumen: el sitio no usa cookies, analítica ni rastreo, y nunca te pide datos personales.',
        },
        { kind: 'h2', id: 'controller', text: 'Responsable del tratamiento' },
        {
          kind: 'p',
          html: 'El titular indicado en el <a href="/legal">aviso legal</a>, Angelo Lamonaca. Contacto: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Alojamiento' },
        {
          kind: 'p',
          html: 'El sitio lo aloja Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Cuando abres una página, tu navegador envía los datos técnicos que recibe cualquier sitio web: tu dirección IP, la fecha y la hora, la página solicitada, la página de la que vienes y el user agent de tu navegador. Vercel trata estos datos por cuenta nuestra para servir el sitio y mantenerlo seguro, y solo los conserva el tiempo necesario para ello. Puede hacerlo en Estados Unidos; Vercel está certificada conforme al EU-U.S. Data Privacy Framework, a su extensión para el Reino Unido y al Swiss-U.S. Data Privacy Framework. Consulta el <a href="https://vercel.com/legal/privacy-policy">aviso de privacidad de Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Cuando se aplica el RGPD, la base jurídica es nuestro interés legítimo en gestionar un sitio web seguro (art. 6.1.f del RGPD).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies y almacenamiento local' },
        {
          kind: 'p',
          html: 'El sitio no instala cookies. Si eliges el tema claro u oscuro, el almacenamiento local de tu navegador recuerda esa elección para tu próxima visita. Nunca sale de tu dispositivo; para eliminarla, vuelve a «Sistema» o borra los datos del sitio.',
        },
        { kind: 'h2', id: 'tracking', text: 'Sin rastreo' },
        {
          kind: 'p',
          html: 'No hay analítica, publicidad, plugins de redes sociales, contenido incrustado de terceros ni fuentes externas. Los enlaces a GitHub y npm llevan a sitios con sus propias políticas de privacidad.',
        },
        { kind: 'h2', id: 'rights', text: 'Tus derechos' },
        {
          kind: 'p',
          html: 'Puedes preguntar qué datos personales tuyos se tratan y pedir que se rectifiquen o se supriman. Cuando se aplica el RGPD, también puedes oponerte al tratamiento, solicitar su limitación y recibir tus datos en un formato portable. Escribe a {email}. También puedes presentar una reclamación ante una autoridad de control: en Suiza, el Comisionado Federal de Protección de Datos y Transparencia (FDPIC); en la UE, la autoridad de tu país.',
        },
        { kind: 'h2', id: 'changes', text: 'Cambios' },
        {
          kind: 'p',
          html: 'Esta política cambia cuando cambia el sitio, por ejemplo, si se traslada a otro proveedor de alojamiento. La fecha de abajo indica la versión vigente.',
        },
      ],
    },
  },
};
