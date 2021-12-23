/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, ProductPricingApi} from './api-model'
import {ProductPricingApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/products/pricing/v0/price$'),
    rate: 10,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/products/pricing/v0/competitivePrice$'),
    rate: 10,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/products/pricing/v0/listings/[^/]*/offers$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/products/pricing/v0/items/[^/]*/offers$'),
    rate: 5,
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

export class ProductPricingApiClient extends ProductPricingApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new ProductPricingApiError(`Unknown region: ${parameters.region}`)
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
