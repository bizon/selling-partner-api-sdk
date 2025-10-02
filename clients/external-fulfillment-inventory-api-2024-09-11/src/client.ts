import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ExternalFulfillmentInventoryApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class ExternalFulfillmentInventoryApiClient extends ExternalFulfillmentInventoryApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
