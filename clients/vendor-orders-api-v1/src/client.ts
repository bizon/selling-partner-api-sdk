/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorOrdersApi} from './api-model'
import {VendorOrdersApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
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

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class VendorOrdersApiClient extends VendorOrdersApi {
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
      throw new VendorOrdersApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

