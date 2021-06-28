# `reports-api-2021-06-30`

The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.

## Installing

```sh
yarn add @sp-api-sdk/reports-api-2021-06-30
```

```sh
npm install @sp-api-sdk/reports-api-2021-06-30
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {ReportsApiClient} from '@sp-api-sdk/reports-api-2021-06-30'

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

const client = new ReportsApiClient({
  auth,
  region: 'eu' // or 'eu-west-1'
})
```

## Handle Rate Limiting

If you want to let the SDK retry after each 429 responses, instanciate the client like this:

```javascript
const client = new ReportsApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    onRetry: (retryInfo) => console.log(retryInfo) // Optional
  }
})
```

The SDK gets the rate limits for each routes from the API documentation

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/reports-api/reports_2021-06-30.md)
