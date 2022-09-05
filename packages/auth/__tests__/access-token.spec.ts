import nock from 'nock'

import {AuthorizationScope, SellingPartnerApiAuthError} from '../src'
import {AccessToken} from '../src/access-token'

describe('src/access-token', () => {
  it('should throw a SellingPartnerApiAuthError if the access-token query errors', async () => {
    nock('https://api.amazon.com')
      .post('/auth/o2/token', {
        client_id: 'CLIENT_ID',
        client_secret: 'CLIENT_SECRET',
        grant_type: 'refresh_token',
        refresh_token: 'REFRESH_TOKEN',
      })
      .reply(402, {
        fail: true,
        someMessage: 'this is an error',
      })

    const factory = new AccessToken({
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
      refreshToken: 'REFRESH_TOKEN',
    })

    let authError: SellingPartnerApiAuthError
    try {
      await factory.get()
    } catch (error: unknown) {
      if (error instanceof SellingPartnerApiAuthError) {
        authError = error
      }
    }

    expect(authError!.message).toBe('access-token error: Response code 402')
    expect(authError!.response!.data).toEqual({
      fail: true,
      someMessage: 'this is an error',
    })
  })

  it('should throw a SellingPartnerApiAuthError if the access-token query doesn’t respond', async () => {
    nock('https://api.amazon.com')
      .post('/auth/o2/token', {
        client_id: 'CLIENT_ID',
        client_secret: 'CLIENT_SECRET',
        grant_type: 'client_credentials',
        scope: AuthorizationScope.MIGRATION,
      })
      .replyWithError('unknown error')

    const factory = new AccessToken({
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
      scopes: [AuthorizationScope.MIGRATION],
    })

    let authError: SellingPartnerApiAuthError
    try {
      await factory.get()
    } catch (error: unknown) {
      if (error instanceof SellingPartnerApiAuthError) {
        authError = error
      }
    }

    expect(authError!.message).toBe('access-token error: No response')
  })

  const sharedFactory = new AccessToken({
    clientId: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    refreshToken: 'REFRESH_TOKEN',
  })

  it('should return an access token', async () => {
    nock('https://api.amazon.com')
      .post('/auth/o2/token', {
        client_id: 'CLIENT_ID',
        client_secret: 'CLIENT_SECRET',
        grant_type: 'refresh_token',
        refresh_token: 'REFRESH_TOKEN',
      })
      .reply(200, {
        access_token: 'ACCESS_TOKEN',
        refresh_token: 'REFRESH_TOKEN',
        token_type: 'access_token',
        expires_in: 3600,
      })

    await expect(sharedFactory.get()).resolves.toEqual('ACCESS_TOKEN')
  })

  it('should return a cached access token', async () => {
    await expect(sharedFactory.get()).resolves.toEqual('ACCESS_TOKEN')
  })
})
