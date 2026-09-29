import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ExternalFulfillmentLocationApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = []

export class ExternalFulfillmentLocationApiClient extends ExternalFulfillmentLocationApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
