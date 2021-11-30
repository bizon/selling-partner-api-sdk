/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, OrdersV0Api} from './api-model'
import {OrdersApiError} from './error'

export const clientRateLimits: RateLimit[] = [
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
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class OrdersApiClient extends OrdersV0Api {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new OrdersApiError(`Unknown region: ${parameters.region}`)
    }

    const {rateLimiting, ...clientParameters} = parameters
    const axiosParameters: ClientConfiguration = {
      ...clientParameters,
      region: config.awsRegion,
    }

    if (rateLimiting?.retry) {
      axiosParameters.rateLimits = clientRateLimits
      axiosParameters.onRetry = rateLimiting.onRetry
    }

    const axiosInstance = createAxiosInstance(axiosParameters)
    const configuration = new Configuration()
    const environment = parameters.sandbox ? 'sandbox' : 'production'
    const endpoint = config.endpoints[environment]

    super(configuration, endpoint, axiosInstance)
  }
}

