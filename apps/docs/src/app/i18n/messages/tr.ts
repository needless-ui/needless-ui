import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Yerel öğeler, W3C tasarım token’ları ve framework’ten bağımsız tek stil dosyasıyla erişilebilir, tema destekli Angular bileşenleri. MIT lisanslı açık kaynak.',
    skipToContent: 'Ana içeriğe geç',
    nav: {
      label: 'Ana',
      home: 'Needless UI ana sayfası',
      components: 'Bileşenler',
      guides: 'Kılavuzlar',
      github: 'GitHub',
      language: 'Dil',
      theme: 'Tema',
      themes: { system: 'Sistem', light: 'Açık', dark: 'Koyu' },
    },
    footer: {
      license: 'MIT Lisansı ile yayımlanmıştır.',
      source: 'Kaynak kodu',
      built: 'Gereğinden fazla mühendislik, bolca özen.',
      legal: 'Yasal bilgiler',
      privacy: 'Gizlilik politikası',
    },
  },

  home: {
    title: 'Needless UI · Erişilebilir Angular bileşenleri, gereğinden özenli',
    description:
      'Needless UI: yerel öğeler, framework’ten bağımsız tek stil dosyası, W3C tasarım token’ları ve yerleşik WCAG 2.2 AA uyumuyla açık kaynak Angular bileşenleri.',
    eyebrow: 'Açık kaynak · Angular 22 · MIT',
    heading: 'Arayüz bileşenleri, gereğinden fazla özenle tasarlandı.',
    lead: 'Needless UI, <strong>yerel öğeleri</strong> framework’ten bağımsız tek bir stil dosyası ve W3C tasarım token’larıyla biçimlendirir. Angular direktifleri ise Angular Aria’nın sağladığı davranışı ekler; böylece her bileşen ilk görüntülendiği andan itibaren erişilebilirdir.',
    getStarted: 'Hemen başlayın',
    browse: 'Bileşenlere göz atın',
    featuresTitle: 'Neden var?',
    features: [
      {
        title: 'Önce yerel öğeler',
        text: '<code>&lt;button nuiButton&gt;</code> gerçek bir düğmedir. Etrafına hiçbir şey sarılmadığı için formlar, klavye ve ekran okuyucular sorunsuz çalışır.',
      },
      {
        title: 'Tek stil dosyası, her framework',
        text: 'Bileşenler, CSS katmanlarına (cascade layers) yerleştirilmiş düz CSS’tir: bugün Angular, sırada React, düz HTML ise her zaman.',
      },
      {
        title: 'CSS’iniz her zaman kazanır',
        text: 'Her şey <code>@layer nui</code> içinde gelir; bu sayede kendi stilleriniz, <code>!important</code> kullanmadan ve özgüllük savaşlarına girmeden onu geçersiz kılar.',
      },
      {
        title: 'Yapısı gereği erişilebilir',
        text: 'Palet oluşturulurken her renk çifti WCAG 2.2 AA ölçütlerine göre denetlenir. Odak, forced colors ve azaltılmış hareket sizin için halledilir.',
      },
      {
        title: 'Standart tasarım token’ları',
        text: 'W3C DTCG biçimindeki token dosyaları, açık, koyu ve iç içe temalarla birlikte CSS değişkenlerine derlenir.',
      },
      {
        title: 'Modern Angular',
        text: 'Signal tabanlı girdiler, zoneless çalışma, sunucu tarafında render ve bileşen başına bir giriş noktası: uygulamalar yalnızca içe aktardıklarını paketler.',
      },
    ],
    codeTitle: 'İki içe aktarma, hepsi bu',
    codeText:
      'Paketi ekleyin, stil dosyasını bir kez içe aktarın, ardından bileşenleri herhangi bir standalone bileşende kullanın.',
  },

  components: {
    title: 'Bileşenler',
    description:
      'Angular için Needless UI bileşenlerine göz atın: canlı örnekler, API referansı ve klavye desteğiyle erişilebilir düğmeler, diyaloglar ve menüler.',
    intro:
      'Her bileşen yerel öğeler üzerine kuruludur; canlı örnekleri, API’si ve klavye davranışıyla belgelenmiştir.',
    tabsLabel: 'Dokümantasyon bölümleri',
    tabs: { overview: 'Genel bakış', api: 'API', accessibility: 'Erişilebilirlik' },
    sidenavLabel: 'Bileşenler',
    onThisPage: 'Bu sayfada',
    example: {
      showCode: 'Kodu göster',
      hideCode: 'Kodu gizle',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
      files: 'Kaynak dosyalar',
    },
    api: {
      import: 'İçe aktarma',
      selector: 'Seçici',
      exportAs: 'Dışa aktarma adı',
      members: 'Özellikler',
      name: 'Ad',
      type: 'Tür',
      default: 'Varsayılan',
      description: 'Açıklama',
      kinds: { input: 'Girdi', model: 'Çift yönlü', output: 'Çıktı', method: 'Metot' },
    },
    a11y: {
      keyboard: 'Klavye etkileşimi',
      key: 'Tuş',
      action: 'İşlev',
      notes: 'Erişilebilirlik notları',
    },
    titles: {
      api: (name) => `${name} API’si`,
      accessibility: (name) => `${name} erişilebilirliği`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Angular için düğme bileşeni',
        summary: 'Yerel button ve anchor öğeleri üzerinde biçimlendirilen eylemler ve bağlantılar.',
        description:
          'Yerel button ve anchor öğeleri için erişilebilir Angular düğme direktifi: dört varyant, üç ton, üç boyut ve bağlantı desteği.',
        apiDescription:
          'Needless UI düğmesinin API referansı: nuiButton direktifi, seçicisi ve variant, tone, size ve disabled girdileri.',
        a11yDescription:
          'Needless UI düğmesinin klavye davranışı ve erişilebilirliği: yerel semantik, odak halkası, kontrast, hedef boyutu ve devre dışı bağlantılar.',
        overview: [
          '<code>nuiButton</code> direktifi, yerel bir <code>&lt;button&gt;</code> veya <code>&lt;a&gt;</code> öğesini biçimlendirir. Öğe semantiğini, klavye davranışını ve formlara katılımını korur; direktif yalnızca girdilerini stil dosyasının hedeflediği data niteliklerine yansıtır.',
          'Eylemler için <code>&lt;button&gt;</code>, gezinme için <code>&lt;a&gt;</code> kullanın. İkisi de aynı görünür ve ikisi de <code>disabled</code> özelliğini destekler.',
        ],
        examples: {
          variants: {
            title: 'Varyantlar',
            text: 'En belirgininden en sadesine dört dolgu stili. Birincil eylem için her görünümde yalnızca bir solid düğme kullanın.',
          },
          tones: {
            title: 'Tonlar',
            text: 'Tonlar paleti değiştirir: ana akış için accent, ikincil eylemler için neutral, yıkıcı eylemler için danger.',
          },
          sizes: {
            title: 'Boyutlar',
            text: 'Üç yükseklik: 28, 36 ve 44 piksel. En küçüğü bile WCAG 2.2’nin minimum hedef boyutunu aşar.',
          },
          links: {
            title: 'Bağlantılar ve devre dışı düğmeler',
            text: 'Anchor öğeleri yerel olarak devre dışı bırakılamaz; bu yüzden devre dışı bir bağlantı <code>aria-disabled="true"</code> alır ve tıklamaları <code>routerLink</code> kullanılsa bile engellenir.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Yerel bir <code>&lt;button&gt;</code> veya <code>&lt;a&gt;</code> öğesini düğme olarak biçimlendirir.',
            members: {
              variant:
                'Dolgu stili: <code>solid</code>, <code>soft</code>, <code>outline</code> veya <code>ghost</code>.',
              tone: 'Renk paleti: <code>accent</code>, <code>neutral</code> veya <code>danger</code>.',
              size: 'Yükseklik, iç boşluk ve yazı boyutu: <code>sm</code>, <code>md</code> veya <code>lg</code>.',
              disabled:
                'Düğmeyi devre dışı bırakır. Anchor öğelerinde <code>aria-disabled</code> ayarlar ve etkinleştirmeyi engeller.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Odağı düğmeye veya bağlantıya taşır.'],
          ['Enter', 'Düğmeyi etkinleştirir veya bağlantıyı açar.'],
          ['Boşluk', 'Düğmeyi etkinleştirir. Bağlantılarda sayfayı kaydırır (yerel davranış).'],
        ],
        notes: [
          'Erişilebilir ad, öğenin metnidir. Yalnızca simge içeren düğmeler bir <code>aria-label</code> gerektirir.',
          'Metin her varyant, ton ve temada 4,5:1 kontrast oranını karşılar; bunu palet oluşturucu garanti eder.',
          'Odak halkası, her iki temada da sayfaya karşı en az 3:1 kontrasta sahip, 2 piksellik bir dış çizgidir.',
          'Devre dışı bir <code>&lt;button&gt;</code> sekme sırasından çıkar. Devre dışı bir bağlantı ise ekran okuyucu kullanıcıları onu bulabilsin diye odaklanabilir kalır ve devre dışı olarak duyurulur.',
          'Forced colors modunda saydam kenarlık, sistem renginde görünür bir dış çizgiye dönüşür.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Angular için diyalog bileşeni',
        summary:
          'Yerel dialog öğesi üzerine kurulu, odağı tarayıcının yönettiği modal bir pencere.',
        description:
          'Yerel dialog öğesi üzerine kurulu erişilebilir Angular diyaloğu: modal odak yönetimi, Esc ile kapatma, dönüş değerleri ve arka plana tıklayarak kapatma.',
        apiDescription:
          'Needless UI diyaloğunun API referansı: çift yönlü open bağlamalı nuiDialog, boyutlar, dönüş değerleri ve başlık, açıklama ve kapatma parçaları.',
        a11yDescription:
          'Needless UI diyaloğunun klavye davranışı ve erişilebilirliği: modal odak, Esc tuşu, odağın geri verilmesi ve etiketli içerik.',
        overview: [
          '<code>nuiDialog</code> direktifi, yerel bir <code>&lt;dialog&gt;</code> öğesini Needless UI diyaloğuna dönüştürür. Modal davranışı tarayıcı sağlar: arkadaki sayfa etkileşime kapanır (inert), odak diyalogda kalır, Esc diyaloğu kapatır ve odak, diyaloğu açan öğeye geri döner.',
          '<code>[(open)]</code> ile bir signal bağlayın ve diyaloğun nasıl kapandığını öğrenmek için kapatma düğmelerine <code>nuiDialogClose="…"</code> ile bir değer verin.',
        ],
        examples: {
          confirm: {
            title: 'Onay',
            text: 'Yıkıcı bir eylem için onay. Güvenli seçenekte <code>autofocus</code> vardır ve seçilen değer <code>(closed)</code> üzerinden gelir.',
          },
          form: {
            title: 'Diyalogda form',
            text: 'Diyaloglar her türlü içeriği barındırabilir. Burada diyalog açılınca ilk alan odağı alır.',
          },
          dismissible: {
            title: 'Seçim zorunlu',
            text: '<code>[dismissible]="false"</code> ile Esc ve arka plan tıklamaları yok sayılır; kullanıcının bir seçenek belirlemesi gerekir.',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'Yerel bir <code>&lt;dialog&gt;</code> öğesini Needless UI diyaloğuna dönüştürür.',
            members: {
              open: 'Diyaloğun açık olup olmadığı. <code>[(open)]</code> ile bağlayın.',
              modal:
                'Modal olarak açılır: bir arka plan katmanı gösterilir ve arkadaki sayfa etkileşime kapanır.',
              dismissible: 'Esc ve arka plan tıklamalarının diyaloğu kapatıp kapatmayacağı.',
              size: 'Maksimum genişlik: <code>sm</code> (24rem), <code>md</code> (32rem) veya <code>lg</code> (44rem).',
              closed:
                'Diyalog her kapandığında dönüş değerini yayar. Diyalog bir seçim yapılmadan kapatıldıysa değer boştur.',
              close: 'Diyaloğu isteğe bağlı bir dönüş değeriyle kapatır.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Diyaloğun başlığı. Bir id alır ve diyaloğun <code>aria-labelledby</code> değeri olur.',
            members: {},
          },
          NuiDialogDescription: {
            summary: 'Diyaloğun <code>aria-describedby</code> ile başvurduğu kısa bir açıklama.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Diyaloğun altında, sona hizalanmış bir düğme satırı.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Tıklandığında içinde bulunduğu diyaloğu kapatır.',
            members: {
              nuiDialogClose:
                'Diyaloğun kapanırken taşıdığı ve <code>(closed)</code> ile yayılan değer.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Odağı diyalog içindeki bir sonraki öğeye taşır.'],
          ['Shift + Tab', 'Odağı diyalog içindeki bir önceki öğeye taşır.'],
          ['Esc', 'Seçim zorunlu değilse diyaloğu kapatır.'],
        ],
        notes: [
          '<code>showModal()</code> ile açmak diyaloğa <code>role="dialog"</code> ve modal semantiği kazandırır, sayfanın geri kalanını da etkileşime kapatır.',
          'Başlık ve açıklama otomatik üretilen id’lerle bağlanır; bu sayede ekran okuyucular diyalog açıldığında ikisini de okur.',
          'İlk odak <code>autofocus</code> olan öğeye, yoksa odaklanabilir ilk öğeye gider. Yıkıcı eylem onaylarında <code>autofocus</code> özelliğini güvenli seçeneğe koyun.',
          'Diyalog kapandığında odak, onu açan öğeye geri döner.',
          'Tarayıcılar, kullanıcı başka bir etkileşimde bulunmadan Esc tuşuna art arda basıldığında seçim zorunlu bir diyaloğu yine de kapatabilir; bu yüzden her zaman açık bir çıkış yolu sunun.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Angular için menü bileşeni',
        summary:
          'Alt menüler, işaretlenebilir öğeler ve tam klavye desteğiyle açılır bir eylem listesi.',
        description:
          'Angular Aria tabanlı erişilebilir Angular menüsü: klavyeyle gezinme, yazarak arama, alt menüler, onay kutusu ve radyo öğeleri, ekrana sığan konumlandırma.',
        apiDescription:
          'Needless UI menüsünün API referansı: değerler, tonlar, alt menüler ve işaretli durumla nuiMenuTrigger, nuiMenu ve nuiMenuItem.',
        a11yDescription:
          'Needless UI menüsünün klavye etkileşimi ve erişilebilirliği: ok tuşları, yazarak arama, alt menüler, Esc ve odağın geri dönmesi.',
        overview: [
          'Menü, tetikleyicisi etkinleştirildiğinde bir eylem listesi gösterir. Davranış, Angular Aria’nın menü deseninden gelir; Needless UI ise stilleri ekler, menüyü sayfanın üstünde bir popover olarak gösterir ve görüntü alanının içinde tutar.',
          'Menünün <code>ngMenu</code> referansını <code>[nuiMenuTrigger]</code> değerine verin, her öğeye benzersiz bir <code>value</code> atayın ve her öğedeki <code>(selected)</code> ya da menüdeki <code>(itemSelected)</code> olayına tepki verin.',
        ],
        examples: {
          actions: {
            title: 'Eylemler',
            text: 'Kısayol ipuçları, bir ayırıcı ve yıkıcı bir öğe içeren bir eylem menüsü.',
          },
          submenu: {
            title: 'Alt menüler',
            text: 'Bir öğeyi <code>[submenu]</code> ile iç içe bir <code>nuiMenu</code> menüsüne bağlayın. Alt menü, üzerine gelindiğinde veya sağ ok tuşuyla açılır.',
          },
          checkable: {
            title: 'Onay kutusu ve radyo öğeleri',
            text: '<code>role</code> değerini ayarlayın ve <code>[checked]</code> bağlayın. Menü, işareti gösterir ve durumu duyurur.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Bir menü açar. Genellikle bir <code>nuiButton</code> üzerine uygulanır.',
            members: {
              nuiMenuTrigger:
                'Açılacak menü: bir <code>nuiMenu</code> menüsünün <code>ngMenu</code> referansı.',
            },
          },
          NuiMenu: {
            summary:
              'Tetikleyicisinin yanında popover olarak gösterilen bir öğe menüsü. <code>ngMenu</code> dışa aktarımı, tetikleyicilerin ve alt menülerin kullandığı Angular Aria menüsüdür.',
            members: {
              wrap: 'Ok tuşlarının son öğeden ilk öğeye dönüp dönmeyeceği.',
              typeaheadDelay:
                'Yazarak aramanın sıfırlanmasından önceki süre, milisaniye cinsinden.',
              disabled: 'Menünün tamamını devre dışı bırakır.',
              itemSelected:
                'Seçilen öğenin değerini yayar. Kök menüde alt menü öğeleri için de tetiklenir.',
            },
          },
          NuiMenuItem: {
            summary: 'Bir <code>nuiMenu</code> içindeki öğe.',
            members: {
              value: 'Öğeyi tanımlar. Alt menüler dahil tüm menüde benzersiz olmalıdır.',
              disabled: 'Öğeyi devre dışı bırakır. Ok tuşlarıyla hâlâ ulaşılabilir ama seçilemez.',
              submenu: 'Bu öğenin açtığı iç içe <code>nuiMenu</code>.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> veya <code>menuitemradio</code>.',
              checked: 'Onay kutusu veya radyo öğesinin işaretli durumu.',
              tone: 'Yıkıcı eylemler için <code>danger</code>.',
              searchTerm:
                'Yazarak aramanın eşleştirdiği metin. Varsayılan olarak öğenin etiketidir.',
              selected: 'Öğe fareyle veya klavyeyle seçildiğinde değerini yayar.',
            },
          },
          NuiMenuSeparator: { summary: 'Öğe grupları arasında bir çizgi.', members: {} },
          NuiMenuShortcut: {
            summary: 'Öğenin sonuna hizalanmış bir klavye kısayolu ipucu.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter veya Boşluk',
            'Tetikleyicide: menüyü ilk öğesinde açar. Bir öğede: öğeyi seçer ya da alt menüsünü açar.',
          ],
          ['Aşağı ok', 'Tetikleyicide: menüyü ilk öğesinde açar. Menüde: sonraki öğeye geçer.'],
          ['Yukarı ok', 'Tetikleyicide: menüyü son öğesinde açar. Menüde: önceki öğeye geçer.'],
          ['Home ve End', 'İlk veya son öğeye geçer.'],
          ['Sağ ok', 'Bir alt menüyü açar ve ilk öğesine geçer (sağdan sola metinde sol ok).'],
          ['Sol ok', 'Alt menüyü kapatır ve üst öğesine döner (sağdan sola metinde sağ ok).'],
          ['Esc', 'Menüyü kapatır ve odağı tetikleyiciye geri verir.'],
          ['Harfler', 'Etiketi yazılan metinle başlayan bir sonraki öğeye geçer.'],
        ],
        notes: [
          'Tetikleyici <code>aria-haspopup</code>, <code>aria-expanded</code> ve <code>aria-controls</code> alır; menü ve öğeleri ARIA rollerini Angular Aria’dan alır.',
          'Vurgulanan öğe, en az 4,5:1 metin kontrastı sağlayan dolgun bir zemin kullanır ve aynı zamanda odak göstergesi işlevi görür. Forced colors modunda sistem vurgu renginde bir dış çizgi alır.',
          'İşaretlenebilir öğeler durumlarını <code>aria-checked</code> ile duyurur.',
          'Bir öğeyi seçmek menüyü kapatır ve odağı tetikleyiciye geri verir. Odağı tetikleyicinin ve menünün dışına taşımak da menüyü kapatır.',
          'Öğeler en az 28 piksel yüksekliğindedir; bu, WCAG 2.2’nin minimum hedef boyutunun üzerindedir.',
        ],
      },
    },
  },

  guides: {
    title: 'Kılavuzlar',
    items: {
      'getting-started': {
        title: 'Başlarken',
        description:
          'Needless UI kurulumu: Angular 22 uygulamanıza paketleri ekleyin, stil dosyasını içe aktarın ve ilk erişilebilir bileşeninizi dakikalar içinde kullanın.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI, Angular 22 ile çalışır. Bileşenler standalone direktiflerdir; bu yüzden içe aktarılacak modül yoktur.',
          },
          { kind: 'h2', id: 'install', text: 'Kurulum' },
          {
            kind: 'p',
            html: 'Angular paketini, klavye ve erişilebilirlik davranışını sağlayan Angular Aria ve CDK ile birlikte ekleyin. Stil dosyası da pakete dahildir.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Stilleri içe aktarın' },
          {
            kind: 'p',
            html: 'Stil dosyasını <code>src/styles.css</code> içinde bir kez içe aktarın. Dosya, tasarım token’larını ve tüm bileşenleri içerir.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Her şey <code>@layer nui</code> içinde gelir. Uygulamanızda <code>a { color: inherit }</code> gibi genel sıfırlamalar varsa bileşenleri geçersiz kılmamaları için onları <code>nui</code> katmanından önce tanımlanan bir katmana koyun.',
          },
          { kind: 'h2', id: 'use', text: 'Bir bileşen kullanın' },
          {
            kind: 'p',
            html: 'İhtiyacınız olan direktifleri giriş noktalarından içe aktarın ve bileşeninizin <code>imports</code> dizisine ekleyin.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Sonraki adımlar' },
          {
            kind: 'p',
            html: 'Canlı örnekler için <a href="/components">bileşenlere</a> göz atın ya da markanıza uyum sağlamak için <a href="/guides/theming">tema kılavuzunu</a> okuyun.',
          },
        ],
      },
      theming: {
        title: 'Tema özelleştirme',
        description:
          'Needless UI temasını CSS değişkenleriyle özelleştirin: açık ve koyu mod, iç içe temalar, token geçersiz kılma ve kontrastı denetlenerek üretilen marka paleti.',
        blocks: [
          {
            kind: 'p',
            html: 'Her görsel karar, W3C tasarım token’larından üretilen bir CSS değişkenidir. Bileşenler yalnızca <code>--nui-color-accent-solid</code> gibi anlamsal token’lar kullanır; bu yüzden tek bir token’ı değiştirmek onu kullanan her bileşenin görünümünü değiştirir.',
          },
          { kind: 'h2', id: 'modes', text: 'Açık ve koyu' },
          {
            kind: 'p',
            html: 'Varsayılan olarak mod, işletim sisteminin tercihine göre seçilir. <code>data-nui-theme</code> ile herhangi bir öğede modu sabitleyin ve temaları dilediğiniz gibi iç içe kullanın.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Token’ları geçersiz kılın' },
          {
            kind: 'p',
            html: 'Token’lar <code>@layer nui</code> içinde yer alır; bu yüzden uygulamanızdaki düz CSS onları geçersiz kılar. Tüm uygulama için <code>:root</code> üzerinde, uygulamanın bir bölümü içinse herhangi bir öğede tanımlayın.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Marka paleti' },
          {
            kind: 'p',
            html: 'Renk skalaları üretilir. <code>packages/tokens/scripts/palette.ts</code> içinde bir renk tonunu (hue) değiştirin ve yeniden üretin: betik her rengi sRGB’ye yeniden uydurur ve her metin ile arka plan çiftinin kontrastını yeniden denetler.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: 'Sayfa bulunamadı',
    description:
      'Bu sayfa mevcut değil. Needless UI bileşenlerine göz atın ya da ana sayfadan başlayın.',
    text: 'Bu sayfa mevcut değil ya da taşındı.',
    home: 'Ana sayfaya gidin',
    components: 'Bileşenlere göz atın',
  },

  legal: {
    translationNote:
      'Bu çeviri kolaylık sağlamak amacıyla sunulmuştur; farklılık olması hâlinde İngilizce metin esas alınır.',
    labels: { name: 'Ad', address: 'Adres', email: 'E-posta', uid: 'UID', vat: 'KDV numarası' },
    notice: {
      title: 'Yasal bilgiler',
      description:
        'needlessui.com’u kim işletiyor: işletmecinin adı, posta adresi ve e-postası; ticaret sicili ve KDV bilgileriyle birlikte.',
      operator: 'Site işletmecisi',
      legalForm: 'şahıs işletmesi',
      country: 'İsviçre',
      register: 'Ticaret sicili',
      registerEntry: 'Zug Kantonu ticaret siciline kayıtlıdır.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Sorumluluk' },
        {
          kind: 'p',
          html: 'Bu site özenle hazırlanmıştır, ancak doğru, eksiksiz veya güncel olduğuna dair hiçbir garanti verilmez. Bağlantı verilen web siteleri denetimimiz dışındadır; içeriklerinden kendi işletmecileri sorumludur.',
        },
        { kind: 'h2', id: 'license', text: 'Lisans' },
        {
          kind: 'p',
          html: 'Bu site de dahil olmak üzere Needless UI, <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT Lisansı</a> kapsamında açık kaynaklıdır.',
        },
      ],
    },
    privacy: {
      title: 'Gizlilik politikası',
      description:
        'needlessui.com kişisel verileri nasıl işler: çerez yok, analiz yok, izleme yok. Ziyaretinizde barındırma sağlayıcısının işledikleri ve haklarınız.',
      updated: 'Son güncelleme: 24 Eylül 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Bu politika, www.needlessui.com adresini ziyaret ettiğinizde hangi kişisel verilerin işlendiğini ve haklarınızın neler olduğunu açıklar. Kısacası: site çerez, analiz aracı veya izleme kullanmaz ve sizden asla kişisel veri istemez.',
        },
        { kind: 'h2', id: 'controller', text: 'Veri sorumlusu' },
        {
          kind: 'p',
          html: '<a href="/legal">Yasal bilgiler</a> sayfasında adı geçen işletmeci Angelo Lamonaca. İletişim: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Barındırma' },
        {
          kind: 'p',
          html: 'Site, Vercel Inc. (440 N Barranca Avenue #4133, Covina, CA 91723, USA) tarafından barındırılmaktadır. Bir sayfayı açtığınızda tarayıcınız her web sitesinin aldığı teknik verileri gönderir: IP adresiniz, tarih ve saat, istenen sayfa, geldiğiniz sayfa ve tarayıcınızın kullanıcı aracısı (user agent). Vercel bu verileri siteyi sunmak ve güvende tutmak için bizim adımıza işler ve yalnızca bunun gerektirdiği süre boyunca saklar. Veriler ABD’de işlenebilir; Vercel, EU-U.S. Data Privacy Framework, bunun Birleşik Krallık uzantısı (UK Extension) ve Swiss-U.S. Data Privacy Framework kapsamında sertifikalıdır. Ayrıntılar için <a href="https://vercel.com/legal/privacy-policy">Vercel’in gizlilik bildirimine</a> bakın.',
        },
        {
          kind: 'p',
          html: 'Genel Veri Koruma Tüzüğü’nün (GDPR) uygulandığı durumlarda hukuki dayanak, güvenli bir web sitesi işletmedeki meşru menfaatimizdir (GDPR m. 6/1-f).',
        },
        { kind: 'h2', id: 'storage', text: 'Çerezler ve yerel depolama' },
        {
          kind: 'p',
          html: 'Site hiçbir çerez yerleştirmez. Açık veya koyu temayı seçerseniz tarayıcınızın yerel depolaması bu tercihi bir sonraki ziyaretiniz için hatırlar. Bu bilgi cihazınızdan asla çıkmaz; silmek için yeniden “Sistem” seçeneğine dönün veya sitenin verilerini temizleyin.',
        },
        { kind: 'h2', id: 'tracking', text: 'İzleme yok' },
        {
          kind: 'p',
          html: 'Analiz araçları, reklamlar, sosyal medya eklentileri, üçüncü taraflardan gömülü içerik veya harici yazı tipleri yoktur. GitHub ve npm bağlantıları, kendi gizlilik politikaları olan sitelere götürür.',
        },
        { kind: 'h2', id: 'rights', text: 'Haklarınız' },
        {
          kind: 'p',
          html: 'Hakkınızda hangi kişisel verilerin işlendiğini sorabilir, bunların düzeltilmesini veya silinmesini isteyebilirsiniz. GDPR kapsamındaki durumlarda ayrıca işlemeye itiraz edebilir, işlemenin kısıtlanmasını talep edebilir ve verilerinizi taşınabilir bir biçimde alabilirsiniz. {email} adresine yazın. Bir denetim makamına da şikâyette bulunabilirsiniz: İsviçre’de Federal Veri Koruma ve Bilgi Komiseri’ne (FDPIC), AB’de ise kendi ülkenizin makamına.',
        },
        { kind: 'h2', id: 'changes', text: 'Değişiklikler' },
        {
          kind: 'p',
          html: 'Bu politika, site değiştikçe değişir; örneğin site yeni bir barındırma sağlayıcısına taşındığında. Aşağıdaki tarih geçerli sürümü gösterir.',
        },
      ],
    },
  },
};
