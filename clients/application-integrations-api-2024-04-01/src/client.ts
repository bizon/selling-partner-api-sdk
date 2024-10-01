import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AppIntegrationsApi, Configuration} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/appIntegrations/2024-04-01/notifications$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/appIntegrations/2024-04-01/notifications/deletion$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/appIntegrations/2024-04-01/notifications/[^/]*/feedback$'),
    rate: 1,
    burst: 5,
  },
]

export class ApplicationIntegrationsApiClient extends AppIntegrationsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
