/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {ClientConfiguration, SellingPartnerRegion, RateLimit, OnRetryHandler} from '@sp-api-sdk/common'

import {Configuration, MessagingApi} from './api-model'
import {MessagingApiError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmCustomizationDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmDeliveryDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/legalDisclosure$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/negativeFeedbackRemoval$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmOrderDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/confirmServiceDetails$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/amazonMotors$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/warranty$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/attributes$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/digitalAccessKey$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/messaging/v1/orders/[^/]*/messages/unexpectedProblem$'),
    rate: 1,
    burst: 5,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion;
  rateLimiting?: {
    retry: boolean;
    onRetry?: OnRetryHandler;
  };
}

export class MessagingApiClient extends MessagingApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new MessagingApiError(`Unknown region: ${parameters.region}`)
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

