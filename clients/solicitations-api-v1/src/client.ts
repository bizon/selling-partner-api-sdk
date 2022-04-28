import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, SolicitationsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/solicitations/v1/orders/[^/]*$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp(
      '^/solicitations/v1/orders/[^/]*/solicitations/productReviewAndSellerFeedback$',
    ),
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
