/* eslint-disable prefer-regex-literals, no-floating-decimal, unicorn/no-zero-fractions */
import {Configuration, DefaultApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {FinancesApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/finances/v0/financialEventGroups$'),
    rate: 0.5,
    burst: 30
  },
  {
    urlRegex: new RegExp('^/finances/v0/financialEventGroups/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30
  },
  {
    urlRegex: new RegExp('^/finances/v0/orders/[^/]*/financialEvents$'),
    rate: 0.5,
    burst: 30
  },
  {
    urlRegex: new RegExp('^/finances/v0/financialEvents$'),
    rate: 0.5,
    burst: 30
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class FinancesApiClient extends DefaultApi {
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
      throw new FinancesApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

