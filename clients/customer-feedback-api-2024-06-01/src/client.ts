import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, CustomerFeedbackApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class CustomerFeedbackApiClient extends CustomerFeedbackApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
