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
      kinds: { input: '入力', model: '双方向', output: '出力', method: 'メソッド' },
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
      api: (name) => `${name} の API`,
      accessibility: (name) => `${name} のアクセシビリティ`,
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
