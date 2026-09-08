import type { Translations } from '@/i18n/types'

export const zhCN: Translations = {
  nav: {
    work: '作品',
    services: '服务',
    about: '关于',
    process: '流程',
    resume: 'CV',
    bookCall: '预约通话',
  },
  hero: {
    eyebrow: '为现代企业打造的创意系统',
    headline: ['连接人心的内容。', '与时俱进的系统。'],
    subcopy: '视频、内容与系统，让您的业务更出彩、运作更顺畅。',
    primaryCta: '查看精选作品',
    secondaryCta: '预约咨询',
  },
  sections: {
    work: {
      label: '精选作品',
      title: 'J Sync 部分作品展示。',
      description: '涵盖视频、网站与自动化的近期项目精选。',
    },
    videos: {
      label: '视频作品集',
      title: '用心呈现每一支视频。',
      description: '深入了解近期的视频作品。',
    },
    content: {
      label: '内容展示',
      title: '社交与营销内容一览。',
      description: '社交媒体、营销活动与品牌设计，尽在一处。',
    },
    automation: {
      label: '自动化',
      title: '幕后运转的系统。',
      description: 'J Sync 如何将重复性工作自动化 — 触发条件、执行步骤与所用工具。',
    },
    services: {
      label: '服务',
      title: '四种合作方式。',
      description: '每项服务既可独立进行，也可整合为一套完整系统。',
    },
    process: {
      label: '流程',
      title: '项目实际推进的方式。',
      description: '四个阶段，步骤清晰，绝不含糊。',
    },
    about: {
      label: '关于',
      title: '关于 {brand}。',
    },
    faq: {
      label: '常见问题',
      title: '预约之前。',
      description: '首次通话前，客户通常会问到的问题。',
    },
    booking: {
      label: '预约',
      title: '一起打造真正有用的东西。',
    },
  },
  services: {
    ideaFor: '适合',
    deliverables: '常见交付内容',
    seeRelatedWork: '查看相关作品',
    askAboutService: '咨询此项服务',
    items: {
      'video-production': {
        title: '视频制作',
        description: '每一支视频都有明确目的 — 从社交短视频到品牌宣传片。',
        idealFor: '需要视频内容但没有内部团队的企业。',
      },
      'content-creation': {
        title: '内容创作',
        description: '将社交内容与品牌视觉打造成可持续运作的系统。',
        idealFor: '希望保持内容稳定输出、无需每周重新构思的团队。',
      },
      'website-development': {
        title: '网站开发',
        description: '快速、响应式的网站，专注于转化 — 预约、咨询，或只是留下更好的第一印象。',
        idealFor: '网站速度慢、过时或转化效果不佳的企业。',
      },
      'workflow-automation': {
        title: '工作流自动化',
        description: '将业务中重复性的工作自动化 — 潜在客户处理、日程安排、客户入驻、报告生成。',
        idealFor: '每周花费大量时间在手动重复工作上的团队。',
      },
    },
  },
  process: {
    discover: { title: '发现', description: '一次关于现状、问题所在，以及成功标准的深入交流。' },
    plan: { title: '规划', description: '明确交付内容、时间表与所用工具 — 项目启动后不会有意外。' },
    create: { title: '制作', description: '拍摄、设计、开发或自动化 — 并保持定期沟通与反馈。' },
    launch: { title: '上线与优化', description: '上线后我们会评估效果，并持续优化改进。' },
  },
  about: {
    introQuote: 'J Sync 将创意制作与实用技术相结合 — 追求的不只是美观，更是真正的实用价值。',
    toolsLabel: '工具与技术',
    downloadResume: '下载',
  },
  footer: {
    brandStatement: '视频、内容、网站与自动化 — 助力企业运作更顺畅。',
    navigate: '导航',
    connect: '保持联系。',
    backToTop: '返回顶部',
    privacy: '隐私政策',
    accessibility: '无障碍声明',
  },
  booking: {
    description: '一次简短的通话，帮您理清真正需要的是什么 — 视频、网站、内容还是自动化。',
    bookNow: '立即预约',
    form: {
      name: '姓名',
      email: '电子邮箱',
      service: '所需服务',
      selectService: '请选择服务',
      notSure: '尚未确定',
      message: '补充说明（选填）',
      continue: '继续选择时间',
      errors: {
        name: '请输入您的姓名。',
        email: '请输入您的电子邮箱。',
        emailInvalid: '请输入有效的电子邮箱地址。',
        service: '请选择一项服务。',
      },
    },
  },
  language: {
    label: '语言',
  },
  dashboard: {
    getInTouch: '联系我',
    dailyDrivers: '日常工具',
    toolsIWorkWith: '我使用的工具',
    fullSite: '查看完整网站',
    altViewLabel: '仪表盘视图',
  },
  faq: {
    items: [
      {
        question: '一般项目需要多长时间？',
        answer:
          '具体取决于项目规模，但大多数视频和网站项目从启动到交付通常需要一到三周。自动化系统的搭建通常更快，往往一周内即可上线。',
      },
      {
        question: '费用是如何计算的？',
        answer:
          '每个项目都会在初步沟通后根据实际范围给出报价，绝不盲目定价。单次项目通常按固定价格收费；持续性的内容或自动化系统通常按月订阅收费。',
      },
      {
        question: '交付后如果需要修改怎么办？',
        answer: '每个项目在最终交付前都包含一轮修改。之后的支持或更新可按需另行安排。',
      },
      {
        question: '预约通话前是否需要明确知道自己想要什么？',
        answer: '不需要 — 初步沟通的目的正是为了一起理清需求。只需带着您想解决的问题来就好，不必事先想好解决方案。',
      },
      {
        question: '这些服务可以组合使用吗？',
        answer: '可以 — 视频、内容、网站与自动化在设计上本就是相互衔接的。许多客户会先从一项服务开始，等运作顺利后再增加其他服务。',
      },
    ],
  },
  commandPalette: {
    placeholder: '搜索版块与操作…',
    noResults: '未找到匹配结果。',
    sectionsGroup: '版块',
    actionsGroup: '操作',
  },
}
