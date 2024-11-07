import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders$'),
    rate: 0.0167,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/buyerInfo$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/address$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems/buyerInfo$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/shipment$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/regulatedInfo$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'patch',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/regulatedInfo$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/shipmentConfirmation$'),
    rate: 2,
    burst: 10,
  },
]

export class OrdersApiClient extends OrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
