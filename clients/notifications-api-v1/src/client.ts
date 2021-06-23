/* eslint-disable prefer-regex-literals, no-floating-decimal, unicorn/no-zero-fractions */
import {Configuration, NotificationsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {NotificationsApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
    rate: 1,
    burst: 5
  },
  {
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
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

export class NotificationsApiClient extends NotificationsApi {
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
      throw new NotificationsApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

