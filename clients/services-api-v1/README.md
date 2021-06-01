# `services-api-v1`

With the Services API, you can build applications that help service providers get and modify their service orders.

## Installing

* `yarn add @sp-api-sdk/services-api-v1`
* `npm install @sp-api-sdk/services-api-v1`

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

const client = new ServicesApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/services-api/services.md)
