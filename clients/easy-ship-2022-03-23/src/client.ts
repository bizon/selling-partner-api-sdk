/* eslint-disable prefer-regex-literals */
import {sellingPartnerRegions, createAxiosInstance} from '@sp-api-sdk/common'
import type {
  ClientConfiguration,
  SellingPartnerRegion,
  RateLimit,
  OnRetryHandler,
} from '@sp-api-sdk/common'

import {Configuration, EasyShipApi} from './api-model'
import {EasyShipError} from './error'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: new RegExp('^/easyShip/2022-03-23/timeSlot$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'patch',
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
]

export interface ClientParameters extends Omit<ClientConfiguration, 'rateLimits' | 'onRetry'> {
  region: SellingPartnerRegion
  rateLimiting?: {
    retry: boolean
    onRetry?: OnRetryHandler
  }
}

export class EasyShipClient extends EasyShipApi {
  constructor(parameters: ClientParameters) {
    const config = sellingPartnerRegions[parameters.region]
    if (!config) {
      throw new EasyShipError(`Unknown region: ${parameters.region}`)
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
