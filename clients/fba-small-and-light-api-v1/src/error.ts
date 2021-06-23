export class FbaSmallAndLightApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FbaSmallAndLightApiError'
  }
}
