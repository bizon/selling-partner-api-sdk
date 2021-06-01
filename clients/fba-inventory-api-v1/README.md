# `fba-inventory-api-v1`

The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon&#39;s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.

## Installing

* `yarn add @sp-api-sdk/fba-inventory-api-v1`
* `npm install @sp-api-sdk/fba-inventory-api-v1`

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

const client = new FbaInventoryApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fba-inventory-api/fbaInventory.md)
