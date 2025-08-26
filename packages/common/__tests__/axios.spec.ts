import {AxiosError} from 'axios'
import nock from 'nock'
import stripAnsi from 'strip-ansi'

import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import {createAxiosInstance} from '../src/axios'
import {SellingPartnerApiError} from '../src/errors'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuthError: jest.requireActual('@sp-api-sdk/auth').SellingPartnerApiAuthError,
  SellingPartnerApiAuth: jest.fn(() => ({
    getAccessToken: jest.fn(async () => 'FAKE_ACCESS_TOKEN'),
  })),
}))

describe('src/axios', () => {
  it('should throw if the region does not exist', () => {
    expect(() => {
      createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'foo' as any,
        },
        [],
      )
    }).toThrow('Unknown or unsupported region: foo')
  })

  describe('Rate Limiting', () => {
    it('should retry one time', async () => {
      nock('https://www.example.com')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(200, 'OK')

      const onRetry = jest.fn()
      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          rateLimiting: {
            retry: true,
            onRetry,
          },
        },
        [{method: 'get', urlRegex: /^\/test$/, rate: 1, burst: 1}],
      )

      const response = await axios.get('https://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toHaveBeenCalledTimes(1)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({
        rateLimit: 1,
        delay: 2500,
        retryCount: 1,
        error: expect.any(AxiosError),
      })
    })

    it('should retry two times', async () => {
      nock('https://www.example.com')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(429, 'rate limited')
        .get('/test')
        .reply(200, 'OK')

      const onRetry = jest.fn()
      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          rateLimiting: {
            retry: true,
            onRetry,
          },
        },
        [{method: 'GET', urlRegex: /^\/test$/, rate: 0.5, burst: 1}],
      )

      const response = await axios.get('https://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toHaveBeenCalledTimes(2)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({
        rateLimit: 0.5,
        delay: 3500,
        retryCount: 1,
        error: expect.any(AxiosError),
      })
      expect(onRetry.mock.calls[1][0]).toStrictEqual({
        rateLimit: 0.5,
        delay: 3500,
        retryCount: 2,
        error: expect.any(AxiosError),
      })
    }, 30_000)

    it('should take x-amzn-RateLimit-Limit if it exits', async () => {
      nock('https://www.example.com')
        .get('/test')
        .reply(429, 'rate limited', {'x-amzn-RateLimit-Limit': '1'})
        .get('/test')
        .reply(200, 'OK')

      const onRetry = jest.fn()
      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          rateLimiting: {
            retry: true,
            onRetry,
          },
        },
        [{method: 'get', urlRegex: /^\/test$/, rate: 0.5, burst: 1}],
      )

      const response = await axios.get('https://www.example.com/test')

      expect(response.data).toBe('OK')
      expect(response.status).toBe(200)
      expect(onRetry).toHaveBeenCalledTimes(1)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({
        rateLimit: 1,
        delay: 2500,
        retryCount: 1,
        error: expect.any(AxiosError),
      })
    })
  })

  describe('Logging', () => {
    it('should allow logging requests', async () => {
      nock('https://www.example.com').get('/test?foo=bar').reply(200)
      const requestLogger = jest.fn<string, any>()

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          logging: {
            request: {
              dateFormat: false,
              logger: requestLogger,
            },
          },
        },
        [],
      )

      await axios.get('https://www.example.com/test?foo=bar')

      expect(requestLogger).toHaveBeenCalledTimes(1)
      expect(stripAnsi(requestLogger.mock.calls[0][0])).toBe(
        '[sp-api-sdk/eu][Request] GET https://www.example.com/test?foo=bar',
      )
    })

    it('should allow logging responses', async () => {
      nock('https://www.example.com').get('/test').reply(200, undefined, {
        'x-test-header': 'header',
      })
      const responseLogger = jest.fn<string, any>()

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          logging: {
            response: {
              dateFormat: false,
              logger: responseLogger,
            },
          },
        },
        [],
      )

      await axios.get('https://www.example.com/test')

      expect(responseLogger).toHaveBeenCalledTimes(1)
      expect(stripAnsi(responseLogger.mock.calls[0][0])).toBe(
        '[sp-api-sdk/eu][Response] GET https://www.example.com/test 200 {"x-test-header":"header"}',
      )
    })

    it('should allow logging response errors', async () => {
      nock('https://www.example.com').get('/test/error').reply(404, 'Not found', {
        'x-test-header': 'header',
      })
      const errorLogger = jest.fn<string, any>()

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          logging: {
            error: {
              dateFormat: false,
              logger: errorLogger,
            },
          },
        },
        [],
      )

      await expect(axios.get('https://www.example.com/test/error')).rejects.toThrow(
        'test (error) error: Response code 404',
      )

      expect(errorLogger).toHaveBeenCalledTimes(1)
      expect(stripAnsi(errorLogger.mock.calls[0][0])).toBe(
        '[sp-api-sdk/eu][Error] GET https://www.example.com/test/error 404 {"x-test-header":"header"}',
      )
    })

    it('should allow logging a successful request with everything enabled', async () => {
      nock('https://www.example.com').get('/test?foo=bar').reply(200)
      const requestLogger = jest.fn<string, any>()
      const responseLogger = jest.fn<string, any>()
      const errorLogger = jest.fn<string, any>()

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          logging: {
            request: {
              logger: requestLogger,
            },
            response: {
              logger: responseLogger,
            },
            error: {
              logger: errorLogger,
            },
          },
        },
        [],
      )

      await axios.get('https://www.example.com/test?foo=bar')

      expect(requestLogger).toHaveBeenCalledTimes(1)
      expect(responseLogger).toHaveBeenCalledTimes(1)
      expect(errorLogger).toHaveBeenCalledTimes(0)
    })

    it('should allow logging a failed request with everything enabled', async () => {
      nock('https://www.example.com').get('/test/error?foo=bar').reply(404)
      const requestLogger = jest.fn<string, any>()
      const responseLogger = jest.fn<string, any>()
      const errorLogger = jest.fn<string, any>()

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
          logging: {
            request: {
              logger: requestLogger,
            },
            response: {
              logger: responseLogger,
            },
            error: {
              logger: errorLogger,
            },
          },
        },
        [],
      )

      await expect(axios.get('https://www.example.com/test/error?foo=bar')).rejects.toThrow(
        'test (error) error: Response code 404',
      )

      expect(requestLogger).toHaveBeenCalledTimes(1)
      expect(responseLogger).toHaveBeenCalledTimes(0)
      expect(errorLogger).toHaveBeenCalledTimes(1)
    })
  })

  describe('Handling response with status != 2xx', () => {
    it('should throw a SellingPartnerApiError instance', async () => {
      nock('https://www.example.com').get('/test').reply(400, 'rate limited')

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
        },
        [],
      )

      await expect(axios.get('https://www.example.com/test')).rejects.toThrow(
        SellingPartnerApiError,
      )
    })

    it('should throw an error when the reponse has errored', async () => {
      nock('https://www.example.com').get('/apiName/apiVersion/path').reply(429, 'rate limited')

      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
        },
        [],
      )

      await expect(axios.get('https://www.example.com/apiName/apiVersion/path')).rejects.toThrow(
        'apiName (apiVersion) error: Response code 429',
      )
    })

    it('should throw when there wasn’t a response', async () => {
      const {axios} = createAxiosInstance(
        {
          auth: new SellingPartnerApiAuth({refreshToken: ''}),
          region: 'eu',
        },
        [],
      )

      await expect(
        axios.get('https://fake-domain-that-does-not-exist.bizon/apiName/apiVersion/path'),
      ).rejects.toThrow('apiName (apiVersion) error: No response')
    })
  })
})
