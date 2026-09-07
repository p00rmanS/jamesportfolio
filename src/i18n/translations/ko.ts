import type { Translations } from '@/i18n/types'

export const ko: Translations = {
  nav: {
    work: '작업',
    services: '서비스',
    about: '소개',
    process: '진행 과정',
    resume: 'CV',
    bookCall: '상담 예약',
  },
  hero: {
    eyebrow: '현대 비즈니스를 위한 크리에이티브 시스템',
    headline: ['연결되는 콘텐츠.', '흐름을 놓치지 않는 시스템.'],
    subcopy: '비즈니스를 더 돋보이게, 더 원활하게 만드는 영상, 콘텐츠, 시스템.',
    primaryCta: '작업 보기',
    secondaryCta: '상담 예약하기',
  },
  sections: {
    work: {
      label: '주요 작업',
      title: 'J Sync가 만든 작업의 일부입니다.',
      description: '영상, 웹, 자동화 분야의 최근 프로젝트 모음.',
    },
    videos: {
      label: '영상 포트폴리오',
      title: '영상, 제대로 보여주다.',
      description: '최근 영상 작업을 더 자세히 살펴보세요.',
    },
    content: {
      label: '콘텐츠',
      title: 'SNS와 캠페인 작업을 한눈에.',
      description: 'SNS, 캠페인, 브랜드 디자인을 한곳에서.',
    },
    automation: {
      label: '자동화',
      title: '보이지 않는 곳에서 작동하는 시스템.',
      description: 'J Sync가 반복 업무를 자동화하는 방식 — 트리거, 단계, 사용 도구.',
    },
    services: {
      label: '서비스',
      title: '함께 일하는 네 가지 방법.',
      description: '각 서비스는 단독으로도, 하나의 통합 시스템으로도 작동합니다.',
    },
    process: {
      label: '진행 과정',
      title: '프로젝트가 실제로 진행되는 방식.',
      description: '네 단계. 명확한 절차, 블랙박스는 없습니다.',
    },
    about: {
      label: '소개',
      title: '{brand}에 대하여.',
    },
    booking: {
      label: '예약',
      title: '함께 유용한 것을 만들어봐요.',
    },
  },
  services: {
    ideaFor: '이런 분께 적합합니다',
    deliverables: '주요 산출물',
    seeRelatedWork: '관련 작업 보기',
    askAboutService: '이 서비스에 대해 문의하기',
    items: {
      'video-production': {
        title: '영상 제작',
        description: '의도가 담긴 영상 — SNS용 짧은 컷부터 브랜드 필름까지.',
        idealFor: '자체 영상팀 없이 영상이 필요한 기업.',
      },
      'content-creation': {
        title: '콘텐츠 제작',
        description: '반복 가능한 시스템으로 구축된 SNS 콘텐츠와 브랜드 비주얼.',
        idealFor: '매주 새로 고민하지 않고 일관된 콘텐츠를 원하는 팀.',
      },
      'website-development': {
        title: '웹사이트 개발',
        description: '전환에 최적화된 빠르고 반응형인 웹사이트 — 예약, 문의, 혹은 더 나은 첫인상까지.',
        idealFor: '느리거나 오래되었거나 성과가 낮은 웹사이트를 가진 기업.',
      },
      'workflow-automation': {
        title: '업무 자동화',
        description: '리드 관리, 일정 조율, 온보딩, 보고 등 반복 업무를 위한 자동화.',
        idealFor: '매주 수작업 반복 업무에 많은 시간을 쓰는 팀.',
      },
    },
  },
  process: {
    discover: { title: '발견', description: '무엇이 잘 되고 있는지, 무엇이 아닌지, 성공의 모습은 어떤지에 대한 대화.' },
    plan: { title: '계획', description: '명확한 산출물, 일정, 도구 — 시작 후 놀랄 일이 없도록.' },
    create: { title: '제작', description: '촬영, 디자인, 개발, 또는 자동화 — 정기적인 소통과 함께.' },
    launch: { title: '출시와 개선', description: '출시 후 무엇이 효과적인지 살펴보고 계속해서 개선해 나갑니다.' },
  },
  about: {
    introQuote: 'J Sync는 크리에이티브 제작과 실용적인 기술을 결합합니다 — 보기 좋은 것을 넘어 진짜 도움이 되도록.',
    toolsLabel: '도구 및 기술',
    downloadResume: '다운로드',
  },
  footer: {
    brandStatement: '영상, 콘텐츠, 웹사이트, 자동화 — 더 원활하게 운영하고 싶은 기업을 위해.',
    navigate: '메뉴',
    connect: '연결해요.',
    backToTop: '맨 위로',
    privacy: '개인정보처리방침',
    accessibility: '접근성',
  },
  booking: {
    description: '영상, 웹, 콘텐츠, 자동화 중 실제로 필요한 것이 무엇인지 확인하는 짧은 통화입니다.',
    bookNow: '지금 예약하기',
    form: {
      name: '이름',
      email: '이메일',
      service: '필요한 서비스',
      selectService: '서비스 선택',
      notSure: '아직 미정',
      message: '추가로 전달할 내용 (선택)',
      continue: '일정 선택하기',
      errors: {
        name: '이름을 입력해 주세요.',
        email: '이메일을 입력해 주세요.',
        emailInvalid: '올바른 이메일 주소를 입력해 주세요.',
        service: '서비스를 선택해 주세요.',
      },
    },
  },
  language: {
    label: '언어',
  },
  dashboard: {
    getInTouch: '문의하기',
    dailyDrivers: '자주 쓰는 도구',
    toolsIWorkWith: '사용 중인 도구',
    fullSite: '전체 사이트 보기',
    altViewLabel: '대시보드 보기',
  },
}
