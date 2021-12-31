# `product-pricing-api-v0`

The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/product-pricing-api-v0)](https://www.npmjs.com/package/@sp-api-sdk/product-pricing-api-v0)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/product-pricing-api/productPricingV0.md).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_product_pricing_api_v0.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/product-pricing-api-v0
```

```sh
npm install @sp-api-sdk/product-pricing-api-v0
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ProductPricingApiClient} from '@sp-api-sdk/product-pricing-api-v0'

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

const client = new ProductPricingApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new ProductPricingApiClient({
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

The rate limits used for each route are specified in the [API documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/product-pricing-api/productPricingV0.md).

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
