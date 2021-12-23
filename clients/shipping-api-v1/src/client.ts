/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model'
import {ShippingApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/cancel$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/purchaseLabels$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/label$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/purchaseShipment$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/rates$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/account$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/tracking/[^/]*$'),
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

export class ShippingApiClient extends ShippingApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new ShippingApiError(`Unknown region: ${parameters.region}`)
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
