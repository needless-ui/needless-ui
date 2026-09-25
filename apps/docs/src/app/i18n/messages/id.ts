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
    toaster: { label: 'Notifikasi (Alt+T)', close: 'Tutup' },
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
        title: 'Kustomisasi berlebihan',
        text: 'Pegas, efek tekan, animasi masuk, bentuk sudut, radius, dan kepadatan: <a href="/guides/customization">satu atribut</a> untuk seluruh aplikasi, atau satu input per komponen, di atas design token W3C standar.',
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
      kinds: {
        input: 'Input',
        model: 'Dua arah',
        output: 'Output',
        method: 'Metode',
        property: 'Properti',
      },
      texts:
        'Setiap teks yang ditampilkan atau diumumkannya juga merupakan input, jadi Anda bisa menerjemahkannya:',
      customization: {
        note: 'Input kustomisasi yang tidak Anda atur akan mengikuti atribut <code>data-nui-*</code> terdekat. Lihat <a href="/guides/customization">panduan kustomisasi</a>.',
        members: {
          motion:
            'Pegas yang menggerakkan komponen: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code>, atau <code>none</code>.',
          spring:
            'Pegas apa pun, dalam bentuk <code>{ stiffness, damping, mass }</code>, yang dikompilasi menjadi CSS saat runtime. Menimpa <code>motion</code>.',
          press:
            'Efek saat komponen ditekan dan ditahan: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code>, atau <code>none</code>.',
          enter:
            'Cara komponen muncul: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code>, atau <code>none</code>.',
          corners:
            'Bentuk sudut: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code>, atau <code>square</code>.',
          radius:
            'Seberapa bulat sudutnya: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code>, atau <code>full</code>.',
          density:
            'Seberapa banyak ruang yang digunakan komponen: <code>compact</code>, <code>regular</code>, atau <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Efek tekan',
            text: 'Tekan dan tahan setiap tombol. <code>press</code> menentukan apa yang dilakukan tombol saat ditahan, dan <code>motion</code> menentukan pegas yang membawanya kembali. <code>data-nui-press</code> di elemen mana pun menerapkan efek ini ke semua yang ada di dalamnya.',
          },
          shapes: {
            title: 'Sudut, radius, dan kepadatan',
            text: '<code>corners</code> mengubah bentuk sudut, <code>radius</code> mengubah ukurannya, dan <code>density</code> mengubah ruang yang digunakan tombol, tetapi tidak pernah lebih kecil dari ukuran target 24px. Browser tanpa dukungan <code>corner-shape</code> menggambar sudut membulat.',
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
          entrances: {
            title: 'Animasi masuk',
            text: 'Setiap tombol membuka dialog yang sama dengan preset <code>enter</code> yang berbeda dan pegas <code>bouncy</code>. Apa pun cara munculnya, dialog selalu keluar dengan memudar cepat.',
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
          entrances: {
            title: 'Animasi masuk dan pegas',
            text: 'Setiap menu memadukan preset <code>enter</code> dengan pegas <code>motion</code> dan membesar dari sisi tempat menu terbuka. Submenu mewarisi keduanya.',
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

      avatar: {
        name: 'Avatar',
        title: 'Komponen avatar untuk Angular',
        summary: 'Foto seseorang, atau inisialnya di atas warna yang selalu menjadi miliknya.',
        description:
          'Avatar Angular dengan inisial sebagai pengganti foto, warna tetap untuk setiap nama, titik status, dan grup, semuanya terbaca jelas di setiap tema.',
        apiDescription:
          'Referensi API avatar Needless UI: nuiAvatar dengan nama, foto, ukuran, bentuk, dan status, serta nuiAvatarGroup.',
        a11yDescription:
          'Aksesibilitas avatar Needless UI: role dan nama gambar, avatar dekoratif, serta inisial yang menjaga kontras 4,5:1.',
        overview: [
          'Komponen <code>nuiAvatar</code> menampilkan foto, atau inisial orang tersebut jika fotonya tidak ada atau gagal dimuat. Inisial ditampilkan di atas warna yang dihitung dari nama, sehingga orang yang sama selalu mendapat warna yang sama di mana pun.',
          'Kecerahan dan kroma setiap hue dibatasi agar inisial putih selalu memiliki rasio kontras di atas 4,5:1, apa pun nama dan temanya.',
        ],
        examples: {
          people: {
            title: 'Inisial, foto, dan status',
            text: 'Tanpa <code>src</code>, inisial dan warna diambil dari <code>name</code>. <code>status</code> menambahkan titik status kehadiran.',
          },
          group: {
            title: 'Grup, ukuran, dan bentuk',
            text: '<code>nuiAvatarGroup</code> menyusun sederet avatar yang saling bertumpuk. <code>size</code> menerima <code>sm</code>, <code>md</code>, atau <code>lg</code>, dan <code>shape="square"</code> cocok untuk tim dan aplikasi.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Foto atau inisial, yang diberi nama sesuai orangnya.',
            members: {
              name: 'Nama orang tersebut. Nama aksesibel, inisial, dan warna diambil darinya.',
              src: 'URL foto. Jika gagal dimuat, inisial ditampilkan sebagai gantinya.',
              size: 'Ukuran: <code>sm</code>, <code>md</code>, atau <code>lg</code>.',
              shape: '<code>circle</code> atau <code>square</code>.',
              status:
                'Titik status kehadiran: <code>online</code>, <code>away</code>, <code>busy</code>, atau <code>offline</code>.',
              label:
                'Nama aksesibel yang menyampaikan lebih dari sekadar nama, misalnya “Ada Lovelace, sedang online”.',
              decorative:
                'Menyembunyikan avatar dari teknologi bantu, untuk avatar yang berada di samping nama yang terlihat.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Sederet avatar yang saling bertumpuk. Beri nama dengan <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar adalah gambar (<code>role="img"</code>) yang diberi nama sesuai orangnya. Jika namanya sudah terlihat di sampingnya, tetapkan <code>decorative</code> agar pengguna pembaca layar tidak mendengarnya dua kali.',
          'Titik status hanya bersifat visual. Jika status itu penting, cantumkan di <code>label</code>.',
          'Inisial menjaga rasio kontras minimal 4,5:1 pada setiap warna yang dihasilkan.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Komponen breadcrumb untuk Angular',
        summary: 'Jejak halaman yang mengarah ke halaman saat ini.',
        description:
          'Breadcrumb Angular yang aksesibel dengan nav dan daftar native, pemisah CSS yang dicerminkan pada teks kanan-ke-kiri, dan jejak panjang yang bisa digulir.',
        apiDescription:
          'Referensi API breadcrumb Needless UI: direktif nuiBreadcrumbs dan label landmark navigasinya.',
        a11yDescription:
          'Aksesibilitas breadcrumb Needless UI: landmark navigasi, semantik daftar, halaman saat ini, dan ukuran target.',
        overview: [
          'Breadcrumb menunjukkan posisi sebuah halaman di dalam situs. Direktif <code>nuiBreadcrumbs</code> memberi gaya pada <code>&lt;nav&gt;</code> native beserta daftarnya; item terakhir adalah halaman saat ini, yang ditandai dengan <code>aria-current="page"</code>.',
          'Jejak yang lebih panjang dari kontainernya bergulir ke samping alih-alih turun ke baris baru. Awalnya jejak sudah tergulir ke ujung, dan tepinya memudar di sisi yang masih menyimpan item lain.',
        ],
        examples: {
          trail: {
            title: 'Jejak halaman',
            text: 'Tautan ke halaman-halaman di atasnya, lalu halaman saat ini sebagai teks biasa dengan <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Jejak panjang',
            text: 'Di kontainer yang sempit, jejaknya bisa digulir, dan awalnya halaman saat ini sudah terlihat.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Memberi gaya breadcrumb pada <code>&lt;nav&gt;</code> beserta daftarnya.',
            members: { label: 'Nama aksesibel untuk landmark navigasi.' },
          },
        },
        keyboard: [['Tab', 'Pindah ke tautan berikutnya dalam jejak.']],
        notes: [
          'Komponen ini adalah landmark navigasi berisi daftar biasa, sehingga pembaca layar mengumumkan jumlah halaman dalam jejak.',
          'Pemisah digambar dengan CSS, sehingga tidak dibacakan, dan dicerminkan pada teks kanan-ke-kiri.',
          'Tinggi setiap tautan minimal 24px.',
        ],
      },

      empty: {
        name: 'Empty state',
        title: 'Komponen empty state untuk Angular',
        summary:
          'Apa yang ditampilkan saat tidak ada yang bisa ditampilkan, dan apa yang bisa dilakukan.',
        description:
          'Empty state Angular dengan gambar, judul, penjelasan singkat, dan aksi, plus empat ilustrasi bawaan yang melayang dengan lembut.',
        apiDescription:
          'Referensi API empty state Needless UI: nuiEmpty beserta bagian media, judul, deskripsi, dan aksinya.',
        a11yDescription:
          'Aksesibilitas empty state Needless UI: gambar dekoratif, judul yang bermakna, dan pengurangan gerakan.',
        overview: [
          'Empty state menggantikan daftar, tabel, atau halaman yang belum berisi apa pun. Komponen ini menjelaskan alasannya dan menawarkan langkah berikutnya.',
          'Bagian media bisa diisi gambar Anda sendiri, atau menampilkan salah satu gambar bawaan: <code>search</code>, <code>inbox</code>, <code>files</code>, atau <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Tidak ada hasil',
            text: 'Judul yang menjelaskan apa yang terjadi, satu baris bantuan, dan aksi sebagai jalan keluar.',
          },
          pictures: {
            title: 'Gambar bawaan',
            text: 'Tetapkan <code>illustration</code> pada <code>nuiEmptyMedia</code>. Gambarnya mengikuti tema dan melayang, kecuali jika gerakan dikurangi.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Kontainer: tumpukan vertikal yang rata tengah.', members: {} },
          NuiEmptyMedia: {
            summary: 'Gambar, yang disembunyikan dari teknologi bantu.',
            members: {
              illustration:
                'Gambar bawaan: <code>search</code>, <code>inbox</code>, <code>files</code>, atau <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Judul. Gunakan level heading yang sesuai dengan halaman.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Satu baris penjelasan.', members: {} },
          NuiEmptyActions: { summary: 'Deretan tombol.', members: {} },
        },
        keyboard: [],
        notes: [
          'Gambarnya dekoratif (<code>aria-hidden</code>): pesan disampaikan oleh judul dan deskripsi.',
          'Gunakan heading untuk judul, dengan level yang sesuai dengan struktur halaman.',
          'Gambar bawaan berhenti melayang saat pengguna memilih pengurangan gerakan.',
        ],
      },

      'number-field': {
        name: 'Kolom angka',
        title: 'Komponen kolom angka untuk Angular',
        summary: 'Kolom input angka dengan tombol langkah, berformat sesuai setiap locale.',
        description:
          'Kolom angka Angular aksesibel: spinbutton dengan tombol langkah, langkah via keyboard, min dan max, serta format locale untuk mata uang, persen, dan satuan.',
        apiDescription:
          'Referensi API kolom angka Needless UI: nuiNumberField, nuiNumberInput dengan min, max, step, dan format, serta nuiNumberStep.',
        a11yDescription:
          'Interaksi keyboard dan aksesibilitas kolom angka Needless UI: role spinbutton, tombol panah dan Page, serta tombol langkah.',
        overview: [
          'Kolom angka adalah input teks yang menyimpan sebuah angka. Kolom ini menampilkan angka dalam format locale, membaca kembali teks yang diketik dengan format yang sama, dan saat kehilangan fokus membulatkan nilainya ke <code>step</code> terdekat di antara <code>min</code> dan <code>max</code>.',
          'Kolom ini juga membaca digit dan pemisah dari aksara lain: angka Arab-India, Persia, dan Dewanagari, spasi dan titik sebagai pemisah ribuan, serta semua jenis tanda minus. Menahan tombol langkah akan mengulang langkahnya, makin lama makin cepat.',
        ],
        examples: {
          guests: {
            title: 'Tombol langkah',
            text: 'Tombol di kedua sisi, yang nonaktif saat mencapai <code>min</code> dan <code>max</code>. Tombol panah juga menaikkan dan menurunkan nilai.',
          },
          formats: {
            title: 'Mata uang dan persen',
            text: 'Teruskan opsi <code>Intl.NumberFormat</code> ke <code>format</code> beserta sebuah <code>locale</code>. Nilainya tetap berupa angka biasa.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Mengelompokkan input dengan tombol langkahnya.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Input teks yang menyimpan angka, sebagai spinbutton ARIA.',
            members: {
              value: 'Angkanya, atau <code>null</code> jika kosong. Juga bekerja dengan formulir.',
              min: 'Nilai terkecil yang diizinkan.',
              max: 'Nilai terbesar yang diizinkan.',
              step: 'Besar perubahan nilai dalam satu langkah. Saat kehilangan fokus, nilai dibulatkan ke langkah terdekat.',
              format:
                "Opsi <code>Intl.NumberFormat</code>, misalnya <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale untuk memformat dan membaca angka.',
              disabled: 'Menonaktifkan input beserta tombolnya.',
              stepBy:
                'Menaikkan (positif) atau menurunkan (negatif) nilai sebanyak sejumlah langkah.',
            },
          },
          NuiNumberStep: {
            summary: 'Tombol langkah. Jika ditahan, langkahnya berulang.',
            members: {
              nuiNumberStep: '<code>1</code> menaikkan nilai dan <code>-1</code> menurunkannya.',
              label: 'Nama aksesibel. Default-nya “Increase” atau “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Panah atas dan bawah', 'Menaikkan atau menurunkan nilai satu langkah.'],
          ['Page Up dan Page Down', 'Melangkah sepuluh kali sekaligus.'],
          ['Home dan End', 'Menuju nilai minimum atau maksimum.'],
          ['Enter', 'Menerapkan nilai yang diketik.'],
        ],
        notes: [
          'Input-nya adalah <code>spinbutton</code> dengan <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, serta nilai terformat sebagai <code>aria-valuetext</code>.',
          'Tombol langkah tidak masuk urutan tab karena tombol keyboard melakukan hal yang sama, tetapi keduanya tetap diberi nama dan ditautkan ke input dengan <code>aria-controls</code>.',
          'Beri label pada input dengan <code>aria-label</code> atau <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Input OTP',
        title: 'Input OTP dan kode verifikasi untuk Angular',
        summary: 'Kode verifikasi dalam slot terpisah, di atas satu input sungguhan.',
        description:
          'Input OTP Angular yang aksesibel: satu kolom native di balik slot, isi otomatis dari SMS, WebOTP, pembersihan tempelan, grup, penyamaran, dan getar saat error.',
        apiDescription:
          'Referensi API input OTP Needless UI: nuiOtp dengan panjang, pola, grup, dan penyamaran, serta nuiOtpInput dengan WebOTP.',
        a11yDescription:
          'Keyboard dan aksesibilitas input OTP Needless UI: satu kolom teks berlabel, indikator fokus yang terlihat, dan isi otomatis.',
        overview: [
          'Input OTP terlihat seperti deretan slot, tetapi di baliknya hanya ada satu <code>&lt;input&gt;</code> native. Isi otomatis dari SMS (<code>autocomplete="one-time-code"</code>), tempel, pengelola kata sandi, formulir, dan pembaca layar semuanya melihat kolom teks biasa.',
          'Kode yang ditempel akan dibersihkan, jadi “123-456” maupun “123 456” sama-sama berfungsi, dan karakter yang tidak diizinkan pola akan ditolak. Di Android, <code>webOtp</code> mengisi kode dari SMS begitu pesan itu masuk.',
        ],
        examples: {
          verify: {
            title: 'Verifikasi',
            text: '<code>(completed)</code> terpicu saat slot terakhir terisi. Tetapkan <code>aria-invalid</code> pada input untuk menolak kode: slot berubah merah dan bergetar.',
          },
          letters: {
            title: 'Huruf, grup, dan penyamaran',
            text: '<code>pattern="alphanumeric"</code> juga menerima huruf, <code>[groups]</code> menambahkan pemisah, dan <code>masked</code> menampilkan titik.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Menggambar slot dan membungkus input.',
            members: {
              length: 'Jumlah karakter.',
              pattern: '<code>digits</code>, atau <code>alphanumeric</code> untuk huruf dan angka.',
              groups: 'Ukuran grup, dengan pemisah di antaranya, misalnya <code>[3, 3]</code>.',
              masked: 'Menampilkan titik alih-alih karakter.',
              completed: 'Mengirimkan kode setiap kali slot terakhir terisi.',
            },
          },
          NuiOtpInput: {
            summary: 'Input yang sebenarnya. Mendapat atribut yang dibutuhkan kode sekali pakai.',
            members: {
              webOtp: 'Mengisi kode dari SMS yang masuk melalui WebOTP API, jika didukung.',
            },
          },
        },
        keyboard: [
          ['Angka atau huruf', 'Mengisi slot saat ini dan pindah ke slot berikutnya.'],
          ['Backspace', 'Menghapus karakter sebelum kursor.'],
          [
            'Panah kiri dan kanan',
            'Pindah satu slot; slot yang sudah terisi akan dipilih, sehingga ketikan menggantikannya.',
          ],
          ['Tempel', 'Mengisi slot dari kode yang disalin.'],
        ],
        notes: [
          'Pembaca layar hanya menemukan satu kolom teks. Beri label dengan <code>aria-label</code> atau <code>&lt;label&gt;</code>.',
          'Slot disembunyikan dari teknologi bantu; slot yang sedang diedit menampilkan indikator fokus.',
          'Saat gerakan dikurangi, kursor tidak berkedip dan slot tidak melompat atau bergetar.',
        ],
      },

      rating: {
        name: 'Rating',
        title: 'Komponen rating bintang untuk Angular',
        summary: 'Bintang untuk memberi rating, di atas tombol radio sungguhan.',
        description:
          'Rating bintang Angular yang aksesibel dengan tombol radio native: dukungan keyboard dan formulir, pratinjau saat hover, pengosongan, dan pecahan read-only.',
        apiDescription:
          'Referensi API rating Needless UI: nuiRating dengan value, max, mode read-only dan clearable, serta label yang bisa diterjemahkan.',
        a11yDescription:
          'Interaksi keyboard dan aksesibilitas rating Needless UI: grup radio bernama, bintang berlabel, dan gambar read-only.',
        overview: [
          'Rating adalah grup tombol radio native yang digambar sebagai bintang. Tombol panah, formulir, dan pembaca layar bekerja seperti pada grup radio mana pun; CSS mengisi bintang dan menampilkan pratinjau rating baru di bawah pointer.',
          'Dalam mode read-only, komponen ini bisa menampilkan pecahan apa pun, misalnya rata-rata 4,3.',
        ],
        examples: {
          pick: {
            title: 'Memberi rating',
            text: 'Hubungkan <code>[(value)]</code> atau formulir. Dengan <code>clearable</code>, memilih bintang yang sama sekali lagi akan mengosongkan rating.',
          },
          average: {
            title: 'Menampilkan rata-rata',
            text: '<code>readonly</code> mengisi bintang hingga pecahan apa pun dan menamai gambarnya “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Grup radio berisi bintang, atau gambar read-only dari sebuah rating.',
            members: {
              value: 'Nilai rating, atau <code>null</code>. Juga bekerja dengan formulir.',
              max: 'Jumlah bintang.',
              readonly: 'Menampilkan nilai, hingga pecahan apa pun, alih-alih memintanya.',
              disabled: 'Menonaktifkan semua bintang.',
              clearable: 'Memilih bintang saat ini sekali lagi akan mengosongkan rating.',
              name: 'Nama yang dipakai bersama oleh tombol-tombol radio. Dibuat otomatis secara default.',
              starLabel: 'Nama aksesibel setiap bintang, sebagai fungsi dari nilainya.',
              readonlyLabel: 'Nama aksesibel dalam mode read-only.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Masuk ke grup, ke bintang yang terpilih.'],
          ['Tombol panah', 'Mengubah rating.'],
          ['Spasi', 'Memilih bintang yang sedang difokus.'],
        ],
        notes: [
          'Setiap bintang adalah tombol radio native dengan nama seperti “3 stars”. Beri nama grupnya dengan <code>aria-label</code>.',
          'Dalam mode read-only, rating adalah gambar (<code>role="img"</code>) bernama “Rated 4.3 out of 5”.',
          'Bintang digambar dengan mask CSS, sehingga mengikuti forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Komponen skeleton loader untuk Angular',
        summary: 'Placeholder yang menjaga tata letak selama konten dimuat.',
        description:
          'Skeleton loader Angular untuk teks, lingkaran, dan blok, dengan satu kilau yang menyapu seluruh halaman dan tidak muncul saat gerakan dikurangi.',
        apiDescription:
          'Referensi API skeleton Needless UI: direktif nuiSkeleton beserta bentuk teks, lingkaran, dan bloknya.',
        a11yDescription:
          'Aksesibilitas skeleton Needless UI: placeholder tersembunyi, region aria-busy, pengurangan gerakan, dan forced colors.',
        overview: [
          'Skeleton menjaga bentuk konten yang masih dimuat, sehingga halaman tidak melompat saat konten itu tiba. Atur ukurannya dengan CSS.',
          'Kilaunya terkunci pada viewport: satu sorotan menyapu semua skeleton di halaman sekaligus, apa pun ukuran dan posisinya.',
        ],
        examples: {
          card: {
            title: 'Memuat kartu',
            text: 'Garis, lingkaran, dan blok sebagai pengganti profil. Kartu diberi <code>aria-busy</code> selama dimuat.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Placeholder yang disembunyikan dari teknologi bantu.',
            members: {
              shape:
                '<code>text</code> (satu baris), <code>circle</code>, atau <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton disembunyikan dari pembaca layar. Tetapkan <code>aria-busy="true"</code> pada region yang sedang dimuat, lalu hapus saat kontennya tiba.',
          'Tidak ada kilau saat pengguna memilih pengurangan gerakan.',
          'Dalam mode forced colors, setiap skeleton mendapat outline.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Notifikasi toast untuk Angular',
        summary:
          'Pesan singkat yang bertumpuk, bisa digeser untuk ditutup, dan tidak pernah merebut fokus.',
        description:
          'Toast Angular yang aksesibel: tumpukan di top layer, toast untuk promise, aksi urungkan, geser untuk menutup, dan timer yang berhenti saat hover dan fokus.',
        apiDescription:
          'Referensi API toast Needless UI: service NuiToaster, opsi dan toast promise-nya, serta region nui-toaster.',
        a11yDescription:
          'Interaksi keyboard dan aksesibilitas toast Needless UI: pengumuman, pintasan Alt+T, Esc, dan timer yang bisa dijeda.',
        overview: [
          'Toast mengonfirmasi apa yang baru saja terjadi, atau menawarkan aksi seperti Urungkan, tanpa mengganggu. Pasang satu <code>&lt;nui-toaster&gt;</code> di shell aplikasi, lalu panggil <code>NuiToaster</code> dari mana saja.',
          'Toast menumpuk di belakang toast terbaru dan terbuka seperti kipas saat di-hover atau difokus, semuanya dengan pegas motion. Geser ke samping untuk membuang satu toast. Timer berhenti sementara selama tumpukan di-hover atau difokus, dan selama halaman berada di latar belakang.',
        ],
        examples: {
          tones: {
            title: 'Tone',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code>, dan <code>danger()</code>. Toast danger tampil lebih lama dan diumumkan secara assertive.',
          },
          actions: {
            title: 'Aksi dan promise',
            text: '<code>action</code> menambahkan tombol seperti Urungkan. <code>promise()</code> menampilkan spinner, lalu berubah menjadi hasilnya.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Service yang menampilkan toast. Inject di mana saja.',
            members: {
              toasts: 'Semua toast di layar, dari yang terbaru.',
              show: 'Menampilkan toast. Teruskan judul, atau opsi berisi deskripsi, tone, durasi, aksi, atau id.',
              success: 'Menampilkan toast sukses.',
              warning: 'Menampilkan toast peringatan.',
              danger:
                'Menampilkan toast danger. Toast ini tampil selama 8 detik dan diumumkan secara assertive.',
              promise:
                'Menampilkan toast pemuatan sampai promise selesai, lalu pesan sukses atau danger-nya.',
              dismiss: 'Menutup satu toast, atau semuanya.',
            },
          },
          NuiToasterRegion: {
            summary: 'Region tempat toast muncul. Pasang sekali saja, di shell aplikasi.',
            members: {
              position: 'Sudut atau tepi viewport. Sisi awal dan akhir mengikuti arah teks.',
              expanded: 'Membuat tumpukan tetap terbentang.',
              label: 'Nama aksesibel region. Sebutkan cara menjangkaunya.',
              closeLabel: 'Nama aksesibel tombol tutup.',
              hotkey:
                'Tombol, sebagai <code>KeyboardEvent.code</code>, yang bersama Alt memindahkan fokus ke toast terbaru.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Memindahkan fokus ke toast terbaru.'],
          ['Tab', 'Berpindah antar-toast, aksinya, dan tombol tutupnya.'],
          ['Esc', 'Menutup toast yang sedang difokus.'],
        ],
        notes: [
          'Setiap toast diumumkan saat muncul: secara polite, atau assertive untuk danger. Toast tidak pernah mengambil fokus.',
          'Timer berhenti sementara selama tumpukan di-hover atau difokus dan selama halaman tersembunyi, dan toast yang menunggu promise tidak pernah kedaluwarsa.',
          'Apa pun yang harus ditindaklanjuti pengguna sebaiknya juga tersedia di luar toast.',
          'Saat gerakan dikurangi, toast tidak beranimasi dan tidak bisa digeser, dan garis timer disembunyikan.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox dan pelengkapan otomatis untuk Angular',
        summary: 'Kolom teks yang menyarankan opsi saat Anda mengetik.',
        description:
          'Combobox Angular yang aksesibel: pencarian fuzzy dengan sorotan, banyak nilai sebagai chip, nilai baru dari teks yang diketik, dan hasil dari server.',
        apiDescription:
          'Referensi API combobox Needless UI: nui-combobox dengan value, values, multiple, create, filtering, loading, dan clearable, serta baris kustom.',
        a11yDescription:
          'Keyboard dan aksesibilitas combobox Needless UI: combobox yang bisa diedit dengan daftar saran, aria-activedescendant, chip, dan input IME.',
        overview: [
          'Combobox adalah kolom teks dengan daftar saran. Pencariannya fuzzy dan mengabaikan aksen: kecocokan terbaik muncul lebih dulu dan huruf yang cocok ditandai. Komponen ini menerima objek <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> yang sama dengan select.',
          'Dengan <code>multiple</code>, opsi yang dipilih menjadi chip di depan teks, dan <code>create</code> mengubah teks yang diketik menjadi nilai baru. Untuk hasil dari server, matikan <code>filtering</code>, lakukan pencarian di <code>(queryChange)</code>, dan tetapkan <code>loading</code> selama menunggu.',
        ],
        examples: {
          country: {
            title: 'Pencarian',
            text: 'Huruf yang cocok tidak harus berdampingan, dan <code>keywords</code> juga ikut dihitung. <code>clearable</code> menambahkan tombol hapus dan memungkinkan Esc mengosongkan nilai.',
          },
          tags: {
            title: 'Chip dan nilai baru',
            text: '<code>multiple</code> menampilkan chip dan menghubungkan <code>[(values)]</code>. Jika teksnya belum menjadi opsi, <code>create</code> menawarkan untuk menambahkannya.',
          },
          people: {
            title: 'Hasil dari server',
            text: 'Daftar menampilkan kiriman server apa adanya, tanpa disaring, dengan baris pemuatan selama menunggu. Label yang sudah dipilih tetap tersimpan saat hasil baru tiba.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Kolom teks yang menyarankan opsi saat Anda mengetik.',
            members: {
              options:
                'Opsi-opsinya, sebagai objek <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'Nilai yang dipilih, atau <code>null</code>. Juga bekerja dengan formulir.',
              values: 'Nilai-nilai yang dipilih, dengan <code>multiple</code>.',
              multiple: 'Memungkinkan beberapa opsi dipilih, yang ditampilkan sebagai chip.',
              create:
                'Membuat nilai dari teks yang diketik. Daftar lalu menawarkan untuk menambahkan teks yang belum menjadi opsi.',
              filtering:
                'Menyaring opsi saat Anda mengetik. Matikan jika server yang menyaringnya.',
              loading: 'Menampilkan baris pemuatan selama menunggu hasil.',
              clearable:
                'Menambahkan tombol untuk mengosongkan nilai, dan memungkinkan Esc mengosongkannya.',
              placeholder: 'Teks yang ditampilkan saat kolom kosong.',
              label:
                'Nama aksesibel, jika tidak ada <code>&lt;label&gt;</code> yang menamai kolom.',
              inputId: 'Id kolom teks, untuk <code>&lt;label for&gt;</code>.',
              disabled: 'Menonaktifkan kolom.',
              compareWith:
                'Menentukan apakah dua nilai adalah opsi yang sama, untuk nilai berupa objek.',
              displayWith:
                'Teks untuk nilai yang tidak ada di antara opsi, misalnya nilai yang ditetapkan sebelum opsi dimuat.',
              virtual:
                'Hanya merender baris yang terlihat: selalu, tidak pernah, atau <code>auto</code> jika lebih dari 200 baris.',
              queryChange: 'Mengirimkan teks selagi diketik, untuk pencarian di server.',
              openChange: 'Terpicu saat daftar terbuka atau tertutup.',
              show: 'Membuka daftar.',
              hide: 'Menutup daftar.',
              clear: 'Mengosongkan nilai dan teks.',
              focus: 'Memfokuskan kolom teks.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Pasang pada <code>ng-template</code> di dalam komponen untuk menggambar sendiri setiap baris. Konteksnya berisi opsi dan barisnya.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Menggambar label opsi dengan huruf yang cocok ditandai, beserta deskripsi dan jalurnya, untuk baris buatan Anda sendiri.',
            members: { nuiOptionText: 'Baris dari konteks template.' },
          },
        },
        keyboard: [
          ['Panah bawah dan atas', 'Membuka daftar, lalu berpindah antaropsi.'],
          ['Page Down dan Page Up', 'Melompat sepuluh opsi.'],
          ['Enter', 'Memilih opsi yang aktif.'],
          ['Alt + panah bawah atau atas', 'Membuka atau menutup daftar.'],
          ['Esc', 'Menutup daftar; lalu mengosongkan teks, atau nilainya jika clearable.'],
          ['Backspace', 'Di kolom kosong, menghapus chip terakhir.'],
          [
            'Panah kiri',
            'Dari awal teks (panah kanan pada teks kanan-ke-kiri), pindah ke chip. Di sana, Backspace atau Delete menghapus chip.',
          ],
        ],
        notes: [
          'Kolom teksnya adalah <code>combobox</code> dengan <code>aria-autocomplete="list"</code>, <code>aria-expanded</code>, dan <code>aria-controls</code>. Fokus tetap di kolom itu, dan <code>aria-activedescendant</code> menunjuk ke opsi yang aktif.',
          'Chip berupa daftar bernama, dan setiap tombol hapus dinamai sesuai chip-nya, misalnya “Remove Italy”.',
          '“No matches” dan baris pemuatan adalah pesan status, sehingga pembaca layar mengumumkannya.',
          'Tombol yang mengonfirmasi komposisi metode input, seperti untuk bahasa Tionghoa atau Jepang, diserahkan ke metode input.',
        ],
      },
      command: {
        name: 'Palet perintah',
        title: 'Komponen palet perintah untuk Angular',
        summary: 'Semua perintah di aplikasi Anda, cukup satu tombol.',
        description:
          'Palet perintah Angular yang aksesibel: ⌘K dari mana saja, pencarian fuzzy hingga ke halaman bersarang, grup, dan pintasan sesuai penulisan tiap platform.',
        apiDescription:
          'Referensi API palet perintah Needless UI: nui-command-palette dengan commands, hotkey, bindShortcuts, dan loop, serta bentuk NuiCommand.',
        a11yDescription:
          'Keyboard dan aksesibilitas palet perintah Needless UI: dialog modal dengan combobox pencarian, aria-activedescendant, dan navigasi halaman.',
        overview: [
          'Palet perintah adalah kolom pencarian atas perintah-perintah aplikasi Anda, di dalam dialog modal. ⌘K membukanya dari mana saja (Ctrl+K di Windows dan Linux). Pilih sebuah perintah, lalu palet tertutup dan menjalankannya.',
          'Perintah bisa memiliki grup, deskripsi, kata kunci, dan pintasan, yang ditampilkan dengan simbol tiap platform. Perintah dengan <code>children</code> membuka halaman berisi perintah lain, dan pencarian dari tingkat teratas ikut menjangkau isi halaman.',
        ],
        examples: {
          palette: {
            title: 'Perintah dan halaman',
            text: 'Grup, pintasan, perintah nonaktif, dan dua halaman. <code>(run)</code> memberi tahu perintah mana yang dijalankan; <code>run</code> milik perintah itu sendiri juga berfungsi.',
          },
          people: {
            title: 'Baris kustom',
            text: '<code>nuiOptionTemplate</code> menggambar setiap baris, dan <code>nuiOptionText</code> mempertahankan tanda kecocokan. <code>[hotkey]="null"</code> menyerahkan ⌘K ke palet di atas.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Dialog modal dengan kolom pencarian atas perintah-perintah Anda.',
            members: {
              commands: 'Perintah-perintahnya, sebagai objek <code>NuiCommand</code>.',
              open: 'Apakah palet sedang terbuka.',
              hotkey:
                'Pintasan yang membuka dan menutup palet dari mana saja, atau <code>null</code> jika tidak ada. <code>mod</code> adalah ⌘ di perangkat Apple dan Ctrl di perangkat lain.',
              bindShortcuts:
                'Juga menjalankan perintah lewat pintasannya sendiri, di mana saja pada halaman.',
              loop: 'Panah bawah di perintah terakhir menuju yang pertama, dan panah atas di perintah pertama menuju yang terakhir.',
              filtering:
                'Menyaring saat Anda mengetik. Matikan jika server yang menyaring perintah.',
              loading: 'Menampilkan baris pemuatan selama menunggu hasil.',
              hints: 'Menampilkan petunjuk tombol di bagian bawah.',
              virtual:
                'Hanya merender baris yang terlihat: selalu, tidak pernah, atau <code>auto</code> jika lebih dari 200 baris.',
              label: 'Nama aksesibel dialog dan kolom pencariannya.',
              placeholder: 'Teks yang ditampilkan di kolom pencarian yang kosong.',
              run: 'Mengirimkan setiap perintah yang dijalankan.',
              queryChange: 'Mengirimkan teks selagi diketik, untuk pencarian di server.',
              show: 'Membuka palet.',
              hide: 'Menutup palet.',
              toggle: 'Membuka palet, atau menutupnya.',
              back: 'Kembali ke halaman sebelumnya.',
            },
          },
          NuiCommand: {
            summary: 'Satu perintah, atau satu halaman perintah.',
            members: {
              label: 'Teks yang ditampilkan dan dicari.',
              description: 'Teks sekunder di bawah label.',
              group: 'Perintah dengan grup yang sama dicantumkan di bawah judul grup tersebut.',
              keywords: 'Kata lain yang dicocokkan pencarian, misalnya sinonim.',
              shortcut: 'Tombol yang ditampilkan bersamanya, misalnya <code>mod+shift+p</code>.',
              disabled: 'Ditampilkan, tetapi tidak bisa dijalankan.',
              children:
                'Perintah satu tingkat di bawahnya: memilih perintah ini membukanya sebagai halaman.',
              run: 'Dijalankan saat dipilih, setelah palet tertutup.',
              id: 'Untuk keperluan Anda sendiri, misalnya membedakan perintah di <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K atau Ctrl+K', 'Membuka atau menutup palet.'],
          ['Panah bawah dan atas', 'Berpindah antarperintah, berputar di kedua ujung.'],
          ['Page Down dan Page Up', 'Melompat sepuluh perintah.'],
          ['Enter', 'Menjalankan perintah yang aktif, atau membuka halamannya.'],
          ['Esc', 'Kembali satu halaman; di tingkat teratas, menutup palet.'],
          ['Backspace', 'Di kolom kosong pada sebuah halaman, kembali ke halaman sebelumnya.'],
        ],
        notes: [
          'Komponen ini adalah <code>&lt;dialog&gt;</code> modal native: halaman di belakangnya menjadi inert, fokus tetap di dalam, dan saat ditutup fokus kembali ke tempat semula.',
          'Kolom pencariannya adalah <code>combobox</code> yang menunjuk perintah aktif dengan <code>aria-activedescendant</code>. Di sebuah halaman, kolom ini memakai nama halaman tersebut.',
          'Tombol pintasan berupa teks di setiap opsi, sehingga dibacakan oleh pembaca layar. Petunjuk tombol di bagian bawah disembunyikan dari teknologi bantu.',
          'Pintasan tanpa Ctrl, Alt, atau ⌘ tidak berjalan saat Anda mengetik di sebuah kolom.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Komponen popover dan hovercard untuk Angular',
        summary: 'Panel mengambang di samping tombol, dan tooltip kaya konten saat hover.',
        description:
          'Popover dan hovercard Angular yang aksesibel berbasis Popover API native: posisi yang berbalik dan mengikuti, panah, tutup saat klik di luar, dan jeda hover.',
        apiDescription:
          'Referensi API popover Needless UI: nuiPopover dan nuiHovercard dengan side, align, offset, dan arrow, serta direktif pemicunya.',
        a11yDescription:
          'Keyboard dan aksesibilitas popover dan hovercard Needless UI: role dialog dan tooltip, pengembalian fokus, Esc, dan WCAG 1.4.13.',
        overview: [
          'Popover adalah panel kecil yang terbuka di samping tombol, untuk konten interaktif: filter, formulir singkat, pemilih warna. Ini adalah <code>popover="auto"</code> native, sehingga browser menutupnya saat Esc ditekan atau saat ada klik di luar, mengembalikan fokus, dan menempatkannya tepat setelah pemicunya dalam urutan tab.',
          'Hovercard adalah tooltip kaya konten. Kartu ini terbuka setelah hover singkat, atau langsung saat fokus keyboard, dan mendeskripsikan pemicunya. Kartu tetap terbuka saat pointer berpindah ke atasnya, sehingga teksnya bisa dibaca dan dipilih.',
          'Keduanya berpindah ke sisi lain jika tidak ada ruang, tetap berada di layar, dan mengikuti pemicunya saat halaman digulir.',
        ],
        examples: {
          filters: {
            title: 'Filter',
            text: 'Popover berisi formulir. <code>arrow</code> mengarahkannya ke pemicunya, dan <code>hide()</code> menutupnya dari kode.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Arahkan kursor ke sebuah nama, atau jangkau dengan Tab. Kartu itu mendeskripsikan tautan, sehingga pembaca layar membacanya setelah nama.',
          },
          sides: {
            title: 'Sisi dan animasi masuk',
            text: '<code>side</code> dan <code>align</code> menentukan tempat popover terbuka; <code>start</code> dan <code>end</code> mengikuti arah tulisan. <code>enter</code> dan <code>motion</code> menentukan cara munculnya.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Popover native yang ditempatkan di samping elemen yang membukanya.',
            members: {
              side: 'Sisi pemicu tempat panel terbuka. Berpindah ke sisi lain jika tidak ada ruang.',
              align: 'Perataan terhadap pemicu di sepanjang sisi tersebut.',
              offset: 'Jarak antara pemicu dan panel, dalam piksel.',
              arrow: 'Menampilkan panah yang menunjuk ke pemicu.',
              openChange: 'Terpicu saat terbuka atau tertutup.',
              show: 'Membukanya di samping elemen apa pun.',
              hide: 'Menutupnya.',
            },
          },
          NuiPopoverTrigger: {
            summary:
              'Tombol yang membuka dan menutup popover, dengan <code>popovertarget</code> native.',
            members: { nuiPopoverTrigger: 'Popover yang akan dibuka.' },
          },
          NuiHovercard: {
            summary: 'Tooltip kaya konten yang mendeskripsikan pemicunya.',
            members: {
              side: 'Sisi pemicu tempat kartu terbuka. Berpindah ke sisi lain jika tidak ada ruang.',
              align: 'Perataan terhadap pemicu di sepanjang sisi tersebut.',
              offset: 'Jarak antara pemicu dan kartu, dalam piksel.',
              arrow: 'Menampilkan panah yang menunjuk ke pemicu.',
              openDelay:
                'Lama hover dalam milidetik sebelum kartu terbuka. Fokus keyboard langsung membukanya.',
              closeDelay: 'Jeda dalam milidetik sebelum kartu tertutup, setelah pointer pergi.',
              openChange: 'Terpicu saat terbuka atau tertutup.',
              show: 'Membukanya di samping elemen apa pun.',
              hide: 'Menutupnya.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Menampilkan hovercard saat hover dan saat fokus keyboard, serta menjadikannya deskripsi elemen ini.',
            members: { nuiHovercardTrigger: 'Hovercard yang akan ditampilkan.' },
          },
        },
        keyboard: [
          ['Enter atau Spasi pada pemicu', 'Membuka atau menutup popover.'],
          ['Tab', 'Masuk ke popover yang terbuka, yang berada tepat setelah pemicunya.'],
          [
            'Esc',
            'Menutup popover dan mengembalikan fokus ke pemicunya, atau menyembunyikan hovercard.',
          ],
        ],
        notes: [
          'Popover adalah <code>dialog</code> non-modal: beri nama dengan <code>aria-label</code> atau <code>aria-labelledby</code>. Pemicunya mendapat <code>aria-haspopup</code> dan <code>aria-expanded</code> dari browser.',
          'Hovercard adalah <code>tooltip</code> sekaligus <code>aria-describedby</code> milik pemicunya, sehingga teksnya dibacakan bersama pemicu. Jangan taruh kontrol di dalamnya; gunakan popover untuk itu.',
          'Hovercard memenuhi WCAG 1.4.13: Esc menyembunyikannya tanpa memindahkan fokus, pointer bisa berpindah ke atasnya, dan hovercard tetap tampil selama di-hover atau difokus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Komponen select untuk Angular',
        summary: 'Pilih satu atau banyak opsi, dari daftar pendek maupun yang sangat panjang.',
        description:
          'Select Angular yang aksesibel: pilihan tunggal atau ganda, grup, pohon, lompat saat mengetik, pilih semua, dan virtual scrolling untuk daftar sepanjang apa pun.',
        apiDescription:
          'Referensi API select Needless UI: nui-select dengan value, values, multiple, selectAll, dan virtual, bentuk NuiOption, serta baris kustom.',
        a11yDescription:
          'Keyboard dan aksesibilitas select Needless UI: combobox khusus pilih, listbox atau pohon, aria-activedescendant, pencarian saat mengetik, dan tombol pohon.',
        overview: [
          'Select adalah tombol yang membuka daftar opsi. Beri <code>options</code>, yaitu array <code>NuiOption</code>, lalu hubungkan <code>[(value)]</code>, atau <code>[(values)]</code> dengan <code>multiple</code>. Komponen ini juga bekerja dengan Signal Forms, reactive forms, dan <code>ngModel</code>.',
          'Opsi bisa memiliki <code>group</code>, <code>description</code>, dan <code>keywords</code>, sedangkan <code>children</code> menjadikan daftar sebagai pohon. Di atas 200 baris, hanya baris yang terlihat yang dirender, sehingga 100.000 opsi terbuka secepat sepuluh opsi.',
          'Untuk mengetik dan menyaring, gunakan <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Grup',
            text: 'Opsi dengan <code>group</code> dicantumkan di bawah judul grupnya. Mengetik sebuah huruf akan melompat ke opsi berikutnya yang diawali huruf itu.',
          },
          toppings: {
            title: 'Banyak sekaligus',
            text: '<code>multiple</code> membuat daftar tetap terbuka dan menghubungkan <code>[(values)]</code>. <code>selectAll</code> menambahkan tombol yang memilih atau mengosongkan semua opsi. Opsi yang nonaktif tidak bisa dipilih.',
          },
          folders: {
            title: 'Pohon',
            text: 'Opsi dengan <code>children</code> membentuk pohon. Daftar terbuka dengan folder dari opsi yang dipilih dalam keadaan terbentang.',
          },
          zones: {
            title: 'Daftar panjang',
            text: 'Semua zona waktu, per wilayah. Di atas 200 baris, hanya baris yang terlihat yang dirender, dan opsi yang aktif tetap dirender untuk pembaca layar.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Tombol yang membuka daftar opsi.',
            members: {
              options: 'Opsi-opsinya, sebagai objek <code>NuiOption</code>.',
              value: 'Nilai yang dipilih, atau <code>null</code>. Juga bekerja dengan formulir.',
              values: 'Nilai-nilai yang dipilih, dengan <code>multiple</code>.',
              multiple:
                'Memungkinkan beberapa opsi dipilih. Daftar tetap terbuka selama Anda memilih.',
              selectAll:
                'Dengan <code>multiple</code>, menambahkan tombol yang memilih atau mengosongkan semua opsi.',
              placeholder: 'Teks yang ditampilkan saat belum ada yang dipilih.',
              label:
                'Nama aksesibel, jika tidak ada <code>&lt;label&gt;</code> yang menamai tombol.',
              triggerId: 'Id tombol, untuk <code>&lt;label for&gt;</code>.',
              disabled: 'Menonaktifkan select.',
              compareWith:
                'Menentukan apakah dua nilai adalah opsi yang sama, untuk nilai berupa objek.',
              virtual:
                'Hanya merender baris yang terlihat: selalu, tidak pernah, atau <code>auto</code> jika lebih dari 200 baris.',
              openChange: 'Terpicu saat daftar terbuka atau tertutup.',
              show: 'Membuka daftar.',
              hide: 'Menutup daftar.',
              focus: 'Memfokuskan tombol.',
            },
          },
          NuiOption: {
            summary: 'Satu opsi. Select, combobox, dan palet perintah semuanya menerima objek ini.',
            members: {
              value: 'Nilai yang ditetapkan saat opsi ini dipilih. Tipe apa pun.',
              label: 'Teks yang ditampilkan dan dicari.',
              description: 'Teks sekunder di bawah label.',
              group:
                'Opsi dengan grup yang sama dicantumkan berurutan di bawah judul grup tersebut.',
              keywords: 'Kata lain yang dicocokkan pencarian, misalnya sinonim atau kode.',
              disabled: 'Ditampilkan, tetapi tidak bisa dipilih.',
              children: 'Opsi satu tingkat di bawahnya, yang menjadikan daftar sebagai pohon.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Pasang pada <code>ng-template</code> di dalam komponen untuk menggambar sendiri setiap baris. Konteksnya berisi opsi dan barisnya.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Menggambar label opsi dengan huruf yang cocok ditandai, beserta deskripsi dan jalurnya, untuk baris buatan Anda sendiri.',
            members: { nuiOptionText: 'Baris dari konteks template.' },
          },
        },
        keyboard: [
          ['Panah bawah dan atas', 'Membuka daftar, lalu berpindah antaropsi.'],
          ['Home dan End', 'Menuju opsi pertama atau terakhir.'],
          ['Page Down dan Page Up', 'Melompat sepuluh opsi.'],
          ['Enter atau Spasi', 'Membuka daftar, atau memilih opsi yang aktif.'],
          ['Huruf', 'Melompat ke opsi berikutnya yang diawali huruf tersebut.'],
          [
            'Panah kanan dan kiri',
            'Di pohon, membentangkan opsi atau menuju anak pertamanya; menciutkannya atau menuju induknya. Dicerminkan pada teks kanan-ke-kiri.',
          ],
          ['Alt + panah atas', 'Memilih opsi yang aktif dan menutup daftar.'],
          [
            'Tab',
            'Pada pilihan tunggal, memilih opsi yang aktif lalu berpindah ke elemen berikutnya.',
          ],
          ['Esc', 'Menutup daftar tanpa memilih.'],
        ],
        notes: [
          'Tombolnya adalah <code>combobox</code> khusus pilih dengan <code>aria-expanded</code> dan <code>aria-controls</code>. Fokus tetap di tombol, dan <code>aria-activedescendant</code> menunjuk ke opsi yang aktif.',
          'Daftarnya adalah <code>listbox</code>, atau <code>tree</code> dengan <code>aria-level</code> dan <code>aria-expanded</code>. <code>aria-setsize</code> dan <code>aria-posinset</code> tetap benar meskipun hanya sebagian baris yang dirender.',
          'Opsi yang aktif memakai isian solid dan, dalam mode forced colors, sebuah outline.',
          'Beri nama dengan <code>&lt;label for&gt;</code> yang menunjuk ke <code>triggerId</code>, atau dengan <code>label</code>.',
        ],
      },
      grid: {
        name: 'Data grid',
        title: 'Komponen data grid untuk Angular',
        summary: 'Urutkan, saring, pilih, edit, dan gulir baris sebanyak apa pun.',
        description:
          'Data grid Angular yang aksesibel berbasis tabel native: pengurutan multikolom, filter, paginasi atau virtual scrolling, pemilihan, edit, dan pemindahan kolom.',
        apiDescription:
          'Referensi API data grid Needless UI: input dan model nui-grid, definisi NuiGridColumn, serta template untuk sel kustom.',
        a11yDescription:
          'Keyboard dan aksesibilitas data grid Needless UI: tabel native dengan role grid, satu perhentian tab, tombol panah, dan pengumuman.',
        overview: [
          'Data grid adalah tabel native dengan pengurutan, penyaringan, paginasi, dan pengeditan. Definisikan <code>columns</code>, teruskan <code>rows</code>, dan setiap sel diformat menurut tipenya sesuai locale: angka, mata uang, tanggal, ya dan tidak, serta label untuk nilai <code>enum</code>.',
          'Statusnya ada di model yang bisa Anda hubungkan, simpan, dan kirim ke server: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, serta <code>columnState</code> untuk lebar, urutan, penyematan, dan kolom tersembunyi pilihan pengguna. Tanpa paginasi, hanya baris yang terlihat yang dirender, sehingga 100.000 baris bergulir semulus sepuluh baris.',
          'Setiap sel bisa dijangkau dengan keyboard, dan panel setiap kolom bisa mengurutkan, menyaring, menyematkan, memindahkan, menyesuaikan lebar, dan menyembunyikan kolom tersebut.',
          'Baris juga bisa bertingkat. <code>groupBy</code> mengelompokkannya menurut kolom, dengan <code>aggregate</code> tiap kolom di baris grup dan di baris <code>totals</code>; <code>children</code> menampilkan data pohon; dan template <code>nuiGridDetail</code> terbuka di bawah sebuah baris. Saat dikelompokkan atau bertingkat, tabelnya menjadi <code>treegrid</code>.',
        ],
        examples: {
          orders: {
            title: 'Pencarian, pengurutan, dan halaman',
            text: 'Ketik untuk mencari di semua kolom. Klik header untuk mengurutkan, dan Shift + klik untuk menambahkan kolom kedua. <code>nuiGridCell</code> menggambar status, dan <code>exportCsv()</code> mengekspor data yang ditampilkan.',
          },
          selection: {
            title: 'Pemilihan',
            text: '<code>selection="multiple"</code> menambahkan checkbox dan menghubungkan kunci baris yang dipilih. Shift + klik memilih rentang; kotak di header memilih semua baris yang cocok.',
          },
          editing: {
            title: 'Pengeditan',
            text: 'Klik dua kali sebuah sel, tekan Enter, atau langsung ketik. <code>validate</code> membuat editor tetap terbuka dengan pesan; edit yang diterapkan memperbarui <code>rows</code> dan mengirimkan <code>cellEdit</code>.',
          },
          big: {
            title: '100.000 baris',
            text: 'Tanpa paginasi, hanya baris yang terlihat yang dirender. Kolom yang disematkan tetap di tepi, dan <code>columnState</code> menyimpan tata letak yang dibuat pengguna.',
          },
          server: {
            title: 'Data dari server',
            text: 'Dalam mode <code>server</code>, grid menampilkan baris apa adanya dan melaporkan setiap perubahan lewat <code>queryChange</code>. Tetapkan <code>loading</code> selama mengambil data.',
          },
          groups: {
            title: 'Grup dan total',
            text: 'Kelompokkan menurut satu atau dua kolom. Baris grup menghitung pesanannya serta menjumlahkan dan merata-ratakan totalnya, dan <code>totals</code> menambahkan hal yang sama untuk semua baris. Panah kiri menutup grup.',
          },
          tree: {
            title: 'Data pohon',
            text: '<code>children</code> memberi setiap folder file-filenya. Baris terbuka dengan panah kanan atau toggle-nya, dan <code>[(expanded)]</code> menyimpan baris mana yang terbuka. Pencarian membuat folder di atas hasil yang cocok tetap terbuka.',
          },
          details: {
            title: 'Detail baris',
            text: 'Template <code>nuiGridDetail</code> menampilkan item sebuah pesanan di bawahnya, dibuka dari kolom berisi toggle, dan <code>[(details)]</code> menyimpan detail mana yang terbuka.',
          },
          live: {
            title: 'Data real-time, ekspor, dan cetak',
            text: 'Harga berubah setiap dua detik, dan <code>flash</code> menunjukkan sel mana yang berubah. <code>exportXlsx()</code> mengunduh spreadsheet sungguhan, <code>print()</code> mencetak semua baris, dan <code>layout="auto"</code> menampilkan kartu di layar sempit.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Data grid di atas tabel native.',
            members: {
              rows: 'Datanya. Pengeditan mengganti baris, jadi hubungkan dengan <code>[(rows)]</code>.',
              columns: 'Kolom-kolomnya, sebagai objek <code>NuiGridColumn</code>.',
              rowId: 'Kunci baris, untuk pemilihan dan pelacakan.',
              label: 'Nama aksesibel grid.',
              selection: 'Apakah baris bisa dipilih, dan berapa banyak.',
              selected: 'Kunci baris yang dipilih.',
              sort: 'Pengurutan, sebagai objek <code>{ column, direction }</code>; yang pertama diutamakan.',
              filters: 'Satu filter per id kolom: operator dan nilai.',
              search: 'Kata-kata yang semuanya harus ada dalam satu baris.',
              pageSize: 'Baris per halaman, atau 0 untuk satu daftar yang bergulir.',
              page: 'Halaman yang ditampilkan, mulai dari 0.',
              pageSizes: 'Pilihan ukuran halaman di paginator.',
              virtual:
                'Hanya merender baris yang terlihat: selalu, tidak pernah, atau <code>auto</code> jika lebih dari 100 baris tanpa paginasi.',
              height: 'Panjang CSS yang membatasi grid; isinya bergulir di dalam.',
              columnState:
                'Lebar, urutan, penyematan, dan visibilitas setiap kolom, untuk disimpan dan dipulihkan.',
              mode: '<code>server</code> menampilkan baris apa adanya dan menyerahkan pengurutan, penyaringan, serta paginasi kepada Anda.',
              total: 'Jumlah baris di server.',
              loading: 'Menampilkan bilah progres, dan baris placeholder selama belum ada baris.',
              locale: 'Memformat angka dan tanggal, serta membaca angka yang diketik.',
              labels: 'Semua teks yang ditampilkan atau diumumkan grid, untuk diterjemahkan.',
              rowActivate: 'Mengirimkan baris yang dibuka dengan Enter atau klik dua kali.',
              cellEdit: 'Mengirimkan setiap edit yang diterapkan.',
              queryChange:
                'Mengirimkan pengurutan, filter, pencarian, dan halaman setiap kali berubah.',
              exportCsv: 'Baris yang tersaring dan terurut dari kolom yang terlihat, sebagai CSV.',
              focusCell: 'Memfokuskan sel; baris <code>-1</code> adalah header.',
              clearFilters: 'Mengosongkan semua filter dan pencarian.',
              'groupBy, collapsed':
                'Kolom untuk mengelompokkan baris, mulai dari yang terluar, dan kunci grup yang tertutup.',
              children: 'Baris-baris anak dari sebuah baris: grid menampilkan data pohon.',
              'expanded, details':
                'Kunci baris yang terbuka di data pohon, dan kunci baris yang detailnya terbuka.',
              'totals, flash':
                'Baris agregat atas semua baris yang tersaring; sel yang berkedip saat teksnya berubah, pada baris dengan <code>rowId</code> yang tetap.',
              layout:
                '<code>list</code> menampilkan baris sebagai kartu, dan <code>auto</code> melakukannya di layar sempit.',
              'exportXlsx, print':
                'Baris yang tersaring dan terurut sebagai spreadsheet; mencetak semua baris.',
            },
          },
          NuiGridColumn: {
            summary: 'Satu kolom. Hanya <code>id</code> dan <code>header</code> yang wajib.',
            members: {
              id: 'Unik; menjadi kunci dalam pengurutan, filter, dan status kolom.',
              header: 'Teks header.',
              value: 'Properti baris, atau fungsi dari baris. Default-nya <code>row[id]</code>.',
              type: 'Menentukan perataan, pengurutan, filter, dan editor.',
              format:
                'Opsi <code>Intl</code> untuk angka dan tanggal, atau fungsi yang membuat teksnya.',
              options: 'Pilihan kolom <code>enum</code>, sebagai objek <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'Dalam piksel.',
              flex: 'Berbagi sisa ruang dengan kolom <code>flex</code> lainnya.',
              align: 'Default-nya mengikuti tipe: angka dan tanggal rata akhir.',
              'pinned, hidden': 'Penyematan dan visibilitas awal kolom.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Masing-masing bisa dimatikan dengan <code>false</code>.',
              compare: 'Pengurutan kustom.',
              'editable, validate': 'Apakah sel bisa diedit, dan pesan saat nilai tidak valid.',
              set: 'Membuat baris hasil edit. Default-nya salinan dengan nilai baru.',
              aggregate:
                'Yang ditampilkan baris grup dan baris total: jumlah, rata-rata, minimum, maksimum, hitungan, atau fungsi.',
            },
          },
          NuiGridCell: {
            summary: 'Menggambar sel-sel kolom. Konteksnya berisi baris, nilai, dan teksnya.',
            members: { nuiGridCell: 'Id kolom.' },
          },
          NuiGridHeader: {
            summary: 'Menggambar header kolom.',
            members: { nuiGridHeader: 'Id kolom.' },
          },
          NuiGridEmpty: {
            summary:
              'Yang ditampilkan saat tidak ada baris. Konteksnya memberi tahu apakah filter menyembunyikannya.',
            members: {},
          },
          NuiGridDetail: {
            summary:
              'Detail sebuah baris, ditampilkan di bawahnya saat dibuka. Konteksnya berisi baris tersebut.',
            members: {},
          },
        },
        keyboard: [
          ['Tombol panah', 'Pindah satu sel. Kiri dan kanan dicerminkan pada teks kanan-ke-kiri.'],
          ['Home dan End', 'Menuju sel pertama atau terakhir di baris; dengan Ctrl, di grid.'],
          ['Page Down dan Page Up', 'Melompat satu layar baris.'],
          [
            'Enter atau Spasi pada header',
            'Mengurutkan menurut kolom; dengan Shift, menambahkannya ke pengurutan.',
          ],
          ['Alt + panah bawah pada header', 'Membuka panel kolom.'],
          [
            'Alt + panah kiri atau kanan pada header',
            'Menyempitkan atau melebarkan kolom; dengan Shift, memindahkannya.',
          ],
          ['Enter pada sel', 'Mengedit sel, atau membuka baris jika sel tidak bisa diedit.'],
          ['F2, atau mengetik', 'Mengedit sel.'],
          [
            'Enter, Esc, dan Tab saat mengedit',
            'Menerapkan, membatalkan, atau menerapkan lalu pindah.',
          ],
          ['Spasi', 'Memilih baris; dengan Shift, semua baris dari yang terakhir dipilih.'],
          ['Ctrl + A', 'Memilih semua baris.'],
          [
            'Panah kanan dan kiri pada grup',
            'Membuka atau menutupnya; juga pada sel pertama baris yang memiliki anak.',
          ],
          ['Enter pada grup', 'Membuka atau menutupnya; Spasi memilih baris-barisnya.'],
          ['Enter pada toggle detail', 'Menampilkan atau menyembunyikan detail baris.'],
        ],
        notes: [
          '<code>&lt;table&gt;</code> native dengan <code>role="grid"</code>, yang diberi nama lewat <code>label</code>. Header memiliki <code>aria-sort</code>, dan baris yang bisa dipilih memiliki <code>aria-selected</code>.',
          'Grid hanya satu perhentian tab. Fokus berpindah dari sel ke sel dengan roving <code>tabindex</code>, sehingga pembaca layar membacakan setiap sel beserta header baris dan kolomnya.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code>, dan <code>aria-colindex</code> tetap benar saat baris dipaginasi atau divirtualisasi.',
          'Pengurutan, penyaringan, perpindahan halaman, dan error pengeditan diumumkan secara polite di region status.',
          'Baris yang dikelompokkan atau bertingkat menjadikan tabel sebuah <code>treegrid</code>: baris memiliki <code>aria-level</code>, <code>aria-setsize</code>, dan <code>aria-posinset</code>, serta <code>aria-expanded</code> jika bisa dibuka. Agregat dibacakan beserta jenisnya, misalnya “Sum: 475”.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Komponen chat AI untuk Angular',
        summary: 'Mengobrol dengan model: balasan yang di-stream, tool, versi, dan file.',
        description:
          'Chat Angular yang aksesibel untuk asisten AI: balasan Markdown yang di-stream, penalaran, panggilan tool, sumber, percobaan ulang sebagai versi, dan file.',
        apiDescription:
          'Referensi API chat Needless UI: input nui-chat, NuiChatSession yang men-stream balasan, pesan, template tool, dan pembaca stream.',
        a11yDescription:
          'Keyboard dan aksesibilitas chat Needless UI: feed berisi pesan bernama, Page Up dan Page Down, serta balasan yang diumumkan setelah selesai.',
        overview: [
          'Chat adalah segala hal di antara pengguna Anda dan model. Buat <code>NuiChatSession</code> dengan fungsi <code>respond</code>, lalu <code>&lt;nui-chat&gt;</code> mengurus sisanya: men-stream balasan sebagai Markdown, mengikutinya ke bawah halaman sampai pengguna menggulir ke atas, dan mengubah tombol kirim menjadi tombol berhenti selama balasan datang.',
          '<code>respond</code> mengembalikan teks, promise, <code>async function*</code>, atau Observable, jadi API apa pun cocok. Selain teks, balasan bisa membawa penalaran model, panggilan tool-nya (digambar oleh template Anda), dan sumber yang dipakainya. <code>nuiEventStream</code> membaca server-sent events yang di-stream oleh sebagian besar API model.',
          'Tidak ada yang hilang: balasan yang dicoba ulang atau pertanyaan yang diedit menjadi versi baru di samping versi lama, dan percakapan menyimpan setiap cabang. Pembaca layar membacakan setiap balasan setelah lengkap, bukan kata demi kata.',
        ],
        examples: {
          assistant: {
            title: 'Asisten',
            text: 'Saran memulai percakapan. Balasan di-stream sebagai Markdown; hentikan, coba ulang, beri rating, atau edit pertanyaan Anda. <code>attach</code> menerima file yang dipilih, ditempel, atau di-drop.',
          },
          tools: {
            title: 'Penalaran, tool, dan sumber',
            text: 'Delta menambahkan penalaran model, panggilan tool, dan sumber ke balasan. <code>nuiChatTool</code> menggambar tool cuaca sebagai kartu; tool lain terlipat beserta input dan output-nya.',
          },
          server: {
            title: 'Streaming dari server',
            text: '<code>nuiEventStream</code> membaca event stream bergaya OpenAI, dan <code>NuiChatError</code> menampilkan pesannya. <code>all()</code> menyimpan percakapan, lengkap dengan semua versinya.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Percakapan dan kotak untuk menulis, dalam satu komponen.',
            members: {
              session: 'Percakapan yang ditampilkan.',
              assistant: 'Nama asisten, dalam heading yang dibacakan pembaca layar.',
              headingLevel:
                'Level heading setiap pesan, yang hanya ditampilkan untuk pembaca layar. Heading di dalam balasan satu level lebih dalam.',
              announce:
                'Yang dibacakan pembaca layar saat balasan selesai: seluruhnya, pemberitahuan singkat, atau tidak ada.',
              images:
                'Menampilkan gambar di balasan. Jika tidak, teksnya menjadi tautan ke gambar.',
              value: 'Teks yang sedang ditulis.',
              placeholder: 'Teks yang ditampilkan saat kolom kosong.',
              suggestions: 'Prompt yang bisa dikirim dengan sekali klik, sampai pesan pertama.',
              sendOn:
                'Apakah Enter yang mengirim, atau Ctrl atau ⌘ + Enter. <code>auto</code> mengirim dengan Enter jika ada keyboard; di layar sentuh, Return membuat baris baru dan pesan dikirim dengan tombol.',
              disabled: 'Mencegah kotak tulis mengirim pesan.',
              attach: 'Menerima file: dipilih, ditempel, atau di-drop.',
              accept:
                'Jenis file yang diterima, seperti pada <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Jumlah file yang bisa dibawa satu pesan.',
              maxSize: 'Ukuran file terbesar yang diterima, dalam byte.',
              labels: 'Semua teks yang ditampilkan atau diumumkan chat, untuk diterjemahkan.',
              rated:
                'Mengirimkan balasan yang diberi rating oleh pengguna, beserta rating-nya, atau <code>null</code> saat rating dibatalkan.',
              focus: 'Memfokuskan kolom teks.',
              scrollToEnd: 'Menggulir ke pesan terbaru, lalu mengikutinya.',
            },
          },
          NuiChatSession: {
            summary:
              'Percakapan, tanpa DOM sama sekali. Buat di dalam komponen, dengan opsi <code>respond</code>, <code>messages</code>, dan <code>id</code>.',
            members: {
              respond:
                'Fungsi Anda: menulis balasan untuk <code>request.messages</code>, dan berhenti saat <code>request.signal</code> dibatalkan.',
              messages: 'Percakapan yang tampil di layar.',
              all: 'Setiap pesan dari setiap versi, untuk disimpan lalu diteruskan kembali sebagai <code>messages</code>.',
              busy: 'Apakah balasan sedang dalam perjalanan.',
              send: 'Mengirim pesan dan meminta balasan.',
              stop: 'Menghentikan balasan, dengan tetap menyimpan yang sudah ditulis.',
              retry: 'Meminta ulang. Balasan baru menjadi versi di samping yang lama.',
              edit: 'Mengirim versi baru dari salah satu pesan pengguna.',
              versions: 'Setiap versi sebuah pesan, dari yang terlama.',
              show: 'Mengalihkan percakapan ke versi ini.',
              rate: 'Mencatat penilaian pengguna atas sebuah balasan.',
              'remove, load, clear':
                'Menghapus pesan beserta yang mengikutinya, mengganti percakapan, atau memulai dari awal.',
            },
          },
          NuiChatMessage: {
            summary:
              'Satu pesan. Pesan dengan <code>parent</code> yang sama adalah versi satu sama lain.',
            members: {
              'id, parent': 'Kunci pesan, dan kunci pesan yang diikutinya.',
              role: 'Siapa yang menulisnya.',
              text: 'Markdown dari asisten, teks biasa dari pengguna.',
              status: 'Tahap balasan, dari menunggu hingga selesai.',
              reasoning: 'Apa yang dipikirkan model sebelum menjawab.',
              tools: 'Tool yang dipanggilnya, beserta status, input, dan output-nya.',
              sources: 'Halaman yang dipakainya.',
              attachments: 'File yang dikirim bersamanya.',
              rating: 'Penilaian pengguna.',
              data: 'Apa pun yang perlu disimpan bersamanya, misalnya nama model.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Menggambar panggilan tool, misalnya kartu cuaca. Konteksnya berisi panggilan dan pesannya.',
            members: {
              nuiChatTool:
                'Nama tool. Tanpa nama, template ini menggambar setiap panggilan yang tidak disebut template lain.',
            },
          },
          NuiChatThread: {
            summary:
              'Percakapan saja, untuk tata letak buatan Anda. Menerima input <code>nui-chat</code> yang berkaitan dengan percakapan.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Kotak untuk menulis saja. Menerima input <code>nui-chat</code> yang berkaitan dengan penulisan.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Yang dihasilkan <code>nuiEventStream</code> untuk setiap event. <code>nuiTextStream</code> membaca teks biasa dan <code>nuiJsonStream</code> baris JSON; ketiganya menerima respons <code>fetch</code>.',
            members: {
              event: 'Nama event.',
              data: 'Baris-baris datanya, digabungkan.',
              id: 'Id terakhir yang dikirim stream.',
            },
          },
          NuiChatError: {
            summary:
              'Lempar dari <code>respond</code> untuk menampilkan pesannya. Error lain menampilkan pesan umum, jadi tidak ada detail internal yang bocor.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down dan Page Up', 'Pindah ke pesan berikutnya atau sebelumnya.'],
          ['Ctrl + End dan Ctrl + Home', 'Keluar dari percakapan, ke depan atau ke belakang.'],
          ['Enter', 'Mengirim. Dengan Shift, memulai baris baru.'],
          ['Esc', 'Berhenti mengedit pesan.'],
        ],
        notes: [
          'Percakapan adalah <code>feed</code> berisi <code>article</code>. Masing-masing dinamai oleh heading yang hanya dilihat pembaca layar, misalnya “You said”, dan memiliki <code>aria-posinset</code> serta <code>aria-setsize</code>.',
          'Balasan yang sedang ditulis memiliki <code>aria-busy</code>. Setelah lengkap, balasan diumumkan utuh; kegagalan langsung diumumkan.',
          'Setiap tombol ikon memiliki nama dan tooltip. Rating berupa tombol toggle, dan pengalih versi adalah grup dengan nama seperti “Version 2 of 3”.',
          'Penalaran dan panggilan tool adalah disclosure native. Menghapus file mengembalikan fokus ke kolom teks.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Komponen renderer Markdown untuk Angular',
        summary: 'Render Markdown dengan aman, bahkan saat masih di-stream.',
        description:
          'Renderer Markdown Angular yang aman untuk balasan AI: tabel GitHub, daftar tugas, dan blok kode, digambar sebagai elemen asli dan tetap mulus saat streaming.',
        apiDescription:
          'Referensi API renderer Markdown Needless UI: input nui-markdown, template untuk blok kode, dan parser di baliknya.',
        a11yDescription:
          'Aksesibilitas renderer Markdown Needless UI: heading, daftar, dan tabel asli, region gulir bernama, serta tombol salin yang mengumumkan hasilnya.',
        overview: [
          'Renderer Markdown mengubah teks seperti yang ditulis model menjadi elemen asli: heading, daftar dan daftar tugas, kutipan, tabel, blok kode dengan tombol salin, dan tautan. Teks di-parse menjadi pohon lalu digambar dengan template, sehingga HTML mentah tetap menjadi teks dan tidak ada yang pernah disisipkan sebagai HTML.',
          'Dengan <code>streaming</code>, teks yang setengah jadi terbaca seperti saat sudah lengkap: code fence yang masih terbuka sudah menjadi blok kode, <code>**</code> yang sendirian menunggu pasangannya, dan kursor mengikuti kata terakhir. Blok yang tidak berubah mempertahankan DOM-nya.',
          'Tautan hanya berfungsi untuk alamat web, email, dan telepon, sedangkan gambar tetap berupa tautan sampai Anda mengaktifkan <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Dokumen',
            text: 'Heading dimulai dari <code>headingLevel</code>, sehingga pas di bawah heading halaman itu sendiri. Tabel dan kode yang lebar bergulir di region masing-masing.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Teks yang sama, beberapa karakter setiap kali. Tidak ada simbol yang sempat berkedip, dan hanya blok terakhir yang dirender ulang.',
          },
          highlight: {
            title: 'Penyorotan kode',
            text: '<code>nuiMarkdownCode</code> menggambar blok kode dengan template Anda, di sini dengan highlighter mungil. Template ini menerima kode dan bahasanya.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Merender Markdown sebagai elemen.',
            members: {
              text: 'Teks Markdown-nya.',
              streaming: 'Teks masih berdatangan.',
              headingLevel:
                'Level heading <code>#</code>. Heading yang lebih dalam mengikutinya, hingga 6.',
              images:
                'Menampilkan gambar. Jika tidak, teksnya menjadi tautan ke gambar, karena gambar bisa dipakai untuk melacak.',
              labels: 'Teks tombol salin dan sejenisnya, untuk diterjemahkan.',
              codeTemplate:
                'Template blok kode dari tempat lain, misalnya dari chat yang memuat komponen ini.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Menggambar blok kode. Konteksnya berisi kode, <code>lang</code>, dan <code>open</code> selama blok masih berdatangan.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Parser dan helper-nya, untuk dipakai tanpa komponen.',
            members: {
              nuiParseMarkdown: 'Pohon blok dan elemen inline yang digambar komponen.',
              nuiMarkdownToText:
                'Teks biasa, satu baris per blok, untuk diumumkan atau dipratinjau.',
              nuiSafeUrl: 'Apakah tautan menuju alamat web, email, atau telepon.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Menjangkau tautan, tombol salin, serta tabel dan kode yang lebar untuk menggulirnya.',
          ],
        ],
        notes: [
          'Heading, daftar, kutipan, tabel dengan header <code>th</code> dan <code>scope</code>, serta kode adalah elemen asli.',
          'Tabel dan blok kode yang lebar bergulir di dalam region yang bisa difokus; region tabel dinamai menurut header-nya.',
          'Kotak di daftar tugas memberi tahu apakah setiap tugas sudah selesai. Tombol salin bernama “Copy code” dan menyampaikan “Copied” lewat pesan status.',
          'Kursor streaming disembunyikan dari pembaca layar, dan diam saat gerakan dikurangi.',
        ],
      },
      calendar: {
        name: 'Kalender',
        title: 'Komponen kalender untuk Angular',
        summary: 'Pilih satu hari, rentang, atau beberapa hari, juga lewat keyboard.',
        description:
          'Kalender Angular yang aksesibel: pilih satu hari, rentang, atau beberapa hari, dengan min dan max, hari tidak tersedia, bulan berdampingan, dan nomor minggu.',
        apiDescription:
          'Referensi API kalender Needless UI: mode pemilihan nui-calendar, min, max, dan hari tidak tersedia, bulan berdampingan, serta label.',
        a11yDescription:
          'Keyboard dan aksesibilitas kalender Needless UI: grid berisi hari bernama, panah per hari dan minggu, serta Page Up dan Page Down per bulan.',
        overview: [
          'Dengan kalender, Anda bisa memilih satu hari, rentang hari, atau beberapa hari. Nilainya berupa tanggal ISO biasa, seperti <code>2026-09-25</code>, tanpa zona waktu yang bisa menggesernya, sehingga bisa langsung dikirim ke server atau ke <code>&lt;input type="date"&gt;</code>.',
          'Minggu dimulai pada hari pertama menurut locale, dan nama serta angkanya mengikuti bahasa locale tersebut. <code>min</code>, <code>max</code>, dan <code>unavailable</code> mengecualikan hari, <code>months</code> menampilkan beberapa bulan berdampingan, dan judulnya bisa beralih ke tampilan bulan dan tahun untuk tanggal yang jauh.',
          'Setiap hari bisa dijangkau dengan keyboard, seperti pada pola date picker WAI-ARIA, dan masing-masing dinamai dengan tanggal lengkapnya.',
        ],
        examples: {
          delivery: {
            title: 'Hari pengiriman',
            text: 'Hari sebelum hari ini, setelah <code>max</code>, atau yang dikecualikan oleh <code>unavailable</code> tidak bisa dipilih, tetapi keyboard tetap bisa melewatinya.',
          },
          stay: {
            title: 'Rentang',
            text: 'Dengan <code>selection="range"</code>, pilihan pertama memulai rentang, lalu sorotannya mengikuti pointer sampai pilihan kedua. <code>months="2"</code> dan <code>weekNumbers</code> menampilkan lebih banyak sekaligus.',
          },
          'days-off': {
            title: 'Beberapa hari',
            text: 'Dengan <code>selection="multiple"</code>, setiap pilihan menambahkan atau menghapus satu hari. <code>firstDay</code> memulai minggu pada hari selain hari pertama menurut locale.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Kalender untuk memilih hari.',
            members: {
              selection: 'Berapa banyak hari yang bisa dipilih.',
              value: 'Hari yang dipilih.',
              values: 'Hari-hari yang dipilih, secara berurutan.',
              range: 'Rentang yang dipilih, termasuk kedua ujungnya.',
              month: 'Bulan yang ditampilkan; yang pertama jika ada beberapa.',
              view: 'Hari, bulan, atau tahun.',
              'min, max': 'Hari pertama dan terakhir yang bisa dipilih.',
              unavailable: 'Mengecualikan hari lain, misalnya hari libur.',
              months: 'Jumlah bulan yang ditampilkan berdampingan.',
              weekNumbers: 'Menampilkan nomor minggu ISO.',
              firstDay: 'Hari pertama dalam minggu, 1 untuk Senin. Default-nya mengikuti locale.',
              locale: 'Memformat nama dan angka, serta menentukan hari pertama dalam minggu.',
              labels: 'Semua teks yang ditampilkan atau diumumkan kalender, untuk diterjemahkan.',
              picked: 'Mengirimkan setiap pilihan: satu hari, atau rentang setelah lengkap.',
              focusDate: 'Memindahkan fokus keyboard ke suatu hari, sambil menampilkan bulannya.',
            },
          },
          NuiDateRange: {
            summary: 'Rentang hari.',
            members: { 'start, end': 'Hari pertama dan terakhir, keduanya termasuk.' },
          },
        },
        keyboard: [
          [
            'Panah kiri dan kanan',
            'Hari sebelumnya atau berikutnya. Dicerminkan pada teks kanan-ke-kiri.',
          ],
          ['Panah atas dan bawah', 'Minggu sebelumnya atau berikutnya.'],
          ['Home dan End', 'Hari pertama atau terakhir dalam minggu.'],
          ['Page Up dan Page Down', 'Bulan sebelumnya atau berikutnya; dengan Shift, tahun.'],
          ['Enter atau Spasi', 'Memilih hari, atau masuk ke bulan atau tahun.'],
          ['Esc', 'Membatalkan ujung pertama rentang, atau kembali ke tampilan yang lebih rinci.'],
        ],
        notes: [
          'Setiap bulan adalah <code>grid</code> yang dinamai sesuai judulnya, dengan nama lengkap hari dalam <code>abbr</code>.',
          'Setiap hari dinamai dengan tanggal lengkapnya, ditambah “Today”, “unavailable”, dan ujung-ujung rentang. <code>aria-selected</code> menandai yang dipilih, dan <code>aria-disabled</code> yang tidak bisa dipilih.',
          'Grid hanya satu perhentian tab, dengan roving <code>tabindex</code>. Tombol bulan sebelumnya dan berikutnya mengumumkan bulan yang baru.',
        ],
      },
      'date-picker': {
        name: 'Pemilih tanggal',
        title: 'Komponen pemilih tanggal dan waktu untuk Angular',
        summary: 'Ketik tanggal atau waktu per segmen, atau pilih di kalender.',
        description:
          'Pemilih tanggal, waktu, dan rentang Angular yang aksesibel: segmen diketik sesuai urutan locale, kalender di popover, preset, dan dukungan form.',
        apiDescription:
          'Referensi API pemilih tanggal Needless UI: nui-date-field, nui-time-field, nui-date-picker, dan nui-date-range-picker, beserta preset.',
        a11yDescription:
          'Keyboard dan aksesibilitas pemilih tanggal Needless UI: spinbutton untuk setiap bagian tanggal, dan kalender di dalam dialog.',
        overview: [
          'Kolom tanggal dan waktu diketik per segmen: hari, bulan, dan tahun sesuai urutan locale, lalu jam dan menit dalam format 12 atau 24 jam milik locale tersebut. Setiap segmen adalah spinbutton: ketik angka dan fokus pindah dengan sendirinya, atau ubah nilainya dengan tombol panah. Tempel tanggal lengkap, dan semua segmen langsung terisi.',
          'Komponen pemilih menambahkan kalender di popover, untuk satu tanggal atau rentang dengan preset. Nilainya berupa string ISO biasa, seperti <code>2026-09-25</code> atau <code>2026-09-25T09:30</code>, dan setiap kolom bekerja dengan Signal Forms, reactive forms, dan <code>ngModel</code>.',
          'Di situs ini, contoh mengikuti bahasa halaman: ganti bahasanya untuk melihat urutan, pemisah, dan angkanya berubah.',
        ],
        examples: {
          fields: {
            title: 'Kolom tanggal dan waktu',
            text: 'Ketik angkanya, atau gunakan tombol panah. Backspace kedua kembali ke segmen sebelumnya. <code>minuteStep</code> mengatur seberapa jauh tombol panah menggeser menit.',
          },
          pickers: {
            title: 'Pemilih tanggal',
            text: 'Tombolnya membuka kalender pada hari yang dipilih, dan memilih hari akan menutupnya. Dengan <code>granularity="minute"</code>, pemilih juga menerima waktu, dan kalender hanya mengubah tanggalnya.',
          },
          range: {
            title: 'Rentang tanggal',
            text: 'Dua kolom dan kalender dua bulan. <code>nuiDateRangePresets()</code> menambahkan rentang yang umum dipakai; nilainya tetap null sampai kedua ujung diisi secara berurutan.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Tanggal, atau tanggal dan waktu, yang diketik per segmen.',
            members: {
              value: 'Nilainya, atau null sampai setiap segmen terisi.',
              granularity: 'Berhenti di hari, atau berlanjut sampai jam, menit, atau detik.',
              'min, max':
                'Nilai paling awal dan paling akhir. Di luar rentang itu, kolom tidak valid.',
              placeholder: 'Titik awal segmen kosong saat diubah dengan tombol panah.',
              hourCycle: 'Format 12 atau 24 jam. Default-nya mengikuti locale.',
              minuteStep: 'Seberapa jauh tombol panah menggeser menit.',
              'disabled, readonly': 'Mencegah perubahan.',
              locale: 'Menentukan urutan, pemisah, angka, dan format jam.',
              labels: 'Semua teks yang disampaikan kolom, untuk diterjemahkan.',
              invalid: 'Apakah nilainya berada di luar <code>min</code> dan <code>max</code>.',
              focus: 'Memfokuskan segmen kosong pertama.',
            },
          },
          NuiTimeField: {
            summary:
              'Waktu dalam sehari yang diketik per segmen. Menerima input yang sama dengan kolom tanggal.',
            members: { granularity: 'Berhenti di jam, menit, atau detik.' },
          },
          NuiDatePicker: {
            summary:
              'Kolom tanggal dengan kalender di popover. Menerima input kolom tanggal, ditambah input berikut.',
            members: {
              unavailable: 'Hari yang tidak bisa dipilih di kalender.',
              'firstDay, weekNumbers': 'Diteruskan ke kalender.',
              labels: 'Teks untuk kolom, tombol, dan kalender.',
              show: 'Membuka kalender.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Dua kolom tanggal dengan kalender rentang. Menerima input pemilih tanggal, ditambah input berikut.',
            members: {
              value: 'Rentangnya, atau null sampai kedua ujung diisi secara berurutan.',
              presets: 'Rentang bernama yang bisa dipilih dengan sekali klik.',
              months:
                'Jumlah bulan yang ditampilkan berdampingan di kalender; satu bulan di layar sempit.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Rentang bernama, tetap atau dibuat saat dipilih.',
            members: {
              label: 'Namanya.',
              range: 'Rentangnya, atau fungsi yang membuatnya.',
            },
          },
        },
        keyboard: [
          [
            'Angka',
            'Mengisi segmen. Pindah ke segmen berikutnya begitu tidak ada angka lain yang bisa menyusul.',
          ],
          [
            'Panah atas dan bawah',
            'Menaikkan atau menurunkan segmen; Page Up dan Page Down melangkah lebih jauh.',
          ],
          ['Panah kiri dan kanan, Tab', 'Segmen sebelumnya atau berikutnya.'],
          ['Backspace', 'Mengosongkan segmen, lalu kembali ke segmen sebelumnya.'],
          ['A dan P', 'Mengatur AM atau PM.'],
        ],
        notes: [
          'Kolom adalah <code>group</code>: beri nama dengan <code>aria-label</code> atau <code>aria-labelledby</code>. Setiap segmen adalah <code>spinbutton</code> yang dinamai sesuai bagiannya, yang membacakan bulan dengan namanya dan segmen kosong sebagai “Empty”.',
          'Segmen berupa teks yang bisa diedit, sehingga keyboard sentuh terbuka dalam mode angka.',
          'Tombol pemilih bernama “Choose a date”, dan popover-nya adalah <code>dialog</code>. Memilih tanggal mengembalikan fokus ke tombol.',
          'Kalender di dalamnya bekerja sama seperti komponen <a href="/components/calendar">kalender</a>.',
        ],
      },
      scheduler: {
        name: 'Penjadwal',
        title: 'Komponen penjadwal untuk Angular',
        summary: 'Tampilkan acara per bulan, minggu, hari, atau agenda, lalu seret ke tempatnya.',
        description:
          'Penjadwal Angular aksesibel: bulan, minggu, hari, dan agenda, acara tumpang-tindih berdampingan, seret untuk pindah dan ubah ukuran, kontrol keyboard penuh.',
        apiDescription:
          'Referensi API penjadwal Needless UI: tampilan nui-scheduler, acara, pengeditan dan pemilihan, output-nya, serta template untuk acara.',
        a11yDescription:
          'Keyboard dan aksesibilitas penjadwal Needless UI: grid hari dan waktu, acara bernama, dan padanan keyboard untuk setiap seretan.',
        overview: [
          'Penjadwal menampilkan acara per bulan, minggu, hari, atau dalam agenda. Acara berupa data biasa dengan waktu ISO; acara yang tumpang-tindih berbagi lebar, acara yang melewati tengah malam tampil di kedua hari, dan acara sepanjang hari membentang di bagian atas sebagai bilah.',
          'Penjadwal tidak pernah mengubah acara Anda dengan sendirinya. Seret acara, atau tepi bawahnya, maka <code>eventChange</code> melaporkan waktu barunya; pilih waktu di grid, maka <code>slotSelect</code> melaporkannya. <code>rangeChange</code> memberi tahu hari mana saja yang ditampilkan, sehingga Anda bisa memuat acaranya.',
          'Semua yang bisa dilakukan pointer juga bisa dilakukan keyboard: grid hanya satu perhentian tab, tombol panah bergerak melintasi hari dan waktu, dan Alt bersama tombol panah memindahkan acara.',
        ],
        examples: {
          planner: {
            title: 'Merencanakan seminggu',
            text: 'Dengan <code>editable</code> dan <code>selectable</code>, seret acara untuk memindahkannya, seret tepi bawahnya untuk mengubah ukurannya, dan seret melintasi waktu kosong untuk menambahkan acara. Contoh ini memperbarui acaranya dari output.',
          },
          month: {
            title: 'Sebulan dan agenda',
            text: 'Acara yang melintasi beberapa hari tampil sebagai bilah; hari yang padat menunjukkan berapa acara lagi yang ada. <code>views</code> hanya menawarkan bulan dan agenda untuk <code>agendaDays</code> hari ke depan.',
          },
          rooms: {
            title: 'Sehari di ruang rapat',
            text: '<code>nuiSchedulerEvent</code> menggambar setiap pemesanan beserta ruangan dan penyelenggaranya. <code>slotMinutes="15"</code> membuat baris lebih rinci.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Acara per bulan, minggu, hari, atau dalam agenda.',
            members: {
              events: 'Acara yang ditampilkan.',
              view: 'Tampilan saat ini.',
              views: 'Tampilan yang bisa dipilih pengguna.',
              date: 'Hari yang ditampilkan, sekaligus posisi keyboard.',
              slotMinutes: 'Menit per baris grid waktu, sekaligus langkah pergeseran acara.',
              scrollHour: 'Jam yang terlihat saat grid waktu dibuka.',
              agendaDays: 'Berapa hari ke depan yang dicakup agenda.',
              editable: 'Acara bisa dipindah dan diubah ukurannya, dengan pointer maupun keyboard.',
              selectable: 'Waktu bisa dipilih di grid untuk membuat acara.',
              firstDay: 'Hari pertama dalam minggu, 1 untuk Senin. Default-nya mengikuti locale.',
              headingLevel:
                'Level heading untuk judul; hari-hari di agenda satu level lebih dalam.',
              locale: 'Memformat hari dan waktu.',
              labels: 'Semua teks yang ditampilkan atau diumumkan penjadwal, untuk diterjemahkan.',
              eventClick: 'Mengirimkan acara yang diklik, atau dibuka dengan Enter.',
              eventChange: 'Mengirimkan waktu baru acara setelah dipindah atau diubah ukurannya.',
              slotSelect: 'Mengirimkan waktu yang dipilih di grid.',
              rangeChange:
                'Mengirimkan hari pertama dan terakhir yang ditampilkan saat keduanya berubah.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Sebuah acara. Akhir acara berwaktu tidak termasuk; akhir acara sepanjang hari adalah hari terakhirnya.',
            members: {
              'id, title': 'Kuncinya, dan teks yang ditampilkannya.',
              'start, end': 'Tanggal dan waktu, atau tanggal saja untuk acara sepanjang hari.',
              allDay: 'Default-nya aktif jika <code>start</code> tidak memiliki waktu.',
              tone: 'Warnanya.',
              editable: 'Apakah acara ini bisa dipindah, apa pun pengaturan penjadwal.',
              data: 'Data lain apa pun yang ingin disimpan bersamanya.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Menggambar acara. Konteksnya berisi acara dan waktunya dalam bentuk teks.',
            members: {},
          },
        },
        keyboard: [
          ['Tombol panah', 'Pindah per hari dan per slot. Dicerminkan pada teks kanan-ke-kiri.'],
          ['Page Up dan Page Down', 'Bulan, minggu, atau hari sebelumnya atau berikutnya.'],
          ['Shift + tombol panah', 'Memperluas waktu yang dipilih.'],
          ['Enter atau Spasi pada sel', 'Masuk ke acara di sel, atau memilih waktunya.'],
          ['Panah atas dan bawah pada acara', 'Acara sebelumnya atau berikutnya di sel.'],
          ['Alt + tombol panah pada acara', 'Memindahkannya satu slot atau satu hari.'],
          ['Alt + Shift + panah atas atau bawah', 'Memendekkan atau memperpanjang acara.'],
          ['Esc', 'Kembali ke sel, menghapus pilihan waktu, atau membatalkan seretan.'],
        ],
        notes: [
          'Bulan, minggu, dan hari adalah <code>grid</code> yang dinamai sesuai judulnya. Hari menjadi header kolom dan waktu menjadi header baris, sehingga setiap sel dibacakan beserta hari dan waktunya.',
          'Setiap acara adalah tombol yang dinamai dengan judul, hari, dan waktunya, misalnya “Standup, Friday, September 25, 9:00 – 9:30 AM”. Memindahkan atau mengubah ukuran acara akan mengumumkan waktu barunya.',
          'Setiap seretan punya padanan keyboard, jadi tidak ada yang wajib memakai pointer.',
          'Tampilan berupa tombol toggle dalam satu grup, dan berpindah ke minggu atau bulan lain akan mengumumkan judulnya.',
        ],
      },
      splitter: {
        name: 'Pemisah panel',
        title: 'Komponen pemisah panel untuk Angular',
        summary: 'Panel berdampingan atau bertumpuk, dengan handle untuk mengubah ukurannya.',
        description:
          'Pemisah panel Angular yang aksesibel: panel berdampingan atau bertumpuk, batas ukuran, panel yang bisa diciutkan, ukuran tersimpan, dan kontrol keyboard penuh.',
        apiDescription:
          'Referensi API pemisah panel Needless UI: orientasi dan ukuran nuiSplitter, batas dan penciutan panel, serta handle di antara panel-panelnya.',
        a11yDescription:
          'Keyboard dan aksesibilitas pemisah panel Needless UI: handle window splitter yang bisa difokus dan bernilai, tombol panah, Home, End, dan Enter.',
        overview: [
          'Pemisah panel membagi ruangnya di antara panel-panel, dengan handle di antara setiap dua panel. Seret handle, atau fokuskan lalu gunakan tombol panah. Ukurannya berupa persentase yang totalnya 100, dan bisa dihubungkan dengan <code>[(sizes)]</code>.',
          'Ukuran awal, minimum, dan maksimum setiap panel bisa dalam piksel, rem, atau persen. Panel <code>collapsible</code> menciut saat diseret di bawah separuh ukuran minimumnya, atau dengan Enter pada handle-nya, lalu kembali dengan ukuran sebelumnya.',
          'Dengan <code>storageKey</code>, ukuran disimpan di <code>localStorage</code>, sehingga pada kunjungan berikutnya pengguna menemukan tata letak persis seperti saat mereka meninggalkannya.',
        ],
        examples: {
          editor: {
            title: 'Editor',
            text: 'File, kode, dan pratinjau. Panel file dan pratinjau bisa diciutkan, kode selalu mendapat setidaknya 30% lebar, dan ukurannya disimpan.',
          },
          stacked: {
            title: 'Panel bertumpuk',
            text: '<code>orientation="vertical"</code> menumpuk panel, dan <code>[(sizes)]</code> membaca ukurannya setiap kali berubah.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Panel dengan handle di antaranya.',
            members: {
              orientation: 'Berdampingan, atau bertumpuk.',
              sizes: 'Bagian setiap panel, dalam persen, sesuai urutan.',
              storageKey: 'Menyimpan ukuran di <code>localStorage</code> dengan kunci ini.',
              step: 'Seberapa jauh tombol panah menggeser handle, dalam persen. Dua kali lipat dengan Shift.',
              move: 'Menggeser batas setelah sebuah panel sebesar persentase tertentu.',
            },
          },
          NuiSplitterPane: {
            summary: 'Sebuah panel. Ukurannya bisa dalam piksel, rem, atau persen.',
            members: {
              defaultSize: 'Ukuran awalnya, saat tidak ada ukuran yang bisa dipulihkan.',
              min: 'Ukuran terkecilnya.',
              max: 'Ukuran terbesarnya.',
              collapsible:
                'Panel bisa diciutkan: diseret di bawah separuh minimumnya, atau dengan Enter.',
              collapsedSize: 'Ukurannya saat diciutkan, misalnya deretan ikon.',
              label: 'Menamai handle yang mengubah ukurannya.',
            },
          },
          NuiSplitterHandle: {
            summary: 'Handle di antara dua panel.',
            members: {
              label: 'Menamai handle, jika label panel tidak menamainya.',
              disabled: 'Handle tidak bisa digeser.',
              toggle: 'Menciutkan panel di sebelahnya, atau mengembalikannya.',
            },
          },
        },
        keyboard: [
          [
            'Panah kiri dan kanan',
            'Menggeser handle di antara panel yang berdampingan. Dicerminkan pada teks kanan-ke-kiri.',
          ],
          ['Panah atas dan bawah', 'Menggeser handle di antara panel yang bertumpuk.'],
          ['Shift + tombol panah', 'Menggesernya dua kali lebih jauh.'],
          ['Home dan End', 'Membawa panel sebelum handle ke ukuran terkecil atau terbesarnya.'],
          ['Enter', 'Menciutkan panel yang bisa diciutkan, atau mengembalikannya.'],
        ],
        notes: [
          'Setiap handle adalah <code>separator</code> yang bisa difokus, seperti pada pola window splitter WAI-ARIA: nilainya adalah ukuran panel sebelumnya, di antara batas-batas panel tersebut, dan <code>aria-controls</code> menunjuk ke panel itu.',
          'Beri nama handle melalui <code>label</code> panel: “Files” memberi tahu pembaca layar panel mana yang diubah ukurannya oleh sebuah handle.',
          'Klik ganda pada handle juga menciutkan panelnya, dan seretan menangkap pointer, sehingga gerakan cepat tidak membuat handle terlepas.',
        ],
      },
      tour: {
        name: 'Tur terpandu',
        title: 'Komponen tur terpandu untuk Angular',
        summary:
          'Kartu untuk setiap langkah, di samping hal yang dijelaskannya, dengan halaman di sekitarnya diredupkan.',
        description:
          'Tur produk Angular yang aksesibel: kartu untuk setiap langkah di samping targetnya, sorotan di sekelilingnya, langkah interaktif, dan fokus yang kembali.',
        apiDescription:
          'Referensi API tur terpandu Needless UI: langkah nui-tour, binding open dan step, output-nya, serta target, penempatan, dan hook setiap langkah.',
        a11yDescription:
          'Keyboard dan aksesibilitas tur terpandu Needless UI: setiap kartu adalah dialog yang dinamai judulnya, fokus dijaga dan dikembalikan, serta Esc untuk keluar.',
        overview: [
          'Tur memandu pengguna menjelajahi halaman, selangkah demi selangkah. Setiap langkah menunjuk sebuah elemen dengan kartu di sampingnya dan meredupkan bagian halaman lainnya; langkah tanpa target tampil di tengah.',
          'Langkah berupa data biasa: target (selektor, elemen, atau fungsi yang menemukannya), judul, dan konten berupa teks atau template. <code>beforeShow</code> berjalan lebih dulu, sehingga langkah bisa membuka panel tempat targetnya berada, dan halaman digulir ke target yang berada di luar tampilan.',
          'Setiap kartu adalah dialog. Kartu bersifat modal, kecuali langkahnya <code>interactive</code>: dalam hal itu, pengguna bisa memakai elemen yang ditunjuknya. Esc mengakhiri tur, dan fokus kembali ke tempat semula.',
        ],
        examples: {
          basics: {
            title: 'Sekilas pandang',
            text: 'Empat langkah, yang pertama tanpa target. <code>finished</code> dan <code>dismissed</code> membedakan dua cara tur berakhir.',
          },
          interactive: {
            title: 'Langkah untuk dicoba',
            text: '<code>beforeShow</code> membuka pengaturan sebelum langkah kedua menunjuk ke dalamnya, dan <code>interactive</code> memungkinkan pengguna memakai sakelar selama kartu tampil.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Tur terpandu.',
            members: {
              steps: 'Langkah-langkahnya, sesuai urutan.',
              open: 'Apakah tur sedang berjalan.',
              step: 'Langkah yang ditampilkan, mulai dari 0.',
              labels: 'Semua teks yang ditampilkannya, untuk diterjemahkan.',
              finished: 'Terpicu saat langkah terakhir selesai.',
              dismissed: 'Mengirimkan langkah tempat tur berakhir, jika tur berakhir lebih awal.',
              start: 'Memulai tur, dari langkah pertama atau dari langkah yang diberikan.',
              end: 'Mengakhiri tur, sebagai selesai atau dibatalkan.',
            },
          },
          NuiTourStep: {
            summary: 'Satu langkah dalam tur.',
            members: {
              target: 'Yang ditunjuk langkah ini. Tanpa target, kartu tampil di tengah.',
              title: 'Judul kartu.',
              content: 'Teksnya, atau template.',
              side: 'Sisi target tempat kartu diletakkan.',
              align: 'Cara kartu disejajarkan dengan target.',
              padding: 'Ruang di sekitar target dalam sorotan, dalam piksel.',
              interactive: 'Target bisa digunakan selama kartu tampil.',
              beforeShow:
                'Berjalan sebelum langkah ditampilkan. Jika berupa promise, tur menunggunya.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Berpindah di antara tombol-tombol kartu. Pada langkah modal, fokus tetap di dalam kartu.',
          ],
          ['Enter atau Spasi', 'Menekan tombol yang difokus: Next, Back, atau Done.'],
          ['Esc', 'Mengakhiri tur.'],
        ],
        notes: [
          'Setiap kartu adalah <code>dialog</code> yang dinamai oleh judulnya dan dideskripsikan oleh kontennya. Di setiap langkah, fokus berpindah ke tombol utamanya, lalu kembali ke tempat semula saat tur berakhir.',
          'Langkah modal membuat bagian halaman lainnya menjadi inert. Langkah interaktif tidak modal, sehingga targetnya bisa dijangkau dengan keyboard maupun pointer.',
          'Progresnya berupa teks, seperti “2 of 4”; titik-titiknya hanya menggambarkannya.',
        ],
      },
      dropzone: {
        name: 'Area unggah',
        title: 'Area seret dan lepas serta unggah file untuk Angular',
        summary:
          'Seret dan lepas atau pilih file, dengan validasi, pratinjau, dan unggahan beserta progresnya.',
        description:
          'Area unggah Angular aksesibel: seret dan lepas, folder dan tempel, validasi jenis dan ukuran, pratinjau gambar, serta unggahan dengan progres dan coba ulang.',
        apiDescription:
          'Referensi API area unggah Needless UI: file dan validasi nui-dropzone, fungsi unggah dan antreannya, output-nya, serta teks-teksnya.',
        a11yDescription:
          'Keyboard dan aksesibilitas area unggah Needless UI: area yang berupa tombol, hasil yang diumumkan, serta bilah progres dan aksi yang bernama.',
        overview: [
          'Area unggah menerima file yang di-drop ke atasnya, dipilih lewat pemilih file, atau ditempel. Folder yang di-drop dibaca seluruh isinya, dan setiap file tetap menyimpan jalurnya.',
          'Setiap file diperiksa terhadap <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code>, dan fungsi <code>validate</code> Anda, lalu file yang ditolak dicantumkan beserta alasannya. Gambar mendapat pratinjau.',
          'Tanpa fungsi <code>upload</code>, area unggah menyimpan file untuk formulir di <code>[(files)]</code>. Dengan fungsi itu, file diunggah beberapa sekaligus, lengkap dengan progres, pembatalan, dan coba ulang. Teruskan <code>signal</code> unggahan ke <code>fetch</code>, agar pembatalan benar-benar menghentikannya.',
        ],
        examples: {
          upload: {
            title: 'Unggahan',
            text: 'Simulasi unggahan melaporkan progresnya secara bertahap. File yang namanya mengandung “fail” akan gagal, untuk menunjukkan coba ulang, dan <code>directory</code> menambahkan tombol untuk memilih folder.',
          },
          attach: {
            title: 'Lampiran untuk formulir',
            text: 'Tanpa <code>upload</code>: area unggah menyimpan hingga tiga dokumen di <code>[(files)]</code>, dan teksnya sendiri menggantikan teks default.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Tempat untuk menyeret dan melepas file, atau memilihnya.',
            members: {
              files: 'File yang disimpannya, sesuai urutan.',
              accept:
                'Jenis file yang diterima, seperti pada <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Lebih dari satu file sekaligus.',
              directory: 'Menawarkan tombol untuk memilih folder.',
              maxFiles: 'Jumlah file yang bisa disimpannya.',
              'maxSize, minSize': 'Ukuran file terbesar dan terkecil, dalam byte.',
              validate: 'Memeriksa setiap file. Jika mengembalikan pesan, file ditolak.',
              upload: 'Mengirim file. Tanpanya, file hanya disimpan.',
              concurrency: 'Jumlah file yang diunggah sekaligus.',
              hint: 'Satu baris di bawah teks area, misalnya jenis file yang diterimanya.',
              disabled: 'Tidak menerima file.',
              labels: 'Semua teks yang ditampilkan atau diumumkannya, untuk diterjemahkan.',
              uploaded:
                'Mengirimkan file yang terunggah, beserta nilai yang dikembalikan <code>upload</code>.',
              rejected: 'Mengirimkan file yang ditolak, beserta alasannya.',
              queue:
                'Antrean unggahan, untuk membatalkan, mencoba ulang, dan membaca progres dari kode.',
              take: 'Menambahkan file dari kode, sambil memeriksa masing-masing.',
            },
          },
          NuiUploader: {
            summary:
              'Mengirim satu file: melaporkan progres dari 0 sampai 1, dan berhenti saat signal dibatalkan.',
            members: {
              '(file, context)': 'Mengembalikan promise berisi apa pun jawaban server Anda.',
            },
          },
        },
        keyboard: [
          ['Enter atau Spasi', 'Pada area, membuka pemilih file.'],
          ['Ctrl + V atau ⌘ + V', 'Pada area, menambahkan file yang ditempel.'],
          ['Tab', 'Berpindah melalui area dan aksi setiap file.'],
        ],
        notes: [
          'Area ini adalah tombol, sehingga bisa dipakai tanpa pointer, dan petunjuknya menjadi deskripsinya.',
          'File yang ditambahkan dan yang ditolak diumumkan. Setiap bilah progres adalah <code>progressbar</code> yang dinamai sesuai file-nya, dan setiap aksi dinamai sesuai fungsinya, misalnya “Remove beach.jpg”.',
          'Pratinjau bersifat dekoratif: nama file sudah menyebutkan file mana itu.',
        ],
      },
      mask: {
        name: 'Input mask',
        title: 'Direktif input mask untuk Angular',
        summary: 'Kolom teks yang terformat saat pengguna mengetik: tanggal, kartu, IBAN, kode.',
        description:
          'Input mask Angular: kolom teks terformat saat pengguna mengetik, kursor yang tetap di tempatnya, helper untuk kartu dan IBAN, serta validasi form.',
        apiDescription:
          'Referensi API input mask Needless UI: direktif nuiMask, token dan nilainya, serta helper untuk nomor kartu dan IBAN.',
        a11yDescription:
          'Aksesibilitas input mask Needless UI: kolom native dengan labelnya sendiri, keyboard angka di ponsel, dan penghapusan yang melewati literal.',
        overview: [
          'Mask memformat kolom teks saat pengguna mengetik: <code>00/00/0000</code> menyisipkan garis miring, <code>AA 000 AA</code> menerima huruf dan angka secara bergantian. Karakter yang tidak sesuai tidak akan masuk, dan kursor tetap di tempatnya saat pengguna mengetik di tengah.',
          'Mask tersusun dari token dan literal (karakter tetap): <code>0</code> adalah angka, <code>a</code> huruf, <code>*</code> salah satunya, sedangkan <code>A</code> dan <code>X</code> adalah padanannya untuk kode, dalam huruf kapital. Tambahkan token sendiri dengan <code>tokens</code>, atau berikan fungsi yang memilih mask sesuai teks yang diketik, seperti <code>nuiCardMask</code> yang memilihnya berdasarkan merek kartu.',
          'Nilainya adalah teks yang ditampilkan, atau hanya datanya dengan <code>unmask</code>. Mask bekerja dengan Signal Forms, reactive forms, dan <code>ngModel</code>; nilai yang belum lengkap dianggap error.',
        ],
        examples: {
          formats: {
            title: 'Format',
            text: 'Tanggal, waktu, pelat nomor, dan warna dengan token khusus untuk digit heksadesimal.',
          },
          payment: {
            title: 'Detail pembayaran',
            text: 'Kolom Signal Forms. Mask kartu mengikuti mereknya, kode keamanan berisi empat digit untuk American Express, dan <code>nuiCardValid</code> serta <code>nuiIbanValid</code> memeriksa nomornya.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Mask pada kolom teks native.',
            members: {
              nuiMask: 'Mask, atau fungsi yang memilih mask sesuai data yang diketik.',
              tokens: 'Karakter mask yang ingin ditambahkan atau diganti.',
              unmask: 'Nilainya hanya data, tanpa literal.',
              value: 'Nilainya: teks yang ditampilkan, atau datanya dengan <code>unmask</code>.',
              raw: 'Data yang diketik, tanpa literal.',
              complete: 'Apakah semua posisi dalam mask sudah terisi.',
            },
          },
          Helpers: {
            summary: 'Fungsi untuk memformat, memeriksa, dan membuat mask.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Memformat nilai dengan mask, atau mengambil kembali datanya dari nilai yang terformat.',
              nuiCardMask:
                'Mask untuk nomor kartu, dikelompokkan seperti yang dicetak oleh mereknya.',
              nuiCardBrand: 'Merek kartu, dikenali dari digit pertama nomornya.',
              'nuiCardValid, nuiLuhn':
                'Apakah panjang nomor kartu sesuai mereknya dan lolos pemeriksaan Luhn.',
              nuiIbanMask: 'Mask untuk IBAN, sepanjang IBAN negara tersebut.',
              nuiIbanValid: 'Apakah panjang IBAN sesuai negaranya dan digit pemeriksanya benar.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Menghapus karakter sebelum kursor, sambil melewati literal.'],
          ['Delete', 'Menghapus karakter setelah kursor, sambil melewati literal.'],
        ],
        notes: [
          'Mask bekerja pada <code>&lt;input&gt;</code> milik Anda sendiri, sehingga label dan petunjuknya tetap seperti yang Anda tulis. Jelaskan format yang diharapkan di sana: mask bukan instruksi.',
          'Mask yang hanya berisi angka menetapkan <code>inputmode="numeric"</code>, sehingga ponsel menampilkan keypad angka, kecuali kolomnya menetapkan mode input sendiri.',
          'Angka dari aksara apa pun diterima, lalu ditulis sebagai 0 sampai 9.',
        ],
      },
      'phone-field': {
        name: 'Kolom telepon',
        title: 'Input nomor telepon untuk Angular',
        summary: 'Pemilih negara dan nomor, dikelompokkan sesuai cara penulisan di negara itu.',
        description:
          'Input nomor telepon Angular yang aksesibel: pemilih negara, nomor dikelompokkan sesuai format tiap negara, kode negara diketik atau ditempel, dan nilai E.164.',
        apiDescription:
          'Referensi API kolom telepon Needless UI: nilai dan negara nui-phone-field, daftar negara yang ditawarkan, serta helper untuk membaca dan menulis nomor.',
        a11yDescription:
          'Aksesibilitas kolom telepon Needless UI: pemilih negara bernama, negara diumumkan saat dipilih lewat kode, dan isi otomatis browser.',
        overview: [
          'Kolom telepon terdiri dari pemilih negara dan nomor. Saat diketik, nomor dikelompokkan sesuai cara negaranya menulis nomor, dan nilainya adalah nomor dalam format E.164, misalnya <code>+393331234567</code>.',
          'Pengguna mengetik nomor dengan cara yang mereka kenal. Angka 0 di depan (atau angka 1 sebelum nomor Amerika Utara) dianggap sebagai awalan trunk dan tidak disertakan dalam nilai. Kode negara yang diketik atau ditempel, seperti <code>+44</code> atau <code>0044</code>, memilih negaranya, begitu pula kode area jika beberapa negara berbagi kode negara yang sama.',
          'Negara awal mengikuti locale, dan <code>countries</code> membatasi daftarnya. Dalam formulir, nomor yang terlalu pendek atau terlalu panjang untuk negaranya dianggap error. Untuk validasi penuh, periksa juga nomornya di server.',
        ],
        examples: {
          basic: {
            title: 'Sebuah nomor',
            text: 'Mulai dengan <code>+</code> dan kode negara untuk berganti negara sambil mengetik.',
          },
          countries: {
            title: 'Negara pilihan Anda',
            text: '<code>countries</code> menawarkan sebelas negara, kolomnya bekerja dengan <code>FormControl</code> reactive, dan <code>nuiFormatPhone</code> menuliskan kembali nilainya agar mudah dibaca.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Kolom nomor telepon.',
            members: {
              value: 'Nomor dalam format E.164, atau kosong.',
              country: 'Negaranya, sebagai kode wilayah.',
              countries: 'Negara yang ditawarkan, sebagai kode wilayah.',
              locale: 'Bahasa untuk nama negara.',
              label:
                'Memberi nama pada nomor, jika tidak ada <code>&lt;label for&gt;</code> yang menamainya.',
              inputId: 'Id kolom nomor, untuk <code>&lt;label for&gt;</code>.',
              placeholder: 'Teks yang ditampilkan saat kolom nomor kosong.',
              invalid: 'Menandai nomor sebagai tidak valid.',
              disabled: 'Tidak bisa diubah.',
              labels: 'Semua teks yang disampaikan kolom, untuk diterjemahkan.',
            },
          },
          Helpers: {
            summary: 'Fungsi untuk nomor telepon.',
            members: {
              nuiParsePhone:
                'Mengurai nomor yang ditulis dengan cara apa pun menjadi wilayah, kode negara, dan nomor nasionalnya.',
              nuiFormatPhone:
                'Menulis nomor dengan pengelompokan sesuai negaranya, atau dalam format E.164.',
              nuiPhoneValid:
                'Apakah nomor memiliki kode negara yang dikenal dan panjang yang sesuai negaranya.',
            },
          },
        },
        keyboard: [
          ['Huruf pada pemilih negara', 'Melompat ke negara yang diawali huruf tersebut.'],
          ['Enter atau Spasi', 'Membuka daftar negara, atau memilih salah satunya.'],
          ['Backspace', 'Pada nomor, menghapus satu digit sambil melewati spasi dan tanda kurung.'],
        ],
        notes: [
          'Pemilih negara bernama “Country code” dan membacakan bendera serta kodenya. Saat kode negara atau kode area memilih sebuah negara, negara baru itu diumumkan.',
          'Beri nama pada nomor dengan <code>&lt;label for&gt;</code> dan <code>inputId</code>, atau dengan <code>label</code>.',
          'Nomor memiliki <code>autocomplete="tel"</code>, sehingga browser bisa mengisinya secara lengkap, termasuk kode negaranya, dan ponsel menampilkan keypad telepon.',
        ],
      },
      'color-picker': {
        name: 'Pemilih warna',
        title: 'Pemilih warna OKLCH untuk Angular',
        summary:
          'Warna dalam OKLCH, dengan slider, contoh warna, pipet warna, dan pemeriksaan kontras.',
        description:
          'Pemilih warna OKLCH Angular yang aksesibel: warna P3 bergamut lebar, semua sintaks warna CSS, contoh warna, pipet warna, dan pemeriksaan kontras WCAG.',
        apiDescription:
          'Referensi API pemilih warna Needless UI: nilai, format, dan gamut nui-color-picker, contoh warna dan kontras, serta helper untuk warna.',
        a11yDescription:
          'Keyboard dan aksesibilitas pemilih warna Needless UI: slider dua nilai untuk area, slider native, dan tingkat kontras yang dinyatakan dengan kata-kata.',
        overview: [
          'Pemilih warna bekerja dalam OKLCH, ruang warna perseptual CSS modern. Dari kiri ke kanan pada area, kroma naik dari abu-abu hingga nilai tertinggi yang bisa ditampilkan layar pada kecerahan tersebut, sehingga setiap titik adalah warna yang bisa dipakai, dan penanda tetap di tempatnya saat hue berputar.',
          'Kolom teksnya menerima warna CSS apa pun, termasuk nama warna, dan tombol format menuliskan nilainya sebagai hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code>, atau <code>color(display-p3)</code>. Warna di luar gamut suatu format dibawa masuk ke gamut itu dengan cara CSS, dengan kecerahan dan hue-nya tetap dipertahankan.',
          'Tambahkan <code>swatches</code> sebagai pilihan warna, dan <code>contrastWith</code> untuk memeriksa kontras warna terhadap latar belakang sesuai cara WCAG 2 mengukurnya. Jika browser menyediakan pipet warna, sebuah tombol bisa mengambil warna dari layar.',
        ],
        examples: {
          brand: {
            title: 'Warna brand',
            text: 'Contoh warna bernama, dan kontras teks putih di atas warna tersebut: pilih warna yang terang, maka AA gagal.',
          },
          wide: {
            title: 'Gamut lebar',
            text: '<code>gamut="p3"</code> mengisi area dengan warna Display P3, dan garis putus-putus menandai batas sRGB. Nilainya tetap dalam <code>oklch()</code>.',
          },
          popover: {
            title: 'Di dalam popover',
            text: 'Tombol yang menampilkan warna membuka pemilih di dalam <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Pemilih warna dalam OKLCH.',
            members: {
              value:
                'Warnanya, ditulis dalam format yang dipilih. Kosong sampai ada warna yang dipilih.',
              format: 'Cara nilai ditulis.',
              formats: 'Format yang dilalui tombol format secara bergiliran.',
              gamut: 'Warna yang dimuat area: sRGB, atau Display P3.',
              alpha: 'Menampilkan slider opasitas.',
              swatches: 'Warna yang bisa dipilih, beserta namanya.',
              contrastWith: 'Latar belakang untuk memeriksa kontras.',
              eyeDropper: 'Menampilkan pipet warna, jika browser menyediakannya.',
              disabled: 'Tidak bisa diubah.',
              labels: 'Semua teks yang disampaikan pemilih, untuk diterjemahkan.',
              color: 'Warna yang dipilih, dalam OKLCH.',
            },
          },
          Helpers: {
            summary: 'Fungsi untuk warna.',
            members: {
              nuiParseColor: 'Membaca warna dalam sintaks CSS apa pun.',
              nuiFormatColor: 'Menulis warna dalam suatu format.',
              nuiToGamut:
                'Membawa warna ke dalam sRGB atau Display P3, seperti yang dilakukan CSS.',
              nuiContrast: 'Rasio kontras WCAG 2 dari warna di atas latar belakang.',
            },
          },
        },
        keyboard: [
          ['Panah kiri dan kanan', 'Di area, mengurangi atau menambah kroma.'],
          ['Panah atas dan bawah', 'Di area, membuat warna lebih terang atau lebih gelap.'],
          ['Shift + tombol panah', 'Bergeser sepuluh kali lebih jauh.'],
          ['Home dan End', 'Di area, tanpa kroma atau kroma maksimum.'],
          ['Page Up dan Page Down', 'Di area, jauh lebih terang atau lebih gelap.'],
        ],
        notes: [
          'Penanda area adalah <code>slider</code> bernama “Color” yang menyebutkan kedua nilainya, misalnya “Lightness 62%, chroma 75%”. Hue dan opasitas memakai input range native.',
          'Contoh warna adalah tombol yang dinamai sesuai labelnya, dan tampil tertekan saat cocok dengan warna yang dipilih.',
          'AA dan AAA menyatakan “passes” atau “fails” dengan kata-kata, bukan hanya dengan warna, dan dalam mode forced colors, warnanya sendiri tetap dipertahankan.',
        ],
      },
      carousel: {
        name: 'Carousel',
        title: 'Komponen carousel dan slider untuk Angular',
        summary:
          'Deretan slide yang bergulir dan berhenti tepat di tempatnya, dengan tombol, titik, dan rotasi.',
        description:
          'Carousel Angular yang aksesibel: scroll snapping dan geser native, beberapa slide sekaligus, titik, loop, dan rotasi yang dijeda dan dihentikan sesuai WCAG.',
        apiDescription:
          'Referensi API carousel Needless UI: slide per tampilan, indeks, loop, dan rotasi nui-carousel, metodenya, serta direktif nuiCarouselSlide.',
        a11yDescription:
          'Keyboard dan aksesibilitas carousel Needless UI: pola carousel WAI-ARIA, kontrol rotasi, slide bernama, dan perpindahan yang diumumkan.',
        overview: [
          'Carousel menampilkan slide dalam satu deret yang bergulir dan berhenti tepat di setiap slide: gestur geser, trackpad, dan tombol panah menggerakkannya secara native, begitu pula tombol sebelumnya dan berikutnya serta titik-titiknya. Tandai setiap slide dengan <code>nuiCarouselSlide</code>, yang dinamai sesuai judulnya.',
          'Tampilkan satu slide sekaligus atau beberapa dengan <code>perView</code>, atau biarkan slide mempertahankan lebarnya sendiri dengan <code>perView="auto"</code>. <code>[(index)]</code> menghubungkan slide pertama yang terlihat, dan <code>loop</code> kembali ke awal.',
          'Dengan <code>autoplay</code>, carousel berputar sendiri, dikendalikan oleh kontrol rotasi. Rotasi dijeda saat pointer berada di atasnya, dan berhenti sepenuhnya saat fokus keyboard masuk, sesuai tuntutan pola WAI-ARIA.',
        ],
        examples: {
          featured: {
            title: 'Perjalanan pilihan',
            text: 'Slide baru setiap enam detik, dengan cincin pada kontrol rotasi yang terisi hingga slide berikutnya. Arahkan pointer untuk menjeda rotasi, atau masuk dengan Tab untuk menghentikannya.',
          },
          shelf: {
            title: 'Rak kartu',
            text: '<code>perView="auto"</code> mempertahankan lebar setiap kartu dan menampilkan sebanyak yang muat. Titik-titiknya mengikuti geseran, dan <code>[(index)]</code> memberi tahu posisinya.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Carousel berisi slide.',
            members: {
              label: 'Menamai carousel.',
              index: 'Slide pertama yang terlihat, mulai dari 0.',
              perView:
                'Jumlah slide yang terlihat sekaligus, atau <code>auto</code> untuk slide yang menentukan lebarnya sendiri.',
              gap: 'Jarak antar-slide, dalam panjang CSS apa pun.',
              loop: 'Melewati slide terakhir akan kembali ke slide pertama, begitu pula sebaliknya.',
              autoplay:
                'Milidetik antar-slide saat carousel berputar sendiri; 0 berarti tidak berputar.',
              'controls, indicators': 'Tombol sebelumnya dan berikutnya, serta titik-titiknya.',
              labels: 'Semua teks yang disampaikan carousel, untuk diterjemahkan.',
              'next, previous': 'Maju atau mundur satu slide.',
              goTo: 'Menggulir sebuah slide ke dalam tampilan.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Sebuah slide.',
            members: { nuiCarouselSlide: 'Judulnya, yang dibacakan sebagai ganti posisinya.' },
          },
        },
        keyboard: [
          ['Tab', 'Kontrol rotasi, tombol-tombol, slide, lalu titik-titik.'],
          ['Panah kiri dan kanan pada slide', 'Menggulir ke slide sebelumnya atau berikutnya.'],
          ['Enter atau Spasi', 'Menekan tombol atau titik yang difokus.'],
        ],
        notes: [
          'Carousel adalah <code>region</code> dengan <code>aria-roledescription="carousel"</code>, dan setiap slide adalah <code>group</code> dengan <code>aria-roledescription="slide"</code> yang dinamai seperti “Lake Como, 2 of 4”.',
          'Kontrol rotasi berada paling depan dan menyebutkan apa yang akan dilakukannya. Rotasi dijeda di bawah pointer dan berhenti saat fokus keyboard masuk, sehingga tidak pernah menggeser apa yang sedang dibaca seseorang.',
          'Posisi carousel setelah geseran, tombol, atau titik diumumkan; rotasi tetap senyap.',
        ],
      },
      editor: {
        name: 'Editor teks kaya',
        title: 'Komponen editor teks kaya untuk Angular',
        summary: 'Heading, daftar, tautan, dan format, dengan toolbar dan Markdown saat mengetik.',
        description:
          'Editor teks kaya Angular yang aksesibel: toolbar, pintasan, Markdown saat mengetik, tempel yang bersih, tautan, dan urungkan, dengan nilai HTML atau Markdown.',
        apiDescription:
          'Referensi API editor teks kaya Needless UI: nilai dan format nui-editor, alat toolbar, teks, perintah, serta konverter HTML dan Markdown.',
        a11yDescription:
          'Keyboard dan aksesibilitas editor teks kaya Needless UI: kotak teks multibaris, toolbar WAI-ARIA, pintasan, dan dialog tautan.',
        overview: [
          'Editor ini menulis paragraf, heading, kutipan, daftar, blok kode, dan pembatas, dengan teks tebal, miring, bergaris bawah, dicoret, kode, dan tautan. Nilainya berupa HTML, atau Markdown dengan <code>format="markdown"</code>, dan editor ini bekerja dengan formulir.',
          'Editor menyimpan dokumennya sendiri dan menangani setiap pengeditan, sehingga apa pun yang ditempel atau di-drop hanya sampai ke halaman sebagai dokumen itu: struktur dan format tetap ada, termasuk dari Google Docs dan Word, sedangkan skrip, gaya, dan tautan yang tidak aman dibuang.',
          'Ketik Markdown dan teks berubah menjadi format: <code># </code> memulai heading, <code>- </code> memulai daftar, dan <code>**bold**</code> serta <code>`code`</code> terformat begitu Anda menutupnya. Setiap format punya pintasan dan tombol toolbar sendiri.',
        ],
        examples: {
          comment: {
            title: 'Komentar',
            text: '<code>tools</code> memilih tombol-tombol toolbar. Ketik Markdown, tempel dari mana saja, lalu lihat HTML yang disimpan editor.',
          },
          markdown: {
            title: 'Markdown masuk dan keluar',
            text: 'Dengan <code>format="markdown"</code>, nilainya adalah Markdown: dibaca beserta daftar bertingkat, kutipan, dan kode, lalu ditulis kembali saat Anda mengedit.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Editor teks kaya.',
            members: {
              value: 'Kontennya, sebagai HTML atau Markdown; kosong jika tidak ada teks.',
              format: 'Cara nilai ditulis.',
              tools: 'Tombol-tombol toolbar sesuai urutan, dengan <code>|</code> di antara grup.',
              'label, labelledBy, describedBy': 'Menamai dan mendeskripsikan konten.',
              placeholder: 'Ditampilkan selama konten kosong.',
              'readonly, disabled, invalid':
                'Menampilkan konten tanpa bisa diedit; menonaktifkan editor; menandainya tidak valid.',
              labels: 'Semua teks yang disampaikan editor, untuk diterjemahkan.',
              run: 'Menjalankan perintah toolbar.',
              'undo, redo, focus': 'Mengurungkan, mengulangi, dan memindahkan fokus ke teks.',
            },
          },
          Helpers: {
            summary: 'Fungsi untuk mengonversi dokumen.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': 'Menulis dokumen sebagai HTML atau Markdown.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'Membaca HTML atau Markdown menjadi dokumen, dengan mempertahankan apa yang bisa ditampilkan editor.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I, atau U',
            'Tebal, miring, atau garis bawah. Di perangkat Apple, ⌘ sebagai ganti Ctrl.',
          ],
          ['Ctrl + K', 'Menambahkan atau mengedit tautan.'],
          [
            'Ctrl + Alt + 1, 2, atau 3',
            'Heading; Ctrl + Alt + 0 mengembalikannya menjadi paragraf.',
          ],
          ['Ctrl + Shift + 7 atau 8', 'Daftar bernomor atau berbutir.'],
          [
            'Tab dan Shift + Tab dalam daftar',
            'Menambah atau mengurangi indentasi; di tempat lain, Tab keluar dari editor.',
          ],
          ['Ctrl + Z dan Ctrl + Shift + Z', 'Mengurungkan dan mengulangi.'],
          ['Panah kiri dan kanan di toolbar', 'Berpindah di antara tombol-tombolnya.'],
        ],
        notes: [
          'Kontennya adalah <code>textbox</code> dengan <code>aria-multiline</code>, yang dinamai oleh <code>label</code>, dengan placeholder-nya di <code>aria-placeholder</code>.',
          'Toolbar-nya adalah toolbar WAI-ARIA dengan satu perhentian tab: format berupa tombol toggle dengan <code>aria-pressed</code>, dan setiap tombol menyebutkan pintasannya di <code>aria-keyshortcuts</code> dan di tooltip-nya.',
          'Perintah toolbar mengembalikan fokus ke teks, dan dialog tautan kembali ke teks dengan Esc. Tab tidak pernah terjebak: di luar daftar, Tab keluar dari editor.',
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
      customization: {
        title: 'Kustomisasi',
        description:
          'Fisika pegas, efek tekan, animasi masuk, bentuk sudut, radius, dan kepadatan: ubah cara Needless UI bergerak dan terasa, di seluruh aplikasi atau per komponen.',
        blocks: [
          {
            kind: 'p',
            html: 'Setiap komponen punya kepribadian yang bisa Anda ubah: pegas yang menggerakkannya, apa yang dilakukan tombol di bawah jari Anda, cara dialog dan menu muncul, bentuk dan ukuran sudutnya, serta seberapa banyak ruang yang digunakannya. Masing-masing cukup diatur dengan satu atribut untuk semua yang ada di dalam sebuah elemen, atau satu input untuk satu komponen saja.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Satu atribut untuk seluruh subpohon' },
          {
            kind: 'p',
            html: 'Pasang atribut <code>data-nui-*</code> di <code>&lt;body&gt;</code> untuk seluruh aplikasi, atau di elemen mana pun untuk sebagian saja. Atribut terdekat yang berlaku, jadi atribut ini bisa disarangkan. Karena hanya menetapkan variabel CSS, atribut ini bekerja dengan cara yang sama di framework apa pun, bahkan tanpa framework.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Satu komponen' },
          {
            kind: 'p',
            html: 'Di Angular, <code>nuiButton</code>, <code>nuiDialog</code>, dan <code>nuiMenu</code> menerima nilai yang sama sebagai input. Input yang tidak Anda atur akan mengikuti atribut pada elemen induknya.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Pegas yang dikompilasi menjadi CSS' },
          {
            kind: 'p',
            html: 'Gerakan memakai fisika pegas: kekakuan, redaman, dan massa, bukan durasi dan kurva. Kompiler token menghitung setiap pegas dan menuliskannya ke CSS sebagai waktu yang dibutuhkan pegas untuk diam dan sebuah easing <code>linear()</code>, sehingga animasinya berjalan di compositor tanpa JavaScript. Enam pegas tersedia sebagai token, dari <code>--nui-spring-snappy</code> hingga <code>--nui-spring-mechanical</code>, dan <code>--nui-motion</code> menyimpan pegas yang sedang dipakai.',
          },
          {
            kind: 'p',
            html: 'Pegas lain cukup diatur lewat satu input. Angular mengompilasinya saat runtime dengan solver yang sama, dan <code>springTransition()</code> memberi Anda CSS untuk elemen Anda sendiri.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Apa pun di antaranya' },
          {
            kind: 'p',
            html: 'Preset hanyalah jalan pintas. Untuk hal lainnya, atur sendiri variabel CSS-nya: transform apa pun untuk <code>--nui-press</code> dan <code>--nui-enter</code>, angka apa pun untuk <code>--nui-radius-scale</code> dan <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Aksesibilitas' },
          {
            kind: 'p',
            html: 'Saat sistem meminta gerakan dikurangi, pegas selesai seketika, sedangkan efek tekan dan animasi masuk berhenti bergerak. Kepadatan tidak pernah membuat kontrol lebih kecil dari ukuran target 24px WCAG 2.2, dan tidak ada preset yang mengubah warna, sehingga semua pemeriksaan kontras tetap terpenuhi. Browser tanpa dukungan <code>corner-shape</code> menggambar semua sudut membulat.',
          },
        ],
      },
      'browser-support': {
        title: 'Dukungan browser',
        description:
          'Browser yang didukung dan diuji Needless UI: versi Chrome, Edge, Firefox, dan Safari, ponsel dan layar sentuh, serta fitur yang tidak ada di browser lama.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI dibangun di atas elemen native dan fitur platform web terbaru, seperti Popover API. Browser di bawah ini didukung mulai dari versi yang tercantum. Di versi yang lebih lama, menu, select, dan popover tidak bisa dibuka.',
          },
          { kind: 'h2', id: 'supported', text: 'Browser yang didukung' },
          {
            kind: 'table',
            caption: 'Versi tertua yang didukung',
            head: ['Browser', 'Mulai versi', 'Diperlukan untuk'],
            rows: [
              [
                'Chrome dan Edge, di komputer dan Android',
                '120',
                'Ikon yang digambar dengan mask CSS, dan <code>:dir()</code> untuk teks kanan-ke-kiri',
              ],
              ['Firefox, di komputer dan Android', '125', 'Popover API'],
              ['Safari di Mac', '17', 'Popover API'],
              ['Semua browser di iPhone dan iPad', 'iOS 17', 'Popover API'],
              ['Browser Samsung Internet', '25', 'Sama seperti Chrome'],
            ],
          },
          {
            kind: 'p',
            html: 'Browser lain berbasis Chromium, seperti Opera dan Brave, mengikuti versi Chrome. Angular 22 sendiri membutuhkan Chrome, Edge, dan Firefox 119 serta Safari 17. Internet Explorer dan Edge lama, yang belum berbasis Chromium, tidak didukung.',
          },
          { kind: 'h2', id: 'tested', text: 'Browser yang diuji' },
          {
            kind: 'p',
            html: 'Pada setiap perubahan, pengujian setiap komponen dijalankan di engine Chrome, Firefox, dan Safari. Sebelum rilis, setiap halaman dokumentasi ini diperiksa di setiap engine, di komputer dan di ponsel dengan input sentuh: halaman harus bisa dimuat, setiap menu dan popup-nya harus bisa dibuka, tampilannya harus pas di layar, dan harus lolos pemeriksaan aksesibilitas.',
          },
          {
            kind: 'table',
            caption: 'Browser untuk pengujian',
            head: ['Engine', 'Versi', 'Diuji di'],
            rows: [
              [
                'Chromium (engine Chrome dan Edge)',
                '153',
                'Komputer, dan ponsel Android dengan input sentuh',
              ],
              ['Firefox', '155', 'Komputer, dan layar sentuh seukuran ponsel'],
              ['WebKit (engine Safari)', '26.6', 'Komputer, dan iPhone dengan input sentuh'],
              ['Safari di iPhone', 'iOS 17.5 dan 18.6', 'Simulator iPhone'],
            ],
          },
          {
            kind: 'p',
            html: 'Versi di antara versi tertua yang didukung dan versi yang diuji tidak diuji satu per satu: versi-versi itu didukung karena memiliki semua fitur yang dibutuhkan komponen.',
          },
          { kind: 'h2', id: 'newer', text: 'Tambahan di browser yang lebih baru' },
          {
            kind: 'p',
            html: 'Beberapa detail memakai fitur yang hanya ada di browser yang lebih baru. Browser lain melewatinya, dan tidak ada yang rusak:',
          },
          {
            kind: 'table',
            caption: 'Detail yang membutuhkan browser lebih baru',
            head: ['Detail', 'Browser', 'Di browser lain'],
            rows: [
              [
                'Popover, menu, dan dialog muncul dan menghilang dengan animasi',
                'Chrome dan Edge, Firefox 129, Safari 17.5',
                'Langsung muncul dan menghilang',
              ],
              [
                'Sudut squircle (<code>corner-shape</code>)',
                'Chrome dan Edge 139',
                'Sudut membulat',
              ],
              [
                'Mengambil warna dari bagian mana pun di layar',
                'Chrome dan Edge di komputer',
                'Tanpa tombol pipet warna',
              ],
              ['Memilih seluruh folder di area unggah', 'Browser di komputer', 'Hanya file'],
              [
                'Cincin pada kontrol rotasi carousel terisi dengan mulus',
                'Chrome dan Edge, Firefox 128, Safari',
                'Langsung terisi penuh',
              ],
              [
                'Gestur kembali Android menutup menu, daftar combobox, dan hovercard, serta mengakhiri tur terpandu',
                'Chrome dan Edge 126, Firefox 149',
                'Gestur kembali membuka halaman sebelumnya',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Ponsel dan layar sentuh' },
          {
            kind: 'p',
            html: 'Setiap komponen bisa dipakai dengan sentuhan. Handle pemisah panel, area warna, tepi kolom, dan toast mengikuti jari tanpa menggulir halaman, carousel digeser dengan pengguliran bawaan browser, dan tekan lama pada acara di penjadwal akan mengangkatnya untuk dipindahkan. Di layar sentuh, teks di kolom input berukuran minimal 16px, sehingga iPhone tidak memperbesar tampilan saat kolom itu diisi, dan kata yang disusun keyboard selama mengetik, seperti pada keyboard Android, diterima secara utuh.',
          },
          {
            kind: 'p',
            html: 'Layar sentuh tidak mengenal hover, jadi hovercard hanya melengkapi apa yang sudah ada di halaman: jangan taruh hal penting apa pun di dalamnya. Di ponsel, tombol Return di chat membuat baris baru, sedangkan pesan dikirim dengan tombol kirim.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Keyboard di Safari' },
          {
            kind: 'p',
            html: 'Secara default, tombol Tab di Safari hanya berpindah di antara kolom teks dan menu pop-up. Untuk menjangkau setiap tombol dan tautan, nyalakan “Tekan Tab untuk menyorot tiap item pada halaman web” di pengaturan Lanjutan Safari, atau tekan Option-Tab. Safari juga tidak memfokuskan tombol saat tombol itu diklik; komponen menutupi kekurangan ini, sehingga navigasi keyboard tetap berlanjut setelah klik seperti di browser lain.',
          },
        ],
      },
    },
    playground: {
      label: 'Playground kustomisasi',
      motion: 'Gerakan',
      custom: 'kustom',
      stiffness: 'Kekakuan',
      damping: 'Redaman',
      mass: 'Massa',
      press: 'Efek tekan',
      enter: 'Animasi masuk',
      corners: 'Sudut',
      radius: 'Radius',
      density: 'Kepadatan',
      surprise: 'Kejutkan saya',
      reset: 'Kembalikan ke default',
      hint: 'Tekan dan tahan sebuah tombol, lalu lepaskan. Buka dialog dan menu untuk melihat cara keduanya muncul.',
      save: 'Simpan',
      cancel: 'Batal',
      delete: 'Hapus',
      openDialog: 'Buka dialog',
      openMenu: 'Buka menu',
      menu: ['Ganti nama', 'Duplikat', 'Hapus'],
      dialogTitle: 'Dianimasikan berlebihan',
      dialogText: 'Dialog ini muncul persis seperti yang Anda minta.',
      close: 'Tutup',
      curve:
        'Posisi pegas dari waktu ke waktu. Kurvanya dimulai dari bawah dan berhenti di garis putus-putus.',
      settles: (ms, overshoot) => `Stabil dalam ${ms} ms · melampaui target ${overshoot}%`,
      instant: 'Tanpa gerakan: semuanya langsung melompat ke tujuannya.',
      stuck:
        'Pegas ini tidak stabil dalam 10 detik. Tambah redaman atau kekakuan; sementara itu, komponen tetap memakai pegas terakhir yang stabil.',
      reducedMotion:
        'Sistem Anda meminta gerakan dikurangi, jadi tidak ada yang bergerak di sini. Pegas, efek tekan, dan animasi masuk akan kembali saat sistem tidak lagi memintanya.',
      noCornerShape:
        'Browser ini belum bisa menggambar bentuk sudut, jadi semua sudut tetap membulat.',
      everywhere: 'Di elemen mana pun, untuk semua yang ada di dalamnya:',
      oneComponent: 'Di satu komponen, dengan Angular:',
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
