import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      '無障礙、可自訂主題的 Angular 元件，以原生元素、W3C Design Token 和一份不依賴框架的樣式表打造。開源，採用 MIT 授權。',
    skipToContent: '跳到主要內容',
    nav: {
      label: '主要',
      home: 'Needless UI 首頁',
      components: '元件',
      guides: '指南',
      github: 'GitHub',
      language: '語言',
      theme: '主題',
      themes: { system: '系統預設', light: '淺色', dark: '深色' },
    },
    footer: {
      license: '以 MIT 授權條款發布。',
      source: '原始碼',
      built: '過度設計，用心打造。',
      legal: '法律聲明',
      privacy: '隱私權政策',
    },
    emergency: {
      label: '請勿按下',
      cover: '掀開安全蓋',
      button: '請勿按下',
      armed: '安全蓋已掀開。請三思。',
      falling: '緊急程序已啟動……',
      fallen: '重力現在是永久的。重新整理頁面來重建宇宙。',
      reduced: '你的系統要求減少動態效果，所以重力維持關閉。真幸運。',
    },
  },

  home: {
    title: 'Needless UI · 無障礙 Angular 元件，精心打磨到近乎多餘',
    description:
      'Needless UI 是開源的 Angular 元件庫：以原生元素和一份不依賴框架的樣式表為基礎，採用 W3C Design Token，並內建 WCAG 2.2 AA 無障礙支援。',
    eyebrow: '開源 · Angular 22 · MIT',
    heading: 'UI 元件，精心打磨到近乎多餘。',
    lead: 'Needless UI 用一份不依賴框架的樣式表和 W3C Design Token 為<strong>原生元素</strong>加上樣式。它的 Angular 指令透過 Angular Aria 提供互動行為，因此每個元件從第一次渲染起就具備無障礙支援。',
    getStarted: '開始使用',
    browse: '瀏覽元件',
    featuresTitle: '為何而生',
    features: [
      {
        title: '原生元素優先',
        text: '<code>&lt;button nuiButton&gt;</code> 就是真正的按鈕。它外面沒有包覆任何東西，所以表單、鍵盤和螢幕閱讀器都能正常運作。',
      },
      {
        title: '一份樣式表，適用任何框架',
        text: '元件就是放在 cascade layer 中的純 CSS：現在支援 Angular，接下來是 React，純 HTML 則永遠適用。',
      },
      {
        title: '你的 CSS 永遠優先',
        text: '所有樣式都位於 <code>@layer nui</code> 中，因此你自己的樣式不需要 <code>!important</code>，也不必比拚權重，就能直接覆寫它們。',
      },
      {
        title: '天生無障礙',
        text: '產生調色盤時，每一組顏色搭配都會依照 WCAG 2.2 AA 進行檢查。焦點、強制色彩模式和減少動態效果也都已經幫你處理好。',
      },
      {
        title: '可客製化到近乎多餘',
        text: '彈簧、按壓效果、進場動畫、邊角形狀、圓角半徑和密度：整個應用程式只要<a href="/guides/customization">一個屬性</a>，單一元件也只要一個輸入屬性，全部以標準的 W3C Design Token 為基礎。',
      },
      {
        title: '現代 Angular',
        text: 'Signal 輸入屬性、Zoneless、伺服器端渲染，而且每個元件都有獨立的進入點，應用程式只會打包實際匯入的部分。',
      },
    ],
    codeTitle: '兩處匯入，大功告成',
    codeText: '安裝套件、匯入一次樣式表，就能在任何獨立元件中使用這些元件。',
  },

  components: {
    title: '元件',
    description:
      '瀏覽 Needless UI 的 Angular 元件：無障礙的按鈕、對話框和選單，附有互動範例、API 參考文件和鍵盤操作說明。',
    intro: '每個元件都以原生元素打造，並提供互動範例、API 文件和鍵盤操作說明。',
    tabsLabel: '文件章節',
    tabs: { overview: '概覽', api: 'API', accessibility: '無障礙' },
    sidenavLabel: '元件',
    onThisPage: '本頁內容',
    example: {
      showCode: '顯示程式碼',
      hideCode: '隱藏程式碼',
      copy: '複製',
      copied: '已複製',
      files: '原始檔',
    },
    api: {
      import: '匯入',
      selector: '選擇器',
      exportAs: '匯出為',
      members: '屬性',
      name: '名稱',
      type: '型別',
      default: '預設值',
      description: '說明',
      kinds: { input: '輸入', model: '雙向繫結', output: '輸出', method: '方法' },
      customization: {
        note: '用於客製化的輸入屬性如果未設定，會沿用最近的 <code>data-nui-*</code> 屬性。詳見<a href="/guides/customization">客製化指南</a>。',
        members: {
          motion:
            '運動時使用的彈簧：<code>snappy</code>、<code>bouncy</code>、<code>jelly</code>、<code>elastic</code>、<code>lazy</code>、<code>mechanical</code> 或 <code>none</code>。',
          spring:
            '任意彈簧，以 <code>{ stiffness, damping, mass }</code> 的形式指定，在執行階段編譯成 CSS。它會覆寫 <code>motion</code>。',
          press:
            '按住時的效果：<code>sink</code>、<code>squish</code>、<code>pop</code>、<code>wobble</code>、<code>rubber</code>、<code>tilt</code> 或 <code>none</code>。',
          enter:
            '進場方式：<code>zoom</code>、<code>fade</code>、<code>drop</code>、<code>rise</code>、<code>unfold</code>、<code>flip</code>、<code>swing</code>、<code>slide</code> 或 <code>none</code>。',
          corners:
            '邊角的形狀：<code>round</code>、<code>squircle</code>、<code>bevel</code>、<code>scoop</code>、<code>notch</code> 或 <code>square</code>。',
          radius:
            '邊角的大小：<code>none</code>、<code>small</code>、<code>medium</code>、<code>large</code> 或 <code>full</code>。',
          density: '佔用的空間：<code>compact</code>、<code>regular</code> 或 <code>roomy</code>。',
        },
      },
    },
    a11y: {
      keyboard: '鍵盤互動',
      key: '按鍵',
      action: '動作',
      notes: '無障礙說明',
    },
    titles: {
      api: (name) => `${name} API`,
      accessibility: (name) => `${name} 無障礙支援`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Angular 按鈕元件',
        summary: '用於操作與連結，樣式直接套用在原生按鈕與連結元素上。',
        description:
          '適用於原生按鈕與連結元素的無障礙 Angular 按鈕指令，提供四種變體、三種色調和三種尺寸，並支援連結。',
        apiDescription:
          'Needless UI 按鈕的 API 參考文件：nuiButton 指令、它的選擇器，以及 variant、tone、size 和 disabled 輸入屬性。',
        a11yDescription:
          'Needless UI 按鈕的鍵盤行為與無障礙支援：原生語意、焦點環、對比度、目標尺寸和停用的連結。',
        overview: [
          '<code>nuiButton</code> 指令為原生的 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 加上樣式。元素原有的語意、鍵盤行為以及在表單中的作用都不會改變；指令只負責把輸入屬性同步到樣式表所對應的 data 屬性上。',
          '執行操作時用 <code>&lt;button&gt;</code>，頁面導覽時用 <code>&lt;a&gt;</code>。兩者外觀相同，也都支援 <code>disabled</code>。',
        ],
        examples: {
          variants: {
            title: '變體',
            text: '四種填色樣式，從最醒目到最低調。每個畫面只用一個實心按鈕來承載主要操作。',
          },
          tones: {
            title: '色調',
            text: '色調決定配色：accent 用於主要流程，neutral 用於次要操作，danger 用於破壞性操作。',
          },
          sizes: {
            title: '尺寸',
            text: '三種高度：28、36 和 44 像素。即使是最小的尺寸，也符合 WCAG 2.2 的最小目標尺寸要求。',
          },
          links: {
            title: '連結與停用的按鈕',
            text: '原生連結無法停用，因此停用的連結會加上 <code>aria-disabled="true"</code>，點擊也會被攔截，即使使用了 <code>routerLink</code> 也一樣。',
          },
        },
        api: {
          NuiButton: {
            summary:
              '為原生的 <code>&lt;button&gt;</code> 或 <code>&lt;a&gt;</code> 套用按鈕樣式。',
            members: {
              variant:
                '填色樣式：<code>solid</code>、<code>soft</code>、<code>outline</code> 或 <code>ghost</code>。',
              tone: '配色：<code>accent</code>、<code>neutral</code> 或 <code>danger</code>。',
              size: '高度、內距和字級：<code>sm</code>、<code>md</code> 或 <code>lg</code>。',
              disabled: '停用按鈕。用於連結時會設定 <code>aria-disabled</code>，並阻止連結被觸發。',
            },
          },
        },
        keyboard: [
          ['Tab', '將焦點移到按鈕或連結上。'],
          ['Enter', '觸發按鈕，或開啟連結。'],
          ['空白鍵', '觸發按鈕。在連結上則會捲動頁面（原生行為）。'],
        ],
        notes: [
          '無障礙名稱取自元素的文字。只有圖示的按鈕需要設定 <code>aria-label</code>。',
          '在所有變體、色調和主題下，文字對比度都達到 4.5:1，這由調色盤產生器強制確保。',
          '焦點環是 2px 的外框線，在兩種主題下與頁面的對比度都至少為 3:1。',
          '停用的 <code>&lt;button&gt;</code> 會退出 Tab 鍵順序。停用的連結仍可取得焦點，方便螢幕閱讀器使用者找到它，並會被朗讀為已停用。',
          '在強制色彩模式下，透明的邊框會變成使用系統色彩的可見外框。',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Angular 對話框元件',
        summary: '以原生 dialog 元素實作的強制回應視窗，焦點由瀏覽器管理。',
        description:
          '以原生 dialog 元素打造的無障礙 Angular 對話框：強制回應的焦點管理、按 Esc 鍵關閉、回傳值，以及點擊背景遮罩關閉。',
        apiDescription:
          'Needless UI 對話框的 API 參考文件：支援 open 雙向繫結的 nuiDialog、尺寸和回傳值，以及標題、描述和關閉等組成部分。',
        a11yDescription:
          'Needless UI 對話框的鍵盤行為與無障礙支援：強制回應焦點、Esc 鍵、焦點還原，以及透過標題和描述為內容加上標示。',
        overview: [
          '<code>nuiDialog</code> 指令把原生的 <code>&lt;dialog&gt;</code> 變成 Needless UI 對話框。強制回應的行為由瀏覽器提供：後方頁面會變得無法互動，焦點會留在對話框內，按 Esc 鍵即可關閉，關閉後焦點會回到開啟它的元素。',
          '將 <code>[(open)]</code> 繫結到一個 signal，並用 <code>nuiDialogClose="…"</code> 為關閉按鈕指定值，就能知道對話框是如何關閉的。',
        ],
        examples: {
          confirm: {
            title: '確認對話框',
            text: '用於確認破壞性操作。安全選項帶有 <code>autofocus</code>，使用者選擇的值會透過 <code>(closed)</code> 傳出。',
          },
          form: {
            title: '對話框中的表單',
            text: '對話框可以容納任何內容。本例中，對話框開啟時第一個欄位會取得焦點。',
          },
          dismissible: {
            title: '不可隨意關閉',
            text: '設定 <code>[dismissible]="false"</code> 後，按 Esc 鍵和點擊背景遮罩都會被忽略，使用者必須選擇其中一個選項。',
          },
        },
        api: {
          NuiDialog: {
            summary: '將原生的 <code>&lt;dialog&gt;</code> 變成 Needless UI 對話框。',
            members: {
              open: '對話框是否開啟。使用 <code>[(open)]</code> 進行繫結。',
              modal: '以強制回應方式開啟，顯示背景遮罩，並讓後方頁面無法互動。',
              dismissible: '按 Esc 鍵或點擊背景遮罩時是否關閉對話框。',
              size: '最大寬度：<code>sm</code>（24rem）、<code>md</code>（32rem）或 <code>lg</code>（44rem）。',
              closed: '每次對話框關閉時發出回傳值；如果對話框未經選擇就被關閉，該值為空。',
              close: '關閉對話框，可附帶一個回傳值。',
            },
          },
          NuiDialogTitle: {
            summary: '對話框的標題。它會取得一個 id，並作為對話框的 <code>aria-labelledby</code>。',
            members: {},
          },
          NuiDialogDescription: {
            summary: '一段簡短的描述，由對話框的 <code>aria-describedby</code> 參照。',
            members: {},
          },
          NuiDialogActions: {
            summary: '位於對話框底部的一列按鈕，向結尾端對齊。',
            members: {},
          },
          NuiDialogClose: {
            summary: '點擊時關閉所在的對話框。',
            members: {
              nuiDialogClose: '對話框關閉時攜帶的值，由 <code>(closed)</code> 發出。',
            },
          },
        },
        keyboard: [
          ['Tab', '將焦點移到對話框內的下一個元素。'],
          ['Shift + Tab', '將焦點移到對話框內的上一個元素。'],
          ['Esc', '關閉對話框，除非它被設為不可隨意關閉。'],
        ],
        notes: [
          '透過 <code>showModal()</code> 開啟時，對話框會取得 <code>role="dialog"</code> 和強制回應語意，頁面的其餘部分則會變得無法互動。',
          '標題和描述透過自動產生的 id 與對話框建立關聯，因此螢幕閱讀器會在對話框開啟時一併朗讀兩者。',
          '初始焦點會落在帶有 <code>autofocus</code> 的元素上；如果沒有，則落在第一個可取得焦點的元素上。確認破壞性操作時，請把 <code>autofocus</code> 放在安全選項上。',
          '對話框關閉後，焦點會回到開啟它的元素上。',
          '在沒有其他使用者互動的情況下重複按 Esc 鍵，瀏覽器仍可能關閉不可隨意關閉的對話框，因此請一律提供明確的退出方式。',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Angular 選單元件',
        summary: '彈出式的操作清單，支援子選單、可勾選的項目和完整的鍵盤操作。',
        description:
          '以 Angular Aria 打造的無障礙 Angular 選單：鍵盤導覽、鍵入搜尋、子選單、複選與單選項目，以及依可視區域自動調整的定位。',
        apiDescription:
          'Needless UI 選單的 API 參考文件：nuiMenuTrigger、nuiMenu 和 nuiMenuItem，涵蓋值、色調、子選單和勾選狀態。',
        a11yDescription:
          'Needless UI 選單的鍵盤互動與無障礙支援：方向鍵、鍵入搜尋、子選單、Esc 鍵和焦點返回。',
        overview: [
          '按下觸發元素時，選單會顯示一組操作。互動行為來自 Angular Aria 的選單模式；Needless UI 負責加上樣式，將選單以 popover 的形式渲染在頁面上層，並確保它始終位於可視區域內。',
          '把選單的 <code>ngMenu</code> 參照傳給 <code>[nuiMenuTrigger]</code>，為每個項目設定唯一的 <code>value</code>，然後在項目上監聽 <code>(selected)</code>，或在選單上監聽 <code>(itemSelected)</code>。',
        ],
        examples: {
          actions: {
            title: '操作',
            text: '一個操作選單，包含快速鍵提示、分隔線和一個破壞性操作項目。',
          },
          submenu: {
            title: '子選單',
            text: '使用 <code>[submenu]</code> 將項目連結到巢狀的 <code>nuiMenu</code>。滑鼠懸停或按向右鍵時即可開啟。',
          },
          checkable: {
            title: '複選與單選項目',
            text: '設定 <code>role</code> 並繫結 <code>[checked]</code>，選單就會顯示勾選標記並朗讀狀態。',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: '開啟選單。通常套用在 <code>nuiButton</code> 上。',
            members: {
              nuiMenuTrigger:
                '要開啟的選單：某個 <code>nuiMenu</code> 的 <code>ngMenu</code> 參照。',
            },
          },
          NuiMenu: {
            summary:
              '由項目組成的選單，以 popover 形式顯示在觸發元素旁。它匯出的 <code>ngMenu</code> 就是觸發元素和子選單所接收的 Angular Aria 選單。',
            members: {
              wrap: '方向鍵是否從最後一個項目循環回第一個項目。',
              typeaheadDelay: '鍵入搜尋重設前等待的毫秒數。',
              disabled: '停用整個選單。',
              itemSelected: '發出所選項目的值。在根選單上，選取子選單中的項目時也會觸發。',
            },
          },
          NuiMenuItem: {
            summary: '<code>nuiMenu</code> 中的一個項目。',
            members: {
              value: '項目的識別值。在整個選單（包括子選單）中必須唯一。',
              disabled: '停用該項目。它仍可透過方向鍵移到，但無法被選取。',
              submenu: '該項目開啟的巢狀 <code>nuiMenu</code>。',
              role: '<code>menuitem</code>、<code>menuitemcheckbox</code> 或 <code>menuitemradio</code>。',
              checked: '複選或單選項目的勾選狀態。',
              tone: '破壞性操作請使用 <code>danger</code>。',
              searchTerm: '鍵入搜尋時用於比對的文字，預設為項目的標籤。',
              selected: '透過滑鼠或鍵盤選取該項目時，發出它的值。',
            },
          },
          NuiMenuSeparator: { summary: '項目群組之間的分隔線。', members: {} },
          NuiMenuShortcut: {
            summary: '快速鍵提示，與項目的結尾端對齊。',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter 或空白鍵',
            '在觸發元素上：開啟選單並移到第一個項目。在項目上：選取該項目，或開啟它的子選單。',
          ],
          ['向下鍵', '在觸發元素上：開啟選單並移到第一個項目。在選單中：移到下一個項目。'],
          ['向上鍵', '在觸發元素上：開啟選單並移到最後一個項目。在選單中：移到上一個項目。'],
          ['Home / End', '移到第一個或最後一個項目。'],
          ['向右鍵', '開啟子選單並移到它的第一個項目（在由右至左的文字中為向左鍵）。'],
          ['向左鍵', '關閉子選單並返回上層項目（在由右至左的文字中為向右鍵）。'],
          ['Esc', '關閉選單，並將焦點移回觸發元素。'],
          ['字母鍵', '移到下一個標籤以所輸入文字開頭的項目。'],
        ],
        notes: [
          '觸發元素會加上 <code>aria-haspopup</code>、<code>aria-expanded</code> 和 <code>aria-controls</code>；選單及其項目的 ARIA 角色由 Angular Aria 設定。',
          '醒目提示的項目使用實色填滿，文字對比度至少為 4.5:1，同時兼作焦點指示器。在強制色彩模式下，它會顯示系統醒目提示色的外框。',
          '可勾選的項目會透過 <code>aria-checked</code> 朗讀其狀態。',
          '選取項目後，選單會關閉，焦點回到觸發元素。焦點移出觸發元素和選單時，選單也會關閉。',
          '項目高度至少為 28 像素，超過 WCAG 2.2 的最小目標尺寸。',
        ],
      },
    },
  },

  guides: {
    title: '指南',
    items: {
      'getting-started': {
        title: '開始使用',
        description:
          '在 Angular 22 應用程式中安裝 Needless UI：加入套件、匯入樣式表，幾分鐘內就能用上第一個無障礙元件。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI 支援 Angular 22。元件都是獨立指令，因此不需要匯入任何模組。',
          },
          { kind: 'h2', id: 'install', text: '安裝' },
          {
            kind: 'p',
            html: '加入 Angular 套件，以及提供鍵盤操作與無障礙行為的 Angular Aria 和 CDK。樣式表會隨套件一起安裝。',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: '匯入樣式' },
          {
            kind: 'p',
            html: '在 <code>src/styles.css</code> 中匯入一次樣式表即可，其中包含 Design Token 和所有元件。',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: '所有樣式都位於 <code>@layer nui</code> 中。如果你的應用程式有 <code>a { color: inherit }</code> 這類全域重設樣式，請把它們放進一個在 <code>nui</code> 之前宣告的層中，以免覆寫元件樣式。',
          },
          { kind: 'h2', id: 'use', text: '使用元件' },
          {
            kind: 'p',
            html: '從各自的進入點匯入所需的指令，並將它們加入元件的 <code>imports</code> 中。',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: '後續步驟' },
          {
            kind: 'p',
            html: '瀏覽<a href="/components">元件</a>查看互動範例，或閱讀<a href="/guides/theming">主題設定指南</a>，讓介面符合你的品牌。',
          },
        ],
      },
      theming: {
        title: '主題設定',
        description:
          '用 CSS 自訂屬性設定 Needless UI 的主題：淺色與深色模式、巢狀主題、覆寫 token，以及重新產生並經過對比度檢查的品牌調色盤。',
        blocks: [
          {
            kind: 'p',
            html: '每一項視覺決策都是由 W3C Design Token 產生的 CSS 自訂屬性。元件只使用 <code>--nui-color-accent-solid</code> 這類語意 token，因此修改一個 token，所有用到它的元件都會隨之更新樣式。',
          },
          { kind: 'h2', id: 'modes', text: '淺色與深色' },
          {
            kind: 'p',
            html: '預設由作業系統的偏好設定決定模式。你可以用 <code>data-nui-theme</code> 在任何元素上固定模式，並且可以自由巢狀使用。',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: '覆寫 token' },
          {
            kind: 'p',
            html: '這些 token 位於 <code>@layer nui</code> 中，因此應用程式裡的一般 CSS 就能覆寫它們。在 <code>:root</code> 上設定會套用到整個應用程式，在某個元素上設定則只套用到該部分。',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: '品牌調色盤' },
          {
            kind: 'p',
            html: '色階是自動產生的。在 <code>packages/tokens/scripts/palette.ts</code> 中修改色相後重新產生：指令碼會把每種顏色重新調整到 sRGB 色域內，並重新檢查每一組文字與背景顏色的對比度。',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: '客製化',
        description:
          '彈簧物理、按壓效果、進場動畫、邊角形狀、圓角半徑和密度：調整 Needless UI 的動態與手感，可套用到整個應用程式，也可只套用到單一元件。',
        blocks: [
          {
            kind: 'p',
            html: '每個元件都有你可以改變的個性：驅動它運動的彈簧、按鈕在你指尖下的反應、對話框和選單的進場方式、邊角的形狀和大小，以及它們佔用的空間。每一項都可以用一個屬性套用到某個元素內的所有內容，也可以用一個輸入屬性只套用到單一元件。',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: '一個屬性，套用到整個子樹' },
          {
            kind: 'p',
            html: '把 <code>data-nui-*</code> 屬性加在 <code>&lt;body&gt;</code> 上會套用到整個應用程式，加在任何元素上則只套用到其中一部分。距離最近的屬性優先生效，因此可以巢狀使用。它們只設定 CSS 自訂屬性，所以不論使用哪種框架，甚至不用框架，效果都完全相同。',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: '單一元件' },
          {
            kind: 'p',
            html: '在 Angular 中，<code>nuiButton</code>、<code>nuiDialog</code> 和 <code>nuiMenu</code> 以輸入屬性的形式接受相同的值。未設定的輸入屬性會沿用外層元素上的屬性。',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: '編譯成 CSS 的彈簧' },
          {
            kind: 'p',
            html: '動態效果以彈簧物理為基礎：用勁度、阻尼和質量取代持續時間和曲線。token 編譯器會求解每個彈簧，並將它寫入 CSS，表示為穩定所需的時間和一個 <code>linear()</code> 緩動函式，因此動畫在合成器執行緒上執行，不需要 JavaScript。內建六種彈簧 token，從 <code>--nui-spring-snappy</code> 到 <code>--nui-spring-mechanical</code>，<code>--nui-motion</code> 則保存目前使用的那一種。',
          },
          {
            kind: 'p',
            html: '想用其他彈簧，只要設定一個輸入屬性。Angular 會在執行階段用同一個求解器編譯它，而 <code>springTransition()</code> 能為你自己的元素產生對應的 CSS。',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: '預設集以外的任意值' },
          {
            kind: 'p',
            html: '預設集只是捷徑。其他任何效果，都可以自己設定 CSS 自訂屬性來實現：<code>--nui-press</code> 和 <code>--nui-enter</code> 可以使用任意 transform，<code>--nui-radius-scale</code> 和 <code>--nui-density</code> 可以使用任意數值。',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: '無障礙' },
          {
            kind: 'p',
            html: '當系統要求減少動態效果時，彈簧會瞬間完成，按壓和進場效果也不再移動。不論密度如何設定，控制項都不會小於 WCAG 2.2 規定的 24px 目標尺寸；而且沒有任何預設集會更動顏色，因此所有對比度檢查依然成立。不支援 <code>corner-shape</code> 的瀏覽器會把所有邊角都繪製成圓角。',
          },
        ],
      },
    },
    playground: {
      label: '客製化試玩區',
      motion: '動態效果',
      custom: '自訂',
      stiffness: '勁度',
      damping: '阻尼',
      mass: '質量',
      press: '按壓',
      enter: '進場',
      corners: '邊角',
      radius: '圓角',
      density: '密度',
      surprise: '給我驚喜',
      reset: '恢復預設值',
      hint: '按住一個按鈕，然後放開。開啟對話框和選單，看看它們如何進場。',
      save: '儲存',
      cancel: '取消',
      delete: '刪除',
      openDialog: '開啟對話框',
      openMenu: '開啟選單',
      menu: ['重新命名', '建立副本', '刪除'],
      dialogTitle: '動得毫無必要',
      dialogText: '這個對話框完全照你指定的方式進場了。',
      close: '關閉',
      curve: '彈簧位置隨時間的變化。它從底部出發，最後靜止在虛線上。',
      settles: (ms, overshoot) => `${ms} 毫秒內穩定 · 過衝 ${overshoot}%`,
      instant: '沒有動態效果：一切都直接跳到終點。',
      stuck:
        '這個彈簧在 10 秒內無法穩定。請增加阻尼或勁度；在此期間，元件會繼續使用上一個能夠穩定的彈簧。',
      reducedMotion:
        '你的系統要求減少動態效果，所以這裡的一切都不會動。系統不再有此要求時，彈簧、按壓和進場效果就會恢復。',
      noCornerShape: '這個瀏覽器還無法繪製邊角形狀，因此所有邊角都維持圓角。',
      everywhere: '設定在任何元素上，套用到其中的所有內容：',
      oneComponent: '在 Angular 中，只套用到單一元件：',
    },
  },

  notFound: {
    title: '找不到頁面',
    description: '這個頁面不存在。你可以瀏覽 Needless UI 的元件，或從首頁重新開始。',
    text: '這個頁面不存在，或已經移至其他位置。',
    home: '回到首頁',
    components: '瀏覽元件',
  },

  legal: {
    translationNote: '本譯文僅為方便閱讀而提供，如與英文原文有任何出入，以英文原文為準。',
    labels: { name: '名稱', address: '地址', email: '電子郵件', uid: 'UID', vat: '加值稅號' },
    notice: {
      title: '法律聲明',
      description:
        'needlessui.com 的經營者資訊：經營者的名稱、郵寄地址和電子郵件，以及商業登記和加值稅資訊。',
      operator: '經營者',
      legalForm: '獨資企業',
      country: '瑞士',
      register: '商業登記',
      registerEntry: '已於楚格州商業登記簿登記。',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: '免責聲明' },
        {
          kind: 'p',
          html: '本網站的內容經過用心撰寫，但不保證其正確、完整或即時。本網站連結的外部網站不在我們的控制範圍內，其內容由各自的經營者負責。',
        },
        { kind: 'h2', id: 'license', text: '授權條款' },
        {
          kind: 'p',
          html: 'Needless UI（包括本網站）以 <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT 授權條款</a>開源。',
        },
      ],
    },
    privacy: {
      title: '隱私權政策',
      description:
        'needlessui.com 如何處理個人資料：不使用 Cookie，不做統計分析，也不追蹤。說明造訪時託管服務供應商會處理哪些資料，以及你的權利。',
      updated: '最後更新：2026年9月24日',
      blocks: [
        {
          kind: 'p',
          html: '本政策說明你造訪 www.needlessui.com 時會處理哪些個人資料，以及你享有哪些權利。簡單來說：本網站不使用 Cookie、統計分析或追蹤技術，也從不要求你提供個人資料。',
        },
        { kind: 'h2', id: 'controller', text: '負責人' },
        {
          kind: 'p',
          html: '即<a href="/legal">法律聲明</a>中列出的經營者 Angelo Lamonaca。聯絡方式：{email}。',
        },
        { kind: 'h2', id: 'hosting', text: '託管' },
        {
          kind: 'p',
          html: '本網站由 Vercel Inc.（440 N Barranca Avenue #4133, Covina, CA 91723, USA）託管。當你開啟頁面時，瀏覽器會傳送每個網站都會收到的技術資料：你的 IP 位址、造訪日期和時間、所要求的頁面、來源頁面，以及瀏覽器的使用者代理程式（user agent）。Vercel 代表我們處理這些資料，以提供網站服務並維護其安全，並且只在此目的所需的期間內保存。這些處理可能在美國進行；Vercel 已通過歐盟-美國資料隱私框架（EU-U.S. Data Privacy Framework）及其英國延伸（UK Extension）和瑞士-美國資料隱私框架（Swiss-U.S. Data Privacy Framework）的認證。詳見 <a href="https://vercel.com/legal/privacy-policy">Vercel 的隱私權聲明</a>。',
        },
        {
          kind: 'p',
          html: '在適用 GDPR 的情況下，處理的法律依據是我們在安全經營網站方面的正當利益（GDPR 第 6 條第 1 項第 f 款）。',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie 與本機儲存空間' },
        {
          kind: 'p',
          html: '本網站不設定任何 Cookie。如果你選擇了淺色或深色主題，瀏覽器的本機儲存空間會記住這個選擇，供你下次造訪時使用。這項資訊不會離開你的裝置；如需刪除，可切換回「系統預設」，或清除本網站的資料。',
        },
        { kind: 'h2', id: 'tracking', text: '不追蹤' },
        {
          kind: 'p',
          html: '本網站沒有統計分析、廣告、社群媒體外掛程式、嵌入的第三方內容或外部字型。指向 GitHub 和 npm 的連結會帶你前往其他網站，這些網站有各自的隱私權政策。',
        },
        { kind: 'h2', id: 'rights', text: '你的權利' },
        {
          kind: 'p',
          html: '你可以詢問我們處理了哪些與你有關的個人資料，並要求更正或刪除。在適用 GDPR 的情況下，你還可以反對處理、要求限制處理，以及以可攜式格式取得你的資料。請寄信至 {email}。你也可以向主管機關申訴：在瑞士為聯邦資料保護暨資訊專員（FDPIC）；在歐盟則為你所在國家的主管機關。',
        },
        { kind: 'h2', id: 'changes', text: '政策變更' },
        {
          kind: 'p',
          html: '本政策會隨網站的變化而更新，例如網站移轉到新的託管服務供應商時。下方日期為目前版本的日期。',
        },
      ],
    },
  },
};
