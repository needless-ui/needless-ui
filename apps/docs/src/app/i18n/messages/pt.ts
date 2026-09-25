import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Componentes Angular acessíveis e personalizáveis: elementos nativos, design tokens W3C e uma folha de estilo para todo framework. Código aberto, licença MIT.',
    skipToContent: 'Pular para o conteúdo principal',
    nav: {
      label: 'Principal',
      home: 'Página inicial do Needless UI',
      components: 'Componentes',
      guides: 'Guias',
      github: 'GitHub',
      language: 'Idioma',
      theme: 'Tema',
      themes: { system: 'Sistema', light: 'Claro', dark: 'Escuro' },
    },
    footer: {
      license: 'Publicado sob a licença MIT.',
      source: 'Código-fonte',
      built: 'Desnecessariamente sofisticado, cuidadosamente construído.',
      legal: 'Aviso legal',
      privacy: 'Política de privacidade',
    },
    emergency: {
      label: 'NÃO APERTE',
      cover: 'Levante a tampa de segurança',
      button: 'Não aperte',
      armed: 'A tampa está levantada. Pense bem.',
      falling: 'Protocolo de emergência ativado…',
      fallen: 'A gravidade agora é permanente. Recarregue a página para reconstruir o universo.',
      reduced: 'Seu sistema pede menos movimento, então a gravidade continua desligada. Que sorte.',
    },
    toaster: { label: 'Notificações (Alt + T)', close: 'Fechar' },
  },

  home: {
    title: 'Needless UI · Componentes Angular acessíveis, com engenharia de sobra',
    description:
      'O Needless UI é uma biblioteca open source de componentes Angular: elementos nativos, CSS independente de framework, design tokens W3C e WCAG 2.2 AA de série.',
    eyebrow: 'Código aberto · Angular 22 · MIT',
    heading: 'Componentes de UI, desnecessariamente bem feitos.',
    lead: 'O Needless UI estiliza <strong>elementos nativos</strong> com uma única folha de estilo independente de framework e design tokens W3C. Suas diretivas Angular adicionam o comportamento do Angular Aria, então todo componente é acessível desde a primeira renderização.',
    getStarted: 'Começar',
    browse: 'Ver componentes',
    featuresTitle: 'Por que ele existe',
    features: [
      {
        title: 'Elementos nativos em primeiro lugar',
        text: '<code>&lt;button nuiButton&gt;</code> é um botão de verdade. Formulários, teclado e leitores de tela funcionam porque nada o envolve.',
      },
      {
        title: 'Uma folha de estilo, qualquer framework',
        text: 'Os componentes são CSS puro em camadas de cascata: Angular hoje, React em seguida, HTML simples sempre.',
      },
      {
        title: 'Seu CSS sempre vence',
        text: 'Tudo fica dentro de <code>@layer nui</code>, então seus próprios estilos o sobrescrevem sem <code>!important</code> nem brigas de especificidade.',
      },
      {
        title: 'Acessível desde a base',
        text: 'Cada par de cores é verificado segundo as WCAG 2.2 AA quando a paleta é gerada. Foco, cores forçadas e movimento reduzido já vêm resolvidos.',
      },
      {
        title: 'Desnecessariamente personalizável',
        text: 'Molas, efeitos ao pressionar, animações de entrada, formatos de canto, raio e densidade: <a href="/guides/customization">um atributo</a> para a aplicação inteira ou um input por componente, sobre design tokens W3C padronizados.',
      },
      {
        title: 'Angular moderno',
        text: 'Signal inputs, zoneless, renderização no servidor e um ponto de entrada por componente, para que as aplicações incluam só o que importam.',
      },
    ],
    codeTitle: 'Dois imports e pronto',
    codeText:
      'Adicione o pacote, importe a folha de estilo uma vez e use os componentes em qualquer componente standalone.',
  },

  components: {
    title: 'Componentes',
    description:
      'Explore os componentes do Needless UI para Angular: botões, diálogos e menus acessíveis, com exemplos interativos, referência da API e suporte a teclado.',
    intro:
      'Cada componente é construído sobre elementos nativos e documentado com exemplos interativos, sua API e seu comportamento de teclado.',
    tabsLabel: 'Seções da documentação',
    tabs: { overview: 'Visão geral', api: 'API', accessibility: 'Acessibilidade' },
    sidenavLabel: 'Componentes',
    onThisPage: 'Nesta página',
    example: {
      showCode: 'Mostrar código',
      hideCode: 'Ocultar código',
      copy: 'Copiar',
      copied: 'Copiado',
      files: 'Arquivos-fonte',
    },
    api: {
      import: 'Importação',
      selector: 'Seletor',
      exportAs: 'Exportado como',
      members: 'Propriedades',
      name: 'Nome',
      type: 'Tipo',
      default: 'Padrão',
      description: 'Descrição',
      kinds: {
        input: 'Input',
        model: 'Bidirecional',
        output: 'Output',
        method: 'Método',
        property: 'Propriedade',
      },
      texts: 'Todo texto que ele mostra ou anuncia também é um input, então você pode traduzi-lo:',
      customization: {
        note: 'Os inputs de personalização que você não definir seguem o atributo <code>data-nui-*</code> mais próximo. Veja o <a href="/guides/customization">guia de personalização</a>.',
        members: {
          motion:
            'A mola com que ele se move: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> ou <code>none</code>.',
          spring:
            'Qualquer mola, no formato <code>{ stiffness, damping, mass }</code>, compilada para CSS em tempo de execução. Tem prioridade sobre <code>motion</code>.',
          press:
            'O que ele faz enquanto fica pressionado: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> ou <code>none</code>.',
          enter:
            'Como ele entra em cena: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> ou <code>none</code>.',
          corners:
            'O formato dos cantos: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> ou <code>square</code>.',
          radius:
            'O tamanho dos cantos: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> ou <code>full</code>.',
          density:
            'Quanto espaço ele ocupa: <code>compact</code>, <code>regular</code> ou <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Interação por teclado',
      key: 'Tecla',
      action: 'Ação',
      notes: 'Notas de acessibilidade',
    },
    titles: {
      api: (name) => `API do componente ${name}`,
      accessibility: (name) => `Acessibilidade do componente ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Componente de botão para Angular',
        summary: 'Ações e links, com o estilo aplicado diretamente a botões e links nativos.',
        description:
          'Diretiva de botão acessível para Angular, sobre elementos nativos de botão e link, com quatro variantes, três tons, três tamanhos e suporte a links.',
        apiDescription:
          'Referência da API do botão do Needless UI: a diretiva nuiButton, seu seletor e seus inputs variant, tone, size e disabled.',
        a11yDescription:
          'Comportamento de teclado e acessibilidade do botão do Needless UI: semântica nativa, anel de foco, contraste, tamanho do alvo e links desativados.',
        overview: [
          'A diretiva <code>nuiButton</code> estiliza um <code>&lt;button&gt;</code> ou um <code>&lt;a&gt;</code> nativo. O elemento mantém sua semântica, seu comportamento de teclado e sua participação em formulários; a diretiva apenas reflete seus inputs nos atributos data que a folha de estilo usa como alvo.',
          'Use um <code>&lt;button&gt;</code> para ações e um <code>&lt;a&gt;</code> para navegação. Os dois têm a mesma aparência e ambos aceitam <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Variantes',
            text: 'Quatro estilos de preenchimento, do mais chamativo ao mais discreto. Use um único botão sólido por tela, para a ação principal.',
          },
          tones: {
            title: 'Tons',
            text: 'Os tons mudam a paleta: accent para o caminho principal, neutral para ações secundárias e danger para ações destrutivas.',
          },
          sizes: {
            title: 'Tamanhos',
            text: 'Três alturas: 28, 36 e 44 pixels. Até o menor supera o tamanho mínimo de alvo das WCAG 2.2.',
          },
          links: {
            title: 'Links e botões desativados',
            text: 'Links não podem ser desativados de forma nativa, então um link desativado recebe <code>aria-disabled="true"</code> e seus cliques são bloqueados, mesmo com <code>routerLink</code>.',
          },
          presses: {
            title: 'Efeitos ao pressionar',
            text: 'Mantenha cada botão pressionado. <code>press</code> define o que um botão faz enquanto está pressionado, e <code>motion</code>, a mola com que ele volta ao lugar. <code>data-nui-press</code> em qualquer elemento define o efeito para tudo o que ele contém.',
          },
          shapes: {
            title: 'Cantos, raio e densidade',
            text: '<code>corners</code> muda o formato dos cantos, <code>radius</code> o tamanho deles e <code>density</code> o espaço que um botão ocupa, sem nunca ficar abaixo do tamanho mínimo de alvo de 24 px. Navegadores sem <code>corner-shape</code> desenham cantos arredondados.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Estiliza um <code>&lt;button&gt;</code> ou um <code>&lt;a&gt;</code> nativo como botão.',
            members: {
              variant:
                'Estilo de preenchimento: <code>solid</code>, <code>soft</code>, <code>outline</code> ou <code>ghost</code>.',
              tone: 'Paleta de cores: <code>accent</code>, <code>neutral</code> ou <code>danger</code>.',
              size: 'Altura, padding e tamanho da fonte: <code>sm</code>, <code>md</code> ou <code>lg</code>.',
              disabled:
                'Desativa o botão. Em links, define <code>aria-disabled</code> e bloqueia a ativação.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Move o foco para o botão ou o link.'],
          ['Enter', 'Ativa o botão ou segue o link.'],
          ['Espaço', 'Ativa o botão. Em links, rola a página (comportamento nativo).'],
        ],
        notes: [
          'O nome acessível é o texto do elemento. Botões só com ícone precisam de um <code>aria-label</code>.',
          'O texto atinge uma relação de contraste de 4,5:1 em todas as variantes, tons e temas; o gerador da paleta garante isso.',
          'O anel de foco é um contorno de 2 px com contraste de pelo menos 3:1 em relação à página, nos dois temas.',
          'Um <code>&lt;button&gt;</code> desativado sai da ordem de tabulação. Um link desativado continua focável, para que quem usa leitor de tela possa encontrá-lo, e é anunciado como desativado.',
          'No modo de cores forçadas, a borda transparente vira um contorno visível na cor do sistema.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Componente de diálogo para Angular',
        summary:
          'Uma janela modal sobre o elemento dialog nativo, com o foco gerenciado pelo navegador.',
        description:
          'Diálogo acessível para Angular baseado no elemento dialog nativo: foco modal, Esc para fechar, valores de retorno e fechamento ao clicar fora.',
        apiDescription:
          'Referência da API do diálogo do Needless UI: nuiDialog com open bidirecional, tamanhos, valores de retorno e as partes de título, descrição e fechamento.',
        a11yDescription:
          'Comportamento de teclado e acessibilidade do diálogo do Needless UI: foco modal, Esc, restauração do foco e conteúdo rotulado.',
        overview: [
          'A diretiva <code>nuiDialog</code> transforma um <code>&lt;dialog&gt;</code> nativo em um diálogo do Needless UI. O navegador cuida do comportamento modal: a página por trás fica inerte, o foco permanece dentro, Esc fecha o diálogo e o foco volta para o elemento que o abriu.',
          'Vincule <code>[(open)]</code> a um signal e dê um valor aos botões de fechar com <code>nuiDialogClose="…"</code> para saber como o diálogo foi fechado.',
        ],
        examples: {
          confirm: {
            title: 'Confirmação',
            text: 'Uma confirmação destrutiva. A opção segura tem <code>autofocus</code>, e o valor escolhido chega por <code>(closed)</code>.',
          },
          form: {
            title: 'Formulário em um diálogo',
            text: 'Um diálogo pode conter qualquer conteúdo. Aqui, o primeiro campo recebe o foco quando o diálogo abre.',
          },
          dismissible: {
            title: 'Escolha obrigatória',
            text: 'Com <code>[dismissible]="false"</code>, o Esc e os cliques fora do diálogo são ignorados, então é preciso escolher uma opção.',
          },
          entrances: {
            title: 'Animações de entrada',
            text: 'Cada botão abre o mesmo diálogo com um preset de <code>enter</code> diferente e a mola <code>bouncy</code>. Seja qual for a entrada, ele sai com um fade rápido.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Transforma um <code>&lt;dialog&gt;</code> nativo em um diálogo do Needless UI.',
            members: {
              open: 'Indica se o diálogo está aberto. Vincule com <code>[(open)]</code>.',
              modal: 'Abre como modal, com um fundo sobreposto e a página por trás inerte.',
              dismissible: 'Indica se o Esc e os cliques fora do diálogo o fecham.',
              size: 'Largura máxima: <code>sm</code> (24rem), <code>md</code> (32rem) ou <code>lg</code> (44rem).',
              closed:
                'Emite o valor de retorno sempre que o diálogo fecha. Fica vazio quando ele é fechado sem uma escolha.',
              close: 'Fecha o diálogo com um valor de retorno opcional.',
            },
          },
          NuiDialogTitle: {
            summary:
              'O título do diálogo. Recebe um id e se torna o <code>aria-labelledby</code> do diálogo.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Uma descrição curta, referenciada pelo <code>aria-describedby</code> do diálogo.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Uma linha de botões na parte de baixo do diálogo, alinhada ao final.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Fecha o diálogo em que está quando é clicado.',
            members: {
              nuiDialogClose: 'O valor com que o diálogo fecha, emitido por <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Move o foco para o próximo elemento dentro do diálogo.'],
          ['Shift + Tab', 'Move o foco para o elemento anterior dentro do diálogo.'],
          ['Esc', 'Fecha o diálogo, a menos que ele exija uma escolha.'],
        ],
        notes: [
          'Abrir com <code>showModal()</code> dá ao diálogo <code>role="dialog"</code> e semântica modal, e torna inerte o restante da página.',
          'O título e a descrição são vinculados por ids gerados, então os leitores de tela anunciam os dois quando o diálogo abre.',
          'O foco inicial vai para o elemento com <code>autofocus</code> ou para o primeiro elemento focável. Em confirmações destrutivas, coloque <code>autofocus</code> na opção segura.',
          'Quando o diálogo fecha, o foco volta para o elemento que o abriu.',
          'Os navegadores ainda podem fechar um diálogo que exige uma escolha se o Esc for pressionado várias vezes sem outra interação, então sempre ofereça uma saída explícita.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Componente de menu para Angular',
        summary:
          'Uma lista suspensa de ações, com submenus, itens marcáveis e suporte completo a teclado.',
        description:
          'Menu acessível para Angular baseado no Angular Aria: navegação por teclado, busca por digitação, submenus, itens de checkbox e radio e posição no viewport.',
        apiDescription:
          'Referência da API do menu do Needless UI: nuiMenuTrigger, nuiMenu e nuiMenuItem, com valores, tons, submenus e estado marcado.',
        a11yDescription:
          'Interação por teclado e acessibilidade do menu do Needless UI: setas, busca por digitação, submenus, Esc e retorno do foco.',
        overview: [
          'Um menu mostra uma lista de ações quando seu gatilho é ativado. O comportamento vem do padrão de menu do Angular Aria; o Needless UI adiciona os estilos, renderiza o menu como um popover acima da página e o mantém dentro do viewport.',
          'Passe a referência <code>ngMenu</code> do menu para <code>[nuiMenuTrigger]</code>, dê a cada item um <code>value</code> único e reaja a <code>(selected)</code> em cada item ou a <code>(itemSelected)</code> no menu.',
        ],
        examples: {
          actions: {
            title: 'Ações',
            text: 'Um menu de ações com dicas de atalho, um separador e um item destrutivo.',
          },
          submenu: {
            title: 'Submenus',
            text: 'Associe um item a um <code>nuiMenu</code> aninhado com <code>[submenu]</code>. Ele abre ao passar o mouse ou com a seta para a direita.',
          },
          checkable: {
            title: 'Itens de checkbox e radio',
            text: 'Defina <code>role</code> e vincule <code>[checked]</code>. O menu mostra o indicador e anuncia o estado.',
          },
          entrances: {
            title: 'Animações de entrada e molas',
            text: 'Cada menu combina um preset de <code>enter</code> com uma mola de <code>motion</code> e cresce a partir do lado em que se abre. Os submenus herdam os dois.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Abre um menu. Normalmente aplicado a um <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'O menu a ser aberto: a referência <code>ngMenu</code> de um <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Um menu de itens, renderizado como popover ao lado do seu gatilho. Seu export <code>ngMenu</code> é o menu do Angular Aria que gatilhos e submenus recebem.',
            members: {
              wrap: 'Indica se as setas passam do último item para o primeiro.',
              typeaheadDelay: 'Milissegundos até a busca por digitação reiniciar.',
              disabled: 'Desativa o menu inteiro.',
              itemSelected:
                'Emite o valor do item escolhido. No menu raiz, também dispara para itens de submenus.',
            },
          },
          NuiMenuItem: {
            summary: 'Um item de um <code>nuiMenu</code>.',
            members: {
              value: 'Identifica o item. Deve ser único em todo o menu, incluindo os submenus.',
              disabled:
                'Desativa o item. Ele continua alcançável pelas setas, mas não pode ser escolhido.',
              submenu: 'Um <code>nuiMenu</code> aninhado que este item abre.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> ou <code>menuitemradio</code>.',
              checked: 'Estado marcado de um item de checkbox ou radio.',
              tone: '<code>danger</code> para ações destrutivas.',
              searchTerm: 'Texto usado pela busca por digitação. Por padrão, é o rótulo do item.',
              selected: 'Emite o valor do item quando ele é escolhido com o mouse ou o teclado.',
            },
          },
          NuiMenuSeparator: { summary: 'Uma linha entre grupos de itens.', members: {} },
          NuiMenuShortcut: {
            summary: 'Uma dica de atalho de teclado, alinhada ao final de um item.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter ou Espaço',
            'No gatilho: abre o menu no primeiro item. Em um item: escolhe o item ou abre o submenu dele.',
          ],
          [
            'Seta para baixo',
            'No gatilho: abre o menu no primeiro item. No menu: vai para o próximo item.',
          ],
          [
            'Seta para cima',
            'No gatilho: abre o menu no último item. No menu: vai para o item anterior.',
          ],
          ['Home e End', 'Vai para o primeiro ou o último item.'],
          [
            'Seta para a direita',
            'Abre um submenu e vai para o primeiro item dele (seta para a esquerda em textos da direita para a esquerda).',
          ],
          [
            'Seta para a esquerda',
            'Fecha um submenu e volta para o item pai (seta para a direita em textos da direita para a esquerda).',
          ],
          ['Esc', 'Fecha o menu e devolve o foco ao gatilho.'],
          ['Letras', 'Vai para o próximo item cujo rótulo começa com o texto digitado.'],
        ],
        notes: [
          'O gatilho recebe <code>aria-haspopup</code>, <code>aria-expanded</code> e <code>aria-controls</code>; o menu e os itens recebem seus papéis ARIA do Angular Aria.',
          'O item destacado usa um preenchimento sólido com contraste de texto de pelo menos 4,5:1 e também serve de indicador de foco. No modo de cores forçadas, ele recebe um contorno de destaque do sistema.',
          'Itens marcáveis anunciam seu estado por meio de <code>aria-checked</code>.',
          'Escolher um item fecha o menu e devolve o foco ao gatilho. Mover o foco para fora do gatilho e do menu também o fecha.',
          'Os itens têm pelo menos 28 pixels de altura, acima do tamanho mínimo de alvo das WCAG 2.2.',
        ],
      },

      avatar: {
        name: 'Avatar',
        title: 'Componente de avatar para Angular',
        summary: 'A foto de uma pessoa, ou as iniciais dela sobre uma cor que é sempre a mesma.',
        description:
          'Avatar para Angular com iniciais quando não há foto, uma cor estável por nome, indicadores de status e grupos, legíveis em todos os temas.',
        apiDescription:
          'Referência da API do avatar do Needless UI: nuiAvatar com nome, foto, tamanho, formato e status, além de nuiAvatarGroup.',
        a11yDescription:
          'Acessibilidade do avatar do Needless UI: papel de imagem e nome, avatares decorativos e iniciais que mantêm um contraste de 4,5:1.',
        overview: [
          'O componente <code>nuiAvatar</code> mostra uma foto, ou as iniciais da pessoa quando não há foto ou ela não carrega. As iniciais ficam sobre uma cor calculada a partir do nome, então a mesma pessoa mantém a mesma cor em todo lugar.',
          'Cada matiz é limitado a uma luminosidade e um croma que mantêm as iniciais brancas acima de uma relação de contraste de 4,5:1, sejam quais forem o nome e o tema.',
        ],
        examples: {
          people: {
            title: 'Iniciais, fotos e status',
            text: 'Sem <code>src</code>, as iniciais e a cor vêm de <code>name</code>. <code>status</code> adiciona um ponto de presença.',
          },
          group: {
            title: 'Grupos, tamanhos e formatos',
            text: '<code>nuiAvatarGroup</code> sobrepõe uma fila de avatares. <code>size</code> aceita <code>sm</code>, <code>md</code> ou <code>lg</code>, e <code>shape="square"</code> combina com equipes e apps.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Uma foto ou iniciais, com o nome da pessoa.',
            members: {
              name: 'O nome da pessoa. O nome acessível, as iniciais e a cor vêm dele.',
              src: 'URL da foto. Se ela não carregar, as iniciais aparecem no lugar.',
              size: 'Tamanho: <code>sm</code>, <code>md</code> ou <code>lg</code>.',
              shape: '<code>circle</code> ou <code>square</code>.',
              status:
                'Um ponto de presença: <code>online</code>, <code>away</code>, <code>busy</code> ou <code>offline</code>.',
              label:
                'Um nome acessível que diz mais do que o nome sozinho, como “Ada Lovelace, online”.',
              decorative:
                'Oculta o avatar das tecnologias assistivas, para avatares ao lado do nome visível.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Uma fila de avatares sobrepostos. Dê um nome a ela com <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Um avatar é uma imagem (<code>role="img"</code>) com o nome da pessoa. Ao lado do nome visível dela, defina <code>decorative</code> para que os leitores de tela não o anunciem duas vezes.',
          'O ponto de status é apenas visual. Quando o status importar, inclua-o em <code>label</code>.',
          'As iniciais mantêm uma relação de contraste de pelo menos 4,5:1 em todas as cores geradas.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Componente de breadcrumbs para Angular',
        summary: 'A trilha de páginas que leva até a página atual.',
        description:
          'Breadcrumbs acessíveis para Angular sobre nav e lista nativos, com separadores CSS espelhados em textos da direita para a esquerda e trilhas longas roláveis.',
        apiDescription:
          'Referência da API dos breadcrumbs do Needless UI: a diretiva nuiBreadcrumbs e o rótulo da sua região de navegação.',
        a11yDescription:
          'Acessibilidade dos breadcrumbs do Needless UI: região de navegação, semântica de lista, a página atual e tamanhos de alvo.',
        overview: [
          'Os breadcrumbs mostram onde uma página fica dentro do site. A diretiva <code>nuiBreadcrumbs</code> estiliza um <code>&lt;nav&gt;</code> nativo e a lista dele; o último item é a página atual, marcada com <code>aria-current="page"</code>.',
          'Uma trilha maior que o contêiner rola para o lado em vez de quebrar a linha. Ela começa rolada até o fim, e as pontas esmaecem onde há mais para ver.',
        ],
        examples: {
          trail: {
            title: 'Uma trilha',
            text: 'Links para as páginas acima e, depois, a página atual como texto simples com <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Trilhas longas',
            text: 'Em um contêiner estreito, a trilha rola, começando com a página atual à vista.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Estiliza um <code>&lt;nav&gt;</code> e a lista dele como breadcrumbs.',
            members: { label: 'Nome acessível da região de navegação.' },
          },
        },
        keyboard: [['Tab', 'Vai para o próximo link da trilha.']],
        notes: [
          'É uma região de navegação com uma lista simples, então os leitores de tela anunciam quantas páginas a trilha tem.',
          'Os separadores são desenhados com CSS, então não são lidos em voz alta, e se espelham em textos da direita para a esquerda.',
          'Cada link tem pelo menos 24 px de altura.',
        ],
      },

      empty: {
        name: 'Estado vazio',
        title: 'Componente de estado vazio para Angular',
        summary: 'O que mostrar quando não há nada para mostrar, e o que fazer a respeito.',
        description:
          'Estado vazio para Angular com imagem, título, uma explicação curta e ações, além de quatro ilustrações integradas que flutuam suavemente.',
        apiDescription:
          'Referência da API do estado vazio do Needless UI: nuiEmpty e as partes de imagem, título, descrição e ações.',
        a11yDescription:
          'Acessibilidade do estado vazio do Needless UI: imagens decorativas, títulos significativos e movimento reduzido.',
        overview: [
          'Um estado vazio substitui uma lista, tabela ou página que ainda não tem nada. Ele explica o motivo e oferece o próximo passo.',
          'A parte de mídia recebe a sua própria imagem ou desenha uma integrada: <code>search</code>, <code>inbox</code>, <code>files</code> ou <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Nenhum resultado',
            text: 'Um título que diz o que aconteceu, uma linha de ajuda e ações para seguir em frente.',
          },
          pictures: {
            title: 'Imagens integradas',
            text: 'Defina <code>illustration</code> em <code>nuiEmptyMedia</code>. As imagens seguem o tema e flutuam, a menos que o movimento esteja reduzido.',
          },
        },
        api: {
          NuiEmpty: { summary: 'O contêiner: uma coluna centralizada.', members: {} },
          NuiEmptyMedia: {
            summary: 'A imagem, oculta das tecnologias assistivas.',
            members: {
              illustration:
                'Uma imagem integrada: <code>search</code>, <code>inbox</code>, <code>files</code> ou <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'O título. Use o nível de heading que combina com a página.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Uma linha de explicação.', members: {} },
          NuiEmptyActions: { summary: 'Uma linha de botões.', members: {} },
        },
        keyboard: [],
        notes: [
          'A imagem é decorativa (<code>aria-hidden</code>): o título e a descrição transmitem a mensagem.',
          'Use um heading para o título, no nível que combina com a estrutura da página.',
          'As imagens integradas param de flutuar quando o usuário prefere movimento reduzido.',
        ],
      },

      'number-field': {
        name: 'Campo numérico',
        title: 'Componente de campo numérico para Angular',
        summary: 'Uma entrada de números com botões de passo, formatada para cada localidade.',
        description:
          'Campo numérico acessível para Angular: spinbutton com botões de passo, teclado, mínimo e máximo, e formatos locais de moeda, porcentagem e unidades.',
        apiDescription:
          'Referência da API do campo numérico do Needless UI: nuiNumberField, nuiNumberInput com min, max, step e format, e nuiNumberStep.',
        a11yDescription:
          'Interação por teclado e acessibilidade do campo numérico do Needless UI: papel spinbutton, setas, teclas de página e botões de passo.',
        overview: [
          'O campo numérico é uma entrada de texto que guarda um número. Ele mostra o número formatado para a localidade, lê o texto digitado de volta no mesmo formato e, ao perder o foco, ajusta o valor ao <code>step</code> entre <code>min</code> e <code>max</code>.',
          'Ele também lê dígitos e separadores nativos: números arábico-índicos, persas e devanágaris, espaços e pontos como separadores de milhar e todo tipo de sinal de menos. Manter um botão de passo pressionado repete a ação, cada vez mais rápido.',
        ],
        examples: {
          guests: {
            title: 'Botões de passo',
            text: 'Botões dos dois lados, desativados em <code>min</code> e <code>max</code>. As setas do teclado também mudam o valor passo a passo.',
          },
          formats: {
            title: 'Moeda e porcentagem',
            text: 'Passe opções de <code>Intl.NumberFormat</code> para <code>format</code> e uma <code>locale</code>. O valor continua sendo um número simples.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Agrupa a entrada com os botões de passo.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Uma entrada de texto que guarda um número, como um spinbutton ARIA.',
            members: {
              value:
                'O número, ou <code>null</code> quando vazio. Também funciona com formulários.',
              min: 'Menor valor permitido.',
              max: 'Maior valor permitido.',
              step: 'Quanto um passo muda o valor. Ao perder o foco, o valor se ajusta a ele.',
              format:
                "Opções de <code>Intl.NumberFormat</code>, como <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Localidade usada para formatar e ler números.',
              disabled: 'Desativa a entrada e os botões.',
              stepBy: 'Sobe (positivo) ou desce (negativo) um número de passos.',
            },
          },
          NuiNumberStep: {
            summary: 'Um botão de passo. Mantê-lo pressionado repete a ação.',
            members: {
              nuiNumberStep: '<code>1</code> sobe um passo e <code>-1</code> desce um passo.',
              label: 'Nome acessível. O padrão é “Increase” ou “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Setas para cima e para baixo', 'Sobe ou desce o valor em um passo.'],
          ['Page Up e Page Down', 'Avança ou recua dez passos.'],
          ['Home e End', 'Vai para o mínimo ou o máximo.'],
          ['Enter', 'Confirma o que foi digitado.'],
        ],
        notes: [
          'A entrada é um <code>spinbutton</code> com <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> e o valor formatado como <code>aria-valuetext</code>.',
          'Os botões de passo ficam fora da ordem de tabulação, já que as teclas fazem o mesmo, mas têm nome e são vinculados à entrada com <code>aria-controls</code>.',
          'Rotule a entrada com <code>aria-label</code> ou um <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Campo OTP',
        title: 'Campo de OTP e código de verificação para Angular',
        summary: 'Códigos de verificação em caixas separadas, sobre uma única entrada real.',
        description:
          'Campo OTP acessível para Angular: um campo nativo sob as caixas, preenchimento automático por SMS, WebOTP, limpeza ao colar, grupos, máscara e tremida de erro.',
        apiDescription:
          'Referência da API do campo OTP do Needless UI: nuiOtp com comprimento, padrão, grupos e máscara, e nuiOtpInput com WebOTP.',
        a11yDescription:
          'Teclado e acessibilidade do campo OTP do Needless UI: um campo de texto rotulado, um anel de foco visível e preenchimento automático.',
        overview: [
          'O campo OTP parece uma fila de caixas, mas por baixo é um único <code>&lt;input&gt;</code> nativo. O preenchimento automático por SMS (<code>autocomplete="one-time-code"</code>), a colagem, os gerenciadores de senhas, os formulários e os leitores de tela veem um campo de texto comum.',
          'Códigos colados são limpos, então “123-456” e “123 456” funcionam, e caracteres que o padrão não permite são recusados. No Android, <code>webOtp</code> preenche o código a partir do SMS assim que ele chega.',
        ],
        examples: {
          verify: {
            title: 'Verificação',
            text: '<code>(completed)</code> dispara quando a última caixa é preenchida. Defina <code>aria-invalid</code> na entrada para rejeitar um código: as caixas ficam vermelhas e tremem.',
          },
          letters: {
            title: 'Letras, grupos e máscara',
            text: '<code>pattern="alphanumeric"</code> também aceita letras, <code>[groups]</code> adiciona separadores e <code>masked</code> desenha pontos.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Desenha as caixas e envolve a entrada.',
            members: {
              length: 'Número de caracteres.',
              pattern: '<code>digits</code>, ou <code>alphanumeric</code> para letras e dígitos.',
              groups:
                'Tamanhos dos grupos, desenhados com um separador entre eles, como <code>[3, 3]</code>.',
              masked: 'Desenha pontos em vez dos caracteres.',
              completed: 'Emite o código sempre que a última caixa é preenchida.',
            },
          },
          NuiOtpInput: {
            summary:
              'A entrada real. Ela recebe os atributos de que um código de uso único precisa.',
            members: {
              webOtp:
                'Preenche o código a partir de um SMS recebido, pela API WebOTP, onde houver suporte.',
            },
          },
        },
        keyboard: [
          ['Dígitos ou letras', 'Preenchem a caixa atual e passam para a próxima.'],
          ['Backspace', 'Apaga o caractere antes do cursor.'],
          [
            'Setas para a esquerda e para a direita',
            'Movem uma caixa; uma caixa preenchida fica selecionada, então digitar a substitui.',
          ],
          ['Colar', 'Preenche as caixas com um código copiado.'],
        ],
        notes: [
          'Os leitores de tela encontram um único campo de texto. Rotule-o com <code>aria-label</code> ou um <code>&lt;label&gt;</code>.',
          'As caixas ficam ocultas das tecnologias assistivas; a caixa em edição mostra o anel de foco.',
          'Com movimento reduzido, o cursor não pisca e as caixas não pulam nem tremem.',
        ],
      },

      rating: {
        name: 'Avaliação',
        title: 'Componente de avaliação por estrelas para Angular',
        summary: 'Estrelas para avaliar, sobre botões de rádio de verdade.',
        description:
          'Avaliação por estrelas acessível para Angular sobre rádios nativos: teclado e formulários, prévia ao passar o mouse, limpeza e frações no modo somente leitura.',
        apiDescription:
          'Referência da API da avaliação do Needless UI: nuiRating com valor, máximo, modos somente leitura e limpável, e rótulos traduzíveis.',
        a11yDescription:
          'Interação por teclado e acessibilidade da avaliação do Needless UI: um grupo de rádio com nome, estrelas rotuladas e a imagem somente leitura.',
        overview: [
          'A avaliação é um grupo de botões de rádio nativos desenhados como estrelas. Setas, formulários e leitores de tela funcionam como em qualquer grupo de rádio; o CSS preenche as estrelas e mostra uma prévia da nova avaliação sob o ponteiro.',
          'No modo somente leitura, ela mostra qualquer fração, como uma média de 4,3.',
        ],
        examples: {
          pick: {
            title: 'Avaliar algo',
            text: 'Vincule <code>[(value)]</code> ou um formulário. Com <code>clearable</code>, escolher a mesma estrela de novo limpa a avaliação.',
          },
          average: {
            title: 'Mostrar uma média',
            text: '<code>readonly</code> preenche as estrelas até qualquer fração e dá à imagem o nome “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary:
              'Um grupo de rádio de estrelas, ou uma imagem somente leitura de uma avaliação.',
            members: {
              value: 'A avaliação, ou <code>null</code>. Também funciona com formulários.',
              max: 'Número de estrelas.',
              readonly: 'Mostra o valor, com qualquer fração, em vez de pedir um.',
              disabled: 'Desativa todas as estrelas.',
              clearable: 'Escolher a estrela atual de novo limpa a avaliação.',
              name: 'Nome compartilhado pelos botões de rádio. Gerado por padrão.',
              starLabel: 'Nome acessível de cada estrela, em função do valor dela.',
              readonlyLabel: 'Nome acessível no modo somente leitura.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Entra no grupo, na estrela marcada.'],
          ['Setas', 'Mudam a avaliação.'],
          ['Espaço', 'Marca a estrela em foco.'],
        ],
        notes: [
          'Cada estrela é um botão de rádio nativo com o nome “3 stars”. Dê um nome ao grupo com <code>aria-label</code>.',
          'No modo somente leitura, a avaliação é uma imagem (<code>role="img"</code>) com o nome “Rated 4.3 out of 5”.',
          'As estrelas são desenhadas com máscaras CSS, então seguem as cores forçadas.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Componente skeleton de carregamento para Angular',
        summary: 'Espaços reservados que mantêm o layout enquanto o conteúdo carrega.',
        description:
          'Skeletons de carregamento para Angular em forma de texto, círculo e bloco, com um único brilho que percorre a página inteira e nenhum com movimento reduzido.',
        apiDescription:
          'Referência da API do skeleton do Needless UI: a diretiva nuiSkeleton e os formatos text, circle e block.',
        a11yDescription:
          'Acessibilidade do skeleton do Needless UI: espaços reservados ocultos, regiões com aria-busy, movimento reduzido e cores forçadas.',
        overview: [
          'Os skeletons mantêm a forma do conteúdo que ainda está carregando, para que a página não pule quando ele chegar. Defina o tamanho deles com CSS.',
          'O brilho é fixo em relação ao viewport: um único reflexo percorre todos os skeletons da página ao mesmo tempo, sejam quais forem o tamanho e a posição deles.',
        ],
        examples: {
          card: {
            title: 'Carregando um card',
            text: 'Linhas, um círculo e um bloco no lugar de um perfil. O card fica com <code>aria-busy</code> enquanto carrega.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Um espaço reservado, oculto das tecnologias assistivas.',
            members: {
              shape: '<code>text</code> (uma linha), <code>circle</code> ou <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Os skeletons ficam ocultos para leitores de tela. Defina <code>aria-busy="true"</code> na região que está carregando e remova-o quando o conteúdo chegar.',
          'Não há brilho quando o usuário prefere movimento reduzido.',
          'No modo de cores forçadas, cada skeleton ganha um contorno.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notificações toast para Angular',
        summary: 'Mensagens curtas que se empilham, saem com um deslize e nunca roubam o foco.',
        description:
          'Toasts acessíveis para Angular: pilha na top layer, toasts de promise, ações de desfazer, deslizar para dispensar e timers que pausam com hover e foco.',
        apiDescription:
          'Referência da API dos toasts do Needless UI: o serviço NuiToaster, as opções dele e os toasts de promise, e a região nui-toaster.',
        a11yDescription:
          'Interação por teclado e acessibilidade dos toasts do Needless UI: anúncios, o atalho Alt + T, Esc e timers que pausam.',
        overview: [
          'Os toasts confirmam o que acabou de acontecer, ou oferecem uma ação como “Desfazer”, sem interromper. Coloque um <code>&lt;nui-toaster&gt;</code> no shell da aplicação e chame <code>NuiToaster</code> de qualquer lugar.',
          'Eles se empilham atrás do mais recente e se abrem em leque com hover ou foco, tudo com a mola escolhida. Um deslize para o lado descarta um toast. Os timers pausam enquanto a pilha está sob o mouse ou em foco, e enquanto a página está em segundo plano.',
        ],
        examples: {
          tones: {
            title: 'Tons',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> e <code>danger()</code>. Toasts de perigo ficam mais tempo e são anunciados com prioridade.',
          },
          actions: {
            title: 'Ações e promises',
            text: 'Uma <code>action</code> adiciona um botão como “Desfazer”. <code>promise()</code> mostra um spinner e depois se transforma no resultado.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'O serviço que mostra os toasts. Injete-o em qualquer lugar.',
            members: {
              toasts: 'Todos os toasts na tela, do mais recente para o mais antigo.',
              show: 'Mostra um toast. Passe um título, ou opções com descrição, tom, duração, ação ou id.',
              success: 'Mostra um toast de sucesso.',
              warning: 'Mostra um toast de aviso.',
              danger:
                'Mostra um toast de perigo. Ele fica 8 segundos e é anunciado com prioridade.',
              promise:
                'Mostra um toast de carregamento até a promise ser resolvida ou rejeitada, e depois a mensagem de sucesso ou de perigo.',
              dismiss: 'Dispensa um toast, ou todos.',
            },
          },
          NuiToasterRegion: {
            summary:
              'A região onde os toasts aparecem. Coloque-a uma única vez, no shell da aplicação.',
            members: {
              position: 'Canto ou borda do viewport. Início e fim seguem a direção do texto.',
              expanded: 'Mantém a pilha aberta em leque.',
              label: 'Nome acessível da região. Diga como chegar até ela.',
              closeLabel: 'Nome acessível dos botões de fechar.',
              hotkey:
                'A tecla, como <code>KeyboardEvent.code</code>, que junto com Alt move o foco para o toast mais recente.',
            },
          },
        },
        keyboard: [
          ['Alt + T', 'Move o foco para o toast mais recente.'],
          ['Tab', 'Percorre os toasts, as ações deles e os botões de fechar.'],
          ['Esc', 'Dispensa o toast em foco.'],
        ],
        notes: [
          'Cada toast é anunciado quando aparece: de forma educada, ou com prioridade nos de perigo. Os toasts nunca recebem o foco.',
          'Os timers pausam enquanto a pilha está sob o mouse ou em foco e enquanto a página está oculta, e toasts que esperam uma promise nunca expiram.',
          'Tudo em que o usuário precise agir também deve existir fora do toast.',
          'Com movimento reduzido, os toasts não são animados nem deslizam, e a linha do timer fica oculta.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox e autocomplete para Angular',
        summary: 'Um campo de texto que sugere opções enquanto você digita.',
        description:
          'Combobox acessível para Angular: busca aproximada com destaque, vários valores como chips, novos valores do texto digitado e resultados de um servidor.',
        apiDescription:
          'Referência da API do combobox do Needless UI: nui-combobox com value, values, multiple, create, filtering, loading e clearable, e linhas personalizadas.',
        a11yDescription:
          'Teclado e acessibilidade do combobox do Needless UI: combobox editável com autocomplete em lista, descendente ativo, chips e entrada via IME.',
        overview: [
          'O combobox é um campo de texto com uma lista de sugestões. A busca é aproximada e ignora acentos: as melhores correspondências vêm primeiro e as letras encontradas ficam destacadas. Ele aceita os mesmos objetos <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> que o select.',
          'Com <code>multiple</code>, as opções escolhidas viram chips antes do texto, e <code>create</code> transforma o texto digitado em um novo valor. Para resultados de um servidor, desative <code>filtering</code>, faça a busca em <code>(queryChange)</code> e defina <code>loading</code> enquanto espera.',
        ],
        examples: {
          country: {
            title: 'Busca',
            text: 'As letras encontradas não precisam estar juntas, e as <code>keywords</code> também contam. <code>clearable</code> adiciona um botão de limpar, e o Esc também limpa o valor.',
          },
          tags: {
            title: 'Chips e novos valores',
            text: '<code>multiple</code> mostra chips e vincula <code>[(values)]</code>. Quando o texto ainda não é uma opção, <code>create</code> oferece adicioná-lo.',
          },
          people: {
            title: 'Resultados do servidor',
            text: 'A lista mostra o que o servidor enviou, sem filtrar, com uma linha de carregamento enquanto espera. Os rótulos escolhidos são mantidos quando chegam novos resultados.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Um campo de texto que sugere opções enquanto você digita.',
            members: {
              options:
                'As opções, como objetos <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'O valor escolhido, ou <code>null</code>. Também funciona com formulários.',
              values: 'Os valores escolhidos, com <code>multiple</code>.',
              multiple: 'Permite escolher várias opções, mostradas como chips.',
              create:
                'Cria um valor a partir do texto digitado. A lista então oferece adicionar o texto que não é uma opção.',
              filtering:
                'Filtra as opções enquanto você digita. Desative quando um servidor as filtrar.',
              loading: 'Mostra uma linha de carregamento enquanto os resultados estão a caminho.',
              clearable: 'Adiciona um botão que limpa o valor e permite limpá-lo com Esc.',
              placeholder: 'Texto mostrado enquanto o campo está vazio.',
              label: 'Nome acessível, quando nenhum <code>&lt;label&gt;</code> nomeia o campo.',
              inputId: 'Id do campo de texto, para <code>&lt;label for&gt;</code>.',
              disabled: 'Desativa o campo.',
              compareWith: 'Diz se dois valores são a mesma opção, para valores que são objetos.',
              displayWith:
                'Texto para um valor que não está entre as opções, como um definido antes de elas carregarem.',
              virtual:
                'Renderiza só as linhas visíveis: sempre, nunca, ou <code>auto</code> acima de 200 linhas.',
              queryChange: 'Emite o texto enquanto ele é digitado, para uma busca no servidor.',
              openChange: 'Emite quando a lista abre ou fecha.',
              show: 'Abre a lista.',
              hide: 'Fecha a lista.',
              clear: 'Limpa o valor e o texto.',
              focus: 'Move o foco para o campo de texto.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Coloque-o em um <code>ng-template</code> dentro do componente para desenhar cada linha você mesmo. O contexto contém a opção e a linha dela.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Desenha o rótulo de uma opção com as letras encontradas destacadas, a descrição e o caminho dela, para as suas próprias linhas.',
            members: { nuiOptionText: 'A linha, do contexto do template.' },
          },
        },
        keyboard: [
          ['Setas para baixo e para cima', 'Abre a lista e depois percorre as opções.'],
          ['Page Down e Page Up', 'Avança ou recua dez opções.'],
          ['Enter', 'Escolhe a opção ativa.'],
          ['Alt + seta para baixo ou para cima', 'Abre ou fecha a lista.'],
          ['Esc', 'Fecha a lista; depois limpa o texto, ou o valor quando ele é limpável.'],
          ['Backspace', 'Em um campo vazio, remove o último chip.'],
          [
            'Seta para a esquerda',
            'No início do texto (seta para a direita em textos da direita para a esquerda), vai para os chips. Lá, Backspace ou Delete remove um chip.',
          ],
        ],
        notes: [
          'O campo de texto é um <code>combobox</code> com <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> e <code>aria-controls</code>. O foco fica nele, e <code>aria-activedescendant</code> aponta para a opção ativa.',
          'Os chips formam uma lista com nome, e cada botão de remover leva o nome do seu chip, como “Remove Italy”.',
          '“No matches” e a linha de carregamento são mensagens de status, então os leitores de tela as anunciam.',
          'Teclas que confirmam uma composição do IME, como em chinês ou japonês, ficam a cargo do IME.',
        ],
      },
      command: {
        name: 'Paleta de comandos',
        title: 'Componente de paleta de comandos para Angular',
        summary: 'Todos os comandos do seu app, a uma tecla de distância.',
        description:
          'Paleta de comandos acessível para Angular: ⌘K de qualquer lugar, busca aproximada em páginas aninhadas, grupos e atalhos no formato de cada plataforma.',
        apiDescription:
          'Referência da API da paleta de comandos do Needless UI: nui-command-palette com commands, hotkey, bindShortcuts e loop, e o formato de NuiCommand.',
        a11yDescription:
          'Teclado e acessibilidade da paleta de comandos do Needless UI: um diálogo modal com um combobox de busca, descendente ativo e navegação entre páginas.',
        overview: [
          'A paleta de comandos é um campo para buscar entre os comandos do seu app, em um diálogo modal. ⌘K a abre de qualquer lugar (Ctrl+K no Windows e no Linux). Escolha um comando: a paleta fecha e depois o executa.',
          'Os comandos podem ter um grupo, uma descrição, palavras-chave e um atalho, mostrado com os símbolos de cada plataforma. Um comando com <code>children</code> abre uma página com mais comandos, e a busca a partir do nível principal alcança também as páginas.',
        ],
        examples: {
          palette: {
            title: 'Comandos e páginas',
            text: 'Grupos, atalhos, um comando desativado e duas páginas. <code>(run)</code> diz o que foi executado; o <code>run</code> do próprio comando também funciona.',
          },
          people: {
            title: 'Linhas personalizadas',
            text: 'Um <code>nuiOptionTemplate</code> desenha cada linha, e <code>nuiOptionText</code> mantém as correspondências destacadas. <code>[hotkey]="null"</code> deixa o ⌘K para a paleta acima.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Um diálogo modal com um campo para buscar entre os seus comandos.',
            members: {
              commands: 'Os comandos, como objetos <code>NuiCommand</code>.',
              open: 'Indica se a paleta está aberta.',
              hotkey:
                'O atalho que a abre e fecha de qualquer lugar, ou <code>null</code> para nenhum. <code>mod</code> é ⌘ em dispositivos Apple e Ctrl nos demais.',
              bindShortcuts:
                'Também executa os comandos pelos próprios atalhos, em qualquer lugar da página.',
              loop: 'Descer a partir do último comando leva ao primeiro, e subir a partir do primeiro leva ao último.',
              filtering:
                'Filtra enquanto você digita. Desative quando um servidor filtrar os comandos.',
              loading: 'Mostra uma linha de carregamento enquanto os resultados estão a caminho.',
              hints: 'Mostra embaixo as teclas que você pode usar.',
              virtual:
                'Renderiza só as linhas visíveis: sempre, nunca, ou <code>auto</code> acima de 200 linhas.',
              label: 'Nome acessível do diálogo e do campo de busca dele.',
              placeholder: 'Texto mostrado no campo de busca vazio.',
              run: 'Emite cada comando executado.',
              queryChange: 'Emite o texto enquanto ele é digitado, para uma busca no servidor.',
              show: 'Abre a paleta.',
              hide: 'Fecha a paleta.',
              toggle: 'Abre a paleta, ou a fecha.',
              back: 'Volta para a página anterior.',
            },
          },
          NuiCommand: {
            summary: 'Um comando, ou uma página de comandos.',
            members: {
              label: 'O texto mostrado e buscado.',
              description: 'Texto secundário abaixo do rótulo.',
              group: 'Comandos com o mesmo grupo aparecem sob esse título.',
              keywords: 'Mais palavras que a busca encontra, como sinônimos.',
              shortcut: 'Teclas mostradas junto com ele, como <code>mod+shift+p</code>.',
              disabled: 'Aparece, mas não pode ser executado.',
              children: 'Comandos um nível abaixo: escolher este os abre como uma página.',
              run: 'É executado ao ser escolhido, depois que a paleta fecha.',
              id: 'Para uso próprio, como distinguir comandos em <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K ou Ctrl+K', 'Abre ou fecha a paleta.'],
          ['Setas para baixo e para cima', 'Percorre os comandos, dando a volta nas pontas.'],
          ['Page Down e Page Up', 'Avança ou recua dez comandos.'],
          ['Enter', 'Executa o comando ativo, ou abre a página dele.'],
          ['Esc', 'Volta uma página; no nível principal, fecha a paleta.'],
          ['Backspace', 'Em um campo vazio dentro de uma página, volta.'],
        ],
        notes: [
          'É um <code>&lt;dialog&gt;</code> modal nativo: a página por trás fica inerte, o foco permanece dentro, e fechar devolve o foco para onde estava.',
          'O campo de busca é um <code>combobox</code> que aponta para o comando ativo com <code>aria-activedescendant</code>. Em uma página, ele recebe o nome da página.',
          'As teclas de atalho são texto em cada opção, então os leitores de tela as leem. As dicas de teclas embaixo ficam ocultas das tecnologias assistivas.',
          'Atalhos sem Ctrl, Alt ou ⌘ não são executados enquanto você digita em um campo.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Componentes de popover e hovercard para Angular',
        summary: 'Painéis flutuantes ao lado de um botão e tooltips ricos ao passar o mouse.',
        description:
          'Popover e hovercard acessíveis para Angular com a API popover nativa: posição que inverte e acompanha, setas, fechamento ao clicar fora e atrasos de hover.',
        apiDescription:
          'Referência da API do popover do Needless UI: nuiPopover e nuiHovercard com side, align, offset e arrow, e as diretivas de gatilho.',
        a11yDescription:
          'Teclado e acessibilidade do popover e do hovercard do Needless UI: papéis dialog e tooltip, retorno do foco, Esc e WCAG 1.4.13.',
        overview: [
          'Um popover é um pequeno painel que abre ao lado de um botão, para conteúdo interativo: filtros, um formulário curto, um seletor de cores. Ele é um <code>popover="auto"</code> nativo, então o navegador o fecha com Esc ou um clique fora, devolve o foco e o coloca logo depois do gatilho na ordem de tabulação.',
          'Um hovercard é um tooltip rico. Ele abre depois de um breve hover, ou na hora com o foco do teclado, e descreve o seu gatilho. Ele continua aberto enquanto o ponteiro se move sobre ele, então o texto pode ser lido e selecionado.',
          'Os dois mudam para o outro lado quando falta espaço, ficam na tela e acompanham o gatilho quando a página rola.',
        ],
        examples: {
          filters: {
            title: 'Filtros',
            text: 'Um popover com um formulário dentro. <code>arrow</code> o faz apontar para o gatilho, e <code>hide()</code> o fecha pelo código.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Passe o mouse sobre um nome, ou chegue até ele com Tab. O card descreve o link, então os leitores de tela o leem depois do nome.',
          },
          sides: {
            title: 'Lados e animações de entrada',
            text: '<code>side</code> e <code>align</code> definem onde ele abre; <code>start</code> e <code>end</code> seguem a direção da escrita. <code>enter</code> e <code>motion</code> definem como ele entra em cena.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Um popover nativo posicionado ao lado do elemento que o abriu.',
            members: {
              side: 'O lado do gatilho em que ele abre. Muda de lado quando falta espaço.',
              align: 'Como ele se alinha ao gatilho ao longo desse lado.',
              offset: 'Distância entre o gatilho e o painel, em pixels.',
              arrow: 'Mostra uma seta que aponta para o gatilho.',
              openChange: 'Emite quando ele abre ou fecha.',
              show: 'Abre o popover ao lado de qualquer elemento.',
              hide: 'Fecha o popover.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Um botão que abre e fecha um popover, com o <code>popovertarget</code> nativo.',
            members: { nuiPopoverTrigger: 'O popover a ser aberto.' },
          },
          NuiHovercard: {
            summary: 'Um tooltip rico que descreve o seu gatilho.',
            members: {
              side: 'O lado do gatilho em que ele abre. Muda de lado quando falta espaço.',
              align: 'Como ele se alinha ao gatilho ao longo desse lado.',
              offset: 'Distância entre o gatilho e o card, em pixels.',
              arrow: 'Mostra uma seta que aponta para o gatilho.',
              openDelay: 'Milissegundos de hover antes de abrir. O foco do teclado o abre na hora.',
              closeDelay: 'Milissegundos antes de fechar, depois que o ponteiro sai.',
              openChange: 'Emite quando ele abre ou fecha.',
              show: 'Abre o hovercard ao lado de qualquer elemento.',
              hide: 'Fecha o hovercard.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Mostra um hovercard com hover e com o foco do teclado, e o torna a descrição deste elemento.',
            members: { nuiHovercardTrigger: 'O hovercard a ser mostrado.' },
          },
        },
        keyboard: [
          ['Enter ou Espaço no gatilho', 'Abre ou fecha o popover.'],
          ['Tab', 'Entra em um popover aberto, que vem logo depois do gatilho.'],
          ['Esc', 'Fecha o popover e devolve o foco ao gatilho, ou esconde o hovercard.'],
        ],
        notes: [
          'O popover é um <code>dialog</code> não modal: dê um nome a ele com <code>aria-label</code> ou <code>aria-labelledby</code>. O gatilho recebe <code>aria-haspopup</code> e o <code>aria-expanded</code> do navegador.',
          'O hovercard é um <code>tooltip</code> e o <code>aria-describedby</code> do gatilho, então o texto dele é lido junto com o gatilho. Não coloque controles nele; para isso, use um popover.',
          'O hovercard atende ao critério WCAG 1.4.13: Esc o esconde sem mover o foco, o ponteiro pode se mover sobre ele, e ele fica visível enquanto estiver sob o mouse ou em foco.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Componente select para Angular',
        summary: 'Escolha uma opção ou várias, de uma lista curta ou enorme.',
        description:
          'Select acessível para Angular: única ou múltipla, grupos, árvores, busca por digitação, selecionar tudo e rolagem virtual para listas de qualquer tamanho.',
        apiDescription:
          'Referência da API do select do Needless UI: nui-select com value, values, multiple, selectAll e virtual, o formato de NuiOption e linhas personalizadas.',
        a11yDescription:
          'Teclado e acessibilidade do select do Needless UI: combobox só de seleção com listbox ou árvore, descendente ativo, busca por digitação e teclas de árvore.',
        overview: [
          'O select é um botão que abre uma lista de opções. Passe <code>options</code>, um array de <code>NuiOption</code>, e vincule <code>[(value)]</code>, ou <code>[(values)]</code> com <code>multiple</code>. Ele também funciona com Signal Forms, formulários reativos e <code>ngModel</code>.',
          'As opções podem ter um <code>group</code>, uma <code>description</code> e <code>keywords</code>, e <code>children</code> transforma a lista em uma árvore. Acima de 200 linhas, só as linhas visíveis são renderizadas, então 100.000 opções abrem tão rápido quanto dez.',
          'Se preferir digitar e filtrar, use o <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Grupos',
            text: 'Opções com um <code>group</code> aparecem sob o título dele. Digitar uma letra pula para a próxima opção que começa com ela.',
          },
          toppings: {
            title: 'Várias de uma vez',
            text: '<code>multiple</code> mantém a lista aberta e vincula <code>[(values)]</code>. <code>selectAll</code> adiciona um botão que marca ou desmarca todas as opções. Opções desativadas não podem ser escolhidas.',
          },
          folders: {
            title: 'Árvore',
            text: 'Opções com <code>children</code> formam uma árvore. A lista abre com as pastas da opção escolhida expandidas.',
          },
          zones: {
            title: 'Listas longas',
            text: 'Todos os fusos horários, por região. Acima de 200 linhas, só as linhas visíveis são renderizadas, e a opção ativa continua renderizada para os leitores de tela.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Um botão que abre uma lista de opções.',
            members: {
              options: 'As opções, como objetos <code>NuiOption</code>.',
              value: 'O valor escolhido, ou <code>null</code>. Também funciona com formulários.',
              values: 'Os valores escolhidos, com <code>multiple</code>.',
              multiple:
                'Permite escolher várias opções. A lista fica aberta enquanto você escolhe.',
              selectAll:
                'Com <code>multiple</code>, adiciona um botão que marca ou desmarca todas as opções.',
              placeholder: 'Texto mostrado enquanto nada foi escolhido.',
              label: 'Nome acessível, quando nenhum <code>&lt;label&gt;</code> nomeia o botão.',
              triggerId: 'Id do botão, para <code>&lt;label for&gt;</code>.',
              disabled: 'Desativa o select.',
              compareWith: 'Diz se dois valores são a mesma opção, para valores que são objetos.',
              virtual:
                'Renderiza só as linhas visíveis: sempre, nunca, ou <code>auto</code> acima de 200 linhas.',
              openChange: 'Emite quando a lista abre ou fecha.',
              show: 'Abre a lista.',
              hide: 'Fecha a lista.',
              focus: 'Move o foco para o botão.',
            },
          },
          NuiOption: {
            summary:
              'Uma opção. O select, o combobox e a paleta de comandos usam todos esse formato.',
            members: {
              value: 'O valor definido ao escolhê-la. Qualquer tipo.',
              label: 'O texto mostrado e buscado.',
              description: 'Texto secundário abaixo do rótulo.',
              group: 'Opções com o mesmo grupo aparecem sob esse título, em ordem.',
              keywords: 'Mais palavras que a busca encontra, como sinônimos ou códigos.',
              disabled: 'Aparece, mas não pode ser escolhida.',
              children: 'Opções um nível abaixo, que transformam a lista em uma árvore.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Coloque-o em um <code>ng-template</code> dentro do componente para desenhar cada linha você mesmo. O contexto contém a opção e a linha dela.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Desenha o rótulo de uma opção com as letras encontradas destacadas, a descrição e o caminho dela, para as suas próprias linhas.',
            members: { nuiOptionText: 'A linha, do contexto do template.' },
          },
        },
        keyboard: [
          ['Setas para baixo e para cima', 'Abre a lista e depois percorre as opções.'],
          ['Home e End', 'Vai para a primeira ou a última opção.'],
          ['Page Down e Page Up', 'Avança ou recua dez opções.'],
          ['Enter ou Espaço', 'Abre a lista, ou escolhe a opção ativa.'],
          ['Letras', 'Pula para a próxima opção que começa com elas.'],
          [
            'Setas para a direita e para a esquerda',
            'Em uma árvore, expande uma opção ou vai para o primeiro filho; recolhe a opção ou vai para o pai. As setas se invertem em textos da direita para a esquerda.',
          ],
          ['Alt + seta para cima', 'Escolhe a opção ativa e fecha a lista.'],
          ['Tab', 'Com escolha única, escolhe a opção ativa e segue em frente.'],
          ['Esc', 'Fecha a lista sem escolher.'],
        ],
        notes: [
          'O botão é um <code>combobox</code> somente de seleção com <code>aria-expanded</code> e <code>aria-controls</code>. O foco fica nele, e <code>aria-activedescendant</code> aponta para a opção ativa.',
          'A lista é uma <code>listbox</code>, ou uma <code>tree</code> com <code>aria-level</code> e <code>aria-expanded</code>. <code>aria-setsize</code> e <code>aria-posinset</code> continuam corretos quando só algumas linhas são renderizadas.',
          'A opção ativa tem um preenchimento sólido e, no modo de cores forçadas, um contorno.',
          'Dê um nome ao select com um <code>&lt;label for&gt;</code> que aponte para <code>triggerId</code>, ou com <code>label</code>.',
        ],
      },
      grid: {
        name: 'Grade de dados',
        title: 'Componente de grade de dados para Angular',
        summary: 'Ordene, filtre, selecione, edite e role por qualquer quantidade de linhas.',
        description:
          'Grade de dados acessível para Angular sobre tabela nativa: ordenação por várias colunas, filtros, páginas ou rolagem virtual, seleção, edição e colunas móveis.',
        apiDescription:
          'Referência da API da grade de dados do Needless UI: inputs e models de nui-grid, a definição de NuiGridColumn e templates para células personalizadas.',
        a11yDescription:
          'Teclado e acessibilidade da grade de dados do Needless UI: tabela nativa com papéis de grid, uma única parada de tabulação, setas e anúncios.',
        overview: [
          'A grade de dados é uma tabela nativa com ordenação, filtros, paginação e edição. Descreva as <code>columns</code>, passe as <code>rows</code>, e cada célula é formatada pelo tipo e pela localidade: números, moedas, datas, sim e não, e rótulos para valores <code>enum</code>.',
          'O estado dela fica em models que você pode vincular, salvar e enviar a um servidor: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code> e <code>columnState</code> para as larguras, a ordem, as colunas fixadas e as ocultas que os usuários escolhem. Sem paginação, só as linhas visíveis são renderizadas, então 100.000 linhas rolam como dez.',
          'Todas as células são alcançáveis pelo teclado, e o painel de cada coluna permite ordená-la, filtrá-la, fixá-la, movê-la, ajustá-la ao conteúdo e ocultá-la.',
        ],
        examples: {
          orders: {
            title: 'Busca, ordenação e paginação',
            text: 'Digite para buscar em todas as colunas. Clique em um cabeçalho para ordenar e use Shift + clique para adicionar uma segunda coluna. <code>nuiGridCell</code> desenha o status, e <code>exportCsv()</code> entrega o que está na tela.',
          },
          selection: {
            title: 'Seleção',
            text: '<code>selection="multiple"</code> adiciona caixas de seleção e vincula as chaves das linhas selecionadas. Shift + clique seleciona um intervalo; a caixa do cabeçalho seleciona todas as linhas que correspondem.',
          },
          editing: {
            title: 'Edição',
            text: 'Clique duas vezes em uma célula, pressione Enter ou simplesmente digite. <code>validate</code> mantém o editor aberto com uma mensagem; uma edição confirmada atualiza <code>rows</code> e emite <code>cellEdit</code>.',
          },
          big: {
            title: '100.000 linhas',
            text: 'Sem paginação, só as linhas visíveis são renderizadas. As colunas fixadas ficam nas bordas, e <code>columnState</code> guarda o layout que os usuários montam.',
          },
          server: {
            title: 'Dados do servidor',
            text: 'No modo <code>server</code>, a grade mostra as linhas conforme chegam e informa cada mudança em <code>queryChange</code>. Defina <code>loading</code> enquanto busca os dados.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Uma grade de dados sobre uma tabela nativa.',
            members: {
              rows: 'Os dados. Edições substituem linhas, então vincule com <code>[(rows)]</code>.',
              columns: 'As colunas, como objetos <code>NuiGridColumn</code>.',
              rowId: 'A chave de uma linha, para seleção e rastreamento.',
              label: 'Nome acessível da grade.',
              selection: 'Se as linhas podem ser selecionadas, e quantas.',
              selected: 'As chaves das linhas selecionadas.',
              sort: 'A ordenação, como objetos <code>{ column, direction }</code>; o primeiro ordena primeiro.',
              filters: 'Um filtro por id de coluna: um operador e um valor.',
              search: 'Palavras que precisam aparecer todas em uma linha.',
              pageSize: 'Linhas por página, ou 0 para uma única lista rolável.',
              page: 'A página mostrada, a partir de 0.',
              pageSizes: 'As opções do paginador.',
              virtual:
                'Renderiza só as linhas visíveis: sempre, nunca, ou <code>auto</code> acima de 100 linhas sem paginação.',
              height: 'Um comprimento CSS que limita a grade; o conteúdo rola dentro dela.',
              columnState:
                'A largura, a ordem, a fixação e a visibilidade de cada coluna, para salvar e restaurar.',
              mode: '<code>server</code> mostra as linhas conforme chegam e deixa a ordenação, a filtragem e a paginação com você.',
              total: 'O número de linhas no servidor.',
              loading:
                'Mostra uma barra de progresso, e linhas provisórias enquanto não há nenhuma.',
              locale: 'Formata números e datas, e lê números digitados.',
              labels: 'Todo texto que a grade mostra ou anuncia, para traduzir.',
              rowActivate: 'Emite uma linha aberta com Enter ou com um clique duplo.',
              cellEdit: 'Emite cada edição confirmada.',
              queryChange: 'Emite a ordenação, os filtros, a busca e a página sempre que mudam.',
              exportCsv: 'As linhas filtradas e ordenadas das colunas visíveis, em CSV.',
              focusCell: 'Move o foco para uma célula; a linha <code>-1</code> é o cabeçalho.',
              clearFilters: 'Limpa todos os filtros e a busca.',
            },
          },
          NuiGridColumn: {
            summary: 'Uma coluna. Só <code>id</code> e <code>header</code> são obrigatórios.',
            members: {
              id: 'Único; a chave na ordenação, nos filtros e no estado das colunas.',
              header: 'O texto do cabeçalho.',
              value: 'Uma chave da linha, ou uma função da linha. O padrão é <code>row[id]</code>.',
              type: 'Define o alinhamento, a ordenação, o filtro e o editor.',
              format:
                'Opções de <code>Intl</code> para números e datas, ou uma função que gera o texto.',
              options:
                'As opções de uma coluna <code>enum</code>, como objetos <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'Em pixels.',
              flex: 'Divide o espaço restante com as outras colunas <code>flex</code>.',
              align: 'O padrão depende do tipo: números e datas no final.',
              'pinned, hidden': 'A fixação e a visibilidade iniciais da coluna.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Cada uma pode ser desativada com <code>false</code>.',
              compare: 'Uma ordenação personalizada.',
              'editable, validate':
                'Se as células podem ser editadas, e uma mensagem quando um valor não é válido.',
              set: 'Cria a linha editada. O padrão é uma cópia com o novo valor.',
            },
          },
          NuiGridCell: {
            summary:
              'Desenha as células de uma coluna. O contexto contém a linha, o valor e o texto.',
            members: { nuiGridCell: 'O id da coluna.' },
          },
          NuiGridHeader: {
            summary: 'Desenha o cabeçalho de uma coluna.',
            members: { nuiGridHeader: 'O id da coluna.' },
          },
          NuiGridEmpty: {
            summary:
              'O que aparece quando não há linhas. O contexto informa se os filtros as ocultaram.',
            members: {},
          },
        },
        keyboard: [
          [
            'Setas',
            'Movem uma célula. Esquerda e direita se invertem em textos da direita para a esquerda.',
          ],
          ['Home e End', 'Vai para a primeira ou a última célula da linha; com Ctrl, da grade.'],
          ['Page Down e Page Up', 'Avança ou recua uma tela de linhas.'],
          [
            'Enter ou Espaço em um cabeçalho',
            'Ordena pela coluna; com Shift, adiciona a coluna à ordenação.',
          ],
          ['Alt + seta para baixo em um cabeçalho', 'Abre o painel da coluna.'],
          [
            'Alt + seta para a esquerda ou para a direita em um cabeçalho',
            'Estreita ou alarga a coluna; com Shift, move a coluna.',
          ],
          ['Enter em uma célula', 'Edita a célula, ou abre a linha quando ela não é editável.'],
          ['F2, ou digitar', 'Edita a célula.'],
          [
            'Enter, Esc e Tab durante a edição',
            'Confirma, cancela, ou confirma e segue em frente.',
          ],
          ['Espaço', 'Seleciona a linha; com Shift, as linhas desde a última selecionada.'],
          ['Ctrl + A', 'Seleciona todas as linhas.'],
        ],
        notes: [
          'Uma <code>&lt;table&gt;</code> nativa com <code>role="grid"</code>, nomeada por <code>label</code>. Os cabeçalhos têm <code>aria-sort</code>, e as linhas selecionáveis, <code>aria-selected</code>.',
          'A grade é uma única parada de tabulação. O foco passa de célula em célula com um <code>tabindex</code> móvel, então os leitores de tela leem cada célula com os cabeçalhos da linha e da coluna.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> e <code>aria-colindex</code> continuam corretos quando as linhas são paginadas ou virtualizadas.',
          'Ordenação, filtros, paginação e erros de edição são anunciados de forma educada em uma região de status.',
        ],
      },
    },
  },

  guides: {
    title: 'Guias',
    items: {
      'getting-started': {
        title: 'Primeiros passos',
        description:
          'Instale o Needless UI em uma aplicação Angular 22: adicione os pacotes, importe a folha de estilo e use seu primeiro componente acessível em minutos.',
        blocks: [
          {
            kind: 'p',
            html: 'O Needless UI funciona com o Angular 22. Os componentes são diretivas standalone, então não há módulos para importar.',
          },
          { kind: 'h2', id: 'install', text: 'Instalação' },
          {
            kind: 'p',
            html: 'Adicione o pacote Angular junto com o Angular Aria e o CDK, que fornecem o comportamento de teclado e de acessibilidade. A folha de estilo já vem junto.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Importe os estilos' },
          {
            kind: 'p',
            html: 'Importe a folha de estilo uma única vez em <code>src/styles.css</code>. Ela inclui os design tokens e todos os componentes.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Tudo fica dentro de <code>@layer nui</code>. Se a sua aplicação tem resets globais como <code>a { color: inherit }</code>, coloque-os em uma camada declarada antes de <code>nui</code> para que não sobrescrevam os componentes.',
          },
          { kind: 'h2', id: 'use', text: 'Use um componente' },
          {
            kind: 'p',
            html: 'Importe as diretivas de que você precisa a partir dos pontos de entrada delas e adicione-as aos <code>imports</code> do seu componente.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Próximos passos' },
          {
            kind: 'p',
            html: 'Explore os <a href="/components">componentes</a> para ver exemplos interativos ou leia o <a href="/guides/theming">guia de temas</a> para adaptá-los à sua marca.',
          },
        ],
      },
      theming: {
        title: 'Temas',
        description:
          'Adapte o Needless UI com propriedades personalizadas CSS: modos claro e escuro, temas aninhados, tokens próprios e uma paleta de marca com contraste verificado.',
        blocks: [
          {
            kind: 'p',
            html: 'Cada decisão visual é uma propriedade personalizada CSS gerada a partir de design tokens W3C. Os componentes usam apenas tokens semânticos como <code>--nui-color-accent-solid</code>, então mudar um token altera o estilo de todos os componentes que o usam.',
          },
          { kind: 'h2', id: 'modes', text: 'Claro e escuro' },
          {
            kind: 'p',
            html: 'Por padrão, a preferência do sistema operacional define o modo. Fixe um modo em qualquer elemento com <code>data-nui-theme</code> e aninhe temas à vontade.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Sobrescreva os tokens' },
          {
            kind: 'p',
            html: 'Os tokens ficam em <code>@layer nui</code>, então o CSS comum da sua aplicação os sobrescreve. Defina-os em <code>:root</code> para a aplicação inteira ou em qualquer elemento para uma parte dela.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Uma paleta para a sua marca' },
          {
            kind: 'p',
            html: 'As escalas de cor são geradas. Altere um matiz em <code>packages/tokens/scripts/palette.ts</code> e gere tudo de novo: o script reajusta cada cor ao sRGB e verifica novamente o contraste de cada par de texto e fundo.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Personalização',
        description:
          'Física de molas, efeitos ao pressionar, animações de entrada, formatos de canto, raio e densidade: ajuste o Needless UI na aplicação toda ou por componente.',
        blocks: [
          {
            kind: 'p',
            html: 'Cada componente tem uma personalidade que você pode mudar: a mola com que ele se move, o que um botão faz sob o seu dedo, como diálogos e menus entram em cena, o formato e o tamanho dos cantos e quanto espaço ele ocupa. Cada traço é um atributo para tudo o que está dentro de um elemento, ou um input para um único componente.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Um atributo, uma subárvore inteira' },
          {
            kind: 'p',
            html: 'Coloque os atributos <code>data-nui-*</code> no <code>&lt;body&gt;</code> para a aplicação inteira, ou em qualquer elemento para uma parte dela. O mais próximo vence, por isso eles podem ser aninhados. Eles só definem propriedades personalizadas CSS, então funcionam do mesmo jeito com qualquer framework, ou sem nenhum.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Um único componente' },
          {
            kind: 'p',
            html: 'No Angular, <code>nuiButton</code>, <code>nuiDialog</code> e <code>nuiMenu</code> aceitam os mesmos valores como inputs. Os inputs que você não definir seguem os atributos ao redor do componente.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Molas compiladas para CSS' },
          {
            kind: 'p',
            html: 'O movimento é física de molas: rigidez, amortecimento e massa em vez de uma duração e uma curva. O compilador de tokens resolve cada mola e a escreve no CSS como o tempo que ela leva para se estabilizar e uma função de easing <code>linear()</code>, então ela roda no compositor sem JavaScript. Seis molas vêm como tokens, de <code>--nui-spring-snappy</code> a <code>--nui-spring-mechanical</code>, e <code>--nui-motion</code> guarda a que está em uso.',
          },
          {
            kind: 'p',
            html: 'Qualquer outra mola está a um input de distância. O Angular a compila em tempo de execução com o mesmo solver, e <code>springTransition()</code> entrega o CSS para os seus próprios elementos.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Qualquer meio-termo' },
          {
            kind: 'p',
            html: 'Os presets são atalhos. Para qualquer outra coisa, defina você mesmo as propriedades personalizadas: qualquer transformação para <code>--nui-press</code> e <code>--nui-enter</code>, qualquer número para <code>--nui-radius-scale</code> e <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Acessibilidade' },
          {
            kind: 'p',
            html: 'Quando o sistema pede menos movimento, as molas se tornam instantâneas, e os efeitos ao pressionar e as animações de entrada param de se mover. A densidade nunca deixa um controle abaixo do tamanho mínimo de alvo de 24 px das WCAG 2.2, e nenhum preset mexe nas cores, então todas as verificações de contraste continuam valendo. Navegadores sem <code>corner-shape</code> desenham todos os cantos arredondados.',
          },
        ],
      },
    },
    playground: {
      label: 'Playground de personalização',
      motion: 'Movimento',
      custom: 'personalizado',
      stiffness: 'Rigidez',
      damping: 'Amortecimento',
      mass: 'Massa',
      press: 'Ao pressionar',
      enter: 'Entrada',
      corners: 'Cantos',
      radius: 'Raio',
      density: 'Densidade',
      surprise: 'Surpreenda-me',
      reset: 'Restaurar padrões',
      hint: 'Mantenha um botão pressionado e depois solte. Abra o diálogo e o menu para ver como eles entram em cena.',
      save: 'Salvar',
      cancel: 'Cancelar',
      delete: 'Excluir',
      openDialog: 'Abrir diálogo',
      openMenu: 'Abrir menu',
      menu: ['Renomear', 'Duplicar', 'Excluir'],
      dialogTitle: 'Desnecessariamente animado',
      dialogText: 'Este diálogo chegou exatamente do jeito que você pediu.',
      close: 'Fechar',
      curve:
        'A posição da mola ao longo do tempo. Ela começa embaixo e termina em repouso na linha tracejada.',
      settles: (ms, overshoot) => `Estabiliza em ${ms} ms · ultrapassa o alvo em ${overshoot}%`,
      instant: 'Sem movimento: tudo pula direto para o destino.',
      stuck:
        'Esta mola não se estabiliza em menos de 10 segundos. Aumente o amortecimento ou a rigidez; enquanto isso, os componentes mantêm a última mola que se estabilizou.',
      reducedMotion:
        'Seu sistema pede menos movimento, então nada se move aqui. Molas, efeitos ao pressionar e animações de entrada voltam quando ele deixar de pedir.',
      noCornerShape:
        'Este navegador ainda não consegue desenhar formatos de canto, então todos os cantos continuam arredondados.',
      everywhere: 'Em qualquer elemento, para tudo o que ele contém:',
      oneComponent: 'Em um único componente, no Angular:',
    },
  },

  notFound: {
    title: 'Página não encontrada',
    description:
      'Esta página não existe. Explore os componentes do Needless UI ou comece pela página inicial.',
    text: 'Esta página não existe ou foi movida.',
    home: 'Ir para a página inicial',
    components: 'Ver componentes',
  },

  legal: {
    translationNote:
      'Esta tradução é fornecida por conveniência; em caso de divergência, prevalece o texto em inglês.',
    labels: {
      name: 'Nome',
      address: 'Endereço',
      email: 'E-mail',
      uid: 'UID',
      vat: 'Número de IVA',
    },
    notice: {
      title: 'Aviso legal',
      description:
        'Quem mantém o needlessui.com: nome, endereço postal e e-mail do responsável, com os dados do registro comercial e do IVA.',
      operator: 'Responsável pelo site',
      legalForm: 'empresa individual',
      country: 'Suíça',
      register: 'Registro comercial',
      registerEntry: 'Inscrita no registro comercial do cantão de Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Responsabilidade' },
        {
          kind: 'p',
          html: 'O conteúdo deste site é elaborado com cuidado, mas sem nenhuma garantia de que seja exato, completo ou atualizado. Os sites vinculados estão fora do nosso controle; os respectivos responsáveis respondem pelo conteúdo deles.',
        },
        { kind: 'h2', id: 'license', text: 'Licença' },
        {
          kind: 'p',
          html: 'O Needless UI, incluindo este site, é de código aberto sob a <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">licença MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Política de privacidade',
      description:
        'Como o needlessui.com trata dados pessoais: sem cookies, sem analytics, sem rastreamento. O que a hospedagem processa na sua visita e quais são seus direitos.',
      updated: 'Última atualização: 24 de setembro de 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Esta política explica quais dados pessoais são tratados quando você visita www.needlessui.com e quais são os seus direitos. Em resumo: o site não usa cookies, ferramentas de análise nem rastreamento, e nunca pede seus dados pessoais.',
        },
        { kind: 'h2', id: 'controller', text: 'Responsável pelo tratamento' },
        {
          kind: 'p',
          html: 'O responsável indicado no <a href="/legal">aviso legal</a>, Angelo Lamonaca. Contato: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hospedagem' },
        {
          kind: 'p',
          html: 'O site é hospedado pela Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Quando você abre uma página, seu navegador envia os dados técnicos que qualquer site recebe: seu endereço IP, a data e a hora, a página solicitada, a página de onde você veio e o user agent do navegador. A Vercel trata esses dados em nosso nome para entregar o site e mantê-lo seguro, e os guarda apenas pelo tempo necessário para isso. Esse tratamento pode ocorrer nos EUA; a Vercel é certificada pelo EU-U.S. Data Privacy Framework, pela extensão dele para o Reino Unido e pelo Swiss-U.S. Data Privacy Framework. Consulte o <a href="https://vercel.com/legal/privacy-policy">aviso de privacidade da Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Quando o GDPR se aplica, a base legal é o nosso legítimo interesse em manter um site seguro (art. 6(1)(f) do GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies e armazenamento local' },
        {
          kind: 'p',
          html: 'O site não usa cookies. Se você escolher o tema claro ou escuro, o armazenamento local do navegador guarda essa escolha para a sua próxima visita. Ela nunca sai do seu dispositivo; para removê-la, volte para “Sistema” ou apague os dados do site.',
        },
        { kind: 'h2', id: 'tracking', text: 'Sem rastreamento' },
        {
          kind: 'p',
          html: 'Não há ferramentas de análise, anúncios, plugins de redes sociais, conteúdo incorporado de terceiros nem fontes externas. Os links para o GitHub e o npm levam a sites com políticas de privacidade próprias.',
        },
        { kind: 'h2', id: 'rights', text: 'Seus direitos' },
        {
          kind: 'p',
          html: 'Você pode perguntar quais dados pessoais seus são tratados e pedir que sejam corrigidos ou excluídos. Quando o GDPR se aplica, você também pode se opor ao tratamento, pedir a limitação dele e receber seus dados em um formato portátil. Escreva para {email}. Você também pode apresentar uma reclamação a uma autoridade de controle: na Suíça, o Comissário Federal de Proteção de Dados e Transparência (FDPIC); na UE, a autoridade do seu país.',
        },
        { kind: 'h2', id: 'changes', text: 'Alterações' },
        {
          kind: 'p',
          html: 'Esta política muda quando o site muda, por exemplo, se ele passar para outra hospedagem. A data abaixo indica a versão atual.',
        },
      ],
    },
  },
};
