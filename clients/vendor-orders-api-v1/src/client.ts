/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, VendorOrdersApi} from './api-model'
import {VendorOrdersApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/orders/v1/purchaseOrders$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/orders/v1/purchaseOrders/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/orders/v1/acknowledgements$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/orders/v1/purchaseOrdersStatus$'),
    rate: 10,
    burst: 10,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class VendorOrdersApiClient extends VendorOrdersApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new VendorOrdersApiError(`Unknown region: ${parameters.region}`)
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

