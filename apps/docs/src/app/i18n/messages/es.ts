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
    emergency: {
      label: 'NO PULSAR',
      cover: 'Levanta la tapa de seguridad',
      button: 'No pulsar',
      armed: 'La tapa está levantada. Piénsalo dos veces.',
      falling: 'Protocolo de emergencia activado…',
      fallen: 'La gravedad ya es permanente. Recarga la página para reconstruir el universo.',
      reduced:
        'Tu sistema pide reducir el movimiento, así que la gravedad sigue apagada. Qué suerte.',
    },
    toaster: { label: 'Notificaciones (Alt + T)', close: 'Cerrar' },
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
        title: 'Innecesariamente personalizable',
        text: 'Resortes, efectos al pulsar, animaciones de entrada, formas de esquina, radio y densidad: <a href="/guides/customization">un atributo</a> para toda la aplicación o un input por componente, sobre tokens de diseño W3C estándar.',
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
      kinds: {
        input: 'Input',
        model: 'Bidireccional',
        output: 'Output',
        method: 'Método',
        property: 'Propiedad',
      },
      texts:
        'Todos los textos que muestra o anuncia también son inputs, así que puedes traducirlos:',
      customization: {
        note: 'Los inputs de personalización que no definas siguen el atributo <code>data-nui-*</code> más cercano. Consulta la <a href="/guides/customization">guía de personalización</a>.',
        members: {
          motion:
            'El resorte con el que se mueve: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> o <code>none</code>.',
          spring:
            'Cualquier resorte, en forma de <code>{ stiffness, damping, mass }</code>, compilado a CSS en tiempo de ejecución. Tiene prioridad sobre <code>motion</code>.',
          press:
            'Qué hace mientras se mantiene pulsado: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> o <code>none</code>.',
          enter:
            'Cómo entra en escena: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> o <code>none</code>.',
          corners:
            'La forma de sus esquinas: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> o <code>square</code>.',
          radius:
            'El tamaño de sus esquinas: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> o <code>full</code>.',
          density:
            'Cuánto espacio ocupa: <code>compact</code>, <code>regular</code> o <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Efectos al pulsar',
            text: 'Mantén pulsado cada botón. <code>press</code> define qué hace un botón mientras está pulsado, y <code>motion</code>, el resorte con el que vuelve a su sitio. <code>data-nui-press</code> en cualquier elemento aplica el efecto a todo lo que contiene.',
          },
          shapes: {
            title: 'Esquinas, radio y densidad',
            text: '<code>corners</code> cambia la forma de las esquinas, <code>radius</code> su tamaño y <code>density</code> el espacio que ocupa un botón, sin bajar nunca del tamaño mínimo de objetivo de 24 px. Los navegadores sin <code>corner-shape</code> dibujan las esquinas redondeadas.',
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
          entrances: {
            title: 'Animaciones de entrada',
            text: 'Cada botón abre el mismo diálogo con un valor predefinido de <code>enter</code> distinto y el resorte <code>bouncy</code>. Entre como entre, sale con un fundido rápido.',
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
          entrances: {
            title: 'Animaciones de entrada y resortes',
            text: 'Cada menú combina un valor predefinido de <code>enter</code> con un resorte de <code>motion</code> y crece desde el lado por el que se abre. Los submenús heredan ambos.',
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

      avatar: {
        name: 'Avatar',
        title: 'Componente de avatar para Angular',
        summary: 'La foto de una persona, o sus iniciales sobre un color que siempre es el suyo.',
        description:
          'Avatar para Angular con iniciales cuando no hay foto, un color estable por nombre, indicadores de estado y grupos, legibles en todos los temas.',
        apiDescription:
          'Referencia de la API del avatar de Needless UI: nuiAvatar con nombre, foto, tamaño, forma y estado, además de nuiAvatarGroup.',
        a11yDescription:
          'Accesibilidad del avatar de Needless UI: rol de imagen y nombre, avatares decorativos e iniciales que mantienen un contraste de 4.5:1.',
        overview: [
          'El componente <code>nuiAvatar</code> muestra una foto, o las iniciales de la persona cuando no hay foto o no se carga. Las iniciales van sobre un color calculado a partir del nombre, así que la misma persona conserva el mismo color en todas partes.',
          'Cada tono se limita a una luminosidad y un croma que mantienen las iniciales blancas por encima de una relación de contraste de 4.5:1, sean cuales sean el nombre y el tema.',
        ],
        examples: {
          people: {
            title: 'Iniciales, fotos y estado',
            text: 'Sin <code>src</code>, las iniciales y el color salen de <code>name</code>. <code>status</code> añade un punto de presencia.',
          },
          group: {
            title: 'Grupos, tamaños y formas',
            text: '<code>nuiAvatarGroup</code> superpone una fila de avatares. <code>size</code> admite <code>sm</code>, <code>md</code> o <code>lg</code>, y <code>shape="square"</code> va bien para equipos y aplicaciones.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Una foto o unas iniciales, con el nombre de la persona.',
            members: {
              name: 'El nombre de la persona. De él salen el nombre accesible, las iniciales y el color.',
              src: 'URL de la foto. Si no se carga, se muestran las iniciales en su lugar.',
              size: 'Tamaño: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              shape: '<code>circle</code> o <code>square</code>.',
              status:
                'Un punto de presencia: <code>online</code>, <code>away</code>, <code>busy</code> u <code>offline</code>.',
              label:
                'Un nombre accesible que dice más que el nombre solo, como «Ada Lovelace, en línea».',
              decorative:
                'Oculta el avatar a las tecnologías de asistencia, para avatares junto al nombre visible.',
            },
          },
          NuiAvatarGroup: {
            summary: 'Una fila de avatares superpuestos. Ponle nombre con <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Un avatar es una imagen (<code>role="img"</code>) con el nombre de la persona. Junto a su nombre visible, usa <code>decorative</code> para que los lectores de pantalla no lo anuncien dos veces.',
          'El punto de estado es solo visual. Cuando el estado importe, inclúyelo en <code>label</code>.',
          'Las iniciales mantienen una relación de contraste de al menos 4.5:1 en cada color generado.',
        ],
      },

      breadcrumbs: {
        name: 'Migas de pan',
        title: 'Componente de migas de pan para Angular',
        summary: 'El rastro de páginas que lleva hasta la actual.',
        description:
          'Migas de pan accesibles para Angular sobre nav y lista nativos, con separadores CSS invertidos en texto de derecha a izquierda y rastros largos desplazables.',
        apiDescription:
          'Referencia de la API de las migas de pan de Needless UI: la directiva nuiBreadcrumbs y la etiqueta de su región de navegación.',
        a11yDescription:
          'Accesibilidad de las migas de pan de Needless UI: región de navegación, semántica de lista, la página actual y tamaños de objetivo.',
        overview: [
          'Las migas de pan muestran dónde se ubica una página dentro del sitio. La directiva <code>nuiBreadcrumbs</code> da estilo a un <code>&lt;nav&gt;</code> nativo y a su lista; el último elemento es la página actual, marcada con <code>aria-current="page"</code>.',
          'Un rastro más largo que su contenedor se desplaza en horizontal en lugar de pasar a otra línea. Empieza desplazado hasta el final, y los extremos se desvanecen donde hay más por ver.',
        ],
        examples: {
          trail: {
            title: 'Un rastro',
            text: 'Enlaces a las páginas superiores y, al final, la página actual como texto normal con <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Rastros largos',
            text: 'En un contenedor estrecho el rastro se desplaza, y empieza con la página actual a la vista.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Da estilo de migas de pan a un <code>&lt;nav&gt;</code> y a su lista.',
            members: { label: 'Nombre accesible de la región de navegación.' },
          },
        },
        keyboard: [['Tab', 'Pasa al siguiente enlace del rastro.']],
        notes: [
          'Es una región de navegación con una lista simple, así que los lectores de pantalla anuncian cuántas páginas tiene el rastro.',
          'Los separadores se dibujan con CSS, así que no se leen en voz alta, y se invierten en texto de derecha a izquierda.',
          'Cada enlace mide al menos 24 px de alto.',
        ],
      },

      empty: {
        name: 'Estado vacío',
        title: 'Componente de estado vacío para Angular',
        summary: 'Qué mostrar cuando no hay nada que mostrar, y qué hacer al respecto.',
        description:
          'Estado vacío para Angular con imagen, título, una breve explicación y acciones, además de cuatro ilustraciones integradas que flotan suavemente.',
        apiDescription:
          'Referencia de la API del estado vacío de Needless UI: nuiEmpty y sus partes de imagen, título, descripción y acciones.',
        a11yDescription:
          'Accesibilidad del estado vacío de Needless UI: imágenes decorativas, encabezados con sentido y movimiento reducido.',
        overview: [
          'Un estado vacío sustituye a una lista, una tabla o una página que todavía no tiene nada. Explica por qué y ofrece el siguiente paso.',
          'La parte multimedia acepta tu propia imagen, o dibuja una integrada: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Sin resultados',
            text: 'Un título que explica lo ocurrido, una línea de ayuda y acciones para salir del paso.',
          },
          pictures: {
            title: 'Imágenes integradas',
            text: 'Define <code>illustration</code> en <code>nuiEmptyMedia</code>. Las imágenes siguen el tema y flotan, salvo que se reduzca el movimiento.',
          },
        },
        api: {
          NuiEmpty: { summary: 'El contenedor: una columna centrada.', members: {} },
          NuiEmptyMedia: {
            summary: 'La imagen, oculta para las tecnologías de asistencia.',
            members: {
              illustration:
                'Una imagen integrada: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'El título. Usa el nivel de encabezado que encaje en la página.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Una línea de explicación.', members: {} },
          NuiEmptyActions: { summary: 'Una fila de botones.', members: {} },
        },
        keyboard: [],
        notes: [
          'La imagen es decorativa (<code>aria-hidden</code>): el título y la descripción transmiten el mensaje.',
          'Usa un encabezado para el título, con el nivel que encaje en la estructura de la página.',
          'Las imágenes integradas dejan de flotar cuando se prefiere movimiento reducido.',
        ],
      },

      'number-field': {
        name: 'Campo numérico',
        title: 'Componente de campo numérico para Angular',
        summary:
          'Una entrada numérica con botones de paso, con el formato de cada configuración regional.',
        description:
          'Campo numérico accesible para Angular: spinbutton con botones de paso, teclado, mínimo y máximo, y formatos regionales de moneda, porcentaje y unidades.',
        apiDescription:
          'Referencia de la API del campo numérico de Needless UI: nuiNumberField, nuiNumberInput con min, max, step y format, y nuiNumberStep.',
        a11yDescription:
          'Interacción con el teclado y accesibilidad del campo numérico de Needless UI: rol spinbutton, flechas, teclas de página y botones de paso.',
        overview: [
          'El campo numérico es una entrada de texto que contiene un número. Muestra el número con el formato de la configuración regional, lee el texto escrito en ese mismo formato y, al perder el foco, lo ajusta a <code>step</code> entre <code>min</code> y <code>max</code>.',
          'También lee dígitos y separadores nativos: números arábigo-índicos, persas y devanagari, espacios y puntos como separadores de miles, y cualquier signo menos. Mantener pulsado un botón de paso repite la acción, cada vez más rápido.',
        ],
        examples: {
          guests: {
            title: 'Botones de paso',
            text: 'Botones a cada lado, desactivados en <code>min</code> y <code>max</code>. Las flechas del teclado también cambian el valor paso a paso.',
          },
          formats: {
            title: 'Moneda y porcentaje',
            text: 'Pasa opciones de <code>Intl.NumberFormat</code> a <code>format</code> y una <code>locale</code>. El valor sigue siendo un número simple.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Agrupa la entrada con sus botones de paso.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Una entrada de texto que contiene un número, como spinbutton de ARIA.',
            members: {
              value:
                'El número, o <code>null</code> si está vacío. También funciona con formularios.',
              min: 'Valor mínimo permitido.',
              max: 'Valor máximo permitido.',
              step: 'Cuánto cambia el valor en un paso. Al perder el foco, el valor se ajusta a él.',
              format:
                "Opciones de <code>Intl.NumberFormat</code>, como <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Configuración regional para dar formato a los números y leerlos.',
              disabled: 'Desactiva la entrada y sus botones.',
              stepBy: 'Sube (positivo) o baja (negativo) un número de pasos.',
            },
          },
          NuiNumberStep: {
            summary: 'Un botón de paso. Mantenerlo pulsado repite la acción.',
            members: {
              nuiNumberStep: '<code>1</code> sube un paso y <code>-1</code> baja un paso.',
              label: 'Nombre accesible. Por defecto, «Increase» o «Decrease».',
            },
          },
        },
        keyboard: [
          ['Flechas arriba y abajo', 'Sube o baja el valor un paso.'],
          ['Re Pág y Av Pág', 'Avanza o retrocede diez pasos.'],
          ['Inicio y Fin', 'Va al mínimo o al máximo.'],
          ['Intro', 'Confirma lo escrito.'],
        ],
        notes: [
          'La entrada es un <code>spinbutton</code> con <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> y el valor con formato como <code>aria-valuetext</code>.',
          'Los botones de paso quedan fuera del orden de tabulación, ya que las teclas hacen lo mismo, pero tienen nombre y están vinculados a la entrada con <code>aria-controls</code>.',
          'Etiqueta la entrada con <code>aria-label</code> o con un <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Campo OTP',
        title: 'Campo OTP y de código de verificación para Angular',
        summary: 'Códigos de verificación en casillas separadas, sobre una única entrada real.',
        description:
          'Campo OTP accesible para Angular: un campo nativo bajo las casillas, autocompletado por SMS, WebOTP, limpieza al pegar, grupos, máscara y sacudida al fallar.',
        apiDescription:
          'Referencia de la API del campo OTP de Needless UI: nuiOtp con longitud, patrón, grupos y enmascarado, y nuiOtpInput con WebOTP.',
        a11yDescription:
          'Teclado y accesibilidad del campo OTP de Needless UI: un campo de texto etiquetado, un anillo de foco visible y autocompletado.',
        overview: [
          'El campo OTP parece una fila de casillas, pero por debajo es un único <code>&lt;input&gt;</code> nativo. El autocompletado por SMS (<code>autocomplete="one-time-code"</code>), el pegado, los gestores de contraseñas, los formularios y los lectores de pantalla ven un campo de texto normal.',
          'Los códigos pegados se limpian, así que «123-456» y «123 456» funcionan, y se rechazan los caracteres que el patrón no admite. En Android, <code>webOtp</code> rellena el código desde el SMS en cuanto llega.',
        ],
        examples: {
          verify: {
            title: 'Verificación',
            text: '<code>(completed)</code> se dispara cuando se llena la última casilla. Pon <code>aria-invalid</code> en la entrada para rechazar un código: las casillas se ponen rojas y tiemblan.',
          },
          letters: {
            title: 'Letras, grupos y enmascarado',
            text: '<code>pattern="alphanumeric"</code> también acepta letras, <code>[groups]</code> añade separadores y <code>masked</code> dibuja puntos.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Dibuja las casillas y envuelve la entrada.',
            members: {
              length: 'Número de caracteres.',
              pattern: '<code>digits</code>, o <code>alphanumeric</code> para letras y dígitos.',
              groups:
                'Tamaños de los grupos, dibujados con un separador entre ellos, como <code>[3, 3]</code>.',
              masked: 'Dibuja puntos en lugar de los caracteres.',
              completed: 'Emite el código cada vez que se llena la última casilla.',
            },
          },
          NuiOtpInput: {
            summary: 'La entrada real. Recibe los atributos que necesita un código de un solo uso.',
            members: {
              webOtp:
                'Rellena el código desde un SMS entrante mediante la API WebOTP, donde esté disponible.',
            },
          },
        },
        keyboard: [
          ['Dígitos o letras', 'Rellenan la casilla actual y pasan a la siguiente.'],
          ['Retroceso', 'Borra el carácter anterior al cursor.'],
          [
            'Flechas izquierda y derecha',
            'Mueven una casilla; una casilla llena queda seleccionada, así que lo que escribas la reemplaza.',
          ],
          ['Pegar', 'Rellena las casillas con un código copiado.'],
        ],
        notes: [
          'Los lectores de pantalla encuentran un solo campo de texto. Etiquétalo con <code>aria-label</code> o con un <code>&lt;label&gt;</code>.',
          'Las casillas están ocultas para las tecnologías de asistencia; la casilla que se está editando muestra el anillo de foco.',
          'Con el movimiento reducido, el cursor no parpadea y las casillas no saltan ni tiemblan.',
        ],
      },

      rating: {
        name: 'Valoración',
        title: 'Componente de valoración con estrellas para Angular',
        summary: 'Estrellas para valorar, sobre botones de radio reales.',
        description:
          'Valoración con estrellas accesible para Angular sobre radios nativos: teclado y formularios, vista previa con el puntero, borrado y fracciones en solo lectura.',
        apiDescription:
          'Referencia de la API de la valoración de Needless UI: nuiRating con valor, máximo, modos de solo lectura y borrable, y etiquetas traducibles.',
        a11yDescription:
          'Interacción con el teclado y accesibilidad de la valoración de Needless UI: grupo de radio con nombre, estrellas etiquetadas y la imagen de solo lectura.',
        overview: [
          'La valoración es un grupo de botones de radio nativos dibujados como estrellas. Las flechas, los formularios y los lectores de pantalla funcionan como en cualquier grupo de radio; el CSS rellena las estrellas y muestra una vista previa de la nueva valoración bajo el puntero.',
          'En solo lectura muestra cualquier fracción, como un promedio de 4.3.',
        ],
        examples: {
          pick: {
            title: 'Valorar algo',
            text: 'Enlaza <code>[(value)]</code> o un formulario. Con <code>clearable</code>, volver a elegir la misma estrella borra la valoración.',
          },
          average: {
            title: 'Mostrar un promedio',
            text: '<code>readonly</code> rellena las estrellas hasta cualquier fracción y le da a la imagen el nombre «Rated 4.3 out of 5».',
          },
        },
        api: {
          NuiRating: {
            summary:
              'Un grupo de radio de estrellas, o una imagen de solo lectura de una valoración.',
            members: {
              value: 'La valoración, o <code>null</code>. También funciona con formularios.',
              max: 'Número de estrellas.',
              readonly: 'Muestra el valor, con cualquier fracción, en lugar de pedirlo.',
              disabled: 'Desactiva todas las estrellas.',
              clearable: 'Volver a elegir la estrella actual borra la valoración.',
              name: 'Nombre compartido por los botones de radio. Se genera por defecto.',
              starLabel: 'Nombre accesible de cada estrella, en función de su valor.',
              readonlyLabel: 'Nombre accesible en modo de solo lectura.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Entra en el grupo, en la estrella marcada.'],
          ['Flechas', 'Cambian la valoración.'],
          ['Espacio', 'Marca la estrella enfocada.'],
        ],
        notes: [
          'Cada estrella es un botón de radio nativo con el nombre «3 stars». Ponle nombre al grupo con <code>aria-label</code>.',
          'En solo lectura, la valoración es una imagen (<code>role="img"</code>) con el nombre «Rated 4.3 out of 5».',
          'Las estrellas se dibujan con máscaras CSS, así que respetan los colores forzados.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Componente skeleton de carga para Angular',
        summary: 'Marcadores de posición que mantienen el diseño mientras carga el contenido.',
        description:
          'Skeletons de carga para Angular con formas de texto, círculo y bloque, con un único brillo que recorre toda la página y ninguno con el movimiento reducido.',
        apiDescription:
          'Referencia de la API del skeleton de Needless UI: la directiva nuiSkeleton y sus formas text, circle y block.',
        a11yDescription:
          'Accesibilidad del skeleton de Needless UI: marcadores ocultos, regiones con aria-busy, movimiento reducido y colores forzados.',
        overview: [
          'Los skeletons mantienen la forma del contenido que aún se está cargando, para que la página no salte cuando llegue. Dales tamaño con CSS.',
          'El brillo está fijado al viewport: un único reflejo recorre a la vez todos los skeletons de la página, sea cual sea su tamaño o su posición.',
        ],
        examples: {
          card: {
            title: 'Cargando una tarjeta',
            text: 'Líneas, un círculo y un bloque en lugar de un perfil. La tarjeta tiene <code>aria-busy</code> mientras carga.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Un marcador de posición, oculto para las tecnologías de asistencia.',
            members: {
              shape: '<code>text</code> (una línea), <code>circle</code> o <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Los skeletons están ocultos para los lectores de pantalla. Pon <code>aria-busy="true"</code> en la región que está cargando y quítalo cuando llegue el contenido.',
          'No hay brillo cuando se prefiere movimiento reducido.',
          'En el modo de colores forzados, cada skeleton recibe un contorno.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notificaciones toast para Angular',
        summary: 'Mensajes breves que se apilan, se descartan deslizando y nunca roban el foco.',
        description:
          'Toasts accesibles para Angular: una pila en la capa superior, toasts de promesas, acciones de deshacer, deslizar para descartar y temporizadores que se pausan.',
        apiDescription:
          'Referencia de la API de los toasts de Needless UI: el servicio NuiToaster, sus opciones y los toasts de promesas, y la región nui-toaster.',
        a11yDescription:
          'Interacción con el teclado y accesibilidad de los toasts de Needless UI: anuncios, el atajo Alt + T, Esc y temporizadores en pausa.',
        overview: [
          'Los toasts confirman lo que acaba de pasar, u ofrecen una acción como «Deshacer», sin interrumpir. Pon un <code>&lt;nui-toaster&gt;</code> en el shell de la aplicación y luego llama a <code>NuiToaster</code> desde cualquier parte.',
          'Se apilan detrás del más reciente y se despliegan en abanico al pasar el puntero o al recibir el foco, todo con el resorte elegido. Un deslizamiento lateral descarta uno. Los temporizadores se pausan mientras la pila tiene el puntero encima o el foco, y mientras la página está en segundo plano.',
        ],
        examples: {
          tones: {
            title: 'Tonos',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> y <code>danger()</code>. Los toasts de peligro duran más y se anuncian de forma prioritaria.',
          },
          actions: {
            title: 'Acciones y promesas',
            text: 'Una <code>action</code> añade un botón como «Deshacer». <code>promise()</code> muestra un indicador de carga y después se convierte en el resultado.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'El servicio que muestra los toasts. Inyéctalo donde quieras.',
            members: {
              toasts: 'Todos los toasts en pantalla, del más reciente al más antiguo.',
              show: 'Muestra un toast. Pasa un título, u opciones con descripción, tono, duración, acción o id.',
              success: 'Muestra un toast de éxito.',
              warning: 'Muestra un toast de advertencia.',
              danger:
                'Muestra un toast de peligro. Dura 8 segundos y se anuncia de forma prioritaria.',
              promise:
                'Muestra un toast de carga hasta que la promesa se resuelve o se rechaza, y luego su mensaje de éxito o de peligro.',
              dismiss: 'Descarta un toast, o todos.',
            },
          },
          NuiToasterRegion: {
            summary:
              'La región donde aparecen los toasts. Colócala una sola vez, en el shell de la aplicación.',
            members: {
              position:
                'Esquina o borde del viewport. El inicio y el final siguen la dirección del texto.',
              expanded: 'Mantiene la pila desplegada.',
              label: 'Nombre accesible de la región. Indica cómo llegar a ella.',
              closeLabel: 'Nombre accesible de los botones de cierre.',
              hotkey:
                'La tecla, como <code>KeyboardEvent.code</code>, que junto con Alt lleva el foco al toast más reciente.',
            },
          },
        },
        keyboard: [
          ['Alt + T', 'Lleva el foco al toast más reciente.'],
          ['Tab', 'Recorre los toasts, sus acciones y sus botones de cierre.'],
          ['Esc', 'Descarta el toast enfocado.'],
        ],
        notes: [
          'Cada toast se anuncia al aparecer: de forma cortés, o prioritaria en los de peligro. Los toasts nunca toman el foco.',
          'Los temporizadores se pausan mientras la pila tiene el puntero encima o el foco y mientras la página está oculta, y los toasts que esperan una promesa nunca caducan.',
          'Todo lo que requiera una acción del usuario debería estar también fuera del toast.',
          'Con el movimiento reducido, los toasts no se animan ni se deslizan, y la línea del temporizador se oculta.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox y autocompletado para Angular',
        summary: 'Un campo de texto que sugiere opciones mientras escribes.',
        description:
          'Combobox accesible para Angular: búsqueda difusa con resaltado, varios valores como chips, valores nuevos a partir del texto y resultados de un servidor.',
        apiDescription:
          'Referencia de la API del combobox de Needless UI: nui-combobox con value, values, multiple, create, filtering, loading y clearable, y filas personalizadas.',
        a11yDescription:
          'Teclado y accesibilidad del combobox de Needless UI: combobox editable con autocompletado de lista, descendiente activo, chips y entrada con IME.',
        overview: [
          'El combobox es un campo de texto con una lista de sugerencias. La búsqueda es difusa e ignora los acentos: las mejores coincidencias salen primero y las letras coincidentes se resaltan. Acepta los mismos objetos <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> que el select.',
          'Con <code>multiple</code>, las opciones elegidas pasan a ser chips antes del texto, y <code>create</code> convierte el texto escrito en un valor nuevo. Para resultados de un servidor, desactiva <code>filtering</code>, busca en <code>(queryChange)</code> y activa <code>loading</code> mientras esperas.',
        ],
        examples: {
          country: {
            title: 'Búsqueda',
            text: 'Las letras coincidentes no tienen que estar juntas, y las <code>keywords</code> también cuentan. <code>clearable</code> añade un botón para borrar, y Esc también borra el valor.',
          },
          tags: {
            title: 'Chips y valores nuevos',
            text: '<code>multiple</code> muestra chips y enlaza <code>[(values)]</code>. Si el texto aún no es una opción, <code>create</code> ofrece añadirlo.',
          },
          people: {
            title: 'Resultados del servidor',
            text: 'La lista muestra lo que envió el servidor, sin filtrar, con una fila de carga mientras espera. Las etiquetas elegidas se conservan cuando llegan resultados nuevos.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Un campo de texto que sugiere opciones mientras escribes.',
            members: {
              options:
                'Las opciones, como objetos <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'El valor elegido, o <code>null</code>. También funciona con formularios.',
              values: 'Los valores elegidos, con <code>multiple</code>.',
              multiple: 'Permite elegir varias opciones, que se muestran como chips.',
              create:
                'Crea un valor a partir del texto escrito. La lista ofrece entonces añadir el texto que no sea una opción.',
              filtering:
                'Filtra las opciones mientras escribes. Desactívalo cuando las filtre un servidor.',
              loading: 'Muestra una fila de carga mientras llegan los resultados.',
              clearable: 'Añade un botón que borra el valor y permite borrarlo con Esc.',
              placeholder: 'Texto que se muestra mientras el campo está vacío.',
              label:
                'Nombre accesible, cuando ningún <code>&lt;label&gt;</code> da nombre al campo.',
              inputId: 'Id del campo de texto, para <code>&lt;label for&gt;</code>.',
              disabled: 'Desactiva el campo.',
              compareWith:
                'Indica si dos valores son la misma opción, para valores que son objetos.',
              displayWith:
                'Texto para un valor que no está entre las opciones, como uno definido antes de que se carguen.',
              virtual:
                'Renderiza solo las filas visibles: siempre, nunca, o <code>auto</code> con más de 200 filas.',
              queryChange:
                'Emite el texto a medida que se escribe, para una búsqueda en el servidor.',
              openChange: 'Emite cuando la lista se abre o se cierra.',
              show: 'Abre la lista.',
              hide: 'Cierra la lista.',
              clear: 'Borra el valor y el texto.',
              focus: 'Pone el foco en el campo de texto.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ponlo en un <code>ng-template</code> dentro del componente para dibujar tú cada fila. El contexto contiene la opción y su fila.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Dibuja la etiqueta de una opción con las letras coincidentes resaltadas, su descripción y su ruta, para tus propias filas.',
            members: { nuiOptionText: 'La fila, del contexto de la plantilla.' },
          },
        },
        keyboard: [
          ['Flechas abajo y arriba', 'Abre la lista y luego recorre las opciones.'],
          ['Av Pág y Re Pág', 'Avanza o retrocede diez opciones.'],
          ['Intro', 'Elige la opción activa.'],
          ['Alt + flecha abajo o arriba', 'Abre o cierra la lista.'],
          ['Esc', 'Cierra la lista; después borra el texto, o el valor si se puede borrar.'],
          ['Retroceso', 'En un campo vacío, quita el último chip.'],
          [
            'Flecha izquierda',
            'Desde el inicio del texto (flecha derecha en texto de derecha a izquierda), pasa a los chips. Allí, Retroceso o Supr quitan un chip.',
          ],
        ],
        notes: [
          'El campo de texto es un <code>combobox</code> con <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> y <code>aria-controls</code>. El foco se queda en él, y <code>aria-activedescendant</code> apunta a la opción activa.',
          'Los chips forman una lista con nombre, y cada botón para quitar lleva el nombre de su chip, como «Remove Italy».',
          '«No matches» y la fila de carga son mensajes de estado, así que los lectores de pantalla los anuncian.',
          'Las teclas que confirman una composición del IME, como en chino o japonés, se dejan al IME.',
        ],
      },
      command: {
        name: 'Paleta de comandos',
        title: 'Componente de paleta de comandos para Angular',
        summary: 'Todos los comandos de tu aplicación, a una pulsación de distancia.',
        description:
          'Paleta de comandos accesible para Angular: ⌘K desde cualquier sitio, búsqueda difusa en páginas anidadas, grupos y atajos con la notación de cada plataforma.',
        apiDescription:
          'Referencia de la API de la paleta de comandos de Needless UI: nui-command-palette con commands, hotkey, bindShortcuts y loop, y la forma de NuiCommand.',
        a11yDescription:
          'Teclado y accesibilidad de la paleta de comandos de Needless UI: diálogo modal con combobox de búsqueda, descendiente activo y navegación entre páginas.',
        overview: [
          'La paleta de comandos es un campo para buscar entre los comandos de tu aplicación, en un diálogo modal. ⌘K la abre desde cualquier sitio (Ctrl+K en Windows y Linux). Elige un comando: la paleta se cierra y luego lo ejecuta.',
          'Los comandos pueden tener un grupo, una descripción, palabras clave y un atajo, que se muestra con los símbolos de cada plataforma. Un comando con <code>children</code> abre una página con más comandos, y desde el nivel superior la búsqueda llega también a las páginas.',
        ],
        examples: {
          palette: {
            title: 'Comandos y páginas',
            text: 'Grupos, atajos, un comando desactivado y dos páginas. <code>(run)</code> te dice qué se ejecutó; el <code>run</code> propio de cada comando también funciona.',
          },
          people: {
            title: 'Filas personalizadas',
            text: 'Un <code>nuiOptionTemplate</code> dibuja cada fila, y <code>nuiOptionText</code> conserva las coincidencias resaltadas. <code>[hotkey]="null"</code> deja ⌘K a la paleta de arriba.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Un diálogo modal con un campo para buscar entre tus comandos.',
            members: {
              commands: 'Los comandos, como objetos <code>NuiCommand</code>.',
              open: 'Indica si la paleta está abierta.',
              hotkey:
                'El atajo que la abre y la cierra desde cualquier sitio, o <code>null</code> para ninguno. <code>mod</code> es ⌘ en dispositivos Apple y Ctrl en los demás.',
              bindShortcuts:
                'También ejecuta los comandos con sus propios atajos, en cualquier parte de la página.',
              loop: 'Bajar desde el último comando lleva al primero, y subir desde el primero, al último.',
              filtering:
                'Filtra mientras escribes. Desactívalo cuando un servidor filtre los comandos.',
              loading: 'Muestra una fila de carga mientras llegan los resultados.',
              hints: 'Muestra abajo las teclas que puedes usar.',
              virtual:
                'Renderiza solo las filas visibles: siempre, nunca, o <code>auto</code> con más de 200 filas.',
              label: 'Nombre accesible del diálogo y de su campo de búsqueda.',
              placeholder: 'Texto que se muestra en el campo de búsqueda vacío.',
              run: 'Emite cada comando que se ejecuta.',
              queryChange:
                'Emite el texto a medida que se escribe, para una búsqueda en el servidor.',
              show: 'Abre la paleta.',
              hide: 'Cierra la paleta.',
              toggle: 'Abre la paleta, o la cierra.',
              back: 'Vuelve a la página anterior.',
            },
          },
          NuiCommand: {
            summary: 'Un comando, o una página de comandos.',
            members: {
              label: 'El texto que se muestra y se busca.',
              description: 'Texto secundario bajo la etiqueta.',
              group: 'Los comandos del mismo grupo se listan bajo ese encabezado.',
              keywords: 'Más palabras con las que coincide la búsqueda, como sinónimos.',
              shortcut: 'Teclas que se muestran junto a él, como <code>mod+shift+p</code>.',
              disabled: 'Se muestra, pero no se puede ejecutar.',
              children: 'Comandos un nivel más abajo: elegir este los abre como una página.',
              run: 'Se ejecuta al elegirlo, una vez cerrada la paleta.',
              id: 'Para tu propio uso, como distinguir comandos en <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K o Ctrl+K', 'Abre o cierra la paleta.'],
          ['Flechas abajo y arriba', 'Recorre los comandos, dando la vuelta en los extremos.'],
          ['Av Pág y Re Pág', 'Avanza o retrocede diez comandos.'],
          ['Intro', 'Ejecuta el comando activo, o abre su página.'],
          ['Esc', 'Vuelve una página atrás; en el nivel superior, cierra la paleta.'],
          ['Retroceso', 'En un campo vacío dentro de una página, vuelve atrás.'],
        ],
        notes: [
          'Es un <code>&lt;dialog&gt;</code> modal nativo: la página de detrás queda inerte, el foco se mantiene dentro y, al cerrar, el foco vuelve a donde estaba.',
          'El campo de búsqueda es un <code>combobox</code> que apunta al comando activo con <code>aria-activedescendant</code>. En una página, toma el nombre de la página.',
          'Las teclas de los atajos son texto en cada opción, así que los lectores de pantalla las leen. Las indicaciones de teclas de abajo se ocultan a las tecnologías de asistencia.',
          'Los atajos sin Ctrl, Alt o ⌘ no se ejecutan mientras escribes en un campo.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Componentes popover y hovercard para Angular',
        summary: 'Paneles flotantes junto a un botón y tooltips enriquecidos al pasar el puntero.',
        description:
          'Popover y hovercard accesibles para Angular con la API popover nativa: posición que cambia de lado y sigue, flechas, cierre con clic fuera y retardos de hover.',
        apiDescription:
          'Referencia de la API del popover de Needless UI: nuiPopover y nuiHovercard con side, align, offset y arrow, y sus directivas de disparador.',
        a11yDescription:
          'Teclado y accesibilidad del popover y la hovercard de Needless UI: roles dialog y tooltip, retorno del foco, Esc y WCAG 1.4.13.',
        overview: [
          'Un popover es un panel pequeño que se abre junto a un botón, para contenido interactivo: filtros, un formulario corto, un selector de color. Es un <code>popover="auto"</code> nativo, así que el navegador lo cierra con Esc o con un clic fuera, devuelve el foco y lo coloca justo después de su disparador en el orden de tabulación.',
          'Una hovercard es un tooltip enriquecido. Se abre tras pasar el puntero un momento, o al instante con el foco del teclado, y describe su disparador. Sigue abierta cuando el puntero se mueve sobre ella, para que su texto se pueda leer y seleccionar.',
          'Ambos cambian al lado opuesto cuando no hay espacio, se mantienen en pantalla y siguen a su disparador cuando la página se desplaza.',
        ],
        examples: {
          filters: {
            title: 'Filtros',
            text: 'Un popover con un formulario dentro. <code>arrow</code> lo hace apuntar a su disparador, y <code>hide()</code> lo cierra desde el código.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Pasa el puntero sobre un nombre, o llega a él con Tab. La tarjeta describe el enlace, así que los lectores de pantalla la leen después del nombre.',
          },
          sides: {
            title: 'Lados y animaciones de entrada',
            text: '<code>side</code> y <code>align</code> definen dónde se abre; <code>start</code> y <code>end</code> siguen la dirección de escritura. <code>enter</code> y <code>motion</code> definen cómo entra en escena.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Un popover nativo colocado junto al elemento que lo abrió.',
            members: {
              side: 'El lado del disparador en el que se abre. Cambia al opuesto si no hay espacio.',
              align: 'Cómo se alinea con el disparador a lo largo de ese lado.',
              offset: 'Separación entre el disparador y el panel, en píxeles.',
              arrow: 'Muestra una flecha que apunta al disparador.',
              openChange: 'Emite cuando se abre o se cierra.',
              show: 'Lo abre junto a cualquier elemento.',
              hide: 'Lo cierra.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Un botón que abre y cierra un popover, con el <code>popovertarget</code> nativo.',
            members: { nuiPopoverTrigger: 'El popover que se abre.' },
          },
          NuiHovercard: {
            summary: 'Un tooltip enriquecido que describe su disparador.',
            members: {
              side: 'El lado del disparador en el que se abre. Cambia al opuesto si no hay espacio.',
              align: 'Cómo se alinea con el disparador a lo largo de ese lado.',
              offset: 'Separación entre el disparador y la tarjeta, en píxeles.',
              arrow: 'Muestra una flecha que apunta al disparador.',
              openDelay:
                'Milisegundos con el puntero encima antes de abrirse. El foco del teclado la abre al instante.',
              closeDelay: 'Milisegundos antes de cerrarse, una vez que el puntero se ha ido.',
              openChange: 'Emite cuando se abre o se cierra.',
              show: 'La abre junto a cualquier elemento.',
              hide: 'La cierra.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Muestra una hovercard al pasar el puntero y con el foco del teclado, y la convierte en la descripción de este elemento.',
            members: { nuiHovercardTrigger: 'La hovercard que se muestra.' },
          },
        },
        keyboard: [
          ['Intro o Espacio en el disparador', 'Abre o cierra el popover.'],
          ['Tab', 'Entra en un popover abierto, que va justo después de su disparador.'],
          ['Esc', 'Cierra el popover y devuelve el foco a su disparador, u oculta la hovercard.'],
        ],
        notes: [
          'El popover es un <code>dialog</code> no modal: ponle nombre con <code>aria-label</code> o <code>aria-labelledby</code>. Su disparador recibe <code>aria-haspopup</code> y el <code>aria-expanded</code> del navegador.',
          'La hovercard es un <code>tooltip</code> y el <code>aria-describedby</code> de su disparador, así que su texto se lee junto con el disparador. No pongas controles en ella; para eso, usa un popover.',
          'La hovercard cumple el criterio WCAG 1.4.13: Esc la oculta sin mover el foco, el puntero puede moverse sobre ella y permanece mientras tenga el puntero encima o el foco.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Componente select para Angular',
        summary: 'Elige una opción o varias, de una lista corta o de una enorme.',
        description:
          'Select accesible para Angular: simple o múltiple, grupos, árboles, búsqueda al escribir, seleccionar todo y desplazamiento virtual para listas enormes.',
        apiDescription:
          'Referencia de la API del select de Needless UI: nui-select con value, values, multiple, selectAll y virtual, la forma de NuiOption y filas personalizadas.',
        a11yDescription:
          'Teclado y accesibilidad del select de Needless UI: combobox de solo selección con listbox o árbol, descendiente activo, búsqueda al escribir y teclas de árbol.',
        overview: [
          'El select es un botón que abre una lista de opciones. Pásale <code>options</code>, un array de <code>NuiOption</code>, y enlaza <code>[(value)]</code>, o <code>[(values)]</code> con <code>multiple</code>. También funciona con Signal Forms, formularios reactivos y <code>ngModel</code>.',
          'Las opciones pueden tener un <code>group</code>, una <code>description</code> y <code>keywords</code>, y <code>children</code> convierte la lista en un árbol. Con más de 200 filas solo se renderizan las visibles, así que 100 000 opciones se abren tan rápido como diez.',
          'Si prefieres escribir y filtrar, usa el <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Grupos',
            text: 'Las opciones con un <code>group</code> se listan bajo su encabezado. Escribir una letra salta a la siguiente opción que empieza por ella.',
          },
          toppings: {
            title: 'Varias a la vez',
            text: '<code>multiple</code> mantiene la lista abierta y enlaza <code>[(values)]</code>. <code>selectAll</code> añade un botón que marca o desmarca todas las opciones. Las opciones desactivadas no se pueden elegir.',
          },
          folders: {
            title: 'Árbol',
            text: 'Las opciones con <code>children</code> forman un árbol. La lista se abre con las carpetas de la opción elegida desplegadas.',
          },
          zones: {
            title: 'Listas largas',
            text: 'Todas las zonas horarias, por región. Con más de 200 filas solo se renderizan las visibles, y la opción activa sigue renderizada para los lectores de pantalla.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Un botón que abre una lista de opciones.',
            members: {
              options: 'Las opciones, como objetos <code>NuiOption</code>.',
              value: 'El valor elegido, o <code>null</code>. También funciona con formularios.',
              values: 'Los valores elegidos, con <code>multiple</code>.',
              multiple: 'Permite elegir varias opciones. La lista sigue abierta mientras eliges.',
              selectAll:
                'Con <code>multiple</code>, añade un botón que marca o desmarca todas las opciones.',
              placeholder: 'Texto que se muestra mientras no hay nada elegido.',
              label:
                'Nombre accesible, cuando ningún <code>&lt;label&gt;</code> da nombre al botón.',
              triggerId: 'Id del botón, para <code>&lt;label for&gt;</code>.',
              disabled: 'Desactiva el select.',
              compareWith:
                'Indica si dos valores son la misma opción, para valores que son objetos.',
              virtual:
                'Renderiza solo las filas visibles: siempre, nunca, o <code>auto</code> con más de 200 filas.',
              openChange: 'Emite cuando la lista se abre o se cierra.',
              show: 'Abre la lista.',
              hide: 'Cierra la lista.',
              focus: 'Pone el foco en el botón.',
            },
          },
          NuiOption: {
            summary: 'Una opción. La aceptan el select, el combobox y la paleta de comandos.',
            members: {
              value: 'Lo que se asigna al elegirla. De cualquier tipo.',
              label: 'El texto que se muestra y se busca.',
              description: 'Texto secundario bajo la etiqueta.',
              group: 'Las opciones del mismo grupo se listan bajo ese encabezado, en orden.',
              keywords: 'Más palabras con las que coincide la búsqueda, como sinónimos o códigos.',
              disabled: 'Se muestra, pero no se puede elegir.',
              children: 'Opciones un nivel más abajo, que convierten la lista en un árbol.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ponlo en un <code>ng-template</code> dentro del componente para dibujar tú cada fila. El contexto contiene la opción y su fila.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Dibuja la etiqueta de una opción con las letras coincidentes resaltadas, su descripción y su ruta, para tus propias filas.',
            members: { nuiOptionText: 'La fila, del contexto de la plantilla.' },
          },
        },
        keyboard: [
          ['Flechas abajo y arriba', 'Abre la lista y luego recorre las opciones.'],
          ['Inicio y Fin', 'Va a la primera o a la última opción.'],
          ['Av Pág y Re Pág', 'Avanza o retrocede diez opciones.'],
          ['Intro o Espacio', 'Abre la lista, o elige la opción activa.'],
          ['Letras', 'Salta a la siguiente opción que empieza por ellas.'],
          [
            'Flechas derecha e izquierda',
            'En un árbol, despliega una opción o va a su primer hijo; la contrae o va a su padre. Las flechas se invierten en texto de derecha a izquierda.',
          ],
          ['Alt + flecha arriba', 'Elige la opción activa y cierra la lista.'],
          ['Tab', 'Con selección simple, elige la opción activa y sigue adelante.'],
          ['Esc', 'Cierra la lista sin elegir.'],
        ],
        notes: [
          'El botón es un <code>combobox</code> de solo selección con <code>aria-expanded</code> y <code>aria-controls</code>. El foco se queda en él, y <code>aria-activedescendant</code> apunta a la opción activa.',
          'La lista es un <code>listbox</code>, o un <code>tree</code> con <code>aria-level</code> y <code>aria-expanded</code>. <code>aria-setsize</code> y <code>aria-posinset</code> siguen siendo correctos cuando solo se renderizan algunas filas.',
          'La opción activa tiene un relleno sólido y, en el modo de colores forzados, un contorno.',
          'Ponle nombre con un <code>&lt;label for&gt;</code> que apunte a <code>triggerId</code>, o con <code>label</code>.',
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
      customization: {
        title: 'Personalización',
        description:
          'Física de resortes, efectos al pulsar, animaciones de entrada, formas de esquina, radio y densidad: ajusta Needless UI en toda la aplicación o por componente.',
        blocks: [
          {
            kind: 'p',
            html: 'Cada componente tiene una personalidad que puedes cambiar: el resorte con el que se mueve, lo que hace un botón bajo tu dedo, cómo entran en escena los diálogos y los menús, la forma y el tamaño de sus esquinas, y cuánto espacio ocupa. Cada rasgo es un atributo para todo lo que hay dentro de un elemento, o un input para un solo componente.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Un atributo, todo un subárbol' },
          {
            kind: 'p',
            html: 'Pon los atributos <code>data-nui-*</code> en <code>&lt;body&gt;</code> para toda la aplicación, o en cualquier elemento para una parte de ella. Gana el más cercano, por lo que se pueden anidar. Solo definen propiedades personalizadas de CSS, así que funcionan igual con cualquier framework, o sin ninguno.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Un solo componente' },
          {
            kind: 'p',
            html: 'En Angular, <code>nuiButton</code>, <code>nuiDialog</code> y <code>nuiMenu</code> aceptan los mismos valores como inputs. Los inputs que no definas toman el valor de los atributos que rodean al componente.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Resortes compilados a CSS' },
          {
            kind: 'p',
            html: 'El movimiento es física de resortes: rigidez, amortiguamiento y masa en lugar de una duración y una curva. El compilador de tokens resuelve cada resorte y lo escribe en CSS como el tiempo que tarda en estabilizarse y una función de easing <code>linear()</code>, así que se ejecuta en el compositor sin JavaScript. Seis resortes vienen incluidos como tokens, de <code>--nui-spring-snappy</code> a <code>--nui-spring-mechanical</code>, y <code>--nui-motion</code> contiene el que está en uso.',
          },
          {
            kind: 'p',
            html: 'Cualquier otro resorte está a un input de distancia. Angular lo compila en tiempo de ejecución con el mismo solucionador, y <code>springTransition()</code> te da el CSS para tus propios elementos.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Cualquier punto intermedio' },
          {
            kind: 'p',
            html: 'Los valores predefinidos son atajos. Para todo lo demás, define tú mismo las propiedades personalizadas: cualquier transformación para <code>--nui-press</code> y <code>--nui-enter</code>, cualquier número para <code>--nui-radius-scale</code> y <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Accesibilidad' },
          {
            kind: 'p',
            html: 'Cuando el sistema pide reducir el movimiento, los resortes se vuelven instantáneos, y ni los efectos al pulsar ni las animaciones de entrada se mueven. La densidad nunca deja un control por debajo del tamaño mínimo de objetivo de 24 px de las WCAG 2.2, y ningún valor predefinido toca los colores, así que todas las comprobaciones de contraste se siguen cumpliendo. Los navegadores sin <code>corner-shape</code> dibujan todas las esquinas redondeadas.',
          },
        ],
      },
    },
    playground: {
      label: 'Zona de pruebas de personalización',
      motion: 'Movimiento',
      custom: 'personalizado',
      stiffness: 'Rigidez',
      damping: 'Amortiguamiento',
      mass: 'Masa',
      press: 'Pulsación',
      enter: 'Entrada',
      corners: 'Esquinas',
      radius: 'Radio',
      density: 'Densidad',
      surprise: 'Sorpréndeme',
      reset: 'Restablecer',
      hint: 'Mantén pulsado un botón y luego suéltalo. Abre el diálogo y el menú para ver cómo entran en escena.',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      openDialog: 'Abrir diálogo',
      openMenu: 'Abrir menú',
      menu: ['Cambiar nombre', 'Duplicar', 'Eliminar'],
      dialogTitle: 'Innecesariamente animado',
      dialogText: 'Este diálogo apareció exactamente como le indicaste.',
      close: 'Cerrar',
      curve:
        'La posición del resorte a lo largo del tiempo. Empieza abajo y se detiene en la línea discontinua.',
      settles: (ms, overshoot) => `Se estabiliza en ${ms} ms · sobrepasa un ${overshoot} %`,
      instant: 'Sin movimiento: todo salta directamente a su destino.',
      stuck:
        'Este resorte no se estabiliza en menos de 10 segundos. Aumenta el amortiguamiento o la rigidez; mientras tanto, los componentes conservan el último que sí lo hizo.',
      reducedMotion:
        'Tu sistema pide reducir el movimiento, así que aquí nada se mueve. Los resortes, los efectos al pulsar y las animaciones de entrada vuelven cuando deja de pedirlo.',
      noCornerShape:
        'Este navegador aún no puede dibujar formas de esquina, así que todas las esquinas siguen redondeadas.',
      everywhere: 'En cualquier elemento, para todo lo que contiene:',
      oneComponent: 'En un solo componente, con Angular:',
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
