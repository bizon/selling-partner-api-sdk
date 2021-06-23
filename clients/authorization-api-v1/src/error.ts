export class AuthorizationApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthorizationApiError'
  }
}
