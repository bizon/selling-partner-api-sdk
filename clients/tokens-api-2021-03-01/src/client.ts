/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, TokensApi} from './api-model'
import {TokensApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/tokens/2021-03-01/restrictedDataToken$'),
    rate: 1,
    burst: 10,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class TokensApiClient extends TokensApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new TokensApiError(`Unknown region: ${parameters.region}`)
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
