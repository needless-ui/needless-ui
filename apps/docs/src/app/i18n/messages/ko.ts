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
    emergency: {
      label: '누르지 마시오',
      cover: '안전 덮개 열기',
      button: '누르지 마시오',
      armed: '덮개가 열렸습니다. 다시 생각해 보십시오.',
      falling: '비상 프로토콜 작동 중…',
      fallen: '이제 중력은 영구적입니다. 우주를 다시 세우려면 페이지를 새로 고치십시오.',
      reduced: '시스템에서 동작 줄이기를 요청하여 중력은 꺼진 상태로 유지됩니다. 운이 좋으시네요.',
    },
    toaster: { label: '알림(Alt+T)', close: '닫기' },
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
        title: '쓸데없이 세밀한 커스터마이징',
        text: '스프링, 누르기 효과, 등장 효과, 모서리 모양과 반경, 밀도. 앱 전체는 <a href="/guides/customization">속성 하나</a>로, 개별 컴포넌트는 입력 하나로 바꿀 수 있으며, 모두 표준 W3C 디자인 토큰을 기반으로 합니다.',
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
      kinds: { input: '입력', model: '양방향', output: '출력', method: '메서드', property: '속성' },
      texts: '표시하거나 읽어 주는 모든 텍스트도 입력이므로 번역할 수 있습니다:',
      customization: {
        note: '설정하지 않은 커스터마이징 입력은 가장 가까운 <code>data-nui-*</code> 속성을 따릅니다. 자세한 내용은 <a href="/guides/customization">커스터마이징 가이드</a>를 참고하시기 바랍니다.',
        members: {
          motion:
            '움직일 때 사용하는 스프링: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code>, <code>none</code> 중 하나.',
          spring:
            '임의의 스프링을 <code>{ stiffness, damping, mass }</code> 형식으로 지정하며, 런타임에 CSS로 컴파일됩니다. <code>motion</code>보다 우선합니다.',
          press:
            '누르고 있는 동안의 동작: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code>, <code>none</code> 중 하나.',
          enter:
            '등장하는 방식: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code>, <code>none</code> 중 하나.',
          corners:
            '모서리 모양: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code>, <code>square</code> 중 하나.',
          radius:
            '모서리 크기: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>full</code> 중 하나.',
          density:
            '차지하는 공간: <code>compact</code>, <code>regular</code>, <code>roomy</code> 중 하나.',
        },
      },
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
          presses: {
            title: '누르기 효과',
            text: '버튼을 하나씩 길게 눌러 보십시오. <code>press</code>는 버튼을 누르고 있는 동안의 동작을, <code>motion</code>은 버튼이 되돌아올 때의 스프링을 설정합니다. 어떤 요소에든 <code>data-nui-press</code>를 지정하면 그 안의 모든 것에 적용됩니다.',
          },
          shapes: {
            title: '모서리 모양, 반경, 밀도',
            text: '<code>corners</code>는 모서리의 모양을, <code>radius</code>는 모서리의 크기를, <code>density</code>는 버튼이 차지하는 공간을 바꾸며, 버튼이 24px 타깃 크기보다 작아지는 일은 없습니다. <code>corner-shape</code>를 지원하지 않는 브라우저에서는 모서리가 둥글게 그려집니다.',
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
          entrances: {
            title: '등장 효과',
            text: '각 버튼은 같은 다이얼로그를 서로 다른 <code>enter</code> 프리셋으로 열며, 스프링은 모두 <code>bouncy</code>입니다. 어떤 방식으로 등장하든 닫힐 때는 빠르게 페이드아웃됩니다.',
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
          entrances: {
            title: '등장 효과와 스프링',
            text: '각 메뉴는 <code>enter</code> 프리셋과 <code>motion</code> 스프링을 짝지어 사용하며, 열리는 쪽에서부터 커지며 나타납니다. 하위 메뉴는 두 설정을 모두 상속합니다.',
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

      avatar: {
        name: '아바타',
        title: 'Angular 아바타 컴포넌트',
        summary: '사람의 사진을 보여 주거나, 그 사람만의 고유한 색 위에 이니셜을 표시합니다.',
        description:
          '사진이 없으면 이니셜로 대체되는 Angular 아바타입니다. 이름마다 정해지는 색상, 상태 점, 그룹을 지원하며 모든 테마에서 잘 읽힙니다.',
        apiDescription:
          'Needless UI 아바타의 API 레퍼런스입니다. 이름, 사진, 크기, 모양, 상태를 지정하는 nuiAvatar와 nuiAvatarGroup을 설명합니다.',
        a11yDescription:
          'Needless UI 아바타의 접근성을 다룹니다. 이미지 역할과 이름, 장식용 아바타, 4.5:1 명도 대비를 유지하는 이니셜을 설명합니다.',
        overview: [
          '<code>nuiAvatar</code> 컴포넌트는 사진을 보여 주며, 사진이 없거나 불러오지 못하면 그 사람의 이니셜을 표시합니다. 이니셜의 배경색은 이름으로 계산되므로, 같은 사람은 어디서나 같은 색상으로 표시됩니다.',
          '모든 색상(hue)은 밝기와 채도에 상한을 두어, 이름이나 테마와 관계없이 흰색 이니셜이 항상 4.5:1보다 높은 명도 대비를 유지합니다.',
        ],
        examples: {
          people: {
            title: '이니셜, 사진, 상태',
            text: '<code>src</code>가 없으면 이니셜과 색상은 <code>name</code>에서 정해집니다. <code>status</code>는 접속 상태를 나타내는 점을 추가합니다.',
          },
          group: {
            title: '그룹, 크기, 모양',
            text: '<code>nuiAvatarGroup</code>은 아바타를 한 줄로 겹쳐 놓습니다. <code>size</code>에는 <code>sm</code>, <code>md</code>, <code>lg</code>를 지정할 수 있으며, <code>shape="square"</code>는 팀이나 앱에 잘 어울립니다.',
          },
        },
        api: {
          NuiAvatar: {
            summary: '사진 또는 이니셜이며, 그 사람의 이름이 접근 가능한 이름이 됩니다.',
            members: {
              name: '사람의 이름입니다. 접근 가능한 이름, 이니셜, 색상이 모두 이 값에서 정해집니다.',
              src: '사진 URL입니다. 불러오지 못하면 대신 이니셜이 표시됩니다.',
              size: '크기: <code>sm</code>, <code>md</code>, <code>lg</code> 중 하나.',
              shape: '<code>circle</code> 또는 <code>square</code>.',
              status:
                '접속 상태 점: <code>online</code>, <code>away</code>, <code>busy</code>, <code>offline</code> 중 하나.',
              label:
                '이름보다 많은 정보를 전달하는 접근 가능한 이름입니다. 예: ‘Ada Lovelace, 온라인’.',
              decorative:
                '보조 기술에서 아바타를 숨깁니다. 이름이 바로 옆에 보이는 아바타에 사용합니다.',
            },
          },
          NuiAvatarGroup: {
            summary: '서로 겹쳐진 아바타의 행입니다. <code>aria-label</code>로 이름을 지정합니다.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          '아바타는 그 사람의 이름이 붙은 이미지(<code>role="img"</code>)입니다. 이름이 옆에 보이는 경우에는 스크린 리더가 이름을 두 번 읽지 않도록 <code>decorative</code>를 지정합니다.',
          '상태 점은 시각적으로만 표시됩니다. 상태가 중요하다면 <code>label</code>에 포함해야 합니다.',
          '이니셜은 생성되는 모든 색상 위에서 4.5:1 이상의 명도 대비를 유지합니다.',
        ],
      },

      breadcrumbs: {
        name: '브레드크럼',
        title: 'Angular 브레드크럼 컴포넌트',
        summary: '현재 페이지까지 이어지는 페이지 경로를 보여 줍니다.',
        description:
          '네이티브 nav와 목록으로 만든 접근성을 갖춘 Angular 브레드크럼입니다. CSS 구분자는 오른쪽에서 왼쪽으로 쓰는 언어에서 반전되고, 긴 경로는 스크롤됩니다.',
        apiDescription:
          'Needless UI 브레드크럼의 API 레퍼런스입니다. nuiBreadcrumbs 디렉티브와 랜드마크 레이블을 설명합니다.',
        a11yDescription:
          'Needless UI 브레드크럼의 접근성을 다룹니다. 탐색 랜드마크, 목록 시맨틱, 현재 페이지, 타깃 크기를 설명합니다.',
        overview: [
          '브레드크럼은 페이지가 사이트의 어디에 있는지 보여 줍니다. <code>nuiBreadcrumbs</code> 디렉티브는 네이티브 <code>&lt;nav&gt;</code>와 그 안의 목록에 스타일을 적용하며, 마지막 항목은 <code>aria-current="page"</code>로 표시된 현재 페이지입니다.',
          '컨테이너보다 긴 경로는 줄 바꿈되지 않고 가로로 스크롤됩니다. 처음에는 끝까지 스크롤된 상태로 표시되며, 더 볼 내용이 있는 쪽 끝은 흐려집니다.',
        ],
        examples: {
          trail: {
            title: '기본 경로',
            text: '상위 페이지들의 링크 다음에 현재 페이지를 <code>aria-current="page"</code>가 지정된 일반 텍스트로 표시합니다.',
          },
          long: {
            title: '긴 경로',
            text: '좁은 컨테이너에서는 경로가 스크롤되며, 처음부터 현재 페이지가 보이는 상태로 시작합니다.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: '<code>&lt;nav&gt;</code>와 그 안의 목록에 브레드크럼 스타일을 적용합니다.',
            members: { label: '탐색 랜드마크의 접근 가능한 이름입니다.' },
          },
        },
        keyboard: [['Tab', '경로의 다음 링크로 이동합니다.']],
        notes: [
          '일반 목록을 담은 탐색 랜드마크이므로, 스크린 리더가 경로에 페이지가 몇 개 있는지 안내합니다.',
          '구분자는 CSS로 그려지므로 읽히지 않으며, 오른쪽에서 왼쪽으로 쓰는 언어에서는 반전됩니다.',
          '모든 링크의 높이는 최소 24px입니다.',
        ],
      },

      empty: {
        name: '빈 상태',
        title: 'Angular 빈 상태 컴포넌트',
        summary: '보여 줄 것이 없을 때 무엇을 보여 주고 어떻게 하면 되는지 알려 줍니다.',
        description:
          '이미지, 제목, 짧은 설명, 작업 버튼으로 구성된 Angular 빈 상태 컴포넌트입니다. 부드럽게 떠다니는 기본 일러스트 네 가지도 제공합니다.',
        apiDescription:
          'Needless UI 빈 상태의 API 레퍼런스입니다. nuiEmpty와 미디어, 제목, 설명, 작업 파트를 설명합니다.',
        a11yDescription:
          'Needless UI 빈 상태의 접근성을 다룹니다. 장식용 이미지, 의미 있는 제목, 동작 줄이기 대응을 설명합니다.',
        overview: [
          '빈 상태는 아직 아무것도 없는 목록, 표, 페이지를 대신합니다. 그 이유를 설명하고 다음 단계를 제시합니다.',
          '미디어 파트에는 직접 준비한 이미지를 넣거나, 기본 일러스트(<code>search</code>, <code>inbox</code>, <code>files</code>, <code>error</code>) 중 하나를 그릴 수 있습니다.',
        ],
        examples: {
          search: {
            title: '결과 없음',
            text: '무슨 일이 있었는지 알려 주는 제목, 도움말 한 줄, 그리고 빠져나갈 방법을 제시하는 작업 버튼입니다.',
          },
          pictures: {
            title: '기본 일러스트',
            text: '<code>nuiEmptyMedia</code>에 <code>illustration</code>을 지정합니다. 일러스트는 테마를 따르며, 동작 줄이기 설정이 아니면 떠다닙니다.',
          },
        },
        api: {
          NuiEmpty: { summary: '컨테이너로, 가운데 정렬된 세로 열입니다.', members: {} },
          NuiEmptyMedia: {
            summary: '이미지로, 보조 기술에서는 숨겨집니다.',
            members: {
              illustration:
                '기본 일러스트: <code>search</code>, <code>inbox</code>, <code>files</code>, <code>error</code> 중 하나.',
            },
          },
          NuiEmptyTitle: {
            summary: '제목입니다. 페이지에 맞는 제목 수준을 사용합니다.',
            members: {},
          },
          NuiEmptyDescription: { summary: '한 줄 설명입니다.', members: {} },
          NuiEmptyActions: { summary: '버튼 행입니다.', members: {} },
        },
        keyboard: [],
        notes: [
          '이미지는 장식용(<code>aria-hidden</code>)이며, 메시지는 제목과 설명이 전달합니다.',
          '제목에는 페이지 구조에 맞는 수준의 제목 요소를 사용합니다.',
          '사용자가 동작 줄이기를 선호하면 기본 일러스트는 떠다니지 않습니다.',
        ],
      },

      'number-field': {
        name: '숫자 필드',
        title: 'Angular 숫자 필드 컴포넌트',
        summary: '증감 버튼이 있는 숫자 입력으로, 모든 로케일에 맞는 서식으로 표시됩니다.',
        description:
          '접근성을 갖춘 Angular 숫자 필드입니다. 증감 버튼이 있는 스핀 버튼, 키보드 증감, 최솟값과 최댓값, 통화·백분율·단위의 로케일 서식을 지원합니다.',
        apiDescription:
          'Needless UI 숫자 필드의 API 레퍼런스입니다. nuiNumberField, min, max, step, format을 지원하는 nuiNumberInput, nuiNumberStep을 설명합니다.',
        a11yDescription:
          'Needless UI 숫자 필드의 키보드 상호작용과 접근성을 다룹니다. spinbutton 역할, 화살표 키와 Page 키, 증감 버튼을 설명합니다.',
        overview: [
          '숫자 필드는 숫자를 담는 텍스트 입력입니다. 숫자를 로케일에 맞는 서식으로 표시하고 입력된 텍스트도 같은 서식으로 읽으며, 포커스를 잃으면 값을 <code>min</code>과 <code>max</code> 사이에서 <code>step</code> 단위에 맞춥니다.',
          '각 언어 고유의 숫자와 구분 기호도 읽습니다. 아랍-인도 숫자, 페르시아 숫자, 데바나가리 숫자, 자릿수 구분 기호로 쓰인 공백과 점, 모든 종류의 마이너스 기호를 인식합니다. 증감 버튼을 누르고 있으면 점점 더 빠르게 반복됩니다.',
        ],
        examples: {
          guests: {
            title: '증감 버튼',
            text: '양쪽에 버튼이 있으며, <code>min</code>과 <code>max</code>에 도달하면 비활성화됩니다. 화살표 키로도 값을 바꿀 수 있습니다.',
          },
          formats: {
            title: '통화와 백분율',
            text: '<code>format</code>에 <code>Intl.NumberFormat</code> 옵션을 전달하고 <code>locale</code>을 지정합니다. 값은 일반 숫자로 유지됩니다.',
          },
        },
        api: {
          NuiNumberField: {
            summary: '입력과 증감 버튼을 하나로 묶습니다.',
            members: {},
          },
          NuiNumberInput: {
            summary: '숫자를 담는 텍스트 입력으로, ARIA 스핀 버튼 역할을 합니다.',
            members: {
              value:
                '숫자이며, 비어 있으면 <code>null</code>입니다. 폼과도 함께 사용할 수 있습니다.',
              min: '허용되는 최솟값.',
              max: '허용되는 최댓값.',
              step: '한 단계에 값이 바뀌는 양. 포커스를 잃으면 값이 이 단위에 맞춰집니다.',
              format:
                "<code>Intl.NumberFormat</code> 옵션. 예: <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: '숫자의 서식 지정과 읽기에 사용하는 로케일.',
              disabled: '입력과 버튼을 비활성화합니다.',
              stepBy: '지정한 단계 수만큼 값을 올리거나(양수) 내립니다(음수).',
            },
          },
          NuiNumberStep: {
            summary: '증감 버튼입니다. 누르고 있으면 반복됩니다.',
            members: {
              nuiNumberStep: '<code>1</code>은 값을 올리고 <code>-1</code>은 값을 내립니다.',
              label: '접근 가능한 이름. 기본값은 ‘Increase’ 또는 ‘Decrease’입니다.',
            },
          },
        },
        keyboard: [
          ['위쪽 / 아래쪽 화살표', '값을 한 단계 올리거나 내립니다.'],
          ['Page Up / Page Down', '열 단계만큼 올리거나 내립니다.'],
          ['Home / End', '최솟값 또는 최댓값으로 이동합니다.'],
          ['Enter', '입력한 내용을 확정합니다.'],
        ],
        notes: [
          '입력은 <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>를 가진 <code>spinbutton</code>이며, 서식이 지정된 값이 <code>aria-valuetext</code>가 됩니다.',
          '키로 같은 작업을 할 수 있으므로 증감 버튼은 탭 순서에서 빠져 있지만, 이름이 지정되어 있고 <code>aria-controls</code>로 입력과 연결되어 있습니다.',
          '<code>aria-label</code> 또는 <code>&lt;label&gt;</code>로 입력에 레이블을 지정합니다.',
        ],
      },

      otp: {
        name: 'OTP 입력',
        title: 'Angular OTP·인증 코드 입력 컴포넌트',
        summary: '인증 코드를 칸마다 나눠 보여 주지만, 실제로는 진짜 입력 필드 하나입니다.',
        description:
          '접근성을 갖춘 Angular OTP 입력입니다. 칸 아래에 네이티브 입력 필드 하나를 두고 SMS 자동 완성, WebOTP, 붙여넣기 정리, 그룹, 마스킹, 오류 흔들림을 지원합니다.',
        apiDescription:
          'Needless UI OTP 입력의 API 레퍼런스입니다. 길이, 패턴, 그룹, 마스킹을 지원하는 nuiOtp와 WebOTP를 지원하는 nuiOtpInput을 설명합니다.',
        a11yDescription:
          'Needless UI OTP 입력의 키보드 동작과 접근성을 다룹니다. 레이블이 있는 텍스트 필드 하나, 눈에 보이는 포커스 링, 자동 완성을 설명합니다.',
        overview: [
          'OTP 입력은 여러 칸이 나란히 있는 것처럼 보이지만, 실제로는 네이티브 <code>&lt;input&gt;</code> 하나입니다. SMS 자동 완성(<code>autocomplete="one-time-code"</code>), 붙여넣기, 비밀번호 관리자, 폼, 스크린 리더 모두 이를 평범한 텍스트 필드로 인식합니다.',
          '붙여 넣은 코드는 정리되므로 ‘123-456’과 ‘123 456’ 모두 입력되며, 패턴이 허용하지 않는 문자는 거부됩니다. Android에서는 <code>webOtp</code>가 SMS가 도착하는 즉시 코드를 채웁니다.',
        ],
        examples: {
          verify: {
            title: '인증',
            text: '마지막 칸이 채워지면 <code>(completed)</code>가 발생합니다. 코드를 거부하려면 입력에 <code>aria-invalid</code>를 설정합니다. 그러면 칸이 빨갛게 바뀌고 흔들립니다.',
          },
          letters: {
            title: '문자, 그룹, 마스킹',
            text: '<code>pattern="alphanumeric"</code>은 문자도 받고, <code>[groups]</code>는 구분자를 추가하며, <code>masked</code>는 점을 그립니다.',
          },
        },
        api: {
          NuiOtp: {
            summary: '칸을 그리고 입력을 감쌉니다.',
            members: {
              length: '문자 수.',
              pattern: '<code>digits</code>, 또는 문자와 숫자를 받는 <code>alphanumeric</code>.',
              groups: '그룹 크기. 그룹 사이에 구분자가 그려집니다. 예: <code>[3, 3]</code>.',
              masked: '문자 대신 점을 그립니다.',
              completed: '마지막 칸이 채워질 때마다 코드를 내보냅니다.',
            },
          },
          NuiOtpInput: {
            summary: '실제 입력입니다. 일회용 코드에 필요한 속성이 지정됩니다.',
            members: {
              webOtp: '지원되는 환경에서 WebOTP API로 수신한 SMS의 코드를 채웁니다.',
            },
          },
        },
        keyboard: [
          ['숫자 또는 문자 키', '현재 칸을 채우고 다음 칸으로 이동합니다.'],
          ['Backspace', '캐럿 앞의 문자를 삭제합니다.'],
          [
            '왼쪽 / 오른쪽 화살표',
            '한 칸 이동합니다. 채워진 칸은 선택되므로 입력하면 그 문자가 바뀝니다.',
          ],
          ['붙여넣기', '복사한 코드로 칸을 채웁니다.'],
        ],
        notes: [
          '스크린 리더는 텍스트 필드 하나로 인식합니다. <code>aria-label</code> 또는 <code>&lt;label&gt;</code>로 레이블을 지정합니다.',
          '칸은 보조 기술에서 숨겨지며, 편집 중인 칸에 포커스 링이 표시됩니다.',
          '동작 줄이기 설정에서는 캐럿이 깜박이지 않고 칸이 튀거나 흔들리지 않습니다.',
        ],
      },

      rating: {
        name: '별점',
        title: 'Angular 별점 컴포넌트',
        summary: '진짜 라디오 버튼으로 만든, 별로 평가하는 컴포넌트입니다.',
        description:
          '네이티브 라디오 버튼으로 만든 접근성을 갖춘 Angular 별점입니다. 키보드와 폼, 마우스를 올렸을 때의 미리 보기, 별점 지우기, 읽기 전용 소수점 표시를 지원합니다.',
        apiDescription:
          'Needless UI 별점의 API 레퍼런스입니다. 값, 최댓값, 읽기 전용 모드와 지우기 가능 모드를 지원하는 nuiRating과 번역 가능한 레이블을 설명합니다.',
        a11yDescription:
          'Needless UI 별점의 키보드 상호작용과 접근성을 다룹니다. 이름이 있는 라디오 그룹, 레이블이 있는 별, 읽기 전용 이미지를 설명합니다.',
        overview: [
          '별점은 별 모양으로 그린 네이티브 라디오 버튼 그룹입니다. 화살표 키, 폼, 스크린 리더는 일반 라디오 그룹과 똑같이 동작하며, CSS가 별을 채우고 포인터 아래에 새 별점을 미리 보여 줍니다.',
          '읽기 전용일 때는 평균 4.3처럼 어떤 소수든 표시할 수 있습니다.',
        ],
        examples: {
          pick: {
            title: '별점 매기기',
            text: '<code>[(value)]</code> 또는 폼에 바인딩합니다. <code>clearable</code>을 지정하면 같은 별을 다시 선택할 때 별점이 지워집니다.',
          },
          average: {
            title: '평균 표시하기',
            text: '<code>readonly</code>는 별을 어떤 비율로든 채우고, 이미지에 ‘Rated 4.3 out of 5’라는 이름을 붙입니다.',
          },
        },
        api: {
          NuiRating: {
            summary: '별로 이루어진 라디오 그룹, 또는 별점을 나타내는 읽기 전용 이미지입니다.',
            members: {
              value: '별점 값 또는 <code>null</code>. 폼과도 함께 사용할 수 있습니다.',
              max: '별의 개수.',
              readonly: '값을 입력받는 대신, 소수점까지 그대로 표시합니다.',
              disabled: '모든 별을 비활성화합니다.',
              clearable: '현재 별을 다시 선택하면 별점이 지워집니다.',
              name: '라디오 버튼들이 공유하는 이름. 기본적으로 자동 생성됩니다.',
              starLabel: '각 별의 접근 가능한 이름으로, 별의 값을 받는 함수로 지정합니다.',
              readonlyLabel: '읽기 전용 모드의 접근 가능한 이름.',
            },
          },
        },
        keyboard: [
          ['Tab', '그룹 안의 선택된 별로 이동합니다.'],
          ['화살표 키', '별점을 바꿉니다.'],
          ['Space', '포커스된 별을 선택합니다.'],
        ],
        notes: [
          '각 별은 ‘3 stars’라는 이름의 네이티브 라디오 버튼입니다. <code>aria-label</code>로 그룹의 이름을 지정합니다.',
          '읽기 전용일 때 별점은 ‘Rated 4.3 out of 5’라는 이름의 이미지(<code>role="img"</code>)입니다.',
          '별은 CSS 마스크로 그려지므로 강제 색상 모드를 따릅니다.',
        ],
      },

      skeleton: {
        name: '스켈레톤',
        title: 'Angular 스켈레톤 로더 컴포넌트',
        summary: '콘텐츠를 불러오는 동안 레이아웃을 유지하는 자리 표시자입니다.',
        description:
          '텍스트, 원, 블록 모양의 Angular 스켈레톤 로더입니다. 하나의 시머 효과가 페이지 전체를 가로지르며, 동작 줄이기 설정에서는 시머가 없습니다.',
        apiDescription:
          'Needless UI 스켈레톤의 API 레퍼런스입니다. nuiSkeleton 디렉티브와 텍스트, 원, 블록 모양을 설명합니다.',
        a11yDescription:
          'Needless UI 스켈레톤의 접근성을 다룹니다. 숨겨진 자리 표시자, aria-busy 영역, 동작 줄이기, 강제 색상 모드를 설명합니다.',
        overview: [
          '스켈레톤은 아직 불러오는 중인 콘텐츠의 모양을 유지하므로, 콘텐츠가 나타나도 페이지가 흔들리지 않습니다. 크기는 CSS로 지정합니다.',
          '시머는 뷰포트에 고정되어 있습니다. 크기나 위치와 관계없이 하나의 하이라이트가 페이지의 모든 스켈레톤을 동시에 가로지릅니다.',
        ],
        examples: {
          card: {
            title: '카드 불러오기',
            text: '줄, 원, 블록이 프로필 자리를 대신합니다. 불러오는 동안 카드에는 <code>aria-busy</code>가 지정됩니다.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: '자리 표시자로, 보조 기술에서는 숨겨집니다.',
            members: {
              shape: '<code>text</code>(한 줄), <code>circle</code>, <code>block</code> 중 하나.',
            },
          },
        },
        keyboard: [],
        notes: [
          '스켈레톤은 스크린 리더에서 숨겨집니다. 불러오는 중인 영역에 <code>aria-busy="true"</code>를 지정하고, 콘텐츠가 나타나면 제거합니다.',
          '사용자가 동작 줄이기를 선호하면 시머가 표시되지 않습니다.',
          '강제 색상 모드에서는 각 스켈레톤에 윤곽선이 표시됩니다.',
        ],
      },

      toast: {
        name: '토스트',
        title: 'Angular 토스트 알림',
        summary: '쌓이고, 스와이프로 치울 수 있으며, 포커스를 빼앗지 않는 짧은 메시지입니다.',
        description:
          '접근성을 갖춘 Angular 토스트입니다. 최상위 레이어의 스택, 프로미스 토스트, 실행 취소, 스와이프로 닫기, 마우스를 올리거나 포커스하면 멈추는 타이머를 지원합니다.',
        apiDescription:
          'Needless UI 토스트의 API 레퍼런스입니다. NuiToaster 서비스와 옵션, 프로미스 토스트, nui-toaster 영역을 설명합니다.',
        a11yDescription:
          'Needless UI 토스트의 키보드 상호작용과 접근성을 다룹니다. 안내 방식, Alt+T 단축키, Esc 키, 일시 정지되는 타이머를 설명합니다.',
        overview: [
          '토스트는 흐름을 방해하지 않으면서 방금 일어난 일을 알려 주거나 실행 취소 같은 작업을 제안합니다. 앱 셸에 <code>&lt;nui-toaster&gt;</code>를 하나 두면, 어디서든 <code>NuiToaster</code>를 호출할 수 있습니다.',
          '토스트는 가장 최근 토스트 뒤에 쌓이고, 마우스를 올리거나 포커스하면 부채꼴로 펼쳐지며, 모든 움직임에 motion 스프링이 적용됩니다. 옆으로 스와이프하면 토스트를 치울 수 있습니다. 스택에 마우스를 올리거나 포커스가 있는 동안, 그리고 페이지가 백그라운드에 있는 동안에는 타이머가 멈춥니다.',
        ],
        examples: {
          tones: {
            title: '톤',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code>, <code>danger()</code>가 있습니다. danger 토스트는 더 오래 머무르며 즉시 안내됩니다.',
          },
          actions: {
            title: '작업과 프로미스',
            text: '<code>action</code>은 실행 취소 같은 버튼을 추가합니다. <code>promise()</code>는 스피너를 보여 준 다음 결과로 바뀝니다.',
          },
        },
        api: {
          NuiToaster: {
            summary: '토스트를 표시하는 서비스입니다. 어디서든 주입할 수 있습니다.',
            members: {
              toasts: '화면에 있는 모든 토스트. 최신 토스트가 먼저 옵니다.',
              show: '토스트를 표시합니다. 제목을 전달하거나, 설명, 톤, 지속 시간, 작업, id가 담긴 옵션을 전달합니다.',
              success: '성공 토스트를 표시합니다.',
              warning: '경고 토스트를 표시합니다.',
              danger: 'danger 토스트를 표시합니다. 8초 동안 머무르며 즉시 안내됩니다.',
              promise:
                '프로미스가 처리될 때까지 로딩 토스트를 표시한 다음, 성공 또는 danger 메시지를 표시합니다.',
              dismiss: '토스트 하나 또는 전부를 닫습니다.',
            },
          },
          NuiToasterRegion: {
            summary: '토스트가 나타나는 영역입니다. 앱 셸에 한 번만 배치합니다.',
            members: {
              position: '뷰포트의 모서리 또는 가장자리. 시작과 끝은 텍스트 방향을 따릅니다.',
              expanded: '스택을 계속 펼쳐 둡니다.',
              label: '영역의 접근 가능한 이름. 영역으로 이동하는 방법을 알려 줍니다.',
              closeLabel: '닫기 버튼의 접근 가능한 이름.',
              hotkey:
                'Alt와 함께 눌러 최신 토스트로 포커스를 옮기는 키로, <code>KeyboardEvent.code</code> 값으로 지정합니다.',
            },
          },
        },
        keyboard: [
          ['Alt+T', '가장 최근 토스트로 포커스를 이동합니다.'],
          ['Tab', '토스트와 그 작업 버튼, 닫기 버튼 사이를 이동합니다.'],
          ['Esc', '포커스된 토스트를 닫습니다.'],
        ],
        notes: [
          '모든 토스트는 나타날 때 안내됩니다. 평소에는 읽고 있던 내용을 끊지 않고, danger일 때는 즉시 안내됩니다. 토스트는 절대 포커스를 가져가지 않습니다.',
          '스택에 마우스를 올리거나 포커스가 있는 동안, 그리고 페이지가 숨겨진 동안에는 타이머가 멈추며, 프로미스를 기다리는 토스트는 시간이 지나도 닫히지 않습니다.',
          '사용자가 반드시 처리해야 하는 내용은 토스트 밖에도 있어야 합니다.',
          '동작 줄이기 설정에서는 토스트에 애니메이션이 없고 스와이프도 되지 않으며, 타이머 선이 숨겨집니다.',
        ],
      },
      combobox: {
        name: '콤보박스',
        title: 'Angular 콤보박스·자동 완성 컴포넌트',
        summary: '입력하는 대로 옵션을 제안하는 텍스트 필드입니다.',
        description:
          '접근성을 갖춘 Angular 콤보박스입니다. 일치 부분을 강조하는 퍼지 검색, 칩으로 표시되는 다중 값, 입력한 텍스트로 새 값 만들기, 서버 결과를 지원합니다.',
        apiDescription:
          'Needless UI 콤보박스의 API 레퍼런스입니다. value, values, multiple, create, filtering, loading, clearable을 지원하는 nui-combobox와 사용자 지정 행을 설명합니다.',
        a11yDescription:
          'Needless UI 콤보박스의 키보드 동작과 접근성을 다룹니다. 목록 자동 완성을 갖춘 편집 가능한 콤보박스, aria-activedescendant, 칩, IME 입력을 설명합니다.',
        overview: [
          '콤보박스는 제안 목록이 딸린 텍스트 필드입니다. 검색은 퍼지 방식이며 악센트를 구분하지 않습니다. 가장 잘 일치하는 항목이 먼저 오고, 일치한 글자는 표시됩니다. 셀렉트와 같은 <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 객체를 받습니다.',
          '<code>multiple</code>을 지정하면 선택한 옵션이 텍스트 앞에 칩으로 표시되고, <code>create</code>는 입력한 텍스트를 새 값으로 만듭니다. 서버에서 결과를 가져오려면 <code>filtering</code>을 끄고, <code>(queryChange)</code>에서 검색하고, 기다리는 동안 <code>loading</code>을 설정합니다.',
        ],
        examples: {
          country: {
            title: '검색',
            text: '일치하는 글자가 서로 붙어 있을 필요는 없으며, <code>keywords</code>도 검색 대상입니다. <code>clearable</code>은 지우기 버튼을 추가하고, Esc 키로 값을 지울 수 있게 합니다.',
          },
          tags: {
            title: '칩과 새 값',
            text: '<code>multiple</code>은 칩을 표시하고 <code>[(values)]</code>를 바인딩합니다. 입력한 텍스트가 아직 옵션에 없으면 <code>create</code>가 추가를 제안합니다.',
          },
          people: {
            title: '서버 결과',
            text: '목록은 서버가 보낸 결과를 필터링 없이 그대로 보여 주며, 기다리는 동안 로딩 행을 표시합니다. 새 결과가 도착해도 선택한 옵션의 레이블은 유지됩니다.',
          },
        },
        api: {
          NuiCombobox: {
            summary: '입력하는 대로 옵션을 제안하는 텍스트 필드입니다.',
            members: {
              options:
                '옵션 목록. <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> 객체로 지정합니다.',
              value: '선택된 값 또는 <code>null</code>. 폼과도 함께 사용할 수 있습니다.',
              values: '<code>multiple</code>일 때 선택된 값 목록.',
              multiple: '여러 옵션을 선택할 수 있게 하며, 선택한 옵션은 칩으로 표시됩니다.',
              create:
                '입력한 텍스트로 값을 만듭니다. 옵션에 없는 텍스트는 목록에서 추가하도록 제안합니다.',
              filtering: '입력하는 대로 옵션을 필터링합니다. 서버에서 필터링할 때는 끕니다.',
              loading: '결과를 기다리는 동안 로딩 행을 표시합니다.',
              clearable: '값을 지우는 버튼을 추가하고, Esc 키로도 지울 수 있게 합니다.',
              placeholder: '필드가 비어 있을 때 표시되는 텍스트.',
              label:
                '<code>&lt;label&gt;</code>로 필드의 이름을 지정하지 않을 때 사용하는 접근 가능한 이름.',
              inputId: '<code>&lt;label for&gt;</code>에 사용할 텍스트 필드의 id.',
              disabled: '필드를 비활성화합니다.',
              compareWith: '두 값이 같은 옵션인지 판단합니다. 값이 객체일 때 사용합니다.',
              displayWith:
                '옵션에 없는 값에 표시할 텍스트. 예를 들어 옵션을 불러오기 전에 설정된 값에 사용합니다.',
              virtual:
                '보이는 행만 렌더링합니다: 항상, 안 함, 또는 200행을 넘으면 켜지는 <code>auto</code>.',
              queryChange: '입력되는 텍스트를 내보냅니다. 서버 검색에 사용합니다.',
              openChange: '목록이 열리거나 닫힐 때 내보냅니다.',
              show: '목록을 엽니다.',
              hide: '목록을 닫습니다.',
              clear: '값과 텍스트를 지웁니다.',
              focus: '텍스트 필드에 포커스를 줍니다.',
            },
          },
          NuiOptionTemplate: {
            summary:
              '컴포넌트 안의 <code>ng-template</code>에 지정하면 각 행을 직접 그릴 수 있습니다. 컨텍스트에는 옵션과 해당 행이 들어 있습니다.',
            members: {},
          },
          NuiOptionText: {
            summary:
              '옵션의 레이블(일치한 글자 표시 포함), 설명, 경로를 그립니다. 직접 만든 행에서 사용합니다.',
            members: { nuiOptionText: '템플릿 컨텍스트에서 가져온 행.' },
          },
        },
        keyboard: [
          ['아래쪽 / 위쪽 화살표', '목록을 연 다음, 옵션 사이를 이동합니다.'],
          ['Page Down / Page Up', '옵션을 열 개씩 이동합니다.'],
          ['Enter', '활성 옵션을 선택합니다.'],
          ['Alt + 아래쪽 또는 위쪽 화살표', '목록을 열거나 닫습니다.'],
          ['Esc', '목록을 닫고, 그다음에는 텍스트를 지웁니다. 지우기가 가능하면 값을 지웁니다.'],
          ['Backspace', '필드가 비어 있으면 마지막 칩을 제거합니다.'],
          [
            '왼쪽 화살표',
            '텍스트 맨 앞에서 칩으로 이동합니다(오른쪽에서 왼쪽으로 쓰는 언어에서는 오른쪽 화살표). 칩에서는 Backspace 또는 Delete로 칩을 제거합니다.',
          ],
        ],
        notes: [
          '텍스트 필드는 <code>aria-autocomplete="list"</code>, <code>aria-expanded</code>, <code>aria-controls</code>를 가진 <code>combobox</code>입니다. 포커스는 필드에 머물며, <code>aria-activedescendant</code>가 활성 옵션을 가리킵니다.',
          '칩은 이름이 있는 목록이며, 각 제거 버튼에는 ‘Remove Italy’처럼 해당 칩에 맞는 이름이 붙습니다.',
          '‘No matches’와 로딩 행은 상태 메시지이므로 스크린 리더가 안내합니다.',
          '중국어나 일본어 입력처럼 입력기 조합을 확정하는 키는 입력기가 처리하도록 둡니다.',
        ],
      },
      command: {
        name: '명령 팔레트',
        title: 'Angular 명령 팔레트 컴포넌트',
        summary: '앱의 모든 명령을 키 입력 한 번으로 불러옵니다.',
        description:
          '접근성을 갖춘 Angular 명령 팔레트입니다. 어디서나 ⌘K로 열고, 중첩 페이지까지 찾는 퍼지 검색, 그룹, 플랫폼별 표기에 맞춘 단축키 표시를 지원합니다.',
        apiDescription:
          'Needless UI 명령 팔레트의 API 레퍼런스입니다. commands, hotkey, bindShortcuts, loop를 지원하는 nui-command-palette와 NuiCommand 형식을 설명합니다.',
        a11yDescription:
          'Needless UI 명령 팔레트의 키보드 동작과 접근성을 다룹니다. 검색 콤보박스가 있는 모달 다이얼로그, aria-activedescendant, 페이지 탐색을 설명합니다.',
        overview: [
          '명령 팔레트는 앱의 명령을 검색하는 필드를 모달 다이얼로그에 담은 것입니다. 어디서나 ⌘K(Windows와 Linux에서는 Ctrl+K)로 열 수 있습니다. 명령을 선택하면 팔레트가 닫힌 뒤 그 명령이 실행됩니다.',
          '명령에는 그룹, 설명, 키워드, 단축키를 지정할 수 있으며, 단축키는 플랫폼별 기호로 표시됩니다. <code>children</code>이 있는 명령은 하위 명령이 담긴 페이지를 열며, 최상위에서 검색해도 페이지 안의 명령까지 찾습니다.',
        ],
        examples: {
          palette: {
            title: '명령과 페이지',
            text: '그룹, 단축키, 비활성화된 명령, 두 개의 페이지가 있습니다. <code>(run)</code>으로 무엇이 실행되었는지 알 수 있으며, 명령 자체의 <code>run</code>도 동작합니다.',
          },
          people: {
            title: '사용자 지정 행',
            text: '<code>nuiOptionTemplate</code>이 각 행을 그리고, <code>nuiOptionText</code>가 일치 부분 표시를 유지합니다. <code>[hotkey]="null"</code>로 ⌘K는 위쪽 팔레트에 맡깁니다.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: '명령을 검색하는 필드가 있는 모달 다이얼로그입니다.',
            members: {
              commands: '명령 목록. <code>NuiCommand</code> 객체로 지정합니다.',
              open: '팔레트가 열려 있는지 여부.',
              hotkey:
                '어디서나 팔레트를 열고 닫는 단축키이며, 없애려면 <code>null</code>을 지정합니다. <code>mod</code>는 Apple 기기에서는 ⌘, 그 외에서는 Ctrl입니다.',
              bindShortcuts: '페이지 어디서든 각 명령의 단축키로도 명령을 실행합니다.',
              loop: '마지막 명령에서 아래로 가면 첫 번째로, 첫 번째 명령에서 위로 가면 마지막으로 이동합니다.',
              filtering: '입력하는 대로 필터링합니다. 서버에서 명령을 필터링할 때는 끕니다.',
              loading: '결과를 기다리는 동안 로딩 행을 표시합니다.',
              hints: '하단에 사용할 수 있는 키를 표시합니다.',
              virtual:
                '보이는 행만 렌더링합니다: 항상, 안 함, 또는 200행을 넘으면 켜지는 <code>auto</code>.',
              label: '다이얼로그와 검색 필드의 접근 가능한 이름.',
              placeholder: '빈 검색 필드에 표시되는 텍스트.',
              run: '실행되는 각 명령을 내보냅니다.',
              queryChange: '입력되는 텍스트를 내보냅니다. 서버 검색에 사용합니다.',
              show: '팔레트를 엽니다.',
              hide: '팔레트를 닫습니다.',
              toggle: '팔레트를 열거나 닫습니다.',
              back: '이전 페이지로 돌아갑니다.',
            },
          },
          NuiCommand: {
            summary: '명령 하나, 또는 명령이 담긴 페이지입니다.',
            members: {
              label: '표시되고 검색되는 텍스트.',
              description: '레이블 아래의 보조 텍스트.',
              group: '같은 그룹의 명령은 그 제목 아래에 나열됩니다.',
              keywords: '검색에서 일치시킬 추가 단어. 예: 동의어.',
              shortcut: '함께 표시되는 키. 예: <code>mod+shift+p</code>.',
              disabled: '표시되지만 실행할 수 없습니다.',
              children: '한 단계 아래의 명령. 이 명령을 선택하면 페이지로 열립니다.',
              run: '선택되면 팔레트가 닫힌 뒤 실행됩니다.',
              id: '자유롭게 쓰는 값. 예를 들어 <code>(run)</code>에서 명령을 구분할 때 사용합니다.',
            },
          },
        },
        keyboard: [
          ['⌘K 또는 Ctrl+K', '팔레트를 열거나 닫습니다.'],
          ['아래쪽 / 위쪽 화살표', '명령 사이를 이동하며, 끝에 닿으면 반대쪽 끝으로 넘어갑니다.'],
          ['Page Down / Page Up', '명령을 열 개씩 이동합니다.'],
          ['Enter', '활성 명령을 실행하거나 해당 페이지를 엽니다.'],
          ['Esc', '한 페이지 뒤로 갑니다. 최상위에서는 팔레트를 닫습니다.'],
          ['Backspace', '페이지 안에서 필드가 비어 있으면 뒤로 갑니다.'],
        ],
        notes: [
          '네이티브 모달 <code>&lt;dialog&gt;</code>입니다. 뒤쪽 페이지는 상호작용할 수 없게 되고, 포커스는 안에 머물며, 닫으면 포커스가 원래 위치로 돌아갑니다.',
          '검색 필드는 <code>aria-activedescendant</code>로 활성 명령을 가리키는 <code>combobox</code>입니다. 페이지 안에서는 해당 페이지의 이름을 가집니다.',
          '단축키는 각 옵션 안의 텍스트이므로 스크린 리더가 읽어 줍니다. 하단의 키 힌트는 보조 기술에서 숨겨집니다.',
          'Ctrl, Alt, ⌘가 없는 단축키는 필드에 입력하는 동안에는 실행되지 않습니다.',
        ],
      },
      popover: {
        name: '팝오버',
        title: 'Angular 팝오버·호버 카드 컴포넌트',
        summary: '버튼 옆에 뜨는 패널과, 마우스를 올리면 나타나는 리치 툴팁입니다.',
        description:
          '네이티브 Popover API로 만든 접근성을 갖춘 Angular 팝오버와 호버 카드입니다. 뒤집히고 따라가는 위치 지정, 화살표, 바깥 클릭으로 닫기, 호버 지연을 지원합니다.',
        apiDescription:
          'Needless UI 팝오버의 API 레퍼런스입니다. side, align, offset, arrow를 지원하는 nuiPopover와 nuiHovercard, 그리고 각각의 트리거 디렉티브를 설명합니다.',
        a11yDescription:
          'Needless UI 팝오버와 호버 카드의 키보드 동작과 접근성을 다룹니다. dialog와 tooltip 역할, 포커스 복귀, Esc 키, WCAG 1.4.13을 설명합니다.',
        overview: [
          '팝오버는 버튼 옆에 열리는 작은 패널로, 필터, 짧은 폼, 색상 선택기처럼 상호작용하는 요소에 사용합니다. 네이티브 <code>popover="auto"</code>이므로 Esc 키나 바깥 클릭으로 브라우저가 닫고 포커스를 되돌리며, 탭 순서에서 트리거 바로 뒤에 둡니다.',
          '호버 카드는 리치 툴팁입니다. 잠시 마우스를 올려 두면 열리고, 키보드로 포커스하면 바로 열리며, 트리거를 설명합니다. 포인터가 카드 위로 옮겨 가도 열린 상태를 유지하므로 텍스트를 읽고 선택할 수 있습니다.',
          '둘 다 공간이 없으면 반대쪽으로 뒤집히고, 화면 안에 머물며, 페이지가 스크롤되면 트리거를 따라갑니다.',
        ],
        examples: {
          filters: {
            title: '필터',
            text: '안에 폼이 있는 팝오버입니다. <code>arrow</code>는 트리거를 가리키는 화살표를 달고, <code>hide()</code>는 코드에서 팝오버를 닫습니다.',
          },
          profile: {
            title: '호버 카드',
            text: '이름에 마우스를 올리거나 Tab 키로 이동해 보십시오. 카드가 링크를 설명하므로, 스크린 리더는 이름 다음에 카드를 읽어 줍니다.',
          },
          sides: {
            title: '방향과 등장 효과',
            text: '<code>side</code>와 <code>align</code>은 열리는 위치를 정하며, <code>start</code>와 <code>end</code>는 쓰기 방향을 따릅니다. <code>enter</code>와 <code>motion</code>은 등장하는 방식을 정합니다.',
          },
        },
        api: {
          NuiPopover: {
            summary: '자신을 연 요소 옆에 배치되는 네이티브 팝오버입니다.',
            members: {
              side: '트리거의 어느 쪽에 열리는지. 공간이 없으면 뒤집힙니다.',
              align: '그 쪽을 따라 트리거와 어떻게 정렬할지.',
              offset: '트리거와 패널 사이의 간격(픽셀 단위).',
              arrow: '트리거를 가리키는 화살표를 표시합니다.',
              openChange: '열리거나 닫힐 때 내보냅니다.',
              show: '원하는 요소 옆에 엽니다.',
              hide: '닫습니다.',
            },
          },
          NuiPopoverTrigger: {
            summary: '네이티브 <code>popovertarget</code>으로 팝오버를 열고 닫는 버튼입니다.',
            members: { nuiPopoverTrigger: '열 팝오버.' },
          },
          NuiHovercard: {
            summary: '트리거를 설명하는 리치 툴팁입니다.',
            members: {
              side: '트리거의 어느 쪽에 열리는지. 공간이 없으면 뒤집힙니다.',
              align: '그 쪽을 따라 트리거와 어떻게 정렬할지.',
              offset: '트리거와 카드 사이의 간격(픽셀 단위).',
              arrow: '트리거를 가리키는 화살표를 표시합니다.',
              openDelay:
                '열리기 전까지 마우스를 올려 두어야 하는 시간(밀리초). 키보드 포커스로는 바로 열립니다.',
              closeDelay: '포인터가 벗어난 뒤 닫히기까지의 시간(밀리초).',
              openChange: '열리거나 닫힐 때 내보냅니다.',
              show: '원하는 요소 옆에 엽니다.',
              hide: '닫습니다.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              '마우스를 올리거나 키보드로 포커스하면 호버 카드를 표시하고, 호버 카드를 이 요소의 설명으로 지정합니다.',
            members: { nuiHovercardTrigger: '표시할 호버 카드.' },
          },
        },
        keyboard: [
          ['트리거에서 Enter 또는 Space', '팝오버를 열거나 닫습니다.'],
          ['Tab', '열린 팝오버 안으로 이동합니다. 팝오버는 트리거 바로 다음에 옵니다.'],
          ['Esc', '팝오버를 닫고 포커스를 트리거로 되돌리거나, 호버 카드를 숨깁니다.'],
        ],
        notes: [
          '팝오버는 비모달 <code>dialog</code>입니다. <code>aria-label</code> 또는 <code>aria-labelledby</code>로 이름을 지정합니다. 트리거에는 <code>aria-haspopup</code>과 브라우저가 관리하는 <code>aria-expanded</code>가 지정됩니다.',
          '호버 카드는 <code>tooltip</code>이자 트리거의 <code>aria-describedby</code>이므로, 그 텍스트는 트리거와 함께 읽힙니다. 컨트롤은 넣지 말고, 컨트롤이 필요하면 팝오버를 사용합니다.',
          '호버 카드는 WCAG 1.4.13을 충족합니다. Esc 키로 포커스를 옮기지 않고 숨길 수 있고, 포인터를 카드 위로 옮길 수 있으며, 마우스를 올려 두거나 포커스가 있는 동안에는 계속 표시됩니다.',
        ],
      },
      select: {
        name: '셀렉트',
        title: 'Angular 셀렉트 컴포넌트',
        summary: '짧은 목록이든 아주 긴 목록이든, 옵션을 하나 또는 여러 개 고를 수 있습니다.',
        description:
          '접근성을 갖춘 Angular 셀렉트입니다. 단일·다중 선택, 그룹, 트리, 입력으로 이동, 모두 선택, 길이에 관계없이 목록을 다루는 가상 스크롤을 지원합니다.',
        apiDescription:
          'Needless UI 셀렉트의 API 레퍼런스입니다. value, values, multiple, selectAll, virtual을 지원하는 nui-select, NuiOption 형식, 사용자 지정 행을 설명합니다.',
        a11yDescription:
          'Needless UI 셀렉트의 키보드 동작과 접근성을 다룹니다. 리스트박스나 트리를 여는 선택 전용 콤보박스, aria-activedescendant, 문자 검색, 트리 키를 설명합니다.',
        overview: [
          '셀렉트는 옵션 목록을 여는 버튼입니다. <code>NuiOption</code> 배열인 <code>options</code>를 전달하고 <code>[(value)]</code>를 바인딩하거나, <code>multiple</code>과 함께 <code>[(values)]</code>를 바인딩합니다. Signal Forms, 반응형 폼, <code>ngModel</code>과도 함께 동작합니다.',
          '옵션에는 <code>group</code>, <code>description</code>, <code>keywords</code>를 지정할 수 있으며, <code>children</code>이 있으면 목록이 트리가 됩니다. 200행을 넘으면 보이는 행만 렌더링하므로, 옵션이 10만 개여도 10개일 때만큼 빠르게 열립니다.',
          '입력해서 필터링하려면 <a href="/components/combobox">콤보박스</a>를 사용합니다.',
        ],
        examples: {
          countries: {
            title: '그룹',
            text: '<code>group</code>이 있는 옵션은 해당 제목 아래에 나열됩니다. 글자를 입력하면 그 글자로 시작하는 다음 옵션으로 이동합니다.',
          },
          toppings: {
            title: '여러 개 한꺼번에',
            text: '<code>multiple</code>은 목록을 열어 둔 채로 <code>[(values)]</code>를 바인딩합니다. <code>selectAll</code>은 모든 옵션을 선택하거나 해제하는 버튼을 추가합니다. 비활성화된 옵션은 선택할 수 없습니다.',
          },
          folders: {
            title: '트리',
            text: '<code>children</code>이 있는 옵션은 트리를 이룹니다. 목록을 열면 선택된 옵션이 있는 폴더가 펼쳐진 상태로 표시됩니다.',
          },
          zones: {
            title: '긴 목록',
            text: '모든 시간대를 지역별로 나열합니다. 200행을 넘으면 보이는 행만 렌더링되며, 활성 옵션은 스크린 리더를 위해 계속 렌더링됩니다. 터치스크린에서는 목록 위의 검색 필드가 글자를 입력해 이동하는 기능을 대신합니다.',
          },
        },
        api: {
          NuiSelect: {
            summary: '옵션 목록을 여는 버튼입니다.',
            members: {
              options: '옵션 목록. <code>NuiOption</code> 객체로 지정합니다.',
              value: '선택된 값 또는 <code>null</code>. 폼과도 함께 사용할 수 있습니다.',
              values: '<code>multiple</code>일 때 선택된 값 목록.',
              multiple:
                '여러 옵션을 선택할 수 있게 합니다. 고르는 동안 목록이 열린 상태로 유지됩니다.',
              selectAll:
                '<code>multiple</code>과 함께 사용하면 모든 옵션을 선택하거나 해제하는 버튼을 추가합니다.',
              placeholder: '아무것도 선택되지 않았을 때 표시되는 텍스트.',
              label:
                '<code>&lt;label&gt;</code>로 버튼의 이름을 지정하지 않을 때 사용하는 접근 가능한 이름.',
              triggerId: '<code>&lt;label for&gt;</code>에 사용할 버튼의 id.',
              disabled: '셀렉트를 비활성화합니다.',
              compareWith: '두 값이 같은 옵션인지 판단합니다. 값이 객체일 때 사용합니다.',
              virtual:
                '보이는 행만 렌더링합니다: 항상, 안 함, 또는 200행을 넘으면 켜지는 <code>auto</code>.',
              openChange: '목록이 열리거나 닫힐 때 내보냅니다.',
              show: '목록을 엽니다.',
              hide: '목록을 닫습니다.',
              focus: '버튼에 포커스를 줍니다.',
              search:
                '옵션 위에 검색 필드를 표시합니다: 항상, 안 함, 또는 터치스크린에서 옵션이 20개를 넘는 목록에 표시하는 <code>auto</code>. 터치스크린에는 글자를 입력해 이동할 키가 없기 때문입니다.',
            },
          },
          NuiOption: {
            summary: '옵션 하나입니다. 셀렉트, 콤보박스, 명령 팔레트 모두 이 형식을 받습니다.',
            members: {
              value: '선택하면 설정되는 값. 어떤 타입이든 됩니다.',
              label: '표시되고 검색되는 텍스트.',
              description: '레이블 아래의 보조 텍스트.',
              group: '같은 그룹의 옵션은 그 제목 아래에 순서대로 나열됩니다.',
              keywords: '검색에서 일치시킬 추가 단어. 예: 동의어나 코드.',
              disabled: '표시되지만 선택할 수 없습니다.',
              children: '한 단계 아래의 옵션으로, 목록을 트리로 만듭니다.',
            },
          },
          NuiOptionTemplate: {
            summary:
              '컴포넌트 안의 <code>ng-template</code>에 지정하면 각 행을 직접 그릴 수 있습니다. 컨텍스트에는 옵션과 해당 행이 들어 있습니다.',
            members: {},
          },
          NuiOptionText: {
            summary:
              '옵션의 레이블(일치한 글자 표시 포함), 설명, 경로를 그립니다. 직접 만든 행에서 사용합니다.',
            members: { nuiOptionText: '템플릿 컨텍스트에서 가져온 행.' },
          },
        },
        keyboard: [
          ['아래쪽 / 위쪽 화살표', '목록을 연 다음, 옵션 사이를 이동합니다.'],
          ['Home / End', '첫 번째 또는 마지막 옵션으로 이동합니다.'],
          ['Page Down / Page Up', '옵션을 열 개씩 이동합니다.'],
          ['Enter 또는 Space', '목록을 열거나 활성 옵션을 선택합니다.'],
          ['문자 키', '입력한 문자로 시작하는 다음 옵션으로 이동합니다.'],
          [
            '오른쪽 / 왼쪽 화살표',
            '트리에서 옵션을 펼치거나 첫 번째 자식으로 이동하고, 옵션을 접거나 부모로 이동합니다. 오른쪽에서 왼쪽으로 쓰는 언어에서는 좌우가 반대입니다.',
          ],
          ['Alt + 위쪽 화살표', '활성 옵션을 선택하고 목록을 닫습니다.'],
          ['Tab', '단일 선택일 때 활성 옵션을 선택하고 다음으로 이동합니다.'],
          ['Esc', '선택하지 않고 목록을 닫습니다.'],
        ],
        notes: [
          '버튼은 <code>aria-expanded</code>와 <code>aria-controls</code>를 가진 선택 전용 <code>combobox</code>입니다. 포커스는 버튼에 머물며, <code>aria-activedescendant</code>가 활성 옵션을 가리킵니다.',
          '목록은 <code>listbox</code>이거나, <code>aria-level</code>과 <code>aria-expanded</code>를 가진 <code>tree</code>입니다. 일부 행만 렌더링될 때도 <code>aria-setsize</code>와 <code>aria-posinset</code>은 올바른 값을 유지합니다.',
          '활성 옵션은 단색으로 채워지며, 강제 색상 모드에서는 윤곽선이 표시됩니다.',
          '<code>triggerId</code>를 가리키는 <code>&lt;label for&gt;</code> 또는 <code>label</code>로 이름을 지정합니다.',
        ],
      },
      grid: {
        name: '데이터 그리드',
        title: 'Angular 데이터 그리드 컴포넌트',
        summary: '행이 아무리 많아도 정렬, 필터링, 선택, 편집, 스크롤을 할 수 있습니다.',
        description:
          '네이티브 table 요소로 만든 접근성을 갖춘 Angular 데이터 그리드입니다. 다중 열 정렬, 필터, 페이지네이션 또는 가상 스크롤, 선택, 편집, 열 이동을 지원합니다.',
        apiDescription:
          'Needless UI 데이터 그리드의 API 레퍼런스입니다. nui-grid의 입력과 양방향 바인딩, NuiGridColumn 정의, 사용자 지정 셀 템플릿을 설명합니다.',
        a11yDescription:
          'Needless UI 데이터 그리드의 키보드 동작과 접근성을 다룹니다. grid 역할을 가진 네이티브 표, 한 번만 멈추는 탭 순서, 화살표 키, 안내를 설명합니다.',
        overview: [
          '데이터 그리드는 정렬, 필터링, 페이지 나누기, 편집을 지원하는 네이티브 표입니다. <code>columns</code>를 정의하고 <code>rows</code>를 전달하면 각 셀이 타입에 따라 로케일에 맞는 서식으로 표시됩니다. 숫자, 통화, 날짜, 예/아니요, <code>enum</code> 값의 레이블을 지원합니다.',
          '상태는 바인딩하고, 저장하고, 서버로 보낼 수 있는 모델에 담깁니다. 모델은 <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, 그리고 사용자가 정한 열 너비, 순서, 고정, 숨김을 담는 <code>columnState</code>입니다. 페이지를 나누지 않으면 보이는 행만 렌더링하므로, 10만 행도 10행처럼 스크롤됩니다.',
          '모든 셀에 키보드로 이동할 수 있으며, 각 열의 패널에서는 그 열을 정렬, 필터링, 고정, 이동하거나 너비를 맞추거나 숨길 수 있습니다.',
          '행을 중첩할 수도 있습니다. <code>groupBy</code>는 행을 열 기준으로 그룹화하고, 각 열의 <code>aggregate</code>를 그룹 행과 <code>totals</code> 합계 행에 표시합니다. <code>children</code>은 트리 데이터를 보여 주고, <code>nuiGridDetail</code> 템플릿은 행 아래에 열립니다. 그룹화하거나 중첩하면 표는 <code>treegrid</code>가 됩니다.',
        ],
        examples: {
          orders: {
            title: '검색, 정렬, 페이지 나누기',
            text: '입력하면 모든 열을 검색합니다. 헤더를 클릭하면 정렬하고, Shift 키를 누른 채 클릭하면 두 번째 열을 정렬에 추가합니다. <code>nuiGridCell</code>이 상태를 그리고, <code>exportCsv()</code>는 표시된 내용을 내보냅니다.',
          },
          selection: {
            title: '선택',
            text: '<code>selection="multiple"</code>은 체크박스를 추가하고 선택된 행의 키를 바인딩합니다. Shift 키를 누른 채 클릭하면 범위를 선택하고, 헤더의 체크박스는 필터 조건에 맞는 모든 행을 선택합니다.',
          },
          editing: {
            title: '편집',
            text: '셀을 더블클릭하거나, Enter 키를 누르거나, 그냥 입력해 보십시오. <code>validate</code>는 메시지와 함께 편집기를 열어 둡니다. 확정된 편집은 <code>rows</code>를 갱신하고 <code>cellEdit</code>를 내보냅니다.',
          },
          big: {
            title: '10만 행',
            text: '페이지를 나누지 않으면 보이는 행만 렌더링합니다. 고정된 열은 가장자리에 머물며, <code>columnState</code>는 사용자가 만든 레이아웃을 유지합니다.',
          },
          server: {
            title: '서버 데이터',
            text: '<code>server</code> 모드에서는 그리드가 받은 행을 그대로 표시하고, 변경될 때마다 <code>queryChange</code>로 알립니다. 데이터를 가져오는 동안에는 <code>loading</code>을 설정합니다.',
          },
          groups: {
            title: '그룹과 합계',
            text: '열 하나나 둘로 그룹화합니다. 그룹 행은 주문 수를 세고 금액의 합계와 평균을 보여 주며, <code>totals</code>는 모든 행에 대한 같은 집계를 한 행으로 더합니다. 왼쪽 화살표로 그룹을 닫습니다.',
          },
          tree: {
            title: '트리 데이터',
            text: '<code>children</code>은 각 폴더에 그 안의 파일을 달아 줍니다. 행은 오른쪽 화살표나 토글로 열리고, <code>[(expanded)]</code>는 어떤 행이 열려 있는지 유지합니다. 검색하면 일치하는 항목 위의 폴더가 열린 채로 남습니다.',
          },
          details: {
            title: '행 세부 정보',
            text: '<code>nuiGridDetail</code> 템플릿은 토글 열에서 연 주문 아래에 그 주문의 품목을 보여 주고, <code>[(details)]</code>는 어떤 행이 열려 있는지 유지합니다.',
          },
          live: {
            title: '실시간 데이터, 내보내기, 인쇄',
            text: '가격이 2초마다 바뀌고, <code>flash</code>는 바뀐 셀을 잠깐 반짝여 보여 줍니다. <code>exportXlsx()</code>는 진짜 스프레드시트를 내려받고, <code>print()</code>는 모든 행을 인쇄하며, <code>layout="auto"</code>는 좁은 화면에서 행을 카드로 보여 줍니다.',
          },
          cards: {
            title: '휴대폰의 카드 보기',
            text: '<code>layout="list"</code>는 행을 카드로 보여 주고, <code>auto</code>는 너비가 36rem 미만일 때 그렇게 합니다. 카드에는 헤더 행이 없으므로 툴바로 정렬하고 모두 선택하며, 툴바의 ‘Filter’ 버튼은 고른 열의 패널을 엽니다. <code>toolbar</code>로 표 위에 툴바를 보여 줄 수도 있고, 아예 뺄 수도 있습니다.',
          },
        },
        api: {
          NuiGrid: {
            summary: '네이티브 표로 만든 데이터 그리드입니다.',
            members: {
              rows: '데이터. 편집하면 행이 교체되므로 <code>[(rows)]</code>로 바인딩합니다.',
              columns: '열 목록. <code>NuiGridColumn</code> 객체로 지정합니다.',
              rowId: '선택과 추적에 사용하는 행의 키.',
              label: '그리드의 접근 가능한 이름.',
              selection: '행을 선택할 수 있는지, 몇 개까지 선택할 수 있는지.',
              selected: '선택된 행의 키 목록.',
              sort: '정렬. <code>{ column, direction }</code> 객체로 지정하며, 앞에 있는 것이 먼저 적용됩니다.',
              filters: '열 id별 필터. 연산자와 값으로 지정합니다.',
              search: '한 행에 모두 나타나야 하는 단어.',
              pageSize: '페이지당 행 수. 0이면 스크롤되는 하나의 목록이 됩니다.',
              page: '표시할 페이지. 0부터 셉니다.',
              pageSizes: '페이저에 표시되는 선택지.',
              virtual:
                '보이는 행만 렌더링합니다: 항상, 안 함, 또는 페이지를 나누지 않을 때 100행을 넘으면 켜지는 <code>auto</code>.',
              height: '그리드의 높이를 제한하는 CSS 길이. 그리드 안에서 스크롤됩니다.',
              columnState: '저장하고 복원할 수 있는 각 열의 너비, 순서, 고정, 표시 여부.',
              mode: '<code>server</code>는 받은 행을 그대로 표시하고, 정렬, 필터링, 페이지 나누기는 직접 처리하도록 맡깁니다.',
              total: '서버에 있는 행의 수.',
              loading: '진행 표시줄을 보여 주고, 행이 없는 동안에는 자리 표시자 행을 보여 줍니다.',
              locale: '숫자와 날짜의 서식을 지정하고 입력된 숫자를 읽는 데 사용하는 로케일.',
              labels: '그리드가 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              rowActivate: 'Enter 키나 더블클릭으로 연 행을 내보냅니다.',
              cellEdit: '확정된 편집을 하나씩 내보냅니다.',
              queryChange: '정렬, 필터, 검색, 페이지가 바뀔 때마다 이를 내보냅니다.',
              exportCsv: '필터링하고 정렬한 행을 보이는 열만 CSV로 반환합니다.',
              focusCell: '셀에 포커스를 줍니다. 행 <code>-1</code>은 헤더입니다.',
              clearFilters: '모든 필터와 검색을 지웁니다.',
              'groupBy, collapsed': '행을 그룹화할 열(바깥쪽부터)과 닫힌 그룹의 키.',
              children: '행의 자식 행. 지정하면 그리드가 트리 데이터를 보여 줍니다.',
              'expanded, details': '트리 데이터에서 열린 행의 키와, 세부 정보가 열린 행의 키.',
              'totals, flash':
                '필터링된 모든 행을 집계한 행, 그리고 텍스트가 바뀔 때 반짝이는 셀. 셀 반짝임은 계속 유지되는 <code>rowId</code>가 있는 행에서 동작합니다.',
              layout:
                '<code>list</code>는 행을 카드로 보여 주고, <code>auto</code>는 좁은 화면에서만 그렇게 합니다.',
              toolbar:
                '행을 정렬, 필터링하고 모두 선택하는 툴바: 항상, 안 함, 또는 카드일 때 나타나는 <code>auto</code>.',
              'exportXlsx, print':
                '각각 필터링하고 정렬한 행을 스프레드시트로 내보내고, 모든 행을 인쇄합니다.',
            },
          },
          NuiGridColumn: {
            summary: '열 하나입니다. <code>id</code>와 <code>header</code>만 필수입니다.',
            members: {
              id: '고유한 값. 정렬, 필터, 열 상태에서 키로 쓰입니다.',
              header: '헤더 텍스트.',
              value: '행의 키 또는 행을 받는 함수. 기본값은 <code>row[id]</code>입니다.',
              type: '맞춤, 정렬, 필터, 편집기를 결정합니다.',
              format: '숫자와 날짜에 쓰는 <code>Intl</code> 옵션, 또는 텍스트를 만드는 함수.',
              options: '<code>enum</code> 열의 선택지. <code>NuiOption</code> 객체로 지정합니다.',
              'width, minWidth, maxWidth': '픽셀 단위.',
              flex: '남는 공간을 다른 <code>flex</code> 열과 나눠 가집니다.',
              align: '기본값은 타입에 따라 다르며, 숫자와 날짜는 끝에 맞춥니다.',
              'pinned, hidden': '열의 초기 고정 상태와 표시 여부.',
              'sortable, filterable, resizable, reorderable, hideable':
                '각각 <code>false</code>로 끌 수 있습니다.',
              compare: '사용자 지정 정렬.',
              'editable, validate': '셀을 편집할 수 있는지 여부와, 값이 올바르지 않을 때의 메시지.',
              set: '편집된 행을 만듭니다. 기본값은 새 값을 넣은 복사본입니다.',
              aggregate:
                '그룹 행과 합계 행에 표시할 값: 합계, 평균, 최솟값, 최댓값, 개수 또는 함수.',
            },
          },
          NuiGridCell: {
            summary: '열의 셀을 그립니다. 컨텍스트에는 행, 그 값, 텍스트가 들어 있습니다.',
            members: { nuiGridCell: '열의 id.' },
          },
          NuiGridHeader: {
            summary: '열의 헤더를 그립니다.',
            members: { nuiGridHeader: '열의 id.' },
          },
          NuiGridEmpty: {
            summary:
              '행이 없을 때 표시되는 내용입니다. 컨텍스트로 필터 때문에 행이 숨겨졌는지 알 수 있습니다.',
            members: {},
          },
          NuiGridDetail: {
            summary:
              '행의 세부 정보로, 열면 그 행 아래에 표시됩니다. 컨텍스트에는 행이 들어 있습니다.',
            members: {},
          },
        },
        keyboard: [
          ['화살표 키', '한 셀 이동합니다. 오른쪽에서 왼쪽으로 쓰는 언어에서는 좌우가 반대입니다.'],
          [
            'Home / End',
            '행(Ctrl과 함께 누르면 그리드 전체)의 첫 번째 또는 마지막 셀로 이동합니다.',
          ],
          ['Page Down / Page Up', '한 화면 분량의 행만큼 이동합니다.'],
          [
            '헤더에서 Enter 또는 Space',
            '그 열로 정렬합니다. Shift와 함께 누르면 정렬에 추가합니다.',
          ],
          ['헤더에서 Alt + 아래쪽 화살표', '열 패널을 엽니다.'],
          [
            '헤더에서 Alt + 왼쪽 또는 오른쪽 화살표',
            '열을 좁히거나 넓힙니다. Shift와 함께 누르면 열을 이동합니다.',
          ],
          ['셀에서 Enter', '셀을 편집합니다. 편집할 수 없으면 행을 엽니다.'],
          ['F2 또는 문자 입력', '셀을 편집합니다.'],
          [
            '편집 중 Enter, Esc, Tab',
            'Enter는 확정, Esc는 취소, Tab은 확정 후 다음으로 이동합니다.',
          ],
          [
            'Space',
            '행을 선택합니다. Shift와 함께 누르면 마지막으로 선택한 행부터 범위를 선택합니다.',
          ],
          ['Ctrl + A', '모든 행을 선택합니다.'],
          [
            '그룹에서 오른쪽 / 왼쪽 화살표',
            '그룹을 열거나 닫습니다. 자식 행이 있는 행의 첫 번째 셀에서도 마찬가지입니다.',
          ],
          ['그룹에서 Enter', '그룹을 열거나 닫습니다. Space는 그 그룹의 행을 선택합니다.'],
          ['세부 정보 토글에서 Enter', '행의 세부 정보를 보여 주거나 숨깁니다.'],
        ],
        notes: [
          '<code>role="grid"</code>를 가진 네이티브 <code>&lt;table&gt;</code>이며, <code>label</code>로 이름을 지정합니다. 헤더에는 <code>aria-sort</code>가, 선택할 수 있는 행에는 <code>aria-selected</code>가 지정됩니다.',
          '그리드는 탭 순서에서 한 번만 멈춥니다. 포커스는 로빙 <code>tabindex</code>로 셀 사이를 이동하므로, 스크린 리더는 각 셀을 행 헤더, 열 헤더와 함께 읽어 줍니다.',
          '행을 페이지로 나누거나 가상화해도 <code>aria-rowcount</code>, <code>aria-rowindex</code>, <code>aria-colindex</code>는 올바른 값을 유지합니다.',
          '정렬, 필터링, 페이지 이동, 편집 오류는 읽고 있던 내용을 끊지 않는 상태 영역에서 안내됩니다.',
          '그룹화되거나 중첩된 행이 있으면 표는 <code>treegrid</code>가 됩니다. 행에는 <code>aria-level</code>, <code>aria-setsize</code>, <code>aria-posinset</code>이 지정되고, 열 수 있는 행에는 <code>aria-expanded</code>도 지정됩니다. 집계 값은 ‘Sum: 475’처럼 종류와 함께 읽힙니다.',
          '카드에는 헤더 행이 없으므로 툴바가 먼저 나옵니다. 툴바는 ‘Sort and filter’라는 이름이 붙은 그룹이며, 정렬할 열을 고르는 레이블이 있는 셀렉트, 정렬 방향을 정하는 토글 버튼, 다중 선택일 때 ‘Select all rows’ 체크박스, 열 패널을 여는 ‘Filter’ 버튼이 들어 있습니다. 열 패널에서는 셀렉트로 열을 고릅니다. 탭 순서에서 그리드가 멈추는 곳은 첫 번째 카드로 옮겨 갑니다.',
        ],
      },
      chat: {
        name: '채팅',
        title: 'Angular AI 채팅 컴포넌트',
        summary: '모델과 대화하는 UI로, 스트리밍 응답, 도구, 버전, 파일을 지원합니다.',
        description:
          'AI 어시스턴트를 위한 접근성을 갖춘 Angular 채팅입니다. Markdown 응답 스트리밍, 추론, 도구 호출, 출처, 버전으로 남는 재시도, 파일을 지원합니다.',
        apiDescription:
          'Needless UI 채팅의 API 레퍼런스입니다. nui-chat 입력, 응답을 스트리밍하는 NuiChatSession, 메시지, 도구 템플릿, 스트림 리더를 설명합니다.',
        a11yDescription:
          'Needless UI 채팅의 키보드 동작과 접근성을 다룹니다. 이름이 있는 메시지 피드, Page Up과 Page Down, 완료 후 안내되는 응답을 설명합니다.',
        overview: [
          '채팅은 사용자와 모델 사이의 모든 것을 담당합니다. <code>respond</code> 함수로 <code>NuiChatSession</code>을 만들면 나머지는 <code>&lt;nui-chat&gt;</code>이 처리합니다. 응답을 Markdown으로 스트리밍하고, 사용자가 위로 스크롤하기 전까지 응답을 따라 내려가며, 응답이 도착하는 동안에는 전송 버튼을 중지 버튼으로 바꿉니다.',
          '<code>respond</code>는 텍스트, 프로미스, <code>async function*</code>, Observable 중 무엇이든 반환할 수 있어 어떤 API에도 맞출 수 있습니다. 응답에는 텍스트 외에도 모델의 추론, 도구 호출(직접 만든 템플릿으로 그림), 참고한 출처를 담을 수 있습니다. <code>nuiEventStream</code>은 대부분의 모델 API가 스트리밍하는 서버 전송 이벤트를 읽습니다.',
          '잃어버리는 것은 없습니다. 다시 시도한 응답이나 수정한 질문은 이전 것 옆에 새 버전으로 남고, 대화는 모든 분기를 보존합니다. 스크린 리더는 각 응답을 한 단어씩 읽지 않고, 완료된 뒤에 읽어 줍니다.',
        ],
        examples: {
          assistant: {
            title: '어시스턴트',
            text: '추천 프롬프트로 대화를 시작합니다. 응답은 Markdown으로 스트리밍되며, 중지하거나 다시 시도하거나 평가할 수 있고, 질문을 수정할 수도 있습니다. <code>attach</code>는 선택하거나 붙여 넣거나 끌어다 놓은 파일을 받습니다.',
          },
          tools: {
            title: '추론, 도구, 출처',
            text: '델타가 모델의 추론, 도구 호출, 출처를 응답에 추가합니다. <code>nuiChatTool</code>은 날씨 도구를 카드로 그리고, 다른 도구는 입력과 출력을 담은 채 접혀 있습니다.',
          },
          server: {
            title: '서버에서 스트리밍',
            text: '<code>nuiEventStream</code>은 OpenAI 스타일의 이벤트 스트림을 읽고, <code>NuiChatError</code>는 그 메시지를 표시합니다. <code>all()</code>은 버전까지 포함해 대화 전체를 저장합니다.',
          },
        },
        api: {
          NuiChat: {
            summary: '대화와 입력창을 한데 묶은 컴포넌트입니다.',
            members: {
              session: '표시할 대화.',
              assistant: '어시스턴트의 이름. 스크린 리더가 읽는 제목에 쓰입니다.',
              headingLevel:
                '스크린 리더에만 보이는 각 메시지 제목의 수준. 응답 안의 제목은 한 단계 더 깊어집니다.',
              announce: '응답이 완료되면 스크린 리더가 읽어 줄 내용: 전체, 짧은 알림, 또는 없음.',
              images:
                '응답 안의 이미지를 표시합니다. 끄면 이미지의 텍스트가 이미지로 가는 링크가 됩니다.',
              value: '작성 중인 텍스트.',
              placeholder: '비어 있는 필드에 표시되는 힌트.',
              suggestions: '클릭 한 번으로 보낼 수 있는 프롬프트. 첫 메시지 전까지 표시됩니다.',
              sendOn:
                'Enter로 보낼지, Ctrl 또는 ⌘ + Enter로 보낼지 여부. <code>auto</code>는 물리 키보드가 있으면 Enter로 보내고, 터치스크린에서는 Return 키로 줄을 바꾸고 버튼으로 보냅니다.',
              disabled: '입력창에서 메시지를 보내지 못하게 합니다.',
              attach: '파일을 받습니다: 선택, 붙여넣기, 끌어다 놓기.',
              accept: '받을 파일 종류. <code>&lt;input type="file"&gt;</code>과 같은 형식입니다.',
              maxFiles: '메시지 하나에 첨부할 수 있는 파일 수.',
              maxSize: '받을 수 있는 가장 큰 파일 크기(바이트).',
              labels: '채팅이 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              rated:
                '사용자가 평가한 응답을 평가와 함께 내보내며, 평가를 취소하면 <code>null</code>을 내보냅니다.',
              focus: '텍스트 필드에 포커스를 줍니다.',
              scrollToEnd: '최신 메시지로 스크롤하고 계속 따라갑니다.',
            },
          },
          NuiChatSession: {
            summary:
              'DOM이 없는 대화 자체입니다. 컴포넌트 안에서 <code>respond</code>, <code>messages</code>, <code>id</code> 옵션으로 만듭니다.',
            members: {
              respond:
                '직접 구현합니다. <code>request.messages</code>에 대한 응답을 작성하고, <code>request.signal</code>이 중단되면 멈춥니다.',
              messages: '화면에 보이는 대화.',
              all: '모든 버전의 모든 메시지. 저장했다가 <code>messages</code>로 다시 전달합니다.',
              busy: '응답을 받는 중인지 여부.',
              send: '메시지를 보내고 응답을 요청합니다.',
              stop: '응답을 중지하고, 그때까지 작성된 내용은 유지합니다.',
              retry: '다시 요청합니다. 새 응답은 이전 응답 옆에 버전으로 남습니다.',
              edit: '사용자 메시지 중 하나의 새 버전을 보냅니다.',
              versions: '메시지의 모든 버전. 오래된 것부터 나열됩니다.',
              show: '대화를 이 버전으로 전환합니다.',
              rate: '응답에 대한 사용자의 평가를 기록합니다.',
              'remove, load, clear':
                '메시지와 그 뒤의 내용을 제거하거나, 대화를 교체하거나, 처음부터 다시 시작합니다.',
            },
          },
          NuiChatMessage: {
            summary: '메시지 하나입니다. <code>parent</code>가 같은 메시지는 서로의 버전입니다.',
            members: {
              'id, parent': '메시지의 키와, 이 메시지가 뒤따르는 메시지의 키.',
              role: '작성자.',
              text: '어시스턴트는 Markdown, 사용자는 일반 텍스트.',
              status: '대기 중부터 완료까지, 응답의 진행 상태.',
              reasoning: '모델이 답하기 전에 한 생각.',
              tools: '호출한 도구와 그 상태, 입력, 출력.',
              sources: '참고한 페이지.',
              attachments: '함께 보낸 파일.',
              rating: '사용자의 평가.',
              data: '모델 이름처럼 함께 보관할 그 밖의 데이터.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              '날씨 카드처럼 도구 호출을 그립니다. 컨텍스트에는 호출과 그 메시지가 들어 있습니다.',
            members: {
              nuiChatTool:
                '도구 이름. 지정하지 않으면 다른 템플릿이 지정하지 않은 모든 호출을 그립니다.',
            },
          },
          NuiChatThread: {
            summary:
              '직접 만든 레이아웃을 위한, 대화만 있는 컴포넌트입니다. <code>nui-chat</code>의 입력 중 대화에 관한 것을 받습니다.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              '입력창만 있는 컴포넌트입니다. <code>nui-chat</code>의 입력 중 메시지 작성에 관한 것을 받습니다.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              '<code>nuiEventStream</code>이 이벤트마다 내보내는 값입니다. <code>nuiTextStream</code>은 일반 텍스트를, <code>nuiJsonStream</code>은 JSON Lines를 읽으며, 셋 모두 <code>fetch</code> 응답을 받습니다.',
            members: {
              event: '이벤트 이름.',
              data: '이벤트의 data 줄을 이어 붙인 것.',
              id: '스트림이 마지막으로 보낸 id.',
            },
          },
          NuiChatError: {
            summary:
              '<code>respond</code>에서 던지면 그 메시지가 표시됩니다. 다른 오류는 일반적인 메시지로 표시되므로 내부 정보가 새어 나가지 않습니다.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down / Page Up', '다음 또는 이전 메시지로 이동합니다.'],
          ['Ctrl + End / Ctrl + Home', '대화를 벗어나 뒤쪽 또는 앞쪽 요소로 이동합니다.'],
          ['Enter', '보냅니다. Shift와 함께 누르면 줄을 바꿉니다.'],
          ['Esc', '메시지 편집을 멈춥니다.'],
        ],
        notes: [
          '대화는 <code>article</code>로 이루어진 <code>feed</code>입니다. 각 메시지는 ‘You said’처럼 스크린 리더에만 보이는 제목으로 이름이 지정되며, <code>aria-posinset</code>과 <code>aria-setsize</code>를 가집니다.',
          '작성 중인 응답은 <code>aria-busy</code> 상태입니다. 완료되면 전체가 한 번에 안내되고, 실패는 즉시 안내됩니다.',
          '모든 아이콘 버튼에는 이름과 툴팁이 있습니다. 평가는 토글 버튼이고, 버전 전환기는 ‘Version 2 of 3’ 같은 이름이 붙은 그룹입니다.',
          '추론과 도구 호출은 네이티브 접기/펼치기 요소입니다. 파일을 제거하면 포커스가 텍스트 필드로 돌아갑니다.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Angular Markdown 렌더러 컴포넌트',
        summary: '스트리밍 중에도 Markdown을 안전하게 렌더링합니다.',
        description:
          'AI 응답을 위한 안전한 Angular Markdown 렌더러입니다. GitHub 표, 작업 목록, 코드 블록을 실제 요소로 그리며, 스트리밍 중에도 매끄럽게 표시합니다.',
        apiDescription:
          'Needless UI Markdown 렌더러의 API 레퍼런스입니다. nui-markdown 입력, 코드 블록 템플릿, 그 밑에서 동작하는 파서를 설명합니다.',
        a11yDescription:
          'Needless UI Markdown 렌더러의 접근성을 다룹니다. 실제 제목, 목록, 표, 이름이 있는 스크롤 영역, 결과를 알려 주는 복사 버튼을 설명합니다.',
        overview: [
          'Markdown 렌더러는 모델이 쓰는 것 같은 텍스트를 실제 요소로 바꿉니다. 제목, 목록과 작업 목록, 인용문, 표, 복사 버튼이 달린 코드 블록, 링크를 지원합니다. 텍스트를 트리로 파싱한 뒤 템플릿으로 그리므로, 원시 HTML은 텍스트로 남고 HTML로 삽입되는 것은 전혀 없습니다.',
          '<code>streaming</code>을 지정하면 쓰다 만 텍스트도 완성되었을 때처럼 읽힙니다. 닫히지 않은 코드 펜스는 이미 코드 블록이고, 짝 없는 <code>**</code>는 짝을 기다리며, 캐럿이 마지막 단어를 따라갑니다. 바뀌지 않은 블록은 DOM을 그대로 유지합니다.',
          '링크는 웹, 메일, 전화 주소에서만 동작하며, 이미지는 <code>images</code>를 켜기 전까지 링크로 남습니다.',
        ],
        examples: {
          document: {
            title: '문서',
            text: '제목은 <code>headingLevel</code>부터 시작하므로 페이지 자체의 제목 아래에 알맞게 들어갑니다. 넓은 표와 코드는 각자의 영역 안에서 스크롤됩니다.',
          },
          streaming: {
            title: '스트리밍',
            text: '같은 텍스트를 몇 글자씩 보여 줍니다. 기호가 잠깐 나타났다 사라지는 일이 없으며, 마지막 블록만 다시 렌더링됩니다.',
          },
          highlight: {
            title: '코드 하이라이팅',
            text: '<code>nuiMarkdownCode</code>는 직접 만든 템플릿으로 코드 블록을 그리며, 여기서는 작은 하이라이터를 사용합니다. 템플릿은 코드와 그 언어를 받습니다.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Markdown을 요소로 렌더링합니다.',
            members: {
              text: 'Markdown 텍스트.',
              streaming: '텍스트가 아직 도착하는 중인지 여부.',
              headingLevel: '<code>#</code> 제목의 수준. 더 깊은 제목은 최대 6까지 이어집니다.',
              images:
                '이미지를 표시합니다. 이미지는 추적에 쓰일 수 있어서, 끄면 이미지의 텍스트가 링크가 됩니다.',
              labels: '복사 버튼의 텍스트 등. 번역할 때 사용합니다.',
              codeTemplate:
                '다른 곳에서 가져온 코드 블록 템플릿. 예를 들어 이 렌더러를 포함한 채팅의 템플릿입니다.',
            },
          },
          NuiMarkdownCode: {
            summary:
              '코드 블록을 그립니다. 컨텍스트에는 코드, <code>lang</code>, 그리고 블록이 아직 도착하는 중이면 <code>open</code>이 들어 있습니다.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: '파서와 그 헬퍼 함수로, 컴포넌트 없이 사용할 수 있습니다.',
            members: {
              nuiParseMarkdown: '컴포넌트가 그리는 블록과 인라인 요소의 트리.',
              nuiMarkdownToText:
                '블록마다 한 줄씩인 일반 텍스트. 안내하거나 미리 보여 줄 때 사용합니다.',
              nuiSafeUrl: '링크가 웹, 메일, 전화 주소로 연결되는지 여부.',
            },
          },
        },
        keyboard: [
          ['Tab', '링크, 복사 버튼, 그리고 스크롤할 수 있도록 넓은 표와 코드로 이동합니다.'],
        ],
        notes: [
          '제목, 목록, 인용문, <code>th</code> 헤더와 <code>scope</code>를 갖춘 표, 코드는 모두 실제 요소입니다.',
          '넓은 표와 코드 블록은 포커스를 받을 수 있는 영역 안에서 스크롤됩니다. 표의 영역에는 헤더를 바탕으로 이름이 붙습니다.',
          '작업 목록의 체크박스는 각 작업의 완료 여부를 알려 줍니다. 복사 버튼의 이름은 ‘Copy code’이며, 상태 메시지로 ‘Copied’를 알려 줍니다.',
          '스트리밍 캐럿은 스크린 리더에서 숨겨지며, 동작 줄이기 설정에서는 움직이지 않습니다.',
        ],
      },
      calendar: {
        name: '캘린더',
        title: 'Angular 캘린더 컴포넌트',
        summary: '날짜 하나나 기간, 여러 날짜를 키보드로도 선택할 수 있습니다.',
        description:
          '접근성을 갖춘 Angular 캘린더입니다. 날짜 하나, 기간, 여러 날짜를 선택할 수 있고 최소·최대 날짜, 선택할 수 없는 날, 여러 달 표시, 주 번호를 지원합니다.',
        apiDescription:
          'Needless UI 캘린더의 API 레퍼런스입니다. nui-calendar의 선택 방식, min, max, unavailable로 막는 날짜, 여러 달 표시, 레이블을 설명합니다.',
        a11yDescription:
          'Needless UI 캘린더의 키보드 동작과 접근성을 다룹니다. 이름이 붙은 날짜 그리드, 일·주 단위로 움직이는 화살표 키, 월 단위의 Page Up·Page Down을 설명합니다.',
        overview: [
          '캘린더에서는 날짜 하나, 기간, 또는 여러 날짜를 선택합니다. 값은 <code>2026-09-25</code> 같은 단순한 ISO 날짜이고 날짜를 어긋나게 할 시간대 정보가 없으므로, 서버나 <code>&lt;input type="date"&gt;</code>에 그대로 전달할 수 있습니다.',
          '한 주는 로케일의 첫 요일부터 시작하며, 요일과 월의 이름, 숫자는 로케일의 언어를 따릅니다. <code>min</code>, <code>max</code>, <code>unavailable</code>은 선택할 수 없는 날을 정하고, <code>months</code>는 여러 달을 나란히 보여 줍니다. 먼 날짜로 갈 때는 제목을 눌러 월 보기와 연도 보기로 전환할 수 있습니다.',
          'WAI-ARIA 날짜 선택기 패턴처럼 모든 날짜에 키보드로 이동할 수 있으며, 각 날짜에는 전체 날짜가 이름으로 붙습니다.',
        ],
        examples: {
          delivery: {
            title: '배송일',
            text: '오늘 이전, <code>max</code> 이후, <code>unavailable</code>로 제외된 날은 선택할 수 없지만, 키보드로는 그 날들을 지나서 이동할 수 있습니다.',
          },
          stay: {
            title: '기간',
            text: '<code>selection="range"</code>를 지정하면 첫 번째 선택으로 기간이 시작되고, 두 번째 선택 전까지 기간을 나타내는 띠가 포인터를 따라갑니다. <code>months="2"</code>와 <code>weekNumbers</code>로 한 번에 더 많은 정보를 볼 수 있습니다.',
          },
          'days-off': {
            title: '여러 날짜',
            text: '<code>selection="multiple"</code>를 지정하면 선택할 때마다 날짜가 추가되거나 제거됩니다. <code>firstDay</code>는 로케일과 다른 요일에서 한 주를 시작합니다.',
          },
        },
        api: {
          NuiCalendar: {
            summary: '날짜를 선택하는 캘린더입니다.',
            members: {
              selection: '선택할 수 있는 날짜 수.',
              value: '선택된 날짜.',
              values: '선택된 날짜들. 날짜순으로 정렬됩니다.',
              range: '선택된 기간. 양 끝 날짜를 포함합니다.',
              month: '표시된 달. 여러 달을 표시할 때는 첫 번째 달입니다.',
              view: '일, 월, 연도 보기 중 하나.',
              'min, max': '선택할 수 있는 첫날과 마지막 날.',
              unavailable: '공휴일처럼 그 밖에 선택할 수 없는 날을 지정합니다.',
              months: '나란히 표시할 달의 수.',
              weekNumbers: 'ISO 주 번호를 표시합니다.',
              firstDay: '한 주의 첫 요일로, 1은 월요일입니다. 기본값은 로케일을 따릅니다.',
              locale: '이름과 숫자의 서식을 정하고 한 주의 첫 요일을 고르는 로케일.',
              labels: '캘린더가 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              picked:
                '선택 결과를 내보냅니다. 날짜는 선택할 때마다, 기간은 완성되었을 때 내보냅니다.',
              focusDate: '키보드 포커스를 특정 날짜로 옮기고, 그 날짜가 있는 달을 표시합니다.',
            },
          },
          NuiDateRange: {
            summary: '날짜 기간.',
            members: { 'start, end': '첫날과 마지막 날. 둘 다 기간에 포함됩니다.' },
          },
        },
        keyboard: [
          [
            '왼쪽 / 오른쪽 화살표',
            '전날 또는 다음 날로 이동합니다. 오른쪽에서 왼쪽으로 쓰는 언어에서는 좌우가 반대입니다.',
          ],
          ['위쪽 / 아래쪽 화살표', '한 주 전 또는 한 주 뒤로 이동합니다.'],
          ['Home / End', '그 주의 첫날 또는 마지막 날로 이동합니다.'],
          [
            'Page Up / Page Down',
            '이전 달 또는 다음 달로 이동합니다. Shift와 함께 누르면 한 해씩 이동합니다.',
          ],
          [
            'Enter 또는 Space',
            '날짜를 선택하거나, 월 또는 연도 보기에서 해당 월이나 연도로 들어갑니다.',
          ],
          ['Esc', '기간의 첫 번째 선택을 취소하거나, 원래 보기로 돌아갑니다.'],
        ],
        notes: [
          '각 달은 제목으로 이름이 지정된 <code>grid</code>이며, 요일의 전체 이름은 <code>abbr</code>에 들어 있습니다.',
          '모든 날짜는 전체 날짜로 이름이 지정되며, ‘Today’, ‘unavailable’, 기간의 시작과 끝 여부가 덧붙습니다. <code>aria-selected</code>는 선택된 날짜를, <code>aria-disabled</code>는 선택할 수 없는 날짜를 표시합니다.',
          '그리드는 로빙 <code>tabindex</code>를 사용하므로 탭 순서에서 한 번만 멈춥니다. 이전 버튼과 다음 버튼은 새로 표시된 달을 안내합니다.',
        ],
      },
      'date-picker': {
        name: '날짜 선택기',
        title: 'Angular 날짜·시간 선택기 컴포넌트',
        summary: '날짜나 시간을 세그먼트별로 입력하거나, 캘린더에서 선택합니다.',
        description:
          '접근성을 갖춘 Angular 날짜·시간·기간 선택기입니다. 로케일 순서대로 입력하는 세그먼트, 팝오버 캘린더, 프리셋, 폼 연동을 지원합니다.',
        apiDescription:
          'Needless UI 날짜 선택기의 API 레퍼런스입니다. nui-date-field, nui-time-field, nui-date-picker, nui-date-range-picker와 프리셋을 설명합니다.',
        a11yDescription:
          'Needless UI 날짜 선택기의 키보드 동작과 접근성을 다룹니다. 날짜의 각 부분을 맡는 스핀 버튼과 다이얼로그 속 캘린더를 설명합니다.',
        overview: [
          '날짜와 시간 필드는 세그먼트별로 입력합니다. 일, 월, 연도는 로케일의 순서를 따르고, 이어지는 시와 분은 로케일의 12시간제 또는 24시간제를 따릅니다. 각 세그먼트는 스핀 버튼이어서, 숫자를 입력하면 알아서 다음 세그먼트로 넘어가고 화살표 키로 값을 올리거나 내릴 수도 있습니다. 날짜 전체를 붙여 넣으면 모든 세그먼트가 채워집니다.',
          '선택기는 팝오버 캘린더를 더해 날짜 하나, 또는 프리셋이 있는 기간을 고를 수 있게 합니다. 값은 <code>2026-09-25</code>나 <code>2026-09-25T09:30</code> 같은 단순한 ISO 문자열이며, 모든 필드가 Signal Forms, 반응형 폼, <code>ngModel</code>과 함께 동작합니다.',
          '이 사이트의 예제는 페이지의 언어를 따릅니다. 언어를 바꾸면 순서, 구분 기호, 숫자가 바뀌는 것을 볼 수 있습니다.',
        ],
        examples: {
          fields: {
            title: '날짜와 시간 필드',
            text: '숫자를 입력하거나 화살표 키를 사용합니다. Backspace를 한 번 더 누르면 이전 세그먼트로 돌아갑니다. <code>minuteStep</code>은 화살표 키로 분을 얼마나 움직일지 정합니다.',
          },
          pickers: {
            title: '날짜 선택기',
            text: '버튼을 누르면 선택된 날짜가 보이는 캘린더가 열리고, 날짜를 고르면 닫힙니다. <code>granularity="minute"</code>을 지정하면 시간도 입력할 수 있으며, 캘린더는 날짜만 바꿉니다.',
          },
          range: {
            title: '기간',
            text: '필드 두 개와 두 달짜리 캘린더입니다. <code>nuiDateRangePresets()</code>는 자주 쓰는 기간을 추가하며, 양 끝이 순서대로 설정될 때까지 값은 null입니다.',
          },
        },
        api: {
          NuiDateField: {
            summary: '세그먼트별로 입력하는 날짜, 또는 날짜와 시간입니다.',
            members: {
              value: '값. 모든 세그먼트가 채워질 때까지는 null입니다.',
              granularity: '일에서 멈출지, 시, 분, 초까지 이어 갈지 정합니다.',
              'min, max': '가장 이른 값과 가장 늦은 값. 범위를 벗어나면 필드가 유효하지 않습니다.',
              placeholder: '빈 세그먼트에서 화살표 키를 누를 때 시작하는 값.',
              hourCycle: '12시간제 또는 24시간제. 기본값은 로케일을 따릅니다.',
              minuteStep: '화살표 키로 분을 움직이는 간격.',
              'disabled, readonly': '값을 바꿀 수 없게 합니다.',
              locale: '순서, 구분 기호, 숫자, 시간제를 정하는 로케일.',
              labels: '필드가 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              invalid: '값이 <code>min</code>과 <code>max</code> 범위를 벗어났는지 여부.',
              focus: '첫 번째 빈 세그먼트에 포커스를 줍니다.',
            },
          },
          NuiTimeField: {
            summary: '세그먼트별로 입력하는 시각입니다. 날짜 필드와 같은 입력을 받습니다.',
            members: { granularity: '시, 분, 초 중 어디에서 멈출지 정합니다.' },
          },
          NuiDatePicker: {
            summary:
              '팝오버 캘린더가 달린 날짜 필드입니다. 날짜 필드의 입력과 함께 다음 입력을 받습니다.',
            members: {
              unavailable: '캘린더에서 선택할 수 없는 날짜.',
              'firstDay, weekNumbers': '캘린더에 전달됩니다.',
              labels: '필드, 버튼, 캘린더의 텍스트.',
              show: '캘린더를 엽니다.',
            },
          },
          NuiDateRangePicker: {
            summary:
              '기간 캘린더가 달린 날짜 필드 두 개입니다. 날짜 선택기의 입력과 함께 다음 입력을 받습니다.',
            members: {
              value: '기간. 양 끝이 순서대로 설정될 때까지는 null입니다.',
              presets: '한 번의 클릭으로 고를 수 있는, 이름이 붙은 기간.',
              months: '캘린더에 나란히 표시할 달의 수. 좁은 화면에서는 한 달만 표시합니다.',
            },
          },
          NuiDateRangePreset: {
            summary: '이름이 붙은 기간입니다. 고정된 기간이거나, 선택할 때 만들어지는 기간입니다.',
            members: {
              label: '기간의 이름.',
              range: '기간, 또는 기간을 만드는 함수.',
            },
          },
        },
        keyboard: [
          [
            '숫자 키',
            '세그먼트에 입력합니다. 뒤에 올 수 있는 숫자가 없으면 다음 세그먼트로 넘어갑니다.',
          ],
          [
            '위쪽 / 아래쪽 화살표',
            '세그먼트 값을 올리거나 내립니다. Page Up / Page Down은 더 크게 움직입니다.',
          ],
          ['왼쪽 / 오른쪽 화살표, Tab', '이전 또는 다음 세그먼트로 이동합니다.'],
          ['Backspace', '세그먼트를 지우고, 다시 누르면 이전 세그먼트로 돌아갑니다.'],
          ['A / P', '오전(AM) 또는 오후(PM)로 설정합니다.'],
        ],
        notes: [
          '필드는 <code>group</code>입니다. <code>aria-label</code> 또는 <code>aria-labelledby</code>로 이름을 지정합니다. 각 세그먼트는 맡은 부분의 이름이 붙은 <code>spinbutton</code>이며, 월은 월 이름으로, 빈 세그먼트는 ‘Empty’로 읽어 줍니다.',
          '세그먼트는 편집 가능한 텍스트이므로, 터치 키보드가 숫자 자판으로 열립니다.',
          '선택기의 버튼 이름은 ‘Choose a date’이고, 팝오버는 <code>dialog</code>입니다. 날짜를 선택하면 포커스가 버튼으로 돌아갑니다.',
          '안에 있는 캘린더는 <a href="/components/calendar">캘린더</a>와 똑같이 동작합니다.',
        ],
      },
      scheduler: {
        name: '스케줄러',
        title: 'Angular 스케줄러 컴포넌트',
        summary: '일정을 월, 주, 일, 일정 목록으로 보여 주고, 드래그로 원하는 자리에 옮깁니다.',
        description:
          '접근성을 갖춘 Angular 스케줄러입니다. 월·주·일·일정 목록 보기, 겹치는 일정 나란히 표시, 드래그로 이동과 길이 조절, 완전한 키보드 조작을 지원합니다.',
        apiDescription:
          'Needless UI 스케줄러의 API 레퍼런스입니다. nui-scheduler의 보기, 일정, 편집과 선택, 출력, 일정 템플릿을 설명합니다.',
        a11yDescription:
          'Needless UI 스케줄러의 키보드 동작과 접근성을 다룹니다. 날짜와 시간의 그리드, 이름이 붙은 일정, 모든 드래그를 대신하는 키보드 이동을 설명합니다.',
        overview: [
          '스케줄러는 일정을 월, 주, 일, 또는 일정 목록으로 보여 줍니다. 일정은 ISO 시각을 담은 단순한 데이터입니다. 시간이 겹치는 일정은 너비를 나눠 쓰고, 자정을 넘기는 일정은 두 날짜에 모두 표시되며, 종일 일정은 위쪽을 가로지르는 막대로 표시됩니다.',
          '스케줄러는 일정을 직접 바꾸지 않습니다. 일정이나 그 아래쪽 가장자리를 드래그하면 <code>eventChange</code>가 새 시간을 알려 주고, 그리드에서 시간을 선택하면 <code>slotSelect</code>가 그 시간을 알려 줍니다. <code>rangeChange</code>는 어떤 날짜가 표시되는지 알려 주므로, 그 날짜의 일정을 불러올 수 있습니다.',
          '포인터로 하는 모든 동작을 키보드로도 할 수 있습니다. 그리드는 탭 순서에서 한 번만 멈추고, 화살표 키로 날짜와 시간 사이를 이동하며, Alt와 화살표 키로 일정을 옮깁니다.',
        ],
        examples: {
          planner: {
            title: '한 주 계획',
            text: '<code>editable</code>과 <code>selectable</code>을 지정하면 일정을 드래그해서 옮기고, 아래쪽 가장자리를 드래그해서 길이를 조절하고, 빈 시간을 드래그해서 새 일정을 추가할 수 있습니다. 이 예제는 출력을 받아 일정을 갱신합니다.',
          },
          month: {
            title: '월 보기와 일정 목록',
            text: '여러 날에 걸친 일정은 막대로 표시되고, 일정이 많은 날에는 몇 개가 더 있는지 표시됩니다. <code>views</code>는 월 보기와 앞으로 <code>agendaDays</code>일 동안의 일정 목록만 제공합니다.',
          },
          rooms: {
            title: '회의실의 하루',
            text: '<code>nuiSchedulerEvent</code>가 각 예약을 회의실, 주최자와 함께 그립니다. <code>slotMinutes="15"</code>를 지정하면 행이 더 촘촘해집니다.',
          },
        },
        api: {
          NuiScheduler: {
            summary: '일정을 월, 주, 일, 일정 목록으로 보여 주는 스케줄러입니다.',
            members: {
              events: '표시할 일정.',
              view: '표시된 보기.',
              views: '사용자가 전환할 수 있는 보기.',
              date: '표시된 날짜. 키보드 포커스가 있는 날짜이기도 합니다.',
              slotMinutes: '시간 그리드 한 행의 분 단위 길이. 일정이 움직이는 간격이기도 합니다.',
              scrollHour: '시간 그리드가 처음 열릴 때 보여 주는 시각.',
              agendaDays: '일정 목록이 앞으로 보여 줄 날짜 수.',
              editable: '포인터와 키보드로 일정을 옮기고 길이를 조절할 수 있게 합니다.',
              selectable: '그리드에서 시간을 선택해 일정을 만들 수 있게 합니다.',
              firstDay: '한 주의 첫 요일로, 1은 월요일입니다. 기본값은 로케일을 따릅니다.',
              headingLevel: '제목의 수준. 일정 목록의 날짜 제목은 한 단계 더 깊어집니다.',
              locale: '날짜와 시간의 서식을 정하는 로케일.',
              labels: '스케줄러가 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              eventClick: '클릭하거나 Enter로 연 일정을 내보냅니다.',
              eventChange: '일정을 옮기거나 길이를 조절한 뒤 새 시간을 내보냅니다.',
              slotSelect: '그리드에서 선택한 시간을 내보냅니다.',
              rangeChange: '표시되는 첫날과 마지막 날이 바뀌면 이를 내보냅니다.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              '일정 하나입니다. 시간이 정해진 일정은 종료 시각을 포함하지 않고, 종일 일정의 종료일은 그 마지막 날입니다.',
            members: {
              'id, title': '일정의 키와 표시할 내용.',
              'start, end': '날짜와 시간. 종일 일정은 날짜만 씁니다.',
              allDay: '기본값은 <code>start</code>에 시간이 없는지에 따라 정해집니다.',
              tone: '일정의 색상.',
              editable: '스케줄러 설정과 관계없이 이 일정을 옮길 수 있는지 여부.',
              data: '일정과 함께 보관할 그 밖의 데이터.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: '일정을 그립니다. 컨텍스트에는 일정과 텍스트로 된 시간이 들어 있습니다.',
            members: {},
          },
        },
        keyboard: [
          [
            '화살표 키',
            '날짜 단위와 시간 칸 단위로 이동합니다. 오른쪽에서 왼쪽으로 쓰는 언어에서는 좌우가 반대입니다.',
          ],
          ['Page Up / Page Down', '이전 또는 다음 달, 주, 일로 이동합니다.'],
          ['Shift + 화살표 키', '선택한 시간 범위를 넓힙니다.'],
          ['셀에서 Enter 또는 Space', '셀 안의 일정으로 들어가거나, 그 시간을 선택합니다.'],
          ['일정에서 위쪽 / 아래쪽 화살표', '셀 안의 이전 또는 다음 일정으로 이동합니다.'],
          ['일정에서 Alt + 화살표 키', '일정을 시간 칸 하나 또는 하루만큼 옮깁니다.'],
          ['Alt + Shift + 위쪽 또는 아래쪽 화살표', '일정의 길이를 줄이거나 늘립니다.'],
          ['Esc', '셀로 돌아가거나, 선택한 시간을 해제하거나, 드래그를 취소합니다.'],
        ],
        notes: [
          '월, 주, 일 보기는 제목으로 이름이 지정된 <code>grid</code>입니다. 날짜가 열 헤더, 시간이 행 헤더이므로 각 셀은 날짜, 시간과 함께 읽힙니다.',
          '모든 일정은 ‘Standup, Friday, September 25, 9:00 – 9:30 AM’처럼 제목, 날짜, 시간으로 이름이 지정된 버튼입니다. 일정을 옮기거나 길이를 조절하면 새 시간을 안내합니다.',
          '모든 드래그에는 같은 일을 하는 키보드 조작이 있으므로, 포인터가 없어도 됩니다.',
          '보기는 그룹으로 묶인 토글 버튼이며, 다른 주나 달로 이동하면 그 제목을 안내합니다.',
        ],
      },
      splitter: {
        name: '스플리터',
        title: 'Angular 스플리터·크기 조절 패널 컴포넌트',
        summary: '나란히 놓거나 위아래로 쌓은 패널의 크기를 핸들로 조절합니다.',
        description:
          '접근성을 갖춘 Angular 스플리터입니다. 가로나 세로로 배치한 패널의 크기 조절, 크기 제한, 접을 수 있는 패널, 크기 저장, 완전한 키보드 조작을 지원합니다.',
        apiDescription:
          'Needless UI 스플리터의 API 레퍼런스입니다. nuiSplitter의 방향과 크기, 패널의 크기 제한과 접기, 패널 사이의 핸들을 설명합니다.',
        a11yDescription:
          'Needless UI 스플리터의 키보드 동작과 접근성을 다룹니다. 값을 가진 포커스 가능한 창 분할기 핸들, 화살표 키, Home, End, Enter를 설명합니다.',
        overview: [
          '스플리터는 공간을 여러 패널에 나누고, 이웃한 두 패널 사이마다 핸들을 둡니다. 핸들을 드래그하거나, 핸들에 포커스를 두고 화살표 키를 사용합니다. 크기는 합이 100이 되는 백분율이며, <code>[(sizes)]</code>로 바인딩합니다.',
          '각 패널의 초기 크기, 최소 크기, 최대 크기는 픽셀, rem, 백분율로 지정할 수 있습니다. <code>collapsible</code> 패널은 최소 크기의 절반보다 작게 드래그하거나 핸들에서 Enter 키를 누르면 접히며, 다시 펼치면 접기 전의 크기로 돌아옵니다.',
          '<code>storageKey</code>를 지정하면 크기가 <code>localStorage</code>에 저장되므로, 사용자는 다음에 방문했을 때도 떠날 때의 레이아웃을 그대로 보게 됩니다.',
        ],
        examples: {
          editor: {
            title: '편집기',
            text: '파일, 코드, 미리 보기로 이루어져 있습니다. 파일과 미리 보기는 접을 수 있고, 코드는 너비의 30% 이상을 유지하며, 크기는 저장됩니다.',
          },
          stacked: {
            title: '위아래로 쌓은 패널',
            text: '<code>orientation="vertical"</code>은 패널을 위아래로 쌓고, <code>[(sizes)]</code>는 바뀌는 크기를 그때그때 읽어 옵니다.',
          },
        },
        api: {
          NuiSplitter: {
            summary: '사이사이에 핸들이 있는 패널들입니다.',
            members: {
              orientation: '나란히 놓을지, 위아래로 쌓을지.',
              sizes: '각 패널이 차지하는 비율(백분율). 패널 순서대로 나열합니다.',
              storageKey: '이 키로 크기를 <code>localStorage</code>에 저장합니다.',
              step: '화살표 키로 핸들을 움직이는 거리(백분율). Shift와 함께 누르면 두 배로 움직입니다.',
              move: '특정 패널 뒤의 경계를 지정한 백분율만큼 옮깁니다.',
            },
          },
          NuiSplitterPane: {
            summary: '패널입니다. 크기는 픽셀, rem, 백분율로 지정합니다.',
            members: {
              defaultSize: '복원할 크기가 없을 때 처음 표시되는 크기.',
              min: '가장 작은 크기.',
              max: '가장 큰 크기.',
              collapsible:
                '패널을 접을 수 있게 합니다. 최소 크기의 절반보다 작게 드래그하거나 Enter 키를 누르면 접힙니다.',
              collapsedSize: '접혔을 때의 크기. 예: 아이콘만 있는 좁은 막대.',
              label: '이 패널의 크기를 조절하는 핸들의 이름.',
            },
          },
          NuiSplitterHandle: {
            summary: '두 패널 사이의 핸들입니다.',
            members: {
              label: '핸들의 이름. 패널의 레이블로 이름이 정해지지 않을 때 사용합니다.',
              disabled: '핸들이 움직이지 않습니다.',
              toggle: '옆의 패널을 접거나 다시 펼칩니다.',
            },
          },
        },
        keyboard: [
          [
            '왼쪽 / 오른쪽 화살표',
            '나란히 놓인 패널 사이의 핸들을 움직입니다. 오른쪽에서 왼쪽으로 쓰는 언어에서는 좌우가 반대입니다.',
          ],
          ['위쪽 / 아래쪽 화살표', '위아래로 쌓인 패널 사이의 핸들을 움직입니다.'],
          ['Shift + 화살표 키', '두 배 더 멀리 움직입니다.'],
          ['Home / End', '핸들 앞의 패널을 가장 작은 크기 또는 가장 큰 크기로 만듭니다.'],
          ['Enter', '접을 수 있는 패널을 접거나 다시 펼칩니다.'],
        ],
        notes: [
          '각 핸들은 WAI-ARIA 창 분할기(window splitter) 패턴처럼 포커스를 받을 수 있는 <code>separator</code>입니다. 값은 핸들 앞에 있는 패널의 크기로, 그 패널의 크기 제한 범위 안에 있으며, <code>aria-controls</code>가 그 패널을 가리킵니다.',
          '핸들의 이름은 패널의 <code>label</code>로 지정합니다. ‘Files’ 같은 이름이 있으면 스크린 리더가 그 핸들이 무엇의 크기를 조절하는지 알려 줍니다.',
          '핸들을 더블클릭해도 패널이 접힙니다. 드래그하는 동안에는 포인터를 캡처하므로, 빠르게 움직여도 핸들을 놓치지 않습니다.',
        ],
      },
      tour: {
        name: '가이드 투어',
        title: 'Angular 가이드 투어 컴포넌트',
        summary: '단계마다 설명하는 대상 옆에 카드를 띄우고, 주변 페이지를 어둡게 합니다.',
        description:
          '접근성을 갖춘 Angular 제품 투어입니다. 대상 옆에 뜨는 단계별 카드, 대상을 비추는 스포트라이트, 직접 조작할 수 있는 단계, 되돌아오는 포커스를 지원합니다.',
        apiDescription:
          'Needless UI 가이드 투어의 API 레퍼런스입니다. nui-tour의 단계, open과 step 바인딩, 출력, 각 단계의 대상, 위치, 훅을 설명합니다.',
        a11yDescription:
          'Needless UI 가이드 투어의 키보드 동작과 접근성을 다룹니다. 제목으로 이름이 붙는 다이얼로그 카드, 포커스 유지와 복원, 투어를 끝내는 Esc 키를 설명합니다.',
        overview: [
          '가이드 투어는 사용자에게 페이지를 한 단계씩 안내합니다. 각 단계는 요소를 가리키며 그 옆에 카드를 표시하고, 주변 페이지를 어둡게 합니다. 대상이 없는 단계는 가운데에 표시됩니다.',
          '단계는 단순한 데이터입니다. 대상(셀렉터, 요소, 또는 요소를 찾는 함수), 제목, 그리고 텍스트나 템플릿으로 된 내용으로 이루어집니다. <code>beforeShow</code>가 먼저 실행되므로 단계가 대상이 들어 있는 패널을 열 수 있고, 화면 밖에 있는 대상은 보이도록 스크롤합니다.',
          '모든 카드는 다이얼로그입니다. 기본적으로 모달이지만, 단계가 <code>interactive</code>이면 사용자가 카드가 가리키는 요소를 사용할 수 있습니다. Esc 키를 누르면 투어가 끝나고, 포커스는 원래 있던 곳으로 돌아갑니다.',
        ],
        examples: {
          basics: {
            title: '처음 둘러보기',
            text: '네 단계로 이루어지며, 첫 단계에는 대상이 없습니다. <code>finished</code>와 <code>dismissed</code>로 투어가 끝난 두 가지 방식을 구분합니다.',
          },
          interactive: {
            title: '직접 해 보는 단계',
            text: '<code>beforeShow</code>는 두 번째 단계가 설정 안을 가리키기 전에 설정을 열고, <code>interactive</code>는 카드가 떠 있는 동안에도 사용자가 스위치를 조작할 수 있게 합니다.',
          },
        },
        api: {
          NuiTour: {
            summary: '가이드 투어입니다.',
            members: {
              steps: '단계 목록. 순서대로 나열합니다.',
              open: '투어가 진행 중인지 여부.',
              step: '표시된 단계. 0부터 셉니다.',
              labels: '투어가 표시하는 모든 텍스트. 번역할 때 사용합니다.',
              finished: '마지막 단계를 마치면 내보냅니다.',
              dismissed: '투어가 중간에 끝나면, 끝난 시점의 단계를 내보냅니다.',
              start: '투어를 시작합니다. 첫 단계 또는 지정한 단계부터 시작합니다.',
              end: '투어를 끝냅니다. 완료 또는 중단으로 끝낼 수 있습니다.',
            },
          },
          NuiTourStep: {
            summary: '투어의 한 단계입니다.',
            members: {
              target: '단계가 가리키는 대상. 없으면 카드가 가운데에 표시됩니다.',
              title: '카드의 제목.',
              content: '카드의 텍스트 또는 템플릿.',
              side: '대상의 어느 쪽에 카드를 놓을지.',
              align: '카드를 대상과 어떻게 정렬할지.',
              padding: '스포트라이트 안에서 대상 주위에 두는 여백(픽셀 단위).',
              interactive: '카드가 떠 있는 동안에도 대상을 사용할 수 있습니다.',
              beforeShow: '단계가 표시되기 전에 실행됩니다. 프로미스를 반환하면 투어가 기다립니다.',
            },
          },
        },
        keyboard: [
          ['Tab', '카드의 버튼 사이를 이동합니다. 모달 단계에서는 포커스가 카드 안에 머뭅니다.'],
          ['Enter 또는 Space', '포커스된 버튼(Next, Back, Done)을 누릅니다.'],
          ['Esc', '투어를 끝냅니다.'],
        ],
        notes: [
          '각 카드는 제목으로 이름이 지정되고 내용으로 설명되는 <code>dialog</code>입니다. 단계마다 포커스가 카드의 주 버튼으로 이동하며, 투어가 끝나면 원래 있던 곳으로 돌아갑니다.',
          '모달 단계에서는 페이지의 나머지 부분과 상호작용할 수 없게 됩니다(inert). 인터랙티브 단계는 모달이 아니므로, 포인터뿐 아니라 키보드로도 대상에 접근할 수 있습니다.',
          '진행 상황은 ‘2 of 4’ 같은 텍스트이며, 점은 이를 그림으로 보여 줄 뿐입니다.',
        ],
      },
      dropzone: {
        name: '드롭존',
        title: 'Angular 파일 드롭존·업로드 컴포넌트',
        summary:
          '파일을 끌어다 놓거나 선택합니다. 검사, 미리 보기, 진행률이 표시되는 업로드를 지원합니다.',
        description:
          '접근성을 갖춘 Angular 파일 드롭존입니다. 끌어다 놓기, 폴더와 붙여넣기, 형식과 크기 검사, 이미지 미리 보기, 진행률과 재시도가 있는 업로드를 지원합니다.',
        apiDescription:
          'Needless UI 드롭존의 API 레퍼런스입니다. nui-dropzone의 파일과 검사, 업로드 함수와 큐, 출력, 텍스트를 설명합니다.',
        a11yDescription:
          'Needless UI 드롭존의 키보드 동작과 접근성을 다룹니다. 버튼으로 동작하는 영역, 결과 안내, 이름이 붙은 진행 표시줄과 작업 버튼을 설명합니다.',
        overview: [
          '드롭존은 끌어다 놓은 파일, 파일 선택 창에서 고른 파일, 붙여 넣은 파일을 받습니다. 끌어다 놓은 폴더는 안쪽까지 읽으며, 각 파일은 자신의 경로를 유지합니다.',
          '모든 파일은 <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code>, 그리고 직접 작성한 <code>validate</code> 함수로 검사하며, 거부된 파일은 이유와 함께 목록으로 표시됩니다. 이미지에는 미리 보기가 붙습니다.',
          '<code>upload</code> 함수가 없으면 드롭존은 폼에서 쓸 파일을 <code>[(files)]</code>에 보관합니다. 함수가 있으면 파일을 몇 개씩 업로드하며, 진행률 표시, 취소, 재시도를 지원합니다. 업로드의 <code>signal</code>을 <code>fetch</code>에 전달해야 취소할 때 업로드가 멈춥니다.',
        ],
        examples: {
          upload: {
            title: '업로드',
            text: '가상의 업로드가 진행률을 단계적으로 알립니다. 이름에 ‘fail’이 들어간 파일은 재시도를 보여 주기 위해 실패하며, <code>directory</code>는 폴더를 선택하는 버튼을 추가합니다.',
          },
          attach: {
            title: '폼 첨부 파일',
            text: '<code>upload</code>가 없습니다. 드롭존은 최대 세 개의 문서를 <code>[(files)]</code>에 보관하며, 직접 넣은 텍스트가 기본 텍스트를 대신합니다.',
          },
        },
        api: {
          NuiDropzone: {
            summary: '파일을 끌어다 놓거나 선택하는 곳입니다.',
            members: {
              files: '보관 중인 파일. 순서대로 나열됩니다.',
              accept: '받을 파일 종류. <code>&lt;input type="file"&gt;</code>과 같은 형식입니다.',
              multiple: '한 번에 여러 파일을 받습니다.',
              directory: '폴더를 선택하는 버튼을 제공합니다.',
              maxFiles: '보관할 수 있는 파일 수.',
              'maxSize, minSize': '가장 큰 파일 크기와 가장 작은 파일 크기(바이트).',
              validate: '각 파일을 검사합니다. 메시지를 반환하면 그 파일은 거부됩니다.',
              upload: '파일을 보냅니다. 지정하지 않으면 파일을 보관만 합니다.',
              concurrency: '동시에 업로드할 파일 수.',
              hint: '영역의 텍스트 아래에 표시되는 한 줄. 예: 받을 수 있는 파일 안내.',
              disabled: '파일을 받지 않습니다.',
              labels: '드롭존이 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              uploaded: '업로드된 파일을 <code>upload</code>가 반환한 값과 함께 내보냅니다.',
              rejected: '거부된 파일을 이유와 함께 내보냅니다.',
              queue: '업로드 큐. 코드에서 취소, 재시도, 진행률 확인을 할 수 있습니다.',
              take: '코드에서 파일을 추가하며, 파일마다 검사합니다.',
            },
          },
          NuiUploader: {
            summary:
              '파일 하나를 보냅니다. 진행률을 0부터 1까지 알리고, 시그널이 중단되면 멈춥니다.',
            members: {
              '(file, context)': '서버가 응답한 내용을 담은 프로미스를 반환합니다.',
            },
          },
        },
        keyboard: [
          ['Enter 또는 Space', '영역에서: 파일 선택 창을 엽니다.'],
          ['Ctrl + V(⌘ + V)', '영역에서: 붙여 넣은 파일을 추가합니다.'],
          ['Tab', '영역과 각 파일의 작업 버튼 사이를 이동합니다.'],
        ],
        notes: [
          '영역은 버튼이므로 포인터 없이도 동작하며, 힌트가 이 버튼을 설명합니다.',
          '추가된 파일과 거부된 파일은 안내됩니다. 각 진행 표시줄은 해당 파일의 이름이 붙은 <code>progressbar</code>이며, 각 작업 버튼에는 ‘Remove beach.jpg’처럼 하는 일을 나타내는 이름이 붙습니다.',
          '미리 보기는 장식용입니다. 어떤 파일인지는 파일 이름이 알려 줍니다.',
        ],
      },
      mask: {
        name: '입력 마스크',
        title: 'Angular 입력 마스크 디렉티브',
        summary:
          '입력하는 대로 서식이 맞춰지는 텍스트 필드로, 날짜, 카드 번호, IBAN, 각종 코드에 씁니다.',
        description:
          'Angular 입력 마스크입니다. 입력하는 대로 텍스트 필드의 서식을 맞추며, 제자리를 지키는 캐럿, 카드와 IBAN용 헬퍼, 폼 유효성 검사를 지원합니다.',
        apiDescription:
          'Needless UI 입력 마스크의 API 레퍼런스입니다. nuiMask 디렉티브와 그 토큰, 값, 그리고 카드 번호와 IBAN용 헬퍼를 설명합니다.',
        a11yDescription:
          'Needless UI 입력 마스크의 접근성을 다룹니다. 자체 레이블을 유지하는 네이티브 필드, 휴대폰의 숫자 키보드, 리터럴을 건너뛰는 삭제를 설명합니다.',
        overview: [
          '마스크는 사용자가 입력하는 대로 텍스트 필드의 서식을 맞춥니다. <code>00/00/0000</code>은 슬래시를 넣고, <code>AA 000 AA</code>는 문자와 숫자를 정해진 순서대로 받습니다. 맞지 않는 문자는 들어가지 않으며, 중간에 입력해도 캐럿이 제자리를 지킵니다.',
          '마스크는 토큰과 리터럴로 이루어집니다. <code>0</code>은 숫자, <code>a</code>는 문자, <code>*</code>는 둘 중 하나이고, <code>A</code>와 <code>X</code>는 코드용으로 같은 역할을 하며 대문자로 입력됩니다. <code>tokens</code>로 토큰을 직접 추가하거나, 입력한 내용에 맞는 마스크를 고르는 함수를 전달할 수 있습니다. <code>nuiCardMask</code>가 바로 카드 브랜드에 따라 마스크를 고르는 함수입니다.',
          '값은 화면에 보이는 그대로이며, <code>unmask</code>를 지정하면 데이터만 남습니다. 마스크는 Signal Forms, 반응형 폼, <code>ngModel</code>과 함께 동작하고, 다 채우지 않은 값은 오류가 됩니다.',
        ],
        examples: {
          formats: {
            title: '서식',
            text: '날짜, 시각, 자동차 번호판, 그리고 16진수 숫자용 토큰을 따로 둔 색상 코드입니다.',
          },
          payment: {
            title: '결제 정보',
            text: 'Signal Forms 필드입니다. 카드 마스크는 브랜드를 따르고, 보안 코드는 American Express일 때 네 자리이며, <code>nuiCardValid</code>와 <code>nuiIbanValid</code>가 번호를 검사합니다.',
          },
        },
        api: {
          NuiMask: {
            summary: '네이티브 텍스트 필드에 적용하는 마스크입니다.',
            members: {
              nuiMask: '마스크, 또는 입력된 데이터에 맞는 마스크를 고르는 함수.',
              tokens: '추가하거나 교체할 마스크 문자.',
              unmask: '값에서 리터럴을 빼고 데이터만 남깁니다.',
              value: '값. 보이는 그대로이거나, <code>unmask</code>를 지정하면 데이터입니다.',
              raw: '리터럴을 뺀, 입력된 데이터.',
              complete: '마스크의 모든 자리가 채워졌는지 여부.',
            },
          },
          Helpers: {
            summary: '마스크의 서식 지정, 검사, 생성을 위한 함수입니다.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                '값에 마스크를 적용하거나, 마스크가 적용된 값에서 데이터를 꺼냅니다.',
              nuiCardMask: '카드 번호용 마스크로, 브랜드가 카드에 인쇄하는 방식대로 묶습니다.',
              nuiCardBrand: '앞자리 숫자로 판단한 카드 번호의 브랜드.',
              'nuiCardValid, nuiLuhn':
                '카드 번호가 브랜드의 길이를 갖추고 Luhn 검사를 통과하는지 여부.',
              nuiIbanMask: '해당 국가의 IBAN 길이에 맞춘 IBAN용 마스크.',
              nuiIbanValid: 'IBAN이 해당 국가의 길이를 갖추고 검사 숫자가 올바른지 여부.',
            },
          },
        },
        keyboard: [
          ['Backspace', '리터럴을 건너뛰고 캐럿 앞의 문자를 삭제합니다.'],
          ['Delete', '리터럴을 건너뛰고 캐럿 뒤의 문자를 삭제합니다.'],
        ],
        notes: [
          '마스크는 직접 만든 <code>&lt;input&gt;</code>에 적용되므로, 레이블과 힌트는 작성한 그대로 유지됩니다. 무엇을 입력해야 하는지는 그곳에 적어야 합니다. 마스크는 안내문이 아닙니다.',
          '숫자만 받는 마스크는 <code>inputmode="numeric"</code>을 설정하므로, 필드에서 따로 지정하지 않는 한 휴대폰에 숫자 키패드가 나타납니다.',
          '어느 문자 체계의 숫자든 받으며, 0~9로 바꿔 입력합니다.',
        ],
      },
      'phone-field': {
        name: '전화번호 필드',
        title: 'Angular 전화번호 입력 컴포넌트',
        summary: '국가 선택기와 번호로 이루어지며, 번호는 그 나라의 표기 방식대로 묶입니다.',
        description:
          '접근성을 갖춘 Angular 전화번호 입력입니다. 국가 선택기, 나라별 표기에 맞춘 번호 묶기, 국가 번호 입력과 붙여넣기, E.164 형식의 값을 지원합니다.',
        apiDescription:
          'Needless UI 전화번호 필드의 API 레퍼런스입니다. nui-phone-field의 value와 country, 제공하는 국가, 번호를 읽고 쓰는 헬퍼를 설명합니다.',
        a11yDescription:
          'Needless UI 전화번호 필드의 접근성을 다룹니다. 이름이 있는 국가 선택기, 번호로 국가가 정해질 때의 안내, 브라우저 자동 완성을 설명합니다.',
        overview: [
          '전화번호 필드는 국가 선택기와 번호로 이루어집니다. 번호는 입력하는 대로 그 나라의 표기 방식에 맞게 묶이며, 값은 <code>+393331234567</code>처럼 E.164 형식의 번호입니다.',
          '사용자는 익숙한 방식대로 번호를 입력합니다. 맨 앞의 0(북미 번호라면 앞의 1)은 국내 접두 번호로 보고 값에서 뺍니다. <code>+44</code>나 <code>0044</code>처럼 국가 번호를 입력하거나 붙여 넣으면 해당 국가가 선택되며, 여러 나라가 국가 번호를 함께 쓰는 경우에는 지역 번호로도 국가가 정해집니다.',
          '처음 선택되는 국가는 로케일의 국가이며, <code>countries</code>로 목록을 좁힐 수 있습니다. 폼에서는 해당 국가 기준으로 너무 짧거나 긴 번호를 오류로 처리합니다. 완전하게 검증하려면 서버에서도 번호를 확인해야 합니다.',
        ],
        examples: {
          basic: {
            title: '전화번호',
            text: '<code>+</code>와 국가 번호로 시작하면 입력하는 동안 국가가 바뀝니다. 터치스크린에서는 국가 목록에 검색 필드가 있어 국가 이름과 국가 번호로 찾을 수 있습니다.',
          },
          countries: {
            title: '원하는 국가만',
            text: '<code>countries</code>로 11개국을 제공하고, 필드는 반응형 <code>FormControl</code>과 함께 동작하며, <code>nuiFormatPhone</code>은 값을 사람이 읽기 좋게 다시 씁니다.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: '전화번호 필드입니다.',
            members: {
              value: 'E.164 형식의 번호, 또는 빈 값.',
              country: '국가. 지역 코드로 나타냅니다.',
              countries: '제공할 국가. 지역 코드로 지정합니다.',
              locale: '국가 이름의 언어.',
              label:
                '<code>&lt;label for&gt;</code>로 이름을 지정하지 않을 때 번호 입력란에 붙이는 이름.',
              inputId: '<code>&lt;label for&gt;</code>에 사용할 번호 입력란의 id.',
              placeholder: '번호 입력란이 비어 있을 때 표시되는 텍스트.',
              invalid: '번호를 유효하지 않은 것으로 표시합니다.',
              disabled: '값을 바꿀 수 없게 합니다.',
              labels: '표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
            },
          },
          Helpers: {
            summary: '전화번호를 다루는 함수입니다.',
            members: {
              nuiParsePhone: '어떤 방식으로 쓴 번호든 지역, 국가 번호, 국내 번호로 나눠 읽습니다.',
              nuiFormatPhone: '번호를 그 나라의 방식대로 묶거나 E.164 형식으로 씁니다.',
              nuiPhoneValid: '번호에 알려진 국가 번호가 있고 그 나라의 길이에 맞는지 여부.',
            },
          },
        },
        keyboard: [
          ['국가 선택기에서 문자 키', '그 문자로 시작하는 국가로 이동합니다.'],
          ['Enter 또는 Space', '국가 목록을 열거나 국가를 선택합니다.'],
          ['Backspace', '번호에서 공백과 괄호를 건너뛰고 숫자를 하나 삭제합니다.'],
        ],
        notes: [
          '국가 선택기의 이름은 ‘Country code’이며 국기와 국가 번호를 읽어 줍니다. 국가 번호나 지역 번호로 국가가 정해지면 새 국가를 안내합니다.',
          '<code>&lt;label for&gt;</code>와 <code>inputId</code>, 또는 <code>label</code>로 번호 입력란의 이름을 지정합니다.',
          '번호 입력란에는 <code>autocomplete="tel"</code>이 지정되어 있어, 브라우저가 국가 번호까지 포함해 번호를 채울 수 있고, 휴대폰에는 전화 키패드가 나타납니다.',
        ],
      },
      'color-picker': {
        name: '색상 선택기',
        title: 'Angular OKLCH 색상 선택기 컴포넌트',
        summary:
          'OKLCH로 색상을 고르며, 슬라이더, 색상 견본, 스포이트, 명도 대비 검사를 제공합니다.',
        description:
          'OKLCH로 동작하는 접근성을 갖춘 Angular 색상 선택기입니다. 넓은 색역의 P3 색상, 모든 CSS 색상 문법, 색상 견본, 스포이트, WCAG 명도 대비 검사를 지원합니다.',
        apiDescription:
          'Needless UI 색상 선택기의 API 레퍼런스입니다. nui-color-picker의 값, 형식, 색역, 색상 견본과 명도 대비, 색상을 다루는 헬퍼를 설명합니다.',
        a11yDescription:
          'Needless UI 색상 선택기의 키보드 동작과 접근성을 다룹니다. 두 값을 가진 영역 슬라이더, 네이티브 슬라이더, 말로 알려 주는 명도 대비 등급을 설명합니다.',
        overview: [
          '색상 선택기는 최신 CSS가 쓰는 지각 기반 색 공간인 OKLCH로 동작합니다. 영역의 가로 방향으로는 채도가 회색부터 그 밝기에서 화면이 표시할 수 있는 최대치까지 이어지므로, 모든 지점이 실제로 쓸 수 있는 색이고, 색조를 바꿔도 핸들이 제자리에 머뭅니다.',
          '입력란은 색 이름을 포함해 모든 CSS 색상을 받으며, 형식 버튼은 값을 hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code>, <code>color(display-p3)</code> 중 하나로 씁니다. 형식의 색역을 벗어난 색은 CSS 방식대로 밝기와 색조를 유지한 채 색역 안으로 옮겨집니다.',
          '<code>swatches</code>로 고를 수 있는 색상을 추가하고, <code>contrastWith</code>로 WCAG 2의 명도 대비 기준에 따라 배경과의 대비를 검사합니다. 브라우저에 스포이트가 있으면, 버튼으로 화면에서 색을 집어 올 수 있습니다.',
        ],
        examples: {
          brand: {
            title: '브랜드 색상',
            text: '이름이 붙은 색상 견본, 그리고 이 색 위에 놓인 흰색 텍스트의 명도 대비입니다. 밝은 색을 고르면 AA를 통과하지 못합니다.',
          },
          wide: {
            title: '넓은 색역',
            text: '<code>gamut="p3"</code>는 영역을 Display P3 색상으로 채우고, 점선으로 sRGB가 끝나는 곳을 표시합니다. 값은 <code>oklch()</code>로 유지됩니다.',
          },
          popover: {
            title: '팝오버 안에서',
            text: '색상을 보여 주는 버튼이 <a href="/components/popover">팝오버</a>에서 선택기를 엽니다.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'OKLCH로 동작하는 색상 선택기입니다.',
            members: {
              value: '형식에 맞춰 쓴 색상. 색상을 고르기 전까지는 비어 있습니다.',
              format: '값을 쓰는 형식.',
              formats: '형식 버튼이 차례로 바꾸는 형식 목록.',
              gamut: '영역에 담을 색: sRGB 또는 Display P3.',
              alpha: '불투명도 슬라이더를 표시합니다.',
              swatches: '이름과 함께 제공하는, 고를 수 있는 색상.',
              contrastWith: '명도 대비를 검사할 배경색.',
              eyeDropper: '브라우저에 스포이트가 있으면 표시합니다.',
              disabled: '값을 바꿀 수 없게 합니다.',
              labels: '표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              color: 'OKLCH로 나타낸, 선택된 색상.',
            },
          },
          Helpers: {
            summary: '색상을 다루는 함수입니다.',
            members: {
              nuiParseColor: '어떤 CSS 문법으로 쓴 색이든 읽습니다.',
              nuiFormatColor: '색을 지정한 형식으로 씁니다.',
              nuiToGamut: 'CSS와 같은 방식으로 색을 sRGB 또는 Display P3 안으로 옮깁니다.',
              nuiContrast: '배경 위에 놓인 색의 WCAG 2 명도 대비.',
            },
          },
        },
        keyboard: [
          ['왼쪽 / 오른쪽 화살표', '영역에서 채도를 낮추거나 높입니다.'],
          ['위쪽 / 아래쪽 화살표', '영역에서 더 밝게 또는 더 어둡게 합니다.'],
          ['Shift + 화살표 키', '열 배 더 멀리 움직입니다.'],
          ['Home / End', '영역에서 채도를 없애거나 최대로 합니다.'],
          ['Page Up / Page Down', '영역에서 훨씬 더 밝게 또는 어둡게 합니다.'],
        ],
        notes: [
          '영역의 핸들은 ‘Color’라는 이름의 <code>slider</code>이며, ‘Lightness 62%, chroma 75%’처럼 두 값을 모두 읽어 줍니다. 색조와 불투명도는 네이티브 range 입력입니다.',
          '색상 견본은 레이블로 이름이 지정된 버튼이며, 현재 색상과 일치하면 눌린 상태가 됩니다.',
          'AA와 AAA는 색만이 아니라 ‘passes’ 또는 ‘fails’라는 말로도 결과를 알려 주며, 강제 색상 모드에서도 색 자체는 그대로 유지됩니다.',
        ],
      },
      carousel: {
        name: '캐러셀',
        title: 'Angular 캐러셀·슬라이더 컴포넌트',
        summary:
          '슬라이드를 한 줄로 늘어놓고 스크롤과 스냅으로 넘기며, 버튼, 점, 자동 재생을 지원합니다.',
        description:
          '접근성을 갖춘 Angular 캐러셀입니다. 네이티브 스크롤 스냅과 스와이프, 여러 장 동시 표시, 점, 반복, WCAG에 맞춰 일시 정지하고 멈추는 자동 재생을 지원합니다.',
        apiDescription:
          'Needless UI 캐러셀의 API 레퍼런스입니다. nui-carousel의 표시할 슬라이드 수, 인덱스, 반복, 자동 재생, 메서드와 nuiCarouselSlide 디렉티브를 설명합니다.',
        a11yDescription:
          'Needless UI 캐러셀의 키보드 동작과 접근성을 다룹니다. WAI-ARIA 캐러셀 패턴, 자동 재생 버튼, 이름이 붙은 슬라이드, 이동 안내를 설명합니다.',
        overview: [
          '캐러셀은 슬라이드를 한 줄로 보여 주며, 이 줄은 스크롤되다가 슬라이드에 맞춰 멈춥니다(스냅). 스와이프, 트랙패드, 화살표 키가 네이티브 스크롤로 캐러셀을 움직이고, 이전·다음 버튼과 점으로도 이동할 수 있습니다. 각 슬라이드에 <code>nuiCarouselSlide</code>를 붙이고, 그 제목으로 이름을 지정합니다.',
          '<code>perView</code>로 한 번에 슬라이드를 하나 또는 여러 개 보여 주거나, <code>perView="auto"</code>로 슬라이드가 자기 너비를 유지하게 합니다. <code>[(index)]</code>는 보이는 첫 번째 슬라이드를 바인딩하고, <code>loop</code>를 지정하면 끝에서 처음으로 돌아갑니다.',
          '<code>autoplay</code>를 지정하면 자동 재생 버튼과 함께 슬라이드가 저절로 넘어갑니다. 자동 재생은 포인터가 올라가 있는 동안 일시 정지하고, 키보드 포커스가 들어오면 WAI-ARIA 패턴에 따라 완전히 멈춥니다.',
        ],
        examples: {
          featured: {
            title: '추천 여행지',
            text: '6초마다 새 슬라이드로 넘어가며, 자동 재생 버튼의 링이 다음 슬라이드까지 차오릅니다. 포인터를 올리면 자동 재생이 일시 정지하고, Tab 키로 들어오면 멈춥니다.',
          },
          shelf: {
            title: '카드 진열대',
            text: '<code>perView="auto"</code>는 각 카드의 너비를 유지하며 들어가는 만큼 보여 줍니다. 점은 스와이프를 따라가고, <code>[(index)]</code>는 현재 위치를 알려 줍니다.',
          },
        },
        api: {
          NuiCarousel: {
            summary: '슬라이드로 이루어진 캐러셀입니다.',
            members: {
              label: '캐러셀의 이름.',
              index: '보이는 첫 번째 슬라이드. 0부터 셉니다.',
              perView:
                '한 번에 보이는 슬라이드 수. 슬라이드가 자기 너비를 정하게 하려면 <code>auto</code>.',
              gap: '슬라이드 사이의 간격. 어떤 CSS 길이든 쓸 수 있습니다.',
              loop: '마지막 슬라이드 다음에는 첫 슬라이드로, 첫 슬라이드 이전에는 마지막 슬라이드로 이어집니다.',
              autoplay:
                '자동으로 넘어갈 때 슬라이드 사이의 간격(밀리초). 0이면 자동으로 넘어가지 않습니다.',
              'controls, indicators': '이전·다음 버튼과 점.',
              labels: '캐러셀이 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              'next, previous': '슬라이드를 하나 앞으로 또는 뒤로 옮깁니다.',
              goTo: '지정한 슬라이드가 보이게 합니다.',
            },
          },
          NuiCarouselSlide: {
            summary: '슬라이드 하나입니다.',
            members: { nuiCarouselSlide: '슬라이드의 제목. 위치 대신 읽힙니다.' },
          },
        },
        keyboard: [
          ['Tab', '자동 재생 버튼, 이전·다음 버튼, 슬라이드, 점 순서로 이동합니다.'],
          ['슬라이드에서 왼쪽 / 오른쪽 화살표', '이전 또는 다음 슬라이드로 스크롤합니다.'],
          ['Enter 또는 Space', '포커스된 버튼이나 점을 누릅니다.'],
        ],
        notes: [
          '캐러셀은 <code>aria-roledescription="carousel"</code>을 가진 <code>region</code>이고, 각 슬라이드는 <code>aria-roledescription="slide"</code>를 가진 <code>group</code>이며, ‘Lake Como, 2 of 4’ 같은 이름이 붙습니다.',
          '자동 재생 버튼이 맨 앞에 오며, 누르면 무엇을 할지 이름으로 알려 줍니다. 자동 재생은 포인터가 올라가 있으면 일시 정지하고 키보드 포커스가 들어오면 멈추므로, 사용자가 읽고 있는 내용을 움직이는 일이 없습니다.',
          '스와이프, 버튼, 점으로 이동하면 캐러셀이 도착한 위치를 안내합니다. 자동 재생으로 넘어갈 때는 안내하지 않습니다.',
        ],
      },
      editor: {
        name: '리치 텍스트 편집기',
        title: 'Angular 리치 텍스트 편집기 컴포넌트',
        summary:
          '제목, 목록, 링크, 서식을 툴바로 넣거나, 입력하면서 Markdown으로 바로 쓸 수 있습니다.',
        description:
          '접근성을 갖춘 Angular 리치 텍스트 편집기입니다. 툴바, 단축키, Markdown 입력, 깔끔한 붙여넣기, 링크, 실행 취소를 지원하고, 값은 HTML이나 Markdown입니다.',
        apiDescription:
          'Needless UI 리치 텍스트 편집기의 API 레퍼런스입니다. nui-editor의 값과 형식, 툴바 버튼, 텍스트, 명령, HTML·Markdown 변환 함수를 설명합니다.',
        a11yDescription:
          'Needless UI 리치 텍스트 편집기의 키보드 동작과 접근성을 다룹니다. 여러 줄 텍스트 상자, WAI-ARIA 툴바, 단축키, 링크 다이얼로그를 설명합니다.',
        overview: [
          '편집기로 단락, 제목, 인용문, 목록, 코드 블록, 구분선을 쓰고, 굵게, 기울임꼴, 밑줄, 취소선, 코드, 링크를 적용할 수 있습니다. 값은 HTML이며, <code>format="markdown"</code>을 지정하면 Markdown이 됩니다. 폼과도 함께 동작합니다.',
          '편집기는 자체 문서를 유지하고 모든 편집을 직접 처리합니다. 그래서 붙여 넣거나 끌어다 놓은 내용도 이 문서의 형태로만 페이지에 들어갑니다. 구조와 서식은 Google Docs나 Word에서 가져와도 유지되고, 스크립트, 스타일, 안전하지 않은 링크는 제거됩니다.',
          'Markdown을 입력하면 서식으로 바뀝니다. 줄을 <code># </code> 기호로 시작하면 제목, <code>- </code> 기호로 시작하면 목록이 되고, <code>**bold**</code>와 <code>`code`</code>는 닫는 순간 서식이 적용됩니다. 모든 서식에는 단축키와 툴바 버튼이 있습니다.',
        ],
        examples: {
          comment: {
            title: '댓글',
            text: '<code>tools</code>로 툴바의 버튼을 고릅니다. Markdown을 입력하거나 어디서든 붙여 넣은 뒤, 편집기가 유지하는 HTML을 확인해 보십시오.',
          },
          markdown: {
            title: 'Markdown 읽기와 쓰기',
            text: '<code>format="markdown"</code>을 지정하면 값이 Markdown이 됩니다. 중첩 목록, 인용문, 코드까지 읽어 들이고, 편집할 때마다 다시 Markdown으로 씁니다.',
          },
          lists: {
            title: '중첩 목록',
            text: '‘들여쓰기’와 ‘내어쓰기’는 Tab과 Shift + Tab처럼 목록 항목을 한 단계 안으로 넣거나 밖으로 뺍니다. 기본 툴바는 Tab 키가 없는 터치스크린에서만 이 두 버튼을 보여 줍니다. 모든 기기에서 보이게 하려면 <code>tools</code>에 넣으십시오.',
          },
        },
        api: {
          NuiEditor: {
            summary: '리치 텍스트 편집기입니다.',
            members: {
              value: '내용. HTML 또는 Markdown이며, 텍스트가 없으면 비어 있습니다.',
              format: '값을 쓰는 형식.',
              tools: '툴바 버튼을 순서대로 나열하며, 그룹 사이에는 <code>|</code>를 넣습니다.',
              'label, labelledBy, describedBy': '내용의 이름과 설명을 지정합니다.',
              placeholder: '비어 있을 때 표시됩니다.',
              'readonly, disabled, invalid':
                '각각 편집 없이 내용만 보여 주고, 사용할 수 없게 하고, 올바르지 않은 값으로 표시합니다.',
              labels: '편집기가 표시하거나 읽어 주는 모든 텍스트. 번역할 때 사용합니다.',
              run: '툴바 명령을 실행합니다.',
              'undo, redo, focus':
                '각각 실행을 취소하고, 다시 실행하고, 텍스트로 포커스를 옮깁니다.',
            },
          },
          Helpers: {
            summary: '문서를 변환하는 함수입니다.',
            members: {
              'nuiEditorToHtml, nuiEditorToMarkdown': '문서를 HTML 또는 Markdown으로 씁니다.',
              'nuiEditorFromHtml, nuiEditorFromMarkdown':
                'HTML 또는 Markdown을 문서로 읽어 들이며, 편집기가 표시할 수 있는 것만 남깁니다.',
            },
          },
        },
        keyboard: [
          ['Ctrl + B, I 또는 U', '굵게, 기울임꼴, 밑줄. Apple 기기에서는 Ctrl 대신 ⌘를 누릅니다.'],
          ['Ctrl + K', '링크를 추가하거나 편집합니다.'],
          [
            'Ctrl + Alt + 1, 2 또는 3',
            '제목으로 바꿉니다. Ctrl + Alt + 0을 누르면 다시 단락이 됩니다.',
          ],
          ['Ctrl + Shift + 7 또는 8', '번호 매기기 목록 또는 글머리 기호 목록으로 바꿉니다.'],
          [
            '목록에서 Tab과 Shift + Tab',
            '들여쓰기 또는 내어쓰기. 최상위 항목은 Shift + Tab을 누르면 단락이 됩니다. 목록 밖에서는 Tab을 누르면 편집기를 벗어납니다.',
          ],
          ['Ctrl + Z / Ctrl + Shift + Z', '실행 취소와 다시 실행.'],
          ['툴바에서 왼쪽 / 오른쪽 화살표', '버튼 사이를 이동합니다.'],
        ],
        notes: [
          '내용은 <code>aria-multiline</code>을 가진 <code>textbox</code>이며, <code>label</code>로 이름이 지정되고, 자리 표시자는 <code>aria-placeholder</code>에 들어갑니다.',
          '툴바는 탭 순서에서 한 번만 멈추는 WAI-ARIA 툴바입니다. 서식 버튼은 <code>aria-pressed</code>를 가진 토글 버튼이며, 각 버튼은 <code>aria-keyshortcuts</code>와 툴팁에 단축키를 밝힙니다.',
          '툴바 명령을 실행하면 포커스가 텍스트로 돌아가고, 링크 다이얼로그에서 Esc를 누르면 텍스트로 돌아갑니다. Tab 키가 갇히는 일은 없으며, 목록 밖에서는 편집기를 벗어납니다.',
          'Tab 키가 없는 터치스크린에서는 기본 툴바에 ‘들여쓰기’와 ‘내어쓰기’ 버튼이 있으며, 목록 안에서 활성화됩니다. 툴바 버튼을 터치해도 포커스가 텍스트에 그대로 남으므로, 터치 키보드가 열린 채로 유지됩니다.',
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
      customization: {
        title: '커스터마이징',
        description:
          '스프링 물리, 누르기 효과, 등장 효과, 모서리 모양과 반경, 밀도를 조절해 Needless UI의 움직임과 느낌을 앱 전체 또는 컴포넌트별로 바꿀 수 있습니다.',
        blocks: [
          {
            kind: 'p',
            html: '모든 컴포넌트에는 바꿀 수 있는 개성이 있습니다. 움직임을 결정하는 스프링, 손가락으로 눌렀을 때 버튼의 반응, 다이얼로그와 메뉴가 등장하는 방식, 모서리의 모양과 크기, 그리고 차지하는 공간입니다. 각각 속성 하나로 요소 안의 모든 것에, 또는 입력 하나로 컴포넌트 하나에 적용할 수 있습니다.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: '속성 하나로 하위 트리 전체에' },
          {
            kind: 'p',
            html: '<code>data-nui-*</code> 속성을 <code>&lt;body&gt;</code>에 지정하면 앱 전체에, 다른 요소에 지정하면 그 부분에만 적용됩니다. 가장 가까운 속성이 우선하므로 중첩할 수 있습니다. 이 속성들은 CSS 사용자 지정 속성만 설정하므로 어떤 프레임워크에서든, 프레임워크 없이도 똑같이 동작합니다.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: '컴포넌트 하나에' },
          {
            kind: 'p',
            html: 'Angular에서는 <code>nuiButton</code>, <code>nuiDialog</code>, <code>nuiMenu</code>가 같은 값을 입력으로 받습니다. 설정하지 않은 입력은 주변 속성을 따릅니다.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'CSS로 컴파일되는 스프링' },
          {
            kind: 'p',
            html: '모션은 스프링 물리로 정의합니다. 지속 시간과 곡선 대신 강성, 감쇠, 질량을 사용합니다. 토큰 컴파일러가 각 스프링의 방정식을 풀어 멈출 때까지 걸리는 시간과 <code>linear()</code> 이징으로 CSS에 기록하므로, JavaScript 없이 컴포지터에서 실행됩니다. <code>--nui-spring-snappy</code>부터 <code>--nui-spring-mechanical</code>까지 여섯 가지 스프링이 토큰으로 제공되며, 사용 중인 스프링은 <code>--nui-motion</code>에 담깁니다.',
          },
          {
            kind: 'p',
            html: '다른 스프링도 입력 하나면 됩니다. Angular가 같은 솔버로 런타임에 컴파일하며, <code>springTransition()</code>을 사용하면 직접 만든 요소에 쓸 CSS를 얻을 수 있습니다.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: '그 사이의 모든 값' },
          {
            kind: 'p',
            html: '프리셋은 지름길일 뿐입니다. 그 밖의 값은 사용자 지정 속성을 직접 설정하면 됩니다. <code>--nui-press</code>와 <code>--nui-enter</code>에는 어떤 transform이든, <code>--nui-radius-scale</code>과 <code>--nui-density</code>에는 어떤 숫자든 지정할 수 있습니다.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: '접근성' },
          {
            kind: 'p',
            html: '시스템에서 동작 줄이기를 요청하면 스프링은 즉시 끝나고, 누르기와 등장 효과도 움직이지 않습니다. 밀도를 어떻게 설정해도 컨트롤이 WCAG 2.2의 타깃 크기인 24px보다 작아지지 않으며, 어떤 프리셋도 색상을 건드리지 않으므로 모든 명도 대비 검사가 그대로 유효합니다. <code>corner-shape</code>를 지원하지 않는 브라우저에서는 모든 모서리가 둥글게 그려집니다.',
          },
        ],
      },
      'browser-support': {
        title: '브라우저 지원',
        description:
          'Needless UI가 지원하고 테스트하는 브라우저입니다. Chrome, Edge, Firefox, Safari 버전과 휴대폰·터치스크린, 오래된 브라우저에서 빠지는 기능을 다룹니다.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI는 네이티브 요소와 Popover API 같은 최신 웹 플랫폼 기능을 바탕으로 만들어졌습니다. 아래 표의 브라우저를 표시된 버전부터 지원합니다. 그보다 오래된 버전에서는 메뉴, 셀렉트, 팝오버가 열리지 않습니다.',
          },
          { kind: 'h2', id: 'supported', text: '지원 브라우저' },
          {
            kind: 'table',
            caption: '지원하는 가장 오래된 버전',
            head: ['브라우저', '최소 버전', '필요한 기능'],
            rows: [
              [
                '컴퓨터와 Android의 Chrome, Edge',
                '120',
                'CSS 마스크로 그리는 아이콘, 그리고 오른쪽에서 왼쪽으로 쓰는 텍스트를 위한 <code>:dir()</code>',
              ],
              ['컴퓨터와 Android의 Firefox', '125', 'Popover API'],
              ['Mac의 Safari', '17', 'Popover API'],
              ['iPhone과 iPad의 모든 브라우저', 'iOS 17', 'Popover API'],
              ['Samsung Internet(삼성 인터넷)', '25', 'Chrome과 같음'],
            ],
          },
          {
            kind: 'p',
            html: 'Opera, Brave처럼 Chromium을 기반으로 한 다른 브라우저는 Chrome의 버전을 따릅니다. Angular 22 자체도 Chrome, Edge, Firefox는 119 이상, Safari는 17 이상을 요구합니다. Internet Explorer와 Chromium 이전의 구형 Edge는 지원하지 않습니다.',
          },
          { kind: 'h2', id: 'tested', text: '테스트하는 브라우저' },
          {
            kind: 'p',
            html: '변경 사항이 생길 때마다 각 컴포넌트의 테스트를 Chrome, Firefox, Safari의 엔진에서 실행합니다. 릴리스 전에는 이 문서의 모든 페이지를 모든 엔진에서, 컴퓨터와 터치로 조작하는 휴대폰 양쪽에서 확인합니다. 각 페이지는 문제없이 시작되고, 모든 메뉴와 팝업이 열리고, 화면에 맞게 표시되고, 접근성 검사를 통과해야 합니다.',
          },
          {
            kind: 'table',
            caption: '테스트에 쓰는 브라우저',
            head: ['엔진', '버전', '테스트 환경'],
            rows: [
              ['Chromium(Chrome, Edge)', '153', '컴퓨터, 그리고 터치로 조작하는 Android 휴대폰'],
              ['Firefox', '155', '컴퓨터, 그리고 휴대폰 크기의 터치스크린'],
              ['WebKit(Safari)', '26.6', '컴퓨터, 그리고 터치로 조작하는 iPhone'],
              ['iPhone의 Safari', 'iOS 17.5와 18.6', 'iPhone 시뮬레이터'],
              ['Android의 Chrome', '124', 'Android 에뮬레이터(터치 키보드로 입력)'],
            ],
          },
          {
            kind: 'p',
            html: '지원하는 가장 오래된 버전과 테스트하는 버전 사이의 버전은 하나하나 테스트하지 않습니다. 컴포넌트에 필요한 기능을 모두 갖추고 있으므로 지원 대상입니다.',
          },
          { kind: 'h2', id: 'newer', text: '최신 브라우저의 추가 기능' },
          {
            kind: 'p',
            html: '몇몇 세부 사항은 최신 브라우저에만 있는 기능을 사용합니다. 다른 브라우저에서는 이 부분이 빠질 뿐이며, 망가지는 것은 없습니다.',
          },
          {
            kind: 'table',
            caption: '최신 브라우저가 필요한 세부 사항',
            head: ['세부 사항', '브라우저', '다른 브라우저에서는'],
            rows: [
              [
                '팝오버, 메뉴, 다이얼로그가 애니메이션과 함께 열리고 닫힘',
                'Chrome과 Edge, Firefox 129, Safari 17.5',
                '바로 나타나고 사라짐',
              ],
              ['스쿼클 모서리(<code>corner-shape</code>)', 'Chrome과 Edge 139', '둥근 모서리'],
              ['화면 어디에서나 색 집어 오기', '컴퓨터의 Chrome과 Edge', '스포이트 버튼 없음'],
              ['드롭존에서 폴더 통째로 선택하기', '컴퓨터의 브라우저', '파일만 선택 가능'],
              [
                '캐러셀 자동 재생 버튼의 링이 부드럽게 차오름',
                'Chrome과 Edge, Firefox 128, Safari',
                '한 번에 차오름',
              ],
              [
                'Android의 뒤로 가기 제스처로 메뉴, 콤보박스 목록, 호버 카드가 닫히고 가이드 투어가 끝남',
                'Chrome과 Edge 126, Firefox 149',
                '뒤로 가기 제스처를 하면 이전 페이지로 돌아감',
              ],
            ],
          },
          { kind: 'h2', id: 'touch', text: '휴대폰과 터치스크린' },
          {
            kind: 'p',
            html: '모든 컴포넌트는 터치로 조작할 수 있습니다. 스플리터 핸들, 색상 선택기의 영역, 데이터 그리드의 열 경계, 토스트는 페이지를 스크롤하지 않고 손가락을 따라 움직입니다. 캐러셀은 브라우저 자체의 스크롤로 스와이프되고, 스케줄러의 일정은 길게 눌러 집어 옮길 수 있습니다. 터치스크린에서는 입력 필드의 글자 크기가 16px 이상이라 iPhone이 입력 필드를 확대하지 않으며, Android 키보드처럼 단어를 조합하며 입력하는 키보드에서도 단어가 온전히 입력됩니다.',
          },
          {
            kind: 'p',
            html: '터치스크린에서는 호버할 수 없으므로, 호버 카드는 페이지에 있는 내용을 보충하는 역할만 합니다. 호버 카드에는 꼭 필요한 내용을 넣지 마십시오. 휴대폰에서는 채팅의 Return 키가 줄을 바꾸고, 전송은 버튼으로 합니다. 또한 글자를 입력해 이동할 키가 없기 때문에, 목록이 긴 셀렉트에는 검색 필드가 표시됩니다.',
          },
          { kind: 'h2', id: 'keyboard', text: 'Safari의 키보드 조작' },
          {
            kind: 'p',
            html: '기본적으로 Safari에서 Tab 키는 텍스트 필드와 팝업 메뉴 사이만 이동합니다. 모든 버튼과 링크로 이동하려면 Safari의 고급 설정에서 ‘Tab을 눌러 웹 페이지에 있는 각 항목을 하이라이트’를 켜거나, Option + Tab 키를 누르십시오. 또한 Safari는 버튼을 클릭해도 그 버튼에 포커스를 주지 않습니다. 컴포넌트가 이를 보완하므로, 클릭한 뒤에도 다른 브라우저에서처럼 키보드로 계속 조작할 수 있습니다.',
          },
        ],
      },
    },
    playground: {
      label: '커스터마이징 플레이그라운드',
      motion: '모션',
      custom: '사용자 지정',
      stiffness: '강성',
      damping: '감쇠',
      mass: '질량',
      press: '누르기',
      enter: '등장',
      corners: '모서리 모양',
      radius: '모서리 반경',
      density: '밀도',
      surprise: '운에 맡기기',
      reset: '기본값으로 되돌리기',
      hint: '버튼을 길게 눌렀다가 떼 보십시오. 다이얼로그와 메뉴를 열면 등장하는 모습을 볼 수 있습니다.',
      save: '저장',
      cancel: '취소',
      delete: '삭제',
      openDialog: '다이얼로그 열기',
      openMenu: '메뉴 열기',
      menu: ['이름 바꾸기', '복제', '삭제'],
      dialogTitle: '쓸데없이 공들인 애니메이션',
      dialogText: '이 다이얼로그는 지정한 방식 그대로 등장했습니다.',
      close: '닫기',
      curve: '시간에 따른 스프링의 위치입니다. 아래에서 출발해 점선에서 멈춥니다.',
      settles: (ms, overshoot) => `${ms}ms 만에 정지 · 오버슈트 ${overshoot}%`,
      instant: '모션 없음: 모든 것이 목적지로 곧바로 이동합니다.',
      stuck:
        '이 스프링은 10초 안에 멈추지 않습니다. 감쇠나 강성을 높이십시오. 그동안 컴포넌트는 마지막으로 제대로 멈췄던 스프링을 계속 사용합니다.',
      reducedMotion:
        '시스템에서 동작 줄이기를 요청하여 여기서는 아무것도 움직이지 않습니다. 이 설정을 끄면 스프링, 누르기, 등장 효과가 다시 나타납니다.',
      noCornerShape:
        '이 브라우저는 아직 모서리 모양을 그릴 수 없어 모든 모서리가 둥근 상태로 유지됩니다.',
      everywhere: '어떤 요소에든 지정해 그 안의 모든 것에 적용:',
      oneComponent: 'Angular에서 컴포넌트 하나에만 적용:',
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
