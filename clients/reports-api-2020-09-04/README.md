# `reports-api-2020-09-04`

The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/reports-api-2020-09-04)](https://www.npmjs.com/package/@sp-api-sdk/reports-api-2020-09-04)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_reports_api_2020_09_04.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/reports-api-2020-09-04
```

```sh
npm install @sp-api-sdk/reports-api-2020-09-04
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ReportsApiClient} from '@sp-api-sdk/reports-api-2020-09-04'

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

const client = new ReportsApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new ReportsApiClient({
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
