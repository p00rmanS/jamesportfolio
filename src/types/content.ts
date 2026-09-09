// Central type definitions for all editable site content.
// See src/data/content.ts to edit the actual copy/data.

export type ProjectCategory =
  | 'Video Production'
  | 'Content Creation'
  | 'Web Experiences'
  | 'Automation'

export interface NavLink {
  label: string
  href: string
}

/**
 * Hero copy (eyebrow, headline, subcopy, CTA labels) lives in the i18n
 * translation files (src/i18n/translations/*.ts) instead of here, so it can
 * vary per language. This only holds structural, locale-independent bits.
 */
export interface HeroContent {
  primaryCtaHref: string
  secondaryCtaHref: string
  /** Poster image shown before the showreel plays or if video is unavailable. */
  posterSrc: string
  /** Local video file for the muted autoplay preview. Leave empty to show the poster only. */
  videoSrc?: string
}

export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  alt: string
}

export interface Project {
  id: string
  title: string
  /** Sample/placeholder client name — replace with real client before launch. */
  client: string
  category: ProjectCategory
  year: string
  cover: ProjectMedia
  summary: string
  servicesProvided: string[]
  description: string
  outcome: string
  isSample: boolean
}

export interface VideoSource {
  type: 'local' | 'youtube' | 'vimeo'
  /** Local: path to mp4/webm. YouTube/Vimeo: the video ID. */
  src: string
}

export interface VideoItem {
  id: string
  title: string
  client: string
  category: string
  description: string
  source: VideoSource
  thumbnail: string
  captionsSrc?: string
  featured?: boolean
}

export type ContentCategory = 'Social' | 'Campaigns' | 'Design' | 'Behind the Scenes'

export interface ContentPiece {
  id: string
  title: string
  category: ContentCategory
  orientation: 'portrait' | 'landscape' | 'square'
  media: ProjectMedia
  description?: string
}

export interface AutomationItem {
  id: string
  name: string
  clientProblem: string
  trigger: string
  workflowSteps: string[]
  tools: string[]
  businessBenefit: string
  /** Filled in only once a client has verified a real result. */
  verifiedOutcome?: string
  demoVideoSrc?: string
}

export type ServiceId =
  | 'video-production'
  | 'motion-graphics'
  | 'content-creation'
  | 'website-development'
  | 'workflow-automation'

/** Title/description/idealFor live in src/i18n/translations/*.ts, keyed by `id`. */
export interface Service {
  id: ServiceId
  deliverables: string[]
}

export type ProcessStepId = 'discover' | 'plan' | 'create' | 'launch'

/** Title/description live in src/i18n/translations/*.ts, keyed by `id`. */
export interface ProcessStep {
  id: ProcessStepId
  number: string
}

/**
 * A tool/technology badge in the About section. Exactly one of `logo`,
 * `monogram`, or `iconVariant` should be set — falling back to a plain text
 * chip when none are (e.g. a tool with no logo asset on hand yet).
 */
export interface ToolItem {
  name: string
  /** Path to a real brand logo file under /public/icons. */
  logo?: string
  /** Generated letter badge standing in for a brand logo we don't have on file. */
  monogram?: { text: string; bg: string; fg: string }
  /** A small set of generic interface icons standing in for a tool with no logo asset. */
  iconVariant?: 'scissors'
}

/** introQuote lives in src/i18n/translations/*.ts (about.introQuote). */
export interface AboutContent {
  portraitSrc: string
  background: string
  tools: ToolItem[]
}

export interface Testimonial {
  quote: string
  name: string
  company: string
}

export type SocialPlatform = 'Instagram' | 'Facebook' | 'GitHub' | 'LinkedIn'

export interface SocialLink {
  platform: SocialPlatform
  url: string
}

export interface SeoContent {
  title: string
  description: string
}

export interface BrandContent {
  name: string
  email: string
}

export interface SiteContent {
  brand: BrandContent
  nav: NavLink[]
  hero: HeroContent
  projects: Project[]
  videos: VideoItem[]
  contentGallery: ContentPiece[]
  automations: AutomationItem[]
  services: Service[]
  process: ProcessStep[]
  about: AboutContent
  testimonials: Testimonial[]
  seo: SeoContent
}
