/* eslint-disable prefer-regex-literals */
import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry, RateLimit} from '@sp-api-sdk/common'

import {Configuration, ReportsApi} from './api-model'
import {ReportsApiError} from './error'

export const RATE_LIMITS: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2021-06-30/reports$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/reports/2021-06-30/reports$'),
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/reports/2021-06-30/reports/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2021-06-30/reports/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2021-06-30/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/reports/2021-06-30/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/reports/2021-06-30/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2021-06-30/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2021-06-30/documents/[^/]*$'),
    rate: 0.0167,
    burst: 15,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class ReportsApiClient extends ReportsApi {
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
      throw new ReportsApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

