export class ListingsRestrictionsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ListingsRestrictionsApiError'
  }
}
