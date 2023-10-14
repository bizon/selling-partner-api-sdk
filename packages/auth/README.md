# `@sp-api-sdk/auth`

Amazon Selling Partner API authentication package

## Installing

- `npm install @sp-api-sdk/auth`

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
  scopes: Object.values(AuthorizationScope), // Or choose the only ones you need
});

const accessToken = await auth.getAccessToken();
```

## Credentials caching

`getAccessToken()` caches the access token for its whole duration, it will only request a new token if the current one has expired.
