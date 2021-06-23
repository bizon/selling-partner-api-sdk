export class ShippingApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ShippingApiError'
  }
}
