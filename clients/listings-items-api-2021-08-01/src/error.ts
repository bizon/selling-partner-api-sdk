export class ListingsItemsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ListingsItemsApiError'
  }
}
