import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {CatalogItemsApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/catalog\/2020-12-01\/items$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/catalog\/2020-12-01\/items\/[^\/]*$/v,
    rate: 2,
    burst: 2,
  },
]

export class CatalogItemsApiClient extends CatalogItemsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
