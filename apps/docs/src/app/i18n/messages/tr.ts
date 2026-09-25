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
    emergency: {
      label: 'BASMAYIN',
      cover: 'Güvenlik kapağını kaldırın',
      button: 'Basmayın',
      armed: 'Kapak açık. Lütfen bir daha düşünün.',
      falling: 'Acil durum protokolü devrede…',
      fallen: 'Yerçekimi artık kalıcı. Evreni yeniden kurmak için sayfayı yenileyin.',
      reduced:
        'Sisteminiz daha az hareket istiyor, bu yüzden yerçekimi kapalı kalıyor. Şanslısınız.',
    },
    toaster: { label: 'Bildirimler (Alt+T)', close: 'Kapat' },
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
        title: 'Gereğinden fazla özelleştirilebilir',
        text: 'Yaylar, basma efektleri, giriş animasyonları, köşe şekilleri, yarıçap ve yoğunluk: standart W3C tasarım token’ları üzerinde, tüm uygulama için <a href="/guides/customization">tek bir nitelik</a> ya da bileşen başına tek bir girdi.',
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
      kinds: {
        input: 'Girdi',
        model: 'Çift yönlü',
        output: 'Çıktı',
        method: 'Metot',
        property: 'Özellik',
      },
      texts: 'Gösterdiği veya duyurduğu her metin de bir girdidir, yani hepsini çevirebilirsiniz:',
      customization: {
        note: 'Ayarlamadığınız özelleştirme girdileri, değerlerini en yakın <code>data-nui-*</code> niteliğinden alır. Ayrıntılar için <a href="/guides/customization">özelleştirme kılavuzuna</a> bakın.',
        members: {
          motion:
            'Bileşenin hareketini belirleyen yay: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> veya <code>none</code>.',
          spring:
            '<code>{ stiffness, damping, mass }</code> biçiminde tanımlanan ve çalışma zamanında CSS’e derlenen herhangi bir yay. <code>motion</code> girdisini geçersiz kılar.',
          press:
            'Bileşen basılı tutulurken ne yaptığı: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> veya <code>none</code>.',
          enter:
            'Bileşenin ekranda nasıl belirdiği: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> veya <code>none</code>.',
          corners:
            'Köşelerin şekli: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> veya <code>square</code>.',
          radius:
            'Köşelerin ne kadar yuvarlatıldığı: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> veya <code>full</code>.',
          density:
            'Bileşenin ne kadar yer kapladığı: <code>compact</code>, <code>regular</code> veya <code>roomy</code>.',
        },
      },
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
          presses: {
            title: 'Basma efektleri',
            text: 'Her birini basılı tutun. <code>press</code> girdisi düğmenin basılı tutulurken ne yaptığını, <code>motion</code> girdisi ise hangi yayla geri döndüğünü belirler. Herhangi bir öğeye eklenen <code>data-nui-press</code> niteliği, efekti o öğenin içindeki her şeye uygular.',
          },
          shapes: {
            title: 'Köşeler, yarıçap ve yoğunluk',
            text: '<code>corners</code> köşelerin şeklini, <code>radius</code> boyutlarını, <code>density</code> ise düğmenin kapladığı alanı değiştirir; düğme hiçbir zaman 24px hedef boyutunun altına inmez. <code>corner-shape</code> desteği olmayan tarayıcılar köşeleri yuvarlak çizer.',
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
          entrances: {
            title: 'Giriş animasyonları',
            text: 'Her düğme aynı diyaloğu farklı bir <code>enter</code> hazır ayarıyla ve <code>bouncy</code> yayıyla açar. Nasıl belirirse belirsin, hızla solarak kaybolur.',
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
          entrances: {
            title: 'Giriş animasyonları ve yaylar',
            text: 'Her menü bir <code>enter</code> hazır ayarını bir <code>motion</code> yayıyla eşleştirir ve açıldığı taraftan büyüyerek belirir. Alt menüler ikisini de devralır.',
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

      avatar: {
        name: 'Avatar',
        title: 'Angular için avatar bileşeni',
        summary: 'Bir kişinin fotoğrafı ya da her zaman ona ait bir renk üzerinde baş harfleri.',
        description:
          'Fotoğraf yoksa baş harfleri gösteren Angular avatarı: her ada sabit bir renk, durum noktaları ve gruplar; hepsi her temada okunaklı.',
        apiDescription:
          'Needless UI avatarının API referansı: ad, fotoğraf, boyut, şekil ve durum girdileriyle nuiAvatar ve nuiAvatarGroup.',
        a11yDescription:
          'Needless UI avatarının erişilebilirliği: görsel rolü ve adı, dekoratif avatarlar ve en az 4,5:1 kontrastlı baş harfler.',
        overview: [
          '<code>nuiAvatar</code> bileşeni bir fotoğraf gösterir; fotoğraf yoksa ya da yüklenemezse kişinin baş harflerini gösterir. Baş harfler addan hesaplanan bir rengin üzerinde durur; böylece aynı kişi her yerde aynı renkte görünür.',
          'Her renk tonunun açıklığı ve doygunluğu, ad ve tema ne olursa olsun beyaz baş harflerin kontrast oranını 4,5:1’in üzerinde tutacak şekilde sınırlandırılır.',
        ],
        examples: {
          people: {
            title: 'Baş harfler, fotoğraflar ve durum',
            text: '<code>src</code> yoksa baş harfler ve renk <code>name</code> değerinden gelir. <code>status</code> bir durum noktası ekler.',
          },
          group: {
            title: 'Gruplar, boyutlar ve şekiller',
            text: '<code>nuiAvatarGroup</code>, bir sıra avatarı üst üste bindirir. <code>size</code> girdisi <code>sm</code>, <code>md</code> veya <code>lg</code> değerini alır; <code>shape="square"</code> ise ekiplere ve uygulamalara yakışır.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Kişinin adıyla adlandırılan bir fotoğraf ya da baş harfler.',
            members: {
              name: 'Kişinin adı. Erişilebilir ad, baş harfler ve renk bu değerden türetilir.',
              src: 'Fotoğraf URL’si. Fotoğraf yüklenemezse yerine baş harfler gösterilir.',
              size: 'Boyut: <code>sm</code>, <code>md</code> veya <code>lg</code>.',
              shape: '<code>circle</code> veya <code>square</code>.',
              status:
                'Durum noktası: <code>online</code>, <code>away</code>, <code>busy</code> veya <code>offline</code>.',
              label:
                'Addan fazlasını söyleyen bir erişilebilir ad; örneğin “Ada Lovelace, çevrimiçi”.',
              decorative:
                'Avatarı yardımcı teknolojilerden gizler; görünür adın yanındaki avatarlar için.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Üst üste binen avatarlardan oluşan bir sıra. <code>aria-label</code> ile adlandırın.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar, kişinin adıyla adlandırılmış bir görseldir (<code>role="img"</code>). Kişinin adı yanında zaten görünüyorsa <code>decorative</code> ayarlayın; böylece ekran okuyucu kullanıcıları adı iki kez duymaz.',
          'Durum noktası yalnızca görseldir. Durum önemliyse onu <code>label</code> içine yazın.',
          'Baş harfler, üretilen her renkte en az 4,5:1 kontrast oranını korur.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Angular için breadcrumb bileşeni',
        summary: 'Mevcut sayfaya giden sayfa yolu.',
        description:
          'Yerel nav ve liste üzerine kurulu erişilebilir Angular breadcrumb bileşeni: sağdan sola metinde yansıyan CSS ayırıcıları, uzun yollarda kaydırma.',
        apiDescription:
          'Needless UI breadcrumb bileşeninin API referansı: nuiBreadcrumbs direktifi ve landmark etiketi.',
        a11yDescription:
          'Needless UI breadcrumb bileşeninin erişilebilirliği: gezinme landmark’ı, liste semantiği, mevcut sayfa ve hedef boyutları.',
        overview: [
          'Breadcrumb, bir sayfanın sitedeki yerini gösterir. <code>nuiBreadcrumbs</code> direktifi yerel bir <code>&lt;nav&gt;</code> öğesini ve içindeki listeyi biçimlendirir; son öğe mevcut sayfadır ve <code>aria-current="page"</code> ile işaretlenir.',
          'Kapsayıcısından uzun bir yol, alt satıra geçmek yerine yatay olarak kayar. Başlangıçta sona kaydırılmış olarak gelir; ötesinde görülecek öğe bulunan kenarlar soluklaşır.',
        ],
        examples: {
          trail: {
            title: 'Sayfa yolu',
            text: 'Üst sayfalar için bağlantılar, ardından <code>aria-current="page"</code> ile düz metin olarak mevcut sayfa.',
          },
          long: {
            title: 'Uzun yollar',
            text: 'Dar bir kapsayıcıda yol kaydırılabilir ve başlangıçta mevcut sayfa görünür.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary:
              'Bir <code>&lt;nav&gt;</code> öğesini ve listesini breadcrumb olarak biçimlendirir.',
            members: { label: 'Gezinme landmark’ının erişilebilir adı.' },
          },
        },
        keyboard: [['Tab', 'Yoldaki bir sonraki bağlantıya geçer.']],
        notes: [
          'Düz bir liste içeren bir gezinme landmark’ıdır; bu sayede ekran okuyucular yolda kaç sayfa olduğunu duyurur.',
          'Ayırıcılar CSS ile çizilir; bu yüzden sesli okunmaz ve sağdan sola metinde ters döner.',
          'Her bağlantı en az 24px yüksekliğindedir.',
        ],
      },

      empty: {
        name: 'Boş durum',
        title: 'Angular için boş durum bileşeni',
        summary: 'Gösterilecek bir şey yokken ne gösterileceği ve ne yapılabileceği.',
        description:
          'Görsel, başlık, kısa bir açıklama ve eylemler içeren Angular boş durum bileşeni; ayrıca hafifçe süzülen dört yerleşik çizim.',
        apiDescription:
          'Needless UI boş durum bileşeninin API referansı: nuiEmpty ile medya, başlık, açıklama ve eylem parçaları.',
        a11yDescription:
          'Needless UI boş durum bileşeninin erişilebilirliği: dekoratif görseller, anlamlı başlıklar ve azaltılmış hareket.',
        overview: [
          'Boş durum, henüz içinde hiçbir şey olmayan bir listenin, tablonun ya da sayfanın yerini alır. Nedenini açıklar ve bir sonraki adımı önerir.',
          'Medya parçasına kendi görselinizi koyabilir ya da yerleşik bir görsel çizdirebilirsiniz: <code>search</code>, <code>inbox</code>, <code>files</code> veya <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Sonuç yok',
            text: 'Ne olduğunu söyleyen bir başlık, bir satırlık yardım ve çıkış yolu sunan eylemler.',
          },
          pictures: {
            title: 'Yerleşik görseller',
            text: '<code>nuiEmptyMedia</code> üzerinde <code>illustration</code> ayarlayın. Görseller temaya uyar ve hareket azaltılmadıkça süzülür.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Kapsayıcı: ortalanmış bir sütun.', members: {} },
          NuiEmptyMedia: {
            summary: 'Yardımcı teknolojilerden gizlenen görsel.',
            members: {
              illustration:
                'Yerleşik bir görsel: <code>search</code>, <code>inbox</code>, <code>files</code> veya <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Başlık. Sayfaya uyan başlık düzeyini kullanın.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Bir satırlık açıklama.', members: {} },
          NuiEmptyActions: { summary: 'Bir düğme satırı.', members: {} },
        },
        keyboard: [],
        notes: [
          'Görsel dekoratiftir (<code>aria-hidden</code>): mesajı başlık ve açıklama iletir.',
          'Başlık için, sayfanın ana hattına uyan düzeyde bir başlık öğesi kullanın.',
          'Kullanıcı azaltılmış hareketi tercih ettiğinde yerleşik görseller süzülmeyi bırakır.',
        ],
      },

      'number-field': {
        name: 'Sayı alanı',
        title: 'Angular için sayı alanı bileşeni',
        summary: 'Adım düğmeleri olan, her yerel ayara göre biçimlendirilen bir sayı alanı.',
        description:
          'Erişilebilir Angular sayı alanı: adım düğmeli bir spinbutton, klavyeyle adımlama, min ve max, para birimi, yüzde ve birimler için yerel biçimler.',
        apiDescription:
          'Needless UI sayı alanının API referansı: nuiNumberField, min, max, step ve format girdileriyle nuiNumberInput ve nuiNumberStep.',
        a11yDescription:
          'Needless UI sayı alanının klavye etkileşimi ve erişilebilirliği: spinbutton rolü, ok ve Page tuşları, adım düğmeleri.',
        overview: [
          'Sayı alanı, bir sayı tutan metin alanıdır. Sayıyı yerel ayara göre biçimlendirerek gösterir, yazılan metni aynı biçimde geri okur ve odak ayrıldığında değeri <code>min</code> ile <code>max</code> arasında en yakın <code>step</code> katına yuvarlar.',
          'Farklı yazı sistemlerinin rakamlarını ve ayırıcılarını da okur: Arap-Hint, Fars ve Devanagari rakamları, basamak ayırıcısı olarak boşluklar ve noktalar, ayrıca her tür eksi işareti. Bir adım düğmesi basılı tutulduğunda adım, giderek hızlanarak tekrarlanır.',
        ],
        examples: {
          guests: {
            title: 'Adım düğmeleri',
            text: 'Her iki yanda, <code>min</code> ve <code>max</code> değerlerinde devre dışı kalan düğmeler. Ok tuşları da değeri adım adım değiştirir.',
          },
          formats: {
            title: 'Para birimi ve yüzde',
            text: '<code>format</code> girdisine <code>Intl.NumberFormat</code> seçeneklerini verin ve bir <code>locale</code> belirleyin. Değer düz bir sayı olarak kalır.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Alanı adım düğmeleriyle gruplar.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Bir sayı tutan, ARIA spinbutton olarak çalışan metin alanı.',
            members: {
              value: 'Sayı; alan boşken <code>null</code>. Formlarla da çalışır.',
              min: 'İzin verilen en küçük değer.',
              max: 'İzin verilen en büyük değer.',
              step: 'Bir adımın değeri ne kadar değiştirdiği. Odak ayrıldığında değer, adımın en yakın katına yuvarlanır.',
              format:
                "<code>Intl.NumberFormat</code> seçenekleri; örneğin <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Sayıları biçimlendirmek ve okumak için kullanılan yerel ayar.',
              disabled: 'Alanı ve düğmelerini devre dışı bırakır.',
              stepBy: 'Değeri belirtilen sayıda adım artırır (pozitif) veya azaltır (negatif).',
            },
          },
          NuiNumberStep: {
            summary: 'Bir adım düğmesi. Basılı tutulduğunda tekrarlar.',
            members: {
              nuiNumberStep: '<code>1</code> bir adım artırır, <code>-1</code> bir adım azaltır.',
              label: 'Erişilebilir ad. Varsayılan değer: “Increase” veya “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Yukarı ve aşağı ok', 'Değeri bir adım artırır veya azaltır.'],
          ['Page Up ve Page Down', 'Değeri on adım birden değiştirir.'],
          ['Home ve End', 'En küçük veya en büyük değere gider.'],
          ['Enter', 'Yazılan değeri uygular.'],
        ],
        notes: [
          'Alan, <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code> ve biçimlendirilmiş değeri taşıyan <code>aria-valuetext</code> ile bir <code>spinbutton</code> öğesidir.',
          'Tuşlar aynı işi yaptığı için adım düğmeleri sekme sırasının dışında kalır; yine de adları vardır ve <code>aria-controls</code> ile alana bağlıdır.',
          'Alanı <code>aria-label</code> veya bir <code>&lt;label&gt;</code> ile etiketleyin.',
        ],
      },

      otp: {
        name: 'OTP alanı',
        title: 'Angular için OTP ve doğrulama kodu alanı',
        summary: 'Tek bir gerçek alan üzerinde, ayrı kutucuklarda doğrulama kodları.',
        description:
          'Erişilebilir Angular OTP alanı: kutucukların altında tek yerel alan, SMS’ten otomatik doldurma, WebOTP, akıllı yapıştırma, gruplar, maskeleme, hata sarsıntısı.',
        apiDescription:
          'Needless UI OTP alanının API referansı: uzunluk, desen, gruplar ve maskeleme girdileriyle nuiOtp; WebOTP destekli nuiOtpInput.',
        a11yDescription:
          'Needless UI OTP alanının klavye kullanımı ve erişilebilirliği: etiketli tek metin alanı, görünür odak halkası ve otomatik doldurma.',
        overview: [
          'OTP alanı bir kutucuk sırası gibi görünür, ancak altında tek bir yerel <code>&lt;input&gt;</code> vardır. SMS ile otomatik doldurma (<code>autocomplete="one-time-code"</code>), yapıştırma, parola yöneticileri, formlar ve ekran okuyucular sıradan bir metin alanı görür.',
          'Yapıştırılan kodlar temizlenir; böylece hem “123-456” hem de “123 456” çalışır, desenin izin vermediği karakterler ise reddedilir. Android’de <code>webOtp</code>, SMS gelir gelmez kodu doldurur.',
        ],
        examples: {
          verify: {
            title: 'Doğrulama',
            text: '<code>(completed)</code>, son kutucuk dolduğunda tetiklenir. Bir kodu reddetmek için alana <code>aria-invalid</code> ekleyin: kutucuklar kırmızıya döner ve sarsılır.',
          },
          letters: {
            title: 'Harfler, gruplar ve maskeleme',
            text: '<code>pattern="alphanumeric"</code> harfleri de kabul eder, <code>[groups]</code> ayırıcılar ekler, <code>masked</code> ise noktalar çizer.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Kutucukları çizer ve alanı sarmalar.',
            members: {
              length: 'Karakter sayısı.',
              pattern:
                '<code>digits</code> ya da harfler ve rakamlar için <code>alphanumeric</code>.',
              groups: 'Aralarına ayırıcı çizilen grup boyutları; örneğin <code>[3, 3]</code>.',
              masked: 'Karakterler yerine noktalar çizer.',
              completed: 'Son kutucuk her dolduğunda kodu yayar.',
            },
          },
          NuiOtpInput: {
            summary: 'Gerçek alan. Tek kullanımlık bir kodun gerektirdiği nitelikleri alır.',
            members: {
              webOtp: 'Desteklenen tarayıcılarda, gelen SMS’teki kodu WebOTP API’siyle doldurur.',
            },
          },
        },
        keyboard: [
          ['Rakamlar veya harfler', 'Geçerli kutucuğu doldurur ve bir sonrakine geçer.'],
          ['Backspace', 'İmleçten önceki karakteri siler.'],
          [
            'Sol ve sağ ok',
            'Bir kutucuk ilerler; dolu kutucuk seçilir, böylece yazdığınız karakter onun yerini alır.',
          ],
          ['Yapıştırma', 'Kopyalanan koddan kutucukları doldurur.'],
        ],
        notes: [
          'Ekran okuyucular tek bir metin alanıyla karşılaşır. Alanı <code>aria-label</code> veya bir <code>&lt;label&gt;</code> ile etiketleyin.',
          'Kutucuklar yardımcı teknolojilerden gizlenir; düzenlenen kutucuk odak halkasını gösterir.',
          'Azaltılmış hareket açıkken imleç yanıp sönmez, kutucuklar da zıplamaz veya sarsılmaz.',
        ],
      },

      rating: {
        name: 'Puanlama',
        title: 'Angular için yıldızlı puanlama bileşeni',
        summary: 'Gerçek radyo düğmeleri üzerinde, puan vermek için yıldızlar.',
        description:
          'Yerel radyo düğmeleriyle erişilebilir Angular yıldızlı puanlama: klavye ve form desteği, üzerine gelince önizleme, temizleme, kesirli salt okunur gösterim.',
        apiDescription:
          'Needless UI puanlama bileşeninin API referansı: değer, max, salt okunur ve temizlenebilir modlar, çevrilebilir etiketlerle nuiRating.',
        a11yDescription:
          'Needless UI puanlama bileşeninin klavye etkileşimi ve erişilebilirliği: adlandırılmış radyo grubu, etiketli yıldızlar, salt okunur görsel.',
        overview: [
          'Puanlama, yıldız olarak çizilen yerel radyo düğmelerinden oluşan bir gruptur. Ok tuşları, formlar ve ekran okuyucular her radyo grubunda olduğu gibi çalışır; yıldızları CSS doldurur ve işaretçinin altındaki yeni puanı önizler.',
          'Salt okunur modda 4,3 gibi bir ortalama da dahil olmak üzere her kesirli değeri gösterir.',
        ],
        examples: {
          pick: {
            title: 'Puan verme',
            text: '<code>[(value)]</code> ya da bir form bağlayın. <code>clearable</code> ile aynı yıldızı yeniden seçmek puanı temizler.',
          },
          average: {
            title: 'Ortalamayı gösterme',
            text: '<code>readonly</code>, yıldızları herhangi bir kesre kadar doldurur ve görseli “Rated 4.3 out of 5” olarak adlandırır.',
          },
        },
        api: {
          NuiRating: {
            summary: 'Yıldızlardan oluşan bir radyo grubu ya da bir puanın salt okunur görseli.',
            members: {
              value: 'Puan ya da <code>null</code>. Formlarla da çalışır.',
              max: 'Yıldız sayısı.',
              readonly: 'Puan istemek yerine değeri, kesirli olsa bile gösterir.',
              disabled: 'Tüm yıldızları devre dışı bırakır.',
              clearable: 'Geçerli yıldızı yeniden seçmek puanı temizler.',
              name: 'Radyo düğmelerinin ortak adı. Varsayılan olarak otomatik üretilir.',
              starLabel: 'Her yıldızın erişilebilir adı; yıldızın değerini alan bir fonksiyon.',
              readonlyLabel: 'Salt okunur moddaki erişilebilir ad.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Gruba, işaretli yıldıza geçer.'],
          ['Ok tuşları', 'Puanı değiştirir.'],
          ['Boşluk', 'Odaktaki yıldızı işaretler.'],
        ],
        notes: [
          'Her yıldız, “3 stars” gibi bir adı olan yerel bir radyo düğmesidir. Grubu <code>aria-label</code> ile adlandırın.',
          'Salt okunur modda puanlama, “Rated 4.3 out of 5” adını taşıyan bir görseldir (<code>role="img"</code>).',
          'Yıldızlar CSS maskeleriyle çizilir; bu sayede forced colors moduna uyar.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Angular için skeleton yükleyici bileşeni',
        summary: 'İçerik yüklenirken düzeni koruyan yer tutucular.',
        description:
          'Metin, daire ve bloklar için Angular skeleton yükleyicileri: tüm sayfayı tek seferde tarayan bir parıltı, azaltılmış hareket açıkken ise hiç parıltı yok.',
        apiDescription:
          'Needless UI skeleton bileşeninin API referansı: nuiSkeleton direktifi ve metin, daire ve blok şekilleri.',
        a11yDescription:
          'Needless UI skeleton bileşeninin erişilebilirliği: gizli yer tutucular, aria-busy bölgeleri, azaltılmış hareket ve forced colors.',
        overview: [
          'Skeleton’lar hâlâ yüklenen içeriğin şeklini korur; böylece içerik geldiğinde sayfa zıplamaz. Boyutlarını CSS ile belirleyin.',
          'Parıltı görüntü alanına sabitlenmiştir: boyutu veya konumu ne olursa olsun, tek bir ışık huzmesi sayfadaki tüm skeleton’ların üzerinden aynı anda geçer.',
        ],
        examples: {
          card: {
            title: 'Kart yükleme',
            text: 'Bir profilin yerini tutan satırlar, bir daire ve bir blok. Kart yüklenirken <code>aria-busy</code> durumundadır.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Yardımcı teknolojilerden gizlenen bir yer tutucu.',
            members: {
              shape: '<code>text</code> (bir satır), <code>circle</code> veya <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton’lar ekran okuyuculardan gizlenir. Yüklenen bölgeye <code>aria-busy="true"</code> ekleyin ve içerik geldiğinde kaldırın.',
          'Kullanıcı azaltılmış hareketi tercih ettiğinde parıltı gösterilmez.',
          'Forced colors modunda her skeleton bir dış çizgi alır.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Angular için toast bildirimleri',
        summary: 'Üst üste yığılan, kaydırılarak kapatılan ve odağı asla çalmayan kısa mesajlar.',
        description:
          'Erişilebilir Angular toast bildirimleri: üst katmanda bir yığın, promise bildirimleri, geri alma eylemleri, kaydırarak kapatma ve duraklayan zamanlayıcılar.',
        apiDescription:
          'Needless UI toast bildirimlerinin API referansı: NuiToaster servisi, seçenekleri ve promise bildirimleri, ayrıca nui-toaster bölgesi.',
        a11yDescription:
          'Needless UI toast bildirimlerinin klavye etkileşimi ve erişilebilirliği: duyurular, Alt+T kısayolu, Esc ve duraklayan zamanlayıcılar.',
        overview: [
          'Toast bildirimleri, akışı kesmeden az önce olanı onaylar ya da Geri al gibi bir eylem sunar. Uygulama kabuğuna bir <code>&lt;nui-toaster&gt;</code> yerleştirin, ardından <code>NuiToaster</code> servisini her yerden çağırın.',
          'Bildirimler en yenisinin arkasında yığılır ve üzerine gelindiğinde ya da odaklanıldığında yelpaze gibi açılır; bunların hepsi motion yayıyla olur. Yana doğru kaydırmak bir bildirimi atar. Fare yığının üzerindeyken veya yığın odaktayken, ayrıca sayfa arka plandayken zamanlayıcılar duraklar.',
        ],
        examples: {
          tones: {
            title: 'Tonlar',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> ve <code>danger()</code>. Danger bildirimleri daha uzun süre kalır ve öncelikli (assertive) olarak duyurulur.',
          },
          actions: {
            title: 'Eylemler ve promise’ler',
            text: 'Bir <code>action</code>, Geri al gibi bir düğme ekler. <code>promise()</code> önce bir yükleme göstergesi gösterir, ardından sonuca dönüşür.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Bildirimleri gösteren servis. İstediğiniz yere enjekte edin.',
            members: {
              toasts: 'Ekrandaki tüm bildirimler, en yenisi önce.',
              show: 'Bir bildirim gösterir. Bir başlık ya da açıklama, ton, süre, eylem veya id içeren seçenekler verin.',
              success: 'Bir başarı bildirimi gösterir.',
              warning: 'Bir uyarı bildirimi gösterir.',
              danger:
                'Bir hata (danger) bildirimi gösterir. 8 saniye kalır ve öncelikli olarak duyurulur.',
              promise:
                'Promise sonuçlanana kadar bir yükleme bildirimi, ardından başarı ya da hata mesajını gösterir.',
              dismiss: 'Bir bildirimi ya da hepsini kapatır.',
            },
          },
          NuiToasterRegion: {
            summary: 'Bildirimlerin göründüğü bölge. Uygulama kabuğuna bir kez yerleştirin.',
            members: {
              position:
                'Görüntü alanının köşesi veya kenarı. Başlangıç ve bitiş, metin yönünü izler.',
              expanded: 'Yığını yelpaze gibi açık tutar.',
              label: 'Bölgenin erişilebilir adı. Bölgeye nasıl ulaşılacağını belirtin.',
              closeLabel: 'Kapatma düğmelerinin erişilebilir adı.',
              hotkey:
                'Alt ile birlikte odağı en yeni bildirime taşıyan tuş, <code>KeyboardEvent.code</code> biçiminde.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Odağı en yeni bildirime taşır.'],
          ['Tab', 'Bildirimler, eylemleri ve kapatma düğmeleri arasında gezinir.'],
          ['Esc', 'Odaktaki bildirimi kapatır.'],
        ],
        notes: [
          'Her bildirim göründüğünde duyurulur: nazikçe (polite) ya da danger için öncelikli olarak (assertive). Bildirimler odağı asla almaz.',
          'Fare yığının üzerindeyken veya yığın odaktayken, ayrıca sayfa gizliyken zamanlayıcılar duraklar; bir promise’i bekleyen bildirimlerin süresi hiç dolmaz.',
          'Kullanıcının üzerinde işlem yapması gereken her şey bildirimin dışında da bulunmalıdır.',
          'Azaltılmış hareket açıkken bildirimlerde animasyon olmaz, kaydırarak kapatma da çalışmaz; zamanlayıcı çizgisi gizlenir.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Angular için combobox ve otomatik tamamlama',
        summary: 'Siz yazarken seçenek öneren bir metin alanı.',
        description:
          'Erişilebilir Angular combobox: vurgulu bulanık arama, çip olarak çoklu değer, yazılan metinden yeni değerler ve sunucudan gelen sonuçlar.',
        apiDescription:
          'Needless UI combobox bileşeninin API referansı: value, values, multiple, create, filtering, loading ve clearable girdileriyle nui-combobox, özel satırlar.',
        a11yDescription:
          'Needless UI combobox bileşeninin klavye kullanımı ve erişilebilirliği: öneri listeli düzenlenebilir combobox, aria-activedescendant, çipler ve IME girişi.',
        overview: [
          'Combobox, öneri listesi olan bir metin alanıdır. Aksanları yok sayan bulanık bir arama yapar: en iyi eşleşmeler önce gelir, eşleşen harfler işaretlenir. Select ile aynı <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> nesnelerini alır.',
          '<code>multiple</code> ile seçilen seçenekler metnin önünde çip olur; <code>create</code> ise yazılan metni yeni bir değere dönüştürür. Sunucudan gelen sonuçlar için <code>filtering</code> girdisini kapatın, aramayı <code>(queryChange)</code> içinde yapın ve beklerken <code>loading</code> ayarlayın.',
        ],
        examples: {
          country: {
            title: 'Arama',
            text: 'Eşleşen harflerin yan yana olması gerekmez; <code>keywords</code> da hesaba katılır. <code>clearable</code> bir temizleme düğmesi ekler ve değerin Esc ile temizlenmesini sağlar.',
          },
          tags: {
            title: 'Çipler ve yeni değerler',
            text: '<code>multiple</code> çipleri gösterir ve <code>[(values)]</code> bağlar. Metin henüz bir seçenek değilse <code>create</code> onu eklemeyi önerir.',
          },
          people: {
            title: 'Sunucu sonuçları',
            text: 'Liste, sunucunun gönderdiklerini filtrelemeden gösterir ve beklerken bir yükleme satırı görüntüler. Yeni sonuçlar geldiğinde seçilen etiketler korunur.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Siz yazarken seçenek öneren bir metin alanı.',
            members: {
              options:
                '<a href="/components/select/api#NuiOption"><code>NuiOption</code></a> nesneleri biçiminde seçenekler.',
              value: 'Seçilen değer ya da <code>null</code>. Formlarla da çalışır.',
              values: '<code>multiple</code> ile seçilen değerler.',
              multiple:
                'Birden fazla seçeneğin seçilmesine izin verir; seçilenler çip olarak gösterilir.',
              create:
                'Yazılan metinden bir değer oluşturur. Liste, seçenekler arasında olmayan metni eklemeyi önerir.',
              filtering:
                'Siz yazarken seçenekleri filtreler. Filtrelemeyi sunucu yapıyorsa kapatın.',
              loading: 'Sonuçlar beklenirken bir yükleme satırı gösterir.',
              clearable: 'Değeri temizleyen bir düğme ekler ve Esc ile de temizlenmesini sağlar.',
              placeholder: 'Alan boşken gösterilen metin.',
              label: 'Alanı adlandıran bir <code>&lt;label&gt;</code> yoksa erişilebilir ad.',
              inputId: '<code>&lt;label for&gt;</code> için metin alanının id’si.',
              disabled: 'Alanı devre dışı bırakır.',
              compareWith:
                'Nesne olan değerlerde, iki değerin aynı seçenek olup olmadığını belirler.',
              displayWith:
                'Seçenekler arasında olmayan bir değerin metni; örneğin seçenekler yüklenmeden önce ayarlanan bir değer.',
              virtual:
                'Yalnızca görünen satırları render eder: her zaman, hiçbir zaman ya da <code>auto</code> ile 200 satırı aşınca.',
              queryChange: 'Sunucu araması için metni yazıldıkça yayar.',
              openChange: 'Liste açıldığında veya kapandığında tetiklenir.',
              show: 'Listeyi açar.',
              hide: 'Listeyi kapatır.',
              clear: 'Değeri ve metni temizler.',
              focus: 'Odağı metin alanına taşır.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Her satırı kendiniz çizmek için bileşenin içindeki bir <code>ng-template</code> üzerine koyun. Bağlamda seçenek ve satırı bulunur.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Kendi satırlarınız için bir seçeneğin etiketini (eşleşen harfler işaretli), açıklamasını ve yolunu çizer.',
            members: { nuiOptionText: 'Şablon bağlamındaki satır.' },
          },
        },
        keyboard: [
          ['Aşağı ve yukarı ok', 'Listeyi açar, ardından seçenekler arasında gezinir.'],
          ['Page Down ve Page Up', 'On seçenek atlar.'],
          ['Enter', 'Etkin seçeneği seçer.'],
          ['Alt + aşağı veya yukarı ok', 'Listeyi açar veya kapatır.'],
          ['Esc', 'Listeyi kapatır; ardından metni ya da temizlenebiliyorsa değeri temizler.'],
          ['Backspace', 'Boş alanda son çipi kaldırır.'],
          [
            'Sol ok',
            'Metnin başından (sağdan sola metinde sağ ok) çiplere geçer. Orada Backspace veya Delete bir çipi kaldırır.',
          ],
        ],
        notes: [
          'Metin alanı <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> ve <code>aria-controls</code> taşıyan bir <code>combobox</code> öğesidir. Odak alanda kalır; <code>aria-activedescendant</code> etkin seçeneği gösterir.',
          'Çipler adlandırılmış bir listedir; her kaldırma düğmesi, “Remove Italy” gibi, ait olduğu çipin adını taşır.',
          '“No matches” ve yükleme satırı durum mesajlarıdır; bu yüzden ekran okuyucular onları duyurur.',
          'Çince veya Japonca gibi dillerde giriş yöntemi (IME) bileşimini onaylayan tuşlar giriş yöntemine bırakılır.',
        ],
      },
      command: {
        name: 'Komut paleti',
        title: 'Angular için komut paleti bileşeni',
        summary: 'Uygulamanızdaki her komut, bir tuş uzağınızda.',
        description:
          'Erişilebilir Angular komut paleti: her yerden ⌘K, iç içe sayfalara uzanan bulanık arama, gruplar ve her platformun yazımına uygun kısayollar.',
        apiDescription:
          'Needless UI komut paletinin API referansı: commands, hotkey, bindShortcuts ve loop girdileriyle nui-command-palette ve NuiCommand yapısı.',
        a11yDescription:
          'Needless UI komut paletinin klavye kullanımı ve erişilebilirliği: modal diyalog, combobox arama alanı, aria-activedescendant ve sayfa gezintisi.',
        overview: [
          'Komut paleti, modal bir diyalog içinde uygulamanızın komutlarında arama yapan bir alandır. ⌘K onu her yerden açar (Windows ve Linux’ta Ctrl+K). Bir komut seçtiğinizde palet kapanır, ardından komutu çalıştırır.',
          'Komutların bir grubu, açıklaması, anahtar kelimeleri ve her platformun simgeleriyle gösterilen bir kısayolu olabilir. <code>children</code> içeren bir komut, başka komutlardan oluşan bir sayfa açar; en üst düzeyden yapılan arama sayfaların içine de ulaşır.',
        ],
        examples: {
          palette: {
            title: 'Komutlar ve sayfalar',
            text: 'Gruplar, kısayollar, devre dışı bir komut ve iki sayfa. <code>(run)</code> neyin çalıştığını bildirir; komutun kendi <code>run</code> fonksiyonu da çalışır.',
          },
          people: {
            title: 'Özel satırlar',
            text: 'Her satırı bir <code>nuiOptionTemplate</code> çizer, <code>nuiOptionText</code> ise işaretli eşleşmeleri korur. <code>[hotkey]="null"</code>, ⌘K kısayolunu yukarıdaki palete bırakır.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Komutlarınızda arama yapan bir alan içeren modal diyalog.',
            members: {
              commands: '<code>NuiCommand</code> nesneleri biçiminde komutlar.',
              open: 'Paletin açık olup olmadığı.',
              hotkey:
                'Paleti her yerden açıp kapatan kısayol; kısayol istemiyorsanız <code>null</code>. <code>mod</code>, Apple cihazlarında ⌘, diğerlerinde ise Ctrl tuşudur.',
              bindShortcuts: 'Komutları, sayfanın her yerinde kendi kısayollarıyla da çalıştırır.',
              loop: 'Son komutta aşağı ok ilk komuta, ilk komutta yukarı ok son komuta gider.',
              filtering: 'Siz yazarken filtreler. Komutları sunucu filtreliyorsa kapatın.',
              loading: 'Sonuçlar beklenirken bir yükleme satırı gösterir.',
              hints: 'Kullanılacak tuşları altta gösterir.',
              virtual:
                'Yalnızca görünen satırları render eder: her zaman, hiçbir zaman ya da <code>auto</code> ile 200 satırı aşınca.',
              label: 'Diyaloğun ve arama alanının erişilebilir adı.',
              placeholder: 'Boş arama alanında gösterilen metin.',
              run: 'Çalışan her komutu yayar.',
              queryChange: 'Sunucu araması için metni yazıldıkça yayar.',
              show: 'Paleti açar.',
              hide: 'Paleti kapatır.',
              toggle: 'Paleti açar ya da kapatır.',
              back: 'Bir önceki sayfaya döner.',
            },
          },
          NuiCommand: {
            summary: 'Tek bir komut ya da bir komut sayfası.',
            members: {
              label: 'Gösterilen ve aranan metin.',
              description: 'Etiketin altındaki ikincil metin.',
              group: 'Aynı gruptaki komutlar o başlığın altında listelenir.',
              keywords: 'Aramanın eşleştirdiği ek sözcükler; örneğin eş anlamlılar.',
              shortcut: 'Komutla birlikte gösterilen tuşlar; örneğin <code>mod+shift+p</code>.',
              disabled: 'Gösterilir ama çalıştırılamaz.',
              children:
                'Bir alt düzeydeki komutlar: bu komutu seçmek onları bir sayfa olarak açar.',
              run: 'Seçildiğinde, palet kapandıktan sonra çalışır.',
              id: 'Kendi kullanımınız için; örneğin komutları <code>(run)</code> içinde ayırt etmek.',
            },
          },
        },
        keyboard: [
          ['⌘K veya Ctrl+K', 'Paleti açar veya kapatır.'],
          ['Aşağı ve yukarı ok', 'Komutlar arasında gezinir; uçlarda başa veya sona döner.'],
          ['Page Down ve Page Up', 'On komut atlar.'],
          ['Enter', 'Etkin komutu çalıştırır ya da sayfasını açar.'],
          ['Esc', 'Bir sayfa geri gider; en üst düzeyde paleti kapatır.'],
          ['Backspace', 'Bir sayfadaki boş alanda geri gider.'],
        ],
        notes: [
          'Yerel bir modal <code>&lt;dialog&gt;</code> öğesidir: arkadaki sayfa etkileşime kapanır, odak içeride kalır ve palet kapanınca odak eski yerine döner.',
          'Arama alanı, etkin komutu <code>aria-activedescendant</code> ile gösteren bir <code>combobox</code> öğesidir. Bir sayfadayken o sayfanın adını alır.',
          'Kısayol tuşları her seçeneğin içinde metin olarak bulunur; bu yüzden ekran okuyucular onları okur. Alttaki tuş ipuçları yardımcı teknolojilerden gizlenir.',
          'Ctrl, Alt veya ⌘ içermeyen kısayollar, bir alana yazarken çalışmaz.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Angular için popover ve hovercard bileşenleri',
        summary: 'Bir düğmenin yanında açılan paneller ve üzerine gelince zengin araç ipuçları.',
        description:
          'Yerel popover API’si tabanlı erişilebilir Angular popover ve hovercard: taraf değiştiren ve izleyen konum, oklar, dışarı tıklayınca kapanma ve gecikmeler.',
        apiDescription:
          'Needless UI popover bileşeninin API referansı: side, align, offset ve arrow girdileriyle nuiPopover ve nuiHovercard, ayrıca tetikleyici direktifleri.',
        a11yDescription:
          'Needless UI popover ve hovercard bileşenlerinin klavye kullanımı ve erişilebilirliği: dialog ve tooltip rolleri, odağın dönmesi, Esc ve WCAG 1.4.13.',
        overview: [
          'Popover, bir düğmenin yanında açılan ve etkileşimli içerik için kullanılan küçük bir paneldir: filtreler, kısa bir form, renk seçici. Yerel bir <code>popover="auto"</code> olduğundan tarayıcı onu Esc’e basıldığında veya dışarı tıklandığında kapatır, odağı geri verir ve sekme sırasında tetikleyicisinin hemen arkasına yerleştirir.',
          'Hovercard zengin bir araç ipucudur. Kısa bir süre üzerine gelindiğinde, klavyeyle odaklanıldığında ise hemen açılır ve tetikleyicisini açıklar. İşaretçi üzerine geçtiğinde açık kalır; böylece metni okunup seçilebilir.',
          'İkisi de yer olmadığında diğer tarafa geçer, ekranda kalır ve sayfa kaydırıldıkça tetikleyicisini izler.',
        ],
        examples: {
          filters: {
            title: 'Filtreler',
            text: 'İçinde form olan bir popover. <code>arrow</code> onu tetikleyicisine yöneltir, <code>hide()</code> ise koddan kapatır.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Bir adın üzerine gelin ya da Tab ile ona ulaşın. Kart bağlantıyı açıklar; bu yüzden ekran okuyucular onu addan sonra okur.',
          },
          sides: {
            title: 'Taraflar ve giriş animasyonları',
            text: '<code>side</code> ve <code>align</code> nerede açılacağını belirler; <code>start</code> ve <code>end</code> yazı yönünü izler. <code>enter</code> ve <code>motion</code> ise nasıl belireceğini belirler.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Onu açan öğenin yanına yerleştirilen yerel bir popover.',
            members: {
              side: 'Tetikleyicinin hangi tarafında açıldığı. Yer yoksa diğer tarafa geçer.',
              align: 'O taraf boyunca tetikleyiciyle nasıl hizalandığı.',
              offset: 'Tetikleyici ile panel arasındaki boşluk, piksel cinsinden.',
              arrow: 'Tetikleyiciyi gösteren bir ok ekler.',
              openChange: 'Açıldığında veya kapandığında tetiklenir.',
              show: 'Herhangi bir öğenin yanında açar.',
              hide: 'Kapatır.',
            },
          },
          NuiPopoverTrigger: {
            summary: 'Yerel <code>popovertarget</code> ile bir popover’ı açıp kapatan düğme.',
            members: { nuiPopoverTrigger: 'Açılacak popover.' },
          },
          NuiHovercard: {
            summary: 'Tetikleyicisini açıklayan zengin bir araç ipucu.',
            members: {
              side: 'Tetikleyicinin hangi tarafında açıldığı. Yer yoksa diğer tarafa geçer.',
              align: 'O taraf boyunca tetikleyiciyle nasıl hizalandığı.',
              offset: 'Tetikleyici ile kart arasındaki boşluk, piksel cinsinden.',
              arrow: 'Tetikleyiciyi gösteren bir ok ekler.',
              openDelay:
                'Açılmadan önce üzerinde durulması gereken süre, milisaniye cinsinden. Klavye odağı onu hemen açar.',
              closeDelay:
                'İşaretçi ayrıldıktan sonra kapanana kadar geçen süre, milisaniye cinsinden.',
              openChange: 'Açıldığında veya kapandığında tetiklenir.',
              show: 'Herhangi bir öğenin yanında açar.',
              hide: 'Kapatır.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Üzerine gelindiğinde ve klavye odağında bir hovercard gösterir ve onu bu öğenin açıklaması yapar.',
            members: { nuiHovercardTrigger: 'Gösterilecek hovercard.' },
          },
        },
        keyboard: [
          ['Tetikleyicide Enter veya Boşluk', 'Popover’ı açar veya kapatır.'],
          ['Tab', 'Tetikleyicisinin hemen ardından gelen açık popover’ın içine geçer.'],
          ['Esc', 'Popover’ı kapatıp odağı tetikleyicisine geri verir ya da hovercard’ı gizler.'],
        ],
        notes: [
          'Popover, modal olmayan bir <code>dialog</code> öğesidir: <code>aria-label</code> veya <code>aria-labelledby</code> ile adlandırın. Tetikleyicisi <code>aria-haspopup</code> ve tarayıcının sağladığı <code>aria-expanded</code> niteliğini alır.',
          'Hovercard bir <code>tooltip</code> öğesidir ve tetikleyicisinin <code>aria-describedby</code> değeridir; bu sayede metni tetikleyiciyle birlikte okunur. İçine kontrol koymayın; onlar için popover kullanın.',
          'Hovercard, WCAG 1.4.13’ü karşılar: Esc onu odağı taşımadan gizler, işaretçi üzerine geçebilir ve üzerine gelindiği ya da odaklanıldığı sürece açık kalır.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Angular için select bileşeni',
        summary: 'Kısa ya da devasa bir listeden bir veya birden çok seçenek seçin.',
        description:
          'Erişilebilir Angular select: tekli veya çoklu seçim, gruplar, ağaçlar, yazarak atlama, tümünü seçme ve her uzunlukta liste için sanal kaydırma.',
        apiDescription:
          'Needless UI select bileşeninin API referansı: value, values, multiple, selectAll ve virtual girdileriyle nui-select, NuiOption yapısı ve özel satırlar.',
        a11yDescription:
          'Needless UI select bileşeninin klavye kullanımı ve erişilebilirliği: yalnızca seçimli combobox, listbox veya ağaç, aria-activedescendant ve yazarak arama.',
        overview: [
          'Select, bir seçenek listesi açan bir düğmedir. Ona bir <code>NuiOption</code> dizisi olan <code>options</code> verin ve <code>[(value)]</code> ya da <code>multiple</code> ile <code>[(values)]</code> bağlayın. Signal Forms, reaktif formlar ve <code>ngModel</code> ile de çalışır.',
          'Seçeneklerin <code>group</code>, <code>description</code> ve <code>keywords</code> değerleri olabilir; <code>children</code> ise listeyi bir ağaca dönüştürür. 200 satırın üzerinde yalnızca görünen satırlar render edilir; böylece 100.000 seçenek de on seçenek kadar hızlı açılır.',
          'Bunun yerine yazıp filtrelemek için <a href="/components/combobox">combobox</a> kullanın.',
        ],
        examples: {
          countries: {
            title: 'Gruplar',
            text: '<code>group</code> değeri olan seçenekler grubun başlığı altında listelenir. Bir harf yazmak, o harfle başlayan bir sonraki seçeneğe atlar.',
          },
          toppings: {
            title: 'Aynı anda birden çok',
            text: '<code>multiple</code> listeyi açık tutar ve <code>[(values)]</code> bağlar. <code>selectAll</code>, tüm seçenekleri seçen veya temizleyen bir düğme ekler. Devre dışı seçenekler seçilemez.',
          },
          folders: {
            title: 'Ağaç',
            text: '<code>children</code> içeren seçenekler bir ağaç oluşturur. Liste, seçili seçeneğin klasörleri genişletilmiş olarak açılır.',
          },
          zones: {
            title: 'Uzun listeler',
            text: 'Bölgelere göre tüm saat dilimleri. 200 satırın üzerinde yalnızca görünen satırlar render edilir; etkin seçenek ise ekran okuyucular için render edilmiş olarak kalır.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Bir seçenek listesi açan düğme.',
            members: {
              options: '<code>NuiOption</code> nesneleri biçiminde seçenekler.',
              value: 'Seçilen değer ya da <code>null</code>. Formlarla da çalışır.',
              values: '<code>multiple</code> ile seçilen değerler.',
              multiple:
                'Birden fazla seçeneğin seçilmesine izin verir. Siz seçerken liste açık kalır.',
              selectAll:
                '<code>multiple</code> ile, tüm seçenekleri seçen veya temizleyen bir düğme ekler.',
              placeholder: 'Hiçbir şey seçilmemişken gösterilen metin.',
              label: 'Düğmeyi adlandıran bir <code>&lt;label&gt;</code> yoksa erişilebilir ad.',
              triggerId: '<code>&lt;label for&gt;</code> için düğmenin id’si.',
              disabled: 'Select bileşenini devre dışı bırakır.',
              compareWith:
                'Nesne olan değerlerde, iki değerin aynı seçenek olup olmadığını belirler.',
              virtual:
                'Yalnızca görünen satırları render eder: her zaman, hiçbir zaman ya da <code>auto</code> ile 200 satırı aşınca.',
              openChange: 'Liste açıldığında veya kapandığında tetiklenir.',
              show: 'Listeyi açar.',
              hide: 'Listeyi kapatır.',
              focus: 'Odağı düğmeye taşır.',
            },
          },
          NuiOption: {
            summary: 'Tek bir seçenek. Select, combobox ve komut paleti bunları alır.',
            members: {
              value: 'Seçildiğinde ayarlanan değer. Her türden olabilir.',
              label: 'Gösterilen ve aranan metin.',
              description: 'Etiketin altındaki ikincil metin.',
              group: 'Aynı gruptaki seçenekler sırasıyla o başlığın altında listelenir.',
              keywords: 'Aramanın eşleştirdiği ek sözcükler; örneğin eş anlamlılar veya kodlar.',
              disabled: 'Gösterilir ama seçilemez.',
              children: 'Bir alt düzeydeki seçenekler; listeyi bir ağaca dönüştürür.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Her satırı kendiniz çizmek için bileşenin içindeki bir <code>ng-template</code> üzerine koyun. Bağlamda seçenek ve satırı bulunur.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Kendi satırlarınız için bir seçeneğin etiketini (eşleşen harfler işaretli), açıklamasını ve yolunu çizer.',
            members: { nuiOptionText: 'Şablon bağlamındaki satır.' },
          },
        },
        keyboard: [
          ['Aşağı ve yukarı ok', 'Listeyi açar, ardından seçenekler arasında gezinir.'],
          ['Home ve End', 'İlk veya son seçeneğe gider.'],
          ['Page Down ve Page Up', 'On seçenek atlar.'],
          ['Enter veya Boşluk', 'Listeyi açar ya da etkin seçeneği seçer.'],
          ['Harfler', 'Yazılan harflerle başlayan bir sonraki seçeneğe atlar.'],
          [
            'Sağ ve sol ok',
            'Ağaçta bir seçeneği genişletir veya ilk alt öğesine gider; daraltır veya üst öğesine gider. Sağdan sola metinde tersine çalışır.',
          ],
          ['Alt + yukarı ok', 'Etkin seçeneği seçer ve listeyi kapatır.'],
          ['Tab', 'Tekli seçimde etkin seçeneği seçer ve sonraki öğeye geçer.'],
          ['Esc', 'Seçim yapmadan listeyi kapatır.'],
        ],
        notes: [
          'Düğme, <code>aria-expanded</code> ve <code>aria-controls</code> taşıyan, yalnızca seçim yapılan bir <code>combobox</code> öğesidir. Odak düğmede kalır; <code>aria-activedescendant</code> etkin seçeneği gösterir.',
          'Liste bir <code>listbox</code> ya da <code>aria-level</code> ve <code>aria-expanded</code> taşıyan bir <code>tree</code> öğesidir. Yalnızca bazı satırlar render edildiğinde de <code>aria-setsize</code> ve <code>aria-posinset</code> doğru kalır.',
          'Etkin seçenek dolgun bir zemin, forced colors modunda ise bir dış çizgi alır.',
          '<code>triggerId</code> değerini gösteren bir <code>&lt;label for&gt;</code> ya da <code>label</code> ile adlandırın.',
        ],
      },
      grid: {
        name: 'Veri tablosu',
        title: 'Angular için veri tablosu bileşeni',
        summary: 'İstediğiniz sayıda satırı sıralayın, filtreleyin, seçin, düzenleyin ve kaydırın.',
        description:
          'Yerel tablo üzerine kurulu erişilebilir Angular veri tablosu: çok sütunlu sıralama, filtreler, sayfalama veya sanal kaydırma, seçim, düzenleme ve sütun taşıma.',
        apiDescription:
          'Needless UI veri tablosunun API referansı: nui-grid girdileri ve modelleri, NuiGridColumn tanımı ve özel hücreler için şablonlar.',
        a11yDescription:
          'Needless UI veri tablosunun klavye kullanımı ve erişilebilirliği: grid rollü yerel tablo, tek sekme durağı, ok tuşları ve duyurular.',
        overview: [
          'Veri tablosu yerel bir tablodur: sıralar, filtreler, sayfalara böler ve düzenler. Sütunları <code>columns</code> ile tanımlayıp satırları <code>rows</code> ile verin; her hücre türüne ve yerel ayara göre biçimlendirilir: sayılar, para birimleri, tarihler, evet/hayır ve <code>enum</code> değerlerinin etiketleri.',
          'Tablonun durumu, bağlayıp kaydedebileceğiniz ve sunucuya gönderebileceğiniz modellerde tutulur: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code> ve kullanıcıların seçtiği genişlik, sıra, sabitleme ve gizli sütunlar için <code>columnState</code>. Sayfalama yoksa yalnızca görünen satırlar render edilir; böylece 100.000 satır da on satır kadar akıcı kayar.',
          'Her hücreye klavyeyle ulaşılabilir; her sütunun paneli sütunu sıralar, filtreler, sabitler, taşır, içeriğe sığdırır ve gizler.',
          'Satırlar iç içe de olabilir. <code>groupBy</code> satırları sütunlara göre gruplar; her sütunun <code>aggregate</code> değeri grup satırlarında ve bir <code>totals</code> satırında gösterilir. <code>children</code> ağaç verisini gösterir, bir <code>nuiGridDetail</code> şablonu da satırın altında açılır. Gruplanmış ya da iç içe satırlarda tablo bir <code>treegrid</code> olur.',
        ],
        examples: {
          orders: {
            title: 'Arama, sıralama ve sayfalar',
            text: 'Tüm sütunlarda aramak için yazın. Sıralamak için bir başlığa tıklayın, ikinci bir sütun eklemek için Shift ile tıklayın. <code>nuiGridCell</code> durumu çizer, <code>exportCsv()</code> ise gösterileni dışa aktarır.',
          },
          selection: {
            title: 'Seçim',
            text: '<code>selection="multiple"</code> onay kutuları ekler ve seçili satırların anahtarlarını bağlar. Shift ile tıklamak bir aralık seçer; başlıktaki kutu eşleşen tüm satırları seçer.',
          },
          editing: {
            title: 'Düzenleme',
            text: 'Hücreye çift tıklayın, Enter’a basın ya da yazmaya başlayın. <code>validate</code> düzenleyiciyi mesajla açık tutar; onaylanan düzenleme <code>rows</code> değerini günceller ve <code>cellEdit</code> olayını tetikler.',
          },
          big: {
            title: '100.000 satır',
            text: 'Sayfalama yoksa yalnızca görünen satırlar render edilir. Sabitlenen sütunlar kenarlarda kalır; <code>columnState</code> ise kullanıcıların oluşturduğu düzeni saklar.',
          },
          server: {
            title: 'Sunucu verisi',
            text: '<code>server</code> modunda tablo, satırları geldiği gibi gösterir ve her değişikliği <code>queryChange</code> ile bildirir. Veriyi çekerken <code>loading</code> ayarlayın.',
          },
          groups: {
            title: 'Gruplar ve toplamlar',
            text: 'Bir ya da iki sütuna göre gruplayın. Grup satırları siparişlerini sayar, tutarlarının toplamını ve ortalamasını alır; <code>totals</code> da aynısını tüm satırlar için ekler. Sol ok bir grubu kapatır.',
          },
          tree: {
            title: 'Ağaç verisi',
            text: '<code>children</code> her klasöre dosyalarını verir. Satırlar sağ okla ya da kendi açma düğmeleriyle açılır; <code>[(expanded)]</code> hangilerinin açık olduğunu saklar. Arama, eşleşmenin üstündeki klasörleri açık tutar.',
          },
          details: {
            title: 'Satır ayrıntıları',
            text: 'Bir <code>nuiGridDetail</code> şablonu, siparişin kalemlerini satırın altında gösterir; ayrıntılar bir açma düğmeleri sütunundan açılır ve <code>[(details)]</code> hangilerinin açık olduğunu saklar.',
          },
          live: {
            title: 'Canlı veri, dışa aktarma ve yazdırma',
            text: 'Fiyatlar iki saniyede bir değişir ve <code>flash</code> hangi hücrelerin değiştiğini gösterir. <code>exportXlsx()</code> gerçek bir elektronik tablo indirir, <code>print()</code> tüm satırları yazdırır, <code>layout="auto"</code> ise dar ekranlarda kartlar gösterir.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Yerel tabloya dayalı veri tablosu.',
            members: {
              rows: 'Veri. Düzenlemeler satırları yenileriyle değiştirir; <code>[(rows)]</code> ile bağlayın.',
              columns: '<code>NuiGridColumn</code> nesneleri biçiminde sütunlar.',
              rowId: 'Seçim ve takip için satırın anahtarı.',
              label: 'Tablonun erişilebilir adı.',
              selection: 'Satır seçilip seçilemeyeceği ve kaç tane.',
              selected: 'Seçili satırların anahtarları.',
              sort: '<code>{ column, direction }</code> nesneleri biçiminde sıralama; ilki önceliklidir.',
              filters: 'Sütun id’si başına bir filtre: bir operatör ve bir değer.',
              search: 'Bir satırda hepsinin geçmesi gereken sözcükler.',
              pageSize: 'Sayfa başına satır; tek kaydırılabilir liste için 0.',
              page: 'Gösterilen sayfa, 0’dan başlar.',
              pageSizes: 'Sayfalayıcıdaki seçenekler.',
              virtual:
                'Yalnızca görünen satırları render eder: her zaman, hiçbir zaman ya da <code>auto</code> ile sayfalama yokken 100 satırı aşınca.',
              height: 'Tabloyu sınırlayan CSS uzunluğu; tablo içeride kayar.',
              columnState:
                'Her sütunun genişliği, sırası, sabitlemesi ve görünürlüğü; kaydedip geri yüklemek için.',
              mode: '<code>server</code>, satırları geldiği gibi gösterir; sıralama, filtreleme ve sayfalamayı size bırakır.',
              total: 'Sunucudaki satır sayısı.',
              loading: 'Bir ilerleme çubuğu, satır yokken de yer tutucu satırlar gösterir.',
              locale: 'Sayıları ve tarihleri biçimlendirir, yazılan sayıları okur.',
              labels: 'Tablonun gösterdiği veya duyurduğu her metin; çeviri için.',
              rowActivate: 'Enter veya çift tıklamayla açılan satırı yayar.',
              cellEdit: 'Onaylanan her düzenlemeyi yayar.',
              queryChange: 'Sıralama, filtreler, arama veya sayfa her değiştiğinde bunları yayar.',
              exportCsv: 'Görünür sütunların filtrelenmiş ve sıralanmış satırları, CSV olarak.',
              focusCell: 'Hücreye odaklanır; satır <code>-1</code> başlıktır.',
              clearFilters: 'Tüm filtreleri ve aramayı temizler.',
              'groupBy, collapsed':
                'Satırların gruplanacağı sütunlar (en dıştaki önce) ve kapalı grupların anahtarları.',
              children: 'Bir satırın alt satırları: tablo ağaç verisi gösterir.',
              'expanded, details':
                'Ağaç verisinde açık olan satırların ve ayrıntıları açık olan satırların anahtarları.',
              'totals, flash':
                'Filtrelenmiş tüm satırların özet değerlerini gösteren bir satır; kalıcı bir <code>rowId</code> taşıyan satırlarda, metni değişince bir an parlayan hücreler.',
              layout:
                '<code>list</code> satırları kart olarak gösterir, <code>auto</code> ise bunu dar ekranlarda yapar.',
              'exportXlsx, print':
                'Filtrelenmiş ve sıralanmış satırlar, elektronik tablo olarak; tüm satırları yazdırır.',
            },
          },
          NuiGridColumn: {
            summary: 'Tek bir sütun. Yalnızca <code>id</code> ve <code>header</code> zorunludur.',
            members: {
              id: 'Benzersiz; sıralamada, filtrelerde ve sütun durumunda anahtardır.',
              header: 'Başlık metni.',
              value:
                'Satırdaki bir anahtar ya da satırı alan bir fonksiyon. Varsayılan: <code>row[id]</code>.',
              type: 'Hizalamayı, sıralamayı, filtreyi ve düzenleyiciyi belirler.',
              format:
                'Sayılar ve tarihler için <code>Intl</code> seçenekleri ya da metni üreten bir fonksiyon.',
              options:
                'Bir <code>enum</code> sütununun seçenekleri; <code>NuiOption</code> nesneleri biçiminde.',
              'width, minWidth, maxWidth': 'Piksel cinsinden.',
              flex: 'Kalan alanı diğer <code>flex</code> sütunlarıyla paylaşır.',
              align: 'Varsayılanı türe göre: sayılar ve tarihler sonda.',
              'pinned, hidden': 'Sütunun ilk sabitlemesi ve görünürlüğü.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Her biri <code>false</code> ile kapatılabilir.',
              compare: 'Özel bir sıralama.',
              'editable, validate':
                'Hücrelerin düzenlenip düzenlenemeyeceği ve değer geçersizken gösterilecek mesaj.',
              set: 'Düzenlenen satırı oluşturur. Varsayılan: yeni değeri taşıyan bir kopya.',
              aggregate:
                'Grup satırlarının ve toplam satırının gösterdiği değer: toplam, ortalama, en küçük, en büyük, sayı ya da bir fonksiyon.',
            },
          },
          NuiGridCell: {
            summary: 'Bir sütunun hücrelerini çizer. Bağlamda satır, değer ve metin bulunur.',
            members: { nuiGridCell: 'Sütunun id’si.' },
          },
          NuiGridHeader: {
            summary: 'Bir sütunun başlığını çizer.',
            members: { nuiGridHeader: 'Sütunun id’si.' },
          },
          NuiGridEmpty: {
            summary:
              'Satır yokken gösterilen içerik. Bağlam, satırları filtrelerin gizleyip gizlemediğini söyler.',
            members: {},
          },
          NuiGridDetail: {
            summary:
              'Bir satırın ayrıntıları; açıldığında satırın altında gösterilir. Bağlamda satır bulunur.',
            members: {},
          },
        },
        keyboard: [
          ['Ok tuşları', 'Bir hücre ilerler. Sağdan sola metinde sol ve sağ yer değiştirir.'],
          ['Home ve End', 'Satırın ilk veya son hücresine gider; Ctrl ile tablonunkine.'],
          ['Page Down ve Page Up', 'Bir ekranlık satır atlar.'],
          ['Başlıkta Enter veya Boşluk', 'Sütuna göre sıralar; Shift ile sütunu sıralamaya ekler.'],
          ['Başlıkta Alt + aşağı ok', 'Sütun panelini açar.'],
          ['Başlıkta Alt + sol veya sağ ok', 'Sütunu daraltır veya genişletir; Shift ile taşır.'],
          ['Hücrede Enter', 'Hücreyi düzenler; düzenlenemiyorsa satırı açar.'],
          ['F2 veya metin girişi', 'Hücreyi düzenler.'],
          ['Düzenlerken Enter, Esc ve Tab', 'Onaylar, iptal eder ya da onaylayıp sonrakine geçer.'],
          ['Boşluk', 'Satırı seçer; Shift ile son seçilenden buna kadar olanları.'],
          ['Ctrl + A', 'Tüm satırları seçer.'],
          [
            'Grupta sağ ve sol ok',
            'Grubu açar veya kapatır; alt satırları olan bir satırın ilk hücresinde de.',
          ],
          ['Grupta Enter', 'Grubu açar veya kapatır; Boşluk grubun satırlarını seçer.'],
          ['Ayrıntı düğmesinde Enter', 'Satırın ayrıntılarını gösterir veya gizler.'],
        ],
        notes: [
          '<code>role="grid"</code> taşıyan ve <code>label</code> ile adlandırılan yerel bir <code>&lt;table&gt;</code>. Başlıklar <code>aria-sort</code>, seçilebilir satırlar ise <code>aria-selected</code> taşır.',
          'Tablo tek bir sekme durağıdır. Odak, gezici bir <code>tabindex</code> ile hücreden hücreye geçer; böylece ekran okuyucular her hücreyi satır ve sütun başlıklarıyla birlikte okur.',
          'Satırlar sayfalandığında veya sanallaştırıldığında da <code>aria-rowcount</code>, <code>aria-rowindex</code> ve <code>aria-colindex</code> doğru kalır.',
          'Sıralama, filtreleme, sayfa değişimi ve düzenleme hataları nazik (polite) bir durum bölgesinde duyurulur.',
          'Gruplanmış ya da iç içe satırlar tabloyu bir <code>treegrid</code> yapar: satırlar <code>aria-level</code>, <code>aria-setsize</code> ve <code>aria-posinset</code>, açılabildiklerinde de <code>aria-expanded</code> taşır. Özet değerler türleriyle birlikte okunur, örneğin “Sum: 475”.',
        ],
      },
      chat: {
        name: 'Sohbet',
        title: 'Angular için yapay zekâ sohbet bileşeni',
        summary: 'Bir modelle konuşun: akışla gelen yanıtlar, araçlar, sürümler ve dosyalar.',
        description:
          'Yapay zekâ asistanları için erişilebilir Angular sohbeti: akışla gelen Markdown yanıtlar, akıl yürütme, araç çağrıları, kaynaklar, sürümler ve dosyalar.',
        apiDescription:
          'Needless UI sohbetinin API referansı: nui-chat girdileri, yanıtları akışla ileten NuiChatSession, mesajlar, araç şablonları ve akış okuyucular.',
        a11yDescription:
          'Needless UI sohbetinin klavye kullanımı ve erişilebilirliği: adlandırılmış mesajlardan oluşan bir feed, Page Up ve Page Down, tamamlanınca duyurulan yanıtlar.',
        overview: [
          'Sohbet, kullanıcılarınızla model arasındaki her şeydir. <code>respond</code> fonksiyonuyla bir <code>NuiChatSession</code> oluşturun, gerisini <code>&lt;nui-chat&gt;</code> halleder: yanıtı Markdown olarak akış hâlinde gösterir, kullanıcı yukarı kaydırana kadar yanıtı sayfada aşağı doğru izler ve yanıt gelirken gönder düğmesini durdurma düğmesine çevirir.',
          '<code>respond</code> metin, promise, <code>async function*</code> ya da Observable döndürür; böylece her API’ye uyar. Yanıt, metnin yanı sıra modelin akıl yürütmesini, araç çağrılarını (sizin şablonlarınızla çizilir) ve kullandığı kaynakları da taşıyabilir. <code>nuiEventStream</code>, çoğu model API’sinin akış için kullandığı server-sent events biçimini okur.',
          'Hiçbir şey kaybolmaz: yeniden denenen bir yanıt ya da düzenlenen bir soru, eskisinin yanında yeni bir sürüm olur ve sohbet her dalı saklar. Ekran okuyucular her yanıtı kelime kelime değil, tamamlandığında okur.',
        ],
        examples: {
          assistant: {
            title: 'Bir asistan',
            text: 'Sohbeti öneriler başlatır. Yanıtlar Markdown olarak akar; onları durdurun, yeniden deneyin, puanlayın ya da sorunuzu düzenleyin. <code>attach</code>, seçilen, yapıştırılan veya sürükleyip bırakılan dosyaları alır.',
          },
          tools: {
            title: 'Akıl yürütme, araçlar ve kaynaklar',
            text: 'Deltalar yanıta modelin akıl yürütmesini, araç çağrılarını ve kaynakları ekler. <code>nuiChatTool</code> hava durumu aracını bir kart olarak çizer; diğer araçlar girdi ve çıktılarıyla birlikte katlanır.',
          },
          server: {
            title: 'Sunucudan akış',
            text: '<code>nuiEventStream</code> OpenAI tarzı bir olay akışını okur, <code>NuiChatError</code> ise kendi mesajını gösterir. <code>all()</code>, sohbeti tüm sürümleriyle birlikte kaydeder.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Sohbet ve mesaj kutusu bir arada.',
            members: {
              session: 'Gösterilecek sohbet.',
              assistant: 'Asistanın adı; ekran okuyucuların okuduğu başlıklarda geçer.',
              headingLevel:
                'Her mesajın başlık düzeyi; bu başlıkları yalnızca ekran okuyucular gösterir. Yanıtlardaki başlıklar bir düzey daha derindir.',
              announce:
                'Yanıt tamamlandığında ekran okuyucuların ne okuyacağı: tamamı, kısa bir bildirim ya da hiçbir şey.',
              images:
                'Yanıtlardaki görselleri gösterir. Aksi hâlde görselin metni ona bağlantı olur.',
              value: 'Yazılmakta olan metin.',
              placeholder: 'Alan boşken gösterilen metin.',
              suggestions: 'İlk mesaja kadar tek tıkla gönderilebilen prompt’lar.',
              sendOn:
                'Enter’ın mı, yoksa Ctrl veya ⌘ + Enter’ın mı gönderdiği. <code>auto</code>, klavye olan yerlerde Enter ile gönderir; dokunmatik ekranlarda Return yeni satır başlatır, gönderme işini düğme yapar.',
              disabled: 'Mesaj kutusunun göndermesini engeller.',
              attach: 'Seçilen, yapıştırılan veya sürükleyip bırakılan dosyaları alır.',
              accept:
                'Kabul edilen dosya türleri; <code>&lt;input type="file"&gt;</code> ile aynı biçimde.',
              maxFiles: 'Bir mesajın taşıyabileceği en fazla dosya sayısı.',
              maxSize: 'Kabul edilen en büyük dosya boyutu, bayt cinsinden.',
              labels: 'Sohbetin gösterdiği veya duyurduğu her metin; çeviri için.',
              rated:
                'Kullanıcının puanladığı yanıtı puanıyla birlikte yayar; puan geri alınırsa <code>null</code> yayar.',
              focus: 'Odağı metin alanına taşır.',
              scrollToEnd: 'Son mesaja kaydırır ve onu izlemeye devam eder.',
            },
          },
          NuiChatSession: {
            summary:
              'Sohbetin kendisi, DOM olmadan. Bir bileşen içinde <code>respond</code>, <code>messages</code> ve <code>id</code> seçenekleriyle oluşturun.',
            members: {
              respond:
                'Sizin fonksiyonunuz: <code>request.messages</code> için yanıtı yazar, <code>request.signal</code> iptal edildiğinde durur.',
              messages: 'Ekrandaki sohbet.',
              all: 'Tüm sürümlerdeki tüm mesajlar; kaydedip <code>messages</code> olarak geri vermek için.',
              busy: 'Bir yanıtın yolda olup olmadığı.',
              send: 'Bir mesaj gönderir ve yanıt ister.',
              stop: 'Yanıtı, o ana kadar yazdıklarını koruyarak durdurur.',
              retry: 'Yeniden sorar. Yeni yanıt, eskisinin yanında bir sürüm olur.',
              edit: 'Kullanıcı mesajlarından birinin yeni bir sürümünü gönderir.',
              versions: 'Bir mesajın tüm sürümleri, en eskisi önce.',
              show: 'Sohbeti bu sürüme geçirir.',
              rate: 'Kullanıcının bir yanıta verdiği puanı kaydeder.',
              'remove, load, clear':
                'Bir mesajı ve ondan sonrakileri kaldırır, sohbeti değiştirir ya da baştan başlar.',
            },
          },
          NuiChatMessage: {
            summary:
              'Tek bir mesaj. Aynı <code>parent</code> değerine sahip mesajlar birbirinin sürümleridir.',
            members: {
              'id, parent': 'Mesajın anahtarı ve ardından geldiği mesajınki.',
              role: 'Mesajı kimin yazdığı.',
              text: 'Asistandan Markdown, kullanıcıdan düz metin.',
              status: 'Yanıtın aşaması; beklemeden tamamlanmaya kadar.',
              reasoning: 'Modelin yanıtlamadan önce düşündükleri.',
              tools: 'Çağırdığı araçlar; durumları, girdileri ve çıktılarıyla.',
              sources: 'Kullandığı sayfalar.',
              attachments: 'Mesajla gönderilen dosyalar.',
              rating: 'Kullanıcının verdiği puan.',
              data: 'Mesajla saklanacak başka her şey; örneğin modelin adı.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Bir araç çağrısını çizer; örneğin hava durumu için bir kart. Bağlamda çağrı ve mesajı bulunur.',
            members: {
              nuiChatTool:
                'Aracın adı. Ad verilmezse başka hiçbir şablonun adlandırmadığı tüm çağrıları çizer.',
            },
          },
          NuiChatThread: {
            summary:
              'Kendi yerleşiminiz için yalnızca sohbet. <code>nui-chat</code> girdilerinden sohbetle ilgili olanları alır.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Yalnızca mesaj kutusu. <code>nui-chat</code> girdilerinden yazmayla ilgili olanları alır.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              '<code>nuiEventStream</code> fonksiyonunun her olay için verdiği değer. <code>nuiTextStream</code> düz metni, <code>nuiJsonStream</code> ise JSON satırlarını okur; üçü de bir <code>fetch</code> yanıtı alır.',
            members: {
              event: 'Olayın adı.',
              data: 'Birleştirilmiş veri satırları.',
              id: 'Akışın gönderdiği son id.',
            },
          },
          NuiChatError: {
            summary:
              'Mesajını göstermek için <code>respond</code> içinden fırlatın. Diğer hatalar genel bir mesaj gösterir; böylece içeriden hiçbir şey sızmaz.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down ve Page Up', 'Sonraki veya önceki mesaja gider.'],
          ['Ctrl + End ve Ctrl + Home', 'Sohbetten çıkıp sonraki ya da önceki öğeye geçer.'],
          ['Enter', 'Gönderir. Shift ile yeni satır başlatır.'],
          ['Esc', 'Mesaj düzenlemeyi iptal eder.'],
        ],
        notes: [
          'Sohbet, <code>article</code> öğelerinden oluşan bir <code>feed</code> öğesidir. Her biri, “You said” gibi yalnızca ekran okuyucuların gördüğü bir başlıkla adlandırılır ve <code>aria-posinset</code> ile <code>aria-setsize</code> taşır.',
          'Yazılmakta olan yanıt <code>aria-busy</code> durumundadır. Tamamlanınca bütün olarak duyurulur; hata ise hemen duyurulur.',
          'Her simge düğmesinin bir adı ve araç ipucu vardır. Puanlama düğmeleri geçiş düğmeleridir; sürüm seçici ise “Version 2 of 3” gibi adlandırılan bir gruptur.',
          'Akıl yürütme ve araç çağrıları yerel açılır bölümlerdir. Bir dosyayı kaldırmak odağı metin alanına geri verir.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Angular için Markdown render bileşeni',
        summary: 'Markdown’u güvenle render edin, akış hâlinde gelirken bile.',
        description:
          'Yapay zekâ yanıtları için güvenli Angular Markdown bileşeni: GitHub tabloları, görev listeleri ve kod blokları gerçek öğelerle çizilir, akışta da akıcıdır.',
        apiDescription:
          'Needless UI Markdown bileşeninin API referansı: nui-markdown girdileri, kod blokları için şablon ve arkasındaki ayrıştırıcı.',
        a11yDescription:
          'Needless UI Markdown bileşeninin erişilebilirliği: gerçek başlıklar, listeler ve tablolar, adlandırılmış kaydırma bölgeleri ve duyuru yapan kopyalama düğmesi.',
        overview: [
          'Markdown bileşeni, bir modelin yazdığı türden metinleri gerçek öğelere dönüştürür: başlıklar, listeler ve görev listeleri, alıntılar, tablolar, kopyalama düğmeli kod blokları ve bağlantılar. Metni bir ağaca ayrıştırıp şablonlarla çizer; böylece ham HTML metin olarak kalır ve hiçbir şey HTML olarak eklenmez.',
          '<code>streaming</code> ile yarım yazılmış metin, tamamlandığındaki gibi görünür: kapanmamış bir kod bloğu şimdiden kod bloğudur, tek başına kalan bir <code>**</code> eşini bekler ve son kelimeyi bir imleç izler. Değişmeyen bloklar DOM’larını korur.',
          'Bağlantılar yalnızca web, e-posta ve telefon adresleri için çalışır; görseller ise siz <code>images</code> girdisini açana kadar bağlantı olarak kalır.',
        ],
        examples: {
          document: {
            title: 'Bir belge',
            text: 'Başlıklar <code>headingLevel</code> düzeyinden başlar; böylece sayfanın kendi başlıklarının altına oturur. Geniş tablolar ve kod kendi bölgelerinde kayar.',
          },
          streaming: {
            title: 'Akış',
            text: 'Aynı metin, her seferinde birkaç karakter. Biçimlendirme işaretleri bir an bile görünmez ve yalnızca son blok yeniden render edilir.',
          },
          highlight: {
            title: 'Kod vurgulama',
            text: '<code>nuiMarkdownCode</code> kod bloklarını sizin şablonunuzla çizer; burada minicik bir vurgulayıcıyla. Şablon, kodu ve dilini alır.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Markdown’u öğeler olarak render eder.',
            members: {
              text: 'Markdown metni.',
              streaming: 'Metin hâlâ geliyor.',
              headingLevel:
                'Bir <code>#</code> başlığının düzeyi. Daha derin başlıklar 6’ya kadar onu izler.',
              images:
                'Görselleri gösterir. Aksi hâlde metinleri onlara bağlantı olur, çünkü görseller izleme için kullanılabilir.',
              labels: 'Kopyalama düğmesinin metinleri ve benzerleri; çeviri için.',
              codeTemplate:
                'Başka bir yerden gelen kod bloğu şablonu; örneğin bu bileşeni içeren bir sohbetten.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Kod bloklarını çizer. Bağlamda kod, <code>lang</code> ve blok hâlâ gelirken <code>open</code> bulunur.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Bileşen olmadan kullanmak için ayrıştırıcı ve yardımcıları.',
            members: {
              nuiParseMarkdown: 'Bileşenin çizdiği blok ve satır içi öğe ağacı.',
              nuiMarkdownToText: 'Duyurmak ya da önizlemek için düz metin, blok başına bir satır.',
              nuiSafeUrl: 'Bağlantının bir web, e-posta veya telefon adresine gidip gitmediği.',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'Bağlantılara, kopyalama düğmelerine ve kaydırmak için geniş tablolara ve koda ulaşır.',
          ],
        ],
        notes: [
          'Başlıklar, listeler, alıntılar, <code>th</code> başlıkları ve <code>scope</code> içeren tablolar ve kod gerçek öğelerdir.',
          'Geniş tablolar ve kod blokları odaklanabilir bir bölgenin içinde kayar; tablonun bölgesi başlıklarına göre adlandırılır.',
          'Görev listesi kutuları her görevin tamamlanıp tamamlanmadığını söyler. Kopyalama düğmesinin adı “Copy code” olur ve bir durum mesajıyla “Copied” der.',
          'Akış imleci ekran okuyuculardan gizlenir; azaltılmış hareket açıkken yanıp sönmez.',
        ],
      },
      calendar: {
        name: 'Takvim',
        title: 'Angular için takvim bileşeni',
        summary: 'Klavyeyle de bir gün, bir aralık ya da birden çok gün seçin.',
        description:
          'Erişilebilir Angular takvimi: bir gün, bir aralık ya da birden çok gün seçimi; min ve max, kullanılamayan günler, yan yana aylar ve hafta numaraları.',
        apiDescription:
          'Needless UI takviminin API referansı: nui-calendar seçim modları, min, max ve kullanılamayan günler, yan yana aylar ve etiketler.',
        a11yDescription:
          'Needless UI takviminin klavye kullanımı ve erişilebilirliği: adlandırılmış günlerden bir ızgara, oklarla gün ve hafta, Page Up ve Page Down ile ay.',
        overview: [
          'Takvimle bir gün, bir gün aralığı ya da birden çok gün seçilir. Değerler <code>2026-09-25</code> gibi düz ISO tarihleridir; onları kaydıracak bir saat dilimi yoktur, bu yüzden doğrudan sunucuya ya da bir <code>&lt;input type="date"&gt;</code> öğesine gidebilirler.',
          'Haftalar yerel ayarın ilk gününde başlar; adlar ve rakamlar da onun dilini izler. <code>min</code>, <code>max</code> ve <code>unavailable</code> günleri seçim dışı bırakır, <code>months</code> birkaç ayı yan yana gösterir; uzak tarihler için de başlık, görünümü aylara ve yıllara uzaklaştırır.',
          'WAI-ARIA tarih seçici örneğindeki gibi her güne klavyeyle ulaşılabilir ve her gün tam tarihiyle adlandırılır.',
        ],
        examples: {
          delivery: {
            title: 'Teslimat günü',
            text: 'Bugünden önceki, <code>max</code> değerinden sonraki ya da <code>unavailable</code> ile dışlanan günler seçilemez; ancak klavye bu günlerin üzerinden yine de geçer.',
          },
          stay: {
            title: 'Bir aralık',
            text: '<code>selection="range"</code> ile ilk seçim aralığı başlatır ve vurgu, ikinci seçime kadar işaretçiyi izler. <code>months="2"</code> ve <code>weekNumbers</code> aynı anda daha fazlasını gösterir.',
          },
          'days-off': {
            title: 'Birden çok gün',
            text: '<code>selection="multiple"</code> ile her seçim bir gün ekler ya da kaldırır. <code>firstDay</code>, haftayı yerel ayarınkinden farklı bir günde başlatır.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Gün seçmek için bir takvim.',
            members: {
              selection: 'Kaç gün seçilebileceği.',
              value: 'Seçilen gün.',
              values: 'Seçilen günler, sırasıyla.',
              range: 'Seçilen aralık; iki ucu da dahil.',
              month: 'Gösterilen ay; birkaç ay varsa ilki.',
              view: 'Günler, aylar ya da yıllar.',
              'min, max': 'Seçilebilecek ilk ve son gün.',
              unavailable: 'Tatiller gibi başka günleri seçim dışı bırakır.',
              months: 'Yan yana gösterilen ay sayısı.',
              weekNumbers: 'ISO hafta numaralarını gösterir.',
              firstDay: 'Haftanın ilk günü; pazartesi için 1. Varsayılan: yerel ayarınki.',
              locale: 'Adları ve rakamları biçimlendirir, haftanın ilk gününü belirler.',
              labels: 'Takvimin gösterdiği veya duyurduğu her metin; çeviri için.',
              picked: 'Her seçimi yayar: bir gün ya da tamamlanan bir aralık.',
              focusDate: 'Klavye odağını bir güne taşır ve o günün ayını gösterir.',
            },
          },
          NuiDateRange: {
            summary: 'Bir gün aralığı.',
            members: { 'start, end': 'İlk ve son gün; ikisi de dahil.' },
          },
        },
        keyboard: [
          ['Sol ve sağ ok', 'Önceki veya sonraki gün. Sağdan sola metinde yönler yer değiştirir.'],
          ['Yukarı ve aşağı ok', 'Önceki veya sonraki hafta.'],
          ['Home ve End', 'Haftanın ilk veya son günü.'],
          ['Page Up ve Page Down', 'Önceki veya sonraki ay; Shift ile yıl.'],
          ['Enter veya Boşluk', 'Günü seçer ya da görünümü bir aya veya yıla yakınlaştırır.'],
          ['Esc', 'Aralığın ilk seçilen ucunu iptal eder ya da daha ayrıntılı görünüme döner.'],
        ],
        notes: [
          'Her ay, başlığıyla adlandırılan bir <code>grid</code> öğesidir; hafta günlerinin tam adları <code>abbr</code> içinde yer alır.',
          'Her gün tam tarihiyle adlandırılır; bu ada “Today”, “unavailable” ve aralığın uçları eklenir. <code>aria-selected</code> seçileni, <code>aria-disabled</code> ise seçilemeyeni işaretler.',
          'Izgara tek bir sekme durağıdır ve gezici bir <code>tabindex</code> kullanır. Önceki ve sonraki ay düğmeleri yeni ayı duyurur.',
        ],
      },
      'date-picker': {
        name: 'Tarih seçici',
        title: 'Angular için tarih ve saat seçici bileşenleri',
        summary: 'Tarihi ya da saati segmentler hâlinde yazın veya takvimden seçin.',
        description:
          'Erişilebilir Angular tarih, saat ve aralık seçicileri: yerel ayarın sırasıyla yazılan segmentler, popover’da takvim, hazır aralıklar ve form desteği.',
        apiDescription:
          'Needless UI tarih seçicilerinin API referansı: hazır aralıklarla birlikte nui-date-field, nui-time-field, nui-date-picker ve nui-date-range-picker.',
        a11yDescription:
          'Needless UI tarih seçicilerinin klavye kullanımı ve erişilebilirliği: tarihin her parçası için bir spinbutton ve diyalog içinde bir takvim.',
        overview: [
          'Tarih ve saat alanları segmentler hâlinde yazılır: gün, ay ve yıl yerel ayarın sırasıyla, ardından saat ve dakika yerel ayarın 12 ya da 24 saatlik düzeniyle. Her segment bir spinbutton’dır: rakamları yazın, kendiliğinden sonrakine geçer; ya da ok tuşlarıyla adım adım değiştirin. Tam bir tarih yapıştırdığınızda tüm segmentler dolar.',
          'Seçiciler, tek bir tarih ya da hazır aralıklarla bir aralık için popover’da bir takvim ekler. Değerler <code>2026-09-25</code> ya da <code>2026-09-25T09:30</code> gibi düz ISO dizeleridir ve her alan Signal Forms, reaktif formlar ve <code>ngModel</code> ile çalışır.',
          'Bu sitede örnekler sayfanın dilini izler: sıranın, ayırıcıların ve rakamların nasıl değiştiğini görmek için dili değiştirin.',
        ],
        examples: {
          fields: {
            title: 'Tarih ve saat alanları',
            text: 'Rakamları yazın ya da ok tuşlarını kullanın. İkinci Backspace bir önceki segmente döner. <code>minuteStep</code>, okların dakikayı kaçar kaçar değiştireceğini belirler.',
          },
          pickers: {
            title: 'Tarih seçiciler',
            text: 'Düğme takvimi seçili günde açar; bir gün seçmek takvimi kapatır. <code>granularity="minute"</code> ile seçici saati de alır ve takvim yalnızca tarihi değiştirir.',
          },
          range: {
            title: 'Bir tarih aralığı',
            text: 'İki alan ve iki aylık bir takvim. <code>nuiDateRangePresets()</code> sık kullanılan aralıkları ekler; iki uç da sırayla girilene kadar değer null kalır.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Segmentler hâlinde yazılan bir tarih ya da tarih ve saat.',
            members: {
              value: 'Değer; tüm segmentler dolana kadar null.',
              granularity: 'Günde durur ya da saate, dakikaya veya saniyeye kadar devam eder.',
              'min, max': 'En erken ve en geç değerler. Bunların dışında alan geçersizdir.',
              placeholder: 'Boş segmentlerin ok tuşlarıyla hangi değerden başlayacağı.',
              hourCycle: '12 ya da 24 saatlik düzen. Varsayılan: yerel ayarınki.',
              minuteStep: 'Ok tuşlarının dakikayı kaçar kaçar değiştireceği.',
              'disabled, readonly': 'Değişiklikleri engeller.',
              locale: 'Sırayı, ayırıcıları, rakamları ve saat düzenini belirler.',
              labels: 'Alanın söylediği her metin; çeviri için.',
              invalid: 'Değerin <code>min</code> ve <code>max</code> dışında olup olmadığı.',
              focus: 'İlk boş segmente odaklanır.',
            },
          },
          NuiTimeField: {
            summary: 'Segmentler hâlinde yazılan bir saat. Tarih alanıyla aynı girdileri alır.',
            members: { granularity: 'Saatte, dakikada ya da saniyede durur.' },
          },
          NuiDatePicker: {
            summary:
              'Popover’da takvimi olan bir tarih alanı. Tarih alanının girdilerini ve aşağıdakileri alır.',
            members: {
              unavailable: 'Takvimde seçilemeyecek günler.',
              'firstDay, weekNumbers': 'Takvime iletilir.',
              labels: 'Alanın, düğmenin ve takvimin metinleri.',
              show: 'Takvimi açar.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Aralık takvimi olan iki tarih alanı. Tarih seçicinin girdilerini ve aşağıdakileri alır.',
            members: {
              value: 'Aralık; iki uç da sırayla girilene kadar null.',
              presets: 'Tek tıkla seçilen adlandırılmış aralıklar.',
              months: 'Takvimde yan yana gösterilen ay sayısı; dar ekranda tek ay.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Sabit ya da seçildiği anda oluşturulan adlandırılmış bir aralık.',
            members: {
              label: 'Adı.',
              range: 'Aralık ya da onu oluşturan bir fonksiyon.',
            },
          },
        },
        keyboard: [
          [
            'Rakamlar',
            'Segmente yazar. Ardından başka bir rakam gelemeyecekse sonraki segmente geçer.',
          ],
          [
            'Yukarı ve aşağı ok',
            'Segmenti bir adım değiştirir; Page Up ve Page Down daha büyük adımlarla.',
          ],
          ['Sol ve sağ ok, Tab', 'Önceki veya sonraki segment.'],
          ['Backspace', 'Segmenti temizler, ardından bir öncekine döner.'],
          ['A ve P', 'AM ya da PM olarak ayarlar.'],
        ],
        notes: [
          'Alan bir <code>group</code> öğesidir: <code>aria-label</code> veya <code>aria-labelledby</code> ile adlandırın. Her segment, temsil ettiği parçayla adlandırılan bir <code>spinbutton</code> öğesidir; ayları adıyla, boş segmentleri ise “Empty” olarak okur.',
          'Segmentler düzenlenebilir metindir; bu yüzden dokunmatik klavyeler rakamlarla açılır.',
          'Seçicinin düğmesinin adı “Choose a date” olur ve popover’ı bir <code>dialog</code> öğesidir. Bir tarih seçmek odağı düğmeye geri verir.',
          'İçindeki takvim, <a href="/components/calendar">takvim</a> bileşeni gibi çalışır.',
        ],
      },
      scheduler: {
        name: 'Planlayıcı',
        title: 'Angular için planlayıcı bileşeni',
        summary:
          'Etkinlikleri ay, hafta, gün ya da ajanda görünümünde gösterin, sürükleyerek yerleştirin.',
        description:
          'Erişilebilir Angular planlayıcısı: ay, hafta, gün ve ajanda görünümleri, yan yana çakışan etkinlikler, sürükleyip taşıma ve boyutlandırma, tam klavye denetimi.',
        apiDescription:
          'Needless UI planlayıcısının API referansı: nui-scheduler görünümleri, etkinlikler, düzenleme ve seçim, çıktıları ve etkinlik şablonu.',
        a11yDescription:
          'Needless UI planlayıcısının klavye kullanımı ve erişilebilirliği: gün ve saat ızgaraları, adlandırılmış etkinlikler, her sürükleme için klavye karşılığı.',
        overview: [
          'Planlayıcı, etkinlikleri ay, hafta, gün ya da ajanda görünümünde gösterir. Etkinlikler, ISO biçiminde zamanlar taşıyan düz verilerdir; çakışan etkinlikler genişliği paylaşır, gece yarısını aşan etkinlikler iki günde de görünür, tüm gün süren etkinlikler ise üstte şeritler hâlinde uzanır.',
          'Planlayıcı etkinliklerinizi hiçbir zaman kendisi değiştirmez. Bir etkinliği ya da alt kenarını sürükleyin, <code>eventChange</code> yeni zamanları bildirir; ızgarada bir zaman seçin, <code>slotSelect</code> bunu bildirir. <code>rangeChange</code> hangi günlerin gösterildiğini söyler; böylece o günlerin etkinliklerini yükleyebilirsiniz.',
          'İşaretçiyle yapılan her şey klavyeyle de yapılabilir: ızgara tek bir sekme durağıdır, ok tuşları günler ve saatler arasında gezinir, Alt ile birlikte oklar ise bir etkinliği taşır.',
        ],
        examples: {
          planner: {
            title: 'Planlanacak bir hafta',
            text: '<code>editable</code> ve <code>selectable</code> ile etkinlikleri taşımak için sürükleyin, yeniden boyutlandırmak için alt kenarlarından sürükleyin, yeni bir etkinlik eklemek için de boş zamanın üzerinde sürükleyin. Örnek, etkinliklerini çıktılardan gelen değerlerle günceller.',
          },
          month: {
            title: 'Bir ay ve bir ajanda',
            text: 'Birden çok güne yayılan etkinlikler şerit olarak uzanır; yoğun bir gün, kaç etkinliğin daha olduğunu gösterir. <code>views</code> yalnızca ayı ve önümüzdeki <code>agendaDays</code> günün ajandasını sunar.',
          },
          rooms: {
            title: 'Toplantı odalarında bir gün',
            text: '<code>nuiSchedulerEvent</code> her rezervasyonu odası ve düzenleyeniyle birlikte çizer. <code>slotMinutes="15"</code> zamanı daha ince satırlara böler.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Ay, hafta, gün ya da ajanda görünümünde etkinlikler.',
            members: {
              events: 'Gösterilecek etkinlikler.',
              view: 'Gösterilen görünüm.',
              views: 'Kullanıcıların arasında geçiş yapabileceği görünümler.',
              date: 'Gösterilen gün; klavye odağı da buradadır.',
              slotMinutes:
                'Zaman ızgarasında satır başına dakika; etkinlikler de bu adımla taşınır.',
              scrollHour: 'Zaman ızgarasının açıldığı saat.',
              agendaDays: 'Ajandanın kaç gün ileriye baktığı.',
              editable:
                'Etkinlikler işaretçiyle ve klavyeyle taşınabilir ve yeniden boyutlandırılabilir.',
              selectable: 'Etkinlik oluşturmak için ızgarada zaman seçilebilir.',
              firstDay: 'Haftanın ilk günü; pazartesi için 1. Varsayılan: yerel ayarınki.',
              headingLevel: 'Başlığın düzeyi; ajandadaki günler bir düzey daha derindir.',
              locale: 'Günleri ve saatleri biçimlendirir.',
              labels: 'Planlayıcının gösterdiği veya duyurduğu her metin; çeviri için.',
              eventClick: 'Tıklanan ya da Enter ile açılan etkinliği yayar.',
              eventChange:
                'Taşıma veya yeniden boyutlandırmanın ardından etkinliğin yeni zamanlarını yayar.',
              slotSelect: 'Izgarada seçilen zamanı yayar.',
              rangeChange: 'Gösterilen ilk ve son gün değiştiğinde bunları yayar.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Bir etkinlik. Saatli bir etkinliğin bitişi dahil değildir; tüm gün süren bir etkinliğin bitişi ise son günüdür.',
            members: {
              'id, title': 'Anahtarı ve gösterdiği metin.',
              'start, end': 'Tarih ve saatler; tüm gün süren etkinlikler için yalnızca tarihler.',
              allDay:
                'Varsayılan olarak, <code>start</code> saat içermiyorsa etkinlik tüm gün sürer.',
              tone: 'Rengi.',
              editable: 'Planlayıcının ayarı ne olursa olsun, etkinliğin taşınıp taşınamayacağı.',
              data: 'Etkinlikle birlikte saklanacak diğer her şey.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Etkinlikleri çizer. Bağlam, etkinliği ve zamanını metin olarak içerir.',
            members: {},
          },
        },
        keyboard: [
          [
            'Ok tuşları',
            'Günler ve zaman dilimleri arasında ilerler. Sağdan sola metinde yönler yer değiştirir.',
          ],
          ['Page Up ve Page Down', 'Önceki veya sonraki ay, hafta ya da gün.'],
          ['Shift + ok tuşları', 'Seçilen zamanı genişletir.'],
          ['Hücrede Enter veya Boşluk', 'Hücrenin etkinliklerine girer ya da zamanını seçer.'],
          ['Etkinlikte yukarı ve aşağı ok', 'Hücredeki önceki veya sonraki etkinlik.'],
          ['Etkinlikte Alt + ok tuşları', 'Etkinliği bir zaman dilimi ya da bir gün taşır.'],
          ['Alt + Shift + yukarı veya aşağı ok', 'Etkinliği kısaltır veya uzatır.'],
          ['Esc', 'Hücreye döner, zaman seçimini kaldırır ya da sürüklemeyi iptal eder.'],
        ],
        notes: [
          'Ay, hafta ve gün, başlıklarıyla adlandırılan <code>grid</code> öğeleridir. Sütun başlıkları günler, satır başlıkları saatlerdir; böylece her hücre, günü ve saatiyle birlikte okunur.',
          'Her etkinlik, başlığı, günü ve saatiyle adlandırılan bir düğmedir; örneğin “Standup, Friday, September 25, 9:00 – 9:30 AM”. Taşıma veya yeniden boyutlandırma yeni zamanı duyurur.',
          'Her sürüklemenin bir klavye karşılığı vardır; böylece kimsenin işaretçiye ihtiyacı olmaz.',
          'Görünümler, bir grup içindeki geçiş düğmeleridir; başka bir haftaya ya da aya geçildiğinde yeni başlık duyurulur.',
        ],
      },
      splitter: {
        name: 'Bölme ayırıcı',
        title: 'Angular için ayırıcı ve boyutlandırılabilir bölmeler',
        summary: 'Yan yana ya da üst üste bölmeler ve onları yeniden boyutlandıran tutamaçlar.',
        description:
          'Erişilebilir Angular bölme ayırıcısı: yan yana ya da üst üste boyutlandırılabilir bölmeler, sınırlar, daraltma, kaydedilen boyutlar ve tam klavye denetimi.',
        apiDescription:
          'Needless UI bölme ayırıcısının API referansı: nuiSplitter yönü ve boyutları, bölmelerin sınırları ve daraltılması, aralarındaki tutamaçlar.',
        a11yDescription:
          'Needless UI bölme ayırıcısının klavye kullanımı ve erişilebilirliği: değer taşıyan odaklanabilir tutamaçlar, ok tuşları, Home, End ve Enter.',
        overview: [
          'Ayırıcı, alanını bölmeler arasında paylaştırır; her iki bölmenin arasında bir tutamaç bulunur. Bir tutamacı sürükleyin ya da ona odaklanıp ok tuşlarını kullanın. Boyutlar toplamı 100 olan yüzdelerdir ve <code>[(sizes)]</code> onları bağlar.',
          'Her bölmenin başlangıç, en küçük ve en büyük boyutu piksel, rem ya da yüzde olarak verilir. <code>collapsible</code> bir bölme, en küçük boyutunun yarısının altına sürüklendiğinde ya da tutamacında Enter’a basıldığında daralır; geri açıldığında da önceki boyutuna döner.',
          '<code>storageKey</code> ile boyutlar <code>localStorage</code> içinde saklanır; böylece kullanıcılar bir sonraki ziyaretlerinde düzeni bıraktıkları gibi bulur.',
        ],
        examples: {
          editor: {
            title: 'Bir düzenleyici',
            text: 'Dosyalar, kod ve önizleme. Dosyalar ve önizleme daraltılabilir, kod genişliğin en az %30’unu korur ve boyutlar kaydedilir.',
          },
          stacked: {
            title: 'Üst üste bölmeler',
            text: '<code>orientation="vertical"</code> bölmeleri üst üste dizer, <code>[(sizes)]</code> ise boyutları değiştikçe okur.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Aralarında tutamaçlar olan bölmeler.',
            members: {
              orientation: 'Yan yana ya da üst üste.',
              sizes: 'Her bölmenin payı, yüzde olarak ve sırayla.',
              storageKey: 'Boyutları bu anahtarla <code>localStorage</code> içinde saklar.',
              step: 'Ok tuşlarının bir tutamacı ne kadar taşıdığı, yüzde olarak. Shift ile iki katı.',
              move: 'Bir bölmeden sonraki sınırı belirli bir yüzde kadar taşır.',
            },
          },
          NuiSplitterPane: {
            summary: 'Bir bölme. Boyutları piksel, rem ya da yüzde olarak verilir.',
            members: {
              defaultSize: 'Geri yüklenecek boyut yokken başlangıçtaki boyutu.',
              min: 'En küçük boyutu.',
              max: 'En büyük boyutu.',
              collapsible:
                'Daraltılabilir: en küçük boyutunun yarısının altına sürüklenince ya da Enter ile.',
              collapsedSize: 'Daraltılmış hâldeki boyutu; örneğin bir simge şeridi.',
              label: 'Bölmeyi yeniden boyutlandıran tutamacı adlandırır.',
            },
          },
          NuiSplitterHandle: {
            summary: 'İki bölme arasındaki tutamaç.',
            members: {
              label: 'Bölmenin label değeri adlandırmıyorsa tutamacı adlandırır.',
              disabled: 'Tutamaç hareket etmez.',
              toggle: 'Yanındaki bölmeyi daraltır ya da geri açar.',
            },
          },
        },
        keyboard: [
          [
            'Sol ve sağ ok',
            'Yan yana bölmeler arasındaki tutamacı taşır. Sağdan sola metinde yönler yer değiştirir.',
          ],
          ['Yukarı ve aşağı ok', 'Üst üste bölmeler arasındaki tutamacı taşır.'],
          ['Shift + ok tuşları', 'Tutamacı iki kat daha uzağa taşır.'],
          ['Home ve End', 'Tutamaçtan önceki bölmeyi en küçük ya da en büyük boyutuna getirir.'],
          ['Enter', 'Daraltılabilir bölmeyi daraltır ya da geri açar.'],
        ],
        notes: [
          'WAI-ARIA window splitter örneğindeki gibi her tutamaç odaklanabilir bir <code>separator</code> öğesidir: değeri, kendinden önceki bölmenin boyutudur ve o bölmenin sınırları arasında kalır; <code>aria-controls</code> da o bölmeyi gösterir.',
          'Tutamaçları bölmelerin <code>label</code> girdisiyle adlandırın: “Files”, ekran okuyucuya tutamacın neyi yeniden boyutlandırdığını söyler.',
          'Tutamaca çift tıklamak da bölmesini daraltır; sürükleme ise işaretçiyi yakalar, böylece hızlı hareketlerde tutamaç elden kaçmaz.',
        ],
      },
      tour: {
        name: 'Rehberli tur',
        title: 'Angular için rehberli tur bileşeni',
        summary:
          'Her adım için, anlattığı öğenin yanında bir kart; sayfanın geri kalanı karartılır.',
        description:
          'Erişilebilir Angular ürün turu: her adım için hedefinin yanında bir kart, hedefin çevresinde spot ışığı, etkileşimli adımlar ve geri dönen odak.',
        apiDescription:
          'Needless UI rehberli turunun API referansı: nui-tour adımları, open ve step bağlamaları, çıktıları ve her adımın hedefi, konumu ve hook’ları.',
        a11yDescription:
          'Needless UI rehberli turunun klavye kullanımı ve erişilebilirliği: başlığıyla adlandırılan diyalog kartlar, korunan ve geri verilen odak, Esc ile çıkış.',
        overview: [
          'Tur, kullanıcıları bir sayfada adım adım gezdirir. Her adım, yanındaki bir kartla bir öğeyi gösterir ve sayfanın geri kalanını karartır; hedefi olmayan bir adım ortada görünür.',
          'Adımlar düz verilerdir: bir hedef (bir seçici, bir öğe ya da hedefi bulan bir fonksiyon), bir başlık ve metin ya da şablon olarak içerik. Önce <code>beforeShow</code> çalışır; böylece bir adım, hedefinin içinde bulunduğu paneli açabilir. Görünüm dışındaki bir hedefe ise sayfa kendiliğinden kaydırılır.',
          'Her kart bir diyalogdur ve modaldır; ancak adım <code>interactive</code> ise kullanıcılar kartın gösterdiği öğeyi kullanabilir. Esc turu bitirir ve odak önceki yerine döner.',
        ],
        examples: {
          basics: {
            title: 'İlk bakış',
            text: 'Dört adım; ilkinin hedefi yok. <code>finished</code> ve <code>dismissed</code> iki farklı bitişi birbirinden ayırır.',
          },
          interactive: {
            title: 'Denenecek adımlar',
            text: '<code>beforeShow</code>, ikinci adım ayarların içini göstermeden önce ayarları açar; <code>interactive</code> ise kart açıkken anahtarın kullanılmasına izin verir.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Rehberli bir tur.',
            members: {
              steps: 'Adımlar, sırasıyla.',
              open: 'Turun açık olup olmadığı.',
              step: 'Gösterilen adım, 0’dan başlayarak.',
              labels: 'Gösterdiği her metin; çeviri için.',
              finished: 'Son adım tamamlandığında tetiklenir.',
              dismissed: 'Tur erken biterse, bittiği adımı yayar.',
              start: 'Turu ilk adımdan ya da verilen adımdan başlatır.',
              end: 'Turu tamamlanmış ya da yarıda bırakılmış olarak bitirir.',
            },
          },
          NuiTourStep: {
            summary: 'Turun bir adımı.',
            members: {
              target: 'Adımın gösterdiği öğe. Hedef yoksa kart ortada görünür.',
              title: 'Kartın başlığı.',
              content: 'Kartın metni ya da bir şablon.',
              side: 'Kartın hedefin hangi yanına yerleşeceği.',
              align: 'Kartın hedefle nasıl hizalandığı.',
              padding: 'Spot ışığında hedefin çevresinde bırakılan boşluk, piksel cinsinden.',
              interactive: 'Kart açıkken hedef kullanılabilir.',
              beforeShow: 'Adım gösterilmeden önce çalışır. Bir promise döndürürse tur onu bekler.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Kartın düğmeleri arasında gezinir. Modal adımlarda odak kartta kalır.'],
          ['Enter veya Boşluk', 'Odaktaki düğmeye basar: Next, Back ya da Done.'],
          ['Esc', 'Turu bitirir.'],
        ],
        notes: [
          'Her kart, başlığıyla adlandırılan ve içeriğiyle açıklanan bir <code>dialog</code> öğesidir. Odak her adımda kartın ana düğmesine gider, tur bittiğinde de önceki yerine döner.',
          'Modal adımlar sayfanın geri kalanını etkileşime kapatır (inert). Etkileşimli adımlar modal değildir; bu yüzden hedeflerine işaretçinin yanı sıra klavyeyle de ulaşılabilir.',
          'İlerleme, “2 of 4” gibi bir metindir; noktalar yalnızca bunu görselleştirir.',
        ],
      },
      dropzone: {
        name: 'Dosya bırakma alanı',
        title: 'Angular için dosya bırakma alanı ve yükleme',
        summary:
          'Dosyaları sürükleyip bırakın ya da seçin: denetimler, önizlemeler ve ilerlemesi görünen yüklemeler.',
        description:
          'Erişilebilir Angular dosya bırakma alanı: sürükle-bırak, klasör ve yapıştırma, tür ve boyut denetimi, görsel önizleme, ilerleme ve yeniden denemeyle yükleme.',
        apiDescription:
          'Needless UI dosya bırakma alanının API referansı: nui-dropzone dosyaları ve denetimleri, yükleme fonksiyonu ve kuyruğu, çıktıları ve metinleri.',
        a11yDescription:
          'Needless UI dosya bırakma alanının klavye kullanımı ve erişilebilirliği: düğme olan bir alan, duyurulan sonuçlar, adlandırılmış ilerleme çubukları ve eylemler.',
        overview: [
          'Dosya bırakma alanı, üzerine bırakılan, dosya seçiciyle seçilen ya da yapıştırılan dosyaları alır. Bırakılan klasörlerin tüm içeriği okunur ve her dosya kendi yolunu korur.',
          'Her dosya <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> ve sizin <code>validate</code> fonksiyonunuzla denetlenir; reddedilenler nedeniyle birlikte listelenir. Görseller için önizleme gösterilir.',
          '<code>upload</code> fonksiyonu yoksa alan, dosyaları bir form için <code>[(files)]</code> içinde tutar. Varsa dosyaları birkaçar birkaçar, ilerlemeyi göstererek yükler; iptal etmek ve yeniden denemek de mümkündür. Yüklemenin <code>signal</code> değerini <code>fetch</code> çağrısına iletin; böylece iptal, yüklemeyi durdurur.',
        ],
        examples: {
          upload: {
            title: 'Yüklemeler',
            text: 'Sahte bir yükleme, ilerlemesini adım adım bildirir. Adında “fail” geçen dosyalar, yeniden denemeyi göstermek için başarısız olur; <code>directory</code> ise klasör seçmek için bir düğme ekler.',
          },
          attach: {
            title: 'Bir form için ekler',
            text: '<code>upload</code> yok: alan, <code>[(files)]</code> içinde en fazla üç belge tutar ve kendi metni varsayılan metnin yerini alır.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Dosyaları bırakmak ya da seçmek için bir alan.',
            members: {
              files: 'Tuttuğu dosyalar, sırasıyla.',
              accept:
                'Kabul ettiği dosya türleri; <code>&lt;input type="file"&gt;</code> ile aynı biçimde.',
              multiple: 'Aynı anda birden fazla dosya.',
              directory: 'Klasör seçmek için bir düğme sunar.',
              maxFiles: 'Tutabileceği en fazla dosya sayısı.',
              'maxSize, minSize': 'En büyük ve en küçük dosya boyutu, bayt cinsinden.',
              validate: 'Her dosyayı denetler. Bir mesaj döndürürse dosya reddedilir.',
              upload: 'Bir dosyayı gönderir. Verilmezse dosyalar yalnızca tutulur.',
              concurrency: 'Aynı anda kaç dosyanın yükleneceği.',
              hint: 'Alanın metninin altındaki satır; örneğin hangi dosyaları kabul ettiği.',
              disabled: 'Dosya kabul etmez.',
              labels: 'Gösterdiği veya duyurduğu her metin; çeviri için.',
              uploaded:
                'Yüklenen bir dosyayı, <code>upload</code> fonksiyonunun döndürdüğü değerle birlikte yayar.',
              rejected: 'Reddedilen dosyaları nedenleriyle birlikte yayar.',
              queue:
                'Koddan iptal etmek, yeniden denemek ve ilerlemeyi okumak için yükleme kuyruğu.',
              take: 'Koddan dosya ekler ve her birini denetler.',
            },
          },
          NuiUploader: {
            summary:
              'Tek bir dosya gönderir: ilerlemeyi 0’dan 1’e kadar bildirir ve sinyal iptal edildiğinde durur.',
            members: {
              '(file, context)': 'Sunucunuz ne yanıt verirse onu taşıyan bir promise döndürür.',
            },
          },
        },
        keyboard: [
          ['Enter veya Boşluk', 'Alandayken dosya seçiciyi açar.'],
          ['Ctrl + V veya ⌘ + V', 'Alandayken yapıştırılan dosyaları ekler.'],
          ['Tab', 'Alan ve her dosyanın eylemleri arasında gezinir.'],
        ],
        notes: [
          'Alan bir düğmedir; bu yüzden işaretçi olmadan da çalışır ve ipucu onu açıklar.',
          'Eklenen ve reddedilen dosyalar duyurulur. Her ilerleme çubuğu, dosyasıyla adlandırılan bir <code>progressbar</code> öğesidir; her eylem de yaptığı işle adlandırılır, örneğin “Remove beach.jpg”.',
          'Önizlemeler dekoratiftir: hangi dosya olduğunu dosya adı söyler.',
        ],
      },
      mask: {
        name: 'Giriş maskesi',
        title: 'Angular için giriş maskesi direktifi',
        summary: 'Yazıldıkça biçimlenen metin alanları: tarihler, kartlar, IBAN’lar, kodlar.',
        description:
          'Angular giriş maskesi: yazıldıkça biçimlenen metin alanları, yerini koruyan imleç, kartlar ve IBAN’lar için yardımcı fonksiyonlar, form doğrulaması.',
        apiDescription:
          'Needless UI giriş maskesinin API referansı: nuiMask direktifi, token’ları ve değeri, kart numaraları ve IBAN’lar için yardımcı fonksiyonlar.',
        a11yDescription:
          'Needless UI giriş maskesinin erişilebilirliği: kendi etiketleriyle yerel alanlar, telefonlarda sayısal klavye ve sabit karakterleri atlayarak silme.',
        overview: [
          'Maske, bir metin alanını yazıldıkça biçimlendirir: <code>00/00/0000</code> eğik çizgileri kendisi ekler, <code>AA 000 AA</code> ise sırasıyla harf ve rakam alır. Uymayan karakterler alana girmez ve metnin ortasına yazıldığında imleç yerini korur.',
          'Maskeler token’lardan ve sabit karakterlerden oluşur: <code>0</code> bir rakam, <code>a</code> bir harf, <code>*</code> ikisinden biridir; <code>A</code> ve <code>X</code> ise kodlar için bunların büyük harfli karşılıklarıdır. Kendi token’larınızı <code>tokens</code> ile ekleyin ya da yazılana göre maskeyi seçen bir fonksiyon verin; <code>nuiCardMask</code> da maskeyi kart markasına göre böyle seçer.',
          'Değer, alanda görünen metindir; <code>unmask</code> ile yalnızca veridir. Maske Signal Forms, reaktif formlar ve <code>ngModel</code> ile çalışır; tamamlanmamış bir değer hata sayılır.',
        ],
        examples: {
          formats: {
            title: 'Biçimler',
            text: 'Bir tarih, bir saat, bir plaka ve onaltılık rakamlar için kendi token’ı olan bir renk.',
          },
          payment: {
            title: 'Ödeme bilgileri',
            text: 'Signal Forms alanları. Kart maskesi markaya uyar, güvenlik kodu American Express için dört hanelidir; <code>nuiCardValid</code> ve <code>nuiIbanValid</code> de numaraları denetler.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Yerel bir metin alanı üzerinde maske.',
            members: {
              nuiMask: 'Maske ya da yazılan veriye göre maske seçen bir fonksiyon.',
              tokens: 'Eklenecek veya değiştirilecek maske karakterleri.',
              unmask: 'Değer, sabit karakterler olmadan yalnızca veridir.',
              value: 'Değer: alanda görünen metin ya da <code>unmask</code> ile veri.',
              raw: 'Sabit karakterler olmadan, yazılan veri.',
              complete: 'Maskedeki tüm yerlerin dolu olup olmadığı.',
            },
          },
          Helpers: {
            summary: 'Değerleri biçimlendiren, denetleyen ve maske oluşturan fonksiyonlar.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Bir değeri maskeyle biçimlendirir ya da biçimli değerden veriyi çıkarır.',
              nuiCardMask:
                'Kart numaraları için, rakamları markanın kart üzerine bastığı gibi gruplayan bir maske.',
              nuiCardBrand: 'Kart numarasının markasını ilk rakamlarından bulur.',
              'nuiCardValid, nuiLuhn':
                'Kart numarasının markasına uygun uzunlukta olup olmadığı ve Luhn kontrolünden geçip geçmediği.',
              nuiIbanMask: 'IBAN’lar için, ülkenin IBAN uzunluğunda bir maske.',
              nuiIbanValid:
                'IBAN’ın ülkesine uygun uzunlukta olup olmadığı ve kontrol basamaklarının doğru olup olmadığı.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'İmleçten önceki karakteri siler, sabit karakterleri atlar.'],
          ['Delete', 'İmleçten sonraki karakteri siler, sabit karakterleri atlar.'],
        ],
        notes: [
          'Maske sizin kendi <code>&lt;input&gt;</code> öğeniz üzerinde çalışır; böylece etiketi ve ipucu metni yazdığınız gibi kalır. Beklenen biçimi orada belirtin: maske bir talimat değildir.',
          'Yalnızca rakamlardan oluşan maskeler <code>inputmode="numeric"</code> ayarlar; böylece alan kendi değerini belirlemediyse telefonlar sayısal tuş takımı gösterir.',
          'Her yazı sisteminin rakamları kabul edilir ve 0–9 olarak yazılır.',
        ],
      },
      'phone-field': {
        name: 'Telefon alanı',
        title: 'Angular için telefon numarası alanı',
        summary: 'Bir ülke seçici ve ülkesinin yazım biçimine göre gruplanan bir numara.',
        description:
          'Erişilebilir Angular telefon numarası alanı: ülke seçici, ülkesine göre gruplanan numaralar, yazılan ya da yapıştırılan ülke kodları ve E.164 değerleri.',
        apiDescription:
          'Needless UI telefon alanının API referansı: nui-phone-field değeri ve ülkesi, sunulan ülkeler, numaraları okuyup yazan yardımcı fonksiyonlar.',
        a11yDescription:
          'Needless UI telefon alanının erişilebilirliği: adlandırılmış ülke seçici, bir kod ülkeyi seçtiğinde yapılan duyuru ve tarayıcı otomatik doldurması.',
        overview: [
          'Telefon alanı, bir ülke seçici ve bir numaradan oluşur. Numara, yazıldıkça ülkesinde numaraların yazıldığı biçimde gruplanır; değer ise E.164 biçimindeki numaradır, örneğin <code>+393331234567</code>.',
          'Kullanıcılar numaraları alıştıkları gibi yazar. Baştaki 0 (veya Kuzey Amerika numaralarının önündeki 1) yurt içi arama öneki (trunk prefix) sayılır ve değere alınmaz. Yazılan ya da yapıştırılan bir ülke kodu, örneğin <code>+44</code> veya <code>0044</code>, kendi ülkesini seçer; birden çok ülkenin aynı ülke kodunu paylaştığı yerlerde bunu alan kodu yapar.',
          'İlk ülke yerel ayarınkidir; <code>countries</code> listeyi sınırlar. Formlarda, ülkesi için fazla kısa ya da fazla uzun bir numara hata sayılır. Tam doğrulama için numaraları sunucuda da denetleyin.',
        ],
        examples: {
          basic: {
            title: 'Bir numara',
            text: 'Yazarken ülke değiştirmek için <code>+</code> ve bir ülke koduyla başlayın.',
          },
          countries: {
            title: 'Seçtiğiniz ülkeler',
            text: '<code>countries</code> on bir ülke sunar, alan reaktif bir <code>FormControl</code> ile çalışır ve <code>nuiFormatPhone</code> değeri okunacak biçimde geri yazar.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Bir telefon numarası alanı.',
            members: {
              value: 'E.164 biçiminde numara ya da boş.',
              country: 'Bölge kodu biçiminde ülke.',
              countries: 'Bölge kodları biçiminde sunulan ülkeler.',
              locale: 'Ülke adlarının dili.',
              label: 'Hiçbir <code>&lt;label for&gt;</code> adlandırmıyorsa numarayı adlandırır.',
              inputId: '<code>&lt;label for&gt;</code> için numaranın id’si.',
              placeholder: 'Numara alanı boşken gösterilen metin.',
              invalid: 'Numarayı geçersiz olarak işaretler.',
              disabled: 'Değiştirilemez.',
              labels: 'Alanın söylediği her metin; çeviri için.',
            },
          },
          Helpers: {
            summary: 'Telefon numaraları için fonksiyonlar.',
            members: {
              nuiParsePhone:
                'Herhangi bir biçimde yazılmış numarayı bölgesine, ülke koduna ve ulusal numarasına ayırır.',
              nuiFormatPhone: 'Numarayı ülkesinin grupladığı gibi ya da E.164 biçiminde yazar.',
              nuiPhoneValid:
                'Numaranın bilinen bir ülke kodu taşıyıp taşımadığı ve ülkesine uygun uzunlukta olup olmadığı.',
            },
          },
        },
        keyboard: [
          ['Ülke seçicide harfler', 'Bu harflerle başlayan ülkelere atlar.'],
          ['Enter veya Boşluk', 'Ülke listesini açar ya da bir ülke seçer.'],
          ['Backspace', 'Numarada bir rakamı siler; boşlukları ve parantezleri atlar.'],
        ],
        notes: [
          'Ülke seçicinin adı “Country code” olur ve seçili ülkenin bayrağını ve kodunu okur. Bir ülke kodu ya da alan kodu ülkeyi seçtiğinde yeni ülke duyurulur.',
          'Numarayı <code>&lt;label for&gt;</code> ve <code>inputId</code> ile ya da <code>label</code> ile adlandırın.',
          'Numarada <code>autocomplete="tel"</code> bulunur; böylece tarayıcılar numarayı ülke koduyla birlikte eksiksiz doldurabilir, telefonlar da telefon tuş takımını gösterir.',
        ],
      },
      'color-picker': {
        name: 'Renk seçici',
        title: 'Angular için OKLCH renk seçici',
        summary: 'OKLCH’de bir renk: kaydırıcılar, renk örnekleri, damlalık ve kontrast denetimi.',
        description:
          'Erişilebilir Angular OKLCH renk seçici: geniş renk gamlı P3 renkleri, her CSS renk sözdizimi, renk örnekleri, damlalık ve WCAG kontrast denetimi.',
        apiDescription:
          'Needless UI renk seçicisinin API referansı: nui-color-picker değeri, biçimi ve gamı, renk örnekleri ve kontrast, renkler için yardımcı fonksiyonlar.',
        a11yDescription:
          'Needless UI renk seçicisinin klavye kullanımı ve erişilebilirliği: iki değerli renk alanı kaydırıcısı, yerel kaydırıcılar, sözle belirtilen kontrast düzeyleri.',
        overview: [
          'Renk seçici, modern CSS’in algısal renk uzayı olan OKLCH’de çalışır. Renk alanında soldan sağa doygunluk (chroma), griden ekranın o açıklıkta gösterebildiği en yüksek değere kadar artar; böylece her nokta kullanılabilir bir renktir ve renk tonu döndükçe tutamaç yerinde kalır.',
          'Metin alanı, renk adları dahil her CSS rengini kabul eder; biçim düğmesi de değeri hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> ya da <code>color(display-p3)</code> olarak yazar. Bir biçimin gamı dışında kalan renk, CSS’in yöntemiyle açıklığı ve tonu korunarak bu gamın içine alınır.',
          'Seçim için renk örnekleri sunmak üzere <code>swatches</code>, rengin bir arka plana karşı kontrastını WCAG 2’nin ölçtüğü şekilde denetlemek için de <code>contrastWith</code> ekleyin. Tarayıcıda damlalık varsa bir düğme ekrandan renk alır.',
        ],
        examples: {
          brand: {
            title: 'Bir marka rengi',
            text: 'Adlandırılmış renk örnekleri ve rengin üzerindeki beyaz metnin kontrastı: açık bir renk seçerseniz AA başarısız olur.',
          },
          wide: {
            title: 'Geniş renk gamı',
            text: '<code>gamut="p3"</code> renk alanını Display P3 renkleriyle doldurur, kesikli bir çizgi de sRGB’nin bittiği yeri gösterir. Değer <code>oklch()</code> olarak kalır.',
          },
          popover: {
            title: 'Popover içinde',
            text: 'Rengi gösteren bir düğme, seçiciyi bir <a href="/components/popover">popover</a> içinde açar.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'OKLCH’de çalışan bir renk seçici.',
            members: {
              value: 'Biçime göre yazılmış renk. Bir renk seçilene kadar boştur.',
              format: 'Değerin nasıl yazılacağı.',
              formats: 'Biçim düğmesinin sırayla dolaştığı biçimler.',
              gamut: 'Renk alanının kapsadığı renkler: sRGB ya da Display P3.',
              alpha: 'Opaklık kaydırıcısını gösterir.',
              swatches: 'Adlarıyla birlikte, seçilebilecek renkler.',
              contrastWith: 'Kontrastın denetleneceği arka plan.',
              eyeDropper: 'Tarayıcıda varsa damlalığı gösterir.',
              disabled: 'Değiştirilemez.',
              labels: 'Seçicinin söylediği her metin; çeviri için.',
              color: 'OKLCH’de seçilen renk.',
            },
          },
          Helpers: {
            summary: 'Renkler için fonksiyonlar.',
            members: {
              nuiParseColor: 'Herhangi bir CSS sözdizimiyle yazılmış rengi okur.',
              nuiFormatColor: 'Bir rengi belirli bir biçimde yazar.',
              nuiToGamut: 'Bir rengi, CSS’in yaptığı gibi sRGB ya da Display P3 gamına alır.',
              nuiContrast: 'Bir rengin arka plan üzerindeki WCAG 2 kontrast oranı.',
            },
          },
        },
        keyboard: [
          ['Sol ve sağ ok', 'Renk alanında doygunluğu azaltır veya artırır.'],
          ['Yukarı ve aşağı ok', 'Renk alanında rengi açar veya koyulaştırır.'],
          ['Shift + ok tuşları', 'On kat daha uzağa taşır.'],
          ['Home ve End', 'Renk alanında doygunluğu sıfıra ya da en yükseğe getirir.'],
          ['Page Up ve Page Down', 'Renk alanında rengi çok daha açık ya da çok daha koyu yapar.'],
        ],
        notes: [
          'Renk alanının tutamacı, adı “Color” olan ve iki değerini de söyleyen bir <code>slider</code> öğesidir; örneğin “Lightness 62%, chroma 75%”. Renk tonu ve opaklık ise yerel range kaydırıcılarıdır.',
          'Renk örnekleri, etiketleriyle adlandırılan düğmelerdir; renkle eşleştiklerinde basılı görünürler.',
          'AA ve AAA, yalnızca renkle değil sözle de “passes” ya da “fails” der; forced colors modunda ise renklerin kendisi korunur.',
        ],
      },
      carousel: {
        name: 'Carousel',
        title: 'Angular için carousel ve slider bileşeni',
        summary: 'Kayan ve yerine oturan bir sıra slayt: düğmeler, noktalar ve otomatik geçiş.',
        description:
          'Erişilebilir Angular carousel: yerine oturan yerel kaydırma, dokunmatik hareketler, aynı anda birden çok slayt, noktalar, döngü ve WCAG’ye uygun otomatik geçiş.',
        apiDescription:
          'Needless UI carousel bileşeninin API referansı: nui-carousel görünür slayt sayısı, indeks, döngü ve otomatik geçiş, metotları ve nuiCarouselSlide direktifi.',
        a11yDescription:
          'Needless UI carousel bileşeninin klavye kullanımı ve erişilebilirliği: WAI-ARIA carousel deseni, otomatik geçiş düğmesi, adlandırılmış slaytlar ve duyurular.',
        overview: [
          'Carousel, slaytları kayan ve yerine oturan bir sıra hâlinde gösterir: parmakla kaydırma, dokunmatik yüzeyler ve ok tuşları onu yerel olarak hareket ettirir; önceki ve sonraki düğmeleri ile noktalar da öyle. Her slaytı başlığıyla birlikte <code>nuiCarouselSlide</code> ile işaretleyin; slayt bu başlıkla adlandırılır.',
          'Tek seferde bir slayt ya da <code>perView</code> ile birkaç slayt gösterin veya <code>perView="auto"</code> ile slaytların kendi genişliklerini korumasını sağlayın. <code>[(index)]</code> görünen ilk slaytı bağlar, <code>loop</code> ise sondan başa döner.',
          '<code>autoplay</code> ile carousel kendiliğinden döner ve bunu bir otomatik geçiş düğmesi denetler. Otomatik geçiş, işaretçi üzerindeyken duraklar; WAI-ARIA deseninin istediği gibi, klavye odağı içeri girdiğinde de tamamen durur.',
        ],
        examples: {
          featured: {
            title: 'Öne çıkan geziler',
            text: 'Her altı saniyede yeni bir slayt; otomatik geçiş düğmesindeki halka o ana kadar dolar. Otomatik geçişi duraklatmak için üzerine gelin, durdurmak için Tab ile içeri girin.',
          },
          shelf: {
            title: 'Bir kart rafı',
            text: '<code>perView="auto"</code> her kartın genişliğini korur ve sığabildiği kadar kart gösterir. Noktalar kaydırma hareketini izler, <code>[(index)]</code> ise nerede olduğunu söyler.',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'Slaytlardan oluşan bir carousel.',
            members: {
              label: 'Carousel’i adlandırır.',
              index: 'Görünen ilk slayt, 0’dan başlayarak.',
              perView:
                'Aynı anda görünen slayt sayısı ya da genişliğini kendi belirleyen slaytlar için <code>auto</code>.',
              gap: 'Slaytlar arasındaki boşluk; herhangi bir CSS uzunluğu.',
              loop: 'Son slayttan ileri gidince ilkine, ilkinden geri gidince sonuncuya dönülür.',
              autoplay: 'Kendiliğinden dönerken slaytlar arasındaki milisaniye; 0 ise dönmez.',
              'controls, indicators': 'Önceki ve sonraki düğmeleri ile noktalar.',
              labels: 'Carousel’in söylediği her metin; çeviri için.',
              'next, previous': 'Bir slayt ileri ya da geri gider.',
              goTo: 'Bir slaytı görünür alana getirir.',
            },
          },
          NuiCarouselSlide: {
            summary: 'Bir slayt.',
            members: { nuiCarouselSlide: 'Slaytın başlığı; konumunun yerine okunur.' },
          },
        },
        keyboard: [
          ['Tab', 'Otomatik geçiş düğmesi, düğmeler, slaytlar, ardından noktalar.'],
          ['Slaytlarda sol ve sağ ok', 'Önceki veya sonraki slayta kaydırır.'],
          ['Enter veya Boşluk', 'Odaktaki düğmeye ya da noktaya basar.'],
        ],
        notes: [
          'Carousel, <code>aria-roledescription="carousel"</code> taşıyan bir <code>region</code> öğesidir; her slayt da <code>aria-roledescription="slide"</code> taşıyan ve “Lake Como, 2 of 4” gibi adlandırılan bir <code>group</code> öğesidir.',
          'Otomatik geçiş düğmesi en önde gelir ve ne yapacağını söyler. Otomatik geçiş işaretçi üzerindeyken duraklar, klavye odağı içeri girince durur; böylece birinin okuduğu şey asla kaymaz.',
          'Kaydırma hareketi, düğme ya da noktadan sonra carousel’in vardığı yer duyurulur; otomatik geçiş sessiz kalır.',
        ],
      },
      editor: {
        name: 'Zengin metin düzenleyici',
        title: 'Angular için zengin metin düzenleyici bileşeni',
        summary:
          'Başlıklar, listeler, bağlantılar ve biçimler; araç çubuğu ve yazarken Markdown ile.',
        description:
          'Erişilebilir Angular zengin metin düzenleyici: araç çubuğu, kısayollar, yazarken Markdown, temiz yapıştırma ve geri alma; değeri HTML ya da Markdown.',
        apiDescription:
          'Needless UI zengin metin düzenleyicisinin API referansı: nui-editor değeri ve biçimi, araç çubuğu, metinler, komutlar, HTML ve Markdown dönüştürücüleri.',
        a11yDescription:
          'Needless UI zengin metin düzenleyicisinin klavye kullanımı ve erişilebilirliği: çok satırlı metin kutusu, WAI-ARIA araç çubuğu, kısayollar, bağlantı diyaloğu.',
        overview: [
          'Düzenleyici paragraflar, başlıklar, alıntılar, listeler, kod blokları ve ayırıcılar yazar; metin kalın, italik, altı çizili, üstü çizili, kod ya da bağlantı olabilir. Değeri HTML’dir ya da <code>format="markdown"</code> ile Markdown’dır; formlarla çalışır.',
          'Düzenleyici kendi belgesini tutar ve her düzenlemeyi kendisi yapar; böylece yapıştırılan ya da bırakılan içerik sayfaya yalnızca bu belge olarak ulaşır: Google Docs ve Word’den gelse bile yapı ve biçimler korunur; betikler, stiller ve güvensiz bağlantılar ise atılır.',
          'Markdown yazın, biçime dönüşsün: <code># </code> bir başlık, <code>- </code> bir liste başlatır; <code>**bold**</code> ve <code>`code`</code> ise kapattığınız anda biçimlenir. Her biçimin bir kısayolu ve araç çubuğunda bir düğmesi vardır.',
        ],
        examples: {
          comment: {
            title: 'Bir yorum',
            text: '<code>tools</code> araç çubuğunun düğmelerini seçer. Markdown yazın, her yerden yapıştırın ve düzenleyicinin sakladığı HTML’i görün.',
          },
          markdown: {
            title: 'Markdown giriş ve çıkışı',
            text: '<code>format="markdown"</code> ile değer Markdown’dır: iç içe listeler, alıntılar ve kodla birlikte okunur, siz düzenledikçe de geri yazılır.',
          },
        },
        api: {
          NuiEditor: {
            summary: 'Bir zengin metin düzenleyici.',
            members: {
              value: 'İçerik, HTML ya da Markdown olarak; metin yoksa boş.',
              format: 'Değerin nasıl yazıldığı.',
              tools: 'Araç çubuğunun düğmeleri, sırasıyla; gruplar arasında <code>|</code>.',
              'label, labelledBy, describedBy': 'İçeriği adlandırır ve açıklar.',
              placeholder: 'İçerik boşken gösterilir.',
              'readonly, disabled, invalid':
                'İçeriği düzenlenemez biçimde gösterir; devre dışı bırakır; geçersiz olarak işaretler.',
              labels: 'Düzenleyicinin söylediği her metin; çeviri için.',
              run: 'Bir araç çubuğu komutunu çalıştırır.',
              'undo, redo, focus': 'Geri alır, yineler ve odağı metne taşır.',
            },
          },
          Helpers: {
            summary: 'Belgeleri dönüştüren fonksiyonlar.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'Bir belgeyi HTML ya da Markdown olarak yazar.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'HTML ya da Markdown’ı okur ve düzenleyicinin gösterebildiklerini koruyarak bir belgeye dönüştürür.',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B, I veya U',
            'Kalın, italik veya altı çizili. Apple cihazlarında Ctrl yerine ⌘.',
          ],
          ['Ctrl + K', 'Bağlantı ekler veya düzenler.'],
          ['Ctrl + Alt + 1, 2 veya 3', 'Başlık; Ctrl + Alt + 0 onu yeniden paragrafa çevirir.'],
          ['Ctrl + Shift + 7 veya 8', 'Numaralı veya madde işaretli liste.'],
          [
            'Listede Tab ve Shift + Tab',
            'Girintiyi artırır veya azaltır; başka yerlerde Tab düzenleyiciden çıkar.',
          ],
          ['Ctrl + Z ve Ctrl + Shift + Z', 'Geri alır ve yineler.'],
          ['Araç çubuğunda sol ve sağ ok', 'Düğmeleri arasında gezinir.'],
        ],
        notes: [
          'İçerik, <code>aria-multiline</code> taşıyan, <code>label</code> ile adlandırılan ve yer tutucusu <code>aria-placeholder</code> içinde bulunan bir <code>textbox</code> öğesidir.',
          'Araç çubuğu, tek sekme durağı olan bir WAI-ARIA toolbar öğesidir: biçimler <code>aria-pressed</code> taşıyan geçiş düğmeleridir ve her düğme kısayolunu <code>aria-keyshortcuts</code> içinde ve araç ipucunda belirtir.',
          'Araç çubuğu komutları odağı metne geri verir; bağlantı diyaloğu da Esc ile metne döner. Tab asla takılıp kalmaz: listelerin dışında düzenleyiciden çıkar.',
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
      customization: {
        title: 'Özelleştirme',
        description:
          'Yay fiziği, basma ve giriş efektleri, köşe şekli, yarıçap ve yoğunluk: Needless UI bileşenlerinin hareketini ve hissini tüm uygulamada ya da tek tek ayarlayın.',
        blocks: [
          {
            kind: 'p',
            html: 'Her bileşenin değiştirebileceğiniz bir kişiliği vardır: hareketini belirleyen yay, bir düğmenin parmağınızın altında ne yaptığı, diyalogların ve menülerin ekranda nasıl belirdiği, köşelerinin şekli ve boyutu, bir de ne kadar yer kapladıkları. Her biri, bir öğenin içindeki her şey için tek bir nitelikle ya da tek bir bileşen için tek bir girdiyle ayarlanır.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Tek nitelik, bütün bir alt ağaç' },
          {
            kind: 'p',
            html: 'Tüm uygulama için <code>data-nui-*</code> niteliklerini <code>&lt;body&gt;</code> öğesine, uygulamanın bir bölümü içinse herhangi bir öğeye ekleyin. En yakındaki nitelik geçerli olur, bu yüzden nitelikler iç içe kullanılabilir. Yalnızca CSS değişkenlerini ayarladıkları için her framework’le, hatta hiç framework olmadan da aynı şekilde çalışırlar.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Tek bir bileşen' },
          {
            kind: 'p',
            html: 'Angular’da <code>nuiButton</code>, <code>nuiDialog</code> ve <code>nuiMenu</code> aynı değerleri girdi olarak alır. Ayarlamadığınız girdiler, üst öğelerdeki niteliklere uyar.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'CSS’e derlenen yaylar' },
          {
            kind: 'p',
            html: 'Hareket, yay fiziğine dayanır: süre ve eğri yerine sertlik, sönümleme ve kütle. Token derleyicisi her yayı hesaplar ve CSS’e, yayın durulması için gereken süre ile bir <code>linear()</code> easing fonksiyonu olarak yazar; böylece animasyon JavaScript olmadan compositor üzerinde çalışır. Altı hazır yay token olarak gelir; liste <code>--nui-spring-snappy</code> ile başlayıp <code>--nui-spring-mechanical</code> ile biter. Kullanımdaki yayı <code>--nui-motion</code> tutar.',
          },
          {
            kind: 'p',
            html: 'Başka herhangi bir yay için tek bir girdi yeterlidir. Angular onu çalışma zamanında aynı çözücüyle derler; <code>springTransition()</code> ise kendi öğeleriniz için gereken CSS’i verir.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Aradaki her şey' },
          {
            kind: 'p',
            html: 'Hazır ayarlar yalnızca birer kısayoldur. Geri kalan her şey için CSS değişkenlerini kendiniz ayarlayın: <code>--nui-press</code> ve <code>--nui-enter</code> için herhangi bir transform, <code>--nui-radius-scale</code> ve <code>--nui-density</code> için herhangi bir sayı.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Erişilebilirlik' },
          {
            kind: 'p',
            html: 'Sistem azaltılmış hareket istediğinde yaylar anında tamamlanır; basma ve giriş efektleri de hareketsiz kalır. Yoğunluk hiçbir kontrolü WCAG 2.2’nin 24px hedef boyutunun altına indirmez ve hiçbir hazır ayar renklere dokunmaz; bu sayede tüm kontrast denetimleri geçerliliğini korur. <code>corner-shape</code> desteği olmayan tarayıcılar tüm köşeleri yuvarlak çizer.',
          },
        ],
      },
      'browser-support': {
        title: 'Tarayıcı desteği',
        description:
          'Needless UI hangi tarayıcılarda çalışır ve test edilir: Chrome, Edge, Firefox ve Safari sürümleri, telefon ve dokunmatik ekranlar, eski tarayıcıların eksikleri.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI, yerel öğeler ile Popover API gibi yeni web platformu özellikleri üzerine kuruludur. Aşağıdaki tarayıcıları, belirtilen sürümden itibaren destekler. Daha eski sürümlerde menüler, select’ler ve popover’lar açılmaz.',
          },
          { kind: 'h2', id: 'supported', text: 'Desteklenen tarayıcılar' },
          {
            kind: 'table',
            caption: 'Desteklenen en eski sürümler',
            head: ['Tarayıcı', 'En düşük sürüm', 'Gerektiren özellik'],
            rows: [
              [
                'Chrome ve Edge, bilgisayarlarda ve Android’de',
                '120',
                'CSS maskeleriyle çizilen simgeler ve sağdan sola metin için <code>:dir()</code>',
              ],
              ['Firefox, bilgisayarlarda ve Android’de', '125', 'Popover API'],
              ['Mac’te Safari', '17', 'Popover API'],
              ['iPhone ve iPad’deki tüm tarayıcılar', 'iOS 17', 'Popover API'],
              ['Samsung Internet tarayıcısı', '25', 'Chrome ile aynı'],
            ],
          },
          {
            kind: 'p',
            html: 'Opera ve Brave gibi Chromium tabanlı diğer tarayıcılar Chrome’un sürümlerini izler. Angular 22’nin kendisi de Chrome, Edge ve Firefox 119 ile Safari 17 gerektirir. Internet Explorer ve Chromium öncesindeki eski Edge desteklenmez.',
          },
          { kind: 'h2', id: 'tested', text: 'Test edilen tarayıcılar' },
          {
            kind: 'p',
            html: 'Her değişiklikte tüm bileşenlerin testleri Chrome, Firefox ve Safari motorlarında çalıştırılır. Bir sürüm yayımlanmadan önce de bu dokümantasyonun her sayfası her motorda, hem bilgisayarda hem de dokunmatik bir telefonda denetlenir: sayfa yüklenmeli, tüm menüleri ve açılır pencereleri açılmalı, ekrana sığmalı ve erişilebilirlik denetimlerinden geçmelidir.',
          },
          {
            kind: 'table',
            caption: 'Testlerde kullanılan tarayıcılar',
            head: ['Motor', 'Sürüm', 'Test ortamı'],
            rows: [
              [
                'Chromium (Chrome ve Edge’in motoru)',
                '153',
                'Bir bilgisayar ve dokunmayla kullanılan bir Android telefon',
              ],
              ['Firefox', '155', 'Bir bilgisayar ve telefon boyutunda bir dokunmatik ekran'],
              [
                'WebKit (Safari’nin motoru)',
                '26.6',
                'Bir bilgisayar ve dokunmayla kullanılan bir iPhone',
              ],
              ['iPhone’da Safari', 'iOS 17.5 ve 18.6', 'iPhone simülatörü'],
            ],
          },
          {
            kind: 'p',
            html: 'Desteklenen en eski sürüm ile test edilen sürüm arasında kalanlar tek tek test edilmez: bileşenlerin ihtiyaç duyduğu tüm özelliklere sahip oldukları için desteklenirler.',
          },
          { kind: 'h2', id: 'newer', text: 'Yeni tarayıcılardaki ekstralar' },
          {
            kind: 'p',
            html: 'Bazı ayrıntılar yalnızca yeni tarayıcılarda bulunan özellikleri kullanır. Diğer tarayıcılar bunları atlar ve hiçbir şey bozulmaz:',
          },
          {
            kind: 'table',
            caption: 'Yeni tarayıcı gerektiren ayrıntılar',
            head: ['Ayrıntı', 'Tarayıcılar', 'Diğerlerinde'],
            rows: [
              [
                'Popover’lar, menüler ve diyaloglar animasyonla belirip kaybolur',
                'Chrome ve Edge, Firefox 129, Safari 17.5',
                'Bir anda belirip kaybolurlar',
              ],
              [
                'Squircle köşeler (<code>corner-shape</code>)',
                'Chrome ve Edge 139',
                'Yuvarlak köşeler',
              ],
              [
                'Ekranın herhangi bir yerinden renk seçme',
                'Bilgisayarlarda Chrome ve Edge',
                'Damlalık düğmesi yok',
              ],
              [
                'Dosya bırakma alanında bütün bir klasörü seçme',
                'Bilgisayarlardaki tarayıcılar',
                'Yalnızca dosyalar',
              ],
              [
                'Carousel’in otomatik geçiş düğmesindeki halka akıcı biçimde dolar',
                'Chrome ve Edge, Firefox 128, Safari',
                'Halka bir anda dolar',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'Telefonlar ve dokunmatik ekranlar' },
          {
            kind: 'p',
            html: 'Her bileşen dokunmayla çalışır. Ayırıcı tutamaçları, renk alanı, sütun kenarları ve toast bildirimleri sayfayı kaydırmadan parmağı izler; carousel, tarayıcının kendi kaydırmasıyla parmakla kaydırılır ve planlayıcıdaki bir etkinlik uzun basılarak tutulup taşınabilir. Dokunmatik ekranlarda alanlardaki metin en az 16px boyutunda olur; böylece iPhone’lar bu alanlarda sayfayı yakınlaştırmaz. Android klavyeleri gibi kelimeleri yazılırken birleştiren klavyelerden gelen kelimeler de bütün hâlinde ulaşır.',
          },
          {
            kind: 'p',
            html: 'Dokunmatik ekranlarda üzerine gelme olmadığından hovercard yalnızca sayfada zaten bulunanı tamamlar: içine vazgeçilmez hiçbir şey koymayın. Telefonda sohbetin Return tuşu yeni satır başlatır, gönderme işini ise düğmesi yapar.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Safari’de klavye' },
          {
            kind: 'p',
            html: 'Safari’de Tab tuşu varsayılan olarak yalnızca metin alanları ve açılır menüler arasında gezinir. Tüm düğmelere ve bağlantılara ulaşmak için Safari’nin İleri Düzey ayarlarında “Web sayfasındaki her bir öğeyi vurgulamak için Tab’a basın” seçeneğini açın ya da Option-Tab tuşlarına basın. Safari ayrıca tıklanan düğmeye odaklanmaz; bileşenler bunu telafi eder, böylece tıklamadan sonra klavye, diğer tarayıcılarda olduğu gibi kaldığı yerden devam eder.',
          },
        ],
      },
    },
    playground: {
      label: 'Özelleştirme deneme alanı',
      motion: 'Hareket',
      custom: 'özel',
      stiffness: 'Sertlik',
      damping: 'Sönümleme',
      mass: 'Kütle',
      press: 'Basma',
      enter: 'Giriş',
      corners: 'Köşeler',
      radius: 'Yarıçap',
      density: 'Yoğunluk',
      surprise: 'Beni şaşırt',
      reset: 'Varsayılanlara dön',
      hint: 'Bir düğmeyi basılı tutun, sonra bırakın. Diyaloğu ve menüyü açıp nasıl belirdiklerini izleyin.',
      save: 'Kaydet',
      cancel: 'İptal',
      delete: 'Sil',
      openDialog: 'Diyaloğu aç',
      openMenu: 'Menüyü aç',
      menu: ['Yeniden adlandır', 'Çoğalt', 'Sil'],
      dialogTitle: 'Gereğinden fazla animasyonlu',
      dialogText: 'Bu diyalog tam da istediğiniz gibi belirdi.',
      close: 'Kapat',
      curve: 'Yayın zaman içindeki konumu. Alttan başlar ve sonunda kesikli çizgide durur.',
      settles: (ms, overshoot) => `${ms} ms’de durulur · hedefi %${overshoot} aşar`,
      instant: 'Hareket yok: her şey doğrudan gideceği yere atlar.',
      stuck:
        'Bu yay 10 saniye içinde durulmuyor. Sönümlemeyi veya sertliği artırın; bu sırada bileşenler, durulan son yayı kullanmaya devam eder.',
      reducedMotion:
        'Sisteminiz daha az hareket istiyor, bu yüzden burada hiçbir şey hareket etmiyor. Sistem artık bunu istemediğinde yaylar, basma ve giriş efektleri geri gelir.',
      noCornerShape:
        'Bu tarayıcı henüz köşe şekillerini çizemiyor, bu yüzden tüm köşeler yuvarlak kalıyor.',
      everywhere: 'Herhangi bir öğede, içindeki her şey için:',
      oneComponent: 'Tek bir bileşende, Angular’da:',
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
