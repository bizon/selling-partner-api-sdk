import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/orders\/2026-01-01\/orders$/v,
    rate: 0.0056,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/2026-01-01\/orders\/[^\/]*$/v,
    rate: 0.5,
    burst: 30,
  },
]

export class OrdersApiClient extends OrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
