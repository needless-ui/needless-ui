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
        title: 'Design tokens padronizados',
        text: 'Arquivos de tokens no formato W3C DTCG são compilados em propriedades personalizadas CSS, com temas claro, escuro e aninhados.',
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
