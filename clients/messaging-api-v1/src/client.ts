import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, MessagingApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/confirmCustomizationDetails$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/confirmDeliveryDetails$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/legalDisclosure$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/confirmOrderDetails$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/confirmServiceDetails$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/warranty$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/attributes$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/digitalAccessKey$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/messaging\/v1\/orders\/[^\/]*\/messages\/unexpectedProblem$/v,
    rate: 1,
    burst: 5,
  },
]

export class MessagingApiClient extends MessagingApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
