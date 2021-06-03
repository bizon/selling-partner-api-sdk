# `fba-inventory-api-v1`

The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon&#39;s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.

## Installing

```sh
yarn add @sp-api-sdk/aplus-content-api-2020-11-01
```

```sh
npm install @sp-api-sdk/aplus-content-api-2020-11-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {FbaInventoryApiClient} from '@sp-api-sdk/fba-inventory-api-v1'

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
  region: 'eu'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fba-inventory-api/fbaInventory.md)
