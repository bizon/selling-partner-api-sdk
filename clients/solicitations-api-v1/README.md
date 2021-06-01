# `solicitations-api-v1`

With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient&#39;s Message Center. The Solicitations API returns responses that are formed according to the &lt;a href&#x3D;https:&#x2F;&#x2F;tools.ietf.org&#x2F;html&#x2F;draft-kelly-json-hal-08&gt;JSON Hypertext Application Language&lt;&#x2F;a&gt; (HAL) standard.

## Installing

* `yarn add @sp-api-sdk/solicitations-api-v1`
* `npm install @sp-api-sdk/solicitations-api-v1`

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

const client = new SolicitationsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/solicitations-api/solicitations.md)
