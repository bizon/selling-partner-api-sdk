/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, NotificationsApi} from './api-model'
import {NotificationsApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/notifications/v1/subscriptions/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/notifications/v1/destinations$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/notifications/v1/destinations/[^/]*$'),
    rate: 1,
    burst: 5,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
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

