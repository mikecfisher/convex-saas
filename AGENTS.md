# Repository Guidelines

## Project Structure & Module Organization
- `apps/web/src/` contains the frontend app (React + Vite + TanStack Router).
- `apps/web/src/routes/` is file-based routing; route files follow TanStack patterns like `_layout.*.tsx`.
- `apps/web/src/ui/` holds reusable UI primitives; `apps/web/src/utils/` contains shared helpers/validators.
- `packages/backend/convex/` contains backend functions, schema, auth, Stripe/email logic, and Convex config.
- `packages/backend/convex/_generated/` is generated code; do not edit manually.
- `apps/web/package.json` and `packages/backend/package.json` define package-local scripts used by Turbo.
- `apps/web/public/` stores static assets and i18n files (`apps/web/public/locales/*`).
- `docs/guide/` contains setup and deployment documentation.

## Build, Test, and Development Commands
- `bun install`: install dependencies.
- `bun start` / `bun run dev`: run package dev tasks through Turbo.
- `bun run predev`: initialize Convex data (`turbo run setup --filter=@repo/backend`).
- `bun run build`: run package builds via Turbo.
- `bun run lint`: run package lint checks via Turbo.
- `bun run typecheck`: run package type checks via Turbo.
- `bun run preview`: preview the web app via Turbo filter.
- `turbo run lint typecheck build --affected`: CI command for changed packages only.

## Coding Style & Naming Conventions
- Language: TypeScript (strict mode enabled across app and Convex).
- Formatting: Prettier defaults (`.prettierrc` is `{}`), 2-space indentation.
- Linting: ESLint + `typescript-eslint`; keep warnings/errors clean before opening PRs.
- Naming:
  - React components: `PascalCase`.
  - Hooks: `useSomething`.
  - Utility files/functions: concise `camelCase` names.
  - Route files: follow existing route naming conventions in `apps/web/src/routes/`.
- Use path aliases where appropriate: `@/*` (web src), `@cvx/*` (backend convex), `@backend/*` (backend shared), `~/*` (repo root).

## Testing Guidelines
- There is no dedicated automated test suite in this template yet.
- Minimum pre-PR quality gate: run `bun run lint`, `bun run typecheck`, and `bun run build`.
- For non-trivial logic changes, include clear manual test steps in the PR description.

## Commit & Pull Request Guidelines
- Follow the existing commit style: short, imperative messages (examples: `fix link`, `docs: update deployment notes`).
- Keep commits focused to one logical change.
- PRs should include:
  - What changed and why.
  - Any required env/config updates.
  - Verification steps; include screenshots for UI changes.
  - Linked issue/task when applicable.

## Security & Configuration Tips
- Never commit secrets; set runtime values with `cd packages/backend && bunx convex env set ...`.
- Stripe/Resend keys and webhook secrets must stay in environment configuration only.
