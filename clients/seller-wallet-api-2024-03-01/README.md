# `seller-wallet-api-2024-03-01`

[![npm version](https://img.shields.io/npm/v/@sp-api-sdk/seller-wallet-api-2024-03-01)](https://www.npmjs.com/package/@sp-api-sdk/seller-wallet-api-2024-03-01)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

This is a Amazon open banking api specification based on the Swagger 2.0 standard.
It specifies all the api's that the third party will have to connect to in order to receive information from Amazon related to their customer's financial data.

_Please note the authentication & authorization api's are not part of this section and would be created & shared separately_

Some useful links:
- [The SP-API repository](https://swagger-editor.dovydenk.people.a2z.com/)
- [The source API definition for the Amazon Seller Wallet Open Banking API](https://swagger-editor.dovydenk.people.a2z.com/)

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp-api-sdk_seller-wallet-api-2024-03-01.html) for this API client.

## Installing

```sh
npm install @sp-api-sdk/seller-wallet-api-2024-03-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {SellerWalletApiClient} from '@sp-api-sdk/seller-wallet-api-2024-03-01'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: 'Atzr|…',
})

const client = new SellerWalletApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new SellerWalletApiClient({
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
const client = new SellerWalletApiClient({
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
