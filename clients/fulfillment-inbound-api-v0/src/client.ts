/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, FbaInboundApi} from './api-model'
import {FulfillmentInboundApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
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
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class FulfillmentInboundApiClient extends FbaInboundApi {
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
      throw new FulfillmentInboundApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

