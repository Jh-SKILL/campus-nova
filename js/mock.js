/* 星图校园统一模拟数据：后续可由服务端同构数据替换 */
window.NovaDB = {
  user: {
    id: "u-nova",
    name: "林小星",
    initial: "星",
    grade: "2026 级",
    major: "数字媒体技术",
    verified: true,
    title: "新星探索者"
  },

  categories: [
    { id: "all", label: "全部地点" },
    { id: "study", label: "学习成长" },
    { id: "sports", label: "运动活力" },
    { id: "life", label: "校园生活" },
    { id: "social", label: "社交活动" }
  ],

  zones: [
    {
      id: "academic", name: "教学科研区", en: "ACADEMIC CORE", color: "#6E93B8",
      summary: "6A–6C、8A–8D 与教一至教四串起校园的教学主环，通识课、专业课与实训都集中在这一带。",
      focus: { x: 520, y: 545 }, zoom: 1.35,
      paths: [
        "M 46 386 Q 160 362 292 364 L 374 384 Q 412 410 422 460 Q 430 502 464 526 L 474 548 L 466 606 Q 464 668 424 708 L 330 732 Q 198 752 92 744 Q 46 738 44 664 L 46 470 Z",
        "M 430 550 Q 470 532 570 528 Q 664 524 686 554 L 694 690 Q 686 744 636 756 L 518 766 Q 456 764 446 714 Z",
        "M 644 308 Q 760 286 882 292 Q 970 298 990 336 L 984 470 Q 970 522 918 538 L 842 554 Q 774 562 734 534 Q 666 514 644 480 Z",
        "M 68 196 Q 110 176 200 174 Q 292 172 316 200 L 320 300 Q 314 344 248 354 L 150 358 Q 94 352 76 320 Z"
      ],
      spots: [
        { id: "bld-6b", name: "6B 教学楼", note: "公共基础课", x: 156, y: 423 },
        { id: "bld-6c", name: "6C 教学楼", note: "专业课程", x: 213, y: 504 },
        { id: "bld-6a", name: "6A 教学楼", note: "实训教室", x: 143, y: 585 },
        { id: "bld-train", name: "培训楼", note: "职业技能培训", x: 400, y: 573 },
        { id: "bld-8a", name: "8A 信息技术", note: "现代信息技术大楼", x: 520, y: 566 },
        { id: "bld-8b", name: "8B 设计智造", note: "设计与智造大楼", x: 500, y: 639 },
        { id: "bld-8c", name: "8C 现代服务", note: "现代服务大楼", x: 554, y: 704 },
        { id: "bld-8d", name: "8D 数字化教学", note: "数字化教学大楼", x: 640, y: 624 },
        { id: "bld-duxing", name: "笃行楼 · 教二", note: "智慧教室", x: 762, y: 327, placeId: "teaching" },
        { id: "bld-chongde", name: "崇德楼 · 教一", note: "通识课程", x: 797, y: 397 },
        { id: "bld-jingji", name: "精技楼 · 教四", note: "实训中心", x: 902, y: 447 },
        { id: "bld-chuangxin", name: "创新楼 · 教三", note: "创新创业", x: 928, y: 510 },
        { id: "bld-19", name: "19栋 人文艺术", note: "人文艺术大楼", x: 145, y: 253 }
      ]
    },
    {
      id: "dorm", name: "宿舍生活区", en: "RESIDENTIAL QUARTER", color: "#CE8B6B",
      summary: "东北宿舍群与教工公寓组成的生活区，菜鸟驿站、洗衣房和便利店都在步行三分钟内。",
      focus: { x: 800, y: 200 }, zoom: 1.75,
      paths: [
        "M 702 44 Q 790 20 900 20 Q 1010 20 1096 30 Q 1140 38 1142 118 L 1136 300 Q 1130 340 1052 344 L 906 348 Q 780 348 724 336 Q 698 320 700 240 L 700 120 Q 700 70 702 44 Z",
        "M 396 108 Q 470 92 566 94 Q 660 96 692 116 Q 706 134 704 176 L 702 228 Q 696 262 654 268 L 560 272 Q 470 274 424 262 Q 396 248 394 200 Z",
        "M 58 60 Q 150 44 258 46 Q 320 48 342 74 L 356 110 Q 362 140 344 168 L 326 196 Q 306 220 252 226 L 154 230 Q 84 232 62 208 Q 42 182 46 128 Z"
      ],
      spots: [
        { id: "dor-community", name: "学生宿舍区", note: "1–18 栋 · 四人间", x: 900, y: 190, placeId: "dormitory" },
        { id: "dor-cainiao", name: "菜鸟驿站", note: "快递代收 · 3栋旁", x: 768, y: 286, accent: true },
        { id: "dor-young", name: "青年教师公寓", note: "单身教工宿舍", x: 626, y: 190 },
        { id: "dor-teacher", name: "教师公寓", note: "教职工生活区", x: 167, y: 130 },
        { id: "dor-court1", name: "1号篮球场", note: "晚间开放", x: 470, y: 160 },
        { id: "dor-court2", name: "2号羽毛球场", note: "需自带球拍", x: 612, y: 162 }
      ]
    },
    {
      id: "sports", name: "运动健康区", en: "SPORTS & FITNESS", color: "#76A97C",
      summary: "田径场、体育馆、游泳池与各类球场集中在东南角，夜间灯光覆盖到 22:00。",
      focus: { x: 1010, y: 620 }, zoom: 1.75,
      paths: [
        "M 856 404 Q 930 392 1010 398 Q 1082 404 1102 430 L 1132 520 Q 1150 580 1140 680 L 1120 752 Q 1106 790 1042 794 L 936 800 Q 866 796 850 756 L 838 690 Q 812 640 818 570 L 828 460 Z"
      ],
      spots: [
        { id: "spt-track", name: "田径场", note: "400 米跑道", x: 1087, y: 649, placeId: "stadium" },
        { id: "spt-gym", name: "体育馆", note: "室内综合馆", x: 1008, y: 700 },
        { id: "spt-pool", name: "游泳池", note: "夏季开放", x: 1102, y: 455 },
        { id: "spt-basket5", name: "5号篮球场", note: "灯光球场", x: 1000, y: 600 },
        { id: "spt-tennis1", name: "1号网球场", note: "需预约", x: 897, y: 755 },
        { id: "spt-volley", name: "排球场", note: "沙地排球场", x: 979, y: 772 }
      ]
    },
    {
      id: "lake", name: "湖景文化区", en: "LAKESIDE CULTURE", color: "#4FA79B",
      summary: "以映月湖为核心的休闲文化带，图书馆、九曲廊桥与亲水平台环湖展开。",
      focus: { x: 600, y: 460 }, zoom: 1.55,
      paths: [
        "M 348 292 Q 414 236 516 232 Q 592 228 624 276 Q 646 312 652 348 Q 660 384 706 400 Q 764 418 798 458 Q 832 500 810 552 Q 786 604 720 624 L 622 638 Q 528 642 458 608 L 372 552 Q 318 512 318 434 Z"
      ],
      spots: [
        { id: "lak-library", name: "图书馆", note: "藏书与自习", x: 560, y: 330, placeId: "library" },
        { id: "lak-water", name: "映月湖", note: "环湖栈道", x: 735, y: 505, placeId: "lake" },
        { id: "lak-bridge", name: "九曲廊桥", note: "湖上步道", x: 420, y: 415 },
        { id: "lak-pavilion", name: "湖心亭", note: "晨读集合点", x: 438, y: 340 },
        { id: "lak-deck", name: "亲水平台", note: "观景平台", x: 830, y: 600 }
      ]
    },
    {
      id: "dining", name: "餐饮社交区", en: "DINING & SOCIAL", color: "#C69A52",
      summary: "滋兰餐厅、修远楼学生活动中心与超市医务室，构成日常吃喝与社交的一站式动线。",
      focus: { x: 820, y: 260 }, zoom: 1.9,
      paths: [
        "M 596 158 Q 640 142 706 146 Q 730 148 734 176 L 738 226 Q 734 256 700 262 L 634 266 Q 596 262 594 226 Z",
        "M 740 148 Q 790 132 864 138 Q 916 144 918 178 L 920 234 Q 916 264 870 270 L 786 272 Q 746 268 742 232 Z",
        "M 924 316 Q 980 302 1046 308 Q 1088 314 1090 344 L 1086 400 Q 1078 430 1030 434 L 960 436 Q 922 430 920 398 Z"
      ],
      spots: [
        { id: "din-canteen", name: "滋兰餐厅 · 一饭", note: "双楼层 · 06:30–21:00", x: 1015, y: 370, placeId: "cafeteria" },
        { id: "din-hub", name: "修远楼 · 学生活动中心", note: "社团与演出", x: 820, y: 205, placeId: "student-center" },
        { id: "din-market", name: "超市 · 医务室", note: "生活补给", x: 668, y: 205 }
      ]
    }
  ],

  places: [
    {
      id: "library", name: "图书馆", shortName: "图书馆", en: "DGPT LIBRARY", category: "study", categoryLabel: "学习成长",
      icon: "book-open", x: 42, y: 30, open: true, hours: "08:00–22:30", distance: "步行 6 分钟",
      description: "校园里最安静的知识星球。除了丰富的藏书，这里还有 24 小时自习区、研讨间和能看到湖景的窗边座位。",
      images: ["assets/library.jpg", "assets/reading-room.jpg"], imageLabels: ["图书馆中庭", "三楼自习区"],
      tips: [
        { title: "插座最多的区域", text: "三楼东侧自习区，每个座位都有独立插座与阅读灯。" },
        { title: "安静学习首选", text: "四楼北侧为静音区，建议大家把讨论留在二楼研讨间。" },
        { title: "研讨间预约", text: "可提前一天在校园服务号预约，四人同行即可使用。" }
      ],
      menu: []
    },
    {
      id: "cafeteria", name: "滋兰餐厅（一饭）", shortName: "滋兰餐厅", en: "ZHILAN CANTEEN", category: "life", categoryLabel: "校园生活",
      icon: "utensils", x: 85, y: 46, open: true, hours: "06:30–21:00", distance: "步行 3 分钟",
      description: "两层空间汇聚南北风味，早餐的现磨豆浆和二楼川湘窗口最受欢迎，支持校园卡与移动支付。",
      images: ["assets/cafeteria.jpg", "assets/teaching.jpg"], imageLabels: ["一楼风味档口", "食堂东侧入口"],
      tips: [
        { title: "错峰吃饭更从容", text: "11:40 前或 12:30 后到店，热门窗口排队时间更短。" },
        { title: "隐藏平价窗口", text: "一楼最内侧设有 6 元营养套餐，每天更换两道主菜。" }
      ],
      menu: [
        { name: "招牌辣椒炒肉", stall: "二楼 · 川湘风味", price: "14 元", status: "供应中" },
        { name: "藤椒鸡拌面", stall: "一楼 · 手工面食", price: "12 元", status: "供应中" },
        { name: "番茄牛腩套餐", stall: "二楼 · 营养套餐", price: "16 元", status: "仅剩 8 份" }
      ],
      sponsor: { title: "二楼新叶茶饮 · 新生见面礼", text: "完成食堂打卡后，可向店员出示星图徽章领取 5 元券。", action: "查看新生福利" }
    },
    {
      id: "stadium", name: "田径场", shortName: "田径场", en: "ATHLETIC FIELD", category: "sports", categoryLabel: "运动活力",
      icon: "trophy", x: 89, y: 69, open: true, hours: "06:00–22:00", distance: "步行 8 分钟",
      description: "足球、夜跑、飞盘和草坪音乐会的共同据点。夜间灯光覆盖全场，新手也能快速找到同水平的运动搭子。",
      images: ["assets/stadium.jpg", "assets/lake.jpg"], imageLabels: ["傍晚的足球场", "操场东侧步道"],
      tips: [
        { title: "器材借用", text: "东南门器材室可凭校园卡借用足球、跳绳和飞盘。" },
        { title: "夜跑推荐路线", text: "外圈跑道单圈 400 米，21:00 后人流较少。" },
        { title: "新手集合点", text: "飞盘与足球新手局通常在北侧球门旁集合。" }
      ],
      menu: []
    },
    {
      id: "student-center", name: "修远楼 · 学生活动中心", shortName: "修远楼", en: "XIUYUAN STUDENT HUB", category: "social", categoryLabel: "社交活动",
      icon: "users", x: 70, y: 21, open: true, hours: "09:00–22:00", distance: "步行 5 分钟",
      description: "社团活动、桌游聚会和校园演出的发生地。一楼开放共享空间，二楼设有多功能活动室与排练厅。",
      images: ["assets/club-fair.jpg", "assets/reading-room.jpg"], imageLabels: ["社团开放日现场", "共享活动空间"],
      tips: [
        { title: "活动室使用方式", text: "社团认证负责人可在线预约，普通同学可直接使用一楼共享区。" },
        { title: "本周桌游之夜", text: "每周五 19:00，桌游社会在一楼准备新手教学桌。" }
      ],
      menu: []
    },
    {
      id: "teaching", name: "笃行楼 · 教二", shortName: "笃行楼", en: "DUXING HALL", category: "study", categoryLabel: "学习成长",
      icon: "school", x: 68, y: 41, open: true, hours: "07:00–22:30", distance: "步行 2 分钟",
      description: "日常课程的主要阵地，智慧教室与开放式讨论区并存。没课的教室会在门口电子屏实时标记。",
      images: ["assets/teaching.jpg", "assets/reading-room.jpg"], imageLabels: ["笃行楼正门", "空闲教室自习区"],
      tips: [
        { title: "快速找到教室", text: "第一位数字代表楼层，奇数教室在东侧，偶数教室在西侧。" },
        { title: "空教室查询", text: "一楼大厅屏幕每日同步课表，可查找当天空闲教室。" }
      ],
      menu: []
    },
    {
      id: "dormitory", name: "学生宿舍区", shortName: "学生宿舍", en: "STUDENT RESIDENCE", category: "life", categoryLabel: "校园生活",
      icon: "bed", x: 82, y: 14, open: true, hours: "全天开放", distance: "步行 10 分钟",
      description: "四人间上床下桌，楼下配有洗衣房、饮水机和共享厨房。每栋一层都有可交流、观影的公共客厅。",
      images: ["assets/dormitory.jpg", "assets/club-fair.jpg"], imageLabels: ["宿舍区中央庭院", "一层共享客厅"],
      tips: [
        { title: "洗衣高峰提醒", text: "工作日 18:00 前使用人数较少，可在宿管台查看空闲设备。" },
        { title: "报修与代收", text: "水电问题在一层宿管台登记，快递代收点位于 3 栋旁。" }
      ],
      menu: []
    },
    {
      id: "lake", name: "映月湖", shortName: "映月湖", en: "YINGYUE LAKE", category: "social", categoryLabel: "社交活动",
      icon: "waves", x: 48, y: 54, open: true, hours: "全天开放", distance: "步行 12 分钟",
      description: "沿湖木栈道全长约 900 米，是晨读、散步和看日落的好去处。湖心亭常举办小规模音乐与朗诵活动。",
      images: ["assets/lake.jpg", "assets/stadium.jpg"], imageLabels: ["映月湖木栈道", "湖畔夕阳"],
      tips: [
        { title: "最佳日落机位", text: "晴天 17:30 左右，在西南侧栈道可以拍到湖面金色倒影。" },
        { title: "晨读集合点", text: "英语角每周二、周四 07:20 在湖心亭集合。" }
      ],
      menu: []
    },
    {
      id: "east-gate", name: "东门", shortName: "东门", en: "EAST GATE", category: "life", categoryLabel: "校园生活",
      icon: "store", x: 94, y: 40, open: true, hours: "07:00–23:00", distance: "步行 4 分钟",
      description: "连接校园与城市生活的入口，文具、打印、水果和日常餐饮一应俱全，新生采购生活用品很方便。",
      images: ["assets/teaching.jpg", "assets/cafeteria.jpg"], imageLabels: ["东门入口", "生活街区餐饮店"],
      tips: [
        { title: "打印更省时", text: "东门内侧图文店支持线上传文件，到店即可领取。" },
        { title: "夜间返校", text: "23:00 后请从南侧门禁刷脸入校，记得携带校园卡。" }
      ],
      menu: []
    }
  ],

  groups: [
    { id: "g-frisbee", placeId: "stadium", title: "今晚飞盘，新手友好局", category: "飞盘", host: "阿澈", hostMajor: "体育教育 · 大二", hostInitial: "澈", time: "今天 20:00", day: "05", month: "11月", joined: 4, total: 6, description: "有学长带规则教学，零基础也欢迎。穿舒适运动鞋即可，飞盘已经准备好。", duration: "约 1.5 小时" },
    { id: "g-football", placeId: "stadium", title: "快乐足球，不卷比分", category: "足球", host: "周队", hostMajor: "机械工程 · 大三", hostInitial: "周", time: "明天 18:30", day: "06", month: "11月", joined: 5, total: 8, description: "八人制友谊局，足球社同学现场分队，以熟悉新朋友为主。", duration: "约 2 小时" },
    { id: "g-english", placeId: "library", title: "英语听力安静共学", category: "自习", host: "许言", hostMajor: "英语 · 大一", hostInitial: "言", time: "今天 19:00", day: "05", month: "11月", joined: 2, total: 4, description: "三楼东侧集合，各自完成 40 分钟精听后互相分享一篇材料。", duration: "约 1 小时" },
    { id: "g-math", placeId: "library", title: "高数第三章互助小组", category: "互助", host: "宋知", hostMajor: "数学与应用数学 · 大二", hostInitial: "宋", time: "周六 14:00", day: "07", month: "11月", joined: 3, total: 5, description: "一起梳理导数应用典型题，欢迎带着错题来，不讲课只互助。", duration: "约 2 小时" },
    { id: "g-board", placeId: "student-center", title: "桌游社新手教学桌", category: "桌游", host: "阿洛", hostMajor: "心理学 · 大二", hostInitial: "洛", time: "周五 19:00", day: "06", month: "11月", joined: 5, total: 8, description: "从合作类轻策桌游开始，现场有社长教学，不需要自带任何道具。", duration: "约 2 小时" },
    { id: "g-script", placeId: "student-center", title: "校园推理本，还差两人", category: "剧本杀", host: "江禾", hostMajor: "汉语言文学 · 大三", hostInitial: "江", time: "周六 18:00", day: "07", month: "11月", joined: 4, total: 6, description: "欢乐还原向剧本，预计三小时，已预约二楼活动室。", duration: "约 3 小时" },
    { id: "g-food", placeId: "cafeteria", title: "找位饭搭子尝新窗口", category: "饭搭子", host: "可可", hostMajor: "新闻传播 · 大一", hostInitial: "可", time: "今天 17:40", day: "05", month: "11月", joined: 2, total: 4, description: "想打卡二楼川湘窗口，边吃边聊专业和社团，结束后可以一起逛校园。", duration: "约 45 分钟" },
    { id: "g-run", placeId: "lake", title: "湖畔轻松晨跑 3 公里", category: "晨跑", host: "向北", hostMajor: "计算机科学 · 大二", hostInitial: "北", time: "明天 07:00", day: "06", month: "11月", joined: 3, total: 6, description: "七分半配速，以看日出和轻松聊天为主，结束后在东门买早餐。", duration: "约 40 分钟" },
    { id: "g-speaking", placeId: "teaching", title: "雅思口语互练一小时", category: "口语", host: "Mia", hostMajor: "国际经济与贸易 · 大二", hostInitial: "M", time: "周日 16:00", day: "08", month: "11月", joined: 2, total: 4, description: "围绕本季 Part 2 题库两两互练，互相记录一处亮点和一处建议。", duration: "约 1 小时" },
    { id: "g-movie", placeId: "dormitory", title: "公共客厅治愈系观影", category: "观影", host: "小满", hostMajor: "动画 · 大一", hostInitial: "满", time: "周五 20:00", day: "06", month: "11月", joined: 4, total: 6, description: "二栋一层公共客厅，影片现场投票，欢迎带自己的靠垫和无气味零食。", duration: "约 2 小时" }
  ],

  forumPosts: [
    {
      id: "post-library-night",
      category: "吃瓜",
      title: "图书馆四楼真的要改成通宵自习区了吗？",
      body: "今天路过看到工人在量尺寸，听宿管阿姨说期末前会开放。如果是真的，我的通宵复习有救了，但也有点担心会变成新的卷王集中营。有知道内情的同学吗？",
      anonymous: true,
      author: "匿名 · 夜航星",
      authorInitial: "匿",
      minutesAgo: 18,
      likes: 42,
      comments: [
        { id: "c-library-1", author: "匿名 · 纸飞机", authorInitial: "匿", anonymous: true, body: "问了在图书馆勤工的同学，说是先试运行两周，只开放东侧自习区。", minutesAgo: 11 },
        { id: "c-library-2", author: "阿澈", authorInitial: "澈", anonymous: false, body: "希望插座能多几个，现在带插排的座位根本抢不到。", minutesAgo: 6 }
      ]
    },
    {
      id: "post-canteen-hand",
      category: "吐槽",
      title: "食堂二楼新窗口，阿姨的手抖是一门艺术",
      body: "点了份小炒肉，肉在勺子里犹豫了三秒，最后只落下两片。不过味道是真的不错，就是打饭的过程像抽盲盒。有没有同款体验的同学？",
      anonymous: true,
      author: "匿名 · 半糖去冰",
      authorInitial: "匿",
      minutesAgo: 47,
      likes: 96,
      comments: [
        { id: "c-canteen-1", author: "可可", authorInitial: "可", anonymous: false, body: "我上次鼓起勇气说“阿姨多一点”，她真的多给了！", minutesAgo: 32 },
        { id: "c-canteen-2", author: "匿名 · 北门路灯", authorInitial: "匿", anonymous: true, body: "建议错峰去，十一点半之前阿姨的手最稳。", minutesAgo: 20 },
        { id: "c-canteen-3", author: "匿名 · 云层观察员", authorInitial: "匿", anonymous: true, body: "笑死，这不比开盲盒刺激。", minutesAgo: 9 }
      ]
    },
    {
      id: "post-dorm-talk",
      category: "树洞",
      title: "来学校第三周，还是不太敢主动和室友说话",
      body: "大家人都很好，但每次她们聊得很开心，我插不上话，回宿舍就戴上耳机。想问问过来人，这种状态正常吗？要怎么自然地融入？",
      anonymous: true,
      author: "匿名 · 晚风信箱",
      authorInitial: "匿",
      minutesAgo: 88,
      likes: 67,
      comments: [
        { id: "c-dorm-1", author: "小满", authorInitial: "满", anonymous: false, body: "特别正常，我大一时也这样。从一起点外卖、借个充电线开始就好，不用急着变得很外向。", minutesAgo: 61 },
        { id: "c-dorm-2", author: "匿名 · 橘子汽水", authorInitial: "匿", anonymous: true, body: "可以先在宿舍群里分享一个好笑的视频，真的很有用。", minutesAgo: 40 },
        { id: "c-dorm-3", author: "匿名 · 无名小熊", authorInitial: "匿", anonymous: true, body: "抱抱你，慢热不是缺点，别有压力。", minutesAgo: 22 }
      ]
    },
    {
      id: "post-math-help",
      category: "求助",
      title: "高数第三章怎么自学？求一条不劝退的路线",
      body: "上课能听懂，作业一做就废。想问问学长学姐，是先把教材例题刷完，还是直接跟着网课？有没有适合基础一般同学的节奏建议。",
      anonymous: false,
      author: "许言",
      authorInitial: "言",
      minutesAgo: 133,
      likes: 28,
      comments: [
        { id: "c-math-1", author: "宋知", authorInitial: "宋", anonymous: false, body: "先例题后习题，每道题写清楚用了哪个定理。周六图书馆有互助小组，可以直接来。", minutesAgo: 95 },
        { id: "c-math-2", author: "匿名 · 夜航星", authorInitial: "匿", anonymous: true, body: "强烈建议整理错题，比反复看网课有用。", minutesAgo: 70 }
      ]
    },
    {
      id: "post-lamp-sale",
      category: "闲置",
      title: "出一盏九成新护眼台灯和一个收纳箱",
      body: "宿舍换布局，台灯和收纳箱都用不上了。台灯三档调光，收纳箱带轮子，打包 45 元，可在二栋楼下自提。",
      anonymous: false,
      author: "向北",
      authorInitial: "北",
      minutesAgo: 190,
      likes: 12,
      comments: [
        { id: "c-lamp-1", author: "匿名 · 纸飞机", authorInitial: "匿", anonymous: true, body: "台灯单出吗？我室友正好缺一个。", minutesAgo: 150 }
      ]
    },
    {
      id: "post-drone",
      category: "吃瓜",
      title: "昨晚操场那场无人机表演是谁搞的？",
      body: "十点多从图书馆出来，看到操场上空排出了一个巨大的星星图案，持续了大概五分钟。是社团活动还是有人在表白？现场没赶上，好想知道完整版。",
      anonymous: true,
      author: "匿名 · 云层观察员",
      authorInitial: "匿",
      minutesAgo: 260,
      likes: 154,
      comments: [
        { id: "c-drone-1", author: "阿洛", authorInitial: "洛", anonymous: false, body: "是摄影社和无人机社联合做的夜航测试，据说周末还会再飞一次。", minutesAgo: 210 },
        { id: "c-drone-2", author: "匿名 · 夜航星", authorInitial: "匿", anonymous: true, body: "周末蹲一个，希望这次别错过。", minutesAgo: 180 }
      ]
    },
    {
      id: "post-rollcall",
      category: "吐槽",
      title: "早八点名，代答到底算不算帮忙？",
      body: "室友这周生病，让我帮忙答到。我理解他难受，但又觉得哪里不太对。想听听大家怎么看，如果是你们会怎么处理？",
      anonymous: true,
      author: "匿名 · 北门路灯",
      authorInitial: "匿",
      minutesAgo: 340,
      likes: 58,
      comments: [
        { id: "c-rollcall-1", author: "周队", authorInitial: "周", anonymous: false, body: "可以帮，但最好还是提醒他跟老师请假，长期代答对他没好处。", minutesAgo: 280 },
        { id: "c-rollcall-2", author: "匿名 · 半糖去冰", authorInitial: "匿", anonymous: true, body: "我更愿意帮他带份早餐，点名这事还是别冒险。", minutesAgo: 240 }
      ]
    }
  ],

  clubs: [
    {
      id: "club-1", name: "《学在东职》编辑部", short: "学", category: "思想政治类", status: "年审通过", unit: "学生处", advisor: "王燕君", leader: "苏子蓝 · 学生处", recruit: "注册在册", image: "assets/teaching.jpg", locationId: "student-center",
      slogan: "思想政治类 · 学生处指导",
      description: "《学在东职》编辑部是学生处指导的思想政治类学生社团，指导教师王燕君，学生负责人苏子蓝。",
      detail: "《学在东职》编辑部为学生处指导的思想政治类学生社团，2026-2027 学年年审通过。指导教师为王燕君，学生负责人为苏子蓝。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-2", name: "国旗护卫队", short: "国", category: "思想政治类", status: "年审通过", unit: "保卫处", advisor: "刘攀峰", leader: "陈曦瑶 · 保卫处", recruit: "注册在册", image: "assets/teaching.jpg", locationId: "student-center",
      slogan: "思想政治类 · 保卫处指导",
      description: "国旗护卫队是保卫处指导的思想政治类学生社团，指导教师刘攀峰，学生负责人陈曦瑶。",
      detail: "国旗护卫队为保卫处指导的思想政治类学生社团，2026-2027 学年年审通过。指导教师为刘攀峰，学生负责人为陈曦瑶。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-3", name: "向阳而“升”社", short: "向", category: "思想政治类", status: "年审通过", unit: "卫生健康学院", advisor: "叶子明", leader: "谢钰琳 · 卫生健康学院", recruit: "注册在册", image: "assets/teaching.jpg", locationId: "teaching",
      slogan: "思想政治类 · 卫生健康学院指导",
      description: "向阳而“升”社是卫生健康学院指导的思想政治类学生社团，指导教师叶子明，学生负责人谢钰琳。",
      detail: "向阳而“升”社为卫生健康学院指导的思想政治类学生社团，2026-2027 学年年审通过。指导教师为叶子明，学生负责人为谢钰琳。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-4", name: "你我他绿色环保志愿服务协会", short: "你", category: "志愿公益类", status: "年审通过", unit: "校团委", advisor: "杨泽坤", leader: "林启迪 · 校团委", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "student-center",
      slogan: "志愿公益类 · 校团委指导",
      description: "你我他绿色环保志愿服务协会是校团委指导的志愿公益类学生社团，指导教师杨泽坤，学生负责人林启迪。",
      detail: "你我他绿色环保志愿服务协会为校团委指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为杨泽坤，学生负责人为林启迪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-5", name: "聆近志愿服务协会", short: "聆", category: "志愿公益类", status: "年审通过", unit: "校团委", advisor: "杨泽坤", leader: "温雪莹 · 校团委", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "student-center",
      slogan: "志愿公益类 · 校团委指导",
      description: "聆近志愿服务协会是校团委指导的志愿公益类学生社团，指导教师杨泽坤，学生负责人温雪莹。",
      detail: "聆近志愿服务协会为校团委指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为杨泽坤，学生负责人为温雪莹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-6", name: "启创科学志愿服务协会", short: "启", category: "志愿公益类", status: "年审通过", unit: "电子信息学院", advisor: "麦强、殷凯晴", leader: "彭梦烨 · 电子信息学院", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "teaching",
      slogan: "志愿公益类 · 电子信息学院指导",
      description: "启创科学志愿服务协会是电子信息学院指导的志愿公益类学生社团，指导教师麦强、殷凯晴，学生负责人彭梦烨。",
      detail: "启创科学志愿服务协会为电子信息学院指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为麦强、殷凯晴，学生负责人为彭梦烨。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-7", name: "笃行社", short: "笃", category: "志愿公益类", status: "年审通过", unit: "商学院（筹）", advisor: "脱俗", leader: "郑荔雯 · 商学院（筹）", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "teaching",
      slogan: "志愿公益类 · 商学院（筹）指导",
      description: "笃行社是商学院（筹）指导的志愿公益类学生社团，指导教师脱俗，学生负责人郑荔雯。",
      detail: "笃行社为商学院（筹）指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为脱俗，学生负责人为郑荔雯。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-8", name: "东莞市红十字会东莞职业技术学院卫生健康学院志愿服务队", short: "东", category: "志愿公益类", status: "年审通过", unit: "卫生健康学院", advisor: "姜林辉", leader: "蔡淋敏 · 卫生健康学院", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "teaching",
      slogan: "志愿公益类 · 卫生健康学院指导",
      description: "东莞市红十字会东莞职业技术学院卫生健康学院志愿服务队是卫生健康学院指导的志愿公益类学生社团，指导教师姜林辉，学生负责人蔡淋敏。",
      detail: "东莞市红十字会东莞职业技术学院卫生健康学院志愿服务队为卫生健康学院指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为姜林辉，学生负责人为蔡淋敏。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-9", name: "青春健康同伴社", short: "青", category: "志愿公益类", status: "年审通过", unit: "卫生健康学院", advisor: "黄媛媛、黄丽萍", leader: "李婉晶 · 卫生健康学院", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "teaching",
      slogan: "志愿公益类 · 卫生健康学院指导",
      description: "青春健康同伴社是卫生健康学院指导的志愿公益类学生社团，指导教师黄媛媛、黄丽萍，学生负责人李婉晶。",
      detail: "青春健康同伴社为卫生健康学院指导的志愿公益类学生社团，2026-2027 学年年审通过。指导教师为黄媛媛、黄丽萍，学生负责人为李婉晶。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-10", name: "“东风窗”社会创新服务社", short: "东", category: "志愿公益类", status: "新成立", unit: "教育与体育学院（筹）", advisor: "洪明心", leader: "邓晓霞 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "stadium",
      slogan: "志愿公益类 · 教育与体育学院（筹）指导",
      description: "“东风窗”社会创新服务社是教育与体育学院（筹）指导的志愿公益类学生社团，指导教师洪明心，学生负责人邓晓霞。",
      detail: "“东风窗”社会创新服务社为教育与体育学院（筹）指导的志愿公益类学生社团，2026-2027 学年新成立。指导教师为洪明心，学生负责人为邓晓霞。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-11", name: "汽车好医生志愿者协会", short: "汽", category: "志愿公益类", status: "新成立", unit: "智能制造学院", advisor: "陈先亮", leader: "曾小娉 · 智能制造学院", recruit: "注册在册", image: "assets/dormitory.jpg", locationId: "teaching",
      slogan: "志愿公益类 · 智能制造学院指导",
      description: "汽车好医生志愿者协会是智能制造学院指导的志愿公益类学生社团，指导教师陈先亮，学生负责人曾小娉。",
      detail: "汽车好医生志愿者协会为智能制造学院指导的志愿公益类学生社团，2026-2027 学年新成立。指导教师为陈先亮，学生负责人为曾小娉。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-12", name: "朋辈心理互助协会", short: "朋", category: "自律互助类", status: "年审通过", unit: "学生处", advisor: "吴尔诺、王洁、王燕君", leader: "黎佩俊 · 学生处", recruit: "注册在册", image: "assets/reading-room.jpg", locationId: "student-center",
      slogan: "自律互助类 · 学生处指导",
      description: "朋辈心理互助协会是学生处指导的自律互助类学生社团，指导教师吴尔诺、王洁、王燕君，学生负责人黎佩俊。",
      detail: "朋辈心理互助协会为学生处指导的自律互助类学生社团，2026-2027 学年年审通过。指导教师为吴尔诺、王洁、王燕君，学生负责人为黎佩俊。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-13", name: "心港湾心理社", short: "心", category: "自律互助类", status: "年审通过", unit: "卫生健康学院", advisor: "李珍", leader: "黄伟轩 · 卫生健康学院", recruit: "注册在册", image: "assets/reading-room.jpg", locationId: "teaching",
      slogan: "自律互助类 · 卫生健康学院指导",
      description: "心港湾心理社是卫生健康学院指导的自律互助类学生社团，指导教师李珍，学生负责人黄伟轩。",
      detail: "心港湾心理社为卫生健康学院指导的自律互助类学生社团，2026-2027 学年年审通过。指导教师为李珍，学生负责人为黄伟轩。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-14", name: "药学同行", short: "药", category: "自律互助类", status: "新成立", unit: "卫生健康学院", advisor: "聂素然，林竹贞", leader: "曾晓萍 · 卫生健康学院", recruit: "注册在册", image: "assets/reading-room.jpg", locationId: "teaching",
      slogan: "自律互助类 · 卫生健康学院指导",
      description: "药学同行是卫生健康学院指导的自律互助类学生社团，指导教师聂素然，林竹贞，学生负责人曾晓萍。",
      detail: "药学同行为卫生健康学院指导的自律互助类学生社团，2026-2027 学年新成立。指导教师为聂素然，林竹贞，学生负责人为曾晓萍。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-15", name: "工业互联网协会", short: "工", category: "学术科技类", status: "年审通过", unit: "电子信息学院", advisor: "刘玉佼", leader: "戴安迪 · 电子信息学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 电子信息学院指导",
      description: "工业互联网协会是电子信息学院指导的学术科技类学生社团，指导教师刘玉佼，学生负责人戴安迪。",
      detail: "工业互联网协会为电子信息学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为刘玉佼，学生负责人为戴安迪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-16", name: "机器人协会", short: "机", category: "学术科技类", status: "年审通过", unit: "电子信息学院", advisor: "徐淑琼", leader: "苏晓玲 · 电子信息学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 电子信息学院指导",
      description: "机器人协会是电子信息学院指导的学术科技类学生社团，指导教师徐淑琼，学生负责人苏晓玲。",
      detail: "机器人协会为电子信息学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为徐淑琼，学生负责人为苏晓玲。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-17", name: "电子协会", short: "电", category: "学术科技类", status: "年审通过", unit: "电子信息学院", advisor: "麦强、黄晓宇", leader: "林怡静 · 电子信息学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 电子信息学院指导",
      description: "电子协会是电子信息学院指导的学术科技类学生社团，指导教师麦强、黄晓宇，学生负责人林怡静。",
      detail: "电子协会为电子信息学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为麦强、黄晓宇，学生负责人为林怡静。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-18", name: "计算机协会", short: "计", category: "学术科技类", status: "年审通过", unit: "电子信息学院", advisor: "黄凌峰、高翔", leader: "黄晓娟 · 电子信息学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 电子信息学院指导",
      description: "计算机协会是电子信息学院指导的学术科技类学生社团，指导教师黄凌峰、高翔，学生负责人黄晓娟。",
      detail: "计算机协会为电子信息学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为黄凌峰、高翔，学生负责人为黄晓娟。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-19", name: "人工智能物联网协会", short: "人", category: "学术科技类", status: "年审通过", unit: "人工智能学院", advisor: "杨恺", leader: "林立彬 · 人工智能学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 人工智能学院指导",
      description: "人工智能物联网协会是人工智能学院指导的学术科技类学生社团，指导教师杨恺，学生负责人林立彬。",
      detail: "人工智能物联网协会为人工智能学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为杨恺，学生负责人为林立彬。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-20", name: "法思社", short: "法", category: "学术科技类", status: "年审通过", unit: "商学院（筹）", advisor: "原秋华", leader: "叶诗怡 · 商学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 商学院（筹）指导",
      description: "法思社是商学院（筹）指导的学术科技类学生社团，指导教师原秋华，学生负责人叶诗怡。",
      detail: "法思社为商学院（筹）指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为原秋华，学生负责人为叶诗怡。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-21", name: "金鹰协会", short: "金", category: "学术科技类", status: "年审通过", unit: "商学院（筹）", advisor: "赖昊莹", leader: "陈嘉颖 · 商学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 商学院（筹）指导",
      description: "金鹰协会是商学院（筹）指导的学术科技类学生社团，指导教师赖昊莹，学生负责人陈嘉颖。",
      detail: "金鹰协会为商学院（筹）指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为赖昊莹，学生负责人为陈嘉颖。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-22", name: "电商协会", short: "电", category: "学术科技类", status: "年审通过", unit: "商学院（筹）", advisor: "韩红宇、刘小慧", leader: "蔡晓樱 · 商学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 商学院（筹）指导",
      description: "电商协会是商学院（筹）指导的学术科技类学生社团，指导教师韩红宇、刘小慧，学生负责人蔡晓樱。",
      detail: "电商协会为商学院（筹）指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为韩红宇、刘小慧，学生负责人为蔡晓樱。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-23", name: "本草溯原社", short: "本", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "李名深", leader: "蔡洁莹 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "本草溯原社是卫生健康学院指导的学术科技类学生社团，指导教师李名深，学生负责人蔡洁莹。",
      detail: "本草溯原社为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为李名深，学生负责人为蔡洁莹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-24", name: "承古社（原适宜技社）", short: "承", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "谢龙", leader: "黄乐琴 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "承古社（原适宜技社）是卫生健康学院指导的学术科技类学生社团，指导教师谢龙，学生负责人黄乐琴。",
      detail: "承古社（原适宜技社）为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为谢龙，学生负责人为黄乐琴。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-25", name: "康复协会", short: "康", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "刘洪秀", leader: "刘宝怡 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "康复协会是卫生健康学院指导的学术科技类学生社团，指导教师刘洪秀，学生负责人刘宝怡。",
      detail: "康复协会为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为刘洪秀，学生负责人为刘宝怡。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-26", name: "明辨社", short: "明", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "梁萍", leader: "李悠然 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "明辨社是卫生健康学院指导的学术科技类学生社团，指导教师梁萍，学生负责人李悠然。",
      detail: "明辨社为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为梁萍，学生负责人为李悠然。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-27", name: "人体结构协会", short: "人", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "杜静文", leader: "苏小蝶 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "人体结构协会是卫生健康学院指导的学术科技类学生社团，指导教师杜静文，学生负责人苏小蝶。",
      detail: "人体结构协会为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为杜静文，学生负责人为苏小蝶。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-28", name: "天使急救社", short: "天", category: "学术科技类", status: "年审通过", unit: "卫生健康学院", advisor: "黄媛媛", leader: "梁辉怡 · 卫生健康学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 卫生健康学院指导",
      description: "天使急救社是卫生健康学院指导的学术科技类学生社团，指导教师黄媛媛，学生负责人梁辉怡。",
      detail: "天使急救社为卫生健康学院指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为黄媛媛，学生负责人为梁辉怡。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-29", name: "读者协会", short: "读", category: "学术科技类", status: "年审通过", unit: "图书馆", advisor: "侯君洁", leader: "黄幸敏 · 图书馆", recruit: "注册在册", image: "assets/library.jpg", locationId: "library",
      slogan: "学术科技类 · 图书馆指导",
      description: "读者协会是图书馆指导的学术科技类学生社团，指导教师侯君洁，学生负责人黄幸敏。",
      detail: "读者协会为图书馆指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为侯君洁，学生负责人为黄幸敏。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-30", name: "A2S无人机协会", short: "A", category: "学术科技类", status: "年审通过", unit: "未来技术学院(筹)", advisor: "王晓斌", leader: "张甜甜 · 未来技术学院(筹)", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 未来技术学院(筹)指导",
      description: "A2S无人机协会是未来技术学院(筹)指导的学术科技类学生社团，指导教师王晓斌，学生负责人张甜甜。",
      detail: "A2S无人机协会为未来技术学院(筹)指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为王晓斌，学生负责人为张甜甜。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-31", name: "数学建模协会", short: "数", category: "学术科技类", status: "年审通过", unit: "通识学院（筹）", advisor: "黄开情", leader: "梁玉莹 · 通识学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 通识学院（筹）指导",
      description: "数学建模协会是通识学院（筹）指导的学术科技类学生社团，指导教师黄开情，学生负责人梁玉莹。",
      detail: "数学建模协会为通识学院（筹）指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为黄开情，学生负责人为梁玉莹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-32", name: "英语沙龙协会", short: "英", category: "学术科技类", status: "年审通过", unit: "通识学院（筹）", advisor: "陈培珊、钟善奇", leader: "王钰滋 · 通识学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 通识学院（筹）指导",
      description: "英语沙龙协会是通识学院（筹）指导的学术科技类学生社团，指导教师陈培珊、钟善奇，学生负责人王钰滋。",
      detail: "英语沙龙协会为通识学院（筹）指导的学术科技类学生社团，2026-2027 学年年审通过。指导教师为陈培珊、钟善奇，学生负责人为王钰滋。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-33", name: "智能产品开发协会", short: "智", category: "学术科技类", status: "新成立", unit: "电子信息学院", advisor: "王志兵、熊丽萍、郑晓东", leader: "张诗淇 · 电子信息学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 电子信息学院指导",
      description: "智能产品开发协会是电子信息学院指导的学术科技类学生社团，指导教师王志兵、熊丽萍、郑晓东，学生负责人张诗淇。",
      detail: "智能产品开发协会为电子信息学院指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为王志兵、熊丽萍、郑晓东，学生负责人为张诗淇。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-34", name: "智汇科创协会", short: "智", category: "学术科技类", status: "新成立", unit: "智能制造学院", advisor: "胡耿军、虞晓琼、周晶", leader: "林钦坤 · 智能制造学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 智能制造学院指导",
      description: "智汇科创协会是智能制造学院指导的学术科技类学生社团，指导教师胡耿军、虞晓琼、周晶，学生负责人林钦坤。",
      detail: "智汇科创协会为智能制造学院指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为胡耿军、虞晓琼、周晶，学生负责人为林钦坤。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-35", name: "智创未来", short: "智", category: "学术科技类", status: "新成立", unit: "智能制造学院", advisor: "曹会元", leader: "吴齐禹 · 智能制造学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 智能制造学院指导",
      description: "智创未来是智能制造学院指导的学术科技类学生社团，指导教师曹会元，学生负责人吴齐禹。",
      detail: "智创未来为智能制造学院指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为曹会元，学生负责人为吴齐禹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-36", name: "数字化制造协会", short: "数", category: "学术科技类", status: "新成立", unit: "智能制造学院", advisor: "张燕琴、李笑勉、梅阳寒", leader: "刘名洋 · 智能制造学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 智能制造学院指导",
      description: "数字化制造协会是智能制造学院指导的学术科技类学生社团，指导教师张燕琴、李笑勉、梅阳寒，学生负责人刘名洋。",
      detail: "数字化制造协会为智能制造学院指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为张燕琴、李笑勉、梅阳寒，学生负责人为刘名洋。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-37", name: "智能制造研习社", short: "智", category: "学术科技类", status: "新成立", unit: "智能制造学院", advisor: "李霖、李积迁、杨丹", leader: "黄会媚 · 智能制造学院", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 智能制造学院指导",
      description: "智能制造研习社是智能制造学院指导的学术科技类学生社团，指导教师李霖、李积迁、杨丹，学生负责人黄会媚。",
      detail: "智能制造研习社为智能制造学院指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为李霖、李积迁、杨丹，学生负责人为黄会媚。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-38", name: "量化金融研习社", short: "量", category: "学术科技类", status: "新成立", unit: "商学院（筹）", advisor: "李俊霖、彭至然", leader: "陈小敏 · 商学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 商学院（筹）指导",
      description: "量化金融研习社是商学院（筹）指导的学术科技类学生社团，指导教师李俊霖、彭至然，学生负责人陈小敏。",
      detail: "量化金融研习社为商学院（筹）指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为李俊霖、彭至然，学生负责人为陈小敏。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-39", name: "元启AI社", short: "元", category: "学术科技类", status: "新成立", unit: "商学院（筹）", advisor: "何瀚玮", leader: "陈曦瑶 · 商学院（筹）", recruit: "注册在册", image: "assets/library.jpg", locationId: "teaching",
      slogan: "学术科技类 · 商学院（筹）指导",
      description: "元启AI社是商学院（筹）指导的学术科技类学生社团，指导教师何瀚玮，学生负责人陈曦瑶。",
      detail: "元启AI社为商学院（筹）指导的学术科技类学生社团，2026-2027 学年新成立。指导教师为何瀚玮，学生负责人为陈曦瑶。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-40", name: "职业规划与发展协会", short: "职", category: "创新创业类", status: "年审通过", unit: "学生处", advisor: "周蜜", leader: "王雪 · 学生处", recruit: "注册在册", image: "assets/club-fair.jpg", locationId: "student-center",
      slogan: "创新创业类 · 学生处指导",
      description: "职业规划与发展协会是学生处指导的创新创业类学生社团，指导教师周蜜，学生负责人王雪。",
      detail: "职业规划与发展协会为学生处指导的创新创业类学生社团，2026-2027 学年年审通过。指导教师为周蜜，学生负责人为王雪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-41", name: "咖啡协会", short: "咖", category: "创新创业类", status: "年审通过", unit: "商学院（筹）", advisor: "严心雨", leader: "梁钰琪 · 商学院（筹）", recruit: "注册在册", image: "assets/club-fair.jpg", locationId: "teaching",
      slogan: "创新创业类 · 商学院（筹）指导",
      description: "咖啡协会是商学院（筹）指导的创新创业类学生社团，指导教师严心雨，学生负责人梁钰琪。",
      detail: "咖啡协会为商学院（筹）指导的创新创业类学生社团，2026-2027 学年年审通过。指导教师为严心雨，学生负责人为梁钰琪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-42", name: "青年创新创业协会（原火星众创社）", short: "青", category: "创新创业类", status: "年审通过", unit: "未来技术学院(筹)", advisor: "邓韵雅", leader: "张茵茵 · 未来技术学院(筹)", recruit: "注册在册", image: "assets/club-fair.jpg", locationId: "teaching",
      slogan: "创新创业类 · 未来技术学院(筹)指导",
      description: "青年创新创业协会（原火星众创社）是未来技术学院(筹)指导的创新创业类学生社团，指导教师邓韵雅，学生负责人张茵茵。",
      detail: "青年创新创业协会（原火星众创社）为未来技术学院(筹)指导的创新创业类学生社团，2026-2027 学年年审通过。指导教师为邓韵雅，学生负责人为张茵茵。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-43", name: "集模二创研究协会", short: "集", category: "创新创业类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "刘震寰、张智燕", leader: "倪惊语 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/club-fair.jpg", locationId: "teaching",
      slogan: "创新创业类 · 创意设计与传媒学院（筹）指导",
      description: "集模二创研究协会是创意设计与传媒学院（筹）指导的创新创业类学生社团，指导教师刘震寰、张智燕，学生负责人倪惊语。",
      detail: "集模二创研究协会为创意设计与传媒学院（筹）指导的创新创业类学生社团，2026-2027 学年年审通过。指导教师为刘震寰、张智燕，学生负责人为倪惊语。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-44", name: "廉洁文化宣讲团", short: "廉", category: "文化体育类", status: "年审通过", unit: "通识学院（筹）", advisor: "陈柏林、孙悦、马东宁", leader: "何宝妤 · 通识学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 通识学院（筹）指导",
      description: "廉洁文化宣讲团是通识学院（筹）指导的文化体育类学生社团，指导教师陈柏林、孙悦、马东宁，学生负责人何宝妤。",
      detail: "廉洁文化宣讲团为通识学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为陈柏林、孙悦、马东宁，学生负责人为何宝妤。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-45", name: "拾光乐集社", short: "拾", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "林冰", leader: "袁玮 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "拾光乐集社是卫生健康学院指导的文化体育类学生社团，指导教师林冰，学生负责人袁玮。",
      detail: "拾光乐集社为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为林冰，学生负责人为袁玮。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-46", name: "未来社彩文化团", short: "未", category: "文化体育类", status: "年审通过", unit: "机关党总支", advisor: "刘明", leader: "胡卓灵 · 机关党总支", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "student-center",
      slogan: "文化体育类 · 机关党总支指导",
      description: "未来社彩文化团是机关党总支指导的文化体育类学生社团，指导教师刘明，学生负责人胡卓灵。",
      detail: "未来社彩文化团为机关党总支指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为刘明，学生负责人为胡卓灵。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-47", name: "辩论队", short: "辩", category: "文化体育类", status: "年审通过", unit: "马克思主义学院、校团委", advisor: "罗美琪、赵韵姬、方韵诗", leader: "李嘉源 · 马克思主义学院、校团委", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "student-center",
      slogan: "文化体育类 · 马克思主义学院、校团委指导",
      description: "辩论队是马克思主义学院、校团委指导的文化体育类学生社团，指导教师罗美琪、赵韵姬、方韵诗，学生负责人李嘉源。",
      detail: "辩论队为马克思主义学院、校团委指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为罗美琪、赵韵姬、方韵诗，学生负责人为李嘉源。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-48", name: "花艺社", short: "花", category: "文化体育类", status: "年审通过", unit: "人工智能学院", advisor: "谭聪丽", leader: "周航羽 · 人工智能学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 人工智能学院指导",
      description: "花艺社是人工智能学院指导的文化体育类学生社团，指导教师谭聪丽，学生负责人周航羽。",
      detail: "花艺社为人工智能学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为谭聪丽，学生负责人为周航羽。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-49", name: "Liberty Crew街舞社", short: "L", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "王洁", leader: "李星语 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "Liberty Crew街舞社是商学院（筹）指导的文化体育类学生社团，指导教师王洁，学生负责人李星语。",
      detail: "Liberty Crew街舞社为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为王洁，学生负责人为李星语。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-50", name: "莞香协会", short: "莞", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "凡丹", leader: "白诗佩 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "莞香协会是商学院（筹）指导的文化体育类学生社团，指导教师凡丹，学生负责人白诗佩。",
      detail: "莞香协会为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为凡丹，学生负责人为白诗佩。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-51", name: "69轮滑协会", short: "6", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "刘小慧", leader: "林佳琪 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "69轮滑协会是商学院（筹）指导的文化体育类学生社团，指导教师刘小慧，学生负责人林佳琪。",
      detail: "69轮滑协会为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为刘小慧，学生负责人为林佳琪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-52", name: "飞扬音乐社", short: "飞", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "雷亚林", leader: "卓雨淳 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "飞扬音乐社是商学院（筹）指导的文化体育类学生社团，指导教师雷亚林，学生负责人卓雨淳。",
      detail: "飞扬音乐社为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为雷亚林，学生负责人为卓雨淳。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-53", name: "茶艺协会", short: "茶", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "郑秋婵", leader: "纪锦潮 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "茶艺协会是商学院（筹）指导的文化体育类学生社团，指导教师郑秋婵，学生负责人纪锦潮。",
      detail: "茶艺协会为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为郑秋婵，学生负责人为纪锦潮。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-54", name: "毽球协会", short: "毽", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "唐雷", leader: "李佩佩 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "毽球协会是商学院（筹）指导的文化体育类学生社团，指导教师唐雷，学生负责人李佩佩。",
      detail: "毽球协会为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为唐雷，学生负责人为李佩佩。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-55", name: "青梧汉服社", short: "青", category: "文化体育类", status: "年审通过", unit: "商学院（筹）", advisor: "遇娜、周涵", leader: "宋静舒 · 商学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 商学院（筹）指导",
      description: "青梧汉服社是商学院（筹）指导的文化体育类学生社团，指导教师遇娜、周涵，学生负责人宋静舒。",
      detail: "青梧汉服社为商学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为遇娜、周涵，学生负责人为宋静舒。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-56", name: "篮球协会", short: "篮", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "林小静", leader: "邓显和 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "篮球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师林小静，学生负责人邓显和。",
      detail: "篮球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为林小静，学生负责人为邓显和。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-57", name: "足球协会", short: "足", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "梁四海", leader: "胡磊 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "足球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师梁四海，学生负责人胡磊。",
      detail: "足球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为梁四海，学生负责人为胡磊。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-58", name: "国粹社", short: "国", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "徐俊", leader: "李佳琪 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "国粹社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师徐俊，学生负责人李佳琪。",
      detail: "国粹社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为徐俊，学生负责人为李佳琪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-59", name: "BAB啦啦操社团", short: "B", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "曹丹丹", leader: "陈婉盈 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "BAB啦啦操社团是教育与体育学院（筹）指导的文化体育类学生社团，指导教师曹丹丹，学生负责人陈婉盈。",
      detail: "BAB啦啦操社团为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为曹丹丹，学生负责人为陈婉盈。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-60", name: "户外运动协会", short: "户", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "黄正，张继娜", leader: "王钰琳 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "户外运动协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师黄正，张继娜，学生负责人王钰琳。",
      detail: "户外运动协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为黄正，张继娜，学生负责人为王钰琳。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-61", name: "醒狮社", short: "醒", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "张继娜", leader: "杨幸锐 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "醒狮社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师张继娜，学生负责人杨幸锐。",
      detail: "醒狮社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为张继娜，学生负责人为杨幸锐。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-62", name: "运动防护协会", short: "运", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "刘军", leader: "蓝海 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "运动防护协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师刘军，学生负责人蓝海。",
      detail: "运动防护协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为刘军，学生负责人为蓝海。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-63", name: "Street Life滑板社", short: "S", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "杨慧娟", leader: "马燕红 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "Street Life滑板社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师杨慧娟，学生负责人马燕红。",
      detail: "Street Life滑板社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为杨慧娟，学生负责人为马燕红。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-64", name: "排球协会", short: "排", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "廖志凡，曹兴武", leader: "王怡静 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "排球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师廖志凡，曹兴武，学生负责人王怡静。",
      detail: "排球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为廖志凡，曹兴武，学生负责人为王怡静。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-65", name: "网球社", short: "网", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "杨汇哲、曹兴武", leader: "黄维浩 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "网球社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师杨汇哲、曹兴武，学生负责人黄维浩。",
      detail: "网球社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为杨汇哲、曹兴武，学生负责人为黄维浩。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-66", name: "夏羽社", short: "夏", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "郭锡尧", leader: "冯鑫仪 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "夏羽社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师郭锡尧，学生负责人冯鑫仪。",
      detail: "夏羽社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为郭锡尧，学生负责人为冯鑫仪。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-67", name: "乒乓球协会", short: "乒", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "宋浩", leader: "林子恒 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "乒乓球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师宋浩，学生负责人林子恒。",
      detail: "乒乓球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为宋浩，学生负责人为林子恒。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-68", name: "跆拳道协会", short: "跆", category: "文化体育类", status: "年审通过", unit: "教育与体育学院（筹）", advisor: "梁四海", leader: "杨雨婷 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "跆拳道协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师梁四海，学生负责人杨雨婷。",
      detail: "跆拳道协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为梁四海，学生负责人为杨雨婷。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-69", name: "双黄蛋ACG文化交流协会", short: "双", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "方映萍", leader: "华雨虹 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "双黄蛋ACG文化交流协会是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师方映萍，学生负责人华雨虹。",
      detail: "双黄蛋ACG文化交流协会为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为方映萍，学生负责人为华雨虹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-70", name: "C3动漫社", short: "C", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "刘震寰、张智燕", leader: "陈学颖 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "C3动漫社是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师刘震寰、张智燕，学生负责人陈学颖。",
      detail: "C3动漫社为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为刘震寰、张智燕，学生负责人为陈学颖。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-71", name: "美丽乡村彩绘团", short: "美", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "唐香莲、于露、陈桃莉", leader: "谭吉芸 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "美丽乡村彩绘团是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师唐香莲、于露、陈桃莉，学生负责人谭吉芸。",
      detail: "美丽乡村彩绘团为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为唐香莲、于露、陈桃莉，学生负责人为谭吉芸。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-72", name: "DDPA摄影协会", short: "D", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "袁震宇", leader: "曾海容 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "DDPA摄影协会是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师袁震宇，学生负责人曾海容。",
      detail: "DDPA摄影协会为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为袁震宇，学生负责人为曾海容。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-73", name: "国潮手作社", short: "国", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "黄文萍", leader: "秦紫心 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "国潮手作社是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师黄文萍，学生负责人秦紫心。",
      detail: "国潮手作社为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为黄文萍，学生负责人为秦紫心。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-74", name: "非遗文化社", short: "非", category: "文化体育类", status: "年审通过", unit: "创意设计与传媒学院（筹）", advisor: "吕珊", leader: "黎清 · 创意设计与传媒学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 创意设计与传媒学院（筹）指导",
      description: "非遗文化社是创意设计与传媒学院（筹）指导的文化体育类学生社团，指导教师吕珊，学生负责人黎清。",
      detail: "非遗文化社为创意设计与传媒学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为吕珊，学生负责人为黎清。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-75", name: "UDF未定义舞社", short: "U", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "卢俏茵", leader: "胡诗莹 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "UDF未定义舞社是卫生健康学院指导的文化体育类学生社团，指导教师卢俏茵，学生负责人胡诗莹。",
      detail: "UDF未定义舞社为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为卢俏茵，学生负责人为胡诗莹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-76", name: "飞羽社", short: "飞", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "姜林辉", leader: "叶家恒 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "飞羽社是卫生健康学院指导的文化体育类学生社团，指导教师姜林辉，学生负责人叶家恒。",
      detail: "飞羽社为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为姜林辉，学生负责人为叶家恒。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-77", name: "逐风篮球社", short: "逐", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "陈娟娟", leader: "余祉乐 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "逐风篮球社是卫生健康学院指导的文化体育类学生社团，指导教师陈娟娟，学生负责人余祉乐。",
      detail: "逐风篮球社为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为陈娟娟，学生负责人为余祉乐。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-78", name: "乒博协会", short: "乒", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "程芷琰", leader: "黄心谊 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "乒博协会是卫生健康学院指导的文化体育类学生社团，指导教师程芷琰，学生负责人黄心谊。",
      detail: "乒博协会为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为程芷琰，学生负责人为黄心谊。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-79", name: "声形司仪队", short: "声", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "卢俏茵，郑婷", leader: "贺桢 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "声形司仪队是卫生健康学院指导的文化体育类学生社团，指导教师卢俏茵，郑婷，学生负责人贺桢。",
      detail: "声形司仪队为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为卢俏茵，郑婷，学生负责人为贺桢。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-80", name: "聆心手语社", short: "聆", category: "文化体育类", status: "年审通过", unit: "卫生健康学院", advisor: "占小多", leader: "李随缘 · 卫生健康学院", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 卫生健康学院指导",
      description: "聆心手语社是卫生健康学院指导的文化体育类学生社团，指导教师占小多，学生负责人李随缘。",
      detail: "聆心手语社为卫生健康学院指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为占小多，学生负责人为李随缘。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-81", name: "心扉手语社", short: "心", category: "文化体育类", status: "年审通过", unit: "图书馆", advisor: "赵丹妮", leader: "冯舒然 · 图书馆", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "library",
      slogan: "文化体育类 · 图书馆指导",
      description: "心扉手语社是图书馆指导的文化体育类学生社团，指导教师赵丹妮，学生负责人冯舒然。",
      detail: "心扉手语社为图书馆指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为赵丹妮，学生负责人为冯舒然。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-82", name: "书画协会", short: "书", category: "文化体育类", status: "年审通过", unit: "图书馆", advisor: "陈韵", leader: "朱思楚 · 图书馆", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "library",
      slogan: "文化体育类 · 图书馆指导",
      description: "书画协会是图书馆指导的文化体育类学生社团，指导教师陈韵，学生负责人朱思楚。",
      detail: "书画协会为图书馆指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为陈韵，学生负责人为朱思楚。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-83", name: "融媒体协会", short: "融", category: "文化体育类", status: "年审通过", unit: "终身教育学院（筹）", advisor: "袁少锋", leader: "黄洢桐 · 终身教育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 终身教育学院（筹）指导",
      description: "融媒体协会是终身教育学院（筹）指导的文化体育类学生社团，指导教师袁少锋，学生负责人黄洢桐。",
      detail: "融媒体协会为终身教育学院（筹）指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为袁少锋，学生负责人为黄洢桐。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-84", name: "非遗手作社", short: "非", category: "文化体育类", status: "年审通过", unit: "未来技术学院(筹)", advisor: "刘梦", leader: "涂美玲 · 未来技术学院(筹)", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "teaching",
      slogan: "文化体育类 · 未来技术学院(筹)指导",
      description: "非遗手作社是未来技术学院(筹)指导的文化体育类学生社团，指导教师刘梦，学生负责人涂美玲。",
      detail: "非遗手作社为未来技术学院(筹)指导的文化体育类学生社团，2026-2027 学年年审通过。指导教师为刘梦，学生负责人为涂美玲。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-85", name: "松风古琴社", short: "松", category: "文化体育类", status: "新成立", unit: "图书馆", advisor: "钟穗珊", leader: "郭芬 · 图书馆", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "library",
      slogan: "文化体育类 · 图书馆指导",
      description: "松风古琴社是图书馆指导的文化体育类学生社团，指导教师钟穗珊，学生负责人郭芬。",
      detail: "松风古琴社为图书馆指导的文化体育类学生社团，2026-2027 学年新成立。指导教师为钟穗珊，学生负责人为郭芬。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-86", name: "东职匹克球协会", short: "东", category: "文化体育类", status: "新成立", unit: "教育与体育学院（筹）", advisor: "蔡观胜", leader: "潘俪丹 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "东职匹克球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师蔡观胜，学生负责人潘俪丹。",
      detail: "东职匹克球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年新成立。指导教师为蔡观胜，学生负责人为潘俪丹。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-87", name: "粤舞拾光", short: "粤", category: "文化体育类", status: "新成立", unit: "教育与体育学院（筹）", advisor: "周卉钰", leader: "曾彩欣 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "粤舞拾光是教育与体育学院（筹）指导的文化体育类学生社团，指导教师周卉钰，学生负责人曾彩欣。",
      detail: "粤舞拾光为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年新成立。指导教师为周卉钰，学生负责人为曾彩欣。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-88", name: "新手村次元桌游社", short: "新", category: "文化体育类", status: "新成立", unit: "教育与体育学院（筹）", advisor: "周赞", leader: "卓嘉熒 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "新手村次元桌游社是教育与体育学院（筹）指导的文化体育类学生社团，指导教师周赞，学生负责人卓嘉熒。",
      detail: "新手村次元桌游社为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年新成立。指导教师为周赞，学生负责人为卓嘉熒。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    },
    {
      id: "club-89", name: "腰旗橄榄球协会", short: "腰", category: "文化体育类", status: "新成立", unit: "教育与体育学院（筹）", advisor: "周赞", leader: "罗乔蔓 · 教育与体育学院（筹）", recruit: "注册在册", image: "assets/stadium.jpg", locationId: "stadium",
      slogan: "文化体育类 · 教育与体育学院（筹）指导",
      description: "腰旗橄榄球协会是教育与体育学院（筹）指导的文化体育类学生社团，指导教师周赞，学生负责人罗乔蔓。",
      detail: "腰旗橄榄球协会为教育与体育学院（筹）指导的文化体育类学生社团，2026-2027 学年新成立。指导教师为周赞，学生负责人为罗乔蔓。社团活动与招新安排以学校社团管理部门及社团发布的通知为准。",
      activities: []
    }
  ],

  badges: [
    { id: "first-light", name: "初次点亮", description: "完成第 1 次打卡", icon: "sparkles", type: "lit", target: 1 },
    { id: "explorer", name: "校园漫游者", description: "点亮 4 个地点", icon: "compass", type: "lit", target: 4 },
    { id: "connector", name: "搭子联络员", description: "加入或发起 1 次组局", icon: "handshake", type: "groups", target: 1 },
    { id: "club-friend", name: "同好召集人", description: "提交首份社团申请", icon: "users", type: "clubs", target: 1 },
    { id: "checkin-three", name: "足迹收藏家", description: "累计打卡 3 个地点", icon: "map-pin", type: "lit", target: 3 },
    { id: "nova-master", name: "星图收藏家", description: "点亮全部 8 个地点", icon: "crown", type: "lit", target: 8 }
  ],

  clubEvents: [
    { id: "event-1", clubId: "club-57", kind: "比赛", title: "新生杯八人制足球友谊赛", date: "11月09日", weekday: "周日", time: "15:00", place: "田径场北侧球门", signup: "已报名 8 支队伍", image: "assets/stadium.jpg", desc: "按水平混合分队，每位报名的同学都有上场时间，赛后一起看比赛录像复盘。" },
    { id: "event-2", clubId: "club-16", kind: "比赛", title: "机器人循迹挑战赛", date: "11月12日", weekday: "周三", time: "19:00", place: "笃行楼 302 实训室", signup: "限 20 支队伍", image: "assets/teaching.jpg", desc: "两人一组现场搭建循迹小车，赛道当场公布，零基础也能参加赛前三十分钟的教学环节。" },
    { id: "event-3", clubId: "club-47", kind: "比赛", title: "新生辩论公开赛", date: "11月15日", weekday: "周六", time: "19:30", place: "修远楼报告厅", signup: "观众席开放", image: "assets/reading-room.jpg", desc: "围绕“大学应该更重视通识还是专业”展开，赛后设有自由发言与辩手交流环节。" },
    { id: "event-4", clubId: "club-72", kind: "活动", title: "秋日校园主题外拍", date: "11月08日", weekday: "周六", time: "16:00", place: "映月湖湖心亭", signup: "手机也可参加", image: "assets/lake.jpg", desc: "沿湖完成三组主题拍摄任务，现场有学长讲解构图与光线，活动后一起做一次快速后期。" },
    { id: "event-5", clubId: "club-52", kind: "活动", title: "草坪音乐会 · 冬日序章", date: "11月20日", weekday: "周五", time: "19:00", place: "映月湖草坪", signup: "开放 5 个新生名额", image: "assets/club-fair.jpg", desc: "民谣、乐队与指弹轮番上场，也可以只带耳朵来听，散场前一起合唱一首歌。" },
    { id: "event-6", clubId: "club-61", kind: "活动", title: "醒狮体验开放日", date: "11月16日", weekday: "周日", time: "14:00", place: "田径场东侧", signup: "现场可直接加入", image: "assets/stadium.jpg", desc: "从基本步法到一次完整采青，狮头与锣鼓都可上手体验，社团队员全程带练。" }
  ]
};

window.NovaDB.clubEvents.forEach(event => {
  const club = window.NovaDB.clubs.find(item => item.id === event.clubId);
  if (club) club.activities.push({ date: `${event.date} ${event.weekday}`, title: event.title, desc: `${event.time} · ${event.place}｜${event.desc}` });
});
