export class CatalogItemsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'CatalogItemsApiError'
  }
}
