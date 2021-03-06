import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorShippingLabelsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/2021-12-28/shippingLabels$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/2021-12-28/shippingLabels$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/2021-12-28/shippingLabels/[^/]*$'),
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentShippingApiClient extends VendorShippingLabelsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
