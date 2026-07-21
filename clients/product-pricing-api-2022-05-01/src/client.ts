import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductPricingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex:
      /^\/batches\/products\/pricing\/2022\u{2D}05\u{2D}01\/offer\/featuredOfferExpectedPrice$/v,
    rate: 0.033,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/batches\/products\/pricing\/2022\u{2D}05\u{2D}01\/items\/competitiveSummary$/v,
    rate: 0.033,
    burst: 1,
  },
]

export class ProductPricingApiClient extends ProductPricingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
