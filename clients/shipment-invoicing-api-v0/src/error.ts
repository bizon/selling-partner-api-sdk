export class ShipmentInvoicingApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ShipmentInvoicingApiError'
  }
}
