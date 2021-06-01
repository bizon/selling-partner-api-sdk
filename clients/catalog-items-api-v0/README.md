# `catalog-items-api-v0`

The Selling Partner API for Catalog Items helps you programmatically retrieve item details for items in the catalog.

## Installing

* `yarn add @sp-api-sdk/catalog-items-api-v0`
* `npm install @sp-api-sdk/catalog-items-api-v0`

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

const client = new CatalogItemsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/catalog-items-api/catalogItemsV0.md)
