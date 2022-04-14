# `easy-ship-2022-03-23`

The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.

Your Easy Ship applications can:

* Get available time slots for packages to be scheduled for delivery.

* Schedule, reschedule, and cancel Easy Ship orders.

* Print labels, invoices, and warranties.

See the [Marketplace Support Table](https://developer-docs.amazon.com/sp-api/docs/easy-ship-api-v2022-03-23-use-case-guide) for the differences in Easy Ship operations by marketplace.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/easy-ship-2022-03-23)](https://www.npmjs.com/package/@sp-api-sdk/easy-ship-2022-03-23)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_easy_ship_2022_03_23.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/easy-ship-2022-03-23
```

```sh
npm install @sp-api-sdk/easy-ship-2022-03-23
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {EasyShipClient} from '@sp-api-sdk/easy-ship-2022-03-23'

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

const client = new EasyShipClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new EasyShipClient({
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
