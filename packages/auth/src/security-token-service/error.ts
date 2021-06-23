export class SecurityTokenServiceError extends Error {
  constructor(message: string) {
    super(message)

    this.name = 'SecurityTokenServiceError'
  }
}
