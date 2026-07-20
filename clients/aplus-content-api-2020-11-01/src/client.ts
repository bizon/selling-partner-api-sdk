import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AplusContentApi, Configuration} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*\/asins$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*\/asins$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentAsinValidations$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/aplus\/2020-11-01\/contentPublishRecords$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*\/approvalSubmissions$/v,
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/aplus\/2020-11-01\/contentDocuments\/[^\/]*\/suspendSubmissions$/v,
    rate: 10,
    burst: 10,
  },
]

export class AplusContentApiClient extends AplusContentApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
