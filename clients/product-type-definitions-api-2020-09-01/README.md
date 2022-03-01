# `product-type-definitions-api-2020-09-01`

The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).

For more information, see the [Product Type Definitions API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-type-api-use-case-guide).

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/product-type-definitions-api-2020-09-01)](https://www.npmjs.com/package/@sp-api-sdk/product-type-definitions-api-2020-09-01)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_product_type_definitions_api_2020_09_01.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/product-type-definitions-api-2020-09-01
```

```sh
npm install @sp-api-sdk/product-type-definitions-api-2020-09-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ProductTypeDefinitionsApiClient} from '@sp-api-sdk/product-type-definitions-api-2020-09-01'

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

const client = new ProductTypeDefinitionsApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new ProductTypeDefinitionsApiClient({
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
