import type { Translations } from '@/i18n/types'

// Written in Hong Kong / Cantonese business register (Traditional characters,
// Cantonese-specific wording like 嘅/哋/俾/睇), distinct from the Mandarin
// Simplified copy in zh-CN.ts — not colloquial slang, kept professional.
export const zhHK: Translations = {
  nav: {
    work: '作品',
    services: '服務',
    about: '關於',
    process: '流程',
    resume: 'CV',
    bookCall: '預約通話',
  },
  hero: {
    eyebrow: '為現代企業打造嘅創意系統',
    headline: ['連繫人心嘅內容。', '追得上時代嘅系統。'],
    subcopy: '影片、內容同系統，等你嘅生意睇落更出色、運作更暢順。',
    primaryCta: '睇吓精選作品',
    secondaryCta: '預約諮詢',
  },
  sections: {
    work: {
      label: '精選作品',
      title: 'J Sync 部分作品展示。',
      description: '涵蓋影片、網站同自動化嘅近期項目精選。',
    },
    videos: {
      label: '影片作品集',
      title: '影片，要拍得靚、擺得啱。',
      description: '仲有更多近期影片作品，等你睇個夠。',
    },
    content: {
      label: '內容展示',
      title: '社交同宣傳內容，一目了然。',
      description: '社交媒體、宣傳活動同品牌設計，齊集一處。',
    },
    automation: {
      label: '自動化',
      title: '幕後運作嘅系統。',
      description: 'J Sync 點樣將重複工作自動化 — 觸發條件、步驟同所用工具。',
    },
    services: {
      label: '服務',
      title: '四種合作方式。',
      description: '每項服務可以獨立進行，亦都可以整合成一套完整系統。',
    },
    process: {
      label: '流程',
      title: '一個項目實際點樣推進。',
      description: '四個階段，步驟清晰，絕不含糊。',
    },
    about: {
      label: '關於',
      title: '關於 {brand}。',
    },
    faq: {
      label: '常見問題',
      title: '預約之前。',
      description: '第一次傾偈之前，通常會問到嘅問題。',
    },
    booking: {
      label: '預約',
      title: '一齊打造啲真正有用嘅嘢。',
    },
  },
  services: {
    ideaFor: '啱晒',
    deliverables: '常見交付內容',
    seeRelatedWork: '睇吓相關作品',
    askAboutService: '查詢呢項服務',
    items: {
      'video-production': {
        title: '影片製作',
        description: '每條片都有明確目的 — 由社交平台短片到品牌宣傳片都得。',
        idealFor: '需要影片但冇內部團隊嘅公司。',
      },
      'content-creation': {
        title: '內容創作',
        description: '將社交內容同品牌視覺打造成一套可持續運作嘅系統。',
        idealFor: '想保持內容穩定輸出、唔使日日諗新橋嘅團隊。',
      },
      'website-development': {
        title: '網站開發',
        description: '快速、適應各種裝置嘅網站，專注帶嚟轉化 — 預約、查詢，或者只係俾人留低更好嘅第一印象。',
        idealFor: '網站太慢、太舊或者成效唔好嘅公司。',
      },
      'workflow-automation': {
        title: '工作流程自動化',
        description: '將業務入面重複嘅工作自動化 — 客戶跟進、日程安排、新客戶入伙、報告生成。',
        idealFor: '每個星期都要花好多時間喺重複手動工作上嘅團隊。',
      },
    },
  },
  process: {
    discover: { title: '了解', description: '深入了解而家嘅情況、有咩做得好、有咩可以改善，同埋成功嘅定義係咩。' },
    plan: { title: '規劃', description: '清楚嘅交付內容、時間表同工具 — 開工之後唔會有意外。' },
    create: { title: '製作', description: '拍攝、設計、開發或者自動化 — 過程中會保持定期溝通。' },
    launch: { title: '推出同優化', description: '推出之後，我哋會評估成效，並持續優化改進。' },
  },
  about: {
    introQuote: 'J Sync 將創意製作同實用科技結合 — 追求嘅唔淨止係靚，而係真正有用。',
    toolsLabel: '工具同技術',
    downloadResume: '下載',
  },
  footer: {
    brandStatement: '影片、內容、網站同自動化 — 為想運作更暢順嘅企業而設。',
    navigate: '導航',
    connect: '保持聯繫。',
    backToTop: '返回頂部',
    privacy: '私隱政策',
    accessibility: '無障礙聲明',
  },
  booking: {
    description: '一個簡短通話，幫你搞清楚真正需要嘅係咩 — 影片、網站、內容定係自動化。',
    bookNow: '即刻預約',
    form: {
      name: '姓名',
      email: '電郵',
      service: '所需服務',
      selectService: '請選擇服務',
      notSure: '仲未確定',
      message: '補充資料（可不填）',
      continue: '繼續揀時間',
      errors: {
        name: '請輸入你嘅姓名。',
        email: '請輸入你嘅電郵。',
        emailInvalid: '請輸入有效嘅電郵地址。',
        service: '請選擇一項服務。',
      },
    },
  },
  language: {
    label: '語言',
  },
  dashboard: {
    getInTouch: '聯絡我',
    dailyDrivers: '日常工具',
    toolsIWorkWith: '我用嘅工具',
    fullSite: '睇完整網站',
    altViewLabel: '儀表板檢視',
  },
  faq: {
    items: [
      {
        question: '一個普通項目要幾耐？',
        answer:
          '要睇項目規模，不過大部分影片同網站項目由開始到交付，通常要一至三個星期。自動化嘅搭建通常會快啲，好多時一個星期內就可以上線。',
      },
      {
        question: '收費係點計嘅？',
        answer:
          '每個項目都會喺初步傾偈之後，根據實際範圍俾返報價，絕對唔會盲目定價。單次項目通常係固定價錢；持續性嘅內容或者自動化系統就通常係月費形式。',
      },
      {
        question: '交咗之後仲要改點算？',
        answer: '每個項目喺最終交付之前，都包括一輪修改。之後嘅支援或者更新，可以按需要再另外安排。',
      },
      {
        question: '約傾偈之前，係咪要清楚知道自己想要咩？',
        answer: '唔使 — 初步傾偈嘅目的，就係一齊搞清楚呢樣嘢。只要帶住你想解決嘅問題嚟就得，唔使預先諗好解決方案。',
      },
      {
        question: '呢啲服務可唔可以夾埋一齊用？',
        answer: '可以 — 影片、內容、網站同自動化，設計上就係為咗互相配合。好多客戶都會先由一項服務開始，等運作暢順之後先至加多一項。',
      },
    ],
  },
  commandPalette: {
    placeholder: '搜尋版面同操作…',
    noResults: '搵唔到相關結果。',
    sectionsGroup: '版面',
    actionsGroup: '操作',
  },
}
