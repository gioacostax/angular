# AGENTS.md

Guidance for coding agents working in this repository.

## Project Snapshot
- Stack: Angular 21 (standalone APIs), TypeScript 5.9, PrimeNG 21, TailwindCSS 4.
- Data fetching: `@tanstack/angular-query-experimental`.
- Package manager: `pnpm` (`packageManager: pnpm@10.30.3`).
- Lint/format: Biome (`biome.json` + `shared/config/_biome.json`).
- Build system: Angular CLI (`angular.json`, `@angular/build`).
- Test tooling installed: Angular unit-test builder + Vitest dependency.
- Current status: there are no committed `*.spec.ts` or `*.test.ts` files yet.

## Rule Files Discovery
- Checked `.cursor/rules/**`: not present.
- Checked `.cursorrules`: not present.
- Checked `.github/copilot-instructions.md`: not present.
- Therefore, no Cursor/Copilot repo-specific rule file is currently available.

## Setup Commands
- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Alternate dev server command: `pnpm ng serve`
- Production build: `pnpm build`
- Lint and typecheck: `pnpm lint`

## Build / Lint / Test Commands

### Build
- Standard production build: `pnpm build`
- Explicit production config: `pnpm ng build --configuration production`
- Development build: `pnpm ng build --configuration development`

### Lint + Type Safety
- Primary lint command: `pnpm lint`
- What `pnpm lint` runs: `tsc --noEmit && biome check src`
- TypeScript check only: `pnpm exec tsc --noEmit`
- Biome checks only: `pnpm exec biome check src`
- Auto-fix formatting/imports: `pnpm exec biome check --write src`

### Tests
- Current `pnpm test` script: `echo 'No tests found, skipping...'`
- Meaning: default test script is a placeholder and does not execute tests.
- Run all tests once (when specs exist): `pnpm ng test --watch=false`
- Run tests in watch mode: `pnpm ng test`

### Run a Single Test (important)
Preferred Angular CLI approach:
- Single spec file: `pnpm ng test --watch=false --include="src/app/path/to/file.spec.ts"`
- Pattern of specs: `pnpm ng test --watch=false --include="**/*.spec.ts"`

If Vitest is explicitly wired with config/scripts:
- Single file: `pnpm exec vitest run src/app/path/to/file.spec.ts`
- Single test name: `pnpm exec vitest run src/app/path/to/file.spec.ts -t "test name"`

Use Angular `--include` as default unless a real Vitest setup is added.

## Architecture and Code Organization
- App source root: `src/`.
- Main app code: `src/app/`.
- Feature-oriented folders under `src/app/features/*`.
- Layout components under `src/app/layout/*`.
- Environment files under `src/environments/*` with Angular file replacements.
- Shared cross-project config under `shared/config/*`.

Follow this structure when adding features:
- Put user-facing domain logic in feature folders.
- Keep layout/shell concerns in layout components.
- Keep reusable non-domain utilities/components in shared locations.

## TypeScript and Angular Standards
- Compiler strictness is high (`strict: true` and related strict flags).
- Always write fully typed public APIs.
- Avoid `any`; use concrete types or `unknown` with narrowing.
- Handle `null`/`undefined` intentionally (strict null checks).
- Prefer `readonly` for injected services and immutable refs.
- Prefer Angular `inject(...)` over constructor DI for consistency.
- Use standalone components with explicit `imports` arrays.
- Keep route configs typed (`Routes`) and lazy-load feature components.
- Use path aliases where appropriate: `@/*`, `@public/*`, `@shared/*`.

## Naming Conventions
- Files: kebab-case (`chuck.service.ts`, `main-layout.component.ts`).
- Classes/types/interfaces: PascalCase.
- Variables/functions/methods/properties: camelCase.
- Constants: camelCase by default; UPPER_SNAKE_CASE only for true constants.
- Angular selectors: `app-*` prefix (project prefix is `app`).
- Test files: `*.spec.ts`.

## Imports and Module Boundaries
- Import ordering is defined in `biome.json`.
- Order groups as: Angular/RxJS -> third-party packages -> alias imports -> relative imports.
- Within each group, keep type imports before value imports.
- Prefer `import type { ... }` for type-only imports.
- Keep blank lines between groups and remove unused imports.
- Let Biome organize imports instead of manual sorting.

## Formatting Rules
- Source of truth: Biome + EditorConfig.
- Indentation: 2 spaces; line endings: LF; max width: 100.
- Strings in TS/JS: single quotes; semicolons: required.
- Trailing commas: ES5 style.
- Final newline required; trim trailing whitespace.
- HTML attributes may be expanded multiline by formatter.
- Tailwind class sorting can warn via `useSortedClasses`.

## Error Handling Guidelines
- Do not swallow errors silently.
- Surface user-relevant failures in async flows (for example toast/messages).
- Prefer explicit error states over implicit falsy checks.
- In query-based code, handle pending/success/error states distinctly.
- Keep global error logging in place (`provideBrowserGlobalErrorListeners`).

## Angular + TanStack Query Practices
- Define stable query keys (array form).
- Keep query functions focused and strongly typed.
- Map DTOs to domain models before exposing data to components.
- Trigger UI side effects via effects, not directly in templates.
- Avoid ad-hoc flags when query state already models status.

## CSS and UI Conventions
- Global style entrypoint: `src/styles/index.css`.
- Fonts loaded via `src/styles/fonts.css` (`IBM` variable font).
- Tailwind is enabled; prefer utilities for layout/spacing.
- PrimeNG theme is centralized in `src/styles/primeuix.ts`.

## Agent Workflow Checklist
Before coding:
- Read nearby feature files and follow local patterns.
- Preserve strict typing and import ordering.

After coding:
- Run `pnpm lint`.
- Run targeted tests when tests exist (single-file first).
- If build-critical config/app wiring changed, run `pnpm build`.

When adding tests:
- Prefer colocated `*.spec.ts` near implementation files.
- Update scripts only when introducing a durable test workflow.

## Repository Caveat
- `pnpm test` is a placeholder; do not assume CI coverage from it.
- For real verification, invoke `pnpm ng test` commands directly once specs exist.
