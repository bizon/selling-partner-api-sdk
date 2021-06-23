export class VendorTransactionStatusApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VendorTransactionStatusApiError'
  }
}
