/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, MerchantFulfillmentApi} from './api-model'
import {MerchantFulfillmentApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/eligibleServices$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/eligibleShippingServices$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/mfn/v0/shipments/[^/]*/cancel$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/shipments$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/sellerInputs$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/mfn/v0/additionalSellerInputs$'),
    rate: 1,
    burst: 1,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class MerchantFulfillmentApiClient extends MerchantFulfillmentApi {
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
      throw new MerchantFulfillmentApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

