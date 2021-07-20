/* eslint-disable-next-line import/no-extraneous-dependencies */
import nock from 'nock'
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'
import {createAxiosInstance} from '../../src/axios'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuth: jest.fn(() => ({
    accessToken: {
      get: jest.fn(() => 'FAKE_ACCESS_TOKEN')
    },
    getCredentials: jest.fn()
  }))
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
        onRetry
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(1)
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
        onRetry
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(2)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
      expect(onRetry.mock.calls[1][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
    }, 30000)

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
        onRetry
      })

      const response = await instance.get('http://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toBeCalledTimes(1)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
    })
  })
})
