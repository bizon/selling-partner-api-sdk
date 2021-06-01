# `fulfillment-inbound-api-v0`

The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon&#39;s fulfillment network.

## Installing

* `yarn add @sp-api-sdk/fulfillment-inbound-api-v0`
* `npm install @sp-api-sdk/fulfillment-inbound-api-v0`

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

const client = new FulfillmentInboundApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fulfillment-inbound-api/fulfillmentInboundV0.md)
