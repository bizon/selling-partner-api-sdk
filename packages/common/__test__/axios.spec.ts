import nock from 'nock'
import stripAnsi from 'strip-ansi'
import {SellingPartnerApiAuth} from '@sp-api-sdk/auth'

import {createAxiosInstance} from '../src/axios'
import {SellingPartnerApiError} from '../src/errors'

jest.mock('@sp-api-sdk/auth', () => ({
  SellingPartnerApiAuth: jest.fn(() => ({
    accessToken: {
      get: jest.fn(() => 'FAKE_ACCESS_TOKEN'),
    },
    getCredentials: jest.fn(),
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
      expect(onRetry).toBeCalledTimes(1)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
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
      expect(onRetry).toBeCalledTimes(2)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
      expect(onRetry.mock.calls[1][0]).toStrictEqual({rateLimit: 0.5, delay: 3500})
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
      expect(onRetry).toBeCalledTimes(1)
      expect(onRetry.mock.calls[0][0]).toStrictEqual({rateLimit: 1, delay: 2500})
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
          sandbox: true,
        },
        [],
      )

      await expect(
        axios.get('https://fake-domain-that-does-not-exist.bizon/apiName/apiVersion/path'),
      ).rejects.toThrow('apiName (apiVersion) error: No response')
    })
  })
})
