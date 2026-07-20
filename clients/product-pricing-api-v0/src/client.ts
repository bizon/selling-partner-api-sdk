import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ProductPricingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/products\/pricing\/v0\/price$/v,
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/products\/pricing\/v0\/competitivePrice$/v,
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/products\/pricing\/v0\/listings\/[^\/]*\/offers$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/products\/pricing\/v0\/items\/[^\/]*\/offers$/v,
    rate: 0.5,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/batches\/products\/pricing\/v0\/itemOffers$/v,
    rate: 0.1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/batches\/products\/pricing\/v0\/listingOffers$/v,
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
