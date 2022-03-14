# `listings-restrictions-api-2021-08-01`

The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.

For more information, see the [Listings Restrictions API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-restrictions-api-v2021-08-01-use-case-guide).

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/listings-restrictions-api-2021-08-01)](https://www.npmjs.com/package/@sp-api-sdk/listings-restrictions-api-2021-08-01)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_listings_restrictions_api_2021_08_01.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/listings-restrictions-api-2021-08-01
```

```sh
npm install @sp-api-sdk/listings-restrictions-api-2021-08-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ListingsRestrictionsApiClient} from '@sp-api-sdk/listings-restrictions-api-2021-08-01'

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

const client = new ListingsRestrictionsApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new ListingsRestrictionsApiClient({
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
