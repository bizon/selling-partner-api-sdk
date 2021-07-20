/* eslint-disable prefer-regex-literals */
import {Configuration, VendorInvoiceApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {VendorDirectFulfillmentPaymentsApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/vendor/directFulfillment/payments/v1/invoices$'),
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

export class VendorDirectFulfillmentPaymentsApiClient extends VendorInvoiceApi {
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
      throw new VendorDirectFulfillmentPaymentsApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

