import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {
  Configuration,
  DeliveryByAmazonDeliveryShipmentInvoiceV20220701Api,
} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    urlRegex: /^\/delivery\/2022-07-01\/invoice$/v,
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'get',
    urlRegex: /^\/delivery\/2022-07-01\/invoice\/status$/v,
    rate: 1.133,
    burst: 25,
  },
]

export class DeliveryByAmazonDeliveryShipmentInvoiceV20220701ApiClient extends DeliveryByAmazonDeliveryShipmentInvoiceV20220701Api {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
