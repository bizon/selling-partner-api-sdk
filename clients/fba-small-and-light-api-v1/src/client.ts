/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, onRetry} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit} from '@sp-api-sdk/common'

import {Configuration, SmallAndLightApi} from './api-model'
import {FbaSmallAndLightApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 10,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 5,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/smallAndLight/v1/eligibilities/[^/]*$'),
    rate: 2,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/smallAndLight/v1/feePreviews$'),
    rate: 1,
    burst: 3,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class FbaSmallAndLightApiClient extends SmallAndLightApi {
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
      throw new FbaSmallAndLightApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

