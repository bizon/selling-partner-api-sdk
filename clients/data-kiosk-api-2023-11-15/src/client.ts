import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, QueriesApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/dataKiosk/2023-11-15/queries$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/dataKiosk/2023-11-15/queries$'),
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'delete',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/dataKiosk/2023-11-15/queries/[^/]*$'),
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/dataKiosk/2023-11-15/queries/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/dataKiosk/2023-11-15/documents/[^/]*$'),
    rate: 0.0167,
    burst: 15,
  },
]

export class DataKioskApiClient extends QueriesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
