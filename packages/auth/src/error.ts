export class SellingPartnerApiAuthError extends Error {
  constructor(message: string) {
    super(message)

    this.name = 'SellingPartnerApiAuthError'
  }
}
