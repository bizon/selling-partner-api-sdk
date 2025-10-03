import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ExternalFulfillmentReturnsApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class ExternalFulfillmentReturnsApiClient extends ExternalFulfillmentReturnsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
