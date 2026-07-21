import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, SellersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/sellers\/v1\/marketplaceParticipations$/v,
    rate: 0.016,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/sellers\/v1\/account$/v,
    rate: 0.016,
    burst: 15,
  },
]

export class SellersApiClient extends SellersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
