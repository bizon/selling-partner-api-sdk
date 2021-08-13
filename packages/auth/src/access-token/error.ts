export class AccessTokenError extends Error {
  readonly meta?: any

  constructor(message: string, meta?: any) {
    super(message)

    this.name = 'AccessTokenError'
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.meta = meta
  }
}
