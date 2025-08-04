import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ListingsItemsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2021-08-01/items/[^/]*$'),
    rate: 5,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2021-08-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'patch',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2021-08-01/items/[^/]*$'),
    rate: 5,
    burst: 5,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2021-08-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/listings/2021-08-01/items/[^/]*$'),
    rate: 5,
    burst: 5,
  },
]

export class ListingsItemsApiClient extends ListingsItemsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
