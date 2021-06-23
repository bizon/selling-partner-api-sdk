export class ProductTypeDefinitionsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ProductTypeDefinitionsApiError'
  }
}
