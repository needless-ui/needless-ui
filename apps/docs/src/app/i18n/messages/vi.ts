import type { Messages } from './types';

export const messages: Messages = {
  site: {
    name: 'Needless UI',
    tagline: 'The Needlessly Engineered Styling Toolkit',
    description:
      'Component Angular hỗ trợ tiếp cận, dễ tùy biến theme, dựa trên phần tử native, design token W3C và một stylesheet độc lập với framework. Mã nguồn mở, giấy phép MIT.',
    skipToContent: 'Chuyển đến nội dung chính',
    nav: {
      label: 'Chính',
      home: 'Trang chủ Needless UI',
      components: 'Component',
      guides: 'Hướng dẫn',
      github: 'GitHub',
      language: 'Ngôn ngữ',
      theme: 'Giao diện',
      themes: { system: 'Theo hệ thống', light: 'Sáng', dark: 'Tối' },
    },
    footer: {
      license: 'Phát hành theo giấy phép MIT.',
      source: 'Mã nguồn',
      built: 'Kỹ lưỡng đến mức thừa thãi, làm ra thật chỉn chu.',
      legal: 'Thông tin pháp lý',
      privacy: 'Chính sách quyền riêng tư',
    },
    emergency: {
      label: 'ĐỪNG BẤM',
      cover: 'Mở nắp an toàn',
      button: 'Đừng bấm',
      armed: 'Nắp đã mở. Hãy nghĩ lại.',
      falling: 'Đã kích hoạt quy trình khẩn cấp…',
      fallen: 'Trọng lực giờ là vĩnh viễn. Hãy tải lại trang để xây dựng lại vũ trụ.',
      reduced: 'Hệ thống của bạn yêu cầu giảm chuyển động, nên trọng lực vẫn tắt. May mắn đấy.',
    },
    toaster: { label: 'Thông báo (Alt+T)', close: 'Đóng' },
  },

  home: {
    title: 'Needless UI · Component Angular hỗ trợ tiếp cận, kỹ lưỡng quá mức',
    description:
      'Needless UI là thư viện component Angular mã nguồn mở: phần tử native, một stylesheet độc lập với framework, design token W3C và tích hợp sẵn WCAG 2.2 AA.',
    eyebrow: 'Mã nguồn mở · Angular 22 · MIT',
    heading: 'Component UI, chăm chút kỹ hơn mức cần thiết.',
    lead: 'Needless UI tạo kiểu cho <strong>phần tử native</strong> bằng một stylesheet độc lập với framework và design token W3C. Các directive Angular bổ sung hành vi từ Angular Aria, nên mọi component đều hỗ trợ tiếp cận ngay từ lần render đầu tiên.',
    getStarted: 'Bắt đầu',
    browse: 'Xem các component',
    featuresTitle: 'Lý do ra đời',
    features: [
      {
        title: 'Ưu tiên phần tử native',
        text: '<code>&lt;button nuiButton&gt;</code> là một nút thật sự. Biểu mẫu, bàn phím và trình đọc màn hình đều hoạt động bình thường vì không có gì bọc quanh nó.',
      },
      {
        title: 'Một stylesheet, mọi framework',
        text: 'Component là CSS thuần trong cascade layer: hôm nay là Angular, tiếp theo là React, còn HTML thuần thì lúc nào cũng dùng được.',
      },
      {
        title: 'CSS của bạn luôn thắng',
        text: 'Mọi thứ đều nằm trong <code>@layer nui</code>, nên style của bạn ghi đè được mà không cần <code>!important</code> hay phải vật lộn với specificity.',
      },
      {
        title: 'Hỗ trợ tiếp cận ngay từ thiết kế',
        text: 'Mọi cặp màu đều được kiểm tra theo WCAG 2.2 AA khi tạo bảng màu. Focus, chế độ forced colors và giảm chuyển động đều đã được xử lý sẵn.',
      },
      {
        title: 'Tùy biến đến mức thừa thãi',
        text: 'Lò xo, hiệu ứng nhấn, hiệu ứng xuất hiện, hình dạng góc, bo góc và mật độ: <a href="/guides/customization">một thuộc tính</a> cho cả ứng dụng, hoặc một input cho mỗi component, dựa trên design token W3C chuẩn.',
      },
      {
        title: 'Angular hiện đại',
        text: 'Signal input, zoneless, render phía máy chủ và mỗi component một entry point riêng, nên ứng dụng chỉ đóng gói những gì nó import.',
      },
    ],
    codeTitle: 'Hai lệnh import là xong',
    codeText:
      'Thêm gói, import stylesheet một lần, rồi dùng component trong bất kỳ standalone component nào.',
  },

  components: {
    title: 'Các component',
    description:
      'Khám phá các component Needless UI cho Angular: nút, hộp thoại và menu hỗ trợ tiếp cận, kèm ví dụ trực tiếp, tài liệu API và hỗ trợ bàn phím.',
    intro:
      'Mỗi component đều dựa trên phần tử native và có tài liệu kèm ví dụ trực tiếp, API và cách hoạt động với bàn phím.',
    tabsLabel: 'Các phần của tài liệu',
    tabs: { overview: 'Tổng quan', api: 'API', accessibility: 'Khả năng tiếp cận' },
    sidenavLabel: 'Component',
    onThisPage: 'Trên trang này',
    example: {
      showCode: 'Hiện mã',
      hideCode: 'Ẩn mã',
      copy: 'Sao chép',
      copied: 'Đã sao chép',
      files: 'Tệp nguồn',
    },
    api: {
      import: 'Import',
      selector: 'Selector',
      exportAs: 'Tên export',
      members: 'Thuộc tính',
      name: 'Tên',
      type: 'Kiểu',
      default: 'Mặc định',
      description: 'Mô tả',
      kinds: {
        input: 'Input',
        model: 'Hai chiều',
        output: 'Output',
        method: 'Phương thức',
        property: 'Thuộc tính',
      },
      texts:
        'Mọi văn bản mà component hiển thị hoặc đọc lên cũng là input, nên bạn có thể dịch chúng:',
      customization: {
        note: 'Các input tùy biến mà bạn không đặt sẽ lấy giá trị từ thuộc tính <code>data-nui-*</code> gần nhất. Xem <a href="/guides/customization">hướng dẫn tùy biến</a>.',
        members: {
          motion:
            'Lò xo quyết định chuyển động của component: <code>snappy</code>, <code>bouncy</code>, <code>jelly</code>, <code>elastic</code>, <code>lazy</code>, <code>mechanical</code> hoặc <code>none</code>.',
          spring:
            'Một lò xo bất kỳ, dạng <code>{ stiffness, damping, mass }</code>, được biên dịch sang CSS lúc runtime. Ghi đè <code>motion</code>.',
          press:
            'Hiệu ứng khi component được nhấn giữ: <code>sink</code>, <code>squish</code>, <code>pop</code>, <code>wobble</code>, <code>rubber</code>, <code>tilt</code> hoặc <code>none</code>.',
          enter:
            'Cách component xuất hiện: <code>zoom</code>, <code>fade</code>, <code>drop</code>, <code>rise</code>, <code>unfold</code>, <code>flip</code>, <code>swing</code>, <code>slide</code> hoặc <code>none</code>.',
          corners:
            'Hình dạng các góc: <code>round</code>, <code>squircle</code>, <code>bevel</code>, <code>scoop</code>, <code>notch</code> hoặc <code>square</code>.',
          radius:
            'Mức bo góc: <code>none</code>, <code>small</code>, <code>medium</code>, <code>large</code> hoặc <code>full</code>.',
          density:
            'Lượng không gian mà component chiếm: <code>compact</code>, <code>regular</code> hoặc <code>roomy</code>.',
        },
      },
    },
    a11y: {
      keyboard: 'Tương tác bằng bàn phím',
      key: 'Phím',
      action: 'Hành động',
      notes: 'Ghi chú về khả năng tiếp cận',
    },
    titles: {
      api: (name) => `API của ${name}`,
      accessibility: (name) => `Khả năng tiếp cận của ${name}`,
    },
    items: {
      button: {
        name: 'Button',
        title: 'Component nút cho Angular',
        summary: 'Nút hành động và liên kết, tạo kiểu trên phần tử button và anchor native.',
        description:
          'Directive nút Angular hỗ trợ tiếp cận cho phần tử button và anchor native, với bốn biến thể, ba tông màu, ba kích thước và hỗ trợ liên kết.',
        apiDescription:
          'Tài liệu API về nút của Needless UI: directive nuiButton, selector của nó và các input variant, tone, size và disabled.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của nút Needless UI: ngữ nghĩa native, viền focus, độ tương phản, vùng nhấn và liên kết bị vô hiệu hóa.',
        overview: [
          'Directive <code>nuiButton</code> tạo kiểu cho một <code>&lt;button&gt;</code> hoặc <code>&lt;a&gt;</code> native. Phần tử vẫn giữ nguyên ngữ nghĩa, hành vi bàn phím và khả năng tham gia biểu mẫu; directive chỉ phản ánh các input của nó sang các thuộc tính data mà stylesheet nhắm tới.',
          'Dùng <code>&lt;button&gt;</code> cho hành động và <code>&lt;a&gt;</code> cho điều hướng. Cả hai trông giống nhau và đều hỗ trợ <code>disabled</code>.',
        ],
        examples: {
          variants: {
            title: 'Biến thể',
            text: 'Bốn kiểu tô nền, từ nổi bật nhất đến kín đáo nhất. Mỗi màn hình chỉ nên có một nút solid cho hành động chính.',
          },
          tones: {
            title: 'Tông màu',
            text: 'Tông màu thay đổi bảng màu: accent cho luồng chính, neutral cho hành động phụ, danger cho hành động mang tính phá hủy.',
          },
          sizes: {
            title: 'Kích thước',
            text: 'Ba chiều cao: 28, 36 và 44 pixel. Ngay cả cỡ nhỏ nhất cũng vượt kích thước vùng nhấn tối thiểu của WCAG 2.2.',
          },
          links: {
            title: 'Liên kết và nút bị vô hiệu hóa',
            text: 'Thẻ a không thể vô hiệu hóa theo cách native, nên liên kết bị vô hiệu hóa sẽ nhận <code>aria-disabled="true"</code> và bị chặn cú nhấp, kể cả khi dùng <code>routerLink</code>.',
          },
          presses: {
            title: 'Hiệu ứng nhấn',
            text: 'Hãy nhấn giữ từng nút. <code>press</code> quyết định nút làm gì khi đang được nhấn giữ, còn <code>motion</code> quyết định lò xo đưa nút trở lại. <code>data-nui-press</code> trên bất kỳ phần tử nào sẽ áp dụng hiệu ứng cho mọi thứ bên trong.',
          },
          shapes: {
            title: 'Góc, bo góc và mật độ',
            text: '<code>corners</code> thay đổi hình dạng các góc, <code>radius</code> thay đổi mức bo góc, còn <code>density</code> thay đổi không gian mà nút chiếm, nhưng không bao giờ nhỏ hơn vùng nhấn 24px. Trình duyệt không hỗ trợ <code>corner-shape</code> sẽ vẽ góc bo tròn.',
          },
        },
        api: {
          NuiButton: {
            summary:
              'Tạo kiểu nút cho một <code>&lt;button&gt;</code> hoặc <code>&lt;a&gt;</code> native.',
            members: {
              variant:
                'Kiểu tô nền: <code>solid</code>, <code>soft</code>, <code>outline</code> hoặc <code>ghost</code>.',
              tone: 'Bảng màu: <code>accent</code>, <code>neutral</code> hoặc <code>danger</code>.',
              size: 'Chiều cao, padding và cỡ chữ: <code>sm</code>, <code>md</code> hoặc <code>lg</code>.',
              disabled:
                'Vô hiệu hóa nút. Với thẻ a, directive đặt <code>aria-disabled</code> và chặn việc kích hoạt.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Chuyển focus đến nút hoặc liên kết.'],
          ['Enter', 'Kích hoạt nút, hoặc mở liên kết.'],
          ['Phím cách', 'Kích hoạt nút. Trên liên kết thì cuộn trang (hành vi native).'],
        ],
        notes: [
          'Tên mà trình đọc màn hình đọc lên chính là văn bản của phần tử. Nút chỉ có biểu tượng cần thêm <code>aria-label</code>.',
          'Văn bản đạt độ tương phản 4,5:1 ở mọi biến thể, tông màu và theme; trình tạo bảng màu bảo đảm điều này.',
          'Viền focus là một outline 2px, có độ tương phản tối thiểu 3:1 so với trang ở cả hai theme.',
          '<code>&lt;button&gt;</code> bị vô hiệu hóa sẽ rời khỏi thứ tự tab. Liên kết bị vô hiệu hóa vẫn nhận được focus để người dùng trình đọc màn hình có thể tìm thấy, và được thông báo là đã bị vô hiệu hóa.',
          'Ở chế độ forced colors, viền trong suốt trở thành đường viền màu hệ thống có thể nhìn thấy.',
        ],
      },

      dialog: {
        name: 'Dialog',
        title: 'Component hộp thoại cho Angular',
        summary: 'Cửa sổ modal dựa trên phần tử dialog native, focus do trình duyệt quản lý.',
        description:
          'Hộp thoại Angular hỗ trợ tiếp cận dựa trên phần tử dialog native: quản lý focus kiểu modal, đóng bằng Esc, giá trị trả về và đóng khi nhấp nền.',
        apiDescription:
          'Tài liệu API về hộp thoại Needless UI: nuiDialog với liên kết hai chiều open, kích thước, giá trị trả về cùng các phần tiêu đề, mô tả và nút đóng.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của hộp thoại Needless UI: focus kiểu modal, phím Esc, khôi phục focus và nội dung có nhãn.',
        overview: [
          'Directive <code>nuiDialog</code> biến một <code>&lt;dialog&gt;</code> native thành hộp thoại Needless UI. Trình duyệt đảm nhận hành vi modal: trang phía sau không thể tương tác, focus ở lại bên trong, Esc đóng hộp thoại và focus quay về phần tử đã mở nó.',
          'Liên kết <code>[(open)]</code> với một signal, và gán giá trị cho các nút đóng bằng <code>nuiDialogClose="…"</code> để biết hộp thoại đã được đóng theo cách nào.',
        ],
        examples: {
          confirm: {
            title: 'Xác nhận',
            text: 'Xác nhận một hành động mang tính phá hủy. Lựa chọn an toàn có <code>autofocus</code>, và giá trị được chọn sẽ gửi về qua <code>(closed)</code>.',
          },
          form: {
            title: 'Biểu mẫu trong hộp thoại',
            text: 'Hộp thoại có thể chứa bất kỳ nội dung nào. Ở ví dụ này, trường đầu tiên nhận focus khi hộp thoại mở.',
          },
          dismissible: {
            title: 'Không thể đóng tùy ý',
            text: 'Với <code>[dismissible]="false"</code>, phím Esc và cú nhấp vào nền đều bị bỏ qua, nên người dùng buộc phải chọn một phương án.',
          },
          entrances: {
            title: 'Hiệu ứng xuất hiện',
            text: 'Mỗi nút mở cùng một hộp thoại với một preset <code>enter</code> khác nhau và lò xo <code>bouncy</code>. Dù xuất hiện theo cách nào, hộp thoại cũng biến mất bằng hiệu ứng mờ dần nhanh.',
          },
        },
        api: {
          NuiDialog: {
            summary: 'Biến một <code>&lt;dialog&gt;</code> native thành hộp thoại Needless UI.',
            members: {
              open: 'Hộp thoại có đang mở hay không. Liên kết bằng <code>[(open)]</code>.',
              modal: 'Mở dưới dạng modal, có lớp nền phủ và trang phía sau không thể tương tác.',
              dismissible: 'Phím Esc và cú nhấp vào nền có đóng được hộp thoại hay không.',
              size: 'Chiều rộng tối đa: <code>sm</code> (24rem), <code>md</code> (32rem) hoặc <code>lg</code> (44rem).',
              closed:
                'Phát ra giá trị trả về mỗi khi hộp thoại đóng. Giá trị rỗng nếu hộp thoại bị đóng mà không chọn gì.',
              close: 'Đóng hộp thoại, có thể kèm một giá trị trả về.',
            },
          },
          NuiDialogTitle: {
            summary:
              'Tiêu đề của hộp thoại. Được gán một id và trở thành <code>aria-labelledby</code> của hộp thoại.',
            members: {},
          },
          NuiDialogDescription: {
            summary: 'Mô tả ngắn, được <code>aria-describedby</code> của hộp thoại tham chiếu tới.',
            members: {},
          },
          NuiDialogActions: {
            summary: 'Một hàng nút ở cuối hộp thoại, căn về phía cuối dòng.',
            members: {},
          },
          NuiDialogClose: {
            summary: 'Đóng hộp thoại chứa nó khi được nhấp.',
            members: {
              nuiDialogClose:
                'Giá trị đi kèm khi đóng hộp thoại, được phát ra qua <code>(closed)</code>.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Chuyển focus đến phần tử tiếp theo trong hộp thoại.'],
          ['Shift + Tab', 'Chuyển focus về phần tử trước đó trong hộp thoại.'],
          ['Esc', 'Đóng hộp thoại, trừ khi hộp thoại được đặt là không thể đóng tùy ý.'],
        ],
        notes: [
          'Mở bằng <code>showModal()</code> sẽ cho hộp thoại <code>role="dialog"</code> và ngữ nghĩa modal, đồng thời khiến phần còn lại của trang không thể tương tác.',
          'Tiêu đề và mô tả được liên kết qua id tự sinh, nên trình đọc màn hình sẽ đọc cả hai khi hộp thoại mở.',
          'Focus ban đầu chuyển đến phần tử có <code>autofocus</code>, hoặc phần tử đầu tiên có thể nhận focus. Với hộp thoại xác nhận hành động mang tính phá hủy, hãy đặt <code>autofocus</code> vào lựa chọn an toàn.',
          'Khi hộp thoại đóng, focus quay về phần tử đã mở nó.',
          'Trình duyệt vẫn có thể đóng hộp thoại không thể đóng tùy ý nếu Esc được nhấn nhiều lần mà người dùng không có tương tác nào khác, vì vậy hãy luôn cung cấp một lối thoát rõ ràng.',
        ],
      },

      menu: {
        name: 'Menu',
        title: 'Component menu cho Angular',
        summary:
          'Danh sách hành động dạng popup, có menu con, mục có thể đánh dấu và hỗ trợ bàn phím đầy đủ.',
        description:
          'Menu Angular hỗ trợ tiếp cận dựa trên Angular Aria: điều hướng bằng bàn phím, gõ để tìm, menu con, mục checkbox và radio, tự định vị theo viewport.',
        apiDescription:
          'Tài liệu API về menu Needless UI: nuiMenuTrigger, nuiMenu và nuiMenuItem, với giá trị, tông màu, menu con và trạng thái đánh dấu.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của menu Needless UI: phím mũi tên, gõ để tìm, menu con, phím Esc và trả lại focus.',
        overview: [
          'Menu hiển thị danh sách hành động khi trigger của nó được kích hoạt. Hành vi đến từ mẫu menu của Angular Aria; Needless UI bổ sung style, hiển thị menu dưới dạng popover phía trên trang và giữ nó luôn nằm trong viewport.',
          'Truyền tham chiếu <code>ngMenu</code> của menu vào <code>[nuiMenuTrigger]</code>, gán cho mỗi mục một <code>value</code> duy nhất, rồi xử lý <code>(selected)</code> trên từng mục hoặc <code>(itemSelected)</code> trên menu.',
        ],
        examples: {
          actions: {
            title: 'Hành động',
            text: 'Menu hành động có gợi ý phím tắt, đường phân cách và một mục mang tính phá hủy.',
          },
          submenu: {
            title: 'Menu con',
            text: 'Liên kết một mục với <code>nuiMenu</code> lồng bên trong bằng <code>[submenu]</code>. Menu con mở khi di chuột qua hoặc khi nhấn phím mũi tên phải.',
          },
          checkable: {
            title: 'Mục checkbox và radio',
            text: 'Đặt <code>role</code> và liên kết <code>[checked]</code>. Menu sẽ hiển thị dấu chỉ báo và thông báo trạng thái.',
          },
          entrances: {
            title: 'Hiệu ứng xuất hiện và lò xo',
            text: 'Mỗi menu kết hợp một preset <code>enter</code> với một lò xo <code>motion</code> và lớn dần từ phía mà nó mở ra. Menu con kế thừa cả hai.',
          },
        },
        api: {
          NuiMenuTrigger: {
            summary: 'Mở một menu. Thường được gắn vào <code>nuiButton</code>.',
            members: {
              nuiMenuTrigger:
                'Menu cần mở: tham chiếu <code>ngMenu</code> của một <code>nuiMenu</code>.',
            },
          },
          NuiMenu: {
            summary:
              'Menu gồm các mục, hiển thị dưới dạng popover cạnh trigger. Export <code>ngMenu</code> của nó chính là menu Angular Aria mà trigger và menu con nhận vào.',
            members: {
              wrap: 'Phím mũi tên có quay vòng từ mục cuối về mục đầu hay không.',
              typeaheadDelay: 'Số mili giây trước khi chuỗi gõ để tìm được đặt lại.',
              disabled: 'Vô hiệu hóa toàn bộ menu.',
              itemSelected:
                'Phát ra giá trị của mục được chọn. Trên menu gốc, output này cũng phát ra cho các mục trong menu con.',
            },
          },
          NuiMenuItem: {
            summary: 'Một mục trong <code>nuiMenu</code>.',
            members: {
              value: 'Định danh của mục. Phải là duy nhất trong toàn bộ menu, kể cả menu con.',
              disabled:
                'Vô hiệu hóa mục. Vẫn có thể di chuyển tới mục bằng phím mũi tên nhưng không thể chọn.',
              submenu: 'Một <code>nuiMenu</code> lồng bên trong mà mục này mở ra.',
              role: '<code>menuitem</code>, <code>menuitemcheckbox</code> hoặc <code>menuitemradio</code>.',
              checked: 'Trạng thái đánh dấu của mục checkbox hoặc radio.',
              tone: '<code>danger</code> cho hành động mang tính phá hủy.',
              searchTerm: 'Văn bản dùng để so khớp khi gõ để tìm. Mặc định là nhãn của mục.',
              selected: 'Phát ra giá trị của mục khi mục được chọn bằng chuột hoặc bàn phím.',
            },
          },
          NuiMenuSeparator: { summary: 'Đường kẻ phân cách giữa các nhóm mục.', members: {} },
          NuiMenuShortcut: {
            summary: 'Gợi ý phím tắt, căn về cuối mục.',
            members: {},
          },
        },
        keyboard: [
          [
            'Enter hoặc Phím cách',
            'Trên trigger: mở menu ở mục đầu tiên. Trên một mục: chọn mục đó, hoặc mở menu con của nó.',
          ],
          [
            'Mũi tên xuống',
            'Trên trigger: mở menu ở mục đầu tiên. Trong menu: chuyển đến mục tiếp theo.',
          ],
          [
            'Mũi tên lên',
            'Trên trigger: mở menu ở mục cuối cùng. Trong menu: chuyển đến mục trước đó.',
          ],
          ['Home và End', 'Chuyển đến mục đầu tiên hoặc cuối cùng.'],
          [
            'Mũi tên phải',
            'Mở menu con và chuyển đến mục đầu tiên của nó (mũi tên trái với văn bản viết từ phải sang trái).',
          ],
          [
            'Mũi tên trái',
            'Đóng menu con và quay về mục cha (mũi tên phải với văn bản viết từ phải sang trái).',
          ],
          ['Esc', 'Đóng menu và trả focus về trigger.'],
          ['Chữ cái', 'Chuyển đến mục tiếp theo có nhãn bắt đầu bằng văn bản vừa gõ.'],
        ],
        notes: [
          'Trigger nhận <code>aria-haspopup</code>, <code>aria-expanded</code> và <code>aria-controls</code>; menu và các mục của nó nhận vai trò ARIA từ Angular Aria.',
          'Mục đang được làm nổi bật dùng nền đặc với độ tương phản văn bản tối thiểu 4,5:1, đồng thời đóng vai trò chỉ báo focus. Ở chế độ forced colors, mục này có đường viền highlight của hệ thống.',
          'Các mục có thể đánh dấu thông báo trạng thái qua <code>aria-checked</code>.',
          'Chọn một mục sẽ đóng menu và trả focus về trigger. Chuyển focus ra ngoài trigger và menu cũng sẽ đóng menu.',
          'Các mục cao ít nhất 28 pixel, vượt kích thước vùng nhấn tối thiểu của WCAG 2.2.',
        ],
      },

      avatar: {
        name: 'Avatar',
        title: 'Component avatar cho Angular',
        summary:
          'Ảnh của một người, hoặc chữ cái đầu tên của họ trên một màu luôn dành riêng cho họ.',
        description:
          'Avatar Angular hiển thị chữ cái đầu khi không có ảnh, mỗi tên một màu cố định, có chấm trạng thái và nhóm, dễ đọc ở mọi theme.',
        apiDescription:
          'Tài liệu API về avatar của Needless UI: nuiAvatar với tên, ảnh, kích thước, hình dạng và trạng thái, cùng nuiAvatarGroup.',
        a11yDescription:
          'Khả năng tiếp cận của avatar Needless UI: vai trò và tên của hình ảnh, avatar trang trí và chữ cái đầu giữ độ tương phản 4,5:1.',
        overview: [
          'Component <code>nuiAvatar</code> hiển thị một ảnh, hoặc chữ cái đầu tên của người đó khi không có ảnh hay ảnh không tải được. Chữ cái đầu nằm trên một màu được tính từ tên, nên cùng một người luôn có cùng một màu ở mọi nơi.',
          'Với mỗi sắc độ, độ sáng và độ bão hòa được giới hạn để chữ cái đầu màu trắng luôn có độ tương phản trên 4,5:1, bất kể tên và theme.',
        ],
        examples: {
          people: {
            title: 'Chữ cái đầu, ảnh và trạng thái',
            text: 'Khi không có <code>src</code>, chữ cái đầu và màu được lấy từ <code>name</code>. <code>status</code> thêm một chấm trạng thái.',
          },
          group: {
            title: 'Nhóm, kích thước và hình dạng',
            text: '<code>nuiAvatarGroup</code> xếp một hàng avatar chồng lên nhau. <code>size</code> nhận <code>sm</code>, <code>md</code> hoặc <code>lg</code>, còn <code>shape="square"</code> hợp với đội nhóm và ứng dụng.',
          },
        },
        api: {
          NuiAvatar: {
            summary: 'Ảnh hoặc chữ cái đầu, được đặt tên theo người đó.',
            members: {
              name: 'Tên của người đó. Accessible name, chữ cái đầu và màu đều được lấy từ đây.',
              src: 'URL của ảnh. Nếu ảnh không tải được, chữ cái đầu sẽ hiển thị thay thế.',
              size: 'Kích thước: <code>sm</code>, <code>md</code> hoặc <code>lg</code>.',
              shape: '<code>circle</code> hoặc <code>square</code>.',
              status:
                'Chấm trạng thái: <code>online</code>, <code>away</code>, <code>busy</code> hoặc <code>offline</code>.',
              label:
                'Accessible name nói nhiều hơn cái tên, chẳng hạn “Ada Lovelace, đang trực tuyến”.',
              decorative: 'Ẩn avatar khỏi công nghệ hỗ trợ, dành cho avatar nằm cạnh tên hiển thị.',
            },
          },
          NuiAvatarGroup: {
            summary:
              'Một hàng avatar chồng lên nhau. Đặt tên cho nhóm bằng <code>aria-label</code>.',
            members: {},
          },
        },
        keyboard: [],
        notes: [
          'Avatar là một hình ảnh (<code>role="img"</code>) được đặt tên theo người đó. Khi tên người đó đã hiển thị ngay bên cạnh, hãy đặt <code>decorative</code> để người dùng trình đọc màn hình không phải nghe tên hai lần.',
          'Chấm trạng thái chỉ mang tính thị giác. Khi trạng thái quan trọng, hãy đưa nó vào <code>label</code>.',
          'Chữ cái đầu giữ độ tương phản tối thiểu 4,5:1 trên mọi màu được sinh ra.',
        ],
      },

      breadcrumbs: {
        name: 'Breadcrumbs',
        title: 'Component breadcrumb cho Angular',
        summary: 'Chuỗi trang dẫn đến trang hiện tại.',
        description:
          'Breadcrumb Angular hỗ trợ tiếp cận trên nav và danh sách native, dấu phân cách bằng CSS tự lật khi văn bản từ phải sang trái, cuộn khi chuỗi dài.',
        apiDescription:
          'Tài liệu API về breadcrumb của Needless UI: directive nuiBreadcrumbs và nhãn của landmark điều hướng.',
        a11yDescription:
          'Khả năng tiếp cận của breadcrumb Needless UI: landmark điều hướng, ngữ nghĩa danh sách, trang hiện tại và vùng nhấn.',
        overview: [
          'Breadcrumb cho biết vị trí của một trang trong website. Directive <code>nuiBreadcrumbs</code> tạo kiểu cho một <code>&lt;nav&gt;</code> native và danh sách bên trong; mục cuối cùng là trang hiện tại, được đánh dấu bằng <code>aria-current="page"</code>.',
          'Chuỗi dài hơn vùng chứa sẽ cuộn ngang thay vì xuống dòng. Ban đầu chuỗi được cuộn sẵn đến cuối, và các đầu mờ dần ở phía còn nội dung bị khuất.',
        ],
        examples: {
          trail: {
            title: 'Một chuỗi trang',
            text: 'Liên kết đến các trang cấp trên, sau đó là trang hiện tại dưới dạng văn bản thường với <code>aria-current="page"</code>.',
          },
          long: {
            title: 'Chuỗi dài',
            text: 'Trong vùng chứa hẹp, chuỗi có thể cuộn, và ban đầu trang hiện tại đã nằm trong tầm nhìn.',
          },
        },
        api: {
          NuiBreadcrumbs: {
            summary: 'Tạo kiểu breadcrumb cho một <code>&lt;nav&gt;</code> và danh sách của nó.',
            members: { label: 'Accessible name của landmark điều hướng.' },
          },
        },
        keyboard: [['Tab', 'Chuyển đến liên kết tiếp theo trong chuỗi.']],
        notes: [
          'Đây là một landmark điều hướng chứa danh sách thông thường, nên trình đọc màn hình sẽ thông báo chuỗi có bao nhiêu trang.',
          'Dấu phân cách được vẽ bằng CSS, nên không bị đọc lên, và tự lật chiều khi văn bản viết từ phải sang trái.',
          'Mỗi liên kết cao ít nhất 24px.',
        ],
      },

      empty: {
        name: 'Trạng thái trống',
        title: 'Component trạng thái trống cho Angular',
        summary: 'Hiển thị gì khi không có gì để hiển thị, và nên làm gì tiếp theo.',
        description:
          'Trạng thái trống cho Angular với hình ảnh, tiêu đề, lời giải thích ngắn và hành động, kèm bốn hình minh họa có sẵn trôi nhẹ nhàng.',
        apiDescription:
          'Tài liệu API về trạng thái trống của Needless UI: nuiEmpty cùng các phần hình ảnh, tiêu đề, mô tả và hành động.',
        a11yDescription:
          'Khả năng tiếp cận của trạng thái trống Needless UI: hình ảnh trang trí, tiêu đề có ý nghĩa và giảm chuyển động.',
        overview: [
          'Trạng thái trống thay thế cho một danh sách, bảng hoặc trang chưa có nội dung gì. Nó giải thích lý do và gợi ý bước tiếp theo.',
          'Phần media nhận hình ảnh của riêng bạn, hoặc vẽ một hình có sẵn: <code>search</code>, <code>inbox</code>, <code>files</code> hoặc <code>error</code>.',
        ],
        examples: {
          search: {
            title: 'Không có kết quả',
            text: 'Một tiêu đề cho biết chuyện gì đã xảy ra, một dòng hướng dẫn và các hành động giúp tìm lối ra.',
          },
          pictures: {
            title: 'Hình minh họa có sẵn',
            text: 'Đặt <code>illustration</code> trên <code>nuiEmptyMedia</code>. Hình minh họa đổi theo theme và trôi nhẹ, trừ khi chuyển động được giảm.',
          },
        },
        api: {
          NuiEmpty: { summary: 'Vùng chứa: một cột căn giữa.', members: {} },
          NuiEmptyMedia: {
            summary: 'Hình ảnh, được ẩn khỏi công nghệ hỗ trợ.',
            members: {
              illustration:
                'Một hình có sẵn: <code>search</code>, <code>inbox</code>, <code>files</code> hoặc <code>error</code>.',
            },
          },
          NuiEmptyTitle: {
            summary: 'Tiêu đề. Hãy dùng cấp heading phù hợp với trang.',
            members: {},
          },
          NuiEmptyDescription: { summary: 'Một dòng giải thích.', members: {} },
          NuiEmptyActions: { summary: 'Một hàng nút.', members: {} },
        },
        keyboard: [],
        notes: [
          'Hình ảnh chỉ mang tính trang trí (<code>aria-hidden</code>): tiêu đề và mô tả truyền tải thông điệp.',
          'Dùng một heading cho tiêu đề, ở cấp phù hợp với cấu trúc của trang.',
          'Các hình có sẵn ngừng trôi khi người dùng bật giảm chuyển động.',
        ],
      },

      'number-field': {
        name: 'Ô nhập số',
        title: 'Component ô nhập số cho Angular',
        summary: 'Ô nhập số có nút tăng giảm, định dạng theo từng locale.',
        description:
          'Ô nhập số Angular hỗ trợ tiếp cận: spinbutton có nút tăng giảm, bước nhảy bằng bàn phím, min và max, định dạng locale cho tiền tệ, phần trăm và đơn vị.',
        apiDescription:
          'Tài liệu API về ô nhập số của Needless UI: nuiNumberField, nuiNumberInput với min, max, step và format, cùng nuiNumberStep.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của ô nhập số Needless UI: vai trò spinbutton, phím mũi tên, phím Page và nút tăng giảm.',
        overview: [
          'Ô nhập số là một ô nhập văn bản chứa một con số. Nó hiển thị số theo định dạng của locale, đọc lại văn bản đã gõ theo cùng định dạng đó, và khi mất focus sẽ làm tròn giá trị theo <code>step</code> trong khoảng từ <code>min</code> đến <code>max</code>.',
          'Nó cũng đọc được chữ số và dấu phân cách của các hệ chữ khác: chữ số Ả Rập-Ấn Độ, Ba Tư và Devanagari, dấu cách và dấu chấm làm dấu phân cách hàng nghìn, cùng mọi kiểu dấu trừ. Khi giữ một nút tăng giảm, giá trị thay đổi liên tục, ngày càng nhanh.',
        ],
        examples: {
          guests: {
            title: 'Nút tăng giảm',
            text: 'Nút ở hai bên, tự vô hiệu hóa khi chạm <code>min</code> và <code>max</code>. Các phím mũi tên cũng tăng giảm được giá trị.',
          },
          formats: {
            title: 'Tiền tệ và phần trăm',
            text: 'Truyền các tùy chọn <code>Intl.NumberFormat</code> vào <code>format</code> cùng một <code>locale</code>. Giá trị vẫn là một số bình thường.',
          },
        },
        api: {
          NuiNumberField: {
            summary: 'Nhóm ô nhập với các nút tăng giảm của nó.',
            members: {},
          },
          NuiNumberInput: {
            summary: 'Ô nhập văn bản chứa một con số, đóng vai trò spinbutton ARIA.',
            members: {
              value: 'Con số, hoặc <code>null</code> khi trống. Cũng dùng được với biểu mẫu.',
              min: 'Giá trị nhỏ nhất được phép.',
              max: 'Giá trị lớn nhất được phép.',
              step: 'Mức thay đổi của giá trị sau mỗi bước. Khi mất focus, giá trị được làm tròn theo bước.',
              format:
                "Tùy chọn <code>Intl.NumberFormat</code>, chẳng hạn <code>{ style: 'currency', currency: 'EUR' }</code>.",
              locale: 'Locale dùng để định dạng và đọc số.',
              disabled: 'Vô hiệu hóa ô nhập và các nút của nó.',
              stepBy: 'Tăng (số dương) hoặc giảm (số âm) giá trị theo một số bước.',
            },
          },
          NuiNumberStep: {
            summary: 'Nút tăng giảm. Giữ nút để lặp lại.',
            members: {
              nuiNumberStep: '<code>1</code> để tăng và <code>-1</code> để giảm.',
              label: 'Accessible name. Mặc định là “Increase” hoặc “Decrease”.',
            },
          },
        },
        keyboard: [
          ['Mũi tên lên và xuống', 'Tăng hoặc giảm giá trị một bước.'],
          ['Page Up và Page Down', 'Tăng hoặc giảm mười bước.'],
          ['Home và End', 'Chuyển đến giá trị nhỏ nhất hoặc lớn nhất.'],
          ['Enter', 'Xác nhận giá trị vừa gõ.'],
        ],
        notes: [
          'Ô nhập là một <code>spinbutton</code> với <code>aria-valuenow</code>, <code>aria-valuemin</code>, <code>aria-valuemax</code>, và giá trị đã định dạng trong <code>aria-valuetext</code>.',
          'Các nút tăng giảm nằm ngoài thứ tự tab vì các phím đã làm cùng việc đó, nhưng chúng vẫn có tên và được liên kết với ô nhập qua <code>aria-controls</code>.',
          'Gắn nhãn cho ô nhập bằng <code>aria-label</code> hoặc một <code>&lt;label&gt;</code>.',
        ],
      },

      otp: {
        name: 'Ô nhập OTP',
        title: 'Ô nhập OTP và mã xác minh cho Angular',
        summary: 'Mã xác minh trong các ô riêng biệt, trên một ô nhập thật duy nhất.',
        description:
          'Ô nhập OTP Angular hỗ trợ tiếp cận: một trường native dưới các ô, tự điền từ SMS, WebOTP, làm sạch khi dán, nhóm, che ký tự và rung khi lỗi.',
        apiDescription:
          'Tài liệu API về ô nhập OTP của Needless UI: nuiOtp với độ dài, mẫu, nhóm và che ký tự, cùng nuiOtpInput hỗ trợ WebOTP.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của ô nhập OTP Needless UI: một trường văn bản có nhãn, viền focus rõ ràng và tự điền.',
        overview: [
          'Ô nhập OTP trông như một hàng ô, nhưng bên dưới chỉ là một <code>&lt;input&gt;</code> native. Tính năng tự điền từ SMS (<code>autocomplete="one-time-code"</code>), thao tác dán, trình quản lý mật khẩu, biểu mẫu và trình đọc màn hình đều thấy một trường văn bản bình thường.',
          'Mã được dán vào sẽ được làm sạch, nên cả “123-456” lẫn “123 456” đều dùng được, còn ký tự mà mẫu không cho phép sẽ bị từ chối. Trên Android, <code>webOtp</code> điền mã từ SMS ngay khi tin nhắn đến.',
        ],
        examples: {
          verify: {
            title: 'Xác minh',
            text: '<code>(completed)</code> được kích hoạt khi ô cuối cùng được điền. Đặt <code>aria-invalid</code> trên ô nhập để từ chối một mã: các ô chuyển sang màu đỏ và rung lên.',
          },
          letters: {
            title: 'Chữ cái, nhóm và che ký tự',
            text: '<code>pattern="alphanumeric"</code> nhận cả chữ cái, <code>[groups]</code> thêm dấu phân cách, còn <code>masked</code> hiển thị dấu chấm.',
          },
        },
        api: {
          NuiOtp: {
            summary: 'Vẽ các ô và bao bọc ô nhập.',
            members: {
              length: 'Số ký tự.',
              pattern: '<code>digits</code>, hoặc <code>alphanumeric</code> cho chữ cái và chữ số.',
              groups:
                'Kích thước các nhóm, có dấu phân cách giữa chúng, chẳng hạn <code>[3, 3]</code>.',
              masked: 'Hiển thị dấu chấm thay cho ký tự.',
              completed: 'Phát ra mã mỗi khi ô cuối cùng được điền.',
            },
          },
          NuiOtpInput: {
            summary: 'Ô nhập thật. Nó nhận các thuộc tính cần thiết cho mã dùng một lần.',
            members: {
              webOtp: 'Điền mã từ SMS gửi đến qua WebOTP API, ở những trình duyệt hỗ trợ.',
            },
          },
        },
        keyboard: [
          ['Chữ số hoặc chữ cái', 'Điền vào ô hiện tại và chuyển sang ô tiếp theo.'],
          ['Backspace', 'Xóa ký tự đứng trước con trỏ.'],
          [
            'Mũi tên trái và phải',
            'Di chuyển một ô; ô đã điền sẽ được chọn, nên gõ vào sẽ thay thế nó.',
          ],
          ['Dán', 'Điền các ô từ một mã đã sao chép.'],
        ],
        notes: [
          'Trình đọc màn hình chỉ gặp một trường văn bản. Hãy gắn nhãn cho nó bằng <code>aria-label</code> hoặc một <code>&lt;label&gt;</code>.',
          'Các ô được ẩn khỏi công nghệ hỗ trợ; ô đang được chỉnh sửa hiển thị viền focus.',
          'Khi giảm chuyển động, con trỏ không nhấp nháy và các ô không nảy hay rung.',
        ],
      },

      rating: {
        name: 'Đánh giá',
        title: 'Component đánh giá sao cho Angular',
        summary: 'Những ngôi sao để đánh giá, dựa trên các nút radio thật.',
        description:
          'Đánh giá sao Angular hỗ trợ tiếp cận trên nút radio native: hỗ trợ bàn phím và biểu mẫu, xem trước khi di chuột, xóa đánh giá và hiển thị số lẻ chỉ đọc.',
        apiDescription:
          'Tài liệu API về đánh giá của Needless UI: nuiRating với value, max, chế độ chỉ đọc và có thể xóa, cùng các nhãn dịch được.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của đánh giá Needless UI: nhóm radio có tên, ngôi sao có nhãn và hình ảnh chỉ đọc.',
        overview: [
          'Component đánh giá là một nhóm nút radio native được vẽ thành các ngôi sao. Phím mũi tên, biểu mẫu và trình đọc màn hình hoạt động như với mọi nhóm radio khác; CSS tô màu các ngôi sao và xem trước mức đánh giá mới dưới con trỏ chuột.',
          'Ở chế độ chỉ đọc, nó hiển thị được mọi giá trị lẻ, chẳng hạn điểm trung bình 4,3.',
        ],
        examples: {
          pick: {
            title: 'Đánh giá một thứ gì đó',
            text: 'Liên kết <code>[(value)]</code> hoặc một biểu mẫu. Với <code>clearable</code>, chọn lại chính ngôi sao đó sẽ xóa đánh giá.',
          },
          average: {
            title: 'Hiển thị điểm trung bình',
            text: '<code>readonly</code> tô các ngôi sao đến mọi mức lẻ và đặt tên cho hình ảnh là “Rated 4.3 out of 5”.',
          },
        },
        api: {
          NuiRating: {
            summary:
              'Một nhóm radio gồm các ngôi sao, hoặc một hình ảnh chỉ đọc thể hiện mức đánh giá.',
            members: {
              value: 'Mức đánh giá, hoặc <code>null</code>. Cũng dùng được với biểu mẫu.',
              max: 'Số ngôi sao.',
              readonly: 'Hiển thị giá trị, đến mọi mức lẻ, thay vì yêu cầu người dùng đánh giá.',
              disabled: 'Vô hiệu hóa mọi ngôi sao.',
              clearable: 'Chọn lại ngôi sao hiện tại sẽ xóa đánh giá.',
              name: 'Tên dùng chung cho các nút radio. Mặc định được sinh tự động.',
              starLabel: 'Accessible name của mỗi ngôi sao, dưới dạng hàm theo giá trị của nó.',
              readonlyLabel: 'Accessible name ở chế độ chỉ đọc.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Di chuyển vào nhóm, đến ngôi sao đang được chọn.'],
          ['Phím mũi tên', 'Thay đổi mức đánh giá.'],
          ['Phím cách', 'Chọn ngôi sao đang có focus.'],
        ],
        notes: [
          'Mỗi ngôi sao là một nút radio native có tên như “3 stars”. Hãy đặt tên cho nhóm bằng <code>aria-label</code>.',
          'Ở chế độ chỉ đọc, đánh giá là một hình ảnh (<code>role="img"</code>) có tên “Rated 4.3 out of 5”.',
          'Các ngôi sao được vẽ bằng CSS mask, nên tuân theo chế độ forced colors.',
        ],
      },

      skeleton: {
        name: 'Skeleton',
        title: 'Component skeleton loader cho Angular',
        summary: 'Phần giữ chỗ giữ nguyên bố cục trong khi nội dung đang tải.',
        description:
          'Skeleton loader Angular cho văn bản, hình tròn và khối, với một vệt sáng quét qua cả trang và tắt hẳn khi giảm chuyển động.',
        apiDescription:
          'Tài liệu API về skeleton của Needless UI: directive nuiSkeleton và các hình dạng văn bản, hình tròn và khối.',
        a11yDescription:
          'Khả năng tiếp cận của skeleton Needless UI: phần giữ chỗ bị ẩn, vùng aria-busy, giảm chuyển động và chế độ forced colors.',
        overview: [
          'Skeleton giữ hình dạng của nội dung đang tải, để trang không bị giật khi nội dung xuất hiện. Hãy đặt kích thước cho chúng bằng CSS.',
          'Vệt sáng được cố định theo viewport: một dải sáng duy nhất quét qua mọi skeleton trên trang cùng lúc, bất kể kích thước hay vị trí của chúng.',
        ],
        examples: {
          card: {
            title: 'Tải một thẻ',
            text: 'Các dòng, một hình tròn và một khối thay chỗ cho hồ sơ. Thẻ có <code>aria-busy</code> trong khi đang tải.',
          },
        },
        api: {
          NuiSkeleton: {
            summary: 'Phần giữ chỗ, được ẩn khỏi công nghệ hỗ trợ.',
            members: {
              shape: '<code>text</code> (một dòng), <code>circle</code> hoặc <code>block</code>.',
            },
          },
        },
        keyboard: [],
        notes: [
          'Skeleton được ẩn khỏi trình đọc màn hình. Hãy đặt <code>aria-busy="true"</code> trên vùng đang tải và gỡ bỏ khi nội dung đã đến.',
          'Không có vệt sáng khi người dùng bật giảm chuyển động.',
          'Ở chế độ forced colors, mỗi skeleton có một đường viền.',
        ],
      },

      toast: {
        name: 'Toast',
        title: 'Thông báo toast cho Angular',
        summary: 'Thông báo ngắn xếp chồng, vuốt để bỏ và không bao giờ cướp focus.',
        description:
          'Toast Angular hỗ trợ tiếp cận: chồng thông báo ở top layer, toast cho promise, hành động hoàn tác, vuốt để đóng và hẹn giờ tạm dừng khi hover, focus.',
        apiDescription:
          'Tài liệu API về toast của Needless UI: service NuiToaster, các tùy chọn và toast cho promise, cùng vùng nui-toaster.',
        a11yDescription:
          'Tương tác bàn phím và khả năng tiếp cận của toast Needless UI: thông báo cho trình đọc màn hình, phím tắt Alt+T, Esc và tạm dừng hẹn giờ.',
        overview: [
          'Toast xác nhận điều vừa xảy ra, hoặc đưa ra một hành động như Hoàn tác, mà không làm gián đoạn. Đặt một <code>&lt;nui-toaster&gt;</code> trong khung ứng dụng, rồi gọi <code>NuiToaster</code> từ bất kỳ đâu.',
          'Các toast xếp chồng phía sau toast mới nhất và xòe ra như quạt khi di chuột qua hoặc khi có focus, tất cả đều chuyển động theo lò xo motion. Vuốt sang ngang để hất một toast đi. Bộ hẹn giờ tạm dừng khi con trỏ nằm trên chồng toast hoặc chồng toast có focus, và khi trang chạy nền.',
        ],
        examples: {
          tones: {
            title: 'Tông màu',
            text: '<code>show()</code>, <code>success()</code>, <code>warning()</code> và <code>danger()</code>. Toast danger hiển thị lâu hơn và được đọc lên ở chế độ assertive.',
          },
          actions: {
            title: 'Hành động và promise',
            text: 'Một <code>action</code> thêm một nút như Hoàn tác. <code>promise()</code> hiển thị một spinner, rồi chuyển thành kết quả.',
          },
        },
        api: {
          NuiToaster: {
            summary: 'Service hiển thị toast. Có thể inject ở bất kỳ đâu.',
            members: {
              toasts: 'Mọi toast đang có trên màn hình, mới nhất trước.',
              show: 'Hiển thị một toast. Truyền vào tiêu đề, hoặc tùy chọn gồm mô tả, tông màu, thời lượng, hành động hoặc id.',
              success: 'Hiển thị toast thành công.',
              warning: 'Hiển thị toast cảnh báo.',
              danger:
                'Hiển thị toast danger. Toast này hiển thị trong 8 giây và được đọc lên ở chế độ assertive.',
              promise:
                'Hiển thị toast đang tải cho đến khi promise hoàn tất, rồi hiển thị thông điệp thành công hoặc danger.',
              dismiss: 'Đóng một toast, hoặc tất cả.',
            },
          },
          NuiToasterRegion: {
            summary: 'Vùng nơi toast xuất hiện. Đặt một lần, trong khung ứng dụng.',
            members: {
              position: 'Góc hoặc cạnh của viewport. Đầu và cuối đi theo hướng văn bản.',
              expanded: 'Giữ chồng toast luôn xòe ra.',
              label: 'Accessible name của vùng. Hãy nêu cách để đến được vùng này.',
              closeLabel: 'Accessible name của các nút đóng.',
              hotkey:
                'Phím, dưới dạng <code>KeyboardEvent.code</code>, dùng cùng Alt để chuyển focus đến toast mới nhất.',
            },
          },
        },
        keyboard: [
          ['Alt+T', 'Chuyển focus đến toast mới nhất.'],
          ['Tab', 'Di chuyển qua các toast, hành động và nút đóng của chúng.'],
          ['Esc', 'Đóng toast đang có focus.'],
        ],
        notes: [
          'Mỗi toast đều được đọc lên khi xuất hiện: ở chế độ polite, hoặc assertive với danger. Toast không bao giờ lấy focus.',
          'Bộ hẹn giờ tạm dừng khi con trỏ nằm trên chồng toast hoặc chồng toast có focus, và khi trang bị ẩn; toast đang chờ promise thì không bao giờ hết hạn.',
          'Mọi thứ người dùng buộc phải xử lý cũng nên có ở ngoài toast.',
          'Khi giảm chuyển động, toast không có hiệu ứng động và không vuốt được, còn thanh hẹn giờ bị ẩn.',
        ],
      },
      combobox: {
        name: 'Combobox',
        title: 'Combobox và tự động hoàn thành cho Angular',
        summary: 'Ô nhập văn bản gợi ý các tùy chọn khi bạn gõ.',
        description:
          'Combobox Angular hỗ trợ tiếp cận: tìm kiếm mờ có tô sáng, nhiều giá trị dạng chip, tạo giá trị mới từ văn bản đã gõ và kết quả từ máy chủ.',
        apiDescription:
          'Tài liệu API về combobox của Needless UI: nui-combobox với value, values, multiple, create, filtering, loading, clearable và dòng tùy biến.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của combobox Needless UI: combobox cho phép gõ, có danh sách gợi ý, aria-activedescendant, chip và nhập qua bộ gõ IME.',
        overview: [
          'Combobox là một ô nhập văn bản kèm danh sách gợi ý. Tìm kiếm ở đây là tìm kiếm mờ, không phân biệt dấu: kết quả khớp nhất đứng đầu và các chữ cái khớp được đánh dấu. Combobox nhận cùng các đối tượng <a href="/components/select/api#NuiOption"><code>NuiOption</code></a> như select.',
          'Với <code>multiple</code>, các tùy chọn đã chọn trở thành chip đứng trước văn bản, còn <code>create</code> biến văn bản đã gõ thành giá trị mới. Với kết quả từ máy chủ, hãy tắt <code>filtering</code>, tìm kiếm trong <code>(queryChange)</code> và đặt <code>loading</code> trong lúc chờ.',
        ],
        examples: {
          country: {
            title: 'Tìm kiếm',
            text: 'Các chữ cái khớp không cần đứng liền nhau, và <code>keywords</code> cũng được tính. <code>clearable</code> thêm nút xóa và cho phép phím Esc xóa giá trị.',
          },
          tags: {
            title: 'Chip và giá trị mới',
            text: '<code>multiple</code> hiển thị chip và liên kết <code>[(values)]</code>. Khi văn bản chưa phải là một tùy chọn, <code>create</code> sẽ đề nghị thêm nó.',
          },
          people: {
            title: 'Kết quả từ máy chủ',
            text: 'Danh sách hiển thị đúng những gì máy chủ gửi về, không lọc, kèm một dòng đang tải trong lúc chờ. Nhãn đã chọn vẫn được giữ khi có kết quả mới.',
          },
        },
        api: {
          NuiCombobox: {
            summary: 'Ô nhập văn bản gợi ý các tùy chọn khi bạn gõ.',
            members: {
              options:
                'Các tùy chọn, dưới dạng đối tượng <a href="/components/select/api#NuiOption"><code>NuiOption</code></a>.',
              value: 'Giá trị đã chọn, hoặc <code>null</code>. Cũng dùng được với biểu mẫu.',
              values: 'Các giá trị đã chọn, khi có <code>multiple</code>.',
              multiple: 'Cho phép chọn nhiều tùy chọn, hiển thị dưới dạng chip.',
              create:
                'Tạo giá trị từ văn bản đã gõ. Khi đó danh sách đề nghị thêm văn bản chưa có trong các tùy chọn.',
              filtering: 'Lọc các tùy chọn khi bạn gõ. Hãy tắt đi khi máy chủ lọc thay.',
              loading: 'Hiển thị một dòng đang tải trong lúc chờ kết quả.',
              clearable: 'Thêm nút xóa giá trị, và cho phép phím Esc xóa giá trị.',
              placeholder: 'Văn bản hiển thị khi ô nhập còn trống.',
              label:
                'Accessible name, khi không có <code>&lt;label&gt;</code> nào đặt tên cho ô nhập.',
              inputId: 'Id của ô nhập văn bản, dùng cho <code>&lt;label for&gt;</code>.',
              disabled: 'Vô hiệu hóa ô nhập.',
              compareWith:
                'Cho biết hai giá trị có phải cùng một tùy chọn hay không, dành cho giá trị là đối tượng.',
              displayWith:
                'Văn bản cho giá trị không có trong các tùy chọn, chẳng hạn giá trị được đặt trước khi tùy chọn tải xong.',
              virtual:
                'Chỉ render các dòng đang hiển thị: luôn luôn, không bao giờ, hoặc <code>auto</code> khi quá 200 dòng.',
              queryChange: 'Phát ra văn bản trong lúc gõ, để tìm kiếm trên máy chủ.',
              openChange: 'Phát ra khi danh sách mở hoặc đóng.',
              show: 'Mở danh sách.',
              hide: 'Đóng danh sách.',
              clear: 'Xóa giá trị và văn bản.',
              focus: 'Chuyển focus vào ô nhập văn bản.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Đặt lên một <code>ng-template</code> bên trong component để tự vẽ từng dòng. Context chứa tùy chọn và dòng của nó.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Vẽ nhãn của tùy chọn với các chữ cái khớp được đánh dấu, cùng mô tả và đường dẫn của nó, cho các dòng do bạn tự vẽ.',
            members: { nuiOptionText: 'Dòng, lấy từ context của template.' },
          },
        },
        keyboard: [
          ['Mũi tên xuống và lên', 'Mở danh sách, rồi di chuyển qua các tùy chọn.'],
          ['Page Down và Page Up', 'Di chuyển mười tùy chọn.'],
          ['Enter', 'Chọn tùy chọn hiện tại.'],
          ['Alt + mũi tên xuống hoặc lên', 'Mở hoặc đóng danh sách.'],
          ['Esc', 'Đóng danh sách; nhấn tiếp thì xóa văn bản, hoặc xóa giá trị nếu có clearable.'],
          ['Backspace', 'Trong ô trống, xóa chip cuối cùng.'],
          [
            'Mũi tên trái',
            'Từ đầu văn bản (mũi tên phải với văn bản viết từ phải sang trái), di chuyển vào các chip. Tại đó, Backspace hoặc Delete xóa một chip.',
          ],
        ],
        notes: [
          'Ô nhập văn bản là một <code>combobox</code> với <code>aria-autocomplete="list"</code>, <code>aria-expanded</code> và <code>aria-controls</code>. Focus ở lại trong ô nhập, và <code>aria-activedescendant</code> trỏ tới tùy chọn hiện tại.',
          'Các chip là một danh sách có tên, và mỗi nút xóa được đặt tên theo chip của nó, chẳng hạn “Remove Italy”.',
          '“No matches” và dòng đang tải là thông báo trạng thái, nên trình đọc màn hình sẽ đọc chúng lên.',
          'Các phím dùng để xác nhận khi soạn chữ bằng bộ gõ, như với tiếng Trung hoặc tiếng Nhật, được để cho bộ gõ xử lý.',
        ],
      },
      command: {
        name: 'Bảng lệnh',
        title: 'Component bảng lệnh cho Angular',
        summary: 'Mọi lệnh trong ứng dụng, chỉ cách một lần bấm phím.',
        description:
          'Bảng lệnh Angular hỗ trợ tiếp cận: ⌘K từ bất kỳ đâu, tìm kiếm mờ vào cả các trang lồng nhau, nhóm lệnh và phím tắt hiển thị theo cách của từng nền tảng.',
        apiDescription:
          'Tài liệu API về bảng lệnh của Needless UI: nui-command-palette với commands, hotkey, bindShortcuts và loop, cùng cấu trúc NuiCommand.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bảng lệnh Needless UI: hộp thoại modal có combobox tìm kiếm, aria-activedescendant và điều hướng giữa các trang.',
        overview: [
          'Bảng lệnh là một ô tìm kiếm trên các lệnh của ứng dụng, nằm trong một hộp thoại modal. ⌘K mở nó từ bất kỳ đâu (Ctrl+K trên Windows và Linux). Chọn một lệnh thì bảng lệnh đóng lại, rồi chạy lệnh đó.',
          'Lệnh có thể có nhóm, mô tả, từ khóa và phím tắt, hiển thị bằng ký hiệu của từng nền tảng. Lệnh có <code>children</code> sẽ mở ra một trang chứa thêm lệnh, và tìm kiếm từ cấp trên cùng vẫn tìm được vào bên trong các trang.',
        ],
        examples: {
          palette: {
            title: 'Lệnh và trang',
            text: 'Nhóm, phím tắt, một lệnh bị vô hiệu hóa và hai trang. <code>(run)</code> cho bạn biết lệnh nào đã chạy; <code>run</code> riêng của từng lệnh cũng hoạt động.',
          },
          people: {
            title: 'Dòng tùy biến',
            text: '<code>nuiOptionTemplate</code> vẽ từng dòng, còn <code>nuiOptionText</code> giữ phần khớp được đánh dấu. <code>[hotkey]="null"</code> nhường ⌘K cho bảng lệnh ở trên.',
          },
        },
        api: {
          NuiCommandPalette: {
            summary: 'Hộp thoại modal có ô tìm kiếm trên các lệnh của bạn.',
            members: {
              commands: 'Các lệnh, dưới dạng đối tượng <code>NuiCommand</code>.',
              open: 'Bảng lệnh có đang mở hay không.',
              hotkey:
                'Phím tắt mở và đóng bảng lệnh từ bất kỳ đâu, hoặc <code>null</code> nếu không dùng. <code>mod</code> là ⌘ trên thiết bị Apple và Ctrl trên các thiết bị khác.',
              bindShortcuts:
                'Chạy cả các lệnh bằng phím tắt riêng của chúng, ở bất kỳ đâu trên trang.',
              loop: 'Nhấn xuống ở lệnh cuối sẽ về lệnh đầu, và nhấn lên ở lệnh đầu sẽ về lệnh cuối.',
              filtering: 'Lọc khi bạn gõ. Hãy tắt đi khi máy chủ lọc các lệnh.',
              loading: 'Hiển thị một dòng đang tải trong lúc chờ kết quả.',
              hints: 'Hiển thị gợi ý phím ở phía dưới.',
              virtual:
                'Chỉ render các dòng đang hiển thị: luôn luôn, không bao giờ, hoặc <code>auto</code> khi quá 200 dòng.',
              label: 'Accessible name của hộp thoại và ô tìm kiếm của nó.',
              placeholder: 'Văn bản hiển thị trong ô tìm kiếm còn trống.',
              run: 'Phát ra mỗi lệnh được chạy.',
              queryChange: 'Phát ra văn bản trong lúc gõ, để tìm kiếm trên máy chủ.',
              show: 'Mở bảng lệnh.',
              hide: 'Đóng bảng lệnh.',
              toggle: 'Mở hoặc đóng bảng lệnh.',
              back: 'Quay về trang trước đó.',
            },
          },
          NuiCommand: {
            summary: 'Một lệnh, hoặc một trang gồm nhiều lệnh.',
            members: {
              label: 'Văn bản được hiển thị và dùng để tìm kiếm.',
              description: 'Văn bản phụ bên dưới nhãn.',
              group: 'Các lệnh cùng nhóm được liệt kê dưới tiêu đề của nhóm đó.',
              keywords: 'Các từ khác mà tìm kiếm sẽ khớp, chẳng hạn từ đồng nghĩa.',
              shortcut: 'Các phím hiển thị kèm lệnh, chẳng hạn <code>mod+shift+p</code>.',
              disabled: 'Vẫn hiển thị nhưng không chạy được.',
              children: 'Các lệnh ở cấp dưới: chọn lệnh này sẽ mở chúng thành một trang.',
              run: 'Chạy khi lệnh được chọn, sau khi bảng lệnh đã đóng.',
              id: 'Để bạn tự dùng, chẳng hạn để phân biệt các lệnh trong <code>(run)</code>.',
            },
          },
        },
        keyboard: [
          ['⌘K hoặc Ctrl+K', 'Mở hoặc đóng bảng lệnh.'],
          ['Mũi tên xuống và lên', 'Di chuyển qua các lệnh, quay vòng ở hai đầu.'],
          ['Page Down và Page Up', 'Di chuyển mười lệnh.'],
          ['Enter', 'Chạy lệnh hiện tại, hoặc mở trang của nó.'],
          ['Esc', 'Quay lại một trang; ở cấp trên cùng thì đóng bảng lệnh.'],
          ['Backspace', 'Trong ô trống ở một trang, quay lại trang trước.'],
        ],
        notes: [
          'Đây là một <code>&lt;dialog&gt;</code> modal native: trang phía sau không thể tương tác, focus ở lại bên trong, và khi đóng thì focus quay về chỗ cũ.',
          'Ô tìm kiếm là một <code>combobox</code> trỏ tới lệnh hiện tại bằng <code>aria-activedescendant</code>. Khi ở trong một trang, ô này mang tên của trang đó.',
          'Phím tắt là văn bản trong mỗi tùy chọn, nên trình đọc màn hình sẽ đọc chúng. Gợi ý phím ở phía dưới được ẩn khỏi công nghệ hỗ trợ.',
          'Phím tắt không có Ctrl, Alt hoặc ⌘ sẽ không chạy khi bạn đang gõ trong một ô nhập.',
        ],
      },
      popover: {
        name: 'Popover',
        title: 'Component popover và hovercard cho Angular',
        summary: 'Bảng nổi cạnh một nút, và tooltip nâng cao khi di chuột qua.',
        description:
          'Popover và hovercard Angular hỗ trợ tiếp cận dựa trên popover API native: vị trí tự lật và bám theo, mũi tên, đóng khi nhấp ra ngoài và độ trễ khi hover.',
        apiDescription:
          'Tài liệu API về popover của Needless UI: nuiPopover và nuiHovercard với side, align, offset và arrow, cùng các directive trigger của chúng.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của popover và hovercard Needless UI: vai trò dialog và tooltip, trả lại focus, phím Esc và WCAG 1.4.13.',
        overview: [
          'Popover là một bảng nhỏ mở ra cạnh một nút, dành cho nội dung tương tác: bộ lọc, một biểu mẫu ngắn, bộ chọn màu. Đây là một <code>popover="auto"</code> native, nên trình duyệt đóng nó khi nhấn Esc hoặc nhấp ra ngoài, trả lại focus và đặt nó ngay sau trigger trong thứ tự tab.',
          'Hovercard là một tooltip nâng cao. Nó mở ra sau một lúc di chuột qua, hoặc ngay lập tức khi nhận focus từ bàn phím, và mô tả trigger của nó. Nó vẫn mở khi con trỏ di chuyển lên nó, để văn bản có thể được đọc và chọn.',
          'Cả hai đều lật sang phía bên kia khi không đủ chỗ, luôn nằm trong màn hình và bám theo trigger khi trang cuộn.',
        ],
        examples: {
          filters: {
            title: 'Bộ lọc',
            text: 'Một popover có biểu mẫu bên trong. <code>arrow</code> hướng nó về phía trigger, còn <code>hide()</code> đóng nó từ mã.',
          },
          profile: {
            title: 'Hovercard',
            text: 'Di chuột qua một cái tên, hoặc dùng Tab để đến đó. Thẻ mô tả liên kết, nên trình đọc màn hình sẽ đọc nó sau tên.',
          },
          sides: {
            title: 'Phía mở và hiệu ứng xuất hiện',
            text: '<code>side</code> và <code>align</code> quyết định nơi nó mở ra; <code>start</code> và <code>end</code> đi theo hướng viết. <code>enter</code> và <code>motion</code> quyết định cách nó xuất hiện.',
          },
        },
        api: {
          NuiPopover: {
            summary: 'Một popover native được đặt cạnh phần tử đã mở nó.',
            members: {
              side: 'Phía của trigger mà nó mở ra. Tự lật khi không đủ chỗ.',
              align: 'Cách nó căn với trigger dọc theo phía đó.',
              offset: 'Khoảng cách giữa trigger và bảng, tính bằng pixel.',
              arrow: 'Hiển thị mũi tên trỏ về trigger.',
              openChange: 'Phát ra khi nó mở hoặc đóng.',
              show: 'Mở nó cạnh một phần tử bất kỳ.',
              hide: 'Đóng nó.',
            },
          },
          NuiPopoverTrigger: {
            summary: 'Một nút mở và đóng popover, bằng <code>popovertarget</code> native.',
            members: { nuiPopoverTrigger: 'Popover cần mở.' },
          },
          NuiHovercard: {
            summary: 'Một tooltip nâng cao mô tả trigger của nó.',
            members: {
              side: 'Phía của trigger mà nó mở ra. Tự lật khi không đủ chỗ.',
              align: 'Cách nó căn với trigger dọc theo phía đó.',
              offset: 'Khoảng cách giữa trigger và thẻ, tính bằng pixel.',
              arrow: 'Hiển thị mũi tên trỏ về trigger.',
              openDelay:
                'Số mili giây di chuột qua trước khi nó mở. Focus từ bàn phím mở nó ngay lập tức.',
              closeDelay: 'Số mili giây trước khi nó đóng, sau khi con trỏ đã rời đi.',
              openChange: 'Phát ra khi nó mở hoặc đóng.',
              show: 'Mở nó cạnh một phần tử bất kỳ.',
              hide: 'Đóng nó.',
            },
          },
          NuiHovercardTrigger: {
            summary:
              'Hiển thị hovercard khi di chuột qua và khi nhận focus từ bàn phím, đồng thời biến nó thành phần mô tả của phần tử này.',
            members: { nuiHovercardTrigger: 'Hovercard cần hiển thị.' },
          },
        },
        keyboard: [
          ['Enter hoặc Phím cách trên trigger', 'Mở hoặc đóng popover.'],
          ['Tab', 'Di chuyển vào popover đang mở, vốn nằm ngay sau trigger của nó.'],
          ['Esc', 'Đóng popover và trả focus về trigger, hoặc ẩn hovercard.'],
        ],
        notes: [
          'Popover là một <code>dialog</code> không modal: hãy đặt tên cho nó bằng <code>aria-label</code> hoặc <code>aria-labelledby</code>. Trigger của nó nhận <code>aria-haspopup</code> và <code>aria-expanded</code> do trình duyệt cung cấp.',
          'Hovercard là một <code>tooltip</code> và là <code>aria-describedby</code> của trigger, nên văn bản của nó được đọc cùng trigger. Đừng đặt phần tử tương tác vào bên trong; hãy dùng popover cho chúng.',
          'Hovercard đáp ứng WCAG 1.4.13: Esc ẩn nó mà không di chuyển focus, con trỏ có thể di chuyển lên nó, và nó vẫn hiển thị khi đang được hover hoặc có focus.',
        ],
      },
      select: {
        name: 'Select',
        title: 'Component select cho Angular',
        summary: 'Chọn một hoặc nhiều tùy chọn, từ danh sách ngắn hay cực dài.',
        description:
          'Select Angular hỗ trợ tiếp cận: chọn một hoặc nhiều, nhóm, cây, gõ để nhảy tới, chọn tất cả và cuộn ảo cho danh sách dài bao nhiêu cũng được.',
        apiDescription:
          'Tài liệu API về select của Needless UI: nui-select với value, values, multiple, selectAll và virtual, cấu trúc NuiOption và dòng tùy biến.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của select Needless UI: combobox chỉ để chọn với listbox hoặc cây, aria-activedescendant, gõ để tìm và phím điều hướng cây.',
        overview: [
          'Select là một nút mở ra danh sách các tùy chọn. Truyền cho nó <code>options</code>, một mảng <code>NuiOption</code>, rồi liên kết <code>[(value)]</code>, hoặc <code>[(values)]</code> khi có <code>multiple</code>. Nó cũng dùng được với Signal Forms, reactive forms và <code>ngModel</code>.',
          'Tùy chọn có thể có <code>group</code>, <code>description</code> và <code>keywords</code>, còn <code>children</code> biến danh sách thành cây. Khi quá 200 dòng, chỉ các dòng đang hiển thị được render, nên 100.000 tùy chọn cũng mở nhanh như mười.',
          'Nếu muốn gõ để lọc, hãy dùng <a href="/components/combobox">combobox</a>.',
        ],
        examples: {
          countries: {
            title: 'Nhóm',
            text: 'Các tùy chọn có <code>group</code> được liệt kê dưới tiêu đề của nhóm. Gõ một chữ cái sẽ nhảy tới tùy chọn tiếp theo bắt đầu bằng chữ đó.',
          },
          toppings: {
            title: 'Chọn nhiều cùng lúc',
            text: '<code>multiple</code> giữ danh sách luôn mở và liên kết <code>[(values)]</code>. <code>selectAll</code> thêm một nút để chọn hoặc bỏ chọn mọi tùy chọn. Không thể chọn các tùy chọn bị vô hiệu hóa.',
          },
          folders: {
            title: 'Cây',
            text: 'Các tùy chọn có <code>children</code> tạo thành một cây. Danh sách mở ra với các thư mục chứa tùy chọn đã chọn được mở rộng sẵn.',
          },
          zones: {
            title: 'Danh sách dài',
            text: 'Mọi múi giờ, theo khu vực. Khi quá 200 dòng, chỉ các dòng đang hiển thị được render, và tùy chọn hiện tại luôn được render cho trình đọc màn hình.',
          },
        },
        api: {
          NuiSelect: {
            summary: 'Một nút mở ra danh sách các tùy chọn.',
            members: {
              options: 'Các tùy chọn, dưới dạng đối tượng <code>NuiOption</code>.',
              value: 'Giá trị đã chọn, hoặc <code>null</code>. Cũng dùng được với biểu mẫu.',
              values: 'Các giá trị đã chọn, khi có <code>multiple</code>.',
              multiple: 'Cho phép chọn nhiều tùy chọn. Danh sách vẫn mở trong lúc bạn chọn.',
              selectAll:
                'Khi có <code>multiple</code>, thêm một nút để chọn hoặc bỏ chọn mọi tùy chọn.',
              placeholder: 'Văn bản hiển thị khi chưa chọn gì.',
              label:
                'Accessible name, khi không có <code>&lt;label&gt;</code> nào đặt tên cho nút.',
              triggerId: 'Id của nút, dùng cho <code>&lt;label for&gt;</code>.',
              disabled: 'Vô hiệu hóa select.',
              compareWith:
                'Cho biết hai giá trị có phải cùng một tùy chọn hay không, dành cho giá trị là đối tượng.',
              virtual:
                'Chỉ render các dòng đang hiển thị: luôn luôn, không bao giờ, hoặc <code>auto</code> khi quá 200 dòng.',
              openChange: 'Phát ra khi danh sách mở hoặc đóng.',
              show: 'Mở danh sách.',
              hide: 'Đóng danh sách.',
              focus: 'Chuyển focus vào nút.',
            },
          },
          NuiOption: {
            summary: 'Một tùy chọn. Select, combobox và bảng lệnh đều nhận kiểu đối tượng này.',
            members: {
              value: 'Giá trị được đặt khi chọn tùy chọn này. Kiểu bất kỳ.',
              label: 'Văn bản được hiển thị và dùng để tìm kiếm.',
              description: 'Văn bản phụ bên dưới nhãn.',
              group: 'Các tùy chọn cùng nhóm được liệt kê theo thứ tự dưới tiêu đề của nhóm đó.',
              keywords: 'Các từ khác mà tìm kiếm sẽ khớp, chẳng hạn từ đồng nghĩa hoặc mã.',
              disabled: 'Vẫn hiển thị nhưng không chọn được.',
              children: 'Các tùy chọn ở cấp dưới, biến danh sách thành cây.',
            },
          },
          NuiOptionTemplate: {
            summary:
              'Đặt lên một <code>ng-template</code> bên trong component để tự vẽ từng dòng. Context chứa tùy chọn và dòng của nó.',
            members: {},
          },
          NuiOptionText: {
            summary:
              'Vẽ nhãn của tùy chọn với các chữ cái khớp được đánh dấu, cùng mô tả và đường dẫn của nó, cho các dòng do bạn tự vẽ.',
            members: { nuiOptionText: 'Dòng, lấy từ context của template.' },
          },
        },
        keyboard: [
          ['Mũi tên xuống và lên', 'Mở danh sách, rồi di chuyển qua các tùy chọn.'],
          ['Home và End', 'Chuyển đến tùy chọn đầu tiên hoặc cuối cùng.'],
          ['Page Down và Page Up', 'Di chuyển mười tùy chọn.'],
          ['Enter hoặc Phím cách', 'Mở danh sách, hoặc chọn tùy chọn hiện tại.'],
          ['Chữ cái', 'Nhảy tới tùy chọn tiếp theo bắt đầu bằng các chữ đó.'],
          [
            'Mũi tên phải và trái',
            'Trong cây, mở rộng một tùy chọn hoặc đi tới con đầu tiên của nó; thu gọn nó hoặc đi tới cha của nó. Đảo ngược với văn bản viết từ phải sang trái.',
          ],
          ['Alt + mũi tên lên', 'Chọn tùy chọn hiện tại và đóng danh sách.'],
          ['Tab', 'Khi chỉ chọn một, chọn tùy chọn hiện tại rồi chuyển tiếp.'],
          ['Esc', 'Đóng danh sách mà không chọn.'],
        ],
        notes: [
          'Nút là một <code>combobox</code> chỉ để chọn, có <code>aria-expanded</code> và <code>aria-controls</code>. Focus ở lại trên nút, và <code>aria-activedescendant</code> trỏ tới tùy chọn hiện tại.',
          'Danh sách là một <code>listbox</code>, hoặc một <code>tree</code> với <code>aria-level</code> và <code>aria-expanded</code>. <code>aria-setsize</code> và <code>aria-posinset</code> vẫn đúng khi chỉ một phần các dòng được render.',
          'Tùy chọn hiện tại có nền đặc và, ở chế độ forced colors, có đường viền.',
          'Đặt tên cho nó bằng một <code>&lt;label for&gt;</code> trỏ tới <code>triggerId</code>, hoặc bằng <code>label</code>.',
        ],
      },
      grid: {
        name: 'Bảng dữ liệu',
        title: 'Component bảng dữ liệu cho Angular',
        summary: 'Sắp xếp, lọc, chọn, chỉnh sửa và cuộn qua bao nhiêu dòng cũng được.',
        description:
          'Bảng dữ liệu Angular hỗ trợ tiếp cận dựa trên phần tử table native: sắp xếp nhiều cột, bộ lọc, phân trang hoặc cuộn ảo, chọn dòng, chỉnh sửa và di chuyển cột.',
        apiDescription:
          'Tài liệu API về bảng dữ liệu của Needless UI: input và model của nui-grid, định nghĩa NuiGridColumn và template cho ô tùy biến.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bảng dữ liệu Needless UI: phần tử table native với vai trò grid, một điểm dừng Tab, phím mũi tên và thông báo.',
        overview: [
          'Bảng dữ liệu dựa trên phần tử table native, có sắp xếp, lọc, phân trang và chỉnh sửa. Mô tả <code>columns</code>, truyền <code>rows</code>, và mỗi ô sẽ được định dạng theo kiểu dữ liệu và locale: số, tiền tệ, ngày tháng, có/không, và nhãn cho các giá trị <code>enum</code>.',
          'Trạng thái nằm trong các model mà bạn có thể liên kết, lưu và gửi lên máy chủ: <code>sort</code>, <code>filters</code>, <code>search</code>, <code>page</code>, <code>selected</code>, và <code>columnState</code> cho độ rộng, thứ tự, ghim và các cột ẩn mà người dùng chọn. Khi không phân trang, chỉ các dòng đang hiển thị được render, nên 100.000 dòng vẫn cuộn mượt như mười dòng.',
          'Mọi ô đều đến được bằng bàn phím, và panel của mỗi cột có thể sắp xếp, lọc, ghim, di chuyển, chỉnh vừa độ rộng và ẩn cột đó.',
        ],
        examples: {
          orders: {
            title: 'Tìm kiếm, sắp xếp và phân trang',
            text: 'Gõ để tìm trên mọi cột. Nhấp vào tiêu đề cột để sắp xếp, và Shift + nhấp để thêm cột thứ hai. <code>nuiGridCell</code> vẽ trạng thái, còn <code>exportCsv()</code> xuất ra những gì đang hiển thị.',
          },
          selection: {
            title: 'Chọn dòng',
            text: '<code>selection="multiple"</code> thêm checkbox và liên kết khóa của các dòng được chọn. Shift + nhấp để chọn một khoảng; ô chọn ở tiêu đề sẽ chọn mọi dòng khớp bộ lọc.',
          },
          editing: {
            title: 'Chỉnh sửa',
            text: 'Nhấp đúp vào một ô, nhấn Enter hoặc cứ thế gõ. <code>validate</code> giữ trình chỉnh sửa mở kèm thông báo; thay đổi đã xác nhận sẽ cập nhật <code>rows</code> và phát ra <code>cellEdit</code>.',
          },
          big: {
            title: '100.000 dòng',
            text: 'Khi không phân trang, chỉ các dòng đang hiển thị được render. Cột được ghim nằm yên ở hai mép, và <code>columnState</code> giữ lại bố cục mà người dùng tạo ra.',
          },
          server: {
            title: 'Dữ liệu máy chủ',
            text: 'Ở chế độ <code>server</code>, bảng hiển thị các dòng đúng như nhận được và báo mỗi thay đổi qua <code>queryChange</code>. Hãy đặt <code>loading</code> trong lúc tải dữ liệu.',
          },
        },
        api: {
          NuiGrid: {
            summary: 'Bảng dữ liệu dựa trên phần tử table native.',
            members: {
              rows: 'Dữ liệu. Chỉnh sửa sẽ thay thế dòng, nên hãy liên kết bằng <code>[(rows)]</code>.',
              columns: 'Các cột, dưới dạng đối tượng <code>NuiGridColumn</code>.',
              rowId: 'Khóa của một dòng, dùng để chọn và theo dõi.',
              label: 'Accessible name của bảng.',
              selection: 'Có cho chọn dòng hay không, và chọn được bao nhiêu.',
              selected: 'Khóa của các dòng được chọn.',
              sort: 'Thứ tự sắp xếp, dưới dạng đối tượng <code>{ column, direction }</code>; đối tượng đầu được ưu tiên.',
              filters: 'Một bộ lọc cho mỗi id cột: toán tử và giá trị.',
              search: 'Các từ đều phải xuất hiện trong một dòng.',
              pageSize: 'Số dòng mỗi trang, hoặc 0 để hiển thị một danh sách cuộn.',
              page: 'Trang đang hiển thị, tính từ 0.',
              pageSizes: 'Các lựa chọn trong thanh phân trang.',
              virtual:
                'Chỉ render các dòng đang hiển thị: luôn luôn, không bao giờ, hoặc <code>auto</code> khi quá 100 dòng mà không phân trang.',
              height: 'Độ dài CSS giới hạn chiều cao bảng; nội dung cuộn bên trong.',
              columnState: 'Độ rộng, thứ tự, ghim và hiển thị của từng cột, để lưu và khôi phục.',
              mode: '<code>server</code> hiển thị dòng đúng như nhận được và để việc sắp xếp, lọc, phân trang cho bạn.',
              total: 'Số dòng trên máy chủ.',
              loading: 'Hiển thị thanh tiến trình, và các dòng giữ chỗ khi chưa có dòng nào.',
              locale: 'Định dạng số và ngày, và đọc số được gõ vào.',
              labels: 'Mọi văn bản mà bảng hiển thị hoặc đọc lên, để dịch.',
              rowActivate: 'Phát ra dòng được mở bằng Enter hoặc nhấp đúp.',
              cellEdit: 'Phát ra mỗi lần sửa đã xác nhận.',
              queryChange: 'Phát ra sắp xếp, bộ lọc, tìm kiếm và trang mỗi khi chúng thay đổi.',
              exportCsv: 'Các dòng đã lọc và sắp xếp của những cột đang hiển thị, dưới dạng CSV.',
              focusCell: 'Chuyển focus vào một ô; dòng <code>-1</code> là tiêu đề.',
              clearFilters: 'Xóa mọi bộ lọc và tìm kiếm.',
            },
          },
          NuiGridColumn: {
            summary: 'Một cột. Chỉ <code>id</code> và <code>header</code> là bắt buộc.',
            members: {
              id: 'Duy nhất; là khóa trong sắp xếp, bộ lọc và trạng thái cột.',
              header: 'Văn bản tiêu đề cột.',
              value:
                'Một thuộc tính của dòng, hoặc một hàm nhận dòng. Mặc định là <code>row[id]</code>.',
              type: 'Quyết định cách căn lề, sắp xếp, bộ lọc và trình chỉnh sửa.',
              format: 'Tùy chọn <code>Intl</code> cho số và ngày, hoặc một hàm tạo ra văn bản.',
              options:
                'Các lựa chọn của cột <code>enum</code>, dưới dạng đối tượng <code>NuiOption</code>.',
              'width, minWidth, maxWidth': 'Tính bằng pixel.',
              flex: 'Chia phần không gian còn lại với các cột <code>flex</code> khác.',
              align: 'Mặc định theo kiểu: số và ngày căn về cuối.',
              'pinned, hidden': 'Trạng thái ghim và hiển thị ban đầu của cột.',
              'sortable, filterable, resizable, reorderable, hideable':
                'Có thể tắt từng thuộc tính bằng <code>false</code>.',
              compare: 'Sắp xếp tùy biến.',
              'editable, validate':
                'Ô có chỉnh sửa được không, và thông báo khi giá trị không hợp lệ.',
              set: 'Tạo dòng đã chỉnh sửa. Mặc định là một bản sao mang giá trị mới.',
            },
          },
          NuiGridCell: {
            summary: 'Vẽ các ô của một cột. Context chứa dòng, giá trị và văn bản của ô.',
            members: { nuiGridCell: 'Id của cột.' },
          },
          NuiGridHeader: {
            summary: 'Vẽ tiêu đề của một cột.',
            members: { nuiGridHeader: 'Id của cột.' },
          },
          NuiGridEmpty: {
            summary:
              'Nội dung khi không có dòng nào. Context cho biết bộ lọc có ẩn chúng hay không.',
            members: {},
          },
        },
        keyboard: [
          [
            'Phím mũi tên',
            'Di chuyển một ô. Trái và phải đảo ngược với văn bản viết từ phải sang trái.',
          ],
          ['Home và End', 'Đến ô đầu tiên hoặc cuối cùng của dòng; kèm Ctrl thì của cả bảng.'],
          ['Page Down và Page Up', 'Di chuyển lên hoặc xuống một màn hình.'],
          [
            'Enter hoặc Phím cách trên tiêu đề cột',
            'Sắp xếp theo cột; kèm Shift thì thêm cột vào thứ tự sắp xếp.',
          ],
          ['Alt + mũi tên xuống trên tiêu đề cột', 'Mở panel của cột.'],
          [
            'Alt + mũi tên trái hoặc phải trên tiêu đề cột',
            'Thu hẹp hoặc nới rộng cột; kèm Shift thì di chuyển cột.',
          ],
          ['Enter trên một ô', 'Chỉnh sửa ô, hoặc mở dòng nếu ô không chỉnh sửa được.'],
          ['F2, hoặc gõ phím', 'Chỉnh sửa ô.'],
          ['Enter, Esc và Tab khi đang chỉnh sửa', 'Xác nhận, hủy, hoặc xác nhận rồi chuyển tiếp.'],
          ['Phím cách', 'Chọn dòng; kèm Shift thì chọn các dòng kể từ dòng chọn gần nhất.'],
          ['Ctrl + A', 'Chọn mọi dòng.'],
        ],
        notes: [
          'Một <code>&lt;table&gt;</code> native với <code>role="grid"</code>, được đặt tên bằng <code>label</code>. Tiêu đề cột có <code>aria-sort</code>, còn các dòng có thể chọn có <code>aria-selected</code>.',
          'Bảng chỉ chiếm một điểm dừng Tab. Focus di chuyển giữa các ô bằng roving <code>tabindex</code>, nên trình đọc màn hình đọc từng ô kèm tiêu đề dòng và cột của nó.',
          '<code>aria-rowcount</code>, <code>aria-rowindex</code> và <code>aria-colindex</code> vẫn đúng khi các dòng được phân trang hoặc ảo hóa.',
          'Việc sắp xếp, lọc, chuyển trang và lỗi chỉnh sửa được đọc lên qua một vùng trạng thái ở chế độ polite.',
        ],
      },
      chat: {
        name: 'Chat',
        title: 'Component chat AI cho Angular',
        summary: 'Trò chuyện với mô hình: phản hồi dạng stream, công cụ, phiên bản và tệp.',
        description:
          'Chat Angular hỗ trợ tiếp cận cho trợ lý AI: phản hồi Markdown dạng stream, suy luận, gọi công cụ, nguồn, tệp và các lần thử lại lưu thành phiên bản.',
        apiDescription:
          'Tài liệu API về chat của Needless UI: input của nui-chat, NuiChatSession để stream phản hồi, tin nhắn, template công cụ và bộ đọc stream.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của chat Needless UI: feed gồm các tin nhắn có tên, Page Up và Page Down, phản hồi được đọc lên khi hoàn tất.',
        overview: [
          'Chat là mọi thứ nằm giữa người dùng của bạn và mô hình. Tạo một <code>NuiChatSession</code> với hàm <code>respond</code>, và <code>&lt;nui-chat&gt;</code> lo phần còn lại: stream phản hồi dưới dạng Markdown, cuộn theo phản hồi xuống cuối trang cho đến khi người dùng cuộn lên, và biến nút gửi thành nút dừng trong lúc phản hồi đang đến.',
          '<code>respond</code> trả về văn bản, một promise, một <code>async function*</code> hoặc một Observable, nên API nào cũng dùng được. Ngoài văn bản, phản hồi có thể kèm suy luận của mô hình, các lệnh gọi công cụ (do template của bạn vẽ) và các nguồn đã dùng. <code>nuiEventStream</code> đọc server-sent events mà hầu hết API mô hình dùng để stream.',
          'Không mất gì cả: phản hồi được thử lại hay câu hỏi được sửa sẽ thành một phiên bản mới cạnh phiên bản cũ, và hội thoại giữ lại mọi nhánh. Trình đọc màn hình đọc mỗi phản hồi khi đã hoàn tất, chứ không đọc từng chữ.',
        ],
        examples: {
          assistant: {
            title: 'Trợ lý',
            text: 'Các gợi ý mở đầu hội thoại. Phản hồi được stream về dưới dạng Markdown; bạn có thể dừng, thử lại, đánh giá chúng hoặc sửa câu hỏi của mình. <code>attach</code> nhận tệp được chọn, dán hoặc kéo thả vào.',
          },
          tools: {
            title: 'Suy luận, công cụ và nguồn',
            text: 'Các delta thêm suy luận của mô hình, lệnh gọi công cụ và nguồn vào phản hồi. <code>nuiChatTool</code> vẽ công cụ thời tiết thành một thẻ; các công cụ khác được thu gọn cùng input và output của chúng.',
          },
          server: {
            title: 'Stream từ máy chủ',
            text: '<code>nuiEventStream</code> đọc một event stream kiểu OpenAI, và <code>NuiChatError</code> hiển thị thông điệp của nó. <code>all()</code> lưu hội thoại cùng mọi phiên bản.',
          },
        },
        api: {
          NuiChat: {
            summary: 'Hội thoại và ô soạn tin, gộp làm một.',
            members: {
              session: 'Hội thoại cần hiển thị.',
              assistant: 'Tên của trợ lý, trong các tiêu đề mà trình đọc màn hình đọc lên.',
              headingLevel:
                'Cấp heading của mỗi tin nhắn, chỉ trình đọc màn hình mới thấy. Heading trong phản hồi sâu hơn một cấp.',
              announce:
                'Trình đọc màn hình đọc gì khi phản hồi hoàn tất: toàn bộ, một thông báo ngắn, hoặc không gì cả.',
              images:
                'Hiển thị hình ảnh trong phản hồi. Nếu không, văn bản của ảnh sẽ là liên kết tới ảnh.',
              value: 'Văn bản đang được soạn.',
              placeholder: 'Văn bản hiển thị khi ô nhập còn trống.',
              suggestions: 'Các prompt gửi được bằng một cú nhấp, cho đến tin nhắn đầu tiên.',
              sendOn: 'Gửi bằng Enter, hay bằng Ctrl hoặc ⌘ + Enter.',
              disabled: 'Ngăn ô soạn tin gửi đi.',
              attach: 'Nhận tệp: được chọn, dán hoặc kéo thả vào.',
              accept: 'Các loại tệp được nhận, như với <code>&lt;input type="file"&gt;</code>.',
              maxFiles: 'Số tệp tối đa một tin nhắn có thể kèm theo.',
              maxSize: 'Kích thước tệp lớn nhất được nhận, tính bằng byte.',
              labels: 'Mọi văn bản mà chat hiển thị hoặc đọc lên, để dịch.',
              rated:
                'Phát ra phản hồi mà người dùng đã đánh giá, kèm mức đánh giá, hoặc <code>null</code> khi rút lại.',
              focus: 'Chuyển focus vào ô nhập văn bản.',
              scrollToEnd: 'Cuộn tới tin nhắn mới nhất và bám theo nó.',
            },
          },
          NuiChatSession: {
            summary:
              'Hội thoại, không có DOM. Tạo nó trong một component, với các tùy chọn <code>respond</code>, <code>messages</code> và <code>id</code>.',
            members: {
              respond:
                'Hàm của bạn: viết phản hồi cho <code>request.messages</code>, và dừng khi <code>request.signal</code> bị hủy.',
              messages: 'Hội thoại đang hiển thị trên màn hình.',
              all: 'Mọi tin nhắn của mọi phiên bản, để lưu lại rồi truyền lại qua <code>messages</code>.',
              busy: 'Có phản hồi nào đang đến hay không.',
              send: 'Gửi một tin nhắn và yêu cầu phản hồi.',
              stop: 'Dừng phản hồi, giữ lại những gì đã viết.',
              retry: 'Hỏi lại. Phản hồi mới là một phiên bản bên cạnh phiên bản cũ.',
              edit: 'Gửi phiên bản mới của một tin nhắn của người dùng.',
              versions: 'Mọi phiên bản của một tin nhắn, cũ nhất trước.',
              show: 'Chuyển hội thoại sang phiên bản này.',
              rate: 'Ghi lại đánh giá của người dùng về một phản hồi.',
              'remove, load, clear':
                'Xóa một tin nhắn và những gì theo sau nó, thay thế hội thoại, hoặc bắt đầu lại.',
            },
          },
          NuiChatMessage: {
            summary: 'Một tin nhắn. Các tin nhắn cùng <code>parent</code> là phiên bản của nhau.',
            members: {
              'id, parent': 'Khóa của tin nhắn, và khóa của tin nhắn mà nó đi sau.',
              role: 'Ai đã viết nó.',
              text: 'Markdown từ trợ lý, văn bản thuần từ người dùng.',
              status: 'Phản hồi đang ở giai đoạn nào, từ chờ đến xong.',
              reasoning: 'Những gì mô hình đã suy nghĩ trước khi trả lời.',
              tools: 'Các công cụ nó đã gọi, kèm trạng thái, input và output.',
              sources: 'Các trang nó đã dùng.',
              attachments: 'Các tệp gửi kèm.',
              rating: 'Đánh giá của người dùng.',
              data: 'Mọi thứ khác cần lưu kèm, chẳng hạn tên mô hình.',
            },
          },
          NuiChatToolTemplate: {
            summary:
              'Vẽ một lệnh gọi công cụ, chẳng hạn một thẻ thời tiết. Context chứa lệnh gọi và tin nhắn của nó.',
            members: {
              nuiChatTool:
                'Tên công cụ. Nếu không có, template sẽ vẽ mọi lệnh gọi mà không template nào khác nêu tên.',
            },
          },
          NuiChatThread: {
            summary:
              'Riêng phần hội thoại, cho bố cục của riêng bạn. Nhận các input của <code>nui-chat</code> liên quan đến hội thoại.',
            members: {},
          },
          NuiChatComposer: {
            summary:
              'Riêng ô soạn tin. Nhận các input của <code>nui-chat</code> liên quan đến việc soạn tin.',
            members: {},
          },
          NuiServerEvent: {
            summary:
              'Giá trị <code>nuiEventStream</code> trả ra cho mỗi sự kiện. <code>nuiTextStream</code> đọc văn bản thuần và <code>nuiJsonStream</code> đọc các dòng JSON; cả ba đều nhận một response của <code>fetch</code>.',
            members: {
              event: 'Tên sự kiện.',
              data: 'Các dòng dữ liệu, nối lại với nhau.',
              id: 'Id cuối cùng mà stream đã gửi.',
            },
          },
          NuiChatError: {
            summary:
              'Ném nó từ <code>respond</code> để hiển thị thông điệp của nó. Mọi lỗi khác chỉ hiển thị một thông điệp chung, nên không có gì nội bộ bị lộ ra.',
            members: {},
          },
        },
        keyboard: [
          ['Page Down và Page Up', 'Chuyển đến tin nhắn tiếp theo hoặc trước đó.'],
          ['Ctrl + End và Ctrl + Home', 'Rời khỏi hội thoại, đi tới hoặc lùi lại.'],
          ['Enter', 'Gửi. Kèm Shift thì xuống dòng mới.'],
          ['Esc', 'Hủy sửa tin nhắn.'],
        ],
        notes: [
          'Hội thoại là một <code>feed</code> gồm các <code>article</code>. Mỗi mục được đặt tên bằng một tiêu đề chỉ trình đọc màn hình mới thấy, chẳng hạn “You said”, và có <code>aria-posinset</code> cùng <code>aria-setsize</code>.',
          'Phản hồi đang được viết có <code>aria-busy</code>. Khi hoàn tất, nó được đọc lên trọn vẹn; lỗi thì được đọc lên ngay.',
          'Mỗi nút chỉ có biểu tượng đều có tên và tooltip. Các nút đánh giá là nút bật/tắt, và bộ chuyển phiên bản là một nhóm có tên như “Version 2 of 3”.',
          'Suy luận và lệnh gọi công cụ là các khối mở rộng native. Xóa một tệp sẽ trả focus về ô nhập văn bản.',
        ],
      },
      markdown: {
        name: 'Markdown',
        title: 'Component render Markdown cho Angular',
        summary: 'Render Markdown an toàn, kể cả khi nội dung đang được stream.',
        description:
          'Component Markdown an toàn cho phản hồi AI trong Angular: bảng GitHub, danh sách công việc và khối mã, vẽ bằng phần tử thật và mượt khi stream.',
        apiDescription:
          'Tài liệu API về Markdown của Needless UI: input của nui-markdown, template cho khối mã và bộ phân tích cú pháp đằng sau nó.',
        a11yDescription:
          'Khả năng tiếp cận của Markdown trong Needless UI: tiêu đề, danh sách và bảng thật, vùng cuộn có tên và nút sao chép có thông báo.',
        overview: [
          'Component Markdown biến văn bản kiểu như mô hình viết ra thành phần tử thật: tiêu đề, danh sách và danh sách công việc, trích dẫn, bảng, khối mã có nút sao chép, và liên kết. Nó phân tích văn bản thành một cây rồi vẽ bằng template, nên HTML thô vẫn là văn bản và không có gì được chèn vào dưới dạng HTML.',
          'Với <code>streaming</code>, văn bản đang viết dở hiển thị như khi đã hoàn tất: code fence còn mở đã là một khối mã, một <code>**</code> đứng lẻ sẽ chờ cặp của nó, và một con trỏ đi theo chữ cuối cùng. Các khối không thay đổi giữ nguyên DOM.',
          'Liên kết chỉ hoạt động với địa chỉ web, email và số điện thoại, còn hình ảnh vẫn là liên kết cho đến khi bạn bật <code>images</code>.',
        ],
        examples: {
          document: {
            title: 'Tài liệu',
            text: 'Tiêu đề bắt đầu từ <code>headingLevel</code>, nên nằm gọn dưới tiêu đề của chính trang. Bảng và mã rộng cuộn trong vùng riêng của chúng.',
          },
          streaming: {
            title: 'Streaming',
            text: 'Cùng văn bản đó, mỗi lần vài ký tự. Không ký hiệu nào lóe lên, và chỉ khối cuối cùng được render lại.',
          },
          highlight: {
            title: 'Tô sáng mã',
            text: '<code>nuiMarkdownCode</code> vẽ khối mã bằng template của bạn, ở đây với một bộ tô sáng cú pháp tí hon. Template nhận mã và ngôn ngữ của mã.',
          },
        },
        api: {
          NuiMarkdown: {
            summary: 'Render Markdown thành các phần tử.',
            members: {
              text: 'Nội dung Markdown.',
              streaming: 'Văn bản vẫn đang đến.',
              headingLevel:
                'Cấp của tiêu đề <code>#</code>. Các cấp sâu hơn nối tiếp, tối đa là 6.',
              images:
                'Hiển thị hình ảnh. Nếu không, văn bản của ảnh sẽ là liên kết tới ảnh, vì ảnh có thể dùng để theo dõi.',
              labels: 'Văn bản của nút sao chép và các văn bản tương tự, để dịch.',
              codeTemplate:
                'Template khối mã lấy từ nơi khác, chẳng hạn từ chat chứa component này.',
            },
          },
          NuiMarkdownCode: {
            summary:
              'Vẽ khối mã. Context chứa mã, <code>lang</code>, và <code>open</code> khi khối vẫn đang đến.',
            members: {},
          },
          nuiParseMarkdown: {
            summary: 'Bộ phân tích cú pháp và các hàm hỗ trợ, để dùng mà không cần component.',
            members: {
              nuiParseMarkdown: 'Cây gồm các khối và phần tử inline mà component vẽ ra.',
              nuiMarkdownToText: 'Văn bản thuần, mỗi khối một dòng, để đọc lên hoặc xem trước.',
              nuiSafeUrl: 'Liên kết có trỏ tới địa chỉ web, email hay số điện thoại hay không.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Đi tới các liên kết, nút sao chép, và các bảng, khối mã rộng để cuộn chúng.'],
        ],
        notes: [
          'Tiêu đề, danh sách, trích dẫn, bảng có tiêu đề <code>th</code> và <code>scope</code>, cùng mã đều là phần tử thật.',
          'Bảng và khối mã rộng cuộn bên trong một vùng có thể nhận focus; vùng của bảng được đặt tên theo tiêu đề cột.',
          'Ô đánh dấu trong danh sách công việc cho biết từng việc đã xong hay chưa. Nút sao chép có tên “Copy code” và báo “Copied” qua một thông báo trạng thái.',
          'Con trỏ khi stream được ẩn khỏi trình đọc màn hình, và đứng yên khi giảm chuyển động.',
        ],
      },
      calendar: {
        name: 'Lịch',
        title: 'Component lịch cho Angular',
        summary: 'Chọn một ngày, một khoảng hoặc nhiều ngày, kể cả bằng bàn phím.',
        description:
          'Lịch Angular hỗ trợ tiếp cận: chọn một ngày, một khoảng hoặc nhiều ngày, có min và max, ngày không khả dụng, nhiều tháng cạnh nhau và số tuần.',
        apiDescription:
          'Tài liệu API về lịch của Needless UI: các chế độ chọn của nui-calendar, min, max và ngày không khả dụng, nhiều tháng cạnh nhau và nhãn.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của lịch Needless UI: lưới các ngày có tên, phím mũi tên theo ngày và tuần, Page Up và Page Down theo tháng.',
        overview: [
          'Lịch cho phép chọn một ngày, một khoảng ngày hoặc nhiều ngày. Giá trị là ngày ISO thuần, chẳng hạn <code>2026-09-25</code>, không kèm múi giờ nào có thể làm lệch chúng, nên có thể gửi thẳng lên máy chủ hoặc vào một <code>&lt;input type="date"&gt;</code>.',
          'Tuần bắt đầu vào ngày đầu tuần theo locale, còn tên và chữ số hiển thị theo ngôn ngữ của locale đó. <code>min</code>, <code>max</code> và <code>unavailable</code> loại trừ các ngày, <code>months</code> hiển thị nhiều tháng cạnh nhau, và tiêu đề cho phép thu nhỏ ra tháng và năm để đến nhanh những ngày ở xa.',
          'Mọi ngày đều đến được bằng bàn phím, như trong mẫu date picker của WAI-ARIA, và mỗi ngày được đặt tên bằng ngày tháng đầy đủ của nó.',
        ],
        examples: {
          delivery: {
            title: 'Ngày giao hàng',
            text: 'Những ngày trước hôm nay, sau <code>max</code> hoặc bị <code>unavailable</code> loại trừ thì không chọn được, nhưng bàn phím vẫn đi qua chúng.',
          },
          stay: {
            title: 'Một khoảng ngày',
            text: 'Với <code>selection="range"</code>, lần chọn đầu tiên bắt đầu khoảng ngày và dải tô sáng đi theo con trỏ cho đến lần chọn thứ hai. <code>months="2"</code> và <code>weekNumbers</code> hiển thị nhiều hơn cùng lúc.',
          },
          'days-off': {
            title: 'Nhiều ngày',
            text: 'Với <code>selection="multiple"</code>, mỗi lần chọn sẽ thêm hoặc bỏ một ngày. <code>firstDay</code> cho tuần bắt đầu vào một ngày khác với ngày đầu tuần của locale.',
          },
        },
        api: {
          NuiCalendar: {
            summary: 'Một lịch để chọn ngày.',
            members: {
              selection: 'Có thể chọn bao nhiêu ngày.',
              value: 'Ngày được chọn.',
              values: 'Các ngày được chọn, theo thứ tự.',
              range: 'Khoảng ngày được chọn, bao gồm cả hai đầu.',
              month: 'Tháng đang hiển thị; là tháng đầu tiên nếu hiển thị nhiều tháng.',
              view: 'Ngày, tháng hoặc năm.',
              'min, max': 'Ngày đầu tiên và cuối cùng có thể chọn.',
              unavailable: 'Loại trừ các ngày khác, chẳng hạn ngày lễ.',
              months: 'Số tháng hiển thị cạnh nhau.',
              weekNumbers: 'Hiển thị số tuần ISO.',
              firstDay: 'Ngày đầu tuần, 1 là thứ Hai. Mặc định theo locale.',
              locale: 'Định dạng tên và chữ số, và chọn ngày đầu tuần.',
              labels: 'Mọi văn bản mà lịch hiển thị hoặc đọc lên, để dịch.',
              picked: 'Phát ra mỗi lựa chọn: một ngày, hoặc một khoảng ngày khi đã hoàn tất.',
              focusDate: 'Chuyển focus bàn phím tới một ngày và hiển thị tháng của ngày đó.',
            },
          },
          NuiDateRange: {
            summary: 'Một khoảng ngày.',
            members: { 'start, end': 'Ngày đầu tiên và cuối cùng, bao gồm cả hai.' },
          },
        },
        keyboard: [
          [
            'Mũi tên trái và phải',
            'Ngày trước hoặc ngày sau. Đảo ngược với văn bản viết từ phải sang trái.',
          ],
          ['Mũi tên lên và xuống', 'Tuần trước hoặc tuần sau.'],
          ['Home và End', 'Ngày đầu tiên hoặc cuối cùng của tuần.'],
          ['Page Up và Page Down', 'Tháng trước hoặc tháng sau; kèm Shift thì là năm.'],
          ['Enter hoặc Phím cách', 'Chọn ngày, hoặc phóng to vào tháng hay năm.'],
          ['Esc', 'Bỏ điểm đầu tiên đã chọn của khoảng ngày, hoặc phóng to trở lại.'],
        ],
        notes: [
          'Mỗi tháng là một <code>grid</code> được đặt tên theo tiêu đề của nó, với tên đầy đủ của các ngày trong tuần nằm trong <code>abbr</code>.',
          'Mỗi ngày được đặt tên bằng ngày tháng đầy đủ, kèm thêm “Today”, “unavailable” và hai đầu của khoảng ngày. <code>aria-selected</code> đánh dấu những gì đã chọn, còn <code>aria-disabled</code> đánh dấu những gì không chọn được.',
          'Lưới chỉ chiếm một điểm dừng Tab, với roving <code>tabindex</code>. Nút tháng trước và tháng sau đọc lên tháng mới.',
        ],
      },
      'date-picker': {
        name: 'Bộ chọn ngày',
        title: 'Component bộ chọn ngày và giờ cho Angular',
        summary: 'Gõ ngày hoặc giờ theo từng phân đoạn, hoặc chọn trên lịch.',
        description:
          'Bộ chọn ngày, giờ và khoảng ngày Angular hỗ trợ tiếp cận: gõ theo phân đoạn đúng thứ tự của locale, lịch trong popover, preset và hỗ trợ form.',
        apiDescription:
          'Tài liệu API về bộ chọn ngày của Needless UI: nui-date-field, nui-time-field, nui-date-picker và nui-date-range-picker, kèm preset.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bộ chọn ngày Needless UI: một spinbutton cho mỗi phần của ngày tháng, và lịch trong một hộp thoại.',
        overview: [
          'Ô ngày và giờ được gõ theo từng phân đoạn: ngày, tháng và năm theo thứ tự của locale, rồi giờ và phút theo đồng hồ 12 hoặc 24 giờ của locale đó. Mỗi phân đoạn là một spinbutton: gõ chữ số và nó tự chuyển tiếp, hoặc tăng giảm bằng phím mũi tên. Dán cả một ngày vào, mọi phân đoạn sẽ được điền.',
          'Các bộ chọn thêm một lịch trong popover, cho một ngày hoặc một khoảng ngày kèm preset. Giá trị là chuỗi ISO thuần, chẳng hạn <code>2026-09-25</code> hoặc <code>2026-09-25T09:30</code>, và mọi ô đều dùng được với Signal Forms, reactive forms và <code>ngModel</code>.',
          'Trên trang này, các ví dụ theo ngôn ngữ của trang: hãy đổi ngôn ngữ để xem thứ tự, dấu phân cách và chữ số thay đổi.',
        ],
        examples: {
          fields: {
            title: 'Ô ngày và giờ',
            text: 'Gõ các chữ số, hoặc dùng phím mũi tên. Nhấn Backspace lần thứ hai sẽ lùi về phân đoạn trước. <code>minuteStep</code> đặt mức mà phím mũi tên thay đổi số phút.',
          },
          pickers: {
            title: 'Bộ chọn ngày',
            text: 'Nút mở lịch tại ngày đã chọn, và chọn một ngày sẽ đóng lịch. Với <code>granularity="minute"</code>, bộ chọn nhận cả giờ, còn lịch chỉ thay đổi ngày.',
          },
          range: {
            title: 'Khoảng ngày',
            text: 'Hai ô nhập và một lịch hai tháng. <code>nuiDateRangePresets()</code> thêm các khoảng ngày thường dùng; giá trị vẫn là null cho đến khi cả hai đầu được đặt theo đúng thứ tự.',
          },
        },
        api: {
          NuiDateField: {
            summary: 'Một ngày, hoặc ngày và giờ, được gõ theo từng phân đoạn.',
            members: {
              value: 'Giá trị, hoặc null cho đến khi mọi phân đoạn được điền.',
              granularity: 'Dừng ở ngày, hoặc tiếp tục tới giờ, phút hoặc giây.',
              'min, max': 'Giá trị sớm nhất và muộn nhất. Ngoài khoảng đó, ô nhập không hợp lệ.',
              placeholder: 'Giá trị mà phân đoạn trống bắt đầu từ đó khi dùng phím mũi tên.',
              hourCycle: 'Đồng hồ 12 hoặc 24 giờ. Mặc định theo locale.',
              minuteStep: 'Mức phím mũi tên thay đổi số phút.',
              'disabled, readonly': 'Ngăn thay đổi.',
              locale: 'Đặt thứ tự, dấu phân cách, chữ số và kiểu đồng hồ.',
              labels: 'Mọi văn bản mà ô nhập đọc lên, để dịch.',
              invalid: 'Giá trị có nằm ngoài <code>min</code> và <code>max</code> hay không.',
              focus: 'Chuyển focus vào phân đoạn trống đầu tiên.',
            },
          },
          NuiTimeField: {
            summary:
              'Một thời điểm trong ngày được gõ theo từng phân đoạn. Nhận cùng các input như ô ngày.',
            members: { granularity: 'Dừng ở giờ, phút hoặc giây.' },
          },
          NuiDatePicker: {
            summary:
              'Một ô ngày có lịch trong popover. Nhận các input của ô ngày, và thêm các input sau.',
            members: {
              unavailable: 'Những ngày lịch không cho chọn.',
              'firstDay, weekNumbers': 'Được truyền cho lịch.',
              labels: 'Văn bản của ô nhập, nút và lịch.',
              show: 'Mở lịch.',
            },
          },
          NuiDateRangePicker: {
            summary:
              'Hai ô ngày với một lịch chọn khoảng ngày. Nhận các input của bộ chọn ngày, và thêm các input sau.',
            members: {
              value: 'Khoảng ngày, hoặc null cho đến khi cả hai đầu được đặt theo đúng thứ tự.',
              presets: 'Các khoảng ngày có tên, chọn bằng một cú nhấp.',
              months: 'Số tháng hiển thị cạnh nhau trong lịch.',
            },
          },
          NuiDateRangePreset: {
            summary: 'Một khoảng ngày có tên, cố định hoặc được tạo ra khi chọn.',
            members: {
              label: 'Tên của nó.',
              range: 'Khoảng ngày, hoặc một hàm tạo ra nó.',
            },
          },
        },
        keyboard: [
          ['Chữ số', 'Gõ vào phân đoạn. Tự chuyển tiếp khi không còn chữ số nào có thể theo sau.'],
          [
            'Mũi tên lên và xuống',
            'Tăng giảm phân đoạn; Page Up và Page Down tăng giảm nhiều hơn.',
          ],
          ['Mũi tên trái và phải, Tab', 'Phân đoạn trước hoặc sau.'],
          ['Backspace', 'Xóa phân đoạn, rồi lùi về phân đoạn trước.'],
          ['A và P', 'Đặt AM hoặc PM.'],
        ],
        notes: [
          'Mỗi ô nhập là một <code>group</code>: hãy đặt tên cho nó bằng <code>aria-label</code> hoặc <code>aria-labelledby</code>. Mỗi phân đoạn là một <code>spinbutton</code> được đặt tên theo phần của nó, đọc tháng bằng tên và phân đoạn trống là “Empty”.',
          'Phân đoạn là văn bản có thể chỉnh sửa, nên bàn phím cảm ứng mở ở chế độ chữ số.',
          'Nút của bộ chọn có tên “Choose a date”, và popover của nó là một <code>dialog</code>. Chọn một ngày sẽ trả focus về nút.',
          'Lịch bên trong hoạt động giống như component <a href="/components/calendar">lịch</a>.',
        ],
      },
      scheduler: {
        name: 'Bộ lập lịch',
        title: 'Component bộ lập lịch cho Angular',
        summary: 'Xem sự kiện theo tháng, tuần, ngày hoặc lịch biểu, và kéo chúng vào đúng chỗ.',
        description:
          'Bộ lập lịch Angular hỗ trợ tiếp cận: tháng, tuần, ngày và lịch biểu, sự kiện trùng giờ nằm cạnh nhau, kéo để dời và đổi độ dài, dùng hoàn toàn bằng bàn phím.',
        apiDescription:
          'Tài liệu API về bộ lập lịch của Needless UI: chế độ xem, sự kiện, chỉnh sửa và chọn của nui-scheduler, các output và template cho sự kiện.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bộ lập lịch Needless UI: lưới ngày và giờ, sự kiện có tên, và thao tác bàn phím thay cho mọi thao tác kéo.',
        overview: [
          'Bộ lập lịch hiển thị sự kiện theo tháng, tuần, ngày hoặc dạng lịch biểu. Sự kiện là dữ liệu thuần với thời gian ISO; các sự kiện trùng giờ chia nhau chiều rộng, sự kiện kéo dài qua nửa đêm hiển thị ở cả hai ngày, còn sự kiện cả ngày trải dài ở phía trên dưới dạng thanh ngang.',
          'Bộ lập lịch không bao giờ tự thay đổi sự kiện của bạn. Kéo một sự kiện, hoặc cạnh dưới của nó, và <code>eventChange</code> sẽ báo thời gian mới; chọn thời gian trên lưới, và <code>slotSelect</code> sẽ báo thời gian đó. <code>rangeChange</code> cho bạn biết những ngày nào đang hiển thị, để bạn tải sự kiện của những ngày đó.',
          'Mọi thao tác bằng con trỏ đều làm được bằng bàn phím: lưới chỉ chiếm một điểm dừng Tab, phím mũi tên di chuyển qua các ngày và giờ, còn Alt kèm phím mũi tên sẽ di chuyển một sự kiện.',
        ],
        examples: {
          planner: {
            title: 'Lên kế hoạch cho một tuần',
            text: 'Với <code>editable</code> và <code>selectable</code>, hãy kéo sự kiện để di chuyển, kéo cạnh dưới để đổi độ dài, và kéo qua khoảng thời gian trống để thêm sự kiện mới. Ví dụ này cập nhật sự kiện của nó từ các output.',
          },
          month: {
            title: 'Một tháng và lịch biểu',
            text: 'Sự kiện kéo dài nhiều ngày hiển thị dưới dạng thanh; ngày bận rộn cho biết còn bao nhiêu sự kiện nữa. <code>views</code> chỉ cung cấp chế độ xem tháng và lịch biểu cho <code>agendaDays</code> ngày tới.',
          },
          rooms: {
            title: 'Một ngày ở các phòng họp',
            text: '<code>nuiSchedulerEvent</code> vẽ mỗi lượt đặt chỗ kèm tên phòng và người chủ trì. <code>slotMinutes="15"</code> chia dòng chi tiết hơn.',
          },
        },
        api: {
          NuiScheduler: {
            summary: 'Sự kiện theo tháng, tuần, ngày hoặc lịch biểu.',
            members: {
              events: 'Các sự kiện cần hiển thị.',
              view: 'Chế độ xem đang hiển thị.',
              views: 'Các chế độ xem mà người dùng có thể chuyển qua lại.',
              date: 'Ngày đang hiển thị, cũng là nơi focus bàn phím đang ở.',
              slotMinutes:
                'Số phút mỗi dòng của lưới thời gian, cũng là bước di chuyển của sự kiện.',
              scrollHour: 'Giờ hiển thị khi lưới thời gian mở ra.',
              agendaDays: 'Số ngày mà lịch biểu xem trước.',
              editable: 'Sự kiện có thể được di chuyển và đổi độ dài, bằng con trỏ và bàn phím.',
              selectable: 'Có thể chọn thời gian trên lưới để tạo sự kiện.',
              firstDay: 'Ngày đầu tuần, 1 là thứ Hai. Mặc định theo locale.',
              headingLevel: 'Cấp heading của tiêu đề; các ngày trong lịch biểu sâu hơn một cấp.',
              locale: 'Định dạng ngày và giờ.',
              labels: 'Mọi văn bản mà bộ lập lịch hiển thị hoặc đọc lên, để dịch.',
              eventClick: 'Phát ra sự kiện được nhấp, hoặc được mở bằng Enter.',
              eventChange: 'Phát ra thời gian mới của sự kiện sau khi di chuyển hoặc đổi độ dài.',
              slotSelect: 'Phát ra thời gian được chọn trên lưới.',
              rangeChange: 'Phát ra ngày đầu tiên và cuối cùng đang hiển thị khi chúng thay đổi.',
            },
          },
          NuiSchedulerEvent: {
            summary:
              'Một sự kiện. Điểm kết thúc của sự kiện có giờ không được tính vào; còn sự kiện cả ngày kết thúc vào ngày cuối cùng của nó.',
            members: {
              'id, title': 'Khóa của nó, và nội dung nó hiển thị.',
              'start, end': 'Ngày và giờ, hoặc chỉ ngày với sự kiện cả ngày.',
              allDay: 'Theo mặc định, là sự kiện cả ngày khi <code>start</code> không có giờ.',
              tone: 'Màu của nó.',
              editable: 'Sự kiện có di chuyển được hay không, bất kể bộ lập lịch quy định thế nào.',
              data: 'Mọi thứ khác cần giữ kèm sự kiện.',
            },
          },
          NuiSchedulerEventTemplate: {
            summary: 'Vẽ sự kiện. Context chứa sự kiện và thời gian của nó dưới dạng văn bản.',
            members: {},
          },
        },
        keyboard: [
          [
            'Phím mũi tên',
            'Di chuyển theo ngày và theo khung giờ. Đảo ngược với văn bản viết từ phải sang trái.',
          ],
          ['Page Up và Page Down', 'Tháng, tuần hoặc ngày trước hay sau.'],
          ['Shift + phím mũi tên', 'Mở rộng khoảng thời gian đã chọn.'],
          [
            'Enter hoặc Phím cách trên một ô',
            'Đi vào các sự kiện của ô, hoặc chọn thời gian của ô.',
          ],
          ['Mũi tên lên và xuống trên một sự kiện', 'Sự kiện trước hoặc sau trong ô.'],
          ['Alt + phím mũi tên trên một sự kiện', 'Di chuyển sự kiện một khung giờ hoặc một ngày.'],
          ['Alt + Shift + mũi tên lên hoặc xuống', 'Rút ngắn hoặc kéo dài sự kiện.'],
          ['Esc', 'Quay lại ô, bỏ thời gian đã chọn, hoặc hủy thao tác kéo.'],
        ],
        notes: [
          'Tháng, tuần và ngày là các <code>grid</code> được đặt tên theo tiêu đề của chúng. Ngày làm tiêu đề cột, giờ làm tiêu đề dòng, nên mỗi ô được đọc kèm ngày và giờ của nó.',
          'Mỗi sự kiện là một nút được đặt tên theo tiêu đề, ngày và giờ của nó, chẳng hạn “Standup, Friday, September 25, 9:00 – 9:30 AM”. Khi di chuyển hoặc đổi độ dài, thời gian mới sẽ được đọc lên.',
          'Mọi thao tác kéo đều có cách làm tương đương bằng bàn phím, nên không ai cần đến con trỏ.',
          'Các chế độ xem là nút bật/tắt trong một nhóm, và khi chuyển sang tuần hoặc tháng khác, tiêu đề mới sẽ được đọc lên.',
        ],
      },
      splitter: {
        name: 'Bộ chia ngăn',
        title: 'Bộ chia và các ngăn co giãn cho Angular',
        summary: 'Các ngăn nằm cạnh nhau hoặc xếp chồng, với tay nắm để đổi kích thước.',
        description:
          'Bộ chia ngăn Angular hỗ trợ tiếp cận: ngăn co giãn nằm cạnh nhau hoặc xếp chồng, có giới hạn, thu gọn được, lưu kích thước và dùng hoàn toàn bằng bàn phím.',
        apiDescription:
          'Tài liệu API về bộ chia ngăn của Needless UI: hướng và kích thước của nuiSplitter, giới hạn và việc thu gọn ngăn, cùng các tay nắm giữa chúng.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bộ chia ngăn Needless UI: tay nắm nhận focus được và mang giá trị, phím mũi tên, Home, End và Enter.',
        overview: [
          'Bộ chia ngăn phân bổ không gian cho các ngăn, với một tay nắm giữa hai ngăn liền kề. Hãy kéo tay nắm, hoặc focus vào nó rồi dùng phím mũi tên. Kích thước là các giá trị phần trăm có tổng bằng 100, và <code>[(sizes)]</code> liên kết chúng.',
          'Kích thước ban đầu, tối thiểu và tối đa của mỗi ngăn có thể tính bằng pixel, rem hoặc phần trăm. Ngăn <code>collapsible</code> sẽ thu gọn khi bị kéo nhỏ hơn một nửa kích thước tối thiểu, hoặc khi nhấn Enter trên tay nắm của nó, và mở lại với đúng kích thước trước đó.',
          'Với <code>storageKey</code>, kích thước được lưu trong <code>localStorage</code>, nên ở lần truy cập sau, người dùng thấy bố cục đúng như lúc họ rời đi.',
        ],
        examples: {
          editor: {
            title: 'Trình soạn thảo',
            text: 'Tệp, mã nguồn và bản xem trước. Ngăn tệp và ngăn xem trước thu gọn được, mã nguồn luôn giữ ít nhất 30% chiều rộng, và kích thước được lưu lại.',
          },
          stacked: {
            title: 'Ngăn xếp chồng',
            text: '<code>orientation="vertical"</code> xếp chồng các ngăn, và <code>[(sizes)]</code> đọc kích thước của chúng mỗi khi thay đổi.',
          },
        },
        api: {
          NuiSplitter: {
            summary: 'Các ngăn với tay nắm ở giữa.',
            members: {
              orientation: 'Nằm cạnh nhau, hoặc xếp chồng.',
              sizes: 'Phần của mỗi ngăn, tính bằng phần trăm, theo thứ tự.',
              storageKey: 'Lưu kích thước trong <code>localStorage</code> dưới khóa này.',
              step: 'Mức phím mũi tên di chuyển tay nắm, tính bằng phần trăm. Gấp đôi khi giữ Shift.',
              move: 'Dời ranh giới phía sau một ngăn theo một tỷ lệ phần trăm.',
            },
          },
          NuiSplitterPane: {
            summary: 'Một ngăn. Kích thước của nó nhận pixel, rem hoặc phần trăm.',
            members: {
              defaultSize: 'Kích thước ban đầu, khi không có kích thước nào để khôi phục.',
              min: 'Kích thước nhỏ nhất.',
              max: 'Kích thước lớn nhất.',
              collapsible:
                'Ngăn thu gọn được: khi bị kéo nhỏ hơn một nửa mức tối thiểu, hoặc bằng Enter.',
              collapsedSize: 'Kích thước khi thu gọn, chẳng hạn một dải biểu tượng.',
              label: 'Đặt tên cho tay nắm đổi kích thước của ngăn.',
            },
          },
          NuiSplitterHandle: {
            summary: 'Tay nắm giữa hai ngăn.',
            members: {
              label: 'Đặt tên cho tay nắm, khi label của ngăn không làm việc đó.',
              disabled: 'Tay nắm không di chuyển được.',
              toggle: 'Thu gọn ngăn bên cạnh, hoặc mở lại ngăn đó.',
            },
          },
        },
        keyboard: [
          [
            'Mũi tên trái và phải',
            'Di chuyển tay nắm giữa các ngăn nằm cạnh nhau. Đảo ngược với văn bản viết từ phải sang trái.',
          ],
          ['Mũi tên lên và xuống', 'Di chuyển tay nắm giữa các ngăn xếp chồng.'],
          ['Shift + phím mũi tên', 'Di chuyển xa gấp đôi.'],
          ['Home và End', 'Đưa ngăn phía trước tay nắm về kích thước nhỏ nhất hoặc lớn nhất.'],
          ['Enter', 'Thu gọn ngăn thu gọn được, hoặc mở lại ngăn đó.'],
        ],
        notes: [
          'Mỗi tay nắm là một <code>separator</code> nhận focus được, như trong mẫu window splitter của WAI-ARIA: giá trị của nó là kích thước của ngăn phía trước, nằm trong giới hạn của ngăn đó, và <code>aria-controls</code> trỏ tới ngăn đó.',
          'Hãy đặt tên cho tay nắm qua <code>label</code> của các ngăn: “Files” cho trình đọc màn hình biết tay nắm đổi kích thước của ngăn nào.',
          'Nhấp đúp vào tay nắm cũng thu gọn ngăn của nó, và thao tác kéo sẽ bắt giữ con trỏ, nên di chuyển nhanh cũng không làm tuột tay nắm.',
        ],
      },
      tour: {
        name: 'Tour hướng dẫn',
        title: 'Component tour hướng dẫn cho Angular',
        summary:
          'Mỗi bước là một thẻ nằm cạnh phần được giới thiệu, phần còn lại của trang được làm tối.',
        description:
          'Tour giới thiệu sản phẩm Angular hỗ trợ tiếp cận: mỗi bước một thẻ cạnh phần tử đích, vùng sáng quanh phần tử đó, bước tương tác được và focus được trả về.',
        apiDescription:
          'Tài liệu API về tour hướng dẫn của Needless UI: các bước của nui-tour, liên kết open và step, các output, cùng đích, vị trí và hook của từng bước.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của tour hướng dẫn Needless UI: mỗi thẻ là hộp thoại mang tên tiêu đề, focus được giữ và trả lại, Esc để thoát.',
        overview: [
          'Tour dẫn người dùng đi qua một trang, từng bước một. Mỗi bước chỉ vào một phần tử bằng một thẻ đặt bên cạnh và làm tối phần còn lại của trang; bước không có đích sẽ hiện ở giữa.',
          'Các bước là dữ liệu thuần: một đích (selector, phần tử hoặc hàm tìm ra phần tử), một tiêu đề, và nội dung dạng văn bản hoặc template. <code>beforeShow</code> chạy trước, nên một bước có thể mở panel chứa đích của nó, và trang sẽ tự cuộn tới đích đang nằm ngoài vùng nhìn thấy.',
          'Mỗi thẻ là một hộp thoại. Thẻ là modal, trừ khi bước đó là <code>interactive</code>: khi ấy người dùng có thể dùng phần tử mà bước chỉ vào. Esc kết thúc tour, và focus quay về chỗ cũ.',
        ],
        examples: {
          basics: {
            title: 'Làm quen',
            text: 'Bốn bước, bước đầu không có đích. <code>finished</code> và <code>dismissed</code> phân biệt hai cách kết thúc.',
          },
          interactive: {
            title: 'Các bước để thử',
            text: '<code>beforeShow</code> mở phần cài đặt trước khi bước thứ hai chỉ vào bên trong, và <code>interactive</code> cho phép người dùng bật tắt công tắc khi thẻ đang hiện.',
          },
        },
        api: {
          NuiTour: {
            summary: 'Một tour hướng dẫn.',
            members: {
              steps: 'Các bước, theo thứ tự.',
              open: 'Tour có đang chạy hay không.',
              step: 'Bước đang hiển thị, tính từ 0.',
              labels: 'Mọi văn bản mà tour hiển thị, để dịch.',
              finished: 'Phát ra khi bước cuối cùng hoàn tất.',
              dismissed: 'Phát ra bước mà tour dừng lại, khi tour kết thúc sớm.',
              start: 'Bắt đầu tour, từ bước đầu tiên hoặc từ bước được chỉ định.',
              end: 'Kết thúc tour, dưới dạng hoàn tất hoặc bỏ dở.',
            },
          },
          NuiTourStep: {
            summary: 'Một bước của tour.',
            members: {
              target: 'Phần tử mà bước chỉ vào. Nếu không có, thẻ hiện ở giữa.',
              title: 'Tiêu đề của thẻ.',
              content: 'Nội dung dạng văn bản, hoặc một template.',
              side: 'Thẻ nằm ở phía nào của đích.',
              align: 'Cách thẻ căn chỉnh với đích.',
              padding: 'Khoảng trống quanh đích trong vùng sáng, tính bằng pixel.',
              interactive: 'Có thể dùng đích khi thẻ đang hiện.',
              beforeShow: 'Chạy trước khi bước hiện ra. Nếu hàm trả về promise, tour sẽ chờ nó.',
            },
          },
        },
        keyboard: [
          ['Tab', 'Di chuyển qua các nút của thẻ. Ở bước modal, focus ở lại trong thẻ.'],
          ['Enter hoặc Phím cách', 'Nhấn nút đang có focus: Next, Back hoặc Done.'],
          ['Esc', 'Kết thúc tour.'],
        ],
        notes: [
          'Mỗi thẻ là một <code>dialog</code> được đặt tên theo tiêu đề và mô tả bằng nội dung của nó. Ở mỗi bước, focus chuyển đến nút chính của thẻ, và quay về chỗ cũ khi tour kết thúc.',
          'Bước modal khiến phần còn lại của trang không thể tương tác. Bước tương tác không phải modal, nên có thể tiếp cận đích của nó bằng bàn phím cũng như bằng con trỏ.',
          'Tiến trình là văn bản, chẳng hạn “2 of 4”; các chấm chỉ minh họa nó.',
        ],
      },
      dropzone: {
        name: 'Vùng thả tệp',
        title: 'Vùng kéo thả và tải tệp lên cho Angular',
        summary: 'Thả hoặc chọn tệp, kèm kiểm tra, xem trước và tải lên có hiển thị tiến trình.',
        description:
          'Vùng thả tệp Angular hỗ trợ tiếp cận: kéo thả, thư mục và dán, kiểm tra loại và kích thước, xem trước ảnh, tải lên có tiến trình và thử lại.',
        apiDescription:
          'Tài liệu API về vùng thả tệp của Needless UI: tệp và kiểm tra của nui-dropzone, hàm tải lên và hàng đợi, các output và văn bản của nó.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của vùng thả tệp Needless UI: vùng thả là một nút, kết quả được đọc lên, thanh tiến trình và thao tác đều có tên.',
        overview: [
          'Vùng thả tệp nhận tệp được thả vào, được chọn bằng hộp chọn tệp, hoặc được dán. Thư mục được thả vào sẽ được đọc toàn bộ, và mỗi tệp giữ nguyên đường dẫn của nó.',
          'Mỗi tệp được kiểm tra theo <code>accept</code>, <code>maxSize</code>, <code>minSize</code>, <code>maxFiles</code> và hàm <code>validate</code> của bạn, còn các tệp bị từ chối được liệt kê kèm lý do. Ảnh có bản xem trước.',
          'Khi không có hàm <code>upload</code>, vùng thả giữ các tệp cho biểu mẫu trong <code>[(files)]</code>. Khi có, nó tải tệp lên vài tệp một lúc, kèm tiến trình, hủy và thử lại. Hãy truyền <code>signal</code> của lượt tải lên cho <code>fetch</code>, để thao tác hủy dừng được nó.',
        ],
        examples: {
          upload: {
            title: 'Tải lên',
            text: 'Một lượt tải lên giả lập báo tiến trình theo từng nấc. Tệp có “fail” trong tên sẽ thất bại, để minh họa thử lại, và <code>directory</code> thêm một nút để chọn thư mục.',
          },
          attach: {
            title: 'Tệp đính kèm cho biểu mẫu',
            text: 'Không có <code>upload</code>: vùng thả giữ tối đa ba tài liệu trong <code>[(files)]</code>, và văn bản riêng của nó thay cho văn bản mặc định.',
          },
        },
        api: {
          NuiDropzone: {
            summary: 'Nơi để thả tệp, hoặc chọn tệp.',
            members: {
              files: 'Các tệp đang giữ, theo thứ tự.',
              accept: 'Các loại tệp được nhận, như với <code>&lt;input type="file"&gt;</code>.',
              multiple: 'Nhiều tệp cùng lúc.',
              directory: 'Thêm một nút để chọn thư mục.',
              maxFiles: 'Số tệp tối đa có thể giữ.',
              'maxSize, minSize': 'Kích thước tệp lớn nhất và nhỏ nhất, tính bằng byte.',
              validate: 'Kiểm tra từng tệp. Trả về một thông báo thì tệp bị từ chối.',
              upload: 'Gửi một tệp. Nếu không có, tệp chỉ được giữ lại.',
              concurrency: 'Số tệp được tải lên cùng lúc.',
              hint: 'Một dòng dưới văn bản của vùng thả, chẳng hạn loại tệp nó nhận.',
              disabled: 'Không nhận tệp nào.',
              labels: 'Mọi văn bản mà vùng thả hiển thị hoặc đọc lên, để dịch.',
              uploaded: 'Phát ra tệp đã tải lên, kèm giá trị mà <code>upload</code> trả về.',
              rejected: 'Phát ra các tệp bị từ chối, kèm lý do.',
              queue: 'Hàng đợi tải lên, để hủy, thử lại và đọc tiến trình từ mã.',
              take: 'Thêm tệp từ mã, có kiểm tra từng tệp.',
            },
          },
          NuiUploader: {
            summary: 'Gửi một tệp: báo tiến trình từ 0 đến 1, và dừng khi signal bị hủy.',
            members: {
              '(file, context)': 'Trả về một promise chứa bất cứ thứ gì máy chủ của bạn phản hồi.',
            },
          },
        },
        keyboard: [
          ['Enter hoặc Phím cách', 'Trên vùng thả, mở hộp chọn tệp.'],
          ['Ctrl + V hoặc ⌘ + V', 'Trên vùng thả, thêm các tệp được dán.'],
          ['Tab', 'Di chuyển qua vùng thả và các thao tác của từng tệp.'],
        ],
        notes: [
          'Vùng thả là một nút, nên dùng được mà không cần con trỏ, và gợi ý đóng vai trò mô tả của nó.',
          'Tệp được thêm và tệp bị từ chối đều được đọc lên. Mỗi thanh tiến trình là một <code>progressbar</code> được đặt tên theo tệp của nó, và mỗi thao tác được đặt tên theo việc nó làm, chẳng hạn “Remove beach.jpg”.',
          'Bản xem trước chỉ mang tính trang trí: tên tệp đã cho biết đó là tệp nào.',
        ],
      },
      mask: {
        name: 'Mặt nạ nhập liệu',
        title: 'Directive mặt nạ nhập liệu cho Angular',
        summary: 'Ô văn bản tự định dạng ngay khi gõ: ngày tháng, số thẻ, IBAN, các loại mã.',
        description:
          'Mặt nạ nhập liệu cho Angular: định dạng ô văn bản ngay khi gõ, con trỏ giữ nguyên vị trí, các hàm hỗ trợ cho thẻ và IBAN, cùng kiểm tra hợp lệ trong form.',
        apiDescription:
          'Tài liệu API về mặt nạ nhập liệu của Needless UI: directive nuiMask, token và giá trị của nó, cùng các hàm hỗ trợ cho số thẻ và IBAN.',
        a11yDescription:
          'Khả năng tiếp cận của mặt nạ nhập liệu Needless UI: ô nhập native với nhãn riêng, bàn phím số trên điện thoại và thao tác xóa bỏ qua ký tự cố định.',
        overview: [
          'Mặt nạ định dạng ô văn bản ngay khi người dùng gõ: <code>00/00/0000</code> tự chèn dấu gạch chéo, <code>AA 000 AA</code> lần lượt nhận chữ cái và chữ số. Ký tự không khớp sẽ bị bỏ qua, và con trỏ giữ nguyên vị trí khi người dùng gõ ở giữa.',
          'Mặt nạ gồm token và ký tự cố định: <code>0</code> là một chữ số, <code>a</code> là một chữ cái, <code>*</code> là một trong hai, còn <code>A</code> và <code>X</code> là dạng tương ứng dành cho mã, viết hoa. Thêm token của riêng bạn bằng <code>tokens</code>, hoặc truyền vào một hàm chọn mặt nạ theo nội dung đã gõ, như cách <code>nuiCardMask</code> chọn theo thương hiệu thẻ.',
          'Giá trị là nội dung đang hiển thị, hoặc chỉ phần dữ liệu khi có <code>unmask</code>. Mặt nạ dùng được với Signal Forms, reactive forms và <code>ngModel</code>; giá trị chưa nhập đủ được coi là lỗi.',
        ],
        examples: {
          formats: {
            title: 'Định dạng',
            text: 'Ngày, giờ, biển số xe, và một màu có token riêng cho chữ số thập lục phân.',
          },
          payment: {
            title: 'Thông tin thanh toán',
            text: 'Các ô nhập Signal Forms. Mặt nạ thẻ thay đổi theo thương hiệu thẻ, mã bảo mật có bốn chữ số với American Express, còn <code>nuiCardValid</code> và <code>nuiIbanValid</code> kiểm tra các số.',
          },
        },
        api: {
          NuiMask: {
            summary: 'Một mặt nạ trên ô văn bản native.',
            members: {
              nuiMask: 'Mặt nạ, hoặc một hàm chọn mặt nạ theo dữ liệu đã gõ.',
              tokens: 'Các ký tự mặt nạ cần thêm hoặc thay thế.',
              unmask: 'Giá trị chỉ gồm dữ liệu, không có ký tự cố định.',
              value: 'Giá trị: nội dung đang hiển thị, hoặc dữ liệu khi có <code>unmask</code>.',
              raw: 'Dữ liệu đã gõ, không có ký tự cố định.',
              complete: 'Mọi vị trí trong mặt nạ đã được điền hay chưa.',
            },
          },
          Helpers: {
            summary: 'Các hàm để định dạng, kiểm tra và tạo mặt nạ.',
            members: {
              'nuiMaskFormat, nuiUnmask':
                'Định dạng một giá trị theo mặt nạ, hoặc tách dữ liệu ra khỏi giá trị đã định dạng.',
              nuiCardMask: 'Mặt nạ cho số thẻ, chia nhóm như cách thương hiệu thẻ in số.',
              nuiCardBrand: 'Thương hiệu của một số thẻ, dựa vào các chữ số đầu.',
              'nuiCardValid, nuiLuhn':
                'Số thẻ có đúng độ dài theo thương hiệu và vượt qua kiểm tra Luhn hay không.',
              nuiIbanMask: 'Mặt nạ cho IBAN, dài đúng bằng IBAN của quốc gia đó.',
              nuiIbanValid: 'IBAN có đúng độ dài theo quốc gia và đúng chữ số kiểm tra hay không.',
            },
          },
        },
        keyboard: [
          ['Backspace', 'Xóa ký tự trước con trỏ, bỏ qua các ký tự cố định.'],
          ['Delete', 'Xóa ký tự sau con trỏ, bỏ qua các ký tự cố định.'],
        ],
        notes: [
          'Mặt nạ hoạt động trên chính <code>&lt;input&gt;</code> của bạn, nên nhãn và gợi ý vẫn giữ nguyên như bạn đã viết. Hãy ghi rõ nội dung cần nhập ở đó: mặt nạ không phải là lời hướng dẫn.',
          'Mặt nạ chỉ gồm chữ số sẽ đặt <code>inputmode="numeric"</code>, để điện thoại hiển thị bàn phím số, trừ khi ô nhập đã tự đặt chế độ nhập riêng.',
          'Chữ số của mọi hệ chữ đều được chấp nhận và được ghi thành 0 đến 9.',
        ],
      },
      'phone-field': {
        name: 'Ô nhập số điện thoại',
        title: 'Ô nhập số điện thoại cho Angular',
        summary:
          'Bộ chọn quốc gia và số điện thoại, được chia nhóm theo cách viết của quốc gia đó.',
        description:
          'Ô nhập số điện thoại Angular hỗ trợ tiếp cận: bộ chọn quốc gia, số được chia nhóm theo cách viết của từng nước, gõ hoặc dán mã quốc gia, và giá trị E.164.',
        apiDescription:
          'Tài liệu API về ô nhập số điện thoại của Needless UI: giá trị và quốc gia của nui-phone-field, danh sách quốc gia, cùng các hàm đọc và ghi số.',
        a11yDescription:
          'Khả năng tiếp cận của ô nhập số điện thoại Needless UI: bộ chọn quốc gia có tên, đọc lên quốc gia được chọn theo mã, và tự điền của trình duyệt.',
        overview: [
          'Ô nhập số điện thoại gồm một bộ chọn quốc gia và một ô số. Số được chia nhóm ngay khi gõ, theo cách quốc gia của nó viết số điện thoại, còn giá trị là số ở định dạng E.164, chẳng hạn <code>+393331234567</code>.',
          'Người dùng gõ số theo cách họ quen thuộc. Số 0 ở đầu (hoặc số 1 trước số Bắc Mỹ) được hiểu là tiền tố quay số trong nước và bị bỏ khỏi giá trị. Mã quốc gia được gõ hoặc dán vào, chẳng hạn <code>+44</code> hay <code>0044</code>, sẽ chọn quốc gia tương ứng; mã vùng cũng vậy, ở những nơi nhiều quốc gia dùng chung một mã quốc gia.',
          'Quốc gia ban đầu là quốc gia của locale, và <code>countries</code> giới hạn danh sách. Khi dùng với biểu mẫu, số quá ngắn hoặc quá dài so với quốc gia của nó được coi là lỗi. Để xác thực đầy đủ, hãy kiểm tra số cả ở phía máy chủ.',
        ],
        examples: {
          basic: {
            title: 'Một số điện thoại',
            text: 'Bắt đầu bằng <code>+</code> và mã quốc gia để đổi quốc gia ngay khi gõ.',
          },
          countries: {
            title: 'Quốc gia do bạn chọn',
            text: '<code>countries</code> cung cấp mười một quốc gia, ô nhập dùng được với một <code>FormControl</code> của reactive forms, và <code>nuiFormatPhone</code> ghi lại giá trị ở dạng dễ đọc.',
          },
        },
        api: {
          NuiPhoneField: {
            summary: 'Một ô nhập số điện thoại.',
            members: {
              value: 'Số ở định dạng E.164, hoặc trống.',
              country: 'Quốc gia, dưới dạng mã khu vực hai chữ cái.',
              countries: 'Các quốc gia được cung cấp, dưới dạng mã khu vực.',
              locale: 'Ngôn ngữ của tên quốc gia.',
              label:
                'Đặt tên cho ô số, khi không có <code>&lt;label for&gt;</code> nào làm việc đó.',
              inputId: 'Id của ô số, dùng cho <code>&lt;label for&gt;</code>.',
              placeholder: 'Văn bản hiển thị khi ô số còn trống.',
              invalid: 'Đánh dấu số là không hợp lệ.',
              disabled: 'Không thể thay đổi.',
              labels: 'Mọi văn bản mà ô nhập đọc lên, để dịch.',
            },
          },
          Helpers: {
            summary: 'Các hàm cho số điện thoại.',
            members: {
              nuiParsePhone:
                'Đọc một số viết theo bất kỳ cách nào, tách thành khu vực, mã quốc gia và số trong nước.',
              nuiFormatPhone:
                'Ghi một số theo cách chia nhóm của quốc gia đó, hoặc ở định dạng E.164.',
              nuiPhoneValid: 'Số có mã quốc gia đã biết và đúng độ dài theo quốc gia hay không.',
            },
          },
        },
        keyboard: [
          ['Chữ cái trên bộ chọn quốc gia', 'Nhảy tới các quốc gia bắt đầu bằng các chữ đó.'],
          ['Enter hoặc Phím cách', 'Mở danh sách quốc gia, hoặc chọn một quốc gia.'],
          ['Backspace', 'Trong ô số, xóa một chữ số, bỏ qua dấu cách và dấu ngoặc.'],
        ],
        notes: [
          'Bộ chọn quốc gia có tên “Country code” và đọc lên cờ cùng mã của quốc gia đang chọn. Khi mã quốc gia hoặc mã vùng chọn một quốc gia, quốc gia mới sẽ được đọc lên.',
          'Đặt tên cho ô số bằng <code>&lt;label for&gt;</code> và <code>inputId</code>, hoặc bằng <code>label</code>.',
          'Ô số có <code>autocomplete="tel"</code>, nên trình duyệt có thể tự điền toàn bộ số, kể cả mã quốc gia, và điện thoại hiển thị bàn phím quay số.',
        ],
      },
      'color-picker': {
        name: 'Bộ chọn màu',
        title: 'Bộ chọn màu OKLCH cho Angular',
        summary:
          'Một màu trong OKLCH, với thanh trượt, mẫu màu, công cụ hút màu và kiểm tra độ tương phản.',
        description:
          'Bộ chọn màu OKLCH Angular hỗ trợ tiếp cận: màu P3 gam rộng, mọi cú pháp màu CSS, mẫu màu, công cụ hút màu và kiểm tra độ tương phản theo WCAG.',
        apiDescription:
          'Tài liệu API về bộ chọn màu của Needless UI: giá trị, định dạng và gam màu của nui-color-picker, mẫu màu, độ tương phản và các hàm xử lý màu.',
        a11yDescription:
          'Bàn phím và khả năng tiếp cận của bộ chọn màu Needless UI: thanh trượt hai giá trị cho vùng màu, thanh trượt native và mức tương phản nêu bằng chữ.',
        overview: [
          'Bộ chọn màu hoạt động trong OKLCH, không gian màu theo cảm nhận của CSS hiện đại. Theo chiều ngang của vùng màu, độ bão hòa (chroma) tăng từ xám đến mức cao nhất mà màn hình hiển thị được ở độ sáng đó, nên mọi điểm đều là màu dùng được, và nút kéo vẫn đứng yên khi sắc độ thay đổi.',
          'Ô nhập nhận mọi màu CSS, kể cả tên màu, và nút định dạng ghi giá trị ở dạng hex, <code>rgb()</code>, <code>hsl()</code>, <code>oklch()</code> hoặc <code>color(display-p3)</code>. Màu nằm ngoài gam màu của một định dạng sẽ được đưa vào gam đó theo cách của CSS, giữ nguyên độ sáng và sắc độ.',
          'Thêm <code>swatches</code> để có sẵn các mẫu màu cho người dùng chọn, và <code>contrastWith</code> để kiểm tra độ tương phản của màu trên một nền theo cách đo của WCAG 2. Ở trình duyệt có công cụ hút màu, một nút sẽ lấy màu ngay từ màn hình.',
        ],
        examples: {
          brand: {
            title: 'Màu thương hiệu',
            text: 'Các mẫu màu có tên, và độ tương phản của chữ trắng trên màu đó: chọn một màu sáng, AA sẽ không đạt.',
          },
          wide: {
            title: 'Gam màu rộng',
            text: '<code>gamut="p3"</code> lấp đầy vùng màu bằng các màu Display P3, và một đường nét đứt đánh dấu nơi sRGB kết thúc. Giá trị vẫn ở dạng <code>oklch()</code>.',
          },
          popover: {
            title: 'Trong popover',
            text: 'Một nút hiển thị màu sẽ mở bộ chọn trong một <a href="/components/popover">popover</a>.',
          },
        },
        api: {
          NuiColorPicker: {
            summary: 'Bộ chọn màu trong OKLCH.',
            members: {
              value: 'Màu, được ghi theo định dạng đã chọn. Trống cho đến khi chọn một màu.',
              format: 'Cách ghi giá trị.',
              formats: 'Các định dạng mà nút định dạng lần lượt chuyển qua.',
              gamut: 'Các màu mà vùng màu chứa: sRGB, hoặc Display P3.',
              alpha: 'Hiển thị thanh trượt độ mờ đục.',
              swatches: 'Các màu để chọn, kèm tên.',
              contrastWith: 'Nền dùng để kiểm tra độ tương phản.',
              eyeDropper: 'Hiển thị công cụ hút màu, ở trình duyệt có hỗ trợ.',
              disabled: 'Không thể thay đổi.',
              labels: 'Mọi văn bản mà bộ chọn đọc lên, để dịch.',
              color: 'Màu đã chọn, trong OKLCH.',
            },
          },
          Helpers: {
            summary: 'Các hàm xử lý màu.',
            members: {
              nuiParseColor: 'Đọc một màu viết theo bất kỳ cú pháp CSS nào.',
              nuiFormatColor: 'Ghi một màu theo một định dạng.',
              nuiToGamut: 'Đưa một màu vào sRGB hoặc Display P3, như cách CSS làm.',
              nuiContrast: 'Tỷ lệ tương phản WCAG 2 của một màu trên một nền.',
            },
          },
        },
        keyboard: [
          ['Mũi tên trái và phải', 'Trên vùng màu, giảm hoặc tăng độ bão hòa.'],
          ['Mũi tên lên và xuống', 'Trên vùng màu, sáng hơn hoặc tối hơn.'],
          ['Shift + phím mũi tên', 'Di chuyển xa gấp mười lần.'],
          ['Home và End', 'Trên vùng màu, độ bão hòa bằng không hoặc cao nhất.'],
          ['Page Up và Page Down', 'Trên vùng màu, sáng hơn hoặc tối hơn nhiều.'],
        ],
        notes: [
          'Nút kéo của vùng màu là một <code>slider</code> có tên “Color”, đọc lên cả hai giá trị, chẳng hạn “Lightness 62%, chroma 75%”. Sắc độ và độ mờ đục dùng thanh trượt range native.',
          'Mẫu màu là các nút được đặt tên theo nhãn của chúng, và ở trạng thái được nhấn khi trùng với màu hiện tại.',
          'AA và AAA nói “passes” hoặc “fails” bằng chữ, không chỉ bằng màu, và ở chế độ forced colors, bản thân các màu vẫn được giữ nguyên.',
        ],
      },
    },
  },

  guides: {
    title: 'Hướng dẫn',
    items: {
      'getting-started': {
        title: 'Bắt đầu sử dụng',
        description:
          'Cài đặt Needless UI vào ứng dụng Angular 22: thêm gói, import stylesheet và dùng component hỗ trợ tiếp cận đầu tiên của bạn chỉ trong vài phút.',
        blocks: [
          {
            kind: 'p',
            html: 'Needless UI hoạt động với Angular 22. Các component là standalone directive, nên không cần import module nào.',
          },
          { kind: 'h2', id: 'install', text: 'Cài đặt' },
          {
            kind: 'p',
            html: 'Thêm gói Angular cùng với Angular Aria và CDK, hai thư viện cung cấp hành vi bàn phím và khả năng tiếp cận. Stylesheet đi kèm sẵn trong gói.',
          },
          { kind: 'code', file: 'snippets/install.sh' },
          { kind: 'h2', id: 'styles', text: 'Import style' },
          {
            kind: 'p',
            html: 'Import stylesheet một lần trong <code>src/styles.css</code>. Stylesheet này bao gồm các design token và mọi component.',
          },
          { kind: 'code', file: 'snippets/styles.css' },
          {
            kind: 'p',
            html: 'Mọi thứ đều nằm trong <code>@layer nui</code>. Nếu ứng dụng của bạn có các reset toàn cục như <code>a { color: inherit }</code>, hãy đặt chúng trong một layer được khai báo trước <code>nui</code> để chúng không ghi đè component.',
          },
          { kind: 'h2', id: 'use', text: 'Sử dụng component' },
          {
            kind: 'p',
            html: 'Import các directive bạn cần từ entry point tương ứng và thêm chúng vào <code>imports</code> của component.',
          },
          { kind: 'code', file: 'snippets/usage.ts' },
          { kind: 'h2', id: 'next', text: 'Bước tiếp theo' },
          {
            kind: 'p',
            html: 'Xem các <a href="/components">component</a> để thử ví dụ trực tiếp, hoặc đọc <a href="/guides/theming">hướng dẫn tùy chỉnh theme</a> để khớp với thương hiệu của bạn.',
          },
        ],
      },
      theming: {
        title: 'Tùy chỉnh theme',
        description:
          'Tùy chỉnh theme Needless UI bằng biến CSS: chế độ sáng và tối, theme lồng nhau, ghi đè token và bảng màu thương hiệu được kiểm tra độ tương phản.',
        blocks: [
          {
            kind: 'p',
            html: 'Mọi quyết định về mặt thị giác đều là một biến CSS được sinh từ design token W3C. Component chỉ dùng token ngữ nghĩa như <code>--nui-color-accent-solid</code>, nên thay đổi một token sẽ đổi style của mọi component dùng token đó.',
          },
          { kind: 'h2', id: 'modes', text: 'Sáng và tối' },
          {
            kind: 'p',
            html: 'Mặc định, chế độ được chọn theo thiết lập của hệ điều hành. Cố định chế độ trên bất kỳ phần tử nào bằng <code>data-nui-theme</code>, và lồng chúng vào nhau tùy ý.',
          },
          { kind: 'code', file: 'snippets/theme-attribute.html' },
          { kind: 'demo', demo: 'nested-themes' },
          { kind: 'h2', id: 'tokens', text: 'Ghi đè token' },
          {
            kind: 'p',
            html: 'Token nằm trong <code>@layer nui</code>, nên CSS thông thường trong ứng dụng của bạn có thể ghi đè chúng. Đặt token trên <code>:root</code> cho toàn bộ ứng dụng, hoặc trên bất kỳ phần tử nào cho riêng một phần.',
          },
          { kind: 'code', file: 'snippets/override.css' },
          { kind: 'h2', id: 'palette', text: 'Bảng màu thương hiệu' },
          {
            kind: 'p',
            html: 'Các thang màu được sinh tự động. Đổi sắc độ (hue) trong <code>packages/tokens/scripts/palette.ts</code> rồi sinh lại: script sẽ điều chỉnh mọi màu về không gian sRGB và kiểm tra lại độ tương phản của từng cặp chữ và nền.',
          },
          { kind: 'code', file: 'snippets/palette.sh' },
        ],
      },
      customization: {
        title: 'Tùy biến',
        description:
          'Vật lý lò xo, hiệu ứng nhấn và xuất hiện, hình dạng và bo góc, mật độ: thay đổi chuyển động và cảm giác của Needless UI cho cả ứng dụng hoặc từng component.',
        blocks: [
          {
            kind: 'p',
            html: 'Mỗi component đều có một cá tính mà bạn có thể thay đổi: lò xo quyết định chuyển động của nó, phản ứng của nút dưới ngón tay bạn, cách hộp thoại và menu xuất hiện, hình dạng và kích thước các góc, cũng như lượng không gian chúng chiếm. Mỗi yếu tố được đặt bằng một thuộc tính cho mọi thứ bên trong một phần tử, hoặc một input cho riêng một component.',
          },
          { kind: 'demo', demo: 'playground' },
          { kind: 'h2', id: 'attributes', text: 'Một thuộc tính, cả một cây con' },
          {
            kind: 'p',
            html: 'Đặt các thuộc tính <code>data-nui-*</code> trên <code>&lt;body&gt;</code> cho toàn bộ ứng dụng, hoặc trên bất kỳ phần tử nào cho riêng một phần. Thuộc tính gần nhất sẽ được áp dụng, nên bạn có thể lồng chúng vào nhau. Chúng chỉ đặt biến CSS, nên hoạt động như nhau với mọi framework, hoặc khi không dùng framework nào.',
          },
          { kind: 'code', file: 'snippets/customize.html' },
          { kind: 'h2', id: 'inputs', text: 'Một component' },
          {
            kind: 'p',
            html: 'Trong Angular, <code>nuiButton</code>, <code>nuiDialog</code> và <code>nuiMenu</code> nhận cùng các giá trị đó dưới dạng input. Những input bạn không đặt sẽ theo các thuộc tính ở phần tử bao ngoài.',
          },
          { kind: 'code', file: 'snippets/customize-inputs.html' },
          { kind: 'h2', id: 'springs', text: 'Lò xo, biên dịch sang CSS' },
          {
            kind: 'p',
            html: 'Chuyển động dựa trên vật lý lò xo: độ cứng, độ giảm chấn và khối lượng thay cho thời lượng và đường cong. Trình biên dịch token tính toán từng lò xo rồi ghi vào CSS dưới dạng thời gian cần để ổn định và một hàm easing <code>linear()</code>, nên chuyển động chạy trên compositor mà không cần JavaScript. Sáu lò xo có sẵn dưới dạng token, từ <code>--nui-spring-snappy</code> đến <code>--nui-spring-mechanical</code>, và <code>--nui-motion</code> giữ lò xo đang được dùng.',
          },
          {
            kind: 'p',
            html: 'Mọi lò xo khác chỉ cần một input. Angular biên dịch nó lúc runtime bằng cùng bộ giải đó, còn <code>springTransition()</code> cho bạn CSS để dùng với các phần tử của riêng bạn.',
          },
          { kind: 'code', file: 'snippets/customize-spring.ts' },
          { kind: 'h2', id: 'css', text: 'Mọi giá trị ở giữa' },
          {
            kind: 'p',
            html: 'Preset chỉ là lối tắt. Với mọi thứ khác, hãy tự đặt các biến CSS: bất kỳ transform nào cho <code>--nui-press</code> và <code>--nui-enter</code>, bất kỳ số nào cho <code>--nui-radius-scale</code> và <code>--nui-density</code>.',
          },
          { kind: 'code', file: 'snippets/customize.css' },
          { kind: 'h2', id: 'accessibility', text: 'Khả năng tiếp cận' },
          {
            kind: 'p',
            html: 'Khi hệ thống yêu cầu giảm chuyển động, lò xo hoàn tất ngay lập tức, còn hiệu ứng nhấn và hiệu ứng xuất hiện ngừng chuyển động. Mật độ không bao giờ khiến một phần tử điều khiển nhỏ hơn vùng nhấn 24px của WCAG 2.2, và không preset nào thay đổi màu sắc, nên mọi kiểm tra độ tương phản vẫn đạt. Trình duyệt không hỗ trợ <code>corner-shape</code> sẽ vẽ mọi góc bo tròn.',
          },
        ],
      },
    },
    playground: {
      label: 'Khu thử nghiệm tùy biến',
      motion: 'Chuyển động',
      custom: 'tùy chỉnh',
      stiffness: 'Độ cứng',
      damping: 'Giảm chấn',
      mass: 'Khối lượng',
      press: 'Nhấn',
      enter: 'Xuất hiện',
      corners: 'Góc',
      radius: 'Bo góc',
      density: 'Mật độ',
      surprise: 'Làm tôi bất ngờ',
      reset: 'Về mặc định',
      hint: 'Nhấn giữ một nút rồi thả ra. Mở hộp thoại và menu để xem cách chúng xuất hiện.',
      save: 'Lưu',
      cancel: 'Hủy',
      delete: 'Xóa',
      openDialog: 'Mở hộp thoại',
      openMenu: 'Mở menu',
      menu: ['Đổi tên', 'Nhân bản', 'Xóa'],
      dialogTitle: 'Sinh động đến mức thừa thãi',
      dialogText: 'Hộp thoại này xuất hiện đúng như cách bạn đã dặn.',
      close: 'Đóng',
      curve:
        'Vị trí của lò xo theo thời gian. Đường cong bắt đầu từ dưới cùng và dừng lại trên đường nét đứt.',
      settles: (ms, overshoot) => `Ổn định sau ${ms} ms · vượt quá ${overshoot}%`,
      instant: 'Không có chuyển động: mọi thứ nhảy thẳng đến đích.',
      stuck:
        'Lò xo này không ổn định trong vòng 10 giây. Hãy tăng độ giảm chấn hoặc độ cứng; trong lúc đó, các component vẫn giữ lò xo gần nhất đã ổn định.',
      reducedMotion:
        'Hệ thống của bạn yêu cầu giảm chuyển động, nên ở đây không có gì chuyển động. Lò xo, hiệu ứng nhấn và hiệu ứng xuất hiện sẽ trở lại khi hệ thống không còn yêu cầu nữa.',
      noCornerShape: 'Trình duyệt này chưa vẽ được hình dạng góc, nên mọi góc vẫn được bo tròn.',
      everywhere: 'Trên bất kỳ phần tử nào, cho mọi thứ bên trong nó:',
      oneComponent: 'Trên một component, trong Angular:',
    },
  },

  notFound: {
    title: 'Không tìm thấy trang',
    description:
      'Trang này không tồn tại. Hãy xem các component của Needless UI hoặc bắt đầu lại từ trang chủ.',
    text: 'Trang này không tồn tại, hoặc đã được chuyển đi.',
    home: 'Về trang chủ',
    components: 'Xem các component',
  },

  legal: {
    translationNote:
      'Bản dịch này được cung cấp để tiện theo dõi; nếu có khác biệt, văn bản tiếng Anh sẽ được ưu tiên áp dụng.',
    labels: {
      name: 'Tên',
      address: 'Địa chỉ',
      email: 'Email',
      uid: 'UID',
      vat: 'Mã số thuế VAT',
    },
    notice: {
      title: 'Thông tin pháp lý',
      description:
        'Ai vận hành needlessui.com: tên, địa chỉ bưu chính và email của đơn vị vận hành, kèm thông tin đăng ký thương mại và thuế VAT.',
      operator: 'Đơn vị vận hành',
      legalForm: 'doanh nghiệp tư nhân',
      country: 'Thụy Sĩ',
      register: 'Đăng ký thương mại',
      registerEntry: 'Đã đăng ký trong sổ đăng ký thương mại của bang Zug.',
      vatSuffix: 'MWST',
      blocks: [
        { kind: 'h2', id: 'liability', text: 'Trách nhiệm pháp lý' },
        {
          kind: 'p',
          html: 'Trang web này được biên soạn cẩn thận, nhưng không có bất kỳ bảo đảm nào về tính chính xác, đầy đủ hay cập nhật của nội dung. Các trang web được liên kết nằm ngoài tầm kiểm soát của chúng tôi; đơn vị vận hành các trang đó chịu trách nhiệm về nội dung của họ.',
        },
        { kind: 'h2', id: 'license', text: 'Giấy phép' },
        {
          kind: 'p',
          html: 'Needless UI, bao gồm cả trang web này, là mã nguồn mở theo <a href="https://github.com/needless-ui/needless-ui/blob/main/LICENSE">Giấy phép MIT</a>.',
        },
      ],
    },
    privacy: {
      title: 'Chính sách quyền riêng tư',
      description:
        'Cách needlessui.com xử lý dữ liệu cá nhân: không cookie, không phân tích, không theo dõi. Bên lưu trữ xử lý gì khi bạn truy cập, và quyền của bạn.',
      updated: 'Cập nhật lần cuối: ngày 24 tháng 9 năm 2026',
      blocks: [
        {
          kind: 'p',
          html: 'Chính sách này giải thích những dữ liệu cá nhân nào được xử lý khi bạn truy cập www.needlessui.com, và bạn có những quyền gì. Tóm lại: trang web không dùng cookie, công cụ phân tích hay theo dõi, và không bao giờ yêu cầu bạn cung cấp dữ liệu cá nhân.',
        },
        { kind: 'h2', id: 'controller', text: 'Bên chịu trách nhiệm' },
        {
          kind: 'p',
          html: 'Đơn vị vận hành được nêu trong <a href="/legal">thông tin pháp lý</a>, Angelo Lamonaca. Liên hệ: {email}.',
        },
        { kind: 'h2', id: 'hosting', text: 'Lưu trữ web' },
        {
          kind: 'p',
          html: 'Trang web được lưu trữ bởi Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Khi bạn mở một trang, trình duyệt của bạn gửi đi những dữ liệu kỹ thuật mà trang web nào cũng nhận được: địa chỉ IP, ngày giờ, trang được yêu cầu, trang bạn truy cập trước đó và user agent của trình duyệt. Vercel xử lý dữ liệu này thay mặt chúng tôi để phân phối trang web và giữ an toàn cho trang, và chỉ lưu giữ trong thời gian cần thiết cho mục đích đó. Việc xử lý có thể diễn ra tại Hoa Kỳ; Vercel được chứng nhận theo EU-U.S. Data Privacy Framework, phần mở rộng cho Vương quốc Anh (UK Extension) và Swiss-U.S. Data Privacy Framework. Xem <a href="https://vercel.com/legal/privacy-policy">thông báo quyền riêng tư của Vercel</a>.',
        },
        {
          kind: 'p',
          html: 'Khi GDPR được áp dụng, cơ sở pháp lý là lợi ích chính đáng của chúng tôi trong việc vận hành một trang web an toàn (điểm f khoản 1 Điều 6 GDPR).',
        },
        { kind: 'h2', id: 'storage', text: 'Cookie và bộ nhớ cục bộ' },
        {
          kind: 'p',
          html: 'Trang web không đặt cookie. Nếu bạn chọn giao diện sáng hoặc tối, bộ nhớ cục bộ (local storage) của trình duyệt sẽ ghi nhớ lựa chọn đó cho lần truy cập sau. Dữ liệu này không bao giờ rời khỏi thiết bị của bạn; để xóa, hãy chuyển lại về “Theo hệ thống” hoặc xóa dữ liệu của trang web.',
        },
        { kind: 'h2', id: 'tracking', text: 'Không theo dõi' },
        {
          kind: 'p',
          html: 'Trang web không có công cụ phân tích, quảng cáo, plugin mạng xã hội, nội dung nhúng của bên thứ ba hay phông chữ bên ngoài. Các liên kết đến GitHub và npm dẫn tới những trang web có chính sách quyền riêng tư riêng.',
        },
        { kind: 'h2', id: 'rights', text: 'Quyền của bạn' },
        {
          kind: 'p',
          html: 'Bạn có thể yêu cầu biết những dữ liệu cá nhân nào về bạn đang được xử lý, và yêu cầu chỉnh sửa hoặc xóa chúng. Khi GDPR được áp dụng, bạn còn có thể phản đối việc xử lý, yêu cầu hạn chế xử lý và nhận dữ liệu của mình ở định dạng có thể chuyển giao. Hãy viết thư đến {email}. Bạn cũng có thể khiếu nại với cơ quan giám sát: tại Thụy Sĩ là Ủy viên Liên bang về Bảo vệ Dữ liệu và Thông tin (FDPIC); tại EU là cơ quan có thẩm quyền ở quốc gia của bạn.',
        },
        { kind: 'h2', id: 'changes', text: 'Thay đổi' },
        {
          kind: 'p',
          html: 'Chính sách này thay đổi khi trang web thay đổi, chẳng hạn khi chuyển sang nhà cung cấp lưu trữ mới. Ngày ghi bên dưới cho biết phiên bản hiện hành.',
        },
      ],
    },
  },
};
