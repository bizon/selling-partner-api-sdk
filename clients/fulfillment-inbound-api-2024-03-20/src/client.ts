import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FbaInboundApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/boxes$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/cancellation$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/items$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingInformation$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingOptions$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingOptions$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/items$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/pallets$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/placementOptions$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/placementOptions$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/deliveryChallanDocument$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/deliveryWindow$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/selfShipAppointmentSlots$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/selfShipAppointmentSlots$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/cancellation$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/schedule$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/trackingDetails$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions$'),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp(
      '^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions/confirmation$',
    ),
    rate: 0.05,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/compliance$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/compliance$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/operations/[^/]*$'),
    rate: 1,
    burst: 1,
  },
]

export class FulfillmentInboundApiClient extends FbaInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
