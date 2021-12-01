import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import * as SdkCommon from '@sp-api-sdk/common'
import {createAxiosInstance} from '@sp-api-sdk/common'

import {AuthorizationApiClient, clientRateLimits} from '../src/client'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuth: jest.fn(() => ({
    accessToken: {
      get: jest.fn(() => 'FAKE_ACCESS_TOKEN'),
    },
    getCredentials: jest.fn(),
  })),
}))

jest.mock('@sp-api-sdk/common', () => ({
  ...jest.requireActual<typeof SdkCommon>('@sp-api-sdk/common'),
  createAxiosInstance: jest.fn(),
}))

describe('src/client', () => {
  it('should create a client instance', () => {
    const auth = new SellingPartnerApiAuth({refreshToken: ''})
    const client = new AuthorizationApiClient({
      auth,
      region: 'eu',
      userAgent: 'USER_AGENT',
      sandbox: false,
    })

    expect(createAxiosInstance).toBeCalledTimes(1)
    expect((createAxiosInstance as jest.Mock).mock.calls[0][0]).toStrictEqual({
      auth,
      region: 'eu-west-1',
      userAgent: 'USER_AGENT',
      sandbox: false,
    })

    expect(client).toBeInstanceOf(AuthorizationApiClient)
  })

  it('should create a client instant which retry on 429', () => {
    const auth = new SellingPartnerApiAuth({refreshToken: ''})
    const onRetry = () => ''
    const client = new AuthorizationApiClient({
      auth,
      region: 'eu',
      rateLimiting: {retry: true, onRetry},
    })

    expect(createAxiosInstance).toBeCalledTimes(1)
    expect((createAxiosInstance as jest.Mock).mock.calls[0][0]).toStrictEqual({
      auth,
      region: 'eu-west-1',
      rateLimits: clientRateLimits,
      onRetry,
    })

    expect(client).toBeInstanceOf(AuthorizationApiClient)
  })
})
