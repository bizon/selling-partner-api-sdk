import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentOutboundApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders\/preview$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/deliveryOffers$/v,
    rate: 5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/tracking$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/returnReasonCodes$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders\/[^\/]*\/return$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/fulfillmentOrders\/[^\/]*\/cancel$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/features$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/features\/inventory\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/fba\/outbound\/2020\u{2D}07\u{2D}01\/features\/inventory\/[^\/]*\/[^\/]*$/v,
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
