/* eslint-disable prefer-regex-literals, no-floating-decimal, unicorn/no-zero-fractions */
import {Configuration, VendorOrdersApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {VendorDirectFulfillmentOrdersApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/purchaseOrders$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/purchaseOrders/[^/]*$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/vendor/directFulfillment/orders/v1/acknowledgements$'),
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

export class VendorDirectFulfillmentOrdersApiClient extends VendorOrdersApi {
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
      throw new VendorDirectFulfillmentOrdersApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

