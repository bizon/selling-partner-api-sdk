import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, UploadsApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/uploads\/2020\u{2D}11\u{2D}01\/uploadDestinations\/[^\/]*$/v,
    rate: 10,
    burst: 10,
  },
]

export class UploadsApiClient extends UploadsApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
