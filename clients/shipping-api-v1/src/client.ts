import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/shipments$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v1\/shipments\/[^\/]*$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/shipments\/[^\/]*\/cancel$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/shipments\/[^\/]*\/purchaseLabels$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/shipments\/[^\/]*\/containers\/[^\/]*\/label$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/purchaseShipment$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v1\/rates$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v1\/account$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v1\/tracking\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
]

export class ShippingApiClient extends ShippingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
