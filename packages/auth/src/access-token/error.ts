
import {SellingPartnerApiAuthError} from '../error'

export class AccessTokenError extends SellingPartnerApiAuthError {
  readonly meta?: any

  constructor(message: string, meta?: any) {
    super(message)

    this.code = 'ACCESS_TOKEN_ERROR'
    this.meta = meta
  }

  get name() {
    return this.constructor.name
  }
}
