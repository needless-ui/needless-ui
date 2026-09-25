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
      grid: {
        name: '資料表格',
        title: 'Angular 資料表格元件',
        summary: '對任意數量的列進行排序、篩選、選取、編輯和捲動瀏覽。',
        description:
          '以原生 table 元素打造的無障礙 Angular 資料表格：多欄排序、篩選、分頁或虛擬捲動、選取、編輯，以及可移動的欄。',
        apiDescription:
          'Needless UI 資料表格的 API 參考文件：nui-grid 的輸入屬性與雙向繫結、NuiGridColumn 欄定義，以及自訂儲存格的範本。',
        a11yDescription:
          'Needless UI 資料表格的鍵盤互動與無障礙支援：帶有 grid 角色的原生表格、Tab 鍵只停留一次、方向鍵導覽和狀態朗讀。',
        overview: [
          '資料表格以原生 table 元素為基礎，支援排序、篩選、分頁和編輯。定義好 <code>columns</code>，傳入 <code>rows</code>，每個儲存格就會依類型和地區設定格式化：數字、貨幣、日期、是或否，以及 <code>enum</code> 值的標籤。',
          '它的狀態都存放在模型中，可以繫結、儲存或傳送到伺服器：<code>sort</code>、<code>filters</code>、<code>search</code>、<code>page</code>、<code>selected</code>，以及記錄使用者設定的欄寬、順序、固定和隱藏欄的 <code>columnState</code>。不分頁時只渲染可見的列，因此十萬列捲動起來也像十列一樣流暢。',
          '每個儲存格都能用鍵盤抵達；每一欄的面板都能對該欄排序、篩選、固定、移動、自動調整欄寬和隱藏。',
          '列也可以巢狀呈現。<code>groupBy</code> 會依欄將列分組，並在群組列和 <code>totals</code> 合計列中顯示每一欄的 <code>aggregate</code>；<code>children</code> 會顯示樹狀資料；<code>nuiGridDetail</code> 範本則會在列的下方展開。分組或巢狀呈現時，表格會成為 <code>treegrid</code>。',
        ],
        examples: {
          orders: {
            title: '搜尋、排序與分頁',
            text: '輸入文字即可搜尋所有欄。點擊欄標題即可排序，按住 Shift 鍵點擊可再加入第二個排序欄。<code>nuiGridCell</code> 負責繪製狀態，<code>exportCsv()</code> 則會匯出目前顯示的內容。',
          },
          selection: {
            title: '列選取',
            text: '<code>selection="multiple"</code> 會加上核取方塊，並繫結所選列的 key。按住 Shift 鍵點擊可選取一個範圍；標題列的核取方塊會選取所有符合篩選條件的列。',
          },
          editing: {
            title: '編輯',
            text: '雙擊儲存格、按 Enter 鍵，或直接輸入即可編輯。<code>validate</code> 會讓編輯器保持開啟並顯示訊息；確認後的編輯會更新 <code>rows</code> 並發出 <code>cellEdit</code>。',
          },
          big: {
            title: '十萬列',
            text: '不分頁時只渲染可見的列。固定的欄會停留在兩側邊緣，<code>columnState</code> 會保留使用者調整後的版面。',
          },
          server: {
            title: '伺服器資料',
            text: '在 <code>server</code> 模式下，表格會照收到的樣子顯示列，並透過 <code>queryChange</code> 回報每次變更。擷取資料期間請設定 <code>loading</code>。',
          },
          groups: {
            title: '群組與合計',
            text: '依一欄或兩欄分組。群組列會計算訂單數量，並加總及平均金額；<code>totals</code> 會為所有列加上同樣的統計。按向左鍵可收合群組。',
          },
          tree: {
            title: '樹狀資料',
            text: '<code>children</code> 讓每個資料夾帶有自己的檔案。按向右鍵或切換按鈕即可展開列，<code>[(expanded)]</code> 會記住哪些列已展開。搜尋時，符合項目上層的資料夾會保持展開。',
          },
          details: {
            title: '列的詳細資料',
            text: '<code>nuiGridDetail</code> 範本會在訂單下方顯示它的明細，由一欄切換按鈕開啟；<code>[(details)]</code> 會記住哪些列已開啟。',
          },
          live: {
            title: '即時資料、匯出與列印',
            text: '價格每兩秒變動一次，<code>flash</code> 會讓有變動的儲存格閃爍一下。<code>exportXlsx()</code> 會下載真正的試算表，<code>print()</code> 會列印所有列，<code>layout="auto"</code> 則會在窄螢幕上以卡片顯示列。',
          },
        },
        api: {
          NuiGrid: {
            summary: '以原生 table 元素打造的資料表格。',
            members: {
              rows: '資料。編輯會替換列，因此請用 <code>[(rows)]</code> 繫結。',
              columns: '欄，以 <code>NuiGridColumn</code> 物件的形式提供。',
              rowId: '列的 key，用於選取與追蹤。',
              label: '表格的無障礙名稱。',
              selection: '列是否可選取，以及可選取幾列。',
              selected: '所選列的 key。',
              sort: '排序，以 <code>{ column, direction }</code> 物件的形式提供；排在前面的優先。',
              filters: '依欄 id 設定的篩選條件：一個運算子和一個值。',
              search: '必須全部出現在同一列中的詞。',
              pageSize: '每頁列數；設為 0 則顯示為單一捲動清單。',
              page: '目前顯示的頁面，從 0 開始。',
              pageSizes: '分頁器中可選的每頁列數。',
              virtual:
                '只渲染可見的列：一律、從不，或 <code>auto</code>（不分頁且超過 100 列時啟用）。',
              height: '限制表格高度的 CSS 長度，內容會在表格內捲動。',
              columnState: '每一欄的寬度、順序、固定與可見性，用於儲存和還原。',
              mode: '<code>server</code> 會照收到的樣子顯示列，並把排序、篩選和分頁交給你處理。',
              total: '伺服器上的總列數。',
              loading: '顯示進度列；沒有列時顯示預留位置列。',
              locale: '用於格式化數字和日期，以及解析輸入的數字。',
              labels: '表格顯示或朗讀的所有文字，供翻譯使用。',
              rowActivate: '按 Enter 鍵或雙擊開啟某列時，發出該列。',
              cellEdit: '每次確認編輯時發出該編輯。',
              queryChange: '排序、篩選、搜尋或頁碼變更時發出它們。',
              exportCsv: '以 CSV 格式傳回篩選和排序後的列，只包含可見的欄。',
              focusCell: '讓某個儲存格取得焦點；第 <code>-1</code> 列是標題列。',
              clearFilters: '清除所有篩選條件和搜尋。',
              'groupBy, collapsed': '用來將列分組的欄（由最外層開始），以及已收合群組的 key。',
              children: '列的子列：表格會顯示樹狀資料。',
              'expanded, details': '樹狀資料中已展開的列的 key，以及已開啟詳細資料的列的 key。',
              'totals, flash':
                '彙總所有篩選後列的一列；以及文字變動時會閃爍的儲存格，僅適用於具有固定 <code>rowId</code> 的列。',
              layout: '<code>list</code> 以卡片顯示列，<code>auto</code> 則只在窄螢幕上這樣顯示。',
              'exportXlsx, print': '以試算表形式匯出篩選和排序後的列；列印所有列。',
            },
          },
          NuiGridColumn: {
            summary: '一欄。只有 <code>id</code> 和 <code>header</code> 是必要的。',
            members: {
              id: '唯一值；也是排序、篩選和欄狀態中使用的 key。',
              header: '欄標題文字。',
              value: '列的某個 key，或以列為參數的函式。預設為 <code>row[id]</code>。',
              type: '決定對齊方式、排序、篩選和編輯器。',
              format: '用於數字和日期的 <code>Intl</code> 選項，或產生文字的函式。',
              options: '<code>enum</code> 欄的選項，以 <code>NuiOption</code> 物件的形式提供。',
              'width, minWidth, maxWidth': '單位為像素。',
              flex: '與其他 <code>flex</code> 欄分配剩餘的空間。',
              align: '預設值取決於類型：數字和日期對齊結尾端。',
              'pinned, hidden': '欄的初始固定與可見狀態。',
              'sortable, filterable, resizable, reorderable, hideable':
                '每一項都可以設為 <code>false</code> 來關閉。',
              compare: '自訂排序。',
              'editable, validate': '儲存格是否可編輯，以及值無效時顯示的訊息。',
              set: '產生編輯後的列。預設為帶有新值的副本。',
              aggregate: '群組列和合計列顯示的內容：總和、平均值、最小值、最大值、計數或函式。',
            },
          },
          NuiGridCell: {
            summary: '繪製某一欄的儲存格。其 context 包含列、它的值和文字。',
            members: { nuiGridCell: '欄的 id。' },
          },
          NuiGridHeader: {
            summary: '繪製某一欄的欄標題。',
            members: { nuiGridHeader: '欄的 id。' },
          },
          NuiGridEmpty: {
            summary: '沒有列時顯示的內容。其 context 會說明這些列是否被篩選條件隱藏。',
            members: {},
          },
          NuiGridDetail: {
            summary: '列的詳細資料，開啟後顯示在該列下方。其 context 包含該列。',
            members: {},
          },
        },
        keyboard: [
          ['方向鍵', '移動一個儲存格。在由右至左的文字中，左右方向相反。'],
          ['Home / End', '移到本列（按住 Ctrl 時為整個表格）的第一個或最後一個儲存格。'],
          ['Page Down / Page Up', '移動一個畫面的列數。'],
          ['在欄標題上按 Enter 或空白鍵', '依該欄排序；按住 Shift 時，將該欄加入排序。'],
          ['在欄標題上按 Alt + 向下鍵', '開啟欄面板。'],
          ['在欄標題上按 Alt + 向左或向右鍵', '讓欄變窄或變寬；按住 Shift 時則移動該欄。'],
          ['在儲存格上按 Enter', '編輯該儲存格；無法編輯時則開啟該列。'],
          ['F2 或直接輸入', '編輯儲存格。'],
          ['編輯時按 Enter、Esc 或 Tab', 'Enter 確認，Esc 取消，Tab 確認並移到下一格。'],
          ['空白鍵', '選取該列；按住 Shift 時，選取自上次選取的列起的所有列。'],
          ['Ctrl + A', '選取所有列。'],
          ['在群組上按向右 / 向左鍵', '展開或收合群組；在有子列的列的第一個儲存格上也一樣。'],
          ['在群組上按 Enter', '展開或收合群組；按空白鍵則會選取其中的列。'],
          ['在詳細資料切換按鈕上按 Enter', '顯示或隱藏該列的詳細資料。'],
        ],
        notes: [
          '它是帶有 <code>role="grid"</code> 的原生 <code>&lt;table&gt;</code>，以 <code>label</code> 命名。欄標題帶有 <code>aria-sort</code>，可選取的列帶有 <code>aria-selected</code>。',
          '表格在 Tab 鍵順序中只佔一個位置。焦點透過漫遊式 <code>tabindex</code> 在儲存格之間移動，因此螢幕閱讀器會連同列標題和欄標題一起朗讀每個儲存格。',
          '分頁或虛擬化時，<code>aria-rowcount</code>、<code>aria-rowindex</code> 和 <code>aria-colindex</code> 仍會保持正確。',
          '排序、篩選、換頁和編輯錯誤，會透過不打斷目前朗讀的狀態區域朗讀出來。',
          '有分組或巢狀的列時，表格會成為 <code>treegrid</code>：列帶有 <code>aria-level</code>、<code>aria-setsize</code> 和 <code>aria-posinset</code>，可展開的列還帶有 <code>aria-expanded</code>。彙總值會連同類型一起朗讀，例如「Sum: 475」。',
        ],
      },
      chat: {
        name: '聊天',
        title: 'Angular AI 聊天元件',
        summary: '與模型對話：串流回覆、工具、版本和檔案。',
        description:
          '專為 AI 助理打造的無障礙 Angular 聊天元件：以 Markdown 串流回覆，支援推理過程、工具呼叫、來源、以版本保留的重試和檔案。',
        apiDescription:
          'Needless UI 聊天元件的 API 參考文件：nui-chat 的輸入屬性、串流回覆的 NuiChatSession、訊息、工具範本和串流讀取函式。',
        a11yDescription:
          'Needless UI 聊天元件的鍵盤互動與無障礙支援：由具名訊息組成的 feed、Page Up 和 Page Down，以及完成後才朗讀的回覆。',
        overview: [
          '聊天元件涵蓋使用者與模型之間的一切。用一個 <code>respond</code> 函式建立 <code>NuiChatSession</code>，其餘交給 <code>&lt;nui-chat&gt;</code>：它以 Markdown 串流顯示回覆，自動往下跟隨，直到使用者往上捲動為止；回覆送達期間，傳送按鈕會變成停止按鈕。',
          '<code>respond</code> 可以傳回文字、Promise、<code>async function*</code> 或 Observable，因此任何 API 都能接上。除了文字，回覆還能帶有模型的推理過程、工具呼叫（由你的範本繪製），以及它引用的來源。<code>nuiEventStream</code> 會讀取大多數模型 API 以串流傳送的伺服器傳送事件。',
          '什麼都不會遺失：重試的回覆或編輯過的問題會成為舊版本旁的新版本，對話會保留每一個分支。螢幕閱讀器會等每則回覆完成後才朗讀，而不是逐字朗讀。',
        ],
        examples: {
          assistant: {
            title: '助理',
            text: '點擊建議即可開始對話。回覆以 Markdown 串流顯示；你可以停止、重試、評分回覆，或編輯自己的問題。<code>attach</code> 會接收選取、貼上或拖放的檔案。',
          },
          tools: {
            title: '推理、工具與來源',
            text: '增量資料會把模型的推理過程、工具呼叫和來源加入回覆。<code>nuiChatTool</code> 把天氣工具繪製成卡片；其他工具則連同輸入和輸出收合起來。',
          },
          server: {
            title: '從伺服器串流',
            text: '<code>nuiEventStream</code> 會讀取 OpenAI 風格的事件串流，<code>NuiChatError</code> 會顯示它的訊息。<code>all()</code> 會儲存整段對話，連同所有版本。',
          },
        },
        api: {
          NuiChat: {
            summary: '對話和輸入框，合而為一。',
            members: {
              session: '要顯示的對話。',
              assistant: '助理的名稱，用於螢幕閱讀器朗讀的標題中。',
              headingLevel:
                '每則訊息標題的層級，這些標題只有螢幕閱讀器看得到。回覆中的標題再低一層。',
              announce: '回覆完成時螢幕閱讀器朗讀的內容：全部、簡短通知或不朗讀。',
              images: '顯示回覆中的圖片；否則以圖片的文字作為指向圖片的連結。',
              value: '正在輸入的文字。',
              placeholder: '輸入框為空時顯示的提示。',
              suggestions: '點一下就能送出的提示詞，會顯示到第一則訊息送出為止。',
              sendOn:
                '按 Enter 送出，還是按 Ctrl 或 ⌘ + Enter 送出。<code>auto</code> 在有實體鍵盤時按 Enter 送出；在觸控螢幕上，Return 鍵會換行，由按鈕送出。',
              disabled: '禁止輸入框送出訊息。',
              attach: '接收檔案：選取、貼上或拖放皆可。',
              accept: '可接收的檔案類型，寫法同 <code>&lt;input type="file"&gt;</code>。',
              maxFiles: '一則訊息最多可附加的檔案數。',
              maxSize: '可接收的最大檔案大小，單位為位元組。',
              labels: '聊天元件顯示或朗讀的所有文字，供翻譯使用。',
              rated: '發出使用者評分的回覆及其評分；收回評分時為 <code>null</code>。',
              focus: '讓文字欄位取得焦點。',
              scrollToEnd: '捲動到最新訊息，並持續跟隨。',
            },
          },
          NuiChatSession: {
            summary:
              '不含任何 DOM 的對話本身。在元件中以 <code>respond</code>、<code>messages</code> 和 <code>id</code> 選項建立它。',
            members: {
              respond:
                '由你實作：針對 <code>request.messages</code> 寫出回覆，並在 <code>request.signal</code> 中止時停止。',
              messages: '畫面上的對話。',
              all: '所有版本的所有訊息，可儲存後再以 <code>messages</code> 傳回。',
              busy: '是否有回覆正在傳送中。',
              send: '送出一則訊息並要求回覆。',
              stop: '停止回覆，並保留已寫出的內容。',
              retry: '重新提問。新回覆會成為與舊回覆並列的一個版本。',
              edit: '為使用者的某則訊息送出新版本。',
              versions: '一則訊息的所有版本，由舊到新排列。',
              show: '將對話切換到這個版本。',
              rate: '記錄使用者對某則回覆的評分。',
              'remove, load, clear': '移除一則訊息及其後的內容、取代整段對話，或從頭開始。',
            },
          },
          NuiChatMessage: {
            summary: '一則訊息。<code>parent</code> 相同的訊息互為版本。',
            members: {
              'id, parent': '訊息的 key，以及它所接續的那則訊息。',
              role: '由誰撰寫。',
              text: '助理傳來的是 Markdown，使用者傳來的是純文字。',
              status: '回覆目前的階段，從等待到完成。',
              reasoning: '模型在回答前的思考內容。',
              tools: '它呼叫的工具，以及工具的狀態、輸入和輸出。',
              sources: '它引用的網頁。',
              attachments: '隨訊息送出的檔案。',
              rating: '使用者的評分。',
              data: '需要一併保存的其他資料，例如模型名稱。',
            },
          },
          NuiChatToolTemplate: {
            summary: '繪製工具呼叫，例如一張天氣卡片。其 context 包含該次呼叫和它所屬的訊息。',
            members: {
              nuiChatTool: '工具名稱。未指定時，會繪製其他範本都未指定的所有呼叫。',
            },
          },
          NuiChatThread: {
            summary:
              '單獨的對話部分，用於你自己的版面。它接收 <code>nui-chat</code> 中與對話有關的輸入屬性。',
            members: {},
          },
          NuiChatComposer: {
            summary: '單獨的輸入框。它接收 <code>nui-chat</code> 中與撰寫訊息有關的輸入屬性。',
            members: {},
          },
          NuiServerEvent: {
            summary:
              '<code>nuiEventStream</code> 為每個事件產出的物件。<code>nuiTextStream</code> 讀取純文字，<code>nuiJsonStream</code> 讀取 JSON Lines；三者都接收 <code>fetch</code> 的回應。',
            members: {
              event: '事件名稱。',
              data: '串接後的 data 行。',
              id: '串流最後傳送的 id。',
            },
          },
          NuiChatError: {
            summary:
              '從 <code>respond</code> 擲出它，就會顯示它的訊息。其他錯誤只會顯示一般訊息，因此不會洩漏內部資訊。',
            members: {},
          },
        },
        keyboard: [
          ['Page Down / Page Up', '移到下一則或上一則訊息。'],
          ['Ctrl + End / Ctrl + Home', '離開對話，移到它之後或之前的元素。'],
          ['Enter', '送出。按住 Shift 時換行。'],
          ['Esc', '停止編輯訊息。'],
        ],
        notes: [
          '對話是由 <code>article</code> 組成的 <code>feed</code>。每則訊息都以只有螢幕閱讀器看得到的標題命名，例如「You said」，並帶有 <code>aria-posinset</code> 和 <code>aria-setsize</code>。',
          '正在撰寫的回覆帶有 <code>aria-busy</code>。完成後會一次完整朗讀；失敗則會立即朗讀。',
          '每個圖示按鈕都有名稱和工具提示。評分按鈕是切換按鈕，版本切換器是名稱類似「Version 2 of 3」的群組。',
          '推理過程和工具呼叫都是原生的可收合元件。移除檔案後，焦點會回到文字欄位。',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Angular Markdown 渲染元件',
        summary: '安全地渲染 Markdown，串流時也不例外。',
        description:
          '適用於 AI 回覆的安全 Angular Markdown 渲染器：GitHub 風格的表格、工作清單和程式碼區塊，以真實元素繪製，串流時依然流暢。',
        apiDescription:
          'Needless UI Markdown 渲染器的 API 參考文件：nui-markdown 的輸入屬性、程式碼區塊的範本，以及背後的解析器。',
        a11yDescription:
          'Needless UI Markdown 渲染器的無障礙支援：真實的標題、清單和表格，具名的捲動區域，以及會朗讀結果的複製按鈕。',
        overview: [
          'Markdown 渲染器會把模型所寫的那類文字轉成真實的元素：標題、清單與工作清單、引言、表格、附複製按鈕的程式碼區塊，以及連結。它先把文字解析成一棵樹，再用範本繪製，因此原始 HTML 一律維持為文字，任何內容都不會以 HTML 插入。',
          '啟用 <code>streaming</code> 後，寫到一半的文字也會呈現得像完成時一樣：尚未閉合的程式碼圍欄已經是程式碼區塊，落單的 <code>**</code> 會等待另一半，游標則跟在最後一個字後面。沒有變動的區塊會保留原本的 DOM。',
          '連結只適用於網頁、電子郵件和電話地址；在你開啟 <code>images</code> 之前，圖片都會保持為連結。',
        ],
        examples: {
          document: {
            title: '文件',
            text: '標題從 <code>headingLevel</code> 開始，因此能接在頁面本身的標題之下。過寬的表格和程式碼會在各自的區域內捲動。',
          },
          streaming: {
            title: '串流',
            text: '同樣的文字，每次只來幾個字元。不會有符號一閃而過，而且只有最後一個區塊會重新渲染。',
          },
          highlight: {
            title: '語法醒目提示',
            text: '<code>nuiMarkdownCode</code> 用你的範本繪製程式碼區塊，這裡搭配了一個迷你的醒目提示工具。範本會取得程式碼及其語言。',
          },
        },
        api: {
          NuiMarkdown: {
            summary: '將 Markdown 渲染為元素。',
            members: {
              text: 'Markdown 文字。',
              streaming: '文字仍在陸續送達。',
              headingLevel: '<code>#</code> 標題的層級。更深的標題依序遞增，最多到 6。',
              images: '顯示圖片。否則以圖片的文字作為指向圖片的連結，因為圖片可能被用來追蹤。',
              labels: '複製按鈕的文字等，供翻譯使用。',
              codeTemplate: '來自其他地方的程式碼區塊範本，例如來自包含它的聊天元件。',
            },
          },
          NuiMarkdownCode: {
            summary:
              '繪製程式碼區塊。其 context 包含程式碼、<code>lang</code>，以及區塊仍在送達時的 <code>open</code>。',
            members: {},
          },
          nuiParseMarkdown: {
            summary: '解析器及其輔助函式，可在不使用元件時使用。',
            members: {
              nuiParseMarkdown: '元件所繪製、由區塊和行內元素組成的樹。',
              nuiMarkdownToText: '純文字，每個區塊一行，用於朗讀或預覽。',
              nuiSafeUrl: '判斷連結是否指向網頁、電子郵件或電話地址。',
            },
          },
        },
        keyboard: [['Tab', '移到連結、複製按鈕，以及可捲動的過寬表格和程式碼。']],
        notes: [
          '標題、清單、引言、帶有 <code>th</code> 欄標題和 <code>scope</code> 的表格，以及程式碼，都是真實的元素。',
          '過寬的表格和程式碼區塊會在可取得焦點的區域內捲動；表格所在的區域會以它的欄標題命名。',
          '工作清單的核取方塊會說明每項工作是否已完成。複製按鈕的名稱是「Copy code」，並透過狀態訊息朗讀「Copied」。',
          '串流時的游標對螢幕閱讀器隱藏，並在開啟減少動態效果時保持靜止。',
        ],
      },
      calendar: {
        name: '日曆',
        title: 'Angular 日曆元件',
        summary: '選取單一日期、日期範圍或多個日期，也能用鍵盤操作。',
        description:
          '無障礙的 Angular 日曆：可選取單一日期、日期範圍或多個日期，支援最小和最大日期、無法選取的日期、多個月份並排顯示和週數。',
        apiDescription:
          'Needless UI 日曆的 API 參考文件：nui-calendar 的選取模式，min、max 和 unavailable 限定的日期，多個月份並排顯示，以及可翻譯的文字。',
        a11yDescription:
          'Needless UI 日曆的鍵盤操作與無障礙支援：每天都有名稱的日期網格、按日和按週移動的方向鍵，以及按月翻頁的 Page Up 和 Page Down。',
        overview: [
          '日曆可以選取單一日期、日期範圍或多個日期。值是一般的 ISO 日期，例如 <code>2026-09-25</code>，不含會讓日期偏移的時區，因此可以直接傳給伺服器或 <code>&lt;input type="date"&gt;</code>。',
          '每週從地區設定的第一天開始，月份和星期的名稱以及數字都使用其語言。<code>min</code>、<code>max</code> 和 <code>unavailable</code> 用來排除日期，<code>months</code> 可並排顯示多個月份；要前往較遠的日期時，點選標題即可切換到月份和年份檢視。',
          '和 WAI-ARIA 的日期選擇器模式一樣，每一天都能用鍵盤到達，並以完整日期命名。',
        ],
        examples: {
          delivery: {
            title: '送貨日期',
            text: '今天之前、<code>max</code> 之後或被 <code>unavailable</code> 排除的日期都無法選取，但鍵盤仍會經過這些日期。',
          },
          stay: {
            title: '日期範圍',
            text: '使用 <code>selection="range"</code> 時，第一次選取會決定範圍的起點，在第二次選取之前，範圍的醒目提示會跟著指標移動。<code>months="2"</code> 和 <code>weekNumbers</code> 可以一次顯示更多內容。',
          },
          'days-off': {
            title: '多個日期',
            text: '使用 <code>selection="multiple"</code> 時，每次選取都會加入或移除一個日期。<code>firstDay</code> 可以讓一週從地區設定預設以外的另一天開始。',
          },
        },
        api: {
          NuiCalendar: {
            summary: '用來選取日期的日曆。',
            members: {
              selection: '可以選取多少個日期。',
              value: '選取的日期。',
              values: '選取的多個日期，依先後順序排列。',
              range: '選取的範圍，包含兩端。',
              month: '顯示的月份；同時顯示多個月份時為第一個。',
              view: '日、月或年檢視。',
              'min, max': '可以選取的第一天和最後一天。',
              unavailable: '排除其他日期，例如國定假日。',
              months: '並排顯示的月份數。',
              weekNumbers: '顯示 ISO 週數。',
              firstDay: '一週的第一天，1 代表星期一。預設依循地區設定。',
              locale: '用來格式化名稱和數字，並決定一週的第一天。',
              labels: '日曆顯示或朗讀的所有文字，供翻譯使用。',
              picked: '每次選取時發出：一個日期，或選好兩端後的範圍。',
              focusDate: '將鍵盤焦點移到某一天，並顯示它所在的月份。',
            },
          },
          NuiDateRange: {
            summary: '一段日期範圍。',
            members: { 'start, end': '第一天和最後一天，兩端都包含在內。' },
          },
        },
        keyboard: [
          ['向左 / 向右鍵', '移到前一天或後一天。在由右至左的文字中左右方向相反。'],
          ['向上 / 向下鍵', '移到上一週或下一週。'],
          ['Home / End', '移到該週的第一天或最後一天。'],
          ['Page Up / Page Down', '移到上個月或下個月；按住 Shift 鍵時改為上一年或下一年。'],
          ['Enter 或空白鍵', '選取該日期；在月份或年份檢視中，則進入所選的月份或年份。'],
          ['Esc', '取消範圍的第一次選取，或回到原本的檢視。'],
        ],
        notes: [
          '每個月都是以標題命名的 <code>grid</code>，星期的完整名稱放在 <code>abbr</code> 中。',
          '每一天都以完整日期命名，並附加「Today」、「unavailable」和範圍端點等資訊。<code>aria-selected</code> 標示已選取的日期，<code>aria-disabled</code> 標示無法選取的日期。',
          '網格在 Tab 鍵順序中只佔一個位置，並使用漫遊式 <code>tabindex</code>。前後切換月份的按鈕會朗讀新的月份。',
        ],
      },
      'date-picker': {
        name: '日期選擇器',
        title: 'Angular 日期與時間選擇器元件',
        summary: '分區段輸入日期或時間，或在日曆中選取。',
        description:
          '無障礙的 Angular 日期、時間與日期範圍選擇器：依地區設定的順序分區段輸入，提供 Popover 日曆和常用範圍，並支援表單。',
        apiDescription:
          'Needless UI 日期選擇器的 API 參考文件：nui-date-field、nui-time-field、nui-date-picker 和 nui-date-range-picker，以及常用範圍。',
        a11yDescription:
          'Needless UI 日期選擇器的鍵盤操作與無障礙支援：日期的每個部分都是一個 spinbutton，日曆則位於對話框中。',
        overview: [
          '日期和時間欄位採分區段輸入：日、月、年依地區設定的順序排列，接著是依其 12 或 24 小時制顯示的小時和分鐘。每個區段都是一個 spinbutton：輸入數字後會自動跳到下一個區段，也可以用方向鍵逐步調整。貼上完整的日期，所有區段都會自動填好。',
          '選擇器會在 Popover 中加上日曆，可選取單一日期，或搭配常用範圍選取日期範圍。值是一般的 ISO 字串，例如 <code>2026-09-25</code> 或 <code>2026-09-25T09:30</code>，而且每個欄位都支援 Signal Forms、響應式表單和 <code>ngModel</code>。',
          '本站的範例會依循頁面的語言：切換語言，就能看到順序、分隔符號和數字跟著改變。',
        ],
        examples: {
          fields: {
            title: '日期和時間欄位',
            text: '輸入數字，或使用方向鍵。再按一次 Backspace 會退回上一個區段。<code>minuteStep</code> 設定方向鍵每次調整分鐘的幅度。',
          },
          pickers: {
            title: '日期選擇器',
            text: '按鈕會開啟日曆並停在所選日期，選取日期後日曆隨即關閉。使用 <code>granularity="minute"</code> 時，選擇器也能輸入時間，而日曆只會變更日期。',
          },
          range: {
            title: '日期範圍',
            text: '兩個欄位搭配雙月日曆。<code>nuiDateRangePresets()</code> 會加入常用範圍；在依序設定好兩端之前，值都會是 null。',
          },
        },
        api: {
          NuiDateField: {
            summary: '分區段輸入的日期，或日期和時間。',
            members: {
              value: '值；在所有區段都填好之前為 null。',
              granularity: '停在日，或繼續到小時、分鐘或秒。',
              'min, max': '最早和最晚的值。超出這個範圍時，欄位的值無效。',
              placeholder: '空白區段用方向鍵調整時的起始值。',
              hourCycle: '12 或 24 小時制。預設依循地區設定。',
              minuteStep: '方向鍵每次調整分鐘的幅度。',
              'disabled, readonly': '禁止變更。',
              locale: '決定順序、分隔符號、數字和小時制。',
              labels: '欄位朗讀的所有文字，供翻譯使用。',
              invalid: '值是否超出 <code>min</code> 和 <code>max</code> 的範圍。',
              focus: '讓第一個空白區段取得焦點。',
            },
          },
          NuiTimeField: {
            summary: '分區段輸入的時間。它接受與日期欄位相同的輸入屬性。',
            members: { granularity: '停在小時、分鐘或秒。' },
          },
          NuiDatePicker: {
            summary: '附有 Popover 日曆的日期欄位。它接受日期欄位的輸入屬性，以及下列屬性。',
            members: {
              unavailable: '日曆中無法選取的日期。',
              'firstDay, weekNumbers': '傳給日曆。',
              labels: '欄位、按鈕和日曆的文字。',
              show: '開啟日曆。',
            },
          },
          NuiDateRangePicker: {
            summary: '兩個日期欄位搭配範圍日曆。它接受日期選擇器的輸入屬性，以及下列屬性。',
            members: {
              value: '日期範圍；在依序設定好兩端之前為 null。',
              presets: '按一下即可選取的具名範圍。',
              months: '日曆中並排顯示的月份數；在窄螢幕上只顯示一個月。',
            },
          },
          NuiDateRangePreset: {
            summary: '具名範圍，可以是固定的，也可以在選取時才產生。',
            members: {
              label: '它的名稱。',
              range: '範圍，或產生範圍的函式。',
            },
          },
        },
        keyboard: [
          ['數字鍵', '在區段中輸入。後面不可能再接其他數字時，會自動跳到下一個區段。'],
          ['向上 / 向下鍵', '調整區段的值；Page Up / Page Down 的調整幅度更大。'],
          ['向左 / 向右鍵、Tab', '移到上一個或下一個區段。'],
          ['Backspace', '清除區段，再按一次則退回上一個區段。'],
          ['A / P', '設為上午（AM）或下午（PM）。'],
        ],
        notes: [
          '欄位是一個 <code>group</code>：請用 <code>aria-label</code> 或 <code>aria-labelledby</code> 為它命名。每個區段都是以其代表部分命名的 <code>spinbutton</code>，月份會以名稱朗讀，空白區段則朗讀為「Empty」。',
          '區段是可編輯的文字，因此觸控鍵盤會以數字鍵盤開啟。',
          '選擇器的按鈕名稱是「Choose a date」，它的 Popover 是一個 <code>dialog</code>。選取日期後，焦點會回到按鈕上。',
          '其中的日曆與<a href="/components/calendar">日曆</a>的運作方式完全相同。',
        ],
      },
      scheduler: {
        name: '行事曆',
        title: 'Angular 行事曆元件',
        summary: '以月、週、日或活動列表顯示活動，拖曳即可放到合適的位置。',
        description:
          '無障礙的 Angular 行事曆：提供月、週、日和活動列表檢視，重疊的活動並排顯示，可拖曳來移動活動及調整時間長度，並支援完整的鍵盤操作。',
        apiDescription:
          'Needless UI 行事曆的 API 參考文件：nui-scheduler 的檢視、活動、編輯與選取、輸出屬性，以及活動範本。',
        a11yDescription:
          'Needless UI 行事曆的鍵盤操作與無障礙支援：由日期和時間構成的網格、具名的活動，以及能取代每種拖曳的鍵盤操作。',
        overview: [
          '行事曆以月、週、日或活動列表顯示活動。活動是帶有 ISO 時間的一般資料；時間重疊的活動會平分寬度，跨越午夜的活動在兩天中都會顯示，全天活動則以橫條的形式橫跨頂端。',
          '行事曆從不自行變更你的活動。拖曳活動或其底邊時，<code>eventChange</code> 會回報新的時間；在網格上選取時間時，<code>slotSelect</code> 會回報所選的時間。<code>rangeChange</code> 會告訴你目前顯示哪些日期，方便你載入這些日期的活動。',
          '指標能做的，鍵盤也都能做：網格在 Tab 鍵順序中只佔一個位置，方向鍵可在日期和時間之間移動，Alt 加方向鍵則會移動活動。',
        ],
        examples: {
          planner: {
            title: '規劃一週',
            text: '使用 <code>editable</code> 和 <code>selectable</code> 時，拖曳活動即可移動它，拖曳其底邊即可調整時間長度，在空白時段上拖曳即可新增活動。這個範例會依據輸出更新自己的活動。',
          },
          month: {
            title: '月檢視與活動列表',
            text: '跨越多天的活動會顯示為橫條；活動較多的日子會顯示還有幾個未列出。<code>views</code> 只提供月檢視和未來 <code>agendaDays</code> 天的活動列表。',
          },
          rooms: {
            title: '會議室的一天',
            text: '<code>nuiSchedulerEvent</code> 會繪製每筆預訂，並附上會議室和主辦人。<code>slotMinutes="15"</code> 讓列分得更細。',
          },
        },
        api: {
          NuiScheduler: {
            summary: '依月、週、日或活動列表顯示的活動。',
            members: {
              events: '要顯示的活動。',
              view: '目前顯示的檢視。',
              views: '使用者可以切換的檢視。',
              date: '顯示的日期，也是鍵盤焦點所在的日期。',
              slotMinutes: '時間網格每列的分鐘數，也是活動移動的間隔。',
              scrollHour: '時間網格開啟時捲動到的小時。',
              agendaDays: '活動列表往後顯示的天數。',
              editable: '可以用指標和鍵盤移動活動及調整時間長度。',
              selectable: '可以在網格上選取時間，用來建立活動。',
              firstDay: '一週的第一天，1 代表星期一。預設依循地區設定。',
              headingLevel: '標題的層級；活動列表中各天的標題再低一層。',
              locale: '用來格式化日期和時間。',
              labels: '行事曆顯示或朗讀的所有文字，供翻譯使用。',
              eventClick: '發出被點選或按 Enter 鍵開啟的活動。',
              eventChange: '移動活動或調整時間長度後，發出活動的新時間。',
              slotSelect: '發出在網格上選取的時間。',
              rangeChange: '顯示的第一天和最後一天變更時，發出這兩天。',
            },
          },
          NuiSchedulerEvent: {
            summary:
              '一個活動。有具體時間的活動不包含結束時刻；全天活動的結束日期就是它的最後一天。',
            members: {
              'id, title': '它的鍵值，以及顯示的內容。',
              'start, end': '日期和時間；全天活動只用日期。',
              allDay: '預設取決於 <code>start</code> 是否不含時間。',
              tone: '它的顏色。',
              editable: '無論行事曆如何設定，它能否被移動。',
              data: '需要和它一起保存的其他資料。',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: '繪製活動。其 context 包含活動，以及文字形式的時間。',
            members: {},
          },
        },
        keyboard: [
          ['方向鍵', '按日和按時段移動。在由右至左的文字中左右方向相反。'],
          ['Page Up / Page Down', '向前或向後翻一個月、一週或一天。'],
          ['Shift + 方向鍵', '擴大所選的時間範圍。'],
          ['在儲存格上按 Enter 或空白鍵', '進入其中的活動，或選取它的時間。'],
          ['在活動上按向上 / 向下鍵', '移到儲存格中的上一個或下一個活動。'],
          ['在活動上按 Alt + 方向鍵', '將活動移動一個時段或一天。'],
          ['Alt + Shift + 向上或向下鍵', '縮短或延長活動。'],
          ['Esc', '回到儲存格、取消所選時間，或取消拖曳。'],
        ],
        notes: [
          '月、週和日檢視都是以標題命名的 <code>grid</code>。日期是欄標題，時間是列標題，因此每個儲存格都會連同日期和時間一起朗讀。',
          '每個活動都是以標題、日期和時間命名的按鈕，例如「Standup, Friday, September 25, 9:00 – 9:30 AM」。移動活動或調整時間長度後，會朗讀新的時間。',
          '每種拖曳都有對應的鍵盤操作，因此不需要指標也能完成所有操作。',
          '各檢視是一組切換按鈕；移到另一週或另一個月時，會朗讀它的標題。',
        ],
      },
      splitter: {
        name: '分割窗格',
        title: 'Angular 可調整大小的分割窗格元件',
        summary: '左右並排或上下堆疊的窗格，拖曳中間的控點即可調整大小。',
        description:
          '無障礙的 Angular 分割窗格：左右並排或上下堆疊、可調整大小的窗格，支援大小限制、可收合的窗格、記住大小和完整的鍵盤操作。',
        apiDescription:
          'Needless UI 分割窗格的 API 參考文件：nuiSplitter 的方向和大小、窗格的大小限制與收合，以及窗格之間的控點。',
        a11yDescription:
          'Needless UI 分割窗格的鍵盤互動與無障礙支援：帶有數值、可取得焦點的視窗分隔器控點，以及方向鍵、Home、End 和 Enter 鍵。',
        overview: [
          '分割窗格會把空間分給多個窗格，每兩個相鄰的窗格之間都有一個控點。拖曳控點，或讓它取得焦點後使用方向鍵即可調整。大小是加總為 100 的百分比，可以用 <code>[(sizes)]</code> 繫結。',
          '每個窗格的初始大小、最小大小和最大大小，都可以用像素、rem 或百分比指定。設定了 <code>collapsible</code> 的窗格在被拖曳到小於最小大小的一半時，或在它的控點上按 Enter 鍵時會收合起來，展開時則恢復為收合前的大小。',
          '設定 <code>storageKey</code> 後，大小會儲存在 <code>localStorage</code> 中，使用者下次造訪時，版面仍會維持離開時的樣子。',
        ],
        examples: {
          editor: {
            title: '編輯器',
            text: '檔案、程式碼和預覽三個窗格。檔案和預覽可以收合，程式碼至少保留 30% 的寬度，而且會記住各窗格的大小。',
          },
          stacked: {
            title: '上下堆疊的窗格',
            text: '<code>orientation="vertical"</code> 會讓窗格上下堆疊，<code>[(sizes)]</code> 則會隨時讀取變動中的大小。',
          },
        },
        api: {
          NuiSplitter: {
            summary: '一組窗格，窗格之間有控點。',
            members: {
              orientation: '左右並排，或上下堆疊。',
              sizes: '各窗格所佔的比例，以百分比表示，依序排列。',
              storageKey: '以這個鍵將大小儲存在 <code>localStorage</code> 中。',
              step: '方向鍵每次移動控點的幅度，以百分比表示。按住 Shift 時加倍。',
              move: '將某個窗格之後的邊界移動指定的百分比。',
            },
          },
          NuiSplitterPane: {
            summary: '一個窗格。它的各項大小可以用像素、rem 或百分比表示。',
            members: {
              defaultSize: '沒有可還原的大小時，窗格的初始大小。',
              min: '窗格的最小大小。',
              max: '窗格的最大大小。',
              collapsible: '窗格可以收合：拖曳到小於最小大小的一半，或按 Enter 鍵。',
              collapsedSize: '收合後的大小，例如只顯示一排圖示的窄欄。',
              label: '為調整此窗格大小的控點命名。',
            },
          },
          NuiSplitterHandle: {
            summary: '兩個窗格之間的控點。',
            members: {
              label: '控點的名稱，在窗格的標籤沒有為它命名時使用。',
              disabled: '控點無法移動。',
              toggle: '收合旁邊的窗格，或將它展開。',
            },
          },
        },
        keyboard: [
          ['向左 / 向右鍵', '移動左右並排的窗格之間的控點。在由右至左的文字中左右方向相反。'],
          ['向上 / 向下鍵', '移動上下堆疊的窗格之間的控點。'],
          ['Shift + 方向鍵', '移動距離加倍。'],
          ['Home / End', '把控點前方的窗格調整為最小或最大大小。'],
          ['Enter', '收合可收合的窗格，或將它展開。'],
        ],
        notes: [
          '每個控點都是可取得焦點的 <code>separator</code>，與 WAI-ARIA 的視窗分隔器（window splitter）模式相同：它的值是前一個窗格的大小，介於該窗格的大小限制之間，<code>aria-controls</code> 則指向該窗格。',
          '請透過窗格的 <code>label</code> 為控點命名：有了「Files」這樣的名稱，螢幕閱讀器就能說明控點調整的是哪個窗格。',
          '雙擊控點也能收合對應的窗格；拖曳時會擷取指標，因此即使快速移動也不會脫離控點。',
        ],
      },
      tour: {
        name: '引導式導覽',
        title: 'Angular 引導式導覽元件',
        summary: '為每個步驟顯示一張卡片，放在它所介紹的內容旁邊，並調暗周圍的頁面。',
        description:
          '無障礙的 Angular 產品導覽：每個步驟的卡片會顯示在目標旁邊，目標周圍有聚光燈效果，支援可互動的步驟，結束後焦點會回到原處。',
        apiDescription:
          'Needless UI 引導式導覽的 API 參考文件：nui-tour 的步驟、open 和 step 繫結、輸出屬性，以及每個步驟的目標、位置和掛鉤。',
        a11yDescription:
          'Needless UI 引導式導覽的鍵盤互動與無障礙支援：每張卡片都是以標題命名的對話框，焦點會留在其中並在結束時歸還，按 Esc 鍵即可離開。',
        overview: [
          '引導式導覽會一步一步帶使用者認識頁面。每個步驟都會指向一個元素，在它旁邊顯示一張卡片，並調暗周圍的頁面；沒有目標的步驟會顯示在中央。',
          '步驟只是一般的資料：一個目標（選擇器、元素，或能找到元素的函式）、一個標題，以及文字或範本形式的內容。<code>beforeShow</code> 會先執行，因此步驟可以先開啟目標所在的面板；不在可見範圍內的目標會自動捲動到畫面中。',
          '每張卡片都是一個對話框。它是強制回應的，除非該步驟設為 <code>interactive</code>：這時使用者可以操作它所指向的元素。按 Esc 鍵會結束導覽，焦點會回到原本的位置。',
        ],
        examples: {
          basics: {
            title: '初步認識',
            text: '四個步驟，第一個步驟沒有目標。<code>finished</code> 和 <code>dismissed</code> 可以區分兩種結束方式。',
          },
          interactive: {
            title: '動手試試看',
            text: '<code>beforeShow</code> 會在第二個步驟指向設定之前先開啟設定，<code>interactive</code> 則讓使用者在卡片顯示期間也能操作開關。',
          },
        },
        api: {
          NuiTour: {
            summary: '一段引導式導覽。',
            members: {
              steps: '依序排列的步驟。',
              open: '導覽是否正在進行。',
              step: '目前顯示的步驟，從 0 開始。',
              labels: '它顯示的所有文字，供翻譯使用。',
              finished: '完成最後一個步驟時發出。',
              dismissed: '導覽提前結束時，發出結束時所在的步驟。',
              start: '開始導覽，從第一個步驟或指定的步驟開始。',
              end: '結束導覽，並標示為完成或中途離開。',
            },
          },
          NuiTourStep: {
            summary: '導覽中的一個步驟。',
            members: {
              target: '步驟指向的對象。沒有目標時，卡片會顯示在中央。',
              title: '卡片的標題。',
              content: '卡片的文字，或一個範本。',
              side: '卡片位於目標的哪一側。',
              align: '卡片與目標的對齊方式。',
              padding: '聚光燈中目標周圍保留的空間，單位為像素。',
              interactive: '卡片顯示期間，目標仍可操作。',
              beforeShow: '在步驟顯示前執行。如果傳回 Promise，導覽會等待它完成。',
            },
          },
        },
        keyboard: [
          ['Tab', '在卡片的按鈕之間移動。在強制回應的步驟中，焦點會留在卡片內。'],
          ['Enter 或空白鍵', '按下取得焦點的按鈕：Next、Back 或 Done。'],
          ['Esc', '結束導覽。'],
        ],
        notes: [
          '每張卡片都是一個 <code>dialog</code>，以它的標題命名，並以它的內容作為描述。每個步驟都會把焦點移到卡片的主要按鈕上，導覽結束後焦點會回到原本的位置。',
          '強制回應的步驟會讓頁面的其餘部分無法互動（inert）。可互動的步驟不是強制回應的，因此使用者除了指標，也能用鍵盤抵達它的目標。',
          '進度以文字呈現，例如「2 of 4」；圓點只是把進度畫出來。',
        ],
      },
      dropzone: {
        name: '檔案拖放區',
        title: 'Angular 檔案拖放區與上傳元件',
        summary: '拖放或選取檔案，支援檢查、預覽，以及顯示進度的上傳。',
        description:
          '無障礙的 Angular 檔案拖放區：支援拖放、資料夾和貼上，檢查類型與大小，預覽圖片，上傳時顯示進度並可重試。',
        apiDescription:
          'Needless UI 檔案拖放區的 API 參考文件：nui-dropzone 的檔案與檢查、上傳函式及其佇列、輸出屬性和文字。',
        a11yDescription:
          'Needless UI 檔案拖放區的鍵盤互動與無障礙支援：本身就是按鈕的拖放區、會朗讀的結果，以及具名的進度列和操作按鈕。',
        overview: [
          '檔案拖放區會接收拖放到上面的檔案、透過檔案選擇器選取的檔案，以及貼上的檔案。拖放進來的資料夾會被逐層讀取，每個檔案都會保留自己的路徑。',
          '每個檔案都會依據 <code>accept</code>、<code>maxSize</code>、<code>minSize</code>、<code>maxFiles</code> 和你的 <code>validate</code> 函式進行檢查，被拒絕的檔案會連同原因一起列出。圖片會顯示預覽。',
          '沒有 <code>upload</code> 函式時，拖放區會把檔案保存在 <code>[(files)]</code> 中供表單使用。提供這個函式後，它會一次上傳幾個檔案，並支援顯示進度、取消和重試。請把上傳的 <code>signal</code> 傳給 <code>fetch</code>，這樣取消時上傳才會真正停止。',
        ],
        examples: {
          upload: {
            title: '上傳',
            text: '模擬的上傳會分階段回報進度。名稱含有「fail」的檔案會上傳失敗，用來示範重試；<code>directory</code> 會加上一個選取資料夾的按鈕。',
          },
          attach: {
            title: '表單附件',
            text: '沒有 <code>upload</code>：拖放區在 <code>[(files)]</code> 中最多保存三份文件，放在其中的自訂文字會取代預設文字。',
          },
        },
        api: {
          NuiDropzone: {
            summary: '用來拖放或選取檔案的區域。',
            members: {
              files: '它保存的檔案，依序排列。',
              accept: '可接收的檔案類型，寫法同 <code>&lt;input type="file"&gt;</code>。',
              multiple: '一次可接收多個檔案。',
              directory: '提供選取資料夾的按鈕。',
              maxFiles: '最多可保存的檔案數。',
              'maxSize, minSize': '檔案的最大和最小大小，單位為位元組。',
              validate: '檢查每個檔案。傳回訊息即拒絕該檔案。',
              upload: '傳送一個檔案。未提供時，檔案只會被保存。',
              concurrency: '同時上傳的檔案數。',
              hint: '顯示在拖放區文字下方的一行說明，例如可接收哪些檔案。',
              disabled: '不接收任何檔案。',
              labels: '它顯示或朗讀的所有文字，供翻譯使用。',
              uploaded: '發出上傳完成的檔案，以及 <code>upload</code> 傳回的結果。',
              rejected: '發出被拒絕的檔案及其原因。',
              queue: '上傳佇列，可從程式碼取消、重試及讀取進度。',
              take: '從程式碼加入檔案，並逐一檢查。',
            },
          },
          NuiUploader: {
            summary: '傳送一個檔案：以 0 到 1 回報進度，並在收到中止訊號時停止。',
            members: {
              '(file, context)': '傳回一個 Promise，其結果為伺服器回應的任何內容。',
            },
          },
        },
        keyboard: [
          ['Enter 或空白鍵', '在拖放區上：開啟檔案選擇器。'],
          ['Ctrl + V（⌘ + V）', '在拖放區上：加入貼上的檔案。'],
          ['Tab', '在拖放區和各檔案的操作按鈕之間移動。'],
        ],
        notes: [
          '拖放區本身是一個按鈕，因此不用指標也能操作，提示文字則是它的描述。',
          '加入的檔案和被拒絕的檔案都會被朗讀。每個進度列都是以對應檔案命名的 <code>progressbar</code>，每個操作按鈕都以其作用命名，例如「Remove beach.jpg」。',
          '預覽只是裝飾：檔案名稱就能說明是哪個檔案。',
        ],
      },
      mask: {
        name: '輸入遮罩',
        title: 'Angular 輸入遮罩指令',
        summary: '在輸入時自動格式化的文字欄位：日期、信用卡號、IBAN 和各類代碼。',
        description:
          'Angular 輸入遮罩：在使用者輸入時格式化文字欄位，游標會留在原處，提供信用卡號和 IBAN 的輔助函式，並支援表單驗證。',
        apiDescription:
          'Needless UI 輸入遮罩的 API 參考文件：nuiMask 指令、它的 token 與值，以及用於信用卡號和 IBAN 的輔助函式。',
        a11yDescription:
          'Needless UI 輸入遮罩的無障礙支援：保留原有標籤的原生欄位、手機上的數字鍵盤，以及跳過固定字元的刪除。',
        overview: [
          '遮罩會在使用者輸入時格式化文字欄位：<code>00/00/0000</code> 會自動補上斜線，<code>AA 000 AA</code> 則依序接受字母和數字。不符合的字元不會被輸入；在中間輸入時，游標也會留在原處。',
          '遮罩由 token 和固定字元組成：<code>0</code> 代表數字，<code>a</code> 代表字母，<code>*</code> 代表兩者皆可，<code>A</code> 和 <code>X</code> 則是用於代碼的對應寫法，輸入後會轉為大寫。你可以用 <code>tokens</code> 加入自己的 token，也可以傳入依已輸入內容挑選遮罩的函式，<code>nuiCardMask</code> 就是這樣依卡別挑選遮罩的。',
          '值就是畫面上顯示的內容；設定 <code>unmask</code> 後則只包含資料。遮罩支援 Signal Forms、響應式表單和 <code>ngModel</code>，尚未填完的值會被視為錯誤。',
        ],
        examples: {
          formats: {
            title: '格式',
            text: '日期、時間、車牌號碼，以及用自訂 token 接受十六進位數字的色碼。',
          },
          payment: {
            title: '付款資訊',
            text: '使用 Signal Forms 的欄位。卡號遮罩會依卡別變化，American Express 的安全碼為四碼，<code>nuiCardValid</code> 和 <code>nuiIbanValid</code> 負責驗證號碼。',
          },
        },
        api: {
          NuiMask: {
            summary: '套用在原生文字欄位上的遮罩。',
            members: {
              nuiMask: '遮罩，或依已輸入資料挑選遮罩的函式。',
              tokens: '要加入或取代的遮罩字元。',
              unmask: '值只包含資料，不含固定字元。',
              value: '值：顯示的內容；設定 <code>unmask</code> 時則為資料。',
              raw: '已輸入的資料，不含固定字元。',
              complete: '遮罩中的每個位置是否都已填滿。',
            },
          },
          Helpers: {
            summary: '用於格式化、驗證和建立遮罩的函式。',
            members: {
              'nuiMaskFormat, nuiUnmask': '用遮罩格式化一個值，或從格式化後的值取出資料。',
              nuiCardMask: '卡號遮罩，依卡別印在卡片上的方式分組。',
              nuiCardBrand: '依卡號開頭的數字判斷出的卡別。',
              'nuiCardValid, nuiLuhn': '卡號長度是否符合其卡別，並通過 Luhn 檢查。',
              nuiIbanMask: 'IBAN 遮罩，長度與該國的 IBAN 相同。',
              nuiIbanValid: 'IBAN 長度是否符合其所屬國家，且檢查碼正確。',
            },
          },
        },
        keyboard: [
          ['Backspace', '刪除游標前的字元，並跳過固定字元。'],
          ['Delete', '刪除游標後的字元，並跳過固定字元。'],
        ],
        notes: [
          '遮罩套用在你自己的 <code>&lt;input&gt;</code> 上，因此標籤和提示都會維持你寫的樣子。請在那裡說明需要輸入什麼：遮罩本身並不是說明。',
          '只含數字的遮罩會設定 <code>inputmode="numeric"</code>，讓手機顯示數字鍵盤，除非欄位自己設定了這個屬性。',
          '接受任何書寫系統的數字，並一律寫成 0 到 9。',
        ],
      },
      'phone-field': {
        name: '電話號碼輸入欄位',
        title: 'Angular 電話號碼輸入欄位元件',
        summary: '國家選擇器加上號碼，號碼會依該國的習慣分組。',
        description:
          '無障礙的 Angular 電話號碼輸入欄位：附國家選擇器，號碼依各國習慣分組，可輸入或貼上國碼，值採用 E.164 格式。',
        apiDescription:
          'Needless UI 電話號碼輸入欄位的 API 參考文件：nui-phone-field 的 value 和 country、可選的國家，以及讀寫號碼的輔助函式。',
        a11yDescription:
          'Needless UI 電話號碼輸入欄位的無障礙支援：具名的國家選擇器、國碼選定國家時的朗讀，以及瀏覽器自動填入。',
        overview: [
          '電話號碼輸入欄位由國家選擇器和號碼組成。號碼會在輸入時依所屬國家的習慣分組，值則是 E.164 格式的號碼，例如 <code>+393331234567</code>。',
          '使用者可以照自己熟悉的方式輸入號碼。開頭的 0（或北美號碼前面的 1）會被視為國內冠碼，不列入值中。輸入或貼上國碼（例如 <code>+44</code> 或 <code>0044</code>）會選取對應的國家；多個國家共用同一個國碼時，號碼開頭的區碼也能決定國家。',
          '一開始的國家取自地區設定，<code>countries</code> 可以限定清單。搭配表單使用時，對所屬國家而言太短或太長的號碼會被視為錯誤。若要完整驗證，請同時在伺服器上檢查號碼。',
        ],
        examples: {
          basic: {
            title: '輸入號碼',
            text: '以 <code>+</code> 和國碼開頭，輸入時就會切換國家。',
          },
          countries: {
            title: '自選國家',
            text: '<code>countries</code> 提供十一個國家，欄位搭配響應式表單的 <code>FormControl</code> 使用，<code>nuiFormatPhone</code> 則把值寫回方便閱讀的格式。',
          },
        },
        api: {
          NuiPhoneField: {
            summary: '電話號碼欄位。',
            members: {
              value: 'E.164 格式的號碼，或為空。',
              country: '國家，以地區代碼表示。',
              countries: '可選的國家，以地區代碼表示。',
              locale: '國家名稱使用的語言。',
              label: '號碼的名稱，在沒有 <code>&lt;label for&gt;</code> 為它命名時使用。',
              inputId: '號碼欄位的 id，供 <code>&lt;label for&gt;</code> 使用。',
              placeholder: '號碼欄位為空時顯示的文字。',
              invalid: '將號碼標示為無效。',
              disabled: '禁止變更。',
              labels: '它顯示或朗讀的所有文字，供翻譯使用。',
            },
          },
          Helpers: {
            summary: '處理電話號碼的函式。',
            members: {
              nuiParsePhone: '將任何寫法的號碼解析為地區、國碼和國內號碼。',
              nuiFormatPhone: '依所屬國家的分組方式寫出號碼，或寫成 E.164 格式。',
              nuiPhoneValid: '號碼是否帶有已知的國碼，且長度符合所屬國家。',
            },
          },
        },
        keyboard: [
          ['在國家選擇器上按字母鍵', '跳到以這些字母開頭的國家。'],
          ['Enter 或空白鍵', '開啟國家清單，或選取一個國家。'],
          ['Backspace', '在號碼中刪除一位數字，並跳過空格和括號。'],
        ],
        notes: [
          '國家選擇器的名稱是「Country code」，會朗讀國旗和國碼。國碼或區碼選定某個國家時，會朗讀新的國家。',
          '請用 <code>&lt;label for&gt;</code> 搭配 <code>inputId</code>，或用 <code>label</code> 為號碼命名。',
          '號碼欄位帶有 <code>autocomplete="tel"</code>，因此瀏覽器能自動填入包含國碼在內的完整號碼，手機也會顯示撥號鍵盤。',
        ],
      },
      'color-picker': {
        name: '顏色選擇器',
        title: 'Angular OKLCH 顏色選擇器元件',
        summary: '以 OKLCH 選取顏色，附有滑桿、色票、滴管和對比度檢查。',
        description:
          '無障礙的 Angular 顏色選擇器，以 OKLCH 運作：支援廣色域 P3 色彩、所有 CSS 顏色語法、色票、滴管，以及 WCAG 對比度檢查。',
        apiDescription:
          'Needless UI 顏色選擇器的 API 參考文件：nui-color-picker 的值、格式和色域，色票與對比度，以及處理顏色的輔助函式。',
        a11yDescription:
          'Needless UI 顏色選擇器的鍵盤操作與無障礙支援：具有兩個值的選色區域滑桿、原生滑桿，以及用文字說明的對比度等級。',
        overview: [
          '顏色選擇器以 OKLCH 運作，這是現代 CSS 中貼近人眼感知的色彩空間。在選色區域中，彩度由左至右從灰色增加到螢幕在該亮度下能顯示的最大值，因此每一點都是可用的顏色；轉動色相時，控點也會留在原處。',
          '輸入欄位接受任何 CSS 顏色，包括顏色名稱；格式按鈕會把值寫成 hex、<code>rgb()</code>、<code>hsl()</code>、<code>oklch()</code> 或 <code>color(display-p3)</code>。超出某種格式色域的顏色，會依 CSS 的方式對應到色域內，並保留亮度和色相。',
          '加上 <code>swatches</code> 可提供候選顏色，加上 <code>contrastWith</code> 則能依 WCAG 2 的計算方式，檢查顏色與背景的對比度。瀏覽器支援滴管時，還會有一個按鈕可以從螢幕上取色。',
        ],
        examples: {
          brand: {
            title: '品牌色',
            text: '具名的色票，以及白色文字在該顏色上的對比度：選擇淺色時，AA 就會不合格。',
          },
          wide: {
            title: '廣色域',
            text: '<code>gamut="p3"</code> 會以 Display P3 色彩填滿選色區域，並用虛線標出 sRGB 的邊界。值仍以 <code>oklch()</code> 表示。',
          },
          popover: {
            title: '放在 Popover 中',
            text: '顯示目前顏色的按鈕會在 <a href="/components/popover">Popover</a> 中開啟選擇器。',
          },
        },
        api: {
          NuiColorPicker: {
            summary: '以 OKLCH 運作的顏色選擇器。',
            members: {
              value: '依格式寫出的顏色；選取顏色前為空。',
              format: '值的寫法。',
              formats: '格式按鈕依序切換的格式。',
              gamut: '選色區域包含的顏色：sRGB 或 Display P3。',
              alpha: '顯示不透明度滑桿。',
              swatches: '可供選取的顏色，可附名稱。',
              contrastWith: '用來檢查對比度的背景色。',
              eyeDropper: '瀏覽器支援時顯示滴管。',
              disabled: '禁止變更。',
              labels: '它顯示或朗讀的所有文字，供翻譯使用。',
              color: '選取的顏色，以 OKLCH 表示。',
            },
          },
          Helpers: {
            summary: '處理顏色的函式。',
            members: {
              nuiParseColor: '讀取以任何 CSS 語法寫成的顏色。',
              nuiFormatColor: '以指定格式寫出顏色。',
              nuiToGamut: '像 CSS 一樣，把顏色對應到 sRGB 或 Display P3 色域內。',
              nuiContrast: '顏色在背景上的 WCAG 2 對比度。',
            },
          },
        },
        keyboard: [
          ['向左 / 向右鍵', '在選色區域中降低或提高彩度。'],
          ['向上 / 向下鍵', '在選色區域中調亮或調暗。'],
          ['Shift + 方向鍵', '移動幅度變為十倍。'],
          ['Home / End', '在選色區域中把彩度調到零或最大。'],
          ['Page Up / Page Down', '在選色區域中大幅調亮或調暗。'],
        ],
        notes: [
          '選色區域的控點是名為「Color」的 <code>slider</code>，會朗讀它的兩個值，例如「Lightness 62%, chroma 75%」。色相和不透明度則是原生的 range 輸入欄位。',
          '色票是以其標籤命名的按鈕，與目前顏色相符時會呈現按下狀態。',
          'AA 和 AAA 會用文字說明「passes」或「fails」，而不只用顏色表示；在強制色彩模式下，顏色本身會保持不變。',
        ],
      },
      carousel: {
        name: '輪播',
        title: 'Angular 輪播圖與投影片元件',
        summary: '一排可捲動並自動貼齊的投影片，附有按鈕、圓點和自動輪播。',
        description:
          '無障礙的 Angular 輪播：原生的捲動貼齊與滑動手勢、一次顯示多張投影片、圓點、循環，以及依 WCAG 要求暫停和停止的自動輪播。',
        apiDescription:
          'Needless UI 輪播的 API 參考文件：nui-carousel 的每次顯示張數、索引、循環與自動輪播、它的方法，以及 nuiCarouselSlide 指令。',
        a11yDescription:
          'Needless UI 輪播的鍵盤互動與無障礙支援：WAI-ARIA 輪播模式、自動輪播按鈕、具名的投影片，以及切換後的朗讀。',
        overview: [
          '輪播會把投影片排成一排，這一排可以捲動，並會貼齊每張投影片：滑動、觸控板和方向鍵都能以原生方式移動它，上一張、下一張按鈕和圓點也可以。請用 <code>nuiCarouselSlide</code> 標示每張投影片，並以它的標題命名。',
          '用 <code>perView</code> 設定一次顯示一張或多張投影片，或用 <code>perView="auto"</code> 讓投影片保留各自的寬度。<code>[(index)]</code> 繫結畫面中的第一張投影片，<code>loop</code> 則會讓輪播到底後回到開頭。',
          '設定 <code>autoplay</code> 後，輪播會自動切換，並由一個自動輪播按鈕控制。指標停在上方時自動輪播會暫停；鍵盤焦點進入時，則會依 WAI-ARIA 模式的要求完全停止。',
        ],
        examples: {
          featured: {
            title: '精選旅程',
            text: '每六秒換一張投影片，自動輪播按鈕上的圓環會隨之逐漸填滿。將滑鼠懸停在上方可暫停自動輪播，用 Tab 鍵移入則會停止。',
          },
          shelf: {
            title: '卡片貨架',
            text: '<code>perView="auto"</code> 會保留每張卡片的寬度，放得下幾張就顯示幾張。圓點會跟著滑動移動，<code>[(index)]</code> 則會告訴你目前的位置。',
          },
        },
        api: {
          NuiCarousel: {
            summary: '由投影片組成的輪播。',
            members: {
              label: '為輪播命名。',
              index: '畫面中的第一張投影片，從 0 開始。',
              perView: '同時顯示的投影片數量；設為 <code>auto</code> 時，由投影片自行決定寬度。',
              gap: '投影片之間的間距，可以是任何 CSS 長度。',
              loop: '越過最後一張時會回到第一張，反之亦然。',
              autoplay: '自動切換時兩張投影片之間的毫秒數；設為 0 則不自動切換。',
              'controls, indicators': '上一張和下一張按鈕，以及圓點。',
              labels: '它顯示或朗讀的所有文字，供翻譯使用。',
              'next, previous': '往前或往後移動一張投影片。',
              goTo: '把某張投影片捲動到畫面中。',
            },
          },
          NuiCarouselSlide: {
            summary: '一張投影片。',
            members: { nuiCarouselSlide: '投影片的標題，朗讀時會取代它的位置。' },
          },
        },
        keyboard: [
          ['Tab', '依序移到自動輪播按鈕、上一張和下一張按鈕、投影片，最後是圓點。'],
          ['在投影片上按向左 / 向右鍵', '捲動到上一張或下一張投影片。'],
          ['Enter 或空白鍵', '按下取得焦點的按鈕或圓點。'],
        ],
        notes: [
          '輪播是帶有 <code>aria-roledescription="carousel"</code> 的 <code>region</code>，每張投影片則是帶有 <code>aria-roledescription="slide"</code> 的 <code>group</code>，名稱像是「Lake Como, 2 of 4」。',
          '自動輪播按鈕排在最前面，並會說明按下後的動作。指標停在上方時自動輪播會暫停，鍵盤焦點進入時則會停止，因此絕不會移動使用者正在閱讀的內容。',
          '透過滑動、按鈕或圓點切換後，會朗讀輪播停在哪裡；自動輪播時則保持安靜。',
        ],
      },
      editor: {
        name: '富文字編輯器',
        title: 'Angular 富文字編輯器元件',
        summary: '標題、清單、連結和各種格式，附有工具列，輸入時也能直接使用 Markdown。',
        description:
          '無障礙的 Angular 富文字編輯器：工具列、快速鍵、輸入時自動轉換 Markdown、乾淨的貼上、連結和復原，值可以是 HTML 或 Markdown。',
        apiDescription:
          'Needless UI 富文字編輯器的 API 參考文件：nui-editor 的值與格式、工具列按鈕、文字、命令，以及 HTML 和 Markdown 轉換函式。',
        a11yDescription:
          'Needless UI 富文字編輯器的鍵盤互動與無障礙支援：多行文字方塊、WAI-ARIA 工具列、快速鍵，以及新增連結的對話框。',
        overview: [
          '編輯器可以撰寫段落、標題、引言、清單、程式碼區塊和分隔線，並支援粗體、斜體、底線、刪除線、程式碼和連結。它的值是 HTML；設定 <code>format="markdown"</code> 後則是 Markdown。它也能搭配表單使用。',
          '它維護自己的文件，並親自處理每一次編輯，因此貼上或拖放進來的內容只會以這份文件的形式進入頁面：結構和格式都會保留，來自 Google Docs 和 Word 的內容也一樣；指令碼、樣式和不安全的連結則會被移除。',
          '輸入 Markdown 就會變成格式：<code># </code> 開始一個標題，<code>- </code> 開始一個清單，<code>**bold**</code> 和 <code>`code`</code> 則會在輸入結尾符號時套用格式。每種格式都有對應的快速鍵和工具列按鈕。',
        ],
        examples: {
          comment: {
            title: '留言',
            text: '<code>tools</code> 會決定工具列上有哪些按鈕。試著輸入 Markdown、從任何地方貼上內容，再看看編輯器保存的 HTML。',
          },
          markdown: {
            title: 'Markdown 的讀入與寫出',
            text: '設定 <code>format="markdown"</code> 後，值就是 Markdown：讀入時支援巢狀清單、引言和程式碼，編輯時會再寫回 Markdown。',
          },
          lists: {
            title: '巢狀清單',
            text: '「增加縮排」和「減少縮排」會像 Tab 和 Shift + Tab 一樣，調整清單項目的巢狀層級。預設工具列只在沒有 Tab 鍵的觸控螢幕上顯示這兩個按鈕；若要在所有裝置上顯示，請把它們加入 <code>tools</code>。',
          },
        },
        api: {
          NuiEditor: {
            summary: '一個富文字編輯器。',
            members: {
              value: '內容，以 HTML 或 Markdown 表示；沒有文字時為空。',
              format: '值的寫法。',
              tools: '工具列上依序排列的按鈕，群組之間以 <code>|</code> 分隔。',
              'label, labelledBy, describedBy': '為內容命名並加上描述。',
              placeholder: '內容為空時顯示。',
              'readonly, disabled, invalid': '依序為：只顯示內容而不可編輯；停用；標示為無效。',
              labels: '它顯示或朗讀的所有文字，供翻譯使用。',
              run: '執行一個工具列命令。',
              'undo, redo, focus': '依序為：復原、重做，以及把焦點移到文字中。',
            },
          },
          Helpers: {
            summary: '用來轉換文件的函式。',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': '把文件寫成 HTML 或 Markdown。',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                '把 HTML 或 Markdown 讀入為文件，只保留編輯器能顯示的內容。',
            },
          },
        },
        keyboard: [
          ['Ctrl + B、I 或 U', '粗體、斜體或底線。在 Apple 裝置上，以 ⌘ 取代 Ctrl。'],
          ['Ctrl + K', '新增或編輯連結。'],
          ['Ctrl + Alt + 1、2 或 3', '設為標題；Ctrl + Alt + 0 則改回段落。'],
          ['Ctrl + Shift + 7 或 8', '編號清單或項目符號清單。'],
          [
            '在清單中按 Tab 和 Shift + Tab',
            '增加或減少縮排；Shift + Tab 會把最上層的清單項目變成段落。在清單外，Tab 會離開編輯器。',
          ],
          ['Ctrl + Z、Ctrl + Shift + Z', '復原和重做。'],
          ['在工具列中按向左 / 向右鍵', '在按鈕之間移動。'],
        ],
        notes: [
          '內容區是帶有 <code>aria-multiline</code> 的 <code>textbox</code>，以 <code>label</code> 命名，預留位置文字則放在 <code>aria-placeholder</code> 中。',
          '工具列是 WAI-ARIA 工具列，在 Tab 鍵順序中只佔一個位置：格式按鈕是帶有 <code>aria-pressed</code> 的切換按鈕，每個按鈕都會在 <code>aria-keyshortcuts</code> 和工具提示中註明快速鍵。',
          '執行工具列命令後，焦點會回到文字中；在連結對話框中按 Esc 也會回到文字。Tab 鍵絕不會被困住：在清單外，它會離開編輯器。',
          '在沒有 Tab 鍵的觸控螢幕上，預設工具列有「增加縮排」和「減少縮排」按鈕，在清單中可用。點一下工具列按鈕時，焦點仍會留在文字中，因此觸控鍵盤會保持開啟。',
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
      'browser-support': {
        title: '瀏覽器支援',
        description:
          'Needless UI 支援並測試的瀏覽器：Chrome、Edge、Firefox 和 Safari 的版本需求、手機與觸控螢幕上的表現，以及舊版瀏覽器會省略的功能。',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI 以原生元素和較新的 Web 平台功能（例如 Popover API）為基礎。它從下表所列的版本起支援以下瀏覽器。在更舊的版本中，選單、Select 和 Popover 將無法開啟。',
          },
          { kind: 'h2', id: 'supported', text: '支援的瀏覽器' },
          {
            kind: 'table',
            caption: '支援的最低版本',
            head: ['瀏覽器', '最低版本', '所需功能'],
            rows: [
              [
                '電腦和 Android 上的 Chrome 與 Edge',
                '120',
                '以 CSS 遮罩繪製的圖示，以及用於由右至左文字的 <code>:dir()</code>',
              ],
              ['電腦和 Android 上的 Firefox', '125', 'Popover API'],
              ['Mac 上的 Safari', '17', 'Popover API'],
              ['iPhone 和 iPad 上的所有瀏覽器', 'iOS 17', 'Popover API'],
              ['Samsung Internet 瀏覽器', '25', '與 Chrome 相同'],
            ],
          },
          {
            kind: 'p',
            html: '其他以 Chromium 為基礎的瀏覽器（例如 Opera 和 Brave）會跟隨 Chrome 的版本。Angular 22 本身就要求 Chrome、Edge 和 Firefox 的版本不低於 119，Safari 不低於 17。不支援 Internet Explorer，以及改用 Chromium 之前的舊版 Edge。',
          },
          { kind: 'h2', id: 'tested', text: '經過測試的瀏覽器' },
          {
            kind: 'p',
            html: '每次變更都會在 Chrome、Firefox 和 Safari 的引擎中執行每個元件的測試。每次發布前，本文件的每一頁都會在每種引擎中，分別於電腦和支援觸控的手機上接受檢查：頁面必須能正常啟動、開啟每個選單和彈出視窗、符合螢幕大小，並通過無障礙檢查。',
          },
          {
            kind: 'table',
            caption: '測試所用的瀏覽器',
            head: ['引擎', '版本', '測試環境'],
            rows: [
              ['Chromium（Chrome、Edge）', '153', '電腦，以及支援觸控的 Android 手機'],
              ['Firefox', '155', '電腦，以及手機大小的觸控螢幕'],
              ['WebKit（Safari）', '26.6', '電腦，以及支援觸控的 iPhone'],
              ['iPhone 上的 Safari', 'iOS 17.5 和 18.6', 'iPhone 模擬器'],
            ],
          },
          {
            kind: 'p',
            html: '介於最低支援版本和測試版本之間的版本不會逐一測試：它們具備元件所需的所有功能，因此同樣受到支援。',
          },
          { kind: 'h2', id: 'newer', text: '新版瀏覽器的額外功能' },
          {
            kind: 'p',
            html: '少數細節用到只有新版瀏覽器才有的功能。其他瀏覽器會省略這些細節，但不會因此出錯：',
          },
          {
            kind: 'table',
            caption: '需要新版瀏覽器的細節',
            head: ['細節', '瀏覽器', '其他瀏覽器中'],
            rows: [
              [
                'Popover、選單和對話框的進場與退場動畫',
                'Chrome 與 Edge、Firefox 129、Safari 17.5',
                '立即出現和消失',
              ],
              ['超橢圓圓角（<code>corner-shape</code>）', 'Chrome 與 Edge 139', '一般圓角'],
              ['從螢幕上任何位置取色', '電腦上的 Chrome 與 Edge', '沒有滴管按鈕'],
              ['在檔案拖放區中選取整個資料夾', '電腦上的瀏覽器', '只能選取檔案'],
              [
                '輪播的自動輪播按鈕上，圓環平滑地填滿',
                'Chrome 與 Edge、Firefox 128、Safari',
                '一次填滿',
              ],
              [
                'Android 的返回手勢可以關閉選單、Combobox 清單和懸停卡片，並結束引導式導覽',
                'Chrome 與 Edge 126、Firefox 149',
                '返回手勢會回到上一頁',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: '手機和觸控螢幕' },
          {
            kind: 'p',
            html: '每個元件都支援觸控操作。分割窗格的控點、顏色選擇器的選色區域、資料表格的欄邊界和 Toast 都會跟著手指移動，而不會捲動頁面；輪播會透過瀏覽器本身的捲動來滑動；長按行事曆中的活動即可開始拖曳。在觸控螢幕上，輸入欄位的文字至少為 16px，因此 iPhone 不會放大輸入欄位；像 Android 鍵盤那樣先組字再送出的鍵盤，輸入的字詞也會完整送達。',
          },
          {
            kind: 'p',
            html: '觸控螢幕無法懸停，所以懸停卡片只能補充頁面上已有的內容：請勿在其中放置任何必要的內容。在手機上，聊天元件的 Return 鍵會換行，送出則由按鈕完成。',
          },
          { kind: 'h2', id: 'keyboard', text: 'Safari 中的鍵盤操作' },
          {
            kind: 'p',
            html: '預設情況下，Safari 的 Tab 鍵只會在文字欄位和彈出式選單之間移動。若要移到每個按鈕和連結，請在 Safari 的「進階」設定中開啟「按下 Tab 鍵來特別標明網頁上的每個項目」，或按 Option + Tab 鍵。此外，Safari 不會讓被點擊的按鈕取得焦點；元件會彌補這一點，因此點擊之後，也能像在其他瀏覽器中一樣繼續使用鍵盤操作。',
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
