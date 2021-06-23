export class ReportsApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ReportsApiError'
  }
}
