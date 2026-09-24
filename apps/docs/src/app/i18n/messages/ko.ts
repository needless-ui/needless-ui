import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      '네이티브 요소, W3C 디자인 토큰, 프레임워크에 종속되지 않는 하나의 스타일시트로 만든 Angular 컴포넌트로, 접근성을 갖추고 테마를 자유롭게 바꿀 수 있습니다. MIT 라이선스의 오픈 소스입니다.',
    skipToContent: '본문 바로가기',
    nav: {
      label: '주요',
      home: 'Needless UI 홈',
      components: '컴포넌트',
      guides: '가이드',
      github: 'GitHub',
      language: '언어',
      theme: '테마',
      themes: { system: '시스템', light: '라이트', dark: '다크' },
    },
    footer: {
      license: 'MIT 라이선스로 배포됩니다.',
      source: '소스 코드',
      built: '쓸데없이 정교하게 설계하고, 꼼꼼하게 만들었습니다.',
      legal: '법적 고지',
      privacy: '개인정보 처리방침',
    },
  },

  home: {
    title: 'Needless UI · 쓸데없이 잘 만든, 접근성을 갖춘 Angular 컴포넌트',
    description:
      'Needless UI는 오픈 소스 Angular 컴포넌트 라이브러리입니다. 네이티브 요소, 프레임워크 독립적인 스타일시트, W3C 디자인 토큰, WCAG 2.2 AA 준수를 기본 제공합니다.',
    eyebrow: '오픈 소스 · Angular 22 · MIT',
    heading: '쓸데없이 잘 만든 UI 컴포넌트.',
    lead: 'Needless UI는 프레임워크에 종속되지 않는 하나의 스타일시트와 W3C 디자인 토큰으로 <strong>네이티브 요소</strong>를 스타일링합니다. Angular 디렉티브가 Angular Aria의 동작을 더하므로, 모든 컴포넌트는 첫 렌더링부터 접근성을 갖춥니다.',
    getStarted: '시작하기',
    browse: '컴포넌트 둘러보기',
    featuresTitle: '존재 이유',
    features: [
      {
        title: '네이티브 요소 우선',
        text: '<code>&lt;button nuiButton&gt;</code>은 진짜 버튼입니다. 아무것도 감싸지 않으므로 폼, 키보드, 스크린 리더가 그대로 동작합니다.',
      },
      {
        title: '스타일시트 하나로 모든 프레임워크를',
        text: '컴포넌트는 캐스케이드 레이어에 담긴 순수 CSS입니다. 지금은 Angular, 다음은 React를 지원하며, 순수 HTML에서는 언제나 쓸 수 있습니다.',
      },
      {
        title: '앱의 CSS가 언제나 우선',
        text: '모든 것이 <code>@layer nui</code> 안에 들어 있으므로, <code>!important</code>나 명시도 싸움 없이 직접 작성한 스타일로 덮어쓸 수 있습니다.',
      },
      {
        title: '설계부터 접근성을 고려',
        text: '팔레트를 생성할 때 모든 색상 조합을 WCAG 2.2 AA 기준으로 검사합니다. 포커스, 강제 색상 모드, 동작 줄이기 설정도 알아서 처리됩니다.',
      },
      {
        title: '표준 디자인 토큰',
        text: 'W3C DTCG 형식의 토큰 파일을 CSS 사용자 지정 속성으로 컴파일하며, 라이트·다크 테마와 중첩 테마를 지원합니다.',
      },
      {
        title: '모던 Angular',
        text: '시그널 입력, Zoneless, 서버 사이드 렌더링을 지원합니다. 컴포넌트마다 엔트리 포인트가 따로 있어 앱에는 가져온 것만 포함됩니다.',
      },
    ],
    codeTitle: 'import 두 번이면 준비 완료',
    codeText:
      '패키지를 추가하고 스타일시트를 한 번만 가져오면, 어떤 스탠드얼론 컴포넌트에서든 바로 사용할 수 있습니다.',
  },

  components: {
    title: '컴포넌트',
    description:
      'Needless UI의 Angular 컴포넌트 모음입니다. 접근성을 갖춘 버튼, 다이얼로그, 메뉴를 라이브 예제, API 레퍼런스, 키보드 지원 정보와 함께 소개합니다.',
    intro:
      '모든 컴포넌트는 네이티브 요소를 기반으로 만들어졌으며, 라이브 예제와 API, 키보드 동작을 함께 문서화했습니다.',
    tabsLabel: '문서 섹션',
    tabs: { overview: '개요', api: 'API', accessibility: '접근성' },
    sidenavLabel: '컴포넌트',
    onThisPage: '이 페이지의 내용',
    example: {
      showCode: '코드 보기',
      hideCode: '코드 숨기기',
      copy: '복사',
      copied: '복사됨',
      files: '소스 파일',
    },
    api: {
      import: '가져오기',
      selector: '셀렉터',
      exportAs: '내보내기 이름',
      members: '속성',
      name: '이름',
      type: '타입',
      default: '기본값',
      description: '설명',
      kinds: { input: '입력', model: '양방향', output: '출력', method: '메서드' },
    },
    a11y: {
      keyboard: '키보드 상호작용',
      key: '키',
      action: '동작',
      notes: '접근성 참고 사항',
    },
    titles: {
      api: (name) => `${name} API`,
      accessibility: (name) => `${name} 접근성`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Angular 버튼 컴포넌트',
        summary:
          '작업과 링크를 위한 버튼으로, 네이티브 button 요소와 a 요소에 스타일을 적용합니다.',
        description:
          '네이티브 button 요소와 a 요소를 위한 접근성을 갖춘 Angular 버튼 디렉티브입니다. 네 가지 변형, 세 가지 톤, 세 가지 크기와 링크를 지원합니다.',
        apiDescription:
          'Needless UI 버튼의 API 레퍼런스입니다. nuiButton 디렉티브와 셀렉터, variant, tone, size, disabled 입력을 설명합니다.',
        a11yDescription:
          'Needless UI 버튼의 키보드 동작과 접근성을 다룹니다. 네이티브 시맨틱, 포커스 링, 명도 대비, 타깃 크기, 비활성화된 링크를 설명합니다.',
        overview: [
          '<code>nuiButton</code> 디렉티브는 네이티브 <code>&lt;button&gt;</code> 또는 <code>&lt;a&gt;</code>에 스타일을 적용합니다. 요소는 고유의 시맨틱, 키보드 동작, 폼 참여 방식을 그대로 유지하며, 디렉티브는 입력값을 스타일시트가 대상으로 삼는 data 속성에 반영할 뿐입니다.',
          '작업에는 <code>&lt;button&gt;</code>을, 탐색에는 <code>&lt;a&gt;</code>를 사용합니다. 둘 다 모양이 같고, 둘 다 <code>disabled</code>를 지원합니다.',
        ],
        examples: {
          variants: {
            title: '변형',
            text: '가장 눈에 띄는 것부터 가장 차분한 것까지 네 가지 채우기 스타일이 있습니다. 주요 작업에는 화면당 솔리드 버튼 하나만 사용하는 것이 좋습니다.',
          },
          tones: {
            title: '톤',
            text: '톤은 팔레트를 바꿉니다. 주요 흐름에는 accent, 보조 작업에는 neutral, 파괴적인 작업에는 danger를 사용합니다.',
          },
          sizes: {
            title: '크기',
            text: '높이는 28, 36, 44픽셀의 세 가지입니다. 가장 작은 크기도 WCAG 2.2의 최소 타깃 크기를 충족합니다.',
          },
          links: {
            title: '링크와 비활성화된 버튼',
            text: 'a 요소는 네이티브 기능만으로는 비활성화할 수 없으므로, 비활성화된 링크에는 <code>aria-disabled="true"</code>가 지정되고 <code>routerLink</code>를 사용하더라도 클릭이 차단됩니다.',
          },
        },
        api: {
          NuiButton: {
            summary:
              '네이티브 <code>&lt;button&gt;</code> 또는 <code>&lt;a&gt;</code>에 버튼 스타일을 적용합니다.',
            members: {
              variant:
                '채우기 스타일: <code>solid</code>, <code>soft</code>, <code>outline</code>, <code>ghost</code> 중 하나.',
              tone: '색상 팔레트: <code>accent</code>, <code>neutral</code>, <code>danger</code> 중 하나.',
              size: '높이, 패딩, 글꼴 크기: <code>sm</code>, <code>md</code>, <code>lg</code> 중 하나.',
              disabled:
                '버튼을 비활성화합니다. a 요소에서는 <code>aria-disabled</code>를 설정하고 실행을 차단합니다.',
            },
          },
        },
        keyboard: [
          ['Tab', '버튼이나 링크로 포커스를 이동합니다.'],
          ['Enter', '버튼을 실행하거나 링크로 이동합니다.'],
          ['Space', '버튼을 실행합니다. 링크에서는 페이지를 스크롤합니다(네이티브 동작).'],
        ],
        notes: [
          '접근 가능한 이름은 요소의 텍스트입니다. 아이콘만 있는 버튼에는 <code>aria-label</code>이 필요합니다.',
          '모든 변형, 톤, 테마에서 텍스트는 4.5:1의 명도 대비를 충족하며, 팔레트 생성기가 이를 보장합니다.',
          '포커스 링은 2px 윤곽선이며, 두 테마 모두에서 페이지와 3:1 이상의 명도 대비를 가집니다.',
          '비활성화된 <code>&lt;button&gt;</code>은 탭 순서에서 빠집니다. 비활성화된 링크는 스크린 리더 사용자가 찾을 수 있도록 포커스를 받을 수 있는 상태로 남으며, 비활성화 상태로 안내됩니다.',
          '강제 색상 모드에서는 투명한 테두리가 시스템 색상의 윤곽선으로 바뀌어 보이게 됩니다.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Angular 다이얼로그 컴포넌트',
        summary: '네이티브 dialog 요소를 기반으로 한 모달 창으로, 포커스는 브라우저가 관리합니다.',
        description:
          '네이티브 dialog 요소로 만든 접근성을 갖춘 Angular 다이얼로그입니다. 모달 포커스 관리, Esc로 닫기, 반환 값, 배경 클릭으로 닫기를 지원합니다.',
        apiDescription:
          'Needless UI 다이얼로그의 API 레퍼런스입니다. open 양방향 바인딩, 크기, 반환 값을 지원하는 nuiDialog와 제목, 설명, 닫기 파트를 설명합니다.',
        a11yDescription:
          'Needless UI 다이얼로그의 키보드 동작과 접근성을 다룹니다. 모달 포커스, Esc 키, 포커스 복원, 레이블이 지정된 콘텐츠를 설명합니다.',
        overview: [
          '<code>nuiDialog</code> 디렉티브는 네이티브 <code>&lt;dialog&gt;</code>를 Needless UI 다이얼로그로 바꿉니다. 모달 동작은 브라우저가 제공합니다. 뒤쪽 페이지는 상호작용할 수 없게 되고 포커스는 다이얼로그 안에 머물며, Esc 키로 닫을 수 있고 닫히면 포커스가 다이얼로그를 연 요소로 돌아갑니다.',
          '<code>[(open)]</code>을 시그널에 바인딩하고 닫기 버튼에 <code>nuiDialogClose="…"</code> 형식으로 값을 지정하면, 다이얼로그가 어떻게 닫혔는지 알 수 있습니다.',
        ],
        examples: {
          confirm: {
            title: '확인 다이얼로그',
            text: '파괴적인 작업을 확인하는 다이얼로그입니다. 안전한 선택지에 <code>autofocus</code>가 있고, 선택된 값은 <code>(closed)</code>를 통해 전달됩니다.',
          },
          form: {
            title: '다이얼로그 안의 폼',
            text: '다이얼로그에는 어떤 콘텐츠든 담을 수 있습니다. 이 예제에서는 다이얼로그가 열리면 첫 번째 필드가 포커스를 받습니다.',
          },
          dismissible: {
            title: '임의로 닫을 수 없는 다이얼로그',
            text: '<code>[dismissible]="false"</code>를 지정하면 Esc 키와 배경 클릭이 무시되므로, 사용자는 선택지 중 하나를 골라야 합니다.',
          },
        },
        api: {
          NuiDialog: {
            summary: '네이티브 <code>&lt;dialog&gt;</code>를 Needless UI 다이얼로그로 바꿉니다.',
            members: {
              open: '다이얼로그가 열려 있는지 여부. <code>[(open)]</code>으로 바인딩합니다.',
              modal: '배경을 표시하고 뒤쪽 페이지를 상호작용할 수 없게 한 모달로 엽니다.',
              dismissible: 'Esc 키와 배경 클릭으로 다이얼로그를 닫을 수 있는지 여부.',
              size: '최대 너비: <code>sm</code>(24rem), <code>md</code>(32rem), <code>lg</code>(44rem) 중 하나.',
              closed:
                '다이얼로그가 닫힐 때마다 반환 값을 내보냅니다. 아무것도 선택하지 않고 닫힌 경우에는 빈 값입니다.',
              close: '다이얼로그를 닫습니다. 반환 값을 함께 전달할 수도 있습니다.',
            },
          },
          NuiDialogTitle: {
            summary:
              '다이얼로그의 제목입니다. id가 부여되어 다이얼로그의 <code>aria-labelledby</code>가 됩니다.',
            members: {},
          },
          NuiDialogDescription: {
            summary: '다이얼로그의 <code>aria-describedby</code>가 참조하는 짧은 설명입니다.',
            members: {},
          },
          NuiDialogActions: {
            summary: '다이얼로그 하단에 끝 쪽으로 정렬되는 버튼 행입니다.',
            members: {},
          },
          NuiDialogClose: {
            summary: '클릭하면 자신을 감싸는 다이얼로그를 닫습니다.',
            members: {
              nuiDialogClose:
                '다이얼로그를 닫을 때 사용할 값으로, <code>(closed)</code>로 내보내집니다.',
            },
          },
        },
        keyboard: [
          ['Tab', '다이얼로그 안의 다음 요소로 포커스를 이동합니다.'],
          ['Shift + Tab', '다이얼로그 안의 이전 요소로 포커스를 이동합니다.'],
          ['Esc', '다이얼로그를 닫습니다. 단, 임의로 닫을 수 없도록 설정한 경우는 제외합니다.'],
        ],
        notes: [
          '<code>showModal()</code>로 열면 다이얼로그에 <code>role="dialog"</code>와 모달 시맨틱이 부여되고, 페이지의 나머지 부분은 상호작용할 수 없게 됩니다.',
          '제목과 설명은 생성된 id로 연결되므로, 다이얼로그가 열리면 스크린 리더가 둘 다 읽어 줍니다.',
          '초기 포커스는 <code>autofocus</code>가 지정된 요소로, 없으면 포커스를 받을 수 있는 첫 번째 요소로 이동합니다. 파괴적인 작업을 확인할 때는 안전한 선택지에 <code>autofocus</code>를 지정하는 것이 좋습니다.',
          '다이얼로그가 닫히면 포커스는 다이얼로그를 연 요소로 돌아갑니다.',
          '사용자 상호작용 없이 Esc 키를 반복해서 누르면 브라우저가 임의로 닫을 수 없는 다이얼로그도 닫을 수 있습니다. 따라서 항상 명시적으로 닫을 수 있는 방법을 제공해야 합니다.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Angular 메뉴 컴포넌트',
        summary:
          '작업 목록을 팝업으로 보여 주는 메뉴로, 하위 메뉴와 체크 가능한 항목을 지원하며 키보드로 모든 조작이 가능합니다.',
        description:
          'Angular Aria 기반의 접근성을 갖춘 Angular 메뉴입니다. 키보드 탐색, 문자 검색, 하위 메뉴, 체크박스·라디오 항목, 뷰포트를 고려한 위치 지정을 지원합니다.',
        apiDescription:
          'Needless UI 메뉴의 API 레퍼런스입니다. nuiMenuTrigger, nuiMenu, nuiMenuItem과 값, 톤, 하위 메뉴, 체크 상태를 설명합니다.',
        a11yDescription:
          'Needless UI 메뉴의 키보드 상호작용과 접근성을 다룹니다. 화살표 키, 문자 검색, 하위 메뉴, Esc 키, 포커스 복귀를 설명합니다.',
        overview: [
          '메뉴는 트리거를 누르면 작업 목록을 표시합니다. 동작은 Angular Aria의 메뉴 패턴에서 가져오며, Needless UI는 스타일을 더하고, 메뉴를 페이지 위에 팝오버로 렌더링하며, 메뉴가 뷰포트 안에 머물도록 합니다.',
          '메뉴의 <code>ngMenu</code> 참조를 <code>[nuiMenuTrigger]</code>에 전달하고, 모든 항목에 고유한 <code>value</code>를 지정한 다음, 각 항목의 <code>(selected)</code> 또는 메뉴의 <code>(itemSelected)</code>로 선택에 반응합니다.',
        ],
        examples: {
          actions: {
            title: '작업',
            text: '단축키 힌트, 구분선, 파괴적인 항목이 있는 작업 메뉴입니다.',
          },
          submenu: {
            title: '하위 메뉴',
            text: '<code>[submenu]</code>로 항목을 중첩된 <code>nuiMenu</code>에 연결합니다. 마우스를 올리거나 오른쪽 화살표 키를 누르면 열립니다.',
          },
          checkable: {
            title: '체크박스 항목과 라디오 항목',
            text: '<code>role</code>을 설정하고 <code>[checked]</code>를 바인딩합니다. 메뉴가 표시기를 보여 주고 상태를 안내합니다.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: '메뉴를 엽니다. 보통 <code>nuiButton</code>에 적용합니다.',
            members: {
              nuiMenuTrigger:
                '열 메뉴입니다. <code>nuiMenu</code>의 <code>ngMenu</code> 참조를 지정합니다.',
            },
          },
          NuiMenu: {
            summary:
              '항목으로 구성된 메뉴로, 트리거 옆에 팝오버로 렌더링됩니다. <code>ngMenu</code>로 내보내는 것은 트리거와 하위 메뉴가 받는 Angular Aria 메뉴입니다.',
            members: {
              wrap: '화살표 키로 마지막 항목에서 첫 번째 항목으로 순환할지 여부.',
              typeaheadDelay: '문자 검색이 초기화되기까지의 시간(밀리초).',
              disabled: '메뉴 전체를 비활성화합니다.',
              itemSelected:
                '선택된 항목의 값을 내보냅니다. 루트 메뉴에서는 하위 메뉴 항목을 선택할 때도 발생합니다.',
            },
          },
          NuiMenuItem: {
            summary: '<code>nuiMenu</code> 안의 항목입니다.',
            members: {
              value: '항목을 식별하는 값. 하위 메뉴를 포함한 메뉴 전체에서 고유해야 합니다.',
              disabled:
                '항목을 비활성화합니다. 화살표 키로 이동할 수는 있지만 선택할 수는 없습니다.',
              submenu: '이 항목이 여는 중첩된 <code>nuiMenu</code>.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code>, <code>menuitemradio</code> 중 하나.',
              checked: '체크박스 항목이나 라디오 항목의 체크 상태.',
              tone: '파괴적인 작업에는 <code>danger</code>를 지정합니다.',
              searchTerm: '문자 검색에서 비교하는 텍스트. 기본값은 항목의 레이블입니다.',
              selected: '마우스나 키보드로 항목을 선택하면 항목의 값을 내보냅니다.',
            },
          },
          NuiMenuSeparator: { summary: '항목 그룹을 나누는 구분선입니다.', members: {} },
          NuiMenuShortcut: {
            summary: '항목의 끝 쪽에 정렬되는 키보드 단축키 힌트입니다.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter 또는 Space',
            '트리거에서: 메뉴를 열고 첫 번째 항목으로 이동합니다. 항목에서: 항목을 선택하거나 하위 메뉴를 엽니다.',
          ],
          [
            '아래쪽 화살표',
            '트리거에서: 메뉴를 열고 첫 번째 항목으로 이동합니다. 메뉴에서: 다음 항목으로 이동합니다.',
          ],
          [
            '위쪽 화살표',
            '트리거에서: 메뉴를 열고 마지막 항목으로 이동합니다. 메뉴에서: 이전 항목으로 이동합니다.',
          ],
          ['Home / End', '첫 번째 또는 마지막 항목으로 이동합니다.'],
          [
            '오른쪽 화살표',
            '하위 메뉴를 열고 그 첫 번째 항목으로 이동합니다(오른쪽에서 왼쪽으로 쓰는 언어에서는 왼쪽 화살표).',
          ],
          [
            '왼쪽 화살표',
            '하위 메뉴를 닫고 상위 항목으로 돌아갑니다(오른쪽에서 왼쪽으로 쓰는 언어에서는 오른쪽 화살표).',
          ],
          ['Esc', '메뉴를 닫고 포커스를 트리거로 되돌립니다.'],
          ['문자 키', '입력한 텍스트로 시작하는 레이블을 가진 다음 항목으로 이동합니다.'],
        ],
        notes: [
          '트리거에는 <code>aria-haspopup</code>, <code>aria-expanded</code>, <code>aria-controls</code>가 지정되고, 메뉴와 항목에는 Angular Aria가 ARIA 역할을 부여합니다.',
          '강조 표시된 항목은 텍스트 명도 대비가 4.5:1 이상인 단색 채우기를 사용하며, 포커스 표시기 역할도 합니다. 강제 색상 모드에서는 시스템 강조 색상의 윤곽선이 표시됩니다.',
          '체크 가능한 항목은 <code>aria-checked</code>로 상태를 안내합니다.',
          '항목을 선택하면 메뉴가 닫히고 포커스가 트리거로 돌아갑니다. 포커스가 트리거와 메뉴 밖으로 이동해도 메뉴가 닫힙니다.',
          '항목의 높이는 최소 28픽셀로, WCAG 2.2의 최소 타깃 크기보다 큽니다.',
        ],
      },
    },
  },

  guides: {
    title: '가이드',
    items: {
      'getting-started': {
        title: '시작하기',
        description:
          'Angular 22 앱에 Needless UI를 설치하는 방법입니다. 패키지를 추가하고 스타일시트를 가져오면, 몇 분 만에 접근성을 갖춘 첫 컴포넌트를 사용할 수 있습니다.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI는 Angular 22에서 동작합니다. 컴포넌트는 스탠드얼론 디렉티브이므로 가져올 모듈이 없습니다.',
          },
          { kind: 'h2', id: 'install', text: '설치' },
          {
            kind: 'p',
            html: '키보드 및 접근성 동작을 제공하는 Angular Aria, CDK와 함께 Angular 패키지를 추가합니다. 스타일시트도 함께 설치됩니다.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: '스타일 가져오기' },
          {
            kind: 'p',
            html: '<code>src/styles.css</code>에서 스타일시트를 한 번만 가져옵니다. 디자인 토큰과 모든 컴포넌트가 포함되어 있습니다.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: '모든 것이 <code>@layer nui</code> 안에 들어 있습니다. 앱에 <code>a { color: inherit }</code> 같은 전역 리셋이 있다면, 컴포넌트를 덮어쓰지 않도록 <code>nui</code>보다 먼저 선언한 레이어에 넣어야 합니다.',
          },
          { kind: 'h2', id: 'use', text: '컴포넌트 사용하기' },
          {
            kind: 'p',
            html: '필요한 디렉티브를 각 엔트리 포인트에서 가져와 컴포넌트의 <code>imports</code>에 추가합니다.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: '다음 단계' },
          {
            kind: 'p',
            html: '라이브 예제는 <a href="/components">컴포넌트</a>에서 확인할 수 있습니다. 브랜드에 맞게 꾸미려면 <a href="/guides/theming">테마 설정 가이드</a>를 읽어 보시기 바랍니다.',
          },
        ],
      },
      theming: {
        title: '테마 설정',
        description:
          'CSS 사용자 지정 속성으로 Needless UI의 테마를 설정하는 방법입니다. 라이트·다크 모드, 중첩 테마, 토큰 재정의, 명도 대비를 검증한 브랜드 팔레트 재생성을 다룹니다.',
        blocks: [
          {
            kind: 'p',
            html: '모든 시각적 결정은 W3C 디자인 토큰에서 생성된 CSS 사용자 지정 속성입니다. 컴포넌트는 <code>--nui-color-accent-solid</code> 같은 시맨틱 토큰만 사용하므로, 토큰 하나를 바꾸면 그 토큰을 사용하는 모든 컴포넌트의 스타일이 바뀝니다.',
          },
          { kind: 'h2', id: 'modes', text: '라이트와 다크' },
          {
            kind: 'p',
            html: '기본적으로 운영체제의 설정에 따라 모드가 정해집니다. <code>data-nui-theme</code> 속성으로 어떤 요소에든 모드를 고정할 수 있으며, 자유롭게 중첩할 수도 있습니다.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: '토큰 재정의' },
          {
            kind: 'p',
            html: '토큰은 <code>@layer nui</code> 안에 있으므로 앱의 일반 CSS로 재정의할 수 있습니다. 앱 전체에 적용하려면 <code>:root</code>에, 일부에만 적용하려면 해당 요소에 설정합니다.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: '브랜드 팔레트' },
          {
            kind: 'p',
            html: '컬러 스케일은 자동으로 생성됩니다. <code>packages/tokens/scripts/palette.ts</code>에서 색상(hue) 값을 바꾸고 다시 생성하면, 스크립트가 모든 색을 sRGB 범위에 맞게 다시 조정하고 텍스트와 배경 조합마다 명도 대비를 다시 검사합니다.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
    },
  },

  notFound: {
    title: '페이지를 찾을 수 없습니다',
    description:
      '요청한 페이지가 존재하지 않습니다. Needless UI 컴포넌트를 둘러보거나 홈페이지에서 다시 시작할 수 있습니다.',
    text: '이 페이지는 존재하지 않거나 다른 곳으로 이동했습니다.',
    home: '홈페이지로 이동',
    components: '컴포넌트 둘러보기',
  },

  legal: {
    translationNote:
      '이 번역은 편의를 위해 제공되며, 영어 원문과 내용이 다를 경우 영어 원문이 우선합니다.',
    labels: {
      name: '이름',
      address: '주소',
      email: '이메일',
      uid: 'UID',
      vat: '부가가치세 번호',
    },
    notice: {
      title: '법적 고지',
      description:
        'needlessui.com 운영자 정보입니다. 운영자의 이름, 우편 주소, 이메일과 함께 상업등기 및 부가가치세 정보를 안내합니다.',
      operator: '운영자',
      legalForm: '개인사업자',
      country: '스위스',
      register: '상업등기',
      registerEntry: '추크주 상업등기부에 등기되어 있습니다.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: '면책 조항' },
        {
          kind: 'p',
          html: '이 사이트의 내용은 신중하게 작성되었지만, 정확성, 완전성, 최신성을 보장하지 않습니다. 링크된 웹사이트는 이 사이트가 관리하지 않으며, 그 내용에 대한 책임은 각 사이트의 운영자에게 있습니다.',
        },
        { kind: 'h2', id: 'license', text: '라이선스' },
        {
          kind: 'p',
          html: '이 사이트를 포함한 Needless UI는 <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">MIT 라이선스</a>에 따라 공개된 오픈 소스입니다.',
        },
      ],
    },
    privacy: {
      title: '개인정보 처리방침',
      description:
        'needlessui.com의 개인정보 처리 방식입니다. 쿠키, 분석, 추적을 사용하지 않으며, 방문 시 호스팅 업체가 처리하는 정보와 이용자의 권리를 안내합니다.',
      updated: '최종 업데이트: 2026년 9월 24일',
      blocks: [
        {
          kind: 'p',
          html: '이 방침은 www.needlessui.com을 방문할 때 어떤 개인정보가 처리되는지, 그리고 이용자에게 어떤 권리가 있는지 설명합니다. 요약하면, 이 사이트는 쿠키, 분석 도구, 추적 기술을 사용하지 않으며 개인정보를 요청하지 않습니다.',
        },
        { kind: 'h2', id: 'controller', text: '책임자' },
        {
          kind: 'p',
          html: '<a href="/legal">법적 고지</a>에 명시된 운영자 Angelo Lamonaca입니다. 연락처: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: '호스팅' },
        {
          kind: 'p',
          html: '이 사이트는 Vercel Inc.(440 N Barranca Avenue #4133, Covina, CA 91723, USA)가 호스팅합니다. 페이지를 열면 브라우저는 모든 웹사이트가 받는 기술 정보, 즉 IP 주소, 날짜와 시간, 요청한 페이지, 이전 페이지, 브라우저의 사용자 에이전트를 전송합니다. Vercel은 사이트를 제공하고 안전하게 유지하기 위해 운영자를 대신하여 이 데이터를 처리하며, 그 목적에 필요한 기간 동안만 보관합니다. 이 처리는 미국에서 이루어질 수 있습니다. Vercel은 EU-미국 데이터 프라이버시 프레임워크(EU-U.S. Data Privacy Framework), 그 영국 확장(UK Extension), 스위스-미국 데이터 프라이버시 프레임워크(Swiss-U.S. Data Privacy Framework)의 인증을 받았습니다. 자세한 내용은 <a href="https://vercel.com/legal/privacy-policy">Vercel의 개인정보 처리방침</a>을 참고하시기 바랍니다.',
        },
        {
          kind: 'p',
          html: 'GDPR이 적용되는 경우, 처리의 법적 근거는 안전한 웹사이트 운영에 대한 운영자의 정당한 이익입니다(GDPR 제6조 제1항 (f)).',
        },
        { kind: 'h2', id: 'storage', text: '쿠키와 로컬 스토리지' },
        {
          kind: 'p',
          html: '이 사이트는 쿠키를 설정하지 않습니다. 라이트 또는 다크 테마를 선택하면 다음 방문을 위해 브라우저의 로컬 스토리지에 그 선택이 저장됩니다. 이 정보는 기기 밖으로 전송되지 않으며, 삭제하려면 ‘시스템’으로 다시 전환하거나 사이트 데이터를 지우면 됩니다.',
        },
        { kind: 'h2', id: 'tracking', text: '추적 없음' },
        {
          kind: 'p',
          html: '이 사이트에는 분석 도구, 광고, 소셜 미디어 플러그인, 제3자 임베디드 콘텐츠, 외부 글꼴이 없습니다. GitHub와 npm으로 연결되는 링크는 각자의 개인정보 처리방침을 따르는 사이트로 이동합니다.',
        },
        { kind: 'h2', id: 'rights', text: '이용자의 권리' },
        {
          kind: 'p',
          html: '자신에 관한 어떤 개인정보가 처리되는지 문의할 수 있으며, 정정이나 삭제를 요청할 수 있습니다. GDPR이 적용되는 경우에는 처리에 반대하거나, 처리 제한을 요청하거나, 이동 가능한 형식으로 자신의 데이터를 받을 수도 있습니다. {email}로 연락하시기 바랍니다. 또한 감독 기관에 민원을 제기할 수 있습니다. 스위스에서는 연방 데이터 보호 및 정보 위원(FDPIC), EU에서는 거주 국가의 감독 기관에 제기하면 됩니다.',
        },
        { kind: 'h2', id: 'changes', text: '변경 사항' },
        {
          kind: 'p',
          html: '이 방침은 새 호스팅 업체로 이전하는 경우처럼 사이트가 바뀔 때 함께 변경됩니다. 아래 날짜는 현재 버전을 나타냅니다.',
        },
      ],
    },
  },
};
