# `fulfillment-inbound-api-v0`

The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon&#39;s fulfillment network.

## Installing

```sh
yarn add @sp-api-sdk/aplus-content-api-2020-11-01
```

```sh
npm install @sp-api-sdk/aplus-content-api-2020-11-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {FulfillmentInboundApiClient} from '@sp-api-sdk/fulfillment-inbound-api-v0'

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

const client = new FulfillmentInboundApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fulfillment-inbound-api/fulfillmentInboundV0.md)
