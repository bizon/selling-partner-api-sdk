import {AxiosError} from 'axios'

import type {AccessTokenData, AccessTokenQuery} from './types/access-token'

/**
 * Error thrown when an LWA token request fails.
 *
 * Wraps the underlying Axios error with a human-readable message that includes
 * the HTTP status code (or "No response" for network errors).
 */
export class SellingPartnerApiAuthError extends AxiosError<AccessTokenData, AccessTokenQuery> {
  /** The original error message from the failed HTTP request. */
  public readonly innerMessage: string

  constructor(error: AxiosError<AccessTokenData, AccessTokenQuery>) {
    const message = error.response
      ? `access-token error: Response code ${error.response.status}`
      : 'access-token error: No response'

    super(message, error.code, error.config, error.request, error.response)

    this.innerMessage = error.message
    this.name = this.constructor.name
  }
}
