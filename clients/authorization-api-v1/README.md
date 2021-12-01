# `authorization-api-v1`

The Selling Partner API for Authorization helps developers manage authorizations and check the specific permissions associated with a given authorization.

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://github.com/amzn/selling-partner-api-docs/tree/main/references/authorization-api/authorization.md).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_authorization_api_v1.html) for this API client.

## Installing

```sh
yarn add @sp-api-sdk/authorization-api-v1
```

```sh
npm install @sp-api-sdk/authorization-api-v1
```

## Getting Started

### With grantless API

```javascript
import {SellingPartnerApiAuth, AuthorizationScope} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  scopes: [AuthorizationScope.MIGRATION],
  accessKeyId: '',
  secretAccessKey: '',
  role: {
    arn: 'arn:aws:iam::…',
  }
})


const client = new AuthorizationApiClient({
  auth,
  region: 'eu'
})
```

### With access token

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: 'Atzr|…',
  accessKeyId: '',
  secretAccessKey: '',
  role: {
    arn: 'arn:aws:iam::…',
  },
})

const client = new AuthorizationApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new AuthorizationApiClient({
  auth,
  region: 'eu',
  rateLimiting: {
    retry: true,
    // Optionally specify a callback that will be called on every retry.
    onRetry: (retryInfo) => {
      console.log(retryInfo)
    },
  },
})
```

The rate limits used for each route are specified in the [API documentation]((https://github.com/amzn/selling-partner-api-docs/tree/main/references/authorization-api/authorization.md)).

## License

MIT

## Miscellaneous

```
    ╚⊙ ⊙╝
  ╚═(███)═╝
 ╚═(███)═╝
╚═(███)═╝
 ╚═(███)═╝
  ╚═(███)═╝
   ╚═(███)═╝
```
