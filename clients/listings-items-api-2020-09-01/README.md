# `listings-items-api-2020-09-01`

The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.

## Installing

```sh
yarn add @sp-api-sdk/listings-items-api-2020-09-01
```

```sh
npm install @sp-api-sdk/listings-items-api-2020-09-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ListingsItemsApiClient} from '@sp-api-sdk/listings-items-api-2020-09-01'

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

const client = new ListingsItemsApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new ListingsItemsApiClient({
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

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/listings-items-api/listingsItems_2020-09-01.md)
