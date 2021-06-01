# `feeds-api-2020-09-04`

The Selling Partner API for Feeds lets you upload data to Amazon on behalf of a selling partner.

## Installing

* `yarn add @sp-api-sdk/feeds-api-2020-09-04`
* `npm install @sp-api-sdk/feeds-api-2020-09-04`

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

const client = new FeedsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/feeds-api/feeds_2020-09-04.md)
