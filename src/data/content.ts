// ---------------------------------------------------------------------------
// CENTRAL CONTENT FILE
// Almost everything on the site is driven from this file. Edit copy, swap
// sample projects for real ones, and add media here — most components never
// need to change. See README.md for a full guide to every section.
//
// Anything containing "[Sample" / "Replace" / bracketed text is a clearly
// marked placeholder. No real client names, results, or testimonials are
// invented anywhere in this file.
// ---------------------------------------------------------------------------

import type { SiteContent } from '@/types/content'

export const content: SiteContent = {
  brand: {
    name: 'J Sync',
    email: 'jamesbaldwindean2015@gmail.com',
  },

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
  ],

  hero: {
    // Eyebrow, headline, subcopy, and CTA labels live in src/i18n/translations/*.ts.
    primaryCtaHref: '#work',
    secondaryCtaHref: '#booking',
    posterSrc: '',
    videoSrc: '', // Add an mp4/webm path (e.g. /videos/showreel.mp4) to enable the muted autoplay preview
  },

  projects: [
    {
      id: 'harborline-brand-film',
      title: 'Harborline Brand Film',
      client: 'Harborline Goods [Sample Client]',
      category: 'Video Production',
      year: '2025',
      cover: { type: 'image', src: '', alt: 'Harborline Goods brand film cover — sample placeholder' },
      summary: 'A short brand film built to introduce a small manufacturer to new wholesale buyers.',
      servicesProvided: ['Concept & Scripting', 'Production', 'Editing & Color', 'Sound Design'],
      description:
        '[Add project description — outline the goal, the shoot, and how the film was used, e.g. trade show loop, homepage hero, sales outreach.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
    {
      id: 'fielding-process-series',
      title: 'Fielding Coffee — Process Series',
      client: 'Fielding Coffee Roasters [Sample Client]',
      category: 'Video Production',
      year: '2024',
      cover: { type: 'image', src: '', alt: 'Fielding Coffee Roasters process series cover — sample placeholder' },
      summary: 'A short-form video series following a roastery through a single production day.',
      servicesProvided: ['Filming', 'Short-Form Editing', 'Captioning'],
      description:
        '[Add project description — note episode count, platforms, and cadence, e.g. six-part weekly series for Instagram and YouTube Shorts.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
    {
      id: 'cedar-finch-campaign-system',
      title: 'Cedar & Finch — Seasonal Campaign System',
      client: 'Cedar & Finch [Sample Client]',
      category: 'Content Creation',
      year: '2025',
      cover: { type: 'image', src: '', alt: 'Cedar & Finch campaign system cover — sample placeholder' },
      summary: 'A repeatable content system for seasonal product launches across three channels.',
      servicesProvided: ['Content Strategy', 'Photography Direction', 'Graphic Templates', 'Copywriting'],
      description:
        '[Add project description — describe the content system: templates built, channels covered, and how the client maintains it after handoff.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
    {
      id: 'modern-foundry-site-relaunch',
      title: 'Modern Foundry — Site Relaunch',
      client: 'Modern Foundry [Sample Client]',
      category: 'Web Experiences',
      year: '2025',
      cover: { type: 'image', src: '', alt: 'Modern Foundry website relaunch cover — sample placeholder' },
      summary: 'A faster, more direct website built around the studio’s existing project photography.',
      servicesProvided: ['UX & Information Architecture', 'Design', 'Frontend Build', 'Performance Tuning'],
      description:
        '[Add project description — cover the previous site’s issues, the redesign approach, and the stack used to rebuild it.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
    {
      id: 'bright-path-booking-experience',
      title: 'Bright Path Clinic — Booking Experience',
      client: 'Bright Path Clinic [Sample Client]',
      category: 'Web Experiences',
      year: '2024',
      cover: { type: 'image', src: '', alt: 'Bright Path Clinic booking experience cover — sample placeholder' },
      summary: 'An appointment-first website designed to move new patients to a booked visit.',
      servicesProvided: ['Web Design', 'Booking Integration', 'Accessibility Pass'],
      description:
        '[Add project description — explain the booking flow, the scheduling tool it connects to, and any accessibility requirements met.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
    {
      id: 'northstar-lead-intake-automation',
      title: 'Northstar Realty — Lead Intake & Follow-Up',
      client: 'Northstar Realty [Sample Client]',
      category: 'Automation',
      year: '2025',
      cover: { type: 'image', src: '', alt: 'Northstar Realty automation workflow cover — sample placeholder' },
      summary: 'An automated system that routes new inquiries to the right agent and follows up automatically.',
      servicesProvided: ['Workflow Design', 'CRM Integration', 'Notification Automation'],
      description:
        '[Add project description — outline the trigger, the tools connected (form, CRM, calendar, SMS/email), and the handoff to the sales team.]',
      outcome: '[Add verified client outcome]',
      isSample: true,
    },
  ],

  videos: [
    {
      id: 'video-pcc-welcome',
      title: 'Welcome Video',
      client: 'Polynesian Cultural Center — Dining Services',
      category: 'Video Production',
      description: 'A welcome and orientation video produced during an internship with the Polynesian Cultural Center’s Dining Services team.',
      source: { type: 'youtube', src: 'DvTab39bnpM' },
      thumbnail: 'https://img.youtube.com/vi/DvTab39bnpM/maxresdefault.jpg',
      featured: true,
    },
    {
      id: 'video-harborline-film',
      title: 'Harborline Brand Film — Full Cut',
      client: 'Harborline Goods [Sample Client]',
      category: 'Video Production',
      description: '[Add description of the full brand film.]',
      source: { type: 'local', src: '' },
      thumbnail: '',
    },
    {
      id: 'video-fielding-episode',
      title: 'Fielding Coffee — Episode 01',
      client: 'Fielding Coffee Roasters [Sample Client]',
      category: 'Video Production',
      description: '[Add description of this episode in the process series.]',
      source: { type: 'youtube', src: 'REPLACE_YOUTUBE_ID' },
      thumbnail: '',
    },
    {
      id: 'video-cedar-finch-bts',
      title: 'Cedar & Finch — Behind the Scenes',
      client: 'Cedar & Finch [Sample Client]',
      category: 'Content Creation',
      description: '[Add description of the behind-the-scenes shoot day.]',
      source: { type: 'vimeo', src: 'REPLACE_VIMEO_ID' },
      thumbnail: '',
    },
    {
      id: 'video-automation-walkthrough',
      title: 'Automation Walkthrough — Lead Routing',
      client: 'Northstar Realty [Sample Client]',
      category: 'Automation',
      description: '[Add a short screen-recorded walkthrough of the automation in action.]',
      source: { type: 'local', src: '' },
      thumbnail: '',
    },
  ],

  contentGallery: [
    {
      id: 'gallery-social-01',
      title: 'Product Drop — Story Set',
      category: 'Social',
      orientation: 'portrait',
      media: { type: 'image', src: '', alt: 'Sample social story graphic — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-campaign-01',
      title: 'Spring Launch — Key Visual',
      category: 'Campaigns',
      orientation: 'landscape',
      media: { type: 'image', src: '', alt: 'Sample campaign key visual — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-design-01',
      title: 'Brand Mark Exploration',
      category: 'Design',
      orientation: 'square',
      media: { type: 'image', src: '', alt: 'Sample brand mark exploration — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-bts-01',
      title: 'On Set — Harborline Shoot',
      category: 'Behind the Scenes',
      orientation: 'landscape',
      media: { type: 'image', src: '', alt: 'Sample behind the scenes photo — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-social-02',
      title: 'Reel Cover Set',
      category: 'Social',
      orientation: 'square',
      media: { type: 'image', src: '', alt: 'Sample reel cover graphic — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-campaign-02',
      title: 'Seasonal Bundle — Poster',
      category: 'Campaigns',
      orientation: 'portrait',
      media: { type: 'image', src: '', alt: 'Sample campaign poster — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-design-02',
      title: 'Packaging Concept',
      category: 'Design',
      orientation: 'landscape',
      media: { type: 'image', src: '', alt: 'Sample packaging concept — placeholder' },
      description: '[Add description]',
    },
    {
      id: 'gallery-bts-02',
      title: 'Edit Bay — Color Pass',
      category: 'Behind the Scenes',
      orientation: 'square',
      media: { type: 'image', src: '', alt: 'Sample edit bay photo — placeholder' },
      description: '[Add description]',
    },
  ],

  automations: [
    {
      id: 'automation-lead-capture',
      name: 'Lead Capture & Follow-Up',
      clientProblem: 'New inquiries sat unanswered for hours, so warm leads went cold before anyone replied.',
      trigger: 'A visitor submits a website or landing page form.',
      workflowSteps: [
        'Form submission is captured and validated',
        'Lead is created or matched in the CRM',
        'An immediate acknowledgment email is sent',
        'The right team member is notified in Slack or email',
        'A follow-up reminder is scheduled if there is no reply in 24 hours',
      ],
      tools: ['Website Form', 'CRM', 'Email', 'Slack'],
      businessBenefit: 'Every inquiry gets an immediate response, and no lead is missed or forgotten.',
      verifiedOutcome: undefined, // Add once a client result has been verified
    },
    {
      id: 'automation-client-onboarding',
      name: 'Client Onboarding',
      clientProblem: 'Kicking off a new project meant repeating the same emails, forms, and setup steps by hand.',
      trigger: 'A proposal is signed or a deposit is paid.',
      workflowSteps: [
        'Signed proposal triggers a new project record',
        'A welcome packet and intake form are sent automatically',
        'Shared folders and project boards are created',
        'A kickoff call is offered through the booking calendar',
      ],
      tools: ['E-Signature Tool', 'Project Management App', 'Calendar', 'Email'],
      businessBenefit: 'New clients get a consistent, professional start without manual setup work.',
      verifiedOutcome: undefined,
    },
    {
      id: 'automation-content-approval',
      name: 'Content Approval Workflow',
      clientProblem: 'Draft content moved through feedback rounds over scattered emails and messages.',
      trigger: 'A new draft is uploaded to the shared review folder.',
      workflowSteps: [
        'Draft upload notifies the reviewer automatically',
        'Feedback is collected in one linked location',
        'Approval status updates the project tracker',
        'The next production step is triggered once approved',
      ],
      tools: ['Cloud Storage', 'Project Management App', 'Email'],
      businessBenefit: 'Feedback stays in one place and nothing moves forward without sign-off.',
      verifiedOutcome: undefined,
    },
    {
      id: 'automation-appointment-reminders',
      name: 'Appointment Reminders',
      clientProblem: 'No-shows were common when reminders were sent manually or not at all.',
      trigger: 'An appointment is booked on the calendar.',
      workflowSteps: [
        'Booking confirms and adds the event to the calendar',
        'A reminder is sent 24 hours before the appointment',
        'A second reminder is sent 1 hour before',
        'A reschedule link is included in every reminder',
      ],
      tools: ['Calendly', 'SMS', 'Email'],
      businessBenefit: 'Fewer missed appointments and less manual reminder work.',
      verifiedOutcome: undefined,
    },
    {
      id: 'automation-inquiry-routing',
      name: 'Customer Inquiry Routing',
      clientProblem: 'Support and sales questions arrived in one inbox and had to be sorted by hand.',
      trigger: 'A new message arrives through email, form, or chat.',
      workflowSteps: [
        'Message is scanned for intent and category',
        'It is routed to the correct inbox or team member',
        'A tag and priority level are applied automatically',
        'An acknowledgment reply is sent to the customer',
      ],
      tools: ['Shared Inbox', 'Automation Platform', 'Chat Widget'],
      businessBenefit: 'Questions reach the right person faster, with less manual triage.',
      verifiedOutcome: undefined,
    },
    {
      id: 'automation-reporting-dashboard',
      name: 'Reporting Dashboard',
      clientProblem: 'Weekly reporting meant pulling numbers from several tools by hand.',
      trigger: 'A scheduled weekly refresh, or a manual request.',
      workflowSteps: [
        'Data is pulled from connected tools automatically',
        'Numbers are normalized into one shared sheet or dashboard',
        'A summary is generated and shared with stakeholders',
      ],
      tools: ['Spreadsheet / BI Tool', 'Automation Platform', 'CRM'],
      businessBenefit: 'Reporting is consistent, current, and no longer a manual chore.',
      verifiedOutcome: undefined,
    },
    {
      id: 'automation-email-crm-sync',
      name: 'Email & CRM Synchronization',
      clientProblem: 'Contact details and conversation history lived in two places that never matched.',
      trigger: 'A new email thread or contact update.',
      workflowSteps: [
        'New contacts and replies are detected automatically',
        'Records are matched or created in the CRM',
        'Conversation history is logged against the contact',
        'Duplicate records are flagged for review',
      ],
      tools: ['Email', 'CRM', 'Automation Platform'],
      businessBenefit: 'One accurate source of truth for every contact and conversation.',
      verifiedOutcome: undefined,
    },
  ],

  // Titles/descriptions/idealFor live in src/i18n/translations/*.ts, keyed by `id`.
  services: [
    {
      id: 'video-production',
      deliverables: ['Filming', 'Editing & color', 'Short-form cutdowns'],
    },
    {
      id: 'content-creation',
      deliverables: ['Social campaigns', 'Photography direction', 'Graphic templates'],
    },
    {
      id: 'website-development',
      deliverables: ['UX & design', 'Frontend development', 'Performance tuning'],
    },
    {
      id: 'workflow-automation',
      deliverables: ['Lead handling', 'Client onboarding', 'Reporting'],
    },
  ],

  // Titles/descriptions live in src/i18n/translations/*.ts, keyed by `id`.
  process: [
    { id: 'discover', number: '01' },
    { id: 'plan', number: '02' },
    { id: 'create', number: '03' },
    { id: 'launch', number: '04' },
  ],

  about: {
    portraitSrc: '/images/portrait.jpg',
    // introQuote/philosophyQuote live in src/i18n/translations/*.ts.
    background:
      'My path into this work started with video — learning to tell a story through footage and sound before realizing the same instinct carried straight into code and systems. Over time that turned into building websites, then automations, because clients kept asking for more than just polished media: they wanted the pieces underneath it to actually work together. J Sync is what came out of following that curiosity wherever it led.',
    tools: [
      // Real brand logos — files live in public/icons/.
      { name: 'React', logo: '/icons/react.svg' },
      { name: 'HTML5', logo: '/icons/html5.svg' },
      { name: 'CSS3', logo: '/icons/css3.svg' },
      { name: 'GitHub', logo: '/icons/github.svg' },
      { name: 'Netlify', logo: '/icons/netlify.svg' },
      { name: 'Firebase', logo: '/icons/firebase.svg' },
      { name: 'APIs & Automation', logo: '/icons/api.svg' },
      { name: 'n8n', logo: '/icons/n8n.svg' },
      { name: 'GoHighLevel', logo: '/icons/gohighlevel.svg' },
      // No brand logo on file yet — shown as a generated letter badge instead.
      { name: 'Premiere Pro', monogram: { text: 'Pr', bg: '#00005B', fg: '#b3b3ff' } },
      { name: 'JavaScript', monogram: { text: 'JS', bg: '#F7DF1E', fg: '#000000' } },
      { name: 'AWS', monogram: { text: 'aws', bg: '#232F3E', fg: '#FF9900' } },
      { name: 'Zapier', monogram: { text: 'Z', bg: '#FF4A00', fg: '#FFFFFF' } },
      { name: 'Slack', monogram: { text: '#', bg: '#4A154B', fg: '#FFFFFF' } },
      { name: 'Zendesk', monogram: { text: 'Z', bg: '#03363D', fg: '#FFFFFF' } },
      { name: 'Cursor', monogram: { text: 'Cur', bg: '#000000', fg: '#FFFFFF' } },
      { name: 'Codex', monogram: { text: 'Cx', bg: '#000000', fg: '#10A37F' } },
      { name: 'Claude Code', monogram: { text: 'C', bg: '#CC785C', fg: '#FFFFFF' } },
      // No logo available at all — a generic stand-in icon.
      { name: 'DaVinci Resolve', iconVariant: 'scissors' },
    ],
  },

  // Testimonials are only ever real, verified quotes. Leave this array
  // empty until you have permission to publish one — the section hides
  // itself automatically when there is nothing here.
  testimonials: [],

  seo: {
    title: 'J Sync — Video, Content, Web & Automation Systems',
    description:
      'J Sync helps businesses improve their digital presence through video production, content creation, websites, and workflow automation.',
  },
}
