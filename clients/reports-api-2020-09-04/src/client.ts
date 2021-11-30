/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, ReportsApi} from './api-model'
import {ReportsApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'delete',
    urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/reports/2020-09-04/documents/[^/]*$'),
    rate: 0.0167,
    burst: 15,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class ReportsApiClient extends ReportsApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new ReportsApiError(`Unknown region: ${parameters.region}`)
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

