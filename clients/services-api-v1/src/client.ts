/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, ServiceApi} from './api-model'
import {ServicesApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*$'),
    rate: 20,
    burst: 40,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/cancellations$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/completions$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/service/v1/serviceJobs$'),
    rate: 10,
    burst: 40,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/appointments$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*$'),
    rate: 5,
    burst: 20,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class ServicesApiClient extends ServiceApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new ServicesApiError(`Unknown region: ${parameters.region}`)
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
