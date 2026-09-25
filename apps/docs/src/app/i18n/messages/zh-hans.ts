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
        ],
        notes: [
          '它是带有 <code>role="grid"</code> 的原生 <code>&lt;table&gt;</code>，以 <code>label</code> 命名。表头带有 <code>aria-sort</code>，可选择的行带有 <code>aria-selected</code>。',
          '表格在 Tab 键顺序中只占一个位置。焦点通过漫游式 <code>tabindex</code> 在单元格之间移动，因此屏幕阅读器会连同行标题和列标题一起朗读每个单元格。',
          '在分页或虚拟化时，<code>aria-rowcount</code>、<code>aria-rowindex</code> 和 <code>aria-colindex</code> 也始终保持正确。',
          '排序、筛选、翻页和编辑错误，会通过不打断当前朗读的状态区域播报。',
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
              sendOn: '按 Enter 发送，还是按 Ctrl 或 ⌘ + Enter 发送。',
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
