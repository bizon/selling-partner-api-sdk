import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/shipments\/rates$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/shipments\/directPurchase$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/shipments$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/oneClickShipment$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/tracking$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/shipments\/[^\/]*\/documents$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/shipments\/[^\/]*\/cancel$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/shipments\/additionalInputs\/schema$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/carrierAccountFormInputs$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/carrierAccounts$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/carrierAccounts\/[^\/]*$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/carrierAccounts\/[^\/]*$/v,
    rate: 5,
    burst: 10,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/carrierAccounts\/[^\/]*\/unlink$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/collectionForms$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/collectionForms\/history$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'put',
    urlRegex: /^\/shipping\/v2\/unmanifestedShipments$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/collectionForms\/[^\/]*$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'get',
    urlRegex: /^\/shipping\/v2\/accessPoints$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/ndrFeedback$/v,
    rate: 80,
    burst: 100,
  },
  {
    method: 'post',
    urlRegex: /^\/shipping\/v2\/claims$/v,
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
