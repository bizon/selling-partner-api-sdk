import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FbaInboundEligibilityApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/fba\/inbound\/v1\/eligibility\/itemPreview$/v,
    rate: 1,
    burst: 1,
  },
]

export class FbaInboundEligibilityApiClient extends FbaInboundEligibilityApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
