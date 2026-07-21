import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentInventoryApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/inventory\/v1\/warehouses\/[^\/]*\/items$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentInventoryApiClient extends VendorDirectFulfillmentInventoryApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
