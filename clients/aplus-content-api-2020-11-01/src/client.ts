/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, AplusContentApi} from './api-model'
import {AplusContentApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentAsinValidations$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentPublishRecords$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/approvalSubmissions$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/suspendSubmissions$'),
    rate: 10,
    burst: 10,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class AplusContentApiClient extends AplusContentApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new AplusContentApiError(`Unknown region: ${parameters.region}`)
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
