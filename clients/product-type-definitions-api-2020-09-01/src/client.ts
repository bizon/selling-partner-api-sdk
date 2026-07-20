import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductTypeDefinitionsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/definitions\/2020\u{2D}09\u{2D}01\/productTypes$/v,
    rate: 5,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/definitions\/2020\u{2D}09\u{2D}01\/productTypes\/[^\/]*$/v,
    rate: 5,
    burst: 10,
  },
]

export class ProductTypeDefinitionsApiClient extends ProductTypeDefinitionsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
