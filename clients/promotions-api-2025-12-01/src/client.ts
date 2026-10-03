import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, PromotionsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/promotions\/2025\u{2D}12\u{2D}01\/promotions$/v,
    rate: 0.1,
    burst: 4,
  },
  {
    method: 'get',
    urlRegex: /^\/promotions\/2025\u{2D}12\u{2D}01\/promotions\/[^\/]*$/v,
    rate: 0.1,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/promotions\/2025\u{2D}12\u{2D}01\/promotions\/[^\/]*\/selections\/[^\/]*$/v,
    rate: 0.1,
    burst: 2,
  },
]

export class PromotionsApiClient extends PromotionsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
