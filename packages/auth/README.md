# `@sp-api-sdk/auth`

Package for simplifying authentication with Selling Partner API

## Installing

* `yarn add @sp-api-sdk/auth`
* `npm install @sp-api-sdk/auth`

## Usage

With [Security Token Service](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html) :

``` javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

const auth = new SellingPartnerApiAuth({
  clientId: '',
  clientSecret: '',
  refreshToken: 'Atzr|...',
  accessKeyId: '',
  secretAccessKey,
  role: {
    arn: roleArn,
    sessionName: 'SellingPartnerAPI'
  },
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
  secretAccessKey,
  user: {
    AccessKeyId: '',
    SecretAccessKey: ''
  }
})

const accessToken = await auth.accessToken.get()
const { AccessKeyId, SecretAccessKey } = await auth.getCredentials()
```

Everytime you get the access token, the class will check before if the token has already been fetch or if it's still valid, if not, it will fetch it.

Same for the given credentials from [Security Token Service](https://docs.aws.amazon.com/STS/latest/APIReference/welcome.html)