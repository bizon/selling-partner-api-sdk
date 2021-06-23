export class FeedsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FeedsApiError'
  }
}
