# `vendor-orders-api-v1`

The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.

## Installing

* `yarn add @sp-api-sdk/vendor-orders-api-v1`
* `npm install @sp-api-sdk/vendor-orders-api-v1`

## Getting Started

```javascript
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
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-orders-api/vendorOrders.md)
