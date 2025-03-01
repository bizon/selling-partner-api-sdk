import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments/rates$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments/directPurchase$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/oneClickShipment$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/tracking$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments/[^/]*/documents$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments/[^/]*/cancel$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/shipments/additionalInputs/schema$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/carrierAccountFormInputs$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/carrierAccounts$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/carrierAccounts/[^/]*$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/carrierAccounts/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/carrierAccounts/[^/]*/unlink$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/collectionForms$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/collectionForms/history$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/unmanifestedShipments$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/collectionForms/[^/]*$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/accessPoints$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/ndrFeedback$'),
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/shipping/v2/claims$'),
    rate: 80,
    burst: 100,
  },
]

export class ShippingApiClient extends ShippingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
