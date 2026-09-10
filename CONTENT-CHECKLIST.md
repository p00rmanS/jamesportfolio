# Content Checklist

Everything below is a real gap on the live site — a placeholder waiting on
real material from you. Nothing here requires touching code; for every item,
gather the thing, then either hand it to Claude in chat (attach the file with
its path, same way you sent your résumé and portrait) or edit the file
yourself using the exact steps below.

Work top to bottom — items are ordered by effort-to-impact, not strict
priority. Skip around freely.

---

## 0. Deploy Giovanni's Shrimp Truck (client demo — do this first)

**Status:** Giovanni's Shrimp Truck is now a real Selected Work case study
on your site, linking to `https://giovanni-shrimp-truck.netlify.app` — but
that site isn't actually live yet. The repo
([p00rmanS/giovanni-foodtruck](https://github.com/p00rmanS/giovanni-foodtruck))
already has a `netlify.toml` ready to go.

**Steps:**
1. In the same Netlify account you used for your own portfolio, click **Add
   new site → Import an existing project → GitHub** → select
   `p00rmanS/giovanni-foodtruck`. Deploy — no settings to change.
2. Site settings → General → "Change site name" → set it to exactly
   `giovanni-shrimp-truck` so the URL matches what's already in your
   portfolio (`giovanni-shrimp-truck.netlify.app`). If that name's taken,
   send Claude whatever URL you actually get — it's a one-line fix in
   `src/data/content.ts` (`liveUrl` on the `giovanni-shrimp-truck-redesign`
   project).
3. Once it's live, click through it yourself once — the "View Live Site"
   button in your portfolio's Work section and case study page both point
   here.

---

## 1. Content Showcase — 8 images (fastest win)

**Where it shows:** homepage, "Content Showcase" section, filterable by
category.

**What's missing:** all 8 tiles are empty placeholders. Real photos or
graphics you already have — Instagram posts, campaign designs, phone photos
from a shoot — fill this fast.

| Slot | Category | Orientation | What to put there |
| --- | --- | --- | --- |
| Product Drop — Story Set | Social | portrait (4:5, 1080×1350) | A social story graphic you designed |
| Spring Launch — Key Visual | Campaigns | landscape (1600×900) | A campaign key visual |
| Brand Mark Exploration | Design | square (1080×1080) | Logo/brand design work |
| On Set — Harborline Shoot | Behind the Scenes | landscape (1600×900) | A behind-the-scenes photo from any shoot |
| Reel Cover Set | Social | square (1080×1080) | A Reel/short-form cover graphic |
| Seasonal Bundle — Poster | Campaigns | portrait (4:5, 1080×1350) | A poster/promo design |
| Packaging Concept | Design | landscape (1600×900) | Packaging or product design |
| Edit Bay — Color Pass | Behind the Scenes | square (1080×1080) | A behind-the-scenes editing photo |

**Steps:**
1. Pick any real image you have for a slot — it doesn't need to match the
   placeholder title exactly (you can rename it too, just tell Claude the new
   title).
2. Export/resize it close to the dimensions above (doesn't need to be exact —
   just keep the aspect ratio). Compress it (TinyPNG.com or similar) so it's
   under ~300KB.
3. Send the file to Claude in chat with its full path, e.g.
   `@"C:\Users\james\Downloads\my-photo.jpg"`, and say which slot it's for.
4. Claude copies it into `public/images/gallery/`, updates the `src` and
   `description` for that entry in `src/data/content.ts`, and verifies it
   renders.

You don't need all 8 before this is worth doing — send one at a time.

---

## 2. Video Portfolio — 4 remaining placeholder videos

**Where it shows:** homepage, "Video Portfolio" section.

**What's missing:** everything except your PCC Welcome Video is still sample
data (fake client names, no real footage).

| Slot | Category | What to replace it with |
| --- | --- | --- |
| Harborline Brand Film — Full Cut | Video Production | Any real video project (brand film, promo, etc.) |
| Fielding Coffee — Episode 01 | Video Production | Any real video project |
| Cedar & Finch — Behind the Scenes | Content Creation | A behind-the-scenes clip |
| Automation Walkthrough — Lead Routing | Automation | A screen recording of an automation you built, narrated |
| Motion Graphics — [Add Title] | Motion Graphics | Your first motion graphics piece, once you have one |

**Steps (same pattern we used for the Welcome Video):**
1. Export your video and compress it well (short clips, H.264 MP4, keep it
   under ~200MB for a smooth upload).
2. Go to [youtube.com](https://youtube.com) → Upload → set visibility to
   **Unlisted** (not Public, not Private — Unlisted means only people with
   the link can see it, and it won't show on your channel page or in
   search). Vimeo works too if you prefer its player.
3. Copy the video's URL (e.g. `https://youtu.be/XXXXXXXXXXX`).
4. Send Claude the link, which slot it replaces, the real client/context (or
   "no client, personal project" — never a fake name), and a one-line
   description of what it shows.
5. Claude swaps the placeholder for the real embed, pulls the thumbnail
   automatically from YouTube, and verifies it plays.

---

## 3. Selected Work — 6 case studies

**Where it shows:** homepage "Selected Work" grid, plus each project's own
page at `/work/:id`.

**What's missing:** all 6 are fictional sample projects (`[Sample Client]`
tags), with empty cover images and `[Add project description]` placeholders.

**Steps, per project you want to replace:**
1. Pick one of the 6 sample slots (Harborline Brand Film, Fielding Coffee,
   Cedar & Finch, Modern Foundry, Bright Path Clinic, or Northstar Realty) —
   or tell Claude to just add a new one instead of overwriting a slot.
2. Gather:
   - A cover image (a still frame, screenshot, or photo — 1600×1200 or
     1920×1080, under ~300KB)
   - The real client name — or "Confidential — [industry]" if you can't name
     them
   - 2–3 sentences on what you did and which tools/stack were involved
   - A real, verified outcome if you have one (skip if you don't — it's
     optional, not required)
3. Send it all to Claude the same way as above.

Your PCC Welcome Video is a natural first real entry here too — it's already
a case study, just not yet listed in Selected Work.

---

## 4. Deploy the site (you do this part — it needs your own account)

**Status:** the repo is fully configured for one-click deployment
(`netlify.toml`, SPA routing, real OG image, real meta tags) but has never
actually been deployed anywhere. Right now there is no live link to send a
client.

**Steps:**
1. Go to [app.netlify.com](https://app.netlify.com) and sign up free (use
   "Sign up with GitHub" — fastest, and it's what lets Netlify see your repo).
2. Click **Add new site → Import an existing project → GitHub** → select
   `p00rmanS/jamesportfolio`.
3. Netlify auto-detects the build settings from `netlify.toml`
   (`npm run build`, publish directory `dist`) — you shouldn't need to change
   anything. Click **Deploy**.
4. **Important:** in Site settings → General → Site details → "Change site
   name", set it to exactly `jamesportfolio` so the URL matches what's
   already baked into the site's SEO tags
   (`https://jamesportfolio.netlify.app`). If that name is taken, grab
   whatever's available and send Claude the real URL — it's a 2-minute fix
   to update the meta tags to match.
5. Every future `git push` to `main` auto-redeploys — nothing else to do
   after this first setup.

---

## 5. Optional — Hero showreel background clip

**Where it shows:** the very top of the homepage, behind "Content that
connects." Currently shows an animated waveform graphic instead of video —
this already looks intentional and good, so there's no rush here.

**Steps, once you have a great short clip:**
1. Export a **short** (10–20 second), **silent**, heavily compressed loop —
   something that reads well muted and repeating (b-roll, a highlight reel).
2. Keep the file small (a few MB) since this one does live directly in the
   site's own files, unlike the Video Portfolio embeds.
3. Send it to Claude — it goes into `public/videos/` and gets wired into
   `hero.videoSrc`.

---

## 6. Optional — Automation "Verified Outcome" lines

**Where it shows:** each of the 7 automation workflow cards, expanded.

**What's missing:** every workflow's description is real and complete —
only the "Verified Outcome" line is empty, and it renders gracefully either
way ("Add verified outcome once available").

**Steps:** only do this once you've actually built one of these automations
for a real client and have a number to back it up (e.g. "cut response time
from 6 hours to 4 minutes"). Send Claude the workflow name + the real result.

---

## 7. Optional — Analytics

**What's missing:** the site currently has zero visibility into who's
visiting it. Analytics is wired in but switched off until you connect an
account.

**Steps:**
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → sign up free
   (no credit card, and you do **not** need to point your domain's
   nameservers at Cloudflare — this is a standalone product).
2. Analytics & Logs → Web Analytics → Add a site → paste your live Netlify
   URL.
3. Copy the token it gives you.
4. Paste it into `CLOUDFLARE_ANALYTICS_TOKEN` in `src/data/settings.ts` (or
   send it to Claude to do it) and push.

---

## Already done — no action needed

Social links, résumé, founder photo, tool logos, real flags, the PCC welcome
video, the Motion Graphics service, the FAQ section, the command palette
(Ctrl/Cmd+K), per-project case study pages, and the real Open Graph share
image are all live. Giovanni's Shrimp Truck is added as a real Selected Work
project (cover image, description, "View Live Site" button) — only the
actual Netlify deploy for that repo is still pending, see item 0 above.
