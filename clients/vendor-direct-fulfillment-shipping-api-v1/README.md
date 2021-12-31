# `vendor-direct-fulfillment-shipping-api-v1`

The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/vendor-direct-fulfillment-shipping-api-v1)](https://www.npmjs.com/package/@sp-api-sdk/vendor-direct-fulfillment-shipping-api-v1)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-shipping-api/vendorDirectFulfillmentShippingV1.md).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_vendor_direct_fulfillment_shipping_api_v1.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/vendor-direct-fulfillment-shipping-api-v1
```

```sh
npm install @sp-api-sdk/vendor-direct-fulfillment-shipping-api-v1
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {VendorDirectFulfillmentShippingApiClient} from '@sp-api-sdk/vendor-direct-fulfillment-shipping-api-v1'

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

const client = new VendorDirectFulfillmentShippingApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new VendorDirectFulfillmentShippingApiClient({
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

The rate limits used for each route are specified in the [API documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-shipping-api/vendorDirectFulfillmentShippingV1.md).

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
