import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentOutboundApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/preview$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/deliveryOfferings$'),
    rate: 5,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/deliveryOffers$'),
    rate: 5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/tracking$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/returnReasonCodes$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/return$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/cancel$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
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
