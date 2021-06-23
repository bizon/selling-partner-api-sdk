/* eslint-disable prefer-regex-literals */
import {Configuration, MessagingApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {MessagingApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmCustomizationDetails$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmDeliveryDetails$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/legalDisclosure$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/negativeFeedbackRemoval$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmOrderDetails$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmServiceDetails$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/amazonMotors$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/warranty$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/attributes$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/digitalAccessKey$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/unexpectedProblem$'),
    rate: 1,
    burst: 5
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class MessagingApiClient extends MessagingApi {
  constructor(parameters: ClientParameters) {
    const region = awsRegionByCode[parameters.region] ?? parameters.region
    const {rateLimiting, ...clientParameters} = parameters
    const axiosParameters: ClientConfiguration = {...clientParameters, region}

    if (rateLimiting?.retry) {
      axiosParameters.rateLimits = RATE_LIMITS
      axiosParameters.onRetry = rateLimiting.onRetry
    }

    const axiosInstance = createAxiosInstance(axiosParameters)
    const configuration = new Configuration()
    const environment = parameters.sandbox ? 'sandbox' : 'production'
    const endpoint = endpoints[environment][region]

    if (!endpoint) {
      throw new MessagingApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

