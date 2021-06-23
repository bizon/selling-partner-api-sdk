export class VendorDirectFulfillmentTransactionsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VendorDirectFulfillmentTransactionsApiError'
  }
}
