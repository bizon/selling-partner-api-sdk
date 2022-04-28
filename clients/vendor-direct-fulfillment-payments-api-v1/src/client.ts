import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorInvoiceApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/vendor/directFulfillment/payments/v1/invoices$'),
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentPaymentsApiClient extends VendorInvoiceApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
