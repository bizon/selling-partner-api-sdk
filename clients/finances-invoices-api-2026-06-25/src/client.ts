import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, FinancesInvoicesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = []

export class FinancesInvoicesApiClient extends FinancesInvoicesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
