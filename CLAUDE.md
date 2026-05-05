# Portfolio V2 — Claude Code Context

> **Project**: Personal Portfolio for Zahran Yahia Khan
> **Stack**: Next.js 15 (App Router) · Tailwind CSS · TypeScript (strict)
> **Hosting**: GitHub Pages via `gh-pages` branch, built by GitHub Actions
> **Output**: Static export (`output: 'export'`) — no server, no SSR, no API routes

---

## Hard Constraints

These are non-negotiable. Violating them breaks the build or the live site.

1. **No server-side features.** `output: 'export'` means no `getServerSideProps`, no Route Handlers, no middleware, no `cookies()`, no `headers()`. If it requires a running server, it cannot be used.
2. **`trailingSlash: true` is required.** GitHub Pages serves `/about/index.html`, not `/about.html`. All internal links must use `<Link href="/about/">` — with the trailing slash.
3. **`images: { unoptimized: true }` is set.** Do not use Next.js image optimization features that require a server. `next/image` still works for lazy loading and `fill` layout — just no on-demand resizing.
4. **TypeScript strict mode is on.** Every `Project` object in `src/data/projects.ts` must satisfy the `Project` interface. Every tag string must be a valid `TagLabel`. The build will fail otherwise — which is intentional.
5. **All prose content is verbatim.** Never paraphrase, summarize, or reword any text from the original HTML pages. If you're porting content, copy it character-for-character.

---

## Most Common Tasks

### Adding a new project

**Two files only:**

**1. Add one object to [`src/data/projects.ts`](src/data/projects.ts):**
```ts
{
  slug: 'myproject',                        // must match the route folder name below
  title: 'My Project',
  description: 'One sentence hook.',        // shown on the card
  techStack: 'Rust · Tokio · PostgreSQL',   // verbatim, displayed as-is
  tags: ['Backend', 'Systems'],             // must be valid TagLabel values
  category: 'featured',                     // 'featured' | 'earlier'
  image: { variant: 'diagram', src: '/images/myproject.svg' },
  // or: { variant: 'photo', src: '/images/myproject1.png' }
  // or: { variant: 'icon', icon: 'faCode', accent: '#8cc9f0' }
}
```

**2. Create [`src/app/projects/myproject/page.tsx`](src/app/projects/myproject/page.tsx):**
Copy the structure from an existing detail page (e.g., [`src/app/projects/bitfilter/page.tsx`](src/app/projects/bitfilter/page.tsx)) and replace the content. Do not change the layout structure.

**Nothing else needs updating.** The index page and projects page both read from the data array automatically.

**Add images to [`public/images/`](public/images/)** — lowercase, no spaces, descriptive names (`myproject1.png`, `myproject-arch.svg`).

---

### Adding a new tag category

**One file only — [`src/data/tags.ts`](src/data/tags.ts):**
```ts
export const TAG_COLORS = {
  // ... existing tags
  'MLOps': 'indigo',   // add here — pick a Tailwind color name
} as const
```

Then add the corresponding Tailwind class to the safe-list in [`src/components/TagPill.tsx`](src/components/TagPill.tsx) (it uses a static map, not dynamic class construction, so Tailwind can tree-shake correctly).

---

### Updating work experience

**[`src/app/about/page.tsx`](src/app/about/page.tsx)** — find the experience section, add a new entry following the existing pattern. All bullet text verbatim.

---

### Updating the skills list

**[`src/app/about/page.tsx`](src/app/about/page.tsx)** — find the Technical Skills section near the bottom of the experience content.

---

### Updating milestones / career timeline

**[`src/app/more/page.tsx`](src/app/more/page.tsx)** — add a new year block following the existing 2022–2025 pattern. Reflection prose verbatim.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                    ← global shell (Nav, Footer, fonts, body class)
│   ├── globals.css                   ← gradient bg, is-preload, scroll-behavior
│   ├── page.tsx                      ← home: hero + about spotlight + featured cards
│   ├── about/page.tsx                ← experience, education, skills, coursework
│   ├── projects/page.tsx             ← all projects grid + earlier work toggle
│   ├── more/page.tsx                 ← milestones timeline
│   └── projects/
│       ├── bitfilter/page.tsx
│       ├── envdrift/page.tsx
│       ├── ecommerce/page.tsx
│       ├── design-mcp/page.tsx
│       ├── leetcode/page.tsx
│       ├── systemdesign/page.tsx
│       ├── bookatour/page.tsx
│       ├── project-showcase/page.tsx
│       ├── notemart/page.tsx
│       ├── attendance/page.tsx
│       └── line-follower-robot/page.tsx
├── components/
│   ├── Nav.tsx                       ← scroll-aware (useNavShrink), mobile hamburger
│   ├── Footer.tsx                    ← static: location, email, social icons
│   ├── ProjectCard.tsx               ← renders Project type; switches on image.variant
│   ├── TagPill.tsx                   ← single tag badge; color from TAG_COLORS map
│   ├── Spotlight.tsx                 ← two-col flex: content left, image right
│   ├── Toggle.tsx                    ← client component, useState show/hide
│   ├── YouTubeEmbed.tsx              ← lazy iframe in aspect-video container
│   └── PreloadRemover.tsx            ← 'use client'; removes is-preload on mount
├── data/
│   ├── projects.ts                   ← ALL project card metadata ← EDIT HERE TO ADD PROJECTS
│   └── tags.ts                       ← tag taxonomy + color mapping ← EDIT HERE TO ADD TAGS
└── hooks/
    ├── useNavShrink.ts               ← IntersectionObserver → isFixed boolean
    └── useSectionActivate.ts         ← IntersectionObserver → active section id (index only)
```

---

## Data Layer

### `src/data/projects.ts` — Project type

```ts
export interface Project {
  slug: string              // route: /projects/{slug}/
  title: string
  description: string       // one sentence, shown on card
  techStack: string         // "X · Y · Z", shown verbatim on card
  tags: TagLabel[]          // domain pills on card
  category: 'featured' | 'earlier'
  image: {
    variant: 'diagram' | 'photo' | 'icon'
    src?: string            // /public path for diagram/photo
    icon?: string           // FA icon key for icon variant
    accent?: string         // hex for icon gradient background
  }
}
```

`category: 'featured'` → appears on home page + top of projects page.
`category: 'earlier'` → appears inside the "Earlier Work" toggle on projects page only.

### `src/data/tags.ts` — Available tags

| Label | Color | Meaning |
|---|---|---|
| `Systems` | blue | Low-level, C++, SIMD, memory |
| `Cloud` | sky | Azure, AWS, Kubernetes, Terraform |
| `AI / Agents` | purple | LLMs, MCP, RAG, multi-agent |
| `Backend` | green | APIs, microservices, databases |
| `Frontend` | pink | React, Angular, UI |
| `DevOps` | orange | CI/CD, Docker, pipelines |
| `Performance` | yellow | Benchmarking, optimization, throughput |
| `Full Stack` | teal | End-to-end projects |
| `Research` | gray | System design, algorithms |

---

## Component Conventions

### `ProjectCard.tsx`
Accepts a `Project` object. Switches on `image.variant`:
- `diagram` → `object-contain` + dark (`bg-gray-900`) background. Use for SVGs and architecture diagrams.
- `photo` → `object-cover object-top`. Use for UI screenshots.
- `icon` → colored gradient background + centered FA icon. Use when no image exists.

Card anatomy (top to bottom): image/icon → techStack → title → description → tag pills. No metric line.

### `Toggle.tsx`
Client component. Used in three places:
- `about/page.tsx` — show/hide 10 additional coursework items
- `projects/page.tsx` — show/hide "Earlier Work" section
- `projects/ecommerce/page.tsx` — show/hide extended reflection

Props: `showLabel`, `hideLabel`, `children`. Uses `useState` — no DOM manipulation.

### `Nav.tsx`
- Desktop: horizontal link bar. Shrinks (gains `fixed` + reduced padding) when `#main` scrolls into view, via `useNavShrink`.
- Mobile (≤736px): hamburger button + slide-in panel via `useState`.
- Active link highlighted via `useSectionActivate` (index page only — watches `#aboutme` and `#projects`).

---

## Image Rules

All images live in [`public/images/`](public/images/). Reference as `/images/filename.png`.

| Image type | `variant` | `object-fit` | Background |
|---|---|---|---|
| SVG diagrams, architecture charts | `diagram` | `contain` | `bg-gray-900` |
| UI screenshots, app screens | `photo` | `cover` | none |
| No image available | `icon` | n/a | accent gradient |

Profile photo: `rotate-90` CSS class (the source image is rotated at capture).

SVG files require `unoptimized` prop on `<Image>` — this is already set globally in `next.config.ts` so no per-image flag needed.

---

## Styling Rules

- **Tailwind for everything structural**: layout, spacing, flex/grid, responsive, hover states, colors.
- **`globals.css` for page-level rules only**: gradient body background, `is-preload` suppression, `scroll-behavior`, `scroll-margin-top`.
- **No inline `style` props** unless a value is genuinely dynamic (e.g., icon accent color from data). Static styles always go in Tailwind classes.
- **No new CSS files** other than `globals.css` and optional `ComponentName.module.css` for a component that can't be expressed in Tailwind.
- **Color palette** — always use the custom Tailwind tokens, not raw hex:
  - `accent-purple` (#935d8c) — hover accents, active states
  - `gradient-start` (#e37682) / `gradient-end` (#5f4d93) — body gradient
  - `content-heading` (#444444) — card titles
  - `content-text` (#777777) — card descriptions
  - `content-dim` (#999999) — tech stack labels
  - `content-border` (#dddddd) — card borders

---

## Deployment

Push to `main` → GitHub Actions runs `npm run build` → deploys `out/` to `gh-pages` branch → GitHub Pages serves the site.

**Build verification before push:**
```bash
npm run build      # must complete with zero errors
npx serve out      # spot-check at localhost:3000
```

**The `.nojekyll` file** in `out/` is added by the Actions workflow. Do not remove it — without it, GitHub Pages hides the `_next/` directory and the site breaks.

**Do not push directly to `gh-pages`.** It is owned by the Actions workflow (`force_orphan: true`). Any manual push will be overwritten on the next deploy.

---

## Dev Workflow

```bash
npm run dev        # local dev server with hot reload
npm run build      # static export to out/ — run before every push to verify
npm run lint       # TypeScript + ESLint — fix all errors before pushing
```

Test the build output (`out/`) with `npx serve out` — not `npm run dev` — to catch any static export issues before they reach GitHub Pages.

---

## What Not To Do

- **Do not add API routes** (`src/app/api/`). Static export does not support them.
- **Do not use `useSearchParams` without a Suspense boundary.** Next.js will fail the static build.
- **Do not use `next/headers` or `next/cookies`.** Server-only, incompatible with `output: 'export'`.
- **Do not paraphrase content.** When porting or editing prose from project pages, experience entries, or reflections — copy verbatim.
- **Do not hardcode project cards in `page.tsx` or `projects/page.tsx`.** All card data comes from `src/data/projects.ts`. Adding a card anywhere else breaks the single source of truth.
- **Do not construct Tailwind class names dynamically** (e.g., `` `bg-${color}-500` ``). Tailwind's tree-shaker won't detect them and the styles won't appear. Use a static map instead (see `TagPill.tsx`).
