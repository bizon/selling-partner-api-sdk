import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentOrdersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/orders\/v1\/purchaseOrders$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/orders\/v1\/purchaseOrders\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/orders\/v1\/acknowledgements$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentOrdersApiClient extends VendorDirectFulfillmentOrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
