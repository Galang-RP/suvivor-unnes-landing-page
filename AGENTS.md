# SUVIFOR UNNES — Agent Instructions

## Commands
- `npm ci` — install (uses lockfile)
- `npm run dev` — start dev server (Vite)
- `npm run build` — production build
- `npm run lint` — oxlint (not ESLint)
- `npm run preview` — preview build output

## Project Structure
- `src/pages/` — route components (currently only `HomePage`, `NotFoundPage`)
- `src/components/` — shared UI components (`Navbar`, `Hero`, `About`, `SectionNavigation`, `PageShell`)
- `src/assets/index.js` — Vite-imported images with metadata (width/height/alt)
- `src/styles/tokens.css` — CSS custom properties for design tokens
- `public/` — static assets served as-is

## Routing
- Uses `BrowserRouter` with hash links: `/#hero`, `/#about`, `/#programs`, `/#recruitment`, `/#contact`
- Single-page layout: `App.jsx` renders `Navbar` + `SectionNavigation` + `Routes`
- Production hosting must rewrite all routes to `index.html` for `BrowserRouter` to work on direct loads

## Design Tokens (from `design.md`, `src/styles/tokens.css`)
| Token | Value |
|-------|-------|
| `--bg` | `#1D1819` |
| `--accent` | `#FACA42` |
| `--text` | `#FEFEFE` |
| `--text-muted` | `#CCC5B2` |
| `--border` | `#373335` |
| `--font-heading` | `Syne` |
| `--font-body` | `Space Grotesk` |
| `--font-label` | `JetBrains Mono` |

## Key Implementation Details
- **Navbar**: Uses native `<dialog>` with custom open/close animations. Respects `prefers-reduced-motion`. Keyboard accessible (Escape to close).
- **Hero**: Ticker animation pauses on hover/tap and when `prefers-reduced-motion` is active.
- **Images**: Always imported via `assets` object in `src/assets/index.js` (provides `src`, `width`, `height`, `alt`).
- **CSS**: Plain CSS files co-located with components. Uses CSS variables from `tokens.css`.
- **Linting**: oxlint with React and OXC plugins. Rules: `react/rules-of-hooks` (error), `react/only-export-components` (warn).

## Development Notes
- Node.js 22.12+ required (verified on 26.3.1)
- No test suite configured
- No typecheck script (TypeScript not used; JS with JSDoc types in `@types/react`)
- Design reference: `design.md` (derived from Stitch), full copy in `references/stitch-original.txt`
- Implementation proceeds incrementally per kanban cards; sections other than Hero/About are placeholders

## Gotchas
- `oxlint` config is `.oxlintrc.json` (not `.eslintrc`)
- Hash routing means sections are DOM IDs, not separate routes
- `Navbar` CTA "LET'S FLY" links to `/#recruitment` on mobile header and in menu
- `SectionNavigation` provides keyboard navigation between sections (ArrowUp/Down, Home, End)