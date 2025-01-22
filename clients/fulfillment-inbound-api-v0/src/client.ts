import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FbaInboundApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/prepInstructions$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/labels$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/billOfLading$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/shipments$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/items$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/inbound/v0/shipmentItems$'),
    rate: 2,
    burst: 30,
  },
]

export class FulfillmentInboundApiClient extends FbaInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
