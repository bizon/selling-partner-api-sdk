# `vendor-transaction-status-api-v1`

The Selling Partner API for Retail Procurement Transaction Status provides programmatic access to status information on specific asynchronous POST transactions for vendors.

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
import {VendorTransactionStatusApiClient} from '@sp-api-sdk/vendor-transaction-status-api-v1'

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

const client = new VendorTransactionStatusApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/vendor-transaction-status-api/vendorTransactionStatus.md)
