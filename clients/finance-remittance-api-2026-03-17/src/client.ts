import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FinanceRemittanceApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = []

export class FinanceRemittanceApiClient extends FinanceRemittanceApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
