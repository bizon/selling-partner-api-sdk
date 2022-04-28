import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, AuthorizationApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/authorization/v1/authorizationCode$'),
    rate: 1,
    burst: 5,
  },
]

export class AuthorizationApiClient extends AuthorizationApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
