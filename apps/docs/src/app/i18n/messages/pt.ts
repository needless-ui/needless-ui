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
      kinds: { input: 'Input', model: 'Bidirecional', output: 'Output', method: 'Método' },
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
