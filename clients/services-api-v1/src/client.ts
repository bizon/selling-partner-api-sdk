import {type ClientConfiguration, createAxiosInstance, type RateLimit} from '@sp-api-sdk/common'

import {Configuration, ServicesApi} from './api-model/index.js'

export const clientRateLimits: RateLimit[] = [
  {
    method: 'get',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*$/v,
    rate: 20,
    burst: 40,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/cancellations$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/completions$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/service\/v1\/serviceJobs$/v,
    rate: 10,
    burst: 40,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/appointments$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/resources$/v,
    rate: 1,
    burst: 2,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/fulfillment$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/serviceResources\/[^\/]*\/capacity\/range$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/serviceResources\/[^\/]*\/capacity\/fixed$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/serviceResources\/[^\/]*\/schedules$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/reservation$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'put',
    urlRegex: /^\/service\/v1\/reservation\/[^\/]*$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'delete',
    urlRegex: /^\/service\/v1\/reservation\/[^\/]*$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/service\/v1\/serviceJobs\/[^\/]*\/appointmentSlots$/v,
    rate: 5,
    burst: 20,
  },
  {
    method: 'get',
    urlRegex: /^\/service\/v1\/appointmentSlots$/v,
    rate: 20,
    burst: 40,
  },
  {
    method: 'post',
    urlRegex: /^\/service\/v1\/documents$/v,
    rate: 5,
    burst: 20,
  },
]

export class ServicesApiClient extends ServicesApi {
  constructor(configuration: ClientConfiguration) {
    const {axios, endpoint} = createAxiosInstance(configuration, clientRateLimits)

    super(new Configuration(), endpoint, axios)
  }
}
