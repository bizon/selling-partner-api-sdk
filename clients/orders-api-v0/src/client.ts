import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersV0Api} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/buyerInfo$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/address$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems/buyerInfo$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/regulatedInfo$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'patch',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/regulatedInfo$'),
    rate: 0.0055,
    burst: 20,
  },
]

export class OrdersApiClient extends OrdersV0Api {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
