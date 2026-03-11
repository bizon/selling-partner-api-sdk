import {URL} from 'node:url'

import {AxiosError} from 'axios'

/**
 * Error thrown when a Selling Partner API request fails.
 *
 * Wraps the underlying Axios error with a message that includes the API name,
 * version, and HTTP status code (or "No response" for network errors).
 */
export class SellingPartnerApiError<T = unknown, D = any> extends AxiosError<T, D> {
  /** The original error message from the failed HTTP request. */
  public readonly innerMessage: string
  /** The API name extracted from the request URL path (e.g. `"orders"`). */
  public readonly apiName?: string
  /** The API version extracted from the request URL path (e.g. `"v0"`). */
  public readonly apiVersion?: string

  constructor(error: AxiosError<T, D>) {
    super('Unknown error', error.code, error.config, error.request, error.response)

    this.innerMessage = error.message

    if (error.config!.url) {
      const [apiName, apiVersion] = new URL(error.config!.url).pathname.split('/').slice(1)
      const apiPrefix = `${apiName} (${apiVersion})`

      this.apiName = apiName
      this.apiVersion = apiVersion
      this.message = error.response
        ? `${apiPrefix} error: Response code ${error.response.status}`
        : `${apiPrefix} error: No response`
    }

    this.name = this.constructor.name
  }
}
