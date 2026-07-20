import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FeedsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/feeds\/2021-06-30\/feeds$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/feeds\/2021-06-30\/feeds$/v,
    rate: 0.0083,
    burst: 15,
  },
  {
    method: 'delete',
    urlRegex: /^\/feeds\/2021-06-30\/feeds\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/feeds\/2021-06-30\/feeds\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/feeds\/2021-06-30\/documents$/v,
    rate: 0.5,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/feeds\/2021-06-30\/documents\/[^\/]*$/v,
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
