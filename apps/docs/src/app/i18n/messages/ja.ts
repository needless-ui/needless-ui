import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'ネイティブ要素、W3C デザイントークン、フレームワーク非依存の単一のスタイルシートで作られた、アクセシブルでテーマを自由にカスタマイズできる Angular コンポーネント。MIT ライセンスのオープンソースです。',
    skipToContent: 'メインコンテンツにスキップ',
    nav: {
      label: 'メイン',
      home: 'Needless UI ホーム',
      components: 'コンポーネント',
      guides: 'ガイド',
      github: 'GitHub',
      language: '言語',
      theme: 'テーマ',
      themes: { system: 'システム', light: 'ライト', dark: 'ダーク' },
    },
    footer: {
      license: 'MIT ライセンスで公開しています。',
      source: 'ソースコード',
      built: '無駄にこだわって、丁寧に作りました。',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
    },
    emergency: {
      label: '押すな',
      cover: '安全カバーを開ける',
      button: '押さないでください',
      armed: 'カバーが開きました。考え直してください。',
      falling: '緊急プロトコル作動中…',
      fallen: '重力はもう元に戻りません。ページを再読み込みして宇宙を再構築してください。',
      reduced: 'お使いのシステムは動きを減らす設定なので、重力はオフのままです。運がいいですね。',
    },
    toaster: { label: '通知（Alt+T）', close: '閉じる' },
  },

  home: {
    title: 'Needless UI · 無駄に作り込んだアクセシブルな Angular コンポーネント',
    description:
      'Needless UI はオープンソースの Angular コンポーネントライブラリ。ネイティブ要素、単一のスタイルシート、W3C デザイントークン、WCAG 2.2 AA 準拠を標準で備えています。',
    eyebrow: 'オープンソース · Angular 22 · MIT',
    heading: '無駄なほど丁寧に作り込んだ UI コンポーネント。',
    lead: 'Needless UI は、フレームワーク非依存の単一のスタイルシートと W3C デザイントークンで<strong>ネイティブ要素</strong>にスタイルを適用します。Angular ディレクティブが Angular Aria の振る舞いを加えるので、どのコンポーネントも最初のレンダリングからアクセシブルです。',
    getStarted: 'はじめる',
    browse: 'コンポーネントを見る',
    featuresTitle: '存在理由',
    features: [
      {
        title: 'ネイティブ要素ファースト',
        text: '<code>&lt;button nuiButton&gt;</code> は本物のボタンです。何もラップしていないので、フォームもキーボードもスクリーンリーダーもそのまま動作します。',
      },
      {
        title: 'スタイルシートは1つ、フレームワークは自由',
        text: 'コンポーネントはカスケードレイヤーに収めた素の CSS です。現在は Angular、次は React に対応し、素の HTML ならいつでも使えます。',
      },
      {
        title: 'アプリの CSS が常に優先',
        text: 'すべてが <code>@layer nui</code> に収められているため、<code>!important</code> を使ったり詳細度を競ったりしなくても、独自のスタイルで上書きできます。',
      },
      {
        title: '設計段階からアクセシブル',
        text: 'パレットの生成時に、すべての色の組み合わせを WCAG 2.2 AA の基準でチェックしています。フォーカス、強制カラーモード、動きを減らす設定にも対応済みです。',
      },
      {
        title: '無駄なほどカスタマイズ可能',
        text: 'スプリング、押下エフェクト、登場アニメーション、角の形、角丸、密度。アプリ全体なら<a href="/guides/customization">属性1つ</a>、コンポーネントごとなら入力1つで設定でき、標準の W3C デザイントークンをベースにしています。',
      },
      {
        title: 'モダンな Angular',
        text: 'シグナル入力、Zoneless、サーバーサイドレンダリングに対応。コンポーネントごとにエントリーポイントがあるので、アプリにはインポートしたものだけが含まれます。',
      },
    ],
    codeTitle: 'インポート2つで完了',
    codeText:
      'パッケージを追加し、スタイルシートを一度インポートすれば、あとはどのスタンドアロンコンポーネントでも使えます。',
  },

  components: {
    title: 'コンポーネント',
    description:
      'Needless UI の Angular コンポーネント一覧。アクセシブルなボタン、ダイアログ、メニューを、ライブデモ、API リファレンス、キーボード操作の説明とともに紹介します。',
    intro:
      'どのコンポーネントもネイティブ要素をベースに構築されており、ライブデモ、API、キーボード操作を含むドキュメントを用意しています。',
    tabsLabel: 'ドキュメントのセクション',
    tabs: { overview: '概要', api: 'API', accessibility: 'アクセシビリティ' },
    sidenavLabel: 'コンポーネント',
    onThisPage: 'このページの内容',
    example: {
      showCode: 'コードを表示',
      hideCode: 'コードを非表示',
      copy: 'コピー',
      copied: 'コピーしました',
      files: 'ソースファイル',
    },
    api: {
      import: 'インポート',
      selector: 'セレクター',
      exportAs: 'エクスポート名',
      members: 'プロパティ',
      name: '名前',
      type: '型',
      default: 'デフォルト',
      description: '説明',
      kinds: {
        input: '入力',
        model: '双方向',
        output: '出力',
        method: 'メソッド',
        property: 'プロパティ',
      },
      texts: '表示や読み上げに使うテキストもすべて入力なので、翻訳できます：',
      customization: {
        note: 'カスタマイズ用の入力のうち、設定しなかったものは最も近い <code>data-nui-*</code> 属性に従います。詳しくは<a href="/guides/customization">カスタマイズガイド</a>をご覧ください。',
        members: {
          motion:
            '動きに使うスプリング：<code>snappy</code>、<code>bouncy</code>、<code>jelly</code>、<code>elastic</code>、<code>lazy</code>、<code>mechanical</code>、<code>none</code> のいずれか。',
          spring:
            '任意のスプリング。<code>{ stiffness, damping, mass }</code> の形で指定し、実行時に CSS にコンパイルされます。<code>motion</code> より優先されます。',
          press:
            '押している間の動き：<code>sink</code>、<code>squish</code>、<code>pop</code>、<code>wobble</code>、<code>rubber</code>、<code>tilt</code>、<code>none</code> のいずれか。',
          enter:
            '登場のしかた：<code>zoom</code>、<code>fade</code>、<code>drop</code>、<code>rise</code>、<code>unfold</code>、<code>flip</code>、<code>swing</code>、<code>slide</code>、<code>none</code> のいずれか。',
          corners:
            '角の形：<code>round</code>、<code>squircle</code>、<code>bevel</code>、<code>scoop</code>、<code>notch</code>、<code>square</code> のいずれか。',
          radius:
            '角の大きさ：<code>none</code>、<code>small</code>、<code>medium</code>、<code>large</code>、<code>full</code> のいずれか。',
          density:
            '占めるスペースの広さ：<code>compact</code>、<code>regular</code>、<code>roomy</code> のいずれか。',
        },
      },
    },
    a11y: {
      keyboard: 'キーボード操作',
      key: 'キー',
      action: '動作',
      notes: 'アクセシビリティの注意点',
    },
    titles: {
      // A space after a Latin name (Button の API), none after a Japanese one (アバターの API).
      api: (name) => `${name}${/[぀-ヿ㐀-鿿豈-﫿]$/u.test(name) ? '' : ' '}の API`,
      accessibility: (name) =>
        `${name}${/[぀-ヿ㐀-鿿豈-﫿]$/u.test(name) ? '' : ' '}のアクセシビリティ`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Angular 用ボタンコンポーネント',
        summary:
          'アクションとリンクのためのボタン。ネイティブの button 要素と a 要素にスタイルを適用します。',
        description:
          'ネイティブの button 要素と a 要素に使える、アクセシブルな Angular ボタンディレクティブ。4種類のバリアント、3種類のトーンとサイズ、リンクに対応します。',
        apiDescription:
          'Needless UI のボタンの API リファレンス。nuiButton ディレクティブとそのセレクター、variant、tone、size、disabled の各入力を解説します。',
        a11yDescription:
          'Needless UI のボタンのキーボード操作とアクセシビリティ。ネイティブのセマンティクス、フォーカスリング、コントラスト、ターゲットサイズ、無効なリンクを解説します。',
        overview: [
          '<code>nuiButton</code> ディレクティブは、ネイティブの <code>&lt;button&gt;</code> または <code>&lt;a&gt;</code> にスタイルを適用します。要素本来のセマンティクス、キーボード操作、フォームとの連携はそのまま保たれます。ディレクティブが行うのは、入力の値をスタイルシートが参照する data 属性に反映することだけです。',
          'アクションには <code>&lt;button&gt;</code>、ナビゲーションには <code>&lt;a&gt;</code> を使ってください。どちらも見た目は同じで、どちらも <code>disabled</code> に対応しています。',
        ],
        examples: {
          variants: {
            title: 'バリアント',
            text: '塗りのスタイルは4種類あり、最も目立つものから最も控えめなものまで揃っています。主要なアクションに使う塗りつぶしのボタンは、1画面につき1つにしてください。',
          },
          tones: {
            title: 'トーン',
            text: 'トーンはパレットを切り替えます。メインの導線には accent、補助的なアクションには neutral、破壊的なアクションには danger を使います。',
          },
          sizes: {
            title: 'サイズ',
            text: '高さは28、36、44ピクセルの3種類です。最も小さいサイズでも WCAG 2.2 の最小ターゲットサイズを満たします。',
          },
          links: {
            title: 'リンクと無効なボタン',
            text: 'a 要素はネイティブには無効化できないため、無効なリンクには <code>aria-disabled="true"</code> を設定し、<code>routerLink</code> を使っている場合でもクリックをブロックします。',
          },
          presses: {
            title: '押下エフェクト',
            text: 'ボタンを1つずつ長押ししてみてください。<code>press</code> は押している間のボタンの動きを、<code>motion</code> は元に戻るときのスプリングを設定します。任意の要素に <code>data-nui-press</code> を指定すると、その中のすべてに適用されます。',
          },
          shapes: {
            title: '角の形、角丸、密度',
            text: '<code>corners</code> は角の形を、<code>radius</code> は角の大きさを、<code>density</code> はボタンが占めるスペースの広さを変えます。ただし、ボタンが 24px のターゲットサイズを下回ることはありません。<code>corner-shape</code> に対応していないブラウザーでは、角は丸く描画されます。',
          },
        },
        api: {
          NuiButton: {
            summary:
              'ネイティブの <code>&lt;button&gt;</code> または <code>&lt;a&gt;</code> をボタンとしてスタイリングします。',
            members: {
              variant:
                '塗りのスタイル：<code>solid</code>、<code>soft</code>、<code>outline</code>、<code>ghost</code> のいずれか。',
              tone: 'カラーパレット：<code>accent</code>、<code>neutral</code>、<code>danger</code> のいずれか。',
              size: '高さ、パディング、フォントサイズ：<code>sm</code>、<code>md</code>、<code>lg</code> のいずれか。',
              disabled:
                'ボタンを無効にします。a 要素では <code>aria-disabled</code> を設定し、リンクが実行されないようにします。',
            },
          },
        },
        keyboard: [
          ['Tab', 'ボタンまたはリンクにフォーカスを移動します。'],
          ['Enter', 'ボタンをアクティブにするか、リンク先に移動します。'],
          [
            'Space',
            'ボタンをアクティブにします。リンク上ではページをスクロールします（ネイティブの動作）。',
          ],
        ],
        notes: [
          'アクセシブルな名前には要素のテキストが使われます。アイコンのみのボタンには <code>aria-label</code> が必要です。',
          'テキストは、すべてのバリアント、トーン、テーマで 4.5:1 のコントラスト比を満たします。これはパレットジェネレーターが保証しています。',
          'フォーカスリングは 2px のアウトラインで、どちらのテーマでもページとのコントラストが 3:1 以上あります。',
          '無効な <code>&lt;button&gt;</code> はタブ順序から外れます。無効なリンクはフォーカスを受け取れるままなので、スクリーンリーダーの利用者も見つけることができ、無効であることが読み上げられます。',
          '強制カラーモードでは、透明なボーダーがシステムカラーの見えるアウトラインに変わります。',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Angular 用ダイアログコンポーネント',
        summary:
          'ネイティブの dialog 要素を使ったモーダルウィンドウ。フォーカスはブラウザーが管理します。',
        description:
          'ネイティブの dialog 要素で構築したアクセシブルな Angular ダイアログ。モーダルのフォーカス管理、Esc キーや背景のクリックで閉じる操作、戻り値に対応します。',
        apiDescription:
          'Needless UI のダイアログの API リファレンス。open の双方向バインディング、サイズ、戻り値を扱う nuiDialog と、タイトル、説明、閉じるボタンのパーツを解説します。',
        a11yDescription:
          'Needless UI のダイアログのキーボード操作とアクセシビリティ。モーダルのフォーカス、Esc キー、フォーカスの復元、コンテンツのラベル付けを解説します。',
        overview: [
          '<code>nuiDialog</code> ディレクティブは、ネイティブの <code>&lt;dialog&gt;</code> を Needless UI のダイアログに変えます。モーダルの動作はブラウザーが提供します。背後のページは操作できなくなり、フォーカスはダイアログ内にとどまります。Esc キーで閉じることができ、閉じるとフォーカスはダイアログを開いた要素に戻ります。',
          '<code>[(open)]</code> をシグナルにバインドし、閉じるボタンに <code>nuiDialogClose="…"</code> で値を指定すると、ダイアログがどのように閉じられたかがわかります。',
        ],
        examples: {
          confirm: {
            title: '確認ダイアログ',
            text: '破壊的な操作の確認です。安全な選択肢に <code>autofocus</code> を付け、選ばれた値は <code>(closed)</code> で受け取ります。',
          },
          form: {
            title: 'ダイアログ内のフォーム',
            text: 'ダイアログには任意のコンテンツを配置できます。この例では、ダイアログが開くと最初のフィールドにフォーカスが移ります。',
          },
          dismissible: {
            title: '閉じ方を限定したダイアログ',
            text: '<code>[dismissible]="false"</code> を指定すると Esc キーと背景のクリックが無視されるため、ユーザーはいずれかの選択肢を選ぶ必要があります。',
          },
          entrances: {
            title: '登場アニメーション',
            text: 'どのボタンも同じダイアログを開きますが、<code>enter</code> プリセットはボタンごとに異なり、スプリングはすべて <code>bouncy</code> です。どのように登場しても、閉じるときはすばやくフェードアウトします。',
          },
        },
        api: {
          NuiDialog: {
            summary:
              'ネイティブの <code>&lt;dialog&gt;</code> を Needless UI のダイアログに変えます。',
            members: {
              open: 'ダイアログが開いているかどうか。<code>[(open)]</code> でバインドします。',
              modal: '背景を表示し、背後のページを操作できない状態にして、モーダルとして開きます。',
              dismissible: 'Esc キーや背景のクリックでダイアログを閉じるかどうか。',
              size: '最大幅：<code>sm</code>（24rem）、<code>md</code>（32rem）、<code>lg</code>（44rem）のいずれか。',
              closed:
                'ダイアログが閉じるたびに戻り値を出力します。選択せずに閉じられた場合は空になります。',
              close: 'ダイアログを閉じます。戻り値を指定することもできます。',
            },
          },
          NuiDialogTitle: {
            summary:
              'ダイアログのタイトル。id が付与され、ダイアログの <code>aria-labelledby</code> として使われます。',
            members: {},
          },
          NuiDialogDescription: {
            summary: '短い説明文。ダイアログの <code>aria-describedby</code> から参照されます。',
            members: {},
          },
          NuiDialogActions: {
            summary: 'ダイアログ下部に並ぶボタンの行。末尾側に揃えて配置されます。',
            members: {},
          },
          NuiDialogClose: {
            summary: 'クリックすると、それを含むダイアログを閉じます。',
            members: {
              nuiDialogClose:
                'ダイアログを閉じるときの値。<code>(closed)</code> から出力されます。',
            },
          },
        },
        keyboard: [
          ['Tab', 'ダイアログ内の次の要素にフォーカスを移動します。'],
          ['Shift + Tab', 'ダイアログ内の前の要素にフォーカスを移動します。'],
          ['Esc', 'ダイアログを閉じます（閉じ方を限定している場合を除く）。'],
        ],
        notes: [
          '<code>showModal()</code> で開くと、ダイアログに <code>role="dialog"</code> とモーダルのセマンティクスが与えられ、ページのほかの部分は操作できなくなります。',
          'タイトルと説明は生成された id で関連付けられるため、ダイアログが開くとスクリーンリーダーは両方を読み上げます。',
          '最初のフォーカスは <code>autofocus</code> を持つ要素に、なければ最初のフォーカス可能な要素に移ります。破壊的な操作の確認では、安全な選択肢に <code>autofocus</code> を付けてください。',
          'ダイアログが閉じると、フォーカスはダイアログを開いた要素に戻ります。',
          'ユーザーの操作がないまま Esc キーが繰り返し押されると、閉じ方を限定したダイアログでもブラウザーが閉じることがあります。必ず明示的な閉じる手段を用意してください。',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Angular 用メニューコンポーネント',
        summary:
          'アクションの一覧をポップアップで表示するメニュー。サブメニューやチェック可能な項目を備え、キーボード操作に完全対応しています。',
        description:
          'Angular Aria で構築したアクセシブルな Angular メニュー。キーボード操作、文字検索、サブメニュー、チェックボックス・ラジオ項目、ビューポートに合わせた配置に対応します。',
        apiDescription:
          'Needless UI のメニューの API リファレンス。nuiMenuTrigger、nuiMenu、nuiMenuItem と、値、トーン、サブメニュー、チェック状態を解説します。',
        a11yDescription:
          'Needless UI のメニューのキーボード操作とアクセシビリティ。矢印キー、文字検索、サブメニュー、Esc キー、フォーカスの戻り先を解説します。',
        overview: [
          'メニューは、トリガーを押すとアクションの一覧を表示します。動作は Angular Aria のメニューパターンによるもので、Needless UI はスタイルを加え、メニューをページの上にポップオーバーとして表示し、ビューポート内に収まるようにします。',
          'メニューの <code>ngMenu</code> 参照を <code>[nuiMenuTrigger]</code> に渡し、各項目に一意の <code>value</code> を指定します。選択は、各項目の <code>(selected)</code> またはメニューの <code>(itemSelected)</code> で受け取ります。',
        ],
        examples: {
          actions: {
            title: 'アクション',
            text: 'ショートカットのヒント、区切り線、破壊的な項目を含むアクションメニューです。',
          },
          submenu: {
            title: 'サブメニュー',
            text: '<code>[submenu]</code> で項目を入れ子の <code>nuiMenu</code> に関連付けます。ホバーするか右矢印キーを押すと開きます。',
          },
          checkable: {
            title: 'チェックボックス項目とラジオ項目',
            text: '<code>role</code> を設定し、<code>[checked]</code> をバインドします。メニューがインジケーターを表示し、状態を読み上げます。',
          },
          entrances: {
            title: '登場アニメーションとスプリング',
            text: '各メニューは <code>enter</code> プリセットと <code>motion</code> のスプリングを組み合わせ、開く側から広がるように現れます。サブメニューはその両方を継承します。',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'メニューを開きます。通常は <code>nuiButton</code> に適用します。',
            members: {
              nuiMenuTrigger:
                '開くメニュー。<code>nuiMenu</code> の <code>ngMenu</code> 参照を指定します。',
            },
          },
          NuiMenu: {
            summary:
              '項目を並べたメニューで、トリガーの隣にポップオーバーとして表示されます。<code>ngMenu</code> としてエクスポートされるのは、トリガーやサブメニューに渡す Angular Aria のメニューです。',
            members: {
              wrap: '矢印キーで最後の項目から最初の項目に戻るかどうか。',
              typeaheadDelay: '文字検索がリセットされるまでのミリ秒数。',
              disabled: 'メニュー全体を無効にします。',
              itemSelected:
                '選ばれた項目の値を出力します。ルートメニューでは、サブメニューの項目が選ばれたときにも発火します。',
            },
          },
          NuiMenuItem: {
            summary: '<code>nuiMenu</code> 内の項目。',
            members: {
              value:
                '項目を識別する値。サブメニューも含め、メニュー全体で一意である必要があります。',
              disabled:
                '項目を無効にします。矢印キーで移動することはできますが、選択はできません。',
              submenu: 'この項目が開く、入れ子の <code>nuiMenu</code>。',
              role: '<code>menuitem</code>、<code>menuitemcheckbox</code>、<code>menuitemradio</code> のいずれか。',
              checked: 'チェックボックス項目またはラジオ項目のチェック状態。',
              tone: '破壊的なアクションには <code>danger</code> を指定します。',
              searchTerm: '文字検索で照合するテキスト。デフォルトは項目のラベルです。',
              selected: 'マウスまたはキーボードで項目が選ばれたときに、その値を出力します。',
            },
          },
          NuiMenuSeparator: { summary: '項目のグループを区切る線。', members: {} },
          NuiMenuShortcut: {
            summary: 'キーボードショートカットのヒント。項目の末尾側に揃えて表示されます。',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter または Space',
            'トリガー上：メニューを開き、最初の項目にフォーカスします。項目上：その項目を選択するか、サブメニューを開きます。',
          ],
          [
            '下矢印キー',
            'トリガー上：メニューを開き、最初の項目にフォーカスします。メニュー内：次の項目に移動します。',
          ],
          [
            '上矢印キー',
            'トリガー上：メニューを開き、最後の項目にフォーカスします。メニュー内：前の項目に移動します。',
          ],
          ['Home / End', '最初または最後の項目に移動します。'],
          [
            '右矢印キー',
            'サブメニューを開き、その最初の項目に移動します（右から左に書く言語では左矢印キー）。',
          ],
          [
            '左矢印キー',
            'サブメニューを閉じ、親の項目に戻ります（右から左に書く言語では右矢印キー）。',
          ],
          ['Esc', 'メニューを閉じ、トリガーにフォーカスを戻します。'],
          ['文字キー', '入力した文字で始まるラベルを持つ、次の項目に移動します。'],
        ],
        notes: [
          'トリガーには <code>aria-haspopup</code>、<code>aria-expanded</code>、<code>aria-controls</code> が付与され、メニューと項目には Angular Aria が ARIA ロールを設定します。',
          'ハイライトされた項目は、テキストのコントラストが 4.5:1 以上のベタ塗りで表示され、フォーカスインジケーターも兼ねます。強制カラーモードでは、システムのハイライト色でアウトラインが表示されます。',
          'チェック可能な項目は、<code>aria-checked</code> で状態を伝えます。',
          '項目を選ぶとメニューが閉じ、フォーカスはトリガーに戻ります。トリガーとメニューの外にフォーカスが移った場合もメニューは閉じます。',
          '項目の高さは28ピクセル以上あり、WCAG 2.2 の最小ターゲットサイズを上回ります。',
        ],
      },

      avatar: {
        name: 'アバター',
        title: 'Angular 用アバターコンポーネント',
        summary: '人物の写真、またはその人だけの色を背景にしたイニシャル。',
        description:
          '写真がないときはイニシャルを表示する Angular のアバター。名前ごとに決まる色、ステータスドット、グループに対応し、どのテーマでも読みやすく表示します。',
        apiDescription:
          'Needless UI のアバターの API リファレンス。名前、写真、サイズ、形状、ステータスを指定する nuiAvatar と、nuiAvatarGroup を解説します。',
        a11yDescription:
          'Needless UI のアバターのアクセシビリティ。画像のロールと名前、装飾用のアバター、4.5:1 のコントラストを保つイニシャルを解説します。',
        overview: [
          '<code>nuiAvatar</code> コンポーネントは写真を表示し、写真がない場合や読み込みに失敗した場合は、その人のイニシャルを表示します。イニシャルの背景色は名前から計算されるため、同じ人はどこでも同じ色になります。',
          'どの色相でも明度と彩度に上限を設けているため、名前やテーマにかかわらず、白いイニシャルのコントラスト比は常に 4.5:1 を上回ります。',
        ],
        examples: {
          people: {
            title: 'イニシャル、写真、ステータス',
            text: '<code>src</code> がない場合、イニシャルと色は <code>name</code> から決まります。<code>status</code> を指定すると、在席状況を示すドットが付きます。',
          },
          group: {
            title: 'グループ、サイズ、形状',
            text: '<code>nuiAvatarGroup</code> は、アバターを1列に重ねて並べます。<code>size</code> には <code>sm</code>、<code>md</code>、<code>lg</code> を指定でき、<code>shape="square"</code> はチームやアプリに適しています。',
          },
        },
        api: {
          NuiAvatar: {
            summary: '写真またはイニシャル。その人の名前がアクセシブルな名前になります。',
            members: {
              name: 'その人の名前。アクセシブルな名前、イニシャル、色はこの値から決まります。',
              src: '写真の URL。読み込みに失敗した場合は、代わりにイニシャルが表示されます。',
              size: 'サイズ：<code>sm</code>、<code>md</code>、<code>lg</code> のいずれか。',
              shape: '<code>circle</code> または <code>square</code>。',
              status:
                '在席状況を示すドット：<code>online</code>、<code>away</code>、<code>busy</code>、<code>offline</code> のいずれか。',
              label:
                '名前よりも多くを伝えるアクセシブルな名前。たとえば「Ada Lovelace、オンライン」。',
              decorative:
                '支援技術からアバターを隠します。名前がすぐ横に表示されているアバターに使います。',
            },
          },
          NuiAvatarGroup: {
            summary: '重なり合うアバターの列。<code>aria-label</code> で名前を付けてください。',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'アバターは、その人の名前を持つ画像（<code>role="img"</code>）です。名前がすぐ横に表示されている場合は、スクリーンリーダーで二重に読み上げられないよう <code>decorative</code> を指定してください。',
          'ステータスドットは見た目だけの表示です。重要な場合は <code>label</code> に含めてください。',
          'イニシャルは、生成されるどの色の上でも 4.5:1 以上のコントラスト比を保ちます。',
        ],
      },

      breadcrumbs: {
        name: 'パンくずリスト',
        title: 'Angular 用パンくずリストコンポーネント',
        summary: '現在のページへと続く、ページの道筋。',
        description:
          'ネイティブの nav 要素とリストで構築したアクセシブルな Angular パンくずリスト。CSS の区切りは右から左に書く言語で反転し、長いリストはスクロールします。',
        apiDescription:
          'Needless UI のパンくずリストの API リファレンス。nuiBreadcrumbs ディレクティブと、ランドマークのラベルを解説します。',
        a11yDescription:
          'Needless UI のパンくずリストのアクセシビリティ。ナビゲーションランドマーク、リストのセマンティクス、現在のページ、ターゲットサイズを解説します。',
        overview: [
          'パンくずリストは、ページがサイト内のどこにあるかを示します。<code>nuiBreadcrumbs</code> ディレクティブは、ネイティブの <code>&lt;nav&gt;</code> とその中のリストにスタイルを適用します。最後の項目が現在のページで、<code>aria-current="page"</code> で示します。',
          'コンテナーより長いパンくずリストは、折り返さずに横にスクロールします。最初は末尾までスクロールした状態で表示され、続きがある側の端はフェードします。',
        ],
        examples: {
          trail: {
            title: '基本',
            text: '上位のページへのリンクを並べ、最後に現在のページを <code>aria-current="page"</code> 付きのプレーンテキストで表示します。',
          },
          long: {
            title: '長いパンくずリスト',
            text: '幅の狭いコンテナーではパンくずリストがスクロールし、最初から現在のページが見える状態で表示されます。',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary:
              '<code>&lt;nav&gt;</code> とその中のリストを、パンくずリストとしてスタイリングします。',
            members: { label: 'ナビゲーションランドマークのアクセシブルな名前。' },
          },
        },
        keyboard: [['Tab', 'パンくずリスト内の次のリンクに移動します。']],
        notes: [
          'シンプルなリストを含むナビゲーションランドマークなので、スクリーンリーダーはパンくずリストのページ数を読み上げます。',
          '区切りは CSS で描画されるため読み上げられず、右から左に書く言語では反転します。',
          'どのリンクも高さが 24px 以上あります。',
        ],
      },

      empty: {
        name: 'エンプティステート',
        title: 'Angular 用エンプティステートコンポーネント',
        summary: '表示するものが何もないときに表示するもの、そして次にできること。',
        description:
          '画像、タイトル、短い説明、アクションで構成する Angular のエンプティステート。ゆっくりと浮遊する4種類の組み込みイラストも用意しています。',
        apiDescription:
          'Needless UI のエンプティステートの API リファレンス。nuiEmpty と、メディア、タイトル、説明、アクションの各パーツを解説します。',
        a11yDescription:
          'Needless UI のエンプティステートのアクセシビリティ。装飾的な画像、意味のある見出し、動きを減らす設定への対応を解説します。',
        overview: [
          'エンプティステートは、まだ何も入っていないリスト、テーブル、ページの代わりに表示します。その理由を説明し、次の一歩を示します。',
          'メディアのパーツには独自の画像を入れることも、組み込みのイラスト（<code>search</code>、<code>inbox</code>、<code>files</code>、<code>error</code>）を描画することもできます。',
        ],
        examples: {
          search: {
            title: '検索結果なし',
            text: '何が起きたかを伝えるタイトル、1行のヘルプ、そして抜け出すためのアクションで構成します。',
          },
          pictures: {
            title: '組み込みのイラスト',
            text: '<code>nuiEmptyMedia</code> に <code>illustration</code> を指定します。イラストはテーマに合わせて変わり、動きを減らす設定でなければ浮遊します。',
          },
        },
        api: {
          NuiEmpty: { summary: 'コンテナー。中央揃えの縦1列のレイアウトです。', members: {} },
          NuiEmptyMedia: {
            summary: '画像。支援技術からは隠されます。',
            members: {
              illustration:
                '組み込みのイラスト：<code>search</code>、<code>inbox</code>、<code>files</code>、<code>error</code> のいずれか。',
            },
          },
          NuiEmptyTitle: {
            summary: 'タイトル。ページに合った見出しレベルを使ってください。',
            members: {},
          },
          NuiEmptyDescription: { summary: '1行の説明文。', members: {} },
          NuiEmptyActions: { summary: '横に並んだボタン。', members: {} },
        },
        keyboard: [],
        notes: [
          '画像は装飾的なもの（<code>aria-hidden</code>）で、メッセージはタイトルと説明が伝えます。',
          'タイトルには見出しを使い、ページのアウトラインに合ったレベルにしてください。',
          'ユーザーが動きを減らす設定にしている場合、組み込みのイラストは浮遊しません。',
        ],
      },

      'number-field': {
        name: '数値入力',
        title: 'Angular 用数値入力コンポーネント',
        summary: 'ステッパー付きの数値入力。どのロケールでも適切な書式で表示します。',
        description:
          'アクセシブルな Angular の数値入力。ステップボタン付きのスピンボタン、キーボードでの増減、最小値と最大値、通貨・パーセント・単位のロケール書式に対応します。',
        apiDescription:
          'Needless UI の数値入力の API リファレンス。nuiNumberField、min、max、step、format を持つ nuiNumberInput、nuiNumberStep を解説します。',
        a11yDescription:
          'Needless UI の数値入力のキーボード操作とアクセシビリティ。spinbutton ロール、矢印キーと Page キー、ステップボタンを解説します。',
        overview: [
          '数値入力は、数値を保持するテキスト入力です。数値をロケールに合わせた書式で表示し、入力されたテキストも同じ書式で読み取ります。フォーカスが外れると、値を <code>min</code> から <code>max</code> の範囲内で <code>step</code> の刻みに合わせます。',
          'ネイティブの数字や区切り文字も読み取れます。アラビア・インド数字、ペルシア数字、デーヴァナーガリー数字、桁区切りとして使われるスペースやピリオド、あらゆる種類のマイナス記号に対応します。ステップボタンを押し続けると、だんだん速く繰り返します。',
        ],
        examples: {
          guests: {
            title: 'ステッパー',
            text: '両側にボタンがあり、<code>min</code> と <code>max</code> に達すると無効になります。矢印キーでも増減できます。',
          },
          formats: {
            title: '通貨とパーセント',
            text: '<code>format</code> に <code>Intl.NumberFormat</code> のオプションを渡し、<code>locale</code> を指定します。値は普通の数値のままです。',
          },
        },
        api: {
          NuiNumberField: {
            summary: '入力とそのステップボタンをまとめます。',
            members: {},
          },
          NuiNumberInput: {
            summary: '数値を保持するテキスト入力。ARIA のスピンボタンとして動作します。',
            members: {
              value: '数値。空の場合は <code>null</code>。フォームでも使えます。',
              min: '許容される最小値。',
              max: '許容される最大値。',
              step: '1ステップで値がどれだけ変わるか。フォーカスが外れると、値はこの刻みに合わせられます。',
              format:
                "<code>Intl.NumberFormat</code> のオプション。たとえば <code>{ style: 'currency', currency: 'EUR' }</code>。",
              locale: '数値の書式設定と読み取りに使うロケール。',
              disabled: '入力とそのボタンを無効にします。',
              stepBy: '指定したステップ数だけ値を増やします（正の数）または減らします（負の数）。',
            },
          },
          NuiNumberStep: {
            summary: 'ステップボタン。押し続けると繰り返します。',
            members: {
              nuiNumberStep: '<code>1</code> で増やし、<code>-1</code> で減らします。',
              label: 'アクセシブルな名前。デフォルトは「Increase」または「Decrease」です。',
            },
          },
        },
        keyboard: [
          ['上下矢印キー', '値を1ステップ増減します。'],
          ['Page Up / Page Down', '10ステップ分増減します。'],
          ['Home / End', '最小値または最大値に移動します。'],
          ['Enter', '入力した内容を確定します。'],
        ],
        notes: [
          '入力は <code>spinbutton</code> で、<code>aria-valuenow</code>、<code>aria-valuemin</code>、<code>aria-valuemax</code> を持ち、書式設定された値が <code>aria-valuetext</code> になります。',
          'キーで同じ操作ができるため、ステップボタンはタブ順序から外れていますが、名前が付いており、<code>aria-controls</code> で入力と関連付けられています。',
          '入力には <code>aria-label</code> または <code>&lt;label&gt;</code> でラベルを付けてください。',
        ],
      },

      otp: {
        name: 'OTP 入力',
        title: 'Angular 用 OTP・認証コード入力コンポーネント',
        summary: 'マスに分けて表示する認証コード入力。実体は1つの本物の入力欄です。',
        description:
          'アクセシブルな Angular の OTP 入力。マスの下は1つのネイティブ入力欄で、SMS 自動入力、WebOTP、貼り付けの整形、グループ、マスク表示、エラー時の揺れに対応します。',
        apiDescription:
          'Needless UI の OTP 入力の API リファレンス。長さ、パターン、グループ、マスク表示を指定する nuiOtp と、WebOTP に対応した nuiOtpInput を解説します。',
        a11yDescription:
          'Needless UI の OTP 入力のキーボード操作とアクセシビリティ。ラベル付きのテキストフィールド1つ、見えるフォーカスリング、自動入力を解説します。',
        overview: [
          'OTP 入力はマスが並んでいるように見えますが、実体は1つのネイティブの <code>&lt;input&gt;</code> です。SMS の自動入力（<code>autocomplete="one-time-code"</code>）、貼り付け、パスワードマネージャー、フォーム、スクリーンリーダーからは、ごく普通のテキストフィールドに見えます。',
          '貼り付けたコードは整形されるため、「123-456」でも「123 456」でも入力でき、パターンで許可されていない文字は受け付けません。Android では、<code>webOtp</code> が SMS の到着と同時にコードを入力します。',
        ],
        examples: {
          verify: {
            title: '認証',
            text: '最後のマスが埋まると <code>(completed)</code> が発火します。コードを受け付けないときは、入力に <code>aria-invalid</code> を設定します。マスが赤くなって揺れます。',
          },
          letters: {
            title: '英字、グループ、マスク表示',
            text: '<code>pattern="alphanumeric"</code> で英字も入力でき、<code>[groups]</code> で区切りを追加し、<code>masked</code> で文字をドットで表示します。',
          },
        },
        api: {
          NuiOtp: {
            summary: 'マスを描画し、入力を包みます。',
            members: {
              length: '文字数。',
              pattern:
                '<code>digits</code>、または英字と数字を受け付ける <code>alphanumeric</code>。',
              groups:
                'グループごとの文字数。グループの間には区切りが描画されます。たとえば <code>[3, 3]</code>。',
              masked: '文字の代わりにドットを表示します。',
              completed: '最後のマスが埋まるたびに、コードを出力します。',
            },
          },
          NuiOtpInput: {
            summary: '実体となる入力。ワンタイムコードに必要な属性が設定されます。',
            members: {
              webOtp: '対応環境では、WebOTP API を使って受信した SMS からコードを入力します。',
            },
          },
        },
        keyboard: [
          ['数字キーまたは文字キー', '現在のマスに入力し、次のマスに移動します。'],
          ['Backspace', 'キャレットの前の文字を削除します。'],
          [
            '左右矢印キー',
            '1マス移動します。入力済みのマスは選択されるので、入力すると置き換わります。',
          ],
          ['貼り付け', 'コピーしたコードでマスを埋めます。'],
        ],
        notes: [
          'スクリーンリーダーからは、1つのテキストフィールドとして認識されます。<code>aria-label</code> または <code>&lt;label&gt;</code> でラベルを付けてください。',
          'マスは支援技術から隠されており、編集中のマスにフォーカスリングが表示されます。',
          '動きを減らす設定では、キャレットは点滅せず、マスも跳ねたり揺れたりしません。',
        ],
      },

      rating: {
        name: '評価',
        title: 'Angular 用星評価コンポーネント',
        summary: '評価に使う星。実体は本物のラジオボタンです。',
        description:
          'ネイティブのラジオボタンで構築したアクセシブルな Angular の星評価。キーボードとフォーム、ホバー時のプレビュー、評価の解除、読み取り専用での小数表示に対応します。',
        apiDescription:
          'Needless UI の評価の API リファレンス。値、最大値、読み取り専用モード、解除可能モードを持つ nuiRating と、翻訳できるラベルを解説します。',
        a11yDescription:
          'Needless UI の評価のキーボード操作とアクセシビリティ。名前付きのラジオグループ、ラベル付きの星、読み取り専用時の画像を解説します。',
        overview: [
          '評価は、星として描画したネイティブのラジオボタンのグループです。矢印キー、フォーム、スクリーンリーダーは通常のラジオグループと同じように動作します。CSS が星を塗りつぶし、ポインターの位置に新しい評価をプレビューします。',
          '読み取り専用では、平均の 4.3 のような任意の小数も表示できます。',
        ],
        examples: {
          pick: {
            title: '評価する',
            text: '<code>[(value)]</code> またはフォームにバインドします。<code>clearable</code> を指定すると、同じ星をもう一度選んだときに評価が解除されます。',
          },
          average: {
            title: '平均を表示する',
            text: '<code>readonly</code> は星を任意の割合まで塗りつぶし、画像に「Rated 4.3 out of 5」という名前を付けます。',
          },
        },
        api: {
          NuiRating: {
            summary: '星のラジオグループ、または評価を表す読み取り専用の画像。',
            members: {
              value: '評価値、または <code>null</code>。フォームでも使えます。',
              max: '星の数。',
              readonly: '評価を入力させる代わりに、値を任意の小数まで表示します。',
              disabled: 'すべての星を無効にします。',
              clearable: '現在の星をもう一度選ぶと、評価が解除されます。',
              name: 'ラジオボタンが共有する名前。デフォルトでは自動生成されます。',
              starLabel: '各星のアクセシブルな名前。星の値を受け取る関数で指定します。',
              readonlyLabel: '読み取り専用モードでのアクセシブルな名前。',
            },
          },
        },
        keyboard: [
          ['Tab', 'グループ内の、チェックされている星に移動します。'],
          ['矢印キー', '評価を変更します。'],
          ['Space', 'フォーカスされている星をチェックします。'],
        ],
        notes: [
          '各星は「3 stars」という名前のネイティブのラジオボタンです。グループには <code>aria-label</code> で名前を付けてください。',
          '読み取り専用の評価は、「Rated 4.3 out of 5」という名前の画像（<code>role="img"</code>）です。',
          '星は CSS マスクで描画されるため、強制カラーモードに従います。',
        ],
      },

      skeleton: {
        name: 'スケルトン',
        title: 'Angular 用スケルトンローダーコンポーネント',
        summary: 'コンテンツの読み込み中にレイアウトを保つプレースホルダー。',
        description:
          'テキスト、円、ブロックに使える Angular のスケルトンローダー。1本のシマーがページ全体を横切り、動きを減らす設定ではシマーを表示しません。',
        apiDescription:
          'Needless UI のスケルトンの API リファレンス。nuiSkeleton ディレクティブと、テキスト、円、ブロックの形状を解説します。',
        a11yDescription:
          'Needless UI のスケルトンのアクセシビリティ。隠されたプレースホルダー、aria-busy の領域、動きを減らす設定、強制カラーモードを解説します。',
        overview: [
          'スケルトンは読み込み中のコンテンツの形を保つので、コンテンツが表示されてもページがずれません。サイズは CSS で指定してください。',
          'シマーはビューポートに固定されています。サイズや位置にかかわらず、1本のハイライトがページ上のすべてのスケルトンを同時に横切ります。',
        ],
        examples: {
          card: {
            title: 'カードの読み込み',
            text: '行、円、ブロックがプロフィールの代わりに表示されます。読み込み中、カードは <code>aria-busy</code> になります。',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'プレースホルダー。支援技術からは隠されます。',
            members: {
              shape:
                '<code>text</code>（1行）、<code>circle</code>、<code>block</code> のいずれか。',
            },
          },
        },
        keyboard: [],
        notes: [
          'スケルトンはスクリーンリーダーから隠されています。読み込み中の領域に <code>aria-busy="true"</code> を設定し、コンテンツが表示されたら削除してください。',
          'ユーザーが動きを減らす設定にしている場合、シマーは表示されません。',
          '強制カラーモードでは、各スケルトンにアウトラインが付きます。',
        ],
      },

      toast: {
        name: 'トースト',
        title: 'Angular 用トースト通知',
        summary: '積み重なり、スワイプで消せて、フォーカスを奪わない短いメッセージ。',
        description:
          'アクセシブルな Angular のトースト。トップレイヤーでの重ね表示、Promise トースト、元に戻す操作、スワイプで閉じる操作、ホバーやフォーカスで止まるタイマーに対応します。',
        apiDescription:
          'Needless UI のトーストの API リファレンス。NuiToaster サービスとそのオプション、Promise トースト、nui-toaster 領域を解説します。',
        a11yDescription:
          'Needless UI のトーストのキーボード操作とアクセシビリティ。読み上げ、Alt+T のホットキー、Esc キー、一時停止するタイマーを解説します。',
        overview: [
          'トーストは、作業を中断させることなく、直前の出来事を知らせたり、「元に戻す」などのアクションを提示したりします。アプリシェルに <code>&lt;nui-toaster&gt;</code> を1つ置けば、どこからでも <code>NuiToaster</code> を呼び出せます。',
          'トーストは最新のものの後ろに重なり、ホバーやフォーカスで扇状に広がります。動きはすべて motion のスプリングに従います。横にスワイプすると、そのトーストを払いのけられます。スタックにホバーまたはフォーカスしている間と、ページがバックグラウンドにある間は、タイマーが止まります。',
        ],
        examples: {
          tones: {
            title: 'トーン',
            text: '<code>show()</code>、<code>success()</code>、<code>warning()</code>、<code>danger()</code> があります。danger のトーストは表示時間が長く、すぐに読み上げられます。',
          },
          actions: {
            title: 'アクションと Promise',
            text: '<code>action</code> は「元に戻す」などのボタンを追加します。<code>promise()</code> はスピナーを表示し、結果が出るとその内容に切り替わります。',
          },
        },
        api: {
          NuiToaster: {
            summary: 'トーストを表示するサービス。どこにでも注入できます。',
            members: {
              toasts: '画面上のすべてのトースト。新しいものから順に並びます。',
              show: 'トーストを表示します。タイトル、または説明、トーン、表示時間、アクション、id を含むオプションを渡します。',
              success: '成功のトーストを表示します。',
              warning: '警告のトーストを表示します。',
              danger: 'danger のトーストを表示します。8秒間表示され、すぐに読み上げられます。',
              promise:
                'Promise が確定するまで読み込み中のトーストを表示し、その後、成功または danger のメッセージを表示します。',
              dismiss: 'トーストを1つ、またはすべて閉じます。',
            },
          },
          NuiToasterRegion: {
            summary: 'トーストが表示される領域。アプリシェルに1つだけ配置します。',
            members: {
              position: 'ビューポートの角または辺。先頭側と末尾側は、テキストの方向に従います。',
              expanded: 'スタックを広げたままにします。',
              label: '領域のアクセシブルな名前。そこへの移動方法も含めてください。',
              closeLabel: '閉じるボタンのアクセシブルな名前。',
              hotkey:
                'Alt と組み合わせて、最新のトーストにフォーカスを移すキー。<code>KeyboardEvent.code</code> の値で指定します。',
            },
          },
        },
        keyboard: [
          ['Alt+T', '最新のトーストにフォーカスを移動します。'],
          ['Tab', 'トースト、そのアクション、閉じるボタンの間を移動します。'],
          ['Esc', 'フォーカスされているトーストを閉じます。'],
        ],
        notes: [
          'トーストは表示されるたびに読み上げられます。通常は読み上げ中の内容に割り込まず、danger の場合はすぐに読み上げられます。トーストがフォーカスを奪うことはありません。',
          'スタックにホバーまたはフォーカスしている間と、ページが非表示の間はタイマーが止まります。Promise の結果を待っているトーストは、時間切れで消えることはありません。',
          'ユーザーが対応しなければならない内容は、トースト以外の場所にも用意してください。',
          '動きを減らす設定では、トーストはアニメーションもスワイプもせず、タイマーの線も表示されません。',
        ],
      },
      combobox: {
        name: 'コンボボックス',
        title: 'Angular 用コンボボックス・オートコンプリート',
        summary: '入力に合わせて選択肢を提案するテキストフィールド。',
        description:
          'アクセシブルな Angular のコンボボックス。一致箇所を強調するあいまい検索、チップでの複数選択、入力からの新しい値の作成、サーバーからの結果に対応します。',
        apiDescription:
          'Needless UI のコンボボックスの API リファレンス。value、values、multiple、create、filtering、loading、clearable を持つ nui-combobox と、カスタム行を解説します。',
        a11yDescription:
          'Needless UI のコンボボックスのキーボード操作とアクセシビリティ。リスト補完付きの編集可能なコンボボックス、aria-activedescendant、チップ、IME 入力を解説します。',
        overview: [
          'コンボボックスは、候補のリストを備えたテキストフィールドです。検索はあいまい検索で、アクセント記号を区別しません。一致度の高いものから順に並び、一致した文字には印が付きます。セレクトと同じ <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> オブジェクトを受け取ります。',
          '<code>multiple</code> を指定すると、選んだ選択肢がテキストの前にチップとして並び、<code>create</code> を指定すると、入力したテキストが新しい値になります。サーバーから結果を得るには、<code>filtering</code> をオフにして <code>(queryChange)</code> で検索し、待っている間は <code>loading</code> を設定します。',
        ],
        examples: {
          country: {
            title: '検索',
            text: '一致する文字は隣り合っている必要がなく、<code>keywords</code> も検索対象になります。<code>clearable</code> を指定するとクリアボタンが付き、Esc キーで値をクリアできます。',
          },
          tags: {
            title: 'チップと新しい値',
            text: '<code>multiple</code> はチップを表示し、<code>[(values)]</code> をバインドします。入力したテキストがまだ選択肢にない場合は、<code>create</code> がその追加を提案します。',
          },
          people: {
            title: 'サーバーからの結果',
            text: 'リストにはサーバーから届いた結果が絞り込まずにそのまま表示され、待っている間は読み込み中の行が表示されます。新しい結果が届いても、選んだ選択肢のラベルは保持されます。',
          },
        },
        api: {
          NuiCombobox: {
            summary: '入力に合わせて選択肢を提案するテキストフィールド。',
            members: {
              options:
                '選択肢。<a href="/components/select/api#NuiOption"><code>NuiOption</code></a> オブジェクトで指定します。',
              value: '選ばれた値、または <code>null</code>。フォームでも使えます。',
              values: '選ばれた値の配列。<code>multiple</code> のときに使います。',
              multiple: '複数の選択肢を選べるようにします。選んだものはチップとして表示されます。',
              create:
                '入力したテキストから値を作成します。選択肢にないテキストは、リストで追加を提案します。',
              filtering:
                '入力に合わせて選択肢を絞り込みます。サーバー側で絞り込む場合はオフにします。',
              loading: '結果を待っている間、読み込み中の行を表示します。',
              clearable: '値をクリアするボタンを追加し、Esc キーでもクリアできるようにします。',
              placeholder: 'フィールドが空のときに表示するテキスト。',
              label:
                'アクセシブルな名前。<code>&lt;label&gt;</code> でフィールドに名前を付けていない場合に使います。',
              inputId: 'テキストフィールドの id。<code>&lt;label for&gt;</code> で使います。',
              disabled: 'フィールドを無効にします。',
              compareWith:
                '2つの値が同じ選択肢かどうかを判定します。値がオブジェクトの場合に使います。',
              displayWith:
                '選択肢にない値に表示するテキスト。たとえば、選択肢の読み込み前に設定された値に使います。',
              virtual:
                '表示範囲の行だけをレンダリングします。常に行う、行わない、200行を超えたら行う <code>auto</code> のいずれか。',
              queryChange: '入力中のテキストを出力します。サーバー検索に使います。',
              openChange: 'リストが開いたとき、または閉じたときに出力します。',
              show: 'リストを開きます。',
              hide: 'リストを閉じます。',
              clear: '値とテキストをクリアします。',
              focus: 'テキストフィールドにフォーカスします。',
            },
          },
          NuiOptionTemplate: {
            summary:
              'コンポーネント内の <code>ng-template</code> に付けると、各行を自分で描画できます。コンテキストには選択肢とその行が入っています。',
            members: {},
          },
          NuiOptionText: {
            summary:
              '選択肢のラベル（一致した文字に印を付けたもの）、説明、パスを描画します。独自の行で使います。',
            members: { nuiOptionText: '行。テンプレートのコンテキストから渡します。' },
          },
        },
        keyboard: [
          ['上下矢印キー', 'リストを開き、選択肢の間を移動します。'],
          ['Page Down / Page Up', '選択肢を10個分移動します。'],
          ['Enter', 'アクティブな選択肢を選びます。'],
          ['Alt + 下または上矢印キー', 'リストを開閉します。'],
          ['Esc', 'リストを閉じます。次に押すとテキストを、クリア可能な場合は値をクリアします。'],
          ['Backspace', 'フィールドが空のとき、最後のチップを削除します。'],
          [
            '左矢印キー',
            'テキストの先頭からチップに移動します（右から左に書く言語では右矢印キー）。チップ上では Backspace または Delete でチップを削除します。',
          ],
        ],
        notes: [
          'テキストフィールドは <code>aria-autocomplete="list"</code>、<code>aria-expanded</code>、<code>aria-controls</code> を持つ <code>combobox</code> です。フォーカスはフィールドにとどまり、<code>aria-activedescendant</code> がアクティブな選択肢を指します。',
          'チップは名前付きのリストで、各削除ボタンには「Remove Italy」のように、そのチップに応じた名前が付きます。',
          '「No matches」と読み込み中の行はステータスメッセージなので、スクリーンリーダーが読み上げます。',
          '中国語や日本語の入力などで IME の変換を確定するキーは、IME に任せます。',
        ],
      },
      command: {
        name: 'コマンドパレット',
        title: 'Angular 用コマンドパレットコンポーネント',
        summary: 'アプリのあらゆるコマンドを、キー操作ひとつで。',
        description:
          'アクセシブルな Angular のコマンドパレット。どこでも ⌘K で開き、入れ子のページも探せるあいまい検索、グループ、各 OS の表記に合わせたショートカットに対応します。',
        apiDescription:
          'Needless UI のコマンドパレットの API リファレンス。commands、hotkey、bindShortcuts、loop を持つ nui-command-palette と、NuiCommand の形式を解説します。',
        a11yDescription:
          'Needless UI のコマンドパレットのキーボード操作とアクセシビリティ。検索用コンボボックスを備えたモーダルダイアログ、aria-activedescendant、ページ移動を解説します。',
        overview: [
          'コマンドパレットは、アプリのコマンドを検索するフィールドをモーダルダイアログに収めたものです。⌘K（Windows と Linux では Ctrl+K）でどこからでも開けます。コマンドを選ぶとパレットが閉じ、そのあとでコマンドが実行されます。',
          'コマンドにはグループ、説明、キーワード、ショートカットを持たせることができ、ショートカットは各プラットフォームの記号で表示されます。<code>children</code> を持つコマンドは、さらにコマンドが並ぶページを開きます。検索は最上位からページの中まで届きます。',
        ],
        examples: {
          palette: {
            title: 'コマンドとページ',
            text: 'グループ、ショートカット、無効なコマンド、2つのページ。実行されたコマンドは <code>(run)</code> でわかります。コマンド自体の <code>run</code> も使えます。',
          },
          people: {
            title: 'カスタム行',
            text: '<code>nuiOptionTemplate</code> が各行を描画し、<code>nuiOptionText</code> が一致箇所の印を保ちます。<code>[hotkey]="null"</code> にすると、⌘K は上のパレットに任されます。',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'コマンドを検索するフィールドを備えたモーダルダイアログ。',
            members: {
              commands: 'コマンド。<code>NuiCommand</code> オブジェクトで指定します。',
              open: 'パレットが開いているかどうか。',
              hotkey:
                'どこからでもパレットを開閉するショートカット。不要なら <code>null</code>。<code>mod</code> は Apple デバイスでは ⌘、それ以外では Ctrl です。',
              bindShortcuts:
                'ページのどこにいても、各コマンド自身のショートカットでコマンドを実行できるようにします。',
              loop: '最後のコマンドで下に進むと最初に、最初のコマンドで上に進むと最後に移動します。',
              filtering:
                '入力に合わせて絞り込みます。サーバー側でコマンドを絞り込む場合はオフにします。',
              loading: '結果を待っている間、読み込み中の行を表示します。',
              hints: '使えるキーを下部に表示します。',
              virtual:
                '表示範囲の行だけをレンダリングします。常に行う、行わない、200行を超えたら行う <code>auto</code> のいずれか。',
              label: 'ダイアログとその検索フィールドのアクセシブルな名前。',
              placeholder: '空の検索フィールドに表示するテキスト。',
              run: 'コマンドが実行されるたびに、そのコマンドを出力します。',
              queryChange: '入力中のテキストを出力します。サーバー検索に使います。',
              show: 'パレットを開きます。',
              hide: 'パレットを閉じます。',
              toggle: 'パレットを開きます。開いていれば閉じます。',
              back: '前のページに戻ります。',
            },
          },
          NuiCommand: {
            summary: '1つのコマンド、またはコマンドを集めたページ。',
            members: {
              label: '表示され、検索の対象になるテキスト。',
              description: 'ラベルの下に表示する補足テキスト。',
              group: '同じグループのコマンドは、その見出しの下にまとめて表示されます。',
              keywords: '検索でマッチさせる追加の語。たとえば同義語。',
              shortcut: '一緒に表示するキー。たとえば <code>mod+shift+p</code>。',
              disabled: '表示はされますが、実行できません。',
              children: '1階層下のコマンド。このコマンドを選ぶと、それらがページとして開きます。',
              run: '選ばれたとき、パレットが閉じてから実行されます。',
              id: '自由に使える値。たとえば <code>(run)</code> でコマンドを区別するのに使います。',
            },
          },
        },
        keyboard: [
          ['⌘K または Ctrl+K', 'パレットを開閉します。'],
          ['上下矢印キー', 'コマンドの間を移動します。端に達すると反対側に回ります。'],
          ['Page Down / Page Up', 'コマンドを10個分移動します。'],
          ['Enter', 'アクティブなコマンドを実行するか、そのページを開きます。'],
          ['Esc', '1つ前のページに戻ります。最上位ではパレットを閉じます。'],
          ['Backspace', 'ページ内で検索フィールドが空のとき、前のページに戻ります。'],
        ],
        notes: [
          'ネイティブのモーダル <code>&lt;dialog&gt;</code> です。背後のページは操作できなくなり、フォーカスは内側にとどまり、閉じるとフォーカスは元の位置に戻ります。',
          '検索フィールドは <code>combobox</code> で、<code>aria-activedescendant</code> でアクティブなコマンドを指します。ページ内では、そのページの名前が付きます。',
          'ショートカットキーは各選択肢内のテキストなので、スクリーンリーダーで読み上げられます。下部のキーのヒントは支援技術から隠されています。',
          'Ctrl、Alt、⌘ を含まないショートカットは、フィールドに入力している間は実行されません。',
        ],
      },
      popover: {
        name: 'ポップオーバー',
        title: 'Angular 用ポップオーバー・ホバーカードコンポーネント',
        summary: 'ボタンの横に浮かぶパネルと、ホバーで表示されるリッチなツールチップ。',
        description:
          'ネイティブの Popover API を使ったアクセシブルな Angular のポップオーバーとホバーカード。反転・追従する配置、矢印、外側クリックで閉じる操作、ホバー遅延に対応します。',
        apiDescription:
          'Needless UI のポップオーバーの API リファレンス。side、align、offset、arrow を持つ nuiPopover と nuiHovercard、それぞれのトリガーディレクティブを解説します。',
        a11yDescription:
          'Needless UI のポップオーバーとホバーカードのキーボード操作とアクセシビリティ。dialog と tooltip のロール、フォーカスの戻り先、Esc キー、WCAG 1.4.13 を解説します。',
        overview: [
          'ポップオーバーは、ボタンの横に開く小さなパネルで、フィルター、短いフォーム、カラーピッカーなど、操作するものに使います。ネイティブの <code>popover="auto"</code> なので、Esc キーや外側のクリックでブラウザーが閉じてフォーカスを戻し、タブ順序ではトリガーの直後に置きます。',
          'ホバーカードはリッチなツールチップです。少しホバーすると開き、キーボードでフォーカスするとすぐに開いて、トリガーを説明します。ポインターがカードの上に移っても開いたままなので、テキストを読んだり選択したりできます。',
          'どちらも、スペースがなければ反対側に反転し、画面内にとどまり、ページのスクロールに合わせてトリガーに追従します。',
        ],
        examples: {
          filters: {
            title: 'フィルター',
            text: 'フォームを含むポップオーバーです。<code>arrow</code> でトリガーを指す矢印を付け、<code>hide()</code> でコードから閉じます。',
          },
          profile: {
            title: 'ホバーカード',
            text: '名前にホバーするか、Tab キーで移動してみてください。カードはリンクの説明になるので、スクリーンリーダーは名前のあとにカードを読み上げます。',
          },
          sides: {
            title: '表示位置と登場アニメーション',
            text: '<code>side</code> と <code>align</code> で開く位置を設定します。<code>start</code> と <code>end</code> は書字方向に従います。<code>enter</code> と <code>motion</code> で登場のしかたを設定します。',
          },
        },
        api: {
          NuiPopover: {
            summary: 'ネイティブのポップオーバー。開いた要素の横に配置されます。',
            members: {
              side: 'トリガーのどちら側に開くか。スペースがなければ反転します。',
              align: 'その辺に沿って、トリガーとどう揃えるか。',
              offset: 'トリガーとパネルの間隔（ピクセル単位）。',
              arrow: 'トリガーを指す矢印を表示します。',
              openChange: '開いたとき、または閉じたときに出力します。',
              show: '任意の要素の横に開きます。',
              hide: '閉じます。',
            },
          },
          NuiPopoverTrigger: {
            summary: 'ネイティブの <code>popovertarget</code> でポップオーバーを開閉するボタン。',
            members: { nuiPopoverTrigger: '開くポップオーバー。' },
          },
          NuiHovercard: {
            summary: 'トリガーを説明するリッチなツールチップ。',
            members: {
              side: 'トリガーのどちら側に開くか。スペースがなければ反転します。',
              align: 'その辺に沿って、トリガーとどう揃えるか。',
              offset: 'トリガーとカードの間隔（ピクセル単位）。',
              arrow: 'トリガーを指す矢印を表示します。',
              openDelay:
                '開くまでのホバー時間（ミリ秒）。キーボードでフォーカスした場合はすぐに開きます。',
              closeDelay: 'ポインターが離れてから閉じるまでのミリ秒数。',
              openChange: '開いたとき、または閉じたときに出力します。',
              show: '任意の要素の横に開きます。',
              hide: '閉じます。',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'ホバー時とキーボードでのフォーカス時にホバーカードを表示し、それをこの要素の説明にします。',
            members: { nuiHovercardTrigger: '表示するホバーカード。' },
          },
        },
        keyboard: [
          ['トリガー上で Enter または Space', 'ポップオーバーを開閉します。'],
          [
            'Tab',
            '開いているポップオーバーの中に移動します。ポップオーバーはトリガーの直後にあります。',
          ],
          ['Esc', 'ポップオーバーを閉じてトリガーにフォーカスを戻すか、ホバーカードを隠します。'],
        ],
        notes: [
          'ポップオーバーは非モーダルの <code>dialog</code> です。<code>aria-label</code> または <code>aria-labelledby</code> で名前を付けてください。トリガーには <code>aria-haspopup</code> と、ブラウザーによる <code>aria-expanded</code> が付きます。',
          'ホバーカードは <code>tooltip</code> で、トリガーの <code>aria-describedby</code> になるため、そのテキストはトリガーと一緒に読み上げられます。操作できる要素は入れないでください。それにはポップオーバーを使います。',
          'ホバーカードは WCAG 1.4.13 を満たします。Esc キーでフォーカスを動かさずに隠せ、ポインターをカードの上に移動でき、ホバーまたはフォーカスしている間は表示されたままです。',
        ],
      },
      select: {
        name: 'セレクト',
        title: 'Angular 用セレクトコンポーネント',
        summary: '短いリストからも巨大なリストからも、1つまたは複数の選択肢を選べます。',
        description:
          'アクセシブルな Angular のセレクト。単一選択と複数選択、グループ、ツリー、入力によるジャンプ、すべて選択、どんな長さのリストにも使える仮想スクロールに対応します。',
        apiDescription:
          'Needless UI のセレクトの API リファレンス。value、values、multiple、selectAll、virtual を持つ nui-select、NuiOption の形式、カスタム行を解説します。',
        a11yDescription:
          'Needless UI のセレクトのキーボード操作とアクセシビリティ。選択専用コンボボックス、リストボックスとツリー、aria-activedescendant、文字検索、ツリーのキーを解説します。',
        overview: [
          'セレクトは、選択肢のリストを開くボタンです。<code>NuiOption</code> の配列を <code>options</code> に渡し、<code>[(value)]</code> を、<code>multiple</code> の場合は <code>[(values)]</code> をバインドします。Signal Forms、リアクティブフォーム、<code>ngModel</code> でも使えます。',
          '選択肢には <code>group</code>、<code>description</code>、<code>keywords</code> を持たせることができ、<code>children</code> があるとリストはツリーになります。200行を超えると表示範囲の行だけがレンダリングされるので、10万個の選択肢でも10個と同じ速さで開きます。',
          '入力して絞り込みたい場合は、<a href="/components/combobox">コンボボックス</a>を使ってください。',
        ],
        examples: {
          countries: {
            title: 'グループ',
            text: '<code>group</code> を持つ選択肢は、その見出しの下に並びます。文字を入力すると、その文字で始まる次の選択肢にジャンプします。',
          },
          toppings: {
            title: '複数選択',
            text: '<code>multiple</code> を指定するとリストは開いたままになり、<code>[(values)]</code> をバインドします。<code>selectAll</code> は、すべての選択肢を選択または解除するボタンを追加します。無効な選択肢は選べません。',
          },
          folders: {
            title: 'ツリー',
            text: '<code>children</code> を持つ選択肢はツリーになります。リストを開くと、選ばれた選択肢のフォルダーが展開された状態で表示されます。',
          },
          zones: {
            title: '長いリスト',
            text: 'すべてのタイムゾーンを地域別に並べています。200行を超えると表示範囲の行だけがレンダリングされ、アクティブな選択肢はスクリーンリーダーのためにレンダリングされたまま残ります。',
          },
        },
        api: {
          NuiSelect: {
            summary: '選択肢のリストを開くボタン。',
            members: {
              options: '選択肢。<code>NuiOption</code> オブジェクトで指定します。',
              value: '選ばれた値、または <code>null</code>。フォームでも使えます。',
              values: '選ばれた値の配列。<code>multiple</code> のときに使います。',
              multiple: '複数の選択肢を選べるようにします。選んでいる間、リストは開いたままです。',
              selectAll:
                '<code>multiple</code> のとき、すべての選択肢を選択または解除するボタンを追加します。',
              placeholder: '何も選ばれていないときに表示するテキスト。',
              label:
                'アクセシブルな名前。<code>&lt;label&gt;</code> でボタンに名前を付けていない場合に使います。',
              triggerId: 'ボタンの id。<code>&lt;label for&gt;</code> で使います。',
              disabled: 'セレクトを無効にします。',
              compareWith:
                '2つの値が同じ選択肢かどうかを判定します。値がオブジェクトの場合に使います。',
              virtual:
                '表示範囲の行だけをレンダリングします。常に行う、行わない、200行を超えたら行う <code>auto</code> のいずれか。',
              openChange: 'リストが開いたとき、または閉じたときに出力します。',
              show: 'リストを開きます。',
              hide: 'リストを閉じます。',
              focus: 'ボタンにフォーカスします。',
            },
          },
          NuiOption: {
            summary:
              '1つの選択肢。セレクト、コンボボックス、コマンドパレットのいずれもこれを受け取ります。',
            members: {
              value: '選んだときに設定される値。型は任意です。',
              label: '表示され、検索の対象になるテキスト。',
              description: 'ラベルの下に表示する補足テキスト。',
              group: '同じグループの選択肢は、その見出しの下に順番に表示されます。',
              keywords: '検索でマッチさせる追加の語。たとえば同義語やコード。',
              disabled: '表示はされますが、選べません。',
              children: '1階層下の選択肢。これがあるとリストはツリーになります。',
            },
          },
          NuiOptionTemplate: {
            summary:
              'コンポーネント内の <code>ng-template</code> に付けると、各行を自分で描画できます。コンテキストには選択肢とその行が入っています。',
            members: {},
          },
          NuiOptionText: {
            summary:
              '選択肢のラベル（一致した文字に印を付けたもの）、説明、パスを描画します。独自の行で使います。',
            members: { nuiOptionText: '行。テンプレートのコンテキストから渡します。' },
          },
        },
        keyboard: [
          ['上下矢印キー', 'リストを開き、選択肢の間を移動します。'],
          ['Home / End', '最初または最後の選択肢に移動します。'],
          ['Page Down / Page Up', '選択肢を10個分移動します。'],
          ['Enter または Space', 'リストを開くか、アクティブな選択肢を選びます。'],
          ['文字キー', '入力した文字で始まる次の選択肢にジャンプします。'],
          [
            '左右矢印キー',
            'ツリーで、右は選択肢を展開するか最初の子に移動し、左は折りたたむか親に移動します。右から左に書く言語では左右が逆になります。',
          ],
          ['Alt + 上矢印キー', 'アクティブな選択肢を選んで、リストを閉じます。'],
          ['Tab', '単一選択では、アクティブな選択肢を選んで次の要素に移動します。'],
          ['Esc', '何も選ばずにリストを閉じます。'],
        ],
        notes: [
          'ボタンは <code>aria-expanded</code> と <code>aria-controls</code> を持つ選択専用の <code>combobox</code> です。フォーカスはボタンにとどまり、<code>aria-activedescendant</code> がアクティブな選択肢を指します。',
          'リストは <code>listbox</code>、または <code>aria-level</code> と <code>aria-expanded</code> を持つ <code>tree</code> です。一部の行だけがレンダリングされているときも、<code>aria-setsize</code> と <code>aria-posinset</code> は正しい値を保ちます。',
          'アクティブな選択肢はベタ塗りで表示され、強制カラーモードではアウトラインが付きます。',
          '<code>triggerId</code> を指す <code>&lt;label for&gt;</code>、または <code>label</code> で名前を付けてください。',
        ],
      },
      grid: {
        name: 'データグリッド',
        title: 'Angular 用データグリッドコンポーネント',
        summary: '何行あっても、並べ替え、絞り込み、選択、編集、スクロールができます。',
        description:
          'ネイティブの table 要素で構築したアクセシブルな Angular データグリッド。複数列の並べ替え、フィルター、ページングや仮想スクロール、選択、編集、列の移動に対応します。',
        apiDescription:
          'Needless UI のデータグリッドの API リファレンス。nui-grid の入力と双方向バインディング、NuiGridColumn の定義、カスタムセル用のテンプレートを解説します。',
        a11yDescription:
          'Needless UI のデータグリッドのキーボード操作とアクセシビリティ。grid ロールを持つネイティブのテーブル、1つのタブストップ、矢印キー、読み上げを解説します。',
        overview: [
          'データグリッドは、並べ替え、絞り込み、ページング、編集ができるネイティブのテーブルです。<code>columns</code> を定義して <code>rows</code> を渡すと、各セルは型に応じてロケールの書式で表示されます。数値、通貨、日付、はい・いいえ、<code>enum</code> の値のラベルに対応しています。',
          '状態はモデルに保持され、バインド、保存、サーバーへの送信ができます。モデルは <code>sort</code>、<code>filters</code>、<code>search</code>、<code>page</code>、<code>selected</code>、そしてユーザーが選んだ列の幅、順序、固定、非表示を保持する <code>columnState</code> です。ページングしない場合は表示範囲の行だけがレンダリングされるため、10万行でも10行と同じようにスクロールできます。',
          'すべてのセルにキーボードで移動できます。各列のパネルからは、その列の並べ替え、絞り込み、固定、移動、幅の自動調整、非表示ができます。',
        ],
        examples: {
          orders: {
            title: '検索、並べ替え、ページング',
            text: '入力するとすべての列を検索します。ヘッダーをクリックすると並べ替え、Shift キーを押しながらクリックすると2つ目の列を並べ替えに加えます。<code>nuiGridCell</code> がステータスを描画し、<code>exportCsv()</code> は表示中の内容を書き出します。',
          },
          selection: {
            title: '選択',
            text: '<code>selection="multiple"</code> はチェックボックスを追加し、選択された行のキーをバインドします。Shift キーを押しながらクリックすると範囲を選択でき、ヘッダーのチェックボックスは絞り込み条件に一致するすべての行を選択します。',
          },
          editing: {
            title: '編集',
            text: 'セルをダブルクリックするか、Enter キーを押すか、そのまま入力してみてください。<code>validate</code> はメッセージを表示してエディターを開いたままにします。確定した編集は <code>rows</code> を更新し、<code>cellEdit</code> を出力します。',
          },
          big: {
            title: '10万行',
            text: 'ページングしない場合は、表示範囲の行だけがレンダリングされます。固定した列は端にとどまり、<code>columnState</code> はユーザーが作ったレイアウトを保持します。',
          },
          server: {
            title: 'サーバーのデータ',
            text: '<code>server</code> モードでは、グリッドは受け取った行をそのまま表示し、変更のたびに <code>queryChange</code> で知らせます。データの取得中は <code>loading</code> を設定します。',
          },
        },
        api: {
          NuiGrid: {
            summary: 'ネイティブのテーブルで構築したデータグリッド。',
            members: {
              rows: 'データ。編集すると行が置き換わるため、<code>[(rows)]</code> でバインドします。',
              columns: '列。<code>NuiGridColumn</code> オブジェクトで指定します。',
              rowId: '行のキー。選択と追跡に使います。',
              label: 'グリッドのアクセシブルな名前。',
              selection: '行を選択できるかどうかと、選択できる数。',
              selected: '選択された行のキー。',
              sort: '並べ替え。<code>{ column, direction }</code> オブジェクトで指定し、先頭のものが優先されます。',
              filters: '列 id ごとのフィルター。演算子と値で指定します。',
              search: '行にすべて含まれている必要がある語。',
              pageSize: '1ページあたりの行数。0 にすると、スクロールする1つのリストになります。',
              page: '表示するページ。0 から数えます。',
              pageSizes: 'ページャーの選択肢。',
              virtual:
                '表示範囲の行だけをレンダリングします。常に行う、行わない、ページングなしで100行を超えたら行う <code>auto</code> のいずれか。',
              height: 'グリッドの高さを制限する CSS の長さ。内部がスクロールします。',
              columnState: '各列の幅、順序、固定、表示状態。保存と復元に使います。',
              mode: '<code>server</code> は受け取った行をそのまま表示し、並べ替え、絞り込み、ページングはアプリ側に任せます。',
              total: 'サーバー上の行数。',
              loading: 'プログレスバーを表示し、行がない間はプレースホルダーの行を表示します。',
              locale: '数値と日付の書式設定、および入力された数値の読み取りに使うロケール。',
              labels: 'グリッドが表示または読み上げるすべてのテキスト。翻訳に使います。',
              rowActivate: 'Enter キーまたはダブルクリックで開かれた行を出力します。',
              cellEdit: '編集が確定するたびに、その編集を出力します。',
              queryChange: '並べ替え、フィルター、検索、ページが変わるたびに、それらを出力します。',
              exportCsv: '絞り込みと並べ替えを適用した行の、表示中の列を CSV で返します。',
              focusCell: 'セルにフォーカスします。行 <code>-1</code> はヘッダーです。',
              clearFilters: 'すべてのフィルターと検索をクリアします。',
            },
          },
          NuiGridColumn: {
            summary: '1つの列。必須なのは <code>id</code> と <code>header</code> だけです。',
            members: {
              id: '一意の値。並べ替え、フィルター、列の状態でキーとして使われます。',
              header: 'ヘッダーのテキスト。',
              value: '行のキー、または行を受け取る関数。デフォルトは <code>row[id]</code> です。',
              type: '配置、並べ替え、フィルター、エディターを決めます。',
              format: '数値と日付用の <code>Intl</code> のオプション、またはテキストを作る関数。',
              options:
                '<code>enum</code> 列の選択肢。<code>NuiOption</code> オブジェクトで指定します。',
              'width, minWidth, maxWidth': 'ピクセル単位。',
              flex: '残りのスペースを、ほかの <code>flex</code> 列と分け合います。',
              align: 'デフォルトは型によって決まり、数値と日付は末尾側に揃えます。',
              'pinned, hidden': '列の初期の固定状態と表示状態。',
              'sortable, filterable, resizable, reorderable, hideable':
                'それぞれ <code>false</code> でオフにできます。',
              compare: '独自の並べ替え。',
              'editable, validate': 'セルを編集できるかどうかと、値が無効なときのメッセージ。',
              set: '編集後の行を作ります。デフォルトでは、新しい値を入れたコピーです。',
            },
          },
          NuiGridCell: {
            summary: '列のセルを描画します。コンテキストには行、その値、テキストが入っています。',
            members: { nuiGridCell: '列の id。' },
          },
          NuiGridHeader: {
            summary: '列のヘッダーを描画します。',
            members: { nuiGridHeader: '列の id。' },
          },
          NuiGridEmpty: {
            summary:
              '行がないときに表示する内容。コンテキストから、フィルターで行が隠れたかどうかがわかります。',
            members: {},
          },
        },
        keyboard: [
          ['矢印キー', '1セル移動します。右から左に書く言語では左右が逆になります。'],
          ['Home / End', '行（Ctrl を併用するとグリッド全体）の最初または最後のセルに移動します。'],
          ['Page Down / Page Up', '1画面分の行を移動します。'],
          [
            'ヘッダー上で Enter または Space',
            'その列で並べ替えます。Shift を併用すると並べ替えに追加します。',
          ],
          ['ヘッダー上で Alt + 下矢印キー', '列のパネルを開きます。'],
          [
            'ヘッダー上で Alt + 左または右矢印キー',
            '列の幅を狭めたり広げたりします。Shift を併用すると列を移動します。',
          ],
          ['セル上で Enter', 'セルを編集します。編集できない場合は行を開きます。'],
          ['F2 または文字入力', 'セルを編集します。'],
          [
            '編集中の Enter、Esc、Tab',
            'Enter で確定、Esc でキャンセル、Tab で確定して次へ移動します。',
          ],
          [
            'Space',
            '行を選択します。Shift を併用すると、最後に選択した行からここまでを選択します。',
          ],
          ['Ctrl + A', 'すべての行を選択します。'],
        ],
        notes: [
          '<code>role="grid"</code> を持つネイティブの <code>&lt;table&gt;</code> で、<code>label</code> で名前を付けます。ヘッダーには <code>aria-sort</code>、選択できる行には <code>aria-selected</code> が付きます。',
          'グリッドのタブストップは1つだけです。フォーカスはロービング <code>tabindex</code> でセルからセルへ移動するため、スクリーンリーダーは各セルを行と列のヘッダーとともに読み上げます。',
          'ページングや仮想化の最中も、<code>aria-rowcount</code>、<code>aria-rowindex</code>、<code>aria-colindex</code> は正しい値を保ちます。',
          '並べ替え、絞り込み、ページの切り替え、編集エラーは、読み上げ中の内容に割り込まないステータス領域で読み上げられます。',
        ],
      },
    },
  },

  guides: {
    title: 'ガイド',
    items: {
      'getting-started': {
        title: 'はじめに',
        description:
          'Angular 22 アプリに Needless UI を導入する手順。パッケージを追加してスタイルシートをインポートすれば、数分で最初のアクセシブルなコンポーネントを使えます。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI は Angular 22 で動作します。コンポーネントはスタンドアロンのディレクティブなので、インポートすべきモジュールはありません。',
          },
          { kind: 'h2', id: 'install', text: 'インストール' },
          {
            kind: 'p',
            html: 'Angular パッケージを、キーボード操作とアクセシビリティの振る舞いを提供する Angular Aria および CDK と一緒に追加します。スタイルシートも同梱されています。',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'スタイルのインポート' },
          {
            kind: 'p',
            html: 'スタイルシートを <code>src/styles.css</code> で一度だけインポートします。デザイントークンとすべてのコンポーネントが含まれています。',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'すべては <code>@layer nui</code> に収められています。アプリに <code>a { color: inherit }</code> のようなグローバルなリセットがある場合は、コンポーネントを上書きしないよう、<code>nui</code> より前に宣言したレイヤーに入れてください。',
          },
          { kind: 'h2', id: 'use', text: 'コンポーネントを使う' },
          {
            kind: 'p',
            html: '必要なディレクティブをそれぞれのエントリーポイントからインポートし、コンポーネントの <code>imports</code> に追加します。',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: '次のステップ' },
          {
            kind: 'p',
            html: 'ライブデモは<a href="/components">コンポーネント</a>で確認できます。ブランドに合わせるには<a href="/guides/theming">テーマ設定ガイド</a>をお読みください。',
          },
        ],
      },
      theming: {
        title: 'テーマ設定',
        description:
          'CSS カスタムプロパティによる Needless UI のテーマ設定。ライトとダーク、入れ子のテーマ、トークンの上書き、コントラストを検証したブランドパレット再生成を解説します。',
        blocks: [
          {
            kind: 'p',
            html: '見た目に関するあらゆる決定は、W3C デザイントークンから生成された CSS カスタムプロパティです。コンポーネントは <code>--nui-color-accent-solid</code> のようなセマンティックトークンだけを使うため、トークンを1つ変えれば、それを使うすべてのコンポーネントのスタイルが変わります。',
          },
          { kind: 'h2', id: 'modes', text: 'ライトとダーク' },
          {
            kind: 'p',
            html: 'デフォルトでは OS の設定に従ってモードが決まります。<code>data-nui-theme</code> を使えば任意の要素でモードを固定でき、自由に入れ子にすることもできます。',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'トークンの上書き' },
          {
            kind: 'p',
            html: 'トークンは <code>@layer nui</code> の中にあるため、アプリの通常の CSS で上書きできます。アプリ全体に適用するなら <code>:root</code> に、一部だけに適用するなら任意の要素に設定します。',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'ブランドパレット' },
          {
            kind: 'p',
            html: 'カラースケールは自動生成されています。<code>packages/tokens/scripts/palette.ts</code> で色相を変更して再生成すると、スクリプトがすべての色を sRGB の色域に収め直し、テキストと背景の組み合わせごとにコントラストを再チェックします。',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'カスタマイズ',
        description:
          'スプリングの物理、押下エフェクト、登場アニメーション、角の形と大きさ、密度。Needless UI の動きと手触りを、アプリ全体またはコンポーネントごとに変えられます。',
        blocks: [
          {
            kind: 'p',
            html: 'どのコンポーネントにも、変更できる個性があります。動きを決めるスプリング、指で押したときのボタンの反応、ダイアログやメニューの登場のしかた、角の形と大きさ、そして占めるスペースの広さです。いずれも、要素内のすべてには属性1つで、1つのコンポーネントには入力1つで指定できます。',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: '属性1つでサブツリー全体に' },
          {
            kind: 'p',
            html: '<code>data-nui-*</code> 属性は、アプリ全体に適用するなら <code>&lt;body&gt;</code> に、一部だけに適用するなら任意の要素に指定します。最も近い属性が優先されるため、入れ子にできます。これらの属性は CSS カスタムプロパティを設定するだけなので、どのフレームワークでも、フレームワークがなくても同じように動作します。',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: '1つのコンポーネントに' },
          {
            kind: 'p',
            html: 'Angular では、<code>nuiButton</code>、<code>nuiDialog</code>、<code>nuiMenu</code> が同じ値を入力として受け取ります。設定しなかった入力は、周囲の属性に従います。',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'CSS にコンパイルされるスプリング' },
          {
            kind: 'p',
            html: 'モーションはスプリングの物理に基づいています。時間とカーブの代わりに、剛性、減衰、質量で動きを定義します。トークンコンパイラーが各スプリングの運動方程式を解き、静止するまでの時間と <code>linear()</code> イージングとして CSS に書き出すので、JavaScript なしでコンポジター上で動作します。<code>--nui-spring-snappy</code> から <code>--nui-spring-mechanical</code> まで6種類のスプリングがトークンとして用意されており、使用中のスプリングは <code>--nui-motion</code> が保持します。',
          },
          {
            kind: 'p',
            html: 'ほかのスプリングも、入力1つで使えます。Angular が同じソルバーを使って実行時にコンパイルします。独自の要素には、<code>springTransition()</code> で CSS を生成できます。',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'プリセットの中間も自由に' },
          {
            kind: 'p',
            html: 'プリセットはショートカットです。それ以外の値にしたい場合は、カスタムプロパティを直接設定してください。<code>--nui-press</code> と <code>--nui-enter</code> には任意の transform を、<code>--nui-radius-scale</code> と <code>--nui-density</code> には任意の数値を指定できます。',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'アクセシビリティ' },
          {
            kind: 'p',
            html: 'システムが動きを減らすよう求めている場合、スプリングは一瞬で完了し、押下と登場の動きも止まります。密度をどう設定しても、コントロールが WCAG 2.2 のターゲットサイズである 24px を下回ることはありません。また、どのプリセットも色を変えないため、コントラストのチェックはすべて有効なままです。<code>corner-shape</code> に対応していないブラウザーでは、角はすべて丸く描画されます。',
          },
        ],
      },
    },
    playground: {
      label: 'カスタマイズのプレイグラウンド',
      motion: 'モーション',
      custom: 'カスタム',
      stiffness: '剛性',
      damping: '減衰',
      mass: '質量',
      press: '押下',
      enter: '登場',
      corners: '角の形',
      radius: '角丸',
      density: '密度',
      surprise: 'おまかせ',
      reset: 'デフォルトに戻す',
      hint: 'ボタンを長押ししてから離してみてください。ダイアログとメニューを開くと、登場する様子を見られます。',
      save: '保存',
      cancel: 'キャンセル',
      delete: '削除',
      openDialog: 'ダイアログを開く',
      openMenu: 'メニューを開く',
      menu: ['名前を変更', '複製', '削除'],
      dialogTitle: '無駄によく動く',
      dialogText: 'このダイアログは、指定したとおりに登場しました。',
      close: '閉じる',
      curve: 'スプリングの位置の時間変化。下から動き出し、破線の上で静止します。',
      settles: (ms, overshoot) => `${ms}ミリ秒で静止 · オーバーシュート ${overshoot}%`,
      instant: 'モーションなし：すべてが行き先へ一瞬で移動します。',
      stuck:
        'このスプリングは10秒以内に静止しません。減衰か剛性を上げてください。それまでの間、コンポーネントは最後に静止できたスプリングを使い続けます。',
      reducedMotion:
        'お使いのシステムは動きを減らす設定になっているため、ここでは何も動きません。この設定がオフになると、スプリング、押下、登場の動きが戻ります。',
      noCornerShape: 'このブラウザーはまだ角の形を描画できないため、角はすべて丸いままです。',
      everywhere: '任意の要素に指定して、その中のすべてに適用：',
      oneComponent: 'Angular で、1つのコンポーネントだけに適用：',
    },
  },

  notFound: {
    title: 'ページが見つかりません',
    description:
      'お探しのページは存在しません。Needless UI のコンポーネント一覧を見るか、ホームページからお探しください。',
    text: 'このページは存在しないか、移動した可能性があります。',
    home: 'ホームページへ移動',
    components: 'コンポーネントを見る',
  },

  legal: {
    translationNote:
      'この翻訳は便宜上提供するものであり、英語版と内容に相違がある場合は英語版が優先されます。',
    labels: {
      name: '名称',
      address: '住所',
      email: 'メールアドレス',
      uid: 'UID',
      vat: '付加価値税番号',
    },
    notice: {
      title: '法的情報',
      description:
        'needlessui.com の運営者情報。運営者の名称、住所、メールアドレスのほか、商業登記と付加価値税に関する情報を掲載しています。',
      operator: '運営者',
      legalForm: '個人事業主',
      country: 'スイス',
      register: '商業登記',
      registerEntry: 'ツーク州の商業登記簿に登記されています。',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: '免責事項' },
        {
          kind: 'p',
          html: '当サイトの内容は細心の注意を払って作成していますが、その正確性、完全性、最新性を保証するものではありません。リンク先のウェブサイトは当サイトの管理外にあり、その内容については各サイトの運営者が責任を負います。',
        },
        { kind: 'h2', id: 'license', text: 'ライセンス' },
        {
          kind: 'p',
          html: 'Needless UI は、このサイトも含めて <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT ライセンス</a>のもとでオープンソースとして公開されています。',
        },
      ],
    },
    privacy: {
      title: 'プライバシーポリシー',
      description:
        'needlessui.com の個人データの取り扱い。Cookie、アクセス解析、トラッキングは使用しません。訪問時にホスティング事業者が処理する情報と、利用者の権利を説明します。',
      updated: '最終更新日：2026年9月24日',
      blocks: [
        {
          kind: 'p',
          html: 'このポリシーでは、www.needlessui.com へのアクセス時にどのような個人データが処理されるか、また利用者にどのような権利があるかを説明します。要約すると、当サイトは Cookie、アクセス解析、トラッキングを一切使用せず、個人データの入力を求めることもありません。',
        },
        { kind: 'h2', id: 'controller', text: '責任者' },
        {
          kind: 'p',
          html: '<a href="/legal">法的情報</a>に記載している運営者、Angelo Lamonaca です。連絡先：{email}。',
        },
        { kind: 'h2', id: 'hosting', text: 'ホスティング' },
        {
          kind: 'p',
          html: '当サイトは Vercel Inc.（440 N Barranca Avenue #4133, Covina, CA 91723, USA）がホスティングしています。ページを開くと、ブラウザーはあらゆるウェブサイトが受け取る技術的なデータを送信します。具体的には、IP アドレス、日時、リクエストされたページ、参照元のページ、ブラウザーのユーザーエージェントです。Vercel は当サイトを配信し安全に保つために、当サイトに代わってこれらのデータを処理し、その目的に必要な期間だけ保存します。この処理は米国で行われる場合があります。Vercel は EU-米国データプライバシーフレームワーク（EU-U.S. Data Privacy Framework）、その英国拡張（UK Extension）、およびスイス-米国データプライバシーフレームワーク（Swiss-U.S. Data Privacy Framework）の認証を受けています。詳しくは <a href="https://vercel.com/legal/privacy-policy">Vercel のプライバシー通知</a>をご覧ください。',
        },
        {
          kind: 'p',
          html: 'GDPR が適用される場合、処理の法的根拠は、安全なウェブサイトを運営するという当サイトの正当な利益です（GDPR 第6条第1項(f)）。',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie とローカルストレージ' },
        {
          kind: 'p',
          html: '当サイトは Cookie を一切設定しません。ライトまたはダークのテーマを選ぶと、次回の訪問に備えてブラウザーのローカルストレージがその選択を記憶します。この情報がお使いのデバイスの外に送信されることはありません。削除するには、「システム」に戻すか、サイトのデータを消去してください。',
        },
        { kind: 'h2', id: 'tracking', text: 'トラッキングなし' },
        {
          kind: 'p',
          html: 'アクセス解析、広告、ソーシャルメディアのプラグイン、埋め込みのサードパーティコンテンツ、外部フォントは一切使用していません。GitHub と npm へのリンク先は、それぞれ独自のプライバシーポリシーを持つサイトです。',
        },
        { kind: 'h2', id: 'rights', text: '利用者の権利' },
        {
          kind: 'p',
          html: 'ご自身に関するどのような個人データが処理されているかを問い合わせ、その訂正や削除を求めることができます。GDPR が適用される場合は、処理への異議申し立て、処理の制限の要求、ポータブルな形式でのデータの受け取りも可能です。{email} までご連絡ください。また、監督機関に苦情を申し立てることもできます。スイスでは連邦データ保護・情報コミッショナー（FDPIC）、EU ではお住まいの国の監督機関が窓口です。',
        },
        { kind: 'h2', id: 'changes', text: '変更について' },
        {
          kind: 'p',
          html: 'このポリシーは、新しいホスティング事業者への移行など、サイトに変更があった際に改定されます。下記の日付が現行版を示しています。',
        },
      ],
    },
  },
};
