# Repository Guidelines

## Project Structure & Module Organization
- Root app lives in `quiz-app/` (run all commands here).
- Source code: `quiz-app/src/app` (App Router). Entry pages: `page.tsx`, layout in `layout.tsx`.
- Static assets: `quiz-app/public`.
- Build output: `quiz-app/.next` (git-ignored).
- Config: `quiz-app/next.config.ts`, `quiz-app/tsconfig.json`, `quiz-app/eslint.config.mjs`, `quiz-app/postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: Start Next.js dev server with Turbopack.
- `npm run build`: Production build.
- `npm start`: Serve the production build.
- `npm run lint`: Run ESLint.

From the repo root, `cd quiz-app && <command>`.

## Coding Style & Naming Conventions
- Language: TypeScript + React (functional components, hooks).
- Indentation: 2 spaces; prefer single quotes in TSX (matches existing files).
- Components: collocate small components; use `PascalCase` for component names and files when split (e.g., `ResultsPanel.tsx`).
- CSS: Tailwind CSS v4 via `@tailwindcss/postcss` and `src/app/globals.css`.
- Linting: ESLint with `next/core-web-vitals` and TypeScript rules. Fix issues before PRs.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer:
  - Unit/component: React Testing Library + Vitest.
  - E2E: Playwright.
- Suggested structure: collocate as `*.test.ts(x)` next to the file or under `src/__tests__/`.
- Add a script in `package.json` (example): `"test": "vitest"` and `"test:ui": "playwright test"`.

## Commit & Pull Request Guidelines
- Use clear, present-tense commits. Recommended Conventional Commits (e.g., `feat: add results panel`, `fix: guard nextQuestion when unanswered`).
- PRs must include:
  - Purpose and scope; link issues (e.g., `Closes #123`).
  - Screenshots or GIFs for UI changes (dev and prod views if relevant).
  - Notes on testing and any follow-ups.

## Security & Configuration Tips
- Environment variables: use `quiz-app/.env.local` (auto-loaded by Next). Do not commit `.env*` (already ignored).
- Avoid committing build artifacts or `.next/` (already ignored).
- Node: use an active LTS (Node 18+). If needed, add an `engines` field to `package.json`.

