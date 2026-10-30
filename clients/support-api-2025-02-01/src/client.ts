import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, SupportApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/support\/2025\u{2D}02\u{2D}01\/cases$/v,
    rate: 0.1,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/support\/2025\u{2D}02\u{2D}01\/cases\/[^\/]*$/v,
    rate: 0.1,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/support\/2025\u{2D}02\u{2D}01\/cases\/[^\/]*\/contacts$/v,
    rate: 0.1,
    burst: 10,
  },
]

export class SupportApiClient extends SupportApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
