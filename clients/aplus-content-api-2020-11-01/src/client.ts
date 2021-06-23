/* eslint-disable prefer-regex-literals */
import {Configuration, AplusContentApi} from './api-model'

import {endpoints, awsRegionByCode, createAxiosInstance, ClientConfiguration, onRetry} from '@sp-api-sdk/common'

import {AplusContentApiError} from './error'

export const RATE_LIMITS = [
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentAsinValidations$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentPublishRecords$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/approvalSubmissions$'),
    rate: 10,
    burst: 10
  },
  {
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/suspendSubmissions$'),
    rate: 10,
    burst: 10
  }
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits | onRetry'> {
  rateLimiting?: {
    retry: boolean;
    onRetry?: onRetry;
  };
}

export class AplusContentApiClient extends AplusContentApi {
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
      throw new AplusContentApiError(`Unknown region : ${region}`)
    }

    super(configuration, endpoint, axiosInstance)
  }
}

