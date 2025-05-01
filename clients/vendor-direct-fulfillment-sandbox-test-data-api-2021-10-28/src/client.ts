import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDirectFulfillmentSandboxTestDataApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class VendorDirectFulfillmentSandboxTestDataApiClient extends VendorDirectFulfillmentSandboxTestDataApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
