import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ListingsItemsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'delete',
    urlRegex: /^\/listings\/2020-09-01\/items\/[^\/]*$/v,
    rate: 5,
    burst: 10,
  },
  {
    method: 'patch',
    urlRegex: /^\/listings\/2020-09-01\/items\/[^\/]*$/v,
    rate: 5,
    burst: 10,
  },
  {
    method: 'put',
    urlRegex: /^\/listings\/2020-09-01\/items\/[^\/]*$/v,
    rate: 5,
    burst: 10,
  },
]

export class ListingsItemsApiClient extends ListingsItemsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
