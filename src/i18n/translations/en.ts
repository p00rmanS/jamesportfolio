import type { Translations } from '@/i18n/types'

// Source of truth for all other locales. Keep entries short — this is the
// "client-facing pitch" layer (nav, hero, services, process, about, footer,
// booking). Long-form narrative content (project descriptions, automation
// walkthroughs) intentionally lives only in src/data/content.ts and stays
// English-only for now — see README "Multi-language support".
export const en: Translations = {
  nav: {
    work: 'Work',
    services: 'Services',
    about: 'About',
    process: 'Process',
    resume: 'CV',
    bookCall: 'Book a Call',
  },
  hero: {
    eyebrow: 'Creative systems for modern businesses',
    headline: ['Content that connects.', 'Systems that keep up.'],
    subcopy: 'Video, content, and systems that help your business look sharper and run smoother.',
    primaryCta: 'View Selected Work',
    secondaryCta: 'Book a Consultation',
  },
  sections: {
    work: {
      label: 'Selected Work',
      title: 'A sample of what J Sync builds.',
      description: 'A cross-section of recent video, web, and automation projects.',
    },
    videos: {
      label: 'Video Portfolio',
      title: 'Video, published properly.',
      description: 'A closer look at recent video work.',
    },
    content: {
      label: 'Content Showcase',
      title: 'Social and campaign work, at a glance.',
      description: 'Social, campaigns, and brand design in one place.',
    },
    automation: {
      label: 'Automation',
      title: 'The systems working behind the scenes.',
      description: 'How J Sync automates the busywork — the trigger, the steps, and the tools involved.',
    },
    services: {
      label: 'Services',
      title: 'Four ways to work together.',
      description: 'Each service stands alone, or combines into one connected system.',
    },
    process: {
      label: 'Process',
      title: 'How a project actually moves.',
      description: 'Four stages. Clear steps, no black box.',
    },
    about: {
      label: 'About',
      title: 'Behind {brand}.',
    },
    booking: {
      label: 'Booking',
      title: 'Let’s build something useful.',
    },
  },
  services: {
    ideaFor: 'Ideal for',
    deliverables: 'Typical deliverables',
    seeRelatedWork: 'See related work',
    askAboutService: 'Ask about this service',
    items: {
      'video-production': {
        title: 'Video Production',
        description: 'Video that looks intentional — from social cuts to brand films.',
        idealFor: 'Businesses that need video without an in-house crew.',
      },
      'content-creation': {
        title: 'Content Creation',
        description: 'Social content and brand visuals, built as a repeatable system.',
        idealFor: 'Teams who want consistent content without reinventing it weekly.',
      },
      'website-development': {
        title: 'Website Development',
        description: 'Fast, responsive websites built to convert — bookings, inquiries, or just a better first impression.',
        idealFor: 'Businesses with a slow, dated, or underperforming site.',
      },
      'workflow-automation': {
        title: 'Workflow Automation',
        description: 'Automation for the repetitive parts of running a business — leads, scheduling, onboarding, reporting.',
        idealFor: 'Teams spending hours a week on manual, repeatable tasks.',
      },
    },
  },
  process: {
    discover: {
      title: 'Discover',
      description: 'A conversation about what’s working, what’s not, and what success looks like.',
    },
    plan: {
      title: 'Plan',
      description: 'Clear deliverables, timeline, and tools — no surprises once work starts.',
    },
    create: {
      title: 'Create',
      description: 'Filming, designing, building, or automating — with regular check-ins.',
    },
    launch: {
      title: 'Launch & Improve',
      description: 'We review what’s working after launch, and keep improving from there.',
    },
  },
  about: {
    introQuote: 'J Sync blends creative production with practical technology — built to be genuinely useful, not just good-looking.',
    toolsLabel: 'Tools & Technologies',
    downloadResume: 'Download',
  },
  footer: {
    brandStatement: 'Video, content, websites, and automation — for businesses that want to run smoother.',
    navigate: 'Navigate',
    connect: "Let's connect.",
    backToTop: 'Back to top',
    privacy: 'Privacy',
    accessibility: 'Accessibility',
  },
  booking: {
    description: 'A short call to figure out what you actually need — video, web, content, or automation.',
    bookNow: 'Book Now',
    form: {
      name: 'Name',
      email: 'Email',
      service: 'Service needed',
      selectService: 'Select a service',
      notSure: 'Not sure yet',
      message: 'Anything else? (optional)',
      continue: 'Continue to Book a Time',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email.',
        emailInvalid: 'Please enter a valid email address.',
        service: 'Please select a service.',
      },
    },
  },
  language: {
    label: 'Language',
  },
  dashboard: {
    getInTouch: 'Get in Touch',
    dailyDrivers: 'Daily Drivers',
    toolsIWorkWith: 'Tools I Work With',
    fullSite: 'View Full Site',
    altViewLabel: 'Dashboard View',
  },
}
