import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, MessagingApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmCustomizationDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmDeliveryDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/legalDisclosure$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/negativeFeedbackRemoval$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmOrderDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmServiceDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/amazonMotors$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/warranty$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/attributes$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/digitalAccessKey$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/unexpectedProblem$'),
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
