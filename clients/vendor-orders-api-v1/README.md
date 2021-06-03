# `vendor-orders-api-v1`

The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.

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
import {VendorOrdersApiClient} from '@sp-api-sdk/vendor-orders-api-v1'

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

const client = new VendorOrdersApiClient({
  auth,
  region: 'eu'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-orders-api/vendorOrders.md)
