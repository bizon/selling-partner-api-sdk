/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, ShipmentInvoiceApi} from './api-model'
import {ShipmentInvoicingApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*$'),
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice$'),
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/brazil/v0/shipments/[^/]*/invoice/status$'),
    rate: 1.133,
    burst: 25,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class ShipmentInvoicingApiClient extends ShipmentInvoiceApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new ShipmentInvoicingApiError(`Unknown region: ${parameters.region}`)
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

