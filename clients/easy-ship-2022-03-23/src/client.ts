import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, EasyShipApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/easyShip/2022-03-23/timeSlot$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
  {
    method: 'patch',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/easyShip/2022-03-23/package$'),
    rate: 1,
    burst: 5,
  },
]

export class EasyShipClient extends EasyShipApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
