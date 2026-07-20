import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {ApplicationIntegrationsApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/appIntegrations\/2024-04-01\/notifications$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/appIntegrations\/2024-04-01\/notifications\/deletion$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/appIntegrations\/2024-04-01\/notifications\/[^\/]*\/feedback$/v,
    rate: 1,
    burst: 5,
  },
]

export class ApplicationIntegrationsApiClient extends ApplicationIntegrationsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
