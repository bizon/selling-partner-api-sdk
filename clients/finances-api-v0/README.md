# `finances-api-v0`

The Selling Partner API for Finances helps you obtain financial information relevant to a seller&#39;s business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.

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
import {FinancesApiClient} from '@sp-api-sdk/finances-api-v0'

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

const client = new FinancesApiClient({
  auth,
  region: 'eu'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/finances-api/financesV0.md)
