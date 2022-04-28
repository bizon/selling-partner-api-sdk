import {createAxiosInstance, type ClientConfiguration, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, VendorDFSandboxApi} from './api-model'

export const clientRateLimits: RateLimit[] = []

export class VendorDirectFulfillmentSandboxTestDataApiClient extends VendorDFSandboxApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
