import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductFeesApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/fees/v0/listings/[^/]*/feesEstimate$'),
    rate: 1,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/fees/v0/items/[^/]*/feesEstimate$'),
    rate: 1,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/fees/v0/feesEstimate$'),
    rate: 0.5,
    burst: 1,
  },
]

export class ProductFeesApiClient extends ProductFeesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
