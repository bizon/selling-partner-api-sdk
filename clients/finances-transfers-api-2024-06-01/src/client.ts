import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FinancesTransfersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/finances\/transfers\/2024\u{2D}06\u{2D}01\/payouts$/v,
    rate: 0.017,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/finances\/transfers\/2024\u{2D}06\u{2D}01\/paymentMethods$/v,
    rate: 0.5,
    burst: 30,
  },
]

export class FinancesTransfersApiClient extends FinancesTransfersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
