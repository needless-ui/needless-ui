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
          '行は入れ子にもできます。<code>groupBy</code> は行を列ごとにグループ化し、各列の <code>aggregate</code> をグループ行と <code>totals</code> の集計行に表示します。<code>children</code> はツリーデータを表示し、<code>nuiGridDetail</code> テンプレートは行の下に開きます。グループ化または入れ子にすると、テーブルは <code>treegrid</code> になります。',
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
          groups: {
            title: 'グループと集計',
            text: '1つまたは2つの列でグループ化します。グループ行には注文の件数と、金額の合計と平均が表示され、<code>totals</code> はすべての行について同じ集計を加えます。左矢印キーでグループを閉じます。',
          },
          tree: {
            title: 'ツリーデータ',
            text: '<code>children</code> で、各フォルダーにそのファイルを持たせます。行は右矢印キーかトグルで開き、<code>[(expanded)]</code> は開いている行を保持します。検索すると、一致した行の上にあるフォルダーは開いたままになります。',
          },
          details: {
            title: '行の詳細',
            text: '<code>nuiGridDetail</code> テンプレートは、トグルの列から開いた注文の下に、その明細を表示します。<code>[(details)]</code> は開いている詳細を保持します。',
          },
          live: {
            title: 'ライブデータ、エクスポート、印刷',
            text: '価格は2秒ごとに変わり、<code>flash</code> は変わったセルを一瞬光らせて示します。<code>exportXlsx()</code> は本物のスプレッドシートをダウンロードし、<code>print()</code> はすべての行を印刷し、<code>layout="auto"</code> は狭い画面で行をカードとして表示します。',
          },
          cards: {
            title: 'スマートフォンでのカード表示',
            text: '<code>layout="list"</code> は行をカードとして表示し、<code>auto</code> は幅が 36rem 未満のときにそうします。カードにはヘッダー行がないため、ツールバーで並べ替えたり、すべて選択したりします。ツールバーの「Filter」ボタンは、選んだ列のパネルを開きます。<code>toolbar</code> で、ツールバーをテーブルの上に表示することも、表示しないこともできます。',
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
              'groupBy, collapsed':
                '行をグループ化する列（外側から順に）と、閉じているグループのキー。',
              children: '行の子。指定すると、グリッドはツリーデータを表示します。',
              'expanded, details': 'ツリーデータで開いている行のキーと、詳細を開いている行のキー。',
              'totals, flash':
                '絞り込まれたすべての行を集計する行と、テキストが変わると一瞬光るセル。後者は、更新後も変わらない <code>rowId</code> を持つ行が対象です。',
              layout:
                '<code>list</code> は行をカードとして表示し、<code>auto</code> は狭い画面でだけそうします。',
              toolbar:
                '行の並べ替え、絞り込み、全選択を行うバー。常に表示する、表示しない、カード表示のときに表示する <code>auto</code> のいずれか。',
              'exportXlsx, print':
                '前者は絞り込みと並べ替えを適用した行をスプレッドシートとして書き出し、後者はすべての行を印刷します。',
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
              aggregate:
                'グループ行と集計行に表示する値。合計、平均、最小値、最大値、件数、または関数。',
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
          NuiGridDetail: {
            summary: '行の詳細。開くとその行の下に表示されます。コンテキストには行が入っています。',
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
          [
            'グループ上で右 / 左矢印キー',
            'グループを開くか閉じます。子を持つ行の最初のセルでも同様です。',
          ],
          ['グループ上で Enter', 'グループを開くか閉じます。Space ではその行を選択します。'],
          ['詳細のトグル上で Enter', '行の詳細を表示するか、非表示にします。'],
        ],
        notes: [
          '<code>role="grid"</code> を持つネイティブの <code>&lt;table&gt;</code> で、<code>label</code> で名前を付けます。ヘッダーには <code>aria-sort</code>、選択できる行には <code>aria-selected</code> が付きます。',
          'グリッドのタブストップは1つだけです。フォーカスはロービング <code>tabindex</code> でセルからセルへ移動するため、スクリーンリーダーは各セルを行と列のヘッダーとともに読み上げます。',
          'ページングや仮想化の最中も、<code>aria-rowcount</code>、<code>aria-rowindex</code>、<code>aria-colindex</code> は正しい値を保ちます。',
          '並べ替え、絞り込み、ページの切り替え、編集エラーは、読み上げ中の内容に割り込まないステータス領域で読み上げられます。',
          'グループ化または入れ子にした行があると、テーブルは <code>treegrid</code> になります。行には <code>aria-level</code>、<code>aria-setsize</code>、<code>aria-posinset</code> が付き、開閉できる行には <code>aria-expanded</code> も付きます。集計値は「Sum: 475」のように種類とともに読み上げられます。',
          'カードにはヘッダー行がないため、ツールバーが先に来ます。ツールバーは「Sort and filter」という名前の付いたグループで、並べ替える列を選ぶラベル付きのセレクト、並べ替えの方向を選ぶトグルボタン、複数選択のときは「Select all rows」チェックボックス、列のパネルを開く「Filter」ボタンがあります。パネルでは、セレクトで列を選びます。グリッドのタブストップは最初のカードに移ります。',
        ],
      },
      chat: {
        name: 'チャット',
        title: 'Angular 用 AI チャットコンポーネント',
        summary:
          'モデルと対話できます。応答のストリーミング、ツール、バージョン、ファイルに対応します。',
        description:
          'AI アシスタント向けのアクセシブルな Angular チャット。Markdown 応答のストリーミング、推論、ツール呼び出し、出典、再試行のバージョン管理、ファイルに対応します。',
        apiDescription:
          'Needless UI のチャットの API リファレンス。nui-chat の入力、応答をストリーミングする NuiChatSession、メッセージ、ツールのテンプレート、ストリームリーダーを解説します。',
        a11yDescription:
          'Needless UI のチャットのキーボード操作とアクセシビリティ。名前付きメッセージのフィード、Page Up と Page Down、完了後に読み上げる応答を解説します。',
        overview: [
          'チャットは、ユーザーとモデルをつなぐ部分をすべて担います。<code>respond</code> 関数を指定して <code>NuiChatSession</code> を作成すれば、残りは <code>&lt;nui-chat&gt;</code> が引き受けます。応答を Markdown としてストリーミング表示し、ユーザーが上にスクロールするまでは末尾に追従し、受信中は送信ボタンを停止ボタンに切り替えます。',
          '<code>respond</code> はテキスト、Promise、<code>async function*</code>、Observable のいずれかを返せるので、どんな API にも対応できます。応答にはテキストのほか、モデルの推論、ツール呼び出し（描画は独自のテンプレートで）、参照した出典を含められます。<code>nuiEventStream</code> は、多くのモデル API がストリーミングする Server-Sent Events を読み取ります。',
          '何も失われません。再試行した応答や編集した質問は、元のものと並ぶ新しいバージョンになり、会話はすべての分岐を保持します。スクリーンリーダーは各応答を、1語ずつではなく完了してから読み上げます。',
        ],
        examples: {
          assistant: {
            title: 'アシスタント',
            text: '提案から会話を始められます。応答は Markdown でストリーミング表示され、停止、再試行、評価ができるほか、質問を編集することもできます。<code>attach</code> は、選択、貼り付け、ドロップしたファイルを受け取ります。',
          },
          tools: {
            title: '推論、ツール、出典',
            text: 'デルタが、モデルの推論、ツール呼び出し、出典を応答に追加します。<code>nuiChatTool</code> は天気ツールをカードとして描画し、ほかのツールは入力と出力とともに折りたたまれます。',
          },
          server: {
            title: 'サーバーからのストリーミング',
            text: '<code>nuiEventStream</code> は OpenAI 形式のイベントストリームを読み取り、<code>NuiChatError</code> はそのメッセージを表示します。<code>all()</code> は会話をバージョンごとすべて保存します。',
          },
        },
        api: {
          NuiChat: {
            summary: '会話と入力欄をひとまとめにしたもの。',
            members: {
              session: '表示する会話。',
              assistant: 'アシスタントの名前。スクリーンリーダーが読み上げる見出しに使われます。',
              headingLevel:
                'スクリーンリーダーにだけ表示される、各メッセージの見出しのレベル。応答内の見出しはその1つ下になります。',
              announce:
                '応答の完了時にスクリーンリーダーが読み上げる内容：全文、短い通知、なしのいずれか。',
              images:
                '応答内の画像を表示します。オフのときは、画像のテキストが画像へのリンクになります。',
              value: '入力中のテキスト。',
              placeholder: '空の入力欄に表示するヒント。',
              suggestions: 'クリックで送信できるプロンプト。最初のメッセージまで表示されます。',
              sendOn:
                'Enter と、Ctrl または ⌘ + Enter のどちらで送信するか。<code>auto</code> は、物理キーボードがある環境では Enter で送信し、タッチスクリーンでは Return キーで改行してボタンで送信します。',
              disabled: '入力欄から送信できないようにします。',
              attach: 'ファイルを受け付けます。選択、貼り付け、ドロップに対応します。',
              accept:
                '受け付けるファイルの種類。<code>&lt;input type="file"&gt;</code> と同じ形式です。',
              maxFiles: '1つのメッセージに添付できるファイルの数。',
              maxSize: '受け付ける最大のファイルサイズ（バイト単位）。',
              labels: 'チャットが表示または読み上げるすべてのテキスト。翻訳に使います。',
              rated:
                'ユーザーが評価した応答を、評価とともに出力します。評価が取り消されたときは <code>null</code> です。',
              focus: 'テキストフィールドにフォーカスします。',
              scrollToEnd: '最新のメッセージまでスクロールし、以降も追従します。',
            },
          },
          NuiChatSession: {
            summary:
              'DOM を持たない会話そのもの。コンポーネント内で、<code>respond</code>、<code>messages</code>、<code>id</code> オプションを指定して作成します。',
            members: {
              respond:
                'アプリ側で実装する関数。<code>request.messages</code> への応答を書き、<code>request.signal</code> が中断されたら停止します。',
              messages: '画面上の会話。',
              all: 'すべてのバージョンのすべてのメッセージ。保存して、<code>messages</code> として渡し直せます。',
              busy: '応答を受信中かどうか。',
              send: 'メッセージを送信し、応答を求めます。',
              stop: '応答を停止します。それまでに書かれた内容は残ります。',
              retry: 'もう一度尋ねます。新しい応答は、元の応答と並ぶ別のバージョンになります。',
              edit: 'ユーザーのメッセージの新しいバージョンを送信します。',
              versions: 'メッセージのすべてのバージョン。古い順に並びます。',
              show: '会話をこのバージョンに切り替えます。',
              rate: '応答に対するユーザーの評価を記録します。',
              'remove, load, clear':
                'メッセージとそれ以降の削除、会話の置き換え、最初からのやり直しを行います。',
            },
          },
          NuiChatMessage: {
            summary:
              '1つのメッセージ。<code>parent</code> が同じメッセージは、互いのバージョンです。',
            members: {
              'id, parent': 'メッセージのキーと、その前のメッセージのキー。',
              role: '誰が書いたか。',
              text: 'アシスタントからは Markdown、ユーザーからはプレーンテキスト。',
              status: '応答の進み具合。待機中から完了まで。',
              reasoning: 'モデルが回答の前に考えた内容。',
              tools: '呼び出したツールと、その状態、入力、出力。',
              sources: '参照したページ。',
              attachments: '一緒に送信されたファイル。',
              rating: 'ユーザーの評価。',
              data: 'モデル名など、メッセージと一緒に保持するその他の情報。',
            },
          },
          NuiChatToolTemplate: {
            summary:
              '天気のカードなど、ツール呼び出しを描画します。コンテキストには呼び出しとそのメッセージが入っています。',
            members: {
              nuiChatTool:
                'ツールの名前。省略すると、ほかのどのテンプレートも指定していない呼び出しをすべて描画します。',
            },
          },
          NuiChatThread: {
            summary:
              '独自のレイアウト向けの、会話部分だけのコンポーネント。<code>nui-chat</code> の入力のうち、会話に関わるものを受け取ります。',
            members: {},
          },
          NuiChatComposer: {
            summary:
              '入力欄だけのコンポーネント。<code>nui-chat</code> の入力のうち、メッセージの作成に関わるものを受け取ります。',
            members: {},
          },
          NuiServerEvent: {
            summary:
              '<code>nuiEventStream</code> がイベントごとに返す値。<code>nuiTextStream</code> はプレーンテキストを、<code>nuiJsonStream</code> は JSON Lines を読み取ります。3つとも <code>fetch</code> のレスポンスを受け取ります。',
            members: {
              event: 'イベントの名前。',
              data: 'data 行を連結したもの。',
              id: 'ストリームが最後に送った id。',
            },
          },
          NuiChatError: {
            summary:
              '<code>respond</code> からスローすると、そのメッセージが表示されます。ほかのエラーでは汎用のメッセージが表示されるため、内部の情報は漏れません。',
            members: {},
          },
        },
        keyboard: [
          ['Page Down / Page Up', '次または前のメッセージに移動します。'],
          ['Ctrl + End / Ctrl + Home', '会話を抜けて、その後ろまたは前の要素に移動します。'],
          ['Enter', '送信します。Shift を併用すると改行します。'],
          ['Esc', 'メッセージの編集を中止します。'],
        ],
        notes: [
          '会話は <code>article</code> を並べた <code>feed</code> です。各メッセージには「You said」のような、スクリーンリーダーだけに見える見出しで名前が付き、<code>aria-posinset</code> と <code>aria-setsize</code> が設定されます。',
          '書き込み中の応答は <code>aria-busy</code> になります。完了すると全体がまとめて読み上げられ、失敗はすぐに読み上げられます。',
          'アイコンボタンにはすべて名前とツールチップがあります。評価はトグルボタンで、バージョンの切り替えは「Version 2 of 3」のような名前の付いたグループです。',
          '推論とツール呼び出しは、ネイティブの開閉要素（ディスクロージャー）です。ファイルを削除すると、フォーカスはテキストフィールドに戻ります。',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Angular 用 Markdown レンダラーコンポーネント',
        summary: 'ストリーミング中でも、Markdown を安全にレンダリングします。',
        description:
          'AI の応答に使える安全な Angular 用 Markdown レンダラー。GitHub 形式のテーブル、タスクリスト、コードブロックを本物の要素で描画し、ストリーミング中も滑らかです。',
        apiDescription:
          'Needless UI の Markdown レンダラーの API リファレンス。nui-markdown の入力、コードブロック用のテンプレート、その土台となるパーサーを解説します。',
        a11yDescription:
          'Needless UI の Markdown レンダラーのアクセシビリティ。本物の見出し、リスト、テーブル、名前付きのスクロール領域、結果を読み上げるコピーボタンを解説します。',
        overview: [
          'Markdown レンダラーは、モデルが書くようなテキストを本物の要素に変換します。見出し、リストとタスクリスト、引用、テーブル、コピーボタン付きのコードブロック、リンクに対応します。テキストをツリーに解析してテンプレートで描画するため、生の HTML はテキストのまま表示され、HTML として挿入されるものは一切ありません。',
          '<code>streaming</code> を指定すると、書きかけのテキストも完成後と同じように読めます。閉じていないコードフェンスはすでにコードブロックとして表示され、対のない <code>**</code> は相方を待ち、最後の単語のあとにはキャレットが続きます。変化のないブロックは DOM をそのまま保ちます。',
          'リンクが機能するのは Web、メール、電話のアドレスだけです。画像は、<code>images</code> をオンにするまでリンクのままです。',
        ],
        examples: {
          document: {
            title: 'ドキュメント',
            text: '見出しは <code>headingLevel</code> から始まるので、ページ自体の見出しの下に収まります。幅の広いテーブルとコードは、それぞれの領域内でスクロールします。',
          },
          streaming: {
            title: 'ストリーミング',
            text: '同じテキストを数文字ずつ流します。記号が一瞬表示されることはなく、再レンダリングされるのは最後のブロックだけです。',
          },
          highlight: {
            title: 'コードのハイライト',
            text: '<code>nuiMarkdownCode</code> は独自のテンプレートでコードブロックを描画します。この例では小さなハイライターを使っています。テンプレートにはコードとその言語が渡されます。',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Markdown を要素としてレンダリングします。',
            members: {
              text: 'Markdown のテキスト。',
              streaming: 'テキストがまだ届いている途中かどうか。',
              headingLevel:
                '<code>#</code> の見出しのレベル。より深い見出しは順に下がり、最大で 6 になります。',
              images:
                '画像を表示します。画像は追跡に使われることがあるため、オフのときは画像のテキストがリンクになります。',
              labels: 'コピーボタンのテキストなど。翻訳に使います。',
              codeTemplate:
                'ほかの場所から渡すコードブロックのテンプレート。たとえば、これを含むチャットから渡します。',
            },
          },
          NuiMarkdownCode: {
            summary:
              'コードブロックを描画します。コンテキストには、コード、<code>lang</code>、ブロックの受信中は <code>open</code> が入っています。',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'パーサーとそのヘルパー。コンポーネントなしで使えます。',
            members: {
              nuiParseMarkdown: 'コンポーネントが描画する、ブロック要素とインライン要素のツリー。',
              nuiMarkdownToText:
                'ブロックごとに1行のプレーンテキスト。読み上げやプレビューに使います。',
              nuiSafeUrl: 'リンク先が Web、メール、電話のアドレスかどうか。',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'リンク、コピーボタン、そして幅の広いテーブルやコードに移動し、スクロールできるようにします。',
          ],
        ],
        notes: [
          '見出し、リスト、引用、<code>th</code> のヘッダーと <code>scope</code> を備えたテーブル、コードは、すべて本物の要素です。',
          '幅の広いテーブルとコードブロックは、フォーカス可能な領域内でスクロールします。テーブルの領域には、そのヘッダーに基づいた名前が付きます。',
          'タスクリストのチェックボックスは、各タスクが完了しているかどうかを伝えます。コピーボタンの名前は「Copy code」で、ステータスメッセージで「Copied」と伝えます。',
          'ストリーミング中のキャレットはスクリーンリーダーから隠されており、動きを減らす設定では静止します。',
        ],
      },
      calendar: {
        name: 'カレンダー',
        title: 'Angular 用カレンダーコンポーネント',
        summary: '1つの日付、期間、複数の日付を選べます。キーボードでも操作できます。',
        description:
          'アクセシブルな Angular のカレンダー。1つの日付、期間、複数の日付を選択でき、最小日と最大日、選択できない日、複数月の並列表示、週番号に対応します。',
        apiDescription:
          'Needless UI のカレンダーの API リファレンス。nui-calendar の選択モード、min、max、unavailable による日の制限、複数月の表示、ラベルを解説します。',
        a11yDescription:
          'Needless UI のカレンダーのキーボード操作とアクセシビリティ。名前付きの日のグリッド、日と週を移動する矢印キー、月を移動する Page Up / Page Down を解説します。',
        overview: [
          'カレンダーでは、1つの日付、期間、または複数の日付を選択できます。値は <code>2026-09-25</code> のようなシンプルな ISO 形式の日付で、日付をずらすタイムゾーンを含まないため、そのままサーバーや <code>&lt;input type="date"&gt;</code> に渡せます。',
          '週はロケールが定める曜日から始まり、月や曜日の名前と数字はロケールの言語で表示されます。<code>min</code>、<code>max</code>、<code>unavailable</code> で選べない日を決め、<code>months</code> で複数の月を並べて表示します。タイトルを押すと月や年の一覧に切り替わるので、遠い日付にもすぐ移動できます。',
          'WAI-ARIA の日付ピッカーのパターンと同様に、すべての日にキーボードで移動でき、各日には省略のない日付が名前として付きます。',
        ],
        examples: {
          delivery: {
            title: '配達日',
            text: '今日より前の日、<code>max</code> より後の日、<code>unavailable</code> で除外された日は選べませんが、キーボードではそれらの日も通って移動できます。',
          },
          stay: {
            title: '期間',
            text: '<code>selection="range"</code> では、1回目の選択で期間が始まり、2回目の選択までは期間を示す帯がポインターに追従します。<code>months="2"</code> と <code>weekNumbers</code> で、一度に多くの情報を表示できます。',
          },
          'days-off': {
            title: '複数の日付',
            text: '<code>selection="multiple"</code> では、選ぶたびにその日が追加または削除されます。<code>firstDay</code> を使うと、ロケールとは別の曜日から週を始められます。',
          },
        },
        api: {
          NuiCalendar: {
            summary: '日付を選ぶためのカレンダー。',
            members: {
              selection: '選択できる日の数。',
              value: '選ばれた日。',
              values: '選ばれた日の配列。日付順に並びます。',
              range: '選ばれた期間。両端の日を含みます。',
              month: '表示している月。複数表示している場合は最初の月。',
              view: '日、月、年のどれを表示するか。',
              'min, max': '選択できる最初の日と最後の日。',
              unavailable: '祝日など、ほかに選べない日を指定します。',
              months: '並べて表示する月の数。',
              weekNumbers: 'ISO 週番号を表示します。',
              firstDay: '週の最初の曜日。1 は月曜日です。デフォルトはロケールに従います。',
              locale: '名前と数字の書式設定、および週の最初の曜日の決定に使うロケール。',
              labels: 'カレンダーが表示または読み上げるすべてのテキスト。翻訳に使います。',
              picked: '選択のたびに、選ばれた日、または両端がそろった期間を出力します。',
              focusDate: 'キーボードのフォーカスを指定した日に移し、その月を表示します。',
            },
          },
          NuiDateRange: {
            summary: '日付の期間。',
            members: { 'start, end': '最初の日と最後の日。どちらも期間に含まれます。' },
          },
        },
        keyboard: [
          [
            '左右矢印キー',
            '前日または翌日に移動します。右から左に書く言語では左右が逆になります。',
          ],
          ['上下矢印キー', '1週間前または1週間後の日に移動します。'],
          ['Home / End', '週の最初または最後の日に移動します。'],
          [
            'Page Up / Page Down',
            '前月または翌月に移動します。Shift を併用すると前年または翌年に移動します。',
          ],
          ['Enter または Space', 'その日を選択するか、選んだ月または年の表示に切り替えます。'],
          ['Esc', '期間の始めに選んだ日を取り消すか、元の表示に戻ります。'],
        ],
        notes: [
          '各月はタイトルで名前が付いた <code>grid</code> で、曜日の省略しない名前が <code>abbr</code> に入っています。',
          '各日には省略のない日付が名前として付き、「Today」「unavailable」や、期間の始点・終点であることが加わります。選ばれた日には <code>aria-selected</code>、選べない日には <code>aria-disabled</code> が付きます。',
          'グリッドのタブストップは1つだけで、ロービング <code>tabindex</code> を使います。前後の月に移動するボタンは、新しい月を読み上げます。',
        ],
      },
      'date-picker': {
        name: '日付ピッカー',
        title: 'Angular 用日付・時刻ピッカーコンポーネント',
        summary: '日付や時刻をセグメントごとに入力するか、カレンダーから選びます。',
        description:
          'アクセシブルな Angular の日付・時刻・期間ピッカー。ロケールの順序で入力するセグメント、ポップオーバーのカレンダー、プリセット、フォームに対応します。',
        apiDescription:
          'Needless UI の日付ピッカーの API リファレンス。nui-date-field、nui-time-field、nui-date-picker、nui-date-range-picker とプリセットを解説します。',
        a11yDescription:
          'Needless UI の日付ピッカーのキーボード操作とアクセシビリティ。日付の各部分を担うスピンボタンと、ダイアログ内のカレンダーを解説します。',
        overview: [
          '日付と時刻のフィールドは、セグメントごとに入力します。日、月、年はロケールの順序で並び、続く時と分はロケールの12時間制または24時間制に従います。各セグメントはスピンボタンで、数字を入力すると自動的に次へ進み、矢印キーで値を増減することもできます。日付全体を貼り付けると、すべてのセグメントが埋まります。',
          'ピッカーはポップオーバーのカレンダーを加え、1つの日付にも、プリセット付きの期間にも使えます。値は <code>2026-09-25</code> や <code>2026-09-25T09:30</code> のようなシンプルな ISO 形式の文字列で、どのフィールドも Signal Forms、リアクティブフォーム、<code>ngModel</code> で使えます。',
          'このサイトの例はページの言語に従います。言語を切り替えると、順序、区切り文字、数字が変わるのを確認できます。',
        ],
        examples: {
          fields: {
            title: '日付と時刻のフィールド',
            text: '数字を入力するか、矢印キーを使います。Backspace をもう一度押すと、1つ前のセグメントに戻ります。<code>minuteStep</code> は、矢印キーで分が変わる幅を設定します。',
          },
          pickers: {
            title: '日付ピッカー',
            text: 'ボタンを押すと選択中の日のカレンダーが開き、日を選ぶと閉じます。<code>granularity="minute"</code> では時刻も入力でき、カレンダーで変わるのは日付だけです。',
          },
          range: {
            title: '期間',
            text: '2つのフィールドと2か月分のカレンダーです。<code>nuiDateRangePresets()</code> はよく使う期間を追加します。値は、両端が正しい順序で設定されるまで null のままです。',
          },
        },
        api: {
          NuiDateField: {
            summary: 'セグメントごとに入力する日付、または日付と時刻。',
            members: {
              value: '値。すべてのセグメントが埋まるまでは null です。',
              granularity: '日で止めるか、時、分、秒まで続けるか。',
              'min, max': '最も早い値と最も遅い値。範囲外の値ではフィールドが無効になります。',
              placeholder: '空のセグメントで矢印キーを押したときの起点となる値。',
              hourCycle: '12時間制または24時間制。デフォルトはロケールに従います。',
              minuteStep: '矢印キーで分が変わる幅。',
              'disabled, readonly': '変更できなくします。',
              locale: '順序、区切り文字、数字、時間制を決めるロケール。',
              labels: 'フィールドが読み上げるすべてのテキスト。翻訳に使います。',
              invalid: '値が <code>min</code> と <code>max</code> の範囲外かどうか。',
              focus: '最初の空のセグメントにフォーカスします。',
            },
          },
          NuiTimeField: {
            summary: 'セグメントごとに入力する時刻。日付フィールドと同じ入力を受け取ります。',
            members: { granularity: '時、分、秒のどこまで入力するか。' },
          },
          NuiDatePicker: {
            summary:
              'ポップオーバーのカレンダーが付いた日付フィールド。日付フィールドの入力に加えて、次の入力を受け取ります。',
            members: {
              unavailable: 'カレンダーで選べない日。',
              'firstDay, weekNumbers': 'カレンダーに渡されます。',
              labels: 'フィールド、ボタン、カレンダーのテキスト。',
              show: 'カレンダーを開きます。',
            },
          },
          NuiDateRangePicker: {
            summary:
              '期間用のカレンダーが付いた2つの日付フィールド。日付ピッカーの入力に加えて、次の入力を受け取ります。',
            members: {
              value: '期間。両端が正しい順序で設定されるまでは null です。',
              presets: '1クリックで選べる、名前付きの期間。',
              months: 'カレンダーに並べて表示する月の数。狭い画面では1か月だけ表示します。',
            },
          },
          NuiDateRangePreset: {
            summary: '名前付きの期間。固定の期間か、選ばれたときに作られる期間です。',
            members: {
              label: '名前。',
              range: '期間、または期間を作る関数。',
            },
          },
        },
        keyboard: [
          [
            '数字キー',
            'セグメントに入力します。後に続けられる数字がなくなると、次のセグメントに進みます。',
          ],
          [
            '上下矢印キー',
            'セグメントの値を増減します。Page Up / Page Down ではより大きく増減します。',
          ],
          ['左右矢印キー、Tab', '前または次のセグメントに移動します。'],
          ['Backspace', 'セグメントをクリアし、もう一度押すと前のセグメントに戻ります。'],
          ['A / P', '午前（AM）または午後（PM）に設定します。'],
        ],
        notes: [
          'フィールドは <code>group</code> です。<code>aria-label</code> または <code>aria-labelledby</code> で名前を付けてください。各セグメントは担当する部分の名前が付いた <code>spinbutton</code> で、月の値は月名で、空のセグメントは「Empty」と読み上げられます。',
          'セグメントは編集可能なテキストなので、タッチキーボードは数字入力の状態で開きます。',
          'ピッカーのボタンの名前は「Choose a date」で、ポップオーバーは <code>dialog</code> です。日付を選ぶと、フォーカスはボタンに戻ります。',
          '中のカレンダーは、<a href="/components/calendar">カレンダー</a>と同じように動作します。',
        ],
      },
      scheduler: {
        name: 'スケジューラー',
        title: 'Angular 用スケジューラーコンポーネント',
        summary: '予定を月、週、日、予定リストで表示し、ドラッグで配置できます。',
        description:
          'アクセシブルな Angular のスケジューラー。月、週、日、予定リストの表示、重なる予定の並列表示、ドラッグでの移動とリサイズ、完全なキーボード操作に対応します。',
        apiDescription:
          'Needless UI のスケジューラーの API リファレンス。nui-scheduler のビュー、予定、編集と選択、出力、予定のテンプレートを解説します。',
        a11yDescription:
          'Needless UI のスケジューラーのキーボード操作とアクセシビリティ。日と時刻のグリッド、名前付きの予定、すべてのドラッグに代わるキーボード操作を解説します。',
        overview: [
          'スケジューラーは、予定を月、週、日、または予定リストで表示します。予定は ISO 形式の時刻を持つシンプルなデータです。時間が重なる予定は幅を分け合い、午前0時をまたぐ予定は両方の日に表示され、終日の予定は上部を横に伸びるバーとして表示されます。',
          'スケジューラーが予定を自ら変更することはありません。予定やその下端をドラッグすると <code>eventChange</code> が新しい時刻を通知し、グリッド上で時間を選ぶと <code>slotSelect</code> がその時間を通知します。<code>rangeChange</code> は表示中の日を知らせるので、その日の予定を読み込めます。',
          'ポインターでできることは、すべてキーボードでもできます。グリッドのタブストップは1つだけで、矢印キーで日と時刻の間を移動し、Alt キーと矢印キーで予定を動かします。',
        ],
        examples: {
          planner: {
            title: '1週間の計画',
            text: '<code>editable</code> と <code>selectable</code> を指定すると、予定をドラッグして移動し、下端をドラッグしてリサイズし、空いている時間帯をドラッグして予定を追加できます。この例では、出力に応じて予定を更新しています。',
          },
          month: {
            title: '月表示と予定リスト',
            text: '複数の日にまたがる予定はバーとして表示され、予定が多い日には残りの件数が表示されます。<code>views</code> で、月表示と、今後 <code>agendaDays</code> 日間の予定リストだけを提供しています。',
          },
          rooms: {
            title: '会議室の1日',
            text: '<code>nuiSchedulerEvent</code> で、各予約を会議室と主催者とともに描画します。<code>slotMinutes="15"</code> を指定すると、行が細かくなります。',
          },
        },
        api: {
          NuiScheduler: {
            summary: '予定を月、週、日、予定リストで表示するスケジューラー。',
            members: {
              events: '表示する予定。',
              view: '表示中のビュー。',
              views: 'ユーザーが切り替えられるビュー。',
              date: '表示する日。キーボードのフォーカスがある日でもあります。',
              slotMinutes: 'タイムグリッドの1行あたりの分数。予定を動かす単位にもなります。',
              scrollHour: 'タイムグリッドを開いたときに最初に表示する時刻。',
              agendaDays: '予定リストに表示する今後の日数。',
              editable: 'ポインターとキーボードで予定を移動、リサイズできるようにします。',
              selectable: 'グリッド上で時間を選べるようにします。予定の作成に使います。',
              firstDay: '週の最初の曜日。1 は月曜日です。デフォルトはロケールに従います。',
              headingLevel:
                'タイトルの見出しレベル。予定リストの日の見出しは、その1つ下になります。',
              locale: '日付と時刻の書式設定に使うロケール。',
              labels: 'スケジューラーが表示または読み上げるすべてのテキスト。翻訳に使います。',
              eventClick: 'クリックされた予定、または Enter キーで開かれた予定を出力します。',
              eventChange: '移動またはリサイズの後に、予定の新しい時刻を出力します。',
              slotSelect: 'グリッド上で選ばれた時間を出力します。',
              rangeChange: '表示される最初の日と最後の日が変わったときに、それらを出力します。',
            },
          },
          NuiSchedulerEvent: {
            summary:
              '1件の予定。時刻付きの予定では終了時刻を含まず、終日の予定では終了日が最終日になります。',
            members: {
              'id, title': 'キーと、表示する内容。',
              'start, end': '日付と時刻。終日の予定では日付のみです。',
              allDay: 'デフォルトでは、<code>start</code> に時刻がないかどうかで決まります。',
              tone: '予定の色。',
              editable: 'スケジューラーの設定にかかわらず、この予定を移動できるかどうか。',
              data: 'そのほか、予定と一緒に保持するデータ。',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: '予定を描画します。コンテキストには、予定とテキスト形式の時刻が入っています。',
            members: {},
          },
        },
        keyboard: [
          [
            '矢印キー',
            '日単位と時間枠単位で移動します。右から左に書く言語では左右が逆になります。',
          ],
          ['Page Up / Page Down', '前または次の月、週、日に移動します。'],
          ['Shift + 矢印キー', '選んだ時間の範囲を広げます。'],
          ['セル上で Enter または Space', 'セル内の予定に移動するか、その時間を選択します。'],
          ['予定上で上下矢印キー', 'セル内の前または次の予定に移動します。'],
          ['予定上で Alt + 矢印キー', '予定を時間枠1つ分、または1日分移動します。'],
          ['Alt + Shift + 上または下矢印キー', '予定を短く、または長くします。'],
          ['Esc', 'セルに戻るか、選んだ時間を解除するか、ドラッグを取り消します。'],
        ],
        notes: [
          '月、週、日の各表示は、タイトルで名前が付いた <code>grid</code> です。日付が列ヘッダー、時刻が行ヘッダーになるため、各セルは日付と時刻とともに読み上げられます。',
          '各予定は、「Standup, Friday, September 25, 9:00 – 9:30 AM」のように、タイトル、日付、時刻で名前が付いたボタンです。移動やリサイズを行うと、新しい時刻が読み上げられます。',
          'すべてのドラッグ操作はキーボードでも行えるため、ポインターは必要ありません。',
          'ビューの切り替えボタンはグループにまとめたトグルボタンで、別の週や月に移動すると、そのタイトルが読み上げられます。',
        ],
      },
      splitter: {
        name: 'スプリッター',
        title: 'Angular 用スプリッター・リサイズ可能なペイン',
        summary: '横並びまたは縦積みのペインを、ハンドルでリサイズできます。',
        description:
          'アクセシブルな Angular のスプリッター。横並びや縦積みのペインのリサイズ、サイズの制限、折りたたみ、サイズの保存、完全なキーボード操作に対応します。',
        apiDescription:
          'Needless UI のスプリッターの API リファレンス。nuiSplitter の向きとサイズ、ペインの制限と折りたたみ、ペイン間のハンドルを解説します。',
        a11yDescription:
          'Needless UI のスプリッターのキーボード操作とアクセシビリティ。値を持ちフォーカスできるウィンドウスプリッターのハンドル、矢印キー、Home、End、Enter を解説します。',
        overview: [
          'スプリッターは、スペースを複数のペインで分け合い、隣り合うペインの間にハンドルを置きます。ハンドルをドラッグするか、フォーカスして矢印キーで動かします。サイズは合計が 100 になるパーセント値で、<code>[(sizes)]</code> でバインドします。',
          '各ペインの初期サイズ、最小サイズ、最大サイズは、ピクセル、rem、パーセントで指定できます。<code>collapsible</code> を指定したペインは、最小サイズの半分より小さくドラッグするか、ハンドル上で Enter キーを押すと折りたたまれ、元に戻すと折りたたむ前のサイズで表示されます。',
          '<code>storageKey</code> を指定すると、サイズが <code>localStorage</code> に保存されるため、次回の訪問時も前回のままのレイアウトで表示されます。',
        ],
        examples: {
          editor: {
            title: 'エディター',
            text: 'ファイル、コード、プレビューで構成されています。ファイルとプレビューは折りたたむことができ、コードは幅の 30% 以上を保ち、サイズは保存されます。',
          },
          stacked: {
            title: '縦積みのペイン',
            text: '<code>orientation="vertical"</code> でペインを縦に積み、<code>[(sizes)]</code> で変化するサイズを読み取ります。',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'ハンドルで区切られた複数のペイン。',
            members: {
              orientation: '横並びか縦積みか。',
              sizes: '各ペインの割合（パーセント）。ペインの順に並べます。',
              storageKey: 'サイズを <code>localStorage</code> にこのキーで保存します。',
              step: '矢印キーでハンドルが動く量（パーセント）。Shift を併用すると2倍動きます。',
              move: 'あるペインの後ろにある境界を、指定したパーセントだけ動かします。',
            },
          },
          NuiSplitterPane: {
            summary: 'ペイン。サイズはピクセル、rem、パーセントで指定します。',
            members: {
              defaultSize: '最初のサイズ。復元するサイズがないときに使われます。',
              min: '最小サイズ。',
              max: '最大サイズ。',
              collapsible:
                '折りたためるようにします。最小サイズの半分より小さくドラッグするか、Enter キーで折りたたまれます。',
              collapsedSize: '折りたたんだときのサイズ。アイコンだけを並べた細い列などに使います。',
              label: 'このペインをリサイズするハンドルの名前。',
            },
          },
          NuiSplitterHandle: {
            summary: '2つのペインの間にあるハンドル。',
            members: {
              label: 'ハンドルの名前。ペインのラベルで名前が付かない場合に使います。',
              disabled: 'ハンドルを動かせなくします。',
              toggle: '隣のペインを折りたたむか、元に戻します。',
            },
          },
        },
        keyboard: [
          [
            '左右矢印キー',
            '横並びのペインの間にあるハンドルを動かします。右から左に書く言語では左右が逆になります。',
          ],
          ['上下矢印キー', '縦積みのペインの間にあるハンドルを動かします。'],
          ['Shift + 矢印キー', '2倍の距離を動かします。'],
          ['Home / End', 'ハンドルの前にあるペインを、最小サイズまたは最大サイズにします。'],
          ['Enter', '折りたためるペインを折りたたむか、元に戻します。'],
        ],
        notes: [
          '各ハンドルは、WAI-ARIA のウィンドウスプリッターパターンと同様に、フォーカスできる <code>separator</code> です。値はハンドルの前にあるペインのサイズで、そのペインの制限の範囲内に収まり、<code>aria-controls</code> がそのペインを指します。',
          'ハンドルには、ペインの <code>label</code> で名前を付けてください。「Files」のような名前があれば、ハンドルが何をリサイズするのかがスクリーンリーダーに伝わります。',
          'ハンドルをダブルクリックしてもペインを折りたためます。ドラッグ中はポインターをキャプチャーするため、すばやく動かしてもハンドルから外れません。',
        ],
      },
      tour: {
        name: 'ガイドツアー',
        title: 'Angular 用ガイドツアーコンポーネント',
        summary: '各ステップのカードを説明対象の横に表示し、周りのページを暗くします。',
        description:
          'アクセシブルな Angular のプロダクトツアー。ステップごとにターゲットの横に出るカード、スポットライト、操作できるステップ、フォーカスの復元に対応します。',
        apiDescription:
          'Needless UI のガイドツアーの API リファレンス。nui-tour のステップ、open と step のバインディング、出力、各ステップのターゲット、配置、フックを解説します。',
        a11yDescription:
          'Needless UI のガイドツアーのキーボード操作とアクセシビリティ。タイトルで名前が付くダイアログ、フォーカスの保持と復元、Esc キーでの終了を解説します。',
        overview: [
          'ガイドツアーは、ページを1ステップずつ案内します。各ステップは要素を指し示し、その横にカードを表示して、周りのページを暗くします。ターゲットのないステップは中央に表示されます。',
          'ステップはシンプルなデータです。ターゲット（セレクター、要素、または要素を見つける関数）、タイトル、テキストまたはテンプレートによるコンテンツで構成されます。<code>beforeShow</code> が先に実行されるので、ステップはターゲットを含むパネルを開くことができます。画面外にあるターゲットまではスクロールします。',
          'どのカードもダイアログです。通常はモーダルですが、ステップが <code>interactive</code> の場合はモーダルにならず、ユーザーは指し示された要素を操作できます。Esc キーでツアーが終了し、フォーカスは元の位置に戻ります。',
        ],
        examples: {
          basics: {
            title: 'はじめてのツアー',
            text: '4つのステップで構成され、最初のステップにはターゲットがありません。<code>finished</code> と <code>dismissed</code> で、2種類の終わり方を区別できます。',
          },
          interactive: {
            title: '試せるステップ',
            text: '<code>beforeShow</code> は、2番目のステップが設定の中を指し示す前に設定を開きます。<code>interactive</code> を指定すると、カードの表示中もスイッチを操作できます。',
          },
        },
        api: {
          NuiTour: {
            summary: 'ガイドツアー。',
            members: {
              steps: 'ステップ。順番に並べます。',
              open: 'ツアーが実行中かどうか。',
              step: '表示中のステップ。0 から数えます。',
              labels: 'ツアーが表示するすべてのテキスト。翻訳に使います。',
              finished: '最後のステップが完了したときに出力します。',
              dismissed: '途中で終了したときに、終了したステップを出力します。',
              start: 'ツアーを開始します。最初のステップ、または指定したステップから始まります。',
              end: 'ツアーを、完了または中断として終了します。',
            },
          },
          NuiTourStep: {
            summary: 'ツアーの1ステップ。',
            members: {
              target: '指し示す対象。指定しない場合、カードは中央に表示されます。',
              title: 'カードのタイトル。',
              content: 'カードの本文、またはテンプレート。',
              side: 'ターゲットのどちら側にカードを表示するか。',
              align: 'カードをターゲットとどう揃えるか。',
              padding: 'スポットライト内でターゲットの周りに取る余白（ピクセル単位）。',
              interactive: 'カードの表示中もターゲットを操作できるようにします。',
              beforeShow:
                'ステップを表示する前に実行されます。Promise を返すと、ツアーはその完了を待ちます。',
            },
          },
        },
        keyboard: [
          [
            'Tab',
            'カードのボタン間を移動します。モーダルのステップでは、フォーカスはカード内にとどまります。',
          ],
          ['Enter または Space', 'フォーカスされているボタン（Next、Back、Done）を押します。'],
          ['Esc', 'ツアーを終了します。'],
        ],
        notes: [
          '各カードは、タイトルで名前が付き、コンテンツで説明される <code>dialog</code> です。フォーカスはステップごとにカードのメインボタンに移り、ツアーが終わると元の位置に戻ります。',
          'モーダルのステップでは、ページのほかの部分は操作できなくなります（inert）。インタラクティブなステップはモーダルではないため、ポインターだけでなくキーボードでもターゲットに到達できます。',
          '進行状況は「2 of 4」のようなテキストで伝えます。ドットはそれを図で示しているだけです。',
        ],
      },
      dropzone: {
        name: 'ドロップゾーン',
        title: 'Angular 用ファイルドロップゾーン・アップロード',
        summary:
          'ファイルをドロップするか選択します。チェック、プレビュー、進捗表示付きのアップロードに対応します。',
        description:
          'アクセシブルな Angular のファイルドロップゾーン。フォルダーや貼り付けも受け付け、種類とサイズを検証し、画像をプレビューし、進捗と再試行付きでアップロードします。',
        apiDescription:
          'Needless UI のドロップゾーンの API リファレンス。nui-dropzone のファイルとチェック、アップロード関数とキュー、出力、テキストを解説します。',
        a11yDescription:
          'Needless UI のドロップゾーンのキーボード操作とアクセシビリティ。ボタンであるゾーン、結果の読み上げ、名前付きのプログレスバーとアクションを解説します。',
        overview: [
          'ドロップゾーンは、ドロップされたファイル、ファイル選択ダイアログで選ばれたファイル、貼り付けられたファイルを受け取ります。ドロップされたフォルダーは中まで読み取られ、各ファイルはそのパスを保持します。',
          'すべてのファイルは、<code>accept</code>、<code>maxSize</code>、<code>minSize</code>、<code>maxFiles</code>、そして独自の <code>validate</code> 関数でチェックされ、受け付けられなかったファイルは理由とともに一覧表示されます。画像にはプレビューが付きます。',
          '<code>upload</code> 関数がない場合、ドロップゾーンはフォームのためにファイルを <code>[(files)]</code> に保持します。関数がある場合は、ファイルを数件ずつアップロードし、進捗表示、キャンセル、再試行に対応します。アップロードの <code>signal</code> を <code>fetch</code> に渡すと、キャンセルでアップロードが止まります。',
        ],
        examples: {
          upload: {
            title: 'アップロード',
            text: '模擬アップロードが段階的に進捗を報告します。名前に「fail」を含むファイルは、再試行を見せるために失敗します。<code>directory</code> は、フォルダーを選ぶボタンを追加します。',
          },
          attach: {
            title: 'フォームの添付ファイル',
            text: '<code>upload</code> を指定しない例です。ドロップゾーンは最大3つのドキュメントを <code>[(files)]</code> に保持し、中に書いたテキストがデフォルトのテキストの代わりに表示されます。',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'ファイルをドロップしたり選んだりする場所。',
            members: {
              files: '保持しているファイル。順番に並びます。',
              accept:
                '受け付けるファイルの種類。<code>&lt;input type="file"&gt;</code> と同じ形式です。',
              multiple: '一度に複数のファイルを受け付けます。',
              directory: 'フォルダーを選ぶボタンを表示します。',
              maxFiles: '保持できるファイルの数。',
              'maxSize, minSize': 'ファイルの最大サイズと最小サイズ（バイト単位）。',
              validate:
                '各ファイルをチェックします。メッセージを返すと、そのファイルは受け付けられません。',
              upload: 'ファイルを送信します。指定しない場合、ファイルは保持されるだけです。',
              concurrency: '同時にアップロードするファイルの数。',
              hint: 'ゾーンのテキストの下に表示する1行。受け付けるファイルの説明などに使います。',
              disabled: 'ファイルを受け付けなくします。',
              labels: '表示または読み上げるすべてのテキスト。翻訳に使います。',
              uploaded:
                'アップロードされたファイルを、<code>upload</code> の戻り値とともに出力します。',
              rejected: '受け付けられなかったファイルを、その理由とともに出力します。',
              queue: 'アップロードキュー。コードからキャンセル、再試行、進捗の読み取りができます。',
              take: 'コードからファイルを追加します。各ファイルはチェックされます。',
            },
          },
          NuiUploader: {
            summary:
              '1つのファイルを送信する関数。進捗を 0 から 1 で報告し、シグナルが中断されたら停止します。',
            members: {
              '(file, context)': 'サーバーの応答内容を値とする Promise を返します。',
            },
          },
        },
        keyboard: [
          ['Enter または Space', 'ゾーン上で、ファイル選択ダイアログを開きます。'],
          ['Ctrl + V（⌘ + V）', 'ゾーン上で、貼り付けたファイルを追加します。'],
          ['Tab', 'ゾーンと、各ファイルのアクションの間を移動します。'],
        ],
        notes: [
          'ゾーンはボタンなので、ポインターがなくても使えます。ヒントはその説明になります。',
          '追加されたファイルと受け付けられなかったファイルは読み上げられます。各プログレスバーはそのファイルの名前が付いた <code>progressbar</code> で、各アクションには「Remove beach.jpg」のように、その動作を表す名前が付きます。',
          'プレビューは装飾です。どのファイルかはファイル名でわかります。',
        ],
      },
      mask: {
        name: '入力マスク',
        title: 'Angular 用入力マスクディレクティブ',
        summary:
          '入力に合わせて書式が整うテキストフィールド。日付、カード番号、IBAN、各種コードに使えます。',
        description:
          'Angular の入力マスク。入力に合わせてテキストフィールドの書式を整え、キャレット位置の保持、カード番号と IBAN 用のヘルパー、フォームの検証に対応します。',
        apiDescription:
          'Needless UI の入力マスクの API リファレンス。nuiMask ディレクティブ、そのトークンと値、カード番号と IBAN 用のヘルパーを解説します。',
        a11yDescription:
          'Needless UI の入力マスクのアクセシビリティ。ラベルを保つネイティブのフィールド、スマートフォンの数字キーボード、リテラルを飛ばす削除を解説します。',
        overview: [
          'マスクは、入力に合わせてテキストフィールドの書式を整えます。<code>00/00/0000</code> はスラッシュを補い、<code>AA 000 AA</code> は英字と数字を決まった順に受け付けます。当てはまらない文字は入力されず、途中に入力してもキャレットの位置は保たれます。',
          'マスクはトークンとリテラルでできています。<code>0</code> は数字、<code>a</code> は文字、<code>*</code> はそのどちらかを表し、<code>A</code> と <code>X</code> はコード向けの同じ役割のトークンで、大文字で入力されます。<code>tokens</code> で独自のトークンを追加したり、入力内容に応じてマスクを選ぶ関数を渡したりできます。<code>nuiCardMask</code> はそうした関数で、カードブランドに応じてマスクを選びます。',
          '値は表示どおりの文字列で、<code>unmask</code> を指定するとデータだけになります。マスクは Signal Forms、リアクティブフォーム、<code>ngModel</code> で使え、入力途中の値はエラーになります。',
        ],
        examples: {
          formats: {
            title: '書式',
            text: '日付、時刻、ナンバープレート、そして16進数の数字を受け付ける独自のトークンを使ったカラーコードです。',
          },
          payment: {
            title: '支払い情報',
            text: 'Signal Forms のフィールドです。カード番号のマスクはブランドに合わせて変わり、セキュリティコードは American Express なら4桁になります。<code>nuiCardValid</code> と <code>nuiIbanValid</code> が番号を検証します。',
          },
        },
        api: {
          NuiMask: {
            summary: 'ネイティブのテキストフィールドに適用するマスク。',
            members: {
              nuiMask: 'マスク、または入力されたデータに応じてマスクを選ぶ関数。',
              tokens: '追加または置き換えるマスク文字。',
              unmask: '値をデータだけにし、リテラルを含めません。',
              value:
                '値。表示どおりの文字列、または <code>unmask</code> を指定した場合はデータです。',
              raw: '入力されたデータ。リテラルは含みません。',
              complete: 'マスクのすべての位置が埋まっているかどうか。',
            },
          },
          Helpers: {
            summary: 'マスクの書式設定、検証、作成を行う関数。',
            members: {
              'nuiMaskFormat, nuiUnmask':
                '値をマスクで整形するか、整形された値からデータを取り出します。',
              nuiCardMask: 'カード番号用のマスク。ブランドがカードに印字するとおりに区切ります。',
              nuiCardBrand: 'カード番号の先頭の数字から判定したブランド。',
              'nuiCardValid, nuiLuhn':
                'カード番号がブランドの桁数を満たし、Luhn チェックを通過するかどうか。',
              nuiIbanMask: 'IBAN 用のマスク。長さはその国の IBAN に合わせます。',
              nuiIbanValid: 'IBAN がその国の桁数に合い、チェックディジットが正しいかどうか。',
            },
          },
        },
        keyboard: [
          ['Backspace', 'リテラルを飛ばして、キャレットの前の文字を削除します。'],
          ['Delete', 'リテラルを飛ばして、キャレットの後ろの文字を削除します。'],
        ],
        notes: [
          'マスクは自分で用意した <code>&lt;input&gt;</code> に適用するため、ラベルやヒントは書いたとおりに残ります。求める入力はそこで説明してください。マスクは説明の代わりになりません。',
          '数字だけのマスクは <code>inputmode="numeric"</code> を設定するため、スマートフォンにはテンキーが表示されます。ただし、フィールドが独自に設定している場合はそちらに従います。',
          'どの文字体系の数字も受け付け、0〜9 に置き換えて入力します。',
        ],
      },
      'phone-field': {
        name: '電話番号入力',
        title: 'Angular 用電話番号入力コンポーネント',
        summary: '国の選択ボタンと電話番号。番号はその国の表記どおりに区切られます。',
        description:
          'アクセシブルな Angular の電話番号入力。国の選択、国ごとの表記に合わせた番号の区切り、国番号の入力や貼り付け、E.164 形式の値に対応します。',
        apiDescription:
          'Needless UI の電話番号入力の API リファレンス。nui-phone-field の値と国、選べる国、番号を読み書きするヘルパーを解説します。',
        a11yDescription:
          'Needless UI の電話番号入力のアクセシビリティ。名前付きの国の選択ボタン、番号から国が決まったときの読み上げ、ブラウザーの自動入力を解説します。',
        overview: [
          '電話番号入力は、国の選択ボタンと番号の入力欄でできています。番号は入力に合わせてその国の表記どおりに区切られ、値は <code>+393331234567</code> のような E.164 形式の番号になります。',
          'ユーザーは番号を普段どおりに入力できます。先頭の 0（北米の番号では先頭の 1）は国内プレフィックスとみなされ、値には含まれません。<code>+44</code> や <code>0044</code> のように国番号を入力または貼り付けるとその国が選ばれ、複数の国が同じ国番号を使う場合は市外局番からも国が決まります。',
          '最初に選ばれる国はロケールの国で、<code>countries</code> で一覧を絞り込めます。フォームでは、その国の番号として短すぎたり長すぎたりする番号はエラーになります。厳密に検証するには、サーバーでも番号を確認してください。',
        ],
        examples: {
          basic: {
            title: '電話番号',
            text: '<code>+</code> と国番号から入力すると、入力に合わせて国が切り替わります。',
          },
          countries: {
            title: '国の絞り込み',
            text: '<code>countries</code> で11か国に絞り、フィールドはリアクティブフォームの <code>FormControl</code> と連携します。<code>nuiFormatPhone</code> は、値を人が読みやすい形に書き直します。',
          },
        },
        api: {
          NuiPhoneField: {
            summary: '電話番号の入力フィールド。',
            members: {
              value: 'E.164 形式の番号、または空。',
              country: '国。地域コードで表します。',
              countries: '選べる国。地域コードで指定します。',
              locale: '国名の言語。',
              label:
                '番号の入力欄の名前。<code>&lt;label for&gt;</code> で名前を付けていない場合に使います。',
              inputId: '番号の入力欄の id。<code>&lt;label for&gt;</code> で使います。',
              placeholder: '番号の入力欄が空のときに表示するテキスト。',
              invalid: '番号を無効としてマークします。',
              disabled: '変更できなくします。',
              labels: '表示または読み上げるすべてのテキスト。翻訳に使います。',
            },
          },
          Helpers: {
            summary: '電話番号を扱う関数。',
            members: {
              nuiParsePhone: 'どのように書かれた番号も読み取り、地域、国番号、国内番号に分けます。',
              nuiFormatPhone: '番号をその国の区切り方で、または E.164 形式で書き出します。',
              nuiPhoneValid: '番号が既知の国番号を持ち、その国の桁数に合っているかどうか。',
            },
          },
        },
        keyboard: [
          ['国の選択ボタンで文字キー', 'その文字で始まる国にジャンプします。'],
          ['Enter または Space', '国の一覧を開くか、国を選びます。'],
          ['Backspace', '番号の入力欄で、スペースや括弧を飛ばして数字を1つ削除します。'],
        ],
        notes: [
          '国の選択ボタンは「Country code」という名前で、国旗と国番号が読み上げられます。国番号や市外局番から国が選ばれると、新しい国が読み上げられます。',
          '番号の入力欄には、<code>&lt;label for&gt;</code> と <code>inputId</code>、または <code>label</code> で名前を付けてください。',
          '番号の入力欄には <code>autocomplete="tel"</code> が付いているため、ブラウザーは国番号も含めて番号を自動入力でき、スマートフォンには電話用のキーパッドが表示されます。',
        ],
      },
      'color-picker': {
        name: 'カラーピッカー',
        title: 'Angular 用 OKLCH カラーピッカー',
        summary:
          'OKLCH で色を選びます。スライダー、スウォッチ、スポイト、コントラストチェック付き。',
        description:
          'OKLCH を使うアクセシブルな Angular のカラーピッカー。広色域の P3 カラー、CSS のあらゆる色の記法、スウォッチ、スポイト、WCAG のコントラストチェックに対応します。',
        apiDescription:
          'Needless UI のカラーピッカーの API リファレンス。nui-color-picker の値、形式、色域、スウォッチ、コントラストと、色を扱うヘルパーを解説します。',
        a11yDescription:
          'Needless UI のカラーピッカーのキーボード操作とアクセシビリティ。2つの値を持つエリアのスライダー、ネイティブのスライダー、言葉で示すコントラストの判定を解説します。',
        overview: [
          'カラーピッカーは、モダンな CSS の知覚的な色空間である OKLCH で動作します。エリアの横方向では、彩度がグレーからその明度で画面が表示できる最大値まで変化するため、どの点も使える色になり、色相を回してもつまみは動きません。',
          '入力欄は色名を含むあらゆる CSS の色を受け付け、形式ボタンは値を hex、<code>rgb()</code>、<code>hsl()</code>、<code>oklch()</code>、<code>color(display-p3)</code> のいずれかで書き出します。形式の色域から外れる色は、CSS と同じ方法で明度と色相を保ったまま色域内に収められます。',
          '<code>swatches</code> で選択用の色を追加し、<code>contrastWith</code> で背景に対する色のコントラストを WCAG 2 の基準で確認できます。ブラウザーがスポイトに対応していれば、ボタンで画面上の色を拾えます。',
        ],
        examples: {
          brand: {
            title: 'ブランドカラー',
            text: '名前付きのスウォッチと、その色の上に置いた白いテキストのコントラスト。明るい色を選ぶと AA を満たさなくなります。',
          },
          wide: {
            title: '広色域',
            text: '<code>gamut="p3"</code> はエリアを Display P3 の色で埋め、sRGB の境界を破線で示します。値は <code>oklch()</code> のままです。',
          },
          popover: {
            title: 'ポップオーバーの中で',
            text: '色を表示するボタンが、<a href="/components/popover">ポップオーバー</a>でピッカーを開きます。',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'OKLCH で動作するカラーピッカー。',
            members: {
              value: '形式に従って書かれた色。色が選ばれるまでは空です。',
              format: '値の書き方。',
              formats: '形式ボタンで切り替わる形式。',
              gamut: 'エリアに含める色：sRGB または Display P3。',
              alpha: '不透明度のスライダーを表示します。',
              swatches: '選択用の色。名前を付けられます。',
              contrastWith: 'コントラストを確認する背景色。',
              eyeDropper: 'ブラウザーが対応していれば、スポイトを表示します。',
              disabled: '変更できなくします。',
              labels: '表示または読み上げるすべてのテキスト。翻訳に使います。',
              color: '選ばれた色（OKLCH）。',
            },
          },
          Helpers: {
            summary: '色を扱う関数。',
            members: {
              nuiParseColor: 'CSS のどの記法で書かれた色も読み取ります。',
              nuiFormatColor: '色を指定した形式で書き出します。',
              nuiToGamut: 'CSS と同じ方法で、色を sRGB または Display P3 の色域に収めます。',
              nuiContrast: '背景に対する色の、WCAG 2 のコントラスト比。',
            },
          },
        },
        keyboard: [
          ['左右矢印キー', 'エリア上で、彩度を下げるか上げます。'],
          ['上下矢印キー', 'エリア上で、明るくするか暗くします。'],
          ['Shift + 矢印キー', '10倍の幅で動かします。'],
          ['Home / End', 'エリア上で、彩度をなしにするか最大にします。'],
          ['Page Up / Page Down', 'エリア上で、大きく明るくするか暗くします。'],
        ],
        notes: [
          'エリアのつまみは「Color」という名前の <code>slider</code> で、「Lightness 62%, chroma 75%」のように両方の値を読み上げます。色相と不透明度は、ネイティブの range 入力です。',
          'スウォッチはラベルを名前に持つボタンで、色と一致するときは押された状態になります。',
          'AA と AAA は、色だけでなく「passes」や「fails」という言葉でも結果を伝えます。強制カラーモードでも、色そのものは保たれます。',
        ],
      },
      carousel: {
        name: 'カルーセル',
        title: 'Angular 用カルーセル・スライダーコンポーネント',
        summary: 'スクロールしてスナップする1列のスライド。ボタン、ドット、自動再生に対応します。',
        description:
          'アクセシブルな Angular のカルーセル。ネイティブのスクロールスナップとスワイプ、複数枚表示、ドット、ループ、WCAG に沿って一時停止・停止する自動再生に対応します。',
        apiDescription:
          'Needless UI のカルーセルの API リファレンス。nui-carousel の表示枚数、インデックス、ループ、自動再生、メソッド、nuiCarouselSlide ディレクティブを解説します。',
        a11yDescription:
          'Needless UI のカルーセルのキーボード操作とアクセシビリティ。WAI-ARIA のカルーセルパターン、自動再生ボタン、名前付きのスライド、移動の読み上げを解説します。',
        overview: [
          'カルーセルは、スライドを1列に並べて表示します。この列はスクロールしてスライドごとにスナップし、スワイプ、トラックパッド、矢印キーでネイティブに動くほか、前へ・次へのボタンやドットでも移動できます。各スライドには <code>nuiCarouselSlide</code> を付け、そのタイトルで名前を付けます。',
          '<code>perView</code> で、一度に表示するスライドを1枚にするか複数枚にするかを決めます。<code>perView="auto"</code> なら、各スライドは自身の幅を保ちます。<code>[(index)]</code> は表示中の最初のスライドをバインドし、<code>loop</code> を指定すると最後から最初に戻ります。',
          '<code>autoplay</code> を指定すると自動再生ボタンが付き、スライドが自動で切り替わります。自動再生はポインターを重ねている間は一時停止し、キーボードフォーカスが入ると、WAI-ARIA のパターンに従って完全に停止します。',
        ],
        examples: {
          featured: {
            title: 'おすすめの旅行',
            text: '6秒ごとに次のスライドに切り替わり、自動再生ボタンのリングがそれまでの時間に合わせて満ちていきます。ポインターを重ねると自動再生が一時停止し、Tab キーでフォーカスを移すと停止します。',
          },
          shelf: {
            title: 'カードを並べた棚',
            text: '<code>perView="auto"</code> は各カードの幅を保ち、収まるだけのカードを表示します。ドットはスワイプに追従し、<code>[(index)]</code> で現在の位置がわかります。',
          },
        },
        api: {
          NuiCarousel: {
            summary: 'スライドを並べたカルーセル。',
            members: {
              label: 'カルーセルの名前。',
              index: '表示中の最初のスライド。0 から数えます。',
              perView:
                '一度に表示するスライドの数。スライドが自身の幅を決める場合は <code>auto</code>。',
              gap: 'スライド間の間隔。任意の CSS の長さで指定します。',
              loop: '最後のスライドの次は最初に、最初のスライドの前は最後に戻ります。',
              autoplay:
                '自動再生でスライドが切り替わる間隔（ミリ秒）。0 のときは自動再生しません。',
              'controls, indicators': '前へ・次へのボタンと、ドット。',
              labels: 'カルーセルが表示または読み上げるすべてのテキスト。翻訳に使います。',
              'next, previous': 'スライドを1枚進めるか、1枚戻します。',
              goTo: '指定したスライドを表示します。',
            },
          },
          NuiCarouselSlide: {
            summary: '1枚のスライド。',
            members: { nuiCarouselSlide: 'スライドのタイトル。位置の代わりに読み上げられます。' },
          },
        },
        keyboard: [
          ['Tab', '自動再生ボタン、前へ・次へのボタン、スライド、ドットの順に移動します。'],
          ['スライド上で左右矢印キー', '前または次のスライドまでスクロールします。'],
          ['Enter または Space', 'フォーカスされているボタンまたはドットを押します。'],
        ],
        notes: [
          'カルーセルは <code>aria-roledescription="carousel"</code> を持つ <code>region</code> で、各スライドは <code>aria-roledescription="slide"</code> を持つ <code>group</code> です。スライドには「Lake Como, 2 of 4」のような名前が付きます。',
          '自動再生ボタンは最初に置かれ、押すと何をするかを名前で伝えます。自動再生はポインターを重ねると一時停止し、キーボードフォーカスが入ると停止するため、読んでいる内容が勝手に動くことはありません。',
          'スワイプ、ボタン、ドットで移動したあとは、どこに着いたかが読み上げられます。自動再生による切り替えは読み上げられません。',
        ],
      },
      editor: {
        name: 'リッチテキストエディター',
        title: 'Angular 用リッチテキストエディターコンポーネント',
        summary:
          '見出し、リスト、リンク、書式を扱えます。ツールバーのほか、入力中の Markdown 記法でも書式を付けられます。',
        description:
          'アクセシブルな Angular リッチテキストエディター。ツールバー、ショートカット、Markdown 入力、クリーンな貼り付け、リンク、取り消しに対応。値は HTML か Markdown です。',
        apiDescription:
          'Needless UI のリッチテキストエディターの API リファレンス。nui-editor の値と形式、ツールバーのボタン、表示テキスト、コマンド、HTML・Markdown 変換関数を解説します。',
        a11yDescription:
          'Needless UI のリッチテキストエディターのキーボード操作とアクセシビリティ。複数行テキストボックス、WAI-ARIA ツールバー、ショートカット、リンクダイアログを解説します。',
        overview: [
          'エディターでは、段落、見出し、引用、リスト、コードブロック、区切り線を書くことができ、太字、斜体、下線、取り消し線、コード、リンクを使えます。値は HTML ですが、<code>format="markdown"</code> を指定すると Markdown になります。フォームでも使えます。',
          'エディターは独自のドキュメントを保持し、すべての編集を自ら処理します。そのため、貼り付けたりドロップしたりした内容も、このドキュメントとしてしかページに入りません。構造と書式は Google Docs や Word からでも保たれ、スクリプト、スタイル、安全でないリンクは取り除かれます。',
          'Markdown を入力すると書式に変わります。<code># </code> で見出し、<code>- </code> でリストが始まり、<code>**bold**</code> や <code>`code`</code> は閉じた時点で書式が付きます。どの書式にも、ショートカットとツールバーのボタンがあります。',
        ],
        examples: {
          comment: {
            title: 'コメント',
            text: '<code>tools</code> でツールバーのボタンを選びます。Markdown を入力したり、どこからでも貼り付けたりして、エディターが保持する HTML を確認してみてください。',
          },
          markdown: {
            title: 'Markdown の読み込みと書き出し',
            text: '<code>format="markdown"</code> では、値は Markdown です。入れ子のリスト、引用、コードも読み込まれ、編集に合わせて書き戻されます。',
          },
          lists: {
            title: '入れ子のリスト',
            text: '「インデントを増やす」と「インデントを減らす」は、Tab と Shift + Tab のように、リスト項目の階層を変えます。デフォルトのツールバーでは、この2つのボタンは Tab キーのないタッチスクリーンでのみ表示されます。どの環境でも表示するには、<code>tools</code> に加えてください。',
          },
        },
        api: {
          NuiEditor: {
            summary: 'リッチテキストエディター。',
            members: {
              value: '内容。HTML または Markdown で、テキストがないときは空です。',
              format: '値の書き方。',
              tools: 'ツールバーのボタン。順番に並べ、グループの間には <code>|</code> を入れます。',
              'label, labelledBy, describedBy': '内容に名前と説明を付けます。',
              placeholder: '空のときに表示するテキスト。',
              'readonly, disabled, invalid':
                'それぞれ、編集させずに内容を表示する、操作できなくする、無効としてマークする設定です。',
              labels: 'エディターが表示または読み上げるすべてのテキスト。翻訳に使います。',
              run: 'ツールバーのコマンドを実行します。',
              'undo, redo, focus':
                'それぞれ、取り消し、やり直し、テキストへのフォーカス移動を行います。',
            },
          },
          Helpers: {
            summary: 'ドキュメントを変換する関数。',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown':
                'ドキュメントを HTML または Markdown として書き出します。',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'HTML または Markdown をドキュメントとして読み込みます。エディターが表示できるものだけを残します。',
            },
          },
        },
        keyboard: [
          [
            'Ctrl + B、I または U',
            '太字、斜体、下線。Apple のデバイスでは Ctrl の代わりに ⌘ を使います。',
          ],
          ['Ctrl + K', 'リンクを追加または編集します。'],
          ['Ctrl + Alt + 1、2 または 3', '見出しにします。Ctrl + Alt + 0 で段落に戻します。'],
          ['Ctrl + Shift + 7 または 8', '番号付きリストまたは箇条書きリストにします。'],
          [
            'リスト内で Tab / Shift + Tab',
            'インデントを増やすか減らします。最上位の項目は、Shift + Tab で段落になります。リスト以外では、Tab キーでエディターから出ます。',
          ],
          ['Ctrl + Z / Ctrl + Shift + Z', '取り消すか、やり直します。'],
          ['ツールバー内で左右矢印キー', 'ボタン間を移動します。'],
        ],
        notes: [
          '内容は <code>aria-multiline</code> を持つ <code>textbox</code> で、<code>label</code> で名前が付き、プレースホルダーは <code>aria-placeholder</code> に入ります。',
          'ツールバーは WAI-ARIA のツールバーで、タブストップは1つだけです。書式は <code>aria-pressed</code> を持つトグルボタンで、各ボタンは <code>aria-keyshortcuts</code> とツールチップでショートカットを示します。',
          'ツールバーのコマンドを実行するとフォーカスはテキストに戻り、リンクのダイアログも Esc キーでテキストに戻ります。Tab キーで閉じ込められることはなく、リスト以外ではエディターから出ます。',
          'Tab キーのないタッチスクリーンでは、デフォルトのツールバーに「インデントを増やす」と「インデントを減らす」のボタンがあり、リスト内で有効になります。ツールバーのボタンをタップしてもフォーカスはテキストに残るので、タッチキーボードは開いたままです。',
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
      'browser-support': {
        title: 'ブラウザーサポート',
        description:
          'Needless UI が対応し、テストしているブラウザー。Chrome、Edge、Firefox、Safari のバージョン、スマートフォンとタッチ操作、古いブラウザーで省かれる機能を解説します。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI は、ネイティブ要素と、Popover API などの新しい Web プラットフォーム機能の上に構築されています。下の表のブラウザーを、記載したバージョン以降でサポートします。それより古いバージョンでは、メニュー、セレクト、ポップオーバーが開きません。',
          },
          { kind: 'h2', id: 'supported', text: '対応ブラウザー' },
          {
            kind: 'table',
            caption: '対応する最も古いバージョン',
            head: ['ブラウザー', '最低バージョン', '必要な機能'],
            rows: [
              [
                'パソコンと Android の Chrome、Edge',
                '120',
                'CSS マスクで描画するアイコンと、右から左に書くテキスト用の <code>:dir()</code>',
              ],
              ['パソコンと Android の Firefox', '125', 'Popover API'],
              ['Mac の Safari', '17', 'Popover API'],
              ['iPhone と iPad のすべてのブラウザー', 'iOS 17', 'Popover API'],
              ['Samsung Internet ブラウザー', '25', 'Chrome と同じ'],
            ],
          },
          {
            kind: 'p',
            html: 'Opera や Brave など、Chromium をベースにしたほかのブラウザーは、Chrome のバージョンに準じます。Angular 22 自体も、Chrome、Edge、Firefox はバージョン 119 以降、Safari は 17 以降を必要とします。Internet Explorer と、Chromium ベースになる前の旧 Edge はサポートしていません。',
          },
          { kind: 'h2', id: 'tested', text: 'テスト対象のブラウザー' },
          {
            kind: 'p',
            html: '変更のたびに、各コンポーネントのテストを Chrome、Firefox、Safari のエンジンで実行します。リリース前には、このドキュメントの全ページを、すべてのエンジンで、パソコンとタッチ操作のスマートフォンの両方で確認します。各ページは、問題なく起動し、すべてのメニューとポップアップが開き、画面に収まり、アクセシビリティチェックに合格しなければなりません。',
          },
          {
            kind: 'table',
            caption: 'テストに使うブラウザー',
            head: ['エンジン', 'バージョン', 'テスト環境'],
            rows: [
              [
                'Chromium（Chrome、Edge）',
                '153',
                'パソコンと、タッチ操作の Android スマートフォン',
              ],
              ['Firefox', '155', 'パソコンと、スマートフォンサイズのタッチスクリーン'],
              ['WebKit（Safari）', '26.6', 'パソコンと、タッチ操作の iPhone'],
              ['iPhone の Safari', 'iOS 17.5 と 18.6', 'iPhone シミュレーター'],
            ],
          },
          {
            kind: 'p',
            html: '対応する最も古いバージョンからテスト対象のバージョンまでの間にあるバージョンは、1つずつテストしているわけではありません。コンポーネントに必要な機能をすべて備えているので、サポート対象としています。',
          },
          { kind: 'h2', id: 'newer', text: '新しいブラウザーでの追加機能' },
          {
            kind: 'p',
            html: 'いくつかの細かな部分は、新しいブラウザーにしかない機能を使っています。ほかのブラウザーではその部分が省かれるだけで、何も壊れません。',
          },
          {
            kind: 'table',
            caption: '新しいブラウザーが必要な項目',
            head: ['項目', 'ブラウザー', 'ほかのブラウザーでは'],
            rows: [
              [
                'ポップオーバー、メニュー、ダイアログの開閉アニメーション',
                'Chrome と Edge、Firefox 129、Safari 17.5',
                'アニメーションなしですぐに開閉する',
              ],
              ['スクワークルの角（<code>corner-shape</code>）', 'Chrome と Edge 139', '丸い角'],
              ['画面上のどこからでも色を拾う', 'パソコンの Chrome と Edge', 'スポイトボタンなし'],
              ['ドロップゾーンでフォルダーごと選ぶ', 'パソコンのブラウザー', 'ファイルのみ'],
              [
                'カルーセルの自動再生ボタンのリングがなめらかに満ちる',
                'Chrome と Edge、Firefox 128、Safari',
                '一気に満ちる',
              ],
              [
                'Android の「戻る」ジェスチャーでメニュー、コンボボックスのリスト、ホバーカードが閉じ、ガイドツアーが終わる',
                'Chrome と Edge 126、Firefox 149',
                '「戻る」ジェスチャーで前のページへ移動する',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: 'スマートフォンとタッチスクリーン' },
          {
            kind: 'p',
            html: 'すべてのコンポーネントがタッチ操作に対応しています。スプリッターのハンドル、カラーピッカーのエリア、データグリッドの列の境界、トーストは、ページをスクロールさせずに指の動きに追従します。カルーセルはブラウザー本来のスクロールでスワイプでき、スケジューラーの予定は長押しでつかんで動かせます。タッチスクリーンでは入力欄の文字を 16px 以上にしているので、iPhone で入力欄が拡大されません。また、Android のキーボードのように単語を未確定のまま組み立てるキーボードでも、単語が欠けずに入力されます。',
          },
          {
            kind: 'p',
            html: 'タッチスクリーンではホバーできないため、ホバーカードはページ上の内容を補足するだけのものです。欠かせない情報はホバーカードに入れないでください。スマートフォンでは、チャットの Return キーで改行し、送信はボタンで行います。',
          },
          { kind: 'h2', id: 'keyboard', text: 'Safari でのキーボード操作' },
          {
            kind: 'p',
            html: 'Safari の Tab キーは、デフォルトではテキストフィールドとポップアップメニューの間しか移動しません。すべてのボタンとリンクに移動するには、Safari の「詳細」設定で「Tabキーを押したときにWebページ上の各項目を強調表示」をオンにするか、Option + Tab キーを押します。また、Safari はクリックされたボタンにフォーカスを移しません。コンポーネントがこれを補うため、クリックしたあとも、ほかのブラウザーと同じようにキーボードで操作を続けられます。',
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
