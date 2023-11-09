import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, DefaultApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/v0/financialEventGroups$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/v0/financialEventGroups/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/v0/orders/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/v0/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/v0/transactions$'),
    rate: 0.5,
    burst: 30,
  },
]

export class FinancesApiClient extends DefaultApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
