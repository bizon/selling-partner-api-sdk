# `@sp-api-sdk/generator`

[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

Code generation tooling for the Selling Partner API SDK. Generates 63+ typed API client packages and JSON schema types from [Amazon's official OpenAPI models](https://github.com/amzn/selling-partner-api-models).

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

> **Note:** This package is private and not published to npm. It is used internally to generate the SDK packages.

## Usage

From the repository root:

```sh
pnpm codegen              # generate both clients and schemas
pnpm codegen clients      # generate API clients only
pnpm codegen schemas      # generate schemas only
```

The command clones Amazon's [selling-partner-api-models](https://github.com/amzn/selling-partner-api-models) repository, generates the code, runs lint auto-fix, then cleans up.

## How it works

### Client generation

Each OpenAPI spec in `selling-partner-api-models/models/` produces a typed API client package in `clients/`.

The pipeline for each model:

1. **Read & normalize** the OpenAPI spec — fix `doc:` markdown URLs, apply JSON patches, and replace operation tags with a consistent client name
2. **Run OpenAPI Generator** (`typescript-axios` generator) to produce the raw API model (types, endpoints, configuration)
3. **Extract rate limits** from operation descriptions using regex, embedding them as a `RateLimit[]` constant in each client
4. **Render Mustache templates** for the client wrapper class, `package.json`, tsconfig files, README, and TypeDoc config
5. **Clean up** generated files, keeping only `api/`, `models/`, and infrastructure files

All models are processed in parallel (one per CPU core) using `p-map`. The OpenAPI Generator JAR is pre-downloaded to prevent race conditions.

#### Client wrapper pattern

Each generated client exports a class that extends the OpenAPI-generated API class, wrapping it with `createAxiosInstance()` from `@sp-api-sdk/common`. This adds rate limiting, logging, and region-aware endpoint selection:

```typescript
export class OrdersApiClient extends OrdersApi {
  constructor(configuration: ClientConfiguration) {
    const { axios, endpoint } = createAxiosInstance(configuration, clientRateLimits);
    super(new Configuration(), endpoint, axios);
  }
}
```

#### Grantless APIs

Some APIs use scope-based authentication instead of refresh tokens. These are defined in the `GRANTLESS_APIS` constant and receive different README examples.

### Schema generation

Each JSON schema in `selling-partner-api-models/schemas/` produces a TypeScript file in `packages/schemas/src/`.

For each schema:

1. **Read** the JSON schema and remove the `$schema` field
2. **Generate** a TypeScript file exporting the schema as a const and a derived type using `json-schema-to-ts`
3. **Generate** barrel index files for each schema directory and a root index

## Patches

JSON patches (RFC 6902) can fix invalid or incomplete OpenAPI specs before generation.

### Adding a patch

1. Create a directory at `codegen/patches/{modelDirectory}/{modelName}/`
2. Add one or more JSON files, each containing a single RFC 6902 operation (or an array of operations)
3. Files are sorted alphabetically and applied in order

Example patch file (`codegen/patches/finances-api-model/Finances/0001-fix-type.json`):

```json
[
  {
    "op": "replace",
    "path": "/components/schemas/Currency/properties/Amount/type",
    "value": "number"
  }
]
```

## Templates

Mustache templates in `codegen/templates/` generate the non-model files for each client:

| Template                    | Output             | Purpose                                 |
| --------------------------- | ------------------ | --------------------------------------- |
| `package.json.mustache`     | `package.json`     | Package metadata, scripts, dependencies |
| `src/client.ts.mustache`    | `src/client.ts`    | Client class with rate limits           |
| `src/index.ts.mustache`     | `src/index.ts`     | Barrel re-exports                       |
| `tsconfig.json.mustache`    | `tsconfig.json`    | CJS build config                        |
| `tsconfig.es.json.mustache` | `tsconfig.es.json` | ESM build config                        |
| `typedoc.json.mustache`     | `typedoc.json`     | Documentation config                    |
| `README.md.mustache`        | `README.md`        | Package documentation                   |

## License

MIT

## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
