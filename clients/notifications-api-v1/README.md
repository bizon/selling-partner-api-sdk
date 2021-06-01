# `notifications-api-v1`

The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner&#39;s business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.

## Installing

* `yarn add @sp-api-sdk/notifications-api-v1`
* `npm install @sp-api-sdk/notifications-api-v1`

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

const client = new NotificationsApiClient({
  auth,
  region: 'eu-west-1'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/notifications-api/notifications.md)
