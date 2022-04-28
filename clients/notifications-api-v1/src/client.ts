import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, NotificationsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
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
