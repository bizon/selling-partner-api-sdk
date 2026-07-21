import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShipmentInvoicingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/brazil\/v0\/shipments\/[^\/]*$/v,
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'post',
    urlRegex: /^\/fba\/outbound\/brazil\/v0\/shipments\/[^\/]*\/invoice$/v,
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/brazil\/v0\/shipments\/[^\/]*\/invoice\/status$/v,
    rate: 1.133,
    burst: 25,
  },
]

export class ShipmentInvoicingApiClient extends ShipmentInvoicingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
