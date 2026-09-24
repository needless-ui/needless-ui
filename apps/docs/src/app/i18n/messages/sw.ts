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
        title: 'Design token za kiwango',
        text: 'Faili za token za W3C DTCG hukusanywa kuwa custom properties za CSS, zenye mandhari ya mwanga, ya giza na mandhari ndani ya mandhari.',
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
      kinds: { input: 'Input', model: 'Pande mbili', output: 'Output', method: 'Mbinu' },
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
