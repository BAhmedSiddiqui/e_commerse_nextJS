# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev       # Start dev server with Turbopack (default bundler in Next.js 16)
npm run build     # Production build (does NOT run lint automatically in Next.js 16+)
npm run start     # Start production server
npm run lint      # Run ESLint via eslint CLI (not next lint — deprecated in Next.js 16)
```

No test framework is configured.

## Architecture

This is a Next.js 16.2.4 App Router project using React 19, TypeScript, and Tailwind CSS v4.

**Routing**: File-system routing under `src/app/`. Pages are `page.tsx` files; the root layout (`src/app/layout.tsx`) wraps all pages with `<Header>` and `<Footer>`.

**Components**: Shared UI lives in `src/app/components/`. Current components:
- `Header/header.tsx` — sticky nav with logo, desktop/mobile nav links, SearchBar, cart badge, wishlist, account icons. Marked `"use client"` for mobile menu toggle state.
- `footer/footer.tsx` — newsletter signup, link columns (Shop / Support / Company), social icons, payment badges, legal links.
- `searchbar/searchbar.tsx` — controlled search input with clear button. Accepts `onSearch` callback and `className` props. Marked `"use client"`.

**Server vs Client components**: Default to Server Components. Add `"use client"` only when the component needs browser APIs, event handlers, or React hooks (`useState`, `useRef`, etc.).

**Import alias**: `@/*` maps to the project root (e.g., `@/src/app/components/...`).

**Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Dark mode is supported throughout via `dark:` variants. Indigo (`indigo-600`) is the primary brand color.

**Icons**: `lucide-react` is available. The current codebase uses inline SVGs in Header/Footer — prefer `lucide-react` for new icons.

## Key Next.js 16 differences

- **Turbopack** is the default bundler. Use `next dev --webpack` only if a dependency requires Webpack.
- **`next build` no longer lints** — run `npm run lint` separately in CI.
- **`next lint`** is deprecated; the lint script calls `eslint` directly.
- Before implementing any routing, data fetching, caching, or rendering pattern, read the relevant guide in `node_modules/next/dist/docs/` — APIs differ from older versions.
