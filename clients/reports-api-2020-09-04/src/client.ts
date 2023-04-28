import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ReportsApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class ReportsApiClient extends ReportsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
