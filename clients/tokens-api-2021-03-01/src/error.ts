export class TokensApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TokensApiError'
  }
}
