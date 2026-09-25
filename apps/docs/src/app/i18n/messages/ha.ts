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
          'Layuka ma suna iya kasancewa a cikin juna. <code>groupBy</code> yana rukunta su bisa ginshiƙai, tare da <code>aggregate</code> na kowane ginshiƙi a layukan rukuni da kuma a layin <code>totals</code>; <code>children</code> yana nuna bayanai masu tsarin bishiya; kuma template na <code>nuiGridDetail</code> yana buɗewa a ƙarƙashin layi. Idan an rukunta layuka ko suna cikin juna, teburin <code>treegrid</code> ne.',
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
          groups: {
            title: 'Rukunoni da jimilla',
            text: 'Ku rukunta layuka bisa ginshiƙi ɗaya ko biyu. Layukan rukuni suna ƙirga odar da ke cikinsu, suna nuna jimilla da matsakaicin kuɗinsu, kuma <code>totals</code> yana ƙara haka ga dukan layuka. Kibiyar hagu tana rufe rukuni.',
          },
          tree: {
            title: 'Bayanai masu tsarin bishiya',
            text: '<code>children</code> yana ba kowane folder fayilolinsa. Layuka suna buɗewa da kibiyar dama ko toggle ɗinsu, kuma <code>[(expanded)]</code> yana riƙe waɗanda ke buɗe. Bincike yana barin folders da ke ɗauke da sakamako a buɗe.',
          },
          details: {
            title: 'Cikakken bayanin layi',
            text: 'Template na <code>nuiGridDetail</code> yana nuna kayayyakin kowace oda a ƙarƙashinta, daga ginshiƙin toggles, kuma <code>[(details)]</code> yana riƙe waɗanda ke buɗe.',
          },
          live: {
            title: 'Bayanai kai tsaye, fitarwa da bugawa',
            text: 'Farashi suna canzawa duk bayan daƙiƙa biyu, kuma <code>flash</code> yana nuna cells da suka canza. <code>exportXlsx()</code> yana sauke spreadsheet na gaske, <code>print()</code> yana buga kowane layi, kuma <code>layout="auto"</code> yana nuna katuna a ƙananan allo.',
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
              'groupBy, collapsed':
                'Ginshiƙan da ake rukunta layuka bisa su, na waje da farko, da keys na rukunonin da ke rufe.',
              children:
                'Layukan da ke ƙarƙashin wani layi: grid ɗin yana nuna bayanai masu tsarin bishiya.',
              'expanded, details':
                'Keys na layukan da ke buɗe a bayanai masu tsarin bishiya, da na layukan da cikakken bayaninsu ke buɗe.',
              'totals, flash':
                'Layin aggregates a kan dukan layukan da aka tace; cells masu walƙiya idan rubutunsu ya canza, a layukan da ke da <code>rowId</code> mai ɗorewa.',
              layout:
                '<code>list</code> yana nuna layuka a matsayin katuna, <code>auto</code> kuma yana yin haka a ƙananan allo.',
              'exportXlsx, print':
                'Layukan da aka tace aka jera a matsayin spreadsheet; yana buga kowane layi.',
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
              aggregate:
                'Abin da layukan rukuni da layin jimilla ke nunawa: jimilla, matsakaici, mafi ƙanƙanta, mafi girma, ƙidaya, ko function.',
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
          NuiGridDetail: {
            summary:
              'Cikakken bayanin layi, ana nuna shi a ƙarƙashinsa idan an buɗe. Context ɗin yana ɗauke da layin.',
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
          [
            'Kibiyar dama da ta hagu a kan rukuni',
            'Suna buɗe shi ko rufe shi; haka ma a kan cell na farko na layi mai layuka a ƙarƙashinsa.',
          ],
          ['Enter a kan rukuni', 'Yana buɗe shi ko rufe shi; Space yana zaɓar layukansa.'],
          ['Enter a kan toggle na cikakken bayani', 'Yana nuna ko ɓoye cikakken bayanin layin.'],
        ],
        notes: [
          '<code>&lt;table&gt;</code> ne na asali mai <code>role="grid"</code>, mai suna daga <code>label</code>. Taken kowane ginshiƙi yana ɗauke da <code>aria-sort</code>, layukan da ake iya zaɓa kuma <code>aria-selected</code>.',
          'Grid ɗin yana ɗaukar wuri ɗaya kawai a jerin Tab. Focus yana tafiya daga cell zuwa cell ta <code>tabindex</code> mai yawo (roving), don haka manhajojin karanta allo suna karanta kowane cell tare da taken layinsa da na ginshiƙinsa.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> da <code>aria-colindex</code> suna zama daidai yayin da aka raba layuka zuwa shafuka ko ake nuna wasu kawai.',
          'Ana sanar da jerawa, tacewa, sauya shafi da kurakuran gyarawa a yankin yanayi, cikin ladabi (polite).',
          'Layukan da aka rukunta ko ke cikin juna suna mayar da teburin <code>treegrid</code>: layuka suna ɗauke da <code>aria-level</code>, <code>aria-setsize</code> da <code>aria-posinset</code>, da <code>aria-expanded</code> idan suna buɗewa. Ana karanta aggregates tare da irinsu, kamar “Sum: 475”.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Component na chat na AI don Angular',
        summary: 'Ku yi magana da model: amsoshi kaɗan-kaɗan, kayan aiki, sigogi da fayiloli.',
        description:
          'Chat na Angular mai sauƙin amfani ga kowa don mataimakan AI: amsoshin Markdown kaɗan-kaɗan, tunani, kiran kayan aiki, majiyoyi, sigogi da fayiloli.',
        apiDescription:
          'Bayanin API na chat ɗin Needless UI: inputs na nui-chat, NuiChatSession mai kawo amsoshi, saƙonni, templates na kayan aiki da masu karanta stream.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na chat ɗin Needless UI: jerin saƙonni masu suna, Page Up da Page Down, da sanar da amsoshi idan sun kammala.',
        overview: [
          'Chat ɗin shi ne duk abin da ke tsakanin masu amfaninku da model. Ku ƙirƙiri <code>NuiChatSession</code> da function na <code>respond</code>, sai <code>&lt;nui-chat&gt;</code> ya yi sauran: yana nuna amsar a matsayin Markdown yayin da take zuwa, yana bin ta zuwa ƙasan shafi har sai mai karatu ya gungura sama, kuma yana mayar da maɓallin aikawa ya zama maɓallin tsayawa har amsar ta iso.',
          '<code>respond</code> yana dawo da rubutu, promise, <code>async function*</code> ko Observable, don haka kowane API yana dacewa. Bayan rubutu, amsa na iya ɗauke da tunanin model, kiran kayan aikinsa (da templates ɗinku ke zanawa) da majiyoyin da ya yi amfani da su. <code>nuiEventStream</code> yana karanta server-sent events da yawancin APIs na model ke aikowa.',
          'Babu abin da ke ɓacewa: amsar da aka sake nema ko tambayar da aka gyara tana zama sabuwar siga kusa da tsohuwar, kuma tattaunawar tana riƙe kowane reshe. Manhajojin karanta allo suna karanta kowace amsa idan ta kammala, ba kalma-kalma ba.',
        ],
        examples: {
          assistant: {
            title: 'Mataimaki',
            text: 'Shawarwari ne ke fara tattaunawa. Amsoshi suna zuwa kaɗan-kaɗan a matsayin Markdown; ku tsayar da su, ku sake nema, ku ba su ƙima, ko ku gyara tambayarku. <code>attach</code> yana karɓar fayiloli ta zaɓi, liƙawa ko ja da sauke.',
          },
          tools: {
            title: 'Tunani, kayan aiki da majiyoyi',
            text: 'Deltas suna ƙara tunanin model, kiran kayan aiki da majiyoyi a cikin amsar. <code>nuiChatTool</code> yana zana kayan aikin hasashen yanayi a matsayin kati; sauran kayan aiki suna naɗewa tare da input da output ɗinsu.',
          },
          server: {
            title: 'Streaming daga server',
            text: '<code>nuiEventStream</code> yana karanta event stream irin na OpenAI, kuma <code>NuiChatError</code> yana nuna saƙonsa. <code>all()</code> yana adana tattaunawar tare da dukan sigoginta.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Tattaunawar da akwatin rubutu, a tare.',
            members: {
              session: 'Tattaunawar da za a nuna.',
              assistant:
                'Sunan mataimakin, a cikin headings da manhajojin karanta allo ke karantawa.',
              headingLevel:
                'Matakin heading na kowane saƙo, wanda manhajojin karanta allo kaɗai ke nunawa. Headings a cikin amsoshi suna sauka mataki ɗaya.',
              announce:
                'Abin da manhajojin karanta allo ke sanarwa idan amsa ta kammala: dukanta, gajeriyar sanarwa, ko ba komai.',
              images:
                'Yana nuna hotuna a amsoshi. In ba haka ba, rubutunsu mahaɗa ne zuwa gare su.',
              value: 'Rubutun da ake rubutawa.',
              placeholder: 'Rubutun da ake nunawa a filin da babu komai.',
              suggestions: 'Saƙonnin da ake aikawa da dannawa ɗaya, har zuwa saƙon farko.',
              sendOn:
                'Ko Enter ne ke aikawa, ko Ctrl ko ⌘ + Enter. <code>auto</code> yana aikawa da Enter inda akwai allon madannai; a allon taɓawa, Return yana fara sabon layi, maɓallin kuma yana aikawa.',
              disabled: 'Yana hana akwatin rubutu aikawa.',
              attach: 'Yana karɓar fayiloli ta zaɓi, liƙawa ko ja da sauke.',
              accept:
                'Irin fayilolin da za a karɓa, kamar a <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Yawan fayilolin da saƙo ɗaya zai iya ɗauka.',
              maxSize: 'Mafi girman fayil da za a karɓa, a bytes.',
              labels: 'Kowane rubutu da chat ɗin ke nunawa ko sanarwa, don fassarawa.',
              rated:
                'Yana fitar da amsar da mai karatu ya ba ƙima, tare da ƙimar, ko <code>null</code> idan ya janye ta.',
              focus: 'Yana kai focus kan filin rubutu.',
              scrollToEnd: 'Yana gungurawa zuwa sabon saƙo, kuma yana bin sa.',
            },
          },
          NuiChatSession: {
            summary:
              'Tattaunawar, ba tare da DOM ba. Ku ƙirƙira ta a cikin component, da zaɓuɓɓukan <code>respond</code>, <code>messages</code> da <code>id</code>.',
            members: {
              respond:
                'Function ɗinku: yana rubuta amsa ga <code>request.messages</code>, kuma yana tsayawa idan an soke <code>request.signal</code>.',
              messages: 'Tattaunawar da ke kan allo.',
              all: 'Kowane saƙo na kowace siga, don adanawa da mayarwa a matsayin <code>messages</code>.',
              busy: 'Ko akwai amsa da ke kan hanya.',
              send: 'Yana aika saƙo kuma yana neman amsa.',
              stop: 'Yana tsayar da amsar, yana riƙe abin da ta rubuta.',
              retry: 'Yana sake tambaya. Sabuwar amsar siga ce kusa da tsohuwar.',
              edit: 'Yana aika sabuwar siga ta ɗaya daga cikin saƙonnin mai amfani.',
              versions: 'Kowace siga ta saƙo, mafi tsufa da farko.',
              show: 'Yana sauya tattaunawar zuwa wannan siga.',
              rate: 'Yana adana ra’ayin mai karatu kan amsa.',
              'remove, load, clear':
                'Yana cire saƙo da abin da ke biye da shi, yana maye gurbin tattaunawar, ko yana farawa daga farko.',
            },
          },
          NuiChatMessage: {
            summary: 'Saƙo ɗaya. Saƙonni masu <code>parent</code> ɗaya sigogin juna ne.',
            members: {
              'id, parent': 'Key na saƙon, da saƙon da yake biye da shi.',
              role: 'Wanda ya rubuta shi.',
              text: 'Markdown daga mataimakin, rubutu zalla daga mai amfani.',
              status: 'Matsayin amsa, daga jira zuwa kammalawa.',
              reasoning: 'Abin da model ya yi tunani kafin ya amsa.',
              tools: 'Kayan aikin da ya kira, tare da yanayinsu, input da output ɗinsu.',
              sources: 'Shafukan da ya yi amfani da su.',
              attachments: 'Fayilolin da aka aika tare da shi.',
              rating: 'Ra’ayin mai karatu.',
              data: 'Duk wani abu da za a ajiye tare da shi, kamar sunan model.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Yana zana kiran kayan aiki, kamar kati don hasashen yanayi. Context ɗin yana ɗauke da kiran da saƙonsa.',
            members: {
              nuiChatTool:
                'Sunan kayan aikin. Idan babu, yana zana duk kiran da wani template bai ambata ba.',
            },
          },
          NuiChatThread: {
            summary:
              'Tattaunawar ita kaɗai, don tsarin shafi naku. Yana karɓar inputs na <code>nui-chat</code> da suka shafi tattaunawar.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Akwatin rubutu shi kaɗai. Yana karɓar inputs na <code>nui-chat</code> da suka shafi rubutu.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Abin da <code>nuiEventStream</code> ke bayarwa ga kowane event. <code>nuiTextStream</code> yana karanta rubutu zalla, <code>nuiJsonStream</code> kuma layukan JSON; dukansu uku suna karɓar response na <code>fetch</code>.',
            members: {
              event: 'Sunan event ɗin.',
              data: 'Layukan bayanansa, a haɗe.',
              id: 'Id na ƙarshe da stream ɗin ya aiko.',
            },
          },
          NuiChatError: {
            summary:
              'Ku jefa shi (throw) daga <code>respond</code> don a nuna saƙonsa. Kowane kuskure dabam yana nuna saƙo na gama-gari, don kada wani abu na ciki ya fita.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down da Page Up', 'Suna matsawa zuwa saƙo na gaba ko na baya.'],
          ['Ctrl + End da Ctrl + Home', 'Suna fita daga tattaunawar, gaba ko baya.'],
          ['Enter', 'Yana aikawa. Da Shift, yana fara sabon layi.'],
          ['Escape', 'Yana dakatar da gyaran saƙo.'],
        ],
        notes: [
          'Tattaunawar <code>feed</code> ce ta abubuwan <code>article</code>. Kowanne yana da suna daga heading da manhajojin karanta allo kaɗai ke gani, kamar “You said”, kuma yana ɗauke da <code>aria-posinset</code> da <code>aria-setsize</code>.',
          'Amsar da ake rubutawa tana da <code>aria-busy</code>. Idan ta kammala, ana sanar da ita gaba ɗaya; ana sanar da kuskure nan take.',
          'Kowane maɓallin icon yana da suna da tooltip. Maɓallan ƙima maɓallan toggle ne, kuma mai sauya siga rukuni ne mai suna kamar “Version 2 of 3”.',
          'Tunani da kiran kayan aiki sassa ne na asali da ake buɗewa da rufewa. Cire fayil yana mayar da focus kan filin rubutu.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Component mai nuna Markdown don Angular',
        summary: 'Ku nuna Markdown lafiya, ko yayin da yake zuwa kaɗan-kaɗan.',
        description:
          'Mai nuna Markdown amintacce na Angular don amsoshin AI: teburorin GitHub, jerin ayyuka da tubalan code, duka elements na gaske masu santsi yayin streaming.',
        apiDescription:
          'Bayanin API na mai nuna Markdown ɗin Needless UI: inputs na nui-markdown, template na tubalan code, da parser da ke bayansa.',
        a11yDescription:
          'Sauƙin amfani na mai nuna Markdown ɗin Needless UI: headings, jeri da teburori na gaske, yankunan gungurawa masu suna, da maɓallin kwafa da ke magana.',
        overview: [
          'Mai nuna Markdown yana mayar da rubutu kamar wanda model ke rubutawa ya zama elements na gaske: headings, jeri da jerin ayyuka, ambato, teburori, tubalan code masu maɓallin kwafa, da mahaɗai. Yana mayar da rubutun bishiya kuma yana zana ta da templates, don haka ɗanyen HTML yana zama rubutu, kuma ba a taɓa saka komai a matsayin HTML ba.',
          'Da <code>streaming</code>, rubutun da aka rubuta rabi yana karantuwa kamar yadda zai kasance idan ya kammala: code fence da ke buɗe tuni tubalin code ne, <code>**</code> guda ɗaya yana jiran abokinsa, kuma cursor yana bin kalma ta ƙarshe. Tubalan da ba su canza ba suna riƙe DOM ɗinsu.',
          'Mahaɗai suna aiki ne kawai don adireshin yanar gizo, imel da waya, kuma hotuna suna zama mahaɗai har sai kun kunna <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Takarda',
            text: 'Headings suna farawa daga <code>headingLevel</code>, don su dace a ƙarƙashin na shafin. Faffaɗan teburori da code suna gungurawa a cikin yankunansu.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Rubutu iri ɗaya, haruffa kaɗan a lokaci guda. Babu alamar da ke bayyana ko na ɗan lokaci, kuma tubali na ƙarshe kaɗai ke sake nunawa.',
          },
          highlight: {
            title: 'Haskaka code',
            text: '<code>nuiMarkdownCode</code> yana zana tubalan code da template naku, a nan tare da ƙaramin mai haskakawa. Yana samun code ɗin da harshensa.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Yana nuna Markdown a matsayin elements.',
            members: {
              text: 'Markdown ɗin.',
              streaming: 'Rubutun yana ci gaba da zuwa.',
              headingLevel: 'Matakin heading na <code>#</code>. Masu zurfi suna biye, har zuwa 6.',
              images:
                'Yana nuna hotuna. In ba haka ba, rubutunsu mahaɗa ne zuwa gare su, domin hoto na iya bibiyar mutane.',
              labels: 'Rubutun maɓallin kwafa da makamantansu, don fassarawa.',
              codeTemplate:
                'Template na tubalin code daga wani wuri, kamar chat da ke ɗauke da wannan.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Yana zana tubalan code. Context ɗin yana ɗauke da code ɗin, <code>lang</code>, da <code>open</code> yayin da tubalin ke ci gaba da zuwa.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Parser da mataimakansa, don amfani ba tare da component ba.',
            members: {
              nuiParseMarkdown:
                'Bishiyar tubala da abubuwan cikin layi da component ɗin ke zanawa.',
              nuiMarkdownToText:
                'Rubutu zalla, layi ɗaya ga kowane tubali, don sanarwa ko samfoti.',
              nuiSafeUrl: 'Ko mahaɗa tana zuwa adireshin yanar gizo, imel ko waya.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Yana kai ga mahaɗai, maɓallan kwafa, da faffaɗan teburori da code don a gungura su.',
          ],
        ],
        notes: [
          'Headings, jeri, ambato, teburori masu headers na <code>th</code> da <code>scope</code>, da code, duka elements ne na gaske.',
          'Faffaɗan teburori da tubalan code suna gungurawa a cikin yanki mai karɓar focus; sunan yankin tebur yana fitowa daga headers ɗinsa.',
          'Akwatunan jerin ayyuka suna faɗin ko an kammala kowane aiki. Sunan maɓallin kwafa “Copy code” ne, kuma yana cewa “Copied” ta saƙon yanayi.',
          'Cursor na streaming a ɓoye yake daga manhajojin karanta allo, kuma ba ya motsi a yanayin rage motsi.',
        ],
      },
      calendar: {
        name: 'Calendar',
        title: 'Component na kalanda don Angular',
        summary: 'Ku zaɓi rana ɗaya, kwanaki a jere ko kwanaki da yawa, har ma ta allon madannai.',
        description:
          'Kalandar Angular mai sauƙin amfani ga kowa: zaɓin rana ɗaya, kwanaki a jere ko da yawa, min da max, kwanakin da aka hana, watanni kusa da juna da lambobin mako.',
        apiDescription:
          'Bayanin API na kalandar Needless UI: yanayin zaɓi na nui-calendar, min, max da kwanakin da aka hana, watanni kusa da juna, da lakabai.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na kalandar Needless UI: grid na kwanaki masu suna, maɓallan kibiya don rana da mako, Page Up da Page Down don wata.',
        overview: [
          'Kalandar tana zaɓar rana ɗaya, kwanaki a jere, ko kwanaki da yawa. Ƙimominta kwanan wata ne na ISO zalla, kamar <code>2026-09-25</code>, ba tare da yankin lokaci da zai sauya su ba, don haka suna tafiya kai tsaye zuwa server ko <code>&lt;input type="date"&gt;</code>.',
          'Makonni suna farawa daga ranar farko ta mako a yankin (locale), kuma sunaye da lambobi suna bin harshensa. <code>min</code>, <code>max</code> da <code>unavailable</code> suna hana wasu kwanaki, <code>months</code> yana nuna watanni da yawa kusa da juna, kuma take yana kai ku ga kallon watanni da shekaru don kwanan wata masu nisa.',
          'Ana iya isa ga kowace rana da allon madannai, kamar yadda yake a samfurin date picker na WAI-ARIA, kuma sunan kowace rana cikakken kwanan watanta ne.',
        ],
        examples: {
          delivery: {
            title: 'Ranar isar da kaya',
            text: 'Ba za a iya zaɓar kwanakin da suka gabaci yau, da waɗanda suka wuce <code>max</code>, da waɗanda <code>unavailable</code> ya hana ba, amma allon madannai yana ratsa su duk da haka.',
          },
          stay: {
            title: 'Kwanaki a jere',
            text: 'Da <code>selection="range"</code>, zaɓi na farko yana fara jerin, kuma zirin haske yana bin linzami har zuwa zaɓi na biyu. <code>months="2"</code> da <code>weekNumbers</code> suna nuna ƙarin abubuwa a lokaci ɗaya.',
          },
          'days-off': {
            title: 'Kwanaki da yawa',
            text: 'Da <code>selection="multiple"</code>, kowane zaɓi yana ƙara rana ko yana cire ta. <code>firstDay</code> yana fara mako a wata rana dabam da ta yankin.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Kalanda don zaɓar kwanaki.',
            members: {
              selection: 'Kwanaki nawa ne ake iya zaɓa.',
              value: 'Ranar da aka zaɓa.',
              values: 'Kwanakin da aka zaɓa, bi da bi.',
              range: 'Kwanakin da aka zaɓa a jere, har da na farko da na ƙarshe.',
              month: 'Watan da ake nunawa, ko na farko idan ana nuna da yawa.',
              view: 'Kwanaki, watanni ko shekaru.',
              'min, max': 'Rana ta farko da ta ƙarshe da ake iya zaɓa.',
              unavailable: 'Yana hana wasu kwanaki, kamar ranakun hutu.',
              months: 'Watanni kusa da juna.',
              weekNumbers: 'Yana nuna lambobin mako na ISO.',
              firstDay: 'Ranar farko ta mako, 1 ita ce Litinin. Idan ba a saita ba, ta yankin ce.',
              locale: 'Yana tsara sunaye da lambobi, kuma yana zaɓar ranar farko ta mako.',
              labels: 'Kowane rubutu da kalandar ke nunawa ko sanarwa, don fassarawa.',
              picked: 'Yana fitar da kowane zaɓi: rana ɗaya, ko kwanaki a jere idan an kammala.',
              focusDate: 'Yana kai focus na allon madannai kan wata rana, kuma yana nuna watanta.',
            },
          },
          NuiDateRange: {
            summary: 'Kwanaki a jere.',
            members: { 'start, end': 'Rana ta farko da ta ƙarshe, duka biyun a ciki.' },
          },
        },
        keyboard: [
          [
            'Kibiyar hagu da ta dama',
            'Suna zuwa rana ta baya ko ta gaba. Suna juyawa a rubutu daga dama zuwa hagu.',
          ],
          ['Kibiyar sama da ta ƙasa', 'Suna zuwa mako na baya ko na gaba.'],
          ['Home da End', 'Suna zuwa rana ta farko ko ta ƙarshe a mako.'],
          ['Page Up da Page Down', 'Suna zuwa wata na baya ko na gaba; da Shift, shekara.'],
          ['Enter ko Space', 'Yana zaɓar ranar, ko yana buɗe wata ko shekara.'],
          [
            'Escape',
            'Yana soke zaɓin farko na kwanaki a jere, ko yana komawa kallon da ya fi dalla-dalla.',
          ],
        ],
        notes: [
          'Kowane wata <code>grid</code> ne mai suna daga takensa, kuma cikakkun sunayen ranakun mako suna cikin <code>abbr</code>.',
          'Sunan kowace rana cikakken kwanan watanta ne, tare da “Today”, “unavailable” da farko ko ƙarshen kwanaki a jere. <code>aria-selected</code> yana nuna abin da aka zaɓa, <code>aria-disabled</code> kuma abin da ba za a iya zaɓa ba.',
          'Grid ɗin yana ɗaukar wuri ɗaya kawai a jerin Tab, tare da <code>tabindex</code> mai yawo. Maɓallan baya da gaba suna sanar da sabon watan.',
        ],
      },
      'date-picker': {
        name: 'Date picker',
        title: 'Components na zaɓar kwanan wata da lokaci don Angular',
        summary: 'Ku rubuta kwanan wata ko lokaci sashe-sashe, ko ku zaɓe shi a kalanda.',
        description:
          'Masu zaɓar kwanan wata, lokaci da kwanaki a jere na Angular masu sauƙin amfani ga kowa: sassa bisa tsarin yanki, kalanda a popover, presets da aiki da fom.',
        apiDescription:
          'Bayanin API na masu zaɓar kwanan wata na Needless UI: nui-date-field, nui-time-field, nui-date-picker da nui-date-range-picker, tare da presets.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na masu zaɓar kwanan wata na Needless UI: spinbutton ga kowane sashe na kwanan wata, da kalanda a cikin dialog.',
        overview: [
          'Ana rubuta filayen kwanan wata da lokaci sashe-sashe: rana, wata da shekara bisa tsarin yankin, sannan sa’o’i da mintuna a agogon sa’o’i 12 ko 24 na yankin. Kowane sashe spinbutton ne: ku rubuta lambobi, focus zai wuce zuwa sashe na gaba da kansa, ko ku canza ƙimar sashen da maɓallan kibiya. Ku liƙa cikakken kwanan wata, kuma kowane sashe zai cika.',
          'Masu zaɓa suna ƙara kalanda a cikin popover, don kwanan wata ɗaya ko kwanaki a jere tare da presets. Ƙimomi rubutun ISO ne zalla, kamar <code>2026-09-25</code> ko <code>2026-09-25T09:30</code>, kuma kowane fili yana aiki da Signal Forms, reactive forms da <code>ngModel</code>.',
          'A wannan gidan yanar gizo, misalai suna bin harshen shafin: ku sauya shi don ganin yadda tsari, alamomin rabewa da lambobi ke canzawa.',
        ],
        examples: {
          fields: {
            title: 'Filayen kwanan wata da lokaci',
            text: 'Ku rubuta lambobin, ko ku yi amfani da maɓallan kibiya. Danna Backspace karo na biyu yana komawa sashe na baya. <code>minuteStep</code> yana saita yawan mintunan da kibiyoyi ke motsawa.',
          },
          pickers: {
            title: 'Masu zaɓar kwanan wata',
            text: 'Maɓallin yana buɗe kalanda a kan ranar da aka zaɓa, kuma zaɓa yana rufe ta. Da <code>granularity="minute"</code>, mai zaɓar yana karɓar lokaci ma, kuma kalandar tana canza kwanan wata kawai.',
          },
          range: {
            title: 'Tsakanin kwanan wata biyu',
            text: 'Filaye biyu da kalanda mai watanni biyu. <code>nuiDateRangePresets()</code> yana ƙara kwanaki a jere da aka saba amfani da su; ƙimar tana zama null har sai an saita farko da ƙarshe a tsarin da ya dace.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Kwanan wata, ko kwanan wata da lokaci, da ake rubutawa sashe-sashe.',
            members: {
              value: 'Ƙimar, ko null har sai kowane sashe ya cika.',
              granularity: 'Yana tsayawa a rana, ko yana ci gaba zuwa sa’a, minti ko daƙiƙa.',
              'min, max':
                'Ƙima ta farko da ta ƙarshe da aka yarda da su. A wajensu, filin ba shi da inganci.',
              placeholder:
                'Inda sassan da babu komai ke farawa idan aka yi amfani da maɓallan kibiya.',
              hourCycle: 'Agogon sa’o’i 12 ko 24. Idan ba a saita ba, na yankin ne.',
              minuteStep: 'Yawan mintunan da maɓallan kibiya ke motsawa.',
              'disabled, readonly': 'Suna hana canje-canje.',
              locale: 'Yana saita tsari, alamomin rabewa, lambobi da agogo.',
              labels: 'Kowane rubutu da filin ke faɗa, don fassarawa.',
              invalid: 'Ko ƙimar tana wajen <code>min</code> da <code>max</code>.',
              focus: 'Yana kai focus kan sashe na farko da babu komai a ciki.',
            },
          },
          NuiTimeField: {
            summary:
              'Lokaci na rana da ake rubutawa sashe-sashe. Yana karɓar inputs iri ɗaya da filin kwanan wata.',
            members: { granularity: 'Yana tsayawa a sa’a, minti ko daƙiƙa.' },
          },
          NuiDatePicker: {
            summary:
              'Filin kwanan wata mai kalanda a cikin popover. Yana karɓar inputs na filin kwanan wata, da waɗannan.',
            members: {
              unavailable: 'Kwanakin da kalandar ba za ta bari a zaɓa ba.',
              'firstDay, weekNumbers': 'Ana miƙa su ga kalandar.',
              labels: 'Rubutun filin, na maɓallin da na kalandar.',
              show: 'Yana buɗe kalandar.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Filayen kwanan wata biyu masu kalanda ta kwanaki a jere. Yana karɓar inputs na mai zaɓar kwanan wata, da waɗannan.',
            members: {
              value:
                'Kwanakin a jere, ko null har sai an saita farko da ƙarshe a tsarin da ya dace.',
              presets: 'Kwanaki a jere masu suna, da ake zaɓa da danna ɗaya.',
              months: 'Watanni kusa da juna a cikin kalandar; ɗaya a ƙaramin allo.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Kwanaki a jere masu suna, tsayayyu ko waɗanda ake samarwa lokacin zaɓa.',
            members: {
              label: 'Sunansa.',
              range: 'Kwanakin a jere, ko function da ke samar da su.',
            },
          },
        },
        keyboard: [
          [
            'Lambobi',
            'Suna shiga sashen. Focus yana wucewa zuwa na gaba da zarar babu wata lamba da za ta iya biyowa.',
          ],
          [
            'Kibiyar sama da ta ƙasa',
            'Suna canza sashen mataki-mataki; Page Up da Page Down suna tafiya fiye da haka.',
          ],
          ['Kibiyar hagu da ta dama, Tab', 'Suna zuwa sashe na baya ko na gaba.'],
          ['Backspace', 'Yana share sashen, sannan yana komawa na baya.'],
          ['A da P', 'Suna saita AM ko PM.'],
        ],
        notes: [
          'Fili <code>group</code> ne: ku ba shi suna da <code>aria-label</code> ko <code>aria-labelledby</code>. Kowane sashe <code>spinbutton</code> ne mai sunan ɓangarensa, wanda ke karanta watanni da sunayensu, da sassan da babu komai a matsayin “Empty”.',
          'Sassan rubutu ne da ake iya gyarawa, don haka allon madannai na taɓawa yana buɗewa da lambobi.',
          'Sunan maɓallin mai zaɓar kwanan wata “Choose a date” ne, kuma popover ɗinsa <code>dialog</code> ne. Zaɓar kwanan wata yana mayar da focus kan maɓallin.',
          'Kalandar da ke ciki tana aiki kamar yadda <a href="/components/calendar">kalanda</a> ke yi.',
        ],
      },
      scheduler: {
        name: 'Scheduler',
        title: 'Component na jadawali don Angular',
        summary: 'Events a cikin wata, mako, rana ko ajanda, waɗanda ake ja zuwa wurinsu.',
        description:
          'Jadawalin Angular mai sauƙin amfani ga kowa: kallon wata, mako, rana da ajanda, events masu haɗuwa gefe da gefe, ja da sauya tsawo, da iko da allon madannai.',
        apiDescription:
          'Bayanin API na jadawalin Needless UI: kallo na nui-scheduler, events, gyarawa da zaɓi, outputs ɗinsa, da template na events.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na jadawalin Needless UI: grids na kwanaki da lokuta, events masu suna, da madadin allon madannai ga kowane ja.',
        overview: [
          'Jadawalin yana nuna events a wata, mako, rana ko ajanda. Events bayanai ne zalla masu lokutan ISO; waɗanda suka haɗu suna raba faɗin, events da suka ƙetare tsakar dare suna bayyana a kwanakin biyu, kuma events na duk yini suna tafiya a sama a matsayin zirare.',
          'Ba ya taɓa canza events ɗinku da kansa. Ku ja event, ko gefensa na ƙasa, sai <code>eventChange</code> ya ba da rahoton sabbin lokutan; ku zaɓi lokaci a kan grid, sai <code>slotSelect</code> ya ba da rahotonsa. <code>rangeChange</code> yana gaya muku kwanakin da ake nunawa, don ku ɗauko events ɗinsu.',
          'Duk abin da linzami ke yi, allon madannai ma yana yi: grid ɗin yana ɗaukar wuri ɗaya kawai a jerin Tab, maɓallan kibiya suna ratsa kwanaki da lokuta, kuma Alt tare da kibiyoyi yana matsar da event.',
        ],
        examples: {
          planner: {
            title: 'Mako don tsarawa',
            text: 'Da <code>editable</code> da <code>selectable</code>, ku ja events don matsar da su, ku ja gefensu na ƙasa don sauya tsawonsu, kuma ku ja a kan lokacin da babu komai don ƙara sabo. Misalin yana sabunta events ɗinsa daga outputs.',
          },
          month: {
            title: 'Wata da ajanda',
            text: 'Events da suka ratsa kwanaki suna tafiya a matsayin zirare; rana mai cunkoso tana nuna yawan sauran events ɗinta. <code>views</code> yana ba da wata kawai da ajandar kwanaki <code>agendaDays</code> masu zuwa.',
          },
          rooms: {
            title: 'Ɗakunan taro a rana ɗaya',
            text: '<code>nuiSchedulerEvent</code> yana zana kowace ajiyar wuri tare da ɗakinta da mai shirya ta. <code>slotMinutes="15"</code> yana sa layuka su fi siriri.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Events a wata, mako, rana ko ajanda.',
            members: {
              events: 'Events da za a nuna.',
              view: 'Kallon da ake nunawa.',
              views: 'Nau’o’in kallo da mutane za su iya sauyawa a tsakaninsu.',
              date: 'Ranar da ake nunawa, da inda focus na allon madannai yake.',
              slotMinutes:
                'Mintunan kowane layi a grid na lokaci, da matakin da events ke matsawa da shi.',
              scrollHour: 'Sa’ar da grid na lokaci ke buɗewa a kanta.',
              agendaDays: 'Kwanakin da ajanda ke dubawa a gaba.',
              editable: 'Ana iya matsar da events da sauya tsawonsu, da linzami da allon madannai.',
              selectable: 'Ana iya zaɓar lokaci a kan grid, don ƙirƙirar events.',
              firstDay: 'Ranar farko ta mako, 1 ita ce Litinin. Idan ba a saita ba, ta yankin ce.',
              headingLevel: 'Matakin heading na take; kwanakin ajanda suna sauka mataki ɗaya.',
              locale: 'Yana tsara kwanaki da lokuta.',
              labels: 'Kowane rubutu da jadawalin ke nunawa ko sanarwa, don fassarawa.',
              eventClick: 'Yana fitar da event da aka danna, ko aka buɗe da Enter.',
              eventChange:
                'Yana fitar da sabbin lokutan event bayan an matsar da shi ko an sauya tsawonsa.',
              slotSelect: 'Yana fitar da lokacin da aka zaɓa a kan grid.',
              rangeChange: 'Yana fitar da rana ta farko da ta ƙarshe da ake nunawa idan sun canza.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Event ɗaya. Ƙarshen event mai lokaci ba ya ciki; ƙarshen event na duk yini shi ne ranarsa ta ƙarshe.',
            members: {
              'id, title': 'Key ɗinsa, da abin da yake nunawa.',
              'start, end': 'Kwanan wata da lokaci, ko kwanan wata kawai ga events na duk yini.',
              allDay: 'Idan ba a saita ba, ko <code>start</code> ba shi da lokaci.',
              tone: 'Launinsa.',
              editable: 'Ko ana iya matsar da shi, ko mene ne jadawalin ya ce.',
              data: 'Duk wani abu da za a ajiye tare da shi.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary:
              'Yana zana events. Context ɗin yana ɗauke da event ɗin da lokacinsa a matsayin rubutu.',
            members: {},
          },
        },
        keyboard: [
          [
            'Maɓallan kibiya',
            'Suna matsawa rana ɗaya ko slot ɗaya. Hagu da dama suna juyawa a rubutu daga dama zuwa hagu.',
          ],
          ['Page Up da Page Down', 'Suna zuwa wata, mako ko rana ta baya ko ta gaba.'],
          ['Shift + maɓallan kibiya', 'Suna faɗaɗa lokacin da aka zaɓa.'],
          ['Enter ko Space a kan cell', 'Yana shiga events ɗinsa, ko yana zaɓar lokacinsa.'],
          [
            'Kibiyar sama da ta ƙasa a kan event',
            'Suna zuwa event na baya ko na gaba a cikin cell ɗin.',
          ],
          ['Alt + maɓallan kibiya a kan event', 'Suna matsar da shi da slot ɗaya ko rana ɗaya.'],
          ['Alt + Shift + kibiyar sama ko ta ƙasa', 'Suna rage ko ƙara tsawon event ɗin.'],
          [
            'Escape',
            'Yana komawa cell ɗin, yana watsar da lokacin da aka zaɓa, ko yana soke jan da ake yi.',
          ],
        ],
        notes: [
          'Wata, mako da rana <code>grid</code> ne, kowanne da suna daga takensa. Kwanaki ne taken ginshiƙai, lokuta kuma taken layuka, don haka ana karanta kowane cell tare da ranarsa da lokacinsa.',
          'Kowane event maɓalli ne mai suna daga takensa, ranarsa da lokacinsa, kamar “Standup, Friday, September 25, 9:00 – 9:30 AM”. Matsarwa ko sauya tsawo yana sanar da sabon lokacin.',
          'Duk abin da ake yi da ja yana da madadi a allon madannai, don haka babu wanda ke buƙatar linzami.',
          'Nau’o’in kallo maɓallan toggle ne a cikin rukuni, kuma zuwa wani mako ko wata yana sanar da takensa.',
        ],
      },
      splitter: {
        name: 'Splitter',
        title: 'Splitter da panes masu sauya girma don Angular',
        summary: 'Panes gefe da gefe ko a saman juna, da handles don sauya girmansu.',
        description:
          'Splitter na Angular mai sauƙin amfani ga kowa: panes masu sauya girma gefe da gefe ko a saman juna, iyakoki, naɗewa, ajiye girma da iko da allon madannai.',
        apiDescription:
          'Bayanin API na splitter ɗin Needless UI: orientation da girman nuiSplitter, iyakoki da naɗewar panes, da handles da ke tsakaninsu.',
        a11yDescription:
          'Allon madannai da sauƙin amfani na splitter ɗin Needless UI: handles masu karɓar focus da ƙima bisa window splitter, maɓallan kibiya, Home, End da Enter.',
        overview: [
          'Splitter yana raba sararinsa tsakanin panes, da handle tsakanin kowane biyu. Ku ja handle, ko ku kai focus kansa sannan ku yi amfani da maɓallan kibiya. Girman panes kaso ne da jimillarsu ta kai 100, kuma <code>[(sizes)]</code> yana haɗa su.',
          'Kowane pane yana karɓar girmansa na farko, mafi ƙanƙanta da mafi girma a pixels, rems ko kaso. Pane mai <code>collapsible</code> yana naɗewa idan aka ja shi ƙasa da rabin mafi ƙanƙantarsa, ko da Enter a kan handle ɗinsa, kuma yana dawowa da girman da yake da shi a da.',
          'Da <code>storageKey</code>, ana ajiye girman panes a <code>localStorage</code>, don haka mutane suna samun tsarin shafin yadda suka bar shi a ziyararsu ta gaba.',
        ],
        examples: {
          editor: {
            title: 'Editor na code',
            text: 'Fayiloli, code da samfoti. Panes na fayiloli da na samfoti suna naɗewa, code yana riƙe aƙalla 30% na faɗin, kuma ana ajiye girman panes.',
          },
          stacked: {
            title: 'Panes a saman juna',
            text: '<code>orientation="vertical"</code> yana jera panes a saman juna, kuma <code>[(sizes)]</code> yana karanta girmansu yayin da suke canzawa.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Panes masu handles a tsakaninsu.',
            members: {
              orientation: 'Gefe da gefe, ko a saman juna.',
              sizes: 'Rabon kowane pane, a kaso, bi da bi.',
              storageKey:
                'Yana ajiye girman panes a <code>localStorage</code> ƙarƙashin wannan key.',
              step: 'Nisan da maɓallan kibiya ke matsar da handle, a kaso. Ninki biyu da Shift.',
              move: 'Yana matsar da iyakar da ke bayan pane da wani kaso.',
            },
          },
          NuiSplitterPane: {
            summary: 'Pane ɗaya. Girmansa yana karɓar pixels, rems ko kaso.',
            members: {
              defaultSize: 'Girmansa na farko, idan babu girman da za a maido.',
              min: 'Girmansa mafi ƙanƙanta.',
              max: 'Girmansa mafi girma.',
              collapsible:
                'Yana naɗewa: idan aka ja shi ƙasa da rabin mafi ƙanƙantarsa, ko da Enter.',
              collapsedSize: 'Girmansa idan ya naɗe, kamar siririn layin icons.',
              label: 'Yana ba handle ɗin da ke sauya girmansa suna.',
            },
          },
          NuiSplitterHandle: {
            summary: 'Handle da ke tsakanin panes biyu.',
            members: {
              label: 'Yana ba shi suna, idan lakabin pane ɗin bai ba shi ba.',
              disabled: 'Ba ya motsi.',
              toggle: 'Yana naɗe pane da ke kusa da shi, ko yana dawo da shi.',
            },
          },
        },
        keyboard: [
          [
            'Kibiyar hagu da ta dama',
            'Suna matsar da handle tsakanin panes da ke gefe da gefe. Suna juyawa a rubutu daga dama zuwa hagu.',
          ],
          ['Kibiyar sama da ta ƙasa', 'Suna matsar da handle tsakanin panes da ke saman juna.'],
          ['Shift + maɓallan kibiya', 'Suna matsar da shi ninki biyu.'],
          [
            'Home da End',
            'Suna kai pane ɗin da ya gabaci handle zuwa girmansa mafi ƙanƙanta ko mafi girma.',
          ],
          ['Enter', 'Yana naɗe pane mai naɗewa, ko yana dawo da shi.'],
        ],
        notes: [
          'Kowane handle <code>separator</code> ne mai karɓar focus, kamar a tsarin window splitter na WAI-ARIA: ƙimarsa ita ce girman pane ɗin da ya gabace shi, a cikin iyakokin wannan pane, kuma <code>aria-controls</code> yana nuni zuwa pane ɗin.',
          'Ku ba handles suna ta <code>label</code> na panes: “Files” yana gaya wa manhajar karanta allo abin da handle ke sauya girmansa.',
          'Danna handle sau biyu ma yana naɗe pane ɗinsa, kuma yayin ja, handle ɗin yana riƙe linzamin, don haka motsi mai sauri ba ya kuɓuce masa.',
        ],
      },
      tour: {
        name: 'Tour',
        title: 'Component na rangadi mai jagora don Angular',
        summary:
          'Kati ga kowane mataki, kusa da abin da yake bayani a kai, da sauran shafin a dusashe a kewaye.',
        description:
          'Rangadin manhaja na Angular mai sauƙin amfani ga kowa: kati kusa da target na kowane mataki, haske kewaye da shi, matakai masu mu’amala da focus mai komawa.',
        apiDescription:
          'Bayanin API na rangadin Needless UI: matakan nui-tour, binding na open da step, outputs ɗinsa, da target, matsayi da hooks na kowane mataki.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na rangadin Needless UI: kowane kati dialog ne mai suna daga takensa, riƙewa da mayar da focus, da Escape don fita.',
        overview: [
          'Rangadi yana zagaya da mutane cikin shafi, mataki-mataki. Kowane mataki yana nuni zuwa element da kati a gefensa, kuma yana dusashe sauran shafin da ke kewaye da shi; matakin da ba shi da target yana bayyana a tsakiya.',
          'Matakai bayanai ne zalla: target (selector, element ko function da ke nemo shi), take, da abun ciki a matsayin rubutu ko template. <code>beforeShow</code> yana aiki da farko, don mataki ya iya buɗe panel ɗin da target ɗinsa ke ciki, kuma idan target ɗin ba ya cikin gani, ana gungurawa zuwa gare shi.',
          'Kowane kati dialog ne. Modal ne, sai dai idan matakin <code>interactive</code> ne: a lokacin, mutane za su iya amfani da abin da yake nuni zuwa gare shi. Escape yana ƙare rangadin, kuma focus yana komawa inda yake a da.',
        ],
        examples: {
          basics: {
            title: 'Kallon farko',
            text: 'Matakai huɗu, na farkon ba shi da target. <code>finished</code> da <code>dismissed</code> suna bambanta hanyoyin ƙarewa biyu.',
          },
          interactive: {
            title: 'Matakan gwadawa',
            text: '<code>beforeShow</code> yana buɗe saituna kafin mataki na biyu ya yi nuni cikinsu, kuma <code>interactive</code> yana barin mutane su yi amfani da switch ɗin yayin da katin ke buɗe.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Rangadi mai jagora.',
            members: {
              steps: 'Matakan, bi da bi.',
              open: 'Ko rangadin yana gudana.',
              step: 'Matakin da ake nunawa, daga 0.',
              labels: 'Kowane rubutu da yake nunawa, don fassarawa.',
              finished: 'Yana fitarwa idan an kammala mataki na ƙarshe.',
              dismissed: 'Yana fitar da matakin da rangadin ya ƙare a kai, idan ya ƙare da wuri.',
              start: 'Yana fara rangadin, daga mataki na farko ko wanda aka bayar.',
              end: 'Yana ƙare rangadin, a matsayin wanda aka kammala ko wanda aka watsar.',
            },
          },
          NuiTourStep: {
            summary: 'Mataki ɗaya na rangadin.',
            members: {
              target: 'Abin da yake nuni zuwa gare shi. Idan babu, katin yana bayyana a tsakiya.',
              title: 'Taken katin.',
              content: 'Rubutunsa, ko template.',
              side: 'Gefen target ɗin da katin zai kasance.',
              align: 'Yadda katin ke daidaita da target ɗin.',
              padding: 'Sarari kewaye da target ɗin a cikin hasken, a pixels.',
              interactive: 'Ana iya amfani da target ɗin yayin da katin ke buɗe.',
              beforeShow:
                'Yana aiki kafin matakin ya bayyana. Idan ya dawo da promise, rangadin yana jiran sa.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Yana ratsa maɓallan katin. A matakan modal, focus yana zama a cikin katin.'],
          ['Enter ko Space', 'Yana danna maɓallin da ke da focus: Next, Back ko Done.'],
          ['Escape', 'Yana ƙare rangadin.'],
        ],
        notes: [
          'Kowane kati <code>dialog</code> ne mai suna daga takensa da bayani daga abun cikinsa. Focus yana zuwa kan babban maɓallinsa a kowane mataki, kuma yana komawa inda yake a da idan rangadin ya ƙare.',
          'Matakan modal suna hana sauran shafin aiki (inert). Matakai masu mu’amala ba modal ba ne, don haka ana iya kaiwa ga target ɗinsu da allon madannai da kuma linzami.',
          'Ci gaban rangadin rubutu ne, kamar “2 of 4”; ɗigogin suna zana shi ne kawai.',
        ],
      },
      dropzone: {
        name: 'Dropzone',
        title: 'Component na dropzone da ɗora fayiloli don Angular',
        summary:
          'Ku sauke fayiloli ko ku zaɓe su, tare da dubawa, samfoti da ɗorawa mai nuna ci gaba.',
        description:
          'Dropzone na Angular mai sauƙin amfani ga kowa: ja da sauke, folders da liƙawa, duba iri da girma, samfotin hotuna, da ɗorawa mai nuna ci gaba da sake gwadawa.',
        apiDescription:
          'Bayanin API na dropzone ɗin Needless UI: fayiloli da dubawar nui-dropzone, function na ɗorawa da jerin jiransa, outputs ɗinsa da rubutunsa.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na dropzone ɗin Needless UI: yanki da yake maɓalli, sanar da sakamako, da sandunan ci gaba da ayyuka masu suna.',
        overview: [
          'Dropzone yana karɓar fayilolin da aka sauke a kansa, waɗanda aka zaɓa da mai zaɓar fayiloli, ko waɗanda aka liƙa. Ana karanta dukan abin da ke cikin folders da aka sauke, kuma kowane fayil yana riƙe hanyarsa.',
          'Ana duba kowane fayil da <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> da function ɗinku na <code>validate</code>, kuma ana jera waɗanda aka ƙi tare da dalilin ƙin su. Hotuna suna samun samfoti.',
          'Ba tare da function na <code>upload</code> ba, dropzone ɗin yana riƙe fayilolin don fom, a cikin <code>[(files)]</code>. Idan akwai shi, yana ɗora su kaɗan-kaɗan a lokaci guda, tare da nuna ci gaba, sokewa da sake gwadawa. Ku miƙa <code>signal</code> na ɗorawar ga <code>fetch</code>, don sokewa ta dakatar da ita.',
        ],
        examples: {
          upload: {
            title: 'Ɗora fayiloli',
            text: 'Ɗorawar gwaji tana ba da rahoton ci gabanta mataki-mataki. Fayilolin da sunansu ke ɗauke da “fail” suna kasawa, don nuna sake gwadawa, kuma <code>directory</code> yana ƙara maɓallin zaɓar folder.',
          },
          attach: {
            title: 'Fayiloli da ake haɗawa da fom',
            text: 'Babu <code>upload</code>: dropzone ɗin yana riƙe takardu har guda uku a cikin <code>[(files)]</code>, kuma rubutunsa na kansa yana maye gurbin na asali.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Wurin sauke fayiloli, ko zaɓar su.',
            members: {
              files: 'Fayilolin da yake riƙe da su, bi da bi.',
              accept:
                'Irin fayilolin da yake karɓa, kamar a <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Fiye da fayil ɗaya a lokaci guda.',
              directory: 'Yana ba da maɓallin zaɓar folder.',
              maxFiles: 'Iyakar yawan fayilolin da yake riƙewa.',
              'maxSize, minSize': 'Mafi girma da mafi ƙanƙantar fayil, a bytes.',
              validate: 'Yana duba kowane fayil. Idan ya dawo da saƙo, an ƙi fayil ɗin.',
              upload: 'Yana aika fayil. Idan babu shi, ana riƙe fayiloli ne kawai.',
              concurrency: 'Fayiloli nawa ne ake ɗorawa a lokaci guda.',
              hint: 'Layi a ƙarƙashin rubutun yankin, kamar irin fayilolin da yake karɓa.',
              disabled: 'Ba ya karɓar fayiloli.',
              labels: 'Kowane rubutu da yake nunawa ko sanarwa, don fassarawa.',
              uploaded:
                'Yana fitar da fayil da aka ɗora, tare da abin da <code>upload</code> ya dawo da shi.',
              rejected: 'Yana fitar da fayilolin da aka ƙi, tare da dalilai.',
              queue: 'Jerin jiran ɗorawa, don sokewa, sake gwadawa da karanta ci gaba daga code.',
              take: 'Yana ƙara fayiloli daga code, yana duba kowanne.',
            },
          },
          NuiUploader: {
            summary:
              'Yana aika fayil ɗaya: yana ba da rahoton ci gaba daga 0 zuwa 1, kuma yana tsayawa idan an soke signal ɗin.',
            members: {
              '(file, context)': 'Yana dawo da promise na duk abin da server ɗinku ya amsa.',
            },
          },
        },
        keyboard: [
          ['Enter ko Space', 'A kan yankin, yana buɗe mai zaɓar fayiloli.'],
          ['Ctrl + V ko ⌘ + V', 'A kan yankin, yana ƙara fayilolin da aka liƙa.'],
          ['Tab', 'Yana ratsa yankin da ayyukan kowane fayil.'],
        ],
        notes: [
          'Yankin maɓalli ne, don haka yana aiki ba tare da linzami ba, kuma layin ƙarin bayani yana bayyana shi.',
          'Ana sanar da fayilolin da aka ƙara da waɗanda aka ƙi. Kowace sandar ci gaba <code>progressbar</code> ce mai sunan fayil ɗinta, kuma kowane aiki yana da suna daga abin da yake yi, kamar “Remove beach.jpg”.',
          'Samfoti na ado ne: sunan fayil ne ke faɗin wane fayil ne.',
        ],
      },
      mask: {
        name: 'Input mask',
        title: 'Directive na input mask don Angular',
        summary:
          'Filayen rubutu da ke tsara kansu yayin rubutu: kwanan wata, katuna, IBAN, lambobi.',
        description:
          'Input mask na Angular: ku tsara filayen rubutu yayin da ake rubutu, da cursor da ke riƙe wurinsa, mataimaka don katuna da IBAN, da tantancewar fom.',
        apiDescription:
          'Bayanin API na input mask na Needless UI: directive ɗin nuiMask, tokens ɗinsa da ƙimarsa, da mataimaka don lambobin kati da IBAN.',
        a11yDescription:
          'Sauƙin amfani na input mask ɗin Needless UI: filaye na asali masu lakabinsu, allon lambobi a wayoyi, da gogewa da ke tsallake literals.',
        overview: [
          'Mask yana tsara filin rubutu yayin da ake rubutu: <code>00/00/0000</code> yana saka alamomin /, <code>AA 000 AA</code> kuma yana karɓar haruffa da lambobi bi da bi. Haruffan da ba su dace ba ba sa shiga, kuma cursor yana riƙe wurinsa idan aka yi rubutu a tsakiya.',
          'Mask yana ƙunshe da tokens da literals (haruffa tsayayyu): <code>0</code> lamba ce, <code>a</code> harafi, <code>*</code> ko wanne daga cikinsu, <code>A</code> da <code>X</code> kuma suna yin haka ga lambobin shaida, da manyan haruffa. Ku ƙara naku da <code>tokens</code>, ko ku ba da function da ke zaɓar mask bisa abin da aka rubuta, kamar yadda <code>nuiCardMask</code> ke yi bisa nau’in kati.',
          'Ƙimar ita ce abin da ake nunawa, ko bayanan kawai da <code>unmask</code>. Mask yana aiki da Signal Forms, reactive forms da <code>ngModel</code>, kuma ƙimar da ba ta cika ba kuskure ce.',
        ],
        examples: {
          formats: {
            title: 'Tsare-tsare',
            text: 'Kwanan wata, lokaci, lambar mota, da launi mai token na kansa don lambobin hexadecimal.',
          },
          payment: {
            title: 'Bayanan biyan kuɗi',
            text: 'Filayen Signal Forms. Mask ɗin kati yana bin nau’in katin, lambar tsaro tana da lambobi huɗu ga American Express, <code>nuiCardValid</code> da <code>nuiIbanValid</code> kuma suna duba lambobin.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Mask a kan filin rubutu na asali.',
            members: {
              nuiMask: 'Mask ɗin, ko function da ke zaɓar ɗaya bisa bayanan da aka rubuta.',
              tokens: 'Haruffan mask da za a ƙara ko a maye gurbinsu.',
              unmask: 'Ƙimar bayanan ne kawai, ba tare da literals ba.',
              value: 'Ƙimar: abin da ake nunawa, ko bayanan da <code>unmask</code>.',
              raw: 'Bayanan da aka rubuta, ba tare da literals ba.',
              complete: 'An cike kowane gurbi a cikin mask ɗin.',
            },
          },
          Helpers: {
            summary: 'Functions don tsarawa, dubawa da gina masks.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Suna tsara ƙima da mask, ko suna fitar da bayanan daga ƙimar da aka tsara.',
              nuiCardMask:
                'Mask don lambobin kati, a rukunoni kamar yadda nau’in katin ke buga su.',
              nuiCardBrand: 'Nau’in kati, daga lambobin farko na lambarsa.',
              'nuiCardValid, nuiLuhn':
                'Ko lambar kati tana da tsawon da nau’inta ke buƙata, kuma ta wuce binciken Luhn.',
              nuiIbanMask: 'Mask don IBAN, mai tsawo daidai da IBAN na ƙasarsa.',
              nuiIbanValid: 'Ko IBAN yana da tsawon ƙasarsa da lambobin tantancewa daidai.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Yana goge harafin da ya gabaci cursor, yana tsallake literals.'],
          ['Delete', 'Yana goge harafin da ke bayan cursor, yana tsallake literals.'],
        ],
        notes: [
          'Mask yana aiki a kan <code>&lt;input&gt;</code> naku, don haka lakabinsa da bayanin taimakonsa suna nan yadda kuka rubuta su. Ku faɗi abin da ake tsammani a can: mask ba umarni ba ne.',
          'Masks na lambobi suna saita <code>inputmode="numeric"</code>, don wayoyi su nuna allon lambobi, sai dai idan filin ya saita nasa.',
          'Ana karɓar lambobi daga kowane tsarin rubutu, kuma ana rubuta su a matsayin 0 zuwa 9.',
        ],
      },
      'phone-field': {
        name: 'Phone field',
        title: 'Filin lambar waya don Angular',
        summary: 'Mai zaɓar ƙasa da lamba, a rukunoni kamar yadda ƙasar ke rubuta ta.',
        description:
          'Filin lambar waya na Angular mai sauƙin amfani ga kowa: mai zaɓar ƙasa, lambobi a tsarin kowace ƙasa, lambobin kiran ƙasa da aka rubuta ko liƙa, ƙimomin E.164.',
        apiDescription:
          'Bayanin API na filin lambar waya na Needless UI: ƙima da ƙasa na nui-phone-field, ƙasashen da ake bayarwa, da mataimaka don karantawa da rubuta lambobi.',
        a11yDescription:
          'Sauƙin amfani na filin lambar waya na Needless UI: mai zaɓar ƙasa mai suna, sanar da ƙasar da lamba ta zaɓa, da cikawa ta atomatik ta burauza.',
        overview: [
          'Filin lambar waya ya ƙunshi mai zaɓar ƙasa da lamba. Ana tsara lambar a rukunoni yayin da ake rubuta ta, kamar yadda ƙasarta ke rubuta lambobi, kuma ƙimar ita ce lambar a E.164, kamar <code>+393331234567</code>.',
          'Mutane suna rubuta lambobi yadda suka saba. Ana ɗaukar 0 na farko (ko 1 kafin lambar Arewacin Amurka) a matsayin prefix na kiran cikin gida, kuma ba a saka shi a ƙimar ba. Lambar kiran ƙasa da aka rubuta ko aka liƙa, kamar <code>+44</code> ko <code>0044</code>, tana zaɓar ƙasarta, haka ma lambar yanki inda ƙasashe ke raba lambar kira ɗaya.',
          'Ƙasa ta farko ita ce ta yankin (locale), kuma <code>countries</code> yana taƙaita jerin. Da fom, lambar da ta gaza ko ta wuce tsawon da ƙasarta ke buƙata kuskure ce. Don cikakken tantancewa, ku duba lambobi a server ma.',
        ],
        examples: {
          basic: {
            title: 'Lamba',
            text: 'Ku fara da <code>+</code> da lambar kiran ƙasa don sauya ƙasa yayin da kuke rubutu.',
          },
          countries: {
            title: 'Ƙasashen da kuka zaɓa',
            text: '<code>countries</code> yana bayar da ƙasashe goma sha ɗaya, filin yana aiki da <code>FormControl</code> na reactive forms, <code>nuiFormatPhone</code> kuma yana sake rubuta ƙimar don mutane su karanta.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Filin lambar waya.',
            members: {
              value: 'Lambar a E.164, ko babu komai.',
              country: 'Ƙasar, a matsayin region code ɗinta.',
              countries: 'Ƙasashen da ake bayarwa, a matsayin region codes.',
              locale: 'Harshen sunayen ƙasashe.',
              label:
                'Sunan da ake sanarwa ga lambar, idan babu <code>&lt;label for&gt;</code> da ke ba ta suna.',
              inputId: 'Id na filin lambar, don <code>&lt;label for&gt;</code>.',
              placeholder: 'Rubutun da ake nunawa yayin da filin lambar ba shi da komai.',
              invalid: 'Yana nuna lambar a matsayin marar inganci.',
              disabled: 'Ba za a iya canza shi ba.',
              labels: 'Kowane rubutu da yake nunawa ko sanarwa, don fassarawa.',
            },
          },
          Helpers: {
            summary: 'Functions don lambobin waya.',
            members: {
              nuiParsePhone:
                'Yana karanta lambar da aka rubuta ta kowace hanya, yana raba ta zuwa region, lambar kiran ƙasa da lambar cikin gida.',
              nuiFormatPhone: 'Yana rubuta lamba a rukunoni kamar yadda ƙasarta ke yi, ko a E.164.',
              nuiPhoneValid:
                'Ko lamba tana da sananniyar lambar kiran ƙasa da tsawon da ƙasarta ke buƙata.',
            },
          },
        },
        keyboard: [
          ['Haruffa a kan mai zaɓar ƙasa', 'Suna tsallakawa zuwa ƙasashen da suka fara da su.'],
          ['Enter ko Space', 'Yana buɗe jerin ƙasashe, ko yana zaɓar ɗaya.'],
          ['Backspace', 'A kan lambar, yana goge lamba ɗaya, yana tsallake sarari da baka.'],
        ],
        notes: [
          'Sunan mai zaɓar ƙasa “Country code” ne, kuma yana karanta tutarsa da lambarsa. Idan lambar kiran ƙasa ko lambar yanki ta zaɓi ƙasa, ana sanar da sabuwar ƙasar.',
          'Ku ba lambar suna da <code>&lt;label for&gt;</code> da <code>inputId</code>, ko da <code>label</code>.',
          'Lambar tana da <code>autocomplete="tel"</code>, don haka burauzoji za su iya cike ta gaba ɗaya, har da lambar kiran ƙasa, kuma wayoyi suna nuna allon lambobin waya.',
        ],
      },
      'color-picker': {
        name: 'Color picker',
        title: 'Mai zaɓar launi na OKLCH don Angular',
        summary: 'Launi a OKLCH, da sliders, samfuran launi, eyedropper da gwajin bambancin launi.',
        description:
          'Mai zaɓar launi a OKLCH na Angular, mai sauƙin amfani ga kowa: launukan P3 na gamut mai faɗi, duk rubutun launi na CSS, samfuran launi, eyedropper, gwajin WCAG.',
        apiDescription:
          'Bayanin API na mai zaɓar launi na Needless UI: ƙima, tsari da gamut na nui-color-picker, samfuran launi da bambanci, da mataimaka don launuka.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na mai zaɓar launi na Needless UI: slider mai ƙimomi biyu a akwatin, sliders na asali, da sakamakon bambanci a kalmomi.',
        overview: [
          'Mai zaɓar launi yana aiki a OKLCH, tsarin launi na CSS na zamani da ke bin yadda ido ke gani. A faɗin akwatin launuka, chroma yana tafiya daga launin toka zuwa iyakar abin da allo zai iya nunawa a wannan haske, don haka kowane wuri launi ne da za ku iya amfani da shi, kuma thumb yana zama a wurinsa yayin da hue ke juyawa.',
          'Filin yana karɓar kowane launi na CSS, har da sunaye, kuma maɓallin tsari yana rubuta ƙimar a matsayin hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> ko <code>color(display-p3)</code>. Launin da ke wajen gamut na wani tsari ana shigar da shi cikinsa ta hanyar CSS, yana riƙe haskensa da hue ɗinsa.',
          'Ku ƙara <code>swatches</code> don a zaɓa daga cikinsu, da <code>contrastWith</code> don duba launin a kan wani bango kamar yadda WCAG 2 ke auna bambancin launi. Inda burauza ke da eyedropper, maɓalli yana ɗaukar launi daga allo.',
        ],
        examples: {
          brand: {
            title: 'Launin tambari',
            text: 'Samfuran launi masu suna, da bambancin farin rubutu a kan launin: ku zaɓi mai haske, sai AA ya kasa.',
          },
          wide: {
            title: 'Gamut mai faɗi',
            text: '<code>gamut="p3"</code> yana cike akwatin da launukan Display P3, kuma layin ɗigo-ɗigo yana nuna inda sRGB ke ƙarewa. Ƙimar tana zama a <code>oklch()</code>.',
          },
          popover: {
            title: 'A cikin popover',
            text: 'Maɓallin da ke nuna launin yana buɗe mai zaɓar a cikin <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Mai zaɓar launi a OKLCH.',
            members: {
              value: 'Launin, a rubuce a tsarin da aka zaɓa. Babu komai har sai an zaɓi launi.',
              format: 'Yadda ake rubuta ƙimar.',
              formats: 'Tsare-tsaren da maɓallin tsari ke bi ɗaya bayan ɗaya.',
              gamut: 'Launukan da akwatin ke ɗauke da su: sRGB, ko Display P3.',
              alpha: 'Yana nuna slider na opacity.',
              swatches: 'Launukan da za a zaɓa daga ciki, da sunayensu.',
              contrastWith: 'Bangon da za a duba bambancin launi da shi.',
              eyeDropper: 'Yana nuna eyedropper, inda burauza ke da shi.',
              disabled: 'Ba za a iya canza shi ba.',
              labels: 'Kowane rubutu da yake nunawa ko sanarwa, don fassarawa.',
              color: 'Launin da aka zaɓa, a OKLCH.',
            },
          },
          Helpers: {
            summary: 'Functions don launuka.',
            members: {
              nuiParseColor: 'Yana karanta launi da aka rubuta ta kowace hanyar CSS.',
              nuiFormatColor: 'Yana rubuta launi a wani tsari.',
              nuiToGamut: 'Yana shigar da launi cikin sRGB ko Display P3, kamar yadda CSS ke yi.',
              nuiContrast: 'Rabon bambancin launi na WCAG 2 na launi a kan bango.',
            },
          },
        },
        keyboard: [
          ['Kibiyar hagu da ta dama', 'A kan akwatin, suna rage ko ƙara chroma.'],
          ['Kibiyar sama da ta ƙasa', 'A kan akwatin, suna ƙara haske ko duhu.'],
          ['Shift + maɓallan kibiya', 'Suna ninka matakin sau goma.'],
          ['Home da End', 'A kan akwatin, suna kai chroma zuwa sifili ko mafi girma.'],
          ['Page Up da Page Down', 'A kan akwatin, suna ƙara haske ko duhu sosai.'],
        ],
        notes: [
          'Thumb na akwatin <code>slider</code> ne mai suna “Color” wanda ke faɗin ƙimominsa biyu, kamar “Lightness 62%, chroma 75%”. Hue da opacity range inputs ne na asali.',
          'Samfuran launi maɓallai ne masu suna daga lakabinsu, kuma suna bayyana a danne idan sun yi daidai da launin.',
          'AA da AAA suna faɗin “passes” ko “fails” a kalmomi, ba ta launi kaɗai ba, kuma a yanayin forced colors launukan da kansu suna nan yadda suke.',
        ],
      },
      carousel: {
        name: 'Carousel',
        title: 'Component na carousel da slider don Angular',
        summary:
          'Slides a layi ɗaya da ke gungurawa ya tsaya daidai, tare da maɓallai, ɗigogi da juyawa ta atomatik.',
        description:
          'Carousel na Angular mai sauƙin amfani ga kowa: gungurawa da jan yatsa na asali, slides da yawa a gani ɗaya, ɗigogi, zagaye, da juyawa da ke tsayawa bisa WCAG.',
        apiDescription:
          'Bayanin API na carousel ɗin Needless UI: slides a gani ɗaya, index, zagaye da juyawa na nui-carousel, methods ɗinsa, da directive na nuiCarouselSlide.',
        a11yDescription:
          'Aiki da allon madannai da sauƙin amfani na carousel ɗin Needless UI: tsarin carousel na WAI-ARIA, maɓallin juyawa, slides masu suna da sanar da motsi.',
        overview: [
          'Carousel yana jera slides a layi ɗaya da ke gungurawa ya tsaya daidai a kan kowane slide: jan yatsa, trackpads da maɓallan kibiya suna motsa shi ta hanyar asali, haka ma maɓallansa na baya da na gaba da ɗigoginsa. Ku sa <code>nuiCarouselSlide</code> a kan kowane slide, mai suna daga takensa.',
          'Ku nuna slide ɗaya a lokaci guda ko da yawa da <code>perView</code>, ko ku bar slides su riƙe faɗinsu da <code>perView="auto"</code>. <code>[(index)]</code> yana haɗa slide na farko da ake gani, kuma <code>loop</code> yana komawa farko.',
          'Da <code>autoplay</code>, yana juyawa da kansa, tare da maɓallin juyawa a gabansa. Juyawar tana tsayawa na ɗan lokaci idan linzami yana kansa, kuma tana tsayawa gaba ɗaya idan focus na allon madannai ya shiga cikinsa, kamar yadda tsarin WAI-ARIA ya buƙata.',
        ],
        examples: {
          featured: {
            title: 'Tafiye-tafiye na musamman',
            text: 'Sabon slide duk bayan daƙiƙa shida, da zobe a kan maɓallin juyawa da ke cika har zuwa lokacinsa. Ku kawo linzami kansa don dakatar da juyawar na ɗan lokaci, ko ku shiga da Tab don tsayar da ita.',
          },
          shelf: {
            title: 'Shiryayyen katuna',
            text: '<code>perView="auto"</code> yana riƙe faɗin kowane kati kuma yana nuna yawan da wurin zai iya ɗauka. Ɗigogin suna bin jan yatsa, kuma <code>[(index)]</code> yana faɗin inda yake.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Carousel na slides.',
            members: {
              label: 'Yana ba carousel ɗin suna.',
              index: 'Slide na farko da ake gani, daga 0.',
              perView:
                'Slides da ake gani a lokaci guda, ko <code>auto</code> ga slides da ke saita faɗinsu da kansu.',
              gap: 'Sarari tsakanin slides, a kowane tsawon CSS.',
              loop: 'Wucewa slide na ƙarshe yana komawa na farko, haka ma akasin haka.',
              autoplay:
                'Milliseconds tsakanin slides idan yana juyawa da kansa; da 0, ba ya juyawa.',
              'controls, indicators': 'Maɓallan baya da gaba, da ɗigogi.',
              labels: 'Kowane rubutu da yake nunawa ko sanarwa, don fassarawa.',
              'next, previous': 'Yana matsawa slide ɗaya gaba ko baya.',
              goTo: 'Yana kawo slide cikin gani.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Slide ɗaya.',
            members: { nuiCarouselSlide: 'Takensa, wanda ake karantawa maimakon matsayinsa.' },
          },
        },
        keyboard: [
          ['Tab', 'Maɓallin juyawa, maɓallai, slides, sannan ɗigogi.'],
          ['Kibiyar hagu da ta dama a kan slides', 'Suna gungurawa zuwa slide na baya ko na gaba.'],
          ['Enter ko Space', 'Yana danna maɓalli ko ɗigon da ke da focus.'],
        ],
        notes: [
          'Carousel ɗin <code>region</code> ne mai <code>aria-roledescription="carousel"</code>, kowane slide kuma <code>group</code> ne mai <code>aria-roledescription="slide"</code>, mai suna kamar “Lake Como, 2 of 4”.',
          'Maɓallin juyawa ne ke zuwa da farko, kuma yana faɗin abin da zai yi. Juyawa tana tsayawa na ɗan lokaci idan linzami yana kan carousel ɗin, kuma tana tsayawa idan focus na allon madannai ya shiga, don haka ba ta taɓa motsa abin da wani ke karantawa.',
          'Ana sanar da inda carousel ɗin ya tsaya bayan jan yatsa, danna maɓalli ko ɗigo; juyawa kuma ba ta sanar da komai.',
        ],
      },
      editor: {
        name: 'Rich text editor',
        title: 'Component na rich text editor don Angular',
        summary:
          'Headings, jeri, mahaɗai da salon rubutu, da toolbar da Markdown yayin da kuke rubutu.',
        description:
          'Rich text editor na Angular mai sauƙin amfani ga kowa: toolbar, gajerun hanyoyi, Markdown yayin rubutu, liƙa mai tsafta, mahaɗai, undo, ƙimar HTML ko Markdown.',
        apiDescription:
          'Bayanin API na rich text editor ɗin Needless UI: ƙima da tsarin nui-editor, kayan aikin toolbar, rubuce-rubuce, umarni, da masu sauya HTML da Markdown.',
        a11yDescription:
          'Allon madannai da sauƙin amfani na rich text editor ɗin Needless UI: textbox mai layuka da yawa, toolbar na WAI-ARIA, gajerun hanyoyi da dialog na mahaɗa.',
        overview: [
          'Editor ɗin yana rubuta sakin layi, headings, ambato, jeri, tubalan code da layukan raba, tare da rubutu mai kauri (bold), karkatacce (italic), mai layi a ƙasa (underline) da mai layi a tsakiya (strikethrough), code da mahaɗai. Ƙimarsa HTML ce, ko Markdown da <code>format="markdown"</code>, kuma yana aiki da fom.',
          'Yana riƙe takardarsa ta kansa kuma yana sarrafa kowane gyara da kansa, don haka abin da aka liƙa ko aka sauke yana isa shafin ne kawai a matsayin wannan takarda: tsari da salon rubutu suna nan, har daga Google Docs da Word, kuma ana cire scripts, styles da mahaɗai marasa aminci.',
          'Ku rubuta Markdown, sai ya koma salon rubutu: <code># </code> yana fara heading, <code>- </code> jeri, kuma <code>**bold**</code> da <code>`code`</code> suna samun salonsu da zarar kun rufe su. Kowane salo yana da gajeriyar hanyarsa da maɓallinsa a toolbar.',
        ],
        examples: {
          comment: {
            title: 'Sharhi',
            text: '<code>tools</code> yana zaɓar maɓallan toolbar. Ku rubuta Markdown, ku liƙa daga ko’ina, sannan ku ga HTML ɗin da editor ɗin ke riƙewa.',
          },
          markdown: {
            title: 'Karanta da rubuta Markdown',
            text: 'Da <code>format="markdown"</code>, ƙimar Markdown ce: ana karanta ta tare da jeri a cikin jeri, ambato da code, kuma ana sake rubuta ta yayin da kuke gyarawa.',
          },
          lists: {
            title: 'Jeri a cikin jeri',
            text: 'Maɓallan Indent da Outdent suna tura abubuwan jeri ciki ko fitar da su, kamar yadda Tab da Shift + Tab ke yi. Toolbar na asali yana nuna su ne kawai a allon taɓawa, wanda ba shi da maɓallin Tab; ku sa su a cikin <code>tools</code> don su bayyana a ko’ina.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Editor na rubutu mai salo.',
            members: {
              value: 'Abun ciki, a matsayin HTML ko Markdown; babu komai idan babu rubutu.',
              format: 'Yadda ake rubuta ƙimar.',
              tools: 'Maɓallan toolbar bi da bi, da <code>|</code> tsakanin rukunoni.',
              'label, labelledBy, describedBy': 'Suna ba abun cikin suna da bayani.',
              placeholder: 'Ana nuna shi yayin da babu komai a ciki.',
              'readonly, disabled, invalid':
                'Yana nuna abun ciki ba tare da gyarawa ba; yana kashe shi; yana alamta shi a matsayin mara inganci.',
              labels: 'Kowane rubutu da yake nunawa ko sanarwa, don fassarawa.',
              run: 'Yana aiwatar da umarnin toolbar.',
              'undo, redo, focus': 'Yana yin undo da redo, kuma yana kai focus cikin rubutun.',
            },
          },
          Helpers: {
            summary: 'Functions don sauya takardu.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Suna rubuta takarda a matsayin HTML ko Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Suna karanta HTML ko Markdown zuwa takarda, suna riƙe abin da editor ɗin zai iya nunawa.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I ko U',
            'Mai kauri, karkatacce ko mai layi a ƙasa. A na’urorin Apple, ⌘ maimakon Ctrl.',
          ],
          ['Ctrl + K', 'Yana ƙara mahaɗa ko yana gyara ta.'],
          ['Ctrl + Alt + 1, 2 ko 3', 'Heading; Ctrl + Alt + 0 yana mayar da shi sakin layi.'],
          ['Ctrl + Shift + 7 ko 8', 'Jeri mai lambobi ko mai ɗigo.'],
          [
            'Tab da Shift + Tab a cikin jeri',
            'Suna tura abu ciki ko fitar da shi; Shift + Tab yana mayar da abu na matakin farko sakin layi. A wani wuri, Tab yana fita daga editor ɗin.',
          ],
          ['Ctrl + Z da Ctrl + Shift + Z', 'Undo da redo.'],
          ['Kibiyar hagu da ta dama a toolbar', 'Suna matsawa tsakanin maɓallansa.'],
        ],
        notes: [
          'Abun ciki <code>textbox</code> ne mai <code>aria-multiline</code>, mai suna daga <code>label</code>, kuma rubutun riƙe wurinsa yana cikin <code>aria-placeholder</code>.',
          'Toolbar ɗin toolbar ne na WAI-ARIA, mai ɗaukar wuri ɗaya a jerin Tab: salon rubutu maɓallan toggle ne masu <code>aria-pressed</code>, kuma kowane maɓalli yana faɗin gajeriyar hanyarsa a <code>aria-keyshortcuts</code> da kuma a tooltip ɗinsa.',
          'Umarnin toolbar yana mayar da focus kan rubutun, kuma dialog na mahaɗa yana komawa gare shi da Escape. Tab ba ya taɓa maƙalewa: a wajen jeri, yana fita daga editor ɗin.',
          'Allon taɓawa ba shi da maɓallin Tab: a kansa, toolbar na asali yana da maɓallan Indent da Outdent, masu aiki a cikin jeri. Taɓa maɓalli a toolbar yana barin focus a cikin rubutun, don haka allon madannai na taɓawa yana nan a buɗe.',
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
      'browser-support': {
        title: 'Tallafin burauzoji',
        description:
          'Burauzojin da Needless UI ke tallafawa da gwadawa: sigogin Chrome, Edge, Firefox da Safari, wayoyi da allon taɓawa, da abin da tsofaffin burauzoji ke rasawa.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI ya ginu ne a kan elements na asali da sababbin fasalolin dandalin yanar gizo, kamar Popover API. Yana tallafa wa burauzojin da ke ƙasa tun daga sigar da aka lissafa ga kowace ɗaya. A tsofaffin sigogi, menus, selects da popovers ba sa buɗewa.',
          },
          { kind: 'h2', id: 'supported', text: 'Burauzojin da ake tallafawa' },
          {
            kind: 'table',
            caption: 'Mafi tsufan sigogin da ake tallafawa',
            head: ['Burauza', 'Daga siga', 'Ana buƙata don'],
            rows: [
              [
                'Chrome da Edge, a kwamfuta da Android',
                '120',
                'Icons da ake zanawa da masks na CSS, da <code>:dir()</code> don rubutu daga dama zuwa hagu',
              ],
              ['Firefox, a kwamfuta da Android', '125', 'Popover API'],
              ['Safari a Mac', '17', 'Popover API'],
              ['Kowace burauza a iPhone da iPad', 'iOS 17', 'Popover API'],
              ['Burauzar Samsung Internet', '25', 'Kamar Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Sauran burauzojin da aka gina a kan Chromium, kamar Opera da Brave, suna bin sigogin Chrome. Angular 22 kansa yana buƙatar Chrome, Edge da Firefox 119 da Safari 17. Ba a tallafa wa Internet Explorer da tsohon Edge na kafin Chromium ba.',
          },
          { kind: 'h2', id: 'tested', text: 'Burauzojin da ake gwadawa' },
          {
            kind: 'p',
            html: 'A kowane canji, ana gudanar da gwaje-gwajen kowane component a cikin injunan Chrome, Firefox da Safari. Kafin fitar da kowace sabuwar siga, ana duba kowane shafi na waɗannan bayanai a kowane inji, a kwamfuta da kuma a waya ta hanyar taɓawa: dole ne ya fara aiki, ya buɗe kowane menu da popup, ya dace da allo, kuma ya wuce gwaje-gwajen sauƙin amfani ga kowa.',
          },
          {
            kind: 'table',
            caption: 'Burauzojin da ake gwadawa a kansu',
            head: ['Inji', 'Siga', 'Inda ake gwadawa'],
            rows: [
              [
                'Chromium (injin Chrome da Edge)',
                '153',
                'Kwamfuta, da wayar Android ta hanyar taɓawa',
              ],
              ['Firefox', '155', 'Kwamfuta, da allon taɓawa mai girman waya'],
              ['WebKit (injin Safari)', '26.6', 'Kwamfuta, da iPhone ta hanyar taɓawa'],
              ['Safari a iPhone', 'iOS 17.5 da 18.6', 'Simulator na iPhone'],
            ],
          },
          {
            kind: 'p',
            html: 'Ba a gwada sigogin da ke tsakanin mafi tsufa da ake tallafawa da waɗanda ake gwadawa ɗaya bayan ɗaya ba: ana tallafa musu ne saboda suna da duk fasalolin da components ke buƙata.',
          },
          { kind: 'h2', id: 'newer', text: 'Ƙarin abubuwa a sababbin burauzoji' },
          {
            kind: 'p',
            html: 'Wasu ƙananan abubuwa suna amfani da fasalolin da sababbin burauzoji kaɗai ke da su. Sauran burauzoji suna tsallake su, kuma babu abin da ke lalacewa:',
          },
          {
            kind: 'table',
            caption: 'Ƙananan abubuwan da ke buƙatar sababbin burauzoji',
            head: ['Abu', 'Burauzoji', 'A sauran burauzoji'],
            rows: [
              [
                'Popovers, menus da dialogs suna shigowa da fita da motsi',
                'Chrome da Edge, Firefox 129, Safari 17.5',
                'Suna bayyana da ɓacewa nan take',
              ],
              [
                'Kusurwoyin squircle (<code>corner-shape</code>)',
                'Chrome da Edge 139',
                'Kusurwoyi masu zagaye',
              ],
              [
                'Ɗaukar launi daga ko’ina a kan allo',
                'Chrome da Edge a kwamfuta',
                'Babu maɓallin eyedropper',
              ],
              ['Zaɓar dukan folder a cikin dropzone', 'Burauzoji a kwamfuta', 'Fayiloli kawai'],
              [
                'Zoben maɓallin juyawa na carousel yana cika a hankali',
                'Chrome da Edge, Firefox 128, Safari',
                'Yana cika nan take',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Wayoyi da allon taɓawa' },
          {
            kind: 'p',
            html: 'Kowane component yana aiki da taɓawa. Handles na splitter, akwatin launuka na color picker, gefunan ginshiƙai na data grid da toasts suna bin yatsa ba tare da shafin ya gungura ba, ana jan carousel da yatsa ta gungurawar burauzar kanta, kuma dannawa da riƙewa yana ɗaga event na scheduler. A allon taɓawa, rubutun filaye yana da girman pixels 16 aƙalla, don kada iPhone ya ƙara girman shafi a kansu, kuma kalmomin da allon madannai ke haɗawa yayin rubutu, kamar yadda na Android ke yi, suna isowa cikakku.',
          },
          {
            kind: 'p',
            html: 'Allon taɓawa ba shi da linzamin da zai tsaya a kan abu, don haka hovercard ƙari ne kawai ga abin da ke shafin: kada ku sa wani abu mai muhimmanci a cikinsa. A waya, Return a cikin chat yana fara sabon layi, maɓallin aikawa kuma yana aikawa.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Allon madannai a Safari' },
          {
            kind: 'p',
            html: 'A asali, maɓallin Tab a Safari yana matsar da focus tsakanin filayen rubutu da menus masu buɗewa kawai. Don isa ga kowane maɓalli da mahaɗi, ku kunna “Danna Tab don haskaka kowane abu a shafin yanar gizo” (Press Tab to highlight each item on a webpage) a cikin saitunan Safari na ci gaba (Advanced), ko ku danna Option-Tab. Haka kuma Safari ba ya sa focus a kan maɓalli idan an danna shi; components suna cike wannan giɓi, don haka allon madannai yana ci gaba daga nan bayan dannawa kamar a sauran burauzoji.',
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
