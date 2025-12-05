import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FulfillmentInboundApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class FulfillmentInboundApiClient extends FulfillmentInboundApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
