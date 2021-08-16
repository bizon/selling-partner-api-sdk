/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, onRetry} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersV0Api} from './api-model'
import {OrdersApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/buyerInfo$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/address$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems$'),
    rate: 0.0055,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/orders/v0/orders/[^/]*/orderItems/buyerInfo$'),
    rate: 0.0055,
    burst: 20,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class OrdersApiClient extends OrdersV0Api {
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
      throw new OrdersApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

