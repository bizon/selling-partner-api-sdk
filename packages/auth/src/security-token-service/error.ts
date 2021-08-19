import {SellingPartnerApiAuthError} from '../error'

export class SecurityTokenServiceError extends SellingPartnerApiAuthError {
  constructor(message: string) {
    super(message)

    this.code = 'SECURITY_TOKEN_SERVICE_ERROR'
  }

  get name() {
    return this.constructor.name
  }
}
