# selling-partner-api-sdk

A modularized SDK library for Amazon Selling Partner API (fully typed in TypeScript)

[![codecov](https://codecov.io/gh/bizon/selling-partner-api-sdk/branch/master/graph/badge.svg?token=tqBs3JHHP2)](https://codecov.io/gh/bizon/selling-partner-api-sdk)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## CI

[![Codegen](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/codegen.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/codegen.yml)
[![Tests](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/tests.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/tests.yml)
[![Release](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/release.yml/badge.svg)](https://github.com/bizon/selling-partner-api-sdk/actions/workflows/release.yml)

## Clients

This repository contains an API client for each of the available Selling Partner API version:

- [aplus-content-api-2020-11-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/aplus-content-api-2020-11-01)
- [authorization-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/authorization-api-v1)
- [catalog-items-api-2020-12-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/catalog-items-api-2020-12-01)
- [catalog-items-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/catalog-items-api-v0)
- [fba-inbound-eligibility-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fba-inbound-eligibility-api-v1)
- [fba-inventory-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fba-inventory-api-v1)
- [fba-small-and-light-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fba-small-and-light-api-v1)
- [feeds-api-2020-09-04](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/feeds-api-2020-09-04)
- [feeds-api-2021-06-30](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/feeds-api-2021-06-30)
- [finances-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/finances-api-v0)
- [fulfillment-inbound-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fulfillment-inbound-api-v0)
- [fulfillment-outbound-api-2020-07-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/fulfillment-outbound-api-2020-07-01)
- [listings-items-api-2020-09-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-items-api-2020-09-01)
- [listings-items-api-2021-08-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-items-api-2021-08-01)
- [listings-restrictions-api-2021-08-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/listings-restrictions-api-2021-08-01)
- [merchant-fulfillment-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/merchant-fulfillment-api-v0)
- [messaging-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/messaging-api-v1)
- [notifications-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/notifications-api-v1)
- [orders-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/orders-api-v0)
- [product-fees-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-fees-api-v0)
- [product-pricing-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-pricing-api-v0)
- [product-type-definitions-api-2020-09-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/product-type-definitions-api-2020-09-01)
- [reports-api-2020-09-04](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/reports-api-2020-09-04)
- [reports-api-2021-06-30](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/reports-api-2021-06-30)
- [sales-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/sales-api-v1)
- [sellers-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/sellers-api-v1)
- [services-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/services-api-v1)
- [shipment-invoicing-api-v0](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/shipment-invoicing-api-v0)
- [shipping-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/shipping-api-v1)
- [solicitations-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/solicitations-api-v1)
- [tokens-api-2021-03-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/tokens-api-2021-03-01)
- [uploads-api-2020-11-01](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/uploads-api-2020-11-01)
- [vendor-direct-fulfillment-inventory-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-inventory-api-v1)
- [vendor-direct-fulfillment-orders-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-orders-api-v1)
- [vendor-direct-fulfillment-payments-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-payments-api-v1)
- [vendor-direct-fulfillment-shipping-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-shipping-api-v1)
- [vendor-direct-fulfillment-transactions-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-direct-fulfillment-transactions-api-v1)
- [vendor-invoices-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-invoices-api-v1)
- [vendor-orders-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-orders-api-v1)
- [vendor-shipments-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-shipments-api-v1)
- [vendor-transaction-status-api-v1](https://www.github.com/bizon/selling-partner-api-sdk/tree/master/clients/vendor-transaction-status-api-v1)

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
