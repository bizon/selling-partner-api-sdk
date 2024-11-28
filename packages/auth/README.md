# `@sp-api-sdk/auth`

Amazon Selling Partner API authentication package

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/auth)](https://www.npmjs.com/package/@sp-api-sdk/auth)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Installing

```sh
npm install @sp-api-sdk/auth
```

## Default values from the environment

These constructor options can be passed using environment variables:

| Property Name  | Environement variable |
| -------------- | --------------------- |
| `clientId`     | LWA_CLIENT_ID         |
| `clientSecret` | LWA_CLIENT_SECRET     |
| `refreshToken` | LWA_REFRESH_TOKEN     |

## Grantless APIs support

Some APIs require grantless authentication, which is done by passing scopes, instead of a refresh token.
The available scopes are exposed in the `AuthorizationScope` enum from this library.

```javascript
import { SellingPartnerApiAuth, AuthorizationScope } from "@sp-api-sdk/auth";
import { AuthorizationApiClient } from "@sp-api-sdk/authorization-api-v1";

const auth = new SellingPartnerApiAuth({
  clientId: "",
  clientSecret: "",
  scopes: [AuthorizationScope.NOTIFICATIONS, AuthorizationScope.CLIENT_CREDENTIAL_ROTATION], // Or choose the only ones you need
});

const accessToken = await auth.getAccessToken();
```

## Credentials caching

`getAccessToken()` caches the access token in memory for its whole duration, it will only request a new token if the current one has expired.

## Subclassing

You can subclass `SellingPartnerApiAuth` to add custom logic, for example, caching the access token in a store.

```typescript
import { SellingPartnerApiAuth } from "@sp-api-sdk/auth";

import { storeToken, getToken } from "./token-store";

class StoredSellingPartnerApiAuth extends SellingPartnerApiAuth {
  async getAccessToken() {
    let token = await getToken();
    if (token) {
      return token;
    }

    token = await super.getAccessToken();
    await storeToken(token, { ttl: this.accessTokenExpiration });

    return token;
  }
}
```

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
