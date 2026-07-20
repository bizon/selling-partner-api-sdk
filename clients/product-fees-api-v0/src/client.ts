import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductFeesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/products\/fees\/v0\/listings\/[^\/]*\/feesEstimate$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex: /^\/products\/fees\/v0\/items\/[^\/]*\/feesEstimate$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex: /^\/products\/fees\/v0\/feesEstimate$/v,
    rate: 0.5,
    burst: 1,
  },
]

export class ProductFeesApiClient extends ProductFeesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
