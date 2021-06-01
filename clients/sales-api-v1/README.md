# `sales-api-v1`

The Selling Partner API for Sales provides APIs related to sales performance.

## Installing

* `yarn add @sp-api-sdk/sales-api-v1`
* `npm install @sp-api-sdk/sales-api-v1`

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

const client = new SalesApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/sales-api/sales.md)
