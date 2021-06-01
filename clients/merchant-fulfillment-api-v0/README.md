# `merchant-fulfillment-api-v0`

The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.

## Installing

* `yarn add @sp-api-sdk/merchant-fulfillment-api-v0`
* `npm install @sp-api-sdk/merchant-fulfillment-api-v0`

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

const client = new MerchantFulfillmentApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/merchant-fulfillment-api/merchantFulfillmentV0.md)
