import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, SolicitationsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/solicitations\/v1\/orders\/[^\/]*$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex:
      /^\/solicitations\/v1\/orders\/[^\/]*\/solicitations\/productReviewAndSellerFeedback$/v,
    rate: 1,
    burst: 5,
  },
]

export class SolicitationsApiClient extends SolicitationsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
