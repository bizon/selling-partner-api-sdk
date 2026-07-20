import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AmazonWarehousingAndDistributionApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/inboundOrders$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inboundOrders\/[^\/]*$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'put',
    urlRegex: /^\/awd\/2024-05-09\/inboundOrders\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/inboundOrders\/[^\/]*\/cancellation$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/inboundOrders\/[^\/]*\/confirmation$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inboundShipments\/[^\/]*$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inboundShipments\/[^\/]*\/labels$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inboundShipments\/[^\/]*\/labelPageTypes$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'put',
    urlRegex: /^\/awd\/2024-05-09\/inboundShipments\/[^\/]*\/transport$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/inboundEligibility$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inboundShipments$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/inventory$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/outboundOrders$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/outboundOrders$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/awd\/2024-05-09\/outboundOrders\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    urlRegex: /^\/awd\/2024-05-09\/outboundOrders\/[^\/]*$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/awd\/2024-05-09\/outboundOrders\/[^\/]*\/confirmation$/v,
    rate: 1,
    burst: 1,
  },
]

export class AmazonWarehousingAndDistributionApiClient extends AmazonWarehousingAndDistributionApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
