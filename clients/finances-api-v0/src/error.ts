export class FinancesApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FinancesApiError'
  }
}
