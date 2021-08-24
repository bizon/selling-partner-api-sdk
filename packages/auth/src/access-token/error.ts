
import {SellingPartnerApiAuthError} from '../error'

export class AccessTokenError extends SellingPartnerApiAuthError {
  readonly meta?: any

  constructor(message: string, meta?: any) {
    super(message)

    this.code = 'ACCESS_TOKEN_ERROR'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.meta = meta
  }

  get name() {
    return this.constructor.name
  }
}
