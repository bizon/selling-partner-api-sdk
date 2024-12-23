import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, DefaultApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/transfers/2024-06-01/payouts$'),
    rate: 0.017,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/finances/transfers/2024-06-01/paymentMethods$'),
    rate: 0.5,
    burst: 30,
  },
]

export class FinancesTransfersApiClient extends DefaultApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
