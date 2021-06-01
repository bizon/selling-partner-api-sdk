# `vendor-direct-fulfillment-payments-api-v1`

The Selling Partner API for Direct Fulfillment Payments provides programmatic access to a direct fulfillment vendor&#39;s invoice data.

## Installing

* `yarn add @sp-api-sdk/vendor-direct-fulfillment-payments-api-v1`
* `npm install @sp-api-sdk/vendor-direct-fulfillment-payments-api-v1`

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

const client = new VendorDirectFulfillmentPaymentsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-direct-fulfillment-payments-api/vendorDirectFulfillmentPaymentsV1.md)
