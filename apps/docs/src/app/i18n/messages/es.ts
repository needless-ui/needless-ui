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
      grid: {
        name: 'Cuadrícula de datos',
        title: 'Componente de cuadrícula de datos para Angular',
        summary: 'Ordena, filtra, selecciona, edita y desplázate por cualquier cantidad de filas.',
        description:
          'Cuadrícula de datos accesible para Angular sobre tabla nativa: orden multicolumna, filtros, páginas o scroll virtual, selección, edición y columnas movibles.',
        apiDescription:
          'Referencia de la API de la cuadrícula de datos de Needless UI: inputs y modelos de nui-grid, la forma de NuiGridColumn y plantillas para celdas personalizadas.',
        a11yDescription:
          'Teclado y accesibilidad de la cuadrícula de datos de Needless UI: tabla nativa con roles de grid, una sola parada de tabulación, flechas y anuncios.',
        overview: [
          'La cuadrícula de datos es una tabla nativa que ordena, filtra, pagina y edita. Describe las <code>columns</code>, pasa las <code>rows</code> y cada celda se formatea según su tipo y la configuración regional: números, monedas, fechas, sí y no, y etiquetas para los valores <code>enum</code>.',
          'Su estado está en modelos que puedes enlazar, guardar y enviar a un servidor: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code> y <code>columnState</code> para los anchos, el orden, las columnas fijadas y las ocultas que elijan los usuarios. Sin paginación, solo se renderizan las filas visibles, así que 100 000 filas se desplazan igual que diez.',
          'Todas las celdas se alcanzan con el teclado, y el panel de cada columna permite ordenarla, filtrarla, fijarla, moverla, ajustarla al contenido y ocultarla.',
        ],
        examples: {
          orders: {
            title: 'Búsqueda, orden y paginación',
            text: 'Escribe para buscar en todas las columnas. Haz clic en un encabezado para ordenar, y usa Mayús + clic para añadir una segunda columna. <code>nuiGridCell</code> dibuja el estado, y <code>exportCsv()</code> entrega lo que se muestra.',
          },
          selection: {
            title: 'Selección',
            text: '<code>selection="multiple"</code> añade casillas y enlaza las claves de las filas seleccionadas. Mayús + clic selecciona un rango; la casilla del encabezado selecciona todas las filas que coinciden.',
          },
          editing: {
            title: 'Edición',
            text: 'Haz doble clic en una celda, pulsa Intro o simplemente escribe. <code>validate</code> mantiene el editor abierto con un mensaje; una edición confirmada actualiza <code>rows</code> y emite <code>cellEdit</code>.',
          },
          big: {
            title: '100 000 filas',
            text: 'Sin paginación, solo se renderizan las filas visibles. Las columnas fijadas se quedan en los bordes, y <code>columnState</code> conserva la disposición que eligen los usuarios.',
          },
          server: {
            title: 'Datos del servidor',
            text: 'En el modo <code>server</code>, la cuadrícula muestra las filas tal como llegan y notifica cada cambio en <code>queryChange</code>. Activa <code>loading</code> mientras obtienes los datos.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Una cuadrícula de datos sobre una tabla nativa.',
            members: {
              rows: 'Los datos. Las ediciones reemplazan filas, así que enlázalos con <code>[(rows)]</code>.',
              columns: 'Las columnas, como objetos <code>NuiGridColumn</code>.',
              rowId: 'La clave de una fila, para selección y seguimiento.',
              label: 'Nombre accesible de la cuadrícula.',
              selection: 'Si se pueden seleccionar filas, y cuántas.',
              selected: 'Las claves de las filas seleccionadas.',
              sort: 'El orden, como objetos <code>{ column, direction }</code>; el primero ordena primero.',
              filters: 'Un filtro por id de columna: un operador y un valor.',
              search: 'Palabras que deben aparecer todas en una fila.',
              pageSize: 'Filas por página, o 0 para una sola lista desplazable.',
              page: 'La página mostrada, desde 0.',
              pageSizes: 'Las opciones del paginador.',
              virtual:
                'Renderiza solo las filas visibles: siempre, nunca, o <code>auto</code> con más de 100 filas sin paginación.',
              height: 'Una longitud CSS que limita la cuadrícula; se desplaza por dentro.',
              columnState:
                'Ancho, orden, fijación y visibilidad de cada columna, para guardar y restaurar.',
              mode: '<code>server</code> muestra las filas tal como llegan y te deja a ti ordenar, filtrar y paginar.',
              total: 'El número de filas en el servidor.',
              loading:
                'Muestra una barra de progreso, y filas provisionales mientras no hay ninguna.',
              locale: 'Da formato a números y fechas, y lee los números escritos.',
              labels: 'Todos los textos que la cuadrícula muestra o anuncia, para traducirlos.',
              rowActivate: 'Emite una fila abierta con Intro o con doble clic.',
              cellEdit: 'Emite cada edición confirmada.',
              queryChange:
                'Emite el orden, los filtros, la búsqueda y la página cada vez que cambian.',
              exportCsv: 'Las filas filtradas y ordenadas de las columnas visibles, en CSV.',
              focusCell: 'Pone el foco en una celda; la fila <code>-1</code> es el encabezado.',
              clearFilters: 'Borra todos los filtros y la búsqueda.',
            },
          },
          NuiGridColumn: {
            summary: 'Una columna. Solo <code>id</code> y <code>header</code> son obligatorios.',
            members: {
              id: 'Único; la clave en el orden, los filtros y el estado de las columnas.',
              header: 'El texto del encabezado.',
              value:
                'Una clave de la fila, o una función de la fila. Por defecto, <code>row[id]</code>.',
              type: 'Determina la alineación, el orden, el filtro y el editor.',
              format:
                'Opciones de <code>Intl</code> para números y fechas, o una función que genera el texto.',
              options:
                'Las opciones de una columna <code>enum</code>, como objetos <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'En píxeles.',
              flex: 'Reparte el espacio sobrante con las demás columnas <code>flex</code>.',
              align: 'Por defecto, según el tipo: números y fechas al final.',
              'pinned, hidden': 'Fijación y visibilidad iniciales de la columna.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Cada una se puede desactivar con <code>false</code>.',
              compare: 'Un orden personalizado.',
              'editable, validate':
                'Si las celdas se pueden editar, y un mensaje cuando un valor no es válido.',
              set: 'Crea la fila editada. Por defecto, una copia con el valor nuevo.',
            },
          },
          NuiGridCell: {
            summary:
              'Dibuja las celdas de una columna. El contexto contiene la fila, el valor y el texto.',
            members: { nuiGridCell: 'El id de la columna.' },
          },
          NuiGridHeader: {
            summary: 'Dibuja el encabezado de una columna.',
            members: { nuiGridHeader: 'El id de la columna.' },
          },
          NuiGridEmpty: {
            summary:
              'Lo que se muestra cuando no hay filas. El contexto indica si los filtros las ocultaron.',
            members: {},
          },
        },
        keyboard: [
          [
            'Flechas',
            'Mueven el foco una celda. Izquierda y derecha se invierten en texto de derecha a izquierda.',
          ],
          [
            'Inicio y Fin',
            'Va a la primera o a la última celda de la fila; con Ctrl, de la cuadrícula.',
          ],
          ['Av Pág y Re Pág', 'Avanza o retrocede una pantalla de filas.'],
          [
            'Intro o Espacio en un encabezado',
            'Ordena por la columna; con Mayús, la añade al orden.',
          ],
          ['Alt + flecha abajo en un encabezado', 'Abre el panel de la columna.'],
          [
            'Alt + flecha izquierda o derecha en un encabezado',
            'Estrecha o ensancha la columna; con Mayús, la mueve.',
          ],
          ['Intro en una celda', 'Edita la celda, o abre la fila si no se puede editar.'],
          ['F2, o escribir', 'Edita la celda.'],
          ['Intro, Esc y Tab al editar', 'Confirma, cancela, o confirma y pasa a la siguiente.'],
          ['Espacio', 'Selecciona la fila; con Mayús, las filas desde la última seleccionada.'],
          ['Ctrl + A', 'Selecciona todas las filas.'],
        ],
        notes: [
          'Una <code>&lt;table&gt;</code> nativa con <code>role="grid"</code>, que toma su nombre de <code>label</code>. Los encabezados llevan <code>aria-sort</code>, y las filas seleccionables, <code>aria-selected</code>.',
          'La cuadrícula es una sola parada de tabulación. El foco pasa de celda en celda con un <code>tabindex</code> itinerante, así que los lectores de pantalla leen cada celda con sus encabezados de fila y de columna.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> y <code>aria-colindex</code> siguen siendo correctos cuando las filas se paginan o se virtualizan.',
          'El orden, los filtros, la paginación y los errores de edición se anuncian de forma cortés en una región de estado.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Componente de chat con IA para Angular',
        summary:
          'Habla con un modelo: respuestas en streaming, herramientas, versiones y archivos.',
        description:
          'Chat accesible en Angular para asistentes de IA: respuestas Markdown en streaming, razonamiento, herramientas, fuentes, archivos y reintentos como versiones.',
        apiDescription:
          'Referencia de la API del chat de Needless UI: inputs de nui-chat, la NuiChatSession, mensajes, plantillas de herramientas y lectores de streams de respuesta.',
        a11yDescription:
          'Teclado y accesibilidad del chat de Needless UI: un feed de mensajes con nombre, Re Pág y Av Pág, y respuestas que se anuncian al completarse.',
        overview: [
          'El chat es todo lo que hay entre tus usuarios y un modelo. Crea una <code>NuiChatSession</code> con una función <code>respond</code> y <code>&lt;nui-chat&gt;</code> hace el resto: transmite la respuesta en Markdown, la sigue página abajo hasta que el usuario se desplaza hacia arriba y, mientras llega, convierte el botón de enviar en uno de detener.',
          '<code>respond</code> devuelve texto, una promesa, una <code>async function*</code> o un Observable, así que sirve cualquier API. Además de texto, una respuesta puede llevar el razonamiento del modelo, sus llamadas a herramientas (dibujadas con tus plantillas) y las fuentes que usó. <code>nuiEventStream</code> lee los server-sent events que emiten la mayoría de las API de modelos.',
          'No se pierde nada: una respuesta reintentada o una pregunta editada pasa a ser una nueva versión junto a la anterior, y la conversación conserva todas las ramas. Los lectores de pantalla anuncian cada respuesta cuando está completa, no palabra por palabra.',
        ],
        examples: {
          assistant: {
            title: 'Un asistente',
            text: 'Las sugerencias inician la conversación. Las respuestas llegan en streaming como Markdown; detenlas, reinténtalas, valóralas o edita tu pregunta. <code>attach</code> acepta archivos elegidos, pegados o arrastrados.',
          },
          tools: {
            title: 'Razonamiento, herramientas y fuentes',
            text: 'Los deltas añaden a la respuesta el razonamiento del modelo, las llamadas a herramientas y las fuentes. <code>nuiChatTool</code> dibuja la herramienta del clima como una tarjeta; las demás se pliegan con su entrada y su salida.',
          },
          server: {
            title: 'Streaming desde un servidor',
            text: '<code>nuiEventStream</code> lee un flujo de eventos al estilo de OpenAI, y un <code>NuiChatError</code> muestra su mensaje. <code>all()</code> guarda la conversación, versiones incluidas.',
          },
        },
        api: {
          NuiChat: {
            summary: 'La conversación y el cuadro de texto, juntos.',
            members: {
              session: 'La conversación que se muestra.',
              assistant:
                'El nombre del asistente, en los encabezados que anuncian los lectores de pantalla.',
              headingLevel:
                'El nivel del encabezado de cada mensaje, que solo perciben los lectores de pantalla. Los encabezados de las respuestas bajan un nivel más.',
              announce:
                'Lo que anuncian los lectores de pantalla cuando una respuesta está completa: todo, un aviso breve o nada.',
              images: 'Muestra las imágenes de las respuestas. Si no, su texto enlaza a ellas.',
              value: 'El texto que se está escribiendo.',
              placeholder: 'El texto que se muestra en el campo vacío.',
              suggestions: 'Prompts que se envían con un clic, hasta el primer mensaje.',
              sendOn: 'Si se envía con Intro, o con Ctrl o ⌘ + Intro.',
              disabled: 'Impide enviar desde el cuadro de texto.',
              attach: 'Acepta archivos: elegidos, pegados o arrastrados.',
              accept:
                'Los tipos de archivo que se aceptan, como en <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Cuántos archivos puede llevar un mensaje.',
              maxSize: 'El tamaño máximo de archivo, en bytes.',
              labels: 'Todos los textos que el chat muestra o anuncia, para traducirlos.',
              rated:
                'Emite una respuesta que el usuario valoró, con la valoración, o <code>null</code> si la retira.',
              focus: 'Pone el foco en el campo de texto.',
              scrollToEnd: 'Se desplaza hasta el último mensaje y lo sigue.',
            },
          },
          NuiChatSession: {
            summary:
              'La conversación, sin nada de DOM. Créala en un componente con las opciones <code>respond</code>, <code>id</code> y <code>messages</code>.',
            members: {
              respond:
                'Tu función: escribe la respuesta a <code>request.messages</code> y se detiene cuando se aborta <code>request.signal</code>.',
              messages: 'La conversación en pantalla.',
              all: 'Todos los mensajes de todas las versiones, para guardarlos y volver a pasarlos como <code>messages</code>.',
              busy: 'Indica si hay una respuesta en camino.',
              send: 'Envía un mensaje y pide una respuesta.',
              stop: 'Detiene la respuesta y conserva lo que ya escribió.',
              retry: 'Vuelve a preguntar. La nueva respuesta es una versión junto a la anterior.',
              edit: 'Envía una nueva versión de uno de los mensajes del usuario.',
              versions: 'Todas las versiones de un mensaje, de la más antigua a la más nueva.',
              show: 'Cambia la conversación a esta versión.',
              rate: 'Registra la valoración del usuario sobre una respuesta.',
              'remove, load, clear':
                'Quita un mensaje y lo que le sigue, reemplaza la conversación o empieza de cero.',
            },
          },
          NuiChatMessage: {
            summary:
              'Un mensaje. Los mensajes con el mismo <code>parent</code> son versiones entre sí.',
            members: {
              'id, parent': 'La clave del mensaje y la del mensaje al que sigue.',
              role: 'Quién lo escribió.',
              text: 'Markdown del asistente, texto plano del usuario.',
              status: 'En qué punto está una respuesta, de la espera al final.',
              reasoning: 'Lo que pensó el modelo antes de responder.',
              tools: 'Las herramientas que llamó, con su estado, entrada y salida.',
              sources: 'Las páginas que usó.',
              attachments: 'Los archivos enviados con él.',
              rating: 'La valoración del usuario.',
              data: 'Cualquier otra cosa que guardar con él, como el nombre del modelo.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Dibuja una llamada a herramienta, como una tarjeta del clima. El contexto contiene la llamada y su mensaje.',
            members: {
              nuiChatTool:
                'El nombre de la herramienta. Sin él, dibuja todas las llamadas que ninguna otra plantilla nombra.',
            },
          },
          NuiChatThread: {
            summary:
              'La conversación por separado, para tu propio diseño. Acepta los inputs de <code>nui-chat</code> relativos a la conversación.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'El cuadro de texto por separado. Acepta los inputs de <code>nui-chat</code> relativos a la escritura.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Lo que <code>nuiEventStream</code> produce por cada evento. <code>nuiTextStream</code> lee texto plano y <code>nuiJsonStream</code>, líneas JSON; los tres reciben una respuesta de <code>fetch</code>.',
            members: {
              event: 'El nombre del evento.',
              data: 'Sus líneas de datos, unidas.',
              id: 'El último id que envió el flujo.',
            },
          },
          NuiChatError: {
            summary:
              'Lánzalo desde <code>respond</code> para mostrar su mensaje. Cualquier otro error muestra uno genérico, para que no se filtre nada interno.',
            members: {},
          },
        },
        keyboard: [
          ['Av Pág y Re Pág', 'Pasa al mensaje siguiente o al anterior.'],
          ['Ctrl + Fin y Ctrl + Inicio', 'Sale de la conversación, hacia delante o hacia atrás.'],
          ['Intro', 'Envía. Con Mayús, empieza una línea nueva.'],
          ['Esc', 'Deja de editar un mensaje.'],
        ],
        notes: [
          'La conversación es un <code>feed</code> de elementos <code>article</code>. Cada uno toma su nombre de un encabezado que solo perciben los lectores de pantalla, como «You said», y lleva <code>aria-posinset</code> y <code>aria-setsize</code>.',
          'Una respuesta que se está escribiendo es <code>aria-busy</code>. Al completarse, se anuncia entera; un fallo se anuncia enseguida.',
          'Cada botón de icono tiene un nombre y un tooltip. Las valoraciones son botones de alternancia, y el selector de versiones es un grupo con un nombre como «Version 2 of 3».',
          'El razonamiento y las llamadas a herramientas son desplegables nativos. Al quitar un archivo, el foco vuelve al campo de texto.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Componente renderizador de Markdown para Angular',
        summary: 'Renderiza Markdown de forma segura, incluso mientras llega en streaming.',
        description:
          'Renderizador de Markdown seguro en Angular para respuestas de IA: tablas de GitHub, listas de tareas y código como elementos reales, fluido en streaming.',
        apiDescription:
          'Referencia de la API del renderizador de Markdown de Needless UI: inputs de nui-markdown, la plantilla de los bloques de código y el parser que lo sustenta.',
        a11yDescription:
          'Accesibilidad del renderizador de Markdown de Needless UI: encabezados, listas y tablas reales, regiones de scroll con nombre y un botón de copiar que habla.',
        overview: [
          'El renderizador de Markdown convierte texto como el que escribe un modelo en elementos reales: encabezados, listas y listas de tareas, citas, tablas, bloques de código con botón de copiar y enlaces. Pasa el texto a un árbol y lo dibuja con plantillas, así que el HTML en bruto sigue siendo texto y nunca se inserta nada como HTML.',
          'Con <code>streaming</code>, el texto a medio escribir se lee como se leerá completo: un delimitador de código abierto ya es un bloque de código, un <code>**</code> suelto espera a su pareja y un cursor sigue a la última palabra. Los bloques que no cambiaron conservan su DOM.',
          'Los enlaces solo funcionan con direcciones web y de correo electrónico y con números de teléfono, y las imágenes siguen siendo enlaces hasta que activas <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Un documento',
            text: 'Los encabezados empiezan en <code>headingLevel</code>, así que encajan bajo los de la página. Las tablas anchas y el código se desplazan en sus propias regiones.',
          },
          streaming: {
            title: 'Streaming',
            text: 'El mismo texto, unos pocos caracteres cada vez. Ningún símbolo asoma ni un instante, y solo se vuelve a renderizar el último bloque.',
          },
          highlight: {
            title: 'Resaltado de código',
            text: '<code>nuiMarkdownCode</code> dibuja los bloques de código con una plantilla tuya, aquí con un resaltador diminuto. Recibe el código y su lenguaje.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Renderiza Markdown como elementos.',
            members: {
              text: 'El Markdown.',
              streaming: 'El texto aún está llegando.',
              headingLevel:
                'El nivel de un encabezado <code>#</code>. Los más profundos siguen a partir de él, hasta 6.',
              images:
                'Muestra las imágenes. Si no, su texto enlaza a ellas, ya que una imagen puede rastrear.',
              labels: 'Los textos del botón de copiar y similares, para traducirlos.',
              codeTemplate:
                'Una plantilla de bloque de código de otro sitio, como la de un chat que lo contiene.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Dibuja los bloques de código. El contexto contiene el código, <code>lang</code>, y <code>open</code> mientras el bloque sigue llegando.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'El parser y sus funciones auxiliares, para usarlos sin el componente.',
            members: {
              nuiParseMarkdown:
                'El árbol de bloques y elementos en línea que dibuja el componente.',
              nuiMarkdownToText:
                'El texto plano, una línea por bloque, para anunciarlo o previsualizarlo.',
              nuiSafeUrl:
                'Si un enlace lleva a una dirección web o de correo electrónico, o a un número de teléfono.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Llega a los enlaces, a los botones de copiar y a las tablas y el código anchos, para desplazarlos.',
          ],
        ],
        notes: [
          'Los encabezados, las listas, las citas, las tablas con encabezados <code>th</code> y <code>scope</code>, y el código son elementos reales.',
          'Las tablas anchas y los bloques de código se desplazan dentro de una región enfocable; la región de una tabla toma el nombre de sus encabezados.',
          'Las casillas de las listas de tareas indican si cada tarea está hecha. El botón de copiar se llama «Copy code» y dice «Copied» mediante un mensaje de estado.',
          'El cursor del streaming está oculto para los lectores de pantalla y se queda quieto con el movimiento reducido.',
        ],
      },
      calendar: {
        name: 'Calendario',
        title: 'Componente de calendario para Angular',
        summary: 'Elige un día, un rango o varios días, también con el teclado.',
        description:
          'Calendario accesible para Angular: elige un día, un rango o varios días, con mínimo y máximo, días no disponibles, meses lado a lado y números de semana.',
        apiDescription:
          'Referencia de la API del calendario de Needless UI: modelos de selección de nui-calendar, min, max y días no disponibles, meses lado a lado y etiquetas.',
        a11yDescription:
          'Teclado y accesibilidad del calendario de Needless UI: una cuadrícula de días con nombre, flechas para días y semanas, Re Pág y Av Pág para meses.',
        overview: [
          'El calendario permite elegir un día, un rango de días o varios días. Los valores son fechas ISO simples, como <code>2026-09-25</code>, sin zona horaria que las desplace, así que van directamente a un servidor o a un <code>&lt;input type="date"&gt;</code>.',
          'Las semanas empiezan en el primer día que fija la configuración regional, y los nombres y los dígitos siguen su idioma. <code>min</code>, <code>max</code> y <code>unavailable</code> descartan días, <code>months</code> muestra varios meses lado a lado y el título pasa a la vista de meses y años para las fechas lejanas.',
          'Todos los días se alcanzan con el teclado, como en el selector de fecha de WAI-ARIA, y cada uno lleva como nombre su fecha completa.',
        ],
        examples: {
          delivery: {
            title: 'Un día de entrega',
            text: 'Los días anteriores a hoy, posteriores a <code>max</code> o descartados por <code>unavailable</code> no se pueden elegir, pero el teclado sigue pasando por ellos.',
          },
          stay: {
            title: 'Un rango',
            text: 'Con <code>selection="range"</code>, la primera elección inicia el rango y la franja sigue al puntero hasta la segunda. <code>months="2"</code> y <code>weekNumbers</code> muestran más a la vez.',
          },
          'days-off': {
            title: 'Varios días',
            text: 'Con <code>selection="multiple"</code>, cada elección añade o quita un día. <code>firstDay</code> hace que la semana empiece en un día distinto al de la configuración regional.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Un calendario para elegir días.',
            members: {
              selection: 'Cuántos días se pueden elegir.',
              value: 'El día elegido.',
              values: 'Los días elegidos, en orden.',
              range: 'El rango elegido, con ambos extremos incluidos.',
              month: 'El mes que se muestra; si hay varios, el primero.',
              view: 'Días, meses o años.',
              'min, max': 'El primer y el último día que se pueden elegir.',
              unavailable: 'Descarta otros días, como los festivos.',
              months: 'Meses lado a lado.',
              weekNumbers: 'Muestra los números de semana ISO.',
              firstDay:
                'El primer día de la semana, 1 para el lunes. Por defecto, el de la configuración regional.',
              locale: 'Da formato a los nombres y los dígitos, y elige el primer día de la semana.',
              labels: 'Todos los textos que el calendario muestra o anuncia, para traducirlos.',
              picked: 'Emite cada elección: un día, o un rango cuando está completo.',
              focusDate: 'Lleva el foco del teclado a un día y muestra su mes.',
            },
          },
          NuiDateRange: {
            summary: 'Un rango de días.',
            members: { 'start, end': 'El primer y el último día, ambos incluidos.' },
          },
        },
        keyboard: [
          [
            'Flechas izquierda y derecha',
            'Día anterior o siguiente. Las flechas se invierten en texto de derecha a izquierda.',
          ],
          ['Flechas arriba y abajo', 'Semana anterior o siguiente.'],
          ['Inicio y Fin', 'Primer o último día de la semana.'],
          ['Re Pág y Av Pág', 'Mes anterior o siguiente; con Mayús, año.'],
          ['Intro o Espacio', 'Elige el día, o entra en un mes o un año.'],
          ['Esc', 'Descarta el primer extremo de un rango, o vuelve a acercar la vista.'],
        ],
        notes: [
          'Cada mes es un <code>grid</code> que toma su nombre del título, con los nombres completos de los días de la semana en <code>abbr</code>.',
          'Cada día se nombra con su fecha completa, a la que se añaden «Today», «unavailable» y los extremos de un rango. <code>aria-selected</code> marca lo elegido, y <code>aria-disabled</code>, lo que no se puede elegir.',
          'La cuadrícula es una sola parada de tabulación, con un <code>tabindex</code> itinerante. Los botones de mes anterior y siguiente anuncian el mes nuevo.',
        ],
      },
      'date-picker': {
        name: 'Selector de fecha',
        title: 'Componentes de selector de fecha y hora para Angular',
        summary: 'Escribe una fecha u hora por segmentos, o elígela en un calendario.',
        description:
          'Selectores de fecha, hora y rango accesibles para Angular: segmentos en el orden regional, un calendario en un popover, rangos predefinidos y formularios.',
        apiDescription:
          'Referencia de la API de los selectores de fecha de Needless UI: nui-date-field, nui-time-field, nui-date-picker, nui-date-range-picker y rangos predefinidos.',
        a11yDescription:
          'Teclado y accesibilidad de los selectores de fecha de Needless UI: un spinbutton por cada parte de la fecha y un calendario en un diálogo.',
        overview: [
          'Los campos de fecha y hora se escriben por segmentos: día, mes y año en el orden de la configuración regional, y luego horas y minutos en su reloj de 12 o 24 horas. Cada segmento es un spinbutton: al escribir dígitos avanza solo al siguiente, o puedes cambiarlo paso a paso con las flechas. Pega una fecha completa y se rellenan todos los segmentos.',
          'Los selectores añaden un calendario en un popover, para una fecha o para un rango con opciones predefinidas. Los valores son cadenas ISO simples, como <code>2026-09-25</code> o <code>2026-09-25T09:30</code>, y todos los campos funcionan con Signal Forms, formularios reactivos y <code>ngModel</code>.',
          'En este sitio, los ejemplos siguen el idioma de la página: elige otro para ver cómo cambian el orden, los separadores y los dígitos.',
        ],
        examples: {
          fields: {
            title: 'Campos de fecha y hora',
            text: 'Escribe los dígitos o usa las flechas. Un segundo Retroceso vuelve al segmento anterior. <code>minuteStep</code> define cuánto mueven las flechas los minutos.',
          },
          pickers: {
            title: 'Selectores de fecha',
            text: 'El botón abre un calendario en el día elegido, y al elegir un día se cierra. Con <code>granularity="minute"</code>, el selector admite también una hora, y el calendario solo cambia la fecha.',
          },
          range: {
            title: 'Un rango de fechas',
            text: 'Dos campos y un calendario de dos meses. <code>nuiDateRangePresets()</code> añade rangos habituales; el valor sigue siendo null hasta que se fijan ambos extremos, en orden.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Una fecha, o una fecha y hora, escrita por segmentos.',
            members: {
              value: 'El valor, o null hasta que se rellenan todos los segmentos.',
              granularity: 'Se detiene en el día, o sigue hasta la hora, el minuto o el segundo.',
              'min, max':
                'El valor más temprano y el más tardío. Fuera de esos límites, el campo no es válido.',
              placeholder: 'El punto de partida de los segmentos vacíos al usar las flechas.',
              hourCycle: 'Un reloj de 12 o 24 horas. Por defecto, el de la configuración regional.',
              minuteStep: 'Cuánto mueven las flechas los minutos.',
              'disabled, readonly': 'Impiden los cambios.',
              locale: 'Define el orden, los separadores, los dígitos y el reloj.',
              labels: 'Todos los textos que anuncia el campo, para traducirlos.',
              invalid: 'Si el valor está fuera de <code>min</code> y <code>max</code>.',
              focus: 'Pone el foco en el primer segmento vacío.',
            },
          },
          NuiTimeField: {
            summary:
              'Una hora del día escrita por segmentos. Acepta los mismos inputs que el campo de fecha.',
            members: { granularity: 'Se detiene en la hora, el minuto o el segundo.' },
          },
          NuiDatePicker: {
            summary:
              'Un campo de fecha con un calendario en un popover. Acepta los inputs del campo de fecha, y estos.',
            members: {
              unavailable: 'Días que el calendario no deja elegir.',
              'firstDay, weekNumbers': 'Se pasan al calendario.',
              labels: 'Los textos del campo, del botón y del calendario.',
              show: 'Abre el calendario.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Dos campos de fecha con un calendario de rango. Acepta los inputs del selector de fecha, y estos.',
            members: {
              value: 'El rango, o null hasta que se fijan ambos extremos, en orden.',
              presets: 'Rangos con nombre para elegir con un clic.',
              months: 'Meses lado a lado en el calendario.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Un rango con nombre, fijo o calculado al elegirlo.',
            members: {
              label: 'Su nombre.',
              range: 'El rango, o una función que lo genera.',
            },
          },
        },
        keyboard: [
          [
            'Dígitos',
            'Escriben en el segmento. El foco pasa al siguiente en cuanto ya no pueda seguir ningún otro dígito.',
          ],
          [
            'Flechas arriba y abajo',
            'Cambian el segmento paso a paso; Re Pág y Av Pág, en pasos más grandes.',
          ],
          ['Flechas izquierda y derecha, Tab', 'Segmento anterior o siguiente.'],
          ['Retroceso', 'Borra el segmento y luego vuelve al anterior.'],
          ['A y P', 'Pone AM o PM.'],
        ],
        notes: [
          'Un campo es un <code>group</code>: ponle nombre con <code>aria-label</code> o <code>aria-labelledby</code>. Cada segmento es un <code>spinbutton</code> con el nombre de su parte, que lee los meses por su nombre y los segmentos vacíos como «Empty».',
          'Los segmentos son texto editable, así que los teclados táctiles se abren con los dígitos.',
          'El botón del selector se llama «Choose a date», y su popover es un <code>dialog</code>. Al elegir una fecha, el foco vuelve al botón.',
          'El calendario interior funciona como el <a href="/components/calendar">calendario</a>.',
        ],
      },
      scheduler: {
        name: 'Planificador',
        title: 'Componente de planificador para Angular',
        summary: 'Eventos en un mes, una semana, un día o una agenda, arrastrados a su sitio.',
        description:
          'Planificador accesible para Angular: mes, semana, día y agenda, eventos solapados lado a lado, arrastrar para mover y redimensionar, y todo con el teclado.',
        apiDescription:
          'Referencia de la API del planificador de Needless UI: vistas, eventos, edición y selección de nui-scheduler, sus outputs y la plantilla de eventos.',
        a11yDescription:
          'Teclado y accesibilidad del planificador de Needless UI: cuadrículas de días y horas, eventos con nombre y un equivalente de teclado para cada arrastre.',
        overview: [
          'El planificador muestra eventos en un mes, una semana, un día o una agenda. Los eventos son datos simples con horas ISO; los que se solapan comparten el ancho, los que cruzan la medianoche aparecen en ambos días y los de todo el día recorren la parte superior como barras.',
          'Nunca cambia tus eventos por su cuenta. Arrastra un evento, o su borde inferior, y <code>eventChange</code> te pasa las horas nuevas; elige un intervalo en la cuadrícula, y <code>slotSelect</code> te lo indica. <code>rangeChange</code> te dice qué días se muestran, para que puedas cargar sus eventos.',
          'Todo lo que hace un puntero lo hace también el teclado: la cuadrícula es una sola parada de tabulación, las flechas recorren días y horas, y Alt con las flechas mueve un evento.',
        ],
        examples: {
          planner: {
            title: 'Una semana para planificar',
            text: 'Con <code>editable</code> y <code>selectable</code>, arrastra los eventos para moverlos, arrastra su borde inferior para redimensionarlos y arrastra sobre un espacio libre para añadir uno. El ejemplo actualiza sus eventos a partir de los outputs.',
          },
          month: {
            title: 'Un mes y una agenda',
            text: 'Los eventos de varios días se muestran como barras; un día lleno indica cuántos más hay. <code>views</code> ofrece solo el mes y la agenda de los próximos <code>agendaDays</code> días.',
          },
          rooms: {
            title: 'Un día de reservas de salas',
            text: '<code>nuiSchedulerEvent</code> dibuja cada reserva con su sala y su organizador. <code>slotMinutes="15"</code> hace las filas más finas.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Eventos en un mes, una semana, un día o una agenda.',
            members: {
              events: 'Los eventos que se muestran.',
              view: 'La vista que se muestra.',
              views: 'Las vistas entre las que se puede cambiar.',
              date: 'El día que se muestra, donde también está el foco del teclado.',
              slotMinutes:
                'Minutos por fila de la cuadrícula horaria, y el paso con el que se mueven los eventos.',
              scrollHour: 'La hora en la que se abre la cuadrícula horaria.',
              agendaDays: 'Cuántos días por delante muestra la agenda.',
              editable:
                'Los eventos se pueden mover y redimensionar, con el puntero y con el teclado.',
              selectable: 'Se puede elegir un intervalo en la cuadrícula, para crear eventos.',
              firstDay:
                'El primer día de la semana, 1 para el lunes. Por defecto, el de la configuración regional.',
              headingLevel:
                'El nivel de encabezado del título; los días de la agenda bajan un nivel más.',
              locale: 'Da formato a los días y las horas.',
              labels: 'Todos los textos que el planificador muestra o anuncia, para traducirlos.',
              eventClick: 'Emite el evento en el que se hace clic, o que se abre con Intro.',
              eventChange: 'Emite las horas nuevas de un evento tras moverlo o redimensionarlo.',
              slotSelect: 'Emite el intervalo elegido en la cuadrícula.',
              rangeChange: 'Emite el primer y el último día que se muestran cuando cambian.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Un evento. El final de un evento con hora no se incluye; el de un evento de todo el día es su último día.',
            members: {
              'id, title': 'Su clave, y lo que muestra.',
              'start, end': 'Fechas y horas, o solo fechas para los eventos de todo el día.',
              allDay: 'Por defecto, si <code>start</code> no tiene hora.',
              tone: 'Su color.',
              editable: 'Si se puede mover, diga lo que diga el planificador.',
              data: 'Cualquier otra cosa que quieras guardar con él.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Dibuja los eventos. El contexto contiene el evento y su horario como texto.',
            members: {},
          },
        },
        keyboard: [
          [
            'Flechas',
            'Mueven de día en día y de franja en franja. Las flechas se invierten en texto de derecha a izquierda.',
          ],
          ['Re Pág y Av Pág', 'Mes, semana o día anterior o siguiente.'],
          ['Mayús + flechas', 'Amplían el intervalo elegido.'],
          ['Intro o Espacio en una celda', 'Entra en sus eventos, o elige su hora.'],
          ['Flechas arriba y abajo en un evento', 'Evento anterior o siguiente de la celda.'],
          ['Alt + flechas en un evento', 'Lo mueven una franja o un día.'],
          ['Alt + Mayús + flecha arriba o abajo', 'Acorta o alarga el evento.'],
          ['Esc', 'Vuelve a la celda, descarta el intervalo elegido o cancela un arrastre.'],
        ],
        notes: [
          'El mes, la semana y el día son cada uno un <code>grid</code> que toma su nombre del título. Los días encabezan las columnas y las horas, las filas, así que cada celda se lee con su día y su hora.',
          'Cada evento es un botón que toma su nombre del título, el día y la hora, como «Standup, Friday, September 25, 9:00 – 9:30 AM». Al moverlo o redimensionarlo, se anuncia la hora nueva.',
          'Cada arrastre tiene un equivalente con el teclado, así que nadie necesita un puntero.',
          'Las vistas son botones de alternancia en un grupo, y al pasar a otra semana u otro mes se anuncia su título.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter y paneles redimensionables para Angular',
        summary: 'Paneles lado a lado o apilados, con divisores para cambiar su tamaño.',
        description:
          'Splitter accesible para Angular: paneles redimensionables lado a lado o apilados, con límites, paneles plegables, tamaños guardados y todo con el teclado.',
        apiDescription:
          'Referencia de la API del splitter de Needless UI: orientación y tamaños de nuiSplitter, límites y plegado de los paneles, y los divisores entre ellos.',
        a11yDescription:
          'Teclado y accesibilidad del splitter de Needless UI: divisores enfocables con valor según el patrón Window Splitter, flechas, Inicio, Fin e Intro.',
        overview: [
          'Un splitter reparte su espacio entre paneles, con un divisor entre cada dos. Arrastra un divisor, o ponle el foco y usa las flechas. Los tamaños son porcentajes que suman 100 y se enlazan con <code>[(sizes)]</code>.',
          'Cada panel acepta un tamaño inicial, un mínimo y un máximo en píxeles, rem o porcentaje. Un panel <code>collapsible</code> se pliega al arrastrarlo por debajo de la mitad de su mínimo, o con Intro en su divisor, y vuelve con el tamaño que tenía.',
          'Con <code>storageKey</code>, los tamaños se guardan en <code>localStorage</code>, así que en la siguiente visita cada persona encuentra la disposición tal como la dejó.',
        ],
        examples: {
          editor: {
            title: 'Un editor',
            text: 'Archivos, código y una vista previa. Los archivos y la vista previa se pliegan, el código conserva al menos el 30 % del ancho y los tamaños se guardan.',
          },
          stacked: {
            title: 'Paneles apilados',
            text: '<code>orientation="vertical"</code> apila los paneles, y <code>[(sizes)]</code> lee sus tamaños a medida que cambian.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Paneles con divisores entre ellos.',
            members: {
              orientation: 'Lado a lado, o apilados.',
              sizes: 'La parte de cada panel, en porcentaje, en orden.',
              storageKey: 'Guarda los tamaños en <code>localStorage</code> con esta clave.',
              step: 'Cuánto mueven las flechas un divisor, en porcentaje. El doble con Mayús.',
              move: 'Mueve en un porcentaje la frontera que sigue a un panel.',
            },
          },
          NuiSplitterPane: {
            summary: 'Un panel. Sus tamaños admiten píxeles, rem o porcentaje.',
            members: {
              defaultSize: 'Su tamaño inicial, cuando no hay tamaños que restaurar.',
              min: 'Su tamaño mínimo.',
              max: 'Su tamaño máximo.',
              collapsible:
                'Se pliega: al arrastrarlo por debajo de la mitad de su mínimo, o con Intro.',
              collapsedSize: 'Su tamaño plegado, como una barra de iconos.',
              label: 'Da nombre al divisor que lo redimensiona.',
            },
          },
          NuiSplitterHandle: {
            summary: 'El divisor entre dos paneles.',
            members: {
              label: 'Le da nombre, cuando la etiqueta del panel no lo hace.',
              disabled: 'No se mueve.',
              toggle: 'Pliega el panel de al lado, o lo restaura.',
            },
          },
        },
        keyboard: [
          [
            'Flechas izquierda y derecha',
            'Mueven el divisor entre paneles lado a lado. Las flechas se invierten en texto de derecha a izquierda.',
          ],
          ['Flechas arriba y abajo', 'Mueven el divisor entre paneles apilados.'],
          ['Mayús + flechas', 'Lo mueven el doble.'],
          ['Inicio y Fin', 'Lleva el panel anterior al divisor a su tamaño mínimo o máximo.'],
          ['Intro', 'Pliega el panel plegable, o lo restaura.'],
        ],
        notes: [
          'Cada divisor es un <code>separator</code> enfocable, como en el patrón Window Splitter de WAI-ARIA: su valor es el tamaño del panel anterior, entre los límites de ese panel, y <code>aria-controls</code> apunta a ese panel.',
          'Pon nombre a los divisores con el <code>label</code> de los paneles: «Files» le dice a un lector de pantalla qué redimensiona un divisor.',
          'Un doble clic en un divisor también pliega su panel, y al arrastrar se captura el puntero, así que los movimientos rápidos no pierden el divisor.',
        ],
      },
      tour: {
        name: 'Recorrido guiado',
        title: 'Componente de recorrido guiado para Angular',
        summary:
          'Una tarjeta por paso, junto a lo que explica, con el resto de la página atenuado.',
        description:
          'Recorrido guiado accesible para Angular: una tarjeta por paso junto a su objetivo resaltado, pasos interactivos y un foco que vuelve a su sitio.',
        apiDescription:
          'Referencia de la API del recorrido guiado de Needless UI: pasos de nui-tour, open y step bidireccionales, outputs, y objetivo, posición y hooks de cada paso.',
        a11yDescription:
          'Teclado y accesibilidad del recorrido guiado de Needless UI: cada tarjeta es un diálogo con el nombre de su título, foco retenido y devuelto, y Esc para salir.',
        overview: [
          'Un recorrido guía a los usuarios por una página, paso a paso. Cada paso señala un elemento con una tarjeta al lado y atenúa el resto de la página a su alrededor; un paso sin objetivo aparece en el centro.',
          'Los pasos son datos simples: un objetivo (un selector, un elemento o una función que lo encuentra), un título y un contenido en forma de texto o de plantilla. <code>beforeShow</code> se ejecuta antes, así que un paso puede abrir el panel donde está su objetivo, y si el objetivo no está a la vista, la página se desplaza hasta él.',
          'Cada tarjeta es un diálogo. Es modal, salvo que el paso sea <code>interactive</code>: entonces se puede usar lo que señala. Esc termina el recorrido, y el foco vuelve a donde estaba.',
        ],
        examples: {
          basics: {
            title: 'Un primer vistazo',
            text: 'Cuatro pasos, el primero sin objetivo. <code>finished</code> y <code>dismissed</code> distinguen las dos formas de terminar.',
          },
          interactive: {
            title: 'Pasos para probar',
            text: '<code>beforeShow</code> abre los ajustes antes de que el segundo paso señale algo dentro de ellos, e <code>interactive</code> permite usar el interruptor mientras la tarjeta está visible.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Un recorrido guiado.',
            members: {
              steps: 'Los pasos, en orden.',
              open: 'Si el recorrido está en marcha.',
              step: 'El paso que se muestra, desde 0.',
              labels: 'Todos los textos que muestra, para traducirlos.',
              finished: 'Emite cuando se completa el último paso.',
              dismissed:
                'Emite el paso en el que terminó el recorrido, cuando termina antes de tiempo.',
              start: 'Inicia el recorrido, desde el primer paso o desde el indicado.',
              end: 'Termina el recorrido, como completado o descartado.',
            },
          },
          NuiTourStep: {
            summary: 'Un paso del recorrido.',
            members: {
              target: 'Lo que señala. Sin objetivo, la tarjeta aparece en el centro.',
              title: 'El título de la tarjeta.',
              content: 'Su texto, o una plantilla.',
              side: 'En qué lado del objetivo va la tarjeta.',
              align: 'Cómo se alinea la tarjeta con el objetivo.',
              padding: 'Margen alrededor del objetivo resaltado, en píxeles.',
              interactive: 'El objetivo se puede usar mientras la tarjeta está visible.',
              beforeShow:
                'Se ejecuta antes de mostrar el paso. Si devuelve una promesa, el recorrido la espera.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Recorre los botones de la tarjeta. En los pasos modales, el foco se queda en la tarjeta.',
          ],
          ['Intro o Espacio', 'Activa el botón enfocado: «Siguiente», «Atrás» o «Listo».'],
          ['Esc', 'Termina el recorrido.'],
        ],
        notes: [
          'Cada tarjeta es un <code>dialog</code> que toma su nombre del título y su descripción del contenido. El foco pasa a su botón principal en cada paso, y vuelve a donde estaba al terminar el recorrido.',
          'Los pasos modales vuelven inerte el resto de la página. Los interactivos no son modales, así que se puede llegar a su objetivo con el teclado, no solo con el puntero.',
          'El progreso es texto, como «2 of 4»; los puntos solo lo dibujan.',
        ],
      },
      dropzone: {
        name: 'Zona de arrastre',
        title: 'Zona de arrastre y subida de archivos para Angular',
        summary:
          'Suelta archivos o elígelos, con comprobaciones, vistas previas y subidas con progreso.',
        description:
          'Zona de arrastre accesible para Angular: arrastrar y soltar, carpetas y pegado, validación de tipo y tamaño, vistas previas y subidas con progreso y reintento.',
        apiDescription:
          'Referencia de la API de la zona de arrastre de Needless UI: archivos y comprobaciones de nui-dropzone, la función de subida y su cola, sus outputs y sus textos.',
        a11yDescription:
          'Teclado y accesibilidad de la zona de arrastre de Needless UI: una zona que es un botón, resultados anunciados, y barras de progreso y acciones con nombre.',
        overview: [
          'Una zona de arrastre acepta archivos soltados sobre ella, elegidos con el selector de archivos o pegados. Las carpetas soltadas se recorren por completo, y cada archivo conserva su ruta.',
          'Cada archivo se comprueba con <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> y tu función <code>validate</code>, y los rechazados aparecen en una lista con el motivo. Las imágenes tienen vista previa.',
          'Sin una función <code>upload</code>, la zona guarda los archivos para un formulario, en <code>[(files)]</code>. Con una, los sube de pocos en pocos, con progreso, cancelación y reintento. Pasa el <code>signal</code> de la subida a <code>fetch</code>, para que cancelar la detenga de verdad.',
        ],
        examples: {
          upload: {
            title: 'Subidas',
            text: 'Una subida simulada informa de su progreso por pasos. Los archivos con «fail» en el nombre fallan, para mostrar el reintento, y <code>directory</code> añade un botón para elegir una carpeta.',
          },
          attach: {
            title: 'Adjuntos para un formulario',
            text: 'Sin <code>upload</code>: la zona guarda hasta tres documentos en <code>[(files)]</code>, y el texto que lleva dentro sustituye al predeterminado.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Un lugar donde soltar archivos, o elegirlos.',
            members: {
              files: 'Los archivos que contiene, en orden.',
              accept:
                'Los tipos de archivo que acepta, como en <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Más de un archivo a la vez.',
              directory: 'Ofrece un botón para elegir una carpeta.',
              maxFiles: 'Cuántos archivos admite.',
              'maxSize, minSize': 'El tamaño máximo y mínimo de un archivo, en bytes.',
              validate: 'Comprueba cada archivo. Si devuelve un mensaje, el archivo se rechaza.',
              upload: 'Envía un archivo. Sin esta función, los archivos solo se guardan.',
              concurrency: 'Cuántos archivos se suben a la vez.',
              hint: 'Una línea bajo el texto de la zona, por ejemplo con lo que acepta.',
              disabled: 'No acepta archivos.',
              labels: 'Todos los textos que muestra o anuncia, para traducirlos.',
              uploaded: 'Emite un archivo subido, con lo que devolvió <code>upload</code>.',
              rejected: 'Emite los archivos rechazados, con los motivos.',
              queue:
                'La cola de subidas, para cancelar, reintentar y leer el progreso desde el código.',
              take: 'Añade archivos desde el código, comprobando cada uno.',
            },
          },
          NuiUploader: {
            summary:
              'Envía un archivo: informa del progreso de 0 a 1 y se detiene cuando se aborta el signal.',
            members: {
              '(file, context)': 'Devuelve una promesa con lo que responda tu servidor.',
            },
          },
        },
        keyboard: [
          ['Intro o Espacio', 'En la zona, abre el selector de archivos.'],
          ['Ctrl + V (⌘ + V en Mac)', 'En la zona, añade los archivos pegados.'],
          ['Tab', 'Recorre la zona y las acciones de cada archivo.'],
        ],
        notes: [
          'La zona es un botón, así que funciona sin puntero, y la indicación la describe.',
          'Los archivos añadidos y los rechazados se anuncian. Cada barra de progreso es una <code>progressbar</code> con el nombre de su archivo, y cada acción se nombra por lo que hace, como «Remove beach.jpg».',
          'Las vistas previas son decorativas: el nombre del archivo ya dice de qué archivo se trata.',
        ],
      },
      mask: {
        name: 'Máscara de entrada',
        title: 'Directiva de máscara de entrada para Angular',
        summary:
          'Campos de texto que se formatean mientras se escribe: fechas, tarjetas, IBAN, códigos.',
        description:
          'Máscara de entrada para Angular: da formato al escribir sin mover el cursor, e incluye funciones auxiliares para tarjetas e IBAN y validación de formularios.',
        apiDescription:
          'Referencia de la API de la máscara de entrada de Needless UI: la directiva nuiMask, sus tokens y su valor, y funciones auxiliares para tarjetas e IBAN.',
        a11yDescription:
          'Accesibilidad de la máscara de entrada de Needless UI: campos nativos con sus etiquetas, teclados numéricos en móviles y borrado que salta los literales.',
        overview: [
          'Una máscara da formato a un campo de texto mientras se escribe: <code>00/00/0000</code> pone las barras y <code>AA 000 AA</code> acepta letras y dígitos por turnos. Los caracteres que no encajan se quedan fuera, y el cursor mantiene su sitio cuando se escribe en medio.',
          'Las máscaras se componen de tokens y literales: <code>0</code> es un dígito, <code>a</code> una letra, <code>*</code> cualquiera de los dos, y <code>A</code> y <code>X</code> hacen lo mismo para códigos, en mayúsculas. Añade los tuyos con <code>tokens</code>, o pasa una función que elija la máscara según lo que se escribe, como hace <code>nuiCardMask</code> según la marca de la tarjeta.',
          'El valor es lo que se muestra, o solo los datos con <code>unmask</code>. La máscara funciona con Signal Forms, formularios reactivos y <code>ngModel</code>, y un valor incompleto es un error.',
        ],
        examples: {
          formats: {
            title: 'Formatos',
            text: 'Una fecha, una hora, una matrícula y un color con un token propio para los dígitos hexadecimales.',
          },
          payment: {
            title: 'Datos de pago',
            text: 'Campos de Signal Forms. La máscara de la tarjeta sigue a la marca, el código de seguridad tiene cuatro dígitos en American Express, y <code>nuiCardValid</code> y <code>nuiIbanValid</code> comprueban los números.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Una máscara sobre un campo de texto nativo.',
            members: {
              nuiMask: 'La máscara, o una función que elige una según los datos escritos.',
              tokens: 'Caracteres de máscara que añadir o reemplazar.',
              unmask: 'El valor contiene solo los datos, sin los literales.',
              value: 'El valor: lo que se muestra, o los datos con <code>unmask</code>.',
              raw: 'Los datos escritos, sin los literales.',
              complete: 'Todas las posiciones de la máscara están rellenas.',
            },
          },
          Helpers: {
            summary: 'Funciones para dar formato, comprobar y crear máscaras.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Dan formato a un valor con una máscara, o extraen los datos de un valor formateado.',
              nuiCardMask:
                'Una máscara para números de tarjeta, agrupados como los imprime su marca.',
              nuiCardBrand: 'La marca de un número de tarjeta, según sus primeros dígitos.',
              'nuiCardValid, nuiLuhn':
                'Si un número de tarjeta tiene la longitud de su marca y supera la verificación de Luhn.',
              nuiIbanMask: 'Una máscara para IBAN, con la longitud del IBAN de cada país.',
              nuiIbanValid:
                'Si un IBAN tiene la longitud de su país y los dígitos de control correctos.',
            },
          },
        },
        keyboard: [
          ['Retroceso', 'Borra el carácter anterior al cursor, saltando los literales.'],
          ['Supr', 'Borra el carácter posterior al cursor, saltando los literales.'],
        ],
        notes: [
          'La máscara actúa sobre tu propio <code>&lt;input&gt;</code>, así que su etiqueta y su texto de ayuda quedan como los escribiste. Indica ahí qué se espera: una máscara no es una instrucción.',
          'Las máscaras de dígitos ponen <code>inputmode="numeric"</code>, para que los móviles muestren un teclado numérico, salvo que el campo defina el suyo.',
          'Acepta dígitos de cualquier sistema de escritura y los escribe del 0 al 9.',
        ],
      },
      'phone-field': {
        name: 'Campo de teléfono',
        title: 'Campo de número de teléfono para Angular',
        summary: 'Un selector de país y un número, agrupado como se escribe en su país.',
        description:
          'Campo de teléfono accesible para Angular: selector de país, números agrupados como los escribe cada país, códigos de país escritos o pegados y valores E.164.',
        apiDescription:
          'Referencia de la API del campo de teléfono de Needless UI: valor y país de nui-phone-field, países ofrecidos y funciones para leer y escribir números.',
        a11yDescription:
          'Accesibilidad del campo de teléfono de Needless UI: selector de país con nombre, anuncio del país que elige un código y autocompletado del navegador.',
        overview: [
          'Un campo de teléfono es un selector de país y un número. El número se agrupa mientras se escribe, como su país escribe los números, y el valor es el número en E.164, como <code>+393331234567</code>.',
          'Cada persona escribe los números como los conoce. Un 0 inicial (o el 1 delante de un número norteamericano) se toma como prefijo troncal y queda fuera del valor. Un código de país escrito o pegado, como <code>+44</code> o <code>0044</code>, elige su país, y lo mismo hace un código de área donde varios países comparten código.',
          'El primer país es el de la configuración regional, y <code>countries</code> limita la lista. Con formularios, un número demasiado corto o largo para su país es un error. Para una validación completa, comprueba también los números en el servidor.',
        ],
        examples: {
          basic: {
            title: 'Un número',
            text: 'Empieza con <code>+</code> y un código de país para cambiar de país mientras escribes.',
          },
          countries: {
            title: 'Los países que elijas',
            text: '<code>countries</code> ofrece once, el campo funciona con un <code>FormControl</code> reactivo y <code>nuiFormatPhone</code> vuelve a escribir el valor en un formato legible.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Un campo de número de teléfono.',
            members: {
              value: 'El número en E.164, o vacío.',
              country: 'El país, como código de región.',
              countries: 'Los países ofrecidos, como códigos de región.',
              locale: 'El idioma de los nombres de países.',
              label: 'Da nombre al número cuando ningún <code>&lt;label for&gt;</code> lo hace.',
              inputId: 'El id del número, para <code>&lt;label for&gt;</code>.',
              placeholder: 'Texto que se muestra mientras el número está vacío.',
              invalid: 'Marca el número como no válido.',
              disabled: 'No se puede cambiar.',
              labels: 'Todos los textos que anuncia, para traducirlos.',
            },
          },
          Helpers: {
            summary: 'Funciones para números de teléfono.',
            members: {
              nuiParsePhone:
                'Lee un número escrito de cualquier forma y lo separa en región, código de país y número nacional.',
              nuiFormatPhone: 'Escribe un número agrupado como lo hace su país, o en E.164.',
              nuiPhoneValid:
                'Si un número tiene un código de país conocido y la longitud de su país.',
            },
          },
        },
        keyboard: [
          ['Letras en el selector de país', 'Saltan a los países que empiezan por ellas.'],
          ['Intro o Espacio', 'Abre la lista de países, o elige uno.'],
          ['Retroceso', 'En el número, borra un dígito, saltando espacios y paréntesis.'],
        ],
        notes: [
          'El selector de país se llama «Country code» y lee su bandera y su código. Cuando un código de país o de área elige un país, se anuncia el país nuevo.',
          'Ponle nombre al número con <code>&lt;label for&gt;</code> e <code>inputId</code>, o con <code>label</code>.',
          'El número tiene <code>autocomplete="tel"</code>, así que los navegadores pueden rellenarlo, código de país incluido, y los móviles muestran un teclado telefónico.',
        ],
      },
      'color-picker': {
        name: 'Selector de color',
        title: 'Selector de color OKLCH para Angular',
        summary:
          'Un color en OKLCH, con controles deslizantes, muestras, cuentagotas y comprobación de contraste.',
        description:
          'Selector de color accesible para Angular en OKLCH: colores P3 de gama amplia, cualquier sintaxis CSS, muestras, cuentagotas y comprobación de contraste WCAG.',
        apiDescription:
          'Referencia de la API del selector de color de Needless UI: valor, formato y gama de nui-color-picker, muestras y contraste, y funciones auxiliares de color.',
        a11yDescription:
          'Teclado y accesibilidad del selector de color de Needless UI: un área con dos valores, controles deslizantes nativos y niveles de contraste por escrito.',
        overview: [
          'El selector de color trabaja en OKLCH, el espacio de color perceptual del CSS moderno. A lo ancho del área, el croma va del gris al máximo que la pantalla puede mostrar con esa luminosidad, así que cada punto es un color que puedes usar, y el tirador no se mueve cuando gira el tono.',
          'El campo acepta cualquier color de CSS, nombres incluidos, y el botón de formato escribe el valor en hexadecimal, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> o <code>color(display-p3)</code>. Un color fuera de la gama de un formato se lleva a ella como lo hace CSS, conservando su luminosidad y su tono.',
          'Añade <code>swatches</code> para elegir entre muestras, y <code>contrastWith</code> para comprobar el contraste del color sobre un fondo tal como lo mide WCAG 2. Si el navegador tiene cuentagotas, un botón toma un color de la pantalla.',
        ],
        examples: {
          brand: {
            title: 'Un color de marca',
            text: 'Muestras con nombre y el contraste de un texto blanco sobre el color: elige uno claro y AA falla.',
          },
          wide: {
            title: 'Gama amplia',
            text: '<code>gamut="p3"</code> llena el área con colores Display P3, y una línea discontinua marca dónde termina sRGB. El valor sigue en <code>oklch()</code>.',
          },
          popover: {
            title: 'En un popover',
            text: 'Un botón que muestra el color abre el selector en un <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Un selector de color en OKLCH.',
            members: {
              value: 'El color, escrito en el formato. Vacío hasta que se elige uno.',
              format: 'Cómo se escribe el valor.',
              formats: 'Los formatos que recorre el botón de formato.',
              gamut: 'Los colores que abarca el área: sRGB o Display P3.',
              alpha: 'Muestra el control deslizante de opacidad.',
              swatches: 'Colores para elegir, con nombre.',
              contrastWith: 'Un fondo con el que comprobar el contraste.',
              eyeDropper: 'Muestra el cuentagotas, si el navegador tiene uno.',
              disabled: 'No se puede cambiar.',
              labels: 'Todos los textos que anuncia, para traducirlos.',
              color: 'El color elegido, en OKLCH.',
            },
          },
          Helpers: {
            summary: 'Funciones para colores.',
            members: {
              nuiParseColor: 'Lee un color en cualquier sintaxis de CSS.',
              nuiFormatColor: 'Escribe un color en un formato.',
              nuiToGamut: 'Lleva un color a sRGB o Display P3, como hace CSS.',
              nuiContrast: 'La relación de contraste WCAG 2 de un color sobre un fondo.',
            },
          },
        },
        keyboard: [
          ['Flechas izquierda y derecha', 'En el área, menos o más croma.'],
          ['Flechas arriba y abajo', 'En el área, más claro o más oscuro.'],
          ['Mayús + flechas', 'Mueven el tirador diez veces más.'],
          ['Inicio y Fin', 'En el área, croma nulo o máximo.'],
          ['Re Pág y Av Pág', 'En el área, mucho más claro o más oscuro.'],
        ],
        notes: [
          'El tirador del área es un <code>slider</code> llamado «Color» que anuncia sus dos valores, como «Lightness 62%, chroma 75%». El tono y la opacidad son entradas de rango nativas.',
          'Las muestras son botones con el nombre de su etiqueta, y aparecen pulsadas cuando coinciden con el color.',
          'AA y AAA dicen «passes» o «fails» con palabras, no solo con el color, y en el modo de colores forzados los colores en sí se mantienen.',
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
