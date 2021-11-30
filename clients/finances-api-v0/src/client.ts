/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, DefaultApi} from './api-model'
import {FinancesApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/finances/v0/financialEventGroups$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/finances/v0/financialEventGroups/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/finances/v0/orders/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/finances/v0/financialEvents$'),
    rate: 0.5,
    burst: 30,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class FinancesApiClient extends DefaultApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new FinancesApiError(`Unknown region: ${parameters.region}`)
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

