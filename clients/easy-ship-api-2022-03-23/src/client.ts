import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, EasyShipApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/easyShip\/2022\u{2D}03\u{2D}23\/timeSlot$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    urlRegex: /^\/easyShip\/2022\u{2D}03\u{2D}23\/package$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/easyShip\/2022\u{2D}03\u{2D}23\/package$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'patch',
    urlRegex: /^\/easyShip\/2022\u{2D}03\u{2D}23\/package$/v,
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    urlRegex: /^\/easyShip\/2022\u{2D}03\u{2D}23\/packages\/bulk$/v,
    rate: 1,
    burst: 5,
  },
]

export class EasyShipApiClient extends EasyShipApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
