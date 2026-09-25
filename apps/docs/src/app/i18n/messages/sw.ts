import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Vijenzi vya Angular vinavyofikika na vinavyokubali mandhari, vilivyojengwa juu ya vipengele asilia, design token za W3C na stylesheet moja. Chanzo huria, leseni ya MIT.',
    skipToContent: 'Ruka hadi maudhui makuu',
    nav: {
      label: 'Menyu kuu',
      home: 'Ukurasa wa mwanzo wa Needless UI',
      components: 'Vijenzi',
      guides: 'Miongozo',
      github: 'GitHub',
      language: 'Lugha',
      theme: 'Mandhari',
      themes: { system: 'Mfumo', light: 'Mwanga', dark: 'Giza' },
    },
    footer: {
      license: 'Imetolewa chini ya Leseni ya MIT.',
      source: 'Msimbo chanzo',
      built: 'Imesanifiwa bila sababu, imejengwa kwa uangalifu.',
      legal: 'Taarifa za kisheria',
      privacy: 'Sera ya faragha',
    },
    emergency: {
      label: 'USIBONYEZE',
      cover: 'Inua kifuniko cha usalama',
      button: 'Usibonyeze',
      armed: 'Kifuniko kimeinuliwa. Tafadhali fikiria tena.',
      falling: 'Itifaki ya dharura imewashwa…',
      fallen: 'Mvuto sasa ni wa kudumu. Pakia upya ukurasa ili kujenga upya ulimwengu.',
      reduced: 'Mfumo wako unaomba mwendo mdogo, kwa hiyo mvuto unabaki umezimwa. Bahati njema.',
    },
    toaster: { label: 'Arifa (Alt+T)', close: 'Ondoa' },
  },

  home: {
    title: 'Needless UI · Vijenzi vya Angular vinavyofikika, vilivyosanifiwa mno',
    description:
      'Needless UI ni maktaba huria ya vijenzi vya Angular: vipengele asilia, stylesheet moja isiyotegemea framework, design token za W3C na WCAG 2.2 AA ndani yake.',
    eyebrow: 'Chanzo huria · Angular 22 · MIT',
    heading: 'Vijenzi vya UI, vilivyosanifiwa vizuri kupita kiasi.',
    lead: 'Needless UI inapamba <strong>vipengele asilia</strong> kwa stylesheet moja isiyotegemea framework na design token za W3C. Directive zake za Angular zinaongeza tabia kutoka Angular Aria, hivyo kila kijenzi kinafikika tangu kinapoonyeshwa kwa mara ya kwanza.',
    getStarted: 'Anza',
    browse: 'Tazama vijenzi',
    featuresTitle: 'Kwa nini ipo',
    features: [
      {
        title: 'Vipengele asilia kwanza',
        text: '<code>&lt;button nuiButton&gt;</code> ni kitufe halisi. Fomu, kibodi na visoma skrini vinafanya kazi kwa sababu hakuna kitu kinachokifunika.',
      },
      {
        title: 'Stylesheet moja, framework yoyote',
        text: 'Vijenzi ni CSS tupu ndani ya cascade layers: Angular leo, React inafuata, na HTML tupu siku zote.',
      },
      {
        title: 'CSS yako hushinda daima',
        text: 'Kila kitu kimo ndani ya <code>@layer nui</code>, hivyo mitindo yako mwenyewe inakibatilisha bila <code>!important</code> wala vita vya specificity.',
      },
      {
        title: 'Inafikika tangu msingi',
        text: 'Kila jozi ya rangi hukaguliwa dhidi ya WCAG 2.2 AA paleti inapozalishwa. Focus, forced colors na mwendo uliopunguzwa vinashughulikiwa kwa ajili yako.',
      },
      {
        title: 'Inabinafsishika kupita kiasi',
        text: 'Springi, athari za kubonyeza na kuingia, maumbo ya pembe, nusu kipenyo na msongamano: <a href="/guides/customization">attribute moja</a> kwa programu nzima, au input moja kwa kila kijenzi, juu ya design token za kiwango cha W3C.',
      },
      {
        title: 'Angular ya kisasa',
        text: 'Signal inputs, zoneless, uonyeshaji kwenye seva na entry point moja kwa kila kijenzi, hivyo programu hubeba tu kile zinachoingiza.',
      },
    ],
    codeTitle: 'Import mbili tu, umemaliza',
    codeText:
      'Ongeza kifurushi, ingiza stylesheet mara moja, kisha tumia vijenzi ndani ya kijenzi chochote cha standalone.',
  },

  components: {
    title: 'Vijenzi',
    description:
      'Tazama vijenzi vya Needless UI kwa Angular: vitufe, vidirisha na menyu zinazofikika, pamoja na mifano hai, marejeleo ya API na usaidizi wa kibodi.',
    intro:
      'Kila kijenzi kimejengwa juu ya vipengele asilia na kimeelezwa kwa mifano hai, API yake na tabia yake ya kibodi.',
    tabsLabel: 'Sehemu za nyaraka',
    tabs: { overview: 'Muhtasari', api: 'API', accessibility: 'Ufikivu' },
    sidenavLabel: 'Vijenzi',
    onThisPage: 'Kwenye ukurasa huu',
    example: {
      showCode: 'Onyesha msimbo',
      hideCode: 'Ficha msimbo',
      copy: 'Nakili',
      copied: 'Imenakiliwa',
      files: 'Faili chanzo',
    },
    api: {
      import: 'Kuingiza',
      selector: 'Kiteuzi',
      exportAs: 'Inahamishwa kama',
      members: 'Sifa',
      name: 'Jina',
      type: 'Aina',
      default: 'Chaguomsingi',
      description: 'Maelezo',
      kinds: {
        input: 'Input',
        model: 'Pande mbili',
        output: 'Output',
        method: 'Mbinu',
        property: 'Sifa',
      },
      texts: 'Maandishi yote yanayoonyeshwa au kutangazwa pia ni input, hivyo unaweza kuyatafsiri:',
      customization: {
        note: 'Input za ubinafsishaji usizoweka hufuata attribute ya <code>data-nui-*</code> iliyo karibu zaidi. Tazama <a href="/guides/customization">mwongozo wa ubinafsishaji</a>.',
        members: {
          motion:
            'Springi inayoendesha mwendo wake: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> au <code>none</code>.',
          spring:
            'Springi yoyote, kama <code>{ stiffness, damping, mass }</code>, inayokusanywa kuwa CSS wakati wa utekelezaji. Inabatilisha <code>motion</code>.',
          press:
            'Kinachofanya kikiwa kimebonyezwa: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> au <code>none</code>.',
          enter:
            'Jinsi kinavyowasili: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> au <code>none</code>.',
          corners:
            'Umbo la pembe zake: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> au <code>square</code>.',
          radius:
            'Ukubwa wa pembe zake: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> au <code>full</code>.',
          density:
            'Nafasi kinayochukua: <code>compact</code>, <code>regular</code> au <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Matumizi ya kibodi',
      key: 'Kitufe',
      action: 'Kitendo',
      notes: 'Maelezo ya ufikivu',
    },
    titles: {
      api: (name) => `API ya ${name}`,
      accessibility: (name) => `Ufikivu wa ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Kijenzi cha kitufe kwa Angular',
        summary:
          'Vitendo na viungo, kwa mtindo unaowekwa kwenye vipengele asilia vya button na anchor.',
        description:
          'Directive ya kitufe ya Angular inayofikika kwa vipengele asilia vya button na anchor, yenye mitindo minne, toni tatu, saizi tatu na usaidizi wa viungo.',
        apiDescription:
          'Marejeleo ya API ya kitufe cha Needless UI: directive ya nuiButton, kiteuzi chake na input zake za variant, tone, size na disabled.',
        a11yDescription:
          'Tabia ya kibodi na ufikivu wa kitufe cha Needless UI: semantiki asilia, pete ya focus, utofautishaji, ukubwa wa eneo la kubofya na viungo vilivyozimwa.',
        overview: [
          'Directive ya <code>nuiButton</code> inapamba <code>&lt;button&gt;</code> au <code>&lt;a&gt;</code> asilia. Kipengele kinabaki na semantiki yake, tabia yake ya kibodi na ushiriki wake katika fomu; directive inaakisi tu input zake kwenye data attributes ambazo stylesheet inazilenga.',
          'Tumia <code>&lt;button&gt;</code> kwa vitendo na <code>&lt;a&gt;</code> kwa urambazaji. Vyote viwili vinaonekana sawa, na vyote vinaauni <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Mitindo',
            text: 'Mitindo minne ya ujazo, kuanzia unaoonekana zaidi hadi ule mtulivu zaidi. Tumia kitufe kimoja tu cha solid katika kila skrini, kwa ajili ya kitendo kikuu.',
          },
          tones: {
            title: 'Toni',
            text: 'Toni hubadilisha paleti: accent kwa njia kuu, neutral kwa vitendo vya pili, danger kwa vitendo vinavyoharibu.',
          },
          sizes: {
            title: 'Saizi',
            text: 'Vimo vitatu: pikseli 28, 36 na 44. Hata kitufe kidogo zaidi kinazidi ukubwa wa chini wa eneo la kubofya unaotakiwa na WCAG 2.2.',
          },
          links: {
            title: 'Viungo na vitufe vilivyozimwa',
            text: 'Anchor haziwezi kuzimwa kiasili, kwa hivyo kiungo kilichozimwa hupewa <code>aria-disabled="true"</code> na mibofyo yake huzuiwa, hata kikiwa na <code>routerLink</code>.',
          },
          presses: {
            title: 'Athari za kubonyeza',
            text: 'Bonyeza na ushikilie kila kitufe. <code>press</code> huamua kile ambacho kitufe hufanya kikiwa kimebonyezwa, na <code>motion</code> huamua springi ambayo kitufe hurudi nayo. Ukiweka <code>data-nui-press</code> kwenye kipengele chochote, hutumika kwa kila kitu kilicho ndani yake.',
          },
          shapes: {
            title: 'Pembe, nusu kipenyo na msongamano',
            text: '<code>corners</code> hubadilisha umbo la pembe, <code>radius</code> ukubwa wa pembe hizo, na <code>density</code> nafasi ambayo kitufe huchukua, lakini kitufe hakishuki kamwe chini ya eneo la kubofya la 24px. Vivinjari visivyo na <code>corner-shape</code> huchora pembe kwa mviringo.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Inapamba <code>&lt;button&gt;</code> au <code>&lt;a&gt;</code> asilia kama kitufe.',
            members: {
              variant:
                'Mtindo wa ujazo: <code>solid</code>, <code>soft</code>, <code>outline</code> au <code>ghost</code>.',
              tone: 'Paleti ya rangi: <code>accent</code>, <code>neutral</code> au <code>danger</code>.',
              size: 'Kimo, nafasi ya ndani na ukubwa wa herufi: <code>sm</code>, <code>md</code> au <code>lg</code>.',
              disabled:
                'Huzima kitufe. Kwenye anchor huweka <code>aria-disabled</code> na kuzuia kisiamilishwe.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Huhamishia focus kwenye kitufe au kiungo.'],
          ['Enter', 'Huamilisha kitufe, au hufuata kiungo.'],
          ['Space', 'Huamilisha kitufe. Kwenye viungo, husogeza ukurasa (tabia asilia).'],
        ],
        notes: [
          'Jina linalofikika ni maandishi ya kipengele. Vitufe vyenye ikoni pekee vinahitaji <code>aria-label</code>.',
          'Maandishi yanafikia uwiano wa utofautishaji wa 4.5:1 kwa kila mtindo, toni na mandhari; kitengeneza paleti kinalihakikisha hilo.',
          'Pete ya focus ni mstari wa nje wa 2px wenye utofautishaji wa angalau 3:1 dhidi ya ukurasa, katika mandhari zote mbili.',
          '<code>&lt;button&gt;</code> kilichozimwa huondoka kwenye mpangilio wa Tab. Kiungo kilichozimwa bado kinaweza kupokea focus, ili watumiaji wa visoma skrini wakipate, na hutangazwa kuwa kimezimwa.',
          'Katika hali ya forced colors, mpaka usio na rangi hugeuka kuwa mstari wa nje unaoonekana, wenye rangi ya mfumo.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Kijenzi cha kidirisha kwa Angular',
        summary:
          'Dirisha la modal kwenye kipengele asilia cha dialog, huku focus ikishughulikiwa na kivinjari.',
        description:
          'Kidirisha cha Angular kinachofikika juu ya kipengele asilia cha dialog: focus ya modal, Escape kufunga, thamani za kurudisha na kufunga kwa kubofya nje.',
        apiDescription:
          'Marejeleo ya API ya kidirisha cha Needless UI: nuiDialog, binding ya pande mbili ya open, saizi, thamani za kurudisha na sehemu za kichwa, maelezo na kufunga.',
        a11yDescription:
          'Tabia ya kibodi na ufikivu wa kidirisha cha Needless UI: focus ya modal, Escape, kurejesha focus na maudhui yenye lebo.',
        overview: [
          'Directive ya <code>nuiDialog</code> hugeuza <code>&lt;dialog&gt;</code> asilia kuwa kidirisha cha Needless UI. Tabia ya modal hutolewa na kivinjari: ukurasa ulio nyuma hauwezi kutumika, focus inabaki ndani, Escape hukifunga na focus hurudi kwenye kipengele kilichokifungua.',
          'Unganisha <code>[(open)]</code> na signal, na upe vitufe vya kufunga thamani kwa <code>nuiDialogClose="…"</code> ili ujue kidirisha kilifungwa vipi.',
        ],
        examples: {
          confirm: {
            title: 'Uthibitisho',
            text: 'Uthibitisho wa kitendo kinachoharibu. Chaguo salama lina <code>autofocus</code>, na thamani iliyochaguliwa hufika kupitia <code>(closed)</code>.',
          },
          form: {
            title: 'Fomu ndani ya kidirisha',
            text: 'Vidirisha vinaweza kubeba maudhui yoyote. Hapa sehemu ya kwanza ya fomu hupokea focus kidirisha kinapofunguka.',
          },
          dismissible: {
            title: 'Kisichoweza kuondolewa',
            text: 'Ukiweka <code>[dismissible]="false"</code>, Escape na mibofyo kwenye mandharinyuma hupuuzwa, hivyo mtumiaji lazima achague mojawapo ya chaguo.',
          },
          entrances: {
            title: 'Athari za kuingia',
            text: 'Kila kitufe hufungua kidirisha kilekile kwa preset tofauti ya <code>enter</code>, kwa springi ya <code>bouncy</code>. Kwa namna yoyote kinavyowasili, huondoka kwa kufifia haraka.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Hugeuza <code>&lt;dialog&gt;</code> asilia kuwa kidirisha cha Needless UI.',
            members: {
              open: 'Kama kidirisha kimefunguliwa. Iunganishe kwa <code>[(open)]</code>.',
              modal:
                'Hufunguka kama modal, pamoja na mandharinyuma na ukurasa usiotumika nyuma yake.',
              dismissible: 'Kama Escape na mibofyo kwenye mandharinyuma hufunga kidirisha.',
              size: 'Upana wa juu zaidi: <code>sm</code> (24rem), <code>md</code> (32rem) au <code>lg</code> (44rem).',
              closed:
                'Hutoa thamani ya kurudisha kila kidirisha kinapofungwa. Huwa tupu ikiwa kidirisha kiliondolewa bila chaguo.',
              close: 'Hufunga kidirisha kwa thamani ya kurudisha ya hiari.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Kichwa cha kidirisha. Hupewa id na kuwa <code>aria-labelledby</code> ya kidirisha.',
            members: {},
          },
          NuiDialogDescription: {
            summary:
              'Maelezo mafupi, yanayorejelewa na <code>aria-describedby</code> ya kidirisha.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Safu ya vitufe chini ya kidirisha, iliyopangiliwa upande wa mwisho.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Ikibofywa, hufunga kidirisha ambamo imo.',
            members: {
              nuiDialogClose:
                'Thamani ambayo kidirisha hufungwa nayo, inayotolewa na <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Huhamishia focus kwenye kipengele kinachofuata ndani ya kidirisha.'],
          ['Shift + Tab', 'Huhamishia focus kwenye kipengele kilichotangulia ndani ya kidirisha.'],
          ['Escape', 'Hufunga kidirisha, isipokuwa kama hakiwezi kuondolewa.'],
        ],
        notes: [
          'Kukifungua kwa <code>showModal()</code> hukipa kidirisha <code>role="dialog"</code> na semantiki ya modal, na hufanya sehemu nyingine ya ukurasa isitumike.',
          'Kichwa na maelezo vimeunganishwa kwa id zinazozalishwa, hivyo visoma skrini hutangaza vyote viwili kidirisha kinapofunguka.',
          'Focus ya awali huenda kwenye kipengele chenye <code>autofocus</code>, au kwenye kipengele cha kwanza kinachoweza kupokea focus. Kwa uthibitisho wa vitendo vinavyoharibu, weka <code>autofocus</code> kwenye chaguo salama.',
          'Kidirisha kinapofungwa, focus hurudi kwenye kipengele kilichokifungua.',
          'Vivinjari bado vinaweza kufunga kidirisha kisichoweza kuondolewa baada ya Escape kubonyezwa mara kadhaa bila mwingiliano mwingine wa mtumiaji, kwa hivyo daima toa njia ya wazi ya kutoka.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Kijenzi cha menyu kwa Angular',
        summary:
          'Orodha ibukizi ya vitendo, yenye menyu ndogo, vipengee vinavyoweza kuteuliwa na usaidizi kamili wa kibodi.',
        description:
          'Menyu ya Angular inayofikika juu ya Angular Aria: urambazaji kwa kibodi, typeahead, menyu ndogo, vipengee vya checkbox na radio, na uwekaji ndani ya viewport.',
        apiDescription:
          'Marejeleo ya API ya menyu ya Needless UI: nuiMenuTrigger, nuiMenu na nuiMenuItem, pamoja na thamani, toni, menyu ndogo na hali ya kuteuliwa.',
        a11yDescription:
          'Matumizi ya kibodi na ufikivu wa menyu ya Needless UI: vitufe vya mishale, typeahead, menyu ndogo, Escape na kurudi kwa focus.',
        overview: [
          'Menyu huonyesha orodha ya vitendo trigger yake inapoamilishwa. Tabia yake inatoka kwenye muundo wa menyu wa Angular Aria; Needless UI huongeza mitindo, huonyesha menyu kama popover juu ya ukurasa na kuibakiza ndani ya viewport.',
          'Pitisha rejeleo la <code>ngMenu</code> la menyu kwa <code>[nuiMenuTrigger]</code>, mpe kila kipengee <code>value</code> ya kipekee, na ushughulikie <code>(selected)</code> kwenye kila kipengee au <code>(itemSelected)</code> kwenye menyu.',
        ],
        examples: {
          actions: {
            title: 'Vitendo',
            text: 'Menyu ya vitendo yenye vidokezo vya njia za mkato, kitenganishi na kipengee cha kitendo kinachoharibu.',
          },
          submenu: {
            title: 'Menyu ndogo',
            text: 'Unganisha kipengee na <code>nuiMenu</code> ya ndani kwa <code>[submenu]</code>. Hufunguka kipanya kikipita juu yake au kwa kitufe cha mshale wa kulia.',
          },
          checkable: {
            title: 'Vipengee vya checkbox na radio',
            text: 'Weka <code>role</code> na uunganishe <code>[checked]</code>. Menyu huonyesha kiashiria na kutangaza hali.',
          },
          entrances: {
            title: 'Athari za kuingia na springi',
            text: 'Kila menyu huoanisha preset ya <code>enter</code> na springi ya <code>motion</code>, na hukua kutoka upande inakofunguka. Menyu ndogo hurithi vyote viwili.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Hufungua menyu. Kwa kawaida huwekwa kwenye <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Menyu ya kufungua: rejeleo la <code>ngMenu</code> la <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Menyu ya vipengee, inayoonyeshwa kama popover kando ya trigger yake. Export yake ya <code>ngMenu</code> ndiyo menyu ya Angular Aria ambayo trigger na menyu ndogo hupokea.',
            members: {
              wrap: 'Kama vitufe vya mishale huzunguka kutoka kipengee cha mwisho hadi cha kwanza.',
              typeaheadDelay: 'Milisekunde kabla utafutaji wa typeahead haujaanza upya.',
              disabled: 'Huzima menyu nzima.',
              itemSelected:
                'Hutoa thamani ya kipengee kilichochaguliwa. Kwenye menyu kuu hutokea pia kwa vipengee vya menyu ndogo.',
            },
          },
          NuiMenuItem: {
            summary: 'Kipengee ndani ya <code>nuiMenu</code>.',
            members: {
              value:
                'Hutambulisha kipengee. Lazima iwe ya kipekee katika menyu nzima, pamoja na menyu ndogo.',
              disabled:
                'Huzima kipengee. Bado kinafikiwa kwa vitufe vya mishale lakini hakiwezi kuchaguliwa.',
              submenu: '<code>nuiMenu</code> ya ndani ambayo kipengee hiki hufungua.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> au <code>menuitemradio</code>.',
              checked: 'Hali ya kuteuliwa ya kipengee cha checkbox au radio.',
              tone: '<code>danger</code> kwa vitendo vinavyoharibu.',
              searchTerm:
                'Maandishi yanayolinganishwa na typeahead. Chaguomsingi ni lebo ya kipengee.',
              selected: 'Hutoa thamani ya kipengee kinapochaguliwa kwa kipanya au kwa kibodi.',
            },
          },
          NuiMenuSeparator: { summary: 'Mstari kati ya makundi ya vipengee.', members: {} },
          NuiMenuShortcut: {
            summary:
              'Kidokezo cha njia ya mkato ya kibodi, kilichopangiliwa mwishoni mwa kipengee.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter au Space',
            'Kwenye trigger: hufungua menyu kwenye kipengee chake cha kwanza. Kwenye kipengee: hukichagua, au hufungua menyu ndogo yake.',
          ],
          [
            'Mshale wa chini',
            'Kwenye trigger: hufungua menyu kwenye kipengee chake cha kwanza. Ndani ya menyu: huenda kwenye kipengee kinachofuata.',
          ],
          [
            'Mshale wa juu',
            'Kwenye trigger: hufungua menyu kwenye kipengee chake cha mwisho. Ndani ya menyu: huenda kwenye kipengee kilichotangulia.',
          ],
          ['Home na End', 'Huenda kwenye kipengee cha kwanza au cha mwisho.'],
          [
            'Mshale wa kulia',
            'Hufungua menyu ndogo na kwenda kwenye kipengee chake cha kwanza (mshale wa kushoto katika maandishi ya kulia kwenda kushoto).',
          ],
          [
            'Mshale wa kushoto',
            'Hufunga menyu ndogo na kurudi kwenye kipengee mzazi wake (mshale wa kulia katika maandishi ya kulia kwenda kushoto).',
          ],
          ['Escape', 'Hufunga menyu na kurudisha focus kwenye trigger.'],
          [
            'Herufi',
            'Huenda kwenye kipengee kinachofuata ambacho lebo yake inaanza na maandishi yaliyoandikwa.',
          ],
        ],
        notes: [
          'Trigger hupata <code>aria-haspopup</code>, <code>aria-expanded</code> na <code>aria-controls</code>; menyu na vipengee vyake hupata majukumu yao ya ARIA kutoka Angular Aria.',
          'Kipengee kilichoangaziwa hutumia ujazo kamili wenye utofautishaji wa maandishi wa angalau 4.5:1, na pia hutumika kama kiashiria cha focus. Katika hali ya forced colors hupata mstari wa nje wa kuangazia wa mfumo.',
          'Vipengee vinavyoweza kuteuliwa hutangaza hali yao kupitia <code>aria-checked</code>.',
          'Kuchagua kipengee hufunga menyu na kurudisha focus kwenye trigger. Kuhamisha focus nje ya trigger na menyu pia huifunga.',
          'Vipengee vina kimo cha angalau pikseli 28, juu ya ukubwa wa chini wa eneo la kubofya wa WCAG 2.2.',
        ],
      },

      avatar: {
        name: 'Avatar',
        title: 'Kijenzi cha avatar kwa Angular',
        summary:
          'Picha ya mtu, au herufi za mwanzo za jina lake juu ya rangi ambayo ni yake daima.',
        description:
          'Avatar ya Angular yenye herufi za mwanzo picha isipokuwepo, rangi thabiti kwa kila jina, vitone vya hali na makundi, vyote vikisomeka katika kila mandhari.',
        apiDescription:
          'Marejeleo ya API ya avatar ya Needless UI: nuiAvatar yenye jina, picha, saizi, umbo na hali, pamoja na nuiAvatarGroup.',
        a11yDescription:
          'Ufikivu wa avatar ya Needless UI: jukumu la picha na jina, avatar za mapambo, na herufi za mwanzo zinazodumisha utofautishaji wa 4.5:1.',
        overview: [
          'Kijenzi cha <code>nuiAvatar</code> huonyesha picha, au herufi za mwanzo za jina la mtu ikiwa hakuna picha au picha ikishindwa kupakia. Herufi hizo hukaa juu ya rangi inayokokotolewa kutoka kwenye jina, hivyo mtu yuleyule hubaki na rangi ileile kila mahali.',
          'Kila hue imewekewa kikomo cha mwangaza (lightness) na ukolezi (chroma) ili herufi nyeupe zibaki juu ya uwiano wa utofautishaji wa 4.5:1, bila kujali jina wala mandhari.',
        ],
        examples: {
          people: {
            title: 'Herufi za mwanzo, picha na hali',
            text: 'Bila <code>src</code>, herufi za mwanzo na rangi hutokana na <code>name</code>. <code>status</code> huongeza kitone cha upatikanaji.',
          },
          group: {
            title: 'Makundi, saizi na maumbo',
            text: '<code>nuiAvatarGroup</code> hupanga safu ya avatar zinazopishana. <code>size</code> hupokea <code>sm</code>, <code>md</code> au <code>lg</code>, na <code>shape="square"</code> hufaa kwa timu na programu.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Picha au herufi za mwanzo, zinazopewa jina la mtu husika.',
            members: {
              name: 'Jina la mtu. Jina linalofikika, herufi za mwanzo na rangi hutokana nalo.',
              src: 'URL ya picha. Ikishindwa kupakia, herufi za mwanzo huonyeshwa badala yake.',
              size: 'Saizi: <code>sm</code>, <code>md</code> au <code>lg</code>.',
              shape: '<code>circle</code> au <code>square</code>.',
              status:
                'Kitone cha upatikanaji: <code>online</code>, <code>away</code>, <code>busy</code> au <code>offline</code>.',
              label:
                'Jina linalofikika linaloeleza zaidi ya jina, kama vile “Ada Lovelace, yuko mtandaoni”.',
              decorative:
                'Huficha avatar kwa teknolojia saidizi, kwa ajili ya avatar zilizo kando ya jina linaloonekana.',
            },
          },
          NuiAvatarGroup: {
            summary: 'Safu ya avatar zinazopishana. Ipe jina kwa <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar ni picha (<code>role="img"</code>) yenye jina la mtu. Ikiwa kando ya jina lake linaloonekana, weka <code>decorative</code> ili watumiaji wa visoma skrini wasilisikie jina mara mbili.',
          'Kitone cha hali huonekana kwa macho tu. Hali hiyo ikiwa muhimu, iweke ndani ya <code>label</code>.',
          'Herufi za mwanzo hudumisha uwiano wa utofautishaji wa angalau 4.5:1 kwenye kila rangi inayozalishwa.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Kijenzi cha breadcrumbs kwa Angular',
        summary: 'Mfuatano wa kurasa unaoelekeza hadi ukurasa wa sasa.',
        description:
          'Breadcrumbs za Angular zinazofikika kwenye nav na orodha asilia: vitenganishi vya CSS vinavyogeuka kwa maandishi ya kulia-kushoto, na njia ndefu zinazosogezwa.',
        apiDescription:
          'Marejeleo ya API ya breadcrumbs za Needless UI: directive ya nuiBreadcrumbs na lebo ya landmark yake.',
        a11yDescription:
          'Ufikivu wa breadcrumbs za Needless UI: landmark ya urambazaji, semantiki ya orodha, ukurasa wa sasa na ukubwa wa eneo la kubofya.',
        overview: [
          'Breadcrumbs huonyesha mahali ukurasa ulipo ndani ya tovuti. Directive ya <code>nuiBreadcrumbs</code> hupamba <code>&lt;nav&gt;</code> asilia na orodha yake; kipengee cha mwisho ni ukurasa wa sasa, uliowekewa alama ya <code>aria-current="page"</code>.',
          'Njia iliyo ndefu kuliko nafasi yake husogezwa kando badala ya kukatika kwenda mstari mpya. Huanza ikiwa imesogezwa hadi mwisho, na ncha zake hufifia pale ambapo kuna zaidi ya kuona.',
        ],
        examples: {
          trail: {
            title: 'Njia ya kurasa',
            text: 'Viungo vya kurasa za juu, kisha ukurasa wa sasa kama maandishi ya kawaida yenye <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Njia ndefu',
            text: 'Katika nafasi nyembamba njia husogezwa, ikianza na ukurasa wa sasa ukionekana.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Hupamba <code>&lt;nav&gt;</code> na orodha yake kama breadcrumbs.',
            members: { label: 'Jina linalofikika la landmark ya urambazaji.' },
          },
        },
        keyboard: [['Tab', 'Huenda kwenye kiungo kinachofuata katika njia.']],
        notes: [
          'Ni landmark ya urambazaji yenye orodha ya kawaida, hivyo visoma skrini hutangaza njia ina kurasa ngapi.',
          'Vitenganishi huchorwa kwa CSS, kwa hivyo havisomwi kwa sauti, na hugeuka upande katika maandishi ya kulia kwenda kushoto.',
          'Kila kiungo kina kimo cha angalau 24px.',
        ],
      },

      empty: {
        name: 'Hali tupu',
        title: 'Kijenzi cha hali tupu kwa Angular',
        summary: 'Cha kuonyesha wakati hakuna cha kuonyesha, na nini cha kufanya kuhusu hilo.',
        description:
          'Hali tupu ya Angular yenye picha, kichwa, maelezo mafupi na vitendo, pamoja na michoro minne iliyojengewa ndani inayoelea taratibu.',
        apiDescription:
          'Marejeleo ya API ya hali tupu ya Needless UI: nuiEmpty na sehemu zake za media, kichwa, maelezo na vitendo.',
        a11yDescription:
          'Ufikivu wa hali tupu ya Needless UI: picha za mapambo, vichwa vyenye maana na mwendo uliopunguzwa.',
        overview: [
          'Hali tupu huchukua nafasi ya orodha, jedwali au ukurasa ambao bado hauna kitu. Hueleza sababu, na hupendekeza hatua inayofuata.',
          'Sehemu ya media hupokea picha yako mwenyewe, au huchora mojawapo ya zile zilizojengewa ndani: <code>search</code>, <code>inbox</code>, <code>files</code> au <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Hakuna matokeo',
            text: 'Kichwa kinachoeleza kilichotokea, mstari mmoja wa msaada, na vitendo vya kutoka hapo.',
          },
          pictures: {
            title: 'Picha zilizojengewa ndani',
            text: 'Weka <code>illustration</code> kwenye <code>nuiEmptyMedia</code>. Picha hufuata mandhari na huelea, isipokuwa mwendo umepunguzwa.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Kontena: safu wima iliyowekwa katikati.', members: {} },
          NuiEmptyMedia: {
            summary: 'Picha, iliyofichwa kwa teknolojia saidizi.',
            members: {
              illustration:
                'Picha iliyojengewa ndani: <code>search</code>, <code>inbox</code>, <code>files</code> au <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Kichwa. Tumia kiwango cha heading kinachofaa ukurasa.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Mstari mmoja wa maelezo.', members: {} },
          NuiEmptyActions: { summary: 'Safu ya vitufe.', members: {} },
        },
        keyboard: [],
        notes: [
          'Picha ni ya mapambo (<code>aria-hidden</code>): kichwa na maelezo ndivyo vinavyobeba ujumbe.',
          'Kichwa kiwe heading, katika kiwango kinachoendana na muundo wa ukurasa.',
          'Picha zilizojengewa ndani huacha kuelea mtumiaji anapopendelea mwendo uliopunguzwa.',
        ],
      },

      'number-field': {
        name: 'Sehemu ya namba',
        title: 'Kijenzi cha sehemu ya namba kwa Angular',
        summary:
          'Input ya namba yenye vitufe vya kuongeza na kupunguza, iliyoumbizwa kwa kila locale.',
        description:
          'Sehemu ya namba ya Angular inayofikika: spinbutton yenye vitufe vya hatua, hatua kwa kibodi, min na max, na uumbizaji wa locale kwa sarafu, asilimia na vipimo.',
        apiDescription:
          'Marejeleo ya API ya sehemu ya namba ya Needless UI: nuiNumberField, nuiNumberInput yenye min, max, step na format, na nuiNumberStep.',
        a11yDescription:
          'Matumizi ya kibodi na ufikivu wa sehemu ya namba ya Needless UI: jukumu la spinbutton, vitufe vya mishale na Page, na vitufe vya hatua.',
        overview: [
          'Sehemu ya namba ni input ya maandishi inayobeba namba. Huonyesha namba ikiwa imeumbizwa kwa locale, husoma maandishi yaliyoandikwa kwa umbizo hilohilo, na inapopoteza focus hurekebisha thamani iendane na <code>step</code> kati ya <code>min</code> na <code>max</code>.',
          'Husoma pia tarakimu na vitenganishi asilia: namba za Kiarabu-Kihindi, Kiajemi na Devanagari, nafasi na nukta kama vitenganishi vya makundi ya tarakimu, na kila aina ya alama ya kutoa. Ukishikilia kitufe cha hatua, hurudia kwa kasi inayoongezeka.',
        ],
        examples: {
          guests: {
            title: 'Vitufe vya hatua',
            text: 'Vitufe kila upande, vinavyozimwa kwenye <code>min</code> na <code>max</code>. Vitufe vya mishale navyo hubadilisha thamani.',
          },
          formats: {
            title: 'Sarafu na asilimia',
            text: 'Pitisha chaguo za <code>Intl.NumberFormat</code> kwa <code>format</code> pamoja na <code>locale</code>. Thamani hubaki kuwa namba ya kawaida.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Huweka input pamoja na vitufe vyake vya hatua katika kundi moja.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Input ya maandishi inayobeba namba, kama spinbutton ya ARIA.',
            members: {
              value: 'Namba, au <code>null</code> ikiwa tupu. Hufanya kazi pia na fomu.',
              min: 'Thamani ndogo zaidi inayoruhusiwa.',
              max: 'Thamani kubwa zaidi inayoruhusiwa.',
              step: 'Kiasi ambacho hatua moja hubadilisha thamani. Input inapopoteza focus, thamani hurekebishwa iendane nacho.',
              format:
                "Chaguo za <code>Intl.NumberFormat</code>, kama vile <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale ya kuumbiza na kusoma namba.',
              disabled: 'Huzima input na vitufe vyake.',
              stepBy: 'Huongeza (chanya) au hupunguza (hasi) thamani kwa idadi fulani ya hatua.',
            },
          },
          NuiNumberStep: {
            summary: 'Kitufe cha hatua. Ukikishikilia, hurudia.',
            members: {
              nuiNumberStep:
                '<code>1</code> huongeza hatua moja na <code>-1</code> hupunguza hatua moja.',
              label: 'Jina linalofikika. Chaguomsingi ni “Increase” au “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Mishale ya juu na chini', 'Huongeza au hupunguza thamani kwa hatua moja.'],
          ['Page Up na Page Down', 'Husogeza thamani hatua kumi.'],
          ['Home na End', 'Huenda kwenye thamani ya chini kabisa au ya juu kabisa.'],
          ['Enter', 'Huthibitisha kilichoandikwa.'],
        ],
        notes: [
          'Input ni <code>spinbutton</code> yenye <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, na thamani iliyoumbizwa kama <code>aria-valuetext</code>.',
          'Vitufe vya hatua haviko kwenye mpangilio wa Tab, kwa kuwa vitufe vya kibodi hufanya kazi hiyohiyo, lakini vina majina na vimeunganishwa na input kupitia <code>aria-controls</code>.',
          'Ipe input lebo kwa <code>aria-label</code> au <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Input ya OTP',
        title: 'Input ya OTP na msimbo wa uthibitishaji kwa Angular',
        summary: 'Misimbo ya uthibitishaji katika visanduku tofauti, juu ya input moja halisi.',
        description:
          'Input ya OTP ya Angular inayofikika, yenye sehemu moja asilia: kujaza kwa SMS, WebOTP, kusafisha kilichobandikwa, makundi, kuficha na kutikisika kwa kosa.',
        apiDescription:
          'Marejeleo ya API ya input ya OTP ya Needless UI: nuiOtp yenye length, pattern, makundi na kuficha herufi, na nuiOtpInput yenye WebOTP.',
        a11yDescription:
          'Kibodi na ufikivu wa input ya OTP ya Needless UI: sehemu moja ya maandishi yenye lebo, pete ya focus inayoonekana na kujaza kiotomatiki.',
        overview: [
          'Input ya OTP inaonekana kama safu ya visanduku, lakini chini yake kuna <code>&lt;input&gt;</code> moja asilia. Kujaza kiotomatiki kwa SMS (<code>autocomplete="one-time-code"</code>), kubandika, vidhibiti vya manenosiri, fomu na visoma skrini vyote huona sehemu ya kawaida ya maandishi.',
          'Misimbo iliyobandikwa husafishwa, hivyo “123-456” na “123 456” zote hufanya kazi, na herufi ambazo pattern hairuhusu hukataliwa. Kwenye Android, <code>webOtp</code> hujaza msimbo kutoka kwenye SMS mara inapofika.',
        ],
        examples: {
          verify: {
            title: 'Uthibitishaji',
            text: '<code>(completed)</code> hutokea kisanduku cha mwisho kinapojazwa. Weka <code>aria-invalid</code> kwenye input ili kukataa msimbo: visanduku hubadilika kuwa vyekundu na kutikisika.',
          },
          letters: {
            title: 'Herufi, makundi na kuficha',
            text: '<code>pattern="alphanumeric"</code> hupokea herufi pia, <code>[groups]</code> huongeza vitenganishi, na <code>masked</code> huchora vitone.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Huchora visanduku na kuizunguka input.',
            members: {
              length: 'Idadi ya herufi.',
              pattern: '<code>digits</code>, au <code>alphanumeric</code> kwa herufi na tarakimu.',
              groups:
                'Ukubwa wa makundi, yakichorwa na kitenganishi kati yao, kama vile <code>[3, 3]</code>.',
              masked: 'Huchora vitone badala ya herufi.',
              completed: 'Hutoa msimbo kila mara kisanduku cha mwisho kinapojazwa.',
            },
          },
          NuiOtpInput: {
            summary:
              'Input halisi. Hupewa attribute zinazohitajika na msimbo wa matumizi ya mara moja.',
            members: {
              webOtp:
                'Hujaza msimbo kutoka kwenye SMS inayoingia kupitia API ya WebOTP, pale inapoauniwa.',
            },
          },
        },
        keyboard: [
          ['Tarakimu au herufi', 'Hujaza kisanduku cha sasa na kwenda kinachofuata.'],
          ['Backspace', 'Hufuta herufi iliyo kabla ya kishale.'],
          [
            'Mishale ya kushoto na kulia',
            'Husogea kisanduku kimoja; kisanduku kilichojazwa huchaguliwa, hivyo kuandika hukibadilisha.',
          ],
          ['Kubandika', 'Hujaza visanduku kutoka kwa msimbo ulionakiliwa.'],
        ],
        notes: [
          'Visoma skrini hukutana na sehemu moja ya maandishi. Ipe lebo kwa <code>aria-label</code> au <code>&lt;label&gt;</code>.',
          'Visanduku vimefichwa kwa teknolojia saidizi; kisanduku kinachohaririwa huonyesha pete ya focus.',
          'Mwendo ukiwa umepunguzwa, kishale hakipepesi na visanduku haviruki wala kutikisika.',
        ],
      },

      rating: {
        name: 'Ukadiriaji',
        title: 'Kijenzi cha ukadiriaji wa nyota kwa Angular',
        summary: 'Nyota za kukadiria, juu ya vitufe halisi vya redio.',
        description:
          'Ukadiriaji wa nyota wa Angular unaofikika kwa vitufe asilia vya redio: kibodi, fomu, onyesho la awali kwa hover, kufuta, na onyesho la desimali la kusoma tu.',
        apiDescription:
          'Marejeleo ya API ya ukadiriaji wa Needless UI: nuiRating yenye value, max, hali za kusoma tu na kufutika, na lebo zinazotafsirika.',
        a11yDescription:
          'Matumizi ya kibodi na ufikivu wa ukadiriaji wa Needless UI: kundi la redio lenye jina, nyota zenye lebo na picha ya kusoma tu.',
        overview: [
          'Ukadiriaji ni kundi la vitufe asilia vya redio vilivyochorwa kama nyota. Vitufe vya mishale, fomu na visoma skrini hufanya kazi kama kwa kundi lolote la redio; CSS hujaza nyota na, chini ya kipanya, huonyesha mapema ukadiriaji mpya.',
          'Katika hali ya kusoma tu, huonyesha thamani yenye desimali yoyote, kama wastani wa 4.3.',
        ],
        examples: {
          pick: {
            title: 'Kukadiria kitu',
            text: 'Unganisha <code>[(value)]</code> au fomu. Ukiweka <code>clearable</code>, kuchagua nyota ileile tena hufuta ukadiriaji.',
          },
          average: {
            title: 'Kuonyesha wastani',
            text: '<code>readonly</code> hujaza nyota hadi desimali yoyote na huipa picha jina “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Kundi la redio la nyota, au picha ya kusoma tu ya ukadiriaji.',
            members: {
              value: 'Ukadiriaji, au <code>null</code>. Hufanya kazi pia na fomu.',
              max: 'Idadi ya nyota.',
              readonly: 'Huonyesha thamani, hata yenye desimali, badala ya kuiomba.',
              disabled: 'Huzima kila nyota.',
              clearable: 'Kuchagua nyota ya sasa tena hufuta ukadiriaji.',
              name: 'Jina linalotumiwa na vitufe vyote vya redio. Huzalishwa kwa chaguomsingi.',
              starLabel: 'Jina linalofikika la kila nyota, kama function ya thamani yake.',
              readonlyLabel: 'Jina linalofikika katika hali ya kusoma tu.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Huingia kwenye kundi, kwenye nyota iliyoteuliwa.'],
          ['Vitufe vya mishale', 'Hubadilisha ukadiriaji.'],
          ['Space', 'Huteua nyota iliyo na focus.'],
        ],
        notes: [
          'Kila nyota ni redio asilia yenye jina kama “3 stars”. Lipe kundi jina kwa <code>aria-label</code>.',
          'Katika hali ya kusoma tu, ukadiriaji ni picha (<code>role="img"</code>) yenye jina “Rated 4.3 out of 5”.',
          'Nyota huchorwa kwa CSS masks, hivyo hufuata forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Kijenzi cha skeleton loader kwa Angular',
        summary: 'Vishika nafasi vinavyodumisha mpangilio wakati maudhui yanapakia.',
        description:
          'Skeleton loader za Angular kwa maandishi, duara na vitalu, zenye mng’ao mmoja unaopita ukurasa mzima, na bila mng’ao mwendo ukipunguzwa.',
        apiDescription:
          'Marejeleo ya API ya skeleton ya Needless UI: directive ya nuiSkeleton na maumbo yake ya text, circle na block.',
        a11yDescription:
          'Ufikivu wa skeleton ya Needless UI: vishika nafasi vilivyofichwa, maeneo ya aria-busy, mwendo uliopunguzwa na forced colors.',
        overview: [
          'Skeleton hudumisha umbo la maudhui ambayo bado yanapakia, hivyo ukurasa hauruki yanapofika. Weka ukubwa wake kwa CSS.',
          'Mng’ao umefungwa kwenye viewport: mwangaza mmoja hupita juu ya kila skeleton kwenye ukurasa kwa wakati mmoja, bila kujali ukubwa au mahali ilipo.',
        ],
        examples: {
          card: {
            title: 'Kadi inapakia',
            text: 'Mistari, duara na kitalu vinavyosimama badala ya wasifu. Kadi huwa <code>aria-busy</code> wakati inapakia.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Kishika nafasi, kilichofichwa kwa teknolojia saidizi.',
            members: {
              shape: '<code>text</code> (mstari), <code>circle</code> au <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton hufichwa kwa visoma skrini. Weka <code>aria-busy="true"</code> kwenye eneo linalopakia, na uiondoe maudhui yanapofika.',
          'Hakuna mng’ao mtumiaji anapopendelea mwendo uliopunguzwa.',
          'Katika hali ya forced colors, kila skeleton hupata mstari wa nje.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Arifa za toast kwa Angular',
        summary:
          'Jumbe fupi zinazorundikana, zinazoondolewa kwa kutelezesha na zisizowahi kunyakua focus.',
        description:
          'Toast za Angular zinazofikika: rundo kwenye top layer, toast za promise, kutendua, kutelezesha ili kuondoa, na vipima muda vinavyosimama kwa hover na focus.',
        apiDescription:
          'Marejeleo ya API ya toast za Needless UI: huduma ya NuiToaster, chaguo zake na toast za promise, na eneo la nui-toaster.',
        a11yDescription:
          'Matumizi ya kibodi na ufikivu wa toast za Needless UI: matangazo, kitufe cha mkato Alt+T, Escape na vipima muda vinavyosimama.',
        overview: [
          'Toast huthibitisha kilichotokea hivi punde, au hutoa kitendo kama kutendua (Undo), bila kukatiza. Weka <code>&lt;nui-toaster&gt;</code> moja kwenye ganda la programu, kisha uite <code>NuiToaster</code> kutoka popote.',
          'Hujipanga nyuma ya ile mpya zaidi na hutandazika kwa hover au focus, kila mwendo ukitumia springi ya motion. Kutelezesha kando huitupa toast. Vipima muda husimama wakati rundo lina hover au focus, na wakati ukurasa uko chinichini.',
        ],
        examples: {
          tones: {
            title: 'Toni',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> na <code>danger()</code>. Toast za danger hukaa muda mrefu zaidi na hutangazwa kwa msisitizo (assertive).',
          },
          actions: {
            title: 'Vitendo na promise',
            text: '<code>action</code> huongeza kitufe kama Undo. <code>promise()</code> huonyesha spinner, kisha hubadilika kuwa matokeo.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Huduma inayoonyesha toast. Unaweza kuiingiza (inject) popote.',
            members: {
              toasts: 'Kila toast iliyo kwenye skrini, mpya zaidi kwanza.',
              show: 'Huonyesha toast. Pitisha kichwa, au chaguo zenye maelezo, toni, muda, kitendo au id.',
              success: 'Huonyesha toast ya mafanikio.',
              warning: 'Huonyesha toast ya onyo.',
              danger:
                'Huonyesha toast ya danger. Hukaa sekunde 8 na hutangazwa kwa msisitizo (assertive).',
              promise:
                'Huonyesha toast ya kupakia hadi promise ikamilike, kisha ujumbe wake wa mafanikio au wa danger.',
              dismiss: 'Huondoa toast moja, au zote.',
            },
          },
          NuiToasterRegion: {
            summary: 'Eneo ambamo toast huonekana. Liweke mara moja, kwenye ganda la programu.',
            members: {
              position:
                'Pembe au ukingo wa viewport. Mwanzo na mwisho hufuata mwelekeo wa maandishi.',
              expanded: 'Huacha rundo likiwa limetandazwa.',
              label: 'Jina linalofikika la eneo. Eleza jinsi ya kulifikia.',
              closeLabel: 'Jina linalofikika la vitufe vya kufunga.',
              hotkey:
                'Kitufe, kama <code>KeyboardEvent.code</code>, ambacho pamoja na Alt huhamishia focus kwenye toast mpya zaidi.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Huhamishia focus kwenye toast mpya zaidi.'],
          ['Tab', 'Hupita kwenye toast, vitendo vyake na vitufe vya kufunga.'],
          ['Escape', 'Huondoa toast iliyo na focus.'],
        ],
        notes: [
          'Kila toast hutangazwa inapotokea: kwa upole (polite), au kwa msisitizo (assertive) kwa danger. Toast hazichukui focus kamwe.',
          'Vipima muda husimama wakati rundo lina hover au focus na wakati ukurasa umefichwa, na muda wa toast zinazosubiri promise hauishi kamwe.',
          'Chochote ambacho mtumiaji lazima akifanyie kazi kinapaswa kupatikana pia nje ya toast.',
          'Mwendo ukiwa umepunguzwa, toast hazihuishwi wala kutelezeshwa, na mstari wa kipima muda hufichwa.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox na ukamilishaji kiotomatiki kwa Angular',
        summary: 'Sehemu ya maandishi inayopendekeza chaguo unapoandika.',
        description:
          'Combobox ya Angular inayofikika: utafutaji wa fuzzy unaoangazia yanayolingana, thamani nyingi kama chip, thamani mpya kutoka kwa maandishi na matokeo ya seva.',
        apiDescription:
          'Marejeleo ya API ya combobox ya Needless UI: nui-combobox yenye value, values, multiple, create, filtering, loading na clearable, na safu maalum.',
        a11yDescription:
          'Kibodi na ufikivu wa combobox ya Needless UI: combobox inayoharirika yenye ukamilishaji wa orodha, active descendant, chip na uingizaji wa IME.',
        overview: [
          'Combobox ni sehemu ya maandishi yenye orodha ya mapendekezo. Utafutaji ni wa fuzzy na hupuuza alama za lafudhi: yanayolingana zaidi huja kwanza na herufi zinazolingana huwekewa alama. Hupokea vitu vilevile vya <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> kama select.',
          'Ukiweka <code>multiple</code>, chaguo zilizochaguliwa huwa chip kabla ya maandishi, na <code>create</code> hugeuza maandishi yaliyoandikwa kuwa thamani mpya. Kwa matokeo ya seva, zima <code>filtering</code>, tafuta kwenye <code>(queryChange)</code> na uweke <code>loading</code> unaposubiri.',
        ],
        examples: {
          country: {
            title: 'Utafutaji',
            text: 'Herufi zinazolingana hazihitaji kufuatana, na <code>keywords</code> huhesabiwa pia. <code>clearable</code> huongeza kitufe cha kufuta na huruhusu Escape kufuta thamani.',
          },
          tags: {
            title: 'Chip na thamani mpya',
            text: '<code>multiple</code> huonyesha chip na huunganisha <code>[(values)]</code>. Maandishi yasipokuwa chaguo bado, <code>create</code> hutoa nafasi ya kuyaongeza.',
          },
          people: {
            title: 'Matokeo ya seva',
            text: 'Orodha huonyesha kile seva ilichotuma, bila kuchuja, pamoja na safu ya kupakia inaposubiri. Lebo zilizochaguliwa hubaki matokeo mapya yanapofika.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Sehemu ya maandishi inayopendekeza chaguo unapoandika.',
            members: {
              options:
                'Chaguo, kama vitu vya <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'Thamani iliyochaguliwa, au <code>null</code>. Hufanya kazi pia na fomu.',
              values: 'Thamani zilizochaguliwa, kwa <code>multiple</code>.',
              multiple: 'Huruhusu kuchagua chaguo kadhaa, zinazoonyeshwa kama chip.',
              create:
                'Huunda thamani kutoka kwa maandishi yaliyoandikwa. Kisha orodha hutoa nafasi ya kuongeza maandishi yasiyo chaguo.',
              filtering: 'Huchuja chaguo unapoandika. Izime ikiwa seva ndiyo inayozichuja.',
              loading: 'Huonyesha safu ya kupakia matokeo yakiwa njiani.',
              clearable: 'Huongeza kitufe kinachofuta thamani, na huruhusu Escape kuifuta.',
              placeholder: 'Maandishi yanayoonyeshwa sehemu ikiwa tupu.',
              label:
                'Jina linalofikika, ikiwa hakuna <code>&lt;label&gt;</code> inayoipa sehemu jina.',
              inputId: 'Id ya sehemu ya maandishi, kwa <code>&lt;label for&gt;</code>.',
              disabled: 'Huzima sehemu.',
              compareWith:
                'Huamua kama thamani mbili ni chaguo lilelile, kwa thamani ambazo ni vitu.',
              displayWith:
                'Maandishi ya thamani isiyo miongoni mwa chaguo, kama iliyowekwa kabla hazijapakia.',
              virtual:
                'Huchora safu zinazoonekana pekee: daima, kamwe, au kwa <code>auto</code> safu zikizidi 200.',
              queryChange: 'Hutoa maandishi yanapoandikwa, kwa utafutaji kwenye seva.',
              openChange: 'Hutoa tukio orodha inapofunguka au inapofungwa.',
              show: 'Hufungua orodha.',
              hide: 'Hufunga orodha.',
              clear: 'Hufuta thamani na maandishi.',
              focus: 'Huweka focus kwenye sehemu ya maandishi.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Iweke kwenye <code>ng-template</code> ndani ya kijenzi ili uchore kila safu mwenyewe. Muktadha una chaguo na safu yake.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Huchora lebo ya chaguo, herufi zinazolingana zikiwa na alama, pamoja na maelezo na njia yake, kwa safu zako mwenyewe.',
            members: { nuiOptionText: 'Safu, kutoka kwenye muktadha wa template.' },
          },
        },
        keyboard: [
          ['Mishale ya chini na juu', 'Hufungua orodha, kisha husogea kati ya chaguo.'],
          ['Page Down na Page Up', 'Husogea chaguo kumi.'],
          ['Enter', 'Huchagua chaguo amilifu.'],
          ['Alt + mshale wa chini au juu', 'Hufungua au hufunga orodha.'],
          ['Escape', 'Hufunga orodha; kisha hufuta maandishi, au thamani ikiwa ni clearable.'],
          ['Backspace', 'Katika sehemu tupu, huondoa chip ya mwisho.'],
          [
            'Mshale wa kushoto',
            'Kutoka mwanzo wa maandishi (mshale wa kulia katika maandishi ya kulia kwenda kushoto), huingia kwenye chip. Hapo, Backspace au Delete huondoa chip.',
          ],
        ],
        notes: [
          'Sehemu ya maandishi ni <code>combobox</code> yenye <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> na <code>aria-controls</code>. Focus hubaki ndani yake, na <code>aria-activedescendant</code> huelekeza kwenye chaguo amilifu.',
          'Chip ni orodha yenye jina, na kila kitufe cha kuondoa hupewa jina la chip yake, kama vile “Remove Italy”.',
          '“No matches” na safu ya kupakia ni jumbe za hali, hivyo visoma skrini huzitangaza.',
          'Vitufe vinavyothibitisha utungaji wa mbinu ya kuingiza maandishi (IME), kama kwa Kichina au Kijapani, huachiwa mbinu hiyo.',
        ],
      },
      command: {
        name: 'Paleti ya amri',
        title: 'Kijenzi cha paleti ya amri kwa Angular',
        summary: 'Kila amri ya programu yako, kwa mbonyezo mmoja tu.',
        description:
          'Paleti ya amri ya Angular inayofikika: ⌘K kutoka popote, utafutaji wa fuzzy hadi kurasa za ndani, makundi, na njia za mkato kama kila jukwaa linavyoziandika.',
        apiDescription:
          'Marejeleo ya API ya paleti ya amri ya Needless UI: nui-command-palette yenye commands, hotkey, bindShortcuts na loop, na umbo la NuiCommand.',
        a11yDescription:
          'Kibodi na ufikivu wa paleti ya amri ya Needless UI: kidirisha cha modal chenye combobox ya utafutaji, active descendant na urambazaji wa kurasa.',
        overview: [
          'Paleti ya amri ni sehemu ya utafutaji wa amri za programu yako, ndani ya kidirisha cha modal. ⌘K huifungua kutoka popote (Ctrl+K kwenye Windows na Linux). Chagua amri, na paleti hufungwa kisha huitekeleza.',
          'Amri zinaweza kuwa na kundi, maelezo, maneno muhimu na njia ya mkato inayoonyeshwa kwa alama za kila jukwaa. Amri yenye <code>children</code> hufungua ukurasa wa amri zaidi, na utafutaji hufika ndani ya kurasa kutoka ngazi ya juu.',
        ],
        examples: {
          palette: {
            title: 'Amri na kurasa',
            text: 'Makundi, njia za mkato, amri iliyozimwa na kurasa mbili. <code>(run)</code> hukuambia kilichotekelezwa; <code>run</code> ya amri yenyewe hufanya kazi pia.',
          },
          people: {
            title: 'Safu maalum',
            text: '<code>nuiOptionTemplate</code> huchora kila safu, na <code>nuiOptionText</code> huhifadhi alama za yanayolingana. <code>[hotkey]="null"</code> huiachia paleti ya juu ⌘K.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Kidirisha cha modal chenye sehemu ya utafutaji wa amri zako.',
            members: {
              commands: 'Amri, kama vitu vya <code>NuiCommand</code>.',
              open: 'Kama paleti imefunguliwa.',
              hotkey:
                'Njia ya mkato inayoifungua na kuifunga kutoka popote, au <code>null</code> ili isiwepo. <code>mod</code> ni ⌘ kwenye vifaa vya Apple na Ctrl kwingineko.',
              bindShortcuts: 'Hutekeleza pia amri kwa njia zao za mkato, popote kwenye ukurasa.',
              loop: 'Kushuka kutoka amri ya mwisho huenda kwenye ya kwanza, na kupanda kutoka ya kwanza huenda kwenye ya mwisho.',
              filtering: 'Huchuja unapoandika. Izime ikiwa seva ndiyo inayochuja amri.',
              loading: 'Huonyesha safu ya kupakia matokeo yakiwa njiani.',
              hints: 'Huonyesha chini vitufe vya kutumia.',
              virtual:
                'Huchora safu zinazoonekana pekee: daima, kamwe, au kwa <code>auto</code> safu zikizidi 200.',
              label: 'Jina linalofikika la kidirisha na la sehemu yake ya utafutaji.',
              placeholder: 'Maandishi yanayoonyeshwa kwenye sehemu tupu ya utafutaji.',
              run: 'Hutoa kila amri inayotekelezwa.',
              queryChange: 'Hutoa maandishi yanapoandikwa, kwa utafutaji kwenye seva.',
              show: 'Hufungua paleti.',
              hide: 'Hufunga paleti.',
              toggle: 'Hufungua paleti, au huifunga.',
              back: 'Hurudi kwenye ukurasa uliotangulia.',
            },
          },
          NuiCommand: {
            summary: 'Amri moja, au ukurasa wa amri.',
            members: {
              label: 'Maandishi yanayoonyeshwa na kutafutwa.',
              description: 'Maandishi ya ziada chini ya lebo.',
              group: 'Amri zenye kundi moja huorodheshwa chini ya kichwa hicho.',
              keywords: 'Maneno zaidi ambayo utafutaji hulinganisha, kama visawe.',
              shortcut: 'Vitufe vinavyoonyeshwa pamoja nayo, kama vile <code>mod+shift+p</code>.',
              disabled: 'Huonyeshwa, lakini haiwezi kutekelezwa.',
              children: 'Amri za ngazi moja chini: kuchagua hii huzifungua kama ukurasa.',
              run: 'Hutekelezwa inapochaguliwa, baada ya paleti kufungwa.',
              id: 'Kwa matumizi yako mwenyewe, kama kutofautisha amri katika <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K au Ctrl+K', 'Hufungua au hufunga paleti.'],
          ['Mishale ya chini na juu', 'Husogea kati ya amri, na huzunguka kwenye ncha.'],
          ['Page Down na Page Up', 'Husogea amri kumi.'],
          ['Enter', 'Hutekeleza amri amilifu, au hufungua ukurasa wake.'],
          ['Escape', 'Hurudi ukurasa mmoja nyuma; kwenye ngazi ya juu, hufunga paleti.'],
          ['Backspace', 'Katika sehemu tupu kwenye ukurasa, hurudi nyuma.'],
        ],
        notes: [
          'Ni <code>&lt;dialog&gt;</code> asilia ya modal: ukurasa ulio nyuma hauwezi kutumika, focus hubaki ndani, na kuifunga hurudisha focus ilipokuwa.',
          'Sehemu ya utafutaji ni <code>combobox</code> inayoelekeza kwenye amri amilifu kwa <code>aria-activedescendant</code>. Ikiwa kwenye ukurasa, huchukua jina la ukurasa huo.',
          'Vitufe vya njia za mkato ni maandishi ndani ya kila chaguo, hivyo visoma skrini huvisoma. Vidokezo vya vitufe vilivyo chini vimefichwa kwa teknolojia saidizi.',
          'Njia za mkato zisizo na Ctrl, Alt au ⌘ hazitekelezwi unapoandika kwenye sehemu.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Vijenzi vya popover na hovercard kwa Angular',
        summary: 'Paneli zinazoelea kando ya kitufe, na tooltip za kina kwa hover.',
        description:
          'Popover na hovercard za Angular zinazofikika kwa popover API asilia: uwekaji unaogeuka na kufuata, mishale, kufunga kwa kubofya nje na ucheleweshaji wa hover.',
        apiDescription:
          'Marejeleo ya API ya popover ya Needless UI: nuiPopover na nuiHovercard zenye side, align, offset na arrow, pamoja na directive zake za trigger.',
        a11yDescription:
          'Kibodi na ufikivu wa popover na hovercard za Needless UI: majukumu ya dialog na tooltip, kurudi kwa focus, Escape na WCAG 1.4.13.',
        overview: [
          'Popover ni paneli ndogo inayofunguka kando ya kitufe, kwa vitu unavyotumia: vichujio, fomu fupi, kichagua rangi. Ni <code>popover="auto"</code> asilia, hivyo kivinjari huifunga kwa Escape au kubofya nje, hurudisha focus, na huiweka mara baada ya trigger yake katika mpangilio wa Tab.',
          'Hovercard ni tooltip ya kina. Hufunguka baada ya hover fupi, au mara moja kwa focus ya kibodi, na hueleza trigger yake. Hubaki wazi kielekezi kinapohamia juu yake, hivyo maandishi yake yanaweza kusomwa na kuchaguliwa.',
          'Zote mbili hugeukia upande mwingine pasipo nafasi, hubaki ndani ya skrini, na hufuata trigger yao ukurasa unaposogezwa.',
        ],
        examples: {
          filters: {
            title: 'Vichujio',
            text: 'Popover yenye fomu ndani. <code>arrow</code> huielekeza kwenye trigger yake, na <code>hide()</code> huifunga kutoka kwenye msimbo.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Weka kipanya juu ya jina, au lifikie kwa Tab. Kadi hueleza kiungo, hivyo visoma skrini huisoma baada ya jina.',
          },
          sides: {
            title: 'Pande na athari za kuingia',
            text: '<code>side</code> na <code>align</code> huamua mahali inapofunguka; <code>start</code> na <code>end</code> hufuata mwelekeo wa maandishi. <code>enter</code> na <code>motion</code> huamua jinsi inavyowasili.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Popover asilia iliyowekwa kando ya kipengele kilichoifungua.',
            members: {
              side: 'Upande wa trigger inakofunguka. Hugeukia upande mwingine pasipo nafasi.',
              align: 'Jinsi inavyojipanga na trigger kwenye upande huo.',
              offset: 'Pengo kati ya trigger na paneli, kwa pikseli.',
              arrow: 'Huonyesha mshale unaoelekea trigger.',
              openChange: 'Hutoa tukio inapofunguka au inapofungwa.',
              show: 'Huifungua kando ya kipengele chochote.',
              hide: 'Huifunga.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Kitufe kinachofungua na kufunga popover, kwa <code>popovertarget</code> asilia.',
            members: { nuiPopoverTrigger: 'Popover ya kufungua.' },
          },
          NuiHovercard: {
            summary: 'Tooltip ya kina inayoeleza trigger yake.',
            members: {
              side: 'Upande wa trigger inakofunguka. Hugeukia upande mwingine pasipo nafasi.',
              align: 'Jinsi inavyojipanga na trigger kwenye upande huo.',
              offset: 'Pengo kati ya trigger na kadi, kwa pikseli.',
              arrow: 'Huonyesha mshale unaoelekea trigger.',
              openDelay:
                'Milisekunde za hover kabla haijafunguka. Focus ya kibodi huifungua mara moja.',
              closeDelay: 'Milisekunde kabla haijafungwa, baada ya kielekezi kuondoka.',
              openChange: 'Hutoa tukio inapofunguka au inapofungwa.',
              show: 'Huifungua kando ya kipengele chochote.',
              hide: 'Huifunga.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Huonyesha hovercard kwa hover na kwa focus ya kibodi, na huifanya kuwa maelezo ya kipengele hiki.',
            members: { nuiHovercardTrigger: 'Hovercard ya kuonyesha.' },
          },
        },
        keyboard: [
          ['Enter au Space kwenye trigger', 'Hufungua au hufunga popover.'],
          ['Tab', 'Huingia kwenye popover iliyo wazi, inayokuja mara baada ya trigger yake.'],
          [
            'Escape',
            'Hufunga popover na kurudisha focus kwenye trigger yake, au huficha hovercard.',
          ],
        ],
        notes: [
          'Popover ni <code>dialog</code> isiyo ya modal: ipe jina kwa <code>aria-label</code> au <code>aria-labelledby</code>. Trigger yake hupata <code>aria-haspopup</code> na <code>aria-expanded</code> ya kivinjari.',
          'Hovercard ni <code>tooltip</code> na ni <code>aria-describedby</code> ya trigger yake, hivyo maandishi yake husomwa pamoja na trigger. Usiweke vidhibiti ndani yake; tumia popover kwa vidhibiti hivyo.',
          'Hovercard inatimiza WCAG 1.4.13: Escape huificha bila kuhamisha focus, kielekezi kinaweza kuhamia juu yake, na hubaki wazi ikiwa na hover au focus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Kijenzi cha select kwa Angular',
        summary: 'Chagua chaguo moja au nyingi, kutoka orodha fupi au kubwa mno.',
        description:
          'Select ya Angular inayofikika: chaguo moja au nyingi, makundi, miti, kuruka kwa kuandika, kuchagua zote, na virtual scrolling kwa orodha za urefu wowote.',
        apiDescription:
          'Marejeleo ya API ya select ya Needless UI: nui-select yenye value, values, multiple, selectAll na virtual, umbo la NuiOption na safu maalum.',
        a11yDescription:
          'Kibodi na ufikivu wa select ya Needless UI: combobox ya kuchagua tu yenye listbox au tree, active descendant, typeahead na vitufe vya mti.',
        overview: [
          'Select ni kitufe kinachofungua orodha ya chaguo. Ipe <code>options</code>, yaani array ya <code>NuiOption</code>, na uunganishe <code>[(value)]</code>, au <code>[(values)]</code> ukiweka <code>multiple</code>. Hufanya kazi pia na Signal Forms, reactive forms na <code>ngModel</code>.',
          'Chaguo zinaweza kuwa na <code>group</code>, <code>description</code> na <code>keywords</code>, na <code>children</code> hufanya orodha kuwa mti. Safu zikizidi 200, ni zile zinazoonekana tu zinazochorwa, hivyo chaguo 100,000 hufunguka haraka kama kumi.',
          'Ili kuandika na kuchuja badala yake, tumia <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Makundi',
            text: 'Chaguo zenye <code>group</code> huorodheshwa chini ya kichwa chake. Kuandika herufi huruka hadi chaguo linalofuata linaloanza nayo.',
          },
          toppings: {
            title: 'Nyingi kwa pamoja',
            text: '<code>multiple</code> huacha orodha wazi na huunganisha <code>[(values)]</code>. <code>selectAll</code> huongeza kitufe kinachochagua au kufuta chaguo zote. Chaguo zilizozimwa haziwezi kuchaguliwa.',
          },
          folders: {
            title: 'Mti',
            text: 'Chaguo zenye <code>children</code> huunda mti. Orodha hufunguka huku folda za chaguo lililochaguliwa zikiwa zimepanuliwa.',
          },
          zones: {
            title: 'Orodha ndefu',
            text: 'Kanda zote za saa, kwa eneo. Safu zikizidi 200, ni zile zinazoonekana tu zinazochorwa, na chaguo amilifu hubaki likichorwa kwa ajili ya visoma skrini.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Kitufe kinachofungua orodha ya chaguo.',
            members: {
              options: 'Chaguo, kama vitu vya <code>NuiOption</code>.',
              value: 'Thamani iliyochaguliwa, au <code>null</code>. Hufanya kazi pia na fomu.',
              values: 'Thamani zilizochaguliwa, kwa <code>multiple</code>.',
              multiple: 'Huruhusu kuchagua chaguo kadhaa. Orodha hubaki wazi unapochagua.',
              selectAll:
                'Kwa <code>multiple</code>, huongeza kitufe kinachochagua au kufuta chaguo zote.',
              placeholder: 'Maandishi yanayoonyeshwa wakati hakuna kilichochaguliwa.',
              label:
                'Jina linalofikika, ikiwa hakuna <code>&lt;label&gt;</code> inayokipa kitufe jina.',
              triggerId: 'Id ya kitufe, kwa <code>&lt;label for&gt;</code>.',
              disabled: 'Huzima select.',
              compareWith:
                'Huamua kama thamani mbili ni chaguo lilelile, kwa thamani ambazo ni vitu.',
              virtual:
                'Huchora safu zinazoonekana pekee: daima, kamwe, au kwa <code>auto</code> safu zikizidi 200.',
              openChange: 'Hutoa tukio orodha inapofunguka au inapofungwa.',
              show: 'Hufungua orodha.',
              hide: 'Hufunga orodha.',
              focus: 'Huweka focus kwenye kitufe.',
            },
          },
          NuiOption: {
            summary: 'Chaguo moja. Select, combobox na paleti ya amri zote hupokea chaguo hizi.',
            members: {
              value: 'Kinachowekwa likichaguliwa. Aina yoyote.',
              label: 'Maandishi yanayoonyeshwa na kutafutwa.',
              description: 'Maandishi ya ziada chini ya lebo.',
              group: 'Chaguo zenye kundi moja huorodheshwa chini ya kichwa hicho, kwa mpangilio.',
              keywords: 'Maneno zaidi ambayo utafutaji hulinganisha, kama visawe au misimbo.',
              disabled: 'Huonyeshwa, lakini haliwezi kuchaguliwa.',
              children: 'Chaguo za ngazi moja chini, zinazofanya orodha kuwa mti.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Iweke kwenye <code>ng-template</code> ndani ya kijenzi ili uchore kila safu mwenyewe. Muktadha una chaguo na safu yake.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Huchora lebo ya chaguo, herufi zinazolingana zikiwa na alama, pamoja na maelezo na njia yake, kwa safu zako mwenyewe.',
            members: { nuiOptionText: 'Safu, kutoka kwenye muktadha wa template.' },
          },
        },
        keyboard: [
          ['Mishale ya chini na juu', 'Hufungua orodha, kisha husogea kati ya chaguo.'],
          ['Home na End', 'Huenda kwenye chaguo la kwanza au la mwisho.'],
          ['Page Down na Page Up', 'Husogea chaguo kumi.'],
          ['Enter au Space', 'Hufungua orodha, au huchagua chaguo amilifu.'],
          ['Herufi', 'Huruka hadi chaguo linalofuata linaloanza nazo.'],
          [
            'Mishale ya kulia na kushoto',
            'Katika mti, hupanua chaguo au huenda kwa mtoto wake wa kwanza; hulikunja au huenda kwa mzazi wake. Katika maandishi ya kulia kwenda kushoto, mishale hubadilishana.',
          ],
          ['Alt + mshale wa juu', 'Huchagua chaguo amilifu na kufunga orodha.'],
          ['Tab', 'Kwa uchaguzi mmoja, huchagua chaguo amilifu na kuendelea.'],
          ['Escape', 'Hufunga orodha bila kuchagua.'],
        ],
        notes: [
          'Kitufe ni <code>combobox</code> ya kuchagua tu yenye <code>aria-expanded</code> na <code>aria-controls</code>. Focus hubaki juu yake, na <code>aria-activedescendant</code> huelekeza kwenye chaguo amilifu.',
          'Orodha ni <code>listbox</code>, au <code>tree</code> yenye <code>aria-level</code> na <code>aria-expanded</code>. <code>aria-setsize</code> na <code>aria-posinset</code> hubaki sahihi hata safu chache tu zikichorwa.',
          'Chaguo amilifu lina ujazo kamili na, katika forced colors, mstari wa nje.',
          'Ipe jina kwa <code>&lt;label for&gt;</code> inayoelekeza kwenye <code>triggerId</code>, au kwa <code>label</code>.',
        ],
      },
      grid: {
        name: 'Gridi ya data',
        title: 'Kijenzi cha gridi ya data kwa Angular',
        summary: 'Panga, chuja, chagua, hariri na pitia safu, hata ziwe nyingi kiasi gani.',
        description:
          'Gridi ya data ya Angular inayofikika juu ya jedwali asilia: kupanga na kuhamisha safu wima, vichujio, kurasa au virtual scrolling, uchaguzi na uhariri.',
        apiDescription:
          'Marejeleo ya API ya gridi ya data ya Needless UI: input na model za nui-grid, ufafanuzi wa NuiGridColumn, na template za visanduku maalum.',
        a11yDescription:
          'Kibodi na ufikivu wa gridi ya data ya Needless UI: jedwali asilia lenye majukumu ya grid, kituo kimoja cha Tab, vitufe vya mishale na matangazo.',
        overview: [
          'Gridi ya data ni jedwali asilia linalopanga, kuchuja, kugawa kurasa na kuhariri. Eleza <code>columns</code>, pitisha <code>rows</code>, na kila kisanduku huumbizwa kwa aina yake kulingana na locale: namba, sarafu, tarehe, ndiyo na hapana, na lebo za thamani za <code>enum</code>.',
          'Hali yake iko kwenye model unazoweza kuunganisha, kuhifadhi na kutuma kwa seva: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, na <code>columnState</code> kwa upana, mpangilio, ubandikaji na ufichaji wa safu wima ambao watu huchagua. Bila kurasa, ni safu zinazoonekana tu zinazochorwa, hivyo safu 100,000 husogezwa kama kumi.',
          'Kila kisanduku kinafikika kwa kibodi, na paneli ya kila safu wima huipanga, huichuja, huibandika, huihamisha, hurekebisha upana wake na huificha.',
        ],
        examples: {
          orders: {
            title: 'Utafutaji, upangaji na kurasa',
            text: 'Andika ili kutafuta katika safu wima zote. Bofya kichwa ili kupanga, na ubofye ukishikilia Shift ili kuongeza safu wima ya pili. <code>nuiGridCell</code> huchora hali, na <code>exportCsv()</code> hutoa kinachoonyeshwa.',
          },
          selection: {
            title: 'Uchaguzi',
            text: '<code>selection="multiple"</code> huongeza checkbox na huunganisha funguo za safu zilizochaguliwa. Kubofya ukishikilia Shift huchagua safu mfululizo; checkbox ya kichwa huchagua kila safu inayolingana.',
          },
          editing: {
            title: 'Uhariri',
            text: 'Bofya kisanduku mara mbili, bonyeza Enter au anza kuandika tu. <code>validate</code> huacha kihariri wazi pamoja na ujumbe; uhariri uliothibitishwa husasisha <code>rows</code> na hutoa <code>cellEdit</code>.',
          },
          big: {
            title: 'Safu 100,000',
            text: 'Bila kurasa, ni safu zinazoonekana tu zinazochorwa. Safu wima zilizobandikwa hubaki kwenye kingo, na <code>columnState</code> huhifadhi mpangilio ambao watu huunda.',
          },
          server: {
            title: 'Data ya seva',
            text: 'Katika hali ya <code>server</code>, gridi huonyesha safu jinsi zinavyofika na huripoti kila badiliko katika <code>queryChange</code>. Weka <code>loading</code> unapoleta data.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Gridi ya data juu ya jedwali asilia.',
            members: {
              rows: 'Data. Uhariri hubadilisha safu kwa mpya, hivyo unganisha kwa <code>[(rows)]</code>.',
              columns: 'Safu wima, kama vitu vya <code>NuiGridColumn</code>.',
              rowId: 'Ufunguo wa safu, kwa uchaguzi na ufuatiliaji.',
              label: 'Jina linalofikika la gridi.',
              selection: 'Kama safu zinaweza kuchaguliwa, na ngapi.',
              selected: 'Funguo za safu zilizochaguliwa.',
              sort: 'Upangaji, kama vitu vya <code>{ column, direction }</code>; cha kwanza hupanga kwanza.',
              filters: 'Kichujio kwa kila id ya safu wima: opereta na thamani.',
              search: 'Maneno ambayo yote lazima yawe katika safu.',
              pageSize: 'Safu kwa kila ukurasa, au 0 kwa orodha moja inayosogezwa.',
              page: 'Ukurasa unaoonyeshwa, kuanzia 0.',
              pageSizes: 'Chaguo katika kidhibiti cha kurasa.',
              virtual:
                'Huchora safu zinazoonekana pekee: daima, kamwe, au kwa <code>auto</code> safu zikizidi 100 bila kurasa.',
              height: 'Urefu wa CSS unaoiwekea gridi kikomo; husogezwa ndani yake.',
              columnState:
                'Upana, mpangilio, ubandikaji na uonekano wa kila safu wima, ili kuhifadhi na kurejesha.',
              mode: '<code>server</code> huonyesha safu jinsi zinavyofika na hukuachia upangaji, uchujaji na kurasa.',
              total: 'Idadi ya safu kwenye seva.',
              loading: 'Huonyesha upau wa maendeleo, na safu za kishika nafasi wakati hakuna safu.',
              locale: 'Huumbiza namba na tarehe, na husoma namba zilizoandikwa.',
              labels: 'Kila maandishi ambayo gridi huonyesha au hutangaza, ili kuyatafsiri.',
              rowActivate: 'Hutoa safu iliyofunguliwa kwa Enter au kwa kubofya mara mbili.',
              cellEdit: 'Hutoa kila uhariri uliothibitishwa.',
              queryChange: 'Hutoa upangaji, vichujio, utafutaji na ukurasa kila vinapobadilika.',
              exportCsv: 'Safu zilizochujwa na kupangwa, za safu wima zinazoonekana, kama CSV.',
              focusCell: 'Huweka focus kwenye kisanduku; safu <code>-1</code> ni kichwa.',
              clearFilters: 'Hufuta kila kichujio na utafutaji.',
            },
          },
          NuiGridColumn: {
            summary:
              'Safu wima moja. Ni <code>id</code> na <code>header</code> pekee zinazohitajika.',
            members: {
              id: 'Ya kipekee; ufunguo katika upangaji, vichujio na hali ya safu wima.',
              header: 'Maandishi ya kichwa.',
              value: 'Ufunguo wa safu, au function ya safu. Chaguomsingi ni <code>row[id]</code>.',
              type: 'Huamua jinsi ya kupangilia, kupanga, kuchuja na kuhariri.',
              format:
                'Chaguo za <code>Intl</code> kwa namba na tarehe, au function inayotunga maandishi.',
              options:
                'Chaguo za safu wima ya <code>enum</code>, kama vitu vya <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'Kwa pikseli.',
              flex: 'Hugawana nafasi iliyobaki na safu wima nyingine za <code>flex</code>.',
              align: 'Chaguomsingi hutegemea aina: namba na tarehe mwishoni.',
              'pinned, hidden': 'Ubandikaji na uonekano wa awali wa safu wima.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Kila kimoja kinaweza kuzimwa kwa <code>false</code>.',
              compare: 'Upangaji maalum.',
              'editable, validate':
                'Kama visanduku vinaweza kuhaririwa, na ujumbe thamani isipokuwa sahihi.',
              set: 'Huunda safu iliyohaririwa. Chaguomsingi ni nakala yenye thamani mpya.',
            },
          },
          NuiGridCell: {
            summary:
              'Huchora visanduku vya safu wima. Muktadha una safu, thamani yake na maandishi yake.',
            members: { nuiGridCell: 'Id ya safu wima.' },
          },
          NuiGridHeader: {
            summary: 'Huchora kichwa cha safu wima.',
            members: { nuiGridHeader: 'Id ya safu wima.' },
          },
          NuiGridEmpty: {
            summary:
              'Kinachoonyeshwa wakati hakuna safu. Muktadha husema kama vichujio vimezificha.',
            members: {},
          },
        },
        keyboard: [
          [
            'Vitufe vya mishale',
            'Husogea kisanduku kimoja. Kushoto na kulia hubadilishana katika maandishi ya kulia kwenda kushoto.',
          ],
          [
            'Home na End',
            'Huenda kwenye kisanduku cha kwanza au cha mwisho cha safu; kwa Ctrl, cha gridi nzima.',
          ],
          ['Page Down na Page Up', 'Husogea skrini moja ya safu.'],
          [
            'Enter au Space kwenye kichwa',
            'Hupanga kwa safu wima hiyo; kwa Shift, huiongeza kwenye upangaji.',
          ],
          ['Alt + mshale wa chini kwenye kichwa', 'Hufungua paneli ya safu wima.'],
          [
            'Alt + mshale wa kushoto au kulia kwenye kichwa',
            'Hupunguza au huongeza upana wa safu wima; kwa Shift, huihamisha.',
          ],
          ['Enter kwenye kisanduku', 'Hukihariri, au hufungua safu kama hakiwezi kuhaririwa.'],
          ['F2, au kuandika', 'Huhariri kisanduku.'],
          [
            'Enter, Escape na Tab wakati wa kuhariri',
            'Huthibitisha, hughairi, au huthibitisha na kuendelea.',
          ],
          ['Space', 'Huchagua safu; kwa Shift, safu zote tangu ile ya mwisho.'],
          ['Ctrl + A', 'Huchagua safu zote.'],
        ],
        notes: [
          '<code>&lt;table&gt;</code> asilia yenye <code>role="grid"</code>, inayopewa jina na <code>label</code>. Vichwa hubeba <code>aria-sort</code>, na safu zinazoweza kuchaguliwa hubeba <code>aria-selected</code>.',
          'Gridi ni kituo kimoja cha Tab. Focus huhama kutoka kisanduku hadi kisanduku kwa roving <code>tabindex</code>, hivyo visoma skrini husoma kila kisanduku pamoja na vichwa vya safu na safu wima yake.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> na <code>aria-colindex</code> hubaki sahihi safu zikigawanywa kwa kurasa au kwa virtual scrolling.',
          'Mabadiliko ya upangaji, uchujaji na kurasa, pamoja na makosa ya uhariri, hutangazwa kwa upole (polite) katika eneo la hali.',
        ],
      },
    },
  },

  guides: {
    title: 'Miongozo',
    items: {
      'getting-started': {
        title: 'Kuanza',
        description:
          'Sakinisha Needless UI kwenye programu ya Angular 22: ongeza vifurushi, ingiza stylesheet na utumie kijenzi chako cha kwanza kinachofikika kwa dakika chache.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI inafanya kazi na Angular 22. Vijenzi ni directive za standalone, kwa hivyo hakuna moduli za kuingiza.',
          },
          { kind: 'h2', id: 'install', text: 'Usakinishaji' },
          {
            kind: 'p',
            html: 'Ongeza kifurushi cha Angular pamoja na Angular Aria na CDK, ambavyo hutoa tabia ya kibodi na ufikivu. Stylesheet huja pamoja nacho.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Ingiza mitindo' },
          {
            kind: 'p',
            html: 'Ingiza stylesheet mara moja katika <code>src/styles.css</code>. Ina design token na kila kijenzi.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Kila kitu kimo ndani ya <code>@layer nui</code>. Ikiwa programu yako ina reset za jumla kama <code>a { color: inherit }</code>, ziweke kwenye layer iliyotangazwa kabla ya <code>nui</code> ili zisibatilishe vijenzi.',
          },
          { kind: 'h2', id: 'use', text: 'Tumia kijenzi' },
          {
            kind: 'p',
            html: 'Ingiza directive unazohitaji kutoka kwenye entry point zake na uziongeze kwenye <code>imports</code> za kijenzi chako.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Hatua zinazofuata' },
          {
            kind: 'p',
            html: 'Tazama <a href="/components">vijenzi</a> upate mifano hai, au soma <a href="/guides/theming">mwongozo wa mandhari</a> ili viendane na chapa yako.',
          },
        ],
      },
      theming: {
        title: 'Mandhari',
        description:
          'Weka mandhari kwenye Needless UI kwa custom properties za CSS: mwanga na giza, mandhari ya ndani, kubatilisha token na paleti ya chapa iliyokaguliwa.',
        blocks: [
          {
            kind: 'p',
            html: 'Kila uamuzi wa kimuonekano ni custom property ya CSS inayozalishwa kutoka design token za W3C. Vijenzi hutumia token za kisemantiki tu, kama <code>--nui-color-accent-solid</code>, kwa hivyo kubadilisha token moja hubadilisha mtindo wa kila kijenzi kinachoitumia.',
          },
          { kind: 'h2', id: 'modes', text: 'Mwanga na giza' },
          {
            kind: 'p',
            html: 'Kwa chaguomsingi, mapendeleo ya mfumo wa uendeshaji ndiyo huchagua hali. Funga hali kwenye kipengele chochote kwa <code>data-nui-theme</code>, na uweke mandhari ndani ya nyingine kwa uhuru.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Batilisha token' },
          {
            kind: 'p',
            html: 'Token zinaishi ndani ya <code>@layer nui</code>, kwa hivyo CSS ya kawaida katika programu yako huzibatilisha. Ziweke kwenye <code>:root</code> kwa programu nzima, au kwenye kipengele chochote kwa sehemu moja tu.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Paleti ya chapa' },
          {
            kind: 'p',
            html: 'Mizani ya rangi huzalishwa. Badilisha hue katika <code>packages/tokens/scripts/palette.ts</code> na uzalishe upya: script hurekebisha kila rangi iingie ndani ya sRGB na kukagua upya utofautishaji wa kila jozi ya maandishi na mandharinyuma.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Ubinafsishaji',
        description:
          'Fizikia ya springi, athari za kubonyeza na kuingia, umbo na ukubwa wa pembe, na msongamano: badilisha mwendo na hisia ya Needless UI, kote au kwa kila kijenzi.',
        blocks: [
          {
            kind: 'p',
            html: 'Kila kijenzi kina haiba unayoweza kuibadilisha: springi inayoendesha mwendo wake, kitufe kinavyofanya chini ya kidole chako, jinsi vidirisha na menyu vinavyowasili, umbo na ukubwa wa pembe zake, na nafasi kinayochukua. Kila kimoja ni attribute moja kwa kila kitu kilicho ndani ya kipengele, au input moja kwa kijenzi kimoja.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Attribute moja, tawi zima' },
          {
            kind: 'p',
            html: 'Weka attribute za <code>data-nui-*</code> kwenye <code>&lt;body&gt;</code> kwa programu nzima, au kwenye kipengele chochote kwa sehemu moja tu. Iliyo karibu zaidi ndiyo hushinda, kwa hivyo unaweza kuziweka moja ndani ya nyingine. Zinaweka custom properties za CSS pekee, kwa hivyo zinafanya kazi vivyo hivyo na framework yoyote, au bila framework.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Kijenzi kimoja' },
          {
            kind: 'p',
            html: 'Katika Angular, <code>nuiButton</code>, <code>nuiDialog</code> na <code>nuiMenu</code> hupokea thamani hizo hizo kama input. Input usizoweka hufuata attribute zinazozizunguka.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Springi zinazokusanywa kuwa CSS' },
          {
            kind: 'p',
            html: 'Mwendo ni fizikia ya springi: ukakamavu, ufifishaji na masi badala ya muda na mkunjo. Kikusanyaji cha token hutatua kila springi na kuiandika katika CSS kama muda wa kutulia pamoja na easing ya <code>linear()</code>, hivyo huendeshwa kwenye compositor bila JavaScript. Springi sita huja kama token, kuanzia <code>--nui-spring-snappy</code> hadi <code>--nui-spring-mechanical</code>, na <code>--nui-motion</code> hushikilia ile inayotumika.',
          },
          {
            kind: 'p',
            html: 'Springi nyingine yoyote iko umbali wa input moja tu. Angular huikusanya wakati wa utekelezaji kwa hesabu zilezile, na <code>springTransition()</code> hukupa CSS kwa ajili ya vipengele vyako mwenyewe.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Chochote katikati' },
          {
            kind: 'p',
            html: 'Preset ni njia za mkato tu. Kwa chochote kingine, weka custom properties mwenyewe: transform yoyote kwa <code>--nui-press</code> na <code>--nui-enter</code>, na namba yoyote kwa <code>--nui-radius-scale</code> na <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Ufikivu' },
          {
            kind: 'p',
            html: 'Mfumo unapoomba mwendo mdogo, springi hugeuka kuwa badiliko la papo hapo, na athari za kubonyeza na za kuingia huacha kusogea. Msongamano haushushi kamwe kidhibiti chini ya eneo la kubofya la 24px linalotakiwa na WCAG 2.2, na hakuna preset inayogusa rangi, kwa hivyo kila ukaguzi wa utofautishaji bado ni halali. Vivinjari visivyo na <code>corner-shape</code> huchora kila pembe kwa mviringo.',
          },
        ],
      },
    },
    playground: {
      label: 'Uwanja wa kujaribu ubinafsishaji',
      motion: 'Mwendo',
      custom: 'maalum',
      stiffness: 'Ukakamavu',
      damping: 'Ufifishaji',
      mass: 'Masi',
      press: 'Kubonyeza',
      enter: 'Kuingia',
      corners: 'Pembe',
      radius: 'Nusu kipenyo',
      density: 'Msongamano',
      surprise: 'Nishangaze',
      reset: 'Rudi kwenye chaguomsingi',
      hint: 'Bonyeza kitufe na ukishikilie, kisha ukiachilie. Fungua kidirisha na menyu uone jinsi vinavyowasili.',
      save: 'Hifadhi',
      cancel: 'Ghairi',
      delete: 'Futa',
      openDialog: 'Fungua kidirisha',
      openMenu: 'Fungua menyu',
      menu: ['Badilisha jina', 'Rudufu', 'Futa'],
      dialogTitle: 'Imehuishwa bila sababu',
      dialogText: 'Kidirisha hiki kimefika sawasawa na ulivyokiagiza.',
      close: 'Funga',
      curve:
        'Mahali pa springi kadiri muda unavyopita. Huanzia chini na kutulia kwenye mstari wa vistari.',
      settles: (ms, overshoot) => `Hutulia ndani ya ${ms} ms · huzidi lengo kwa ${overshoot}%`,
      instant: 'Hakuna mwendo: kila kitu huruka moja kwa moja hadi kinakokwenda.',
      stuck:
        'Springi hii haitulii ndani ya sekunde 10. Ongeza ufifishaji au ukakamavu; kwa sasa vijenzi vinabaki na springi ya mwisho iliyotulia.',
      reducedMotion:
        'Mfumo wako unaomba mwendo mdogo, kwa hiyo hakuna kinachosogea hapa. Springi, athari za kubonyeza na za kuingia hurudi mfumo usipoomba hivyo.',
      noCornerShape:
        'Kivinjari hiki bado hakiwezi kuchora maumbo ya pembe, kwa hiyo kila pembe hubaki ya mviringo.',
      everywhere: 'Kwenye kipengele chochote, kwa kila kitu kilicho ndani yake:',
      oneComponent: 'Kwenye kijenzi kimoja, katika Angular:',
    },
  },

  notFound: {
    title: 'Ukurasa haukupatikana',
    description:
      'Ukurasa huu haupo. Tazama vijenzi vya Needless UI au anza kutoka ukurasa wa mwanzo.',
    text: 'Ukurasa huu haupo, au umehamishwa.',
    home: 'Nenda kwenye ukurasa wa mwanzo',
    components: 'Tazama vijenzi',
  },

  legal: {
    translationNote:
      'Tafsiri hii imetolewa kwa urahisi tu; kukiwa na tofauti yoyote, maandishi ya Kiingereza ndiyo yatakayozingatiwa.',
    labels: {
      name: 'Jina',
      address: 'Anwani',
      email: 'Barua pepe',
      uid: 'UID',
      vat: 'Nambari ya VAT',
    },
    notice: {
      title: 'Taarifa za kisheria',
      description:
        'Nani anaendesha needlessui.com: jina la mwendeshaji, anwani ya posta na barua pepe, pamoja na taarifa za daftari la biashara na VAT.',
      operator: 'Mwendeshaji',
      legalForm: 'biashara ya mmiliki pekee',
      country: 'Uswisi',
      register: 'Daftari la biashara',
      registerEntry: 'Imesajiliwa katika daftari la biashara la Kantoni ya Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Dhima' },
        {
          kind: 'p',
          html: 'Tovuti hii imeandikwa kwa uangalifu, lakini bila hakikisho lolote kwamba ni sahihi, kamili au ya kisasa. Tovuti zilizounganishwa ziko nje ya udhibiti wetu; waendeshaji wake ndio wanaowajibika kwa maudhui yake.',
        },
        { kind: 'h2', id: 'license', text: 'Leseni' },
        {
          kind: 'p',
          html: 'Needless UI, pamoja na tovuti hii, ni chanzo huria chini ya <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">Leseni ya MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Sera ya faragha',
      description:
        'Jinsi needlessui.com inavyoshughulikia data binafsi: hakuna vidakuzi, takwimu wala ufuatiliaji. Kile mwenyeji huchakata unapotembelea, na haki zako.',
      updated: 'Ilisasishwa mwisho: 24 Septemba 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Sera hii inaeleza ni data gani binafsi huchakatwa unapotembelea www.needlessui.com, na haki zako ni zipi. Kwa ufupi: tovuti haitumii vidakuzi, takwimu wala ufuatiliaji, na haikuombi kamwe data binafsi.',
        },
        { kind: 'h2', id: 'controller', text: 'Nani anawajibika' },
        {
          kind: 'p',
          html: 'Mwendeshaji aliyetajwa katika <a href="/legal">taarifa za kisheria</a>, Angelo Lamonaca. Mawasiliano: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Upangishaji' },
        {
          kind: 'p',
          html: 'Tovuti hii inapangishwa na Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, Marekani. Unapofungua ukurasa, kivinjari chako hutuma data za kiufundi ambazo kila tovuti hupokea: anwani yako ya IP, tarehe na saa, ukurasa ulioombwa, ukurasa uliotoka na user agent ya kivinjari chako. Vercel huchakata data hizi kwa niaba yetu ili kuwasilisha tovuti na kuiweka salama, na huzihifadhi tu kwa muda unaohitajika kwa ajili hiyo. Inaweza kufanya hivyo nchini Marekani; Vercel imethibitishwa chini ya EU-U.S. Data Privacy Framework, UK Extension yake na Swiss-U.S. Data Privacy Framework. Tazama <a href="https://vercel.com/legal/privacy-policy">taarifa ya faragha ya Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Pale GDPR inapotumika, msingi wa kisheria ni maslahi yetu halali ya kuendesha tovuti salama (Kifungu 6(1)(f) cha GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Vidakuzi na hifadhi ya ndani' },
        {
          kind: 'p',
          html: 'Tovuti haiweki vidakuzi. Ukichagua mandhari ya mwanga au ya giza, hifadhi ya ndani ya kivinjari chako hukumbuka chaguo hilo kwa ziara yako ijayo. Chaguo hilo halitoki kamwe kwenye kifaa chako; rudi kwenye “Mfumo” au futa data za tovuti ili kuliondoa.',
        },
        { kind: 'h2', id: 'tracking', text: 'Hakuna ufuatiliaji' },
        {
          kind: 'p',
          html: 'Hakuna takwimu, matangazo, programu-jalizi za mitandao ya kijamii, maudhui ya wahusika wengine yaliyopachikwa wala fonti za nje. Viungo vya GitHub na npm vinaelekea kwenye tovuti zenye sera zao za faragha.',
        },
        { kind: 'h2', id: 'rights', text: 'Haki zako' },
        {
          kind: 'p',
          html: 'Unaweza kuuliza ni data gani binafsi kukuhusu inayochakatwa, na kuomba irekebishwe au ifutwe. Pale GDPR inapotumika, unaweza pia kupinga uchakataji, kuomba uwekewe mipaka, na kupokea data zako katika muundo unaohamishika. Andika kwa {email}. Unaweza pia kuwasilisha malalamiko kwa mamlaka ya usimamizi: nchini Uswisi, Kamishna wa Shirikisho wa Ulinzi wa Data na Taarifa (FDPIC); katika Umoja wa Ulaya, mamlaka ya nchi yako.',
        },
        { kind: 'h2', id: 'changes', text: 'Mabadiliko' },
        {
          kind: 'p',
          html: 'Sera hii hubadilika tovuti inapobadilika, kwa mfano inapohamia kwa mwenyeji mpya. Tarehe iliyo hapa chini inaonyesha toleo la sasa.',
        },
      ],
    },
  },
};
