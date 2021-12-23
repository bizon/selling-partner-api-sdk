/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, FbaOutboundApi} from './api-model'
import {FulfillmentOutboundApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/preview$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/tracking$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/returnReasonCodes$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/return$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/fulfillmentOrders/[^/]*/cancel$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
    rate: 2,
    burst: 30,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/fba/outbound/2020-07-01/features/inventory/[^/]*$'),
    rate: 2,
    burst: 30,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class FulfillmentOutboundApiClient extends FbaOutboundApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new FulfillmentOutboundApiError(`Unknown region: ${parameters.region}`)
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
