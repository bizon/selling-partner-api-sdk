import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FinancesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/finances\/2024\u{2D}06\u{2D}19\/transactions$/v,
    rate: 0.5,
    burst: 10,
  },
]

export class FinancesApiClient extends FinancesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
