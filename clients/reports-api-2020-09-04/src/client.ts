import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ReportsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/reports$'),
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/reports/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/schedules$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/schedules/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/reports/2020-09-04/documents/[^/]*$'),
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
