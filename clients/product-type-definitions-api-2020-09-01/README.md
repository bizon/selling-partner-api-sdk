# `product-type-definitions-api-2020-09-01`

The Selling Partner API for Product Type Definitions provides programmatic access to attribute and data requirements for product types in the Amazon catalog. Use this API to return the JSON Schema for a product type that you can then use with other Selling Partner APIs, such as the Selling Partner API for Listings Items, the Selling Partner API for Catalog Items, and the Selling Partner API for Feeds (for JSON-based listing feeds).

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
  clientId: '',
  clientSecret: '',
  refreshToken: '',
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  role: {
    arn: '',
  }
})

const client = new ProductTypeDefinitionsApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new ProductTypeDefinitionsApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    onRetry: (retryInfo) => console.log(retryInfo) // Optional
  }
})
```

The SDK gets the rate limits for each routes from the API documentation

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/product-type-definitions-api/definitionsProductTypes_2020-09-01.md)
