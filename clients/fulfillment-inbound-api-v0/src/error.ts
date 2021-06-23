export class FulfillmentInboundApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FulfillmentInboundApiError'
  }
}
