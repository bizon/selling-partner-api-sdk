# selling-partner-api-sdk

[![codecov](https://codecov.io/gh/bizon/selling-partner-api-sdk/branch/master/graph/badge.svg?token=tqBs3JHHP2)](https://codecov.io/gh/bizon/selling-partner-api-sdk)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

A modularized SDK library for Amazon Selling Partner API (fully typed in TypeScript)

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

## CI

[![Codegen](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/codegen.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/codegen.yml)
[![Tests](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/tests.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/tests.yml)
[![Release](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/release.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/release.yml)

## Documentation

To learn more about the Selling Partner API, visit the [official Amazon documentation](https://developer-docs.amazon.com/sp-api/docs).  
Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/) for each API client.

## Features

This SDK supports the following features:

- Installing only the API clients you need, versioned independently.
- Passing client configuration through environment variables.
- Retrying rate-limited requests by respecting the documented rate-limts and possibly provided headers.
- Logging (non-auth) API requests, responses and errors.
- Passing restricted data tokens to API clients.

## Packages

- [auth](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/packages/auth): Authentication helpers for the Selling Partner API.
- [common](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/packages/common): Common utilities for the SDK.
- [schemas](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/packages/schemas): JSON schemas and TypeScript types for notifications, reports and feeds.

## Clients

This repository contains an API client for each of the available Selling Partner API version:

<!---
Generated using:

ls clients | sed 's$\(.*\)$- [\1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/\1)$' | pbcopy
-->

- [amazon-warehousing-and-distribution-api-2024-05-09](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/amazon-warehousing-and-distribution-api-2024-05-09)
- [aplus-content-api-2020-11-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/aplus-content-api-2020-11-01)
- [application-integrations-api-2024-04-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/application-integrations-api-2024-04-01)
- [application-management-api-2023-11-30](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/application-management-api-2023-11-30)
- [catalog-items-api-2020-12-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/catalog-items-api-2020-12-01)
- [catalog-items-api-2022-04-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/catalog-items-api-2022-04-01)
- [catalog-items-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/catalog-items-api-v0)
- [customer-feedback-api-2024-06-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/customer-feedback-api-2024-06-01)
- [data-kiosk-api-2023-11-15](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/data-kiosk-api-2023-11-15)
- [delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/delivery-by-amazon-delivery-shipment-invoice-v2022-07-01-api-2022-07-01)
- [easy-ship-api-2022-03-23](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/easy-ship-api-2022-03-23)
- [external-fulfillment-inventory-api-2024-09-11](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/external-fulfillment-inventory-api-2024-09-11)
- [external-fulfillment-returns-api-2024-09-11](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/external-fulfillment-returns-api-2024-09-11)
- [external-fulfillment-shipments-api-2024-09-11](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/external-fulfillment-shipments-api-2024-09-11)
- [fba-inbound-eligibility-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fba-inbound-eligibility-api-v1)
- [fba-inventory-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fba-inventory-api-v1)
- [feeds-api-2021-06-30](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/feeds-api-2021-06-30)
- [finances-api-2024-06-19](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/finances-api-2024-06-19)
- [finances-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/finances-api-v0)
- [finances-transfers-api-2024-06-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/finances-transfers-api-2024-06-01)
- [fulfillment-inbound-api-2024-03-20](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fulfillment-inbound-api-2024-03-20)
- [fulfillment-inbound-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fulfillment-inbound-api-v0)
- [fulfillment-outbound-api-2020-07-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fulfillment-outbound-api-2020-07-01)
- [invoices-api-2024-06-19](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/invoices-api-2024-06-19)
- [listings-items-api-2020-09-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-items-api-2020-09-01)
- [listings-items-api-2021-08-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-items-api-2021-08-01)
- [listings-restrictions-api-2021-08-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-restrictions-api-2021-08-01)
- [merchant-fulfillment-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/merchant-fulfillment-api-v0)
- [messaging-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/messaging-api-v1)
- [notifications-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/notifications-api-v1)
- [orders-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/orders-api-v0)
- [product-fees-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-fees-api-v0)
- [product-pricing-api-2022-05-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-pricing-api-2022-05-01)
- [product-pricing-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-pricing-api-v0)
- [product-type-definitions-api-2020-09-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-type-definitions-api-2020-09-01)
- [replenishment-api-2022-11-07](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/replenishment-api-2022-11-07)
- [reports-api-2021-06-30](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/reports-api-2021-06-30)
- [sales-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/sales-api-v1)
- [seller-wallet-api-2024-03-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/seller-wallet-api-2024-03-01)
- [sellers-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/sellers-api-v1)
- [services-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/services-api-v1)
- [shipment-invoicing-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/shipment-invoicing-api-v0)
- [shipping-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/shipping-api-v1)
- [shipping-api-v2](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/shipping-api-v2)
- [solicitations-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/solicitations-api-v1)
- [supply-sources-api-2020-07-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/supply-sources-api-2020-07-01)
- [tokens-api-2021-03-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/tokens-api-2021-03-01)
- [uploads-api-2020-11-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/uploads-api-2020-11-01)
- [vehicles-api-2024-11-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vehicles-api-2024-11-01)
- [vendor-direct-fulfillment-inventory-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-inventory-api-v1)
- [vendor-direct-fulfillment-orders-api-2021-12-28](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-orders-api-2021-12-28)
- [vendor-direct-fulfillment-orders-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-orders-api-v1)
- [vendor-direct-fulfillment-payments-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-payments-api-v1)
- [vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28)
- [vendor-direct-fulfillment-shipping-api-2021-12-28](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-shipping-api-2021-12-28)
- [vendor-direct-fulfillment-shipping-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-shipping-api-v1)
- [vendor-direct-fulfillment-transactions-api-2021-12-28](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-transactions-api-2021-12-28)
- [vendor-direct-fulfillment-transactions-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-transactions-api-v1)
- [vendor-invoices-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-invoices-api-v1)
- [vendor-orders-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-orders-api-v1)
- [vendor-shipments-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-shipments-api-v1)
- [vendor-transaction-status-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-transaction-status-api-v1)

The API clients are automatically generated from the Swagger/OpenAPI models from [the official models repository](https://github.com/amzn/selling-partner-api-models).
[A code generation workflow](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/codegen.yml) runs twice a day and will create a PR on this repository whenever there are changes to the models.

## Schemas

The SDK exposes notifications, reports and feeds schemas through [`@sp-api-sdk/schemas`](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/packages/schemas).  
It exposes the JSON schemas as well as typescript types.

For example, if you need the JSON schema for Vendor inventory reports:

```js
import { Reports } from "@sp-api-sdk/schemas";

console.log(Reports.vendorInventoryReport);
```

If you need the typescript type:

```ts
import { Reports } from "@sp-api-sdk/schemas";

const report =
  (await getVendorInventoryReportData()) as Reports.VendorInventoryReport;
```

## Code generation

To see the code generation process, see the [codegen](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/codegen) module.

Some of the source Open API models are invalid (see the [issues](https://github.com/amzn/selling-partner-api-models/issues) and [PRs](https://github.com/amzn/selling-partner-api-models/pulls) on the Amazon repository), so this SDK defines some patches to account for those errors.

Each patch files are [JSON Patches](http://jsonpatch.com/) operations (1 logical change per file).

### Active patches

You can browse all the active patches in the [patches directory](https://github.com/bizon/selling-partner-api-sdk/tree/master/codegen/patches).

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
