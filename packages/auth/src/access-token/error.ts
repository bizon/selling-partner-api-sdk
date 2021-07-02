export class AccessTokenError extends Error {
  readonly meta?: any

  constructor(message: string, meta?: any) {
    super(message)

    this.name = 'AccessTokenError'
    this.meta = meta
  }
}
