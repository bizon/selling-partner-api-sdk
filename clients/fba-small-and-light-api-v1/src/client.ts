import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, SmallAndLightApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 10,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 5,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/smallAndLight/v1/enrollments/[^/]*$'),
    rate: 2,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/smallAndLight/v1/eligibilities/[^/]*$'),
    rate: 2,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/fba/smallAndLight/v1/feePreviews$'),
    rate: 1,
    burst: 3,
  },
]

export class FbaSmallAndLightApiClient extends SmallAndLightApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
