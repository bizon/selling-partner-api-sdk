export class MessagingApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MessagingApiError'
  }
}
