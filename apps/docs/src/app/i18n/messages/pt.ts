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
          'As linhas também podem ser aninhadas. <code>groupBy</code> as agrupa por colunas, com o <code>aggregate</code> de cada coluna nas linhas de grupo e em uma linha de <code>totals</code>; <code>children</code> mostra dados em árvore; e um template <code>nuiGridDetail</code> se abre sob uma linha. Agrupada ou aninhada, a tabela é uma <code>treegrid</code>.',
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
          groups: {
            title: 'Grupos e totais',
            text: 'Agrupe por uma ou duas colunas. As linhas de grupo contam os pedidos e mostram a soma e a média dos valores deles, e <code>totals</code> faz o mesmo para todas as linhas. A seta para a esquerda fecha um grupo.',
          },
          tree: {
            title: 'Dados em árvore',
            text: '<code>children</code> dá a cada pasta os seus arquivos. As linhas abrem com a seta para a direita ou com o botão de expandir, e <code>[(expanded)]</code> guarda quais estão abertas. Uma busca mantém abertas as pastas acima de um resultado.',
          },
          details: {
            title: 'Detalhes da linha',
            text: 'Um template <code>nuiGridDetail</code> mostra os itens de um pedido logo abaixo dele, a partir de uma coluna de botões de alternância, e <code>[(details)]</code> guarda quais estão abertos.',
          },
          live: {
            title: 'Dados ao vivo, exportação e impressão',
            text: 'Os preços mudam a cada dois segundos, e <code>flash</code> mostra quais células mudaram. <code>exportXlsx()</code> baixa uma planilha de verdade, <code>print()</code> imprime todas as linhas, e <code>layout="auto"</code> mostra cards em telas estreitas.',
          },
          cards: {
            title: 'Cards no celular',
            text: '<code>layout="list"</code> mostra as linhas como cards, e <code>auto</code> faz isso abaixo de 36rem. Os cards não têm linha de cabeçalho, então uma barra de ferramentas os ordena e seleciona todos, e o botão “Filter” dela abre o painel da coluna que você escolher. <code>toolbar</code> também pode mostrá-la acima de uma tabela, ou omiti-la.',
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
              'groupBy, collapsed':
                'As colunas pelas quais agrupar as linhas, a partir da mais externa, e as chaves dos grupos fechados.',
              children: 'Os filhos de uma linha: a grade mostra dados em árvore.',
              'expanded, details':
                'As chaves das linhas abertas nos dados em árvore, e das linhas com os detalhes abertos.',
              'totals, flash':
                'Uma linha de agregados sobre todas as linhas filtradas; células que piscam quando o texto delas muda, em linhas com um <code>rowId</code> estável.',
              layout:
                '<code>list</code> mostra as linhas como cards, e <code>auto</code> faz isso em telas estreitas.',
              toolbar:
                'Uma barra que ordena, filtra e seleciona todas as linhas: sempre, nunca, ou <code>auto</code> com cards.',
              'exportXlsx, print':
                'As linhas filtradas e ordenadas como planilha; imprime todas as linhas.',
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
              aggregate:
                'O que as linhas de grupo e a linha de totais mostram: uma soma, uma média, um mínimo, um máximo, uma contagem ou uma função.',
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
          NuiGridDetail: {
            summary:
              'Os detalhes de uma linha, mostrados abaixo dela quando abertos. O contexto contém a linha.',
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
          [
            'Setas para a direita e para a esquerda em um grupo',
            'Abrem ou fecham o grupo; também na primeira célula de uma linha com filhos.',
          ],
          ['Enter em um grupo', 'Abre ou fecha o grupo; Espaço seleciona as linhas dele.'],
          ['Enter em um botão de detalhes', 'Mostra ou oculta os detalhes da linha.'],
        ],
        notes: [
          'Uma <code>&lt;table&gt;</code> nativa com <code>role="grid"</code>, nomeada por <code>label</code>. Os cabeçalhos têm <code>aria-sort</code>, e as linhas selecionáveis, <code>aria-selected</code>.',
          'A grade é uma única parada de tabulação. O foco passa de célula em célula com um <code>tabindex</code> móvel, então os leitores de tela leem cada célula com os cabeçalhos da linha e da coluna.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> e <code>aria-colindex</code> continuam corretos quando as linhas são paginadas ou virtualizadas.',
          'Ordenação, filtros, paginação e erros de edição são anunciados de forma educada em uma região de status.',
          'Linhas agrupadas ou aninhadas fazem da tabela uma <code>treegrid</code>: as linhas têm <code>aria-level</code>, <code>aria-setsize</code> e <code>aria-posinset</code>, e <code>aria-expanded</code> quando podem ser abertas. Os agregados são lidos com o tipo, como “Sum: 475”.',
          'Os cards não têm linha de cabeçalho, então uma barra de ferramentas vem primeiro: um grupo chamado “Sort and filter” com um select rotulado para a coluna pela qual ordenar, botões de alternância para a direção, uma caixa de seleção “Select all rows” com seleção múltipla e um botão “Filter” que abre o painel da coluna, onde um select escolhe a coluna. A parada de tabulação da grade passa para o primeiro card.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Componente de chat com IA para Angular',
        summary: 'Converse com um modelo: respostas em streaming, ferramentas, versões e arquivos.',
        description:
          'Chat acessível para Angular e assistentes de IA: respostas Markdown em streaming, raciocínio, ferramentas, fontes, arquivos e novas tentativas como versões.',
        apiDescription:
          'Referência da API do chat do Needless UI: inputs de nui-chat, a NuiChatSession que faz streaming, mensagens, templates de ferramentas e leitores de stream.',
        a11yDescription:
          'Teclado e acessibilidade do chat do Needless UI: um feed de mensagens nomeadas, Page Up e Page Down, e respostas anunciadas só quando completas.',
        overview: [
          'O chat é tudo o que fica entre os seus usuários e um modelo. Crie uma <code>NuiChatSession</code> com uma função <code>respond</code>, e o <code>&lt;nui-chat&gt;</code> faz o resto: transmite a resposta em Markdown, acompanha o texto página abaixo até o usuário rolar para cima e, enquanto ela chega, transforma o botão de enviar em um botão de parar.',
          '<code>respond</code> retorna texto, uma promise, uma <code>async function*</code> ou um Observable, então qualquer API serve. Além do texto, uma resposta pode trazer o raciocínio do modelo, as chamadas de ferramentas (desenhadas por templates seus) e as fontes usadas. <code>nuiEventStream</code> lê os server-sent events que a maioria das APIs de modelos transmite.',
          'Nada se perde: uma resposta refeita ou uma pergunta editada vira uma nova versão ao lado da antiga, e a conversa guarda todos os ramos. Os leitores de tela anunciam cada resposta quando ela fica completa, não palavra por palavra.',
        ],
        examples: {
          assistant: {
            title: 'Um assistente',
            text: 'Sugestões iniciam a conversa. As respostas chegam em streaming como Markdown; interrompa, refaça ou avalie cada uma, ou edite sua pergunta. <code>attach</code> aceita arquivos escolhidos, colados ou arrastados.',
          },
          tools: {
            title: 'Raciocínio, ferramentas e fontes',
            text: 'Deltas adicionam à resposta o raciocínio do modelo, as chamadas de ferramentas e as fontes. <code>nuiChatTool</code> desenha a ferramenta de clima como um card; as outras ficam recolhidas, com a entrada e a saída.',
          },
          server: {
            title: 'Streaming de um servidor',
            text: '<code>nuiEventStream</code> lê um stream de eventos no estilo da OpenAI, e um <code>NuiChatError</code> mostra a mensagem dele. <code>all()</code> salva a conversa, com versões e tudo.',
          },
        },
        api: {
          NuiChat: {
            summary: 'A conversa e a caixa de texto, juntas.',
            members: {
              session: 'A conversa a ser mostrada.',
              assistant: 'O nome do assistente, nos títulos que os leitores de tela anunciam.',
              headingLevel:
                'O nível do título de cada mensagem, que só os leitores de tela percebem. Os títulos nas respostas ficam um nível abaixo.',
              announce:
                'O que os leitores de tela anunciam quando uma resposta fica completa: tudo, um aviso curto ou nada.',
              images:
                'Mostra as imagens nas respostas. Senão, o texto delas vira um link para a imagem.',
              value: 'O texto sendo escrito.',
              placeholder: 'O texto mostrado no campo vazio.',
              suggestions: 'Prompts para enviar com um clique, até a primeira mensagem.',
              sendOn:
                'Se o Enter envia, ou Ctrl ou ⌘ + Enter. <code>auto</code> envia com Enter onde há teclado; em telas touch, o Enter quebra a linha e o botão envia.',
              disabled: 'Impede o envio pela caixa de texto.',
              attach: 'Aceita arquivos: escolhidos, colados ou arrastados.',
              accept:
                'Os tipos de arquivo aceitos, como em <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Quantos arquivos uma mensagem pode levar.',
              maxSize: 'O tamanho máximo de arquivo, em bytes.',
              labels: 'Todo texto que o chat mostra ou anuncia, para traduzir.',
              rated:
                'Emite uma resposta que o usuário avaliou, com a avaliação, ou <code>null</code> quando ela é desfeita.',
              focus: 'Move o foco para o campo de texto.',
              scrollToEnd: 'Rola até a última mensagem e a acompanha.',
            },
          },
          NuiChatSession: {
            summary:
              'A conversa, sem nenhum DOM. Crie-a em um componente, com as opções <code>respond</code>, <code>messages</code> e <code>id</code>.',
            members: {
              respond:
                'A sua função: escreve a resposta para <code>request.messages</code> e se interrompe quando <code>request.signal</code> é abortado.',
              messages: 'A conversa na tela.',
              all: 'Todas as mensagens de todas as versões, para salvar e passar de volta como <code>messages</code>.',
              busy: 'Indica se há uma resposta a caminho.',
              send: 'Envia uma mensagem e pede uma resposta.',
              stop: 'Interrompe a resposta, mantendo o que ela já escreveu.',
              retry: 'Pergunta de novo. A nova resposta é uma versão ao lado da antiga.',
              edit: 'Envia uma nova versão de uma das mensagens do usuário.',
              versions: 'Todas as versões de uma mensagem, da mais antiga para a mais nova.',
              show: 'Muda a conversa para esta versão.',
              rate: 'Registra a avaliação do usuário sobre uma resposta.',
              'remove, load, clear':
                'Remove uma mensagem e o que vem depois, substitui a conversa ou recomeça do zero.',
            },
          },
          NuiChatMessage: {
            summary:
              'Uma mensagem. Mensagens com o mesmo <code>parent</code> são versões umas das outras.',
            members: {
              'id, parent': 'A chave da mensagem, e a da mensagem que ela segue.',
              role: 'Quem a escreveu.',
              text: 'Markdown do assistente, texto simples do usuário.',
              status: 'Em que ponto está uma resposta, da espera ao fim.',
              reasoning: 'O que o modelo pensou antes de responder.',
              tools: 'As ferramentas que ele chamou, com estado, entrada e saída.',
              sources: 'As páginas que ele usou.',
              attachments: 'Os arquivos enviados com ela.',
              rating: 'A avaliação do usuário.',
              data: 'Qualquer outra coisa para guardar com ela, como o nome do modelo.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Desenha uma chamada de ferramenta, como um card de clima. O contexto contém a chamada e a mensagem dela.',
            members: {
              nuiChatTool:
                'O nome da ferramenta. Sem nome, desenha toda chamada que nenhum outro template nomeia.',
            },
          },
          NuiChatThread: {
            summary:
              'A conversa sozinha, para um layout seu. Ela recebe os inputs de <code>nui-chat</code> que tratam da conversa.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'A caixa de texto sozinha. Ela recebe os inputs de <code>nui-chat</code> que tratam da escrita.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'O que <code>nuiEventStream</code> produz para cada evento. <code>nuiTextStream</code> lê texto simples e <code>nuiJsonStream</code>, linhas JSON; os três recebem uma resposta de <code>fetch</code>.',
            members: {
              event: 'O nome do evento.',
              data: 'As linhas de dados dele, unidas.',
              id: 'O último id que o stream enviou.',
            },
          },
          NuiChatError: {
            summary:
              'Lance-o em <code>respond</code> para mostrar a mensagem dele. Qualquer outro erro mostra uma mensagem genérica, para que nada interno vaze.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down e Page Up', 'Vai para a mensagem seguinte ou anterior.'],
          ['Ctrl + End e Ctrl + Home', 'Sai da conversa, para a frente ou para trás.'],
          ['Enter', 'Envia. Com Shift, começa uma nova linha.'],
          ['Esc', 'Sai da edição de uma mensagem.'],
        ],
        notes: [
          'A conversa é um <code>feed</code> de elementos <code>article</code>. Cada um é nomeado por um título que só os leitores de tela percebem, como “You said”, e tem <code>aria-posinset</code> e <code>aria-setsize</code>.',
          'Uma resposta sendo escrita fica <code>aria-busy</code>. Quando completa, ela é anunciada inteira; uma falha é anunciada na hora.',
          'Todo botão de ícone tem um nome e um tooltip. As avaliações são botões de alternância, e o seletor de versões é um grupo com um nome como “Version 2 of 3”.',
          'O raciocínio e as chamadas de ferramentas são elementos expansíveis nativos. Remover um arquivo devolve o foco ao campo de texto.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Componente renderizador de Markdown para Angular',
        summary: 'Renderize Markdown com segurança, mesmo enquanto ele chega em streaming.',
        description:
          'Renderizador Markdown seguro para Angular e respostas de IA: tabelas do GitHub, listas de tarefas e blocos de código como elementos reais, fluido no streaming.',
        apiDescription:
          'Referência da API do renderizador de Markdown do Needless UI: inputs de nui-markdown, o template para blocos de código e o parser por trás dele.',
        a11yDescription:
          'Acessibilidade do renderizador de Markdown do Needless UI: títulos, listas e tabelas reais, regiões de rolagem com nome e um botão de copiar que fala.',
        overview: [
          'O renderizador de Markdown transforma textos como os que um modelo escreve em elementos reais: títulos, listas e listas de tarefas, citações, tabelas, blocos de código com botão de copiar, e links. Ele converte o texto em uma árvore e a desenha com templates, então HTML bruto continua sendo texto e nada é inserido como HTML.',
          'Com <code>streaming</code>, o texto escrito pela metade já aparece como ficará quando completo: um delimitador de código aberto já é um bloco de código, um <code>**</code> sozinho espera o seu par, e um cursor acompanha a última palavra. Blocos que não mudaram mantêm o DOM.',
          'Os links só funcionam para endereços web e de e-mail e números de telefone, e as imagens continuam sendo links até você ativar <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Um documento',
            text: 'Os títulos começam em <code>headingLevel</code>, então se encaixam sob os da página. Tabelas largas e código rolam nas próprias regiões.',
          },
          streaming: {
            title: 'Streaming',
            text: 'O mesmo texto, alguns caracteres por vez. Nenhum símbolo aparece nem por um instante, e só o último bloco é renderizado de novo.',
          },
          highlight: {
            title: 'Destaque de código',
            text: '<code>nuiMarkdownCode</code> desenha os blocos de código com um template seu, aqui com um highlighter minúsculo. Ele recebe o código e a linguagem.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Renderiza Markdown como elementos.',
            members: {
              text: 'O Markdown.',
              streaming: 'O texto ainda está chegando.',
              headingLevel:
                'O nível de um título <code>#</code>. Os mais profundos vêm em seguida, até 6.',
              images:
                'Mostra as imagens. Senão, o texto delas vira um link, já que uma imagem pode rastrear.',
              labels: 'Os textos do botão de copiar e afins, para traduzir.',
              codeTemplate:
                'Um template de bloco de código vindo de fora, como de um chat que contém este renderizador.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Desenha blocos de código. O contexto contém o código, <code>lang</code>, e <code>open</code> enquanto o bloco ainda está chegando.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'O parser e as funções auxiliares dele, para usar sem o componente.',
            members: {
              nuiParseMarkdown: 'A árvore de blocos e elementos inline que o componente desenha.',
              nuiMarkdownToText:
                'O texto simples, uma linha por bloco, para anunciar ou pré-visualizar.',
              nuiSafeUrl:
                'Se um link leva a um endereço web ou de e-mail, ou a um número de telefone.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Alcança os links, os botões de copiar e as tabelas e o código largos, para rolá-los.',
          ],
        ],
        notes: [
          'Títulos, listas, citações, tabelas com cabeçalhos <code>th</code> e <code>scope</code>, e código são elementos reais.',
          'Tabelas largas e blocos de código rolam dentro de uma região focável; a região de uma tabela recebe o nome dos cabeçalhos dela.',
          'As caixas das listas de tarefas dizem se cada tarefa está concluída. O botão de copiar se chama “Copy code” e diz “Copied” por uma mensagem de status.',
          'O cursor do streaming fica oculto para leitores de tela e imóvel com movimento reduzido.',
        ],
      },
      calendar: {
        name: 'Calendário',
        title: 'Componente de calendário para Angular',
        summary: 'Escolha um dia, um intervalo ou vários dias, também pelo teclado.',
        description:
          'Calendário acessível para Angular: um dia, um intervalo ou vários dias, com mínimo e máximo, dias indisponíveis, meses lado a lado e números de semana.',
        apiDescription:
          'Referência da API do calendário do Needless UI: models de seleção de nui-calendar, min, max e dias indisponíveis, meses lado a lado e rótulos.',
        a11yDescription:
          'Teclado e acessibilidade do calendário do Needless UI: uma grade de dias com nome, setas por dia e semana, Page Up e Page Down por mês.',
        overview: [
          'O calendário permite escolher um dia, um intervalo de dias ou vários dias. Os valores são datas ISO simples, como <code>2026-09-25</code>, sem fuso horário para deslocá-las, então vão direto para um servidor ou um <code>&lt;input type="date"&gt;</code>.',
          'As semanas começam no primeiro dia da localidade, e os nomes e dígitos seguem o idioma dela. <code>min</code>, <code>max</code> e <code>unavailable</code> excluem dias, <code>months</code> mostra vários meses lado a lado, e o título passa para meses e anos para chegar a datas distantes.',
          'Todos os dias são alcançáveis pelo teclado, como no seletor de data do WAI-ARIA, e cada um tem como nome a data completa.',
        ],
        examples: {
          delivery: {
            title: 'Um dia de entrega',
            text: 'Dias antes de hoje, depois de <code>max</code> ou excluídos por <code>unavailable</code> não podem ser escolhidos, mas o teclado continua passando por eles.',
          },
          stay: {
            title: 'Um intervalo',
            text: 'Com <code>selection="range"</code>, a primeira escolha inicia o intervalo e a faixa acompanha o ponteiro até a segunda. <code>months="2"</code> e <code>weekNumbers</code> mostram mais coisas ao mesmo tempo.',
          },
          'days-off': {
            title: 'Vários dias',
            text: 'Com <code>selection="multiple"</code>, cada escolha adiciona ou remove um dia. <code>firstDay</code> faz a semana começar em um dia diferente do da localidade.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Um calendário para escolher dias.',
            members: {
              selection: 'Quantos dias podem ser escolhidos.',
              value: 'O dia escolhido.',
              values: 'Os dias escolhidos, em ordem.',
              range: 'O intervalo escolhido, com as duas pontas incluídas.',
              month: 'O mês exibido, o primeiro quando há vários.',
              view: 'Dias, meses ou anos.',
              'min, max': 'O primeiro e o último dia que podem ser escolhidos.',
              unavailable: 'Exclui outros dias, como feriados.',
              months: 'Meses lado a lado.',
              weekNumbers: 'Mostra os números de semana ISO.',
              firstDay:
                'O primeiro dia da semana, 1 para segunda-feira. Por padrão, o da localidade.',
              locale: 'Formata nomes e dígitos, e escolhe o primeiro dia da semana.',
              labels: 'Todo texto que o calendário mostra ou anuncia, para traduzir.',
              picked: 'Emite cada escolha: um dia, ou um intervalo quando completo.',
              focusDate: 'Move o foco do teclado para um dia, mostrando o mês dele.',
            },
          },
          NuiDateRange: {
            summary: 'Um intervalo de dias.',
            members: { 'start, end': 'O primeiro e o último dia, ambos incluídos.' },
          },
        },
        keyboard: [
          [
            'Setas para a esquerda e para a direita',
            'Dia anterior ou seguinte. As setas se invertem em textos da direita para a esquerda.',
          ],
          ['Setas para cima e para baixo', 'Semana anterior ou seguinte.'],
          ['Home e End', 'Primeiro ou último dia da semana.'],
          ['Page Up e Page Down', 'Mês anterior ou seguinte; com Shift, ano.'],
          ['Enter ou Espaço', 'Escolhe o dia, ou entra em um mês ou ano.'],
          [
            'Esc',
            'Descarta a primeira ponta de um intervalo, ou volta à visualização mais detalhada.',
          ],
        ],
        notes: [
          'Cada mês é uma <code>grid</code> nomeada pelo título, com os nomes completos dos dias da semana em <code>abbr</code>.',
          'Cada dia é nomeado pela data completa, acrescida de “Today”, “unavailable” e das pontas de um intervalo. <code>aria-selected</code> marca o que está escolhido, e <code>aria-disabled</code>, o que não pode ser.',
          'A grade é uma única parada de tabulação, com um <code>tabindex</code> móvel. Os botões de anterior e próximo anunciam o novo mês.',
        ],
      },
      'date-picker': {
        name: 'Seletor de data',
        title: 'Componentes de seletor de data e hora para Angular',
        summary: 'Digite uma data ou hora em segmentos, ou escolha em um calendário.',
        description:
          'Seletores de data, hora e intervalo acessíveis para Angular: segmentos na ordem da localidade, calendário em popover, presets e suporte a formulários.',
        apiDescription:
          'Referência da API dos seletores de data do Needless UI: nui-date-field, nui-time-field, nui-date-picker e nui-date-range-picker, com presets.',
        a11yDescription:
          'Teclado e acessibilidade dos seletores de data do Needless UI: um spinbutton para cada parte da data e um calendário em um diálogo.',
        overview: [
          'Campos de data e hora são digitados em segmentos: dia, mês e ano na ordem da localidade, depois horas e minutos no relógio de 12 ou 24 horas dela. Cada segmento é um spinbutton: digite os dígitos e ele avança sozinho, ou mude o valor passo a passo com as setas. Cole uma data inteira e todos os segmentos são preenchidos.',
          'Os seletores adicionam um calendário em um popover, para uma data ou um intervalo com presets. Os valores são strings ISO simples, como <code>2026-09-25</code> ou <code>2026-09-25T09:30</code>, e todo campo funciona com Signal Forms, formulários reativos e <code>ngModel</code>.',
          'Neste site, os exemplos seguem o idioma da página: troque o idioma para ver a ordem, os separadores e os dígitos mudarem.',
        ],
        examples: {
          fields: {
            title: 'Campos de data e hora',
            text: 'Digite os dígitos, ou use as setas. Um segundo Backspace volta um segmento. <code>minuteStep</code> define quanto as setas movem os minutos.',
          },
          pickers: {
            title: 'Seletores de data',
            text: 'O botão abre um calendário no dia escolhido, e a escolha o fecha. Com <code>granularity="minute"</code>, o seletor também recebe uma hora, e o calendário muda só a data.',
          },
          range: {
            title: 'Um intervalo de datas',
            text: 'Dois campos e um calendário de dois meses. <code>nuiDateRangePresets()</code> adiciona intervalos comuns; o valor continua null até que as duas pontas sejam definidas, em ordem.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Uma data, ou uma data e hora, digitada em segmentos.',
            members: {
              value: 'O valor, ou null até que todos os segmentos sejam preenchidos.',
              granularity: 'Para no dia, ou continua até a hora, o minuto ou o segundo.',
              'min, max':
                'O primeiro e o último valor permitidos. Fora desses limites, o campo fica inválido.',
              placeholder: 'O ponto de partida dos segmentos vazios ao usar as setas.',
              hourCycle: 'Um relógio de 12 ou 24 horas. Por padrão, o da localidade.',
              minuteStep: 'Quanto as setas movem os minutos.',
              'disabled, readonly': 'Impedem alterações.',
              locale: 'Define a ordem, os separadores, os dígitos e o relógio.',
              labels: 'Todo texto que o campo anuncia, para traduzir.',
              invalid: 'Se o valor está fora de <code>min</code> e <code>max</code>.',
              focus: 'Move o foco para o primeiro segmento vazio.',
            },
          },
          NuiTimeField: {
            summary:
              'Um horário digitado em segmentos. Aceita os mesmos inputs que o campo de data.',
            members: { granularity: 'Para na hora, no minuto ou no segundo.' },
          },
          NuiDatePicker: {
            summary:
              'Um campo de data com um calendário em um popover. Aceita os inputs do campo de data, e estes.',
            members: {
              unavailable: 'Dias que o calendário não deixa escolher.',
              'firstDay, weekNumbers': 'Repassados ao calendário.',
              labels: 'Os textos do campo, do botão e do calendário.',
              show: 'Abre o calendário.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Dois campos de data com um calendário de intervalo. Aceita os inputs do seletor de data, e estes.',
            members: {
              value: 'O intervalo, ou null até que as duas pontas sejam definidas, em ordem.',
              presets: 'Intervalos com nome para escolher com um clique.',
              months: 'Meses lado a lado no calendário; só um em telas estreitas.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Um intervalo com nome, fixo ou criado na hora da escolha.',
            members: {
              label: 'O nome dele.',
              range: 'O intervalo, ou uma função que o cria.',
            },
          },
        },
        keyboard: [
          [
            'Dígitos',
            'Digitam no segmento. Ele avança assim que nenhum outro dígito puder vir depois.',
          ],
          [
            'Setas para cima e para baixo',
            'Mudam o segmento passo a passo; Page Up e Page Down dão passos maiores.',
          ],
          ['Setas para a esquerda e para a direita, Tab', 'Segmento anterior ou seguinte.'],
          ['Backspace', 'Limpa o segmento e depois volta para o anterior.'],
          ['A e P', 'Define AM ou PM.'],
        ],
        notes: [
          'Um campo é um <code>group</code>: dê um nome a ele com <code>aria-label</code> ou <code>aria-labelledby</code>. Cada segmento é um <code>spinbutton</code> com o nome da sua parte, que lê os meses pelo nome e os segmentos vazios como “Empty”.',
          'Os segmentos são texto editável, então os teclados virtuais já abrem nos números.',
          'O botão do seletor se chama “Choose a date”, e o popover dele é um <code>dialog</code>. Escolher uma data devolve o foco ao botão.',
          'O calendário interno funciona como o <a href="/components/calendar">calendário</a>.',
        ],
      },
      scheduler: {
        name: 'Agendador',
        title: 'Componente de agendador para Angular',
        summary:
          'Eventos em um mês, uma semana, um dia ou uma agenda, arrastados até o lugar certo.',
        description:
          'Agendador acessível para Angular: mês, semana, dia e agenda, eventos sobrepostos lado a lado, arrastar para mover e redimensionar, e tudo pelo teclado.',
        apiDescription:
          'Referência da API do agendador do Needless UI: visualizações, eventos, edição e seleção de nui-scheduler, seus outputs e o template de eventos.',
        a11yDescription:
          'Teclado e acessibilidade do agendador do Needless UI: grades de dias e horários, eventos com nome e um equivalente no teclado para cada arrasto.',
        overview: [
          'O agendador mostra eventos em um mês, uma semana, um dia ou uma agenda. Os eventos são dados simples com horários ISO; os que se sobrepõem dividem a largura, os que passam da meia-noite aparecem nos dois dias, e os de dia inteiro ficam no topo, como barras.',
          'Ele nunca altera seus eventos por conta própria. Arraste um evento, ou a borda inferior dele, e <code>eventChange</code> informa os novos horários; escolha um horário na grade, e <code>slotSelect</code> informa qual foi. <code>rangeChange</code> diz quais dias estão sendo exibidos, para você carregar os eventos deles.',
          'Tudo o que um ponteiro faz, o teclado também faz: a grade é uma única parada de tabulação, as setas percorrem dias e horários, e Alt com as setas move um evento.',
        ],
        examples: {
          planner: {
            title: 'Uma semana para planejar',
            text: 'Com <code>editable</code> e <code>selectable</code>, arraste os eventos para movê-los, arraste a borda inferior deles para redimensioná-los e arraste sobre um horário livre para adicionar um. O exemplo atualiza os eventos a partir dos outputs.',
          },
          month: {
            title: 'Um mês e uma agenda',
            text: 'Eventos de vários dias aparecem como barras; um dia cheio mostra quantos eventos a mais existem. <code>views</code> oferece só o mês e a agenda dos próximos <code>agendaDays</code> dias.',
          },
          rooms: {
            title: 'Um dia de reservas de salas',
            text: '<code>nuiSchedulerEvent</code> desenha cada reserva com a sala e o organizador. <code>slotMinutes="15"</code> deixa as linhas mais finas.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Eventos em um mês, uma semana, um dia ou uma agenda.',
            members: {
              events: 'Os eventos a exibir.',
              view: 'A visualização exibida.',
              views: 'As visualizações entre as quais é possível alternar.',
              date: 'O dia exibido, onde também está o foco do teclado.',
              slotMinutes:
                'Minutos por linha da grade de horários, e o passo com que os eventos se movem.',
              scrollHour: 'A hora em que a grade de horários abre.',
              agendaDays: 'Quantos dias à frente a agenda mostra.',
              editable:
                'Os eventos podem ser movidos e redimensionados, com o ponteiro e com o teclado.',
              selectable: 'É possível escolher um horário na grade, para criar eventos.',
              firstDay:
                'O primeiro dia da semana, 1 para segunda-feira. Por padrão, o da localidade.',
              headingLevel: 'O nível do título; os dias da agenda ficam um nível abaixo.',
              locale: 'Formata dias e horários.',
              labels: 'Todo texto que o agendador mostra ou anuncia, para traduzir.',
              eventClick: 'Emite um evento clicado, ou aberto com Enter.',
              eventChange:
                'Emite os novos horários de um evento depois de movê-lo ou redimensioná-lo.',
              slotSelect: 'Emite o horário escolhido na grade.',
              rangeChange: 'Emite o primeiro e o último dia exibidos quando eles mudam.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Um evento. O fim de um evento com horário não é incluído; o de um evento de dia inteiro é o último dia dele.',
            members: {
              'id, title': 'A chave dele, e o que ele mostra.',
              'start, end': 'Datas e horários, ou só datas para eventos de dia inteiro.',
              allDay: 'Por padrão, se <code>start</code> não tem horário.',
              tone: 'A cor dele.',
              editable: 'Se ele pode ser movido, independentemente do que diz o agendador.',
              data: 'Qualquer outra coisa para guardar junto com ele.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Desenha os eventos. O contexto contém o evento e o horário dele como texto.',
            members: {},
          },
        },
        keyboard: [
          [
            'Setas',
            'Movem por dia e por faixa de horário. As setas se invertem em textos da direita para a esquerda.',
          ],
          ['Page Up e Page Down', 'Mês, semana ou dia anterior ou seguinte.'],
          ['Shift + setas', 'Estendem o horário escolhido.'],
          [
            'Enter ou Espaço em uma célula',
            'Entra nos eventos da célula, ou escolhe o horário dela.',
          ],
          ['Setas para cima e para baixo em um evento', 'Evento anterior ou seguinte na célula.'],
          ['Alt + setas em um evento', 'Movem o evento uma faixa de horário ou um dia.'],
          ['Alt + Shift + seta para cima ou para baixo', 'Encurta ou alonga o evento.'],
          ['Esc', 'Volta à célula, descarta o horário escolhido ou cancela um arrasto.'],
        ],
        notes: [
          'O mês, a semana e o dia são, cada um, uma <code>grid</code> nomeada pelo título. Os dias ficam nos cabeçalhos das colunas e os horários, nos das linhas, então cada célula é lida com o seu dia e horário.',
          'Todo evento é um botão nomeado pelo título, dia e horário, como “Standup, Friday, September 25, 9:00 – 9:30 AM”. Mover ou redimensionar um evento anuncia o novo horário.',
          'Todo arrasto tem um equivalente no teclado, então ninguém precisa de um ponteiro.',
          'As visualizações são botões de alternância em um grupo, e, ao ir para outra semana ou outro mês, o novo título é anunciado.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter e painéis redimensionáveis para Angular',
        summary: 'Painéis lado a lado ou empilhados, com alças para redimensioná-los.',
        description:
          'Splitter acessível para Angular: painéis redimensionáveis lado a lado ou empilhados, com limites, painéis recolhíveis, tamanhos salvos e tudo pelo teclado.',
        apiDescription:
          'Referência da API do splitter do Needless UI: orientação e tamanhos de nuiSplitter, limites e recolhimento dos painéis, e as alças entre eles.',
        a11yDescription:
          'Teclado e acessibilidade do splitter do Needless UI: alças focáveis com valor, no padrão Window Splitter, setas, Home, End e Enter.',
        overview: [
          'Um splitter divide o espaço entre painéis, com uma alça entre cada dois. Arraste uma alça, ou coloque o foco nela e use as setas. Os tamanhos são porcentagens que somam 100 e se vinculam com <code>[(sizes)]</code>.',
          'Cada painel recebe um tamanho inicial, um mínimo e um máximo em pixels, rem ou porcentagem. Um painel <code>collapsible</code> se recolhe quando é arrastado abaixo da metade do mínimo, ou com Enter na alça dele, e volta com o tamanho que tinha.',
          'Com <code>storageKey</code>, os tamanhos ficam guardados em <code>localStorage</code>, então na próxima visita cada pessoa encontra o layout do jeito que deixou.',
        ],
        examples: {
          editor: {
            title: 'Um editor',
            text: 'Arquivos, código e uma prévia. Os arquivos e a prévia se recolhem, o código fica com pelo menos 30% da largura, e os tamanhos são salvos.',
          },
          stacked: {
            title: 'Painéis empilhados',
            text: '<code>orientation="vertical"</code> empilha os painéis, e <code>[(sizes)]</code> lê os tamanhos deles conforme mudam.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Painéis com alças entre eles.',
            members: {
              orientation: 'Lado a lado, ou empilhados.',
              sizes: 'A proporção de cada painel, em porcentagem, na ordem.',
              storageKey: 'Guarda os tamanhos em <code>localStorage</code> com esta chave.',
              step: 'Quanto as setas movem uma alça, em porcentagem. O dobro com Shift.',
              move: 'Move em uma porcentagem a fronteira depois de um painel.',
            },
          },
          NuiSplitterPane: {
            summary: 'Um painel. Os tamanhos dele aceitam pixels, rem ou porcentagem.',
            members: {
              defaultSize: 'O tamanho inicial, quando não há tamanhos para restaurar.',
              min: 'O tamanho mínimo.',
              max: 'O tamanho máximo.',
              collapsible: 'Ele se recolhe: arrastado abaixo da metade do mínimo, ou com Enter.',
              collapsedSize: 'O tamanho dele recolhido, como uma barra de ícones.',
              label: 'Dá nome à alça que o redimensiona.',
            },
          },
          NuiSplitterHandle: {
            summary: 'A alça entre dois painéis.',
            members: {
              label: 'Dá nome à alça, quando o rótulo do painel não faz isso.',
              disabled: 'Ela não se move.',
              toggle: 'Recolhe o painel ao lado, ou o restaura.',
            },
          },
        },
        keyboard: [
          [
            'Setas para a esquerda e para a direita',
            'Movem a alça entre painéis lado a lado. As setas se invertem em textos da direita para a esquerda.',
          ],
          ['Setas para cima e para baixo', 'Movem a alça entre painéis empilhados.'],
          ['Shift + setas', 'Movem a alça o dobro da distância.'],
          ['Home e End', 'Leva o painel antes da alça ao tamanho mínimo ou máximo dele.'],
          ['Enter', 'Recolhe o painel recolhível, ou o restaura.'],
        ],
        notes: [
          'Cada alça é um <code>separator</code> focável, como no padrão Window Splitter do WAI-ARIA: o valor dela é o tamanho do painel anterior, dentro dos limites desse painel, e <code>aria-controls</code> aponta para esse painel.',
          'Dê nome às alças pelo <code>label</code> dos painéis: “Files” diz a um leitor de tela o que uma alça redimensiona.',
          'Um clique duplo em uma alça também recolhe o painel dela, e o arrasto captura o ponteiro, então movimentos rápidos não perdem a alça.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Componente de tour guiado para Angular',
        summary:
          'Um card para cada etapa, ao lado do que ela explica, com a página escurecida em volta.',
        description:
          'Tour de produto acessível para Angular: um card para cada etapa ao lado do alvo, que fica em destaque, etapas interativas e um foco que volta ao lugar.',
        apiDescription:
          'Referência da API do tour do Needless UI: etapas de nui-tour, open e step bidirecionais, seus outputs, e o alvo, a posição e os hooks de cada etapa.',
        a11yDescription:
          'Teclado e acessibilidade do tour do Needless UI: cada card é um diálogo nomeado pelo título, o foco é retido e devolvido, e Esc serve para sair.',
        overview: [
          'Um tour guia os usuários por uma página, uma etapa de cada vez. Cada etapa aponta para um elemento com um card ao lado e escurece o resto da página em volta; uma etapa sem alvo aparece no meio.',
          'As etapas são dados simples: um alvo (um seletor, um elemento ou uma função que encontra um), um título e o conteúdo como texto ou template. <code>beforeShow</code> roda antes, então uma etapa pode abrir o painel onde fica o alvo dela, e a página rola até um alvo que está fora de vista.',
          'Cada card é um diálogo. Ele é modal, a menos que a etapa seja <code>interactive</code>: nesse caso, dá para usar o elemento para o qual ele aponta. Esc encerra o tour, e o foco volta para onde estava.',
        ],
        examples: {
          basics: {
            title: 'Uma primeira olhada',
            text: 'Quatro etapas, a primeira sem alvo. <code>finished</code> e <code>dismissed</code> distinguem os dois finais possíveis.',
          },
          interactive: {
            title: 'Etapas para experimentar',
            text: '<code>beforeShow</code> abre as configurações antes que a segunda etapa aponte para dentro delas, e <code>interactive</code> deixa usar o interruptor enquanto o card está aberto.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Um tour guiado.',
            members: {
              steps: 'As etapas, em ordem.',
              open: 'Se o tour está ativo.',
              step: 'A etapa exibida, a partir de 0.',
              labels: 'Todo texto que ele mostra, para traduzir.',
              finished: 'Emite quando a última etapa é concluída.',
              dismissed: 'Emite a etapa em que o tour terminou, quando ele termina antes da hora.',
              start: 'Inicia o tour, na primeira etapa ou na indicada.',
              end: 'Encerra o tour, como concluído ou dispensado.',
            },
          },
          NuiTourStep: {
            summary: 'Uma etapa do tour.',
            members: {
              target: 'O elemento para o qual ela aponta. Sem alvo, o card aparece no meio.',
              title: 'O título do card.',
              content: 'O texto dele, ou um template.',
              side: 'De que lado do alvo o card fica.',
              align: 'Como o card se alinha ao alvo.',
              padding: 'Espaço em volta do alvo em destaque, em pixels.',
              interactive: 'O alvo pode ser usado enquanto o card está aberto.',
              beforeShow:
                'Roda antes de a etapa aparecer. Se retornar uma promise, o tour espera por ela.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Percorre os botões do card. Em etapas modais, o foco fica no card.'],
          ['Enter ou Espaço', 'Aciona o botão em foco: “Próximo”, “Voltar” ou “Concluir”.'],
          ['Esc', 'Encerra o tour.'],
        ],
        notes: [
          'Cada card é um <code>dialog</code> nomeado pelo título e descrito pelo conteúdo. A cada etapa, o foco vai para o botão principal do card, e volta para onde estava quando o tour termina.',
          'Etapas modais tornam inerte o resto da página. Etapas interativas não são modais, então o alvo delas pode ser alcançado pelo teclado, além do ponteiro.',
          'O progresso é texto, como “2 of 4”; os pontos só o desenham.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'Dropzone e upload de arquivos para Angular',
        summary: 'Solte arquivos ou escolha-os, com validações, prévias e uploads com progresso.',
        description:
          'Dropzone acessível para Angular: arrastar e soltar, pastas e colagem, validação de tipo e tamanho, prévias de imagens e uploads com progresso e nova tentativa.',
        apiDescription:
          'Referência da API da dropzone do Needless UI: arquivos e validações de nui-dropzone, a função de upload e a fila dela, seus outputs e seus textos.',
        a11yDescription:
          'Teclado e acessibilidade da dropzone do Needless UI: uma área que é um botão, resultados anunciados, e barras de progresso e ações com nome.',
        overview: [
          'Uma dropzone recebe arquivos soltos sobre ela, escolhidos no seletor de arquivos ou colados. Pastas soltas são lidas por inteiro, e cada arquivo mantém o seu caminho.',
          'Cada arquivo é validado com <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> e a sua função <code>validate</code>, e os recusados aparecem em uma lista com o motivo. Imagens ganham uma prévia.',
          'Sem uma função <code>upload</code>, a dropzone guarda os arquivos para um formulário, em <code>[(files)]</code>. Com uma, ela faz o upload de poucos em poucos, com progresso, cancelamento e nova tentativa. Passe o <code>signal</code> do upload para o <code>fetch</code>, para que cancelar o interrompa de verdade.',
        ],
        examples: {
          upload: {
            title: 'Uploads',
            text: 'Um upload simulado informa o progresso em etapas. Arquivos com “fail” no nome falham, para mostrar a nova tentativa, e <code>directory</code> adiciona um botão para escolher uma pasta.',
          },
          attach: {
            title: 'Anexos para um formulário',
            text: 'Sem <code>upload</code>: a dropzone guarda até três documentos em <code>[(files)]</code>, e o texto colocado dentro dela substitui o padrão.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Um lugar para soltar arquivos, ou escolhê-los.',
            members: {
              files: 'Os arquivos que ela guarda, em ordem.',
              accept:
                'Os tipos de arquivo aceitos, como em <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Mais de um arquivo por vez.',
              directory: 'Oferece um botão para escolher uma pasta.',
              maxFiles: 'Quantos arquivos ela guarda.',
              'maxSize, minSize': 'O tamanho máximo e o mínimo de um arquivo, em bytes.',
              validate: 'Valida cada arquivo. Se retornar uma mensagem, o arquivo é recusado.',
              upload: 'Envia um arquivo. Sem essa função, os arquivos são apenas guardados.',
              concurrency: 'Quantos arquivos são enviados ao mesmo tempo.',
              hint: 'Uma linha abaixo do texto da área, como o que ela aceita.',
              disabled: 'Ela não aceita arquivos.',
              labels: 'Todo texto que ela mostra ou anuncia, para traduzir.',
              uploaded: 'Emite um arquivo enviado, com o que <code>upload</code> retornou.',
              rejected: 'Emite os arquivos recusados, com os motivos.',
              queue:
                'A fila de upload, para cancelar, tentar de novo e ler o progresso pelo código.',
              take: 'Adiciona arquivos pelo código, validando cada um.',
            },
          },
          NuiUploader: {
            summary:
              'Envia um arquivo: informa o progresso de 0 a 1 e para quando o signal é abortado.',
            members: {
              '(file, context)': 'Retorna uma promise com o que o seu servidor responder.',
            },
          },
        },
        keyboard: [
          ['Enter ou Espaço', 'Na área, abre o seletor de arquivos.'],
          ['Ctrl + V (⌘ + V no Mac)', 'Na área, adiciona os arquivos colados.'],
          ['Tab', 'Percorre a área e as ações de cada arquivo.'],
        ],
        notes: [
          'A área é um botão, então funciona sem ponteiro, e a dica a descreve.',
          'Arquivos adicionados e recusados são anunciados. Cada barra de progresso é uma <code>progressbar</code> nomeada pelo arquivo, e cada ação é nomeada pelo que faz, como “Remove beach.jpg”.',
          'As prévias são decorativas: é o nome do arquivo que diz qual arquivo é.',
        ],
      },
      mask: {
        name: 'Máscara de entrada',
        title: 'Diretiva de máscara de entrada para Angular',
        summary:
          'Campos de texto que se formatam enquanto você digita: datas, cartões, IBANs, códigos.',
        description:
          'Máscara de entrada para Angular: formata ao digitar sem tirar o cursor do lugar, com funções auxiliares para cartões e IBANs e validação de formulários.',
        apiDescription:
          'Referência da API da máscara de entrada do Needless UI: a diretiva nuiMask, seus tokens e seu valor, e funções auxiliares para números de cartão e IBANs.',
        a11yDescription:
          'Acessibilidade da máscara de entrada do Needless UI: campos nativos com os próprios rótulos, teclado numérico no celular e exclusão que pula os literais.',
        overview: [
          'Uma máscara formata um campo de texto enquanto a pessoa digita: <code>00/00/0000</code> coloca as barras, <code>AA 000 AA</code> aceita letras e dígitos alternadamente. Caracteres que não se encaixam ficam de fora, e o cursor mantém a posição quando se digita no meio do texto.',
          'Máscaras são feitas de tokens e literais: <code>0</code> é um dígito, <code>a</code> uma letra, <code>*</code> qualquer um dos dois, e <code>A</code> e <code>X</code> fazem o mesmo para códigos, em maiúsculas. Adicione os seus com <code>tokens</code>, ou passe uma função que escolhe a máscara conforme o que é digitado, como <code>nuiCardMask</code> faz pela bandeira do cartão.',
          'O valor é o que aparece na tela, ou só os dados com <code>unmask</code>. A máscara funciona com Signal Forms, formulários reativos e <code>ngModel</code>, e um valor incompleto é um erro.',
        ],
        examples: {
          formats: {
            title: 'Formatos',
            text: 'Uma data, um horário, uma placa de carro e uma cor com um token próprio para dígitos hexadecimais.',
          },
          payment: {
            title: 'Dados de pagamento',
            text: 'Campos com Signal Forms. A máscara do cartão segue a bandeira, o código de segurança tem quatro dígitos no American Express, e <code>nuiCardValid</code> e <code>nuiIbanValid</code> verificam os números.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Uma máscara sobre um campo de texto nativo.',
            members: {
              nuiMask: 'A máscara, ou uma função que escolhe uma conforme os dados digitados.',
              tokens: 'Caracteres de máscara para adicionar ou substituir.',
              unmask: 'O valor contém só os dados, sem os literais.',
              value: 'O valor: o que aparece na tela, ou os dados com <code>unmask</code>.',
              raw: 'Os dados digitados, sem os literais.',
              complete: 'Todas as posições da máscara estão preenchidas.',
            },
          },
          Helpers: {
            summary: 'Funções para formatar, verificar e montar máscaras.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Formatam um valor com uma máscara, ou extraem os dados de um valor formatado.',
              nuiCardMask:
                'Uma máscara para números de cartão, agrupados como a bandeira os imprime.',
              nuiCardBrand: 'A bandeira de um número de cartão, pelos primeiros dígitos.',
              'nuiCardValid, nuiLuhn':
                'Se um número de cartão tem o comprimento da bandeira e passa na verificação de Luhn.',
              nuiIbanMask: 'Uma máscara para IBANs, com o comprimento do IBAN do país.',
              nuiIbanValid:
                'Se um IBAN tem o comprimento do país e os dígitos verificadores corretos.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Apaga o caractere antes do cursor, pulando os literais.'],
          ['Delete', 'Apaga o caractere depois do cursor, pulando os literais.'],
        ],
        notes: [
          'A máscara atua no seu próprio <code>&lt;input&gt;</code>, então o rótulo e o texto de ajuda ficam como você os escreveu. Diga ali o que se espera: uma máscara não é uma instrução.',
          'Máscaras de dígitos definem <code>inputmode="numeric"</code>, para que os celulares mostrem um teclado numérico, a menos que o campo defina o próprio.',
          'Aceita dígitos de qualquer sistema de escrita e os escreve de 0 a 9.',
        ],
      },
      'phone-field': {
        name: 'Campo de telefone',
        title: 'Campo de número de telefone para Angular',
        summary: 'Um seletor de país e um número, agrupado do jeito que o país escreve.',
        description:
          'Campo de telefone acessível para Angular: seletor de país, números agrupados como cada país escreve, códigos de país digitados ou colados e valores em E.164.',
        apiDescription:
          'Referência da API do campo de telefone do Needless UI: valor e país de nui-phone-field, os países oferecidos e funções auxiliares para ler e escrever números.',
        a11yDescription:
          'Acessibilidade do campo de telefone do Needless UI: um seletor de país com nome, o país anunciado quando um código o escolhe e o preenchimento automático.',
        overview: [
          'Um campo de telefone é um seletor de país e um número. O número é agrupado enquanto é digitado, do jeito que o país dele escreve números, e o valor é o número em E.164, como <code>+393331234567</code>.',
          'As pessoas digitam os números do jeito que conhecem. Um 0 inicial (ou o 1 antes de um número norte-americano) é tratado como prefixo nacional e fica fora do valor. Um código de país digitado ou colado, como <code>+44</code> ou <code>0044</code>, escolhe o país dele, e um código de área também, onde vários países compartilham o mesmo código.',
          'O primeiro país é o da localidade, e <code>countries</code> limita a lista. Com formulários, um número curto ou longo demais para o país dele é um erro. Para uma validação completa, verifique os números também no servidor.',
        ],
        examples: {
          basic: {
            title: 'Um número',
            text: 'Comece com <code>+</code> e um código de país para trocar de país enquanto digita.',
          },
          countries: {
            title: 'Países à sua escolha',
            text: '<code>countries</code> oferece onze, o campo funciona com um <code>FormControl</code> reativo, e <code>nuiFormatPhone</code> escreve o valor de volta em um formato legível.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Um campo de número de telefone.',
            members: {
              value: 'O número em E.164, ou vazio.',
              country: 'O país, como código de região.',
              countries: 'Os países oferecidos, como códigos de região.',
              locale: 'O idioma dos nomes dos países.',
              label: 'Dá nome ao número, quando nenhum <code>&lt;label for&gt;</code> faz isso.',
              inputId: 'O id do número, para <code>&lt;label for&gt;</code>.',
              placeholder: 'Texto mostrado enquanto o número está vazio.',
              invalid: 'Marca o número como inválido.',
              disabled: 'Não pode ser alterado.',
              labels: 'Todo texto que ele anuncia, para traduzir.',
            },
          },
          Helpers: {
            summary: 'Funções para números de telefone.',
            members: {
              nuiParsePhone:
                'Lê um número escrito de qualquer jeito e o separa em região, código de país e número nacional.',
              nuiFormatPhone: 'Escreve um número agrupado como o país dele faz, ou em E.164.',
              nuiPhoneValid:
                'Se um número tem um código de país conhecido e o comprimento do país dele.',
            },
          },
        },
        keyboard: [
          ['Letras no seletor de país', 'Pulam para os países que começam com elas.'],
          ['Enter ou Espaço', 'Abre a lista de países, ou escolhe um.'],
          ['Backspace', 'No número, apaga um dígito, pulando espaços e parênteses.'],
        ],
        notes: [
          'O seletor de país se chama “Country code” e lê a bandeira e o código dele. Quando um código de país ou de área escolhe um país, o novo país é anunciado.',
          'Dê um nome ao número com <code>&lt;label for&gt;</code> e <code>inputId</code>, ou com <code>label</code>.',
          'O número tem <code>autocomplete="tel"</code>, então os navegadores podem preenchê-lo, com código de país e tudo, e os celulares mostram um teclado de telefone.',
        ],
      },
      'color-picker': {
        name: 'Seletor de cor',
        title: 'Seletor de cor OKLCH para Angular',
        summary:
          'Uma cor em OKLCH, com controles deslizantes, amostras, conta-gotas e verificação de contraste.',
        description:
          'Seletor de cor acessível para Angular em OKLCH: cores P3 de gama ampla, qualquer sintaxe de cor CSS, amostras, conta-gotas e verificação de contraste WCAG.',
        apiDescription:
          'Referência da API do seletor de cor do Needless UI: valor, formato e gama de nui-color-picker, amostras e contraste, e funções auxiliares para cores.',
        a11yDescription:
          'Teclado e acessibilidade do seletor de cor do Needless UI: um controle deslizante de dois valores na área, controles nativos e níveis de contraste por extenso.',
        overview: [
          'O seletor de cor trabalha em OKLCH, o espaço de cor perceptual do CSS moderno. Na largura da área, o croma vai do cinza ao máximo que a tela consegue mostrar naquela luminosidade, então todo ponto é uma cor que você pode usar, e o marcador fica no lugar quando o matiz gira.',
          'O campo aceita qualquer cor CSS, inclusive nomes, e o botão de formato escreve o valor em hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> ou <code>color(display-p3)</code>. Uma cor fora da gama de um formato é trazida para dentro dela como o CSS faz, mantendo a luminosidade e o matiz.',
          'Adicione <code>swatches</code> para escolher entre amostras, e <code>contrastWith</code> para verificar o contraste da cor sobre um fundo do jeito que a WCAG 2 o mede. Onde o navegador tem conta-gotas, um botão pega uma cor da tela.',
        ],
        examples: {
          brand: {
            title: 'Uma cor de marca',
            text: 'Amostras com nome e o contraste de um texto branco sobre a cor: escolha uma clara, e o AA falha.',
          },
          wide: {
            title: 'Gama ampla',
            text: '<code>gamut="p3"</code> preenche a área com cores Display P3, e uma linha tracejada marca onde o sRGB termina. O valor continua em <code>oklch()</code>.',
          },
          popover: {
            title: 'Em um popover',
            text: 'Um botão que mostra a cor abre o seletor em um <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Um seletor de cor em OKLCH.',
            members: {
              value: 'A cor, escrita no formato. Vazia até que uma seja escolhida.',
              format: 'Como o valor é escrito.',
              formats: 'Os formatos pelos quais o botão de formato passa.',
              gamut: 'As cores que a área contém: sRGB ou Display P3.',
              alpha: 'Mostra o controle deslizante de opacidade.',
              swatches: 'Cores para escolher, com nomes.',
              contrastWith: 'Um fundo contra o qual verificar o contraste.',
              eyeDropper: 'Mostra o conta-gotas, onde o navegador tem um.',
              disabled: 'Não pode ser alterado.',
              labels: 'Todo texto que ele anuncia, para traduzir.',
              color: 'A cor escolhida, em OKLCH.',
            },
          },
          Helpers: {
            summary: 'Funções para cores.',
            members: {
              nuiParseColor: 'Lê uma cor em qualquer sintaxe CSS.',
              nuiFormatColor: 'Escreve uma cor em um formato.',
              nuiToGamut: 'Traz uma cor para sRGB ou Display P3, como o CSS faz.',
              nuiContrast: 'A relação de contraste WCAG 2 de uma cor sobre um fundo.',
            },
          },
        },
        keyboard: [
          ['Setas para a esquerda e para a direita', 'Na área, menos ou mais croma.'],
          ['Setas para cima e para baixo', 'Na área, mais clara ou mais escura.'],
          ['Shift + setas', 'Movem o marcador dez vezes mais longe.'],
          ['Home e End', 'Na área, croma nulo ou máximo.'],
          ['Page Up e Page Down', 'Na área, muito mais clara ou mais escura.'],
        ],
        notes: [
          'O marcador da área é um <code>slider</code> chamado “Color” que diz os dois valores, como “Lightness 62%, chroma 75%”. Matiz e opacidade são entradas nativas do tipo range.',
          'As amostras são botões nomeados pelo rótulo, e ficam pressionadas quando correspondem à cor.',
          'AA e AAA dizem “passes” ou “fails” por extenso, não só pela cor, e no modo de cores forçadas as próprias cores continuam.',
        ],
      },
      carousel: {
        name: 'Carrossel',
        title: 'Componente de carrossel e slider para Angular',
        summary: 'Slides em uma fileira que rola e se encaixa, com botões, pontos e rotação.',
        description:
          'Carrossel acessível para Angular: rolagem com encaixe e deslize nativos, vários slides por vez, pontos, loop e rotação que pausa e para como a WCAG pede.',
        apiDescription:
          'Referência da API do carrossel do Needless UI: slides por vez, índice, loop e rotação de nui-carousel, seus métodos e a diretiva nuiCarouselSlide.',
        a11yDescription:
          'Teclado e acessibilidade do carrossel do Needless UI: o padrão Carousel do WAI-ARIA, um controle de rotação, slides com nome e movimentos anunciados.',
        overview: [
          'Um carrossel mostra slides em uma fileira que rola e se encaixa em cada um: o deslize, os trackpads e as setas do teclado o movem de forma nativa, assim como os botões de anterior e próximo e os pontos. Marque cada slide com <code>nuiCarouselSlide</code>, que usa o título dele como nome.',
          'Mostre um slide por vez ou vários com <code>perView</code>, ou deixe os slides manterem a própria largura com <code>perView="auto"</code>. <code>[(index)]</code> vincula o primeiro slide visível, e <code>loop</code> volta ao início.',
          'Com <code>autoplay</code>, ele gira sozinho, com um controle de rotação à frente. A rotação pausa sob o ponteiro e para de vez quando o foco do teclado entra, como pede o padrão do WAI-ARIA.',
        ],
        examples: {
          featured: {
            title: 'Viagens em destaque',
            text: 'Um slide novo a cada seis segundos, com o anel do controle de rotação se enchendo até o próximo. Passe o mouse por cima para pausar a rotação, ou entre com Tab para pará-la.',
          },
          shelf: {
            title: 'Uma prateleira de cards',
            text: '<code>perView="auto"</code> mantém a largura de cada card e mostra quantos couberem. Os pontos acompanham o deslize, e <code>[(index)]</code> diz onde ele está.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Um carrossel de slides.',
            members: {
              label: 'Dá nome ao carrossel.',
              index: 'O primeiro slide visível, a partir de 0.',
              perView:
                'Slides visíveis ao mesmo tempo, ou <code>auto</code> para slides que definem a própria largura.',
              gap: 'O espaço entre os slides, em qualquer comprimento CSS.',
              loop: 'Passar do último slide leva ao primeiro, e vice-versa.',
              autoplay: 'Milissegundos entre os slides quando ele gira sozinho; com 0, não gira.',
              'controls, indicators': 'Os botões de anterior e próximo, e os pontos.',
              labels: 'Todos os textos dele, para traduzir.',
              'next, previous': 'Avança ou volta um slide.',
              goTo: 'Rola até um slide.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Um slide.',
            members: { nuiCarouselSlide: 'O título dele, lido no lugar da posição.' },
          },
        },
        keyboard: [
          ['Tab', 'Percorre o controle de rotação, os botões, os slides e depois os pontos.'],
          [
            'Setas para a esquerda e para a direita nos slides',
            'Rolam até o slide anterior ou o próximo.',
          ],
          ['Enter ou Espaço', 'Aciona o botão ou o ponto em foco.'],
        ],
        notes: [
          'O carrossel é uma <code>region</code> com <code>aria-roledescription="carousel"</code>, e cada slide, um <code>group</code> com <code>aria-roledescription="slide"</code>, com um nome como “Lake Como, 2 of 4”.',
          'O controle de rotação vem primeiro e diz o que vai fazer. A rotação pausa sob o ponteiro e para quando o foco do teclado entra, então nunca move o que alguém está lendo.',
          'É anunciado onde o carrossel chega depois de um deslize, um botão ou um ponto; a rotação fica em silêncio.',
        ],
      },
      editor: {
        name: 'Editor de texto rico',
        title: 'Componente de editor de texto rico para Angular',
        summary:
          'Títulos, listas, links e formatos, com barra de ferramentas e Markdown enquanto você digita.',
        description:
          'Editor de texto rico acessível para Angular: barra de ferramentas, atalhos, Markdown ao digitar, colagem limpa, links e desfazer, valor em HTML ou Markdown.',
        apiDescription:
          'Referência da API do editor de texto rico do Needless UI: valor e formato de nui-editor, ferramentas, textos, comandos e os conversores de HTML e Markdown.',
        a11yDescription:
          'Teclado e acessibilidade do editor de texto rico do Needless UI: caixa de texto multilinha, barra de ferramentas WAI-ARIA, atalhos e diálogo de link.',
        overview: [
          'O editor escreve parágrafos, títulos, citações, listas, blocos de código e divisores, com negrito, itálico, sublinhado, tachado, código e links. O valor dele é HTML, ou Markdown com <code>format="markdown"</code>, e ele funciona com formulários.',
          'Ele mantém o próprio documento e cuida de cada edição, então o que é colado ou arrastado chega à página só como esse documento: a estrutura e os formatos ficam, inclusive do Google Docs e do Word, e scripts, estilos e links inseguros saem.',
          'Digite Markdown e ele vira formatação: <code># </code> começa um título, <code>- </code> uma lista, e <code>**bold**</code> e <code>`code`</code> são formatados quando você os fecha. Todo formato tem o seu atalho e o seu botão na barra de ferramentas.',
        ],
        examples: {
          comment: {
            title: 'Um comentário',
            text: '<code>tools</code> escolhe os botões da barra de ferramentas. Digite Markdown, cole de qualquer lugar e veja o HTML que o editor guarda.',
          },
          markdown: {
            title: 'Markdown na entrada e na saída',
            text: 'Com <code>format="markdown"</code>, o valor é Markdown: lido com listas aninhadas, citações e código, e escrito de volta enquanto você edita.',
          },
          lists: {
            title: 'Listas aninhadas',
            text: 'Os botões “Aumentar recuo” e “Diminuir recuo” aninham os itens da lista, como fazem Tab e Shift + Tab. A barra de ferramentas padrão só os mostra em telas touch, que não têm tecla Tab; inclua-os em <code>tools</code> para mostrá-los em todo lugar.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Um editor de texto rico.',
            members: {
              value: 'O conteúdo, em HTML ou Markdown; vazio quando não há texto.',
              format: 'Como o valor é escrito.',
              tools:
                'Os botões da barra de ferramentas em ordem, com <code>|</code> entre os grupos.',
              'label, labelledBy, describedBy': 'Nomeiam e descrevem o conteúdo.',
              placeholder: 'Texto mostrado enquanto o editor está vazio.',
              'readonly, disabled, invalid':
                'Mostra o conteúdo sem permitir edição; desativa o editor; marca o conteúdo como inválido.',
              labels: 'Todos os textos dele, para traduzir.',
              run: 'Executa um comando da barra de ferramentas.',
              'undo, redo, focus': 'Desfaz, refaz e move o foco para o texto.',
            },
          },
          Helpers: {
            summary: 'Funções para converter documentos.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Escrevem um documento como HTML ou Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Leem HTML ou Markdown para um documento, mantendo o que o editor consegue mostrar.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I ou U',
            'Negrito, itálico ou sublinhado. Em dispositivos Apple, ⌘ no lugar de Ctrl.',
          ],
          ['Ctrl + K', 'Adiciona ou edita um link.'],
          [
            'Ctrl + Alt + 1, 2 ou 3',
            'Um título; Ctrl + Alt + 0 volta a transformá-lo em parágrafo.',
          ],
          ['Ctrl + Shift + 7 ou 8', 'Uma lista numerada ou com marcadores.'],
          [
            'Tab e Shift + Tab em uma lista',
            'Aumentam ou diminuem o recuo; Shift + Tab transforma um item do primeiro nível em parágrafo. Fora das listas, Tab sai do editor.',
          ],
          ['Ctrl + Z e Ctrl + Shift + Z', 'Desfazer e refazer.'],
          [
            'Setas para a esquerda e para a direita na barra de ferramentas',
            'Passam de um botão para outro.',
          ],
        ],
        notes: [
          'O conteúdo é uma <code>textbox</code> com <code>aria-multiline</code>, nomeada por <code>label</code>, com o placeholder em <code>aria-placeholder</code>.',
          'A barra de ferramentas segue o padrão toolbar do WAI-ARIA, com uma única parada de tabulação: os formatos são botões de alternância com <code>aria-pressed</code>, e cada botão informa o seu atalho em <code>aria-keyshortcuts</code> e no seu tooltip.',
          'Um comando da barra de ferramentas devolve o foco ao texto, e o diálogo de link faz o mesmo com Esc. O Tab nunca fica preso: fora das listas, ele sai do editor.',
          'Telas touch não têm tecla Tab: nelas, a barra de ferramentas padrão tem os botões “Aumentar recuo” e “Diminuir recuo”, ativos nas listas. Um toque em um botão da barra de ferramentas mantém o foco no texto, então o teclado virtual continua aberto.',
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
      'browser-support': {
        title: 'Suporte a navegadores',
        description:
          'Os navegadores que o Needless UI suporta e testa: versões do Chrome, Edge, Firefox e Safari, celulares e telas touch, e o que os mais antigos deixam de fora.',
        blocks: [
          {
            kind: 'p',
            html: 'O Needless UI se baseia em elementos nativos e em recursos recentes da plataforma web, como a API Popover. Ele suporta os navegadores abaixo a partir da versão indicada. Em versões mais antigas, menus, selects e popovers não abrem.',
          },
          { kind: 'h2', id: 'supported', text: 'Navegadores suportados' },
          {
            kind: 'table',
            caption: 'Versões mais antigas suportadas',
            head: ['Navegador', 'A partir da versão', 'Necessária para'],
            rows: [
              [
                'Chrome e Edge, no computador e no Android',
                '120',
                'Ícones desenhados com máscaras CSS e <code>:dir()</code> para textos da direita para a esquerda',
              ],
              ['Firefox, no computador e no Android', '125', 'A API Popover'],
              ['Safari no Mac', '17', 'A API Popover'],
              ['Todos os navegadores no iPhone e no iPad', 'iOS 17', 'A API Popover'],
              ['Samsung Internet no Android', '25', 'O mesmo que o Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Outros navegadores baseados no Chromium, como Opera e Brave, seguem as versões do Chrome. O próprio Angular 22 exige Chrome, Edge e Firefox 119, além do Safari 17. O Internet Explorer e o Edge antigo, de antes do Chromium, não são suportados.',
          },
          { kind: 'h2', id: 'tested', text: 'Navegadores testados' },
          {
            kind: 'p',
            html: 'A cada mudança, os testes de todos os componentes rodam nos motores do Chrome, do Firefox e do Safari. Antes de cada lançamento, todas as páginas desta documentação são verificadas em cada motor, em um computador e em um celular com entrada por toque: cada uma precisa carregar, abrir cada menu e pop-up, caber na tela e passar nas verificações de acessibilidade.',
          },
          {
            kind: 'table',
            caption: 'Navegadores testados',
            head: ['Motor', 'Versão', 'Testado em'],
            rows: [
              [
                'Chromium (no Chrome e no Edge)',
                '153',
                'Um computador e um celular Android com entrada por toque',
              ],
              ['Firefox', '155', 'Um computador e uma tela touch do tamanho de um celular'],
              ['WebKit (no Safari)', '26.6', 'Um computador e um iPhone com entrada por toque'],
              ['Safari no iPhone', 'iOS 17.5 e 18.6', 'O simulador de iPhone'],
            ],
          },
          {
            kind: 'p',
            html: 'As versões intermediárias, entre a mais antiga suportada e as testadas, não são verificadas uma a uma: elas são suportadas porque têm todos os recursos de que os componentes precisam.',
          },
          { kind: 'h2', id: 'newer', text: 'Extras nos navegadores mais novos' },
          {
            kind: 'p',
            html: 'Alguns detalhes usam recursos que só os navegadores mais novos têm. Os outros navegadores os deixam de fora, sem quebrar nada:',
          },
          {
            kind: 'table',
            caption: 'Detalhes que precisam de navegadores mais novos',
            head: ['Detalhe', 'Navegadores', 'Nos demais'],
            rows: [
              [
                'Popovers, menus e diálogos têm animação ao abrir e ao fechar',
                'Chrome e Edge, Firefox 129, Safari 17.5',
                'Eles aparecem e somem na hora',
              ],
              [
                'Cantos squircle (<code>corner-shape</code>)',
                'Chrome e Edge 139',
                'Cantos arredondados',
              ],
              [
                'Pegar uma cor de qualquer lugar da tela',
                'Chrome e Edge no computador',
                'Sem botão de conta-gotas',
              ],
              [
                'Escolher uma pasta inteira na dropzone',
                'Navegadores no computador',
                'Só arquivos',
              ],
              [
                'O anel do controle de rotação do carrossel se enche suavemente',
                'Chrome e Edge, Firefox 128, Safari',
                'Ele se enche de uma vez',
              ],
              [
                'O gesto de voltar do Android fecha menus, listas de combobox e hovercards, e encerra tours',
                'Chrome e Edge 126, Firefox 149',
                'O gesto de voltar vai para a página anterior',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Celulares e telas touch' },
          {
            kind: 'p',
            html: 'Todos os componentes funcionam com toque. As alças do splitter, a área de cor, as bordas das colunas e os toasts acompanham o dedo sem rolar a página, o carrossel desliza com a rolagem nativa do navegador, e um toque longo pega um evento do agendador. Em telas touch, os campos têm texto de pelo menos 16 px, para que os iPhones não deem zoom neles, e as palavras que alguns teclados compõem, como os do Android, chegam inteiras.',
          },
          {
            kind: 'p',
            html: 'Telas touch não têm hover, então um hovercard só complementa o que já está na página: não coloque nada essencial nele. No celular, a tecla Enter do chat quebra a linha, e o botão envia.',
          },
          { kind: 'h2', id: 'keyboard', text: 'O teclado no Safari' },
          {
            kind: 'p',
            html: 'Por padrão, no Safari a tecla Tab só passa por campos de texto e menus pop-up. Para chegar a todos os botões e links, ative “Pressionar Tab para destacar cada item de uma página web” (“Press Tab to highlight each item on a webpage”) na aba Avançado dos ajustes do Safari, ou pressione Option + Tab. O Safari também não dá foco a um botão quando ele é clicado; os componentes compensam isso, então o teclado continua de onde parou depois de um clique, como nos outros navegadores.',
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
