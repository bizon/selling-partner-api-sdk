/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, VendorShippingApi} from './api-model'
import {VendorDirectFulfillmentShippingApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shipmentConfirmations$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shipmentStatusUpdates$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/customerInvoices$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/customerInvoices/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/packingSlips$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/packingSlips/[^/]*$'),
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

export class VendorDirectFulfillmentShippingApiClient extends VendorShippingApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new VendorDirectFulfillmentShippingApiError(`Unknown region: ${parameters.region}`)
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
