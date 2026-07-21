import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ReplenishmentApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/replenishment\/2022\u{2D}11\u{2D}07\/sellingPartners\/metrics\/search$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/replenishment\/2022\u{2D}11\u{2D}07\/offers\/metrics\/search$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/replenishment\/2022\u{2D}11\u{2D}07\/offers\/search$/v,
    rate: 1,
    burst: 1,
  },
]

export class ReplenishmentApiClient extends ReplenishmentApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
