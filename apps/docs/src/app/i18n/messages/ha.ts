import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Components na Angular masu sauƙin amfani ga kowa, masu karɓar jigogi, an gina su a kan elements na asali, design tokens na W3C da stylesheet ɗaya. Open source, lasisin MIT.',
    skipToContent: 'Tsallaka zuwa babban abun ciki',
    nav: {
      label: 'Babban menu',
      home: 'Shafin farko na Needless UI',
      components: 'Components',
      guides: 'Jagorori',
      github: 'GitHub',
      language: 'Harshe',
      theme: 'Jigo',
      themes: { system: 'Tsarin na’ura', light: 'Haske', dark: 'Duhu' },
    },
    footer: {
      license: 'An fitar da shi ƙarƙashin Lasisin MIT.',
      source: 'Code na tushe',
      built: 'An ƙera shi fiye da kima, an gina shi da kulawa.',
      legal: 'Sanarwar doka',
      privacy: 'Manufar sirri',
    },
    emergency: {
      label: 'KADA KU DANNA',
      cover: 'Ku ɗaga murfin kariya',
      button: 'Kada ku danna',
      armed: 'An ɗaga murfin. Don Allah ku sake tunani.',
      falling: 'An kunna matakan gaggawa…',
      fallen: 'Nauyi ya zama na dindindin yanzu. Ku sabunta shafin don sake gina sararin samaniya.',
      reduced: 'Tsarinku yana son rage motsi, don haka nauyi zai ci gaba da kashe. Kun yi sa’a.',
    },
  },

  home: {
    title: 'Needless UI · Components na Angular ga kowa, an ƙera su fiye da kima',
    description:
      'Needless UI laburaren open source ne na components na Angular: elements na asali, stylesheet ɗaya mara framework, design tokens na W3C, da WCAG 2.2 AA a ciki.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Components na UI, an ƙera su da kyau fiye da kima.',
    lead: 'Needless UI yana ba <strong>elements na asali</strong> salo da stylesheet ɗaya wanda bai dogara da framework ba, da kuma design tokens na W3C. Directives ɗinsa na Angular suna ƙara ɗabi’a daga Angular Aria, don haka kowane component yana da sauƙin amfani ga kowa tun daga nunawarsa ta farko.',
    getStarted: 'Fara',
    browse: 'Duba components',
    featuresTitle: 'Dalilin samuwarsa',
    features: [
      {
        title: 'Elements na asali da farko',
        text: '<code>&lt;button nuiButton&gt;</code> maɓalli ne na gaske. Fom, allon madannai da manhajojin karanta allo suna aiki saboda babu abin da ya lulluɓe shi.',
      },
      {
        title: 'Stylesheet ɗaya, kowane framework',
        text: 'Components CSS ne zalla a cikin cascade layers: Angular a yau, React nan gaba, HTML zalla a koyaushe.',
      },
      {
        title: 'CSS ɗinku ne ke rinjaye koyaushe',
        text: 'Komai yana cikin <code>@layer nui</code>, don haka salon da kuka rubuta da kanku yana rinjayar sa ba tare da <code>!important</code> ko faɗan specificity ba.',
      },
      {
        title: 'Sauƙin amfani ga kowa tun daga tushe',
        text: 'Ana duba kowane haɗin launuka biyu da WCAG 2.2 AA a lokacin samar da palette. An riga an kula muku da focus, forced colors da rage motsi.',
      },
      {
        title: 'Daidaitattun design tokens',
        text: 'Fayilolin token na W3C DTCG suna zama CSS custom properties, tare da jigon haske, jigon duhu da jigo a cikin jigo.',
      },
      {
        title: 'Angular na zamani',
        text: 'Signal inputs, zoneless, server rendering da entry point ɗaya ga kowane component, don haka manhajoji suna ɗaukar abin da suka shigo da shi kawai.',
      },
    ],
    codeTitle: 'Imports biyu, shi ke nan',
    codeText:
      'Ku ƙara package ɗin, ku shigo da stylesheet sau ɗaya, sannan ku yi amfani da components a cikin kowane standalone component.',
  },

  components: {
    title: 'Components',
    description:
      'Components na Needless UI don Angular: maɓallai, dialogs da menus masu sauƙin amfani ga kowa, da misalai masu aiki, bayanin API da tallafin allon madannai.',
    intro:
      'An gina kowane component a kan elements na asali, kuma an yi masa bayani da misalai masu aiki, API ɗinsa da yadda yake aiki da allon madannai.',
    tabsLabel: 'Sassan bayanai',
    tabs: { overview: 'Taƙaitawa', api: 'API', accessibility: 'Sauƙin amfani ga kowa' },
    sidenavLabel: 'Components',
    onThisPage: 'A wannan shafi',
    example: {
      showCode: 'Nuna code',
      hideCode: 'Ɓoye code',
      copy: 'Kwafa',
      copied: 'An kwafa',
      files: 'Fayilolin tushe',
    },
    api: {
      import: 'Shigo da shi',
      selector: 'Selector',
      exportAs: 'An fitar da shi a matsayin',
      members: 'Kaddarori',
      name: 'Suna',
      type: 'Iri',
      default: 'Na asali',
      description: 'Bayani',
      kinds: { input: 'Input', model: 'Hanya biyu', output: 'Output', method: 'Method' },
    },
    a11y: {
      keyboard: 'Aiki da allon madannai',
      key: 'Maɓalli',
      action: 'Abin da yake yi',
      notes: 'Bayanan sauƙin amfani ga kowa',
    },
    titles: {
      api: (name) => `API na ${name}`,
      accessibility: (name) => `Sauƙin amfani da ${name} ga kowa`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Component na maɓalli don Angular',
        summary: 'Ayyuka da mahaɗai, da salo a kan elements na button da anchor na asali.',
        description:
          'Directive na maɓalli na Angular mai sauƙin amfani ga kowa, don elements na button da anchor na asali: nau’o’i huɗu, tones uku, girma uku da tallafin mahaɗai.',
        apiDescription:
          'Bayanin API na maɓallin Needless UI: directive ɗin nuiButton, selector ɗinsa da inputs ɗinsa na variant, tone, size da disabled.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na maɓallin Needless UI: ma’anar asali, zoben focus, bambancin launi, girman wurin taɓawa da mahaɗai da aka kashe.',
        overview: [
          'Directive ɗin <code>nuiButton</code> yana ba <code>&lt;button&gt;</code> ko <code>&lt;a&gt;</code> na asali salo. Element ɗin yana riƙe ma’anarsa, aikinsa da allon madannai da kuma shigarsa cikin fom; directive ɗin yana nuna inputs ɗinsa ne kawai a kan data attributes da stylesheet ke nufa.',
          'Ku yi amfani da <code>&lt;button&gt;</code> don ayyuka, da <code>&lt;a&gt;</code> don kewayawa. Kamanninsu ɗaya ne, kuma dukansu suna goyon bayan <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Nau’o’i',
            text: 'Salon cika launi guda huɗu, daga mafi fice zuwa mafi natsuwa. Ku yi amfani da maɓallin solid ɗaya kawai a kowane shafi, don babban aikin shafin.',
          },
          tones: {
            title: 'Tones',
            text: 'Tone yana canza palette: accent don babban aiki, neutral don ayyukan gefe, danger don ayyukan da ke gogewa ko ɓata abu.',
          },
          sizes: {
            title: 'Girma',
            text: 'Tsayi uku: pixels 28, 36 da 44. Ko mafi ƙanƙanta ya wuce mafi ƙarancin girman wurin taɓawa na WCAG 2.2.',
          },
          links: {
            title: 'Mahaɗai da maɓallai da aka kashe',
            text: 'Ba za a iya kashe anchors ta hanyar asali ba, don haka mahaɗar da aka kashe tana samun <code>aria-disabled="true"</code> kuma ana toshe dannawarta, ko da tana da <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Yana ba <code>&lt;button&gt;</code> ko <code>&lt;a&gt;</code> na asali salon maɓalli.',
            members: {
              variant:
                'Salon cika launi: <code>solid</code>, <code>soft</code>, <code>outline</code> ko <code>ghost</code>.',
              tone: 'Palette na launi: <code>accent</code>, <code>neutral</code> ko <code>danger</code>.',
              size: 'Tsayi, padding da girman rubutu: <code>sm</code>, <code>md</code> ko <code>lg</code>.',
              disabled:
                'Yana kashe maɓallin. A kan anchors yana saita <code>aria-disabled</code> kuma yana hana kunnawa.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Yana kai focus kan maɓallin ko mahaɗar.'],
          ['Enter', 'Yana kunna maɓallin, ko yana buɗe mahaɗar.'],
          ['Space', 'Yana kunna maɓallin. A kan mahaɗai, yana gungura shafin (ɗabi’ar asali).'],
        ],
        notes: [
          'Sunan da ake sanarwa shi ne rubutun element ɗin. Maɓallai masu icon kaɗai suna buƙatar <code>aria-label</code>.',
          'Rubutu yana kaiwa bambancin launi na 4.5:1 a kowane nau’i, tone da jigo; mai samar da palette ne ke tabbatar da hakan.',
          'Zoben focus outline ne na 2px mai bambancin launi aƙalla 3:1 da shafin, a jigogin biyu.',
          '<code>&lt;button&gt;</code> da aka kashe yana fita daga jerin Tab. Mahaɗar da aka kashe tana ci gaba da karɓar focus, don masu amfani da manhajar karanta allo su same ta, kuma ana sanar da ita a matsayin wadda aka kashe.',
          'A yanayin forced colors, iyakar da ba ta da launi tana zama outline mai bayyane da launin tsarin.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Component na dialog don Angular',
        summary: 'Tagar modal a kan element ɗin dialog na asali, inda burauza ke kula da focus.',
        description:
          'Dialog na Angular mai sauƙin amfani ga kowa a kan element ɗin dialog na asali: focus na modal, rufewa da Escape, ƙimar dawowa da rufewa ta danna bango.',
        apiDescription:
          'Bayanin API na dialog ɗin Needless UI: nuiDialog mai binding na open ta hanya biyu, girma, ƙimar dawowa, da sassan take, bayani da rufewa.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na dialog ɗin Needless UI: focus na modal, Escape, dawowar focus da abun ciki mai lakabi.',
        overview: [
          'Directive ɗin <code>nuiDialog</code> yana mayar da <code>&lt;dialog&gt;</code> na asali ya zama dialog na Needless UI. Burauza ne ke samar da ɗabi’ar modal: shafin da ke baya ba ya aiki, focus yana zama a ciki, Escape yana rufe shi kuma focus yana komawa kan abin da ya buɗe shi.',
          'Ku haɗa <code>[(open)]</code> da signal, kuma ku ba maɓallan rufewa ƙima da <code>nuiDialogClose="…"</code> don ku san yadda aka rufe dialog ɗin.',
        ],
        examples: {
          confirm: {
            title: 'Tabbatarwa',
            text: 'Tabbatarwa kafin aikin da ke ɓata abu. Zaɓin da ba shi da haɗari yana da <code>autofocus</code>, kuma ƙimar da aka zaɓa tana zuwa ta <code>(closed)</code>.',
          },
          form: {
            title: 'Fom a cikin dialog',
            text: 'Dialog na iya ɗaukar kowane irin abun ciki. A nan filin farko yana karɓar focus idan dialog ɗin ya buɗe.',
          },
          dismissible: {
            title: 'Ba a iya watsar da shi',
            text: 'Da <code>[dismissible]="false"</code>, ba a kula da Escape da danna bango, don haka dole mai amfani ya zaɓi ɗaya daga cikin zaɓuɓɓukan.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Yana mayar da <code>&lt;dialog&gt;</code> na asali ya zama dialog na Needless UI.',
            members: {
              open: 'Ko dialog ɗin a buɗe yake. Ku haɗa shi da <code>[(open)]</code>.',
              modal:
                'Yana buɗewa a matsayin modal, da bango, kuma shafin da ke bayansa ba ya aiki.',
              dismissible: 'Ko Escape da danna bango suna rufe dialog ɗin.',
              size: 'Iyakar faɗi: <code>sm</code> (24rem), <code>md</code> (32rem) ko <code>lg</code> (44rem).',
              closed:
                'Yana fitar da ƙimar dawowa duk lokacin da dialog ɗin ya rufe. Ba ta da komai idan an watsar da dialog ɗin.',
              close: 'Yana rufe dialog ɗin, da ƙimar dawowa idan an so.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Taken dialog ɗin. Yana samun id kuma ya zama <code>aria-labelledby</code> na dialog ɗin.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Gajeren bayani, wanda <code>aria-describedby</code> na dialog ɗin ke nuni zuwa gare shi.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Layin maɓallai a ƙasan dialog ɗin, an jera su zuwa ƙarshe.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Yana rufe dialog ɗin da ke kewaye da shi idan an danna shi.',
            members: {
              nuiDialogClose:
                'Ƙimar da dialog ɗin ke rufewa da ita, wadda <code>(closed)</code> ke fitarwa.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Yana kai focus kan element na gaba a cikin dialog ɗin.'],
          ['Shift + Tab', 'Yana kai focus kan element na baya a cikin dialog ɗin.'],
          ['Escape', 'Yana rufe dialog ɗin, sai dai idan ba a iya watsar da shi.'],
        ],
        notes: [
          'Buɗewa da <code>showModal()</code> yana ba dialog ɗin <code>role="dialog"</code> da ma’anar modal, kuma yana hana sauran shafin aiki.',
          'An haɗa take da bayani ta ids da aka samar, don haka manhajojin karanta allo suna sanar da su duka biyu idan dialog ɗin ya buɗe.',
          'Focus na farko yana zuwa kan element mai <code>autofocus</code>, ko kan element na farko da zai iya karɓar focus. Don tabbatarwa kafin aikin da ke ɓata abu, ku sa <code>autofocus</code> a kan zaɓin da ba shi da haɗari.',
          'Idan dialog ɗin ya rufe, focus yana komawa kan element ɗin da ya buɗe shi.',
          'Burauzoji na iya rufe dialog da ba a iya watsar da shi bayan an danna Escape sau da yawa ba tare da wani mu’amala daga mai amfani ba, don haka koyaushe ku samar da hanyar fita a fili.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Component na menu don Angular',
        summary:
          'Jerin ayyuka da ke bayyana a sama, tare da ƙananan menu, abubuwan da ake iya yi wa alama da cikakken tallafin allon madannai.',
        description:
          'Menu na Angular mai sauƙin amfani ga kowa a kan Angular Aria: allon madannai, typeahead, ƙananan menu, abubuwan checkbox da radio, da matsayi a viewport.',
        apiDescription:
          'Bayanin API na menu ɗin Needless UI: nuiMenuTrigger, nuiMenu da nuiMenuItem, tare da ƙimomi, tones, ƙananan menu da yanayin alama.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na menu ɗin Needless UI: maɓallan kibiya, typeahead, ƙananan menu, Escape da dawowar focus.',
        overview: [
          'Menu yana nuna jerin ayyuka idan aka kunna trigger ɗinsa. Ɗabi’arsa ta fito ne daga tsarin menu na Angular Aria; Needless UI yana ƙara salo, yana nuna menu ɗin a matsayin popover a saman shafin kuma yana ajiye shi a cikin viewport.',
          'Ku ba <code>[nuiMenuTrigger]</code> reference ɗin <code>ngMenu</code> na menu ɗin, ku ba kowane abu <code>value</code> na musamman, sannan ku amsa <code>(selected)</code> a kan kowane abu ko <code>(itemSelected)</code> a kan menu ɗin.',
        ],
        examples: {
          actions: {
            title: 'Ayyuka',
            text: 'Menu na ayyuka mai alamun gajerun hanyoyi, layin rabewa da abu mai haɗari.',
          },
          submenu: {
            title: 'Ƙananan menu',
            text: 'Ku haɗa abu da <code>nuiMenu</code> na ciki ta <code>[submenu]</code>. Yana buɗewa idan linzamin kwamfuta ya wuce a kansa, ko da maɓallin kibiyar dama.',
          },
          checkable: {
            title: 'Abubuwan checkbox da radio',
            text: 'Ku saita <code>role</code> kuma ku haɗa <code>[checked]</code>. Menu ɗin yana nuna alamar kuma yana sanar da yanayin.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Yana buɗe menu. Yawanci ana sa shi a kan <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Menu ɗin da za a buɗe: reference ɗin <code>ngMenu</code> na <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Menu na abubuwa, da ake nunawa a matsayin popover kusa da trigger ɗinsa. Export ɗinsa na <code>ngMenu</code> shi ne menu na Angular Aria da triggers da ƙananan menu ke karɓa.',
            members: {
              wrap: 'Ko maɓallan kibiya suna komawa daga abu na ƙarshe zuwa na farko.',
              typeaheadDelay: 'Milliseconds kafin binciken typeahead ya sake farawa.',
              disabled: 'Yana kashe dukan menu ɗin.',
              itemSelected:
                'Yana fitar da ƙimar abin da aka zaɓa. A kan babban menu yana aiki har ma ga abubuwan ƙananan menu.',
            },
          },
          NuiMenuItem: {
            summary: 'Abu a cikin <code>nuiMenu</code>.',
            members: {
              value:
                'Yana bambanta abin. Dole ne ya zama na musamman a dukan menu ɗin, har da ƙananan menu.',
              disabled:
                'Yana kashe abin. Ana iya kaiwa gare shi da maɓallan kibiya, amma ba za a iya zaɓar sa ba.',
              submenu: '<code>nuiMenu</code> na ciki da wannan abu ke buɗewa.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> ko <code>menuitemradio</code>.',
              checked: 'Yanayin alama na abin checkbox ko radio.',
              tone: '<code>danger</code> don ayyukan da ke ɓata abu.',
              searchTerm:
                'Rubutun da typeahead ke kwatantawa. Idan ba a saita ba, lakabin abin ne.',
              selected:
                'Yana fitar da ƙimar abin idan an zaɓe shi da linzamin kwamfuta ko allon madannai.',
            },
          },
          NuiMenuSeparator: { summary: 'Layi tsakanin rukunonin abubuwa.', members: {} },
          NuiMenuShortcut: {
            summary: 'Alamar gajeriyar hanyar allon madannai, an jera ta zuwa ƙarshen abu.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter ko Space',
            'A kan trigger: yana buɗe menu a kan abu na farko. A kan abu: yana zaɓar sa, ko yana buɗe ƙaramin menu nasa.',
          ],
          [
            'Kibiyar ƙasa',
            'A kan trigger: yana buɗe menu a kan abu na farko. A cikin menu: yana matsawa zuwa abu na gaba.',
          ],
          [
            'Kibiyar sama',
            'A kan trigger: yana buɗe menu a kan abu na ƙarshe. A cikin menu: yana matsawa zuwa abu na baya.',
          ],
          ['Home da End', 'Yana matsawa zuwa abu na farko ko na ƙarshe.'],
          [
            'Kibiyar dama',
            'Yana buɗe ƙaramin menu kuma yana matsawa zuwa abu na farko a cikinsa (kibiyar hagu a rubutu daga dama zuwa hagu).',
          ],
          [
            'Kibiyar hagu',
            'Yana rufe ƙaramin menu kuma yana komawa kan abin da ya buɗe shi (kibiyar dama a rubutu daga dama zuwa hagu).',
          ],
          ['Escape', 'Yana rufe menu ɗin kuma yana mayar da focus kan trigger.'],
          [
            'Haruffa',
            'Yana matsawa zuwa abu na gaba wanda lakabinsa ya fara da rubutun da aka shigar.',
          ],
        ],
        notes: [
          'Trigger yana samun <code>aria-haspopup</code>, <code>aria-expanded</code> da <code>aria-controls</code>; menu ɗin da abubuwansa suna samun matsayinsu na ARIA daga Angular Aria.',
          'Abin da aka haskaka yana da cikakken launin bango mai bambancin rubutu aƙalla 4.5:1, kuma shi ne alamar focus. A yanayin forced colors yana samun outline na haskakawa na tsarin.',
          'Abubuwan da ake iya yi wa alama suna sanar da yanayinsu ta <code>aria-checked</code>.',
          'Zaɓar abu yana rufe menu ɗin kuma yana mayar da focus kan trigger. Matsar da focus waje da trigger da menu ɗin ma yana rufe shi.',
          'Tsayin kowane abu aƙalla pixels 28 ne, sama da mafi ƙarancin girman wurin taɓawa na WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Jagorori',
    items: {
      'getting-started': {
        title: 'Farawa',
        description:
          'Ku shigar da Needless UI a manhajar Angular 22: ku ƙara packages, ku shigo da stylesheet, ku yi amfani da component ɗinku na farko cikin ’yan mintuna.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI yana aiki da Angular 22. Components directives ne na standalone, don haka babu modules da za a shigo da su.',
          },
          { kind: 'h2', id: 'install', text: 'Shigarwa' },
          {
            kind: 'p',
            html: 'Ku ƙara package na Angular tare da Angular Aria da CDK, waɗanda ke samar da aikin allon madannai da sauƙin amfani ga kowa. Stylesheet yana zuwa tare da shi.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Shigo da salo' },
          {
            kind: 'p',
            html: 'Ku shigo da stylesheet sau ɗaya a cikin <code>src/styles.css</code>. Ya ƙunshi design tokens da kowane component.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Komai yana cikin <code>@layer nui</code>. Idan manhajarku tana da resets na gaba ɗaya kamar <code>a { color: inherit }</code>, ku sa su a cikin layer da aka ayyana kafin <code>nui</code> don kada su rinjayi components.',
          },
          { kind: 'h2', id: 'use', text: 'Amfani da component' },
          {
            kind: 'p',
            html: 'Ku shigo da directives da kuke buƙata daga entry points ɗinsu, kuma ku ƙara su a cikin <code>imports</code> na component ɗinku.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Matakai na gaba' },
          {
            kind: 'p',
            html: 'Ku duba <a href="/components">components</a> don ganin misalai masu aiki, ko ku karanta <a href="/guides/theming">jagorar jigogi</a> don daidaita su da tambarinku.',
          },
        ],
      },
      theming: {
        title: 'Jigogi',
        description:
          'Ku tsara jigon Needless UI da CSS custom properties: yanayin haske da duhu, jigo a cikin jigo, sauya tokens da palette na tambarinku da aka duba bambancinsa.',
        blocks: [
          {
            kind: 'p',
            html: 'Kowane zaɓin kamanni CSS custom property ne da aka samar daga design tokens na W3C. Components suna amfani da semantic tokens kawai, kamar <code>--nui-color-accent-solid</code>, don haka canza token ɗaya yana sauya salon kowane component da ke amfani da shi.',
          },
          { kind: 'h2', id: 'modes', text: 'Haske da duhu' },
          {
            kind: 'p',
            html: 'A asali, zaɓin tsarin aiki na na’urar ne ke zaɓar yanayin. Ku kafa yanayi a kan kowane element da <code>data-nui-theme</code>, kuma ku sa jigo a cikin jigo yadda kuke so.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Sauya tokens' },
          {
            kind: 'p',
            html: 'Tokens suna cikin <code>@layer nui</code>, don haka CSS na yau da kullum a manhajarku yana rinjayar su. Ku saita su a kan <code>:root</code> don dukan manhajar, ko a kan kowane element don wani sashe nata kawai.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Palette na tambarinku' },
          {
            kind: 'p',
            html: 'Ana samar da ma’aunan launuka ne ta atomatik. Ku canza hue a cikin <code>packages/tokens/scripts/palette.ts</code> sannan ku sake samarwa: script ɗin yana daidaita kowane launi zuwa sRGB kuma yana sake duba bambancin launi na kowane haɗin rubutu da bango.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Ba a sami shafin ba',
    description:
      'Wannan shafi babu shi. Ku duba components na Needless UI ko ku fara daga shafin farko.',
    text: 'Wannan shafi babu shi, ko an matsar da shi.',
    home: 'Je zuwa shafin farko',
    components: 'Duba components',
  },

  legal: {
    translationNote:
      'An samar da wannan fassarar ne don sauƙaƙawa; idan akwai bambanci, rubutun Turanci ne ke da rinjaye.',
    labels: { name: 'Suna', address: 'Adireshi', email: 'Imel', uid: 'UID', vat: 'Lambar VAT' },
    notice: {
      title: 'Sanarwar doka',
      description:
        'Wanda ke gudanar da needlessui.com: sunan mai gudanarwa, adireshin gidan waya da imel, tare da bayanan rajistar kasuwanci da na VAT.',
      operator: 'Mai gudanarwa',
      legalForm: 'kasuwancin mutum ɗaya',
      country: 'Suwizalan',
      register: 'Rajistar kasuwanci',
      registerEntry: 'An yi masa rajista a rajistar kasuwanci ta Kanton na Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Alhaki' },
        {
          kind: 'p',
          html: 'An rubuta wannan gidan yanar gizo da kulawa, amma ba tare da wani tabbaci cewa bayanansa daidai ne, cikakku ne ko na zamani ba. Gidajen yanar gizon da aka haɗa suna wajen ikonmu; masu gudanar da su ne ke da alhakin abubuwan da ke cikinsu.',
        },
        { kind: 'h2', id: 'license', text: 'Lasisi' },
        {
          kind: 'p',
          html: 'Needless UI, har da wannan gidan yanar gizo, open source ne ƙarƙashin <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">Lasisin MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Manufar sirri',
      description:
        'Yadda needlessui.com ke sarrafa bayanan mutum: babu cookies, babu nazari, babu bibiya. Abin da mai masauki ke sarrafawa idan kun ziyarta, da haƙƙoƙinku.',
      updated: 'An sabunta a ƙarshe: 24 ga Satumba, 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Wannan manufa tana bayyana irin bayanan mutum da ake sarrafawa idan kun ziyarci www.needlessui.com, da kuma haƙƙoƙinku. A taƙaice: gidan yanar gizon ba ya amfani da cookies, nazari ko bibiya, kuma ba zai taɓa neman bayananku na kai ba.',
        },
        { kind: 'h2', id: 'controller', text: 'Wanda ke da alhaki' },
        {
          kind: 'p',
          html: 'Mai gudanarwa da aka ambata a cikin <a href="/legal">sanarwar doka</a>, Angelo Lamonaca. Tuntuɓa: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Masauki' },
        {
          kind: 'p',
          html: 'Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Amurka ne ke karɓar baƙuncin gidan yanar gizon. Idan kun buɗe shafi, burauzarku tana aika bayanan fasaha da kowane gidan yanar gizo ke karɓa: adireshin IP ɗinku, kwanan wata da lokaci, shafin da aka nema, shafin da kuka fito daga gare shi da user agent na burauzarku. Vercel yana sarrafa waɗannan bayanai a madadinmu don isar da gidan yanar gizon da kiyaye tsaronsa, kuma yana ajiye su ne kawai muddin hakan yake buƙata. Yana iya yin hakan a Amurka; Vercel yana da takardar shaida ƙarƙashin EU-U.S. Data Privacy Framework, UK Extension ɗinsa da Swiss-U.S. Data Privacy Framework. Ku duba <a href="https://vercel.com/legal/privacy-policy">sanarwar sirri ta Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Inda GDPR ke aiki, tushen doka shi ne halastaccen muradinmu na gudanar da gidan yanar gizo mai tsaro (Sashe na 6(1)(f) na GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookies da ma’ajiyar gida' },
        {
          kind: 'p',
          html: 'Gidan yanar gizon ba ya saka cookies. Idan kun zaɓi jigon haske ko na duhu, ma’ajiyar gida ta burauzarku tana tuna zaɓin don ziyararku ta gaba. Zaɓin ba ya taɓa barin na’urarku; ku koma kan “Tsarin na’ura” ko ku goge bayanan gidan yanar gizon don cire shi.',
        },
        { kind: 'h2', id: 'tracking', text: 'Babu bibiya' },
        {
          kind: 'p',
          html: 'Babu nazari, tallace-tallace, plugins na kafofin sada zumunta, abubuwan wasu da aka saka, ko fonts na waje. Mahaɗai zuwa GitHub da npm suna kaiwa ga gidajen yanar gizo masu nasu manufofin sirri.',
        },
        { kind: 'h2', id: 'rights', text: 'Haƙƙoƙinku' },
        {
          kind: 'p',
          html: 'Kuna iya tambayar waɗanne bayananku na kai ake sarrafawa, kuma ku nemi a gyara su ko a goge su. Inda GDPR ke aiki, kuna kuma iya ƙin amincewa da sarrafawar, ku nemi a taƙaita ta, kuma ku karɓi bayananku a tsarin da za a iya ɗauka zuwa wani wuri. Ku rubuta zuwa {email}. Kuna kuma iya kai ƙara ga hukumar sa ido: a Suwizalan, Kwamishinan Tarayya na Kare Bayanai da Samun Bayanai (FDPIC); a EU, hukumar ƙasarku.',
        },
        { kind: 'h2', id: 'changes', text: 'Sauye-sauye' },
        {
          kind: 'p',
          html: 'Wannan manufa tana canzawa idan gidan yanar gizon ya canza, misali idan ya koma wani sabon mai masauki. Kwanan watan da ke ƙasa yana nuna sigar da ake amfani da ita yanzu.',
        },
      ],
    },
  },
};
