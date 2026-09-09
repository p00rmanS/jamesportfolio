# J Sync — Portfolio & Services Website

A production-ready marketing site for J Sync (video production, motion
graphics, content creation, websites, and workflow automation), built with
React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

Almost all copy, sample projects, videos, and settings live in a few places:

- [`src/data/content.ts`](src/data/content.ts) — projects, videos, content gallery, automations, and other structural/sample data
- [`src/data/settings.ts`](src/data/settings.ts) — Calendly URL, social links, résumé path, analytics token
- [`src/i18n/translations/`](src/i18n/translations/) — all marketing copy (nav, hero, services, process, about, footer, booking, FAQ, command palette), in 10 languages — see section 7

You can update most of the site without touching any component code. For a
step-by-step list of what real content still needs to be gathered, see
[`CONTENT-CHECKLIST.md`](CONTENT-CHECKLIST.md).

---

## 1. Install and run

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 2. Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

`npm run build` runs a full TypeScript check (`tsc -b`) before bundling with
Vite, so type errors fail the build. Output goes to `dist/`.

Other scripts:

```bash
npm run lint    # oxlint
```

## 3. Change the J Sync branding

Edit `src/data/content.ts` → `brand`:

```ts
brand: {
  name: 'J Sync',
  email: 'hello@jsync.co',
}
```

The logo mark is an original inline SVG (a "J" with an orbiting accent dot) in
[`src/components/ui/Logo.tsx`](src/components/ui/Logo.tsx), paired with the
`content.brand.name` wordmark. It's used in the header (small, left-aligned),
centered at the top of the footer (`size="lg"`), and in the dashboard
sidebar's profile block. To swap in your own mark, replace the `<svg>`
contents in `Logo.tsx` — everywhere it's used will update automatically.

The favicon is [`public/favicon.svg`](public/favicon.svg) — replace it with your
own mark (keep it square, simple, and legible at 16–32px).

## 4. Add projects (Selected Work)

Edit the `projects` array in `src/data/content.ts`. Each project:

```ts
{
  id: 'unique-slug',
  title: 'Project Title',
  client: 'Real Client Name',       // remove the "[Sample Client]" tag
  category: 'Video Production',     // 'Video Production' | 'Content Creation' | 'Web Experiences' | 'Automation'
  year: '2025',
  cover: { type: 'image', src: '/images/projects/your-cover.jpg', alt: 'Descriptive alt text' },
  summary: 'One sentence summary.',
  servicesProvided: ['...'],
  description: 'Longer paragraph for the detail modal and case study page.',
  outcome: 'A real, verified result — or leave as "[Add verified client outcome]".',
  isSample: false,                  // set false once it's a real project
}
```

Leaving `cover.src` empty (`''`) shows a clearly labeled placeholder box
instead of a broken image — useful while you're still gathering real assets.
The first six projects populate the homepage's editorial grid; additional
projects are included in the pool but the grid layout (`LAYOUT` in
[`SelectedWork.tsx`](src/components/sections/SelectedWork.tsx)) is tuned for
six.

Every project's `id` also becomes a real, shareable, indexable URL at
`/work/:id` (see [`ProjectDetail.tsx`](src/pages/ProjectDetail.tsx)) — no
extra config needed. The homepage grid and the quick-preview modal both link
to it via "View case study".

**Recommended cover image size:** 1600×1200px (4:3) or larger, JPEG/WebP, under ~300KB.

## 5. Add or replace videos (local, YouTube, or Vimeo)

Edit the `videos` array in `src/data/content.ts`. All three source types share
the same `VideoItem` shape — only `source` changes:

**Local file:**

```ts
{
  id: 'my-video',
  title: 'My Video',
  client: 'Client Name',
  category: 'Video Production',   // free-text — e.g. also used for 'Motion Graphics'
  description: '...',
  source: { type: 'local', src: '/videos/my-video.mp4' },
  thumbnail: '/images/videos/my-video-thumb.jpg',
  captionsSrc: '/videos/my-video.vtt', // optional WebVTT captions
}
```

Place the actual video file in `public/videos/` (already created) — anything in
`public/` is served as-is at the same path, e.g. `public/videos/my-video.mp4` →
`/videos/my-video.mp4`. Keep local videos reasonably small (ideally under
20–30MB, H.264 MP4 or WebM) since they're not run through a CDN/transcoder here.

**YouTube or Vimeo** — same shape, just swap `source`:

```ts
// YouTube — use just the video ID (the part after v= or youtu.be/)
source: { type: 'youtube', src: 'dQw4w9WgXcQ' }

// Vimeo — use just the numeric video ID
source: { type: 'vimeo', src: '76979871' }
```

Either way, the video card shows a thumbnail first; the actual player (native
`<video>` or a YouTube/Vimeo iframe) is only created once a visitor clicks
play, so embeds never slow down the initial page load. For YouTube, you can
skip hosting your own thumbnail and use YouTube's own auto-generated image:
`https://img.youtube.com/vi/<VIDEO_ID>/maxresdefault.jpg`.

## 6. Update the "Tools & Technologies" logos (About section)

`about.tools` in `src/data/content.ts` is an array of badges, each rendered by
[`ToolBadge.tsx`](src/components/ui/ToolBadge.tsx). Every entry is one of:

```ts
{ name: 'React', logo: '/icons/react.svg' }                              // a real logo file in public/icons/
{ name: 'Premiere Pro', monogram: { text: 'Pr', bg: '#00005B', fg: '#b3b3ff' } } // generated letter badge — no logo file yet
{ name: 'DaVinci Resolve', iconVariant: 'scissors' }                     // generic stand-in icon — no logo at all
{ name: 'Figma' }                                                        // plain text chip — simplest fallback
```

To add a real logo: drop the SVG/PNG into `public/icons/`, then set
`logo: '/icons/your-file.svg'` on that tool — the white swatch background in
`ToolBadge.tsx` keeps any logo legible in both light and dark mode. This same
component is reused in the dashboard's "Daily Drivers" ticker
([`ToolsTicker.tsx`](src/components/dashboard/ToolsTicker.tsx)), so a change
here updates both places.

## 7. Multi-language support

The site ships in 10 languages: English, Spanish, French, German, Dutch,
Japanese, Korean, Vietnamese, Chinese (Simplified/Mandarin), and Chinese
(Traditional, Hong Kong/Cantonese register). A globe-icon dropdown (in the
header, and again in the dashboard sidebar) with a flag next to each language
lets visitors switch; the choice is remembered in `localStorage`, and
first-time visitors are matched to a supported language from their browser
settings automatically, falling back to English.

**What's translated vs. what isn't:** navigation, the hero, all section
headings, Services, Process, About's quotes, the footer, the booking copy,
the FAQ, and the command palette are fully translated. The **Selected Work
project narratives** and **Automation walkthroughs** are intentionally
English-only for now — that content is still sample/placeholder data pending
your real project write-ups, so translating it now would just be translating
placeholder text twice. Once you've written the real English versions,
translating those specific fields is a smaller, more worthwhile follow-up.

**Architecture:**

- `src/i18n/types.ts` — the `Translations` interface every locale must fully implement
- `src/i18n/translations/*.ts` — one file per language (English loads eagerly; every other language is code-split and fetched only when selected, so visitors never download translations they don't use)
- `src/i18n/locales.ts` — the list of supported locales + browser-language matching
- `src/i18n/I18nContext.tsx` — the `useI18n()` hook (`{ locale, setLocale, t }`) used throughout the components
- `src/components/ui/Flags.tsx` — renders flag SVGs from the [`flag-icons`](https://github.com/lipis/flag-icons) set (`public/icons/flags/`)
- `src/components/ui/LanguageSwitcher.tsx` — the dropdown itself (reused in both the header and the dashboard sidebar); it's portaled to `<body>` and picks its own open direction based on available screen space, since the trigger sits in different corners in each place

**To edit copy in a language:** open its file in `src/i18n/translations/` and
edit the strings directly — TypeScript will error if you accidentally leave
a key out. **To add a new language:** duplicate `en.ts`, translate every
string, add it to the `LOADERS` map and `LOCALES` array in `locales.ts`, and
add its code to the `LocaleCode` union type.

## 8. Update social media URLs

Edit `SOCIAL_LINKS` in `src/data/settings.ts`:

```ts
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com/yourhandle' },
  { platform: 'Facebook', url: 'https://facebook.com/yourpage' },
  { platform: 'GitHub', url: 'https://github.com/yourorg' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/yourcompany' },
]
```

Icons are badge SVGs from the [`gauravghongde/social-icons`](https://github.com/gauravghongde/social-icons)
set (`public/icons/social/`) — each platform ships a black and a white
variant, and [`SocialIcons.tsx`](src/components/ui/SocialIcons.tsx) swaps
between them based on the current light/dark theme purely with CSS (no
re-render needed). Every link opens in a new tab with `rel="noopener
noreferrer"` and has an accessible label.

## 9. Booking flow (custom form → Calendly)

Edit `CALENDLY_URL` in `src/data/settings.ts`:

```ts
export const CALENDLY_URL = 'https://calendly.com/your-real-handle/consultation'
```

The Booking section ([`Booking.tsx`](src/components/sections/Booking.tsx))
is a short custom intake form (name, email, service needed, optional notes) —
**not** an embedded Calendly widget. On submit, it calls Calendly's
`initPopupWidget` with the form values pre-filled, opening Calendly in a
popup for the visitor to actually pick a time and authenticate. This avoids
the sizing/scrolling problems of Calendly's inline embed, and means you get
the lead's details even if they close the popup before booking.

The Calendly script itself is only loaded once the Booking section scrolls
near the viewport (`useCalendlyScript` + `useInView`), and if it hasn't
loaded yet, submitting falls back to opening `CALENDLY_URL` in a new tab.
There's also a plain "Book Now" link below the form as a manual fallback.

`CALENDLY_URL` also drives the `<noscript>` fallback link in `index.html` —
update that too, since it can't read from `settings.ts`.

## 10. Change colors and fonts

All theme colors are CSS custom properties in
[`src/index.css`](src/index.css). Dark is the base palette; `.light` on
`<html>` overrides it:

```css
:root {
  --paper: #0a0a0b;   /* background */
  --ink: #f4efe6;     /* primary text */
  --muted: #8f8c85;   /* secondary text */
  --accent: #4d6bff;  /* accent color */
  --surface: #131316; /* card/panel background */
  --line: rgb(244 239 230 / 12%); /* hairline borders */
}
:root.light { /* same keys, light values */ }
```

Fonts are declared in the same file's `@theme` block (`--font-display`,
`--font-sans`) and loaded via Google Fonts `<link>` tags in `index.html`
(Fraunces for display type, Inter for body text). To change fonts, update both
the `<link>` tag's font list and the `--font-*` variables — only load the
weights you actually use, to keep page weight down.

## 11. The dashboard view (`/dashboard`)

A second, fully separate layout at `/dashboard` — a sidebar-nav + card-grid
presentation of the same content, for visitors who'd rather skim than scroll
a long single page. It shares all the same data and translations as the main
site; nothing needs to be duplicated. See
[`src/pages/Dashboard.tsx`](src/pages/Dashboard.tsx) and
`src/components/dashboard/`. The footer's "Dashboard View" link and the
dashboard's own "View Full Site" link cross-link the two.

## 12. Command palette

Pressing <kbd>Ctrl</kbd>/<kbd>Cmd</kbd>+<kbd>K</kbd>, or clicking the search
icon in the header, opens a quick-jump palette (
[`CommandPalette.tsx`](src/components/layout/CommandPalette.tsx)): search
over every page section plus a few actions (open the dashboard, download the
CV, open GitHub). It's provided globally via
`CommandPaletteProvider` in `App.tsx`, following the same context pattern as
the project modal.

## 13. Analytics (optional, off by default)

The site ships with zero analytics or tracking by default. To turn on
[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (free,
cookie-less, no consent banner needed):

1. Create a free Cloudflare account and add your site's URL under Analytics
   & Logs → Web Analytics (this does **not** require moving your domain's
   nameservers to Cloudflare).
2. Paste the token it gives you into `CLOUDFLARE_ANALYTICS_TOKEN` in
   `src/data/settings.ts`.

`src/utils/analytics.ts` only injects the beacon script if a token is
present, so nothing is requested in local dev or before you've set one up.

## 14. Deploy to Netlify or Vercel

The repo already includes `netlify.toml` and `vercel.json` with the build
command and the SPA rewrite rule both platforms need — every path falls back
to `index.html` so direct loads of `/work/:id` or `/dashboard` don't 404.

**Netlify:** sign in at [app.netlify.com](https://app.netlify.com), "Add new
site → Import an existing project", pick this repo, and deploy — the build
settings are read from `netlify.toml` automatically.

**Vercel:** sign in at [vercel.com](https://vercel.com), import the repo,
framework preset "Vite" — the rewrite rule is read from `vercel.json`
automatically.

Either way, update the hardcoded domain in `index.html` (canonical URL, Open
Graph/Twitter URLs, JSON-LD `url`), `public/sitemap.xml`, and
`public/robots.txt` to match your real deployed URL once you know it.

## 15. Recommended image & video dimensions

| Asset | Recommended size |
| --- | --- |
| Project cover images | 1600×1200 (4:3) or 1920×1080 (16:9), under ~300KB |
| Video thumbnails | 1280×720 (16:9), under ~150KB |
| Content gallery — landscape | 1600×900 |
| Content gallery — portrait | 1080×1350 (4:5) |
| Content gallery — square | 1080×1080 |
| About portrait | 1000×1250 (4:5) |
| Hero showreel poster | 1920×1080 |
| Favicon | 64×64 SVG (scales cleanly at any size) |
| Open Graph / social share image | 1200×630 JPEG, `public/images/og-cover.jpg` |

## 16. Performance recommendations

- Compress every image (WebP or well-optimized JPEG) before adding it — this
  is the single biggest lever for real-world load time.
- Keep local videos short and compressed; prefer YouTube/Vimeo for long-form
  content so bandwidth isn't served from your own host.
- The build already code-splits every secondary route (`/dashboard`,
  `/work/:id`, the 404 page) and every non-English translation, and
  lazy-initializes the video players and Calendly widget — avoid adding new
  always-mounted heavy widgets to the homepage.
- Only load font weights you use (already trimmed to 4 weights across 2 families).
- Run `npm run build` and check the printed bundle sizes after big content
  additions; a Lighthouse pass in Chrome DevTools is the fastest way to catch
  regressions before deploying.

## 17. Accessibility considerations

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a heading
  hierarchy that starts at `<h1>` in the hero.
- A "Skip to content" link appears on keyboard focus.
- All interactive elements have visible focus states (see `:focus-visible` in
  `index.css`) and are reachable by keyboard, including the project modal,
  content lightbox, command palette, mobile menu, and content filters.
- Modals (project detail, content lightbox, command palette, info popups)
  trap focus, restore focus on close, and close on <kbd>Escape</kbd>.
- All motion respects `prefers-reduced-motion` — scroll reveals, the loader,
  and decorative animations are skipped or shortened automatically.
- Every image-standing-in-for-content has descriptive `alt` text once you add
  real media; placeholders are marked with visible text labels, not just color.

If you find an accessibility gap, the footer's "Accessibility" popup has a
contact prompt — treat it as a living checklist, not a one-time pass.

---

## Project structure

```
src/
  components/
    dashboard/  Sidebar, tools ticker, and cards for the /dashboard view
    layout/     Header, Footer, Loader, ScrollProgress, ErrorBoundary, CommandPalette, InfoModal
    sections/   One file per homepage section (Hero, SelectedWork, Services, FAQ, ...)
    ui/         Reusable primitives (Button, MediaFrame, SocialIcons, Flags, LanguageSwitcher, ...)
  context/      ProjectModalContext (project detail popup) + CommandPaletteContext
  data/         content.ts (all copy/sample data) + settings.ts (Calendly, social, analytics, etc.)
  hooks/        useTheme, useReducedMotion, useActiveSection, useInView, useFocusTrap, ...
  i18n/         Translations type, one file per language, the useI18n() provider
  pages/        Home, Dashboard, ProjectDetail, NotFound (Privacy/Accessibility are footer popups — see layout/InfoModal.tsx)
  types/        Shared TypeScript interfaces for content.ts
  utils/        Small helpers (cn, scrollToHash, analytics, contentAspect)
```

## What's still a placeholder

This build ships with clearly labeled sample data so the site is fully
functional and demonstrable out of the box — nothing here is a fake real
client, testimonial, or result. See [`CONTENT-CHECKLIST.md`](CONTENT-CHECKLIST.md)
for the full list of what's left, with step-by-step instructions for
gathering and swapping in each piece.
