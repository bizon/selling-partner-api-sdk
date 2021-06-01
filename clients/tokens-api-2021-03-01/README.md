# `tokens-api-2021-03-01`

The Selling Partner API for Tokens provides a secure way to access a customers&#39;s PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes you to make subsequent requests to access these restricted resources.

## Installing

* `yarn add @sp-api-sdk/tokens-api-2021-03-01`
* `npm install @sp-api-sdk/tokens-api-2021-03-01`

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

const client = new TokensApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/tokens-api/tokens_2021-03-01.md)
