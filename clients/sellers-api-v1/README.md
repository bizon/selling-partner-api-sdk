# `sellers-api-v1`

The Selling Partner API for Sellers lets you retrieve information on behalf of sellers about their seller account, such as the marketplaces they participate in. Along with listing the marketplaces that a seller can sell in, the API also provides additional information about the marketplace such as the default language and the default currency. The API also provides seller-specific information such as whether the seller has suspended listings in that marketplace.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/sellers-api-v1)](https://www.npmjs.com/package/@sp-api-sdk/sellers-api-v1)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_sellers_api_v1.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/sellers-api-v1
```

```sh
npm install @sp-api-sdk/sellers-api-v1
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {SellersApiClient} from '@sp-api-sdk/sellers-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: 'Atzr|…',
  accessKeyId: '',
  secretAccessKey: '',
  region: 'eu-west-1',
  role: {
    arn: 'arn:aws:iam::…',
  },
})

const client = new SellersApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new SellersApiClient({
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
const client = new SellersApiClient({
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
