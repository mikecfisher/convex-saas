# Repository Guidelines

## Project Structure & Module Organization
- `apps/web/src/` contains the frontend app (React + Vite + TanStack Router).
- `apps/web/src/routes/` is file-based routing; route files follow TanStack patterns like `_layout.*.tsx`.
- `apps/web/src/ui/` holds reusable UI primitives; `apps/web/src/utils/` contains shared helpers/validators.
- `packages/backend/convex/` contains backend functions, schema, auth, Stripe/email logic, and Convex config.
- `packages/backend/convex/_generated/` is generated code; do not edit manually.
- `apps/web/public/` stores static assets and i18n files (`apps/web/public/locales/*`).
- `docs/guide/` contains setup and deployment documentation.

## Build, Test, and Development Commands
- `bun install`: install dependencies.
- `bun start` (alias for `bun run dev`): run frontend (`vite`) and backend (`bun run --cwd packages/backend dev`) together.
- `bun run predev`: initialize Convex data via `bun run --cwd packages/backend setup`.
- `bun run build`: TypeScript project build + production Vite bundle.
- `bun run lint`: ESLint checks (Convex generated files ignored).
- `bun run typecheck`: strict type checks for app, node config, and Convex.
- `bun run preview`: serve the production bundle locally.

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
