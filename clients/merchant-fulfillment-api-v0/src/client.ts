import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, MerchantFulfillmentApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/mfn\/v0\/eligibleShippingServices$/v,
    rate: 6,
    burst: 12,
  },
  {
    method: 'get',
    urlRegex: /^\/mfn\/v0\/shipments\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'delete',
    urlRegex: /^\/mfn\/v0\/shipments\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/mfn\/v0\/shipments$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex: /^\/mfn\/v0\/additionalSellerInputs$/v,
    rate: 1,
    burst: 1,
  },
]

export class MerchantFulfillmentApiClient extends MerchantFulfillmentApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
