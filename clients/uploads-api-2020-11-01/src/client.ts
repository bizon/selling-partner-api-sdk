import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, UploadsApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/uploads/2020-11-01/uploadDestinations/[^/]*$'),
    rate: 0.1,
    burst: 5,
  },
]

export class UploadsApiClient extends UploadsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
