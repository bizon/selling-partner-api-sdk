import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentOutboundApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/previews$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/offers$/v,
    rate: 5,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/orders\/[^\/]*\/cancel$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/orders\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/orders\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/orders$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/fulfillment\/outbound\/2026\u{2D}07\u{2D}04\/orders$/v,
    rate: 2,
    burst: 30,
  },
]

export class FulfillmentOutboundApiClient extends FulfillmentOutboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
