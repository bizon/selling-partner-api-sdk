export class VendorDirectFulfillmentShippingApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'VendorDirectFulfillmentShippingApiError'
  }
}
