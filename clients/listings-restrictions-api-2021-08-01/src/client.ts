import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ListingsRestrictionsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/listings\/2021\u{2D}08\u{2D}01\/restrictions$/v,
    rate: 5,
    burst: 10,
  },
]

export class ListingsRestrictionsApiClient extends ListingsRestrictionsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
