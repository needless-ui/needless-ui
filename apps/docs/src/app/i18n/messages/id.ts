import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Komponen Angular yang aksesibel dan mendukung tema, dibangun di atas elemen native, design token W3C, dan satu stylesheet tanpa framework. Open source, berlisensi MIT.',
    skipToContent: 'Langsung ke konten utama',
    nav: {
      label: 'Utama',
      home: 'Beranda Needless UI',
      components: 'Komponen',
      guides: 'Panduan',
      github: 'GitHub',
      language: 'Bahasa',
      theme: 'Tema',
      themes: { system: 'Sistem', light: 'Terang', dark: 'Gelap' },
    },
    footer: {
      license: 'Dirilis di bawah Lisensi MIT.',
      source: 'Kode sumber',
      built: 'Direkayasa berlebihan, dibuat dengan cermat.',
      legal: 'Informasi hukum',
      privacy: 'Kebijakan privasi',
    },
    emergency: {
      label: 'JANGAN DITEKAN',
      cover: 'Angkat penutup pengaman',
      button: 'Jangan ditekan',
      armed: 'Penutupnya sudah terangkat. Pikirkan lagi.',
      falling: 'Protokol darurat diaktifkan…',
      fallen: 'Gravitasi kini permanen. Muat ulang halaman untuk membangun kembali alam semesta.',
      reduced:
        'Sistem Anda meminta gerakan dikurangi, jadi gravitasi tetap mati. Beruntung sekali.',
    },
  },

  home: {
    title: 'Needless UI · Komponen Angular aksesibel yang direkayasa berlebihan',
    description:
      'Needless UI adalah pustaka komponen Angular open source: elemen native, satu stylesheet tanpa framework, design token W3C, dan WCAG 2.2 AA bawaan.',
    eyebrow: 'Open source · Angular 22 · MIT',
    heading: 'Komponen UI yang dirancang lebih matang dari yang perlu.',
    lead: 'Needless UI memberi gaya pada <strong>elemen native</strong> dengan satu stylesheet yang tidak bergantung pada framework dan design token W3C. Direktif Angular-nya menambahkan perilaku dari Angular Aria, sehingga setiap komponen sudah aksesibel sejak render pertama.',
    getStarted: 'Mulai',
    browse: 'Lihat komponen',
    featuresTitle: 'Mengapa dibuat',
    features: [
      {
        title: 'Elemen native lebih dulu',
        text: '<code>&lt;button nuiButton&gt;</code> adalah tombol sungguhan. Formulir, keyboard, dan pembaca layar tetap berfungsi karena tidak ada yang membungkusnya.',
      },
      {
        title: 'Satu stylesheet, framework apa pun',
        text: 'Komponennya berupa CSS biasa dalam cascade layer: Angular hari ini, React berikutnya, dan HTML biasa kapan saja.',
      },
      {
        title: 'CSS Anda selalu menang',
        text: 'Semuanya berada di dalam <code>@layer nui</code>, sehingga gaya Anda sendiri bisa menimpanya tanpa <code>!important</code> atau perang spesifisitas.',
      },
      {
        title: 'Aksesibel sejak dirancang',
        text: 'Setiap pasangan warna diperiksa terhadap WCAG 2.2 AA saat palet dibuat. Fokus, forced colors, dan pengurangan gerakan sudah ditangani untuk Anda.',
      },
      {
        title: 'Design token standar',
        text: 'File token W3C DTCG dikompilasi menjadi variabel CSS dengan tema terang, gelap, dan bersarang.',
      },
      {
        title: 'Angular modern',
        text: 'Signal input, zoneless, rendering sisi server, dan satu entry point per komponen, sehingga aplikasi hanya menyertakan apa yang diimpornya.',
      },
    ],
    codeTitle: 'Cukup dua baris impor',
    codeText:
      'Tambahkan paketnya, impor stylesheet sekali, lalu gunakan komponen di dalam komponen standalone mana pun.',
  },

  components: {
    title: 'Komponen',
    description:
      'Jelajahi komponen Needless UI untuk Angular: tombol, dialog, dan menu yang aksesibel dengan contoh langsung, referensi API, dan dukungan keyboard.',
    intro:
      'Setiap komponen dibangun di atas elemen native dan didokumentasikan dengan contoh langsung, API-nya, serta perilaku keyboard-nya.',
    tabsLabel: 'Bagian dokumentasi',
    tabs: { overview: 'Ikhtisar', api: 'API', accessibility: 'Aksesibilitas' },
    sidenavLabel: 'Komponen',
    onThisPage: 'Di halaman ini',
    example: {
      showCode: 'Tampilkan kode',
      hideCode: 'Sembunyikan kode',
      copy: 'Salin',
      copied: 'Tersalin',
      files: 'File sumber',
    },
    api: {
      import: 'Impor',
      selector: 'Selektor',
      exportAs: 'Diekspor sebagai',
      members: 'Properti',
      name: 'Nama',
      type: 'Tipe',
      default: 'Default',
      description: 'Deskripsi',
      kinds: { input: 'Input', model: 'Dua arah', output: 'Output', method: 'Metode' },
    },
    a11y: {
      keyboard: 'Interaksi keyboard',
      key: 'Tombol',
      action: 'Aksi',
      notes: 'Catatan aksesibilitas',
    },
    titles: {
      api: (name) => `API ${name}`,
      accessibility: (name) => `Aksesibilitas ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Komponen tombol untuk Angular',
        summary: 'Aksi dan tautan, dengan gaya pada elemen button dan anchor native.',
        description:
          'Direktif tombol Angular yang aksesibel untuk elemen button dan anchor native, dengan empat varian, tiga tone, tiga ukuran, dan dukungan tautan.',
        apiDescription:
          'Referensi API tombol Needless UI: direktif nuiButton, selektornya, serta input variant, tone, size, dan disabled.',
        a11yDescription:
          'Perilaku keyboard dan aksesibilitas tombol Needless UI: semantik native, indikator fokus, kontras, ukuran target, dan tautan nonaktif.',
        overview: [
          'Direktif <code>nuiButton</code> memberi gaya pada <code>&lt;button&gt;</code> atau <code>&lt;a&gt;</code> native. Elemennya tetap mempertahankan semantik, perilaku keyboard, dan perannya dalam formulir; direktif ini hanya meneruskan input-nya ke atribut data yang menjadi target stylesheet.',
          'Gunakan <code>&lt;button&gt;</code> untuk aksi dan <code>&lt;a&gt;</code> untuk navigasi. Keduanya tampil sama dan sama-sama mendukung <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Varian',
            text: 'Empat gaya isian, dari yang paling menonjol hingga yang paling kalem. Gunakan satu tombol solid per tampilan untuk aksi utama.',
          },
          tones: {
            title: 'Tone',
            text: 'Tone mengubah palet warna: accent untuk alur utama, neutral untuk aksi sekunder, dan danger untuk aksi destruktif.',
          },
          sizes: {
            title: 'Ukuran',
            text: 'Tiga tinggi: 28, 36, dan 44 piksel. Bahkan yang terkecil pun melampaui ukuran target minimum WCAG 2.2.',
          },
          links: {
            title: 'Tautan dan tombol nonaktif',
            text: 'Anchor tidak bisa dinonaktifkan secara native, jadi tautan nonaktif mendapat <code>aria-disabled="true"</code> dan kliknya diblokir, bahkan dengan <code>routerLink</code>.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Memberi gaya tombol pada <code>&lt;button&gt;</code> atau <code>&lt;a&gt;</code> native.',
            members: {
              variant:
                'Gaya isian: <code>solid</code>, <code>soft</code>, <code>outline</code>, atau <code>ghost</code>.',
              tone: 'Palet warna: <code>accent</code>, <code>neutral</code>, atau <code>danger</code>.',
              size: 'Tinggi, padding, dan ukuran font: <code>sm</code>, <code>md</code>, atau <code>lg</code>.',
              disabled:
                'Menonaktifkan tombol. Pada anchor, direktif ini menetapkan <code>aria-disabled</code> dan memblokir aktivasi.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Memindahkan fokus ke tombol atau tautan.'],
          ['Enter', 'Mengaktifkan tombol, atau membuka tautan.'],
          ['Spasi', 'Mengaktifkan tombol. Pada tautan, menggulir halaman (perilaku native).'],
        ],
        notes: [
          'Nama aksesibelnya diambil dari teks elemen. Tombol yang hanya berisi ikon memerlukan <code>aria-label</code>.',
          'Teks memenuhi rasio kontras 4,5:1 untuk setiap varian, tone, dan tema; generator palet memastikannya.',
          'Indikator fokus berupa outline 2px dengan kontras minimal 3:1 terhadap halaman di kedua tema.',
          '<code>&lt;button&gt;</code> yang nonaktif keluar dari urutan tab. Tautan nonaktif tetap bisa difokus agar pengguna pembaca layar dapat menemukannya, dan diumumkan sebagai nonaktif.',
          'Dalam mode forced colors, border transparan berubah menjadi outline berwarna sistem yang terlihat.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Komponen dialog untuk Angular',
        summary:
          'Jendela modal berbasis elemen dialog native, dengan fokus yang ditangani oleh browser.',
        description:
          'Dialog Angular yang aksesibel berbasis elemen dialog native: fokus modal, tutup dengan Esc atau klik latar belakang, dan nilai kembalian.',
        apiDescription:
          'Referensi API dialog Needless UI: nuiDialog dengan binding dua arah open, ukuran, nilai kembalian, serta bagian judul, deskripsi, dan penutup.',
        a11yDescription:
          'Perilaku keyboard dan aksesibilitas dialog Needless UI: fokus modal, tombol Esc, pemulihan fokus, dan konten berlabel.',
        overview: [
          'Direktif <code>nuiDialog</code> mengubah <code>&lt;dialog&gt;</code> native menjadi dialog Needless UI. Perilaku modalnya disediakan oleh browser: halaman di belakangnya menjadi inert, fokus tetap di dalam, Esc menutupnya, dan fokus kembali ke elemen yang membukanya.',
          'Hubungkan <code>[(open)]</code> ke sebuah signal, lalu beri nilai pada tombol penutup dengan <code>nuiDialogClose="…"</code> untuk mengetahui cara dialog ditutup.',
        ],
        examples: {
          confirm: {
            title: 'Konfirmasi',
            text: 'Konfirmasi tindakan destruktif. Pilihan yang aman diberi <code>autofocus</code>, dan nilai yang dipilih diterima melalui <code>(closed)</code>.',
          },
          form: {
            title: 'Formulir dalam dialog',
            text: 'Dialog bisa berisi konten apa pun. Di sini, kolom pertama menerima fokus saat dialog terbuka.',
          },
          dismissible: {
            title: 'Tidak bisa ditutup begitu saja',
            text: 'Dengan <code>[dismissible]="false"</code>, Esc dan klik di latar belakang diabaikan, sehingga pengguna harus memilih salah satu opsi.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Mengubah <code>&lt;dialog&gt;</code> native menjadi dialog Needless UI.',
            members: {
              open: 'Apakah dialog sedang terbuka. Hubungkan dengan <code>[(open)]</code>.',
              modal:
                'Membuka dialog sebagai modal, dengan latar belakang dan halaman di belakangnya yang menjadi inert.',
              dismissible: 'Apakah Esc dan klik di latar belakang menutup dialog.',
              size: 'Lebar maksimum: <code>sm</code> (24rem), <code>md</code> (32rem), atau <code>lg</code> (44rem).',
              closed:
                'Mengirimkan nilai kembalian setiap kali dialog ditutup. Nilainya kosong jika dialog ditutup tanpa memilih.',
              close: 'Menutup dialog dengan nilai kembalian opsional.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Judul dialog. Elemen ini mendapat id dan menjadi <code>aria-labelledby</code> dialog.',
            members: {},
          },
          NuiDialogDescription: {
            summary: 'Deskripsi singkat yang dirujuk oleh <code>aria-describedby</code> dialog.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Deretan tombol di bagian bawah dialog, rata ke akhir.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Menutup dialog yang memuatnya saat diklik.',
            members: {
              nuiDialogClose:
                'Nilai yang menyertai penutupan dialog, dikirimkan oleh <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Memindahkan fokus ke elemen berikutnya di dalam dialog.'],
          ['Shift + Tab', 'Memindahkan fokus ke elemen sebelumnya di dalam dialog.'],
          ['Esc', 'Menutup dialog, kecuali jika dialog tidak bisa ditutup begitu saja.'],
        ],
        notes: [
          'Membuka dialog dengan <code>showModal()</code> memberinya <code>role="dialog"</code> dan semantik modal, serta membuat bagian halaman lainnya menjadi inert.',
          'Judul dan deskripsi ditautkan melalui id yang dibuat otomatis, sehingga pembaca layar mengumumkan keduanya saat dialog terbuka.',
          'Fokus awal jatuh ke elemen dengan <code>autofocus</code>, atau ke elemen pertama yang bisa difokus. Untuk konfirmasi destruktif, pasang <code>autofocus</code> pada pilihan yang aman.',
          'Saat dialog ditutup, fokus kembali ke elemen yang membukanya.',
          'Browser tetap bisa menutup dialog yang tidak bisa ditutup begitu saja setelah Esc ditekan berulang kali tanpa interaksi pengguna, jadi selalu sediakan jalan keluar yang jelas.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Komponen menu untuk Angular',
        summary:
          'Daftar aksi pop-up, dengan submenu, item yang bisa dicentang, dan dukungan keyboard penuh.',
        description:
          'Menu Angular aksesibel dengan Angular Aria: navigasi keyboard, pencarian saat mengetik, submenu, item checkbox dan radio, serta posisi yang mengikuti viewport.',
        apiDescription:
          'Referensi API menu Needless UI: nuiMenuTrigger, nuiMenu, dan nuiMenuItem, dengan nilai, tone, submenu, dan status tercentang.',
        a11yDescription:
          'Interaksi keyboard dan aksesibilitas menu Needless UI: tombol panah, pencarian saat mengetik, submenu, Esc, dan pengembalian fokus.',
        overview: [
          'Menu menampilkan daftar aksi saat pemicunya diaktifkan. Perilakunya berasal dari pola menu Angular Aria; Needless UI menambahkan gaya, merender menu sebagai popover di atas halaman, dan menjaganya tetap di dalam viewport.',
          'Teruskan referensi <code>ngMenu</code> milik menu ke <code>[nuiMenuTrigger]</code>, beri setiap item <code>value</code> yang unik, lalu tanggapi <code>(selected)</code> pada tiap item atau <code>(itemSelected)</code> pada menu.',
        ],
        examples: {
          actions: {
            title: 'Aksi',
            text: 'Menu aksi dengan petunjuk pintasan, pemisah, dan item destruktif.',
          },
          submenu: {
            title: 'Submenu',
            text: 'Hubungkan item ke <code>nuiMenu</code> bersarang dengan <code>[submenu]</code>. Submenu terbuka saat kursor diarahkan ke item atau dengan tombol panah kanan.',
          },
          checkable: {
            title: 'Item checkbox dan radio',
            text: 'Tetapkan <code>role</code> dan hubungkan <code>[checked]</code>. Menu menampilkan indikatornya dan mengumumkan statusnya.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Membuka menu. Biasanya dipasang pada <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Menu yang akan dibuka: referensi <code>ngMenu</code> dari sebuah <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Menu berisi item, dirender sebagai popover di samping pemicunya. Export <code>ngMenu</code>-nya adalah menu Angular Aria yang diterima oleh pemicu dan submenu.',
            members: {
              wrap: 'Apakah tombol panah berputar dari item terakhir ke item pertama.',
              typeaheadDelay: 'Jeda dalam milidetik sebelum pencarian saat mengetik diatur ulang.',
              disabled: 'Menonaktifkan seluruh menu.',
              itemSelected:
                'Mengirimkan nilai item yang dipilih. Pada menu akar, output ini juga terpicu untuk item submenu.',
            },
          },
          NuiMenuItem: {
            summary: 'Item dalam <code>nuiMenu</code>.',
            members: {
              value: 'Pengenal item. Harus unik di seluruh menu, termasuk submenu.',
              disabled:
                'Menonaktifkan item. Item tetap bisa dijangkau dengan tombol panah, tetapi tidak bisa dipilih.',
              submenu: '<code>nuiMenu</code> bersarang yang dibuka oleh item ini.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code>, atau <code>menuitemradio</code>.',
              checked: 'Status tercentang dari item checkbox atau radio.',
              tone: '<code>danger</code> untuk aksi destruktif.',
              searchTerm:
                'Teks yang dicocokkan oleh pencarian saat mengetik. Jika tidak diatur, label item yang digunakan.',
              selected: 'Mengirimkan nilai item saat item dipilih dengan mouse atau keyboard.',
            },
          },
          NuiMenuSeparator: { summary: 'Garis pemisah antarkelompok item.', members: {} },
          NuiMenuShortcut: {
            summary: 'Petunjuk pintasan keyboard, rata ke akhir item.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter atau Spasi',
            'Pada pemicu: membuka menu di item pertama. Pada item: memilihnya, atau membuka submenunya.',
          ],
          [
            'Panah bawah',
            'Pada pemicu: membuka menu di item pertama. Di dalam menu: pindah ke item berikutnya.',
          ],
          [
            'Panah atas',
            'Pada pemicu: membuka menu di item terakhir. Di dalam menu: pindah ke item sebelumnya.',
          ],
          ['Home dan End', 'Pindah ke item pertama atau terakhir.'],
          [
            'Panah kanan',
            'Membuka submenu dan pindah ke item pertamanya (panah kiri pada teks kanan-ke-kiri).',
          ],
          [
            'Panah kiri',
            'Menutup submenu dan kembali ke item induknya (panah kanan pada teks kanan-ke-kiri).',
          ],
          ['Esc', 'Menutup menu dan mengembalikan fokus ke pemicu.'],
          ['Huruf', 'Pindah ke item berikutnya yang labelnya diawali teks yang diketik.'],
        ],
        notes: [
          'Pemicu mendapat <code>aria-haspopup</code>, <code>aria-expanded</code>, dan <code>aria-controls</code>; menu dan item-itemnya mendapat role ARIA dari Angular Aria.',
          'Item yang disorot memakai isian solid dengan kontras teks minimal 4,5:1, sekaligus berfungsi sebagai indikator fokus. Dalam mode forced colors, item tersebut mendapat outline sorotan sistem.',
          'Item yang bisa dicentang mengumumkan statusnya melalui <code>aria-checked</code>.',
          'Memilih item akan menutup menu dan mengembalikan fokus ke pemicu. Memindahkan fokus ke luar pemicu dan menu juga akan menutupnya.',
          'Tinggi item minimal 28 piksel, di atas ukuran target minimum WCAG 2.2.',
        ],
      },
    },
  },

  guides: {
    title: 'Panduan',
    items: {
      'getting-started': {
        title: 'Memulai',
        description:
          'Pasang Needless UI di aplikasi Angular 22: tambahkan paket, impor stylesheet, dan gunakan komponen aksesibel pertama Anda dalam hitungan menit.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI bekerja dengan Angular 22. Komponennya berupa direktif standalone, jadi tidak ada modul yang perlu diimpor.',
          },
          { kind: 'h2', id: 'install', text: 'Instalasi' },
          {
            kind: 'p',
            html: 'Tambahkan paket Angular bersama Angular Aria dan CDK, yang menyediakan perilaku keyboard dan aksesibilitas. Stylesheet-nya sudah disertakan.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Impor gaya' },
          {
            kind: 'p',
            html: 'Impor stylesheet sekali di <code>src/styles.css</code>. Stylesheet ini mencakup design token dan semua komponen.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Semuanya berada di dalam <code>@layer nui</code>. Jika aplikasi Anda punya reset global seperti <code>a { color: inherit }</code>, letakkan di layer yang dideklarasikan sebelum <code>nui</code> agar tidak menimpa komponen.',
          },
          { kind: 'h2', id: 'use', text: 'Gunakan komponen' },
          {
            kind: 'p',
            html: 'Impor direktif yang Anda perlukan dari entry point masing-masing, lalu tambahkan ke <code>imports</code> komponen Anda.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Langkah berikutnya' },
          {
            kind: 'p',
            html: 'Jelajahi <a href="/components">komponen</a> untuk melihat contoh langsung, atau baca <a href="/guides/theming">panduan tema</a> untuk menyesuaikannya dengan brand Anda.',
          },
        ],
      },
      theming: {
        title: 'Tema',
        description:
          'Atur tema Needless UI dengan variabel CSS: mode terang dan gelap, tema bersarang, penimpaan token, serta palet brand yang kontrasnya diperiksa ulang.',
        blocks: [
          {
            kind: 'p',
            html: 'Setiap keputusan visual adalah variabel CSS yang dihasilkan dari design token W3C. Komponen hanya memakai token semantik seperti <code>--nui-color-accent-solid</code>, sehingga mengubah satu token akan mengubah gaya setiap komponen yang memakainya.',
          },
          { kind: 'h2', id: 'modes', text: 'Terang dan gelap' },
          {
            kind: 'p',
            html: 'Secara default, mode mengikuti preferensi sistem operasi. Tetapkan mode pada elemen mana pun dengan <code>data-nui-theme</code>; mode ini bisa disarangkan dengan bebas.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Timpa token' },
          {
            kind: 'p',
            html: 'Token berada di <code>@layer nui</code>, sehingga CSS biasa di aplikasi Anda bisa menimpanya. Tetapkan di <code>:root</code> untuk seluruh aplikasi, atau di elemen mana pun untuk sebagian saja.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Palet brand' },
          {
            kind: 'p',
            html: 'Skala warnanya dihasilkan otomatis. Ubah hue di <code>packages/tokens/scripts/palette.ts</code>, lalu hasilkan ulang: skrip akan menyesuaikan setiap warna ke sRGB dan memeriksa ulang kontras setiap pasangan teks dan latar belakang.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Halaman tidak ditemukan',
    description:
      'Halaman ini tidak ada. Jelajahi komponen Needless UI atau mulai lagi dari beranda.',
    text: 'Halaman ini tidak ada, atau sudah dipindahkan.',
    home: 'Ke beranda',
    components: 'Lihat komponen',
  },

  legal: {
    translationNote:
      'Terjemahan ini disediakan untuk kemudahan; jika terdapat perbedaan, yang berlaku adalah teks bahasa Inggris.',
    labels: { name: 'Nama', address: 'Alamat', email: 'Email', uid: 'UID', vat: 'Nomor PPN' },
    notice: {
      title: 'Informasi hukum',
      description:
        'Siapa yang mengelola needlessui.com: nama, alamat pos, dan email pengelola, beserta data pendaftaran perusahaan dan PPN.',
      operator: 'Pengelola',
      legalForm: 'usaha perseorangan',
      country: 'Swiss',
      register: 'Daftar perusahaan',
      registerEntry: 'Terdaftar dalam daftar perusahaan Kanton Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Tanggung jawab' },
        {
          kind: 'p',
          html: 'Situs ini disusun dengan cermat, tetapi tanpa jaminan apa pun bahwa isinya akurat, lengkap, atau mutakhir. Situs web yang ditautkan berada di luar kendali kami; pengelolanya bertanggung jawab atas kontennya.',
        },
        { kind: 'h2', id: 'license', text: 'Lisensi' },
        {
          kind: 'p',
          html: 'Needless UI, termasuk situs ini, adalah perangkat lunak open source di bawah <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">Lisensi MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Kebijakan privasi',
      description:
        'Cara needlessui.com menangani data pribadi: tanpa cookie, analitik, atau pelacakan. Apa yang diproses host saat Anda berkunjung, dan hak-hak Anda.',
      updated: 'Terakhir diperbarui: 24 September 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Kebijakan ini menjelaskan data pribadi apa saja yang diproses saat Anda mengunjungi www.needlessui.com, serta apa saja hak Anda. Singkatnya: situs ini tidak menggunakan cookie, analitik, atau pelacakan, dan tidak pernah meminta data pribadi Anda.',
        },
        { kind: 'h2', id: 'controller', text: 'Pihak yang bertanggung jawab' },
        {
          kind: 'p',
          html: 'Pengelola yang disebutkan dalam <a href="/legal">informasi hukum</a>, yaitu Angelo Lamonaca. Kontak: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Hosting' },
        {
          kind: 'p',
          html: 'Situs ini di-hosting oleh Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Saat Anda membuka halaman, browser Anda mengirimkan data teknis yang diterima setiap situs web: alamat IP, tanggal dan waktu, halaman yang diminta, halaman asal Anda, dan user agent browser Anda. Vercel memproses data ini atas nama kami untuk menyajikan situs dan menjaga keamanannya, dan menyimpannya hanya selama diperlukan untuk itu. Pemrosesan dapat dilakukan di Amerika Serikat; Vercel tersertifikasi berdasarkan EU-U.S. Data Privacy Framework, UK Extension-nya, dan Swiss-U.S. Data Privacy Framework. Lihat <a href="https://vercel.com/legal/privacy-policy">pemberitahuan privasi Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Jika GDPR berlaku, dasar hukumnya adalah kepentingan sah kami dalam menjalankan situs web yang aman (Pasal 6 ayat (1) huruf f GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie dan penyimpanan lokal' },
        {
          kind: 'p',
          html: 'Situs ini tidak memasang cookie. Jika Anda memilih tema terang atau gelap, penyimpanan lokal browser Anda mengingat pilihan tersebut untuk kunjungan berikutnya. Data ini tidak pernah meninggalkan perangkat Anda; untuk menghapusnya, kembali ke “Sistem” atau hapus data situs.',
        },
        { kind: 'h2', id: 'tracking', text: 'Tanpa pelacakan' },
        {
          kind: 'p',
          html: 'Tidak ada analitik, iklan, plugin media sosial, konten pihak ketiga yang disematkan, maupun font eksternal. Tautan ke GitHub dan npm mengarah ke situs yang memiliki kebijakan privasinya sendiri.',
        },
        { kind: 'h2', id: 'rights', text: 'Hak Anda' },
        {
          kind: 'p',
          html: 'Anda dapat menanyakan data pribadi apa tentang Anda yang diproses, serta meminta agar data tersebut diperbaiki atau dihapus. Jika GDPR berlaku, Anda juga dapat mengajukan keberatan atas pemrosesan, meminta pembatasannya, dan menerima data Anda dalam format yang portabel. Kirim email ke {email}. Anda juga dapat mengajukan pengaduan kepada otoritas pengawas: di Swiss, Komisioner Federal Perlindungan Data dan Informasi (FDPIC); di Uni Eropa, otoritas di negara Anda.',
        },
        { kind: 'h2', id: 'changes', text: 'Perubahan' },
        {
          kind: 'p',
          html: 'Kebijakan ini berubah ketika situsnya berubah, misalnya saat pindah ke host baru. Tanggal di bawah menunjukkan versi yang berlaku.',
        },
      ],
    },
  },
};
