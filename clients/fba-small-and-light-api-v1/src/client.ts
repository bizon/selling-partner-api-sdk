/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, SmallAndLightApi} from './api-model'
import {FbaSmallAndLightApiError} from './error'

export const clientRateLimits: RateLimit[] = [
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
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class FbaSmallAndLightApiClient extends SmallAndLightApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new FbaSmallAndLightApiError(`Unknown region: ${parameters.region}`)
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

