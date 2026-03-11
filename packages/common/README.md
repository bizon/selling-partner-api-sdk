# `@sp-api-sdk/common`

[![npm version](https://img.shields.io/npm/v/@sp-api-sdk/common)](https://www.npmjs.com/package/@sp-api-sdk/common)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

Amazon Selling Partner API common package

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

## Installing

```sh
npm install @sp-api-sdk/common
```

> **Note:** You typically do not need to install this package directly. It is automatically included as a dependency of every API client package.

## Overview

This package provides the shared infrastructure used by all API client packages:

- **Axios instance factory** with authentication, rate limiting, logging, and error handling
- **Region configuration** for NA, EU, and FE endpoints (production and sandbox)
- **Error handling** with `SellingPartnerApiError`

## Client Configuration

The `ClientConfiguration` interface is used by all API client constructors:

```typescript
import { type ClientConfiguration } from "@sp-api-sdk/common";
```

| Option                | Type                    | Required | Description                                     |
| --------------------- | ----------------------- | -------- | ----------------------------------------------- |
| `auth`                | `SellingPartnerApiAuth` | Yes      | Authentication instance from `@sp-api-sdk/auth` |
| `region`              | `'na' \| 'eu' \| 'fe'`  | Yes      | Selling Partner API region                      |
| `sandbox`             | `boolean`               | No       | Use sandbox endpoints (default: `false`)        |
| `rateLimiting`        | `object`                | No       | Rate limiting retry configuration               |
| `logging`             | `object`                | No       | Request/response/error logging configuration    |
| `restrictedDataToken` | `string`                | No       | Restricted Data Token for accessing PII         |
| `userAgent`           | `string`                | No       | Custom user-agent header                        |

## Regions

Three regions are supported, each with production and sandbox endpoints:

| Region        | Code | AWS Region | Production Endpoint                       |
| ------------- | ---- | ---------- | ----------------------------------------- |
| North America | `na` | us-east-1  | `https://sellingpartnerapi-na.amazon.com` |
| Europe        | `eu` | eu-west-1  | `https://sellingpartnerapi-eu.amazon.com` |
| Far East      | `fe` | us-west-2  | `https://sellingpartnerapi-fe.amazon.com` |

When `sandbox` is set to `true`, the sandbox variant of the endpoint is used (e.g. `https://sandbox.sellingpartnerapi-eu.amazon.com`).

## Rate Limiting

When `rateLimiting.retry` is enabled, the SDK automatically retries HTTP 429 responses. The retry delay is calculated as follows:

1. If the response includes an `x-amzn-ratelimit-limit` header, the delay is derived from it.
2. Otherwise, the SDK falls back to the documented rate limits for the specific endpoint.
3. If no rate limit information is available, a 60-second default delay is used.

You can optionally provide an `onRetry` callback to be notified on every retry:

```typescript
rateLimiting: {
  retry: true,
  onRetry: ({delay, rateLimit, retryCount, error}) => {
    console.log(`Retry #${retryCount}, waiting ${delay}ms (rate limit: ${rateLimit})`)
  },
}
```

## Logging

Logging is powered by [axios-logger](https://github.com/hg-pyun/axios-logger) and can be configured independently for requests, responses, and errors:

```typescript
logging: {
  request: true,   // or a RequestLogConfig object
  response: true,  // or a ResponseLogConfig object
  error: true,     // or an ErrorLogConfig object
}
```

Pass `true` to use sensible defaults (no headers logged for requests, headers logged for responses). Pass a configuration object to customize the behavior.

By default, `request` and `response` loggers use `console.info`, and the `error` logger uses `console.error`.

> **Warning:** Enabling `headers: true` in the request logger will log authentication tokens. This should be disabled in production.

## Error Handling

API errors are wrapped in `SellingPartnerApiError`, which extends `AxiosError` and adds context:

```typescript
import { SellingPartnerApiError } from "@sp-api-sdk/common";

try {
  await client.getOrders({ marketplaceIds: ["A1PA6795UKMFR9"] });
} catch (error) {
  if (error instanceof SellingPartnerApiError) {
    console.error(error.message); // e.g. "orders (v0) error: Response code 403"
    console.error(error.apiName); // e.g. "orders"
    console.error(error.apiVersion); // e.g. "v0"
    console.error(error.innerMessage); // Original axios error message
  }
}
```

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
