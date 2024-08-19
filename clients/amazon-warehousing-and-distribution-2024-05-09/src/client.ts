import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AwdApi, Configuration} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundOrders$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundOrders/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundOrders/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundOrders/[^/]*/cancellation$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundOrders/[^/]*/confirmation$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundShipments/[^/]*$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundShipments/[^/]*/labels$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundShipments/[^/]*/transport$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundEligibility$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inboundShipments$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/inventory$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/outboundOrders$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/outboundOrders$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/outboundOrders/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/outboundOrders/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/awd/2024-05-09/outboundOrders/[^/]*/confirmation$'),
    rate: 1,
    burst: 1,
  },
]

export class AmazonWarehousingAndDistributionClient extends AwdApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
