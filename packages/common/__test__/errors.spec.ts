import {AxiosError} from 'axios'

import {SellingPartnerApiError} from '../src/errors'

describe('src/errors', () => {
  const testError = new SellingPartnerApiError(new AxiosError('Original message', 'Code', {}))

  it('should expose the original axios error message', () => {
    expect(testError.innerMessage).toBe('Original message')
  })

  it('should be an instance of Error', () => {
    expect(testError).toBeInstanceOf(Error)
  })

  it('should be an instance of AxiosError', () => {
    expect(testError).toBeInstanceOf(AxiosError)
  })

  it('should be an instance of SellingPartnerApiError', () => {
    expect(testError).toBeInstanceOf(SellingPartnerApiError)
  })

  it('should extract the apiName and apiVersion from the config URL', () => {
    const error = new SellingPartnerApiError(
      new AxiosError('Message', 'Code', {
        url: 'https://domain/api-name/api-version?param=foo',
      }),
    )

    expect(error.apiName).toBe('api-name')
    expect(error.apiVersion).toBe('api-version')
  })

  it('should extract the status code from the axios response', () => {
    const config = {
      url: 'https://domain/api-name/api-version?param=foo',
    }

    const error = new SellingPartnerApiError(
      new AxiosError(
        'Message',
        'Code',
        config,
        {},
        {
          data: null,
          status: 404,
          statusText: 'Not found',
          config,
          headers: {},
        },
      ),
    )

    expect(error.message).toBe('api-name (api-version) error: Response code 404')
    expect(error.toJSON()).toMatchSnapshot()
  })

  it('should handle response-less errors', () => {
    const error = new SellingPartnerApiError(
      new AxiosError(
        'Message',
        'Code',
        {
          url: 'https://domain/api-name/api-version?param=foo',
        },
        {},
      ),
    )

    expect(error.message).toBe('api-name (api-version) error: No response')
    expect(error.toJSON()).toMatchSnapshot()
  })
})
