import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AwdApi, Configuration} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class AmazonWarehousingAndDistributionClient extends AwdApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
