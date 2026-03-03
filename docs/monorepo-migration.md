# Monorepo Migration Baseline

This document tracks the staged migration to a Turborepo monorepo.

## Step 1: Baseline Freeze
- Keep feature work paused during structural moves.
- Baseline verification commands:
  - `bun run lint`
  - `bun run typecheck`
  - `bun run build`
- Only proceed to structure changes after all three pass.

## Migration Steps
1. Baseline and freeze checkpoint.
2. Bootstrap workspace + Turborepo scaffolding.
3. Move current app to `apps/web` without behavior changes.
4. Move Convex backend to `packages/backend/convex`.
5. Extract shared packages.
6. Add mobile app.
7. Add/expand tests, then enforce in hooks.
8. Add `oxlint` and `knip` across packages.
