export class OrdersApiError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'OrdersApiError'
	}
}
