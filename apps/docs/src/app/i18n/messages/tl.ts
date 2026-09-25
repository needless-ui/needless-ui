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
      grid: {
        name: 'Data grid',
        title: 'Data grid component para sa Angular',
        summary: 'I-sort, i-filter, piliin, i-edit at i-scroll ang kahit ilang row.',
        description:
          'Accessible na Angular data grid sa native na table: multi-column sorting, mga filter, paging o virtual scrolling, selection, pag-edit at nalilipat na column.',
        apiDescription:
          'API reference ng Needless UI data grid: mga input at model ng nui-grid, ang NuiGridColumn definition, at mga template para sa custom na cell.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI data grid: native na table na may grid role, iisang tab stop, mga arrow key at mga announcement.',
        overview: [
          'Native na table ang data grid na may sorting, filtering, paging at pag-edit. Ilarawan ang <code>columns</code>, ipasa ang <code>rows</code>, at naka-format ang bawat cell ayon sa type nito para sa locale: mga numero, currency, petsa, oo at hindi, at mga label para sa mga value ng <code>enum</code>.',
          'Nasa mga model ang state nito na puwede mong i-bind, i-save at ipadala sa server: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, at <code>columnState</code> para sa mga lapad, pagkakasunod-sunod, pin at nakatagong column na pinili ng mga user. Kapag walang page, ang mga row na nakikita lang ang nire-render, kaya kasingkinis ng sampu ang pag-scroll sa 100,000 row.',
          'Naaabot ng keyboard ang bawat cell, at sa panel ng bawat column, puwede itong i-sort, i-filter, i-pin, ilipat, i-fit at itago.',
          'Puwede ring mag-nest ang mga row. Ginu-group ng <code>groupBy</code> ang mga ito ayon sa mga column, kasama ang <code>aggregate</code> ng bawat column sa mga row ng grupo at sa isang <code>totals</code> row; ipinapakita ng <code>children</code> ang tree data; at bumubukas sa ilalim ng isang row ang isang <code>nuiGridDetail</code> template. Kapag naka-group o nested, <code>treegrid</code> ang table.',
        ],
        examples: {
          orders: {
            title: 'Paghahanap, pag-sort at mga page',
            text: 'Mag-type para mag-search sa bawat column. Mag-click sa header para mag-sort, at mag-Shift-click para magdagdag ng pangalawang column. Iginuguhit ng <code>nuiGridCell</code> ang status, at ibinibigay ng <code>exportCsv()</code> ang nakikita.',
          },
          selection: {
            title: 'Pagpili',
            text: 'Nagdadagdag ang <code>selection="multiple"</code> ng mga checkbox at bina-bind nito ang mga key ng mga napiling row. Pumipili ng range ang Shift-click; pinipili ng box sa header ang bawat row na tumutugma.',
          },
          editing: {
            title: 'Pag-edit',
            text: 'Mag-double click sa isang cell, pindutin ang Enter o basta mag-type. Pinapanatiling bukas ng <code>validate</code> ang editor na may mensahe; ina-update ng na-commit na edit ang <code>rows</code> at inilalabas nito ang <code>cellEdit</code>.',
          },
          big: {
            title: '100,000 row',
            text: 'Kapag walang page, ang mga row na nakikita lang ang nire-render. Nananatili sa mga gilid ang mga naka-pin na column, at iniingatan ng <code>columnState</code> ang layout na ginawa ng mga user.',
          },
          server: {
            title: 'Data mula sa server',
            text: 'Sa <code>server</code> mode, ipinapakita ng grid ang mga row kung paano dumating ang mga ito at iniuulat ang bawat pagbabago sa <code>queryChange</code>. I-set ang <code>loading</code> habang nagfe-fetch ka.',
          },
          groups: {
            title: 'Mga grupo at total',
            text: 'Mag-group ayon sa isa o dalawang column. Binibilang ng mga row ng grupo ang mga order nila at kinukuha ang sum at average ng mga total nila, at idinadagdag ng <code>totals</code> ang pareho para sa bawat row. Isinasara ng left arrow ang isang grupo.',
          },
          tree: {
            title: 'Tree data',
            text: 'Ibinibigay ng <code>children</code> sa bawat folder ang mga file nito. Bumubukas ang mga row sa right arrow o sa toggle nila, at iniingatan ng <code>[(expanded)]</code> kung alin ang bukas. Pinapanatiling bukas ng search ang mga folder sa itaas ng isang tugma.',
          },
          details: {
            title: 'Mga detalye ng row',
            text: 'Ipinapakita ng isang <code>nuiGridDetail</code> template ang mga line item ng isang order sa ilalim nito, mula sa isang column ng mga toggle, at iniingatan ng <code>[(details)]</code> kung alin ang bukas.',
          },
          live: {
            title: 'Live data, export at print',
            text: 'Nagbabago ang mga presyo bawat dalawang segundo, at ipinapakita ng <code>flash</code> kung aling mga cell ang nagbago. Nagda-download ang <code>exportXlsx()</code> ng totoong spreadsheet, pini-print ng <code>print()</code> ang bawat row, at nagpapakita ang <code>layout="auto"</code> ng mga card sa makikitid na screen.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Isang data grid sa native na table.',
            members: {
              rows: 'Ang data. Pinapalitan ng mga edit ang mga row, kaya i-bind ito gamit ang <code>[(rows)]</code>.',
              columns: 'Ang mga column, bilang mga <code>NuiGridColumn</code> object.',
              rowId: 'Key ng isang row, para sa selection at tracking.',
              label: 'Accessible name ng grid.',
              selection: 'Kung puwedeng pumili ng mga row, at kung ilan.',
              selected: 'Mga key ng mga napiling row.',
              sort: 'Ang sort, bilang mga <code>{ column, direction }</code> object; nauunang mag-sort ang una.',
              filters: 'Isang filter bawat column id: isang operator at isang value.',
              search: 'Mga salitang dapat lumabas lahat sa isang row.',
              pageSize: 'Mga row bawat page, o 0 para sa iisang listahang nag-i-scroll.',
              page: 'Ang ipinapakitang page, mula 0.',
              pageSizes: 'Mga pagpipilian sa pager.',
              virtual:
                'Nire-render lang ang mga row na nakikita: palagi, hindi kailanman, o <code>auto</code> kapag lampas 100 row nang walang page.',
              height: 'Isang CSS length na naglilimita sa grid; sa loob ito nag-i-scroll.',
              columnState:
                'Lapad, pagkakasunod, pin at visibility ng bawat column, para i-save at i-restore.',
              mode: 'Ipinapakita ng <code>server</code> ang mga row kung paano dumating ang mga ito, at ipinapaubaya sa iyo ang sorting, filtering at paging.',
              total: 'Bilang ng mga row sa server.',
              loading: 'Nagpapakita ng progress bar, at mga placeholder row habang wala pang row.',
              locale: 'Fino-format ang mga numero at petsa, at binabasa ang mga itinipang numero.',
              labels: 'Bawat text na ipinapakita o ina-announce ng grid, para maisalin.',
              rowActivate: 'Inilalabas ang row na binuksan gamit ang Enter o double click.',
              cellEdit: 'Inilalabas ang bawat na-commit na edit.',
              queryChange:
                'Inilalabas ang sort, mga filter, search at page tuwing nagbabago ang mga ito.',
              exportCsv:
                'Ang mga na-filter at na-sort na row ng mga nakikitang column, bilang CSV.',
              focusCell: 'Inililipat ang focus sa isang cell; header ang row <code>-1</code>.',
              clearFilters: 'Kini-clear ang bawat filter at ang search.',
              'groupBy, collapsed':
                'Ang mga column kung saan igu-group ang mga row, ang pinakalabas muna, at ang mga key ng mga nakasarang grupo.',
              children: 'Ang mga child ng isang row: nagpapakita ng tree data ang grid.',
              'expanded, details':
                'Mga key ng mga row na bukas sa tree data, at ng mga row na bukas ang mga detalye.',
              'totals, flash':
                'Isang row ng mga aggregate sa bawat na-filter na row; mga cell na kumikislap kapag nagbago ang text nila, sa mga row na may pangmatagalang <code>rowId</code>.',
              layout:
                'Ipinapakita ng <code>list</code> ang mga row bilang mga card, at ginagawa rin ito ng <code>auto</code> sa makikitid na screen.',
              'exportXlsx, print':
                'Ang mga na-filter at na-sort na row bilang spreadsheet; pini-print ang bawat row.',
            },
          },
          NuiGridColumn: {
            summary: 'Isang column. <code>id</code> at <code>header</code> lang ang required.',
            members: {
              id: 'Natatangi; ang key sa sort, mga filter at column state.',
              header: 'Ang text ng header.',
              value: 'Isang key ng row, o function ng row. <code>row[id]</code> ang default.',
              type: 'Pinipili ang alignment, sort, filter at editor.',
              format:
                'Mga <code>Intl</code> option para sa mga numero at petsa, o function na gumagawa ng text.',
              options:
                'Mga pagpipilian ng isang <code>enum</code> column, bilang mga <code>NuiOption</code> object.',
              'width, minWidth, maxWidth': 'Sa pixel.',
              flex: 'Hinahati ang natitirang espasyo sa iba pang <code>flex</code> column.',
              align: 'Nakadepende sa type ang default: nasa dulo ang mga numero at petsa.',
              'pinned, hidden': 'Ang paunang pin at visibility ng column.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Puwedeng i-off ang bawat isa gamit ang <code>false</code>.',
              compare: 'Isang custom na sort.',
              'editable, validate':
                'Kung puwedeng i-edit ang mga cell, at mensahe kapag hindi valid ang value.',
              set: 'Ginagawa ang na-edit na row. Kopyang may bagong value ang default.',
              aggregate:
                'Ang ipinapakita ng mga row ng grupo at ng totals row: sum, average, minimum, maximum, count, o isang function.',
            },
          },
          NuiGridCell: {
            summary:
              'Iginuguhit ang mga cell ng isang column. Nasa context ang row, ang value nito at ang text nito.',
            members: { nuiGridCell: 'Ang id ng column.' },
          },
          NuiGridHeader: {
            summary: 'Iginuguhit ang header ng isang column.',
            members: { nuiGridHeader: 'Ang id ng column.' },
          },
          NuiGridEmpty: {
            summary:
              'Ang ipinapakita kapag walang row. Sinasabi ng context kung mga filter ang nagtago sa mga ito.',
            members: {},
          },
          NuiGridDetail: {
            summary:
              'Ang mga detalye ng isang row, na ipinapakita sa ilalim nito kapag binuksan. Nasa context ang row.',
            members: {},
          },
        },
        keyboard: [
          [
            'Mga arrow key',
            'Lumilipat nang isang cell. Baligtad ang left at right sa right-to-left na text.',
          ],
          ['Home at End', 'Pumupunta sa una o huling cell sa row; kapag may Ctrl, sa grid.'],
          ['Page Down at Page Up', 'Lumilipat nang isang screen ng mga row.'],
          [
            'Enter o Space sa header',
            'Nagso-sort ayon sa column; kapag may Shift, idinadagdag ito sa sort.',
          ],
          ['Alt + down arrow sa header', 'Binubuksan ang panel ng column.'],
          [
            'Alt + left o right arrow sa header',
            'Pinapakitid o pinapalapad ang column; kapag may Shift, inililipat ito.',
          ],
          ['Enter sa cell', 'Ine-edit ito, o binubuksan ang row kapag hindi ito ma-edit.'],
          ['F2, o pag-type', 'Ine-edit ang cell.'],
          [
            'Enter, Escape at Tab habang nag-e-edit',
            'Kino-commit, kinakansela, o kino-commit at lumilipat sa susunod.',
          ],
          ['Space', 'Pinipili ang row; kapag may Shift, ang mga row mula sa huling napili.'],
          ['Ctrl + A', 'Pinipili ang bawat row.'],
          [
            'Right at left arrow sa grupo',
            'Binubuksan o isinasara ito; pati sa unang cell ng row na may mga child.',
          ],
          ['Enter sa grupo', 'Binubuksan o isinasara ito; pinipili ng Space ang mga row nito.'],
          ['Enter sa details toggle', 'Ipinapakita o itinatago ang mga detalye ng row.'],
        ],
        notes: [
          'Isang native na <code>&lt;table&gt;</code> na may <code>role="grid"</code>, na pinangalanan ng <code>label</code>. May <code>aria-sort</code> ang mga header, at may <code>aria-selected</code> ang mga row na puwedeng piliin.',
          'Iisang tab stop ang grid. Lumilipat ang focus mula cell hanggang cell gamit ang roving <code>tabindex</code>, kaya binabasa ng mga screen reader ang bawat cell kasama ang mga header ng row at column nito.',
          'Nananatiling tama ang <code>aria-rowcount</code>, <code>aria-rowindex</code> at <code>aria-colindex</code> habang naka-page o naka-virtualize ang mga row.',
          'Ina-announce sa isang polite na status region ang sorting, filtering, paging at mga error sa pag-edit.',
          'Ginagawang <code>treegrid</code> ng mga naka-group o nested na row ang table: may <code>aria-level</code>, <code>aria-setsize</code> at <code>aria-posinset</code> ang mga row, at <code>aria-expanded</code> kapag bumubukas ang mga ito. Binabasa ang mga aggregate kasama ang uri nila, gaya ng “Sum: 475”.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'AI chat component para sa Angular',
        summary: 'Makipag-usap sa model: mga naka-stream na sagot, tool, version at file.',
        description:
          'Accessible na Angular chat para sa mga AI assistant: naka-stream na Markdown na sagot, reasoning, tool call, source, retry bilang version, at file.',
        apiDescription:
          'API reference ng Needless UI chat: mga input ng nui-chat, ang NuiChatSession na nag-i-stream ng sagot, mga mensahe, tool template at stream reader.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI chat: feed ng mga mensaheng may pangalan, Page Up at Page Down, at mga sagot na ina-announce kapag kumpleto na.',
        overview: [
          'Ang chat ang lahat ng nasa pagitan ng mga user mo at ng isang model. Gumawa ng <code>NuiChatSession</code> na may <code>respond</code> function, at <code>&lt;nui-chat&gt;</code> na ang bahala sa iba: ini-stream nito ang sagot bilang Markdown, sinusundan ito pababa ng page hanggang mag-scroll pataas ang user, at ginagawang stop button ang send button habang dumarating ang sagot.',
          'Nagbabalik ang <code>respond</code> ng text, promise, <code>async function*</code> o Observable, kaya babagay ang kahit anong API. Bukod sa text, puwedeng dala ng sagot ang reasoning ng model, ang mga tool call nito (na iginuguhit ng sarili mong mga template), at ang mga source na ginamit nito. Binabasa ng <code>nuiEventStream</code> ang server-sent events na ini-stream ng karamihan ng mga model API.',
          'Walang nawawala: nagiging bagong version sa tabi ng luma ang sagot na ni-retry o tanong na in-edit, at iniingatan ng usapan ang bawat branch. Naririnig ng mga screen reader ang bawat sagot kapag kumpleto na ito, hindi isa-isang salita.',
        ],
        examples: {
          assistant: {
            title: 'Isang assistant',
            text: 'Sinisimulan ng mga mungkahi ang usapan. Dumarating bilang Markdown ang mga naka-stream na sagot; ihinto, i-retry o i-rate ang mga ito, o i-edit ang tanong mo. Tumatanggap ang <code>attach</code> ng mga file na pinili, na-paste o na-drop.',
          },
          tools: {
            title: 'Reasoning, mga tool at mga source',
            text: 'Idinadagdag ng mga delta sa sagot ang reasoning ng model, mga tool call at mga source. Iginuguhit ng <code>nuiChatTool</code> ang weather tool bilang card; nakatiklop ang ibang tool kasama ang input at output nila.',
          },
          server: {
            title: 'Pag-stream mula sa server',
            text: 'Binabasa ng <code>nuiEventStream</code> ang isang OpenAI-style na event stream, at ipinapakita ng <code>NuiChatError</code> ang mensahe nito. Sine-save ng <code>all()</code> ang usapan, kasama ang lahat ng version.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Ang usapan at ang box na susulatan, magkasama.',
            members: {
              session: 'Ang usapang ipapakita.',
              assistant:
                'Ang pangalan ng assistant, sa mga heading na naririnig ng mga screen reader.',
              headingLevel:
                'Ang level ng heading ng bawat mensahe, na mga screen reader lang ang nagpapakita. Isang level na mas malalim ang mga heading sa mga sagot.',
              announce:
                'Ang naririnig ng mga screen reader kapag kumpleto na ang sagot: lahat ng ito, maikling abiso, o wala.',
              images:
                'Ipinapakita ang mga image sa mga sagot. Kung hindi, nagiging link papunta sa mga ito ang text nila.',
              value: 'Ang text na sinusulat.',
              placeholder: 'Text na ipinapakita habang walang laman ang field.',
              suggestions: 'Mga prompt na maipapadala sa isang click, hanggang sa unang mensahe.',
              sendOn:
                'Kung Enter ang nagpapadala, o Ctrl o ⌘ + Enter. Nagpapadala ang <code>auto</code> gamit ang Enter kapag may keyboard; sa mga touch screen, gumagawa ng bagong linya ang Return at ang button ang nagpapadala.',
              disabled: 'Pinipigilan ang composer na magpadala.',
              attach: 'Tumatanggap ng mga file: pinili, na-paste o na-drop.',
              accept:
                'Ang mga uri ng file na tatanggapin, gaya sa <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Ilang file ang puwedeng dalhin ng isang mensahe.',
              maxSize: 'Ang pinakamalaking file na tatanggapin, sa byte.',
              labels: 'Bawat text na ipinapakita o ina-announce ng chat, para maisalin.',
              rated:
                'Inilalabas ang sagot na ni-rate ng user, kasama ang rating, o <code>null</code> kapag binawi ito.',
              focus: 'Inililipat ang focus sa text field.',
              scrollToEnd: 'Nag-i-scroll sa pinakabagong mensahe, at sinusundan ito.',
            },
          },
          NuiChatSession: {
            summary:
              'Ang usapan, nang walang anumang DOM. Gawin ito sa isang component, gamit ang mga opsyong <code>respond</code>, <code>messages</code> at <code>id</code>.',
            members: {
              respond:
                'Sa iyo ito: isinusulat ang sagot sa <code>request.messages</code>, at humihinto kapag nag-abort ang <code>request.signal</code>.',
              messages: 'Ang usapang nasa screen.',
              all: 'Bawat mensahe ng bawat version, para i-save at ibalik bilang <code>messages</code>.',
              busy: 'Kung may sagot na paparating.',
              send: 'Nagpapadala ng mensahe at humihingi ng sagot.',
              stop: 'Inihihinto ang sagot, at itinatago ang naisulat na nito.',
              retry: 'Nagtatanong ulit. Version sa tabi ng luma ang bagong sagot.',
              edit: 'Nagpapadala ng bagong version ng isa sa mga mensahe ng user.',
              versions: 'Bawat version ng isang mensahe, pinakaluma muna.',
              show: 'Inililipat ang usapan sa version na ito.',
              rate: 'Itinatala ang rating ng user sa isang sagot.',
              'remove, load, clear':
                'Inaalis ang isang mensahe at ang mga kasunod nito, pinapalitan ang usapan, o nagsisimula ulit.',
            },
          },
          NuiChatMessage: {
            summary:
              'Isang mensahe. Mga version ng isa’t isa ang mga mensaheng may parehong <code>parent</code>.',
            members: {
              'id, parent': 'Ang key ng mensahe, at ng mensaheng sinusundan nito.',
              role: 'Kung sino ang sumulat nito.',
              text: 'Markdown mula sa assistant, plain text mula sa user.',
              status: 'Kung nasaan na ang sagot, mula paghihintay hanggang tapos.',
              reasoning: 'Ang inisip ng model bago ito sumagot.',
              tools: 'Ang mga tool na tinawag nito, kasama ang state, input at output nila.',
              sources: 'Ang mga page na ginamit nito.',
              attachments: 'Ang mga file na ipinadala kasama nito.',
              rating: 'Ang rating ng user.',
              data: 'Kahit ano pang itatago kasama nito, gaya ng pangalan ng model.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Iginuguhit ang isang tool call, gaya ng card para sa weather. Nasa context ang call at ang mensahe nito.',
            members: {
              nuiChatTool:
                'Ang pangalan ng tool. Kapag wala, iginuguhit nito ang bawat call na hindi pinangalanan ng ibang template.',
            },
          },
          NuiChatThread: {
            summary:
              'Ang usapan lang, para sa sarili mong layout. Tinatanggap nito ang mga input ng <code>nui-chat</code> na tungkol sa usapan.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Ang box na susulatan lang. Tinatanggap nito ang mga input ng <code>nui-chat</code> na tungkol sa pagsusulat.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Ang ibinibigay ng <code>nuiEventStream</code> para sa bawat event. Binabasa ng <code>nuiTextStream</code> ang plain text at ng <code>nuiJsonStream</code> ang mga JSON line; tumatanggap ang tatlo ng <code>fetch</code> response.',
            members: {
              event: 'Ang pangalan ng event.',
              data: 'Ang mga data line nito, pinagdugtong.',
              id: 'Ang huling id na ipinadala ng stream.',
            },
          },
          NuiChatError: {
            summary:
              'I-throw ito mula sa <code>respond</code> para ipakita ang mensahe nito. Pangkalahatang mensahe ang ipinapakita ng ibang error, kaya walang internal na detalyeng lumalabas.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down at Page Up', 'Lumilipat sa susunod o naunang mensahe.'],
          ['Ctrl + End at Ctrl + Home', 'Lumalabas sa usapan, pasulong o paatras.'],
          ['Enter', 'Nagpapadala. Kapag may Shift, nagsisimula ng bagong linya.'],
          ['Escape', 'Humihinto sa pag-edit ng mensahe.'],
        ],
        notes: [
          'Isang <code>feed</code> ng mga <code>article</code> ang usapan. Pinapangalanan ang bawat isa ng heading na mga screen reader lang ang nakakakita, gaya ng “You said”, at may <code>aria-posinset</code> at <code>aria-setsize</code> ito.',
          'Naka-<code>aria-busy</code> ang sagot habang sinusulat pa. Kapag kumpleto na, ina-announce ito nang buo; agad namang ina-announce ang pagkabigo.',
          'May pangalan at tooltip ang bawat icon button. Mga toggle button ang mga rating, at isang group na may pangalang gaya ng “Version 2 of 3” ang version switcher.',
          'Mga native disclosure ang reasoning at mga tool call. Kapag nag-alis ng file, bumabalik ang focus sa text field.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Markdown renderer component para sa Angular',
        summary: 'I-render ang Markdown nang ligtas, kahit habang nag-i-stream ito.',
        description:
          'Ligtas na Angular Markdown renderer para sa mga sagot ng AI: GitHub table, task list at code block bilang totoong element, smooth kahit nag-i-stream.',
        apiDescription:
          'API reference ng Needless UI Markdown renderer: mga input ng nui-markdown, ang template para sa mga code block, at ang parser sa likod nito.',
        a11yDescription:
          'Accessibility ng Needless UI Markdown renderer: totoong heading, list at table, mga scroll region na may pangalan, at copy button na nag-a-announce.',
        overview: [
          'Ginagawang totoong element ng Markdown renderer ang text na gaya ng isinusulat ng model: heading, list at task list, quote, table, code block na may copy button, at link. Pina-parse nito ang text sa isang tree at iginuguhit ito gamit ang mga template, kaya nananatiling text ang raw HTML at walang kahit anong isinisingit bilang HTML.',
          'Kapag may <code>streaming</code>, mukha nang kumpleto ang text na kalahati pa lang ang naisulat: code block na agad ang bukas na code fence, hinihintay ng nag-iisang <code>**</code> ang kapares nito, at sinusundan ng caret ang huling salita. Nananatili ang DOM ng mga block na hindi nagbago.',
          'Gumagana lang ang mga link para sa web, mail at phone address, at nananatiling link ang mga image hanggang i-on mo ang <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Isang dokumento',
            text: 'Nagsisimula ang mga heading sa <code>headingLevel</code>, kaya kasya ang mga ito sa ilalim ng sariling mga heading ng page. Nag-i-scroll sa sarili nilang region ang malalapad na table at code.',
          },
          streaming: {
            title: 'Pag-stream',
            text: 'Ang parehong text, ilang character sa bawat pagkakataon. Walang simbolong kumikislap, at ang huling block lang ang nire-render ulit.',
          },
          highlight: {
            title: 'Pag-highlight ng code',
            text: 'Iginuguhit ng <code>nuiMarkdownCode</code> ang mga code block gamit ang sarili mong template, dito may maliit na highlighter. Natatanggap nito ang code at ang language nito.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Nire-render ang Markdown bilang mga element.',
            members: {
              text: 'Ang Markdown.',
              streaming: 'Dumarating pa ang text.',
              headingLevel:
                'Ang level ng isang <code>#</code> heading. Sumusunod ang mas malalalim, hanggang 6.',
              images:
                'Ipinapakita ang mga image. Kung hindi, nagiging link papunta sa mga ito ang text nila, dahil puwedeng mang-track ang isang image.',
              labels: 'Ang mga text ng copy button at iba pa, para maisalin.',
              codeTemplate:
                'Code block template mula sa ibang lugar, gaya ng chat na naglalaman nito.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Iginuguhit ang mga code block. Nasa context ang code, ang <code>lang</code>, at ang <code>open</code> habang dumarating pa ang block.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Ang parser at ang mga helper nito, para magamit nang walang component.',
            members: {
              nuiParseMarkdown: 'Ang tree ng mga block at inline na iginuguhit ng component.',
              nuiMarkdownToText:
                'Ang plain text, isang linya bawat block, para i-announce o i-preview.',
              nuiSafeUrl: 'Kung papunta sa web, mail o phone address ang isang link.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Inaabot ang mga link, ang mga copy button, at ang malalapad na table at code para ma-scroll ang mga ito.',
          ],
        ],
        notes: [
          'Mga totoong element ang mga heading, list, quote, table na may <code>th</code> na header at <code>scope</code>, at code.',
          'Nag-i-scroll sa loob ng focusable na region ang malalapad na table at code block; ipinapangalan ang region ng table sa mga header nito.',
          'Sinasabi ng mga box ng task list kung tapos na ang bawat task. “Copy code” ang pangalan ng copy button at sinasabi nitong “Copied” sa pamamagitan ng status message.',
          'Nakatago sa mga screen reader ang streaming caret, at hindi ito gumagalaw sa reduced motion.',
        ],
      },
      calendar: {
        name: 'Calendar',
        title: 'Calendar component para sa Angular',
        summary: 'Pumili ng isang araw, range o ilang araw, pati gamit ang keyboard.',
        description:
          'Accessible na Angular calendar: pumili ng isang araw, range o ilang araw, may min at max, mga hindi available na araw, magkakatabing buwan at week number.',
        apiDescription:
          'API reference ng Needless UI calendar: mga selection mode ng nui-calendar, min, max at mga hindi available na araw, magkakatabing buwan, at mga label.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI calendar: grid ng mga araw na may pangalan, arrow ayon sa araw at linggo, Page Up at Page Down ayon sa buwan.',
        overview: [
          'Pumipili ang calendar ng isang araw, isang range ng mga araw, o ilang araw. Mga plain na ISO date ang mga value, gaya ng <code>2026-09-25</code>, na walang time zone na makakapaglipat sa mga ito, kaya diretso itong maipapadala sa server o sa isang <code>&lt;input type="date"&gt;</code>.',
          'Nagsisimula ang linggo sa unang araw ayon sa locale, at sinusunod ng mga pangalan at digit ang wika nito. Inaalis ng <code>min</code>, <code>max</code> at <code>unavailable</code> ang ilang araw sa pagpipilian, nagpapakita ang <code>months</code> ng ilang buwan nang magkakatabi, at nagzo-zoom out ang title sa mga buwan at taon para sa malalayong petsa.',
          'Naaabot ng keyboard ang bawat araw, gaya sa WAI-ARIA date picker, at pinapangalanan ang bawat isa ng buong petsa nito.',
        ],
        examples: {
          delivery: {
            title: 'Araw ng delivery',
            text: 'Hindi mapipili ang mga araw bago ngayon, pagkatapos ng <code>max</code> o inalis ng <code>unavailable</code>, pero dumadaan pa rin sa mga ito ang keyboard.',
          },
          stay: {
            title: 'Isang range',
            text: 'Kapag may <code>selection="range"</code>, sinisimulan ng unang pili ang range at sinusundan ng highlight ang pointer hanggang sa pangalawang pili. Mas marami ang sabay na ipinapakita ng <code>months="2"</code> at <code>weekNumbers</code>.',
          },
          'days-off': {
            title: 'Ilang araw',
            text: 'Kapag may <code>selection="multiple"</code>, nagdadagdag o nag-aalis ng isang araw ang bawat pili. Sinisimulan ng <code>firstDay</code> ang linggo sa ibang araw kaysa sa locale.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Isang calendar para pumili ng mga araw.',
            members: {
              selection: 'Kung ilang araw ang puwedeng piliin.',
              value: 'Ang napiling araw.',
              values: 'Ang mga napiling araw, nang sunod-sunod.',
              range: 'Ang napiling range, kasama ang dalawang dulo.',
              month: 'Ang ipinapakitang buwan, ang una kapag ilan ang ipinapakita.',
              view: 'Mga araw, buwan o taon.',
              'min, max': 'Ang una at huling araw na puwedeng piliin.',
              unavailable: 'Inaalis sa pagpipilian ang ibang araw, gaya ng mga holiday.',
              months: 'Ilang buwan ang magkakatabi.',
              weekNumbers: 'Ipinapakita ang mga ISO week number.',
              firstDay: 'Ang unang araw ng linggo, 1 para sa Lunes. Default ang sa locale.',
              locale:
                'Fino-format ang mga pangalan at digit, at pinipili ang unang araw ng linggo.',
              labels: 'Bawat text na ipinapakita o ina-announce ng calendar, para maisalin.',
              picked: 'Inilalabas ang bawat pili: isang araw, o isang range kapag kumpleto na.',
              focusDate: 'Inililipat ang keyboard sa isang araw, at ipinapakita ang buwan nito.',
            },
          },
          NuiDateRange: {
            summary: 'Isang range ng mga araw.',
            members: { 'start, end': 'Ang una at huling araw, parehong kasama.' },
          },
        },
        keyboard: [
          ['Left at right arrow', 'Nauna o susunod na araw. Baligtad sa right-to-left na text.'],
          ['Up at down arrow', 'Nauna o susunod na linggo.'],
          ['Home at End', 'Una o huling araw ng linggo.'],
          ['Page Up at Page Down', 'Nauna o susunod na buwan; kapag may Shift, taon.'],
          ['Enter o Space', 'Pinipili ang araw, o nagzo-zoom in sa isang buwan o taon.'],
          ['Escape', 'Inaalis ang unang dulo ng range, o nagzo-zoom in ulit.'],
        ],
        notes: [
          'Isang <code>grid</code> ang bawat buwan na pinangalanan ng title nito, at nasa <code>abbr</code> ang buong pangalan ng mga araw ng linggo.',
          'Pinapangalanan ang bawat araw ng buong petsa nito, na dinadagdagan ng “Today”, “unavailable” at ng mga dulo ng range. Minamarkahan ng <code>aria-selected</code> ang napili, at ng <code>aria-disabled</code> ang hindi puwedeng piliin.',
          'Iisang tab stop ang grid, na may roving <code>tabindex</code>. Ina-announce ng previous at next button ang bagong buwan.',
        ],
      },
      'date-picker': {
        name: 'Date picker',
        title: 'Mga date at time picker component para sa Angular',
        summary: 'Mag-type ng petsa o oras ayon sa segment, o pumili sa calendar.',
        description:
          'Accessible na Angular date, time at range picker: mga segment na tina-type ayon sa ayos ng locale, calendar sa popover, mga preset, at suporta sa form.',
        apiDescription:
          'API reference ng Needless UI date picker: nui-date-field, nui-time-field, nui-date-picker at nui-date-range-picker, kasama ang mga preset.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI date picker: isang spinbutton para sa bawat bahagi ng petsa, at calendar sa isang dialog.',
        overview: [
          'Tina-type ang mga date at time field ayon sa segment: araw, buwan at taon ayon sa ayos ng locale, saka oras at minuto ayon sa 12- o 24-hour clock nito. Isang spinbutton ang bawat segment: mag-type ng mga digit at kusa itong lilipat sa susunod, o i-step ito gamit ang mga arrow key. Mag-paste ng buong petsa, at mapupunan ang bawat segment.',
          'Nagdadagdag ang mga picker ng calendar sa isang popover, para sa isang petsa o isang range na may mga preset. Mga plain na ISO string ang mga value, gaya ng <code>2026-09-25</code> o <code>2026-09-25T09:30</code>, at gumagana ang bawat field sa Signal Forms, reactive forms at <code>ngModel</code>.',
          'Sa site na ito, sinusunod ng mga example ang wika ng page: palitan ito para makitang nagbabago ang ayos, mga separator at mga digit.',
        ],
        examples: {
          fields: {
            title: 'Mga date at time field',
            text: 'I-type ang mga digit, o gamitin ang mga arrow key. Bumabalik nang isang segment ang pangalawang Backspace. Itinatakda ng <code>minuteStep</code> kung gaano kalayo inililipat ng mga arrow ang minuto.',
          },
          pickers: {
            title: 'Mga date picker',
            text: 'Binubuksan ng button ang calendar sa napiling araw, at isinasara ito ng pagpili. Kapag may <code>granularity="minute"</code>, tumatanggap din ng oras ang picker, at petsa lang ang binabago ng calendar.',
          },
          range: {
            title: 'Isang date range',
            text: 'Dalawang field at isang calendar na may dalawang buwan. Nagdadagdag ang <code>nuiDateRangePresets()</code> ng mga karaniwang range; nananatiling null ang value hanggang ma-set ang dalawang dulo, nang magkasunod.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Isang petsa, o petsa at oras, na tina-type ayon sa segment.',
            members: {
              value: 'Ang value, o null hanggang mapunan ang bawat segment.',
              granularity: 'Humihinto sa araw, o tumutuloy hanggang oras, minuto o segundo.',
              'min, max':
                'Ang pinakamaaga at pinakahuling value. Sa labas ng mga ito, invalid ang field.',
              placeholder:
                'Kung saan nagsisimula ang mga walang lamang segment kapag ginamit ang mga arrow key.',
              hourCycle: 'Isang 12- o 24-hour clock. Default ang sa locale.',
              minuteStep: 'Kung gaano kalayo inililipat ng mga arrow key ang minuto.',
              'disabled, readonly': 'Pinipigilan ang mga pagbabago.',
              locale: 'Itinatakda ang ayos, mga separator, mga digit at ang clock.',
              labels: 'Bawat text na sinasabi ng field, para maisalin.',
              invalid: 'Kung nasa labas ng <code>min</code> at <code>max</code> ang value.',
              focus: 'Inililipat ang focus sa unang walang lamang segment.',
            },
          },
          NuiTimeField: {
            summary:
              'Isang oras ng araw na tina-type ayon sa segment. Pareho ang mga input nito sa date field.',
            members: { granularity: 'Humihinto sa oras, minuto o segundo.' },
          },
          NuiDatePicker: {
            summary:
              'Isang date field na may calendar sa popover. Tinatanggap nito ang mga input ng date field, at ang mga ito.',
            members: {
              unavailable: 'Mga araw na hindi pipiliin ng calendar.',
              'firstDay, weekNumbers': 'Ipinapasa sa calendar.',
              labels: 'Ang mga text ng field, ng button at ng calendar.',
              show: 'Binubuksan ang calendar.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Dalawang date field na may range calendar. Tinatanggap nito ang mga input ng date picker, at ang mga ito.',
            members: {
              value: 'Ang range, o null hanggang ma-set ang dalawang dulo, nang magkasunod.',
              presets: 'Mga range na may pangalan, na mapipili sa isang click.',
              months: 'Ilang buwan ang magkakatabi sa calendar; isa lang sa makitid na screen.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Isang range na may pangalan, fixed o ginagawa kapag pinili.',
            members: {
              label: 'Ang pangalan nito.',
              range: 'Ang range, o isang function na gumagawa nito.',
            },
          },
        },
        keyboard: [
          [
            'Mga digit',
            'Tina-type sa segment. Lumilipat ito sa susunod kapag wala nang ibang digit na puwedeng sumunod.',
          ],
          [
            'Up at down arrow',
            'Nag-i-step ang segment; mas malayo ang step ng Page Up at Page Down.',
          ],
          ['Left at right arrow, Tab', 'Nauna o susunod na segment.'],
          ['Backspace', 'Kini-clear ang segment, saka bumabalik nang isa.'],
          ['A at P', 'Itinatakda ang AM o PM.'],
        ],
        notes: [
          'Isang <code>group</code> ang field: pangalanan ito gamit ang <code>aria-label</code> o <code>aria-labelledby</code>. Isang <code>spinbutton</code> ang bawat segment na pinangalanan ayon sa bahagi nito, na binabasa ang mga buwan ayon sa pangalan at ang mga walang lamang segment bilang “Empty”.',
          'Mga editable na text ang mga segment, kaya bumubukas sa mga digit ang mga touch keyboard.',
          '“Choose a date” ang pangalan ng button ng picker, at isang <code>dialog</code> ang popover nito. Ibinabalik sa button ang focus kapag pumili ng petsa.',
          'Gumagana ang calendar sa loob gaya ng <a href="/components/calendar">calendar</a> component.',
        ],
      },
      scheduler: {
        name: 'Scheduler',
        title: 'Scheduler component para sa Angular',
        summary: 'Mga event sa isang buwan, linggo, araw o agenda, na puwedeng i-drag sa puwesto.',
        description:
          'Accessible na Angular scheduler: buwan, linggo, araw at agenda, magkakatabing overlapping event, i-drag para ilipat at i-resize, at buong kontrol sa keyboard.',
        apiDescription:
          'API reference ng Needless UI scheduler: mga view, event, pag-edit at selection ng nui-scheduler, ang mga output nito, at ang template para sa mga event.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI scheduler: mga grid ng araw at oras, mga event na may pangalan, at keyboard na katumbas ng bawat drag.',
        overview: [
          'Ipinapakita ng scheduler ang mga event sa isang buwan, linggo, araw o agenda. Plain na data ang mga event na may mga ISO time; naghahati sa lapad ang mga nag-o-overlap, lumalabas sa dalawang araw ang mga event na tumatawid sa hatinggabi, at tumatakbo sa itaas bilang mga bar ang mga all-day event.',
          'Hindi nito kailanman binabago nang kusa ang mga event mo. I-drag ang isang event, o ang ibabang gilid nito, at iuulat ng <code>eventChange</code> ang mga bagong oras; pumili ng oras sa grid, at iuulat ito ng <code>slotSelect</code>. Sinasabi ng <code>rangeChange</code> kung aling mga araw ang ipinapakita, para ma-load mo ang mga event ng mga ito.',
          'Lahat ng nagagawa ng pointer, nagagawa rin ng keyboard: iisang tab stop ang grid, gumagalaw sa mga araw at oras ang mga arrow key, at inililipat ng Alt kasama ang mga arrow ang isang event.',
        ],
        examples: {
          planner: {
            title: 'Isang linggong paplanuhin',
            text: 'Kapag may <code>editable</code> at <code>selectable</code>, i-drag ang mga event para ilipat ang mga ito, i-drag ang ibabang gilid nila para i-resize ang mga ito, at mag-drag sa bakanteng oras para magdagdag ng bago. Ina-update ng example ang mga event nito mula sa mga output.',
          },
          month: {
            title: 'Isang buwan at isang agenda',
            text: 'Tumatakbo bilang mga bar ang mga event na tumatawid ng ilang araw; ipinapakita ng abalang araw kung ilan pa ang natitira. Ang buwan at ang agenda lang ng susunod na <code>agendaDays</code> na araw ang inaalok ng <code>views</code>.',
          },
          rooms: {
            title: 'Isang araw ng mga meeting room',
            text: 'Iginuguhit ng <code>nuiSchedulerEvent</code> ang bawat booking kasama ang room at host nito. Mas pinong mga row ang ginagawa ng <code>slotMinutes="15"</code>.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Mga event sa isang buwan, linggo, araw o agenda.',
            members: {
              events: 'Ang mga event na ipapakita.',
              view: 'Ang ipinapakitang view.',
              views: 'Ang mga view na puwedeng pagpalipat-lipatan.',
              date: 'Ang ipinapakitang araw, at kung nasaan ang keyboard.',
              slotMinutes:
                'Mga minuto bawat row ng time grid, at ang step ng paglipat ng mga event.',
              scrollHour: 'Ang oras kung saan bumubukas ang time grid.',
              agendaDays: 'Ilang araw pasulong ang sakop ng agenda.',
              editable: 'Puwedeng ilipat at i-resize ang mga event, gamit ang pointer at keyboard.',
              selectable: 'Puwedeng pumili ng oras sa grid, para gumawa ng mga event.',
              firstDay: 'Ang unang araw ng linggo, 1 para sa Lunes. Default ang sa locale.',
              headingLevel:
                'Ang heading level ng title; isang level na mas malalim ang mga araw ng agenda.',
              locale: 'Fino-format ang mga araw at oras.',
              labels: 'Bawat text na ipinapakita o ina-announce ng scheduler, para maisalin.',
              eventClick: 'Inilalabas ang event na na-click, o binuksan gamit ang Enter.',
              eventChange:
                'Inilalabas ang mga bagong oras ng event pagkatapos itong ilipat o i-resize.',
              slotSelect: 'Inilalabas ang oras na pinili sa grid.',
              rangeChange:
                'Inilalabas ang una at huling araw na ipinapakita kapag nagbago ang mga ito.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Isang event. Hindi kasama ang dulo ng event na may oras; ang huling araw naman ang dulo ng all-day event.',
            members: {
              'id, title': 'Ang key nito, at ang ipinapakita nito.',
              'start, end': 'Mga petsa at oras, o mga petsa lang para sa mga all-day event.',
              allDay: 'Bilang default, all-day ito kapag walang oras ang <code>start</code>.',
              tone: 'Ang kulay nito.',
              editable: 'Kung puwede itong ilipat, anuman ang sabihin ng scheduler.',
              data: 'Kahit anong iba pang itatabi kasama nito.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary:
              'Iginuguhit ang mga event. Nasa context ang event at ang oras nito bilang text.',
            members: {},
          },
        },
        keyboard: [
          [
            'Mga arrow key',
            'Lumilipat ayon sa araw at sa slot. Baligtad sa right-to-left na text.',
          ],
          ['Page Up at Page Down', 'Nauna o susunod na buwan, linggo o araw.'],
          ['Shift + mga arrow key', 'Pinapalawak ang napiling oras.'],
          ['Enter o Space sa cell', 'Pumapasok sa mga event nito, o pinipili ang oras nito.'],
          ['Up at down arrow sa event', 'Nauna o susunod na event sa cell.'],
          ['Alt + mga arrow key sa event', 'Inililipat ito nang isang slot o isang araw.'],
          ['Alt + Shift + up o down arrow', 'Pinapaikli o pinapahaba ang event.'],
          ['Escape', 'Bumabalik sa cell, inaalis ang napiling oras, o kinakansela ang drag.'],
        ],
        notes: [
          'Mga <code>grid</code> ang buwan, linggo at araw na pinangalanan ng title nila. Mga araw ang header ng mga column at mga oras ang sa mga row, kaya binabasa ang bawat cell kasama ang araw at oras nito.',
          'Isang button ang bawat event na pinangalanan ng title, araw at oras nito, gaya ng “Standup, Friday, September 25, 9:00 – 9:30 AM”. Ina-announce ang bagong oras kapag inilipat o ni-resize ito.',
          'May katumbas sa keyboard ang bawat drag, kaya walang kailangang gumamit ng pointer.',
          'Mga toggle button sa isang group ang mga view, at ina-announce ang title kapag lumipat sa ibang linggo o buwan.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter at mga resizable na pane para sa Angular',
        summary: 'Mga pane na magkatabi o nakapatong, na may mga handle para i-resize ang mga ito.',
        description:
          'Accessible na Angular splitter: mga resizable na pane na magkatabi o nakapatong, mga limit, pag-collapse, naka-save na laki at buong kontrol sa keyboard.',
        apiDescription:
          'API reference ng Needless UI splitter: orientation at mga laki ng nuiSplitter, ang mga limit at pag-collapse ng mga pane, at ang mga handle sa pagitan nila.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI splitter: mga focusable na window splitter handle na may value, mga arrow key, Home, End at Enter.',
        overview: [
          'Hinahati ng splitter ang espasyo nito sa mga pane, na may handle sa pagitan ng bawat dalawa. I-drag ang isang handle, o i-focus ito at gamitin ang mga arrow key. Mga percentage ang mga laki na umaabot sa 100 kapag pinagsama, at bina-bind ang mga ito ng <code>[(sizes)]</code>.',
          'Puwedeng nasa pixel, rem o percent ang panimulang laki, minimum at maximum ng bawat pane. Nako-collapse ang isang <code>collapsible</code> na pane kapag na-drag ito nang mas maliit sa kalahati ng minimum nito, o sa Enter sa handle nito, at bumabalik ito sa dati nitong laki.',
          'Kapag may <code>storageKey</code>, itinatabi ang mga laki sa <code>localStorage</code>, kaya sa susunod na pagbisita, makikita ng mga tao ang layout gaya ng pagkakaiwan nila rito.',
        ],
        examples: {
          editor: {
            title: 'Isang editor',
            text: 'Mga file, code at preview. Nako-collapse ang mga file at ang preview, laging may hindi bababa sa 30% ng lapad ang code, at naka-save ang mga laki.',
          },
          stacked: {
            title: 'Mga nakapatong na pane',
            text: 'Pinapatong ng <code>orientation="vertical"</code> ang mga pane, at binabasa ng <code>[(sizes)]</code> ang mga laki nila habang nagbabago ang mga ito.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Mga pane na may mga handle sa pagitan nila.',
            members: {
              orientation: 'Magkatabi, o nakapatong.',
              sizes: 'Ang bahagi ng bawat pane, sa percent, ayon sa pagkakasunod.',
              storageKey:
                'Itinatabi ang mga laki sa <code>localStorage</code> sa ilalim ng key na ito.',
              step: 'Kung gaano kalayo inililipat ng mga arrow key ang isang handle, sa percent. Doble ang layo kapag may Shift.',
              move: 'Inililipat nang ilang percent ang hangganan pagkatapos ng isang pane.',
            },
          },
          NuiSplitterPane: {
            summary: 'Isang pane. Tumatanggap ang mga laki nito ng pixel, rem o percent.',
            members: {
              defaultSize: 'Ang panimulang laki nito, kapag walang laking maibabalik.',
              min: 'Ang pinakamaliit nitong laki.',
              max: 'Ang pinakamalaki nitong laki.',
              collapsible:
                'Nako-collapse ito: kapag na-drag nang mas maliit sa kalahati ng minimum nito, o sa Enter.',
              collapsedSize: 'Ang laki nito kapag naka-collapse, gaya ng isang hanay ng mga icon.',
              label: 'Pinapangalanan ang handle na nagre-resize dito.',
            },
          },
          NuiSplitterHandle: {
            summary: 'Ang handle sa pagitan ng dalawang pane.',
            members: {
              label: 'Pinapangalanan ito, kapag hindi ito pinapangalanan ng label ng pane.',
              disabled: 'Hindi ito gumagalaw.',
              toggle: 'Kino-collapse ang pane sa tabi nito, o ibinabalik ito.',
            },
          },
        },
        keyboard: [
          [
            'Left at right arrow',
            'Inililipat ang handle sa pagitan ng magkatabing pane. Baligtad sa right-to-left na text.',
          ],
          ['Up at down arrow', 'Inililipat ang handle sa pagitan ng mga nakapatong na pane.'],
          ['Shift + mga arrow key', 'Inililipat ito nang doble ang layo.'],
          [
            'Home at End',
            'Dinadala ang pane bago ang handle sa pinakamaliit o pinakamalaki nitong laki.',
          ],
          ['Enter', 'Kino-collapse ang collapsible na pane, o ibinabalik ito.'],
        ],
        notes: [
          'Isang focusable na <code>separator</code> ang bawat handle, gaya sa window splitter pattern ng WAI-ARIA: ang value nito ay ang laki ng pane bago ito, sa pagitan ng mga limit ng pane na iyon, at tumuturo sa pane ang <code>aria-controls</code>.',
          'Pangalanan ang mga handle sa pamamagitan ng <code>label</code> ng mga pane: sinasabi ng “Files” sa screen reader kung ano ang nire-resize ng isang handle.',
          'Kino-collapse din ng double click sa handle ang pane nito, at kinukuha ng drag ang pointer, kaya hindi nawawala ang handle kahit sa mabibilis na galaw.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Guided tour component para sa Angular',
        summary:
          'Isang card para sa bawat step, katabi ng tinutukoy nito, habang naka-dim ang natitirang bahagi ng page.',
        description:
          'Accessible na Angular product tour: card para sa bawat step sa tabi ng target nito, spotlight sa paligid nito, mga interactive na step at focus na bumabalik.',
        apiDescription:
          'API reference ng Needless UI tour: mga step ng nui-tour, ang open at step binding, ang mga output nito, at ang target, placement at hook ng bawat step.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI tour: dialog ang bawat card na pinangalanan ng title nito, focus na iniingatan at ibinabalik, at Escape para umalis.',
        overview: [
          'Ginagabayan ng tour ang mga tao sa isang page, isang step sa bawat pagkakataon. Tumuturo ang bawat step sa isang element gamit ang card sa tabi nito at dini-dim ang natitirang bahagi ng page sa paligid nito; lumalabas sa gitna ang step na walang target.',
          'Plain na data ang mga step: isang target (isang selector, isang element o isang function na humahanap nito), isang title, at content bilang text o template. Unang tumatakbo ang <code>beforeShow</code>, kaya puwedeng buksan ng isang step ang panel na kinalalagyan ng target nito, at sini-scroll ang page papunta sa target na wala sa view.',
          'Dialog ang bawat card. Modal ito, maliban kung <code>interactive</code> ang step: saka magagamit ng mga tao ang tinuturo nito. Tinatapos ng Escape ang tour, at bumabalik ang focus kung saan ito dati.',
        ],
        examples: {
          basics: {
            title: 'Unang silip',
            text: 'Apat na step, ang una ay walang target. Pinaghihiwalay ng <code>finished</code> at <code>dismissed</code> ang dalawang paraan ng pagtatapos.',
          },
          interactive: {
            title: 'Mga step na susubukan',
            text: 'Binubuksan ng <code>beforeShow</code> ang settings bago tumuro ang pangalawang step sa loob nito, at hinahayaan ng <code>interactive</code> ang mga tao na gamitin ang switch habang nakabukas ang card.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Isang guided tour.',
            members: {
              steps: 'Ang mga step, ayon sa pagkakasunod.',
              open: 'Kung tumatakbo ang tour.',
              step: 'Ang step na ipinapakita, mula sa 0.',
              labels: 'Bawat text na ipinapakita nito, para maisalin.',
              finished: 'Nagfa-fire kapag tapos na ang huling step.',
              dismissed:
                'Inilalabas ang step kung saan natapos ang tour, kapag maaga itong natapos.',
              start: 'Sinisimulan ang tour, mula sa unang step o sa step na ibinigay.',
              end: 'Tinatapos ang tour, bilang natapos o na-dismiss.',
            },
          },
          NuiTourStep: {
            summary: 'Isang step ng tour.',
            members: {
              target: 'Kung saan ito tumuturo. Kapag wala, lumalabas ang card sa gitna.',
              title: 'Ang title ng card.',
              content: 'Ang text nito, o isang template.',
              side: 'Kung saang gilid ng target pupunta ang card.',
              align: 'Kung paano pumapantay ang card sa target.',
              padding: 'Ang espasyo sa paligid ng target sa spotlight, sa pixel.',
              interactive: 'Magagamit ang target habang nakabukas ang card.',
              beforeShow: 'Tumatakbo bago lumabas ang step. Naghihintay ang tour sa isang promise.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Lumilipat sa mga button ng card. Sa mga modal na step, nananatili ang focus sa card.',
          ],
          ['Enter o Space', 'Pinipindot ang naka-focus na button: Next, Back o Done.'],
          ['Escape', 'Tinatapos ang tour.'],
        ],
        notes: [
          'Isang <code>dialog</code> ang bawat card na pinangalanan ng title nito at inilalarawan ng content nito. Lumilipat ang focus sa pangunahing button nito sa bawat step, at bumabalik kung saan ito dati kapag natapos ang tour.',
          'Ginagawang inert ng mga modal na step ang natitirang bahagi ng page. Hindi modal ang mga interactive na step, kaya naaabot ang target nila gamit ang keyboard at gamit din ang pointer.',
          'Text ang progress, gaya ng “2 of 4”; iginuguhit lang ito ng mga tuldok.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'File dropzone at pag-upload para sa Angular',
        summary:
          'Mag-drop o pumili ng mga file, may pagsusuri, preview at pag-upload na may progress.',
        description:
          'Accessible na Angular file dropzone: drag and drop, folder at paste, pagsusuri ng type at laki, preview ng larawan, at pag-upload na may progress at retry.',
        apiDescription:
          'API reference ng Needless UI dropzone: mga file at pagsusuri ng nui-dropzone, ang upload function at ang queue nito, ang mga output nito at ang mga text nito.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI dropzone: isang zone na button, mga resultang ina-announce, at mga progress bar at aksyong may pangalan.',
        overview: [
          'Tumatanggap ang dropzone ng mga file na na-drop dito, pinili gamit ang file picker, o na-paste. Binabasa ang buong laman ng mga folder na na-drop, at napapanatili ng bawat file ang path nito.',
          'Sinusuri ang bawat file ayon sa <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> at sa <code>validate</code> function mo, at inililista kasama ang dahilan ang mga tinanggihan. May preview ang mga larawan.',
          'Kapag walang <code>upload</code> function, hinahawakan ng dropzone ang mga file para sa isang form, sa <code>[(files)]</code>. Kapag mayroon, ina-upload nito ang mga ito nang ilan-ilan, may progress, cancel at retry. Ipasa ang <code>signal</code> ng upload sa <code>fetch</code>, para mapahinto ito ng pag-cancel.',
        ],
        examples: {
          upload: {
            title: 'Mga upload',
            text: 'Nag-uulat ng progress nito nang paunti-unti ang isang kunwaring upload. Pumapalya ang mga file na may “fail” sa pangalan, para maipakita ang retry, at nagdadagdag ang <code>directory</code> ng button para pumili ng folder.',
          },
          attach: {
            title: 'Mga attachment para sa isang form',
            text: 'Walang <code>upload</code>: hanggang tatlong dokumento ang hinahawakan ng dropzone sa <code>[(files)]</code>, at pinapalitan ng sarili nitong text ang default na text.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Isang lugar para mag-drop ng mga file, o pumili ng mga ito.',
            members: {
              files: 'Ang mga file na hawak nito, ayon sa pagkakasunod.',
              accept:
                'Ang mga uri ng file na tatanggapin, gaya sa <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Higit sa isang file nang sabay.',
              directory: 'Nag-aalok ng button para pumili ng folder.',
              maxFiles: 'Ilang file ang kaya nitong hawakan.',
              'maxSize, minSize': 'Ang pinakamalaki at pinakamaliit na file, sa byte.',
              validate: 'Sinusuri ang bawat file. Tinatanggihan ito kapag may ibinalik na mensahe.',
              upload: 'Nagpapadala ng file. Kapag wala ito, hinahawakan lang ang mga file.',
              concurrency: 'Ilang file ang sabay-sabay na ina-upload.',
              hint: 'Isang linya sa ilalim ng text ng zone, gaya ng kung ano ang tinatanggap nito.',
              disabled: 'Wala itong tinatanggap na file.',
              labels: 'Bawat text na ipinapakita o ina-announce nito, para maisalin.',
              uploaded:
                'Inilalabas ang file na na-upload, kasama ang ibinalik ng <code>upload</code>.',
              rejected: 'Inilalabas ang mga file na tinanggihan, kasama ang mga dahilan.',
              queue:
                'Ang upload queue, para mag-cancel, mag-retry at magbasa ng progress mula sa code.',
              take: 'Nagdadagdag ng mga file mula sa code, at sinusuri ang bawat isa.',
            },
          },
          NuiUploader: {
            summary:
              'Nagpapadala ng isang file: iniuulat nito ang progress mula 0 hanggang 1, at humihinto kapag na-abort ang signal.',
            members: {
              '(file, context)': 'Nagbabalik ng promise ng kung anuman ang isagot ng server mo.',
            },
          },
        },
        keyboard: [
          ['Enter o Space', 'Sa zone, binubuksan ang file picker.'],
          ['Ctrl + V o ⌘ + V', 'Sa zone, idinadagdag ang mga file na na-paste.'],
          ['Tab', 'Lumilipat sa zone at sa mga aksyon ng bawat file.'],
        ],
        notes: [
          'Button ang zone, kaya gumagana ito kahit walang pointer, at inilalarawan ito ng hint.',
          'Ina-announce ang mga file na naidagdag at ang mga tinanggihan. Isang <code>progressbar</code> ang bawat progress bar na pinangalanan ayon sa file nito, at pinangalanan ang bawat aksyon ayon sa ginagawa nito, gaya ng “Remove beach.jpg”.',
          'Pandekorasyon lang ang mga preview: sinasabi ng pangalan ng file kung aling file ito.',
        ],
      },
      mask: {
        name: 'Input mask',
        title: 'Input mask directive para sa Angular',
        summary: 'Mga text field na nagfo-format habang nagta-type: petsa, card, IBAN, code.',
        description:
          'Angular input mask: mga text field na nagfo-format habang nagta-type, caret na hindi naaalis sa puwesto, helper para sa card at IBAN, at form validation.',
        apiDescription:
          'API reference ng Needless UI input mask: ang nuiMask directive, ang mga token at value nito, at mga helper para sa card number at IBAN.',
        a11yDescription:
          'Accessibility ng Needless UI input mask: mga native field na may sariling label, numeric keyboard sa phone, at pagbura na nilalaktawan ang mga literal.',
        overview: [
          'Fino-format ng mask ang isang text field habang nagta-type: inilalagay ng <code>00/00/0000</code> ang mga slash, at tumatanggap ang <code>AA 000 AA</code> ng mga titik at digit nang salitan. Hindi pumapasok ang mga character na hindi tugma, at nananatili sa puwesto nito ang caret kapag nag-type sa gitna.',
          'Binubuo ang mga mask ng mga token at literal: digit ang <code>0</code>, titik ang <code>a</code>, alinman sa dalawa ang <code>*</code>, at ang <code>A</code> at <code>X</code> ang katumbas nila para sa mga code, naka-uppercase. Magdagdag ng sarili mong token gamit ang <code>tokens</code>, o magpasa ng function na pumipili ng mask ayon sa na-type, gaya ng ginagawa ng <code>nuiCardMask</code> ayon sa card brand.',
          'Ang value ay ang ipinapakita, o ang data lang kapag may <code>unmask</code>. Gumagana ang mask sa Signal Forms, reactive forms at <code>ngModel</code>, at error ang value na hindi pa kumpleto.',
        ],
        examples: {
          formats: {
            title: 'Mga format',
            text: 'Isang petsa, isang oras, isang plaka, at isang kulay na may sariling token para sa mga hexadecimal digit.',
          },
          payment: {
            title: 'Mga detalye ng pagbabayad',
            text: 'Mga field ng Signal Forms. Sumusunod sa brand ang card mask, apat na digit ang security code para sa American Express, at sinusuri ng <code>nuiCardValid</code> at <code>nuiIbanValid</code> ang mga numero.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Isang mask sa isang native na text field.',
            members: {
              nuiMask: 'Ang mask, o isang function na pumipili nito ayon sa na-type na data.',
              tokens: 'Mga mask character na idadagdag o papalitan.',
              unmask: 'Data lang ang value, walang mga literal.',
              value: 'Ang value: ang ipinapakita, o ang data kapag may <code>unmask</code>.',
              raw: 'Ang na-type na data, walang mga literal.',
              complete: 'Kung napunan na ang bawat puwesto sa mask.',
            },
          },
          Helpers: {
            summary: 'Mga function para mag-format, mag-check at bumuo ng mga mask.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Fino-format ang isang value gamit ang mask, o kinukuha ang data mula sa na-format na value.',
              nuiCardMask:
                'Isang mask para sa mga card number, naka-group gaya ng pagkaka-print ng brand nila.',
              nuiCardBrand: 'Ang brand ng isang card number, mula sa mga unang digit nito.',
              'nuiCardValid, nuiLuhn':
                'Kung tama ang haba ng card number para sa brand nito at pumapasa ito sa Luhn check.',
              nuiIbanMask: 'Isang mask para sa mga IBAN, kasinghaba ng IBAN ng bansa.',
              nuiIbanValid:
                'Kung tama ang haba ng IBAN para sa bansa nito at tama ang mga check digit.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Binubura ang character bago ang caret, nilalaktawan ang mga literal.'],
          ['Delete', 'Binubura ang character pagkatapos ng caret, nilalaktawan ang mga literal.'],
        ],
        notes: [
          'Gumagana ang mask sa sarili mong <code>&lt;input&gt;</code>, kaya nananatili ang label at hint nito gaya ng pagkakasulat mo. Sabihin doon kung ano ang inaasahan: hindi instruction ang mask.',
          'Nagse-set ng <code>inputmode="numeric"</code> ang mga mask na puro digit, kaya numeric keypad ang ipinapakita ng mga phone, maliban kung may sariling input mode ang field.',
          'Tinatanggap ang mga digit ng anumang script, at isinusulat bilang 0 hanggang 9.',
        ],
      },
      'phone-field': {
        name: 'Phone field',
        title: 'Phone number input para sa Angular',
        summary: 'Isang country picker at isang numero, naka-group ayon sa pagsulat ng bansa nito.',
        description:
          'Accessible na Angular phone number input: country picker, mga numerong naka-group ayon sa bansa, calling code na tina-type o ipinapaste, at E.164 na value.',
        apiDescription:
          'API reference ng Needless UI phone field: value at country ng nui-phone-field, ang mga bansang inaalok, at mga helper para magbasa at magsulat ng numero.',
        a11yDescription:
          'Accessibility ng Needless UI phone field: country picker na may pangalan, bansang ina-announce kapag pinili ito ng code, at autofill ng browser.',
        overview: [
          'Isang country picker at isang numero ang phone field. Habang tina-type, naka-group ang numero ayon sa pagsulat ng mga numero sa bansa nito, at ang value ay ang numero sa E.164, gaya ng <code>+393331234567</code>.',
          'Tina-type ng mga tao ang mga numero sa paraang nakasanayan nila. Itinuturing na trunk prefix ang 0 sa unahan (o ang 1 bago ang isang North American na numero) at hindi isinasama sa value. Pinipili ng calling code na tina-type o ipinaste, gaya ng <code>+44</code> o <code>0044</code>, ang bansa nito, at ganoon din ang area code kapag iisang calling code ang gamit ng ilang bansa.',
          'Ang unang bansa ay ang sa locale, at nililimitahan ng <code>countries</code> ang listahan. Sa mga form, error ang numerong masyadong maikli o masyadong mahaba para sa bansa nito. Para sa buong validation, i-check din ang mga numero sa server.',
        ],
        examples: {
          basic: {
            title: 'Isang numero',
            text: 'Magsimula sa <code>+</code> at isang calling code para magpalit ng bansa habang nagta-type.',
          },
          countries: {
            title: 'Mga bansang pinili mo',
            text: 'Labing-isang bansa ang inaalok ng <code>countries</code>, gumagana ang field sa isang reactive na <code>FormControl</code>, at isinusulat pabalik ng <code>nuiFormatPhone</code> ang value para mabasa ng mga tao.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Isang phone number field.',
            members: {
              value: 'Ang numero sa E.164, o walang laman.',
              country: 'Ang bansa, bilang region code nito.',
              countries: 'Ang mga bansang inaalok, bilang mga region code.',
              locale: 'Ang wika ng mga pangalan ng bansa.',
              label:
                'Pinapangalanan ang numero, kapag walang <code>&lt;label for&gt;</code> na gumagawa nito.',
              inputId: 'Ang id ng numero, para sa <code>&lt;label for&gt;</code>.',
              placeholder: 'Text na ipinapakita habang walang laman ang numero.',
              invalid: 'Minamarkahang invalid ang numero.',
              disabled: 'Hindi ito mababago.',
              labels: 'Bawat text na sinasabi nito, para maisalin.',
            },
          },
          Helpers: {
            summary: 'Mga function para sa mga phone number.',
            members: {
              nuiParsePhone:
                'Binabasa ang numerong nakasulat sa kahit anong paraan at hinahati ito sa region, calling code at national number nito.',
              nuiFormatPhone:
                'Isinusulat ang numero na naka-group gaya ng sa bansa nito, o sa E.164.',
              nuiPhoneValid:
                'Kung may kilalang calling code ang numero at tama ang haba nito para sa bansa nito.',
            },
          },
        },
        keyboard: [
          ['Mga titik sa country picker', 'Tumatalon sa mga bansang nagsisimula sa mga ito.'],
          ['Enter o Space', 'Binubuksan ang listahan ng mga bansa, o pumipili ng isa.'],
          [
            'Backspace',
            'Sa numero, binubura ang isang digit, nilalaktawan ang mga space at bracket.',
          ],
        ],
        notes: [
          '“Country code” ang pangalan ng country picker at binabasa nito ang flag at code nito. Kapag pumili ng bansa ang isang calling code o area code, ina-announce ang bagong bansa.',
          'Pangalanan ang numero gamit ang <code>&lt;label for&gt;</code> at <code>inputId</code>, o gamit ang <code>label</code>.',
          'May <code>autocomplete="tel"</code> ang numero, kaya kayang punan ito ng mga browser, pati ang calling code, at phone keypad ang ipinapakita ng mga phone.',
        ],
      },
      'color-picker': {
        name: 'Color picker',
        title: 'OKLCH color picker para sa Angular',
        summary: 'Isang kulay sa OKLCH, may mga slider, swatch, eyedropper at contrast check.',
        description:
          'Accessible na Angular color picker sa OKLCH: wide-gamut na P3 color, bawat CSS color syntax, mga swatch, ang eyedropper, at WCAG contrast check.',
        apiDescription:
          'API reference ng Needless UI color picker: value, format at gamut ng nui-color-picker, mga swatch at contrast, at mga helper para sa mga kulay.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI color picker: slider na may dalawang value para sa area, mga native slider, at mga contrast grade sa salita.',
        overview: [
          'Gumagana ang color picker sa OKLCH, ang perceptual color space ng modernong CSS. Pahalang sa area, tumatakbo ang chroma mula gray hanggang sa pinakamataas na kayang ipakita ng screen sa lightness na iyon, kaya magagamit na kulay ang bawat punto, at hindi gumagalaw ang thumb habang umiikot ang hue.',
          'Tumatanggap ang field ng kahit anong CSS color, kasama ang mga pangalan, at isinusulat ng format button ang value bilang hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> o <code>color(display-p3)</code>. Ang kulay na nasa labas ng gamut ng isang format ay ipinapasok dito sa paraan ng CSS, at pinapanatili ang lightness at hue nito.',
          'Magdagdag ng <code>swatches</code> na mapagpipilian, at ng <code>contrastWith</code> para i-check ang kulay laban sa isang background ayon sa pagsukat ng WCAG 2 sa contrast. Kapag may eyedropper ang browser, may button na pumipili ng kulay mula sa screen.',
        ],
        examples: {
          brand: {
            title: 'Isang brand color',
            text: 'Mga swatch na may pangalan, at ang contrast ng puting text sa kulay: pumili ng maliwanag, at babagsak ang AA.',
          },
          wide: {
            title: 'Malawak na gamut',
            text: 'Pinupuno ng <code>gamut="p3"</code> ang area ng mga Display P3 color, at minamarkahan ng isang dashed line kung saan nagtatapos ang sRGB. Nananatili sa <code>oklch()</code> ang value.',
          },
          popover: {
            title: 'Sa isang popover',
            text: 'Binubuksan ng button na nagpapakita ng kulay ang picker sa isang <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Isang color picker sa OKLCH.',
            members: {
              value: 'Ang kulay, nakasulat sa format. Walang laman hanggang may mapili.',
              format: 'Kung paano isinusulat ang value.',
              formats: 'Ang mga format na pinagsasalit-salitan ng format button.',
              gamut: 'Ang mga kulay na laman ng area: sRGB, o Display P3.',
              alpha: 'Ipinapakita ang opacity slider.',
              swatches: 'Mga kulay na mapagpipilian, may mga pangalan.',
              contrastWith: 'Isang background na pagsusukatan ng contrast.',
              eyeDropper: 'Ipinapakita ang eyedropper, kapag mayroon nito ang browser.',
              disabled: 'Hindi ito mababago.',
              labels: 'Bawat text na sinasabi nito, para maisalin.',
              color: 'Ang napiling kulay, sa OKLCH.',
            },
          },
          Helpers: {
            summary: 'Mga function para sa mga kulay.',
            members: {
              nuiParseColor: 'Binabasa ang kulay sa kahit anong CSS syntax.',
              nuiFormatColor: 'Isinusulat ang kulay sa isang format.',
              nuiToGamut: 'Ipinapasok ang kulay sa sRGB o Display P3, gaya ng ginagawa ng CSS.',
              nuiContrast: 'Ang WCAG 2 contrast ratio ng isang kulay sa isang background.',
            },
          },
        },
        keyboard: [
          ['Left at right arrow', 'Sa area, mas kaunti o mas maraming chroma.'],
          ['Up at down arrow', 'Sa area, mas maliwanag o mas madilim.'],
          ['Shift + mga arrow key', 'Gumagalaw nang sampung beses na mas malayo.'],
          ['Home at End', 'Sa area, walang chroma o ang pinakamarami.'],
          ['Page Up at Page Down', 'Sa area, mas maliwanag o mas madilim nang malaking hakbang.'],
        ],
        notes: [
          'Isang <code>slider</code> na pinangalanang “Color” ang thumb ng area, na sinasabi ang dalawang value nito, gaya ng “Lightness 62%, chroma 75%”. Mga native na range input ang hue at opacity.',
          'Mga button ang mga swatch na pinangalanan ayon sa label nila, at naka-press kapag tugma sa kulay.',
          'Sinasabi ng AA at AAA ang “passes” o “fails” sa salita, hindi lang sa kulay, at sa forced colors mode, nananatili ang mismong mga kulay.',
        ],
      },
      carousel: {
        name: 'Carousel',
        title: 'Carousel at slider component para sa Angular',
        summary:
          'Mga slide sa isang hanay na nag-i-scroll at nag-i-snap, may mga button, tuldok at rotation.',
        description:
          'Accessible na Angular carousel: native na scroll snapping at swipe, ilang slide bawat view, mga tuldok, loop, at rotation na humihinto ayon sa WCAG.',
        apiDescription:
          'API reference ng Needless UI carousel: mga slide bawat view, index, loop at rotation ng nui-carousel, ang mga method nito, at ang nuiCarouselSlide directive.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI carousel: ang WAI-ARIA carousel pattern, rotation control, mga slide na may pangalan at mga ina-announce na galaw.',
        overview: [
          'Ipinapakita ng carousel ang mga slide sa isang hanay na nag-i-scroll at nag-i-snap: native itong naigagalaw ng swipe, mga trackpad at mga arrow key, pati ng mga previous at next button nito at ng mga tuldok nito. Markahan ang bawat slide ng <code>nuiCarouselSlide</code>, na pinangalanan ayon sa title nito.',
          'Magpakita ng isang slide sa bawat pagkakataon, o ilan gamit ang <code>perView</code>, o hayaang panatilihin ng mga slide ang sarili nilang lapad gamit ang <code>perView="auto"</code>. Bina-bind ng <code>[(index)]</code> ang unang slide na nakikita, at bumabalik sa simula ang <code>loop</code>.',
          'Kapag may <code>autoplay</code>, kusa itong umiikot, na kontrolado ng isang rotation control. Nagpa-pause ang rotation kapag nasa ibabaw ang pointer, at tuluyang humihinto kapag pumasok ang keyboard focus, gaya ng hinihingi ng WAI-ARIA pattern.',
        ],
        examples: {
          featured: {
            title: 'Mga tampok na biyahe',
            text: 'Bagong slide bawat anim na segundo, habang napupuno hanggang doon ang ring sa rotation control. Mag-hover para i-pause ang rotation, o pumasok gamit ang Tab para ihinto ito.',
          },
          shelf: {
            title: 'Isang shelf ng mga card',
            text: 'Pinapanatili ng <code>perView="auto"</code> ang lapad ng bawat card at ipinapakita ang kasing-dami ng kasya. Sinusundan ng mga tuldok ang swipe, at sinasabi ng <code>[(index)]</code> kung nasaan na ito.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Isang carousel ng mga slide.',
            members: {
              label: 'Pinapangalanan ang carousel.',
              index: 'Ang unang slide na nakikita, mula sa 0.',
              perView:
                'Ilang slide ang sabay na nakikita, o <code>auto</code> para sa mga slide na may sariling lapad.',
              gap: 'Espasyo sa pagitan ng mga slide, bilang kahit anong CSS length.',
              loop: 'Bumabalik sa una kapag lumampas sa huling slide, at pabaligtad din.',
              autoplay:
                'Mga millisecond sa pagitan ng mga slide kapag kusa itong umiikot; hindi ito umiikot kapag 0.',
              'controls, indicators': 'Ang mga previous at next button, at ang mga tuldok.',
              labels: 'Bawat text na sinasabi nito, para maisalin.',
              'next, previous': 'Umuusad o umaatras nang isang slide.',
              goTo: 'Dinadala ang isang slide sa view.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Isang slide.',
            members: {
              nuiCarouselSlide: 'Ang title nito, na binabasa sa halip na ang posisyon nito.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Ang rotation control, ang mga button, ang mga slide, saka ang mga tuldok.'],
          ['Left at right arrow sa mga slide', 'Nag-i-scroll sa nauna o susunod na slide.'],
          ['Enter o Space', 'Pinipindot ang naka-focus na button o tuldok.'],
        ],
        notes: [
          'Isang <code>region</code> ang carousel na may <code>aria-roledescription="carousel"</code>, at isang <code>group</code> ang bawat slide na may <code>aria-roledescription="slide"</code>, na pinangalanang gaya ng “Lake Como, 2 of 4”.',
          'Nauuna ang rotation control at sinasabi nito ang gagawin nito. Nagpa-pause ang rotation sa ilalim ng pointer at humihinto kapag pumasok ang keyboard focus, kaya hindi nito kailanman ginagalaw ang binabasa ng isang tao.',
          'Ina-announce kung saan napunta ang carousel pagkatapos ng swipe, button o tuldok; tahimik ang rotation.',
        ],
      },
      editor: {
        name: 'Rich text editor',
        title: 'Rich text editor component para sa Angular',
        summary: 'Mga heading, list, link at format, may toolbar at Markdown habang nagta-type.',
        description:
          'Accessible na Angular rich text editor: toolbar, mga shortcut, Markdown habang nagta-type, malinis na paste, mga link at undo, na HTML o Markdown ang value.',
        apiDescription:
          'API reference ng Needless UI rich text editor: value at format ng nui-editor, mga tool ng toolbar, mga text, mga command, at ang HTML at Markdown converter.',
        a11yDescription:
          'Keyboard at accessibility ng Needless UI rich text editor: multiline na textbox, WAI-ARIA toolbar, mga shortcut at link dialog.',
        overview: [
          'Sumusulat ang editor ng mga paragraph, heading, quote, list, code block at divider, na may bold, italic, underline, strikethrough, code at mga link. HTML ang value nito, o Markdown kapag may <code>format="markdown"</code>, at gumagana ito sa mga form.',
          'May sarili itong dokumento at ito mismo ang humahawak sa bawat edit, kaya umaabot sa page ang anumang na-paste o na-drop bilang dokumentong iyon lang: nananatili ang structure at mga format, pati mula sa Google Docs at Word, at inaalis ang mga script, style at hindi ligtas na link.',
          'Mag-type ng Markdown at nagiging format ito: nagsisimula ng heading ang <code># </code>, ng list ang <code>- </code>, at nafo-format ang <code>**bold**</code> at <code>`code`</code> pagkasara mo sa mga ito. May sariling shortcut at toolbar button ang bawat format.',
        ],
        examples: {
          comment: {
            title: 'Isang comment',
            text: 'Pinipili ng <code>tools</code> ang mga button ng toolbar. Mag-type ng Markdown, mag-paste mula kahit saan, at tingnan ang HTML na iniingatan ng editor.',
          },
          markdown: {
            title: 'Markdown papasok at palabas',
            text: 'Kapag may <code>format="markdown"</code>, Markdown ang value: binabasa ito kasama ang mga nested list, quote at code, at isinusulat pabalik habang nag-e-edit ka.',
          },
          lists: {
            title: 'Mga nested list',
            text: 'Inililipat ng Indent at Outdent ang mga list item nang isang level papasok o palabas, gaya ng ginagawa ng Tab at Shift + Tab. Sa default na toolbar, lumalabas lang ang mga ito sa mga touch screen, na walang Tab key; ilista ang mga ito sa <code>tools</code> para lumabas kahit saan.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Isang rich text editor.',
            members: {
              value: 'Ang content, bilang HTML o Markdown; walang laman kapag walang text.',
              format: 'Kung paano isinusulat ang value.',
              tools:
                'Ang mga button ng toolbar ayon sa pagkakasunod, may <code>|</code> sa pagitan ng mga grupo.',
              'label, labelledBy, describedBy': 'Pinapangalanan at inilalarawan ang content.',
              placeholder: 'Ipinapakita habang walang laman ito.',
              'readonly, disabled, invalid':
                'Ipinapakita ang content nang hindi ito ma-edit; ino-off ito; minamarkahan itong invalid.',
              labels: 'Bawat text na sinasabi nito, para maisalin.',
              run: 'Nagpapatakbo ng isang toolbar command.',
              'undo, redo, focus': 'Ina-undo, nire-redo, at inililipat ang focus sa text.',
            },
          },
          Helpers: {
            summary: 'Mga function para mag-convert ng mga dokumento.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Isinusulat ang isang dokumento bilang HTML o Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Binabasa ang HTML o Markdown papunta sa isang dokumento, at pinapanatili ang kayang ipakita ng editor.',
            },
          },
        },
        keyboard: [
          ['Ctrl + B, I o U', 'Bold, italic o underline. Sa mga Apple device, ⌘ sa halip na Ctrl.'],
          ['Ctrl + K', 'Nagdadagdag o nag-e-edit ng link.'],
          [
            'Ctrl + Alt + 1, 2 o 3',
            'Isang heading; ibinabalik ito ng Ctrl + Alt + 0 sa pagiging paragraph.',
          ],
          ['Ctrl + Shift + 7 o 8', 'Isang numbered o bulleted list.'],
          [
            'Tab at Shift + Tab sa list',
            'Nag-i-indent o nag-o-outdent; ginagawang paragraph ng Shift + Tab ang item na nasa pinakaitaas na level. Sa ibang lugar, lumalabas ang Tab sa editor.',
          ],
          ['Ctrl + Z at Ctrl + Shift + Z', 'Undo at redo.'],
          ['Left at right arrow sa toolbar', 'Lumilipat sa pagitan ng mga button nito.'],
        ],
        notes: [
          'Isang <code>textbox</code> ang content na may <code>aria-multiline</code>, na pinangalanan ng <code>label</code>, at nasa <code>aria-placeholder</code> ang placeholder nito.',
          'Isang WAI-ARIA toolbar ang toolbar, iisang tab stop: mga toggle button na may <code>aria-pressed</code> ang mga format, at sinasabi ng bawat button ang shortcut nito sa <code>aria-keyshortcuts</code> at sa tooltip nito.',
          'Ibinabalik ng isang toolbar command ang focus sa text, at bumabalik dito ang link dialog sa Escape. Hindi kailanman naiipit ang Tab: sa labas ng mga list, lumalabas ito sa editor.',
          'Walang Tab key ang mga touch screen: doon, may Indent at Outdent button ang default na toolbar, na naka-enable sa mga list. Naiiwan sa text ang focus kapag nag-tap ng toolbar button, kaya nananatiling bukas ang on-screen keyboard.',
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
      'browser-support': {
        title: 'Suporta sa mga browser',
        description:
          'Mga browser na sinusuportahan at tine-test ng Needless UI: mga version ng Chrome, Edge, Firefox at Safari, phone at touch screen, at ang wala sa lumang browser.',
        blocks: [
          {
            kind: 'p',
            html: 'Nakabatay ang Needless UI sa mga native element at sa mga bagong feature ng web platform, gaya ng Popover API. Sinusuportahan nito ang mga browser sa ibaba mula sa nakalistang version. Sa mas lumang mga version, hindi bumubukas ang mga menu, select at popover.',
          },
          { kind: 'h2', id: 'supported', text: 'Mga sinusuportahang browser' },
          {
            kind: 'table',
            caption: 'Mga pinakalumang version na sinusuportahan',
            head: ['Browser', 'Mula sa version', 'Kailangan para sa'],
            rows: [
              [
                'Chrome at Edge, sa computer at Android',
                '120',
                'Mga icon na iginuguhit gamit ang CSS mask, at <code>:dir()</code> para sa right-to-left na text',
              ],
              ['Firefox, sa computer at Android', '125', 'Ang Popover API'],
              ['Safari sa Mac', '17', 'Ang Popover API'],
              ['Lahat ng browser sa iPhone at iPad', 'iOS 17', 'Ang Popover API'],
              ['Samsung Internet browser', '25', 'Pareho sa Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Sinusundan ng ibang browser na nakabatay sa Chromium, gaya ng Opera at Brave, ang mga version ng Chrome. Kailangan ng Angular 22 mismo ang Chrome, Edge at Firefox 119 at ang Safari 17. Hindi sinusuportahan ang Internet Explorer at ang lumang Edge na hindi pa nakabatay sa Chromium.',
          },
          { kind: 'h2', id: 'tested', text: 'Mga tine-test na browser' },
          {
            kind: 'p',
            html: 'Sa bawat pagbabago, pinapatakbo ang mga test ng bawat component sa mga engine ng Chrome, Firefox at Safari. Bago ang isang release, sinusuri ang bawat page ng dokumentasyong ito sa bawat engine, sa computer at sa phone na may touch: kailangan nitong mag-load, mabuksan ang bawat menu at popup nito, magkasya sa screen at pumasa sa mga accessibility check.',
          },
          {
            kind: 'table',
            caption: 'Mga browser na ginagamit sa pag-test',
            head: ['Engine', 'Version', 'Tine-test sa'],
            rows: [
              [
                'Chromium (engine ng Chrome at Edge)',
                '153',
                'Computer, at Android phone na may touch',
              ],
              ['Firefox', '155', 'Computer, at touch screen na kasinlaki ng phone'],
              ['WebKit (engine ng Safari)', '26.6', 'Computer, at iPhone na may touch'],
              ['Safari sa iPhone', 'iOS 17.5 at 18.6', 'Ang iPhone simulator'],
            ],
          },
          {
            kind: 'p',
            html: 'Hindi isa-isang tine-test ang mga version sa pagitan ng pinakalumang sinusuportahan at ng mga tine-test: sinusuportahan ang mga ito dahil nasa kanila ang bawat feature na kailangan ng mga component.',
          },
          { kind: 'h2', id: 'newer', text: 'Mga extra sa mas bagong browser' },
          {
            kind: 'p',
            html: 'May ilang detalye na gumagamit ng mga feature na nasa mas bagong browser lang. Nilalaktawan ang mga ito ng ibang browser, at walang nasisira:',
          },
          {
            kind: 'table',
            caption: 'Mga detalyeng nangangailangan ng mas bagong browser',
            head: ['Detalye', 'Mga browser', 'Sa ibang browser'],
            rows: [
              [
                'May animation ang paglitaw at pagkawala ng mga popover, menu at dialog',
                'Chrome at Edge, Firefox 129, Safari 17.5',
                'Biglang lumilitaw at nawawala',
              ],
              [
                'Mga squircle na sulok (<code>corner-shape</code>)',
                'Chrome at Edge 139',
                'Mga bilog na sulok',
              ],
              [
                'Pagpili ng kulay mula saanman sa screen',
                'Chrome at Edge sa computer',
                'Walang eyedropper button',
              ],
              ['Pagpili ng buong folder sa dropzone', 'Mga browser sa computer', 'Mga file lang'],
              [
                'Unti-unting napupuno ang ring ng rotation control ng carousel',
                'Chrome at Edge, Firefox 128, Safari',
                'Biglang napupuno',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Mga phone at touch screen' },
          {
            kind: 'p',
            html: 'Gumagana sa touch ang bawat component. Sinusundan ng mga handle ng splitter, ng color area, ng mga gilid ng column at ng mga toast ang daliri nang hindi nag-i-scroll ang page, sina-swipe ang carousel gamit ang sariling scrolling ng browser, at napupulot ang isang event sa scheduler sa pamamagitan ng long press. Sa mga touch screen, hindi bababa sa 16px ang text ng mga field, kaya hindi nagzo-zoom in ang mga iPhone sa mga ito, at buo ang dating ng mga salita mula sa mga keyboard na bumubuo sa mga ito habang nagta-type, gaya ng mga Android keyboard.',
          },
          {
            kind: 'p',
            html: 'Walang hover sa mga touch screen, kaya pandagdag lang ang hovercard sa kung ano ang nasa page: huwag maglagay ng anumang mahalaga rito. Sa phone, gumagawa ng bagong linya ang Return key ng chat, at ang button nito ang nagpapadala.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Ang keyboard sa Safari' },
          {
            kind: 'p',
            html: 'Bilang default, sa pagitan lang ng mga text field at pop-up menu lumilipat ang Tab key sa Safari. Para maabot ang bawat button at link, i-on ang “Pindutin ang Tab para i-highlight ang bawat item sa webpage” (“Press Tab to highlight each item on a webpage”) sa Advanced settings ng Safari, o pindutin ang Option-Tab. Hindi rin inilalagay ng Safari ang focus sa isang button kapag na-click ito; binabawi ito ng mga component, kaya tuloy-tuloy ang paggamit ng keyboard pagkatapos ng click, gaya sa ibang browser.',
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
