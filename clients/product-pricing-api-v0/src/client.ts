import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductPricingApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/pricing/v0/price$'),
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/pricing/v0/competitivePrice$'),
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/pricing/v0/listings/[^/]*/offers$'),
    rate: 1,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/products/pricing/v0/items/[^/]*/offers$'),
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/batches/products/pricing/v0/itemOffers$'),
    rate: 0.1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/batches/products/pricing/v0/listingOffers$'),
    rate: 0.5,
    burst: 1,
  },
]

export class ProductPricingApiClient extends ProductPricingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
