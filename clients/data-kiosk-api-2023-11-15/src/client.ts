import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, DataKioskApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/dataKiosk\/2023\u{2D}11\u{2D}15\/queries$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'post',
    urlRegex: /^\/dataKiosk\/2023\u{2D}11\u{2D}15\/queries$/v,
    rate: 0.0167,
    burst: 15,
  },
  {
    method: 'delete',
    urlRegex: /^\/dataKiosk\/2023\u{2D}11\u{2D}15\/queries\/[^\/]*$/v,
    rate: 0.0222,
    burst: 10,
  },
  {
    method: 'get',
    urlRegex: /^\/dataKiosk\/2023\u{2D}11\u{2D}15\/queries\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
  {
    method: 'get',
    urlRegex: /^\/dataKiosk\/2023\u{2D}11\u{2D}15\/documents\/[^\/]*$/v,
    rate: 0.0167,
    burst: 15,
  },
]

export class DataKioskApiClient extends DataKioskApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
