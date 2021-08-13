/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, onRetry} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit} from '@sp-api-sdk/common'

import {Configuration, ListingsApi} from './api-model'
import {ListingsItemsApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'delete',
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'patch',
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/listings/2020-09-01/items/[^/]*$'),
    rate: 5,
    burst: 10,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ListingsItemsApiClient extends ListingsApi {
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
      throw new ListingsItemsApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

