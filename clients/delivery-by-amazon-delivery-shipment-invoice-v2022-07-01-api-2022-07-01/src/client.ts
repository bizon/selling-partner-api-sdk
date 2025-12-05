import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, DeliveryByAmazonDeliveryShipmentInvoiceV20220701Api} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/delivery/2022-07-01/invoice$'),
    rate: 1.133,
    burst: 25,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/delivery/2022-07-01/invoice/status$'),
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
