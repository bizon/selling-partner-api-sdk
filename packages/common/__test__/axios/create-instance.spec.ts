import nock from 'nock'
import stripAnsi from 'strip-ansi'
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import {createAxiosInstance} from '../../src/axios'
import {SellingPartnerApiError} from '../../src/errors'

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
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
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
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
    })
  })

  describe('Logging', () => {
    it('should allow logging requests', async () => {
      nock('http://www.example.com').get('/test?foo=bar').reply(200)
      const requestLogger = jest.fn<string, any>()

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
        logging: {
          request: {
            logger: requestLogger,
          },
        },
      })

      await instance.get('http://www.example.com/test?foo=bar')

      expect(requestLogger).toHaveBeenCalledTimes(1)
      expect(stripAnsi(requestLogger.mock.calls[0][0])).toBe(
        '[sp-api-sdk/eu][Request] GET http://www.example.com/test?foo=bar',
      )
    })

    it('should allow logging responses', async () => {
      nock('http://www.example.com').get('/test').reply(200, undefined, {
        'x-test-header': 'header',
      })
      const responseLogger = jest.fn<string, any>()

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'na',
        logging: {
          response: {
            logger: responseLogger,
          },
        },
      })

      await instance.get('http://www.example.com/test')

      expect(responseLogger).toHaveBeenCalledTimes(1)
      expect(stripAnsi(responseLogger.mock.calls[0][0])).toBe(
        '[sp-api-sdk/na][Response] GET http://www.example.com/test 200 {"x-test-header":"header"}',
      )
    })
  })

  describe('Handling response with status != 2xx', () => {
    it('should throw a SellingPartnerApiError instance', async () => {
      nock('http://www.example.com').get('/test').reply(400, 'rate limited')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(instance.get('http://www.example.com/test')).rejects.toThrow(
        SellingPartnerApiError,
      )
    })

    it('should throw an error when the reponse has errored', async () => {
      nock('http://www.example.com').get('/apiName/apiVersion/path').reply(429, 'rate limited')

      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(instance.get('http://www.example.com/apiName/apiVersion/path')).rejects.toThrow(
        'apiName (apiVersion) error: Response code 429',
      )
    })

    it('should throw when there wasn’t a response', async () => {
      const auth = new SellingPartnerApiAuth({refreshToken: ''})
      const instance = createAxiosInstance({
        auth,
        region: 'eu',
      })

      await expect(
        instance.get('http://www.test_fake_url.com/apiName/apiVersion/path'),
      ).rejects.toThrow('apiName (apiVersion) error: No response')
    })
  })
})
