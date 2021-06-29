# `fulfillment-outbound-api-2020-07-01`

The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon&#39;s fulfillment network. You can get information on both potential and existing fulfillment orders.

## Installing

```sh
yarn add @sp-api-sdk/fulfillment-outbound-api-2020-07-01
```

```sh
npm install @sp-api-sdk/fulfillment-outbound-api-2020-07-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {FulfillmentOutboundApiClient} from '@sp-api-sdk/fulfillment-outbound-api-2020-07-01'

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

const client = new FulfillmentOutboundApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new FulfillmentOutboundApiClient({
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

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fulfillment-outbound-api/fulfillmentOutbound_2020-07-01.md)
