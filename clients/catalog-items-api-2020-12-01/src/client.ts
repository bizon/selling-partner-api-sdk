import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {CatalogItemsApi, Configuration} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/catalog/2020-12-01/items$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/catalog/2020-12-01/items/[^/]*$'),
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
