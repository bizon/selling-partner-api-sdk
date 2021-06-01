# `fba-inbound-eligibility-api-v1`

With the FBA Inbound Eligibility API, you can build applications that let sellers get eligibility previews for items before shipping them to Amazon&#39;s fulfillment centers. With this API you can find out if an item is eligible for inbound shipment to Amazon&#39;s fulfillment centers in a specific marketplace. You can also find out if an item is eligible for using the manufacturer barcode for FBA inventory tracking. Sellers can use this information to inform their decisions about which items to ship Amazon&#39;s fulfillment centers.

## Installing

* `yarn add @sp-api-sdk/fba-inbound-eligibility-api-v1`
* `npm install @sp-api-sdk/fba-inbound-eligibility-api-v1`

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

const client = new FbaInboundEligibilityApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/fba-inbound-eligibility-api/fbaInbound.md)
