export class VendorInvoicesApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VendorInvoicesApiError'
  }
}
