/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, FbaInboundApi} from './api-model'
import {FulfillmentInboundApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/itemsGuidance$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/inbound/v0/plans$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/preorder$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/preorder/confirm$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/prepInstructions$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/transport$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/transport$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/transport/void$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/transport/estimate$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/transport/confirm$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/labels$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/billOfLading$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipments/[^/]*/items$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/inbound/v0/shipmentItems$'),
    rate: 2,
    burst: 30,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class FulfillmentInboundApiClient extends FbaInboundApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new FulfillmentInboundApiError(`Unknown region: ${parameters.region}`)
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

