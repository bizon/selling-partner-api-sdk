# `fulfillment-outbound-api-2020-07-01`

The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon&#39;s fulfillment network. You can get information on both potential and existing fulfillment orders.

## Installing

* `yarn add @sp-api-sdk/fulfillment-outbound-api-2020-07-01`
* `npm install @sp-api-sdk/fulfillment-outbound-api-2020-07-01`

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

const client = new FulfillmentOutboundApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fulfillment-outbound-api/fulfillmentOutbound_2020-07-01.md)
