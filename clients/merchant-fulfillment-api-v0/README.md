# `merchant-fulfillment-api-v0`

The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/merchant-fulfillment-api-v0)](https://www.npmjs.com/package/@sp-api-sdk/merchant-fulfillment-api-v0)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_merchant_fulfillment_api_v0.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/merchant-fulfillment-api-v0
```

```sh
npm install @sp-api-sdk/merchant-fulfillment-api-v0
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {MerchantFulfillmentApiClient} from '@sp-api-sdk/merchant-fulfillment-api-v0'

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

const client = new MerchantFulfillmentApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new MerchantFulfillmentApiClient({
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

## Logging

You can enable logging for both SP-API requests and responses by configuring the `logging.request` and `logging.response` properties.

```javascript
const client = new MerchantFulfillmentApiClient({
  auth,
  region: 'eu',
  logging: {
    request: {
      logger: console.debug
    },
    response: {
      logger: console.debug
    },
    error: true,
  },
})
```

Specifying `true` will use the default options, specifying an object will allow you to override the default options.  
This uses [axios-logger](https://github.com/hg-pyun/axios-logger) under the hood.  
By default, if enabled, the `request` and `response` loggers will use `console.info` and the `error` logger will use `console.error`.


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