# `vendor-invoices-api-v1`

The Selling Partner API for Retail Procurement Payments provides programmatic access to vendors payments data.

## Installing

* `yarn add @sp-api-sdk/vendor-invoices-api-v1`
* `npm install @sp-api-sdk/vendor-invoices-api-v1`

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

const client = new VendorInvoicesApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-invoices-api/vendorInvoices.md)
