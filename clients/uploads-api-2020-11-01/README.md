# `uploads-api-2020-11-01`

The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/uploads-api-2020-11-01)](https://www.npmjs.com/package/@sp-api-sdk/uploads-api-2020-11-01)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/uploads-api/uploads_2020-11-01.md).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_uploads_api_2020_11_01.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/uploads-api-2020-11-01
```

```sh
npm install @sp-api-sdk/uploads-api-2020-11-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {UploadsApiClient} from '@sp-api-sdk/uploads-api-2020-11-01'

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

const client = new UploadsApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new UploadsApiClient({
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

The rate limits used for each route are specified in the [API documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/uploads-api/uploads_2020-11-01.md).

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
