# Repository Guidelines

## Project Structure & Module Organization
- App root: `quiz-app/` (run all commands here).
- Source: `quiz-app/src/app` (App Router). Main entry: `page.tsx`; shell: `layout.tsx`.
- Modules: `quiz-app/src/components`, `quiz-app/src/hooks`, `quiz-app/src/lib`.
- Assets: `quiz-app/public` (fonts in `public/fonts`, images in `public/`).
- Config: `quiz-app/next.config.ts`, `quiz-app/tsconfig.json`, `quiz-app/eslint.config.mjs`, `quiz-app/postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: Start Next.js dev server (Turbopack).
- `npm run build`: Production build.
- `npm start`: Serve the production build.
- `npm run lint`: ESLint (Next + TS rules).
- `npm run type-check`: TypeScript check without emit.
Run from repo root: `cd quiz-app && <command>`.

## Coding Style & Naming Conventions
- Language: TypeScript + React (function components + hooks).
- Indentation: 2 spaces; prefer single quotes in TS/TSX.
- Naming: `PascalCase` components/files (e.g., `ResultsView.tsx`), `camelCase` functions/vars.
- Paths: use alias `@/*` (see `tsconfig.json`).
- Styles: Tailwind v4; theme tokens in `src/app/globals.css` (e.g., `bg-primary`).
- Linting: fix all lint errors before PRs (`npm run lint`).

## Testing Guidelines
- Not configured yet. Recommended:
  - Unit/Component: Vitest + React Testing Library.
  - E2E: Playwright.
- Test locations: collocate `*.test.ts(x)` near source or under `src/__tests__/`.
- Example scripts to add: `"test": "vitest"`, `"test:e2e": "playwright test"`.

## Commit & Pull Request Guidelines
- Commits: clear, present tense; prefer Conventional Commits (e.g., `feat: add results view`).
- PRs include: concise description, linked issues (`Closes #123`), screenshots/GIFs for UI, and a checklist (linted, type-checked, manually verified locally).

## Security & Configuration Tips
- Env vars: use `quiz-app/.env.local` (don’t commit `.env*`).
- Fonts: served locally from `public/fonts` (Apercu Pro); avoid external font fetches during build.
- Node: use LTS (>= 18.18). Workspace warning silenced via `next.config.ts` (`turbopack.root`, `outputFileTracingRoot`).
