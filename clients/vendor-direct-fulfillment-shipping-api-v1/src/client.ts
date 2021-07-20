/* eslint-disable prefer-regex-literals */
import {Configuration, VendorShippingLabelsApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {VendorDirectFulfillmentShippingApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shippingLabels/[^/]*$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shipmentConfirmations$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/shipmentStatusUpdates$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/customerInvoices$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/customerInvoices/[^/]*$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/packingSlips$'),
    rate: 10,
    burst: 10
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/vendor/directFulfillment/shipping/v1/packingSlips/[^/]*$'),
    rate: 10,
    burst: 10
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class VendorDirectFulfillmentShippingApiClient extends VendorShippingLabelsApi {
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
      throw new VendorDirectFulfillmentShippingApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

