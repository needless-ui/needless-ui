import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Komponen Angular sing aksesibel lan bisa diganti temane, dibangun ing elemen native, design token W3C lan siji stylesheet tanpa framework. Open source, lisensi MIT.',
    skipToContent: 'Langsung menyang isi utama',
    nav: {
      label: 'Utama',
      home: 'Kaca ngarep Needless UI',
      components: 'Komponen',
      guides: 'Pandhuan',
      github: 'GitHub',
      language: 'Basa',
      theme: 'Tema',
      themes: { system: 'Sistem', light: 'Padhang', dark: 'Peteng' },
    },
    footer: {
      license: 'Dirilis nganggo Lisensi MIT.',
      source: 'Kode sumber',
      built: 'Direkayasa ngluwihi perlu, digawe kanthi tliti.',
      legal: 'Katrangan legal',
      privacy: 'Kawicaksanan privasi',
    },
  },

  home: {
    title: 'Needless UI · Komponen Angular aksesibel, direkayasa ngluwihi perlu',
    description:
      'Needless UI yaiku pustaka komponen Angular open source: elemen native, siji stylesheet tanpa framework, design token W3C lan WCAG 2.2 AA wis kalebu.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Komponen UI, direkayasa apik ngluwihi perlu.',
    lead: 'Needless UI menehi gaya marang <strong>elemen native</strong> nganggo siji stylesheet tanpa framework lan design token W3C. Directive Angular-e nambahake prilaku saka Angular Aria, dadi saben komponen wis aksesibel wiwit render kapisan.',
    getStarted: 'Miwiti',
    browse: 'Pirsani komponen',
    featuresTitle: 'Kenapa digawe',
    features: [
      {
        title: 'Elemen native dhisik',
        text: '<code>&lt;button nuiButton&gt;</code> iku tombol sing asli. Formulir, keyboard lan screen reader bisa mlaku amarga ora ana apa-apa sing mbungkus.',
      },
      {
        title: 'Siji stylesheet, framework apa wae',
        text: 'Komponen iku CSS biasa ing cascade layer: Angular saiki, React sabanjure, HTML biasa salawase.',
      },
      {
        title: 'CSS panjenengan tansah menang',
        text: 'Kabeh ana ing njero <code>@layer nui</code>, dadi gaya panjenengan dhewe bisa nimpa tanpa <code>!important</code> utawa rebutan spesifisitas.',
      },
      {
        title: 'Aksesibel wiwit dhasar',
        text: 'Saben pasangan werna dicek miturut WCAG 2.2 AA nalika palet digawe. Fokus, forced colors lan reduced motion wis diurus kanggo panjenengan.',
      },
      {
        title: 'Design token standar',
        text: 'Berkas token W3C DTCG dikompilasi dadi CSS custom property kanthi tema padhang, peteng lan tema susun.',
      },
      {
        title: 'Angular modern',
        text: 'Signal input, zoneless, server rendering lan siji entry point saben komponen, dadi aplikasi mung nggawa apa sing di-import.',
      },
    ],
    codeTitle: 'Loro import, rampung',
    codeText:
      'Tambahna paket, impor stylesheet sepisan, banjur agem komponen ing komponen standalone apa wae.',
  },

  components: {
    title: 'Komponen',
    description:
      'Pirsani komponen Needless UI kanggo Angular: tombol, dialog lan menu sing aksesibel, kanthi conto langsung, referensi API lan dhukungan keyboard.',
    intro:
      'Saben komponen dibangun ing elemen native lan didokumentasekake kanthi conto langsung, API-ne lan prilaku keyboard-e.',
    tabsLabel: 'Bagean dokumentasi',
    tabs: { overview: 'Ringkesan', api: 'API', accessibility: 'Aksesibilitas' },
    sidenavLabel: 'Komponen',
    onThisPage: 'Ing kaca iki',
    example: {
      showCode: 'Tampilake kode',
      hideCode: 'Delikake kode',
      copy: 'Salin',
      copied: 'Wis disalin',
      files: 'Berkas sumber',
    },
    api: {
      import: 'Import',
      selector: 'Selector',
      exportAs: 'Diekspor minangka',
      members: 'Properti',
      name: 'Jeneng',
      type: 'Jinis',
      default: 'Gawan',
      description: 'Katrangan',
      kinds: { input: 'Input', model: 'Rong arah', output: 'Output', method: 'Metode' },
    },
    a11y: {
      keyboard: 'Interaksi keyboard',
      key: 'Tombol',
      action: 'Tumindak',
      notes: 'Cathetan aksesibilitas',
    },
    titles: {
      api: (name) => `API ${name}`,
      accessibility: (name) => `Aksesibilitas ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Komponen tombol kanggo Angular',
        summary: 'Tumindak lan pranala, kanthi gaya ing elemen button lan anchor native.',
        description:
          'Directive tombol Angular sing aksesibel kanggo elemen button lan anchor native, kanthi papat varian, telung tone, telung ukuran lan dhukungan pranala.',
        apiDescription:
          'Referensi API tombol Needless UI: directive nuiButton, selector-e, lan input variant, tone, size lan disabled.',
        a11yDescription:
          'Prilaku keyboard lan aksesibilitas tombol Needless UI: semantik native, cincin fokus, kontras, ukuran target lan pranala sing dipateni.',
        overview: [
          'Directive <code>nuiButton</code> menehi gaya marang <code>&lt;button&gt;</code> utawa <code>&lt;a&gt;</code> native. Elemen kasebut tetep nduweni semantik, prilaku keyboard lan kalebu ing formulir; directive mung nyerminake input-e menyang data attribute sing dituju stylesheet.',
          'Agem <code>&lt;button&gt;</code> kanggo tumindak lan <code>&lt;a&gt;</code> kanggo navigasi. Loro-lorone katon padha, lan loro-lorone ndhukung <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Varian',
            text: 'Papat gaya isen, saka sing paling mencolok nganti sing paling kalem. Agem siji tombol solid saben tampilan kanggo tumindak utama.',
          },
          tones: {
            title: 'Tone',
            text: 'Tone ngganti palet: accent kanggo dalan utama, neutral kanggo tumindak sekunder, danger kanggo tumindak sing ngrusak.',
          },
          sizes: {
            title: 'Ukuran',
            text: 'Telung dhuwur: 28, 36 lan 44 piksel. Sing paling cilik wae wis ngluwihi ukuran target minimal WCAG 2.2.',
          },
          links: {
            title: 'Pranala lan tombol sing dipateni',
            text: 'Anchor ora bisa dipateni kanthi native, mula pranala sing dipateni oleh <code>aria-disabled="true"</code> lan klik-e diblokir, sanajan nganggo <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Menehi gaya tombol marang <code>&lt;button&gt;</code> utawa <code>&lt;a&gt;</code> native.',
            members: {
              variant:
                'Gaya isen: <code>solid</code>, <code>soft</code>, <code>outline</code> utawa <code>ghost</code>.',
              tone: 'Palet werna: <code>accent</code>, <code>neutral</code> utawa <code>danger</code>.',
              size: 'Dhuwur, padding lan ukuran font: <code>sm</code>, <code>md</code> utawa <code>lg</code>.',
              disabled:
                'Mateni tombol. Ing anchor, nyetel <code>aria-disabled</code> lan ngalangi aktivasi.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Mindhah fokus menyang tombol utawa pranala.'],
          ['Enter', 'Ngaktifake tombol, utawa mbukak pranala.'],
          ['Spasi', 'Ngaktifake tombol. Ing pranala, nggulung kaca (prilaku native).'],
        ],
        notes: [
          'Jeneng aksesibel yaiku teks elemen. Tombol sing isine mung ikon butuh <code>aria-label</code>.',
          'Teks nyukupi rasio kontras 4,5:1 kanggo saben varian, tone lan tema; generator palet sing njamin.',
          'Cincin fokus yaiku outline 2px kanthi kontras paling ora 3:1 marang kaca, ing tema loro-lorone.',
          '<code>&lt;button&gt;</code> sing dipateni metu saka urutan tab. Pranala sing dipateni tetep bisa difokus, supaya pangguna screen reader bisa nemokake, lan diwaca minangka dipateni.',
          'Ing mode forced colors, border transparan dadi outline sing katon kanthi werna sistem.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Komponen dialog kanggo Angular',
        summary: 'Jendhela modal ing elemen dialog native, fokuse diurus dening browser.',
        description:
          'Dialog Angular sing aksesibel adhedhasar elemen dialog native: fokus modal, Escape kanggo nutup, nilai bali lan nutup lumantar backdrop.',
        apiDescription:
          'Referensi API dialog Needless UI: nuiDialog kanthi binding open rong arah, ukuran, nilai bali, lan bagean judhul, katrangan lan nutup.',
        a11yDescription:
          'Prilaku keyboard lan aksesibilitas dialog Needless UI: fokus modal, Escape, fokus bali lan isi sing duwe label.',
        overview: [
          'Directive <code>nuiDialog</code> ngowahi <code>&lt;dialog&gt;</code> native dadi dialog Needless UI. Prilaku modal disedhiyakake dening browser: kaca ing mburi dadi inert, fokus tetep ing njero, Escape nutup dialog lan fokus bali menyang elemen sing mbukak.',
          'Bind <code>[(open)]</code> menyang signal, lan wenehana nilai marang tombol tutup nganggo <code>nuiDialogClose="…"</code> supaya panjenengan pirsa kepriye dialog ditutup.',
        ],
        examples: {
          confirm: {
            title: 'Konfirmasi',
            text: 'Konfirmasi tumindak sing ngrusak. Pilihan sing aman nduweni <code>autofocus</code>, lan nilai sing dipilih teka lumantar <code>(closed)</code>.',
          },
          form: {
            title: 'Formulir ing dialog',
            text: 'Dialog bisa diisi apa wae. Ing kene, kolom kapisan oleh fokus nalika dialog kabukak.',
          },
          dismissible: {
            title: 'Ora bisa diilangi',
            text: 'Kanthi <code>[dismissible]="false"</code>, Escape lan klik ing backdrop ora digubris, dadi pangguna kudu milih salah siji pilihan.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Ngowahi <code>&lt;dialog&gt;</code> native dadi dialog Needless UI.',
            members: {
              open: 'Apa dialog lagi kabukak. Bind nganggo <code>[(open)]</code>.',
              modal: 'Mbukak minangka modal, kanthi backdrop lan kaca ing mburine dadi inert.',
              dismissible: 'Apa Escape lan klik ing backdrop bisa nutup dialog.',
              size: 'Ambane maksimal: <code>sm</code> (24rem), <code>md</code> (32rem) utawa <code>lg</code> (44rem).',
              closed:
                'Ngetokake nilai bali saben dialog ditutup. Isine kosong yen dialog diilangi.',
              close: 'Nutup dialog kanthi nilai bali opsional.',
            },
          },
          NuiDialogTitle: {
            summary: 'Judhul dialog. Oleh id lan dadi <code>aria-labelledby</code> kanggo dialog.',
            members: {},
          },
          NuiDialogDescription: {
            summary: 'Katrangan cekak, sing dirujuk dening <code>aria-describedby</code> dialog.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Baris tombol ing sisih ngisor dialog, dijejerake ing pungkasan.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Nutup dialog sing ngemot elemen iki nalika diklik.',
            members: {
              nuiDialogClose:
                'Nilai sing dienggo nutup dialog, diwetokake dening <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Mindhah fokus menyang elemen sabanjure ing njero dialog.'],
          ['Shift + Tab', 'Mindhah fokus menyang elemen sadurunge ing njero dialog.'],
          ['Escape', 'Nutup dialog, kajaba dialog kasebut ora bisa diilangi.'],
        ],
        notes: [
          'Mbukak nganggo <code>showModal()</code> menehi dialog <code>role="dialog"</code> lan semantik modal, sarta ndadekake kaca liyane inert.',
          'Judhul lan katrangan disambung nganggo id sing digawe otomatis, dadi screen reader maca loro-lorone nalika dialog kabukak.',
          'Fokus wiwitan tumuju elemen sing nduweni <code>autofocus</code>, utawa elemen kapisan sing bisa difokus. Kanggo konfirmasi tumindak sing ngrusak, pasangen <code>autofocus</code> ing pilihan sing aman.',
          'Nalika dialog ditutup, fokus bali menyang elemen sing mbukak.',
          'Browser bisa uga tetep nutup dialog sing ora bisa diilangi sawise Escape dipencet bola-bali tanpa interaksi pangguna, mula tansah sedhiyakake dalan metu sing cetha.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Komponen menu kanggo Angular',
        summary:
          'Dhaptar tumindak popup, kanthi submenu, item sing bisa dicenthang lan dhukungan keyboard lengkap.',
        description:
          'Menu Angular sing aksesibel adhedhasar Angular Aria: navigasi keyboard, typeahead, submenu, item checkbox lan radio, lan posisi sing ngerteni viewport.',
        apiDescription:
          'Referensi API menu Needless UI: nuiMenuTrigger, nuiMenu lan nuiMenuItem, kanthi nilai, tone, submenu lan status dicenthang.',
        a11yDescription:
          'Interaksi keyboard lan aksesibilitas menu Needless UI: tombol panah, typeahead, submenu, Escape lan fokus bali.',
        overview: [
          'Menu nampilake dhaptar tumindak nalika trigger-e diaktifake. Prilakune asale saka pola menu Angular Aria; Needless UI nambahake gaya, nampilake menu minangka popover ing sadhuwure kaca lan njaga supaya tetep ing njero viewport.',
          'Wenehna referensi <code>ngMenu</code> saka menu menyang <code>[nuiMenuTrigger]</code>, wenehi saben item <code>value</code> sing unik, lan tanggapi <code>(selected)</code> ing saben item utawa <code>(itemSelected)</code> ing menu.',
        ],
        examples: {
          actions: {
            title: 'Tumindak',
            text: 'Menu tumindak kanthi pitunjuk shortcut, pamisah lan item sing ngrusak.',
          },
          submenu: {
            title: 'Submenu',
            text: 'Sambungake item menyang <code>nuiMenu</code> sing susun nganggo <code>[submenu]</code>. Submenu kabukak nalika hover utawa nganggo tombol panah tengen.',
          },
          checkable: {
            title: 'Item checkbox lan radio',
            text: 'Setel <code>role</code> lan bind <code>[checked]</code>. Menu nampilake indikator lan ngumumake statuse.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Mbukak menu. Biasane dipasang ing <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Menu sing arep dibukak: referensi <code>ngMenu</code> saka <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Menu isi item, ditampilake minangka popover ing sandhinge trigger. Export <code>ngMenu</code>-e yaiku menu Angular Aria sing ditampa trigger lan submenu.',
            members: {
              wrap: 'Apa tombol panah muter saka item pungkasan menyang sing kapisan.',
              typeaheadDelay: 'Milidetik sadurunge panelusuran typeahead direset.',
              disabled: 'Mateni kabeh menu.',
              itemSelected:
                'Ngetokake nilai item sing dipilih. Ing menu utama, uga kepicu kanggo item submenu.',
            },
          },
          NuiMenuItem: {
            summary: 'Item ing <code>nuiMenu</code>.',
            members: {
              value: 'Identitas item. Kudu unik ing sakabehe menu, kalebu submenu.',
              disabled:
                'Mateni item. Isih bisa digayuh nganggo tombol panah nanging ora bisa dipilih.',
              submenu: '<code>nuiMenu</code> susun sing dibukak item iki.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> utawa <code>menuitemradio</code>.',
              checked: 'Status dicenthang saka item checkbox utawa radio.',
              tone: '<code>danger</code> kanggo tumindak sing ngrusak.',
              searchTerm: 'Teks sing dicocogake typeahead. Gawane yaiku label item.',
              selected: 'Ngetokake nilai item nalika dipilih nganggo mouse utawa keyboard.',
            },
          },
          NuiMenuSeparator: { summary: 'Garis ing antarane klompok item.', members: {} },
          NuiMenuShortcut: {
            summary: 'Pitunjuk shortcut keyboard, dijejerake ing pungkasan item.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter utawa Spasi',
            'Ing trigger: mbukak menu ing item kapisan. Ing item: milih item, utawa mbukak submenu-ne.',
          ],
          [
            'Panah mudhun',
            'Ing trigger: mbukak menu ing item kapisan. Ing menu: pindhah menyang item sabanjure.',
          ],
          [
            'Panah munggah',
            'Ing trigger: mbukak menu ing item pungkasan. Ing menu: pindhah menyang item sadurunge.',
          ],
          ['Home lan End', 'Pindhah menyang item kapisan utawa pungkasan.'],
          [
            'Panah tengen',
            'Mbukak submenu lan pindhah menyang item kapisane (panah kiwa ing teks tengen-menyang-kiwa).',
          ],
          [
            'Panah kiwa',
            'Nutup submenu lan bali menyang item induke (panah tengen ing teks tengen-menyang-kiwa).',
          ],
          ['Escape', 'Nutup menu lan mbalekake fokus menyang trigger.'],
          ['Aksara', 'Pindhah menyang item sabanjure sing labele diwiwiti karo teks sing diketik.'],
        ],
        notes: [
          'Trigger oleh <code>aria-haspopup</code>, <code>aria-expanded</code> lan <code>aria-controls</code>; menu lan item-e oleh role ARIA saka Angular Aria.',
          'Item sing disorot nganggo isen solid kanthi kontras teks paling ora 4,5:1, lan uga dadi indikator fokus. Ing mode forced colors, item iki oleh outline sorotan sistem.',
          'Item sing bisa dicenthang ngumumake statuse lumantar <code>aria-checked</code>.',
          'Milih item nutup menu lan mbalekake fokus menyang trigger. Mindhah fokus metu saka trigger lan menu uga nutup menu.',
          'Dhuwure item paling ora 28 piksel, ngluwihi ukuran target minimal WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Pandhuan',
    items: {
      'getting-started': {
        title: 'Cara miwiti',
        description:
          'Pasang Needless UI ing aplikasi Angular 22: tambahna paket, impor stylesheet lan agem komponen aksesibel kapisan panjenengan mung sajrone sawetara menit.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI bisa dienggo karo Angular 22. Komponen-komponene yaiku directive standalone, dadi ora ana modul sing kudu di-import.',
          },
          { kind: 'h2', id: 'install', text: 'Instalasi' },
          {
            kind: 'p',
            html: 'Tambahna paket Angular bebarengan karo Angular Aria lan CDK, sing nyedhiyakake prilaku keyboard lan aksesibilitas. Stylesheet-e wis kalebu ing paket kasebut.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Impor gaya' },
          {
            kind: 'p',
            html: 'Impor stylesheet sepisan ing <code>src/styles.css</code>. Isine design token lan kabeh komponen.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Kabeh ana ing njero <code>@layer nui</code>. Yen aplikasi panjenengan kagungan reset global kayata <code>a { color: inherit }</code>, lebokna ing layer sing diumumake sadurunge <code>nui</code> supaya ora nimpa komponen.',
          },
          { kind: 'h2', id: 'use', text: 'Agem komponen' },
          {
            kind: 'p',
            html: 'Impor directive sing panjenengan betahake saka entry point-e, banjur tambahna menyang <code>imports</code> ing komponen panjenengan.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Langkah sabanjure' },
          {
            kind: 'p',
            html: 'Pirsani <a href="/components">komponen</a> kanggo conto langsung, utawa waos <a href="/guides/theming">pandhuan tema</a> supaya cocog karo merek panjenengan.',
          },
        ],
      },
      theming: {
        title: 'Tema',
        description:
          'Atur tema Needless UI nganggo CSS custom property: mode padhang lan peteng, tema susun, nimpa token lan palet merek sing kontrase wis dicek.',
        blocks: [
          {
            kind: 'p',
            html: 'Saben keputusan visual yaiku CSS custom property sing digawe saka design token W3C. Komponen mung nganggo token semantik kayata <code>--nui-color-accent-solid</code>, dadi ngganti siji token bakal ngowahi gaya saben komponen sing nganggo token kasebut.',
          },
          { kind: 'h2', id: 'modes', text: 'Padhang lan peteng' },
          {
            kind: 'p',
            html: 'Gawane, preferensi sistem operasi sing nemtokake mode. Tetepna mode ing elemen apa wae nganggo <code>data-nui-theme</code>, lan susun tema kanthi bebas.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Nimpa token' },
          {
            kind: 'p',
            html: 'Token manggon ing <code>@layer nui</code>, dadi CSS biasa ing aplikasi panjenengan bisa nimpa. Setel ing <code>:root</code> kanggo kabeh aplikasi, utawa ing elemen apa wae kanggo sabagean wae.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Palet merek' },
          {
            kind: 'p',
            html: 'Skala werna digawe kanthi otomatis. Ganti hue ing <code>packages/tokens/scripts/palette.ts</code> lan gawe maneh: script nyetel saben werna supaya pas ing sRGB lan ngecek maneh kontras saben pasangan teks lan latar.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Kaca ora ketemu',
    description: 'Kaca iki ora ana. Pirsani komponen Needless UI utawa wiwiti saka kaca ngarep.',
    text: 'Kaca iki ora ana, utawa wis dipindhah.',
    home: 'Menyang kaca ngarep',
    components: 'Pirsani komponen',
  },

  legal: {
    translationNote:
      'Terjemahan iki disedhiyakake mung kanggo gampange; yen ana bedane, teks basa Inggris sing dadi pathokan.',
    labels: { name: 'Jeneng', address: 'Alamat', email: 'Email', uid: 'UID', vat: 'Nomer PPN' },
    notice: {
      title: 'Katrangan legal',
      description:
        'Sapa sing ngelola needlessui.com: jeneng, alamat pos lan email pengelola, uga data register dagang lan PPN.',
      operator: 'Pengelola',
      legalForm: 'usaha perseorangan',
      country: 'Swiss',
      register: 'Register dagang',
      registerEntry: 'Kadhaftar ing register dagang Kanton Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Tanggung jawab' },
        {
          kind: 'p',
          html: 'Situs iki ditulis kanthi tliti, nanging tanpa jaminan apa wae yen isine akurat, lengkap utawa anyar. Situs sing disambung ana ing njaba kontrol kita; pengelolane sing tanggung jawab marang isine.',
        },
        { kind: 'h2', id: 'license', text: 'Lisensi' },
        {
          kind: 'p',
          html: 'Needless UI, kalebu situs iki, iku open source miturut <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">Lisensi MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Kawicaksanan privasi',
      description:
        'Kepriye needlessui.com ngolah data pribadi: tanpa cookie, analitik utawa pelacakan. Apa sing diolah hosting nalika panjenengan rawuh, lan hak panjenengan.',
      updated: 'Pungkasan dianyari: 24 September 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Kawicaksanan iki nerangake data pribadi apa wae sing diolah nalika panjenengan mbukak www.needlessui.com, lan apa hak-hak panjenengan. Ringkese: situs iki ora nganggo cookie, analitik utawa pelacakan, lan ora tau nyuwun data pribadi saka panjenengan.',
        },
        { kind: 'h2', id: 'controller', text: 'Sapa sing tanggung jawab' },
        {
          kind: 'p',
          html: 'Pengelola sing kasebut ing <a href="/legal">katrangan legal</a>, yaiku Angelo Lamonaca. Kontak: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'Situs iki di-hosting dening Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, AS. Nalika panjenengan mbukak kaca, browser panjenengan ngirim data teknis sing ditampa saben situs web: alamat IP, tanggal lan wektu, kaca sing dijaluk, kaca asal lan user agent browser panjenengan. Vercel ngolah data iki atas jeneng kita kanggo ngirim situs lan njaga keamanane, lan mung nyimpen data kasebut sasuwene dibutuhake kanggo kuwi. Vercel bisa nindakake iki ing AS; Vercel wis kasertifikasi miturut EU-U.S. Data Privacy Framework, UK Extension-e lan Swiss-U.S. Data Privacy Framework. Pirsani <a href="https://vercel.com/legal/privacy-policy">kabar privasi Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Yen GDPR ditrapake, dhasar hukume yaiku kepentingan sah kita kanggo nglakokake situs web sing aman (Pasal 6 ayat (1) huruf f GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie lan local storage' },
        {
          kind: 'p',
          html: 'Situs iki ora nyetel cookie. Yen panjenengan milih tema padhang utawa peteng, local storage ing browser panjenengan ngelingi pilihan kasebut kanggo kunjungan sabanjure. Pilihan iku ora tau metu saka piranti panjenengan; bali menyang “Sistem” utawa busak data situs kanggo mbusak.',
        },
        { kind: 'h2', id: 'tracking', text: 'Tanpa pelacakan' },
        {
          kind: 'p',
          html: 'Ora ana analitik, iklan, plugin media sosial, konten pihak katelu sing ditempelake, utawa font eksternal. Pranala menyang GitHub lan npm tumuju situs sing nduweni kawicaksanan privasi dhewe.',
        },
        { kind: 'h2', id: 'rights', text: 'Hak panjenengan' },
        {
          kind: 'p',
          html: 'Panjenengan bisa ndangu data pribadi apa bab panjenengan sing diolah, lan njaluk supaya dibenerake utawa dibusak. Yen GDPR ditrapake, panjenengan uga bisa mbantah pangolahan, njaluk supaya pangolahan diwatesi, lan nampa data panjenengan ing format sing bisa dipindhah. Kirim email menyang {email}. Panjenengan uga bisa ngajokake aduan marang lembaga pengawas: ing Swiss, Federal Data Protection and Information Commissioner (FDPIC); ing Uni Eropa, lembaga pengawas ing negara panjenengan.',
        },
        { kind: 'h2', id: 'changes', text: 'Owah-owahan' },
        {
          kind: 'p',
          html: 'Kawicaksanan iki owah nalika situs owah, contone nalika pindhah menyang hosting anyar. Tanggal ing ngisor iki nuduhake versi sing saiki.',
        },
      ],
    },
  },
};
