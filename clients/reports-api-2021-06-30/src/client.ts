import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ReportsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/reports\/2021-06-30\/reports$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/reports\/2021-06-30\/reports$/v,
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'delete',
    urlRegex: /^\/reports\/2021-06-30\/reports\/[^\/]*$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/reports\/2021-06-30\/reports\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/reports\/2021-06-30\/schedules$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/reports\/2021-06-30\/schedules$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'delete',
    urlRegex: /^\/reports\/2021-06-30\/schedules\/[^\/]*$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/reports\/2021-06-30\/schedules\/[^\/]*$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/reports\/2021-06-30\/documents\/[^\/]*$/v,
    rate: 0.0167,
    burst: 15,
  },
]

export class ReportsApiClient extends ReportsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
