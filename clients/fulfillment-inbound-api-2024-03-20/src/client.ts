import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentInboundApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/boxes$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'put',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/cancellation$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/items$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'put',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/name$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingGroups\/[^\/]*\/boxes$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingGroups\/[^\/]*\/items$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingInformation$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingOptions$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingOptions$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/packingOptions\/[^\/]*\/confirmation$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/pallets$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/placementOptions$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/placementOptions$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/placementOptions\/[^\/]*\/confirmation$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/boxes$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/contentUpdatePreviews$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/contentUpdatePreviews$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/contentUpdatePreviews\/[^\/]*$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/contentUpdatePreviews\/[^\/]*\/confirmation$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/deliveryChallanDocument$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/deliveryWindowOptions$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/deliveryWindowOptions$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/deliveryWindowOptions\/[^\/]*\/confirmation$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/items$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/name$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/pallets$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/sourceAddress$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/shipments\/[^\/]*\/trackingDetails$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'get',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/transportationOptions$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/transportationOptions$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'post',
    urlRegex:
      /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/inboundPlans\/[^\/]*\/transportationOptions\/confirmation$/v,
    rate: 2,
    burst: 2,
  },
  {
    method: 'put',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/items\/compliance$/v,
    rate: 2,
    burst: 6,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/items\/labels$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/items\/prepDetails$/v,
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: /^\/inbound\/fba\/2024\u{2D}03\u{2D}20\/operations\/[^\/]*$/v,
    rate: 2,
    burst: 6,
  },
]

export class FulfillmentInboundApiClient extends FulfillmentInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
