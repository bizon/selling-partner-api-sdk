# `vendor-direct-fulfillment-orders-api-v1`

The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor&#39;s order data.

## Installing

* `yarn add @sp-api-sdk/vendor-direct-fulfillment-orders-api-v1`
* `npm install @sp-api-sdk/vendor-direct-fulfillment-orders-api-v1`

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

const client = new VendorDirectFulfillmentOrdersApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-orders-api/vendorDirectFulfillmentOrdersV1.md)
