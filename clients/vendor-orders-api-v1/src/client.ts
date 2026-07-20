import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorOrdersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/vendor\/orders\/v1\/purchaseOrders$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/orders\/v1\/purchaseOrders\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/orders\/v1\/acknowledgements$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/orders\/v1\/purchaseOrdersStatus$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorOrdersApiClient extends VendorOrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
