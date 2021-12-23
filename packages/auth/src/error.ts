type SellingPartnerApiAuthErrorCode =
  | 'ACCESS_TOKEN_ERROR'
  | 'SECURITY_TOKEN_SERVICE_ERROR'
  | 'SELLING_PARTNER_API_AUTH_ERROR'
export class SellingPartnerApiAuthError extends Error {
  public code: SellingPartnerApiAuthErrorCode

  constructor(
    message: string,
    code: SellingPartnerApiAuthErrorCode = 'SELLING_PARTNER_API_AUTH_ERROR',
  ) {
    super(message)

    this.code = code
  }

  get name() {
    return this.constructor.name
  }
}
