import nock from 'nock'
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {createAxiosInstance} from '../../src/axios'
import {SellingPartnerApiError} from '../../src/selling-partner-api-error'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuth: jest.fn(() => ({
    accessToken: {
      get: jest.fn(() => 'FAKE_ACCESS_TOKEN'),
    },
    getCredentials: jest.fn(),
  })),
}))

describe('src/axios/create-instance', () => {
  describe('Rate Limiting', () => {
    it('should retry one time', async () => {
      nock('http://www.example.com')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(200, 'OK')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const onRetry = jest.fn()
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
        rateLimits: [{method: 'get', urlRegex: /^\/test$/, rate: 1, burst: 1}],
        onRetry,
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(1)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
    })

    it('should retry two times', async () => {
      nock('http://www.example.com')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(200, 'OK')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const onRetry = jest.fn()
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
        rateLimits: [{method: 'GET', urlRegex: /^\/test$/, rate: 0.5, burst: 1}],
        onRetry,
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(2)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(onRetry.mock.calls[1][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
    }, 30_000)

    it('should take x-amzn-RateLimit-Limit if it exits', async () => {
      nock('http://www.example.com')
        .get('/test')
        .reply(429, 'rate limited', {'x-amzn-RateLimit-Limit': '1'})
        .get('/test')
        .reply(200, 'OK')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const onRetry = jest.fn()
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
        rateLimits: [{method: 'get', urlRegex: /^\/test$/, rate: 0.5, burst: 1}],
        onRetry,
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(1)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
    })
  })

  describe('Handling response with status != 2xx', () => {
    it('should throw a SellingPartnerApiError instance', async () => {
      nock('http://www.example.com')
        .get('/test')
        .reply(400, 'rate limited')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(instance.get('http://www.example.com/test')).rejects.toThrow(SellingPartnerApiError)
    })

    it('should have the good message when a response has been sent', async () => {
      nock('http://www.example.com')
        .get('/apiName/apiVersion/path')
        .reply(429, 'rate limited')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(instance.get('http://www.example.com/apiName/apiVersion/path')).rejects.toThrow('apiName (apiVersion) error: Response code 429')
    })

    it('should have the good message when a response hasn’t been sent', async () => {
      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(instance.get('http://www.test_fake_url.com/apiName/apiVersion/path')).rejects.toThrow('apiName (apiVersion) error: No response')
    })
  })
})
