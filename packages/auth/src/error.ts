import {AxiosError} from 'axios'

import type {AccessTokenData, AccessTokenQuery} from './types/access-token'

export class SellingPartnerApiAuthError extends AxiosError<AccessTokenData, AccessTokenQuery> {
  public readonly innerMessage: string

  constructor(error: AxiosError<AccessTokenData, AccessTokenQuery>) {
    const message = error.response
      ? `access-token error: Response code ${error.response.status}`
      : `access-token error: No response`

    super(message, error.code, error.config, error.request, error.response)

    this.innerMessage = error.message
    this.name = this.constructor.name
  }
}
