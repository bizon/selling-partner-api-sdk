import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, OrdersApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class OrdersApiClient extends OrdersApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
