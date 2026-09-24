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
    toaster: { label: 'Mga notification (Alt+T)', close: 'Isara' },
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
      kinds: {
        input: 'Input',
        model: 'Two-way',
        output: 'Output',
        method: 'Method',
        property: 'Property',
      },
      texts:
        'Input din ang bawat text na ipinapakita o ina-announce nito, kaya puwede mo itong isalin:',
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

      avatar: {
        name: 'Avatar',
        title: 'Avatar component para sa Angular',
        summary: 'Larawan ng isang tao, o ang initials niya sa kulay na laging kanya.',
        description:
          'Angular avatar na may initials kapag walang larawan, iisang kulay bawat pangalan, mga status dot at grupo, at nababasa sa bawat tema.',
        apiDescription:
          'API reference ng Needless UI avatar: nuiAvatar na may pangalan, larawan, laki, hugis at status, pati ang nuiAvatarGroup.',
        a11yDescription:
          'Accessibility ng Needless UI avatar: image role at pangalan, mga decorative na avatar, at initials na may 4.5:1 na contrast.',
        overview: [
          'Nagpapakita ang <code>nuiAvatar</code> component ng larawan, o ng initials ng tao kapag wala itong larawan o hindi ito nag-load. Nakapatong ang initials sa kulay na kinukuwenta mula sa pangalan, kaya pareho ang kulay ng iisang tao saan man.',
          'Nililimitahan ang lightness at chroma ng bawat hue para manatiling lampas sa 4.5:1 ang contrast ratio ng puting initials, anuman ang pangalan at ang tema.',
        ],
        examples: {
          people: {
            title: 'Initials, larawan at status',
            text: 'Kapag walang <code>src</code>, galing sa <code>name</code> ang initials at ang kulay. Nagdadagdag ang <code>status</code> ng presence dot.',
          },
          group: {
            title: 'Mga grupo, laki at hugis',
            text: 'Pinagpapatong-patong ng <code>nuiAvatarGroup</code> ang isang hanay ng mga avatar. Tumatanggap ang <code>size</code> ng <code>sm</code>, <code>md</code> o <code>lg</code>, at bagay ang <code>shape="square"</code> sa mga team at app.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Isang larawan o initials, na ipinangalan sa tao.',
            members: {
              name: 'Ang pangalan ng tao. Dito nagmumula ang accessible name, ang initials at ang kulay.',
              src: 'URL ng larawan. Kapag hindi ito nag-load, initials ang ipinapakita.',
              size: 'Laki: <code>sm</code>, <code>md</code> o <code>lg</code>.',
              shape: '<code>circle</code> o <code>square</code>.',
              status:
                'Isang presence dot: <code>online</code>, <code>away</code>, <code>busy</code> o <code>offline</code>.',
              label:
                'Accessible name na nagsasabi nang higit pa sa pangalan, gaya ng “Ada Lovelace, online”.',
              decorative:
                'Itinatago ang avatar sa assistive technology, para sa mga avatar na katabi ng nakikitang pangalan.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Isang hanay ng magkakapatong na avatar. Pangalanan ito gamit ang <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Isang image (<code>role="img"</code>) ang avatar na ipinangalan sa tao. Kapag katabi ito ng nakikitang pangalan niya, i-set ang <code>decorative</code> para hindi ito marinig nang dalawang beses ng mga gumagamit ng screen reader.',
          'Visual lang ang status dot. Kapag mahalaga ito, ilagay ito sa <code>label</code>.',
          'Hindi bababa sa 4.5:1 ang contrast ratio ng initials sa bawat nabuong kulay.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Breadcrumbs component para sa Angular',
        summary: 'Ang trail ng mga page na humahantong sa kasalukuyang page.',
        description:
          'Accessible na Angular breadcrumbs sa native na nav at list, may CSS separator na bumabaligtad sa right-to-left na text at trail na nag-i-scroll kapag mahaba.',
        apiDescription:
          'API reference ng Needless UI breadcrumbs: ang nuiBreadcrumbs directive at ang label ng landmark nito.',
        a11yDescription:
          'Accessibility ng Needless UI breadcrumbs: navigation landmark, list semantics, ang kasalukuyang page at mga target size.',
        overview: [
          'Ipinapakita ng breadcrumbs kung nasaan ang isang page sa site. Sini-style ng <code>nuiBreadcrumbs</code> directive ang isang native na <code>&lt;nav&gt;</code> at ang list nito; ang huling item ang kasalukuyang page, na minarkahan ng <code>aria-current="page"</code>.',
          'Kapag mas mahaba ang trail kaysa sa container nito, nag-i-scroll ito pahalang sa halip na mag-wrap. Nagsisimula itong naka-scroll sa dulo, at nagfe-fade ang mga gilid kung saan may makikita pa.',
        ],
        examples: {
          trail: {
            title: 'Isang trail',
            text: 'Mga link para sa mga page sa itaas, tapos ang kasalukuyang page bilang plain text na may <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Mahahabang trail',
            text: 'Sa makitid na container, nag-i-scroll ang trail, at kita agad ang kasalukuyang page sa simula.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary:
              'Sini-style bilang breadcrumbs ang isang <code>&lt;nav&gt;</code> at ang list nito.',
            members: { label: 'Accessible name ng navigation landmark.' },
          },
        },
        keyboard: [['Tab', 'Lumilipat sa susunod na link sa trail.']],
        notes: [
          'Navigation landmark ito na may plain list, kaya ina-announce ng mga screen reader kung ilang page ang nasa trail.',
          'Iginuguhit sa CSS ang mga separator, kaya hindi binabasa nang malakas ang mga ito, at bumabaligtad ang mga ito sa right-to-left na text.',
          'Hindi bababa sa 24px ang taas ng bawat link.',
        ],
      },

      empty: {
        name: 'Empty state',
        title: 'Empty state component para sa Angular',
        summary: 'Kung ano ang ipapakita kapag walang maipakita, at kung ano ang puwedeng gawin.',
        description:
          'Angular empty state na may larawan, title, maikling paliwanag at mga aksyon, pati apat na built-in na illustration na marahang lumulutang.',
        apiDescription:
          'API reference ng Needless UI empty state: nuiEmpty at ang mga bahaging media, title, description at actions nito.',
        a11yDescription:
          'Accessibility ng Needless UI empty state: mga decorative na larawan, makabuluhang heading at reduced motion.',
        overview: [
          'Pinapalitan ng empty state ang isang list, table o page na wala pang laman. Ipinapaliwanag nito kung bakit, at nag-aalok ito ng susunod na hakbang.',
          'Tumatanggap ang media part ng sarili mong larawan, o gumuguhit ito ng built-in na larawan: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Walang resulta',
            text: 'Isang title na nagsasabi kung ano ang nangyari, isang linya ng tulong, at mga aksyon para makaalis sa sitwasyon.',
          },
          pictures: {
            title: 'Mga built-in na larawan',
            text: 'I-set ang <code>illustration</code> sa <code>nuiEmptyMedia</code>. Sumusunod sa tema ang mga larawan at lumulutang ang mga ito maliban kung naka-reduced motion.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Ang container: isang column na nakagitna.', members: {} },
          NuiEmptyMedia: {
            summary: 'Ang larawan, nakatago sa assistive technology.',
            members: {
              illustration:
                'Isang built-in na larawan: <code>search</code>, <code>inbox</code>, <code>files</code> o <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Ang title. Gamitin ang heading level na bagay sa page.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Isang linya ng paliwanag.', members: {} },
          NuiEmptyActions: { summary: 'Isang hanay ng mga button.', members: {} },
        },
        keyboard: [],
        notes: [
          'Decorative ang larawan (<code>aria-hidden</code>): ang title at description ang nagdadala ng mensahe.',
          'Gumamit ng heading para sa title, sa level na bagay sa outline ng page.',
          'Humihinto sa paglutang ang mga built-in na larawan kapag reduced motion ang gusto ng user.',
        ],
      },

      'number-field': {
        name: 'Number field',
        title: 'Number field component para sa Angular',
        summary: 'Isang number input na may mga stepper, naka-format para sa bawat locale.',
        description:
          'Accessible na Angular number field: spinbutton na may step button, pag-step gamit ang keyboard, min at max, at locale format para sa currency, percent at unit.',
        apiDescription:
          'API reference ng Needless UI number field: nuiNumberField, nuiNumberInput na may min, max, step at format, at nuiNumberStep.',
        a11yDescription:
          'Keyboard interaction at accessibility ng Needless UI number field: spinbutton role, mga arrow at page key, at mga step button.',
        overview: [
          'Text input na may hawak na numero ang number field. Ipinapakita nito ang numero na naka-format para sa locale, binabasa pabalik ang itinipang text sa parehong format, at sa blur ay ini-snap ito sa <code>step</code> sa pagitan ng <code>min</code> at <code>max</code>.',
          'Nababasa rin nito ang mga native na digit at separator: mga numerong Arabic-Indic, Persian at Devanagari, mga space at tuldok bilang group separator, at bawat uri ng minus sign. Kapag pinindot nang matagal ang isang step button, umuulit ito, pabilis nang pabilis.',
        ],
        examples: {
          guests: {
            title: 'Mga stepper',
            text: 'Mga button sa magkabilang gilid, na nadi-disable sa <code>min</code> at <code>max</code>. Nag-i-step din ang mga arrow key.',
          },
          formats: {
            title: 'Currency at percent',
            text: 'Ipasa ang mga opsyon ng <code>Intl.NumberFormat</code> sa <code>format</code> at magbigay ng <code>locale</code>. Nananatiling plain number ang value.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Pinagsasama ang input at ang mga step button nito.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Isang text input na may hawak na numero, bilang ARIA spinbutton.',
            members: {
              value:
                'Ang numero, o <code>null</code> kapag walang laman. Gumagana rin sa mga form.',
              min: 'Pinakamaliit na pinapayagang value.',
              max: 'Pinakamalaking pinapayagang value.',
              step: 'Kung gaano kalaki ang binabago ng isang step sa value. Ini-snap dito ang value sa blur.',
              format:
                "Mga opsyon ng <code>Intl.NumberFormat</code>, gaya ng <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale para sa pag-format at pagbasa ng mga numero.',
              disabled: 'Dini-disable ang input at ang mga button nito.',
              stepBy: 'Nag-i-step pataas (positive) o pababa (negative) nang ilang step.',
            },
          },
          NuiNumberStep: {
            summary: 'Isang step button. Umuulit ito kapag pinindot nang matagal.',
            members: {
              nuiNumberStep: 'Nag-i-step pataas ang <code>1</code> at pababa ang <code>-1</code>.',
              label: 'Accessible name. “Increase” o “Decrease” ang default.',
            },
          },
        },
        keyboard: [
          ['Up at down arrow', 'Nag-i-step pataas o pababa ang value.'],
          ['Page Up at Page Down', 'Nag-i-step nang sampung beses.'],
          ['Home at End', 'Pumupunta sa minimum o maximum.'],
          ['Enter', 'Kino-commit ang itinipa.'],
        ],
        notes: [
          'Isang <code>spinbutton</code> ang input na may <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, at ang naka-format na value bilang <code>aria-valuetext</code>.',
          'Wala sa tab order ang mga step button, dahil pareho ang ginagawa ng mga key, pero may pangalan ang mga ito at naka-link sa input gamit ang <code>aria-controls</code>.',
          'Lagyan ng label ang input gamit ang <code>aria-label</code> o isang <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'OTP input',
        title: 'OTP at verification code input para sa Angular',
        summary: 'Mga verification code sa magkakahiwalay na slot, sa iisang totoong input.',
        description:
          'Accessible na Angular OTP input: iisang native field sa ilalim ng mga slot, SMS autofill, WebOTP, paglilinis ng paste, grupo, masking at pag-alog sa error.',
        apiDescription:
          'API reference ng Needless UI OTP input: nuiOtp na may length, pattern, grupo at masking, at nuiOtpInput na may WebOTP.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI OTP input: iisang text field na may label, nakikitang focus ring at autofill.',
        overview: [
          'Mukhang hanay ng mga slot ang OTP input, pero sa ilalim nito ay iisang native na <code>&lt;input&gt;</code>. Ordinaryong text field ang nakikita ng SMS autofill (<code>autocomplete="one-time-code"</code>), ng paste, ng mga password manager, ng mga form at ng mga screen reader.',
          'Nililinis ang mga ipinaste na code, kaya parehong gumagana ang “123-456” at “123 456”, at tinatanggihan ang mga character na hindi pinapayagan ng pattern. Sa Android, pinupunan ng <code>webOtp</code> ang code mula sa SMS pagdating nito.',
        ],
        examples: {
          verify: {
            title: 'Pag-verify',
            text: 'Nagfa-fire ang <code>(completed)</code> kapag napuno ang huling slot. I-set ang <code>aria-invalid</code> sa input para tanggihan ang isang code: nagiging pula ang mga slot at umaalog.',
          },
          letters: {
            title: 'Mga titik, grupo at masking',
            text: 'Tumatanggap din ng mga titik ang <code>pattern="alphanumeric"</code>, nagdadagdag ng mga separator ang <code>[groups]</code>, at gumuguhit ng mga tuldok ang <code>masked</code>.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Iginuguhit ang mga slot at binabalot ang input.',
            members: {
              length: 'Bilang ng mga character.',
              pattern:
                '<code>digits</code>, o <code>alphanumeric</code> para sa mga titik at digit.',
              groups:
                'Mga laki ng grupo, na may separator sa pagitan nila, gaya ng <code>[3, 3]</code>.',
              masked: 'Gumuguhit ng mga tuldok sa halip na ang mga character.',
              completed: 'Inilalabas ang code tuwing napupuno ang huling slot.',
            },
          },
          NuiOtpInput: {
            summary:
              'Ang totoong input. Nakukuha nito ang mga attribute na kailangan ng isang one-time code.',
            members: {
              webOtp:
                'Pinupunan ang code mula sa papasok na SMS sa pamamagitan ng WebOTP API, kung suportado.',
            },
          },
        },
        keyboard: [
          ['Mga digit o titik', 'Pinupunan ang kasalukuyang slot at lumilipat sa susunod.'],
          ['Backspace', 'Binubura ang character bago ang caret.'],
          [
            'Left at right arrow',
            'Lumilipat nang isang slot; napipili ang slot na may laman, kaya napapalitan ito kapag nag-type.',
          ],
          ['I-paste', 'Pinupunan ang mga slot mula sa kinopyang code.'],
        ],
        notes: [
          'Iisang text field ang nakikita ng mga screen reader. Lagyan ito ng label gamit ang <code>aria-label</code> o isang <code>&lt;label&gt;</code>.',
          'Nakatago ang mga slot sa assistive technology; ipinapakita ng slot na ine-edit ang focus ring.',
          'Sa reduced motion, hindi kumukurap ang caret at hindi tumatalon o umaalog ang mga slot.',
        ],
      },

      rating: {
        name: 'Rating',
        title: 'Star rating component para sa Angular',
        summary: 'Mga bituin para mag-rate, sa totoong radio button.',
        description:
          'Accessible na Angular star rating sa native na radio button: suporta sa keyboard at form, preview sa hover, pag-clear, at fractional na read-only display.',
        apiDescription:
          'API reference ng Needless UI rating: nuiRating na may value, max, read-only at clearable na mode, at mga label na naisasalin.',
        a11yDescription:
          'Keyboard interaction at accessibility ng Needless UI rating: radio group na may pangalan, mga bituing may label at read-only na image.',
        overview: [
          'Grupo ng mga native na radio button na iginuhit bilang mga bituin ang rating. Gumagana ang mga arrow key, form at screen reader gaya ng sa kahit anong radio group; CSS ang nagkukulay sa mga bituin at nagpi-preview ng bagong rating sa ilalim ng pointer.',
          'Kapag read-only, kaya nitong ipakita ang kahit anong fraction, gaya ng average na 4.3.',
        ],
        examples: {
          pick: {
            title: 'Pag-rate ng isang bagay',
            text: 'I-bind ang <code>[(value)]</code> o isang form. Kapag may <code>clearable</code>, nali-clear ang rating kapag pinili ulit ang parehong bituin.',
          },
          average: {
            title: 'Pagpapakita ng average',
            text: 'Kinukulayan ng <code>readonly</code> ang mga bituin hanggang sa kahit anong fraction at pinapangalanan ang larawan na “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Isang radio group ng mga bituin, o read-only na larawan ng isang rating.',
            members: {
              value: 'Ang rating, o <code>null</code>. Gumagana rin sa mga form.',
              max: 'Bilang ng mga bituin.',
              readonly:
                'Ipinapakita ang value, hanggang sa kahit anong fraction, sa halip na humingi nito.',
              disabled: 'Dini-disable ang bawat bituin.',
              clearable: 'Kapag pinili ulit ang kasalukuyang bituin, nali-clear ang rating.',
              name: 'Pangalang pinagsasaluhan ng mga radio button. Awtomatikong nabubuo bilang default.',
              starLabel: 'Accessible name ng bawat bituin, bilang function ng value nito.',
              readonlyLabel: 'Accessible name sa read-only mode.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Pumapasok sa grupo, sa naka-check na bituin.'],
          ['Mga arrow key', 'Binabago ang rating.'],
          ['Space', 'Chine-check ang naka-focus na bituin.'],
        ],
        notes: [
          'Native na radio ang bawat bituin na may pangalang gaya ng “3 stars”. Pangalanan ang grupo gamit ang <code>aria-label</code>.',
          'Kapag read-only, image (<code>role="img"</code>) ang rating na may pangalang “Rated 4.3 out of 5”.',
          'Iginuguhit ang mga bituin gamit ang CSS mask, kaya sumusunod sila sa forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Skeleton loader component para sa Angular',
        summary: 'Mga placeholder na nagpapanatili ng layout habang naglo-load ang content.',
        description:
          'Mga Angular skeleton loader para sa text, bilog at block, may iisang shimmer na dumadaan sa buong page, at wala nito kapag reduced motion.',
        apiDescription:
          'API reference ng Needless UI skeleton: ang nuiSkeleton directive at ang mga hugis nitong text, circle at block.',
        a11yDescription:
          'Accessibility ng Needless UI skeleton: nakatagong placeholder, mga aria-busy region, reduced motion at forced colors.',
        overview: [
          'Pinapanatili ng mga skeleton ang hugis ng content na naglo-load pa, kaya hindi tumatalon ang page pagdating nito. I-size ang mga ito gamit ang CSS.',
          'Nakapirmi sa viewport ang shimmer: iisang highlight ang dumadaan sa bawat skeleton sa page nang sabay-sabay, anuman ang laki o posisyon nito.',
        ],
        examples: {
          card: {
            title: 'Pag-load ng card',
            text: 'Mga linya, isang bilog at isang block na pumapalit sa isang profile. <code>aria-busy</code> ang card habang naglo-load ito.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Isang placeholder, nakatago sa assistive technology.',
            members: {
              shape: '<code>text</code> (isang linya), <code>circle</code> o <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Nakatago sa mga screen reader ang mga skeleton. I-set ang <code>aria-busy="true"</code> sa region na naglo-load, at alisin ito pagdating ng content.',
          'Walang shimmer kapag reduced motion ang gusto ng user.',
          'Sa forced-colors mode, nagkakaroon ng outline ang bawat skeleton.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Mga toast notification para sa Angular',
        summary:
          'Maiikling mensahe na nagpapatong-patong, puwedeng i-swipe palayo at hindi kailanman nang-aagaw ng focus.',
        description:
          'Accessible na Angular toast: stack sa top layer, promise toast, undo action, swipe para i-dismiss, at mga timer na humihinto sa hover at focus.',
        apiDescription:
          'API reference ng Needless UI toast: ang NuiToaster service, ang mga opsyon nito at promise toast, at ang nui-toaster region.',
        a11yDescription:
          'Keyboard interaction at accessibility ng Needless UI toast: mga announcement, ang Alt+T hotkey, Escape at mga timer na humihinto.',
        overview: [
          'Kinukumpirma ng mga toast ang kakatapos lang na nangyari, o nag-aalok ng aksyon gaya ng Undo, nang hindi nakakaabala. Maglagay ng isang <code>&lt;nui-toaster&gt;</code> sa app shell, saka tawagin ang <code>NuiToaster</code> mula kahit saan.',
          'Nagpapatong-patong sila sa likod ng pinakabago at bumubukas na parang pamaypay sa hover o focus, lahat sa motion spring. Itinatapon ng patagilid na swipe ang isang toast. Humihinto ang mga timer habang naka-hover o naka-focus ang stack, at habang nasa background ang page.',
        ],
        examples: {
          tones: {
            title: 'Mga tone',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> at <code>danger()</code>. Mas matagal nananatili ang mga danger toast at ina-announce ang mga ito nang assertive.',
          },
          actions: {
            title: 'Mga aksyon at promise',
            text: 'Nagdadagdag ang isang <code>action</code> ng button gaya ng Undo. Nagpapakita ang <code>promise()</code> ng spinner, saka ito nagiging resulta.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Ang service na nagpapakita ng mga toast. I-inject ito kahit saan.',
            members: {
              toasts: 'Bawat toast na nasa screen, pinakabago muna.',
              show: 'Nagpapakita ng toast. Magpasa ng title, o ng mga opsyon na may description, tone, duration, action o id.',
              success: 'Nagpapakita ng success toast.',
              warning: 'Nagpapakita ng warning toast.',
              danger:
                'Nagpapakita ng danger toast. Nananatili ito nang 8 segundo at ina-announce nang assertive.',
              promise:
                'Nagpapakita ng loading toast hanggang ma-settle ang promise, saka ang success o danger message nito.',
              dismiss: 'Dini-dismiss ang isang toast, o lahat ng mga ito.',
            },
          },
          NuiToasterRegion: {
            summary:
              'Ang region kung saan lumilitaw ang mga toast. Ilagay ito nang isang beses, sa app shell.',
            members: {
              position:
                'Sulok o gilid ng viewport. Sumusunod sa direksyon ng text ang start at end.',
              expanded: 'Pinapanatiling nakabukas ang stack.',
              label: 'Accessible name ng region. Sabihin kung paano ito maaabot.',
              closeLabel: 'Accessible name ng mga close button.',
              hotkey:
                'Ang key, bilang <code>KeyboardEvent.code</code>, na naglilipat ng focus sa pinakabagong toast kasabay ng Alt.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Inililipat ang focus sa pinakabagong toast.'],
          ['Tab', 'Dumadaan sa mga toast, sa mga aksyon nila at sa mga close button.'],
          ['Escape', 'Dini-dismiss ang naka-focus na toast.'],
        ],
        notes: [
          'Ina-announce ang bawat toast paglitaw nito: nang polite, o nang assertive para sa danger. Hindi kailanman kumukuha ng focus ang mga toast.',
          'Humihinto ang mga timer habang naka-hover o naka-focus ang stack at habang nakatago ang page, at hindi kailanman nagta-time out ang mga toast na naghihintay sa isang promise.',
          'Anumang dapat aksyunan ng user ay dapat nasa labas din ng toast.',
          'Sa reduced motion, hindi nag-a-animate at hindi puwedeng i-swipe ang mga toast, at nakatago ang timer line.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox at autocomplete para sa Angular',
        summary: 'Isang text field na nagmumungkahi ng mga opsyon habang nagta-type ka.',
        description:
          'Accessible na Angular combobox: fuzzy search na may highlight, maraming value bilang chip, bagong value mula sa itinipang text, at resulta mula sa server.',
        apiDescription:
          'API reference ng Needless UI combobox: nui-combobox na may value, values, multiple, create, filtering, loading at clearable, at mga custom na row.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI combobox: editable na combobox na may list autocomplete, aria-activedescendant, mga chip at IME input.',
        overview: [
          'Text field na may listahan ng mga mungkahi ang combobox. Fuzzy ang search at hindi nito pinapansin ang mga accent: nauuna ang mga pinakaangkop na tugma at minamarkahan ang mga tumugmang titik. Tumatanggap ito ng parehong mga <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> object gaya ng select.',
          'Kapag may <code>multiple</code>, nagiging mga chip sa unahan ng text ang mga napiling opsyon, at ginagawang bagong value ng <code>create</code> ang itinipang text. Para sa mga resulta mula sa server, i-off ang <code>filtering</code>, mag-search sa <code>(queryChange)</code> at i-set ang <code>loading</code> habang naghihintay.',
        ],
        examples: {
          country: {
            title: 'Paghahanap',
            text: 'Hindi kailangang magkakatabi ang mga tumugmang titik, at kasama rin sa pagtutugma ang <code>keywords</code>. Nagdadagdag ang <code>clearable</code> ng clear button at pinapayagan nitong i-clear ng Escape ang value.',
          },
          tags: {
            title: 'Mga chip at bagong value',
            text: 'Nagpapakita ng mga chip ang <code>multiple</code> at bina-bind nito ang <code>[(values)]</code>. Kapag hindi pa opsyon ang text, nag-aalok ang <code>create</code> na idagdag ito.',
          },
          people: {
            title: 'Mga resulta mula sa server',
            text: 'Ipinapakita ng listahan ang ipinadala ng server, nang walang filter, na may loading row habang naghihintay. Nananatili ang mga napiling label kapag may dumating na bagong resulta.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Isang text field na nagmumungkahi ng mga opsyon habang nagta-type ka.',
            members: {
              options:
                'Ang mga opsyon, bilang mga <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> object.',
              value: 'Ang napiling value, o <code>null</code>. Gumagana rin sa mga form.',
              values: 'Ang mga napiling value, kapag may <code>multiple</code>.',
              multiple: 'Pinapayagang pumili ng ilang opsyon, na ipinapakita bilang mga chip.',
              create:
                'Gumagawa ng value mula sa itinipang text. Nag-aalok ang listahan na idagdag ang text na hindi pa opsyon.',
              filtering:
                'Fini-filter ang mga opsyon habang nagta-type ka. I-off ito kapag server ang nagfi-filter.',
              loading: 'Nagpapakita ng loading row habang hinihintay ang mga resulta.',
              clearable:
                'Nagdadagdag ng button na nagki-clear ng value, at pinapayagang i-clear ito ng Escape.',
              placeholder: 'Text na ipinapakita habang walang laman ang field.',
              label:
                'Accessible name, kapag walang <code>&lt;label&gt;</code> na nagpapangalan sa field.',
              inputId: 'Id ng text field, para sa <code>&lt;label for&gt;</code>.',
              disabled: 'Dini-disable ang field.',
              compareWith:
                'Sinasabi kung iisang opsyon ang dalawang value, para sa mga value na object.',
              displayWith:
                'Text para sa value na wala sa mga opsyon, gaya ng value na na-set bago mag-load ang mga ito.',
              virtual:
                'Nire-render lang ang mga row na nakikita: palagi, hindi kailanman, o <code>auto</code> kapag lampas 200 row.',
              queryChange: 'Inilalabas ang text habang itinitipa ito, para sa search sa server.',
              openChange: 'Nagfa-fire kapag bumukas o nagsara ang listahan.',
              show: 'Binubuksan ang listahan.',
              hide: 'Isinasara ang listahan.',
              clear: 'Kini-clear ang value at ang text.',
              focus: 'Inililipat ang focus sa text field.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ilagay ito sa isang <code>ng-template</code> sa loob ng component para ikaw mismo ang gumuhit ng bawat row. Nasa context ang opsyon at ang row nito.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Iginuguhit ang label ng opsyon na may markang mga tumugmang titik, pati ang description at path nito, para sa sarili mong mga row.',
            members: { nuiOptionText: 'Ang row, mula sa template context.' },
          },
        },
        keyboard: [
          ['Down at up arrow', 'Binubuksan ang listahan, saka lumilipat sa mga opsyon.'],
          ['Page Down at Page Up', 'Lumilipat nang sampung opsyon.'],
          ['Enter', 'Pinipili ang active na opsyon.'],
          ['Alt + down o up arrow', 'Binubuksan o isinasara ang listahan.'],
          [
            'Escape',
            'Isinasara ang listahan; pagkatapos, kini-clear ang text, o ang value kapag clearable.',
          ],
          ['Backspace', 'Sa field na walang laman, inaalis ang huling chip.'],
          [
            'Left arrow',
            'Mula sa simula ng text (right arrow sa right-to-left na text), lumilipat sa mga chip. Doon, nag-aalis ng chip ang Backspace o Delete.',
          ],
        ],
        notes: [
          'Isang <code>combobox</code> ang text field na may <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> at <code>aria-controls</code>. Nananatili rito ang focus, at itinuturo ng <code>aria-activedescendant</code> ang active na opsyon.',
          'Isang list na may pangalan ang mga chip, at ipinapangalan ang bawat remove button sa chip nito, gaya ng “Remove Italy”.',
          'Mga status message ang “No matches” at ang loading row, kaya ina-announce ang mga ito ng mga screen reader.',
          'Ipinapaubaya sa input method ang mga key na kumukumpirma ng composition nito, gaya sa Chinese o Japanese.',
        ],
      },
      command: {
        name: 'Command palette',
        title: 'Command palette component para sa Angular',
        summary: 'Bawat command sa app mo, isang pindot lang ang layo.',
        description:
          'Accessible na Angular command palette: ⌘K mula kahit saan, fuzzy search hanggang sa mga nested na page, mga grupo, at shortcut ayon sa bawat platform.',
        apiDescription:
          'API reference ng Needless UI command palette: nui-command-palette na may commands, hotkey, bindShortcuts at loop, at ang hugis ng NuiCommand.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI command palette: modal na dialog na may search combobox, aria-activedescendant at navigation sa mga page.',
        overview: [
          'Search field para sa mga command ng app mo ang command palette, sa loob ng modal na dialog. Binubuksan ito ng ⌘K mula kahit saan (Ctrl+K sa Windows at Linux). Pumili ng command at magsasara ang palette, saka nito patatakbuhin ang command.',
          'Puwedeng may grupo, description, keywords at shortcut ang mga command, na ipinapakita gamit ang mga simbolo ng bawat platform. Nagbubukas ng page ng iba pang command ang isang command na may <code>children</code>, at naaabot ng search mula sa itaas ang laman ng mga page.',
        ],
        examples: {
          palette: {
            title: 'Mga command at page',
            text: 'Mga grupo, shortcut, isang naka-disable na command at dalawang page. Sinasabi ng <code>(run)</code> kung ano ang tumakbo; gumagana rin ang sariling <code>run</code> ng isang command.',
          },
          people: {
            title: 'Mga custom na row',
            text: 'Iginuguhit ng isang <code>nuiOptionTemplate</code> ang bawat row, at pinapanatili ng <code>nuiOptionText</code> ang mga naka-markang tugma. Iniiwan ng <code>[hotkey]="null"</code> ang ⌘K sa palette sa itaas.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Isang modal na dialog na may search field para sa mga command mo.',
            members: {
              commands: 'Ang mga command, bilang mga <code>NuiCommand</code> object.',
              open: 'Kung bukas ang palette.',
              hotkey:
                'Ang shortcut na nagbubukas at nagsasara nito mula kahit saan, o <code>null</code> kung wala. Ang <code>mod</code> ay ⌘ sa mga Apple device at Ctrl sa iba.',
              bindShortcuts:
                'Pinapatakbo rin ang mga command gamit ang sarili nilang shortcut, kahit saan sa page.',
              loop: 'Mula sa huling command, pumupunta sa una ang down; mula sa una, pumupunta sa huli ang up.',
              filtering:
                'Nagfi-filter habang nagta-type ka. I-off ito kapag server ang nagfi-filter ng mga command.',
              loading: 'Nagpapakita ng loading row habang hinihintay ang mga resulta.',
              hints: 'Ipinapakita sa ibaba ang mga key na gagamitin.',
              virtual:
                'Nire-render lang ang mga row na nakikita: palagi, hindi kailanman, o <code>auto</code> kapag lampas 200 row.',
              label: 'Accessible name ng dialog at ng search field nito.',
              placeholder: 'Text na ipinapakita sa search field na walang laman.',
              run: 'Inilalabas ang bawat command na tumatakbo.',
              queryChange: 'Inilalabas ang text habang itinitipa ito, para sa search sa server.',
              show: 'Binubuksan ang palette.',
              hide: 'Isinasara ang palette.',
              toggle: 'Binubuksan ang palette, o isinasara ito.',
              back: 'Bumabalik sa naunang page.',
            },
          },
          NuiCommand: {
            summary: 'Isang command, o isang page ng mga command.',
            members: {
              label: 'Ang text na ipinapakita at hinahanap.',
              description: 'Pangalawang text sa ilalim ng label.',
              group:
                'Nakalista sa ilalim ng heading ng grupo ang mga command na may parehong grupo.',
              keywords: 'Iba pang salitang tinutugma ng search, gaya ng mga kasingkahulugan.',
              shortcut: 'Mga key na ipinapakita kasama nito, gaya ng <code>mod+shift+p</code>.',
              disabled: 'Ipinapakita, pero hindi ito mapapatakbo.',
              children:
                'Mga command na isang level pababa: kapag pinili ang command na ito, binubuksan ang mga iyon bilang page.',
              run: 'Tumatakbo kapag pinili ito, pagkasara ng palette.',
              id: 'Para sa sarili mong gamit, gaya ng pagkilala sa mga command sa <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K o Ctrl+K', 'Binubuksan o isinasara ang palette.'],
          ['Down at up arrow', 'Lumilipat sa mga command, paikot sa magkabilang dulo.'],
          ['Page Down at Page Up', 'Lumilipat nang sampung command.'],
          ['Enter', 'Pinapatakbo ang active na command, o binubuksan ang page nito.'],
          ['Escape', 'Bumabalik nang isang page; sa pinakaitaas, isinasara ang palette.'],
          ['Backspace', 'Sa field na walang laman sa isang page, bumabalik.'],
        ],
        notes: [
          'Isa itong native na modal <code>&lt;dialog&gt;</code>: inert ang page sa likod, nananatili sa loob ang focus, at pagsara nito, bumabalik ang focus kung saan ito dati.',
          'Isang <code>combobox</code> ang search field na tumuturo sa active na command gamit ang <code>aria-activedescendant</code>. Sa isang page, kinukuha nito ang pangalan ng page.',
          'Text sa bawat opsyon ang mga shortcut key, kaya binabasa ang mga ito ng mga screen reader. Nakatago sa assistive technology ang mga key hint sa ibaba.',
          'Hindi tumatakbo ang mga shortcut na walang Ctrl, Alt o ⌘ habang nagta-type ka sa isang field.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Mga popover at hovercard component para sa Angular',
        summary: 'Mga lumulutang na panel sa tabi ng button, at mga rich tooltip sa hover.',
        description:
          'Accessible na Angular popover at hovercard sa native na popover API: placement na bumabaligtad at sumusunod, mga arrow, light dismiss at mga hover delay.',
        apiDescription:
          'API reference ng Needless UI popover: nuiPopover at nuiHovercard na may side, align, offset at arrow, at ang mga trigger directive nila.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI popover at hovercard: dialog at tooltip role, pagbalik ng focus, Escape at WCAG 1.4.13.',
        overview: [
          'Maliit na panel ang popover na bumubukas sa tabi ng isang button, para sa interactive na content: mga filter, maikling form, color picker. Isa itong native na <code>popover="auto"</code>, kaya isinasara ito ng browser sa Escape o sa click sa labas, ibinabalik ang focus, at inilalagay ito kasunod mismo ng trigger nito sa tab order.',
          'Rich tooltip ang hovercard. Bumubukas ito pagkatapos ng maikling hover, o agad sa keyboard focus, at inilalarawan nito ang trigger nito. Nananatili itong bukas habang inililipat ang pointer papunta rito, kaya nababasa at napipili ang text nito.',
          'Pareho silang lumilipat sa kabilang gilid kapag walang puwang, nananatili sa screen, at sumusunod sa trigger nila habang nag-i-scroll ang page.',
        ],
        examples: {
          filters: {
            title: 'Mga filter',
            text: 'Isang popover na may form sa loob. Itinuturo ito ng <code>arrow</code> sa trigger nito, at isinasara ito ng <code>hide()</code> mula sa code.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Mag-hover sa isang pangalan, o abutin ito gamit ang Tab. Inilalarawan ng card ang link, kaya binabasa ito ng mga screen reader pagkatapos ng pangalan.',
          },
          sides: {
            title: 'Mga gilid at paglitaw',
            text: 'Itinatakda ng <code>side</code> at <code>align</code> kung saan ito bubukas; sumusunod ang <code>start</code> at <code>end</code> sa direksyon ng pagsulat. Itinatakda ng <code>enter</code> at <code>motion</code> kung paano ito lilitaw.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Isang native na popover na inilalagay sa tabi ng element na nagbukas dito.',
            members: {
              side: 'Ang gilid ng trigger kung saan ito bumubukas. Lumilipat ito sa kabila kapag walang puwang.',
              align: 'Kung paano ito pumapantay sa trigger sa gilid na iyon.',
              offset: 'Agwat sa pagitan ng trigger at ng panel, sa pixel.',
              arrow: 'Nagpapakita ng arrow na nakaturo sa trigger.',
              openChange: 'Nagfa-fire kapag bumukas o nagsara ito.',
              show: 'Binubuksan ito sa tabi ng kahit anong element.',
              hide: 'Isinasara ito.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Isang button na nagbubukas at nagsasara ng popover, gamit ang native na <code>popovertarget</code>.',
            members: { nuiPopoverTrigger: 'Ang popover na bubuksan.' },
          },
          NuiHovercard: {
            summary: 'Isang rich tooltip na naglalarawan sa trigger nito.',
            members: {
              side: 'Ang gilid ng trigger kung saan ito bumubukas. Lumilipat ito sa kabila kapag walang puwang.',
              align: 'Kung paano ito pumapantay sa trigger sa gilid na iyon.',
              offset: 'Agwat sa pagitan ng trigger at ng card, sa pixel.',
              arrow: 'Nagpapakita ng arrow na nakaturo sa trigger.',
              openDelay:
                'Ilang millisecond ng hover bago ito bumukas. Agad itong binubuksan ng keyboard focus.',
              closeDelay: 'Ilang millisecond bago ito magsara, pagkaalis ng pointer.',
              openChange: 'Nagfa-fire kapag bumukas o nagsara ito.',
              show: 'Binubuksan ito sa tabi ng kahit anong element.',
              hide: 'Isinasara ito.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Nagpapakita ng hovercard sa hover at sa keyboard focus, at ginagawa itong description ng element na ito.',
            members: { nuiHovercardTrigger: 'Ang hovercard na ipapakita.' },
          },
        },
        keyboard: [
          ['Enter o Space sa trigger', 'Binubuksan o isinasara ang popover.'],
          ['Tab', 'Pumapasok sa bukas na popover, na kasunod mismo ng trigger nito.'],
          [
            'Escape',
            'Isinasara ang popover at ibinabalik ang focus sa trigger nito, o itinatago ang hovercard.',
          ],
        ],
        notes: [
          'Non-modal na <code>dialog</code> ang popover: pangalanan ito gamit ang <code>aria-label</code> o <code>aria-labelledby</code>. Nakakakuha ang trigger nito ng <code>aria-haspopup</code> at ng <code>aria-expanded</code> ng browser.',
          'Isang <code>tooltip</code> ang hovercard at ito ang <code>aria-describedby</code> ng trigger nito, kaya binabasa ang text nito kasama ng trigger. Huwag maglagay ng mga control dito; gumamit ng popover para sa mga iyon.',
          'Sumusunod ang hovercard sa WCAG 1.4.13: itinatago ito ng Escape nang hindi inililipat ang focus, puwedeng ilipat ang pointer papunta rito, at nananatili ito habang naka-hover o naka-focus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Select component para sa Angular',
        summary: 'Pumili ng isa o marami, mula sa maikli o napakahabang listahan.',
        description:
          'Accessible na Angular select: isa o marami, mga grupo, tree, pag-type para tumalon, select all, at virtual scrolling para sa listahang kahit gaano kahaba.',
        apiDescription:
          'API reference ng Needless UI select: nui-select na may value, values, multiple, selectAll at virtual, ang hugis ng NuiOption at mga custom na row.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI select: select-only na combobox na may listbox o tree, aria-activedescendant, typeahead at mga tree key.',
        overview: [
          'Isang button ang select na nagbubukas ng listahan ng mga opsyon. Bigyan ito ng <code>options</code>, isang array ng <code>NuiOption</code>, at i-bind ang <code>[(value)]</code>, o ang <code>[(values)]</code> kapag may <code>multiple</code>. Gumagana rin ito sa Signal Forms, reactive forms at <code>ngModel</code>.',
          'Puwedeng may <code>group</code>, <code>description</code> at <code>keywords</code> ang mga opsyon, at ginagawang tree ng <code>children</code> ang listahan. Kapag lampas 200 row, ang mga nakikitang row lang ang nire-render, kaya kasimbilis ng sampu ang pagbukas ng 100,000 opsyon.',
          'Para mag-type at mag-filter, gamitin ang <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Mga grupo',
            text: 'Nakalista sa ilalim ng heading ng grupo nila ang mga opsyon na may <code>group</code>. Kapag nag-type ng titik, tatalon ito sa susunod na opsyong nagsisimula sa titik na iyon.',
          },
          toppings: {
            title: 'Marami nang sabay',
            text: 'Pinapanatiling bukas ng <code>multiple</code> ang listahan at bina-bind nito ang <code>[(values)]</code>. Nagdadagdag ang <code>selectAll</code> ng button na pumipili o nagki-clear ng lahat ng opsyon. Hindi mapipili ang mga naka-disable na opsyon.',
          },
          folders: {
            title: 'Tree',
            text: 'Bumubuo ng tree ang mga opsyong may <code>children</code>. Bumubukas ang listahan nang naka-expand ang mga folder ng napiling opsyon.',
          },
          zones: {
            title: 'Mahahabang listahan',
            text: 'Bawat time zone, ayon sa rehiyon. Kapag lampas 200 row, ang mga nakikitang row lang ang nire-render, at nananatiling naka-render ang active na opsyon para sa mga screen reader.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Isang button na nagbubukas ng listahan ng mga opsyon.',
            members: {
              options: 'Ang mga opsyon, bilang mga <code>NuiOption</code> object.',
              value: 'Ang napiling value, o <code>null</code>. Gumagana rin sa mga form.',
              values: 'Ang mga napiling value, kapag may <code>multiple</code>.',
              multiple:
                'Pinapayagang pumili ng ilang opsyon. Nananatiling bukas ang listahan habang pumipili ka.',
              selectAll:
                'Kapag may <code>multiple</code>, nagdadagdag ng button na pumipili o nagki-clear ng lahat ng opsyon.',
              placeholder: 'Text na ipinapakita habang wala pang napipili.',
              label:
                'Accessible name, kapag walang <code>&lt;label&gt;</code> na nagpapangalan sa button.',
              triggerId: 'Id ng button, para sa <code>&lt;label for&gt;</code>.',
              disabled: 'Dini-disable ang select.',
              compareWith:
                'Sinasabi kung iisang opsyon ang dalawang value, para sa mga value na object.',
              virtual:
                'Nire-render lang ang mga row na nakikita: palagi, hindi kailanman, o <code>auto</code> kapag lampas 200 row.',
              openChange: 'Nagfa-fire kapag bumukas o nagsara ang listahan.',
              show: 'Binubuksan ang listahan.',
              hide: 'Isinasara ang listahan.',
              focus: 'Inililipat ang focus sa button.',
            },
          },
          NuiOption: {
            summary: 'Isang opsyon. Tinatanggap ito ng select, ng combobox at ng command palette.',
            members: {
              value: 'Ang itinatakda kapag pinili ito. Kahit anong type.',
              label: 'Ang text na ipinapakita at hinahanap.',
              description: 'Pangalawang text sa ilalim ng label.',
              group:
                'Nakalista nang sunod-sunod sa ilalim ng heading ng grupo ang mga opsyon na may parehong grupo.',
              keywords:
                'Iba pang salitang tinutugma ng search, gaya ng mga kasingkahulugan o code.',
              disabled: 'Ipinapakita, pero hindi ito mapipili.',
              children: 'Mga opsyon na isang level pababa, na ginagawang tree ang listahan.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ilagay ito sa isang <code>ng-template</code> sa loob ng component para ikaw mismo ang gumuhit ng bawat row. Nasa context ang opsyon at ang row nito.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Iginuguhit ang label ng opsyon na may markang mga tumugmang titik, pati ang description at path nito, para sa sarili mong mga row.',
            members: { nuiOptionText: 'Ang row, mula sa template context.' },
          },
        },
        keyboard: [
          ['Down at up arrow', 'Binubuksan ang listahan, saka lumilipat sa mga opsyon.'],
          ['Home at End', 'Pumupunta sa una o huling opsyon.'],
          ['Page Down at Page Up', 'Lumilipat nang sampung opsyon.'],
          ['Enter o Space', 'Binubuksan ang listahan, o pinipili ang active na opsyon.'],
          ['Mga titik', 'Tumatalon sa susunod na opsyong nagsisimula sa mga ito.'],
          [
            'Right at left arrow',
            'Sa tree, ine-expand ang opsyon o pumupunta sa unang child nito; kino-collapse ito o pumupunta sa parent nito. Baligtad sa right-to-left na text.',
          ],
          ['Alt + up arrow', 'Pinipili ang active na opsyon at isinasara ang listahan.'],
          [
            'Tab',
            'Kapag iisa ang pinipili, pinipili ang active na opsyon at lumilipat sa susunod.',
          ],
          ['Escape', 'Isinasara ang listahan nang walang pinipili.'],
        ],
        notes: [
          'Select-only na <code>combobox</code> ang button na may <code>aria-expanded</code> at <code>aria-controls</code>. Nananatili rito ang focus, at itinuturo ng <code>aria-activedescendant</code> ang active na opsyon.',
          'Isang <code>listbox</code> ang listahan, o isang <code>tree</code> na may <code>aria-level</code> at <code>aria-expanded</code>. Nananatiling tama ang <code>aria-setsize</code> at <code>aria-posinset</code> kahit ilang row lang ang naka-render.',
          'Solid fill ang active na opsyon at, sa forced colors, may outline ito.',
          'Pangalanan ito gamit ang isang <code>&lt;label for&gt;</code> na nakaturo sa <code>triggerId</code>, o gamit ang <code>label</code>.',
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
