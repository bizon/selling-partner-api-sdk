import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, NotificationsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/notifications\/v1\/subscriptions\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/notifications\/v1\/subscriptions\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: /^\/notifications\/v1\/subscriptions\/[^\/]*\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    urlRegex: /^\/notifications\/v1\/subscriptions\/[^\/]*\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/notifications\/v1\/subscriptions\/[^\/]*\/testNotification$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: /^\/notifications\/v1\/destinations$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/notifications\/v1\/destinations$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: /^\/notifications\/v1\/destinations\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    urlRegex: /^\/notifications\/v1\/destinations\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
]

export class NotificationsApiClient extends NotificationsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
