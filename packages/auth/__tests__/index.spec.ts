import nock from 'nock'

import {AuthorizationScope, SellingPartnerApiAuth, SellingPartnerApiAuthError} from '../src'

describe('src/index', () => {
  describe('constructor', () => {
    it('should fail for missing clientId', () => {
      expect(
        () =>
          new SellingPartnerApiAuth({
            clientSecret: 'FAKE_CLIENT_SECRET',
            refreshToken: 'FAKE_REFRESH_TOKEN',
          }),
      ).toThrow('Missing required `clientId` configuration value')
    })

    it('should fail for missing clientSecret', () => {
      expect(
        () =>
          new SellingPartnerApiAuth({
            clientId: 'FAKE_CLIENT_ID',
            refreshToken: 'FAKE_REFRESH_TOKEN',
          }),
      ).toThrow('Missing required `clientSecret` configuration value')
    })

    it('should fail if neither refreshToken or scopes is specified', () => {
      expect(
        () =>
          new SellingPartnerApiAuth({
            clientId: 'FAKE_CLIENT_ID',
            clientSecret: 'FAKE_CLIENT_SECRET',
          } as any),
      ).toThrow('Either `refreshToken` or `scopes` must be specified')
    })

    it('should create a SellingPartnerApiAuth instance', () => {
      const auth = new SellingPartnerApiAuth({
        clientId: 'FAKE_CLIENT_ID',
        clientSecret: 'FAKE_CLIENT_SECRET',
        refreshToken: 'FAKE_REFRESH_TOKEN',
      })

      expect(auth).toBeInstanceOf(SellingPartnerApiAuth)
    })
  })

  describe('getAccessToken', () => {
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

      const auth = new SellingPartnerApiAuth({
        clientId: 'CLIENT_ID',
        clientSecret: 'CLIENT_SECRET',
        refreshToken: 'REFRESH_TOKEN',
      })

      let authError: SellingPartnerApiAuthError
      try {
        await auth.getAccessToken()
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
          scope: AuthorizationScope.CLIENT_CREDENTIAL_ROTATION,
        })
        .replyWithError('unknown error')

      const auth = new SellingPartnerApiAuth({
        clientId: 'CLIENT_ID',
        clientSecret: 'CLIENT_SECRET',
        scopes: [AuthorizationScope.CLIENT_CREDENTIAL_ROTATION],
      })

      let authError: SellingPartnerApiAuthError
      try {
        await auth.getAccessToken()
      } catch (error: unknown) {
        if (error instanceof SellingPartnerApiAuthError) {
          authError = error
        }
      }

      expect(authError!.message).toBe('access-token error: No response')
    })

    const sharedAuth = new SellingPartnerApiAuth({
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

      await expect(sharedAuth.getAccessToken()).resolves.toEqual('ACCESS_TOKEN')
    })

    it('should return a cached access token', async () => {
      await expect(sharedAuth.getAccessToken()).resolves.toEqual('ACCESS_TOKEN')
    })

    it('should only make one HTTP request when called concurrently', async () => {
      const auth = new SellingPartnerApiAuth({
        clientId: 'CLIENT_ID',
        clientSecret: 'CLIENT_SECRET',
        refreshToken: 'REFRESH_TOKEN',
      })

      const scope = nock('https://api.amazon.com').post('/auth/o2/token').reply(200, {
        access_token: 'CONCURRENT_TOKEN',
        token_type: 'access_token',
        expires_in: 3600,
      })

      const [token1, token2, token3] = await Promise.all([
        auth.getAccessToken(),
        auth.getAccessToken(),
        auth.getAccessToken(),
      ])

      expect(token1).toBe('CONCURRENT_TOKEN')
      expect(token2).toBe('CONCURRENT_TOKEN')
      expect(token3).toBe('CONCURRENT_TOKEN')
      expect(scope.isDone()).toBe(true)
    })

    it('should allow retrying after a concurrent failure', async () => {
      const auth = new SellingPartnerApiAuth({
        clientId: 'CLIENT_ID',
        clientSecret: 'CLIENT_SECRET',
        refreshToken: 'REFRESH_TOKEN',
      })

      nock('https://api.amazon.com').post('/auth/o2/token').reply(500, {error: 'server error'})

      const results = await Promise.allSettled([auth.getAccessToken(), auth.getAccessToken()])

      expect(results[0].status).toBe('rejected')
      expect(results[1].status).toBe('rejected')

      // Subsequent call should retry (not return stale rejection)
      nock('https://api.amazon.com').post('/auth/o2/token').reply(200, {
        access_token: 'RECOVERED_TOKEN',
        token_type: 'access_token',
        expires_in: 3600,
      })

      await expect(auth.getAccessToken()).resolves.toBe('RECOVERED_TOKEN')
    })
  })
})
