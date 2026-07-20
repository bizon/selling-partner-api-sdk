import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders$/v,
    rate: 0.0167,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/buyerInfo$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/address$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/orderItems$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/orderItems\/buyerInfo$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/shipment$/v,
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/regulatedInfo$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'patch',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/regulatedInfo$/v,
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/orders\/v0\/orders\/[^\/]*\/shipmentConfirmation$/v,
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
