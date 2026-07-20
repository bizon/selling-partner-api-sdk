import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentTransactionsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex:
      /^\/vendor\/directFulfillment\/transactions\/2021\u{2D}12\u{2D}28\/transactions\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentTransactionsApiClient extends VendorDirectFulfillmentTransactionsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
