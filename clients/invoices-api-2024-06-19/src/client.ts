import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, InvoicesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/attributes$/v,
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/documents\/[^\/]*$/v,
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'post',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/exports$/v,
    rate: 0.167,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/exports$/v,
    rate: 0.1,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/exports\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
  {
    method: 'post',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/governmentInvoiceRequests$/v,
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/governmentInvoiceRequests$/v,
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/governmentInvoiceRequests\/[^\/]*$/v,
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/invoices$/v,
    rate: 0.1,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/tax\/invoices\/2024-06-19\/invoices\/[^\/]*$/v,
    rate: 2,
    burst: 15,
  },
]

export class InvoicesApiClient extends InvoicesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
