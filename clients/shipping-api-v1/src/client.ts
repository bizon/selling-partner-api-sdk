import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/shipments$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/cancel$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/purchaseLabels$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/label$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/purchaseShipment$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/rates$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/account$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v1/tracking/[^/]*$'),
    rate: 1,
    burst: 1,
  },
]

export class ShippingApiClient extends ShippingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
