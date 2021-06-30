# `@sp-api-sdk/auth`

Package for simplifying authentication with Selling Partner API

## Installing

* `yarn add @sp-api-sdk/auth`
* `npm install @sp-api-sdk/auth`

## Usage

### Default values from environnement

Property Name | Environnement variable
-------|--------------|-----
clientId | LWA_CLIENT_ID
clientSecret | LWA_CLIENT_SECRET
accessKeyId | AWS_ACCESS_KEY_ID
secretAccessKey | AWS_SECRET_ACCESS_KEY
role.arn | AWS_ROLE_ARN
role.sessionName | AWS_ROLE_SESSION_NAME

### With [Security Token Service](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)

``` javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: 'Atzr|...',
  accessKeyId: '',
  secretAccessKey: '',
  role: {
    arn: roleArn,
    sessionName: 'SellingPartnerAPI' // Optional
  },
})

const accessToken = await auth.accessToken.get()
const { AccessKeyId, SecretAccessKey, SessionToken } = await auth.getCredentials()
```

### With scopes (for grantless APIs):

```javascript
import {SellingPartnerApiAuth, AuthorizationScope} from '@sp-api-sdk/auth'
import {AuthorizationApiClient} from '@sp-api-sdk/authorization-api-v1'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  scopes: Object.values(AuthorizationScope), // Or choose the only ones you need
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
  role: {
    arn: '',
  }
})

const accessToken = await auth.accessToken.get()
const { AccessKeyId, SecretAccessKey, SessionToken } = await auth.getCredentials()
```

With an AWS user :

``` javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: 'Atzr|...',
  accessKeyId: '',
  secretAccessKey: ''
})

const accessToken = await auth.accessToken.get()
const { AccessKeyId, SecretAccessKey } = await auth.getCredentials()
```

Everytime you get the access token, the class will check before if the token has already been fetched or if it's still valid, if not, it will fetch it.

Same for the given credentials from [Security Token Service](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)
