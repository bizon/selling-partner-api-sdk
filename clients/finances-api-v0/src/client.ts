import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FinancesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/finances\/v0\/financialEventGroups$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/finances\/v0\/financialEventGroups\/[^\/]*\/financialEvents$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/finances\/v0\/orders\/[^\/]*\/financialEvents$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/finances\/v0\/financialEvents$/v,
    rate: 0.5,
    burst: 30,
  },
]

export class FinancesApiClient extends FinancesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
