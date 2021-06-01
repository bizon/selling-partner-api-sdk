# `shipping-api-v1`

Provides programmatic access to Amazon Shipping APIs.

## Installing

* `yarn add @sp-api-sdk/shipping-api-v1`
* `npm install @sp-api-sdk/shipping-api-v1`

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

const client = new ShippingApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/shipping-api/shipping.md)
