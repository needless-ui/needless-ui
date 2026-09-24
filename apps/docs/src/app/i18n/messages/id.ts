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
      kinds: { input: 'Input', model: 'Dua arah', output: 'Output', method: 'Metode' },
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
