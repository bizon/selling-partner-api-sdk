import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentPaymentsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/payments\/v1\/invoices$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentPaymentsApiClient extends VendorDirectFulfillmentPaymentsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
