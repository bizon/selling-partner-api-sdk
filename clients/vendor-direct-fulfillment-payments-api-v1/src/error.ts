export class VendorDirectFulfillmentPaymentsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VendorDirectFulfillmentPaymentsApiError'
  }
}
