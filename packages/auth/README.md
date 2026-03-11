# `@sp-api-sdk/auth`

[![npm version](https://img.shields.io/npm/v/@sp-api-sdk/auth)](https://www.npmjs.com/package/@sp-api-sdk/auth)
[![XO code style](https://img.shields.io/badge/code_style-xo-cyan)](https://github.com/xojs/xo)

Amazon Selling Partner API authentication package

[<img src="https://files.bizon.solutions/images/logo/bizon-horizontal.png" alt="Bizon" width="250"/>](https://www.bizon.solutions?utm_source=github&utm_medium=readme&utm_campaign=selling-partner-api-sdk)

## Installing

```sh
npm install @sp-api-sdk/auth
```

## Usage

The `SellingPartnerApiAuth` class handles OAuth token acquisition from Login with Amazon (LWA). You must provide exactly one of `refreshToken` or `scopes`.

```javascript
import { SellingPartnerApiAuth } from "@sp-api-sdk/auth";

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: "Atzr|…",
});

const accessToken = await auth.getAccessToken();
```

## Default values from the environment

These constructor options can be passed using environment variables:

| Property Name  | Environment variable |
| -------------- | -------------------- |
| `clientId`     | `LWA_CLIENT_ID`      |
| `clientSecret` | `LWA_CLIENT_SECRET`  |
| `refreshToken` | `LWA_REFRESH_TOKEN`  |

## Grantless APIs support

Some APIs (e.g. Notifications API) require grantless authentication, which is done by passing scopes instead of a refresh token.
The available scopes are exposed in the `AuthorizationScope` enum from this library.

```javascript
import { SellingPartnerApiAuth, AuthorizationScope } from "@sp-api-sdk/auth";
import { NotificationsApiClient } from "@sp-api-sdk/notifications-api-v1";

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  scopes: [AuthorizationScope.NOTIFICATIONS],
});

const client = new NotificationsApiClient({
  auth,
  region: "eu",
});
```

Available scopes:

- `AuthorizationScope.NOTIFICATIONS` - For the Notifications API
- `AuthorizationScope.CLIENT_CREDENTIAL_ROTATION` - For client credential rotation

## Credentials caching

`getAccessToken()` caches the access token in memory for its whole duration, it will only request a new token if the current one has expired.

## Subclassing

You can subclass `SellingPartnerApiAuth` to add custom logic, for example, caching the access token in an external store.

The protected `accessTokenExpiration` getter provides the current token's expiration date, which is useful for setting TTLs in your cache.

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

## Error handling

Authentication errors are thrown as `SellingPartnerApiAuthError` instances, which extend `AxiosError`.

```javascript
import { SellingPartnerApiAuth, SellingPartnerApiAuthError } from "@sp-api-sdk/auth";

try {
  const accessToken = await auth.getAccessToken();
} catch (error) {
  if (error instanceof SellingPartnerApiAuthError) {
    console.error(error.message); // e.g. "access-token error: Response code 401"
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
