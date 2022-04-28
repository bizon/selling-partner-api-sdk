import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ListingsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'patch',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
]

export class ListingsItemsApiClient extends ListingsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
