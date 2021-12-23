/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, VendorShippingApi} from './api-model'
import {VendorShipmentsApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/shipping/v1/shipmentConfirmations$'),
    rate: 10,
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

export class VendorShipmentsApiClient extends VendorShippingApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new VendorShipmentsApiError(`Unknown region: ${parameters.region}`)
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
