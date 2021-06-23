export class MerchantFulfillmentApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MerchantFulfillmentApiError'
  }
}
