# Luma — Buzzvel Front-End Challenge 2026

A responsive landing page for **Luma**, a fictional online learning platform, built from the _Buzzvel FE Test 2026_ Figma design with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

**Live preview:** https://buzzvel-fe-test-2026-ten.vercel.app

All ten sections from the desktop and mobile designs are implemented: Header, Hero, Categories, Featured Course, How it works, Testimonial, The People, Contact, Final CTA and Footer.

| Lighthouse — mobile | Lighthouse — desktop |
| --- | --- |
| ![Lighthouse mobile scores: 100 performance, accessibility, best practices and SEO](docs/lighthouse-mobile.png) | ![Lighthouse desktop scores: 100 performance, accessibility, best practices and SEO](docs/lighthouse-desktop.png) |

## Getting started

**Requirements:** Node.js 20.19 or newer (developed on Node 24) and npm.

```bash
npm install          # install dependencies
npm run dev          # start the dev server on http://localhost:3000
npm run build        # create a production build
npm run start        # serve the production build
npm run lint         # run ESLint
npm test             # run unit and component tests (Vitest)
npm run test:e2e     # build, start and run end-to-end tests (Playwright)
```

Before running the end-to-end tests for the first time, install the browser once:

```bash
npx playwright install chromium
```

No environment variables are required. Open Graph image URLs use `NEXT_PUBLIC_SITE_URL` when it is set, then the Vercel production domain, and `http://localhost:3000` otherwise.

## Tech stack

- **Next.js 16** (App Router, Server Components, `next/image`, `next/font`)
- **React 19** and **TypeScript** (strict mode)
- **Tailwind CSS v4** with design tokens defined in `src/app/globals.css`
- **Vitest** + **React Testing Library** for unit and component tests
- **Playwright** for end-to-end tests

No UI or state libraries were added; everything else is built with React and the platform.

## Project structure

```
src/
├── app/                  # layout (fonts, metadata, providers) and the page that composes the sections
├── components/
│   ├── layout/           # Header and Footer
│   ├── sections/         # one folder per page section
│   └── ui/               # reusable building blocks (Button, ButtonLink, TextField, SectionHeading, ...)
├── contexts/             # MenuContext — shared mobile menu state
├── data/                 # typed mock content for every section
├── hooks/                # generic hooks (useEscapeKey, useFocusTrap, useLockBodyScroll, useMediaQuery)
├── lib/                  # pure helpers (validation, formatting, class names)
├── providers/            # AppProviders — composes client providers in one place
├── services/             # mock contact API
├── test/                 # test utilities
└── types/                # shared types
e2e/                      # Playwright specs
```

### Architecture

- **One hook per section.** Every section folder has a `useX` hook (`useHero`, `useCategories`, `useContactForm`, ...) that holds all of its logic: reading data, deriving values and handling events. The `.tsx` files only render markup from what the hook returns.
- **Content lives in `src/data`.** Copy, links and image metadata are typed mock data, so sections can be fed from an API or CMS later without touching the components.
- **Server first.** Sections without interactivity are Server Components, and their hooks use no client-only APIs, so they ship no JavaScript. Only the Header and the contact form are Client Components.
- **Context only for shared state.** `MenuContext` owns the mobile menu state (open, close, toggle), locks page scroll while open and closes itself when the viewport reaches the desktop breakpoint.
- **Small, typed UI kit.** Buttons share one style function (`buttonStyles`) used by both `<Button>` and `<ButtonLink>`. Form fields wire up labels, `aria-invalid` and `aria-describedby` automatically.

## Interactions

- **Mobile menu:** opens from the header button and closes with the button, Escape or a link. While it is open, focus stays inside it and the page behind does not scroll. Focus returns to the toggle on close.
- **Contact form:** validates on blur and on submit, moves focus to the first invalid field, shows a sending state, then a success message (with focus moved to it) and a "Send another message" action. The form keeps its height when it switches to the success state, so the page does not jump.
- **Mock API:** `src/services/contactService.ts` waits 1.2 s and resolves. Any email ending in `@fail.test` simulates a delivery failure, which shows an error and keeps the typed values.
- **Hover and focus states** on every link, button and card. Category cards are fully clickable through a stretched link.

## Accessibility and performance

- Semantic landmarks, one `h1`, ordered headings, labelled sections and footer navigation.
- Skip link, visible focus styles on every control and WCAG AA colour contrast.
- Every image has descriptive alt text; decorative images use empty alt text.
- `prefers-reduced-motion` disables transitions, hover movement and smooth scrolling.
- `next/font` self-hosts Inter and Plus Jakarta Sans. `next/image` serves responsive WebP images; the hero image is fetched with high priority, and the collage computes the real rendered width of each cropped photo for its `sizes`.
- The page is statically prerendered. Lighthouse scores 100 in all four categories on mobile and desktop, with no layout shift.

## Testing

- **Unit and component tests (`npm test`, 41 tests):** form validation rules, formatting and site URL helpers, `MenuContext`, Header behaviour (toggle, Escape, focus trap, link close), the contact form flows (errors, sending, success, reset, failure) and the data hooks.
- **End-to-end tests (`npm run test:e2e`):** run against the production build at 402, 768 and 1280 px. They check that every section renders without console errors, that there is no horizontal scroll, image alt text, the skip link, reduced motion, the mobile and desktop navigation, and the contact form flows.

## Checks before submission

All of these pass on the final commit:

| Check | Command | Result |
| --- | --- | --- |
| Type check | `npx tsc --noEmit` | No errors |
| Lint | `npm run lint` | No errors or warnings |
| Unit and component tests | `npm test` | 41 passed |
| End-to-end tests | `npm run test:e2e` | 31 passed (5 skipped on purpose: mobile-menu tests skip on desktop and vice versa) |
| Production build | `npm run build` | Succeeds; the page is statically prerendered |
| Manual review | Browser at 402, 768, 1024 and 1280 px | Compared against the Figma frames; no horizontal scroll |
| Lighthouse | Production build, mobile and desktop | 100 in all four categories |

## Key decisions

- **Tablet layouts.** The design only has 402 px and 1280 px frames, so I designed the tablet range: section-specific two- or three-column layouts at 768 px, and the desktop navigation from 1024 px (it was cramped at 768 px).
- **"Step 01" labels.** The desktop design labels all three steps "Step 01"; the mobile design numbers them 01–03, so I followed the mobile version.
- **Placeholder copy.** The People section uses lorem ipsum in the design; I replaced it with real copy of similar length.
- **Language.** The mobile contact form is in Portuguese in the design, while the rest of the page is in English. I kept everything in English.
- **Copy differences.** Step 2 reads "who actually use these skills" on mobile and "who use these skills" on desktop; I used the desktop text.
- **Container width.** A few desktop frames use a 1136 px content width while the rest of the page uses 1120 px; I kept 1120 px everywhere for consistent alignment.
- **States not shown in the design.** The open mobile menu, form errors, the sending state and the success message follow the existing visual language.
- **Sticky header.** The header stays visible while scrolling, and anchored sections leave room for it.
- **Final CTA decoration.** The decorative shapes appear from 1024 px; the mobile design does not include them.

## Known gaps

- There is no backend. The contact form uses a mock service and nothing is stored or sent.
- "Log in", "Terms" and "Privacy" have no destination pages and point to `#`. Other links scroll to the relevant section.
- Storybook was not added.
- `npm audit` reports 7 moderate issues in development-only tooling (a transitive `minimatch` dependency of ESLint). Production dependencies have 0 known vulnerabilities.
- In `next dev`, newly added Tailwind theme tokens sometimes do not appear until the dev cache is cleared (`.next/dev`). Production builds are not affected.

## Time spent

About **8 hours**, including studying the design, implementation, responsive and accessibility review, performance tuning, tests and documentation.

## AI tools

I used Claude Code as a coding assistant to read the Figma design through the Figma MCP, scaffold components and write tests. I reviewed every change, checked the result in the browser at 402, 768 and 1280 px, and validated it with the automated tests, linting, production builds and Lighthouse.
