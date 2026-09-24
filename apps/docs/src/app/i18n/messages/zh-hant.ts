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
    toaster: { label: '通知（Alt+T）', close: '關閉' },
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
      kinds: { input: '輸入', model: '雙向繫結', output: '輸出', method: '方法', property: '屬性' },
      texts: '它顯示或朗讀的所有文字也都是輸入屬性，因此可以翻譯：',
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
      // A space after a Latin name (Button 無障礙支援), none after a Chinese one (頭像無障礙支援).
      accessibility: (name) => `${name}${/[぀-ヿ㐀-鿿豈-﫿]$/u.test(name) ? '' : ' '}無障礙支援`,
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
          presses: {
            title: '按壓效果',
            text: '依序按住每個按鈕試試看。<code>press</code> 決定按鈕被按住時的效果，<code>motion</code> 決定它回彈時使用的彈簧。在任何元素上設定 <code>data-nui-press</code>，就能套用到其中的所有內容。',
          },
          shapes: {
            title: '邊角、圓角與密度',
            text: '<code>corners</code> 改變邊角的形狀，<code>radius</code> 改變邊角的大小，<code>density</code> 改變按鈕佔用的空間，但按鈕絕不會小於 24px 的目標尺寸。不支援 <code>corner-shape</code> 的瀏覽器會把邊角繪製成圓角。',
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
          entrances: {
            title: '進場動畫',
            text: '每個按鈕開啟的都是同一個對話框，只是 <code>enter</code> 預設集各不相同，彈簧則都是 <code>bouncy</code>。不論以哪種方式進場，離場時都是快速淡出。',
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
          entrances: {
            title: '進場動畫與彈簧',
            text: '每個選單都把一個 <code>enter</code> 預設集和一個 <code>motion</code> 彈簧搭配使用，並從它彈出的那一側展開。子選單會繼承這兩項設定。',
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

      avatar: {
        name: '頭像',
        title: 'Angular 頭像元件',
        summary: '人物的照片，或是以此人專屬顏色為底的姓名首字母。',
        description:
          'Angular 頭像元件：沒有照片時顯示姓名首字母，每個名字都有固定的顏色，還支援狀態點和頭像群組，在任何主題下都清晰易讀。',
        apiDescription:
          'Needless UI 頭像的 API 參考文件：nuiAvatar 的名字、照片、尺寸、形狀和狀態，以及 nuiAvatarGroup。',
        a11yDescription:
          'Needless UI 頭像的無障礙支援：圖片角色與名稱、裝飾性頭像，以及始終維持 4.5:1 對比度的姓名首字母。',
        overview: [
          '<code>nuiAvatar</code> 元件會顯示一張照片；沒有照片或照片載入失敗時，則顯示此人的姓名首字母。首字母的底色根據名字計算而來，因此同一個人在任何地方都是同一種顏色。',
          '每種色相的亮度和彩度都設有上限，確保白色首字母的對比度始終高於 4.5:1，不論名字和主題為何。',
        ],
        examples: {
          people: {
            title: '首字母、照片和狀態',
            text: '沒有 <code>src</code> 時，首字母和顏色都取自 <code>name</code>。<code>status</code> 會加上一個上線狀態點。',
          },
          group: {
            title: '群組、尺寸和形狀',
            text: '<code>nuiAvatarGroup</code> 會讓一列頭像彼此重疊。<code>size</code> 可設為 <code>sm</code>、<code>md</code> 或 <code>lg</code>，<code>shape="square"</code> 則適合團隊和應用程式。',
          },
        },
        api: {
          NuiAvatar: {
            summary: '顯示照片或姓名首字母，並以此人的名字作為無障礙名稱。',
            members: {
              name: '此人的名字。無障礙名稱、首字母和顏色都由它而來。',
              src: '照片的網址。載入失敗時會改為顯示首字母。',
              size: '尺寸：<code>sm</code>、<code>md</code> 或 <code>lg</code>。',
              shape: '<code>circle</code> 或 <code>square</code>。',
              status:
                '上線狀態點：<code>online</code>、<code>away</code>、<code>busy</code> 或 <code>offline</code>。',
              label: '比名字提供更多資訊的無障礙名稱，例如「Ada Lovelace，上線中」。',
              decorative: '對輔助科技隱藏頭像，適用於旁邊已經顯示名字的頭像。',
            },
          },
          NuiAvatarGroup: {
            summary: '一列彼此重疊的頭像。請用 <code>aria-label</code> 為它命名。',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          '頭像是一張以此人名字命名的圖片（<code>role="img"</code>）。如果旁邊已經顯示名字，請設定 <code>decorative</code>，以免螢幕閱讀器把名字唸兩次。',
          '狀態點只是視覺提示。如果狀態很重要，請把它寫進 <code>label</code>。',
          '在每一種產生的顏色上，首字母的對比度都至少為 4.5:1。',
        ],
      },

      breadcrumbs: {
        name: '麵包屑',
        title: 'Angular 麵包屑元件',
        summary: '通往目前頁面的層級路徑。',
        description:
          '以原生 nav 和清單打造的無障礙 Angular 麵包屑：CSS 分隔符號在由右至左的文字中自動鏡像，路徑過長時可以橫向捲動。',
        apiDescription:
          'Needless UI 麵包屑的 API 參考文件：nuiBreadcrumbs 指令，以及為導覽地標命名的標籤。',
        a11yDescription:
          'Needless UI 麵包屑的無障礙支援：導覽地標、清單語意、目前頁面的標示和目標尺寸。',
        overview: [
          '麵包屑會顯示頁面在網站中的位置。<code>nuiBreadcrumbs</code> 指令為原生的 <code>&lt;nav&gt;</code> 及其中的清單加上樣式；最後一項是目前頁面，以 <code>aria-current="page"</code> 標示。',
          '路徑比容器還長時會橫向捲動，而不會換行。一開始會捲動到最後面，哪一端還有未顯示的內容，哪一端就會淡出。',
        ],
        examples: {
          trail: {
            title: '麵包屑路徑',
            text: '先是上層各頁面的連結，最後是以純文字顯示、帶有 <code>aria-current="page"</code> 的目前頁面。',
          },
          long: {
            title: '長路徑',
            text: '在狹窄的容器中，路徑可以捲動，一開始目前頁面就在可見範圍內。',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: '為 <code>&lt;nav&gt;</code> 及其中的清單套用麵包屑樣式。',
            members: { label: '導覽地標的無障礙名稱。' },
          },
        },
        keyboard: [['Tab', '移到路徑中的下一個連結。']],
        notes: [
          '它是包含一般清單的導覽地標，因此螢幕閱讀器會朗讀路徑中有幾個頁面。',
          '分隔符號由 CSS 繪製，因此不會被朗讀，並會在由右至左的文字中鏡像顯示。',
          '每個連結的高度都至少為 24px。',
        ],
      },

      empty: {
        name: '空狀態',
        title: 'Angular 空狀態元件',
        summary: '沒有內容可顯示時要顯示的內容，並告訴使用者下一步該怎麼做。',
        description:
          'Angular 空狀態元件：由圖片、標題、簡短說明和操作按鈕組成，另附四幅會輕輕漂浮的內建插圖。',
        apiDescription:
          'Needless UI 空狀態的 API 參考文件：nuiEmpty 及其媒體、標題、描述和操作等組成部分。',
        a11yDescription:
          'Needless UI 空狀態的無障礙支援：裝飾性圖片、有意義的標題，以及減少動態效果。',
        overview: [
          '空狀態用來取代還沒有任何內容的清單、表格或頁面。它會說明原因，並提供下一步。',
          '媒體部分可以放你自己的圖片，也可以繪製一幅內建插圖：<code>search</code>、<code>inbox</code>、<code>files</code> 或 <code>error</code>。',
        ],
        examples: {
          search: {
            title: '沒有搜尋結果',
            text: '用標題說明發生了什麼事，用一行文字提供協助，再用操作按鈕提供解決方法。',
          },
          pictures: {
            title: '內建插圖',
            text: '在 <code>nuiEmptyMedia</code> 上設定 <code>illustration</code>。插圖會隨主題變化，並會輕輕漂浮，除非使用者要求減少動態效果。',
          },
        },
        api: {
          NuiEmpty: { summary: '容器：置中排列的單欄版面。', members: {} },
          NuiEmptyMedia: {
            summary: '圖片，對輔助科技隱藏。',
            members: {
              illustration:
                '內建插圖：<code>search</code>、<code>inbox</code>、<code>files</code> 或 <code>error</code>。',
            },
          },
          NuiEmptyTitle: {
            summary: '標題。請使用適合頁面的標題層級。',
            members: {},
          },
          NuiEmptyDescription: { summary: '一行說明文字。', members: {} },
          NuiEmptyActions: { summary: '一列按鈕。', members: {} },
        },
        keyboard: [],
        notes: [
          '圖片是裝飾性的（<code>aria-hidden</code>）：訊息由標題和描述傳達。',
          '請用標題元素作為標題，並選用符合頁面大綱的層級。',
          '當使用者偏好減少動態效果時，內建插圖會停止漂浮。',
        ],
      },

      'number-field': {
        name: '數字輸入欄位',
        title: 'Angular 數字輸入欄位元件',
        summary: '附有步進按鈕的數字輸入欄位，可依任何地區設定格式化。',
        description:
          '無障礙的 Angular 數字輸入欄位：附有步進按鈕的 spinbutton，支援鍵盤步進、最小值與最大值，以及依地區設定格式化貨幣、百分比和單位。',
        apiDescription:
          'Needless UI 數字輸入欄位的 API 參考文件：nuiNumberField、支援 min、max、step 和 format 的 nuiNumberInput，以及 nuiNumberStep。',
        a11yDescription:
          'Needless UI 數字輸入欄位的鍵盤互動與無障礙支援：spinbutton 角色、方向鍵與翻頁鍵，以及步進按鈕。',
        overview: [
          '數字輸入欄位是存放數字的文字輸入欄位。它依地區設定格式化顯示數字，也以相同格式解析輸入的文字，並在失去焦點時把數值依 <code>step</code> 對齊，限制在 <code>min</code> 和 <code>max</code> 之間。',
          '它也能辨識各地的原生數字和分隔符號：阿拉伯-印度數字、波斯數字和天城文數字，當作千分位符號的空格和句點，以及各種負號。按住步進按鈕會連續步進，而且越來越快。',
        ],
        examples: {
          guests: {
            title: '步進按鈕',
            text: '兩側各有一個按鈕，到達 <code>min</code> 或 <code>max</code> 時會停用。方向鍵也能步進。',
          },
          formats: {
            title: '貨幣與百分比',
            text: '把 <code>Intl.NumberFormat</code> 選項傳給 <code>format</code>，並指定 <code>locale</code>。值一律是單純的數字。',
          },
        },
        api: {
          NuiNumberField: {
            summary: '把輸入欄位和它的步進按鈕組合在一起。',
            members: {},
          },
          NuiNumberInput: {
            summary: '存放數字的文字輸入欄位，角色為 ARIA spinbutton。',
            members: {
              value: '數字；為空時是 <code>null</code>。也能搭配表單使用。',
              min: '允許的最小值。',
              max: '允許的最大值。',
              step: '每一步改變的數值。失去焦點時，值會依步進值對齊。',
              format:
                "<code>Intl.NumberFormat</code> 選項，例如 <code>{ style: 'currency', currency: 'EUR' }</code>。",
              locale: '格式化和解析數字時使用的地區設定。',
              disabled: '停用輸入欄位及其按鈕。',
              stepBy: '依指定的步數增加（正數）或減少（負數）數值。',
            },
          },
          NuiNumberStep: {
            summary: '步進按鈕。按住時會連續步進。',
            members: {
              nuiNumberStep: '<code>1</code> 表示增加，<code>-1</code> 表示減少。',
              label: '無障礙名稱。預設為「Increase」或「Decrease」。',
            },
          },
        },
        keyboard: [
          ['向上 / 向下鍵', '將數值增加或減少一個步進值。'],
          ['Page Up / Page Down', '一次增減十個步進值。'],
          ['Home / End', '跳到最小值或最大值。'],
          ['Enter', '確認已輸入的內容。'],
        ],
        notes: [
          '輸入欄位是一個 <code>spinbutton</code>，帶有 <code>aria-valuenow</code>、<code>aria-valuemin</code> 和 <code>aria-valuemax</code>，並以格式化後的值作為 <code>aria-valuetext</code>。',
          '步進按鈕不在 Tab 鍵順序中，因為按鍵就能完成同樣的操作；但它們都有名稱，並透過 <code>aria-controls</code> 與輸入欄位建立關聯。',
          '請用 <code>aria-label</code> 或 <code>&lt;label&gt;</code> 為輸入欄位加上標籤。',
        ],
      },

      otp: {
        name: '驗證碼輸入欄位',
        title: 'Angular OTP 驗證碼輸入欄位元件',
        summary: '分格顯示的驗證碼，底層是一個真正的輸入欄位。',
        description:
          '無障礙的 Angular 驗證碼輸入欄位：格子下方是一個原生欄位，支援簡訊自動填入、WebOTP、貼上時自動整理、分組、遮蔽顯示和錯誤抖動。',
        apiDescription:
          'Needless UI 驗證碼輸入欄位的 API 參考文件：支援長度、字元類型、分組和遮蔽顯示的 nuiOtp，以及支援 WebOTP 的 nuiOtpInput。',
        a11yDescription:
          'Needless UI 驗證碼輸入欄位的鍵盤操作與無障礙支援：一個加上標籤的文字欄位、清楚可見的焦點環和自動填入。',
        overview: [
          '驗證碼輸入欄位看起來是一列格子，底層其實只是一個原生的 <code>&lt;input&gt;</code>。簡訊自動填入（<code>autocomplete="one-time-code"</code>）、貼上、密碼管理工具、表單和螢幕閱讀器看到的都是一個普通的文字欄位。',
          '貼上的驗證碼會自動整理，因此「123-456」和「123 456」都能使用，所設字元類型不允許的字元則會被拒絕。在 Android 上，<code>webOtp</code> 會在簡訊送達時自動填入驗證碼。',
        ],
        examples: {
          verify: {
            title: '驗證',
            text: '填滿最後一格時會觸發 <code>(completed)</code>。要拒絕某個驗證碼，就在輸入欄位上設定 <code>aria-invalid</code>：格子會變紅並抖動。',
          },
          letters: {
            title: '字母、分組與遮蔽顯示',
            text: '<code>pattern="alphanumeric"</code> 也接受字母，<code>[groups]</code> 會加上分隔符號，<code>masked</code> 則顯示為圓點。',
          },
        },
        api: {
          NuiOtp: {
            summary: '繪製格子並包住輸入欄位。',
            members: {
              length: '字元數。',
              pattern: '<code>digits</code>，或允許字母和數字的 <code>alphanumeric</code>。',
              groups: '各組的長度，組與組之間會顯示分隔符號，例如 <code>[3, 3]</code>。',
              masked: '以圓點取代字元顯示。',
              completed: '每次填滿最後一格時發出驗證碼。',
            },
          },
          NuiOtpInput: {
            summary: '真正的輸入欄位。它會取得一次性驗證碼所需的屬性。',
            members: {
              webOtp: '在支援的環境中，透過 WebOTP API 從收到的簡訊填入驗證碼。',
            },
          },
        },
        keyboard: [
          ['數字鍵或字母鍵', '填入目前的格子並移到下一格。'],
          ['Backspace', '刪除游標前的字元。'],
          ['向左 / 向右鍵', '移動一格；已填入的格子會被選取，因此輸入會取代其中的字元。'],
          ['貼上', '用複製的驗證碼填滿格子。'],
        ],
        notes: [
          '螢幕閱讀器看到的只是一個文字欄位。請用 <code>aria-label</code> 或 <code>&lt;label&gt;</code> 為它加上標籤。',
          '格子對輔助科技隱藏；正在編輯的格子會顯示焦點環。',
          '開啟減少動態效果後，游標不再閃爍，格子也不會跳動或抖動。',
        ],
      },

      rating: {
        name: '評分',
        title: 'Angular 星級評分元件',
        summary: '用星星評分，底層是真正的單選按鈕。',
        description:
          '以原生單選按鈕打造的無障礙 Angular 星級評分：支援鍵盤和表單、滑鼠懸停預覽、清除評分，以及唯讀模式下的小數顯示。',
        apiDescription:
          'Needless UI 評分的 API 參考文件：nuiRating 的值、最大值、唯讀與可清除模式，以及可翻譯的標籤。',
        a11yDescription:
          'Needless UI 評分的鍵盤互動與無障礙支援：具名的單選按鈕群組、加上標籤的星星，以及唯讀模式下的圖片。',
        overview: [
          '評分元件是一組繪製成星星的原生單選按鈕。方向鍵、表單和螢幕閱讀器的運作方式與任何單選按鈕群組相同；CSS 負責填滿星星，並在指標所在處預覽新的評分。',
          '在唯讀模式下，它能顯示任意小數，例如平均 4.3 分。',
        ],
        examples: {
          pick: {
            title: '進行評分',
            text: '繫結 <code>[(value)]</code> 或表單。設定 <code>clearable</code> 後，再次選擇同一顆星會清除評分。',
          },
          average: {
            title: '顯示平均分數',
            text: '<code>readonly</code> 會依任意比例填滿星星，並將這張圖片命名為「Rated 4.3 out of 5」。',
          },
        },
        api: {
          NuiRating: {
            summary: '由星星組成的單選按鈕群組，或唯讀的評分圖片。',
            members: {
              value: '評分值，或 <code>null</code>。也能搭配表單使用。',
              max: '星星的數量。',
              readonly: '只顯示評分值（可精確到任意小數），而不讓使用者評分。',
              disabled: '停用所有星星。',
              clearable: '再次選擇目前的星星會清除評分。',
              name: '這些單選按鈕共用的名稱，預設會自動產生。',
              starLabel: '每顆星的無障礙名稱，是以星級值為參數的函式。',
              readonlyLabel: '唯讀模式下的無障礙名稱。',
            },
          },
        },
        keyboard: [
          ['Tab', '進入群組，並移到已勾選的星星。'],
          ['方向鍵', '變更評分。'],
          ['空白鍵', '勾選取得焦點的星星。'],
        ],
        notes: [
          '每顆星都是一個原生單選按鈕，名稱形如「3 stars」。請用 <code>aria-label</code> 為群組命名。',
          '在唯讀模式下，評分是一張名為「Rated 4.3 out of 5」的圖片（<code>role="img"</code>）。',
          '星星以 CSS 遮罩繪製，因此會遵循強制色彩模式。',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Angular Skeleton 骨架載入元件',
        summary: '在內容載入期間撐住版面的預留位置。',
        description:
          'Angular Skeleton 骨架載入元件，提供文字、圓形和區塊三種預留位置，同一道光澤會掃過整個頁面；減少動態效果時則不顯示光澤。',
        apiDescription:
          'Needless UI Skeleton 的 API 參考文件：nuiSkeleton 指令及其文字、圓形和區塊三種形狀。',
        a11yDescription:
          'Needless UI Skeleton 的無障礙支援：隱藏的預留位置、aria-busy 區域、減少動態效果和強制色彩模式。',
        overview: [
          'Skeleton 會保留仍在載入的內容的形狀，讓內容出現時頁面不會跳動。請用 CSS 設定它的尺寸。',
          '光澤效果固定在可視區域上：同一道高光會同時掃過頁面上的每個 Skeleton，不論它的尺寸或位置為何。',
        ],
        examples: {
          card: {
            title: '載入卡片',
            text: '以幾行文字、一個圓形和一個區塊代替個人資料。載入期間，卡片會帶有 <code>aria-busy</code>。',
          },
        },
        api: {
          NuiSkeleton: {
            summary: '預留位置，對輔助科技隱藏。',
            members: {
              shape: '<code>text</code>（一行文字）、<code>circle</code> 或 <code>block</code>。',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton 對螢幕閱讀器隱藏。請在正在載入的區域上設定 <code>aria-busy="true"</code>，並在內容出現後將它移除。',
          '當使用者偏好減少動態效果時，不會顯示光澤效果。',
          '在強制色彩模式下，每個 Skeleton 都會顯示外框。',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Angular Toast 通知元件',
        summary: '可堆疊、可滑開、從不搶走焦點的簡短訊息。',
        description:
          '無障礙的 Angular Toast：在頂層（top layer）堆疊顯示，支援 Promise Toast、復原操作和滑動關閉，計時器會在滑鼠懸停或取得焦點時暫停。',
        apiDescription:
          'Needless UI Toast 的 API 參考文件：NuiToaster 服務、它的選項和 Promise Toast，以及 nui-toaster 區域。',
        a11yDescription:
          'Needless UI Toast 的鍵盤互動與無障礙支援：朗讀方式、Alt+T 快速鍵、Esc 鍵和可暫停的計時器。',
        overview: [
          'Toast 用來確認剛剛發生的事，或提供「復原」之類的操作，而不會打斷使用者。在應用程式殼層中放一個 <code>&lt;nui-toaster&gt;</code>，之後就能在任何地方呼叫 <code>NuiToaster</code>。',
          '它們會疊在最新一則的後方，滑鼠懸停或取得焦點時展開，全部使用 motion 彈簧。往側邊一滑，就能甩掉一則 Toast。當滑鼠懸停在堆疊上、堆疊取得焦點，或頁面在背景時，計時器會暫停。',
        ],
        examples: {
          tones: {
            title: '色調',
            text: '<code>show()</code>、<code>success()</code>、<code>warning()</code> 和 <code>danger()</code>。danger 類的 Toast 會停留得更久，並會立即朗讀。',
          },
          actions: {
            title: '操作與 Promise',
            text: '<code>action</code> 會加上一個按鈕，例如「復原」。<code>promise()</code> 會先顯示載入圖示，再變成結果。',
          },
        },
        api: {
          NuiToaster: {
            summary: '用來顯示 Toast 的服務。可以在任何地方注入。',
            members: {
              toasts: '畫面上的所有 Toast，最新的排在最前面。',
              show: '顯示一則 Toast。傳入標題，或傳入包含描述、色調、持續時間、操作或 id 的選項。',
              success: '顯示一則成功 Toast。',
              warning: '顯示一則警告 Toast。',
              danger: '顯示一則危險 Toast。它會停留 8 秒，並會立即朗讀。',
              promise: '在 Promise 完成前顯示載入中的 Toast，之後顯示對應的成功或危險訊息。',
              dismiss: '關閉一則 Toast，或關閉全部。',
            },
          },
          NuiToasterRegion: {
            summary: 'Toast 出現的區域。在應用程式殼層中放置一次即可。',
            members: {
              position: '可視區域的某個角落或邊緣。開頭端和結尾端會依循文字方向。',
              expanded: '讓堆疊一直保持展開。',
              label: '區域的無障礙名稱。請在其中說明如何移到這個區域。',
              closeLabel: '關閉按鈕的無障礙名稱。',
              hotkey:
                '與 Alt 搭配使用、將焦點移到最新一則 Toast 的按鍵，以 <code>KeyboardEvent.code</code> 表示。',
            },
          },
        },
        keyboard: [
          ['Alt+T', '將焦點移到最新的一則 Toast。'],
          ['Tab', '在各則 Toast 及其操作按鈕和關閉按鈕之間移動。'],
          ['Esc', '關閉取得焦點的 Toast。'],
        ],
        notes: [
          '每則 Toast 出現時都會被朗讀：一般會等螢幕閱讀器空閒時再朗讀，danger 類則會立即朗讀。Toast 從不搶走焦點。',
          '當滑鼠懸停在堆疊上、堆疊取得焦點或頁面被隱藏時，計時器會暫停；等待 Promise 的 Toast 永遠不會逾時。',
          '任何需要使用者處理的內容，都應該同時在 Toast 以外提供。',
          '開啟減少動態效果後，Toast 不再播放動畫，也無法滑動，計時條也會隱藏。',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Angular Combobox 自動完成元件',
        summary: '在你輸入時提供建議選項的文字欄位。',
        description:
          '無障礙的 Angular Combobox：附醒目提示的模糊搜尋、以標籤顯示多個值、從輸入的文字建立新值，以及來自伺服器的結果。',
        apiDescription:
          'Needless UI Combobox 的 API 參考文件：nui-combobox 的 value、values、multiple、create、filtering、loading 和 clearable，以及自訂列。',
        a11yDescription:
          'Needless UI Combobox 的鍵盤操作與無障礙支援：具清單自動完成的可編輯 combobox、aria-activedescendant、標籤和輸入法輸入。',
        overview: [
          'Combobox 是附有建議清單的文字欄位。搜尋採模糊比對，並忽略重音符號：最相符的結果排在最前面，相符的字母會被標示出來。它與 Select 接收相同的 <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 物件。',
          '設定 <code>multiple</code> 後，選取的選項會以標籤的形式顯示在文字前面；<code>create</code> 會把輸入的文字變成新值。若結果來自伺服器，請關閉 <code>filtering</code>，在 <code>(queryChange)</code> 中搜尋，並在等待期間設定 <code>loading</code>。',
        ],
        examples: {
          country: {
            title: '搜尋',
            text: '相符的字母不必相鄰，<code>keywords</code> 也會納入比對。<code>clearable</code> 會加上清除按鈕，並允許按 Esc 鍵清除值。',
          },
          tags: {
            title: '標籤與新值',
            text: '<code>multiple</code> 會顯示標籤並繫結 <code>[(values)]</code>。當輸入的文字還不是任何選項時，<code>create</code> 會提議將它新增。',
          },
          people: {
            title: '伺服器結果',
            text: '清單會原樣顯示伺服器傳回的結果，不做篩選，等待期間會顯示載入提示列。新結果送達時，已選選項的顯示文字會保留。',
          },
        },
        api: {
          NuiCombobox: {
            summary: '在你輸入時提供建議選項的文字欄位。',
            members: {
              options:
                '選項，以 <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 物件的形式提供。',
              value: '選取的值，或 <code>null</code>。也能搭配表單使用。',
              values: '啟用 <code>multiple</code> 時選取的多個值。',
              multiple: '允許選取多個選項，並以標籤的形式顯示。',
              create: '從輸入的文字建立值。清單會提議新增還不是選項的文字。',
              filtering: '在輸入時篩選選項。由伺服器篩選時請關閉。',
              loading: '在結果送達前顯示載入提示列。',
              clearable: '加上清除值的按鈕，並允許按 Esc 鍵清除。',
              placeholder: '欄位為空時顯示的文字。',
              label: '無障礙名稱，在沒有 <code>&lt;label&gt;</code> 為欄位命名時使用。',
              inputId: '文字欄位的 id，供 <code>&lt;label for&gt;</code> 使用。',
              disabled: '停用欄位。',
              compareWith: '判斷兩個值是否為同一個選項，適用於物件型別的值。',
              displayWith: '不在選項中的值所顯示的文字，例如在選項載入前設定的值。',
              virtual: '只渲染可見的列：一律、從不，或 <code>auto</code>（超過 200 列時啟用）。',
              queryChange: '在輸入時發出文字，用於伺服器端搜尋。',
              openChange: '清單開啟或關閉時發出。',
              show: '開啟清單。',
              hide: '關閉清單。',
              clear: '清除值和文字。',
              focus: '讓文字欄位取得焦點。',
            },
          },
          NuiOptionTemplate: {
            summary:
              '把它放在元件內的 <code>ng-template</code> 上，就能自行繪製每一列。其 context 包含選項和它所在的列。',
            members: {},
          },
          NuiOptionText: {
            summary: '繪製選項的顯示文字（標示出相符的字母）、描述和路徑，用於你自訂的列。',
            members: { nuiOptionText: '列，取自範本的 context。' },
          },
        },
        keyboard: [
          ['向下 / 向上鍵', '開啟清單，然後在選項之間移動。'],
          ['Page Down / Page Up', '一次移動十個選項。'],
          ['Enter', '選取醒目提示的選項。'],
          ['Alt + 向下或向上鍵', '開啟或關閉清單。'],
          ['Esc', '關閉清單；再按一次會清除文字，若可清除則清除值。'],
          ['Backspace', '欄位為空時，移除最後一個標籤。'],
          [
            '向左鍵',
            '在文字開頭時移到標籤上（在由右至左的文字中為向右鍵）。在標籤上按 Backspace 或 Delete 可移除該標籤。',
          ],
        ],
        notes: [
          '文字欄位是帶有 <code>aria-autocomplete="list"</code>、<code>aria-expanded</code> 和 <code>aria-controls</code> 的 <code>combobox</code>。焦點會留在欄位中，<code>aria-activedescendant</code> 會指向醒目提示的選項。',
          '標籤組成一個具名的清單，每個移除按鈕都以對應的標籤命名，例如「Remove Italy」。',
          '「No matches」和載入提示列都是狀態訊息，因此螢幕閱讀器會朗讀它們。',
          '用於確認輸入法組字的按鍵（例如輸入中文或日文時）會交由輸入法處理。',
        ],
      },
      command: {
        name: '命令面板',
        title: 'Angular 命令面板元件',
        summary: '應用程式中的所有命令，一鍵即達。',
        description:
          '無障礙的 Angular 命令面板：隨處按 ⌘K 開啟，模糊搜尋可深入巢狀頁面，支援群組，並依各平台的寫法顯示快速鍵。',
        apiDescription:
          'Needless UI 命令面板的 API 參考文件：nui-command-palette 的 commands、hotkey、bindShortcuts 和 loop，以及 NuiCommand 的結構。',
        a11yDescription:
          'Needless UI 命令面板的鍵盤操作與無障礙支援：附搜尋 combobox 的強制回應對話框、aria-activedescendant 和頁面導覽。',
        overview: [
          '命令面板是放在強制回應對話框中的搜尋欄位，用來搜尋應用程式中的命令。在任何地方按 ⌘K 都能開啟它（Windows 和 Linux 上為 Ctrl+K）。選擇命令後，面板會先關閉，再執行該命令。',
          '命令可以帶有群組、描述、關鍵字和快速鍵，快速鍵會以各平台的符號顯示。帶有 <code>children</code> 的命令會開啟一個包含更多命令的頁面，從最上層搜尋時也能搜到各頁面中的命令。',
        ],
        examples: {
          palette: {
            title: '命令與頁面',
            text: '群組、快速鍵、一個停用的命令和兩個頁面。<code>(run)</code> 會告訴你執行了哪個命令；命令本身的 <code>run</code> 也同樣有效。',
          },
          people: {
            title: '自訂列',
            text: '<code>nuiOptionTemplate</code> 負責繪製每一列，<code>nuiOptionText</code> 保留相符處的標示。<code>[hotkey]="null"</code> 把 ⌘K 留給上方的面板。',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: '附有命令搜尋欄位的強制回應對話框。',
            members: {
              commands: '命令，以 <code>NuiCommand</code> 物件的形式提供。',
              open: '面板是否開啟。',
              hotkey:
                '隨處開啟和關閉面板的快速鍵；設為 <code>null</code> 則不使用。<code>mod</code> 在 Apple 裝置上是 ⌘，在其他裝置上是 Ctrl。',
              bindShortcuts: '也能在頁面的任何地方透過命令各自的快速鍵執行命令。',
              loop: '在最後一個命令上按向下鍵會回到第一個，在第一個命令上按向上鍵會跳到最後一個。',
              filtering: '在輸入時進行篩選。由伺服器篩選命令時請關閉。',
              loading: '在結果送達前顯示載入提示列。',
              hints: '在底部顯示可用的按鍵。',
              virtual: '只渲染可見的列：一律、從不，或 <code>auto</code>（超過 200 列時啟用）。',
              label: '對話框及其搜尋欄位的無障礙名稱。',
              placeholder: '搜尋欄位為空時顯示的文字。',
              run: '每執行一個命令就發出該命令。',
              queryChange: '在輸入時發出文字，用於伺服器端搜尋。',
              show: '開啟面板。',
              hide: '關閉面板。',
              toggle: '開啟面板，或將它關閉。',
              back: '返回上一頁。',
            },
          },
          NuiCommand: {
            summary: '一個命令，或一頁命令。',
            members: {
              label: '顯示並用於搜尋的文字。',
              description: '顯示在主要文字下方的次要文字。',
              group: '群組相同的命令會列在該群組標題下。',
              keywords: '搜尋時額外比對的詞，例如同義詞。',
              shortcut: '隨命令一起顯示的按鍵，例如 <code>mod+shift+p</code>。',
              disabled: '會顯示，但無法執行。',
              children: '下一層的命令：選擇此命令會將它們以頁面開啟。',
              run: '被選取時，在面板關閉後執行。',
              id: '供你自行使用，例如在 <code>(run)</code> 中區分命令。',
            },
          },
        },
        keyboard: [
          ['⌘K 或 Ctrl+K', '開啟或關閉面板。'],
          ['向下 / 向上鍵', '在命令之間移動，到達兩端時會循環。'],
          ['Page Down / Page Up', '一次移動十個命令。'],
          ['Enter', '執行醒目提示的命令，或開啟它的頁面。'],
          ['Esc', '返回上一頁；在最上層時關閉面板。'],
          ['Backspace', '在頁面中且搜尋欄位為空時，返回上一頁。'],
        ],
        notes: [
          '它是原生的強制回應 <code>&lt;dialog&gt;</code>：後方頁面無法互動，焦點會留在其中，關閉後焦點會回到原本的位置。',
          '搜尋欄位是一個 <code>combobox</code>，透過 <code>aria-activedescendant</code> 指向醒目提示的命令。在某個頁面中時，它會使用該頁面的名稱。',
          '快速鍵是每個選項中的文字，因此螢幕閱讀器會唸出來。底部的按鍵提示對輔助科技隱藏。',
          '不含 Ctrl、Alt 或 ⌘ 的快速鍵，在欄位中輸入文字時不會觸發。',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Angular Popover 與懸停卡片元件',
        summary: '在按鈕旁浮現的面板，以及滑鼠懸停時出現、內容豐富的工具提示。',
        description:
          '以原生 Popover API 打造的無障礙 Angular Popover 和懸停卡片：可翻轉並跟隨的定位、箭頭、點擊外部即關閉，以及懸停延遲。',
        apiDescription:
          'Needless UI Popover 的 API 參考文件：nuiPopover 和 nuiHovercard 的 side、align、offset 與 arrow，以及它們的觸發元素指令。',
        a11yDescription:
          'Needless UI Popover 和懸停卡片的鍵盤操作與無障礙支援：dialog 與 tooltip 角色、焦點返回、Esc 鍵和 WCAG 1.4.13。',
        overview: [
          'Popover 是在按鈕旁開啟的小面板，用來放置可互動的內容：篩選條件、簡短的表單、顏色選擇器。它是原生的 <code>popover="auto"</code>，因此瀏覽器會在按 Esc 鍵或點擊外部時關閉它、歸還焦點，並在 Tab 鍵順序中把它放在觸發元素之後。',
          '懸停卡片是內容豐富的工具提示。滑鼠短暫懸停後就會開啟，透過鍵盤取得焦點時則立即開啟，用來描述它的觸發元素。指標移到卡片上時會保持開啟，因此可以閱讀和選取其中的文字。',
          '兩者在空間不足時都會翻轉到另一側，始終留在畫面內，並在頁面捲動時跟隨觸發元素。',
        ],
        examples: {
          filters: {
            title: '篩選',
            text: '內含表單的 Popover。<code>arrow</code> 讓它指向觸發元素，<code>hide()</code> 可從程式碼關閉它。',
          },
          profile: {
            title: '懸停卡片',
            text: '將滑鼠懸停在名字上，或用 Tab 鍵移到它上面。卡片會描述該連結，因此螢幕閱讀器會在唸出名字後唸出卡片。',
          },
          sides: {
            title: '方位與進場動畫',
            text: '<code>side</code> 和 <code>align</code> 決定它在哪裡開啟；<code>start</code> 和 <code>end</code> 會依循書寫方向。<code>enter</code> 和 <code>motion</code> 決定它如何進場。',
          },
        },
        api: {
          NuiPopover: {
            summary: '原生 popover，放在開啟它的元素旁邊。',
            members: {
              side: '在觸發元素的哪一側開啟。空間不足時會翻轉。',
              align: '沿該側與觸發元素的對齊方式。',
              offset: '觸發元素與面板之間的間距，單位為像素。',
              arrow: '顯示指向觸發元素的箭頭。',
              openChange: '開啟或關閉時發出。',
              show: '在任何元素旁開啟它。',
              hide: '關閉它。',
            },
          },
          NuiPopoverTrigger: {
            summary: '透過原生的 <code>popovertarget</code> 開啟和關閉 Popover 的按鈕。',
            members: { nuiPopoverTrigger: '要開啟的 Popover。' },
          },
          NuiHovercard: {
            summary: '描述其觸發元素、內容豐富的工具提示。',
            members: {
              side: '在觸發元素的哪一側開啟。空間不足時會翻轉。',
              align: '沿該側與觸發元素的對齊方式。',
              offset: '觸發元素與卡片之間的間距，單位為像素。',
              arrow: '顯示指向觸發元素的箭頭。',
              openDelay: '懸停多少毫秒後開啟。透過鍵盤取得焦點時會立即開啟。',
              closeDelay: '指標離開後，經過多少毫秒關閉。',
              openChange: '開啟或關閉時發出。',
              show: '在任何元素旁開啟它。',
              hide: '關閉它。',
            },
          },
          NuiHovercardTrigger: {
            summary: '在滑鼠懸停和鍵盤取得焦點時顯示懸停卡片，並將它設為此元素的描述。',
            members: { nuiHovercardTrigger: '要顯示的懸停卡片。' },
          },
        },
        keyboard: [
          ['在觸發元素上按 Enter 或空白鍵', '開啟或關閉 Popover。'],
          ['Tab', '移入已開啟的 Popover，它緊接在觸發元素之後。'],
          ['Esc', '關閉 Popover 並將焦點移回觸發元素，或隱藏懸停卡片。'],
        ],
        notes: [
          'Popover 是非強制回應的 <code>dialog</code>：請用 <code>aria-label</code> 或 <code>aria-labelledby</code> 為它命名。它的觸發元素會加上 <code>aria-haspopup</code>，以及由瀏覽器維護的 <code>aria-expanded</code>。',
          '懸停卡片是一個 <code>tooltip</code>，也是其觸發元素的 <code>aria-describedby</code>，因此它的文字會與觸發元素一起被朗讀。請勿在其中放置控制項；需要控制項時請改用 Popover。',
          '懸停卡片符合 WCAG 1.4.13：按 Esc 鍵可將它隱藏而不移動焦點，指標可以移到卡片上，而且在滑鼠懸停或取得焦點期間會持續顯示。',
        ],
      },
      select: {
        name: 'Select',
        title: 'Angular Select 下拉式選單元件',
        summary: '從簡短或龐大的清單中選取一個或多個選項。',
        description:
          '無障礙的 Angular Select：單選或多選、群組、樹狀結構、鍵入跳轉、全選，以及適用於任意長度清單的虛擬捲動。',
        apiDescription:
          'Needless UI Select 的 API 參考文件：nui-select 的 value、values、multiple、selectAll 和 virtual，NuiOption 的結構，以及自訂列。',
        a11yDescription:
          'Needless UI Select 的鍵盤操作與無障礙支援：附清單方塊或樹狀結構、僅供選取的 combobox、aria-activedescendant、鍵入搜尋和樹狀導覽鍵。',
        overview: [
          'Select 是點擊後會開啟選項清單的按鈕。傳入 <code>options</code>（一個 <code>NuiOption</code> 陣列），並繫結 <code>[(value)]</code>；啟用 <code>multiple</code> 時則繫結 <code>[(values)]</code>。它也支援 Signal Forms、響應式表單和 <code>ngModel</code>。',
          '選項可以帶有 <code>group</code>、<code>description</code> 和 <code>keywords</code>，<code>children</code> 則會讓清單變成樹狀結構。超過 200 列時只會渲染可見的列，因此十萬個選項也能像十個一樣快速開啟。',
          '如果想輸入文字來篩選，請改用 <a href="/components/combobox">Combobox</a>。',
        ],
        examples: {
          countries: {
            title: '群組',
            text: '帶有 <code>group</code> 的選項會列在對應的群組標題下。輸入一個字母會跳到下一個以該字母開頭的選項。',
          },
          toppings: {
            title: '一次多選',
            text: '<code>multiple</code> 會讓清單保持開啟，並繫結 <code>[(values)]</code>。<code>selectAll</code> 會加上一個全選或全部清除的按鈕。停用的選項無法選取。',
          },
          folders: {
            title: '樹狀結構',
            text: '帶有 <code>children</code> 的選項會構成樹狀結構。開啟清單時，已選選項所在的資料夾會自動展開。',
          },
          zones: {
            title: '長清單',
            text: '依地區列出所有時區。超過 200 列時只渲染可見的列，而醒目提示的選項會一直保持渲染，供螢幕閱讀器使用。',
          },
        },
        api: {
          NuiSelect: {
            summary: '點擊後開啟選項清單的按鈕。',
            members: {
              options: '選項，以 <code>NuiOption</code> 物件的形式提供。',
              value: '選取的值，或 <code>null</code>。也能搭配表單使用。',
              values: '啟用 <code>multiple</code> 時選取的多個值。',
              multiple: '允許選取多個選項。選取期間清單會保持開啟。',
              selectAll: '啟用 <code>multiple</code> 時，加上一個全選或全部清除的按鈕。',
              placeholder: '尚未選取任何項目時顯示的文字。',
              label: '無障礙名稱，在沒有 <code>&lt;label&gt;</code> 為按鈕命名時使用。',
              triggerId: '按鈕的 id，供 <code>&lt;label for&gt;</code> 使用。',
              disabled: '停用 Select。',
              compareWith: '判斷兩個值是否為同一個選項，適用於物件型別的值。',
              virtual: '只渲染可見的列：一律、從不，或 <code>auto</code>（超過 200 列時啟用）。',
              openChange: '清單開啟或關閉時發出。',
              show: '開啟清單。',
              hide: '關閉清單。',
              focus: '讓按鈕取得焦點。',
            },
          },
          NuiOption: {
            summary: '單一選項。Select、Combobox 和命令面板都接收這種物件。',
            members: {
              value: '選取它時設定的值，可以是任何型別。',
              label: '顯示並用於搜尋的文字。',
              description: '顯示在主要文字下方的次要文字。',
              group: '群組相同的選項會依序列在該群組標題下。',
              keywords: '搜尋時額外比對的詞，例如同義詞或代碼。',
              disabled: '會顯示，但無法選取。',
              children: '下一層的選項，會讓清單變成樹狀結構。',
            },
          },
          NuiOptionTemplate: {
            summary:
              '把它放在元件內的 <code>ng-template</code> 上，就能自行繪製每一列。其 context 包含選項和它所在的列。',
            members: {},
          },
          NuiOptionText: {
            summary: '繪製選項的顯示文字（標示出相符的字母）、描述和路徑，用於你自訂的列。',
            members: { nuiOptionText: '列，取自範本的 context。' },
          },
        },
        keyboard: [
          ['向下 / 向上鍵', '開啟清單，然後在選項之間移動。'],
          ['Home / End', '跳到第一個或最後一個選項。'],
          ['Page Down / Page Up', '一次移動十個選項。'],
          ['Enter 或空白鍵', '開啟清單，或選取醒目提示的選項。'],
          ['字母鍵', '跳到下一個以這些字母開頭的選項。'],
          [
            '向右 / 向左鍵',
            '在樹狀結構中，展開選項或移到它的第一個子項目；收合選項或移到它的上層項目。在由右至左的文字中左右方向相反。',
          ],
          ['Alt + 向上鍵', '選取醒目提示的選項並關閉清單。'],
          ['Tab', '單選時，選取醒目提示的選項並移到下一個元素。'],
          ['Esc', '不做選取，直接關閉清單。'],
        ],
        notes: [
          '按鈕是僅供選取的 <code>combobox</code>，帶有 <code>aria-expanded</code> 和 <code>aria-controls</code>。焦點會留在按鈕上，<code>aria-activedescendant</code> 會指向醒目提示的選項。',
          '清單是一個 <code>listbox</code>，或是帶有 <code>aria-level</code> 和 <code>aria-expanded</code> 的 <code>tree</code>。即使只渲染部分的列，<code>aria-setsize</code> 和 <code>aria-posinset</code> 仍會保持正確。',
          '醒目提示的選項使用實色填滿，在強制色彩模式下還會顯示外框。',
          '請用指向 <code>triggerId</code> 的 <code>&lt;label for&gt;</code> 為它命名，或使用 <code>label</code>。',
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
