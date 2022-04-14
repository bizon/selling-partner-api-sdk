export class EasyShipError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EasyShipError'
  }
}
