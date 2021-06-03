# `vendor-direct-fulfillment-orders-api-v1`

The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor&#39;s order data.

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
import {VendorDirectFulfillmentOrdersApiClient} from '@sp-api-sdk/vendor-direct-fulfillment-orders-api-v1'

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

const client = new VendorDirectFulfillmentOrdersApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-orders-api/vendorDirectFulfillmentOrdersV1.md)
