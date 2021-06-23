/* eslint-disable prefer-regex-literals, no-floating-decimal, unicorn/no-zero-fractions */
import {Configuration, ShipmentInvoiceApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {ShipmentInvoicingApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*$'),
    rate: 1.133,
    burst: 25
  },
  {
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice$'),
    rate: 1.133,
    burst: 25
  },
  {
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice/status$'),
    rate: 1.133,
    burst: 25
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ShipmentInvoicingApiClient extends ShipmentInvoiceApi {
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
      throw new ShipmentInvoicingApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

