# `shipment-invoicing-api-v0`

The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/shipment-invoicing-api-v0)](https://www.npmjs.com/package/@sp-api-sdk/shipment-invoicing-api-v0)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/shipment-invoicing-api/shipmentInvoicingV0.md).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_shipment_invoicing_api_v0.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/shipment-invoicing-api-v0
```

```sh
npm install @sp-api-sdk/shipment-invoicing-api-v0
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ShipmentInvoicingApiClient} from '@sp-api-sdk/shipment-invoicing-api-v0'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: 'Atzr|…',
  accessKeyId: '',
  secretAccessKey: '',
  role: {
    arn: 'arn:aws:iam::…',
  },
})

const client = new ShipmentInvoicingApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new ShipmentInvoicingApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    // Optionally specify a callback that will be called on every retry.
    onRetry: (retryInfo) => {
      console.log(retryInfo)
    },
  },
})
```

The rate limits used for each route are specified in the [API documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/shipment-invoicing-api/shipmentInvoicingV0.md).

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
