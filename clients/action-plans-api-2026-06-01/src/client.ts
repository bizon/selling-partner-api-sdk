import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {ActionPlansApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = []

export class ActionPlansApiClient extends ActionPlansApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
