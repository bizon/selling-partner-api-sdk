import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentInboundApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/prepInstructions$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/shipments\/[^\/]*\/labels$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/shipments\/[^\/]*\/billOfLading$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/shipments$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/shipments\/[^\/]*\/items$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v0\/shipmentItems$/v,
    rate: 2,
    burst: 30,
  },
]

export class FulfillmentInboundApiClient extends FulfillmentInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
