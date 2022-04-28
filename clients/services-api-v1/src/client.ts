import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ServiceApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*$'),
    rate: 20,
    burst: 40,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/cancellations$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/completions$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs$'),
    rate: 10,
    burst: 40,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*/appointments$'),
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/service/v1/serviceJobs/[^/]*$'),
    rate: 5,
    burst: 20,
  },
]

export class ServicesApiClient extends ServiceApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
