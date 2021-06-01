# `catalog-items-api-2020-12-01`

The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.

## Installing

* `yarn add @sp-api-sdk/catalog-items-api-2020-12-01`
* `npm install @sp-api-sdk/catalog-items-api-2020-12-01`

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

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/catalog-items-api/catalogItems_2020-12-01.md)
