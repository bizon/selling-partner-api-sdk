# CLAUDE.md

> **Maintenance rule**: when editing this file, ensure every rule is unambiguous, non-redundant, and non-contradictory. Keep sections focused — each rule belongs in exactly one place. Remove or merge anything that overlaps. The goal is a single source of truth that leaves zero room for interpretation.

## Project overview

Modularized TypeScript SDK for Amazon Selling Partner API. Monorepo managed with pnpm workspaces, Turbo, and Lerna-lite (independent versioning). Publishes 63+ API client packages to npm under the `@sp-api-sdk/` scope, plus 3 core packages (`auth`, `common`, `schemas`).

Most code in `clients/` and `packages/schemas/src/` is **auto-generated** — do not edit manually.

## Checks (run after every change)

```bash
pnpm -r xo       # linter (ESLint-based via XO)
pnpm check:ts    # type checker (tsc --noEmit, via Turbo)
pnpm test         # tests (Jest with SWC)
```

- `pnpm xo --fix <path>` to auto-fix lint issues in a specific file
- Build all packages: `pnpm build`

## Commit and PR conventions

- Use semantic commit messages (conventional commits)
- Subject line under 55 characters, body lines under 72 characters
- No `Co-Authored-By` trailer
- PR titles follow the same conventions as commit subjects
- No "Generated with Claude Code" footer in PR descriptions

## Project structure

```
clients/                    # 63 auto-generated API client packages (DO NOT EDIT)
packages/
  auth/                     # @sp-api-sdk/auth — LWA OAuth authentication
  common/                   # @sp-api-sdk/common — Axios factory, regions, rate limiting, errors
  schemas/                  # @sp-api-sdk/schemas — JSON schemas + TS types (auto-generated src/)
internal/
  jest/                     # Shared Jest config (private)
  typescript-config/        # Shared TypeScript configs: CJS + ESM (private)
codegen/                    # Code generation tooling (private, not published)
  templates/                # Mustache templates for generated clients
  patches/                  # JSON Patch files for fixing invalid OpenAPI specs
```

### What is generated vs hand-written

| Path                       | Generated? | Notes                                 |
| -------------------------- | ---------- | ------------------------------------- |
| `clients/*/src/api-model/` | Yes        | OpenAPI Generator output — never edit |
| `clients/*/src/client.ts`  | Yes        | Mustache template output              |
| `clients/*/src/index.ts`   | Yes        | Mustache template output              |
| `clients/*/package.json`   | Yes        | Mustache template output              |
| `clients/*/README.md`      | Yes        | Mustache template output              |
| `clients/*/tsconfig*.json` | Yes        | Mustache template output              |
| `packages/schemas/src/`    | Yes        | Generated from Amazon JSON schemas    |
| `packages/auth/`           | No         | Hand-written                          |
| `packages/common/`         | No         | Hand-written                          |
| `codegen/`                 | No         | Hand-written                          |
| `internal/`                | No         | Hand-written                          |

## Code generation

The codegen system (`codegen/`) generates clients and schemas from Amazon's [selling-partner-api-models](https://github.com/amzn/selling-partner-api-models):

```bash
pnpm codegen              # generate both clients and schemas
pnpm codegen clients      # generate API clients only
pnpm codegen schemas      # generate schemas only
```

- Uses `@openapitools/openapi-generator-cli` with the `typescript-axios` generator
- Templates are in `codegen/templates/` (Mustache)
- JSON patches in `codegen/patches/` fix invalid OpenAPI specs (RFC 6902 format)
- A GitHub Actions workflow runs twice daily and creates PRs when models change

### Adding a patch

1. Create a JSON file in `codegen/patches/{modelDirectory}/{modelName}/`
2. Each file is one JSON Patch operation (RFC 6902)
3. Files are sorted alphabetically and applied in order

## Code patterns

- **Dual output**: all packages compile to both CommonJS (`dist/cjs/`) and ES Modules (`dist/es/`), with type declarations in `dist/types/`
- **Package runner**: use `pnpx` instead of `npx`
- **Node version**: 24 (see `.node-version`)
- **TypeScript configs**: shared via `@sp-api-sdk/typescript-config` in `internal/typescript-config/`
- **Jest configs**: shared via `@sp-api-sdk/jest` in `internal/jest/`
- **Client pattern**: each client exports a class extending the generated API class, wrapping `createAxiosInstance()` from `@sp-api-sdk/common` with per-endpoint rate limits
- **Rate limits**: extracted from OpenAPI operation descriptions during codegen, embedded as `RateLimit[]` in each client's `client.ts`
- **Grantless APIs**: `notifications-api-v1` uses scope-based auth instead of refresh tokens — handled in codegen via `GRANTLESS_APIS` constant
- **Error types**: `SellingPartnerApiAuthError` (auth failures) and `SellingPartnerApiError` (API failures) both extend `AxiosError`

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                   User Code                         │
├─────────────────────────────────────────────────────┤
│  @sp-api-sdk/orders-api-v0  (or any client)         │
│    └── extends generated API class                  │
├─────────────────────────────────────────────────────┤
│  @sp-api-sdk/common                                 │
│    ├── createAxiosInstance (rate limiting, logging) │
│    ├── regions (NA, EU, FE endpoints)               │
│    └── SellingPartnerApiError                       │
├─────────────────────────────────────────────────────┤
│  @sp-api-sdk/auth                                   │
│    └── SellingPartnerApiAuth (LWA OAuth tokens)     │
├─────────────────────────────────────────────────────┤
│  axios                                              │
└─────────────────────────────────────────────────────┘
```

## CI/CD

- **Tests** (`tests.yml`): lint + type check + Jest on every PR and push to master
- **Codegen** (`codegen.yml`): runs twice daily, creates PRs on `codegen/update-models` and `codegen/update-schemas` branches
- **Release** (`release.yml`): manual workflow dispatch — runs `lerna publish` with conventional commits, deploys TypeDoc to `docs` branch
- **PR validation** (`pr.yml`): enforces semantic PR titles

## Documentation

- Keep `README.md` files in sync with the codebase
- Client READMEs are generated — to change them, edit `codegen/templates/README.md.mustache`
- Schema README lists are generated — update after schema changes
- TypeDoc is generated and deployed to the `docs` branch on release
