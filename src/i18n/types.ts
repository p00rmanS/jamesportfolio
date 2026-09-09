// Shape of one full translation set. Every locale file must implement this
// exactly — TypeScript will flag any locale that's missing a string.
export interface Translations {
  nav: {
    work: string
    services: string
    about: string
    process: string
    resume: string
    bookCall: string
  }
  hero: {
    eyebrow: string
    headline: [string, string]
    subcopy: string
    primaryCta: string
    secondaryCta: string
  }
  sections: {
    work: { label: string; title: string; description: string }
    videos: { label: string; title: string; description: string }
    content: { label: string; title: string; description: string }
    automation: { label: string; title: string; description: string }
    services: { label: string; title: string; description: string }
    process: { label: string; title: string; description: string }
    about: { label: string; title: string }
    faq: { label: string; title: string; description: string }
    booking: { label: string; title: string }
  }
  services: {
    ideaFor: string
    deliverables: string
    seeRelatedWork: string
    askAboutService: string
    items: {
      'video-production': { title: string; description: string; idealFor: string }
      'motion-graphics': { title: string; description: string; idealFor: string }
      'content-creation': { title: string; description: string; idealFor: string }
      'website-development': { title: string; description: string; idealFor: string }
      'workflow-automation': { title: string; description: string; idealFor: string }
    }
  }
  process: {
    discover: { title: string; description: string }
    plan: { title: string; description: string }
    create: { title: string; description: string }
    launch: { title: string; description: string }
  }
  about: {
    introQuote: string
    toolsLabel: string
    downloadResume: string
  }
  footer: {
    brandStatement: string
    navigate: string
    connect: string
    backToTop: string
    privacy: string
    accessibility: string
  }
  booking: {
    description: string
    bookNow: string
    form: {
      name: string
      email: string
      service: string
      selectService: string
      notSure: string
      message: string
      continue: string
      errors: {
        name: string
        email: string
        emailInvalid: string
        service: string
      }
    }
  }
  language: {
    label: string
  }
  dashboard: {
    getInTouch: string
    dailyDrivers: string
    toolsIWorkWith: string
    fullSite: string
    altViewLabel: string
  }
  faq: {
    items: Array<{ question: string; answer: string }>
  }
  commandPalette: {
    placeholder: string
    noResults: string
    sectionsGroup: string
    actionsGroup: string
  }
}
