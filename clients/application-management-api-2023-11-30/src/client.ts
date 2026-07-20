import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {ApplicationManagementApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/applications\/2023\u{2D}11\u{2D}30\/clientSecret$/v,
    rate: 0.0167,
    burst: 1,
  },
]

export class ApplicationManagementApiClient extends ApplicationManagementApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
