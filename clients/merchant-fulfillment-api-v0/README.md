# `merchant-fulfillment-api-v0`

The Selling Partner API for Merchant Fulfillment helps you build applications that let sellers purchase shipping for non-Prime and Prime orders using Amazon’s Buy Shipping Services.

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
import {MerchantFulfillmentApiClient} from '@sp-api-sdk/merchant-fulfillment-api-v0'

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
  region: 'eu'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/merchant-fulfillment-api/merchantFulfillmentV0.md)
