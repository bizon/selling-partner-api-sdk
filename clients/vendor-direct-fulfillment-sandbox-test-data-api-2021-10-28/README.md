# `vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28`

The Selling Partner API for Vendor Direct Fulfillment Sandbox Test Data provides programmatic access to vendor direct fulfillment sandbox test data.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28)](https://www.npmjs.com/package/@sp-api-sdk/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_vendor_direct_fulfillment_sandbox_test_data_api_2021_10_28.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28
```

```sh
npm install @sp-api-sdk/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {VendorDirectFulfillmentSandboxTestDataApiClient} from '@sp-api-sdk/vendor-direct-fulfillment-sandbox-test-data-api-2021-10-28'

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

const client = new VendorDirectFulfillmentSandboxTestDataApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new VendorDirectFulfillmentSandboxTestDataApiClient({
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

The rate limits used for each route are specified in the [API documentation](https://developer-docs.amazon.com/sp-api/docs).

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
