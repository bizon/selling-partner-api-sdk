/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {Configuration, ServiceApi} from './api-model'
import {ServicesApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
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

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ServicesApiClient extends ServiceApi {
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
      throw new ServicesApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

