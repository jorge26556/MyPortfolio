# Project log

Why this codebase is the way it is. Read before changing anything non-trivial.
Organized by topic; `git log` has the chronology.

## Assets are optimized before commit, never at request time

`output: 'export'` in `next.config.ts` forces `images.unoptimized: true`. There is
no server to resize or re-encode anything, so every file under `public/` reaches
the browser byte-for-byte as committed, and `<Image quality>` / `formats` do
nothing.

**Why it matters:** the site once shipped 6.8 MB of raw PNG and 62 MB of MP4 for
what is now 1.2 MB and 3.7 MB. Adding a screenshot without running the optimizer
silently undoes that.

After adding assets run `npm run optimize:images` and `npm run optimize:videos`.

## Demo videos never autoplay in the project grid

Project cards show `posterUrl` plus a play affordance. The `<video>` element is
only mounted by the detail dialog, in `src/components/ui/project-media.tsx`
(`variant === "modal"`).

**Why:** three recordings autoplaying at once was the single heaviest thing on the
page. Featured projects were also rendered twice — once in the featured grid and
again in the "all projects" grid — so up to six decoders ran simultaneously. The
grid now excludes featured projects when the filter is "All".

Every `mediaType: "video"` project needs a `posterUrl`, or its card renders empty.

## Screen recordings arrive with almost no keyframes

The raw captures could not be seeked at all — `ffmpeg -ss` returned frame 0 no
matter the timestamp, and browsers could not scrub them. `scripts/optimize-videos.mjs`
passes `-g 120` to force a keyframe every ~4s.

**Why it matters:** if you ever need to pull a poster frame from a *raw* recording,
seeking will not work. Play it through at high `playbackRate` and capture during
playback instead.

CRF 30 is safe for screen capture — UI text stays crisp and dark themes show no
banding, at roughly 1/20th the size.

## MyAccountingApp's video is redacted and not reproducible by the script alone

It is trimmed 11s (dropping a login screen and a Chrome "save password?" prompt)
and has its whole top-right corner blurred, because the app renders a real email
address in its header. The exact command is in the README.

**Why the blur covers the entire corner:** the browser was resized partway through
the recording, so the user pill renders at three different x positions. Two
successive attempts at a tight box still leaked `pe2607@gmail.com` and `ail.com`
past the right edge.

**Tried and rejected:** `delogo`, which interpolates from the box edges and produced
visible streaking over table rows. `boxblur` is the working filter.

**Before publishing any new recording,** watch it through for real emails, prefilled
credentials, and browser chrome. Redact from the pre-compression original so the
file is only encoded once.

## The 3D hero only loads on hardware that can afford it

`useMotionBudget` (`src/hooks/use-motion-budget.ts`) gates the WebGL hero on
`prefers-reduced-motion`, core count, device memory, and software-renderer
detection. Below that bar it renders a CSS fallback.

**`HeroCanvasFallback` must stay in its own module** (`hero-canvas-fallback.tsx`).
Importing it from `hero-canvas.tsx` puts three.js (~290 KB gzip) into the main
bundle for *every* visitor, defeating the whole gate. This was shipped broken once
and only caught by checking which chunks the browser actually requested.

Two more things in the hero that look like free wins but are not: only one material
carries `transmission` (each transmissive material makes three.js render the entire
scene to a separate target first), and the canvas uses `frameloop="never"` when
scrolled out of view.

## Scroll-linked animation is deliberately absent from lists

Project cards have no per-card `useScroll` parallax and no `layout` prop;
`ScrollReveal` fires a one-shot `whileInView` instead of driving springs from
scroll position.

**Why:** a dozen cards each meant a dozen scroll-linked springs plus a full layout
measurement pass per render, which is what made scrolling feel heavy. `ScrollReveal`
was additionally building four springs per instance and reading one of them.

Hover lifts are CSS transforms. Reintroducing framer `whileHover` on list items
re-adds JS animation for something a transform does for free.

## Anything user-visible in `src/data/` must be `BilingualText`

Plain `string` fields for dates and labels have leaked Spanish into the English
view twice — `Achievement.date` ("Cursando") and `Experience.startDate`/`endDate`
("Mayo 2025 — Actualidad").

If a field is rendered to the user, type it `BilingualText` and index it with
`[lang]`, even when both values look identical today.

## Surfaces need per-theme borders

`border-white/10 bg-white/5` renders invisibly on the light theme's white
background. This pattern was copy-pasted across several sections before being
consolidated.

Use the `.glass` and `.surface` / `.surface-hover` utilities in `globals.css`,
which define both themes. Same trap with icon accents: 400-weight tints chosen
against dark wash out on white and need a darker light-mode partner.

## Section headings come from one component

`SectionHeading` (`src/components/ui/section-heading.tsx`). Six sections had
drifted into four different heading treatments and three accent-rule colours.
Add new sections through it rather than hand-rolling a heading.
