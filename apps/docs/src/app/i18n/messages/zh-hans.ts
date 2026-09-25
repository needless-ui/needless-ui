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
    toaster: { label: '通知（Alt+T）', close: '关闭' },
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
      kinds: { input: '输入', model: '双向绑定', output: '输出', method: '方法', property: '属性' },
      texts: '它显示或播报的所有文本也都是输入属性，因此可以翻译：',
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
      // A space after a Latin name (Button 无障碍支持), none after a Chinese one (头像无障碍支持).
      accessibility: (name) => `${name}${/[぀-ヿ㐀-鿿豈-﫿]$/u.test(name) ? '' : ' '}无障碍支持`,
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

      avatar: {
        name: '头像',
        title: 'Angular 头像组件',
        summary: '人物的照片，或是以此人专属颜色为底的姓名首字母。',
        description:
          'Angular 头像组件：没有照片时显示姓名首字母，每个名字都有固定的颜色，还支持状态点和头像组，在任何主题下都清晰易读。',
        apiDescription:
          'Needless UI 头像的 API 参考：nuiAvatar 的名字、照片、尺寸、形状和状态，以及 nuiAvatarGroup。',
        a11yDescription:
          'Needless UI 头像的无障碍支持：图像角色与名称、装饰性头像，以及始终保持 4.5:1 对比度的姓名首字母。',
        overview: [
          '<code>nuiAvatar</code> 组件显示一张照片；没有照片或照片加载失败时，则显示此人的姓名首字母。首字母的底色根据名字计算得出，因此同一个人在任何地方都是同一种颜色。',
          '每种色相的亮度和色度都设有上限，确保白色首字母的对比度始终高于 4.5:1，无论名字和主题是什么。',
        ],
        examples: {
          people: {
            title: '首字母、照片和状态',
            text: '没有 <code>src</code> 时，首字母和颜色都取自 <code>name</code>。<code>status</code> 会添加一个在线状态点。',
          },
          group: {
            title: '头像组、尺寸和形状',
            text: '<code>nuiAvatarGroup</code> 让一排头像彼此重叠。<code>size</code> 可取 <code>sm</code>、<code>md</code> 或 <code>lg</code>，<code>shape="square"</code> 则适合团队和应用。',
          },
        },
        api: {
          NuiAvatar: {
            summary: '显示照片或姓名首字母，并以此人的名字作为可访问名称。',
            members: {
              name: '此人的名字。可访问名称、首字母和颜色都由它得出。',
              src: '照片的 URL。加载失败时改为显示首字母。',
              size: '尺寸：<code>sm</code>、<code>md</code> 或 <code>lg</code>。',
              shape: '<code>circle</code> 或 <code>square</code>。',
              status:
                '在线状态点：<code>online</code>、<code>away</code>、<code>busy</code> 或 <code>offline</code>。',
              label: '比名字包含更多信息的可访问名称，例如“Ada Lovelace，在线”。',
              decorative: '对辅助技术隐藏头像，适用于旁边已经显示名字的头像。',
            },
          },
          NuiAvatarGroup: {
            summary: '一排彼此重叠的头像。请用 <code>aria-label</code> 为它命名。',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          '头像是一张以此人名字命名的图像（<code>role="img"</code>）。如果旁边已经显示了名字，请设置 <code>decorative</code>，以免屏幕阅读器把名字读两遍。',
          '状态点只是视觉提示。如果状态很重要，请把它写进 <code>label</code>。',
          '在每一种生成的颜色上，首字母的对比度都至少为 4.5:1。',
        ],
      },

      breadcrumbs: {
        name: '面包屑',
        title: 'Angular 面包屑组件',
        summary: '通向当前页面的层级路径。',
        description:
          '基于原生 nav 和列表构建的无障碍 Angular 面包屑：CSS 分隔符在从右到左的文本中自动镜像，路径过长时可以横向滚动。',
        apiDescription:
          'Needless UI 面包屑的 API 参考：nuiBreadcrumbs 指令，以及为导航地标命名的标签。',
        a11yDescription:
          'Needless UI 面包屑的无障碍支持：导航地标、列表语义、当前页面标记和目标尺寸。',
        overview: [
          '面包屑显示页面在网站中所处的位置。<code>nuiBreadcrumbs</code> 指令为原生的 <code>&lt;nav&gt;</code> 及其中的列表添加样式；最后一项是当前页面，用 <code>aria-current="page"</code> 标记。',
          '路径比容器更长时会横向滚动，而不会换行。初始时滚动到末尾，哪一端还有未显示的内容，哪一端就会渐隐。',
        ],
        examples: {
          trail: {
            title: '面包屑路径',
            text: '先是各级上层页面的链接，最后是以纯文本显示、带有 <code>aria-current="page"</code> 的当前页面。',
          },
          long: {
            title: '长路径',
            text: '在狭窄的容器中，路径可以滚动，初始时当前页面就在可见区域内。',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: '为 <code>&lt;nav&gt;</code> 及其中的列表应用面包屑样式。',
            members: { label: '导航地标的可访问名称。' },
          },
        },
        keyboard: [['Tab', '移到路径中的下一个链接。']],
        notes: [
          '它是一个包含普通列表的导航地标，因此屏幕阅读器会播报路径中有多少个页面。',
          '分隔符由 CSS 绘制，因此不会被朗读，并且会在从右到左的文本中镜像显示。',
          '每个链接的高度都至少为 24px。',
        ],
      },

      empty: {
        name: '空状态',
        title: 'Angular 空状态组件',
        summary: '没有内容可显示时要显示的内容，并告诉用户接下来该做什么。',
        description:
          'Angular 空状态组件：由图片、标题、简短说明和操作按钮组成，另附四幅会轻轻漂浮的内置插图。',
        apiDescription:
          'Needless UI 空状态的 API 参考：nuiEmpty 及其媒体、标题、描述和操作等组成部分。',
        a11yDescription:
          'Needless UI 空状态的无障碍支持：装饰性图片、有意义的标题，以及减少动态效果。',
        overview: [
          '空状态用来替代还没有任何内容的列表、表格或页面。它会说明原因，并提供下一步操作。',
          '媒体部分可以放你自己的图片，也可以绘制一幅内置插图：<code>search</code>、<code>inbox</code>、<code>files</code> 或 <code>error</code>。',
        ],
        examples: {
          search: {
            title: '无搜索结果',
            text: '用标题说明发生了什么，用一行文字提供帮助，再用操作按钮给出解决办法。',
          },
          pictures: {
            title: '内置插图',
            text: '在 <code>nuiEmptyMedia</code> 上设置 <code>illustration</code>。插图会跟随主题变化，并会轻轻漂浮，除非用户要求减少动态效果。',
          },
        },
        api: {
          NuiEmpty: { summary: '容器：居中排列的单列布局。', members: {} },
          NuiEmptyMedia: {
            summary: '图片，对辅助技术隐藏。',
            members: {
              illustration:
                '内置插图：<code>search</code>、<code>inbox</code>、<code>files</code> 或 <code>error</code>。',
            },
          },
          NuiEmptyTitle: {
            summary: '标题。请使用适合页面的标题级别。',
            members: {},
          },
          NuiEmptyDescription: { summary: '一行说明文字。', members: {} },
          NuiEmptyActions: { summary: '一行按钮。', members: {} },
        },
        keyboard: [],
        notes: [
          '图片是装饰性的（<code>aria-hidden</code>）：信息由标题和描述传达。',
          '请用标题元素作为标题，并选用符合页面大纲的级别。',
          '当用户偏好减少动态效果时，内置插图会停止漂浮。',
        ],
      },

      'number-field': {
        name: '数字输入框',
        title: 'Angular 数字输入框组件',
        summary: '带步进按钮的数字输入框，可按任意语言环境格式化。',
        description:
          '无障碍的 Angular 数字输入框：带步进按钮的 spinbutton，支持键盘步进、最小值和最大值，以及按语言环境格式化货币、百分比和单位。',
        apiDescription:
          'Needless UI 数字输入框的 API 参考：nuiNumberField、支持 min、max、step 和 format 的 nuiNumberInput，以及 nuiNumberStep。',
        a11yDescription:
          'Needless UI 数字输入框的键盘交互与无障碍支持：spinbutton 角色、方向键和翻页键，以及步进按钮。',
        overview: [
          '数字输入框是一个存放数字的文本输入框。它按语言环境格式化显示数字，也按同样的格式解析输入的文本，并在失去焦点时把数值按 <code>step</code> 对齐，限制在 <code>min</code> 和 <code>max</code> 之间。',
          '它也能识别各地的原生数字和分隔符：阿拉伯-印度数字、波斯数字和天城文数字，用作分组分隔符的空格和点，以及各种负号。按住步进按钮会连续步进，而且越来越快。',
        ],
        examples: {
          guests: {
            title: '步进按钮',
            text: '两侧各有一个按钮，到达 <code>min</code> 或 <code>max</code> 时会被禁用。方向键也能步进。',
          },
          formats: {
            title: '货币与百分比',
            text: '把 <code>Intl.NumberFormat</code> 选项传给 <code>format</code>，并指定 <code>locale</code>。值始终是一个普通的数字。',
          },
        },
        api: {
          NuiNumberField: {
            summary: '把输入框和它的步进按钮组合在一起。',
            members: {},
          },
          NuiNumberInput: {
            summary: '存放数字的文本输入框，角色为 ARIA spinbutton。',
            members: {
              value: '数字；为空时为 <code>null</code>。也可以与表单配合使用。',
              min: '允许的最小值。',
              max: '允许的最大值。',
              step: '每一步改变的数值。失去焦点时，值会按步长对齐。',
              format:
                "<code>Intl.NumberFormat</code> 选项，例如 <code>{ style: 'currency', currency: 'EUR' }</code>。",
              locale: '格式化和解析数字时使用的语言环境。',
              disabled: '禁用输入框及其按钮。',
              stepBy: '按指定的步数增加（正数）或减少（负数）数值。',
            },
          },
          NuiNumberStep: {
            summary: '步进按钮。按住时会连续步进。',
            members: {
              nuiNumberStep: '<code>1</code> 表示增加，<code>-1</code> 表示减少。',
              label: '可访问名称。默认为“Increase”或“Decrease”。',
            },
          },
        },
        keyboard: [
          ['向上 / 向下箭头键', '将数值增加或减少一个步长。'],
          ['Page Up / Page Down', '一次增减十个步长。'],
          ['Home / End', '跳到最小值或最大值。'],
          ['Enter', '确认已输入的内容。'],
        ],
        notes: [
          '输入框是一个 <code>spinbutton</code>，带有 <code>aria-valuenow</code>、<code>aria-valuemin</code> 和 <code>aria-valuemax</code>，并以格式化后的值作为 <code>aria-valuetext</code>。',
          '步进按钮不在 Tab 键顺序中，因为按键可以完成同样的操作；但它们都有名称，并通过 <code>aria-controls</code> 与输入框关联。',
          '请用 <code>aria-label</code> 或 <code>&lt;label&gt;</code> 为输入框添加标签。',
        ],
      },

      otp: {
        name: '验证码输入框',
        title: 'Angular OTP 验证码输入框组件',
        summary: '分格显示的验证码，底层是一个真正的输入框。',
        description:
          '无障碍的 Angular 验证码输入框：格子下方是一个原生输入框，支持短信自动填充、WebOTP、粘贴清理、分组、掩码显示和出错抖动。',
        apiDescription:
          'Needless UI 验证码输入框的 API 参考：支持长度、字符类型、分组和掩码的 nuiOtp，以及支持 WebOTP 的 nuiOtpInput。',
        a11yDescription:
          'Needless UI 验证码输入框的键盘操作与无障碍支持：一个带标签的文本框、清晰可见的焦点环和自动填充。',
        overview: [
          '验证码输入框看起来是一排格子，但底层只是一个原生的 <code>&lt;input&gt;</code>。短信自动填充（<code>autocomplete="one-time-code"</code>）、粘贴、密码管理器、表单和屏幕阅读器看到的都是一个普通的文本框。',
          '粘贴的验证码会被自动清理，因此“123-456”和“123 456”都能使用，所设字符类型不允许的字符则会被拒绝。在 Android 上，<code>webOtp</code> 会在短信到达时自动填入验证码。',
        ],
        examples: {
          verify: {
            title: '验证',
            text: '填满最后一格时会触发 <code>(completed)</code>。要拒绝某个验证码，就在输入框上设置 <code>aria-invalid</code>：格子会变红并抖动。',
          },
          letters: {
            title: '字母、分组与掩码',
            text: '<code>pattern="alphanumeric"</code> 也接受字母，<code>[groups]</code> 会添加分隔符，<code>masked</code> 则显示为圆点。',
          },
        },
        api: {
          NuiOtp: {
            summary: '绘制格子并包裹输入框。',
            members: {
              length: '字符数。',
              pattern: '<code>digits</code>，或允许字母和数字的 <code>alphanumeric</code>。',
              groups: '各组的长度，组与组之间会显示分隔符，例如 <code>[3, 3]</code>。',
              masked: '用圆点代替字符显示。',
              completed: '每次填满最后一格时发出验证码。',
            },
          },
          NuiOtpInput: {
            summary: '真正的输入框。它会获得一次性验证码所需的属性。',
            members: {
              webOtp: '在支持的环境中，通过 WebOTP API 从收到的短信中填入验证码。',
            },
          },
        },
        keyboard: [
          ['数字键或字母键', '填入当前格并移到下一格。'],
          ['Backspace', '删除光标前的字符。'],
          ['向左 / 向右箭头键', '移动一格；已填的格子会被选中，因此输入会替换其中的字符。'],
          ['粘贴', '用复制的验证码填满格子。'],
        ],
        notes: [
          '屏幕阅读器看到的只是一个文本框。请用 <code>aria-label</code> 或 <code>&lt;label&gt;</code> 为它添加标签。',
          '格子对辅助技术隐藏；正在编辑的格子会显示焦点环。',
          '开启减少动态效果后，光标不再闪烁，格子也不会跳动或抖动。',
        ],
      },

      rating: {
        name: '评分',
        title: 'Angular 星级评分组件',
        summary: '用星星打分，底层是真正的单选按钮。',
        description:
          '基于原生单选按钮的无障碍 Angular 星级评分：支持键盘和表单、悬停预览、清除评分，以及只读模式下的小数显示。',
        apiDescription:
          'Needless UI 评分的 API 参考：nuiRating 的值、最大值、只读与可清除模式，以及可翻译的标签。',
        a11yDescription:
          'Needless UI 评分的键盘交互与无障碍支持：带名称的单选按钮组、带标签的星星，以及只读模式下的图像。',
        overview: [
          '评分组件是一组绘制成星星的原生单选按钮。方向键、表单和屏幕阅读器的表现与任何单选按钮组一样；CSS 负责填充星星，并在指针所在处预览新的评分。',
          '在只读模式下，它可以显示任意小数，例如 4.3 的平均分。',
        ],
        examples: {
          pick: {
            title: '进行评分',
            text: '绑定 <code>[(value)]</code> 或表单。设置 <code>clearable</code> 后，再次选择同一颗星会清除评分。',
          },
          average: {
            title: '显示平均分',
            text: '<code>readonly</code> 会按任意比例填充星星，并把这张图像命名为“Rated 4.3 out of 5”。',
          },
        },
        api: {
          NuiRating: {
            summary: '由星星组成的单选按钮组，或是只读的评分图像。',
            members: {
              value: '评分值，或 <code>null</code>。也可以与表单配合使用。',
              max: '星星的数量。',
              readonly: '只显示评分值（可精确到任意小数），而不让用户评分。',
              disabled: '禁用所有星星。',
              clearable: '再次选择当前的星星会清除评分。',
              name: '这些单选按钮共用的名称，默认自动生成。',
              starLabel: '每颗星的可访问名称，是一个以星级值为参数的函数。',
              readonlyLabel: '只读模式下的可访问名称。',
            },
          },
        },
        keyboard: [
          ['Tab', '进入按钮组，并定位到已选中的星星。'],
          ['方向键', '更改评分。'],
          ['空格键', '选中获得焦点的星星。'],
        ],
        notes: [
          '每颗星都是一个原生单选按钮，名称形如“3 stars”。请用 <code>aria-label</code> 为按钮组命名。',
          '在只读模式下，评分是一张名为“Rated 4.3 out of 5”的图像（<code>role="img"</code>）。',
          '星星由 CSS 遮罩绘制，因此会遵循强制颜色模式。',
        ],
      },

      skeleton: {
        name: '骨架屏',
        title: 'Angular 骨架屏组件',
        summary: '在内容加载期间占住布局的占位元素。',
        description:
          'Angular 骨架屏组件，提供文本、圆形和块状占位，同一道扫光掠过整个页面；开启减少动态效果时则不显示扫光。',
        apiDescription:
          'Needless UI 骨架屏的 API 参考：nuiSkeleton 指令及其文本、圆形和块状三种形状。',
        a11yDescription:
          'Needless UI 骨架屏的无障碍支持：隐藏的占位元素、aria-busy 区域、减少动态效果和强制颜色模式。',
        overview: [
          '骨架屏保留仍在加载的内容的形状，这样内容到达时页面不会跳动。请用 CSS 设置它们的尺寸。',
          '扫光固定在视口上：同一道高光会同时掠过页面上的所有骨架屏，无论它们的尺寸和位置如何。',
        ],
        examples: {
          card: {
            title: '加载卡片',
            text: '用几行文本、一个圆形和一个块状占位代替个人资料。加载期间，卡片处于 <code>aria-busy</code> 状态。',
          },
        },
        api: {
          NuiSkeleton: {
            summary: '占位元素，对辅助技术隐藏。',
            members: {
              shape: '<code>text</code>（一行文本）、<code>circle</code> 或 <code>block</code>。',
            },
          },
        },
        keyboard: [],
        notes: [
          '骨架屏对屏幕阅读器隐藏。请在正在加载的区域上设置 <code>aria-busy="true"</code>，并在内容到达后将其移除。',
          '当用户偏好减少动态效果时，不显示扫光。',
          '在强制颜色模式下，每个骨架屏都会显示轮廓线。',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Angular Toast 通知组件',
        summary: '可堆叠、可滑动关闭、从不抢夺焦点的简短消息。',
        description:
          '无障碍的 Angular Toast：在顶层（top layer）堆叠显示，支持 Promise Toast、撤销操作和滑动关闭，计时器在悬停或聚焦时暂停。',
        apiDescription:
          'Needless UI Toast 的 API 参考：NuiToaster 服务、它的选项和 Promise Toast，以及 nui-toaster 区域。',
        a11yDescription:
          'Needless UI Toast 的键盘交互与无障碍支持：播报方式、Alt+T 快捷键、Esc 键和可暂停的计时器。',
        overview: [
          'Toast 用来确认刚刚发生的事，或提供“撤销”之类的操作，而不会打断用户。在应用外壳中放置一个 <code>&lt;nui-toaster&gt;</code>，然后就可以在任何地方调用 <code>NuiToaster</code>。',
          '它们叠放在最新一条的后面，悬停或聚焦时展开，所有动画都使用 motion 弹簧。向侧边一滑，就能甩掉一条 Toast。当鼠标悬停在堆叠上、堆叠获得焦点，或页面处于后台时，计时器会暂停。',
        ],
        examples: {
          tones: {
            title: '色调',
            text: '<code>show()</code>、<code>success()</code>、<code>warning()</code> 和 <code>danger()</code>。danger 类 Toast 停留得更久，并会被立即播报。',
          },
          actions: {
            title: '操作与 Promise',
            text: '<code>action</code> 会添加一个按钮，例如“撤销”。<code>promise()</code> 先显示加载图标，然后变为结果。',
          },
        },
        api: {
          NuiToaster: {
            summary: '用来显示 Toast 的服务。可以在任何地方注入。',
            members: {
              toasts: '屏幕上的所有 Toast，最新的排在最前面。',
              show: '显示一条 Toast。传入标题，或传入包含描述、色调、持续时间、操作或 id 的选项。',
              success: '显示一条成功 Toast。',
              warning: '显示一条警告 Toast。',
              danger: '显示一条危险 Toast。它会停留 8 秒，并会被立即播报。',
              promise: '在 Promise 敲定之前显示加载中的 Toast，之后显示相应的成功或危险消息。',
              dismiss: '关闭一条 Toast，或关闭全部。',
            },
          },
          NuiToasterRegion: {
            summary: 'Toast 出现的区域。在应用外壳中放置一次即可。',
            members: {
              position: '视口的某个角或某条边。起始端和末端跟随文本方向。',
              expanded: '让堆叠始终保持展开。',
              label: '区域的可访问名称。请在其中说明如何跳转到该区域。',
              closeLabel: '关闭按钮的可访问名称。',
              hotkey:
                '与 Alt 组合使用、将焦点移到最新一条 Toast 的按键，以 <code>KeyboardEvent.code</code> 表示。',
            },
          },
        },
        keyboard: [
          ['Alt+T', '将焦点移到最新的一条 Toast。'],
          ['Tab', '在各条 Toast 及其操作按钮和关闭按钮之间移动。'],
          ['Esc', '关闭获得焦点的 Toast。'],
        ],
        notes: [
          '每条 Toast 出现时都会被播报：通常等屏幕阅读器空闲时再播报，danger 类则会立即播报。Toast 从不抢夺焦点。',
          '当鼠标悬停在堆叠上、堆叠获得焦点或页面被隐藏时，计时器会暂停；等待 Promise 的 Toast 永远不会超时。',
          '任何需要用户处理的内容，都应同时在 Toast 之外提供。',
          '开启减少动态效果后，Toast 不再播放动画，也不能滑动，计时条也会隐藏。',
        ],
      },
      combobox: {
        name: '组合框',
        title: 'Angular 组合框与自动补全组件',
        summary: '在你输入时给出建议选项的文本框。',
        description:
          '无障碍的 Angular 组合框：带匹配高亮的模糊搜索、以标签显示的多个值、由输入的文本创建新值，以及来自服务器的结果。',
        apiDescription:
          'Needless UI 组合框的 API 参考：nui-combobox 的 value、values、multiple、create、filtering、loading 和 clearable，以及自定义行。',
        a11yDescription:
          'Needless UI 组合框的键盘操作与无障碍支持：带列表自动补全的可编辑组合框、aria-activedescendant、标签和输入法输入。',
        overview: [
          '组合框是一个带建议列表的文本框。搜索为模糊匹配，并且忽略重音符号：最匹配的结果排在最前，匹配的字母会被标出。它与选择器接收相同的 <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 对象。',
          '设置 <code>multiple</code> 后，选中的选项会以标签形式显示在文本之前；<code>create</code> 会把输入的文本变成新值。若结果来自服务器，请关闭 <code>filtering</code>，在 <code>(queryChange)</code> 中搜索，并在等待期间设置 <code>loading</code>。',
        ],
        examples: {
          country: {
            title: '搜索',
            text: '匹配的字母不必相邻，<code>keywords</code> 也会参与匹配。<code>clearable</code> 会添加一个清除按钮，并允许按 Esc 键清除值。',
          },
          tags: {
            title: '标签与新值',
            text: '<code>multiple</code> 会显示标签并绑定 <code>[(values)]</code>。当输入的文本还不是任何选项时，<code>create</code> 会提议添加它。',
          },
          people: {
            title: '服务器结果',
            text: '列表按原样显示服务器返回的结果，不做过滤，等待期间显示加载提示行。新结果到达时，已选选项的显示文本会保留。',
          },
        },
        api: {
          NuiCombobox: {
            summary: '在你输入时给出建议选项的文本框。',
            members: {
              options:
                '选项，以 <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 对象的形式提供。',
              value: '选中的值，或 <code>null</code>。也可以与表单配合使用。',
              values: '启用 <code>multiple</code> 时选中的多个值。',
              multiple: '允许选择多个选项，并以标签形式显示。',
              create: '由输入的文本生成值。列表会提议添加尚不是选项的文本。',
              filtering: '在输入时过滤选项。由服务器过滤时请关闭它。',
              loading: '在结果返回之前显示加载提示行。',
              clearable: '添加一个清除值的按钮，并允许按 Esc 键清除。',
              placeholder: '文本框为空时显示的文本。',
              label: '可访问名称，在没有 <code>&lt;label&gt;</code> 为文本框命名时使用。',
              inputId: '文本框的 id，供 <code>&lt;label for&gt;</code> 使用。',
              disabled: '禁用文本框。',
              compareWith: '判断两个值是否为同一选项，适用于对象类型的值。',
              displayWith: '不在选项中的值所显示的文本，例如在选项加载之前设置的值。',
              virtual: '只渲染可见的行：始终、从不，或 <code>auto</code>（超过 200 行时启用）。',
              queryChange: '在输入时发出文本，用于服务器端搜索。',
              openChange: '列表打开或关闭时发出。',
              show: '打开列表。',
              hide: '关闭列表。',
              clear: '清除值和文本。',
              focus: '让文本框获得焦点。',
            },
          },
          NuiOptionTemplate: {
            summary:
              '把它放在组件内的 <code>ng-template</code> 上，即可自行绘制每一行。上下文中包含选项及其所在行。',
            members: {},
          },
          NuiOptionText: {
            summary: '绘制选项的显示文本（标出匹配的字母）、描述和路径，用于你自定义的行。',
            members: { nuiOptionText: '行，取自模板上下文。' },
          },
        },
        keyboard: [
          ['向下 / 向上箭头键', '打开列表，然后在选项之间移动。'],
          ['Page Down / Page Up', '一次移动十个选项。'],
          ['Enter', '选择高亮的选项。'],
          ['Alt + 向下或向上箭头键', '打开或关闭列表。'],
          ['Esc', '关闭列表；再按则清除文本，若可清除则清除值。'],
          ['Backspace', '文本框为空时，删除最后一个标签。'],
          [
            '向左箭头键',
            '在文本开头时移入标签（在从右到左的文本中为向右箭头键）。在标签上按 Backspace 或 Delete 可删除该标签。',
          ],
        ],
        notes: [
          '文本框是一个带有 <code>aria-autocomplete="list"</code>、<code>aria-expanded</code> 和 <code>aria-controls</code> 的 <code>combobox</code>。焦点始终留在其中，<code>aria-activedescendant</code> 指向高亮的选项。',
          '标签组成一个带名称的列表，每个删除按钮都以对应的标签命名，例如“Remove Italy”。',
          '“No matches”和加载提示行都是状态消息，因此屏幕阅读器会播报它们。',
          '用于确认输入法组字的按键（例如输入中文或日文时）会交给输入法处理。',
        ],
      },
      command: {
        name: '命令面板',
        title: 'Angular 命令面板组件',
        summary: '应用中的所有命令，一键即达。',
        description:
          '无障碍的 Angular 命令面板：随处按 ⌘K 打开，模糊搜索可深入嵌套页面，支持分组，并按各平台的写法显示快捷键。',
        apiDescription:
          'Needless UI 命令面板的 API 参考：nui-command-palette 的 commands、hotkey、bindShortcuts 和 loop，以及 NuiCommand 的结构。',
        a11yDescription:
          'Needless UI 命令面板的键盘操作与无障碍支持：带搜索组合框的模态对话框、aria-activedescendant 和页面导航。',
        overview: [
          '命令面板是放在模态对话框中的搜索框，用于搜索应用中的命令。在任何地方按 ⌘K 都能打开它（Windows 和 Linux 上为 Ctrl+K）。选择一个命令后，面板会先关闭，再执行该命令。',
          '命令可以带有分组、描述、关键词和快捷键，快捷键以各平台的符号显示。带有 <code>children</code> 的命令会打开一个包含更多命令的页面，从顶层搜索时也能搜到各页面中的命令。',
        ],
        examples: {
          palette: {
            title: '命令与页面',
            text: '分组、快捷键、一个禁用的命令和两个页面。<code>(run)</code> 会告诉你执行了哪个命令；命令自身的 <code>run</code> 也同样有效。',
          },
          people: {
            title: '自定义行',
            text: '<code>nuiOptionTemplate</code> 负责绘制每一行，<code>nuiOptionText</code> 保留匹配处的标记。<code>[hotkey]="null"</code> 把 ⌘K 留给上面的面板。',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: '带有命令搜索框的模态对话框。',
            members: {
              commands: '命令，以 <code>NuiCommand</code> 对象的形式提供。',
              open: '面板是否打开。',
              hotkey:
                '随处打开和关闭面板的快捷键；设为 <code>null</code> 则不使用。<code>mod</code> 在 Apple 设备上是 ⌘，在其他设备上是 Ctrl。',
              bindShortcuts: '还可以在页面任意位置通过命令各自的快捷键执行命令。',
              loop: '在最后一个命令上按向下键会回到第一个，在第一个命令上按向上键会跳到最后一个。',
              filtering: '在输入时进行过滤。由服务器过滤命令时请关闭它。',
              loading: '在结果返回之前显示加载提示行。',
              hints: '在底部显示可用的按键。',
              virtual: '只渲染可见的行：始终、从不，或 <code>auto</code>（超过 200 行时启用）。',
              label: '对话框及其搜索框的可访问名称。',
              placeholder: '搜索框为空时显示的文本。',
              run: '每执行一个命令就发出该命令。',
              queryChange: '在输入时发出文本，用于服务器端搜索。',
              show: '打开面板。',
              hide: '关闭面板。',
              toggle: '打开面板，或将其关闭。',
              back: '返回上一页。',
            },
          },
          NuiCommand: {
            summary: '一个命令，或一页命令。',
            members: {
              label: '显示并用于搜索的文本。',
              description: '显示在主文本下方的次要文本。',
              group: '分组相同的命令会列在该分组标题下。',
              keywords: '搜索时额外匹配的词，例如同义词。',
              shortcut: '随命令一起显示的按键，例如 <code>mod+shift+p</code>。',
              disabled: '会显示，但无法执行。',
              children: '下一级的命令：选择此命令会将它们作为一个页面打开。',
              run: '被选中时，在面板关闭后执行。',
              id: '供你自行使用，例如在 <code>(run)</code> 中区分命令。',
            },
          },
        },
        keyboard: [
          ['⌘K 或 Ctrl+K', '打开或关闭面板。'],
          ['向下 / 向上箭头键', '在命令之间移动，到达末端时循环。'],
          ['Page Down / Page Up', '一次移动十个命令。'],
          ['Enter', '执行高亮的命令，或打开它的页面。'],
          ['Esc', '返回上一页；在顶层时关闭面板。'],
          ['Backspace', '在页面中且搜索框为空时，返回上一页。'],
        ],
        notes: [
          '它是原生的模态 <code>&lt;dialog&gt;</code>：背后的页面不可交互，焦点保持在其中，关闭后焦点会回到原来的位置。',
          '搜索框是一个 <code>combobox</code>，通过 <code>aria-activedescendant</code> 指向高亮的命令。在某个页面中时，它会使用该页面的名称。',
          '快捷键是每个选项中的文本，因此屏幕阅读器会读出它们。底部的按键提示对辅助技术隐藏。',
          '不含 Ctrl、Alt 或 ⌘ 的快捷键，在输入框中打字时不会触发。',
        ],
      },
      popover: {
        name: '弹出框',
        title: 'Angular 弹出框与悬停卡片组件',
        summary: '在按钮旁浮出的面板，以及悬停时出现、内容丰富的工具提示。',
        description:
          '基于原生 Popover API 的无障碍 Angular 弹出框和悬停卡片：可翻转并跟随的定位、箭头、点击外部关闭，以及悬停延迟。',
        apiDescription:
          'Needless UI 弹出框的 API 参考：nuiPopover 和 nuiHovercard 的 side、align、offset 与 arrow，以及它们的触发器指令。',
        a11yDescription:
          'Needless UI 弹出框和悬停卡片的键盘操作与无障碍支持：dialog 与 tooltip 角色、焦点归还、Esc 键和 WCAG 1.4.13。',
        overview: [
          '弹出框是在按钮旁打开的小面板，用于放置可交互的内容：筛选条件、简短的表单、颜色选择器。它是原生的 <code>popover="auto"</code>，因此浏览器会在按 Esc 键或点击外部时关闭它、归还焦点，并在 Tab 键顺序中把它放在触发器之后。',
          '悬停卡片是一种内容丰富的工具提示。短暂悬停后打开，通过键盘获得焦点时则立即打开，用来描述它的触发器。指针移到卡片上时它会保持打开，因此其中的文字可以阅读和选中。',
          '两者在空间不足时都会翻转到另一侧，始终保持在屏幕内，并在页面滚动时跟随触发器。',
        ],
        examples: {
          filters: {
            title: '筛选',
            text: '内含表单的弹出框。<code>arrow</code> 让它指向触发器，<code>hide()</code> 可在代码中关闭它。',
          },
          profile: {
            title: '悬停卡片',
            text: '将鼠标悬停在某个名字上，或用 Tab 键移到它。卡片用来描述该链接，因此屏幕阅读器会在名字之后读出它。',
          },
          sides: {
            title: '方位与入场动画',
            text: '<code>side</code> 和 <code>align</code> 决定它在哪里打开；<code>start</code> 和 <code>end</code> 跟随书写方向。<code>enter</code> 和 <code>motion</code> 决定它如何入场。',
          },
        },
        api: {
          NuiPopover: {
            summary: '原生弹出框，放置在打开它的元素旁边。',
            members: {
              side: '在触发器的哪一侧打开。空间不足时会翻转。',
              align: '沿该侧与触发器的对齐方式。',
              offset: '触发器与面板之间的间距，单位为像素。',
              arrow: '显示一个指向触发器的箭头。',
              openChange: '打开或关闭时发出。',
              show: '在任意元素旁边打开它。',
              hide: '关闭它。',
            },
          },
          NuiPopoverTrigger: {
            summary: '通过原生 <code>popovertarget</code> 打开和关闭弹出框的按钮。',
            members: { nuiPopoverTrigger: '要打开的弹出框。' },
          },
          NuiHovercard: {
            summary: '描述其触发器的、内容丰富的工具提示。',
            members: {
              side: '在触发器的哪一侧打开。空间不足时会翻转。',
              align: '沿该侧与触发器的对齐方式。',
              offset: '触发器与卡片之间的间距，单位为像素。',
              arrow: '显示一个指向触发器的箭头。',
              openDelay: '悬停多少毫秒后打开。通过键盘获得焦点时会立即打开。',
              closeDelay: '指针离开后，经过多少毫秒关闭。',
              openChange: '打开或关闭时发出。',
              show: '在任意元素旁边打开它。',
              hide: '关闭它。',
            },
          },
          NuiHovercardTrigger: {
            summary: '在悬停和键盘聚焦时显示悬停卡片，并将其设为此元素的描述。',
            members: { nuiHovercardTrigger: '要显示的悬停卡片。' },
          },
        },
        keyboard: [
          ['在触发器上按 Enter 或空格键', '打开或关闭弹出框。'],
          ['Tab', '移入已打开的弹出框，它紧跟在触发器之后。'],
          ['Esc', '关闭弹出框并将焦点返回触发器，或隐藏悬停卡片。'],
        ],
        notes: [
          '弹出框是非模态的 <code>dialog</code>：请用 <code>aria-label</code> 或 <code>aria-labelledby</code> 为它命名。它的触发器会获得 <code>aria-haspopup</code>，以及由浏览器维护的 <code>aria-expanded</code>。',
          '悬停卡片是一个 <code>tooltip</code>，也是其触发器的 <code>aria-describedby</code>，因此它的文字会随触发器一起读出。不要在其中放置控件；需要控件时请使用弹出框。',
          '悬停卡片符合 WCAG 1.4.13：按 Esc 键可将其隐藏且不移动焦点，指针可以移到卡片上，并且在悬停或获得焦点期间会一直显示。',
        ],
      },
      select: {
        name: '选择器',
        title: 'Angular 选择器组件',
        summary: '从简短或海量的列表中选择一个或多个选项。',
        description:
          '无障碍的 Angular 选择器：单选或多选、分组、树形结构、键入跳转、全选，以及适用于任意长度列表的虚拟滚动。',
        apiDescription:
          'Needless UI 选择器的 API 参考：nui-select 的 value、values、multiple、selectAll 和 virtual，NuiOption 的结构，以及自定义行。',
        a11yDescription:
          'Needless UI 选择器的键盘操作与无障碍支持：带列表框或树的仅供选择的组合框、aria-activedescendant、键入搜索和树形导航键。',
        overview: [
          '选择器是一个点击后打开选项列表的按钮。为它传入 <code>options</code>（一个 <code>NuiOption</code> 数组），并绑定 <code>[(value)]</code>；启用 <code>multiple</code> 时则绑定 <code>[(values)]</code>。它也支持 Signal Forms、响应式表单和 <code>ngModel</code>。',
          '选项可以带有 <code>group</code>、<code>description</code> 和 <code>keywords</code>，<code>children</code> 则会让列表变成树。超过 200 行时只渲染可见的行，因此十万个选项也能像十个一样快速打开。',
          '如果想输入文本来筛选，请使用<a href="/components/combobox">组合框</a>。',
        ],
        examples: {
          countries: {
            title: '分组',
            text: '带有 <code>group</code> 的选项会列在对应的分组标题下。输入一个字母会跳到下一个以该字母开头的选项。',
          },
          toppings: {
            title: '一次多选',
            text: '<code>multiple</code> 会让列表保持打开，并绑定 <code>[(values)]</code>。<code>selectAll</code> 会添加一个全选或全部清除的按钮。禁用的选项无法选择。',
          },
          folders: {
            title: '树形结构',
            text: '带有 <code>children</code> 的选项构成一棵树。打开列表时，已选选项所在的文件夹会自动展开。',
          },
          zones: {
            title: '长列表',
            text: '按地区列出所有时区。超过 200 行时只渲染可见的行，而高亮的选项始终保持渲染，供屏幕阅读器使用。',
          },
        },
        api: {
          NuiSelect: {
            summary: '点击后打开选项列表的按钮。',
            members: {
              options: '选项，以 <code>NuiOption</code> 对象的形式提供。',
              value: '选中的值，或 <code>null</code>。也可以与表单配合使用。',
              values: '启用 <code>multiple</code> 时选中的多个值。',
              multiple: '允许选择多个选项。选择期间列表保持打开。',
              selectAll: '启用 <code>multiple</code> 时，添加一个全选或全部清除的按钮。',
              placeholder: '未选择任何项时显示的文本。',
              label: '可访问名称，在没有 <code>&lt;label&gt;</code> 为按钮命名时使用。',
              triggerId: '按钮的 id，供 <code>&lt;label for&gt;</code> 使用。',
              disabled: '禁用选择器。',
              compareWith: '判断两个值是否为同一选项，适用于对象类型的值。',
              virtual: '只渲染可见的行：始终、从不，或 <code>auto</code>（超过 200 行时启用）。',
              openChange: '列表打开或关闭时发出。',
              show: '打开列表。',
              hide: '关闭列表。',
              focus: '让按钮获得焦点。',
            },
          },
          NuiOption: {
            summary: '单个选项。选择器、组合框和命令面板都接收这种对象。',
            members: {
              value: '选中它时设置的值，可以是任意类型。',
              label: '显示并用于搜索的文本。',
              description: '显示在主文本下方的次要文本。',
              group: '分组相同的选项会按顺序列在该分组标题下。',
              keywords: '搜索时额外匹配的词，例如同义词或代码。',
              disabled: '会显示，但无法选择。',
              children: '下一级的选项，会让列表变成树。',
            },
          },
          NuiOptionTemplate: {
            summary:
              '把它放在组件内的 <code>ng-template</code> 上，即可自行绘制每一行。上下文中包含选项及其所在行。',
            members: {},
          },
          NuiOptionText: {
            summary: '绘制选项的显示文本（标出匹配的字母）、描述和路径，用于你自定义的行。',
            members: { nuiOptionText: '行，取自模板上下文。' },
          },
        },
        keyboard: [
          ['向下 / 向上箭头键', '打开列表，然后在选项之间移动。'],
          ['Home / End', '跳到第一个或最后一个选项。'],
          ['Page Down / Page Up', '一次移动十个选项。'],
          ['Enter 或空格键', '打开列表，或选择高亮的选项。'],
          ['字母键', '跳到下一个以这些字母开头的选项。'],
          [
            '向右 / 向左箭头键',
            '在树中，展开选项或移到其第一个子项；折叠选项或移到其父项。在从右到左的文本中左右方向相反。',
          ],
          ['Alt + 向上箭头键', '选择高亮的选项并关闭列表。'],
          ['Tab', '单选时，选择高亮的选项并移到下一个元素。'],
          ['Esc', '不做选择，直接关闭列表。'],
        ],
        notes: [
          '按钮是一个仅供选择的 <code>combobox</code>，带有 <code>aria-expanded</code> 和 <code>aria-controls</code>。焦点始终留在按钮上，<code>aria-activedescendant</code> 指向高亮的选项。',
          '列表是一个 <code>listbox</code>，或是带有 <code>aria-level</code> 和 <code>aria-expanded</code> 的 <code>tree</code>。即使只渲染了部分行，<code>aria-setsize</code> 和 <code>aria-posinset</code> 也保持正确。',
          '高亮的选项使用实色填充，在强制颜色模式下还会显示轮廓线。',
          '请用指向 <code>triggerId</code> 的 <code>&lt;label for&gt;</code> 为它命名，或使用 <code>label</code>。',
        ],
      },
      grid: {
        name: '数据表格',
        title: 'Angular 数据表格组件',
        summary: '对任意数量的行进行排序、筛选、选择、编辑和滚动浏览。',
        description:
          '基于原生 table 元素的无障碍 Angular 数据表格：多列排序、筛选、分页或虚拟滚动、行选择、编辑，以及可移动的列。',
        apiDescription:
          'Needless UI 数据表格的 API 参考：nui-grid 的输入属性与双向绑定、NuiGridColumn 列定义，以及自定义单元格的模板。',
        a11yDescription:
          'Needless UI 数据表格的键盘交互与无障碍支持：带 grid 角色的原生表格、Tab 键只停留一次、方向键导航和状态播报。',
        overview: [
          '数据表格基于原生 table 元素，支持排序、筛选、分页和编辑。定义好 <code>columns</code>，传入 <code>rows</code>，每个单元格就会按类型和语言环境格式化：数字、货币、日期、是或否，以及 <code>enum</code> 值的标签。',
          '它的状态都保存在模型中，可以绑定、保存或发送到服务器：<code>sort</code>、<code>filters</code>、<code>search</code>、<code>page</code>、<code>selected</code>，以及记录用户设定的列宽、顺序、固定和隐藏列的 <code>columnState</code>。不分页时只渲染可见的行，因此十万行滚动起来也像十行一样流畅。',
          '每个单元格都能通过键盘到达；每列的面板都可以对该列排序、筛选、固定、移动、自动调整列宽和隐藏。',
          '行还可以嵌套。<code>groupBy</code> 按列对行分组，并在分组行和 <code>totals</code> 合计行中显示每列的 <code>aggregate</code>；<code>children</code> 显示树形数据；<code>nuiGridDetail</code> 模板则在行下方展开。分组或嵌套时，表格就成了 <code>treegrid</code>。',
        ],
        examples: {
          orders: {
            title: '搜索、排序与分页',
            text: '输入文字即可搜索所有列。点击表头即可排序，按住 Shift 键点击可再加入第二个排序列。<code>nuiGridCell</code> 负责绘制状态，<code>exportCsv()</code> 则导出当前显示的内容。',
          },
          selection: {
            title: '行选择',
            text: '<code>selection="multiple"</code> 会添加复选框，并绑定所选行的 key。按住 Shift 键点击可选择一个范围；表头的复选框会选中所有符合筛选条件的行。',
          },
          editing: {
            title: '编辑',
            text: '双击单元格、按 Enter 键，或直接输入即可编辑。<code>validate</code> 会让编辑器保持打开并显示提示；提交的编辑会更新 <code>rows</code> 并发出 <code>cellEdit</code>。',
          },
          big: {
            title: '十万行',
            text: '不分页时只渲染可见的行。固定的列停留在两侧边缘，<code>columnState</code> 会保留用户调整后的布局。',
          },
          server: {
            title: '服务器数据',
            text: '在 <code>server</code> 模式下，表格按原样显示收到的行，并通过 <code>queryChange</code> 报告每次变化。获取数据期间请设置 <code>loading</code>。',
          },
          groups: {
            title: '分组与合计',
            text: '按一列或两列分组。分组行会统计订单数，并对金额求和、求平均值；<code>totals</code> 会对所有行做同样的汇总。按向左箭头键可折叠分组。',
          },
          tree: {
            title: '树形数据',
            text: '<code>children</code> 为每个文件夹提供其中的文件。按向右箭头键或点击切换按钮即可展开行，<code>[(expanded)]</code> 会记录哪些行已展开。搜索时，匹配项上层的文件夹会保持展开。',
          },
          details: {
            title: '行详情',
            text: '<code>nuiGridDetail</code> 模板在订单下方显示其明细，通过一列切换按钮打开；<code>[(details)]</code> 会记录哪些行已打开。',
          },
          live: {
            title: '实时数据、导出与打印',
            text: '价格每两秒变化一次，<code>flash</code> 会让发生变化的单元格闪烁一下。<code>exportXlsx()</code> 会下载一个真正的电子表格，<code>print()</code> 打印所有行，<code>layout="auto"</code> 则在窄屏上以卡片显示行。',
          },
        },
        api: {
          NuiGrid: {
            summary: '基于原生 table 元素的数据表格。',
            members: {
              rows: '数据。编辑会替换行，因此请用 <code>[(rows)]</code> 绑定。',
              columns: '列，以 <code>NuiGridColumn</code> 对象的形式提供。',
              rowId: '行的 key，用于选择和跟踪。',
              label: '表格的可访问名称。',
              selection: '行是否可选，以及可选几行。',
              selected: '所选行的 key。',
              sort: '排序，以 <code>{ column, direction }</code> 对象的形式提供；排在前面的优先。',
              filters: '按列 id 设置的筛选条件：一个运算符和一个值。',
              search: '必须全部出现在同一行中的词。',
              pageSize: '每页行数；设为 0 则显示为一个滚动列表。',
              page: '当前显示的页，从 0 开始。',
              pageSizes: '分页器中可选的每页行数。',
              virtual:
                '只渲染可见的行：始终、从不，或 <code>auto</code>（不分页且超过 100 行时启用）。',
              height: '限制表格高度的 CSS 长度，内容在表格内部滚动。',
              columnState: '每列的宽度、顺序、固定和可见性，用于保存和恢复。',
              mode: '<code>server</code> 按原样显示收到的行，把排序、筛选和分页交给你处理。',
              total: '服务器上的总行数。',
              loading: '显示进度条；没有行时显示占位行。',
              locale: '用于格式化数字和日期，以及解析输入的数字。',
              labels: '表格显示或播报的所有文本，供翻译使用。',
              rowActivate: '按 Enter 键或双击打开某行时，发出该行。',
              cellEdit: '每次提交编辑时发出该编辑。',
              queryChange: '排序、筛选、搜索或页码变化时发出它们。',
              exportCsv: '以 CSV 格式返回筛选和排序后的行，只包含可见的列。',
              focusCell: '让某个单元格获得焦点；第 <code>-1</code> 行是表头。',
              clearFilters: '清除所有筛选条件和搜索。',
              'groupBy, collapsed': '用于对行分组的列（从最外层开始），以及已折叠分组的 key。',
              children: '行的子行：表格会显示树形数据。',
              'expanded, details': '树形数据中已展开行的 key，以及已打开详情的行的 key。',
              'totals, flash':
                '一行汇总所有筛选后行的聚合值；以及文本变化时会闪烁的单元格，仅适用于具有固定 <code>rowId</code> 的行。',
              layout: '<code>list</code> 以卡片显示行，<code>auto</code> 则只在窄屏上这样显示。',
              'exportXlsx, print': '以电子表格形式导出筛选和排序后的行；打印所有行。',
            },
          },
          NuiGridColumn: {
            summary: '一列。只有 <code>id</code> 和 <code>header</code> 是必需的。',
            members: {
              id: '唯一值；也是排序、筛选和列状态中使用的 key。',
              header: '表头文本。',
              value: '行的某个 key，或以行为参数的函数。默认为 <code>row[id]</code>。',
              type: '决定对齐方式、排序、筛选和编辑器。',
              format: '用于数字和日期的 <code>Intl</code> 选项，或生成文本的函数。',
              options: '<code>enum</code> 列的选项，以 <code>NuiOption</code> 对象的形式提供。',
              'width, minWidth, maxWidth': '单位为像素。',
              flex: '与其他 <code>flex</code> 列分配剩余的空间。',
              align: '默认值取决于类型：数字和日期对齐到末端。',
              'pinned, hidden': '列初始的固定和可见状态。',
              'sortable, filterable, resizable, reorderable, hideable':
                '都可以设为 <code>false</code> 来关闭。',
              compare: '自定义排序。',
              'editable, validate': '单元格是否可编辑，以及值无效时显示的提示。',
              set: '生成编辑后的行。默认为带有新值的副本。',
              aggregate:
                '分组行和合计行显示的内容：总和、平均值、最小值、最大值、计数，或一个函数。',
            },
          },
          NuiGridCell: {
            summary: '绘制某列的单元格。上下文中包含行、它的值和文本。',
            members: { nuiGridCell: '列的 id。' },
          },
          NuiGridHeader: {
            summary: '绘制某列的表头。',
            members: { nuiGridHeader: '列的 id。' },
          },
          NuiGridEmpty: {
            summary: '没有行时显示的内容。上下文会说明这些行是否被筛选条件隐藏。',
            members: {},
          },
          NuiGridDetail: {
            summary: '行的详情，打开后显示在该行下方。上下文中包含该行。',
            members: {},
          },
        },
        keyboard: [
          ['方向键', '移动一个单元格。在从右到左的文本中，左右方向相反。'],
          ['Home / End', '移到本行（按住 Ctrl 时为整个表格）的第一个或最后一个单元格。'],
          ['Page Down / Page Up', '移动一屏的行。'],
          ['在表头上按 Enter 或空格键', '按该列排序；按住 Shift 时，将该列加入排序。'],
          ['在表头上按 Alt + 向下箭头键', '打开列面板。'],
          ['在表头上按 Alt + 向左或向右箭头键', '让列变窄或变宽；按住 Shift 时则移动该列。'],
          ['在单元格上按 Enter', '编辑该单元格；无法编辑时则打开该行。'],
          ['F2 或直接输入', '编辑单元格。'],
          ['编辑时按 Enter、Esc 或 Tab', 'Enter 提交，Esc 取消，Tab 提交并移到下一格。'],
          ['空格键', '选择该行；按住 Shift 时，选择自上次所选行起的所有行。'],
          ['Ctrl + A', '选择所有行。'],
          ['在分组上按向右 / 向左箭头键', '展开或折叠分组；在有子行的行的第一个单元格上也一样。'],
          ['在分组上按 Enter', '展开或折叠分组；按空格键则选择其中的行。'],
          ['在详情切换按钮上按 Enter', '显示或隐藏该行的详情。'],
        ],
        notes: [
          '它是带有 <code>role="grid"</code> 的原生 <code>&lt;table&gt;</code>，以 <code>label</code> 命名。表头带有 <code>aria-sort</code>，可选择的行带有 <code>aria-selected</code>。',
          '表格在 Tab 键顺序中只占一个位置。焦点通过漫游式 <code>tabindex</code> 在单元格之间移动，因此屏幕阅读器会连同行标题和列标题一起朗读每个单元格。',
          '在分页或虚拟化时，<code>aria-rowcount</code>、<code>aria-rowindex</code> 和 <code>aria-colindex</code> 也始终保持正确。',
          '排序、筛选、翻页和编辑错误，会通过不打断当前朗读的状态区域播报。',
          '有分组或嵌套的行时，表格就成了 <code>treegrid</code>：行带有 <code>aria-level</code>、<code>aria-setsize</code> 和 <code>aria-posinset</code>，可展开的行还带有 <code>aria-expanded</code>。聚合值会连同其类型一起朗读，例如“Sum: 475”。',
        ],
      },
      chat: {
        name: '聊天',
        title: 'Angular AI 聊天组件',
        summary: '与模型对话：流式回复、工具、版本和文件。',
        description:
          '面向 AI 助手的无障碍 Angular 聊天组件：以 Markdown 流式输出回复，支持推理过程、工具调用、来源、以版本保留的重试和文件。',
        apiDescription:
          'Needless UI 聊天组件的 API 参考：nui-chat 的输入属性、以流式输出回复的 NuiChatSession、消息、工具模板和流读取函数。',
        a11yDescription:
          'Needless UI 聊天组件的键盘交互与无障碍支持：由具名消息组成的 feed、Page Up 和 Page Down，以及完成后才播报的回复。',
        overview: [
          '聊天组件包揽了用户与模型之间的一切。用一个 <code>respond</code> 函数创建 <code>NuiChatSession</code>，其余交给 <code>&lt;nui-chat&gt;</code>：它以 Markdown 流式呈现回复，自动向下跟随，直到用户向上滚动为止；回复到达期间，发送按钮会变成停止按钮。',
          '<code>respond</code> 可以返回文本、Promise、<code>async function*</code> 或 Observable，因此任何 API 都能接入。除了文本，回复还可以带有模型的推理过程、工具调用（由你的模板绘制）以及所引用的来源。<code>nuiEventStream</code> 可读取大多数模型 API 以流式发送的服务器发送事件。',
          '什么都不会丢失：重试的回复或编辑过的问题会成为旧版本旁边的新版本，对话会保留每一个分支。屏幕阅读器会在每条回复完成后才播报，而不是逐词播报。',
        ],
        examples: {
          assistant: {
            title: '助手',
            text: '点击建议即可开始对话。回复以 Markdown 流式呈现；你可以停止、重试、评价回复，或编辑自己的问题。<code>attach</code> 接收选择、粘贴或拖放的文件。',
          },
          tools: {
            title: '推理、工具与来源',
            text: '增量数据会把模型的推理过程、工具调用和来源加入回复。<code>nuiChatTool</code> 把天气工具绘制成卡片；其他工具连同输入和输出一起折叠起来。',
          },
          server: {
            title: '从服务器流式传输',
            text: '<code>nuiEventStream</code> 读取 OpenAI 风格的事件流，<code>NuiChatError</code> 会显示其中的消息。<code>all()</code> 会保存整个对话，包括所有版本。',
          },
        },
        api: {
          NuiChat: {
            summary: '对话与输入框，合为一体。',
            members: {
              session: '要显示的对话。',
              assistant: '助手的名称，用在屏幕阅读器读到的标题中。',
              headingLevel:
                '每条消息标题的级别，这些标题仅对屏幕阅读器可见。回复中的标题再低一级。',
              announce: '回复完成时屏幕阅读器播报的内容：全部内容、简短通知或不播报。',
              images: '显示回复中的图片；否则以图片的文字链接到图片。',
              value: '正在输入的文本。',
              placeholder: '输入框为空时显示的提示。',
              suggestions: '点击即可发送的提示词，在第一条消息发出前显示。',
              sendOn:
                '按 Enter 发送，还是按 Ctrl 或 ⌘ + Enter 发送。<code>auto</code> 在有物理键盘时按 Enter 发送；在触摸屏上，Return 键换行，由按钮发送。',
              disabled: '禁止输入框发送消息。',
              attach: '接收文件：选择、粘贴或拖放均可。',
              accept: '可接收的文件类型，写法同 <code>&lt;input type="file"&gt;</code>。',
              maxFiles: '一条消息最多可附带的文件数。',
              maxSize: '可接收的最大文件大小，单位为字节。',
              labels: '聊天组件显示或播报的所有文本，供翻译使用。',
              rated: '发出用户评价的回复及其评价；撤回评价时为 <code>null</code>。',
              focus: '让文本框获得焦点。',
              scrollToEnd: '滚动到最新消息，并持续跟随。',
            },
          },
          NuiChatSession: {
            summary:
              '不含任何 DOM 的对话本身。在组件中通过 <code>respond</code>、<code>messages</code> 和 <code>id</code> 选项创建。',
            members: {
              respond:
                '由你实现：为 <code>request.messages</code> 写出回复，并在 <code>request.signal</code> 中止时停止。',
              messages: '屏幕上显示的对话。',
              all: '所有版本的所有消息，可保存下来，再作为 <code>messages</code> 传回。',
              busy: '是否有回复正在生成。',
              send: '发送一条消息并请求回复。',
              stop: '停止回复，保留已写出的内容。',
              retry: '重新提问。新回复会作为一个版本，与旧回复并列。',
              edit: '为用户的某条消息发送一个新版本。',
              versions: '一条消息的所有版本，从旧到新。',
              show: '把对话切换到这个版本。',
              rate: '记录用户对回复的评价。',
              'remove, load, clear': '删除一条消息及其之后的内容、替换整个对话，或从头开始。',
            },
          },
          NuiChatMessage: {
            summary: '一条消息。<code>parent</code> 相同的消息互为版本。',
            members: {
              'id, parent': '消息的 key，以及它所接续的那条消息。',
              role: '由谁撰写。',
              text: '助手发来的是 Markdown，用户发来的是纯文本。',
              status: '回复所处的阶段，从等待到完成。',
              reasoning: '模型在作答前的思考。',
              tools: '它调用的工具，及其状态、输入和输出。',
              sources: '它引用的网页。',
              attachments: '随消息发送的文件。',
              rating: '用户的评价。',
              data: '需要一并保存的其他数据，例如模型名称。',
            },
          },
          NuiChatToolTemplate: {
            summary: '绘制一次工具调用，例如一张天气卡片。上下文中包含该调用及其所属消息。',
            members: {
              nuiChatTool: '工具名称。不指定时，绘制所有未被其他模板指定的调用。',
            },
          },
          NuiChatThread: {
            summary:
              '单独的对话区域，用于你自己的布局。接收 <code>nui-chat</code> 中与对话相关的输入属性。',
            members: {},
          },
          NuiChatComposer: {
            summary: '单独的输入框。接收 <code>nui-chat</code> 中与撰写消息相关的输入属性。',
            members: {},
          },
          NuiServerEvent: {
            summary:
              '<code>nuiEventStream</code> 为每个事件产出的对象。<code>nuiTextStream</code> 读取纯文本，<code>nuiJsonStream</code> 读取 JSON Lines；三者都接收 <code>fetch</code> 的响应。',
            members: {
              event: '事件名称。',
              data: '拼接后的 data 行。',
              id: '流最后发送的 id。',
            },
          },
          NuiChatError: {
            summary:
              '在 <code>respond</code> 中抛出它，即可显示其消息。其他错误只显示通用消息，因此不会泄露内部信息。',
            members: {},
          },
        },
        keyboard: [
          ['Page Down / Page Up', '移到下一条或上一条消息。'],
          ['Ctrl + End / Ctrl + Home', '离开对话，移到其后或其前的元素。'],
          ['Enter', '发送。按住 Shift 时换行。'],
          ['Esc', '停止编辑消息。'],
        ],
        notes: [
          '对话是由 <code>article</code> 组成的 <code>feed</code>。每条消息都以仅对屏幕阅读器可见的标题命名，例如“You said”，并带有 <code>aria-posinset</code> 和 <code>aria-setsize</code>。',
          '正在生成的回复带有 <code>aria-busy</code>。完成后会被完整播报一次；出错时则立即播报。',
          '每个图标按钮都有名称和工具提示。评价按钮是切换按钮，版本切换器是一个名称形如“Version 2 of 3”的分组。',
          '推理过程和工具调用都是原生的可折叠控件。移除文件后，焦点会回到文本框。',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Angular Markdown 渲染组件',
        summary: '安全渲染 Markdown，流式输出时也不例外。',
        description:
          '面向 AI 回复的安全 Angular Markdown 渲染器：GitHub 风格的表格、任务列表和代码块，均以真实元素绘制，流式输出时依然流畅。',
        apiDescription:
          'Needless UI Markdown 渲染器的 API 参考：nui-markdown 的输入属性、代码块模板，以及背后的解析器。',
        a11yDescription:
          'Needless UI Markdown 渲染器的无障碍支持：真实的标题、列表和表格，具名的滚动区域，以及会播报结果的复制按钮。',
        overview: [
          'Markdown 渲染器把模型所写的那类文本变成真实的元素：标题、列表和任务列表、引用、表格、带复制按钮的代码块，以及链接。它先把文本解析成树，再用模板绘制，因此原始 HTML 始终是文本，任何内容都不会作为 HTML 插入。',
          '启用 <code>streaming</code> 后，写到一半的文本也会像完成后那样呈现：未闭合的代码围栏已经是代码块，落单的 <code>**</code> 会等待与它配对的另一半，光标则跟在最后一个词后面。没有变化的块会保留原有的 DOM。',
          '链接只对网页、邮件和电话地址生效；在你开启 <code>images</code> 之前，图片都显示为链接。',
        ],
        examples: {
          document: {
            title: '文档',
            text: '标题从 <code>headingLevel</code> 开始，因此能嵌在页面自身的标题之下。过宽的表格和代码在各自的区域中滚动。',
          },
          streaming: {
            title: '流式输出',
            text: '同一段文本，每次只来几个字符。不会有符号一闪而过，只有最后一个块会重新渲染。',
          },
          highlight: {
            title: '代码高亮',
            text: '<code>nuiMarkdownCode</code> 用你的模板绘制代码块，这里配了一个迷你高亮器。模板会拿到代码及其语言。',
          },
        },
        api: {
          NuiMarkdown: {
            summary: '把 Markdown 渲染为元素。',
            members: {
              text: 'Markdown 文本。',
              streaming: '文本仍在陆续到达。',
              headingLevel: '<code>#</code> 标题的级别。更深的标题依次递增，最深到 6 级。',
              images: '显示图片。否则以图片的文字链接到图片，因为图片可能被用来跟踪用户。',
              labels: '复制按钮的文本等，供翻译使用。',
              codeTemplate: '来自别处的代码块模板，例如来自包含它的聊天组件。',
            },
          },
          NuiMarkdownCode: {
            summary:
              '绘制代码块。上下文中包含代码、<code>lang</code>，以及代码块仍在到达时的 <code>open</code>。',
            members: {},
          },
          nuiParseMarkdown: {
            summary: '解析器及其辅助函数，可脱离组件使用。',
            members: {
              nuiParseMarkdown: '组件所绘制的、由块和行内元素组成的树。',
              nuiMarkdownToText: '纯文本，每个块一行，用于播报或预览。',
              nuiSafeUrl: '链接是否指向网页、邮件或电话地址。',
            },
          },
        },
        keyboard: [['Tab', '移到链接、复制按钮，以及可滚动的宽表格和代码。']],
        notes: [
          '标题、列表、引用、带有 <code>th</code> 表头和 <code>scope</code> 的表格，以及代码，都是真实的元素。',
          '过宽的表格和代码块在可聚焦的区域中滚动；表格的区域以其表头命名。',
          '任务列表的复选框会说明每项任务是否已完成。复制按钮名为“Copy code”，并通过状态消息播报“Copied”。',
          '流式输出时的光标对屏幕阅读器隐藏，在开启减少动态效果时保持静止。',
        ],
      },
      calendar: {
        name: '日历',
        title: 'Angular 日历组件',
        summary: '选择单个日期、日期范围或多个日期，也可以用键盘操作。',
        description:
          '无障碍的 Angular 日历：可选择单个日期、日期范围或多个日期，支持最小和最大日期、不可选日期、多月并排显示和周数。',
        apiDescription:
          'Needless UI 日历的 API 参考：nui-calendar 的选择模式，min、max 和 unavailable 限定的日期，多月并排显示，以及可翻译的文本。',
        a11yDescription:
          'Needless UI 日历的键盘操作与无障碍支持：每天都有名称的日期网格、按天和按周移动的方向键，以及按月翻页的 Page Up 和 Page Down。',
        overview: [
          '日历可以选择单个日期、日期范围或多个日期。值是普通的 ISO 日期，例如 <code>2026-09-25</code>，不带会让日期偏移的时区，因此可以直接发送给服务器或 <code>&lt;input type="date"&gt;</code>。',
          '每周从语言环境规定的第一天开始，月份和星期的名称以及数字都使用其语言。<code>min</code>、<code>max</code> 和 <code>unavailable</code> 用于排除日期，<code>months</code> 可并排显示多个月份；要前往较远的日期时，点击标题即可切换到月份和年份视图。',
          '与 WAI-ARIA 的日期选择器模式一样，每一天都可以通过键盘到达，并以完整日期命名。',
        ],
        examples: {
          delivery: {
            title: '送货日期',
            text: '今天之前、<code>max</code> 之后或被 <code>unavailable</code> 排除的日期都无法选择，但键盘仍会经过这些日期。',
          },
          stay: {
            title: '日期范围',
            text: '使用 <code>selection="range"</code> 时，第一次选择确定范围的起点，在第二次选择之前，范围的高亮区间会跟随指针。<code>months="2"</code> 和 <code>weekNumbers</code> 可以一次显示更多内容。',
          },
          'days-off': {
            title: '多个日期',
            text: '使用 <code>selection="multiple"</code> 时，每次选择都会添加或移除一个日期。<code>firstDay</code> 可以让一周从语言环境默认以外的另一天开始。',
          },
        },
        api: {
          NuiCalendar: {
            summary: '用于选择日期的日历。',
            members: {
              selection: '可以选择多少个日期。',
              value: '选中的日期。',
              values: '选中的多个日期，按先后顺序排列。',
              range: '选中的范围，包含两端。',
              month: '显示的月份；同时显示多个月份时为第一个。',
              view: '日、月或年视图。',
              'min, max': '可选择的第一天和最后一天。',
              unavailable: '排除其他日期，例如节假日。',
              months: '并排显示的月份数。',
              weekNumbers: '显示 ISO 周数。',
              firstDay: '一周的第一天，1 表示星期一。默认遵循语言环境。',
              locale: '用于格式化名称和数字，并决定一周的第一天。',
              labels: '日历显示或播报的所有文本，供翻译使用。',
              picked: '每次选择时发出：一个日期，或选完两端后的范围。',
              focusDate: '将键盘焦点移到某一天，并显示它所在的月份。',
            },
          },
          NuiDateRange: {
            summary: '一个日期范围。',
            members: { 'start, end': '第一天和最后一天，两端都包含在内。' },
          },
        },
        keyboard: [
          ['向左 / 向右箭头键', '移到前一天或后一天。在从右到左的文本中左右方向相反。'],
          ['向上 / 向下箭头键', '移到上一周或下一周。'],
          ['Home / End', '移到本周的第一天或最后一天。'],
          ['Page Up / Page Down', '移到上个月或下个月；按住 Shift 键时移到上一年或下一年。'],
          ['Enter 或空格键', '选择该日期；在月份或年份视图中，则进入所选的月份或年份。'],
          ['Esc', '撤销范围的第一次选择，或返回原来的视图。'],
        ],
        notes: [
          '每个月都是一个以其标题命名的 <code>grid</code>，星期的全称放在 <code>abbr</code> 中。',
          '每一天都以完整日期命名，并附加“Today”“unavailable”以及范围端点等信息。<code>aria-selected</code> 标记已选中的日期，<code>aria-disabled</code> 标记无法选择的日期。',
          '网格在 Tab 键顺序中只占一个位置，使用漫游式 <code>tabindex</code>。前后翻月按钮会播报新的月份。',
        ],
      },
      'date-picker': {
        name: '日期选择器',
        title: 'Angular 日期和时间选择器组件',
        summary: '按分段输入日期或时间，或在日历中选择。',
        description:
          '无障碍的 Angular 日期、时间和日期范围选择器：按语言环境的顺序分段输入，提供弹出框日历和快捷选项，并支持表单。',
        apiDescription:
          'Needless UI 日期选择器的 API 参考：nui-date-field、nui-time-field、nui-date-picker 和 nui-date-range-picker，以及快捷选项。',
        a11yDescription:
          'Needless UI 日期选择器的键盘操作与无障碍支持：日期的每个部分都是一个 spinbutton，日历则位于对话框中。',
        overview: [
          '日期和时间输入框按分段输入：日、月、年按语言环境的顺序排列，随后是按其 12 或 24 小时制显示的小时和分钟。每个分段都是一个 spinbutton：输入数字后会自动跳到下一段，也可以用方向键逐步调整。粘贴完整的日期，所有分段都会自动填好。',
          '选择器在弹出框中加入日历，可以选择单个日期，也可以借助快捷选项选择日期范围。值是普通的 ISO 字符串，例如 <code>2026-09-25</code> 或 <code>2026-09-25T09:30</code>，每个输入框都支持 Signal Forms、响应式表单和 <code>ngModel</code>。',
          '本站的示例会跟随页面语言：切换语言，即可看到顺序、分隔符和数字随之变化。',
        ],
        examples: {
          fields: {
            title: '日期和时间输入框',
            text: '输入数字，或使用方向键。再按一次 Backspace 会退回上一个分段。<code>minuteStep</code> 设置方向键每次调整分钟的幅度。',
          },
          pickers: {
            title: '日期选择器',
            text: '按钮会打开日历并定位到所选日期，选中日期后日历随即关闭。使用 <code>granularity="minute"</code> 时，选择器还可以输入时间，而日历只改变日期。',
          },
          range: {
            title: '日期范围',
            text: '两个输入框加一个双月日历。<code>nuiDateRangePresets()</code> 会添加常用范围；在按顺序设置好两端之前，值一直为 null。',
          },
        },
        api: {
          NuiDateField: {
            summary: '按分段输入的日期，或日期和时间。',
            members: {
              value: '值；在所有分段都填好之前为 null。',
              granularity: '停在日，或继续到小时、分钟或秒。',
              'min, max': '最早和最晚的值。超出这个范围时，输入框的值无效。',
              placeholder: '空分段用方向键调整时的起始值。',
              hourCycle: '12 或 24 小时制。默认遵循语言环境。',
              minuteStep: '方向键每次调整分钟的幅度。',
              'disabled, readonly': '禁止修改。',
              locale: '决定顺序、分隔符、数字和小时制。',
              labels: '输入框播报的所有文本，供翻译使用。',
              invalid: '值是否超出 <code>min</code> 和 <code>max</code> 的范围。',
              focus: '让第一个空分段获得焦点。',
            },
          },
          NuiTimeField: {
            summary: '按分段输入的时间。它接受与日期输入框相同的输入属性。',
            members: { granularity: '停在小时、分钟或秒。' },
          },
          NuiDatePicker: {
            summary: '带弹出框日历的日期输入框。它接受日期输入框的输入属性，以及下面这些。',
            members: {
              unavailable: '日历中不可选择的日期。',
              'firstDay, weekNumbers': '传给日历。',
              labels: '输入框、按钮和日历的文本。',
              show: '打开日历。',
            },
          },
          NuiDateRangePicker: {
            summary: '两个日期输入框加一个范围日历。它接受日期选择器的输入属性，以及下面这些。',
            members: {
              value: '日期范围；在按顺序设置好两端之前为 null。',
              presets: '一键即可选择的具名范围。',
              months: '日历中并排显示的月份数；在窄屏上只显示一个月。',
            },
          },
          NuiDateRangePreset: {
            summary: '具名范围，可以是固定的，也可以在选择时生成。',
            members: {
              label: '它的名称。',
              range: '范围，或生成范围的函数。',
            },
          },
        },
        keyboard: [
          ['数字键', '在分段中输入。后面不可能再接其他数字时，会自动跳到下一段。'],
          ['向上 / 向下箭头键', '调整分段的值；Page Up / Page Down 的调整幅度更大。'],
          ['向左 / 向右箭头键、Tab', '移到上一个或下一个分段。'],
          ['Backspace', '清空分段，再按一次则退回上一个分段。'],
          ['A / P', '设为上午（AM）或下午（PM）。'],
        ],
        notes: [
          '输入框是一个 <code>group</code>：请用 <code>aria-label</code> 或 <code>aria-labelledby</code> 为它命名。每个分段都是以其所代表部分命名的 <code>spinbutton</code>，月份会读出名称，空分段读作“Empty”。',
          '分段是可编辑的文本，因此触摸屏键盘会以数字键盘打开。',
          '选择器的按钮名为“Choose a date”，其弹出框是一个 <code>dialog</code>。选择日期后，焦点会回到按钮上。',
          '其中的日历与<a href="/components/calendar">日历</a>的行为完全一致。',
        ],
      },
      scheduler: {
        name: '日程表',
        title: 'Angular 日程表组件',
        summary: '以月、周、日或日程列表显示日程，拖动即可放到合适的位置。',
        description:
          '无障碍的 Angular 日程表：提供月、周、日和日程列表视图，重叠的日程并排显示，可拖动来移动日程和调整时长，并支持完整的键盘操作。',
        apiDescription:
          'Needless UI 日程表的 API 参考：nui-scheduler 的视图、日程、编辑与选择、输出属性，以及日程模板。',
        a11yDescription:
          'Needless UI 日程表的键盘操作与无障碍支持：由日期和时间构成的网格、具名的日程，以及能代替每种拖动的键盘操作。',
        overview: [
          '日程表以月、周、日或日程列表的形式显示日程。日程是带 ISO 时间的普通数据；时间重叠的日程平分宽度，跨越午夜的日程在两天中都会显示，全天日程则以横条的形式横跨顶部。',
          '日程表从不自行修改你的日程。拖动日程或其底边时，<code>eventChange</code> 会报告新的时间；在网格上选择时间时，<code>slotSelect</code> 会报告所选的时间。<code>rangeChange</code> 会告诉你显示的是哪些日期，方便你加载这些日期的日程。',
          '指针能做的，键盘也都能做：网格在 Tab 键顺序中只占一个位置，方向键可在日期和时间之间移动，Alt 加方向键则移动日程。',
        ],
        examples: {
          planner: {
            title: '规划一周',
            text: '使用 <code>editable</code> 和 <code>selectable</code> 时，拖动日程即可移动它，拖动其底边即可调整时长，在空闲时间上拖动即可添加日程。本示例根据输出更新自己的日程。',
          },
          month: {
            title: '月视图与日程列表',
            text: '跨越多天的日程显示为横条；日程较多的日期会显示还有几条未列出。<code>views</code> 只提供月视图和未来 <code>agendaDays</code> 天的日程列表。',
          },
          rooms: {
            title: '会议室的一天',
            text: '<code>nuiSchedulerEvent</code> 绘制每条预订，并附上会议室和组织者。<code>slotMinutes="15"</code> 让行分得更细。',
          },
        },
        api: {
          NuiScheduler: {
            summary: '按月、周、日或日程列表显示的日程。',
            members: {
              events: '要显示的日程。',
              view: '当前显示的视图。',
              views: '用户可以切换的视图。',
              date: '显示的日期，也是键盘焦点所在的日期。',
              slotMinutes: '时间网格每行的分钟数，也是日程移动的步长。',
              scrollHour: '时间网格打开时定位到的小时。',
              agendaDays: '日程列表向后显示的天数。',
              editable: '可以用指针和键盘移动日程、调整时长。',
              selectable: '可以在网格上选择时间，用来创建日程。',
              firstDay: '一周的第一天，1 表示星期一。默认遵循语言环境。',
              headingLevel: '标题的级别；日程列表中各日期的标题再低一级。',
              locale: '用于格式化日期和时间。',
              labels: '日程表显示或播报的所有文本，供翻译使用。',
              eventClick: '发出被点击或按 Enter 键打开的日程。',
              eventChange: '移动日程或调整时长后，发出日程的新时间。',
              slotSelect: '发出在网格上选择的时间。',
              rangeChange: '显示的第一天和最后一天变化时，发出这两天。',
            },
          },
          NuiSchedulerEvent: {
            summary:
              '一条日程。有具体时间的日程不包含结束时刻；全天日程的结束日期就是它的最后一天。',
            members: {
              'id, title': '它的键，以及显示的内容。',
              'start, end': '日期和时间；全天日程只用日期。',
              allDay: '默认取决于 <code>start</code> 是否不带时间。',
              tone: '它的颜色。',
              editable: '无论日程表如何设置，它能否被移动。',
              data: '需要随它一起保存的其他数据。',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: '绘制日程。上下文中包含日程及其文本形式的时间。',
            members: {},
          },
        },
        keyboard: [
          ['方向键', '按天和按时间段移动。在从右到左的文本中左右方向相反。'],
          ['Page Up / Page Down', '向前或向后翻一个月、一周或一天。'],
          ['Shift + 方向键', '扩大所选的时间范围。'],
          ['在单元格上按 Enter 或空格键', '进入其中的日程，或选择它的时间。'],
          ['在日程上按向上 / 向下箭头键', '移到单元格中的上一个或下一个日程。'],
          ['在日程上按 Alt + 方向键', '将日程移动一个时间段或一天。'],
          ['Alt + Shift + 向上或向下箭头键', '缩短或延长日程。'],
          ['Esc', '返回单元格、取消所选时间，或取消拖动。'],
        ],
        notes: [
          '月、周和日视图都是以其标题命名的 <code>grid</code>。日期作为列标题，时间作为行标题，因此每个单元格都会连同其日期和时间一起朗读。',
          '每条日程都是一个按钮，以其标题、日期和时间命名，例如“Standup, Friday, September 25, 9:00 – 9:30 AM”。移动日程或调整时长后，会播报新的时间。',
          '每种拖动都有对应的键盘操作，因此不用指针也能完成所有操作。',
          '各视图是一组切换按钮；移到另一周或另一个月时，会播报它的标题。',
        ],
      },
      splitter: {
        name: '分隔面板',
        title: 'Angular 可调整大小的分隔面板组件',
        summary: '左右并排或上下堆叠的面板，拖动分隔条即可调整大小。',
        description:
          '无障碍的 Angular 分隔面板：左右并排或上下堆叠的可调整大小的面板，支持尺寸限制、可折叠面板、保存尺寸和完整的键盘操作。',
        apiDescription:
          'Needless UI 分隔面板的 API 参考：nuiSplitter 的方向和尺寸、面板的尺寸限制与折叠，以及面板之间的分隔条。',
        a11yDescription:
          'Needless UI 分隔面板的键盘交互与无障碍支持：带有数值、可聚焦的窗口分隔条，以及方向键、Home、End 和 Enter 键。',
        overview: [
          '分隔面板把空间分给多个面板，每两个相邻面板之间都有一个分隔条。拖动分隔条，或让它获得焦点后使用方向键即可调整。尺寸是总和为 100 的百分比，可以用 <code>[(sizes)]</code> 绑定。',
          '每个面板的初始尺寸、最小尺寸和最大尺寸都可以用像素、rem 或百分比指定。设置了 <code>collapsible</code> 的面板在被拖到小于最小尺寸的一半时，或在其分隔条上按 Enter 键时会折叠起来，展开时则恢复为折叠前的尺寸。',
          '设置 <code>storageKey</code> 后，尺寸会保存在 <code>localStorage</code> 中，用户下次访问时，布局仍是离开时的样子。',
        ],
        examples: {
          editor: {
            title: '编辑器',
            text: '文件、代码和预览三个面板。文件和预览可以折叠，代码至少保留 30% 的宽度，各面板的尺寸会被保存下来。',
          },
          stacked: {
            title: '上下堆叠的面板',
            text: '<code>orientation="vertical"</code> 让面板上下堆叠，<code>[(sizes)]</code> 则会随时读取变化中的尺寸。',
          },
        },
        api: {
          NuiSplitter: {
            summary: '一组面板，面板之间有分隔条。',
            members: {
              orientation: '左右并排，还是上下堆叠。',
              sizes: '各面板所占的比例，以百分比表示，按顺序排列。',
              storageKey: '以此键把尺寸保存在 <code>localStorage</code> 中。',
              step: '方向键每次移动分隔条的幅度，以百分比表示。按住 Shift 时加倍。',
              move: '将某个面板之后的边界移动指定的百分比。',
            },
          },
          NuiSplitterPane: {
            summary: '一个面板。它的各项尺寸可以用像素、rem 或百分比表示。',
            members: {
              defaultSize: '没有可恢复的尺寸时，面板的初始尺寸。',
              min: '面板的最小尺寸。',
              max: '面板的最大尺寸。',
              collapsible: '面板可以折叠：拖到小于最小尺寸的一半，或按 Enter 键。',
              collapsedSize: '折叠后的尺寸，例如只显示一列图标的窄条。',
              label: '为调整此面板大小的分隔条命名。',
            },
          },
          NuiSplitterHandle: {
            summary: '两个面板之间的分隔条。',
            members: {
              label: '分隔条的名称，在面板的标签没有为它命名时使用。',
              disabled: '分隔条无法移动。',
              toggle: '折叠旁边的面板，或将其展开。',
            },
          },
        },
        keyboard: [
          ['向左 / 向右箭头键', '移动左右并排的面板之间的分隔条。在从右到左的文本中左右方向相反。'],
          ['向上 / 向下箭头键', '移动上下堆叠的面板之间的分隔条。'],
          ['Shift + 方向键', '移动距离加倍。'],
          ['Home / End', '把分隔条前面的面板调整到最小或最大尺寸。'],
          ['Enter', '折叠可折叠的面板，或将其展开。'],
        ],
        notes: [
          '每个分隔条都是一个可聚焦的 <code>separator</code>，与 WAI-ARIA 的窗口分隔条（window splitter）模式一致：它的值是前一个面板的尺寸，介于该面板的尺寸限制之间，<code>aria-controls</code> 指向该面板。',
          '请通过面板的 <code>label</code> 为分隔条命名：有了“Files”这样的名称，屏幕阅读器就能说明分隔条调整的是哪个面板。',
          '双击分隔条也能折叠对应的面板；拖动时会捕获指针，因此即使快速移动也不会脱离分隔条。',
        ],
      },
      tour: {
        name: '漫游式引导',
        title: 'Angular 漫游式引导组件',
        summary: '为每个步骤显示一张卡片，放在它所介绍的内容旁边，并调暗周围的页面。',
        description:
          '无障碍的 Angular 产品引导：每个步骤的卡片显示在目标旁边，目标周围有聚光灯效果，支持可交互的步骤，结束后焦点会回到原处。',
        apiDescription:
          'Needless UI 漫游式引导的 API 参考：nui-tour 的步骤、open 和 step 绑定、输出属性，以及每个步骤的目标、位置和钩子。',
        a11yDescription:
          'Needless UI 漫游式引导的键盘交互与无障碍支持：每张卡片都是以标题命名的对话框，焦点保留在内并最终归还，按 Esc 键即可退出。',
        overview: [
          '漫游式引导带用户一步步浏览页面。每个步骤都指向一个元素，在它旁边显示一张卡片，并调暗周围的页面；没有目标的步骤显示在页面中央。',
          '步骤只是普通数据：一个目标（选择器、元素，或查找元素的函数）、一个标题，以及文本或模板形式的内容。<code>beforeShow</code> 会先运行，因此步骤可以先打开目标所在的面板；不在视野中的目标会被自动滚动到可见位置。',
          '每张卡片都是一个对话框。它是模态的，除非该步骤设置了 <code>interactive</code>：这时用户可以操作它所指向的元素。按 Esc 键会结束引导，焦点回到原来的位置。',
        ],
        examples: {
          basics: {
            title: '初识应用',
            text: '四个步骤，第一步没有目标。<code>finished</code> 和 <code>dismissed</code> 可以区分两种结束方式。',
          },
          interactive: {
            title: '动手试试',
            text: '<code>beforeShow</code> 在第二步指向设置之前先把设置打开，<code>interactive</code> 让用户在卡片显示期间也能操作开关。',
          },
        },
        api: {
          NuiTour: {
            summary: '一个漫游式引导。',
            members: {
              steps: '按顺序排列的步骤。',
              open: '引导是否正在进行。',
              step: '当前显示的步骤，从 0 开始。',
              labels: '它显示的所有文本，供翻译使用。',
              finished: '完成最后一步时发出。',
              dismissed: '引导提前结束时，发出结束时所在的步骤。',
              start: '开始引导，从第一步或指定的步骤开始。',
              end: '结束引导，并标记为完成或中途退出。',
            },
          },
          NuiTourStep: {
            summary: '引导中的一个步骤。',
            members: {
              target: '步骤所指向的对象。没有目标时，卡片显示在中央。',
              title: '卡片的标题。',
              content: '卡片的文本，或一个模板。',
              side: '卡片位于目标的哪一侧。',
              align: '卡片与目标的对齐方式。',
              padding: '聚光灯中目标周围留出的空间，单位为像素。',
              interactive: '卡片显示期间，目标仍可操作。',
              beforeShow: '在步骤显示之前运行。如果返回 Promise，引导会等待它完成。',
            },
          },
        },
        keyboard: [
          ['Tab', '在卡片的按钮之间移动。在模态步骤中，焦点保持在卡片内。'],
          ['Enter 或空格键', '按下获得焦点的按钮：Next、Back 或 Done。'],
          ['Esc', '结束引导。'],
        ],
        notes: [
          '每张卡片都是一个 <code>dialog</code>，以其标题命名，并以其内容作为描述。每一步焦点都会移到卡片的主按钮上，引导结束后回到原来的位置。',
          '模态步骤会让页面的其余部分变为不可交互（inert）。可交互的步骤不是模态的，因此用户既能用指针，也能用键盘到达其目标。',
          '进度以文本表示，例如“2 of 4”；圆点只是把进度画出来。',
        ],
      },
      dropzone: {
        name: '文件拖放区',
        title: 'Angular 文件拖放区与上传组件',
        summary: '拖放或选择文件，支持校验、预览，以及显示进度的上传。',
        description:
          '无障碍的 Angular 文件拖放区：支持拖放、文件夹和粘贴，校验类型和大小，预览图片，上传时显示进度并可重试。',
        apiDescription:
          'Needless UI 文件拖放区的 API 参考：nui-dropzone 的文件与校验、上传函数及其队列、输出属性和文本。',
        a11yDescription:
          'Needless UI 文件拖放区的键盘交互与无障碍支持：本身就是按钮的拖放区、会播报的结果，以及具名的进度条和操作按钮。',
        overview: [
          '文件拖放区接收拖放到它上面的文件、通过文件选择器选择的文件，以及粘贴的文件。拖入的文件夹会被逐层读取，每个文件都保留自己的路径。',
          '每个文件都会根据 <code>accept</code>、<code>maxSize</code>、<code>minSize</code>、<code>maxFiles</code> 以及你的 <code>validate</code> 函数进行校验，被拒绝的文件会连同原因一起列出。图片会显示预览。',
          '没有 <code>upload</code> 函数时，拖放区会把文件保存在 <code>[(files)]</code> 中，供表单使用。提供该函数后，它会每次上传几个文件，并支持显示进度、取消和重试。请把上传的 <code>signal</code> 传给 <code>fetch</code>，这样取消时上传才会真正停止。',
        ],
        examples: {
          upload: {
            title: '上传',
            text: '模拟上传会分阶段报告进度。名称中带有“fail”的文件会上传失败，用来演示重试；<code>directory</code> 会添加一个选择文件夹的按钮。',
          },
          attach: {
            title: '表单附件',
            text: '没有 <code>upload</code>：拖放区在 <code>[(files)]</code> 中最多保存三个文档，放在其中的自定义文字会替换默认文字。',
          },
        },
        api: {
          NuiDropzone: {
            summary: '用于拖放或选择文件的区域。',
            members: {
              files: '它保存的文件，按顺序排列。',
              accept: '可接收的文件类型，写法同 <code>&lt;input type="file"&gt;</code>。',
              multiple: '一次可接收多个文件。',
              directory: '提供一个选择文件夹的按钮。',
              maxFiles: '最多可保存的文件数。',
              'maxSize, minSize': '文件的最大和最小大小，单位为字节。',
              validate: '校验每个文件。返回一条消息即拒绝该文件。',
              upload: '发送一个文件。不提供时，文件只会被保存。',
              concurrency: '同时上传的文件数。',
              hint: '显示在拖放区文字下方的一行说明，例如可接收哪些文件。',
              disabled: '不接收任何文件。',
              labels: '它显示或播报的所有文本，供翻译使用。',
              uploaded: '发出上传完成的文件，以及 <code>upload</code> 返回的结果。',
              rejected: '发出被拒绝的文件及其原因。',
              queue: '上传队列，可在代码中取消、重试和读取进度。',
              take: '在代码中添加文件，并逐个校验。',
            },
          },
          NuiUploader: {
            summary: '发送一个文件：以 0 到 1 报告进度，并在收到中止信号时停止。',
            members: {
              '(file, context)': '返回一个 Promise，其结果为服务器返回的任何内容。',
            },
          },
        },
        keyboard: [
          ['Enter 或空格键', '在拖放区上：打开文件选择器。'],
          ['Ctrl + V（⌘ + V）', '在拖放区上：添加粘贴的文件。'],
          ['Tab', '在拖放区和各文件的操作按钮之间移动。'],
        ],
        notes: [
          '拖放区本身是一个按钮，因此无需指针也能使用，提示文字则作为它的描述。',
          '添加的文件和被拒绝的文件都会被播报。每个进度条都是以对应文件命名的 <code>progressbar</code>，每个操作按钮都以其作用命名，例如“Remove beach.jpg”。',
          '预览只是装饰：文件名已经说明了是哪个文件。',
        ],
      },
      mask: {
        name: '输入掩码',
        title: 'Angular 输入掩码指令',
        summary: '在输入时自动格式化的文本框：日期、银行卡号、IBAN 和各类代码。',
        description:
          'Angular 输入掩码：在用户输入时格式化文本框，光标始终停在原位，提供银行卡号和 IBAN 的辅助函数，并支持表单校验。',
        apiDescription:
          'Needless UI 输入掩码的 API 参考：nuiMask 指令、它的 token 与值，以及用于银行卡号和 IBAN 的辅助函数。',
        a11yDescription:
          'Needless UI 输入掩码的无障碍支持：保留自身标签的原生输入框、手机上的数字键盘，以及跳过固定字符的删除。',
        overview: [
          '掩码会在用户输入时格式化文本框：<code>00/00/0000</code> 会自动补上斜杠，<code>AA 000 AA</code> 则按顺序接受字母和数字。不符合的字符不会被输入；在中间输入时，光标也会停在原位。',
          '掩码由 token 和固定字符组成：<code>0</code> 表示数字，<code>a</code> 表示字母，<code>*</code> 表示两者皆可，<code>A</code> 和 <code>X</code> 则是用于代码的对应写法，输入后转为大写。你可以用 <code>tokens</code> 添加自己的 token，也可以传入一个根据已输入内容选择掩码的函数，<code>nuiCardMask</code> 就是这样按卡品牌选择掩码的。',
          '值就是显示出来的内容；设置 <code>unmask</code> 后则只包含数据。掩码支持 Signal Forms、响应式表单和 <code>ngModel</code>，未填完的值会被视为错误。',
        ],
        examples: {
          formats: {
            title: '格式',
            text: '日期、时间、车牌号，以及用自定义 token 接受十六进制数字的颜色值。',
          },
          payment: {
            title: '支付信息',
            text: '基于 Signal Forms 的输入框。卡号掩码随卡品牌变化，American Express 的安全码为四位，<code>nuiCardValid</code> 和 <code>nuiIbanValid</code> 负责校验号码。',
          },
        },
        api: {
          NuiMask: {
            summary: '作用于原生文本框的掩码。',
            members: {
              nuiMask: '掩码，或根据已输入数据选择掩码的函数。',
              tokens: '要添加或替换的掩码字符。',
              unmask: '值只包含数据，不含固定字符。',
              value: '值：显示的内容；设置 <code>unmask</code> 时为数据。',
              raw: '已输入的数据，不含固定字符。',
              complete: '掩码中的每个位置是否都已填满。',
            },
          },
          Helpers: {
            summary: '用于格式化、校验和构建掩码的函数。',
            members: {
              'nuiMaskFormat, nuiUnmask': '用掩码格式化一个值，或从格式化后的值中取出数据。',
              nuiCardMask: '银行卡号的掩码，按卡品牌印在卡上的方式分组。',
              nuiCardBrand: '根据卡号开头的数字判断出的卡品牌。',
              'nuiCardValid, nuiLuhn': '卡号的长度是否符合其卡品牌，并通过 Luhn 校验。',
              nuiIbanMask: 'IBAN 的掩码，长度与该国的 IBAN 一致。',
              nuiIbanValid: 'IBAN 的长度是否符合其所属国家，且校验位正确。',
            },
          },
        },
        keyboard: [
          ['Backspace', '删除光标前的字符，并跳过固定字符。'],
          ['Delete', '删除光标后的字符，并跳过固定字符。'],
        ],
        notes: [
          '掩码作用于你自己的 <code>&lt;input&gt;</code>，因此标签和提示都保持你写的样子。请在那里说明需要输入什么：掩码本身并不是说明。',
          '只含数字的掩码会设置 <code>inputmode="numeric"</code>，让手机显示数字键盘，除非输入框自己设置了该属性。',
          '接受任何书写系统的数字，并统一写成 0 到 9。',
        ],
      },
      'phone-field': {
        name: '电话号码输入框',
        title: 'Angular 电话号码输入框组件',
        summary: '国家选择器加上号码，号码按该国的习惯分组显示。',
        description:
          '无障碍的 Angular 电话号码输入框：带国家选择器，号码按各国习惯分组，可输入或粘贴国际区号，值采用 E.164 格式。',
        apiDescription:
          'Needless UI 电话号码输入框的 API 参考：nui-phone-field 的 value 和 country、可选的国家，以及读写号码的辅助函数。',
        a11yDescription:
          'Needless UI 电话号码输入框的无障碍支持：带名称的国家选择器、区号选定国家时的播报，以及浏览器自动填充。',
        overview: [
          '电话号码输入框由国家选择器和号码组成。号码在输入时按其所属国家的习惯分组，值是 E.164 格式的号码，例如 <code>+393331234567</code>。',
          '用户可以按自己熟悉的方式输入号码。开头的 0（或北美号码前的 1）会被当作国内前缀，不计入值中。输入或粘贴国际区号（例如 <code>+44</code> 或 <code>0044</code>）会选中对应的国家；多个国家共用同一个国际区号时，号码开头的地区区号也能确定国家。',
          '初始国家取自语言环境，<code>countries</code> 可以限定列表。配合表单使用时，对所属国家而言过短或过长的号码会被视为错误。要做完整校验，请同时在服务器上检查号码。',
        ],
        examples: {
          basic: {
            title: '输入号码',
            text: '以 <code>+</code> 和国际区号开头，输入时就会切换国家。',
          },
          countries: {
            title: '自选国家',
            text: '<code>countries</code> 提供了十一个国家，输入框配合响应式表单的 <code>FormControl</code> 使用，<code>nuiFormatPhone</code> 再把值写成便于阅读的形式。',
          },
        },
        api: {
          NuiPhoneField: {
            summary: '电话号码输入框。',
            members: {
              value: 'E.164 格式的号码，或为空。',
              country: '国家，以其地区代码表示。',
              countries: '可选的国家，以地区代码表示。',
              locale: '国家名称所用的语言。',
              label: '号码的名称，在没有 <code>&lt;label for&gt;</code> 为它命名时使用。',
              inputId: '号码输入框的 id，供 <code>&lt;label for&gt;</code> 使用。',
              placeholder: '号码输入框为空时显示的文本。',
              invalid: '将号码标记为无效。',
              disabled: '禁止修改。',
              labels: '它显示或播报的所有文本，供翻译使用。',
            },
          },
          Helpers: {
            summary: '处理电话号码的函数。',
            members: {
              nuiParsePhone: '把任意写法的号码解析为地区、国际区号和国内号码。',
              nuiFormatPhone: '按所属国家的分组方式写出号码，或写成 E.164 格式。',
              nuiPhoneValid: '号码是否带有已知的国际区号，且长度符合其所属国家。',
            },
          },
        },
        keyboard: [
          ['在国家选择器上按字母键', '跳到以这些字母开头的国家。'],
          ['Enter 或空格键', '打开国家列表，或选择一个国家。'],
          ['Backspace', '在号码中删除一位数字，并跳过空格和括号。'],
        ],
        notes: [
          '国家选择器名为“Country code”，会读出国旗和国际区号。当国际区号或地区区号选定某个国家时，会播报新的国家。',
          '请用 <code>&lt;label for&gt;</code> 加 <code>inputId</code>，或用 <code>label</code> 为号码命名。',
          '号码输入框带有 <code>autocomplete="tel"</code>，因此浏览器可以自动填入包括国际区号在内的完整号码，手机也会显示拨号键盘。',
        ],
      },
      'color-picker': {
        name: '颜色选择器',
        title: 'Angular OKLCH 颜色选择器组件',
        summary: '以 OKLCH 选择颜色，带有滑块、色块、吸管和对比度检查。',
        description:
          '无障碍的 Angular 颜色选择器，基于 OKLCH：支持广色域 P3 颜色、所有 CSS 颜色语法、色块、吸管，以及 WCAG 对比度检查。',
        apiDescription:
          'Needless UI 颜色选择器的 API 参考：nui-color-picker 的值、格式和色域，色块与对比度，以及处理颜色的辅助函数。',
        a11yDescription:
          'Needless UI 颜色选择器的键盘操作与无障碍支持：带两个值的取色区域滑块、原生滑块，以及用文字说明的对比度等级。',
        overview: [
          '颜色选择器基于 OKLCH 工作，这是现代 CSS 中符合人眼感知的色彩空间。在取色区域中，色度从左到右由灰色增加到屏幕在该亮度下能显示的最大值，因此每个点都是可用的颜色；转动色相时，手柄也会停在原处。',
          '输入框接受任何 CSS 颜色，包括颜色名称；格式按钮会把值写成 hex、<code>rgb()</code>、<code>hsl()</code>、<code>oklch()</code> 或 <code>color(display-p3)</code>。超出某种格式色域的颜色，会按 CSS 的方式映射到该色域内，并保持亮度和色相不变。',
          '添加 <code>swatches</code> 可提供候选颜色，添加 <code>contrastWith</code> 则可按 WCAG 2 的算法检查颜色与背景的对比度。浏览器支持吸管时，还会有一个按钮用来从屏幕上取色。',
        ],
        examples: {
          brand: {
            title: '品牌色',
            text: '带名称的色块，以及白色文字在该颜色上的对比度：选一个浅色，AA 就不达标。',
          },
          wide: {
            title: '广色域',
            text: '<code>gamut="p3"</code> 用 Display P3 颜色填满取色区域，并用虚线标出 sRGB 的边界。值仍以 <code>oklch()</code> 表示。',
          },
          popover: {
            title: '放在弹出框中',
            text: '一个显示当前颜色的按钮，会在<a href="/components/popover">弹出框</a>中打开选择器。',
          },
        },
        api: {
          NuiColorPicker: {
            summary: '基于 OKLCH 的颜色选择器。',
            members: {
              value: '按格式写出的颜色；选择颜色之前为空。',
              format: '值的写法。',
              formats: '格式按钮依次切换的格式。',
              gamut: '取色区域包含的颜色：sRGB 或 Display P3。',
              alpha: '显示不透明度滑块。',
              swatches: '可供选择的颜色，可带名称。',
              contrastWith: '用来检查对比度的背景色。',
              eyeDropper: '在浏览器支持时显示吸管。',
              disabled: '禁止修改。',
              labels: '它显示或播报的所有文本，供翻译使用。',
              color: '选中的颜色，以 OKLCH 表示。',
            },
          },
          Helpers: {
            summary: '处理颜色的函数。',
            members: {
              nuiParseColor: '读取以任意 CSS 语法写成的颜色。',
              nuiFormatColor: '按某种格式写出颜色。',
              nuiToGamut: '像 CSS 一样，把颜色映射到 sRGB 或 Display P3 色域内。',
              nuiContrast: '颜色在背景上的 WCAG 2 对比度。',
            },
          },
        },
        keyboard: [
          ['向左 / 向右箭头键', '在取色区域中减少或增加色度。'],
          ['向上 / 向下箭头键', '在取色区域中调亮或调暗。'],
          ['Shift + 方向键', '移动幅度变为十倍。'],
          ['Home / End', '在取色区域中把色度调到零或最大。'],
          ['Page Up / Page Down', '在取色区域中大幅调亮或调暗。'],
        ],
        notes: [
          '取色区域的手柄是一个名为“Color”的 <code>slider</code>，会读出它的两个值，例如“Lightness 62%, chroma 75%”。色相和不透明度则是原生的 range 输入框。',
          '色块是以其标签命名的按钮，与当前颜色一致时处于按下状态。',
          'AA 和 AAA 会用文字说明“passes”或“fails”，而不只靠颜色表示；在强制颜色模式下，颜色本身保持不变。',
        ],
      },
      carousel: {
        name: '轮播',
        title: 'Angular 轮播图与幻灯片组件',
        summary: '一行可滚动并自动吸附的幻灯片，带有按钮、圆点和自动轮播。',
        description:
          '无障碍的 Angular 轮播：原生滚动吸附与滑动手势，一屏显示多张幻灯片，圆点、循环，以及按 WCAG 要求暂停和停止的自动轮播。',
        apiDescription:
          'Needless UI 轮播的 API 参考：nui-carousel 的每屏张数、索引、循环和自动轮播，它的方法，以及 nuiCarouselSlide 指令。',
        a11yDescription:
          'Needless UI 轮播的键盘交互与无障碍支持：WAI-ARIA 轮播模式、自动轮播按钮、具名的幻灯片，以及切换后的播报。',
        overview: [
          '轮播把幻灯片排成一行，这一行可以滚动，并会吸附到每张幻灯片上：滑动、触控板和方向键都能以原生方式移动它，上一张、下一张按钮和圆点也可以。用 <code>nuiCarouselSlide</code> 标记每张幻灯片，并以其标题命名。',
          '用 <code>perView</code> 设置一次显示一张还是多张幻灯片，或用 <code>perView="auto"</code> 让幻灯片保持各自的宽度。<code>[(index)]</code> 绑定可见的第一张幻灯片，<code>loop</code> 则让轮播到头后回到开头。',
          '设置 <code>autoplay</code> 后，轮播会自动切换，并由一个自动轮播按钮控制。指针悬停时自动轮播暂停；键盘焦点进入时，则按 WAI-ARIA 模式的要求彻底停止。',
        ],
        examples: {
          featured: {
            title: '精选旅程',
            text: '每六秒切换一张幻灯片，自动轮播按钮上的圆环会随之逐渐填满。悬停可暂停自动轮播，用 Tab 键移入则会停止。',
          },
          shelf: {
            title: '卡片货架',
            text: '<code>perView="auto"</code> 保持每张卡片的宽度，能放下几张就显示几张。圆点会跟随滑动，<code>[(index)]</code> 则告诉你当前的位置。',
          },
        },
        api: {
          NuiCarousel: {
            summary: '由幻灯片组成的轮播。',
            members: {
              label: '为轮播命名。',
              index: '可见的第一张幻灯片，从 0 开始。',
              perView: '同时显示的幻灯片数量；设为 <code>auto</code> 时，由幻灯片自行决定宽度。',
              gap: '幻灯片之间的间距，可以是任意 CSS 长度。',
              loop: '越过最后一张时回到第一张，反之亦然。',
              autoplay: '自动切换时两张幻灯片之间的毫秒数；为 0 时不自动切换。',
              'controls, indicators': '上一张和下一张按钮，以及圆点。',
              labels: '它显示或播报的所有文本，供翻译使用。',
              'next, previous': '前进或后退一张幻灯片。',
              goTo: '把某张幻灯片滚动到可见区域。',
            },
          },
          NuiCarouselSlide: {
            summary: '一张幻灯片。',
            members: { nuiCarouselSlide: '幻灯片的标题，朗读时代替其位置。' },
          },
        },
        keyboard: [
          ['Tab', '依次移到自动轮播按钮、上一张和下一张按钮、幻灯片，最后是圆点。'],
          ['在幻灯片上按向左 / 向右箭头键', '滚动到上一张或下一张幻灯片。'],
          ['Enter 或空格键', '按下获得焦点的按钮或圆点。'],
        ],
        notes: [
          '轮播是带有 <code>aria-roledescription="carousel"</code> 的 <code>region</code>，每张幻灯片是带有 <code>aria-roledescription="slide"</code> 的 <code>group</code>，名称形如“Lake Como, 2 of 4”。',
          '自动轮播按钮排在最前面，并说明按下后会做什么。指针悬停时自动轮播暂停，键盘焦点进入时则停止，因此它绝不会移动用户正在阅读的内容。',
          '通过滑动、按钮或圆点切换后，会播报轮播停在了哪里；自动轮播时则保持安静。',
        ],
      },
      editor: {
        name: '富文本编辑器',
        title: 'Angular 富文本编辑器组件',
        summary: '标题、列表、链接和各种格式，带有工具栏，输入时还能直接使用 Markdown。',
        description:
          '无障碍的 Angular 富文本编辑器：工具栏、快捷键、输入时自动转换 Markdown、干净的粘贴、链接和撤销，值可以是 HTML 或 Markdown。',
        apiDescription:
          'Needless UI 富文本编辑器的 API 参考：nui-editor 的值与格式、工具栏按钮、文本、命令，以及 HTML 和 Markdown 转换函数。',
        a11yDescription:
          'Needless UI 富文本编辑器的键盘交互与无障碍支持：多行文本框、WAI-ARIA 工具栏、快捷键，以及添加链接的对话框。',
        overview: [
          '编辑器可以写段落、标题、引用、列表、代码块和分隔线，并支持粗体、斜体、下划线、删除线、代码和链接。它的值是 HTML；设置 <code>format="markdown"</code> 后则是 Markdown。它也能与表单配合使用。',
          '它维护自己的文档并亲自处理每一次编辑，因此粘贴或拖入的内容只会以这个文档的形式进入页面：结构和格式都会保留，来自 Google Docs 和 Word 的内容也不例外；脚本、样式和不安全的链接则会被去除。',
          '输入 Markdown 即可变成格式：<code># </code> 开始一个标题，<code>- </code> 开始一个列表，<code>**bold**</code> 和 <code>`code`</code> 会在输入闭合符号时生效。每种格式都有对应的快捷键和工具栏按钮。',
        ],
        examples: {
          comment: {
            title: '评论',
            text: '<code>tools</code> 决定工具栏上有哪些按钮。试试输入 Markdown，或从任何地方粘贴内容，再看看编辑器保存的 HTML。',
          },
          markdown: {
            title: 'Markdown 的读入与写出',
            text: '设置 <code>format="markdown"</code> 后，值就是 Markdown：读入时支持嵌套列表、引用和代码，编辑时再写回 Markdown。',
          },
        },
        api: {
          NuiEditor: {
            summary: '一个富文本编辑器。',
            members: {
              value: '内容，形式为 HTML 或 Markdown；没有文字时为空。',
              format: '值的写法。',
              tools: '工具栏上按顺序排列的按钮，组与组之间用 <code>|</code> 分隔。',
              'label, labelledBy, describedBy': '为内容命名并添加描述。',
              placeholder: '内容为空时显示。',
              'readonly, disabled, invalid': '分别表示：只显示内容而不可编辑；禁用；标记为无效。',
              labels: '它显示或播报的所有文本，供翻译使用。',
              run: '执行一个工具栏命令。',
              'undo, redo, focus': '分别用于撤销、重做，以及把焦点移入文本。',
            },
          },
          Helpers: {
            summary: '用于转换文档的函数。',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': '把文档写成 HTML 或 Markdown。',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                '把 HTML 或 Markdown 读入为文档，只保留编辑器能显示的内容。',
            },
          },
        },
        keyboard: [
          ['Ctrl + B、I 或 U', '粗体、斜体或下划线。在 Apple 设备上用 ⌘ 代替 Ctrl。'],
          ['Ctrl + K', '添加或编辑链接。'],
          ['Ctrl + Alt + 1、2 或 3', '设为标题；Ctrl + Alt + 0 则恢复为段落。'],
          ['Ctrl + Shift + 7 或 8', '有序列表或无序列表。'],
          ['在列表中按 Tab 和 Shift + Tab', '增加或减少缩进；在列表外，Tab 会离开编辑器。'],
          ['Ctrl + Z、Ctrl + Shift + Z', '撤销和重做。'],
          ['在工具栏中按向左 / 向右箭头键', '在按钮之间移动。'],
        ],
        notes: [
          '内容区是带有 <code>aria-multiline</code> 的 <code>textbox</code>，以 <code>label</code> 命名，占位文字放在 <code>aria-placeholder</code> 中。',
          '工具栏是 WAI-ARIA 工具栏，在 Tab 键顺序中只占一个位置：格式按钮是带有 <code>aria-pressed</code> 的切换按钮，每个按钮都在 <code>aria-keyshortcuts</code> 和工具提示中注明快捷键。',
          '执行工具栏命令后，焦点会回到文本中；在链接对话框中按 Esc 也会回到文本。Tab 键永远不会被困住：在列表外，它会离开编辑器。',
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
      'browser-support': {
        title: '浏览器支持',
        description:
          'Needless UI 支持并测试的浏览器：Chrome、Edge、Firefox 和 Safari 的版本要求，手机与触摸屏上的表现，以及旧版浏览器会省略的功能。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI 基于原生元素和较新的 Web 平台特性（例如 Popover API）构建。它从下表所列的版本起支持以下浏览器。在更旧的版本中，菜单、选择器和弹出框无法打开。',
          },
          { kind: 'h2', id: 'supported', text: '支持的浏览器' },
          {
            kind: 'table',
            caption: '支持的最低版本',
            head: ['浏览器', '最低版本', '所需特性'],
            rows: [
              [
                '电脑和 Android 上的 Chrome 与 Edge',
                '120',
                '用 CSS 遮罩绘制的图标，以及用于从右到左文本的 <code>:dir()</code>',
              ],
              ['电脑和 Android 上的 Firefox', '125', 'Popover API'],
              ['Mac 上的 Safari', '17', 'Popover API'],
              ['iPhone 和 iPad 上的所有浏览器', 'iOS 17', 'Popover API'],
              ['Samsung Internet（三星浏览器）', '25', '与 Chrome 相同'],
            ],
          },
          {
            kind: 'p',
            html: '其他基于 Chromium 的浏览器（例如 Opera 和 Brave）跟随 Chrome 的版本。Angular 22 本身就要求 Chrome、Edge 和 Firefox 不低于 119，Safari 不低于 17。不支持 Internet Explorer，以及改用 Chromium 之前的旧版 Edge。',
          },
          { kind: 'h2', id: 'tested', text: '经过测试的浏览器' },
          {
            kind: 'p',
            html: '每次改动都会在 Chrome、Firefox 和 Safari 的引擎中运行每个组件的测试。每次发布前，本文档的每个页面都会在每种引擎中，分别在电脑和支持触摸的手机上接受检查：页面必须能正常启动、打开每个菜单和弹出层、适配屏幕，并通过无障碍检查。',
          },
          {
            kind: 'table',
            caption: '测试所用的浏览器',
            head: ['引擎', '版本', '测试环境'],
            rows: [
              ['Chromium（Chrome、Edge）', '153', '电脑，以及支持触摸的 Android 手机'],
              ['Firefox', '155', '电脑，以及手机尺寸的触摸屏'],
              ['WebKit（Safari）', '26.6', '电脑，以及支持触摸的 iPhone'],
              ['iPhone 上的 Safari', 'iOS 17.5 和 18.6', 'iPhone 模拟器'],
            ],
          },
          {
            kind: 'p',
            html: '介于最低支持版本与测试版本之间的版本不会逐一测试：它们具备组件所需的全部特性，因此同样受支持。',
          },
          { kind: 'h2', id: 'newer', text: '新版浏览器中的额外功能' },
          {
            kind: 'p',
            html: '少数细节用到了只有新版浏览器才有的特性。其他浏览器会省略这些细节，但不会出现任何问题：',
          },
          {
            kind: 'table',
            caption: '需要新版浏览器的细节',
            head: ['细节', '浏览器', '其他浏览器中'],
            rows: [
              [
                '弹出框、菜单和对话框的入场与退场动画',
                'Chrome 与 Edge、Firefox 129、Safari 17.5',
                '立即出现和消失',
              ],
              ['超椭圆圆角（<code>corner-shape</code>）', 'Chrome 与 Edge 139', '普通圆角'],
              ['从屏幕上任意位置取色', '电脑上的 Chrome 与 Edge', '没有吸管按钮'],
              ['在文件拖放区中选择整个文件夹', '电脑上的浏览器', '只能选择文件'],
              [
                '轮播的自动轮播按钮上，圆环平滑地填满',
                'Chrome 与 Edge、Firefox 128、Safari',
                '一次性填满',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: '手机和触摸屏' },
          {
            kind: 'p',
            html: '每个组件都支持触摸操作。分隔面板的分隔条、颜色选择器的取色区域、数据表格的列边界和 Toast 都会跟随手指移动，而不会滚动页面；轮播借助浏览器自身的滚动来滑动；长按日程表中的日程即可拖动它。在触摸屏上，输入框的文字至少为 16px，因此 iPhone 不会放大输入框；像 Android 键盘那样先组字再上屏的键盘，输入的词语也会完整送达。',
          },
          {
            kind: 'p',
            html: '触摸屏无法悬停，所以悬停卡片只能补充页面上已有的内容：不要把任何必不可少的内容放在其中。在手机上，聊天组件的 Return 键会换行，发送则由按钮完成。',
          },
          { kind: 'h2', id: 'keyboard', text: 'Safari 中的键盘操作' },
          {
            kind: 'p',
            html: '默认情况下，Safari 中的 Tab 键只会在文本框和弹出式菜单之间移动。要移到每个按钮和链接，请在 Safari 的“高级”设置中打开“按下 Tab 键以高亮标记网页上的每一项”，或按 Option + Tab 键。此外，Safari 不会让被点击的按钮获得焦点；组件弥补了这一点，因此点击之后也能像在其他浏览器中一样继续用键盘操作。',
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
