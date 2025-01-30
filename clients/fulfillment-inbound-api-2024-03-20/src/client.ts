import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FbaInboundApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/boxes$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/cancellation$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/items$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/name$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/boxes$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/items$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingInformation$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingOptions$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/packingOptions$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/pallets$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/placementOptions$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/placementOptions$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/boxes$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/contentUpdatePreviews$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/contentUpdatePreviews$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/deliveryChallanDocument$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/deliveryWindowOptions$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/deliveryWindowOptions$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/confirmation$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/items$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/name$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/pallets$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/sourceAddress$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/trackingDetails$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions$'),
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp(
      '^/inbound/fba/2024-03-20/inboundPlans/[^/]*/transportationOptions/confirmation$',
    ),
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/compliance$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/compliance$'),
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/labels$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/prepDetails$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/items/prepDetails$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/inbound/fba/2024-03-20/operations/[^/]*$'),
    rate: 2,
    burst: 6,
  },
]

export class FulfillmentInboundApiClient extends FbaInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
