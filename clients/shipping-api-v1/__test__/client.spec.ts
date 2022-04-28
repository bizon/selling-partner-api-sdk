import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {createAxiosInstance, type ClientConfiguration} from '@sp-api-sdk/common'

import {ShippingApiClient, clientRateLimits} from '../src/client'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuth: jest.fn(() => ({
    accessToken: {
      get: jest.fn(() => 'FAKE_ACCESS_TOKEN'),
    },
    getCredentials: jest.fn(),
  })),
}))

jest.mock('@sp-api-sdk/common', () => ({
  ...jest.requireActual('@sp-api-sdk/common'),
  createAxiosInstance: jest.fn(() => ({axios: undefined, enpoint: undefined})),
}))

describe('src/client', () => {
  it('should create a client instance', () => {
    const configuration: ClientConfiguration = {
      auth: new SellingPartnerApiAuth({refreshToken: ''}),
      region: 'eu',
      userAgent: 'USER_AGENT',
      sandbox: false,
    }

    const client = new ShippingApiClient(configuration)

    expect(createAxiosInstance).toBeCalledTimes(1)
    expect((createAxiosInstance as jest.Mock).mock.calls[0]).toEqual([
      configuration,
      clientRateLimits,
    ])

    expect(client).toBeInstanceOf(ShippingApiClient)
  })
})
