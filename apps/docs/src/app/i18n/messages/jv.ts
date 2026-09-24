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
    emergency: {
      label: 'AJA DIPENCET',
      cover: 'Angkat tutup pengaman',
      button: 'Aja dipencet',
      armed: 'Tutupe wis kebuka. Mangga dipikir maneh.',
      falling: 'Protokol darurat diaktifake…',
      fallen: 'Gravitasi saiki permanen. Muat ulang kaca kanggo mbangun alam semesta maneh.',
      reduced:
        'Sistem panjenengan nyuwun obah sing luwih sithik, dadi gravitasi tetep mati. Begja.',
    },
    toaster: { label: 'Notifikasi (Alt+T)', close: 'Tutup' },
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
        title: 'Bisa diatur ngluwihi perlu',
        text: 'Pegas, efek pencetan, animasi mlebu, wangun pojok, jari-jari lan kapadhetan: <a href="/guides/customization">siji attribute</a> kanggo kabeh aplikasi, utawa siji input saben komponen, adhedhasar design token standar W3C.',
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
      customization: {
        note: 'Input kustomisasi sing ora panjenengan setel bakal ngetutake attribute <code>data-nui-*</code> sing paling cedhak. Pirsani <a href="/guides/customization">pandhuan kustomisasi</a>.',
        members: {
          motion:
            'Pegas sing dienggo obah: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> utawa <code>none</code>.',
          spring:
            'Pegas apa wae, awujud <code>{ stiffness, damping, mass }</code>, sing dikompilasi dadi CSS nalika runtime. Nimpa <code>motion</code>.',
          press:
            'Apa sing ditindakake nalika dipencet lan ditahan: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> utawa <code>none</code>.',
          enter:
            'Kepriye tekane: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> utawa <code>none</code>.',
          corners:
            'Wangun pojoke: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> utawa <code>square</code>.',
          radius:
            'Sepira gedhene pojoke: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> utawa <code>full</code>.',
          density:
            'Sepira akehe papan sing dienggo: <code>compact</code>, <code>regular</code> utawa <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Efek pencetan',
            text: 'Pencet lan tahan saben tombol. <code>press</code> nemtokake apa sing ditindakake tombol nalika dipencet lan ditahan, lan <code>motion</code> pegas sing dienggo bali. <code>data-nui-press</code> ing elemen apa wae nyetel efek iki kanggo kabeh sing ana ing njerone.',
          },
          shapes: {
            title: 'Pojok, jari-jari lan kapadhetan',
            text: '<code>corners</code> ngowahi wangun pojok, <code>radius</code> ukurane, lan <code>density</code> papan sing dienggo tombol, nanging ora tau kurang saka ukuran target 24px. Browser tanpa <code>corner-shape</code> nggambar pojok bunder.',
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
          entrances: {
            title: 'Animasi mlebu',
            text: 'Saben tombol mbukak dialog sing padha nganggo preset <code>enter</code> sing beda, kanthi pegas <code>bouncy</code>. Kepriye wae tekane, dialog iki tansah lunga kanthi fade sing cepet.',
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
          entrances: {
            title: 'Animasi mlebu lan pegas',
            text: 'Saben menu masangake preset <code>enter</code> karo pegas <code>motion</code>, lan mekar saka sisih ngendi menu kasebut kabukak. Submenu oleh loro-lorone saka menu induke.',
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

      avatar: {
        name: 'Avatar',
        title: 'Komponen avatar kanggo Angular',
        summary: 'Gambar sawijining wong, utawa inisiale ing werna sing tansah dadi duweke.',
        description:
          'Avatar Angular kanthi inisial minangka gantine gambar, werna tetep kanggo saben jeneng, titik status lan klompok, kabeh gampang diwaca ing saben tema.',
        apiDescription:
          'Referensi API avatar Needless UI: nuiAvatar kanthi jeneng, gambar, ukuran, wangun lan status, uga nuiAvatarGroup.',
        a11yDescription:
          'Aksesibilitas avatar Needless UI: role lan jeneng gambar, avatar dekoratif, lan inisial sing njaga kontras 4,5:1.',
        overview: [
          'Komponen <code>nuiAvatar</code> nampilake gambar, utawa inisial wong kasebut yen ora ana gambar utawa gambare gagal dimuat. Inisial kasebut dumunung ing werna sing diitung saka jeneng, dadi wong sing padha tansah oleh werna sing padha ing ngendi wae.',
          'Saben hue diwatesi padhange (lightness) lan kentele werna (chroma) supaya inisial putih tetep ngluwihi rasio kontras 4,5:1, apa wae jeneng lan temane.',
        ],
        examples: {
          people: {
            title: 'Inisial, gambar lan status',
            text: 'Tanpa <code>src</code>, inisial lan werna dijupuk saka <code>name</code>. <code>status</code> nambahake titik kasedhiyan.',
          },
          group: {
            title: 'Klompok, ukuran lan wangun',
            text: '<code>nuiAvatarGroup</code> nata sabaris avatar supaya rada tumpang-tindih. <code>size</code> nampa <code>sm</code>, <code>md</code> utawa <code>lg</code>, lan <code>shape="square"</code> cocog kanggo tim lan aplikasi.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Gambar utawa inisial, kanthi jenenge wong kasebut.',
            members: {
              name: 'Jenenge wong. Jeneng aksesibel, inisial lan werna asale saka kene.',
              src: 'URL gambar. Yen gagal dimuat, inisial sing ditampilake minangka gantine.',
              size: 'Ukuran: <code>sm</code>, <code>md</code> utawa <code>lg</code>.',
              shape: '<code>circle</code> utawa <code>square</code>.',
              status:
                'Titik kasedhiyan: <code>online</code>, <code>away</code>, <code>busy</code> utawa <code>offline</code>.',
              label:
                'Jeneng aksesibel sing nerangake luwih saka jeneng, kayata “Ada Lovelace, lagi online”.',
              decorative:
                'Ndhelikake avatar saka teknologi asistif, kanggo avatar sing ana ing sandhinge jeneng sing katon.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Baris avatar sing tumpang-tindih. Wenehana jeneng nganggo <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar yaiku gambar (<code>role="img"</code>) kanthi jenenge wong kasebut. Yen ana ing sandhinge jeneng sing katon, setel <code>decorative</code> supaya pangguna screen reader ora krungu jeneng kaping pindho.',
          'Titik status mung kanggo dideleng. Yen statuse penting, lebokna ing <code>label</code>.',
          'Inisial tansah njaga rasio kontras paling ora 4,5:1 ing saben werna sing digawe.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Komponen breadcrumbs kanggo Angular',
        summary: 'Jejak kaca-kaca sing tumuju menyang kaca saiki.',
        description:
          'Breadcrumbs Angular sing aksesibel ing nav lan dhaptar native, kanthi pamisah CSS sing kewalik ing teks tengen-menyang-kiwa lan jejak dawa sing bisa digulung.',
        apiDescription:
          'Referensi API breadcrumbs Needless UI: directive nuiBreadcrumbs lan label landmark-e.',
        a11yDescription:
          'Aksesibilitas breadcrumbs Needless UI: landmark navigasi, semantik dhaptar, kaca saiki lan ukuran target.',
        overview: [
          'Breadcrumbs nuduhake ing ngendi sawijining kaca dumunung ing situs. Directive <code>nuiBreadcrumbs</code> menehi gaya marang <code>&lt;nav&gt;</code> native lan dhaptare; item pungkasan yaiku kaca saiki, sing ditandhani <code>aria-current="page"</code>.',
          'Jejak sing luwih dawa tinimbang wadhahe bakal digulung mangiwa-manengen tinimbang pindhah baris. Jejak kasebut wiwit ing posisi kagulung nganti pungkasan, lan pinggire dadi samar ing sisih sing isih ana isine.',
        ],
        examples: {
          trail: {
            title: 'Jejak kaca',
            text: 'Pranala kanggo kaca-kaca ing ndhuwur, banjur kaca saiki minangka teks biasa kanthi <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Jejak sing dawa',
            text: 'Ing wadhah sing ciyut, jejak bisa digulung, lan wiwitane kaca saiki wis katon.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Menehi gaya breadcrumbs marang <code>&lt;nav&gt;</code> lan dhaptare.',
            members: { label: 'Jeneng aksesibel kanggo landmark navigasi.' },
          },
        },
        keyboard: [['Tab', 'Pindhah menyang pranala sabanjure ing jejak.']],
        notes: [
          'Iki landmark navigasi kanthi dhaptar biasa, dadi screen reader ngumumake pira cacahe kaca ing jejak.',
          'Pamisah digambar nganggo CSS, dadi ora diwaca banter, lan kewalik ing teks tengen-menyang-kiwa.',
          'Saben pranala dhuwure paling ora 24px.',
        ],
      },

      empty: {
        name: 'Kahanan kosong',
        title: 'Komponen kahanan kosong kanggo Angular',
        summary:
          'Apa sing ditampilake nalika ora ana sing bisa ditampilake, lan apa sing kudu ditindakake.',
        description:
          'Kahanan kosong Angular kanthi gambar, judhul, katrangan cekak lan tumindak, uga papat ilustrasi bawaan sing ngambang alon-alon.',
        apiDescription:
          'Referensi API kahanan kosong Needless UI: nuiEmpty lan bagean media, judhul, katrangan lan tumindake.',
        a11yDescription:
          'Aksesibilitas kahanan kosong Needless UI: gambar dekoratif, heading sing duwe teges lan obah sing luwih sithik.',
        overview: [
          'Kahanan kosong ngganteni dhaptar, tabel utawa kaca sing durung ana isine. Iki nerangake sebabe, lan menehi langkah sabanjure.',
          'Bagean media nampa gambar panjenengan dhewe, utawa nggambar salah siji gambar bawaan: <code>search</code>, <code>inbox</code>, <code>files</code> utawa <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Ora ana asil',
            text: 'Judhul sing nerangake apa sing kedadeyan, siji baris pitulung, lan tumindak kanggo dalan metu.',
          },
          pictures: {
            title: 'Gambar bawaan',
            text: 'Setel <code>illustration</code> ing <code>nuiEmptyMedia</code>. Gambar-gambare ngetutake tema lan ngambang, kajaba yen obah dikurangi.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Wadhah: siji kolom ing tengah.', members: {} },
          NuiEmptyMedia: {
            summary: 'Gambar, didhelikake saka teknologi asistif.',
            members: {
              illustration:
                'Gambar bawaan: <code>search</code>, <code>inbox</code>, <code>files</code> utawa <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Judhul. Agem level heading sing cocog karo kaca.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Siji baris katrangan.', members: {} },
          NuiEmptyActions: { summary: 'Baris tombol.', members: {} },
        },
        keyboard: [],
        notes: [
          'Gambare mung dekoratif (<code>aria-hidden</code>): judhul lan katrangan sing nggawa pesen.',
          'Agem heading kanggo judhul, kanthi level sing cocog karo struktur kaca.',
          'Gambar bawaan mandheg ngambang yen pangguna milih obah sing luwih sithik.',
        ],
      },

      'number-field': {
        name: 'Kolom angka',
        title: 'Komponen kolom angka kanggo Angular',
        summary: 'Input angka kanthi tombol langkah, diformat miturut saben locale.',
        description:
          'Kolom angka Angular sing aksesibel: spinbutton kanthi tombol langkah, langkah lumantar keyboard, min, max, lan format locale kanggo mata uang, persen lan unit.',
        apiDescription:
          'Referensi API kolom angka Needless UI: nuiNumberField, nuiNumberInput kanthi min, max, step lan format, uga nuiNumberStep.',
        a11yDescription:
          'Interaksi keyboard lan aksesibilitas kolom angka Needless UI: role spinbutton, tombol panah lan Page, lan tombol langkah.',
        overview: [
          'Kolom angka yaiku input teks sing isine angka. Kolom iki nampilake angka sing wis diformat miturut locale, maca maneh teks sing diketik nganggo format sing padha, lan nalika ilang fokus (blur) nyetel nilaine supaya pas karo <code>step</code> ing antarane <code>min</code> lan <code>max</code>.',
          'Kolom iki uga bisa maca angka lan pamisah native: angka Arab-India, Persia lan Dewanagari, spasi lan titik minangka pamisah ewonan, lan saben tandha minus. Yen tombol langkah dipencet lan ditahan, bakal mbaleni terus, saya suwe saya cepet.',
        ],
        examples: {
          guests: {
            title: 'Tombol langkah',
            text: 'Tombol ing saben sisih, sing mati nalika tekan <code>min</code> lan <code>max</code>. Tombol panah uga bisa ngowahi nilai.',
          },
          formats: {
            title: 'Mata uang lan persen',
            text: 'Wenehna pilihan <code>Intl.NumberFormat</code> menyang <code>format</code> lan sawijining <code>locale</code>. Nilaine tetep angka biasa.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Nglumpukake input karo tombol langkahe.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Input teks sing isine angka, minangka spinbutton ARIA.',
            members: {
              value: 'Angkane, utawa <code>null</code> yen kosong. Uga bisa karo formulir.',
              min: 'Nilai paling cilik sing diidini.',
              max: 'Nilai paling gedhe sing diidini.',
              step: 'Sepira akehe owah-owahan nilai saben langkah. Nalika ilang fokus, nilaine dipasake karo langkah iki.',
              format:
                "Pilihan <code>Intl.NumberFormat</code>, kayata <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale kanggo ngformat lan maca angka.',
              disabled: 'Mateni input lan tombol-tombole.',
              stepBy: 'Munggahake (positif) utawa mudhunake (negatif) nilai sacacahe langkah.',
            },
          },
          NuiNumberStep: {
            summary: 'Tombol langkah. Yen ditahan, bakal mbaleni.',
            members: {
              nuiNumberStep:
                '<code>1</code> munggahake salangkah lan <code>-1</code> mudhunake salangkah.',
              label: 'Jeneng aksesibel. Gawane “Increase” utawa “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Panah munggah lan mudhun', 'Munggahake utawa mudhunake nilai salangkah.'],
          ['Page Up lan Page Down', 'Ngowahi nilai sepuluh langkah.'],
          ['Home lan End', 'Pindhah menyang nilai minimal utawa maksimal.'],
          ['Enter', 'Netepake apa sing wis diketik.'],
        ],
        notes: [
          'Input iki yaiku <code>spinbutton</code> kanthi <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, lan nilai sing wis diformat minangka <code>aria-valuetext</code>.',
          'Tombol langkah ora mlebu urutan tab, amarga tombol keyboard wis nindakake pakaryan sing padha, nanging tombol-tombol iki duwe jeneng lan disambungake menyang input lumantar <code>aria-controls</code>.',
          'Wenehana label marang input nganggo <code>aria-label</code> utawa <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Input OTP',
        title: 'Input OTP lan kode verifikasi kanggo Angular',
        summary: 'Kode verifikasi ing slot-slot kapisah, ing siji input sing asli.',
        description:
          'Input OTP Angular sing aksesibel: siji kolom native ing sangisore slot, isi otomatis SMS, WebOTP, ngresiki tempelan, klompok, masking lan goyang nalika salah.',
        apiDescription:
          'Referensi API input OTP Needless UI: nuiOtp kanthi length, pattern, klompok lan masking, uga nuiOtpInput kanthi WebOTP.',
        a11yDescription:
          'Keyboard lan aksesibilitas input OTP Needless UI: siji kolom teks sing duwe label, cincin fokus sing katon lan isi otomatis.',
        overview: [
          'Input OTP katon kaya baris slot, nanging ing sangisore mung ana siji <code>&lt;input&gt;</code> native. Isi otomatis SMS (<code>autocomplete="one-time-code"</code>), tempel, password manager, formulir lan screen reader kabeh ndeleng kolom teks biasa.',
          'Kode sing ditempel diresiki, dadi “123-456” lan “123 456” padha bisa, lan karakter sing ora diidini pattern ditolak. Ing Android, <code>webOtp</code> ngisi kode saka SMS nalika SMS-e teka.',
        ],
        examples: {
          verify: {
            title: 'Verifikasi',
            text: '<code>(completed)</code> kepicu nalika slot pungkasan wis kebak. Setel <code>aria-invalid</code> ing input kanggo nolak kode: slot-slote dadi abang lan goyang.',
          },
          letters: {
            title: 'Aksara, klompok lan masking',
            text: '<code>pattern="alphanumeric"</code> uga nampa aksara, <code>[groups]</code> nambahake pamisah, lan <code>masked</code> nggambar titik.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Nggambar slot lan mbungkus input.',
            members: {
              length: 'Cacahe karakter.',
              pattern:
                '<code>digits</code>, utawa <code>alphanumeric</code> kanggo aksara lan angka.',
              groups:
                'Ukuran klompok, kanthi pamisah sing digambar ing antarane, kayata <code>[3, 3]</code>.',
              masked: 'Nggambar titik tinimbang karakter.',
              completed: 'Ngetokake kode saben slot pungkasan kebak.',
            },
          },
          NuiOtpInput: {
            summary: 'Input sing asli. Oleh attribute sing dibutuhake kode sepisan pakai.',
            members: {
              webOtp: 'Ngisi kode saka SMS sing mlebu lumantar API WebOTP, yen didhukung.',
            },
          },
        },
        keyboard: [
          ['Angka utawa aksara', 'Ngisi slot saiki lan pindhah menyang sabanjure.'],
          ['Backspace', 'Mbusak karakter sadurunge kursor.'],
          [
            'Panah kiwa lan tengen',
            'Pindhah siji slot; slot sing wis kebak dipilih, dadi ngetik bakal ngganti isine.',
          ],
          ['Tempel', 'Ngisi slot saka kode sing wis disalin.'],
        ],
        notes: [
          'Screen reader mung nemoni siji kolom teks. Wenehana label nganggo <code>aria-label</code> utawa <code>&lt;label&gt;</code>.',
          'Slot didhelikake saka teknologi asistif; slot sing lagi disunting nuduhake cincin fokus.',
          'Yen obah dikurangi, kursor ora kedhip lan slot ora mlumpat utawa goyang.',
        ],
      },

      rating: {
        name: 'Rating',
        title: 'Komponen rating lintang kanggo Angular',
        summary: 'Lintang kanggo menehi rating, ing tombol radio sing asli.',
        description:
          'Rating lintang Angular sing aksesibel ing tombol radio native: keyboard lan formulir, pratinjau hover, mbusak rating, lan tampilan mung-waca kanthi pecahan.',
        apiDescription:
          'Referensi API rating Needless UI: nuiRating kanthi value, max, mode mung-waca lan bisa dibusak, uga label sing bisa diterjemahake.',
        a11yDescription:
          'Interaksi keyboard lan aksesibilitas rating Needless UI: klompok radio sing duwe jeneng, lintang sing duwe label lan gambar mung-waca.',
        overview: [
          'Rating yaiku klompok tombol radio native sing digambar dadi lintang. Tombol panah, formulir lan screen reader lakune padha kaya ing klompok radio liyane; CSS ngisi lintang lan nuduhake pratinjau rating anyar ing sangisore pointer.',
          'Ing mode mung-waca, rating bisa nuduhake pecahan apa wae, kayata rata-rata 4,3.',
        ],
        examples: {
          pick: {
            title: 'Menehi rating',
            text: 'Bind <code>[(value)]</code> utawa formulir. Kanthi <code>clearable</code>, milih lintang sing padha maneh bakal mbusak rating.',
          },
          average: {
            title: 'Nuduhake rata-rata',
            text: '<code>readonly</code> ngisi lintang nganti pecahan apa wae lan menehi jeneng gambar “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Klompok radio lintang, utawa gambar rating sing mung-waca.',
            members: {
              value: 'Rating, utawa <code>null</code>. Uga bisa karo formulir.',
              max: 'Cacahe lintang.',
              readonly: 'Nuduhake nilai, nganti pecahan apa wae, tinimbang nyuwun rating.',
              disabled: 'Mateni kabeh lintang.',
              clearable: 'Milih lintang saiki maneh bakal mbusak rating.',
              name: 'Jeneng sing dienggo bareng dening tombol radio. Gawane digawe otomatis.',
              starLabel: 'Jeneng aksesibel saben lintang, minangka fungsi saka nilaine.',
              readonlyLabel: 'Jeneng aksesibel ing mode mung-waca.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Mlebu menyang klompok, ing lintang sing dicenthang.'],
          ['Tombol panah', 'Ngowahi rating.'],
          ['Spasi', 'Nyenthang lintang sing lagi difokus.'],
        ],
        notes: [
          'Saben lintang yaiku radio native kanthi jeneng kayata “3 stars”. Wenehana jeneng klompok nganggo <code>aria-label</code>.',
          'Ing mode mung-waca, rating yaiku gambar (<code>role="img"</code>) kanthi jeneng “Rated 4.3 out of 5”.',
          'Lintang digambar nganggo CSS mask, dadi ngetutake forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Komponen skeleton loader kanggo Angular',
        summary: 'Placeholder sing njaga tata letak nalika isi lagi dimuat.',
        description:
          'Skeleton loader Angular kanggo teks, bunderan lan blok, kanthi siji sorot cahya sing nyapu sakabehe kaca, lan tanpa sorot yen obah dikurangi.',
        apiDescription:
          'Referensi API skeleton Needless UI: directive nuiSkeleton lan wangun text, circle lan block.',
        a11yDescription:
          'Aksesibilitas skeleton Needless UI: placeholder sing didhelikake, wilayah aria-busy, obah sing luwih sithik lan forced colors.',
        overview: [
          'Skeleton njaga wangun isi sing isih dimuat, dadi kaca ora mlumpat nalika isine teka. Atur ukurane nganggo CSS.',
          'Sorot cahyane dipasang ing viewport: siji sorotan nyapu kabeh skeleton ing kaca bebarengan, apa wae ukuran lan posisine.',
        ],
        examples: {
          card: {
            title: 'Kertu lagi dimuat',
            text: 'Garis, bunderan lan blok minangka gantine profil. Kertu kasebut <code>aria-busy</code> sajrone dimuat.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Placeholder, didhelikake saka teknologi asistif.',
            members: {
              shape: '<code>text</code> (garis), <code>circle</code> utawa <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton didhelikake saka screen reader. Setel <code>aria-busy="true"</code> ing wilayah sing lagi dimuat, lan busak yen isine wis teka.',
          'Ora ana sorot cahya yen pangguna milih obah sing luwih sithik.',
          'Ing mode forced colors, saben skeleton oleh outline.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notifikasi toast kanggo Angular',
        summary: 'Pesen cekak sing numpuk, bisa digeser ilang lan ora tau ngrebut fokus.',
        description:
          'Toast Angular sing aksesibel: tumpukan ing top layer, toast promise, tumindak Undo, geser kanggo ngilangi, lan timer sing mandheg nalika hover lan fokus.',
        apiDescription:
          'Referensi API toast Needless UI: layanan NuiToaster, pilihan-pilihane lan toast promise, uga wilayah nui-toaster.',
        a11yDescription:
          'Interaksi keyboard lan aksesibilitas toast Needless UI: pengumuman, hotkey Alt+T, Escape lan timer sing mandheg.',
        overview: [
          'Toast ngonfirmasi apa sing lagi wae kedadeyan, utawa menehi tumindak kayata Undo, tanpa ngganggu. Pasang siji <code>&lt;nui-toaster&gt;</code> ing app shell, banjur celuk <code>NuiToaster</code> saka ngendi wae.',
          'Toast-toast numpuk ing mburine sing paling anyar lan mekar kaya kipas nalika hover utawa fokus, kabeh nganggo pegas motion. Geseran mangiwa utawa manengen mbuwang siji toast. Timer mandheg nalika tumpukan lagi di-hover utawa difokus, lan nalika kaca ana ing latar mburi.',
        ],
        examples: {
          tones: {
            title: 'Tone',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> lan <code>danger()</code>. Toast danger tetep luwih suwe lan langsung diumumake (assertive).',
          },
          actions: {
            title: 'Tumindak lan promise',
            text: '<code>action</code> nambahake tombol kayata Undo. <code>promise()</code> nampilake spinner, banjur malih dadi asile.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Layanan sing nampilake toast. Inject ing ngendi wae.',
            members: {
              toasts: 'Kabeh toast ing layar, sing paling anyar dhisik.',
              show: 'Nampilake toast. Wenehna judhul, utawa pilihan kanthi katrangan, tone, durasi, tumindak utawa id.',
              success: 'Nampilake toast sukses.',
              warning: 'Nampilake toast pepenget.',
              danger: 'Nampilake toast danger. Tetep 8 detik lan langsung diumumake (assertive).',
              promise:
                'Nampilake toast loading nganti promise rampung, banjur pesen sukses utawa danger-e.',
              dismiss: 'Ngilangi siji toast, utawa kabeh.',
            },
          },
          NuiToasterRegion: {
            summary: 'Wilayah panggonane toast katon. Pasang sepisan wae, ing app shell.',
            members: {
              position: 'Pojok utawa pinggir viewport. Wiwitan lan pungkasan ngetutake arah teks.',
              expanded: 'Njaga tumpukan tetep mekar.',
              label: 'Jeneng aksesibel wilayah. Terangna carane tekan mrana.',
              closeLabel: 'Jeneng aksesibel tombol tutup.',
              hotkey:
                'Tombol, minangka <code>KeyboardEvent.code</code>, sing bareng karo Alt mindhah fokus menyang toast paling anyar.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Mindhah fokus menyang toast paling anyar.'],
          ['Tab', 'Pindhah ing antarane toast, tumindake lan tombol tutupe.'],
          ['Escape', 'Ngilangi toast sing lagi difokus.'],
        ],
        notes: [
          'Saben toast diumumake nalika katon: kanthi sopan (polite), utawa langsung (assertive) kanggo danger. Toast ora tau njupuk fokus.',
          'Timer mandheg nalika tumpukan lagi di-hover utawa difokus lan nalika kaca didhelikake, lan toast sing ngenteni promise ora tau entek wektune.',
          'Apa wae sing kudu ditindakake pangguna uga kudu ana ing njaba toast.',
          'Yen obah dikurangi, toast ora dianimasi utawa digeser, lan garis timer didhelikake.',
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
      customization: {
        title: 'Kustomisasi',
        description:
          'Fisika pegas, efek pencetan, animasi mlebu, wangun pojok, jari-jari lan kapadhetan: owahi obah lan rasane Needless UI ing kabeh aplikasi utawa saben komponen.',
        blocks: [
          {
            kind: 'p',
            html: 'Saben komponen nduweni watak sing bisa panjenengan owahi: pegas sing dienggo obah, apa sing ditindakake tombol ing sangisore driji, kepriye dialog lan menu teka, wangun lan ukuran pojoke, sarta sepira akehe papan sing dienggo. Saben-saben iku siji attribute kanggo kabeh sing ana ing njero sawijining elemen, utawa siji input kanggo siji komponen.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Siji attribute, sak pang wutuh' },
          {
            kind: 'p',
            html: 'Pasang attribute <code>data-nui-*</code> ing <code>&lt;body&gt;</code> kanggo kabeh aplikasi, utawa ing elemen apa wae kanggo sabagean wae. Sing paling cedhak sing menang, mula attribute-attribute iki bisa disusun. Attribute iki mung nyetel CSS custom property, dadi lakune padha wae karo framework apa wae, utawa tanpa framework.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Siji komponen' },
          {
            kind: 'p',
            html: 'Ing Angular, <code>nuiButton</code>, <code>nuiDialog</code> lan <code>nuiMenu</code> nampa nilai sing padha minangka input. Input sing ora panjenengan setel bakal ngetutake attribute ing sakubenge.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Pegas, dikompilasi dadi CSS' },
          {
            kind: 'p',
            html: 'Obah iku fisika pegas: kekakuan, redaman lan massa, dudu durasi lan kurva. Compiler token ngrampungake persamaan saben pegas lan nulis menyang CSS minangka wektu sing dibutuhake nganti anteng sarta easing <code>linear()</code>, dadi lakune ana ing compositor tanpa JavaScript. Enem pegas kalebu minangka token, saka <code>--nui-spring-snappy</code> nganti <code>--nui-spring-mechanical</code>, lan <code>--nui-motion</code> nyimpen pegas sing lagi dienggo.',
          },
          {
            kind: 'p',
            html: 'Pegas liyane apa wae mung butuh siji input. Angular ngompilasi pegas kasebut nalika runtime nganggo solver sing padha, lan <code>springTransition()</code> menehi CSS kanggo elemen panjenengan dhewe.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Apa wae ing antarane' },
          {
            kind: 'p',
            html: 'Preset iku mung trabasan. Kanggo liyane, setel dhewe custom property-ne: transform apa wae kanggo <code>--nui-press</code> lan <code>--nui-enter</code>, angka apa wae kanggo <code>--nui-radius-scale</code> lan <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Aksesibilitas' },
          {
            kind: 'p',
            html: 'Yen sistem nyuwun obah sing luwih sithik, pegas dadi owah-owahan sanalika, lan efek pencetan sarta animasi mlebu mandheg obah. Kapadhetan ora tau ndadekake kontrol luwih cilik tinimbang ukuran target 24px saka WCAG 2.2, lan ora ana preset sing ndemek werna, dadi saben pamriksan kontras tetep laku. Browser tanpa <code>corner-shape</code> nggambar saben pojok bunder.',
          },
        ],
      },
    },
    playground: {
      label: 'Papan dolanan kustomisasi',
      motion: 'Obah',
      custom: 'kustom',
      stiffness: 'Kekakuan',
      damping: 'Redaman',
      mass: 'Massa',
      press: 'Pencetan',
      enter: 'Mlebu',
      corners: 'Pojok',
      radius: 'Jari-jari',
      density: 'Kapadhetan',
      surprise: 'Kagetana aku',
      reset: 'Bali menyang gawan',
      hint: 'Pencet lan tahan salah siji tombol, banjur uculna. Bukak dialog lan menu supaya panjenengan bisa mirsani tekane.',
      save: 'Simpen',
      cancel: 'Batal',
      delete: 'Busak',
      openDialog: 'Bukak dialog',
      openMenu: 'Bukak menu',
      menu: ['Ganti jeneng', 'Duplikat', 'Busak'],
      dialogTitle: 'Dianimasi ngluwihi perlu',
      dialogText: 'Dialog iki teka persis kaya sing panjenengan dhawuhake.',
      close: 'Tutup',
      curve: 'Posisi pegas sajroning wektu. Wiwit saka ngisor lan leren ing garis putus-putus.',
      settles: (ms, overshoot) => `Anteng sajroning ${ms} ms · ngluwihi target ${overshoot}%`,
      instant: 'Ora ana obah: kabeh langsung mlumpat menyang panggonan tujuane.',
      stuck:
        'Pegas iki ora anteng sajroning 10 detik. Tambahi redaman utawa kekakuan; sauntara iku komponen tetep nganggo pegas pungkasan sing bisa anteng.',
      reducedMotion:
        'Sistem panjenengan nyuwun obah sing luwih sithik, dadi ing kene ora ana sing obah. Pegas, efek pencetan lan animasi mlebu bakal bali yen sistem wis ora nyuwun maneh.',
      noCornerShape:
        'Browser iki durung bisa nggambar wangun pojok, dadi saben pojok tetep bunder.',
      everywhere: 'Ing elemen apa wae, kanggo kabeh sing ana ing njerone:',
      oneComponent: 'Ing siji komponen, nganggo Angular:',
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
