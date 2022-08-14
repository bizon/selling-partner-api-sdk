import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {AplusContentApi, Configuration} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/asins$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentAsinValidations$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentPublishRecords$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/approvalSubmissions$'),
    rate: 10,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/aplus/2020-11-01/contentDocuments/[^/]*/suspendSubmissions$'),
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
