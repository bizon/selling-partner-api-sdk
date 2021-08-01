# `@sp-api-sdk/auth`

Amazon Selling Partner API authentication helper class

## Installing

* `yarn add @sp-api-sdk/auth`
* `npm install @sp-api-sdk/auth`

## Authentication models

This library supports both authentication models: IAM user credentials, or an IAM role (using [STS](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html) AssumeRole).

### Using an AWS IAM user

``` javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: 'Atzr|...',
  accessKeyId: '',
  secretAccessKey: '',
  sessionToken: '' // If you’re authenticated using temporary credentials
})

const accessToken = await auth.accessToken.get()
const {AccessKeyId, SecretAccessKey} = await auth.getCredentials()
```


### Using an AWS IAM role

``` javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: 'Atzr|...',
  accessKeyId: '',
  secretAccessKey: '',
  region: '', // You can provide an AWS region that will be used for the STS calls
  role: {
    arn: '',
    sessionName: 'SellingPartnerAPI' // Optional
  }
})

const accessToken = await auth.accessToken.get()
const {AccessKeyId, SecretAccessKey, SessionToken} = await auth.getCredentials()
```

`getCredentials` will return a set of temporary security credentials that last for 1 hour.

## Default values from the environment

These constructor options can be passed using environment variables:

| Property Name      | Environement variable  |
|--------------------|------------------------|
| `clientId`         | LWA_CLIENT_ID          |
| `clientSecret`     | LWA_CLIENT_SECRET      |
| `accessKeyId`      | AWS_ACCESS_KEY_ID      |
| `secretAccessKey`  | AWS_SECRET_ACCESS_KEY  |
| `sessionToken`     | AWS_SESSION_TOKEN      |
| `region`           | AWS_DEFAULT_REGION     |
| `role.arn`         | AWS_ROLE_ARN           |
| `role.sessionName` | AWS_ROLE_SESSION_NAME  |


## Grantless APIs support

Some APIs require grantless authentication, which is done by passing scopes, instead of a refresh token.
The available scopes are exposed in the `AuthorizationScope` enum from this library.

```javascript
import {SellingPartnerApiAuth, AuthorizationScope} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  scopes: Object.values(AuthorizationScope), // Or choose the only ones you need
  accessKeyId: '',
  secretAccessKey: ''
})

const accessToken = await auth.accessToken.get()
const credentials = await auth.getCredentials()
```

## Credentials caching

`accessToken.get()` caches the access token for its whole duration, it will only request a new token if the current one has expired.

The same goes for the STS temporary credentials returned by `getCredentials`, the credentials are cached until they expire.

