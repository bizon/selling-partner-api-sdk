export class UploadsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'UploadsApiError'
  }
}
