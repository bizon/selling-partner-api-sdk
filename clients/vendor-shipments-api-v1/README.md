# `vendor-shipments-api-v1`

The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.

## Installing

* `yarn add @sp-api-sdk/vendor-shipments-api-v1`
* `npm install @sp-api-sdk/vendor-shipments-api-v1`

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

const client = new VendorShipmentsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-shipments-api/vendorShipments.md)
