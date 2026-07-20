import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentShippingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shippingLabels$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shippingLabels$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shippingLabels\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shippingLabels\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shipmentConfirmations$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/shipmentStatusUpdates$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/customerInvoices$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/customerInvoices\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/packingSlips$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/packingSlips\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/vendor\/directFulfillment\/shipping\/2021-12-28\/containerLabel$/v,
    rate: 10,
    burst: 10,
  },
]

export class VendorDirectFulfillmentShippingApiClient extends VendorDirectFulfillmentShippingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
