# `uploads-api-2020-11-01`

The Selling Partner API for Uploads provides operations that support uploading files.

## Installing

```sh
yarn add @sp-api-sdk/aplus-content-api-2020-11-01
```

```sh
npm install @sp-api-sdk/aplus-content-api-2020-11-01
```

## Getting Started

```javascript
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {UploadsApiClient} from '@sp-api-sdk/uploads-api-2020-11-01'

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

const client = new UploadsApiClient({
  auth,
  region: 'eu'
})
```

## API documentation

See [here](https://github.com/amzn/selling-partner-api-docs/tree/main/references/uploads-api/uploads_2020-11-01.md)
