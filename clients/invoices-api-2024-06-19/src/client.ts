import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, InvoicesApi} from './api-model'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/attributes$'),
    rate: 1,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/documents/[^/]*$'),
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/exports$'),
    rate: 0.167,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/exports$'),
    rate: 0.1,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/exports/[^/]*$'),
    rate: 2,
    burst: 15,
  },
  {
    method: 'post',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/governmentInvoiceRequests$'),
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/governmentInvoiceRequests$'),
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/governmentInvoiceRequests/[^/]*$'),
    rate: 0.0167,
    burst: 1,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/invoices$'),
    rate: 0.1,
    burst: 20,
  },
  {
    method: 'get',
    // eslint-disable-next-line prefer-regex-literals
    urlRegex: new RegExp('^/tax/invoices/2024-06-19/invoices/[^/]*$'),
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
