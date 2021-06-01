# `authorization-api-v1`

The Selling Partner API for Authorization helps developers manage authorizations and check the specific permissions associated with a given authorization.

## Installing

* `yarn add @sp-api-sdk/authorization-api-v1`
* `npm install @sp-api-sdk/authorization-api-v1`

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

const client = new AuthorizationApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/authorization-api/authorization.md)
