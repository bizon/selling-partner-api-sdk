/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, CatalogApi} from './api-model'
import {CatalogItemsApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/catalog/v0/items$'),
    rate: 6,
    burst: 40,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/catalog/v0/items/[^/]*$'),
    rate: 2,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/catalog/v0/categories$'),
    rate: 1,
    burst: 40,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class CatalogItemsApiClient extends CatalogApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new CatalogItemsApiError(`Unknown region: ${parameters.region}`)
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

