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
      kinds: { input: 'Input', model: 'Hai chiều', output: 'Output', method: 'Phương thức' },
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
