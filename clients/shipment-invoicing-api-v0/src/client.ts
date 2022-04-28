import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShipmentInvoiceApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*$'),
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice$'),
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice/status$'),
    rate: 1.133,
    burst: 25,
  },
]

export class ShipmentInvoicingApiClient extends ShipmentInvoiceApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
