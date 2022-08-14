import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FeedsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/feeds$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/feeds$'),
    rate: 0.0083,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/feeds/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/feeds/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/documents$'),
    rate: 0.0083,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/feeds/2020-09-04/documents/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
]

export class FeedsApiClient extends FeedsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
