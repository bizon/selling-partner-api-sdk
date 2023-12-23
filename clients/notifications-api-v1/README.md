# `notifications-api-v1`

The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.

For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).

[![npm version](https://badgen.net/npm/v/@sp-api-sdk/notifications-api-v1)](https://www.npmjs.com/package/@sp-api-sdk/notifications-api-v1)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)

## Documentation

Learn more about this Selling Partner API by visiting the [official documentation](https://developer-docs.amazon.com/sp-api/docs).

Also, see the [generated documentation](https://bizon.github.io/selling-partner-api-sdk/modules/_sp_api_sdk_notifications_api_v1.html) for this API client.

## Installing

```sh
npm install @sp-api-sdk/notifications-api-v1
```

## Getting Started

### With grantless API

```javascript
import {SellingPartnerApiAuth, AuthorizationScope} from '@sp-api-sdk/auth'
import {NotificationsApiClient} from '@sp-api-sdk/notifications-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  scopes: [AuthorizationScope.NOTIFICATIONS],
})


const client = new NotificationsApiClient({
  auth,
  region: 'eu'
})
```

### With access token

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {NotificationsApiClient} from '@sp-api-sdk/notifications-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: process.env.LWA_CLIENT_ID,
  clientSecret: process.env.LWA_CLIENT_SECRET,
  refreshToken: 'Atzr|…',
})

const client = new NotificationsApiClient({
  auth,
  region: 'eu',
})
```

## Rate Limiting

In order to retry rate limited requests (HTTP 429), you can configure the API client as such:

```javascript
const client = new NotificationsApiClient({
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

The rate limits used for each route are specified in the [API documentation](https://developer-docs.amazon.com/sp-api/docs).

## Logging

You can enable logging for both SP-API requests and responses by configuring the `logging.request` and `logging.response` properties.

```javascript
const client = new NotificationsApiClient({
  auth,
  region: 'eu',
  logging: {
    request: {
      logger: console.debug
    },
    response: {
      logger: console.debug
    },
    error: true,
  },
})
```

Specifying `true` will use the default options, specifying an object will allow you to override the default options.  
This uses [axios-logger](https://github.com/hg-pyun/axios-logger) under the hood.  
By default, if enabled, the `request` and `response` loggers will use `console.info` and the `error` logger will use `console.error`.


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
