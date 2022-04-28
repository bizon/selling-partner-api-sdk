import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorOrdersApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/purchaseOrders$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/purchaseOrders/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/acknowledgements$'),
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentOrdersApiClient extends VendorOrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
