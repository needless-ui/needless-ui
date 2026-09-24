import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Mga accessible na Angular component na puwedeng i-theme, binuo sa mga native element, W3C design token at iisang stylesheet na hindi nakatali sa framework. Open source, lisensyang MIT.',
    skipToContent: 'Lumaktaw sa pangunahing nilalaman',
    nav: {
      label: 'Pangunahin',
      home: 'Home ng Needless UI',
      components: 'Mga component',
      guides: 'Mga gabay',
      github: 'GitHub',
      language: 'Wika',
      theme: 'Tema',
      themes: { system: 'System', light: 'Maliwanag', dark: 'Madilim' },
    },
    footer: {
      license: 'Inilabas sa ilalim ng MIT License.',
      source: 'Source code',
      built: 'Sobra-sobra ang pagka-engineer, maingat ang pagkakagawa.',
      legal: 'Legal na abiso',
      privacy: 'Patakaran sa privacy',
    },
    emergency: {
      label: 'HUWAG PINDUTIN',
      cover: 'Iangat ang safety cover',
      button: 'Huwag pindutin',
      armed: 'Nakaangat na ang cover. Pag-isipan mo ulit.',
      falling: 'Naka-activate na ang emergency protocol…',
      fallen: 'Permanente na ang gravity. I-refresh ang page para buuin muli ang uniberso.',
      reduced:
        'Humihingi ang system mo ng mas kaunting galaw, kaya naka-off pa rin ang gravity. Swerte mo.',
    },
  },

  home: {
    title: 'Needless UI · Accessible na Angular component, sobrang engineered',
    description:
      'Ang Needless UI ay open-source na library ng mga Angular component: mga native element, iisang stylesheet na walang framework, W3C design token at WCAG 2.2 AA.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Mga UI component na pinag-isipan nang higit sa kailangan.',
    lead: 'Sini-style ng Needless UI ang mga <strong>native element</strong> gamit ang iisang stylesheet na hindi nakatali sa framework at mga W3C design token. Nagdadagdag ang mga Angular directive nito ng behavior mula sa Angular Aria, kaya accessible ang bawat component mula pa sa unang render.',
    getStarted: 'Magsimula',
    browse: 'Tingnan ang mga component',
    featuresTitle: 'Bakit ito ginawa',
    features: [
      {
        title: 'Native element muna',
        text: 'Totoong button ang <code>&lt;button nuiButton&gt;</code>. Gumagana ang mga form, keyboard at screen reader dahil walang nakabalot dito.',
      },
      {
        title: 'Iisang stylesheet, kahit anong framework',
        text: 'Plain CSS sa cascade layers ang mga component: Angular ngayon, React sa susunod, plain HTML palagi.',
      },
      {
        title: 'Laging panalo ang CSS mo',
        text: 'Nasa loob ng <code>@layer nui</code> ang lahat, kaya nao-override ito ng sarili mong mga style nang walang <code>!important</code> o labanan sa specificity.',
      },
      {
        title: 'Accessible mula sa pundasyon',
        text: 'Sinusuri ang bawat pares ng kulay laban sa WCAG 2.2 AA kapag binubuo ang palette. Asikaso na ang focus, forced colors at reduced motion.',
      },
      {
        title: 'Sobrang customizable',
        text: 'Mga spring, press effect, paglitaw, hugis ng sulok, radius at density: <a href="/guides/customization">isang attribute</a> para sa buong app, o isang input bawat component, nakabatay sa mga standard na W3C design token.',
      },
      {
        title: 'Modernong Angular',
        text: 'Signal inputs, zoneless, server rendering at isang entry point bawat component, kaya ang ini-import lang ang dala ng mga app.',
      },
    ],
    codeTitle: 'Dalawang import, tapos ka na',
    codeText:
      'Idagdag ang package, i-import nang isang beses ang stylesheet, at gamitin ang mga component sa kahit anong standalone component.',
  },

  components: {
    title: 'Mga component',
    description:
      'Tingnan ang mga Needless UI component para sa Angular: accessible na button, dialog at menu, may live na halimbawa, API reference at suporta sa keyboard.',
    intro:
      'Binuo ang bawat component sa mga native element, at may dokumentasyon ito na may live na halimbawa, ang API nito at ang behavior nito sa keyboard.',
    tabsLabel: 'Mga seksyon ng dokumentasyon',
    tabs: { overview: 'Pangkalahatang-ideya', api: 'API', accessibility: 'Accessibility' },
    sidenavLabel: 'Mga component',
    onThisPage: 'Sa page na ito',
    example: {
      showCode: 'Ipakita ang code',
      hideCode: 'Itago ang code',
      copy: 'Kopyahin',
      copied: 'Nakopya na',
      files: 'Mga source file',
    },
    api: {
      import: 'Import',
      selector: 'Selector',
      exportAs: 'Naka-export bilang',
      members: 'Mga property',
      name: 'Pangalan',
      type: 'Uri',
      default: 'Default',
      description: 'Paglalarawan',
      kinds: { input: 'Input', model: 'Two-way', output: 'Output', method: 'Method' },
      customization: {
        note: 'Sinusunod ng mga customization input na hindi mo sine-set ang pinakamalapit na <code>data-nui-*</code> attribute. Tingnan ang <a href="/guides/customization">gabay sa pag-customize</a>.',
        members: {
          motion:
            'Ang spring na nagpapagalaw sa component: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> o <code>none</code>.',
          spring:
            'Kahit anong spring, bilang <code>{ stiffness, damping, mass }</code>, na kino-compile sa CSS sa runtime. Ino-override nito ang <code>motion</code>.',
          press:
            'Ang ginagawa nito habang nakapindot: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> o <code>none</code>.',
          enter:
            'Kung paano ito lumilitaw: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> o <code>none</code>.',
          corners:
            'Ang hugis ng mga sulok nito: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> o <code>square</code>.',
          radius:
            'Kung gaano kabilog ang mga sulok nito: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> o <code>full</code>.',
          density:
            'Kung gaano kalaking espasyo ang kinukuha nito: <code>compact</code>, <code>regular</code> o <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Paggamit ng keyboard',
      key: 'Key',
      action: 'Aksyon',
      notes: 'Mga tala sa accessibility',
    },
    titles: {
      api: (name) => `API ng ${name}`,
      accessibility: (name) => `Accessibility ng ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Button component para sa Angular',
        summary: 'Mga aksyon at link, naka-style sa mga native na button at anchor element.',
        description:
          'Accessible na Angular button directive para sa mga native na button at anchor element, may apat na variant, tatlong tone, tatlong laki at suporta sa link.',
        apiDescription:
          'API reference ng Needless UI button: ang nuiButton directive, ang selector nito, at ang mga input nitong variant, tone, size at disabled.',
        a11yDescription:
          'Keyboard behavior at accessibility ng Needless UI button: native na semantics, focus ring, contrast, target size at mga naka-disable na link.',
        overview: [
          'Sini-style ng <code>nuiButton</code> directive ang isang native na <code>&lt;button&gt;</code> o <code>&lt;a&gt;</code>. Nananatili sa element ang semantics nito, ang behavior nito sa keyboard at ang paglahok nito sa form; ipinapasa lang ng directive ang mga input nito sa mga data attribute na tina-target ng stylesheet.',
          'Gumamit ng <code>&lt;button&gt;</code> para sa mga aksyon at ng <code>&lt;a&gt;</code> para sa navigation. Magkamukha ang dalawa, at pareho nilang sinusuportahan ang <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Mga variant',
            text: 'Apat na fill style, mula sa pinakakapansin-pansin hanggang sa pinakatahimik. Gumamit ng isang solid button bawat view para sa pangunahing aksyon.',
          },
          tones: {
            title: 'Mga tone',
            text: 'Binabago ng tone ang palette: accent para sa pangunahing daloy, neutral para sa mga pangalawang aksyon, danger para sa mga mapanirang aksyon.',
          },
          sizes: {
            title: 'Mga laki',
            text: 'Tatlong taas: 28, 36 at 44 pixel. Kahit ang pinakamaliit ay lampas sa minimum na target size ng WCAG 2.2.',
          },
          links: {
            title: 'Mga link at naka-disable na button',
            text: 'Hindi puwedeng i-disable nang native ang mga anchor, kaya nilalagyan ng <code>aria-disabled="true"</code> ang naka-disable na link at hinaharangan ang mga click dito, kahit may <code>routerLink</code>.',
          },
          presses: {
            title: 'Mga press effect',
            text: 'Pindutin nang matagal ang bawat isa. Itinatakda ng <code>press</code> ang ginagawa ng button habang nakapindot, at ng <code>motion</code> ang spring na nagbabalik dito. Sa kahit anong element, itinatakda ng <code>data-nui-press</code> ang effect para sa lahat ng nasa loob nito.',
          },
          shapes: {
            title: 'Mga sulok, radius at density',
            text: 'Binabago ng <code>corners</code> ang hugis ng mga sulok, ng <code>radius</code> ang laki nila at ng <code>density</code> ang espasyong kinukuha ng button, pero hindi ito lumiliit nang lampas sa 24px na target size. Bilog ang mga sulok na iginuguhit ng mga browser na walang <code>corner-shape</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Sini-style bilang button ang isang native na <code>&lt;button&gt;</code> o <code>&lt;a&gt;</code>.',
            members: {
              variant:
                'Fill style: <code>solid</code>, <code>soft</code>, <code>outline</code> o <code>ghost</code>.',
              tone: 'Color palette: <code>accent</code>, <code>neutral</code> o <code>danger</code>.',
              size: 'Taas, padding at laki ng font: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              disabled:
                'Dini-disable ang button. Sa mga anchor, nilalagyan nito ng <code>aria-disabled</code> at hinaharangan ang activation.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Inililipat ang focus sa button o link.'],
          ['Enter', 'Ina-activate ang button, o sinusundan ang link.'],
          [
            'Space',
            'Ina-activate ang button. Sa mga link, ini-scroll ang page (native na behavior).',
          ],
        ],
        notes: [
          'Ang accessible name ay ang text ng element. Kailangan ng <code>aria-label</code> ang mga button na icon lang ang laman.',
          'Umaabot sa 4.5:1 na contrast ratio ang text sa bawat variant, tone at tema; ipinapatupad ito ng palette generator.',
          'Ang focus ring ay 2px na outline na may hindi bababa sa 3:1 na contrast laban sa page, sa parehong tema.',
          'Umaalis sa tab order ang naka-disable na <code>&lt;button&gt;</code>. Nananatiling focusable ang naka-disable na link para mahanap ito ng mga gumagamit ng screen reader, at ina-announce itong disabled.',
          'Sa forced-colors mode, nagiging nakikitang outline na may system color ang transparent na border.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Dialog component para sa Angular',
        summary:
          'Isang modal window sa native na dialog element, at ang browser ang humahawak sa focus.',
        description:
          'Accessible na Angular dialog na nakabatay sa native na dialog element: modal na focus, Escape para isara, return value at pagsara sa backdrop.',
        apiDescription:
          'API reference ng Needless UI dialog: nuiDialog na may two-way na open binding, mga laki, return value, at ang mga bahaging title, description at close.',
        a11yDescription:
          'Keyboard behavior at accessibility ng Needless UI dialog: modal na focus, Escape, pagbalik ng focus at may label na nilalaman.',
        overview: [
          'Ginagawang Needless UI dialog ng <code>nuiDialog</code> directive ang isang native na <code>&lt;dialog&gt;</code>. Ang browser ang nagbibigay ng modal na behavior: nagiging inert ang page sa likod, nananatili sa loob ang focus, isinasara ito ng Escape at bumabalik ang focus sa nagbukas nito.',
          'I-bind ang <code>[(open)]</code> sa isang signal, at bigyan ng value ang mga close button gamit ang <code>nuiDialogClose="…"</code> para malaman mo kung paano isinara ang dialog.',
        ],
        examples: {
          confirm: {
            title: 'Kumpirmasyon',
            text: 'Kumpirmasyon para sa isang mapanirang aksyon. May <code>autofocus</code> ang ligtas na pagpipilian, at dumarating ang napiling value sa pamamagitan ng <code>(closed)</code>.',
          },
          form: {
            title: 'Form sa loob ng dialog',
            text: 'Puwedeng maglaman ang dialog ng kahit anong content. Dito, ang unang field ang tumatanggap ng focus pagbukas ng dialog.',
          },
          dismissible: {
            title: 'Hindi basta maisasara',
            text: 'Kapag <code>[dismissible]="false"</code>, binabalewala ang Escape at ang mga click sa backdrop, kaya kailangang pumili ng user ng isang opsyon.',
          },
          entrances: {
            title: 'Mga paglitaw',
            text: 'Binubuksan ng bawat button ang parehong dialog gamit ang ibang <code>enter</code> preset at ang <code>bouncy</code> na spring. Paano man ito lumitaw, mabilis na fade ang pag-alis nito.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Ginagawang Needless UI dialog ang isang native na <code>&lt;dialog&gt;</code>.',
            members: {
              open: 'Kung bukas ang dialog. I-bind ito gamit ang <code>[(open)]</code>.',
              modal: 'Bumubukas bilang modal, may backdrop at inert na page sa likod nito.',
              dismissible: 'Kung naisasara ng Escape at ng mga click sa backdrop ang dialog.',
              size: 'Maximum na lapad: <code>sm</code> (24rem), <code>md</code> (32rem) o <code>lg</code> (44rem).',
              closed:
                'Inilalabas ang return value tuwing nagsasara ang dialog. Walang laman ito kapag na-dismiss ang dialog.',
              close: 'Isinasara ang dialog, may opsyonal na return value.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Ang title ng dialog. Nakakakuha ito ng id at nagiging <code>aria-labelledby</code> ng dialog.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Maikling paglalarawan, na tinutukoy ng <code>aria-describedby</code> ng dialog.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Isang hanay ng mga button sa ibaba ng dialog, naka-align sa dulo.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Isinasara ang dialog na kinapapalooban nito kapag na-click.',
            members: {
              nuiDialogClose:
                'Ang value na ipinapangsara sa dialog, na inilalabas ng <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Inililipat ang focus sa susunod na element sa loob ng dialog.'],
          ['Shift + Tab', 'Inililipat ang focus sa naunang element sa loob ng dialog.'],
          ['Escape', 'Isinasara ang dialog, maliban kung hindi ito dismissible.'],
        ],
        notes: [
          'Kapag binuksan gamit ang <code>showModal()</code>, nagkakaroon ang dialog ng <code>role="dialog"</code> at modal na semantics, at nagiging inert ang natitirang bahagi ng page.',
          'Naka-link ang title at description sa pamamagitan ng mga nabuong id, kaya parehong ina-announce ng mga screen reader ang mga ito pagbukas ng dialog.',
          'Napupunta ang unang focus sa element na may <code>autofocus</code>, o sa unang focusable na element. Sa mga kumpirmasyon ng mapanirang aksyon, ilagay ang <code>autofocus</code> sa ligtas na pagpipilian.',
          'Pagsara ng dialog, bumabalik ang focus sa element na nagbukas nito.',
          'Puwede pa ring isara ng mga browser ang dialog na hindi dismissible pagkatapos ng paulit-ulit na pagpindot ng Escape nang walang ibang interaksyon ng user, kaya laging magbigay ng malinaw na paraan para makalabas.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Menu component para sa Angular',
        summary:
          'Isang popup na listahan ng mga aksyon, may mga submenu, mga item na puwedeng i-check at buong suporta sa keyboard.',
        description:
          'Accessible na Angular menu na nakabatay sa Angular Aria: keyboard navigation, typeahead, submenu, checkbox at radio item, at posisyong umaangkop sa viewport.',
        apiDescription:
          'API reference ng Needless UI menu: nuiMenuTrigger, nuiMenu at nuiMenuItem, kasama ang mga value, tone, submenu at checked state.',
        a11yDescription:
          'Keyboard interaction at accessibility ng Needless UI menu: mga arrow key, typeahead, submenu, Escape at pagbalik ng focus.',
        overview: [
          'Nagpapakita ang menu ng listahan ng mga aksyon kapag na-activate ang trigger nito. Galing ang behavior sa menu pattern ng Angular Aria; idinadagdag ng Needless UI ang mga style, nire-render ang menu bilang popover sa ibabaw ng page at pinapanatili ito sa loob ng viewport.',
          'Ipasa ang <code>ngMenu</code> reference ng menu sa <code>[nuiMenuTrigger]</code>, bigyan ang bawat item ng natatanging <code>value</code>, at tumugon sa <code>(selected)</code> sa bawat item o sa <code>(itemSelected)</code> sa menu.',
        ],
        examples: {
          actions: {
            title: 'Mga aksyon',
            text: 'Isang menu ng mga aksyon na may mga shortcut hint, separator at isang mapanirang item.',
          },
          submenu: {
            title: 'Mga submenu',
            text: 'I-link ang isang item sa nested na <code>nuiMenu</code> gamit ang <code>[submenu]</code>. Bumubukas ito sa hover o gamit ang right arrow key.',
          },
          checkable: {
            title: 'Mga checkbox at radio item',
            text: 'I-set ang <code>role</code> at i-bind ang <code>[checked]</code>. Ipinapakita ng menu ang indicator at ina-announce ang state.',
          },
          entrances: {
            title: 'Mga paglitaw at spring',
            text: 'Ipinapares ng bawat menu ang isang <code>enter</code> preset sa isang <code>motion</code> spring, at lumalaki ito mula sa gilid kung saan ito bumubukas. Minamana ng mga submenu ang dalawa.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Nagbubukas ng menu. Karaniwang inilalagay sa isang <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Ang menu na bubuksan: ang <code>ngMenu</code> reference ng isang <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Isang menu ng mga item, nire-render bilang popover sa tabi ng trigger nito. Ang <code>ngMenu</code> export nito ang Angular Aria menu na tinatanggap ng mga trigger at submenu.',
            members: {
              wrap: 'Kung umiikot ang mga arrow key mula sa huling item pabalik sa una.',
              typeaheadDelay: 'Ilang millisecond bago mag-reset ang typeahead search.',
              disabled: 'Dini-disable ang buong menu.',
              itemSelected:
                'Inilalabas ang value ng napiling item. Sa root menu, nagfa-fire din ito para sa mga item ng submenu.',
            },
          },
          NuiMenuItem: {
            summary: 'Isang item sa <code>nuiMenu</code>.',
            members: {
              value:
                'Kinikilala ang item. Dapat natatangi ito sa buong menu, kasama ang mga submenu.',
              disabled:
                'Dini-disable ang item. Naaabot pa rin ito gamit ang mga arrow key pero hindi mapipili.',
              submenu: 'Isang nested na <code>nuiMenu</code> na binubuksan ng item na ito.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> o <code>menuitemradio</code>.',
              checked: 'Checked state ng isang checkbox o radio item.',
              tone: '<code>danger</code> para sa mga mapanirang aksyon.',
              searchTerm: 'Text na itinutugma ng typeahead. Label ng item ang default.',
              selected: 'Inilalabas ang value ng item kapag pinili ito gamit ang mouse o keyboard.',
            },
          },
          NuiMenuSeparator: {
            summary: 'Isang linya sa pagitan ng mga grupo ng item.',
            members: {},
          },
          NuiMenuShortcut: {
            summary: 'Hint ng keyboard shortcut, naka-align sa dulo ng item.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter o Space',
            'Sa trigger: binubuksan ang menu sa unang item. Sa isang item: pinipili ito, o binubuksan ang submenu nito.',
          ],
          [
            'Down arrow',
            'Sa trigger: binubuksan ang menu sa unang item. Sa menu: lumilipat sa susunod na item.',
          ],
          [
            'Up arrow',
            'Sa trigger: binubuksan ang menu sa huling item. Sa menu: lumilipat sa naunang item.',
          ],
          ['Home at End', 'Lumilipat sa una o huling item.'],
          [
            'Right arrow',
            'Binubuksan ang submenu at lumilipat sa unang item nito (left arrow sa right-to-left na text).',
          ],
          [
            'Left arrow',
            'Isinasara ang submenu at bumabalik sa parent item nito (right arrow sa right-to-left na text).',
          ],
          ['Escape', 'Isinasara ang menu at ibinabalik ang focus sa trigger.'],
          [
            'Mga titik',
            'Lumilipat sa susunod na item na ang label ay nagsisimula sa itinipang text.',
          ],
        ],
        notes: [
          'Nakakakuha ang trigger ng <code>aria-haspopup</code>, <code>aria-expanded</code> at <code>aria-controls</code>; nakukuha naman ng menu at ng mga item nito ang kanilang ARIA role mula sa Angular Aria.',
          'Solid fill ang ginagamit ng naka-highlight na item, na may hindi bababa sa 4.5:1 na text contrast, at ito rin ang nagsisilbing focus indicator. Sa forced-colors mode, nagkakaroon ito ng system highlight outline.',
          'Ina-announce ng mga checkable item ang state nila sa pamamagitan ng <code>aria-checked</code>.',
          'Kapag pumili ng item, nagsasara ang menu at bumabalik ang focus sa trigger. Nagsasara rin ito kapag inilipat ang focus palabas ng trigger at ng menu.',
          'Hindi bababa sa 28 pixel ang taas ng mga item, lampas sa minimum na target size ng WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Mga gabay',
    items: {
      'getting-started': {
        title: 'Pagsisimula',
        description:
          'I-install ang Needless UI sa Angular 22 app: idagdag ang mga package, i-import ang stylesheet at gamitin ang una mong accessible na component sa ilang minuto.',
        blocks: [
          {
            kind: 'p',
            html: 'Gumagana ang Needless UI sa Angular 22. Standalone directive ang mga component, kaya walang module na kailangang i-import.',
          },
          { kind: 'h2', id: 'install', text: 'Pag-install' },
          {
            kind: 'p',
            html: 'Idagdag ang Angular package kasama ang Angular Aria at ang CDK, na nagbibigay ng keyboard behavior at accessibility. Kasama na rito ang stylesheet.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'I-import ang mga style' },
          {
            kind: 'p',
            html: 'I-import nang isang beses ang stylesheet sa <code>src/styles.css</code>. Kasama rito ang mga design token at ang bawat component.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Nasa loob ng <code>@layer nui</code> ang lahat. Kung may mga global reset ang app mo gaya ng <code>a { color: inherit }</code>, ilagay ang mga ito sa isang layer na idineklara bago ang <code>nui</code> para hindi nila ma-override ang mga component.',
          },
          { kind: 'h2', id: 'use', text: 'Gumamit ng component' },
          {
            kind: 'p',
            html: 'I-import ang mga directive na kailangan mo mula sa kanilang mga entry point at idagdag ang mga ito sa <code>imports</code> ng iyong component.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Mga susunod na hakbang' },
          {
            kind: 'p',
            html: 'Tingnan ang mga <a href="/components">component</a> para sa mga live na halimbawa, o basahin ang <a href="/guides/theming">gabay sa theming</a> para maitugma ang mga ito sa brand mo.',
          },
        ],
      },
      theming: {
        title: 'Theming',
        description:
          'I-theme ang Needless UI gamit ang CSS custom property: light at dark mode, nested na tema, pag-override ng token at brand palette na may sinuring contrast.',
        blocks: [
          {
            kind: 'p',
            html: 'Ang bawat visual na desisyon ay isang CSS custom property na nabuo mula sa mga W3C design token. Semantic token lang ang ginagamit ng mga component, gaya ng <code>--nui-color-accent-solid</code>, kaya kapag pinalitan mo ang isang token, nagbabago ang itsura ng bawat component na gumagamit nito.',
          },
          { kind: 'h2', id: 'modes', text: 'Light at dark' },
          {
            kind: 'p',
            html: 'Bilang default, ang preference ng operating system ang pumipili ng mode. Mag-pin ng mode sa kahit anong element gamit ang <code>data-nui-theme</code>, at malaya mong i-nest ang mga ito.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'I-override ang mga token' },
          {
            kind: 'p',
            html: 'Nasa <code>@layer nui</code> ang mga token, kaya nao-override sila ng plain CSS sa app mo. I-set ang mga ito sa <code>:root</code> para sa buong app, o sa kahit anong element para sa isang bahagi lang nito.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Palette para sa brand mo' },
          {
            kind: 'p',
            html: 'Generated ang mga color scale. Palitan ang isang hue sa <code>packages/tokens/scripts/palette.ts</code> at i-regenerate: ire-refit ng script ang bawat kulay sa sRGB at muling susuriin ang contrast ng bawat pares ng text at background.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Pag-customize',
        description:
          'Spring physics, press effect, paglitaw, hugis at radius ng sulok, at density: baguhin ang galaw at dating ng Needless UI, sa buong app o sa bawat component.',
        blocks: [
          {
            kind: 'p',
            html: 'May personalidad ang bawat component na puwede mong baguhin: ang spring na nagpapagalaw dito, ang ginagawa ng button sa ilalim ng daliri mo, kung paano lumilitaw ang mga dialog at menu, ang hugis at laki ng kanilang mga sulok, at kung gaano kalaking espasyo ang kinukuha nila. Bawat isa ay isang attribute para sa lahat ng nasa loob ng isang element, o isang input para sa iisang component.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Isang attribute, buong subtree' },
          {
            kind: 'p',
            html: 'Ilagay ang mga <code>data-nui-*</code> attribute sa <code>&lt;body&gt;</code> para sa buong app, o sa kahit anong element para sa isang bahagi lang nito. Ang pinakamalapit ang nasusunod, kaya puwede silang i-nest. CSS custom property lang ang sine-set nila, kaya pareho ang paggana nila sa kahit anong framework, o kahit walang framework.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Iisang component' },
          {
            kind: 'p',
            html: 'Sa Angular, tumatanggap ang <code>nuiButton</code>, <code>nuiDialog</code> at <code>nuiMenu</code> ng parehong mga value bilang input. Sinusunod ng mga input na hindi mo sine-set ang mga attribute na nakapaligid sa kanila.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Mga spring na kino-compile sa CSS' },
          {
            kind: 'p',
            html: 'Spring physics ang galaw: tigas, damping at masa sa halip na duration at curve. Kinakalkula ng token compiler ang bawat spring at isinusulat ito sa CSS bilang tagal bago ito tumigil at isang <code>linear()</code> easing, kaya tumatakbo ito sa compositor nang walang JavaScript. Anim na spring ang kasama bilang mga token, mula <code>--nui-spring-snappy</code> hanggang <code>--nui-spring-mechanical</code>, at hawak ng <code>--nui-motion</code> ang kasalukuyang ginagamit.',
          },
          {
            kind: 'p',
            html: 'Isang input lang ang kailangan para sa kahit anong ibang spring. Kino-compile ito ng Angular sa runtime gamit ang parehong solver, at ibinibigay sa iyo ng <code>springTransition()</code> ang CSS para sa sarili mong mga element.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Lahat ng nasa pagitan' },
          {
            kind: 'p',
            html: 'Mga shortcut lang ang mga preset. Para sa iba pa, ikaw na mismo ang mag-set ng mga CSS custom property: kahit anong transform para sa <code>--nui-press</code> at <code>--nui-enter</code>, kahit anong numero para sa <code>--nui-radius-scale</code> at <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Accessibility' },
          {
            kind: 'p',
            html: 'Kapag humiling ang system ng reduced motion, agad na natatapos ang mga spring, at hindi na gumagalaw ang mga press effect at paglitaw. Hindi kailanman pinapaliit ng density ang isang control nang lampas sa 24px na target size ng WCAG 2.2, at walang preset na nagbabago ng kulay, kaya pasado pa rin ang bawat contrast check. Ginagawang bilog ng mga browser na walang <code>corner-shape</code> ang bawat sulok.',
          },
        ],
      },
    },
    playground: {
      label: 'Playground para sa pag-customize',
      motion: 'Galaw',
      custom: 'custom',
      stiffness: 'Tigas',
      damping: 'Damping',
      mass: 'Masa',
      press: 'Pindot',
      enter: 'Paglitaw',
      corners: 'Mga sulok',
      radius: 'Radius',
      density: 'Density',
      surprise: 'Sorpresahin mo ako',
      reset: 'Ibalik sa default',
      hint: 'Pindutin nang matagal ang isang button, saka bitawan. Buksan ang dialog at ang menu para makita kung paano sila lumilitaw.',
      save: 'I-save',
      cancel: 'Kanselahin',
      delete: 'Burahin',
      openDialog: 'Buksan ang dialog',
      openMenu: 'Buksan ang menu',
      menu: ['Palitan ang pangalan', 'I-duplicate', 'Burahin'],
      dialogTitle: 'Sobra-sobrang animated',
      dialogText: 'Lumitaw ang dialog na ito nang eksaktong gaya ng sinabi mo.',
      close: 'Isara',
      curve:
        'Ang posisyon ng spring sa paglipas ng oras. Nagsisimula ito sa ibaba at tumitigil sa putol-putol na linya.',
      settles: (ms, overshoot) => `Tumitigil sa loob ng ${ms} ms · lumalampas nang ${overshoot}%`,
      instant: 'Walang galaw: diretsong tumatalon ang lahat sa pupuntahan nito.',
      stuck:
        'Hindi tumitigil ang spring na ito sa loob ng 10 segundo. Dagdagan ang damping o ang tigas; samantala, ginagamit ng mga component ang huling spring na tumigil.',
      reducedMotion:
        'Humihingi ang system mo ng mas kaunting galaw, kaya walang gumagalaw dito. Babalik ang mga spring, pindot at paglitaw kapag hindi na ito humihingi.',
      noCornerShape:
        'Hindi pa kayang iguhit ng browser na ito ang mga hugis ng sulok, kaya bilog pa rin ang bawat sulok.',
      everywhere: 'Sa kahit anong element, para sa lahat ng nasa loob nito:',
      oneComponent: 'Sa iisang component, sa Angular:',
    },
  },

  notFound: {
    title: 'Hindi nahanap ang page',
    description:
      'Hindi umiiral ang page na ito. Tingnan ang mga Needless UI component o magsimula sa home page.',
    text: 'Hindi umiiral ang page na ito, o inilipat na ito.',
    home: 'Pumunta sa home page',
    components: 'Tingnan ang mga component',
  },

  legal: {
    translationNote:
      'Ibinibigay ang saling ito para sa kaginhawahan; kung may pagkakaiba, ang tekstong Ingles ang masusunod.',
    labels: {
      name: 'Pangalan',
      address: 'Address',
      email: 'Email',
      uid: 'UID',
      vat: 'Numero ng VAT',
    },
    notice: {
      title: 'Legal na abiso',
      description:
        'Sino ang nagpapatakbo ng needlessui.com: pangalan, postal address at email ng operator, kasama ang detalye ng rehistro ng komersyo at VAT.',
      operator: 'Operator',
      legalForm: 'isahang pagmamay-ari',
      country: 'Switzerland',
      register: 'Rehistro ng komersyo',
      registerEntry: 'Nakarehistro sa rehistro ng komersyo ng Kanton ng Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Pananagutan' },
        {
          kind: 'p',
          html: 'Maingat na isinulat ang site na ito, pero walang anumang garantiya na tumpak, kumpleto o napapanahon ito. Nasa labas ng aming kontrol ang mga naka-link na website; ang mga operator nila ang may pananagutan sa kanilang nilalaman.',
        },
        { kind: 'h2', id: 'license', text: 'Lisensya' },
        {
          kind: 'p',
          html: 'Open source ang Needless UI, kasama ang site na ito, sa ilalim ng <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT License</a>.',
        },
      ],
    },
    privacy: {
      title: 'Patakaran sa privacy',
      description:
        'Paano hinahawakan ng needlessui.com ang personal na data: walang cookie, analytics o tracking. Ang pinoproseso ng host sa pagbisita mo, at ang mga karapatan mo.',
      updated: 'Huling na-update: Setyembre 24, 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Ipinapaliwanag ng patakarang ito kung aling personal na data ang pinoproseso kapag binisita mo ang www.needlessui.com, at kung ano ang mga karapatan mo. Sa madaling salita: walang ginagamit na cookie, analytics o tracking ang site, at hindi ka nito kailanman hihingan ng personal na data.',
        },
        { kind: 'h2', id: 'controller', text: 'Sino ang responsable' },
        {
          kind: 'p',
          html: 'Ang operator na nakapangalan sa <a href="/legal">legal na abiso</a>, si Angelo Lamonaca. Makipag-ugnayan: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'Naka-host ang site sa Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Kapag nagbukas ka ng page, ipinapadala ng browser mo ang teknikal na data na natatanggap ng bawat website: ang iyong IP address, ang petsa at oras, ang page na hiniling, ang page na pinanggalingan mo at ang user agent ng browser mo. Pinoproseso ng Vercel ang data na ito para sa amin upang maihatid ang site at mapanatili itong ligtas, at iniingatan lang ito hangga’t kailangan para roon. Maaari nitong gawin ito sa USA; certified ang Vercel sa ilalim ng EU-U.S. Data Privacy Framework, ng UK Extension nito at ng Swiss-U.S. Data Privacy Framework. Tingnan ang <a href="https://vercel.com/legal/privacy-policy">privacy notice ng Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Kung saan umiiral ang GDPR, ang legal na batayan ay ang aming lehitimong interes na magpatakbo ng ligtas na website (Art. 6(1)(f) GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie at local storage' },
        {
          kind: 'p',
          html: 'Walang itinatakdang cookie ang site. Kapag pumili ka ng light o dark na tema, tatandaan ng local storage ng browser mo ang pinili mo para sa susunod mong pagbisita. Hindi ito kailanman umaalis sa device mo; bumalik sa “System” o i-clear ang data ng site para alisin ito.',
        },
        { kind: 'h2', id: 'tracking', text: 'Walang tracking' },
        {
          kind: 'p',
          html: 'Walang analytics, ad, social media plugin, naka-embed na content mula sa third party, o external na font. Ang mga link papunta sa GitHub at npm ay humahantong sa mga site na may sarili nilang patakaran sa privacy.',
        },
        { kind: 'h2', id: 'rights', text: 'Ang iyong mga karapatan' },
        {
          kind: 'p',
          html: 'Puwede mong itanong kung anong personal na data tungkol sa iyo ang pinoproseso, at ipaitama o ipabura ito. Kung saan umiiral ang GDPR, puwede ka ring tumutol sa pagproseso, humiling na limitahan ito, at matanggap ang data mo sa isang portable na format. Sumulat sa {email}. Puwede ka ring magreklamo sa isang supervisory authority: sa Switzerland, sa Federal Data Protection and Information Commissioner (FDPIC); sa EU, sa awtoridad ng bansa mo.',
        },
        { kind: 'h2', id: 'changes', text: 'Mga pagbabago' },
        {
          kind: 'p',
          html: 'Nagbabago ang patakarang ito kapag nagbabago ang site, halimbawa kapag lumipat ito sa bagong host. Ipinapakita ng petsa sa ibaba ang kasalukuyang bersyon.',
        },
      ],
    },
  },
};
