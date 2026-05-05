# Migration Plan: Next.js + Tailwind CSS

## Context

The current site is a static HTML/CSS/jQuery portfolio built on the Stellar HTML5 UP template. The core problems: the template's 4000-line CSS is hard to maintain; the project card image system (`object-fit: cover` with 52% padding-top) crops SVG architecture diagrams; and all card + project metadata is hardcoded across multiple HTML files, meaning adding a new project requires editing 3+ files. This migration replaces the template with a proper Next.js + Tailwind codebase while transferring ALL content verbatim, preserving the pixel-faithful purple/pink gradient aesthetic, and keeping the live site unaffected throughout.

---

## Migration Safety Strategy

**Separate repo approach:**

```
zahran001/zahran001.github.io   ← live site, NEVER touched
zahran001/portfolio-next        ← all new work happens here
```

Cutover (single atomic step when ready):
1. GitHub Settings → rename `zahran001.github.io` → `zahran001-legacy`
2. GitHub Settings → rename `portfolio-next` → `zahran001.github.io`
3. Configure Pages on new repo: source = `gh-pages` branch
4. Rollback = rename both repos back (old site is fully intact)

---

## Target File Structure

```
portfolio-next/
├── .github/workflows/deploy.yml
├── public/
│   ├── images/          ← all 50 images copied verbatim from /images/
│   ├── rocket-lunch.png ← favicon
│   └── lion-head.png
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← root shell: Nav, Footer, PreloadRemover, fonts
│   │   ├── globals.css          ← gradient bg, is-preload, scroll-behavior, [id] scroll-margin
│   │   ├── page.tsx             ← index.html: hero + about spotlight + featured project cards
│   │   ├── about/page.tsx       ← aboutme.html
│   │   ├── projects/page.tsx    ← projects.html (maps over projects data, earlier work toggle)
│   │   ├── more/page.tsx        ← more.html (milestones timeline)
│   │   └── projects/
│   │       ├── bitfilter/page.tsx
│   │       ├── envdrift/page.tsx
│   │       ├── ecommerce/page.tsx
│   │       ├── design-mcp/page.tsx
│   │       ├── leetcode/page.tsx
│   │       ├── systemdesign/page.tsx
│   │       ├── bookatour/page.tsx
│   │       ├── project-showcase/page.tsx
│   │       ├── notemart/page.tsx
│   │       ├── attendance/page.tsx
│   │       └── line-follower-robot/page.tsx
│   ├── components/
│   │   ├── Nav.tsx              ← scroll-aware, isFixed state via useNavShrink
│   │   ├── Footer.tsx           ← location, email, LinkedIn/GitHub icons
│   │   ├── ProjectCard.tsx      ← renders a Project type: image fix + tag pills, no metric line
│   │   ├── TagPill.tsx          ← single tag badge, color driven by TagLabel
│   │   ├── Spotlight.tsx        ← .spotlight flex: content left, image right
│   │   ├── Toggle.tsx           ← reusable show/hide (coursework, earlier work, reflection)
│   │   ├── YouTubeEmbed.tsx     ← lazy iframe, aspect-video container
│   │   └── PreloadRemover.tsx   ← removes is-preload from body on mount
│   ├── data/
│   │   ├── projects.ts          ← ALL project card metadata (single source of truth)
│   │   └── tags.ts              ← tag taxonomy: labels + color mapping
│   └── hooks/
│       ├── useNavShrink.ts      ← IntersectionObserver → isFixed state
│       └── useSectionActivate.ts ← IntersectionObserver → active nav link (index only)
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

Individual page files (not dynamic `[slug]`) because each project page has unique structure — some have YouTube, some have SVG diagrams, some have collapsible reflections. Card metadata is centralized in `src/data/projects.ts`; prose content stays inline in each detail page.

---

## Critical Config Files

### next.config.ts
```ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,           // /about/ → out/about/index.html (required for GitHub Pages)
  images: { unoptimized: true }, // no server for on-demand optimization
}
```

### tailwind.config.ts — Custom values needed
```ts
colors: {
  'accent-purple':   '#935d8c',  // metric lines, hover accents
  'gradient-start':  '#e37682',  // body gradient
  'gradient-end':    '#5f4d93',
  'content-heading': '#444444',
  'content-text':    '#777777',
  'content-dim':     '#999999',
  'content-border':  '#dddddd',
}
fontFamily: { sans: ['"Source Sans Pro"', 'Helvetica', 'sans-serif'] }
screens: {  // match Stellar's 6-breakpoint system exactly
  'small':  { max: '736px' },
  'medium': { min: '737px', max: '980px' },
  'large':  { min: '981px', max: '1280px' },
}
```

### globals.css — Key rules
```css
body {
  background-image: url('/images/overlay.png'),
    linear-gradient(45deg, #e37682 15%, #5f4d93 85%);
}
body.is-preload * { transition: none !important; animation: none !important; }
html { scroll-behavior: smooth; }
[id] { scroll-margin-top: 4em; }
```

---

## Data Layer

### src/data/tags.ts
Single source of truth for the tag taxonomy. Fixed labels ensure consistency across all cards — a recruiter sees the same color for the same domain every time.

```ts
export const TAG_COLORS = {
  'Systems':      'blue',
  'Cloud':        'sky',
  'AI / Agents':  'purple',
  'Backend':      'green',
  'Frontend':     'pink',
  'DevOps':       'orange',
  'Performance':  'yellow',
  'Full Stack':   'teal',
  'Research':     'gray',
} as const

export type TagLabel = keyof typeof TAG_COLORS
```

Colors map to Tailwind utility classes in `TagPill.tsx`. Adding a new tag category = one line in this file.

### src/data/projects.ts
All project card metadata in one typed array. **Adding a new project = one new object here + one new `src/app/projects/myproject/page.tsx`.** No other files need touching.

```ts
export type ProjectCategory = 'featured' | 'earlier'
export type ImageVariant = 'diagram' | 'photo' | 'icon'

export interface Project {
  slug: string
  title: string
  description: string
  techStack: string           // "C++ · AVX2 · Google Benchmark" — displayed verbatim
  tags: TagLabel[]            // domain tags rendered as pills on the card
  category: ProjectCategory   // 'featured' shown on index + projects; 'earlier' in toggle
  image: {
    variant: ImageVariant
    src?: string              // for 'diagram' and 'photo' variants
    icon?: string             // FA icon name for 'icon' variant
    accent?: string           // hex color for icon background gradient
  }
}

export const projects: Project[] = [
  {
    slug: 'bitfilter',
    title: 'BitFilter',
    description: 'SIMD-accelerated audience segmentation for ad tech',
    techStack: 'C++ · AVX2 · Google Benchmark',
    tags: ['Systems', 'Performance'],
    category: 'featured',
    image: { variant: 'diagram', src: '/images/roofline.svg' },
  },
  {
    slug: 'envdrift',
    title: 'EnvDrift Analyzer',
    description: 'Edge-native AI agent that detects and explains behavioral differences across application environments',
    techStack: 'TypeScript · Llama 3.3 · Cloudflare Workers',
    tags: ['AI / Agents', 'Backend'],
    category: 'featured',
    image: { variant: 'diagram', src: '/images/cf_ai_diagram.png' },
  },
  // ... remaining 13 projects
]
```

`page.tsx` (index) filters `projects.filter(p => p.category === 'featured')`.
`projects/page.tsx` renders all featured projects, then earlier work inside the toggle.

---

## The Core Image Fix (ProjectCard.tsx)

`ProjectCard` accepts a `Project` object and switches on `image.variant`:

**`diagram`** — `roofline.svg`, `Ecommerce-Project-2.svg`, `cf_ai_diagram.png`, architecture screenshots:
```tsx
<div className="relative w-full aspect-[19/10] bg-gray-900">
  <Image src={image.src} alt={alt} fill className="object-contain" unoptimized />
</div>
```
Dark background + `object-contain` = full diagram visible, no cropping.

**`photo`** — UI screenshots, tour/note/git app screens:
```tsx
<div className="relative w-full aspect-[19/10]">
  <Image src={image.src} alt={alt} fill className="object-cover object-top" />
</div>
```

**`icon`** — fallback for projects with no image (Design-MCP, LeetCode, System Design):
```tsx
<div className="relative w-full aspect-[19/10]" style={{ background: iconGradient }}>
  <FontAwesomeIcon icon={resolvedIcon} className="absolute-center" />
</div>
```

Profile photo rotation fix (in `page.tsx` hero): `className="rounded-full object-cover rotate-90"`.

### Card anatomy (no metric line)
```
┌─────────────────────────────────┐
│  [image / icon]                 │
│  C++ · AVX2 · GOOGLE BENCHMARK  │ ← techStack
│  BitFilter                      │ ← title
│  SIMD-accelerated audience...   │ ← description
│  [Systems]  [Performance]       │ ← tag pills
└─────────────────────────────────┘
```

The metric line is removed. The detail page bullets carry the concrete numbers (throughput, latency improvements, etc.) — the card's job is to hook and signal domain, which techStack + tags already do.

---

## jQuery → React Replacements

| jQuery behavior | React replacement |
|---|---|
| `scrollex` nav shrink | `useNavShrink`: IntersectionObserver on `#main`, returns `isFixed` |
| `scrolly` smooth scroll | `scroll-behavior: smooth` in CSS + `scroll-margin-top` on sections |
| Section active link | `useSectionActivate`: IntersectionObserver on `#aboutme`, `#projects` |
| `body.is-preload` removal | `PreloadRemover`: `useEffect` removes class 100ms after mount |
| Show/hide toggles (×3) | `Toggle` client component with `useState` |
| Mobile panel nav | `Nav.tsx` hamburger with `useState` + CSS transition |

---

## Font Awesome

Use npm package (not CDN) to avoid flash of unstyled icons:
```bash
npm install @fortawesome/fontawesome-svg-core \
            @fortawesome/free-solid-svg-icons \
            @fortawesome/free-brands-svg-icons \
            @fortawesome/react-fontawesome
```
Icons used: `faLinkedin`, `faGithub`, `faCode`, `faMicrochip`, `faRobot`, `faSitemap`, `faCodeBranch`, `faCube`, `faWalking`, `faSearch`, `faStickyNote`, `faTable`, `faRoad`, `faChartBar`.

---

## GitHub Actions Deployment

```yaml
# .github/workflows/deploy.yml
on: push to main
steps:
  - checkout, setup-node@v4 (node 20), npm ci
  - npm run build          # writes to ./out/
  - touch out/.nojekyll    # CRITICAL: prevents Jekyll from hiding _next/ directory
  - peaceiris/actions-gh-pages@v4 → publish_dir: ./out, branch: gh-pages, force_orphan: true
```

GitHub Pages config: repo Settings → Pages → source = `gh-pages` branch, `/ (root)`.

---

## Content Transfer Rules

- **All prose text verbatim** — no paraphrasing, no rewording, no shortening. This applies to descriptions, feature bullets, reflections, and all body copy in detail pages.
- **Card metadata** (title, description, techStack, tags, image) goes into `src/data/projects.ts`. These short strings are safe to move to a data file — they have no prose risk.
- **Detail page prose** stays inline in each `page.tsx` — experience bullets, reflections, project write-ups. No data modeling layer for long-form content.
- Three toggle patterns to preserve:
  - `about/page.tsx`: show/hide additional coursework (10 courses hidden by default)
  - `projects/page.tsx`: show/hide "Earlier Work" section (5 older projects, filtered from data)
  - `projects/ecommerce/page.tsx`: show/hide extended AI reflection

---

## Phased Execution Order

### Phase 1 — Foundation (2–3 hrs)
- `npx create-next-app@latest portfolio-next --typescript --tailwind --app --src-dir`
- Write `next.config.ts`, `tailwind.config.ts`, `globals.css`
- Copy all 50 images to `public/images/`
- Write `src/data/tags.ts`: full tag taxonomy with color mapping
- Write `src/data/projects.ts`: all 15 projects as typed objects (card metadata only)
- Write `layout.tsx`: Google Fonts (Source Sans Pro), Font Awesome, `Nav`, `Footer`, `PreloadRemover`, `<body className="is-preload">`
- Write static `Nav.tsx`, `Footer.tsx`, `TagPill.tsx`, `ProjectCard.tsx`
- Verify: `npm run build && npx serve out` shows gradient background and nav

### Phase 2 — Index Page (3–4 hrs)
- Port hero header and `Spotlight` (about section)
- Render featured project cards by filtering `projects` data (`category === 'featured'`)
- Wire `useNavShrink` and `useSectionActivate`
- Verify SVG cards (`roofline.svg`, `Ecommerce-Project-2.svg`) display fully without cropping
- Verify tag pills render with correct colors on each card

### Phase 3 — Core Pages (3–4 hrs)
- `about/page.tsx`: 4 experience entries, education, skills, coursework toggle
- `projects/page.tsx`: main grid + earlier work toggle
- `more/page.tsx`: year-grouped milestones, long reflections, milestone photos

### Phase 4 — Project Detail Pages (4–5 hrs)
Build in this order: ecommerce → bitfilter → envdrift → design-mcp → leetcode → systemdesign → bookatour → notemart → project-showcase → attendance → line-follower-robot

### Phase 5 — Interactivity Polish (2 hrs)
- Swap CDN Font Awesome for npm package
- Test all 3 `Toggle` instances
- Test mobile nav hamburger at 736px
- Test preload animation suppression

### Phase 6 — Deploy Pipeline (1 hr)
- Write `.github/workflows/deploy.yml`
- Push to main, verify `gh-pages` branch populates
- Verify site loads from GitHub Pages on `portfolio-next` repo

### Phase 7 — Verification + Cutover (1–2 hrs)

Pre-cutover checklist:
- [ ] All 15 routes render with correct verbatim content
- [ ] `roofline.svg` and `Ecommerce-Project-2.svg` display fully (no cropping)
- [ ] Profile photo rotation correct
- [ ] All 4 YouTube iframes load
- [ ] All 9 GitHub repo links, 3 Google Drive links, 2 Notion links work
- [ ] Nav shrink on scroll works on all pages
- [ ] All 3 toggle components function correctly
- [ ] Mobile layout correct at 736px
- [ ] `next build` has zero TypeScript errors
- [ ] `out/_next/` directory exists (proves `.nojekyll` is in place)

Cutover: rename `zahran001.github.io` → `zahran001-legacy`, rename `portfolio-next` → `zahran001.github.io`, set Pages source to `gh-pages`.

---

## Pages → Routes Mapping

| Current file | Next.js route |
|---|---|
| index.html | / |
| aboutme.html | /about/ |
| projects.html | /projects/ |
| more.html | /more/ |
| bitfilter.html | /projects/bitfilter/ |
| environmentdriftanalyzer.html | /projects/envdrift/ |
| ecommerce.html | /projects/ecommerce/ |
| Design-MCP.html | /projects/design-mcp/ |
| leetcode.html | /projects/leetcode/ |
| systemdesign.html | /projects/systemdesign/ |
| bookatour.html | /projects/bookatour/ |
| project_showcase.html | /projects/project-showcase/ |
| notemart.html | /projects/notemart/ |
| attendance.html | /projects/attendance/ |
| lineFollowerRobot.html | /projects/line-follower-robot/ |
