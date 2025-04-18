import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, MerchantFulfillmentApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/mfn/v0/eligibleShippingServices$'),
    rate: 6,
    burst: 12,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/mfn/v0/shipments$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/mfn/v0/additionalSellerInputs$'),
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
