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
    toaster: { label: 'Sanarwa (Alt+T)', close: 'Watsar' },
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
        title: 'Keɓancewa fiye da kima',
        text: 'Springs, tasirin dannawa, yanayin shigowa, siffa da girman kusurwoyi, da sarari: <a href="/guides/customization">attribute ɗaya</a> ga dukan manhaja, ko input ɗaya ga kowane component, duka a kan daidaitattun design tokens na W3C.',
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
      members: 'Kadarori',
      name: 'Suna',
      type: 'Iri',
      default: 'Na asali',
      description: 'Bayani',
      kinds: {
        input: 'Input',
        model: 'Hanya biyu',
        output: 'Output',
        method: 'Method',
        property: 'Kadara',
      },
      texts:
        'Kowane rubutu da yake nunawa ko sanarwa shi ma input ne, don haka za ku iya fassara shi:',
      customization: {
        note: 'Inputs na keɓancewa da ba ku saita ba suna bin attribute na <code>data-nui-*</code> mafi kusa. Ku duba <a href="/guides/customization">jagorar keɓancewa</a>.',
        members: {
          motion:
            'Spring ɗin da yake motsi da shi: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> ko <code>none</code>.',
          spring:
            'Kowane spring, a matsayin <code>{ stiffness, damping, mass }</code>, da ake mayar da shi CSS a lokacin aiki. Yana rinjayar <code>motion</code>.',
          press:
            'Abin da yake yi yayin da aka danna shi aka riƙe: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> ko <code>none</code>.',
          enter:
            'Yadda yake bayyana: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> ko <code>none</code>.',
          corners:
            'Siffar kusurwoyinsa: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> ko <code>square</code>.',
          radius:
            'Girman kusurwoyinsa: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> ko <code>full</code>.',
          density:
            'Yawan sararin da yake ɗauka: <code>compact</code>, <code>regular</code> ko <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Tasirin dannawa',
            text: 'Ku danna kowane maɓalli ku riƙe. <code>press</code> yana saita abin da maɓalli ke yi yayin da aka danna shi aka riƙe, <code>motion</code> kuma yana saita spring ɗin da yake komawa da shi. <code>data-nui-press</code> a kan kowane element yana saita shi ga duk abin da ke cikinsa.',
          },
          shapes: {
            title: 'Siffa da girman kusurwoyi, da sarari',
            text: '<code>corners</code> yana canza siffar kusurwoyi, <code>radius</code> girmansu, <code>density</code> kuma yawan sararin da maɓalli ke ɗauka, amma maɓallin ba ya taɓa yin ƙasa da girman wurin taɓawa na pixels 24. Burauzoji marasa <code>corner-shape</code> suna zana kusurwoyi a zagaye.',
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
          entrances: {
            title: 'Yanayin shigowa',
            text: 'Kowane maɓalli yana buɗe dialog guda ɗaya, amma da preset na <code>enter</code> dabam, tare da spring na <code>bouncy</code>. Ko ta yaya ya shigo, yana fita ne ta hanyar dusashewa cikin sauri.',
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
          entrances: {
            title: 'Yanayin shigowa da springs',
            text: 'Kowane menu yana haɗa preset na <code>enter</code> da spring na <code>motion</code>, kuma yana girma daga gefen da yake buɗewa a kai. Ƙananan menu suna gadar duka biyun.',
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

      avatar: {
        name: 'Avatar',
        title: 'Component na avatar don Angular',
        summary: 'Hoton mutum, ko haruffan farko na sunansa a kan launin da yake nasa koyaushe.',
        description:
          'Avatar na Angular: haruffan farko na suna idan babu hoto, launi tabbatacce ga kowane suna, ɗigon yanayi da rukunoni, duka a bayyane a kowane jigo.',
        apiDescription:
          'Bayanin API na avatar ɗin Needless UI: nuiAvatar mai suna, hoto, girma, siffa da yanayi, da kuma nuiAvatarGroup.',
        a11yDescription:
          'Sauƙin amfani na avatar ɗin Needless UI: matsayi da sunan hoto, avatars na ado, da haruffan farko masu bambancin launi na 4.5:1.',
        overview: [
          'Component ɗin <code>nuiAvatar</code> yana nuna hoto, ko haruffan farko na sunan mutumin idan babu hoto ko hoton ya kasa lodawa. Haruffan suna zaune a kan launin da aka lissafa daga sunan, don haka mutum ɗaya yana riƙe launi ɗaya a ko’ina.',
          'Ana taƙaita haske da chroma na kowane hue ta yadda farin haruffan farko za su ci gaba da bambancin launi sama da 4.5:1, komai sunan da jigon.',
        ],
        examples: {
          people: {
            title: 'Haruffan farko, hotuna da yanayi',
            text: 'Idan babu <code>src</code>, haruffan farko da launin suna fitowa daga <code>name</code>. <code>status</code> yana ƙara ɗigon yanayi.',
          },
          group: {
            title: 'Rukunoni, girma da siffofi',
            text: '<code>nuiAvatarGroup</code> yana jera avatars a layi ɗaya, suna ɗan hawa kan juna. <code>size</code> yana karɓar <code>sm</code>, <code>md</code> ko <code>lg</code>, kuma <code>shape="square"</code> ya dace da ƙungiyoyi da manhajoji.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Hoto ko haruffan farko, mai ɗauke da sunan mutumin.',
            members: {
              name: 'Sunan mutumin. Daga gare shi ne sunan da ake sanarwa, haruffan farko da launin ke fitowa.',
              src: 'URL na hoton. Idan ya kasa lodawa, haruffan farko ne ke bayyana a maimakonsa.',
              size: 'Girma: <code>sm</code>, <code>md</code> ko <code>lg</code>.',
              shape: '<code>circle</code> ko <code>square</code>.',
              status:
                'Ɗigon yanayi: <code>online</code>, <code>away</code>, <code>busy</code> ko <code>offline</code>.',
              label:
                'Sunan da ake sanarwa wanda ya faɗi fiye da sunan kawai, kamar “Ada Lovelace, tana kan layi”.',
              decorative:
                'Yana ɓoye avatar ɗin daga fasahohin taimako, don avatars da ke kusa da sunan da ake gani.',
            },
          },
          NuiAvatarGroup: {
            summary: 'Layin avatars masu hawa kan juna. Ku ba shi suna da <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar hoto ne (<code>role="img"</code>) mai ɗauke da sunan mutumin. Idan yana kusa da sunan mutumin da ake gani, ku saita <code>decorative</code> don kada manhajojin karanta allo su karanta sunan sau biyu.',
          'Ɗigon yanayi ana ganinsa ne kawai. Idan yana da muhimmanci, ku sa shi a cikin <code>label</code>.',
          'Haruffan farko suna riƙe bambancin launi aƙalla 4.5:1 a kan kowane launi da aka samar.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Component na breadcrumbs don Angular',
        summary: 'Jerin shafukan da ke kaiwa zuwa shafin da ake ciki.',
        description:
          'Breadcrumbs na Angular masu sauƙin amfani ga kowa a kan nav da jeri na asali: masu raba CSS da ke juyawa a rubutun dama zuwa hagu, da gungura dogon jeri.',
        apiDescription:
          'Bayanin API na breadcrumbs ɗin Needless UI: directive ɗin nuiBreadcrumbs da lakabin landmark ɗinsa.',
        a11yDescription:
          'Sauƙin amfani na breadcrumbs ɗin Needless UI: landmark na kewayawa, ma’anar jeri, shafin da ake ciki da girman wuraren taɓawa.',
        overview: [
          'Breadcrumbs suna nuna inda shafi yake a cikin gidan yanar gizo. Directive ɗin <code>nuiBreadcrumbs</code> yana ba <code>&lt;nav&gt;</code> na asali da jerinsa salo; abu na ƙarshe shi ne shafin da ake ciki, mai alamar <code>aria-current="page"</code>.',
          'Jerin da ya fi container ɗinsa tsawo yana gungurawa gefe maimakon ya sauka zuwa sabon layi. Yana farawa a gungure har ƙarshe, kuma gefunansa suna dusashewa inda akwai ƙarin abin gani.',
        ],
        examples: {
          trail: {
            title: 'Jerin shafuka',
            text: 'Mahaɗai zuwa shafukan da ke sama, sannan shafin da ake ciki a matsayin rubutu zalla mai <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Jeri masu tsawo',
            text: 'A cikin ƙunƙuntaccen container jerin yana gungurawa, kuma yana farawa da shafin da ake ciki a bayyane.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Yana ba <code>&lt;nav&gt;</code> da jerinsa salon breadcrumbs.',
            members: { label: 'Sunan da ake sanarwa na landmark ɗin kewayawa.' },
          },
        },
        keyboard: [['Tab', 'Yana matsawa zuwa mahaɗa ta gaba a cikin jerin.']],
        notes: [
          'Landmark ne na kewayawa mai jeri na yau da kullum, don haka manhajojin karanta allo suna sanar da yawan shafukan da ke cikin jerin.',
          'Ana zana masu rabewa da CSS, don haka ba a karanta su da murya, kuma suna juyawa a rubutun dama zuwa hagu.',
          'Tsayin kowace mahaɗa aƙalla pixels 24 ne.',
        ],
      },

      empty: {
        name: 'Empty state',
        title: 'Component na empty state don Angular',
        summary: 'Abin da za a nuna idan babu abin nunawa, da abin da za a yi game da hakan.',
        description:
          'Empty state na Angular mai hoto, take, gajeren bayani da ayyuka, tare da hotuna huɗu da aka gina a ciki waɗanda ke shawagi a hankali.',
        apiDescription:
          'Bayanin API na empty state ɗin Needless UI: nuiEmpty da sassansa na media, take, bayani da ayyuka.',
        a11yDescription:
          'Sauƙin amfani na empty state ɗin Needless UI: hotunan ado, headings masu ma’ana da rage motsi.',
        overview: [
          'Empty state yana maye gurbin jeri, tebur ko shafin da har yanzu babu komai a cikinsa. Yana bayyana dalili, kuma yana ba da mataki na gaba.',
          'Sashen media yana karɓar hotonku, ko yana zana ɗaya daga cikin hotunan da aka gina a ciki: <code>search</code>, <code>inbox</code>, <code>files</code> ko <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Babu sakamako',
            text: 'Take da ke faɗin abin da ya faru, layin taimako, da ayyukan da ke nuna hanyar fita.',
          },
          pictures: {
            title: 'Hotunan da aka gina a ciki',
            text: 'Ku saita <code>illustration</code> a kan <code>nuiEmptyMedia</code>. Hotunan suna bin jigo kuma suna shawagi sai dai idan an rage motsi.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Container ɗin: ginshiƙi a tsakiya.', members: {} },
          NuiEmptyMedia: {
            summary: 'Hoton, a ɓoye daga fasahohin taimako.',
            members: {
              illustration:
                'Hoton da aka gina a ciki: <code>search</code>, <code>inbox</code>, <code>files</code> ko <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Take. Ku yi amfani da matakin heading da ya dace da shafin.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Layin bayani.', members: {} },
          NuiEmptyActions: { summary: 'Layin maɓallai.', members: {} },
        },
        keyboard: [],
        notes: [
          'Hoton na ado ne (<code>aria-hidden</code>): take da bayani ne ke ɗauke da saƙon.',
          'Ku yi amfani da heading don take, a matakin da ya dace da tsarin shafin.',
          'Hotunan da aka gina a ciki suna daina shawagi idan mai amfani ya fi son rage motsi.',
        ],
      },

      'number-field': {
        name: 'Number field',
        title: 'Component na filin lamba don Angular',
        summary: 'Filin shigar da lamba mai maɓallan ƙari da ragi, a tsarin rubutun kowane yanki.',
        description:
          'Filin lamba na Angular mai sauƙin amfani ga kowa: spinbutton mai maɓallan mataki, matakai da allon madannai, min da max, da tsarin kuɗi, kaso da ma’auni.',
        apiDescription:
          'Bayanin API na filin lamba na Needless UI: nuiNumberField, nuiNumberInput mai min, max, step da format, da nuiNumberStep.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na filin lamba na Needless UI: matsayin spinbutton, maɓallan kibiya da na shafi, da maɓallan mataki.',
        overview: [
          'Filin lamba filin rubutu ne da ke riƙe lamba. Yana nuna lambar a tsarin yankin, yana karanta rubutun da aka shigar a tsari ɗaya, kuma idan focus ya bar shi yana daidaita ta zuwa <code>step</code> mafi kusa tsakanin <code>min</code> da <code>max</code>.',
          'Yana karanta lambobi da alamomin rabewa na asali ma: lambobin Larabci-Indiya, na Farisa da na Devanagari, sarari da ɗigo a matsayin masu raba rukuni, da kowace alamar ragi. Idan aka danna maɓallin mataki aka riƙe, yana maimaitawa, yana ƙara sauri.',
        ],
        examples: {
          guests: {
            title: 'Maɓallan ƙari da ragi',
            text: 'Maɓalli a kowane gefe, wanda ke kashewa a <code>min</code> da <code>max</code>. Maɓallan kibiya ma suna canza ƙimar mataki-mataki.',
          },
          formats: {
            title: 'Kuɗi da kaso',
            text: 'Ku ba <code>format</code> zaɓuɓɓukan <code>Intl.NumberFormat</code>, da kuma <code>locale</code>. Ƙimar tana zama lamba zalla.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Yana haɗa filin da maɓallan matakinsa.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Filin rubutu da ke riƙe lamba, a matsayin spinbutton na ARIA.',
            members: {
              value: 'Lambar, ko <code>null</code> idan babu komai. Yana aiki da fom ma.',
              min: 'Ƙimar mafi ƙanƙanta da aka yarda da ita.',
              max: 'Ƙimar mafi girma da aka yarda da ita.',
              step: 'Yawan canjin da mataki ɗaya ke yi wa ƙimar. Idan focus ya bar filin, ƙimar tana daidaita zuwa gare shi.',
              format:
                "Zaɓuɓɓukan <code>Intl.NumberFormat</code>, kamar <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Yankin (locale) da ake amfani da shi wajen tsara lambobi da karanta su.',
              disabled: 'Yana kashe filin da maɓallansa.',
              stepBy:
                'Yana ƙara ƙimar (idan lambar ta fi sifili) ko ya rage ta (idan ta gaza sifili) da adadin matakai.',
            },
          },
          NuiNumberStep: {
            summary: 'Maɓallin mataki. Idan aka riƙe shi, yana maimaitawa.',
            members: {
              nuiNumberStep:
                '<code>1</code> yana hawa mataki ɗaya, <code>-1</code> kuma yana sauka mataki ɗaya.',
              label: 'Sunan da ake sanarwa. Idan ba a saita ba, “Increase” ko “Decrease” ne.',
            },
          },
        },
        keyboard: [
          ['Kibiyar sama da ta ƙasa', 'Suna hawa ko sauka da ƙimar mataki ɗaya.'],
          ['Page Up da Page Down', 'Suna tafiya matakai goma.'],
          ['Home da End', 'Suna zuwa mafi ƙanƙanta ko mafi girma.'],
          ['Enter', 'Yana tabbatar da abin da aka rubuta.'],
        ],
        notes: [
          'Filin <code>spinbutton</code> ne mai <code>aria-valuenow</code>, <code>aria-valuemin</code> da <code>aria-valuemax</code>, kuma ƙimar da aka tsara tana cikin <code>aria-valuetext</code>.',
          'Maɓallan mataki ba sa cikin jerin Tab, tunda maɓallan allon madannai suna yin aiki ɗaya, amma suna da suna kuma an haɗa su da filin ta <code>aria-controls</code>.',
          'Ku ba filin lakabi da <code>aria-label</code> ko <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'OTP input',
        title: 'Filin OTP da lambar tabbatarwa don Angular',
        summary:
          'Lambobin tabbatarwa a cikin akwatuna dabam-dabam, a kan filin shigarwa na gaske guda ɗaya.',
        description:
          'Filin OTP na Angular mai sauƙin amfani ga kowa: fili ɗaya na asali a ƙarƙashi, cika daga SMS, WebOTP, tsabtace liƙi, rukunoni, ɓoyewa da girgiza a kuskure.',
        apiDescription:
          'Bayanin API na filin OTP na Needless UI: nuiOtp mai tsawo, tsari, rukunoni da ɓoyewa, da nuiOtpInput mai WebOTP.',
        a11yDescription:
          'Allon madannai da sauƙin amfani na filin OTP na Needless UI: filin rubutu ɗaya mai lakabi, zoben focus a bayyane da cikawa ta atomatik.',
        overview: [
          'Filin OTP yana kama da layin akwatuna, amma a ƙarƙashinsa <code>&lt;input&gt;</code> ɗaya ne na asali. Cikawa ta atomatik daga SMS (<code>autocomplete="one-time-code"</code>), liƙawa, manhajojin ajiye kalmar sirri, fom da manhajojin karanta allo duk suna ganin filin rubutu na yau da kullum.',
          'Ana tsabtace lambobin da aka liƙa, don haka “123-456” da “123 456” duka suna aiki, kuma ana ƙin haruffan da tsarin bai yarda da su ba. A Android, <code>webOtp</code> yana cike lambar daga SMS da zarar ya iso.',
        ],
        examples: {
          verify: {
            title: 'Tabbatarwa',
            text: '<code>(completed)</code> yana aiki idan akwati na ƙarshe ya cika. Ku saita <code>aria-invalid</code> a kan filin don ƙin lamba: akwatunan suna zama ja kuma suna girgiza.',
          },
          letters: {
            title: 'Haruffa, rukunoni da ɓoyewa',
            text: '<code>pattern="alphanumeric"</code> yana karɓar haruffa ma, <code>[groups]</code> yana ƙara masu rabewa, <code>masked</code> kuma yana zana ɗigo.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Yana zana akwatunan kuma yana kewaye filin.',
            members: {
              length: 'Adadin haruffa.',
              pattern: '<code>digits</code>, ko <code>alphanumeric</code> don haruffa da lambobi.',
              groups: 'Girman rukunoni, da mai rabewa a tsakaninsu, kamar <code>[3, 3]</code>.',
              masked: 'Yana zana ɗigo a maimakon haruffan.',
              completed: 'Yana fitar da lambar duk lokacin da aka cike akwati na ƙarshe.',
            },
          },
          NuiOtpInput: {
            summary: 'Filin na gaske. Yana samun attributes da lambar amfani sau ɗaya ke buƙata.',
            members: {
              webOtp: 'Yana cike lambar daga SMS mai shigowa ta WebOTP API, inda ake tallafa masa.',
            },
          },
        },
        keyboard: [
          ['Lambobi ko haruffa', 'Suna cike akwatin da ake ciki kuma suna matsawa zuwa na gaba.'],
          ['Backspace', 'Yana goge harafin da ya gabaci cursor.'],
          [
            'Kibiyar hagu da ta dama',
            'Suna matsawa akwati ɗaya; ana zaɓar akwatin da ya cika, don haka rubutu yana maye gurbinsa.',
          ],
          ['Liƙa', 'Yana cike akwatunan daga lambar da aka kwafa.'],
        ],
        notes: [
          'Manhajojin karanta allo suna haɗuwa da filin rubutu ɗaya. Ku ba shi lakabi da <code>aria-label</code> ko <code>&lt;label&gt;</code>.',
          'Akwatunan a ɓoye suke daga fasahohin taimako; akwatin da ake gyarawa ne ke nuna zoben focus.',
          'A yanayin rage motsi, cursor ba ya ƙyaftawa kuma akwatunan ba sa tsalle ko girgiza.',
        ],
      },

      rating: {
        name: 'Rating',
        title: 'Component na rating da taurari don Angular',
        summary: 'Taurari don bayar da ƙima, a kan maɓallan radio na gaske.',
        description:
          'Rating da taurari na Angular a kan maɓallan radio na asali: allon madannai da fom, samfoti a ƙarƙashin linzami, sharewa, da nuna ɓangare a yanayin karatu kawai.',
        apiDescription:
          'Bayanin API na rating ɗin Needless UI: nuiRating mai ƙima, max, yanayin karatu kawai da na sharewa, da lakabai da za a iya fassarawa.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na rating ɗin Needless UI: rukunin radio mai suna, taurari masu lakabi da hoton karatu kawai.',
        overview: [
          'Rating rukuni ne na maɓallan radio na asali da aka zana a matsayin taurari. Maɓallan kibiya, fom da manhajojin karanta allo suna aiki kamar yadda suke yi da kowane rukunin radio; CSS yana cike taurarin kuma yana nuna samfotin sabuwar ƙima a ƙarƙashin linzami.',
          'A yanayin karatu kawai, yana nuna kowane ɓangare, kamar matsakaicin 4.3.',
        ],
        examples: {
          pick: {
            title: 'Bayar da ƙima',
            text: 'Ku haɗa <code>[(value)]</code> ko fom. Da <code>clearable</code>, sake zaɓar tauraro ɗaya yana share ƙimar.',
          },
          average: {
            title: 'Nuna matsakaici',
            text: '<code>readonly</code> yana cike taurari har zuwa kowane ɓangare kuma yana ba hoton suna “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Rukunin radio na taurari, ko hoton ƙima na karatu kawai.',
            members: {
              value: 'Ƙimar, ko <code>null</code>. Yana aiki da fom ma.',
              max: 'Adadin taurari.',
              readonly: 'Yana nuna ƙimar, har zuwa kowane ɓangare, maimakon neman ta.',
              disabled: 'Yana kashe kowane tauraro.',
              clearable: 'Sake zaɓar tauraron da aka zaɓa yana share ƙimar.',
              name: 'Sunan da maɓallan radio ke rabawa. Ana samar da shi kai tsaye idan ba a saita ba.',
              starLabel: 'Sunan da ake sanarwa na kowane tauraro, a matsayin function na ƙimarsa.',
              readonlyLabel: 'Sunan da ake sanarwa a yanayin karatu kawai.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Yana shiga rukunin, zuwa tauraron da aka zaɓa.'],
          ['Maɓallan kibiya', 'Suna canza ƙimar.'],
          ['Space', 'Yana zaɓar tauraron da ke da focus.'],
        ],
        notes: [
          'Kowane tauraro radio ne na asali mai suna kamar “3 stars”. Ku ba rukunin suna da <code>aria-label</code>.',
          'A yanayin karatu kawai, rating hoto ne (<code>role="img"</code>) mai suna “Rated 4.3 out of 5”.',
          'Ana zana taurari da CSS masks, don haka suna bin forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Component na skeleton loader don Angular',
        summary: 'Masu riƙe wuri da ke kiyaye tsarin shafi yayin da abun ciki ke lodawa.',
        description:
          'Skeleton loaders na Angular don rubutu, da’ira da tubala, da haske guda da ke ratsa dukan shafin, wanda ba ya bayyana idan an rage motsi.',
        apiDescription:
          'Bayanin API na skeleton ɗin Needless UI: directive ɗin nuiSkeleton da siffofinsa na rubutu, da’ira da tubali.',
        a11yDescription:
          'Sauƙin amfani na skeleton ɗin Needless UI: masu riƙe wuri a ɓoye, yankunan aria-busy, rage motsi da forced colors.',
        overview: [
          'Skeletons suna riƙe siffar abun cikin da har yanzu ke lodawa, don kada shafin ya yi tsalle idan ya iso. Ku saita girmansu da CSS.',
          'An kafa hasken a kan viewport: haske ɗaya yana ratsa kowane skeleton a shafin a lokaci guda, komai girmansa ko matsayinsa.',
        ],
        examples: {
          card: {
            title: 'Lodin kati',
            text: 'Layuka, da’ira da tubali a madadin bayanan wani mutum. Katin yana da <code>aria-busy</code> yayin da yake lodawa.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Mai riƙe wuri, a ɓoye daga fasahohin taimako.',
            members: {
              shape: '<code>text</code> (layi), <code>circle</code> ko <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeletons a ɓoye suke daga manhajojin karanta allo. Ku saita <code>aria-busy="true"</code> a kan yankin da ke lodawa, kuma ku cire shi idan abun ciki ya iso.',
          'Babu haske mai ratsawa idan mai amfani ya fi son rage motsi.',
          'A yanayin forced colors, kowane skeleton yana samun outline.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Sanarwar toast don Angular',
        summary:
          'Gajerun saƙonni da ke taruwa kan juna, ake share su da jan yatsa, kuma ba sa ƙwace focus.',
        description:
          'Toasts na Angular masu sauƙin amfani ga kowa: tari a top layer, toasts na promise, Undo, share da jan yatsa, da lokaci mai tsayawa da linzami ko focus.',
        apiDescription:
          'Bayanin API na toasts ɗin Needless UI: service ɗin NuiToaster, zaɓuɓɓukansa da toasts na promise, da yankin nui-toaster.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na toasts ɗin Needless UI: sanarwa, gajeriyar hanyar Alt+T, Escape da tsayar da lokaci.',
        overview: [
          'Toasts suna tabbatar da abin da ya faru yanzu, ko suna ba da wani aiki kamar Undo, ba tare da katse aiki ba. Ku sa <code>&lt;nui-toaster&gt;</code> ɗaya a cikin shell ɗin manhaja, sannan ku kira <code>NuiToaster</code> daga ko’ina.',
          'Suna taruwa a bayan mafi sabo, kuma suna bazuwa idan linzami ko focus ya zo kansu, duka a kan spring na motsi. Jan yatsa zuwa gefe yana jefar da toast. Ƙidayar lokaci tana tsayawa yayin da linzami ko focus ke kan tarin, da kuma yayin da shafin ke bayan fage.',
        ],
        examples: {
          tones: {
            title: 'Tones',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> da <code>danger()</code>. Toasts na danger suna daɗewa kuma ana sanar da su nan take (assertive).',
          },
          actions: {
            title: 'Ayyuka da promises',
            text: '<code>action</code> yana ƙara maɓalli kamar Undo. <code>promise()</code> yana nuna spinner, sannan ya koma sakamakon.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Service ɗin da ke nuna toasts. Ku yi inject ɗinsa a ko’ina.',
            members: {
              toasts: 'Kowane toast da ke kan allo, mafi sabo da farko.',
              show: 'Yana nuna toast. Ku ba da take, ko zaɓuɓɓuka masu bayani, tone, tsawon lokaci, aiki ko id.',
              success: 'Yana nuna toast na nasara.',
              warning: 'Yana nuna toast na gargaɗi.',
              danger:
                'Yana nuna toast na haɗari. Yana ɗaukar daƙiƙa 8 kuma ana sanar da shi nan take.',
              promise:
                'Yana nuna toast na lodawa har sai promise ya kammala, sannan saƙon nasara ko na haɗari.',
              dismiss: 'Yana watsar da toast ɗaya, ko dukansu.',
            },
          },
          NuiToasterRegion: {
            summary: 'Yankin da toasts ke bayyana. Ku sa shi sau ɗaya, a cikin shell ɗin manhaja.',
            members: {
              position: 'Kusurwa ko gefen viewport. Farko da ƙarshe suna bin alkiblar rubutu.',
              expanded: 'Yana barin tarin a bazu.',
              label: 'Sunan da ake sanarwa na yankin. Ku faɗi yadda za a kai gare shi.',
              closeLabel: 'Sunan da ake sanarwa na maɓallan rufewa.',
              hotkey:
                'Maɓallin, a matsayin <code>KeyboardEvent.code</code>, da ke kai focus kan mafi sabon toast tare da Alt.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Yana kai focus kan mafi sabon toast.'],
          ['Tab', 'Yana ratsa toasts, ayyukansu da maɓallan rufewa.'],
          ['Escape', 'Yana watsar da toast ɗin da ke da focus.'],
        ],
        notes: [
          'Ana sanar da kowane toast idan ya bayyana: cikin ladabi (polite), ko nan take (assertive) don danger. Toasts ba sa ɗaukar focus.',
          'Ƙidayar lokaci tana tsayawa yayin da linzami ko focus ke kan tarin, da yayin da shafin ke a ɓoye, kuma toasts da ke jiran promise ba sa ƙarewa.',
          'Duk abin da dole ne mai amfani ya yi aiki a kansa ya kamata ya kasance a wajen toast ma.',
          'A yanayin rage motsi, toasts ba sa motsi ko jan yatsa, kuma ana ɓoye layin ƙidayar lokaci.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox da kammalawa ta atomatik don Angular',
        summary: 'Filin rubutu da ke ba da shawarar zaɓuɓɓuka yayin da kuke rubutu.',
        description:
          'Combobox na Angular mai sauƙin amfani ga kowa: bincike mai sassauci da haskakawa, ƙimomi da yawa a matsayin chips, sabuwar ƙima daga rubutu da sakamakon server.',
        apiDescription:
          'Bayanin API na combobox ɗin Needless UI: nui-combobox mai value, values, multiple, create, filtering, loading da clearable, da layuka na musamman.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na combobox ɗin Needless UI: combobox mai gyaruwa da kammalawar jeri, active descendant, chips da IME.',
        overview: [
          'Combobox filin rubutu ne mai jerin shawarwari. Binciken yana da sassauci kuma ba ya la’akari da alamomin da ke kan haruffa: mafi dacewa ne ke zuwa da farko, kuma ana haskaka haruffan da suka dace. Yana karɓar objects na <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> iri ɗaya da select.',
          'Da <code>multiple</code>, zaɓuɓɓukan da aka zaɓa suna zama chips kafin rubutun, kuma <code>create</code> yana mayar da rubutun da aka shigar ya zama sabuwar ƙima. Don sakamako daga server, ku kashe <code>filtering</code>, ku yi bincike a <code>(queryChange)</code>, kuma ku saita <code>loading</code> yayin da kuke jira.',
        ],
        examples: {
          country: {
            title: 'Bincike',
            text: 'Ba dole ba ne haruffan da suka dace su kasance a jere, kuma ana lissafa <code>keywords</code> ma. <code>clearable</code> yana ƙara maɓallin sharewa kuma yana barin Escape ya share ƙimar.',
          },
          tags: {
            title: 'Chips da sabbin ƙimomi',
            text: '<code>multiple</code> yana nuna chips kuma yana haɗa <code>[(values)]</code>. Idan rubutun bai zama zaɓi ba tukuna, <code>create</code> yana ba da damar ƙara shi.',
          },
          people: {
            title: 'Sakamako daga server',
            text: 'Jerin yana nuna abin da server ya aiko, ba tare da tacewa ba, da layin lodawa yayin jira. Lakabai na abubuwan da aka zaɓa ba sa ɓacewa idan sabon sakamako ya iso.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Filin rubutu da ke ba da shawarar zaɓuɓɓuka yayin da kuke rubutu.',
            members: {
              options:
                'Zaɓuɓɓukan, a matsayin objects na <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'Ƙimar da aka zaɓa, ko <code>null</code>. Yana aiki da fom ma.',
              values: 'Ƙimomin da aka zaɓa, da <code>multiple</code>.',
              multiple: 'Yana ba da damar zaɓar zaɓuɓɓuka da yawa, da ake nunawa a matsayin chips.',
              create:
                'Yana samar da ƙima daga rubutun da aka shigar. Sai jerin ya ba da damar ƙara rubutun da ba zaɓi ba ne.',
              filtering:
                'Yana tace zaɓuɓɓuka yayin da kuke rubutu. Ku kashe shi idan server ne ke tacewa.',
              loading: 'Yana nuna layin lodawa yayin da sakamako ke kan hanya.',
              clearable:
                'Yana ƙara maɓallin da ke share ƙimar, kuma yana barin Escape ya share ta.',
              placeholder: 'Rubutun da ake nunawa yayin da filin ba shi da komai.',
              label:
                'Sunan da ake sanarwa, idan babu <code>&lt;label&gt;</code> da ke ba filin suna.',
              inputId: 'Id na filin rubutu, don <code>&lt;label for&gt;</code>.',
              disabled: 'Yana kashe filin.',
              compareWith: 'Yana faɗa ko ƙimomi biyu zaɓi ɗaya ne, idan ƙimomin objects ne.',
              displayWith:
                'Rubutu don ƙimar da ba ta cikin zaɓuɓɓuka, kamar wadda aka saita kafin a loda su.',
              virtual:
                'Yana nuna layukan da ake gani kawai: koyaushe, ba ko kaɗan, ko <code>auto</code> idan layuka sun wuce 200.',
              queryChange:
                'Yana fitar da rubutun yayin da ake shigar da shi, don bincike a server.',
              openChange: 'Yana fitarwa idan jerin ya buɗe ko ya rufe.',
              show: 'Yana buɗe jerin.',
              hide: 'Yana rufe jerin.',
              clear: 'Yana share ƙimar da rubutun.',
              focus: 'Yana kai focus kan filin rubutu.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ku sa shi a kan <code>ng-template</code> a cikin component ɗin don ku zana kowane layi da kanku. Context ɗin yana ɗauke da zaɓin da layinsa.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Yana zana lakabin zaɓi tare da haskaka haruffan da suka dace, bayaninsa da hanyarsa, don layukanku.',
            members: { nuiOptionText: 'Layin, daga context na template.' },
          },
        },
        keyboard: [
          ['Kibiyar ƙasa da ta sama', 'Suna buɗe jerin, sannan suna ratsa zaɓuɓɓuka.'],
          ['Page Down da Page Up', 'Suna tafiya zaɓuɓɓuka goma.'],
          ['Enter', 'Yana zaɓar zaɓin da ke aiki.'],
          ['Alt + kibiyar ƙasa ko ta sama', 'Yana buɗe ko rufe jerin.'],
          [
            'Escape',
            'Yana rufe jerin; sannan yana share rubutun, ko ƙimar idan an saita clearable.',
          ],
          ['Backspace', 'A filin da babu komai, yana cire chip na ƙarshe.'],
          [
            'Kibiyar hagu',
            'Daga farkon rubutu (kibiyar dama a rubutu daga dama zuwa hagu), yana shiga cikin chips. A can, Backspace ko Delete yana cire chip.',
          ],
        ],
        notes: [
          'Filin rubutun <code>combobox</code> ne mai <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> da <code>aria-controls</code>. Focus yana zama a cikinsa, kuma <code>aria-activedescendant</code> yana nuna zaɓin da ke aiki.',
          'Chips jeri ne mai suna, kuma kowane maɓallin cirewa yana ɗauke da sunan chip ɗinsa, kamar “Remove Italy”.',
          '“No matches” da layin lodawa saƙonnin yanayi ne, don haka manhajojin karanta allo suna sanar da su.',
          'Maɓallan da ke tabbatar da haɗa rubutu a hanyar shigar da rubutu (IME), kamar na Sinanci ko Japananci, ana barin su ga hanyar shigarwar.',
        ],
      },
      command: {
        name: 'Command palette',
        title: 'Component na command palette don Angular',
        summary: 'Kowane umarni a manhajarku, dannawa ɗaya kawai.',
        description:
          'Command palette na Angular mai sauƙin amfani ga kowa: ⌘K daga ko’ina, bincike mai sassauci cikin shafuka, rukunoni da gajerun hanyoyi a tsarin kowane dandali.',
        apiDescription:
          'Bayanin API na command palette ɗin Needless UI: nui-command-palette mai commands, hotkey, bindShortcuts da loop, da tsarin NuiCommand.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na command palette ɗin Needless UI: dialog na modal mai combobox na bincike, active descendant da kewaya shafuka.',
        overview: [
          'Command palette filin bincike ne a kan umarnan manhajarku, a cikin dialog na modal. ⌘K yana buɗe shi daga ko’ina (Ctrl+K a Windows da Linux). Ku zaɓi umarni, palette ɗin zai rufe, sannan ya aiwatar da shi.',
          'Umarni na iya samun rukuni, bayani, keywords da gajeriyar hanya, da ake nunawa da alamomin kowane dandali. Umarni mai <code>children</code> yana buɗe shafin ƙarin umarnai, kuma bincike yana kaiwa cikin shafuka daga sama.',
        ],
        examples: {
          palette: {
            title: 'Umarnai da shafuka',
            text: 'Rukunoni, gajerun hanyoyi, umarnin da aka kashe da shafuka biyu. <code>(run)</code> yana gaya muku abin da ya gudana; <code>run</code> na kowane umarni ma yana aiki.',
          },
          people: {
            title: 'Layuka na musamman',
            text: '<code>nuiOptionTemplate</code> yana zana kowane layi, <code>nuiOptionText</code> kuma yana riƙe haruffan da aka haskaka. <code>[hotkey]="null"</code> yana barin ⌘K ga palette ɗin da ke sama.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Dialog na modal mai filin bincike a kan umarnanku.',
            members: {
              commands: 'Umarnan, a matsayin objects na <code>NuiCommand</code>.',
              open: 'Ko palette ɗin a buɗe yake.',
              hotkey:
                'Gajeriyar hanyar da ke buɗe shi da rufe shi daga ko’ina, ko <code>null</code> idan ba a so. <code>mod</code> shi ne ⌘ a na’urorin Apple, Ctrl kuma a sauran.',
              bindShortcuts: 'Yana aiwatar da umarnai da gajerun hanyoyinsu ma, a ko’ina a shafin.',
              loop: 'Kibiyar ƙasa a kan umarni na ƙarshe tana zuwa na farko, kibiyar sama a kan na farko kuma tana zuwa na ƙarshe.',
              filtering:
                'Yana tacewa yayin da kuke rubutu. Ku kashe shi idan server ne ke tace umarnan.',
              loading: 'Yana nuna layin lodawa yayin da sakamako ke kan hanya.',
              hints: 'Yana nuna maɓallan da za a yi amfani da su a ƙasa.',
              virtual:
                'Yana nuna layukan da ake gani kawai: koyaushe, ba ko kaɗan, ko <code>auto</code> idan layuka sun wuce 200.',
              label: 'Sunan da ake sanarwa na dialog ɗin da filin bincikensa.',
              placeholder: 'Rubutun da ake nunawa a filin bincike idan babu komai.',
              run: 'Yana fitar da kowane umarni da ya gudana.',
              queryChange:
                'Yana fitar da rubutun yayin da ake shigar da shi, don bincike a server.',
              show: 'Yana buɗe palette ɗin.',
              hide: 'Yana rufe palette ɗin.',
              toggle: 'Yana buɗe palette ɗin, ko ya rufe shi.',
              back: 'Yana komawa shafin da ya gabata.',
            },
          },
          NuiCommand: {
            summary: 'Umarni ɗaya, ko shafin umarnai.',
            members: {
              label: 'Rubutun da ake nunawa ake kuma bincika.',
              description: 'Rubutu na biyu a ƙarƙashin lakabi.',
              group: 'Ana jera umarnai masu rukuni ɗaya ƙarƙashin heading ɗinsa.',
              keywords:
                'Ƙarin kalmomin da bincike ke dacewa da su, kamar kalmomi masu ma’ana ɗaya.',
              shortcut: 'Maɓallan da ake nunawa tare da shi, kamar <code>mod+shift+p</code>.',
              disabled: 'Ana nuna shi, amma ba zai iya gudana ba.',
              children: 'Umarnai a mataki na ƙasa: zaɓar wannan yana buɗe su a matsayin shafi.',
              run: 'Yana gudana idan aka zaɓe shi, bayan palette ɗin ya rufe.',
              id: 'Don amfaninku, kamar bambance umarnai a <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K ko Ctrl+K', 'Yana buɗe ko rufe palette ɗin.'],
          ['Kibiyar ƙasa da ta sama', 'Suna ratsa umarnai, suna zagayawa daga ƙarshe zuwa farko.'],
          ['Page Down da Page Up', 'Suna tafiya umarnai goma.'],
          ['Enter', 'Yana aiwatar da umarnin da ke aiki, ko yana buɗe shafinsa.'],
          ['Escape', 'Yana komawa shafi ɗaya baya; a sama, yana rufe palette ɗin.'],
          ['Backspace', 'A filin da babu komai a cikin shafi, yana komawa baya.'],
        ],
        notes: [
          'Palette ɗin <code>&lt;dialog&gt;</code> ne na modal na asali: shafin da ke baya ba ya aiki, focus yana zama a ciki, kuma rufewa tana mayar da focus inda yake a da.',
          'Filin binciken <code>combobox</code> ne da ke nuna umarnin da ke aiki ta <code>aria-activedescendant</code>. A cikin shafi, yana ɗaukar sunan shafin.',
          'Maɓallan gajerun hanyoyi rubutu ne a cikin kowane zaɓi, don haka manhajojin karanta allo suna karanta su. Alamun maɓallai a ƙasa a ɓoye suke daga fasahohin taimako.',
          'Gajerun hanyoyi marasa Ctrl, Alt ko ⌘ ba sa aiki yayin da kuke rubutu a fili.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Components na popover da hovercard don Angular',
        summary:
          'Panels masu shawagi kusa da maɓalli, da tooltips masu bayani idan linzami ya zo kansu.',
        description:
          'Popover da hovercard na Angular masu sauƙin amfani ga kowa bisa popover API na asali: matsayi mai juyawa da bibiya, kibiya, jinkiri da rufewa ta danna waje.',
        apiDescription:
          'Bayanin API na popover ɗin Needless UI: nuiPopover da nuiHovercard masu side, align, offset da arrow, da directives ɗinsu na trigger.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na popover da hovercard na Needless UI: matsayin dialog da tooltip, dawowar focus, Escape da WCAG 1.4.13.',
        overview: [
          'Popover ƙaramin panel ne da ke buɗewa kusa da maɓalli, don abubuwan da kuke mu’amala da su: abubuwan tacewa, gajeren fom, mai zaɓar launi. <code>popover="auto"</code> ne na asali, don haka burauza yana rufe shi da Escape ko danna waje, yana mayar da focus, kuma yana sa shi nan da nan bayan trigger ɗinsa a jerin Tab.',
          'Hovercard tooltip ne mai cikakken bayani. Yana buɗewa bayan linzami ya ɗan tsaya a kai, ko nan take idan focus na allon madannai ya zo, kuma yana bayyana trigger ɗinsa. Yana zama a buɗe yayin da linzami ke matsawa kansa, don a iya karanta rubutunsa da zaɓar sa.',
          'Dukansu suna juyawa zuwa ɗayan gefe idan babu wuri, suna zama a cikin allo, kuma suna bin trigger ɗinsu yayin da shafin ke gungurawa.',
        ],
        examples: {
          filters: {
            title: 'Abubuwan tacewa',
            text: 'Popover mai fom a ciki. <code>arrow</code> yana nuna shi zuwa trigger ɗinsa, <code>hide()</code> kuma yana rufe shi daga code.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Ku kai linzami kan suna, ko ku isa gare shi da Tab. Katin yana bayyana mahaɗar, don haka manhajojin karanta allo suna karanta shi bayan sunan.',
          },
          sides: {
            title: 'Gefuna da yanayin shigowa',
            text: '<code>side</code> da <code>align</code> suna saita inda yake buɗewa; <code>start</code> da <code>end</code> suna bin alkiblar rubutu. <code>enter</code> da <code>motion</code> suna saita yadda yake bayyana.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Popover na asali da ake sanyawa kusa da element ɗin da ya buɗe shi.',
            members: {
              side: 'Gefen trigger ɗin da yake buɗewa a kai. Yana juyawa idan babu wuri.',
              align: 'Yadda yake daidaita da trigger ɗin a tsawon wannan gefe.',
              offset: 'Tazara tsakanin trigger da panel ɗin, a pixels.',
              arrow: 'Yana nuna kibiya da ke nuni zuwa trigger ɗin.',
              openChange: 'Yana fitarwa idan ya buɗe ko ya rufe.',
              show: 'Yana buɗe shi kusa da kowane element.',
              hide: 'Yana rufe shi.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Maɓallin da ke buɗe popover da rufe shi, da <code>popovertarget</code> na asali.',
            members: { nuiPopoverTrigger: 'Popover ɗin da za a buɗe.' },
          },
          NuiHovercard: {
            summary: 'Tooltip mai cikakken bayani da ke bayyana trigger ɗinsa.',
            members: {
              side: 'Gefen trigger ɗin da yake buɗewa a kai. Yana juyawa idan babu wuri.',
              align: 'Yadda yake daidaita da trigger ɗin a tsawon wannan gefe.',
              offset: 'Tazara tsakanin trigger da katin, a pixels.',
              arrow: 'Yana nuna kibiya da ke nuni zuwa trigger ɗin.',
              openDelay:
                'Milliseconds da linzami zai tsaya kafin ya buɗe. Focus na allon madannai yana buɗe shi nan take.',
              closeDelay: 'Milliseconds kafin ya rufe, bayan linzami ya bar shi.',
              openChange: 'Yana fitarwa idan ya buɗe ko ya rufe.',
              show: 'Yana buɗe shi kusa da kowane element.',
              hide: 'Yana rufe shi.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Yana nuna hovercard idan linzami ya zo kansa ko focus na allon madannai, kuma yana mai da shi bayanin wannan element ɗin.',
            members: { nuiHovercardTrigger: 'Hovercard ɗin da za a nuna.' },
          },
        },
        keyboard: [
          ['Enter ko Space a kan trigger', 'Yana buɗe ko rufe popover ɗin.'],
          ['Tab', 'Yana shiga popover da ke buɗe, wanda ke zuwa nan da nan bayan trigger ɗinsa.'],
          [
            'Escape',
            'Yana rufe popover ɗin kuma yana mayar da focus kan trigger ɗinsa, ko yana ɓoye hovercard ɗin.',
          ],
        ],
        notes: [
          'Popover ɗin <code>dialog</code> ne wanda ba modal ba: ku ba shi suna da <code>aria-label</code> ko <code>aria-labelledby</code>. Trigger ɗinsa yana samun <code>aria-haspopup</code> da <code>aria-expanded</code> na burauza.',
          'Hovercard ɗin <code>tooltip</code> ne kuma shi ne <code>aria-describedby</code> na trigger ɗinsa, don haka ana karanta rubutunsa tare da trigger ɗin. Kada ku sa controls a cikinsa; ku yi amfani da popover don su.',
          'Hovercard ɗin ya cika WCAG 1.4.13: Escape yana ɓoye shi ba tare da motsa focus ba, linzami na iya matsawa kansa, kuma yana zama yayin da linzami ko focus ke kansa.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Component na select don Angular',
        summary: 'Ku ɗauki zaɓi ɗaya ko da yawa, daga gajeren jeri ko mai tsawo sosai.',
        description:
          'Select na Angular mai sauƙin amfani ga kowa: zaɓi ɗaya ko da yawa, rukunoni, bishiya, tsalle ta rubutu, zaɓar duka da virtual scrolling don kowane tsawon jeri.',
        apiDescription:
          'Bayanin API na select ɗin Needless UI: nui-select mai value, values, multiple, selectAll da virtual, tsarin NuiOption da layuka na musamman.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na select ɗin Needless UI: combobox na zaɓi kawai mai listbox ko tree, active descendant, typeahead da maɓallan bishiya.',
        overview: [
          'Select maɓalli ne da ke buɗe jerin zaɓuɓɓuka. Ku ba shi <code>options</code>, array na <code>NuiOption</code>, kuma ku haɗa <code>[(value)]</code>, ko <code>[(values)]</code> tare da <code>multiple</code>. Yana aiki da Signal Forms, reactive forms da <code>ngModel</code> ma.',
          'Zaɓuɓɓuka na iya samun <code>group</code>, <code>description</code> da <code>keywords</code>, kuma <code>children</code> suna mayar da jerin ya zama bishiya. Bayan layuka 200, layukan da ake gani kawai ake nunawa, don haka zaɓuɓɓuka 100,000 suna buɗewa da sauri kamar goma.',
          'Don ku rubuta ku tace a maimakon haka, ku yi amfani da <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Rukunoni',
            text: 'Ana jera zaɓuɓɓuka masu <code>group</code> ƙarƙashin heading ɗinsa. Rubuta harafi yana tsallakawa zuwa zaɓi na gaba da ya fara da shi.',
          },
          toppings: {
            title: 'Da yawa lokaci ɗaya',
            text: '<code>multiple</code> yana barin jerin a buɗe kuma yana haɗa <code>[(values)]</code>. <code>selectAll</code> yana ƙara maɓallin da ke zaɓar kowane zaɓi ko share su duka. Ba za a iya zaɓar zaɓuɓɓukan da aka kashe ba.',
          },
          folders: {
            title: 'Bishiya',
            text: 'Zaɓuɓɓuka masu <code>children</code> suna samar da bishiya. Jerin yana buɗewa da folders ɗin zaɓin da aka zaɓa a buɗe.',
          },
          zones: {
            title: 'Dogayen jeri',
            text: 'Dukan yankunan lokaci, an rarraba su bisa nahiya. Bayan layuka 200, layukan da ake gani kawai ake nunawa, kuma zaɓin da ke aiki yana ci gaba da kasancewa don manhajojin karanta allo.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Maɓallin da ke buɗe jerin zaɓuɓɓuka.',
            members: {
              options: 'Zaɓuɓɓukan, a matsayin objects na <code>NuiOption</code>.',
              value: 'Ƙimar da aka zaɓa, ko <code>null</code>. Yana aiki da fom ma.',
              values: 'Ƙimomin da aka zaɓa, da <code>multiple</code>.',
              multiple:
                'Yana ba da damar zaɓar zaɓuɓɓuka da yawa. Jerin yana zama a buɗe yayin da kuke zaɓa.',
              selectAll:
                'Da <code>multiple</code>, yana ƙara maɓallin da ke zaɓar kowane zaɓi ko share su duka.',
              placeholder: 'Rubutun da ake nunawa yayin da ba a zaɓi komai ba.',
              label:
                'Sunan da ake sanarwa, idan babu <code>&lt;label&gt;</code> da ke ba maɓallin suna.',
              triggerId: 'Id na maɓallin, don <code>&lt;label for&gt;</code>.',
              disabled: 'Yana kashe select ɗin.',
              compareWith: 'Yana faɗa ko ƙimomi biyu zaɓi ɗaya ne, idan ƙimomin objects ne.',
              virtual:
                'Yana nuna layukan da ake gani kawai: koyaushe, ba ko kaɗan, ko <code>auto</code> idan layuka sun wuce 200.',
              openChange: 'Yana fitarwa idan jerin ya buɗe ko ya rufe.',
              show: 'Yana buɗe jerin.',
              hide: 'Yana rufe jerin.',
              focus: 'Yana kai focus kan maɓallin.',
            },
          },
          NuiOption: {
            summary: 'Zaɓi ɗaya. Select, combobox da command palette duka suna karɓar su.',
            members: {
              value: 'Abin da zaɓar sa ke saitawa. Kowane iri.',
              label: 'Rubutun da ake nunawa ake kuma bincika.',
              description: 'Rubutu na biyu a ƙarƙashin lakabi.',
              group: 'Ana jera zaɓuɓɓuka masu rukuni ɗaya ƙarƙashin heading ɗinsa, bisa tsari.',
              keywords:
                'Ƙarin kalmomin da bincike ke dacewa da su, kamar kalmomi masu ma’ana ɗaya ko codes.',
              disabled: 'Ana nuna shi, amma ba za a iya zaɓar sa ba.',
              children: 'Zaɓuɓɓuka a mataki na ƙasa, waɗanda ke mayar da jerin ya zama bishiya.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Ku sa shi a kan <code>ng-template</code> a cikin component ɗin don ku zana kowane layi da kanku. Context ɗin yana ɗauke da zaɓin da layinsa.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Yana zana lakabin zaɓi tare da haskaka haruffan da suka dace, bayaninsa da hanyarsa, don layukanku.',
            members: { nuiOptionText: 'Layin, daga context na template.' },
          },
        },
        keyboard: [
          ['Kibiyar ƙasa da ta sama', 'Suna buɗe jerin, sannan suna ratsa zaɓuɓɓuka.'],
          ['Home da End', 'Suna zuwa zaɓi na farko ko na ƙarshe.'],
          ['Page Down da Page Up', 'Suna tafiya zaɓuɓɓuka goma.'],
          ['Enter ko Space', 'Yana buɗe jerin, ko yana zaɓar zaɓin da ke aiki.'],
          ['Haruffa', 'Suna tsallakawa zuwa zaɓi na gaba da ya fara da su.'],
          [
            'Kibiyar dama da ta hagu',
            'A bishiya, suna buɗe zaɓi ko zuwa na farko a cikinsa; suna naɗe shi ko zuwa wanda ke ɗauke da shi. Suna juyawa a rubutu daga dama zuwa hagu.',
          ],
          ['Alt + kibiyar sama', 'Yana zaɓar zaɓin da ke aiki kuma yana rufe jerin.'],
          ['Tab', 'Idan zaɓi ɗaya ake yi, yana zaɓar zaɓin da ke aiki kuma yana wucewa.'],
          ['Escape', 'Yana rufe jerin ba tare da zaɓa ba.'],
        ],
        notes: [
          'Maɓallin <code>combobox</code> ne na zaɓi kawai mai <code>aria-expanded</code> da <code>aria-controls</code>. Focus yana zama a kansa, kuma <code>aria-activedescendant</code> yana nuna zaɓin da ke aiki.',
          'Jerin <code>listbox</code> ne, ko <code>tree</code> mai <code>aria-level</code> da <code>aria-expanded</code>. <code>aria-setsize</code> da <code>aria-posinset</code> suna zama daidai ko da wasu layuka kawai ake nunawa.',
          'Zaɓin da ke aiki yana da cikakken launin bango, kuma a yanayin forced colors yana da outline.',
          'Ku ba shi suna da <code>&lt;label for&gt;</code> da ke nuni zuwa <code>triggerId</code>, ko da <code>label</code>.',
        ],
      },
      grid: {
        name: 'Data grid',
        title: 'Component na data grid don Angular',
        summary: 'Ku jera, ku tace, ku zaɓa, ku gyara kuma ku gungura layuka, komai yawansu.',
        description:
          'Data grid na Angular mai sauƙin amfani ga kowa a kan tebur na asali: jerawa da ginshiƙai da yawa, tacewa, shafuka ko virtual scrolling, zaɓi da gyarawa.',
        apiDescription:
          'Bayanin API na data grid ɗin Needless UI: inputs da models na nui-grid, ma’anar NuiGridColumn, da templates don cells na musamman.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na data grid ɗin Needless UI: tebur na asali mai matsayin grid, wuri ɗaya a jerin Tab, maɓallan kibiya da sanarwa.',
        overview: [
          'Data grid tebur ne na asali da ke jerawa, tacewa, raba shafuka da gyarawa. Ku bayyana <code>columns</code>, ku ba shi <code>rows</code>, kuma ana tsara kowane cell bisa irinsa da yankin (locale): lambobi, kuɗi, kwanan wata, “Ee” da “A’a”, da lakabai na ƙimomin <code>enum</code>.',
          'Yanayinsa yana cikin models da za ku iya haɗawa, adanawa da aikawa zuwa server: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, da <code>columnState</code> don faɗin ginshiƙai, jerinsu, kafewarsu da ɓoyewarsu yadda mutane suka zaɓa. Idan babu shafuka, layukan da ake gani kawai ake nunawa, don haka layuka 100,000 suna gungurawa kamar goma.',
          'Ana iya isa ga kowane cell da allon madannai, kuma panel na kowane ginshiƙi yana jera shi, tace shi, kafe shi, matsar da shi, daidaita faɗinsa da abun ciki, da ɓoye shi.',
        ],
        examples: {
          orders: {
            title: 'Bincike, jerawa da shafuka',
            text: 'Ku rubuta don bincika dukan ginshiƙai. Ku danna taken ginshiƙi don jerawa, kuma ku danna tare da Shift don ƙara ginshiƙi na biyu. <code>nuiGridCell</code> yana zana yanayin oda, <code>exportCsv()</code> kuma yana ba ku abin da ake nunawa.',
          },
          selection: {
            title: 'Zaɓar layuka',
            text: '<code>selection="multiple"</code> yana ƙara checkboxes kuma yana haɗa keys na layukan da aka zaɓa. Danna tare da Shift yana zaɓar layuka a jere; checkbox na layin take yana zaɓar duk layukan da suka dace.',
          },
          editing: {
            title: 'Gyarawa',
            text: 'Ku danna cell sau biyu, ku danna Enter ko ku fara rubutu kawai. <code>validate</code> yana barin editor a buɗe tare da saƙo; gyaran da aka tabbatar yana sabunta <code>rows</code> kuma yana fitar da <code>cellEdit</code>.',
          },
          big: {
            title: 'Layuka 100,000',
            text: 'Idan babu shafuka, layukan da ake gani kawai ake nunawa. Ginshiƙan da aka kafe suna zama a gefuna, kuma <code>columnState</code> yana adana tsarin da mutane suka yi.',
          },
          server: {
            title: 'Bayanai daga server',
            text: 'A yanayin <code>server</code>, grid ɗin yana nuna layuka yadda suke zuwa kuma yana ba da rahoton kowane canji a <code>queryChange</code>. Ku saita <code>loading</code> yayin da kuke ɗauko bayanai.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Data grid a kan tebur na asali.',
            members: {
              rows: 'Bayanan. Gyara yana maye gurbin layuka, don haka ku haɗa da <code>[(rows)]</code>.',
              columns: 'Ginshiƙan, a matsayin objects na <code>NuiGridColumn</code>.',
              rowId: 'Key na layi, don zaɓi da bibiya.',
              label: 'Sunan da ake sanarwa na grid ɗin.',
              selection: 'Ko ana iya zaɓar layuka, da guda nawa.',
              selected: 'Keys na layukan da aka zaɓa.',
              sort: 'Jerawar, a matsayin objects na <code>{ column, direction }</code>; na farko ne ke da fifiko.',
              filters: 'Tacewa ɗaya ga kowane id na ginshiƙi: operator da ƙima.',
              search: 'Kalmomin da dole ne duka su kasance a cikin layi.',
              pageSize: 'Layuka a kowane shafi, ko 0 don jeri ɗaya mai gungurawa.',
              page: 'Shafin da ake nunawa, daga 0.',
              pageSizes: 'Zaɓuɓɓukan da ke cikin pager.',
              virtual:
                'Yana nuna layukan da ake gani kawai: koyaushe, ba ko kaɗan, ko <code>auto</code> idan layuka sun wuce 100 ba tare da shafuka ba.',
              height: 'Tsawon CSS da ke iyakance grid ɗin; yana gungurawa a ciki.',
              columnState:
                'Faɗi, matsayi, kafewa da bayyanar kowane ginshiƙi, don adanawa da maidowa.',
              mode: '<code>server</code> yana nuna layuka yadda suke zuwa, kuma yana bar muku jerawa, tacewa da raba shafuka.',
              total: 'Yawan layuka a server.',
              loading: 'Yana nuna sandar ci gaba, da layukan riƙe wuri idan babu layuka.',
              locale:
                'Yana tsara lambobi da kwanan wata, kuma yana karanta lambobin da aka rubuta.',
              labels: 'Kowane rubutu da grid ɗin ke nunawa ko sanarwa, don fassarawa.',
              rowActivate: 'Yana fitar da layin da aka buɗe da Enter ko danna sau biyu.',
              cellEdit: 'Yana fitar da kowane gyaran da aka tabbatar.',
              queryChange:
                'Yana fitar da jerawa, tacewa, bincike da shafi duk lokacin da suka canza.',
              exportCsv: 'Layukan da aka tace aka jera na ginshiƙan da ake gani, a matsayin CSV.',
              focusCell: 'Yana kai focus kan cell; layi <code>-1</code> shi ne layin take.',
              clearFilters: 'Yana share kowace tacewa da binciken.',
            },
          },
          NuiGridColumn: {
            summary: 'Ginshiƙi ɗaya. <code>id</code> da <code>header</code> kaɗai ake buƙata.',
            members: {
              id: 'Ba a maimaita shi; shi ne key a jerawa, tacewa da yanayin ginshiƙai.',
              header: 'Rubutun taken ginshiƙi.',
              value:
                'Key na layin, ko function na layin. Idan ba a saita ba, <code>row[id]</code> ne.',
              type: 'Yana zaɓar daidaitawa, jerawa, tacewa da editor.',
              format:
                'Zaɓuɓɓukan <code>Intl</code> don lambobi da kwanan wata, ko function da ke samar da rubutun.',
              options:
                'Zaɓuɓɓukan ginshiƙin <code>enum</code>, a matsayin objects na <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'A pixels.',
              flex: 'Yana raba sararin da ya rage da sauran ginshiƙan <code>flex</code>.',
              align: 'Ya danganta da iri: lambobi da kwanan wata a ƙarshe.',
              'pinned, hidden': 'Kafewa da bayyanar ginshiƙin ta farko.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Ana iya kashe kowanne da <code>false</code>.',
              compare: 'Jerawa ta musamman.',
              'editable, validate': 'Ko ana iya gyara cells, da saƙo idan ƙima ba ta da inganci.',
              set: 'Yana samar da layin da aka gyara. Idan ba a saita ba, kwafi ne mai sabuwar ƙimar.',
            },
          },
          NuiGridCell: {
            summary:
              'Yana zana cells na ginshiƙi. Context ɗin yana ɗauke da layin, ƙimarsa da rubutunsa.',
            members: { nuiGridCell: 'Id na ginshiƙin.' },
          },
          NuiGridHeader: {
            summary: 'Yana zana taken ginshiƙi.',
            members: { nuiGridHeader: 'Id na ginshiƙin.' },
          },
          NuiGridEmpty: {
            summary:
              'Abin da ake nunawa idan babu layuka. Context ɗin yana faɗa ko tacewa ce ta ɓoye su.',
            members: {},
          },
        },
        keyboard: [
          [
            'Maɓallan kibiya',
            'Suna matsawa cell ɗaya. Hagu da dama suna juyawa a rubutu daga dama zuwa hagu.',
          ],
          [
            'Home da End',
            'Suna zuwa cell na farko ko na ƙarshe a layin; da Ctrl, a cikin grid ɗin.',
          ],
          ['Page Down da Page Up', 'Suna matsawa allo ɗaya na layuka.'],
          [
            'Enter ko Space a kan taken ginshiƙi',
            'Yana jera bisa ginshiƙin; da Shift, yana ƙara shi cikin jerawar.',
          ],
          ['Alt + kibiyar ƙasa a kan taken ginshiƙi', 'Yana buɗe panel na ginshiƙin.'],
          [
            'Alt + kibiyar hagu ko ta dama a kan taken ginshiƙi',
            'Yana rage ko ƙara faɗin ginshiƙin; da Shift, yana matsar da shi.',
          ],
          ['Enter a kan cell', 'Yana gyara shi, ko yana buɗe layin idan ba a iya gyara shi.'],
          ['F2, ko rubutu', 'Yana gyara cell ɗin.'],
          [
            'Enter, Escape da Tab yayin gyarawa',
            'Tabbatarwa, sokewa, ko tabbatarwa da wucewa gaba.',
          ],
          ['Space', 'Yana zaɓar layin; da Shift, layukan tun daga na ƙarshe da aka zaɓa.'],
          ['Ctrl + A', 'Yana zaɓar kowane layi.'],
        ],
        notes: [
          '<code>&lt;table&gt;</code> ne na asali mai <code>role="grid"</code>, mai suna daga <code>label</code>. Taken kowane ginshiƙi yana ɗauke da <code>aria-sort</code>, layukan da ake iya zaɓa kuma <code>aria-selected</code>.',
          'Grid ɗin yana ɗaukar wuri ɗaya kawai a jerin Tab. Focus yana tafiya daga cell zuwa cell ta <code>tabindex</code> mai yawo (roving), don haka manhajojin karanta allo suna karanta kowane cell tare da taken layinsa da na ginshiƙinsa.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> da <code>aria-colindex</code> suna zama daidai yayin da aka raba layuka zuwa shafuka ko ake nuna wasu kawai.',
          'Ana sanar da jerawa, tacewa, sauya shafi da kurakuran gyarawa a yankin yanayi, cikin ladabi (polite).',
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
      customization: {
        title: 'Keɓancewa',
        description:
          'Physics na spring, tasirin dannawa, shigowa, siffa da girman kusurwoyi, da sarari: ku sauya motsi da yanayin Needless UI a dukan manhajar ko ga component ɗaya.',
        blocks: [
          {
            kind: 'p',
            html: 'Kowane component yana da hali da za ku iya canzawa: spring ɗin da yake motsi da shi, abin da maɓalli ke yi a ƙarƙashin yatsanku, yadda dialogs da menus ke bayyana, siffa da girman kusurwoyinsu, da yawan sararin da suke ɗauka. Kowanne daga cikinsu attribute ɗaya ne ga duk abin da ke cikin element, ko input ɗaya ga component guda.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Attribute ɗaya ga dukan reshe' },
          {
            kind: 'p',
            html: 'Ku sa attributes na <code>data-nui-*</code> a kan <code>&lt;body&gt;</code> don dukan manhajar, ko a kan kowane element don wani sashe nata kawai. Mafi kusa ne ke rinjaye, don haka ana iya sa su a cikin juna. CSS custom properties kawai suke saitawa, don haka suna aiki iri ɗaya da kowane framework, ko ba tare da framework ba.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Component ɗaya' },
          {
            kind: 'p',
            html: 'A Angular, <code>nuiButton</code>, <code>nuiDialog</code> da <code>nuiMenu</code> suna karɓar waɗannan ƙimomin a matsayin inputs. Inputs ɗin da ba ku saita ba suna bin attributes da ke kewaye da su.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Springs da ake mayarwa CSS' },
          {
            kind: 'p',
            html: 'Motsi a nan physics ne na spring: tauri, rage girgiza da nauyi, maimakon tsawon lokaci da lanƙwasa. Compiler na tokens yana warware kowane spring, kuma yana rubuta shi a CSS a matsayin lokacin da yake ɗauka kafin ya tsaya da kuma easing na <code>linear()</code>, don haka yana aiki a kan compositor ba tare da JavaScript ba. Springs shida suna zuwa a matsayin tokens, daga <code>--nui-spring-snappy</code> zuwa <code>--nui-spring-mechanical</code>, kuma <code>--nui-motion</code> yana riƙe da wanda ake amfani da shi.',
          },
          {
            kind: 'p',
            html: 'Duk wani spring kuma input ɗaya kawai yake buƙata. Angular yana mayar da shi CSS a lokacin aiki da mai warware lissafi iri ɗaya, kuma <code>springTransition()</code> yana ba ku CSS ɗin don elements ɗinku.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Duk abin da ke tsakani' },
          {
            kind: 'p',
            html: 'Presets gajerun hanyoyi ne kawai. Don duk wani abu dabam, ku saita custom properties da kanku: kowane transform ga <code>--nui-press</code> da <code>--nui-enter</code>, da kowace lamba ga <code>--nui-radius-scale</code> da <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Sauƙin amfani ga kowa' },
          {
            kind: 'p',
            html: 'Idan tsarin ya nemi rage motsi, springs suna zama nan take, kuma tasirin dannawa da shigowa suna daina motsi. Saitin sarari ba ya taɓa sa wani control ya yi ƙasa da girman wurin taɓawa na pixels 24 na WCAG 2.2, kuma babu preset da ke taɓa launuka, don haka duk gwajin bambancin launi yana nan daram. Burauzoji marasa <code>corner-shape</code> suna zana kowace kusurwa a zagaye.',
          },
        ],
      },
    },
    playground: {
      label: 'Filin gwajin keɓancewa',
      motion: 'Motsi',
      custom: 'na musamman',
      stiffness: 'Tauri',
      damping: 'Rage girgiza',
      mass: 'Nauyi',
      press: 'Dannawa',
      enter: 'Shigowa',
      corners: 'Siffar kusurwoyi',
      radius: 'Girman kusurwoyi',
      density: 'Sarari',
      surprise: 'Ba ni mamaki',
      reset: 'Koma zuwa na asali',
      hint: 'Ku danna maɓalli ku riƙe, sannan ku sake shi. Ku buɗe dialog da menu don ku ga yadda suke isowa.',
      save: 'Ajiye',
      cancel: 'Soke',
      delete: 'Goge',
      openDialog: 'Buɗe dialog',
      openMenu: 'Buɗe menu',
      menu: ['Sake suna', 'Yi kwafi', 'Goge'],
      dialogTitle: 'Motsi fiye da kima',
      dialogText: 'Wannan dialog ɗin ya iso daidai yadda kuka umarta.',
      close: 'Rufe',
      curve:
        'Matsayin spring ɗin a tsawon lokaci. Yana farawa daga ƙasa kuma yana tsayawa a kan layi mai tsinke-tsinke.',
      settles: (ms, overshoot) =>
        `Yana tsayawa cikin ${ms} ms · yana wuce gona da iri da ${overshoot}%`,
      instant: 'Babu motsi: komai yana tsallakawa kai tsaye zuwa inda zai je.',
      stuck:
        'Wannan spring ɗin ba ya tsayawa cikin daƙiƙa 10. Ku ƙara yawan rage girgiza ko tauri; kafin nan, components suna riƙe da na ƙarshe da ya tsaya.',
      reducedMotion:
        'Tsarinku yana son rage motsi, don haka babu abin da ke motsi a nan. Springs, dannawa da shigowa za su dawo idan ya daina nema.',
      noCornerShape:
        'Wannan burauza ba za ta iya zana siffofin kusurwoyi ba tukuna, don haka kowace kusurwa tana zama a zagaye.',
      everywhere: 'A kan kowane element, don duk abin da ke cikinsa:',
      oneComponent: 'A kan component ɗaya, a Angular:',
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
