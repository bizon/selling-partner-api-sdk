/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {Configuration, ShippingApi} from './api-model'
import {ShippingApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/cancel$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/purchaseLabels$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/shipments/[^/]*/label$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/purchaseShipment$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/shipping/v1/rates$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/account$'),
    rate: 5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/shipping/v1/tracking/[^/]*$'),
    rate: 1,
    burst: 1,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ShippingApiClient extends ShippingApi {
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
      throw new ShippingApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

