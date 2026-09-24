import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      '无障碍、可定制主题的 Angular 组件，基于原生元素、W3C Design Token 和一份不依赖框架的样式表构建。开源，采用 MIT 许可证。',
    skipToContent: '跳到主要内容',
    nav: {
      label: '主要',
      home: 'Needless UI 首页',
      components: '组件',
      guides: '指南',
      github: 'GitHub',
      language: '语言',
      theme: '主题',
      themes: { system: '跟随系统', light: '浅色', dark: '深色' },
    },
    footer: {
      license: '基于 MIT 许可证发布。',
      source: '源代码',
      built: '过度设计，用心打造。',
      legal: '法律声明',
      privacy: '隐私政策',
    },
    emergency: {
      label: '请勿按下',
      cover: '掀开安全罩',
      button: '请勿按下',
      armed: '安全罩已掀开。请三思。',
      falling: '紧急协议已启动……',
      fallen: '重力现在是永久的。刷新页面来重建宇宙。',
      reduced: '你的系统要求减少动态效果，所以重力保持关闭。真走运。',
    },
  },

  home: {
    title: 'Needless UI · 无障碍 Angular 组件，精心打磨到近乎多余',
    description:
      'Needless UI 是一个开源 Angular 组件库：基于原生元素和一份不依赖框架的样式表，采用 W3C Design Token，内置 WCAG 2.2 AA 无障碍支持。',
    eyebrow: '开源 · Angular 22 · MIT',
    heading: 'UI 组件，精心打磨到近乎多余。',
    lead: 'Needless UI 用一份不依赖框架的样式表和 W3C Design Token 为<strong>原生元素</strong>添加样式。它的 Angular 指令通过 Angular Aria 提供交互行为，因此每个组件从首次渲染起就具备无障碍支持。',
    getStarted: '快速开始',
    browse: '浏览组件',
    featuresTitle: '为何而生',
    features: [
      {
        title: '原生元素优先',
        text: '<code>&lt;button nuiButton&gt;</code> 就是一个真正的按钮。它外面没有包裹任何东西，所以表单、键盘和屏幕阅读器都能正常工作。',
      },
      {
        title: '一份样式表，适用任何框架',
        text: '组件就是放在级联层中的纯 CSS：现在支持 Angular，下一步是 React，纯 HTML 则始终可用。',
      },
      {
        title: '你的 CSS 永远优先',
        text: '所有样式都位于 <code>@layer nui</code> 中，因此你自己的样式无需 <code>!important</code>，也不用比拼优先级，就能直接覆盖它们。',
      },
      {
        title: '天生无障碍',
        text: '生成调色板时，每一组颜色搭配都会按照 WCAG 2.2 AA 进行校验。焦点、强制颜色模式和减弱动态效果也都已为你处理好。',
      },
      {
        title: '可定制到近乎多余',
        text: '弹簧、按压效果、入场动画、边角形状、圆角半径和密度：整个应用只需<a href="/guides/customization">一个属性</a>，单个组件也只需一个输入属性，全部基于标准的 W3C Design Token。',
      },
      {
        title: '现代 Angular',
        text: 'Signal 输入属性、Zoneless、服务端渲染，且每个组件都有独立的入口点，应用只会打包实际导入的部分。',
      },
    ],
    codeTitle: '两处导入，大功告成',
    codeText: '安装软件包，导入一次样式表，就可以在任意独立组件中使用这些组件了。',
  },

  components: {
    title: '组件',
    description:
      '浏览 Needless UI 的 Angular 组件：无障碍的按钮、对话框和菜单，附带可交互示例、API 参考和键盘支持说明。',
    intro: '每个组件都基于原生元素构建，并配有可交互示例、API 文档和键盘交互说明。',
    tabsLabel: '文档章节',
    tabs: { overview: '概览', api: 'API', accessibility: '无障碍' },
    sidenavLabel: '组件',
    onThisPage: '本页内容',
    example: {
      showCode: '显示代码',
      hideCode: '隐藏代码',
      copy: '复制',
      copied: '已复制',
      files: '源文件',
    },
    api: {
      import: '导入',
      selector: '选择器',
      exportAs: '导出为',
      members: '属性',
      name: '名称',
      type: '类型',
      default: '默认值',
      description: '说明',
      kinds: { input: '输入', model: '双向绑定', output: '输出', method: '方法' },
      customization: {
        note: '用于自定义的输入属性如果未设置，会沿用最近的 <code>data-nui-*</code> 属性。详见<a href="/guides/customization">自定义指南</a>。',
        members: {
          motion:
            '运动时使用的弹簧：<code>snappy</code>、<code>bouncy</code>、<code>jelly</code>、<code>elastic</code>、<code>lazy</code>、<code>mechanical</code> 或 <code>none</code>。',
          spring:
            '任意弹簧，以 <code>{ stiffness, damping, mass }</code> 的形式指定，在运行时编译为 CSS。它会覆盖 <code>motion</code>。',
          press:
            '按住时的效果：<code>sink</code>、<code>squish</code>、<code>pop</code>、<code>wobble</code>、<code>rubber</code>、<code>tilt</code> 或 <code>none</code>。',
          enter:
            '入场方式：<code>zoom</code>、<code>fade</code>、<code>drop</code>、<code>rise</code>、<code>unfold</code>、<code>flip</code>、<code>swing</code>、<code>slide</code> 或 <code>none</code>。',
          corners:
            '边角的形状：<code>round</code>、<code>squircle</code>、<code>bevel</code>、<code>scoop</code>、<code>notch</code> 或 <code>square</code>。',
          radius:
            '边角的大小：<code>none</code>、<code>small</code>、<code>medium</code>、<code>large</code> 或 <code>full</code>。',
          density: '占用的空间：<code>compact</code>、<code>regular</code> 或 <code>roomy</code>。',
        },
      },
    },
    a11y: {
      keyboard: '键盘交互',
      key: '按键',
      action: '操作',
      notes: '无障碍说明',
    },
    titles: {
      api: (name) => `${name} API`,
      accessibility: (name) => `${name} 无障碍支持`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Angular 按钮组件',
        summary: '用于操作和链接，样式直接应用在原生按钮与链接元素上。',
        description:
          '适用于原生按钮和链接元素的无障碍 Angular 按钮指令，提供四种变体、三种色调和三种尺寸，并支持链接。',
        apiDescription:
          'Needless UI 按钮的 API 参考：nuiButton 指令、它的选择器，以及 variant、tone、size 和 disabled 输入属性。',
        a11yDescription:
          'Needless UI 按钮的键盘行为与无障碍支持：原生语义、焦点环、对比度、目标尺寸和禁用的链接。',
        overview: [
          '<code>nuiButton</code> 指令为原生的 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 添加样式。元素原有的语义、键盘行为以及在表单中的作用都保持不变；指令只负责把输入属性同步到样式表所匹配的 data 属性上。',
          '执行操作时用 <code>&lt;button&gt;</code>，页面导航时用 <code>&lt;a&gt;</code>。两者外观相同，也都支持 <code>disabled</code>。',
        ],
        examples: {
          variants: {
            title: '变体',
            text: '四种填充样式，从最醒目到最低调。每个视图只用一个实心按钮来承载主要操作。',
          },
          tones: {
            title: '色调',
            text: '色调决定配色：accent 用于主要流程，neutral 用于次要操作，danger 用于破坏性操作。',
          },
          sizes: {
            title: '尺寸',
            text: '三种高度：28、36 和 44 像素。即使是最小的尺寸，也满足 WCAG 2.2 的最小目标尺寸要求。',
          },
          links: {
            title: '链接与禁用按钮',
            text: '原生链接无法禁用，因此禁用的链接会获得 <code>aria-disabled="true"</code>，其点击也会被拦截，即使使用了 <code>routerLink</code> 也是如此。',
          },
          presses: {
            title: '按压效果',
            text: '依次按住每个按钮试试。<code>press</code> 决定按钮被按住时的效果，<code>motion</code> 决定它回弹时使用的弹簧。在任意元素上设置 <code>data-nui-press</code>，即可作用于其中的所有内容。',
          },
          shapes: {
            title: '边角、圆角与密度',
            text: '<code>corners</code> 改变边角的形状，<code>radius</code> 改变边角的大小，<code>density</code> 改变按钮占用的空间，但按钮绝不会小于 24px 的目标尺寸。不支持 <code>corner-shape</code> 的浏览器会把边角绘制成圆角。',
          },
        },
        api: {
          NuiButton: {
            summary:
              '为原生的 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 应用按钮样式。',
            members: {
              variant:
                '填充样式：<code>solid</code>、<code>soft</code>、<code>outline</code> 或 <code>ghost</code>。',
              tone: '配色：<code>accent</code>、<code>neutral</code> 或 <code>danger</code>。',
              size: '高度、内边距和字号：<code>sm</code>、<code>md</code> 或 <code>lg</code>。',
              disabled: '禁用按钮。用于链接时会设置 <code>aria-disabled</code>，并阻止链接被激活。',
            },
          },
        },
        keyboard: [
          ['Tab', '将焦点移到按钮或链接上。'],
          ['Enter', '激活按钮，或打开链接。'],
          ['空格键', '激活按钮。在链接上则会滚动页面（原生行为）。'],
        ],
        notes: [
          '可访问名称取自元素的文本。仅含图标的按钮需要设置 <code>aria-label</code>。',
          '在所有变体、色调和主题下，文本对比度都达到 4.5:1，这由调色板生成器强制保证。',
          '焦点环是一条 2px 的轮廓线，在两种主题下与页面的对比度都至少为 3:1。',
          '禁用的 <code>&lt;button&gt;</code> 会退出 Tab 键顺序。禁用的链接仍可获得焦点，以便屏幕阅读器用户找到它，并会被播报为已禁用。',
          '在强制颜色模式下，透明边框会变成使用系统颜色的可见轮廓。',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Angular 对话框组件',
        summary: '基于原生 dialog 元素的模态窗口，焦点由浏览器管理。',
        description:
          '基于原生 dialog 元素构建的无障碍 Angular 对话框：模态焦点管理、按 Esc 键关闭、返回值，以及点击遮罩关闭。',
        apiDescription:
          'Needless UI 对话框的 API 参考：支持 open 双向绑定的 nuiDialog、尺寸和返回值，以及标题、描述和关闭等组成部分。',
        a11yDescription:
          'Needless UI 对话框的键盘行为与无障碍支持：模态焦点、Esc 键、焦点恢复，以及通过标题和描述为内容提供标注。',
        overview: [
          '<code>nuiDialog</code> 指令把原生的 <code>&lt;dialog&gt;</code> 变成 Needless UI 对话框。模态行为由浏览器提供：背后的页面变为不可交互，焦点保持在对话框内，按 Esc 键即可关闭，关闭后焦点会回到打开它的元素。',
          '将 <code>[(open)]</code> 绑定到一个 signal，并用 <code>nuiDialogClose="…"</code> 为关闭按钮指定值，就能知道对话框是如何关闭的。',
        ],
        examples: {
          confirm: {
            title: '确认对话框',
            text: '用于确认破坏性操作。安全选项带有 <code>autofocus</code>，用户选择的值通过 <code>(closed)</code> 传出。',
          },
          form: {
            title: '对话框中的表单',
            text: '对话框可以容纳任意内容。本例中，对话框打开时第一个字段会获得焦点。',
          },
          dismissible: {
            title: '不可随意关闭',
            text: '设置 <code>[dismissible]="false"</code> 后，按 Esc 键和点击遮罩都会被忽略，用户必须选择其中一个选项。',
          },
          entrances: {
            title: '入场动画',
            text: '每个按钮打开的都是同一个对话框，只是 <code>enter</code> 预设各不相同，弹簧则都是 <code>bouncy</code>。无论以哪种方式入场，离场时都是快速淡出。',
          },
        },
        api: {
          NuiDialog: {
            summary: '将原生的 <code>&lt;dialog&gt;</code> 变成 Needless UI 对话框。',
            members: {
              open: '对话框是否打开。使用 <code>[(open)]</code> 进行绑定。',
              modal: '以模态方式打开，显示遮罩，并使背后的页面不可交互。',
              dismissible: '按 Esc 键或点击遮罩时是否关闭对话框。',
              size: '最大宽度：<code>sm</code>（24rem）、<code>md</code>（32rem）或 <code>lg</code>（44rem）。',
              closed: '每次对话框关闭时发出返回值；如果对话框未经选择就被关闭，该值为空。',
              close: '关闭对话框，可附带一个返回值。',
            },
          },
          NuiDialogTitle: {
            summary:
              '对话框的标题。它会获得一个 id，并被用作对话框的 <code>aria-labelledby</code>。',
            members: {},
          },
          NuiDialogDescription: {
            summary: '一段简短的描述，由对话框的 <code>aria-describedby</code> 引用。',
            members: {},
          },
          NuiDialogActions: {
            summary: '位于对话框底部的一行按钮，向末端对齐。',
            members: {},
          },
          NuiDialogClose: {
            summary: '点击时关闭所在的对话框。',
            members: {
              nuiDialogClose: '对话框关闭时携带的值，由 <code>(closed)</code> 发出。',
            },
          },
        },
        keyboard: [
          ['Tab', '将焦点移到对话框内的下一个元素。'],
          ['Shift + Tab', '将焦点移到对话框内的上一个元素。'],
          ['Esc', '关闭对话框，除非它被设为不可随意关闭。'],
        ],
        notes: [
          '通过 <code>showModal()</code> 打开时，对话框会获得 <code>role="dialog"</code> 和模态语义，页面其余部分则变为不可交互。',
          '标题和描述通过自动生成的 id 与对话框关联，因此屏幕阅读器会在对话框打开时将两者一并播报。',
          '初始焦点会落在带有 <code>autofocus</code> 的元素上；如果没有，则落在第一个可聚焦元素上。确认破坏性操作时，请把 <code>autofocus</code> 放在安全选项上。',
          '对话框关闭后，焦点会回到打开它的元素上。',
          '在没有其他用户交互的情况下反复按 Esc 键，浏览器仍可能关闭不可随意关闭的对话框，因此请始终提供明确的退出方式。',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Angular 菜单组件',
        summary: '弹出式操作列表，支持子菜单、可勾选的菜单项和完整的键盘操作。',
        description:
          '基于 Angular Aria 构建的无障碍 Angular 菜单：键盘导航、键入搜索、子菜单、复选和单选菜单项，以及随视口自动调整的定位。',
        apiDescription:
          'Needless UI 菜单的 API 参考：nuiMenuTrigger、nuiMenu 和 nuiMenuItem，涵盖值、色调、子菜单和选中状态。',
        a11yDescription:
          'Needless UI 菜单的键盘交互与无障碍支持：方向键、键入搜索、子菜单、Esc 键和焦点归还。',
        overview: [
          '激活触发器时，菜单会显示一组操作。交互行为来自 Angular Aria 的菜单模式；Needless UI 负责添加样式，将菜单以 popover 的形式渲染在页面上层，并确保它始终位于视口之内。',
          '把菜单的 <code>ngMenu</code> 引用传给 <code>[nuiMenuTrigger]</code>，为每个菜单项设置唯一的 <code>value</code>，然后在菜单项上监听 <code>(selected)</code>，或在菜单上监听 <code>(itemSelected)</code>。',
        ],
        examples: {
          actions: {
            title: '操作',
            text: '一个操作菜单，包含快捷键提示、分隔线和一个破坏性操作项。',
          },
          submenu: {
            title: '子菜单',
            text: '使用 <code>[submenu]</code> 将菜单项关联到一个嵌套的 <code>nuiMenu</code>。鼠标悬停或按向右箭头键时即可打开。',
          },
          checkable: {
            title: '复选与单选菜单项',
            text: '设置 <code>role</code> 并绑定 <code>[checked]</code>，菜单就会显示选中标记并播报状态。',
          },
          entrances: {
            title: '入场动画与弹簧',
            text: '每个菜单都把一个 <code>enter</code> 预设和一个 <code>motion</code> 弹簧搭配使用，并从它弹出的那一侧展开。子菜单会继承这两项设置。',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: '打开菜单。通常用在 <code>nuiButton</code> 上。',
            members: {
              nuiMenuTrigger:
                '要打开的菜单：某个 <code>nuiMenu</code> 的 <code>ngMenu</code> 引用。',
            },
          },
          NuiMenu: {
            summary:
              '由菜单项组成的菜单，以 popover 形式显示在触发器旁边。它导出的 <code>ngMenu</code> 就是触发器和子菜单所接收的 Angular Aria 菜单。',
            members: {
              wrap: '方向键是否从最后一项循环回第一项。',
              typeaheadDelay: '键入搜索重置前等待的毫秒数。',
              disabled: '禁用整个菜单。',
              itemSelected: '发出所选菜单项的值。在根菜单上，选择子菜单中的项时也会触发。',
            },
          },
          NuiMenuItem: {
            summary: '<code>nuiMenu</code> 中的一个菜单项。',
            members: {
              value: '菜单项的标识。在整个菜单（包括子菜单）中必须唯一。',
              disabled: '禁用该菜单项。它仍可通过方向键到达，但无法被选择。',
              submenu: '该菜单项打开的嵌套 <code>nuiMenu</code>。',
              role: '<code>menuitem</code>、<code>menuitemcheckbox</code> 或 <code>menuitemradio</code>。',
              checked: '复选或单选菜单项的选中状态。',
              tone: '破坏性操作请使用 <code>danger</code>。',
              searchTerm: '键入搜索时用于匹配的文本，默认为菜单项的标签。',
              selected: '通过鼠标或键盘选择该菜单项时，发出它的值。',
            },
          },
          NuiMenuSeparator: { summary: '菜单项分组之间的分隔线。', members: {} },
          NuiMenuShortcut: {
            summary: '快捷键提示，与菜单项的末端对齐。',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter 或空格键',
            '在触发器上：打开菜单并定位到第一项。在菜单项上：选择该项，或打开它的子菜单。',
          ],
          ['向下箭头键', '在触发器上：打开菜单并定位到第一项。在菜单中：移到下一项。'],
          ['向上箭头键', '在触发器上：打开菜单并定位到最后一项。在菜单中：移到上一项。'],
          ['Home / End', '移到第一项或最后一项。'],
          ['向右箭头键', '打开子菜单并移到其第一项（在从右到左的文本中为向左箭头键）。'],
          ['向左箭头键', '关闭子菜单并返回其父菜单项（在从右到左的文本中为向右箭头键）。'],
          ['Esc', '关闭菜单，并将焦点返回触发器。'],
          ['字母键', '移到下一个标签以所输入文本开头的菜单项。'],
        ],
        notes: [
          '触发器会获得 <code>aria-haspopup</code>、<code>aria-expanded</code> 和 <code>aria-controls</code>；菜单及其菜单项的 ARIA 角色由 Angular Aria 设置。',
          '高亮的菜单项使用实色填充，文本对比度至少为 4.5:1，同时兼作焦点指示器。在强制颜色模式下，它会显示系统高亮色的轮廓。',
          '可勾选的菜单项通过 <code>aria-checked</code> 播报其状态。',
          '选择菜单项后，菜单会关闭，焦点返回触发器。焦点移出触发器和菜单时，菜单也会关闭。',
          '菜单项高度至少为 28 像素，超过 WCAG 2.2 的最小目标尺寸。',
        ],
      },
    },
  },

  guides: {
    title: '指南',
    items: {
      'getting-started': {
        title: '快速开始',
        description:
          '在 Angular 22 应用中安装 Needless UI：添加软件包、导入样式表，几分钟内就能用上第一个无障碍组件。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI 适用于 Angular 22。组件都是独立指令，因此无需导入任何模块。',
          },
          { kind: 'h2', id: 'install', text: '安装' },
          {
            kind: 'p',
            html: '添加 Angular 包，以及提供键盘和无障碍行为的 Angular Aria 与 CDK。样式表会随包一起安装。',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: '导入样式' },
          {
            kind: 'p',
            html: '在 <code>src/styles.css</code> 中导入一次样式表即可，其中包含 Design Token 和所有组件。',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: '所有样式都位于 <code>@layer nui</code> 中。如果你的应用有 <code>a { color: inherit }</code> 这类全局重置样式，请把它们放进一个在 <code>nui</code> 之前声明的层中，以免覆盖组件样式。',
          },
          { kind: 'h2', id: 'use', text: '使用组件' },
          {
            kind: 'p',
            html: '从各自的入口点导入所需的指令，并把它们添加到组件的 <code>imports</code> 中。',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: '后续步骤' },
          {
            kind: 'p',
            html: '浏览<a href="/components">组件</a>查看可交互示例，或阅读<a href="/guides/theming">主题定制指南</a>，让界面契合你的品牌。',
          },
        ],
      },
      theming: {
        title: '主题定制',
        description:
          '用 CSS 自定义属性定制 Needless UI 的主题：浅色与深色模式、嵌套主题、覆盖 token，以及重新生成并经过对比度校验的品牌调色板。',
        blocks: [
          {
            kind: 'p',
            html: '每一项视觉决策都是一个由 W3C Design Token 生成的 CSS 自定义属性。组件只使用 <code>--nui-color-accent-solid</code> 这样的语义 token，因此修改一个 token，所有用到它的组件都会随之更新样式。',
          },
          { kind: 'h2', id: 'modes', text: '浅色与深色' },
          {
            kind: 'p',
            html: '默认由操作系统的偏好设置决定模式。你可以用 <code>data-nui-theme</code> 在任意元素上固定模式，并且可以自由嵌套。',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: '覆盖 token' },
          {
            kind: 'p',
            html: '这些 token 位于 <code>@layer nui</code> 中，因此应用里的普通 CSS 就能覆盖它们。在 <code>:root</code> 上设置会作用于整个应用，在某个元素上设置则只作用于该部分。',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: '品牌调色板' },
          {
            kind: 'p',
            html: '色阶是自动生成的。在 <code>packages/tokens/scripts/palette.ts</code> 中修改色相后重新生成：脚本会把每种颜色重新适配到 sRGB 色域，并重新检查每一组文本与背景颜色的对比度。',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: '自定义',
        description:
          '弹簧物理、按压效果、入场动画、边角形状、圆角半径和密度：调整 Needless UI 的动效与手感，可作用于整个应用，也可只作用于单个组件。',
        blocks: [
          {
            kind: 'p',
            html: '每个组件都有你可以改变的个性：驱动它运动的弹簧、按钮在你指尖下的反应、对话框和菜单的入场方式、边角的形状和大小，以及它们占用的空间。每一项都可以用一个属性作用于某个元素内的所有内容，也可以用一个输入属性只作用于单个组件。',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: '一个属性，作用于整棵子树' },
          {
            kind: 'p',
            html: '把 <code>data-nui-*</code> 属性加在 <code>&lt;body&gt;</code> 上会作用于整个应用，加在任意元素上则只作用于其中一部分。离得最近的属性优先生效，因此可以嵌套使用。它们只设置 CSS 自定义属性，所以无论使用哪种框架，甚至不用框架，效果都完全一样。',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: '单个组件' },
          {
            kind: 'p',
            html: '在 Angular 中，<code>nuiButton</code>、<code>nuiDialog</code> 和 <code>nuiMenu</code> 以输入属性的形式接受相同的值。未设置的输入属性会沿用外层元素上的属性。',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: '编译为 CSS 的弹簧' },
          {
            kind: 'p',
            html: '动效基于弹簧物理：用刚度、阻尼和质量取代时长和曲线。token 编译器会求解每个弹簧，并将其写入 CSS，表示为稳定所需的时长和一个 <code>linear()</code> 缓动函数，因此动画在合成器线程上运行，无需 JavaScript。内置六种弹簧 token，从 <code>--nui-spring-snappy</code> 到 <code>--nui-spring-mechanical</code>，<code>--nui-motion</code> 则保存当前使用的那一种。',
          },
          {
            kind: 'p',
            html: '想用其他弹簧，只需设置一个输入属性。Angular 会在运行时用同一个求解器编译它，而 <code>springTransition()</code> 能为你自己的元素生成对应的 CSS。',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: '预设之外的任意值' },
          {
            kind: 'p',
            html: '预设只是快捷方式。其他任何效果，都可以自己设置 CSS 自定义属性来实现：<code>--nui-press</code> 和 <code>--nui-enter</code> 可以使用任意 transform，<code>--nui-radius-scale</code> 和 <code>--nui-density</code> 可以使用任意数值。',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: '无障碍' },
          {
            kind: 'p',
            html: '当系统要求减少动态效果时，弹簧会瞬间完成，按压和入场效果也不再运动。无论密度如何设置，控件都不会小于 WCAG 2.2 规定的 24px 目标尺寸；而且没有任何预设会改动颜色，因此所有对比度检查依然成立。不支持 <code>corner-shape</code> 的浏览器会把所有边角都绘制成圆角。',
          },
        ],
      },
    },
    playground: {
      label: '自定义演练场',
      motion: '动效',
      custom: '自定义',
      stiffness: '刚度',
      damping: '阻尼',
      mass: '质量',
      press: '按压',
      enter: '入场',
      corners: '边角',
      radius: '圆角',
      density: '密度',
      surprise: '给我个惊喜',
      reset: '恢复默认',
      hint: '按住一个按钮，然后松开。打开对话框和菜单，看看它们如何入场。',
      save: '保存',
      cancel: '取消',
      delete: '删除',
      openDialog: '打开对话框',
      openMenu: '打开菜单',
      menu: ['重命名', '创建副本', '删除'],
      dialogTitle: '动得毫无必要',
      dialogText: '这个对话框完全按照你指定的方式入场了。',
      close: '关闭',
      curve: '弹簧位置随时间的变化。它从底部出发，最终静止在虚线上。',
      settles: (ms, overshoot) => `${ms} 毫秒内稳定 · 过冲 ${overshoot}%`,
      instant: '无动效：一切都直接跳到终点。',
      stuck:
        '这个弹簧在 10 秒内无法稳定。请增加阻尼或刚度；在此期间，组件会继续使用上一个能够稳定的弹簧。',
      reducedMotion:
        '你的系统要求减少动态效果，所以这里的一切都不会动。系统不再有此要求时，弹簧、按压和入场效果就会恢复。',
      noCornerShape: '此浏览器还无法绘制边角形状，因此所有边角都保持圆角。',
      everywhere: '设置在任意元素上，作用于其中的所有内容：',
      oneComponent: '在 Angular 中，只作用于单个组件：',
    },
  },

  notFound: {
    title: '找不到页面',
    description: '此页面不存在。你可以浏览 Needless UI 的组件，或从首页重新开始。',
    text: '此页面不存在，或已被移动。',
    home: '返回首页',
    components: '浏览组件',
  },

  legal: {
    translationNote: '本译文仅为方便阅读而提供，如与英文原文有任何出入，以英文原文为准。',
    labels: { name: '名称', address: '地址', email: '电子邮件', uid: 'UID', vat: '增值税号' },
    notice: {
      title: '法律声明',
      description:
        'needlessui.com 的运营者信息：运营者的名称、邮寄地址和电子邮件，以及商业登记和增值税信息。',
      operator: '运营者',
      legalForm: '个人独资企业',
      country: '瑞士',
      register: '商业登记',
      registerEntry: '已在楚格州商业登记簿中登记。',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: '免责声明' },
        {
          kind: 'p',
          html: '本网站的内容经过认真编写，但不保证其准确、完整或及时。本网站链接的外部网站不在我们的控制范围内，其内容由各自的运营者负责。',
        },
        { kind: 'h2', id: 'license', text: '许可证' },
        {
          kind: 'p',
          html: 'Needless UI（包括本网站）以 <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT 许可证</a>开源。',
        },
      ],
    },
    privacy: {
      title: '隐私政策',
      description:
        'needlessui.com 如何处理个人数据：不使用 Cookie，不做统计分析，也不跟踪。说明访问时托管服务商会处理哪些数据，以及你的权利。',
      updated: '最后更新：2026年9月24日',
      blocks: [
        {
          kind: 'p',
          html: '本政策说明你访问 www.needlessui.com 时会处理哪些个人数据，以及你享有哪些权利。简而言之：本网站不使用 Cookie、统计分析或跟踪技术，也从不要求你提供个人数据。',
        },
        { kind: 'h2', id: 'controller', text: '责任方' },
        {
          kind: 'p',
          html: '即<a href="/legal">法律声明</a>中列明的运营者 Angelo Lamonaca。联系方式：{email}。',
        },
        { kind: 'h2', id: 'hosting', text: '托管' },
        {
          kind: 'p',
          html: '本网站由 Vercel Inc.（440 N Barranca Avenue #4133, Covina, CA 91723, USA）托管。当你打开页面时，浏览器会发送每个网站都会收到的技术数据：你的 IP 地址、访问日期和时间、所请求的页面、来源页面，以及浏览器的用户代理（user agent）。Vercel 代表我们处理这些数据，以提供网站服务并保障其安全，并且只在此目的所需的期限内保存。这些处理可能在美国进行；Vercel 已通过欧盟-美国数据隐私框架（EU-U.S. Data Privacy Framework）及其英国扩展（UK Extension）和瑞士-美国数据隐私框架（Swiss-U.S. Data Privacy Framework）的认证。详见 <a href="https://vercel.com/legal/privacy-policy">Vercel 的隐私声明</a>。',
        },
        {
          kind: 'p',
          html: '在适用 GDPR 的情况下，处理的法律依据是我们在安全运营网站方面的正当利益（GDPR 第 6 条第 1 款 f 项）。',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie 与本地存储' },
        {
          kind: 'p',
          html: '本网站不设置任何 Cookie。如果你选择了浅色或深色主题，浏览器的本地存储会记住这一选择，供你下次访问时使用。该信息不会离开你的设备；如需删除，可切换回“跟随系统”，或清除本网站的数据。',
        },
        { kind: 'h2', id: 'tracking', text: '无跟踪' },
        {
          kind: 'p',
          html: '本网站没有统计分析、广告、社交媒体插件、嵌入的第三方内容或外部字体。指向 GitHub 和 npm 的链接会将你带到其他网站，这些网站有各自的隐私政策。',
        },
        { kind: 'h2', id: 'rights', text: '你的权利' },
        {
          kind: 'p',
          html: '你可以询问我们处理了哪些与你有关的个人数据，并要求更正或删除。在适用 GDPR 的情况下，你还可以反对处理、要求限制处理，以及以可携带的格式获取你的数据。请发送邮件至 {email}。你也可以向监管机构投诉：在瑞士为联邦数据保护和信息专员（FDPIC）；在欧盟则为你所在国家的监管机构。',
        },
        { kind: 'h2', id: 'changes', text: '政策变更' },
        {
          kind: 'p',
          html: '本政策会随网站的变化而更新，例如网站迁移到新的托管服务商时。下方日期表示当前版本的日期。',
        },
      ],
    },
  },
};
