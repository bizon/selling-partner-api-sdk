/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, MerchantFulfillmentApi} from './api-model'
import {MerchantFulfillmentApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/eligibleServices$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/eligibleShippingServices$'),
    rate: 5,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*/cancel$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/shipments$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/sellerInputs$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/additionalSellerInputs$'),
    rate: 1,
    burst: 1,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class MerchantFulfillmentApiClient extends MerchantFulfillmentApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new MerchantFulfillmentApiError(`Unknown region: ${parameters.region}`)
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
