# `reports-api-2020-09-04`

The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.

## Installing

* `yarn add @sp-api-sdk/reports-api-2020-09-04`
* `npm install @sp-api-sdk/reports-api-2020-09-04`

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

const client = new ReportsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/reports-api/reports_2020-09-04.md)
